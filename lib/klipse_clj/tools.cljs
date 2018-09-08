(ns klipse-clj.tools
  (:require [cljs.js :as cljsjs :refer [empty-state]]))

(defn eval [form]
  (:value (cljsjs/eval (empty-state) form identity)))
