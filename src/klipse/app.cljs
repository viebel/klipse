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
  (str "https://gist.githubusercontent.com/" gist-id "/raw" "?" (rand)))

(defn read-input-from-url []
  (:cljs_in (url-parameters)))

(defn read-input-from-gist []
  (go
    (when-let [gist-id (:cljs_in.gist (url-parameters))]
      (let [gist-url (gist-path gist-id)
          {:keys [status body]} (<! (http/get
                                      gist-url
                                      {:with-credentials? false}))]
      (if-not (= status 200)
        (str "\""
             "Wrong gist path: " gist-url "\n"
             "cljs_in.gist= " gist-id "\n"
             "http status: " status
             "\"")
        body)))))

(defn read-src-input []
  (go 
    (or
      (read-input-from-url)
      (<! (read-input-from-gist)))))

(defn init [element]
  (go
    (let [input (<! (read-src-input))
          reconciler (control/reconciler {:input input})]
      (om/add-root! reconciler ui/Layout element)
      (cljs-editor/process-input reconciler input))))
