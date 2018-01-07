goog.provide("cljs.spec.alpha$macros");
if(typeof cljs.spec.alpha$macros.registry_ref !== 'undefined'){
} else {
(function (){
cljs.spec.alpha$macros.registry_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.registry_ref;},new cljs.core.Symbol("cljs.spec.alpha$macros","registry-ref","cljs.spec.alpha$macros/registry-ref",(1641114185),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"registry-ref","registry-ref",(1975823941),null),"cljs/spec/alpha.cljc",(22),(1),(19),(19),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha$macros.registry_ref)?cljs.spec.alpha$macros.registry_ref.cljs$lang$test:null)])));})()
;
}
/**
 * Returns a symbol from a symbol or var
 */
(function (){
cljs.spec.alpha$macros.__GT_sym = (function cljs$spec$alpha$macros$__GT_sym(x){
if(cljs.core.map_QMARK_(x)){
return new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.__GT_sym;},new cljs.core.Symbol("cljs.spec.alpha$macros","->sym","cljs.spec.alpha$macros/->sym",(496084210),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"->sym","->sym",(696606926),null),"cljs/spec/alpha.cljc",(13),(1),(21),(21),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Returns a symbol from a symbol or var",(cljs.core.truth_(cljs.spec.alpha$macros.__GT_sym)?cljs.spec.alpha$macros.__GT_sym.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.alpha$macros.unfn = (function cljs$spec$alpha$macros$unfn(expr){
if((cljs.core.seq_QMARK_(expr)) && ((cljs.core.first(expr) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("fn*",cljs.core.name(cljs.core.first(expr))))){
var vec__201 = cljs.core.rest(expr);
var seq__202 = cljs.core.seq(vec__201);
var first__203 = cljs.core.first(seq__202);
var seq__202__$1 = cljs.core.next(seq__202);
var vec__204 = first__203;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__204,(0),null);
var form = seq__202__$1;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(clojure.walk.postwalk_replace(cljs.core.PersistentArrayMap.createAsIfByAssoc([s,new cljs.core.Symbol(null,"%","%",(-950237169),null)]),form),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",(-950237169),null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)], 0));
} else {
return expr;
}
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.unfn;},new cljs.core.Symbol("cljs.spec.alpha$macros","unfn","cljs.spec.alpha$macros/unfn",(-262404766),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"unfn","unfn",(-464043674),null),"cljs/spec/alpha.cljc",(12),(1),(28),(28),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null)),null,(cljs.core.truth_(cljs.spec.alpha$macros.unfn)?cljs.spec.alpha$macros.unfn.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.alpha$macros.res = (function cljs$spec$alpha$macros$res(env,form){
if((form instanceof cljs.core.Keyword)){
return form;
} else {
if((form instanceof cljs.core.Symbol)){
var resolved = (function (){var or__21686__auto__ = cljs.spec.alpha$macros.__GT_sym(cljs.analyzer.api.resolve(env,form));
if(cljs.core.truth_(or__21686__auto__)){
return or__21686__auto__;
} else {
return form;
}
})();
var ns_name = cljs.core.namespace(resolved);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((function (){var and__21660__auto__ = ns_name;
if(cljs.core.truth_(and__21660__auto__)){
return clojure.string.ends_with_QMARK_(ns_name,"$macros");
} else {
return and__21660__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns_name,(0),(cljs.core.count(ns_name) - (7))):ns_name),cljs.core.name(resolved));
} else {
if(cljs.core.sequential_QMARK_(form)){
return clojure.walk.postwalk((function (p1__10_SHARP_){
if((p1__10_SHARP_ instanceof cljs.core.Symbol)){
return (cljs.spec.alpha$macros.res.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha$macros.res.cljs$core$IFn$_invoke$arity$2(env,p1__10_SHARP_) : cljs.spec.alpha$macros.res(env,p1__10_SHARP_));
} else {
return p1__10_SHARP_;
}
}),cljs.spec.alpha$macros.unfn(form));
} else {
return form;

}
}
}
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.res;},new cljs.core.Symbol("cljs.spec.alpha$macros","res","cljs.spec.alpha$macros/res",(985086172),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"res","res",(245523648),null),"cljs/spec/alpha.cljc",(11),(1),(36),(36),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null)),null,(cljs.core.truth_(cljs.spec.alpha$macros.res)?cljs.spec.alpha$macros.res.cljs$lang$test:null)])));})()
;
var ret__23200__auto___207 = /**
 * a compile time res, for use in cljs/spec/alpha.cljs
 */
(function (){
cljs.spec.alpha$macros.mres = (function cljs$spec$alpha$macros$mres(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,form);
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.mres;},new cljs.core.Symbol("cljs.spec.alpha$macros","mres","cljs.spec.alpha$macros/mres",(1592775224),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"mres","mres",(1779703300),null),"cljs/spec/alpha.cljc",(25),(1),(50),true,(50),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",(16469056),null)], null)),"a compile time res, for use in cljs/spec/alpha.cljs",(cljs.core.truth_(cljs.spec.alpha$macros.mres)?cljs.spec.alpha$macros.mres.cljs$lang$test:null)])));})()
;
cljs.spec.alpha$macros.mres.cljs$lang$macro = true;

/**
 * Qualify symbol s by resolving it or using the current *ns*.
 */
(function (){
cljs.spec.alpha$macros.ns_qualify = (function cljs$spec$alpha$macros$ns_qualify(env,s){
if(cljs.core.truth_(cljs.core.namespace(s))){
return cljs.spec.alpha$macros.__GT_sym(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,s));
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
}
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.ns_qualify;},new cljs.core.Symbol("cljs.spec.alpha$macros","ns-qualify","cljs.spec.alpha$macros/ns-qualify",(696035146),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"ns-qualify","ns-qualify",(1165093718),null),"cljs/spec/alpha.cljc",(18),(1),(55),(55),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),"Qualify symbol s by resolving it or using the current *ns*.",(cljs.core.truth_(cljs.spec.alpha$macros.ns_qualify)?cljs.spec.alpha$macros.ns_qualify.cljs$lang$test:null)])));})()
;
var ret__23200__auto___208 = /**
 * Given a namespace-qualified keyword or resolveable symbol k, and a spec,
 * spec-name, predicate or regex-op makes an entry in the registry mapping k to
 * the spec
 */
