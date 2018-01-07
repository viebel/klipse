(ns rewrite-clj.parser.core
  (:require [rewrite-clj.node :as node]
            [rewrite-clj.reader :as reader]
            [rewrite-clj.parser.keyword :refer [parse-keyword]]
            [rewrite-clj.parser.string :refer [parse-string parse-regex]]
            [rewrite-clj.parser.token :refer [parse-token]]
            [rewrite-clj.parser.whitespace :refer [parse-whitespace]]
            [cljs.tools.reader.reader-types :refer [peek-char]]))

;; ## Base Parser

(def ^:dynamic ^:private *delimiter*
  nil)


(declare parse-next)


(defn- parse-delim
  [^not-native reader delimiter]
  (reader/ignore reader)
  (->> #(binding [*delimiter* delimiter]
          (parse-next %))
       (reader/read-repeatedly reader)))

(defn- parse-printables
  [^not-native reader node-tag n & [ignore?]]
  (when ignore?
    (reader/ignore reader))
  (reader/read-n
    reader
    node-tag
    parse-next
    (complement node/printable-only?)
    n))


(defn- parse-meta
  [^not-native reader]
  (reader/ignore reader)
  (node/meta-node (parse-printables reader :meta 2)))


(defn- parse-eof
  [^not-native reader]
  (when *delimiter*
    (reader/throw-reader reader "Unexpected EOF.")))

;; ### Seqs

(defn- parse-list
  [^not-native reader]
  (node/list-node (parse-delim reader \))))

(defn- parse-vector
  [^not-native reader]
  (node/vector-node (parse-delim reader \])))

(defn- parse-map
  [^not-native reader]
  (node/map-node (parse-delim reader \})))


;; ### Reader Specialities


(defn- parse-conditional [reader]
  ;; we need to examine the next character, so consume one (known \?)
  (reader/next reader)
  ;; we will always have a reader-macro-node as the result
  (node/reader-macro-node
    (let [read1 (fn [] (parse-printables reader :reader-macro 1))]
      (cons (case (reader/peek reader)
              ;; the easy case, just emit a token
              \( (node/token-node (symbol "?"))

              ;; the harder case, match \@, consume it and emit the token
              \@ (do (reader/next reader)
                   (node/token-node (symbol "?@")))

              ;; otherwise no idea what we're reading but its \? prefixed
              (do (reader/unread reader \?)
                (first (read1))))
            (read1)))))



(defn- parse-sharp
  [^not-native reader]
  (reader/ignore reader)
  (case (peek-char reader)
    nil (reader/throw-reader reader "Unexpected EOF.")
    \{ (node/set-node (parse-delim reader \}))
    \( (node/fn-node (parse-delim reader \)))
    \" (parse-regex reader)
    \^ (node/meta-node (parse-printables reader :meta 2 true))
    \' (node/var-node (parse-printables reader :var 1 true))
    \= (node/eval-node (parse-printables reader :eval 1 true))
    \_ (node/uneval-node (parse-printables reader :uneval 1 true))
    \? (parse-conditional reader)
    (node/reader-macro-node (parse-printables reader :reader-macro 2))))




(defn- parse-unmatched
  [^not-native reader]
  (reader/throw-reader
    reader
    "Unmatched delimiter: %s"
    (peek-char reader)))


(defn- parse-deref
  [^not-native reader]
  (node/deref-node (parse-printables reader :deref 1 true)))

;; ## Quotes

(defn- parse-quote
  [^not-native reader]
  (node/quote-node (parse-printables reader :quote 1 true)))

(defn- parse-syntax-quote
  [^not-native reader]
  (node/syntax-quote-node (parse-printables reader :syntax-quote 1 true)))

(defn- parse-unquote
  [^not-native reader]
  (reader/ignore reader)
  (let [c (peek-char reader)]
    (if (= c \@)
      (node/unquote-splicing-node
        (parse-printables reader :unquote 1 true))
      (node/unquote-node
        (parse-printables reader :unquote 1)))))

(defn- parse-comment
  [^not-native reader]
  (reader/ignore reader)
  (node/comment-node (reader/read-include-linebreak reader)))



(defn- dispatch
  [c]
  (cond (nil? c)                        parse-eof
        (identical? c *delimiter*)      reader/ignore
        (reader/whitespace? c)          parse-whitespace
        (identical? c \^)               parse-meta
        (identical? c \#)               parse-sharp
        (identical? c \()               parse-list
        (identical? c \[)               parse-vector
        (identical? c \{)               parse-map
        (identical? c \})               parse-unmatched
        (identical? c \])               parse-unmatched
        (identical? c \))               parse-unmatched
        (identical? c \~)               parse-unquote
        (identical? c \')               parse-quote
        (identical? c \`)               parse-syntax-quote
        (identical? c \;)               parse-comment
        (identical? c \@)               parse-deref
        (identical? c \")               parse-string
        (identical? c \:)               parse-keyword
        :else                           parse-token))


(defn parse-next
  [^not-native rdr]
  (reader/read-with-meta rdr (dispatch (peek-char rdr))))
