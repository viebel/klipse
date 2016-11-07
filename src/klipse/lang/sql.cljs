(ns klipse.lang.sql
  (:use-macros [purnam.core :only [? ! !>]])
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require 
    cljsjs.codemirror.mode.sql
    [klipse.lang.javascript :refer [load-scripts]]
    [klipse.utils :refer [runonce]]
    [cljs.core.async :refer [<! timeout chan put!]]
    [klipse.common.registry :refer [register-mode]]))


(def db nil)

(defn create-db* []
  (let [klass (? js/SQL.Database)]
    (set! db (new klass))))

(def create-db (runonce create-db*))

(defn str-eval-async [query _]
  (go
    (when-not (? js/window.SQL)
      (<! (load-scripts ["https://raw.githubusercontent.com/kripken/sql.js/master/js/sql.js" "https://gist.githubusercontent.com/viebel/fc86366093c27aca0adc103b1d20190d/raw"])))
    (create-db)
    (try
      (!> js/SQL.runQuery db query)
      (catch :default e
        (str e)))))

(def opts {:editor-in-mode "text/x-sql"
           :eval-fn str-eval-async
           :comment-str "--"})

(register-mode "eval-sql" "selector_sql" opts)
