(ns rewrite-clj.node.coercer
  (:require [rewrite-clj.node.comment :refer [CommentNode]]
            [rewrite-clj.node.forms :refer [FormsNode]]
            [rewrite-clj.node.keyword :refer [KeywordNode]]
            [rewrite-clj.node.quote :refer [QuoteNode]]
            [rewrite-clj.node.stringz :refer [StringNode string-node]]
            [rewrite-clj.node.uneval :refer [UnevalNode]]
            [rewrite-clj.node.meta :refer [MetaNode meta-node]]
            [rewrite-clj.node.fn :refer [FnNode]]
            [rewrite-clj.node.protocols :refer [NodeCoerceable coerce]]
            [rewrite-clj.node.reader-macro :refer [ReaderNode ReaderMacroNode DerefNode]]
            [rewrite-clj.node.seq :refer [SeqNode vector-node list-node set-node map-node]]
            [rewrite-clj.node.token :refer [TokenNode token-node]]
            [rewrite-clj.node.whitespace :refer [WhitespaceNode NewlineNode whitespace-node space-separated]]))

;; ## Helpers

(defn node-with-meta
  [n value]
  (if (implements? IWithMeta value)
    (let [mta (meta value)]
      (if (empty? mta)
        n
        (meta-node (coerce mta) n)))
    n))


;; ## Tokens

(extend-protocol NodeCoerceable
  object
  (coerce [v]
    (node-with-meta
      (token-node v)
      v)))

;; Number
(extend-protocol NodeCoerceable
  number
  (coerce [n]
    (node-with-meta
     (token-node n)
     n)))

;; Number
(extend-protocol NodeCoerceable
  string
  (coerce [n]
    (node-with-meta
     (string-node n)
     n)))



;; ## Seqs

(defn seq-node
  [f sq]
  (node-with-meta
    (->> (map coerce sq)
         (space-separated)
         (vec)
         (f))
    sq))

(extend-protocol NodeCoerceable
  PersistentVector
  (coerce [sq]
    (seq-node vector-node sq))
  List
  (coerce [sq]
    (seq-node list-node sq))
  PersistentHashSet
  (coerce [sq]
    (seq-node set-node sq)))




;; ## Maps

(let [comma (whitespace-node ", ")
      space (whitespace-node " ")]
  (defn- map->children
    [m]
    (->> (mapcat
           (fn [[k v]]
             [(coerce k) space (coerce v) comma])
           m)
         (butlast)
         (vec))))


(extend-protocol NodeCoerceable
  PersistentHashMap
  (coerce [m]
    (node-with-meta
      (map-node (map->children m))
      m)))




;(seq-node vector-node [1])

;; ## Vars

;; (extend-protocol NodeCoerceable
;;   Var
;;   (coerce [v]
;;     (-> (str v)
;;         (subs 2)
;;         (symbol)
;;         (token-node)
;;         (vector)
;;         (var-node))))

;; ## Existing Nodes

(extend-protocol NodeCoerceable
  CommentNode     (coerce [v] v)
  FormsNode       (coerce [v] v)
  FnNode          (coerce [v] v)
  ;IntNode         (coerce [v] v)
  KeywordNode     (coerce [v] v)
  MetaNode        (coerce [v] v)
  QuoteNode       (coerce [v] v)
  ReaderNode      (coerce [v] v)
  ReaderMacroNode (coerce [v] v)
  DerefNode       (coerce [v] v)
  StringNode      (coerce [v] v)
  ;UnevalNode      (coerce [v] v)
  NewlineNode     (coerce [v] v)
  SeqNode         (coerce [v] v)
  TokenNode       (coerce [v] v)
  WhitespaceNode  (coerce [v] v))
