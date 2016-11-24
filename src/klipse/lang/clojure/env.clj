(ns klipse.lang.clojure.env)
 
(defmacro doc
  "Prints documentation for a var or special form given its name"
  [name]
  `(klipse.lang.clojure.env/doc* '~name))
