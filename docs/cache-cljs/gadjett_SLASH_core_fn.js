goog.provide("gadjett.core_fn");
if(typeof gadjett.core_fn.history !== 'undefined'){
} else {
(function (){
gadjett.core_fn.history = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY); return (
new cljs.core.Var(function(){return gadjett.core_fn.history;},new cljs.core.Symbol("gadjett.core-fn","history","gadjett.core-fn/history",(-96971226),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core-fn","gadjett.core-fn",(-807586245),null),new cljs.core.Symbol(null,"history","history",(1393136307),null),"gadjett/core_fn.cljc",(17),(1),(5),(5),cljs.core.List.EMPTY,null,(cljs.core.truth_(gadjett.core_fn.history)?gadjett.core_fn.history.cljs$lang$test:null)])));})()
;
}
if(typeof gadjett.core_fn.settings !== 'undefined'){
} else {
(function (){
gadjett.core_fn.settings = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"compact-max-chars-in-str","compact-max-chars-in-str",(240586724)),(10),new cljs.core.Keyword(null,"compact-max-elements-in-seq","compact-max-elements-in-seq",(418251211)),(5),new cljs.core.Keyword(null,"max-function-calls","max-function-calls",(-350003092)),(50),new cljs.core.Keyword(null,"timeslot-function-calls-msec","timeslot-function-calls-msec",(189712759)),(1000)], null); return (
new cljs.core.Var(function(){return gadjett.core_fn.settings;},new cljs.core.Symbol("gadjett.core-fn","settings","gadjett.core-fn/settings",(377037479),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core-fn","gadjett.core-fn",(-807586245),null),new cljs.core.Symbol(null,"settings","settings",(-1098290894),null),"gadjett/core_fn.cljc",(18),(1),(6),(6),cljs.core.List.EMPTY,null,(cljs.core.truth_(gadjett.core_fn.settings)?gadjett.core_fn.settings.cljs$lang$test:null)])));})()
;
}
(function (){
gadjett.core_fn.settings_BANG_ = (function gadjett$core_fn$settings_BANG_(var_args){
var args__23658__auto__ = [];
var len__23656__auto___269 = arguments.length;
var i__23657__auto___270 = (0);
while(true){
if((i__23657__auto___270 < len__23656__auto___269)){
args__23658__auto__.push((arguments[i__23657__auto___270]));

var G__271 = (i__23657__auto___270 + (1));
i__23657__auto___270 = G__271;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((0) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((0)),(0),null)):null);
return gadjett.core_fn.settings_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return gadjett.core_fn.settings_BANG_;},new cljs.core.Symbol("gadjett.core-fn","settings!","gadjett.core-fn/settings!",(-1128653184),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core-fn","gadjett.core-fn",(-807586245),null),new cljs.core.Symbol(null,"settings!","settings!",(1535826685),null),"gadjett/core_fn.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),cljs.core.PersistentVector.EMPTY], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),cljs.core.PersistentVector.EMPTY], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(13),(13),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),cljs.core.PersistentVector.EMPTY], null)], null)),null,(cljs.core.truth_(gadjett.core_fn.settings_BANG_)?gadjett.core_fn.settings_BANG_.cljs$lang$test:null)])));})()
;

