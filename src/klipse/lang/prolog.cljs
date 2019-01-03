(ns klipse.lang.prolog
  (:require-macros
   [gadjett.core :refer [dbg]]
   [purnam.core :refer [!> ?]]
   [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [clojure.string :as string]
   [cljs.core.async :refer [chan put! timeout]]
   [klipse.utils :refer [runonce]]
   [klipse.common.registry :refer [codemirror-mode-src register-mode]]))


(def session (atom nil))
(defn init []
  (when (not @session)
    (reset! session (!> js/pl.create))))


(defn consult* [exp]
  (let [my-session @session
        res (!> my-session.consult exp)]
    (if (= true res)
      [:ok true]
      [:error (str res)])))

(defn consult [exp _]
  (let [c (chan)]
    (try
      (init)
      (let [[status res] (consult*  exp)]
        (if (= :error status)
          (put! c res)
          (put! c "Rules are valid.")))
      (catch :default o
        (put! c (str o))))
    c))

(defn query* [thread exp]
  (let [res (!> thread.query exp)]
    (if (= true res)
      [:ok true]
      [:error (str res)])))

(defn pl-answer [thread]
  (let [c (chan)]
    (!> thread.answer (fn [answer]
                        (put! c (if (nil? answer) "nil" answer))))
    c))

(defn answer* [thread c]
  (go-loop [cnt 0
            num-solutions 0]
    (let [ans (<! (pl-answer thread))]
      (case ans
        false (if (zero? num-solutions)
                (put! c "No solutions.")
                (put! c (str "Found " num-solutions " solutions.")))
        "nil" (do
              (put! c {:data (str num-solutions " solutions after "  (* (inc cnt) 1000) " tries. Continuing to try...\n")
                       :remove-previous-results true})
              (<! (timeout 100))
              (recur (inc cnt) num-solutions))
        (do
          (if (< cnt 30)
            (do
              (put! c (str (!> js/pl.format_answer ans) "\n"))
              (<! (timeout 100))
              (recur (inc cnt) (inc num-solutions)))
            (put! c (str "Found " num-solutions " so far, they might be more..."))))))))

(defn query [exp _]
  (let [c (chan)
        Thread (? js/pl.type.Thread) ; to understand the difference between threads and sessions, see https://github.com/jariazavalverde/tau-prolog/issues/64
        thread (new Thread @session)]
    (try
      (init)
      (let [[status res] (query* thread exp)]
        (if (= :error status)
          (put! c res)
          (answer* thread c)))
      (catch :default o
        (put! c (str o))))
    c))


(def rules-opts {:editor-in-mode "logtalk"
                 :editor-out-mode "text"
                 :beautify? true
                 :eval-fn consult
                 :external-scripts ["https://viebel.github.io/klipse/repo/js/tau-prolog.js" "https://viebel.github.io/klipse/repo/js/codemirror-logtalk.js"]
                 :comment-str "%"})


(def query-opts {:editor-in-mode "logtalk"
                 :editor-out-mode "text"
                 :beautify? true
                 :eval-fn query
                 :external-scripts ["https://viebel.github.io/klipse/repo/js/tau-prolog.js" "https://viebel.github.io/klipse/repo/js/codemirror-logtalk.js"]
                 :comment-str "%"})


(register-mode "prolog-rules" "selector_prolog_rules" rules-opts)
(register-mode "prolog-query" "selector_prolog_query" query-opts)

