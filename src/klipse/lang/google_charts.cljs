(ns klipse.lang.google-charts
  (:use-macros [purnam.core :only [? ! !>]])
  (:require-macros
   [gadjett.core :as gadjett :refer [dbg]]
   [cljs.core.async.macros :refer [go]])
  (:require
   [goog.dom :as gdom]
   [klipse.utils :refer [add-script-tag!]]
   [clojure.string :as string]
   [klipse.lang.javascript :refer [str-eval-js-async]]
   [cljs.core.async :refer [chan close! <! put!]]
   [klipse.common.registry :refer [codemirror-mode-src register-mode]]))

(defonce google-charts-loaded false)
(defn ensure-google-charts-loaded! []
  (go
    (when-not google-charts-loaded
      (<! (add-script-tag! "https://www.gstatic.com/charts/loader.js"))
      (!> js/google.charts.load "current" (clj->js {:packages ["corechart" "table"]}))
      (let [c (chan)]
        (!> js/google.charts.setOnLoadCallback #(put! c :ok))
        (<! c))
      (set! google-charts-loaded true))))


(defn draw-chart [data-and-options-js container-id]
  (let [container (js/document.getElementById container-id)
        goog-viz (? js/google.visualization)
        data (!> goog-viz.arrayToDataTable (aget data-and-options-js "data"))
        options (aget data-and-options-js "options")
        chart-type (aget data-and-options-js "chartType")
        chart-constructor (aget goog-viz chart-type)
        _ (when-not chart-constructor
            (throw (str "Invalid chartType: " chart-type "\n"
                        "Check the Google Charts documentation at https://developers.google.com/chart/interactive/docs/")))
        chart (new chart-constructor container)]
    (!> chart.draw data options)))

(defn parse-js-object [s]
  ;; we don't want to use JSON.parse in order to allow non-quoted keys
  ;; Might be better to find a js object parser that will give more details when the parsing fails
  (try (js/eval (str "(" s ")"))
       (catch :default e
         (throw "Invalid JSON"))))

(defn render* [src {:keys [container-id] :as opts}]
  (try
    (let [container (js/document.getElementById container-id)
          data-options-js (parse-js-object src)]
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
           :external-scripts [(codemirror-mode-src "javascript") ]
           :comment-str ";"})

(register-mode "google-charts" "selector_google_charts" opts)

