(ns klipse.ruby
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require 
    cljsjs.codemirror.mode.ruby
    [klipse.io :as io]
    [klipse.utils :refer [runonce]]
    [cljs.core.async :refer [<!]]
    [klipse.plugin :refer [register-mode]]
    [gadjett.core :as gadjett :refer-macros [dbg]]))


(defn load-opal-parser []
  (.load js/Opal "opal-parser"))

(def load-opal-parser-once (runonce load-opal-parser))

(defn str-eval-async [exp _]
  (go
    (load-opal-parser-once)
    (try
      (str (.eval js/Opal exp))
      (catch js/Object e
        (str e)))))


(def opts {:editor-in-mode "ruby"
           :editor-out-mode "ruby"
           :eval-fn str-eval-async
           :comment-str "#"})

(register-mode "eval-ruby" "selector_eval_ruby" opts)
