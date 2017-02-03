goog.provide("cljs.spec.test$macros");
if(typeof cljs.spec.test$macros.instrumented_vars !== 'undefined'){
} else {
(function (){
cljs.spec.test$macros.instrumented_vars = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY); return (
new cljs.core.Var(function(){return cljs.spec.test$macros.instrumented_vars;},new cljs.core.Symbol("cljs.spec.test$macros","instrumented-vars","cljs.spec.test$macros/instrumented-vars",(-864933403),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test$macros","cljs.spec.test$macros",(-804885435),null),new cljs.core.Symbol(null,"instrumented-vars","instrumented-vars",(1838047655),null),"cljs/spec/test.cljc",(37),(1),(17),(17),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.test$macros.instrumented_vars)?cljs.spec.test$macros.instrumented_vars.cljs$lang$test:null)])));})()
;
}
(function (){
cljs.spec.test$macros.collectionize = (function cljs$spec$test$macros$collectionize(x){
if((x instanceof cljs.core.Symbol)){
var x__25689__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
} else {
return x;
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test$macros.collectionize;},new cljs.core.Symbol("cljs.spec.test$macros","collectionize","cljs.spec.test$macros/collectionize",(413237573),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test$macros","cljs.spec.test$macros",(-804885435),null),new cljs.core.Symbol(null,"collectionize","collectionize",(2042394887),null),"cljs/spec/test.cljc",(21),(1),(19),(19),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.spec.test$macros.collectionize)?cljs.spec.test$macros.collectionize.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test$macros.fn_spec_name_QMARK_ = (function cljs$spec$test$macros$fn_spec_name_QMARK_(s){
return (s instanceof cljs.core.Symbol);
}); return (
new cljs.core.Var(function(){return cljs.spec.test$macros.fn_spec_name_QMARK_;},new cljs.core.Symbol("cljs.spec.test$macros","fn-spec-name?","cljs.spec.test$macros/fn-spec-name?",(-1782870004),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test$macros","cljs.spec.test$macros",(-804885435),null),new cljs.core.Symbol(null,"fn-spec-name?","fn-spec-name?",(883935438),null),"cljs/spec/test.cljc",(21),(1),(25),(25),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),null,(cljs.core.truth_(cljs.spec.test$macros.fn_spec_name_QMARK_)?cljs.spec.test$macros.fn_spec_name_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Disables instrument's checking of calls, within a scope.
 */
(function (){
cljs.spec.test$macros.with_instrument_disabled = (function cljs$spec$test$macros$with_instrument_disabled(var_args){
var args__25948__auto__ = [];
var len__25946__auto___258 = arguments.length;
var i__25947__auto___259 = (0);
while(true){
if((i__25947__auto___259 < len__25946__auto___258)){
args__25948__auto__.push((arguments[i__25947__auto___259]));

var G__260 = (i__25947__auto___259 + (1));
i__25947__auto___259 = G__260;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((2) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((2)),(0),null)):null);
return cljs.spec.test$macros.with_instrument_disabled.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec.test$macros.with_instrument_disabled;},new cljs.core.Symbol("cljs.spec.test$macros","with-instrument-disabled","cljs.spec.test$macros/with-instrument-disabled",(1764044156),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test$macros","cljs.spec.test$macros",(-804885435),null),new cljs.core.Symbol(null,"with-instrument-disabled","with-instrument-disabled",(910775730),null),"cljs/spec/test.cljc",(35),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(29),true,(29),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Disables instrument's checking of calls, within a scope.",(cljs.core.truth_(cljs.spec.test$macros.with_instrument_disabled)?cljs.spec.test$macros.with_instrument_disabled.cljs$lang$test:null)])));})()
;

cljs.spec.test$macros.with_instrument_disabled.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",(2050379843),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test","*instrument-enabled*","cljs.spec.test/*instrument-enabled*",(-507441968),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),body));
});

cljs.spec.test$macros.with_instrument_disabled.cljs$lang$maxFixedArity = (2);

cljs.spec.test$macros.with_instrument_disabled.cljs$lang$applyTo = (function (seq255){
var G__256 = cljs.core.first.call(null,seq255);
var seq255__$1 = cljs.core.next.call(null,seq255);
var G__257 = cljs.core.first.call(null,seq255__$1);
var seq255__$2 = cljs.core.next.call(null,seq255__$1);
return cljs.spec.test$macros.with_instrument_disabled.cljs$core$IFn$_invoke$arity$variadic(G__256,G__257,seq255__$2);
});

new cljs.core.Var(function(){return cljs.spec.test$macros.with_instrument_disabled;},new cljs.core.Symbol("cljs.spec.test$macros","with-instrument-disabled","cljs.spec.test$macros/with-instrument-disabled",(1764044156),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test$macros","cljs.spec.test$macros",(-804885435),null),new cljs.core.Symbol(null,"with-instrument-disabled","with-instrument-disabled",(910775730),null),"cljs/spec/test.cljc",(35),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(29),true,(29),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Disables instrument's checking of calls, within a scope.",(cljs.core.truth_(cljs.spec.test$macros.with_instrument_disabled)?cljs.spec.test$macros.with_instrument_disabled.cljs$lang$test:null)]));

cljs.spec.test$macros.with_instrument_disabled.cljs$lang$macro = true;
(function (){
cljs.spec.test$macros.instrument_1 = (function cljs$spec$test$macros$instrument_1(_AMPERSAND_form,_AMPERSAND_env,p__261,opts){
var vec__265 = p__261;
var quote = cljs.core.nth.call(null,vec__265,(0),null);
var s = cljs.core.nth.call(null,vec__265,(1),null);
var temp__22186__auto__ = cljs.analyzer.api.resolve.call(null,_AMPERSAND_env,s);
if(cljs.core.truth_(temp__22186__auto__)){
var v = temp__22186__auto__;
cljs.core.swap_BANG_.call(null,cljs.spec.test$macros.instrumented_vars,cljs.core.conj,new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(v));

return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"checked__15__auto__","checked__15__auto__",(-1446738744),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test","instrument-1*","cljs.spec.test/instrument-1*",(1399929),null)),(function (){var x__25689__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",(870848730),null)),(function (){var x__25689__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = opts;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"checked__15__auto__","checked__15__auto__",(-1446738744),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",(250714521),null)),(function (){var x__25689__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"checked__15__auto__","checked__15__auto__",(-1446738744),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(v);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test$macros.instrument_1;},new cljs.core.Symbol("cljs.spec.test$macros","instrument-1","cljs.spec.test$macros/instrument-1",(-1877248939),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test$macros","cljs.spec.test$macros",(-804885435),null),new cljs.core.Symbol(null,"instrument-1","instrument-1",(856670099),null),"cljs/spec/test.cljc",(23),(1),(35),true,(35),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.spec.test$macros.instrument_1)?cljs.spec.test$macros.instrument_1.cljs$lang$test:null)])));})()
;

