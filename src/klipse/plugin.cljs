(ns klipse.plugin
  (:require-macros
    [cljs.core.async.macros :refer [go]])
  (:require 
    [clojure.string :as string :refer [trim split]]
    [klipse.ui.editors.common :refer [handle-events]]
    [klipse.ui.editors.editor :refer [create-editor-after-element replace-element-by-editor set-value get-value]]
    [gadjett.core :as gadjett :refer-macros [dbg]]
    [klipse.compiler :refer [str-eval-async str-eval str-compile-async]]))

(def app-url "http://app.klipse.tech")

(def language->eval-fn 
  {:clojure str-eval-async
   :javascript str-compile-async})

(def editor-options
  {:matchBrackets true 
   :scrollbarStyle "overlay"})

(defn eval-in-editor [eval-fn editor-target editor-source]
  (go
  (->> (get-value editor-source)
       eval-fn
       <!
       (set-value editor-target))))

(defn klipsify [element language]
  (go
    (let [eval-fn (language->eval-fn language)
          my-editor-options (assoc editor-options :mode (name language))]
      (when element
        (let [clj-in (.-textContent element);goog.dom/getTextContent removes new lines
              eval-fn-with-args #(eval-fn %)
              out-editor (create-editor-after-element element ";the evaluation will appear here (soon)..." (dbg (assoc my-editor-options :readOnly true))); must be called before `element` is replaced
              in-editor (replace-element-by-editor element clj-in my-editor-options)]
          (set-value out-editor (<! (eval-fn-with-args clj-in)))
          (handle-events in-editor
                         {:idle-msec 2000
                          :base-url app-url
                          :on-should-eval #(eval-in-editor eval-fn-with-args out-editor in-editor)}))))))

(defn klipsify-elements [elements language]
  (go
    (time
      (doseq [element elements]
        (<! (klipsify element language))))))

(defmulti init (fn [settings] (map? settings)))

(defmethod init false [js-settings]
  (init (js->clj js-settings :keywordize-keys true)))

(defmethod init true [{:keys [selector selector_js] :as settings}]
  (dbg settings)
  (klipsify-elements (dbg (array-seq (js/document.querySelectorAll selector_js))) :javascript)
  (klipsify-elements (dbg (array-seq (js/document.querySelectorAll selector))) :clojure))
