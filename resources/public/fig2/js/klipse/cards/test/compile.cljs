(ns klipse.cards.test.compile
  (:require-macros 
   [cljs.core.async.macros :refer [go]]
   [cljs.test :refer [is are async]])
  (:require
   [cljs.core.async :refer [<!]]
   [clojure.string :as string]
   [klipse.lang.clojure :refer [str-compile]]
   [devcards.core :as dc :refer-macros [defcard deftest]]))


(defn remove-chars [s]
  (string/replace s #"\n|\s" ""))

(defn a= [& args]
  (apply = (map remove-chars args)))

(defn error->clj [[status error]]
  [status {:message (.. error -message)}])


(deftest success
  "compile with success"
  (async done
         (go (are [input output]
                 (a= (second (<! (str-compile input))) output)
               "(ns my-project.my-ns) (def x 1) (def y 2)" "goog.provide(\"my_project.my_ns\");my_project.my_ns.x = (1); my_project.my_ns.y = (2);"
               "(if 2 3) (def x (if 2 3))" "my_project.my_ns.x= (3);"
               "(= 1 2)" "cljs.core._EQ_.call(null,(1),(2));")
             (done))))

(deftest static-fn 
  "compile with static dispatch (:static-fns true)"
  (async done
         (go (are [input output]
                 (a= (second (<! (str-compile input {:static-fns true}))) output)
               "(= 1 2)" "cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));")
             (done))))