(function (){
cljs.spec.alpha$macros.def = (function cljs$spec$alpha$macros$def(_AMPERSAND_form,_AMPERSAND_env,k,spec_form){
var k__$1 = (((k instanceof cljs.core.Symbol))?cljs.spec.alpha$macros.ns_qualify(_AMPERSAND_env,k):k);
var form = cljs.spec.alpha$macros.res(_AMPERSAND_env,spec_form);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.spec.alpha$macros.registry_ref,cljs.core.assoc,k__$1,form);

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","def-impl","cljs.spec.alpha/def-impl",(-940040760),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = k__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = spec_form;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.def;},new cljs.core.Symbol("cljs.spec.alpha$macros","def","cljs.spec.alpha$macros/def",(-865942085),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"def","def",(597100991),null),"cljs/spec/alpha.cljc",(14),(1),(62),true,(62),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"spec-form","spec-form",(-871386429),null)], null)),"Given a namespace-qualified keyword or resolveable symbol k, and a spec,\n   spec-name, predicate or regex-op makes an entry in the registry mapping k to\n   the spec",(cljs.core.truth_(cljs.spec.alpha$macros.def)?cljs.spec.alpha$macros.def.cljs$lang$test:null)])));})()
;
cljs.spec.alpha$macros.def.cljs$lang$macro = true;

var ret__23200__auto___216 = (function (){
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
cljs.spec.alpha$macros.spec = (function cljs$spec$alpha$macros$spec(var_args){
var args__23177__auto__ = [];
var len__23174__auto___217 = arguments.length;
var i__23175__auto___218 = (0);
while(true){
if((i__23175__auto___218 < len__23174__auto___217)){
args__23177__auto__.push((arguments[i__23175__auto___218]));

var G__219 = (i__23175__auto___218 + (1));
i__23175__auto___218 = G__219;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((3) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((3)),(0),null)):null);
return cljs.spec.alpha$macros.spec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23178__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.spec;},new cljs.core.Symbol("cljs.spec.alpha$macros","spec","cljs.spec.alpha$macros/spec",(1113753564),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null),"cljs/spec/alpha.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(72),true,(72),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null)], null)),"Takes a single predicate form, e.g. can be the name of a predicate,\n  like even?, or a fn literal like #(< % 42). Note that it is not\n  generally necessary to wrap predicates in spec when using the rest\n  of the spec macros, only to attach a unique generator\n\n  Can also be passed the result of one of the regex ops -\n  cat, alt, *, +, ?, in which case it will return a regex-conforming\n  spec, useful when nesting an independent regex.\n  ---\n\n  Optionally takes :gen generator-fn, which must be a fn of no args that\n  returns a test.check generator.\n\n  Returns a spec.",(cljs.core.truth_(cljs.spec.alpha$macros.spec)?cljs.spec.alpha$macros.spec.cljs$lang$test:null)])));})()
;

cljs.spec.alpha$macros.spec.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,form,p__213){
var map__214 = p__213;
var map__214__$1 = ((((!((map__214 == null)))?((((map__214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__214.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__214):map__214);
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__214__$1,new cljs.core.Keyword(null,"gen","gen",(142575302)));
if(cljs.core.truth_(form)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","spec-impl","cljs.spec.alpha/spec-impl",(69764672),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,form);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = gen;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)));
} else {
return null;
}
});

cljs.spec.alpha$macros.spec.cljs$lang$maxFixedArity = (3);

cljs.spec.alpha$macros.spec.cljs$lang$applyTo = (function (seq209){
var G__210 = cljs.core.first(seq209);
var seq209__$1 = cljs.core.next(seq209);
var G__211 = cljs.core.first(seq209__$1);
var seq209__$2 = cljs.core.next(seq209__$1);
var G__212 = cljs.core.first(seq209__$2);
var seq209__$3 = cljs.core.next(seq209__$2);
return cljs.spec.alpha$macros.spec.cljs$core$IFn$_invoke$arity$variadic(G__210,G__211,G__212,seq209__$3);
});

return new cljs.core.Var(function(){return cljs.spec.alpha$macros.spec;},new cljs.core.Symbol("cljs.spec.alpha$macros","spec","cljs.spec.alpha$macros/spec",(1113753564),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"spec","spec",(1988051928),null),"cljs/spec/alpha.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(72),true,(72),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null)], null)),"Takes a single predicate form, e.g. can be the name of a predicate,\n  like even?, or a fn literal like #(< % 42). Note that it is not\n  generally necessary to wrap predicates in spec when using the rest\n  of the spec macros, only to attach a unique generator\n\n  Can also be passed the result of one of the regex ops -\n  cat, alt, *, +, ?, in which case it will return a regex-conforming\n  spec, useful when nesting an independent regex.\n  ---\n\n  Optionally takes :gen generator-fn, which must be a fn of no args that\n  returns a test.check generator.\n\n  Returns a spec.",(cljs.core.truth_(cljs.spec.alpha$macros.spec)?cljs.spec.alpha$macros.spec.cljs$lang$test:null)]));
})()
;
cljs.spec.alpha$macros.spec.cljs$lang$macro = true;

var ret__23200__auto___220 = /**
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
cljs.spec.alpha$macros.multi_spec = (function cljs$spec$alpha$macros$multi_spec(_AMPERSAND_form,_AMPERSAND_env,mm,retag){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","multi-spec-impl","cljs.spec.alpha/multi-spec-impl",(-1581100244),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,mm);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",(870848730),null)),(function (){var x__22880__auto__ = mm;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = retag;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.multi_spec;},new cljs.core.Symbol("cljs.spec.alpha$macros","multi-spec","cljs.spec.alpha$macros/multi-spec",(-1848653769),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"multi-spec","multi-spec",(-1379716045),null),"cljs/spec/alpha.cljc",(21),(1),(91),true,(91),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mm","mm",(-12319033),null),new cljs.core.Symbol(null,"retag","retag",(528972725),null)], null)),"Takes the name of a spec/predicate-returning multimethod and a\n  tag-restoring keyword or fn (retag).  Returns a spec that when\n  conforming or explaining data will pass it to the multimethod to get\n  an appropriate spec. You can e.g. use multi-spec to dynamically and\n  extensibly associate specs with 'tagged' data (i.e. data where one\n  of the fields indicates the shape of the rest of the structure).\n\n  (defmulti mspec :tag)\n\n  The methods should ignore their argument and return a predicate/spec:\n  (defmethod mspec :int [_] (s/keys :req-un [::tag ::i]))\n\n  retag is used during generation to retag generated values with\n  matching tags. retag can either be a keyword, at which key the\n  dispatch-tag will be assoc'ed, or a fn of generated value and\n  dispatch-tag that should return an appropriately retagged value.\n\n  Note that because the tags themselves comprise an open set,\n  the tag key spec cannot enumerate the values, but can e.g.\n  test for keyword?.\n\n  Note also that the dispatch values of the multimethod will be\n  included in the path, i.e. in reporting and gen overrides, even\n  though those values are not evident in the spec.\n",(cljs.core.truth_(cljs.spec.alpha$macros.multi_spec)?cljs.spec.alpha$macros.multi_spec.cljs$lang$test:null)])));})()
;
cljs.spec.alpha$macros.multi_spec.cljs$lang$macro = true;

var ret__23200__auto___227 = (function (){
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
cljs.spec.alpha$macros.keys = (function cljs$spec$alpha$macros$keys(var_args){
var args__23177__auto__ = [];
var len__23174__auto___228 = arguments.length;
var i__23175__auto___229 = (0);
while(true){
if((i__23175__auto___229 < len__23174__auto___228)){
args__23177__auto__.push((arguments[i__23175__auto___229]));

var G__230 = (i__23175__auto___229 + (1));
i__23175__auto___229 = G__230;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((2) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.keys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23178__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.keys;},new cljs.core.Symbol("cljs.spec.alpha$macros","keys","cljs.spec.alpha$macros/keys",(-1131893667),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"keys","keys",(-1586012071),null),"cljs/spec/alpha.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req","req",(1314083224),null),new cljs.core.Symbol(null,"req-un","req-un",(-1579864761),null),new cljs.core.Symbol(null,"opt","opt",(845825158),null),new cljs.core.Symbol(null,"opt-un","opt-un",(-1770993273),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req","req",(1314083224),null),new cljs.core.Symbol(null,"req-un","req-un",(-1579864761),null),new cljs.core.Symbol(null,"opt","opt",(845825158),null),new cljs.core.Symbol(null,"opt-un","opt-un",(-1770993273),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(120),true,(120),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req","req",(1314083224),null),new cljs.core.Symbol(null,"req-un","req-un",(-1579864761),null),new cljs.core.Symbol(null,"opt","opt",(845825158),null),new cljs.core.Symbol(null,"opt-un","opt-un",(-1770993273),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null)], null)),"Creates and returns a map validating spec. :req and :opt are both\n  vectors of namespaced-qualified keywords. The validator will ensure\n  the :req keys are present. The :opt keys serve as documentation and\n  may be used by the generator.\n\n  The :req key vector supports 'and' and 'or' for key groups:\n\n  (s/keys :req [::x ::y (or ::secret (and ::user ::pwd))] :opt [::z])\n\n  There are also -un versions of :req and :opt. These allow\n  you to connect unqualified keys to specs.  In each case, fully\n  qualfied keywords are passed, which name the specs, but unqualified\n  keys (with the same name component) are expected and checked at\n  conform-time, and generated during gen:\n\n  (s/keys :req-un [:my.ns/x :my.ns/y])\n\n  The above says keys :x and :y are required, and will be validated\n  and generated by specs (if they exist) named :my.ns/x :my.ns/y\n  respectively.\n\n  In addition, the values of *all* namespace-qualified keys will be validated\n  (and possibly destructured) by any registered specs. Note: there is\n  no support for inline value specification, by design.\n\n  Optionally takes :gen generator-fn, which must be a fn of no args that\n  returns a test.check generator.",(cljs.core.truth_(cljs.spec.alpha$macros.keys)?cljs.spec.alpha$macros.keys.cljs$lang$test:null)])));})()
;

cljs.spec.alpha$macros.keys.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__224){
var map__225 = p__224;
var map__225__$1 = ((((!((map__225 == null)))?((((map__225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__225.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__225):map__225);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225__$1,new cljs.core.Keyword(null,"req","req",(-326448303)));
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225__$1,new cljs.core.Keyword(null,"req-un","req-un",(1074571008)));
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225__$1,new cljs.core.Keyword(null,"opt","opt",(-794706369)));
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225__$1,new cljs.core.Keyword(null,"opt-un","opt-un",(883442496)));
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225__$1,new cljs.core.Keyword(null,"gen","gen",(142575302)));
var unk = ((function (map__225,map__225__$1,req,req_un,opt,opt_un,gen){
return (function (p1__11_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__11_SHARP_));
});})(map__225,map__225__$1,req,req_un,opt,opt_un,gen))
;
var req_keys = cljs.core.filterv(cljs.core.keyword_QMARK_,cljs.core.flatten(req));
var req_un_specs = cljs.core.filterv(cljs.core.keyword_QMARK_,cljs.core.flatten(req_un));
var _ = ((cljs.core.every_QMARK_(((function (unk,req_keys,req_un_specs,map__225,map__225__$1,req,req_un,opt,opt_un,gen){
return (function (p1__12_SHARP_){
var and__21660__auto__ = (p1__12_SHARP_ instanceof cljs.core.Keyword);
if(and__21660__auto__){
return cljs.core.namespace(p1__12_SHARP_);
} else {
return and__21660__auto__;
}
});})(unk,req_keys,req_un_specs,map__225,map__225__$1,req,req_un,opt,opt_un,gen))
,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(req_keys,req_un_specs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opt,opt_un], 0))))?null:(function(){throw (new Error(["Assert failed: ","all keys must be namespace-qualified keywords","\n","(every? (fn* [p1__12#] (clojure.core/and (keyword? p1__12#) (namespace p1__12#))) (concat req-keys req-un-specs opt opt-un))"].join('')))})());
var req_specs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(req_keys,req_un_specs);
var req_keys__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(req_keys,cljs.core.map.cljs$core$IFn$_invoke$arity$2(unk,req_un_specs));
var opt_keys = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(opt),cljs.core.map.cljs$core$IFn$_invoke$arity$2(unk,opt_un));
var opt_specs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(opt),opt_un);
var gx = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var parse_req = ((function (unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__225,map__225__$1,req,req_un,opt,opt_un,gen){
return (function (rk,f){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__225,map__225__$1,req,req_un,opt,opt_un,gen){
return (function (x){
if((x instanceof cljs.core.Keyword)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",(-976526835),null)),(function (){var x__22880__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f(x));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
} else {
return clojure.walk.postwalk(((function (unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__225,map__225__$1,req,req_un,opt,opt_un,gen){
return (function (y){
if((y instanceof cljs.core.Keyword)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",(-976526835),null)),(function (){var x__22880__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f(y));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
} else {
return y;
}
});})(unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__225,map__225__$1,req,req_un,opt,opt_un,gen))
,x);
}
});})(unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__225,map__225__$1,req,req_un,opt,opt_un,gen))
,rk);
});})(unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__225,map__225__$1,req,req_un,opt,opt_un,gen))
;
var pred_exprs = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",(-1390345523),null)),(function (){var x__22880__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()))], null);
var pred_exprs__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(pred_exprs,parse_req(req,cljs.core.identity));
var pred_exprs__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(pred_exprs__$1,parse_req(req_un,unk));
var keys_pred = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__22880__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),pred_exprs__$2));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
var pred_exprs__$3 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,parse_req,pred_exprs,pred_exprs__$1,pred_exprs__$2,keys_pred,map__225,map__225__$1,req,req_un,opt,opt_un,gen){
return (function (e){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__22880__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
});})(unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,parse_req,pred_exprs,pred_exprs__$1,pred_exprs__$2,keys_pred,map__225,map__225__$1,req,req_un,opt,opt_un,gen))
,pred_exprs__$2);
var pred_forms = clojure.walk.postwalk(((function (unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,parse_req,pred_exprs,pred_exprs__$1,pred_exprs__$2,keys_pred,pred_exprs__$3,map__225,map__225__$1,req,req_un,opt,opt_un,gen){
return (function (p1__13_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__13_SHARP_);
});})(unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,parse_req,pred_exprs,pred_exprs__$1,pred_exprs__$2,keys_pred,pred_exprs__$3,map__225,map__225__$1,req,req_un,opt,opt_un,gen))
,pred_exprs__$3);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","map-spec-impl","cljs.spec.alpha/map-spec-impl",(1965627085),null)),(function (){var x__22880__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"req-un","req-un",(1074571008))),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = req_un;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"opt-un","opt-un",(883442496))),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = opt_un;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"gfn","gfn",(791517474))),(function (){var x__22880__auto__ = gen;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",(1792271395))),(function (){var x__22880__auto__ = pred_exprs__$3;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"keys-pred","keys-pred",(858984739))),(function (){var x__22880__auto__ = keys_pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"opt-keys","opt-keys",(1262688261))),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = opt_keys;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"req-specs","req-specs",(553962313))),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = req_specs;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"req","req",(-326448303))),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = req;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"req-keys","req-keys",(514319221))),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = req_keys__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"opt-specs","opt-specs",(-384905450))),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = opt_specs;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pred-forms","pred-forms",(172611832))),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = pred_forms;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"opt","opt",(-794706369))),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = opt;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
});

cljs.spec.alpha$macros.keys.cljs$lang$maxFixedArity = (2);

cljs.spec.alpha$macros.keys.cljs$lang$applyTo = (function (seq221){
var G__222 = cljs.core.first(seq221);
var seq221__$1 = cljs.core.next(seq221);
var G__223 = cljs.core.first(seq221__$1);
var seq221__$2 = cljs.core.next(seq221__$1);
return cljs.spec.alpha$macros.keys.cljs$core$IFn$_invoke$arity$variadic(G__222,G__223,seq221__$2);
});

return new cljs.core.Var(function(){return cljs.spec.alpha$macros.keys;},new cljs.core.Symbol("cljs.spec.alpha$macros","keys","cljs.spec.alpha$macros/keys",(-1131893667),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"keys","keys",(-1586012071),null),"cljs/spec/alpha.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req","req",(1314083224),null),new cljs.core.Symbol(null,"req-un","req-un",(-1579864761),null),new cljs.core.Symbol(null,"opt","opt",(845825158),null),new cljs.core.Symbol(null,"opt-un","opt-un",(-1770993273),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req","req",(1314083224),null),new cljs.core.Symbol(null,"req-un","req-un",(-1579864761),null),new cljs.core.Symbol(null,"opt","opt",(845825158),null),new cljs.core.Symbol(null,"opt-un","opt-un",(-1770993273),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(120),true,(120),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req","req",(1314083224),null),new cljs.core.Symbol(null,"req-un","req-un",(-1579864761),null),new cljs.core.Symbol(null,"opt","opt",(845825158),null),new cljs.core.Symbol(null,"opt-un","opt-un",(-1770993273),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)], null)], null)),"Creates and returns a map validating spec. :req and :opt are both\n  vectors of namespaced-qualified keywords. The validator will ensure\n  the :req keys are present. The :opt keys serve as documentation and\n  may be used by the generator.\n\n  The :req key vector supports 'and' and 'or' for key groups:\n\n  (s/keys :req [::x ::y (or ::secret (and ::user ::pwd))] :opt [::z])\n\n  There are also -un versions of :req and :opt. These allow\n  you to connect unqualified keys to specs.  In each case, fully\n  qualfied keywords are passed, which name the specs, but unqualified\n  keys (with the same name component) are expected and checked at\n  conform-time, and generated during gen:\n\n  (s/keys :req-un [:my.ns/x :my.ns/y])\n\n  The above says keys :x and :y are required, and will be validated\n  and generated by specs (if they exist) named :my.ns/x :my.ns/y\n  respectively.\n\n  In addition, the values of *all* namespace-qualified keys will be validated\n  (and possibly destructured) by any registered specs. Note: there is\n  no support for inline value specification, by design.\n\n  Optionally takes :gen generator-fn, which must be a fn of no args that\n  returns a test.check generator.",(cljs.core.truth_(cljs.spec.alpha$macros.keys)?cljs.spec.alpha$macros.keys.cljs$lang$test:null)]));
})()
;
cljs.spec.alpha$macros.keys.cljs$lang$macro = true;

var ret__23200__auto___234 = (function (){
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
cljs.spec.alpha$macros.or = (function cljs$spec$alpha$macros$or(var_args){
var args__23177__auto__ = [];
var len__23174__auto___235 = arguments.length;
var i__23175__auto___236 = (0);
while(true){
if((i__23175__auto___236 < len__23174__auto___235)){
args__23177__auto__.push((arguments[i__23175__auto___236]));

var G__237 = (i__23175__auto___236 + (1));
i__23175__auto___236 = G__237;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((2) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23178__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.or;},new cljs.core.Symbol("cljs.spec.alpha$macros","or","cljs.spec.alpha$macros/or",(1541443060),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"or","or",(1876275696),null),"cljs/spec/alpha.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(182),true,(182),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null)], null)),"Takes key+pred pairs, e.g.\n\n  (s/or :even even? :small #(< % 42))\n\n  Returns a destructuring spec that returns a map entry containing the\n  key of the first matching pred and the corresponding value. Thus the\n  'key' and 'val' functions can be used to refer generically to the\n  components of the tagged return.",(cljs.core.truth_(cljs.spec.alpha$macros.or)?cljs.spec.alpha$macros.or.cljs$lang$test:null)])));})()
;

cljs.spec.alpha$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,key_pred_forms){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),key_pred_forms);
var keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var pred_forms = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
var pf = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (pairs,keys,pred_forms){
return (function (p1__14_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__14_SHARP_);
});})(pairs,keys,pred_forms))
,pred_forms);
if((cljs.core.even_QMARK_(cljs.core.count(key_pred_forms))) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,keys))){
} else {
throw (new Error(["Assert failed: ","spec/or expects k1 p1 k2 p2..., where ks are keywords","\n","(clojure.core/and (even? (count key-pred-forms)) (every? keyword? keys))"].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","or-spec-impl","cljs.spec.alpha/or-spec-impl",(174083152),null)),(function (){var x__22880__auto__ = keys;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = pf;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = pred_forms;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)));
});

cljs.spec.alpha$macros.or.cljs$lang$maxFixedArity = (2);

cljs.spec.alpha$macros.or.cljs$lang$applyTo = (function (seq231){
var G__232 = cljs.core.first(seq231);
var seq231__$1 = cljs.core.next(seq231);
var G__233 = cljs.core.first(seq231__$1);
var seq231__$2 = cljs.core.next(seq231__$1);
return cljs.spec.alpha$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__232,G__233,seq231__$2);
});

return new cljs.core.Var(function(){return cljs.spec.alpha$macros.or;},new cljs.core.Symbol("cljs.spec.alpha$macros","or","cljs.spec.alpha$macros/or",(1541443060),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"or","or",(1876275696),null),"cljs/spec/alpha.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(182),true,(182),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null)], null)),"Takes key+pred pairs, e.g.\n\n  (s/or :even even? :small #(< % 42))\n\n  Returns a destructuring spec that returns a map entry containing the\n  key of the first matching pred and the corresponding value. Thus the\n  'key' and 'val' functions can be used to refer generically to the\n  components of the tagged return.",(cljs.core.truth_(cljs.spec.alpha$macros.or)?cljs.spec.alpha$macros.or.cljs$lang$test:null)]));
})()
;
cljs.spec.alpha$macros.or.cljs$lang$macro = true;

var ret__23200__auto___241 = (function (){
/**
 * Takes predicate/spec-forms, e.g.
 * 
 *   (s/and even? #(< % 42))
 * 
 *   Returns a spec that returns the conformed value. Successive
 *   conformed values propagate through rest of predicates.
 */
(function (){
cljs.spec.alpha$macros.and = (function cljs$spec$alpha$macros$and(var_args){
var args__23177__auto__ = [];
var len__23174__auto___242 = arguments.length;
var i__23175__auto___243 = (0);
while(true){
if((i__23175__auto___243 < len__23174__auto___242)){
args__23177__auto__.push((arguments[i__23175__auto___243]));

var G__244 = (i__23175__auto___243 + (1));
i__23175__auto___243 = G__244;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((2) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23178__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.and;},new cljs.core.Symbol("cljs.spec.alpha$macros","and","cljs.spec.alpha$macros/and",(198168194),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"and","and",(668631710),null),"cljs/spec/alpha.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred-forms","pred-forms",(1813143359),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"pred-forms","pred-forms",(1813143359),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(199),true,(199),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"pred-forms","pred-forms",(1813143359),null)], null)),"Takes predicate/spec-forms, e.g.\n\n  (s/and even? #(< % 42))\n\n  Returns a spec that returns the conformed value. Successive\n  conformed values propagate through rest of predicates.",(cljs.core.truth_(cljs.spec.alpha$macros.and)?cljs.spec.alpha$macros.and.cljs$lang$test:null)])));})()
;

cljs.spec.alpha$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred_forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","and-spec-impl","cljs.spec.alpha/and-spec-impl",(-492178340),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__15_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__15_SHARP_);
}),pred_forms);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.vec(pred_forms);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)));
});

