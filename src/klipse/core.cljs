(ns ^:figwheel-no-load klipse.core
  (:require
    [gadjett.core-fn :as gadjett]))

(enable-console-print!)
(gadjett/settings! :max-function-calls 100)

(goog-define version "n/a")

(def version "7.7.3")
(js/console.info "Klipse " version)
(js/console.info "Clojurescript "  *clojurescript-version*)

