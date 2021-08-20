(ns ^:figwheel-no-load klipse.core
  (:require
    [gadjett.core-fn :as gadjett]))

(enable-console-print!)
(gadjett/settings! :max-function-calls 100)

(def version "7.10.6")
(js/console.info "Klipse " version)
(js/console.info "Clojurescript "  *clojurescript-version*)

