(ns klipse.lang.reagent
  (:require-macros
   [gadjett.core :as gadjett :refer [dbg]])
  (:require
   [goog.dom :as gdom]
   [clojure.string :as string]
   [cljs.core.async :refer [chan close!]]
   [klipse.common.registry :refer [codemirror-mode-src register-mode]]
   [klipse-clj.lang.clojure :refer [str-eval-async split-expressions read-string]]))


(defn eval-reagent [src {:keys [container-id container] :as opts}]
  (try
    (let [exps (split-expressions src)
          component (read-string (last exps))
          ;; To watch reagent/atom changes, component must be in a vector.
          component (if (vector? component)
                      component
                      [component])
          other-code (string/join "\n" (drop-last 1 exps))
          code (str other-code `(reagent.core/render-component  ~component (js/document.getElementById ~container-id)))]
      (str-eval-async code opts))
    (catch :default e
      (gdom/setTextContent container (str e))
      (let [c (chan)]
        (close! c)
        c))))

(def opts {:editor-in-mode "clojure"
           :editor-out-mode "clojure"
           :eval-fn eval-reagent
           :no-result true
           :external-scripts [(codemirror-mode-src "clojure")]
           :comment-str ";"})

(register-mode "eval-reagent" "selector_reagent" opts)

