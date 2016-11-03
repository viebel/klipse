(ns klipse.control.parser
  (:require-macros
    [gadjett.core :as gadjett :refer [deftrack dbg]]
    [cljs.core.async.macros :refer [go]])
  (:require 
    gadjett.core-fn
    [cljs.reader :refer [read-string]]
    [klipse.utils :refer [add-url-parameter url-parameters]]
    [klipse.compiler :refer [eval-async compile-async]]
    [om.next :as om]))

;; =============================================================================
;; Utils

(defn static-fns? []
  (boolean (read-string (or (:static-fns (url-parameters)) "false"))))

(defn verbose? []
  (boolean (read-string (or (:verbose (url-parameters)) "false"))))

(defn compile-display-guard? []
  (boolean (read-string (or (:compile-display-guard (url-parameters)) "false"))))

(defn beautify-strings? []
  (boolean (read-string (or (:beautify-strings (url-parameters)) "false"))))

(defn eval-context? []
  (keyword (read-string (or (:eval-context (url-parameters)) "nil"))))

(defn external-libs []
  (map str (read-string (or (:external-libs (url-parameters)) "[]"))))

(defn max-eval-duration []
  (read-string (or (:max-eval-duration (url-parameters) "nil"))))

(defn print-length []
  (read-string (or (:print-length (url-parameters)) "1000")))

(deftrack eval-clj [s]
  (go
    (let [[status res] (<! (eval-async s {:static-fns (static-fns?)
                                          :verbose (verbose?)
                                          :beautify-strings (beautify-strings?)
                                          :external-libs (external-libs)
                                          :max-eval-duration (max-eval-duration)
                                          :print-length (print-length)
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
             (go
               (swap! state
                      assoc
                      :compilation
                      (<! (compile-async value {:static-fns (static-fns?)
                                                :verbose (verbose?)
                                                :external-libs (external-libs)
                                                :compile-display-guard (compile-display-guard?)
                                                :max-eval-duration (max-eval-duration)
                                                :context (eval-context?)})))))})


(defn clean-print-box [state]
  (swap! state assoc :evaluation-js ""))

(defn append-print-box [state & args]
  (swap! state update :evaluation-js #(str % (apply str args))))

(defmethod mutate 'clj/eval [{:keys [state]} _ {:keys [value]}]
  {:action (fn [] 
             (go
               (clean-print-box state)
               (with-redefs [*print-newline* true
                             *print-fn* (partial append-print-box state)]
                 (swap! state assoc :evaluation-clj (<! (eval-clj value))))))})
