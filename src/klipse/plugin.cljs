(ns klipse.plugin
  (:require-macros
    [cljs.core.async.macros :refer [go]])
  (:require 
    [cljs.spec :as s]
    [goog.dom :refer [isElement]]
    [klipse.utils :refer [gist-path-page read-input-from-gist]]
    [cljs.core.async :refer [<!]]
    [clojure.string :as string :refer [trim split]]
    [cljs.reader :refer [read-string]]
    [klipse.ui.editors.common :refer [handle-events]]
    [klipse.ui.editors.editor :refer [create-editor-after-element replace-element-by-editor set-value get-value]]
    [gadjett.core :as gadjett :refer-macros [dbg]]
    [klipse.compiler :refer [str-eval-async str-eval str-compile-async]]
    [klipse.js-eval :refer [str-eval-js-async]]))

(def app-url "http://app.klipse.tech")
(def selector->mode
  {"selector" "eval-clojure"
   "selector_js" "transpile-clojurescript"
   "selector_eval_js" "eval-javascript"})

(def mode-options {
  "eval-clojure" {:editor-in-mode "clojure"
                  :editor-out-mode "clojure"
                  :eval-fn str-eval-async
                  :comment-str ";"}
  "transpile-clojurescript" {:editor-in-mode "clojure"
                  :editor-out-mode "javascript"
                  :eval-fn str-compile-async
                  :comment-str ";"}
  "eval-javascript" {:editor-in-mode "javascript"
                  :editor-out-mode "javascript"
                  :eval-fn str-eval-js-async
                  :comment-str "//"}})

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

(defn klipsify-with-opts [element {:keys [editor-in-mode editor-out-mode eval-fn comment-str]}]
  (go
    (when element
      (let [my-dataset (aget element "dataset")
            static-fns (read-string-or-val (aget my-dataset "staticFns") false)
            external-libs (dbg (string->array (or (aget my-dataset "externalLibs") nil)))
            eval-fn-with-args #(eval-fn % (dbg {:static-fns static-fns :external-libs external-libs}))
            in-editor-options (assoc editor-options :mode editor-in-mode)
            out-editor-options (assoc editor-options :mode editor-out-mode :readOnly true)
            clj-in (dbg (<! (content element comment-str)))
            out-editor (create-editor-after-element element ";the evaluation will appear here (soon)..." out-editor-options); must be called before `element` is replaced
            in-editor (replace-element-by-editor element clj-in in-editor-options)]
        (set-value out-editor (dbg (<! (eval-fn-with-args clj-in))))
        (handle-events in-editor
                       {:idle-msec 2000
                        :base-url app-url
                        :on-should-eval #(eval-in-editor eval-fn-with-args out-editor in-editor)})))))

(s/def ::dom-element isElement)
(s/def ::editor-in-mode string?)
(s/def ::editor-out-mode string?)
(s/def ::eval-fn fn?)
(s/def ::comment-str string?)

(s/def ::options (s/keys :req-un [::editor-in-mode ::editor-out-mode ::eval-fn ::comment-str])) 

(s/fdef klipsify-with-opts 
        :args (s/cat :element ::dom-element
                     :opts ::options))

(s/instrument #'klipsify-with-opts)
(defn ^:export klipsify [element mode]
  (if-let [opts (mode-options mode)]
    (klipsify-with-opts element opts)
    (go (print "cannot find options for mode: " mode ". Supported modes: " (keys mode-options)))))

(defn ^:export klipsify-elements [elements mode]
  (print "klipsify-elements: " elements mode)
  (go
    (time
      (doseq [element elements]
        (print "klipsify-elements: " element)
        (<! (klipsify element mode))))))

(defn ^:export init-clj [settings]
  (dbg settings)
  (doseq [selector-name (dbg (keys selector->mode))]
    (when-let [selector (settings selector-name)]
      (klipsify-elements (dbg (array-seq (js/document.querySelectorAll selector))) (selector->mode selector-name)))))

(defn ^:export init [js-settings]
  (init-clj (js->clj js-settings :keywordize-keys false)))

