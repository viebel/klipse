(ns klipse.lang.clojure
  (:require-macros
    [gadjett.core :as gadjett :refer [dbg]]
    [purnam.core :refer [!]]
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    klipse.lang.clojure.bundled-namespaces
    gadjett.core-fn
    cljsjs.codemirror.mode.clojure
    [cljs.tools.reader :as r]
    [cljs.tools.reader.reader-types :as rt]
    [klipse.lang.clojure.guard :refer [min-max-eval-duration my-emits watchdog]]
    [clojure.string :as s]
    [clojure.pprint :as pprint]
    [cljs.analyzer :as ana]
    [cljs.compiler :as compiler]
    [klipse.common.registry :refer [register-mode]]
    [klipse.lang.clojure.io :as io]
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

(defn update-current-ns [{:keys [ns form warning error value success?]}]
  (when-not error
    (reset! current-ns ns)))

(defn result-as-str [{:keys [ns form warning error value success?] :as args} opts]
  (when-not error
    (reset! current-ns ns))
  (let [status (if error :error :ok)
        res (if-not error
                (display value opts)
             (pr-str error))]
    [status res]))

(defn read-result [{:keys [form warning error value success?]:as args}]
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

(defn core-eval-an-exp [s {:keys [static-fns external-libs verbose max-eval-duration] :or {static-fns false external-libs nil max-eval-duration min-max-eval-duration}}]
  (let [c (chan)
        max-eval-duration (max max-eval-duration min-max-eval-duration)]
    (with-redefs [cljs.analyzer/*cljs-ns* @current-ns
                  *ns* (create-ns @current-ns)
                  compiler/emits (partial my-emits max-eval-duration)]
      ; we have to set `env/*compiler*` because `binding` and core.async don't play well together (https://www.reddit.com/r/Clojure/comments/4wrjw5/withredefs_doesnt_play_well_with_coreasync/) and the code of `eval-str` uses `binding` of `env/*compiler*`.
      (cljs/eval-str (create-state-eval)
                 s
                 "my.klipse"
                 {:eval my-eval
                  :ns @current-ns
                  :def-emits-var true
                  :verbose verbose
                  :*compiler* (set! env/*compiler* (create-state-eval))
                  :context :expr
                  :static-fns static-fns
                  :load (partial io/load-ns external-libs)}
                 (fn [res]
                   (update-current-ns res)
                   (put! c res))))
    c))

(defn read-chars
  [reader]
  (loop [res []]
    (if-let [ch (rt/read-char reader)]
      (recur (conj res ch))
      res)))

(defn reader-content [r]
  (apply str (read-chars r)))

(defn first-exp-and-rest [s]
  (binding [ana/*cljs-ns* @current-ns
            *ns* (create-ns @current-ns)
            ;env/*compiler* st
            ;r/*data-readers* tags/*cljs-data-readers*
            r/resolve-symbol identity
            ;r/*alias-map* (current-alias-map)
            ]
    (let [sentinel (js-obj)
          reader (rt/string-push-back-reader s)
          res (r/read reader false sentinel)]
      (if (= sentinel res)
        ["" ""]
        (let [rest-s (reader-content reader)
              first-exp (subs s 0 (- (count s) (count rest-s)))]
          [(s/replace first-exp #"^[\s\n]*" "")
           rest-s])))))


(defn split-expressions [s]
  (loop [s s res []]
    (if (empty? s)
      res
      (let [[exp rest-s] (first-exp-and-rest s)]
        (if (empty? exp)
          (recur rest-s res)
          (recur rest-s (conj res exp)))))))

(defn core-eval [s opts]
  (go
    (try
      (loop [exps (split-expressions s) last-res nil]
        (if (seq exps)
          (let [{:keys [error] :as res} (<! (core-eval-an-exp (first exps) opts))]
            (if error
              res
              (recur (rest exps) res)))
          last-res))
      (catch :default e
        {:error e}))))

(defn eval-async [s opts]
  (go
    (-> (<! (core-eval s opts))
        (result-as-str opts))))

(defn eval
  "used for testing and exporting to javascript"
  ^{:export true}
  ([s] (eval s {}))
  ([s opts] (go (-> (<! (core-eval s opts))
                    read-result))))

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
  (go (-> (<! (eval exp))
          second
          str)))

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
