goog.provide("cljs.spec.test.alpha$macros");
if(typeof cljs.spec.test.alpha$macros.instrumented_vars !== 'undefined'){
} else {
(function (){
cljs.spec.test.alpha$macros.instrumented_vars = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha$macros.instrumented_vars;},new cljs.core.Symbol("cljs.spec.test.alpha$macros","instrumented-vars","cljs.spec.test.alpha$macros/instrumented-vars",(171411477),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",(-1739784120),null),new cljs.core.Symbol(null,"instrumented-vars","instrumented-vars",(1838047655),null),"cljs/spec/test/alpha.cljc",(37),(1),(17),(17),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.test.alpha$macros.instrumented_vars)?cljs.spec.test.alpha$macros.instrumented_vars.cljs$lang$test:null)])));})()
;
}
(function (){
cljs.spec.test.alpha$macros.collectionize = (function cljs$spec$test$alpha$macros$collectionize(x){
if((x instanceof cljs.core.Symbol)){
var x__22880__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
} else {
return x;
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha$macros.collectionize;},new cljs.core.Symbol("cljs.spec.test.alpha$macros","collectionize","cljs.spec.test.alpha$macros/collectionize",(1591877749),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",(-1739784120),null),new cljs.core.Symbol(null,"collectionize","collectionize",(2042394887),null),"cljs/spec/test/alpha.cljc",(21),(1),(19),(19),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha$macros.collectionize)?cljs.spec.test.alpha$macros.collectionize.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.test.alpha$macros.fn_spec_name_QMARK_ = (function cljs$spec$test$alpha$macros$fn_spec_name_QMARK_(s){
return (s instanceof cljs.core.Symbol);
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha$macros.fn_spec_name_QMARK_;},new cljs.core.Symbol("cljs.spec.test.alpha$macros","fn-spec-name?","cljs.spec.test.alpha$macros/fn-spec-name?",(1333080444),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",(-1739784120),null),new cljs.core.Symbol(null,"fn-spec-name?","fn-spec-name?",(883935438),null),"cljs/spec/test/alpha.cljc",(21),(1),(25),(25),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha$macros.fn_spec_name_QMARK_)?cljs.spec.test.alpha$macros.fn_spec_name_QMARK_.cljs$lang$test:null)])));})()
;
var ret__23200__auto___3348 = (function (){
/**
 * Disables instrument's checking of calls, within a scope.
 */
(function (){
cljs.spec.test.alpha$macros.with_instrument_disabled = (function cljs$spec$test$alpha$macros$with_instrument_disabled(var_args){
var args__23177__auto__ = [];
var len__23174__auto___3349 = arguments.length;
var i__23175__auto___3350 = (0);
while(true){
if((i__23175__auto___3350 < len__23174__auto___3349)){
args__23177__auto__.push((arguments[i__23175__auto___3350]));

var G__3351 = (i__23175__auto___3350 + (1));
i__23175__auto___3350 = G__3351;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((2) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((2)),(0),null)):null);
return cljs.spec.test.alpha$macros.with_instrument_disabled.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23178__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha$macros.with_instrument_disabled;},new cljs.core.Symbol("cljs.spec.test.alpha$macros","with-instrument-disabled","cljs.spec.test.alpha$macros/with-instrument-disabled",(752913964),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",(-1739784120),null),new cljs.core.Symbol(null,"with-instrument-disabled","with-instrument-disabled",(910775730),null),"cljs/spec/test/alpha.cljc",(35),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(29),true,(29),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Disables instrument's checking of calls, within a scope.",(cljs.core.truth_(cljs.spec.test.alpha$macros.with_instrument_disabled)?cljs.spec.test.alpha$macros.with_instrument_disabled.cljs$lang$test:null)])));})()
;

cljs.spec.test.alpha$macros.with_instrument_disabled.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",(2050379843),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test.alpha","*instrument-enabled*","cljs.spec.test.alpha/*instrument-enabled*",(-856303648),null)),cljs.core._conj(cljs.core.List.EMPTY,null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)));
});

cljs.spec.test.alpha$macros.with_instrument_disabled.cljs$lang$maxFixedArity = (2);

cljs.spec.test.alpha$macros.with_instrument_disabled.cljs$lang$applyTo = (function (seq3345){
var G__3346 = cljs.core.first(seq3345);
var seq3345__$1 = cljs.core.next(seq3345);
var G__3347 = cljs.core.first(seq3345__$1);
var seq3345__$2 = cljs.core.next(seq3345__$1);
return cljs.spec.test.alpha$macros.with_instrument_disabled.cljs$core$IFn$_invoke$arity$variadic(G__3346,G__3347,seq3345__$2);
});

return new cljs.core.Var(function(){return cljs.spec.test.alpha$macros.with_instrument_disabled;},new cljs.core.Symbol("cljs.spec.test.alpha$macros","with-instrument-disabled","cljs.spec.test.alpha$macros/with-instrument-disabled",(752913964),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",(-1739784120),null),new cljs.core.Symbol(null,"with-instrument-disabled","with-instrument-disabled",(910775730),null),"cljs/spec/test/alpha.cljc",(35),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(29),true,(29),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Disables instrument's checking of calls, within a scope.",(cljs.core.truth_(cljs.spec.test.alpha$macros.with_instrument_disabled)?cljs.spec.test.alpha$macros.with_instrument_disabled.cljs$lang$test:null)]));
})()
;
cljs.spec.test.alpha$macros.with_instrument_disabled.cljs$lang$macro = true;