gadjett.core_fn.settings_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__266){
var map__267 = p__266;
var map__267__$1 = ((((!((map__267 == null)))?((((map__267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__267.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__267):map__267);
var args = map__267__$1;
return gadjett.core_fn.settings = cljs.core.merge.call(null,gadjett.core_fn.settings,args);
});

gadjett.core_fn.settings_BANG_.cljs$lang$maxFixedArity = (0);

gadjett.core_fn.settings_BANG_.cljs$lang$applyTo = (function (seq265){
return gadjett.core_fn.settings_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq265));
});

new cljs.core.Var(function(){return gadjett.core_fn.settings_BANG_;},new cljs.core.Symbol("gadjett.core-fn","settings!","gadjett.core-fn/settings!",(-1128653184),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core-fn","gadjett.core-fn",(-807586245),null),new cljs.core.Symbol(null,"settings!","settings!",(1535826685),null),"gadjett/core_fn.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),cljs.core.PersistentVector.EMPTY], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),cljs.core.PersistentVector.EMPTY], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(13),(13),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),cljs.core.PersistentVector.EMPTY], null)], null)),null,(cljs.core.truth_(gadjett.core_fn.settings_BANG_)?gadjett.core_fn.settings_BANG_.cljs$lang$test:null)]));
(function (){
gadjett.core_fn.add_event_and_filter = (function gadjett$core_fn$add_event_and_filter(timestamp_msec,events){
var timeslot = new cljs.core.Keyword(null,"timeslot-function-calls-msec","timeslot-function-calls-msec",(189712759)).cljs$core$IFn$_invoke$arity$1(gadjett.core_fn.settings);
return cljs.core.cons.call(null,timestamp_msec,cljs.core.take_while.call(null,((function (timeslot){
return (function (p1__16_SHARP_){
return (p1__16_SHARP_ > (timestamp_msec - timeslot));
});})(timeslot))
,events));
}); return (
new cljs.core.Var(function(){return gadjett.core_fn.add_event_and_filter;},new cljs.core.Symbol("gadjett.core-fn","add-event-and-filter","gadjett.core-fn/add-event-and-filter",(1492135070),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"gadjett.core-fn","gadjett.core-fn",(-807586245),null),new cljs.core.Symbol(null,"add-event-and-filter","add-event-and-filter",(-505354229),null),"gadjett/core_fn.cljc",(28),(1),(16),(16),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timestamp-msec","timestamp-msec",(53137187),null),new cljs.core.Symbol(null,"events","events",(-861883568),null)], null)),null,(cljs.core.truth_(gadjett.core_fn.add_event_and_filter)?gadjett.core_fn.add_event_and_filter.cljs$lang$test:null)])));})()
;
(function (){
gadjett.core_fn.add_event = (function gadjett$core_fn$add_event(history,func_name,timestamp_msec){
return cljs.core.update.call(null,history,func_name,cljs.core.partial.call(null,gadjett.core_fn.add_event_and_filter,timestamp_msec));
}); return (
new cljs.core.Var(function(){return gadjett.core_fn.add_event;},new cljs.core.Symbol("gadjett.core-fn","add-event","gadjett.core-fn/add-event",(1988598932),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"gadjett.core-fn","gadjett.core-fn",(-807586245),null),new cljs.core.Symbol(null,"add-event","add-event",(-1716006681),null),"gadjett/core_fn.cljc",(17),(1),(22),(22),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"history","history",(1393136307),null),new cljs.core.Symbol(null,"func-name","func-name",(-690076933),null),new cljs.core.Symbol(null,"timestamp-msec","timestamp-msec",(53137187),null)], null)),null,(cljs.core.truth_(gadjett.core_fn.add_event)?gadjett.core_fn.add_event.cljs$lang$test:null)])));})()
;
(function (){
gadjett.core_fn.record_function_call = (function gadjett$core_fn$record_function_call(func_name,args){
cljs.core.swap_BANG_.call(null,gadjett.core_fn.history,gadjett.core_fn.add_event,func_name,(new Date()).valueOf());

return (cljs.core.count.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,gadjett.core_fn.history),func_name)) <= new cljs.core.Keyword(null,"max-function-calls","max-function-calls",(-350003092)).cljs$core$IFn$_invoke$arity$1(gadjett.core_fn.settings));
}); return (
new cljs.core.Var(function(){return gadjett.core_fn.record_function_call;},new cljs.core.Symbol("gadjett.core-fn","record-function-call","gadjett.core-fn/record-function-call",(421969988),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core-fn","gadjett.core-fn",(-807586245),null),new cljs.core.Symbol(null,"record-function-call","record-function-call",(-533265221),null),"gadjett/core_fn.cljc",(27),(1),(25),(25),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func-name","func-name",(-690076933),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(gadjett.core_fn.record_function_call)?gadjett.core_fn.record_function_call.cljs$lang$test:null)])));})()
;
/**
 * returns the history sorted by number of function calls
 */
