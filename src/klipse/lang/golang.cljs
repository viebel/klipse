(ns klipse.lang.golang
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
   [clojure.string :refer [blank?]]
   [klipse.utils :refer [add-script-tag! verbose?]]
   [cljs.core.async :refer [chan <! put!]]
   [klipse.common.registry :refer [codemirror-mode-src register-mode wasm-src scripts-src scripts-src]]
   [applied-science.js-interop :as j]))

(defonce ^:dynamic *loaded* false)

;; Dirty trick to prevent google closure compiler to use `fs` global variable
;; as it is going to be set by "wasm_exec.js"
(j/assoc! js/window "fs" nil)

(defn load-module! []
  (let [c   (chan)
        xhr (new js/window.XMLHttpRequest)]
    (j/call xhr :open "GET" (wasm-src "yaegi.wasm"))
    (j/assoc! xhr :responseType "arraybuffer")
    (j/call xhr :overrideMimeType "application/javascript")
    (j/assoc! xhr :onload
              (fn []
                (when (verbose?)
                  (js/console.log "wasm loaded:"))
                (let [gos (new js/Go)]
                  (.then
                    (j/call js/WebAssembly :instantiate (aget xhr "response") (aget gos "importObject"))
                    (fn [result]
                      (j/call gos :run (aget result "instance"))
                      (put! c [:ok]))))))
    (j/call xhr :send nil)
    c))

(defn the-eval [src _]
  (go
    (when-not *loaded*
      (<! (add-script-tag! (scripts-src "wasm_exec.js")))
      (<! (load-module!))
      (set! *loaded* true))
    (let [result (j/call js/window :evalGo src)]
      (if (blank? (aget result "error"))
        (if (aget result "stderr")
          (str (aget result "stdout"))
          (str "stdout:\n" (aget result "stdout") "\nstderr:\n" (aget result "stderr")))
        (str "error:\n" (aget result "error"))))))


(def opts {:editor-in-mode   "text/x-go"
           :editor-out-mode  "text"
           :eval-fn          the-eval
           :external-scripts [(codemirror-mode-src "go")]
           :comment-str      "--"})

(register-mode "golang" "selector_golang" opts)
