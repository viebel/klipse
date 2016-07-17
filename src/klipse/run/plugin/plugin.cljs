(ns klipse.run.plugin.plugin
  (:require klipse.core
            klipse.js-eval
            klipse.ruby
            klipse.php
            klipse.markdown
            klipse.server-eval
            klipse.compiler
            [gadjett.core :as gadjett :refer-macros [dbg]]
            [klipse.plugin :as plugin]))

(print "settings: " (aget js/window "klipse_settings"))
(defn ^:export settings []
  (aget js/window "klipse_settings"))

(plugin/init (settings))
