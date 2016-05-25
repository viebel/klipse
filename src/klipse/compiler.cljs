(ns klipse.compiler
  (:use-macros
    [cljs.core.async.macros :only [go]])
  (:require 
    [goog.string.format]; some goog libs must be required manually in order to be available at run time
    [goog.date.Interval]
    [goog.date.UtcDateTime]
    [com.rpl.specter :as specter]; make specter available at run time: temp workaround
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


(defn convert-eval-res [{:keys [form warning error value success?]}]
  (let [status (if error :error :ok)
        res (if value 
              (read-string-cond value)
              error)]
    [status res]))

(defn convert-compile-res [{:keys [value error]}]
  (let [status (if error :error :ok)
        res (if error
              error
              value)]
    [status res]))

(deftrack compile [s & {:keys [static-fns] :or {static-fns false}}]
  (cljs/compile-str (cljs/empty-state) s
                    "cljs-in"
                    {
                     :static-fns static-fns
                     :load load-inlined
                    }
                    convert-compile-res))

(deftrack compile-async [s & {:keys [static-fns] :or {static-fns false}}]
  (let [c (chan)]
    (cljs/compile-str (cljs/empty-state) s
                      "cljs-in"
                      {
                       :static-fns static-fns
                       :load load-inlined
                       }
                      #(put! c (convert-compile-res %)))
    c))

(deftrack eval-async [s & {:keys [static-fns] :or {static-fns false}}]
  (let [c (chan)
        opts (merge (repl-opts) {:static-fns static-fns})]
    (replumb/read-eval-call opts #(put! c (convert-eval-res %)) s)
    c))

(deftrack eval [s & {:keys [static-fns] :or {static-fns false}}]
  (let [opts (merge (repl-opts) {:static-fns static-fns})]
    (replumb/read-eval-call opts convert-eval-res s)))


#_(deftrack eval [s & {:keys [static-fns] :or {static-fns false}}]
    (let [opts {:eval cljs/js-eval
                :load load-inlined}]
      (cljs/eval-str (cljs/empty-state) s "" opts convert-eval-res)))

(defn str-compile [exp]
  (-> (compile exp)
      second
      str))

(defn str-compile-async [exp]
  (go
  (-> (<! (compile-async exp))
      second
      str)))

(defn str-eval [exp]
  (-> (eval exp)
      second
      str))

(defn str-eval-async [exp]
  (go
    (-> (<! (eval-async exp))
        second
        str)))

