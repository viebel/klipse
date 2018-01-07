(ns parinfer.indent-mode
  "Corrects parens based on indentation.
  See http://shaunlebron.github.io/parinfer/#indent-mode"
  (:require
    [clojure.string :refer [join]]
    [parinfer.string :refer [insert-string
                             remove-str-range
                             get-lines]]
    [parinfer.reader :refer [push-char
                             whitespace?
                             escaping?
                             in-str?
                             in-code?
                             in-comment?
                             valid-closer?
                             matching-delim
                             closing-delim?]]))

(def initial-state
  "An initial state of our running state."
  {:lines []                           ;; final lines containing the inferenced closing delimiters.
   :postline-states []                 ;; state cache after each line
   :postindent-states []               ;; state cache after each line's indentation point (nil if none)
   :insert {:line-dy nil :x-pos nil}   ;; the place to insert closing delimiters whenever we hit appropriate indentation.
   :line-no -1                         ;; current line number we are processing.

   ;; transient line vars
   :track-indent? false                ;; "true" when we are looking for the first char on a line to signify indentation.
   :delim-trail {:start nil :end nil}  ;; track EOL delims since we replace them wholesale with inferred delims.
   :stack []                           ;; the delimiter stack, maps of [:x-pos :ch :indent-delta]
   :backup []})                          ;; trailing delims that are pushed back onto the stack at EOL

