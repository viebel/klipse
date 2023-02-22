(ns klipse.utils
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [cljs.reader :refer [read-string]]
   [clojure.walk :refer [keywordize-keys]]
   [cljs-http.client :as http]
   [cljs.core.async :refer [timeout <! chan put!]]
   [cemerick.url :refer [url]]
   [applied-science.js-interop :as j]))

(defn current-url []
  (if-let [loc (if (exists? js/location) js/location "")]
    (url (aget loc "href"))))

(defn url-parameters* []
  (-> (current-url)
      :query
      keywordize-keys))

(def url-parameters (memoize url-parameters*))

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

(defn default-permitted-symbols []
                                        ; it doesn't work with setTimeout and setInterval
                                        ; in Firefox, it causes this error: TypeError: 'setTimeout' called on an object that does not implement interface Window.
  ["console" "setTimeout" "setInterval" "Math" "Date"])

(defn default-forbidden-symbols []
  ["document" "XMLHttpRequest" "eval" "window" "Function"])

(comment (default-forbidden-symbols))
(def secured-eval false)
(def eval-in-global-scope js/eval) ; this is the trick to make `eval` work in the global scope: http://perfectionkills.com/global-eval-what-are-the-options/
                                   ; if we make it a function (defn eval-in-global-scope[x] (js/eval x)) - code is not shared properly between javascript snippets - see https://github.com/viebel/klipse/issues/246#issue-214278867

(defn securize-eval!* [the-forbidden-symbols]
                                        ;inspired by https://blog.risingstack.com/writing-a-javascript-framework-sandboxed-code-evaluation/
  (set! secured-eval true)
  (let [original-eval js/eval]
    (j/assoc! js/window :eval (fn [src]
                        (original-eval (str ";(function(){with (this){ " src "}}).call(klipse_eval_sandbox)"))))
    (set! eval-in-global-scope js/eval)
    (j/assoc! js/window :klipse_unsecured_eval original-eval)
    (j/assoc! js/window :klipse_eval_sandbox (clj->js (zipmap the-forbidden-symbols (repeat (js/Object.create nil)))))
    #_(set! js/klipse-eval-sandbox (clj->js (zipmap (js/Object.getOwnPropertyNames js/window) (repeat {}))))
    #_(doseq [sym permitted-symbols]
      (aset js/klipse-eval-sandbox sym (aget js/window sym)))))

(def securize-eval! (runonce securize-eval!*))

(defn setup-container! [container-id]
  (when-not secured-eval
    ;; it is not safe to give access to the DOM
    ;; think about klipse_container.innerHTML='<a href="http://google.com">google</a>';
    (aset js/window "klipse_container" (js/document.getElementById container-id))
    (aset js/window "klipse_container_id" container-id)))

(defn unsecured-eval-in-global-scope [s]
  ((or (j/get js/window :klipse_unsecured_eval) js/eval) s)) ; we have to use the unsecured eval because external scripts usually manipulate the DOM!
                                        ;this is the trick to make `eval` work in the global scope: http://perfectionkills.com/global-eval-what-are-the-options/



(defn load-script [script & {:keys [secured-eval?] :or {secured-eval? false}}]
  (go
    (js/console.info "loading:" script)
    (let [{:keys [status body]} (<! (http/get script {:with-credentials? false}))]
      (if (= 200 status)
        (do
          (js/console.info "evaluating:" script)
          (if secured-eval?
            (eval-in-global-scope body)
            (unsecured-eval-in-global-scope body))
          (js/console.info "evaluation done:" script)          
          [:ok script])
        [status script]))))

(def load-script-mem (memoize-async load-script))

(defn load-scripts [scripts & {:keys [secured-eval?] :or {secured-eval? false}}]
  (go-loop [the-scripts scripts]
    (if (seq the-scripts)
      (let [script (str (first the-scripts))
            [status script] (<! (load-script-mem script :secured-eval? secured-eval?))]
        (if (= :ok status)
          (recur (rest the-scripts)))
        [status script])
      [:ok])))

(def load-scripts-mem (memoize-async load-scripts))

(defn verbose? []
  (boolean (read-string (or (:verbose (url-parameters)) "false"))))

(defn klipse-settings* []
  (let [w (if (exists? js/window) js/window #js {})]
    (->
      (aget w "klipse_settings")
      (js->clj :keywordize-keys true))))

(def klipse-settings (memoize klipse-settings*))

(defn add-script-tag! [url ]
  (let [c (chan)]
    (let [node (js/document.createElement "script")
          body (aget js/document "body")]
      (aset node "src" url)
      (aset node "onerror" #(put! c [:error url]))      
      (aset node "onload" #(put! c [:ok url]))
      (aset node "type" "text/javascript")
      (j/call body :appendChild node)
      c)))


(def add-script-tag-once! (runonce add-script-tag!))
