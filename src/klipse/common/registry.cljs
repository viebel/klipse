(ns klipse.common.registry
  (:require
   [klipse.utils :refer [klipse-settings]])
  (:require-macros
   [gadjett.core :refer [dbg]]))

(def selector->mode (atom {}))
(def mode-options (atom {}))

(defn codemirror-mode-src [mode]
  (let [root (:codemirror_root (klipse-settings) "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.21.0/mode")]
    (str root "/" mode "/" mode ".min.js")))

(defn register-mode [mode selector opts]
  (js/console.info "register-mode: " mode selector)
  (swap! selector->mode assoc selector mode)
  (swap! mode-options assoc mode opts))
