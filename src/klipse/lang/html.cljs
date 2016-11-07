(ns klipse.lang.html
  (:require-macros
    [purnam.core :refer [? !>]]
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    cljsjs.codemirror.mode.xml
    cljsjs.codemirror.mode.htmlmixed
    [klipse.common.registry :refer [register-mode]]))


(defn my-eval [exp _]
  (go
    exp))

(def opts {:editor-in-mode "text/html"
           :editor-out-mode "text"
           :eval-fn my-eval
           :comment-str "; "})

(register-mode "eval-html" "selector_eval_html" opts)
