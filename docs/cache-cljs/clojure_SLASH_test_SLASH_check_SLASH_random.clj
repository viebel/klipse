;   Copyright (c) Rich Hickey, Reid Draper, and contributors.
;   All rights reserved.
;   The use and distribution terms for this software are covered by the
;   Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
;   which can be found in the file epl-v10.html at the root of this distribution.
;   By using this software in any fashion, you are agreeing to be bound by
;   the terms of this license.
;   You must not remove this notice, or any other, from this software.

(ns ^{:author "Gary Fredericks"
      :doc "Purely functional and splittable pseudo-random number generators."}
 clojure.test.check.random
  (:refer-clojure :exclude [unsigned-bit-shift-right]))

(defprotocol IRandom
  (rand-long [rng]
    "Returns a random long based on the given immutable RNG.

  Note: to maintain independence you should not call more than one
  function in the IRandom protocol with the same argument")
  (rand-double [rng]
    "Returns a random double between 0.0 (inclusive) and 1.0 (exclusive)
  based on the given immutable RNG.

  Note: to maintain independence you should not call more than one
  function in the IRandom protocol with the same argument")
  (split [rng]
    "Returns two new RNGs [rng1 rng2], which should generate
  sufficiently independent random data.

  Note: to maintain independence you should not call more than one
  function in the IRandom protocol with the same argument")
  (split-n [rng n]
    "Returns a collection of `n` RNGs, which should generate
  sufficiently independent random data.

  Note: to maintain independence you should not call more than one
  function in the IRandom protocol with the same argument"))

;; Immutable version of Java 8's java.util.SplittableRandom
;;
;; Meant to give the same results as similar uses of
;; java.util.SplittableRandom, in particular:
;;
;; (= (-> (make-java-util-splittable-random 42)
;;        (rand-long))
;;    (.nextLong (SplittableRandom. 42)))
;;
;; (= (-> (make-java-util-splittable-random 42)
;;        (split)
;;        (first)
;;        (rand-long))
;;    (.nextLong (doto (SplittableRandom. 42)
;;                     (.split))))
;;
;; (= (-> (make-java-util-splittable-random 42)
;;        (split)
;;        (second)
;;        (rand-long))
;;    (.nextLong (.split (SplittableRandom. 42))))
;;
;; Also see the spec that checks this equivalency.


;; backwards compatibility for clojure 1.5
(def ^:private old-clojure?
  (not (resolve 'clojure.core/unsigned-bit-shift-right)))
(defmacro ^:private unsigned-bit-shift-right
  [x n]
  {:pre [(<= 1 n 63)]}
  (if old-clojure?
    (let [mask (-> Long/MIN_VALUE
                   (bit-shift-right (dec n))
                   (bit-not))]
      `(-> ~x
           (bit-shift-right ~n)
           (bit-and ~mask)))
    `(clojure.core/unsigned-bit-shift-right ~x ~n)))

(defmacro ^:private longify
  "Macro for writing arbitrary longs in the java 0x syntax. E.g.
  0x9e3779b97f4a7c15 (which is read as a bigint because it's out
  of range) becomes -7046029254386353131."
  [num]
  (if (> num Long/MAX_VALUE)
    (-> num
        (- 18446744073709551616N)
        (long)
        (bit-or -9223372036854775808))
    num))

(set! *unchecked-math* :warn-on-boxed)

(defmacro ^:private bxoubsr
  "Performs (-> x (unsigned-bit-shift-right n) (bit-xor x))."
  [x n]
  (vary-meta
   `(let [x# ~x]
      (-> x# (unsigned-bit-shift-right ~n) (bit-xor x#)))
   assoc :tag 'long))

(defmacro ^:private mix-64
  [n]
  `(-> ~n
       (bxoubsr 30)
       (* (longify 0xbf58476d1ce4e5b9))
       (bxoubsr 27)
       (* (longify 0x94d049bb133111eb))
       (bxoubsr 31)))

(defmacro ^:private mix-gamma
  [n]
  `(-> ~n
       (bxoubsr 33)
       (* (longify 0xff51afd7ed558ccd))
       (bxoubsr 33)
       (* (longify 0xc4ceb9fe1a85ec53))
       (bxoubsr 33)
       (bit-or 1)
       (as-> z#
             (cond-> z#
               (> 24 (-> z#
                         (bxoubsr 1)
                         (Long/bitCount)))
               (bit-xor (longify 0xaaaaaaaaaaaaaaaa))))))

(def ^:private ^:const double-unit (/ 1.0 (double (bit-set 0 53))))
;; Java: 0x1.0p-53 or (1.0 / (1L << 53))

(deftype JavaUtilSplittableRandom [^long gamma ^long state]
  IRandom
  (rand-long [_]
    (-> state (+ gamma) (mix-64)))
  (rand-double [this]
    (* double-unit (unsigned-bit-shift-right (long (rand-long this)) 11)))
  (split [this]
    (let [state' (+ gamma state)
          state'' (+ gamma state')
          gamma' (mix-gamma state'')]
      [(JavaUtilSplittableRandom. gamma state'')
       (JavaUtilSplittableRandom. gamma' (mix-64 state'))]))
  (split-n [this n]
    ;; immitates a particular series of 2-way splits, but avoids the
    ;; intermediate allocation. See the `split-n-spec` for a test of
    ;; the equivalence to 2-way splits.
    (let [n (long n)]
      (case n
        0 []
        1 [this]
        (let [n-dec (dec n)]
          (loop [state state
                 ret (transient [])]
            (if (= n-dec (count ret))
              (-> ret
                  (conj! (JavaUtilSplittableRandom. gamma state))
                  (persistent!))
              (let [state' (+ gamma state)
                    state'' (+ gamma state')
                    gamma' (mix-gamma state'')
                    new-rng (JavaUtilSplittableRandom. gamma' (mix-64 state'))]
                (recur state'' (conj! ret new-rng))))))))))

(def ^:private golden-gamma
  (longify 0x9e3779b97f4a7c15))

(defn make-java-util-splittable-random
  [^long seed]
  (JavaUtilSplittableRandom. golden-gamma seed))

;; some global state to make sure that seedless calls to make-random
;; return independent results
(def ^:private next-rng
  "Returns a random-number generator. Successive calls should return
  independent results."
  (let [a (atom (make-java-util-splittable-random (System/currentTimeMillis)))

        thread-local
        (proxy [ThreadLocal] []
          (initialValue []
            (first (split (swap! a #(second (split %)))))))]
    (fn []
      (let [rng (.get thread-local)
            [rng1 rng2] (split rng)]
        (.set thread-local rng2)
        rng1))))

(defn make-random
  "Given an optional Long seed, returns an object that satisfies the
  IRandom protocol."
  ([] (next-rng))
  ([seed] (make-java-util-splittable-random seed)))
