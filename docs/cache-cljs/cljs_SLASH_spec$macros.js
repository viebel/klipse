goog.provide("cljs.spec$macros");
if(typeof cljs.spec$macros.registry_ref !== 'undefined'){
} else {
(function (){
cljs.spec$macros.registry_ref = (function (){var G__55 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__55) : cljs.core.atom.call(null,G__55));
})(); return (
new cljs.core.Var(function(){return cljs.spec$macros.registry_ref;},new cljs.core.Symbol("cljs.spec$macros","registry-ref","cljs.spec$macros/registry-ref",(1131105177),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"registry-ref","registry-ref",(1975823941),null),"cljs/spec.cljc",(22),(1),(19),(19),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec$macros.registry_ref)?cljs.spec$macros.registry_ref.cljs$lang$test:null)])));})()
;
}
/**
 * Returns a symbol from a symbol or var
 */
(function (){
cljs.spec$macros.__GT_sym = (function cljs$spec$macros$__GT_sym(x){
if(cljs.core.map_QMARK_(x)){
return new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.__GT_sym;},new cljs.core.Symbol("cljs.spec$macros","->sym","cljs.spec$macros/->sym",(-132758142),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"->sym","->sym",(696606926),null),"cljs/spec.cljc",(13),(1),(21),(21),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Returns a symbol from a symbol or var",(cljs.core.truth_(cljs.spec$macros.__GT_sym)?cljs.spec$macros.__GT_sym.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec$macros.unfn = (function cljs$spec$macros$unfn(expr){
if((cljs.core.seq_QMARK_(expr)) && ((cljs.core.first(expr) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("fn*",cljs.core.name(cljs.core.first(expr))))){
var vec__62 = cljs.core.rest(expr);
var seq__63 = cljs.core.seq(vec__62);
var first__64 = cljs.core.first(seq__63);
var seq__63__$1 = cljs.core.next(seq__63);
var vec__65 = first__64;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65,(0),null);
var form = seq__63__$1;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(clojure.walk.postwalk_replace(cljs.core.PersistentArrayMap.createAsIfByAssoc([s,new cljs.core.Symbol(null,"%","%",(-950237169),null)]),form),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",(-950237169),null)], null),cljs.core.array_seq([new cljs.core.Symbol(null,"fn","fn",(465265323),null)], 0));
} else {
return expr;
}
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.unfn;},new cljs.core.Symbol("cljs.spec$macros","unfn","cljs.spec$macros/unfn",(365324210),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"unfn","unfn",(-464043674),null),"cljs/spec.cljc",(12),(1),(28),(28),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null)),null,(cljs.core.truth_(cljs.spec$macros.unfn)?cljs.spec$macros.unfn.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec$macros.res = (function cljs$spec$macros$res(env,form){
if((form instanceof cljs.core.Keyword)){
return form;
} else {
if((form instanceof cljs.core.Symbol)){
var or__23109__auto__ = cljs.spec$macros.__GT_sym(cljs.analyzer.api.resolve(env,form));
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
return form;
}
} else {
if(cljs.core.sequential_QMARK_(form)){
return clojure.walk.postwalk((function (p1__4_SHARP_){
if((p1__4_SHARP_ instanceof cljs.core.Symbol)){
return (cljs.spec$macros.res.cljs$core$IFn$_invoke$arity$2 ? cljs.spec$macros.res.cljs$core$IFn$_invoke$arity$2(env,p1__4_SHARP_) : cljs.spec$macros.res.call(null,env,p1__4_SHARP_));
} else {
return p1__4_SHARP_;
}
}),cljs.spec$macros.unfn(form));
} else {
return form;

}
}
}
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.res;},new cljs.core.Symbol("cljs.spec$macros","res","cljs.spec$macros/res",(-599959284),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"res","res",(245523648),null),"cljs/spec.cljc",(11),(1),(36),(36),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null)),null,(cljs.core.truth_(cljs.spec$macros.res)?cljs.spec$macros.res.cljs$lang$test:null)])));})()
;
/**
 * Qualify symbol s by resolving it or using the current *ns*.
 */
(function (){
cljs.spec$macros.ns_qualify = (function cljs$spec$macros$ns_qualify(env,s){
if(cljs.core.truth_(cljs.core.namespace(s))){
var v = cljs.analyzer.api.resolve(env,s);
if(cljs.core.truth_(v)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to resolve: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("v")].join('')));
}

return cljs.spec$macros.__GT_sym(v);
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
}
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.ns_qualify;},new cljs.core.Symbol("cljs.spec$macros","ns-qualify","cljs.spec$macros/ns-qualify",(880985498),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"ns-qualify","ns-qualify",(1165093718),null),"cljs/spec.cljc",(18),(1),(43),(43),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),"Qualify symbol s by resolving it or using the current *ns*.",(cljs.core.truth_(cljs.spec$macros.ns_qualify)?cljs.spec$macros.ns_qualify.cljs$lang$test:null)])));})()
;
/**
 * Given a namespace-qualified keyword or resolveable symbol k, and a spec,
 * spec-name, predicate or regex-op makes an entry in the registry mapping k to
 * the spec
 */
(function (){
cljs.spec$macros.def = (function cljs$spec$macros$def(_AMPERSAND_form,_AMPERSAND_env,k,spec_form){
var k__$1 = (((k instanceof cljs.core.Symbol))?cljs.spec$macros.ns_qualify(_AMPERSAND_env,k):k);
var form = cljs.spec$macros.res(_AMPERSAND_env,spec_form);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.spec$macros.registry_ref,cljs.core.assoc,k__$1,form);

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","def-impl","cljs.spec/def-impl",(2098881912),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = k__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = spec_form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.def;},new cljs.core.Symbol("cljs.spec$macros","def","cljs.spec$macros/def",(-773577109),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"def","def",(597100991),null),"cljs/spec.cljc",(14),(1),(52),true,(52),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"spec-form","spec-form",(-871386429),null)], null)),"Given a namespace-qualified keyword or resolveable symbol k, and a spec,\n   spec-name, predicate or regex-op makes an entry in the registry mapping k to\n   the spec",(cljs.core.truth_(cljs.spec$macros.def)?cljs.spec$macros.def.cljs$lang$test:null)])));})()
;

cljs.spec$macros.def.cljs$lang$macro = true;
/**
 * Takes a single predicate form, e.g. can be the name of a predicate,
 *   like even?, or a fn literal like #(< % 42). Note that it is not
 *   generally necessary to wrap predicates in spec when using the rest
 *   of the spec macros, only to attach a unique generator
 * 
 *   Can also be passed the result of one of the regex ops -
 *   cat, alt, *, +, ?, in which case it will return a regex-conforming
 *   spec, useful when nesting an independent regex.
 *   ---
 * 
 *   Optionally takes :gen generator-fn, which must be a fn of no args that
 *   returns a test.check generator.
 * 
 *   Returns a spec.
 */
(function (){
cljs.spec$macros.spec = (function cljs$spec$macros$spec(var_args){
var args__25948__auto__ = [];
var len__25946__auto___75 = arguments.length;
var i__25947__auto___76 = (0);
while(true){
if((i__25947__auto___76 < len__25946__auto___75)){
args__25948__auto__.push((arguments[i__25947__auto___76]));

var G__77 = (i__25947__auto___76 + (1));
i__25947__auto___76 = G__77;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((3) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((3)),(0),null)):null);
return cljs.spec$macros.spec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.spec;},new cljs.core.Symbol("cljs.spec$macros","spec","cljs.spec$macros/spec",(552362252),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null),"cljs/spec.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(62),true,(62),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null)], null)),"Takes a single predicate form, e.g. can be the name of a predicate,\n  like even?, or a fn literal like #(< % 42). Note that it is not\n  generally necessary to wrap predicates in spec when using the rest\n  of the spec macros, only to attach a unique generator\n\n  Can also be passed the result of one of the regex ops -\n  cat, alt, *, +, ?, in which case it will return a regex-conforming\n  spec, useful when nesting an independent regex.\n  ---\n\n  Optionally takes :gen generator-fn, which must be a fn of no args that\n  returns a test.check generator.\n\n  Returns a spec.",(cljs.core.truth_(cljs.spec$macros.spec)?cljs.spec$macros.spec.cljs$lang$test:null)])));})()
;

cljs.spec$macros.spec.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,form,p__72){
var map__73 = p__72;
var map__73__$1 = ((((!((map__73 == null)))?((((map__73.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73):map__73);
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73__$1,new cljs.core.Keyword(null,"gen","gen",(142575302)));
if(cljs.core.truth_(form)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","spec-impl","cljs.spec/spec-impl",(-1647407472),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = cljs.spec$macros.res(_AMPERSAND_env,form);
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = gen;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)));
} else {
return null;
}
});

cljs.spec$macros.spec.cljs$lang$maxFixedArity = (3);

cljs.spec$macros.spec.cljs$lang$applyTo = (function (seq68){
var G__69 = cljs.core.first(seq68);
var seq68__$1 = cljs.core.next(seq68);
var G__70 = cljs.core.first(seq68__$1);
var seq68__$2 = cljs.core.next(seq68__$1);
var G__71 = cljs.core.first(seq68__$2);
var seq68__$3 = cljs.core.next(seq68__$2);
return cljs.spec$macros.spec.cljs$core$IFn$_invoke$arity$variadic(G__69,G__70,G__71,seq68__$3);
});

new cljs.core.Var(function(){return cljs.spec$macros.spec;},new cljs.core.Symbol("cljs.spec$macros","spec","cljs.spec$macros/spec",(552362252),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null),"cljs/spec.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(62),true,(62),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null)], null)),"Takes a single predicate form, e.g. can be the name of a predicate,\n  like even?, or a fn literal like #(< % 42). Note that it is not\n  generally necessary to wrap predicates in spec when using the rest\n  of the spec macros, only to attach a unique generator\n\n  Can also be passed the result of one of the regex ops -\n  cat, alt, *, +, ?, in which case it will return a regex-conforming\n  spec, useful when nesting an independent regex.\n  ---\n\n  Optionally takes :gen generator-fn, which must be a fn of no args that\n  returns a test.check generator.\n\n  Returns a spec.",(cljs.core.truth_(cljs.spec$macros.spec)?cljs.spec$macros.spec.cljs$lang$test:null)]));

cljs.spec$macros.spec.cljs$lang$macro = true;
/**
 * Takes the name of a spec/predicate-returning multimethod and a
 *   tag-restoring keyword or fn (retag).  Returns a spec that when
 *   conforming or explaining data will pass it to the multimethod to get
 *   an appropriate spec. You can e.g. use multi-spec to dynamically and
 *   extensibly associate specs with 'tagged' data (i.e. data where one
 *   of the fields indicates the shape of the rest of the structure).
 * 
 *   (defmulti mspec :tag)
 * 
 *   The methods should ignore their argument and return a predicate/spec:
 *   (defmethod mspec :int [_] (s/keys :req-un [::tag ::i]))
 * 
 *   retag is used during generation to retag generated values with
 *   matching tags. retag can either be a keyword, at which key the
 *   dispatch-tag will be assoc'ed, or a fn of generated value and
 *   dispatch-tag that should return an appropriately retagged value.
 * 
 *   Note that because the tags themselves comprise an open set,
 *   the tag key spec cannot enumerate the values, but can e.g.
 *   test for keyword?.
 * 
 *   Note also that the dispatch values of the multimethod will be
 *   included in the path, i.e. in reporting and gen overrides, even
 *   though those values are not evident in the spec.
 */
(function (){
cljs.spec$macros.multi_spec = (function cljs$spec$macros$multi_spec(_AMPERSAND_form,_AMPERSAND_env,mm,retag){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","multi-spec-impl","cljs.spec/multi-spec-impl",(1001154684),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = cljs.spec$macros.res(_AMPERSAND_env,mm);
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",(870848730),null)),(function (){var x__25689__auto__ = mm;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = retag;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.multi_spec;},new cljs.core.Symbol("cljs.spec$macros","multi-spec","cljs.spec$macros/multi-spec",(2138429287),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"multi-spec","multi-spec",(-1379716045),null),"cljs/spec.cljc",(21),(1),(81),true,(81),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mm","mm",(-12319033),null),new cljs.core.Symbol(null,"retag","retag",(528972725),null)], null)),"Takes the name of a spec/predicate-returning multimethod and a\n  tag-restoring keyword or fn (retag).  Returns a spec that when\n  conforming or explaining data will pass it to the multimethod to get\n  an appropriate spec. You can e.g. use multi-spec to dynamically and\n  extensibly associate specs with 'tagged' data (i.e. data where one\n  of the fields indicates the shape of the rest of the structure).\n\n  (defmulti mspec :tag)\n\n  The methods should ignore their argument and return a predicate/spec:\n  (defmethod mspec :int [_] (s/keys :req-un [::tag ::i]))\n\n  retag is used during generation to retag generated values with\n  matching tags. retag can either be a keyword, at which key the\n  dispatch-tag will be assoc'ed, or a fn of generated value and\n  dispatch-tag that should return an appropriately retagged value.\n\n  Note that because the tags themselves comprise an open set,\n  the tag key spec cannot enumerate the values, but can e.g.\n  test for keyword?.\n\n  Note also that the dispatch values of the multimethod will be\n  included in the path, i.e. in reporting and gen overrides, even\n  though those values are not evident in the spec.\n",(cljs.core.truth_(cljs.spec$macros.multi_spec)?cljs.spec$macros.multi_spec.cljs$lang$test:null)])));})()
;

cljs.spec$macros.multi_spec.cljs$lang$macro = true;
/**
 * Creates and returns a map validating spec. :req and :opt are both
 *   vectors of namespaced-qualified keywords. The validator will ensure
 *   the :req keys are present. The :opt keys serve as documentation and
 *   may be used by the generator.
 * 
 *   The :req key vector supports 'and' and 'or' for key groups:
 * 
 *   (s/keys :req [::x ::y (or ::secret (and ::user ::pwd))] :opt [::z])
 * 
 *   There are also -un versions of :req and :opt. These allow
 *   you to connect unqualified keys to specs.  In each case, fully
 *   qualfied keywords are passed, which name the specs, but unqualified
 *   keys (with the same name component) are expected and checked at
 *   conform-time, and generated during gen:
 * 
 *   (s/keys :req-un [:my.ns/x :my.ns/y])
 * 
 *   The above says keys :x and :y are required, and will be validated
 *   and generated by specs (if they exist) named :my.ns/x :my.ns/y
 *   respectively.
 * 
 *   In addition, the values of *all* namespace-qualified keys will be validated
 *   (and possibly destructured) by any registered specs. Note: there is
 *   no support for inline value specification, by design.
 * 
 *   Optionally takes :gen generator-fn, which must be a fn of no args that
 *   returns a test.check generator.
 */
