(ns parinfer.paren-mode
  "Corrects indentation based on parens.
  See http://shaunlebron.github.io/parinfer/#paren-mode"
  (:require
    [parinfer.reader :refer [in-str?
                             in-code?
                             whitespace?
                             valid-closer?
                             matching-delim
                             closing-delim?]]
    [parinfer.indent-mode :refer [update-delim-trail
                                  remove-delim-trail
                                  update-insertion-pt
                                  update-line
                                  process-char*]]
    [parinfer.string :refer [insert-string
                             get-lines]]
    [clojure.string :refer [join]]))

(def initial-state
  "An initial state of our running state."
  {:lines []                           ;; final lines containing the inferenced closing delimiters.
   :line-no -1                         ;; current line number we are processing.
   :track-indent? false                ;; "true" when we are looking for the first char on a line to signify indentation.
   :delim-trail {:start nil :end nil}  ;; track EOL delims since we replace them wholesale with inferred delims.
   :insert {:line-dy nil :x-pos nil}   ;; the place to insert closing delimiters whenever we hit appropriate indentation.
   :stack []                           ;; the delimiter stack, maps of [:x-pos :ch :indent-delta]
   :backup []                          ;; (unused, but required by the reader because of the infer process)
   :dedent-x nil                       ;; current x-position subsequent lines cannot be nested inside
   :indent-delta 0})                     ;; how much the current line's indentation was changed


(defn append-delim-trail
  [{:keys [stack line-no insert] :as state}]
  (let [opener (peek stack)
        close-ch (matching-delim (:ch opener))
        stack (pop stack)]
    (-> state
        (assoc :stack stack
               :dedent-x (:x-pos opener))
        (update-in [:lines (+ line-no (:line-dy insert))] insert-string (:x-pos insert) close-ch)
        (update-in [:insert :x-pos] inc))))

(defn min-indent
  [x {:keys [stack]}]
  (let [opener (peek stack)]
    (if-let [start-x (:x-pos opener)]
      (max (inc start-x) x)
      x)))

(defn min-dedent
  [x {:keys [dedent-x]}]
  (if dedent-x
    (min dedent-x x)
    x))

(defn correct-indent
  [{:keys [indent-delta x-pos stack dedent-x line-no] :as state}]
  (let [opener (peek stack)
        delta (:indent-delta opener 0)
        new-x (-> (+ x-pos delta)
                  (min-indent state)
                  (min-dedent state))
        new-delta (+ indent-delta (- new-x x-pos))
        indent-str (apply str (repeat new-x " "))]
    (-> state
        (assoc-in [:lines line-no] indent-str)
        (assoc :indent-delta new-delta
               :x-pos new-x
               :track-indent? false
               :dedent-x nil))))

(defn handle-cursor-delta
  [{:keys [indent-delta line-no x-pos cursor-line cursor-x cursor-dx] :as state}]
  (let [cursor-delta? (and (= cursor-line line-no)
                           (= cursor-x x-pos)
                           cursor-dx)]
    (cond-> state
      cursor-delta? (update :indent-delta + cursor-dx))))

(defn process-indent
  "Update the state by handling a possible indentation trigger."
  [{:keys [stack track-indent? lines line-no ch
           x-pos cursor-line cursor-x cursor-dx] :as state}]
  (let [check-indent? (and track-indent?
                           (in-code? stack)
                           (not (whitespace? ch))
                           (not= ";" ch))
        at-valid-closer? (and check-indent?
                              (closing-delim? ch)
                              (valid-closer? stack ch))
        cursor-holding? (and (= line-no cursor-line)
                             (<= cursor-x x-pos))
        move-closer? (and at-valid-closer?
                          (not cursor-holding?))
        skip? (and check-indent?
                   (closing-delim? ch)
                   (not cursor-holding?))
        at-indent? (and check-indent? (not skip?))
        state (assoc state :process? (not skip?))]
    (cond-> state
      move-closer? append-delim-trail
      true handle-cursor-delta
      at-indent? correct-indent)))

(defn process-char
  "Update the state by processing the given character and its position."
  [{:keys [lines line-no] :as state} ch]
  (let [x-pos (count (get lines line-no))
        state (assoc state :x-pos x-pos :ch (str ch))
        state (process-indent state)]
    (cond-> state
      (:process? state) process-char*)))

(defn reinsert-delims
  [{:keys [removed-delims] :as state}]
  (reduce
    (fn [state _delim]
      (append-delim-trail state))
    state
    removed-delims))

(defn process-line
  "Update the state by processing the given line of text."
  ([line] (process-line initial-state line))
  ([{:keys [stack lines line-no cursor-line] :as state} line]
   (let [line-no (inc line-no)
         state (assoc state
                  :backup []
                  :cursor-in-comment? false
                  :delim-trail {:start nil :end nil}

                  ;; different from process-line in parinfer.format.indent-mode
                  ;; (even if the stack is empty, we still have to track indentation)
                  :track-indent? (not (in-str? stack))

                  :indent-delta 0

                  :lines (conj lines "")
                  :line-no line-no
                  :removed-delims [])
         state (update-in state [:insert :line-dy] #(when % (dec %)))
         state (reduce process-char state (str line "\n"))
         state (-> state
                   remove-delim-trail
                   reinsert-delims)]
     state)))

(defn finalize-state
  [{:keys [stack] :as state}]
  (let [valid? (empty? stack)]
    (assoc state :valid? valid?)))

(defn process-text
  "Update the state by processing the given text."
  ([text] (process-text text nil))
  ([text options]
   (let [state (merge initial-state options)
         lines (get-lines text)
         state (reduce process-line state lines)
         state (finalize-state state)]
     state)))

(defn format-text
  "Fully process the given text using Paren Mode.

  'text' is the full text.

  'options' is an optional map with supported keys:
    :cursor-x     - x position of the cursor (zero-based)
    :cursor-line  - line number of the cursor (zero-based)

  Returns a map:
    :text     - full text output
    :valid?   - indicates if the input was valid
    :state    - cached state to be passed to `format-text-change` (once it is implemented)
  "
  ([text] (format-text text nil))
  ([text options]
   (let [state (process-text text options)
         out-text (if (:valid? state)
                   (join "\n" (:lines state))
                   text)]
    {:text out-text
     :valid? (:valid? state)
     :state state})))
