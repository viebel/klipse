;   Copyright (c) Rich Hickey, Reid Draper, and contributors.
;   All rights reserved.
;   The use and distribution terms for this software are covered by the
;   Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
;   which can be found in the file epl-v10.html at the root of this distribution.
;   By using this software in any fashion, you are agreeing to be bound by
;   the terms of this license.
;   You must not remove this notice, or any other, from this software.

(ns ^{:author "Gary Fredericks"}
 clojure.test.check.random.doubles
  (:require [clojure.test.check.random.longs :as longs]))

(def ^:private double-unit
  (loop [i 53 x 1]
    (if (zero? i)
      x
      (recur (dec i) (/ x 2)))))

(def ^:private big-double-unit
  ;; (* double-unit 0x100000000)
  (* double-unit 4294967296))

(defn rand-long->rand-double
  "Given a uniformly distributed random long, returns a uniformly
  distributed double between 0.0 (inclusive) and 1.0 (exclusive)."
  [long]
  (let [x (longs/unsigned-bit-shift-right long 11)
        low-bits (.getLowBitsUnsigned x)
        high-bits (.getHighBits x)]
    (+ (* double-unit low-bits)
       (* big-double-unit high-bits))))
