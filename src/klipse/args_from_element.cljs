(ns klipse.args-from-element
  (:require-macros
    [cljs.core.async.macros :refer [go]])
  (:require 
    [klipse.utils :refer [gist-path-page read-input-from-gist]]
    [cljs.core.async :refer [<!]]
    [clojure.string :as string :refer [trim split]]
    [cljs.reader :refer [read-string]]
    [gadjett.collections :refer [compactize-map]]
    [gadjett.core :as gadjett :refer-macros [dbg]]))

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

(defn eval-args-from-element [element]
  (let [my-dataset (aget element "dataset")
        static-fns (read-string-or-val (aget my-dataset "staticFns") false)
        eval-context (read-string-or-val (aget my-dataset "evalContext") nil)
        external-libs (string->array (or (aget my-dataset "externalLibs") nil))]
    {:static-fns static-fns :external-libs external-libs :context eval-context}))

(defn editor-args-from-element [element]
  (let [my-dataset (aget element "dataset")
        idle-msec (read-string-or-val (aget my-dataset "evalIdleMsec") nil)]
    (compactize-map {:idle-msec idle-msec})))
       

