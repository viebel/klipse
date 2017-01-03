(ns klipse.lang.clojure.io
  (:require-macros [gadjett.core :refer [dbg]]
                   [purnam.core :refer [!>]]
                   [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [cljs.reader :refer [read-string]]
   [clojure.string :as s]
   [klipse.utils :refer [url-parameters]]
   [clojure.walk :as ww]
   [clojure.string :as string :refer [join split lower-case]]
   [cljs-http.client :as http]
   [cljs-http.util :refer [transit-decode]]
   [cljs.core.async :refer [<!]]))

(defn edn [json]
  (-> json
      clj->js
      js/JSON.stringify
      (transit-decode :json nil)))

(def macro-suffixes [".clj" ".cljc"])
(def cljs-suffixes [".cljs" ".cljc"])

(defmulti load-ns
  "
  Each runtime environment provides a different way to load a library.
  Received two arguments - a map and a callback function:
  The map will have the following keys:

    :name   - the name of the library (a symbol)
    :macros - modifier signaling a macros namespace load
    :path   - munged relative library path (a string)

    It is up to the implementor to correctly resolve the corresponding .cljs,
    .cljc, or .js resource (the order must be respected).
    If :macros is true, resolution should only consider .clj or .cljc resources (the order must be respected).
  Upon resolution the callback should be invoked with a map containing the following keys:

    :lang       - the language, :clj or :js
    :source     - the source of the library (a string)
    :file       - optional, the file path, it will be added to AST's :file keyword (but not in :meta)
    :cache      - optional, if a :clj namespace has been precompiled to :js, can give an analysis cache for faster loads.
    :source-map - optional, if a :clj namespace has been precompiled to :js, can give a V3 source map JSON

    If the resource could not be resolved, the callback should be invoked with
    nil."
  (fn [_ {:keys [name macros path]} src-cb]
                    [name macros path]
                  (cond
                    macros :macro
                    (re-matches #"^goog\..*" (str name)) :goog
                    (re-matches #".*\.gist-.*" (str name)) :gist
                    :default :cljs)))

;https://github.com/clojure/clojurescript/blob/master/src/test/self/self_parity/test.cljs#L166
;Indicates namespaces that we either don't need to load,
;shouldn't load, or cannot load (owing to unresolved
;                                          technical issues).

(def skip-ns-macros #{'cljs.core
                      'cljs.pprint
                      'cljs.env.macros
                      'cljs.analyzer.macros
                      'cljs.js
                      'cljs.compiler.macros})

(defn the-ns-map [name]
  (let [m '{cljs.test "https://raw.githubusercontent.com/clojure/clojurescript/master/src/main/cljs/"
           clojure.template "https://raw.githubusercontent.com/viebel/clojure/master/src/clj/"}]
    (if-let [path (m name)]
      path
      (let [name-str (str name)]
        (cond
          :else nil)))))

(def skip-ns-cljs #{'cljs.core
                    'cljs.env
                    'cljs.source-map
                    'cljs.tools.reader.reader-types
                    'cljs.tools.reader})

(defn cache-buster? []
  (boolean (read-string (or (:cache-buster (url-parameters)) "false"))))

(defn verbose? []
  (boolean (read-string (or (:verbose (url-parameters)) "false"))))

(defn filename-of [s cache-buster?]
  (if cache-buster?
    (str s "?" (rand))
    s))

(defn try-to-load-ns
  "Tries to load one namespace from filenames.
  Will call the src-cb upon first success.
  If can-recover? is false, will call src-cb with nil if it cannot load any namespace.
  Returns :success if a nampespace was loaded otherwise, returns nil.
  "
  [filenames lang src-key src-cb & {:keys [transform can-recover?] :or {transform identity can-recover? false}}]
  (go
    (if
      (loop [filenames filenames]
        (when (seq filenames)
          (let [filename (first filenames)
                {:keys [status body]} (<! (http/get (filename-of filename (cache-buster?)) {:with-credentials? false}))]
            (if (= 200 status)
              (do (src-cb {:lang lang src-key (transform body) :file filename})
                  :success)
              (do (recur (rest filenames)))))))
      :success
      (do (when-not can-recover?
            (src-cb nil))
          false))))

(defn external-libs-files
  "returns a list of files provided list of external-libs and suffixes"
  [external-libs suffixes path]
  (for [lib external-libs
        suffix suffixes]
    (str lib "/" path suffix)))



(defn name->cached-resource [name]
  (-> (str (munge name))
      (string/replace #"\." "_SLASH_")))

(defn load-ns-from-cache [name src-cb macro?]
  (when (verbose?) (js/console.info "load-ns-from-cache:" (str name) "macro: " macro?))
  (go
    (let [nn (name->cached-resource name)
          suffix (if macro? "$macros" "")
          root "http://viebel.github.io/klipse/cache-cljs/"
          src-filename (str root nn suffix ".js")
          cache-filename (str root nn suffix ".cache.json")
          src (<! (http/get (filename-of src-filename (cache-buster?)) {:with-credentials? false}))
          cache (<! (http/get (filename-of cache-filename (cache-buster?)) {:with-credentials? false}))]
      (if (every? #(= 200 %) [(:status cache) (:status src)])
        (do
          (js/console.log name {:lang :js :cache (edn (:body cache)) :src (:body src)})
          (src-cb {:lang :js :cache (edn (:body cache)) :source (:body src)}))
        (src-cb nil)))))

(defn cached-macro-ns? [name]
  (or (re-matches #"reagent\..*|om\..*|cljs\.spec.*" (str (munge name))))
  '#{gadjett.core})

(defn cached-cljs-ns? [name]
  (re-matches #"clojure\.test\.check.*|reagent\..*|om\..*" (str (munge name))))

(defmethod load-ns :macro [external-libs {:keys [name path]} src-cb]
  (when (verbose?) (js/console.info "load-ns :macro :" (str name)))
  (cond
    (skip-ns-macros name) (do (when (verbose?) (js/console.info "load-ns :macro skip:" (str name))) (src-cb {:lang :clj :source ""}))
    (cached-macro-ns? name) (load-ns-from-cache name src-cb true)
    (the-ns-map name) (do (when (verbose?) (js/console.info "load-ns :macro known:" (str name))) (src-cb {:lang :clj :source ""})
                          (let [prefix (str (the-ns-map name) "/" path)
                                filenames (map (partial str prefix) macro-suffixes)]
                            (try-to-load-ns filenames :clj :source src-cb)))
    :else (do
            (when (verbose?) (js/console.info "load-ns :macro external-libs:" (str name))) (src-cb {:lang :clj :source ""})
            (let [filenames (external-libs-files external-libs macro-suffixes path)]
                (try-to-load-ns filenames :clj :source src-cb)))))


(def cache-url "https://storage.googleapis.com/app.klipse.tech/fig/js/")
#_(def cache-url "/cache/js/")


(defmethod load-ns :gist [external-libs {:keys [path]} src-cb]
  (let [path (string/replace path #"gist_" "")
        filenames (map #(str "https://gist.githubusercontent.com/" path %) cljs-suffixes)]
    (try-to-load-ns filenames :clj :source src-cb)))

(defn bundled-ns?
  "Checks whether a namespace is present at run-time"
  [name]
  ; for some reason, during the load of reagent namespaces, a `reagent.dom` object is created - but it's not the real `reagent.dom` namespace
  (if (re-matches #".*reagent.*" (str (munge name)))
    false
    (!> js/goog.getObjectByName (str (munge name))))) ; (:require goog breaks the build see http://dev.clojure.org/jira/browse/CLJS-1677

(defn cljsjs? [name]
  (re-matches #"cljsjs\..*" (str name)))

(defn cljsjs-libname [name]
  (as-> (str name) $
    (re-matches #"cljsjs\.(.*)" $)
    (second $)
    (s/replace $ #"\." "-")))

(defn try-to-load-cljsjs-ns
  "Try to load the js file corresponding to a cljsjs package.
  For that, we have to convert the package name into a full path - hosted on this git repo: https://github.com/viebel/cljsjs-hosted
  "
  [name src-cb]
  ;; TODO - Jan 1, 2017 - BUGFIX: for some reason when transpiling code that requires a cljsjs package, the package is reloaded on every transpilation
  (let [root-path "https://viebel.github.io/cljsjs-hosted/cljsjs/"
        lib-name (cljsjs-libname name)
        full-names [(str root-path lib-name "/production/" lib-name ".min.inc.js")
                    (str root-path "/production/" lib-name ".min.inc.js")
                    (str root-path lib-name "/development/" lib-name ".inc.js")
                    (str root-path "/development/" lib-name ".inc.js")]]
    (try-to-load-ns full-names :js :source src-cb)))


(defmethod load-ns :cljs [external-libs {:keys [name path]} src-cb]
  (when (verbose?) (js/console.info "load-ns :cljs :" (str name)))
  (cond
    (skip-ns-cljs name) (src-cb {:lang :js :source ""})
    (bundled-ns? name) (let [_ (when (verbose?) (js/console.log "load-ns :cljs bundled" name))
                                      filenames (map #(str cache-url path % ".cache.json") cljs-suffixes)]
                            (go
                              (when-not (<! (try-to-load-ns filenames :js :cache src-cb :transform edn :can-recover? true))
                                        ; sometimes it's a javascript namespace that is cached e.g com.cognitect.transit from transit-js
                                (src-cb {:lang :js :source ""}))))
    (cached-cljs-ns? name) (load-ns-from-cache name src-cb false)
    (cljsjs? name) (try-to-load-cljsjs-ns name src-cb)
    (the-ns-map name) (let [prefix (str (the-ns-map name) "/" path)
                            filenames (map (partial str prefix) cljs-suffixes)]
                        (go
                          (when-not
                              (<! (try-to-load-ns filenames :clj :source src-cb :can-recover? true))
                            (try-to-load-ns (str prefix ".js") :js :source src-cb))))
    (seq external-libs) (let [filenames (external-libs-files external-libs cljs-suffixes path)]
                          (go
                            (when-not
                                (<! (try-to-load-ns filenames :clj :source src-cb :can-recover? true))
                              (let [filenames (external-libs-files external-libs [".js"] path)]
                                (try-to-load-ns filenames :js :source src-cb)))))
    :else (src-cb nil)))

(defn fix-goog-path [path]; https://github.com/oakes/eval-soup/blob/master/src/eval_soup/core.cljs
  ; goog/string -> goog/string/string
  ; goog/string/StringBuffer -> goog/string/stringbuffer
  (let [parts (split path #"/")
        last-part (last parts)
        new-parts (concat
                    (butlast parts)
                    (if (= last-part (lower-case last-part))
                      [last-part last-part]
                      [(lower-case last-part)]))]
    (join "/" new-parts)))

(defn simple-goog-path [path]
  ; goog/date/interval -> goog/date/date
  (let [parts (split path #"/")
        butlast-parts (butlast parts)
        new-parts (concat butlast-parts [(last butlast-parts)])]
    (join "/" new-parts)))

(defn another-goog-path [path]
  ; goog/string/format -> goog/string/stringformat
  (let [parts (split path #"/")
        last-part (last parts)
        new-parts (concat
                    (butlast parts)
                    [(join "" (take-last 2 parts))])]
    (join "/" new-parts)))

(defmethod load-ns :goog [_ {:keys [name path]} src-cb]
  (cond
    (!> js/goog.getObjectByName (str name)) (src-cb {:lang :js :source ""}); isProvided and nameToPath don't work with :optimizations :simple or :whitespace
    :else (let [closure-github-path "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/"
                filenames (map #(str closure-github-path % ".js") ((juxt fix-goog-path identity another-goog-path simple-goog-path) path))]
            (try-to-load-ns filenames :js :source src-cb))))

