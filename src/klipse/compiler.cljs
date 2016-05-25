(ns klipse.compiler
  (:use-macros
    [cljs.core.async.macros :only [go]])
  (:require 
    [goog.string.format :as f]
    [goog.date.Interval]
    [goog.date.UtcDateTime]
    [cljs.reader :refer [read-string]]
    [klipse.io :as io]
    [cljs.core.async :refer [chan put!]]
    [gadjett.core :as gadjett :refer-macros [deftrack dbg]]
    [replumb.core :as replumb]
    [cljs.js :as cljs]))


;; =============================================================================
;; Compiler functions

;; create cljs.user
(set! (.. js/window -cljs -user) #js {})

(defn load-inlined [opts cb]
  (dbg opts)
  (cb {:lang :clj :source ""}))

(deftrack compile [s & {:keys [static-fns] :or {static-fns false}}]
  (cljs/compile-str (cljs/empty-state) s
                    "cljs-in"
                    {
                     :static-fns static-fns
                     :load load-inlined
                    }
                    (fn [{:keys [value error]}]
                      (let [status (if error :error :ok)
                            res (if error 
                                  error
                                  value)]
                        [status res]))
                    ))
(defn repos []
  [ "/fig/js"
   "https://raw.githubusercontent.com/clojure/clojurescript/master/src/main/cljs/" 
   ;"https://raw.githubusercontent.com/clojure/core.match/master/src/main/clojure/"
   ;"https://raw.githubusercontent.com/brandonbloom/fipp/master/src/"
   ;"https://raw.githubusercontent.com/clojure/core.rrb-vector/master/src/main/cljs/"
   ;"https://raw.githubusercontent.com/reagent-project/reagent/master/src/"
   ;"https://raw.githubusercontent.com/andrewmcveigh/cljs-time/master/src/"
   ;"https://raw.githubusercontent.com/viebel/gadjett/master/src"
   "https://gist.githubusercontent.com/"
   ])

(defn repl-opts-noop [] (merge (replumb/options :browser
                                           (repos) 
                                           io/no-op)
                          {:warning-as-error false
                           :context :statement
                           :verbose false}))

(defn repl-opts-load [] (merge (replumb/options :browser
                                           (repos) 
                                           io/fetch-file!)
                          {:warning-as-error false
                           :context :statement
                           :verbose false}))

(defn repl-opts []
  (repl-opts-noop))

(defn read-string-cond [s]
  (try
    (read-string s)
    (catch js/Object e
      s)))

(defn convert-res [{:keys [form warning error value success?]}]
  (print "convert-res")
  (let [status (if error :error :ok)
        res (dbg (if value 
                   (read-string-cond value)
                   error))]
    [status res]))

(defn eval-async [s & {:keys [static-fns] :or {static-fns false}}]
  (dbg s)
  (let [c (chan)
        opts (merge (repl-opts) {:static-fns static-fns})]
    (replumb/read-eval-call opts #(do (print "eval: " %) (put! c (convert-res %))) s)
    c))

#_(deftrack eval [s & {:keys [static-fns] :or {static-fns false}}]
  (let [opts {:eval cljs/js-eval
              :load load-inlined}
        {:keys [form warning error value success?]} (cljs/eval-str (cljs/empty-state) s "" opts #(do (print "eval: " %) %))
        status (if error :error :ok)
        res (dbg (if value 
              (read-string-cond value)
              error))]
    [status res]))

(deftrack eval [s & {:keys [static-fns] :or {static-fns false}}]
  (let [opts (merge (repl-opts) {:static-fns static-fns})
        {:keys [form warning error value success?]} (replumb/read-eval-call opts #(do (print "eval: " %) %) s)
        status (if error :error :ok)
        res (dbg (if value 
              (read-string-cond value)
              error))]
    [status res]))

(defn str-compile [exp]
  (-> (compile exp)
      second
      str))

(defn str-eval [exp]
  (-> (eval exp)
      second
      str))

(defn str-eval-async [exp]
  (go
    (-> (<! (eval-async exp))
        second
        str)))

