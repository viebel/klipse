;   Copyright (c) Rich Hickey, Reid Draper, and contributors.
;   All rights reserved.
;   The use and distribution terms for this software are covered by the
;   Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
;   which can be found in the file epl-v10.html at the root of this distribution.
;   By using this software in any fashion, you are agreeing to be bound by
;   the terms of this license.
;   You must not remove this notice, or any other, from this software.

(ns clojure.test.check.impl)

(defn exception-like? [v]
  (instance? #?(:clj Throwable :cljs js/Error) v))

(defn get-current-time-millis []
  #?(:clj  (System/currentTimeMillis)
     :cljs (.valueOf (js/Date.))))
