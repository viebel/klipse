(ns klipse.lang.reason
  (:require-macros
   [gadjett.core :refer [dbg]]
   [klipse.macros :refer [my-with-redefs]]
   [purnam.core :refer [!> ?]]
   [cljs.core.async.macros :refer [go]])
  (:require
   [klipse.lang.ocaml :as ocaml]
   [clojure.string :as string]
   [cljs.core.async :refer [chan put!]]
   [klipse.common.registry :refer [codemirror-mode-src register-mode]]))

(def eval-in-global-scope js/eval); this is the trick to make `eval` work in the global scope: http://perfectionkills.com/global-eval-what-are-the-options/

(defn ocaml->js [src]
  (let [{:keys [js_error_msg js_code]} (js->clj (-> (js/ocaml.compile src)
                                                    js/JSON.parse)
                                                :keywordize-keys true)];TODO - use transit JSON reader
    (if js_error_msg [:error js_error_msg]
      [:ok js_code])))

(defn reason->ocaml [src]
  (let [[status res] (js/refmt src "RE" "implementation" "ML")]
    (if (= "REtoML" status)
      [:ok res]
      [:error res])))


(defn ocaml->reason [src]
  (try
    [:ok (-> (js/parseML src)
             js/printRE)]
    (catch :default e
      [:error (str
               "Line " (? e.location.startLine)
               ":"
               (? e.location.startLineStartChar)
               "-"
               (? e.location.endLineEndChar)
               "  "
               (-> (string/split (? e.message) ": ")
                   second))])))

(defn reason-3->ocaml [src]
  (try
    [:ok (-> (js/parseRE src)
             js/printML)]
    (catch :default e
      [:error (str
               "Line " (? e.location.startLine)
               ":"
               (? e.location.startLineStartChar)
               "-"
               (? e.location.endLineEndChar)
               "  "
               (-> (string/split (? e.message) ": ")
                   second))])))


(defn reason->js [version src]
  (let [[status res] (if (= version 2)
                       (reason->ocaml src)
                       (reason-3->ocaml src))]
    (if (= :ok status)
      (let [[status res] (ocaml->js res)]
        (if (= :ok status)
          [:ok res]
          [:error res]))
      [:error res])))

