(ns my-cljs-compiler-in-cljs.compiler
  (:require 
    cljsjs.codemirror
    cljsjs.codemirror.mode.clojure
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
                               (do
                                 (.log js/console value)
                                 value))]
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

(def config-editor 
  {:lineNumbers true
   :matchBrackets true 
   :autoCloseBrackets true
   :mode "clojure"})
               
(defn set-option [editor option value]
  (.setOption editor option value))

(defn get-value 
  ([editor] (.getValue editor))
  ([editor sep] (.getValue editor sep)))

(defn ctrl-enter [editor]
  (js/console.log (.getValue (.getDoc editor))))

(defn create-editor [compiler config]
  (let [editor (js/CodeMirror.fromTextArea
                  (js/document.getElementById "code") 
                  (clj->js config))] 
    (set-option editor "extraKeys" 
        #js {"Ctrl-Enter" #(process-input compiler (get-value editor))})))


;; =============================================================================
;; Components

(defn logo [status base]
  (as->
    (case status
      :ok "ok"
      :error "error"
      "base") $
    (str "img/" base "-" $ ".png")))

(defn input-ui [compiler]
  (dom/section nil
    (dom/img #js {:src "img/cljs.png"
                  :width 40
                  :className "what"})
    (dom/textarea #js {:autoFocus true
                       :id "code"})))

(defn compile-cljs-ui [{:keys [compilation]}]
  (let [[status result] compilation
        status-class (if (= :ok status) "ok" "error")]
    (dom/section nil
                 (dom/img #js {:src "img/js.png"
                               :width 35
                               :className "what"})
                 (dom/textarea #js {:value result
                                    :className status-class
                                    :readOnly true}))))

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
    '[:compilation :evaluation-js :evaluation-clj])
  
  Object
  
  (componentDidMount [this]
    (create-editor this config-editor))
   
  (render [this]
    (as->
      (om/props this) $
      (dom/div #js {:className "container"}
        (input-ui this)
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
