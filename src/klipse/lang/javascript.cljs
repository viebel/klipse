(ns klipse.lang.javascript
  (:require-macros
    [klipse.macros :refer [my-with-redefs]]
    [gadjett.core :refer [dbg]]
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [klipse.utils :refer [load-scripts]]
    [cljs-http.client :as http]
    [clojure.string :as string]
    [cljs.core.async :refer [<! chan put!]]
    [klipse.common.registry :refer [register-mode]]))

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
        (js/pretty.pretty 2)
        str)
    (catch js/Object o
      (str js-exp))))

(defn str-eval-js-async [exp {:keys [external-libs] :or {external-libs nil}}]
  (let [c (chan)]
    (my-with-redefs [js/console.log (fn[& args]
                                      (put! c (string/join " "  args))
                                      (put! c "\n"))]
                    (go
                      (let [[status http-status script] (<! (load-scripts (map external-lib-path external-libs)))]
                        (try
                          (put! c (if (= :ok status)
                                    (try
                                      (-> exp
                                          eval-in-global-scope
                                          beautify)
                                      (catch :default o
                                        (str o)))
                                    (str "//Cannot load script: " script "\n"
                                         "//Error: " http-status)))))))
    c))


(def opts {:editor-in-mode "javascript"
           :editor-out-mode "javascript"
           :eval-fn str-eval-js-async
           :external-scripts ["http://viebel.github.io/klipse/repo/js/pretty_print_javascript.js"]
           :comment-str "//"})

(register-mode "eval-javascript" "selector_eval_js" opts)
