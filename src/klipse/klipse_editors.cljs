(ns klipse.klipse-editors
  (:require-macros
    [cljs.core.async.macros :refer [go]])
  (:require 
    [goog.dom :as gdom]
    [cljs.spec :as s]
    [klipse.dom-utils :refer [create-div-after value add-event-listener]]
    [cljs.core.async :refer [<!]]
    [klipse.ui.editors.common :refer [handle-events]]
    [klipse.ui.editors.editor :refer [create-editor-after-element replace-element-by-editor set-value get-value]]
    [gadjett.core :as gadjett :refer-macros [dbg]]))

(defn eval-in-editor [eval-fn editor-target editor-source]
  (go
    (->> (get-value editor-source)
         eval-fn
         <!
         (set-value editor-target))))

(defn eval-in-dom-editor [eval-fn target source]
  (go
    (->> (value source)
         eval-fn
         <!
         (gdom/setTextContent target))))



(s/def ::codemirror-options map?)
(s/def ::editor-mode string?)

(s/fdef editor-options 
        :args (s/cat :in-mode ::editor-mode
                     :out-mode ::editor-mode
                     :options-in ::codemirror-options
                     :options-out ::codemirror-options))

(def default-editor-options
  {:matchBrackets true 
   :scrollbarStyle "overlay"})

(defn editor-options [editor-in-mode editor-out-mode codemirror-options-in codemirror-options-out]
  [(-> (assoc default-editor-options :mode editor-in-mode)
       (merge codemirror-options-in))
   (-> (assoc default-editor-options :mode editor-out-mode :readOnly true)
       (merge codemirror-options-out))])


(defmulti create-editor (fn [type _] type))

(defmethod create-editor :code-mirror [_ {:keys [element source-code eval-fn default-txt idle-msec editor-in-mode editor-out-mode codemirror-options-in codemirror-options-out]}]
  (go
    (let [[in-editor-options out-editor-options] (editor-options editor-in-mode editor-out-mode codemirror-options-in codemirror-options-out)
          out-editor (create-editor-after-element element default-txt out-editor-options); must be called before `element` is replaced
          in-editor (replace-element-by-editor element source-code in-editor-options)]
      (set-value out-editor (dbg (str (<! (eval-fn source-code)))))
      (handle-events in-editor
                     {:idle-msec idle-msec
                      :on-should-eval #(eval-in-editor eval-fn out-editor in-editor)}))))

(defmethod create-editor :dom [_ {:keys [element out-editor-options source-code in-editor-options eval-fn default-txt idle-msec]}]
  (go
    (let [out-editor (create-div-after element)]
      (gdom/setTextContent out-editor default-txt)
      (gdom/setTextContent out-editor (dbg (str (<! (eval-fn source-code)))))
      (add-event-listener element "input" #(eval-in-dom-editor eval-fn out-editor element)))))

(comment
  (s/instrument #'editor-options))
