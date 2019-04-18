(ns klipse.lang.google-charts
  (:require-macros
   [gadjett.core :as gadjett :refer [dbg]]
   [cljs.core.async.macros :refer [go]])
  (:require
   [goog.dom :as gdom]
   [klipse.utils :refer [add-script-tag!]]
   [clojure.string :as string]
   [klipse.lang.javascript :refer [str-eval-js-async]]
   [cljs.core.async :refer [chan close! <! put!]]
   [klipse.common.registry :refer [codemirror-mode-src register-mode]]
   [applied-science.js-interop :as j]))

(defonce google-charts-loaded false)
(defn ensure-google-charts-loaded! []
  (go
    (when-not google-charts-loaded
      (<! (add-script-tag! "https://www.gstatic.com/charts/loader.js"))
      (j/call-in js/google [:charts :load]) "current" (clj->js {:packages ["corechart" "table"]})
      (let [c (chan)]
        (j/call-in js/google [:charts :setOnLoadCallback]) #(put! c :ok)
        (<! c))
      (set! google-charts-loaded true))))


(defn draw-chart [data-js container-id]
  (let [chart-constructor (j/get-in js/google [:visualization :ChartWrapper])
        chart-wrapper (new chart-constructor data-js)]
    (j/call chart-wrapper :draw)))

(defn parse-js-object [s]
  ;; we don't want to use JSON.parse in order to allow non-quoted keys
  ;; Might be better to find a js object parser that will give more details when the parsing fails
  (try (js/eval (str "(" s ")"))
       (catch :default e
         (throw "Invalid JSON"))))

(defn render* [src {:keys [container-id] :as opts}]
  (try
    (let [container (js/document.getElementById container-id)
          _ (gdom/setTextContent container "")
          data-options-js (parse-js-object src)]
      (aset data-options-js "containerId" container-id)
      (draw-chart data-options-js container-id))
    (catch :default e
      (let [container (js/document.getElementById container-id)]
        (gdom/setTextContent container (str e)))
      (let [c (chan)]
        (close! c)
        c))))

(defn render [src {:keys [container-id] :as opts}]
  (go
    (<! (ensure-google-charts-loaded!))
    (render* src opts)))


(def opts {:editor-in-mode "application/json"
           :editor-out-mode "text"
           :eval-fn render
           :no-result true
           :min-eval-idle-msec 1000
           :external-scripts [(codemirror-mode-src "javascript") ]
           :comment-str ";"})

(register-mode "google-charts" "selector_google_charts" opts)

