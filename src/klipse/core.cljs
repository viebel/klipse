(ns ^:figwheel-no-load klipse.core
  (:require 
    [gadjett.core-fn :as gadjett]))

(enable-console-print!)
(gadjett/settings! :max-function-calls 100)

(def version "3.1.6")
(js/console.info "KLIPSE version:" version)

