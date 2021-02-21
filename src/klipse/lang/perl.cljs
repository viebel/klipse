(ns klipse.lang.perl
  (:require-macros
   [gadjett.core :refer [dbg my-with-redefs]]
   [cljs.core.async.macros :refer [go]])
  (:require
   [clojure.string :as string]
   [cljs.core.async :refer [chan put!]]
   [klipse.common.registry :refer [codemirror-mode-src register-mode]]
   [applied-science.js-interop :as j]))

(def eval-in-global-scope js/eval); this is the trick to make `eval` work in the global scope: http://perfectionkills.com/global-eval-what-are-the-options/

(defn perl-to-js [src]
  (js/Perlito.compile_p6_to_js src))

(defn eval-perl [exp _]
  (let [c (chan)]
    (my-with-redefs [js/print (fn[& args]
                                (put! c (string/join " "  args))
                                (put! c "\n"))]

                    (try
                      (set! js/exports #js {})
                      (let [res (perl-to-js exp)]
                        (put! c (-> res
                                    eval-in-global-scope
                                    str)))
                      (catch :default o
                        (str o))))
    c))


(defn comment-out [src]
  (str "#" src))

(def eval-opts {:editor-in-mode "text/x-perl"
                :editor-out-mode "text/x-perl"
                :beautify? false
                :eval-fn eval-perl
                :external-scripts [ "http://fglock.github.io/Perlito/perlito/perlito6.js"]
                :comment-str comment-out})

(register-mode "eval-perl" "selector_eval_perl" eval-opts)
