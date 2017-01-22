(ns klipse.ui.editors.cljs
  (:require-macros
   [cljs.core.async.macros :refer [go]]
   [klipse.macros :refer [dbg]])
  (:require
   [cljs.core.async :refer [<!]]
   [cljs.reader :refer [read-string]]
   [clojure.string :as string :refer [blank?]]
   [parinfer-codemirror.editor :refer [parinferize-and-sync!]]
   [klipse.ui.editors.editor :refer [get-value set-value replace-element-by-editor replace-id-by-editor]]
   [klipse.ui.editors.common :refer [handle-events]]
   [klipse.utils :refer [url-parameters load-scripts-mem]]
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

(defmulti use-editor-mode! (fn [mode _]  mode))

(defn replace-editor! [component & [cm-options]]
  (let [editor (om/get-state component :editor)
        editor-wrapper (.getWrapperElement editor)
        value (get-value editor)
        new-editor (replace-element-by-editor editor-wrapper value (merge config-editor cm-options))]
    (om/update-state! component assoc :editor new-editor)
    (handle-cm-events component new-editor)))

(defn load-external-scripts [scripts]
  (go
    (let [[status http-status script] (<! (load-scripts-mem scripts))]
      (if (= :ok status)
        [:ok :ok]
        [:error (str "Cannot load script: " script "\n" "Error: " http-status)]))))

(def parinfer-count (atom 0))

(defn parinferize-editor! [editor indent-or-paren]
  (let [key- (swap! parinfer-count inc)
        wrapper (.getWrapperElement editor)
        parinfer-mode (case indent-or-paren
                        :indent :indent-mode
                        :paren :paren-mode)]
    (set! (.-id wrapper) (str "cm-" "element-id"))
    (parinferize-and-sync! editor key- parinfer-mode (get-value editor))))

(defn use-parinfer! [component indent-or-paren]
  (parinferize-editor! (replace-editor! component) indent-or-paren)
  (let [mode (case indent-or-paren
               :indent :parinfer-indent
               :paren :parinfer-paren)]
    (om/transact! component [`(editor/set-mode {:value ~mode})
                             :input])))

(defmethod use-editor-mode! :parinfer-indent [_ component]
  (use-parinfer! component :indent))

(defmethod use-editor-mode! :parinfer-paren [_ component]
  (use-parinfer! component :paren))

(defmethod use-editor-mode! :paredit [_ component]
  (go
    (let [[status err] (<! (load-external-scripts ["https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.21.0/keymap/emacs.min.js" "https://viebel.github.io/klipse/repo/js/subpar.js" "https://viebel.github.io/klipse/repo/js/subpar.core.js"]))]
      (if (= :ok status)
        (do
          (replace-editor! component {:keyMap "subpar"})
          (om/transact! component ['(editor/set-mode {:value :paredit})
                                   :input]))
        (js/console.error "cannot load paredit scripts:" err)))))

(defmethod use-editor-mode! :regular [component]
  (replace-editor! component)
  (om/transact! component ['(editor/set-mode {:value :regular})
                           :input]))

(defn switch-editor-mode [component]
  (let [editor-modes (get-in (om/props component) [:input :editor-modes])]
    (use-editor-mode! (first editor-modes) component)))

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
                               :paredit "mode-paredit"
                               :parinfer-paren "mode-parinfer-paren"
                               :parinfer-indent "mode-parinfer-indent"
                               "mode-regular")]
            (dom/section #js {:className (str "cljs-editor")}
                         (dom/div #js {:autoFocus true
                                       :value input
                                       :id "code-cljs"
                                       :placeholder placeholder-editor})
                         (dom/div #js {:onClick (partial switch-editor-mode this)
                                       :className (str "editor-logo" " " editor-class)})))))

(def cljs-editor (om/factory Cljs-editor))
