                       
                                           
                                            

       (ns pathetic.core
         (:refer-clojure :exclude [resolve])
         (:require [clojure.string :as str]
                   [goog.Uri :as uri]
                   [goog.string :as string]))

(def ^{:private true} separator "/")
(def ^{:private true} separator-pattern (re-pattern separator))

;; A note about the internal representation we work with for paths in this code.
;; ---
;; We work with vectors of path components, basically (that is, strings of the
;; pieces between File/separator). If the path is an absolute path, the first
;; component will be :root, so that if during processing everything else is
;; removed, we know to render "/" and not ".". Similarly, if the path is a
;; relative path, the first component will be :cwd. The rest of the vector is
;; the path components as strings. In this file, I'll call this data structure
;; a "path vector."

;;
;; Utility Functions
;;

(defn- common-prefix
  "Given two collections, returns a sequence containing the prefix they
   share. Example: (common-prefix [\\a \\b] [\\a \\b \\c \\d]) -> (\\a \\b)"
  [coll1 coll2]
  (map first (take-while #(= (first %) (second %))
                         (map #(vector %1 %2) coll1 coll2))))

(defn- unique-suffix
  "Returns the elements of interesting-coll that are not part of the common
   prefix with uninteresting-coll."
  [uninteresting-coll interesting-coll]
  (let [common-parts (common-prefix uninteresting-coll interesting-coll)]
    (drop (count common-parts) interesting-coll)))

     
           
        
                                           

      
(defn split
  [path]
  (if (= path separator)
    []
    (str/split (str path) separator-pattern)))

(defn parse-path
  "Given a j.io.File or string containing a relative or absolute path,
   returns the corresponding path vector data structure described at
   the top of the file.

   This function does not do any normalization or simplification. However,
   because there is more than one way to write some paths, some simplification
   might happen anyways, such as if the path starts with a (redundant) \".\"."
  [path]
  ;; We have to check first if path is empty because when we try to parse
  ;; say the root path, it will be separated into an empty list, making it
  ;; indistinguishable. This avoids having an empty path parsed into [:root].
  (if (empty? (str path))
    nil
    (let [path-pieces (split path)]
      ;; (str/split "/" #"/") => [], so we check for this case first.
      (if (= 0 (count path-pieces))
        [:root]
        (case (first path-pieces)
          ;; If first item is "", we split a path that started with "/".
          ;; Then we need to skip the "" at the start of path-pieces.
          "" (apply vector :root (rest path-pieces))
          ;; If the first item is ".", note that we start with
          ;; :cwd and then discard the ".".
          "." (apply vector :cwd (rest path-pieces))
          (apply vector :cwd path-pieces))))))

(defn render-path
  "Given a seq of path elements as created by parse-path, returns a string
   containing the path represented. This function will only
   ever use unix-style path rules, so an absolute path will always start with
   the \"/\" separator.

   NOTE: It is NOT the goal of this function to perform normalization, it just
   renders what it is given. HOWEVER, that does NOT mean that it is always true
   that (= (render-path (parse-path some-path)) some-path). That is, you may not
   render the exact same string you parsed. This is because the path syntax does
   not have exactly one way to write every path."
  [path-pieces]
  (case (first path-pieces)
    :root (str separator (str/join separator (rest path-pieces)))
    :cwd (if (next path-pieces)
           (str/join separator (rest path-pieces))
           ".")
    (str/join separator path-pieces)))

;;
;; Core Functions
;;

     
                       
                            
                         

      
(defn starts-with
  [s prefix]
  (goog.string.startsWith s prefix))

(defn absolute-path?
  "Returns true if the given argument is an absolute path."
  [path]
  (starts-with path separator))

(defn up-dir
  "Given a seq of path elements as created by parse-path, returns a new
   seq of path elements, but having gone \"up\" one directory. That is,
   applies a \"..\" component to the path."
  [path-pieces]
  (case (last path-pieces)
        ;; If the only thing in the path is :cwd, we reached the end of a
        ;; relative path, and need to add the ".." to keep track of the
        ;; intention for the relative path. Similarly, if the previous
        ;; part is a "..", then we should add another, instead of removing the
        ;; previous one.
        (:cwd "..") (conj path-pieces "..")
        ;; Going "up" from root just gives you root (it's its own parent).
        :root path-pieces
        (pop path-pieces)))

(defn normalize*
  "Cleans up a path so that it has no leading/trailing whitespace, and
   removes any removable same-/parent-dir references. path-pieces
   should be a path vector in the format returned by parse-path;
   return value is a vector in the same format."
  [path-pieces]
  (loop [result [(first path-pieces)]
         remaining-path (rest path-pieces)]
    (let [[curr & remainder] remaining-path]
      (condp = curr
        nil result
        ;; Ignore a repeated separator (empty path component) or
        ;; a same-dir component.
        "" (recur result remainder)
        "." (recur result remainder)
        ".." (recur (up-dir result) remainder)
        (recur (conj result curr) remainder)))))

(defn normalize
  "Cleans up a path so that it has no leading/trailing whitespace, and
   removes any unremovable same-/parent-dir references. Takes the path
   argument as a string and returns its result as a string."
  [path]
  (render-path (normalize* (parse-path path))))

(defn relativize*
  "Takes two absolute paths or two relative paths, and returns a relative path
   that indicates the same file system location as dest-path, but
   relative to base-path. Paths should be path vectors, and the return
   value is also a path vector."
  [base-path dest-path]
  (let [common-path (common-prefix base-path dest-path)
        base-suffix (drop (count common-path) base-path)
        dest-suffix (drop (count common-path) dest-path)]
    (if (nil? common-path)
      (throw (ex-info "Paths contain no common components." {})))
    (concat [:cwd]
            (repeat (count base-suffix) "..")
            (loop [suffix []
                   remainder dest-suffix]
              (let [curr (first remainder)]
                (condp = curr
                  nil suffix
                  "" (recur suffix (rest remainder))
                  "." (recur suffix (rest remainder))
                  ".." (recur (conj suffix "..")
                              (rest remainder))
                  (recur (conj suffix curr)
                         (rest remainder))))))))

(defn relativize
  "Takes two absolute paths or two relative paths, and returns a relative path
   that indicates the same file system location as destination-path, but
   relative to base-path."
  [base-path dest-path]
  (let [base-path (normalize* (parse-path base-path))
        dest-path (normalize* (parse-path dest-path))]
    (render-path (relativize* base-path dest-path))))

(defn resolve*
  "Resolve the other-path against the base-path. If other-path is absolute,
   the result is other-path. If other-path is nil, the result is base-path.
   Otherwise, the result is other-path concatenated onto base-path. Does not
   normalize its output. All inputs and outputs are path vectors."
  [base-path other-path]
  (cond (nil? other-path)
        base-path
        (= :root (first other-path)) ;; Is it absolute?
        other-path
        :else
        (let [base-components (normalize* base-path)
              ;; Skip the first element to get rid of the :cwd
              other-components (rest (normalize* other-path))]
          (concat base-components other-components))))

(defn resolve
  "Resolve the other-path against the base-path. If other-path is absolute,
   the result is other-path. If other-path is nil, the result is base-path.
   Otherwise, the result is other-path concatenated onto base-path. Does not
   normalize its output. Accepts an optional third argument containing a string
   with the path separator to use."
  [base-path other-path]
  (render-path (resolve* (parse-path base-path)
                         (parse-path other-path))))

     
               
                            
                       

      
(defn ends-with
  [s suffix]
  (goog.string.endsWith s suffix))

(defn ensure-trailing-separator
  "If the path given does not have a trailing separator, returns a new path
   that has one."
  [path]
  (if (ends-with path separator)
    path
    (str path separator)))

;;
;; URL Utilities
;;

     
            
                 
                                            
                 
                                   

      
(defn as-url
  [url-or-string]
  (if (instance? goog.Uri url-or-string)
    url-or-string
    (goog.Uri. url-or-string)))

(defn split-url-on-path
  "Given a URL or string containing a URL, returns a vector of the three
   component strings: the stuff before the path, the path, and the stuff
   after the path. Useful for destructuring."
  [url-or-string]
  ;; We borrow j.n.URL's or goog.Uri's parser just to make sure we get the right path.
  (let [url (as-url url-or-string)
        url-string (str url)
        path (.getPath url)
        path-idx (.lastIndexOf url-string path)
        pre-path (.substring url-string 0 path-idx)
        post-path (.substring url-string (+ path-idx (count path)))]
    [pre-path path post-path]))

(defn url-normalize
  "Behaves like normalize on the path part of a URL, but takes a j.n.URL or
   string containing a URL, and returns a string containing the same URL
   instead of just a path. Everything but the path part of the URL is unchanged
   (query, anchor, protocol, etc)."
  [url-or-string]
  (let [[pre-path path post-path] (split-url-on-path url-or-string)]
    (str pre-path (normalize path) post-path)))

(defn url-ensure-trailing-separator
  "Behaves like ensure-trailing-separator on the path part of a URL, but takes
   a j.n.URL or string containing a URL, and returns a string containing the
   same URL instead of just a path. Everything but the path part of the URL is
   unchanged (query, anchor, protocol, etc)."
  [url-or-string]
  (let [[pre-path path post-path] (split-url-on-path url-or-string)]
    (str pre-path (ensure-trailing-separator path) post-path)))

;;;;;;;;;;;; This file autogenerated from src/pathetic/core.cljx
