(ns devcards.system
  (:require
   [clojure.string :as string]
   [cljs.core.async :refer [put! <! chan timeout]]
   [sablono.core :as sab]
   [devcards.util.edn-renderer :as edn-rend]
   [goog.events :as events]
   [goog.history.EventType :as EventType]
   [goog.labs.userAgent.device :as device]
   [devcards.util.utils :as utils]
   [cljsjs.react]
   [cljsjs.react.dom])
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]]
   [devcards.system :refer [inline-resouce-file]]
   [cljs-react-reload.core :refer [defonce-react-class]])
  (:import
   [goog History]))

(defn l [x]
  (.log js/console x)
  x)

(def devcards-app-element-id "com-rigsomelight-devcards-main")

(def devcards-rendered-card-class "com-rigsomelight-devcards_rendered-card")

(defn prevent-> [f] (fn [e] (.preventDefault e) (f e)))

(defn get-element-by-id [id] (.getElementById js/document id))

(defn devcards-app-node [] (get-element-by-id devcards-app-element-id))

(defn path->unique-card-id [path]
  (string/join "." (map (fn [x] (str "[" x "]"))
                        (map name (cons :cardpath path)))))

#_(defn unique-card-id->path [card-id]
  (mapv keyword
       (-> (subs card-id 1
                 (dec (count card-id)))
           (string/split #"\].\[")
           rest)))

(defn create-element* [tag id style-text]
  (let [el (js/document.createElement tag)]
    (set! (.-id el) id)
    (.appendChild el (js/document.createTextNode style-text))
    el))

(def create-style-element (partial create-element* "style"))
(def create-script-element (partial create-element* "script"))

(defn prepend-child [node node2]
  (if-let [first-child (.-firstChild node)]
    (.insertBefore node node2 first-child)
    (.appendChild node node2)))

(defn add-css-if-necessary! []
  (if-let [heads (.getElementsByTagName js/document "head")]
    (let [head (aget heads 0)]
      (when-not (get-element-by-id "com-rigsomelight-code-highlight-css")
        (.appendChild head
                      (create-style-element "com-rigsomelight-code-highlight-css"
                                            (inline-resouce-file "public/devcards/css/com_rigsomelight_github_highlight.css"))))


      (when-not (get-element-by-id "com-rigsomelight-devcards-css")
        (.appendChild head (create-style-element "com-rigsomelight-devcards-css"
                                                 (inline-resouce-file "public/devcards/css/com_rigsomelight_devcards.css"))))
      (when-not (get-element-by-id "com-rigsomelight-devcards-addons-css")
        (.appendChild head (create-style-element "com-rigsomelight-devcards-addons-css"
                                                 (inline-resouce-file "public/devcards/css/com_rigsomelight_devcards_addons.css"))))
      (when-not (get-element-by-id "com-rigsomelight-edn-css")
        (.appendChild head
                      (create-style-element "com-rigsomelight-edn-css"
                                            (inline-resouce-file "public/devcards/css/com_rigsomelight_edn_flex.css"))))

      ;; we are injecting conditionally so that we can skip mobile
      ;; and skip node
      ;; really not diggin this but ...
      (when-not (or (get-element-by-id "com-rigsomelight-code-highlighting")
                    (device/isMobile))
        (.appendChild head
                      (create-script-element "com-rigsomelight-code-highlighting"
                                             (inline-resouce-file "public/devcards/js/highlight.pack.js")))))))

