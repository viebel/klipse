(ns klipse.lang.clojure
  (:require [klipse-clj.lang.clojure :refer [str-eval-async str-compile-async]]
            [klipse-clj.lang.clojure.io :refer [*klipse-settings* *verbose?* *cache-buster?*]]
            [cljs.reader :refer [read-string]]
            [klipse.common.registry :refer [codemirror-mode-src register-mode scripts-src]]
            [klipse.utils :refer [url-parameters verbose? klipse-settings setup-container!]]))


(set! *klipse-settings* (klipse-settings))
(set! *verbose?* (verbose?))
(set! *cache-buster?* (boolean (read-string (or (:cache-buster (url-parameters)) "false"))))

(def eval-opts {:editor-in-mode   "clojure"
                :editor-out-mode  "clojure"
                :eval-fn          (fn [exp opts] (str-eval-async exp (assoc opts :setup-container-fn setup-container! :verbose (verbose?))))
                :external-scripts [(codemirror-mode-src "clojure")]
                :comment-str      ";"})

(def compile-opts {:editor-in-mode   "clojure"
                   :editor-out-mode  "javascript"
                   :external-scripts [(codemirror-mode-src "clojure") (codemirror-mode-src "javascript")]
                   :eval-fn          (fn [exp opts] (str-compile-async exp (assoc opts :verbose (verbose?))))
                   :comment-str      ";"})

(register-mode "eval-clojure" "selector" eval-opts)
(register-mode "transpile-clojurescript" "selector_js" compile-opts)
