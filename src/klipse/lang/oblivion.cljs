(ns klipse.lang.oblivion
  (:require-macros
   [gadjett.core :as gadjett :refer [dbg]]
   [cljs.core.async.macros :refer [go]])
  (:require
   [goog.dom :as gdom]
   [klipse.utils :refer [add-script-tag!]]
   [clojure.string :as string]
   [cljs.core.async :refer [chan close! <! put!]]
   [klipse.common.registry :refer [scripts-src codemirror-mode-src register-mode]]
   [applied-science.js-interop :as j]))


(defn render* [src {:keys [container] :as opts}]
  (try
    (let [_ (gdom/setTextContent container "")
          [stdout svgout] (j/call js/Oblivion :Compile src 2)]
      (if (string? stdout) ; success
        (do
          (j/assoc! container :innerHTML svgout)
          stdout)
        (str stdout)))
    (catch :default e
      (str e))))

(defn render [src opts]
  (go
    (render* src opts)))


(def opts {:editor-in-mode "ruby"
           :editor-out-mode "text"
           :eval-fn render
           :external-scripts [(codemirror-mode-src "ruby") (scripts-src "Oblivion.js") ]
           :comment-str ";"})

(register-mode "oblivion" "selector_oblivion" opts)

