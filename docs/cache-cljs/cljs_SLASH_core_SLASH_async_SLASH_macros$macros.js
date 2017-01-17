goog.provide("cljs.core.async.macros$macros");
/**
 * Asynchronously executes the body, returning immediately to the
 *   calling thread. Additionally, any visible calls to <!, >! and alt!/alts!
 *   channel operations within the body will block (if necessary) by
 *   'parking' the calling thread rather than tying up an OS thread (or
 *   the only JS thread when in ClojureScript). Upon completion of the
 *   operation, the body will be resumed.
 * 
 *   Returns a channel which will receive the result of the body when
 *   completed
 */
(function (){
cljs.core.async.macros$macros.go = (function cljs$core$async$macros$macros$go(var_args){
var args__23658__auto__ = [];
var len__23656__auto___907 = arguments.length;
var i__23657__auto___908 = (0);
while(true){
if((i__23657__auto___908 < len__23656__auto___907)){
args__23658__auto__.push((arguments[i__23657__auto___908]));

var G__909 = (i__23657__auto___908 + (1));
i__23657__auto___908 = G__909;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((2) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((2)),(0),null)):null);
return cljs.core.async.macros$macros.go.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return cljs.core.async.macros$macros.go;},new cljs.core.Symbol("cljs.core.async.macros$macros","go","cljs.core.async.macros$macros/go",(-530996881),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.macros$macros","cljs.core.async.macros$macros",(-1631442596),null),new cljs.core.Symbol(null,"go","go",(1493584872),null),"cljs/core/async/macros.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(5),true,(5),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Asynchronously executes the body, returning immediately to the\n  calling thread. Additionally, any visible calls to <!, >! and alt!/alts!\n  channel operations within the body will block (if necessary) by\n  'parking' the calling thread rather than tying up an OS thread (or\n  the only JS thread when in ClojureScript). Upon completion of the\n  operation, the body will be resumed.\n\n  Returns a channel which will receive the result of the body when\n  completed",(cljs.core.truth_(cljs.core.async.macros$macros.go)?cljs.core.async.macros$macros.go.cljs$lang$test:null)])));})()
;

cljs.core.async.macros$macros.go.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__8__auto__","c__8__auto__",(-894046096),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async","chan","cljs.core.async/chan",(589627473),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async.impl.dispatch","run","cljs.core.async.impl.dispatch/run",(1404881359),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__9__auto__","f__9__auto__",(-1190219440),null)),(function (){var x__23399__auto__ = cljs.core.async.impl.ioc_macros_runtime.state_machine.call(null,body,(1),_AMPERSAND_env,cljs.core.async.impl.ioc_macros_runtime.async_custom_terminators);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"state__10__auto__","state__10__auto__",(1689885247),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",(1488366311),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__9__auto__","f__9__auto__",(-1190219440),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async.impl.ioc-helpers","USER-START-IDX","cljs.core.async.impl.ioc-helpers/USER-START-IDX",(1543304914),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__8__auto__","c__8__auto__",(-894046096),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async.impl.ioc-helpers","run-state-machine-wrapped","cljs.core.async.impl.ioc-helpers/run-state-machine-wrapped",(-1978728889),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"state__10__auto__","state__10__auto__",(1689885247),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__8__auto__","c__8__auto__",(-894046096),null))));
});

cljs.core.async.macros$macros.go.cljs$lang$maxFixedArity = (2);

cljs.core.async.macros$macros.go.cljs$lang$applyTo = (function (seq904){
var G__905 = cljs.core.first.call(null,seq904);
var seq904__$1 = cljs.core.next.call(null,seq904);
var G__906 = cljs.core.first.call(null,seq904__$1);
var seq904__$2 = cljs.core.next.call(null,seq904__$1);
return cljs.core.async.macros$macros.go.cljs$core$IFn$_invoke$arity$variadic(G__905,G__906,seq904__$2);
});

