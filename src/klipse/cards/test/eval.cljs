(ns klipse.cards.test.eval
  (:require-macros 
    [cljs.test :refer [is are]])
  (:require 
    [clojure.string :as string]
    [gadjett.core :as gadjett :refer-macros [dbg]]
    [klipse.compiler :refer [eval compile]]
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
       "(ns my.best)

       (defmacro disp [& forms]
           (cons `str (for [form forms]
                                         `(str (pr-str '~form) \" => \" (pr-str ~form) \"\n\"))))

       (my.best/disp 
           (map inc [1 2 3])
               (+ 4 5 6))" 123
       "(defmacro hello [x] `(inc ~x)) (meta #'hello)" '{:ns my.hello, :name hello, :file nil, :end-column 16, :column 1, :line 1, :macro true, :end-line 1, :arglists ([x]), :doc nil, :test nil}))

(deftest test-eval-3 
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
