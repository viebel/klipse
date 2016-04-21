(ns ^:figwheel-no-load klipse.core
  (:require 
    [goog.dom :as gdom]
    [om.next :as om]
    [klipse.ui.layout :as ui]
    [klipse.utils :refer [url-parameters]]
    [klipse.control.control :as control]
    [klipse.ui.editors.cljs :as cljs-editor]))

(enable-console-print!)

(om/add-root! 
  control/reconciler 
  ui/Layout 
  (gdom/getElement "compiler"))

(cljs-editor/process-input control/reconciler (:cljs_in (url-parameters)))
