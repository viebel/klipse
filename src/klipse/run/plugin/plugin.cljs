(ns klipse.run.plugin.plugin
  (:require klipse.core
            [gadjett.core :as gadjett :refer-macros [dbg]]
            [klipse.plugin :as plugin]))

(print "settings: " js/window.klipse_settings)
(defn settings []
  (or js/window.klipse_settings
      {:selector ".blob-wrapper.type-clojure"}))

(plugin/init (dbg (settings)))
