(ns my-cljs-compiler-in-cljs.compiler
  (:require-macros [gadjett.core :refer [dbg deftrack]])
  (:require 
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

(deftrack read [{:keys [state]} key params]
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
;; Components

(deftrack input-ui [compiler]
  (dom/section nil
    (dom/img #js {:src "img/cljs.png"
                  :width 40
                  :className "what"})
    (dom/textarea #js {:onKeyDown #(when (and (.. % -ctrlKey) (= 13 (.. % -keyCode))) (process-input compiler (.. % -target -value)) (.preventDefault %))
                       :autoFocus true})))

(deftrack compile-cljs-ui [{:keys [compilation]}]
  (let [[status result] compilation
        status-class (if (= :ok status) "ok" "error")]
    (dom/section nil
                 (dom/img #js {:src "img/js.png"
                               :width 40
                               :className "what"})
                 (dom/textarea #js {:value result
                                    :className status-class
                                    :readOnly true}))))

(deftrack evaluate-clj-ui [{:keys [evaluation-clj]}]
  (let [[status result] evaluation-clj
        status-class (if (= :ok status) "ok" "error")]
    (dom/section nil
                 (dom/img #js {:src "img/cljs.png"
                               :width 40
                               :className "what eval"})
                 (dom/textarea #js {:value result
                                    :className status-class
                                    :readOnly true}))))

(deftrack evaluate-js-ui [{:keys [evaluation-js]}]
  (let [[status result] evaluation-js
        status-class (if (= :ok status) "ok" "error")]
    (dom/section nil
                 (dom/img #js {:src "img/js.png"
                               :width 40
                               :className "what eval"})
                 (dom/textarea #js {:value result
                                    :className status-class
                                    :readOnly true}))))


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
