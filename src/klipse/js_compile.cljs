(ns klipse.js-compile
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [klipse.closure-compiler :refer [advanced-compile]]
    [cljs-http.client :as http]
    [cljs.core.async :refer [timeout <! >! chan]]
    [klipse.plugin :refer [register-mode]]))


(defn str-compile-js-async [exp _]
  (let [c (chan)]
    (go
      (>! c "//compiling...\n")
      (<! (timeout 0))
      (>! c (advanced-compile exp)))
    c))


(def opts {:editor-in-mode "javascript"
           :editor-out-mode "javascript"
           :eval-fn str-compile-js-async
           :min-eval-idle-msec 5000; advanced compilatio n takes a while, so we throttle a bit
           :comment-str "//"})

(register-mode "compile-javascript" "selector_compile_js" opts)