new cljs.core.Var(function(){return cljs.core.async.macros$macros.go;},new cljs.core.Symbol("cljs.core.async.macros$macros","go","cljs.core.async.macros$macros/go",(-530996881),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.macros$macros","cljs.core.async.macros$macros",(-1631442596),null),new cljs.core.Symbol(null,"go","go",(1493584872),null),"cljs/core/async/macros.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(5),true,(5),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Asynchronously executes the body, returning immediately to the\n  calling thread. Additionally, any visible calls to <!, >! and alt!/alts!\n  channel operations within the body will block (if necessary) by\n  'parking' the calling thread rather than tying up an OS thread (or\n  the only JS thread when in ClojureScript). Upon completion of the\n  operation, the body will be resumed.\n\n  Returns a channel which will receive the result of the body when\n  completed",(cljs.core.truth_(cljs.core.async.macros$macros.go)?cljs.core.async.macros$macros.go.cljs$lang$test:null)]));

cljs.core.async.macros$macros.go.cljs$lang$macro = true;
(function (){
cljs.core.async.macros$macros.do_alt = (function cljs$core$async$macros$macros$do_alt(alts,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("unbalanced clauses"),cljs.core.str("\n"),cljs.core.str("(even? (count clauses))")].join('')));
}

var clauses__$1 = cljs.core.partition.call(null,(2),clauses);
var opt_QMARK_ = ((function (clauses__$1){
return (function (p1__11_SHARP_){
return (cljs.core.first.call(null,p1__11_SHARP_) instanceof cljs.core.Keyword);
});})(clauses__$1))
;
var opts = cljs.core.filter.call(null,opt_QMARK_,clauses__$1);
var clauses__$2 = cljs.core.remove.call(null,opt_QMARK_,clauses__$1);
var vec__939 = cljs.core.reduce.call(null,((function (clauses__$1,opt_QMARK_,opts,clauses__$2){
return (function (p__942,p__943){
var vec__944 = p__942;
var clauses__$3 = cljs.core.nth.call(null,vec__944,(0),null);
var bindings = cljs.core.nth.call(null,vec__944,(1),null);
var vec__947 = p__943;
var ports = cljs.core.nth.call(null,vec__947,(0),null);
var expr = cljs.core.nth.call(null,vec__947,(1),null);
var ports__$1 = ((cljs.core.vector_QMARK_.call(null,ports))?ports:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ports], null));
var vec__950 = cljs.core.reduce.call(null,((function (ports__$1,vec__944,clauses__$3,bindings,vec__947,ports,expr,clauses__$1,opt_QMARK_,opts,clauses__$2){
return (function (p__953,port){
var vec__954 = p__953;
var ports__$2 = cljs.core.nth.call(null,vec__954,(0),null);
var bindings__$1 = cljs.core.nth.call(null,vec__954,(1),null);
if(cljs.core.vector_QMARK_.call(null,port)){
var vec__957 = port;
var port__$1 = cljs.core.nth.call(null,vec__957,(0),null);
var val = cljs.core.nth.call(null,vec__957,(1),null);
var gp = cljs.core.gensym.call(null);
var gv = cljs.core.gensym.call(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,ports__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gp,gv], null)),cljs.core.conj.call(null,bindings__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gp,port__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gv,val], null))], null);
} else {
var gp = cljs.core.gensym.call(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,ports__$2,gp),cljs.core.conj.call(null,bindings__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gp,port], null))], null);
}
});})(ports__$1,vec__944,clauses__$3,bindings,vec__947,ports,expr,clauses__$1,opt_QMARK_,opts,clauses__$2))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,bindings], null),ports__$1);
var ports__$2 = cljs.core.nth.call(null,vec__950,(0),null);
var bindings__$1 = cljs.core.nth.call(null,vec__950,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,clauses__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ports__$2,expr], null)),bindings__$1], null);
});})(clauses__$1,opt_QMARK_,opts,clauses__$2))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),clauses__$2);
var clauses__$3 = cljs.core.nth.call(null,vec__939,(0),null);
var bindings = cljs.core.nth.call(null,vec__939,(1),null);
var gch = cljs.core.gensym.call(null,"ch");
var gret = cljs.core.gensym.call(null,"ret");
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,cljs.core.identity,bindings),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"val__12__auto__","val__12__auto__",(-1600171820),null)),(function (){var x__23399__auto__ = gch;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"as","as",(1148689641))),(function (){var x__23399__auto__ = gret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = alts;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,cljs.core.first,clauses__$3)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core.apply.call(null,cljs.core.concat,opts)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",(2005388338),null)),cljs.core.mapcat.call(null,((function (clauses__$1,opt_QMARK_,opts,clauses__$2,vec__939,clauses__$3,bindings,gch,gret){
return (function (p__964){
var vec__965 = p__964;
var ports = cljs.core.nth.call(null,vec__965,(0),null);
var expr = cljs.core.nth.call(null,vec__965,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),cljs.core.map.call(null,((function (vec__965,ports,expr,clauses__$1,opt_QMARK_,opts,clauses__$2,vec__939,clauses__$3,bindings,gch,gret){
return (function (port){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null)),(function (){var x__23399__auto__ = gch;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = ((cljs.core.vector_QMARK_.call(null,port))?cljs.core.first.call(null,port):port);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
});})(vec__965,ports,expr,clauses__$1,opt_QMARK_,opts,clauses__$2,vec__939,clauses__$3,bindings,gch,gret))
,ports))),(((cljs.core.seq_QMARK_.call(null,expr)) && (cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,expr))))?cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = cljs.core.first.call(null,expr);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = gret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core.rest.call(null,expr))):expr)], null);
});})(clauses__$1,opt_QMARK_,opts,clauses__$2,vec__939,clauses__$3,bindings,gch,gret))
,clauses__$3),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null)),(function (){var x__23399__auto__ = gch;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"default","default",(-1987822328)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"val__12__auto__","val__12__auto__",(-1600171820),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
}); return (
new cljs.core.Var(function(){return cljs.core.async.macros$macros.do_alt;},new cljs.core.Symbol("cljs.core.async.macros$macros","do-alt","cljs.core.async.macros$macros/do-alt",(-90052097),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.macros$macros","cljs.core.async.macros$macros",(-1631442596),null),new cljs.core.Symbol(null,"do-alt","do-alt",(1567527550),null),"cljs/core/async/macros.cljc",(13),(1),(26),(26),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alts","alts",(-2006883353),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),null,(cljs.core.truth_(cljs.core.async.macros$macros.do_alt)?cljs.core.async.macros$macros.do_alt.cljs$lang$test:null)])));})()
;
/**
 * Makes a single choice between one of several channel operations,
 *   as if by alts!, returning the value of the result expr corresponding
 *   to the operation completed. Must be called inside a (go ...) block.
 * 
 *   Each clause takes the form of:
 * 
 *   channel-op[s] result-expr
 * 
 *   where channel-ops is one of:
 * 
 *   take-port - a single port to take
 *   [take-port | [put-port put-val] ...] - a vector of ports as per alts!
 *   :default | :priority - an option for alts!
 * 
 *   and result-expr is either a list beginning with a vector, whereupon that
 *   vector will be treated as a binding for the [val port] return of the
 *   operation, else any other expression.
 * 
 *   (alt!
 *  [c t] ([val ch] (foo ch val))
 *  x ([v] v)
 *  [[out val]] :wrote
 *  :default 42)
 * 
 *   Each option may appear at most once. The choice and parking
 *   characteristics are those of alts!.
 */
