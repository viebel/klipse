(ns sablono.normalize
  (:refer-clojure :exclude [class])
  (:require [clojure.set :as set]
            [clojure.string :as str]
            [sablono.util :as util]))

(defn compact-map
  "Removes all map entries where the value of the entry is empty."
  [m]
  (reduce
   (fn [m k]
     (let [v (get m k)]
       (if (empty? v)
         (dissoc m k) m)))
   m (keys m)))

(defn class-name
  [x]
  (cond
    (string? x) x
    (keyword? x) (name x)
    :else x))

(defn class
  "Normalize `class` into a vector of classes."
  [class]
  (cond
    (nil? class)
    nil

    (list? class)
    (if (symbol? (first class))
      [class]
      (map class-name class))

    (symbol? class)
    [class]

    (string? class)
    [class]

    (keyword? class)
    [(class-name class)]

    (and (or (set? class)
             (sequential? class))
         (every? #(or (keyword? %)
                      (string? %))
                 class))
    (mapv class-name class)

    (and (or (set? class)
             (sequential? class)))
    (mapv class-name class)

    :else class))

(defn attributes
  "Normalize the `attrs` of an element."
  [attrs]
  (cond-> attrs
    (:class attrs)
    (update-in [:class] class)))

(defn merge-with-class
  "Like clojure.core/merge but concatenate :class entries."
  [& maps]
  (let [maps (map attributes maps)
        classes (map :class maps)
        classes (vec (apply concat classes))]
    (cond-> (apply merge maps)
      (not (empty? classes))
      (assoc :class classes))))

(defn strip-css
  "Strip the # and . characters from the beginning of `s`."
  [s] (if s (str/replace s #"^[.#]" "")))

(defn match-tag
  "Match `s` as a CSS tag and return a vector of tag name, CSS id and
  CSS classes."
  [s]
  (let [matches (re-seq #"[#.]?[^#.]+" (name s))
        [tag-name names]
        (cond (empty? matches)
              (throw (ex-info (str "Can't match CSS tag: " s) {:tag s}))
              (#{\# \.} (ffirst matches)) ;; shorthand for div
              ["div" matches]
              :default
              [(first matches) (rest matches)])]
    [tag-name
     (first (map strip-css (filter #(= \# (first %1)) names)))
     (vec (map strip-css (filter #(= \. (first %1)) names)))]))

(defn children
  "Normalize the children of a HTML element."
  [x]
  (->> (cond
         (string? x)
         (list x)
         (util/element? x)
         (list x)
         (and (list? x)
              (symbol? x))
         (list x)
         (list? x)
         x
         (and (sequential? x)
              (sequential? (first x))
              (not (string? (first x)))
              (not (util/element? (first x)))
              (= (count x) 1))
         (children (first x))
         (sequential? x)
         x
         :else (list x))
       (remove nil?)))

(defn element
  "Ensure an element vector is of the form [tag-name attrs content]."
  [[tag & content]]
  (when (not (or (keyword? tag) (symbol? tag) (string? tag)))
    (throw (ex-info (str tag " is not a valid element name.") {:tag tag :content content})))
  (let [[tag id class] (match-tag tag)
        tag-attrs (compact-map {:id id :class class})
        map-attrs (first content)]
    (if (map? map-attrs)
      [tag
       (merge-with-class tag-attrs map-attrs)
       (children (next content))]
      [tag
       (attributes tag-attrs)
       (children content)])))
