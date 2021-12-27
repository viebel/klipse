(ns klipse.lang.js-compile
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require 
    [cljs-http.client :as http]
    [cljs.core.async :refer [timeout <! >! chan]]
    [klipse.common.registry :refer [register-mode]]))

(defn advanced-compile [code]
  (let [flags  (clj->js {:jsCode [{:src code}]
                         :compilationLevel "ADVANCED"})
        _ (js/console.log flags)
        {:keys [compiledCode errors warnings]} (js->clj (js/compile flags) :keywordize-keys true)]
    (if (seq errors)
      (str "//errors during compilation:\n"
        (js/JSON.stringify (clj->js errors)))
      compiledCode)))

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
           :min-eval-idle-msec 5000; advanced compilation takes a while, so we throttle a bit
           :comment-str "//"})

(register-mode "compile-javascript" "selector_compile_js" opts)
