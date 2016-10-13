(ns klipse.io
  (:require-macros [gadjett.core :refer [dbg]]
                   [cljs.core.async.macros :refer [go]])
  (:require
    [clojure.string :refer [join split lower-case]]
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

(defmulti no-op (fn [{:keys [name macros path]} src-cb]
  (print "no-op: " [name macros path])
                  (dbg (cond
                    macros :macro
                    (re-matches #"^goog/.*" path) :goog
                    :default :cljs))))

;https://github.com/clojure/clojurescript/blob/master/src/test/self/self_parity/test.cljs#L166
;Indicates namespaces that we either don't need to load,
;shouldn't load, or cannot load (owing to unresolved
;                                          technical issues).

(def skip-ns-macros #{'cljs.core
                      'cljs.pprint
                      'cljs.env.macros
                      'cljs.analyzer.macros
                      'cljs.js
                      'cljs.compiler.macros})

(def ns-macros-map '{cljs.spec.impl.gen "https://raw.githubusercontent.com/clojure/clojurescript/r1.9.229/src/main/cljs/cljs/spec/impl/gen.cljc"
                      cljs.spec "https://raw.githubusercontent.com/clojure/clojurescript/r1.9.229/src/main/cljs/cljs/spec.cljc"})

(def skip-ns-cljs #{'cljs.core
                    'cljs.env
                    'cljs.pprint
                    'cljs.tools.reader})

(def skip-ns-goog #{'goog.object
                    'goog.string
                    'goog.string.StringBuffer
                    'goog.array})



(defmethod no-op :macro [{:keys [name path]} src-cb]
  (go
    (cond (contains? skip-ns-macros name)
          (src-cb {:lang :clj :source ""})
          (find ns-macros-map name)
          (let [filename (get ns-macros-map name)
                {:keys [status body]} (<! (http/get filename {:with-credentials? false}))]
            (if (= 200 status)
              (do (println "success load: " filename)
                  (src-cb {:lang :clj :source body :file "core.clj"}))
              (src-cb nil)))
          :else (let [filename (str "/cache/js/" path ".clj")
            {:keys [status body]} (<! (http/get filename {:with-credentials? false}))]
        (if (= 200 status)
          (do (println "success load: " filename)
              (src-cb {:lang :clj :source body :file "core.clj"}))
          (let [filename (str "/cache/js/" path ".cljc")
                {:keys [status body]} (<! (http/get filename {:with-credentials? false}))]
            (if (= 200 status)
              (do (println "success load: " filename)
                  (src-cb {:lang :clj :source body :file "core.clj"}))
              (src-cb nil))))))))

(defmethod no-op :cljs [{:keys [name path]} src-cb]
  (go
    (if (contains? skip-ns-cljs name)
      (src-cb {:lang :js :source ""})
      (let [filename (str "/cache/js/" path ".cljs.cache.json")
            {:keys [status body]} (<! (http/get filename {:with-credentials? false}))]
        (if (= 200 status)
          (do (println "success load: " filename)
              (src-cb {:lang :js :source "" :cache (edn body)}))
          (let [filename (str "/cache/js/" path ".cljc.cache.json")
                {:keys [status body]} (<! (http/get filename {:with-credentials? false}))]
            (if (= 200 status)
              (do (println "success load: " filename)
                  (src-cb {:lang :js :source "" :cache (edn body)}))
              (src-cb nil))))))))

(defn fix-goog-path [path]
  ; goog/string -> goog/string/string
  ; goog/string/StringBuffer -> goog/string/stringbuffer
  (let [parts (split path #"/")
        last-part (last parts)
        new-parts (concat
                    (butlast parts)
                    (if (= last-part (lower-case last-part))
                      [last-part last-part]
                      [(lower-case last-part)]))]
    (join "/" new-parts)))

(defmethod no-op :goog [{:keys [name path]} src-cb]
  (src-cb {:lang :js :source ""}))
  #_(go
    (let [closure-github-path "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/"
          filename (str closure-github-path (fix-goog-path path) ".js")
          {:keys [status body]} (<! (http/get filename {:with-credentials? false}))]
      (if (= 200 status)
        (do (println "success load: " filename)
            (src-cb {:lang :js :source body}))
        (do (println "failed load: " filename)
            (src-cb nil)))))

