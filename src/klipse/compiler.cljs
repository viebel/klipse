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
                                  error
                                  value)]
                        [status res]))
                    ))

(def repl-opts-noop (merge (replumb/options :browser
                                             ["src" "/fig/js"]
                                             io/fetch-file!)
                            {:warning-as-error false
                             :context :statement
                             :src-paths ["src" "/fig/js"]
                             :cache {:src-paths-lookup? true}
                             :verbose false}))

(defn read-string-cond [s]
  (try
    (read-string s)
    (catch js/Object e
      s)))

(deftrack eval [s & {:keys [static-fns] :or {static-fns false}}]
  (let [opts (merge repl-opts-noop {:static-fns static-fns})
        {:keys [form warning error value success?]} (replumb/read-eval-call opts identity s)
        status (if error :error :ok)
        res (if value 
              (read-string-cond value)
              error)]
    [status res]))


