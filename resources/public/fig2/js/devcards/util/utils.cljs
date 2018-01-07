(ns devcards.util.utils
  (:require
   [cljs.pprint :as pprint]))

(defn html-env? []
  (if-let [doc js/goog.global.document]
    (aget doc "write")))

(defn node-env? [] (not (nil? goog/nodeGlobalRequire)))

(defn pprint-str [obj]
  ;; this is currently only to handle the
  ;; problem of printing JavaScript Symbols
  (try
    (with-out-str (pprint/pprint obj))
    (catch js/Error e1
      (try
        (.toString obj)
        (catch js/Error e2
          (str "<<Un-printable Type>>"))))))
 
 (defn pprint-code [code]
   (pprint/with-pprint-dispatch pprint/code-dispatch (pprint-str code)))
