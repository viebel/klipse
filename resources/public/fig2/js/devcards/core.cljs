(ns devcards.core
  (:require
   [devcards.system :as dev]

   [devcards.util.markdown :as mark]
   [devcards.util.utils :as utils :refer [html-env?]]

   [sablono.core :as sab :include-macros true]
   [devcards.util.edn-renderer :as edn-rend]

   [clojure.string :as string]
   [cljs.test]
   [cljs.core.async :refer [put! chan timeout <! close! alts!] :as async])
  (:require-macros
   [cljs-react-reload.core :refer [defonce-react-class def-react-class]]
   [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

;; this channel is only used for card registration notifications
(defonce devcard-event-chan (chan))

(def react-element-type-symbol
  "Make a react Symbol the same way as React 0.14"
  (or (and (exists? js/Symbol)
           (fn? js/Symbol)
           (aget js/Symbol "for")
           ((aget js/Symbol "for") "react.element"))
      0xeac7))

;; its possible to record the meta-data for the loaded ns's being
;; shipped by figwheel, by ataching a before load listener and storing
;; the meta data, might be better to have figwheel do that.

(defn register-figwheel-listeners!
  "This event doesn't need to be fired for the system to run. It will just render
   a little faster on reload if it is fired. Figwheel isn't required to run devcards."
  []
  (defonce register-listeners-fig
    (do
      (.addEventListener (.-body js/document)
                         "figwheel.js-reload"
                         #(put! devcard-event-chan [:jsreload (.-detail %)]))
      true)))

(defn assert-options-map [m]
  (if-not (or (nil? m) (map? m))
    {:propagated-errors [{:label :options
                          :message "should be a Map or nil."
                          :value m}]}
    m))

(defn start-devcard-ui!*
  ([] (start-devcard-ui!* {}))
  ([options]
   (when (and (map? options)
              (map? (:default-card-options options)))
     (swap! dev/app-state update-in
            [:base-card-options]
            (fn [opts] (merge opts (:default-card-options options)))))
   (dev/start-ui devcard-event-chan)
   (register-figwheel-listeners!)))

;; Register a new card
;; this is normally called from the defcard macro
;;
;; path - a seq of keywords that describe where this card belongs in
;;        the UI. The first key in the list is typically the namespace.
;; func - is a thunk which contains the functionality of the card.
;;        The thunk has to be executed to get the functionality of
;;        the card.

(defn card? [c]
  (and (map? c)
       (let [{:keys [path func]} c]
         (vector? path)
         (not-empty path)
         (every? keyword? path)
         (fn? func))))

;; could move into macros
(defn register-card [c]
  {:pre [(card? c)]}
  "Register a new card."
  (put! devcard-event-chan [:register-card c]))

(defn- react-raw [raw-html-str]
  "A React component that renders raw html."
  (.div (.-DOM js/React)
        (clj->js { :key (str (hash raw-html-str))
                   :dangerouslySetInnerHTML
                   { :__html
                     raw-html-str }})))

(declare get-props ref->node)

;; syntax highlighting

(defn get-hljs []
  (aget js/goog.global "hljs"))

(defn highlight-node [this]
  (when-let [node (ref->node this "code-ref")]
    (when-let [hljs (get-hljs)]
      (when-let [highlight-block (aget hljs "highlightBlock")]
        (highlight-block node)))))

(defonce-react-class CodeHighlight
  #js {:componentDidMount
       (fn [] (this-as this (highlight-node this)))
       :componentDidUpdate
       (fn [] (this-as this (highlight-node this)))
       :render
       (fn []
         (this-as
          this
          (sab/html
           [:pre {:className (if (get-hljs) "com-rigsomelight-devcards-code-highlighting"  "")
                  :key (hash (get-props this :code))}
            [:code {:className (or (get-props this :lang) "")
                    :ref "code-ref"}
             (get-props this :code)]])))})

(defn code-highlight [code-str lang]
  (js/React.createElement CodeHighlight #js {:code code-str
                                             :lang lang}))

(defmulti markdown-block->react :type)

(defmethod markdown-block->react :default [{:keys [content]}]
  (-> content mark/markdown-to-html react-raw))

(defmethod markdown-block->react :code-block [{:keys [content] :as block}]
  (js/React.createElement CodeHighlight #js {:code (:content block)
                                             :lang (:lang block)}))

(declare react-element?)

(defn markdown->react [& strs]
  (let [strs (map (fn [x] (if (string? x)
                           x
                           (when-not (react-element? x)
                             (str "```clojure\n" (utils/pprint-code x) "```\n")))) strs)]
    (if (every? string? strs)
      (let [blocks (mapcat mark/parse-out-blocks strs)]
        (sab/html
         [:div.com-rigsomelight-devcards-markdown.com-rigsomelight-devcards-typog
          {:key "devcards-markdown-block"}
          (map-indexed
            (fn [i data]
              (sab/html [:div {:key i} (markdown-block->react data)]))
            blocks)]))
      (do
        (let [message "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.
 You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work."]
          (try (.error js/console message))
          (sab/html [:div {:style {:color "#a94442"} :key "devcards-markdown-error"}
                     message]))))))

;; returns a react component of rendered edn

(defn- naked-card [children card]
  (let [classname (get-in card [:options :classname])
        padding?  (get-in card [:options :padding])]
    (sab/html
      [:div
       {:key "devcards_naked-card"
        :className
        (cond-> devcards.system/devcards-rendered-card-class
          padding? (str " com-rigsomelight-devcards-devcard-padding")
          (not-empty classname) (str " " classname))}
       children])))

(defn- frame
  ([children]
   (frame children {}))
  ([children card]
   (let [{:keys [path options]} card]
    (if-not (:hidden options)
      (if (false? (:heading options))
        (sab/html
         [:div
          {:key (prn-str path)
           :class (str "com-rigsomelight-devcards-card-base-no-pad "
                       (when (:hide-border options)
                         " com-rigsomelight-devcards-card-hide-border"))}
          (naked-card children card)])
        (sab/html
         [:div.com-rigsomelight-devcards-base.com-rigsomelight-devcards-card-base-no-pad {:key (prn-str path)}
          [:div.com-rigsomelight-devcards-panel-heading.com-rigsomelight-devcards-typog
           {:key "devcards_frame-normal-body"}
           (if path
             (sab/html
              [:a
               {:href "#"
                :onClick
                (devcards.system/prevent->
                 #(devcards.system/set-current-path!
                   devcards.system/app-state
                   path))}
               (name (last path))  " "])
             (sab/html [:span (:name card)]))]
          (naked-card children card)]))
      (sab/html [:span])))))

(defprotocol IDevcardOptions
  (-devcard-options [this devcard-opts]))

(defprotocol IDevcard
  (-devcard [this devcard-opts]))

(declare hist-recorder*)

;; react helpers
;; these are needed for advanced compilation

(defn ref->node [this ref]
  (when-let [comp (aget (.. this -refs) ref)]
    (js/ReactDOM.findDOMNode comp)))

(defn get-props [this k]
  (aget (.-props this) (name k)))

(defn get-state [this k]
  (when (.-state this)
    (aget (.-state this) (name k))))

;; this is not currently being used
(defonce-react-class DontUpdate
  #js {:shouldComponentUpdate
       (fn [next-props b]
         (this-as this
                  (let [update? (= (aget next-props "change_count")
                                   (get-props this :change_count))]
                    #_(if update?
                        (prn "Updating ")
                        (prn "Not updating"))
                    update?)))
       :render
       (fn []
         (this-as
          this
          (sab/html [:div.com-rigsomelight-dont-update (get-props this :children_thunk)])))})

