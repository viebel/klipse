(ns cljs.core.async.impl.ioc-helpers
  (:require [cljs.core.async.impl.protocols :as impl])
  (:require-macros [cljs.core.async.impl.ioc-macros :as ioc]))

(def ^:const FN-IDX 0)
(def ^:const STATE-IDX 1)
(def ^:const VALUE-IDX 2)
(def ^:const BINDINGS-IDX 3)
(def ^:const EXCEPTION-FRAMES 4)
(def ^:const CURRENT-EXCEPTION 5)
(def ^:const USER-START-IDX 6)

(defn aset-object [arr idx o]
  (aget arr idx o))

(defn aget-object [arr idx]
  (aget arr idx))


(defn finished?
  "Returns true if the machine is in a finished state"
  [state-array]
  (keyword-identical? (aget state-array STATE-IDX) :finished))

(defn- fn-handler
  [f]
  (reify
   impl/Handler
   (active? [_] true)
   (blockable? [_] true)
   (commit [_] f)))


(defn run-state-machine [state]
  ((aget-object state FN-IDX) state))

(defn run-state-machine-wrapped [state]
  (try
    (run-state-machine state)
    (catch js/Object ex
      (impl/close! ^not-native (aget-object state USER-START-IDX))
      (throw ex))))

(defn take! [state blk ^not-native c]
  (if-let [cb (impl/take! c (fn-handler
                                   (fn [x]
                                     (ioc/aset-all! state VALUE-IDX x STATE-IDX blk)
                                     (run-state-machine-wrapped state))))]
    (do (ioc/aset-all! state VALUE-IDX @cb STATE-IDX blk)
        :recur)
    nil))

(defn put! [state blk ^not-native c val]
  (if-let [cb (impl/put! c val (fn-handler (fn [ret-val]
                                             (ioc/aset-all! state VALUE-IDX ret-val STATE-IDX blk)
                                             (run-state-machine-wrapped state))))]
    (do (ioc/aset-all! state VALUE-IDX @cb STATE-IDX blk)
        :recur)
    nil))

(defn return-chan [state value]
  (let [^not-native c (aget state USER-START-IDX)]
           (when-not (nil? value)
             (impl/put! c value (fn-handler (fn [] nil))))
           (impl/close! c)
           c))

(defrecord ExceptionFrame [catch-block
                           ^Class catch-exception
                           finally-block
                           continue-block
                           prev])

(defn add-exception-frame [state catch-block catch-exception finally-block continue-block]
  (ioc/aset-all! state
                 EXCEPTION-FRAMES
                 (->ExceptionFrame catch-block
                                   catch-exception
                                   finally-block
                                   continue-block
                                   (aget-object state EXCEPTION-FRAMES))))

(defn process-exception [state]
  (let [exception-frame (aget-object state EXCEPTION-FRAMES)
        catch-block (:catch-block exception-frame)
        catch-exception (:catch-exception exception-frame)
        exception (aget-object state CURRENT-EXCEPTION)]
    (cond
     (and exception
          (not exception-frame))
     (throw exception)

     (and exception
          catch-block
          (or (= :default catch-exception)
              (instance? catch-exception exception)))
     (ioc/aset-all! state
                    STATE-IDX
                    catch-block
                    VALUE-IDX
                    exception
                    CURRENT-EXCEPTION
                    nil
                    EXCEPTION-FRAMES
                    (assoc exception-frame
                      :catch-block nil
                      :catch-exception nil))


     (and exception
          (not catch-block)
          (not (:finally-block exception-frame)))

     (do (ioc/aset-all! state
                        EXCEPTION-FRAMES
                        (:prev exception-frame))
         (recur state))

     (and exception
          (not catch-block)
          (:finally-block exception-frame))
     (ioc/aset-all! state
                    STATE-IDX
                    (:finally-block exception-frame)
                    EXCEPTION-FRAMES
                    (assoc exception-frame
                      :finally-block nil))

     (and (not exception)
          (:finally-block exception-frame))
     (do (ioc/aset-all! state
                        STATE-IDX
                        (:finally-block exception-frame)
                        EXCEPTION-FRAMES
                        (assoc exception-frame
                          :finally-block nil)))

     (and (not exception)
          (not (:finally-block exception-frame)))
     (do (ioc/aset-all! state
                   STATE-IDX
                   (:continue-block exception-frame)
                   EXCEPTION-FRAMES
                   (:prev exception-frame)))

     :else (throw (js/Error. "No matching clause")))))
