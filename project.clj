(defproject klipse "7.7.2"
  :description "Embeddable multi-language WEB REPL"
  :resource-paths ["scripts" "src" "resources" "target"]
  :min-lein-version "2.8.1"
  :middleware [lein-tools-deps.plugin/resolve-dependencies-with-deps-edn]
  :lein-tools-deps/config {:config-files [:install :user :project]}
;  :dependencies [[org.clojure/clojurescript "1.10.492"]]
  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-hiera "0.9.5"]
            [lein-tools-deps "0.4.1"]]
  :hiera {:path "deps-graph.png"
          :vertical true
          :show-external false
          :cluster-depth 2
          :trim-ns-prefix true}
  :cljsbuild {:builds {:plugin {:source-paths ["src/klipse/run/plugin"]
                                :compiler {
                                           :output-to "resources/public/plugin/js/klipse_plugin.js"
                                           :output-dir "resources/public/plugin/js"
                                           :pretty-print false
                                           :optimize-constants true
                                           :static-fns true
                                           ;:elide-asserts true
                                           :closure-defines {klipse.core/version
                                                             ~(->> (slurp "project.clj")
                                                                (re-seq #"\".*\"")
                                                                (first))}
                                           :optimizations :simple
                                           :verbose false}}
                       :plugin-prod {
                                     :source-paths ["src/klipse/run/plugin_prod"]
                                     :compiler {
                                                :output-to "resources/public/plugin_prod/js/klipse_plugin.min.js"
                                                :source-map "resources/public/plugin_prod/js/klipse_plugin.min.js.map"
                                                :output-dir "resources/public/plugin_prod/js"
                                                :pretty-print true
                                                :elide-asserts false
                                                :optimizations :simple
                                                :closure-defines {klipse.core/version
                                                                  ~(->> (slurp "project.clj")
                                                                     (re-seq #"\".*\"")
                                                                     (first))}
                                                :verbose true}}}})
