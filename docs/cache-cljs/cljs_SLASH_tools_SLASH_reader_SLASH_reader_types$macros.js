goog.provide("cljs.tools.reader.reader_types$macros");
var ret__23352__auto___116 = (function (){
/**
 * If reader is a SourceLoggingPushbackReader, execute body in a source
 *   logging context. Otherwise, execute body, returning the result.
 */
cljs.tools.reader.reader_types$macros.log_source = (function cljs$tools$reader$reader_types$macros$log_source(var_args){
var args__23329__auto__ = [];
var len__23326__auto___117 = arguments.length;
var i__23327__auto___118 = (0);
while(true){
if((i__23327__auto___118 < len__23326__auto___117)){
args__23329__auto__.push((arguments[i__23327__auto___118]));

var G__119 = (i__23327__auto___118 + (1));
i__23327__auto___118 = G__119;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((3) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((3)),(0),null)):null);
return cljs.tools.reader.reader_types$macros.log_source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23330__auto__);
});

cljs.tools.reader.reader_types$macros.log_source.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.tools.reader.reader-types","source-logging-reader?","cljs.tools.reader.reader-types/source-logging-reader?",(-1520527434),null)),(function (){var x__23030__auto__ = reader;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",(100665144),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.tools.reader.impl.utils","whitespace?","cljs.tools.reader.impl.utils/whitespace?",(-2091653184),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.tools.reader.reader-types","peek-char","cljs.tools.reader.reader-types/peek-char",(692825686),null)),(function (){var x__23030__auto__ = reader;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.tools.reader.reader-types","log-source*","cljs.tools.reader.reader-types/log-source*",(-827357451),null)),(function (){var x__23030__auto__ = reader;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__23030__auto__ = cljs.core.with_meta(cljs.core.with_meta(new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"once","once",(-262568523)),true], null)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",(-1269645878))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs.tools.reader.reader-types","cljs.tools.reader.reader-types",(-346100821),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",(212345235))),cljs.core._conj(cljs.core.List.EMPTY,(9)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",(2078222095))),cljs.core._conj(cljs.core.List.EMPTY,(35)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",(1837326455))),cljs.core._conj(cljs.core.List.EMPTY,(9)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",(1425389514))),cljs.core._conj(cljs.core.List.EMPTY,(38)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"once","once",(-262568523))),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),body));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.tools.reader.reader_types$macros.log_source.cljs$lang$maxFixedArity = (3);

cljs.tools.reader.reader_types$macros.log_source.cljs$lang$applyTo = (function (seq112){
var G__113 = cljs.core.first(seq112);
var seq112__$1 = cljs.core.next(seq112);
var G__114 = cljs.core.first(seq112__$1);
var seq112__$2 = cljs.core.next(seq112__$1);
var G__115 = cljs.core.first(seq112__$2);
var seq112__$3 = cljs.core.next(seq112__$2);
return cljs.tools.reader.reader_types$macros.log_source.cljs$core$IFn$_invoke$arity$variadic(G__113,G__114,G__115,seq112__$3);
});

return null;
})()
;
cljs.tools.reader.reader_types$macros.log_source.cljs$lang$macro = true;