(function (){
cljs.core.async.macros$macros.alt_BANG_ = (function cljs$core$async$macros$macros$alt_BANG_(var_args){
var args__23658__auto__ = [];
var len__23656__auto___971 = arguments.length;
var i__23657__auto___972 = (0);
while(true){
if((i__23657__auto___972 < len__23656__auto___971)){
args__23658__auto__.push((arguments[i__23657__auto___972]));

var G__973 = (i__23657__auto___972 + (1));
i__23657__auto___972 = G__973;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((2) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((2)),(0),null)):null);
return cljs.core.async.macros$macros.alt_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return cljs.core.async.macros$macros.alt_BANG_;},new cljs.core.Symbol("cljs.core.async.macros$macros","alt!","cljs.core.async.macros$macros/alt!",(-743787539),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.macros$macros","cljs.core.async.macros$macros",(-1631442596),null),new cljs.core.Symbol(null,"alt!","alt!",(1759993452),null),"cljs/core/async/macros.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(64),true,(64),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),"Makes a single choice between one of several channel operations,\n  as if by alts!, returning the value of the result expr corresponding\n  to the operation completed. Must be called inside a (go ...) block.\n\n  Each clause takes the form of:\n\n  channel-op[s] result-expr\n\n  where channel-ops is one of:\n\n  take-port - a single port to take\n  [take-port | [put-port put-val] ...] - a vector of ports as per alts!\n  :default | :priority - an option for alts!\n\n  and result-expr is either a list beginning with a vector, whereupon that\n  vector will be treated as a binding for the [val port] return of the\n  operation, else any other expression.\n\n  (alt!\n    [c t] ([val ch] (foo ch val))\n    x ([v] v)\n    [[out val]] :wrote\n    :default 42)\n\n  Each option may appear at most once. The choice and parking\n  characteristics are those of alts!.",(cljs.core.truth_(cljs.core.async.macros$macros.alt_BANG_)?cljs.core.async.macros$macros.alt_BANG_.cljs$lang$test:null)])));})()
;

cljs.core.async.macros$macros.alt_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
return cljs.core.async.macros$macros.do_alt.call(null,new cljs.core.Symbol(null,"alts!","alts!",(104119866),null),clauses);
});

cljs.core.async.macros$macros.alt_BANG_.cljs$lang$maxFixedArity = (2);

