(ns klipse.server-eval
  (:use-macros [purnam.core :only [? ! !>]])
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require 
    cljsjs.codemirror.mode.python
    cljsjs.codemirror.mode.clike
    cljsjs.codemirror.mode.go
    [klipse.replit :refer [connect-and-evaluate]]
    [klipse.io :as io]
    [klipse.utils :refer [runonce]]
    [cljs.core.async :refer [chan <! >! put!]]
    [klipse.plugin :refer [register-mode]]
    [gadjett.core :as gadjett :refer-macros [dbg]]))

(when (? js/window.ReplitClient)
  (def python
    {:selector "selector_eval_python"
     :name "eval-python"
     :opts {:editor-in-mode "python"
            :editor-out-mode "python"
            :replit-language "python3"
            :comment-str "#"}})

  (def csharp
    {:selector "selector_eval_csharp"
     :name "eval-csharp"
     :opts {:editor-in-mode "text/x-csharp"
            :editor-out-mode "text/x-csharp"
            :replit-language "csharp"
            :comment-str "#"}})

  (def go
    {:selector "selector_eval_go"
     :name "eval-go"
     :opts {:editor-in-mode "go"
            :editor-out-mode "go"
            :replit-language "go"
            :comment-str "//"}})

  (doseq [{:keys [selector name opts]} [python csharp go]]
    (let [enriched-opts (assoc opts :eval-fn (partial connect-and-evaluate (:replit-language opts)))]
      (register-mode name selector enriched-opts))))
