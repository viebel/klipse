(ns klipse.lang.clojure
  (:require [cljs.reader :refer [read-string]]
            [applied-science.js-interop :as j]
            [cljs.core.async :refer [put! chan]]
            [klipse.common.registry :refer [codemirror-mode-src scripts-src register-mode]]
            [klipse.utils :refer [url-parameters verbose? klipse-settings setup-container!]]))


;; TODO
(comment
  (set! *klipse-settings* (klipse-settings))
  (set! *verbose?* (verbose?))
  (set! *cache-buster?* (boolean (read-string (or (:cache-buster (url-parameters)) "false")))))

(defn str-eval-async [exp opts]
  (let [c (chan)]
    (j/call-in js/klipse_clj [:lang :clojure :eval_and_callback] exp
               (fn [[_ res]]
                 (js/console.log "RRRR" res (str (js->clj res)))
                 (put! c (str (js->clj res)))))
    c))

(defn str-compile-async [exp opts])

(def eval-opts {:editor-in-mode   "clojure"
                :editor-out-mode  "clojure"
                :eval-fn          (fn [exp opts] (str-eval-async exp (assoc opts :setup-container-fn setup-container! :verbose (verbose?))))
                :external-scripts [(codemirror-mode-src "clojure")
                                   (scripts-src "klipse_clj.min.js?aaaa")]
                :comment-str      ";"})

(def compile-opts {:editor-in-mode   "clojure"
                   :editor-out-mode  "javascript"
                   :external-scripts [(codemirror-mode-src "clojure")
                                      (codemirror-mode-src "javascript")
                                      (scripts-src "klipse_clj.min.js")]
                   :eval-fn          (fn [exp opts] (str-compile-async exp (assoc opts :verbose (verbose?))))
                   :comment-str      ";"})

(register-mode "eval-clojure" "selector" eval-opts)
(register-mode "transpile-clojurescript" "selector_js" compile-opts)
