(ns ^:figwheel-no-load klipse.core
  (:require 
    [gadjett.core :as gadjett]))

(enable-console-print!)
(gadjett/settings! :max-function-calls 100)

(def version "0.5.2")
(println "KLIPSE version:" version)

