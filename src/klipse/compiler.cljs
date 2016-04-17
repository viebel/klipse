(ns klipse.compiler
  (:require 
    [cljs.reader :refer [read-string]]
    [klipse.io :as io]
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
                                  (.. error -cause -message)
                                  value)]
                        [status res]))
                    ))

(def repl-opts-noop (merge (replumb/options :browser
                                             ["/dbg/js" "/js/compiled/out"]
                                             io/no-op)
                            {:warning-as-error false
                             :context :statement
                             :static-fns true
                             :verbose false}))

(defn read-string-cond [s]
  (try
    (read-string s)
    (catch js/Object e
      s)))

(defn eval-cljs [s]
  (cljs/eval-str (cljs/empty-state) s
                 'test {:eval cljs/js-eval
                        ;:static-fns true
                        ;:context :statement 
                        :load load-inlined
                        } identity))

(deftrack eval [s]
  (let [{:keys [form warning error value success?]} (eval-cljs s) #_(replumb/read-eval-call repl-opts-noop identity s)
        status (if error :error :ok)
        res (if value 
              (read-string-cond value)
              error)]
    [status res]))


