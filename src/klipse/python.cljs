(ns klipse.python
  (:use-macros [purnam.core :only [? ! !>]])
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require 
    cljsjs.codemirror.mode.python
    [klipse.io :as io]
    [klipse.utils :refer [runonce]]
    [cljs.core.async :refer [<! put! chan]]
    [klipse.plugin :refer [register-mode]]
    [gadjett.core :as gadjett :refer-macros [dbg]]))

(defn builtin-read [x]
  (when (or (nil? (? js/Sk.builtinFiles))
            (nil? (aget (? js/Sk.builtinFiles.files) x)))
    (throw (str "File not found: '"  x  "'")))
    (aget (? js/Sk.builtinFiles.files) x))

(defn str-eval-async [exp _]
  (let [c (chan)]
    (!> js/Sk.configure #js {:output #(put! c %)
                             :read builtin-read })
    (-> 
      (!> js/Sk.misceval.asyncToPromise
          (fn []
            (!> js/Sk.importMainWithBody "<stdin>" false exp true)))
      (.then (fn [mod]
               (print "success to eval skulpt: " exp))
             (fn [err]
               (put! c (str "error: " err)))))
    c))

(def opts {:editor-in-mode "python"
           :editor-out-mode "python"
           :eval-fn str-eval-async
           :beautify? false
           :comment-str "#"})

(register-mode "eval-python-client" "selector_eval_python_client" opts)
