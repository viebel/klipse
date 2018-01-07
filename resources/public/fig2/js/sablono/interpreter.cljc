(ns sablono.interpreter
  (:require [clojure.string :refer [blank? join]]
            [sablono.normalize :as normalize]
            [sablono.util :as util]
            #?(:cljs [goog.object :as gobject])
            #?(:cljs cljsjs.react)))

(defprotocol IInterpreter
  (interpret [this] "Interpret a Clojure data structure as a React fn call."))

;; A hack to force input elements to always update itself immediately, without
;; waiting for requestAnimationFrame

#?(:cljs
   (defn wrap-form-element [element property coerce]
     (js/React.createClass
       #js
       {:displayName (str "wrapped-" element)
        :getInitialState
        (fn []
          (this-as this
            #js {"state_value" (coerce (aget (.-props this) property))}))
        :onChange
        (fn [e]
          (this-as this
            (let [handler (aget (.-props this) "onChange")]
              (when-not (nil? handler)
                (handler e)
                (.setState this #js {"state_value" (aget (.-target e) property)})))))
        :componentWillReceiveProps
        (fn [new-props]
          (this-as this
            (let [state-value   (aget (.-state this) "state_value")
                  element-value (aget (js/ReactDOM.findDOMNode this) property)]
              ;; on IE, onChange event might come after actual value of an element
              ;; have changed. We detect this and render element as-is, hoping that
              ;; next onChange will eventually come and bring our modifications anyways.
              ;; Ignoring this causes skipped letters in controlled components
              ;; https://github.com/reagent-project/reagent/issues/253
              ;; https://github.com/tonsky/rum/issues/86
              (if (not= state-value element-value)
                (.setState this #js {"state_value" element-value})
                (.setState this #js {"state_value" (coerce (aget new-props property))})))))
        :render
        (fn []
          (this-as this
            ;; NOTE: if switch to macro we remove a closure allocation
            (let [element-props #js {}]
              (gobject/extend
                element-props
                (.-props this)
                #js {:onChange (aget this "onChange")
                     :children (aget (.-props this) "children")})
              (aset element-props property (aget (.-state this) "state_value"))
              (js/React.createElement element element-props))))})))

#?(:cljs (def wrapped-input    (wrap-form-element "input"    "value" str)))
#?(:cljs (def wrapped-checked  (wrap-form-element "input"    "checked" boolean)))
#?(:cljs (def wrapped-select   (wrap-form-element "select"   "value" str)))
#?(:cljs (def wrapped-textarea (wrap-form-element "textarea" "value" str)))

#?(:cljs
    (defn defined? [x]
      (and (not (nil? x))
           (not (undefined? x)))))

#?(:cljs
   (defn create-element [type props & children]
     (let [class (or (when (some? props)
                       (case (name type)
                         "input"
                         (case (.-type props)
                           "radio"    (when (defined? (.-checked props)) wrapped-checked)
                           "checkbox" (when (defined? (.-checked props)) wrapped-checked)
                           #_else     (when (defined? (.-value props)) wrapped-input))
                         "select"     (when (defined? (.-value props)) wrapped-select)
                         "textarea"   (when (defined? (.-value props)) wrapped-textarea)
                         #_else       nil))
                     (name type))
           children (remove nil? children)]
       ;; React does not allow for value/checked to be nil, only js/undefined
       (when (some? props)
         (when (nil? (.-value props))
           (set! (.-value props) js/undefined))
         (when (nil? (.-checked props))
           (set! (.-checked props) js/undefined)))
       (if (empty? children)
         (js/React.createElement class props)
         (apply js/React.createElement class props children)))))

#?(:cljs
   (defn attributes [attrs]
     (let [attrs (clj->js (util/html-to-dom-attrs attrs))
           class (.-className attrs)
           class (if (array? class) (join " " class) class)]
       (if (blank? class)
         (js-delete attrs "className")
         (set! (.-className attrs) class))
       attrs)))

(defn- interpret-seq
  "Interpret the seq `x` as HTML elements."
  [x]
  (into [] (map interpret) x))

#?(:cljs
   (defn element
     "Render an element vector as a HTML element."
     [element]
     (let [[type attrs content] (normalize/element element)]
       (apply create-element type
              (attributes attrs)
              (interpret-seq content)))))

#?(:cljs
   (defn- interpret-vec
     "Interpret the vector `x` as an HTML element or a the children of
  an element."
     [x]
     (if (util/element? x)
       (element x)
       (interpret-seq x))))

#?(:cljs
   (extend-protocol IInterpreter
     Cons
     (interpret [this]
       (interpret-seq this))
     ChunkedSeq
     (interpret [this]
       (interpret-seq this))
     LazySeq
     (interpret [this]
       (interpret-seq this))
     List
     (interpret [this]
       (interpret-seq this))
     IndexedSeq
     (interpret [this]
       (interpret-seq this))
     Subvec
     (interpret [this]
       (interpret-vec this))
     PersistentVector
     (interpret [this]
       (interpret-vec this))
     default
     (interpret [this]
       this)
     nil
     (interpret [this]
       nil)))
