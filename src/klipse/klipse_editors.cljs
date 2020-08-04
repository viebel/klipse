(ns klipse.klipse-editors
  (:require-macros
   [gadjett.core :refer [dbg]]
   [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [goog.dom :as gdom]
   [applied-science.js-interop :as j]
   [gadjett.collections :refer [compactize-map]]
   [cljs.spec.alpha :as s]
   [klipse.utils :refer [verbose?]]
   [klipse.dom-utils :refer [create-div-after value add-event-listener]]
   [cljs.core.async :refer [put! <! chan timeout alts!]]
   [klipse.ui.editors.common :refer [handle-events]]
   [klipse.ui.editors.editor :refer [trigger-autocomplete current-token create-editor-after-element replace-element-by-editor set-value-and-beautify get-selection-when-selected]]))

(defn create-state [& {:keys [result-element container editor-args]}]
  (atom {:eval-counter 0
         :editor-args editor-args
         :cmd-chan (chan)
         :container-id (when container (aget container "id"))
         :container container
         :result-element-id (when result-element (aget result-element "id"))
         :result-element result-element}))

(defn klipse-result-attrs [n]
  {:class "klipse-result"
   :id (str "klipse-result-" n)})

(defn klipse-container-attrs [n]
  {:class "klipse-container"
   :id (str "klipse-container-" n)})

(defn eval-in-editor
  "
  Evaluates the `value` - with `preamble` prepended to it.
  If `setter` is defined, call `setter` with the result of the evaluation.
  Block until the first evaluation.
  Call `setter` with subsequent evaluations asynchronously. Subsequent evaluations don't include `preamble`.
  (Subsequent evaluations occur with `server-eval` where printing results are written on the channel, one after the other.
  In the case of client side evaluation, the channel is closed after the first message on the channel (this is done implicitly by `go`).
  "
  [eval-fn src-code unsafe-setter {:keys [loop-msec preamble]} state]
  (when (verbose?)
    (js/console.info "Evaluating: " src-code))
  (go
    (let [setter (or unsafe-setter any?)]
                                        ; it is important to block until the first evaluation because other klipse snippets might depend on this evaluation. E.g. when a snippet uses a function defined in a previous snippet.
      (try
        (let [{:keys [cmd-chan eval-counter]} @state]
          (when-not (zero? eval-counter)
            (put! cmd-chan :reset))
          (swap! state update-in [:eval-counter] inc)
          (let [evaluation-chan (eval-fn (str preamble src-code) @state)
                result (<! evaluation-chan)
                first-result (if (string? result) result (:data result))]
            (setter first-result)
            (when loop-msec
              (go-loop []
                (let [[cmd c] (alts! [cmd-chan (timeout loop-msec)])]
                  (when-not (and (= c cmd-chan)
                                 (= cmd :reset))
                    (let [res (<! (eval-fn src-code @state))]
                      (setter res))
                    (recur)))))

            (go-loop [previous-results first-result]
              (let [raw-result (<! evaluation-chan)
                    result (if (map? raw-result) (:data raw-result) raw-result)
                    remove-previous-results? (and (map? raw-result) (:remove-previous-results raw-result))
                    results (str (when-not remove-previous-results? previous-results) result)]
                (when (some? result) ;exit if the channel is closed
                  (setter results)
                  (recur results))))))
        (catch :default e
          (setter e))))))

(defn eval-in-codemirror-editor [eval-fn result-element editor-source snippet-args mode state]
  (let [editor-args (:editor-args @state)]
    (eval-in-editor eval-fn
                    (get-selection-when-selected editor-source)
                    (when result-element #(set-value-and-beautify result-element mode % {:indent? (:indent-output? editor-args)
                                                                                         :remove-ending-comments? false}))
                    snippet-args
                    state)))

(defn eval-in-dom-editor [eval-fn result-element source snippet-args state]
  (eval-in-editor eval-fn
                  (or (value source) (aget source "textContent"))
                  (when result-element (partial gdom/setTextContent result-element))
                  snippet-args
                  state))

(defn wrap-result-in-html [elem res]
  (let [wrapped-res (if (= (type res) js/Error)
                      (str "<div class=\"klipse-error\">" res "</div>")
                      res)]
    (j/assoc! elem :innerHTML wrapped-res)))