(function (){
cljs.spec$macros.keys = (function cljs$spec$macros$keys(var_args){
var args__25948__auto__ = [];
var len__25946__auto___84 = arguments.length;
var i__25947__auto___85 = (0);
while(true){
if((i__25947__auto___85 < len__25946__auto___84)){
args__25948__auto__.push((arguments[i__25947__auto___85]));

var G__86 = (i__25947__auto___85 + (1));
i__25947__auto___85 = G__86;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((2) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((2)),(0),null)):null);
return cljs.spec$macros.keys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.keys;},new cljs.core.Symbol("cljs.spec$macros","keys","cljs.spec$macros/keys",(-553235059),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"keys","keys",(-1586012071),null),"cljs/spec.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req","req",(1314083224),null),new cljs.core.Symbol(null,"req-un","req-un",(-1579864761),null),new cljs.core.Symbol(null,"opt","opt",(845825158),null),new cljs.core.Symbol(null,"opt-un","opt-un",(-1770993273),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req","req",(1314083224),null),new cljs.core.Symbol(null,"req-un","req-un",(-1579864761),null),new cljs.core.Symbol(null,"opt","opt",(845825158),null),new cljs.core.Symbol(null,"opt-un","opt-un",(-1770993273),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(110),true,(110),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req","req",(1314083224),null),new cljs.core.Symbol(null,"req-un","req-un",(-1579864761),null),new cljs.core.Symbol(null,"opt","opt",(845825158),null),new cljs.core.Symbol(null,"opt-un","opt-un",(-1770993273),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null)], null)),"Creates and returns a map validating spec. :req and :opt are both\n  vectors of namespaced-qualified keywords. The validator will ensure\n  the :req keys are present. The :opt keys serve as documentation and\n  may be used by the generator.\n\n  The :req key vector supports 'and' and 'or' for key groups:\n\n  (s/keys :req [::x ::y (or ::secret (and ::user ::pwd))] :opt [::z])\n\n  There are also -un versions of :req and :opt. These allow\n  you to connect unqualified keys to specs.  In each case, fully\n  qualfied keywords are passed, which name the specs, but unqualified\n  keys (with the same name component) are expected and checked at\n  conform-time, and generated during gen:\n\n  (s/keys :req-un [:my.ns/x :my.ns/y])\n\n  The above says keys :x and :y are required, and will be validated\n  and generated by specs (if they exist) named :my.ns/x :my.ns/y\n  respectively.\n\n  In addition, the values of *all* namespace-qualified keys will be validated\n  (and possibly destructured) by any registered specs. Note: there is\n  no support for inline value specification, by design.\n\n  Optionally takes :gen generator-fn, which must be a fn of no args that\n  returns a test.check generator.",(cljs.core.truth_(cljs.spec$macros.keys)?cljs.spec$macros.keys.cljs$lang$test:null)])));})()
;

cljs.spec$macros.keys.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__81){
var map__82 = p__81;
var map__82__$1 = ((((!((map__82 == null)))?((((map__82.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82):map__82);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82__$1,new cljs.core.Keyword(null,"req","req",(-326448303)));
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82__$1,new cljs.core.Keyword(null,"req-un","req-un",(1074571008)));
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82__$1,new cljs.core.Keyword(null,"opt","opt",(-794706369)));
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82__$1,new cljs.core.Keyword(null,"opt-un","opt-un",(883442496)));
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82__$1,new cljs.core.Keyword(null,"gen","gen",(142575302)));
var unk = ((function (map__82,map__82__$1,req,req_un,opt,opt_un,gen){
return (function (p1__5_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__5_SHARP_));
});})(map__82,map__82__$1,req,req_un,opt,opt_un,gen))
;
var req_keys = cljs.core.filterv(cljs.core.keyword_QMARK_,cljs.core.flatten(req));
var req_un_specs = cljs.core.filterv(cljs.core.keyword_QMARK_,cljs.core.flatten(req_un));
var _ = ((cljs.core.every_QMARK_(((function (unk,req_keys,req_un_specs,map__82,map__82__$1,req,req_un,opt,opt_un,gen){
return (function (p1__6_SHARP_){
var and__23067__auto__ = (p1__6_SHARP_ instanceof cljs.core.Keyword);
if(and__23067__auto__){
return cljs.core.namespace(p1__6_SHARP_);
} else {
return and__23067__auto__;
}
});})(unk,req_keys,req_un_specs,map__82,map__82__$1,req,req_un,opt,opt_un,gen))
,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(req_keys,req_un_specs,cljs.core.array_seq([opt,opt_un], 0))))?null:(function(){throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("all keys must be namespace-qualified keywords"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(every? (fn* [p1__6#] (clojure.core/and (keyword? p1__6#) (namespace p1__6#))) (concat req-keys req-un-specs opt opt-un))")].join('')))})());
var req_specs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(req_keys,req_un_specs);
var req_keys__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(req_keys,cljs.core.map.cljs$core$IFn$_invoke$arity$2(unk,req_un_specs));
var opt_keys = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(opt),cljs.core.map.cljs$core$IFn$_invoke$arity$2(unk,opt_un));
var opt_specs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(opt),opt_un);
var gx = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var parse_req = ((function (unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__82,map__82__$1,req,req_un,opt,opt_un,gen){
return (function (rk,f){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__82,map__82__$1,req,req_un,opt,opt_un,gen){
return (function (x){
if((x instanceof cljs.core.Keyword)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",(-976526835),null)),(function (){var x__25689__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
} else {
return clojure.walk.postwalk(((function (unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__82,map__82__$1,req,req_un,opt,opt_un,gen){
return (function (y){
if((y instanceof cljs.core.Keyword)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",(-976526835),null)),(function (){var x__25689__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
} else {
return y;
}
});})(unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__82,map__82__$1,req,req_un,opt,opt_un,gen))
,x);
}
});})(unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__82,map__82__$1,req,req_un,opt,opt_un,gen))
,rk);
});})(unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__82,map__82__$1,req,req_un,opt,opt_un,gen))
;
var pred_exprs = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",(-1390345523),null)),(function (){var x__25689__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()))], null);
var pred_exprs__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(pred_exprs,parse_req(req,cljs.core.identity));
var pred_exprs__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(pred_exprs__$1,parse_req(req_un,unk));
var keys_pred = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__25689__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),pred_exprs__$2));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
var pred_exprs__$3 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,parse_req,pred_exprs,pred_exprs__$1,pred_exprs__$2,keys_pred,map__82,map__82__$1,req,req_un,opt,opt_un,gen){
return (function (e){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__25689__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
});})(unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,parse_req,pred_exprs,pred_exprs__$1,pred_exprs__$2,keys_pred,map__82,map__82__$1,req,req_un,opt,opt_un,gen))
,pred_exprs__$2);
var pred_forms = clojure.walk.postwalk(((function (unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,parse_req,pred_exprs,pred_exprs__$1,pred_exprs__$2,keys_pred,pred_exprs__$3,map__82,map__82__$1,req,req_un,opt,opt_un,gen){
return (function (p1__7_SHARP_){
return cljs.spec$macros.res(_AMPERSAND_env,p1__7_SHARP_);
});})(unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,parse_req,pred_exprs,pred_exprs__$1,pred_exprs__$2,keys_pred,pred_exprs__$3,map__82,map__82__$1,req,req_un,opt,opt_un,gen))
,pred_exprs__$3);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","map-spec-impl","cljs.spec/map-spec-impl",(-1014292963),null)),(function (){var x__25689__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"req-un","req-un",(1074571008))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = req_un;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"opt-un","opt-un",(883442496))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = opt_un;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"gfn","gfn",(791517474))),(function (){var x__25689__auto__ = gen;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",(1792271395))),(function (){var x__25689__auto__ = pred_exprs__$3;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"keys-pred","keys-pred",(858984739))),(function (){var x__25689__auto__ = keys_pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"opt-keys","opt-keys",(1262688261))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = opt_keys;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"req-specs","req-specs",(553962313))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = req_specs;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"req","req",(-326448303))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = req;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"req-keys","req-keys",(514319221))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = req_keys__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"opt-specs","opt-specs",(-384905450))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = opt_specs;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pred-forms","pred-forms",(172611832))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = pred_forms;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"opt","opt",(-794706369))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = opt;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
});

cljs.spec$macros.keys.cljs$lang$maxFixedArity = (2);

cljs.spec$macros.keys.cljs$lang$applyTo = (function (seq78){
var G__79 = cljs.core.first(seq78);
var seq78__$1 = cljs.core.next(seq78);
var G__80 = cljs.core.first(seq78__$1);
var seq78__$2 = cljs.core.next(seq78__$1);
return cljs.spec$macros.keys.cljs$core$IFn$_invoke$arity$variadic(G__79,G__80,seq78__$2);
});

new cljs.core.Var(function(){return cljs.spec$macros.keys;},new cljs.core.Symbol("cljs.spec$macros","keys","cljs.spec$macros/keys",(-553235059),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"keys","keys",(-1586012071),null),"cljs/spec.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req","req",(1314083224),null),new cljs.core.Symbol(null,"req-un","req-un",(-1579864761),null),new cljs.core.Symbol(null,"opt","opt",(845825158),null),new cljs.core.Symbol(null,"opt-un","opt-un",(-1770993273),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req","req",(1314083224),null),new cljs.core.Symbol(null,"req-un","req-un",(-1579864761),null),new cljs.core.Symbol(null,"opt","opt",(845825158),null),new cljs.core.Symbol(null,"opt-un","opt-un",(-1770993273),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(110),true,(110),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req","req",(1314083224),null),new cljs.core.Symbol(null,"req-un","req-un",(-1579864761),null),new cljs.core.Symbol(null,"opt","opt",(845825158),null),new cljs.core.Symbol(null,"opt-un","opt-un",(-1770993273),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null)], null)),"Creates and returns a map validating spec. :req and :opt are both\n  vectors of namespaced-qualified keywords. The validator will ensure\n  the :req keys are present. The :opt keys serve as documentation and\n  may be used by the generator.\n\n  The :req key vector supports 'and' and 'or' for key groups:\n\n  (s/keys :req [::x ::y (or ::secret (and ::user ::pwd))] :opt [::z])\n\n  There are also -un versions of :req and :opt. These allow\n  you to connect unqualified keys to specs.  In each case, fully\n  qualfied keywords are passed, which name the specs, but unqualified\n  keys (with the same name component) are expected and checked at\n  conform-time, and generated during gen:\n\n  (s/keys :req-un [:my.ns/x :my.ns/y])\n\n  The above says keys :x and :y are required, and will be validated\n  and generated by specs (if they exist) named :my.ns/x :my.ns/y\n  respectively.\n\n  In addition, the values of *all* namespace-qualified keys will be validated\n  (and possibly destructured) by any registered specs. Note: there is\n  no support for inline value specification, by design.\n\n  Optionally takes :gen generator-fn, which must be a fn of no args that\n  returns a test.check generator.",(cljs.core.truth_(cljs.spec$macros.keys)?cljs.spec$macros.keys.cljs$lang$test:null)]));

cljs.spec$macros.keys.cljs$lang$macro = true;
/**
 * Takes key+pred pairs, e.g.
 * 
 *   (s/or :even even? :small #(< % 42))
 * 
 *   Returns a destructuring spec that returns a map entry containing the
 *   key of the first matching pred and the corresponding value. Thus the
 *   'key' and 'val' functions can be used to refer generically to the
 *   components of the tagged return.
 */
(function (){
cljs.spec$macros.or = (function cljs$spec$macros$or(var_args){
var args__25948__auto__ = [];
var len__25946__auto___90 = arguments.length;
var i__25947__auto___91 = (0);
while(true){
if((i__25947__auto___91 < len__25946__auto___90)){
args__25948__auto__.push((arguments[i__25947__auto___91]));

var G__92 = (i__25947__auto___91 + (1));
i__25947__auto___91 = G__92;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((2) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((2)),(0),null)):null);
return cljs.spec$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.or;},new cljs.core.Symbol("cljs.spec$macros","or","cljs.spec$macros/or",(1030139044),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"or","or",(1876275696),null),"cljs/spec.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(172),true,(172),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null)], null)),"Takes key+pred pairs, e.g.\n\n  (s/or :even even? :small #(< % 42))\n\n  Returns a destructuring spec that returns a map entry containing the\n  key of the first matching pred and the corresponding value. Thus the\n  'key' and 'val' functions can be used to refer generically to the\n  components of the tagged return.",(cljs.core.truth_(cljs.spec$macros.or)?cljs.spec$macros.or.cljs$lang$test:null)])));})()
;

cljs.spec$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,key_pred_forms){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),key_pred_forms);
var keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var pred_forms = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
var pf = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (pairs,keys,pred_forms){
return (function (p1__8_SHARP_){
return cljs.spec$macros.res(_AMPERSAND_env,p1__8_SHARP_);
});})(pairs,keys,pred_forms))
,pred_forms);
if((cljs.core.even_QMARK_(cljs.core.count(key_pred_forms))) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,keys))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("spec/or expects k1 p1 k2 p2..., where ks are keywords"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/and (even? (count key-pred-forms)) (every? keyword? keys))")].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","or-spec-impl","cljs.spec/or-spec-impl",(2080519296),null)),(function (){var x__25689__auto__ = keys;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = pf;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = pred_forms;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)));
});

cljs.spec$macros.or.cljs$lang$maxFixedArity = (2);

cljs.spec$macros.or.cljs$lang$applyTo = (function (seq87){
var G__88 = cljs.core.first(seq87);
var seq87__$1 = cljs.core.next(seq87);
var G__89 = cljs.core.first(seq87__$1);
var seq87__$2 = cljs.core.next(seq87__$1);
return cljs.spec$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__88,G__89,seq87__$2);
});

