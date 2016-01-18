(ns my-cljs-compiler-in-cljs.errors
  (:require [my-cljs-compiler-in-cljs.config-logic :as config]
            [cljs.core.async :refer [chan]]
            [clojure.string :refer [split blank?]]
            [my-cljs-compiler-in-cljs.collections :as collections]
            [cljs-time.core :as t]
            [cljs-time.coerce :as time-coerce]
            [shodan.console :as console]))

(defonce chan-type (type (chan)))
(defonce latest-err-date (atom (time-coerce/from-long 0)))
(defonce log (atom (vec (repeat (config/get-in [:errors :max-msgs-in-log]) ""))))

(defn parse-error "receives an error message string 'errCode : errMessage' and splits it to a map" [err]
  (zipmap [:key :message] (split err #":")))

(defn extract-error-message [error]
  (cond
    (not (blank? (:statusText error))) (:statusText error)
    (not (blank? (:data error))) (:data error)
    :else nil))


(defn compact [x {:keys [max-elements-in-array max-chars-in-arg] :as args}]
  (cond
    (= x true) x
    (= x false) x
    (nil? x) x
    (keyword? x) x
    (number? x) x
    (string? x) (subs x 0 max-chars-in-arg)
    (map? x) (collections/take-from-map max-elements-in-array (collections/map-object #(compact % args) x))
    (seqable? x) (take max-elements-in-array (map #(compact % args) x))
    (array? x) (str "***[" (type x) "]***")
    (= chan-type (type x)) "channel"
    (= js/Function (type x)) "lambda()"
    (instance? js/Object x) (str "***[" (type x) "]***")
    :else (str "***[" (type x) "]***")))

(defn show-expression [{:keys [context exp value relative-time]}]
  (if value
    (if exp
      (str "[" relative-time "] " context ": "  exp " -> " (compact value {:max-elements-in-array (config/get-in [:errors :max-elements-in-array])
                                                                           :max-chars-in-arg (config/get-in [:errors :max-chars-in-arg])}))
      (str "[" relative-time "] " context ": "  value))
    (str "[" relative-time "] " context)))

(defn ^:export show-log []
  (let [reversed-log (map show-expression (reverse @log))]
    (.log js/console (clj->js reversed-log))))

(defn ^:export get-log []
  (-> (map show-expression (reverse @log))
      clj->js))

(defn log-inner [msg]
  (let [verbose-level (config/get-in [:general :verbose-level])
        extended-msg (assoc msg :relative-time (mod (t/now) 3600000))]
    (when verbose-level
      (console/info (show-expression extended-msg)))
    (swap! log collections/append-cyclic extended-msg)))

(defn log-it
  ([context] (log-inner {:context context}))
  ([context msg] (log-inner {:context context :value msg})))

(defn log-func-call [f exp value]
  (log-inner {:context f
              :exp exp
              :value value}))

(defn ^:export notify-error [err context]
  (let [debug-enabled (config/get-in [:general :enable-debugging])
        compactized-log (map show-expression (reverse @log))
        from-now-in-millis (fn [prev-time]
            (->
              (t/interval prev-time (t/now))
              t/in-millis))]
    (when debug-enabled
      (console/error (str "error: " err " in context: " context ", with log: "))
      (show-log)
      (console/error "stack:" (aget (js/Error.) "stack")))
    (when (> (from-now-in-millis @latest-err-date) (config/get-in [:errors :delay-between-errs-in-msec]))
      (when debug-enabled
        (js/alert err))
      (reset! latest-err-date (t/now)))))

