(ns no.en.core
  (:refer-clojure :exclude [replace read-string])
  (:require [clojure.string :refer [blank? join replace split upper-case]]
            #?(:clj [clojure.edn :refer [read-string]])
            #?(:cljs [cljs.reader :refer [read-string]])
            #?(:cljs [goog.crypt.base64 :as base64]))
  #?(:clj (:import [java.net URLEncoder URLDecoder]
                   [org.apache.commons.codec.binary Base64])))

(def port-number
  {:amqp 5672
   :http 80
   :https 443
   :mysql 3306
   :postgresql 5432
   :rabbitmq 5672
   :zookeeper 2181})

(def url-regex #"([^:]+)://(([^:]+):([^@]+)@)?(([^:/]+)(:([0-9]+))?((/[^?#]*)(\?([^#]*))?)?)(\#(.*))?")

(defn split-by-regex
  "Split the string `s` by the regex `pattern`."
  [s pattern]
  (if (sequential? s)
    s (if-not (blank? s)
        (split s pattern))))

(defn split-by-comma
  "Split the string `s` by comma."
  [s] (split-by-regex s #"\s*,\s*"))

(defn utf8-string
  "Returns `bytes` as an UTF-8 encoded string."
  [bytes]
  #?(:clj (String. bytes "UTF-8")
     :cljs (throw (ex-info "utf8-string not implemented yet" bytes))))

(defn base64-encode
  "Returns `s` as a Base64 encoded string."
  [bytes]
  (when bytes
    #?(:clj (String. (Base64/encodeBase64 bytes))
       :cljs (base64/encodeString bytes false))))

(defn base64-decode
  "Returns `s` as a Base64 decoded string."
  [s]
  (when s
    #?(:clj (Base64/decodeBase64 (.getBytes s))
       :cljs (base64/decodeString s false))))

(defn compact-map
  "Removes all map entries where the value of the entry is empty."
  [m]
  (reduce
   (fn [m k]
     (let [v (get m k)]
       (if (or (nil? v)
               (and (or (map? v)
                        (sequential? v))
                    (empty? v)))
         (dissoc m k) m)))
   m (keys m)))

(defn url-encode
  "Returns `s` as an URL encoded string."
  [s & [encoding]]
  (when s
    #?(:clj (-> (URLEncoder/encode (str s) (or encoding "UTF-8"))
                (replace "%7E" "~")
                (replace "*" "%2A")
                (replace "+" "%20"))
       :cljs (-> (js/encodeURIComponent (str s))
                 (replace "*" "%2A")))))

(defn url-decode
  "Returns `s` as an URL decoded string."
  [s & [encoding]]
  (when s
    #?(:clj (URLDecoder/decode s (or encoding "UTF-8"))
       :cljs (js/decodeURIComponent s))))

(defn pow [n x]
  #?(:clj (Math/pow n x)
     :cljs (.pow js/Math n x)))

(def byte-scale
  {"B" (pow 1024 0)
   "K" (pow 1024 1)
   "M" (pow 1024 2)
   "G" (pow 1024 3)
   "T" (pow 1024 4)
   "P" (pow 1024 5)
   "E" (pow 1024 6)
   "Z" (pow 1024 7)
   "Y" (pow 1024 8)})

(defn- apply-unit [number unit]
  (if (string? unit)
    (case (upper-case unit)
      (case unit
        "M" (* number 1000000)
        "B" (* number 1000000000)))
    number))

