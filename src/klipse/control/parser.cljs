(ns klipse.control.parser
  (:require-macros
    [klipse.macros :refer [with-redefs-safe]]
    [cljs.core.async.macros :refer [go]])
  (:require 
    [gadjett.core :as gadjett :refer-macros [dbg]]
    [cljs.reader :refer [read-string]]
    [klipse.utils :refer [add-url-parameter url-parameters]]
    [klipse.compiler :refer [eval-async compile]]
    [gadjett.core :as gadjett :refer-macros [deftrack]]
    [om.next :as om]))

;; =============================================================================
;; Utils

(defn static-fns? []
  (boolean (read-string (or (:static-fns (url-parameters)) "false"))))

(defn eval-context? []
  (keyword (read-string (or (:eval-context (url-parameters)) "nil"))))

(defn external-libs []
  (map str (read-string (or (:external-libs (url-parameters)) "[]"))))

(deftrack eval-js [s]
  (go
    (let [[status res] (<! (eval-async s {:static-fns (static-fns?)}))]
      (.log js/console res)
      [status (.stringify js/JSON res nil 4)])))

(deftrack eval-clj [s]
  (go
    (let [[status res] (<! (eval-async s {:static-fns (static-fns?)
                                          :external-libs (external-libs)
                                          :context (eval-context?)}))]
      [status res])))


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
             (swap! state assoc :compilation (compile value {:static-fns (static-fns?)})))})

(defmethod mutate 'js/eval [{:keys [state]} _ {:keys [value]}]
  {:action (fn [] 
             #_(go ; it's incorrect to evaluate the code twice when the code has side effects
                   ; for the moment, we leave the js box empty
               (swap! state assoc :evaluation-js (<! (eval-js value)))))})

(defn clean-print-box [state]
  (swap! state assoc :evaluation-js ""))

(defn append-print-box [state & args]
  (swap! state update :evaluation-js #(str % (apply str args))))

(defmethod mutate 'clj/eval [{:keys [state]} _ {:keys [value]}]
  {:action (fn [] 
             (go
               (clean-print-box state)
               (with-redefs-safe [*print-newline* true
                                  *print-fn* (partial append-print-box state)]
                 (swap! state assoc :evaluation-clj (<! (eval-clj value))))))})
