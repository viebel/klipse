goog.provide("cljs.spec.gen.alpha$macros");
var ret__23200__auto___177 = (function (){
cljs.spec.gen.alpha$macros.dynaload = (function cljs$spec$gen$alpha$macros$dynaload(_AMPERSAND_form,_AMPERSAND_env,p__173){
var vec__174 = p__173;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__174,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__174,(1),null);
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(s),/\./);
var cnt = cljs.core.count(xs);
var checks = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (xs,cnt,vec__174,quote,s){
return (function (n,xs__$1){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","exists?","cljs.core/exists?",(1852387968),null)),(function (){var x__22880__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,xs__$1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
});})(xs,cnt,vec__174,quote,s))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((2),cnt),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(xs));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.gen.alpha","LazyVar.","cljs.spec.gen.alpha/LazyVar.",(-1422353692),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),checks,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","exists?","cljs.core/exists?",(1852387968),null)),(function (){var x__22880__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(s,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",(-1872351017)),true);
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",(595905694),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",(750655924),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),cljs.core._conj(cljs.core.List.EMPTY,"Var "),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY," does not exist, "),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","namespace","cljs.core/namespace",(1653264270),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY," never required")], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null)], 0)));
}); return (
new cljs.core.Var(function(){return cljs.spec.gen.alpha$macros.dynaload;},new cljs.core.Symbol("cljs.spec.gen.alpha$macros","dynaload","cljs.spec.gen.alpha$macros/dynaload",(-1763489587),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.gen.alpha$macros","cljs.spec.gen.alpha$macros",(-1225446160),null),new cljs.core.Symbol(null,"dynaload","dynaload",(1762342571),null),"cljs/spec/gen/alpha.cljc",(19),(1),(14),true,(14),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)], null)),null,(cljs.core.truth_(cljs.spec.gen.alpha$macros.dynaload)?cljs.spec.gen.alpha$macros.dynaload.cljs$lang$test:null)])));})()
;
cljs.spec.gen.alpha$macros.dynaload.cljs$lang$macro = true;

var ret__23200__auto___181 = (function (){
/**
 * given body that returns a generator, returns a
 *   generator that delegates to that, but delays
 *   creation until used.
 */
(function (){
cljs.spec.gen.alpha$macros.delay = (function cljs$spec$gen$alpha$macros$delay(var_args){
var args__23177__auto__ = [];
var len__23174__auto___182 = arguments.length;
var i__23175__auto___183 = (0);
while(true){
if((i__23175__auto___183 < len__23174__auto___182)){
args__23177__auto__.push((arguments[i__23175__auto___183]));

var G__184 = (i__23175__auto___183 + (1));
i__23175__auto___183 = G__184;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((2) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((2)),(0),null)):null);
return cljs.spec.gen.alpha$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23178__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec.gen.alpha$macros.delay;},new cljs.core.Symbol("cljs.spec.gen.alpha$macros","delay","cljs.spec.gen.alpha$macros/delay",(-1145665374),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.gen.alpha$macros","cljs.spec.gen.alpha$macros",(-1225446160),null),new cljs.core.Symbol(null,"delay","delay",(1066306308),null),"cljs/spec/gen/alpha.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(32),true,(32),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"given body that returns a generator, returns a\n  generator that delegates to that, but delays\n  creation until used.",(cljs.core.truth_(cljs.spec.gen.alpha$macros.delay)?cljs.spec.gen.alpha$macros.delay.cljs$lang$test:null)])));})()
;

cljs.spec.gen.alpha$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.gen.alpha","delay-impl","cljs.spec.gen.alpha/delay-impl",(-1184837112),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","delay","cljs.core/delay",(-406049125),null)),body));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
});

cljs.spec.gen.alpha$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.spec.gen.alpha$macros.delay.cljs$lang$applyTo = (function (seq178){
var G__179 = cljs.core.first(seq178);
var seq178__$1 = cljs.core.next(seq178);
var G__180 = cljs.core.first(seq178__$1);
var seq178__$2 = cljs.core.next(seq178__$1);
return cljs.spec.gen.alpha$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__179,G__180,seq178__$2);
});

