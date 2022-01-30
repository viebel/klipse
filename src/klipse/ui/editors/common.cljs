(ns klipse.ui.editors.common
  (:require
   [klipse.ui.editors.editor :as editor]
   [klipse.utils :refer [debounce]]))

(defn handle-events [editor {:keys [on-completion on-should-eval on-change idle-msec extra-keys] }]
  (let [[debouncer runner] (debounce on-should-eval idle-msec)
        default-extra-keys {"Tab" on-completion
                            "Ctrl-Enter" runner
                            "Cmd-Enter" runner}
        the-extra-keys (merge default-extra-keys extra-keys)]
    (when on-change (editor/on-change editor on-change))
    (editor/on-change editor debouncer)
    (editor/set-option editor "extraKeys" (clj->js the-extra-keys))
    editor))

