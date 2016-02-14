(ns klipse.compile
  (:require [cljs.js :as cljs]))

;; create cljs.user
(set! (.. js/window -cljs -user) #js {})

(comment
(defn cb [{:keys [value error]}]
    (if-not error
      (println value)
      (.error js/console error)))

(cljs/eval-str (cljs/empty-state) "(def a 5) (map #(inc %)  [1 2 a])" 
                 'test {:eval cljs/js-eval} cb)
(cljs/compile-str  (cljs/empty-state) "(def a 999) (map #(* % 9)  [1 2 a]) (cljs.core/map #(inc %) [10 20])" cb)
(cljs/eval-str (cljs/empty-state) "(map #(inc %)  [10000 2]) (map #(inc %)  [1 2])" 
                 'test {:eval cljs/js-eval} cb))
