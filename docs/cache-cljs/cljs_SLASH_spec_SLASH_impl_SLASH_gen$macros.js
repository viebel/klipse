goog.provide("cljs.spec.impl.gen$macros");
(function (){
cljs.spec.impl.gen$macros.dynaload = (function cljs$spec$impl$gen$macros$dynaload(_AMPERSAND_form,_AMPERSAND_env,p__30){
var vec__34 = p__30;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34,(1),null);
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(s),/\./);
var cnt = cljs.core.count(xs);
var checks = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (xs,cnt,vec__34,quote,s){
return (function (n,xs__$1){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","exists?","cljs.core/exists?",(1852387968),null)),(function (){var x__25689__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,xs__$1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
});})(xs,cnt,vec__34,quote,s))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((2),cnt),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(xs));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.impl.gen","LazyVar.","cljs.spec.impl.gen/LazyVar.",(2097500660),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),checks,cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","exists?","cljs.core/exists?",(1852387968),null)),(function (){var x__25689__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(s,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",(-1872351017)),true);
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",(595905694),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",(750655924),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),cljs.core._conj(cljs.core.List.EMPTY,"Var "),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY," does not exist, "),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","namespace","cljs.core/namespace",(1653264270),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY," never required")], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null)], 0)));
}); return (
new cljs.core.Var(function(){return cljs.spec.impl.gen$macros.dynaload;},new cljs.core.Symbol("cljs.spec.impl.gen$macros","dynaload","cljs.spec.impl.gen$macros/dynaload",(1324081149),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.impl.gen$macros","cljs.spec.impl.gen$macros",(1769246924),null),new cljs.core.Symbol(null,"dynaload","dynaload",(1762342571),null),"cljs/spec/impl/gen.cljc",(19),(1),(14),true,(14),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)], null)),null,(cljs.core.truth_(cljs.spec.impl.gen$macros.dynaload)?cljs.spec.impl.gen$macros.dynaload.cljs$lang$test:null)])));})()
;

cljs.spec.impl.gen$macros.dynaload.cljs$lang$macro = true;
/**
 * given body that returns a generator, returns a
 *   generator that delegates to that, but delays
 *   creation until used.
 */
(function (){
cljs.spec.impl.gen$macros.delay = (function cljs$spec$impl$gen$macros$delay(var_args){
var args__25948__auto__ = [];
var len__25946__auto___40 = arguments.length;
var i__25947__auto___41 = (0);
while(true){
if((i__25947__auto___41 < len__25946__auto___40)){
args__25948__auto__.push((arguments[i__25947__auto___41]));

var G__42 = (i__25947__auto___41 + (1));
i__25947__auto___41 = G__42;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((2) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((2)),(0),null)):null);
return cljs.spec.impl.gen$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec.impl.gen$macros.delay;},new cljs.core.Symbol("cljs.spec.impl.gen$macros","delay","cljs.spec.impl.gen$macros/delay",(330162258),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.impl.gen$macros","cljs.spec.impl.gen$macros",(1769246924),null),new cljs.core.Symbol(null,"delay","delay",(1066306308),null),"cljs/spec/impl/gen.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(32),true,(32),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"given body that returns a generator, returns a\n  generator that delegates to that, but delays\n  creation until used.",(cljs.core.truth_(cljs.spec.impl.gen$macros.delay)?cljs.spec.impl.gen$macros.delay.cljs$lang$test:null)])));})()
;

cljs.spec.impl.gen$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.impl.gen","delay-impl","cljs.spec.impl.gen/delay-impl",(1328847128),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","delay","cljs.core/delay",(-406049125),null)),body));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
});

cljs.spec.impl.gen$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.spec.impl.gen$macros.delay.cljs$lang$applyTo = (function (seq37){
var G__38 = cljs.core.first(seq37);
var seq37__$1 = cljs.core.next(seq37);
var G__39 = cljs.core.first(seq37__$1);
var seq37__$2 = cljs.core.next(seq37__$1);
return cljs.spec.impl.gen$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__38,G__39,seq37__$2);
});

new cljs.core.Var(function(){return cljs.spec.impl.gen$macros.delay;},new cljs.core.Symbol("cljs.spec.impl.gen$macros","delay","cljs.spec.impl.gen$macros/delay",(330162258),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.impl.gen$macros","cljs.spec.impl.gen$macros",(1769246924),null),new cljs.core.Symbol(null,"delay","delay",(1066306308),null),"cljs/spec/impl/gen.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(32),true,(32),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"given body that returns a generator, returns a\n  generator that delegates to that, but delays\n  creation until used.",(cljs.core.truth_(cljs.spec.impl.gen$macros.delay)?cljs.spec.impl.gen$macros.delay.cljs$lang$test:null)]));

cljs.spec.impl.gen$macros.delay.cljs$lang$macro = true;
/**
 * Implementation macro, do not call directly.
 */