var ret__23200__auto___3356 = (function (){
cljs.spec.test.alpha$macros.instrument_1 = (function cljs$spec$test$alpha$macros$instrument_1(_AMPERSAND_form,_AMPERSAND_env,p__3352,opts){
var vec__3353 = p__3352;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3353,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3353,(1),null);
var temp__21177__auto__ = cljs.analyzer.api.resolve(_AMPERSAND_env,s);
if(cljs.core.truth_(temp__21177__auto__)){
var v = temp__21177__auto__;
if((new cljs.core.Keyword(null,"const","const",(1709929842)).cljs$core$IFn$_invoke$arity$1(v) == null)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.spec.test.alpha$macros.instrumented_vars,cljs.core.conj,new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(v));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"checked__230__auto__","checked__230__auto__",(-2091938802),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test.alpha","instrument-1*","cljs.spec.test.alpha/instrument-1*",(756550473),null)),(function (){var x__22880__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",(870848730),null)),(function (){var x__22880__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = opts;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"checked__230__auto__","checked__230__auto__",(-2091938802),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",(250714521),null)),(function (){var x__22880__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"checked__230__auto__","checked__230__auto__",(-2091938802),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(v);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
} else {
return null;
}
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha$macros.instrument_1;},new cljs.core.Symbol("cljs.spec.test.alpha$macros","instrument-1","cljs.spec.test.alpha$macros/instrument-1",(1440093477),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",(-1739784120),null),new cljs.core.Symbol(null,"instrument-1","instrument-1",(856670099),null),"cljs/spec/test/alpha.cljc",(23),(1),(35),true,(35),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha$macros.instrument_1)?cljs.spec.test.alpha$macros.instrument_1.cljs$lang$test:null)])));})()
;
cljs.spec.test.alpha$macros.instrument_1.cljs$lang$macro = true;

var ret__23200__auto___3363 = (function (){
cljs.spec.test.alpha$macros.unstrument_1 = (function cljs$spec$test$alpha$macros$unstrument_1(_AMPERSAND_form,_AMPERSAND_env,p__3357){
var vec__3358 = p__3357;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3358,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3358,(1),null);
var temp__21177__auto__ = cljs.analyzer.api.resolve(_AMPERSAND_env,s);
if(cljs.core.truth_(temp__21177__auto__)){
var v = temp__21177__auto__;
if(cljs.core.truth_((function (){var G__3362 = new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(v);
var fexpr__3361 = cljs.core.deref(cljs.spec.test.alpha$macros.instrumented_vars);
return (fexpr__3361.cljs$core$IFn$_invoke$arity$1 ? fexpr__3361.cljs$core$IFn$_invoke$arity$1(G__3362) : fexpr__3361(G__3362));
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.spec.test.alpha$macros.instrumented_vars,cljs.core.disj,new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(v));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"raw__231__auto__","raw__231__auto__",(-703031783),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test.alpha","unstrument-1*","cljs.spec.test.alpha/unstrument-1*",(1286793190),null)),(function (){var x__22880__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",(870848730),null)),(function (){var x__22880__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"raw__231__auto__","raw__231__auto__",(-703031783),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",(250714521),null)),(function (){var x__22880__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"raw__231__auto__","raw__231__auto__",(-703031783),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(v);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
} else {
return null;
}
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha$macros.unstrument_1;},new cljs.core.Symbol("cljs.spec.test.alpha$macros","unstrument-1","cljs.spec.test.alpha$macros/unstrument-1",(1404283549),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",(-1739784120),null),new cljs.core.Symbol(null,"unstrument-1","unstrument-1",(1947799819),null),"cljs/spec/test/alpha.cljc",(23),(1),(44),true,(44),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha$macros.unstrument_1)?cljs.spec.test.alpha$macros.unstrument_1.cljs$lang$test:null)])));})()
;
cljs.spec.test.alpha$macros.unstrument_1.cljs$lang$macro = true;

(function (){
cljs.spec.test.alpha$macros.sym_or_syms__GT_syms = (function cljs$spec$test$alpha$macros$sym_or_syms__GT_syms(sym_or_syms){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (sym){
if(cljs.core.truth_((function (){var and__21660__auto__ = clojure.string.includes_QMARK_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),".");
if(and__21660__auto__){
return cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$1(sym);
} else {
return and__21660__auto__;
}
})())){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (name_sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(sym),cljs.core.name(name_sym));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",(1843675177)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__232_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"macro","macro",(-867863404)).cljs$core$IFn$_invoke$arity$1(p1__232_SHARP_));
}),cljs.core.vals(cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$1(sym)))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym], null);
}
})),cljs.spec.test.alpha$macros.collectionize(sym_or_syms));
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha$macros.sym_or_syms__GT_syms;},new cljs.core.Symbol("cljs.spec.test.alpha$macros","sym-or-syms->syms","cljs.spec.test.alpha$macros/sym-or-syms->syms",(1945731633),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",(-1739784120),null),new cljs.core.Symbol(null,"sym-or-syms->syms","sym-or-syms->syms",(1509958863),null),"cljs/spec/test/alpha.cljc",(25),(1),(53),(53),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha$macros.sym_or_syms__GT_syms)?cljs.spec.test.alpha$macros.sym_or_syms__GT_syms.cljs$lang$test:null)])));})()
;
var ret__23200__auto___3366 = (function (){
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
cljs.spec.test.alpha$macros.instrument = (function cljs$spec$test$alpha$macros$instrument(var_args){
var G__3365 = arguments.length;
switch (G__3365) {
case (2):
return cljs.spec.test.alpha$macros.instrument.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.spec.test.alpha$macros.instrument.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.spec.test.alpha$macros.instrument.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha$macros.instrument;},new cljs.core.Symbol("cljs.spec.test.alpha$macros","instrument","cljs.spec.test.alpha$macros/instrument",(335525625),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",(-1739784120),null),new cljs.core.Symbol(null,"instrument","instrument",(679832683),null),"cljs/spec/test/alpha.cljc",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"xs","xs",(-2004992428),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"xs","xs",(-2004992428),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(68),true,(68),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"xs","xs",(-2004992428),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Instruments the vars named by sym-or-syms, a symbol or collection\nof symbols, or all instrumentable vars if sym-or-syms is not\nspecified. If a symbol identifies a namespace then all symbols in that\nnamespace will be enumerated.\n\nIf a var has an :args fn-spec, sets the var's root binding to a\nfn that checks arg conformance (throwing an exception on failure)\nbefore delegating to the original fn.\n\nThe opts map can be used to override registered specs, and/or to\nreplace fn implementations entirely. Opts for symbols not included\nin sym-or-syms are ignored. This facilitates sharing a common\noptions map across many different calls to instrument.\n\nThe opts map may have the following keys:\n\n  :spec     a map from var-name symbols to override specs\n  :stub     a set of var-name symbols to be replaced by stubs\n  :gen      a map from spec names to generator overrides\n  :replace  a map from var-name symbols to replacement fns\n\n:spec overrides registered fn-specs with specs your provide. Use\n:spec overrides to provide specs for libraries that do not have\nthem, or to constrain your own use of a fn to a subset of its\nspec'ed contract.\n\n:stub replaces a fn with a stub that checks :args, then uses the\n:ret spec to generate a return value.\n\n:gen overrides are used only for :stub generation.\n\n:replace replaces a fn with a fn that checks args conformance, then\ninvokes the fn you provide, enabling arbitrary stubbing and mocking.\n\n:spec can be used in combination with :stub or :replace.\n\nReturns a collection of syms naming the vars instrumented.",(cljs.core.truth_(cljs.spec.test.alpha$macros.instrument)?cljs.spec.test.alpha$macros.instrument.cljs$lang$test:null)])));})()
;

cljs.spec.test.alpha$macros.instrument.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test.alpha","instrument","cljs.spec.test.alpha/instrument",(1447464690),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha$macros.speced_vars())));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
});

