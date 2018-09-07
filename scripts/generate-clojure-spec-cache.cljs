(ns klipse.generate-cljs-cache
  (:require [clojure.string :as string]))


;; This relies on Lumo internals
;; Works fine with Lumo >= 1.5
;; Might be broken by future Lumo version
(let [embedded js/lumo.internal.embedded]
  (mapv
    (fn [resource]
      (let [filename (str "docs/cache-cljs/" (string/replace resource #"[/\\]" "_SLASH_"))]
        (js/fs.writeFile filename (js/zlib.inflateSync (.get embedded resource)) #(println "Done: " filename))))
    (filter #(re-matches #"cljs/.*|clojure/.*" %) (.keys embedded))))
