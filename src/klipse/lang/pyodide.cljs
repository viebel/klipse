(ns klipse.lang.pyodide
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.core.async :refer [<! put! chan]]
   [klipse.common.registry :refer [codemirror-mode-src register-mode scripts-src]]
   [applied-science.js-interop :as j]))

(defonce ^:dynamic *loaded* false)
(def pyodide-root "https://cdn.jsdelivr.net/pyodide/v0.17.0/full")

(def new-print "
import io
import builtins
string_out = io.StringIO()

def print(*args, **kwargs):
    if not 'file' in kwargs:
        kwargs['file'] = string_out
    return builtins.print(*args, **kwargs)
")

(defn ensure-loaded! []
  (let [c (chan)]
    (doto
        (js/loadPyodide #js {:indexURL pyodide-root})
      (.then (fn []
               (js/pyodide.runPython new-print)
               (put! c :ok))))
    c))

(defn eval-python [src _opts]
  (let [c       (chan)
        to-chan #(put! c %)]
    (go
      (when-not *loaded*
        (<! (ensure-loaded!))
        (set! *loaded* true))
      (try
        (doto (js/pyodide.runPythonAsync src to-chan to-chan)
          (.then (fn [m]
                   (to-chan (if (nil? m) "" (str m)))
                   (to-chan (str "\n" (j/call-in js/pyodide [:globals :string_out :getvalue])))
                   (js/pyodide.runPython  " string_out = io.StringIO()")))
          (.catch to-chan))
        (catch js/pyodide.PythonError e
          (put! c (str e)))))
    c))


(def opts {:editor-in-mode   "python"
           :editor-out-mode  "html"
           :eval-fn          #'eval-python
           :external-scripts [(codemirror-mode-src "python")
                              (str pyodide-root "/pyodide.js")]
           :comment-str      "#"})

(register-mode   "pyodide" "selector_pyodide" opts)