new cljs.core.Var(function(){return cljs.spec$macros.or;},new cljs.core.Symbol("cljs.spec$macros","or","cljs.spec$macros/or",(1030139044),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"or","or",(1876275696),null),"cljs/spec.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(172),true,(172),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null)], null)),"Takes key+pred pairs, e.g.\n\n  (s/or :even even? :small #(< % 42))\n\n  Returns a destructuring spec that returns a map entry containing the\n  key of the first matching pred and the corresponding value. Thus the\n  'key' and 'val' functions can be used to refer generically to the\n  components of the tagged return.",(cljs.core.truth_(cljs.spec$macros.or)?cljs.spec$macros.or.cljs$lang$test:null)]));

cljs.spec$macros.or.cljs$lang$macro = true;
/**
 * Takes predicate/spec-forms, e.g.
 * 
 *   (s/and even? #(< % 42))
 * 
 *   Returns a spec that returns the conformed value. Successive
 *   conformed values propagate through rest of predicates.
 */
(function (){
cljs.spec$macros.and = (function cljs$spec$macros$and(var_args){
var args__25948__auto__ = [];
var len__25946__auto___96 = arguments.length;
var i__25947__auto___97 = (0);
while(true){
if((i__25947__auto___97 < len__25946__auto___96)){
args__25948__auto__.push((arguments[i__25947__auto___97]));

var G__98 = (i__25947__auto___97 + (1));
i__25947__auto___97 = G__98;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((2) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((2)),(0),null)):null);
return cljs.spec$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.and;},new cljs.core.Symbol("cljs.spec$macros","and","cljs.spec$macros/and",(-162943022),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"and","and",(668631710),null),"cljs/spec.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred-forms","pred-forms",(1813143359),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"pred-forms","pred-forms",(1813143359),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(189),true,(189),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"pred-forms","pred-forms",(1813143359),null)], null)),"Takes predicate/spec-forms, e.g.\n\n  (s/and even? #(< % 42))\n\n  Returns a spec that returns the conformed value. Successive\n  conformed values propagate through rest of predicates.",(cljs.core.truth_(cljs.spec$macros.and)?cljs.spec$macros.and.cljs$lang$test:null)])));})()
;

cljs.spec$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred_forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and-spec-impl","cljs.spec/and-spec-impl",(1959775372),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__9_SHARP_){
return cljs.spec$macros.res(_AMPERSAND_env,p1__9_SHARP_);
}),pred_forms);
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.vec(pred_forms);
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)));
});

cljs.spec$macros.and.cljs$lang$maxFixedArity = (2);

cljs.spec$macros.and.cljs$lang$applyTo = (function (seq93){
var G__94 = cljs.core.first(seq93);
var seq93__$1 = cljs.core.next(seq93);
var G__95 = cljs.core.first(seq93__$1);
var seq93__$2 = cljs.core.next(seq93__$1);
return cljs.spec$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__94,G__95,seq93__$2);
});

new cljs.core.Var(function(){return cljs.spec$macros.and;},new cljs.core.Symbol("cljs.spec$macros","and","cljs.spec$macros/and",(-162943022),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"and","and",(668631710),null),"cljs/spec.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred-forms","pred-forms",(1813143359),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"pred-forms","pred-forms",(1813143359),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(189),true,(189),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"pred-forms","pred-forms",(1813143359),null)], null)),"Takes predicate/spec-forms, e.g.\n\n  (s/and even? #(< % 42))\n\n  Returns a spec that returns the conformed value. Successive\n  conformed values propagate through rest of predicates.",(cljs.core.truth_(cljs.spec$macros.and)?cljs.spec$macros.and.cljs$lang$test:null)]));

cljs.spec$macros.and.cljs$lang$macro = true;
/**
 * takes a pred and validates collection elements against that pred.
 * 
 *   Note that 'every' does not do exhaustive checking, rather it samples
 *   *coll-check-limit* elements. Nor (as a result) does it do any
 *   conforming of elements. 'explain' will report at most *coll-error-limit*
 *   problems.  Thus 'every' should be suitable for potentially large
 *   collections.
 * 
 *   Takes several kwargs options that further constrain the collection:
 * 
 *   :kind - a pred/spec that the collection type must satisfy, e.g. vector?
 *        (default nil) Note that if :kind is specified and :into is
 *        not, this pred must generate in order for every to generate.
 *   :count - specifies coll has exactly this count (default nil)
 *   :min-count, :max-count - coll has count (<= min-count count max-count) (defaults nil)
 *   :distinct - all the elements are distinct (default nil)
 * 
 *   And additional args that control gen
 * 
 *   :gen-max - the maximum coll size to generate (default 20)
 *   :into - one of [], (), {}, #{} - the default collection to generate into
 *    (default same as :kind if supplied, else []
 * 
 *   Optionally takes :gen generator-fn, which must be a fn of no args that
 *   returns a test.check generator
 * 
 *   See also - coll-of, every-kv
 */
(function (){
cljs.spec$macros.every = (function cljs$spec$macros$every(var_args){
var args__25948__auto__ = [];
var len__25946__auto___107 = arguments.length;
var i__25947__auto___108 = (0);
while(true){
if((i__25947__auto___108 < len__25946__auto___107)){
args__25948__auto__.push((arguments[i__25947__auto___108]));

var G__109 = (i__25947__auto___108 + (1));
i__25947__auto___108 = G__109;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((3) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((3)),(0),null)):null);
return cljs.spec$macros.every.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.every;},new cljs.core.Symbol("cljs.spec$macros","every","cljs.spec$macros/every",(-1804875403),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"every","every",(-419764351),null),"cljs/spec.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"into","into",(1489695498),null),new cljs.core.Symbol(null,"kind","kind",(923265724),null),new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"max-count","max-count",(-1115250464),null),new cljs.core.Symbol(null,"min-count","min-count",(-1059726756),null),new cljs.core.Symbol(null,"distinct","distinct",(-148347594),null),new cljs.core.Symbol(null,"gen-max","gen-max",(846851082),null),new cljs.core.Symbol(null,"gen-into","gen-into",(592640985),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"into","into",(1489695498),null),new cljs.core.Symbol(null,"kind","kind",(923265724),null),new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"max-count","max-count",(-1115250464),null),new cljs.core.Symbol(null,"min-count","min-count",(-1059726756),null),new cljs.core.Symbol(null,"distinct","distinct",(-148347594),null),new cljs.core.Symbol(null,"gen-max","gen-max",(846851082),null),new cljs.core.Symbol(null,"gen-into","gen-into",(592640985),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(199),true,(199),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"into","into",(1489695498),null),new cljs.core.Symbol(null,"kind","kind",(923265724),null),new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"max-count","max-count",(-1115250464),null),new cljs.core.Symbol(null,"min-count","min-count",(-1059726756),null),new cljs.core.Symbol(null,"distinct","distinct",(-148347594),null),new cljs.core.Symbol(null,"gen-max","gen-max",(846851082),null),new cljs.core.Symbol(null,"gen-into","gen-into",(592640985),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),"takes a pred and validates collection elements against that pred.\n\n  Note that 'every' does not do exhaustive checking, rather it samples\n  *coll-check-limit* elements. Nor (as a result) does it do any\n  conforming of elements. 'explain' will report at most *coll-error-limit*\n  problems.  Thus 'every' should be suitable for potentially large\n  collections.\n\n  Takes several kwargs options that further constrain the collection:\n\n  :kind - a pred/spec that the collection type must satisfy, e.g. vector?\n          (default nil) Note that if :kind is specified and :into is\n          not, this pred must generate in order for every to generate.\n  :count - specifies coll has exactly this count (default nil)\n  :min-count, :max-count - coll has count (<= min-count count max-count) (defaults nil)\n  :distinct - all the elements are distinct (default nil)\n\n  And additional args that control gen\n\n  :gen-max - the maximum coll size to generate (default 20)\n  :into - one of [], (), {}, #{} - the default collection to generate into\n      (default same as :kind if supplied, else []\n\n  Optionally takes :gen generator-fn, which must be a fn of no args that\n  returns a test.check generator\n\n  See also - coll-of, every-kv\n",(cljs.core.truth_(cljs.spec$macros.every)?cljs.spec$macros.every.cljs$lang$test:null)])));})()
;

cljs.spec$macros.every.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,p__103){
var map__104 = p__103;
var map__104__$1 = ((((!((map__104 == null)))?((((map__104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104):map__104);
var opts = map__104__$1;
var max_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104__$1,new cljs.core.Keyword(null,"max-count","max-count",(1539185305)));
var gen_max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104__$1,new cljs.core.Keyword(null,"gen-max","gen-max",(-793680445)));
var into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104__$1,new cljs.core.Keyword(null,"into","into",(-150836029)));
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104__$1,new cljs.core.Keyword(null,"gen","gen",(142575302)));
var distinct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104__$1,new cljs.core.Keyword(null,"distinct","distinct",(-1788879121)));
var gen_into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104__$1,new cljs.core.Keyword(null,"gen-into","gen-into",(-1047890542)));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104__$1,new cljs.core.Keyword(null,"count","count",(2139924085)));
var min_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104__$1,new cljs.core.Keyword(null,"min-count","min-count",(1594709013)));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104__$1,new cljs.core.Keyword(null,"kind","kind",(-717265803)));
var nopts = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"gen","gen",(142575302))),new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",(997489303)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = cljs.spec$macros.res(_AMPERSAND_env,new cljs.core.Keyword(null,"kind","kind",(-717265803)).cljs$core$IFn$_invoke$arity$1(opts));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})())));
var gx = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var cpreds = (function (){var G__106 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__25689__auto__ = (function (){var or__23109__auto__ = kind;
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",(1208130522),null);
}
})();
return cljs.core._conj((function (){var x__25689__auto____$1 = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto____$1);
})(),x__25689__auto__);
})()], null);
var G__106__$1 = (cljs.core.truth_(count)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__106,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null)),(function (){var x__25689__auto__ = count;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","bounded-count","cljs.core/bounded-count",(355256728),null)),(function (){var x__25689__auto__ = count;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)))):G__106);
var G__106__$2 = (cljs.core.truth_((function (){var or__23109__auto__ = min_count;
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
return max_count;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__106__$1,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",(1677001748),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),(function (){var x__25689__auto__ = min_count;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","bounded-count","cljs.core/bounded-count",(355256728),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__25689__auto__ = max_count;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",(-879172610),null)),(function (){var x__25689__auto__ = max_count;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = min_count;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),(function (){var x__25689__auto__ = max_count;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","MAX_INT","cljs.spec/MAX_INT",(-192863469),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)))):G__106__$1);
var G__106__$3 = (cljs.core.truth_(distinct)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__106__$2,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",(1866613644),null)),(function (){var x__25689__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",(1757277831),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","distinct?","cljs.core/distinct?",(-1285807788),null)),cljs.core.array_seq([(function (){var x__25689__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)))):G__106__$2);
return G__106__$3;
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","every-impl","cljs.spec/every-impl",(-1150144333),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nopts,new cljs.core.Keyword("cljs.spec","cpred","cljs.spec/cpred",(1439199454)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__25689__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),cpreds));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = gen;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
});

cljs.spec$macros.every.cljs$lang$maxFixedArity = (3);

cljs.spec$macros.every.cljs$lang$applyTo = (function (seq99){
var G__100 = cljs.core.first(seq99);
var seq99__$1 = cljs.core.next(seq99);
var G__101 = cljs.core.first(seq99__$1);
var seq99__$2 = cljs.core.next(seq99__$1);
var G__102 = cljs.core.first(seq99__$2);
var seq99__$3 = cljs.core.next(seq99__$2);
return cljs.spec$macros.every.cljs$core$IFn$_invoke$arity$variadic(G__100,G__101,G__102,seq99__$3);
});

new cljs.core.Var(function(){return cljs.spec$macros.every;},new cljs.core.Symbol("cljs.spec$macros","every","cljs.spec$macros/every",(-1804875403),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"every","every",(-419764351),null),"cljs/spec.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"into","into",(1489695498),null),new cljs.core.Symbol(null,"kind","kind",(923265724),null),new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"max-count","max-count",(-1115250464),null),new cljs.core.Symbol(null,"min-count","min-count",(-1059726756),null),new cljs.core.Symbol(null,"distinct","distinct",(-148347594),null),new cljs.core.Symbol(null,"gen-max","gen-max",(846851082),null),new cljs.core.Symbol(null,"gen-into","gen-into",(592640985),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"into","into",(1489695498),null),new cljs.core.Symbol(null,"kind","kind",(923265724),null),new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"max-count","max-count",(-1115250464),null),new cljs.core.Symbol(null,"min-count","min-count",(-1059726756),null),new cljs.core.Symbol(null,"distinct","distinct",(-148347594),null),new cljs.core.Symbol(null,"gen-max","gen-max",(846851082),null),new cljs.core.Symbol(null,"gen-into","gen-into",(592640985),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(199),true,(199),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"into","into",(1489695498),null),new cljs.core.Symbol(null,"kind","kind",(923265724),null),new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"max-count","max-count",(-1115250464),null),new cljs.core.Symbol(null,"min-count","min-count",(-1059726756),null),new cljs.core.Symbol(null,"distinct","distinct",(-148347594),null),new cljs.core.Symbol(null,"gen-max","gen-max",(846851082),null),new cljs.core.Symbol(null,"gen-into","gen-into",(592640985),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),"takes a pred and validates collection elements against that pred.\n\n  Note that 'every' does not do exhaustive checking, rather it samples\n  *coll-check-limit* elements. Nor (as a result) does it do any\n  conforming of elements. 'explain' will report at most *coll-error-limit*\n  problems.  Thus 'every' should be suitable for potentially large\n  collections.\n\n  Takes several kwargs options that further constrain the collection:\n\n  :kind - a pred/spec that the collection type must satisfy, e.g. vector?\n          (default nil) Note that if :kind is specified and :into is\n          not, this pred must generate in order for every to generate.\n  :count - specifies coll has exactly this count (default nil)\n  :min-count, :max-count - coll has count (<= min-count count max-count) (defaults nil)\n  :distinct - all the elements are distinct (default nil)\n\n  And additional args that control gen\n\n  :gen-max - the maximum coll size to generate (default 20)\n  :into - one of [], (), {}, #{} - the default collection to generate into\n      (default same as :kind if supplied, else []\n\n  Optionally takes :gen generator-fn, which must be a fn of no args that\n  returns a test.check generator\n\n  See also - coll-of, every-kv\n",(cljs.core.truth_(cljs.spec$macros.every)?cljs.spec$macros.every.cljs$lang$test:null)]));

cljs.spec$macros.every.cljs$lang$macro = true;
/**
 * like 'every' but takes separate key and val preds and works on associative collections.
 * 
 *   Same options as 'every', :into defaults to {}
 * 
 *   See also - map-of
 */
(function (){
cljs.spec$macros.every_kv = (function cljs$spec$macros$every_kv(var_args){
var args__25948__auto__ = [];
var len__25946__auto___115 = arguments.length;
var i__25947__auto___116 = (0);
while(true){
if((i__25947__auto___116 < len__25946__auto___115)){
args__25948__auto__.push((arguments[i__25947__auto___116]));

var G__117 = (i__25947__auto___116 + (1));
i__25947__auto___116 = G__117;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((4) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((4)),(0),null)):null);
return cljs.spec$macros.every_kv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.every_kv;},new cljs.core.Symbol("cljs.spec$macros","every-kv","cljs.spec$macros/every-kv",(1829467865),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"every-kv","every-kv",(-1701549683),null),"cljs/spec.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kpred","kpred",(-1781125167),null),new cljs.core.Symbol(null,"vpred","vpred",(1944119183),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kpred","kpred",(-1781125167),null),new cljs.core.Symbol(null,"vpred","vpred",(1944119183),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(243),true,(243),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kpred","kpred",(-1781125167),null),new cljs.core.Symbol(null,"vpred","vpred",(1944119183),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"like 'every' but takes separate key and val preds and works on associative collections.\n\n  Same options as 'every', :into defaults to {}\n\n  See also - map-of",(cljs.core.truth_(cljs.spec$macros.every_kv)?cljs.spec$macros.every_kv.cljs$lang$test:null)])));})()
;

