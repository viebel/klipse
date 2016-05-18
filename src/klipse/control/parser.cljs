(ns klipse.control.parser
  (:require 
    [cljs.pprint :refer [pprint]]
    [gadjett.core :as gadjett :refer-macros [dbg]]
    [cljs.reader :refer [read-string]]
    [klipse.utils :refer [add-url-parameter url-parameters]]
    [klipse.compiler :refer [eval compile]]
    [gadjett.core :as gadjett :refer-macros [deftrack]]
    [om.next :as om]))

;; =============================================================================
;; Utils

(defn static-fns? []
  (boolean (read-string (or (:static-fns (url-parameters) "false")))))

(deftrack eval-js [s]
  (let [[status res] (eval s :static-fns (static-fns?))]
    (.log js/console res)
    [status (.stringify js/JSON res nil 4)]))

(deftrack eval-clj [s]
  (let [[status res] (eval s :static-fns (static-fns?))]
    [status (if (string? res)
              res
              (with-out-str (pprint res)))]))


;; =============================================================================
;; Reads

(defn read [{:keys [state]} key params]
  {:value (get @state key "")})


;; =============================================================================
;; Mutations

(defmulti mutate om/dispatch)

(defmethod mutate 'input/save [{:keys [state]} _ {:keys [value]}]
  {:action (fn [] 
             (swap! state assoc :input value))})

(defmethod mutate 'cljs/compile [{:keys [state]} _ {:keys [value]}]
  {:action (fn []
             (swap! state update :compilation (partial compile value :static-fns (static-fns?))))})

(defmethod mutate 'js/eval [{:keys [state]} _ {:keys [value]}]
  {:action (fn [] 
             (swap! state update :evaluation-js (partial eval-js value)))})

(defmethod mutate 'clj/eval [{:keys [state]} _ {:keys [value]}]
  {:action (fn [] 
             (swap! state update :evaluation-clj (partial eval-clj value)))})
