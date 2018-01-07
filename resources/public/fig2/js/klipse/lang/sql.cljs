(ns klipse.lang.sql
  (:use-macros [purnam.core :only [? ! !>]])
  (:require-macros
    [gadjett.core :refer [dbg]]
    [cljs.core.async.macros :refer [go go-loop]])
  (:require 
    [klipse.utils :refer [runonce runonce-async]]
    [cljs.core.async :refer [<! timeout chan put!]]
    [klipse.common.registry :refer [codemirror-mode-src register-mode scripts-src]]))


(def db nil)

(defn create-db* []
  (let [klass (? js/SQL.Database)]
    (set! db (new klass))))

(def create-db (runonce create-db*))

(defn str-eval-async [query _]
  (go (try
        (create-db)
        (!> js/SQL.runQuery db query)
        (catch :default e
          e))))

(def opts {:editor-in-mode "text/x-sql"
           :eval-fn str-eval-async
           :external-scripts [(codemirror-mode-src "sql") (scripts-src "sql-formatter.min.js") (scripts-src "sql.js") "https://gist.githubusercontent.com/viebel/fc86366093c27aca0adc103b1d20190d/raw"]
           :comment-str "--"})

(register-mode "eval-sql" "selector_sql" opts)
