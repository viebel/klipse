(ns my-cljs-compiler-in-cljs.config-logic
  (:refer-clojure :exclude [get-in])
  (:use-macros [purnam.core :only [!>]])
  (:require [cljs.reader :refer [read-string]]
            [my-cljs-compiler-in-cljs.url :as url]
            [my-cljs-compiler-in-cljs.collections :as collections]))

(def default-variables
  {:general {:verbose-level 1}
   :errors {
            :max-msgs-in-log 100; number of messages in log (honeybadger + console)
            :delay-between-errs-in-msec 1000; min delay between error notifications (honeybadger + alert)
            :max-chars-in-arg 100; max length for a string in the log message
            :max-elements-in-array 20; max number of elements in an array in log message
            }})

(defn symbol->string [data]
  (if (symbol? data) 
    (str data)
    data))

(defn get-in [target]
  (as->
    (str target) $ 
    (.getItem js/localStorage $)
    (when $ (symbol->string (read-string $)))))

(defn set-config [[path-config val-config]]
  (as->
    (str path-config) $
    (!> js/localStorage.setItem $ (str val-config))))

(defn set-configs 
  ([] 
    (set-configs (collections/deep-merge default-variables (url/to-map))))
  ([configs]
    (as->
      (collections/flatten-keys configs) $
      (doseq [data $] (set-config data)))))

(defonce tmp (set-configs))
