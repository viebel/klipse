(ns klipse.ui
  (:require 
    cljsjs.codemirror
    cljsjs.codemirror.mode.clojure
    cljsjs.codemirror.mode.javascript
    cljsjs.codemirror.addon.edit.matchbrackets
    cljsjs.codemirror.addon.display.placeholder
    [klipse.utils :refer [add-url-parameter url-parameters debounce]]
    [klipse.compiler :refer [eval compile]]
    [gadjett.core :as gadjett :refer-macros [deftrack dbg]]
    [goog.dom :as gdom]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]))

(enable-console-print!)
(js/initMirrorCustomExtensions)

(deftrack eval-js [s]
  (let [[status res] (eval s)]
    (.log js/console res)
    [status (.stringify js/JSON res nil 4)]))

(deftrack eval-clj [s]
  (let [[status res] (eval s)]
    [status (str res)]))

;; =============================================================================
;; Reads

(defn read [{:keys [state]} key params]
  {:value (get @state key "")})


;; =============================================================================
;; Mutations

(defmulti mutate om/dispatch)

(defmethod mutate 'input/save [{:keys [state]} _ {:keys [value]}]
  {:action (fn [] (swap! state assoc :input value))})

(defmethod mutate 'cljs/compile [{:keys [state]} _ {:keys [value]}]
  {:action (fn [] (swap! state update :compilation (partial compile value)))})

(defmethod mutate 'js/eval [{:keys [state]} _ {:keys [value]}]
  {:action (fn [] (swap! state update :evaluation-js (partial eval-js value)))})

(defmethod mutate 'clj/eval [{:keys [state]} _ {:keys [value]}]
  {:action (fn [] (swap! state update :evaluation-clj (partial eval-clj value)))})

(deftrack create-url-with-input [input]
  (doto (add-url-parameter :cljs_in input)
        print
        js/alert))

(deftrack process-input [compiler s]
  (when-not (clojure.string/blank? s)
    (om/transact! compiler 
         [(list 'input/save     {:value s})
          (list 'cljs/compile   {:value s})
          (list 'js/eval        {:value s})
          (list 'clj/eval       {:value s})])))


;; =============================================================================
;; CodeMirror

(def config-editor-cljs 
  {:lineNumbers true
   :matchBrackets true 
   :autoCloseBrackets true
   :mode "clojure"})

(def config-editor-js 
  {:lineNumbers true
   :matchBrackets true 
   :autoCloseBrackets true
   :mode "javascript"
   :readOnly true})
               
(defn set-option [editor option value]
  (.setOption editor option value))

(defn get-value 
  ([editor] (.getValue editor))
  ([editor sep] (.getValue editor sep)))

(defn set-value [editor value] 
  (.setValue editor value)
  editor)

(defn select-all [editor]
  (->
    (.-commands js/CodeMirror)
    (.selectAll editor))
  editor)

(defn goto-start [editor]
  (->
    (.-commands js/CodeMirror)
    (.goDocStart editor))
  editor)

(defn auto-format [editor]
  (select-all editor)
  (let [from (.getCursor editor true)
        to (.getCursor editor false)]
    (.autoFormatRange editor from to))
  editor)

(defn auto-indent [editor]
  (select-all editor)
  (let [from (.getCursor editor true)
        to (.getCursor editor false)]
    (.autoIndentRange editor from to))
  editor)

(defn ctrl-enter [editor]
  (js/console.log (.getValue (.getDoc editor))))

(defmulti create-editor (fn [k _] k))

(defmethod create-editor :cljs 
  [_ compiler]
  (let [editor (js/CodeMirror.fromTextArea
                  (js/document.getElementById "code-cljs") 
                  (clj->js config-editor-cljs))
        idle-time 3000
        fn-process #(process-input compiler (get-value editor))] 
    (fn-process)
    (.on editor "change" (debounce fn-process idle-time))
    (set-option editor "extraKeys" 
        #js {"Ctrl-S" #(create-url-with-input (get-value editor))
             "Ctrl-Enter" fn-process})))

(defmethod create-editor :js 
  [_ compiler]
  (js/CodeMirror.fromTextArea
    (js/document.getElementById "code-js") 
    (clj->js config-editor-js)))

;; =============================================================================
;; Components

(defn logo [status base]
  (as->
    (case status
      :ok "ok"
      :error "error"
      "base") $
    (str "img/" base "-" $ ".png")))

(defn input-ui [compiler {:keys [input]} default-value height-class width-class]
  (dom/section #js {:id "input-ui"
                    :className (str height-class " " width-class)}
               (dom/img #js {:src "img/cljs.png"
                             :width 40
                             :className "what"})
               (dom/textarea #js {:autoFocus true
                                  :value (or input default-value)
                                  :id "code-cljs"
                                  :placeholder ";; Write your clojurescript expression \n;; and press Ctrl-Enter or wait for 3 sec to experiment the magic..."})))

(defn compile-cljs-ui [{:keys [compilation]} height-class width-class]
  (let [[status result] compilation
        status-class (if (= :ok status) "ok" "error")]
    (dom/section #js {:id "compile-cljs-ui"
                      :className (str height-class " " width-class)}
                 (dom/img #js {:src "img/js.png"
                               :width 35
                               :className "what"})
                 (dom/textarea #js {:id "code-js"
                                    ; :className status-class
                                    :placeholder ";; Press Ctrl-Enter or wait for 3 sec to transpile..."}))))

(defn evaluate-clj-ui [{:keys [evaluation-clj]} height-class width-class]
  (let [[status result] evaluation-clj
        status-class (if (= :ok status) "ok" "error")]
    (dom/section #js {:id "evaluate-clj-ui"
                      :className (str height-class " " width-class)}
                 (dom/img #js {:src (logo status "cljs")
                               :width 40
                               :className (str "what " status-class)})
                 (dom/textarea #js {:value result
                                    :className status-class
                                    :placeholder ";; Press Ctrl-Enter or wait for 3 sec to eval in clojure..."
                                    :readOnly true}))))