cljs.spec.test.alpha$macros.instrument.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test.alpha","instrument","cljs.spec.test.alpha/instrument",(1447464690),null)),(function (){var x__22880__auto__ = xs;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null)], 0)));
});

cljs.spec.test.alpha$macros.instrument.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,sym_or_syms,opts){
var syms = cljs.spec.test.alpha$macros.sym_or_syms__GT_syms((cljs.spec.test.alpha$macros.eval.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.test.alpha$macros.eval.cljs$core$IFn$_invoke$arity$1(sym_or_syms) : cljs.spec.test.alpha$macros.eval(sym_or_syms)));
var opts_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("opts");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__22880__auto__ = opts_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = opts;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",(2025430439),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__234__auto__","ret__234__auto__",(-1051892479),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___235__auto__","___235__auto__",(-848367482),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__236__auto__","f__236__auto__",(-1773495535),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sym__237__auto__","sym__237__auto__",(-1496143010),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__236__auto__","f__236__auto__",(-1773495535),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",(-113941356),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__234__auto__","ret__234__auto__",(-1051892479),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sym__237__auto__","sym__237__auto__",(-1496143010),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",(-460750931),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sym__237__auto__","sym__237__auto__",(-1496143010),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",(-1207871206),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",(-1902130674),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = syms;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (syms,opts_sym){
return (function (sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test.alpha","instrument-1","cljs.spec.test.alpha/instrument-1",(-1984881348),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = opts_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
});})(syms,opts_sym))
,syms))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","filter","cljs.core/filter",(-251894204),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__233__238__auto__","p1__233__238__auto__",(-2118433593),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test.alpha","instrumentable-syms","cljs.spec.test.alpha/instrumentable-syms",(1088645904),null)),(function (){var x__22880__auto__ = opts_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",(-752535972),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__233__238__auto__","p1__233__238__auto__",(-2118433593),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test.alpha","distinct-by","cljs.spec.test.alpha/distinct-by",(-1374292576),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",(-752535972),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
});

