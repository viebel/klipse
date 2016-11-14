(ns klipse.common.registry
  (:require-macros
    [gadjett.core :refer [dbg]]))

(def selector->mode (atom {}))
(def mode-options (atom {}))

(defn register-mode [mode selector opts]
  (js/console.info "register-mode: " mode selector)
  (swap! selector->mode assoc selector mode)
  (swap! mode-options assoc mode opts))
