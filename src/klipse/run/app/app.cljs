(ns klipse.run.app.app
  (:require klipse.core
            [goog.dom :as gdom]
            [klipse.app :as app]))

(app/init (gdom/getElement "compiler"))
