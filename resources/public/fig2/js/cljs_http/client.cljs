(ns cljs-http.client
  (:refer-clojure :exclude [get])
  (:require [cljs-http.core :as core]
            [cljs-http.util :as util]
            [cljs.core.async :as async :refer [<! chan close! put!]]
            [cljs.reader :refer [read-string]]
            [clojure.string :refer [blank? join split]]
            [goog.Uri :as uri]
            [no.en.core :refer [url-encode url-decode]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn if-pos [v]
  (if (and v (pos? v)) v))

(defn parse-query-params
  "Parse `s` as query params and return a hash map."
  [s]
  (if-not (blank? s)
    (reduce
     #(let [[k v] (split %2 #"=")]
        (assoc %1
          (keyword (url-decode k))
          (url-decode v)))
     {} (split (str s) #"&"))))

(defn parse-url
  "Parse `url` into a hash map."
  [url]
  (if-not (blank? url)
    (let [uri (uri/parse url)
          query-data (.getQueryData uri)]
      {:scheme (keyword (.getScheme uri))
       :server-name (.getDomain uri)
       :server-port (if-pos (.getPort uri))
       :uri (.getPath uri)
       :query-string (if-not (.isEmpty query-data)
                       (str query-data))
       :query-params (if-not (.isEmpty query-data)
                       (parse-query-params (str query-data)))})))

(def unexceptional-status?
  #{200 201 202 203 204 205 206 207 300 301 302 303 307})

(defn- encode-val [k v]
  (str (url-encode (name k)) "=" (url-encode (str v))))

(defn- encode-vals [k vs]
  (->>
    vs
    (map #(encode-val k %))
    (join "&")))

(defn- encode-param [[k v]]
  (if (coll? v)
    (encode-vals k v)
    (encode-val k v)))

(defn generate-query-string [params]
  (->>
    params
    (map encode-param)
    (join "&")))

(def regex-char-esc-smap
  (let [esc-chars "()*&^%$#!+"]
    (zipmap esc-chars
            (map #(str "\\" %) esc-chars))))

(defn escape-special
  "Escape special characters -- for content-type."
  [string]
  (->> string
       (replace regex-char-esc-smap)
       (reduce str)))

(defn decode-body
  "Decocde the :body of `response` with `decode-fn` if the content type matches."
  [response decode-fn content-type request-method]
  (if (and (not= :head request-method)
           (not= 204 (:status response))
           (re-find (re-pattern (str "(?i)" (escape-special content-type)))
                    (str (clojure.core/get (:headers response) "content-type" ""))))
    (update-in response [:body] decode-fn)
    response))

(defn wrap-edn-params
  "Encode :edn-params in the `request` :body and set the appropriate
  Content Type header."
  [client]
  (fn [request]
    (if-let [params (:edn-params request)]
      (let [headers (merge {"content-type" "application/edn"} (:headers request))]
        (-> (dissoc request :edn-params)
            (assoc :body (pr-str params))
            (assoc :headers headers)
            (client)))
      (client request))))

(defn wrap-edn-response
  "Decode application/edn responses."
  [client]
  (fn [request]
    (-> #(decode-body % read-string "application/edn" (:request-method request))
        (async/map [(client request)]))))

(defn wrap-default-headers
  [client & [default-headers]]
  (fn [request]
    (if-let [default-headers (or (:default-headers request) default-headers)]
      (client (assoc request :default-headers default-headers))
      (client request))))

(defn wrap-accept
  [client & [accept]]
  (fn [request]
    (if-let [accept (or (:accept request) accept)]
      (client (assoc-in request [:headers "accept"] accept))
      (client request))))

(defn wrap-content-type
  [client & [content-type]]
  (fn [request]
    (if-let [content-type (or (:content-type request) content-type)]
      (client (assoc-in request [:headers "content-type"] content-type))
      (client request))))

(def ^{:private true} default-transit-opts
  {:encoding :json :encoding-opts {}
   :decoding :json :decoding-opts {}})

(defn wrap-transit-params
  "Encode :transit-params in the `request` :body and set the appropriate
  Content Type header.

  A :transit-opts map can be optionally provided with the following keys:

  :encoding                #{:json, :json-verbose}
  :decoding                #{:json, :json-verbose}
  :encoding/decoding-opts  appropriate map of options to be passed to
                           transit writer/reader, respectively."
  [client]
  (fn [request]
    (if-let [params (:transit-params request)]
      (let [{:keys [encoding encoding-opts]} (merge default-transit-opts
                                                    (:transit-opts request))
            headers (merge {"content-type" "application/transit+json"} (:headers request))]
        (-> (dissoc request :transit-params)
            (assoc :body (util/transit-encode params encoding encoding-opts))
            (assoc :headers headers)
            (client)))
      (client request))))

(defn wrap-transit-response
  "Decode application/transit+json responses."
  [client]
  (fn [request]
    (let [{:keys [decoding decoding-opts]} (merge default-transit-opts
                                                  (:transit-opts request))
          transit-decode #(util/transit-decode % decoding decoding-opts)]

      (-> #(decode-body % transit-decode "application/transit+json" (:request-method request))
          (async/map [(client request)])))))

(defn wrap-json-params
  "Encode :json-params in the `request` :body and set the appropriate
  Content Type header."
  [client]
  (fn [request]
    (if-let [params (:json-params request)]
      (let [headers (merge {"content-type" "application/json"} (:headers request))]
        (-> (dissoc request :json-params)
            (assoc :body (util/json-encode params))
            (assoc :headers headers)
            (client)))
      (client request))))

(defn wrap-json-response
  "Decode application/json responses."
  [client]
  (fn [request]
    (-> #(decode-body % util/json-decode "application/json" (:request-method request))
        (async/map [(client request)]))))

(defn wrap-query-params [client]
  (fn [{:keys [query-params] :as req}]
    (if query-params
      (client (-> req (dissoc :query-params)
                  (assoc :query-string
                    (generate-query-string query-params))))
      (client req))))

(defn wrap-form-params [client]
  (fn [{:keys [form-params request-method headers] :as request}]
    (if (and form-params (#{:post :put :patch :delete} request-method))
      (let [headers (merge {"content-type" "application/x-www-form-urlencoded"} headers)]
        (client (-> request
                    (dissoc :form-params)
                    (assoc :body (generate-query-string form-params))
                    (assoc :headers headers))))
      (client request))))

(defn generate-form-data [params]
  (let [form-data (js/FormData.)]
    (doseq [[k v] params]
      (if (coll? v)
        (.append form-data (name k) (first v) (second v))
        (.append form-data (name k) v)))
    form-data))

(defn wrap-multipart-params [client]
  (fn [{:keys [multipart-params request-method] :as request}]
    (if (and multipart-params (#{:post :put :patch :delete} request-method))
      (client (-> request
                  (dissoc :multipart-params)
                  (assoc :body (generate-form-data multipart-params))))
      (client request))))

(defn wrap-method [client]
  (fn [req]
    (if-let [m (:method req)]
      (client (-> req (dissoc :method)
                  (assoc :request-method m)))
      (client req))))

(defn wrap-server-name [client server-name]
  #(client (assoc %1 :server-name server-name)))

(defn wrap-url [client]
  (fn [{:keys [query-params] :as req}]
    (if-let [spec (parse-url (:url req))]
      (client (-> (merge req spec)
                  (dissoc :url)
                  (update-in [:query-params] #(merge %1 query-params))))
      (client req))))

(defn wrap-basic-auth
  "Middleware converting the :basic-auth option or `credentials` into
  an Authorization header."
  [client & [credentials]]
  (fn [req]
    (let [credentials (or (:basic-auth req) credentials)]
      (if-not (empty? credentials)
        (client (-> (dissoc req :basic-auth)
                    (assoc-in [:headers "authorization"] (util/basic-auth credentials))))
        (client req)))))

(defn wrap-oauth
  "Middleware converting the :oauth-token option into an Authorization header."
  [client]
  (fn [req]
    (if-let [oauth-token (:oauth-token req)]
      (client (-> req (dissoc :oauth-token)
                  (assoc-in [:headers "authorization"]
                            (str "Bearer " oauth-token))))
      (client req))))

(defn wrap-channel-from-request-map
  "Pipe the response-channel into the request-map's
   custom channel (e.g. to enable transducers)"
  [client]
  (fn [request]
    (if-let [custom-channel (:channel request)]
      (async/pipe (client request) custom-channel)
      (client request))))

(defn wrap-request
  "Returns a batteries-included HTTP request function coresponding to the given
   core client. See client/request"
  [request]
  (-> request
      wrap-accept
      wrap-form-params
      wrap-multipart-params
      wrap-edn-params
      wrap-edn-response
      wrap-transit-params
      wrap-transit-response
      wrap-json-params
      wrap-json-response
      wrap-content-type
      wrap-query-params
      wrap-basic-auth
      wrap-oauth
      wrap-method
      wrap-url
      wrap-channel-from-request-map
      wrap-default-headers))

(def #^{:doc
        "Executes the HTTP request corresponding to the given map and returns the
   response map for corresponding to the resulting HTTP response.

   In addition to the standard Ring request keys, the following keys are also
   recognized:
   * :url
   * :method
   * :query-params"}
  request (wrap-request core/request))

(defn delete
  "Like #'request, but sets the :method and :url as appropriate."
  [url & [req]]
  (request (merge req {:method :delete :url url})))

(defn get
  "Like #'request, but sets the :method and :url as appropriate."
  [url & [req]]
  (request (merge req {:method :get :url url})))

(defn head
  "Like #'request, but sets the :method and :url as appropriate."
  [url & [req]]
  (request (merge req {:method :head :url url})))

(defn jsonp
  "Like #'request, but sets the :method and :url as appropriate."
  [url & [req]]
  (request (merge req {:method :jsonp :url url})))

(defn move
  "Like #'request, but sets the :method and :url as appropriate."
  [url & [req]]
  (request (merge req {:method :move :url url})))

(defn options
  "Like #'request, but sets the :method and :url as appropriate."
  [url & [req]]
  (request (merge req {:method :options :url url})))

(defn patch
  "Like #'request, but sets the :method and :url as appropriate."
  [url & [req]]
  (request (merge req {:method :patch :url url})))

(defn post
  "Like #'request, but sets the :method and :url as appropriate."
  [url & [req]]
  (request (merge req {:method :post :url url})))

(defn put
  "Like #'request, but sets the :method and :url as appropriate."
  [url & [req]]
  (request (merge req {:method :put :url url})))

(comment

  (ns example.core
    (:require [cljs-http.client :as http]
              [cljs.core.async :refer [<!]])
    (:require-macros [cljs.core.async.macros :refer [go]]))

  (go (prn (map :login (:body (<! (get "https://api.github.com/users"))))))

  (go (prn (:status (<! (get "http://api.burningswell.dev/continents")))))

  (go (prn (map :name (:body (<! (get "http://api.burningswell.dev/continents"))))))

  (go (let [response (<! (get "https://api.github.com/users"))]
        (prn (:status response))
        (prn (map :login (:body response)))))

  (go (prn (<! (get "http://api.burningswell.dev/continents")))))
