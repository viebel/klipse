(ns klipse.run.plugin.plugin
  (:require klipse.core
            klipse.lang.javascript
            klipse.lang.js-compile
            klipse.lang.ruby
            klipse.lang.jsx
            klipse.lang.sql
            klipse.lang.scheme
            klipse.lang.python
            klipse.lang.php
            klipse.lang.markdown
            klipse.lang.lambdaway
            klipse.lang.html
            klipse.lang.server-eval
            klipse.lang.clojure
            [klipse.plugin :as plugin]))

(js/console.info "settings: " (aget js/window "klipse_settings"))
(defn ^:export settings []
  (aget js/window "klipse_settings"))

(plugin/init (settings))
