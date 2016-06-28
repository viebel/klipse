(ns klipse.ui.editors.editor
  (:use-macros [purnam.core :only [? ! !>]])
  (:require 
    [goog.dom :as gdom]
    [gadjett.core :as gadjett :refer-macros [dbg]]
    cljsjs.js-beautify
    cljsjs.codemirror
    cljsjs.codemirror.mode.clojure
    cljsjs.codemirror.mode.javascript
    cljsjs.codemirror.addon.edit.matchbrackets
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

(defn auto-format [editor]
  (try
    (select-all editor)
    (let [from (.getCursor editor true)
          to (.getCursor editor false)]
      (!> editor.autoFormatRange from to))
    editor
    (catch js/Object e
      (println "klipse.ui.editors.editor/auto-format: " e)
      editor)))

(defn auto-indent [editor]
  (select-all editor)
  (let [from (.getCursor editor true)
        to (.getCursor editor false)]
    (!> editor.autoIndentRange from to))
  editor)

(defn beautify [editor language]
  (case language
    "javascript" (->> (get-value editor)
                     js/js_beautify
                     (set-value editor))
    (-> editor
        auto-format
        auto-indent
        goto-start)))

(defn replace-element-by-editor [element value {:keys [mode] :as opts}]
  (let [editor (js/CodeMirror (fn [elt]
                                (goog.dom/replaceNode elt element))
                              (clj->js opts))]
    (-> (set-value editor value)
        (beautify mode))))

(defn create-div-after [element]
    (let [div (gdom/createDom "div" nil (gdom/createTextNode ""))]
      (gdom/insertSiblingAfter div element)
      div))

(defn create-editor-after-element [element value opts]
  (-> (create-div-after element)
      (replace-element-by-editor value opts)))
