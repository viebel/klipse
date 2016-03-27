(ns klipse.utils
  (:require [cemerick.url :refer [url]]))


(defn current-url []
  (url (aget js/location "href")))

(defn url-parameters []
  (-> (current-url)
      :query
      clojure.walk/keywordize-keys))

(defn add-url-parameter
  "Returns the current url with an additional parameter.
  If the parameter already exists, it is overridden."
  [key value]
  (-> (current-url)
      (assoc-in [:query (name key)] value)
      str))
