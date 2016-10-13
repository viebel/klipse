(ns klipse.compiler
  (:require-macros
    [cljs.core.match :refer [match]]
    [gadjett.core :as gadjett :refer [deftrack dbg]]
    [cljs.core.async.macros :refer [go go-loop]])
  (:require 
    gadjett.core-fn
    cljsjs.codemirror.mode.clojure
    [cljs.reader :refer [read-string]]
    [klipse.plugin :refer [register-mode]]
    [klipse.io :as io]
    [clojure.string :as s]

    [cljs.analyzer.api :as api]
    [cljs.core.async :refer [chan put! <!]]
    [replumb.core :as replumb]
    cljs.env
    [cljs.js :as cljs]))


;; =============================================================================
;; Compiler functions

;; create cljs.user
;(set! (.. js/window -cljs -user) #js {})
; the following code is advanced compilation friendly
(js* "window.cljs.user = {}")


(defn load-inlined [opts cb]
  (cb {:lang :js :source ""}))

(def known-src-paths 
  {"goog-closure" "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/"
   "gist" "https://gist.githubusercontent.com"
  "clojurescript" ["https://raw.githubusercontent.com/clojure/clojurescript/r1.9.225/src/main/clojure" "https://raw.githubusercontent.com/clojure/clojurescript/r1.9.225/src/main/cljs"]
   })

(defn repos [additional-libs]
  (-> (vals known-src-paths)
      flatten
      (concat additional-libs)))

(defn special-fetch [file-url src-cb]
  (-> (s/replace file-url #"gist_" "")
      (io/fetch-file! src-cb)))


(defn display [value {:keys [print-length beautify-strings]}]
  (with-redefs [*print-length* print-length]
    (pr-str (if (and (string? value) beautify-strings)
              (symbol value)
              value))))


(defn result-as-str [{:keys [form warning error value success?]} opts]
  (let [status (if error :error :ok)
        res (if success?
                (display value opts)
             (pr-str error))]
    [status res]))

(defn read-result [{:keys [form warning error value success?]}]
  (let [status (if error :error :ok)
        res (if success?
              value
              error)]
    [status res]))

(defn advanced-compile [code]
  code
   #_(let [flags  (clj->js {:jsCode [{:src code}]
                          :compilationLevel "ADVANCED"})
         _ (js/console.log flags)
         result (aget (js/compile flags) "compiledCode")]
     result))

(defn convert-compile-res [{:keys [value error]}]
  (let [status (if error :error :ok)
        res (if error
              error
              (advanced-compile value))]
    [status res]))

(deftrack compile [s {:keys [static-fns] :or {static-fns false}}]
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
  (merge (replumb/options :browser #_(repos external-libs) (partial io/no-op external-libs))
         {:warning-as-error false
          :static-fns static-fns
          :no-pr-str-on-value true
          :context (or context :statement)
          :verbose false}))

(defn core-eval [s {:keys [static-fns context external-libs] :or {static-fns false context nil external-libs '()}} cb]
  (let [opts (build-repl-opts {:static-fns static-fns
                               :external-libs external-libs
                               :context (keyword context)})]
    (set! js/COMPILED true)
    (replumb/read-eval-call opts cb s)))

(defn core-eval-js [s {:keys [static-fns context external-libs] :or {static-fns false context nil external-libs '()}} cb]
  (let [st (cljs/empty-state)]
    (cljs/eval-str st s  "aaa" {:eval cljs/js-eval :load io/no-op} cb) ))

(deftrack eval-async-1 [s {:keys [print-length] :as opts}]
  (let [c (chan)]
    (core-eval s opts #(put! c (result-as-str % opts)))
    c))

(defn eval
  "used for testing and exporting to javascript"
  ([s] (eval s {}))
  ([s opts] (core-eval s opts read-result)))

(defn contains-macro-def? [exp]
  (re-find #"\$macros" exp))

(deftrack eval-async [s args]
  (go
    (when (contains-macro-def? s) ; By design in bootstraped cljs. David Nolen and Mike Fikes told a couple of times: Macros should be defined in a previous compilation stage than their execution - see https://github.com/Lambda-X/replumb/issues/185
      (<! (eval-async-1 s args))) ; the workaround is to evaluate twice
    (<! (eval-async-1 s args))))

(defn str-compile [exp]
  (-> (compile exp)
      second
      str))

(defn str-compile-async [exp {:keys [static-fns] :or {static-fns false}}]
  (go
  (-> (<! (compile-async exp {:static-fns static-fns}))
      second
      str)))

(defn ^:export str-eval
  "It is convenient to have a javascript function that evaluates clojure expressions"
  [exp]
  (-> (eval exp)
      second
      str))

(defn my-str [x]
  (if (nil? x)
    "nil"
    (str x)))

(defn str-eval-async [exp opts]
  (go
    (-> (<! (eval-async exp opts))
        second)))

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