cljs.spec.test$macros.instrument_1.cljs$lang$macro = true;
(function (){
cljs.spec.test$macros.unstrument_1 = (function cljs$spec$test$macros$unstrument_1(_AMPERSAND_form,_AMPERSAND_env,p__268){
var vec__272 = p__268;
var quote = cljs.core.nth.call(null,vec__272,(0),null);
var s = cljs.core.nth.call(null,vec__272,(1),null);
var temp__22186__auto__ = cljs.analyzer.api.resolve.call(null,_AMPERSAND_env,s);
if(cljs.core.truth_(temp__22186__auto__)){
var v = temp__22186__auto__;
if(cljs.core.truth_(cljs.core.deref.call(null,cljs.spec.test$macros.instrumented_vars).call(null,new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(v)))){
cljs.core.swap_BANG_.call(null,cljs.spec.test$macros.instrumented_vars,cljs.core.disj,new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(v));

return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"raw__16__auto__","raw__16__auto__",(-1803730230),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test","unstrument-1*","cljs.spec.test/unstrument-1*",(700275510),null)),(function (){var x__25689__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",(870848730),null)),(function (){var x__25689__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"raw__16__auto__","raw__16__auto__",(-1803730230),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",(250714521),null)),(function (){var x__25689__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"raw__16__auto__","raw__16__auto__",(-1803730230),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(v);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
} else {
return null;
}
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test$macros.unstrument_1;},new cljs.core.Symbol("cljs.spec.test$macros","unstrument-1","cljs.spec.test$macros/unstrument-1",(-1779611187),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test$macros","cljs.spec.test$macros",(-804885435),null),new cljs.core.Symbol(null,"unstrument-1","unstrument-1",(1947799819),null),"cljs/spec/test.cljc",(23),(1),(43),true,(43),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)], null)),null,(cljs.core.truth_(cljs.spec.test$macros.unstrument_1)?cljs.spec.test$macros.unstrument_1.cljs$lang$test:null)])));})()
;

cljs.spec.test$macros.unstrument_1.cljs$lang$macro = true;
(function (){
cljs.spec.test$macros.sym_or_syms__GT_syms = (function cljs$spec$test$macros$sym_or_syms__GT_syms(sym_or_syms){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.call(null,(function (sym){
if(cljs.core.truth_((function (){var and__23067__auto__ = clojure.string.includes_QMARK_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),".");
if(and__23067__auto__){
return cljs.analyzer.api.find_ns.call(null,sym);
} else {
return and__23067__auto__;
}
})())){
return cljs.core.map.call(null,(function (name_sym){
return cljs.core.symbol.call(null,cljs.core.name.call(null,sym),cljs.core.name.call(null,name_sym));
}),cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",(1843675177)),cljs.core.filter.call(null,(function (p1__17_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"macro","macro",(-867863404)).cljs$core$IFn$_invoke$arity$1(p1__17_SHARP_));
}),cljs.core.vals.call(null,cljs.analyzer.api.ns_interns.call(null,sym)))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym], null);
}
})),cljs.spec.test$macros.collectionize.call(null,sym_or_syms));
}); return (
new cljs.core.Var(function(){return cljs.spec.test$macros.sym_or_syms__GT_syms;},new cljs.core.Symbol("cljs.spec.test$macros","sym-or-syms->syms","cljs.spec.test$macros/sym-or-syms->syms",(1026845953),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test$macros","cljs.spec.test$macros",(-804885435),null),new cljs.core.Symbol(null,"sym-or-syms->syms","sym-or-syms->syms",(1509958863),null),"cljs/spec/test.cljc",(25),(1),(52),(52),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null)], null)),null,(cljs.core.truth_(cljs.spec.test$macros.sym_or_syms__GT_syms)?cljs.spec.test$macros.sym_or_syms__GT_syms.cljs$lang$test:null)])));})()
;
/**
 * Instruments the vars named by sym-or-syms, a symbol or collection
 * of symbols, or all instrumentable vars if sym-or-syms is not
 * specified. If a symbol identifies a namespace then all symbols in that
 * namespace will be enumerated.
 * 
 * If a var has an :args fn-spec, sets the var's root binding to a
 * fn that checks arg conformance (throwing an exception on failure)
 * before delegating to the original fn.
 * 
 * The opts map can be used to override registered specs, and/or to
 * replace fn implementations entirely. Opts for symbols not included
 * in sym-or-syms are ignored. This facilitates sharing a common
 * options map across many different calls to instrument.
 * 
 * The opts map may have the following keys:
 * 
 *   :spec     a map from var-name symbols to override specs
 *   :stub     a set of var-name symbols to be replaced by stubs
 *   :gen      a map from spec names to generator overrides
 *   :replace  a map from var-name symbols to replacement fns
 * 
 * :spec overrides registered fn-specs with specs your provide. Use
 * :spec overrides to provide specs for libraries that do not have
 * them, or to constrain your own use of a fn to a subset of its
 * spec'ed contract.
 * 
 * :stub replaces a fn with a stub that checks :args, then uses the
 * :ret spec to generate a return value.
 * 
 * :gen overrides are used only for :stub generation.
 * 
 * :replace replaces a fn with a fn that checks args conformance, then
 * invokes the fn you provide, enabling arbitrary stubbing and mocking.
 * 
 * :spec can be used in combination with :stub or :replace.
 * 
 * Returns a collection of syms naming the vars instrumented.
 */
(function (){
cljs.spec.test$macros.instrument = (function cljs$spec$test$macros$instrument(var_args){
var args275 = [];
var len__25946__auto___278 = arguments.length;
var i__25947__auto___279 = (0);
while(true){
if((i__25947__auto___279 < len__25946__auto___278)){
args275.push((arguments[i__25947__auto___279]));

var G__280 = (i__25947__auto___279 + (1));
i__25947__auto___279 = G__280;
continue;
} else {
}
break;
}

var G__277 = args275.length;
switch (G__277) {
case (2):
return cljs.spec.test$macros.instrument.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.spec.test$macros.instrument.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.spec.test$macros.instrument.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((args275.length - (2)))].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.spec.test$macros.instrument;},new cljs.core.Symbol("cljs.spec.test$macros","instrument","cljs.spec.test$macros/instrument",(1236849705),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test$macros","cljs.spec.test$macros",(-804885435),null),new cljs.core.Symbol(null,"instrument","instrument",(679832683),null),"cljs/spec/test.cljc",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"xs","xs",(-2004992428),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"xs","xs",(-2004992428),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(67),true,(67),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"xs","xs",(-2004992428),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Instruments the vars named by sym-or-syms, a symbol or collection\nof symbols, or all instrumentable vars if sym-or-syms is not\nspecified. If a symbol identifies a namespace then all symbols in that\nnamespace will be enumerated.\n\nIf a var has an :args fn-spec, sets the var's root binding to a\nfn that checks arg conformance (throwing an exception on failure)\nbefore delegating to the original fn.\n\nThe opts map can be used to override registered specs, and/or to\nreplace fn implementations entirely. Opts for symbols not included\nin sym-or-syms are ignored. This facilitates sharing a common\noptions map across many different calls to instrument.\n\nThe opts map may have the following keys:\n\n  :spec     a map from var-name symbols to override specs\n  :stub     a set of var-name symbols to be replaced by stubs\n  :gen      a map from spec names to generator overrides\n  :replace  a map from var-name symbols to replacement fns\n\n:spec overrides registered fn-specs with specs your provide. Use\n:spec overrides to provide specs for libraries that do not have\nthem, or to constrain your own use of a fn to a subset of its\nspec'ed contract.\n\n:stub replaces a fn with a stub that checks :args, then uses the\n:ret spec to generate a return value.\n\n:gen overrides are used only for :stub generation.\n\n:replace replaces a fn with a fn that checks args conformance, then\ninvokes the fn you provide, enabling arbitrary stubbing and mocking.\n\n:spec can be used in combination with :stub or :replace.\n\nReturns a collection of syms naming the vars instrumented.",(cljs.core.truth_(cljs.spec.test$macros.instrument)?cljs.spec.test$macros.instrument.cljs$lang$test:null)])));})()
;

cljs.spec.test$macros.instrument.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test","instrument","cljs.spec.test/instrument",(-1285850750),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.spec$macros.speced_vars.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
});

