(ns klipse.ui.outputs.container
  (:require-macros [gadjett.core :refer [dbg]])
  (:require
   [klipse.utils :refer [runonce]]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]))


(defui ContainerInner
  Object
  (componentDidMount [this]
                     (set! js/klipse-container (dom/node this)))
  
  (shouldComponentUpdate [this] false)
  (render [this]
          (dom/div #js {:id "klipse-container"}
                   (dom/p nil "This is your "
                          (dom/strong nil "klipse container")
                          ".")
                   (dom/p nil  "You can access it with "
                          (dom/code nil "(js/document.getElementById \"klipse-container\")")
                          " or with " (dom/code nil "js/klipse-container") 
                          ".")
                   (dom/p nil "For instance, try to copy and paste the following code into the top left box and press 'Ctrl-Enter` or wait for 3 seconds:")
                   (dom/pre nil
                            (dom/code nil
                                      "(set!\n (.-innerHTML js/klipse-container)\n \"<div style='color:blue;'> Hello <b>World</b>!</div>\")")))))

(def container-inner (om/factory ContainerInner))


(defui Container
  Object
  
  (shouldComponentUpdate [this] false)

  (render [this]
          (dom/div #js {:id "klipse-container-wrapper"}
                   (container-inner (om/props this)))))

(def container (om/factory Container))
