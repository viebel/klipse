(ns klipse.security
  (:require-macros
   [gadjett.core :refer [dbg]]
   [purnam.core :refer [!>]]
   [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.core.async :refer [chan <! timeout]]
   [klipse.utils :refer [load-script-mem]]))


(defn eval-sandbox! []
  (go
    (let [[status http-status script] (<! (load-script-mem "https://viebel.github.io/klipse/repo/js/evel.js?aa"))]
      (if (= :ok status)
        (if-not (!> js/evel_.supportsStrict ())
          (throw "This browser does not support sandboxed code execution.")  
          (set! js/window.eval js/window.evel))
        (throw "security hole!")))))
