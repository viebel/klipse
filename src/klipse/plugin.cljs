(ns klipse.plugin
  (:require 
    [klipse.ui.editors.cljs :refer [handle-events]]
    [klipse.ui.editors.editor :refer [create-editor-after-element replace-element-by-editor]]
    [gadjett.core :as gadjett :refer-macros [dbg]]
    [klipse.ui.editors.editor :refer [set-value get-value]] 
    [klipse.compiler :refer [str-eval]]))

(defn eval-in-editor [editor-target editor-source]
  (->> (get-value editor-source)
       str-eval
       (set-value editor-target)))

(defn klipsify [element]
  (when element
    (let [clj-in (.-textContent element);goog.dom/getTextContent removes new lines
          clj-out (str-eval clj-in)
          out-editor (create-editor-after-element element clj-out)
          in-editor (replace-element-by-editor element clj-in)]
        (handle-events in-editor
                       {:idle-msec 2000
                        :base-url "http://app.klipse.tech"
                        :on-should-eval #(eval-in-editor out-editor in-editor)}))))

(defn init [{:keys [selector]}]
  (doseq [element (array-seq (js/document.querySelectorAll selector))]
    (klipsify element)))
