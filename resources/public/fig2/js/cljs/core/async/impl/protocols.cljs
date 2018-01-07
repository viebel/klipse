;;   Copyright (c) Rich Hickey and contributors. All rights reserved.
;;   The use and distribution terms for this software are covered by the
;;   Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
;;   which can be found in the file epl-v10.html at the root of this distribution.
;;   By using this software in any fashion, you are agreeing to be bound by
;;   the terms of this license.
;;   You must not remove this notice, or any other, from this software.

(ns cljs.core.async.impl.protocols)

(def ^:const MAX-QUEUE-SIZE 1024)

(defprotocol ReadPort
  (take! [port fn1-handler] "derefable val if taken, nil if take was enqueued"))

(defprotocol WritePort
  (put! [port val fn1-handler] "derefable boolean (false if already closed) if handled, nil if put was enqueued.
                               Must throw on nil val."))

(defprotocol Channel
  (close! [chan])
  (closed? [chan]))

(defprotocol Handler
  (active? [h] "returns true if has callback. Must work w/o lock")
  (blockable? [h] "returns true if this handler may be blocked, otherwise it must not block")
  #_(lock-id [h] "a unique id for lock acquisition order, 0 if no lock")
  (commit [h] "commit to fulfilling its end of the transfer, returns cb. Must be called within lock"))

(defprotocol Buffer
  (full? [b] "returns true if buffer can accept put")
  (remove! [b] "remove and return next item from buffer, called under chan mutex")
  (add!* [b itm] "if room, add item to the buffer, returns b, called under chan mutex")
  (close-buf! [b] "called on chan closed under chan mutex, return ignored"))

(defn add!
  ([b] b)
  ([b itm]
     (assert (not (nil? itm)))
     (add!* b itm)))

;; Defines a buffer that will never block (return true to full?)
(defprotocol UnblockingBuffer)
