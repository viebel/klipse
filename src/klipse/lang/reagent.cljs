(ns klipse.lang.reagent
  (:require-macros
   [gadjett.core :as gadjett :refer [dbg]]
   [purnam.core :refer [!]]
   [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [klipse.utils :refer [runonce]]
   [cljs.core.async :refer [chan]]
   [klipse.common.registry :refer [codemirror-mode-src register-mode]]
   [klipse.lang.clojure :refer [str-eval-async]]))


(def init (runonce (fn []
                      (js* "goog.provide('cljsjs.react');")
                      (js* "goog.provide('cljsjs.react.dom.server')"))))

(defn eval-reagent [src opts state]
  (init)
  (let [container (:result-element state)
        _ (js/console.info "state: " state)
        _ (js/console.info "container: " container)
        _ (set! js/my-reagent-container container)
        code (str "(r/render-component" src " " "js/my-reagent-container" ")")]
    (js/console.log code)
    (str-eval-async code opts state)))

(def opts {:editor-in-mode "clojure"
           :editor-out-mode "clojure"
           :eval-fn eval-reagent
           :no-result true
           :default-editor "html"
           :external-scripts [(codemirror-mode-src "clojure") 
                              "https://cdnjs.cloudflare.com/ajax/libs/react/15.4.1/react-with-addons.js"
                              "https://cdnjs.cloudflare.com/ajax/libs/react/15.4.1/react-dom.min.js"
                              "https://cdnjs.cloudflare.com/ajax/libs/react/15.4.1/react-dom-server.min.js"]
           :comment-str ";"})

(register-mode "eval-reagent" "selector_reagent" opts)

