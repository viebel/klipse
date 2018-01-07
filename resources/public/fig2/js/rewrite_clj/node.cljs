(ns rewrite-clj.node
  "Facade for node related namespaces."
  (:require [rewrite-clj.node.coercer]
            [rewrite-clj.node.protocols :as prot]
            [rewrite-clj.node.keyword :as kw-node]
            [rewrite-clj.node.seq :as seq-node]
            [rewrite-clj.node.whitespace :as ws-node]
            [rewrite-clj.node.token :as tok-node]
            [rewrite-clj.node.comment :as cmt-node]
            [rewrite-clj.node.forms :as fm-node]
            [rewrite-clj.node.meta :as mt-node]
            [rewrite-clj.node.stringz :as s-node]
            [rewrite-clj.node.reader-macro :as rm-node]
            [rewrite-clj.node.quote :as q-node]
            [rewrite-clj.node.uneval :as ue-node]
            [rewrite-clj.node.fn :as f-node]))





; *******************************
; see rewrite-clj.node.protocols
; *******************************
(def tag
  "See [[protocols/tag]]"
  prot/tag)
(def sexpr
  "See [[protocols/sexpr]]"
  prot/sexpr)
(def string
  "See [[protocols/string]]"
  prot/string)
(def children
  "See [[protocols/children]]"
  prot/children)
(def child-sexprs
  "See [[protocols/sexprs]]"
  prot/child-sexprs)
(def replace-children
  "See [[protocols/replace-children]]"
  prot/replace-children)
(def inner?
  "See [[protocols/inner?]]"
  prot/inner?)
(def printable-only?
  "See [[protocols/printable-only?]]"
  prot/printable-only?)
(def coerce
  "See [[protocols/coerce]]"
  prot/coerce)
(def length
  "See [[protocols/length]]"
  prot/length)


; *******************************
; see rewrite-clj.node.forms
; *******************************
(def forms-node
  "see [[forms/forms-node]]"
  fm-node/forms-node)
(def keyword-node
  "see [[keyword/keyword-node]]"
  kw-node/keyword-node)


; *******************************
; see rewrite-clj.node.seq
; *******************************
(def list-node
  "See [[seq/list-node]]"
  seq-node/list-node)
(def vector-node
  "See [[seq/vector-node]]"
  seq-node/vector-node)
(def set-node
  "See [[seq/set-node]]"
  seq-node/set-node)
(def map-node
  "See [[seq/map-node]]"
  seq-node/map-node)


; *******************************
; see rewrite-clj.node.string
; *******************************
(def string-node
  "See [[stringz/string-node]]"
  s-node/string-node)



; *******************************
; see rewrite-clj.node.comment
; *******************************
(def comment-node
  "See [[comment/comment-node]]"
  cmt-node/comment-node)
(def comment?
  "See [[comment/comment?]]"
  cmt-node/comment?)



; *******************************
; see rewrite-clj.node.whitespace
; *******************************
(def whitespace-node
  "See [[whitespace/whitespace-node]]"
  ws-node/whitespace-node)
(def newline-node
  "See [[whitespace/newline-node]]"
  ws-node/newline-node)
(def spaces
  "See [[whitespace/spaces]]"
  ws-node/spaces)
(def newlines
  "See [[whitespace/newlines]]"
  ws-node/newlines)
(def whitespace?
  "See [[whitespace/whitespace?]]"
  ws-node/whitespace?)
(def linebreak?
  "See [[whitespace/linebreak?]]"
  ws-node/linebreak?)

(defn whitespace-or-comment?
  "Check whether the given node represents whitespace or comment."
  [node]
  (or (whitespace? node)
      (comment? node)))


; *******************************
; see rewrite-clj.node.token
; *******************************
(def token-node
  "See [[token/token-node]]"
  tok-node/token-node)


; *******************************
; see rewrite-clj.node.reader-macro
; *******************************
(def var-node
  "See [[reader-macro/var-node]]"
  rm-node/var-node)
(def eval-node
  "See [[reader-macro/eval-node]]"
  rm-node/eval-node)
(def reader-macro-node
  "See [[reader-macro/reader-macro-node]]"
  rm-node/reader-macro-node)
(def deref-node
  "See [[reader-macro/deref-node]]"
  rm-node/deref-node)


; *******************************
; see rewrite-clj.node.quote
; *******************************
(def quote-node
  "See [[quote/quote-node]]"
  q-node/quote-node)
(def syntax-quote-node
  "See [[quote/syntax-quote-node]]"
  q-node/syntax-quote-node)
(def unquote-node
  "See [[quote/unquote-node]]"
  q-node/unquote-node)
(def unquote-splicing-node
  "See [[quote/unquote-splicing-node]]"
  q-node/unquote-splicing-node)


; *******************************
; see rewrite-clj.node.uneval
; *******************************
(def uneval-node
  "See [[uneval/uneval-node]]"
  ue-node/uneval-node)


; *******************************
; see rewrite-clj.node.meta
; *******************************
(def meta-node
  "See [[meta/meta-node]]"
  mt-node/meta-node)

; *******************************
; see rewrite-clj.node.fn
; *******************************
(def fn-node
  "See [[fn/fn-node]]"
  f-node/fn-node)