cljs.spec.alpha$macros.and.cljs$lang$maxFixedArity = (2);

cljs.spec.alpha$macros.and.cljs$lang$applyTo = (function (seq238){
var G__239 = cljs.core.first(seq238);
var seq238__$1 = cljs.core.next(seq238);
var G__240 = cljs.core.first(seq238__$1);
var seq238__$2 = cljs.core.next(seq238__$1);
return cljs.spec.alpha$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__239,G__240,seq238__$2);
});

return new cljs.core.Var(function(){return cljs.spec.alpha$macros.and;},new cljs.core.Symbol("cljs.spec.alpha$macros","and","cljs.spec.alpha$macros/and",(198168194),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"and","and",(668631710),null),"cljs/spec/alpha.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred-forms","pred-forms",(1813143359),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"pred-forms","pred-forms",(1813143359),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(199),true,(199),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"pred-forms","pred-forms",(1813143359),null)], null)),"Takes predicate/spec-forms, e.g.\n\n  (s/and even? #(< % 42))\n\n  Returns a spec that returns the conformed value. Successive\n  conformed values propagate through rest of predicates.",(cljs.core.truth_(cljs.spec.alpha$macros.and)?cljs.spec.alpha$macros.and.cljs$lang$test:null)]));
})()
;
cljs.spec.alpha$macros.and.cljs$lang$macro = true;

(function (){
cljs.spec.alpha$macros.res_kind = (function cljs$spec$alpha$macros$res_kind(env,opts){
var map__245 = opts;
var map__245__$1 = ((((!((map__245 == null)))?((((map__245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__245.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__245):map__245);
var mopts = map__245__$1;
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__245__$1,new cljs.core.Keyword(null,"kind","kind",(-717265803)));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(kind)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mopts,new cljs.core.Keyword(null,"kind","kind",(-717265803)),cljs.spec.alpha$macros.res(env,kind)):mopts)], 0));
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.res_kind;},new cljs.core.Symbol("cljs.spec.alpha$macros","res-kind","cljs.spec.alpha$macros/res-kind",(-1706730299),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"res-kind","res-kind",(-2040653631),null),"cljs/spec/alpha.cljc",(16),(1),(209),(209),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.spec.alpha$macros.res_kind)?cljs.spec.alpha$macros.res_kind.cljs$lang$test:null)])));})()
;
var ret__23200__auto___255 = (function (){
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
cljs.spec.alpha$macros.every = (function cljs$spec$alpha$macros$every(var_args){
var args__23177__auto__ = [];
var len__23174__auto___256 = arguments.length;
var i__23175__auto___257 = (0);
while(true){
if((i__23175__auto___257 < len__23174__auto___256)){
args__23177__auto__.push((arguments[i__23175__auto___257]));

var G__258 = (i__23175__auto___257 + (1));
i__23175__auto___257 = G__258;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((3) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((3)),(0),null)):null);
return cljs.spec.alpha$macros.every.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23178__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.every;},new cljs.core.Symbol("cljs.spec.alpha$macros","every","cljs.spec.alpha$macros/every",(-218813563),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"every","every",(-419764351),null),"cljs/spec/alpha.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"into","into",(1489695498),null),new cljs.core.Symbol(null,"kind","kind",(923265724),null),new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"max-count","max-count",(-1115250464),null),new cljs.core.Symbol(null,"min-count","min-count",(-1059726756),null),new cljs.core.Symbol(null,"distinct","distinct",(-148347594),null),new cljs.core.Symbol(null,"gen-max","gen-max",(846851082),null),new cljs.core.Symbol(null,"gen-into","gen-into",(592640985),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"into","into",(1489695498),null),new cljs.core.Symbol(null,"kind","kind",(923265724),null),new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"max-count","max-count",(-1115250464),null),new cljs.core.Symbol(null,"min-count","min-count",(-1059726756),null),new cljs.core.Symbol(null,"distinct","distinct",(-148347594),null),new cljs.core.Symbol(null,"gen-max","gen-max",(846851082),null),new cljs.core.Symbol(null,"gen-into","gen-into",(592640985),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(218),true,(218),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"into","into",(1489695498),null),new cljs.core.Symbol(null,"kind","kind",(923265724),null),new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"max-count","max-count",(-1115250464),null),new cljs.core.Symbol(null,"min-count","min-count",(-1059726756),null),new cljs.core.Symbol(null,"distinct","distinct",(-148347594),null),new cljs.core.Symbol(null,"gen-max","gen-max",(846851082),null),new cljs.core.Symbol(null,"gen-into","gen-into",(592640985),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),"takes a pred and validates collection elements against that pred.\n\n  Note that 'every' does not do exhaustive checking, rather it samples\n  *coll-check-limit* elements. Nor (as a result) does it do any\n  conforming of elements. 'explain' will report at most *coll-error-limit*\n  problems.  Thus 'every' should be suitable for potentially large\n  collections.\n\n  Takes several kwargs options that further constrain the collection:\n\n  :kind - a pred/spec that the collection type must satisfy, e.g. vector?\n          (default nil) Note that if :kind is specified and :into is\n          not, this pred must generate in order for every to generate.\n  :count - specifies coll has exactly this count (default nil)\n  :min-count, :max-count - coll has count (<= min-count count max-count) (defaults nil)\n  :distinct - all the elements are distinct (default nil)\n\n  And additional args that control gen\n\n  :gen-max - the maximum coll size to generate (default 20)\n  :into - one of [], (), {}, #{} - the default collection to generate into\n      (default same as :kind if supplied, else []\n\n  Optionally takes :gen generator-fn, which must be a fn of no args that\n  returns a test.check generator\n\n  See also - coll-of, every-kv\n",(cljs.core.truth_(cljs.spec.alpha$macros.every)?cljs.spec.alpha$macros.every.cljs$lang$test:null)])));})()
;

cljs.spec.alpha$macros.every.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,p__251){
var map__252 = p__251;
var map__252__$1 = ((((!((map__252 == null)))?((((map__252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__252.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__252):map__252);
var opts = map__252__$1;
var max_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__252__$1,new cljs.core.Keyword(null,"max-count","max-count",(1539185305)));
var gen_max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__252__$1,new cljs.core.Keyword(null,"gen-max","gen-max",(-793680445)));
var into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__252__$1,new cljs.core.Keyword(null,"into","into",(-150836029)));
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__252__$1,new cljs.core.Keyword(null,"gen","gen",(142575302)));
var distinct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__252__$1,new cljs.core.Keyword(null,"distinct","distinct",(-1788879121)));
var gen_into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__252__$1,new cljs.core.Keyword(null,"gen-into","gen-into",(-1047890542)));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__252__$1,new cljs.core.Keyword(null,"count","count",(2139924085)));
var min_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__252__$1,new cljs.core.Keyword(null,"min-count","min-count",(1594709013)));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__252__$1,new cljs.core.Keyword(null,"kind","kind",(-717265803)));
var desc = new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",(1883026911)).cljs$core$IFn$_invoke$arity$1(opts);
var nopts = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"gen","gen",(142575302)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",(1883026911))], 0)),new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",(-1047104697)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,new cljs.core.Keyword(null,"kind","kind",(-717265803)).cljs$core$IFn$_invoke$arity$1(opts));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})())),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",(1883026911)),(function (){var or__21686__auto__ = desc;
if(cljs.core.truth_(or__21686__auto__)){
return or__21686__auto__;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",(123912744),null)),(function (){var x__22880__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,pred);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha$macros.res_kind(_AMPERSAND_env,opts)], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
}
})()], 0));
var gx = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var cpreds = (function (){var G__254 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__22880__auto__ = (function (){var or__21686__auto__ = kind;
if(cljs.core.truth_(or__21686__auto__)){
return or__21686__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",(1208130522),null);
}
})();
return cljs.core._conj((function (){var x__22880__auto____$1 = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto____$1);
})(),x__22880__auto__);
})()], null);
var G__254__$1 = (cljs.core.truth_(count)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__254,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null)),(function (){var x__22880__auto__ = count;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","bounded-count","cljs.core/bounded-count",(355256728),null)),(function (){var x__22880__auto__ = count;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)))):G__254);
var G__254__$2 = (cljs.core.truth_((function (){var or__21686__auto__ = min_count;
if(cljs.core.truth_(or__21686__auto__)){
return or__21686__auto__;
} else {
return max_count;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__254__$1,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",(1677001748),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),(function (){var x__22880__auto__ = min_count;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","bounded-count","cljs.core/bounded-count",(355256728),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__22880__auto__ = max_count;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",(-879172610),null)),(function (){var x__22880__auto__ = max_count;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = min_count;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),(function (){var x__22880__auto__ = max_count;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","MAX_INT","cljs.spec.alpha/MAX_INT",(1315428963),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)))):G__254__$1);
if(cljs.core.truth_(distinct)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__254__$2,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",(1866613644),null)),(function (){var x__22880__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",(1757277831),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","distinct?","cljs.core/distinct?",(-1285807788),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0))));
} else {
return G__254__$2;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","every-impl","cljs.spec.alpha/every-impl",(30419907),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nopts,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",(-693471218)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__22880__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),cpreds));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = gen;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
});

cljs.spec.alpha$macros.every.cljs$lang$maxFixedArity = (3);

cljs.spec.alpha$macros.every.cljs$lang$applyTo = (function (seq247){
var G__248 = cljs.core.first(seq247);
var seq247__$1 = cljs.core.next(seq247);
var G__249 = cljs.core.first(seq247__$1);
var seq247__$2 = cljs.core.next(seq247__$1);
var G__250 = cljs.core.first(seq247__$2);
var seq247__$3 = cljs.core.next(seq247__$2);
return cljs.spec.alpha$macros.every.cljs$core$IFn$_invoke$arity$variadic(G__248,G__249,G__250,seq247__$3);
});

return new cljs.core.Var(function(){return cljs.spec.alpha$macros.every;},new cljs.core.Symbol("cljs.spec.alpha$macros","every","cljs.spec.alpha$macros/every",(-218813563),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"every","every",(-419764351),null),"cljs/spec/alpha.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"into","into",(1489695498),null),new cljs.core.Symbol(null,"kind","kind",(923265724),null),new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"max-count","max-count",(-1115250464),null),new cljs.core.Symbol(null,"min-count","min-count",(-1059726756),null),new cljs.core.Symbol(null,"distinct","distinct",(-148347594),null),new cljs.core.Symbol(null,"gen-max","gen-max",(846851082),null),new cljs.core.Symbol(null,"gen-into","gen-into",(592640985),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"into","into",(1489695498),null),new cljs.core.Symbol(null,"kind","kind",(923265724),null),new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"max-count","max-count",(-1115250464),null),new cljs.core.Symbol(null,"min-count","min-count",(-1059726756),null),new cljs.core.Symbol(null,"distinct","distinct",(-148347594),null),new cljs.core.Symbol(null,"gen-max","gen-max",(846851082),null),new cljs.core.Symbol(null,"gen-into","gen-into",(592640985),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(218),true,(218),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"into","into",(1489695498),null),new cljs.core.Symbol(null,"kind","kind",(923265724),null),new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"max-count","max-count",(-1115250464),null),new cljs.core.Symbol(null,"min-count","min-count",(-1059726756),null),new cljs.core.Symbol(null,"distinct","distinct",(-148347594),null),new cljs.core.Symbol(null,"gen-max","gen-max",(846851082),null),new cljs.core.Symbol(null,"gen-into","gen-into",(592640985),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),"takes a pred and validates collection elements against that pred.\n\n  Note that 'every' does not do exhaustive checking, rather it samples\n  *coll-check-limit* elements. Nor (as a result) does it do any\n  conforming of elements. 'explain' will report at most *coll-error-limit*\n  problems.  Thus 'every' should be suitable for potentially large\n  collections.\n\n  Takes several kwargs options that further constrain the collection:\n\n  :kind - a pred/spec that the collection type must satisfy, e.g. vector?\n          (default nil) Note that if :kind is specified and :into is\n          not, this pred must generate in order for every to generate.\n  :count - specifies coll has exactly this count (default nil)\n  :min-count, :max-count - coll has count (<= min-count count max-count) (defaults nil)\n  :distinct - all the elements are distinct (default nil)\n\n  And additional args that control gen\n\n  :gen-max - the maximum coll size to generate (default 20)\n  :into - one of [], (), {}, #{} - the default collection to generate into\n      (default same as :kind if supplied, else []\n\n  Optionally takes :gen generator-fn, which must be a fn of no args that\n  returns a test.check generator\n\n  See also - coll-of, every-kv\n",(cljs.core.truth_(cljs.spec.alpha$macros.every)?cljs.spec.alpha$macros.every.cljs$lang$test:null)]));
})()
;
cljs.spec.alpha$macros.every.cljs$lang$macro = true;

