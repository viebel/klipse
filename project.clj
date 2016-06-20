(defproject klipse "1.1.0"
  :description "Cljs compiler in cljs"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.36"]
                 [org.clojure/core.async "0.2.374"]
                 [im.chit/purnam "0.5.2"]
                 [cljs-http "0.1.41"]
                 [viebel/gadjett "0.1.13"]
                 [org.omcljs/om "1.0.0-alpha36"]
                 [replumb "0.2.2"]
                 [fipp "0.6.5"]
                 [rewrite-cljs "0.4.1"]
                 [com.cemerick/url "0.1.1"]
                 [cljsjs/codemirror "5.11.0-2"]
                 [cljsjs/js-beautify "1.6.2-0"]
                 [devcards "0.2.1-7"]
                 [devcards-om-next "0.1.1"]]
  :profiles {:dev {:dependencies [[figwheel-sidecar "0.5.4-2"]] }}  
  :jvm-opts ["-Xms356M" "-Xmx1G"]
  :clean-targets ^{:protect false} ["resources/public/dev/js"
                                    "resources/public/plugin/js"]
  :plugins [[lein-cljsbuild "1.1.1"]]
  :source-paths ["src"]
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
                      :app {
                               :source-paths ["src/klipse/run/app" "resources/public/lib"]
                               :compiler {
                                    :preamble ["mirror_extensions.js"]
                                          :output-to "resources/public/dev/js/klipse.js"
                                          :output-dir "resources/public/dev/js"
                                          :pretty-print false
                                          :optimize-constants true
                                          :static-fns true
                                          ;:elide-asserts true
                                          :optimizations :whitespace
                                          :verbose false}}
                      :plugin {
                               :source-paths ["src/klipse/run/plugin" "resources/public/lib"]
                               :compiler {
                                    :preamble ["mirror_extensions.js"]
                                          :output-to "resources/public/plugin/js/klipse_plugin.js"
                                          :output-dir "resources/public/plugin/js"
                                          :pretty-print false
                                          :optimize-constants true
                                          :static-fns true
                                          ;:elide-asserts true
                                          :optimizations :whitespace
                                          :verbose false}}
                      :plugin-prod {
                               :source-paths ["src/klipse/run/js_eval"]
                               :compiler {
                                          ;:preamble ["mirror_extensions.js"]
                                          :output-to "resources/public/plugin_prod/js/klipse_plugin.min.js"
                                          :output-dir "resources/public/plugin_prod/js"
                                          :pretty-print true
                                          :elide-asserts false
                                          :optimizations :advanced
                                          :verbose true}}
                       :figwheel {
                                  :figwheel true
                                  :source-paths ["src"]
                                  :compiler {:main "klipse.run.all"
                                             :preamble ["mirror_extensions.js"]
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
