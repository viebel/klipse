(ns klipse.lang.replit
  (:use-macros [purnam.core :only [? ! !>]])
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require 
    [cljs.core.async :refer [chan <! >! put!]]))

(def token #js {:msg_mac "6GpVqi640U22dcEhfB5C58m0oqAWXuVZr+SQ4sBoTMQ="
                :time_created 1468951584000 })


(defn init-repl* [language]
  (js/ReplitClient. "api.repl.it" 80 language token))

(def init-repl (memoize init-repl*))
(defn evaluate [repl c exp]
  (->
    (!> repl.evaluate exp 
        #js {:stdout (fn [output]
                       (put! c output))})
    (.then (fn [result] 
             ;(js/console.log result)
             (if (empty? (? result.error))
               (put! c (str "Result: " (? result.data) "\n"))
               (put! c (str "Error: " (? result.error) "\n"))))
           (fn [error]
             (put! c error)))))
    

(defn connect-and-evaluate [language exp]
  (let [c (chan)
        repl (init-repl language)]
    (-> 
      (!> repl.connect)
      (.then (partial evaluate repl c exp)))
    c))

