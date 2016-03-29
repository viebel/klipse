(ns klipse.compile
  (:require [cljs.js :as cljs]
            [klipse.io :as io]
            [replumb.core :as replumb]))

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


(comment (def repl-opts (merge (replumb/options :browser
                                             ["/dbg/js" "/js/compiled/out"]
                                             io/fetch-file!)
                            {:warning-as-error false
                             :verbose false}))

(def repl-opts-noop (merge (replumb/options :browser
                                             ["/dbg/js" "/js/compiled/out"]
                                             io/no-op)
                            {:warning-as-error false
                             :verbose false}))

(replumb/read-eval-call repl-opts-noop identity "(ns my.aa (:require [clojure.set :as set])) (set/union #{1 2} #{2 3 9})"))

