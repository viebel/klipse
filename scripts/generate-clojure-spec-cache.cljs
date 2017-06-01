(ns klipse.generate-cljs-cache
  (:require [clojure.string :as string]))

(let [embedded js/lumo.internal.embedded]
  (doseq [resource (filter #(re-matches #"cljs/.*|clojure/.*" %) (.keys embedded))]
    (let [filename (str "docs/cache-cljs/" (string/replace resource #"[/\\]" "_SLASH_"))]
      (js/fs.writeFile filename (js/zlib.inflateSync (.get embedded resource)) #(println "Done: " filename)))))
