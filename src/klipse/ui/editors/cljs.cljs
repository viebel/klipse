(ns klipse.ui.editors.cljs
  (:require
    [klipse.ui.editors.editor :as editor]
    [klipse.utils :refer [create-url-with-input debounce]] 
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]))

(def config-editor 
  {:lineNumbers true
   :matchBrackets true 
   :mode "clojure"
   :scrollbarStyle "overlay"})

(def placeholder-editor
  (str
    ";; Write your clojurescript expression \n" 
    ";; and press Ctrl-Enter or wait for 3 sec to experiment the magic..."))

(defn process-input [component s]
  (om/transact! component 
    [(list 'input/save     {:value s})
     (list 'cljs/compile   {:value s})
     (list 'js/eval        {:value s})
     (list 'clj/eval       {:value s})]))

(defn init-editor [compiler]
  (let [editor (editor/create "code-cljs" config-editor)
        idle-time 3000
        fn-process #(process-input compiler (editor/get-value editor))] 
    (editor/on-change editor 
        (debounce fn-process idle-time))
    (editor/set-option editor "extraKeys" 
        #js {"Ctrl-S" #(create-url-with-input (editor/get-value editor))
             "Ctrl-Enter" fn-process})))

(defui Cljs-editor
  
  static om/IQuery
  (query [this] 
    '[:input])
  
  Object

  (componentDidMount [this]
    (init-editor this))

  (render [this]
    (let [input (:input (om/props this))]
      (dom/section #js {:className "cljs-editor"}
      (dom/textarea #js {:autoFocus true
                         :value input
                         :id "code-cljs"
                         :placeholder placeholder-editor})))))

(def cljs-editor (om/factory Cljs-editor))