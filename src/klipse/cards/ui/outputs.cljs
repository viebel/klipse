(ns klipse.cards.ui.outputs
  (:require 
    [klipse.ui.outputs.cljs :refer [cljs-textarea]]
    [klipse.ui.outputs.js :refer [js-textarea]]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [devcards-om-next.core :refer-macros [defcard-om-next]]
    [devcards.core :as dc :refer-macros [defcard]]))

(defui ^:once Output-cljs-computed
  
  static om/IQuery
  (query [this] 
    '[:evaluation-clj])
  
  Object
  (render [this]
    (dom/div #js {:className "dev-cards-section"}
      (dom/div #js {:className "toolbox"}
        (dom/button #js {:onClick #(om/transact! this '[(output-cljs/success)])} 
          "Emulate success")
        (dom/button #js {:onClick #(om/transact! this '[(output-cljs/error)])} 
          "Emulate error")
        (dom/button #js {:onClick #(om/transact! this '[(output-cljs/default)])} 
          "Emulate empty"))
      (cljs-textarea (om/props this)))))

(defui ^:once Output-js-computed
  
  static om/IQuery
  (query [this] 
    '[:evaluation-js])
  
  Object
  (render [this]
    (dom/div #js {:className "dev-cards-section"}
      (dom/div #js {:className "toolbox"}
        (dom/button #js {:onClick #(om/transact! this '[(output-js/success)])} 
          "Emulate success")
        (dom/button #js {:onClick #(om/transact! this '[(output-js/error)])} 
          "Emulate error")
        (dom/button #js {:onClick #(om/transact! this '[(output-js/default)])} 
          "Emulate empty"))
      (js-textarea (om/props this)))))

(defn read [{:keys [state]} key params]
  {:value (get @state key "")})

(defmulti mutate om/dispatch)

(defmethod mutate 'output-cljs/default [{:keys [state]} _ _]
  {:action (fn [] 
             (swap! state dissoc 
                    :evaluation-clj))})

(defmethod mutate 'output-cljs/error [{:keys [state]} _ _]
  {:action (fn [] 
             (swap! state assoc 
                    :evaluation-clj 
                    [:error "ERROR"]))})

(defmethod mutate 'output-cljs/success [{:keys [state]} _ _]
  {:action (fn [] 
             (swap! state assoc 
                    :evaluation-clj 
                    [:ok "[:a :b :c]"]))})

(defmethod mutate 'output-js/default [{:keys [state]} _ _]
  {:action (fn [] 
             (swap! state dissoc 
                    :evaluation-js))})

(defmethod mutate 'output-js/error [{:keys [state]} _ _]
  {:action (fn [] 
             (swap! state assoc 
                    :evaluation-js 
                    [:error "ERROR"]))})

(defmethod mutate 'output-js/success [{:keys [state]} _ _]
  {:action (fn [] 
             (swap! state assoc 
                    :evaluation-js 
                    [:ok "#'cljs.user/x"]))})

(defonce output-cljs-data (atom {}))
(defonce output-js-data (atom {}))

(def output-parser 
  (om/parser 
    {:read read 
     :mutate mutate}))

(defonce output-cljs-reconciler
  (om/reconciler 
    {:state output-cljs-data
     :parser output-parser}))

(defonce output-js-reconciler
  (om/reconciler 
    {:state output-js-data
     :parser output-parser}))

(defcard-om-next cljs-output 
  "__Purpose:__ 
  
  * Basic clojurescript read-only textarea.
  
  __Requirements:__ 
  
  1. UI
    * Editor takes the entire width of section.
    * Editor takes the entire height of section.
    * Placeholder.
    * Editor background: a cljs grey or red or green logo.
  
  2. TOOLS
    * Logo is green in case of success.
    * Logo is red in case of error.
    * Logo is grey when no entry.
  
  __ToolBox:__"
  Output-cljs-computed
  output-cljs-reconciler
  output-cljs-data
  {:inspect-data true
   :history true})

(defcard-om-next js-output 
  "__Purpose:__ 
  
  * Basic javascript read-only textarea.
  
  __Requirements:__ 
  
  1. UI
    * Editor takes the entire width of section.
    * Editor takes the entire height of section.
    * Placeholder.
    * Editor background: a js grey or red or green logo.
  
  2. TOOLS
    * Logo is green in case of success.
    * Logo is red in case of error.
    * Logo is grey when no entry.
  
  __ToolBox:__"
  Output-js-computed
  output-js-reconciler
  output-js-data
  {:inspect-data true
   :history true})