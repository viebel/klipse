(ns klipse.lang.lua
  (:use-macros [purnam.core :only [? ! !>]])
  (:require-macros
   [gadjett.core :as gadjett :refer [dbg]]
   [cljs.core.async.macros :refer [go]])
  (:require
   [goog.dom :as gdom]
   [klipse.utils :refer [add-script-tag! verbose?]]
   [clojure.string :as string]
   [cljs.core.async :refer [chan close! <! put!]]
   [klipse.common.registry :refer [codemirror-mode-src register-mode wasm-src scripts-src]]))

(defonce *loaded* false)

(defn create-module! [ready-chan]
  {:postRun [(fn []
               (when (verbose?)
                 (js/console.log "Lua Module loaded"))
               (put! ready-chan [:ok])
               (! js/window.evalLua (!> js/Module.cwrap "run_lua" "number" #js ["string"])))]})

(defn load-module! []
  (let [xhr (new js/window.XMLHttpRequest)]
    (!> xhr.open "GET" (wasm-src "lua.wasm"))
    (! xhr.responseType "arraybuffer")
    (!> xhr.overrideMimeType "application/javascript")
    (! xhr.onload (fn []
                    (when (verbose?)
                      (js/console.log "wasm loaded:"))
                    (! js/window.Module.wasmBinary (aget xhr "response"))
                    (add-script-tag! (scripts-src "emscripten_module.js"))))
    (!> xhr.send nil)))

(defn ensure-loaded! []
  (go
    (when-not *loaded*
      (let [ready-chan (chan)
            module (create-module! ready-chan)]
        (! js/window.Module (clj->js module))
        (load-module!)
        (<! ready-chan)
        (set! *loaded* true)))))

(defn eval* [src opts]
  (let [c (chan)]
    (try
      (! js/window.Module.print (fn [txt]
                                  (when (verbose?)
                                    (js/console.log "lua res:" txt))
                                  (when-not (= txt "emsc")
                                    (put! c txt))))
      (!> js/window.evalLua src opts)
      c
      (catch :default e
        (put! c (str e))))))

(defn eval [src opts]
  (go
    (<! (ensure-loaded!))
    (<!  (eval* src opts))))


(def opts {:editor-in-mode "text/x-lua"
           :editor-out-mode "text"
           :eval-fn eval
           :external-scripts [(codemirror-mode-src "lua") ]
           :comment-str "--"})

(register-mode "lua" "selector_lua" opts)

