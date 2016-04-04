(defproject klipse "0.2.0"
  :description "Cljs compiler in cljs"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.40"]
                 [im.chit/purnam "0.5.2"]
                 [viebel/gadjett "0.1.8"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.omcljs/om "1.0.0-alpha22"]
                 [shodan "0.4.2"]
                 [replumb "0.2.1"]
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
              :test-commands {"unit" ["phantomjs" "test/phantom/unit-test.js" "test/phantom/unit-test.html"]}
              :builds {
                       :test {
                                :source-paths ["test"]
                                :notify-command ["phantomjs" "test/phantom/unit-test.js" "test/phantom/unit-test.html"]
                                :compiler {
                                           :output-to "resources/private/test/klipse.testable.js"
                                           :output-dir "resources/private/test"
                                           :verbose true
                                           :optimizations :whitespace }}
                    :dev {
                             :source-paths ["src"]
                             :compiler {
                                        :output-to "resources/public/dev/js/klipse.js"
                                        :output-dir "resources/public/dev/js"
                                        ;:elide-asserts true
                                        :optimizations :whitespace
                                        :verbose true}}
                       :figwheel {
                                  :figwheel true
                                  :source-paths ["src"]
                                  :compiler {:main "klipse.core"
                                             :asset-path "dbg/js"
                                             :output-to "resources/public/dbg/js/klipse.js"
                                             :output-dir "resources/public/dbg/js"
                                             ;:elide-asserts true
                                             :verbose true}}}})
