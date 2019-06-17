(ns klipse.lang.ruby
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [klipse.utils :refer [runonce]]
   [cljs.core.async :refer [<!]]
   [klipse.common.registry :refer [codemirror-mode-src register-mode scripts-src]]
   [applied-science.js-interop :as j]))


(defn load-opal-parser []
  (j/call js/Opal :load "opal-parser"))

(def load-opal-parser-once (runonce load-opal-parser))

(defn str-eval-async [exp _]
  (go
    (load-opal-parser-once)
    (try
      (let [res (j/call js/Opal :eval exp)]
        (.apply (aget res "$inspect") res)) ;; we use `apply` because `j/call` is buggy (doesn't work with primitive types)
      (catch js/Object e
        (str e)))))

(def opts {:editor-in-mode "ruby"
           :editor-out-mode "ruby"
           :eval-fn str-eval-async
           :external-scripts [(codemirror-mode-src "ruby") (scripts-src "opal.min.js?p") (scripts-src "opal-parser.min.js?p")]
           :comment-str "#"})

(register-mode "eval-ruby" "selector_eval_ruby" opts)