cljs.spec.test.alpha$macros.instrument.cljs$lang$maxFixedArity = (4);

return new cljs.core.Var(function(){return cljs.spec.test.alpha$macros.instrument;},new cljs.core.Symbol("cljs.spec.test.alpha$macros","instrument","cljs.spec.test.alpha$macros/instrument",(335525625),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",(-1739784120),null),new cljs.core.Symbol(null,"instrument","instrument",(679832683),null),"cljs/spec/test/alpha.cljc",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"xs","xs",(-2004992428),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"xs","xs",(-2004992428),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(68),true,(68),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"xs","xs",(-2004992428),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Instruments the vars named by sym-or-syms, a symbol or collection\nof symbols, or all instrumentable vars if sym-or-syms is not\nspecified. If a symbol identifies a namespace then all symbols in that\nnamespace will be enumerated.\n\nIf a var has an :args fn-spec, sets the var's root binding to a\nfn that checks arg conformance (throwing an exception on failure)\nbefore delegating to the original fn.\n\nThe opts map can be used to override registered specs, and/or to\nreplace fn implementations entirely. Opts for symbols not included\nin sym-or-syms are ignored. This facilitates sharing a common\noptions map across many different calls to instrument.\n\nThe opts map may have the following keys:\n\n  :spec     a map from var-name symbols to override specs\n  :stub     a set of var-name symbols to be replaced by stubs\n  :gen      a map from spec names to generator overrides\n  :replace  a map from var-name symbols to replacement fns\n\n:spec overrides registered fn-specs with specs your provide. Use\n:spec overrides to provide specs for libraries that do not have\nthem, or to constrain your own use of a fn to a subset of its\nspec'ed contract.\n\n:stub replaces a fn with a stub that checks :args, then uses the\n:ret spec to generate a return value.\n\n:gen overrides are used only for :stub generation.\n\n:replace replaces a fn with a fn that checks args conformance, then\ninvokes the fn you provide, enabling arbitrary stubbing and mocking.\n\n:spec can be used in combination with :stub or :replace.\n\nReturns a collection of syms naming the vars instrumented.",(cljs.core.truth_(cljs.spec.test.alpha$macros.instrument)?cljs.spec.test.alpha$macros.instrument.cljs$lang$test:null)]));
})()
;
cljs.spec.test.alpha$macros.instrument.cljs$lang$macro = true;

