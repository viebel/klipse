(ns klipse.lang.reagent
  (:require-macros
   [gadjett.core :as gadjett :refer [dbg]]
   [purnam.core :refer [!]]
   [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [cljs.reader :refer [read-string]]
   [klipse.utils :refer [runonce]]
   [cljs.core.async :refer [chan]]
   [klipse.common.registry :refer [codemirror-mode-src register-mode]]
   [klipse.lang.clojure :refer [str-eval-async]]))


(defn eval-reagent [src opts state]
  (let [container-id (:result-element-id state)
        code (str `(reagent.core/render-component  ~(read-string src) (js/document.getElementById ~container-id)))]
    (js/console.log code)
    (str-eval-async code opts state)))

(def opts {:editor-in-mode "clojure"
           :editor-out-mode "clojure"
           :eval-fn eval-reagent
           :no-result true
           :external-scripts [(codemirror-mode-src "clojure")]
           :comment-str ";"})

(register-mode "eval-reagent" "selector_reagent" opts)

