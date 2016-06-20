(ns klipse.ruby
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require 
    cljsjs.codemirror.mode.ruby
    [klipse.io :as io]
    [cljs.core.async :refer [<!]]
    [klipse.plugin :refer [register-mode]]
    [gadjett.core :as gadjett :refer-macros [dbg]]))


(defn runonce [f]
  (let [ran (atom false)]
    (fn [& args]
      (when-not @ran
        (reset! ran true)
        (apply f args)))))

(defn load-opal-parser []
  (.load js/Opal "opal-parser"))

(def load-opal-parser-once (runonce load-opal-parser))

(defn str-eval-async [exp _]
  (go
    (load-opal-parser-once)
    (str (.eval js/Opal exp))))


(def opts {:editor-in-mode "ruby"
           :editor-out-mode "ruby"
           :eval-fn str-eval-async
           :comment-str "#"})

(register-mode "eval-ruby" "selector_eval_ruby" opts)