return new cljs.core.Var(function(){return cljs.spec.gen.alpha$macros.delay;},new cljs.core.Symbol("cljs.spec.gen.alpha$macros","delay","cljs.spec.gen.alpha$macros/delay",(-1145665374),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.gen.alpha$macros","cljs.spec.gen.alpha$macros",(-1225446160),null),new cljs.core.Symbol(null,"delay","delay",(1066306308),null),"cljs/spec/gen/alpha.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(32),true,(32),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"given body that returns a generator, returns a\n  generator that delegates to that, but delays\n  creation until used.",(cljs.core.truth_(cljs.spec.gen.alpha$macros.delay)?cljs.spec.gen.alpha$macros.delay.cljs$lang$test:null)]));
})()
;
cljs.spec.gen.alpha$macros.delay.cljs$lang$macro = true;

var ret__23200__auto___185 = /**
 * Implementation macro, do not call directly.
 */
(function (){
cljs.spec.gen.alpha$macros.lazy_combinator = (function cljs$spec$gen$alpha$macros$lazy_combinator(_AMPERSAND_form,_AMPERSAND_env,s){
var fqn = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("clojure.test.check.generators",cljs.core.name(s));
var doc = ["Lazy loaded version of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fqn)].join('');
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"g__8__auto__","g__8__auto__",(1028788077),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.gen.alpha","dynaload","cljs.spec.gen.alpha/dynaload",(-1253128860),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = fqn;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",(-1606493717),null)),(function (){var x__22880__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = doc;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&","&",(-2144855648),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",(-1338879193),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",(1757277831),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"g__8__auto__","g__8__auto__",(1028788077),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",(-1338879193),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
}); return (
new cljs.core.Var(function(){return cljs.spec.gen.alpha$macros.lazy_combinator;},new cljs.core.Symbol("cljs.spec.gen.alpha$macros","lazy-combinator","cljs.spec.gen.alpha$macros/lazy-combinator",(1835043997),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"skip-wiki","skip-wiki",(-2018833298)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.gen.alpha$macros","cljs.spec.gen.alpha$macros",(-1225446160),null),new cljs.core.Symbol(null,"lazy-combinator","lazy-combinator",(-519533249),null),"cljs/spec/gen/alpha.cljc",(38),true,(1),(39),true,(39),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),"Implementation macro, do not call directly.",(cljs.core.truth_(cljs.spec.gen.alpha$macros.lazy_combinator)?cljs.spec.gen.alpha$macros.lazy_combinator.cljs$lang$test:null)])));})()
;
cljs.spec.gen.alpha$macros.lazy_combinator.cljs$lang$macro = true;

var ret__23200__auto___189 = (function (){
/**
 * Implementation macro, do not call directly.
 */
(function (){
cljs.spec.gen.alpha$macros.lazy_combinators = (function cljs$spec$gen$alpha$macros$lazy_combinators(var_args){
var args__23177__auto__ = [];
var len__23174__auto___190 = arguments.length;
var i__23175__auto___191 = (0);
while(true){
if((i__23175__auto___191 < len__23174__auto___190)){
args__23177__auto__.push((arguments[i__23175__auto___191]));

var G__192 = (i__23175__auto___191 + (1));
i__23175__auto___191 = G__192;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((2) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((2)),(0),null)):null);
return cljs.spec.gen.alpha$macros.lazy_combinators.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23178__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec.gen.alpha$macros.lazy_combinators;},new cljs.core.Symbol("cljs.spec.gen.alpha$macros","lazy-combinators","cljs.spec.gen.alpha$macros/lazy-combinators",(1172241041),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"skip-wiki","skip-wiki",(-2018833298)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.gen.alpha$macros","cljs.spec.gen.alpha$macros",(-1225446160),null),new cljs.core.Symbol(null,"lazy-combinators","lazy-combinators",(-906562317),null),"cljs/spec/gen/alpha.cljc",(39),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),true,(1),(50),true,(50),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null)], null)),"Implementation macro, do not call directly.",(cljs.core.truth_(cljs.spec.gen.alpha$macros.lazy_combinators)?cljs.spec.gen.alpha$macros.lazy_combinators.cljs$lang$test:null)])));})()
;

cljs.spec.gen.alpha$macros.lazy_combinators.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,syms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
return cljs.core._conj((function (){var x__22880__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),new cljs.core.Symbol("cljs.spec.gen.alpha","lazy-combinator","cljs.spec.gen.alpha/lazy-combinator",(1305287268),null));
}),syms)));
});

cljs.spec.gen.alpha$macros.lazy_combinators.cljs$lang$maxFixedArity = (2);

cljs.spec.gen.alpha$macros.lazy_combinators.cljs$lang$applyTo = (function (seq186){
var G__187 = cljs.core.first(seq186);
var seq186__$1 = cljs.core.next(seq186);
var G__188 = cljs.core.first(seq186__$1);
var seq186__$2 = cljs.core.next(seq186__$1);
return cljs.spec.gen.alpha$macros.lazy_combinators.cljs$core$IFn$_invoke$arity$variadic(G__187,G__188,seq186__$2);
});

return new cljs.core.Var(function(){return cljs.spec.gen.alpha$macros.lazy_combinators;},new cljs.core.Symbol("cljs.spec.gen.alpha$macros","lazy-combinators","cljs.spec.gen.alpha$macros/lazy-combinators",(1172241041),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"skip-wiki","skip-wiki",(-2018833298)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.gen.alpha$macros","cljs.spec.gen.alpha$macros",(-1225446160),null),new cljs.core.Symbol(null,"lazy-combinators","lazy-combinators",(-906562317),null),"cljs/spec/gen/alpha.cljc",(39),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),true,(1),(50),true,(50),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null)], null)),"Implementation macro, do not call directly.",(cljs.core.truth_(cljs.spec.gen.alpha$macros.lazy_combinators)?cljs.spec.gen.alpha$macros.lazy_combinators.cljs$lang$test:null)]));
})()
;
cljs.spec.gen.alpha$macros.lazy_combinators.cljs$lang$macro = true;

var ret__23200__auto___193 = /**
 * Implementation macro, do not call directly.
 */
(function (){
cljs.spec.gen.alpha$macros.lazy_prim = (function cljs$spec$gen$alpha$macros$lazy_prim(_AMPERSAND_form,_AMPERSAND_env,s){
var fqn = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("clojure.test.check.generators",cljs.core.name(s));
var doc = ["Fn returning ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fqn)].join('');
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"g__9__auto__","g__9__auto__",(2100277481),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.gen.alpha","dynaload","cljs.spec.gen.alpha/dynaload",(-1253128860),null)),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__22880__auto__ = fqn;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",(-1606493717),null)),(function (){var x__22880__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__22880__auto__ = doc;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&","&",(-2144855648),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",(-1338879193),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),(function (){var x__22880__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"g__9__auto__","g__9__auto__",(2100277481),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})()], 0)));
}); return (
new cljs.core.Var(function(){return cljs.spec.gen.alpha$macros.lazy_prim;},new cljs.core.Symbol("cljs.spec.gen.alpha$macros","lazy-prim","cljs.spec.gen.alpha$macros/lazy-prim",(-2059465726),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"skip-wiki","skip-wiki",(-2018833298)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.gen.alpha$macros","cljs.spec.gen.alpha$macros",(-1225446160),null),new cljs.core.Symbol(null,"lazy-prim","lazy-prim",(-116980768),null),"cljs/spec/gen/alpha.cljc",(32),true,(1),(58),true,(58),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),"Implementation macro, do not call directly.",(cljs.core.truth_(cljs.spec.gen.alpha$macros.lazy_prim)?cljs.spec.gen.alpha$macros.lazy_prim.cljs$lang$test:null)])));})()
;
cljs.spec.gen.alpha$macros.lazy_prim.cljs$lang$macro = true;

var ret__23200__auto___197 = (function (){
/**
 * Implementation macro, do not call directly.
 */
(function (){
cljs.spec.gen.alpha$macros.lazy_prims = (function cljs$spec$gen$alpha$macros$lazy_prims(var_args){
var args__23177__auto__ = [];
var len__23174__auto___198 = arguments.length;
var i__23175__auto___199 = (0);
while(true){
if((i__23175__auto___199 < len__23174__auto___198)){
args__23177__auto__.push((arguments[i__23175__auto___199]));

var G__200 = (i__23175__auto___199 + (1));
i__23175__auto___199 = G__200;
continue;
} else {
}
break;
}

var argseq__23178__auto__ = ((((2) < args__23177__auto__.length))?(new cljs.core.IndexedSeq(args__23177__auto__.slice((2)),(0),null)):null);
return cljs.spec.gen.alpha$macros.lazy_prims.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23178__auto__);
}); return (
new cljs.core.Var(function(){return cljs.spec.gen.alpha$macros.lazy_prims;},new cljs.core.Symbol("cljs.spec.gen.alpha$macros","lazy-prims","cljs.spec.gen.alpha$macros/lazy-prims",(1520835766),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"skip-wiki","skip-wiki",(-2018833298)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.gen.alpha$macros","cljs.spec.gen.alpha$macros",(-1225446160),null),new cljs.core.Symbol(null,"lazy-prims","lazy-prims",(-681697752),null),"cljs/spec/gen/alpha.cljc",(33),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),true,(1),(69),true,(69),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null)], null)),"Implementation macro, do not call directly.",(cljs.core.truth_(cljs.spec.gen.alpha$macros.lazy_prims)?cljs.spec.gen.alpha$macros.lazy_prims.cljs$lang$test:null)])));})()
;

cljs.spec.gen.alpha$macros.lazy_prims.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,syms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
return cljs.core._conj((function (){var x__22880__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__22880__auto__);
})(),new cljs.core.Symbol("cljs.spec.gen.alpha","lazy-prim","cljs.spec.gen.alpha/lazy-prim",(-1495559509),null));
}),syms)));
});

cljs.spec.gen.alpha$macros.lazy_prims.cljs$lang$maxFixedArity = (2);

cljs.spec.gen.alpha$macros.lazy_prims.cljs$lang$applyTo = (function (seq194){
var G__195 = cljs.core.first(seq194);
var seq194__$1 = cljs.core.next(seq194);
var G__196 = cljs.core.first(seq194__$1);
var seq194__$2 = cljs.core.next(seq194__$1);
return cljs.spec.gen.alpha$macros.lazy_prims.cljs$core$IFn$_invoke$arity$variadic(G__195,G__196,seq194__$2);
});

return new cljs.core.Var(function(){return cljs.spec.gen.alpha$macros.lazy_prims;},new cljs.core.Symbol("cljs.spec.gen.alpha$macros","lazy-prims","cljs.spec.gen.alpha$macros/lazy-prims",(1520835766),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"skip-wiki","skip-wiki",(-2018833298)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.spec.gen.alpha$macros","cljs.spec.gen.alpha$macros",(-1225446160),null),new cljs.core.Symbol(null,"lazy-prims","lazy-prims",(-681697752),null),"cljs/spec/gen/alpha.cljc",(33),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),true,(1),(69),true,(69),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null)], null)),"Implementation macro, do not call directly.",(cljs.core.truth_(cljs.spec.gen.alpha$macros.lazy_prims)?cljs.spec.gen.alpha$macros.lazy_prims.cljs$lang$test:null)]));
})()
;
cljs.spec.gen.alpha$macros.lazy_prims.cljs$lang$macro = true;