(defn- parse-number [s parse-fn]
  (if-let [matches (re-matches #"\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(M|B)?.*" (str s))]
    #?(:clj
       (try (let [number (parse-fn (nth matches 1))
                  unit (nth matches 3)]
              (apply-unit number unit))
            (catch NumberFormatException _ nil))
       :cljs
       (let [number (parse-fn (nth matches 1))
             unit (nth matches 3)]
         (if-not (js/isNaN number)
           (apply-unit number unit))))))

(defn parse-bytes [s]
  (if-let [matches (re-matches #"\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(B|K|M|G|T|P|E|Z|Y)?.*" (str s))]
    (let [number (read-string (nth matches 1))
          unit (nth matches 3)]
      (long (* (long (read-string (str (nth matches 1))))
               (get byte-scale (upper-case (or unit "")) 1))))))

(defn parse-integer
  "Parse `s` as a integer number."
  [s]
  (parse-number s #(#?(:clj Integer/parseInt :cljs js/parseInt) %1)))

(defn parse-long
  "Parse `s` as a long number."
  [s]
  (parse-number s #(#?(:clj Long/parseLong :cljs js/parseInt) %1)))

(defn parse-double
  "Parse `s` as a double number."
  [s]
  (parse-number s #(#?(:clj Double/parseDouble :cljs js/parseFloat) %1)))

(defn parse-float
  "Parse `s` as a float number."
  [s]
  (parse-number s #(#?(:clj Float/parseFloat :cljs js/parseFloat) %1)))

(defn format-query-params
  "Format the map `m` into a query parameter string."
  [m]
  (let [params (->> (sort-by first (seq m))
                    (remove #(blank? (str (second %1))))
                    (map #(vector (url-encode (name (first %1)))
                                  (url-encode (second %1))))
                    (map #(join "=" %1))
                    (join "&"))]
    (if-not (blank? params)
      params)))

(defn format-url
  "Format the Ring map as an url."
  [m]
  (if (not (empty? m))
    (let [query-params (:query-params m)]
      (str (if (:scheme m)
             (str (name (:scheme m)) "://"))
           (let [{:keys [username password]} m]
             (when username
               (str username (when password (str ":" password)) "@")))
           (:server-name m)
           (if-let [port (:server-port m)]
             (if-not (= port (port-number (:scheme m)))
               (str ":" port)))
           (if (and (nil? (:uri m))
                    (not (empty? query-params)))
             "/" (:uri m))
           (if-not (empty? query-params)
             (str "?" (format-query-params query-params)))
           (if-not (blank? (:fragment m))
             (str "#" (:fragment m)))))))

(defn public-url
  "Return the formatted `url` without password as a string."
  [url]
  (format-url (dissoc url :password)))

(defn parse-percent
  "Parse `s` as a percentage."
  [s]
  (parse-double (replace s "%" "")))

(defn pattern-quote
  "Quote the special characters in `s` that are used in regular expressions."
  [s]
  (replace (name s) #"([\[\]\^\$\|\(\)\\\+\*\?\{\}\=\!.])" "\\\\$1"))

(defn separator
  "Returns the first string that separates the components in `s`."
  [s]
  (if-let [matches (re-matches #"(?i)([a-z0-9_-]+)([^a-z0-9_-]+).*" s)]
    (nth matches 2)))

(defn parse-query-params
  "Parse the query parameter string `s` and return a map."
  [s]
  (if s
    (->> (split (str s) #"&")
         (map #(split %1 #"="))
         (filter #(= 2 (count %1)))
         (mapcat #(vector (keyword (url-decode (first %1))) (url-decode (second %1))))
         (apply hash-map))))

(defn parse-url
  "Parse the url `s` and return a Ring compatible map."
  [s]
  (if-let [matches (re-matches url-regex (str s))]
    (let [scheme (keyword (nth matches 1))]
      (compact-map
       {:scheme scheme
        :username (nth matches 3)
        :password (nth matches 4)
        :server-name (nth matches 6)
        :server-port (or (parse-integer (nth matches 8)) (port-number scheme))
        :uri (nth matches 10)
        :query-params (parse-query-params  (nth matches 12))
        :query-string (nth matches 12)
        :fragment (nth matches 14)}))))

(defmacro prog1 [& body]
  "Evaluate `body`, returning the result of the first form."
  `(let [result# ~(first body)]
     ~@(rest body)
     result#))

(defn with-retries*
  "Executes thunk. If an exception is thrown, will retry. At most n retries
  are done. If still some exception is thrown it is bubbled upwards in
  the call chain."
  [n thunk]
  (loop [n n]
    (if-let [result
             (try
               [(thunk)]
               (catch #?(:clj Exception :cljs js/Error) e
                 (when (zero? n)
                   (throw e))))]
      (result 0)
      (recur (dec n)))))

(defmacro with-retries
  "Executes body. If an exception is thrown, will retry. At most n retries
  are done. If still some exception is thrown it is bubbled upwards in
  the call chain."
  [n & body]
  `(no.en.core/with-retries* ~n (fn [] ~@body)))

(defn- editable? [coll]
  #?(:clj  (instance? clojure.lang.IEditableCollection coll)
     :cljs (satisfies? cljs.core.IEditableCollection coll)))

(defn- reduce-map [f coll]
  (if (editable? coll)
    (persistent! (reduce-kv (f assoc!) (transient (empty coll)) coll))
    (reduce-kv (f assoc) (empty coll) coll)))

(defn map-keys
  "Maps a function over the keys of an associative collection."
  [f coll]
  (reduce-map (fn [xf] (fn [m k v] (xf m (f k) v))) coll))

(defn map-vals
  "Maps a function over the values of an associative collection."
  [f coll]
  (reduce-map (fn [xf] (fn [m k v] (xf m k (f v)))) coll))

(defn deep-merge
  "Like merge, but merges maps recursively."
  [& maps]
  (if (every? map? maps)
    (apply merge-with deep-merge maps)
    (last maps)))

(defn deep-merge-with
  "Like merge-with, but merges maps recursively, applying the given fn
  only when there's a non-map at a particular level."
  [f & maps]
  (apply
   (fn m [& maps]
     (if (every? map? maps)
       (apply merge-with m maps)
       (apply f maps)))
   maps))
