(ns klipse.js-eval
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require 
    [klipse.io :as io]
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]
    [gadjett.core :as gadjett :refer-macros [dbg]]))

(def known-external-lib
  {
   "immutable" "https://raw.githubusercontent.com/facebook/immutable-js/master/dist/immutable.min.js"
   "jQuery" "https://code.jquery.com/jquery-2.2.4.min.js"
   "underscore" "http://underscorejs.org/underscore-min.js"})

(defn load-scripts [scripts]
  (go-loop [the-scripts scripts]
           (if (seq the-scripts)
             (let [script (first the-scripts)
                   _ (println "loading:" script)
                   {:keys [status body]} (<! (http/get script {:with-credentials? false}))]
               (if (= 200 status)
                 (do
                   (println "evaluating:" script)
                   (js/eval body)
                   (recur (rest the-scripts)))
                 [:error status script]))
             [:ok])))

(defn external-lib-path [lib-name-or-url]
  (get known-external-lib lib-name-or-url lib-name-or-url))

(defn str-eval-js-async [exp {:keys [external-libs] :or {external-libs nil}}]
  (go
    (let [[status http-status script] (<! (load-scripts (map external-lib-path external-libs)))]
      (if (= :ok status)
        (dbg (try (-> exp
                 js/eval
                 str)
              (catch js/Object o
                (str o))))
        (str "Cannot load script: " script "\n"
             "error: " http-status)))))