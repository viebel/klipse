(ns klipse.lang.cpp
  (:require-macros [purnam.core :refer [!>]])
  (:require 
    [cljs.core.async :refer [chan put! close!]]
    [klipse.common.registry :refer [codemirror-mode-src register-mode scripts-src]]))

(defn eval-in-chan [s c]
  (try
    (let [config  (clj->js {:stdio
                            {:write #(put! c %)}})
          input ""; for the moment, we don't support input to cpp programs
          exitCode (!> js/JSCPP.run s input config)]
      (if (= 0 exitCode)
        [:ok 0]
        [:error exitCode]))
    (catch :default e
      [:exception e])))

(defn str-eval-async [s _]
  (let [c (chan)
        [status res] (eval-in-chan s c)]
    (case status
      :ok (put! c (str  "\nexit code: " res))
      :error (put! c (str "\nexit code:" res))
      :exception (put! c (str "\n" res)))
    c))

(def opts {:editor-in-mode "text/x-c++src"
           :editor-out-mode "text"
           :external-scripts [(codemirror-mode-src "clike") (scripts-src "JSCPP.es5.min.js")]
           :eval-fn str-eval-async
           :comment-str "//"})

(register-mode "eval-cpp" "selector_eval_cpp" opts)
