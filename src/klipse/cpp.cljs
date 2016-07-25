(ns klipse.cpp
  (:use-macros [purnam.core :only [? ! !>]])
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require 
    cljsjs.codemirror.mode.clike
    [klipse.io :as io]
    [klipse.utils :refer [runonce]]
    [cljs.core.async :refer [chan <! >! put!]]
    [klipse.plugin :refer [register-mode]]
    [gadjett.core :as gadjett :refer-macros [dbg]]))

(def token #js {:msg_mac "RoyDczufgCsZycN3VFWJwm66e/eL4pSK19spUhmuzBU="
                :time_created 1468499323000})

(defn replit [language exp]
  (let [c (chan)
        repl (js/ReplitClient. "api.repl.it" 80 language token)]
    (-> 
      (!> repl.evaluateOnce exp #js {:stdout (fn [output]
                                               (put! c output))})
      (.then (fn [result] 
               (if (? result.error) 
                 (put! c (str "Error: " (? result.error)))
                 (put! c (str "Result: " (? result.data)))))
             (fn [error]
               (put! c error))))
    c))

(defn str-eval-async [exp _]
  (go
    (<! (replit "c" exp))))

(def opts {:editor-in-mode "clike"
           :editor-out-mode "clike"
           :eval-fn str-eval-async
           :comment-str "#"})

(register-mode "eval-cpp" "selector_eval_cpp" opts)
