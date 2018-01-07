(ns cljs-http.util
  (:import goog.Uri)
  (:require [clojure.string :refer [blank? capitalize join split lower-case]]
            [cognitect.transit :as t]
            [goog.userAgent :as agent]
            [no.en.core :refer [base64-encode]]))

(defn basic-auth
  "Returns the value of the HTTP basic authentication header for
  `credentials`."
  [credentials]
  (if credentials
    (let [[username password]
          (if (map? credentials)
            (map credentials [:username :password])
            credentials)]
      (str "Basic " (base64-encode (str username ":" password))))))

(defn build-url
  "Build the url from the request map."
  [{:keys [scheme server-name server-port uri query-string]}]
  (str (doto (Uri.)
         (.setScheme (name (or scheme :http)))
         (.setDomain server-name)
         (.setPort server-port)
         (.setPath uri)
         (.setQuery query-string true))))

(defn camelize
  "Returns dash separated string `s` in camel case."
  [s]
  (->> (split (str s) #"-")
       (map capitalize)
       (join "-")))

(defn build-headers
  "Build the headers from the map."
  [m] (clj->js (zipmap (map camelize (keys m)) (vals m))))

(defn user-agent
  "Returns the user agent."
  [] (agent/getUserAgentString))

(defn android?
  "Returns true if the user agent is an Android client."
  [] (re-matches #"(?i).*android.*" (user-agent)))

(defn transit-decode
  "Transit decode an object from `s`."
  [s type opts]
  (let [rdr (t/reader type opts)]
    (t/read rdr s)))

(defn transit-encode
  "Transit encode `x` into a String."
  [x type opts]
  (let [wrtr (t/writer type opts)]
    (t/write wrtr x)))

(defn json-decode
  "JSON decode an object from `s`."
  [s]
  (if-let [v (if-not (clojure.string/blank? s) (js/JSON.parse s))]
    (js->clj v :keywordize-keys true)))

(defn json-encode
  "JSON encode `x` into a String."
  [x] (js/JSON.stringify (clj->js x)))

(defn parse-headers [headers]
  (reduce
   #(let [[k v] (split %2 #":\s+")]
      (if (or (blank? k) (blank? v))
        %1 (assoc %1 (lower-case k) v)))
   {} (split (or headers "") #"(\n)|(\r)|(\r\n)|(\n\r)")))
