(ns klipse.lang.ruby
  (:use-macros [purnam.core :only [? ! !>]])
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require 
    [klipse.utils :refer [runonce]]
    [cljs.core.async :refer [<!]]
    [klipse.common.registry :refer [codemirror-mode-src register-mode]]))


(defn load-opal-parser []
  (!> js/Opal.load "opal-parser"))

(def load-opal-parser-once (runonce load-opal-parser))

(defn str-eval-async [exp _]
  (go
    (load-opal-parser-once)
    (try
      (let [res (!> js/Opal.eval exp)]
        (!> res.$inspect))
      (catch js/Object e
        (str e)))))

(def opts {:editor-in-mode "ruby"
           :editor-out-mode "ruby"
           :eval-fn str-eval-async
           :external-scripts [(codemirror-mode-src "ruby") "https://viebel.github.io/klipse/repo/js/opal.min.js?p" "https://viebel.github.io/klipse/repo/js/opal-parser.min.js?p"]
           :comment-str "#"})

(register-mode "eval-ruby" "selector_eval_ruby" opts)