(defn evaluate-js-ui [{:keys [evaluation-js]} height-class width-class]
  (let [[status result] evaluation-js
        status-class (if (= :ok status) "ok" "error")]
    (dom/section #js {:id "evaluate-js-ui"
                      :className (str height-class " " width-class)}
                 (dom/img #js {:src (logo status "js")
                               :width 35
                               :className (str "what " status-class)})
                 (dom/textarea #js {:value result
                                    :className status-class
                                    :placeholder ";; Press Ctrl-Enter or wait for 3 sec to eval in js..."
                                    :readOnly true}))))

(def height-classes
  {:js_only {:input "height-js-up" :compile-cljs "height-js-down"}
   :eval_only {:input "height80" :evaluate-clj "height20"}
   :default {:input "height80" :compile-cljs "height80" :evaluate-clj "height20" :evaluate-js "height20"}})

(defui CompilerUI

  static om/IQuery
  (query [this] 
         '[:input :compilation :evaluation-js :evaluation-clj])

  Object
  
  (componentDidUpdate [this prev-props prev-state]
    (let [[status result] (:compilation (om/props this))]
      (when result
        (->>
          (if (= :ok status) result " ")
          (set-value (om/get-state this :editor))
          (auto-format)
          (auto-indent)
          (goto-start)
          ))))

  (componentDidMount [this]
                     (create-editor :cljs this)
                     (om/set-state! this {:editor (create-editor :js this)}))

  (render [this]
          (let [{:keys [js_only eval_only cljs_in]} (url-parameters)
                width-class (if (or js_only eval_only) "full-width" "half-width")
                height-key (cond js_only :js_only eval_only :eval_only :default :default)]
            (as->
              (om/props this) $
              (dom/div #js {:className "container"}
                       (input-ui this $ cljs_in (get-in height-classes [height-key :input]) width-class)
                       (when-not eval_only
                         (compile-cljs-ui $ (get-in height-classes [height-key :compile-cljs]) width-class))
                       (when-not js_only
                         (evaluate-clj-ui $ (get-in height-classes [height-key :evaluate-clj]) width-class))
                       (when-not (or eval_only js_only)
                         (evaluate-js-ui $ (get-in height-classes [height-key :evaluate-js]) width-class)))))))


;; =============================================================================
;; Init

(defonce app-state (atom
  {:input ""
   :compilation ""
   :evaluation-js ""
   :evaluation-clj ""}))

(def parser (om/parser {:read read 
                        :mutate mutate}))

(def reconciler 
  (om/reconciler 
    {:state app-state 
     :parser parser}))

(om/add-root! reconciler CompilerUI (gdom/getElement "compiler"))
