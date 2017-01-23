(ns sqlingvo.url
  (:refer-clojure :exclude [format])
  (:require [no.en.core :as noencore]))

(def regular-expression
  "The regular expression that matches a database URL."
  #"(([^:]+):)?([^:]+)://(([^:]+):([^@]+)@)?(([^:/]+)(:([0-9]+))?((/([^?]*))(\?(.*))?))")

(defn parse
  "Parse the database `url` with `regular-expression` and return the
  database spec. Returns nil if the URL does not match."
  [url]
  (when-let [matches (re-matches regular-expression (str url))]
    (let [database (nth matches 13)
          server-name (nth matches 8)
          server-port (noencore/parse-integer (nth matches 10))
          query-string (nth matches 15)]
      {:name database
       :password (nth matches 6)
       :pool (keyword (nth matches 2))
       :query-params (noencore/parse-query-params query-string)
       :scheme (keyword (nth matches 3))
       :server-name server-name
       :server-port server-port
       :username (nth matches 5)})))

(defn parse!
  "Parse the database `url` with `regular-expression` and return the
  database spec. Throws an exception if `url` does not match."
  [url]
  (or (parse url)
      (throw (ex-info (str "Can't parse database URL: " url)
                      {:url url}))))

(defn format
  "Format the `db` spec as a URL."
  [db]
  (->> (assoc db :uri (str "/" (:name db)))
       (noencore/format-url)))
