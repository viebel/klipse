(ns ^:figwheel-no-load klipse.control.control
  (:require 
    [klipse.utils :refer [url-parameters]]
    [klipse.control.parser :refer [read mutate]]
    [om.next :as om]))

;; =============================================================================
;; Utils

(defn init-layout []
  (let [{:keys [js_only eval_only]} (url-parameters)]
    (cond
      js_only   :js-only
      eval_only :eval-only
      :else     :global)))

;; =============================================================================
;; Data + Parser + reconciler

(defonce app-state (atom
  {:input nil
   :compilation nil
   :evaluation-js nil
   :evaluation-clj nil
   :code-layout (init-layout)}))

(def parser 
  (om/parser 
    {:read read 
     :mutate mutate}))

(def reconciler 
  (om/reconciler 
    {:state app-state 
     :parser parser}))


