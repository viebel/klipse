(ns klipse.eval-test
  (:require-macros 
    [cljs.core.async.macros :refer [go]])
  (:require
    [cljs.test :refer [deftest is are async use-fixtures]]
    [klipse-clj.lang.clojure.include :refer [reset-state-eval!]]
    [cljs.core.async :refer [<!]]
    [clojure.string :as string]
    [klipse-clj.lang.clojure :refer [the-eval result-as-str split-expressions]]))

(defn remove-chars [s]
  (if (string? s)
    (string/replace s #"\n|\s" "")
    s))

#_(use-fixtures :each
              {:before (fn [] (reset-state-eval!))})

(defn a= [& args]
  (apply = (map remove-chars args)))

(defn b= [[status-a a] [status-b b]]
  (and (= status-a status-b)
       (a= a b)))


(deftest test-eval-error
  "eval with expected failures"
  (async done
    (go
      (are [input-clj]
        (= :error (first (<! (the-eval input-clj))))
        "(+ 1 2"
        "(a)")
      (done))))

(deftest test-eval-2
  "eval with several expressions"
  (async done
    (go (are [input-clj output-clj]
          (b= (<! (the-eval input-clj)) [:ok output-clj])
          "(if (> 100 10) 1 2)" 1
          "(ns aa.cc) (def x 12)
          (+ x 5)" 17
          "(+ 1 2)" 3
          "(+ 1 2)\n\n   \n" 3
          "(if 1 2 3)" 2
          "(map inc [1 2 3])" '(2 3 4)
          "(defn append-cyclic[lst a] (concat (rest lst) [a]))
          (-> (repeat 3 nil)
              (append-cyclic  9)
              (append-cyclic  10)
              (append-cyclic  11)
              (append-cyclic  12))" '(10 11 12)
          "(ns foo.core) ::aa"  :foo.core/aa
          "(ns my.aa) (+ 1 2)" 3)
        (done))))

#_(deftest test-eval-macros
    "eval with macros"
    (async done
      (go (are [input-clj output-clj]
            (b= (<! (the-eval input-clj)) [:ok output-clj])

            "(ns my.hello)
            (defmacro hello
            [x]
            `(inc ~x))
            (hello nil nil 13)" '(cljs.core/inc 13)
            )
          (done))))

#_(deftest test-eval-3
  "eval with namespaces"
  (async done
    (go (are [input-clj output-clj]
          (b= (the-eval input-clj) [:ok output-clj])
          "(ns my-ns.core (:require [clojure.string :as string])) (string/blank? \"HELLO!!\")" false)
        (done))))

(deftest test-eval-4
  "eval with types"
  (async done
    (go (are [input-clj output-clj]
          (a= (str (second (<! (the-eval input-clj)))) output-clj)
          "(type 1)" "function Number() {[native code]}")
        (done))))



(deftest test-eval-functions
  "eval with functions"
  (async done
    (go (are [input-clj output-clj]
          (a= (str (second (<! (the-eval input-clj)))) output-clj)
          "(ns my.func) (defn foo [] 1)" "#'my.func/foo"
          )
        (done))))


(deftest test-eval-vars
  "eval with vars"
  (async done
    (go (are [input-clj output-clj]
          (b= (str (second (<! (the-eval input-clj)))) output-clj)
          "(ns my.vars) (def a 1)" "#'my.vars/a"
          "(ns my.vars2) (def b 1) b" "1"
          )
        (done))))

(deftest eval-in-ns
  "eval properly code that is related to ns"
  (async done
    (go (are [input-clj output-clj]
          (a= (second (<! (the-eval input-clj))) output-clj)
          "(ns my.foo) ::foo" :my.foo/foo

          )
        (done))))

(deftest split-expressions-test
  (are [in out]
    (= out (split-expressions in))
    "(+ 1 2)" ["(+ 1 2)"]
    "(+ 1 2)    (+ 2 3)" ["(+ 1 2)" "(+ 2 3)"]
    ":foo" [":foo"]
    "::foo" ["::foo"]))

;;;; DISPLAY
(deftest display-evaluation-with-errors
  "displays evaluation when an error occurs"
  (async done
    (go (are [in out]
          (a= (second (result-as-str {:success? false :error in} 2)) out)
          nil "nil"
          (str "ab") "\"ab\""
          1 "1"
          [1 2] "[1 2]")
        (done))))

(deftest display-evaluation-and-beautify
  "displays evaluation properly and beautify it"
  (async done
    (go (are [in out]
          (a= (second (result-as-str {:success? true :value in} {:beautify-strings true :print-length 2})) out)
          nil "nil"
          "\n1" "\n1"
          "ab" "ab"
          [1 2] "[1 2]"
          [1 2 3 4 5] "[1 2 ...]"
          "abcdef" "abcdef"
          (range) "(0 1 ...)")
        (done))))

(deftest display-evaluation-and-crop
  "displays evaluation properly and crop it"
  (async done
    (go (are [in out]
          (a= (second (result-as-str {:success? true :value in} {:print-length 2})) out)
          nil "nil"
          "\n1" "\"\\n1\""
          "ab" "\"ab\""
          [1 2] "[1 2]"
          [1 2 3 4 5] "[1 2 ...]"
          "abcdef" "\"abcdef\""                             ; strings are not cropped
          (range) "(0 1 ...)")
        (done))))

