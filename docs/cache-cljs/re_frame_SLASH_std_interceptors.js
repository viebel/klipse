goog.provide("re_frame.std_interceptors");
/**
 * An interceptor which logs data about the handling of an event.
 * 
 *   Includes a `clojure.data/diff` of the db, before vs after, showing
 *   the changes caused by the event handler.
 * 
 *   You'd typically want this interceptor after (to the right of) any
 *   path interceptor.
 * 
 *   Warning:  calling clojure.data/diff on large, complex data structures
 *   can be slow. So, you won't want this interceptor present in production
 *   code. See the todomvc example to see how to exclude interceptors from
 *   production code.
 */
(function (){
re_frame.std_interceptors.debug = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",(-1388402092)),new cljs.core.Keyword(null,"debug","debug",(-1608172596)),new cljs.core.Keyword(null,"before","before",(-1633692388)),(function re_frame$std_interceptors$debug_before(context){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",(-1595516004)),"Handling re-frame event:",re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",(301435442))));

return context;
}),new cljs.core.Keyword(null,"after","after",(594996914)),(function re_frame$std_interceptors$debug_after(context){
var event = re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",(301435442)));
var orig_db = re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"db","db",(993250759)));
var new_db = re_frame.interceptor.get_effect.call(null,context,new cljs.core.Keyword(null,"db","db",(993250759)),new cljs.core.Keyword("re-frame.std-interceptors","not-found","re-frame.std-interceptors/not-found",(-1614827865)));
if(cljs.core._EQ_.call(null,new_db,new cljs.core.Keyword("re-frame.std-interceptors","not-found","re-frame.std-interceptors/not-found",(-1614827865)))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",(-1595516004)),"No :db changes caused by:",event);
} else {
var vec__748_751 = clojure.data.diff.call(null,orig_db,new_db);
var only_before_752 = cljs.core.nth.call(null,vec__748_751,(0),null);
var only_after_753 = cljs.core.nth.call(null,vec__748_751,(1),null);
var db_changed_QMARK__754 = (!((only_before_752 == null))) || (!((only_after_753 == null)));
if(db_changed_QMARK__754){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"group","group",(582596132)),"db clojure.data/diff for:",event);

re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",(-1595516004)),"only before:",only_before_752);

re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",(-1595516004)),"only after :",only_after_753);

re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"groupEnd","groupEnd",(-337721382)));
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",(-1595516004)),"no app-db changes caused by:",event);
}
}

