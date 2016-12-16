(ns klipse.lang.brainfuck
  (:require-macros
    [gadjett.core :refer [dbg]]
    [purnam.core :refer [!>]]
    [cljs.core.async.macros :refer [go]])
  (:require
    [klipse.common.registry :refer [codemirror-mode-src register-mode]]))


(defn to-html [{:keys [output data pointer text]}]
  (str "<table>
         <tr>
           <td>Output</td><td>" output "</td>
         </tr>
         <tr>
           <td>Data</td><td>" data "</td>
         </tr>
         <tr>
           <td>Pointer</td><td>" pointer "</td>
         </tr>
         <tr>
           <td>Text</td><td> " text "</td>
         </tr>
       </table>"))

(defn bf [x]
  (try
    [:ok (-> (!> js/window.brainfuck x)
             (js->clj :keywordize-keys true)
             to-html)]
    (catch :default o
      [:error (str o)])))

(defn bf-txt [x]
  (try
    [:ok (!> js/brainfuck.text x)]
    (catch :default o
      [:error (str o)])))

(defn eval-brainfuck [exp _]
 (go
    (let [[status res] (bf exp)]
      res)))

(defn eval-brainfuck-txt [exp _]
  (go
    (let [[status res] (bf-txt exp)]
      res)))

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
