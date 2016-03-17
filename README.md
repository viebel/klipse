# klipse

## Usage
Insert your code in the top left area.
Press Ctrl-Enter to evaluate.



## Contribution

- [x] nice design (4 text areas)
- [x] code mirror
- [ ] keep state in localStorage
- [ ] code mirror for js output
- [ ] bigger fonts and logos
- [ ] input field should not be emptied on reload (compilation)
- [ ] display compilation warnings
- [x] compile into a single `js` file
- [ ] history
- [ ] history in localStorage

## Run Locally

```bash
rlwrap lein figwheel
```
or 

```bash
lein figwheel
```
 Open the browser [http://localhost:5014/index-dbg.html](http://localhost:5014/index-dbg.html)
 
 
## Tutorial

Tutorial Summary
----------

1. init project
2. figwheel
3. compiler functions
4. om.next

1- Init Project
----------

Create a new project directory, switch into it, add a `project.clj` configuration file to it.

```
mkdir cljs-compiler
cd cljs-compiler
touch project.clj
```

``` clojure
(defproject cljs-compiler "0.1.0-SNAPSHOT"
  :description "Eval clojurescript to javascript!"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]]
  :plugins [[lein-cljsbuild "1.1.2" :exclusions [[org.clojure/clojure]]]]
  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src"]
                :compiler {
                  :main cljs-compiler.core
                  :asset-path "js"
                  :output-to "resources/public/js/main.js"
                  :output-dir "resources/public/js"}}]})
```

Create a `resources/public/index.html` file with the following contents:

```
mkdir -p resources/public
touch resources/public/index.html
```

``` html
<!DOCTYPE html>
<html>
    <head lang="en">
        <meta charset="UTF-8">
        <title>Eval clojurescript to javascript!</title>
    </head>
    <body>
        <script src="js/main.js"></script>
    </body>
</html>
```

Create a file `src/cljs_compiler/core.cljs` with the following contents:

```
mkdir -p src/cljs_compiler
touch src/cljs_compiler/core.cljs
```

``` clojure
(ns cljs_compiler.core)

(enable-console-print!)

(println "Hello world!")
```

```
lein cljsbuild once dev
```

Now open the `index.html` file in a chrome browser, open the console, great! you can see our "Hello world!" log.


2- figwheel
-----------

We use [figwheel](https://github.com/bhauman/lein-figwheel) to make our devlopment more funny. Add figwheel plugin to your `project.clj` and `:figwheel true` configuration to your dev compilation configuration:

``` clojure
(defproject cljs-compiler "0.1.0-SNAPSHOT"
  :description "Eval clojurescript to javascript!"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]]
  :plugins [[lein-figwheel "0.5.0-6"]
            [lein-cljsbuild "1.1.2" :exclusions [[org.clojure/clojure]]]]
  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src"]
                :figwheel true
                :compiler {
                  :main cljs-compiler.core
                  :asset-path "js"
                  :output-to "resources/public/js/main.js"
                  :output-dir "resources/public/js"}}]})
```

Launch figwheel from the terminal:

```
lein figwheel
```

or

```
rlwrap lein figwheel
```

Open `http://localhost:3449/` in chrome, open console, there is our "Hello world!" log. Now, update `core.cljs`:

``` clojure
(ns cljs_compiler.core)

(enable-console-print!)

(defn hello [] (println "Hello world!"))
```

And in the terminal, in the figwheel session:

``` clojure
(in-ns 'cljs_compiler.core)
(hello)

;; repl => nil
;; chrome console => "Hello world!"
```


3- compiler functions
----------

Add to dependencies the `cljs.js` namespace.
Learn more about `cljs.js` [here](https://github.com/clojure/clojurescript/blob/master/src/main/cljs/cljs/js.cljs).

``` clojure
(ns cljs_compiler.core
  (:require
    [cljs.js :as cljs]))
```

We need a callback function as util to handle errors compilation.

``` clojure
(defn callback [{:keys [value error]}]
  (let [status (if error :error :ok)
        res (if error
              (.. error -cause -message)
              value)]
    [status res]))
```

The function `_compilation` will receive a clojurescript source as a string.
Return [:error "reason"] in case of error and [:ok "js-code"] in case of success.

``` clojure
(defn _compilation [s]
  (cljs/compile-str 
    (cljs/empty-state) 
    s
    callback))
```

The function `_eval` will receive a clojurescript source as a string and evaluate it.
Return [:error "reason"] in case of error and [:ok "js-code"] in case of success.

``` clojure
(defn _eval [s]
  (cljs/eval-str 
    (cljs/empty-state) 
    s 
    'test 
    {:eval cljs/js-eval} 
    callback))
```

The function `_evaluation-js` return the jsonify `_eval` result.

``` clojure
(defn _evaluation-js [s]
  (let [[status res] (_eval s)]
    [status (.stringify js/JSON res nil 4)]))
```

The function `_evaluation-clj` return the stringify `_eval` result.

``` clojure
(defn _evaluation-clj [s]
  (let [[status res] (_eval s)]
    [status (str res)]))
```

In this step you can test the compilation functions using the repl.

``` clojure
(in-ns 'cljs_compiler.core)
(_compilation "(+ 1 2"))

;; => [:ok "(2 + 2);\n"]
```


4- om.next
----------

[Om.next](https://github.com/omcljs/om/wiki/Quick-Start-(om.next)) is a great client framework based on [React.js](https://facebook.github.io/react/). It wasn't necessary to use it for our small app but it was an opportunity to discover it.

Add om.next dependencies to `project.clj` 

``` clojure
{
  ;; ...
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.omcljs/om "1.0.0-alpha22"]]
  ;; ...
}
```

and to `core.cljs`

``` clojure
(ns cljs_compiler.core
  (:require
    [cljs.js :as cljs]
    [goog.dom :as gdom]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]))
```

You can use an atom to store your local data

``` clojure
(defonce app-state (atom
  {:input ""
   :compilation "" 
   :evaluation-js "" 
   :evaluation-clj ""}))
```

a read function to read your local data

``` clojure
(defn read [{:keys [state]} key params]
  {:value (get @state key "")})
```

a mutation multimethod to mutate your local data

``` clojure
(defmulti mutate om/dispatch)

(defmethod mutate 'input/save [{:keys [state]} _ {:keys [value]}]
  {:action (fn [] 
            (swap! state assoc :input value))})

(defmethod mutate 'cljs/compile [{:keys [state]} _ {:keys [value]}]
  {:action (fn [] 
            (swap! state update :compilation 
              (partial _compilation value)))})

(defmethod mutate 'js/eval [{:keys [state]} _ {:keys [value]}]
  {:action (fn [] 
            (swap! state update :evaluation-js 
              (partial _evaluation-js value)))})

(defmethod mutate 'clj/eval [{:keys [state]} _ {:keys [value]}]
  {:action (fn [] 
            (swap! state update :evaluation-clj 
              (partial _evaluation-clj value)))})
```

a parser to say om.next what is your read/mutate functions

``` clojure
(def parser (om/parser {:read read 
                        :mutate mutate}))
```

a reconciler to merge the result of your mutations to your local data.

``` clojure
(def reconciler 
  (om/reconciler 
    {:state app-state 
     :parser parser}))
```

an om transact function, adding for convenience

``` clojure
(defn process-input [compiler s]
  (om/transact! compiler 
       [(list 'input/save     {:value s})
        (list 'cljs/compile   {:value s})
        (list 'js/eval        {:value s})
        (list 'clj/eval       {:value s})]))
```

and of course test all that using the repl:

``` clojure
(in-ns 'cljs_compiler.core)
(process-input reconciler "(+ 2 2)")
(parser {:state app-state} '[:input 
                             :compilation 
                             :evaluation-js 
                             :evaluation-clj])

;; => {:input "(+ 2 2)", 
;;     :compilation [:ok "(2 + 2);\n"], 
;;     :evaluation-js [:ok "4"], 
;;     :evaluation-clj [:ok "4"]}
```


OK! now you need UI components:
We build an om component that contains 4 textarea, one for input and one for each compile/eval results.

``` clojure
(defui CompilerUI
  
  static om/IQuery
  (query [this] 
    '[:compilation :evaluation-js :evaluation-clj])
  
  Object
  
  (render [this]
    (as->
      (om/props this) $
      (dom/div nil
        (input-ui this)
        (compile-cljs-ui $)
        (evaluate-clj-ui $)
        (evaluate-js-ui $)))))
```

and our 4 textareas

``` clojure
(defn input-ui [reconciler]
  (dom/section nil
    (dom/textarea #js {:autoFocus true
                       :onChange #(process-input 
                                    reconciler
                                    (.. % -target -value))})))

(defn compile-cljs-ui [{:keys [compilation]}]
  (let [[status result] compilation]
    (dom/section nil
                 (dom/textarea #js {:value result
                                    :readOnly true}))))

(defn evaluate-clj-ui [{:keys [evaluation-clj]}]
  (let [[status result] evaluation-clj]
    (dom/section nil
                 (dom/textarea #js {:value result
                                    :readOnly true}))))

(defn evaluate-js-ui [{:keys [evaluation-js]}]
  (let [[status result] evaluation-js]
    (dom/section nil
                 (dom/textarea #js {:value result
                                    :readOnly true}))))
```

Go to [http://localhost:3449/](http://localhost:3449/), you have an awesome clojurescript compiler.

## Deploy to Goolge Storage

Make sure [gsutil](https://cloud.google.com/storage/docs/gsutil_install) is installed.

There is currenlty a bug on clojurescript with self-hosting and compilation :optimizations :whitespace. The issue is fixed in clojurescript github repository version `1.8.33` but not yet deployed. 
One must build cljs from the source.

```bash
lein cljsbuild once dev
```
Test that `dev` build works properly => Open the browser [http://localhost:5014/index-dev.html](http://localhost:5014/index-dev.html)


```bash
gsutil -m rsync -R resources/public gs://app.gadjett.com/cljs_compiler
```
