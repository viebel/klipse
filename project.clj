(defproject klipse "0.3.0"
  :description "Cljs compiler in cljs"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.40"]
                 [im.chit/purnam "0.5.2"]
                 [viebel/gadjett "0.1.8"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.omcljs/om "1.0.0-alpha32"]
                 [shodan "0.4.2"]
                 [replumb "0.2.2-SNAPSHOT"]
                 [com.cemerick/url "0.1.1"]
                 [com.andrewmcveigh/cljs-time "0.3.10"]
                 [figwheel-sidecar "0.5.0" :scope "test"]
                 [cljsjs/codemirror "5.11.0-1"]
                 [devcards "0.2.1-6"]
                 [devcards-om-next "0.1.1"]]
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
                                :source-paths ["test" "src/klipse/cards/test"]
                                :notify-command ["phantomjs" "test/phantom/unit-test.js" "test/phantom/unit-test.html"]
                                :compiler {
                                           :output-to "resources/private/test/klipse.testable.js"
                                           :output-dir "resources/private/test"
                                           :verbose false
                                           :optimizations :whitespace }}
                      :dev {
                               :source-paths ["src"]
                               :compiler {
                                          :main "klipse.core"
                                          :output-to "resources/public/dev/js/klipse.js"
                                          :output-dir "resources/public/dev/js"
                                          :pretty-print false
                                          :optimize-constants true
                                          :static-fns true
                                          ;:elide-asserts true
                                          :optimizations :whitespace
                                          :verbose false}}
                       :figwheel {
                                  :figwheel true
                                  :source-paths ["src"]
                                  :compiler {:main "klipse.core"
                                             :asset-path "fig/js"
                                             :output-to "resources/public/fig/js/klipse.fig.js"
                                             :output-dir "resources/public/fig/js"
                                             ;:elide-asserts true
                                             :verbose false}}
                       
                       :devcards {
                                  :figwheel { :devcards true }
                                  :source-paths ["src"]
                                  :compiler {:main "klipse.cards.cards"
                                             :asset-path "cards/js"
                                             :output-to "resources/public/cards/js/klipse.js"
                                             :output-dir "resources/public/cards/js"
                                             ;:elide-asserts true
                                             :verbose false}}
                       
                       
                       }})
