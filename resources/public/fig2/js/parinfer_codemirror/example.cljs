(ns parinfer-codemirror.example
  (:require
   [clojure.string :refer [join]]
   [parinfer-codemirror.editor :refer [start-editor-sync! parinferize!]]
   [parinfer-codemirror.state :refer [state
                                      empty-editor-state]]
   [parinfer-codemirror.editor-support :refer [update-cursor!
                                               fix-text!
                                               cm-key
                                               IEditor
                                               get-prev-state
                                               frame-updated?
                                               set-frame-updated!]]))

(defn on-tab
  "Indent selection or insert two spaces when tab is pressed.
  from: https://github.com/codemirror/CodeMirror/issues/988#issuecomment-14921785"
  [cm]
  (if (.somethingSelected cm)
    (.indentSelection cm)
    (let [n (.getOption cm "indentUnit")
          spaces (apply str (repeat n " "))]
      (.replaceSelection cm spaces))))

(def editor-opts
  {:mode "clojure-parinfer"
   :matchBrackets true
   :extraKeys {:Tab on-tab
               :Shift-Tab "indentLess"}})

(defn create-regular-editor!
  "Create a non-parinfer editor."
  ([element-id] (create-regular-editor! element-id {}))
  ([element-id opts]
   (let [element (js/document.getElementById element-id)]
     (when-not (= "none" (.. element -style -display))
       (let [cm (js/CodeMirror.fromTextArea element (clj->js (merge editor-opts {:mode "clojure"} opts)))
             wrapper (.getWrapperElement cm)]
         (set! (.-id wrapper) (str "cm-" element-id))
         cm)))))

(defn create-editor!
  "Create a parinfer editor."
  ([element-id key-] (create-editor! element-id key- {}))
  ([element-id key- opts]
   (when-not (get @state key-)
     (let [element (js/document.getElementById element-id)
           cm (js/CodeMirror.fromTextArea element (clj->js (merge editor-opts opts)))
           wrapper (.getWrapperElement cm)
           ]

       (set! (.-id wrapper) (str "cm-" element-id))

       (parinferize! cm key- (:parinfer-mode opts) "")

       cm))))

(defn render-dev! []
    (create-editor! "code-indent-mode" :indent-mode)
    (create-editor! "code-paren-mode" :paren-mode {:parinfer-mode :paren-mode})
    (start-editor-sync!))

(render-dev!)
