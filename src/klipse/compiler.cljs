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

(def repl-opts-noop (merge (replumb/options :browser ; see https://github.com/Lambda-X/replumb
                                             ["/dbg/js"]
                                             io/no-op)
                            {:warning-as-error false
                             :context :statement
                             :cache {:src-paths-lookup? true} ; this is required to support :refer inside :require => see https://github.com/Lambda-X/replumb/issues/170
                             :verbose false}))

(defn read-string-cond [s]
  (try
    (read-string s)
    (catch js/Object e
      s)))

(deftrack eval [s]
  (let [{:keys [form warning error value success?]} (replumb/read-eval-call repl-opts-noop identity s)
        status (if error :error :ok)
        res (if value 
              (read-string-cond value)
              error)]
    [status res]))

(defn test-eval []
  (let [exp
  "(ns my.main
    (:require [cljs.js :as cjs]))
  (def state (cjs/empty-state))
  (cjs/eval-str state \"(+ 1 2)\"
                \"bla\"
                {:eval cjs/js-eval}
                identity))"]
    (replumb/read-eval-call repl-opts-noop identity exp)))
