(ns klipse.play
  (:require-macros [gadjett.core :refer [deftrack]])
  (:require [gadjett.core :as g :include-macros true]))

(defn run []
  (assert (= 1 3) "blah blah")
  998)


(deftrack noop[a] a)
(deftrack me[])

