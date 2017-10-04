(ns klipse.run.plugin-prod.plugin
  (:require klipse.core
            klipse.lang.javascript
            klipse.lang.google-charts
            klipse.lang.function-plot
            klipse.lang.lua
            klipse.lang.oblivion            
            klipse.lang.js-compile
            klipse.lang.ruby
            klipse.lang.cpp
            klipse.lang.jsx
            klipse.lang.brainfuck
            klipse.lang.sql
            klipse.lang.python
            klipse.lang.scheme
            klipse.lang.php
            klipse.lang.server-eval
            klipse.lang.markdown
            klipse.lang.lambdaway
            ; DO NOT include clojure it inflates the build size and anyway it doesn't work with advanced compilation klipse.lang.clojure
            klipse.lang.html
            klipse.lang.ocaml
            [klipse.plugin :as plugin]))

(print "settings: " (aget js/window "klipse_settings"))
(defn ^:export settings []
  (aget js/window "klipse_settings"))

(plugin/init (settings))