(function (){
gadjett.core_fn.sort_history = (function gadjett$core_fn$sort_history(hist){
return cljs.core.sort_by.call(null,cljs.core.second,gadjett.collections.map_object.call(null,cljs.core.count,hist));
}); return (
new cljs.core.Var(function(){return gadjett.core_fn.sort_history;},new cljs.core.Symbol("gadjett.core-fn","sort-history","gadjett.core-fn/sort-history",(1184289083),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"gadjett.core-fn","gadjett.core-fn",(-807586245),null),new cljs.core.Symbol(null,"sort-history","sort-history",(-274327924),null),"gadjett/core_fn.cljc",(20),(1),(30),(30),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hist","hist",(346445359),null)], null)),"returns the history sorted by number of function calls",(cljs.core.truth_(gadjett.core_fn.sort_history)?gadjett.core_fn.sort_history.cljs$lang$test:null)])));})()
;
/**
 * returns the history as an array, sorted by number of function calls
 */
(function (){
gadjett.core_fn.the_history = (function gadjett$core_fn$the_history(var_args){
var args272 = [];
var len__23656__auto___275 = arguments.length;
var i__23657__auto___276 = (0);
while(true){
if((i__23657__auto___276 < len__23656__auto___275)){
args272.push((arguments[i__23657__auto___276]));

var G__277 = (i__23657__auto___276 + (1));
i__23657__auto___276 = G__277;
continue;
} else {
}
break;
}

var G__274 = args272.length;
switch (G__274) {
case (1):
return gadjett.core_fn.the_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (0):
return gadjett.core_fn.the_history.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args272.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return gadjett.core_fn.the_history;},new cljs.core.Symbol("gadjett.core-fn","the-history","gadjett.core-fn/the-history",(30785976),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core-fn","gadjett.core-fn",(-807586245),null),new cljs.core.Symbol(null,"the-history","the-history",(-1698300875),null),"gadjett/core_fn.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null)], null),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null)], null),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(36),(36),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null)], null),cljs.core.PersistentVector.EMPTY),"returns the history as an array, sorted by number of function calls",(cljs.core.truth_(gadjett.core_fn.the_history)?gadjett.core_fn.the_history.cljs$lang$test:null)])));})()
;

gadjett.core_fn.the_history.cljs$core$IFn$_invoke$arity$1 = (function (k){
return cljs.core.get.call(null,cljs.core.deref.call(null,gadjett.core_fn.history),k);
});

gadjett.core_fn.the_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return gadjett.core_fn.sort_history.call(null,cljs.core.deref.call(null,gadjett.core_fn.history));
});

gadjett.core_fn.the_history.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return gadjett.core_fn.the_history;},new cljs.core.Symbol("gadjett.core-fn","the-history","gadjett.core-fn/the-history",(30785976),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core-fn","gadjett.core-fn",(-807586245),null),new cljs.core.Symbol(null,"the-history","the-history",(-1698300875),null),"gadjett/core_fn.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null)], null),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null)], null),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(36),(36),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null)], null),cljs.core.PersistentVector.EMPTY),"returns the history as an array, sorted by number of function calls",(cljs.core.truth_(gadjett.core_fn.the_history)?gadjett.core_fn.the_history.cljs$lang$test:null)]));
(function (){
gadjett.core_fn.function_call_err_msg = (function gadjett$core_fn$function_call_err_msg(func_name,args){
return [cljs.core.str(func_name),cljs.core.str(" was called too much over the last "),cljs.core.str(new cljs.core.Keyword(null,"timeslot-function-calls-msec","timeslot-function-calls-msec",(189712759)).cljs$core$IFn$_invoke$arity$1(gadjett.core_fn.settings)),cljs.core.str(" msec: "),cljs.core.str(func_name)].join('');
}); return (
new cljs.core.Var(function(){return gadjett.core_fn.function_call_err_msg;},new cljs.core.Symbol("gadjett.core-fn","function-call-err-msg","gadjett.core-fn/function-call-err-msg",(-1699083960),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.core-fn","gadjett.core-fn",(-807586245),null),new cljs.core.Symbol(null,"function-call-err-msg","function-call-err-msg",(833244373),null),"gadjett/core_fn.cljc",(28),(1),(40),(40),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func-name","func-name",(-690076933),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(gadjett.core_fn.function_call_err_msg)?gadjett.core_fn.function_call_err_msg.cljs$lang$test:null)])));})()
;
