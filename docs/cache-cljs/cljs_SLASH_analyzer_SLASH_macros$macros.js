goog.provide("cljs.analyzer.macros$macros");
var ret__23352__auto___41 = (function (){
cljs.analyzer.macros$macros.with_warning_handlers = (function cljs$analyzer$macros$macros$with_warning_handlers(var_args){
var args__23329__auto__ = [];
var len__23326__auto___42 = arguments.length;
var i__23327__auto___43 = (0);
while(true){
if((i__23327__auto___43 < len__23326__auto___42)){
args__23329__auto__.push((arguments[i__23327__auto___43]));

var G__44 = (i__23327__auto___43 + (1));
i__23327__auto___43 = G__44;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((3) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.macros$macros.with_warning_handlers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23330__auto__);
});

cljs.analyzer.macros$macros.with_warning_handlers.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,handlers,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",(2050379843),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.analyzer","*cljs-warning-handlers*","cljs.analyzer/*cljs-warning-handlers*",(882579751),null)),(function (){var x__23030__auto__ = handlers;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)));
});

cljs.analyzer.macros$macros.with_warning_handlers.cljs$lang$maxFixedArity = (3);

cljs.analyzer.macros$macros.with_warning_handlers.cljs$lang$applyTo = (function (seq37){
var G__38 = cljs.core.first(seq37);
var seq37__$1 = cljs.core.next(seq37);
var G__39 = cljs.core.first(seq37__$1);
var seq37__$2 = cljs.core.next(seq37__$1);
var G__40 = cljs.core.first(seq37__$2);
var seq37__$3 = cljs.core.next(seq37__$2);
return cljs.analyzer.macros$macros.with_warning_handlers.cljs$core$IFn$_invoke$arity$variadic(G__38,G__39,G__40,seq37__$3);
});

return null;
})()
;
cljs.analyzer.macros$macros.with_warning_handlers.cljs$lang$macro = true;

