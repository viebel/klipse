(defproject klipse "3.5.0"
  :description "Cljs compiler in cljs"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.293"]
                 [org.clojure/core.async "0.2.395"]
                 [binaryage/devtools "0.8.2"]
                 [im.chit/purnam "0.5.2"]
                 [cljsjs/markdown "0.6.0-beta1-0"]
                 [cljs-http "0.1.42"]
                 [viebel/gadjett "0.3.0"]
                 [org.omcljs/om "1.0.0-alpha46"]
                 [replumb "0.2.4"]
                 [com.cemerick/url "0.1.1"]
                 [cljsjs/codemirror "5.19.0-0"]
                 [devcards "0.2.2"]
                 [devcards-om-next "0.3.0"]]
  :profiles {:dev {:dependencies [[figwheel-sidecar "0.5.8"]] }}
  :jvm-opts ["-Xms356M" "-Xmx1G"]
  :clean-targets ^{:protect false} ["resources/public/dev/js"
                                    "resources/public/plugin_prod/js"
                                    "resources/public/plugin/js"]
  :plugins [[lein-cljsbuild "1.1.1"]
            [lein-hiera "0.9.5"]
            [lein-doo "0.1.6"]]
  :source-paths ["src" "scripts"]
  :hiera
  {:path "deps-graph.png"
    :vertical true
    :show-external false
    :cluster-depth 0
    :trim-ns-prefix true
    :ignore-ns #{cache.build klipse.cards}}
  :cljsbuild {
              :builds {
                       :test {
                                :source-paths ["test" "src/klipse/cards/test"]
                                :compiler {
                                           :output-to "resources/private/test/klipse.testable.js"
                                           :output-dir "resources/private/test"
                                           :verbose false
                                           :optimizations :simple}}
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
                                          :optimizations :simple
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
                                          :optimizations :simple
                                          :verbose false}}
                      :plugin-prod {
                               :source-paths ["src/klipse/run/plugin_prod" "resources/public/lib"]
                               :compiler {
                                          :preamble ["mirror_extensions.js"]
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
