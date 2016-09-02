(ns klipse.lambdaway
  (:require-macros
    [purnam.core :refer [? !>]]
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    cljsjs.codemirror.mode.clojure
    [klipse.plugin :refer [register-mode]]))


(defn my-eval [exp _]
  (go
    (aget (!> js/LAMBDATALK.evaluate exp) "val")))

(def opts {:editor-in-mode "clojure"
           :editor-out-mode "text"
           :eval-fn my-eval
           :comment-str "[comment]: "})

(register-mode "eval-lambdaway" "selector_eval_lambdaway" opts)