var ret__23200__auto___264 = (function (){
/**
 * like 'every' but takes separate key and val preds and works on associative collections.
 * 
 *   Same options as 'every', :into defaults to {}
 * 
 *   See also - map-of
 */
(function (){
cljs.spec.alpha$macros.every_kv = (function cljs$spec$alpha$macros$every_kv(var_args){
var args__23177__auto__ = [];
var len__23174__auto___265 = arguments.length;
var i__23175__auto___266 = (0);
while(true){
if((i__23175__auto___266 < len__23174__auto___265)){
args__23177__auto__.push((arguments[i__23175__auto___266]));

var G__267 = (i__23175__auto___266 + (1));
i__23175__auto___266 = G__267;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((4) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((4)),(0),null)):null);
return cljs.spec.alpha$macros.every_kv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23178__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.every_kv;},new cljs.core.Symbol("cljs.spec.alpha$macros","every-kv","cljs.spec.alpha$macros/every-kv",(-1904142967),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"every-kv","every-kv",(-1701549683),null),"cljs/spec/alpha.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kpred","kpred",(-1781125167),null),new cljs.core.Symbol(null,"vpred","vpred",(1944119183),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kpred","kpred",(-1781125167),null),new cljs.core.Symbol(null,"vpred","vpred",(1944119183),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(266),true,(266),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kpred","kpred",(-1781125167),null),new cljs.core.Symbol(null,"vpred","vpred",(1944119183),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"like 'every' but takes separate key and val preds and works on associative collections.\n\n  Same options as 'every', :into defaults to {}\n\n  See also - map-of",(cljs.core.truth_(cljs.spec.alpha$macros.every_kv)?cljs.spec.alpha$macros.every_kv.cljs$lang$test:null)])));})()
;

cljs.spec.alpha$macros.every_kv.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kpred,vpred,opts){
var desc = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","every-kv","cljs.spec.alpha/every-kv",(-133428374),null)),(function (){var x__22880__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,kpred);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,vpred);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.spec.alpha$macros.res_kind(_AMPERSAND_env,opts)], 0)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",(123912744),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",(-415901908),null)),(function (){var x__22880__auto__ = kpred;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = vpred;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",(672643897))),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__16__auto__","i__16__auto__",(-2140973811),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"v__17__auto__","v__17__auto__",(567034810),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",(1961052085),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"v__17__auto__","v__17__auto__",(567034810),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"into","into",(-150836029))),(function (){var x__22880__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",(1883026911))),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = desc;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),opts], 0)));
});

cljs.spec.alpha$macros.every_kv.cljs$lang$maxFixedArity = (4);

cljs.spec.alpha$macros.every_kv.cljs$lang$applyTo = (function (seq259){
var G__260 = cljs.core.first(seq259);
var seq259__$1 = cljs.core.next(seq259);
var G__261 = cljs.core.first(seq259__$1);
var seq259__$2 = cljs.core.next(seq259__$1);
var G__262 = cljs.core.first(seq259__$2);
var seq259__$3 = cljs.core.next(seq259__$2);
var G__263 = cljs.core.first(seq259__$3);
var seq259__$4 = cljs.core.next(seq259__$3);
return cljs.spec.alpha$macros.every_kv.cljs$core$IFn$_invoke$arity$variadic(G__260,G__261,G__262,G__263,seq259__$4);
});

return new cljs.core.Var(function(){return cljs.spec.alpha$macros.every_kv;},new cljs.core.Symbol("cljs.spec.alpha$macros","every-kv","cljs.spec.alpha$macros/every-kv",(-1904142967),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"every-kv","every-kv",(-1701549683),null),"cljs/spec/alpha.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kpred","kpred",(-1781125167),null),new cljs.core.Symbol(null,"vpred","vpred",(1944119183),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kpred","kpred",(-1781125167),null),new cljs.core.Symbol(null,"vpred","vpred",(1944119183),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(266),true,(266),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kpred","kpred",(-1781125167),null),new cljs.core.Symbol(null,"vpred","vpred",(1944119183),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"like 'every' but takes separate key and val preds and works on associative collections.\n\n  Same options as 'every', :into defaults to {}\n\n  See also - map-of",(cljs.core.truth_(cljs.spec.alpha$macros.every_kv)?cljs.spec.alpha$macros.every_kv.cljs$lang$test:null)]));
})()
;
cljs.spec.alpha$macros.every_kv.cljs$lang$macro = true;

var ret__23200__auto___272 = (function (){
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
cljs.spec.alpha$macros.coll_of = (function cljs$spec$alpha$macros$coll_of(var_args){
var args__23177__auto__ = [];
var len__23174__auto___273 = arguments.length;
var i__23175__auto___274 = (0);
while(true){
if((i__23175__auto___274 < len__23174__auto___273)){
args__23177__auto__.push((arguments[i__23175__auto___274]));

var G__275 = (i__23175__auto___274 + (1));
i__23175__auto___274 = G__275;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((3) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((3)),(0),null)):null);
return cljs.spec.alpha$macros.coll_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23178__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.coll_of;},new cljs.core.Symbol("cljs.spec.alpha$macros","coll-of","cljs.spec.alpha$macros/coll-of",(-1504662300),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"coll-of","coll-of",(-1705285400),null),"cljs/spec/alpha.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(277),true,(277),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Returns a spec for a collection of items satisfying pred. Unlike\n  generator will fill an empty init-coll.\n\n  Same options as 'every'. conform will produce a collection\n  corresponding to :into if supplied, else will match the input collection,\n  avoiding rebuilding when possible.\n\n  Same options as 'every'.\n\n  See also - every, map-of",(cljs.core.truth_(cljs.spec.alpha$macros.coll_of)?cljs.spec.alpha$macros.coll_of.cljs$lang$test:null)])));})()
;

cljs.spec.alpha$macros.coll_of.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,opts){
var desc = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",(1019430407),null)),(function (){var x__22880__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,pred);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha$macros.res_kind(_AMPERSAND_env,opts)], 0)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",(123912744),null)),(function (){var x__22880__auto__ = pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",(45201917))),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",(1883026911))),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = desc;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),opts], 0)));
});

cljs.spec.alpha$macros.coll_of.cljs$lang$maxFixedArity = (3);

cljs.spec.alpha$macros.coll_of.cljs$lang$applyTo = (function (seq268){
var G__269 = cljs.core.first(seq268);
var seq268__$1 = cljs.core.next(seq268);
var G__270 = cljs.core.first(seq268__$1);
var seq268__$2 = cljs.core.next(seq268__$1);
var G__271 = cljs.core.first(seq268__$2);
var seq268__$3 = cljs.core.next(seq268__$2);
return cljs.spec.alpha$macros.coll_of.cljs$core$IFn$_invoke$arity$variadic(G__269,G__270,G__271,seq268__$3);
});

return new cljs.core.Var(function(){return cljs.spec.alpha$macros.coll_of;},new cljs.core.Symbol("cljs.spec.alpha$macros","coll-of","cljs.spec.alpha$macros/coll-of",(-1504662300),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"coll-of","coll-of",(-1705285400),null),"cljs/spec/alpha.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(277),true,(277),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Returns a spec for a collection of items satisfying pred. Unlike\n  generator will fill an empty init-coll.\n\n  Same options as 'every'. conform will produce a collection\n  corresponding to :into if supplied, else will match the input collection,\n  avoiding rebuilding when possible.\n\n  Same options as 'every'.\n\n  See also - every, map-of",(cljs.core.truth_(cljs.spec.alpha$macros.coll_of)?cljs.spec.alpha$macros.coll_of.cljs$lang$test:null)]));
})()
;
cljs.spec.alpha$macros.coll_of.cljs$lang$macro = true;

var ret__23200__auto___281 = (function (){
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
cljs.spec.alpha$macros.map_of = (function cljs$spec$alpha$macros$map_of(var_args){
var args__23177__auto__ = [];
var len__23174__auto___282 = arguments.length;
var i__23175__auto___283 = (0);
while(true){
if((i__23175__auto___283 < len__23174__auto___282)){
args__23177__auto__.push((arguments[i__23175__auto___283]));

var G__284 = (i__23175__auto___283 + (1));
i__23175__auto___283 = G__284;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((4) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((4)),(0),null)):null);
return cljs.spec.alpha$macros.map_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23178__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.map_of;},new cljs.core.Symbol("cljs.spec.alpha$macros","map-of","cljs.spec.alpha$macros/map-of",(-1130010890),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"map-of","map-of",(-1464753414),null),"cljs/spec/alpha.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kpred","kpred",(-1781125167),null),new cljs.core.Symbol(null,"vpred","vpred",(1944119183),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kpred","kpred",(-1781125167),null),new cljs.core.Symbol(null,"vpred","vpred",(1944119183),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(292),true,(292),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kpred","kpred",(-1781125167),null),new cljs.core.Symbol(null,"vpred","vpred",(1944119183),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Returns a spec for a map whose keys satisfy kpred and vals satisfy\n  vpred. Unlike 'every-kv', map-of will exhaustively conform every\n  value.\n\n  Same options as 'every', :kind defaults to map?, with the addition of:\n\n  :conform-keys - conform keys as well as values (default false)\n\n  See also - every-kv",(cljs.core.truth_(cljs.spec.alpha$macros.map_of)?cljs.spec.alpha$macros.map_of.cljs$lang$test:null)])));})()
;

cljs.spec.alpha$macros.map_of.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kpred,vpred,opts){
var desc = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",(153715093),null)),(function (){var x__22880__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,kpred);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,vpred);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.spec.alpha$macros.res_kind(_AMPERSAND_env,opts)], 0)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","every-kv","cljs.spec.alpha/every-kv",(-133428374),null)),(function (){var x__22880__auto__ = kpred;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = vpred;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",(45201917))),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kind","kind",(-717265803))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",(-1390345523),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",(1883026911))),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = desc;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),opts], 0)));
});

cljs.spec.alpha$macros.map_of.cljs$lang$maxFixedArity = (4);

cljs.spec.alpha$macros.map_of.cljs$lang$applyTo = (function (seq276){
var G__277 = cljs.core.first(seq276);
var seq276__$1 = cljs.core.next(seq276);
var G__278 = cljs.core.first(seq276__$1);
var seq276__$2 = cljs.core.next(seq276__$1);
var G__279 = cljs.core.first(seq276__$2);
var seq276__$3 = cljs.core.next(seq276__$2);
var G__280 = cljs.core.first(seq276__$3);
var seq276__$4 = cljs.core.next(seq276__$3);
return cljs.spec.alpha$macros.map_of.cljs$core$IFn$_invoke$arity$variadic(G__277,G__278,G__279,G__280,seq276__$4);
});

return new cljs.core.Var(function(){return cljs.spec.alpha$macros.map_of;},new cljs.core.Symbol("cljs.spec.alpha$macros","map-of","cljs.spec.alpha$macros/map-of",(-1130010890),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"map-of","map-of",(-1464753414),null),"cljs/spec/alpha.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kpred","kpred",(-1781125167),null),new cljs.core.Symbol(null,"vpred","vpred",(1944119183),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kpred","kpred",(-1781125167),null),new cljs.core.Symbol(null,"vpred","vpred",(1944119183),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(292),true,(292),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kpred","kpred",(-1781125167),null),new cljs.core.Symbol(null,"vpred","vpred",(1944119183),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Returns a spec for a map whose keys satisfy kpred and vals satisfy\n  vpred. Unlike 'every-kv', map-of will exhaustively conform every\n  value.\n\n  Same options as 'every', :kind defaults to map?, with the addition of:\n\n  :conform-keys - conform keys as well as values (default false)\n\n  See also - every-kv",(cljs.core.truth_(cljs.spec.alpha$macros.map_of)?cljs.spec.alpha$macros.map_of.cljs$lang$test:null)]));
})()
;
cljs.spec.alpha$macros.map_of.cljs$lang$macro = true;

var ret__23200__auto___285 = /**
 * Returns a regex op that matches zero or more values matching
 *   pred. Produces a vector of matches iff there is at least one match
 */
(function (){
cljs.spec.alpha$macros._STAR_ = (function cljs$spec$alpha$macros$_STAR_(_AMPERSAND_form,_AMPERSAND_env,pred_form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","rep-impl","cljs.spec.alpha/rep-impl",(272857093),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,pred_form);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = pred_form;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros._STAR_;},new cljs.core.Symbol("cljs.spec.alpha$macros","*","cljs.spec.alpha$macros/*",(545340973),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"*","*",(345799209),null),"cljs/spec/alpha.cljc",(12),(1),(306),true,(306),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred-form","pred-form",(1189696240),null)], null)),"Returns a regex op that matches zero or more values matching\n  pred. Produces a vector of matches iff there is at least one match",(cljs.core.truth_(cljs.spec.alpha$macros._STAR_)?cljs.spec.alpha$macros._STAR_.cljs$lang$test:null)])));})()
;
cljs.spec.alpha$macros._STAR_.cljs$lang$macro = true;

var ret__23200__auto___286 = /**
 * Returns a regex op that matches one or more values matching
 *   pred. Produces a vector of matches
 */
(function (){
cljs.spec.alpha$macros._PLUS_ = (function cljs$spec$alpha$macros$_PLUS_(_AMPERSAND_form,_AMPERSAND_env,pred_form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","rep+impl","cljs.spec.alpha/rep+impl",(1883292654),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,pred_form);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = pred_form;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros._PLUS_;},new cljs.core.Symbol("cljs.spec.alpha$macros","+","cljs.spec.alpha$macros/+",(-942940986),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"+","+",(-740910886),null),"cljs/spec/alpha.cljc",(12),(1),(312),true,(312),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred-form","pred-form",(1189696240),null)], null)),"Returns a regex op that matches one or more values matching\n  pred. Produces a vector of matches",(cljs.core.truth_(cljs.spec.alpha$macros._PLUS_)?cljs.spec.alpha$macros._PLUS_.cljs$lang$test:null)])));})()
;
cljs.spec.alpha$macros._PLUS_.cljs$lang$macro = true;

