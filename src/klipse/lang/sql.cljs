(ns klipse.lang.sql
  (:require-macros
    [gadjett.core :refer [dbg]]
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [klipse.utils :refer [runonce runonce-async]]
   [cljs.core.async :refer [<! timeout chan put!]]
   [klipse.common.registry :refer [codemirror-mode-src register-mode scripts-src]]
   [applied-science.js-interop :as j]))


(def db nil)

(defn create-db* []
  (let [klass (j/get js/SQL :Database)]
    (set! db (new klass))))

(def create-db (runonce create-db*))

(defn str-eval-async [query _]
  (go (try
        (create-db)
        (j/call js/SQL :runQuery db query)
        (catch :default e
          e))))

(def opts {:editor-in-mode "text/x-sql"
           :eval-fn str-eval-async
           :external-scripts [(codemirror-mode-src "sql") (scripts-src "sql-formatter.min.js") (scripts-src "sql.js") "https://gist.githubusercontent.com/viebel/fc86366093c27aca0adc103b1d20190d/raw"]; https://github.com/kripken/sql.js/
           :comment-str "--"})

(register-mode "eval-sql" "selector_sql" opts)
