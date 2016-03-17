(defproject klipse "0.1.0"
  :description "Cljs compiler in cljs"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.8.33"]
                 [im.chit/purnam "0.5.2"]
                 [viebel/gadjett "0.1.8"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.omcljs/om "1.0.0-alpha22"]
                 [shodan "0.4.2"]
                 [com.cemerick/url "0.1.1"]
                 [com.andrewmcveigh/cljs-time "0.3.10"]
                 [figwheel-sidecar "0.5.0" :scope "test"]
                 [cljsjs/codemirror "5.10.0-0"]]
  :hooks [leiningen.cljsbuild]
  :jvm-opts ["-Xms356M" "-Xmx1G"]
  :clean-targets ["public/js"]
  :plugins [[lein-cljsbuild "1.1.1"]
            [lein-figwheel "0.5.0-6"]]
  :source-paths ["src"]
  :figwheel {:css-dirs ["resources/public/"]
             :server-port 5014}
  :cljsbuild {
              :builds {
                       :dev {
                             :source-paths ["src"]
                             :compiler {
                                        :output-to "resources/public/dev/js/main.js"
                                        :output-dir "resources/public/dev/js"
                                        ;:elide-asserts true
                                        :optimizations :whitespace
                                        :verbose true}}
                       :prod {
                             :figwheel true
                             :source-paths ["src"]
                             :compiler {
                                        :output-to "resources/public/prod/js/main.js"
                                        :output-dir "resources/public/prod/js"
                                        ;:elide-asserts true
                                        :optimizations :advanced
                                        :verbose true}}
                       :figwheel {
                                  :figwheel true
                                  :source-paths ["src"]
                                  :compiler {:main "klipse.core"
                                             :asset-path "dbg/js"
                                             :output-to "resources/public/dbg/js/main.js"
                                             :output-dir "resources/public/dbg/js"
                                             ;:elide-asserts true
                                             :verbose true}}}})
