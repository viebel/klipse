(ns klipse.scheme
  (:use-macros [purnam.core :only [? ! !>]])
  (:require-macros
    [gadjett.core :refer [dbg]]
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    cljsjs.codemirror.mode.scheme
    [klipse.io :as io]
    [cljs.core.async :refer [<! put! chan]]
    [klipse.plugin :refer [register-mode]]))

(defn display [result]
  (if (aget result "inspect")
    (!> result.inspect)
    (str result)))

(defn str-eval-async [exp _]
  (let [c (chan)
        interpreter (dbg (new js/BiwaScheme.Interpreter (fn [err] (put! c (str err)))))]
    (set! js/window.exp exp)
    (put! c (-> (!> interpreter.evaluate exp)
                display))
    c))

(def opts {:editor-in-mode "scheme"
           :editor-out-mode "scheme"
           :eval-fn str-eval-async
           :comment-str ";"})

(register-mode "eval-scheme" "selector_eval_scheme" opts)
