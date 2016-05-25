(ns ^:figwheel-no-load klipse.core
  (:require 
    [klipse.app :as app]
    [klipse.plugin :as plugin]
    [gadjett.core :as gadjett :refer-macros [dbg]]
    [gadjett.core :as gadjett]
    [com.rpl.specter :as specter]))

(enable-console-print!)
(gadjett/settings! :max-function-calls 100)

(def version "0.5.0")
(println "KLIPSE version:" version)

(if js/klipse_settings
  (plugin/init (dbg js/klipse_settings))
  (app/init))
