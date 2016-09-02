(ns klipse.ui.editors.common
  (:require-macros 
    [gadjett.core :as gadjett :refer [dbg]])
  (:require
    [klipse.ui.editors.editor :as editor]
    [klipse.utils :refer [url-parameters create-url-with-input debounce]]))

(defn display-url-with-input [base-url value]
  (doto (create-url-with-input base-url value)
    print
    js/alert))

(defn refresh-with-code [base-url value]
    (js/location.replace (create-url-with-input base-url value)))

(defn handle-events [editor {:keys [on-should-eval idle-msec base-url] :or {base-url nil}}]
  (editor/on-change editor 
                    (debounce on-should-eval idle-msec))
  (editor/set-option editor "extraKeys" 
                     #js {"Ctrl-S" #(display-url-with-input base-url (editor/get-value editor))
                          "Ctrl-R" #(refresh-with-code base-url (editor/get-value editor))
                          "Ctrl-Enter" on-should-eval}))

