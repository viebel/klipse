(ns klipse.cards.test.clojure-deps
  (:require-macros 
    [cljs.core.async.macros :refer [go]]
    [cljs.test :refer [is are async]])
  (:require 
    [cljs.core.async :refer [<!]]
    [clojure.string :as string]
    [klipse.lang.clojure :refer [eval result-as-str]]
    [devcards.core :as dc :refer-macros [defcard deftest]]))

(set! klipse.utils/verbose? (constantly true))
(defn remove-chars [s]
  (if (string? s)
    (string/replace s #"\n|\s" "")
    s))

(defn a= [& args]
  (apply = (map remove-chars args)))

(defn b= [[status-a a] [status-b b]]
  (and (= status-a status-b)
       (a= a b)))


(deftest clj-bundled-success
  "require clj bundled packages"
  (async done
         (go (are [input res]
                  (b= (<! (eval input)) [:ok res])
               "(require 'clojure.set)" nil)
             (done))))

(deftest cljsjs-error
  "require cljsjs packages that don't exist"
  (async done
         (go
           (are [input-clj]
                (= :error (first (<! (eval input-clj))))
                "(require 'cljsjs.no-package)"
                )
           (done))))

(deftest cljsjs-success
  "require cljsjs packages that exist"
  (async done
         (go (are [input res]
                  (b= (<! (eval input)) [:ok res])
               "(require 'cljsjs.moment)" nil
               "(require 'cljsjs.moment) (nil? js/Moment)" false)
             (done))))

