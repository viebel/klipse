(ns klipse.lang.clojure.env
  (:require-macros 
    [cljs.env.macros :as env])
  (:require [cljs.analyzer :as ana]
            [cljs.repl :refer [print-doc]]
            [clojure.string :as string]
            [cljs.js :as cljs]))

(def st (memoize cljs/empty-state))
(defonce ^:private current-ns (atom 'cljs.user))

(defn- drop-macros-suffix
  [ns-name]
  (if (string/ends-with? ns-name "$macros")
    (apply str (drop-last 7 ns-name))
    ns-name))

(defn- add-macros-suffix
  [sym]
  (symbol (str (name sym) "$macros")))

(defn- all-ns
  "Returns a sequence of all namespaces."
  []
  (keys (::ana/namespaces @(st))))

(defn- all-macros-ns []
  (->> (all-ns)
    (filter #(string/ends-with? (str %) "$macros"))))

(defn- get-namespace
  "Gets the AST for a given namespace."
  [ns]
  {:pre [(symbol? ns)]}
  (get-in @(st) [::ana/namespaces ns]))

(defn- resolve-var
  "Given an analysis environment resolve a var. Analogous to
   clojure.core/resolve"
  [env sym]
  {:pre [(map? env) (symbol? sym)]}
  (try
    (ana/resolve-var env sym
      (ana/confirm-var-exists-throw))
    (catch :default _
      (ana/resolve-macro-var env sym))))

(defn- get-macro-var
  [env sym macros-ns]
  {:pre [(symbol? macros-ns)]}
  (when-let [macro-var (env/with-compiler-env (st)
                         (resolve-var env (symbol macros-ns (name sym))))]
    (assoc macro-var :ns macros-ns)))

(defn- get-var
  [env sym]
  (binding [ana/*cljs-warning-handlers* nil]
    (let [var (or (env/with-compiler-env (st) (resolve-var env sym))
                  (some #(get-macro-var env sym %) (all-macros-ns)))]
      (when var
        (-> (cond-> var
              (not (:ns var))
              (assoc :ns (symbol (namespace (:name var))))
              (= (namespace (:name var)) (str (:ns var)))
              (update :name #(symbol (name %))))
          (update :ns (comp symbol drop-macros-suffix str)))))))

(defn- get-aenv []
  (assoc (ana/empty-env)
    :ns (get-namespace @current-ns)
    :context :expr))

(defn- undo-reader-conditional-spacing
    "Undoes the effect that wrapping a reader conditional around
       a defn has on a docstring."
    [s]
    ;; We look for five spaces (or six, in case that the docstring
    ;; is not aligned under the first quote) after the first newline
    ;; (or two, in case the doctring has an unpadded blank line
    ;; after the first), and then replace all five (or six) spaces
    ;; after newlines with two.
    (when-not (nil? s)
          (if (re-find #"[^\n]*\n\n?\s{5,6}\S.*" s)
                  (string/replace-all s #"\n      ?" "\n  ")
                  s)))

(defn- doc* [name]
  (if-let [special-name ('{& fn catch try finally try} name)]
    (doc* special-name)
    (cond
      ;(special-doc-map name)
      ;(cljs.repl/print-doc (special-doc-map name))

      ;(repl-special-doc-map name)
      ;(cljs.repl/print-doc (repl-special-doc name))

      ;(get-namespace name)
      ;(cljs.repl/print-doc (select-keys (get-namespace name) [:name :doc]))

      (get-var (get-aenv) name)
      (symbol (with-out-str (print-doc (let [aenv (get-aenv)
                                     var (get-var aenv name)
                                     m (-> (select-keys var
                                                        [:ns :name :doc :forms :arglists :macro :url])
                                           (update-in [:doc] undo-reader-conditional-spacing)
                                           (merge
                                             {:forms (-> var :meta :forms second)
                                              :arglists (-> var :meta :arglists second)}))]
                                 (cond-> (update-in m [:name] clojure.core/name)
                                   (:protocol-symbol var)
                                   (assoc :protocol true
                                          :methods
                                          (->> (get-in var [:protocol-info :methods])
                                               (map (fn [[fname sigs]]
                                                      [fname {:doc (:doc
                                                                     (get-var aenv
                                                                              (symbol (str (:ns var)) (str fname))))
                                                              :arglists (seq sigs)}]))
                                               (into {})))))))))))

