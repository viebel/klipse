(ns klipse.lang.clojure.repl
  (:refer-clojure :exclude [load-file])
  (:require [clojure.string :as string]
            [clojure.set :as set]
            [clojure.data.json :as json]
            [clojure.tools.reader :as reader]
            [clojure.tools.reader.reader-types :as readers]
            [cljs.tagged-literals :as tags]
            [cljs.compiler :as comp]
            [cljs.analyzer :as ana]
            [cljs.analyzer.api :as ana-api]
            [cljs.env :as env]))

 

(def ^:dynamic *cljs-verbose* false)
(def ^:dynamic *repl-opts* nil)

(def special-doc-map
  '{. {:forms [(.instanceMethod instance args*)
               (.-instanceField instance)]
       :doc "The instance member form works for methods and fields.
  They all expand into calls to the dot operator at macroexpansion time."}
    ns {:forms [(name docstring? attr-map? references*)]
        :doc "You must currently use the ns form only with the following caveats

    * You must use the :only form of :use
    * :require supports :as, :refer, and :rename
      - all options can be skipped
      - in this case a symbol can be used as a libspec directly
        - that is, (:require lib.foo) and (:require [lib.foo]) are both
          supported and mean the same thing
      - :rename specifies a map from referred var names to different
        symbols (and can be used to prevent clashes)
      - prefix lists are not supported
    * The only options for :refer-clojure are :exclude and :rename
    * :import is available for importing Google Closure classes
      - ClojureScript types and records should be brought in with :use
        or :require :refer, not :import ed
    * Macros must be defined in a different compilation stage than the one
      from where they are consumed. One way to achieve this is to define
      them in one namespace and use them from another. They are referenced
      via the :require-macros / :use-macros options to ns
      - :require-macros and :use-macros support the same forms that
        :require and :use do

  Implicit macro loading: If a namespace is required or used, and that
  namespace itself requires or uses macros from its own namespace, then
  the macros will be implicitly required or used using the same
  specifications. Furthermore, in this case, macro vars may be included
  in a :refer or :only spec. This oftentimes leads to simplified library
  usage, such that the consuming namespace need not be concerned about
  explicitly distinguishing between whether certain vars are functions
  or macros. For example:

  (ns testme.core (:require [cljs.test :as test :refer [test-var deftest]]))

  will result in test/is resolving properly, along with the test-var
  function and the deftest macro being available unqualified.

  Inline macro specification: As a convenience, :require can be given
  either :include-macros true or :refer-macros [syms...]. Both desugar
  into forms which explicitly load the matching Clojure file containing
  macros. (This works independently of whether the namespace being
  required internally requires or uses its own macros.) For example:

  (ns testme.core
  (:require [foo.core :as foo :refer [foo-fn] :include-macros true]
            [woz.core :as woz :refer [woz-fn] :refer-macros [app jx]]))

  is sugar for

  (ns testme.core
  (:require [foo.core :as foo :refer [foo-fn]]
            [woz.core :as woz :refer [woz-fn]])
  (:require-macros [foo.core :as foo]
                   [woz.core :as woz :refer [app jx]]))

  Auto-aliasing clojure namespaces: If a non-existing clojure.* namespace
  is required or used and a matching cljs.* namespace exists, the cljs.*
  namespace will be loaded and an alias will be automatically established
  from the clojure.* namespace to the cljs.* namespace. For example:

  (ns testme.core (:require [clojure.test]))

  will be automatically converted to

  (ns testme.core (:require [cljs.test :as clojure.test]))"}
    def {:forms [(def symbol doc-string? init?)]
         :doc "Creates and interns a global var with the name
  of symbol in the current namespace (*ns*) or locates such a var if
  it already exists.  If init is supplied, it is evaluated, and the
  root binding of the var is set to the resulting value.  If init is
  not supplied, the root binding of the var is unaffected."}
    do {:forms [(do exprs*)]
        :doc "Evaluates the expressions in order and returns the value of
  the last. If no expressions are supplied, returns nil."}
    if {:forms [(if test then else?)]
        :doc "Evaluates test. If not the singular values nil or false,
  evaluates and yields then, otherwise, evaluates and yields else. If
  else is not supplied it defaults to nil."}
    new {:forms [(Constructor. args*) (new Constructor args*)]
         :url "java_interop#new"
         :doc "The args, if any, are evaluated from left to right, and
  passed to the JavaScript constructor. The constructed object is
  returned."}
    quote {:forms [(quote form)]
           :doc "Yields the unevaluated form."}
    recur {:forms [(recur exprs*)]
           :doc "Evaluates the exprs in order, then, in parallel, rebinds
  the bindings of the recursion point to the values of the exprs.
  Execution then jumps back to the recursion point, a loop or fn method."}
    set! {:forms[(set! var-symbol expr)
                 (set! (.- instance-expr instanceFieldName-symbol) expr)]
          :url "vars#set"
          :doc "Used to set vars and JavaScript object fields"}
    throw {:forms [(throw expr)]
           :doc "The expr is evaluated and thrown."}
    try {:forms [(try expr* catch-clause* finally-clause?)]
         :doc "catch-clause => (catch classname name expr*)
  finally-clause => (finally expr*)
  Catches and handles JavaScript exceptions."}
    var {:forms [(var symbol)]
         :doc "The symbol must resolve to a var, and the Var object
itself (not its value) is returned. The reader macro #'x expands to (var x)."}})

(defn- special-doc [name-symbol]
  (assoc (or (special-doc-map name-symbol) (meta (resolve name-symbol)))
    :name name-symbol
    :special-form true))

(def repl-special-doc-map
  '{in-ns {:arglists ([name])
           :doc "Sets *cljs-ns* to the namespace named by the symbol, creating it if needed."}
    load-file {:arglists ([name])
               :doc "Sequentially read and evaluate the set of forms contained in the file."}
    load {:arglists ([& paths])
               :doc "Loads Clojure code from resources in classpath. A path is interpreted as
  classpath-relative if it begins with a slash or relative to the root
  directory for the current namespace otherwise."}})

(defn- repl-special-doc [name-symbol]
  (assoc (repl-special-doc-map name-symbol)
    :name name-symbol
    :repl-special-function true))

(defmacro doc
  "Prints documentation for a var or special form given its name"
  [name]
  `(print
     (binding [cljs.core/*print-newline* true]
       (with-out-str
         ~(if-let [special-name ('{& fn catch try finally try} name)]
            `(doc ~special-name)
            (cond
              (special-doc-map name)
              `(cljs.repl/print-doc (quote ~(special-doc name)))

              (repl-special-doc-map name)
              `(cljs.repl/print-doc (quote ~(repl-special-doc name)))

              (ana-api/find-ns name)
              `(cljs.repl/print-doc
                 (quote ~(select-keys (ana-api/find-ns name) [:name :doc])))

              (ana-api/resolve &env name)
              `(cljs.repl/print-doc
                 (quote ~(let [var (ana-api/resolve &env name)
                               m (select-keys var
                                   [:ns :name :doc :forms :arglists :macro :url])]
                           (cond-> (update-in m [:name] clojure.core/name)
                             (:protocol-symbol var)
                             (assoc :protocol true
                                    :methods
                                    (->> (get-in var [:protocol-info :methods])
                                      (map (fn [[fname sigs]]
                                             [fname {:doc (:doc
                                                            (ana-api/resolve &env
                                                              (symbol (str (:ns var)) (str fname))))
                                                     :arglists (seq sigs)}]))
                                      (into {})))))))))))))

(defmacro find-doc
  "Prints documentation for any var whose documentation or name
 contains a match for re-string-or-pattern"
  [re-string-or-pattern]
  (let [re (re-pattern re-string-or-pattern)
        ms (concat
             (mapcat
               (fn [ns]
                 (map
                   (fn [m]
                     (update-in (select-keys m [:ns :name :doc :forms :arglists :macro :url])
                       [:name] #(if-not (nil? %) (clojure.core/name %) %)))
                   (sort-by :name (vals (ana-api/ns-interns ns)))))
               (ana-api/all-ns))
             (map #(select-keys (ana-api/find-ns %) [:name :doc]) (ana-api/all-ns))
             (map special-doc (keys special-doc-map)))
        ms (for [m ms
                 :when (and (:doc m)
                            (or (re-find (re-matcher re (:doc m)))
                                (re-find (re-matcher re (str (:name m))))))]
             m)]
    `(doseq [m# (quote ~ms)]
       (cljs.repl/print-doc m#))))

(defn source-fn
  "Returns a string of the source code for the given symbol, if it can
  find it.  This requires that the symbol resolve to a Var defined in
  a namespace for which the .clj is in the classpath.  Returns nil if
  it can't find the source.  For most REPL usage, 'source' is more
  convenient.

  Example: (source-fn 'filter)"
  [env x]
  (when-let [v (ana-api/resolve env x)]
    (when-let [filepath (:file v)]
      (let [f (io/file filepath)
            f (if (.exists f)
                f
                (io/resource filepath))]
        (when f
          (with-open [pbr (PushbackReader. (io/reader f))]
            (let [rdr (readers/source-logging-push-back-reader pbr)]
              (dotimes [_ (dec (:line v))] (readers/read-line rdr))
              (binding [reader/*data-readers* tags/*cljs-data-readers*]
                (-> (reader/read {:read-cond :allow :features #{:cljs}} rdr)
                  meta :source)))))))))

(comment
  (def cenv (env/default-compiler-env))
  (def aenv (assoc-in (ana/empty-env) [:ns :name] 'cljs.user))

  (binding [ana/*cljs-ns* 'cljs.user]
    (env/with-compiler-env cenv
      (comp/with-core-cljs {}
        (fn []
          (source-fn aenv 'cljs.core/first)))))
  )

(defmacro source
  "Prints the source code for the given symbol, if it can find it.
  This requires that the symbol resolve to a Var defined in a
  namespace for which the .cljs is in the classpath.

  Example: (source filter)"
  [n]
  `(println ~(or (source-fn &env n) (str "Source not found"))))

(defmacro apropos
  "Given a regular expression or stringable thing, return a seq of all
public definitions in all currently-loaded namespaces that match the
str-or-pattern."
  [str-or-pattern]
  (let [matches? (if (instance? Pattern str-or-pattern)
                   #(re-find str-or-pattern (str %))
                   #(.contains (str %) (str str-or-pattern)))]
    `(quote
       ~(sort
          (mapcat
            (fn [ns]
              (let [ns-name (str ns)]
                (map #(symbol ns-name (str %))
                  (filter matches? (keys (ana-api/ns-publics ns))))))
            (ana-api/all-ns))))))

(defmacro dir
  "Prints a sorted directory of public vars in a namespace"
  [ns]
  `(doseq [sym# (quote ~(sort (keys (ana-api/ns-publics ns))))]
     (println sym#)))

(defmacro pst
  ([] `(pst *e))
  ([e]
   (let [{:keys [repl-env] :as env} &env]
     (when (and e repl-env)
       (when-let [ret (if (satisfies? IGetError repl-env)
                   (-get-error repl-env e env *repl-opts*)
                   (edn/read-string
                     (evaluate-form repl-env env "<cljs repl>"
                       `(when ~e
                          (pr-str
                            {:value (str ~e)
                             :stacktrace (.-stack ~e)})))))]
         (display-error repl-env
           (if (satisfies? IParseError repl-env)
             (-parse-error repl-env ret *repl-opts*)
             ret)
           nil *repl-opts*))))))
