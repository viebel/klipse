(defproject my-cljs-compiler-in-cljs "0.1.0"
  :description "Cljs compiler in cljs"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.228"]
                 [viebel/gadjett "0.1.6"]
                 [im.chit/purnam "0.5.2"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.omcljs/om "1.0.0-alpha22"]
                 [shodan "0.4.2"]
                 [com.cemerick/url "0.1.1"]
                 [com.andrewmcveigh/cljs-time "0.3.10"]
                 [figwheel-sidecar "0.5.0" :scope "test"]]
  :hooks [leiningen.cljsbuild]
  :jvm-opts ["-Xms356M" "-Xmx1G"]
  :clean-targets ["public/js"]
  :plugins [[lein-cljsbuild "1.1.1"]]
  :source-paths ["src"]
  :cljsbuild {
              :builds {
                       :production {
                                    :source-paths ["src"]
                                    :compiler {
                                               :cache-analysis true
                                               :output-to "public/js/prod/main.min.js"
                                               :output-dir "public/js/prod"
                                               ;:source-map "public/clojurescript/prod/main.min.js.map"
                                               :closure-warnings {:check-useless-code :off
                                                                  :externs-validation :off
                                                                  :non-standard-jsdoc :off}
                                               :elide-asserts true
                                               :verbose true
                                               :compiler-stats true
                                               :optimizations :advanced
                                               :language-in :ecmascript5
                                               :language-out :ecmascript5}}
                       :dev {
                             :source-paths ["src"]
                             :compiler {
                                        :output-to "resources/public/js/dev/main.js"
                                        :output-dir "resources/public/js/dev"
                                        ;:source-map "public/clojurescript/dev/main.js.map"
                                        :closure-warnings {:check-useless-code :off
                                                           :externs-validation :off
                                                           :non-standard-jsdoc :off}
                                        ;:verbose true
                                        :optimizations :whitespace
                                        }}}}

  )
