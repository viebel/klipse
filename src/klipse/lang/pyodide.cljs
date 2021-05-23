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

(defn ensure-loaded! [out-chan]
  (go 
    (if *loading-started* 
        (when-not *loaded* 
          (put! out-chan "Loading..."))
      (let [ready-chan (chan)]
        (set! *loading-started* true)

        (put! out-chan "Loading...")
        (doto 
          (js/loadPyodide)
          (.then (fn []
                   (js/pyodide.loadPackage  "numpy");
                   (put! out-chan "Ready to evaluate...")
                   (put! ready-chan "Ready to evaluate...")
                   (set! *loaded* true))))
        
        (<! ready-chan)
        ))))

(defn eval-python [src opts]
  (let [c (chan)] 
    ;; (js/console.log "received src: " src " and opts: " opts)
    (go 
      (<! (ensure-loaded! c))
      (try 
        (put! c "Output:\n")
        (doto (js/pyodide.runPythonAsync src #(put! c %) #(put! c %) )
          (.then (fn [m]
                   (if (nil? m) "" (put! c m))))
          (.catch (fn [m]
                    (put! c m))))
        (catch js/pyodide.PythonError e
          (put! c (str e)))))
    c))


(def opts {:editor-in-mode "python"
           :editor-out-mode "text"
           :eval-fn eval-python
           :external-scripts [(codemirror-mode-src "python") "https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.js" ]
           :comment-str "#"})

(register-mode   "pyodide" "selector_pyodide" opts)

