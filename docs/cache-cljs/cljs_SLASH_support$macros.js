goog.provide("cljs.support$macros");
var ret__23200__auto___3447 = (function (){
/**
 * Internal - do not use!
 */
(function (){
cljs.support$macros.assert_args = (function cljs$support$macros$assert_args(var_args){
var args__23177__auto__ = [];
var len__23174__auto___3448 = arguments.length;
var i__23175__auto___3449 = (0);
while(true){
if((i__23175__auto___3449 < len__23174__auto___3448)){
args__23177__auto__.push((arguments[i__23175__auto___3449]));

var G__3450 = (i__23175__auto___3449 + (1));
i__23175__auto___3449 = G__3450;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((3) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((3)),(0),null)):null);
return cljs.support$macros.assert_args.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23178__auto__);
}); return (
new cljs.core.Var(function(){return cljs.support$macros.assert_args;},new cljs.core.Symbol("cljs.support$macros","assert-args","cljs.support$macros/assert-args",(284804729),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.support$macros","cljs.support$macros",(-765430829),null),new cljs.core.Symbol(null,"assert-args","assert-args",(-1749104431),null),"cljs/support.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"fnname","fnname",(-1493224750),null),new cljs.core.Symbol(null,"pairs","pairs",(-2039825990),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"fnname","fnname",(-1493224750),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"pairs","pairs",(-2039825990),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(11),true,(11),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"fnname","fnname",(-1493224750),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"pairs","pairs",(-2039825990),null)], null)),"Internal - do not use!",(cljs.core.truth_(cljs.support$macros.assert_args)?cljs.support$macros.assert_args.cljs$lang$test:null)])));})()
;

cljs.support$macros.assert_args.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnname,pairs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",(-556141047),null)),(function (){var x__22880__auto__ = cljs.core.first(pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",(595905694),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",(-409744395),null)),(function (){var x__22880__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fnname)," requires ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(pairs))].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = (function (){var more = cljs.core.nnext(pairs);
if(cljs.core.truth_(more)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("cljs.support","assert-args","cljs.support/assert-args",(-1359206108),null),fnname,more);
} else {
return null;
}
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
});

cljs.support$macros.assert_args.cljs$lang$maxFixedArity = (3);

cljs.support$macros.assert_args.cljs$lang$applyTo = (function (seq3443){
var G__3444 = cljs.core.first(seq3443);
var seq3443__$1 = cljs.core.next(seq3443);
var G__3445 = cljs.core.first(seq3443__$1);
var seq3443__$2 = cljs.core.next(seq3443__$1);
var G__3446 = cljs.core.first(seq3443__$2);
var seq3443__$3 = cljs.core.next(seq3443__$2);
return cljs.support$macros.assert_args.cljs$core$IFn$_invoke$arity$variadic(G__3444,G__3445,G__3446,seq3443__$3);
});

return new cljs.core.Var(function(){return cljs.support$macros.assert_args;},new cljs.core.Symbol("cljs.support$macros","assert-args","cljs.support$macros/assert-args",(284804729),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.support$macros","cljs.support$macros",(-765430829),null),new cljs.core.Symbol(null,"assert-args","assert-args",(-1749104431),null),"cljs/support.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"fnname","fnname",(-1493224750),null),new cljs.core.Symbol(null,"pairs","pairs",(-2039825990),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"fnname","fnname",(-1493224750),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"pairs","pairs",(-2039825990),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(11),true,(11),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"fnname","fnname",(-1493224750),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"pairs","pairs",(-2039825990),null)], null)),"Internal - do not use!",(cljs.core.truth_(cljs.support$macros.assert_args)?cljs.support$macros.assert_args.cljs$lang$test:null)]));
})()
;
cljs.support$macros.assert_args.cljs$lang$macro = true;

