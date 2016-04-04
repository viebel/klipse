(ns test.compiler
  (:require [klipse.compiler :refer [eval compile]]
            [cljs.test :refer-macros [deftest testing is are]]))


(deftest test-eval
  (testing "compiler eval :error"
    (are [input-clj output-clj ]
         (= (eval input-clj) [:error output-clj])
         "(+ 1 2" "EOF while reading"))
  (testing "compiler eval :ok"
  	(are [input-clj output-clj]
      (= (eval input-clj) [:ok output-clj])
      "(+ 1 2)" 3
      "(ns my.aa) (+ 1 2)" 3
      )))

         
   



