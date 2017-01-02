(ns klipse.ui.outputs.container
  (:require-macros [gadjett.core :refer [dbg]])
  (:require
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]))

(defui Container
  Object
  (render [this]
          (dom/div #js {:id "klipse-container"}
                   (dom/p nil "This is the "
                          (dom/strong nil "klipse container")
                          ".")
                   (dom/p nil  "You can access it with "
                          (dom/code nil "(js/document.getElementById \"klipse-container\")")
                          ".")
                   (dom/p nil "For instance:")
                   (dom/pre nil
                            (dom/code nil
                                      "(set!\n (.-innerHTML (js/document.getElementById \"klipse-container\"))\n \"Hello World!\")")))))

(def container (om/factory Container))