(function (){
cljs.spec.impl.gen$macros.lazy_combinator = (function cljs$spec$impl$gen$macros$lazy_combinator(_AMPERSAND_form,_AMPERSAND_env,s){
var fqn = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("clojure.test.check.generators",cljs.core.name(s));
var doc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Lazy loaded version of "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fqn)].join('');
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"g__2__auto__","g__2__auto__",(2093461362),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.impl.gen","dynaload","cljs.spec.impl.gen/dynaload",(-1019543436),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = fqn;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",(-1606493717),null)),(function (){var x__25689__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = doc;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&","&",(-2144855648),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",(-1338879193),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",(1757277831),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"g__2__auto__","g__2__auto__",(2093461362),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",(-1338879193),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
}); return (
new cljs.core.Var(function(){return cljs.spec.impl.gen$macros.lazy_combinator;},new cljs.core.Symbol("cljs.spec.impl.gen$macros","lazy-combinator","cljs.spec.impl.gen$macros/lazy-combinator",(90707437),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"skip-wiki","skip-wiki",(-2018833298)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.impl.gen$macros","cljs.spec.impl.gen$macros",(1769246924),null),new cljs.core.Symbol(null,"lazy-combinator","lazy-combinator",(-519533249),null),"cljs/spec/impl/gen.cljc",(38),true,(1),(39),true,(39),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),"Implementation macro, do not call directly.",(cljs.core.truth_(cljs.spec.impl.gen$macros.lazy_combinator)?cljs.spec.impl.gen$macros.lazy_combinator.cljs$lang$test:null)])));})()
;

cljs.spec.impl.gen$macros.lazy_combinator.cljs$lang$macro = true;
/**
 * Implementation macro, do not call directly.
 */
(function (){
cljs.spec.impl.gen$macros.lazy_combinators = (function cljs$spec$impl$gen$macros$lazy_combinators(var_args){
var args__25948__auto__ = [];
var len__25946__auto___46 = arguments.length;
var i__25947__auto___47 = (0);
while(true){
if((i__25947__auto___47 < len__25946__auto___46)){
args__25948__auto__.push((arguments[i__25947__auto___47]));

var G__48 = (i__25947__auto___47 + (1));
i__25947__auto___47 = G__48;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((2) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((2)),(0),null)):null);
return cljs.spec.impl.gen$macros.lazy_combinators.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec.impl.gen$macros.lazy_combinators;},new cljs.core.Symbol("cljs.spec.impl.gen$macros","lazy-combinators","cljs.spec.impl.gen$macros/lazy-combinators",(-1378464383),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"skip-wiki","skip-wiki",(-2018833298)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.impl.gen$macros","cljs.spec.impl.gen$macros",(1769246924),null),new cljs.core.Symbol(null,"lazy-combinators","lazy-combinators",(-906562317),null),"cljs/spec/impl/gen.cljc",(39),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),true,(1),(50),true,(50),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null)], null)),"Implementation macro, do not call directly.",(cljs.core.truth_(cljs.spec.impl.gen$macros.lazy_combinators)?cljs.spec.impl.gen$macros.lazy_combinators.cljs$lang$test:null)])));})()
;

cljs.spec.impl.gen$macros.lazy_combinators.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,syms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
return cljs.core._conj((function (){var x__25689__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),new cljs.core.Symbol("cljs.spec.impl.gen","lazy-combinator","cljs.spec.impl.gen/lazy-combinator",(-1623668972),null));
}),syms)));
});

cljs.spec.impl.gen$macros.lazy_combinators.cljs$lang$maxFixedArity = (2);

cljs.spec.impl.gen$macros.lazy_combinators.cljs$lang$applyTo = (function (seq43){
var G__44 = cljs.core.first(seq43);
var seq43__$1 = cljs.core.next(seq43);
var G__45 = cljs.core.first(seq43__$1);
var seq43__$2 = cljs.core.next(seq43__$1);
return cljs.spec.impl.gen$macros.lazy_combinators.cljs$core$IFn$_invoke$arity$variadic(G__44,G__45,seq43__$2);
});

new cljs.core.Var(function(){return cljs.spec.impl.gen$macros.lazy_combinators;},new cljs.core.Symbol("cljs.spec.impl.gen$macros","lazy-combinators","cljs.spec.impl.gen$macros/lazy-combinators",(-1378464383),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"skip-wiki","skip-wiki",(-2018833298)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.impl.gen$macros","cljs.spec.impl.gen$macros",(1769246924),null),new cljs.core.Symbol(null,"lazy-combinators","lazy-combinators",(-906562317),null),"cljs/spec/impl/gen.cljc",(39),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),true,(1),(50),true,(50),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null)], null)),"Implementation macro, do not call directly.",(cljs.core.truth_(cljs.spec.impl.gen$macros.lazy_combinators)?cljs.spec.impl.gen$macros.lazy_combinators.cljs$lang$test:null)]));

cljs.spec.impl.gen$macros.lazy_combinators.cljs$lang$macro = true;
/**
 * Implementation macro, do not call directly.
 */
(function (){
cljs.spec.impl.gen$macros.lazy_prim = (function cljs$spec$impl$gen$macros$lazy_prim(_AMPERSAND_form,_AMPERSAND_env,s){
var fqn = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("clojure.test.check.generators",cljs.core.name(s));
var doc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Fn returning "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fqn)].join('');
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"g__3__auto__","g__3__auto__",(-47172120),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.impl.gen","dynaload","cljs.spec.impl.gen/dynaload",(-1019543436),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = fqn;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",(-1606493717),null)),(function (){var x__25689__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = doc;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&","&",(-2144855648),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",(-1338879193),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"g__3__auto__","g__3__auto__",(-47172120),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
}); return (
new cljs.core.Var(function(){return cljs.spec.impl.gen$macros.lazy_prim;},new cljs.core.Symbol("cljs.spec.impl.gen$macros","lazy-prim","cljs.spec.impl.gen$macros/lazy-prim",(-584672462),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"skip-wiki","skip-wiki",(-2018833298)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.impl.gen$macros","cljs.spec.impl.gen$macros",(1769246924),null),new cljs.core.Symbol(null,"lazy-prim","lazy-prim",(-116980768),null),"cljs/spec/impl/gen.cljc",(32),true,(1),(58),true,(58),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),"Implementation macro, do not call directly.",(cljs.core.truth_(cljs.spec.impl.gen$macros.lazy_prim)?cljs.spec.impl.gen$macros.lazy_prim.cljs$lang$test:null)])));})()
;

cljs.spec.impl.gen$macros.lazy_prim.cljs$lang$macro = true;
/**
 * Implementation macro, do not call directly.
 */
(function (){
cljs.spec.impl.gen$macros.lazy_prims = (function cljs$spec$impl$gen$macros$lazy_prims(var_args){
var args__25948__auto__ = [];
var len__25946__auto___52 = arguments.length;
var i__25947__auto___53 = (0);
while(true){
if((i__25947__auto___53 < len__25946__auto___52)){
args__25948__auto__.push((arguments[i__25947__auto___53]));

var G__54 = (i__25947__auto___53 + (1));
i__25947__auto___53 = G__54;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((2) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((2)),(0),null)):null);
return cljs.spec.impl.gen$macros.lazy_prims.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec.impl.gen$macros.lazy_prims;},new cljs.core.Symbol("cljs.spec.impl.gen$macros","lazy-prims","cljs.spec.impl.gen$macros/lazy-prims",(-1296042618),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"skip-wiki","skip-wiki",(-2018833298)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.impl.gen$macros","cljs.spec.impl.gen$macros",(1769246924),null),new cljs.core.Symbol(null,"lazy-prims","lazy-prims",(-681697752),null),"cljs/spec/impl/gen.cljc",(33),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),true,(1),(69),true,(69),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null)], null)),"Implementation macro, do not call directly.",(cljs.core.truth_(cljs.spec.impl.gen$macros.lazy_prims)?cljs.spec.impl.gen$macros.lazy_prims.cljs$lang$test:null)])));})()
;

cljs.spec.impl.gen$macros.lazy_prims.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,syms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
return cljs.core._conj((function (){var x__25689__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),new cljs.core.Symbol("cljs.spec.impl.gen","lazy-prim","cljs.spec.impl.gen/lazy-prim",(1461179835),null));
}),syms)));
});

cljs.spec.impl.gen$macros.lazy_prims.cljs$lang$maxFixedArity = (2);

cljs.spec.impl.gen$macros.lazy_prims.cljs$lang$applyTo = (function (seq49){
var G__50 = cljs.core.first(seq49);
var seq49__$1 = cljs.core.next(seq49);
var G__51 = cljs.core.first(seq49__$1);
var seq49__$2 = cljs.core.next(seq49__$1);
return cljs.spec.impl.gen$macros.lazy_prims.cljs$core$IFn$_invoke$arity$variadic(G__50,G__51,seq49__$2);
});

new cljs.core.Var(function(){return cljs.spec.impl.gen$macros.lazy_prims;},new cljs.core.Symbol("cljs.spec.impl.gen$macros","lazy-prims","cljs.spec.impl.gen$macros/lazy-prims",(-1296042618),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"skip-wiki","skip-wiki",(-2018833298)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.impl.gen$macros","cljs.spec.impl.gen$macros",(1769246924),null),new cljs.core.Symbol(null,"lazy-prims","lazy-prims",(-681697752),null),"cljs/spec/impl/gen.cljc",(33),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),true,(1),(69),true,(69),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null)], null)),"Implementation macro, do not call directly.",(cljs.core.truth_(cljs.spec.impl.gen$macros.lazy_prims)?cljs.spec.impl.gen$macros.lazy_prims.cljs$lang$test:null)]));

cljs.spec.impl.gen$macros.lazy_prims.cljs$lang$macro = true;
