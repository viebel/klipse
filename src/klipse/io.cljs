(ns klipse.io
  (:require-macros [gadjett.core :refer [dbg]]
                   [cljs.core.async.macros :refer [go go-loop]])
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

(defmulti no-op (fn [_ {:keys [name macros path]} src-cb]
  (dbg [name macros path])
                  (cond
                    macros :macro
                    (re-matches #"^goog/.*" path) :goog
                    :default :cljs)))

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

(def the-ns-map '{cljs.spec "https://raw.githubusercontent.com/clojure/clojurescript/r1.9.229/src/main/cljs/"
                  cljs.spec.impl.gen "https://raw.githubusercontent.com/clojure/clojurescript/r1.9.229/src/main/cljs/"})

(def skip-ns-cljs #{'cljs.core
                    'cljs.env
                    'cljs.pprint
                    'cljs.source-map
                    'cljs.tools.reader.reader-types
                    'cljs.tools.reader})

(def skip-ns-goog #{'goog.object
                    'goog.string
                    'goog.string.StringBuffer
                    'goog.array})

(def cached-ns '#{cljs.analyzer.api
                  cljs.analyzer
                  cljs.core
                  cljs.core$macros
                  cljs.tagged-literals
                  cljs.compiler
                  cljs.core.match
                  cljs.env
                  cljs.js
                  cljs.reader
                  cljs.source_map.base64
                  cljs.source_map.base64_vlq
                  cljs.source_map
                  cljs.spec.impl.gen
                  cljs.spec
                  cljs.tagged_literals
                  cljs.tools.reader.impl.commons
                  cljs.tools.reader.impl.utils
                  cljs.tools.reader.reader_types
                  cljs.tools.reader
                  clojure.set
                  clojure.string
                  clojure.walk})

(defn try-to-load-ns
  ([filenames lang src-key src-cb] (try-to-load-ns filenames lang src-key src-cb identity))
  ([filenames lang src-key src-cb transform-body-fn]
   (go
     (when-not (loop [filenames filenames]
                 (when (seq filenames)
                   (let [filename (first filenames)
                         {:keys [status body]} (<! (http/get filename {:with-credentials? false}))]
                     (if (= 200 status)
                       (do (println "success load: " filename)
                           (src-cb {:lang lang src-key (transform-body-fn body) :file filename})
                           :success)
                       (do (println "cannot load: " filename)
                           (recur (rest filenames)))))))
       (src-cb nil)))))

(def macro-suffixes [".clj" ".cljc"])
(def cljs-suffixes [".cljs" ".cljc"])

(defn external-libs-files [external-libs suffixes path]
  (for [lib external-libs
        suffix suffixes]
    (str lib "/" path suffix)))

(defmethod no-op :macro [external-libs {:keys [name path]} src-cb]
  (cond
    (skip-ns-macros name) (src-cb {:lang :clj :source ""})
    (find the-ns-map name) (let [prefix (str (get the-ns-map name) "/" path)
                                 filenames (dbg (map (partial str prefix) macro-suffixes))]
                             (try-to-load-ns filenames :clj :source src-cb))
    :else (let [filenames (dbg (external-libs-files external-libs macro-suffixes path))]
            (try-to-load-ns filenames :clj :source src-cb))))

(def cache-url "https://storage.googleapis.com/app.klipse.tech/fig/js/")
#_(def cache-url "/cache/js/")

(defmethod no-op :cljs [external-libs {:keys [name path]} src-cb]
  (cond (skip-ns-cljs name) (src-cb {:lang :js :source ""})
        (cached-ns name) (let [filenames (map #(str cache-url path % ".cache.json") [".cljs" ".cljc"])]
                                     (try-to-load-ns filenames :js :cache src-cb edn))
        (find the-ns-map name) (let [prefix (str (get the-ns-map name) "/" path)
                                     filenames (dbg (map (partial str prefix) [".cljc" ".cljs"]))]
                                 (try-to-load-ns filenames :clj :source src-cb))
        :else (let [filenames (dbg (external-libs-files external-libs cljs-suffixes path))]
                (try-to-load-ns filenames :clj :source src-cb))))

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

(defmethod no-op :goog [_ {:keys [name path]} src-cb]
  (cond
    (skip-ns-goog name) (src-cb {:lang :js :source ""})
    :else (let [closure-github-path "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/"
                filenames (map #(str closure-github-path % ".js") [(fix-goog-path path) path])]
            (try-to-load-ns filenames :js :source src-cb))))