cljs.spec.test$macros.instrument.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test","instrument","cljs.spec.test/instrument",(-1285850750),null)),(function (){var x__25689__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null)));
});

cljs.spec.test$macros.instrument.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,sym_or_syms,opts){
var syms = cljs.spec.test$macros.sym_or_syms__GT_syms.call(null,cljs.spec.test$macros.eval.call(null,sym_or_syms));
var opts_sym = cljs.core.gensym.call(null,"opts");
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = opts_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = opts;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",(2025430439),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__19__auto__","ret__19__auto__",(463924384),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___20__auto__","___20__auto__",(2060213907),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__21__auto__","f__21__auto__",(57010878),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sym__22__auto__","sym__22__auto__",(368215853),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__21__auto__","f__21__auto__",(57010878),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",(-113941356),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__19__auto__","ret__19__auto__",(463924384),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sym__22__auto__","sym__22__auto__",(368215853),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",(-460750931),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sym__22__auto__","sym__22__auto__",(368215853),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",(-1207871206),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",(-1902130674),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = syms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (syms,opts_sym){
return (function (sym){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test","instrument-1","cljs.spec.test/instrument-1",(-1430413300),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = opts_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
});})(syms,opts_sym))
,syms))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","filter","cljs.core/filter",(-251894204),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__18__23__auto__","p1__18__23__auto__",(1619813011),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test","instrumentable-syms","cljs.spec.test/instrumentable-syms",(-1114210272),null)),(function (){var x__25689__auto__ = opts_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",(-752535972),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__18__23__auto__","p1__18__23__auto__",(1619813011),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test","distinct-by","cljs.spec.test/distinct-by",(-887586672),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",(-752535972),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
});