var ret__23200__auto___3370 = (function (){
/**
 * Undoes instrument on the vars named by sym-or-syms, specified
 * as in instrument. With no args, unstruments all instrumented vars.
 * Returns a collection of syms naming the vars unstrumented.
 */
(function (){
cljs.spec.test.alpha$macros.unstrument = (function cljs$spec$test$alpha$macros$unstrument(var_args){
var G__3369 = arguments.length;
switch (G__3369) {
case (2):
return cljs.spec.test.alpha$macros.unstrument.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.spec.test.alpha$macros.unstrument.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha$macros.unstrument;},new cljs.core.Symbol("cljs.spec.test.alpha$macros","unstrument","cljs.spec.test.alpha$macros/unstrument",(636783929),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",(-1739784120),null),new cljs.core.Symbol(null,"unstrument","unstrument",(1328490411),null),"cljs/spec/test/alpha.cljc",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(128),true,(128),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null)], null)),"Undoes instrument on the vars named by sym-or-syms, specified\nas in instrument. With no args, unstruments all instrumented vars.\nReturns a collection of syms naming the vars unstrumented.",(cljs.core.truth_(cljs.spec.test.alpha$macros.unstrument)?cljs.spec.test.alpha$macros.unstrument.cljs$lang$test:null)])));})()
;

cljs.spec.test.alpha$macros.unstrument.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test.alpha","unstrument","cljs.spec.test.alpha/unstrument",(-512915776),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.spec.test.alpha$macros.instrumented_vars))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
});

cljs.spec.test.alpha$macros.unstrument.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,sym_or_syms){
var syms = cljs.spec.test.alpha$macros.sym_or_syms__GT_syms((cljs.spec.test.alpha$macros.eval.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.test.alpha$macros.eval.cljs$core$IFn$_invoke$arity$1(sym_or_syms) : cljs.spec.test.alpha$macros.eval(sym_or_syms)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",(2025430439),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__239__auto__","ret__239__auto__",(-45865129),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__240__auto__","f__240__auto__",(-1135034768),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sym__241__auto__","sym__241__auto__",(1861089022),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__240__auto__","f__240__auto__",(-1135034768),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",(-113941356),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__239__auto__","ret__239__auto__",(-45865129),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sym__241__auto__","sym__241__auto__",(1861089022),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",(-460750931),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sym__241__auto__","sym__241__auto__",(1861089022),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (syms){
return (function (sym){
if((sym instanceof cljs.core.Symbol)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test.alpha","unstrument-1","cljs.spec.test.alpha/unstrument-1",(-1370180972),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
} else {
return null;
}
});})(syms))
,syms)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
});

cljs.spec.test.alpha$macros.unstrument.cljs$lang$maxFixedArity = (3);

return new cljs.core.Var(function(){return cljs.spec.test.alpha$macros.unstrument;},new cljs.core.Symbol("cljs.spec.test.alpha$macros","unstrument","cljs.spec.test.alpha$macros/unstrument",(636783929),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",(-1739784120),null),new cljs.core.Symbol(null,"unstrument","unstrument",(1328490411),null),"cljs/spec/test/alpha.cljc",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(128),true,(128),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null)], null)),"Undoes instrument on the vars named by sym-or-syms, specified\nas in instrument. With no args, unstruments all instrumented vars.\nReturns a collection of syms naming the vars unstrumented.",(cljs.core.truth_(cljs.spec.test.alpha$macros.unstrument)?cljs.spec.test.alpha$macros.unstrument.cljs$lang$test:null)]));
})()
;
cljs.spec.test.alpha$macros.unstrument.cljs$lang$macro = true;

var ret__23200__auto___3378 = (function (){
cljs.spec.test.alpha$macros.check_1 = (function cljs$spec$test$alpha$macros$check_1(_AMPERSAND_form,_AMPERSAND_env,p__3372,f,spec,opts){
var vec__3373 = p__3372;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3373,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3373,(1),null);
var qs = vec__3373;
var map__3376 = (cljs.core.truth_(qs)?cljs.analyzer.api.resolve(_AMPERSAND_env,s):null);
var map__3376__$1 = ((((!((map__3376 == null)))?((((map__3376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3376):map__3376);
var v = map__3376__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3376__$1,new cljs.core.Keyword(null,"name","name",(1843675177)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__242__auto__","s__242__auto__",(-1652912717),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__243__auto__","opts__243__auto__",(876023928),null)),(function (){var x__22880__auto__ = opts;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"v__244__auto__","v__244__auto__",(1147956986),null)),(function (){var x__22880__auto__ = (cljs.core.truth_(v)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",(870848730),null)),(function (){var x__22880__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})())):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"spec__245__auto__","spec__245__auto__",(-825932007),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),(function (){var x__22880__auto__ = spec;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = (cljs.core.truth_(v)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","get-spec","cljs.spec.alpha/get-spec",(785931985),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",(870848730),null)),(function (){var x__22880__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})())):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"re-inst?__246__auto__","re-inst?__246__auto__",(1113618681),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"v__244__auto__","v__244__auto__",(1147956986),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",(-1649497689),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test.alpha","unstrument","cljs.spec.test.alpha/unstrument",(-512915776),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__247__auto__","f__247__auto__",(-1188401704),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),(function (){var x__22880__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"v__244__auto__","v__244__auto__",(1147956986),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"v__244__auto__","v__244__auto__",(1147956986),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",(-1273693247),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",(2005388338),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__247__auto__","f__247__auto__",(-1188401704),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"failure","failure",(720415879))),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",(-409744395),null)),cljs.core._conj(cljs.core.List.EMPTY,"No fn to spec"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",(188258592))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"no-fn","no-fn",(-353517111))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"sym","sym",(-1444860305))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__242__auto__","s__242__auto__",(-1652912717),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"spec","spec",(347520401))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"spec__245__auto__","spec__245__auto__",(-825932007),null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"args","args",(1315556576))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"spec__245__auto__","spec__245__auto__",(-825932007),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"tcret__248__auto__","tcret__248__auto__",(1813340121),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",(101067110),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__247__auto__","f__247__auto__",(-1188401704),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"spec__245__auto__","spec__245__auto__",(-825932007),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__243__auto__","opts__243__auto__",(876023928),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",(-410209472),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__242__auto__","s__242__auto__",(-1652912717),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"spec__245__auto__","spec__245__auto__",(-825932007),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"tcret__248__auto__","tcret__248__auto__",(1813340121),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"default","default",(-1987822328))),(function (){var x__22880__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"failure","failure",(720415879))),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",(-409744395),null)),cljs.core._conj(cljs.core.List.EMPTY,"No :args spec"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",(188258592))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"no-args-spec","no-args-spec",(-1769472786))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"sym","sym",(-1444860305))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__242__auto__","s__242__auto__",(-1652912717),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"spec","spec",(347520401))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"spec__245__auto__","spec__245__auto__",(-825932007),null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",(-1065347064),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"re-inst?__246__auto__","re-inst?__246__auto__",(1113618681),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test.alpha","instrument","cljs.spec.test.alpha/instrument",(1447464690),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha$macros.check_1;},new cljs.core.Symbol("cljs.spec.test.alpha$macros","check-1","cljs.spec.test.alpha$macros/check-1",(752532142),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",(-1739784120),null),new cljs.core.Symbol(null,"check-1","check-1",(897585468),null),"cljs/spec/test/alpha.cljc",(18),(1),(151),true,(151),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol(null,"s","s",(-948495851),null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"qs","qs",(-260156164),null)], null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha$macros.check_1)?cljs.spec.test.alpha$macros.check_1.cljs$lang$test:null)])));})()
;
cljs.spec.test.alpha$macros.check_1.cljs$lang$macro = true;

var ret__23200__auto___3381 = (function (){
/**
 * Runs generative tests for fn f using spec and opts. See
 * 'check' for options and return.
 */
(function (){
cljs.spec.test.alpha$macros.check_fn = (function cljs$spec$test$alpha$macros$check_fn(var_args){
var G__3380 = arguments.length;
switch (G__3380) {
case (4):
return cljs.spec.test.alpha$macros.check_fn.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (5):
return cljs.spec.test.alpha$macros.check_fn.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha$macros.check_fn;},new cljs.core.Symbol("cljs.spec.test.alpha$macros","check-fn","cljs.spec.test.alpha$macros/check-fn",(-603303010),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",(-1739784120),null),new cljs.core.Symbol(null,"check-fn","check-fn",(-69866488),null),"cljs/spec/test/alpha.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(5),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(176),true,(176),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Runs generative tests for fn f using spec and opts. See\n'check' for options and return.",(cljs.core.truth_(cljs.spec.test.alpha$macros.check_fn)?cljs.spec.test.alpha$macros.check_fn.cljs$lang$test:null)])));})()
;

cljs.spec.test.alpha$macros.check_fn.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,f,spec){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test.alpha","check-fn","cljs.spec.test.alpha/check-fn",(-1852617833),null)),(function (){var x__22880__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = spec;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)));
});

cljs.spec.test.alpha$macros.check_fn.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,f,spec,opts){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__249__auto__","opts__249__auto__",(-148973785),null)),(function (){var x__22880__auto__ = opts;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test.alpha","validate-check-opts","cljs.spec.test.alpha/validate-check-opts",(524905204),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__249__auto__","opts__249__auto__",(-148973785),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test.alpha","check-1","cljs.spec.test.alpha/check-1",(-532434267),null)),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = spec;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__249__auto__","opts__249__auto__",(-148973785),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
});

cljs.spec.test.alpha$macros.check_fn.cljs$lang$maxFixedArity = (5);

return new cljs.core.Var(function(){return cljs.spec.test.alpha$macros.check_fn;},new cljs.core.Symbol("cljs.spec.test.alpha$macros","check-fn","cljs.spec.test.alpha$macros/check-fn",(-603303010),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",(-1739784120),null),new cljs.core.Symbol(null,"check-fn","check-fn",(-69866488),null),"cljs/spec/test/alpha.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(5),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(176),true,(176),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Runs generative tests for fn f using spec and opts. See\n'check' for options and return.",(cljs.core.truth_(cljs.spec.test.alpha$macros.check_fn)?cljs.spec.test.alpha$macros.check_fn.cljs$lang$test:null)]));
})()
;
cljs.spec.test.alpha$macros.check_fn.cljs$lang$macro = true;

(function (){
cljs.spec.test.alpha$macros.checkable_syms_STAR_ = (function cljs$spec$test$alpha$macros$checkable_syms_STAR_(var_args){
var G__3384 = arguments.length;
switch (G__3384) {
case (0):
return cljs.spec.test.alpha$macros.checkable_syms_STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs.spec.test.alpha$macros.checkable_syms_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha$macros.checkable_syms_STAR_;},new cljs.core.Symbol("cljs.spec.test.alpha$macros","checkable-syms*","cljs.spec.test.alpha$macros/checkable-syms*",(-1513590775),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",(-1739784120),null),new cljs.core.Symbol(null,"checkable-syms*","checkable-syms*",(-1139668037),null),"cljs/spec/test/alpha.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(186),(186),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha$macros.checkable_syms_STAR_)?cljs.spec.test.alpha$macros.checkable_syms_STAR_.cljs$lang$test:null)])));})()
;

cljs.spec.test.alpha$macros.checkable_syms_STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.spec.test.alpha$macros.checkable_syms_STAR_.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.spec.test.alpha$macros.checkable_syms_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.spec.test.alpha$macros.fn_spec_name_QMARK_,cljs.core.keys(cljs.core.deref(cljs.spec.alpha.registry_ref))),cljs.core.keys(new cljs.core.Keyword(null,"spec","spec",(347520401)).cljs$core$IFn$_invoke$arity$1(opts))], null));
});

