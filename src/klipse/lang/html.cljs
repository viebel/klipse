(ns klipse.lang.html
  (:require-macros
    [purnam.core :refer [? !>]]
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [klipse.common.registry :refer [codemirror-mode-src register-mode]]))


(defn my-eval [exp _]
  (go
    exp))

(def opts {:editor-in-mode "text/html"
           :editor-out-mode "text"
           :default-editor "html"
           :external-scripts [(codemirror-mode-src "xml") (codemirror-mode-src "htmlmixed")]
           :eval-fn my-eval
           :comment-str "; "})

(register-mode "eval-html" "selector_eval_html" opts)
