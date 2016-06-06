(ns klipse.app
  (:require-macros
    [cljs.core.async.macros :refer [go]])
  (:require 
    [om.next :as om]
    [cljs.core.async :refer [chan put! <!]]
    [cljs-http.client :as http]
    [klipse.ui.layout :as ui]
    [klipse.utils :refer [url-parameters]]
    [klipse.control.control :as control]
    [gadjett.core :as gadjett :refer-macros [dbg]]
    [klipse.ui.editors.cljs :as cljs-editor]))

(defn gist-path [gist-id]
  (dbg (str "https://gist.githubusercontent.com/" gist-id "/raw/")))

(defn get-first-input []
  (go 
    (dbg (cond 
      (:cljs_in (url-parameters)) (:cljs_in (url-parameters))
      (:cljs_in.gist (url-parameters)) (let [{:keys [status body]} (<! (http/get (gist-path (:cljs_in.gist (url-parameters)))))]
                                         (if-not (= status 200)
                                           status
                                           body))))))

(defn init [element]
  (om/add-root! 
    control/reconciler 
    ui/Layout 
    element)

  (go
    (cljs-editor/process-input control/reconciler (<! (get-first-input)))))
