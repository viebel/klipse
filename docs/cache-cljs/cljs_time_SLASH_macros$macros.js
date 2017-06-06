goog.provide("cljs_time.macros$macros");
var ret__25038__auto___26 = (function (){
/**
 * Like clojure.core/do except evalautes the expression at the given date-time
 */
(function (){
cljs_time.macros$macros.do_at = (function cljs_time$macros$macros$do_at(var_args){
var args__24990__auto__ = [];
var len__24987__auto___27 = arguments.length;
var i__24988__auto___28 = (0);
while(true){
if((i__24988__auto___28 < len__24987__auto___27)){
args__24990__auto__.push((arguments[i__24988__auto___28]));

var G__29 = (i__24988__auto___28 + (1));
i__24988__auto___28 = G__29;
continue;
} else {
}
break;
}

var argseq__24991__auto__ = ((((3) < args__24990__auto__.length))?(new cljs.core.IndexedSeq(args__24990__auto__.slice((3)),(0),null)):null);
return cljs_time.macros$macros.do_at.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__24991__auto__);
}); return (
new cljs.core.Var(function(){return cljs_time.macros$macros.do_at;},new cljs.core.Symbol("cljs-time.macros$macros","do-at","cljs-time.macros$macros/do-at",(1270339566),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.macros$macros","cljs-time.macros$macros",(308848260),null),new cljs.core.Symbol(null,"do-at","do-at",(1955423244),null),"cljs_time/macros.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"base-date-time","base-date-time",(1088385781),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"base-date-time","base-date-time",(1088385781),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(3),true,(3),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"base-date-time","base-date-time",(1088385781),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Like clojure.core/do except evalautes the expression at the given date-time",(cljs.core.truth_(cljs_time.macros$macros.do_at)?cljs_time.macros$macros.do_at.cljs$lang$test:null)])));})()
;

cljs_time.macros$macros.do_at.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,base_date_time,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs-time.core","do-at*","cljs-time.core/do-at*",(-1240004926),null)),(function (){var x__24698__auto__ = base_date_time;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),(function (){var x__24698__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__24698__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})()));
});

cljs_time.macros$macros.do_at.cljs$lang$maxFixedArity = (3);

cljs_time.macros$macros.do_at.cljs$lang$applyTo = (function (seq22){
var G__23 = cljs.core.first.call(null,seq22);
var seq22__$1 = cljs.core.next.call(null,seq22);
var G__24 = cljs.core.first.call(null,seq22__$1);
var seq22__$2 = cljs.core.next.call(null,seq22__$1);
var G__25 = cljs.core.first.call(null,seq22__$2);
var seq22__$3 = cljs.core.next.call(null,seq22__$2);
return cljs_time.macros$macros.do_at.cljs$core$IFn$_invoke$arity$variadic(G__23,G__24,G__25,seq22__$3);
});

return new cljs.core.Var(function(){return cljs_time.macros$macros.do_at;},new cljs.core.Symbol("cljs-time.macros$macros","do-at","cljs-time.macros$macros/do-at",(1270339566),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.macros$macros","cljs-time.macros$macros",(308848260),null),new cljs.core.Symbol(null,"do-at","do-at",(1955423244),null),"cljs_time/macros.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"base-date-time","base-date-time",(1088385781),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"base-date-time","base-date-time",(1088385781),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(3),true,(3),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"base-date-time","base-date-time",(1088385781),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Like clojure.core/do except evalautes the expression at the given date-time",(cljs.core.truth_(cljs_time.macros$macros.do_at)?cljs_time.macros$macros.do_at.cljs$lang$test:null)]));
})()
;
cljs_time.macros$macros.do_at.cljs$lang$macro = true;