cljs.spec.test.alpha$macros.checkable_syms_STAR_.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return cljs.spec.test.alpha$macros.checkable_syms_STAR_;},new cljs.core.Symbol("cljs.spec.test.alpha$macros","checkable-syms*","cljs.spec.test.alpha$macros/checkable-syms*",(-1513590775),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",(-1739784120),null),new cljs.core.Symbol(null,"checkable-syms*","checkable-syms*",(-1139668037),null),"cljs/spec/test/alpha.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(186),(186),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha$macros.checkable_syms_STAR_)?cljs.spec.test.alpha$macros.checkable_syms_STAR_.cljs$lang$test:null)]));
var ret__23200__auto___3388 = (function (){
/**
 * Given an opts map as per check, returns the set of syms that
 * can be checked.
 */
(function (){
cljs.spec.test.alpha$macros.checkable_syms = (function cljs$spec$test$alpha$macros$checkable_syms(var_args){
var G__3387 = arguments.length;
switch (G__3387) {
case (2):
return cljs.spec.test.alpha$macros.checkable_syms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.spec.test.alpha$macros.checkable_syms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha$macros.checkable_syms;},new cljs.core.Symbol("cljs.spec.test.alpha$macros","checkable-syms","cljs.spec.test.alpha$macros/checkable-syms",(-1162268083),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",(-1739784120),null),new cljs.core.Symbol(null,"checkable-syms","checkable-syms",(-2147427117),null),"cljs/spec/test/alpha.cljc",(25),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(194),true,(194),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Given an opts map as per check, returns the set of syms that\ncan be checked.",(cljs.core.truth_(cljs.spec.test.alpha$macros.checkable_syms)?cljs.spec.test.alpha$macros.checkable_syms.cljs$lang$test:null)])));})()
;

cljs.spec.test.alpha$macros.checkable_syms.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test.alpha","checkable-syms","cljs.spec.test.alpha/checkable-syms",(-20825526),null)),cljs.core._conj(cljs.core.List.EMPTY,null)));
});