return context;
})); return (
new cljs.core.Var(function(){return re_frame.std_interceptors.debug;},new cljs.core.Symbol("re-frame.std-interceptors","debug","re-frame.std-interceptors/debug",(-441667418),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.std-interceptors","re-frame.std-interceptors",(-683710862),null),new cljs.core.Symbol(null,"debug","debug",(32358931),null),"re_frame/std_interceptors.cljc",(11),(1),(17),(17),cljs.core.List.EMPTY,"An interceptor which logs data about the handling of an event.\n\n  Includes a `clojure.data/diff` of the db, before vs after, showing\n  the changes caused by the event handler.\n\n  You'd typically want this interceptor after (to the right of) any\n  path interceptor.\n\n  Warning:  calling clojure.data/diff on large, complex data structures\n  can be slow. So, you won't want this interceptor present in production\n  code. See the todomvc example to see how to exclude interceptors from\n  production code.",(cljs.core.truth_(re_frame.std_interceptors.debug)?re_frame.std_interceptors.debug.cljs$lang$test:null)])));})()
;
/**
 * An interceptor which removes the first element of the event vector,
 *   allowing you to write more aesthetically pleasing db handlers. No
 *   leading underscore on the event-v!
 *   Your event handlers will look like this:
 * 
 *    (defn my-handler
 *      [db [x y z]]    ;; <-- instead of [_ x y z]
 *      ....)
 */
(function (){
re_frame.std_interceptors.trim_v = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",(-1388402092)),new cljs.core.Keyword(null,"trim-v","trim-v",(-1274938640)),new cljs.core.Keyword(null,"before","before",(-1633692388)),(function re_frame$std_interceptors$trimv_before(context){
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",(497912985)),new cljs.core.Keyword(null,"event","event",(301435442))], null),cljs.core.subvec,(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",(497912985)),new cljs.core.Keyword("re-frame.std-interceptors","untrimmed-event","re-frame.std-interceptors/untrimmed-event",(-840935075))], null),re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",(301435442))));
}),new cljs.core.Keyword(null,"after","after",(594996914)),(function re_frame$std_interceptors$trimv_after(context){
return cljs.core.assoc_in.call(null,re_frame.utils.dissoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",(497912985)),new cljs.core.Keyword("re-frame.std-interceptors","untrimmed-event","re-frame.std-interceptors/untrimmed-event",(-840935075))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",(497912985)),new cljs.core.Keyword(null,"event","event",(301435442))], null),re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword("re-frame.std-interceptors","untrimmed-event","re-frame.std-interceptors/untrimmed-event",(-840935075))));
})); return (
new cljs.core.Var(function(){return re_frame.std_interceptors.trim_v;},new cljs.core.Symbol("re-frame.std-interceptors","trim-v","re-frame.std-interceptors/trim-v",(957206698),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.std-interceptors","re-frame.std-interceptors",(-683710862),null),new cljs.core.Symbol(null,"trim-v","trim-v",(365592887),null),"re_frame/std_interceptors.cljc",(12),(1),(54),(54),cljs.core.List.EMPTY,"An interceptor which removes the first element of the event vector,\n  allowing you to write more aesthetically pleasing db handlers. No\n  leading underscore on the event-v!\n  Your event handlers will look like this:\n\n      (defn my-handler\n        [db [x y z]]    ;; <-- instead of [_ x y z]\n        ....)",(cljs.core.truth_(re_frame.std_interceptors.trim_v)?re_frame.std_interceptors.trim_v.cljs$lang$test:null)])));})()
;
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-db`.
 * 
 *   These handlers take two arguments;  `db` and `event`, and they return `db`.
 * 
 *   (fn [db event]
 *   ....)
 * 
 *   So, the interceptor wraps the given handler:
 *   1. extracts two `:coeffects` keys: db and event
 *   2. calls handler-fn
 *   3. stores the db result back into context's `:effects`
 */
(function (){
re_frame.std_interceptors.db_handler__GT_interceptor = (function re_frame$std_interceptors$db_handler__GT_interceptor(handler_fn){
return re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",(-1388402092)),new cljs.core.Keyword(null,"db-handler","db-handler",(579530098)),new cljs.core.Keyword(null,"before","before",(-1633692388)),(function re_frame$std_interceptors$db_handler__GT_interceptor_$_db_handler_before(context){
var map__761 = new cljs.core.Keyword(null,"coeffects","coeffects",(497912985)).cljs$core$IFn$_invoke$arity$1(context);
var map__761__$1 = ((((!((map__761 == null)))?((((map__761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__761.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__761):map__761);
var db = cljs.core.get.call(null,map__761__$1,new cljs.core.Keyword(null,"db","db",(993250759)));
var event = cljs.core.get.call(null,map__761__$1,new cljs.core.Keyword(null,"event","event",(301435442)));
return re_frame.interceptor.assoc_effect.call(null,context,new cljs.core.Keyword(null,"db","db",(993250759)),handler_fn.call(null,db,event));
}));
}); return (
new cljs.core.Var(function(){return re_frame.std_interceptors.db_handler__GT_interceptor;},new cljs.core.Symbol("re-frame.std-interceptors","db-handler->interceptor","re-frame.std-interceptors/db-handler->interceptor",(560898669),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.std-interceptors","re-frame.std-interceptors",(-683710862),null),new cljs.core.Symbol(null,"db-handler->interceptor","db-handler->interceptor",(1563193854),null),"re_frame/std_interceptors.cljc",(30),(1),(82),(82),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler-fn","handler-fn",(841143797),null)], null)),"Returns an interceptor which wraps the kind of event handler given to `reg-event-db`.\n\n  These handlers take two arguments;  `db` and `event`, and they return `db`.\n\n  (fn [db event]\n     ....)\n\n  So, the interceptor wraps the given handler:\n     1. extracts two `:coeffects` keys: db and event\n     2. calls handler-fn\n     3. stores the db result back into context's `:effects`",(cljs.core.truth_(re_frame.std_interceptors.db_handler__GT_interceptor)?re_frame.std_interceptors.db_handler__GT_interceptor.cljs$lang$test:null)])));})()
;
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-fx`.
 * 
 *   These handlers take two arguments;  `coeffects` and `event`, and they return `effects`.
 * 
 *   (fn [coeffects event]
 *   {:db ...
 *    :dispatch ...})
 * 
 * Wrap handler in an interceptor so it can be added to (the RHS) of a chain:
 *   1. extracts `:coeffects`
 *   2. call handler-fn giving coeffects
 *   3. stores the result back into the `:effects`
 */
(function (){
re_frame.std_interceptors.fx_handler__GT_interceptor = (function re_frame$std_interceptors$fx_handler__GT_interceptor(handler_fn){
return re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",(-1388402092)),new cljs.core.Keyword(null,"fx-handler","fx-handler",(-549783097)),new cljs.core.Keyword(null,"before","before",(-1633692388)),(function re_frame$std_interceptors$fx_handler__GT_interceptor_$_fx_handler_before(context){
var map__769 = new cljs.core.Keyword(null,"coeffects","coeffects",(497912985)).cljs$core$IFn$_invoke$arity$1(context);
var map__769__$1 = ((((!((map__769 == null)))?((((map__769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__769):map__769);
var coeffects = map__769__$1;
var event = cljs.core.get.call(null,map__769__$1,new cljs.core.Keyword(null,"event","event",(301435442)));
return cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"effects","effects",(-282369292)),handler_fn.call(null,coeffects,event));
}));
}); return (
new cljs.core.Var(function(){return re_frame.std_interceptors.fx_handler__GT_interceptor;},new cljs.core.Symbol("re-frame.std-interceptors","fx-handler->interceptor","re-frame.std-interceptors/fx-handler->interceptor",(-1578716139),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.std-interceptors","re-frame.std-interceptors",(-683710862),null),new cljs.core.Symbol(null,"fx-handler->interceptor","fx-handler->interceptor",(-2052585990),null),"re_frame/std_interceptors.cljc",(30),(1),(104),(104),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler-fn","handler-fn",(841143797),null)], null)),"Returns an interceptor which wraps the kind of event handler given to `reg-event-fx`.\n\n  These handlers take two arguments;  `coeffects` and `event`, and they return `effects`.\n\n  (fn [coeffects event]\n     {:db ...\n      :dispatch ...})\n\n   Wrap handler in an interceptor so it can be added to (the RHS) of a chain:\n     1. extracts `:coeffects`\n     2. call handler-fn giving coeffects\n     3. stores the result back into the `:effects`",(cljs.core.truth_(re_frame.std_interceptors.fx_handler__GT_interceptor)?re_frame.std_interceptors.fx_handler__GT_interceptor.cljs$lang$test:null)])));})()
;
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-ctx`.
 *   These advanced handlers take one argument: `context` and they return a modified `context`.
 *   Example:
 *   (fn [context]
 *      (enqueue context [more interceptors]))
 */
(function (){
re_frame.std_interceptors.ctx_handler__GT_interceptor = (function re_frame$std_interceptors$ctx_handler__GT_interceptor(handler_fn){
return re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",(-1388402092)),new cljs.core.Keyword(null,"ctx-handler","ctx-handler",(-1777672230)),new cljs.core.Keyword(null,"before","before",(-1633692388)),handler_fn);
}); return (
new cljs.core.Var(function(){return re_frame.std_interceptors.ctx_handler__GT_interceptor;},new cljs.core.Symbol("re-frame.std-interceptors","ctx-handler->interceptor","re-frame.std-interceptors/ctx-handler->interceptor",(-2080464462),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.std-interceptors","re-frame.std-interceptors",(-683710862),null),new cljs.core.Symbol(null,"ctx-handler->interceptor","ctx-handler->interceptor",(-407080113),null),"re_frame/std_interceptors.cljc",(31),(1),(127),(127),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler-fn","handler-fn",(841143797),null)], null)),"Returns an interceptor which wraps the kind of event handler given to `reg-event-ctx`.\n  These advanced handlers take one argument: `context` and they return a modified `context`.\n  Example:\n     (fn [context]\n        (enqueue context [more interceptors]))",(cljs.core.truth_(re_frame.std_interceptors.ctx_handler__GT_interceptor)?re_frame.std_interceptors.ctx_handler__GT_interceptor.cljs$lang$test:null)])));})()
;
/**
 * An interceptor factory which supplies a sub-path of `:db` to the handler.
 *   It's action is somewhat analogous to `update-in`. It grafts the return
 *   value from the handler back into db.
 * 
 *   Usage:
 *  (path :some :path)
 *  (path [:some :path])
 *  (path [:some :path] :to :here)
 *  (path [:some :path] [:to] :here)
 * 
 *   Notes:
 *  1. cater for `path` appearing more than once in an interceptor chain.
 *  2. `:effects` may not contain `:db` effect. Which means no change to
 *     `:db` should be made.
 *   
 */
(function (){
re_frame.std_interceptors.path = (function re_frame$std_interceptors$path(var_args){
var args__25948__auto__ = [];
var len__25946__auto___772 = arguments.length;
var i__25947__auto___773 = (0);
while(true){
if((i__25947__auto___773 < len__25946__auto___772)){
args__25948__auto__.push((arguments[i__25947__auto___773]));

var G__774 = (i__25947__auto___773 + (1));
i__25947__auto___773 = G__774;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((0) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((0)),(0),null)):null);
return re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic(argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return re_frame.std_interceptors.path;},new cljs.core.Symbol("re-frame.std-interceptors","path","re-frame.std-interceptors/path",(1918240506),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.std-interceptors","re-frame.std-interceptors",(-683710862),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),"re_frame/std_interceptors.cljc",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(142),(142),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"An interceptor factory which supplies a sub-path of `:db` to the handler.\n  It's action is somewhat analogous to `update-in`. It grafts the return\n  value from the handler back into db.\n\n  Usage:\n    (path :some :path)\n    (path [:some :path])\n    (path [:some :path] :to :here)\n    (path [:some :path] [:to] :here)\n\n  Notes:\n    1. cater for `path` appearing more than once in an interceptor chain.\n    2. `:effects` may not contain `:db` effect. Which means no change to\n       `:db` should be made.\n  ",(cljs.core.truth_(re_frame.std_interceptors.path)?re_frame.std_interceptors.path.cljs$lang$test:null)])));})()
;

re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var path = cljs.core.flatten.call(null,args);
var db_store_key = new cljs.core.Keyword("re-frame-path","db-store","re-frame-path/db-store",(655758490));
if(cljs.core.empty_QMARK_.call(null,path)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"re-frame: \"path\" interceptor given no params");
} else {
}

return re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",(-1388402092)),new cljs.core.Keyword(null,"path","path",(-188191168)),new cljs.core.Keyword(null,"before","before",(-1633692388)),((function (path,db_store_key){
return (function (context){
var original_db = re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"db","db",(993250759)));
return re_frame.interceptor.assoc_coeffect.call(null,cljs.core.update.call(null,context,db_store_key,cljs.core.conj,original_db),new cljs.core.Keyword(null,"db","db",(993250759)),cljs.core.get_in.call(null,original_db,path));
});})(path,db_store_key))
,new cljs.core.Keyword(null,"after","after",(594996914)),((function (path,db_store_key){
return (function (context){
var db_store = db_store_key.call(null,context);
var original_db = cljs.core.peek.call(null,db_store);
var new_db_store = cljs.core.pop.call(null,db_store);
var context_SINGLEQUOTE_ = re_frame.interceptor.assoc_coeffect.call(null,cljs.core.assoc.call(null,context,db_store_key,new_db_store),new cljs.core.Keyword(null,"db","db",(993250759)),original_db);
var db = re_frame.interceptor.get_effect.call(null,context,new cljs.core.Keyword(null,"db","db",(993250759)),new cljs.core.Keyword("re-frame.std-interceptors","not-found","re-frame.std-interceptors/not-found",(-1614827865)));
if(cljs.core._EQ_.call(null,db,new cljs.core.Keyword("re-frame.std-interceptors","not-found","re-frame.std-interceptors/not-found",(-1614827865)))){
return context_SINGLEQUOTE_;
} else {
return re_frame.interceptor.assoc_effect.call(null,context_SINGLEQUOTE_,new cljs.core.Keyword(null,"db","db",(993250759)),cljs.core.assoc_in.call(null,original_db,path,db));
}
});})(path,db_store_key))
);
});

re_frame.std_interceptors.path.cljs$lang$maxFixedArity = (0);

re_frame.std_interceptors.path.cljs$lang$applyTo = (function (seq771){
return re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq771));
});

new cljs.core.Var(function(){return re_frame.std_interceptors.path;},new cljs.core.Symbol("re-frame.std-interceptors","path","re-frame.std-interceptors/path",(1918240506),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.std-interceptors","re-frame.std-interceptors",(-683710862),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),"re_frame/std_interceptors.cljc",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(142),(142),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"An interceptor factory which supplies a sub-path of `:db` to the handler.\n  It's action is somewhat analogous to `update-in`. It grafts the return\n  value from the handler back into db.\n\n  Usage:\n    (path :some :path)\n    (path [:some :path])\n    (path [:some :path] :to :here)\n    (path [:some :path] [:to] :here)\n\n  Notes:\n    1. cater for `path` appearing more than once in an interceptor chain.\n    2. `:effects` may not contain `:db` effect. Which means no change to\n       `:db` should be made.\n  ",(cljs.core.truth_(re_frame.std_interceptors.path)?re_frame.std_interceptors.path.cljs$lang$test:null)]));
/**
 * Interceptor factory which runs the given function `f` in the `after handler`
 *   position.  `f` is called with two arguments: `db` and `v`, and is expected to
 *   return a modified `db`.
 * 
 *   Unlike the `after` inteceptor which is only about side effects, `enrich`
 *   expects `f` to process and alter the given `db` coeffect in some useful way,
 *   contributing to the derived data, flowing vibe.
 * 
 *   Example Use:
 *   ------------
 * 
 *   Imagine that todomvc needed to do duplicate detection - if any two todos had
 *   the same text, then highlight their background, and report them in a warning
 *   down the bottom of the panel.
 * 
 *   Almost any user action (edit text, add new todo, remove a todo) requires a
 *   complete reassesment of duplication errors and warnings. Eg: that edit
 *   just made might have introduced a new duplicate, or removed one. Same with
 *   any todo removal. So we need to re-calculate warnings after any CRUD events
 *   associated with the todos list.
 * 
 *   Unless we are careful, we might end up coding subtly different checks
 *   for each kind of CRUD operation.  The duplicates check made after
 *   'delete todo' event might be subtly different to that done after an
 *   eddting operation. Nice and efficient, but fiddly. A bug generator
 *   approach.
 * 
 *   So, instead, we create an `f` which recalcualtes warnings from scratch
 *   every time there is ANY change. It will inspect all the todos, and
 *   reset ALL FLAGS every time (overwriting what was there previously)
 *   and fully recalculate the list of duplicates (displayed at the bottom?).
 * 
 *   By applying `f` in an `:enrich` interceptor, after every CRUD event,
 *   we keep the handlers simple and yet we ensure this important step
 *   (of getting warnings right) is not missed on any change.
 * 
 *   We can test `f` easily - it is a pure fucntions - independently of
 *   any CRUD operation.
 * 
 *   This brings huge simplicity at the expense of some re-computation
 *   each time. This may be a very satisfactory tradeoff in many cases.
 */
(function (){
re_frame.std_interceptors.enrich = (function re_frame$std_interceptors$enrich(f){
return re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",(-1388402092)),new cljs.core.Keyword(null,"enrich","enrich",(-2108921925)),new cljs.core.Keyword(null,"after","after",(594996914)),(function re_frame$std_interceptors$enrich_$_enrich_after(context){
var event = re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",(301435442)));
var db = (function (){var or__23109__auto__ = re_frame.interceptor.get_effect.call(null,context,new cljs.core.Keyword(null,"db","db",(993250759)));
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
return re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"db","db",(993250759)));
}
})();
return re_frame.interceptor.assoc_effect.call(null,context,new cljs.core.Keyword(null,"db","db",(993250759)),f.call(null,db,event));
}));
}); return (
new cljs.core.Var(function(){return re_frame.std_interceptors.enrich;},new cljs.core.Symbol("re-frame.std-interceptors","enrich","re-frame.std-interceptors/enrich",(148225937),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.std-interceptors","re-frame.std-interceptors",(-683710862),null),new cljs.core.Symbol(null,"enrich","enrich",(-468390398),null),"re_frame/std_interceptors.cljc",(13),(1),(186),(186),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),"Interceptor factory which runs the given function `f` in the `after handler`\n  position.  `f` is called with two arguments: `db` and `v`, and is expected to\n  return a modified `db`.\n\n  Unlike the `after` inteceptor which is only about side effects, `enrich`\n  expects `f` to process and alter the given `db` coeffect in some useful way,\n  contributing to the derived data, flowing vibe.\n\n  Example Use:\n  ------------\n\n  Imagine that todomvc needed to do duplicate detection - if any two todos had\n  the same text, then highlight their background, and report them in a warning\n  down the bottom of the panel.\n\n  Almost any user action (edit text, add new todo, remove a todo) requires a\n  complete reassesment of duplication errors and warnings. Eg: that edit\n  just made might have introduced a new duplicate, or removed one. Same with\n  any todo removal. So we need to re-calculate warnings after any CRUD events\n  associated with the todos list.\n\n  Unless we are careful, we might end up coding subtly different checks\n  for each kind of CRUD operation.  The duplicates check made after\n  'delete todo' event might be subtly different to that done after an\n  eddting operation. Nice and efficient, but fiddly. A bug generator\n  approach.\n\n  So, instead, we create an `f` which recalcualtes warnings from scratch\n  every time there is ANY change. It will inspect all the todos, and\n  reset ALL FLAGS every time (overwriting what was there previously)\n  and fully recalculate the list of duplicates (displayed at the bottom?).\n\n  By applying `f` in an `:enrich` interceptor, after every CRUD event,\n  we keep the handlers simple and yet we ensure this important step\n  (of getting warnings right) is not missed on any change.\n\n  We can test `f` easily - it is a pure fucntions - independently of\n  any CRUD operation.\n\n  This brings huge simplicity at the expense of some re-computation\n  each time. This may be a very satisfactory tradeoff in many cases.",(cljs.core.truth_(re_frame.std_interceptors.enrich)?re_frame.std_interceptors.enrich.cljs$lang$test:null)])));})()
;
/**
 * Interceptor factory which runs a given function `f` in the "after"
 *   position, presumably for side effects.
 * 
 *   `f` is called with two arguments: the `effects` value of `:db`
 *   (or the `coeffect` value of db if no db effect is returned) and the event.
 * Its return value is ignored so `f` can only side-effect.
 * 
 *   Example use:
 *   - `f` runs schema validation (reporting any errors found)
 *   - `f` writes some aspect of db to localstorage.
 */
(function (){
re_frame.std_interceptors.after = (function re_frame$std_interceptors$after(f){
return re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",(-1388402092)),new cljs.core.Keyword(null,"after","after",(594996914)),new cljs.core.Keyword(null,"after","after",(594996914)),(function re_frame$std_interceptors$after_$_after_after(context){
var db = (function (){var or__23109__auto__ = re_frame.interceptor.get_effect.call(null,context,new cljs.core.Keyword(null,"db","db",(993250759)));
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
return re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"db","db",(993250759)));
}
})();
var event = re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",(301435442)));
f.call(null,db,event);

return context;
}));
}); return (
new cljs.core.Var(function(){return re_frame.std_interceptors.after;},new cljs.core.Symbol("re-frame.std-interceptors","after","re-frame.std-interceptors/after",(-1452161770),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.std-interceptors","re-frame.std-interceptors",(-683710862),null),new cljs.core.Symbol(null,"after","after",(-2059438855),null),"re_frame/std_interceptors.cljc",(12),(1),(242),(242),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),"Interceptor factory which runs a given function `f` in the \"after\"\n  position, presumably for side effects.\n\n  `f` is called with two arguments: the `effects` value of `:db`\n  (or the `coeffect` value of db if no db effect is returned) and the event.\n   Its return value is ignored so `f` can only side-effect.\n\n  Example use:\n     - `f` runs schema validation (reporting any errors found)\n     - `f` writes some aspect of db to localstorage.",(cljs.core.truth_(re_frame.std_interceptors.after)?re_frame.std_interceptors.after.cljs$lang$test:null)])));})()
;
/**
 * Interceptor factory which acts a bit like `reaction`  (but it flows into `db`, rather than out)
 *   It observes N paths in `db` and if any of them test not indentical? to their previous value
 *   (as a result of a handler being run) then it runs `f` to compute a new value, which is
 *   then assoced into the given `out-path` within `db`.
 * 
 *   Usage:
 * 
 *   (defn my-f
 *  [a-val b-val]
 *  ... some computation on a and b in here)
 * 
 *   (on-changes my-f [:c]  [:a] [:b])
 * 
 *   Put this Interceptor on the right handlers (ones which might change :a or :b).
 *   It will:
 *   - call `f` each time the value at path [:a] or [:b] changes
 *   - call `f` with the values extracted from [:a] [:b]
 *   - assoc the return value from `f` into the path  [:c]
 *   
 */
(function (){
re_frame.std_interceptors.on_changes = (function re_frame$std_interceptors$on_changes(var_args){
var args__25948__auto__ = [];
var len__25946__auto___778 = arguments.length;
var i__25947__auto___779 = (0);
while(true){
if((i__25947__auto___779 < len__25946__auto___778)){
args__25948__auto__.push((arguments[i__25947__auto___779]));

var G__780 = (i__25947__auto___779 + (1));
i__25947__auto___779 = G__780;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((2) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((2)),(0),null)):null);
return re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return re_frame.std_interceptors.on_changes;},new cljs.core.Symbol("re-frame.std-interceptors","on-changes","re-frame.std-interceptors/on-changes",(-296799522),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.std-interceptors","re-frame.std-interceptors",(-683710862),null),new cljs.core.Symbol(null,"on-changes","on-changes",(-1308523167),null),"re_frame/std_interceptors.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"out-path","out-path",(-923103991),null),new cljs.core.Symbol(null,"in-paths","in-paths",(-1809668720),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"out-path","out-path",(-923103991),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"in-paths","in-paths",(-1809668720),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(266),(266),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"out-path","out-path",(-923103991),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"in-paths","in-paths",(-1809668720),null)], null)),"Interceptor factory which acts a bit like `reaction`  (but it flows into `db`, rather than out)\n  It observes N paths in `db` and if any of them test not indentical? to their previous value\n  (as a result of a handler being run) then it runs `f` to compute a new value, which is\n  then assoced into the given `out-path` within `db`.\n\n  Usage:\n\n  (defn my-f\n    [a-val b-val]\n    ... some computation on a and b in here)\n\n  (on-changes my-f [:c]  [:a] [:b])\n\n  Put this Interceptor on the right handlers (ones which might change :a or :b).\n  It will:\n     - call `f` each time the value at path [:a] or [:b] changes\n     - call `f` with the values extracted from [:a] [:b]\n     - assoc the return value from `f` into the path  [:c]\n  ",(cljs.core.truth_(re_frame.std_interceptors.on_changes)?re_frame.std_interceptors.on_changes.cljs$lang$test:null)])));})()
;

re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic = (function (f,out_path,in_paths){
return re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",(-1388402092)),new cljs.core.Keyword(null,"on-changes","on-changes",(1345912602)),new cljs.core.Keyword(null,"after","after",(594996914)),(function re_frame$std_interceptors$on_change_after(context){
var new_db = re_frame.interceptor.get_effect.call(null,context,new cljs.core.Keyword(null,"db","db",(993250759)));
var old_db = re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"db","db",(993250759)));
var new_ins = cljs.core.map.call(null,((function (new_db,old_db){
return (function (p1__14_SHARP_){
return cljs.core.get_in.call(null,new_db,p1__14_SHARP_);
});})(new_db,old_db))
,in_paths);
var old_ins = cljs.core.map.call(null,((function (new_db,old_db,new_ins){
return (function (p1__15_SHARP_){
return cljs.core.get_in.call(null,old_db,p1__15_SHARP_);
});})(new_db,old_db,new_ins))
,in_paths);
var changed_ins_QMARK_ = cljs.core.some.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,cljs.core.identical_QMARK_,new_ins,old_ins));
if(cljs.core.truth_(changed_ins_QMARK_)){
return re_frame.interceptor.assoc_effect.call(null,context,new cljs.core.Keyword(null,"db","db",(993250759)),cljs.core.assoc_in.call(null,new_db,out_path,cljs.core.apply.call(null,f,new_ins)));
} else {
return context;
}
}));
});

re_frame.std_interceptors.on_changes.cljs$lang$maxFixedArity = (2);

re_frame.std_interceptors.on_changes.cljs$lang$applyTo = (function (seq775){
var G__776 = cljs.core.first.call(null,seq775);
var seq775__$1 = cljs.core.next.call(null,seq775);
var G__777 = cljs.core.first.call(null,seq775__$1);
var seq775__$2 = cljs.core.next.call(null,seq775__$1);
return re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic(G__776,G__777,seq775__$2);
});

new cljs.core.Var(function(){return re_frame.std_interceptors.on_changes;},new cljs.core.Symbol("re-frame.std-interceptors","on-changes","re-frame.std-interceptors/on-changes",(-296799522),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.std-interceptors","re-frame.std-interceptors",(-683710862),null),new cljs.core.Symbol(null,"on-changes","on-changes",(-1308523167),null),"re_frame/std_interceptors.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"out-path","out-path",(-923103991),null),new cljs.core.Symbol(null,"in-paths","in-paths",(-1809668720),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"out-path","out-path",(-923103991),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"in-paths","in-paths",(-1809668720),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(266),(266),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"out-path","out-path",(-923103991),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"in-paths","in-paths",(-1809668720),null)], null)),"Interceptor factory which acts a bit like `reaction`  (but it flows into `db`, rather than out)\n  It observes N paths in `db` and if any of them test not indentical? to their previous value\n  (as a result of a handler being run) then it runs `f` to compute a new value, which is\n  then assoced into the given `out-path` within `db`.\n\n  Usage:\n\n  (defn my-f\n    [a-val b-val]\n    ... some computation on a and b in here)\n\n  (on-changes my-f [:c]  [:a] [:b])\n\n  Put this Interceptor on the right handlers (ones which might change :a or :b).\n  It will:\n     - call `f` each time the value at path [:a] or [:b] changes\n     - call `f` with the values extracted from [:a] [:b]\n     - assoc the return value from `f` into the path  [:c]\n  ",(cljs.core.truth_(re_frame.std_interceptors.on_changes)?re_frame.std_interceptors.on_changes.cljs$lang$test:null)]));
