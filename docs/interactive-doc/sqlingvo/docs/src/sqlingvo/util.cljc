(ns sqlingvo.util
  (:require [clojure.string :refer [join replace split]]
            [sqlingvo.expr :as expr]
            [clojure.string :as str])
  (:refer-clojure :exclude [replace]))

(def ^:dynamic *reserved*
  "A set of reserved words that should not be quoted."
  #{"EXCLUDED" "DEFAULT"})

(defn keyword-str
  "Return the qualified name of the keyword `k` as a string."
  [k]
  (when (keyword? k)
    (if (namespace k)
      (str (namespace k) "/" (name k))
      (str (name k)))))

(defn m-bind [mv mf]
  (fn [state]
    (let [[temp-v temp-state] (mv state)
          new-mv (mf temp-v)]
      (new-mv temp-state))))

(defn m-result [x]
  (fn [state]
    [x state]))

(defn m-seq
  "'Executes' the monadic values in ms and returns a sequence of the
  basic values contained in them."
  [ms]
  (reduce (fn [q p]
            (m-bind p (fn [x]
                        (m-bind q (fn [y]
                                    (m-result (cons x y)))) )))
          (m-result '())
          (reverse ms)))

(defn set-val [k v]
  (fn [stmt]
    [v (assoc stmt k v)]))

(defn assoc-op [op & {:as opts}]
  (set-val op (assoc opts :op op)))

(defn build-condition
  "Helper to build WHERE and HAVING conditions."
  [condition-type condition & [combine]]
  (let [condition (expr/parse-condition condition)]
    (fn [stmt]
      (cond
        (or (nil? combine)
            (nil? (:condition (condition-type stmt))))
        [nil (assoc stmt condition-type condition)]
        :else
        [nil (assoc-in
              stmt [condition-type :condition]
              (expr/make-node
               :op :condition
               :children [:condition]
               :condition
               {:op :list
                ;; TODOD: Use :times, :children is reserved for keywords.
                :children
                [(expr/parse-expr combine)
                 (:condition (condition-type stmt))
                 (:condition condition)]}))]))))

(defn concat-in [ks coll]
  (fn [stmt]
    [nil (if (empty? coll)
           stmt (update-in stmt ks #(concat %1 coll)))]))

(defn dissoc-op [k]
  (fn [stmt]
    [nil (dissoc stmt k)]))

(defn sequential
  "Returns `x` as a sequential data structure."
  [x]
  (if (sequential? x)
    x [x]))

(defn conditional-clause [clause condition]
  (if condition
    (assoc-op clause)
    (dissoc-op clause)))

(defn sql-type-name
  "Return the SQL name for the `type` keyword."
  [type]
  (some-> type name (str/replace "-" " ")))

(defn- split-sql-name [x]
  (if x (split (name x) #"\.")))

(defn- map-sql-name [f x]
  (->> (split-sql-name x)
       (map f)
       (join ".")))

(defn sql-name-underscore [x]
  (map-sql-name #(replace %1 "-" "_") x))

(defn sql-keyword-hyphenate [x]
  (keyword (map-sql-name #(replace (name %1) "_" "-") x)))

(defn- sql-quote-char [x before after]
  (cond
    (nil? x)
    x
    (= "*" x)
    "*"
    (contains? *reserved* x)
    x
    :else
    (str before x after)))

(defn sql-quote-backtick [x]
  (when x (map-sql-name #(sql-quote-char %1 "`" "`") x)))

(defn sql-quote-double-quote [x]
  (when x (map-sql-name #(sql-quote-char %1 "\"" "\"") x)))

(defn sql-name
  "Return the `db` specific SQL name for `x`."
  [db x]
  (when x
    ((or (:sql-name db) name) x)))

(defn sql-keyword
  "Return the `db` specific SQL keyword for `x`."
  [db x]
  (when x
    ((or (:sql-keyword db) keyword) x)))

(defn sql-quote
  "Return the `db` specific quoted string for `x`."
  [db x]
  (when x
    ((or (:sql-quote db) sql-quote-backtick)
     (sql-name db x))))

(defn sql-quote-fn
  "Quote an SQL identifier only if needed."
  [db x]
  (when x
    (if (re-matches #"[a-z_][a-z0-9_]*" (name x))
      (sql-name db x)
      (sql-quote db x))))

(defn sql-placeholder-constant
  "Returns a fn that uses a constant strategy to produce
  placeholders."
  [& [placeholder]]
  (let [placeholder (str (or placeholder "?"))]
    (constantly placeholder)))

(defn sql-placeholder-count
  "Returns a fn that uses a counting strategy to produce
  placeholders."
  [& [prefix]]
  (let [counter (atom 0)
        prefix (str (or prefix "$"))]
    #(str prefix (swap! counter inc))))
