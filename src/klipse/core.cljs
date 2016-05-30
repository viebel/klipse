(ns ^:figwheel-no-load klipse.core
  (:require 
    [devtools.core :as devtools]
    [gadjett.core :as gadjett]))

(enable-console-print!)
#_(set! *print-fn*
      (fn [& args]
        (.apply (.-log js/console) js/console args)))
 
#_(devtools/install!)

(gadjett/settings! :max-function-calls 100)

(def version "0.6.0")
(println "KLIPSE version:" version)

