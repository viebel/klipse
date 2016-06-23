(ns klipse.php
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require 
    cljsjs.codemirror.mode.xml
    cljsjs.codemirror.mode.javascript
    cljsjs.codemirror.mode.css
    cljsjs.codemirror.mode.clike
    cljsjs.codemirror.mode.php
    [klipse.io :as io]
    [klipse.utils :refer [runonce]]
    [cljs.core.async :refer [<! timeout chan put!]]
    [klipse.plugin :refer [register-mode]]
    [gadjett.core :as gadjett :refer-macros [dbg]]))


(def load-php-engine
    (fn []
      (.createEngine js/uniter "PHP")))

(defn execute [engine input]
  (.execute engine input))

(defn str-eval-async [exp _]
  (let [c (chan)]
    (go
      (let [php-engine  (dbg (load-php-engine))]
        (-> (.getStdout php-engine)
            (.on "data" #(put! c (dbg (str %)))))
        (<! (timeout 5))
        (execute php-engine (dbg (or exp "//aaa")))))
    c))

(def opts {:editor-in-mode "php"
           :editor-out-mode "php"
           :eval-fn str-eval-async
           :comment-str "//"})

(register-mode "eval-php" "selector_eval_php" opts)
