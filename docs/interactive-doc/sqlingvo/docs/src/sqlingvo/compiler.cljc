(ns sqlingvo.compiler
  #?(:cljs (:require-macros [sqlingvo.compiler :refer [defarity]]))
  (:refer-clojure :exclude [replace])
  (:require [#?(:clj clojure.core :cljs cljs.core) :as core]
            [clojure.string :refer [blank? join replace upper-case]]
            [sqlingvo.util :as util :refer [sql-quote sql-quote-fn]]))

(defmulti compile-sql
  "Compile the `ast` into SQL."
  (fn [db ast] (:op ast)))

(defn to-sql [arg]
  (cond
    (string? arg)
    [arg]
    (sequential? arg)
    arg))

(defn concat-sql [& args]
  (->> (remove nil? args)
       (map to-sql)
       (reduce (fn [stmt [sql & args]]
                 (cons (apply str [(first stmt) sql])
                       (concat (rest stmt) args)))
               [])))

(defn join-sql [separator args]
  (let [args (map to-sql args)]
    (cons (join separator (remove blank? (map first args)))
          (apply concat (map rest args)))))

(defn compile-sql-join [db separator args]
  (join-sql separator (map #(compile-sql db %) args)))

(defn keyword-sql [k]
  (replace (upper-case (name k)) #"-" " "))

(defn wrap-stmt [stmt]
  (let [[sql & args] stmt]
    (cons (str "(" sql ")") args)))

(defn unwrap-stmt [stmt]
  (let [[sql & args] stmt]
    (cons (replace sql #"^\(|\)$" "") args)))

(defn- compile-set-op [db op {:keys [stmts all] :as node}]
  (let [separator (str " " (upper-case (name op)) " " (if all "ALL "))]
    (compile-sql-join db separator (:stmts node))))

(defn- placeholder
  "Returns the next placeholder for an SQL parameter."
  [db]
  ((or (:sql-next-placeholder db)
       (util/sql-placeholder-constant))))

;; COMPILE CONSTANTS

(defn compile-inline [db node]
  [(str (:val node))])

(defmulti compile-const
  "Compile a SQL constant into a SQL statement."
  (fn [db node] (:type node)))

(defmethod compile-const :number [db node]
  (compile-inline db node))

(defmethod compile-const :string [db node]
  [(str (placeholder db)) (:val node)])

(defmethod compile-const :symbol [db node]
  (compile-inline db node))

(defmethod compile-const :default [db node]
  [(str (placeholder db)) (:form node)])

;; COMPILE EXPRESSIONS

(defn- compile-array [db {:keys [children]}]
  (concat-sql "ARRAY[" (compile-sql-join db ", " children) "]"))

(defmulti compile-expr
  "Compile a SQL expression."
  (fn [db ast] (:op ast)))

(defmethod compile-expr :array [db node]
  (compile-array db node))

(defmethod compile-expr :select [db expr]
  (concat-sql (wrap-stmt (compile-sql db expr))))

(defmethod compile-expr :default [db node]
  (compile-sql db node))

(defn compile-exprs [db exprs]
  (map #(compile-expr db %1) exprs))

;; Compile function calls

(defn- aggregate-modifier?
  "Returns true if `node` is a modifier of an aggregate expression, otherwise false."
  [node]
  (#{"ALL" "DISTINCT"} (some-> node :val name upper-case)))

(defn- order-by?
  "Returns true if `node` is an ORDER BY expression, otherwise false."
  [node]
  (and (= (:op node) :list)
       (= (some-> node :children first :val name upper-case) "ORDER-BY")))

(defn- parse-aggregate-expression
  "Parse an aggregate expression."
  [node]
  (let [[[f & args] remaining] (split-with (complement order-by?) (:children node))
        [[modifier] args] (split-with aggregate-modifier? args)]
    [f modifier args remaining]))

(defn compile-aggregate-expression
  "Compile an aggregate expression to SQL."
  [db node]
  (let [[f modifier args remaining] (parse-aggregate-expression node)]
    (concat-sql
     (sql-quote-fn db (:val f)) "("
     (when modifier (concat-sql (some-> modifier :val name upper-case) " "))
     (join-sql ", " (compile-exprs db args))
     (when (not-empty remaining)
       (concat-sql " " (join-sql " " (compile-exprs db remaining))))
     ")")))

(defn compile-2-ary
  "Compile a 2-arity SQL function node into a SQL statement."
  [db node]
  (let [[name & args] (:children node)]
    (assert (< 1 (count args)) "More than 1 arg needed.")
    (->> (map (fn [[arg-1 arg-2]]
                (concat-sql "(" (compile-expr db arg-1)
                            " " (core/name (:val name)) " "
                            (compile-expr db arg-2) ")"))
              (partition 2 1 args))
         (join-sql " AND "))))

(defn compile-infix
  "Compile a SQL infix function node into a SQL statement."
  [db node]
  (let [[name & args] (:children node)]
    (cond
      (= 1 (count args))
      (compile-expr db (first args))
      :else
      (let [args (compile-exprs db args)]
        (cons (str "(" (join (str " " (core/name (:val name)) " ") (map first args)) ")")
              (apply concat (map rest args)))))))

(defn compile-complex-args [db node]
  (let [[name & args] (:children node)]
    (concat-sql
     "(" (-> name :val core/name) " "
     (compile-sql-join db " " args)
     ")")))

(defn compile-whitespace-args [db node]
  (let [[name & args] (:children node)]
    (concat-sql
     (-> name :val core/name) "("
     (compile-sql-join db " " args)
     ")")))

(defmulti compile-fn
  "Compile a SQL function node into a SQL statement."
  (fn [db node]
    (some-> node :children first :val keyword)))

(defmethod compile-fn :case [db node]
  (let [[_ & args] (:children node)
        parts (partition 2 2 nil args)]
    (concat-sql (apply concat-sql "CASE"
                       (concat (for [[test then] (filter #(= 2 (count %1)) parts)]
                                 (concat-sql " WHEN "
                                             (compile-expr db test) " THEN "
                                             (compile-expr db then)))
                               (for [[else] (filter #(= 1 (count %1)) parts)]
                                 (concat-sql " ELSE " (compile-expr db else)))
                               [" END"])))))

(defmethod compile-fn :cast [db node]
  (let [[_ & [expr type]] (:children node)]
    (concat-sql "CAST(" (compile-expr db expr) " AS "
                (util/sql-type-name (:name type)) ")")))

(defmethod compile-fn :count [db node]
  (let [[name & args] (:children node)]
    (concat-sql "count("
                (if (= 'distinct (:form (first args))) "DISTINCT ")
                (join-sql ", " (map #(compile-expr db %1)
                                    (remove #(= 'distinct (:form %1)) args))) ")")))

(defn- compile-list
  "Compile `node` into a comma separated list."
  [db node]
  (concat-sql "(" (compile-sql-join db ", " (:children node)) ")"))

(defmethod compile-fn :in [db node]
  (let [[_ member expr] (:children node)]
    (concat-sql (compile-expr db member) " IN "
                (cond
                  (= (:op expr) :list)
                  (if (empty? (:children expr))
                    "(NULL)" (compile-list db expr))
                  (= (:op expr) :values)
                  (concat-sql "(" (compile-expr db expr) ")")
                  :else (compile-expr db expr)))))

(defmethod compile-fn :exists [db node]
  (let [[_ & args] (:children node)]
    (concat-sql "(EXISTS " (compile-expr db (first args)) ")")))

(defmethod compile-fn :not [db node]
  (let [[_ & args] (:children node)]
    (concat-sql "(NOT " (compile-expr db (first args)) ")")))

(defmethod compile-fn :not-exists [db node]
  (let [[_ & args] (:children node)]
    (concat-sql "(NOT EXISTS " (compile-expr db (first args)) ")")))

(defmethod compile-fn :is-null [db node]
  (let [[_ & args] (:children node)]
    (concat-sql "(" (compile-expr db (first args)) " IS NULL)")))

(defmethod compile-fn :is-not-null [db node]
  (let [[_ & args] (:children node)]
    (concat-sql "(" (compile-expr db (first args)) " IS NOT NULL)")))

(defmethod compile-fn :not-like [db node]
  (let [[_ & args] (:children node)
        [string pattern] (compile-exprs db args)]
    (concat-sql "(" string " NOT LIKE " pattern ")" )))

(defmethod compile-fn :range [db node]
  (let [[_ & args] (:children node)]
    (concat-sql "(" (compile-sql-join db ", " args) ")")))

(defmethod compile-fn :row [db node]
  (let [[_ & args] (:children node)]
    (concat-sql "ROW(" (join-sql ", " (compile-exprs db args)) ")")))

(defmethod compile-fn :over [db node]
  (let [[_ & args] (:children node)
        args (map #(compile-sql db %) args)]
    (concat-sql (first args) " OVER ("
                (join-sql " " (rest args)) ")")))

(defmethod compile-fn :partition-by [db node]
  (let [[_ & args] (:children node)
        [expr & more-args] args]
    (concat-sql "PARTITION BY "
                (if (= :array (:op expr))
                  (compile-sql-join db ", " (:children expr))
                  (compile-expr db expr))
                (when (seq more-args)
                  (concat-sql " " (compile-sql-join db " " more-args))))))

(defmethod compile-fn :order-by [db node]
  (let [[_ & args] (:children node)]
    (concat-sql "ORDER BY " (compile-sql-join db ", " args))))

(defn- compile-direction [db node]
  (let [[name & args] (:children node)]
    (concat-sql (compile-sql db (first args)) " "
                (upper-case (-> name :val core/name)))))

(defmethod compile-fn :asc [db node]
  (compile-direction db node))

(defmethod compile-fn :desc [db node]
  (compile-direction db node))

(defmethod compile-fn :default [db node]
  (let [[name & args] (:children node) ]
    (concat-sql (sql-quote-fn db (:val name)) "("
                (join-sql ", " (compile-exprs db args)) ")")))

;; COMPILE FROM CLAUSE

(defmulti compile-from (fn [db ast] (:op ast)))

(defmethod compile-from :list [db fn]
  (compile-sql db fn))

(defmethod compile-from :select [db node]
  (let [[sql & args] (compile-sql db node)]
    (cons (str "(" sql ") AS " (sql-quote db (:as node))) args)))

(defmethod compile-from :table [db node]
  (compile-sql db node))

(defmethod compile-from :alias [db node]
  (compile-sql db node))

(defn compile-column [db column]
  (when (:length column)
    (println "Column :length is deprecated, use :size instead!"))
  (concat-sql
   (sql-quote db (:name column))
   " " (replace (upper-case (name (:type column))) "-" " ")
   (if (:array? column) "[]")
   (if-let [size (or (:size column) (:size column))]
     (str "(" size ")"))
   (if (:not-null? column)
     " NOT NULL")
   (if (:unique? column)
     " UNIQUE")
   (if (:primary-key? column)
     " PRIMARY KEY")
   (if-let [default (:default column)]
     (concat-sql " DEFAULT " (compile-sql db default)))))

;; COMPILE SQL

(defmethod compile-sql :alias
  [db {:keys [columns expr name]}]
  (concat-sql
   (if (contains? #{:select :values} (:op expr))
     (wrap-stmt (compile-sql db expr))
     (compile-sql db expr))
   (if (= :table (:op expr))
     " " " AS ")
   (sql-quote db name)
   (when (not-empty columns)
     (concat-sql
      " (" (join-sql ", " (map #(compile-sql db %) columns)) ")"))))

(defmethod compile-sql :array [db node]
  (compile-array db node))

(defmethod compile-sql :cascade [db node]
  ["CASCADE"])

(defmethod compile-sql :check [db {:keys [expr]}]
  (concat-sql ["CHECK "] (compile-expr db expr)))

(defmethod compile-sql :concurrently [db node]
  ["CONCURRENTLY"])

(defmethod compile-sql :condition [db {:keys [condition]}]
  (compile-sql db condition))

(defmethod compile-sql :column [db {:keys [schema name table direction nulls]}]
  (concat-sql
   (->> [(if schema (sql-quote db schema))
         (if table (sql-quote db table))
         (if name (if (= :* name) "*" (sql-quote db name)))]
        (remove nil?)
        (join "."))
   (if direction (str " " (upper-case (core/name direction))))
   (if nulls (str " NULLS " (keyword-sql nulls)))))

(defmethod compile-sql :constant [db node]
  (compile-const db node))

(defmethod compile-sql :continue-identity [db {:keys [op]}]
  ["CONTINUE IDENTITY"])

(defmethod compile-sql :copy [db {:keys [columns delimiter encoding from to table]}]
  (concat-sql
   "COPY "
   (compile-sql db table)
   (when (not-empty columns)
     (concat-sql " (" (compile-sql-join db ", " columns) ")"))
   " FROM "
   (let [from (first from)]
     (cond
       #?@(:clj [(instance? java.io.File from)
                 ["?" (.getAbsolutePath from)]] )
       (string? from)
       ["?" #?(:clj (.getAbsolutePath (java.io.File. from)) :cljs from)]
       (= :stdin from)
       "STDIN"))
   (if encoding
     [(str " ENCODING " (placeholder db)) encoding])
   (if delimiter
     [(str " DELIMITER " (placeholder db)) delimiter])))

(defmethod compile-sql :create-table
  [db {:keys [checks table if-not-exists inherits like primary-key temporary] :as node}]
  (let [columns (map (:column node) (:columns node))]
    (concat-sql
     "CREATE"
     (if temporary
       " TEMPORARY")
     " TABLE"
     (if if-not-exists
       " IF NOT EXISTS")
     (concat-sql " " (compile-sql db table))
     " ("
     (cond
       (not (empty? columns))
       (join-sql ", " (map #(compile-column db %1) columns))
       like
       (compile-sql db like))
     (when (not-empty checks)
       (compile-sql-join db ", " checks))
     (when (not-empty primary-key)
       (concat-sql ", PRIMARY KEY(" (join ", " (map #(sql-quote db %1) primary-key)) ")"))
     ")"
     (if inherits
       (concat-sql " INHERITS (" (compile-sql-join db ", " inherits) ")")))))

(defmethod compile-sql :delete [db node]
  (let [{:keys [where table returning]} node]
    (concat-sql
     "DELETE FROM " (compile-sql db table)
     (when (not-empty where)
       (concat-sql " WHERE " (compile-sql db where)))
     (when (not-empty returning)
       (concat-sql " RETURNING " (compile-sql-join db ", " returning))) )))

(defmethod compile-sql :distinct [db {:keys [exprs on]}]
  (concat-sql
   "DISTINCT "
   (when (not-empty on)
     (concat-sql "ON (" (compile-sql-join db ", " on) ") "))
   (compile-sql-join db ", " exprs)))

(defmethod compile-sql :drop-table [db {:keys [cascade if-exists restrict tables]}]
  (join-sql " " ["DROP TABLE"
                 (compile-sql db if-exists)
                 (compile-sql-join db ", " tables)
                 (compile-sql db cascade)
                 (compile-sql db restrict)]))

(defmethod compile-sql :except [db node]
  (compile-set-op db :except node))

(defmethod compile-sql :expr-list [db {:keys [as children]}]
  (concat-sql (compile-sql-join db " " children)))

(defmulti compile-explain-option
  "Compile an EXPLAIN option."
  (fn [db [option value]] option))

(defmethod compile-explain-option :format
  [db [option value]]
  (assert (contains? #{:text :xml :json :yaml} value)
          (str "Invalid EXPLAIN format: " (name value)))
  (concat-sql "FORMAT " (upper-case (name value))))

(defmethod compile-explain-option :default
  [db [option value]]
  (assert (contains? #{:analyze :buffers :costs :timing :verbose} option)
          (str "Invalid EXPLAIN option: " (name option)))
  (concat-sql (upper-case (name option)) " " (upper-case (str (true? value)))))

(defn compile-explain-options
  "Compile the EXPLAIN `options`."
  [db options]
  (when-not (empty? options)
    (concat-sql
     "(" (->> (map #(compile-explain-option db %) options)
              (join-sql ", ")) ")")))

(defmethod compile-sql :explain [db node]
  (let [opts (compile-explain-options db (:opts node))]
    (concat-sql "EXPLAIN "
                (if opts (concat-sql opts " "))
                (compile-sql db (:stmt node)))))

(defmethod compile-sql :attr [db node]
  (concat-sql
   "(" (compile-sql db (:arg node)) ")."
   (sql-quote db (:name node))))

(defmethod compile-sql :from [db {:keys [clause joins]}]
  (concat-sql "FROM " (join-sql ", " (map #(compile-from db %1) clause))
              (when (not-empty joins)
                (compile-sql-join db " " joins))))

(defmethod compile-sql :group-by [db {:keys [exprs]}]
  (concat-sql "GROUP BY" (compile-sql db exprs)))

(defmethod compile-sql :if-exists [db {:keys [op]}]
  ["IF EXISTS"])

(defn- compile-value [db columns value]
  (let [values (map #(or (get value %) {:op :nil}) (map :name columns))
        values (map #(compile-sql db %) values)]
    (concat-sql "(" (join-sql ", " values ) ")")))

(defn- compile-values-maps [db {:keys [columns values]}]
  (let [values (map #(compile-value db columns %) values)]
    (concat-sql ["VALUES "] (join-sql ", " values))))

(defn- compile-values-exprs [db node]
  (concat-sql
   ["VALUES "]
   (->> (for [exprs (:values node)]
          (concat-sql
           "(" (->> exprs
                    (map #(compile-sql db %))
                    (join-sql ", ")) ")"))
        (join-sql ", "))))

(defmethod compile-sql :values [db node]
  (case (:type node)
    :default ["DEFAULT VALUES"]
    :exprs (compile-values-exprs db node)
    :records (compile-values-maps db node)))

(defn compile-row [db row]
  (join-sql
   ", "
   (for [column (keys row)]
     (concat-sql
      (str (sql-quote db column) " = ")
      (compile-sql db (get row column))))))

(defmethod compile-sql :do-nothing [db node]
  " DO NOTHING")

(defmethod compile-sql :do-update [db node]
  (concat-sql " DO UPDATE SET " (compile-row db (:expr node))))

(defmethod compile-sql :on-conflict [db node]
  (concat-sql
   " ON CONFLICT "
   (when-let [target (:target node)]
     (concat-sql "(" (join-sql ", " (map #(compile-sql db %) target)) ")"))
   (compile-sql db (:do-update node))
   (when-let [where (:where node)]
     (concat-sql " WHERE " (compile-sql db where)))
   (compile-sql db (:do-nothing node))))

(defmethod compile-sql :on-conflict-on-constraint [db node]
  (concat-sql
   " ON CONFLICT ON CONSTRAINT"
   (when-let [target (:target node)]
     (concat-sql " " (sql-quote db target)))
   (compile-sql db (:do-update node))
   (when-let [where (:where node)]
     (concat-sql " WHERE " (compile-sql db where)))
   (compile-sql db (:do-nothing node))))

(defmethod compile-sql :insert
  [db {:keys [columns table rows values returning select where with] :as node}]
  (let [columns (if (not-empty columns) columns (:columns values))]
    (concat-sql
     "INSERT INTO " (compile-sql db table)
     (when (not-empty columns)
       (concat-sql " (" (compile-sql-join db ", " columns) ")"))
     (when values
       (concat-sql " " (compile-sql db values)))
     (when select
       (concat-sql " " (compile-sql db select)))
     (when with
       (concat-sql " " (compile-sql db with)))
     (when (not-empty where)
       (concat-sql " WHERE " (compile-sql db where)))
     (compile-sql db (:on-conflict node))
     (compile-sql db (:on-conflict-on-constraint node))
     (when (not-empty returning)
       (concat-sql " RETURNING " (compile-sql-join db ", " returning))))))

(defmethod compile-sql :intersect [db node]
  (compile-set-op db :intersect node))

(defmethod compile-sql :join [db {:keys [on using from how type outer]}]
  (concat-sql
   (case type
     :cross "CROSS "
     :inner "INNER "
     :left "LEFT "
     :right "RIGHT "
     :full "FULL "
     nil "")
   (if outer "OUTER ")
   "JOIN " (compile-from db from)
   (if on
     (concat-sql " ON " (compile-sql db on)))
   (when (not-empty using)
     (concat-sql " USING (" (compile-sql-join db ", " using) ")"))))

(defmethod compile-sql :keyword [db {:keys [form]}]
  [(sql-quote db form)])

(defmethod compile-sql :limit [db {:keys [expr]}]
  (concat-sql "LIMIT " (compile-expr db expr)))

(defmethod compile-sql :like [db {:keys [excluding including table]}]
  (concat-sql
   "LIKE "
   (compile-sql db table)
   (when (not-empty including)
     (str " INCLUDING " (join " " (map keyword-sql including))))
   (when (not-empty excluding)
     (str " EXCLUDING " (join " " (map keyword-sql excluding))))))

(defmethod compile-sql :list [db node]
  (concat-sql
   (compile-fn db node)
   (when-let [direction (:direction node) ]
     (str " " (upper-case (name direction))))))

(defmethod compile-sql :nil [db _] ["NULL"])

(defmethod compile-sql :offset [db {:keys [expr]}]
  (concat-sql "OFFSET " (compile-expr db expr)))

(defmethod compile-sql :table [db {:keys [schema name]}]
  [(str (join "." (map #(sql-quote db %1) (remove nil? [schema name]))))])

(defmethod compile-sql :drop-materialized-view [db node]
  (let [{:keys [cascade if-exists restrict view]} node]
    (concat-sql "DROP MATERIALIZED VIEW "
                (if if-exists
                  (concat-sql (compile-sql db if-exists) " "))
                (compile-sql db view)
                (if cascade
                  (concat-sql " " (compile-sql db cascade)))
                (if restrict
                  (concat-sql " " (compile-sql db restrict))))))

(defmethod compile-sql :refresh-materialized-view [db node]
  (let [{:keys [concurrently view with-data]} node]
    (concat-sql "REFRESH MATERIALIZED VIEW "
                (if concurrently
                  (concat-sql (compile-sql db concurrently) " "))
                (compile-sql db view)
                (if with-data
                  (concat-sql " " (compile-sql db with-data))))))

(defmethod compile-sql :restrict [db {:keys [op]}]
  ["RESTRICT"])

(defmethod compile-sql :restart-identity [db {:keys [op]}]
  ["RESTART IDENTITY"])

(defmethod compile-sql :select [db node]
  (let [{:keys [exprs distinct joins from where group-by limit offset order-by set]} node]
    (concat-sql
     "SELECT " (join-sql ", " (map #(compile-expr db %1) exprs))
     (if distinct
       (compile-sql db distinct))
     (when (not-empty from)
       (concat-sql " FROM " (join-sql ", " (map #(compile-from db %1) from))))
     (when (not-empty joins)
       (concat-sql " " (compile-sql-join db " " joins)))
     (when (not-empty where)
       (concat-sql " WHERE " (compile-sql db where)))
     (when (not-empty group-by)
       (concat-sql " GROUP BY " (compile-sql-join db ", " group-by)))
     (when-let [having (:having node)]
       (concat-sql " HAVING " (compile-sql db having)))
     (when-let [window (:window node)]
       (concat-sql " " (compile-sql db window)))
     (when (not-empty order-by)
       (concat-sql " ORDER BY " (compile-sql-join db ", " order-by)))
     (when-let [limit-sql (and limit (seq (compile-sql db limit)))]
       (concat-sql " " limit-sql))
     (if offset
       (concat-sql " " (compile-sql db offset)))
     (when (not-empty set)
       (concat-sql " " (compile-sql-join db ", " set))))))

(defmethod compile-sql :truncate [db {:keys [tables continue-identity restart-identity cascade restrict]}]
  (join-sql " " ["TRUNCATE TABLE"
                 (compile-sql-join db ", " tables)
                 (compile-sql db continue-identity)
                 (compile-sql db restart-identity)
                 (compile-sql db cascade)
                 (compile-sql db restrict)]))

(defmethod compile-sql :union [db node]
  (compile-set-op db :union node))

(defmethod compile-sql :update [db node]
  (let [{:keys [where from exprs table row returning]} node]
    (concat-sql
     "UPDATE " (compile-sql db table)
     " SET "
     (if row
       (compile-row db row)
       (join-sql ", "(map unwrap-stmt (compile-exprs db exprs))))
     (when (not-empty from)
       (concat-sql " FROM " (join-sql " " (map #(compile-from db %1) from))))
     (when (not-empty where)
       (concat-sql " WHERE " (compile-sql db where)))
     (when (not-empty returning)
       (concat-sql " RETURNING " (compile-sql-join db ", " returning))))))

(defmethod compile-sql :with
  [db {:keys [bindings query] :as node}]
  (concat-sql
   "WITH "
   (join-sql
    ", " (map (fn [alias stmt]
                (concat-sql (sql-quote db alias) " AS (" (compile-sql db stmt) ")"))
              (map first bindings)
              (map second bindings)))
   " " (compile-sql db query)))

(defmethod compile-sql :window [db node]
  (->> (for [alias (:definitions node)]
         (concat-sql
          (sql-quote db (:name alias))
          " AS (" (compile-sql db (:expr alias)) ")"))
       (join-sql ", ")
       (concat-sql "WINDOW " )))

(defmethod compile-sql :with-data [db node]
  (if (:data node)
    ["WITH DATA"]
    ["WITH NO DATA"]))

(defmethod compile-sql nil [db {:keys [op]}]
  [])

;; DEFINE SQL FN ARITY

(defmacro defarity
  "Define SQL functions in terms of `arity-fn`."
  [arity-fn & fns]
  `(do ~@(for [fn# (map keyword fns)]
           `(defmethod sqlingvo.compiler/compile-fn ~fn#
              [~'db ~'node]
              (~arity-fn ~'db ~'node)))))

(defarity compile-2-ary
  "=" "!=" "<>" "<#>" "<->" "<" ">" "<=" ">="
  "&&" "<@" "@>" "/" "^" "~" "~*" "like" "ilike")

(defarity compile-infix
  "+" "-" "*" "&" "!~" "!~*" "%" "and" "or" "union" "||" "overlaps" "@@")

(defarity compile-complex-args
  "partition")

(defarity compile-whitespace-args
  "substring" "trim")

;; Aggregate Functions, https://www.postgresql.org/docs/9.5/static/functions-aggregate.html

(defarity compile-aggregate-expression
  "array_agg"
  "avg"
  "bit_and"
  "bit_or"
  "bool_and"
  "bool_or"
  "count"
  "every"
  "json_agg"
  "json_object_agg"
  "jsonb_agg"
  "jsonb_object_agg"
  "max"
  "min"
  "string_agg"
  "sum"
  "xmlagg")

(defn compile-stmt
  "Compile `stmt` into a clojure.java.jdbc compatible prepared
  statement vector."
  [{:keys [db] :as stmt}]
  (assert db "No db given!")
  (let [placeholder ((or (:sql-placeholder db) util/sql-placeholder-constant))
        db (assoc db :sql-next-placeholder placeholder)]
    (vec (compile-sql db stmt))))
