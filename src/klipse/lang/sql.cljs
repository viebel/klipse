(ns klipse.lang.sql
  (:use-macros [purnam.core :only [? ! !>]])
  (:require-macros
    [gadjett.core :refer [dbg]]
    [cljs.core.async.macros :refer [go go-loop]])
  (:require 
    cljsjs.codemirror.mode.sql
    [klipse.utils :refer [load-scripts runonce runonce-async]]
    [cljs.core.async :refer [<! timeout chan put!]]
    [klipse.common.registry :refer [register-mode]]))


(def db nil)

(defn create-db* []
  (let [klass (? js/SQL.Database)]
    (set! db (new klass))))

(def create-db (runonce create-db*))

(defn load-sql-scripts* []
    (load-scripts ["https://raw.githubusercontent.com/kripken/sql.js/master/js/sql.js" "https://gist.githubusercontent.com/viebel/fc86366093c27aca0adc103b1d20190d/raw"]))

(def load-sql-scripts (runonce-async load-sql-scripts*))

(defn str-eval-async [query _]
  (go (try
        (let [[status http-status script] (<! (load-sql-scripts))]
          (when-not (= :ok status)
            (throw (js/Error.
                     (str "Cannot load script: " script "\n"
                          "Error: " http-status)))))
        (create-db)
        (!> js/SQL.runQuery db query)
        (catch :default e
          e))))

(def opts {:editor-in-mode "text/x-sql"
           :eval-fn str-eval-async
           :comment-str "--"})

(register-mode "eval-sql" "selector_sql" opts)
