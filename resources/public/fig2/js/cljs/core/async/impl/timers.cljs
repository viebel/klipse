;;   Copyright (c) Rich Hickey and contributors. All rights reserved.
;;   The use and distribution terms for this software are covered by the
;;   Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
;;   which can be found in the file epl-v10.html at the root of this distribution.
;;   By using this software in any fashion, you are agreeing to be bound by
;;   the terms of this license.
;;   You must not remove this notice, or any other, from this software.

(ns cljs.core.async.impl.timers
  (:require [cljs.core.async.impl.protocols :as impl]
            [cljs.core.async.impl.channels :as channels]
            [cljs.core.async.impl.dispatch :as dispatch]))

(def MAX_LEVEL 15) ;; 16 levels
(def P (/ 1 2))

(defn random-level
  ([] (random-level 0))
  ([level]
    (if (and (< (.random js/Math) P)
             (< level MAX_LEVEL))
      (recur (inc level))
      level)))

(deftype SkipListNode [key ^:mutable val forward]
  ISeqable
  (-seq [coll]
    (list key val))

  IPrintWithWriter
  (-pr-writer [coll writer opts]
    (pr-sequential-writer writer pr-writer "[" " " "]" opts coll)))

(defn skip-list-node
  ([level] (skip-list-node nil nil level))
  ([k v level]
    (let [arr (make-array (inc level))]
      (loop [i 0]
        (when (< i (alength arr))
          (aset arr i nil)
          (recur (inc i))))
      (SkipListNode. k v arr))))

(defn least-greater-node
  ([x k level] (least-greater-node x k level nil))
  ([x k level update]
    (if-not (neg? level)
      (let [x (loop [x x]
                (if-let [x' (aget (.-forward x) level)]
                  (if (< (.-key x') k)
                    (recur x')
                    x)
                  x))]
        (when-not (nil? update)
          (aset update level x))
        (recur x k (dec level) update))
      x)))

(deftype SkipList [header ^:mutable level]
  Object
  (put [coll k v]
    (let [update (make-array MAX_LEVEL)
          x (least-greater-node header k level update)
          x (aget (.-forward x) 0)]
      (if (and (not (nil? x)) (== (.-key x) k))
        (set! (.-val x) v)
        (let [new-level (random-level)]
          (when (> new-level level)
            (loop [i (inc level)]
              (when (<= i (inc new-level))
                (aset update i header)
                (recur (inc i))))
            (set! level new-level))
          (let [x (skip-list-node k v (make-array new-level))]
            (loop [i 0]
              (when (<= i level)
                (let [links (.-forward (aget update i))]
                  (aset (.-forward x) i (aget links i))
                  (aset links i x)))))))))

  (remove [coll k]
    (let [update (make-array MAX_LEVEL)
          x (least-greater-node header k level update)
          x (aget (.-forward x) 0)]
      (when (and (not (nil? x)) (== (.-key x) k))
        (loop [i 0]
          (when (<= i level)
            (let [links (.-forward (aget update i))]
              (if (identical? (aget links i) x)
                (do
                  (aset links i (aget (.-forward x) i))
                  (recur (inc i)))
                (recur (inc i))))))
        (while (and (> level 0)
                    (nil? (aget (.-forward header) level)))
          (set! level (dec level))))))

  (ceilingEntry [coll k]
    (loop [x header level level]
      (if-not (neg? level)
        (let [nx (loop [x x]
                   (let [x' (aget (.-forward x) level)]
                     (when-not (nil? x')
                       (if (>= (.-key x') k)
                         x'
                         (recur x')))))]
          (if-not (nil? nx)
            (recur nx (dec level))
            (recur x (dec level))))
        (when-not (identical? x header)
          x))))
  
  (floorEntry [coll k]
    (loop [x header level level]
      (if-not (neg? level)
        (let [nx (loop [x x]
                   (let [x' (aget (.-forward x) level)]
                     (if-not (nil? x')
                       (if (> (.-key x') k)
                         x
                         (recur x'))
                       (when (zero? level)
                         x))))]
          (if nx
            (recur nx (dec level))
            (recur x (dec level))))
        (when-not (identical? x header)
          x))))

  ISeqable
  (-seq [coll]
    (letfn [(iter [node]
              (lazy-seq
                (when-not (nil? node)
                  (cons [(.-key node) (.-val node)]
                    (iter (aget (.-forward node) 0))))))]
      (iter (aget (.-forward header) 0))))

  IPrintWithWriter
  (-pr-writer [coll writer opts]
    (let [pr-pair (fn [keyval]
                    (pr-sequential-writer writer pr-writer "" " " "" opts keyval))]
      (pr-sequential-writer writer pr-pair "{" ", " "}" opts coll))))

(defn skip-list []
  (SkipList. (skip-list-node 0) 0))

(def timeouts-map (skip-list))

(def TIMEOUT_RESOLUTION_MS 10)

(defn timeout
  "returns a channel that will close after msecs"
  [msecs]
  (let [timeout (+ (.valueOf (js/Date.)) msecs)
        me (.ceilingEntry timeouts-map timeout)]
    (or (when (and me (< (.-key me) (+ timeout TIMEOUT_RESOLUTION_MS)))
          (.-val me))
        (let [timeout-channel (channels/chan nil)]
          (.put timeouts-map timeout timeout-channel)
          (dispatch/queue-delay
            (fn []
              (.remove timeouts-map timeout)
              (impl/close! timeout-channel))
            msecs)
          timeout-channel))))

