(ns klipse.compiler
  (:require-macros
    [gadjett.core :as gadjett :refer [dbg]]
    [purnam.core :refer [!]]
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    klipse.bundled-namespaces
    gadjett.core-fn
    cljsjs.codemirror.mode.clojure
    [klipse.guard :refer [min-max-eval-duration my-emits watchdog]]
    [clojure.pprint :as pprint]
    [replumb.core :as replumb]
    [cljs.analyzer :as ana]
    [cljs.compiler :as compiler]
    [klipse.plugin :refer [register-mode]]
    [klipse.io :as io]
    [cljs.core.async :refer [timeout chan put! <!]]
    [cljs.env :as env]
    [cljs.js :as cljs]))


;; create cljs.user
;(set! (.. js/window -cljs -user) #js {})
; the following code is advanced compilation friendly
(js* "window.cljs.user = {}")


(defonce ^:private current-ns (atom 'cljs.user))

(def create-state-eval (memoize cljs/empty-state))
(def create-state-compile (memoize cljs/empty-state))

(defn display [value {:keys [print-length beautify-strings]}]
  (with-redefs [*print-length* print-length]
    (with-out-str (pprint/pprint
                    (if (and (string? value) beautify-strings)
                      (symbol value)
                      value)))))



(defn result-as-str [{:keys [ns form warning error value success?] :as args} opts]
  (when-not error
    (reset! current-ns ns))
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

(defn my-eval [{:keys [file source file lang name path cache] :as args}]
  (watchdog)
  (cljs/js-eval args))

; store the original compiler/emits - as I'm afraif things might get wrong with all the with-redefs (especially with core.async. See http://dev.clojure.org/jira/browse/CLJS-1634
(def original-emits compiler/emits)

(defn compile [s {:keys [static-fns external-libs verbose max-eval-duration compile-display-guard] :or {static-fns false external-libs nil max-eval-duration min-max-eval-duration compile-display-guard false}} cb]
  (let [max-eval-duration (max max-eval-duration min-max-eval-duration)
        the-emits (if compile-display-guard (partial my-emits max-eval-duration) original-emits)]
    (with-redefs [compiler/emits the-emits]
      (cljs/compile-str (create-state-compile) s
                        "cljs-in"
                        {
                         :eval my-eval
                         :static-fns static-fns
                         :verbose verbose
                         :load (partial io/load-ns external-libs)
                         }
                        cb))))

(defn build-repl-opts [{:keys [static-fns context external-libs verbose]}]
    (merge (replumb/options :browser (partial io/load-ns external-libs))
                    {:warning-as-error false
                               :static-fns static-fns
                               :verbose verbose
                               :no-pr-str-on-value true
                               :context (or context :statement)}))

(defn another-core-eval [s {:keys [preamble static-fns context verbose external-libs max-eval-duration] :or {preamble "" static-fns false context nil external-libs nil max-eval-duration min-max-eval-duration}} cb]
  (watchdog); run the watchdog here as in replumb there is no way to override eval-fn
  (let [max-eval-duration (max max-eval-duration min-max-eval-duration)]
    (with-redefs [compiler/emits (partial my-emits max-eval-duration)]
    (let [opts (build-repl-opts {:static-fns static-fns
                                                                :external-libs external-libs
                                                                :verbose verbose
                                                                :context (keyword context)})]
          (! js/window.COMPILED true); for some reason it is required with read-eval-call
          (replumb/read-eval-call opts cb (str preamble s))))))


(defn core-eval [s {:keys [preamble static-fns context external-libs verbose max-eval-duration] :or {preamble "" static-fns false context nil external-libs nil max-eval-duration min-max-eval-duration}} cb]
  (let [max-eval-duration (max max-eval-duration min-max-eval-duration)]
    (with-redefs [cljs.analyzer/*cljs-ns* @current-ns
                  *ns* (create-ns @current-ns)
                  compiler/emits (partial my-emits max-eval-duration)]
      ; we have to set `env/*compiler*` because `binding` and core.async don't play well together (https://www.reddit.com/r/Clojure/comments/4wrjw5/withredefs_doesnt_play_well_with_coreasync/) and the code of `eval-str` uses `binding` of `env/*compiler*`.
      (cljs/eval-str (create-state-eval)
                     (str preamble s)
                     "my.klipse"
                     {:eval my-eval
                      :ns @current-ns
                      :def-emits-var true
                      :verbose verbose
                      :*compiler* (set! env/*compiler* (create-state-eval))
                      :context (keyword context)
                      :static-fns static-fns
                      :load (partial io/load-ns external-libs)}
                     cb))))

(defn eval-async-1 [s opts]
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

(defn compile-async [exp opts]
  (let [c (chan)]
    (compile exp opts
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
