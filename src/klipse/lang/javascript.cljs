(ns klipse.lang.javascript
  (:require-macros
   [gadjett.core :refer [dbg my-with-redefs]]
   [purnam.core :refer [!> !]]
   [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [klipse.utils :refer [load-scripts verbose? eval-in-global-scope setup-container!]]
   [cljs-http.client :as http]
   [clojure.string :as string]
   [cljs.core.async :refer [<! chan put!]]
   [klipse.common.registry :refer [stopify-src codemirror-mode-src scripts-src register-mode]]))

;(set! *warn-on-infer* true)
(def known-external-libs
  {
   "immutable" "https://cdnjs.cloudflare.com/ajax/libs/immutable/3.8.2/immutable.js"
   "jQuery" "https://code.jquery.com/jquery-2.2.4.js"
   "underscore" "http://underscorejs.org/underscore-min.js"})

(defn external-lib-path [lib-name-or-url]
  (get known-external-libs lib-name-or-url lib-name-or-url))

(defn beautify [js-exp]
  (try
    (-> js-exp
        js/prettyFormat
        str)
    (catch js/Object o
      (str js-exp))))

(defn append-to-chan [c]
  (fn [& args]
    (put! c (string/join " "  (map beautify args)))
    (put! c "\n")
    js/undefined))

(defn eval-with-logger!
  "Evals an expression where the window.console object is lexically bound to an object that puts the console output on a channel.
  Returns the empty string.
  It works fine also with asynchronous code."
  [c exp]
  (let [logger (append-to-chan c)
        wrapped-exp (str "(function(console) {" exp "}(window.klipse_snippet_console))")]
    (set! js/klipse_snippet_console #js {:log logger})
    (eval-in-global-scope wrapped-exp)
    ""))

(defn stopify-compile [source]
  (let [asyncRun (!> js/stopify.stopifyLocally source)]
    (do
      ;; Define globals
      (goog.object/set asyncRun.g "console" js/console)
      (goog.object/set asyncRun.g "window" js/window)
      (goog.object/set asyncRun.g "alert" js/alert)
      (goog.object/set asyncRun.g "Set" js/Set)
      (goog.object/set asyncRun.g "Symbol" js/Symbol)
      (goog.object/set asyncRun.g "Date" js/Date)
      (goog.object/set asyncRun.g "Int32Array" js/Int32Array)
      (goog.object/set asyncRun.g "Promise" js/Promise)
      (goog.object/set asyncRun.g "klipse_container" js/klipse_container)
      ;; Set the function called on the last expression
      (goog.object/set asyncRun.g "callbackLast" js/console.log)
      asyncRun)))

(defn stopify-run [asyncRun]
  (do
    (!> js/console.info asyncRun.code)
    (!> asyncRun.run identity)
    ""))

(defn str-eval-js-async [exp {:keys [async-code? external-libs container-id] :or {async-code? false external-libs nil}}]
  (let [c (chan)]
    (when (verbose?) (js/console.info "[javascript] evaluating" exp))
    (go
      (if (string/blank? exp)
        (put! c "")
        (do (setup-container! container-id)
            (let [[status http-status script] (<! (load-scripts (map external-lib-path external-libs) :secured-eval? false))]
              (try
                (put! c (if (= :ok status)
                          (try
                            (if async-code?
                              (eval-with-logger! c exp)
                              (my-with-redefs [js/console.log (append-to-chan c)]
                                              (-> exp
                                                  stopify-compile
                                                  stopify-run
                                                  beautify)))
                            (catch :default o
                              (str o)))
                          (str "//Cannot load script: " script "\n"
                               "//Error: " http-status))))))))
    c))


(def opts {:editor-in-mode "javascript"
           :editor-out-mode "javascript"
           :beautify-output? false
           :eval-fn str-eval-js-async
           :external-scripts [(codemirror-mode-src "javascript")
                              stopify-src
                              (scripts-src "pretty_format.js")]
           :comment-str "//"})

(register-mode "eval-javascript" "selector_eval_js" opts)

(defn babel [src]
  (-> (!> js/Babel.transform src #js {:presets #js ["es2017" "stage-2" "stage-3"]})
      (aget "code")))

(defn eval-es2017 [exp {:keys [async-code? container-id] :or {async-code? false}}]
  (let [c (chan)]
    (when (verbose?) (js/console.info "[javascript es2017] evaluating" exp))
    (try
      (if (string/blank? exp)
        (put! c "")
        (do
          (setup-container! container-id)
          (let [transpiled-exp (babel exp)]
            (put! c (if async-code?
                      (eval-with-logger! c transpiled-exp)
                      (my-with-redefs [js/console.log (append-to-chan c)]
                                      (-> transpiled-exp
                                          eval-in-global-scope
                                          beautify)))))))
      (catch :default o
        (put! c (str o))))
    c))

(def es2017-opts {:editor-in-mode "javascript"
                  :editor-out-mode "javascript"
                  :beautify-output? false
                  :eval-fn eval-es2017
                  :external-scripts [(codemirror-mode-src "javascript")
                                     (scripts-src "pretty_format.js")
                                     (scripts-src "babel.min.js")
                                     stopify-src
                                     (scripts-src "babel_polyfill.min.js")]
                  :comment-str "//"})

(register-mode "eval-es2017" "selector_es2017" es2017-opts)
