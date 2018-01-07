(ns rewrite-clj.parser.token
  (:require [rewrite-clj.node :as node]
            [rewrite-clj.reader :as r]
            [goog.string :as gstring]))


(defn- join-2 [a b]
  (-> a gstring/StringBuffer. (.append b) .toString))

(defn- ^boolean allowed-default? [c]
  false)

(defn- ^boolean allowed-suffix? [c]
  (or (identical? c \')
      (identical? c \:)))



(defn- read-to-boundary
  [^not-native reader allowed?]
  (r/read-until
   reader
   #(and (not (allowed? %))
         (r/whitespace-or-boundary? %))))




(defn- read-to-char-boundary
  [^not-native reader]
  (let [c (r/read-char reader)]
    (join-2 c (if (not (identical? c \\))
                (read-to-boundary reader allowed-default?)
                ""))))



(defn- symbol-node
  "Symbols allow for certain boundary characters that have
   to be handled explicitly."
  [^not-native reader value value-string]
  (let [suffix (read-to-boundary
                 reader
                 allowed-suffix?)]
    (if (empty? suffix)
      (node/token-node value value-string)
      (let [s (join-2 value-string suffix)]
        (node/token-node
          (r/read-string s)
          s)))))




(defn parse-token
  "Parse a single token."
  [^not-native reader]
  (let [first-char (r/read-char reader)
        s (join-2 first-char (if (identical? first-char \\)
                         (read-to-char-boundary reader)
                         (read-to-boundary reader allowed-default?)))
        v (r/read-string s)]
    (if (symbol? v)
      (symbol-node reader v s)
      (node/token-node v s))))
