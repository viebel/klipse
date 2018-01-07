;;   Copyright (c) Rich Hickey and contributors. All rights reserved.
;;   The use and distribution terms for this software are covered by the
;;   Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
;;   which can be found in the file epl-v10.html at the root of this distribution.
;;   By using this software in any fashion, you are agreeing to be bound by
;;   the terms of this license.
;;   You must not remove this notice, or any other, from this software.

(ns cljs.core.async.impl.buffers
  (:require [cljs.core.async.impl.protocols :as impl]))

;; -----------------------------------------------------------------------------
;; DO NOT USE, this is internal buffer representation

(defn acopy [src src-start dest dest-start len]
  (loop [cnt 0]
    (when (< cnt len)
      (aset dest
            (+ dest-start cnt)
            (aget src (+ src-start cnt)))
      (recur (inc cnt)))))

(deftype RingBuffer [^:mutable head ^:mutable tail ^:mutable length ^:mutable arr]
  Object
  (pop [_]
    (when-not (zero? length)
      (let [x (aget arr tail)]
        (aset arr tail nil)
        (set! tail (js-mod (inc tail) (alength arr)))
        (set! length (dec length))
        x)))

  (unshift [_ x]
    (aset arr head x)
    (set! head (js-mod (inc head) (alength arr)))
    (set! length (inc length))
    nil)

  (unbounded-unshift [this x]
    (if (== (inc length) (alength arr))
      (.resize this))
    (.unshift this x))

  ;; Doubles the size of the buffer while retaining all the existing values
  (resize
    [_]
    (let [new-arr-size (* (alength arr) 2)
          new-arr (make-array new-arr-size)]
      (cond
       (< tail head)
       (do (acopy arr tail new-arr 0 length)
           (set! tail 0)
           (set! head length)
           (set! arr new-arr))

       (> tail head)
       (do (acopy arr tail new-arr 0 (- (alength arr) tail))
           (acopy arr 0 new-arr (- (alength arr) tail) head)
           (set! tail 0)
           (set! head length)
           (set! arr new-arr))

       (== tail head)
       (do (set! tail 0)
           (set! head 0)
           (set! arr new-arr)))))

  (cleanup [this keep?]
    (dotimes [x length]
      (let [v (.pop this)]
        (when ^boolean (keep? v)
          (.unshift this v))))))

(defn ring-buffer [n]
  (assert (> n 0) "Can't create a ring buffer of size 0")
  (RingBuffer. 0 0 0 (make-array n)))

;; -----------------------------------------------------------------------------

(deftype FixedBuffer [buf n]
  impl/Buffer
  (full? [this]
    (== (.-length buf) n))
  (remove! [this]
    (.pop buf))
  (add!* [this itm]
    (.unbounded-unshift buf itm)
    this)
  (close-buf! [this])
  cljs.core/ICounted
  (-count [this]
    (.-length buf)))

(defn fixed-buffer [n]
  (FixedBuffer. (ring-buffer n) n))

(deftype DroppingBuffer [buf n]
  impl/UnblockingBuffer
  impl/Buffer
  (full? [this]
    false)
  (remove! [this]
    (.pop buf))
  (add!* [this itm]
    (when-not (== (.-length buf) n)
      (.unshift buf itm))
    this)
  (close-buf! [this])
  cljs.core/ICounted
  (-count [this]
    (.-length buf)))

(defn dropping-buffer [n]
  (DroppingBuffer. (ring-buffer n) n))

(deftype SlidingBuffer [buf n]
  impl/UnblockingBuffer
  impl/Buffer
  (full? [this]
    false)
  (remove! [this]
    (.pop buf))
  (add!* [this itm]
    (when (== (.-length buf) n)
      (impl/remove! this))
    (.unshift buf itm)
    this)
  (close-buf! [this])
  cljs.core/ICounted
  (-count [this]
    (.-length buf)))

(defn sliding-buffer [n]
  (SlidingBuffer. (ring-buffer n) n))

(defonce ^:private NO-VAL (js/Object.))
(defn- undelivered? [val]
  (identical? NO-VAL val))

(deftype PromiseBuffer [^:mutable val]
  impl/UnblockingBuffer
  impl/Buffer
  (full? [_]
    false)
  (remove! [_]
    val)
  (add!* [this itm]
    (when (undelivered? val)
      (set! val itm))
    this)
  (close-buf! [_]
    (when (undelivered? val)
      (set! val nil)))
  cljs.core/ICounted
  (-count [_]
    (if (undelivered? val) 0 1)))

(defn promise-buffer []
  (PromiseBuffer. NO-VAL))
