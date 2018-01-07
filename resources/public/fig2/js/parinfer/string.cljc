(ns parinfer.string
  (:require
    [clojure.string :as string]))

(defn insert-string
  [orig idx insert]
  (str (subs orig 0 idx)
       insert
       (subs orig idx)))

(defn remove-str-range
  [orig start end]
  (str (subs orig 0 start)
       (subs orig end)))

(defn get-lines
  "get all lines (even empty ones)
  source: http://stackoverflow.com/a/29614863/142317"
  [text]
  (string/split text #"\n" -1))
