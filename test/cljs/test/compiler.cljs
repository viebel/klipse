(ns test.compiler
  (:require 
    [clojure.string :as string]
    [gadjett.core :as gadjett :refer-macros [dbg]]
    [klipse.compiler :refer [eval compile]]
            [cljs.test :refer-macros [deftest testing is are]]))

(deftest test-eval
  (testing "when it should fail "
    (are [input-clj output-clj]
         (= (eval input-clj) [:error output-clj])
         "(+ 1 2" "EOF while reading"))
  (testing "when it should succeed"
    (are [input-clj output-clj]
         (= (eval input-clj) [:ok output-clj])
         "(+ 1 2)" 3
         "(map inc [1 2 3])" '(2 3 4)
         "(defmacro hello 
         [x] 
         `(inc ~x))
         (hello nil nil 13)" '(cljs.core/inc 13)
         "(defmacro hello [x] `(inc ~x)) (meta #'hello)" '{:ns cljs.user, :name hello, :file nil, :end-column 16, :column 1, :line 1, :macro true, :end-line 1, :arglists ([x]), :doc nil, :test nil}
         "(defn append-cyclic[lst a]
             (concat (rest lst) [a]))
         (-> (repeat 3 nil)
         (append-cyclic  9)
         (append-cyclic  10)
         (append-cyclic  11)
         (append-cyclic  12))" '(10 11 12)
         "(ns my.aa) (+ 1 2)" 3))
  (testing "when it should succeed with namespaces"
    (are [input-clj output-clj]
         (= (eval input-clj) [:ok output-clj])
         "(ns my-ns (:require [clojure.string :as string])) (string/blank? \"HELLO!!\")" false
         "(ns my-ns (:require [replumb.core :as replumb])) (replumb/read-eval-call {} identity \"(+ 2 3)\")" '{:value "5", :warning "my-ns is a single segment namespace at line 1 ", :form (+ 2 3), :success? true}))

  #_(testing "when it should succeed with macros"
    (is (= (dbg (eval "(ns foo.core$macros) (defmacro hello [x] (prn &form) `(inc ~x)) (foo.core/hello 12)")) [:ok 14]))))

(defn remove-chars [s]
  (string/replace s #"\n|\s" ""))

(defn a= [& args]
  (apply = (map remove-chars args)))

(deftest test-compile
  (testing "when it should success"
    (is (a= (remove-chars (second (compile "(ns my-project.my-ns) (def x 1) (def y 2)"))) "goog.provide('my_project.my_ns');
                                                                                          goog.require('cljs.core');
                                                                                          my_project.my_ns.x = (1);
                                                                                          my_project.my_ns.y = (2);
                                                                                          "))
    (is (a= (remove-chars (second (compile "(if 2 3) (def x (if 2 3))"))) "cljs.user.x= (3);")))


  (testing "compiler eval :ok"
  	(are [input-clj output-clj]
      (= (eval input-clj) [:ok output-clj])
      "(type 1)" "#object[Number \"function Number() {\n    [native code]\n}\"]"
      "(+ 1 2)" 3
      "(map inc [1 2 3])" '(2 3 4)
      "(ns my.aa) (+ 1 2)" 3)))

   



