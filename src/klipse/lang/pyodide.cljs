(ns klipse.lang.pyodide
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [cljs.core.async :refer [<! put! chan]]
   ;; [klipse.utils :refer [runonce]]
   [klipse.common.registry :refer [codemirror-mode-src register-mode scripts-src]]
   [applied-science.js-interop :as j]))

(defonce ^:dynamic *loaded* false)

(def load-pyodide (memoize (fn []
          (doto 
            (js/loadPyodide)
            (.then (fn []
                     (set! *loaded* true)))))))

(defn ensure-loaded! [out-chan]
  (go 
    (let [ready-chan (chan)]
      (when-not *loaded* 
        (put! out-chan "Loading...")
        (doto (load-pyodide)
          (.then (fn []
                   (put! out-chan "Ready to evaluate...")
                   (put! ready-chan "Ready to evaluate..."))))
        ;I think we need to park here to prevent it from trying to rush ahead
        ;and eval:
        (<! ready-chan)))))

(defn eval-python [src _opts]
  (let [c (chan)
        to-chan #(put! c %)] 
    (go 
      (<! (ensure-loaded! c))
      (try 
        (doto (js/pyodide.runPythonAsync src to-chan to-chan)
          (.then (fn [m]
                   (put! c "Output:\n")
                   (if (nil? m) "" (to-chan m))))
          (.catch to-chan))
        (catch js/pyodide.PythonError e
          (put! c (str e)))))
    c))


(def opts {:editor-in-mode "python"
           :editor-out-mode "html"
           :eval-fn eval-python
           :external-scripts [(codemirror-mode-src "python") "https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.js" ]
           :comment-str "#"})

(register-mode   "pyodide" "selector_pyodide" opts)

