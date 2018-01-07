// Compiled by ClojureScript 1.9.908 {}
goog.provide('gadjett.core_fn');
goog.require('cljs.core');
goog.require('gadjett.collections');
if(typeof gadjett.core_fn.history !== 'undefined'){
} else {
gadjett.core_fn.history = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof gadjett.core_fn.settings !== 'undefined'){
} else {
gadjett.core_fn.settings = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-function-calls","max-function-calls",-350003092),(50),new cljs.core.Keyword(null,"timeslot-function-calls-msec","timeslot-function-calls-msec",189712759),(1000),new cljs.core.Keyword(null,"compact-max-elements-in-seq","compact-max-elements-in-seq",418251211),(5),new cljs.core.Keyword(null,"compact-max-chars-in-str","compact-max-chars-in-str",240586724),(10)], null);
}
gadjett.core_fn.settings_BANG_ = (function gadjett$core_fn$settings_BANG_(var_args){
var args__9647__auto__ = [];
var len__9640__auto___28632 = arguments.length;
var i__9641__auto___28633 = (0);
while(true){
if((i__9641__auto___28633 < len__9640__auto___28632)){
args__9647__auto__.push((arguments[i__9641__auto___28633]));

var G__28634 = (i__9641__auto___28633 + (1));
i__9641__auto___28633 = G__28634;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return gadjett.core_fn.settings_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});

gadjett.core_fn.settings_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__28629){
var map__28630 = p__28629;
var map__28630__$1 = ((((!((map__28630 == null)))?((((map__28630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28630.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28630):map__28630);
var args = map__28630__$1;
return gadjett.core_fn.settings = cljs.core.merge.call(null,gadjett.core_fn.settings,args);
});

gadjett.core_fn.settings_BANG_.cljs$lang$maxFixedArity = (0);

gadjett.core_fn.settings_BANG_.cljs$lang$applyTo = (function (seq28628){
return gadjett.core_fn.settings_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28628));
});

gadjett.core_fn.add_event_and_filter = (function gadjett$core_fn$add_event_and_filter(timestamp_msec,events){
var timeslot = new cljs.core.Keyword(null,"timeslot-function-calls-msec","timeslot-function-calls-msec",189712759).cljs$core$IFn$_invoke$arity$1(gadjett.core_fn.settings);
return cljs.core.cons.call(null,timestamp_msec,cljs.core.take_while.call(null,((function (timeslot){
return (function (p1__28635_SHARP_){
return (p1__28635_SHARP_ > (timestamp_msec - timeslot));
});})(timeslot))
,events));
});
gadjett.core_fn.add_event = (function gadjett$core_fn$add_event(history,func_name,timestamp_msec){
return cljs.core.update.call(null,history,func_name,cljs.core.partial.call(null,gadjett.core_fn.add_event_and_filter,timestamp_msec));
});
gadjett.core_fn.record_function_call = (function gadjett$core_fn$record_function_call(func_name,args){
cljs.core.swap_BANG_.call(null,gadjett.core_fn.history,gadjett.core_fn.add_event,func_name,(new Date()).valueOf());

return (cljs.core.count.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,gadjett.core_fn.history),func_name)) <= new cljs.core.Keyword(null,"max-function-calls","max-function-calls",-350003092).cljs$core$IFn$_invoke$arity$1(gadjett.core_fn.settings));
});
/**
 * returns the history sorted by number of function calls
 */
gadjett.core_fn.sort_history = (function gadjett$core_fn$sort_history(hist){
return cljs.core.sort_by.call(null,cljs.core.second,gadjett.collections.map_object.call(null,cljs.core.count,hist));
});
/**
 * returns the history as an array, sorted by number of function calls
 */
gadjett.core_fn.the_history = (function gadjett$core_fn$the_history(var_args){
var G__28637 = arguments.length;
switch (G__28637) {
case 1:
return gadjett.core_fn.the_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return gadjett.core_fn.the_history.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

gadjett.core_fn.the_history.cljs$core$IFn$_invoke$arity$1 = (function (k){
return cljs.core.get.call(null,cljs.core.deref.call(null,gadjett.core_fn.history),k);
});

gadjett.core_fn.the_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return gadjett.core_fn.sort_history.call(null,cljs.core.deref.call(null,gadjett.core_fn.history));
});

gadjett.core_fn.the_history.cljs$lang$maxFixedArity = 1;

gadjett.core_fn.function_call_err_msg = (function gadjett$core_fn$function_call_err_msg(func_name,args){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(func_name)," was called too much over the last ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"timeslot-function-calls-msec","timeslot-function-calls-msec",189712759).cljs$core$IFn$_invoke$arity$1(gadjett.core_fn.settings))," msec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(func_name)].join('');
});

//# sourceMappingURL=core_fn.js.map
