(ns klipse.cards.test.compile
  (:require-macros 
    [cljs.test :refer [is are]])
  (:require 
    [clojure.string :as string]
    [gadjett.core :as gadjett :refer-macros [dbg]]
    [klipse.compiler :refer [str-compile compile]]
    [devcards.core :as dc :refer-macros [defcard deftest]]))

(defn remove-chars [s]
  (string/replace s #"\n|\s" ""))

(defn a= [& args]
  (apply = (map remove-chars args)))

(defn error->clj [[status error]]
  [status {:message (.. error -message)}])


(deftest success
  "compile with success"
  (are [input output]
       (a= (second (compile input)) output)
  "(ns my-project.my-ns) (def x 1) (def y 2)" "goog.provide('my_project.my_ns'); goog.require('cljs.core'); my_project.my_ns.x = (1); my_project.my_ns.y = (2);"
  "(if 2 3) (def x (if 2 3))" "cljs.user.x= (3);"
  "(= 1 2)" "cljs.core._EQ_.call(null,(1),(2));"))

(deftest static-fn 
  "compile with static dispatch (:static-fns true)"
  (are [input output]
       (a= (second (compile input :static-fns true)) output)
  "(= 1 2)" "cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));"))
