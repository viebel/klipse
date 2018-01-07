(ns klipse.cards.ui.layout.eval-only
  (:require 
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [klipse.ui.layout :refer [layout]]
    [devcards.core :as dc :refer-macros [defcard defcard-doc]]))

(defui Root-computed
  Object
  (render [this]
    (dom/div #js {:className "dev-cards-layout"}
      (layout (om/props this)))))

(def root-computed (om/factory Root-computed))

(defcard klipse-layout-eval-only
  (fn [data _]
    (root-computed @data))
  {:code-layout :eval-only} 
  {:inspect-data true})