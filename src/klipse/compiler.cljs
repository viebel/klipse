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
    [clojure.string :as s]
    [cljs.core.async :refer [chan put!]]
    [gadjett.core :as gadjett :refer-macros [deftrack dbg]]
    [replumb.core :as replumb]
    [cljs.js :as cljs]))


;; =============================================================================
;; Compiler functions

;; create cljs.user
(set! (.. js/window -cljs -user) #js {})

(defn load-inlined [opts cb]
  (print "load-inlined: " opts)
  (cb {:lang :js :source ""}))

(def known-src-paths 
  {"klipse" "http://localhost:5014/fig/js"
   "clojurescript" ["https://raw.githubusercontent.com/clojure/clojurescript/master/src/main/clojure" "https://raw.githubusercontent.com/clojure/clojurescript/master/src/main/cljs"]
   })

(defn repos []
  ["/fig/js"
   "https://gist.githubusercontent.com/"
   ;"https://raw.githubusercontent.com/clojure/clojurescript/master/src/main/clojure" 
   ;"https://raw.githubusercontent.com/clojure/clojurescript/master/src/main/cljs" 
   ;"https://raw.githubusercontent.com/viebel/andare/master/src/main/clojure/"
   ;"https://raw.githubusercontent.com/clojure/core.match/master/src/main/clojure/"
   ;"https://raw.githubusercontent.com/brandonbloom/fipp/master/src/"
   ;"https://raw.githubusercontent.com/clojure/core.rrb-vector/master/src/main/cljs/"
   ;"https://raw.githubusercontent.com/reagent-project/reagent/master/src/"
   ;"https://raw.githubusercontent.com/andrewmcveigh/cljs-time/master/src/"
   ;"https://raw.githubusercontent.com/viebel/gadjett/master/src"
   ])

(defn special-fetch [file-url src-cb]
  (-> (s/replace file-url #"gist_" "")
      (io/fetch-file! src-cb)))

(defn repl-opts-load [] (merge (replumb/options :browser
                                           (repos) 
                                           special-fetch)
                          {:warning-as-error false
                           :context :statement
                           :verbose false}))

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

(defn build-repl-opts [{:keys [deps-load static-fns src-paths]}]
  (let [io-func (if (or src-paths deps-load) special-fetch io/no-op)
        src-paths (if deps-load (repos) src-paths)]
    (merge (replumb/options :browser src-paths io-func)
           {:warning-as-error false
            :static-fns static-fns
            :context :statement
            :verbose false})))

(defn calc-src-path [path]
  (if-let [p (known-src-paths path)]
    p
    path))

(defn calc-src-paths [src-paths]
  (when (dbg src-paths)
    (dbg (-> (dbg (map calc-src-path src-paths))
             flatten))))

(deftrack eval-async [s & {:keys [deps-load src-paths static-fns] :or {static-fns false src-paths nil deps-load false}}]
  (let [c (chan)
        opts (build-repl-opts {:static-fns static-fns
                               :deps-load deps-load
                               :src-paths (calc-src-paths src-paths)})]
    (replumb/read-eval-call opts #(put! c (convert-eval-res %)) s)
    c))

(deftrack eval [s & {:keys [static-fns] :or {static-fns false deps-load false}}]
  (let [opts (build-repl-opts {:static-fns static-fns})]
    (replumb/read-eval-call opts convert-eval-res s)))

(deftrack eval-native [s & {:keys [static-fns] :or {static-fns false}}]
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

(defn str-eval-async [exp {:keys [src-paths] :or {src-paths nil}}]
  (go
    (<! (eval-async exp :src-paths src-paths)); there is a bug with expressions that contain macro definition and evaluation - see https://github.com/Lambda-X/replumb/issues/185
    (-> (<! (eval-async exp))
        second
        str)))

(defn eval-file [url]
  (io/fetch-file! url (comp print eval)))
