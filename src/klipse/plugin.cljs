(ns klipse.plugin
  (:require 
    [klipse.ui.editors.cljs :refer [handle-events]]
    [klipse.ui.editors.editor :refer [create-editor-after-element replace-element-by-editor]]
    [gadjett.core :as gadjett :refer-macros [dbg]]
    [klipse.ui.editors.editor :refer [set-value get-value]] 
    [klipse.compiler :refer [str-eval str-compile]]))

(def language->eval-fn 
  {:clojure str-eval
   :javascript str-compile})

(def editor-options
  {:matchBrackets true 
   :scrollbarStyle "overlay"})

(defn eval-in-editor [eval-fn editor-target editor-source]
  (->> (get-value editor-source)
       eval-fn
       (set-value editor-target)))

(defn klipsify [element language]
  (let [eval-fn (language->eval-fn language)
        my-editor-options (assoc editor-options :mode (name language))]
    (when element
      (let [clj-in (.-textContent element);goog.dom/getTextContent removes new lines
            clj-out (eval-fn clj-in)
            out-editor (create-editor-after-element element clj-out (dbg (assoc my-editor-options :readOnly true)))
            in-editor (replace-element-by-editor element clj-in my-editor-options)]
        (handle-events in-editor
                       {:idle-msec 2000
                        :base-url "http://app.klipse.tech"
                        :on-should-eval #(eval-in-editor eval-fn out-editor in-editor)})))))

(defn klipsify-elements [elements language]
  (doseq [element elements]
    (klipsify element language)))

(defmulti init (fn [settings] (map? settings)))

(defmethod init false [js-settings]
  (init (js->clj js-settings :keywordize-keys true)))

(defmethod init true [{:keys [selector selector_js] :as settings}]
  (dbg settings)
  (klipsify-elements (dbg (array-seq (js/document.querySelectorAll selector_js))) :javascript)
  (klipsify-elements (dbg (array-seq (js/document.querySelectorAll selector))) :clojure))
