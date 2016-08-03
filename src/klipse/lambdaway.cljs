(ns klipse.lambdaway
  (:require-macros
    [purnam.core :refer [? !>]]
    [cljs.core.async.macros :refer [go go-loop]])
  (:require 
    [klipse.plugin :refer [register-mode]]
    [gadjett.core :as gadjett :refer-macros [dbg]]))


(defn my-eval [exp _]
  (print "my-val" exp)
  (go
    (dbg (aget (!> js/LAMBDATALK.evaluate exp) "val"))))

(def opts {:editor-in-mode "markdown"
           :editor-out-mode "htmlmixed"
           :eval-fn my-eval
           :comment-str "[comment]: "})

(register-mode "eval-lambdaway" "selector_eval_lambdaway" opts)
