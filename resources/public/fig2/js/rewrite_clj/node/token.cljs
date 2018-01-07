(ns rewrite-clj.node.token
  (:require [rewrite-clj.node.protocols :as node]))

;; ## Node

(defrecord TokenNode [value string-value]
  node/Node
  (tag [_] :token)
  (printable-only? [_] false)
  (sexpr [_] value)
  (length [_] (.-length string-value))
  (string [_] string-value)

  Object
  (toString [this]
    (node/string this)))

; TODO
;(node/make-printable! TokenNode)

;; ## Constructor

(defn token-node
  "Create node for an unspecified EDN token."
  ([value]
   (token-node value (pr-str value)))
  ([value string-value]
  (->TokenNode value string-value)))
