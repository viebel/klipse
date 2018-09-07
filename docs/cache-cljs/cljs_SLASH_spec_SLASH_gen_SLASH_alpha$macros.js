goog.provide("cljs.spec.gen.alpha$macros");
var ret__23352__auto___169 = cljs.spec.gen.alpha$macros.dynaload = (function cljs$spec$gen$alpha$macros$dynaload(_AMPERSAND_form,_AMPERSAND_env,p__165){
var vec__166 = p__165;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__166,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__166,(1),null);
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(s),/\./);
var cnt = cljs.core.count(xs);
var checks = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (xs,cnt,vec__166,quote,s){
return (function (n,xs__$1){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","exists?","cljs.core/exists?",(1852387968),null)),(function (){var x__23030__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,xs__$1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
});})(xs,cnt,vec__166,quote,s))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((2),cnt),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(xs));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.gen.alpha","LazyVar.","cljs.spec.gen.alpha/LazyVar.",(-1422353692),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),checks,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","exists?","cljs.core/exists?",(1852387968),null)),(function (){var x__23030__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(s,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",(-1872351017)),true);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",(595905694),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",(750655924),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),cljs.core._conj(cljs.core.List.EMPTY,"Var "),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY," does not exist, "),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","namespace","cljs.core/namespace",(1653264270),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY," never required")], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null)], 0)));
});
cljs.spec.gen.alpha$macros.dynaload.cljs$lang$macro = true;

var ret__23352__auto___173 = (function (){
/**
 * given body that returns a generator, returns a
 *   generator that delegates to that, but delays
 *   creation until used.
 */
cljs.spec.gen.alpha$macros.delay = (function cljs$spec$gen$alpha$macros$delay(var_args){
var args__23329__auto__ = [];
var len__23326__auto___174 = arguments.length;
var i__23327__auto___175 = (0);
while(true){
if((i__23327__auto___175 < len__23326__auto___174)){
args__23329__auto__.push((arguments[i__23327__auto___175]));

var G__176 = (i__23327__auto___175 + (1));
i__23327__auto___175 = G__176;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((2) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((2)),(0),null)):null);
return cljs.spec.gen.alpha$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23330__auto__);
});

cljs.spec.gen.alpha$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.gen.alpha","delay-impl","cljs.spec.gen.alpha/delay-impl",(-1184837112),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","delay","cljs.core/delay",(-406049125),null)),body));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
});

cljs.spec.gen.alpha$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.spec.gen.alpha$macros.delay.cljs$lang$applyTo = (function (seq170){
var G__171 = cljs.core.first(seq170);
var seq170__$1 = cljs.core.next(seq170);
var G__172 = cljs.core.first(seq170__$1);
var seq170__$2 = cljs.core.next(seq170__$1);
return cljs.spec.gen.alpha$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__171,G__172,seq170__$2);
});

return null;
})()
;
cljs.spec.gen.alpha$macros.delay.cljs$lang$macro = true;

var ret__23352__auto___177 = /**
 * Implementation macro, do not call directly.
 */
cljs.spec.gen.alpha$macros.lazy_combinator = (function cljs$spec$gen$alpha$macros$lazy_combinator(_AMPERSAND_form,_AMPERSAND_env,s){
var fqn = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("clojure.test.check.generators",cljs.core.name(s));
var doc = ["Lazy loaded version of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fqn)].join('');
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"g__7__auto__","g__7__auto__",(-941564805),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.gen.alpha","dynaload","cljs.spec.gen.alpha/dynaload",(-1253128860),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = fqn;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",(-1606493717),null)),(function (){var x__23030__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = doc;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&","&",(-2144855648),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",(-1338879193),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",(1757277831),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"g__7__auto__","g__7__auto__",(-941564805),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",(-1338879193),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});
cljs.spec.gen.alpha$macros.lazy_combinator.cljs$lang$macro = true;

var ret__23352__auto___181 = (function (){
/**
 * Implementation macro, do not call directly.
 */
cljs.spec.gen.alpha$macros.lazy_combinators = (function cljs$spec$gen$alpha$macros$lazy_combinators(var_args){
var args__23329__auto__ = [];
var len__23326__auto___182 = arguments.length;
var i__23327__auto___183 = (0);
while(true){
if((i__23327__auto___183 < len__23326__auto___182)){
args__23329__auto__.push((arguments[i__23327__auto___183]));

var G__184 = (i__23327__auto___183 + (1));
i__23327__auto___183 = G__184;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((2) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((2)),(0),null)):null);
return cljs.spec.gen.alpha$macros.lazy_combinators.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23330__auto__);
});

cljs.spec.gen.alpha$macros.lazy_combinators.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,syms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
return cljs.core._conj((function (){var x__23030__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),new cljs.core.Symbol("cljs.spec.gen.alpha","lazy-combinator","cljs.spec.gen.alpha/lazy-combinator",(1305287268),null));
}),syms)));
});

