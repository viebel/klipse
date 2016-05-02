(ns ^:figwheel-no-load klipse.core
  (:require 
    [goog.dom :as gdom]
    [om.next :as om]
    [gadjett.core :as gadjett]
    [com.rpl.specter :as specter]
    [klipse.ui.layout :as ui]
    [klipse.utils :refer [url-parameters]]
    [klipse.control.control :as control]
    [klipse.ui.editors.cljs :as cljs-editor]))

(enable-console-print!)
(gadjett/settings! :max-function-calls 100)

(def version "0.4.3")
(println "KLIPSE version:" version)

(om/add-root! 
  control/reconciler 
  ui/Layout 
  (gdom/getElement "compiler"))

(cljs-editor/process-input control/reconciler (:cljs_in (url-parameters)))