var ret__23200__auto___287 = /**
 * Returns a regex op that matches zero or one value matching
 *   pred. Produces a single value (not a collection) if matched.
 */
(function (){
cljs.spec.alpha$macros._QMARK_ = (function cljs$spec$alpha$macros$_QMARK_(_AMPERSAND_form,_AMPERSAND_env,pred_form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","maybe-impl","cljs.spec.alpha/maybe-impl",(1618854020),null)),(function (){var x__22880__auto__ = pred_form;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,pred_form);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros._QMARK_;},new cljs.core.Symbol("cljs.spec.alpha$macros","?","cljs.spec.alpha$macros/?",(-935394022),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"?","?",(-62633706),null),"cljs/spec/alpha.cljc",(12),(1),(318),true,(318),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred-form","pred-form",(1189696240),null)], null)),"Returns a regex op that matches zero or one value matching\n  pred. Produces a single value (not a collection) if matched.",(cljs.core.truth_(cljs.spec.alpha$macros._QMARK_)?cljs.spec.alpha$macros._QMARK_.cljs$lang$test:null)])));})()
;
cljs.spec.alpha$macros._QMARK_.cljs$lang$macro = true;

var ret__23200__auto___291 = (function (){
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
cljs.spec.alpha$macros.alt = (function cljs$spec$alpha$macros$alt(var_args){
var args__23177__auto__ = [];
var len__23174__auto___292 = arguments.length;
var i__23175__auto___293 = (0);
while(true){
if((i__23175__auto___293 < len__23174__auto___292)){
args__23177__auto__.push((arguments[i__23175__auto___293]));

var G__294 = (i__23175__auto___293 + (1));
i__23175__auto___293 = G__294;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((2) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.alt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23178__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.alt;},new cljs.core.Symbol("cljs.spec.alpha$macros","alt","cljs.spec.alpha$macros/alt",(495730145),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"alt","alt",(1637317101),null),"cljs/spec/alpha.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(324),true,(324),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null)], null)),"Takes key+pred pairs, e.g.\n\n  (s/alt :even even? :small #(< % 42))\n\n  Returns a regex op that returns a map entry containing the key of the\n  first matching pred and the corresponding value. Thus the\n  'key' and 'val' functions can be used to refer generically to the\n  components of the tagged return.",(cljs.core.truth_(cljs.spec.alpha$macros.alt)?cljs.spec.alpha$macros.alt.cljs$lang$test:null)])));})()
;

cljs.spec.alpha$macros.alt.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,key_pred_forms){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),key_pred_forms);
var keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var pred_forms = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
var pf = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (pairs,keys,pred_forms){
return (function (p1__18_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__18_SHARP_);
});})(pairs,keys,pred_forms))
,pred_forms);
if((cljs.core.even_QMARK_(cljs.core.count(key_pred_forms))) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,keys))){
} else {
throw (new Error(["Assert failed: ","alt expects k1 p1 k2 p2..., where ks are keywords","\n","(clojure.core/and (even? (count key-pred-forms)) (every? keyword? keys))"].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","alt-impl","cljs.spec.alpha/alt-impl",(1852741609),null)),(function (){var x__22880__auto__ = keys;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = pred_forms;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = pf;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
});

cljs.spec.alpha$macros.alt.cljs$lang$maxFixedArity = (2);

cljs.spec.alpha$macros.alt.cljs$lang$applyTo = (function (seq288){
var G__289 = cljs.core.first(seq288);
var seq288__$1 = cljs.core.next(seq288);
var G__290 = cljs.core.first(seq288__$1);
var seq288__$2 = cljs.core.next(seq288__$1);
return cljs.spec.alpha$macros.alt.cljs$core$IFn$_invoke$arity$variadic(G__289,G__290,seq288__$2);
});

return new cljs.core.Var(function(){return cljs.spec.alpha$macros.alt;},new cljs.core.Symbol("cljs.spec.alpha$macros","alt","cljs.spec.alpha$macros/alt",(495730145),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"alt","alt",(1637317101),null),"cljs/spec/alpha.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(324),true,(324),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null)], null)),"Takes key+pred pairs, e.g.\n\n  (s/alt :even even? :small #(< % 42))\n\n  Returns a regex op that returns a map entry containing the key of the\n  first matching pred and the corresponding value. Thus the\n  'key' and 'val' functions can be used to refer generically to the\n  components of the tagged return.",(cljs.core.truth_(cljs.spec.alpha$macros.alt)?cljs.spec.alpha$macros.alt.cljs$lang$test:null)]));
})()
;
cljs.spec.alpha$macros.alt.cljs$lang$macro = true;

var ret__23200__auto___298 = (function (){
/**
 * Takes key+pred pairs, e.g.
 * 
 *   (s/cat :e even? :o odd?)
 * 
 *   Returns a regex op that matches (all) values in sequence, returning a map
 *   containing the keys of each pred and the corresponding value.
 */
(function (){
cljs.spec.alpha$macros.cat = (function cljs$spec$alpha$macros$cat(var_args){
var args__23177__auto__ = [];
var len__23174__auto___299 = arguments.length;
var i__23175__auto___300 = (0);
while(true){
if((i__23175__auto___300 < len__23174__auto___299)){
args__23177__auto__.push((arguments[i__23175__auto___300]));

var G__301 = (i__23175__auto___300 + (1));
i__23175__auto___300 = G__301;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((2) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23178__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.cat;},new cljs.core.Symbol("cljs.spec.alpha$macros","cat","cljs.spec.alpha$macros/cat",(653862692),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"cat","cat",(182721320),null),"cljs/spec/alpha.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(341),true,(341),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null)], null)),"Takes key+pred pairs, e.g.\n\n  (s/cat :e even? :o odd?)\n\n  Returns a regex op that matches (all) values in sequence, returning a map\n  containing the keys of each pred and the corresponding value.",(cljs.core.truth_(cljs.spec.alpha$macros.cat)?cljs.spec.alpha$macros.cat.cljs$lang$test:null)])));})()
;

cljs.spec.alpha$macros.cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,key_pred_forms){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),key_pred_forms);
var keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var pred_forms = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
var pf = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (pairs,keys,pred_forms){
return (function (p1__19_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__19_SHARP_);
});})(pairs,keys,pred_forms))
,pred_forms);
if((cljs.core.even_QMARK_(cljs.core.count(key_pred_forms))) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,keys))){
} else {
throw (new Error(["Assert failed: ","cat expects k1 p1 k2 p2..., where ks are keywords","\n","(clojure.core/and (even? (count key-pred-forms)) (every? keyword? keys))"].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","cat-impl","cljs.spec.alpha/cat-impl",(1256350867),null)),(function (){var x__22880__auto__ = keys;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = pred_forms;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = pf;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
});

cljs.spec.alpha$macros.cat.cljs$lang$maxFixedArity = (2);

cljs.spec.alpha$macros.cat.cljs$lang$applyTo = (function (seq295){
var G__296 = cljs.core.first(seq295);
var seq295__$1 = cljs.core.next(seq295);
var G__297 = cljs.core.first(seq295__$1);
var seq295__$2 = cljs.core.next(seq295__$1);
return cljs.spec.alpha$macros.cat.cljs$core$IFn$_invoke$arity$variadic(G__296,G__297,seq295__$2);
});

return new cljs.core.Var(function(){return cljs.spec.alpha$macros.cat;},new cljs.core.Symbol("cljs.spec.alpha$macros","cat","cljs.spec.alpha$macros/cat",(653862692),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"cat","cat",(182721320),null),"cljs/spec/alpha.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(341),true,(341),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"key-pred-forms","key-pred-forms",(2102716187),null)], null)),"Takes key+pred pairs, e.g.\n\n  (s/cat :e even? :o odd?)\n\n  Returns a regex op that matches (all) values in sequence, returning a map\n  containing the keys of each pred and the corresponding value.",(cljs.core.truth_(cljs.spec.alpha$macros.cat)?cljs.spec.alpha$macros.cat.cljs$lang$test:null)]));
})()
;
cljs.spec.alpha$macros.cat.cljs$lang$macro = true;

var ret__23200__auto___306 = (function (){
/**
 * takes a regex op re, and predicates. Returns a regex-op that consumes
 *   input as per re but subjects the resulting value to the
 *   conjunction of the predicates, and any conforming they might perform.
 */
(function (){
cljs.spec.alpha$macros._AMPERSAND_ = (function cljs$spec$alpha$macros$_AMPERSAND_(var_args){
var args__23177__auto__ = [];
var len__23174__auto___307 = arguments.length;
var i__23175__auto___308 = (0);
while(true){
if((i__23175__auto___308 < len__23174__auto___307)){
args__23177__auto__.push((arguments[i__23175__auto___308]));

var G__309 = (i__23175__auto___308 + (1));
i__23175__auto___308 = G__309;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((3) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((3)),(0),null)):null);
return cljs.spec.alpha$macros._AMPERSAND_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23178__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros._AMPERSAND_;},new cljs.core.Symbol("cljs.spec.alpha$macros","&","cljs.spec.alpha$macros/&",(-333619780),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),"cljs/spec/alpha.cljc",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"re","re",(1869207729),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"re","re",(1869207729),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(357),true,(357),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"re","re",(1869207729),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null)], null)),"takes a regex op re, and predicates. Returns a regex-op that consumes\n  input as per re but subjects the resulting value to the\n  conjunction of the predicates, and any conforming they might perform.",(cljs.core.truth_(cljs.spec.alpha$macros._AMPERSAND_)?cljs.spec.alpha$macros._AMPERSAND_.cljs$lang$test:null)])));})()
;

cljs.spec.alpha$macros._AMPERSAND_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,re,preds){
var pv = cljs.core.vec(preds);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","amp-impl","cljs.spec.alpha/amp-impl",(1419577313),null)),(function (){var x__22880__auto__ = re;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = pv;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (pv){
return (function (p1__20_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__20_SHARP_);
});})(pv))
,pv);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
});

cljs.spec.alpha$macros._AMPERSAND_.cljs$lang$maxFixedArity = (3);

cljs.spec.alpha$macros._AMPERSAND_.cljs$lang$applyTo = (function (seq302){
var G__303 = cljs.core.first(seq302);
var seq302__$1 = cljs.core.next(seq302);
var G__304 = cljs.core.first(seq302__$1);
var seq302__$2 = cljs.core.next(seq302__$1);
var G__305 = cljs.core.first(seq302__$2);
var seq302__$3 = cljs.core.next(seq302__$2);
return cljs.spec.alpha$macros._AMPERSAND_.cljs$core$IFn$_invoke$arity$variadic(G__303,G__304,G__305,seq302__$3);
});

return new cljs.core.Var(function(){return cljs.spec.alpha$macros._AMPERSAND_;},new cljs.core.Symbol("cljs.spec.alpha$macros","&","cljs.spec.alpha$macros/&",(-333619780),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),"cljs/spec/alpha.cljc",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"re","re",(1869207729),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"re","re",(1869207729),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(357),true,(357),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"re","re",(1869207729),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null)], null)),"takes a regex op re, and predicates. Returns a regex-op that consumes\n  input as per re but subjects the resulting value to the\n  conjunction of the predicates, and any conforming they might perform.",(cljs.core.truth_(cljs.spec.alpha$macros._AMPERSAND_)?cljs.spec.alpha$macros._AMPERSAND_.cljs$lang$test:null)]));
})()
;
cljs.spec.alpha$macros._AMPERSAND_.cljs$lang$macro = true;

var ret__23200__auto___312 = (function (){
/**
 * takes a predicate function with the semantics of conform i.e. it should return either a
 *   (possibly converted) value or :cljs.spec.alpha/invalid, and returns a
 *   spec that uses it as a predicate/conformer. Optionally takes a
 *   second fn that does unform of result of first
 */
(function (){
cljs.spec.alpha$macros.conformer = (function cljs$spec$alpha$macros$conformer(var_args){
var G__311 = arguments.length;
switch (G__311) {
case (3):
return cljs.spec.alpha$macros.conformer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.spec.alpha$macros.conformer.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.conformer;},new cljs.core.Symbol("cljs.spec.alpha$macros","conformer","cljs.spec.alpha$macros/conformer",(-986053638),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"conformer","conformer",(-651689994),null),"cljs/spec/alpha.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"unf","unf",(-1663126605),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"unf","unf",(-1663126605),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(365),true,(365),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"unf","unf",(-1663126605),null)], null)),"takes a predicate function with the semantics of conform i.e. it should return either a\n  (possibly converted) value or :cljs.spec.alpha/invalid, and returns a\n  spec that uses it as a predicate/conformer. Optionally takes a\n  second fn that does unform of result of first",(cljs.core.truth_(cljs.spec.alpha$macros.conformer)?cljs.spec.alpha$macros.conformer.cljs$lang$test:null)])));})()
;

cljs.spec.alpha$macros.conformer.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","spec-impl","cljs.spec.alpha/spec-impl",(69764672),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",(2140085535),null)),(function (){var x__22880__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,f);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)));
});

cljs.spec.alpha$macros.conformer.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,f,unf){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","spec-impl","cljs.spec.alpha/spec-impl",(69764672),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",(2140085535),null)),(function (){var x__22880__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,f);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,unf);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,true),(function (){var x__22880__auto__ = unf;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
});

cljs.spec.alpha$macros.conformer.cljs$lang$maxFixedArity = (4);

return new cljs.core.Var(function(){return cljs.spec.alpha$macros.conformer;},new cljs.core.Symbol("cljs.spec.alpha$macros","conformer","cljs.spec.alpha$macros/conformer",(-986053638),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"conformer","conformer",(-651689994),null),"cljs/spec/alpha.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"unf","unf",(-1663126605),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"unf","unf",(-1663126605),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(365),true,(365),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"unf","unf",(-1663126605),null)], null)),"takes a predicate function with the semantics of conform i.e. it should return either a\n  (possibly converted) value or :cljs.spec.alpha/invalid, and returns a\n  spec that uses it as a predicate/conformer. Optionally takes a\n  second fn that does unform of result of first",(cljs.core.truth_(cljs.spec.alpha$macros.conformer)?cljs.spec.alpha$macros.conformer.cljs$lang$test:null)]));
})()
;
cljs.spec.alpha$macros.conformer.cljs$lang$macro = true;

