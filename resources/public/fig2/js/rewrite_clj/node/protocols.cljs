(ns rewrite-clj.node.protocols
  (:require [clojure.string :as s]))



(defprotocol Node
  "Protocol for EDN/Clojure nodes."
  (tag [_]
    "Keyword representing the type of the node.")
  (printable-only? [_]
    "Return true if the node cannot be converted to an s-expression
     element.")
  (sexpr [_]
    "Convert node to s-expression.")
  (length [_]
    "Get number of characters for the string version of this node.")
  (string [_]
    "Convert node to printable string."))


(extend-protocol Node
  object
  (tag [_] :unknown)
  (printable-only? [_] false)
  (sexpr [this] this)
  (length [this] (count (string this)))
  (string [this] (pr-str this)))

(defn sexprs
  "Given a seq of nodes, convert those that represent s-expressions
   to the respective forms."
  [nodes]
  (->> nodes
       (remove printable-only?)
       (map sexpr)))

(defn sum-lengths
  "Sum up lengths of the given nodes."
  [nodes]
  (reduce + (map length nodes)))

(defn concat-strings
  "Convert nodes to strings and concatenate them."
  [nodes]
  (reduce str (map string nodes)))


(defprotocol InnerNode
  "Protocol for non-leaf EDN/Clojure nodes."
  (inner? [_]
    "Check whether the node can contain children.")
  (children [_]
    "Get child nodes.")
  (replace-children [_ children]
    "Replace the node's children."))

(extend-protocol InnerNode
  object
  (inner? [_] false)
  (children [_]
    (throw (js/Error. "UnsupportedOperationException")))
  (replace-children [_ _]
    (throw (js/Error. "UnsupportedOperationException"))))

(defn child-sexprs
  "Get all child s-expressions for the given node."
  [node]
  (if (inner? node)
    (sexprs (children node))))


(defprotocol NodeCoerceable
  "Protocol for values that can be coerced to nodes."
  (coerce [_]))


;; TODO: Need to handle format !!!!
;; (defn- node->string
;;   [node]
;;   (let [n (str (if (printable-only? node)
;;                  (pr-str (string node))
;;                  (string node)))
;;         n' (if (re-find #"\n" n)
;;              (->> (s/replace n #"\r?\n" "\n  ")
;;                   (format "%n  %s%n"))
;;              (str " " n))]
;;     (format "<%s:%s>" (name (tag node)) n')))


;; (defn write-node
;;   [writer node]
;;   (str writer (node->string node)))


;; ## Helpers

(defn assert-sexpr-count
  [nodes c]
  (assert
    (= (count (remove printable-only? nodes)) c)
   (str "can only contain" c " non-whitespace form(s).")))

(defn assert-single-sexpr
  [nodes]
  (assert-sexpr-count nodes 1))
