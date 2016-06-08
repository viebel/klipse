(ns klipse.app
  (:require-macros
    [cljs.core.async.macros :refer [go]])
  (:require 
    [om.next :as om]
    [cljs.core.async :refer [chan timeout put! <!]]
    [cljs-http.client :as http]
    [klipse.ui.layout :as ui]
    [klipse.utils :refer [url-parameters]]
    [klipse.control.control :as control]
    [gadjett.core :as gadjett :refer-macros [dbg]]
    [klipse.ui.editors.cljs :as cljs-editor]))

(defn gist-path [gist-id]
  (dbg (str "https://gist.githubusercontent.com/" gist-id "/raw")))

(defn get-first-input []
  (go 
    (dbg (cond 
      (:cljs_in (url-parameters)) (:cljs_in (url-parameters))
      (:cljs_in.gist (url-parameters)) (let [{:keys [status body]} (dbg (<! (http/get (gist-path (:cljs_in.gist (url-parameters)))  {:with-credentials? false})))]
                                         (if-not (= status 200)
                                           status
                                           body))))))

(defn init [element]
  (go
    (let [input (<! (get-first-input))
          reconciler (control/reconciler {:input input})]
      (om/add-root! 
        reconciler
        ui/Layout 
        element)

      (print "process-input")
      (cljs-editor/process-input reconciler input))))