(defn close-delims
  "Update the state by inferring closing delimiters.
  Do this by using the given indentation level.

  Example:

  (defn foo [a b
     ret           ;; <---  When we process `r`, we detect indentation, then...

  (defn foo [a b]  ;; <---  ... we insert a `]` after `b` since `[` is after `r` on the x-axis.
     ret           ;; <---  A `)` is inserted after `ret` if no further indented lines found.
  "
  ([state] (close-delims state 0))
  ([state indent-x]

   (let [;; Pop the appropriate delims off the stack, and create the inferred delim string.
         [stack delims]
         (loop [stack (:stack state), delims ""]
           (if-not (seq stack)
             [stack delims]
             (let [{:keys [x-pos ch]} (peek stack)]
               (if (>= x-pos indent-x)
                 (recur (pop stack) (str delims (matching-delim ch)))
                 [stack delims]))))

         ;; Insert the delims in the correct place, then update the state
         {:keys [line-dy x-pos]} (:insert state)
         line-no (+ (:line-no state) line-dy)
         state (-> state
                    (update-in [:lines line-no] insert-string x-pos delims)
                    (assoc :stack stack))]
     state)))

(defn update-delim-trail
  "Update the state's delim trail as we scan across a line.
  We eventually remove the delim trail since the indented
  content below can cause the delims to move.

  Example:

  (foo (+ 2 3) [(bar)] )    ;; a potential comment
                    ^^^^
                     |
                     +-- trailing delims that we will remove
                          (notice whitespace will also be removed)
  "
  [{:keys [stack delim-trail backup x-pos ch cursor-line line-no cursor-x cursor-in-comment?] :as state}]
  (let [

        ;; these characters won't block, unless they're escaped
        pass-char? (or (= ";" ch)
                       (= "," ch)  ;; NOTE: Commas are whitespace in Clojure, but are unquote sugar in Racket.
                                   ;;       This should still pass for both langs though, since the following
                                   ;;       character necessarily will block if it is a valid unquoted form in Racket.
                       (whitespace? ch)
                       (closing-delim? ch))

        ;; must be in code (before push-char)
        reset? (when (in-code? stack)
                 (or (escaping? stack)
                     (not pass-char?)))

        cursor-in-comment? (or cursor-in-comment?
                               (and (= cursor-line line-no)
                                    (= x-pos cursor-x)
                                    (in-comment? stack)))

        ;; Determine if we have a delimiter we can track.
        update? (and (in-code? stack)
                     (not (escaping? stack))
                     (closing-delim? ch)
                     (valid-closer? stack ch))

        ;; Clear the backup delimiters if we reset.
        backup (cond-> backup reset? empty)

        ;; Update the delimiter trail range if needed.
        delim-trail (cond
                      reset? {}
                      update? (-> delim-trail
                                  (update-in [:start] #(or % x-pos))
                                  (assoc :end (inc x-pos)))
                      :else delim-trail)]

    (assoc state
      :cursor-in-comment? cursor-in-comment?
      :backup backup
      :delim-trail delim-trail)))

(defn block-delim-trail
  "The presence of the cursor can block the removal of some part of the delim trail."
  [{:keys [delim-trail line-no cursor-line cursor-x cursor-in-comment?] :as state}]
  (let [{:keys [start end]} delim-trail
        cursor-block? (and (= line-no cursor-line)
                           start
                           (> cursor-x start)
                           (not cursor-in-comment?))
        start (cond-> start (and start cursor-block?) (max cursor-x))
        end (cond-> end (and end cursor-block?) (max cursor-x))
        [start end] (when-not (= start end) [start end])]
    (assoc state
           :delim-trail {:start start :end end})))

(defn remove-delim-trail
  "Update the state by removing our marked delim trail.
  We remove the delims from the appropriate line of text,
  while also restoring their matching delims onto the stack.

  Example:

  (foo (+ 2 3) [(bar)] )    ;; a potential comment
  ^            ^^   ^^^^
  |            |     |
  |____________|     +-- Remove these from the text.
         |
         +-- Restore these onto the delim stack.
             (fyi, we originally popped them off to validate
              the closing delims. now we need them back to
              infer closing delims for indented lines.)
  "
  [{:keys [delim-trail insert line-no lines backup stack] :as state}]
  (let [{:keys [start end]} delim-trail]
    (if (and start end)
      (let [line (get lines line-no)
            delims (->> (subs line start end)
                        (map str)
                        (filter closing-delim?))
            remove-count (count delims)
            ignore-count (- (count backup) remove-count)
            [backup stack] (loop [backup backup, stack stack]
                             (if (= ignore-count (count backup))
                               [backup stack]
                               (recur (pop backup) (conj stack (peek backup)))))
            state (-> state
                       (update-in [:lines line-no] remove-str-range start end)
                       (assoc :backup backup
                              :stack stack
                              :removed-delims delims))

            insert-line? (zero? (:line-dy insert))
            state (cond-> state
                     insert-line? (update-in [:insert :x-pos] min start))]
        state)
      state)))

(defn update-insertion-pt
  "Update the state's trailing delimiter insertion point as we scan the line.

  Example:

  (defn foo [a b] ret)
  ^^^^^ ^^^ ^^ ^  ^^^
                    |
                    +-- final insertion point candidate

  Special rules allow the user to freely position the trailing
  delimiters while editing a line.

  "
  [{:keys [track-indent? cursor-line lines line-no stack x-pos ch] :as state}]
  (let [prev-ch (str (last (get lines line-no)))

        insert-at-char? (and
                          ;; must be in code (after push-char)
                          (in-code? stack)

                          ;; don't insert at blank (a removed character)
                          (not= "" ch)

                          ;; don't insert at whitespace, unless escaped
                          (or (not (whitespace? ch))
                              (= "\\" prev-ch))

                          ;; don't insert at closing delim, unless cursor is on this line
                          (or (not (closing-delim? ch))
                              (= line-no cursor-line)))

        ;; Add potential insert point for closing delimiters if required.
        insert (when insert-at-char?
                 {:line-dy 0
                  :x-pos (inc x-pos)})]

    (cond-> state
      insert (assoc :insert insert))))

(defn get-cached-state
  [state]
  (select-keys state [:stack :insert]))

(defn commit-cached-state
  "Cache a subset of the state after some event.
  This is used by process-text-change."
  [state key-]
  (update state key- conj (get-cached-state state)))

(defn process-indent
  "Update the state by handling a possible indentation trigger.

  Example:

  (defn foo [a b
     ret           ;; <---  When we process `r`, we detect indentation, then
                   ;;       we start backtracking to insert closing delimiters on a previous line.


  (defn foo [a b]
     )             ;; <---  If a line starts with a closing delimiter, it is not
                   ;;       considered an indentation trigger.  In fact, we skip
                   ;;       the character completely, removing it from the line.
  "
  [{:keys [stack track-indent? lines line-no x-pos ch] :as state}]
  (let [check-indent? (and track-indent?
                        (in-code? stack)
                        (not (whitespace? ch))
                        (not= ";" ch))
        skip? (and check-indent? (closing-delim? ch))
        at-indent? (and check-indent? (not skip?))
        state (assoc state :process? (not skip?))]
    (if at-indent?
      (-> state
          (close-delims x-pos)
          (commit-cached-state :postindent-states)
          (assoc :track-indent? false
                 :processed-indent? true))
      state)))

(defn update-line
  "Update the state by adding processed character to the line."
  [{:keys [ch line-no] :as state}]
  (update-in state [:lines line-no] str ch))

(defn save-preinsert-line
  "Save the text of a line before trailing delims were inserted.
  This allows to restore them when skipping to changed lines in
  process-text-change."
  [{:keys [line-no insert lines] :as state}]
  (cond-> state
    (= 0 (:line-dy insert))
    (assoc-in [:insert :line] (get lines line-no))))

(defn process-char*
  [state]
  ;; NOTE: the order here is important!
  (-> state
      update-delim-trail
      push-char
      update-insertion-pt
      update-line))

(defn process-char
  "Update the state by processing the given character and its position."
  [{:keys [lines line-no] :as state} ch]
  (let [x-pos (count (get lines line-no))
        state (assoc state :x-pos x-pos :ch (str ch))
        state (process-indent state)]
    (cond-> state
      (:process? state) process-char*)))

(defn process-line
  "Update the state by processing the given line of text."
  ([line] (process-line initial-state line))
  ([{:keys [stack lines line-no cursor-line] :as state} line]
   (let [line-no (inc line-no)
         state (assoc state
                  :backup []
                  :cursor-in-comment? false
                  :delim-trail {:start nil :end nil}
                  :track-indent? (and (seq stack) (not (in-str? stack)))
                  :processed-indent? false
                  :lines (conj lines "")
                  :line-no line-no
                  :removed-delims [])
         state (update-in state [:insert :line-dy] #(when % (dec %)))
         state (reduce process-char state (str line "\n"))
         state (-> state
                   block-delim-trail
                   remove-delim-trail
                   save-preinsert-line
                   (commit-cached-state :postline-states))

         ;; if this did not have an indentation trigger point,
         ;; pad postindent-states with a nil.
         state (cond-> state
                 (not (:processed-indent? state))
                 (update :postindent-states conj nil))]
     state)))

(defn finalize-state
  [{:keys [stack] :as state}]
  (let [valid? (not (in-str? stack)) ;; invalid if unclosed string
        close-delims? (and valid? (seq stack))]
    (cond-> (assoc state :valid? valid?)
      close-delims? close-delims)))

(defn process-text
  "Fully processes the given text.  Returns new state.
  See `format-text` for usage."
  ([text] (process-text text nil))
  ([text options]
   (let [state (merge initial-state options)
         lines (get-lines text)
         state (reduce process-line state lines)]
     (finalize-state state))))

;;----------------------------------------------------------------------
;; faster processing for incremental changes
;;----------------------------------------------------------------------


(defn safe-subvec
  [v i]
  (if (< i (count v))
    (subvec v i)
    []))

(defn restore-insert-line
  "restore the text of a line before trailing delimiters were inserted"
  [{:keys [insert line-no] :as state}]
  (let [{:keys [line-dy line]} insert]
    (if (and line-dy line (>= line-no 0))
      (let [insert-line-no (+ line-dy line-no)]
        (assoc-in state [:lines insert-line-no] line))
      state)))

(defn fill-rest-with-cache
  "fill the rest of the lines with info from cache."
  [prev-state state last-i]
  (let [state (-> state
                  (update :lines pop) ;; to restore the version of the line _with_ its trailing delims
                  (update :lines into (safe-subvec (:lines prev-state) last-i))
                  (update :postline-states into (safe-subvec (:postline-states prev-state) (inc last-i)))
                  (update :postindent-states into (safe-subvec (:postindent-states prev-state) (inc last-i)))
                  (merge (last (:postline-states prev-state))))
        state (-> state
                  (assoc :line-no (dec (count (:lines state))))
                  restore-insert-line)]
    state))

(defn process-unchanged-line*
  "process a line that comes after those that have changed.
  'reduced' will halt further processing."
  [prev-state state [old-i line cache]]
  (let [state (process-line state line)
        new-cache (last (:postindent-states state))
        more? (< (inc old-i) (count (:lines prev-state)))
        can-skip? (and new-cache (= new-cache cache))]
    (if (and can-skip? more?)
      (reduced (fill-rest-with-cache prev-state state old-i))
      state)))

(defn process-unchanged-lines
  "process the lines after those that have changed."
  [prev-state state start-i]
  (reduce (partial process-unchanged-line* prev-state) state
          (map vector
               (iterate inc start-i) ;; old line numbers
               (safe-subvec (:lines prev-state) start-i) ;; old lines
               (safe-subvec (:postindent-states prev-state) start-i))))

(defn initial-cached-state
  "build an initial state based on our starting line and previous cache."
  [{:keys [lines postline-states postindent-states] :as prev-state} options i]
  (let [line-data {:lines (subvec lines 0 i)
                   :postindent-states (subvec postindent-states 0 i)
                   :postline-states (subvec postline-states 0 i)
                   :line-no (dec i)}
        last-cache (get postline-states (dec i))]
    (-> initial-state
        (merge options line-data last-cache)
        restore-insert-line)))

(defn process-text-change
  "Processes the given change for the given state.  Returns new state.
  See `format-text-change` for usage."
  ([prev-state change]
   (process-text-change prev-state change nil))
  ([prev-state {:keys [line-no new-line] :as change} options]
   (let [; normalize args (allowing multiple line replacements)
         [start-line-no end-line-no] (if (number? line-no) [line-no (inc line-no)] line-no)
         line-replacements (if (string? new-line) [new-line] new-line)

         ;; 1. create initial state for starting at first changed line
         ;; 2. process changed lines
         ;; 3. process unchanged lines that come after
         state (initial-cached-state prev-state options start-line-no)
         state (reduce process-line state line-replacements)
         state (process-unchanged-lines prev-state state end-line-no)]

     (finalize-state state))))

;;----------------------------------------------------------------------
;; public functions
;;----------------------------------------------------------------------

(defn format-text
  "Fully process the given text using Indent Mode.

  'text' is the full text.

  'options' is an optional map with supported keys:
    :cursor-x     - x position of the cursor (zero-based)
    :cursor-line  - line number of the cursor (zero-based)

  Returns a map:
    :text     - full text output
    :valid?   - indicates if the input was valid
    :state    - cached state to be passed to `format-text-change`
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

(defn format-text-change
  "Process changed lines in a previously processed text using Indent Mode.

  'text' is the full text (including the change).

  'prev-state' is the state after processing 'text' before the 'change' occurred.
    - found in the :state key of the result returned by `format-text` or this function.

  'change' is a map:

    KEY        |  DESCRIPTION             |  TYPE
    -----------+--------------------------+------------------------------------
    :line-no   |  line range to replace   |  a num or min,max line range
    :new-line  |  new line(s) to insert   |  a string or seq if multiple lines

  'options' is an optional map with supported keys:
    :cursor-x     - x position of the cursor (zero-based)
    :cursor-line  - line number of the cursor (zero-based)

  Returns a map:
    :text     - full text output
    :valid?   - indicates if the input was valid
    :state    - cached state to be passed to `format-text-change`
  "
  ([text prev-state change]
   (format-text-change text prev-state change nil))
  ([text prev-state change options]
   (let [state (process-text-change prev-state change options)
         out-text (if (:valid? state)
                    (join "\n" (:lines state))
                    text)]
     {:text out-text
      :valid? (:valid? state)
      :state state})))
