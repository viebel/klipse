goog.provide("cljs_time.periodic");
/**
 * Returns a sequence of date-time values growing over specific period.
 *   The 2 argument function takes as input the starting value and the growing value,
 *   returning a lazy infinite sequence.
 *   The 3 argument function takes as input the starting value, the upper bound value,
 *   and the growing value, return a lazy sequence.
 */
(function (){
cljs_time.periodic.periodic_seq = (function cljs_time$periodic$periodic_seq(var_args){
var args591 = [];
var len__24987__auto___594 = arguments.length;
var i__24988__auto___595 = (0);
while(true){
if((i__24988__auto___595 < len__24987__auto___594)){
args591.push((arguments[i__24988__auto___595]));

var G__596 = (i__24988__auto___595 + (1));
i__24988__auto___595 = G__596;
continue;
} else {
}
break;
}

var G__593 = args591.length;
switch (G__593) {
case (2):
return cljs_time.periodic.periodic_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs_time.periodic.periodic_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args591.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs_time.periodic.periodic_seq;},new cljs.core.Symbol("cljs-time.periodic","periodic-seq","cljs-time.periodic/periodic-seq",(1411617313),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.periodic","cljs-time.periodic",(754239223),null),new cljs.core.Symbol(null,"periodic-seq","periodic-seq",(-1738120032),null),"cljs_time/periodic.cljs",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"period-like","period-like",(1177589578),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null),new cljs.core.Symbol(null,"period-like","period-like",(1177589578),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"period-like","period-like",(1177589578),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null),new cljs.core.Symbol(null,"period-like","period-like",(1177589578),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(6),(6),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"period-like","period-like",(1177589578),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null),new cljs.core.Symbol(null,"period-like","period-like",(1177589578),null)], null)),"Returns a sequence of date-time values growing over specific period.\n  The 2 argument function takes as input the starting value and the growing value,\n  returning a lazy infinite sequence.\n  The 3 argument function takes as input the starting value, the upper bound value,\n  and the growing value, return a lazy sequence.",(cljs.core.truth_(cljs_time.periodic.periodic_seq)?cljs_time.periodic.periodic_seq.cljs$lang$test:null)])));})()
;

cljs_time.periodic.periodic_seq.cljs$core$IFn$_invoke$arity$2 = (function (start,period_like){
var period = cljs_time.core.__GT_period.call(null,period_like);
return cljs.core.map.call(null,((function (period){
return (function (i){
return cljs_time.core.plus.call(null,start,cljs_time.internal.core.multiplied_by.call(null,period,i));
});})(period))
,cljs.core.iterate.call(null,cljs.core.inc,(0)));
});

cljs_time.periodic.periodic_seq.cljs$core$IFn$_invoke$arity$3 = (function (start,end,period_like){
var period = cljs_time.core.__GT_period.call(null,period_like);
return cljs.core.take_while.call(null,((function (period){
return (function (next){
return cljs_time.core.before_QMARK_.call(null,next,end);
});})(period))
,cljs_time.periodic.periodic_seq.call(null,start,period_like));
});

cljs_time.periodic.periodic_seq.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs_time.periodic.periodic_seq;},new cljs.core.Symbol("cljs-time.periodic","periodic-seq","cljs-time.periodic/periodic-seq",(1411617313),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.periodic","cljs-time.periodic",(754239223),null),new cljs.core.Symbol(null,"periodic-seq","periodic-seq",(-1738120032),null),"cljs_time/periodic.cljs",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"period-like","period-like",(1177589578),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null),new cljs.core.Symbol(null,"period-like","period-like",(1177589578),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"period-like","period-like",(1177589578),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null),new cljs.core.Symbol(null,"period-like","period-like",(1177589578),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(6),(6),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"period-like","period-like",(1177589578),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null),new cljs.core.Symbol(null,"period-like","period-like",(1177589578),null)], null)),"Returns a sequence of date-time values growing over specific period.\n  The 2 argument function takes as input the starting value and the growing value,\n  returning a lazy infinite sequence.\n  The 3 argument function takes as input the starting value, the upper bound value,\n  and the growing value, return a lazy sequence.",(cljs.core.truth_(cljs_time.periodic.periodic_seq)?cljs_time.periodic.periodic_seq.cljs$lang$test:null)]));
