(ns klipse.lang.function-plot
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
   [klipse.common.registry :refer [codemirror-mode-src register-mode scripts-src]]))


(defn draw-chart [data-js container-id]
  (let [chart-constructor (? js/google.visualization.ChartWrapper)
        chart-wrapper (new chart-constructor data-js)]
    (!> chart-wrapper.draw)))

(defn parse-js-object [s]
  ;; we don't want to use JSON.parse in order to allow non-quoted keys
  ;; Might be better to find a js object parser that will give more details when the parsing fails
  (try (js/eval (str "(" s ")"))
       (catch :default e
         (throw "Invalid JSON"))))

(defn render* [src {:keys [container container-id] :as opts}]
  (try
    (let [data (parse-js-object src)]
      (aset data "target" (str "#" container-id))
      (!> js/window.functionPlot data))
    (catch :default e
      (gdom/setTextContent container (str e)))))

(defn render [src {:keys [container] :as opts}]
  (go
    (gdom/setTextContent container "")
    (render* src opts)))


(def opts {:editor-in-mode "application/json"
           :editor-out-mode "text"
           :eval-fn render
           :no-result true
           :min-eval-idle-msec 400
           :external-scripts [#_"http://cdnjs.cloudflare.com/ajax/libs/mathjs/3.10.0/math.min.js" (codemirror-mode-src "javascript") (scripts-src "function-plot-with-d3.js")]
           :comment-str "//"})
 
(register-mode "function-plot" "selector_plot" opts)

