(ns klipse.cards.ui.editors
  (:require 
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [klipse.ui.editors.cljs :refer [cljs-editor]]
    [klipse.ui.editors.js :refer [js-editor]]
    [klipse.control.control :as control]
    [devcards-om-next.core :refer-macros [defcard-om-next]]
    [devcards.core :as dc :refer-macros [defcard]]))

(defui ^:once Editor-cljs-computed
  Object
  (render [this]
    (dom/div #js {:className "dev-cards-section"}
      (cljs-editor (om/props this)))))

(defonce editor-cljs-reconciler
  (om/reconciler 
    {:state {:input "(+ 2 2)"} 
     :parser control/parser}))

(defcard-om-next cljs-editor
  "__Purpose:__ 
  
  * Basic clojurescript input editor.
  
  __Requirements:__ 
  
  1. UI
    * Editor takes the entire width of section.
    * Editor takes the entire height of section.
    * Syntax hightlighting: `clojurescript`.
    * Display line number.
    * Placeholder.
    * Editor background: a cljs logo in the right bottom corner.
  
  2. TOOLS
    * `ctrl+enter` launch a function handler to update data.
    * `ctrl+s` launch a function handler.
    * Typing launch a function handler with a debounce of 3s."
  Editor-cljs-computed
  editor-cljs-reconciler
  {:input "(+ 2 2)"}
  {:inspect-data true})


(defui Root-computed
  Object
  (render [this]
    (let [{:keys [updateJS]} (om/get-computed this)]
      (dom/div #js {:className "dev-cards-section"}
        (dom/div #js {:className "toolbox"}
          (dom/button #js {:onClick updateJS} "Add JS code to editor"))
        (js-editor (om/props this))))))

(def root-computed (om/factory Root-computed))

(defcard js-editor 
  "__Purpose:__ 
  
  * Basic javascript read-only editor.
  
  __Requirements:__ 
  
  1. UI
    * Editor takes the entire width of section.
    * Editor takes the entire height of section.
    * Syntax hightlighting: `javascript`.
    * Display line number.
    * Placeholder.
    * Editor background: a js logo in the right bottom corner.
  
  2. TOOLS
    * Automatic js beautifier.
  
  __ToolBox:__"
  (fn [data _]
    (let [p-data @data
          f-data {:updateJS  
                  (fn [] (swap! data assoc 
                     :compilation 
                     [:ok "cljs.user.f = (function cljs$user$f(x){return (x + x);});"]))}]
      (root-computed (om/computed p-data f-data))))
  {:compilation nil}
  {:inspect-data true
   :history true})
