(ns cljs.core.async
    (:refer-clojure :exclude [reduce transduce into merge map take partition partition-by])
    (:require [cljs.core.async.impl.protocols :as impl]
              [cljs.core.async.impl.channels :as channels]
              [cljs.core.async.impl.buffers :as buffers]
              [cljs.core.async.impl.timers :as timers]
              [cljs.core.async.impl.dispatch :as dispatch]
              [cljs.core.async.impl.ioc-helpers :as helpers])
    (:require-macros [cljs.core.async.impl.ioc-macros :as ioc]
                     [cljs.core.async.macros :refer [go go-loop]]))

(defn- fn-handler
  ([f] (fn-handler f true))
  ([f blockable]
   (reify
     impl/Handler
     (active? [_] true)
     (blockable? [_] blockable)
     (commit [_] f))))

(defn buffer
  "Returns a fixed buffer of size n. When full, puts will block/park."
  [n]
  (buffers/fixed-buffer n))

(defn dropping-buffer
  "Returns a buffer of size n. When full, puts will complete but
  val will be dropped (no transfer)."
  [n]
  (buffers/dropping-buffer n))

(defn sliding-buffer
  "Returns a buffer of size n. When full, puts will complete, and be
  buffered, but oldest elements in buffer will be dropped (not
  transferred)."
  [n]
  (buffers/sliding-buffer n))

(defn unblocking-buffer?
  "Returns true if a channel created with buff will never block. That is to say,
   puts into this buffer will never cause the buffer to be full. "
  [buff]
  (satisfies? impl/UnblockingBuffer buff))

(defn chan
  "Creates a channel with an optional buffer, an optional transducer (like (map f),
  (filter p) etc or a composition thereof), and an optional exception handler.
  If buf-or-n is a number, will create and use a fixed buffer of that size. If a
  transducer is supplied a buffer must be specified. ex-handler must be a
  fn of one argument - if an exception occurs during transformation it will be called
  with the thrown value as an argument, and any non-nil return value will be placed
  in the channel."
  ([] (chan nil))
  ([buf-or-n] (chan buf-or-n nil nil))
  ([buf-or-n xform] (chan buf-or-n xform nil))
  ([buf-or-n xform ex-handler]
   (let [buf-or-n (if (= buf-or-n 0)
                    nil
                    buf-or-n)]
     (when xform (assert buf-or-n "buffer must be supplied when transducer is"))
     (channels/chan (if (number? buf-or-n)
                      (buffer buf-or-n)
                      buf-or-n)
                    xform
                    ex-handler))))

(defn promise-chan
  "Creates a promise channel with an optional transducer, and an optional
  exception-handler. A promise channel can take exactly one value that consumers
  will receive. Once full, puts complete but val is dropped (no transfer).
  Consumers will block until either a value is placed in the channel or the
  channel is closed. See chan for the semantics of xform and ex-handler."
  ([] (promise-chan nil))
  ([xform] (promise-chan xform nil))
  ([xform ex-handler]
   (chan (buffers/promise-buffer) xform ex-handler)))

(defn timeout
  "Returns a channel that will close after msecs"
  [msecs]
  (timers/timeout msecs))

(defn <!
  "takes a val from port. Must be called inside a (go ...) block. Will
  return nil if closed. Will park if nothing is available.
  Returns true unless port is already closed"
  [port]
  (throw (js/Error. "<! used not in (go ...) block")))

