;;   Copyright (c) Rich Hickey and contributors. All rights reserved.
;;   The use and distribution terms for this software are covered by the
;;   Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
;;   which can be found in the file epl-v10.html at the root of this distribution.
;;   By using this software in any fashion, you are agreeing to be bound by
;;   the terms of this license.
;;   You must not remove this notice, or any other, from this software.

(ns cljs.core.async.impl.channels
  (:require [cljs.core.async.impl.protocols :as impl]
            [cljs.core.async.impl.dispatch :as dispatch]
            [cljs.core.async.impl.buffers :as buffers]))



(defn box [val]
  (reify cljs.core/IDeref
    (-deref [_] val)))

(deftype PutBox [handler val])

(defn put-active? [box]
  (impl/active? (.-handler box)))

(def ^:const MAX_DIRTY 64)

(defprotocol MMC
  (abort [this]))

(deftype ManyToManyChannel [takes ^:mutable dirty-takes puts ^:mutable dirty-puts ^not-native buf ^:mutable closed add!]
  MMC
  (abort [this]
    (loop []
      (let [putter (.pop puts)]
        (when-not (nil? putter)
          (let [^not-native put-handler (.-handler putter)
                val (.-val putter)]
            (if ^boolean (impl/active? put-handler)
              (let [put-cb (impl/commit put-handler)]
                (dispatch/run #(put-cb true)))
              (recur))))))
    (.cleanup puts (constantly false))
    (impl/close! this))
  impl/WritePort
  (put! [this val ^not-native handler]
    (assert (not (nil? val)) "Can't put nil in on a channel")
    ;; bug in CLJS compiler boolean inference - David
    (let [^boolean closed closed]
      (if (or closed (not ^boolean (impl/active? handler)))
        (box (not closed))
        (if (and buf (not (impl/full? buf)))
          (do
            (impl/commit handler)
            (let [done? (reduced? (add! buf val))]
              (loop []
                (when (and (pos? (.-length takes)) (pos? (count buf)))
                  (let [^not-native taker (.pop takes)]
                    (if ^boolean (impl/active? taker)
                      (let [take-cb (impl/commit taker)
                            val (impl/remove! buf)]
                        (dispatch/run (fn [] (take-cb val))))
                      (recur)))))
              (when done? (abort this))
              (box true)))
          (let [taker (loop []
                        (let [^not-native taker (.pop takes)]
                          (when taker
                            (if (impl/active? taker)
                              taker
                              (recur)))))]
            (if taker
              (let [take-cb (impl/commit taker)]
                (impl/commit handler)
                (dispatch/run (fn [] (take-cb val)))
                (box true))
              (do
                (if (> dirty-puts MAX_DIRTY)
                  (do (set! dirty-puts 0)
                      (.cleanup puts put-active?))
                  (set! dirty-puts (inc dirty-puts)))
                (when (impl/blockable? handler)
                  (assert (< (.-length puts) impl/MAX-QUEUE-SIZE)
                    (str "No more than " impl/MAX-QUEUE-SIZE
                         " pending puts are allowed on a single channel."
                         " Consider using a windowed buffer."))
                  (.unbounded-unshift puts (PutBox. handler val)))
                nil)))))))
  impl/ReadPort
  (take! [this ^not-native handler]
    (if (not ^boolean (impl/active? handler))
      nil
      (if (and (not (nil? buf)) (pos? (count buf)))
        (let [_ (impl/commit handler)
              retval (box (impl/remove! buf))]
          (loop []
            (when-not (impl/full? buf)
              (let [putter (.pop puts)]
                (when-not (nil? putter)
                  (let [^not-native put-handler (.-handler putter)
                        val (.-val putter)]
                    (when ^boolean (impl/active? put-handler)
                      (let [put-cb (impl/commit put-handler)]
                        (impl/commit handler)
                        (dispatch/run #(put-cb true))
                        (when (reduced? (add! buf val))
                          (abort this)))))
                  (recur)))))
          retval)
        (let [putter (loop []
                       (let [putter (.pop puts)]
                         (when putter
                           (if ^boolean (impl/active? (.-handler putter))
                             putter
                             (recur)))))]
          (if putter
            (let [put-cb (impl/commit (.-handler putter))]
              (impl/commit handler)
              (dispatch/run #(put-cb true))
              (box (.-val putter)))
            (if closed
              (do
                (when buf (add! buf))
                (if (and (impl/active? handler) (impl/commit handler))
                  (let [has-val (and buf (pos? (count buf)))]
                    (let [val (when has-val (impl/remove! buf))]
                      (box val)))
                  nil))
              (do
                (if (> dirty-takes MAX_DIRTY)
                  (do (set! dirty-takes 0)
                      (.cleanup takes impl/active?))
                  (set! dirty-takes (inc dirty-takes)))
                (when (impl/blockable? handler)
                  (assert (< (.-length takes) impl/MAX-QUEUE-SIZE)
                    (str "No more than " impl/MAX-QUEUE-SIZE
                         " pending takes are allowed on a single channel."))
                  (.unbounded-unshift takes handler))
                nil)))))))
  impl/Channel
  (closed? [_] closed)
  (close! [this]
    (if ^boolean closed
        nil
        (do (set! closed true)
            (when (and buf (zero? (.-length puts)))
                    (add! buf))
            (loop []
              (let [^not-native taker (.pop takes)]
                (when-not (nil? taker)
                  (when ^boolean (impl/active? taker)
                    (let [take-cb (impl/commit taker)
                          val (when (and buf (pos? (count buf))) (impl/remove! buf))]
                      (dispatch/run (fn [] (take-cb val)))))
                  (recur))))
            (when buf (impl/close-buf! buf))
            nil))))

(defn- ex-handler [ex]
  (.log js/console ex)
  nil)

(defn- handle [buf exh t]
  (let [else ((or exh ex-handler) t)]
    (if (nil? else)
      buf
      (impl/add! buf else))))

(defn chan
  ([buf] (chan buf nil))
  ([buf xform] (chan buf xform nil))
  ([buf xform exh]
     (ManyToManyChannel. (buffers/ring-buffer 32) 0 (buffers/ring-buffer 32)
                         0 buf false
                         (let [add! (if xform (xform impl/add!) impl/add!)]
                           (fn
                             ([buf]
                              (try
                                (add! buf)
                                (catch :default t
                                  (handle buf exh t))))
                             ([buf val]
                              (try
                                (add! buf val)
                                (catch :default t
                                  (handle buf exh t)))))))))
