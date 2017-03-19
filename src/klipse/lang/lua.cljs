(ns klipse.lang.lua
  (:use-macros [purnam.core :only [? ! !>]])
  (:require-macros
   [gadjett.core :as gadjett :refer [dbg]]
   [cljs.core.async.macros :refer [go]])
  (:require
   [goog.dom :as gdom]
   [klipse.utils :refer [add-script-tag!]]
   [clojure.string :as string]
   [cljs.core.async :refer [chan close! <! put!]]
   [klipse.common.registry :refer [codemirror-mode-src register-mode wasm-src scripts-src]]))

(defonce *loaded* false)
(defonce *result-chan* nil)

(defn create-module! [ready-chan result-chan]
  {:postRun [(fn []
               (js/console.log "Lua Module loaded")
               (put! ready-chan [:ok])
               (! js/window.evalLua (!> js/Module.cwrap "run_lua" "number" #js ["string"])))]
   :print (fn [txt]
            (js/console.log "lua res:" txt)
            (when-not (= txt "emsc")
              (put! result-chan txt)))})

(defn load-module! []
  (let [xhr (new js/window.XMLHttpRequest)]
    (!> xhr.open "GET" (wasm-src "lua.wasm"))
    (! xhr.responseType "arraybuffer")
    (!> xhr.overrideMimeType "application/javascript")
    (! xhr.onload (fn []
                    (js/console.log "wasm loaded:")
                    (! js/window.Module.wasmBinary (aget xhr "response"))
                    (add-script-tag! (scripts-src "emscripten_module.js"))))
    (!> xhr.send nil)))

(defn ensure-loaded! []
  (go
    (when-not *loaded*
      (set! *result-chan* (chan))
      (let [ready-chan (chan)
            module (create-module! ready-chan *result-chan*)]
        (! js/window.Module (clj->js module))
        (load-module!)
        (<! ready-chan)
        (set! *loaded* true)))))

(defn eval* [src opts]
  (try
    (!> js/window.evalLua src opts)    
    (catch :default e
      (str e))))

(defn eval [src opts]
  (go
    (<! (ensure-loaded!))
    (eval* src opts)
    (<! *result-chan*)))


(def opts {:editor-in-mode "text/x-lua"
           :editor-out-mode "text"
           :eval-fn eval
           :external-scripts [(codemirror-mode-src "lua") ]
           :comment-str "--"})

(register-mode "lua" "selector_lua" opts)