(defn eval-reason [version exp _]
  (let [c (chan)]
    (my-with-redefs [js/console.log (fn[& args]
                                      (put! c (string/join " "  args))
                                      (put! c "\n"))]

                    (try
                      (set! js/exports #js {})
                      (let [[status res] (reason->js version exp)]
                        (if (= :error status) (put! c res)
                            (put! c (-> res
                                        eval-in-global-scope
                                        str))))
                      (catch :default o
                        (str o))))
    c))

(defn eval-reason-with-types [version exp _]
  (let [c (chan)]
    (my-with-redefs [js/console.error (fn[& args]
                                      (put! c (string/join " "  args))
                                        (put! c "\n"))]
                    (try
                      (let [[status res] (dbg (reason-3->ocaml exp))]
                        (if (= :error status)
                          (put! c res)
                          (let [[status res] (dbg (ocaml/eval-with-types (str res ";;")))]
                            (put! c res))))
                      (catch :default o
                        (str o))))
    c))

(defn transpile-reason [version exp _]
  (go
    (let [[_ res] (reason->js version exp)]
      res)))


(defn transpile-ocaml->reason [exp _]
  (go
    (let [[_ res] (ocaml->reason exp)]
      res)))

(defn transpile-reason->ocaml [version exp _]
  (go
    (let [[_ res] (if (= version 2)
                    (reason->ocaml exp)
                    (reason-3->ocaml exp))]
      res)))


(defn comment-out [src]
  (str "/* " src " */"))

(def eval-opts {:editor-in-mode "text/x-ocaml"
                :editor-out-mode "javascript"
                :beautify? false
                :eval-fn (partial eval-reason 2)
                :external-scripts [(codemirror-mode-src "mllike") "https://viebel.github.io/klipse/repo/js/bs.js" "https://viebel.github.io/klipse/repo/js/refmt.js" "https://viebel.github.io/klipse/repo/js/stdlibBundle.js"]
                :comment-str comment-out})

(def transpile-opts {:editor-in-mode "text/x-ocaml"
                     :editor-out-mode "javascript"
                     :beautify? false
                     :eval-fn (partial transpile-reason 2)
                     :external-scripts [(codemirror-mode-src "mllike") "https://viebel.github.io/klipse/repo/js/bs.js" "https://viebel.github.io/klipse/repo/js/refmt.js"  "https://viebel.github.io/klipse/repo/js/pretty_format.js"]
                     :comment-str comment-out})


(def transpile->ocaml-opts {:editor-in-mode "text/x-ocaml"
                            :editor-out-mode "text/x-ocaml"
                            :beautify? false
                            :eval-fn (partial transpile-reason->ocaml 2)
                            :external-scripts [(codemirror-mode-src "mllike")  "https://viebel.github.io/klipse/repo/js/refmt.js"]
                            :comment-str comment-out})


(register-mode "eval-reason" "selector_eval_reason" eval-opts)
(register-mode "transpile-reason" "selector_transpile_reason" transpile-opts)
(register-mode "transpile-reason->ocaml" "selector_transpile_reason_to_ocaml" transpile->ocaml-opts)

(def eval-3-opts {:editor-in-mode "text/x-ocaml"
                  :editor-out-mode "javascript"
                  :beautify? false
                  :eval-fn (partial eval-reason 3)
                  :external-scripts [(codemirror-mode-src "mllike") "https://viebel.github.io/klipse/repo/js/bs.js" "https://viebel.github.io/klipse/repo/js/refmt-3.js" "https://viebel.github.io/klipse/repo/js/stdlibBundle.js"]
                  :comment-str comment-out})

(def eval-3-with-types-opts {:editor-in-mode "text/x-ocaml"
                  :editor-out-mode "text/x-ocaml"
                  :beautify? false
                  :eval-fn (partial eval-reason-with-types 3)
                  :external-scripts [(codemirror-mode-src "mllike") "https://viebel.github.io/klipse/repo/js/refmt-3.js" "https://viebel.github.io/klipse/repo/js/ocaml_evaluate_type.js"]
                  :comment-str comment-out})

(def transpile-3-opts {:editor-in-mode "text/x-ocaml"
                       :editor-out-mode "javascript"
                       :beautify? false
                       :eval-fn (partial transpile-reason 3)
                       :external-scripts [(codemirror-mode-src "mllike") "https://viebel.github.io/klipse/repo/js/bs.js" "https://viebel.github.io/klipse/repo/js/refmt-3.js"  "https://viebel.github.io/klipse/repo/js/pretty_format.js"]
                       :comment-str comment-out})

(def transpile-3->ocaml-opts {:editor-in-mode "text/x-ocaml"
                               :editor-out-mode "text/x-ocaml"
                               :beautify? false
                               :eval-fn (partial transpile-reason->ocaml 3)
                               :external-scripts [(codemirror-mode-src "mllike") "https://viebel.github.io/klipse/repo/js/refmt-3.js"]
                              :comment-str comment-out})

(def ocaml->reason-opts {:editor-in-mode "text/x-ocaml"
                         :editor-out-mode "text/x-ocaml"
                         :beautify? false
                         :eval-fn transpile-ocaml->reason
                         :external-scripts [(codemirror-mode-src "mllike") "https://viebel.github.io/klipse/repo/js/refmt-3.js"]
                         :comment-str comment-out})

(register-mode "eval-reason-3" "selector_eval_reason_3" eval-3-opts)
(register-mode "transpile-reason-3" "selector_transpile_reason_3" transpile-3-opts)
(register-mode "transpile-reason-3->ocaml" "selector_transpile_reason_3_to_ocaml" transpile-3->ocaml-opts)
(register-mode "ocaml->reason" "selector_ocaml_to_reason" ocaml->reason-opts)
(register-mode "eval-reason-3-with-types" "selector_eval_reason_3_with_types" eval-3-with-types-opts)
