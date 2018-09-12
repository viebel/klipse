;   Copyright (c) Rich Hickey, Reid Draper, and contributors.
;   All rights reserved.
;   The use and distribution terms for this software are covered by the
;   Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
;   which can be found in the file epl-v10.html at the root of this distribution.
;   By using this software in any fashion, you are agreeing to be bound by
;   the terms of this license.
;   You must not remove this notice, or any other, from this software.

(ns ^{:author "Gary Fredericks"}
 clojure.test.check.random.longs.bit-count-impl
  (:refer-clojure :exclude [bit-count]))

;; Had to put this in a separate namespace because the + doesn't get
;; inlined if it's called as (core/+ ...). This might change in future
;; CLJS versions?

(def ^:private lookup
  (let [arr (make-array 256)]
    (aset arr 0 0)
    (dotimes [i 256]
      (aset arr i (+ (aget arr (bit-shift-right i 1))
                     (bit-and i 1))))
    arr))

(defn bit-count
  "Returns a JS number (not a Long), the number of set bits in the
  given Long."
  [x]
  (let [low (.-low_ x)
        high (.-high_ x)]
    (+ (aget lookup (-> low  (bit-and 255)))
       (aget lookup (-> low  (bit-shift-right 8) (bit-and 255)))
       (aget lookup (-> low  (bit-shift-right 16) (bit-and 255)))
       (aget lookup (-> low  (bit-shift-right 24) (bit-and 255)))
       (aget lookup (-> high (bit-and 255)))
       (aget lookup (-> high (bit-shift-right 8) (bit-and 255)))
       (aget lookup (-> high (bit-shift-right 16) (bit-and 255)))
       (aget lookup (-> high (bit-shift-right 24) (bit-and 255))))))
