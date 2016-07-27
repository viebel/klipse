(ns klipse.compiler
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require 
    cljsjs.js-beautify
    [cljs.reader :refer [read-string]]
    [klipse.plugin :refer [register-mode]]
    [klipse.io :as io]
    [clojure.string :as s]
    [cljs.core.async :refer [chan put! <!]]
    [gadjett.core :as gadjett :refer-macros [deftrack dbg]]
    [replumb.core :as replumb]
    [cljs.js :as cljs]))


;; =============================================================================
;; Compiler functions

;; create cljs.user
;(set! (.. js/window -cljs -user) #js {})
; the following code is advanced compilation friendly
(js* "window.cljs.user = {}")


(defn load-inlined [opts cb]
  (print "load-inlined: " opts)
  (cb {:lang :js :source ""}))

(def known-external-lib
  {
   "immutable" "https://raw.githubusercontent.com/facebook/immutable-js/master/dist/immutable.min.js"
   "jQuery" "https://code.jquery.com/jquery-2.2.4.min.js"
   "underscore" "http://underscorejs.org/underscore-min.js"})

(def known-src-paths 
  {"cljs-repo" "http://viebel.github.io/cljs-self-host-repository/repository"
   ;"om" "https://raw.githubusercontent.com/omcljs/om/master/src/main/"
   "core.async" "https://raw.githubusercontent.com/mfikes/andare/master/src/main/clojure/"
   ;"cognitect-transit-cljs" "https://raw.githubusercontent.com/cognitect/transit-cljs/master/src"
   ;"cognitect-transit-js" "https://raw.githubusercontent.com/cognitect/transit-js/master/src/"
   ;"datascript" "https://raw.githubusercontent.com/viebel/datascript/master/src/"
   ;"devtools" "https://raw.githubusercontent.com/binaryage/cljs-devtools/master/src" 
   ;"gadjett" "https://raw.githubusercontent.com/viebel/gadjett/master/src"
   "gist" "https://gist.githubusercontent.com"
   "clojurescript" ["https://raw.githubusercontent.com/clojure/clojurescript/master/src/main/clojure" "https://raw.githubusercontent.com/clojure/clojurescript/master/src/main/cljs"]
   ;"cemerick-url" "https://raw.githubusercontent.com/viebel/url/master/src/"
   ;"pathetic" "https://raw.githubusercontent.com/viebel/pathetic/develop/src/"
   ;"tools.reader" "https://raw.githubusercontent.com/viebel/tools.reader/master/src/main/cljs/"
   })

(defn repos [additional-libs]
  (-> (vals known-src-paths)
      flatten
      (concat additional-libs)))

(defn special-fetch [file-url src-cb]
  (-> (s/replace file-url #"gist_" "")
      (io/fetch-file! src-cb)))

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

(defn beautify [js-exp]
  (try 
    (-> js-exp
        js/JSON.stringify
        js/js_beautify)
    (catch js/Object o
      (str js-exp))))


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

(deftrack compile-async [s {:keys [static-fns] :or {static-fns false}}]
  (let [c (chan)]
    (cljs/compile-str (cljs/empty-state) s
                      "cljs-in"
                      {
                       :static-fns static-fns
                       :load load-inlined
                       }
                      #(put! c (convert-compile-res %)))
    c))

(defn build-repl-opts [{:keys [static-fns context external-libs]}]
  (merge (replumb/options :browser (repos external-libs) special-fetch)
         {:warning-as-error false
          :static-fns static-fns
          :context (or context :statement)
          :verbose false}))
     
(deftrack eval-async-1 [s {:keys [static-fns context external-libs] :or {static-fns false context nil external-libs '()}}]
  (let [c (chan)
        opts (dbg (build-repl-opts {:static-fns static-fns
                                    :external-libs external-libs
                                    :context (keyword context)}))]
    (replumb/read-eval-call opts #(put! c (convert-eval-res %)) s)
    c))

(defn contains-macro-def? [exp]
  (re-find #"\$macros" exp))

(deftrack eval-async [s args]
  (go 
    (when (contains-macro-def? s) ; there is a bug with expressions that contain macro definition and evaluation - see https://github.com/Lambda-X/replumb/issues/185
      (<! (eval-async-1 s args))) ; the workaround is to evaluate twice
    (<! (eval-async-1 s args))))

(deftrack eval [s & {:keys [static-fns external-libs context] :or {static-fns false external-libs '() context nil}}]
  (let [opts (build-repl-opts {:static-fns static-fns
                               :external-libs external-libs
                               :context (keyword context)})]
    (replumb/read-eval-call opts convert-eval-res s)))

(defn str-compile [exp]
  (-> (compile exp)
      second
      str))

(defn str-compile-async [exp {:keys [static-fns] :or {static-fns false}}]
  (go
  (-> (<! (compile-async exp {:static-fns static-fns}))
      second
      str)))

(defn str-eval [exp]
  (-> (eval exp)
      second
      str))

(defn my-str [x]
  (if (nil? x)
    "nil"
    (str x)))

(defn str-eval-async [exp {:keys [static-fns context external-libs] :or {static-fns false external-libs '()} :as the-args}]
  (go
    (-> (<! (eval-async exp {:static-fns static-fns
                             :external-libs external-libs
                             :context context}))
        second
        my-str)))

(defn eval-file [url]
  (io/fetch-file! url (comp print eval)))

(def eval-opts {:editor-in-mode "clojure"
                  :editor-out-mode "clojure"
                  :eval-fn str-eval-async
                  :comment-str ";"})

(def compile-opts {:editor-in-mode "clojure"
                  :editor-out-mode "javascript"
                  :eval-fn str-compile-async
                  :comment-str ";"})

(register-mode "eval-clojure" "selector" eval-opts)
(register-mode "transpile-clojurescript" "selector_js" compile-opts)
