(ns ^:figwheel-no-load klipse.core
  (:require 
    [goog.dom :as gdom]
    [om.next :as om :refer-macros [defui]]
    [klipse.ui.layout :as ui]
    [klipse.control.control :as control]))

(enable-console-print!)

(om/add-root! 
  control/reconciler 
  ui/Layout 
  (gdom/getElement "compiler"))
