(ns klipse.run.plugin.plugin
  (:require klipse.core
            [gadjett.core :as gadjett :refer-macros [dbg]]
            [klipse.plugin :as plugin]))

(print "settings: " (aget js/window "klipse_settings"))
(defn ^:export settings []
  (or (aget js/window "klipse_settings")
      {:selector ".blob-wrapper.type-clojure"}))

(plugin/init (dbg (settings)))
