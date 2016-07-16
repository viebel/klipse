(ns klipse.python
  (:use-macros [purnam.core :only [? ! !>]])
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require 
    cljsjs.codemirror.mode.python
    [klipse.io :as io]
    [klipse.utils :refer [runonce]]
    [cljs.core.async :refer [chan <! >! put!]]
    [klipse.plugin :refer [register-mode]]
    [gadjett.core :as gadjett :refer-macros [dbg]]))

(def token #js {:msg_mac "RoyDczufgCsZycN3VFWJwm66e/eL4pSK19spUhmuzBU="
                :time_created 1468499323000})


(defn *init-repl* [language]
  (js/ReplitClient. "api.repl.it" 80 language token))

(def init-repl (memoize *init-repl*))
(defn evaluate [repl c exp]
  (->
    (!> repl.evaluate exp #js {:stdout (fn [output]
                                         (put! c output))})
    (.then (fn [result] 
             (if (? result.error) 
               (put! c (str "Error: " (? result.error)))
               (put! c (str "Result: " (? result.data)))))
           (fn [error]
             (put! c error)))))
    

(defn replit [language exp]
  (let [c (chan)
        repl (init-repl language)]
    (-> 
      (!> repl.connect)
      (.then (partial evaluate repl c exp)))
      c))


(defn str-eval-async [exp _]
  (go
    (<! (replit "python3" exp))))

(def opts {:editor-in-mode "python"
           :editor-out-mode "python"
           :eval-fn str-eval-async
           :comment-str "#"})

(register-mode "eval-python" "selector_eval_python" opts)
