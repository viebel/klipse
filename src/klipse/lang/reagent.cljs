(ns klipse.lang.reagent
  (:require-macros
   [gadjett.core :as gadjett :refer [dbg]])
  (:require
   [cljs.reader :refer [read-string]]
   [klipse.common.registry :refer [codemirror-mode-src register-mode]]
   [klipse.lang.clojure :refer [str-eval-async]]))


(defn eval-reagent [src opts]
  (let [container-id (:result-element-id opts)
        code (str `(reagent.core/render-component  ~(read-string src) (js/document.getElementById ~container-id)))]
    (str-eval-async code opts)))

(def opts {:editor-in-mode "clojure"
           :editor-out-mode "clojure"
           :eval-fn eval-reagent
           :no-result true
           :external-scripts [(codemirror-mode-src "clojure")]
           :comment-str ";"})

(register-mode "eval-reagent" "selector_reagent" opts)

