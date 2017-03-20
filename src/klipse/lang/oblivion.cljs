(ns klipse.lang.oblivion
  (:use-macros [purnam.core :only [? ! !>]])
  (:require-macros
   [gadjett.core :as gadjett :refer [dbg]]
   [cljs.core.async.macros :refer [go]])
  (:require
   [goog.dom :as gdom]
   [klipse.utils :refer [add-script-tag!]]
   [clojure.string :as string]
   [cljs.core.async :refer [chan close! <! put!]]
   [klipse.common.registry :refer [scripts-src codemirror-mode-src register-mode]]))


(defn render* [src {:keys [container] :as opts}]
  (try
    (let [_ (gdom/setTextContent container "")
          [stdout svgout] (!> js/Oblivion.Compile src 2)]
      (if (string? stdout) ; success
        (do
          (! container.innerHTML svgout)
          stdout)
        (str stdout)))
    (catch :default e
      (str e))))

(defn render [src opts]
  (go
    (render* src opts)))


(def opts {:editor-in-mode "text"
           :editor-out-mode "text"
           :eval-fn render
           :external-scripts [(scripts-src "Oblivion.js") ]
           :comment-str ";"})

(register-mode "oblivion" "selector_oblivion" opts)