(defn eval-in-html-editor [eval-fn result-element editor-source snippet-args state]
  (eval-in-editor eval-fn
                  (get-selection-when-selected editor-source)
                  (when result-element (partial wrap-result-in-html result-element))
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
  {:matchBrackets true})

(defn editor-options [editor-in-mode editor-out-mode codemirror-options-in codemirror-options-out]
  [(-> (assoc default-editor-options :mode editor-in-mode)
       (merge codemirror-options-in))
   (-> (assoc default-editor-options :mode editor-out-mode :readOnly true)
       (merge codemirror-options-out))])


(defmulti create-editor
  "Creates editor (both input editors and output editors)
  ** :code-mirror: The input editor is codemirror. The output editor is codemirror
  ** :html: The input editor is codemirror. The output editor is html
  ** :dom: The input editor is plain text. The output editor is plain text "
  (fn [type _] type))

(defmethod create-editor :html [_ {:keys [snippet-num element source-code eval-fn default-txt idle-msec editor-in-mode editor-out-mode indent? codemirror-options-in codemirror-options-out loop-msec preamble no-result on-edit-cb] :as editor-args}]
  (let [[in-editor-options _] (editor-options editor-in-mode editor-out-mode codemirror-options-in codemirror-options-out)
        container (create-div-after element (klipse-container-attrs snippet-num))
        result-element (when-not no-result (create-div-after element (klipse-result-attrs snippet-num)))
        in-editor (replace-element-by-editor element source-code in-editor-options :indent? indent?)
        snippet-args {:loop-msec loop-msec
                      :preamble preamble}
        state (create-state :container container :result-element result-element :editor-args editor-args)]
    (when result-element (gdom/setTextContent result-element default-txt))
    (handle-events in-editor
                   {:idle-msec      idle-msec
                    :on-should-eval #(do (eval-in-html-editor eval-fn result-element in-editor snippet-args state)
                                         (on-edit-cb))})
    #(eval-in-html-editor eval-fn result-element in-editor snippet-args state)))

(def editors (atom {}))
(defn add-editor [editor snippet-num]
  (swap! editors assoc snippet-num editor)
  (j/assoc! js/window :klipse_editors (clj->js @editors)))

(defmethod create-editor :code-mirror [_ {:keys [mode snippet-num element source-code eval-fn default-txt idle-msec editor-in-mode editor-out-mode indent? codemirror-options-in codemirror-options-out loop-msec preamble no-result on-edit-cb] :as editor-args}]
  (let [[in-editor-options out-editor-options] (editor-options editor-in-mode editor-out-mode codemirror-options-in codemirror-options-out)
        container  (create-div-after element (klipse-container-attrs snippet-num))
        _ (create-div-after container {:class "klipse-separator"})
        result-element (when-not no-result
                         (create-editor-after-element element default-txt out-editor-options
                                                      :indent? false
                                                      :remove-ending-comments? false
                                                      :klass ["klipse-result" (str "klipse-" mode)])) ; must be called before `element` is replaced

        in-editor (replace-element-by-editor element source-code in-editor-options :indent? indent? :klass ["klipse-snippet" (str "klipse-" mode)])
        snippet-args {:loop-msec loop-msec
                      :preamble preamble}
        state (create-state :container container :result-element result-element :editor-args editor-args)]
    (handle-events in-editor
                   (compactize-map {:idle-msec      idle-msec
                                    :on-completion  (when (= "clojure" editor-in-mode)
                                                      #(trigger-autocomplete in-editor (j/call-in js/window [:klipse_clj :lang :clojure :completions] (current-token in-editor))))
                                    :on-should-eval #(do (eval-in-codemirror-editor eval-fn result-element in-editor snippet-args editor-out-mode state)
                                                         (on-edit-cb))}))
    (add-editor in-editor snippet-num)
    #(eval-in-codemirror-editor eval-fn result-element in-editor snippet-args editor-out-mode state)))

(defmethod create-editor :dom [_ {:keys [snippet-num element eval-fn default-txt loop-msec preamble no-result] :as editor-args}]
  (let [container  (create-div-after element (klipse-container-attrs snippet-num))
        result-element (when-not no-result (create-div-after element (klipse-result-attrs snippet-num)))
        snippet-args {:loop-msec loop-msec
                      :preamble preamble}
        state (create-state :container container :result-element result-element :editor-args editor-args)]
    (when result-element (gdom/setTextContent result-element default-txt))
    (add-event-listener element "input" #(eval-in-dom-editor eval-fn result-element element snippet-args state))
    #(eval-in-dom-editor eval-fn result-element element snippet-args state)))
