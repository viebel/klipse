(ns test.runner
  (:require
    [cljs.test]
    [doo.runner :refer-macros [doo-tests]]
    [klipse.eval-test]
    [klipse.compile-test]))

#_(defmethod cljs.test/report [:cljs.test/default :end-run-tests] [m]
  (if (cljs.test/successful? m)
    (println "Success!")
    (println "FAIL")))

(doo-tests 'klipse.eval-test
           'klipse.compile-test
           )
