goog.provide("clojure.template$macros");
/**
 * For use in macros.  argv is an argument list, as in defn.  expr is
 *   a quoted expression using the symbols in argv.  values is a sequence
 *   of values to be used for the arguments.
 * 
 *   apply-template will recursively replace argument symbols in expr
 *   with their corresponding values, returning a modified expr.
 * 
 *   Example: (apply-template '[x] '(+ x x) '[2])
 *         ;=> (+ 2 2)
 */
clojure.template$macros.apply_template = (function clojure$template$macros$apply_template(argv,expr,values){
if(cljs.core.vector_QMARK_(argv)){
} else {
throw (new Error("Assert failed: (vector? argv)"));
}

if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,argv)){
} else {
throw (new Error("Assert failed: (every? symbol? argv)"));
}

return clojure.walk.postwalk_replace(cljs.core.zipmap(argv,values),expr);
});
var ret__23352__auto___2999 = (function (){
/**
 * Repeatedly copies expr (in a do block) for each group of arguments
 *   in values.  values are automatically partitioned by the number of
 *   arguments in argv, an argument vector as in defn.
 * 
 *   Example: (macroexpand '(do-template [x y] (+ y x) 2 4 3 5))
 *         ;=> (do (+ 4 2) (+ 5 3))
 */
clojure.template$macros.do_template = (function clojure$template$macros$do_template(var_args){
var args__23329__auto__ = [];
var len__23326__auto___3000 = arguments.length;
var i__23327__auto___3001 = (0);
while(true){
if((i__23327__auto___3001 < len__23326__auto___3000)){
args__23329__auto__.push((arguments[i__23327__auto___3001]));

var G__3002 = (i__23327__auto___3001 + (1));
i__23327__auto___3001 = G__3002;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((4) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((4)),(0),null)):null);
return clojure.template$macros.do_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23330__auto__);
});

clojure.template$macros.do_template.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,argv,expr,values){
var c = cljs.core.count(argv);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (c){
return (function (a){
return clojure.template$macros.apply_template(argv,expr,a);
});})(c))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(c,values))));
});

clojure.template$macros.do_template.cljs$lang$maxFixedArity = (4);

clojure.template$macros.do_template.cljs$lang$applyTo = (function (seq2994){
var G__2995 = cljs.core.first(seq2994);
var seq2994__$1 = cljs.core.next(seq2994);
var G__2996 = cljs.core.first(seq2994__$1);
var seq2994__$2 = cljs.core.next(seq2994__$1);
var G__2997 = cljs.core.first(seq2994__$2);
var seq2994__$3 = cljs.core.next(seq2994__$2);
var G__2998 = cljs.core.first(seq2994__$3);
var seq2994__$4 = cljs.core.next(seq2994__$3);
return clojure.template$macros.do_template.cljs$core$IFn$_invoke$arity$variadic(G__2995,G__2996,G__2997,G__2998,seq2994__$4);
});

return null;
})()
;
clojure.template$macros.do_template.cljs$lang$macro = true;

