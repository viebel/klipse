;   Copyright (c) Rich Hickey, Reid Draper, and contributors.
;   All rights reserved.
;   The use and distribution terms for this software are covered by the
;   Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
;   which can be found in the file epl-v10.html at the root of this distribution.
;   By using this software in any fashion, you are agreeing to be bound by
;   the terms of this license.
;   You must not remove this notice, or any other, from this software.

(ns ^{:author "Gary Fredericks"
      :doc "Internal namespace, wrapping some goog.math.Long functionality."}
 clojure.test.check.random.longs
  (:refer-clojure :exclude [+ * bit-xor bit-or bit-count
                            unsigned-bit-shift-right])
  (:require [clojure.test.check.random.longs.bit-count-impl :as bit-count]
            [goog.math.Long :as long]))

(defn unsigned-bit-shift-right
  [x n]
  (.shiftRightUnsigned x n))

(defn +
  [x y]
  (.add x y))

(defn *
  [x y]
  (.multiply x y))

(defn bit-xor
  [x y]
  (.xor x y))

(defn bit-or
  [x y]
  (.or x y))

(defn from-string
  [s radix]
  (long/fromString s radix))

(defn from-number
  [x]
  (long/fromNumber x))

(defn ->long
  "Coerces to long, or returns nil if not possible."
  [x]
  (cond (number? x)
        (long/fromNumber x)

        (instance? goog.math.Long x)
        x))

(def ONE (long/getOne))

(def bit-count bit-count/bit-count)
