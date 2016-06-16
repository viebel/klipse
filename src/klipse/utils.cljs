(ns klipse.utils
  (:require-macros 
    [cljs.core.async.macros :refer [go]])
  (:require 
    [clojure.walk :refer [keywordize-keys]]
    [cljs-http.client :as http]
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
  (-> (if base-url (url base-url) (current-url))
      (add-url-parameter :cljs_in input)))

(defn debounce [func wait-in-ms]
  (let [counter (atom 0)]
    (fn [] 
      (go
        (swap! counter inc)
        (<! (timeout wait-in-ms))
        (swap! counter dec)
        (when (zero? @counter)  
          (func))))))

(defn gist-path-raw [gist-id]
  (str "https://gist.githubusercontent.com/" gist-id "/raw" "?" (rand)))

(defn gist-path-page [gist-id]
  (str "https://gist.github.com/" gist-id)) 

(defn read-input-from-gist [gist-id]
  (go
    (when gist-id 
      (let [gist-url (gist-path-raw gist-id)
            {:keys [status body]} (<! (http/get
                                        gist-url
                                        {:with-credentials? false}))]
        (if-not (= status 200)
          (str "\""
               "Wrong gist path: " gist-url "\n"
               "gist-id= " gist-id "\n"
               "http status: " status
               "\"")
          body)))))
