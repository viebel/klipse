(ns klipse.ui.editors.common
  (:require-macros 
    [klipse.macros :refer [dbg]])
  (:require
    [klipse.ui.editors.editor :as editor]
    [klipse.utils :refer [url-parameters create-url-with-input debounce]]))

(defn display-url-with-input [base-url value]
  (doto (create-url-with-input base-url value)
    print
    js/alert))

(defn refresh-with-code [base-url value]
    (js/location.replace (create-url-with-input base-url value)))

(defn handle-events [editor {:keys [on-should-eval on-change idle-msec base-url extra-keys] :or {base-url nil}}]
  (when on-change (editor/on-change editor on-change))
  (editor/on-change editor
                    (debounce on-should-eval idle-msec))
  (let [default-extra-keys {"Ctrl-S" #(display-url-with-input base-url (editor/get-value editor))
                            "Ctrl-R" #(refresh-with-code base-url (editor/get-value editor))
                            "Ctrl-Enter" on-should-eval
                            "Cmd-Enter" on-should-eval}
        the-extra-keys (merge default-extra-keys extra-keys)]
    (editor/set-option editor "extraKeys" (clj->js the-extra-keys))))

