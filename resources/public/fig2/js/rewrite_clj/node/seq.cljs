(ns rewrite-clj.node.seq
  (:require [rewrite-clj.node.protocols :as node]))

;; ## Node

(defn wrap-vec [s] (str "[" s "]"))
(defn wrap-list [s] (str "(" s ")"))
(defn wrap-set [s] (str "#{" s "}"))
(defn wrap-map [s] (str "{" s "}"))



(defrecord SeqNode [tag
                    wrap-fn
                    wrap-length
                    seq-fn
                    children]
  node/Node
  (tag [this]
    tag)
  (printable-only? [_] false)
  (sexpr [this]
    (seq-fn (node/sexprs children)))
  (length [_]
    (+ wrap-length (node/sum-lengths children)))
  (string [this]
    (->> (node/concat-strings children)
         wrap-fn))

  node/InnerNode
  (inner? [_]
    true)
  (children [_]
    children)
  (replace-children [this children']
    (assoc this :children children'))

  Object
  (toString [this]
    (node/string this)))

;; TODO
;(node/make-printable! SeqNode)

;; ## Constructors

(defn list-node
  "Create a node representing an EDN list."
  [children]
  (->SeqNode :list wrap-list 2 #(apply list %) children))

(defn vector-node
  "Create a node representing an EDN vector."
  [children]
  (->SeqNode :vector  wrap-vec 2 vec children))

(defn set-node
  "Create a node representing an EDN set."
  [children]
  (->SeqNode :set  wrap-set 3 set children))

(defn map-node
  "Create a node representing an EDN map."
  [children]
  (->SeqNode :map wrap-map 2 #(apply hash-map %) children))
