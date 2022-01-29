(ns klipse.lang.pyodide
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.core.async :refer [<! put! chan]]
   ;; [klipse.utils :refer [runonce]]
   [klipse.common.registry :refer[codemirror-mode-src register-mode]]
   [applied-science.js-interop :as j]))

(defonce ^:dynamic *loaded* false)

(def new-print "
import io
import builtins
string_out = io.StringIO()

def print(*args, **kwargs):
    if not 'file' in kwargs:
        kwargs['file'] = string_out
    return builtins.print(*args, **kwargs)
")

(def load-pyodide (memoize (fn []
          (doto 
            (j/call js/window :loadPyodide)
            (.then (fn []
                     (j/call js/pyodide :runPython new-print)
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
        (doto (j/call js/pyodide :runPythonAsync src to-chan to-chan)
          (.then (fn [m]
                   (put! c "Output:\n")
                   (if (nil? m) "" (to-chan m))
                   (put! c (str "\n" (j/call-in js/pyodide [:globals :string_out :getvalue])))
                   (j/call js/pyodide :runPython  " string_out = io.StringIO()") 
                   ))
          (.catch to-chan))
        (catch :default e
          (put! c (str e)))))
    c))


(def opts {:editor-in-mode "python"
           :editor-out-mode "html"
           :eval-fn eval-python
           :external-scripts [(codemirror-mode-src "python") "https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.js" ]
           :comment-str "#"})

(register-mode   "pyodide" "selector_pyodide" opts)

