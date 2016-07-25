(ns ^:figwheel-no-load klipse.core
  (:require 
    [gadjett.core :as gadjett]))

(enable-console-print!)
(gadjett/settings! :max-function-calls 100)

(def version "2.0.0")
(println "KLIPSE version:" version)

