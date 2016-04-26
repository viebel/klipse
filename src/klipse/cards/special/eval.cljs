(ns klipse.cards.special.eval
  (:require-macros 
    [cljs.test :refer [is are]])
  (:require 
    [clojure.string :as string]
    [gadjett.core :as gadjett :refer-macros [dbg]]
    [klipse.compiler :refer [eval compile]]
    [devcards.core :as dc :refer-macros [defcard deftest]]))

(defn remove-chars [s]
  (string/replace s #"\n|\s" ""))

(defn a= [& args]
  (apply = (map remove-chars args)))


(defn error->clj [[status error]]
  [status {:message (.. error -message)}])
(deftest static-fn-failure
  "expected failures with static dispatch"
  (are [input-clj message]
       (= (error->clj (eval input-clj :static-fns true)) [:error {:message message}])
       "(defn f ([a] a) ([a b] [a b])) (defn g [] (f 1 2)) (defn f [& args] :args) (g)" "ERROR"))

(deftest test-eval-macros
  "eval with macros"
  (are [input-clj output-clj]
       (= (eval input-clj) [:ok output-clj])
       "(ns my.ns$macros) (defmacro disp [& forms] (cons `str (for [form forms] `(str (pr-str '~form) \" => \" (pr-str ~form) \"\n\")))) (my.ns/disp (+ 1 2))" "(+ 1 2) => 3\n"))
