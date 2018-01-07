(ns klipse.ui.editors.js
  (:require
    [klipse.ui.editors.editor :as editor] 
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]))

(def config-editor 
  {:lineNumbers true
   :matchBrackets true 
   :lineWrapping true
   :autoCloseBrackets true
   :mode "javascript"
   :readOnly true
   :scrollbarStyle "overlay"})

(def placeholder-editor
  ";; Press Ctrl-Enter or wait for 3 sec to transpile...")

(defn init-editor [compiler]
  (editor/create "code-js" config-editor))

(defui Js-editor
  
    static om/IQuery
    (query [this] 
      '[:compilation])
  
    Object
    
    (componentDidUpdate [this prev-props prev-state]
      (let [[status result] (:compilation (om/props this))
            editor-js (om/get-state this :editor)]
        (when editor-js
          (->>
            (if (= :ok status) result (str result))
            (editor/set-value editor-js)
            (editor/do-indent)))))

    (componentDidMount [this]
      (om/set-state! this {:editor (init-editor this)}))

    (render [this]
      (dom/section #js {:className "js-editor"}
        (dom/textarea #js {:id "code-js"
                           :placeholder placeholder-editor}))))

(def js-editor (om/factory Js-editor))
