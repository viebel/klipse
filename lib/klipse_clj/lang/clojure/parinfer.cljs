(ns klipse-clj.lang.clojure.parinfer
  (:require 
    [parinfer-codemirror.editor :refer [start-editor-sync!]]
    [parinfer-codemirror.example :refer [create-editor!]]))


(create-editor! "ind" :indent-mode)
;(create-editor! "par" :paren-mode {:parinfer-mode :paren-mode})
(start-editor-sync!)
