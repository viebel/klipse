(ns test.runner
  (:require
    [doo.runner :refer-macros [doo-tests]]
    [klipse.cards.test.eval]
    [klipse.cards.test.compile]))

(doo-tests 'klipse.cards.test.eval
           'klipse.cards.test.compile)
