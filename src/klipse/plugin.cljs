(ns klipse.plugin
  (:require-macros
    [cljs.core.async.macros :refer [go]])
  (:require 
    [klipse.args-from-element :refer [editor-args-from-element eval-args-from-element content]]
    [klipse.klipse-editors :refer [create-editor]]
    [cljs.spec :as s]
    [clojure.walk :refer [keywordize-keys]]
    [goog.dom :refer [isElement]]
    [cljs.core.async :refer [<!]]
    [gadjett.core :as gadjett :refer-macros [dbg]]))

(enable-console-print!)
(def selector->mode (atom {}))
(def mode-options (atom {}))
(def out-placeholder ";the evaluation will appear here (soon)...")

(defn register-mode [mode selector opts]
  (print "register-mode: " mode selector)
  (swap! selector->mode assoc selector mode)
  (swap! mode-options assoc mode opts))

(defn calc-editor-args-from-element [element global-idle-msec min-idle-msec]
  (let [{:keys [idle-msec] :or {idle-msec global-idle-msec}} (editor-args-from-element element)]
    {:idle-msec (max min-idle-msec idle-msec)}))

(defn editor-type [minimalistic_ui? the-type]
  (if minimalistic_ui?
    :dom
    (case the-type
      "code-mirror" :code-mirror
      "dom" :dom
      "html" :html)))

(defn klipsify-with-opts [element {:keys [eval_idle_msec minimalistic_ui editor_type codemirror_options_in codemirror_options_out] :or {eval_idle_msec 20 minimalistic_ui false codemirror_options_in {} codemirror_options_out {}}} {:keys [editor-in-mode editor-out-mode eval-fn comment-str beautify? min-eval-idle-msec] :or {min-eval-idle-msec 0 beautify? true}}]
  (go
    (when element
      (let [eval-args (eval-args-from-element element)
            eval-fn-with-args #(eval-fn % eval-args)
            source-code (<! (content element comment-str))
            {:keys [idle-msec]} (calc-editor-args-from-element element eval_idle_msec min-eval-idle-msec)
            editor-type (editor-type minimalistic_ui editor_type)]
        (<! (create-editor editor-type {:element element
                                        :beautify? beautify?
                                        :editor-in-mode editor-in-mode
                                        :editor-out-mode editor-out-mode
                                        :codemirror-options-in codemirror_options_in
                                        :codemirror-options-out codemirror_options_out
                                        :eval-fn eval-fn-with-args
                                        :source-code source-code
                                        :default-txt out-placeholder
                                        :idle-msec idle-msec}))))))

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

(defn ^:export klipsify [element general-settings mode]
  (if-let [opts (@mode-options mode)]
    (klipsify-with-opts element general-settings opts)
    (go (print "cannot find options for mode: " mode ". Supported modes: " (keys @mode-options)))))

(defn ^:export klipsify-elements [elements general-settings mode]
  (go
    (time
      (doseq [element elements]
        (<! (klipsify element general-settings mode))))))

(defn ^:export init-clj [settings]
  (dbg settings)
  (let [keywordized-settings (keywordize-keys settings)]
    (doseq [selector-name (keys @selector->mode)]
      (when-let [selector (settings selector-name)]
        (klipsify-elements (array-seq (js/document.querySelectorAll selector)) keywordized-settings (@selector->mode selector-name))))))

(defn ^:export init [js-settings]
  (init-clj (js->clj js-settings :keywordize-keys false))); we cannot keywordize the keys as the modules might be written in javascript

(comment
  (s/instrument #'klipsify-with-opts))
