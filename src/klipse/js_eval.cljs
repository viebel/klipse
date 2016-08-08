(ns klipse.js-eval
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require 
    cljsjs.js-beautify
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]
    [klipse.plugin :refer [register-mode]]
    [gadjett.core :as gadjett :refer-macros [dbg]]))

(def known-external-libs
  {
   "immutable" "https://raw.githubusercontent.com/facebook/immutable-js/master/dist/immutable.min.js"
   "jQuery" "https://code.jquery.com/jquery-2.2.4.min.js"
   "underscore" "http://underscorejs.org/underscore-min.js"})

(def eval-in-global-scope js/eval); this is the trick to make `eval` work in the global scope: http://perfectionkills.com/global-eval-what-are-the-options/
(defn load-scripts [scripts]
  (go-loop [the-scripts scripts]
           (if (seq the-scripts)
             (let [script (first the-scripts)
                   _ (js/console.info "loading:" script)
                   {:keys [status body]} (<! (http/get script {:with-credentials? false}))]
               (if (= 200 status)
                 (do
                   (js/console.info "evaluating:" script)
                   (eval-in-global-scope body)
                   (recur (rest the-scripts)))
                 [:error status script]))
             [:ok])))

(defn external-lib-path [lib-name-or-url]
  (get known-external-libs lib-name-or-url lib-name-or-url))

(defn beautify [js-exp]
  (try 
    (-> js-exp
        js/JSON.stringify
        js/js_beautify)
    (catch js/Object o
      (str js-exp))))

(defn str-eval-js-async [exp {:keys [external-libs] :or {external-libs nil}}]
  (go
    (let [[status http-status script] (<! (load-scripts (map external-lib-path external-libs)))]
      (if (= :ok status)
        (try (-> exp
                 eval-in-global-scope
                 beautify)
             (catch js/Object o
               (str o)))
        (str "Cannot load script: " script "\n"
             "error: " http-status)))))


(def opts {:editor-in-mode "javascript"
           :editor-out-mode "javascript"
           :eval-fn str-eval-js-async
           :comment-str "//"})

(register-mode "eval-javascript" "selector_eval_js" opts)
