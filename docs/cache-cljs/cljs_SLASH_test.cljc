;   Copyright (c) Rich Hickey. All rights reserved.
;   The use and distribution terms for this software are covered by the
;   Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
;   which can be found in the file epl-v10.html at the root of this distribution.
;   By using this software in any fashion, you are agreeing to be bound by
;   the terms of this license.
;   You must not remove this notice, or any other, from this software.

(ns cljs.test
  #?(:cljs (:require-macros [clojure.template :as temp]))
  (:require [cljs.env :as env]
            [cljs.analyzer :as ana]
            [cljs.analyzer.api :as ana-api]
            #?(:clj [clojure.template :as temp])))

;; =============================================================================
;; Utilities for assertions

(defn function?
  "Returns true if argument is a function or a symbol that resolves to
  a function (not a macro)."
  [menv x]
  (and (symbol? x) (:fn-var (ana-api/resolve menv x))))

(defn assert-predicate
  "Returns generic assertion code for any functional predicate.  The
  'expected' argument to 'report' will contains the original form, the
  'actual' argument will contain the form with all its sub-forms
  evaluated.  If the predicate returns false, the 'actual' form will
  be wrapped in (not...)."
  [msg form]
  (let [args (rest form)
        pred (first form)]
    `(let [values# (list ~@args)
           result# (apply ~pred values#)]
       (if result#
         (do-report
           {:type :pass, :message ~msg,
            :expected '~form, :actual (cons ~pred values#)})
         (do-report
           {:type :fail, :message ~msg,
            :expected '~form, :actual (list '~'not (cons '~pred values#))}))
       result#)))

(defn assert-any
  "Returns generic assertion code for any test, including macros, Java
  method calls, or isolated symbols."
  [msg form]
  `(let [value# ~form]
     (if value#
       (do-report
         {:type :pass, :message ~msg,
          :expected '~form, :actual value#})
       (do-report
         {:type :fail, :message ~msg,
          :expected '~form, :actual value#}))
     value#))

(defmacro ^:private cljs-output-dir []
  (let [{:keys [output-dir]} (ana-api/get-options)]
    (or output-dir "out")))

;; =============================================================================
;; Assertion Methods

;; You don't call these, but you can add methods to extend the 'is'
;; macro.  These define different kinds of tests, based on the first
;; symbol in the test expression.

(defmulti assert-expr 
  (fn [menv msg form]
    (cond
      (nil? form) :always-fail
      (seq? form) (first form)
      :else :default)))

(defmethod assert-expr :always-fail [menv msg form]
  ;; nil test: always fail
  `(do-report {:type :fail, :message ~msg}))

(defmethod assert-expr :default [menv msg form]
  (if (and (sequential? form)
           (function? menv (first form)))
    (assert-predicate msg form)
    (assert-any msg form)))

(defmethod assert-expr 'instance? [menv msg form]
  ;; Test if x is an instance of y.
  `(let [klass# ~(nth form 1)
         object# ~(nth form 2)]
     (let [result# (instance? klass# object#)]
       (if result#
         (do-report
           {:type :pass, :message ~msg,
            :expected '~form, :actual (type object#)})
         (do-report
           {:type :fail, :message ~msg,
            :expected '~form, :actual (type object#)}))
       result#)))

(defmethod assert-expr 'thrown? [menv msg form]
  ;; (is (thrown? c expr))
  ;; Asserts that evaluating expr throws an exception of class c.
  ;; Returns the exception thrown.
  (let [klass (second form)
        body (nthnext form 2)]
    `(try
       ~@body
       (do-report
         {:type :fail, :message ~msg,
          :expected '~form, :actual nil})
       (catch ~klass e#
         (do-report
           {:type :pass, :message ~msg,
            :expected '~form, :actual e#})
         e#))))

(defmethod assert-expr 'thrown-with-msg? [menv msg form]
  ;; (is (thrown-with-msg? c re expr))
  ;; Asserts that evaluating expr throws an exception of class c.
  ;; Also asserts that the message string of the exception matches
  ;; (with re-find) the regular expression re.
  (let [klass (nth form 1)
        re (nth form 2)
        body (nthnext form 3)]
    `(try
       ~@body
       (do-report {:type :fail, :message ~msg, :expected '~form, :actual nil})
       (catch ~klass e#
         (let [m# (.-message e#)]
           (if (re-find ~re m#)
             (do-report
               {:type :pass, :message ~msg,
                :expected '~form, :actual e#})
             (do-report
               {:type :fail, :message ~msg,
                :expected '~form, :actual e#}))
           e#)))))

(defmacro try-expr
  "Used by the 'is' macro to catch unexpected exceptions.
  You don't call this."
  [msg form]
  `(try
     ~(assert-expr &env msg form)
     (catch :default t#
       (do-report
         {:type :error, :message ~msg,
          :expected '~form, :actual t#}))))

;; =============================================================================
;; Assertion Macros

(defmacro is
  "Generic assertion macro.  'form' is any predicate test.
  'msg' is an optional message to attach to the assertion.
  
  Example: (is (= 4 (+ 2 2)) \"Two plus two should be 4\")

  Special forms:

  (is (thrown? c body)) checks that an instance of c is thrown from
  body, fails if not; then returns the thing thrown.

  (is (thrown-with-msg? c re body)) checks that an instance of c is
  thrown AND that the message on the exception matches (with
  re-find) the regular expression re."
  ([form] `(cljs.test/is ~form nil))
  ([form msg]
   `(try-expr ~msg ~form)))

(defmacro are
  "Checks multiple assertions with a template expression.
  See clojure.template/do-template for an explanation of
  templates.

  Example: (are [x y] (= x y)  
                2 (+ 1 1)
                4 (* 2 2))
  Expands to: 
           (do (is (= 2 (+ 1 1)))
               (is (= 4 (* 2 2))))

  Note: This breaks some reporting features, such as line numbers."
  [argv expr & args]
  (if (or
        ;; (are [] true) is meaningless but ok
        (and (empty? argv) (empty? args))
        ;; Catch wrong number of args
        (and (pos? (count argv))
          (pos? (count args))
          (zero? (mod (count args) (count argv)))))
    `(clojure.template/do-template ~argv (is ~expr) ~@args)
    (throw (#?(:clj Exception. :cljs js/Error.) "The number of args doesn't match are's argv."))))

(defmacro testing
  "Adds a new string to the list of testing contexts.  May be nested,
  but must occur inside a test function (deftest)."
  ([string & body]
   `(do
      (update-current-env! [:testing-contexts] conj ~string)
      (try
        ~@body
        (finally
          (update-current-env! [:testing-contexts] rest))))))

;; =============================================================================
;; Defining Tests

(defmacro deftest
  "Defines a test function with no arguments.  Test functions may call
  other tests, so tests may be composed.  If you compose tests, you
  should also define a function named test-ns-hook; run-tests will
  call test-ns-hook instead of testing all vars.

  Note: Actually, the test body goes in the :test metadata on the var,
  and the real function (the value of the var) calls test-var on
  itself.

  When cljs.analyzer/*load-tests* is false, deftest is ignored."
  [name & body]
  (when ana/*load-tests*
    `(do
       (def ~(vary-meta name assoc :test `(fn [] ~@body))
         (fn [] (cljs.test/test-var (.-cljs$lang$var ~name))))
       (set! (.-cljs$lang$var ~name) (var ~name)))))

(defmacro async
  "Wraps body as a CPS function that can be returned from a test to
  continue asynchronously.  Binds done to a function that must be
  invoked once and from an async context after any assertions.

  (deftest example-with-timeout
    (async done
      (js/setTimeout (fn []
                       ;; make assertions in async context...
                       (done) ;; ...then call done
                       )
                     0)))"
  [done & body]
  `(reify
     cljs.test/IAsyncTest
     cljs.core/IFn
     (~'-invoke [_# ~done]
       ~@body)))

;; =============================================================================
;; Running Tests

(defn ns? [x]
  (and (seq? x) (= (first x) 'quote)))

(defmacro run-tests-block
  "Like test-vars, but returns a block for further composition and
  later execution."
  [env-or-ns & namespaces]
  (assert (every?
           (fn [[quote ns]] (and (= quote 'quote) (symbol? ns)))
           namespaces)
          "All arguments to run-tests must be quoted symbols")
  (let [is-ns (ns? env-or-ns)
        env (gensym "env")
        summary (gensym "summary")]
    `(let [~env ~(if is-ns
                   `(empty-env)
                   env-or-ns)
           ~summary (cljs.core/volatile!
                     {:test 0 :pass 0 :fail 0 :error 0
                      :type :summary})]
       (concat ~@(map
                  (fn [ns]
                    `(concat (test-ns-block ~env ~ns)
                             [(fn []
                                (cljs.core/vswap!
                                 ~summary
                                 (partial merge-with +)
                                 (:report-counters
                                  (get-and-clear-env!))))]))
                  (if is-ns
                    (concat [env-or-ns] namespaces)
                    namespaces))
               [(fn []
                   (set-env! ~env)
                   (do-report (deref ~summary))
                   (report (assoc (deref ~summary) :type :end-run-tests))
                   (clear-env!))]))))

(defmacro run-tests
  "Runs all tests in the given namespaces; prints results.
  Defaults to current namespace if none given. Does not return a meaningful
  value due to the possiblity of asynchronous execution. To detect test
  completion add a :end-run-tests method case to the cljs.test/report
  multimethod."
  ([] `(run-tests (empty-env) '~ana/*cljs-ns*))
  ([env-or-ns]
   (if (ns? env-or-ns)
     `(run-tests (empty-env) ~env-or-ns)
     `(run-tests ~env-or-ns '~ana/*cljs-ns*)))
  ([env-or-ns & namespaces]
   `(run-block (run-tests-block ~env-or-ns ~@namespaces))))

(defmacro run-all-tests
  "Runs all tests in all namespaces; prints results.
  Optional argument is a regular expression; only namespaces with
  names matching the regular expression (with re-matches) will be
  tested."
  ([] `(run-all-tests nil (empty-env)))
  ([re] `(run-all-tests ~re (empty-env)))
  ([re env]
   `(run-tests ~env
      ~@(map
          (fn [ns] `(quote ~ns))
          (cond->> (ana-api/all-ns)
            re (filter #(re-matches re (name %))))))))

(defmacro test-all-vars-block
  ([[quote ns]]
   `(let [env# (get-current-env)]
      (concat
       [(fn []
          (when (nil? env#)
            (set-env! (empty-env)))
          ~(when (ana-api/ns-resolve ns 'cljs-test-once-fixtures)
             `(update-current-env! [:once-fixtures] assoc '~ns
                                             ~(symbol (name ns) "cljs-test-once-fixtures")))
          ~(when (ana-api/ns-resolve ns 'cljs-test-each-fixtures)
             `(update-current-env! [:each-fixtures] assoc '~ns
                                             ~(symbol (name ns) "cljs-test-each-fixtures"))))]
       (test-vars-block
        [~@(->> (ana-api/ns-interns ns)
                (filter (fn [[_ v]] (:test v)))
                (sort-by (fn [[_ v]] (:line v)))
                (map (fn [[k _]]
                       `(var ~(symbol (name ns) (name k))))))])
       [(fn []
          (when (nil? env#)
            (clear-env!)))]))))

(defmacro test-all-vars
  "Calls test-vars on every var with :test metadata interned in the
  namespace, with fixtures."
  [[quote ns :as form]]
  `(run-block
     (concat (test-all-vars-block ~form)
             [(fn []
                (report {:type :end-test-all-vars :ns ~form}))])))

(defmacro test-ns-block
  "Like test-ns, but returns a block for further composition and
  later execution.  Does not clear the current env."
  ([env [quote ns :as form]]
   (assert (and (= quote 'quote) (symbol? ns)) "Argument to test-ns must be a quoted symbol")
   (assert (ana-api/find-ns ns) (str "Namespace " ns " does not exist"))
   `[(fn []
       (set-env! ~env)
       (do-report {:type :begin-test-ns, :ns ~form})
       ;; If the namespace has a test-ns-hook function, call that:
       ~(if-let [v (ana-api/ns-resolve ns 'test-ns-hook)]
          `(~(symbol (name ns) "test-ns-hook"))
          ;; Otherwise, just test every var in the namespace.
          `(block (test-all-vars-block ~form))))
     (fn []
       (do-report {:type :end-test-ns, :ns ~form}))]))

(defmacro test-ns
  "If the namespace defines a function named test-ns-hook, calls that.
  Otherwise, calls test-all-vars on the namespace.  'ns' is a
  namespace object or a symbol.

  Internally binds *report-counters* to a ref initialized to
  *initial-report-counters*.  "
  ([ns] `(test-ns (empty-env) ~ns))
  ([env [quote ns :as form]]
   `(run-block
     (concat (test-ns-block ~env ~form)
             [(fn []
                (clear-env!))]))))

;; =============================================================================
;; Fixes

(defmacro use-fixtures [type & fns]
  (condp = type
    :once
    `(def ~'cljs-test-once-fixtures
       [~@fns])
    :each
    `(def ~'cljs-test-each-fixtures
       [~@fns])
    :else
    (throw
      (#?(:clj Exception. :cljs js/Error.) "First argument to cljs.test/use-fixtures must be :once or :each"))))
