(ns klipse.klipse-editors
  (:require-macros
    [gadjett.core :refer [dbg]]
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

(defn create-state [result-element]
  (atom {:eval-counter 0
         :cmd-chan (chan)
         :result-element-id (aget result-element "id")
         :result-element result-element}))

(defn klipse-result-attrs [n]
  {:class "klipse-result"
   :id (str "klipse-result-" n)})

(defn klipse-container-attrs [n]
  {:class "klipse-container"
   :id (str "klipse-container-" n)})

(defn eval-in-editor
  "
  Evaluates the `value` - with `preamble` prepended to it - and call `setter` with the result of the evaluation.
  Block until the first evaluation.
  Call `setter` with subsequent evaluations asynchronously. Subsequent evaluations don't include `preamble`.
  (Subsequent evaluations occur with `server-eval` where printing results are written on the channel, one after the other.
  In the case of client side evaluation, the channel is closed after the first message on the channel (this is done implicitly by `go`).
  "
  [eval-fn src-code setter {:keys [loop-msec preamble]} state]
  (go
    ; it is important to block until the first evaluation because other klipse snippets might depend on this evaluation. E.g. when a snippet uses a function defined in a previous snippet.
    (try
      (let [{:keys [cmd-chan eval-counter]} @state]
        (when-not (zero? eval-counter)
          (put! cmd-chan :reset))
        (swap! state update-in [:eval-counter] inc)
        (let [evaluation-chan (eval-fn (str preamble src-code) @state)
              first-result (<! evaluation-chan)]
          (when setter (setter first-result))
          (when loop-msec
            (go-loop []
                     (let [[cmd c] (alts! [cmd-chan (timeout loop-msec)])]
                       (when-not (and (= c cmd-chan)
                                      (= cmd :reset))
                         (let [res (<! (eval-fn src-code @state))]
                           (when setter (setter res)))
                         (recur)))))

          (go-loop [previous-results first-result]
                   (let [result (<! evaluation-chan)
                         results (str previous-results result)]
                     (when (some? result) ;exit if the channel is closed
                       (setter results)
                       (recur results))))))
      (catch :default e
        (setter e)))))

(defn eval-in-codemirror-editor [eval-fn editor-target editor-source snippet-args mode state]
  (eval-in-editor eval-fn
                  (get-value editor-source)
                  (when editor-target #(set-value-and-beautify editor-target mode % {:indent? false
                                                                                     :remove-ending-comments? false}))
                  snippet-args
                  state))

(defn eval-in-dom-editor [eval-fn target source snippet-args state]
    (eval-in-editor eval-fn
                  (or (value source) (aget source "textContent"))
                  (when target (partial gdom/setTextContent target))
                  snippet-args
                  state))

(defn wrap-result-in-html [elem res]
  (let [wrapped-res (if (= (type res) js/Error)
                      (str "<div class=\"klipse-error\">" res "</div>")
                      res)]
    (! elem.innerHTML wrapped-res)))

(defn eval-in-html-editor [eval-fn target editor-source snippet-args state]
  (eval-in-editor eval-fn
                  (get-value editor-source)
                  (when target (partial wrap-result-in-html target))
                  snippet-args
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

(defmethod create-editor :html [_ {:keys [snippet-num element source-code eval-fn default-txt idle-msec editor-in-mode editor-out-mode indent? codemirror-options-in codemirror-options-out loop-msec preamble no-result]}]
  (let [[in-editor-options out-editor-options] (editor-options editor-in-mode editor-out-mode codemirror-options-in codemirror-options-out)
        container (create-div-after element (klipse-container-attrs snippet-num))
        out-editor (when-not no-result (create-div-after element (klipse-result-attrs snippet-num)))
        in-editor (replace-element-by-editor element source-code in-editor-options :indent? indent?)
        snippet-args {:loop-msec loop-msec
                      :preamble preamble}
        
        state (create-state out-editor)]
    (gdom/setTextContent out-editor default-txt)
    (handle-events in-editor
                   {:idle-msec idle-msec
                    :on-should-eval #(eval-in-html-editor eval-fn out-editor in-editor snippet-args state)})
    #(eval-in-html-editor eval-fn out-editor in-editor snippet-args state)))

(defmethod create-editor :code-mirror [_ {:keys [snippet-num element source-code eval-fn default-txt idle-msec editor-in-mode editor-out-mode indent? codemirror-options-in codemirror-options-out loop-msec preamble no-result]}]
  (let [[in-editor-options out-editor-options] (editor-options editor-in-mode editor-out-mode codemirror-options-in codemirror-options-out)
        container  (create-div-after element (klipse-container-attrs snippet-num))
        out-editor (when-not no-result (create-editor-after-element element default-txt out-editor-options :indent? false :remove-ending-comments? false)) ; must be called before `element` is replaced

        in-editor (replace-element-by-editor element source-code in-editor-options :indent? indent?)
        snippet-args {:loop-msec loop-msec
                      :preamble preamble}
        state (create-state container)]
    (handle-events in-editor
                   {:idle-msec idle-msec
                    :on-should-eval #(eval-in-codemirror-editor eval-fn out-editor in-editor snippet-args editor-out-mode state)})
    #(eval-in-codemirror-editor eval-fn out-editor in-editor snippet-args editor-out-mode state)))

(defmethod create-editor :dom [_ {:keys [snippet-num element out-editor-options source-code in-editor-options eval-fn default-txt idle-msec loop-msec preamble no-result]}]
  (let [container  (create-div-after element (klipse-container-attrs snippet-num))
        out-editor (when-not no-result (create-div-after element (klipse-result-attrs snippet-num)))
        snippet-args {:loop-msec loop-msec
                      :preamble preamble}
        state (create-state out-editor)]
    (gdom/setTextContent out-editor default-txt)
    (add-event-listener element "input" #(eval-in-dom-editor eval-fn out-editor element snippet-args state))
    #(eval-in-dom-editor eval-fn out-editor element snippet-args state)))

(comment
  (s/instrument #'editor-options))
