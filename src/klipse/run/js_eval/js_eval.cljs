(ns klipse.run.js-eval.js-eval
  (:require klipse.core
            [klipse.plugin :as plugin]
            klipse.js-eval))

(plugin/init (aget js/window "klipse_settings"))
