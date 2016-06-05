(ns klipse.cards.test.eval
  (:require-macros 
    [cljs.test :refer [is are]])
  (:require 
    [clojure.string :as string]
    [gadjett.core :as gadjett :refer-macros [dbg]]
    [klipse.compiler :refer [eval str-eval]]
    [devcards.core :as dc :refer-macros [defcard deftest]]))

(defn remove-chars [s]
  (string/replace s #"\n|\s" ""))

(defn a= [& args]
  (apply = (map remove-chars args)))

(defn error->clj [[status error]]
  [status {:message (.. error -message)}])

(deftest test-eval
  "eval with expected failures"
  (are [input-clj message]
       (= [:error {:message message}] (error->clj (eval input-clj)))
       "(+ 1 2" "EOF while reading" 
       "(a)" "ERROR"))

(deftest test-eval-2
  "eval with several expressions"
  (are [input-clj output-clj]
       (= (eval input-clj) [:ok output-clj])
;       "(if (> 100 10) 1 2)" 1
       " (def x 12)
         (+ x 5)" 17
       "(+ 1 2)" 3
       "(map inc [1 2 3])" '(2 3 4)
       "(defn append-cyclic[lst a]
           (concat (rest lst) [a]))
       (-> (repeat 3 nil)
       (append-cyclic  9)
       (append-cyclic  10)
       (append-cyclic  11)
       (append-cyclic  12))" '(10 11 12)
       "(ns my.aa) (+ 1 2)" 3))

(deftest test-eval-macros
  "eval with macros"
  (are [input-clj output-clj]
       (= (eval input-clj) [:ok output-clj])

       "(ns my.hello) 
       (defmacro hello 
       [x] 
       `(inc ~x))
       (hello nil nil 13)" '(cljs.core/inc 13)
       ))

(comment
(deftest test-eval-macros; it fails: with macros, the expression must be evaluated twice! I don't understand why @viebel May 19, 2016
  "eval with macros"
  (are [input-clj output-clj]
       (= (eval input-clj) [:ok output-clj])
"(ns my.hello$macros) (defmacro hello [x] `(inc ~x)) (my.hello/hello 13)" 14
       )))

(deftest test-eval-twice-macro
  "eval twice with macros"
  (are [input-clj output-clj]
       (= (do (eval input-clj) (eval input-clj)) [:ok output-clj])
"(ns my.hello$macros) (defmacro hello [x] `(inc ~x)) (my.hello/hello 13)" 14
       ))

#_(deftest test-eval-3 
  "eval with namespaces"
  (are [input-clj output-clj]
       (= (eval input-clj) [:ok output-clj])
       "(ns my-ns (:require [clojure.string :as string])) (string/blank? \"HELLO!!\")" false
       "(ns my-ns (:require [replumb.core :as replumb])) (replumb/read-eval-call {} identity \"(+ 2 3)\")" '{:value "5", :warning "my-ns is a single segment namespace at line 1 ", :form (+ 2 3), :success? true}))
  
(deftest test-eval-4 
  "eval with types"
  (are [input-clj output-clj]
       (a= (remove-chars (second (eval input-clj))) output-clj)
       "(type 1)" "#object[Number \"function Number() {\n    [native code]\n}\"]"))
