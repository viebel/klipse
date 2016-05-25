(ns klipse.utils
  (:use-macros 
    [cljs.core.async.macros :only [go]])
  (:require 
    [clojure.walk :refer [keywordize-keys]]
    [cljs.core.async :refer [timeout <!]]
    [cemerick.url :refer [url]]))


(defn current-url []
  (url (aget js/location "href")))

(defn url-parameters []
  (-> (current-url)
      :query
      keywordize-keys))

(defn add-url-parameter
  "Returns the current url with an additional parameter.
  If the parameter already exists, it is overridden."
  [base-url key value]
  (-> base-url
      (assoc-in [:query (name key)] value)
      str))

(defn create-url-with-input [base-url input]
  (let [base-url-obj (if base-url (url base-url) (current-url))]
    (doto (add-url-parameter base-url-obj :cljs_in input)
      print
      js/alert)))

(defn debounce [func wait-in-ms]
  (let [counter (atom 0)]
    (fn [] 
      (go
        (swap! counter inc)
        (<! (timeout wait-in-ms))
        (swap! counter dec)
        (when (zero? @counter)  
          (func))))))