cljs.core.async.macros$macros.alt_BANG_.cljs$lang$applyTo = (function (seq968){
var G__969 = cljs.core.first.call(null,seq968);
var seq968__$1 = cljs.core.next.call(null,seq968);
var G__970 = cljs.core.first.call(null,seq968__$1);
var seq968__$2 = cljs.core.next.call(null,seq968__$1);
return cljs.core.async.macros$macros.alt_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__969,G__970,seq968__$2);
});

new cljs.core.Var(function(){return cljs.core.async.macros$macros.alt_BANG_;},new cljs.core.Symbol("cljs.core.async.macros$macros","alt!","cljs.core.async.macros$macros/alt!",(-743787539),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.macros$macros","cljs.core.async.macros$macros",(-1631442596),null),new cljs.core.Symbol(null,"alt!","alt!",(1759993452),null),"cljs/core/async/macros.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(64),true,(64),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),"Makes a single choice between one of several channel operations,\n  as if by alts!, returning the value of the result expr corresponding\n  to the operation completed. Must be called inside a (go ...) block.\n\n  Each clause takes the form of:\n\n  channel-op[s] result-expr\n\n  where channel-ops is one of:\n\n  take-port - a single port to take\n  [take-port | [put-port put-val] ...] - a vector of ports as per alts!\n  :default | :priority - an option for alts!\n\n  and result-expr is either a list beginning with a vector, whereupon that\n  vector will be treated as a binding for the [val port] return of the\n  operation, else any other expression.\n\n  (alt!\n    [c t] ([val ch] (foo ch val))\n    x ([v] v)\n    [[out val]] :wrote\n    :default 42)\n\n  Each option may appear at most once. The choice and parking\n  characteristics are those of alts!.",(cljs.core.truth_(cljs.core.async.macros$macros.alt_BANG_)?cljs.core.async.macros$macros.alt_BANG_.cljs$lang$test:null)]));

cljs.core.async.macros$macros.alt_BANG_.cljs$lang$macro = true;
/**
 * Like (go (loop ...))
 */
(function (){
cljs.core.async.macros$macros.go_loop = (function cljs$core$async$macros$macros$go_loop(var_args){
var args__23658__auto__ = [];
var len__23656__auto___978 = arguments.length;
var i__23657__auto___979 = (0);
while(true){
if((i__23657__auto___979 < len__23656__auto___978)){
args__23658__auto__.push((arguments[i__23657__auto___979]));

var G__980 = (i__23657__auto___979 + (1));
i__23657__auto___979 = G__980;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((3) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((3)),(0),null)):null);
return cljs.core.async.macros$macros.go_loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return cljs.core.async.macros$macros.go_loop;},new cljs.core.Symbol("cljs.core.async.macros$macros","go-loop","cljs.core.async.macros$macros/go-loop",(-1307974131),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.macros$macros","cljs.core.async.macros$macros",(-1631442596),null),new cljs.core.Symbol(null,"go-loop","go-loop",(692273294),null),"cljs/core/async/macros.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(96),true,(96),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Like (go (loop ...))",(cljs.core.truth_(cljs.core.async.macros$macros.go_loop)?cljs.core.async.macros$macros.go_loop.cljs$lang$test:null)])));})()
;

cljs.core.async.macros$macros.go_loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.async.macros","go","cljs.core.async.macros/go",(-1503108036),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",(-1829423021),null)),(function (){var x__23399__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
});

cljs.core.async.macros$macros.go_loop.cljs$lang$maxFixedArity = (3);

cljs.core.async.macros$macros.go_loop.cljs$lang$applyTo = (function (seq974){
var G__975 = cljs.core.first.call(null,seq974);
var seq974__$1 = cljs.core.next.call(null,seq974);
var G__976 = cljs.core.first.call(null,seq974__$1);
var seq974__$2 = cljs.core.next.call(null,seq974__$1);
var G__977 = cljs.core.first.call(null,seq974__$2);
var seq974__$3 = cljs.core.next.call(null,seq974__$2);
return cljs.core.async.macros$macros.go_loop.cljs$core$IFn$_invoke$arity$variadic(G__975,G__976,G__977,seq974__$3);
});

new cljs.core.Var(function(){return cljs.core.async.macros$macros.go_loop;},new cljs.core.Symbol("cljs.core.async.macros$macros","go-loop","cljs.core.async.macros$macros/go-loop",(-1307974131),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.macros$macros","cljs.core.async.macros$macros",(-1631442596),null),new cljs.core.Symbol(null,"go-loop","go-loop",(692273294),null),"cljs/core/async/macros.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(96),true,(96),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Like (go (loop ...))",(cljs.core.truth_(cljs.core.async.macros$macros.go_loop)?cljs.core.async.macros$macros.go_loop.cljs$lang$test:null)]));

cljs.core.async.macros$macros.go_loop.cljs$lang$macro = true;
