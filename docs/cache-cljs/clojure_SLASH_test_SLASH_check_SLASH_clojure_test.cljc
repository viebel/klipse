;   Copyright (c) Rich Hickey, Reid Draper, and contributors.
;   All rights reserved.
;   The use and distribution terms for this software are covered by the
;   Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
;   which can be found in the file epl-v10.html at the root of this distribution.
;   By using this software in any fashion, you are agreeing to be bound by
;   the terms of this license.
;   You must not remove this notice, or any other, from this software.

(ns clojure.test.check.clojure-test
  (:require #?(:clj  [clojure.test :as ct]
               :cljs [cljs.test :as ct :include-macros true])
            [clojure.test.check :as tc]
            [clojure.test.check.impl :refer [get-current-time-millis
                                             exception-like?]]
            [clojure.test.check.results :as results]))

(defn assert-check
  [{:keys [result result-data] :as m}]
  (prn m)
  (if (and (not (results/passing? result))
           (exception-like? (:clojure.test.check.properties/error result-data)))
    (throw (:clojure.test.check.properties/error result-data))
    (ct/is result)))

(def ^:dynamic *default-test-count* 100)

(defn default-reporter-fn
  "Default function passed as the :reporter-fn to clojure.test.check/quick-check.
  Delegates to clojure.test/report."
  [{:keys [type] :as args}]
  (case type
    :trial
    (ct/report {:type :clojure.test.check.clojure-test/trial
                :clojure.test.check.clojure-test/property (:property args)
                :clojure.test.check.clojure-test/trial [(:so-far args) (:num-tests args)]})

    :failure
    (ct/report {:type :clojure.test.check.clojure-test/shrinking
                :clojure.test.check.clojure-test/property (:property args)
                :clojure.test.check.clojure-test/params (vec (:failing-args args))})

    :shrunk
    (ct/report {:type :clojure.test.check.clojure-test/shrunk
                :clojure.test.check.clojure-test/property (:property args)
                :clojure.test.check.clojure-test/params (-> args :shrunk :smallest vec)})
    nil))

(def ^:dynamic *default-opts*
  "The default options passed to clojure.test.check/quick-check
  by defspec."
  {:reporter-fn default-reporter-fn})

(defn process-options
  {:no-doc true}
  [options]
  (cond (nil? options) (merge {:num-tests *default-test-count*} *default-opts*)
        (number? options) (assoc *default-opts* :num-tests options)
        (map? options) (merge {:num-tests *default-test-count*}
                              *default-opts*
                              options)
        :else (throw (ex-info (str "Invalid defspec options: " (pr-str options))
                              {:bad-options options}))))

(defmacro defspec
  "Defines a new clojure.test test var that uses `quick-check` to verify the
  property, running num-times trials by default.  You can call the function defined as `name`
  with no arguments to trigger this test directly (i.e., without starting a
  wider clojure.test run).  If called with arguments, the first argument is the number of
  trials, optionally followed by keyword arguments as defined for `quick-check`."
  {:arglists '([name property] [name num-tests? property] [name options? property])}
  ([name property] `(defspec ~name nil ~property))
  ([name options property]
   `(defn ~(vary-meta name assoc
                      ::defspec true
                      :test `#(clojure.test.check.clojure-test/assert-check
                               (assoc (~name) :test-var (str '~name))))
      {:arglists '([] ~'[num-tests & {:keys [seed max-size reporter-fn]}])}
      ([] (let [options# (process-options ~options)]
            (apply ~name (:num-tests options#) (apply concat options#))))
      ([times# & {:as quick-check-opts#}]
       (let [options# (merge (process-options ~options) quick-check-opts#)]
         (apply
          tc/quick-check
          times#
          (vary-meta ~property assoc :name (str '~property))
          (apply concat options#)))))))

(def ^:dynamic *report-trials*
  "Controls whether property trials should be reported via clojure.test/report.
  Valid values include:

  * false - no reporting of trials (default)
  * a function - will be passed a clojure.test/report-style map containing
  :clojure.test.check/property and :clojure.test.check/trial slots
  * true - provides quickcheck-style trial reporting (dots) via
  `trial-report-dots`

  (Note that all reporting requires running `quick-check` within the scope of a
  clojure.test run (via `test-ns`, `test-all-vars`, etc.))

  Reporting functions offered by clojure.test.check include `trial-report-dots` and
  `trial-report-periodic` (which prints more verbose trial progress information
  every `*trial-report-period*` milliseconds)."
  false)

(def ^:dynamic *report-shrinking*
  "If true, a verbose report of the property being tested, the
  failing return value, and the arguments provoking that failure is emitted
  prior to the start of the shrinking search."
  false)

(def ^:dynamic *trial-report-period*
  "Milliseconds between reports emitted by `trial-report-periodic`."
  10000)

(def ^:private last-trial-report (atom 0))

(let [begin-test-var-method (get-method ct/report #?(:clj  :begin-test-var
                                                     :cljs [::ct/default :begin-test-var]))]
  (defmethod ct/report #?(:clj  :begin-test-var
                          :cljs [::ct/default :begin-test-var]) [m]
    (reset! last-trial-report (get-current-time-millis))
    (when begin-test-var-method (begin-test-var-method m))))

(defn- get-property-name
  [{property-fun ::property :as report-map}]
  (or (-> property-fun meta :name) (ct/testing-vars-str report-map)))

(defn with-test-out* [f]
  #?(:clj  (ct/with-test-out (f))
     :cljs (f)))

(defn trial-report-periodic
  "Intended to be bound as the value of `*report-trials*`; will emit a verbose
  status every `*trial-report-period*` milliseconds, like this one:

  Passing trial 3286 / 5000 for (your-test-var-name-here) (:)"
  [m]
  (let [t (get-current-time-millis)]
    (when (> (- t *trial-report-period*) @last-trial-report)
      (with-test-out*
        (fn []
          (println "Passing trial"
                   (-> m ::trial first) "/" (-> m ::trial second)
                   "for" (get-property-name m))))
      (reset! last-trial-report t))))

(defn trial-report-dots
  "Intended to be bound as the value of `*report-trials*`; will emit a single
  dot every 1000 trials reported."
  [{[so-far total] ::trial}]
  (when (pos? so-far)
    (when (zero? (mod so-far 1000))
      (print ".")
      (flush))
    (when (== so-far total) (println))))

(defmethod ct/report #?(:clj ::trial :cljs [::ct/default ::trial]) [m]
  (when-let [trial-report-fn (and clojure.test.check.clojure-test/*report-trials*
                                  (if (true? clojure.test.check.clojure-test/*report-trials*)
                                    trial-report-dots
                                    clojure.test.check.clojure-test/*report-trials*))]
    (trial-report-fn m)))

(defmethod ct/report #?(:clj ::shrinking :cljs [::ct/default ::shrinking]) [m]
  (when clojure.test.check.clojure-test/*report-shrinking*
    (with-test-out*
      (fn []
        (println "Shrinking" (get-property-name m)
                 "starting with parameters" (pr-str (::params m)))))))
