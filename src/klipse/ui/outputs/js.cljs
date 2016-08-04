(ns klipse.ui.outputs.js
  (:require
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]))

(def placeholder-textarea
  ";; Press Ctrl-Enter or wait for 3 sec to print...")

(defui Js-textarea
  
  static om/IQuery
  (query [this] 
    '[:evaluation-js])
  
  Object

  (render [this]
    (let [value (:evaluation-js (om/props this))]
      (dom/section #js {:className "js-textarea"}
        (dom/textarea #js {:value (or value "")
                           :className "ok"
                           :placeholder placeholder-textarea
                           :readOnly true})))))

(def js-textarea (om/factory Js-textarea))
