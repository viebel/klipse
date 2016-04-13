(ns klipse.ui.editors.editor
  (:require 
    cljsjs.codemirror
    cljsjs.codemirror.mode.clojure
    cljsjs.codemirror.mode.javascript
    cljsjs.codemirror.addon.edit.matchbrackets
    cljsjs.codemirror.addon.display.placeholder
    cljsjs.codemirror.addon.scroll.simplescrollbars))

(js/initMirrorCustomExtensions)

(defn create [dom-id config]
    (js/CodeMirror.fromTextArea
        (js/document.getElementById dom-id)
        (clj->js config)))

(defn get-value [editor] 
  (.getValue editor))

(defn set-value [editor value] 
  (.setValue editor value)
  editor)

(defn on-change [editor f]
  (.on editor "change" f))

(defn set-option [editor option value]
  (.setOption editor option value))

(defn select-all [editor]
  (->
    (.-commands js/CodeMirror)
    (.selectAll editor))
  editor)

(defn goto-start [editor]
  (->
    (.-commands js/CodeMirror)
    (.goDocStart editor))
  editor)

(defn auto-format [editor]
  (select-all editor)
  (let [from (.getCursor editor true)
        to (.getCursor editor false)]
    (.autoFormatRange editor from to))
  editor)

(defn auto-indent [editor]
  (select-all editor)
  (let [from (.getCursor editor true)
        to (.getCursor editor false)]
    (.autoIndentRange editor from to))
  editor)