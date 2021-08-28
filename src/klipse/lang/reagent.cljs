(ns klipse.lang.reagent
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [goog.dom :as gdom]
   [clojure.string :as string]
   [cljs.core.async :refer [<! chan close!]]
   [klipse.common.registry :refer [codemirror-mode-src register-mode]]
   #_[klipse-clj.lang.clojure :refer [str-eval-async split-expressions read-string]]))

;; TODO
(comment
  (defonce initialized (atom false))

  (defn init-reagent! [opts]
    (go
      (when-not @initialized
        (reset! initialized true)
        (<! (str-eval-async "(require 'reagent.dom)" opts)))))

  (defn eval-reagent [src {:keys [container-id container] :as opts}]
    (go
      (try
        (<! (init-reagent! opts))
        (let [exps       (split-expressions src)
              component  (read-string (last exps))
              ;; To watch reagent/atom changes, component must be in a vector.
              component  (if (vector? component)
                           component
                           [component])
              other-code (string/join "\n" (drop-last 1 exps))
              code       (str other-code `(reagent.dom/render  ~component (js/document.getElementById ~container-id)))]
          (str-eval-async code opts))
        (catch :default e
          (gdom/setTextContent container (str e))
          (let [c (chan)]
            (close! c)
            c)))))

  (defn run []
    (js/reagent.dom.render [:div 1] (js/document.getElementById "klipse-container-3")))

  (def opts {:editor-in-mode   "clojure"
             :editor-out-mode  "clojure"
             :eval-fn          #'eval-reagent
             :no-result        true
             :external-scripts [(codemirror-mode-src "clojure")]
             :comment-str      ";"})

  (register-mode "eval-reagent" "selector_reagent" opts))

