(ns ^:figwheel-no-load klipse.core
  (:require 
    [klipse.app :as app]
    [klipse.plugin :as plugin]
    [gadjett.core :as gadjett :refer-macros [dbg]]
    [gadjett.core :as gadjett]
    [com.rpl.specter :as specter]))

(enable-console-print!)
(gadjett/settings! :max-function-calls 100)

(def version "0.4.3")
(println "KLIPSE version:" version)

(plugin/init (js->clj js/klipse_settings :keywordize-keys true))
(app/init)
