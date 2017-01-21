(ns klipse.ui.editors.cljs
  (:require-macros
    [klipse.macros :refer [dbg]])
  (:require
    [cljs.reader :refer [read-string]]
    [clojure.string :as string :refer [blank?]]
    [parinfer-codemirror.editor :refer [start-editor-sync! parinferize!]]
    [klipse.ui.editors.editor :refer [get-value set-value create]]
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
                   ':input
                   ])))

(defn parinfer? []
  (boolean (read-string (or (:parinfer (url-parameters)) "false"))))

(defn use-parinfer! [component editor]
  (let [key- :indent-mode
        wrapper (.getWrapperElement editor)
        parinfer-mode nil]
    (set! (.-id wrapper) (str "cm-" "element-id"))
    (parinferize! editor key- parinfer-mode (get-value editor))
    (start-editor-sync!)
    (om/transact! component [(list 'editor/set-mode {:value :parinfer-indent})])))

(defn init-editor [compiler]
  (let [my-editor (create "code-cljs" config-editor)]
  (when (parinfer?)
    (use-parinfer! compiler my-editor))
  (handle-events my-editor
                 {:idle-msec 3000
                  :extra-keys {"Ctrl-P" #(use-parinfer! compiler my-editor)}
                  :on-should-eval #(process-input compiler (get-value my-editor))})))

(defui Cljs-editor

  static om/IQuery
  (query [this]
         [:input])

  Object

  (componentDidUpdate [this prev-props prev-state]
                      (let [input (get-in (om/props this) [:input :input])
                            editor (om/get-state this :editor)]
                        (when (and input
                                   editor
                                   (not= input (get-value editor))
                          (set-value editor input)))))

  (componentDidMount [this]
                     (om/set-state! this {:editor (init-editor this)}))

  (render [this]
          (let [{:keys [input editing-mode] :or {editing-mode :regular input ""}} (:input (om/props this))
                editor-class (case editing-mode
                               :regular "mode-regular"
                               :parinfer-indent "mode-parinfer-ident"
                               "mode-regular")]
            (dom/section #js {:className (str "cljs-editor")}
                         (dom/textarea #js {:autoFocus true
                                            :value input
                                            :id "code-cljs"
                                            :placeholder placeholder-editor})
                         (dom/div #js {:className (str "editor-logo" " " editor-class)})))))

(def cljs-editor (om/factory Cljs-editor))
