(ns my-cljs-compiler-in-cljs.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [cljs.js :as cljs]))

(enable-console-print!)

(print "in compile!")
;; create cljs.user
(set! (.. js/window -cljs -user) #js {})

(defn cb [{:keys [value error]}]
    (if-not error
      (println value)
      (.error js/console error)))

(cljs/eval-str (cljs/empty-state) "(def a 5) (map #(inc %)  [1 2 a])" 
                 'test {:eval cljs/js-eval} cb)
(cljs/compile-str  (cljs/empty-state) "(def a 999) (map #(* % 9)  [1 2 a]) (cljs.core/map #(inc %) [10 20 90])" cb)
(cljs/eval-str (cljs/empty-state) "(map #(inc %)  [10000 2]) (map #(inc %)  [1 2])" 
                 'test {:eval cljs/js-eval} cb)

(defonce state (atom {:compilation-results ""
                  :evalutation-results ""}))
(defonce eval-res nil)

(defui Compiler
  Object
  (render [this]
          (let [{:keys [compilation-results evalutation-results-js evalutation-results-clj input]} (om/props this)]
            (dom/div nil
                     (dom/textarea #js {:rows 10 :cols 80
                                        :value input
                                        :onChange (fn [e]
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
                                                                         (swap! state assoc :evalutation-results-js (str (.stringify js/JSON res nil 4))))))
                                                      (cljs/compile-str (cljs/empty-state) content
                                                                        (fn [{:keys [value error]}]
                                                                          (if error
                                                                            (println "compile error: " error))   (let [res (if error 
                                                                                      (.. error -cause -message)
                                                                                      value)]
                                                                            (swap! state assoc :compilation-results res))))))})
                     (dom/div #js {:className "evaluation-results-clj"} evalutation-results-clj)
                     (dom/div #js {:className "evaluation-results-js"} evalutation-results-js)
                     (dom/div #js {:className "compilation-results"} compilation-results)))))


(def compiler (om/factory Compiler))
(def reconciler 
  (om/reconciler {:state state}))

(om/add-root! reconciler Compiler (gdom/getElement "compiler"))
