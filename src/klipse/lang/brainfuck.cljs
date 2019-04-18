(ns klipse.lang.brainfuck
  (:require-macros
    [gadjett.core :refer [dbg]]
    [cljs.core.async.macros :refer [go]])
  (:require
   [clojure.string :refer [split-lines join]]
   [klipse.common.registry :refer [codemirror-mode-src register-mode scripts-src]]
   [applied-science.js-interop :as j]))

(defn boldify-head [data head]
  (let [head-value (str "<strong>" (nth data head) "</strong>")]
    (assoc data head head-value)))

(defn to-html [{:keys [output data pointer text]}]
  (str "<table>"
       (when (seq output)
         (str "<tr>
           <td>Output</td><td>" (join " " output) "</td>
         </tr>"))
         "<tr>
           <td>Data</td><td>" (join " " (boldify-head data pointer)) "</td>
         </tr>
         <tr>
           <td>Head</td><td>" pointer "</td>
           </tr>"
        (when (seq output)
         (str "<tr>
           <td>Text</td><td> " text "</td>
         </tr>"))
       "</table>"))

(defn bf [x]
  (try
    (let [input (->> x
                     split-lines
                     (map (partial re-matches #"\[in:\s*(.*)\]"))
                     (filter identity)
                     first
                     second)]
      [:ok (-> (j/call js/window :brainfuck x input)
               (js->clj :keywordize-keys true)
               to-html)])
    (catch :default o
      [:error (str o)])))

(defn bf-txt [x]
  (try
    [:ok (j/call js/brainfuck :text x)]
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
                :editor-out-mode "text"
                :default-editor "html"
                :eval-fn eval-brainfuck
                :external-scripts [(codemirror-mode-src "brainfuck") (scripts-src "brainfuck.js")]
                :comment-str ""})

(def eval-txt-opts {:editor-in-mode "text/x-brainfuck"
                    :editor-out-mode "text"
                    :eval-fn eval-brainfuck-txt
                    :external-scripts [(codemirror-mode-src "brainfuck") (scripts-src "brainfuck.js")]
                    :comment-str ""})



(register-mode "eval-brainfuck" "selector_brainfuck" eval-opts)
(register-mode "eval-brainfuck-txt" "selector_brainfuck_txt" eval-txt-opts)
