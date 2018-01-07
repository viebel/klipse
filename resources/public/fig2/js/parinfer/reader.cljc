(ns parinfer.reader
  "a basic lisp reader for tracking parens and token states")

(def matching-delim
  {"{" "}", "}" "{"
   "[" "]", "]" "["
   "(" ")", ")" "("})

(def opening-delim?  #{"{" "[" "("})
(def closing-delim?  #{"}" "]" ")"})

(defn whitespace? [ch]
  (re-find #"\s" ch))

;;------------------------------------------------------------------------
;; Delimiter Stack states
;;
;;   State is tracked by checking last pushed character.
;;------------------------------------------------------------------------

(defn prev-ch [stack]
  (:ch (peek stack)))

(defn escaping?
  "Next character will be escaped."
  [stack]
  (= "\\" (prev-ch stack)))

(defn in-str?
  "Next character is inside a string."
  [stack]
  (let [ch (prev-ch (cond-> stack (escaping? stack) pop))]
    (= "\"" ch)))

(defn in-comment?
  "Next character is inside a comment."
  [stack]
  (= ";" (prev-ch stack)))

(defn in-code?
  "Next character is inside actual code."
  [stack]
  (and (not (in-str? stack))
       (not (in-comment? stack))))

(defn valid-closer?
  "Determine if the given closing delimiter can be used next, assuming we are inside code."
  [stack ch]
  (= (prev-ch stack) (matching-delim ch)))

;;------------------------------------------------------------------------
;; Delimiter Stack operations
;;
;;
;;   We track delimiters by using a stack of maps containing [:x-pos :ch :indent-delta].
;;   State is tracked by checking last character.
;;------------------------------------------------------------------------

(defmulti push-char*
  "Update the delimiter stack with the given character."
  (fn [{:keys [ch]}]
    (cond
      (opening-delim? ch) :open
      (closing-delim? ch) :close
      :else ch)))

(defmethod push-char* "\t"
  [{:keys [stack]}]
  (cond
    (not (in-str? stack)) {:ch "  "} ;; replace with two spaces
    :else nil))

(defmethod push-char* :open
  [{:keys [stack] :as state}]
  (cond
    (escaping? stack) {:stack (pop stack)}
    (in-code? stack) {:stack (conj stack (select-keys state [:x-pos :ch :indent-delta]))}
    :else nil))

(defmethod push-char* :close
  [{:keys [stack backup ch]}]
  (cond
    (escaping? stack) {:stack (pop stack)}
    (in-code? stack) (if (valid-closer? stack ch)
                       (let [opener (peek stack)]
                         {:stack (pop stack)
                          :backup (conj backup opener)})
                       {:ch ""}) ;; erase non-matched delimiter
    :else nil))

(defmethod push-char* ";"
  [{:keys [stack] :as state}]
  (cond
    (escaping? stack) {:stack (pop stack)}
    (in-code? stack) {:stack (conj stack (select-keys state [:x-pos :ch]))}
    :else nil))

(defmethod push-char* "\n"
  [{:keys [stack]}]
  (let [stack (cond-> stack (escaping? stack) pop)
        stack (cond-> stack (in-comment? stack) pop)]
    {:ch ""
     :stack stack}))

(defmethod push-char* "\\"
  [{:keys [stack] :as state}]
  (cond
    (escaping? stack) {:stack (pop stack)}
    (in-comment? stack) nil
    :else {:stack (conj stack (select-keys state [:x-pos :ch]))}))

(defmethod push-char* "\""
  [{:keys [stack] :as state}]
  (cond
    (escaping? stack) {:stack (pop stack)}
    (in-str? stack) {:stack (pop stack)}
    (in-comment? stack) nil
    :else {:stack (conj stack (select-keys state [:x-pos :ch]))}))

(defmethod push-char* :default
  [{:keys [stack]}]
  (cond
    (escaping? stack) {:stack (pop stack)}
    :else nil))

(defn push-char
  [state]
  (let [new-data (push-char* state)]
    (merge-with #(or %2 %1) state new-data)))
