(ns klipse.app
  (:require-macros
    [cljs.core.async.macros :refer [go]])
  (:require 
    [om.next :as om]
    [cljs.core.async :refer [chan timeout put! <!]]
    [klipse.ui.layout :as ui]
    [klipse.utils :refer [read-input-from-gist gist-path-page url-parameters]]
    [klipse.control.control :as control]
    [klipse.ui.editors.cljs :as cljs-editor]))

(defn read-input-from-url []
  (:cljs_in (url-parameters)))

(defn gist-content [gist-id]
  (go 
    (let [gist-intro (str "loaded from gist: " (gist-path-page gist-id))
          gist-content (<! (read-input-from-gist gist-id))]
      (str ";" gist-intro "\n" gist-content))))

(defn read-src-input []
  (go
    (or
      (read-input-from-url)
      (<! (gist-content (:cljs_in.gist (url-parameters)))))))

(defn init [element]
  (go
    (let [input (<! (read-src-input))
          reconciler (control/reconciler {:input input})]
      (om/add-root! reconciler ui/Layout element)
      (<! (timeout 0)) ; ugly workaround - otherwise it breaks when both js-compile and clj-eval components are viewed
      (cljs-editor/process-input reconciler input))))
