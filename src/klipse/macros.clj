(ns klipse.macros)

;https://nvbn.github.io/2014/11/05/protocols-for-testing/ in the comments - same implementation as with-redefs from clojurescript, except that `~@(map bind-value binds)` is inside the `try` block
(defmacro with-redefs-safe
  [bindings & body]
  (let [names (take-nth 2 bindings)
        vals (take-nth 2 (drop 1 bindings))
        current-vals (map #(list 'identity %) names)
        tempnames (map (comp gensym name) names)
        binds (map vector names vals)
        resets (reverse (map vector names tempnames))
        bind-value (fn [[k v]] (list 'set! k v))]
    `(let [~@(interleave tempnames current-vals)]
       (try
         ~@(map bind-value binds)
         ~@body
         (finally
           ~@(map bind-value resets))))))
