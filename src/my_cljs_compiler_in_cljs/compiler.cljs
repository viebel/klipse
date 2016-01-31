(ns my-cljs-compiler-in-cljs.compiler
  (:require-macros [gadjett.core :refer [dbg]])
  (:require 
    [goog.dom :as gdom]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [cljs.js :as cljs]))


;; =============================================================================
;; Compiler functions

;; create cljs.user
(set! (.. js/window -cljs -user) #js {})

(defn _compilation [s]
  (cljs/compile-str (cljs/empty-state) s
    (fn [{:keys [value error]}]
      (if error
        (println "compile error: " error)   
        (if error 
          (.. error -cause -message)
          value)))))

(defn _evaluation-js [s]
  (cljs/eval-str (cljs/empty-state) s 'test {:eval cljs/js-eval} 
                 (fn [{:keys [error value]}]
                   (when error
                     (println "eval error: " error))
                   (let [res (if error 
                               (.. error -cause -message)
                               value)]
                     (.stringify js/JSON res nil 4)))))

(defn _evaluation-clj [s]
  (cljs/eval-str (cljs/empty-state) s 'test {:eval cljs/js-eval} 
     (fn [{:keys [value error]}]
       (when error
         (println "eval error: " error))
       (let [res (if error 
                   (.. error -cause -message)
                   value)]
         (str res)))))


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

(defn process-input [compiler s]
  (om/transact! compiler 
       [(list 'input/save     {:value s})
        (list 'cljs/compile   {:value s})
        (list 'js/eval        {:value s})
        (list 'clj/eval       {:value s})]))


;; =============================================================================
;; Components

(defn input-ui [compiler]
  (dom/section nil
    (dom/img #js {:src "img/cljs.png"
                  :width 40
                  :className "what"})
    (dom/textarea #js {:onChange #(process-input compiler (.. % -target -value))
                       :autoFocus true})))

(defn compile-cljs-ui [{:keys [compilation]}]
  (dom/section nil
    (dom/img #js {:src "img/js.png"
                  :width 40
                  :className "what"})
    (dom/textarea #js {:value compilation
                       :readOnly true})))

(defn evaluate-clj-ui [{:keys [evaluation-clj]}]
  (dom/section nil
    (dom/img #js {:src "img/cljs.png"
                  :width 40
                  :className "what eval"})
    (dom/textarea #js {:value evaluation-clj
                       :readOnly true})))

(defn evaluate-js-ui [{:keys [evaluation-js]}]
  (dom/section nil
    (dom/img #js {:src "img/js.png"
                  :width 40
                  :className "what eval"})
    (dom/textarea #js {:value evaluation-js
                       :readOnly true})))


(defui CompilerUI
  
  static om/IQuery
  (query [this] 
    '[:compilation :evaluation-js :evaluation-clj])
  
  Object
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
