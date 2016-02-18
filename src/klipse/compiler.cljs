(ns klipse.compiler
  (:require 
    cljsjs.codemirror
    cljsjs.codemirror.mode.clojure
    cljsjs.codemirror.mode.javascript
    cljsjs.codemirror.addon.edit.matchbrackets
    [gadjett.core :as gadjett :refer-macros [deftrack]]
    [goog.dom :as gdom]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [cljs.js :as cljs]))


;; =============================================================================
;; Compiler functions

;; create cljs.user
(set! (.. js/window -cljs -user) #js {})

(deftrack _compilation [s]
  (cljs/compile-str (cljs/empty-state) s
                    (fn [{:keys [value error]}]
                      (let [status (if error :error :ok)
                            res (if error 
                                  (.. error -cause -message)
                                  value)]
                        [status res]))
                    ))

(deftrack _eval [s]
  (cljs/eval-str (cljs/empty-state) s 'test {:eval cljs/js-eval} 
                 (fn [{:keys [value error]}]
                   (let [status (if error :error :ok)
                         res (if error 
                               (.. error -cause -message)
                               value)]
                     [status res]))))

(deftrack _evaluation-js [s]
  (let [[status res] (_eval s)]
    [status (.stringify js/JSON res nil 4)]))

(deftrack _evaluation-clj [s]
  (let [[status res] (_eval s)]
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
  {:action (fn [] (swap! state update :compilation (partial _compilation value)))})

(defmethod mutate 'js/eval [{:keys [state]} _ {:keys [value]}]
  {:action (fn [] (swap! state update :evaluation-js (partial _evaluation-js value)))})

(defmethod mutate 'clj/eval [{:keys [state]} _ {:keys [value]}]
  {:action (fn [] (swap! state update :evaluation-clj (partial _evaluation-clj value)))})

(deftrack process-input [compiler s]
  (om/transact! compiler 
       [(list 'input/save     {:value s})
        (list 'cljs/compile   {:value s})
        (list 'js/eval        {:value s})
        (list 'clj/eval       {:value s})]))


;; =============================================================================
;; CodeMirror

(def cljs-config 
  {:lineNumbers true
   :matchBrackets true 
   :autoCloseBrackets true
   :mode "clojure"})
               
(defn set-option [editor option value]
  (.setOption editor option value))

(defn get-value [editor] 
  (.getValue editor))

(defn set-value [editor value] 
  (.setValue editor value)
  editor)

(defn select-all [editor]
  (->
    (.-commands js/CodeMirror)
    (.selectAll editor))
  editor)

(defn goto-end [editor]
  (->
    (.-commands js/CodeMirror)
    (.goDocEnd editor))
  editor)

(defn auto-format [editor]
  (js/console.log "mirsouflade")
  (select-all editor)
  (let [from (.getCursor editor true)
        to (.getCursor editor false)]
    (.autoFormatRange editor from to))
  (goto-end editor)
  editor)

(defn auto-indent [editor]
  (select-all editor)
  (let [from (.getCursor editor true)
        to (.getCursor editor false)]
    (.autoIndentRange editor from to))
  (goto-end editor)
  editor)

(defn cljs-editor [compiler]
  (let [editor (js/CodeMirror.fromTextArea
                  (js/document.getElementById "cljs-code") 
                  (clj->js cljs-config))] 
    (set-option editor "extraKeys" 
        #js {"Ctrl-Enter" #(process-input compiler (get-value editor))})))

(def js-config 
  {:lineNumbers true
   :matchBrackets true 
   :autoCloseBrackets true
   :mode "javascript"})

(defn js-editor [compiler]
  (js/CodeMirror.fromTextArea
    (js/document.getElementById "js-code") 
    (clj->js js-config)))


;; =============================================================================
;; Components

(defn logo [status base]
  (as->
    (case status
      :ok "ok"
      :error "error"
      "base") $
    (str "img/" base "-" $ ".png")))

(defui InputCljsUI
  static om/IQuery
  (query [this])
  
  Object
  
  (componentDidMount [this]
    (cljs-editor this))
   
  (render [this]
    (dom/section nil
      (dom/img #js {:src "img/cljs.png"
                    :width 40
                    :className "what"})
      (dom/textarea #js {:autoFocus true
                         :id "cljs-code"}))))

(def input-cljs-ui (om/factory InputCljsUI))

(defui CompileCljsUI
  Object
  
  (componentDidMount [this]
    (om/set-state! this {:editor (js-editor this)}))
  
  (componentDidUpdate [this prev-props prev-state]
    (let [[status result] (:compilation (om/props this))]
      (->>
        (if (= :ok status) result " ")
        (set-value (om/get-state this :editor))
        (auto-format)
        (auto-indent))))
   
  (render [this]
    (let [[status _] (:compilation (om/props this))
          status-class (if (= :ok status) "ok" "error")]
      (dom/section nil
                   (dom/img #js {:src "img/js.png"
                                 :width 35
                                 :className "what"})
                   (dom/textarea #js {:className status-class
                                      :readOnly true
                                      :id "js-code"})))))

(def compile-cljs-ui (om/factory CompileCljsUI))

(defn evaluate-clj-ui [{:keys [evaluation-clj]}]
  (let [[status result] evaluation-clj
        status-class (if (= :ok status) "ok" "error")]
    (dom/section nil
                 (dom/img #js {:src (logo status "cljs")
                               :width 40
                               :className (str "what " status-class)})
                 (dom/textarea #js {:value result
                                    :className status-class
                                    :readOnly true}))))

(defn evaluate-js-ui [{:keys [evaluation-js]}]
  (let [[status result] evaluation-js
        status-class (if (= :ok status) "ok" "error")]
    (dom/section nil
                 (dom/img #js {:src (logo status "js")
                               :width 35
                               :className (str "what " status-class)})
                 (dom/textarea #js {:value result
                                    :className status-class
                                    :readOnly true}))))


(defui CompilerUI
  
  static om/IQuery
  (query [this] 
     '[:compilation
       :evaluation-js 
       :evaluation-clj])
  
  Object
  (render [this]
    (as->
      (om/props this) $
      (dom/div #js {:className "container"}
        (input-cljs-ui)
        (compile-cljs-ui $)
        (evaluate-clj-ui $)
        (evaluate-js-ui $)))))


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
