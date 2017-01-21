(ns klipse.ui.editors.cljs
  (:require-macros
    [klipse.macros :refer [dbg]])
  (:require
    [cljs.reader :refer [read-string]]
    [clojure.string :as string :refer [blank?]]
    [parinfer-codemirror.editor :refer [start-editor-sync! parinferize!]]
    [klipse.ui.editors.editor :refer [get-value set-value replace-element-by-editor replace-id-by-editor]]
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

(defn save-input [component s]
  (when-not (blank? s)
    (om/transact! component
                  [`(input/save     {:value ~s})
                   :input])))

(defn process-input [component s]
  (when-not (blank? s)
    (om/transact! component
                  [`(input/save   {:value ~s})
                   `(clj/eval-and-compile     {:value ~s})
                   :input])))

(defn handle-cm-events [component editor]
  (handle-events editor
                 {:idle-msec 3000
                  :on-change #(save-input component (get-value editor))
                  :on-should-eval #(process-input component (get-value editor))}))

(def parinfer-count (atom 0))

(defn use-parinfer! [component]
  (js/console.log "use-parinfer!")
  (let [editor (om/get-state component :editor)
        key- (swap! parinfer-count inc)
        wrapper (.getWrapperElement editor)
        parinfer-mode nil]
    (set! (.-id wrapper) (str "cm-" "element-id"))
    (parinferize! editor key- parinfer-mode (get-value editor))
    (start-editor-sync!)
    (om/transact! component ['(editor/set-mode {:value :parinfer-indent})
                             :input])))

(defn use-regular-mode! [component]
  (js/console.info "use-regular-mode!")
  (let [editor (om/get-state component :editor)
        editor-wrapper (.getWrapperElement editor)
        value (get-value editor)
        new-editor (replace-element-by-editor editor-wrapper value config-editor)]
    (handle-cm-events component new-editor)
    (om/update-state! component assoc :editor new-editor)    
    (om/transact! component ['(editor/set-mode {:value :regular})
                             :input])))

(defn toggle-editor-mode [component]
  (let [editor-modes (get-in (om/props component) [:input :editor-modes])]
    (case (first editor-modes)
      :regular (use-regular-mode! component)
      :parinfer-indent (use-parinfer! component))))

(defn init-editor [component]
  (let [my-editor (replace-id-by-editor "code-cljs" config-editor)]
    (handle-cm-events component my-editor)))

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
          (let [{:keys [input editor-mode] :or {editor-mode :regular input ""}} (:input (om/props this))
                editor-class (case editor-mode
                               :regular "mode-regular"
                               :parinfer-indent "mode-parinfer-ident"
                               "mode-regular")]
            (dom/section #js {:className (str "cljs-editor")}
                         (dom/div #js {:autoFocus true
                                       :value input
                                       :id "code-cljs"
                                       :placeholder placeholder-editor})
                         (dom/div #js {:onClick (partial toggle-editor-mode this)
                                       :className (str "editor-logo" " " editor-class)})))))

(def cljs-editor (om/factory Cljs-editor))
