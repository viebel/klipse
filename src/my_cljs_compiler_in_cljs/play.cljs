(ns my-cljs-compiler-in-cljs.play
  (:use-macros [my-cljs-compiler-in-cljs.debugging :only [deftry dbg log]])
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [cljs.js :as cljs]))

(enable-console-print!)

(deftry run []
  (log))