cljs.spec.test$macros.instrument.cljs$lang$maxFixedArity = (4);

new cljs.core.Var(function(){return cljs.spec.test$macros.instrument;},new cljs.core.Symbol("cljs.spec.test$macros","instrument","cljs.spec.test$macros/instrument",(1236849705),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test$macros","cljs.spec.test$macros",(-804885435),null),new cljs.core.Symbol(null,"instrument","instrument",(679832683),null),"cljs/spec/test.cljc",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"xs","xs",(-2004992428),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"xs","xs",(-2004992428),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(67),true,(67),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"xs","xs",(-2004992428),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Instruments the vars named by sym-or-syms, a symbol or collection\nof symbols, or all instrumentable vars if sym-or-syms is not\nspecified. If a symbol identifies a namespace then all symbols in that\nnamespace will be enumerated.\n\nIf a var has an :args fn-spec, sets the var's root binding to a\nfn that checks arg conformance (throwing an exception on failure)\nbefore delegating to the original fn.\n\nThe opts map can be used to override registered specs, and/or to\nreplace fn implementations entirely. Opts for symbols not included\nin sym-or-syms are ignored. This facilitates sharing a common\noptions map across many different calls to instrument.\n\nThe opts map may have the following keys:\n\n  :spec     a map from var-name symbols to override specs\n  :stub     a set of var-name symbols to be replaced by stubs\n  :gen      a map from spec names to generator overrides\n  :replace  a map from var-name symbols to replacement fns\n\n:spec overrides registered fn-specs with specs your provide. Use\n:spec overrides to provide specs for libraries that do not have\nthem, or to constrain your own use of a fn to a subset of its\nspec'ed contract.\n\n:stub replaces a fn with a stub that checks :args, then uses the\n:ret spec to generate a return value.\n\n:gen overrides are used only for :stub generation.\n\n:replace replaces a fn with a fn that checks args conformance, then\ninvokes the fn you provide, enabling arbitrary stubbing and mocking.\n\n:spec can be used in combination with :stub or :replace.\n\nReturns a collection of syms naming the vars instrumented.",(cljs.core.truth_(cljs.spec.test$macros.instrument)?cljs.spec.test$macros.instrument.cljs$lang$test:null)]));

cljs.spec.test$macros.instrument.cljs$lang$macro = true;
/**
 * Undoes instrument on the vars named by sym-or-syms, specified
 * as in instrument. With no args, unstruments all instrumented vars.
 * Returns a collection of syms naming the vars unstrumented.
 */
(function (){
cljs.spec.test$macros.unstrument = (function cljs$spec$test$macros$unstrument(var_args){
var args282 = [];
var len__25946__auto___285 = arguments.length;
var i__25947__auto___286 = (0);
while(true){
if((i__25947__auto___286 < len__25946__auto___285)){
args282.push((arguments[i__25947__auto___286]));

var G__287 = (i__25947__auto___286 + (1));
i__25947__auto___286 = G__287;
continue;
} else {
}
break;
}

var G__284 = args282.length;
switch (G__284) {
case (2):
return cljs.spec.test$macros.unstrument.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.spec.test$macros.unstrument.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((args282.length - (2)))].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.spec.test$macros.unstrument;},new cljs.core.Symbol("cljs.spec.test$macros","unstrument","cljs.spec.test$macros/unstrument",(-298061847),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test$macros","cljs.spec.test$macros",(-804885435),null),new cljs.core.Symbol(null,"unstrument","unstrument",(1328490411),null),"cljs/spec/test.cljc",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(127),true,(127),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null)], null)),"Undoes instrument on the vars named by sym-or-syms, specified\nas in instrument. With no args, unstruments all instrumented vars.\nReturns a collection of syms naming the vars unstrumented.",(cljs.core.truth_(cljs.spec.test$macros.unstrument)?cljs.spec.test$macros.unstrument.cljs$lang$test:null)])));})()
;

cljs.spec.test$macros.unstrument.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test","unstrument","cljs.spec.test/unstrument",(-1000779248),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.deref.call(null,cljs.spec.test$macros.instrumented_vars))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
});

cljs.spec.test$macros.unstrument.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,sym_or_syms){
var syms = cljs.spec.test$macros.sym_or_syms__GT_syms.call(null,cljs.spec.test$macros.eval.call(null,sym_or_syms));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",(2025430439),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__24__auto__","ret__24__auto__",(-312850326),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__25__auto__","f__25__auto__",(1001446330),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sym__26__auto__","sym__26__auto__",(-1563018931),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__25__auto__","f__25__auto__",(1001446330),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",(-113941356),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__24__auto__","ret__24__auto__",(-312850326),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sym__26__auto__","sym__26__auto__",(-1563018931),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",(-460750931),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sym__26__auto__","sym__26__auto__",(-1563018931),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (syms){
return (function (sym){
if((sym instanceof cljs.core.Symbol)){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test","unstrument-1","cljs.spec.test/unstrument-1",(-212867676),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
} else {
return null;
}
});})(syms))
,syms)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
});

