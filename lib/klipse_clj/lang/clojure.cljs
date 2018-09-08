(ns klipse-clj.lang.clojure
  (:require-macros
    [gadjett.core :refer [dbg]]
    [purnam.core :refer [!]]
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    klipse-clj.lang.clojure.bundled-namespaces
    gadjett.core-fn
    [goog.dom :as gdom]
    [clojure.string :refer [blank?]]
    [klipse-clj.lang.clojure.include :refer [create-state-eval]]
    [klipse-clj.lang.clojure.guard :refer [min-max-eval-duration my-emits watchdog]]
    [klipse-clj.lang.clojure.io :as io]
    [clojure.pprint :as pprint]
    [cljs.analyzer :as ana]
    [cljs.reader :refer [read-string]]
    [cljs.tools.reader :as r]
    [cljs.tools.reader.reader-types :as rt]
    [clojure.string :as s]
    [cljs.compiler :as compiler]
    [cljs.core.async :refer [timeout chan put! <!]]
    [cljs.env :as env]
    [cljs.js :as cljs]))

;; create cljs.user
;(set! (.. js/window -cljs -user) #js {})
; the following code is advanced compilation friendly
(js* "if(typeof window !== \"undefined\") {window.cljs.user = {}}")


(defonce ^:private current-ns (atom 'cljs.user))

(defn- current-alias-map
  []
  (->> (merge (get-in @(create-state-eval) [::ana/namespaces @current-ns :requires])
              (get-in @(create-state-eval) [::ana/namespaces @current-ns :require-macros]))
       (remove (fn [[k v]] (= k v)))
       (into {})))
(defn display [value {:keys [print-length beautify-strings]}]
  (with-redefs [*print-length* print-length]
    (with-out-str (pprint/pprint
                    (if (and (string? value) beautify-strings)
                      (symbol value)
                      value)))))

(defn update-current-ns [{:keys [ns form warning error value success?]} verbose?]
  (when-not error
    (when verbose? (js/console.info "update-current-ns:" (str ns)))
    (reset! current-ns ns)))

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

(defn convert-compile-res [{:keys [value error] :as foo}]
  (let [status (if error :error :ok)
        res (if error
              error
              (advanced-compile value))]
    [status res]))

(defn my-eval [{:keys [file source file lang name path cache] :as args}]
  (watchdog)
  (cljs/js-eval args))

(defn eval-for-compilation [{:keys [source]}]
  source)

; store the original compiler/emits - as I'm afraid things might get wrong with all the with-redefs (especially with core.async. See http://dev.clojure.org/jira/browse/CLJS-1634
(def original-emits compiler/emits)

(defn core-compile-an-exp [s {:keys [static-fns external-libs max-eval-duration compile-display-guard verbose?]
                              :or {static-fns false external-libs nil max-eval-duration min-max-eval-duration compile-display-guard false :verbose? false}}]
  (let [c (chan)
        max-eval-duration (max max-eval-duration min-max-eval-duration)
        the-emits (if compile-display-guard (partial my-emits max-eval-duration) original-emits)]
    (with-redefs [compiler/emits the-emits]
      (cljs/eval-str (create-state-eval) s
                        "cljs-in"
                     {
                      :eval       eval-for-compilation
                      :ns         @current-ns
                      :static-fns static-fns
                      :*compiler* (set! env/*compiler* (create-state-eval))
                      :verbose    verbose?
                      :load       (partial io/load-ns external-libs)
                      }
                        (fn [res]
                          (update-current-ns res verbose?)
                          (put! c res))))
    c))

(defn core-eval-an-exp [s {:keys [static-fns external-libs max-eval-duration verbose?] :or {static-fns false external-libs nil max-eval-duration min-max-eval-duration verbose? false}}]
  (let [c (chan)
        max-eval-duration (max max-eval-duration min-max-eval-duration)]
    (with-redefs [compiler/emits (partial my-emits max-eval-duration)]
                 ; we have to set `env/*compiler*` because `binding` and core.async don't play well together (https://www.reddit.com/r/Clojure/comments/4wrjw5/withredefs_doesnt_play_well_with_coreasync/) and the code of `eval-str` uses `binding` of `env/*compiler*`.
                 (cljs/eval-str (create-state-eval)
                                s
                                "my.klipse"
                                {:eval          my-eval
                                 :ns            @current-ns
                                 :def-emits-var true
                                 :verbose       verbose?
                                 :*compiler*    (set! env/*compiler* (create-state-eval))
                                 :context       :expr
                                 :static-fns    static-fns
                                 :load          (partial io/load-ns external-libs)}
                                (fn [res]
                                  (update-current-ns res verbose?)
                                  (put! c res))))
    c))

(defn- read-chars
  [reader]
  (loop [res []]
    (if-let [ch (rt/read-char reader)]
      (recur (conj res ch))
      res)))

(defn reader-content [r]
  (apply str (read-chars r)))

(defn first-exp-and-rest [s]
  (binding [r/*alias-map* (current-alias-map)
            *ns* @current-ns]
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

(comment
  (js/alert 1)
  (split-expressions "::a")
  (first-exp-and-rest "::a")
  (r/read (rt/string-push-back-reader "::a"))

  (let [s "::aa"
        sentinel (js-obj)
        reader (rt/string-push-back-reader s)
        res (r/read reader false sentinel)]
    (if (= sentinel res)
      ["" ""]
      (let [rest-s (reader-content reader)
            first-exp (subs s 0 (- (count s) (count rest-s)))]
        [(s/replace first-exp #"^[\s\n]*" "")
         rest-s])))

  )

(defn populate-err [res {:keys [result-element container]}]
  (when (and container (not result-element))
    (gdom/setTextContent container (str (:error res))))
  res)

(defn core-eval [s opts]
  (go
    (try
      (loop [[exp rest-exps] (first-exp-and-rest s)
             last-res nil]
        (if (not (empty? exp))
          (let [res (<! (core-eval-an-exp exp opts))]
            (if (:error res)
              (populate-err res opts)
              (recur (first-exp-and-rest rest-exps)
                     res)))
          last-res))
      (catch js/Object e
        (populate-err {:error e} opts)))))

(defn ns-exp?
  "receives a string.
  returns true if the expression is a string of an ns-form like (ns my.foo...) or (require 'my.foo).
  "
  [exp]
  (let [form (read-string exp)]
    (and (seq? form)
         ('#{ns require-macros use use-macros import refer-clojure require} (first form)))))


(defn core-compile [s opts]
  (go
    (try
      (loop [exps (split-expressions s) all-res ""]
        (if (seq exps)
          (let [exp (first exps)
                _ (when (ns-exp? exp) (<! (core-eval-an-exp exp opts)))
                res (<! (core-compile-an-exp exp opts))]
            (if (:error res)
              res
              (recur (rest exps) (str all-res (:value res)))))
          {:value all-res}))
      (catch :default e
        {:error e}))))


(defn eval-async [s opts]
  (go
    (-> (<! (core-eval s opts))
        (result-as-str opts))))

(defn the-eval
  "used for testing"
  ([s] (the-eval s {}))
  ([s opts] (go (-> (<! (core-eval s opts))
                    read-result))))

(defn eval-and-callback
  "to be called from javascript"
  ^{:export true}
  [s cb]
  (go (-> (<! (the-eval s))
          clj->js
          cb)))

(defn str-compile "useful for testing and js export"
  ^{:export true}
  ([exp] (str-compile exp {}))
  ([exp opts] (go (-> (<! (core-compile exp opts))
                      convert-compile-res))))

(defn compile-async [exp opts]
  (go (-> (<! (core-compile exp opts))
          (convert-compile-res))))

(defn str-compile-async [exp opts]
  (go (-> (<! (compile-async exp opts))
          second
          str)))

(defn str-eval-async [exp {:keys [container-id setup-container-fn :verbose] :as opts}]
  (let [c (chan)]
    (when verbose? (js/console.info "[clojure] evaluating" exp))
    (go
      (if (blank? exp)
        (put! c "")
        (do
          (when setup-container-fn
            (setup-container-fn container-id))
          (binding [*print-newline* true
                    *print-fn* #(put! c %)]
            (put! c (-> (<! (eval-async exp opts))
                        second))))))
    c))
