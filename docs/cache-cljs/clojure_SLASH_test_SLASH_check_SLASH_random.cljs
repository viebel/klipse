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
  (:refer-clojure :exclude [+ * bit-xor bit-or bit-count
                            unsigned-bit-shift-right])
  (:require [clojure.test.check.random.doubles :as doubles]
            [clojure.test.check.random.longs :as longs
             :refer [+ * bit-xor bit-or bit-count unsigned-bit-shift-right]]))

(defprotocol IRandom
  (rand-long [rng]
    "Returns a random goog.math.Long based on the given immutable RNG.

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

;;
;; This is a port of the clojure-jvm port of
;; java.util.SplittableRandom, and should give identical results.
;;

(defn ^:private hex-long
  "Helper for defining constants."
  [s]
  (longs/from-string s 16))

(defn ^:private bxoubsr
  "Performs (-> x (unsigned-bit-shift-right n) (bit-xor x))."
  [x n]
  (-> x (unsigned-bit-shift-right n) (bit-xor x)))

(def ^:private mix-64-const-1 (hex-long "bf58476d1ce4e5b9"))
(def ^:private mix-64-const-2 (hex-long "94d049bb133111eb"))

(defn ^:private mix-64
  [n]
  (-> n
      (bxoubsr 30)
      (* mix-64-const-1)
      (bxoubsr 27)
      (* mix-64-const-2)
      (bxoubsr 31)))

(def ^:private mix-gamma-const-1 (hex-long "ff51afd7ed558ccd"))
(def ^:private mix-gamma-const-2 (hex-long "c4ceb9fe1a85ec53"))
(def ^:private mix-gamma-const-3 (hex-long "aaaaaaaaaaaaaaaa"))

(defn ^:private mix-gamma
  [n]
  (-> n
      (bxoubsr 33)
      (* mix-gamma-const-1)
      (bxoubsr 33)
      (* mix-gamma-const-2)
      (bxoubsr 33)
      (bit-or longs/ONE)
      (as-> z
            (cond-> z
              (> 24 (-> z
                        (bxoubsr 1)
                        (bit-count)))
              (bit-xor mix-gamma-const-3)))))

(deftype JavaUtilSplittableRandom [gamma state]
  IRandom
  (rand-long [_]
    (-> state (+ gamma) (mix-64)))
  (rand-double [this]
    (-> this rand-long doubles/rand-long->rand-double))
  (split [this]
    (let [state' (+ gamma state)
          state'' (+ gamma state')
          gamma' (mix-gamma state'')]
      [(JavaUtilSplittableRandom. gamma state'')
       (JavaUtilSplittableRandom. gamma' (mix-64 state'))]))
  (split-n [this n]
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
              (recur state'' (conj! ret new-rng)))))))))

(def ^:private golden-gamma
  (hex-long "9e3779b97f4a7c15"))

(defn make-java-util-splittable-random
  [seed]
  (JavaUtilSplittableRandom. golden-gamma
                             (or (longs/->long seed)
                                 (throw (ex-info "Bad random seed!"
                                                 {:seed seed})))))

(def ^:private next-rng
  (let [a (atom {:state
                 (make-java-util-splittable-random (.valueOf (js/Date.)))})]
    (fn []
      (:returned
       (swap! a (fn [{:keys [state]}]
                  (let [[r1 r2] (split state)]
                    {:state r1 :returned r2})))))))

(defn make-random
  "Given an optional integer (or goog.math.Long) seed, returns an
  implementation of the IRandom protocol."
  ([] (next-rng))
  ([seed]
   (make-java-util-splittable-random seed)))
