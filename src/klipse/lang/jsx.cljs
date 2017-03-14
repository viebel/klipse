(ns klipse.lang.jsx
  (:require-macros
    [gadjett.core :refer [dbg]]
    [purnam.core :refer [!>]]
    [cljs.core.async.macros :refer [go]])
  (:require
    [klipse.utils :refer [eval-in-global-scope]]    
    [klipse.common.registry :refer [codemirror-mode-src register-mode scripts-src]]))

(defn babel [src]
   (-> (!> js/Babel.transform src #js {:presets #js ["react"]})
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

(register-mode "eval-jsx" "selector_jsx" eval-opts)
(register-mode "transpile-jsx" "selector_transpile_jsx" transpile-opts)
