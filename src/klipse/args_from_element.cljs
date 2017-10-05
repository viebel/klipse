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
            gist-intro (str "loaded from gist: " (gist-path-page gist-id))
            gist-intro-commented-out (if (string? comment-str)
                                       (str comment-str gist-intro)
                                       (comment-str gist-intro))]
        (str gist-intro-commented-out "\n" gist-content)))))

(defn content [element comment-str]
  (go
    (or
      (<! (content-from-gist element comment-str))
      (aget element "textContent");goog.dom/getTextContent removes new lines
      )))

(defn eval-args-from-element [element {:keys [print-length beautify-strings eval-context]}]
  (let [my-dataset (aget element "dataset")
        static-fns (read-string-or-val (aget my-dataset "staticFns") false)
        async-code? (read-string-or-val (aget my-dataset "asyncCode") false)
        verbose (read-string-or-val (aget my-dataset "verbose") false)
        compile-display-guard (read-string-or-val (aget my-dataset "compileDisplayGuard") false)
        eval-context (read-string-or-val (aget my-dataset "evalContext") eval-context)
        max-eval-duration (aget my-dataset "maxEvalDuration")
        print-length (read-string-or-val (aget my-dataset "printLength") print-length)
        beautify-strings (read-string-or-val (aget my-dataset "beautifyStrings") beautify-strings)
        external-libs (string->array (or (aget my-dataset "externalLibs") nil))]
    {:static-fns static-fns
     :print-length print-length
     :async-code? async-code?
     :external-libs external-libs
     :max-eval-duration max-eval-duration
     :context eval-context
     :verbose verbose
     :compile-display-guard compile-display-guard
     :beautify-strings beautify-strings}))

(defn editor-args-from-element [element]
  (let [my-dataset (aget element "dataset")
        editor-type (aget my-dataset "editorType")
        loop-msec (read-string-or-val (aget my-dataset "loopMsec") nil)
        preamble (or (aget my-dataset "preamble") "")
        idle-msec (read-string-or-val (aget my-dataset "evalIdleMsec") nil)]
    (compactize-map {:idle-msec idle-msec
                     :loop-msec loop-msec
                     :preamble preamble
                     :editor-type editor-type})))

