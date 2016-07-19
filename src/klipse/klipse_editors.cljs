(ns klipse.klipse-editors
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require 
    [goog.dom :as gdom]
    [cljs.spec :as s]
    [klipse.dom-utils :refer [create-div-after value add-event-listener]]
    [cljs.core.async :refer [<!]]
    [klipse.ui.editors.common :refer [handle-events]]
    [klipse.ui.editors.editor :refer [create-editor-after-element replace-element-by-editor set-value get-value]]
    [gadjett.core :as gadjett :refer-macros [dbg]]))

(defn eval-in-editor
  "
  Evaluates the `value` and call `setter` with the result of the evaluation.
  Block until the first evaluation.
  Call `setter` with subsequent evaluations asynchronously.
  (Subsequent evaluations occur with `server-eval` where printing results are written on the channel, one after the other.
  In the case of client side evaluation, the channel is closed after the first message on the channel (this is done implicitly by `go`).
  "
  [eval-fn src-code setter]
  (go
    ; it is important to block until the first evaluation because other klipse snippets might depend on this evaluation. E.g. when a snippet uses a function defined in a previous snippet.
    (let [evaluation-chan (eval-fn src-code)
          first-result (<! evaluation-chan)]
      (setter first-result)
      (go-loop [previous-results first-result]
               (let [result (<! evaluation-chan)
                     results (str previous-results result)]
                 (when (some? result) ;exit if the channel is closed
                   (setter results)
                   (recur results)))))))

(defn eval-in-codemirror-editor [eval-fn editor-target editor-source]
  (eval-in-editor eval-fn
                  (get-value editor-source)
                  (partial set-value editor-target)))

(defn eval-in-dom-editor [eval-fn target source]
  (eval-in-editor eval-fn
                  (value source)
                  (partial gdom/setTextContent target)))

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
      (<! (eval-in-codemirror-editor eval-fn out-editor in-editor))
      (handle-events in-editor
                     {:idle-msec idle-msec
                      :on-should-eval #(eval-in-codemirror-editor eval-fn out-editor in-editor)}))))

(defmethod create-editor :dom [_ {:keys [element out-editor-options source-code in-editor-options eval-fn default-txt idle-msec]}]
  (go
    (let [out-editor (create-div-after element)]
      (gdom/setTextContent out-editor default-txt)
      (<! (eval-in-dom-editor eval-fn out-editor element))
      (add-event-listener element "input" #(eval-in-dom-editor eval-fn out-editor element)))))

(comment
  (s/instrument #'editor-options))
