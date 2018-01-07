(ns gadjett.collections
  (:require [clojure.set :refer [union]]
            [clojure.walk :refer [postwalk]]
            [clojure.string :refer [blank? join split-lines]]
            [clojure.zip :as zip]))

(def infinity #?(:cljs js/Infinity
                 :clj Double/POSITIVE_INFINITY))

(defn abs
  "Absolute value of a number

~~~klipse
  (map abs (range -5 5))
~~~

"
[x]
  (max x (- x)))

(defn- scale [x y]
  (if (or (zero? x) (zero? y))
    1
    (abs x)))

(defn almost=
  ([x y] (almost= x y 0.00001))
  ([x y epsilon] (or (= x y)
                     (<= (abs (- x y))
                         (* (scale x y) epsilon)))))


(defn- =set [a b]
  (= (into #{} a)
     (into #{} b)))

(defn =without-keys?
  "Compare two maps exclusing some keys

~~~klipse
  (=without-keys? {:a 1 :b 2 :c 3} {:a 1 :b 5} #{:b :c})
~~~
  "
  [obj-a obj-b keys-list]
  (apply = (map #(apply dissoc % keys-list) [obj-a obj-b])))

(defn vec->map
  "Converts a 2d vec to a hash-map.

~~~klipse
   (vec->map [[:a 1] [:b 2]])
~~~
   "
  [vec]
  (into {} vec))

(defn map-2d-vec
  "Maps the values of a `2D` vector where each element of the vector is a key-value pair.
`f` is a `1-ary` function that receives the key.

~~~klipse
  (map-2d-vec inc [[:a 1] [:b 2]])
~~~
"
  [f m]
  (map (fn[[k id]] [k (f id)]) m))

(defn map-2d-vec-kv 
  "Maps the values of a `2D` vector where each element of the vector is a key-value pair.
`fk` is a `1-ary` function that receives the key.
`fv` is a `1-ary` function that receives the value.

~~~klipse
    (map-2d-vec-kv name inc [[:a 1] [:b 2]])
~~~
"
 [fk fv m]
  (map (fn[[k id]] [(fk k) (fv id)]) m))

(defn map-object
  "Returns a map with the same keys as `m` and with the values transformed by `f`. `f` is a `1-ary` function that receives the key.

~~~klipse
  (map-object inc {:a 1 :b 2 :c 3})
~~~
  "
  [f m]
  (vec->map (map-2d-vec f m)))

(defn map-object-with-key
  "Returns a map with the same keys as `m` and with the values transformed by `f`. `f` must be a `2-ary` function that receives the key and the value as arguments.

~~~klipse
  (map-object-with-key list {:a 1 :b 2 :c 3})
~~~
  "
  [f m]
  (into {} (map (fn [[a b]] [a (f a b)]) m)))

(defn map-object-kv
  "Returns a map with the keys mapped by `fk` and the values mapped by `fv`.

~~~klipse
    (map-object-kv name inc {:a 1 :b 2 :c 3})
~~~
"
[fk fv m]
  (vec->map (map-2d-vec-kv fk fv m)))

(defn map-reverse-hierarchy
  "Turns a hash map inside out.
  See:  [here](http://stackoverflow.com/a/23653784/813665)

~~~klipse
  (map-reverse-hierarchy {:monday {:banana 2 :apple 3} 
                          :tuesday {:banana 5 :orange 2}})
~~~
"
[m]
  (or (apply merge-with conj
         (for [[k1 v1] m [k2 v2] v1] {k2 {k1 v2}}))
      {}))

(defn mean
  "Calculates the mean (a.k.a average) of a sequence of numbers.

~~~klipse
  (mean [1 2 10 -1 12.3])
~~~
  "
 [x]
  (if (empty? x) 0
    (/ (apply + x)
       (count x))))

(defn sequence->map
  "Converts a sequence into a map where the keys are the indexes of the elements in the sequence.

  ~~~klipse
  (sequence->map [10 20 30])
  ~~~
  "
  [s]
  (zipmap (range (count s)) s))

(defn sequence-of-maps->map
  "Converts a sequence of maps into a map where:

  - the keys are extracted from the maps using `key-fn`
  - the vals extracted from the maps using `val-fn`  
  
  ~~~klipse
  (sequence-of-maps->map [{:key :price :value 19}
                          {:key :quantity :value 100}]
                          :key :value)
  ~~~
  "
  [coll key-fn val-fn]
  (reduce (fn [res m]
            (assoc res (key-fn m) (val-fn m)))
          {}
          coll))

(defn- range-with-end
  ([end] [end (range end)])
  ([start end] [end (range start end)])
  ([start end steps] [end (range start end steps)]))

(defn range-till-end
  "Like `range` but including the `end`.

~~~klipse
  (range-till-end 10)
~~~

~~~klipse
(range-till-end 10 18)
~~~

~~~klipse
(range-till-end 10 100 5)
~~~

  "
  [& args]
  (let [[end lis] (apply range-with-end args)]
     (concat lis [end])))

(defn append-cyclic
  "Appends an element to a list popping out the first element.

~~~klipse
  (-> (repeat 3 nil)
      (append-cyclic 1)
      (append-cyclic 2)
      (append-cyclic 3)
      (append-cyclic 4))
~~~
  "
  [lst a]
  (if (seq lst)
    (concat (rest lst) [a])
    lst))

(defn assoc-cyclic
  "Assoc a key-value pair to a map popping out an element of the map.
  If the key already exists, no element is popped out.
  If `n` is supplied, no elmement is popped out if the map has less than `n` entries.

~~~klipse
  (-> {:a 1 :b 2 :c 3}
      (assoc-cyclic :d 4)
      (assoc-cyclic :e 5)
      (assoc-cyclic :f 6)
      (assoc-cyclic :g 7))
~~~
  "
  ([coll k v]
   (if (contains? coll k)
     (assoc coll k v)
     (into {} (append-cyclic coll [k v]))))
  ([coll k v n]
   (if (< (count coll) n)
     (assoc coll k v)
     (assoc-cyclic coll k v))))

(defn max-and-min
  "Returns a couple of the `max` and the `min` of a sequence.

~~~klipse
  (max-and-min (range 5))
~~~
  "
  [x]
  (if (empty? x)
    [0 0]
    ((juxt #(apply max %) #(apply min %)) x)))

(defn compactize-map
  "Removes entries with `nil` values.

~~~klipse
  (compactize-map {:a 1 :b nil :c 3})
~~~
  "
  [m]
  (into {} (remove (comp nil? second) m)))


;; http://stackoverflow.com/a/34221816/813665
(defn compactize-map-recursive
  "Remove from a map the entries whose values are `nil`.
  If all the values of a nested map are `nil` the entrie is removed.
~~~klipse

(compactize-map-recursive {:x 1 :z {:a nil} :a {:b nil :c 2 :d {:e nil :f 2}}})
~~~
  "
    [m]
  (let [f (fn [x]
            (if (map? x)
              (let [kvs (filter (comp not nil? second) x)]
                (if (empty? kvs) nil (into {} kvs)))
              x))]
    (postwalk f m)))

(defn filter-map
  "Run a function on the values of a map and keep only the (key, value) pairs for which the function returns true
  
~~~klipse
  (filter-map even? {:a 1 :b 2 :c 3})
~~~
  "
  [f m]
  (into {} (filter (comp f val) m)))






(defn nearest-of-ss
  "Returns the nearest number to `x` of a sorted set

~~~klipse
  (nearest-of-ss (apply sorted-set (range 5)) 1.2)
~~~
  "
  [ss x]
  (let [greater (first (subseq ss >= x))
        smaller (first (rsubseq ss <= x))]
    (apply min-key #(abs (- % x)) (remove nil? [greater smaller]))))

(defn nearest-of-seq
  "Maps each element of `b` to its nearest element in `a`.
  If `a` is empty, returns `b`.

~~~klipse
  (nearest-of-seq (range 5) [1.2 3.4 4])
~~~
  "
  [a b]
  (if (empty? a)
    b
    (map (partial nearest-of-ss (apply sorted-set a)) b)))

(defn map-to-object
  "Returns a map whose keys are the elements of `lst` and values are mapped by `f`.

~~~klipse
  (map-to-object inc (range 5))
~~~
  "
  [f lst]
  (zipmap lst (map f lst)))

(defn mapify
  "
  Takes a seq, and returns a map where the keys are the result of applying f to the elements in the seq.
  The result of f should be unique for each element in the seq, otherwise you will loose some data.
  If it is not unique, consider using [group-by](https://clojuredocs.org/clojure.core/group-by).

~~~klipse
  (mapify inc (range 5) )
~~~
  "
  [f s]
  (zipmap (map f s) s))

(defn map-with-index
  "Maps a sequence to a sequence of maps with index and value

~~~klipse
      (map-with-index [10 20 30] :idx :val)
~~~
  "
  [s idx-key val-key]
  (map-indexed (fn [i v] {idx-key i val-key v}) s))

(defn dissoc-in
  "Dissociates an entry from a nested associative structure returning a new nested structure. `keys` is a sequence of keys. Any empty maps that result will not be present in the new structure. See [assoc-in](https://clojuredocs.org/clojure.core/assoc-in)

~~~klipse
  (dissoc-in {:a 1 :b 2} [:b])
~~~

~~~klipse
  (dissoc-in {:a {:b 2 :B 3} :c 3} [:a :b])
~~~

~~~klipse
  (dissoc-in {:a {:b 2} :c 3} [:a :b])
~~~
  "
  [m [k & ks :as keys]]
  (if ks
    (if-let [nextmap (get m k)]
      (let [newmap (dissoc-in nextmap ks)]
        (if (seq newmap)
          (assoc m k newmap)
          (dissoc m k)))
      m)
    (dissoc m k)))

(defn positions
  "Receives a collection of lengths and returns a list of start and end positions. Options:
  * `max-val`: (default `infinity`) - max value for `end`
  * `first-val`: (default 0) - first value of `start`

~~~klipse
  (positions '(10 10 20) :first-val 100 :max-val 137)
~~~

  "
[coll-of-lengths & {:keys [max-val first-val] :or {max-val infinity first-val 0}}]
  (let [end-pos (rest (reductions + first-val coll-of-lengths))
        start-pos (concat [first-val] end-pos)]
    (map #(list (min max-val %1) (min max-val %2)) start-pos end-pos)))

(defn split-by-predicate
  "Splits a collection to items where the separator is a repetition of at least n elements that satisfy `pred`.

  Inspired by: [this question](http://stackoverflow.com/a/23555616/813665).

~~~klipse
  (split-by-predicate (shuffle (range 30)) even? 2)
~~~
  "
[coll pred n] 
  (let [part  (partition-by  pred coll)
        ppart (partition-by (fn [x] (and
                                      (>= (count x) n) 
                                      (every? pred x))) part)]
        (map #(apply concat %) ppart)))

(defn split-by-predicate-positions
  "
  Optimized version of `split-by-predicate` where we assume that the data is from a signal that we can sample.

  Instead of checking each element, we check 1 over `n` elements.

 We return the positions where the data splits.

~~~klipse
  (let [data (map Math/sin (range 0 6.28 0.001))]
    (split-by-predicate-positions data #(<= -0.01 % 0.01) 2 10))
~~~

  The following assertion holds:

~~~clojure
  (= (split-by-predicate coll pred n)
     (map #(apply subsequence data %) (split-by-predicate-positions coll pred n 1)))
~~~

  Here is an example:

~~~klipse
  (let [data (map Math/sin (range 0 6.28 0.01))]
    (= (split-by-predicate data #(<= -0.01 % 0.01) 2)
       (map #(apply subsequence data %) (split-by-predicate-positions data #(<= -0.01 % 0.01) 2 1))))
~~~
  "
  [coll pred n d]
  (let [lengths (map #(* d %) (map count (split-by-predicate (take-nth d coll) pred (/ n d))))
        pos (positions lengths :max-val (count coll))]
    pos))

(defn submap?
  "Checks if `m1` is a submap of `m2`.
  Map `m1` is a submap of `m2` if all key/value pairs in `m1` exist in `m2`.

~~~klipse
  (submap? {:a 1} {:a 1 :b 2})
~~~

~~~klipse
  (submap? {:a 1} {:a 1 :b 2 :c nil})
~~~
  "
  [m1 m2]
  (= m1 (select-keys m2 (keys m1))))

(defn subsequence
  "
  Returns a lazy subsequence of `coll`, starting at `start, ending at `end` (not included).

~~~klipse
  (subsequence (range) 10 20)
~~~
  "
  [coll start end]
  (->> (drop start coll)
       (take (- end start))))

(defn index-of
  "Returns the index of an element in a sequence or `-1` if not present.

  ~~~klipse
  (index-of (range 100) 18)
  ~~~
  "
  [s element]
  (or (ffirst (filter #(= (second %) element) (map-indexed #(vector %1 %2) s)))
      -1))

(defn- flatten-keys* [a ks m]
  (if (map? m)
    (if (seq m)
      (reduce into (map (fn [[k v]] (flatten-keys* a (conj ks k) v)) (seq m)))
      {})
    (assoc a ks m)))

(defn flatten-keys
"
Flatten the keys of a nested map.
Thanks to [Jay Fields](http://blog.jayfields.com/2010/09/clojure-flatten-keys.html)

~~~klipse
(flatten-keys {:a {:b 1} :c {:d 2 :e 4 :f {:g 8}}})
~~~
"
  [m] (flatten-keys* {} [] m))

(defn unflatten-keys
"
  Unflattend the keys of a map that has been `flatten-keys`ed.

~~~klipse
(unflatten-keys {[:a :b] 1, [:c :d] 2, [:c :e] 4, [:c :f :g] 8})
~~~
"
  [m]
  (reduce-kv (fn [a b c] (assoc-in a b c)) {} m))

(defn take-from-map
  "Creates a map with n leaves which are nested values of m.
  The following assertion holds:

~~~clojure
      (>= n (count (flatten-keys (take-from-map n m)))))))
~~~

~~~klipse
  (take-from-map 3 {:a {:b 1}, :c {:e 4, :d 2, :f {:g 8}}})
~~~
  "
  [n m]
  (->> m
       flatten-keys
       (take n)
       (into {})
       unflatten-keys))

(defn- deep-merge* [& maps]
  (let [f (fn [old new]
            (if (and (map? old) (map? new))
              (merge-with deep-merge* old new)
              new))]
    (if (every? map? maps)
      (apply merge-with f maps)
      (last maps))))

(defn deep-merge
" Deep merges maps.

~~~klipse
(deep-merge {} {:a {:b 1}, :c {:e 4, :d 2, :f {:g 8}}} {:a {:b 1}, :c {:e 4, :d 2000, :f {:g 9000}}})
~~~
"
  [& maps]
  (let [maps (filter identity maps)]
    (assert (every? map? maps))
    (apply merge-with deep-merge* maps)))

(defn- deep-merge-with* [g & maps]
  (let [f (fn [old new]
            (if (and (map? old) (map? new))
              (merge-with (partial deep-merge-with* g) old new)
              (g old new)))]
    (if (every? map? maps)
      (apply merge-with f maps)
      (apply g maps))))

(defn deep-merge-with
"Like merge-with but deep.
~~~klipse
(deep-merge-with concat
                 {:x {:b [1]
                      :a [1]}}
                 {:x {:a [3 4]}})
~~~
"
  [g & maps]
  (let [maps (filter identity maps)]
    (assert (every? map? maps))
    (apply merge-with (partial deep-merge-with* g) maps)))

(defn branches-and-leaves
  "Returns all branches and leaves off a nested map object.

~~~klipse
(branches-and-leaves {:a {:b 1 :c {:d 2}} :e 3})
~~~
  "
  [m]
  (as-> (tree-seq coll? #(if (map? %) (vals %) %) m) $
        (group-by coll? $)
        (assoc $ true (or (get $ true) []))
        (assoc $ false (or (get $ false) []))
        (clojure.set/rename-keys $ {true :branches false :leaves})))

(defn filter-branches
  "Filters branches of a (nested) map `m` according to a predicate `m`.

~~~klipse
(filter-branches {:x {:id 19 :b 1 :c {:id 2}} :e 3} :id)
~~~
  "
  [m p]
  (->> (branches-and-leaves m)
       :branches
      (filter p)))

(defn out-of-bound?
  "Checks if index `idx` is in range of vector `v`. More efficient than `(get v idx)`

~~~klipse
    (map #(out-of-bound? [1 2 3] %) [-1 0 1 2 3 4])
~~~
  "
  [v idx]
   (or (<= (count v) idx) (> 0 idx)))

(defn partition-between
  "Splits a collection between two items according to predicate `pred` - which means split the sequence on breaking point.

  See: [here](http://stackoverflow.com/questions/23207490/partition-a-seq-by-a-windowing-predicate-in-clojure)

  For instance, split each time the series stop being ascending:

~~~klipse
(partition-between > [1 2 4 9 8 7 6 5 1 2 4 5 11])
~~~
"
  [pred coll]
    (let [switch (reductions not= true (map pred coll (rest coll)))]
      (map (partial map first) (partition-by second (map list coll switch)))))


(defn collify
  "Ensure `s` is a collection: if `s` is a collection returns it; otherwise returns (s)

~~~klipse
(collify 1)
~~~

~~~klipse
(collify [1 2 3])
~~~
  "
  [s]
  (if (coll? s) s (list s)))

(defn edn-zip
  "A zipper for `edn`.

~~~klipse
  (edn-zip {:a {:b 1}, :c {:e 4, :d 2, :f {:g 8}}})
~~~
  "
  [root]
  (zip/zipper
    #(or (vector? %) (map? %) (seq? %))
    (fn [node]
      (cond
        (vector? node) (vec node)
        (map? node)    (vec node)
        (seq? node)    (seq node)))

    (fn [node children]
      (->
        (cond
          (vector? node) (vec children)
          (map? node)    (into {} children)
          (seq? node)    children)
        (with-meta (meta node))))
    root))

(defn- loc-my-replace [smap loc]
  (if-let [[_ [replacement & values]] (find smap (zip/node loc))]
    (as-> loc $
      (zip/replace $ replacement)
      (reduce (fn [agg v] (zip/insert-right agg v)) $ (reverse values)))
    loc))

(defn my-replace
  "Recursively transforms `form` by replacing keys in `smap` with their
  values, spliced. The values in `smap` must be sequences. Like clojure.walk/prewalk-replace but supports list in values.

~~~klipse
(my-replace '{go (go gadjett)} '(go (<! (timeout 100)) (go (<! timeout 0))))
~~~
  "
  [smap form]
  {:pre [(every? seq? (vals smap))]}
  (loop [loc (edn-zip form)]
    (if (zip/end? loc)
      (zip/root loc)
      (recur (zip/next (loc-my-replace smap loc))))))

(defn- comment? [s]
  (re-matches #"\s*;.*" s))

(defn remove-ending-comments
  "Removes comment lines from the end.

~~~klipse
  ; we use (char 10) for end-of-line due to technical issues with string manipulation with `codox`
  (let [lines (clojure.string/join (char 10) [\"aa\", \"  \", \"bb\" \"; this comment should not appear\"])]
  (remove-ending-comments lines))
~~~
  "
  [s]
  (->> s
    split-lines
    reverse
    (drop-while comment?)
    reverse
    (join "\n")))
(defn fix-blank-lines
  "Removes blank lines from the begining and from the end (not from the middle)

~~~klipse
  ; we use (char 10) for end-of-line due to technical issues with string manipulation with `codox`
  (let [lines (clojure.string/join (char 10) [\"  \", \"aa\", \"  \", \"bb\", \" \t  \"])]
  (fix-blank-lines lines))
~~~
  "
  [s]
  (->> s
    split-lines
    (drop-while blank?)
    reverse
    (drop-while blank?)
    reverse
    (join "\n")))

(defn remove-blank-lines
"Removes blank lines.
~~~klipse
  ; we use (char 10) for end-of-line due to technical issues with string manipulation with `codox`
  (let [lines (clojure.string/join (char 10) [\"  \", \"aa\", \"  \", \"bb\", \" \t  \"])]
  (remove-blank-lines lines))
~~~
  "
  [s]
  (->> s
    split-lines
    (remove blank?)
    (join "\n")))

#?(:cljs
    (defn compact
"
(clojurescript only)

Compacts an expression by taking only the first `max-elements-in-coll` from collections and first `max-chars-in-str` from strings. Functions are displayed as \"lambda()\".

It works recursively. It is useful for logging and reporting.

Default settings:

- `max-elements-in-coll` 10
- `max-chars-in-str` 20

~~~klipse
(compact {:infinite-list (range)
          :long-str \"a very very very very long string - too long to be true\"
                                                      :long-map (zipmap (range 100) (range 100))
                                                        :function #(+ 1 2)})
~~~
                  "
      [x & {:keys [max-elements-in-coll max-chars-in-str] :or {max-elements-in-coll 10 max-chars-in-str 20} :as args}]
      (cond
        (= x true) x
        (= x false) x
        (nil? x) x
        (keyword? x) x
        (number? x) x
        (string? x) (subs x 0 max-chars-in-str)
        (map? x) (take-from-map max-elements-in-coll (map-object #(compact % args) x))
        (seqable? x) (take max-elements-in-coll (map #(compact % args) x))
        (array? x) (str "***[" (type x) "]***")
        (= js/Function (type x)) "lambda()"
        (instance? js/Object x) (str "***[" (subs (str (type x)) 0 15) "]***")
        :else (str "***[" (type x) "]***")))
    )

(defn map-nested-vals
  "Map the values of a nested map.
~~~klipse
  (map-nested-vals first {:a [1 2 3]
                          :b {:c [4 5 6]}})
~~~
  "
  [f m]
  (->> m
       flatten-keys
       (map-object f)
       unflatten-keys))

(defn join-them
  "Join a sequence of collections `colls` according to function equality.
   `fns` - a sequence of functions
   `colls` - a sequence of collections
~~~klipse
(let [a [{:id 1 :price 19} {:id 2 :price 3}]
        b [{:guid 1 :quantity 13}]]
     (join-them [:id :guid] [a b]))
~~~
"
  [fns colls]
  (->> (map mapify fns colls)
       (apply deep-merge)
       vals))

(comment (subs "a" 1))

(defn substr
  "Like clojure.core/subs but prevents some exceptions when the `start` or `end` are out of bound.
~~~klipse
  (subs \"\" -2)
~~~

  "
  ([s start] (subs s (max 0 (min start (count s)))))
  ([s start end]
   (let [start (max 0 (min start (count s)))
         end (min (count s) end)]
     (subs s start end))))


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

