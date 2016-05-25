(ns klipse.run.plugin
  (:require klipse.core
            [gadjett.core :as gadjett :refer-macros [dbg]]
            [klipse.plugin :as plugin]))

(if js/klipse_settings
  (plugin/init (dbg js/klipse_settings))
  (print "klipse plugin: `klipse_settings` is undefined"))
