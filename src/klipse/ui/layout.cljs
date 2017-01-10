(ns klipse.ui.layout
  (:require
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [klipse.ui.editors.cljs :refer [cljs-editor Cljs-editor]]
    [klipse.ui.editors.js :refer [js-editor Js-editor]]
    [klipse.ui.outputs.container :refer [container]]
    [klipse.ui.outputs.cljs :refer [cljs-textarea Cljs-textarea]]
    [klipse.ui.outputs.js :refer [js-textarea Js-textarea]]))

(defui Layout
  
  static om/IQuery
  (query [this] 
    `[:code-layout 
      {:input ~(om/get-query Cljs-editor)}
      {:compilation ~(om/get-query Js-editor)}
      {:evaluation-clj ~(om/get-query Cljs-textarea)}
      {:evaluation-js ~(om/get-query Js-textarea)}])
    
  Object
  (render [this]
    (let [{:keys [code-layout]} (om/props this)]
      (case code-layout
        :eval-only
        (dom/div #js {:className "klipse-layout klipse-layout-eval-only"}
                 (dom/div #js {:className "klipse-item"}
                          (cljs-editor (om/props this)))
                 (dom/div #js {:className "klipse-item"}
                          (cljs-textarea (om/props this)))
                 (dom/div #js {:className "klipse-item"}
                          (js-textarea (om/props this))))
        
        :js-only
        (dom/div #js {:className "klipse-layout klipse-layout-js-only"}
          (dom/div #js {:className "klipse-item"}
            (cljs-editor (om/props this)))
          (dom/div #js {:className "klipse-item"}
                   (js-editor (om/props this))))
        
        :with-container
        (dom/div #js {:className "klipse-layout klipse-layout-global"}
          (dom/div #js {:className "klipse-item"}
            (cljs-editor (om/props this)))
          (dom/div #js {:className "klipse-item"}
            (container (om/props this)))
          (dom/div #js {:className "klipse-item"}
            (cljs-textarea (om/props this)))
          (dom/div #js {:className "klipse-item"}
            (js-textarea (om/props this))))
        
        (dom/div #js {:className "klipse-layout klipse-layout-global"}
          (dom/div #js {:className "klipse-item"}
            (cljs-editor (om/props this)))
          (dom/div #js {:className "klipse-item"}
            (js-editor (om/props this)))
          (dom/div #js {:className "klipse-item"}
            (cljs-textarea (om/props this)))
          (dom/div #js {:className "klipse-item"}
            (js-textarea (om/props this))))))))

(def layout (om/factory Layout))
