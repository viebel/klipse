(ns klipse.io
    (:import goog.net.XhrIo))

(defn no-op [file-url src-cb]
  (js/console.info "no-op: " file-url)
  (src-cb ""))

(defn fetch-file!
  "Very simple implementation of XMLHttpRequests that given a file path
  calls src-cb with the string fetched of nil in case of error.
  See doc at https://developers.google.com/closure/library/docs/xhrio"
  [file-url src-cb]
    (try
      ; disable caching to support updates in source files
      ; might consider to make it configurable to disable caching
      (.send XhrIo (str file-url "?" (rand))
             (fn [e]
               (if (.isSuccess (.-target e))
                 (do
                   (js/console.info "loading file: " file-url)
                   (src-cb (.. e -target getResponseText)))
                 (src-cb nil))))
      (catch :default e
        (src-cb nil))))