cljs.spec$macros.every_kv.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kpred,vpred,opts){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","every","cljs.spec/every",(-1899705480),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","tuple","cljs.spec/tuple",(500419708),null)),(function (){var x__25689__auto__ = kpred;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = vpred;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec","kfn","cljs.spec/kfn",(293196937))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__10__auto__","i__10__auto__",(-452540663),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"v__11__auto__","v__11__auto__",(313039180),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",(1961052085),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"v__11__auto__","v__11__auto__",(313039180),null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"into","into",(-150836029))),(function (){var x__25689__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),opts], 0)));
});

cljs.spec$macros.every_kv.cljs$lang$maxFixedArity = (4);

cljs.spec$macros.every_kv.cljs$lang$applyTo = (function (seq110){
var G__111 = cljs.core.first(seq110);
var seq110__$1 = cljs.core.next(seq110);
var G__112 = cljs.core.first(seq110__$1);
var seq110__$2 = cljs.core.next(seq110__$1);
var G__113 = cljs.core.first(seq110__$2);
var seq110__$3 = cljs.core.next(seq110__$2);
var G__114 = cljs.core.first(seq110__$3);
var seq110__$4 = cljs.core.next(seq110__$3);
return cljs.spec$macros.every_kv.cljs$core$IFn$_invoke$arity$variadic(G__111,G__112,G__113,G__114,seq110__$4);
});

new cljs.core.Var(function(){return cljs.spec$macros.every_kv;},new cljs.core.Symbol("cljs.spec$macros","every-kv","cljs.spec$macros/every-kv",(1829467865),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"every-kv","every-kv",(-1701549683),null),"cljs/spec.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kpred","kpred",(-1781125167),null),new cljs.core.Symbol(null,"vpred","vpred",(1944119183),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kpred","kpred",(-1781125167),null),new cljs.core.Symbol(null,"vpred","vpred",(1944119183),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(243),true,(243),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kpred","kpred",(-1781125167),null),new cljs.core.Symbol(null,"vpred","vpred",(1944119183),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"like 'every' but takes separate key and val preds and works on associative collections.\n\n  Same options as 'every', :into defaults to {}\n\n  See also - map-of",(cljs.core.truth_(cljs.spec$macros.every_kv)?cljs.spec$macros.every_kv.cljs$lang$test:null)]));

cljs.spec$macros.every_kv.cljs$lang$macro = true;
/**
 * Returns a spec for a collection of items satisfying pred. Unlike
 *   generator will fill an empty init-coll.
 * 
 *   Same options as 'every'. conform will produce a collection
 *   corresponding to :into if supplied, else will match the input collection,
 *   avoiding rebuilding when possible.
 * 
 *   Same options as 'every'.
 * 
 *   See also - every, map-of
 */
(function (){
cljs.spec$macros.coll_of = (function cljs$spec$macros$coll_of(var_args){
var args__25948__auto__ = [];
var len__25946__auto___122 = arguments.length;
var i__25947__auto___123 = (0);
while(true){
if((i__25947__auto___123 < len__25946__auto___122)){
args__25948__auto__.push((arguments[i__25947__auto___123]));

var G__124 = (i__25947__auto___123 + (1));
i__25947__auto___123 = G__124;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((3) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((3)),(0),null)):null);
return cljs.spec$macros.coll_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.coll_of;},new cljs.core.Symbol("cljs.spec$macros","coll-of","cljs.spec$macros/coll-of",(-909489324),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"coll-of","coll-of",(-1705285400),null),"cljs/spec.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(253),true,(253),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Returns a spec for a collection of items satisfying pred. Unlike\n  generator will fill an empty init-coll.\n\n  Same options as 'every'. conform will produce a collection\n  corresponding to :into if supplied, else will match the input collection,\n  avoiding rebuilding when possible.\n\n  Same options as 'every'.\n\n  See also - every, map-of",(cljs.core.truth_(cljs.spec$macros.coll_of)?cljs.spec$macros.coll_of.cljs$lang$test:null)])));})()
;

cljs.spec$macros.coll_of.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,opts){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","every","cljs.spec/every",(-1899705480),null)),(function (){var x__25689__auto__ = pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",(-1945029907))),cljs.core._conj(cljs.core.List.EMPTY,true),opts], 0)));
});

cljs.spec$macros.coll_of.cljs$lang$maxFixedArity = (3);

cljs.spec$macros.coll_of.cljs$lang$applyTo = (function (seq118){
var G__119 = cljs.core.first(seq118);
var seq118__$1 = cljs.core.next(seq118);
var G__120 = cljs.core.first(seq118__$1);
var seq118__$2 = cljs.core.next(seq118__$1);
var G__121 = cljs.core.first(seq118__$2);
var seq118__$3 = cljs.core.next(seq118__$2);
return cljs.spec$macros.coll_of.cljs$core$IFn$_invoke$arity$variadic(G__119,G__120,G__121,seq118__$3);
});

new cljs.core.Var(function(){return cljs.spec$macros.coll_of;},new cljs.core.Symbol("cljs.spec$macros","coll-of","cljs.spec$macros/coll-of",(-909489324),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"coll-of","coll-of",(-1705285400),null),"cljs/spec.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(253),true,(253),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Returns a spec for a collection of items satisfying pred. Unlike\n  generator will fill an empty init-coll.\n\n  Same options as 'every'. conform will produce a collection\n  corresponding to :into if supplied, else will match the input collection,\n  avoiding rebuilding when possible.\n\n  Same options as 'every'.\n\n  See also - every, map-of",(cljs.core.truth_(cljs.spec$macros.coll_of)?cljs.spec$macros.coll_of.cljs$lang$test:null)]));

cljs.spec$macros.coll_of.cljs$lang$macro = true;
/**
 * Returns a spec for a map whose keys satisfy kpred and vals satisfy
 *   vpred. Unlike 'every-kv', map-of will exhaustively conform every
 *   value.
 * 
 *   Same options as 'every', :kind defaults to map?, with the addition of:
 * 
 *   :conform-keys - conform keys as well as values (default false)
 * 
 *   See also - every-kv
 */
(function (){
cljs.spec$macros.map_of = (function cljs$spec$macros$map_of(var_args){
var args__25948__auto__ = [];
var len__25946__auto___130 = arguments.length;
var i__25947__auto___131 = (0);
while(true){
if((i__25947__auto___131 < len__25946__auto___130)){
args__25948__auto__.push((arguments[i__25947__auto___131]));

var G__132 = (i__25947__auto___131 + (1));
i__25947__auto___131 = G__132;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((4) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((4)),(0),null)):null);
return cljs.spec$macros.map_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.map_of;},new cljs.core.Symbol("cljs.spec$macros","map-of","cljs.spec$macros/map-of",(-1708226778),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"map-of","map-of",(-1464753414),null),"cljs/spec.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kpred","kpred",(-1781125167),null),new cljs.core.Symbol(null,"vpred","vpred",(1944119183),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kpred","kpred",(-1781125167),null),new cljs.core.Symbol(null,"vpred","vpred",(1944119183),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(267),true,(267),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kpred","kpred",(-1781125167),null),new cljs.core.Symbol(null,"vpred","vpred",(1944119183),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Returns a spec for a map whose keys satisfy kpred and vals satisfy\n  vpred. Unlike 'every-kv', map-of will exhaustively conform every\n  value.\n\n  Same options as 'every', :kind defaults to map?, with the addition of:\n\n  :conform-keys - conform keys as well as values (default false)\n\n  See also - every-kv",(cljs.core.truth_(cljs.spec$macros.map_of)?cljs.spec$macros.map_of.cljs$lang$test:null)])));})()
;

cljs.spec$macros.map_of.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kpred,vpred,opts){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","every-kv","cljs.spec/every-kv",(1657959642),null)),(function (){var x__25689__auto__ = kpred;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = vpred;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",(-1945029907))),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kind","kind",(-717265803))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",(-1390345523),null)),opts], 0)));
});

cljs.spec$macros.map_of.cljs$lang$maxFixedArity = (4);

cljs.spec$macros.map_of.cljs$lang$applyTo = (function (seq125){
var G__126 = cljs.core.first(seq125);
var seq125__$1 = cljs.core.next(seq125);
var G__127 = cljs.core.first(seq125__$1);
var seq125__$2 = cljs.core.next(seq125__$1);
var G__128 = cljs.core.first(seq125__$2);
var seq125__$3 = cljs.core.next(seq125__$2);
var G__129 = cljs.core.first(seq125__$3);
var seq125__$4 = cljs.core.next(seq125__$3);
return cljs.spec$macros.map_of.cljs$core$IFn$_invoke$arity$variadic(G__126,G__127,G__128,G__129,seq125__$4);
});

