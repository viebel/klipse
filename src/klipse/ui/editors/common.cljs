(ns klipse.ui.editors.common
  (:require-macros
   [gadjett.core :refer [dbg]])
  (:require
   [klipse.ui.editors.editor :as editor]
   [klipse.utils :refer [url-parameters create-url-with-input debounce]]))

(defn display-url-with-input [base-url value]
  (create-url-with-input base-url value))

(defn refresh-with-code [base-url value]
  (js/location.replace (create-url-with-input base-url value)))

(defn handle-events [editor {:keys [on-completion on-should-eval on-change idle-msec base-url extra-keys] :or {base-url nil}}]
  (let [[debouncer runner] (debounce on-should-eval idle-msec)
        default-extra-keys {"Ctrl-S" #(display-url-with-input base-url (editor/get-value editor))
                            "Ctrl-R" #(refresh-with-code base-url (editor/get-value editor))
                            "Tab" on-completion
                            "Ctrl-Enter" runner
                            "Cmd-Enter" runner}
        the-extra-keys (merge default-extra-keys extra-keys)]
    (when on-change (editor/on-change editor on-change))
    (editor/on-change editor debouncer)
    (editor/set-option editor "extraKeys" (clj->js the-extra-keys))
    editor))

