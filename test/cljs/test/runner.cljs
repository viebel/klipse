(ns test.runner
  (:require
    [doo.runner :refer-macros [doo-tests]]
    [klipse.cards.test.eval]
    [klipse.cards.test.clojure-deps]
    [klipse.cards.test.compile]))

(doo-tests 'klipse.cards.test.eval
           'klipse.cards.test.clojure-deps
           'klipse.cards.test.compile)
