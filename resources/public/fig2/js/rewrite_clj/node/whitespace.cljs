(ns rewrite-clj.node.whitespace
  (:require [rewrite-clj.node.protocols :as node]))

;; ## Newline Modifiers

(def ^:dynamic *newline-fn*
  "This function is applied to every newline string."
  identity)

(def ^:dynamic *count-fn*
  "This function is applied to every newline string and should produce
   the eventual character count."
  count)


;; TODO
;; (defmacro with-newline-fn
;;   [f & body]
;;   `(binding [*newline-fn* (comp *newline-fn* ~f)]
;;      ~@body))

;; (defmacro with-count-fn
;;   [f & body]
;;   `(binding [*count-fn* (comp *count-fn* ~f)]
;;      ~@body))

;; ## Nodes

(defrecord WhitespaceNode [whitespace]
  node/Node
  (tag [_] :whitespace)
  (printable-only? [_] true)
  (sexpr [_] (throw (js/Error. "Unsupported operation")))
  (length [_] (count whitespace))
  (string [_] whitespace)

  Object
  (toString [this]
    (node/string this)))

(defrecord NewlineNode [newlines]
  node/Node
  (tag [_] :newline)
  (printable-only? [_] true)
  (sexpr [_] (throw (js/Error. "Unsupported operation")))
  (length [_] (*count-fn* newlines))
  (string [_] (*newline-fn* newlines))

  Object
  (toString [this]
    (node/string this)))


;; TODO
;; (node/make-printable! WhitespaceNode)
;; (node/make-printable! NewlineNode)

;; ## Constructors

(defn whitespace-node
  "Create whitespace node."
  [s]
  (->WhitespaceNode s))

(defn newline-node
  "Create newline node."
  [s]
  (->NewlineNode s))

(defn- newline?
  "Check whether a character represents a linebreak."
  [c]
  (contains? #{\return \newline} c))

(defn whitespace-nodes
  "Convert a string of whitespace to whitespace/newline nodes."
  [s]
  (->> (partition-by newline? s)
       (map
         (fn [char-seq]
           (let [s (apply str char-seq)]
             (if (newline? (first char-seq))
               (newline-node s)
               (whitespace-node s)))))))

;; ## Utilities

(defn spaces
  "Create node representing the given number of spaces."
  [n]
  (whitespace-node (apply str (repeat n \space))))

(defn newlines
  "Create node representing the given number of newline characters."
  [n]
  (newline-node (apply str (repeat n \newline))))



(let [comma (whitespace-node ", ")]
  (defn comma-separated
    "Interleave the given seq of nodes with `\", \"` nodes."
    [nodes]
    (butlast (interleave nodes (repeat comma)))))

(let [nl (newline-node "\n")]
  (defn line-separated
    "Interleave the given seq of nodes with newline nodes."
    [nodes]
    (butlast (interleave nodes (repeat nl)))))

(let [space (whitespace-node " ")]
  (defn space-separated
    "Interleave the given seq of nodes with `\" \"` nodes."
    [nodes]
    (butlast (interleave nodes (repeat space)))))

;; ## Predicates

(defn whitespace?
  "Check whether a node represents whitespace."
  [node]
  (contains?
    #{:whitespace
      :newline}
    (node/tag node)))

(defn linebreak?
  "Check whether a ndoe represents linebreaks."
  [node]
  (= (node/tag node) :newline))
