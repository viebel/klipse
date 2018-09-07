(ns klipse.eval_special_test
  (:require-macros 
    [cljs.test :refer [is are deftest]])
  (:require 
    [clojure.string :as string]
    [klipse.lang.clojure :refer [the-eval str-compile]]))

(defn remove-chars [s]
  (string/replace s #"\n|\s" ""))

(defn a= [& args]
  (apply = (map remove-chars args)))


(defn error->clj [[status error]]
  [status {:message (.. error -message)}])

(deftest static-fn-failure
  "expected failures with static dispatch"
  (are [input-clj message]
       (= (error->clj (the-eval input-clj {:static-fns true})) [:error {:message message}])

       "(defn f ([a] a) ([a b] [a b])) (defn g [] (f 1 2)) (defn f [& args] :args) (g)" "ERROR"))

(deftest test-eval-macros
  "eval with macros"
  (are [input-clj output-clj]
       (= (the-eval input-clj) [:ok output-clj])
       "(ns my.ns$macros) (defmacro disp [& forms] (cons `str (for [form forms] `(str (pr-str '~form) \" => \" (pr-str ~form) \"\n\")))) (my.ns/disp (+ 1 2))" "(+ 1 2) => 3\n"))


(deftest test-str-compile-ok
  "str-compile should return the compileuation of the expression as a strin"
  (are [input output]
       (= (str-compile input) output)
       "(+ 1 2)" "((1) + (2));\n"
       "(map inc [1 2 3])" "cljs.core.map.call(null,cljs.core.inc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));\n"))


(deftest test-str-compile-error
  "str-compile should return an error as a string"
  (are [input output]
       (= (str-compile input) output)
       "(+ 1 2" "#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 6, :file \"cljs-in\"}}}"

       "(map inc [1 2 3]" "#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 17, :file \"cljs-in\"}}}"))