new cljs.core.Var(function(){return cljs.spec$macros.map_of;},new cljs.core.Symbol("cljs.spec$macros","map-of","cljs.spec$macros/map-of",(-1708226778),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"map-of","map-of",(-1464753414),null),"cljs/spec.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kpred","kpred",(-1781125167),null),new cljs.core.Symbol(null,"vpred","vpred",(1944119183),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kpred","kpred",(-1781125167),null),new cljs.core.Symbol(null,"vpred","vpred",(1944119183),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(267),true,(267),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kpred","kpred",(-1781125167),null),new cljs.core.Symbol(null,"vpred","vpred",(1944119183),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Returns a spec for a map whose keys satisfy kpred and vals satisfy\n  vpred. Unlike 'every-kv', map-of will exhaustively conform every\n  value.\n\n  Same options as 'every', :kind defaults to map?, with the addition of:\n\n  :conform-keys - conform keys as well as values (default false)\n\n  See also - every-kv",(cljs.core.truth_(cljs.spec$macros.map_of)?cljs.spec$macros.map_of.cljs$lang$test:null)]));

cljs.spec$macros.map_of.cljs$lang$macro = true;
/**
 * Returns a regex op that matches zero or more values matching
 *   pred. Produces a vector of matches iff there is at least one match
 */
(function (){
cljs.spec$macros._STAR_ = (function cljs$spec$macros$_STAR_(_AMPERSAND_form,_AMPERSAND_env,pred_form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","rep-impl","cljs.spec/rep-impl",(-1679724299),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = cljs.spec$macros.res(_AMPERSAND_env,pred_form);
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = pred_form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
}); return (
new cljs.core.Var(function(){return cljs.spec$macros._STAR_;},new cljs.core.Symbol("cljs.spec$macros","*","cljs.spec$macros/*",(-1022404451),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"*","*",(345799209),null),"cljs/spec.cljc",(12),(1),(280),true,(280),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred-form","pred-form",(1189696240),null)], null)),"Returns a regex op that matches zero or more values matching\n  pred. Produces a vector of matches iff there is at least one match",(cljs.core.truth_(cljs.spec$macros._STAR_)?cljs.spec$macros._STAR_.cljs$lang$test:null)])));})()
;

cljs.spec$macros._STAR_.cljs$lang$macro = true;
/**
 * Returns a regex op that matches one or more values matching
 *   pred. Produces a vector of matches
 */
(function (){
cljs.spec$macros._PLUS_ = (function cljs$spec$macros$_PLUS_(_AMPERSAND_form,_AMPERSAND_env,pred_form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","rep+impl","cljs.spec/rep+impl",(-903423170),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = cljs.spec$macros.res(_AMPERSAND_env,pred_form);
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = pred_form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
}); return (
new cljs.core.Var(function(){return cljs.spec$macros._PLUS_;},new cljs.core.Symbol("cljs.spec$macros","+","cljs.spec$macros/+",(-499008234),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"+","+",(-740910886),null),"cljs/spec.cljc",(12),(1),(286),true,(286),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred-form","pred-form",(1189696240),null)], null)),"Returns a regex op that matches one or more values matching\n  pred. Produces a vector of matches",(cljs.core.truth_(cljs.spec$macros._PLUS_)?cljs.spec$macros._PLUS_.cljs$lang$test:null)])));})()
;

cljs.spec$macros._PLUS_.cljs$lang$macro = true;
/**
 * Returns a regex op that matches zero or one value matching
 *   pred. Produces a single value (not a collection) if matched.
 */
(function (){
cljs.spec$macros._QMARK_ = (function cljs$spec$macros$_QMARK_(_AMPERSAND_form,_AMPERSAND_env,pred_form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","maybe-impl","cljs.spec/maybe-impl",(-2372652),null)),(function (){var x__25689__auto__ = pred_form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = pred_form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
}); return (
new cljs.core.Var(function(){return cljs.spec$macros._QMARK_;},new cljs.core.Symbol("cljs.spec$macros","?","cljs.spec$macros/?",(-1430952726),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"?","?",(-62633706),null),"cljs/spec.cljc",(12),(1),(292),true,(292),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred-form","pred-form",(1189696240),null)], null)),"Returns a regex op that matches zero or one value matching\n  pred. Produces a single value (not a collection) if matched.",(cljs.core.truth_(cljs.spec$macros._QMARK_)?cljs.spec$macros._QMARK_.cljs$lang$test:null)])));})()
;

cljs.spec$macros._QMARK_.cljs$lang$macro = true;
/**
 * Takes key+pred pairs, e.g.
 * 
 *   (s/alt :even even? :small #(< % 42))
 * 
 *   Returns a regex op that returns a map entry containing the key of the
 *   first matching pred and the corresponding value. Thus the
 *   'key' and 'val' functions can be used to refer generically to the
 *   components of the tagged return.
 */
(function (){
cljs.spec$macros.alt = (function cljs$spec$macros$alt(var_args){
var args__25948__auto__ = [];
var len__25946__auto___136 = arguments.length;
var i__25947__auto___137 = (0);
while(true){
if((i__25947__auto___137 < len__25946__auto___136)){
args__25948__auto__.push((arguments[i__25947__auto___137]));

var G__138 = (i__25947__auto___137 + (1));
i__25947__auto___137 = G__138;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((2) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((2)),(0),null)):null);
return cljs.spec$macros.alt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.alt;},new cljs.core.Symbol("cljs.spec$macros","alt","cljs.spec$macros/alt",(1040603697),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"alt","alt",(1637317101),null),"cljs/spec.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(298),true,(298),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null)], null)),"Takes key+pred pairs, e.g.\n\n  (s/alt :even even? :small #(< % 42))\n\n  Returns a regex op that returns a map entry containing the key of the\n  first matching pred and the corresponding value. Thus the\n  'key' and 'val' functions can be used to refer generically to the\n  components of the tagged return.",(cljs.core.truth_(cljs.spec$macros.alt)?cljs.spec$macros.alt.cljs$lang$test:null)])));})()
;

cljs.spec$macros.alt.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,key_pred_forms){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),key_pred_forms);
var keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var pred_forms = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
var pf = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (pairs,keys,pred_forms){
return (function (p1__12_SHARP_){
return cljs.spec$macros.res(_AMPERSAND_env,p1__12_SHARP_);
});})(pairs,keys,pred_forms))
,pred_forms);
if((cljs.core.even_QMARK_(cljs.core.count(key_pred_forms))) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,keys))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("alt expects k1 p1 k2 p2..., where ks are keywords"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/and (even? (count key-pred-forms)) (every? keyword? keys))")].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","alt-impl","cljs.spec/alt-impl",(-536047463),null)),(function (){var x__25689__auto__ = keys;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = pred_forms;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = pf;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
});

cljs.spec$macros.alt.cljs$lang$maxFixedArity = (2);

cljs.spec$macros.alt.cljs$lang$applyTo = (function (seq133){
var G__134 = cljs.core.first(seq133);
var seq133__$1 = cljs.core.next(seq133);
var G__135 = cljs.core.first(seq133__$1);
var seq133__$2 = cljs.core.next(seq133__$1);
return cljs.spec$macros.alt.cljs$core$IFn$_invoke$arity$variadic(G__134,G__135,seq133__$2);
});

new cljs.core.Var(function(){return cljs.spec$macros.alt;},new cljs.core.Symbol("cljs.spec$macros","alt","cljs.spec$macros/alt",(1040603697),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"alt","alt",(1637317101),null),"cljs/spec.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(298),true,(298),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null)], null)),"Takes key+pred pairs, e.g.\n\n  (s/alt :even even? :small #(< % 42))\n\n  Returns a regex op that returns a map entry containing the key of the\n  first matching pred and the corresponding value. Thus the\n  'key' and 'val' functions can be used to refer generically to the\n  components of the tagged return.",(cljs.core.truth_(cljs.spec$macros.alt)?cljs.spec$macros.alt.cljs$lang$test:null)]));

cljs.spec$macros.alt.cljs$lang$macro = true;
/**
 * Takes key+pred pairs, e.g.
 * 
 *   (s/cat :e even? :o odd?)
 * 
 *   Returns a regex op that matches (all) values in sequence, returning a map
 *   containing the keys of each pred and the corresponding value.
 */
(function (){
cljs.spec$macros.cat = (function cljs$spec$macros$cat(var_args){
var args__25948__auto__ = [];
var len__25946__auto___142 = arguments.length;
var i__25947__auto___143 = (0);
while(true){
if((i__25947__auto___143 < len__25946__auto___142)){
args__25948__auto__.push((arguments[i__25947__auto___143]));

var G__144 = (i__25947__auto___143 + (1));
i__25947__auto___143 = G__144;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((2) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((2)),(0),null)):null);
return cljs.spec$macros.cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.cat;},new cljs.core.Symbol("cljs.spec$macros","cat","cljs.spec$macros/cat",(-982317676),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"cat","cat",(182721320),null),"cljs/spec.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(315),true,(315),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null)], null)),"Takes key+pred pairs, e.g.\n\n  (s/cat :e even? :o odd?)\n\n  Returns a regex op that matches (all) values in sequence, returning a map\n  containing the keys of each pred and the corresponding value.",(cljs.core.truth_(cljs.spec$macros.cat)?cljs.spec$macros.cat.cljs$lang$test:null)])));})()
;

cljs.spec$macros.cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,key_pred_forms){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),key_pred_forms);
var keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var pred_forms = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
var pf = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (pairs,keys,pred_forms){
return (function (p1__13_SHARP_){
return cljs.spec$macros.res(_AMPERSAND_env,p1__13_SHARP_);
});})(pairs,keys,pred_forms))
,pred_forms);
if((cljs.core.even_QMARK_(cljs.core.count(key_pred_forms))) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,keys))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("cat expects k1 p1 k2 p2..., where ks are keywords"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/and (even? (count key-pred-forms)) (every? keyword? keys))")].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","cat-impl","cljs.spec/cat-impl",(-595301341),null)),(function (){var x__25689__auto__ = keys;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = pred_forms;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = pf;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
});

cljs.spec$macros.cat.cljs$lang$maxFixedArity = (2);

cljs.spec$macros.cat.cljs$lang$applyTo = (function (seq139){
var G__140 = cljs.core.first(seq139);
var seq139__$1 = cljs.core.next(seq139);
var G__141 = cljs.core.first(seq139__$1);
var seq139__$2 = cljs.core.next(seq139__$1);
return cljs.spec$macros.cat.cljs$core$IFn$_invoke$arity$variadic(G__140,G__141,seq139__$2);
});

new cljs.core.Var(function(){return cljs.spec$macros.cat;},new cljs.core.Symbol("cljs.spec$macros","cat","cljs.spec$macros/cat",(-982317676),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"cat","cat",(182721320),null),"cljs/spec.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(315),true,(315),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null)], null)),"Takes key+pred pairs, e.g.\n\n  (s/cat :e even? :o odd?)\n\n  Returns a regex op that matches (all) values in sequence, returning a map\n  containing the keys of each pred and the corresponding value.",(cljs.core.truth_(cljs.spec$macros.cat)?cljs.spec$macros.cat.cljs$lang$test:null)]));

cljs.spec$macros.cat.cljs$lang$macro = true;
/**
 * takes a regex op re, and predicates. Returns a regex-op that consumes
 *   input as per re but subjects the resulting value to the
 *   conjunction of the predicates, and any conforming they might perform.
 */
(function (){
cljs.spec$macros._AMPERSAND_ = (function cljs$spec$macros$_AMPERSAND_(var_args){
var args__25948__auto__ = [];
var len__25946__auto___149 = arguments.length;
var i__25947__auto___150 = (0);
while(true){
if((i__25947__auto___150 < len__25946__auto___149)){
args__25948__auto__.push((arguments[i__25947__auto___150]));

var G__151 = (i__25947__auto___150 + (1));
i__25947__auto___150 = G__151;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((3) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((3)),(0),null)):null);
return cljs.spec$macros._AMPERSAND_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec$macros._AMPERSAND_;},new cljs.core.Symbol("cljs.spec$macros","&","cljs.spec$macros/&",(-829981460),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),"cljs/spec.cljc",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"re","re",(1869207729),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"re","re",(1869207729),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(331),true,(331),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"re","re",(1869207729),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null)], null)),"takes a regex op re, and predicates. Returns a regex-op that consumes\n  input as per re but subjects the resulting value to the\n  conjunction of the predicates, and any conforming they might perform.",(cljs.core.truth_(cljs.spec$macros._AMPERSAND_)?cljs.spec$macros._AMPERSAND_.cljs$lang$test:null)])));})()
;

cljs.spec$macros._AMPERSAND_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,re,preds){
var pv = cljs.core.vec(preds);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","amp-impl","cljs.spec/amp-impl",(796856145),null)),(function (){var x__25689__auto__ = re;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = pv;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (pv){
return (function (p1__14_SHARP_){
return cljs.spec$macros.res(_AMPERSAND_env,p1__14_SHARP_);
});})(pv))
,pv);
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
});

cljs.spec$macros._AMPERSAND_.cljs$lang$maxFixedArity = (3);

cljs.spec$macros._AMPERSAND_.cljs$lang$applyTo = (function (seq145){
var G__146 = cljs.core.first(seq145);
var seq145__$1 = cljs.core.next(seq145);
var G__147 = cljs.core.first(seq145__$1);
var seq145__$2 = cljs.core.next(seq145__$1);
var G__148 = cljs.core.first(seq145__$2);
var seq145__$3 = cljs.core.next(seq145__$2);
return cljs.spec$macros._AMPERSAND_.cljs$core$IFn$_invoke$arity$variadic(G__146,G__147,G__148,seq145__$3);
});

new cljs.core.Var(function(){return cljs.spec$macros._AMPERSAND_;},new cljs.core.Symbol("cljs.spec$macros","&","cljs.spec$macros/&",(-829981460),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),"cljs/spec.cljc",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"re","re",(1869207729),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"re","re",(1869207729),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(331),true,(331),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"re","re",(1869207729),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null)], null)),"takes a regex op re, and predicates. Returns a regex-op that consumes\n  input as per re but subjects the resulting value to the\n  conjunction of the predicates, and any conforming they might perform.",(cljs.core.truth_(cljs.spec$macros._AMPERSAND_)?cljs.spec$macros._AMPERSAND_.cljs$lang$test:null)]));

cljs.spec$macros._AMPERSAND_.cljs$lang$macro = true;
/**
 * takes a predicate function with the semantics of conform i.e. it should return either a
 *   (possibly converted) value or :cljs.spec/invalid, and returns a
 *   spec that uses it as a predicate/conformer. Optionally takes a
 *   second fn that does unform of result of first
 */
(function (){
cljs.spec$macros.conformer = (function cljs$spec$macros$conformer(var_args){
var args152 = [];
var len__25946__auto___155 = arguments.length;
var i__25947__auto___156 = (0);
while(true){
if((i__25947__auto___156 < len__25946__auto___155)){
args152.push((arguments[i__25947__auto___156]));

var G__157 = (i__25947__auto___156 + (1));
i__25947__auto___156 = G__157;
continue;
} else {
}
break;
}

var G__154 = args152.length;
switch (G__154) {
case (3):
return cljs.spec$macros.conformer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.spec$macros.conformer.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((args152.length - (2)))].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.conformer;},new cljs.core.Symbol("cljs.spec$macros","conformer","cljs.spec$macros/conformer",(-391061430),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"conformer","conformer",(-651689994),null),"cljs/spec.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"unf","unf",(-1663126605),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"unf","unf",(-1663126605),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(339),true,(339),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"unf","unf",(-1663126605),null)], null)),"takes a predicate function with the semantics of conform i.e. it should return either a\n  (possibly converted) value or :cljs.spec/invalid, and returns a\n  spec that uses it as a predicate/conformer. Optionally takes a\n  second fn that does unform of result of first",(cljs.core.truth_(cljs.spec$macros.conformer)?cljs.spec$macros.conformer.cljs$lang$test:null)])));})()
;

cljs.spec$macros.conformer.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","spec-impl","cljs.spec/spec-impl",(-1647407472),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)));
});

cljs.spec$macros.conformer.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,f,unf){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","spec-impl","cljs.spec/spec-impl",(-1647407472),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,true),(function (){var x__25689__auto__ = unf;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
});

cljs.spec$macros.conformer.cljs$lang$maxFixedArity = (4);

