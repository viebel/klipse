(ns rewrite-clj.node.meta
  (:require [rewrite-clj.node.protocols :as node]
            [rewrite-clj.node.whitespace :as ws]))

;; ## Node

(defrecord MetaNode [tag prefix children]
  node/Node
  (tag [_] tag)
  (printable-only? [_] false)
  (sexpr [_]
    (let [[mta data] (node/sexprs children)]
      (assert (implements? IWithMeta data)
              (str "cannot attach metadata to: " (pr-str data)))
      (with-meta data (if (map? mta) mta {mta true}))))
  (length [_]
    (+ (count prefix) (node/sum-lengths children)))
  (string [_]
    (str prefix (node/concat-strings children)))

  node/InnerNode
  (inner? [_] true)
  (children [_] children)
  (replace-children [this children']
    (node/assert-sexpr-count children' 2)
    (assoc this :children children'))

  Object
  (toString [this]
    (node/string this)))

;; TODO
;(node/make-printable! MetaNode)

;; ## Constructor

(defn meta-node
  "Create node representing a form and its metadata."
  ([children]
   (node/assert-sexpr-count children 2)
   (->MetaNode :meta "^" children))
  ([metadata data]
   (meta-node [metadata (ws/spaces 1) data])))

(defn raw-meta-node
  "Create node representing a form and its metadata using the
   `#^` prefix."
  ([children]
   (node/assert-sexpr-count children 2)
   (->MetaNode :meta* "#^" children))
  ([metadata data]
   (raw-meta-node [metadata (ws/spaces 1) data])))
