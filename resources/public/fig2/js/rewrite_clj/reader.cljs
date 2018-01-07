(ns rewrite-clj.reader
  (:refer-clojure :exclude [peek next])
  (:require [cljs.tools.reader :as r]
            [cljs.tools.reader.reader-types :as reader-types]
            [cljs.tools.reader.impl.commons :refer [parse-symbol]]
            [goog.string :as gstring]
            [rewrite-clj.node.protocols :as nd]))

(def read-char reader-types/read-char)
(def get-column-number reader-types/get-column-number)
(def get-line-number reader-types/get-line-number)
(def peek-char reader-types/peek-char)
(def indexing-push-back-reader reader-types/indexing-push-back-reader)
(def unread reader-types/unread)
(def read-string r/read-string)

;; TODO: try to get goog.string.format up and running !
(defn throw-reader
  "Throw reader exception, including line/column."
  [^not-native reader fmt & data]
  (let [c (get-column-number reader)
        l (get-line-number reader)]
    (throw
      (js/Error.
        (str data fmt
             " [at line " l ", column " c "]")))))


(defn boundary?
  "Check whether a given char is a token boundary."
  [c]
  (< -1 (.indexOf #js [\" \: \; \' \@ \^ \` \~
                       \( \) \[ \] \{ \} \\ nil] c)))

(defn- ^boolean whitespace?
  "Checks whether a given character is whitespace"
  [ch]
  ;(or (gstring/isBreakingWhitespace ch) (identical? \, ch))
  (< -1 (.indexOf #js [\return \newline \tab \space ","] ch)))

(defn ^boolean linebreak?
  "Checks whether the character is a newline"
  [c]
  (< -1 (.indexOf #js [\return \newline] c)))

(defn ^boolean space?
  "Checks whether the character is a space"
  [c]
  (< -1 (.indexOf #js [\tab \space ","] c)))

(defn ^boolean whitespace-or-boundary?
  [c]
  (or (whitespace? c) (boundary? c)))

(def buf (gstring/StringBuffer. ""))

(defn read-while
  "Read while the chars fulfill the given condition. Ignores
  the unmatching char."
  ([^not-native reader p?]
   (read-while reader p? (not (p? nil))))

  ([^not-native reader p? eof?]
    (.clear buf)
    (loop []
      (if-let [c (read-char reader)]
        (if (p? c)
          (do
            (.append buf c)
            (recur))
          (do
            (unread reader c)
            (.toString buf)))
        (if eof?
          (.toString buf)
          (throw-reader reader "Unexpected EOF."))))))

(defn read-until
  "Read until a char fulfills the given condition. Ignores the
   matching char."
  [^not-native reader p?]
  (read-while
    reader
    (complement p?)
    (p? nil)))

(defn read-include-linebreak
  "Read until linebreak and include it."
  [^not-native reader]
  (str
    (read-until
      reader
      #(or (nil? %) (linebreak? %)))
    (read-char reader)))

(defn string->edn
  "Convert string to EDN value."
  [s]
  (read-string s))

(defn ignore
  "Ignore the next character."
  [^not-native reader]
  (read-char reader)
  nil)


(defn next
  "Read next char."
  [^not-native reader]
  (read-char reader))

(defn peek
  "Peek next char."
  [^not-native reader]
  (peek-char reader))



(defn read-with-meta
  "Use the given function to read value, then attach row/col metadata."
  [^not-native reader read-fn]
  (let [row (get-line-number reader)
        col (get-column-number reader)
        ^not-native entry (read-fn reader)]
    (when entry
      (let [end-row (get-line-number reader)
            end-col (get-column-number reader)
            end-col (if (= 0 end-col)
                      (+ col (.-length (nd/string entry)))
                      end-col)] ; TODO: Figure out why numbers are sometimes whacky
        (if (= 0 col) ; why oh why
          entry
          (-with-meta
            entry
            {:row row
             :col col
             :end-row end-row
             :end-col end-col}))))))

(defn read-repeatedly
  "Call the given function on the given reader until it returns
   a non-truthy value."
  [^not-native reader read-fn]
  (->> (repeatedly #(read-fn reader))
       (take-while identity)
       (doall)))


(defn read-n
  "Call the given function on the given reader until `n` values matching `p?` have been
   collected."
  [^not-native reader node-tag read-fn p? n]
  {:pre [(pos? n)]}
  (loop [c 0
         vs []]
    (if (< c n)
      (if-let [v (read-fn reader)]
        (recur
          (if (p? v) (inc c) c)
          (conj vs v))
        (throw-reader
          reader
          "%s node expects %d value%s."
          node-tag
          n
          (if (= n 1) "" "s")))
      vs)))

(defn- re-matches*
  [re s]
  (let [matches (.exec re s)]
    (when (and (not (nil? matches))
               (identical? (aget matches 0) s))
      (if (== (alength matches) 1)
        (aget matches 0)
        matches))))

(defn read-keyword
  [^not-native reader initch]
  (let [tok (cljs.tools.reader/read-token reader :keyword (read-char reader))
        a (re-matches* (re-pattern "^[:]?([^0-9/].*/)?([^0-9/][^/]*)$") tok)
        token (aget a 0)
        ns (aget a 1)
        name (aget a 2)]
    (if (or (and (not (undefined? ns))
                 (identical? (. ns (substring (- (.-length ns) 2) (.-length ns))) ":/"))
            (identical? (aget name (dec (.-length name))) ":")
            (not (== (.indexOf token "::" 1) -1)))
      (cljs.tools.reader.impl.errors/reader-error reader 
                                                  "Invalid token: " 
						  token)
      (if (and (not (nil? ns)) (> (.-length ns) 0))
        (keyword (.substring ns 0 (.indexOf ns "/")) name)
        (keyword (.substring token 1))))))

;; (let [form-rdr (r/indexing-push-back-reader "(+ 1 1)")]
;;   (read-include-linebreak form-rdr))


;(re-matches* (re-pattern "^[:]?([^0-9/].*/)?([^0-9/][^/]*)$") ":%dill.*")
