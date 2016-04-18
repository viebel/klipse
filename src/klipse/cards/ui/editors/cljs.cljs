(ns klipse.cards.ui.editors.cljs
  (:require 
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [klipse.ui.editors.cljs :refer [cljs-editor]]
    [klipse.control.control :as control]
    [devcards-om-next.core :refer-macros [defcard-om-next]]
    [devcards.core :as dc :refer-macros [defcard]]))

(defui ^:once Root-computed
  Object
  (render [this]
    (dom/div #js {:className "dev-cards-section"}
      (cljs-editor (om/props this)))))

(defonce root-reconciler
  (om/reconciler 
    {:state {:input "(+ 2 2)"} 
     :parser control/parser}))

(def root-computed (om/factory Root-computed))

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
  Root-computed
  root-reconciler
  {:input "(+ 2 2)"}
  {:inspect-data true
   :frame false})