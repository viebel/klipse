;; core.async
(ns my.async
    (:require-macros [cljs.core.async.macros :refer [go]])
      (:require     [cljs.core.async :refer [timeout <! chan put!]]))

(go
  (print 8)
  (print 9999))
  
;; gist
(ns my.async
    (:require [viebel.gist-368d3bec58d3ec47e935ad488bafb600.raw.color])) ; https://gist.github.com/viebel/368d3bec58d3ec47e935ad488bafb600
  
;; gist in url param
http://localhost:5014/index-dbg.html?cljs_in.gist=viebel/368d3bec58d3ec47e935ad488bafb600&eval_only=1

http://localhost:5014/index-dbg.html?cljs_in.gist=viebel/547e5236f52cf3ba04f9cbc495841769&eval_only=1

;;color-loop
http://localhost:5014/index-dbg.html?cljs_in.gist=viebel/820f672dd176169fd831c7748e6f3cd3
;; cljs-date
(ns my.date
    (:require [cljs-time.core :as t :refer [interval date-time in-minutes]]))

[
   (date-time 1986 10 14 4 3 27 456)
     (in-minutes (interval (date-time 1986 10 2) (date-time 1986 10 14)))]

(ns my.gadjett
  (:require-macros [gadjett.core :as gadjett :refer [dbg]]))

(with-out-str
  (dbg (map inc [1 23 ])))

(ns my.frame
    (:require [viebel.a8a0349b00689c40571b0faaa36a9ae8.raw.foo :refer [square]]))

(square 19)

;;; the following doesn't work
(ns my.color
    (:require [viebel.3800b8ebae5292921c7d6fcb6c995c1f.raw.body-color
                           :refer [set-bg-color]]))


(set-bg-color "red")




