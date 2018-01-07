(ns rewrite-clj.node.comment
  (:require [rewrite-clj.node.protocols :as node]))

;; ## Node

(defrecord CommentNode [s]
  node/Node
  (tag [_] :comment)
  (printable-only? [_] true)
  (sexpr [_]
    (throw (js/Error. "Unsupported operation")))
  (length [_]
    (+ 1 (count s)))
  (string [_]
    (str ";" s))

  Object
  (toString [this]
    (node/string this)))

;;(node/make-printable! CommentNode)

;; ## Constructor

(defn comment-node
  "Create node representing an EDN comment."
  [s]
  (->CommentNode s))

(defn comment?
  "Check whether a node represents a comment."
  [node]
  (= (node/tag node) :comment))



