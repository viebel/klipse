(ns ^:figwheel-no-load klipse.control.control
  (:require 
    [klipse.utils :refer [url-parameters]]
    [klipse.control.parser :as parser]
    [om.next :as om]))

;; =============================================================================
;; Utils

(defn init-layout []
  (let [{:keys [js_only eval_only container]} (url-parameters)]
    (cond
      js_only   :js-only
      eval_only :eval-only
      container :with-container
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
    {:read parser/read 
     :mutate parser/mutate}))

(defn reconciler [initial-state]
  (om/reconciler 
    {:state (swap! app-state merge initial-state)
     :parser parser}))