var ret__23352__auto___48 = (function (){
cljs.analyzer.macros$macros.no_warn = (function cljs$analyzer$macros$macros$no_warn(var_args){
var args__23329__auto__ = [];
var len__23326__auto___49 = arguments.length;
var i__23327__auto___50 = (0);
while(true){
if((i__23327__auto___50 < len__23326__auto___49)){
args__23329__auto__.push((arguments[i__23327__auto___50]));

var G__51 = (i__23327__auto___50 + (1));
i__23327__auto___50 = G__51;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((2) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.macros$macros.no_warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23330__auto__);
});

cljs.analyzer.macros$macros.no_warn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",(2050379843),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.analyzer","*cljs-warnings*","cljs.analyzer/*cljs-warnings*",(-289667730),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",(-1902130674),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keys","cljs.core/keys",(-927561820),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.analyzer","*cljs-warnings*","cljs.analyzer/*cljs-warnings*",(-289667730),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",(-89455077),null)),cljs.core._conj(cljs.core.List.EMPTY,false)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)));
});

cljs.analyzer.macros$macros.no_warn.cljs$lang$maxFixedArity = (2);

cljs.analyzer.macros$macros.no_warn.cljs$lang$applyTo = (function (seq45){
var G__46 = cljs.core.first(seq45);
var seq45__$1 = cljs.core.next(seq45);
var G__47 = cljs.core.first(seq45__$1);
var seq45__$2 = cljs.core.next(seq45__$1);
return cljs.analyzer.macros$macros.no_warn.cljs$core$IFn$_invoke$arity$variadic(G__46,G__47,seq45__$2);
});

return null;
})()
;
cljs.analyzer.macros$macros.no_warn.cljs$lang$macro = true;

var ret__23352__auto___56 = (function (){
cljs.analyzer.macros$macros.with_core_macros = (function cljs$analyzer$macros$macros$with_core_macros(var_args){
var args__23329__auto__ = [];
var len__23326__auto___57 = arguments.length;
var i__23327__auto___58 = (0);
while(true){
if((i__23327__auto___58 < len__23326__auto___57)){
args__23329__auto__.push((arguments[i__23327__auto___58]));

var G__59 = (i__23327__auto___58 + (1));
i__23327__auto___58 = G__59;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((3) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.macros$macros.with_core_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23330__auto__);
});

cljs.analyzer.macros$macros.with_core_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,path,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",(1017572457),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.analyzer","*cljs-macros-path*","cljs.analyzer/*cljs-macros-path*",(-1737616995),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = path;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reset!","cljs.core/reset!",(657404621),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.analyzer","-cljs-macros-loaded","cljs.analyzer/-cljs-macros-loaded",(1918493478),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,false)], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",(2050379843),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.analyzer","*cljs-macros-path*","cljs.analyzer/*cljs-macros-path*",(-1737616995),null)),(function (){var x__23030__auto__ = path;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.analyzer.macros$macros.with_core_macros.cljs$lang$maxFixedArity = (3);

cljs.analyzer.macros$macros.with_core_macros.cljs$lang$applyTo = (function (seq52){
var G__53 = cljs.core.first(seq52);
var seq52__$1 = cljs.core.next(seq52);
var G__54 = cljs.core.first(seq52__$1);
var seq52__$2 = cljs.core.next(seq52__$1);
var G__55 = cljs.core.first(seq52__$2);
var seq52__$3 = cljs.core.next(seq52__$2);
return cljs.analyzer.macros$macros.with_core_macros.cljs$core$IFn$_invoke$arity$variadic(G__53,G__54,G__55,seq52__$3);
});

return null;
})()
;
cljs.analyzer.macros$macros.with_core_macros.cljs$lang$macro = true;

var ret__23352__auto___64 = (function (){
cljs.analyzer.macros$macros.with_core_macros_file = (function cljs$analyzer$macros$macros$with_core_macros_file(var_args){
var args__23329__auto__ = [];
var len__23326__auto___65 = arguments.length;
var i__23327__auto___66 = (0);
while(true){
if((i__23327__auto___66 < len__23326__auto___65)){
args__23329__auto__.push((arguments[i__23327__auto___66]));

var G__67 = (i__23327__auto___66 + (1));
i__23327__auto___66 = G__67;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((3) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.macros$macros.with_core_macros_file.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23330__auto__);
});

cljs.analyzer.macros$macros.with_core_macros_file.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,path,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",(1017572457),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.analyzer","*cljs-macros-path*","cljs.analyzer/*cljs-macros-path*",(-1737616995),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = path;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reset!","cljs.core/reset!",(657404621),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.analyzer","-cljs-macros-loaded","cljs.analyzer/-cljs-macros-loaded",(1918493478),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,false)], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",(2050379843),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.analyzer","*cljs-macros-path*","cljs.analyzer/*cljs-macros-path*",(-1737616995),null)),(function (){var x__23030__auto__ = path;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.analyzer","*cljs-macros-is-classpath*","cljs.analyzer/*cljs-macros-is-classpath*",(1674023778),null)),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.analyzer.macros$macros.with_core_macros_file.cljs$lang$maxFixedArity = (3);

cljs.analyzer.macros$macros.with_core_macros_file.cljs$lang$applyTo = (function (seq60){
var G__61 = cljs.core.first(seq60);
var seq60__$1 = cljs.core.next(seq60);
var G__62 = cljs.core.first(seq60__$1);
var seq60__$2 = cljs.core.next(seq60__$1);
var G__63 = cljs.core.first(seq60__$2);
var seq60__$3 = cljs.core.next(seq60__$2);
return cljs.analyzer.macros$macros.with_core_macros_file.cljs$core$IFn$_invoke$arity$variadic(G__61,G__62,G__63,seq60__$3);
});

return null;
})()
;
cljs.analyzer.macros$macros.with_core_macros_file.cljs$lang$macro = true;

var ret__23352__auto___72 = (function (){
cljs.analyzer.macros$macros.wrapping_errors = (function cljs$analyzer$macros$macros$wrapping_errors(var_args){
var args__23329__auto__ = [];
var len__23326__auto___73 = arguments.length;
var i__23327__auto___74 = (0);
while(true){
if((i__23327__auto___74 < len__23326__auto___73)){
args__23329__auto__.push((arguments[i__23327__auto___74]));

var G__75 = (i__23327__auto___74 + (1));
i__23327__auto___74 = G__75;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((3) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.macros$macros.wrapping_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23330__auto__);
});

cljs.analyzer.macros$macros.wrapping_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",(-1273693247),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"catch","catch",(-1616370245),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"default","default",(-1987822328))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"err__3__auto__","err__3__auto__",(-2074765983),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.analyzer","analysis-error?","cljs.analyzer/analysis-error?",(-1824961346),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"err__3__auto__","err__3__auto__",(-2074765983),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",(595905694),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"err__3__auto__","err__3__auto__",(-2074765983),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",(595905694),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.analyzer","error","cljs.analyzer/error",(1575241885),null)),(function (){var x__23030__auto__ = env;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-message",".-message",(-1827250821),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"err__3__auto__","err__3__auto__",(-2074765983),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"err__3__auto__","err__3__auto__",(-2074765983),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.analyzer.macros$macros.wrapping_errors.cljs$lang$maxFixedArity = (3);

cljs.analyzer.macros$macros.wrapping_errors.cljs$lang$applyTo = (function (seq68){
var G__69 = cljs.core.first(seq68);
var seq68__$1 = cljs.core.next(seq68);
var G__70 = cljs.core.first(seq68__$1);
var seq68__$2 = cljs.core.next(seq68__$1);
var G__71 = cljs.core.first(seq68__$2);
var seq68__$3 = cljs.core.next(seq68__$2);
return cljs.analyzer.macros$macros.wrapping_errors.cljs$core$IFn$_invoke$arity$variadic(G__69,G__70,G__71,seq68__$3);
});

return null;
})()
;
cljs.analyzer.macros$macros.wrapping_errors.cljs$lang$macro = true;

var ret__23352__auto___79 = (function (){
cljs.analyzer.macros$macros.disallowing_recur = (function cljs$analyzer$macros$macros$disallowing_recur(var_args){
var args__23329__auto__ = [];
var len__23326__auto___80 = arguments.length;
var i__23327__auto___81 = (0);
while(true){
if((i__23327__auto___81 < len__23326__auto___80)){
args__23329__auto__.push((arguments[i__23327__auto___81]));

var G__82 = (i__23327__auto___81 + (1));
i__23327__auto___81 = G__82;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((2) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.macros$macros.disallowing_recur.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23330__auto__);
});

cljs.analyzer.macros$macros.disallowing_recur.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",(2050379843),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.analyzer","*recur-frames*","cljs.analyzer/*recur-frames*",(-431441741),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",(96507417),null)),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.analyzer","*recur-frames*","cljs.analyzer/*recur-frames*",(-431441741),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)));
});

cljs.analyzer.macros$macros.disallowing_recur.cljs$lang$maxFixedArity = (2);

cljs.analyzer.macros$macros.disallowing_recur.cljs$lang$applyTo = (function (seq76){
var G__77 = cljs.core.first(seq76);
var seq76__$1 = cljs.core.next(seq76);
var G__78 = cljs.core.first(seq76__$1);
var seq76__$2 = cljs.core.next(seq76__$1);
return cljs.analyzer.macros$macros.disallowing_recur.cljs$core$IFn$_invoke$arity$variadic(G__77,G__78,seq76__$2);
});

return null;
})()
;
cljs.analyzer.macros$macros.disallowing_recur.cljs$lang$macro = true;

var ret__23352__auto___86 = (function (){
cljs.analyzer.macros$macros.allowing_redef = (function cljs$analyzer$macros$macros$allowing_redef(var_args){
var args__23329__auto__ = [];
var len__23326__auto___87 = arguments.length;
var i__23327__auto___88 = (0);
while(true){
if((i__23327__auto___88 < len__23326__auto___87)){
args__23329__auto__.push((arguments[i__23327__auto___88]));

var G__89 = (i__23327__auto___88 + (1));
i__23327__auto___88 = G__89;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((2) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.macros$macros.allowing_redef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23330__auto__);
});

cljs.analyzer.macros$macros.allowing_redef.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",(2050379843),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.analyzer","*allow-redef*","cljs.analyzer/*allow-redef*",(-501091249),null)),cljs.core._conj(cljs.core.List.EMPTY,true))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)));
});

cljs.analyzer.macros$macros.allowing_redef.cljs$lang$maxFixedArity = (2);

cljs.analyzer.macros$macros.allowing_redef.cljs$lang$applyTo = (function (seq83){
var G__84 = cljs.core.first(seq83);
var seq83__$1 = cljs.core.next(seq83);
var G__85 = cljs.core.first(seq83__$1);
var seq83__$2 = cljs.core.next(seq83__$1);
return cljs.analyzer.macros$macros.allowing_redef.cljs$core$IFn$_invoke$arity$variadic(G__84,G__85,seq83__$2);
});

return null;
})()
;
cljs.analyzer.macros$macros.allowing_redef.cljs$lang$macro = true;

var ret__23352__auto___93 = (function (){
cljs.analyzer.macros$macros.disallowing_ns_STAR_ = (function cljs$analyzer$macros$macros$disallowing_ns_STAR_(var_args){
var args__23329__auto__ = [];
var len__23326__auto___94 = arguments.length;
var i__23327__auto___95 = (0);
while(true){
if((i__23327__auto___95 < len__23326__auto___94)){
args__23329__auto__.push((arguments[i__23327__auto___95]));

var G__96 = (i__23327__auto___95 + (1));
i__23327__auto___95 = G__96;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((2) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23330__auto__);
});

cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",(2050379843),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.analyzer","*allow-ns*","cljs.analyzer/*allow-ns*",(-141648458),null)),cljs.core._conj(cljs.core.List.EMPTY,false))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)));
});

cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$lang$maxFixedArity = (2);

cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$lang$applyTo = (function (seq90){
var G__91 = cljs.core.first(seq90);
var seq90__$1 = cljs.core.next(seq90);
var G__92 = cljs.core.first(seq90__$1);
var seq90__$2 = cljs.core.next(seq90__$1);
return cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__91,G__92,seq90__$2);
});

return null;
})()
;
cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$lang$macro = true;

