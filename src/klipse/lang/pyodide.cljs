(ns klipse.lang.pyodide
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [cljs.core.async :refer [<! put! chan]]
   ;; [klipse.utils :refer [runonce]]
   [klipse.common.registry :refer [codemirror-mode-src register-mode scripts-src]]
   [applied-science.js-interop :as j]))

(defonce ^:dynamic *loaded* false)
(defonce ^:dynamic *loading-started* false)

(defn ensure-loaded! []
  (go 
    (when-not *loading-started* 
      (let [ready-chan (chan)]
        (set! *loading-started* true)
        (doto 
          (js/loadPyodide)
          (.then (fn []
                   (js/pyodide.loadPackage  "numpy");
                   (set! *loaded* true))))))))

(defn eval-python [src opts]
  (let [c (chan)] 
    ;; (js/console.log "received src: " src " and opts: " opts)
  (ensure-loaded!)
  ;; (put! c (j/call js/pyodide :runPython src ))
  (try 
    (let [result (str (js/pyodide.runPython src))]
  (js/console.log result)
  (put! c result))
    (catch js/pyodide.PythonError e
      (put! c (str e))))
  c))


(def opts {:editor-in-mode "python"
           :editor-out-mode "text"
           :eval-fn eval-python
           :external-scripts [(codemirror-mode-src "python") "https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.js" ]
           :comment-str "#"})

(register-mode   "pyodide" "selector_pyodide" opts)

