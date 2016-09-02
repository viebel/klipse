(ns klipse.run.plugin.plugin
  (:require klipse.core
            klipse.js-eval
            klipse.ruby
            klipse.php
            klipse.markdown
            klipse.lambdaway
            klipse.html
            klipse.server-eval
            klipse.compiler
            [klipse.plugin :as plugin]))

(js/console.info "settings: " (aget js/window "klipse_settings"))
(defn ^:export settings []
  (aget js/window "klipse_settings"))

(plugin/init (settings))
