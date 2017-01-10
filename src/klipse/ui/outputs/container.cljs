(ns klipse.ui.outputs.container
  (:require-macros [gadjett.core :refer [dbg]])
  (:require
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]))

(defui Container
  Object
  (render [this]
          (dom/div #js {:id "klipse-container-wrapper"}
                   (dom/div #js {:id "klipse-container"}
                            (dom/p nil "This is your "
                                   (dom/strong nil "klipse container")
                                   ".")
                            (dom/p nil  "You can access it with "
                                   (dom/code nil "(js/document.getElementById \"klipse-container\")")
                                   ".")
                            (dom/p nil "For instance, try to copy and paste the following code into the top left box and press 'Ctrl-Enter` or wait for 3 seconds:")
                            (dom/pre nil
                                     (dom/code nil
                                               "(set!\n (.-innerHTML (js/document.getElementById \"klipse-container\"))\n \"<div style='color:blue;'> Hello <b>World</b>!</div>\")"))))))

(def container (om/factory Container))
