(ns klipse.plugin
  (:require-macros
    [cljs.core.async.macros :refer [go]])
  (:require 
    [klipse.utils :refer [gist-path-page read-input-from-gist]]
    [cljs.core.async :refer [<!]]
    [clojure.string :as string :refer [trim split]]
    [cljs.reader :refer [read-string]]
    [klipse.ui.editors.common :refer [handle-events]]
    [klipse.ui.editors.editor :refer [create-editor-after-element replace-element-by-editor set-value get-value]]
    [gadjett.core :as gadjett :refer-macros [dbg]]
    [klipse.compiler :refer [str-eval-js-async str-eval-async str-eval str-compile-async]]))

(def app-url "http://app.klipse.tech")

(def language->eval-fn 
  {::eval-clojure str-eval-async
   ::eval-javascript str-eval-js-async
   ::transpile-javascript str-compile-async})

(def language->editor-in-mode
  {::eval-clojure "clojure"
   ::eval-javascript "javascript"
   ::transpile-javascript "clojure"})

(def language->editor-out-mode
  {::eval-clojure "clojure"
   ::eval-javascript "javascript"
   ::transpile-javascript "javascript"})

(def language->comment-str
  {::eval-clojure ";"
   ::eval-javascript "//"
   ::transpile-javascript ";"}
  )

(def editor-options
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

(defn prepend-comment [body txt language]
  (let [comment-str (language->comment-str language)]
    (str comment-str txt "\n" body)))

(defn content-from-gist [element language]
  (go
    (when-let [gist-id (or
                         (-> (aget element "dataset")
                             (aget "gistId")) nil)]
      (let [gist-content (<! (read-input-from-gist gist-id))
            gist-intro (str "loaded from gist: " (gist-path-page gist-id))]
        (prepend-comment gist-content gist-intro language)))))

(defn content [element language]
  (go
    (or
      (<! (content-from-gist element language))
      (aget element "textContent");goog.dom/getTextContent removes new lines
      )))

(defn ^:export klipsify [element language]
  (go
    (when element
      (let [my-dataset (aget element "dataset")
            static-fns (read-string-or-val (aget my-dataset "staticFns") false)
            external-libs (dbg (string->array (or (dbg (aget my-dataset "externalLibs")) nil)))
            eval-fn (language->eval-fn language)
            eval-fn-with-args #(eval-fn % (dbg {:static-fns static-fns :external-libs external-libs}))
            in-editor-options (assoc editor-options :mode (language language->editor-in-mode))
            out-editor-options (assoc editor-options :mode (language language->editor-out-mode) :readOnly true)
            clj-in (dbg (<! (content element language)))
            out-editor (create-editor-after-element element ";the evaluation will appear here (soon)..." out-editor-options); must be called before `element` is replaced
            in-editor (replace-element-by-editor element clj-in in-editor-options)]
        (set-value out-editor (dbg (<! (eval-fn-with-args clj-in))))
        (handle-events in-editor
                       {:idle-msec 2000
                        :base-url app-url
                        :on-should-eval #(eval-in-editor eval-fn-with-args out-editor in-editor)})))))


(defn ^:export klipsify-elements [elements language]
  (go
    (time
      (doseq [element elements]
        (<! (klipsify element language))))))

(defmulti init (fn [settings] (map? settings)))

(defmethod init false [js-settings]
  (init (js->clj js-settings :keywordize-keys true)))

(defmethod ^:export init true [{:keys [selector selector_js selector_eval_js] :as settings}]
  (dbg settings)
  (klipsify-elements (dbg (array-seq (js/document.querySelectorAll selector_eval_js))) ::eval-javascript)
  (klipsify-elements (dbg (array-seq (js/document.querySelectorAll selector_js))) ::transpile-javascript)
  (klipsify-elements (dbg (array-seq (js/document.querySelectorAll selector))) ::eval-clojure))
