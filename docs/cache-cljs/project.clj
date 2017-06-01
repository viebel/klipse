(defproject klipse-cache-ns "0.0.1"
  :description "cache ns for bootstrap cljs"
  :local-repo "local-m2"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.456"]
                 [andare "0.4.0"]
                 [cljs-http "0.1.42"]
                 [viebel/gadjett "0.3.2"]
                 [org.omcljs/om "1.0.0-alpha47"]
                 [com.cemerick/url "0.1.1"]
                 [rewrite-cljs "0.4.3"]
                 [re-frame "0.9.3"]
                 [day8.re-frame/http-fx "0.1.3"]
                 ;[org.clojure/core.match "0.3.0-self-host"]
                 ;[reagent "0.6.1-SNAPSHOT"]
                 ;[org.clojure/math.combinatorics "0.1.3"]
                 ])

(import 'java.util.concurrent.RecursiveTask)
(import 'java.util.concurrent.ForkJoinPool)