cljs.spec.gen.alpha$macros.lazy_combinators.cljs$lang$maxFixedArity = (2);

cljs.spec.gen.alpha$macros.lazy_combinators.cljs$lang$applyTo = (function (seq178){
var G__179 = cljs.core.first(seq178);
var seq178__$1 = cljs.core.next(seq178);
var G__180 = cljs.core.first(seq178__$1);
var seq178__$2 = cljs.core.next(seq178__$1);
return cljs.spec.gen.alpha$macros.lazy_combinators.cljs$core$IFn$_invoke$arity$variadic(G__179,G__180,seq178__$2);
});

return null;
})()
;
cljs.spec.gen.alpha$macros.lazy_combinators.cljs$lang$macro = true;

var ret__23352__auto___185 = /**
 * Implementation macro, do not call directly.
 */
cljs.spec.gen.alpha$macros.lazy_prim = (function cljs$spec$gen$alpha$macros$lazy_prim(_AMPERSAND_form,_AMPERSAND_env,s){
var fqn = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("clojure.test.check.generators",cljs.core.name(s));
var doc = ["Fn returning ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fqn)].join('');
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"g__8__auto__","g__8__auto__",(1028788077),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.gen.alpha","dynaload","cljs.spec.gen.alpha/dynaload",(-1253128860),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = fqn;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",(-1606493717),null)),(function (){var x__23030__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = doc;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&","&",(-2144855648),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",(-1338879193),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"g__8__auto__","g__8__auto__",(1028788077),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});
cljs.spec.gen.alpha$macros.lazy_prim.cljs$lang$macro = true;

var ret__23352__auto___189 = (function (){
/**
 * Implementation macro, do not call directly.
 */
cljs.spec.gen.alpha$macros.lazy_prims = (function cljs$spec$gen$alpha$macros$lazy_prims(var_args){
var args__23329__auto__ = [];
var len__23326__auto___190 = arguments.length;
var i__23327__auto___191 = (0);
while(true){
if((i__23327__auto___191 < len__23326__auto___190)){
args__23329__auto__.push((arguments[i__23327__auto___191]));

var G__192 = (i__23327__auto___191 + (1));
i__23327__auto___191 = G__192;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((2) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((2)),(0),null)):null);
return cljs.spec.gen.alpha$macros.lazy_prims.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23330__auto__);
});

cljs.spec.gen.alpha$macros.lazy_prims.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,syms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
return cljs.core._conj((function (){var x__23030__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),new cljs.core.Symbol("cljs.spec.gen.alpha","lazy-prim","cljs.spec.gen.alpha/lazy-prim",(-1495559509),null));
}),syms)));
});

cljs.spec.gen.alpha$macros.lazy_prims.cljs$lang$maxFixedArity = (2);

cljs.spec.gen.alpha$macros.lazy_prims.cljs$lang$applyTo = (function (seq186){
var G__187 = cljs.core.first(seq186);
var seq186__$1 = cljs.core.next(seq186);
var G__188 = cljs.core.first(seq186__$1);
var seq186__$2 = cljs.core.next(seq186__$1);
return cljs.spec.gen.alpha$macros.lazy_prims.cljs$core$IFn$_invoke$arity$variadic(G__187,G__188,seq186__$2);
});

return null;
})()
;
cljs.spec.gen.alpha$macros.lazy_prims.cljs$lang$macro = true;

