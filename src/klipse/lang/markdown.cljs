(ns klipse.lang.markdown
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require 
    ;cljsjs.codemirror.mode.markdown
    cljsjs.codemirror.mode.xml
    cljsjs.codemirror.mode.javascript
    cljsjs.codemirror.mode.css
    cljsjs.codemirror.mode.htmlmixed
    cljsjs.markdown
    [klipse.common.registry :refer [register-mode]]))


(defn str-eval-async [exp _]
  (go
    (.toHTML js/markdown exp)))


(def opts {:editor-in-mode "markdown"
           :editor-out-mode "htmlmixed"
           :eval-fn str-eval-async
           :comment-str "[comment]: "})

(register-mode "eval-markdown" "selector_eval_markdown" opts)
