(ns klipse.ui.outputs.js
  (:require
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]))

(def placeholder-textarea
  ";; Press Ctrl-Enter or wait for 3 sec to eval in javascript...")

(defui Js-textarea
  
  static om/IQuery
  (query [this] 
    '[:evaluation-js])
  
  Object

  (render [this]
    (let [[status result] (:evaluation-js (om/props this))
          status-class (when status (name status))]
      (dom/section #js {:className "js-textarea"}
        (dom/textarea #js {:value (or result "")
                           :className status-class
                           :placeholder placeholder-textarea
                           :readOnly true})))))

(def js-textarea (om/factory Js-textarea))