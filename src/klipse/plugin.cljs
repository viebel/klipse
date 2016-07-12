(ns klipse.plugin
  (:require-macros
    [cljs.core.async.macros :refer [go]])
  (:require 
    [cljs.spec :as s]
    [cljs.spec.impl.gen :as gen]
    [clojure.walk :refer [keywordize-keys]]
    [goog.dom :refer [isElement]]
    [klipse.utils :refer [gist-path-page read-input-from-gist]]
    [cljs.core.async :refer [<!]]
    [clojure.string :as string :refer [trim split]]
    [cljs.reader :refer [read-string]]
    [klipse.ui.editors.common :refer [handle-events]]
    [klipse.ui.editors.editor :refer [create-editor-after-element replace-element-by-editor set-value get-value]]
    [gadjett.core :as gadjett :refer-macros [dbg]]))

(enable-console-print!)
(def app-url "http://app.klipse.tech")
(def selector->mode (atom {}))
(def mode-options (atom {}))

(defn register-mode [mode selector opts]
  (print "register-mode: " mode selector)
  (swap! selector->mode assoc selector mode)
  (swap! mode-options assoc mode opts))

(def default-editor-options
  {:matchBrackets true 
   :scrollbarStyle "overlay"})

(defn eval-in-editor [eval-fn editor-target editor-source]
  (go
  (->> (get-value editor-source)
       eval-fn
       <!
       (set-value editor-target))))

(defn read-string-or-val [value not-found]
  (if value
    (read-string value)
    not-found))

(defn string->array [s]
  (when s
    (->> (split s ",")
         (map trim))))

(defn content-from-gist [element comment-str]
  (go
    (when-let [gist-id (or
                         (-> (aget element "dataset")
                             (aget "gistId")) nil)]
      (let [gist-content (<! (read-input-from-gist gist-id))
            gist-intro (str "loaded from gist: " (gist-path-page gist-id))]
        (str comment-str gist-intro "\n" gist-content)))))

(defn content [element comment-str]
  (go
    (or
      (<! (content-from-gist element comment-str))
      (aget element "textContent");goog.dom/getTextContent removes new lines
      )))

(s/def ::codemirror-options map?)
(s/def ::editor-mode string?)

(s/fdef editor-options 
        :args (s/cat :in-mode ::editor-mode
                     :out-mode ::editor-mode
                     :options-in ::codemirror-options
                     :options-out ::codemirror-options))

(defn editor-options [editor-in-mode editor-out-mode codemirror-options-in codemirror-options-out]
  [(-> (assoc default-editor-options :mode editor-in-mode)
       (merge codemirror-options-in))
   (-> (assoc default-editor-options :mode editor-out-mode :readOnly true)
       (merge codemirror-options-out))])


(defn klipsify-with-opts [element {:keys [eval_idle_msec codemirror_options_in codemirror_options_out] :or {eval_idle_msec 20 codemirror_options_in {} codemirror_options_out {}}} {:keys [editor-in-mode editor-out-mode eval-fn comment-str]}]
  (go
    (when element
      (let [my-dataset (aget element "dataset")
            static-fns (read-string-or-val (aget my-dataset "staticFns") false)
            eval-context (read-string-or-val (aget my-dataset "evalContext") nil)
            external-libs (string->array (or (aget my-dataset "externalLibs") nil))
            idle-msec (read-string-or-val (aget my-dataset "evalIdleMsec") eval_idle_msec)
            eval-fn-with-args #(eval-fn % (dbg {:static-fns static-fns :external-libs external-libs :context eval-context}))
            [in-editor-options out-editor-options] (editor-options editor-in-mode editor-out-mode codemirror_options_in codemirror_options_out)
            clj-in (dbg (<! (content element comment-str)))
            out-editor (create-editor-after-element element ";the evaluation will appear here (soon)..." out-editor-options); must be called before `element` is replaced
            in-editor (replace-element-by-editor element clj-in in-editor-options)]
        (set-value out-editor (dbg (str (<! (eval-fn-with-args clj-in)))))
        (handle-events in-editor
                       {:idle-msec idle-msec
                        :base-url app-url
                        :on-should-eval #(eval-in-editor eval-fn-with-args out-editor in-editor)})))))

(s/def ::dom-element isElement)
(s/def ::editor-in-mode string?)
(s/def ::editor-out-mode string?)
(s/def ::eval-fn fn?)
(s/def ::comment-str string?)

(s/def ::options (s/keys :req-un [::editor-in-mode ::editor-out-mode ::eval-fn ::comment-str])) 
(s/def ::klipse-settings (s/keys :opt-un [::eval_idle_msec]))

(s/fdef klipsify-with-opts 
        :args (s/cat :element ::dom-element
                     :settings ::klipse-settings
                     :opts ::options))

(defn ^:export klipsify [element general-settings mode]
  (if-let [opts (@mode-options mode)]
    (klipsify-with-opts element (dbg general-settings) opts)
    (go (print "cannot find options for mode: " mode ". Supported modes: " (keys @mode-options)))))

(defn ^:export klipsify-elements [elements general-settings mode]
  (print "klipsify-elements: " elements general-settings mode)
  (go
    (time
      (doseq [element elements]
        (print "klipsify-elements: " element)
        (<! (klipsify element general-settings mode))))))

(defn ^:export init-clj [settings]
  (dbg settings)
  (let [keywordized-settings (keywordize-keys settings)]
    (doseq [selector-name (dbg (keys @selector->mode))]
      (when-let [selector (settings selector-name)]
        (klipsify-elements (dbg (array-seq (js/document.querySelectorAll selector))) keywordized-settings (@selector->mode selector-name))))))

(defn ^:export init [js-settings]
  (init-clj (js->clj js-settings :keywordize-keys false))); we cannot keywordize the keys as the modules might be written in javascript

(comment
(s/instrument #'klipsify-with-opts)
(s/instrument #'editor-options))
