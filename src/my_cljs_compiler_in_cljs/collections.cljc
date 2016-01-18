(ns my-cljs-compiler-in-cljs.collections
  (:require [clojure.set]
            [clojure.string :as string]))


#?(:cljs 
(defn to-regular-array[arr]
  (IndexedSeq. arr 0)))


(defn =without-keys? [obj-a obj-b keys-list]
  (apply = (map #(apply dissoc % keys-list) [obj-a obj-b])))

(defn vec->map
  "Converts a 2d vec to a hash-map.
     E.g. 
   
   [[:a 1] [:b 2]] -> {:a 1 :b 2}
   "
  [vec]
  (into {} vec))

(defn map-2d-vec [f m]
  (map (fn[[k id]] [k (f id)]) m))

(defn map-object
  "Usage:

      (map-object f m)

  Returns a map with the same keys as `m` and with the values transformed by `f`.

  For instance:

             (map-object #(* 100 %) {:a 1 :b 2 :c 3}); => {:a 100 :b 200 :c 300})

  "
  [f m]
  (vec->map (map-2d-vec f m)))


(defn map-object-with-key [f m]
  (into {} (map (fn [[a b]] [a (f a b)]) m)))

(defn map-2d-vec-kv [fk fv m]
  (map (fn[[k id]] [(fk k) (fv id)]) m))

(defn map-object-kv [fk fv m]
  (vec->map (map-2d-vec-kv fk fv m)))


(defn map-reverse-hierarchy
  "Turns a hash map inside out.
  See:  [here](http://stackoverflow.com/a/23653784/813665)"
[m]
  (or (apply merge-with conj
         (for [[k1 v1] m [k2 v2] v1] {k2 {k1 v2}}))
      {}))

(defn mean [x] 
  (if (empty? x) 0
    (/ (apply + x)
       (count x))))

(defn sequence->map
  "
  Usage:

  (sequence->map s)

  Converts a sequence into a map where the keys are the indexes of the elements in the sequence.

  For instance: 

  (sequence->map [10 20 30]) => {0 10 1 20 2 30}
  "
  [s]
  (zipmap (range (count s)) s))

(defn- range-with-end 
  ([end] [end (range end)])
  ([start end] [end (range start end)])
  ([start end steps] [end (range start end steps)]))

(defn range-till-end[& args]
  (let [[end lis] (apply range-with-end args)]
    (concat lis [end])))

(defn append-cyclic[lst a]
  (if (seq lst)
    (concat (rest lst) [a])
    lst))

(defn assoc-cyclic 
  ([coll k v]
   (if (contains? coll k)
     (assoc coll k v)
     (into {} (append-cyclic coll [k v]))))
  ([coll k v n]
   (if (< (count coll) n)
     (assoc coll k v)
     (assoc-cyclic coll k v))))

(defn max-and-min [x]
  (if (empty? x)
    [0 0]
    ((juxt #(apply max %) #(apply min %)) x)))

(defn compactize-map [m]
  (into {} (remove (comp nil? second) m)))

(defn filter-map
  "Run a function on the elements of a map and keep only those elements for which
  the function returns true"
  [f m]
  (into {} (filter (comp f val) m)))

(defn abs[x]
  (max x (- x)))

(defn nearest-of-ss [ss x]
  (let [greater (first (subseq ss >= x))
        smaller (first (rsubseq ss <= x))]
    (apply min-key #(abs (- % x)) (remove nil? [greater smaller]))))

(defn nearest-of-seq[a b]
  (if (empty? a)
    b
    (map (partial nearest-of-ss (apply sorted-set a)) b)))

(defn map-to-object[f lst]
  (zipmap lst (map f lst)))

(defn map-with-index 
  "
  Usage:

      (map-with-index coll idx-key val-key)


  Maps a sequence to a sequence of maps with index and value
  For instance:
  
      (map-with-index [10 20 30] :idx :val) =>  '({:idx 0, :val 10} {:idx 1, :val 20} {:idx 2, :val 30}))
  "
  [s idx-key val-key]
  (map-indexed (fn [i v] {idx-key i val-key v}) s))

(defn mapify
  "
  Takes a seq, and returns a map where the keys are the result of applying f to the elements in the seq.
  The result of f should be unique for each element in the seq, otherwise you will loose some data.
  If it is not unique, consider using [group-by](https://clojuredocs.org/clojure.core/group-by)
  "
  [s f]
  (zipmap (map f s) s))

(defn map-to-object-with-index [f s]
    (into {} (map-indexed #(vector %1 (f %2)) s)))

(defn dissoc-in
  "Dissociates an entry from a nested associative structure returning a new
  nested structure. keys is a sequence of keys. Any empty maps that result
  will not be present in the new structure."
  [m [k & ks :as keys]]
  (if ks
    (if-let [nextmap (get m k)]
      (let [newmap (dissoc-in nextmap ks)]
        (if (seq newmap)
          (assoc m k newmap)
          (dissoc m k)))
      m)
    (dissoc m k)))

(defn split-by-predicate 
  "Splits a collection to items where the separator is a repetition of at least n elements that satisfy pred
  inspired by: [this question](http://stackoverflow.com/a/23555616/813665)"
[coll pred n] 
  (let [part  (partition-by  pred coll)
        ppart (partition-by (fn [x] (and
                                      (>= (count x) n) 
                                      (every? pred x))) part)]
        (map #(apply concat %) ppart)))

(defn positions 
  "Receives a collection of lengths and returns a list of start and end positions"
[coll-of-lengths maximal-value]
  (let [end-pos (reductions + coll-of-lengths)
        start-pos (concat [0] end-pos)]
    (map #(list (min maximal-value %1) (min maximal-value %2)) start-pos end-pos)))

(defn submap?
  
  "Checks if m1 is a submap of m2.
  Map m1 is a submap of m2 if all key/value pairs in m1 exist in m2"
  
  [m1 m2]
  (= m1 (select-keys m2 (keys m1))))

(defn subsequence [coll start end]
  (->> (drop start coll)
       (take (- end start))))

(defn split-by-predicate-opt [coll pred n d]
  (let [lengths (map #(* d %) (map count (split-by-predicate (take-nth d coll) pred (/ n d))))
        pos (positions lengths (count coll))]
    pos))

(defn index-of [s element]
  (or (ffirst (filter #(= (second %) element) (map-indexed #(vector %1 %2) s)))
      -1))

(defn display-sequence [long-seq short-seq value abs-step]
  (let [old-step (- (second short-seq) (first short-seq))
        step (* (- (second long-seq) (first long-seq)) abs-step)
        position-in-old-sequence (/ (- value (first short-seq)) old-step)]
    (cond
      (<= 0 position-in-old-sequence 4) (range (- value (* step position-in-old-sequence)) (+ value (* step (- 5 position-in-old-sequence))) step)
      (= position-in-old-sequence 5) (range (- value (* step (- position-in-old-sequence 1))) (+ value step) step)
      (empty? short-seq) (range (- value step) (+ value (* 4 step)) step)
      :else (range value (+ value (* 5 step)) step))))

(defn highest-below-y [m v]
  (second (last (sort-by first (group-by second (filter (fn [[x y]] (<= y v)) m))))))

(defn lowest-above-y [m v]
  (second (first (sort-by first (group-by second (filter (fn [[x y]] (>= y v)) m))))))

(defn highest-below-x [m v]
  (second (last (sort-by first (group-by first (filter (fn [[x y]] (<= x v)) m))))))

(defn lowest-above-x [m v]
  (second (first (sort-by first (group-by first (filter (fn [[x y]] (>= x v)) m))))))

(defn find-keys-with-values-in [m s]
  (filter (comp s m) (keys m)))

(defn replace-keys [coll key-map]
  (zipmap (map #(get key-map % %) (keys coll)) (vals coll)))

(defn find-keys-with-value [m v]
  (find-keys-with-values-in m #{v}))

(defn linear-y [x x1 y1 x2 y2]
  (+  y1 (/ (* (- y2 y1) (- x x1)) (- x2 x1))))

(defn log-x-linear-y [x x1 y1 x2 y2]
  (+ y1 (/ (* (- y2 y1) (- (Math/log x) (Math/log x1))) (- (Math/log x2) (Math/log x1)))))

(defn linear-y-func [{:keys [x y] :as axes}]
  ;Add more options if needed
  (case [x y]
    [:linear :linear] linear-y
    [:log :linear] log-x-linear-y
    linear-y))

(defn interpolate-linear-y [m x 
  & {:keys [interpolate? axes] :or {interpolate? (constantly true) axes {:x :linear :y :linear}}}]
    (or (get m x)
        (let [[x-below y-below] (last (sort (highest-below-x m x)))
              [x-above y-above] (first (sort (lowest-above-x m x)))]
        (when (and x-below x-above (interpolate? x-below x-above))
          ((linear-y-func axes) x x-below y-below x-above y-above)))))

(defn linear-x [y x1 y1 x2 y2]
  (+ x1 (/ (* (- x2 x1) (- y y1)) (- y2 y1))))

(defn linear-x-func [{:keys [x y] :as axes}]
  ;Add more options if needed
  (case [x y]
    [:linear :linear] linear-x
    linear-x))
                        
(defn below-and-above-y [y [x1 y1] [x2 y2]]
  (when (or (< y1 y y2) (> y1 y y2)) [[x1 y1] [x2 y2]]))

(defn find-below-and-above-y [m y]
  (as-> 
    (map vec m) $
    (sort-by first $)
    (map (partial below-and-above-y y) $ (rest $))
    (remove nil? $)))

(defn calc-interpolated-values [m y interpolate? axes]
  (as->
    (fn [[[x-below y-below] [x-above y-above]]]
      (when (and y-below y-above (interpolate? y-below y-above))
        ((linear-x-func axes) y x-below y-below x-above y-above))) $
    (keep $ (find-below-and-above-y m y))))

(defn min-coll [coll]
  (when-not (empty? coll)
    (apply min coll)))

(defn interpolate-linear-x
  "Usage:

  (interpolate-linear-x m y :interpolate? interpolate? :axes axes :select-func select-func)

  returnes the interpolated x for a given y acording to the select-func thats passed

  :interpolate? a predicate for deciding eather to calc th interpolation or not.
  :axes a map that defines what are the axes scales
  :select-func what functionality to use if there are multiple interpolated values

  for instance:

  (interpolate-linear-x {10 30 20 50 70 60}}) => 20"
  [m y
  & {:keys [interpolate? axes select-func]
     :or {interpolate? (constantly true) axes {:x :linear :y :linear} select-func min-coll}}]
  (let [values (find-keys-with-value m y)
        interpolated-values (calc-interpolated-values m y interpolate? axes)]
    (select-func (concat values interpolated-values))))

(defn linear-equation [x1 y1 x2 y2]
  (let [a (/ (- y1 y2) (- x1 x2))
        b (- y1 (* a x1))]
    [a b]))

(defn log-x-linear-equation [x1 y1 x2 y2]
  (let [a (/ (- y1 y2) (- (Math/log x1) (Math/log x2)))
        b (- y1 (* a (Math/log x1)))]
    [a b]))

(defn linear-equation-func [{:keys [x y] :as axes}]
  ;Add more options if needed
  (case [x y]
    [:linear :linear] linear-equation
    [:log :linear] log-x-linear-equation
    linear-equation))

(defn intersection-point [a1 b1 a2 b2]
  (let [x (/ (- b2 b1) (- a1 a2))
        y (+ ( * a1 x) b1)]
    [x y]))

(defn log-x-intersection-point [a1 b1 a2 b2]
  (let [x (/ (- b2 b1) (- a1 a2))
        y (+ ( * a1 x) b1)]
    [(Math/exp x) y]))

(defn intersection-point-func [{:keys [x y] :as axes}]
  ;Add more options if needed
  (case [x y]
    [:linear :linear] intersection-point
    [:log :linear] log-x-intersection-point
    intersection-point))

(defn intersection-point-from-2-lines-points [[ax1 ay1 ax2 ay2] [bx1 by1 bx2 by2]
  & {:keys [axes] :or {axes {:x :linear :y :linear}}}]
  (let [[a1 b1] ((linear-equation-func axes) ax1 ay1 ax2 ay2)
        [a2 b2] ((linear-equation-func axes) bx1 by1 bx2 by2)
        [x y] ((intersection-point-func axes) a1 b1 a2 b2)]
    [x y]))

(defn strings-to-keywords [strings]
  (map keyword (string/split strings #"\s+")))

(defn select-keys-in-order
  "Thanks [Jay Fields](http://blog.jayfields.com/2011/01/clojure-select-keys-select-values-and.html)"
  [m keyseq]
  (map m keyseq))

(defn select-vals [map keyseq]
  (vals (select-keys map keyseq)))

(defn select-vals-in-order
  "Thanks [Jay Fields](http://blog.jayfields.com/2011/01/clojure-select-keys-select-values-and.html)"
  [map ks]
  (reduce #(conj %1 (map %2)) [] ks))

(defn flatten-keys* [a ks m]
  (if (map? m)
    (if (seq m)
      (reduce into (map (fn [[k v]] (flatten-keys* a (conj ks k) v)) (seq m)))
      {})
    (assoc a ks m)))

(defn flatten-keys "Thanks to [Jay Fields](http://blog.jayfields.com/2010/09/clojure-flatten-keys.html)"
  [m] (flatten-keys* {} [] m))

(defn unflatten-keys [m]
  (reduce-kv (fn [a b c] (assoc-in a b c)) {} m))

(defn take-from-map 
  "Creates a map with n leaves which are nested values of m.

      (= n (count (flatten-keys (take-from-map n m)))))))"
  [n m]
  (->> m
       flatten-keys
       (take n)
       (into {}) 
       unflatten-keys))

(defn recursive-vals [m]
  (when m (vals (flatten-keys m))))

(defn sort-keys-by [a-func a-map]
  (map first (sort-by a-func a-map)))

(defn deep-merge* [& maps]
  (let [f (fn [old new]
            (if (and (map? old) (map? new))
              (merge-with deep-merge* old new)
              new))]
    (if (every? map? maps)
      (apply merge-with f maps)
      (last maps))))

(defn deep-merge [& maps]
  (let [maps (filter identity maps)]
    (assert (every? map? maps))
    (apply merge-with deep-merge* maps)))

(defn branches-and-leaves [m]
  "Usage:

  (branches-and-leaves m)

  returnes all branches and leaves off a nested map object

  for instance:

  (branches-and-leaves {:a {:b 1 :c {:d 2}} :e 3}) => 
    {:branches [{:a {:b 1 :c {:d 2}} :e 3} {:b 1 :c {:d 2}} {:d 2} {:e 3}] :leaves [1 2 3]}

  "
  (as-> (tree-seq coll? #(if (map? %) (vals %) %) m) $
        (group-by coll? $)
        (assoc $ true (or (get $ true) []))
        (assoc $ false (or (get $ false) []))
        (clojure.set/rename-keys $ {true :branches false :leaves})))

(defn filter-branches [m p]
  "Usage:

  (filter-branches m p)

  filters branches of a nested map according to a given pred

  for instance:

  (filter-branches {:id {:b 1 :c {:id 2}} :e 3} :id) =>
    ({:id {:b 1 :c {:id 2}} :e 3} {:id 2})
  "
  (->> (branches-and-leaves m)
       :branches
      (filter p)))

(defn out-of-bound?
  "check if index `idx` is in range of vector `v`. More efficiant than ```(get v idx)```"
  [v idx]
   (or (<= (count v) idx) (> 0 idx)))

(defn partition-between 
  "Usage: 

    (partition-between pred coll)

    splits a collection between two items according to the pred.
    which means split the sequence on breaking point.

  See: [here](http://stackoverflow.com/questions/23207490/partition-a-seq-by-a-windowing-predicate-in-clojure)

  For instance:
    split when ascending serie breaks.

    (partition-between (fn [a b] (> a b)) [1 2 4 9 4 6 8 2]) => [[1 2 4 9] [4 6 8] [2]]"

  [pred? coll] 
    (let [switch (reductions not= true (map pred? coll (rest coll)))] 
      (map (partial map first) (partition-by second (map list coll switch)))))

;============== Aliases for legacy reasons =============

(def interpolate-linear 
  interpolate-linear-x)

(def linear 
  linear-x)

(def highest-below
  highest-below-y)

(def lowest-above
  lowest-above-y)
