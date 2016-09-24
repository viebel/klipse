(ns klipse.io
  (:require-macros [gadjett.core :refer [dbg]]
                   [cljs.core.async.macros :refer [go]])
  (:require
    [cljs-http.client :as http]
    [cljs-http.util :refer [transit-decode]]
    [cljs.core.async :refer [<!]])
  (:import goog.net.XhrIo))

(defn fetch-file!
  "Very simple implementation of XMLHttpRequests that given a file path
  calls src-cb with the string fetched of nil in case of error.
  See doc at https://developers.google.com/closure/library/docs/xhrio"
  [file-url src-cb]
    (try
      ; disable caching to support updates in source files
      ; might consider to make it configurable to disable caching
      (.send XhrIo (str file-url "?" (rand))
             (fn [e]
               (if (.isSuccess (.-target e))
                 (do
                   (js/console.info "loading file: " file-url)
                   (src-cb (.. e -target getResponseText)))
                 (src-cb nil))))
      (catch :default e
        (src-cb nil))))

(defn edn [json]
  (-> json
      clj->js
      js/JSON.stringify
      (transit-decode :json nil)))

(defn no-op [{:keys [name macros path]} src-cb]
  (print "no-op: " path)

  (if macros
    (go
      (let [filename (str "/cache/js/" path ".clj")
            {:keys [status body]} (<! (http/get filename {:with-credentials? false}))]
        (if (= 200 status)
          (do (println "success load: " filename)
              (src-cb {:lang :clj :source body :file "core.clj"}))
          (let [filename (str "/cache/js/" path ".cljc")
                {:keys [status body]} (<! (http/get filename {:with-credentials? false}))]
            (if (= 200 status)
              (do (println "success load: " filename)
                  (src-cb {:lang :clj :source body :file "core.clj"}))
              (src-cb nil))))))
    (go
      (let [filename (str "/cache/js/" path ".cljs.cache.json")
            {:keys [status body]} (<! (http/get filename {:with-credentials? false}))]
        (if (= 200 status)
          (do (println "success load: " filename)
              (src-cb {:lang :js :source "" :cache (edn body)}))
          (src-cb nil))))))

