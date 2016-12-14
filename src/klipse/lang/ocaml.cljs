(ns klipse.lang.ocaml
  (:require-macros
   [gadjett.core :refer [dbg]]
   [purnam.core :refer [!>]]
   [cljs.core.async.macros :refer [go]])
  (:require
   [klipse.common.registry :refer [codemirror-mode-src register-mode]]))

(def eval-in-global-scope js/eval); this is the trick to make `eval` work in the global scope: http://perfectionkills.com/global-eval-what-are-the-options/

(defn ocaml-to-js [src]
  (-> src
   (js/ocaml.compile)
   (js/JSON.parse)
   (aget "js_code")))

(defn eval-ocaml [exp _]
  (go
    (try
      (-> exp
          ocaml-to-js
          eval-in-global-scope)
      (catch :default o
        (str o)))))

(defn transpile-ocaml [exp _]
  (go
    (try
      ocaml-to-js
      (catch :default o
        (str o)))))

(def eval-opts {:editor-in-mode "text/ocaml"
                :editor-out-mode "javascript"
                :eval-fn eval-ocaml
                :external-scripts [(codemirror-mode-src "ocaml") "https://viebel.github.io/klipse/repo/js/ocaml-compiler.js"]
                ; oCaml does not know a single line comment
                })

(def transpile-ocaml {:editor-in-mode "text/ocaml"
                      :editor-out-mode "javascript"
                      :eval-fn transpile-ocaml
                      :external-scripts [(codemirror-mode-src "ocaml") "https://viebel.github.io/klipse/repo/js/ocaml-compiler.js"]
                      ; oCaml does not know a single line comment
                      })

(register-mode "eval-ocaml" "selector_ocaml" eval-opts)
(register-mode "transpile-ocaml" "selector_transpile_jsx" transpile-ocaml)
