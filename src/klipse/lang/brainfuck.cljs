(ns klipse.lang.brainfuck
  (:require-macros
    [gadjett.core :refer [dbg]]
    [purnam.core :refer [!>]]
    [cljs.core.async.macros :refer [go]])
  (:require
    [klipse.common.registry :refer [codemirror-mode-src register-mode]]))


(defn bf [x]
  (try
    [:ok (-> (!> js/window.brainfuck x)
             js/JSON.stringify)]
    (catch js/Object o
      [:error (str o)])))

(defn bf-txt [x]
  (!> js/brainfuck.text x))

(defn eval-brainfuck [exp _]
 (go
    (let [[status res] (bf exp)]
      res)))

(defn eval-brainfuck-txt [exp _]
  (go
    (try
      (-> exp
          bf-txt)
      (catch js/Object o
        (str o)))))


(def eval-opts {:editor-in-mode "text/x-brainfuck"
                :editor-out-mode "javascript"
                :eval-fn eval-brainfuck
;                :external-scripts [(codemirror-mode-src "brainfuck") "https://viebel.github.io/klipse/repo/js/brainfuck.js"]
                :comment-str ""})

(def eval-txt-opts {:editor-in-mode "text/x-brainfuck"
                    :editor-out-mode "javascript"
                    :eval-fn eval-brainfuck-txt
;                    :external-scripts [(codemirror-mode-src "brainfuck") "https://viebel.github.io/klipse/repo/js/brainfuck.js"]
                    :comment-str ""})


(register-mode "eval-brainfuck" "selector_brainfuck" eval-opts)
(register-mode "eval-brainfuck-txt" "selector_brainfuck_txt" eval-txt-opts)