var ret__23200__auto___320 = (function (){
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
cljs.spec.alpha$macros.fspec = (function cljs$spec$alpha$macros$fspec(var_args){
var args__23177__auto__ = [];
var len__23174__auto___321 = arguments.length;
var i__23175__auto___322 = (0);
while(true){
if((i__23175__auto___322 < len__23174__auto___321)){
args__23177__auto__.push((arguments[i__23175__auto___322]));

var G__323 = (i__23175__auto___322 + (1));
i__23175__auto___322 = G__323;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((2) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.fspec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23178__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.fspec;},new cljs.core.Symbol("cljs.spec.alpha$macros","fspec","cljs.spec.alpha$macros/fspec",(1314545612),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"fspec","fspec",(1380883392),null),"cljs/spec/alpha.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"ret","ret",(1172308713),null),new cljs.core.Symbol(null,"fn","fn",(465265323),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"ret","ret",(1172308713),null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null))], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"ret","ret",(1172308713),null),new cljs.core.Symbol(null,"fn","fn",(465265323),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"ret","ret",(1172308713),null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null))], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(373),true,(373),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"ret","ret",(1172308713),null),new cljs.core.Symbol(null,"fn","fn",(465265323),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"ret","ret",(1172308713),null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null))], null)], null)], null)),"takes :args :ret and (optional) :fn kwargs whose values are preds\n  and returns a spec whose conform/explain take a fn and validates it\n  using generative testing. The conformed value is always the fn itself.\n\n  See 'fdef' for a single operation that creates an fspec and\n  registers it, as well as a full description of :args, :ret and :fn\n\n  fspecs can generate functions that validate the arguments and\n  fabricate a return value compliant with the :ret spec, ignoring\n  the :fn spec if present.\n\n  Optionally takes :gen generator-fn, which must be a fn of no args\n  that returns a test.check generator.",(cljs.core.truth_(cljs.spec.alpha$macros.fspec)?cljs.spec.alpha$macros.fspec.cljs$lang$test:null)])));})()
;

cljs.spec.alpha$macros.fspec.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__317){
var map__318 = p__317;
var map__318__$1 = ((((!((map__318 == null)))?((((map__318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__318.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__318):map__318);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__318__$1,new cljs.core.Keyword(null,"args","args",(1315556576)));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__318__$1,new cljs.core.Keyword(null,"ret","ret",(-468222814)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__318__$1,new cljs.core.Keyword(null,"fn","fn",(-1175266204)));
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__318__$1,new cljs.core.Keyword(null,"gen","gen",(142575302)));
var env = _AMPERSAND_env;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","fspec-impl","cljs.spec.alpha/fspec-impl",(-1748020611),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",(-707298191),null)),(function (){var x__22880__auto__ = args;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = cljs.spec.alpha$macros.res(env,args);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",(-707298191),null)),(function (){var x__22880__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = cljs.spec.alpha$macros.res(env,ret);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",(-707298191),null)),(function (){var x__22880__auto__ = fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = cljs.spec.alpha$macros.res(env,fn);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = gen;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
});

cljs.spec.alpha$macros.fspec.cljs$lang$maxFixedArity = (2);

cljs.spec.alpha$macros.fspec.cljs$lang$applyTo = (function (seq314){
var G__315 = cljs.core.first(seq314);
var seq314__$1 = cljs.core.next(seq314);
var G__316 = cljs.core.first(seq314__$1);
var seq314__$2 = cljs.core.next(seq314__$1);
return cljs.spec.alpha$macros.fspec.cljs$core$IFn$_invoke$arity$variadic(G__315,G__316,seq314__$2);
});

return new cljs.core.Var(function(){return cljs.spec.alpha$macros.fspec;},new cljs.core.Symbol("cljs.spec.alpha$macros","fspec","cljs.spec.alpha$macros/fspec",(1314545612),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"fspec","fspec",(1380883392),null),"cljs/spec/alpha.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"ret","ret",(1172308713),null),new cljs.core.Symbol(null,"fn","fn",(465265323),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"ret","ret",(1172308713),null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null))], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"ret","ret",(1172308713),null),new cljs.core.Symbol(null,"fn","fn",(465265323),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"ret","ret",(1172308713),null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null))], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(373),true,(373),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"ret","ret",(1172308713),null),new cljs.core.Symbol(null,"fn","fn",(465265323),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"ret","ret",(1172308713),null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null))], null)], null)], null)),"takes :args :ret and (optional) :fn kwargs whose values are preds\n  and returns a spec whose conform/explain take a fn and validates it\n  using generative testing. The conformed value is always the fn itself.\n\n  See 'fdef' for a single operation that creates an fspec and\n  registers it, as well as a full description of :args, :ret and :fn\n\n  fspecs can generate functions that validate the arguments and\n  fabricate a return value compliant with the :ret spec, ignoring\n  the :fn spec if present.\n\n  Optionally takes :gen generator-fn, which must be a fn of no args\n  that returns a test.check generator.",(cljs.core.truth_(cljs.spec.alpha$macros.fspec)?cljs.spec.alpha$macros.fspec.cljs$lang$test:null)]));
})()
;
cljs.spec.alpha$macros.fspec.cljs$lang$macro = true;

var ret__23200__auto___327 = (function (){
/**
 * takes one or more preds and returns a spec for a tuple, a vector
 *   where each element conforms to the corresponding pred. Each element
 *   will be referred to in paths using its ordinal.
 */
(function (){
cljs.spec.alpha$macros.tuple = (function cljs$spec$alpha$macros$tuple(var_args){
var args__23177__auto__ = [];
var len__23174__auto___328 = arguments.length;
var i__23175__auto___329 = (0);
while(true){
if((i__23175__auto___329 < len__23174__auto___328)){
args__23177__auto__.push((arguments[i__23175__auto___329]));

var G__330 = (i__23175__auto___329 + (1));
i__23175__auto___329 = G__330;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((2) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.tuple.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23178__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.tuple;},new cljs.core.Symbol("cljs.spec.alpha$macros","tuple","cljs.spec.alpha$macros/tuple",(1906372047),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"tuple","tuple",(1167864243),null),"cljs/spec/alpha.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(393),true,(393),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null)], null)),"takes one or more preds and returns a spec for a tuple, a vector\n  where each element conforms to the corresponding pred. Each element\n  will be referred to in paths using its ordinal.",(cljs.core.truth_(cljs.spec.alpha$macros.tuple)?cljs.spec.alpha$macros.tuple.cljs$lang$test:null)])));})()
;

cljs.spec.alpha$macros.tuple.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,preds){
if(!(cljs.core.empty_QMARK_(preds))){
} else {
throw (new Error("Assert failed: (not (empty? preds))"));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","tuple-impl","cljs.spec.alpha/tuple-impl",(113790282),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__21_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__21_SHARP_);
}),preds);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.vec(preds);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
});

cljs.spec.alpha$macros.tuple.cljs$lang$maxFixedArity = (2);

cljs.spec.alpha$macros.tuple.cljs$lang$applyTo = (function (seq324){
var G__325 = cljs.core.first(seq324);
var seq324__$1 = cljs.core.next(seq324);
var G__326 = cljs.core.first(seq324__$1);
var seq324__$2 = cljs.core.next(seq324__$1);
return cljs.spec.alpha$macros.tuple.cljs$core$IFn$_invoke$arity$variadic(G__325,G__326,seq324__$2);
});

return new cljs.core.Var(function(){return cljs.spec.alpha$macros.tuple;},new cljs.core.Symbol("cljs.spec.alpha$macros","tuple","cljs.spec.alpha$macros/tuple",(1906372047),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"tuple","tuple",(1167864243),null),"cljs/spec/alpha.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(393),true,(393),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null)], null)),"takes one or more preds and returns a spec for a tuple, a vector\n  where each element conforms to the corresponding pred. Each element\n  will be referred to in paths using its ordinal.",(cljs.core.truth_(cljs.spec.alpha$macros.tuple)?cljs.spec.alpha$macros.tuple.cljs$lang$test:null)]));
})()
;
cljs.spec.alpha$macros.tuple.cljs$lang$macro = true;

(function (){
cljs.spec.alpha$macros._speced_vars = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros._speced_vars;},new cljs.core.Symbol("cljs.spec.alpha$macros","_speced_vars","cljs.spec.alpha$macros/_speced_vars",(-1419468),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"_speced_vars","_speced_vars",(-1946182864),null),"cljs/spec/alpha.cljc",(28),(1),(401),(401),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha$macros._speced_vars)?cljs.spec.alpha$macros._speced_vars.cljs$lang$test:null)])));})()
;
(function (){
cljs.spec.alpha$macros.speced_vars = (function cljs$spec$alpha$macros$speced_vars(){
return cljs.core.deref(cljs.spec.alpha$macros._speced_vars);
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.speced_vars;},new cljs.core.Symbol("cljs.spec.alpha$macros","speced-vars","cljs.spec.alpha$macros/speced-vars",(-1983041817),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"speced-vars","speced-vars",(-172594461),null),"cljs/spec/alpha.cljc",(18),(1),(403),(403),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs.spec.alpha$macros.speced_vars)?cljs.spec.alpha$macros.speced_vars.cljs$lang$test:null)])));})()
;
var ret__23200__auto___335 = (function (){
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
 *   instrument, tested by the runner cljs.spec.test.alpha/run-tests, and (if
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
 *   (s/fdef cljs.core/symbol
 *  :args (s/alt :separate (s/cat :ns string? :n string?)
 *               :str string?
 *               :sym symbol?)
 *  :ret symbol?)
 */
(function (){
cljs.spec.alpha$macros.fdef = (function cljs$spec$alpha$macros$fdef(var_args){
var args__23177__auto__ = [];
var len__23174__auto___336 = arguments.length;
var i__23175__auto___337 = (0);
while(true){
if((i__23175__auto___337 < len__23174__auto___336)){
args__23177__auto__.push((arguments[i__23175__auto___337]));

var G__338 = (i__23175__auto___337 + (1));
i__23175__auto___337 = G__338;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((3) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((3)),(0),null)):null);
return cljs.spec.alpha$macros.fdef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23178__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.fdef;},new cljs.core.Symbol("cljs.spec.alpha$macros","fdef","cljs.spec.alpha$macros/fdef",(661259963),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"fdef","fdef",(459719359),null),"cljs/spec/alpha.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"fn-sym","fn-sym",(-1230447259),null),new cljs.core.Symbol(null,"specs","specs",(-1227865028),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"fn-sym","fn-sym",(-1230447259),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"specs","specs",(-1227865028),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(406),true,(406),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"fn-sym","fn-sym",(-1230447259),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"specs","specs",(-1227865028),null)], null)),"Takes a symbol naming a function, and one or more of the following:\n\n  :args A regex spec for the function arguments as they were a list to be\n    passed to apply - in this way, a single spec can handle functions with\n    multiple arities\n  :ret A spec for the function's return value\n  :fn A spec of the relationship between args and ret - the\n    value passed is {:args conformed-args :ret conformed-ret} and is\n    expected to contain predicates that relate those values\n\n  Qualifies fn-sym with resolve, or using *ns* if no resolution found.\n  Registers an fspec in the global registry, where it can be retrieved\n  by calling get-spec with the var or full-qualified symbol.\n\n  Once registered, function specs are included in doc, checked by\n  instrument, tested by the runner cljs.spec.test.alpha/run-tests, and (if\n  a macro) used to explain errors during macroexpansion.\n\n  Note that :fn specs require the presence of :args and :ret specs to\n  conform values, and so :fn specs will be ignored if :args or :ret\n  are missing.\n\n  Returns the qualified fn-sym.\n\n  For example, to register function specs for the symbol function:\n\n  (s/fdef cljs.core/symbol\n    :args (s/alt :separate (s/cat :ns string? :n string?)\n                 :str string?\n                 :sym symbol?)\n    :ret symbol?)",(cljs.core.truth_(cljs.spec.alpha$macros.fdef)?cljs.spec.alpha$macros.fdef.cljs$lang$test:null)])));})()
;

cljs.spec.alpha$macros.fdef.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fn_sym,specs){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha$macros._speced_vars,cljs.core.conj,cljs.spec.alpha$macros.ns_qualify(_AMPERSAND_env,fn_sym));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","def","cljs.spec.alpha/def",(1122970404),null)),(function (){var x__22880__auto__ = fn_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",(-1289128341),null)),specs));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
});

cljs.spec.alpha$macros.fdef.cljs$lang$maxFixedArity = (3);

cljs.spec.alpha$macros.fdef.cljs$lang$applyTo = (function (seq331){
var G__332 = cljs.core.first(seq331);
var seq331__$1 = cljs.core.next(seq331);
var G__333 = cljs.core.first(seq331__$1);
var seq331__$2 = cljs.core.next(seq331__$1);
var G__334 = cljs.core.first(seq331__$2);
var seq331__$3 = cljs.core.next(seq331__$2);
return cljs.spec.alpha$macros.fdef.cljs$core$IFn$_invoke$arity$variadic(G__332,G__333,G__334,seq331__$3);
});

