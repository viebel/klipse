(ns klipse.macros)

(defmacro dbg[x]
  (when *assert*
  `(let [x# ~x]
     (print (str '~x ": " x#))
     x#)))
