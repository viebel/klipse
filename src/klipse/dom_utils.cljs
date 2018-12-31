(ns klipse.dom-utils
  (:use-macros [purnam.core :only [? ! !>]])
  (:require 
    [goog.dom :as gdom]))


(defn add-class [element klass]
  (if (coll? klass)
    (doseq [k klass]
          (!> element.classList.add k))
    (!> element.classList.add klass)))

(defn create-div-after [element attrs]
    (let [div (gdom/createDom "div" (clj->js attrs) (gdom/createTextNode ""))]
      (gdom/insertSiblingAfter div element)
      div))


(defn value [element]
  (? element.value))

(defn add-event-listener [element event listener] 
  (!> element.addEventListener event listener))

