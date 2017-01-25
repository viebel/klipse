(ns my.gen
  (:require [clojure.string :as string]))

(def nexeres (js/require "nexeres"))
(def resources (filter #(re-matches #"cljs.env.*|cljs.spec.*|cljs.test.*|cljs.repl.*" %) (.keys nexeres)))
(defn get-resource [x]
  (-> (.get nexeres x)
       js/zlib.inflateSync ))


(doseq [res resources]
  (let [filename (str "docs/cache-cljs/" (string/replace res #"/" "_SLASH_"))]
    (println "writing to file: " filename)
    (as-> (get-resource res) $
      (js/fs.writeFile filename $ #(print "done: " filename)))))

