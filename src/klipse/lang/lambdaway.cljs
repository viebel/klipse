(ns klipse.lang.lambdaway
  (:require-macros
    [purnam.core :refer [? !>]]
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [klipse.common.registry :refer [codemirror-mode-src register-mode]]))


(defn my-eval [exp _]
  (go
    (aget (!> js/LAMBDATALK.evaluate exp) "val")))

(def opts {:editor-in-mode "clojure"
           :editor-out-mode "text"
           :eval-fn my-eval
           :external-scripts ["https://viebel.github.io/klipse/repo/js/lambdaway_eval.js" (codemirror-mode-src "clojure")]
           :comment-str "[comment]: "})

(register-mode "eval-lambdaway" "selector_eval_lambdaway" opts)
