(ns klipse.klipse-editors
  (:require-macros
    [purnam.core :refer [!]]
    [cljs.core.async.macros :refer [go go-loop]])
  (:require 
    [goog.dom :as gdom]
    [goog.dom :as gdom]
    [cljs.spec :as s]
    [klipse.dom-utils :refer [create-div-after value add-event-listener]]
    [cljs.core.async :refer [put! <! chan timeout alts!]]
    [klipse.ui.editors.common :refer [handle-events]]
    [klipse.ui.editors.editor :refer [create-editor-after-element replace-element-by-editor set-value-and-beautify get-value]]))

(defn create-state []
  (atom {:eval-counter 0
         :cmd-chan (chan)}))

(defn eval-in-editor
  "
  Evaluates the `value` and call `setter` with the result of the evaluation.
  Block until the first evaluation.
  Call `setter` with subsequent evaluations asynchronously.
  (Subsequent evaluations occur with `server-eval` where printing results are written on the channel, one after the other.
  In the case of client side evaluation, the channel is closed after the first message on the channel (this is done implicitly by `go`).
  "
  [eval-fn src-code setter loop-msec state]
  (go
    ; it is important to block until the first evaluation because other klipse snippets might depend on this evaluation. E.g. when a snippet uses a function defined in a previous snippet.
    (let [{:keys [cmd-chan eval-counter]} @state]
      (when-not (zero? eval-counter)
        (put! cmd-chan :reset))
      (swap! state update-in [:eval-counter] inc)
      (let [evaluation-chan (eval-fn src-code)
            first-result (<! evaluation-chan)]
        (setter first-result)
        (when loop-msec
          (go-loop []
                   (let [[cmd c] (alts! [cmd-chan (timeout loop-msec)])]
                     (when-not (and (= c cmd-chan)
                                    (= cmd :reset))
                       (setter (<! (eval-fn src-code)))
                       (recur)))))

        (go-loop [previous-results first-result]
                 (let [result (<! evaluation-chan)
                       results (str previous-results result)]
                   (when (some? result) ;exit if the channel is closed
                     (setter results)
                     (recur results))))))))

(defn eval-in-codemirror-editor [eval-fn editor-target editor-source loop-msec mode state]
  (eval-in-editor eval-fn
                  (get-value editor-source)
                  (partial set-value-and-beautify editor-target mode)
                  loop-msec
                  state))

(defn eval-in-dom-editor [eval-fn target source loop-msec state]
  (eval-in-editor eval-fn
                  (or (value source) (aget source "textContent"))
                  (partial gdom/setTextContent target)
                  loop-msec
                  state))

(defn eval-in-html-editor [eval-fn target editor-source loop-msec state]
  (eval-in-editor eval-fn
                  (get-value editor-source)
                  #(! target.innerHTML %)
                  loop-msec
                  state))

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

(defmethod create-editor :html [_ {:keys [element source-code eval-fn default-txt idle-msec editor-in-mode editor-out-mode beautify? codemirror-options-in codemirror-options-out loop-msec]}]
  (let [[in-editor-options out-editor-options] (editor-options editor-in-mode editor-out-mode codemirror-options-in codemirror-options-out)
        out-editor (create-div-after element)
        in-editor (replace-element-by-editor element source-code in-editor-options :beautify? beautify?)
        state (create-state)]
    (handle-events in-editor
                   {:idle-msec idle-msec
                    :on-should-eval #(eval-in-html-editor eval-fn out-editor in-editor loop-msec state)})
    #(eval-in-html-editor eval-fn out-editor in-editor loop-msec state)))

(defmethod create-editor :code-mirror [_ {:keys [element source-code eval-fn default-txt idle-msec editor-in-mode editor-out-mode beautify? codemirror-options-in codemirror-options-out loop-msec]}]
  (let [[in-editor-options out-editor-options] (editor-options editor-in-mode editor-out-mode codemirror-options-in codemirror-options-out)
        out-editor (create-editor-after-element element default-txt out-editor-options); must be called before `element` is replaced
        in-editor (replace-element-by-editor element source-code in-editor-options :beautify? beautify?)
        state (create-state)]
    (handle-events in-editor
                   {:idle-msec idle-msec
                    :on-should-eval #(eval-in-codemirror-editor eval-fn out-editor in-editor loop-msec editor-out-mode state)})
    #(eval-in-codemirror-editor eval-fn out-editor in-editor loop-msec editor-out-mode state)))

(defmethod create-editor :dom [_ {:keys [element out-editor-options source-code in-editor-options eval-fn default-txt idle-msec loop-msec]}]
  (let [out-editor (create-div-after element)
        state (create-state)]
    (gdom/setTextContent out-editor default-txt)
    (add-event-listener element "input" #(eval-in-dom-editor eval-fn out-editor element loop-msec state))
    #(eval-in-dom-editor eval-fn out-editor element loop-msec state)))

(comment
  (s/instrument #'editor-options))
