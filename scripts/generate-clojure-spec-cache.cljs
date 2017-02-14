(ns generate-cljs-cache
  (:require [clojure.string :as string]))

(let [nexeres (js/require "nexeres")]
  (doseq [resource (filter #(re-matches #"cljs.*" %) (.keys nexeres))]
    (let [filename (str "docs/cache-cljs/" (string/replace resource #"[/\\]" "_SLASH_"))]
      (js/fs.writeFile filename (js/zlib.inflateSync (.get nexeres resource)) (constantly true)))))
