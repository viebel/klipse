(ns klipse.run.plugin.plugin
  (:require klipse.core
            klipse.lang.javascript
            klipse.lang.google-charts
            klipse.lang.js-compile
            klipse.lang.ruby
            klipse.lang.cpp
            klipse.lang.jsx
            klipse.lang.brainfuck
            klipse.lang.sql
            klipse.lang.scheme
            klipse.lang.python
            klipse.lang.php
            klipse.lang.markdown
            klipse.lang.lambdaway
            klipse.lang.html
            klipse.lang.server-eval
            klipse.lang.clojure
            klipse.lang.reagent
            [klipse.plugin :as plugin]))

(js/console.info "settings: " (aget js/window "klipse_settings"))

(defn ^:export settings []
  (aget js/window "klipse_settings"))

(when (settings)
  (plugin/init (settings)))
