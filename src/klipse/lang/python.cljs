(ns klipse.lang.python
  (:use-macros [purnam.core :only [? ! !>]])
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]])
  (:require 
   [cljs.core.async :refer [<! put! chan]]
   [klipse.utils :refer [runonce]]
   [klipse.common.registry :refer [codemirror-mode-src register-mode scripts-src]]))


(defn builtin-read [x]
  (when (or (nil? (? js/Sk.builtinFiles))
            (nil? (aget (? js/Sk.builtinFiles.files) x)))
    (throw (str "File not found: '"  x  "'")))

  (aget (? js/Sk.builtinFiles.files) x))

(def init (runonce (fn []
                      (! js/Sk.TurtleGraphics #js {}))))

(defn str-eval-async [exp {:keys [container-id]}]
  (init)
  (let [c (chan)]
    (!> js/Sk.configure #js {:output #(put! c %)
                             :read   builtin-read})
    (->
      (!> js/Sk.misceval.asyncToPromise
          (fn []
            (put! c "Output:\n")
            (! js/Sk.TurtleGraphics.target container-id)
            (!> js/Sk.importMainWithBody "<stdin>" false exp true)))
      (.then (fn [mod]
               (put! c [:ok mod]))
             (fn [err]
               (put! c [:err (str "error:\n" err)]))))
    c))

(def opts {:editor-in-mode "python"
           :editor-out-mode "python"
           :eval-fn str-eval-async
           :beautify? false
           :external-scripts [(codemirror-mode-src "python") (scripts-src "skulpt.min.js") (scripts-src "skulpt-stdlib.js")]
           :comment-str "#"})

(register-mode "eval-python-client" "selector_eval_python_client" opts)
