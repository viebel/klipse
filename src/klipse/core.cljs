(ns ^:figwheel-no-load klipse.core
  (:require 
    [gadjett.core :as gadjett]))

(enable-console-print!)
(gadjett/settings! :max-function-calls 100)

(def version "2.1.0")
(js/console.info "KLIPSE version:" version)

