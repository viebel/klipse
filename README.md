# my-cljs-compiler-in-cljs

## Run Locally

```bash
rlwrap lein figwheel
```
or 

```bash
lein figwheel
```
Open the browser [http://localhost:5014](http://localhost:5014)

## Usage
Insert your code in the top left area.
Press Ctrl-Enter to evaluate.

## Deploy to Goolge Storage
```bash
~/bin/gsutil/gsutil -m rsync -R resources/public gs://app.gadjett.com/cljs_compiler
```

## Contribution

- [x] nice design (4 text areas)
- [x] code mirror
- [ ] bigger fonts and logos
- [ ] input field should not be emptied on reload (compilation)
- [ ] display compilation warnings
- [ ] compile into a single `js` file
- [ ] history


## Explanation

First of all you need an app-state and a parser to read the data.

```clj
(defonce app-state (atom
  {:input "a"
   :compilation "b" 
   :evalutation-js "c" 
   :evalutation-clj "d"}))

(defn read [{:keys [state parser query] :as env} key params]
  {:value (get @state key "")})

(def my-parser (om/parser {:read read}))
```

We can test the read function in the repl:

```bash
(in-ns 'my-cljs-compiler-in-cljs.compiler)
(my-parser {:state app-state} '[:input :compilation :evalutation-js :evalutation-clj])
```

`=> {:input "a", :compilation "b", :evalutation-js "c", :evalutation-clj "d"}`

For the moment you will use very simple functions of read and mutate, in addition you need a reconciler to mutate your data.
So now create a simple mutate function:

```clj
(defonce app-state (atom
  {:input "a"
   :compilation "b" 
   :evalutation-js "c" 
   :evalutation-clj "d"}))

(defn read [{:keys [state]} key params]
  {:value (get @state key "")})

(defmulti mutate om/dispatch)

(defmethod mutate 'input/save [{:keys [state]} _ {:keys [value]}]
  {:action (fn [] (swap! state assoc :input value))})

(defmethod mutate 'cljs/compile [{:keys [state]} _ {:keys [value]}]
  {:action (fn [] (swap! state assoc :compilation value))})

(defmethod mutate 'js/eval [{:keys [state]} _ {:keys [value]}]
  {:action (fn [] (swap! state assoc :evalutation-js value))})

(defmethod mutate 'clj/eval [{:keys [state]} _ {:keys [value]}]
  {:action (fn [] (swap! state assoc :evalutation-clj value))})

(def reconciler 
  (om/reconciler 
    {:state app-state 
     :parser (om/parser {:read read 
                         :mutate mutate})}))
```

```bash
(in-ns 'my-cljs-compiler-in-cljs.compiler)
(om/transact! reconciler '[(input/save {:value "Hellooooo input!"})
                           (cljs/compile {:value "Hellooooo compile!"})
                           (js/eval {:value "Hellooooo js!"})
                           (clj/eval {:value "Hellooooo clj!"})])
(my-parser {:state app-state} '[:input :compilation :evalutation-js :evalutation-clj])
```

`=> {:input "Hellooooo input!", :compilation "Hellooooo compile!", :evalutation-js "Hellooooo js!", :evalutation-clj "Hellooooo clj!"}`

OK! now you need a UI component:

```clj
(defn process-input [compiler s]
  (om/transact! compiler 
       [(list 'input/save     {:value s})
        (list 'cljs/compile   {:value s})
        (list 'js/eval        {:value s})
        (list 'clj/eval       {:value s})]))

(process-input reconciler "(str \"Hello World!\")")

(defn input-ui [compiler {:keys [input]}]
  (dom/div nil
    (dom/div nil "Cljs source code")
    (dom/textarea #js {:rows 20 
                       :cols 80
                       :value input
                       :onChange #(process-input compiler (.. % -target -value))})))

(defn compile-cljs-ui [{:keys [compilation]}]
  (dom/div nil
    (dom/div nil "Compilation result CLJS:")
    (dom/div nil compilation)))

(defn evaluate-js-ui [{:keys [evalutation-js]}]
  (dom/div nil
    (dom/div nil "Evaluation JS:")
    (dom/div nil evalutation-js)))

(defn evaluate-clj-ui [{:keys [evalutation-clj]}]
  (dom/div nil
    (dom/div nil "Evaluation CLJ:")
    (dom/div nil evalutation-clj)))

(defui CompilerUI
  
  static om/IQuery
  (query [this] 
    '[:input :compilation :evalutation-js :evalutation-clj])
  
  Object
  (render [this]
    (as->
      (om/props this) $
      (dom/div nil
        (input-ui this $)
        (compile-cljs-ui $)
        (evaluate-js-ui $)
        (evaluate-clj-ui $)))))
```

