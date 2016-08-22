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
            [gadjett.core :as gadjett :refer-macros [dbg]]
            [klipse.plugin :as plugin]))

(js/console.info "settings: " (aget js/window "klipse_settings"))
(defn ^:export settings []
  (aget js/window "klipse_settings"))

(defn ^:export klipsify [element mode]
  (plugin/klipsify-js element (settings) mode))

(plugin/init (settings))
