(ns klipse.lang.golang
  (:require-macros
   [gadjett.core :as gadjett :refer [dbg]]
   [cljs.core.async.macros :refer [go]])
  (:require
   [goog.dom :as gdom]
   [klipse.utils :refer [add-script-tag! verbose?]]
   [clojure.string :as string]
   [cljs.core.async :refer [chan close! <! put!]]
   [klipse.common.registry :refer [codemirror-mode-src register-mode wasm-src-local scripts-src scripts-src-local]]
   [applied-science.js-interop :as j]))

(defonce ^:dynamic *loaded* false)

(defn load-module! [ready-chan]
  (let [xhr (new js/window.XMLHttpRequest)]
    (j/call xhr :open "GET" (wasm-src-local "yaegi.wasm"))
    (j/assoc! xhr :responseType "arraybuffer")
    (j/call xhr :overrideMimeType "application/javascript")
    (j/assoc! xhr :onload (fn []
                    (when (verbose?)
                      (js/console.log "wasm loaded:"))
                    (let [gos (new js/Go)]
                        (.then (j/call window.WebAssembly :instantiate (aget xhr "response") (aget gos "importObject")) (fn [result]
                          (j/call gos :run (aget result "instance"))
                          (put! ready-chan [:ok])
                        ))
                      )
                    ))
    (j/call xhr :send nil)))

(defn the-eval [src _]
  (go (let [ready-chan (chan)]
    (when-not *loaded* 
      (let [script-chan (add-script-tag! (scripts-src-local "wasm_exec.js"))]
        (<! script-chan))
      (load-module! ready-chan)
      (<! ready-chan)
      (set! *loaded* true)))
    (let [result (j/call js/window :evalGo src)]
      (str "stdout:\n" (aget result "stdout") "\nstderr:\n" (aget result "stderr")))))


(def opts {:editor-in-mode "text/x-go"
           :editor-out-mode "text"
           :eval-fn the-eval
           :external-scripts [(codemirror-mode-src "go") ]
           :comment-str "--"})

(register-mode   "golang" "selector_golang" opts)

