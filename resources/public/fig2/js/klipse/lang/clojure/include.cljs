(ns klipse.lang.clojure.include
  (:require
   [cljs.js :as cljs]))

(defonce create-state-eval (memoize cljs/empty-state))


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
