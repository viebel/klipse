(ns rewrite-clj.parser.whitespace
  (:require [rewrite-clj.node :as node]
            [rewrite-clj.reader :as r]))

(defn parse-whitespace
  "Parse as much whitespace as possible. The created node can either contain
   only linebreaks or only space/tabs."
  [^not-native reader]
  (if (r/linebreak? (r/peek-char reader))
    (node/newline-node
      (r/read-while reader r/linebreak?))
    (node/whitespace-node
      (r/read-while reader r/space?))))
