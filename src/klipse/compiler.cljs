(ns klipse.compiler
  (:require-macros
    [gadjett.core :as gadjett :refer [dbg]]
    [purnam.core :refer [!]]
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    gadjett.core-fn
    cljsjs.codemirror.mode.clojure
    [clojure.pprint :as pprint]
    [cljs.reader :refer [read-string]]
    [klipse.plugin :refer [register-mode]]
    [klipse.io :as io]
    [clojure.string :as s :refer [starts-with?]]
    [cljs.analyzer.api :as api]
    [cljs.analyzer :as ana]
    [cljs.compiler :refer [emits emit *source-map-data*]]
    [cljs.core.async :refer [chan put! <!]]
    [replumb.core :as replumb]
    [cljs.env :as env]
    [cljs.js :as cljs]))


(def ^{:dynamic true
       :doc "The compiler to use. It could be either :core or :replumb"}
  *compiler-name* :core)

(def ^{:export true
       :dynamic true}
  starttime 0)

(defn ^{:export true}
  guard []
  (js/console.log (system-time) starttime (- (system-time) starttime))
  (when (> (- (system-time) starttime) 1000)
    (throw (str "Infinite Loop"))))

; TODO is there a way to call the original emits function after the guard insertion - instead of pasting the original code. The problem is with the recursive call to emits
(defn my-emits
  "same as cljs.compiler/emits with insertion og `guard` call before if and recur (emitted as continue) statement"
  [& xs]
  (when (and (string? (first xs)) (re-matches #"^(if|continue).*" (first xs)))
    (print "klipse.compiler.guard();"))
  (doseq [x xs]
    (cond
     (nil? x) nil
     (ana/cljs-map? x) (emit x)
     (ana/cljs-seq? x) (apply my-emits x); call my-emits recursively and not emits
     ^boolean (goog/isFunction x) (x)
     :else (let [s (print-str x)]
             (when-not (nil? *source-map-data*)
               (swap! *source-map-data*
                 update-in [:gen-col] #(+ % (count s))))
             (print s))))
  nil)

;; =============================================================================
;; Compiler functions

;; create cljs.user
;(set! (.. js/window -cljs -user) #js {})
; the following code is advanced compilation friendly
(js* "window.cljs.user = {}")


(def create-state-eval (memoize cljs/empty-state))
(def create-state-compile (memoize cljs/empty-state))

(defn display [value {:keys [print-length beautify-strings]}]
  (with-redefs [*print-length* print-length]
    (with-out-str (pprint/pprint
                    (if (and (string? value) beautify-strings)
                      (symbol value)
                      value)))))


(defn result-as-str [{:keys [form warning error value success?]} opts]
  (let [status (if error :error :ok)
        res (if-not error
                (display value opts)
             (pr-str error))]
    [status res]))

(defn read-result [{:keys [form warning error value success?]}]
  (let [status (if error :error :ok)
        res (if-not error
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

(defn compile [s {:keys [static-fns external-libs verbose] :or {static-fns false external-libs nil}} cb]
  (with-redefs [cljs.compiler/emits my-emits]; TODO make it optional
    (cljs/compile-str (create-state-compile) s
                      "cljs-in"
                      {
                       :static-fns static-fns
                       :external-libs external-libs
                       :verbose verbose
                       :load (partial io/load-ns external-libs)
                       }
                      cb)))

(defmulti core-eval (fn [& args]
                      *compiler-name*))

(defn build-repl-opts [{:keys [static-fns context external-libs verbose]}]
  (merge (replumb/options :browser (partial io/load-ns external-libs))
         {:warning-as-error false
          :static-fns static-fns
          :verbose verbose
          :no-pr-str-on-value true
          :context (or context :statement)}))

(defn my-eval [{:keys [file source file lang name path cache] :as args}]
  (set! starttime (system-time))
  (cljs/js-eval args))

(defmethod core-eval :replumb [s {:keys [preamble static-fns context verbose external-libs] :or {preamble "" static-fns false context nil external-libs nil}} cb]
  (with-redefs [cljs.compiler/emits my-emits]
    (let [opts (build-repl-opts {:static-fns static-fns
                                 :eval-fn my-eval
                                 :external-libs external-libs
                                 :verbose verbose
                                 :context (keyword context)})]
      (! js/window.COMPILED true); for some reason it is required with read-eval-call
      (replumb/read-eval-call opts cb (str preamble s)))))

(defmethod core-eval :core [s {:keys [preamble static-fns context external-libs verbose] :or {preamble "" static-fns false context nil external-libs nil}} cb]
  (with-redefs [cljs.compiler/emits my-emits]
    ; we have to set `env/*compiler*` because `binding` and core.async don't play well together (https://www.reddit.com/r/Clojure/comments/4wrjw5/withredefs_doesnt_play_well_with_coreasync/) and the code of `eval-str` uses `binding` of `env/*compiler*`.
    (cljs/eval-str (create-state-eval)
                   (str preamble s)
                   "my.klipse" {:eval my-eval
                                :def-emits-var true
                                :verbose verbose
                                :*compiler* (set! env/*compiler* (create-state-eval))
                                :context (keyword context)
                                :static-fns static-fns
                                :load (partial io/load-ns external-libs)}
                   cb)))

(defn eval-async-1 [s {:keys [print-length] :as opts}]
  (let [c (chan)]
    (core-eval s opts #(put! c (result-as-str % opts)))
    c))

(defn eval
  "used for testing and exporting to javascript"
  ^{:export true}
  ([s] (eval s {}))
  ([s opts] (core-eval s opts read-result)))

(defn contains-macro-def? [exp]
  (re-find #"\$macros" exp))

(defn eval-async [s args]
  (go
    (when (contains-macro-def? s) ; By design in bootstraped cljs. David Nolen and Mike Fikes told a couple of times: Macros should be defined in a previous compilation stage than their execution - see https://github.com/Lambda-X/replumb/issues/185
      (<! (eval-async-1 s args))) ; the workaround is to evaluate twice
    (<! (eval-async-1 s args))))

(defn str-compile "useful for testing and js export"
  ^{:export true}
  ([exp] (str-compile exp {}))
  ([exp opts] (-> (compile exp opts convert-compile-res))))

(defn compile-async [exp {:keys [static-fns external-libs verbose] :or {static-fns false external-libs nil}}]
  (let [c (chan)]
    (compile exp {:static-fns static-fns
                  :verbose verbose
                  :external-libs external-libs}
             #(put! c (convert-compile-res %)))
    c))

(defn str-compile-async [exp opts]
  (go (-> (<! (compile-async exp opts))
          second
          str)))

(defn ^:export str-eval
  "It is convenient to have a javascript function that evaluates clojure expressions"
  [exp]
  (-> (eval exp)
      second
      str))

(defn str-eval-async [exp opts]
  (go
    (-> (<! (eval-async exp opts))
        second)))

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
