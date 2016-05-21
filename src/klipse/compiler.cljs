(ns klipse.compiler
  (:use-macros
    [cljs.core.async.macros :only [go]])
  (:require 
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

(defn repl-opts-noop [] (merge (replumb/options :browser
 ["https://raw.githubusercontent.com/clojure/clojurescript/master/src/main/cljs/" 
  "https://raw.githubusercontent.com/viebel/gadjett/master/src"
  "https://gist.githubusercontent.com/"]
                                             io/fetch-file!)
                            {:warning-as-error false
                             :context :statement
                             :verbose false}))

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
        opts (merge (repl-opts-noop) {:static-fns static-fns})]
    (replumb/read-eval-call opts #(do (print "eval: " %) (put! c (convert-res %))) s)
    c))

  (deftrack eval [s & {:keys [static-fns] :or {static-fns false}}]
  (let [opts (merge (repl-opts-noop) {:static-fns static-fns})
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