cljs.spec.test$macros.unstrument.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs.spec.test$macros.unstrument;},new cljs.core.Symbol("cljs.spec.test$macros","unstrument","cljs.spec.test$macros/unstrument",(-298061847),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test$macros","cljs.spec.test$macros",(-804885435),null),new cljs.core.Symbol(null,"unstrument","unstrument",(1328490411),null),"cljs/spec/test.cljc",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(127),true,(127),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null)], null)),"Undoes instrument on the vars named by sym-or-syms, specified\nas in instrument. With no args, unstruments all instrumented vars.\nReturns a collection of syms naming the vars unstrumented.",(cljs.core.truth_(cljs.spec.test$macros.unstrument)?cljs.spec.test$macros.unstrument.cljs$lang$test:null)]));

cljs.spec.test$macros.unstrument.cljs$lang$macro = true;
(function (){
cljs.spec.test$macros.check_1 = (function cljs$spec$test$macros$check_1(_AMPERSAND_form,_AMPERSAND_env,p__289,f,spec,opts){
var vec__295 = p__289;
var quote = cljs.core.nth.call(null,vec__295,(0),null);
var s = cljs.core.nth.call(null,vec__295,(1),null);
var qs = vec__295;
var map__298 = (cljs.core.truth_(qs)?cljs.analyzer.api.resolve.call(null,_AMPERSAND_env,s):null);
var map__298__$1 = ((((!((map__298 == null)))?((((map__298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__298.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__298):map__298);
var v = map__298__$1;
var name = cljs.core.get.call(null,map__298__$1,new cljs.core.Keyword(null,"name","name",(1843675177)));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__27__auto__","s__27__auto__",(-388174744),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__28__auto__","opts__28__auto__",(-1339645277),null)),(function (){var x__25689__auto__ = opts;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"v__29__auto__","v__29__auto__",(-1751940292),null)),(function (){var x__25689__auto__ = (cljs.core.truth_(v)?cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",(870848730),null)),(function (){var x__25689__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"spec__30__auto__","spec__30__auto__",(577912683),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),(function (){var x__25689__auto__ = spec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = (cljs.core.truth_(v)?cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","get-spec","cljs.spec/get-spec",(-1254734335),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",(870848730),null)),(function (){var x__25689__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"re-inst?__31__auto__","re-inst?__31__auto__",(531476516),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"v__29__auto__","v__29__auto__",(-1751940292),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",(-1649497689),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test","unstrument","cljs.spec.test/unstrument",(-1000779248),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__32__auto__","f__32__auto__",(-1307616233),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),(function (){var x__25689__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"v__29__auto__","v__29__auto__",(-1751940292),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"v__29__auto__","v__29__auto__",(-1751940292),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",(-1273693247),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",(2005388338),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__32__auto__","f__32__auto__",(-1307616233),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"failure","failure",(720415879))),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",(-409744395),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No fn to spec"),(function (){var x__25689__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec","failure","cljs.spec/failure",(1931120592))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"no-fn","no-fn",(-353517111))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"sym","sym",(-1444860305))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__27__auto__","s__27__auto__",(-388174744),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"spec","spec",(347520401))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"spec__30__auto__","spec__30__auto__",(577912683),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"args","args",(1315556576))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"spec__30__auto__","spec__30__auto__",(577912683),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"tcret__33__auto__","tcret__33__auto__",(-528207975),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test","quick-check","cljs.spec.test/quick-check",(621512118),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__32__auto__","f__32__auto__",(-1307616233),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"spec__30__auto__","spec__30__auto__",(577912683),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__28__auto__","opts__28__auto__",(-1339645277),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test","make-check-result","cljs.spec.test/make-check-result",(-1032843376),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__27__auto__","s__27__auto__",(-388174744),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"spec__30__auto__","spec__30__auto__",(577912683),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"tcret__33__auto__","tcret__33__auto__",(-528207975),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"default","default",(-1987822328))),(function (){var x__25689__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"failure","failure",(720415879))),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",(-409744395),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No :args spec"),(function (){var x__25689__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec","failure","cljs.spec/failure",(1931120592))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"no-args-spec","no-args-spec",(-1769472786))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"sym","sym",(-1444860305))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__27__auto__","s__27__auto__",(-388174744),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"spec","spec",(347520401))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"spec__30__auto__","spec__30__auto__",(577912683),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",(-1065347064),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"re-inst?__31__auto__","re-inst?__31__auto__",(531476516),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test","instrument","cljs.spec.test/instrument",(-1285850750),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}); return (
new cljs.core.Var(function(){return cljs.spec.test$macros.check_1;},new cljs.core.Symbol("cljs.spec.test$macros","check-1","cljs.spec.test$macros/check-1",(-359376386),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test$macros","cljs.spec.test$macros",(-804885435),null),new cljs.core.Symbol(null,"check-1","check-1",(897585468),null),"cljs/spec/test.cljc",(18),(1),(150),true,(150),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol(null,"s","s",(-948495851),null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"qs","qs",(-260156164),null)], null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.spec.test$macros.check_1)?cljs.spec.test$macros.check_1.cljs$lang$test:null)])));})()
;

cljs.spec.test$macros.check_1.cljs$lang$macro = true;
/**
 * Runs generative tests for fn f using spec and opts. See
 * 'check' for options and return.
 */
(function (){
cljs.spec.test$macros.check_fn = (function cljs$spec$test$macros$check_fn(var_args){
var args300 = [];
var len__25946__auto___303 = arguments.length;
var i__25947__auto___304 = (0);
while(true){
if((i__25947__auto___304 < len__25946__auto___303)){
args300.push((arguments[i__25947__auto___304]));

var G__305 = (i__25947__auto___304 + (1));
i__25947__auto___304 = G__305;
continue;
} else {
}
break;
}

var G__302 = args300.length;
switch (G__302) {
case (4):
return cljs.spec.test$macros.check_fn.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (5):
return cljs.spec.test$macros.check_fn.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((args300.length - (2)))].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.spec.test$macros.check_fn;},new cljs.core.Symbol("cljs.spec.test$macros","check-fn","cljs.spec.test$macros/check-fn",(-1698089778),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test$macros","cljs.spec.test$macros",(-804885435),null),new cljs.core.Symbol(null,"check-fn","check-fn",(-69866488),null),"cljs/spec/test.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(5),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(175),true,(175),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Runs generative tests for fn f using spec and opts. See\n'check' for options and return.",(cljs.core.truth_(cljs.spec.test$macros.check_fn)?cljs.spec.test$macros.check_fn.cljs$lang$test:null)])));})()
;

cljs.spec.test$macros.check_fn.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,f,spec){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test","check-fn","cljs.spec.test/check-fn",(1936187559),null)),(function (){var x__25689__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = spec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null)));
});

cljs.spec.test$macros.check_fn.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,f,spec,opts){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__34__auto__","opts__34__auto__",(1122113329),null)),(function (){var x__25689__auto__ = opts;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test","validate-check-opts","cljs.spec.test/validate-check-opts",(1019059492),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__34__auto__","opts__34__auto__",(1122113329),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test","check-1","cljs.spec.test/check-1",(-852038251),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25689__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = spec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__34__auto__","opts__34__auto__",(1122113329),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
});

cljs.spec.test$macros.check_fn.cljs$lang$maxFixedArity = (5);

new cljs.core.Var(function(){return cljs.spec.test$macros.check_fn;},new cljs.core.Symbol("cljs.spec.test$macros","check-fn","cljs.spec.test$macros/check-fn",(-1698089778),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test$macros","cljs.spec.test$macros",(-804885435),null),new cljs.core.Symbol(null,"check-fn","check-fn",(-69866488),null),"cljs/spec/test.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(5),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(175),true,(175),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Runs generative tests for fn f using spec and opts. See\n'check' for options and return.",(cljs.core.truth_(cljs.spec.test$macros.check_fn)?cljs.spec.test$macros.check_fn.cljs$lang$test:null)]));

cljs.spec.test$macros.check_fn.cljs$lang$macro = true;
(function (){
cljs.spec.test$macros.checkable_syms_STAR_ = (function cljs$spec$test$macros$checkable_syms_STAR_(var_args){
var args307 = [];
var len__25946__auto___310 = arguments.length;
var i__25947__auto___311 = (0);
while(true){
if((i__25947__auto___311 < len__25946__auto___310)){
args307.push((arguments[i__25947__auto___311]));

var G__312 = (i__25947__auto___311 + (1));
i__25947__auto___311 = G__312;
continue;
} else {
}
break;
}

var G__309 = args307.length;
switch (G__309) {
case (0):
return cljs.spec.test$macros.checkable_syms_STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs.spec.test$macros.checkable_syms_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args307.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.spec.test$macros.checkable_syms_STAR_;},new cljs.core.Symbol("cljs.spec.test$macros","checkable-syms*","cljs.spec.test$macros/checkable-syms*",(-620309511),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test$macros","cljs.spec.test$macros",(-804885435),null),new cljs.core.Symbol(null,"checkable-syms*","checkable-syms*",(-1139668037),null),"cljs/spec/test.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(185),(185),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.spec.test$macros.checkable_syms_STAR_)?cljs.spec.test$macros.checkable_syms_STAR_.cljs$lang$test:null)])));})()
;

cljs.spec.test$macros.checkable_syms_STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.spec.test$macros.checkable_syms_STAR_.call(null,null);
});

cljs.spec.test$macros.checkable_syms_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,cljs.spec.test$macros.fn_spec_name_QMARK_,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.spec.registry_ref))),cljs.core.keys.call(null,new cljs.core.Keyword(null,"spec","spec",(347520401)).cljs$core$IFn$_invoke$arity$1(opts))], null));
});

