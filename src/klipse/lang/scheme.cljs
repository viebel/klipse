(ns klipse.lang.scheme
  (:require-macros
    [gadjett.core :refer [dbg]]
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [cljs.core.async :refer [<! put! chan]]
   [klipse.common.registry :refer [codemirror-mode-src register-mode scripts-src]]
   [applied-science.js-interop :as j]))

(defn display [result]
  (if (aget result "inspect")
    (j/call result :inspect)
    (str result)))

(defn create-interpreter [on-error]
  (let [klass (j/get js/BiwaScheme :Interpreter)]
    (new klass on-error)))

(defn str-eval-async [exp _]
  (let [c (chan)
        interpreter (create-interpreter (fn [err] (put! c (str err))))]
    (set! js/window.exp exp)
    (put! c (-> (j/call interpreter :evaluate exp)
                display))
    c))

(def opts {:editor-in-mode "scheme"
           :editor-out-mode "scheme"
           :eval-fn str-eval-async
           :external-scripts [(codemirror-mode-src "scheme") (scripts-src "biwascheme-0.6.6-min.js")]
           :comment-str ";"})

(register-mode "eval-scheme" "selector_eval_scheme" opts)
