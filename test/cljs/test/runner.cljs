(ns test.runner
  (:require
    [doo.runner :refer-macros [doo-tests]]
    [klipse.eval-test]
    [klipse.compile-test]))

(doo-tests 'klipse.eval-test
           'klipse.compile-test)
