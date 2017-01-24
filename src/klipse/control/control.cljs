(ns ^:figwheel-no-load klipse.control.control
  (:require
   [klipse.utils :refer [url-parameters]]
   [cljs.reader :refer [read-string]]
   [klipse.control.parser :as parser]
   [om.next :as om]))

(defn init-layout []
  (let [{:keys [js_only eval_only container]} (url-parameters)]
    (cond
      js_only   :js-only
      eval_only :eval-only
      container :with-container
      :else     :global)))

(defn logger? []
  (or (boolean (read-string (or (:verbose (url-parameters)) "false")))
      (boolean (read-string (or (:logger (url-parameters)) "false")))))

(defonce app-state (atom
                    {:input {:editor-modes (cycle '(:regular :paredit :parinfer-indent :parinfer-paren))
                             :input ""}
                     :compilation nil
                     :evaluation-js nil
                     :evaluation-clj nil
                     :editing-mode nil
                     :code-layout (init-layout)}))

(def parser
  (om/parser
   {:read parser/read
    :mutate parser/mutate}))

(defn config []
  (as-> {:state app-state
         :parser parser} $
    (if-not (logger?)
      (assoc $ :logger nil)
      $)))

(defn reconciler [initial-input]
  (swap! app-state assoc-in [:input :input] initial-input)
  (om/reconciler (config)))
