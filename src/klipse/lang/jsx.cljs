(ns klipse.lang.jsx
  (:require-macros
    [gadjett.core :refer [dbg]]
    [purnam.core :refer [? ! !>]]
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [klipse.utils :refer [load-scripts]]
    [cljs-http.client :as http]
    [clojure.string :as string]
    [cljs.core.async :refer [<! chan put!]]
    [klipse.common.registry :refer [register-mode]]))

(def eval-in-global-scope js/eval); this is the trick to make `eval` work in the global scope: http://perfectionkills.com/global-eval-what-are-the-options/


(defn babel [src]
   (dbg (-> (!> js/Babel.transform src #js {:presets #js ["react" "es2015"]})
       (aget "code"))))

(defn str-eval-js-async [exp {:keys [external-libs] :or {external-libs nil}}]
  (go
    (try
      (-> exp
          babel
          eval-in-global-scope)
      "//Evaluation done"
      (catch :default o
        (str o)))))


(def opts {:editor-in-mode "text/jsx"
           :editor-out-mode "javascript"
           :eval-fn str-eval-js-async
           :external-scripts ["https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.21.0/mode/jsx/jsx.min.js" "https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.18.1/babel.min.js"]
           :comment-str "//"})

(register-mode "eval-jsx" "selector_jsx" opts)
