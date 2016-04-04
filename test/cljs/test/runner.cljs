(ns test.runner
  (:require
    [cljs.test :as test :refer-macros [run-all-tests] :refer [report]]
    [test.compiler]))
    

(enable-console-print!)

(defmethod report [::test/default :summary] [m]
    (println "\nRan" (:test m) "tests containing"
                        (+ (:pass m) (:fail m) (:error m)) "assertions.")
    (println (:fail m) "failures," (:error m) "errors.")
    (aset js/window "test-failures" (+ (:fail m) (:error m))))


(defn ^:export run[]
  (println "res: " (run-all-tests #"test.*")))
    
