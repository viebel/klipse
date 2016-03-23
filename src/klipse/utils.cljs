(ns klipse.utils
  (:require [cemerick.url :refer [url]]))

(defn url-parameters []
  (-> (url (aget js/location "href"))
      :query
      clojure.walk/keywordize-keys))
