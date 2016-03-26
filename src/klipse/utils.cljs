(ns klipse.utils
  (:use-macros 
    [cljs.core.async.macros :only [go]])
  (:require 
    [cljs.core.async :refer [timeout <!]]
    [cemerick.url :refer [url]]))


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

(defn debounce [func wait-in-ms]
  (let [counter (atom 0)]
    (fn [] 
      (go
        (swap! counter inc)
        (<! (timeout wait-in-ms))
        (swap! counter dec)
        (when (zero? @counter)  
          (func))))))
