(ns klipse.lang.python
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [cljs.core.async :refer [<! put! chan]]
   [klipse.utils :refer [runonce]]
   [klipse.common.registry :refer [codemirror-mode-src register-mode scripts-src]]
   [applied-science.js-interop :as j]))


(defn builtin-read [x]
  (when (or (nil? (j/get js/Sk :builtinFiles))
            (nil? (aget (j/get-in js/Sk [:builtinFiles :files]) x)))
    (throw (str "File not found: '"  x  "'")))

  (aget (j/get-in js/Sk [:builtinFiles :files]) x))

(def init (runonce (fn []
                      (j/assoc! js/Sk :TurtleGraphics #js {}))))

(defn str-eval-async [exp {:keys [container-id]}]
  (init)
  (let [c (chan)]
    (j/call js/Sk :configure #js {:output #(put! c %)
                             :read builtin-read })
    (-> 
      (j/call-in js/Sk [:misceval :asyncToPromise]
       (fn []
            (put! c "Output:\n")
            (j/assoc-in! js/Sk [:TurtleGraphics :target] container-id)
            (j/call js/Sk :importMainWithBody "<stdin>" false exp true)))
      (.then (fn [mod]
               (j/call js/console :info "success to eval skulpt: "))
             (fn [err]
               (put! c (str "error: " err)))))
    c))

(def opts {:editor-in-mode "python"
           :editor-out-mode "python"
           :eval-fn str-eval-async
           :beautify? false
           :external-scripts [(codemirror-mode-src "python") (scripts-src "skulpt.min.js") (scripts-src "skulpt-stdlib.js")]
           :comment-str "#"})

(register-mode "eval-python-client" "selector_eval_python_client" opts)
