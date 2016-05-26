(ns klipse.run.plugin
  (:require klipse.core
            [gadjett.core :as gadjett :refer-macros [dbg]]
            [klipse.plugin :as plugin]))

(when js/window.klipse_settings
  (plugin/init (dbg js/klipse_settings)))
