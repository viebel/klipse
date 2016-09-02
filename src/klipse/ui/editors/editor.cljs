(ns klipse.ui.editors.editor
  (:use-macros 
    [gadjett.core :only [dbg]]
    [purnam.core :only [? ! !>]])
  (:require 
    [goog.dom :as gdom]
    [klipse.dom-utils :refer [create-div-after]]
    [gadjett.collections :as gadjett]
    cljsjs.js-beautify
    cljsjs.codemirror
    cljsjs.codemirror.mode.clojure
    cljsjs.codemirror.mode.javascript
    cljsjs.codemirror.addon.edit.matchbrackets
    cljsjs.codemirror.addon.edit.closebrackets
    cljsjs.codemirror.addon.display.placeholder
    cljsjs.codemirror.addon.scroll.simplescrollbars))

(when (? js/window.initMirrorCustomExtensions)
  (!> js/window.initMirrorCustomExtensions))

(def code-mirror js/CodeMirror)

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
  (as->
    (? code-mirror.commands) $
    (!> $.selectAll editor))
  editor)

(defn goto-start [editor]
  (as->
    (? code-mirror.commands) $
    (!> $.goDocStart editor))
  editor)

(defn auto-indent [editor]
  (select-all editor)
  (let [from (.getCursor editor true)
        to (.getCursor editor false)]
    (!> editor.autoIndentRange from to))
  editor)

(defn fix-blank-lines [editor]
  (->> (get-value editor)
      gadjett/fix-blank-lines
      (set-value editor)))

(defn beautify [editor language]
  (case language
    "javascript" (->> (get-value editor)
                     js/js_beautify
                     (set-value editor))
    (-> editor
        auto-indent
        goto-start
        fix-blank-lines)))

(defn set-value-and-beautify [editor mode value]
  (-> (set-value editor value)
      (beautify mode)))



(defn replace-element-by-editor [element value {:keys [mode] :as opts} & {:keys [beautify?] :or {beautify? true}}]
  (let [editor (js/CodeMirror (fn [elt]
                                (gdom/replaceNode elt element))
                              (clj->js opts))]
    (as->
      (set-value editor value) $
      (if beautify?
        (beautify $ mode)
        $))))


(defn create-editor-after-element [element value opts]
  (-> (create-div-after element)
      (replace-element-by-editor value opts)))