;; this is not currently being used
(defn dont-update [change-count children-thunk]
  (js/React.createElement DontUpdate
                          #js { :change_count change-count
                                :children_thunk children-thunk}))

(defn wrangle-inital-data [this]
  (let [data (or (:initial-data (get-props this :card)) {})]
    (if (satisfies? IAtom data)
      data
      (atom data))))

(def get-data-atom
  (if (html-env?)
    (fn [this] (get-state this :data_atom))
    (fn [this] (wrangle-inital-data this))))

(declare atom-like?)

(defn default-derive-main [parent-elem card data-atom change-count]
  (let [options  (:options card)
        main-obj' (let [m (:main-obj card)]
                    (if (fn? m) (m data-atom parent-elem) m))
        main-obj (if (and (not (nil? main-obj'))
                          (not (react-element? main-obj')))
                   (code-highlight (utils/pprint-code main-obj') "clojure")
                   main-obj')] 
    (if (false? (:watch-atom options))
      ;; only rerenders when render _isn't_
      ;; driven by state change
      (dont-update change-count main-obj)
      main-obj)))

(defn render-all-card-elements [main data-atom card]
  (let [options   (:options card)
        hist-ctl  (when (:history options)
                    (hist-recorder* data-atom))
        document  (when-let [docu (:documentation card)]
                    (markdown->react docu))
        edn       (when (:inspect-data options)
                    (edn-rend/html-edn @data-atom))
        ;; only documentation?
        card      (if (or (string? main)
                          (nil? main))
                    (assoc-in card [:options :hide-border] true)
                    card)
        main      (sab/html [:div {:key "devcards-main-section"} main])
        children  (keep identity (list document main hist-ctl edn))]
    (if (:frame options)
      (frame children card) ;; make component and forward options
      (sab/html [:div.com-rigsomelight-devcards-frameless {} children]))))

(defonce-react-class DevcardBase
  #js {:getInitialState
       (fn []
         #js {:unique_id (gensym 'devcards-base-)
              :state_change_count 0})
       :componentDidUpdate
       (fn [_ _]
         (this-as
           this
           (let [atom    (get-state this :data_atom)
                 card    (get-props this :card)
                 options (:options card)]
             (when (:static-state options)
               (let [initial-data (:initial-data card)
                     data         (if (atom-like? initial-data) @initial-data initial-data)]
                 (if (not= @atom data)
                   (reset! atom data)))))))
       :componentWillMount
       (if (html-env?)
         (fn []
           (this-as
            this
            (.setState
             this
             (or (and (get-state this :data_atom)
                      (.. this -state))
                 #js {:data_atom
                      (wrangle-inital-data this)}))))
         (fn []))
       :componentWillUnmount
        (fn []
          (this-as
           this
           (let [data_atom (get-state this :data_atom)
                 id        (get-state this :unique_id)]
             (when (and data_atom id)
               (remove-watch data_atom id)))))
       :componentDidMount
       (if (html-env?)
         (fn []
           (this-as
            this
            (when-let [data_atom (get-state this :data_atom)]
              (when-let [id (get-state this :unique_id)]
                (add-watch data_atom id
                           (fn [_ _ _ _]
                             (.setState this #js {:state_change_count
                                                  (inc (get-state this :state_change_count))})))))))
         (fn []))
        :render
        (fn []
          (this-as this
            (let [data-atom    (get-data-atom this)
                  card         (get-props this :card)
                  change-count (get-state this :state_change_count)
                  main         (default-derive-main this card data-atom change-count)]
              (render-all-card-elements main data-atom card))))})

;; this is going to capture and  handle the raw options

(def render-into-dom
  (if (html-env?)
    (fn [this]
      (when-let [node-fn (get-props this :node_fn)]
        (when-let [node (ref->node this (get-state this :unique_id))]
          (node-fn (get-props this :data_atom) node))))
    identity))

(defonce-react-class DomComponent
  #js {:getInitialState
       (fn [] #js {:unique_id (str (gensym 'devcards-dom-component-))})
       :componentDidUpdate
       (fn [prevP, prevS]
         (this-as
          this
          (when (and (get-props this :node_fn)
                     (not= (get-props this :node_fn)
                           (aget prevP "node_fn")))
            (render-into-dom this))))
       :componentWillUnmount
       (fn []
         (this-as
          this
          (when-let [node (ref->node this (get-state this :unique_id))]
            (js/ReactDOM.unmountComponentAtNode node))))
       :componentDidMount
       (fn [] (this-as this (render-into-dom this)))
       :render
       (if (html-env?)
         (fn []
           (this-as
            this
            (js/React.DOM.div
             #js { :className "com-rigsomelight-devcards-dom-node" :ref (get-state this :unique_id)}
             "Card has not mounted DOM node.")))
         (fn [] (js/React.DOM.div "Card has not mounted DOM node.")))})

(defn booler? [key opts]
  (let [x (get opts key)]
    (or (true? x) (false? x) (nil? x)
     {:label key
      :message "should be boolean or nil"
      :value x})))

(defn stringer? [key opts]
  (let [x (get opts key)]
    (or (string? x) (nil? x)
        {:label   key
         :message "should be string or nil"
         :value x})))

(defn react-element? [main-obj]
  (or (aget main-obj "_isReactElement") ;; react 0.13
      (= react-element-type-symbol      ;; react 0.14
         (aget main-obj "$$typeof"))))

(defn validate-card-options [opts]
  (if (map? opts)
    (let [propagated-errors (get-in opts [:options :propagated-errors])]
      (filter #(not (true? %))
              (let [{:keys [name
                            main-obj
                            initial-data
                            options]} opts]
                (concat
                 propagated-errors
                 [(or (map? options)
                      (nil? options)
                      {:label   :options
                       :message "should be a Map or nil"
                       :value options})
                  (stringer? :name opts)
                  (stringer? :documentation opts)
                  #_(or (nil? main-obj) (fn? main-obj) (react-element? main-obj)
                        {:label   :main-obj
                         :message "should be a function or a ReactElement or nil."
                         :value main-obj})
                  (or (nil? initial-data)
                      (vector? initial-data)
                      (map? initial-data)
                      (satisfies? IAtom initial-data)
                      {:label :initial-data
                       :message "should be an Atom or a Map or nil."
                       :value initial-data})]
                 (mapv #(booler? % (:options opts)) [:frame :heading :padding :inspect-data :watch-atom :history :static-state])))))
    [{:message "Card should be a Map."
      :value   opts}]))

(comment
  (prn (validate-card-options {:name "hi"
                             :documentation "hey"
                             :react-or-fn (fn [] 1)
                             :initial-data {}
                             :frame true
                             :heading false
                             :padding false
                             :inspect-data true
                             :static-state false
                             :watch-atom nil
                             :history nil})))

(defn error-line [e]
  (sab/html [:div {:style {:color "#a94442" :display "flex" :margin "0.5em 0px"}}
             (sab/html
              [:code {:style { :flex "1 100px" :margin-right "10px"}}
               (when (:label e) (pr-str (:label e)))])
             [:span
              {:style { :flex "3 100px" :margin-right "10px"}}
              (:message e)]
             [:span
              {:style { :flex "1 100px" }}
              " Received: " [:code (pr-str (:value e))]]]))

(defn render-errors [opts errors]
  (sab/html
   [:div.com-rigsomelight-devcards-card-base-no-pad
    [:div.com-rigsomelight-devcards-panel-heading.com-rigsomelight-devcards-fail
     (str (when (and (map? opts) (string? (:name opts)))
            (str (:name opts) ": ")) "Devcard received bad options")]
    (naked-card
     (sab/html
      [:div
       [:div
        (map error-line errors)]
       (when (map? opts)
         (sab/html
          [:div.com-rigsomelight-devcards-padding-top-border
           (edn-rend/html-edn (update-in opts [:options] dissoc :propagated-errors))]))])
     {:options {:padding true}})]))

(defn add-environment-defaults [card-options]
  (update-in card-options [:options]
             #(merge (:base-card-options @devcards.system/app-state) %)))

(defn card-with-errors [card-options]
  (let [errors (validate-card-options card-options)]
    (if (not-empty errors)
      (render-errors card-options errors)
      (js/React.createElement DevcardBase #js { :card (add-environment-defaults card-options) }))))

(defrecord IdentiyOptions [obj]
  IDevcardOptions
  (-devcard-options [this opts] opts))

(defn atom-like-options [main-obj {:keys [options] :as devcard-opts}]
  (assoc devcard-opts
         :main-obj (fn [data-atom _] (edn-rend/html-edn @data-atom))
         :initial-data main-obj
         :options (merge { :history true }
                         (assert-options-map options))))

(defrecord AtomLikeOptions [obj]
  IDevcardOptions
  (-devcard-options [this opts] (atom-like-options obj opts)))

(defn edn-like-options [main-obj devcard-opts]
  (assoc devcard-opts :main-obj
         (edn-rend/html-edn (if (satisfies? IDeref main-obj)
                              (deref main-obj)
                              main-obj))))

(defrecord EdnLikeOptions [obj]
  IDevcardOptions
  (-devcard-options [this devcard-opts]
    (edn-like-options obj devcard-opts)))

(defn atom-like? [x] (and (satisfies? IWatchable x) (satisfies? IDeref x)))

(defn edn-like? [x] (satisfies? IDeref x))

(defn coerce-to-devcards-options [main-obj]
  (if (satisfies? IDevcardOptions main-obj)
    main-obj
    (cond
      (atom-like? main-obj) (AtomLikeOptions. main-obj)
      (edn-like?  main-obj) (EdnLikeOptions.  main-obj)
      :else (IdentiyOptions. main-obj))))

(defn card-base [opts]
  (let [opts (assoc opts :path (:path devcards.system/*devcard-data*))]
    (if (satisfies? IDevcard (:main-obj opts))
      (-devcard (:main-obj opts) opts)
      (card-with-errors
       (-devcard-options (coerce-to-devcards-options (:main-obj opts))
                           opts)))))

;; keep
(defn- dom-node* [node-fn]
  (fn [data-atom owner]
     (js/React.createElement DomComponent
                             #js {:node_fn   node-fn
                                  :data_atom data-atom})))

;; devcard protocol that takes a devcard and returns a devcard

(extend-type string
  IDevcardOptions
  (-devcard-options [this devcard-opts]
    (update-in devcard-opts [:main-obj] markdown->react)))

(extend-type PersistentArrayMap
  IDevcardOptions
  (-devcard-options [this devcard-opts]
    (edn-like-options this devcard-opts)))

(extend-type PersistentVector
  IDevcardOptions
  (-devcard-options [this devcard-opts]
    (edn-like-options this devcard-opts)))

(extend-type PersistentHashSet
  IDevcardOptions
  (-devcard-options [this devcard-opts]
    (edn-like-options this devcard-opts)))

(extend-type List
  IDevcardOptions
  (-devcard-options [this devcard-opts]
    (edn-like-options this devcard-opts)))

(extend-type LazySeq
  IDevcardOptions
  (-devcard-options [this devcard-opts]
    (edn-like-options this devcard-opts)))

(extend-type Cons
  IDevcardOptions
  (-devcard-options [this devcard-opts]
    (edn-like-options this devcard-opts)))

(extend-type EmptyList
  IDevcardOptions
  (-devcard-options [this devcard-opts]
    (edn-like-options this devcard-opts)))

(extend-type Atom
  IDevcardOptions
  (-devcard-options [this devcard-opts]
    (atom-like-options this devcard-opts)
    #_(assoc devcard-opts
             :main-obj (fn [data-atom _] (edn-rend/html-edn @data-atom))
             :initial-data main-obj
             :options (merge { :history true }
                             (assert-options-map options)))))

;; history recorder

(comment
  would be nice to have a drop down of history diffs)

;; really need to have this take a protocol

;; managed history
;; we should be able to abstract a system with a list of



(defn can-go-back [this]
  (let [{:keys [history pointer]} @(get-state this :history_atom)]
    (< (inc pointer) (count history))))

(defn can-go-forward [this]
  (> (:pointer @(get-state this :history_atom)) 0))

(defn in-time-machine? [this]
  (not (zero? (:pointer @(get-state this :history_atom)))))

(defn back-in-history! [this]
  (let [history-atom   (get-state this :history_atom)
        {:keys [history pointer]} @history-atom]
    (when (can-go-back this)
      (swap! history-atom assoc
             :pointer (inc pointer)
             :ignore-click true)
      (reset! (get-props this :data_atom)
              (nth history (inc pointer)))
      (.forceUpdate this))))

(defn forward-in-history! [this]
  (let [history-atom (get-state this :history_atom)
        {:keys [history pointer]} @history-atom]
    (when (can-go-forward this)
      (swap! history-atom assoc
             :pointer (dec pointer)
             :ignore-click true)
      (reset! (get-props this :data_atom)
              (nth history (dec pointer)))
      (.forceUpdate this))))

(defn continue-on! [this]
  (let [history-atom (get-state this :history_atom)
        {:keys [history]} @history-atom]
    (when (can-go-forward this)
      (swap! history-atom assoc :pointer 0 :ignore-click true)
      (reset! (get-props this :data_atom)
              (first history))
      (.forceUpdate this))))

;; keep
(def-react-class HistoryComponent
  #js {:getInitialState
       (fn [] #js {:unique_id    (str (gensym 'devcards-history-runner-))
                  :history_atom (atom {:history (list) :pointer 0})})
       :componentWillMount
       (fn []
         (this-as this
                  (swap! (get-state this :history_atom)
                         assoc-in [:history] (list @(get-props this :data_atom)))))
       :componentDidMount
       (fn []
         (this-as
          this
          (let [data_atom (get-props this :data_atom)
                id        (get-state this :unique_id)
                history-atom   (get-state this :history_atom)]
            (when (and data_atom id)
              (add-watch data_atom id
                         (fn [_ _ _ n]
                           (if (in-time-machine? this)
                             (do
                               (swap! history-atom
                                      (fn [{:keys [pointer history ignore-click] :as ha}]
                                        (if ignore-click
                                          (assoc ha :ignore-click false)
                                          (assoc ha
                                                 :history
                                                 (let [abridged-hist (drop pointer history)]
                                                   (if (not= n (first abridged-hist))
                                                     (cons n abridged-hist)
                                                     abridged-hist))
                                                 :pointer 0)))))
                             (swap! history-atom assoc
                                    :history (let [hist (:history @history-atom)]
                                               (if (not= n (first hist))
                                                 (cons n hist)
                                                 hist))
                                    :ignore-click false))))))))

       :render
       (fn []
         (this-as
          this
          (when (or (can-go-back this)
                    (can-go-forward this))
            (sab/html
               [:div.com-rigsomelight-devcards-history-control-bar
                {:style { :display (if (or (can-go-back this)
                                           (can-go-forward this))
                                     "block" "none")}}
                (let [action (fn [e]
                               (.preventDefault e)
                               (back-in-history! this))]
                  (sab/html
                   [:button
                    {:style { :visibility (if (can-go-back this) "visible" "hidden")}
                     :href "#"
                     :onClick action
                     :onTouchEnd action}
                    [:span.com-rigsomelight-devcards-history-control-left ""]]))
                (let [action (fn [e]
                               (.preventDefault e)
                               ;; touch the data atom
                               (let [data-atom (get-props this :data_atom)]
                                 (reset! data-atom @data-atom))
                               )]
                  (sab/html
                   [:button
                    {:style { :visibility (if (can-go-forward this) "visible" "hidden")}
                     :onClick action
                     :onTouchEnd action}
                    [:span.com-rigsomelight-devcards-history-stop ""]]))
                (let [action (fn [e]
                                (.preventDefault e)
                                (forward-in-history! this))]
                  (sab/html
                   [:button
                    {:style { :visibility (if (can-go-forward this) "visible" "hidden")}
                     :onClick action
                     :onTouchEnd action}
                    [:span.com-rigsomelight-devcards-history-control-right ""]]))
                (let [listener (fn [e]
                                (.preventDefault e)
                                (continue-on! this))]
                  (sab/html
                   [:button
                    {:style { :visibility (if (can-go-forward this) "visible" "hidden")}
                     :onClick listener
                     :onTouchEnd listener}
                    [:span.com-rigsomelight-devcards-history-control-small-arrow]
                    [:span.com-rigsomelight-devcards-history-control-small-arrow]
                    [:span.com-rigsomelight-devcards-history-control-block]
                    ]))
                #_(edn->html @(.. this -state -history_atom))]
               ))))})

;; keep
(defn- hist-recorder* [data-atom]
  (js/React.createElement HistoryComponent
                         #js { :data_atom data-atom :key "devcards-history-control-bar"}))

;; Testing via cljs.test
(comment
  mapping to source-maps
  make event open test in editor)

(defn- collect-test [m]
  (cljs.test/update-current-env!
   [:_devcards_collect_tests] conj
   (merge (select-keys (cljs.test/get-current-env) [:testing-contexts]) m)))

(defmethod cljs.test/report [:_devcards_test_card_reporter :pass] [m]
  (cljs.test/inc-report-counter! :pass)
  (collect-test m)
  m)

(defmethod cljs.test/report [:_devcards_test_card_reporter :fail] [m]
  (cljs.test/inc-report-counter! :fail)
  (collect-test m)
  m)

(defmethod cljs.test/report [:_devcards_test_card_reporter :error] [m]
  (cljs.test/inc-report-counter! :error)
  (collect-test m)
  m)

(defmethod cljs.test/report [:_devcards_test_card_reporter :test-doc] [m]
  (collect-test m)
  m)

(defn- run-test-block [f]
  (cljs.core/binding [cljs.test/*current-env* (assoc (cljs.test/empty-env)
                                                     :reporter :_devcards_test_card_reporter)]
    (f)
    (cljs.test/get-current-env)))

(defmulti test-render :type)

(defmethod test-render :default [m]
  (sab/html [:div (prn-str m)]))

(defn- display-message [{:keys [message]} body]
  (if message
    (sab/html [:div
               [:span.com-rigsomelight-devcards-test-message
                message]
               body])
      body))

(defn render-pass-fail [{:keys [expected actual type] :as m}]
  (display-message
   m
   (sab/html
    [:div
     (js/React.createElement CodeHighlight #js {:code (utils/pprint-code expected)
                                                :lang "clojure"})
     (when (= type :fail)
       (sab/html [:div {:style {:marginTop "5px"}}
                  [:div {:style {:position "absolute" :fontSize "0.9em"}} "▶"]
                  [:div {:style {:marginLeft "20px"}}
                   (js/React.createElement CodeHighlight #js {:code (utils/pprint-code actual)
                                                              :lang "clojure"})]]))])))

(defmethod test-render :pass [m]
  (render-pass-fail m))

(defmethod test-render :fail [m]
  (render-pass-fail m))

(defmethod test-render :error [m]
  (display-message m (sab/html  [:div [:strong "Error: "]
                                 [:code (str (:actual m))]])))

(defmethod test-render :test-doc [m]
  (sab/html [:div (markdown->react (:documentation m))]))

(defmethod test-render :context [{:keys [testing-contexts]}]
  (sab/html [:div
             (interpose " / "
                        (concat (map-indexed
                                  (fn [i t] [:span {:key i :style {:color "#bbb"}} t " "])
                                     (reverse (rest testing-contexts)))
                                (list [:span {:key -1}(first testing-contexts)])))]))

(defn- test-doc [s]
  (cljs.test/report {:type :test-doc :documentation s}))

(defn- test-renderer [t i]
  [:div
   {:key (pr-str t i) ; prevent react duplicate key errors when a testing block contains the same "is" form.
    :className (str "com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"
                    (name (:type t)))}
   (test-render t)])

(defn- layout-tests [tests]
  (sab/html
   [:div.com-rigsomelight-devcards-test-card
    (:html-list
     (reduce
      (fn [{:keys [last-context html-list]} [i t]]
        { :last-context (:testing-contexts t)
         :html-list
         (let [res (list (test-renderer t i))
               res (if (= last-context
                          (:testing-contexts t))
                     res
                     (if (not-empty (:testing-contexts t))
                       (cons (test-renderer (merge {:type :context}
                                                   (select-keys t [:testing-contexts])) i)
                             res)
                       res))]
           (concat html-list res))})
      {}
      (map-indexed vector (reverse tests))))]))

(defn render-tests [this path test-summary]

  (let [error? (:error test-summary)
        tests (:_devcards_collect_tests test-summary)
        some-tests (filter (fn [{:keys [type]}] (not= type :test-doc))
                      (:_devcards_collect_tests test-summary))
        total-tests (count some-tests)
        {:keys [fail pass error]} (:report-counters test-summary)
        error (if error? (inc error) error)]
    (sab/html
       [:div.com-rigsomelight-devcards-base.com-rigsomelight-devcards-card-base-no-pad.com-rigsomelight-devcards-typog
        [:div.com-rigsomelight-devcards-panel-heading
         [:a
          { :href "#"
            :onClick
            (dev/prevent->
             #(devcards.system/set-current-path!
               devcards.system/app-state
                path))}
          (when path (str (name (last path))) )]
         [:button.com-rigsomelight-devcards-badge
          {:style {:float "right"
                   :margin "3px 3px"}
           :onClick (dev/prevent->
                     (fn [] (.setState this #js {:filter identity})))}
          total-tests]
         (when-not (zero? (+ fail error))
           (sab/html
            [:button.com-rigsomelight-devcards-badge
             {:style {:float "right"
                      :backgroundColor "#F7918E"
                      :color "#fff"
                      :margin "3px 3px"}
              :onClick (dev/prevent->
                        (fn []
                          (.setState this
                                     #js {:filter (fn [{:keys [type]}]
                                                    (#{:fail :error} type))})))}
             (str (+ fail error))]))
         (when-not (or (nil? pass) (zero? pass))
           (sab/html
            [:button.com-rigsomelight-devcards-badge
             {:style {:float "right"
                      :backgroundColor "#92C648"
                      :color "#fff"
                      :margin "3px 3px"}
              :onClick (dev/prevent->
                        (fn []
                          (.setState this #js {:filter (fn [{:keys [type]}] (= type :pass))}))) }
             pass]))]
        [:div {:className devcards.system/devcards-rendered-card-class}
         (layout-tests (filter (or (get-state this :filter)
                                    identity)
                                tests))]])))

;; running tests synchronously

;; you can adjust testing timeouts by setting this variable
(def test-timeout 800)

(defonce test-channel (chan))

(defn run-card-tests [test-thunks]
  (let [out (chan)
        test-env (assoc (cljs.test/empty-env)
                        :reporter :_devcards_test_card_reporter)]
    (cljs.test/set-env! test-env)
    (let [tests (concat test-thunks
                        [(fn []
                           (put! out (cljs.test/get-current-env))
                           (close! out))])]
      (prn "Running tests!!")
      (cljs.test/run-block tests)
      out)))

(defonce test-loop
  (go
    (loop [{:keys [tests callback]} (<! test-channel)]
      (when tests
        (let [timer (timeout test-timeout)
              [result ch] (alts! [(run-card-tests tests) timer])]
          (if (not= ch timer)
            (callback result)
            (do
              (collect-test {:type :error :actual "Tests timed out. Please check Dev Console for Exceptions" })
              (callback (assoc (cljs.test/get-current-env)
                               :error "Execution timed out!"))))
          (cljs.test/clear-env!)
          (recur (<! test-channel)))))))


(defn test-card-test-run [this tests]
  (put! test-channel {:tests tests
                      :callback (fn [results] (.setState
                                              this
                                              #js {:test_results
                                                   results}))}))

(defonce-react-class TestDevcard
  #js
  {:componentWillMount
   (fn []
     (this-as
      this
      (when-let [test-thunks (get-props this :test_thunks)]
        (test-card-test-run this test-thunks))))
   :componentWillReceiveProps
   (fn [next-props]
     (this-as this
              (when-let [test-thunks (aget next-props (name :test_thunks))]
                (test-card-test-run this test-thunks))))
   :render (fn []
             (this-as
              this
              (let [test-summary (get-state this :test_results)
                    path         (get-props this :path)]
                (render-tests this path test-summary))))})

(defn test-card [& test-thunks]
  (reify
    IDevcard
    (-devcard [this devcard-opts]
      (let [path (:path devcards.system/*devcard-data*)]
        (js/React.createElement TestDevcard
                                #js {:test_thunks test-thunks
                                     :path path})))))

;; render namespace to string

(comment
  make a helper macro that returns all rendered posts plus front-matter

  )


(defn get-front-matter [munged-namespace]
  (reduce aget js/goog.global
          (concat (string/split (name munged-namespace) ".") ["front_matter"])))

(defn get-cards-for-ns [ns-symbol]
  (when-let [cards (:cards @dev/app-state)]
    (when-let [card (get-in cards [(keyword ns-symbol)])]
      card)))

(defn ^:export load-data-from-channel! []
  (devcards.system/load-data-from-channel! devcards.core/devcard-event-chan))

(defn ^:export merge-front-matter-options! [ns-symbol]
  (when-let [base-card-options (:base-card-options (get-front-matter (name ns-symbol)))]
    (println "Adding base card options!" (prn-str  base-card-options))
    (swap! dev/app-state update-in [:base-card-options] (fn [opts] (merge opts base-card-options)))))

(defn ^:export render-namespace-to-string [ns-symbol]
  (when-let [card (get-cards-for-ns ns-symbol)]
    (merge-front-matter-options! ns-symbol)
    (str
     "<div id=\"com-rigsomelight-devcards-main\">"
     (js/React.renderToString
      (sab/html
       [:div.com-rigsomelight-devcards-base.com-rigsomelight-devcards-string-render
        (dev/render-cards (dev/display-cards card) dev/app-state)]))
     "</div>")))

(defn render-ns [ns-symbol app-state]
  (when-let [card (get-cards-for-ns ns-symbol)]
    (js/React.render
     (sab/html
      [:div.com-rigsomelight-devcards-base.com-rigsomelight-devcards-string-render
       (dev/render-cards (dev/display-cards card) app-state)])
     (dev/devcards-app-node))))

(defn ^:export mount-namespace [ns-symbol]
  (merge-front-matter-options! ns-symbol)
  (go (<! (load-data-from-channel!))
      (<! (timeout 100))
      (js/setTimeout #(render-ns ns-symbol dev/app-state) 0)))

(defn ^:export mount-namespace-live [ns-symbol]
  (merge-front-matter-options! ns-symbol)
  (dev/start-ui-with-renderer devcards.core/devcard-event-chan (partial render-ns ns-symbol)))

#_(devcards.core/defcard render-namespace-to-string
  "# Support rendering a namespace to a string

   This is to support writing blog posts and publishing static pages.

   ```
   (render-namespace-to-string 'devdemos.core)
   ```
   This is pretty darn cool.
   "
  (render-namespace-to-string 'devdemos.core))
