goog.provide("cljs.support$macros");
var ret__23352__auto___3781 = (function (){
/**
 * Internal - do not use!
 */
cljs.support$macros.assert_args = (function cljs$support$macros$assert_args(var_args){
var args__23329__auto__ = [];
var len__23326__auto___3782 = arguments.length;
var i__23327__auto___3783 = (0);
while(true){
if((i__23327__auto___3783 < len__23326__auto___3782)){
args__23329__auto__.push((arguments[i__23327__auto___3783]));

var G__3784 = (i__23327__auto___3783 + (1));
i__23327__auto___3783 = G__3784;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((3) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((3)),(0),null)):null);
return cljs.support$macros.assert_args.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23330__auto__);
});

cljs.support$macros.assert_args.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnname,pairs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",(-556141047),null)),(function (){var x__23030__auto__ = cljs.core.first(pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",(595905694),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",(-409744395),null)),(function (){var x__23030__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fnname)," requires ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(pairs))].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = (function (){var more = cljs.core.nnext(pairs);
if(cljs.core.truth_(more)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("cljs.support","assert-args","cljs.support/assert-args",(-1359206108),null),fnname,more);
} else {
return null;
}
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.support$macros.assert_args.cljs$lang$maxFixedArity = (3);

cljs.support$macros.assert_args.cljs$lang$applyTo = (function (seq3777){
var G__3778 = cljs.core.first(seq3777);
var seq3777__$1 = cljs.core.next(seq3777);
var G__3779 = cljs.core.first(seq3777__$1);
var seq3777__$2 = cljs.core.next(seq3777__$1);
var G__3780 = cljs.core.first(seq3777__$2);
var seq3777__$3 = cljs.core.next(seq3777__$2);
return cljs.support$macros.assert_args.cljs$core$IFn$_invoke$arity$variadic(G__3778,G__3779,G__3780,seq3777__$3);
});

return null;
})()
;
cljs.support$macros.assert_args.cljs$lang$macro = true;

