goog.provide("cljs.compiler.macros$macros");
var ret__23352__auto___369 = (function (){
cljs.compiler.macros$macros.emit_wrap = (function cljs$compiler$macros$macros$emit_wrap(var_args){
var args__23329__auto__ = [];
var len__23326__auto___370 = arguments.length;
var i__23327__auto___371 = (0);
while(true){
if((i__23327__auto___371 < len__23326__auto___370)){
args__23329__auto__.push((arguments[i__23327__auto___371]));

var G__372 = (i__23327__auto___371 + (1));
i__23327__auto___371 = G__372;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((3) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((3)),(0),null)):null);
return cljs.compiler.macros$macros.emit_wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23330__auto__);
});

cljs.compiler.macros$macros.emit_wrap.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"env__42__auto__","env__42__auto__",(1553733161),null)),(function (){var x__23030__auto__ = env;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"return","return",(-1891502105))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"context","context",(-830191113))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"env__42__auto__","env__42__auto__",(1553733161),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.compiler","emits","cljs.compiler/emits",(-1296164997),null)),cljs.core._conj(cljs.core.List.EMPTY,"return ")));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),body,(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",(-556141047),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expr","expr",(745722291))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"context","context",(-830191113))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"env__42__auto__","env__42__auto__",(1553733161),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.compiler","emitln","cljs.compiler/emitln",(-1309380807),null)),cljs.core._conj(cljs.core.List.EMPTY,";")));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.compiler.macros$macros.emit_wrap.cljs$lang$maxFixedArity = (3);

cljs.compiler.macros$macros.emit_wrap.cljs$lang$applyTo = (function (seq365){
var G__366 = cljs.core.first(seq365);
var seq365__$1 = cljs.core.next(seq365);
var G__367 = cljs.core.first(seq365__$1);
var seq365__$2 = cljs.core.next(seq365__$1);
var G__368 = cljs.core.first(seq365__$2);
var seq365__$3 = cljs.core.next(seq365__$2);
return cljs.compiler.macros$macros.emit_wrap.cljs$core$IFn$_invoke$arity$variadic(G__366,G__367,G__368,seq365__$3);
});

return null;
})()
;
cljs.compiler.macros$macros.emit_wrap.cljs$lang$macro = true;