cljs.spec.test.alpha$macros.checkable_syms.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,opts){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__250__auto__","opts__250__auto__",(-483357503),null)),(function (){var x__22880__auto__ = opts;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test.alpha","validate-check-opts","cljs.spec.test.alpha/validate-check-opts",(524905204),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__250__auto__","opts__250__auto__",(-483357503),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",(2025430439),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",(-460750931),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.spec.test.alpha$macros.fn_spec_name_QMARK_,cljs.core.keys(cljs.core.deref(cljs.spec.alpha.registry_ref))),cljs.core.keys(new cljs.core.Keyword(null,"spec","spec",(347520401)).cljs$core$IFn$_invoke$arity$1(opts)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
});

cljs.spec.test.alpha$macros.checkable_syms.cljs$lang$maxFixedArity = (3);

return new cljs.core.Var(function(){return cljs.spec.test.alpha$macros.checkable_syms;},new cljs.core.Symbol("cljs.spec.test.alpha$macros","checkable-syms","cljs.spec.test.alpha$macros/checkable-syms",(-1162268083),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",(-1739784120),null),new cljs.core.Symbol(null,"checkable-syms","checkable-syms",(-2147427117),null),"cljs/spec/test/alpha.cljc",(25),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(194),true,(194),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Given an opts map as per check, returns the set of syms that\ncan be checked.",(cljs.core.truth_(cljs.spec.test.alpha$macros.checkable_syms)?cljs.spec.test.alpha$macros.checkable_syms.cljs$lang$test:null)]));
})()
;
cljs.spec.test.alpha$macros.checkable_syms.cljs$lang$macro = true;

