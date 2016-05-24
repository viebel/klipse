(ns ^:figwheel-no-load klipse.core
  (:require 
    [devtools.core :as devtools]
    [gadjett.core :as gadjett]))

#_(enable-console-print!)
(set! *print-fn*
      (fn [& args]
        (.apply (.-log js/console) js/console args)))
 
(devtools/install!)

(gadjett/settings! :max-function-calls 100)

(def version "0.5.2")
(println "KLIPSE version:" version)

