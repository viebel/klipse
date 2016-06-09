(require '[figwheel-sidecar.repl :as r]
         '[figwheel-sidecar.repl-api :as ra])

(ra/start-figwheel!
  {:figwheel-options {
                      :open-file-command "emacsclient"
                      :server-port 5014}
   :build-ids ["figwheel" "devcards"]
   :all-builds
   [{:id "figwheel"
     :figwheel true
     :source-paths ["src" "resources/public/lib"]
     :compiler {:main 'klipse.run.all
                :preamble ["mirror_extensions.js"]
                :asset-path "fig/js"
                :output-to "resources/public/fig/js/klipse.fig.js"
                :output-dir "resources/public/fig/js"
                :source-map-timestamp true }}
    {:id "devcards"
     :figwheel { :devcards true }
     :source-paths ["src" "resources/public/lib"]
     :compiler {:main 'klipse.cards.cards
                :preamble ["mirror_extensions.js"]
                :asset-path "cards/js"
                :output-to "resources/public/cards/js/klipse.js"
                :output-dir "resources/public/cards/js"
                :verbose false}}
    
    ]})

(ra/cljs-repl)