new cljs.core.Var(function(){return cljs.spec$macros.conformer;},new cljs.core.Symbol("cljs.spec$macros","conformer","cljs.spec$macros/conformer",(-391061430),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"conformer","conformer",(-651689994),null),"cljs/spec.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"unf","unf",(-1663126605),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"unf","unf",(-1663126605),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(339),true,(339),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"unf","unf",(-1663126605),null)], null)),"takes a predicate function with the semantics of conform i.e. it should return either a\n  (possibly converted) value or :cljs.spec/invalid, and returns a\n  spec that uses it as a predicate/conformer. Optionally takes a\n  second fn that does unform of result of first",(cljs.core.truth_(cljs.spec$macros.conformer)?cljs.spec$macros.conformer.cljs$lang$test:null)]));

cljs.spec$macros.conformer.cljs$lang$macro = true;
/**
 * takes :args :ret and (optional) :fn kwargs whose values are preds
 *   and returns a spec whose conform/explain take a fn and validates it
 *   using generative testing. The conformed value is always the fn itself.
 * 
 *   See 'fdef' for a single operation that creates an fspec and
 *   registers it, as well as a full description of :args, :ret and :fn
 * 
 *   fspecs can generate functions that validate the arguments and
 *   fabricate a return value compliant with the :ret spec, ignoring
 *   the :fn spec if present.
 * 
 *   Optionally takes :gen generator-fn, which must be a fn of no args
 *   that returns a test.check generator.
 */
(function (){
cljs.spec$macros.fspec = (function cljs$spec$macros$fspec(var_args){
var args__25948__auto__ = [];
var len__25946__auto___165 = arguments.length;
var i__25947__auto___166 = (0);
while(true){
if((i__25947__auto___166 < len__25946__auto___165)){
args__25948__auto__.push((arguments[i__25947__auto___166]));

var G__167 = (i__25947__auto___166 + (1));
i__25947__auto___166 = G__167;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((2) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((2)),(0),null)):null);
return cljs.spec$macros.fspec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.fspec;},new cljs.core.Symbol("cljs.spec$macros","fspec","cljs.spec$macros/fspec",(740325660),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"fspec","fspec",(1380883392),null),"cljs/spec.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"ret","ret",(1172308713),null),new cljs.core.Symbol(null,"fn","fn",(465265323),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"ret","ret",(1172308713),null),new cljs.core.Symbol(null,"fn","fn",(465265323),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(347),true,(347),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"ret","ret",(1172308713),null),new cljs.core.Symbol(null,"fn","fn",(465265323),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null)], null)),"takes :args :ret and (optional) :fn kwargs whose values are preds\n  and returns a spec whose conform/explain take a fn and validates it\n  using generative testing. The conformed value is always the fn itself.\n\n  See 'fdef' for a single operation that creates an fspec and\n  registers it, as well as a full description of :args, :ret and :fn\n\n  fspecs can generate functions that validate the arguments and\n  fabricate a return value compliant with the :ret spec, ignoring\n  the :fn spec if present.\n\n  Optionally takes :gen generator-fn, which must be a fn of no args\n  that returns a test.check generator.",(cljs.core.truth_(cljs.spec$macros.fspec)?cljs.spec$macros.fspec.cljs$lang$test:null)])));})()
;

cljs.spec$macros.fspec.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__162){
var map__163 = p__162;
var map__163__$1 = ((((!((map__163 == null)))?((((map__163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__163):map__163);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__163__$1,new cljs.core.Keyword(null,"args","args",(1315556576)));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__163__$1,new cljs.core.Keyword(null,"ret","ret",(-468222814)));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__163__$1,new cljs.core.Keyword(null,"fn","fn",(-1175266204)));
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__163__$1,new cljs.core.Keyword(null,"gen","gen",(142575302)));
var env = _AMPERSAND_env;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","fspec-impl","cljs.spec/fspec-impl",(221076141),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","spec","cljs.spec/spec",(775251713),null)),(function (){var x__25689__auto__ = args;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = cljs.spec$macros.res(env,args);
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","spec","cljs.spec/spec",(775251713),null)),(function (){var x__25689__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = cljs.spec$macros.res(env,ret);
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","spec","cljs.spec/spec",(775251713),null)),(function (){var x__25689__auto__ = fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = cljs.spec$macros.res(env,fn);
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = gen;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
});

cljs.spec$macros.fspec.cljs$lang$maxFixedArity = (2);

cljs.spec$macros.fspec.cljs$lang$applyTo = (function (seq159){
var G__160 = cljs.core.first(seq159);
var seq159__$1 = cljs.core.next(seq159);
var G__161 = cljs.core.first(seq159__$1);
var seq159__$2 = cljs.core.next(seq159__$1);
return cljs.spec$macros.fspec.cljs$core$IFn$_invoke$arity$variadic(G__160,G__161,seq159__$2);
});

new cljs.core.Var(function(){return cljs.spec$macros.fspec;},new cljs.core.Symbol("cljs.spec$macros","fspec","cljs.spec$macros/fspec",(740325660),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"fspec","fspec",(1380883392),null),"cljs/spec.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"ret","ret",(1172308713),null),new cljs.core.Symbol(null,"fn","fn",(465265323),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"ret","ret",(1172308713),null),new cljs.core.Symbol(null,"fn","fn",(465265323),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(347),true,(347),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"ret","ret",(1172308713),null),new cljs.core.Symbol(null,"fn","fn",(465265323),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null)], null)),"takes :args :ret and (optional) :fn kwargs whose values are preds\n  and returns a spec whose conform/explain take a fn and validates it\n  using generative testing. The conformed value is always the fn itself.\n\n  See 'fdef' for a single operation that creates an fspec and\n  registers it, as well as a full description of :args, :ret and :fn\n\n  fspecs can generate functions that validate the arguments and\n  fabricate a return value compliant with the :ret spec, ignoring\n  the :fn spec if present.\n\n  Optionally takes :gen generator-fn, which must be a fn of no args\n  that returns a test.check generator.",(cljs.core.truth_(cljs.spec$macros.fspec)?cljs.spec$macros.fspec.cljs$lang$test:null)]));

cljs.spec$macros.fspec.cljs$lang$macro = true;
/**
 * takes one or more preds and returns a spec for a tuple, a vector
 *   where each element conforms to the corresponding pred. Each element
 *   will be referred to in paths using its ordinal.
 */
(function (){
cljs.spec$macros.tuple = (function cljs$spec$macros$tuple(var_args){
var args__25948__auto__ = [];
var len__25946__auto___171 = arguments.length;
var i__25947__auto___172 = (0);
while(true){
if((i__25947__auto___172 < len__25946__auto___171)){
args__25948__auto__.push((arguments[i__25947__auto___172]));

var G__173 = (i__25947__auto___172 + (1));
i__25947__auto___172 = G__173;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((2) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((2)),(0),null)):null);
return cljs.spec$macros.tuple.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.tuple;},new cljs.core.Symbol("cljs.spec$macros","tuple","cljs.spec$macros/tuple",(304796287),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"tuple","tuple",(1167864243),null),"cljs/spec.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(367),true,(367),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null)], null)),"takes one or more preds and returns a spec for a tuple, a vector\n  where each element conforms to the corresponding pred. Each element\n  will be referred to in paths using its ordinal.",(cljs.core.truth_(cljs.spec$macros.tuple)?cljs.spec$macros.tuple.cljs$lang$test:null)])));})()
;

cljs.spec$macros.tuple.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,preds){
if(!(cljs.core.empty_QMARK_(preds))){
} else {
throw (new Error("Assert failed: (not (empty? preds))"));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","tuple-impl","cljs.spec/tuple-impl",(-1888860774),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__15_SHARP_){
return cljs.spec$macros.res(_AMPERSAND_env,p1__15_SHARP_);
}),preds);
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.vec(preds);
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
});

cljs.spec$macros.tuple.cljs$lang$maxFixedArity = (2);

cljs.spec$macros.tuple.cljs$lang$applyTo = (function (seq168){
var G__169 = cljs.core.first(seq168);
var seq168__$1 = cljs.core.next(seq168);
var G__170 = cljs.core.first(seq168__$1);
var seq168__$2 = cljs.core.next(seq168__$1);
return cljs.spec$macros.tuple.cljs$core$IFn$_invoke$arity$variadic(G__169,G__170,seq168__$2);
});

new cljs.core.Var(function(){return cljs.spec$macros.tuple;},new cljs.core.Symbol("cljs.spec$macros","tuple","cljs.spec$macros/tuple",(304796287),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"tuple","tuple",(1167864243),null),"cljs/spec.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(367),true,(367),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null)], null)),"takes one or more preds and returns a spec for a tuple, a vector\n  where each element conforms to the corresponding pred. Each element\n  will be referred to in paths using its ordinal.",(cljs.core.truth_(cljs.spec$macros.tuple)?cljs.spec$macros.tuple.cljs$lang$test:null)]));

cljs.spec$macros.tuple.cljs$lang$macro = true;
(function (){
cljs.spec$macros._speced_vars = (function (){var G__174 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__174) : cljs.core.atom.call(null,G__174));
})(); return (
new cljs.core.Var(function(){return cljs.spec$macros._speced_vars;},new cljs.core.Symbol("cljs.spec$macros","_speced_vars","cljs.spec$macros/_speced_vars",(-580093468),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"_speced_vars","_speced_vars",(-1946182864),null),"cljs/spec.cljc",(28),(1),(375),(375),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec$macros._speced_vars)?cljs.spec$macros._speced_vars.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec$macros.speced_vars = (function cljs$spec$macros$speced_vars(){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec$macros._speced_vars) : cljs.core.deref.call(null,cljs.spec$macros._speced_vars));
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.speced_vars;},new cljs.core.Symbol("cljs.spec$macros","speced-vars","cljs.spec$macros/speced-vars",(-1488516777),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"speced-vars","speced-vars",(-172594461),null),"cljs/spec.cljc",(18),(1),(377),(377),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs.spec$macros.speced_vars)?cljs.spec$macros.speced_vars.cljs$lang$test:null)])));})()
;
/**
 * Takes a symbol naming a function, and one or more of the following:
 * 
 *   :args A regex spec for the function arguments as they were a list to be
 *  passed to apply - in this way, a single spec can handle functions with
 *  multiple arities
 *   :ret A spec for the function's return value
 *   :fn A spec of the relationship between args and ret - the
 *  value passed is {:args conformed-args :ret conformed-ret} and is
 *  expected to contain predicates that relate those values
 * 
 *   Qualifies fn-sym with resolve, or using *ns* if no resolution found.
 *   Registers an fspec in the global registry, where it can be retrieved
 *   by calling get-spec with the var or full-qualified symbol.
 * 
 *   Once registered, function specs are included in doc, checked by
 *   instrument, tested by the runner clojure.spec.test/run-tests, and (if
 *   a macro) used to explain errors during macroexpansion.
 * 
 *   Note that :fn specs require the presence of :args and :ret specs to
 *   conform values, and so :fn specs will be ignored if :args or :ret
 *   are missing.
 * 
 *   Returns the qualified fn-sym.
 * 
 *   For example, to register function specs for the symbol function:
 * 
 *   (s/fdef clojure.core/symbol
 *  :args (s/alt :separate (s/cat :ns string? :n string?)
 *               :str string?
 *               :sym symbol?)
 *  :ret symbol?)
 */
(function (){
cljs.spec$macros.fdef = (function cljs$spec$macros$fdef(var_args){
var args__25948__auto__ = [];
var len__25946__auto___179 = arguments.length;
var i__25947__auto___180 = (0);
while(true){
if((i__25947__auto___180 < len__25946__auto___179)){
args__25948__auto__.push((arguments[i__25947__auto___180]));

var G__181 = (i__25947__auto___180 + (1));
i__25947__auto___180 = G__181;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((3) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((3)),(0),null)):null);
return cljs.spec$macros.fdef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.fdef;},new cljs.core.Symbol("cljs.spec$macros","fdef","cljs.spec$macros/fdef",(1257250891),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"fdef","fdef",(459719359),null),"cljs/spec.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"fn-sym","fn-sym",(-1230447259),null),new cljs.core.Symbol(null,"specs","specs",(-1227865028),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"fn-sym","fn-sym",(-1230447259),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"specs","specs",(-1227865028),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(380),true,(380),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"fn-sym","fn-sym",(-1230447259),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"specs","specs",(-1227865028),null)], null)),"Takes a symbol naming a function, and one or more of the following:\n\n  :args A regex spec for the function arguments as they were a list to be\n    passed to apply - in this way, a single spec can handle functions with\n    multiple arities\n  :ret A spec for the function's return value\n  :fn A spec of the relationship between args and ret - the\n    value passed is {:args conformed-args :ret conformed-ret} and is\n    expected to contain predicates that relate those values\n\n  Qualifies fn-sym with resolve, or using *ns* if no resolution found.\n  Registers an fspec in the global registry, where it can be retrieved\n  by calling get-spec with the var or full-qualified symbol.\n\n  Once registered, function specs are included in doc, checked by\n  instrument, tested by the runner clojure.spec.test/run-tests, and (if\n  a macro) used to explain errors during macroexpansion.\n\n  Note that :fn specs require the presence of :args and :ret specs to\n  conform values, and so :fn specs will be ignored if :args or :ret\n  are missing.\n\n  Returns the qualified fn-sym.\n\n  For example, to register function specs for the symbol function:\n\n  (s/fdef clojure.core/symbol\n    :args (s/alt :separate (s/cat :ns string? :n string?)\n                 :str string?\n                 :sym symbol?)\n    :ret symbol?)",(cljs.core.truth_(cljs.spec$macros.fdef)?cljs.spec$macros.fdef.cljs$lang$test:null)])));})()
;

cljs.spec$macros.fdef.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fn_sym,specs){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.spec$macros._speced_vars,cljs.core.conj,cljs.spec$macros.ns_qualify(_AMPERSAND_env,fn_sym));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","def","cljs.spec/def",(-666033036),null)),(function (){var x__25689__auto__ = fn_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",(982220571),null)),specs));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
});

cljs.spec$macros.fdef.cljs$lang$maxFixedArity = (3);

cljs.spec$macros.fdef.cljs$lang$applyTo = (function (seq175){
var G__176 = cljs.core.first(seq175);
var seq175__$1 = cljs.core.next(seq175);
var G__177 = cljs.core.first(seq175__$1);
var seq175__$2 = cljs.core.next(seq175__$1);
var G__178 = cljs.core.first(seq175__$2);
var seq175__$3 = cljs.core.next(seq175__$2);
return cljs.spec$macros.fdef.cljs$core$IFn$_invoke$arity$variadic(G__176,G__177,G__178,seq175__$3);
});

