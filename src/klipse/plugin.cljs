(ns klipse.plugin
  (:require-macros
    [gadjett.core :refer [dbg]]
    [cljs.core.async.macros :refer [go]])
  (:require 
    [klipse.common.registry :refer [selector->mode mode-options]]
    [klipse.args-from-element :refer [editor-args-from-element eval-args-from-element content]]
    [klipse.klipse-editors :refer [create-editor]]
    [cljs.spec :as s]
    [clojure.walk :refer [keywordize-keys]]
    [clojure.string :refer [join]]
    [goog.dom :refer [isElement]]
    [cljs.core.async :refer [<! timeout]]
    [gadjett.collections :refer [compactize-map]]))

(def out-placeholder ";the evaluation will appear here (soon)...")

(defn calc-editor-args-from-element [element global-idle-msec min-idle-msec global-editor-type]
  (let [{:keys [idle-msec editor-type preamble loop-msec] :or {idle-msec global-idle-msec editor-type global-editor-type loop-msec nil}} (editor-args-from-element element)]
    (compactize-map {:idle-msec (max min-idle-msec idle-msec)
                     :loop-msec loop-msec
                     :preamble preamble
                     :editor-type editor-type})))

(defn calc-editor-type [minimalistic_ui? the-type]
  (if minimalistic_ui?
    :dom
    (case the-type
      "code-mirror" :code-mirror
      "dom" :dom
      "html" :html
      :code-mirror)))

(defn klipsify-with-opts
  "returns a channel c with a function f.
  f returns a channel that will be ready to read when the snippet is evaluated."
  [element {:keys [eval_idle_msec minimalistic_ui editor_type print_length beautify_strings eval_context codemirror_options_in codemirror_options_out] :or {beautify_strings false print_length 1000 eval_idle_msec 20 minimalistic_ui false codemirror_options_in {} codemirror_options_out {}}} {:keys [editor-in-mode editor-out-mode eval-fn comment-str beautify? min-eval-idle-msec external-scripts] :or {min-eval-idle-msec 0 beautify? true external-scripts []}}]
  (go (when element
        (let [eval-args (eval-args-from-element element {:eval-context eval_context :print-length print_length :beautify-strings beautify_strings})
              eval-fn-with-args #(eval-fn % eval-args)
              source-code (<! (content element comment-str))
              {:keys [idle-msec editor-type loop-msec preamble]} (calc-editor-args-from-element element eval_idle_msec min-eval-idle-msec editor_type)
              editor-type (calc-editor-type minimalistic_ui editor-type)]
          (create-editor editor-type {:element element
                                      :loop-msec loop-msec
                                      :external-scripts external-scripts
                                      :preamble preamble
                                      :beautify? beautify?
                                      :editor-in-mode editor-in-mode
                                      :editor-out-mode editor-out-mode
                                      :codemirror-options-in codemirror_options_in
                                      :codemirror-options-out codemirror_options_out
                                      :eval-fn eval-fn-with-args
                                      :source-code source-code
                                      :default-txt out-placeholder
                                      :idle-msec idle-msec})))))

(s/def ::dom-element isElement)
(s/def ::editor-in-mode string?)
(s/def ::editor-out-mode string?)
(s/def ::eval-fn fn?)
(s/def ::comment-str string?)
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
    (go (<! ((<! (klipsify-with-opts element general-settings opts)))))
    (go (js/console.error "cannot find options for mode: " mode ". Supported modes: " (keys @mode-options)))))

(defn ^:export klipsify-no-eval [element general-settings mode]
  (if-let [opts (@mode-options mode)]
    (klipsify-with-opts element general-settings opts)
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

(defn klipsify-elements [elements general-settings modes]
  (go
    (let [eval-fns (<! (edit-elements elements general-settings modes))]
      (doseq [eval-fn eval-fns]
        (<! (eval-fn))))))

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
  (let [keywordized-settings (keywordize-keys settings)
        modes (elements->mode settings)
        elements (seq-from-selector (snippets-selector settings (keys @selector->mode)))]
    (klipsify-elements elements keywordized-settings modes)))

(defn ^:export init [js-settings]
  (init-clj (js->clj js-settings :keywordize-keys false))); we cannot keywordize the keys as the modules might be written in javascript

(comment
  (s/instrument #'klipsify-with-opts))
