(ns my.date
    (:require [cljs-time.core :as t :refer [interval date-time in-minutes]]))

[
   (date-time 1986 10 14 4 3 27 456)
     (in-minutes (interval (date-time 1986 10 2) (date-time 1986 10 14)))]

