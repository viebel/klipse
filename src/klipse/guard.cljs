(ns klipse.guard
  "The basic idea is that the first time a klipse snippet's cljs is evaluated, we kick off a go-loop whose job is to wake up every 500ms and update *watchdog-tick* to say: this is the last time that i woke up!

  And if (guard) gets run and notices that the watchdog hasn't been able to wake up within the last *max-eval-duration* milliseconds, it decides that we should kill the currently evaluating function, and does that by throwing an error.

  and this doesn't kill go-loops created by users' snippet code, because those go-loops won't block the watchdog from running.
  "
  (:require-macros
    [gadjett.core :as gadjett :refer [dbg]]
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [klipse.utils :refer [runonce]]
    [cljs.analyzer :as ana]
    [clojure.string :as s :refer [starts-with?]]
    [cljs.compiler :refer [emits emit *source-map-data*]]
    [cljs.core.async :refer [timeout chan put! <!]]))

(def ^{:doc "each time the watchdog has a chance to run, this var is set with the current time"
       :dynamic true}
  *watchdog-tick* 0)

(def min-max-eval-duration 1000)

(defn watchdog*
  "reset the *watchdog-tick* to the current time once in a while"
  []
  (set! *watchdog-tick* (system-time))
  (go-loop []
    (<! (timeout min-max-eval-duration))
    (set! *watchdog-tick* (system-time))
    (recur)))

(def watchdog (runonce watchdog*))

(defn ^{:export true}
  guard [max-eval-duration]
  (when (> (- (system-time) *watchdog-tick*) max-eval-duration)
    (when (js/confirm (str "A KLIPSE snippet has been running for more than " max-eval-duration " milliseconds. This is often because of a long-running computation or infinite loop. Would you like to interrupt the snippet? \n OK to interrupt the evaluation.\n Cancel to continue."))
      (throw (str "Infinite Loop")))
    (set! *watchdog-tick* (system-time))))

; TODO is there a way to call the original emits function after the guard insertion - instead of pasting the original code. The problem is with the recursive call to emits
(defn my-emits
  "same as cljs.compiler/emits with insertion of a `guard()` call before if and recur (emitted as continue) statement.

  Limitations:
  1. It doesn't prevent infinite loop in imported code e.g. (reduce + (range)
  "
  [max-eval-duration & xs]
  (when (and (string? (first xs)) (re-matches #"^(if|continue).*" (first xs)))
    (print (str "klipse.guard.guard(" max-eval-duration ");")))
  (doseq [x xs]
    (cond
     (nil? x) nil
     (ana/cljs-map? x) (emit x)
     (ana/cljs-seq? x) (apply my-emits max-eval-duration x); call my-emits recursively and not emits
     ^boolean (goog/isFunction x) (x)
     :else (let [s (print-str x)]
             (when-not (nil? *source-map-data*)
               (swap! *source-map-data*
                 update-in [:gen-col] #(+ % (count s))))
             (print s))))
  nil)

