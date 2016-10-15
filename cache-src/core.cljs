(ns core
  (:require
    cljs.js
    [clojure.set :refer [union]]))

(defn foo [] (union #{1 2} #{2 4}))
