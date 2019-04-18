(ns klipse.lang.jsx
  (:require-macros
   [gadjett.core :refer [dbg]]
   [cljs.core.async.macros :refer [go]])
  (:require
   [goog.dom :as gdom]
   [klipse.utils :refer [eval-in-global-scope verbose?]]
   [klipse.common.registry :refer [codemirror-mode-src register-mode scripts-src]]
   [applied-science.js-interop :as j]))

(defn babel [src]
  (-> (j/call js/Babel :transform src #js {:presets #js ["react"]})
      (aget "code")))

(defn eval-jsx [exp _]
  (go
    (try
      (-> exp
          babel
          eval-in-global-scope)
      "//Evaluation done"
      (catch :default o
        (str o)))))

(defn render-jsx* [exp {:keys [container-id]}]
  (try
    (babel exp)
    (let [wrapped-exp (str "ReactDOM.render(" exp ", document.getElementById('" container-id "'))")]
      (when (verbose?)
        (js/console.info "render-jsx - wrapped expression:" wrapped-exp))
      (-> (babel wrapped-exp)
          eval-in-global-scope))
    (catch :default e
      (let [container (js/document.getElementById container-id)]
        (gdom/setTextContent container (str e))))))

(defn render-jsx [exp opts]
  (go (render-jsx* exp opts)))

(defn render-react* [exp {:keys [container-id]}]
  (try
    (let [wrapped-exp (str "ReactDOM.render(" exp ", document.getElementById('" container-id "'))")]
      (when (verbose?)
        (js/console.info "render-react - wrapped expression:" wrapped-exp))
      (-> wrapped-exp
          eval-in-global-scope))
    (catch :default e
      (let [container (js/document.getElementById container-id)]
        (gdom/setTextContent container (str e))))))

(defn render-react [exp opts]
  (go (render-react* exp opts)))

(defn transpile-jsx [exp _]
  (go
    (try
      (babel exp)
      (catch :default o
        (str o)))))

(def eval-opts {:editor-in-mode "text/jsx"
                :editor-out-mode "javascript"
                :eval-fn eval-jsx
                :external-scripts [(codemirror-mode-src "xml") (codemirror-mode-src "javascript") (codemirror-mode-src "jsx") (scripts-src "babel.min.js")]
                :comment-str "//"})

(def transpile-opts {:editor-in-mode "text/jsx"
                     :editor-out-mode "javascript"
                     :eval-fn transpile-jsx
                     :external-scripts [(codemirror-mode-src "xml") (codemirror-mode-src "javascript") (codemirror-mode-src "jsx") (scripts-src "babel.min.js")]
                     :comment-str "//"})


(def render-opts {:editor-in-mode "text/jsx"
                  :editor-out-mode "javascript"
                  :eval-fn render-jsx
                  :no-result true
                  :external-scripts [(codemirror-mode-src "xml") (codemirror-mode-src "javascript") (codemirror-mode-src "jsx") (scripts-src "babel.min.js")]
                  :comment-str "//"})

(def render-react-opts {:editor-in-mode "javascript"
                        :editor-out-mode "javascript"
                        :eval-fn render-react
                        :no-result true
                        :external-scripts [ (codemirror-mode-src "javascript")]
                        :comment-str "//"})

(register-mode "eval-jsx" "selector_jsx" eval-opts)
(register-mode "transpile-jsx" "selector_transpile_jsx" transpile-opts)
(register-mode "render-jsx" "selector_render_jsx" render-opts)
(register-mode "render-react" "selector_react" render-react-opts)
