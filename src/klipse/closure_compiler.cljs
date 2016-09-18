(ns klipse.closure-compiler
  (:require-macros [gadjett.core :refer [dbg]]))

(defn advanced-compile [code & {:keys [externs]}]
  (let [flags  (clj->js {:jsCode [{:src code}]
                         :externs [{:src externs}]
                         :env "CUSTOM"
                         ;:warningLevel "VERBOSE"
                         :compilationLevel "ADVANCED"})
        _ (js/console.log flags)
        res (js/compile flags)
        _ (js/console.log res)
        {:keys [compiledCode errors warnings]} (js->clj res :keywordize-keys true)]
    (if (seq errors)
      (str "//errors during compilation:\n"
        (js/JSON.stringify (clj->js errors)))
      (str "compilation:\n" compiledCode))))
