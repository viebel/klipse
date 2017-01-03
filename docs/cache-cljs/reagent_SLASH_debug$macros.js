goog.provide("reagent.debug$macros");
/**
 * Print with console.log, if it exists.
 */
(function (){
reagent.debug$macros.log = (function reagent$debug$macros$log(var_args){
var args__23658__auto__ = [];
var len__23656__auto___25 = arguments.length;
var i__23657__auto___26 = (0);
while(true){
if((i__23657__auto___26 < len__23656__auto___25)){
args__23658__auto__.push((arguments[i__23657__auto___26]));

var G__27 = (i__23657__auto___26 + (1));
i__23657__auto___26 = G__27;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((2) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return reagent.debug$macros.log;},new cljs.core.Symbol("reagent.debug$macros","log","reagent.debug$macros/log",(957929039),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.debug$macros","reagent.debug$macros",(-1509227347),null),new cljs.core.Symbol(null,"log","log",(45015523),null),"reagent/debug.clj",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(4),true,(4),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),"Print with console.log, if it exists.",(cljs.core.truth_(reagent.debug$macros.log)?reagent.debug$macros.log.cljs$lang$test:null)])));})()
;

reagent.debug$macros.log.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("reagent","debug.has-console","reagent/debug.has-console",(2026596796),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".log",".log",(565247729),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","console","js/console",(-1426368245),null)),forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
});

reagent.debug$macros.log.cljs$lang$maxFixedArity = (2);

reagent.debug$macros.log.cljs$lang$applyTo = (function (seq22){
var G__23 = cljs.core.first.call(null,seq22);
var seq22__$1 = cljs.core.next.call(null,seq22);
var G__24 = cljs.core.first.call(null,seq22__$1);
var seq22__$2 = cljs.core.next.call(null,seq22__$1);
return reagent.debug$macros.log.cljs$core$IFn$_invoke$arity$variadic(G__23,G__24,seq22__$2);
});

new cljs.core.Var(function(){return reagent.debug$macros.log;},new cljs.core.Symbol("reagent.debug$macros","log","reagent.debug$macros/log",(957929039),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.debug$macros","reagent.debug$macros",(-1509227347),null),new cljs.core.Symbol(null,"log","log",(45015523),null),"reagent/debug.clj",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(4),true,(4),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),"Print with console.log, if it exists.",(cljs.core.truth_(reagent.debug$macros.log)?reagent.debug$macros.log.cljs$lang$test:null)]));

reagent.debug$macros.log.cljs$lang$macro = true;
/**
 * Print with console.warn.
 */
(function (){
reagent.debug$macros.warn = (function reagent$debug$macros$warn(var_args){
var args__23658__auto__ = [];
var len__23656__auto___31 = arguments.length;
var i__23657__auto___32 = (0);
while(true){
if((i__23657__auto___32 < len__23656__auto___31)){
args__23658__auto__.push((arguments[i__23657__auto___32]));

var G__33 = (i__23657__auto___32 + (1));
i__23657__auto___32 = G__33;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((2) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return reagent.debug$macros.warn;},new cljs.core.Symbol("reagent.debug$macros","warn","reagent.debug$macros/warn",(1218098003),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.debug$macros","reagent.debug$macros",(-1509227347),null),new cljs.core.Symbol(null,"warn","warn",(1203820975),null),"reagent/debug.clj",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(10),true,(10),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),"Print with console.warn.",(cljs.core.truth_(reagent.debug$macros.warn)?reagent.debug$macros.warn.cljs$lang$test:null)])));})()
;

reagent.debug$macros.warn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("reagent","debug.has-console","reagent/debug.has-console",(2026596796),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".warn",".warn",(-2099751158),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("reagent","debug.tracking","reagent/debug.tracking",(-250559491),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("reagent","debug.track-console","reagent/debug.track-console",(-537765058),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","console","js/console",(-1426368245),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Warning: "),forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
} else {
return null;
}
});

reagent.debug$macros.warn.cljs$lang$maxFixedArity = (2);

reagent.debug$macros.warn.cljs$lang$applyTo = (function (seq28){
var G__29 = cljs.core.first.call(null,seq28);
var seq28__$1 = cljs.core.next.call(null,seq28);
var G__30 = cljs.core.first.call(null,seq28__$1);
var seq28__$2 = cljs.core.next.call(null,seq28__$1);
return reagent.debug$macros.warn.cljs$core$IFn$_invoke$arity$variadic(G__29,G__30,seq28__$2);
});

new cljs.core.Var(function(){return reagent.debug$macros.warn;},new cljs.core.Symbol("reagent.debug$macros","warn","reagent.debug$macros/warn",(1218098003),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.debug$macros","reagent.debug$macros",(-1509227347),null),new cljs.core.Symbol(null,"warn","warn",(1203820975),null),"reagent/debug.clj",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(10),true,(10),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),"Print with console.warn.",(cljs.core.truth_(reagent.debug$macros.warn)?reagent.debug$macros.warn.cljs$lang$test:null)]));

reagent.debug$macros.warn.cljs$lang$macro = true;
(function (){
reagent.debug$macros.warn_unless = (function reagent$debug$macros$warn_unless(var_args){
var args__23658__auto__ = [];
var len__23656__auto___38 = arguments.length;
var i__23657__auto___39 = (0);
while(true){
if((i__23657__auto___39 < len__23656__auto___38)){
args__23658__auto__.push((arguments[i__23657__auto___39]));

var G__40 = (i__23657__auto___39 + (1));
i__23657__auto___39 = G__40;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((3) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((3)),(0),null)):null);
return reagent.debug$macros.warn_unless.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return reagent.debug$macros.warn_unless;},new cljs.core.Symbol("reagent.debug$macros","warn-unless","reagent.debug$macros/warn-unless",(1310371864),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.debug$macros","reagent.debug$macros",(-1509227347),null),new cljs.core.Symbol(null,"warn-unless","warn-unless",(1406234468),null),"reagent/debug.clj",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"cond","cond",(1606708055),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"cond","cond",(1606708055),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(19),true,(19),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"cond","cond",(1606708055),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),null,(cljs.core.truth_(reagent.debug$macros.warn_unless)?reagent.debug$macros.warn_unless.cljs$lang$test:null)])));})()
;

reagent.debug$macros.warn_unless.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,cond,forms){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",(100665144),null)),(function (){var x__23399__auto__ = cond;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("reagent.debug","warn","reagent.debug/warn",(-503321706),null)),forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
} else {
return null;
}
});

reagent.debug$macros.warn_unless.cljs$lang$maxFixedArity = (3);

reagent.debug$macros.warn_unless.cljs$lang$applyTo = (function (seq34){
var G__35 = cljs.core.first.call(null,seq34);
var seq34__$1 = cljs.core.next.call(null,seq34);
var G__36 = cljs.core.first.call(null,seq34__$1);
var seq34__$2 = cljs.core.next.call(null,seq34__$1);
var G__37 = cljs.core.first.call(null,seq34__$2);
var seq34__$3 = cljs.core.next.call(null,seq34__$2);
return reagent.debug$macros.warn_unless.cljs$core$IFn$_invoke$arity$variadic(G__35,G__36,G__37,seq34__$3);
});

new cljs.core.Var(function(){return reagent.debug$macros.warn_unless;},new cljs.core.Symbol("reagent.debug$macros","warn-unless","reagent.debug$macros/warn-unless",(1310371864),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.debug$macros","reagent.debug$macros",(-1509227347),null),new cljs.core.Symbol(null,"warn-unless","warn-unless",(1406234468),null),"reagent/debug.clj",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"cond","cond",(1606708055),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"cond","cond",(1606708055),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(19),true,(19),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"cond","cond",(1606708055),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),null,(cljs.core.truth_(reagent.debug$macros.warn_unless)?reagent.debug$macros.warn_unless.cljs$lang$test:null)]));

reagent.debug$macros.warn_unless.cljs$lang$macro = true;
/**
 * Print with console.error.
 */
(function (){
reagent.debug$macros.error = (function reagent$debug$macros$error(var_args){
var args__23658__auto__ = [];
var len__23656__auto___44 = arguments.length;
var i__23657__auto___45 = (0);
while(true){
if((i__23657__auto___45 < len__23656__auto___44)){
args__23658__auto__.push((arguments[i__23657__auto___45]));

var G__46 = (i__23657__auto___45 + (1));
i__23657__auto___45 = G__46;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((2) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return reagent.debug$macros.error;},new cljs.core.Symbol("reagent.debug$macros","error","reagent.debug$macros/error",(304389843),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.debug$macros","reagent.debug$macros",(-1509227347),null),new cljs.core.Symbol(null,"error","error",(661562495),null),"reagent/debug.clj",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(25),true,(25),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),"Print with console.error.",(cljs.core.truth_(reagent.debug$macros.error)?reagent.debug$macros.error.cljs$lang$test:null)])));})()
;

reagent.debug$macros.error.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("reagent","debug.has-console","reagent/debug.has-console",(2026596796),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".error",".error",(1756007195),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("reagent","debug.tracking","reagent/debug.tracking",(-250559491),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("reagent","debug.track-console","reagent/debug.track-console",(-537765058),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","console","js/console",(-1426368245),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
} else {
return null;
}
});

reagent.debug$macros.error.cljs$lang$maxFixedArity = (2);

reagent.debug$macros.error.cljs$lang$applyTo = (function (seq41){
var G__42 = cljs.core.first.call(null,seq41);
var seq41__$1 = cljs.core.next.call(null,seq41);
var G__43 = cljs.core.first.call(null,seq41__$1);
var seq41__$2 = cljs.core.next.call(null,seq41__$1);
return reagent.debug$macros.error.cljs$core$IFn$_invoke$arity$variadic(G__42,G__43,seq41__$2);
});

new cljs.core.Var(function(){return reagent.debug$macros.error;},new cljs.core.Symbol("reagent.debug$macros","error","reagent.debug$macros/error",(304389843),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.debug$macros","reagent.debug$macros",(-1509227347),null),new cljs.core.Symbol(null,"error","error",(661562495),null),"reagent/debug.clj",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(25),true,(25),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),"Print with console.error.",(cljs.core.truth_(reagent.debug$macros.error)?reagent.debug$macros.error.cljs$lang$test:null)]));

reagent.debug$macros.error.cljs$lang$macro = true;
/**
 * Print string with console.log
 */
(function (){
reagent.debug$macros.println = (function reagent$debug$macros$println(var_args){
var args__23658__auto__ = [];
var len__23656__auto___50 = arguments.length;
var i__23657__auto___51 = (0);
while(true){
if((i__23657__auto___51 < len__23656__auto___50)){
args__23658__auto__.push((arguments[i__23657__auto___51]));

var G__52 = (i__23657__auto___51 + (1));
i__23657__auto___51 = G__52;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((2) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.println.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return reagent.debug$macros.println;},new cljs.core.Symbol("reagent.debug$macros","println","reagent.debug$macros/println",(-645132531),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.debug$macros","reagent.debug$macros",(-1509227347),null),new cljs.core.Symbol(null,"println","println",(-733595439),null),"reagent/debug.clj",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(34),true,(34),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),"Print string with console.log",(cljs.core.truth_(reagent.debug$macros.println)?reagent.debug$macros.println.cljs$lang$test:null)])));})()
;

reagent.debug$macros.println.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("reagent.debug","log","reagent.debug/log",(-528007284),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
});

reagent.debug$macros.println.cljs$lang$maxFixedArity = (2);

reagent.debug$macros.println.cljs$lang$applyTo = (function (seq47){
var G__48 = cljs.core.first.call(null,seq47);
var seq47__$1 = cljs.core.next.call(null,seq47);
var G__49 = cljs.core.first.call(null,seq47__$1);
var seq47__$2 = cljs.core.next.call(null,seq47__$1);
return reagent.debug$macros.println.cljs$core$IFn$_invoke$arity$variadic(G__48,G__49,seq47__$2);
});

new cljs.core.Var(function(){return reagent.debug$macros.println;},new cljs.core.Symbol("reagent.debug$macros","println","reagent.debug$macros/println",(-645132531),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.debug$macros","reagent.debug$macros",(-1509227347),null),new cljs.core.Symbol(null,"println","println",(-733595439),null),"reagent/debug.clj",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(34),true,(34),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),"Print string with console.log",(cljs.core.truth_(reagent.debug$macros.println)?reagent.debug$macros.println.cljs$lang$test:null)]));

reagent.debug$macros.println.cljs$lang$macro = true;
/**
 * Like standard prn, but prints using console.log (so that we get
 * nice clickable links to source in modern browsers).
 */
(function (){
reagent.debug$macros.prn = (function reagent$debug$macros$prn(var_args){
var args__23658__auto__ = [];
var len__23656__auto___56 = arguments.length;
var i__23657__auto___57 = (0);
while(true){
if((i__23657__auto___57 < len__23656__auto___56)){
args__23658__auto__.push((arguments[i__23657__auto___57]));

var G__58 = (i__23657__auto___57 + (1));
i__23657__auto___57 = G__58;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((2) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.prn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return reagent.debug$macros.prn;},new cljs.core.Symbol("reagent.debug$macros","prn","reagent.debug$macros/prn",(1381958913),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.debug$macros","reagent.debug$macros",(-1509227347),null),new cljs.core.Symbol(null,"prn","prn",(1561684909),null),"reagent/debug.clj",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(39),true,(39),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),"Like standard prn, but prints using console.log (so that we get\nnice clickable links to source in modern browsers).",(cljs.core.truth_(reagent.debug$macros.prn)?reagent.debug$macros.prn.cljs$lang$test:null)])));})()
;

reagent.debug$macros.prn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("reagent.debug","log","reagent.debug/log",(-528007284),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",(-552799478),null)),forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
});

reagent.debug$macros.prn.cljs$lang$maxFixedArity = (2);

reagent.debug$macros.prn.cljs$lang$applyTo = (function (seq53){
var G__54 = cljs.core.first.call(null,seq53);
var seq53__$1 = cljs.core.next.call(null,seq53);
var G__55 = cljs.core.first.call(null,seq53__$1);
var seq53__$2 = cljs.core.next.call(null,seq53__$1);
return reagent.debug$macros.prn.cljs$core$IFn$_invoke$arity$variadic(G__54,G__55,seq53__$2);
});

new cljs.core.Var(function(){return reagent.debug$macros.prn;},new cljs.core.Symbol("reagent.debug$macros","prn","reagent.debug$macros/prn",(1381958913),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.debug$macros","reagent.debug$macros",(-1509227347),null),new cljs.core.Symbol(null,"prn","prn",(1561684909),null),"reagent/debug.clj",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(39),true,(39),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),"Like standard prn, but prints using console.log (so that we get\nnice clickable links to source in modern browsers).",(cljs.core.truth_(reagent.debug$macros.prn)?reagent.debug$macros.prn.cljs$lang$test:null)]));

reagent.debug$macros.prn.cljs$lang$macro = true;
/**
 * Useful debugging macro that prints the source and value of x,
 * as well as package name and line number. Returns x.
 */
(function (){
reagent.debug$macros.dbg = (function reagent$debug$macros$dbg(_AMPERSAND_form,_AMPERSAND_env,x){
var ns = [cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join('');
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__1__auto__","x__1__auto__",(-2136603537),null)),(function (){var x__23399__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("reagent.debug","println","reagent.debug/println",(1987012298),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"dbg "),(function (){var x__23399__auto__ = ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,":"),(function (){var x__23399__auto__ = new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,": "),(function (){var x__23399__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,": "),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",(-552799478),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__1__auto__","x__1__auto__",(-2136603537),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__1__auto__","x__1__auto__",(-2136603537),null))));
}); return (
new cljs.core.Var(function(){return reagent.debug$macros.dbg;},new cljs.core.Symbol("reagent.debug$macros","dbg","reagent.debug$macros/dbg",(1988123229),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.debug$macros","reagent.debug$macros",(-1509227347),null),new cljs.core.Symbol(null,"dbg","dbg",(1843299081),null),"reagent/debug.clj",(14),(1),(45),true,(45),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Useful debugging macro that prints the source and value of x,\nas well as package name and line number. Returns x.",(cljs.core.truth_(reagent.debug$macros.dbg)?reagent.debug$macros.dbg.cljs$lang$test:null)])));})()
;

reagent.debug$macros.dbg.cljs$lang$macro = true;
/**
 * True if assertions are enabled.
 */
(function (){
reagent.debug$macros.dev_QMARK_ = (function reagent$debug$macros$dev_QMARK_(_AMPERSAND_form,_AMPERSAND_env){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return true;
} else {
return false;
}
}); return (
new cljs.core.Var(function(){return reagent.debug$macros.dev_QMARK_;},new cljs.core.Symbol("reagent.debug$macros","dev?","reagent.debug$macros/dev?",(680409787),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.debug$macros","reagent.debug$macros",(-1509227347),null),new cljs.core.Symbol(null,"dev?","dev?",(1026560463),null),"reagent/debug.clj",(15),(1),(60),true,(60),cljs.core.list(cljs.core.PersistentVector.EMPTY),"True if assertions are enabled.",(cljs.core.truth_(reagent.debug$macros.dev_QMARK_)?reagent.debug$macros.dev_QMARK_.cljs$lang$test:null)])));})()
;

reagent.debug$macros.dev_QMARK_.cljs$lang$macro = true;
(function (){
reagent.debug$macros.time = (function reagent$debug$macros$time(var_args){
var args__23658__auto__ = [];
var len__23656__auto___62 = arguments.length;
var i__23657__auto___63 = (0);
while(true){
if((i__23657__auto___63 < len__23656__auto___62)){
args__23658__auto__.push((arguments[i__23657__auto___63]));

var G__64 = (i__23657__auto___63 + (1));
i__23657__auto___63 = G__64;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((2) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return reagent.debug$macros.time;},new cljs.core.Symbol("reagent.debug$macros","time","reagent.debug$macros/time",(-1598512795),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.debug$macros","reagent.debug$macros",(-1509227347),null),new cljs.core.Symbol(null,"time","time",(-1268547887),null),"reagent/debug.clj",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(65),true,(65),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),null,(cljs.core.truth_(reagent.debug$macros.time)?reagent.debug$macros.time.cljs$lang$test:null)])));})()
;

reagent.debug$macros.time.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
var ns = [cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join('');
var label = [cljs.core.str(ns),cljs.core.str(":"),cljs.core.str(new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form)))].join('');
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"label__2__auto__","label__2__auto__",(-673991267),null)),(function (){var x__23399__auto__ = label;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"res__3__auto__","res__3__auto__",(-1686286579),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","console.time","js/console.time",(891683584),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"label__2__auto__","label__2__auto__",(-673991267),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","console.timeEnd","js/console.timeEnd",(274714029),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"label__2__auto__","label__2__auto__",(-673991267),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"res__3__auto__","res__3__auto__",(-1686286579),null))));
});

reagent.debug$macros.time.cljs$lang$maxFixedArity = (2);

reagent.debug$macros.time.cljs$lang$applyTo = (function (seq59){
var G__60 = cljs.core.first.call(null,seq59);
var seq59__$1 = cljs.core.next.call(null,seq59);
var G__61 = cljs.core.first.call(null,seq59__$1);
var seq59__$2 = cljs.core.next.call(null,seq59__$1);
return reagent.debug$macros.time.cljs$core$IFn$_invoke$arity$variadic(G__60,G__61,seq59__$2);
});

new cljs.core.Var(function(){return reagent.debug$macros.time;},new cljs.core.Symbol("reagent.debug$macros","time","reagent.debug$macros/time",(-1598512795),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.debug$macros","reagent.debug$macros",(-1509227347),null),new cljs.core.Symbol(null,"time","time",(-1268547887),null),"reagent/debug.clj",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(65),true,(65),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),null,(cljs.core.truth_(reagent.debug$macros.time)?reagent.debug$macros.time.cljs$lang$test:null)]));

reagent.debug$macros.time.cljs$lang$macro = true;
