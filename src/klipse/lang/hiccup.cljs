(ns klipse.lang.hiccup
  (:require-macros
   [gadjett.core :refer [dbg]]
   [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [goog.dom :as gdom]
   [applied-science.js-interop :as j]
   [clojure.string :as string]
   [cljs.core.async :refer [<! chan close!]]
   [klipse.common.registry :refer [codemirror-mode-src scripts-src register-mode]]
   [klipse-clj.lang.clojure :refer [str-eval-async split-expressions read-string]]))


(defn transpile-hiccup [src opts]
  (go
    (try
      (let [hiccup (read-string src)
            html (<! (str-eval-async (str `(hoquet.runtime/render-html ~hiccup)) opts))]
        (-> (read-string html)
            js/html_beautify))
      (catch js/Object e
        (or (j/get e :message)
            (str e))))))

(defn render-hiccup [src {:keys [container] :as opts}]
  (go
    (try
      (let [hiccup (read-string src)
            html (<! (str-eval-async (str `(hoquet.runtime/render-html ~hiccup)) opts))]
        (j/assoc! container "innerHTML" (read-string html)))
      (catch js/Object e
        (or (j/get e :message)
            (str e))))))

(def transpile-opts {:editor-in-mode "clojure"
                     :editor-out-mode "htmlmixed"
                     :eval-fn #'transpile-hiccup
                     :external-scripts [(codemirror-mode-src "clojure")
                                        (codemirror-mode-src "xml")
                                        (codemirror-mode-src "htmlmixed")
                                        (scripts-src "beautify-html-1.11.0.js")]
                     :comment-str ";"})

(def render-opts {:editor-in-mode "clojure"
                  :editor-out-mode "clojure"
                  :eval-fn #'render-hiccup
                  :no-result true
                  :external-scripts [(codemirror-mode-src "clojure")]
                  :comment-str ";"})

(register-mode "transpile-hiccup" "selector_transpile_hiccup" transpile-opts)

(register-mode "render-hiccup" "selector_render_hiccup" render-opts)
