(ns klipse.lang.python
  (:use-macros [purnam.core :only [? ! !>]])
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]])
  (:require 
   [cljs.core.async :refer [<! put! chan]]
   [klipse.utils :refer [runonce]]
   [klipse.common.registry :refer [codemirror-mode-src register-mode]]))


(defn builtin-read [x]
  (when (or (nil? (? js/Sk.builtinFiles))
            (nil? (aget (? js/Sk.builtinFiles.files) x)))
    (throw (str "File not found: '"  x  "'")))

  (aget (? js/Sk.builtinFiles.files) x))

(def init (runonce (fn []
                      (! js/Sk.TurtleGraphics #js {}))))

(defn str-eval-async [exp {:keys [result-element-id]}]
  (init)
  (let [c (chan)]
    (!> js/Sk.configure #js {:output #(put! c %)
                             :read builtin-read })
    (-> 
      (!> js/Sk.misceval.asyncToPromise
          (fn []
            (put! c "Output:\n")
            (js/console.log "eval:" result-element-id)
            (! js/Sk.TurtleGraphics.target result-element-id)
            (!> js/Sk.importMainWithBody "<stdin>" false exp true)))
      (.then (fn [mod]
               (!> js/console.info "success to eval skulpt: " exp))
             (fn [err]
               (put! c (str "error: " err)))))
    c))

(def opts {:editor-in-mode "python"
           :editor-out-mode "python"
           :eval-fn str-eval-async
           :beautify? false
           :external-scripts [(codemirror-mode-src "python") "https://viebel.github.io/klipse/repo/js/skulpt.min.js" "https://viebel.github.io/klipse/repo/js/skulpt-stdlib.js"]
           :comment-str "#"})

(register-mode "eval-python-client" "selector_eval_python_client" opts)
