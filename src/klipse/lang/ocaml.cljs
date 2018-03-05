(ns klipse.lang.ocaml
  (:require-macros
   [gadjett.core :refer [dbg]]
   [klipse.macros :refer [my-with-redefs]]
   [purnam.core :refer [!>]]
   [cljs.core.async.macros :refer [go]])
  (:require
   [clojure.string :as string]
   [cljs.core.async :refer [chan put!]]
   [klipse.common.registry :refer [codemirror-mode-src register-mode]]))

(def eval-in-global-scope js/eval); this is the trick to make `eval` work in the global scope: http://perfectionkills.com/global-eval-what-are-the-options/

(defn ocaml-to-js [src]
  (let [{:keys [js_error_msg js_code]} (js->clj (-> (js/ocaml.compile src)
                                                    js/JSON.parse)
                                                :keywordize-keys true)];TODO - use transit JSON reader
    (if js_error_msg [:error js_error_msg]
      [:ok js_code])))

(defn eval-with-types [exp]
  (try
    [:ok (js/evaluator.execute exp)]
    (catch :default o
      [:error (str o)])))

(defn eval-ocaml [exp _]
  (let [c (chan)]
    (my-with-redefs [js/console.log (fn[& args]
                                      (put! c (string/join " "  args))
                                      (put! c "\n"))]

                    (try
                      (set! js/exports #js {})
                      (let [[status res] (ocaml-to-js exp)]
                        (if (= :error status) (put! c res)
                            (put! c (-> res
                                        eval-in-global-scope
                                        str))))
                      (catch :default o
                        (str o))))
    c))


(defn eval-ocaml-with-types [exp _]
  (let [c (chan)]
    (my-with-redefs [js/console.error (fn[& args]
                                      (put! c (string/join " "  args))
                                      (put! c "\n"))]
                    (try
                      (set! js/exports #js {})
                      (let [[status res] (eval-with-types exp)]
                        (if (= :error status) (put! c res)
                            (put! c res)))
                      (catch :default o
                        (str o))))
    c))

(defn transpile-ocaml [exp _]
  (go
    (let [[_ res] (ocaml-to-js exp)]
      res)))

(defn comment-out [src]
  (str "(* " src " *)"))

(def eval-opts {:editor-in-mode "text/x-ocaml"
                :editor-out-mode "text/x-ocaml"
                :beautify? false
                :eval-fn eval-ocaml
                :external-scripts [(codemirror-mode-src "mllike") "https://viebel.github.io/klipse/repo/js/bs.js" "https://viebel.github.io/klipse/repo/js/stdlibBundle.js"]
                :comment-str comment-out})


(def eval-with-types-opts
  {:editor-in-mode "text/x-ocaml"
   :editor-out-mode "javascript"
   :beautify? false
   :eval-fn eval-ocaml-with-types
   :external-scripts [(codemirror-mode-src "mllike") "https://viebel.github.io/klipse/repo/js/ocaml_evaluate_type.js"]
   ;; https://github.com/ocsigen/js_of_ocaml/issues/629
   :comment-str comment-out})

(def transpile-opts {:editor-in-mode "text/x-ocaml"
                     :editor-out-mode "javascript"
                     :beautify? false
                     :eval-fn transpile-ocaml
                     :external-scripts [(codemirror-mode-src "mllike") "https://viebel.github.io/klipse/repo/js/bs.js" "https://viebel.github.io/klipse/repo/js/pretty_format.js"]
                     :comment-str comment-out})


(register-mode "eval-ocaml" "selector_eval_ocaml" eval-opts)
(register-mode "transpile-ocaml" "selector_transpile_ocaml" transpile-opts)
(register-mode "eval-with-types-opts" "selector_eval_ocaml_with_types" eval-with-types-opts)


