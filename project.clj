(defproject viebel/klipse "7.10.4"
  :description "Embeddable multi-language WEB REPL"
  :license "GPL-3.0"
  :url "https://github.com/viebel/klipse"
  :resource-paths ["scripts" "src" "resources" "target"]
  :min-lein-version "2.8.1"
  :middleware [lein-tools-deps.plugin/resolve-dependencies-with-deps-edn]
  :lein-tools-deps/config {:config-files [:install :user :project]}
  :profiles {:deploy {:resource-paths ^:replace ["src"]
                      :lein-tools-deps/config ^:replace {:config-files [:install :user]}}}
  :deploy-repositories [["clojars"  {:sign-releases false
                                     :url "https://clojars.org/repo"}]]
  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-hiera "0.9.5"]
            [lein-tools-deps "0.4.1"]]
  :clean-targets ^{:protect false} ["targets"]
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
                                                :output-dir "resources/public/plugin_prod/js"
                                                :pretty-print true
                                                :elide-asserts false
                                                :optimizations :advanced
                                                :closure-defines {klipse.core/version
                                                                  ~(->> (slurp "project.clj")
                                                                     (re-seq #"\".*\"")
                                                                     (first))}
                                                :verbose true}}}})