var ret__23200__auto___3392 = (function (){
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
cljs.spec.test.alpha$macros.check = (function cljs$spec$test$alpha$macros$check(var_args){
var G__3391 = arguments.length;
switch (G__3391) {
case (2):
return cljs.spec.test.alpha$macros.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.spec.test.alpha$macros.check.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.spec.test.alpha$macros.check.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.spec.test.alpha$macros.check;},new cljs.core.Symbol("cljs.spec.test.alpha$macros","check","cljs.spec.test.alpha$macros/check",(-1857135879),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",(-1739784120),null),new cljs.core.Symbol(null,"check","check",(-1428126865),null),"cljs/spec/test/alpha.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(206),true,(206),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Run generative tests for spec conformance on vars named by\nsym-or-syms, a symbol or collection of symbols. If sym-or-syms\nis not specified, check all checkable vars. If a symbol identifies a\nnamespace then all symbols in that namespace will be enumerated.\n\nThe opts map includes the following optional keys, where stc\naliases clojure.test.check:\n\n::stc/opts  opts to flow through test.check/quick-check\n:gen        map from spec names to generator overrides\n\nThe ::stc/opts include :num-tests in addition to the keys\ndocumented by test.check. Generator overrides are passed to\nspec/gen when generating function args.\n\nReturns a lazy sequence of check result maps with the following\nkeys\n\n:spec       the spec tested\n:sym        optional symbol naming the var tested\n:failure    optional test failure\n::stc/ret   optional value returned by test.check/quick-check\n\nThe value for :failure can be any exception. Exceptions thrown by\nspec itself will have an ::s/failure value in ex-data:\n\n:check-failed   at least one checked return did not conform\n:no-args-spec   no :args spec provided\n:no-fn          no fn provided\n:no-fspec       no fspec provided\n:no-gen         unable to generate :args\n:instrument     invalid args detected by instrument\n",(cljs.core.truth_(cljs.spec.test.alpha$macros.check)?cljs.spec.test.alpha$macros.check.cljs$lang$test:null)])));})()
;

cljs.spec.test.alpha$macros.check.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test.alpha","check","cljs.spec.test.alpha/check",(1428644486),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = cljs.spec.test.alpha$macros.checkable_syms_STAR_.cljs$core$IFn$_invoke$arity$0();
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
});

cljs.spec.test.alpha$macros.check.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,sym_or_syms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test.alpha","check","cljs.spec.test.alpha/check",(1428644486),null)),(function (){var x__22880__auto__ = sym_or_syms;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null)], 0)));
});

cljs.spec.test.alpha$macros.check.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,sym_or_syms,opts){
var syms = cljs.spec.test.alpha$macros.sym_or_syms__GT_syms((cljs.spec.test.alpha$macros.eval.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.test.alpha$macros.eval.cljs$core$IFn$_invoke$arity$1(sym_or_syms) : cljs.spec.test.alpha$macros.eval(sym_or_syms)));
var opts_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("opts");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__22880__auto__ = opts_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = opts;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (syms,opts_sym){
return (function (sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.test.alpha","check-1","cljs.spec.test.alpha/check-1",(-532434267),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__22880__auto__ = opts_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
});})(syms,opts_sym))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.spec.test.alpha$macros.checkable_syms_STAR_.cljs$core$IFn$_invoke$arity$1(opts),syms)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
});

cljs.spec.test.alpha$macros.check.cljs$lang$maxFixedArity = (4);

return new cljs.core.Var(function(){return cljs.spec.test.alpha$macros.check;},new cljs.core.Symbol("cljs.spec.test.alpha$macros","check","cljs.spec.test.alpha$macros/check",(-1857135879),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",(-1739784120),null),new cljs.core.Symbol(null,"check","check",(-1428126865),null),"cljs/spec/test/alpha.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(206),true,(206),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym-or-syms","sym-or-syms",(1701538801),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Run generative tests for spec conformance on vars named by\nsym-or-syms, a symbol or collection of symbols. If sym-or-syms\nis not specified, check all checkable vars. If a symbol identifies a\nnamespace then all symbols in that namespace will be enumerated.\n\nThe opts map includes the following optional keys, where stc\naliases clojure.test.check:\n\n::stc/opts  opts to flow through test.check/quick-check\n:gen        map from spec names to generator overrides\n\nThe ::stc/opts include :num-tests in addition to the keys\ndocumented by test.check. Generator overrides are passed to\nspec/gen when generating function args.\n\nReturns a lazy sequence of check result maps with the following\nkeys\n\n:spec       the spec tested\n:sym        optional symbol naming the var tested\n:failure    optional test failure\n::stc/ret   optional value returned by test.check/quick-check\n\nThe value for :failure can be any exception. Exceptions thrown by\nspec itself will have an ::s/failure value in ex-data:\n\n:check-failed   at least one checked return did not conform\n:no-args-spec   no :args spec provided\n:no-fn          no fn provided\n:no-fspec       no fspec provided\n:no-gen         unable to generate :args\n:instrument     invalid args detected by instrument\n",(cljs.core.truth_(cljs.spec.test.alpha$macros.check)?cljs.spec.test.alpha$macros.check.cljs$lang$test:null)]));
})()
;
cljs.spec.test.alpha$macros.check.cljs$lang$macro = true;

