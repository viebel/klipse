(ns klipse.cards.ui.outputs.cljs
  (:require 
    [klipse.ui.outputs.cljs :refer [cljs-textarea]]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [devcards.core :as dc :refer-macros [defcard]]))

(defui Root-computed
  Object
  (render [this]
    (let [{:keys [updateSuccessCLJS updateErrorCLJS]} (om/get-computed this)]
      (dom/div #js {:className "dev-cards-section"}
        (dom/div #js {:className "toolbox"}
          (dom/button #js {:onClick updateSuccessCLJS} 
            "Add CLJS success evaluation data to textarea")
          (dom/button #js {:onClick updateErrorCLJS} 
            "Add CLJS error evaluation data to textarea"))
        (cljs-textarea (om/props this))))))

(def root-computed (om/factory Root-computed))

(defcard cljs-textarea 
  "__Purpose:__ 
  
  * Basic clojurescript read-only textarea.
  
  __Requirements:__ 
  
  1. UI
    * Editor takes the entire width of section.
    * Editor takes the entire height of section.
    * Placeholder.
    * Editor background: a cljs grey or red or green logo.
  
  __ToolBox:__"
  (fn [data _]
    (let [p-data @data
          f-data {:updateSuccessCLJS  
                  (fn [] (swap! data assoc 
                     :evaluation-clj 
                     [:ok "[:a :b :c]"]))
                  :updateErrorCLJS  
                  (fn [] (swap! data assoc 
                     :evaluation-clj 
                     [:error "ERROR"]))}]
      (root-computed (om/computed p-data f-data))))
  {:evaluation-clj nil}
  {:inspect-data true
   :history true
   :frame false})

