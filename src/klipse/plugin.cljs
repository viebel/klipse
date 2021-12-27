(ns klipse.plugin
  (:require-macros
    [gadjett.core :refer [dbg]]
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [klipse.common.registry :refer [selector->mode mode-options]]
    [klipse.args-from-element :refer [editor-args-from-element eval-args-from-element content]]
    [klipse.klipse-editors :refer [create-editor]]
    [klipse.utils :refer [load-scripts-mem securize-eval! default-forbidden-symbols]]
    [cljs.spec.alpha :as s]
    [clojure.walk :refer [keywordize-keys]]
    [clojure.string :refer [join]]
    [goog.dom :refer [isElement]]
    [cljs.core.async :refer [chan <! >! timeout]]
    [gadjett.collections :refer [collify compactize-map]]))

(def out-placeholder "the evaluation will appear here (soon)...")

(def event-chan
  "This channel is posted to a snippet number whenever an edit is made on a snippet"
  (chan 10))

(def snippet-counter (atom 0))

(defn snippet-num! []
  (let [res @snippet-counter]
    (swap! snippet-counter inc)
    res))

(defn calc-editor-args-from-element [element global-idle-msec min-idle-msec global-editor-type]
  (let [{:keys [idle-msec editor-type preamble async-code? loop-msec] :or {idle-msec global-idle-msec editor-type global-editor-type loop-msec nil}} (editor-args-from-element element)]
    (compactize-map {:idle-msec (max min-idle-msec idle-msec)
                     :loop-msec loop-msec
                     :preamble preamble
                     :async-code? async-code?
                     :the-editor-type editor-type})))

(defn calc-editor-type [minimalistic_ui? the-type]
  (if minimalistic_ui?
    :dom
    (case the-type
      "code-mirror" :code-mirror
      "dom" :dom
      "html" :html
      :code-mirror)))

(defn load-external-scripts [scripts no-dynamic-scripts?]
  (go
    (if no-dynamic-scripts?
      [:ok :ok]
      (let [[status http-status script] (<! (load-scripts-mem scripts))]
        (if (= :ok status)
          [:ok :ok]
          [:error (str "Cannot load script: " script "\n" "Error: " http-status)])))))

