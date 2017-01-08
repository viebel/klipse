(ns klipse.ui.editors.editor
  (:use-macros 
    [gadjett.core :only [dbg]]
    [purnam.core :only [? ! !>]])
  (:require 
    [goog.dom :as gdom]
    [klipse.dom-utils :refer [create-div-after]]
    [gadjett.collections :as gadjett]
    cljsjs.codemirror
    cljsjs.codemirror.mode.clojure
    cljsjs.codemirror.mode.javascript
    cljsjs.codemirror.addon.edit.matchbrackets
    cljsjs.codemirror.addon.edit.closebrackets
    cljsjs.codemirror.addon.display.placeholder
    cljsjs.codemirror.addon.scroll.simplescrollbars))

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

(defn fix-blank-lines [editor]
  (->> (get-value editor)
      gadjett/fix-blank-lines
      (set-value editor)))

(defmulti beautify-language (fn [editor mode] mode))

(defmethod beautify-language :default [editor _] editor)

(defmethod beautify-language "text/x-sql" [editor _]
  (->> (get-value editor)
       (!> js/sqlFormatter.format)
       (set-value editor)))

(defn fix-comments-lines [editor mode]
  (if (= "clojure" mode)
    (->> (get-value editor)
         gadjett/remove-ending-comments
         (set-value editor))
    editor))

(defn do-indent [editor]
  (!> editor.operation #(dotimes [line (!> editor.lineCount)]
                          (!> editor.indentLine line "smart")))
  editor)

(defn beautify [editor mode {:keys [indent? remove-ending-comments?]}]
  (as-> editor $
      (if indent? (do-indent $) $)
      (fix-blank-lines $)
      (if remove-ending-comments? (fix-comments-lines $ mode) $)
      (beautify-language $ mode)))

(defn set-value-and-beautify [editor mode value opts]
  (-> (set-value editor value)
      (beautify mode opts)))

(defn replace-element-by-editor [element value {:keys [mode] :as opts} & {:keys [indent? remove-ending-comments?] :or {indent? true remove-ending-comments? true}}]
  (let [editor (js/CodeMirror (fn [elt]
                                (gdom/replaceNode elt element))
                              (clj->js opts))]
    (-> (set-value editor value)
        (beautify mode {:indent? indent? :remove-ending-comments? remove-ending-comments?}))))

(defn create-editor-after-element [element value opts & {:keys [remove-ending-comments? indent?] :or  {remove-ending-comments? false indent? false}}]
  (-> (create-div-after element {})
      (replace-element-by-editor value opts :remove-ending-comments? remove-ending-comments? :indent? indent?)))
