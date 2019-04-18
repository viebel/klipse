(ns klipse.lang.lambdaway
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [klipse.common.registry :refer [codemirror-mode-src register-mode scripts-src]]
   [applied-science.js-interop :as j]))


(defn my-eval [exp _]
  (go
   (aget (j/call js/LAMBDATALK :evaluate exp) "val")))

(def opts {:editor-in-mode "clojure"
           :editor-out-mode "text"
           :eval-fn my-eval
           :external-scripts [(scripts-src "lambdaway_eval.js") (codemirror-mode-src "clojure")]
           :comment-str "[comment]: "})

(register-mode "eval-lambdaway" "selector_eval_lambdaway" opts)