return new cljs.core.Var(function(){return cljs.spec.alpha$macros.fdef;},new cljs.core.Symbol("cljs.spec.alpha$macros","fdef","cljs.spec.alpha$macros/fdef",(661259963),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"fdef","fdef",(459719359),null),"cljs/spec/alpha.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"fn-sym","fn-sym",(-1230447259),null),new cljs.core.Symbol(null,"specs","specs",(-1227865028),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"fn-sym","fn-sym",(-1230447259),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"specs","specs",(-1227865028),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(406),true,(406),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"fn-sym","fn-sym",(-1230447259),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"specs","specs",(-1227865028),null)], null)),"Takes a symbol naming a function, and one or more of the following:\n\n  :args A regex spec for the function arguments as they were a list to be\n    passed to apply - in this way, a single spec can handle functions with\n    multiple arities\n  :ret A spec for the function's return value\n  :fn A spec of the relationship between args and ret - the\n    value passed is {:args conformed-args :ret conformed-ret} and is\n    expected to contain predicates that relate those values\n\n  Qualifies fn-sym with resolve, or using *ns* if no resolution found.\n  Registers an fspec in the global registry, where it can be retrieved\n  by calling get-spec with the var or full-qualified symbol.\n\n  Once registered, function specs are included in doc, checked by\n  instrument, tested by the runner cljs.spec.test.alpha/run-tests, and (if\n  a macro) used to explain errors during macroexpansion.\n\n  Note that :fn specs require the presence of :args and :ret specs to\n  conform values, and so :fn specs will be ignored if :args or :ret\n  are missing.\n\n  Returns the qualified fn-sym.\n\n  For example, to register function specs for the symbol function:\n\n  (s/fdef cljs.core/symbol\n    :args (s/alt :separate (s/cat :ns string? :n string?)\n                 :str string?\n                 :sym symbol?)\n    :ret symbol?)",(cljs.core.truth_(cljs.spec.alpha$macros.fdef)?cljs.spec.alpha$macros.fdef.cljs$lang$test:null)]));
})()
;
cljs.spec.alpha$macros.fdef.cljs$lang$macro = true;

var ret__23200__auto___342 = (function (){
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
cljs.spec.alpha$macros.keys_STAR_ = (function cljs$spec$alpha$macros$keys_STAR_(var_args){
var args__23177__auto__ = [];
var len__23174__auto___343 = arguments.length;
var i__23175__auto___344 = (0);
while(true){
if((i__23175__auto___344 < len__23174__auto___343)){
args__23177__auto__.push((arguments[i__23175__auto___344]));

var G__345 = (i__23175__auto___344 + (1));
i__23175__auto___344 = G__345;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((2) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.keys_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23178__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.keys_STAR_;},new cljs.core.Symbol("cljs.spec.alpha$macros","keys*","cljs.spec.alpha$macros/keys*",(-615148410),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"keys*","keys*",(-816260990),null),"cljs/spec/alpha.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kspecs","kspecs",(564840629),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"kspecs","kspecs",(564840629),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(442),true,(442),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"kspecs","kspecs",(564840629),null)], null)),"takes the same arguments as spec/keys and returns a regex op that matches sequences of key/values,\n  converts them into a map, and conforms that map with a corresponding\n  spec/keys call:\n\n  user=> (s/conform (s/keys :req-un [::a ::c]) {:a 1 :c 2})\n  {:a 1, :c 2}\n  user=> (s/conform (s/keys* :req-un [::a ::c]) [:a 1 :c 2])\n  {:a 1, :c 2}\n\n  the resulting regex op can be composed into a larger regex:\n\n  user=> (s/conform (s/cat :i1 integer? :m (s/keys* :req-un [::a ::c]) :i2 integer?) [42 :a 1 :c 2 :d 4 99])\n  {:i1 42, :m {:a 1, :c 2, :d 4}, :i2 99}",(cljs.core.truth_(cljs.spec.alpha$macros.keys_STAR_)?cljs.spec.alpha$macros.keys_STAR_.cljs$lang$test:null)])));})()
;

cljs.spec.alpha$macros.keys_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kspecs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"mspec__22__auto__","mspec__22__auto__",(-2139535357),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",(1109346032),null)),kspecs));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",(1999495028),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","&","cljs.spec.alpha/&",(1635809823),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",(-1238084288),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",(-1602615178))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",(713156450),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",(552625740))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kvs->map","cljs.spec.alpha/kvs->map",(579713455))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"mspec__22__auto__","mspec__22__auto__",(-2139535357),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.gen.alpha","fmap","cljs.spec.gen.alpha/fmap",(1863255061),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__23__auto__","m__23__auto__",(-170693584),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",(1757277831),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",(-1133584918),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__23__auto__","m__23__auto__",(-170693584),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",(147877780),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"mspec__22__auto__","mspec__22__auto__",(-2139535357),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
});

cljs.spec.alpha$macros.keys_STAR_.cljs$lang$maxFixedArity = (2);

cljs.spec.alpha$macros.keys_STAR_.cljs$lang$applyTo = (function (seq339){
var G__340 = cljs.core.first(seq339);
var seq339__$1 = cljs.core.next(seq339);
var G__341 = cljs.core.first(seq339__$1);
var seq339__$2 = cljs.core.next(seq339__$1);
return cljs.spec.alpha$macros.keys_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__340,G__341,seq339__$2);
});

return new cljs.core.Var(function(){return cljs.spec.alpha$macros.keys_STAR_;},new cljs.core.Symbol("cljs.spec.alpha$macros","keys*","cljs.spec.alpha$macros/keys*",(-615148410),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"keys*","keys*",(-816260990),null),"cljs/spec/alpha.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"kspecs","kspecs",(564840629),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"kspecs","kspecs",(564840629),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(442),true,(442),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"kspecs","kspecs",(564840629),null)], null)),"takes the same arguments as spec/keys and returns a regex op that matches sequences of key/values,\n  converts them into a map, and conforms that map with a corresponding\n  spec/keys call:\n\n  user=> (s/conform (s/keys :req-un [::a ::c]) {:a 1 :c 2})\n  {:a 1, :c 2}\n  user=> (s/conform (s/keys* :req-un [::a ::c]) [:a 1 :c 2])\n  {:a 1, :c 2}\n\n  the resulting regex op can be composed into a larger regex:\n\n  user=> (s/conform (s/cat :i1 integer? :m (s/keys* :req-un [::a ::c]) :i2 integer?) [42 :a 1 :c 2 :d 4 99])\n  {:i1 42, :m {:a 1, :c 2, :d 4}, :i2 99}",(cljs.core.truth_(cljs.spec.alpha$macros.keys_STAR_)?cljs.spec.alpha$macros.keys_STAR_.cljs$lang$test:null)]));
})()
;
cljs.spec.alpha$macros.keys_STAR_.cljs$lang$macro = true;

var ret__23200__auto___346 = /**
 * returns a spec that accepts nil and values satisfiying pred
 */
(function (){
cljs.spec.alpha$macros.nilable = (function cljs$spec$alpha$macros$nilable(_AMPERSAND_form,_AMPERSAND_env,pred){
var pf = cljs.spec.alpha$macros.res(_AMPERSAND_env,pred);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","nilable-impl","cljs.spec.alpha/nilable-impl",(1785777257),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = pf;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)));
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.nilable;},new cljs.core.Symbol("cljs.spec.alpha$macros","nilable","cljs.spec.alpha$macros/nilable",(-610590103),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"nilable","nilable",(-812128667),null),"cljs/spec/alpha.cljc",(18),(1),(461),true,(461),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null)], null)),"returns a spec that accepts nil and values satisfiying pred",(cljs.core.truth_(cljs.spec.alpha$macros.nilable)?cljs.spec.alpha$macros.nilable.cljs$lang$test:null)])));})()
;
cljs.spec.alpha$macros.nilable.cljs$lang$macro = true;

var ret__23200__auto___347 = /**
 * Returns a spec that validates insts in the range from start
 *   (inclusive) to end (exclusive).
 */
(function (){
cljs.spec.alpha$macros.inst_in = (function cljs$spec$alpha$macros$inst_in(_AMPERSAND_form,_AMPERSAND_env,start,end){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__25__auto__","st__25__auto__",(-486139545),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inst-ms","cljs.core/inst-ms",(-515575156),null)),(function (){var x__22880__auto__ = start;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"et__26__auto__","et__26__auto__",(-908885946),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inst-ms","cljs.core/inst-ms",(-515575156),null)),(function (){var x__22880__auto__ = end;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"mkdate__27__auto__","mkdate__27__auto__",(-1556970989),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"d__28__auto__","d__28__auto__",(-2094020224),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",(384205255),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"d__28__auto__","d__28__auto__",(-2094020224),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",(-707298191),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",(-2060279705),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inst?","cljs.core/inst?",(1216133710),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__24__29__auto__","p1__24__29__auto__",(903023912),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","inst-in-range?","cljs.spec.alpha/inst-in-range?",(-1154968958),null)),(function (){var x__22880__auto__ = start;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = end;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__24__29__auto__","p1__24__29__auto__",(903023912),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"gen","gen",(142575302))),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.gen.alpha","fmap","cljs.spec.gen.alpha/fmap",(1863255061),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"mkdate__27__auto__","mkdate__27__auto__",(-1556970989),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.gen.alpha","large-integer*","cljs.spec.gen.alpha/large-integer*",(-227289663),null)),(function (){var x__22880__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"min","min",(444991522))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__25__auto__","st__25__auto__",(-486139545),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"max","max",(61366548))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"et__26__auto__","et__26__auto__",(-908885946),null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.inst_in;},new cljs.core.Symbol("cljs.spec.alpha$macros","inst-in","cljs.spec.alpha$macros/inst-in",(1768755633),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"inst-in","inst-in",(1164979645),null),"cljs/spec/alpha.cljc",(18),(1),(467),true,(467),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null)], null)),"Returns a spec that validates insts in the range from start\n  (inclusive) to end (exclusive).",(cljs.core.truth_(cljs.spec.alpha$macros.inst_in)?cljs.spec.alpha$macros.inst_in.cljs$lang$test:null)])));})()
;
cljs.spec.alpha$macros.inst_in.cljs$lang$macro = true;

var ret__23200__auto___348 = /**
 * Returns a spec that validates fixed precision integers in the
 *   range from start (inclusive) to end (exclusive).
 */
(function (){
cljs.spec.alpha$macros.int_in = (function cljs$spec$alpha$macros$int_in(_AMPERSAND_form,_AMPERSAND_env,start,end){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",(-707298191),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",(-2060279705),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",(50730120),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__30__31__auto__","p1__30__31__auto__",(1739329709),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","int-in-range?","cljs.spec.alpha/int-in-range?",(92650900),null)),(function (){var x__22880__auto__ = start;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = end;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__30__31__auto__","p1__30__31__auto__",(1739329709),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"gen","gen",(142575302))),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.gen.alpha","large-integer*","cljs.spec.gen.alpha/large-integer*",(-227289663),null)),(function (){var x__22880__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"min","min",(444991522))),(function (){var x__22880__auto__ = start;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"max","max",(61366548))),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dec","cljs.core/dec",(-443230268),null)),(function (){var x__22880__auto__ = end;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.int_in;},new cljs.core.Symbol("cljs.spec.alpha$macros","int-in","cljs.spec.alpha$macros/int-in",(-877755991),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"int-in","int-in",(664882605),null),"cljs/spec/alpha.cljc",(17),(1),(479),true,(479),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null)], null)),"Returns a spec that validates fixed precision integers in the\n  range from start (inclusive) to end (exclusive).",(cljs.core.truth_(cljs.spec.alpha$macros.int_in)?cljs.spec.alpha$macros.int_in.cljs$lang$test:null)])));})()
;
cljs.spec.alpha$macros.int_in.cljs$lang$macro = true;

