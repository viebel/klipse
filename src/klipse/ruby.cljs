(ns klipse.ruby
  (:use-macros [purnam.core :only [? ! !>]])
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require 
    cljsjs.codemirror.mode.ruby
    [klipse.utils :refer [runonce]]
    [cljs.core.async :refer [<!]]
    [klipse.plugin :refer [register-mode]]))


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
           :comment-str "#"})

(register-mode "eval-ruby" "selector_eval_ruby" opts)
