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