cljs.spec.test$macros.checkable_syms_STAR_.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return cljs.spec.test$macros.checkable_syms_STAR_;},new cljs.core.Symbol("cljs.spec.test$macros","checkable-syms*","cljs.spec.test$macros/checkable-syms*",(-620309511),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test$macros","cljs.spec.test$macros",(-804885435),null),new cljs.core.Symbol(null,"checkable-syms*","checkable-syms*",(-1139668037),null),"cljs/spec/test.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(185),(185),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.spec.test$macros.checkable_syms_STAR_)?cljs.spec.test$macros.checkable_syms_STAR_.cljs$lang$test:null)]));
/**
 * Given an opts map as per check, returns the set of syms that
 * can be checked.
 */
(function (){
cljs.spec.test$macros.checkable_syms = (function cljs$spec$test$macros$checkable_syms(var_args){
var args314 = [];
var len__25946__auto___317 = arguments.length;
var i__25947__auto___318 = (0);
while(true){
if((i__25947__auto___318 < len__25946__auto___317)){
args314.push((arguments[i__25947__auto___318]));

var G__319 = (i__25947__auto___318 + (1));
i__25947__auto___318 = G__319;
continue;
} else {
}
break;
}

var G__316 = args314.length;
switch (G__316) {
case (2):
return cljs.spec.test$macros.checkable_syms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.spec.test$macros.checkable_syms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((args314.length - (2)))].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.spec.test$macros.checkable_syms;},new cljs.core.Symbol("cljs.spec.test$macros","checkable-syms","cljs.spec.test$macros/checkable-syms",(-411265891),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test$macros","cljs.spec.test$macros",(-804885435),null),new cljs.core.Symbol(null,"checkable-syms","checkable-syms",(-2147427117),null),"cljs/spec/test.cljc",(25),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(193),true,(193),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Given an opts map as per check, returns the set of syms that\ncan be checked.",(cljs.core.truth_(cljs.spec.test$macros.checkable_syms)?cljs.spec.test$macros.checkable_syms.cljs$lang$test:null)])));})()
;