(defn take!
  "Asynchronously takes a val from port, passing to fn1. Will pass nil
   if closed. If on-caller? (default true) is true, and value is
   immediately available, will call fn1 on calling thread.
   Returns nil."
  ([port fn1] (take! port fn1 true))
  ([port fn1 on-caller?]
     (let [ret (impl/take! port (fn-handler fn1))]
       (when ret
         (let [val @ret]
           (if on-caller?
             (fn1 val)
             (dispatch/run #(fn1 val)))))
       nil)))

(defn- nop [_])
(def ^:private fhnop (fn-handler nop))

(defn >!
  "puts a val into port. nil values are not allowed. Must be called
  inside a (go ...) block. Will park if no buffer space is available.
  Returns true unless port is already closed."
  [port val]
  (throw (js/Error. ">! used not in (go ...) block")))

(defn put!
  "Asynchronously puts a val into port, calling fn0 (if supplied) when
   complete. nil values are not allowed. Will throw if closed. If
   on-caller? (default true) is true, and the put is immediately
   accepted, will call fn0 on calling thread.  Returns nil."
  ([port val]
     (if-let [ret (impl/put! port val fhnop)]
       @ret
       true))
  ([port val fn1] (put! port val fn1 true))
  ([port val fn1 on-caller?]
     (if-let [retb (impl/put! port val (fn-handler fn1))]
       (let [ret @retb]
         (if on-caller?
           (fn1 ret)
           (dispatch/run #(fn1 ret)))
         ret)
       true)))

(defn close!
  ([port]
     (impl/close! port)))


(defn- random-array
  [n]
  (let [a (make-array n)]
    (dotimes [x n]
      (aset a x 0))
    (loop [i 1]
      (if (= i n)
        a
        (do
          (let [j (rand-int i)]
            (aset a i (aget a j))
            (aset a j i)
            (recur (inc i))))))))

(defn- alt-flag []
  (let [flag (atom true)]
    (reify
      impl/Handler
      (active? [_] @flag)
      (blockable? [_] true)
      (commit [_]
        (reset! flag nil)
        true))))

(defn- alt-handler [flag cb]
  (reify
    impl/Handler
    (active? [_] (impl/active? flag))
    (blockable? [_] true)
    (commit [_]
      (impl/commit flag)
      cb)))

(defn do-alts
  "returns derefable [val port] if immediate, nil if enqueued"
  [fret ports opts]
  (let [flag (alt-flag)
        n (count ports)
        idxs (random-array n)
        priority (:priority opts)
        ret
        (loop [i 0]
          (when (< i n)
            (let [idx (if priority i (aget idxs i))
                  port (nth ports idx)
                  wport (when (vector? port) (port 0))
                  vbox (if wport
                         (let [val (port 1)]
                           (impl/put! wport val (alt-handler flag #(fret [% wport]))))
                         (impl/take! port (alt-handler flag #(fret [% port]))))]
              (if vbox
                (channels/box [@vbox (or wport port)])
                (recur (inc i))))))]
    (or
     ret
     (when (contains? opts :default)
       (when-let [got (and (impl/active? flag) (impl/commit flag))]
         (channels/box [(:default opts) :default]))))))

(defn alts!
  "Completes at most one of several channel operations. Must be called
   inside a (go ...) block. ports is a vector of channel endpoints,
   which can be either a channel to take from or a vector of
  [channel-to-put-to val-to-put], in any combination. Takes will be
  made as if by <!, and puts will be made as if by >!. Unless
  the :priority option is true, if more than one port operation is
  ready a non-deterministic choice will be made. If no operation is
  ready and a :default value is supplied, [default-val :default] will
  be returned, otherwise alts! will park until the first operation to
  become ready completes. Returns [val port] of the completed
  operation, where val is the value taken for takes, and a
  boolean (true unless already closed, as per put!) for puts.

  opts are passed as :key val ... Supported options:

  :default val - the value to use if none of the operations are immediately ready
  :priority true - (default nil) when true, the operations will be tried in order.

  Note: there is no guarantee that the port exps or val exprs will be
  used, nor in what order should they be, so they should not be
  depended upon for side effects."

  [ports & {:as opts}]
  (throw (js/Error. "alts! used not in (go ...) block")))

(defn offer!
  "Puts a val into port if it's possible to do so immediately.
  nil values are not allowed. Never blocks. Returns true if offer succeeds."
  [port val]
  (let [ret (impl/put! port val (fn-handler nop false))]
    (when ret @ret)))

(defn poll!
  "Takes a val from port if it's possible to do so immediately.
  Never blocks. Returns value if successful, nil otherwise."
  [port]
  (let [ret (impl/take! port (fn-handler nop false))]
    (when ret @ret)))

;;;;;;; channel ops

(defn pipe
  "Takes elements from the from channel and supplies them to the to
   channel. By default, the to channel will be closed when the from
   channel closes, but can be determined by the close?  parameter. Will
   stop consuming the from channel if the to channel closes"

  ([from to] (pipe from to true))
  ([from to close?]
     (go-loop []
      (let [v (<! from)]
        (if (nil? v)
          (when close? (close! to))
          (when (>! to v)
              (recur)))))
     to))

(defn- pipeline*
  ([n to xf from close? ex-handler type]
     (assert (pos? n))
     (let [jobs (chan n)
           results (chan n)
           process (fn [[v p :as job]]
                     (if (nil? job)
                       (do (close! results) nil)
                       (let [res (chan 1 xf ex-handler)]
                         (go
                           (>! res v)
                           (close! res))
                         (put! p res)
                         true)))
           async (fn [[v p :as job]]
                   (if (nil? job)
                     (do (close! results) nil)
                     (let [res (chan 1)]
                       (xf v res)
                       (put! p res)
                       true)))]
       (dotimes [_ n]
         (case type
           :compute  (go-loop []
                               (let [job (<! jobs)]
                                 (when (process job)
                                   (recur))))
           :async (go-loop []
                           (let [job (<! jobs)]
                             (when (async job)
                               (recur))))))
       (go-loop []
                  (let [v (<! from)]
                    (if (nil? v)
                      (close! jobs)
                      (let [p (chan 1)]
                        (>! jobs [v p])
                        (>! results p)
                        (recur)))))
       (go-loop []
                  (let [p (<! results)]
                    (if (nil? p)
                      (when close? (close! to))
                      (let [res (<! p)]
                        (loop []
                          (let [v (<! res)]
                            (when (and (not (nil? v)) (>! to v))
                              (recur))))
                        (recur))))))))

(defn pipeline-async
  "Takes elements from the from channel and supplies them to the to
  channel, subject to the async function af, with parallelism n. af
  must be a function of two arguments, the first an input value and
  the second a channel on which to place the result(s). af must close!
  the channel before returning.  The presumption is that af will
  return immediately, having launched some asynchronous operation
  whose completion/callback will manipulate the result channel. Outputs
  will be returned in order relative to  the inputs. By default, the to
  channel will be closed when the from channel closes, but can be
  determined by the close?  parameter. Will stop consuming the from
  channel if the to channel closes."
  ([n to af from] (pipeline-async n to af from true))
  ([n to af from close?] (pipeline* n to af from close? nil :async)))

(defn pipeline
  "Takes elements from the from channel and supplies them to the to
  channel, subject to the transducer xf, with parallelism n. Because
  it is parallel, the transducer will be applied independently to each
  element, not across elements, and may produce zero or more outputs
  per input.  Outputs will be returned in order relative to the
  inputs. By default, the to channel will be closed when the from
  channel closes, but can be determined by the close?  parameter. Will
  stop consuming the from channel if the to channel closes.

  Note this is supplied for API compatibility with the Clojure version.
  Values of N > 1 will not result in actual concurrency in a
  single-threaded runtime."
  ([n to xf from] (pipeline n to xf from true))
  ([n to xf from close?] (pipeline n to xf from close? nil))
  ([n to xf from close? ex-handler] (pipeline* n to xf from close? ex-handler :compute)))

(defn split
  "Takes a predicate and a source channel and returns a vector of two
  channels, the first of which will contain the values for which the
  predicate returned true, the second those for which it returned
  false.

  The out channels will be unbuffered by default, or two buf-or-ns can
  be supplied. The channels will close after the source channel has
  closed."
  ([p ch] (split p ch nil nil))
  ([p ch t-buf-or-n f-buf-or-n]
     (let [tc (chan t-buf-or-n)
           fc (chan f-buf-or-n)]
       (go-loop []
                (let [v (<! ch)]
                  (if (nil? v)
                    (do (close! tc) (close! fc))
                    (when (>! (if (p v) tc fc) v)
                      (recur)))))
       [tc fc])))

(defn reduce
  "f should be a function of 2 arguments. Returns a channel containing
  the single result of applying f to init and the first item from the
  channel, then applying f to that result and the 2nd item, etc. If
  the channel closes without yielding items, returns init and f is not
  called. ch must close before reduce produces a result."
  [f init ch]
  (go-loop [ret init]
    (let [v (<! ch)]
      (if (nil? v)
        ret
        (let [ret' (f ret v)]
          (if (reduced? ret')
            @ret'
            (recur ret')))))))

(defn transduce
  "async/reduces a channel with a transformation (xform f).
  Returns a channel containing the result.  ch must close before
  transduce produces a result."
  [xform f init ch]
  (let [f (xform f)]
    (go
      (let [ret (<! (reduce f init ch))]
        (f ret)))))

(defn onto-chan
  "Puts the contents of coll into the supplied channel.

  By default the channel will be closed after the items are copied,
  but can be determined by the close? parameter.

  Returns a channel which will close after the items are copied."
  ([ch coll] (onto-chan ch coll true))
  ([ch coll close?]
     (go-loop [vs (seq coll)]
              (if (and vs (>! ch (first vs)))
                (recur (next vs))
                (when close?
                  (close! ch))))))


(defn to-chan
  "Creates and returns a channel which contains the contents of coll,
  closing when exhausted."
  [coll]
  (let [ch (chan (bounded-count 100 coll))]
    (onto-chan ch coll)
    ch))


(defprotocol Mux
  (muxch* [_]))

(defprotocol Mult
  (tap* [m ch close?])
  (untap* [m ch])
  (untap-all* [m]))

(defn mult
  "Creates and returns a mult(iple) of the supplied channel. Channels
  containing copies of the channel can be created with 'tap', and
  detached with 'untap'.

  Each item is distributed to all taps in parallel and synchronously,
  i.e. each tap must accept before the next item is distributed. Use
  buffering/windowing to prevent slow taps from holding up the mult.

  Items received when there are no taps get dropped.

  If a tap puts to a closed channel, it will be removed from the mult."
  [ch]
  (let [cs (atom {}) ;;ch->close?
        m (reify
           Mux
           (muxch* [_] ch)

           Mult
           (tap* [_ ch close?] (swap! cs assoc ch close?) nil)
           (untap* [_ ch] (swap! cs dissoc ch) nil)
           (untap-all* [_] (reset! cs {}) nil))
        dchan (chan 1)
        dctr (atom nil)
        done (fn [_] (when (zero? (swap! dctr dec))
                      (put! dchan true)))]
    (go-loop []
     (let [val (<! ch)]
       (if (nil? val)
         (doseq [[c close?] @cs]
           (when close? (close! c)))
         (let [chs (keys @cs)]
           (reset! dctr (count chs))
           (doseq [c chs]
               (when-not (put! c val done)
                 (done nil)
                 (untap* m c)))
           ;;wait for all
           (when (seq chs)
             (<! dchan))
           (recur)))))
    m))

(defn tap
  "Copies the mult source onto the supplied channel.

  By default the channel will be closed when the source closes,
  but can be determined by the close? parameter."
  ([mult ch] (tap mult ch true))
  ([mult ch close?] (tap* mult ch close?) ch))

(defn untap
  "Disconnects a target channel from a mult"
  [mult ch]
  (untap* mult ch))

(defn untap-all
  "Disconnects all target channels from a mult"
  [mult] (untap-all* mult))

(defprotocol Mix
  (admix* [m ch])
  (unmix* [m ch])
  (unmix-all* [m])
  (toggle* [m state-map])
  (solo-mode* [m mode]))

(defn ioc-alts! [state cont-block ports & {:as opts}]
  (ioc/aset-all! state helpers/STATE-IDX cont-block)
  (when-let [cb (cljs.core.async/do-alts
                  (fn [val]
                    (ioc/aset-all! state helpers/VALUE-IDX val)
                    (helpers/run-state-machine-wrapped state))
                  ports
                  opts)]
    (ioc/aset-all! state helpers/VALUE-IDX @cb)
    :recur))

(defn mix
  "Creates and returns a mix of one or more input channels which will
  be put on the supplied out channel. Input sources can be added to
  the mix with 'admix', and removed with 'unmix'. A mix supports
  soloing, muting and pausing multiple inputs atomically using
  'toggle', and can solo using either muting or pausing as determined
  by 'solo-mode'.

  Each channel can have zero or more boolean modes set via 'toggle':

  :solo - when true, only this (ond other soloed) channel(s) will appear
          in the mix output channel. :mute and :pause states of soloed
          channels are ignored. If solo-mode is :mute, non-soloed
          channels are muted, if :pause, non-soloed channels are
          paused.

  :mute - muted channels will have their contents consumed but not included in the mix
  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
"
  [out]
  (let [cs (atom {}) ;;ch->attrs-map
        solo-modes #{:mute :pause}
        attrs (conj solo-modes :solo)
        solo-mode (atom :mute)
        change (chan)
        changed #(put! change true)
        pick (fn [attr chs]
               (reduce-kv
                   (fn [ret c v]
                     (if (attr v)
                       (conj ret c)
                       ret))
                   #{} chs))
        calc-state (fn []
                     (let [chs @cs
                           mode @solo-mode
                           solos (pick :solo chs)
                           pauses (pick :pause chs)]
                       {:solos solos
                        :mutes (pick :mute chs)
                        :reads (conj
                                (if (and (= mode :pause) (not (empty? solos)))
                                  (vec solos)
                                  (vec (remove pauses (keys chs))))
                                change)}))
        m (reify
           Mux
           (muxch* [_] out)
           Mix
           (admix* [_ ch] (swap! cs assoc ch {}) (changed))
           (unmix* [_ ch] (swap! cs dissoc ch) (changed))
           (unmix-all* [_] (reset! cs {}) (changed))
           (toggle* [_ state-map] (swap! cs (partial merge-with cljs.core/merge) state-map) (changed))
           (solo-mode* [_ mode]
             (assert (solo-modes mode) (str "mode must be one of: " solo-modes))
             (reset! solo-mode mode)
             (changed)))]
    (go-loop [{:keys [solos mutes reads] :as state} (calc-state)]
      (let [[v c] (alts! reads)]
        (if (or (nil? v) (= c change))
          (do (when (nil? v)
                (swap! cs dissoc c))
              (recur (calc-state)))
          (if (or (solos c)
                  (and (empty? solos) (not (mutes c))))
            (when (>! out v)
              (recur state))
            (recur state)))))
    m))

(defn admix
  "Adds ch as an input to the mix"
  [mix ch]
  (admix* mix ch))

(defn unmix
  "Removes ch as an input to the mix"
  [mix ch]
  (unmix* mix ch))

(defn unmix-all
  "removes all inputs from the mix"
  [mix]
  (unmix-all* mix))

(defn toggle
  "Atomically sets the state(s) of one or more channels in a mix. The
  state map is a map of channels -> channel-state-map. A
  channel-state-map is a map of attrs -> boolean, where attr is one or
  more of :mute, :pause or :solo. Any states supplied are merged with
  the current state.

  Note that channels can be added to a mix via toggle, which can be
  used to add channels in a particular (e.g. paused) state."
  [mix state-map]
  (toggle* mix state-map))

(defn solo-mode
  "Sets the solo mode of the mix. mode must be one of :mute or :pause"
  [mix mode]
  (solo-mode* mix mode))


(defprotocol Pub
  (sub* [p v ch close?])
  (unsub* [p v ch])
  (unsub-all* [p] [p v]))

(defn pub
  "Creates and returns a pub(lication) of the supplied channel,
  partitioned into topics by the topic-fn. topic-fn will be applied to
  each value on the channel and the result will determine the 'topic'
  on which that value will be put. Channels can be subscribed to
  receive copies of topics using 'sub', and unsubscribed using
  'unsub'. Each topic will be handled by an internal mult on a
  dedicated channel. By default these internal channels are
  unbuffered, but a buf-fn can be supplied which, given a topic,
  creates a buffer with desired properties.

  Each item is distributed to all subs in parallel and synchronously,
  i.e. each sub must accept before the next item is distributed. Use
  buffering/windowing to prevent slow subs from holding up the pub.

  Items received when there are no matching subs get dropped.

  Note that if buf-fns are used then each topic is handled
  asynchronously, i.e. if a channel is subscribed to more than one
  topic it should not expect them to be interleaved identically with
  the source."
  ([ch topic-fn] (pub ch topic-fn (constantly nil)))
  ([ch topic-fn buf-fn]
     (let [mults (atom {}) ;;topic->mult
           ensure-mult (fn [topic]
                         (or (get @mults topic)
                             (get (swap! mults
                                         #(if (% topic) % (assoc % topic (mult (chan (buf-fn topic))))))
                                  topic)))
           p (reify
              Mux
              (muxch* [_] ch)

              Pub
              (sub* [p topic ch close?]
                    (let [m (ensure-mult topic)]
                      (tap m ch close?)))
              (unsub* [p topic ch]
                      (when-let [m (get @mults topic)]
                        (untap m ch)))
              (unsub-all* [_] (reset! mults {}))
              (unsub-all* [_ topic] (swap! mults dissoc topic)))]
       (go-loop []
         (let [val (<! ch)]
           (if (nil? val)
             (doseq [m (vals @mults)]
               (close! (muxch* m)))
             (let [topic (topic-fn val)
                   m (get @mults topic)]
               (when m
                 (when-not (>! (muxch* m) val)
                   (swap! mults dissoc topic)))
               (recur)))))
       p)))

(defn sub
  "Subscribes a channel to a topic of a pub.

  By default the channel will be closed when the source closes,
  but can be determined by the close? parameter."
  ([p topic ch] (sub p topic ch true))
  ([p topic ch close?] (sub* p topic ch close?)))

(defn unsub
  "Unsubscribes a channel from a topic of a pub"
  [p topic ch]
  (unsub* p topic ch))

(defn unsub-all
  "Unsubscribes all channels from a pub, or a topic of a pub"
  ([p] (unsub-all* p))
  ([p topic] (unsub-all* p topic)))


;;;;

(defn map
  "Takes a function and a collection of source channels, and returns a
  channel which contains the values produced by applying f to the set
  of first items taken from each source channel, followed by applying
  f to the set of second items from each channel, until any one of the
  channels is closed, at which point the output channel will be
  closed. The returned channel will be unbuffered by default, or a
  buf-or-n can be supplied"
  ([f chs] (map f chs nil))
  ([f chs buf-or-n]
     (let [chs (vec chs)
           out (chan buf-or-n)
           cnt (count chs)
           rets (object-array cnt)
           dchan (chan 1)
           dctr (atom nil)
           done (mapv (fn [i]
                         (fn [ret]
                           (aset rets i ret)
                           (when (zero? (swap! dctr dec))
                             (put! dchan (.slice rets 0)))))
                       (range cnt))]
       (go-loop []
         (reset! dctr cnt)
         (dotimes [i cnt]
           (try
             (take! (chs i) (done i))
             (catch js/Object e
               (swap! dctr dec))))
         (let [rets (<! dchan)]
           (if (some nil? rets)
             (close! out)
             (do (>! out (apply f rets))
                 (recur)))))
       out)))

(defn merge
  "Takes a collection of source channels and returns a channel which
  contains all values taken from them. The returned channel will be
  unbuffered by default, or a buf-or-n can be supplied. The channel
  will close after all the source channels have closed."
  ([chs] (merge chs nil))
  ([chs buf-or-n]
     (let [out (chan buf-or-n)]
       (go-loop [cs (vec chs)]
         (if (pos? (count cs))
           (let [[v c] (alts! cs)]
             (if (nil? v)
               (recur (filterv #(not= c %) cs))
               (do (>! out v)
                   (recur cs))))
           (close! out)))
       out)))

(defn into
  "Returns a channel containing the single (collection) result of the
  items taken from the channel conjoined to the supplied
  collection. ch must close before into produces a result."
  [coll ch]
  (reduce conj coll ch))

(defn take
  "Returns a channel that will return, at most, n items from ch. After n items
   have been returned, or ch has been closed, the return chanel will close.

  The output channel is unbuffered by default, unless buf-or-n is given."
  ([n ch]
     (take n ch nil))
  ([n ch buf-or-n]
     (let [out (chan buf-or-n)]
       (go (loop [x 0]
             (when (< x n)
               (let [v (<! ch)]
                 (when (not (nil? v))
                   (>! out v)
                   (recur (inc x))))))
           (close! out))
       out)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; deprecated - do not use ;;;;;;;;;;;;;;;;;;;;;;;;;

(defn map<
  "Deprecated - this function will be removed. Use transducer instead"
  [f ch]
  (reify
   impl/Channel
   (close! [_] (impl/close! ch))
   (closed? [_] (impl/closed? ch))

   impl/ReadPort
   (take! [_ fn1]
     (let [ret
       (impl/take! ch
         (reify
          impl/Handler
          (active? [_] (impl/active? fn1))
          (blockable? [_] true)
          #_(lock-id [_] (impl/lock-id fn1))
          (commit [_]
           (let [f1 (impl/commit fn1)]
             #(f1 (if (nil? %) nil (f %)))))))]
       (if (and ret (not (nil? @ret)))
         (channels/box (f @ret))
         ret)))

   impl/WritePort
   (put! [_ val fn1] (impl/put! ch val fn1))))

(defn map>
  "Deprecated - this function will be removed. Use transducer instead"
  [f ch]
  (reify
   impl/Channel
   (close! [_] (impl/close! ch))

   impl/ReadPort
   (take! [_ fn1] (impl/take! ch fn1))

   impl/WritePort
   (put! [_ val fn1]
     (impl/put! ch (f val) fn1))))

(defn filter>
  "Deprecated - this function will be removed. Use transducer instead"
  [p ch]
  (reify
   impl/Channel
   (close! [_] (impl/close! ch))
   (closed? [_] (impl/closed? ch))

   impl/ReadPort
   (take! [_ fn1] (impl/take! ch fn1))

   impl/WritePort
   (put! [_ val fn1]
    (if (p val)
      (impl/put! ch val fn1)
      (channels/box (not (impl/closed? ch)))))))

(defn remove>
  "Deprecated - this function will be removed. Use transducer instead"
  [p ch]
  (filter> (complement p) ch))

(defn filter<
  "Deprecated - this function will be removed. Use transducer instead"
  ([p ch] (filter< p ch nil))
  ([p ch buf-or-n]
     (let [out (chan buf-or-n)]
       (go-loop []
         (let [val (<! ch)]
           (if (nil? val)
             (close! out)
             (do (when (p val)
                   (>! out val))
                 (recur)))))
       out)))

(defn remove<
  "Deprecated - this function will be removed. Use transducer instead"
  ([p ch] (remove< p ch nil))
  ([p ch buf-or-n] (filter< (complement p) ch buf-or-n)))

(defn- mapcat* [f in out]
  (go-loop []
    (let [val (<! in)]
      (if (nil? val)
        (close! out)
        (do (doseq [v (f val)]
              (>! out v))
            (when-not (impl/closed? out)
              (recur)))))))

(defn mapcat<
  "Deprecated - this function will be removed. Use transducer instead"
  ([f in] (mapcat< f in nil))
  ([f in buf-or-n]
    (let [out (chan buf-or-n)]
      (mapcat* f in out)
      out)))

(defn mapcat>
  "Deprecated - this function will be removed. Use transducer instead"
  ([f out] (mapcat> f out nil))
  ([f out buf-or-n]
     (let [in (chan buf-or-n)]
       (mapcat* f in out)
       in)))

(defn unique
  "Deprecated - this function will be removed. Use transducer instead"
  ([ch]
     (unique ch nil))
  ([ch buf-or-n]
     (let [out (chan buf-or-n)]
       (go (loop [last nil]
             (let [v (<! ch)]
               (when (not (nil? v))
                 (if (= v last)
                   (recur last)
                   (do (>! out v)
                       (recur v))))))
           (close! out))
       out)))

(defn partition
  "Deprecated - this function will be removed. Use transducer instead"
  ([n ch]
     (partition n ch nil))
  ([n ch buf-or-n]
     (let [out (chan buf-or-n)]
       (go  (loop [arr (make-array n)
                   idx 0]
              (let [v (<! ch)]
                (if (not (nil? v))
                  (do (aset ^objects arr idx v)
                      (let [new-idx (inc idx)]
                        (if (< new-idx n)
                          (recur arr new-idx)
                          (do (>! out (vec arr))
                              (recur (make-array n) 0)))))
                  (do (when (> idx 0)
                        (>! out (vec arr)))
                      (close! out))))))
       out)))


(defn partition-by
  "Deprecated - this function will be removed. Use transducer instead"
  ([f ch]
     (partition-by f ch nil))
  ([f ch buf-or-n]
     (let [out (chan buf-or-n)]
       (go (loop [lst (make-array 0)
                  last ::nothing]
             (let [v (<! ch)]
               (if (not (nil? v))
                 (let [new-itm (f v)]
                   (if (or (= new-itm last)
                           (keyword-identical? last ::nothing))
                     (do (.push lst v)
                         (recur lst new-itm))
                     (do (>! out (vec lst))
                         (let [new-lst (make-array 0)]
                           (.push new-lst v)
                           (recur new-lst new-itm)))))
                 (do (when (> (alength lst) 0)
                       (>! out (vec lst)))
                     (close! out))))))
       out)))