(defn render-base-if-necessary! []
  (add-css-if-necessary!)
  (when-not (devcards-app-node)
    (let [el (js/document.createElement "div")]
      (set! (.-id el) devcards-app-element-id)
      (prepend-child (.-body js/document) el))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Hashbang routing

(declare set-current-path history)

(defonce history
  (when (utils/html-env?)
    (let [h (History.)]
      (.setEnabled h true)
      h)))

(defn path->token [path]
  (str "!/" (string/join "/" (map name path))))

(defn token->path [token]
  (vec (map keyword
            (-> token
              (string/replace-first #"#" "")
              (string/replace-first #"!/" "")
              (string/split #"/")))))

#_(prn (token->path (.getToken history)))

#_(prn (token->path (aget js/location "hash")))

(defn hash-navigate [path]
  (.setToken history (path->token path)))

(defn hash-routing-init [state-atom]
  (events/listen history EventType/NAVIGATE
                 #(swap! state-atom set-current-path (token->path (.-token %))))
  ;; we should probably just get the location and parse this out to
  ;; avoid the initial race condition where .getToken isn't populated
  (when-let [token (aget js/location "hash")]
    (swap! state-atom set-current-path (token->path token))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn devcard? [d]
  (and (map? d)
       #_(:data-atom d)
       (:func d)
       (:path d)
       (:position d)
       d))

(defn path-collision [state path]
  (if-let [c (get (:path-collision-count state) path)]
    (vec (concat (butlast (vec path))
                 [(keyword (str (name (last path)) "-" c))]))
    path))

(defn register-collision [state path]
  (update-in state [:path-collision-count path] inc))

(defmulti dev-trans first)

(defmethod dev-trans :default [msg state] state)

(defmethod dev-trans :register-card [[_ {:keys [path options func]}] state]
  (let [position (:position state)
        new-path (path-collision state path)]
    (-> state
        (update-in [:position] inc)
        (update-in (cons :cards new-path)
                   (fn [dc]
                     { :path new-path
                       :func func
                       :position position }))
        (register-collision path))))

(def devcard-initial-data { :current-path []
                            :position 0
                            :cards {}
                            :path-collision-count {}
                            :base-card-options { :frame true
                                                 :heading true
                                                 :padding true
                                                 :hidden false
                                                 :inspect-data false
                                                 :watch-atom true
                                                 :history false } })

(defonce app-state (atom devcard-initial-data))

(defn valid-path? [state path]
  (or (= [] path)
      (get-in (:cards state) path)))

(defn enforce-valid-path [state path]
  (vec (if (valid-path? state path) path [])))

(defn add-to-current-path [{:keys [current-path] :as state} path]
  (assoc state
         :current-path
         (enforce-valid-path state (conj current-path (keyword path)))))

(defn set-current-path [{:keys [current-path] :as state} path]
  (let [path (vec (map keyword path))]
    (if (not= current-path path)
      (-> state
        (assoc :current-path (enforce-valid-path state path))
        #_add-navigate-effect)
      state)))

(defn set-current-path! [state-atom path]
  (swap! state-atom set-current-path path)
  (hash-navigate path))

(defn current-page [data]
  (and (:current-path data)
       (:cards data)
       (get-in (:cards data) (:current-path data))))

(defn display-single-card? [state]
  (devcard? (current-page state)))

(defn display-dir-paths [state]
  (let [cur (current-page state)]
    (filter (complement (comp devcard? second)) cur)))

(defn display-cards [cur]
  (filter (comp #(and (not (:delete-card %))
                      (devcard? %)) second) cur))

(def ^:dynamic *devcard-data* nil)

(defn card-template [state-atom {:keys [path options func] :as card}]
  (sab/html
   [:div.com-rigsomelight-devcard {:key (path->unique-card-id path)}
    (cljs.core/binding [*devcard-data* card]
      (func))]))

(defn render-cards [cards state-atom]
  (map (comp (partial card-template state-atom) second)
       (sort-by (comp :position second) cards)))

(defn main-cards-template [state-atom]
  (let [data @state-atom]
    (if (display-single-card? data)
      (card-template state-atom (current-page data))
      (render-cards (display-cards (current-page data)) state-atom))))

(defn breadcrumbs [{:keys [current-path] :as state}]
  (let [cpath (map name (cons :devcards current-path))
        crumbs
        (map (juxt last rest)
             (rest (map-indexed
                    (fn [i v] (subvec v 0 i))
                    (take (inc (count cpath))
                          (repeat (vec cpath))))))]
    crumbs))

(declare cljs-logo)

(defn breadcrumbs-templ [crumbs state-atom]
  (let [counter (atom 0)
        sep-fn (fn [_] (sab/html [:span.com-rigsomelight-devcards-breadcrumb-sep
                                 {:key (do (swap! counter inc) @counter)}
                                 "/"]))]
    (sab/html
     [:div.com-rigsomelight-devcards-card-base.com-rigsomelight-devcards-breadcrumbs.com-rigsomelight-devcards-typog
      {:key "breadcrumbs-templ"}
      (rest
       (interleave
        (iterate sep-fn (sep-fn nil))
       (map (fn [[n path]]
              (sab/html
               [:span {:style {:display "inline-block" }
                       :key (path->unique-card-id path)}
                [:a.com-rigsomelight-devcards_set-current-path
                 {:href "#"
                  :onClick      (prevent-> #(set-current-path! state-atom path))}
                 (str n)]]))
            crumbs)))
      (cljs-logo)])))

(defn navigate-to-path [key state-atom]
  (swap! state-atom
         (fn [s]
           (let [new-s (add-to-current-path s key)]
             (hash-navigate (:current-path new-s))
             new-s))))

(defn dir-links [dirs state-atom]
  (when-not (empty? dirs)
    (sab/html
     [:div.com-rigsomelight-devcards-list-group.com-rigsomelight-devcards-typog
      (map (fn [[key child-tree]]
             (sab/html
              [:a.com-rigsomelight-devcards-list-group-item
               {:href "#"
                :key (str key)
                :onClick
                (prevent->
                 (fn [e] (navigate-to-path key state-atom)))
                #_:onTouchStart
                #_(prevent->
                 (fn [e] (navigate-to-path key state-atom)))}
               [:span.com-rigsomelight-devcards-badge
                {:style {:float "right"}}
                (count child-tree)]
               [:span " " (name key)]]))
           (sort-by (fn [[key _]] (name key))  dirs))])))

(defn main-template [state-atom]
  (let [data @state-atom]
    (sab/html
     [:div
      {:className
       (str "com-rigsomelight-devcards-base "
            (when-let [n (first (:current-path data))]
              (string/replace (name n) "." "-")))}
      #_[:div.com-rigsomelight-devcards-navbar
       [:div.com-rigsomelight-devcards-container
        [:span.com-rigsomelight-devcards-brand
         "(:devcards ClojureScript)"]]]
      [:div.com-rigsomelight-devcards-container
       (when-let [crumbs (breadcrumbs data)]
         (breadcrumbs-templ crumbs state-atom))
       (when-not (display-single-card? data)
         (let [dir-paths (display-dir-paths data)]
           (dir-links dir-paths state-atom)))
       [:div
        (main-cards-template state-atom)]]])))

(defonce-react-class DevcardsRoot
  #js {:componentDidMount
       (fn []
         (this-as this
                  (add-watch app-state
                             :renderer-watch
                             (fn [_ _ _ _]
                               (.forceUpdate this)))))
       :render (fn [] (main-template app-state)) } )


(defn renderer [state-atom]
  #_(prn "Rendering")
  (js/ReactDOM.render
   (js/React.createElement DevcardsRoot)
   #_(sab/html [:div
              (main-template state-atom)
              #_(edn-rend/html-edn @state-atom)])
   (devcards-app-node)))

(comment


  a debug option :debug-card true

  when initial state changes we should reset the state

  an iterator to delinate a card in many states

  speed test pprint and hightlighting versus edn-renderer

  use a pure component for the edn renderer to memoize rerenders

  look at upndown.js and marked.js

  probably switch to marked for markdown parsing

  fix loading race

  move highlighting out and force folks to require hljs if they want it?

  generate blog posts from a namespace with devcards
  - can implement code modules
  - look at dev mode and prod mode for this
  - front matter in ns meta data

  fix style of history so that there is no margin under it
    when there is no data being inspected

  move documentation cards into more descriptive namespaces
  fill out details better

  look at being able to render cursors

  BACKBURNER
  make slider component
  consider web-components for hiding css styling!!!
  turn system into react component?

  )

(defn merge-in-new-data [state new-state]
  (assoc state
         :path-collision-count {}
         :position (:position new-state)
         :cards    (merge
                    (:cards state)
                    (:cards new-state))))

;; the only major potential problem here is that If we only register
;; some of the cards of a namespace then the other cards in the
;; namespace will dissapear. If one is doing calculations at the top
;; level that take more than the wait time this could be a problem
(defn off-the-books
  "Run sequential messages off the books outside of the atom and
   then difference the result so we can only display the new cards
   that have arrived. This prevents multiple renders and allows us
   to delete cards live."
  [channel start-data first-message]
  (let [;timer (timeout 3000)
        initial-data (-> start-data
                       (assoc :path-collision-count {})
                       (dissoc :cards))]
    #_(prn "off the books")
    (go-loop [data (dev-trans first-message initial-data)]
      #_(prn "here")
      (let [timer (timeout 500)] ;; needs to be longer for mobile think
        (when-let [[[msg-name payload] ch] (alts! [channel timer])]
          (cond
            (= ch timer)           (merge-in-new-data start-data data)
            ;; this will function without jsreload. but allows us to
            ;; render a tick faster
            (= msg-name :jsreload) (merge-in-new-data start-data data)
            :else
            (do
              (recur (dev-trans [msg-name payload] data)))))))))

(defn load-data-from-channel! [channel]
  (go (let [new-state (<! (off-the-books channel @app-state []))]
        (reset! app-state new-state))))

(defn start-ui-with-renderer [channel renderer]
  (defonce devcards-ui-setup
    (do
      (when (exists? js/React.initializeTouchEvents)
        (js/React.initializeTouchEvents true))
      (go
        (<! (load-data-from-channel! channel))

        (js/setTimeout #(renderer app-state) 0)

        (js/setTimeout #(add-watch app-state :devcards-render
                                   (fn [_ _ _ _] (renderer app-state))) 0)

        (loop  []
          (when-let [v (<! channel)]
            #_(prn "hey" (first v))
            (let [new-state (<! (off-the-books channel @app-state v))]
              #_(prn "in the books")
              (js/setTimeout #(reset! app-state new-state) 0))
            (recur))))
      true)))


(defn start-ui [channel]
  (defonce devcards-ui-setup
    (do
      (when (exists? js/React.initializeTouchEvents)
        (js/React.initializeTouchEvents true))
      (render-base-if-necessary!)
      (go
        ;; initial load
        #_(prn "INITIAL loading")
        ;; consume all register card messages
        ;; and then load the accumulated state into the
        ;; app-state
        (<! (load-data-from-channel! channel))

        #_(let [new-state (<! (off-the-books channel @app-state []))]
          (reset! app-state new-state))

        ;; escape core async context for better errors
        (js/setTimeout #(renderer app-state) 0)

        #_(js/setTimeout #(add-watch app-state :devcards-render
                                   (fn [_ _ _ _] (renderer app-state))) 0)

        (js/setTimeout #(hash-routing-init app-state) 0)

        (loop  []
          (when-let [v (<! channel)]
            #_(prn "hey" (first v))
            (let [new-state (<! (off-the-books channel @app-state v))]
              #_(prn "in the books")
              (js/setTimeout #(reset! app-state new-state) 0))
            (recur))))
      true)))

(def cljs-logo-svg
  "<?xml version='1.0' encoding='utf-8'?>
<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
<svg class='cljs-logo' width='49px' height='49px' style='float: right; display: inline-block; position:relative; top:-13px; right: 0px;' version='1.1'
  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>
<circle fill='#fff' cx='213' cy='214' r='213' />
<g>
<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5
  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8
  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4
  C131.5,266.2,127.1,266.6,122,266.6z'/>
<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>
<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8
  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6
  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6
  C231.2,164.6,230.4,162.2,230.4,159.2z'/>
<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4
  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1
  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6
  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5
  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>
</g>
<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3
  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>
<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3
  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>
</svg>")

(defn cljs-logo []
  (.span (.-DOM js/React)
        (clj->js { :key "cljs-logo"
                  :dangerouslySetInnerHTML
                  { :__html
                   cljs-logo-svg }})))
