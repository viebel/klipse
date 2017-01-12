(ns sqlingvo.db
  (:require [sqlingvo.compiler :as compiler]
            [sqlingvo.url :as url]
            [sqlingvo.util :as util]))

(defrecord Database [scheme])

(defn scheme
  "Return the database adapter as a keyword."
  [db]
  (or (:scheme db) (:subprotocol db)))

(defmulti db-spec
  "Return the `Database` record for :adapter or :subprotocol in
  `db-spec`."
  #(some-> %1 scheme keyword))

(defmethod db-spec :mysql [db]
  {:classname "com.mysql.cj.jdbc.Driver"
   :sql-quote util/sql-quote-backtick})

(defmethod db-spec :postgresql [db]
  {:classname "org.postgresql.Driver"
   :sql-quote util/sql-quote-double-quote})

(defmethod db-spec :oracle [db]
  {:classname "oracle.jdbc.driver.OracleDriver"
   :sql-quote util/sql-quote-double-quote})

(defmethod db-spec :sqlite [db]
  {:classname "org.sqlite.JDBC"
   :sql-quote util/sql-quote-double-quote})

(defmethod db-spec :sqlserver [db]
  {:classname "com.microsoft.sqlserver.jdbc.SQLServerDriver"
   :sql-quote util/sql-quote-double-quote})

(defmethod db-spec :vertica [db]
  {:classname "com.vertica.jdbc.Driver"
   :sql-quote util/sql-quote-double-quote})

(defmethod db-spec :default [db]
  (throw (ex-info "Unknown database :scheme or :subprotocol." (or db {}))))

(defn db
  "Return a database for `spec`."
  [spec & [opts]]
  (as-> (cond
          (keyword? spec)
          {:scheme spec}
          (string? spec)
          (url/parse spec)
          (and (map? spec) (scheme spec))
          spec) db
    (merge db (db-spec db) {:eval-fn compiler/compile-stmt} opts)
    (map->Database db)))
