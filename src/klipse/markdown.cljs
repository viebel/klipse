(ns klipse.markdown
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require 
    ;cljsjs.codemirror.mode.markdown
    cljsjs.codemirror.mode.xml
    cljsjs.codemirror.mode.javascript
    cljsjs.codemirror.mode.css
    cljsjs.codemirror.mode.htmlmixed
    cljsjs.markdown
    [klipse.plugin :refer [register-mode]]
    [gadjett.core :as gadjett :refer-macros [dbg]]))


(defn str-eval-async [exp _]
  (go
    (.toHTML js/markdown exp)))


(def opts {:editor-in-mode "markdown"
           :editor-out-mode "htmlmixed"
           :eval-fn str-eval-async
           :comment-str "[comment]: "})

(register-mode "eval-markdown" "selector_eval_markdown" opts)
