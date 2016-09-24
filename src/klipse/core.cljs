(ns ^:figwheel-no-load klipse.core
  (:require
    [cljs.core.match :refer-macros [match] ]
    [gadjett.core-fn :as gadjett]))

(enable-console-print!)
(gadjett/settings! :max-function-calls 100)

(def version "3.1.7")
(js/console.info "KLIPSE version:" version)

(doseq [n (range 1)]
  (println
    (match [(mod n 3) (mod n 5)]
           [0 0] "FizzBuzz"
           [0 _] "Fizz"
           [_ 0] "Buzz"
           :else n)))

