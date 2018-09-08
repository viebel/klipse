(ns klipse-clj.lang.clojure.include
  (:require
   [cljs.js :as cljs]))


(def st (atom nil))
(defn create-state-eval []
  (if @st
    @st
    (do (reset! st (cljs/empty-state))
        st)))

(defn reset-state-eval! []
  (reset! st nil))


(defn eval-form
  ([form]
   (eval-form (.-name *ns*)))
  ([form ns]
   (let [result (atom nil)]
     (cljs/eval (create-state-eval) form
                {:ns            ns
                 :context       :expr
                 :eval          cljs/js-eval
                 :def-emits-var true}
                (fn [{:keys [value error]}]
                  (if error
                    error
                    (reset! result value))))
     @result)))

(defn def-a-var
  ([ns name]
   (when-let [the-ns (find-ns (cond-> ns (instance? Namespace ns) ns-name))]
     (eval-form `(def ~name) (ns-name the-ns))))
  ([ns name val]
   (when-let [the-ns (find-ns (cond-> ns (instance? Namespace ns) ns-name))]
     (eval-form `(def ~name ~val) (ns-name the-ns)))))
