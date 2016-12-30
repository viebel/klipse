(ns klipse.lang.clojure.repl
  (:require [cljs.spec :as spec]))

(defn print-doc [{n :ns nm :name :as m}]
  (println "-------------------------")
  (println (str (when-let [ns (:ns m)] (str ns "/")) (:name m)))
  (when (:protocol m)
    (println "Protocol"))
  (cond
    (:forms m) (doseq [f (:forms m)]
                 (println "  " f))
    (:arglists m) (let [arglists (:arglists m)]
                    (if (or (:macro m)
                         (:repl-special-function m))
                     (prn arglists)
                     (prn
                       (if (= 'quote (first arglists))
                         (second arglists)
                         arglists)))))
  (if (:special-form m)
    (do
      (println "Special Form")
      (println " " (:doc m)) 
      (if (contains? m :url)
        (when (:url m)
          (println (str "\n  Please see http://clojure.org/" (:url m))))
        (println (str "\n  Please see http://clojure.org/special_forms#"
                   (:name m)))))
    (do
      (when (:macro m)
        (println "Macro"))
      (when (:repl-special-function m)
        (println "REPL Special Function"))
      (println " " (:doc m))
      (when (:protocol m)
        (doseq [[name {:keys [doc arglists]}] (:methods m)]
          (println)
          (println " " name)
          (println " " arglists)
          (when doc
            (println " " doc))))
      (when n
        (when-let [fnspec (spec/get-spec (symbol (str (ns-name n)) (name nm)))]
          (print "Spec")
          (doseq [role [:args :ret :fn]]
            (when-let [spec (get fnspec role)]
              (print (str "\n " (name role) ":") (spec/describe spec)))))))))
