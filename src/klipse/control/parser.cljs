(ns klipse.control.parser
  (:require-macros
    [cljs.core.async.macros :refer [go]])
  (:require 
    [cljs.pprint :refer [pprint]]
    [gadjett.core :as gadjett :refer-macros [dbg]]
    [cljs.reader :refer [read-string]]
    [klipse.utils :refer [add-url-parameter url-parameters]]
    [klipse.compiler :refer [eval-async compile]]
    [gadjett.core :as gadjett :refer-macros [deftrack]]
    [om.next :as om]))

;; =============================================================================
;; Utils

(defn static-fns? []
  (boolean (read-string (or (:static-fns (url-parameters) "false")))))

(defn deps-load? []
  (boolean (read-string (or (:deps-load (url-parameters) "false")))))

(deftrack eval-js [s]
  (go
    (let [[status res] (<! (eval-async s {:deps-load (deps-load?) :static-fns (static-fns?)}))]
      (.log js/console res)
      [status (.stringify js/JSON res nil 4)])))

(deftrack eval-clj [s]
  (go
    (let [[status res] (<! (eval-async s {:deps-load (deps-load?) :static-fns (static-fns?)}))]
      [status (if (string? res)
                res
                (with-out-str (pprint res)))])))


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
             (swap! state assoc :compilation (compile value :static-fns (static-fns?))))})

(defmethod mutate 'js/eval [{:keys [state]} _ {:keys [value]}]
  {:action (fn [] 
             #_(go ; it's incorrect to evaluate the code twice when the code has side effects
                   ; for the moment, we leave the js box empty
               (swap! state assoc :evaluation-js (<! (eval-js value)))))})

(defmethod mutate 'clj/eval [{:keys [state]} _ {:keys [value]}]
  {:action (fn [] 
             (go
               (swap! state assoc :evaluation-clj (<! (eval-clj value)))))})
