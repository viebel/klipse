(ns klipse.ui.outputs.container
  (:require-macros [gadjett.core :refer [dbg]])
  (:require
   [klipse.utils :refer [runonce]]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]))


(defui ContainerInner
  Object
  (componentDidMount [this]
                     (set! js/klipse-container (dom/node this))
                                        ; detach the component from react - as it will be accessed by the code and therefore leaving it in react tree is dangerous
                     (set!
                      (.-innerHTML (dom/node this))
                       "Hi there!")
                     ;(js/ReactDOM.unmountComponentAtNode (dom/node this))
                     )
  
  (shouldComponentUpdate [this] false)
  (render [this]
          ;(js/console.info "render")
          
          #_(dom/div #js {:id "klipse-container"}
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

(def init (fn [this]
            (if-let [el (js/document.getElementById "klipse-container-id")]
              (set!
                   (.-innerHTML (dom/node this))
                   (.-innerHTML el))
              (do (set!
                   (.-innerHTML (dom/node this))
                   "<div id='klipse-container-id'>Hi there!</div>")
                  (set! js/klipse-container (js/document.getElementById "klipse-container-id"))))))

(defui Container
  Object
  (componentDidMount [this]
                     (js/console.info "componentdidmount")
                     (init this))
  (shouldComponentUpdate [this] false)
  (render [this]
          (dom/div #js {:id "klipse-container-wrapper"}
                   nil)))

(def container (om/factory Container))
