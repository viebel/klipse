(ns my-cljs-compiler-in-cljs.compiler
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [cljs.js :as cljs]))

;; create cljs.user
(set! (.. js/window -cljs -user) #js {})

(defonce state (atom {:compilation-results ""
                  :evalutation-results ""}))
(defonce eval-res nil)

(defn process-input [e]
  (let [content (.. e -target -value)]
    (swap! state assoc :input content)
    (cljs/eval-str (cljs/empty-state) content 'test {:eval cljs/js-eval} 
                   (fn [{:keys [value error]}]
                     (if error
                       (println "eval error: " error)
                       (set! eval-res value))
                     (let [res (if error 
                                 (.. error -cause -message)
                                 value)]
                       (swap! state assoc :evalutation-results-clj (str res))
                       (swap! state assoc :evalutation-results-js #_"Not yet available" (str (.stringify js/JSON res nil 4))))))
    (cljs/compile-str (cljs/empty-state) content
                      (fn [{:keys [value error]}]
                        (if error
                          (println "compile error: " error))   (let [res (if error 
                                                                           (.. error -cause -message)
                                                                           value)]
                                                                 (swap! state assoc :compilation-results res))))))

(defui Compiler
  Object
  (render [this]
          (let [{:keys [compilation-results evalutation-results-js evalutation-results-clj input]} (om/props this)]
            (dom/div nil
                     (dom/div nil "Cljs source code")
                     (dom/textarea #js {:rows 20 :cols 80
                                        :value input
                                        :onChange process-input})
                     (dom/section nil
                                  (dom/div #js {:className "evaluation-results-clj"} 
                                           (dom/div nil "Evaluation results in Clj")
                                           (dom/div  nil evalutation-results-clj))
                                  (dom/div #js {:className "evaluation-results-js"}
                                           (dom/div nil "Evaluation results in Js")
                                           (dom/div nil evalutation-results-js)))
                     (dom/div #js {:className "compilation-results"}
                              (dom/div nil "Compiled Javascript")
                              (dom/div nil compilation-results))))))


(def compiler (om/factory Compiler))
(def reconciler 
  (om/reconciler {:state state}))

(om/add-root! reconciler Compiler (gdom/getElement "compiler"))
(swap! state assoc :input "(str \"Hello World!\")\n; Go ahead! Edit this text area...")
