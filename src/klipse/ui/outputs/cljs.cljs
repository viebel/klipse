(ns klipse.ui.outputs.cljs
  (:require-macros [gadjett.core :refer [dbg]])
  (:require
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]))

(def placeholder-textarea
  ";; Press Ctrl-Enter or wait for 3 sec to eval in clojure...")

(defui Cljs-textarea

    static om/IQuery
    (query [this]
      '[:evaluation-clj])

    Object

    (render [this]
      (let [[status result] (:evaluation-clj (om/props this))
            _ (js/console.log "cljs out: " (:editing-mode (om/props this)))
            status-class (when status (name status))]
        (dom/section #js {:className "cljs-textarea"}
          (dom/textarea #js {:value (or result "")
                             :className status-class
                             :placeholder placeholder-textarea
                             :readOnly true})))))

(def cljs-textarea (om/factory Cljs-textarea))
