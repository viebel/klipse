(ns gadjett.core-fn
  (:require 
    [gadjett.collections :as collections]))
 
(defonce history (atom {}))
(defonce settings {
                   :max-function-calls 50; max number of function calls of the same function in a timeslot defined by :timeslot-function-calls-msec
                   :timeslot-function-calls-msec 1000; timeslot for max function calls
                   :compact-max-elements-in-seq 5; max number of elements when an sequence is compacted
                   :compact-max-chars-in-str 10; max number of characters when a string is compacted
                   })

(defn settings! [& {:keys [] :as args}]
  (set! settings (merge settings args)))

(defn- add-event-and-filter [timestamp-msec events]
  (let [timeslot (:timeslot-function-calls-msec settings)]
    (->>
      (take-while #(> % (- timestamp-msec timeslot)) events)
      (cons timestamp-msec))))

(defn- add-event [history func-name timestamp-msec]
  (update history func-name (partial add-event-and-filter timestamp-msec)))

(defn record-function-call [func-name args]
  (swap! history add-event func-name #?(:cljs (.valueOf (new js/Date))
                                        :clj (System/currentTimeMillis)))
  (<= (count (get @history func-name)) (:max-function-calls settings)))

(defn- sort-history "returns the history sorted by number of function calls"
  [hist]
  (->> hist
       (collections/map-object count)
      (sort-by second)))

(defn the-history "returns the history as an array, sorted by number of function calls"
  ([k] (get @history k))
  ([] (sort-history @history)))

(defn function-call-err-msg [func-name args]
  (str func-name " was called too much over the last " (:timeslot-function-calls-msec settings)" msec: "
       func-name))

