(ns rewrite-clj.node.stringz
  (:require [rewrite-clj.node.protocols :as node]
            [cljs.tools.reader :as r]
            [clojure.string :as s]))

;; ## Node

(defn- wrap-string
  [v]
  (str "\"" v "\""))

(defn- join-lines
  [lines]
  (s/join "\n" lines))

(defrecord StringNode [lines]
  node/Node
  (tag [_]
    (if (next lines)
      :multi-line
      :token))
  (printable-only? [_]
    false)
  (sexpr [_]
    (join-lines
      (map
        (comp r/read-string wrap-string)
        lines)))
  (length [_]
    (+ 2 (reduce + (map count lines))))
  (string [_]
    (wrap-string (join-lines lines)))

  Object
  (toString [this]
    (node/string this)))

;(node/make-printable! StringNode)

;; ## Constructors

(defn string-node
  "Create node representing a string value.
   Takes either a seq of strings or a single one."
  [lines]
  (if (string? lines)
    (->StringNode [lines])
    (->StringNode lines)))