new cljs.core.Var(function(){return cljs.spec$macros.fdef;},new cljs.core.Symbol("cljs.spec$macros","fdef","cljs.spec$macros/fdef",(1257250891),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"fdef","fdef",(459719359),null),"cljs/spec.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"fn-sym","fn-sym",(-1230447259),null),new cljs.core.Symbol(null,"specs","specs",(-1227865028),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"fn-sym","fn-sym",(-1230447259),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"specs","specs",(-1227865028),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(380),true,(380),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"fn-sym","fn-sym",(-1230447259),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"specs","specs",(-1227865028),null)], null)),"Takes a symbol naming a function, and one or more of the following:\n\n  :args A regex spec for the function arguments as they were a list to be\n    passed to apply - in this way, a single spec can handle functions with\n    multiple arities\n  :ret A spec for the function's return value\n  :fn A spec of the relationship between args and ret - the\n    value passed is {:args conformed-args :ret conformed-ret} and is\n    expected to contain predicates that relate those values\n\n  Qualifies fn-sym with resolve, or using *ns* if no resolution found.\n  Registers an fspec in the global registry, where it can be retrieved\n  by calling get-spec with the var or full-qualified symbol.\n\n  Once registered, function specs are included in doc, checked by\n  instrument, tested by the runner clojure.spec.test/run-tests, and (if\n  a macro) used to explain errors during macroexpansion.\n\n  Note that :fn specs require the presence of :args and :ret specs to\n  conform values, and so :fn specs will be ignored if :args or :ret\n  are missing.\n\n  Returns the qualified fn-sym.\n\n  For example, to register function specs for the symbol function:\n\n  (s/fdef clojure.core/symbol\n    :args (s/alt :separate (s/cat :ns string? :n string?)\n                 :str string?\n                 :sym symbol?)\n    :ret symbol?)",(cljs.core.truth_(cljs.spec$macros.fdef)?cljs.spec$macros.fdef.cljs$lang$test:null)]));

cljs.spec$macros.fdef.cljs$lang$macro = true;
/**
 * takes the same arguments as spec/keys and returns a regex op that matches sequences of key/values,
 *   converts them into a map, and conforms that map with a corresponding
 *   spec/keys call:
 * 
 *   user=> (s/conform (s/keys :req-un [::a ::c]) {:a 1 :c 2})
 *   {:a 1, :c 2}
 *   user=> (s/conform (s/keys* :req-un [::a ::c]) [:a 1 :c 2])
 *   {:a 1, :c 2}
 * 
 *   the resulting regex op can be composed into a larger regex:
 * 
 *   user=> (s/conform (s/cat :i1 integer? :m (s/keys* :req-un [::a ::c]) :i2 integer?) [42 :a 1 :c 2 :d 4 99])
 *   {:i1 42, :m {:a 1, :c 2, :d 4}, :i2 99}
 */
(function (){
cljs.spec$macros.keys_STAR_ = (function cljs$spec$macros$keys_STAR_(var_args){
var args__25948__auto__ = [];
var len__25946__auto___185 = arguments.length;
var i__25947__auto___186 = (0);
while(true){
if((i__25947__auto___186 < len__25946__auto___185)){
args__25948__auto__.push((arguments[i__25947__auto___186]));

var G__187 = (i__25947__auto___186 + (1));
i__25947__auto___186 = G__187;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((2) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((2)),(0),null)):null);
return cljs.spec$macros.keys_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.keys_STAR_;},new cljs.core.Symbol("cljs.spec$macros","keys*","cljs.spec$macros/keys*",(-1177553610),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"keys*","keys*",(-816260990),null),"cljs/spec.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kspecs","kspecs",(564840629),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"kspecs","kspecs",(564840629),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(416),true,(416),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"kspecs","kspecs",(564840629),null)], null)),"takes the same arguments as spec/keys and returns a regex op that matches sequences of key/values,\n  converts them into a map, and conforms that map with a corresponding\n  spec/keys call:\n\n  user=> (s/conform (s/keys :req-un [::a ::c]) {:a 1 :c 2})\n  {:a 1, :c 2}\n  user=> (s/conform (s/keys* :req-un [::a ::c]) [:a 1 :c 2])\n  {:a 1, :c 2}\n\n  the resulting regex op can be composed into a larger regex:\n\n  user=> (s/conform (s/cat :i1 integer? :m (s/keys* :req-un [::a ::c]) :i2 integer?) [42 :a 1 :c 2 :d 4 99])\n  {:i1 42, :m {:a 1, :c 2, :d 4}, :i2 99}",(cljs.core.truth_(cljs.spec$macros.keys_STAR_)?cljs.spec$macros.keys_STAR_.cljs$lang$test:null)])));})()
;

cljs.spec$macros.keys_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kspecs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"mspec__16__auto__","mspec__16__auto__",(-204226934),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",(-927379584),null)),kspecs));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","with-gen","cljs.spec/with-gen",(-53488124),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","&","cljs.spec/&",(-663850257),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",(-858366320),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",(850003863),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",(668466950))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",(713156450),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",(-1491964132))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec","kvs->map","cljs.spec/kvs->map",(-1189105441))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"mspec__16__auto__","mspec__16__auto__",(-204226934),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.impl.gen","fmap","cljs.spec.impl.gen/fmap",(-1115961083),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__17__auto__","m__17__auto__",(1795992058),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",(1757277831),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",(-1133584918),null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__17__auto__","m__17__auto__",(1795992058),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","gen","cljs.spec/gen",(-2101972796),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"mspec__16__auto__","mspec__16__auto__",(-204226934),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
});

cljs.spec$macros.keys_STAR_.cljs$lang$maxFixedArity = (2);

cljs.spec$macros.keys_STAR_.cljs$lang$applyTo = (function (seq182){
var G__183 = cljs.core.first(seq182);
var seq182__$1 = cljs.core.next(seq182);
var G__184 = cljs.core.first(seq182__$1);
var seq182__$2 = cljs.core.next(seq182__$1);
return cljs.spec$macros.keys_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__183,G__184,seq182__$2);
});

new cljs.core.Var(function(){return cljs.spec$macros.keys_STAR_;},new cljs.core.Symbol("cljs.spec$macros","keys*","cljs.spec$macros/keys*",(-1177553610),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"keys*","keys*",(-816260990),null),"cljs/spec.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kspecs","kspecs",(564840629),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"kspecs","kspecs",(564840629),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(416),true,(416),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"kspecs","kspecs",(564840629),null)], null)),"takes the same arguments as spec/keys and returns a regex op that matches sequences of key/values,\n  converts them into a map, and conforms that map with a corresponding\n  spec/keys call:\n\n  user=> (s/conform (s/keys :req-un [::a ::c]) {:a 1 :c 2})\n  {:a 1, :c 2}\n  user=> (s/conform (s/keys* :req-un [::a ::c]) [:a 1 :c 2])\n  {:a 1, :c 2}\n\n  the resulting regex op can be composed into a larger regex:\n\n  user=> (s/conform (s/cat :i1 integer? :m (s/keys* :req-un [::a ::c]) :i2 integer?) [42 :a 1 :c 2 :d 4 99])\n  {:i1 42, :m {:a 1, :c 2, :d 4}, :i2 99}",(cljs.core.truth_(cljs.spec$macros.keys_STAR_)?cljs.spec$macros.keys_STAR_.cljs$lang$test:null)]));

cljs.spec$macros.keys_STAR_.cljs$lang$macro = true;
/**
 * returns a spec that accepts nil and values satisfiying pred
 */
(function (){
cljs.spec$macros.nilable = (function cljs$spec$macros$nilable(_AMPERSAND_form,_AMPERSAND_env,pred){
var pf = cljs.spec$macros.res(_AMPERSAND_env,pred);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","nilable-impl","cljs.spec/nilable-impl",(-523057991),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = pf;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)));
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.nilable;},new cljs.core.Symbol("cljs.spec$macros","nilable","cljs.spec$macros/nilable",(-66780999),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"nilable","nilable",(-812128667),null),"cljs/spec.cljc",(18),(1),(435),true,(435),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null)], null)),"returns a spec that accepts nil and values satisfiying pred",(cljs.core.truth_(cljs.spec$macros.nilable)?cljs.spec$macros.nilable.cljs$lang$test:null)])));})()
;

cljs.spec$macros.nilable.cljs$lang$macro = true;
/**
 * Returns a spec that validates insts in the range from start
 *   (inclusive) to end (exclusive).
 */
(function (){
cljs.spec$macros.inst_in = (function cljs$spec$macros$inst_in(_AMPERSAND_form,_AMPERSAND_env,start,end){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__19__auto__","st__19__auto__",(-508746856),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inst-ms","cljs.core/inst-ms",(-515575156),null)),(function (){var x__25689__auto__ = start;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"et__20__auto__","et__20__auto__",(-366879019),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inst-ms","cljs.core/inst-ms",(-515575156),null)),(function (){var x__25689__auto__ = end;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"mkdate__21__auto__","mkdate__21__auto__",(1776388883),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"d__22__auto__","d__22__auto__",(610964902),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",(384205255),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"d__22__auto__","d__22__auto__",(610964902),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","spec","cljs.spec/spec",(775251713),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",(-7296553),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inst?","cljs.core/inst?",(1216133710),null)),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__18__23__auto__","p1__18__23__auto__",(1619813011),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","inst-in-range?","cljs.spec/inst-in-range?",(827763250),null)),(function (){var x__25689__auto__ = start;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = end;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__18__23__auto__","p1__18__23__auto__",(1619813011),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"gen","gen",(142575302))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.impl.gen","fmap","cljs.spec.impl.gen/fmap",(-1115961083),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"mkdate__21__auto__","mkdate__21__auto__",(1776388883),null)),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.impl.gen","large-integer*","cljs.spec.impl.gen/large-integer*",(749084369),null)),(function (){var x__25689__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"min","min",(444991522))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__19__auto__","st__19__auto__",(-508746856),null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"max","max",(61366548))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"et__20__auto__","et__20__auto__",(-366879019),null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.inst_in;},new cljs.core.Symbol("cljs.spec$macros","inst-in","cljs.spec$macros/inst-in",(-1964569087),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"inst-in","inst-in",(1164979645),null),"cljs/spec.cljc",(18),(1),(441),true,(441),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null)], null)),"Returns a spec that validates insts in the range from start\n  (inclusive) to end (exclusive).",(cljs.core.truth_(cljs.spec$macros.inst_in)?cljs.spec$macros.inst_in.cljs$lang$test:null)])));})()
;

cljs.spec$macros.inst_in.cljs$lang$macro = true;
/**
 * Returns a spec that validates longs in the range from start
 *   (inclusive) to end (exclusive).
 */
(function (){
cljs.spec$macros.int_in = (function cljs$spec$macros$int_in(_AMPERSAND_form,_AMPERSAND_env,start,end){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","spec","cljs.spec/spec",(775251713),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",(-7296553),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",(50730120),null)),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__24__25__auto__","p1__24__25__auto__",(-976894136),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","int-in-range?","cljs.spec/int-in-range?",(-1880930716),null)),(function (){var x__25689__auto__ = start;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = end;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__24__25__auto__","p1__24__25__auto__",(-976894136),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"gen","gen",(142575302))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.impl.gen","large-integer*","cljs.spec.impl.gen/large-integer*",(749084369),null)),(function (){var x__25689__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"min","min",(444991522))),(function (){var x__25689__auto__ = start;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"max","max",(61366548))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dec","cljs.core/dec",(-443230268),null)),(function (){var x__25689__auto__ = end;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.int_in;},new cljs.core.Symbol("cljs.spec$macros","int-in","cljs.spec$macros/int-in",(-196058407),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"int-in","int-in",(664882605),null),"cljs/spec.cljc",(17),(1),(453),true,(453),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null)], null)),"Returns a spec that validates longs in the range from start\n  (inclusive) to end (exclusive).",(cljs.core.truth_(cljs.spec$macros.int_in)?cljs.spec$macros.int_in.cljs$lang$test:null)])));})()
;

cljs.spec$macros.int_in.cljs$lang$macro = true;
/**
 * Specs a 64-bit floating point number. Options:
 * 
 *  :infinite? - whether +/- infinity allowed (default true)
 *  :NaN?      - whether NaN allowed (default true)
 *  :min       - minimum value (inclusive, default none)
 *  :max       - maximum value (inclusive, default none)
 */
