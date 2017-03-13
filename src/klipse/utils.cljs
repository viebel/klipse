(ns klipse.utils
  (:require-macros
   [klipse.macros :refer [dbg]]
   [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [cljs.reader :refer [read-string]]
   [clojure.walk :refer [keywordize-keys]]
   [cljs-http.client :as http]
   [cljs.core.async :refer [timeout <!]]
   [cemerick.url :refer [url]]))


(defn current-url []
  (url (aget js/location "href")))

(defn url-parameters* []
  (-> (current-url)
      :query
      keywordize-keys))

(def url-parameters (memoize url-parameters*))

(defn add-url-parameter
  "Returns the current url with an additional parameter.
  If the parameter already exists, it is overridden."
  [base-url key value]
  (-> base-url
      (assoc-in [:query (name key)] value)
      str))

(defn create-url-with-input [base-url input]
  (-> (if base-url (url base-url) (current-url))
      (add-url-parameter :cljs_in input)))

(defn debounce [func wait-in-ms]
  (let [counter (atom 0)]
    [(fn [] ; a function that will execute `func` after a while if the counter is 0
       (go
         (swap! counter inc)
         (<! (timeout wait-in-ms))
         (swap! counter dec)
         (when (zero? @counter)  
           (func))))
     (fn [] ; a function that executes `func` immediately
       (go
         (func)
         (swap! counter inc)
         (<! (timeout wait-in-ms))
         (swap! counter dec)))]))

(defn gist-path-raw [gist-id]
  (str "https://gist.githubusercontent.com/" gist-id "/raw" "?" (rand)))

(defn gist-path-page [gist-id]
  (str "https://gist.github.com/" gist-id)) 

(defn read-input-from-gist [gist-id]
  (go
    (when gist-id 
      (let [gist-url (gist-path-raw gist-id)
            {:keys [status body]} (<! (http/get
                                       gist-url
                                       {:with-credentials? false}))]
        (if-not (= status 200)
          (str "\""
               "Wrong gist path: " gist-url "\n"
               "gist-id= " gist-id "\n"
               "http status: " status
               "\"")
          body)))))

(defn runonce [f]
  (let [ran (atom false)]
    (fn [& args]
      (when-not @ran
        (reset! ran true)
        (apply f args)))))

(defn runonce-async
  "Returns a function that will run `f` only once.
  If `f` succeeds (returns [:ok & args]), on subsequent calls it will return [:ok].
  `f` must return a channel."
  [f]
  (let [ran (atom false)]
    (fn [& args]
      (go
        (if-not @ran
          (let [res (<! (apply f args))]
            (when (= :ok (first res))
              (reset! ran true))
            res)
          [:ok])))))

(defn memoize-async
  "Returns a memoized version of f.
  If `f` succeeds (returns [:ok & args]), on subsequent calls it will return the cached results.
  `f` must return a channel."
  [f]
  (let [ran (atom {})]
    (fn [& args]
      (go
        (if-not (contains? @ran args)
          (let [res (<! (apply f args))]
            (when (= :ok (first res))
              (swap! ran assoc args res))
            res)
          (get @ran args))))))

(def eval-in-global-scope (or js/window.klipse_unsecured_eval js/eval)) ; we have to use the unsecured eval because external scripts usually manipulate the DOM!
                                        ;this is the trick to make `eval` work in the global scope: http://perfectionkills.com/global-eval-what-are-the-options/

(defn load-script [script]
  (go
    (js/console.info "loading:" script)
    (let [{:keys [status body]} (<! (http/get script {:with-credentials? false}))]
      (if (= 200 status)
        (do
          (js/console.info "evaluating:" script)
          (eval-in-global-scope body)
          [:ok script])
        [status script]))))

(def load-script-mem (memoize-async load-script))

(defn load-scripts [scripts]
  (go-loop [the-scripts scripts]
    (if (seq the-scripts)
      (let [script (str (first the-scripts))
            [status script] (<! (load-script-mem script))]
        (if (= :ok status)
          (recur (rest the-scripts)))
        [status script])
      [:ok])))

(def load-scripts-mem (memoize-async load-scripts))

(defn verbose? []
  (boolean (read-string (or (:verbose (url-parameters)) "false"))))

(defn klipse-settings* []
  (->
   (aget js/window "klipse_settings")
   (js->clj :keywordize-keys true)))

(def klipse-settings (memoize klipse-settings*))
