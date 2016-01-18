(ns my-cljs-compiler-in-cljs.url
  (:use-macros [purnam.core :only [? ! obj !>]])
  (:require [cemerick.url :refer [url]]
            [clojure.string :as string]
            [cljs.reader :refer [read-string]]
            [my-cljs-compiler-in-cljs.collections :as collections]))

(defonce special-url-params ["dev" "remoteId" "demo"])
(defn parameters []
  (-> (url (? js/location.href))
      :query))

(defn parameter? [p]
  (not (nil? (find (parameters) p))))

(defn dev-mode? []
  (parameter? "dev"))

(defn demo-mode? []
  (parameter? "demo"))

(defn anchor []
  (-> (url (? js/location.href))
      :anchor))

(defn live? []
  (= "/index-dbg"
  (-> (url (? js/location.href))
          :path)))

(defn to-map []
  (let [kf (fn [k] (map keyword (string/split k #"\.")))
        vf (fn [v]
          (let [s (read-string v)]
            (if (symbol? s) v s)))]
    (as->
      (collections/map-object-kv kf vf (apply dissoc (parameters) special-url-params)) $
      (collections/unflatten-keys $))))