cljs.spec.test$macros.checkable_syms.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test","checkable-syms","cljs.spec.test/checkable-syms",(434037114),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null)));
});

cljs.spec.test$macros.checkable_syms.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,opts){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__35__auto__","opts__35__auto__",(737217157),null)),(function (){var x__25689__auto__ = opts;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test","validate-check-opts","cljs.spec.test/validate-check-opts",(1019059492),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__35__auto__","opts__35__auto__",(737217157),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",(2025430439),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",(-460750931),null)),(function (){var x__25689__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.filter.call(null,cljs.spec.test$macros.fn_spec_name_QMARK_,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.spec.registry_ref))),cljs.core.keys.call(null,new cljs.core.Keyword(null,"spec","spec",(347520401)).cljs$core$IFn$_invoke$arity$1(opts)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
});

cljs.spec.test$macros.checkable_syms.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs.spec.test$macros.checkable_syms;},new cljs.core.Symbol("cljs.spec.test$macros","checkable-syms","cljs.spec.test$macros/checkable-syms",(-411265891),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test$macros","cljs.spec.test$macros",(-804885435),null),new cljs.core.Symbol(null,"checkable-syms","checkable-syms",(-2147427117),null),"cljs/spec/test.cljc",(25),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(193),true,(193),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Given an opts map as per check, returns the set of syms that\ncan be checked.",(cljs.core.truth_(cljs.spec.test$macros.checkable_syms)?cljs.spec.test$macros.checkable_syms.cljs$lang$test:null)]));

cljs.spec.test$macros.checkable_syms.cljs$lang$macro = true;
/**
 * Run generative tests for spec conformance on vars named by
 * sym-or-syms, a symbol or collection of symbols. If sym-or-syms
 * is not specified, check all checkable vars. If a symbol identifies a
 * namespace then all symbols in that namespace will be enumerated.
 * 
 * The opts map includes the following optional keys, where stc
 * aliases clojure.test.check:
 * 
 * ::stc/opts  opts to flow through test.check/quick-check
 * :gen        map from spec names to generator overrides
 * 
 * The ::stc/opts include :num-tests in addition to the keys
 * documented by test.check. Generator overrides are passed to
 * spec/gen when generating function args.
 * 
 * Returns a lazy sequence of check result maps with the following
 * keys
 * 
 * :spec       the spec tested
 * :sym        optional symbol naming the var tested
 * :failure    optional test failure
 * ::stc/ret   optional value returned by test.check/quick-check
 * 
 * The value for :failure can be any exception. Exceptions thrown by
 * spec itself will have an ::s/failure value in ex-data:
 * 
 * :check-failed   at least one checked return did not conform
 * :no-args-spec   no :args spec provided
 * :no-fn          no fn provided
 * :no-fspec       no fspec provided
 * :no-gen         unable to generate :args
 * :instrument     invalid args detected by instrument
 */
