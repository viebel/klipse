(ns klipse.lang.markdown
  (:require-macros
    [cljs.core.async.macros :refer [go]])
  (:require 
    [klipse.common.registry :refer [codemirror-mode-src register-mode scripts-src]]))

(defn str-eval-async [exp _]
  (go
    (.toHTML js/markdown exp)))

(def opts {:editor-in-mode "markdown"
           :editor-out-mode "htmlmixed"
           :external-scripts [(scripts-src "markdown.min.js?") (codemirror-mode-src "xml") (codemirror-mode-src "htmlmixed") (codemirror-mode-src "javascript") (codemirror-mode-src "css")]
           :eval-fn str-eval-async
           :comment-str "[comment]: "})

(register-mode "eval-markdown" "selector_eval_markdown" opts)
