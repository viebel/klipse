(ns klipse.cards.ui.outputs.js
  (:require 
    [klipse.ui.outputs.js :refer [js-textarea]]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [devcards.core :as dc :refer-macros [defcard]]))

(defui Root-computed
  Object
  (render [this]
    (let [{:keys [updateSuccessJS updateErrorJS]} (om/get-computed this)]
      (dom/div #js {:className "dev-cards-section"}
        (dom/div #js {:className "toolbox"}
          (dom/button #js {:onClick updateSuccessJS} 
            "Add JS success evaluation data to textarea")
          (dom/button #js {:onClick updateErrorJS} 
            "Add JS error evaluation data to textarea"))
        (js-textarea (om/props this))))))

(def root-computed (om/factory Root-computed))

(defcard js-textarea 
  "__Purpose:__ 
  
  * Basic javascript read-only textarea.
  
  __Requirements:__ 
  
  1. UI
    * Editor takes the entire width of section.
    * Editor takes the entire height of section.
    * Placeholder.
    * Editor background: a js grey or red or green logo.
  
  __ToolBox:__"
  (fn [data _]
    (let [p-data @data
          f-data {:updateSuccessJS  
                  (fn [] (swap! data assoc 
                     :evaluation-js 
                     [:ok "#'cljs.user/x"]))
                  :updateErrorJS  
                  (fn [] (swap! data assoc 
                     :evaluation-js 
                     [:error "ERROR"]))}]
      (root-computed (om/computed p-data f-data))))
  {:evaluation-js nil}
  {:inspect-data true
   :history true
   :frame false})