(function (){
cljs.spec.test$macros.check = (function cljs$spec$test$macros$check(var_args){
var args321 = [];
var len__25946__auto___324 = arguments.length;
var i__25947__auto___325 = (0);
while(true){
if((i__25947__auto___325 < len__25946__auto___324)){
args321.push((arguments[i__25947__auto___325]));

var G__326 = (i__25947__auto___325 + (1));
i__25947__auto___325 = G__326;
continue;
} else {
}
break;
}

var G__323 = args321.length;
switch (G__323) {
case (2):
return cljs.spec.test$macros.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.spec.test$macros.check.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.spec.test$macros.check.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((args321.length - (2)))].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.spec.test$macros.check;},new cljs.core.Symbol("cljs.spec.test$macros","check","cljs.spec.test$macros/check",(1267547049),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test$macros","cljs.spec.test$macros",(-804885435),null),new cljs.core.Symbol(null,"check","check",(-1428126865),null),"cljs/spec/test.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(205),true,(205),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Run generative tests for spec conformance on vars named by\nsym-or-syms, a symbol or collection of symbols. If sym-or-syms\nis not specified, check all checkable vars. If a symbol identifies a\nnamespace then all symbols in that namespace will be enumerated.\n\nThe opts map includes the following optional keys, where stc\naliases clojure.test.check:\n\n::stc/opts  opts to flow through test.check/quick-check\n:gen        map from spec names to generator overrides\n\nThe ::stc/opts include :num-tests in addition to the keys\ndocumented by test.check. Generator overrides are passed to\nspec/gen when generating function args.\n\nReturns a lazy sequence of check result maps with the following\nkeys\n\n:spec       the spec tested\n:sym        optional symbol naming the var tested\n:failure    optional test failure\n::stc/ret   optional value returned by test.check/quick-check\n\nThe value for :failure can be any exception. Exceptions thrown by\nspec itself will have an ::s/failure value in ex-data:\n\n:check-failed   at least one checked return did not conform\n:no-args-spec   no :args spec provided\n:no-fn          no fn provided\n:no-fspec       no fspec provided\n:no-gen         unable to generate :args\n:instrument     invalid args detected by instrument\n",(cljs.core.truth_(cljs.spec.test$macros.check)?cljs.spec.test$macros.check.cljs$lang$test:null)])));})()
;

cljs.spec.test$macros.check.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test","check","cljs.spec.test/check",(840079318),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = cljs.spec.test$macros.checkable_syms_STAR_.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
});

cljs.spec.test$macros.check.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,sym_or_syms){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test","check","cljs.spec.test/check",(840079318),null)),(function (){var x__25689__auto__ = sym_or_syms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null)));
});

cljs.spec.test$macros.check.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,sym_or_syms,opts){
var syms = cljs.spec.test$macros.sym_or_syms__GT_syms.call(null,cljs.spec.test$macros.eval.call(null,sym_or_syms));
var opts_sym = cljs.core.gensym.call(null,"opts");
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = opts_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = opts;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (syms,opts_sym){
return (function (sym){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test","check-1","cljs.spec.test/check-1",(-852038251),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25689__auto__ = opts_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
});})(syms,opts_sym))
,cljs.core.filter.call(null,cljs.spec.test$macros.checkable_syms_STAR_.call(null,opts),syms)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
});

cljs.spec.test$macros.check.cljs$lang$maxFixedArity = (4);

new cljs.core.Var(function(){return cljs.spec.test$macros.check;},new cljs.core.Symbol("cljs.spec.test$macros","check","cljs.spec.test$macros/check",(1267547049),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test$macros","cljs.spec.test$macros",(-804885435),null),new cljs.core.Symbol(null,"check","check",(-1428126865),null),"cljs/spec/test.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(205),true,(205),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Run generative tests for spec conformance on vars named by\nsym-or-syms, a symbol or collection of symbols. If sym-or-syms\nis not specified, check all checkable vars. If a symbol identifies a\nnamespace then all symbols in that namespace will be enumerated.\n\nThe opts map includes the following optional keys, where stc\naliases clojure.test.check:\n\n::stc/opts  opts to flow through test.check/quick-check\n:gen        map from spec names to generator overrides\n\nThe ::stc/opts include :num-tests in addition to the keys\ndocumented by test.check. Generator overrides are passed to\nspec/gen when generating function args.\n\nReturns a lazy sequence of check result maps with the following\nkeys\n\n:spec       the spec tested\n:sym        optional symbol naming the var tested\n:failure    optional test failure\n::stc/ret   optional value returned by test.check/quick-check\n\nThe value for :failure can be any exception. Exceptions thrown by\nspec itself will have an ::s/failure value in ex-data:\n\n:check-failed   at least one checked return did not conform\n:no-args-spec   no :args spec provided\n:no-fn          no fn provided\n:no-fspec       no fspec provided\n:no-gen         unable to generate :args\n:instrument     invalid args detected by instrument\n",(cljs.core.truth_(cljs.spec.test$macros.check)?cljs.spec.test$macros.check.cljs$lang$test:null)]));

cljs.spec.test$macros.check.cljs$lang$macro = true;
