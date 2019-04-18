(ns klipse.dom-utils
  (:require
   [goog.dom :as gdom]
   [applied-science.js-interop :as j]))


(defn add-class [element klass]
  (if (coll? klass)
    (doseq [k klass]
      (j/call-in element [:classList :add] k))
    (j/call element [:classList :add] klass)))

(defn create-div-after [element attrs]
    (let [div (gdom/createDom "div" (clj->js attrs) (gdom/createTextNode ""))]
      (gdom/insertSiblingAfter div element)
      div))


(defn value [element]
  (j/get element :value))

(defn add-event-listener [element event listener] 
  (j/call element :addEventListener event listener))

