(ns klipse.run.app
  (:require klipse.core
            [goog.dom :as gdom]
            [klipse.app :as app]))

(app/init (gdom/getElement "compiler"))
