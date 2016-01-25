(ns my-cljs-compiler-in-cljs.play
  (:require [cljs.js :as cljs]) 
  (:use-macros [gadjett.core :only [deftrack]]))

(defn run []
  8)


(deftrack noop[a] a)
(defn mmmmmmmm[])
(deftrack me[])

