;   Copyright (c) Rich Hickey, Reid Draper, and contributors.
;   All rights reserved.
;   The use and distribution terms for this software are covered by the
;   Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
;   which can be found in the file epl-v10.html at the root of this distribution.
;   By using this software in any fashion, you are agreeing to be bound by
;   the terms of this license.
;   You must not remove this notice, or any other, from this software.

(ns clojure.test.check.rose-tree
  "A lazy tree data structure used for shrinking."
  (:refer-clojure :exclude [filter remove seq])
  (:require [#?(:clj clojure.core :cljs cljs.core) :as core]))

(deftype RoseTree [root children]
  #?(:clj  clojure.lang.Indexed
     :cljs IIndexed)
  (#?(:clj nth :cljs -nth) [this i]
    (cond (= i 0) root
          (= i 1) children
          :else (throw #?(:clj  (IndexOutOfBoundsException.)
                          :cljs (js/Error. "Index out of bounds in rose tree")))))

  (#?(:clj nth :cljs -nth) [this i not-found]
    (cond (= i 0) root
          (= i 1) children
          :else not-found)))

(defn root
  "Returns the root of a Rose tree."
  {:no-doc true}
  [^RoseTree rose]
  (.-root rose))

(defn children
  "Returns the children of the root of the Rose tree."
  {:no-doc true}
  [^RoseTree rose]
  (.-children rose))

(defn make-rose
  [root children]
  (RoseTree. root children))

(defn- exclude-nth
  "Exclude the nth value in a collection."
  [n coll]
  (lazy-seq
   (when-let [s (core/seq coll)]
     (if (zero? n)
       (rest coll)
       (cons (first s)
             (exclude-nth (dec n) (rest s)))))))

(defn join
  "Turn a tree of trees into a single tree. Does this by concatenating
  children of the inner and outer trees."
  {:no-doc true}
  [rose]
  (let [outer-root (root rose)
        outer-children (children rose)
        inner-root (root outer-root)
        inner-children (children outer-root)]
    (make-rose inner-root (concat (map join outer-children)
                                  inner-children))))

(defn pure
  "Puts a value `x` into a Rose tree, with no children."
  {:no-doc true}
  [x]
  (make-rose x []))

(defn fmap
  "Applies functions `f` to all values in the tree."
  {:no-doc true}
  [f rose]
  (make-rose (f (root rose)) (map #(fmap f %) (children rose))))

(defn bind
  "Takes a Rose tree (m) and a function (k) from
  values to Rose tree and returns a new Rose tree.
  This is the monadic bind (>>=) for Rose trees."
  {:no-doc true}
  [m k]
  (join (fmap k m)))

(defn filter
  "Returns a new Rose tree whose values pass `pred`. Values who
  do not pass `pred` have their children cut out as well.
  Takes a list of roses, not a rose"
  {:no-doc true}
  [pred rose]
  (make-rose (root rose)
             (map #(filter pred %)
                  (core/filter #(pred (root %)) (children rose)))))

(defn permutations
  "Create a seq of vectors, where each rose in turn, has been replaced
  by its children."
  {:no-doc true}
  [roses]
  (for [[rose index] (map vector roses (range))
        child (children rose)]
    (assoc roses index child)))

(defn zip
  "Apply `f` to the sequence of Rose trees `roses`."
  {:no-doc true}
  [f roses]
  (make-rose
   (apply f (map root roses))
   (map #(zip f %)
        (permutations roses))))

(defn remove
  {:no-doc true}
  [roses]
  (concat
   (map-indexed (fn [index _] (exclude-nth index roses)) roses)
   (permutations (vec roses))))

(defn ^:private unchunk
  "Returns an equivalent lazy seq that is not chunked."
  [a-lazy-seq]
  (take
   #?(:clj Double/POSITIVE_INFINITY :cljs js/Infinity)
   a-lazy-seq))

(defn shrink
  {:no-doc true}
  [f roses]
  (if (core/seq roses)
    (make-rose (apply f (map root roses))
               (map #(shrink f %) (remove (unchunk roses))))
    (make-rose (f) [])))

(declare shrink-vector*)

(defn ^:private bifurcate
  "Returns a sequence of rose trees representing shrinks that discard
  half of the vector of roses."
  [f roses]
  (when (<= 4 (count roses))
    (let [left-count (quot (count roses) 2)]
      (lazy-seq
       (cons
        (shrink-vector* f (subvec roses 0 left-count))
        (lazy-seq
         (list (shrink-vector* f (subvec roses left-count)))))))))

(defn ^:private shrink-vector*
  [f roses]
  (let [thing (shrink f roses)]
    (make-rose (root thing)
               (concat (bifurcate f roses) (children thing)))))

(defn shrink-vector
  [f roses]
  {:pre [(vector? roses)]}
  (let [rose (shrink-vector* f roses)
        empty-rose (make-rose (f) [])]
    (if (empty? roses)
      rose
      (make-rose (root rose)
                 (cons empty-rose (children rose))))))

(defn collapse
  "Return a new rose-tree whose depth-one children
  are the children from depth one _and_ two of the input
  tree."
  {:no-doc true}
  [rose]
  (make-rose (root rose)
             (let [the-children (children rose)]
               (concat (map collapse the-children)
                       (map collapse
                            (mapcat children the-children))))))

(defn- make-stack
  [children stack]
  (if-let [s (core/seq children)]
    (cons children stack)
    stack))

(defn seq
  "Create a lazy-seq of all of the (unique) nodes in a shrink-tree.
  This assumes that two nodes with the same value have the same children.
  While it's not common, it's possible to create trees that don't
  fit that description. This function is significantly faster than
  brute-force enumerating all of the nodes in a tree, as there will
  be many duplicates."
  [rose]
  (let [helper (fn helper [rose seen stack]
                 (let [node (root rose)
                       the-children (children rose)]
                   (lazy-seq
                    (if-not (seen node)
                      (cons node
                            (if (core/seq the-children)
                              (helper (first the-children) (conj seen node) (make-stack (rest the-children) stack))
                              (when-let [s (core/seq stack)]
                                (let [f (ffirst s)
                                      r (rest (first s))]
                                  (helper f (conj seen node) (make-stack r (rest s)))))))
                      (when-let [s (core/seq stack)]
                        (let [f (ffirst s)
                              r (rest (first s))]
                          (helper f seen (make-stack r (rest s)))))))))]
    (helper rose #{} '())))
