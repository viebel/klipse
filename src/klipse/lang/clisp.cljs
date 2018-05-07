(ns klipse.lang.clisp
  (:use-macros [purnam.core :only [? ! !>]])
  (:require-macros
    [gadjett.core :refer [dbg]]
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [cljs.core.async :refer [<! put! chan]]
    [klipse.common.registry :refer [codemirror-mode-src register-mode scripts-src]]))



(defn str-eval-async [exp _]
  (go
    (try
      (str (!> js/jscl.evaluateString exp))
      (catch js/Object e
        (str e)))))

(def opts {:editor-in-mode "text/x-common-lisp"
           :editor-out-mode "text/x-common-lisp"
           :eval-fn str-eval-async
           :external-scripts [(codemirror-mode-src "commonlisp") (scripts-src "jscl.js")]
           :comment-str ";"})

(register-mode "eval-clisp" "selector_eval_clisp" opts)
