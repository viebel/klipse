(ns klipse.ui.editors.cljs
  (:require-macros
    [gadjett.core :as gadjett :refer [dbg]])
  (:require
    [cljs.reader :refer [read-string]]
    [clojure.string :as string :refer [blank?]]
    [parinfer-codemirror.editor :refer [start-editor-sync! parinferize!]]
    [klipse.ui.editors.editor :as editor]
    [klipse.ui.editors.common :refer [handle-events]]
    [klipse.utils :refer [url-parameters]]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]))

(def config-editor
  {:lineNumbers true
   :lineWrapping true
   :matchBrackets true
   :autoCloseBrackets true
   :mode "clojure"
   :scrollbarStyle "overlay"})

(def placeholder-editor
  (str
    ";; Write your clojurescript expression \n" 
    ";; and press Ctrl-Enter or wait for 3 sec to experiment the magic..."))

(defn process-input [component s]
  (when-not (blank? s)
    (om/transact! component
                  [`(input/save   {:value ~s})
                   `(clj/eval-and-compile     {:value ~s})
                   ':input])))

(defn init-input [component s]
  (om/transact! component
                  [(list 'input/save     {:value s})]))

(defn parinfer? []
  (boolean (read-string (or (:parinfer (url-parameters)) "false"))))

(defn use-parinfer! [component editor]
  (let [key- :indent-mode
        wrapper (.getWrapperElement editor)
        parinfer-mode nil]
    (set! (.-id wrapper) (str "cm-" "element-id"))
    (parinferize! editor key- parinfer-mode (editor/get-value editor))
    (start-editor-sync!)
    (om/transact! component [(list 'editor/set-mode {:value :parinfer-indent})])))

(defn init-editor [compiler]
  (let [my-editor (editor/create "code-cljs" config-editor)]
    (when (parinfer?)
      (use-parinfer! compiler my-editor))
    (handle-events my-editor
                   {:idle-msec 3000
                    :extra-keys {"Ctrl-P" #(use-parinfer! compiler my-editor)}
                    :on-should-eval #(process-input compiler (editor/get-value my-editor))})))

(defui Cljs-editor

  static om/IQuery
  (query [this]
    '[input editing-mode])

  Object

  (componentDidMount [this]
    (init-editor this))

  (render [this]
    (let [{:keys [input editing-mode] :or {editing-mode :regular}} (:input (om/props this))
          _ (js/console.log "cljs editor input: " (:input (om/props this)))
          _ (js/console.log "cljs editor editing-mode: " editing-mode )
          editor-class (case editing-mode
                         :regular "mode-regular"
                         :parinfer-indent "mode-parinfer-ident"
                         "mode-regular") ]
      (dom/section #js {:className (str "cljs-editor" " " editor-class)}
      (dom/textarea #js {:autoFocus true
                         :value input
                         :id "code-cljs"
                         :placeholder placeholder-editor})))))

(def cljs-editor (om/factory Cljs-editor))
