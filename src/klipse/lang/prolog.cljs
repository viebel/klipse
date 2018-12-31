(ns klipse.lang.prolog
  (:require-macros
   [gadjett.core :refer [dbg my-with-redefs]]
   [purnam.core :refer [!> ?]]
   [cljs.core.async.macros :refer [go]])
  (:require
   [clojure.string :as string]
   [cljs.core.async :refer [chan put!]]
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

(defn query* [exp]
  (let [my-session @session
        res (!> my-session.query exp)]
    (if (= true res)
      [:ok true]
      [:error (str res)])))

(defn answer* [cnt num-solutions callback]
  (let [my-session @session]
    (!> my-session.answer
        (fn [ans]
          (case ans
            false (if (zero? num-solutions)
                    (callback "No solutions.")
                    (callback (str "Found " num-solutions " solutions.")))
            nil (js/setTimeout
                 #(do
                    (callback {:data (str num-solutions " solutions after "  (* (inc cnt) 1000) " tries. Continuing to try...\n")
                               :remove-previous-results true})
                    (answer* (inc cnt) num-solutions callback))
                  100)
            (do
              (callback (str (!> js/pl.format_answer ans) "\n"))
              (answer* (inc cnt) (inc num-solutions) callback)))))))

(defn query [exp _]
  (let [c (chan)]
    (try
      (init)
      (let [[status res] (query*  exp)]
        (if (= :error status)
          (put! c res)
          (answer* 0 0 #(put! c %))))
      (catch :default o
        (put! c (str o))))
    c))


(def rules-opts {:editor-in-mode "text"
                 :editor-out-mode "text"
                 :beautify? false
                 :eval-fn consult
                 :external-scripts ["https://viebel.github.io/klipse/repo/js/tau-prolog.js"]
                 :comment-str "%"})


(def query-opts {:editor-in-mode "text"
                 :editor-out-mode "text"
                 :beautify? false
                 :eval-fn query
                 :external-scripts ["https://viebel.github.io/klipse/repo/js/tau-prolog.js"]
                 :comment-str "%"})


(register-mode "prolog-rules" "selector_prolog_rules" rules-opts)
(register-mode "prolog-query" "selector_prolog_query" query-opts)

