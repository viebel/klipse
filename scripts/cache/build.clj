(ns cache.build
  (:require [clojure.java.io :as io]
            [cljs.build.api :as api]
            [cljs.analyzer :as ana]
            [cljs.env :as env]
            [cognitect.transit :as transit])
  (:import [java.io ByteArrayOutputStream FileInputStream]))

(defmacro my-dump-core []  (let [state @env/*compiler*]
                             (if-not (false? (get-in state [:options :dump-core]))
                               `(quote ~(get-in state [::ana/namespaces 'cljs.core]))
                               `(hash-map))))
(defn write-cache [cache out-path]
  (let [out (ByteArrayOutputStream. 1000000)
        writer (transit/writer out :json)]
    (transit/write writer cache)
    (spit (io/file out-path) (.toString out))))

(defn build []
  (with-redefs [env/*compiler* (atom {})]
  (cljs.analyzer/with-warning-handlers
    [(fn [warning-type env extra]
       (print (class env))
       (when (warning-type cljs.analyzer/*cljs-warnings*)
         (when-let [s (cljs.analyzer/error-message warning-type extra)]
           (binding [*out* *err*]
             (println "WARNING:" (cljs.analyzer/message env s)))
           #_(System/exit 1))))]
    (api/build (api/inputs "cache-src")
               {:output-dir         "out"
               :output-to          "out/main.js"
               :optimizations      :none
               :static-fns         true
               :optimize-constants false
               :dump-core          false
               :parallel-build     true})
    env/*compiler*)))

(defn copy-source
  [filename]
  (spit (str "out/" filename)
    (slurp (io/resource filename))))

(defn copy-sources []
  (copy-source "cljs/test.cljc")
  (copy-source "cljs/spec.cljc")
  (copy-source "cljs/spec/test.cljc")
  (copy-source "cljs/spec/test.cljs")
  (copy-source "cljs/spec/impl/gen.cljc")
  (copy-source "cljs/analyzer/api.cljc")
  (copy-source "clojure/template.clj"))

(defn write-caches []
  (let [res (io/resource "cljs/core.cljs.cache.aot.edn")
            cache (read-string (slurp res))]
    (doseq [key (keys cache)]
      (write-cache (key cache) (str "out/cljs/core.cljs.cache.aot." (munge key) ".json")))))

(defn write-caches-macros []
(let [res "out/cljs/core$macros.cljc.cache.json"
      cache (transit/read (transit/reader (FileInputStream. res) :json))]
  (doseq [key (keys cache)]
    (write-cache (key cache) (str "out/cljs/core$macros.cljc.cache." (munge key) ".json")))))

(defn do-the-job []
  (println "Building")
  (build)
  (copy-sources)
  (write-caches)
  (write-caches-macros)
  (println "Done building")
  (System/exit 0))