(defn klipsify-with-opts
  "returns a channel c with a function f.
  f returns a channel that will be ready to read when the snippet is evaluated."
  [element
   {:keys [no_dynamic_scripts eval_idle_msec minimalistic_ui editor_type print_length beautify_strings eval_context codemirror_options_in codemirror_options_out] :or {beautify_strings false print_length 1000 eval_idle_msec 20 minimalistic_ui false codemirror_options_in {} codemirror_options_out {}}}
   {:keys [editor-in-mode editor-out-mode eval-fn comment-str beautify? beautify-output? min-eval-idle-msec external-scripts default-editor no-result] :as lang-opts :or {min-eval-idle-msec 0 beautify? true beautify-output? true external-scripts []}}
   mode]
  (go (when element
        (let [eval-args (eval-args-from-element element {:eval-context eval_context :print-length print_length :beautify-strings beautify_strings})
              eval-fn-with-args #(eval-fn %1 (merge eval-args %2))
              source-code (<! (content element comment-str))
              {:keys [idle-msec the-editor-type loop-msec async-code? preamble]} (calc-editor-args-from-element element eval_idle_msec min-eval-idle-msec editor_type)
              the-editor-type (calc-editor-type minimalistic_ui (or the-editor-type default-editor))
              [load-status load-error] (<! (load-external-scripts (collify external-scripts) no_dynamic_scripts))]
          (create-editor the-editor-type
                         {:element element
                          :mode mode
                          :snippet-num (snippet-num!)
                          :loop-msec loop-msec
                          :async-code? async-code?
                          :no-result no-result
                          :preamble preamble
                          :indent? (if (= :ok load-status) beautify? false)
                          :indent-output? (if (= :ok load-status) beautify-output? false)
                          :editor-in-mode editor-in-mode
                          :editor-out-mode editor-out-mode
                          :codemirror-options-in codemirror_options_in
                          :codemirror-options-out codemirror_options_out
                          :eval-fn (if (= :ok load-status) eval-fn-with-args #(chan))
                          :source-code source-code
                          :default-txt (if (= :ok load-status) out-placeholder load-error)
                          :idle-msec idle-msec
                          :on-edit-cb #(go (>! event-chan %))})))))

(s/def ::dom-element isElement)
(s/def ::editor-in-mode string?)
(s/def ::editor-out-mode string?)
(s/def ::eval-fn fn?)
(s/def ::comment-str (s/or :fn fn? :str string?))
(s/def ::eval_idle_msec integer?)
(s/def ::minimalistic_ui #(or (= % true) (= % false)))

(s/def ::options (s/keys :req-un [::editor-in-mode ::editor-out-mode ::eval-fn ::comment-str]))
(s/def ::klipse-settings (s/keys :opt-un [::eval_idle_msec ::minimalistic_ui]))

(s/fdef klipsify-with-opts
        :args (s/cat :element ::dom-element
                     :settings ::klipse-settings
                     :opts ::options))

(defn ^:export klipsify
  "To be called from outside.
  Klipsifies a snippet.
  Returns a channel that will be ready when the snippet is evaluated."
  [element general-settings mode]
  (if-let [opts (@mode-options mode)]
    ;; weird piece of code - see klipsify-with-opts docstring
    (go (<! ((<! (klipsify-with-opts element general-settings opts mode)))))
    (go (js/console.error "cannot find options for mode: " mode ". Supported modes: " (keys @mode-options)))))

(defn ^:export klipsify-no-eval [element general-settings mode]
  (if-let [opts (@mode-options mode)]
    (klipsify-with-opts element general-settings opts mode)
    (go #(go (js/console.error "cannot find options for mode: " mode ". Supported modes: " (keys @mode-options))))))

(defn edit-elements [elements general-settings modes]
  (go
    (loop [elements elements eval-fns []]
      (if (seq elements)
        (let [element (first elements)]
          (if-let [mode (modes element)]
            (let [eval-fn (<! (klipsify-no-eval element general-settings mode))]
              (recur (rest elements) (conj eval-fns eval-fn)))
            (recur (rest elements) eval-fns)))
        eval-fns))))

(defn eval-snippets-on-change [{:keys [re_evaluate_all_snippets_on_change]} eval-fns]
  (when re_evaluate_all_snippets_on_change
    (go-loop [_idx (<! event-chan)]  ;; `idx` is the index of element that was edited, ignored for now
      (doseq [f eval-fns]
        (f))
      (recur (<! event-chan)))))

(defn klipsify-elements [elements general-settings modes]
  (go
    (let [eval-fns (<! (edit-elements elements general-settings modes))]
      (doseq [eval-fn eval-fns]
        (<! (eval-fn)))
      (eval-snippets-on-change general-settings eval-fns))))

(defn snippets-selector [settings selector-names]
  (->> (map settings selector-names)
       (remove nil?)
       (join "," )))

(defn seq-from-selector [selector]
  (-> (js/document.querySelectorAll selector)
      array-seq))

(defn elements->mode [settings]
  (into {}
        (for [selector-name (keys @selector->mode)
              :let [selector (settings selector-name)]
              :when selector
              element (seq-from-selector selector)]
          [element (@selector->mode selector-name)])))

(defn ^:export init-clj [settings]
  (let [{:keys [secured_eval security_forbidden_symbols]
         :as keywordized-settings
         :or {security_forbidden_symbols (default-forbidden-symbols)}}
        (keywordize-keys settings)
        modes (elements->mode settings)
        elements (seq-from-selector (snippets-selector settings (keys @selector->mode)))]
    (when secured_eval (securize-eval! security_forbidden_symbols))
    (klipsify-elements elements keywordized-settings modes)))

(defn ^:export init [js-settings]
  (init-clj (js->clj js-settings :keywordize-keys false))); we cannot keywordize the keys as the modules might be written in javascript

(comment
  (s/instrument #'klipsify-with-opts))