(function (){
cljs.spec$macros.double_in = (function cljs$spec$macros$double_in(var_args){
var args__25948__auto__ = [];
var len__25946__auto___194 = arguments.length;
var i__25947__auto___195 = (0);
while(true){
if((i__25947__auto___195 < len__25946__auto___194)){
args__25948__auto__.push((arguments[i__25947__auto___195]));

var G__196 = (i__25947__auto___195 + (1));
i__25947__auto___195 = G__196;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((2) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((2)),(0),null)):null);
return cljs.spec$macros.double_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.double_in;},new cljs.core.Symbol("cljs.spec$macros","double-in","cljs.spec$macros/double-in",(-1638120543),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"double-in","double-in",(-303226659),null),"cljs/spec.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),new cljs.core.Symbol(null,"NaN?","NaN?",(-277236124),null),new cljs.core.Symbol(null,"min","min",(2085523049),null),new cljs.core.Symbol(null,"max","max",(1701898075),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),true,new cljs.core.Symbol(null,"NaN?","NaN?",(-277236124),null),true], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),new cljs.core.Symbol(null,"NaN?","NaN?",(-277236124),null),new cljs.core.Symbol(null,"min","min",(2085523049),null),new cljs.core.Symbol(null,"max","max",(1701898075),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),true,new cljs.core.Symbol(null,"NaN?","NaN?",(-277236124),null),true], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(460),true,(460),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),new cljs.core.Symbol(null,"NaN?","NaN?",(-277236124),null),new cljs.core.Symbol(null,"min","min",(2085523049),null),new cljs.core.Symbol(null,"max","max",(1701898075),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),true,new cljs.core.Symbol(null,"NaN?","NaN?",(-277236124),null),true], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)], null)),"Specs a 64-bit floating point number. Options:\n\n    :infinite? - whether +/- infinity allowed (default true)\n    :NaN?      - whether NaN allowed (default true)\n    :min       - minimum value (inclusive, default none)\n    :max       - maximum value (inclusive, default none)",(cljs.core.truth_(cljs.spec$macros.double_in)?cljs.spec$macros.double_in.cljs$lang$test:null)])));})()
;

cljs.spec$macros.double_in.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__191){
var map__192 = p__191;
var map__192__$1 = ((((!((map__192 == null)))?((((map__192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__192.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__192):map__192);
var m = map__192__$1;
var infinite_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__192__$1,new cljs.core.Keyword(null,"infinite?","infinite?",(-2017886608)),true);
var NaN_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__192__$1,new cljs.core.Keyword(null,"NaN?","NaN?",(-1917767651)),true);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__192__$1,new cljs.core.Keyword(null,"min","min",(444991522)));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__192__$1,new cljs.core.Keyword(null,"max","max",(61366548)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","spec","cljs.spec/spec",(775251713),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",(-7296553),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","double?","cljs.core/double?",(1757455529),null)),cljs.core.array_seq([(cljs.core.truth_(infinite_QMARK_)?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26#","p1__26#",(-1601321208),null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",(1044554643),null),cljs.core.list(new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),new cljs.core.Symbol(null,"p1__26#","p1__26#",(-1601321208),null))))], null)),(cljs.core.truth_(NaN_QMARK_)?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__27#","p1__27#",(-2093396159),null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",(1044554643),null),cljs.core.list(new cljs.core.Symbol("js","isNaN","js/isNaN",(74901299),null),new cljs.core.Symbol(null,"p1__27#","p1__27#",(-2093396159),null))))], null)),(cljs.core.truth_(max)?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__28__29__auto__","p1__28__29__auto__",(-1935012974),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",(1677001748),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__28__29__auto__","p1__28__29__auto__",(-1935012974),null)),cljs.core.array_seq([(function (){var x__25689__auto__ = max;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()))):null),(cljs.core.truth_(min)?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__30__31__auto__","p1__30__31__auto__",(1739329709),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",(1677001748),null)),(function (){var x__25689__auto__ = min;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__30__31__auto__","p1__30__31__auto__",(1739329709),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()))):null)], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"gen","gen",(142575302))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.impl.gen","double*","cljs.spec.impl.gen/double*",(1793576798),null)),(function (){var x__25689__auto__ = m;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
});

cljs.spec$macros.double_in.cljs$lang$maxFixedArity = (2);

cljs.spec$macros.double_in.cljs$lang$applyTo = (function (seq188){
var G__189 = cljs.core.first(seq188);
var seq188__$1 = cljs.core.next(seq188);
var G__190 = cljs.core.first(seq188__$1);
var seq188__$2 = cljs.core.next(seq188__$1);
return cljs.spec$macros.double_in.cljs$core$IFn$_invoke$arity$variadic(G__189,G__190,seq188__$2);
});

new cljs.core.Var(function(){return cljs.spec$macros.double_in;},new cljs.core.Symbol("cljs.spec$macros","double-in","cljs.spec$macros/double-in",(-1638120543),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"double-in","double-in",(-303226659),null),"cljs/spec.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),new cljs.core.Symbol(null,"NaN?","NaN?",(-277236124),null),new cljs.core.Symbol(null,"min","min",(2085523049),null),new cljs.core.Symbol(null,"max","max",(1701898075),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),true,new cljs.core.Symbol(null,"NaN?","NaN?",(-277236124),null),true], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),new cljs.core.Symbol(null,"NaN?","NaN?",(-277236124),null),new cljs.core.Symbol(null,"min","min",(2085523049),null),new cljs.core.Symbol(null,"max","max",(1701898075),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),true,new cljs.core.Symbol(null,"NaN?","NaN?",(-277236124),null),true], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(460),true,(460),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),new cljs.core.Symbol(null,"NaN?","NaN?",(-277236124),null),new cljs.core.Symbol(null,"min","min",(2085523049),null),new cljs.core.Symbol(null,"max","max",(1701898075),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),true,new cljs.core.Symbol(null,"NaN?","NaN?",(-277236124),null),true], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)], null)),"Specs a 64-bit floating point number. Options:\n\n    :infinite? - whether +/- infinity allowed (default true)\n    :NaN?      - whether NaN allowed (default true)\n    :min       - minimum value (inclusive, default none)\n    :max       - maximum value (inclusive, default none)",(cljs.core.truth_(cljs.spec$macros.double_in)?cljs.spec$macros.double_in.cljs$lang$test:null)]));

cljs.spec$macros.double_in.cljs$lang$macro = true;
/**
 * Takes map-validating specs (e.g. 'keys' specs) and
 *   returns a spec that returns a conformed map satisfying all of the
 *   specs.  Successive conformed values propagate through rest of
 *   predicates. Unlike 'and', merge can generate maps satisfying the
 *   union of the predicates.
 */
(function (){
cljs.spec$macros.merge = (function cljs$spec$macros$merge(var_args){
var args__25948__auto__ = [];
var len__25946__auto___200 = arguments.length;
var i__25947__auto___201 = (0);
while(true){
if((i__25947__auto___201 < len__25946__auto___200)){
args__25948__auto__.push((arguments[i__25947__auto___201]));

var G__202 = (i__25947__auto___201 + (1));
i__25947__auto___201 = G__202;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((2) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((2)),(0),null)):null);
return cljs.spec$macros.merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.merge;},new cljs.core.Symbol("cljs.spec$macros","merge","cljs.spec$macros/merge",(967682402),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"merge","merge",(-163787882),null),"cljs/spec.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred-forms","pred-forms",(1813143359),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"pred-forms","pred-forms",(1813143359),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(477),true,(477),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"pred-forms","pred-forms",(1813143359),null)], null)),"Takes map-validating specs (e.g. 'keys' specs) and\n  returns a spec that returns a conformed map satisfying all of the\n  specs.  Successive conformed values propagate through rest of\n  predicates. Unlike 'and', merge can generate maps satisfying the\n  union of the predicates.",(cljs.core.truth_(cljs.spec$macros.merge)?cljs.spec$macros.merge.cljs$lang$test:null)])));})()
;

cljs.spec$macros.merge.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred_forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","merge-spec-impl","cljs.spec/merge-spec-impl",(1066531443),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__32_SHARP_){
return cljs.spec$macros.res(_AMPERSAND_env,p1__32_SHARP_);
}),pred_forms);
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.vec(pred_forms);
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)));
});

cljs.spec$macros.merge.cljs$lang$maxFixedArity = (2);

cljs.spec$macros.merge.cljs$lang$applyTo = (function (seq197){
var G__198 = cljs.core.first(seq197);
var seq197__$1 = cljs.core.next(seq197);
var G__199 = cljs.core.first(seq197__$1);
var seq197__$2 = cljs.core.next(seq197__$1);
return cljs.spec$macros.merge.cljs$core$IFn$_invoke$arity$variadic(G__198,G__199,seq197__$2);
});

new cljs.core.Var(function(){return cljs.spec$macros.merge;},new cljs.core.Symbol("cljs.spec$macros","merge","cljs.spec$macros/merge",(967682402),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"merge","merge",(-163787882),null),"cljs/spec.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred-forms","pred-forms",(1813143359),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"pred-forms","pred-forms",(1813143359),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(477),true,(477),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"pred-forms","pred-forms",(1813143359),null)], null)),"Takes map-validating specs (e.g. 'keys' specs) and\n  returns a spec that returns a conformed map satisfying all of the\n  specs.  Successive conformed values propagate through rest of\n  predicates. Unlike 'and', merge can generate maps satisfying the\n  union of the predicates.",(cljs.core.truth_(cljs.spec$macros.merge)?cljs.spec$macros.merge.cljs$lang$test:null)]));

cljs.spec$macros.merge.cljs$lang$macro = true;
/**
 * exercises the fn named by sym (a symbol) by applying it to
 *   n (default 10) generated samples of its args spec. When fspec is
 *   supplied its arg spec is used, and sym-or-f can be a fn.  Returns a
 *   sequence of tuples of [args ret]. 
 */
(function (){
cljs.spec$macros.exercise_fn = (function cljs$spec$macros$exercise_fn(var_args){
var args203 = [];
var len__25946__auto___207 = arguments.length;
var i__25947__auto___208 = (0);
while(true){
if((i__25947__auto___208 < len__25946__auto___207)){
args203.push((arguments[i__25947__auto___208]));

var G__209 = (i__25947__auto___208 + (1));
i__25947__auto___208 = G__209;
continue;
} else {
}
break;
}

var G__205 = args203.length;
switch (G__205) {
case (3):
return cljs.spec$macros.exercise_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.spec$macros.exercise_fn.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (5):
return cljs.spec$macros.exercise_fn.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((args203.length - (2)))].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.exercise_fn;},new cljs.core.Symbol("cljs.spec$macros","exercise-fn","cljs.spec$macros/exercise-fn",(-1129470210),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"exercise-fn","exercise-fn",(1933214770),null),"cljs/spec.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(5),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"fspec","fspec",(1380883392),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"fspec","fspec",(1380883392),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(486),true,(486),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"fspec","fspec",(1380883392),null)], null)),"exercises the fn named by sym (a symbol) by applying it to\n  n (default 10) generated samples of its args spec. When fspec is\n  supplied its arg spec is used, and sym-or-f can be a fn.  Returns a\n  sequence of tuples of [args ret]. ",(cljs.core.truth_(cljs.spec$macros.exercise_fn)?cljs.spec$macros.exercise_fn.cljs$lang$test:null)])));})()
;

cljs.spec$macros.exercise_fn.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","exercise-fn","cljs.spec/exercise-fn",(-1958436611),null)),(function (){var x__25689__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(10))], 0)));
});

cljs.spec$macros.exercise_fn.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,sym,n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","exercise-fn","cljs.spec/exercise-fn",(-1958436611),null)),(function (){var x__25689__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)));
});

cljs.spec$macros.exercise_fn.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,sym,n,fspec){
var sym__$1 = (function (){var G__206 = sym;
var G__206__$1 = (((cljs.core.sequential_QMARK_(sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(sym),new cljs.core.Symbol(null,"quote","quote",(1377916282),null))))?cljs.core.second(G__206):G__206);
return G__206__$1;
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fspec__33__auto__","fspec__33__auto__",(-830361969),null)),(function (){var x__25689__auto__ = ((cljs.core.not(fspec))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","get-spec","cljs.spec/get-spec",(-1254734335),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.api.resolve(_AMPERSAND_env,sym__$1));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})())):fspec);
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__34__auto__","f__34__auto__",(-1296653758),null)),(function (){var x__25689__auto__ = sym__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","for","cljs.core/for",(-89947499),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__35__auto__","args__35__auto__",(1519415064),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.impl.gen","sample","cljs.spec.impl.gen/sample",(812621383),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","gen","cljs.spec/gen",(-2101972796),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"args","args",(1315556576))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fspec__33__auto__","fspec__33__auto__",(-830361969),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__35__auto__","args__35__auto__",(1519415064),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",(1757277831),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__34__auto__","f__34__auto__",(-1296653758),null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__35__auto__","args__35__auto__",(1519415064),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
});

cljs.spec$macros.exercise_fn.cljs$lang$maxFixedArity = (5);

new cljs.core.Var(function(){return cljs.spec$macros.exercise_fn;},new cljs.core.Symbol("cljs.spec$macros","exercise-fn","cljs.spec$macros/exercise-fn",(-1129470210),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"exercise-fn","exercise-fn",(1933214770),null),"cljs/spec.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(5),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"fspec","fspec",(1380883392),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"fspec","fspec",(1380883392),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(486),true,(486),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"fspec","fspec",(1380883392),null)], null)),"exercises the fn named by sym (a symbol) by applying it to\n  n (default 10) generated samples of its args spec. When fspec is\n  supplied its arg spec is used, and sym-or-f can be a fn.  Returns a\n  sequence of tuples of [args ret]. ",(cljs.core.truth_(cljs.spec$macros.exercise_fn)?cljs.spec$macros.exercise_fn.cljs$lang$test:null)]));

cljs.spec$macros.exercise_fn.cljs$lang$macro = true;
(function (){
cljs.spec$macros.init_compile_asserts = (function cljs$spec$macros$init_compile_asserts(_AMPERSAND_form,_AMPERSAND_env){
var compile_asserts = cljs.core.not(new cljs.core.Keyword(null,"elide-asserts","elide-asserts",(537063272)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",(99638489)).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))));
return compile_asserts;
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.init_compile_asserts;},new cljs.core.Symbol("cljs.spec$macros","init-compile-asserts","cljs.spec$macros/init-compile-asserts",(-387939603),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"init-compile-asserts","init-compile-asserts",(-682378183),null),"cljs/spec.cljc",(41),(1),(507),true,(507),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs.spec$macros.init_compile_asserts)?cljs.spec$macros.init_compile_asserts.cljs$lang$test:null)])));})()
;

cljs.spec$macros.init_compile_asserts.cljs$lang$macro = true;
/**
 * spec-checking assert expression. Returns x if x is valid? according
 * to spec, else throws an error with explain-data plus ::failure of
 * :assertion-failed.
 * Can be disabled at either compile time or runtime:
 * If *compile-asserts* is false at compile time, compiles to x. Defaults
 * to the negation value of the ':elide-asserts' compiler option, or true if
 * not set.
 * If (check-asserts?) is false at runtime, always returns x. Defaults to
 * value of 'cljs.spec/*runtime-asserts*', or false if not set. You can
 * toggle check-asserts? with (check-asserts bool).
 */
(function (){
cljs.spec$macros.assert = (function cljs$spec$macros$assert(_AMPERSAND_form,_AMPERSAND_env,spec,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","*compile-asserts*","cljs.spec/*compile-asserts*",(244913392),null)),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","*runtime-asserts*","cljs.spec/*runtime-asserts*",(1521021805),null)),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","assert*","cljs.spec/assert*",(-1844453922),null)),(function (){var x__25689__auto__ = spec;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
}); return (
new cljs.core.Var(function(){return cljs.spec$macros.assert;},new cljs.core.Symbol("cljs.spec$macros","assert","cljs.spec$macros/assert",(1540315225),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec$macros","cljs.spec$macros",(1176748366),null),new cljs.core.Symbol(null,"assert","assert",(677428501),null),"cljs/spec.cljc",(17),(1),(511),true,(511),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"spec-checking assert expression. Returns x if x is valid? according\nto spec, else throws an error with explain-data plus ::failure of\n:assertion-failed.\nCan be disabled at either compile time or runtime:\nIf *compile-asserts* is false at compile time, compiles to x. Defaults\nto the negation value of the ':elide-asserts' compiler option, or true if\nnot set.\nIf (check-asserts?) is false at runtime, always returns x. Defaults to\nvalue of 'cljs.spec/*runtime-asserts*', or false if not set. You can\ntoggle check-asserts? with (check-asserts bool).",(cljs.core.truth_(cljs.spec$macros.assert)?cljs.spec$macros.assert.cljs$lang$test:null)])));})()
;

cljs.spec$macros.assert.cljs$lang$macro = true;
