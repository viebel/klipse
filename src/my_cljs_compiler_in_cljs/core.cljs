(ns my-cljs-compiler-in-cljs.core
  (:require [cljs.tools.reader :as reader]))


(enable-console-print!)
(print "hello World")

(print (reader/read-string "(set! (.. js/document -body -style -backgroundColor \"white\"))"))


