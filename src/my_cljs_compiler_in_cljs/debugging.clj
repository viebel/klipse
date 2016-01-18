(ns my-cljs-compiler-in-cljs.debugging
  (:require [cljs.core.async.macros :refer [go]])
  (:require cljs.analyzer)) 

(defmacro dbg[x]
  `(let [x# ~x]
     (print (str '~x ": "))
     (cljs.pprint/pprint x#)
     x#))

(defmacro breakpoint []
  '(do (js* "debugger;")
       nil)) ; (prevent "return debugger;" in compiled javascript)

(defmacro with-time
  [title & body]
  `(do
     (let [should-display-time# (my-cljs-compiler-in-cljs.config-logic/get-in [:general :enable-time-profiling])]
       (when should-display-time# (.time js/console ~title))
       (let [result# (do ~@body)]
         (when should-display-time# (.timeEnd js/console ~title))
         result#))))

(defmacro deftry [& definition]
  (if (vector? (second definition))
    (let [[func-name args & body] definition
          body-with-go-try (clojure.walk/prewalk-replace '{go my-cljs-compiler-in-cljs.debugging/go-try-auto} body)]
      `(let [~'current-fn-deftry  ~(str (:name (cljs.analyzer/resolve-var &env func-name)))
             ~'context-deftry {:function ~'current-fn-deftry}]
         (defn ~func-name ~args
           (my-cljs-compiler-in-cljs.debugging/with-time ~'current-fn-deftry
            (try ~@body-with-go-try
                 (catch js/Object e#
                   (my-cljs-compiler-in-cljs.errors/notify-error (str ~'current-fn-deftry  ": " e#) ~'context-deftry)))))))

   (let [[func-name & definitions] definition]
      `(let [~'current-fn-deftry  ~(str (:name (cljs.analyzer/resolve-var &env func-name)))
             ~'context-deftry {:function ~'current-fn-deftry}]
         (defn ~func-name ~@(map
                       (fn [[args & body]] (let [body-with-go-try (clojure.walk/prewalk-replace '{go my-cljs-compiler-in-cljs.debugging/go-try-auto} body)]
                                             `(~args
                                                (my-cljs-compiler-in-cljs.debugging/with-time ~'current-fn-deftry
                                                (try ~@body-with-go-try
                                                   (catch js/Object e#
                                                     (my-cljs-compiler-in-cljs.errors/notify-error (str ~'current-fn-deftry  ": " e#) ~'context-deftry)))))))
                       definitions))))))

(defmacro go-try [message & body]
  `(go
     (my-cljs-compiler-in-cljs.debugging/with-time (str ~message  " go block: ")
     (try
        ~@body
          (catch js/Object e#
            (my-cljs-compiler-in-cljs.errors/notify-error (str ~message  " in go block: " e#) ""))))))

(defmacro go-try-auto [& body]
  `(go
     (my-cljs-compiler-in-cljs.debugging/with-time (str ~'current-fn-deftry  " go block: ")
     (try
        ~@body
          (catch js/Object e#
            (my-cljs-compiler-in-cljs.errors/notify-error (str ~'current-fn-deftry  " in go block: " e#) ~'context-deftry))))))

(defmacro log 
  ([] `(my-cljs-compiler-in-cljs.errors/log-it ~'current-fn-deftry))
  ([x]
   `(my-cljs-compiler-in-cljs.debugging/log ~'current-fn-deftry ~x))
  ([message x]
   (if (or (string? x) (and (coll? x) (= 'str (first x))))
     `(my-cljs-compiler-in-cljs.errors/log-it ~message ~x)
     `(let [x# ~x]
        (my-cljs-compiler-in-cljs.errors/log-func-call ~message '~x  x#)
        x#))))
