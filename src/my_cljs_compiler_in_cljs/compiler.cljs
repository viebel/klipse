(ns my-cljs-compiler-in-cljs.compiler
  (:require 
    [goog.dom :as gdom]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [cljs.js :as cljs]))


;; =============================================================================
;; Compiler functions

;; create cljs.user
(set! (.. js/window -cljs -user) #js {})
(defonce eval-res nil)

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
     (fn [{:keys [value error]}]
       (if error
         (println "eval error: " error)
         (set! eval-res value))
       (let [res (if error 
                   (.. error -cause -message)
                   value)]
         #_"Not yet available" (str (.stringify js/JSON res nil 4))))))

(defn _evaluation-clj [s]
  (cljs/eval-str (cljs/empty-state) s 'test {:eval cljs/js-eval} 
     (fn [{:keys [value error]}]
       (if error
         (println "eval error: " error)
         (set! eval-res value))
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
  {:action (fn [] (swap! state update :compilation #(_compilation value)))})

(defmethod mutate 'js/eval [{:keys [state]} _ {:keys [value]}]
  {:action (fn [] (swap! state update :evalutation-js #(_evaluation-js value)))})

(defmethod mutate 'clj/eval [{:keys [state]} _ {:keys [value]}]
  {:action (fn [] (swap! state update :evalutation-clj #(_evaluation-clj value)))})

(defn process-input [compiler s]
  (om/transact! compiler 
       [(list 'input/save     {:value s})
        (list 'cljs/compile   {:value s})
        (list 'js/eval        {:value s})
        (list 'clj/eval       {:value s})]))


;; =============================================================================
;; Components

(defn input-ui [compiler {:keys [input]}]
  (dom/div nil
    (dom/div nil "Cljs source code")
    (dom/textarea #js {:rows 20 
                       :cols 80
                       :onChange #(process-input compiler (.. % -target -value))})))

(defn compile-cljs-ui [{:keys [compilation]}]
  (dom/div nil
    (dom/div nil "Compilation result CLJS:")
    (dom/div nil compilation)))

(defn evaluate-js-ui [{:keys [evalutation-js]}]
  (dom/div nil
    (dom/div nil "Evaluation JS:")
    (dom/div nil evalutation-js)))

(defn evaluate-clj-ui [{:keys [evalutation-clj]}]
  (dom/div nil
    (dom/div nil "Evaluation CLJ:")
    (dom/div nil evalutation-clj)))

(defui CompilerUI
  
  static om/IQuery
  (query [this] 
    '[:compilation :evalutation-js :evalutation-clj])
  
  Object
  (render [this]
    (as->
      (om/props this) $
      (dom/div nil
        (input-ui this)
        (compile-cljs-ui $)
        (evaluate-js-ui $)
        (evaluate-clj-ui $)))))


;; =============================================================================
;; Init

(defonce app-state (atom
  {:input ""
   :compilation ""
   :evalutation-js ""
   :evalutation-clj ""}))

(def reconciler 
  (om/reconciler 
    {:state app-state 
     :parser (om/parser {:read read 
                         :mutate mutate})}))

(process-input reconciler "(str \"Hello World!\")")

(om/add-root! reconciler CompilerUI (gdom/getElement "compiler"))