var ret__23200__auto___355 = (function (){
/**
 * Specs a 64-bit floating point number. Options:
 * 
 *  :infinite? - whether +/- infinity allowed (default true)
 *  :NaN?      - whether NaN allowed (default true)
 *  :min       - minimum value (inclusive, default none)
 *  :max       - maximum value (inclusive, default none)
 */
(function (){
cljs.spec.alpha$macros.double_in = (function cljs$spec$alpha$macros$double_in(var_args){
var args__23177__auto__ = [];
var len__23174__auto___356 = arguments.length;
var i__23175__auto___357 = (0);
while(true){
if((i__23175__auto___357 < len__23174__auto___356)){
args__23177__auto__.push((arguments[i__23175__auto___357]));

var G__358 = (i__23175__auto___357 + (1));
i__23175__auto___357 = G__358;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((2) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.double_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23178__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.double_in;},new cljs.core.Symbol("cljs.spec.alpha$macros","double-in","cljs.spec.alpha$macros/double-in",(-103389999),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"double-in","double-in",(-303226659),null),"cljs/spec/alpha.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),new cljs.core.Symbol(null,"NaN?","NaN?",(-277236124),null),new cljs.core.Symbol(null,"min","min",(2085523049),null),new cljs.core.Symbol(null,"max","max",(1701898075),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),true,new cljs.core.Symbol(null,"NaN?","NaN?",(-277236124),null),true], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),new cljs.core.Symbol(null,"NaN?","NaN?",(-277236124),null),new cljs.core.Symbol(null,"min","min",(2085523049),null),new cljs.core.Symbol(null,"max","max",(1701898075),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),true,new cljs.core.Symbol(null,"NaN?","NaN?",(-277236124),null),true], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(486),true,(486),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),new cljs.core.Symbol(null,"NaN?","NaN?",(-277236124),null),new cljs.core.Symbol(null,"min","min",(2085523049),null),new cljs.core.Symbol(null,"max","max",(1701898075),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),true,new cljs.core.Symbol(null,"NaN?","NaN?",(-277236124),null),true], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)], null)),"Specs a 64-bit floating point number. Options:\n\n    :infinite? - whether +/- infinity allowed (default true)\n    :NaN?      - whether NaN allowed (default true)\n    :min       - minimum value (inclusive, default none)\n    :max       - maximum value (inclusive, default none)",(cljs.core.truth_(cljs.spec.alpha$macros.double_in)?cljs.spec.alpha$macros.double_in.cljs$lang$test:null)])));})()
;

cljs.spec.alpha$macros.double_in.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__352){
var map__353 = p__352;
var map__353__$1 = ((((!((map__353 == null)))?((((map__353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__353):map__353);
var m = map__353__$1;
var infinite_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__353__$1,new cljs.core.Keyword(null,"infinite?","infinite?",(-2017886608)),true);
var NaN_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__353__$1,new cljs.core.Keyword(null,"NaN?","NaN?",(-1917767651)),true);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__353__$1,new cljs.core.Keyword(null,"min","min",(444991522)));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__353__$1,new cljs.core.Keyword(null,"max","max",(61366548)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",(-707298191),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",(-2060279705),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","double?","cljs.core/double?",(1757455529),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(infinite_QMARK_)?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__32#","p1__32#",(1287524234),null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",(1044554643),null),cljs.core.list(new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),new cljs.core.Symbol(null,"p1__32#","p1__32#",(1287524234),null))))], null)),(cljs.core.truth_(NaN_QMARK_)?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__33#","p1__33#",(-928943720),null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",(1044554643),null),cljs.core.list(new cljs.core.Symbol("js","isNaN","js/isNaN",(74901299),null),new cljs.core.Symbol(null,"p1__33#","p1__33#",(-928943720),null))))], null)),(cljs.core.truth_(max)?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__34__35__auto__","p1__34__35__auto__",(1805264203),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",(1677001748),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__34__35__auto__","p1__34__35__auto__",(1805264203),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = max;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()))):null),(cljs.core.truth_(min)?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__36__37__auto__","p1__36__37__auto__",(1292766227),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",(1677001748),null)),(function (){var x__22880__auto__ = min;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__36__37__auto__","p1__36__37__auto__",(1292766227),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()))):null)], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"gen","gen",(142575302))),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.gen.alpha","double*","cljs.spec.gen.alpha/double*",(416548942),null)),(function (){var x__22880__auto__ = m;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
});

cljs.spec.alpha$macros.double_in.cljs$lang$maxFixedArity = (2);

cljs.spec.alpha$macros.double_in.cljs$lang$applyTo = (function (seq349){
var G__350 = cljs.core.first(seq349);
var seq349__$1 = cljs.core.next(seq349);
var G__351 = cljs.core.first(seq349__$1);
var seq349__$2 = cljs.core.next(seq349__$1);
return cljs.spec.alpha$macros.double_in.cljs$core$IFn$_invoke$arity$variadic(G__350,G__351,seq349__$2);
});

return new cljs.core.Var(function(){return cljs.spec.alpha$macros.double_in;},new cljs.core.Symbol("cljs.spec.alpha$macros","double-in","cljs.spec.alpha$macros/double-in",(-103389999),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"double-in","double-in",(-303226659),null),"cljs/spec/alpha.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),new cljs.core.Symbol(null,"NaN?","NaN?",(-277236124),null),new cljs.core.Symbol(null,"min","min",(2085523049),null),new cljs.core.Symbol(null,"max","max",(1701898075),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),true,new cljs.core.Symbol(null,"NaN?","NaN?",(-277236124),null),true], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),new cljs.core.Symbol(null,"NaN?","NaN?",(-277236124),null),new cljs.core.Symbol(null,"min","min",(2085523049),null),new cljs.core.Symbol(null,"max","max",(1701898075),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),true,new cljs.core.Symbol(null,"NaN?","NaN?",(-277236124),null),true], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(486),true,(486),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),new cljs.core.Symbol(null,"NaN?","NaN?",(-277236124),null),new cljs.core.Symbol(null,"min","min",(2085523049),null),new cljs.core.Symbol(null,"max","max",(1701898075),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),true,new cljs.core.Symbol(null,"NaN?","NaN?",(-277236124),null),true], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)], null)),"Specs a 64-bit floating point number. Options:\n\n    :infinite? - whether +/- infinity allowed (default true)\n    :NaN?      - whether NaN allowed (default true)\n    :min       - minimum value (inclusive, default none)\n    :max       - maximum value (inclusive, default none)",(cljs.core.truth_(cljs.spec.alpha$macros.double_in)?cljs.spec.alpha$macros.double_in.cljs$lang$test:null)]));
})()
;
cljs.spec.alpha$macros.double_in.cljs$lang$macro = true;

var ret__23200__auto___362 = (function (){
/**
 * Takes map-validating specs (e.g. 'keys' specs) and
 *   returns a spec that returns a conformed map satisfying all of the
 *   specs.  Successive conformed values propagate through rest of
 *   predicates. Unlike 'and', merge can generate maps satisfying the
 *   union of the predicates.
 */
(function (){
cljs.spec.alpha$macros.merge = (function cljs$spec$alpha$macros$merge(var_args){
var args__23177__auto__ = [];
var len__23174__auto___363 = arguments.length;
var i__23175__auto___364 = (0);
while(true){
if((i__23175__auto___364 < len__23174__auto___363)){
args__23177__auto__.push((arguments[i__23175__auto___364]));

var G__365 = (i__23175__auto___364 + (1));
i__23175__auto___364 = G__365;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((2) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23178__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.merge;},new cljs.core.Symbol("cljs.spec.alpha$macros","merge","cljs.spec.alpha$macros/merge",(-633892974),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"merge","merge",(-163787882),null),"cljs/spec/alpha.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred-forms","pred-forms",(1813143359),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"pred-forms","pred-forms",(1813143359),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(503),true,(503),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"pred-forms","pred-forms",(1813143359),null)], null)),"Takes map-validating specs (e.g. 'keys' specs) and\n  returns a spec that returns a conformed map satisfying all of the\n  specs.  Successive conformed values propagate through rest of\n  predicates. Unlike 'and', merge can generate maps satisfying the\n  union of the predicates.",(cljs.core.truth_(cljs.spec.alpha$macros.merge)?cljs.spec.alpha$macros.merge.cljs$lang$test:null)])));})()
;

cljs.spec.alpha$macros.merge.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred_forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","merge-spec-impl","cljs.spec.alpha/merge-spec-impl",(-1254890813),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__38_SHARP_);
}),pred_forms);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.vec(pred_forms);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)));
});

cljs.spec.alpha$macros.merge.cljs$lang$maxFixedArity = (2);

cljs.spec.alpha$macros.merge.cljs$lang$applyTo = (function (seq359){
var G__360 = cljs.core.first(seq359);
var seq359__$1 = cljs.core.next(seq359);
var G__361 = cljs.core.first(seq359__$1);
var seq359__$2 = cljs.core.next(seq359__$1);
return cljs.spec.alpha$macros.merge.cljs$core$IFn$_invoke$arity$variadic(G__360,G__361,seq359__$2);
});

return new cljs.core.Var(function(){return cljs.spec.alpha$macros.merge;},new cljs.core.Symbol("cljs.spec.alpha$macros","merge","cljs.spec.alpha$macros/merge",(-633892974),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"merge","merge",(-163787882),null),"cljs/spec/alpha.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"pred-forms","pred-forms",(1813143359),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"pred-forms","pred-forms",(1813143359),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(503),true,(503),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"pred-forms","pred-forms",(1813143359),null)], null)),"Takes map-validating specs (e.g. 'keys' specs) and\n  returns a spec that returns a conformed map satisfying all of the\n  specs.  Successive conformed values propagate through rest of\n  predicates. Unlike 'and', merge can generate maps satisfying the\n  union of the predicates.",(cljs.core.truth_(cljs.spec.alpha$macros.merge)?cljs.spec.alpha$macros.merge.cljs$lang$test:null)]));
})()
;
cljs.spec.alpha$macros.merge.cljs$lang$macro = true;

var ret__23200__auto___369 = (function (){
/**
 * exercises the fn named by sym (a symbol) by applying it to
 *   n (default 10) generated samples of its args spec. When fspec is
 *   supplied its arg spec is used, and sym-or-f can be a fn.  Returns a
 *   sequence of tuples of [args ret]. 
 */
(function (){
cljs.spec.alpha$macros.exercise_fn = (function cljs$spec$alpha$macros$exercise_fn(var_args){
var G__367 = arguments.length;
switch (G__367) {
case (3):
return cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (5):
return cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.exercise_fn;},new cljs.core.Symbol("cljs.spec.alpha$macros","exercise-fn","cljs.spec.alpha$macros/exercise-fn",(-1623834546),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"exercise-fn","exercise-fn",(1933214770),null),"cljs/spec/alpha.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(5),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"fspec","fspec",(1380883392),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"fspec","fspec",(1380883392),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(512),true,(512),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"fspec","fspec",(1380883392),null)], null)),"exercises the fn named by sym (a symbol) by applying it to\n  n (default 10) generated samples of its args spec. When fspec is\n  supplied its arg spec is used, and sym-or-f can be a fn.  Returns a\n  sequence of tuples of [args ret]. ",(cljs.core.truth_(cljs.spec.alpha$macros.exercise_fn)?cljs.spec.alpha$macros.exercise_fn.cljs$lang$test:null)])));})()
;

cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","exercise-fn","cljs.spec.alpha/exercise-fn",(295872941),null)),(function (){var x__22880__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(10))], 0)));
});

cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,sym,n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","exercise-fn","cljs.spec.alpha/exercise-fn",(295872941),null)),(function (){var x__22880__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)));
});

cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,sym,n,fspec){
var sym__$1 = (function (){var G__368 = sym;
if((cljs.core.sequential_QMARK_(sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(sym),new cljs.core.Symbol(null,"quote","quote",(1377916282),null)))){
return cljs.core.second(G__368);
} else {
return G__368;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fspec__39__auto__","fspec__39__auto__",(312746588),null)),(function (){var x__22880__auto__ = ((cljs.core.not(fspec))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","get-spec","cljs.spec.alpha/get-spec",(785931985),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.api.resolve(_AMPERSAND_env,sym__$1));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})())):fspec);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__40__auto__","f__40__auto__",(-1118192579),null)),(function (){var x__22880__auto__ = sym__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",(1346583165),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arg-spec__41__auto__","arg-spec__41__auto__",(-1064785496),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fspec__39__auto__","fspec__39__auto__",(312746588),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"args","args",(1315556576))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fspec__39__auto__","fspec__39__auto__",(312746588),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","for","cljs.core/for",(-89947499),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__42__auto__","args__42__auto__",(-617614850),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.gen.alpha","sample","cljs.spec.gen.alpha/sample",(-2084840585),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",(147877780),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arg-spec__41__auto__","arg-spec__41__auto__",(-1064785496),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__42__auto__","args__42__auto__",(-617614850),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",(1757277831),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__40__auto__","f__40__auto__",(-1118192579),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__42__auto__","args__42__auto__",(-617614850),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",(595905694),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",(750655924),null)),cljs.core._conj(cljs.core.List.EMPTY,"No :args spec found, can't generate")));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
});

cljs.spec.alpha$macros.exercise_fn.cljs$lang$maxFixedArity = (5);

return new cljs.core.Var(function(){return cljs.spec.alpha$macros.exercise_fn;},new cljs.core.Symbol("cljs.spec.alpha$macros","exercise-fn","cljs.spec.alpha$macros/exercise-fn",(-1623834546),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"exercise-fn","exercise-fn",(1933214770),null),"cljs/spec/alpha.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(5),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"fspec","fspec",(1380883392),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"fspec","fspec",(1380883392),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(512),true,(512),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"fspec","fspec",(1380883392),null)], null)),"exercises the fn named by sym (a symbol) by applying it to\n  n (default 10) generated samples of its args spec. When fspec is\n  supplied its arg spec is used, and sym-or-f can be a fn.  Returns a\n  sequence of tuples of [args ret]. ",(cljs.core.truth_(cljs.spec.alpha$macros.exercise_fn)?cljs.spec.alpha$macros.exercise_fn.cljs$lang$test:null)]));
})()
;
cljs.spec.alpha$macros.exercise_fn.cljs$lang$macro = true;

var ret__23200__auto___371 = (function (){
cljs.spec.alpha$macros.init_compile_asserts = (function cljs$spec$alpha$macros$init_compile_asserts(_AMPERSAND_form,_AMPERSAND_env){
var compile_asserts = cljs.core.not(new cljs.core.Keyword(null,"elide-asserts","elide-asserts",(537063272)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",(99638489)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))));
return compile_asserts;
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.init_compile_asserts;},new cljs.core.Symbol("cljs.spec.alpha$macros","init-compile-asserts","cljs.spec.alpha$macros/init-compile-asserts",(-882450371),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"init-compile-asserts","init-compile-asserts",(-682378183),null),"cljs/spec/alpha.cljc",(41),(1),(535),true,(535),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs.spec.alpha$macros.init_compile_asserts)?cljs.spec.alpha$macros.init_compile_asserts.cljs$lang$test:null)])));})()
;
cljs.spec.alpha$macros.init_compile_asserts.cljs$lang$macro = true;

var ret__23200__auto___372 = /**
 * spec-checking assert expression. Returns x if x is valid? according
 * to spec, else throws an error with explain-data plus ::failure of
 * :assertion-failed.
 * Can be disabled at either compile time or runtime:
 * If *compile-asserts* is false at compile time, compiles to x. Defaults
 * to the negation value of the ':elide-asserts' compiler option, or true if
 * not set.
 * If (check-asserts?) is false at runtime, always returns x. Defaults to
 * value of 'cljs.spec.alpha/*runtime-asserts*', or false if not set. You can
 * toggle check-asserts? with (check-asserts bool).
 */
(function (){
cljs.spec.alpha$macros.assert = (function cljs$spec$alpha$macros$assert(_AMPERSAND_form,_AMPERSAND_env,spec,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","*compile-asserts*","cljs.spec.alpha/*compile-asserts*",(-1808061440),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",(-1060443587),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","assert*","cljs.spec.alpha/assert*",(464381070),null)),(function (){var x__22880__auto__ = spec;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
}); return (
new cljs.core.Var(function(){return cljs.spec.alpha$macros.assert;},new cljs.core.Symbol("cljs.spec.alpha$macros","assert","cljs.spec.alpha$macros/assert",(878016777),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",(-896343615),null),new cljs.core.Symbol(null,"assert","assert",(677428501),null),"cljs/spec/alpha.cljc",(17),(1),(539),true,(539),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"spec-checking assert expression. Returns x if x is valid? according\nto spec, else throws an error with explain-data plus ::failure of\n:assertion-failed.\nCan be disabled at either compile time or runtime:\nIf *compile-asserts* is false at compile time, compiles to x. Defaults\nto the negation value of the ':elide-asserts' compiler option, or true if\nnot set.\nIf (check-asserts?) is false at runtime, always returns x. Defaults to\nvalue of 'cljs.spec.alpha/*runtime-asserts*', or false if not set. You can\ntoggle check-asserts? with (check-asserts bool).",(cljs.core.truth_(cljs.spec.alpha$macros.assert)?cljs.spec.alpha$macros.assert.cljs$lang$test:null)])));})()
;
cljs.spec.alpha$macros.assert.cljs$lang$macro = true;

