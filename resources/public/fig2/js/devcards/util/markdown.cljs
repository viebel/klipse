(ns devcards.util.markdown
  (:require
   [clojure.string :as string]
   [cljsjs.showdown]))

(defn leading-space-count [s]
  (when-let [ws (second (re-matches #"^([\s]*).*"  s))]
    (.-length ws)))

(defn is-bullet-item? [s] (boolean (re-matches #"^\s*([-*+]|[0-9]+\.)\s.*" s)))

(defn bullets-left-edge "Find the common left edge of bullet lists in a collection of lines."
  [lines]
  (or
    (->> lines
      (filter is-bullet-item?)
      (map leading-space-count)
      (apply min))
    0))

(defn strip-left-margin "Strip the left margin's extra whitespace, but leave bullet list indents in tact."
  [s margin]
  (if (is-bullet-item? s)
    (subs s margin)
    (string/trim s)))

(let [conv-class (.-converter js/Showdown)
      converter (conv-class.)]
  (defn markdown-to-html
    "render markdown"
    [markdown-txt]
    (.makeHtml converter markdown-txt)))

(defn matches-delim? [line]
  (re-matches #"^[\s]*```(\w*).*" line))

(defmulti block-parser
  (fn [{:keys [stage]} line]
    [(if (matches-delim? line) :delim :line) (:type stage)]))

(defmethod block-parser [:line :markdown] [{:keys [stage left-margin] :as st} line]
  (update-in st [:stage :content] conj (strip-left-margin line left-margin)))

(defmethod block-parser [:line :code-block] [{:keys [stage] :as st} line]
  (update-in st [:stage :content] conj (subs line (:leading-spaces stage))))

(defmethod block-parser [:delim :markdown] [{:keys [stage accum] :as st} line];; enter block
  (let [lang (second (matches-delim? line))]
    (-> st ;; the beginning
      (assoc :accum (conj accum stage))
      (assoc :stage
             {:type :code-block
              :lang (when-not (string/blank? lang) lang)
              :leading-spaces (leading-space-count line)
              :content []}))))

(defmethod block-parser [:delim :code-block] [{:keys [stage accum] :as st} line];; enter block
  (-> st ;; the end
    (assoc :accum (conj accum stage))
    (assoc :stage {:type :markdown :content []})))

(defn parse-out-blocks* [m]
  (let [lines (string/split m "\n")]
    (reduce block-parser
     {:stage {:type :markdown :content []} :accum [] :left-margin (bullets-left-edge lines)}
     lines)))

(defn parse-out-blocks [m]
  (let [{:keys [stage accum]} (parse-out-blocks* m)]
    (->> (conj accum stage)
      (filter (fn [{:keys [content]}] (not-empty content)))
      (map (fn [x] (update-in x [:content] #(string/join "\n" %)))))))

#_(devcards.core/defcard parse-out-code-blocks3
  (parse-out-blocks
   "   ```langer
   (defcard bmi-calculator                        ;; optional symbol name
     \"*Code taken from Reagent readme.*\"          ;; optional markdown doc
     (fn [data-atom _] (bmi-component data-atom)) ;; object of focus
     {:height 180 :weight 80}                     ;; optional initial data
     {:inspect-data true :history true})          ;; optional devcard config options
      
   ```
# [Devcards](https://github.com/bhauman/devcards): the hard sell
    
   The Devcards library is intended to make ClojureScript development
   a pure joy.
 
   Devcards are intended to facilitate **interactive live
   development**. Devcards can be used in conjunction with figwheel but
   will also work with any form of live code reloading (repl, boot-reload, ...)

   Devcards revolves around a multi-purpose macro called `defcard`.
   You can think of `defcard` as a powerful form of **pprint** that helps you
   interactively lift code examples out of your source files into the
   Devcards interface (you are currently looking at the Devcards
   interface).

   The Devcards that you create are intended to have no impact on the
   size of your production code. You can use Devcards just as you
   would use exectuable comments inline with your source code. You
   can also keep them separate like a test suite.

   With [figwheel](https://github.com/bhauman/lein-figwheel), Devcards
   configuration couldn't be simpler. Just add `[devcards
   \"0.2.0-SNAPSHOT\"]` and create a new build config with `:figwheel
   {:devcards true}`. See the Quick Start instructions at the end of
   this document.

   Let's look at an advanced Devcard:
   
   ```
   (defcard bmi-calculator                        ;; optional symbol name
     \"*Code taken from Reagent readme.*\"          ;; optional markdown doc
     (fn [data-atom _] (bmi-component data-atom)) ;; object of focus
     {:height 180 :weight 80}                     ;; optional initial data
     {:inspect-data true :history true})          ;; optional devcard config options
      
   ```

   The [defcard api](#!/devdemos.defcard_api)
   is intended to be small and intuitive.

   And you can see this devcard rendered below:"))


#_(devcards.core/defcard parse-out-code-blocks3
  (parse-out-blocks
   "# [Devcards](https://github.com/bhauman/devcards): the hard sell
    
   The Devcards library is intended to make ClojureScript development
   a pure joy.
 
   Devcards are intended to facilitate **interactive live
   development**. Devcards can be used in conjunction with figwheel but
   will also work with any form of live code reloading (repl, boot-reload, ...)

   Devcards revolves around a multi-purpose macro called `defcard`.
   You can think of `defcard` as a powerful form of **pprint** that helps you
   interactively lift code examples out of your source files into the
   Devcards interface (you are currently looking at the Devcards
   interface).

   The Devcards that you create are intended to have no impact on the
   size of your production code. You can use Devcards just as you
   would use exectuable comments inline with your source code. You
   can also keep them separate like a test suite.

   With [figwheel](https://github.com/bhauman/lein-figwheel), Devcards
   configuration couldn't be simpler. Just add `[devcards
   \"0.2.0-SNAPSHOT\"]` and create a new build config with `:figwheel
   {:devcards true}`. See the Quick Start instructions at the end of
   this document.

   Let's look at an advanced Devcard:
   
   ```
   (defcard bmi-calculator                        ;; optional symbol name
     \"*Code taken from Reagent readme.*\"          ;; optional markdown doc
     (fn [data-atom _] (bmi-component data-atom)) ;; object of focus
     {:height 180 :weight 80}                     ;; optional initial data
     {:inspect-data true :history true})          ;; optional devcard config options
      
   ```

   The [defcard api](#!/devdemos.defcard_api)
   is intended to be small and intuitive.

   And you can see this devcard rendered below:"))
