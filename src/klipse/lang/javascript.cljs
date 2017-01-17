(ns klipse.lang.javascript
  (:require-macros
    [klipse.macros :refer [my-with-redefs]]
    [gadjett.core :refer [dbg]]
    [purnam.core :refer [!>]]
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [klipse.utils :refer [load-scripts verbose?]]
    [cljs-http.client :as http]
    [clojure.string :as string]
    [cljs.core.async :refer [<! chan put!]]
    [klipse.common.registry :refer [register-mode scripts-src]]))

(def known-external-libs
  {
   "immutable" "https://raw.githubusercontent.com/facebook/immutable-js/master/dist/immutable.min.js"
   "jQuery" "https://code.jquery.com/jquery-2.2.4.min.js"
   "underscore" "http://underscorejs.org/underscore-min.js"})

(def eval-in-global-scope js/eval); this is the trick to make `eval` work in the global scope: http://perfectionkills.com/global-eval-what-are-the-options/

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
    (put! c (string/join " " args))
    (put! c "\n")))

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

(defn setup-container [container-id]
  (str "klipse_container = document.getElementById('" container-id "');\n"
       "klipse_container_id = '"container-id "';\n"))

(defn str-eval-js-async [exp {:keys [async-code? external-libs container-id] :or {async-code? false external-libs nil}}]
  (let [exp (str (setup-container container-id) exp)
        c (chan)]
    (when (verbose?) (js/console.info "[javascript] evaluating" exp))
    (go
      (let [[status http-status script] (<! (load-scripts (map external-lib-path external-libs)))]
        (try
          (put! c (if (= :ok status)
                    (try
                      (if async-code?
                        (eval-with-logger! c exp)
                        (my-with-redefs [js/console.log (append-to-chan c)]
                                        (-> exp
                                            eval-in-global-scope
                                            beautify)))
                      (catch :default o
                        (str o)))
                    (str "//Cannot load script: " script "\n"
                         "//Error: " http-status))))))
    c))


(def opts {:editor-in-mode "javascript"
           :editor-out-mode "javascript"
           :eval-fn str-eval-js-async
           :external-scripts [(scripts-src "pretty_format.js")]
           :comment-str "//"})

(register-mode "eval-javascript" "selector_eval_js" opts)

(defn babel [src]
   (-> (!> js/Babel.transform src #js {:presets #js ["es2017"]})
       (aget "code")))

(defn eval-es2017 [exp {:keys [async-code? container-id] :or {async-code? false}}]
  (let [exp (str (setup-container container-id) exp)
        c (chan)]
    (when (verbose?) (js/console.info "[javascript es2017] evaluating" exp))
    (try
      (let [transpiled-exp (babel exp)]
        (put! c (if async-code?
                  (eval-with-logger! c transpiled-exp)
                  (my-with-redefs [js/console.log (append-to-chan c)]
                                  (-> transpiled-exp
                                      eval-in-global-scope
                                      beautify)))))
      (catch :default o
        (put! c (str o))))
    c))

(def es2017-opts {:editor-in-mode "javascript"
           :editor-out-mode "javascript"
           :eval-fn eval-es2017
           :external-scripts [(scripts-src "pretty_format.js") (scripts-src "babel.min.js") (scripts-src "babel_polyfill.min.js")]
           :comment-str "//"})

(register-mode "eval-es2017" "selector_es2017" es2017-opts)
