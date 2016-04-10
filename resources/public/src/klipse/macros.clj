(ns klipse.macros)

(defmacro dbg[x]
  `(let [x# ~x]
     (print (str '~x ": " x#))
     x#))

(defmacro disp [& forms]
  (cons `str (for [form forms]
               `(str (pr-str '~form) " => " (pr-str ~form) "\n"))))

