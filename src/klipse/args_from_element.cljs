(ns klipse.args-from-element
  (:require-macros
    [gadjett.core :refer [dbg]]
    [cljs.core.async.macros :refer [go]])
  (:require 
    [klipse.utils :refer [gist-path-page read-input-from-gist]]
    [cljs.core.async :refer [<!]]
    [clojure.string :as string :refer [trim split]]
    [cljs.reader :refer [read-string]]
    [gadjett.collections :refer [compactize-map]]))

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

(defn eval-args-from-element [element {:keys [print-length beautify-strings eval-context]}]
  (let [my-dataset (aget element "dataset")
        static-fns (read-string-or-val (aget my-dataset "staticFns") false)
        verbose (read-string-or-val (aget my-dataset "verbose") false)
        eval-context (read-string-or-val (aget my-dataset "evalContext") eval-context)
        print-length (read-string-or-val (aget my-dataset "printLength") print-length)
        beautify-strings (read-string-or-val (aget my-dataset "beautifyStrings") beautify-strings)
        external-libs (string->array (or (aget my-dataset "externalLibs") nil))]
    {:static-fns static-fns
     :print-length print-length
     :external-libs external-libs
     :context eval-context
     :verbose verbose
     :beautify-strings beautify-strings}))

(defn editor-args-from-element [element]
  (let [my-dataset (aget element "dataset")
        editor-type (aget my-dataset "editorType")
        loop-msec (read-string-or-val (aget my-dataset "loopMsec") nil)
        idle-msec (read-string-or-val (aget my-dataset "evalIdleMsec") nil)]
    (compactize-map {:idle-msec idle-msec
                     :loop-msec loop-msec
                     :editor-type editor-type})))
       

