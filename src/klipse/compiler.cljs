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
  {"klipse" "http://app.klipse.tech/fig/js"
   "klipse-git" "https://raw.githubusercontent.com/viebel/klipse/master/src"
   "devtools" "https://raw.githubusercontent.com/binaryage/cljs-devtools/master/src" 
   "gadjett" "https://raw.githubusercontent.com/viebel/gadjett/master/src"
   "clojurescript" ["https://raw.githubusercontent.com/clojure/clojurescript/master/src/main/clojure" "https://raw.githubusercontent.com/clojure/clojurescript/master/src/main/cljs"]
   })

(defn repos []
  ["/fig/js"
   "https://gist.githubusercontent.com/"
   "https://raw.githubusercontent.com/clojure/clojurescript/master/src/main/clojure" 
   "https://raw.githubusercontent.com/clojure/clojurescript/master/src/main/cljs" 
   ;"https://raw.githubusercontent.com/mfikes/planck/master/planck-cljs/src/"
   ;"https://raw.githubusercontent.com/clojure/tools.reader/master/src/main/cljs/"
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

(defn src-paths-option [src-paths deps-load]
  (if deps-load
    (repos)
    (if-not src-paths
      ["dummy-path-for-no-op"]
      src-paths)))

(defn calc-src-path [path]
  (if-let [p (dbg (known-src-paths path))]
    p
    path))

(defn calc-src-paths [src-paths deps-load]
  (->> (src-paths-option src-paths deps-load)
    (map calc-src-path)
    flatten))
 
(defn build-repl-opts [{:keys [deps-load static-fns src-paths]}]
  (let [io-func (if (or src-paths deps-load) special-fetch io/no-op)
        src-paths (calc-src-paths src-paths deps-load)]
    (merge (replumb/options :browser src-paths io-func)
           {:warning-as-error false
            :static-fns static-fns
            :context :statement
            :verbose false})))
     
(deftrack eval-async-1 [s {:keys [deps-load src-paths static-fns] :or {static-fns false src-paths nil deps-load false}}]
  (print "eval-async-1: " deps-load)
  (let [c (chan)
        opts (dbg (build-repl-opts {:static-fns static-fns
                                    :deps-load deps-load
                                    :src-paths src-paths}))]
    (replumb/read-eval-call opts #(put! c (convert-eval-res %)) s)
    c))

(defn contains-macro-def? [exp]
  (re-find #"\$macros" exp))

(deftrack eval-async [s args]
  (go 
    (when (contains-macro-def? s) ; there is a bug with expressions that contain macro definition and evaluation - see https://github.com/Lambda-X/replumb/issues/185
      (<! (eval-async-1 s args))) ; the workaround is to evaluate twice
    (<! (eval-async-1 s (dbg args)))))

(deftrack eval [s {:keys [static-fns] :or {static-fns false deps-load false}}]
  (let [opts (build-repl-opts {:static-fns static-fns})]
    (replumb/read-eval-call opts convert-eval-res s)))

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
  (print "str-eval-async:"  src-paths)
  (go
    (-> (<! (eval-async exp {:src-paths src-paths}))
        second
        str)))

(defn eval-file [url]
  (io/fetch-file! url (comp print eval)))
