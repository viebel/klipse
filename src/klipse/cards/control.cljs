(ns klipse.cards.control
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
  "When it should failed"
  (are [input-clj message]
       (= [:error {:message message}] (error->clj (eval input-clj)))
       "(+ 1 2" "EOF while reading" 
       "(a)" "ERROR"))

(deftest test-eval-2
  "When it should succeed"
  (are [input-clj output-clj]
       (= (eval input-clj) [:ok output-clj])
       "(+ 1 2)" 3
       "(map inc [1 2 3])" '(2 3 4)
       "(ns my.hello) 
       (defmacro hello 
       [x] 
       `(inc ~x))
       (hello nil nil 13)" '(cljs.core/inc 13)
       "(defmacro hello [x] `(inc ~x)) (meta #'hello)" '{:ns my.hello, :name hello, :file nil, :end-column 16, :column 1, :line 1, :macro true, :end-line 1, :arglists ([x]), :doc nil, :test nil}
       "(defn append-cyclic[lst a]
           (concat (rest lst) [a]))
       (-> (repeat 3 nil)
       (append-cyclic  9)
       (append-cyclic  10)
       (append-cyclic  11)
       (append-cyclic  12))" '(10 11 12)
       "(ns my.aa) (+ 1 2)" 3))

(deftest test-eval-3 
  "When it should succeed with namespaces"
  (are [input-clj output-clj]
       (= (eval input-clj) [:ok output-clj])
       "(ns my-ns (:require [clojure.string :as string])) (string/blank? \"HELLO!!\")" false
       "(ns my-ns (:require [replumb.core :as replumb])) (replumb/read-eval-call {} identity \"(+ 2 3)\")" '{:value "5", :warning "my-ns is a single segment namespace at line 1 ", :form (+ 2 3), :success? true}))
  
(deftest test-eval-4 
  "Compiler eval :ok"
  (are [input-clj output-clj]
       (a= (remove-chars (second (eval input-clj))) output-clj)
       "(type 1)" "#object[Number \"function Number() {\n    [native code]\n}\"]")
   
  (are [input-clj output-clj]
       (= (eval input-clj) [:ok output-clj])
       "(+ 1 2)" 3
       "(map inc [1 2 3])" '(2 3 4)
       "(ns my.aa) (+ 1 2)" 3))

(deftest test-compile
  "When it should success"
  (is (a= (remove-chars (second (compile "(ns my-project.my-ns) (def x 1) (def y 2)"))) 
          "goog.provide('my_project.my_ns'); goog.require('cljs.core'); my_project.my_ns.x = (1); my_project.my_ns.y = (2);"))
  (is (a= (remove-chars (second (compile "(if 2 3) (def x (if 2 3))"))) 
          "cljs.user.x= (3);"))
  (is (a= (remove-chars (second (compile "(= 1 2)"))) 
          "cljs.core._EQ_.call(null,(1),(2));")))

(deftest test-static-fn 
  ":static-fns true"
  (is (a= (remove-chars (second (compile "(= 1 2)" :static-fns true))) 
          "cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));")))
