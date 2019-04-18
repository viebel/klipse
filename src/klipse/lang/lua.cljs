(ns klipse.lang.lua
  (:require-macros
   [gadjett.core :as gadjett :refer [dbg]]
   [cljs.core.async.macros :refer [go]])
  (:require
   [goog.dom :as gdom]
   [klipse.utils :refer [add-script-tag! verbose?]]
   [clojure.string :as string]
   [cljs.core.async :refer [chan close! <! put!]]
   [klipse.common.registry :refer [codemirror-mode-src register-mode wasm-src scripts-src]]
   [applied-science.js-interop :as j]))

(defonce ^:dynamic *loaded* false)

(defn create-module! [ready-chan]
  {:postRun [(fn []
               (when (verbose?)
                 (js/console.log "Lua Module loaded"))
               (put! ready-chan [:ok])
               (j/assoc! js/window :evalLua (j/call js/Module :cwrap "run_lua" "number" #js ["string"])))]})

(defn load-module! []
  (let [xhr (new js/window.XMLHttpRequest)]
    (j/call xhr :open "GET" (wasm-src "lua.wasm"))
    (j/assoc! xhr :responseType "arraybuffer")
    (j/call xhr :overrideMimeType "application/javascript")
    (j/assoc! xhr :onload (fn []
                    (when (verbose?)
                      (js/console.log "wasm loaded:"))
                    (j/assoc-in! js/window [:Module :wasmBinary] (aget xhr "response"))
                    (add-script-tag! (scripts-src "emscripten_module.js"))))
    (j/call xhr :send nil)))

(defn ensure-loaded! []
  (go
    (when-not *loaded*
      (let [ready-chan (chan)
            module (create-module! ready-chan)]
        (j/assoc! js/window :Module (clj->js module))
        (load-module!)
        (<! ready-chan)
        (set! *loaded* true)))))

(defn eval* [src opts]
  (let [c (chan)]
    (try
      (j/assoc-in! js/window [:Module :print] (fn [txt]
                                  (when (verbose?)
                                    (js/console.log "lua res:" txt))
                                  (when-not (= txt "emsc")
                                    (put! c txt))))
      (j/call js/window :evalLua src opts)
      c
      (catch :default e
        (put! c (str e))))))

(defn the-eval [src opts]
  (go
    (<! (ensure-loaded!))
    (<!  (eval* src opts))))


(def opts {:editor-in-mode "text/x-lua"
           :editor-out-mode "text"
           :eval-fn the-eval
           :external-scripts [(codemirror-mode-src "lua") ]
           :comment-str "--"})

(register-mode   "lua" "selector_lua" opts)

