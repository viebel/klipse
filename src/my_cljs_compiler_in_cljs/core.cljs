(ns my-cljs-compiler-in-cljs.core
  (:require [cljs.tools.reader :as reader]
            [cljs.compiler :as compiler]
            [cljs.analyzer :as analyzer]))


(enable-console-print!)
(print "hello World")

(print (reader/read-string "(set! (.. js/document -body -style -backgroundColor \"white\"))"))
(print (map type (reader/read-string "(set! (.. js/document -body -style -backgroundColor) \"white\")")))


(def user-env '{:ns {:name cljs.user}
                :locals {}})



(->>  ;"(set! (.. js/document -body -style -backgroundColor \"white\"))"
     "(cljs.core/clj->js (cljs.core/map cljs.core/inc [9 (+ 1 2) 2 3]))"
     reader/read-string
     (analyzer/analyze user-env)
     compiler/emit-str
     (println "js code: "))


