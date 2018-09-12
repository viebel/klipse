goog.provide("cljs.test$macros");
/**
 * Returns true if argument is a function or a symbol that resolves to
 *   a function (not a macro).
 */
cljs.test$macros.function_QMARK_ = (function cljs$test$macros$function_QMARK_(menv,x){
var and__22202__auto__ = (x instanceof cljs.core.Symbol);
if(and__22202__auto__){
return new cljs.core.Keyword(null,"fn-var","fn-var",(1086204730)).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.api.resolve(menv,x));
} else {
return and__22202__auto__;
}
});
/**
 * Returns generic assertion code for any functional predicate.  The
 *   'expected' argument to 'report' will contains the original form, the
 *   'actual' argument will contain the form with all its sub-forms
 *   evaluated.  If the predicate returns false, the 'actual' form will
 *   be wrapped in (not...).
 */
cljs.test$macros.assert_predicate = (function cljs$test$macros$assert_predicate(msg,form){
var args = cljs.core.rest(form);
var pred = cljs.core.first(form);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"values__172__auto__","values__172__auto__",(-99694168),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",(-1331406371),null)),args));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__173__auto__","result__173__auto__",(-2138405185),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",(1757277831),null)),(function (){var x__23030__auto__ = pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"values__172__auto__","values__172__auto__",(-99694168),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__173__auto__","result__173__auto__",(-2138405185),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__23030__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pass","pass",(1574159993))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",(-406056002))),(function (){var x__23030__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expected","expected",(1583670997))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actual","actual",(107306363))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",(96507417),null)),(function (){var x__23030__auto__ = pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"values__172__auto__","values__172__auto__",(-99694168),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__23030__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fail","fail",(1706214930))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",(-406056002))),(function (){var x__23030__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expected","expected",(1583670997))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actual","actual",(107306363))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",(-1331406371),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"not","not",(1044554643),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",(96507417),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"values__172__auto__","values__172__auto__",(-99694168),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__173__auto__","result__173__auto__",(-2138405185),null))], 0)));
});
/**
 * Returns generic assertion code for any test, including macros, Java
 *   method calls, or isolated symbols.
 */
cljs.test$macros.assert_any = (function cljs$test$macros$assert_any(msg,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"value__174__auto__","value__174__auto__",(594001386),null)),(function (){var x__23030__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"value__174__auto__","value__174__auto__",(594001386),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__23030__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pass","pass",(1574159993))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",(-406056002))),(function (){var x__23030__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expected","expected",(1583670997))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actual","actual",(107306363))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"value__174__auto__","value__174__auto__",(594001386),null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__23030__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fail","fail",(1706214930))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",(-406056002))),(function (){var x__23030__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expected","expected",(1583670997))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actual","actual",(107306363))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"value__174__auto__","value__174__auto__",(594001386),null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"value__174__auto__","value__174__auto__",(594001386),null))], 0)));
});
var ret__23352__auto___3005 = cljs.test$macros.cljs_output_dir = (function cljs$test$macros$cljs_output_dir(_AMPERSAND_form,_AMPERSAND_env){
var map__3003 = cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$0();
var map__3003__$1 = ((((!((map__3003 == null)))?((((map__3003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3003):map__3003);
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3003__$1,new cljs.core.Keyword(null,"output-dir","output-dir",(-290956991)));
var or__22217__auto__ = output_dir;
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return "out";
}
});
cljs.test$macros.cljs_output_dir.cljs$lang$macro = true;

if(typeof cljs.test$macros.assert_expr !== 'undefined'){
} else {
cljs.test$macros.assert_expr = (function (){var method_table__23132__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23133__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23134__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23135__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.test$macros","assert-expr"),((function (method_table__23132__auto__,prefer_table__23133__auto__,method_cache__23134__auto__,cached_hierarchy__23135__auto__,hierarchy__23136__auto__){
return (function (menv,msg,form){
if((form == null)){
return new cljs.core.Keyword(null,"always-fail","always-fail",(-1303875085));
} else {
if(cljs.core.seq_QMARK_(form)){
return cljs.core.first(form);
} else {
return new cljs.core.Keyword(null,"default","default",(-1987822328));

}
}
});})(method_table__23132__auto__,prefer_table__23133__auto__,method_cache__23134__auto__,cached_hierarchy__23135__auto__,hierarchy__23136__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23136__auto__,method_table__23132__auto__,prefer_table__23133__auto__,method_cache__23134__auto__,cached_hierarchy__23135__auto__));
})();
}
cljs.test$macros.assert_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"always-fail","always-fail",(-1303875085)),(function (menv,msg,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__23030__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fail","fail",(1706214930))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",(-406056002))),(function (){var x__23030__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
}));
cljs.test$macros.assert_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (menv,msg,form){
if(cljs.core.truth_((function (){var and__22202__auto__ = cljs.core.sequential_QMARK_(form);
if(and__22202__auto__){
return cljs.test$macros.function_QMARK_(menv,cljs.core.first(form));
} else {
return and__22202__auto__;
}
})())){
return cljs.test$macros.assert_predicate(msg,form);
} else {
return cljs.test$macros.assert_any(msg,form);
}
}));
cljs.test$macros.assert_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"instance?","instance?",(1075939923),null),(function (menv,msg,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"klass__175__auto__","klass__175__auto__",(708767607),null)),(function (){var x__23030__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(1));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"object__176__auto__","object__176__auto__",(2110667441),null)),(function (){var x__23030__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__177__auto__","result__177__auto__",(-1153595947),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",(2044751870),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"klass__175__auto__","klass__175__auto__",(708767607),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"object__176__auto__","object__176__auto__",(2110667441),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__177__auto__","result__177__auto__",(-1153595947),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__23030__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pass","pass",(1574159993))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",(-406056002))),(function (){var x__23030__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expected","expected",(1583670997))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actual","actual",(107306363))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","type","cljs.core/type",(-821761154),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"object__176__auto__","object__176__auto__",(2110667441),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__23030__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fail","fail",(1706214930))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",(-406056002))),(function (){var x__23030__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expected","expected",(1583670997))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actual","actual",(107306363))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","type","cljs.core/type",(-821761154),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"object__176__auto__","object__176__auto__",(2110667441),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__177__auto__","result__177__auto__",(-1153595947),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
}));
cljs.test$macros.assert_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"thrown?","thrown?",(839971709),null),(function (menv,msg,form){
var klass = cljs.core.second(form);
var body = cljs.core.nthnext(form,(2));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",(-1273693247),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__23030__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fail","fail",(1706214930))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",(-406056002))),(function (){var x__23030__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expected","expected",(1583670997))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actual","actual",(107306363))),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"catch","catch",(-1616370245),null)),(function (){var x__23030__auto__ = klass;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__178__auto__","e__178__auto__",(-287334758),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__23030__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pass","pass",(1574159993))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",(-406056002))),(function (){var x__23030__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expected","expected",(1583670997))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actual","actual",(107306363))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__178__auto__","e__178__auto__",(-287334758),null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__178__auto__","e__178__auto__",(-287334758),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
}));
cljs.test$macros.assert_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"thrown-with-msg?","thrown-with-msg?",(1169763203),null),(function (menv,msg,form){
var klass = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(1));
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2));
var body = cljs.core.nthnext(form,(3));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",(-1273693247),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__23030__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fail","fail",(1706214930))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",(-406056002))),(function (){var x__23030__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expected","expected",(1583670997))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actual","actual",(107306363))),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"catch","catch",(-1616370245),null)),(function (){var x__23030__auto__ = klass;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__179__auto__","e__179__auto__",(1658585038),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__180__auto__","m__180__auto__",(-68182462),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-message",".-message",(-1827250821),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__179__auto__","e__179__auto__",(1658585038),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","re-find","cljs.core/re-find",(745076500),null)),(function (){var x__23030__auto__ = re;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__180__auto__","m__180__auto__",(-68182462),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__23030__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pass","pass",(1574159993))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",(-406056002))),(function (){var x__23030__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expected","expected",(1583670997))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actual","actual",(107306363))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__179__auto__","e__179__auto__",(1658585038),null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__23030__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fail","fail",(1706214930))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",(-406056002))),(function (){var x__23030__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expected","expected",(1583670997))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actual","actual",(107306363))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__179__auto__","e__179__auto__",(1658585038),null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__179__auto__","e__179__auto__",(1658585038),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
}));
var ret__23352__auto___3006 = /**
 * Used by the 'is' macro to catch unexpected exceptions.
 *   You don't call this.
 */
cljs.test$macros.try_expr = (function cljs$test$macros$try_expr(_AMPERSAND_form,_AMPERSAND_env,msg,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",(-1273693247),null)),(function (){var x__23030__auto__ = (cljs.test$macros.assert_expr.cljs$core$IFn$_invoke$arity$3 ? cljs.test$macros.assert_expr.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,msg,form) : cljs.test$macros.assert_expr(_AMPERSAND_env,msg,form));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"catch","catch",(-1616370245),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"default","default",(-1987822328))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"t__181__auto__","t__181__auto__",(-1360661528),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__23030__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",(-978969032))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",(-406056002))),(function (){var x__23030__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expected","expected",(1583670997))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actual","actual",(107306363))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"t__181__auto__","t__181__auto__",(-1360661528),null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});
cljs.test$macros.try_expr.cljs$lang$macro = true;

var ret__23352__auto___3009 = (function (){
/**
 * Generic assertion macro.  'form' is any predicate test.
 *   'msg' is an optional message to attach to the assertion.
 *   
 *   Example: (is (= 4 (+ 2 2)) "Two plus two should be 4")
 * 
 *   Special forms:
 * 
 *   (is (thrown? c body)) checks that an instance of c is thrown from
 *   body, fails if not; then returns the thing thrown.
 * 
 *   (is (thrown-with-msg? c re body)) checks that an instance of c is
 *   thrown AND that the message on the exception matches (with
 *   re-find) the regular expression re.
 */
cljs.test$macros.is = (function cljs$test$macros$is(var_args){
var G__3008 = arguments.length;
switch (G__3008) {
case (3):
return cljs.test$macros.is.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.test$macros.is.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.test$macros.is.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","is","cljs.test/is",(261278235),null)),(function (){var x__23030__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null)], 0)));
});

cljs.test$macros.is.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,form,msg){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","try-expr","cljs.test/try-expr",(1224770602),null)),(function (){var x__23030__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.test$macros.is.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.test$macros.is.cljs$lang$macro = true;

var ret__23352__auto___3016 = (function (){
/**
 * Checks multiple assertions with a template expression.
 *   See clojure.template/do-template for an explanation of
 *   templates.
 * 
 *   Example: (are [x y] (= x y)  
 *              2 (+ 1 1)
 *              4 (* 2 2))
 *   Expands to: 
 *         (do (is (= 2 (+ 1 1)))
 *             (is (= 4 (* 2 2))))
 * 
 *   Note: This breaks some reporting features, such as line numbers.
 */
cljs.test$macros.are = (function cljs$test$macros$are(var_args){
var args__23329__auto__ = [];
var len__23326__auto___3017 = arguments.length;
var i__23327__auto___3018 = (0);
while(true){
if((i__23327__auto___3018 < len__23326__auto___3017)){
args__23329__auto__.push((arguments[i__23327__auto___3018]));

var G__3019 = (i__23327__auto___3018 + (1));
i__23327__auto___3018 = G__3019;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((4) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((4)),(0),null)):null);
return cljs.test$macros.are.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23330__auto__);
});

cljs.test$macros.are.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,argv,expr,args){
if(((cljs.core.empty_QMARK_(argv)) && (cljs.core.empty_QMARK_(args))) || (((cljs.core.count(argv) > (0))) && ((cljs.core.count(args) > (0))) && ((cljs.core.mod(cljs.core.count(args),cljs.core.count(argv)) === (0))))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.template","do-template","clojure.template/do-template",(-1006634288),null)),(function (){var x__23030__auto__ = argv;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","is","cljs.test/is",(261278235),null)),(function (){var x__23030__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),args], 0)));
} else {
throw (new Error("The number of args doesn't match are's argv."));
}
});

cljs.test$macros.are.cljs$lang$maxFixedArity = (4);

cljs.test$macros.are.cljs$lang$applyTo = (function (seq3011){
var G__3012 = cljs.core.first(seq3011);
var seq3011__$1 = cljs.core.next(seq3011);
var G__3013 = cljs.core.first(seq3011__$1);
var seq3011__$2 = cljs.core.next(seq3011__$1);
var G__3014 = cljs.core.first(seq3011__$2);
var seq3011__$3 = cljs.core.next(seq3011__$2);
var G__3015 = cljs.core.first(seq3011__$3);
var seq3011__$4 = cljs.core.next(seq3011__$3);
return cljs.test$macros.are.cljs$core$IFn$_invoke$arity$variadic(G__3012,G__3013,G__3014,G__3015,seq3011__$4);
});

return null;
})()
;
cljs.test$macros.are.cljs$lang$macro = true;

var ret__23352__auto___3024 = (function (){
/**
 * Adds a new string to the list of testing contexts.  May be nested,
 *   but must occur inside a test function (deftest).
 */
cljs.test$macros.testing = (function cljs$test$macros$testing(var_args){
var args__23329__auto__ = [];
var len__23326__auto___3025 = arguments.length;
var i__23327__auto___3026 = (0);
while(true){
if((i__23327__auto___3026 < len__23326__auto___3025)){
args__23329__auto__.push((arguments[i__23327__auto___3026]));

var G__3027 = (i__23327__auto___3026 + (1));
i__23327__auto___3026 = G__3027;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((3) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((3)),(0),null)):null);
return cljs.test$macros.testing.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23330__auto__);
});

cljs.test$macros.testing.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,string,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","update-current-env!","cljs.test/update-current-env!",(-250761520),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",(-1485646523))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",(-460750931),null)),(function (){var x__23030__auto__ = string;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",(-1273693247),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",(-1065347064),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","update-current-env!","cljs.test/update-current-env!",(-250761520),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",(-1485646523))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",(-285075455),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.test$macros.testing.cljs$lang$maxFixedArity = (3);

cljs.test$macros.testing.cljs$lang$applyTo = (function (seq3020){
var G__3021 = cljs.core.first(seq3020);
var seq3020__$1 = cljs.core.next(seq3020);
var G__3022 = cljs.core.first(seq3020__$1);
var seq3020__$2 = cljs.core.next(seq3020__$1);
var G__3023 = cljs.core.first(seq3020__$2);
var seq3020__$3 = cljs.core.next(seq3020__$2);
return cljs.test$macros.testing.cljs$core$IFn$_invoke$arity$variadic(G__3021,G__3022,G__3023,seq3020__$3);
});

return null;
})()
;
cljs.test$macros.testing.cljs$lang$macro = true;

var ret__23352__auto___3032 = (function (){
/**
 * Defines a test function with no arguments.  Test functions may call
 *   other tests, so tests may be composed.  If you compose tests, you
 *   should also define a function named test-ns-hook; run-tests will
 *   call test-ns-hook instead of testing all vars.
 * 
 *   Note: Actually, the test body goes in the :test metadata on the var,
 *   and the real function (the value of the var) calls test-var on
 *   itself.
 * 
 *   When cljs.analyzer/*load-tests* is false, deftest is ignored.
 */
cljs.test$macros.deftest = (function cljs$test$macros$deftest(var_args){
var args__23329__auto__ = [];
var len__23326__auto___3033 = arguments.length;
var i__23327__auto___3034 = (0);
while(true){
if((i__23327__auto___3034 < len__23326__auto___3033)){
args__23329__auto__.push((arguments[i__23327__auto___3034]));

var G__3035 = (i__23327__auto___3034 + (1));
i__23327__auto___3034 = G__3035;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((3) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((3)),(0),null)):null);
return cljs.test$macros.deftest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23330__auto__);
});

cljs.test$macros.deftest.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
if(cljs.analyzer._STAR_load_tests_STAR_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",(597100991),null)),(function (){var x__23030__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,new cljs.core.Keyword(null,"test","test",(577538877)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","test-var","cljs.test/test-var",(639352116),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$var",".-cljs$lang$var",(416918061),null)),(function (){var x__23030__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",(250714521),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$var",".-cljs$lang$var",(416918061),null)),(function (){var x__23030__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",(870848730),null)),(function (){var x__23030__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
} else {
return null;
}
});

cljs.test$macros.deftest.cljs$lang$maxFixedArity = (3);

cljs.test$macros.deftest.cljs$lang$applyTo = (function (seq3028){
var G__3029 = cljs.core.first(seq3028);
var seq3028__$1 = cljs.core.next(seq3028);
var G__3030 = cljs.core.first(seq3028__$1);
var seq3028__$2 = cljs.core.next(seq3028__$1);
var G__3031 = cljs.core.first(seq3028__$2);
var seq3028__$3 = cljs.core.next(seq3028__$2);
return cljs.test$macros.deftest.cljs$core$IFn$_invoke$arity$variadic(G__3029,G__3030,G__3031,seq3028__$3);
});

return null;
})()
;
cljs.test$macros.deftest.cljs$lang$macro = true;

var ret__23352__auto___3040 = (function (){
/**
 * Wraps body as a CPS function that can be returned from a test to
 *   continue asynchronously.  Binds done to a function that must be
 *   invoked once and from an async context after any assertions.
 * 
 *   (deftest example-with-timeout
 *  (async done
 *    (js/setTimeout (fn []
 *                     ;; make assertions in async context...
 *                     (done) ;; ...then call done
 *                     )
 *                   0)))
 */
cljs.test$macros.async = (function cljs$test$macros$async(var_args){
var args__23329__auto__ = [];
var len__23326__auto___3041 = arguments.length;
var i__23327__auto___3042 = (0);
while(true){
if((i__23327__auto___3042 < len__23326__auto___3041)){
args__23329__auto__.push((arguments[i__23327__auto___3042]));

var G__3043 = (i__23327__auto___3042 + (1));
i__23327__auto___3042 = G__3043;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((3) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((3)),(0),null)):null);
return cljs.test$macros.async.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23330__auto__);
});

cljs.test$macros.async.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,done,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reify","cljs.core/reify",(463577556),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","IAsyncTest","cljs.test/IAsyncTest",(-885937316),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",(-920223129),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-invoke","-invoke",(1821963807),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___182__auto__","___182__auto__",(1511606403),null)),(function (){var x__23030__auto__ = done;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.test$macros.async.cljs$lang$maxFixedArity = (3);

cljs.test$macros.async.cljs$lang$applyTo = (function (seq3036){
var G__3037 = cljs.core.first(seq3036);
var seq3036__$1 = cljs.core.next(seq3036);
var G__3038 = cljs.core.first(seq3036__$1);
var seq3036__$2 = cljs.core.next(seq3036__$1);
var G__3039 = cljs.core.first(seq3036__$2);
var seq3036__$3 = cljs.core.next(seq3036__$2);
return cljs.test$macros.async.cljs$core$IFn$_invoke$arity$variadic(G__3037,G__3038,G__3039,seq3036__$3);
});

return null;
})()
;
cljs.test$macros.async.cljs$lang$macro = true;

cljs.test$macros.ns_QMARK_ = (function cljs$test$macros$ns_QMARK_(x){
return (cljs.core.seq_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Symbol(null,"quote","quote",(1377916282),null)));
});
var ret__23352__auto___3052 = (function (){
/**
 * Like test-vars, but returns a block for further composition and
 *   later execution.
 */
cljs.test$macros.run_tests_block = (function cljs$test$macros$run_tests_block(var_args){
var args__23329__auto__ = [];
var len__23326__auto___3053 = arguments.length;
var i__23327__auto___3054 = (0);
while(true){
if((i__23327__auto___3054 < len__23326__auto___3053)){
args__23329__auto__.push((arguments[i__23327__auto___3054]));

var G__3055 = (i__23327__auto___3054 + (1));
i__23327__auto___3054 = G__3055;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((3) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((3)),(0),null)):null);
return cljs.test$macros.run_tests_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23330__auto__);
});

cljs.test$macros.run_tests_block.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,env_or_ns,namespaces){
if(cljs.core.every_QMARK_((function (p__3048){
var vec__3049 = p__3048;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3049,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3049,(1),null);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote,new cljs.core.Symbol(null,"quote","quote",(1377916282),null))) && ((ns instanceof cljs.core.Symbol));
}),namespaces)){
} else {
throw (new Error(["Assert failed: ","All arguments to run-tests must be quoted symbols","\n","(every? (fn [[quote ns]] (and (= quote (quote quote)) (symbol? ns))) namespaces)"].join('')));
}

var is_ns = cljs.test$macros.ns_QMARK_(env_or_ns);
var env = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("env");
var summary = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("summary");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__23030__auto__ = env;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = (cljs.core.truth_(is_ns)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","empty-env","cljs.test/empty-env",(849387048),null)))):env_or_ns);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = summary;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","volatile!","cljs.core/volatile!",(-829435536),null)),(function (){var x__23030__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"test","test",(577538877))),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pass","pass",(1574159993))),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fail","fail",(1706214930))),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",(-978969032))),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"summary","summary",(380847952)))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",(-1133584918),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (is_ns,env,summary){
return (function (ns){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",(-1133584918),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","test-ns-block","cljs.test/test-ns-block",(844162337),null)),(function (){var x__23030__auto__ = env;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = ns;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vswap!","cljs.core/vswap!",(-2062892188),null)),(function (){var x__23030__auto__ = summary;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","partial","cljs.core/partial",(1483172485),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","merge-with","cljs.core/merge-with",(366771213),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","+","cljs.core/+",(-342754435),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"report-counters","report-counters",(-1702609242))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","get-and-clear-env!","cljs.test/get-and-clear-env!",(-1402633791),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});})(is_ns,env,summary))
,(cljs.core.truth_(is_ns)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [env_or_ns], null),namespaces):namespaces)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","set-env!","cljs.test/set-env!",(-702147289),null)),(function (){var x__23030__auto__ = env;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null)),(function (){var x__23030__auto__ = summary;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","report","cljs.test/report",(-1933655233),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",(322326297),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null)),(function (){var x__23030__auto__ = summary;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-run-tests","end-run-tests",(267300563)))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","clear-env!","cljs.test/clear-env!",(241475586),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.test$macros.run_tests_block.cljs$lang$maxFixedArity = (3);

cljs.test$macros.run_tests_block.cljs$lang$applyTo = (function (seq3044){
var G__3045 = cljs.core.first(seq3044);
var seq3044__$1 = cljs.core.next(seq3044);
var G__3046 = cljs.core.first(seq3044__$1);
var seq3044__$2 = cljs.core.next(seq3044__$1);
var G__3047 = cljs.core.first(seq3044__$2);
var seq3044__$3 = cljs.core.next(seq3044__$2);
return cljs.test$macros.run_tests_block.cljs$core$IFn$_invoke$arity$variadic(G__3045,G__3046,G__3047,seq3044__$3);
});

return null;
})()
;
cljs.test$macros.run_tests_block.cljs$lang$macro = true;

var ret__23352__auto___3062 = (function (){
/**
 * Runs all tests in the given namespaces; prints results.
 *   Defaults to current namespace if none given. Does not return a meaningful
 *   value due to the possiblity of asynchronous execution. To detect test
 *   completion add a :end-run-tests method case to the cljs.test/report
 *   multimethod.
 */
cljs.test$macros.run_tests = (function cljs$test$macros$run_tests(var_args){
var G__3061 = arguments.length;
switch (G__3061) {
case (2):
return cljs.test$macros.run_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.test$macros.run_tests.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__23340__auto__ = [];
var len__23326__auto___3064 = arguments.length;
var i__23327__auto___3065 = (0);
while(true){
if((i__23327__auto___3065 < len__23326__auto___3064)){
args_arr__23340__auto__.push((arguments[i__23327__auto___3065]));

var G__3066 = (i__23327__auto___3065 + (1));
i__23327__auto___3065 = G__3066;
continue;
} else {
}
break;
}

var argseq__23341__auto__ = (new cljs.core.IndexedSeq(args_arr__23340__auto__.slice((3)),(0),null));
return cljs.test$macros.run_tests.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23341__auto__);

}
});

cljs.test$macros.run_tests.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","run-tests","cljs.test/run-tests",(-878084023),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","empty-env","cljs.test/empty-env",(849387048),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = cljs.analyzer._STAR_cljs_ns_STAR_;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.test$macros.run_tests.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,env_or_ns){
if(cljs.core.truth_(cljs.test$macros.ns_QMARK_(env_or_ns))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","run-tests","cljs.test/run-tests",(-878084023),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","empty-env","cljs.test/empty-env",(849387048),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = env_or_ns;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","run-tests","cljs.test/run-tests",(-878084023),null)),(function (){var x__23030__auto__ = env_or_ns;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = cljs.analyzer._STAR_cljs_ns_STAR_;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
}
});

cljs.test$macros.run_tests.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,env_or_ns,namespaces){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","run-block","cljs.test/run-block",(-834586193),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","run-tests-block","cljs.test/run-tests-block",(915419136),null)),(function (){var x__23030__auto__ = env_or_ns;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([namespaces], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
});

cljs.test$macros.run_tests.cljs$lang$applyTo = (function (seq3057){
var G__3058 = cljs.core.first(seq3057);
var seq3057__$1 = cljs.core.next(seq3057);
var G__3059 = cljs.core.first(seq3057__$1);
var seq3057__$2 = cljs.core.next(seq3057__$1);
var G__3060 = cljs.core.first(seq3057__$2);
var seq3057__$3 = cljs.core.next(seq3057__$2);
return cljs.test$macros.run_tests.cljs$core$IFn$_invoke$arity$variadic(G__3058,G__3059,G__3060,seq3057__$3);
});

cljs.test$macros.run_tests.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.test$macros.run_tests.cljs$lang$macro = true;

var ret__23352__auto___3070 = (function (){
/**
 * Runs all tests in all namespaces; prints results.
 *   Optional argument is a regular expression; only namespaces with
 *   names matching the regular expression (with re-matches) will be
 *   tested.
 */
cljs.test$macros.run_all_tests = (function cljs$test$macros$run_all_tests(var_args){
var G__3068 = arguments.length;
switch (G__3068) {
case (2):
return cljs.test$macros.run_all_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.test$macros.run_all_tests.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.test$macros.run_all_tests.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.test$macros.run_all_tests.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","run-all-tests","cljs.test/run-all-tests",(-154085674),null)),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","empty-env","cljs.test/empty-env",(849387048),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.test$macros.run_all_tests.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,re){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","run-all-tests","cljs.test/run-all-tests",(-154085674),null)),(function (){var x__23030__auto__ = re;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","empty-env","cljs.test/empty-env",(849387048),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.test$macros.run_all_tests.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,re,env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","run-tests","cljs.test/run-tests",(-878084023),null)),(function (){var x__23030__auto__ = env;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ns){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = ns;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
}),(function (){var G__3069 = cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(re)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__3069){
return (function (p1__183_SHARP_){
return cljs.core.re_matches(re,cljs.core.name(p1__183_SHARP_));
});})(G__3069))
,G__3069);
} else {
return G__3069;
}
})())], 0)));
});

cljs.test$macros.run_all_tests.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.test$macros.run_all_tests.cljs$lang$macro = true;

var ret__23352__auto___3172 = cljs.test$macros.test_all_vars_block = (function cljs$test$macros$test_all_vars_block(_AMPERSAND_form,_AMPERSAND_env,p__3072){
var vec__3073 = p__3072;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3073,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3073,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"env__184__auto__","env__184__auto__",(429106125),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","get-current-env","cljs.test/get-current-env",(1274262302),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",(-1133584918),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"env__184__auto__","env__184__auto__",(429106125),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","set-env!","cljs.test/set-env!",(-702147289),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","empty-env","cljs.test/empty-env",(849387048),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = (cljs.core.truth_(cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"cljs-test-once-fixtures","cljs-test-once-fixtures",(1554034706),null)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","update-current-env!","cljs.test/update-current-env!",(-250761520),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"once-fixtures","once-fixtures",(1253947167))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",(322326297),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = ns;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),"cljs-test-once-fixtures");
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = (cljs.core.truth_(cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"cljs-test-each-fixtures","cljs-test-each-fixtures",(2061085390),null)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","update-current-env!","cljs.test/update-current-env!",(-250761520),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"each-fixtures","each-fixtures",(802243977))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",(322326297),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = ns;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),"cljs-test-each-fixtures");
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","test-vars-block","cljs.test/test-vars-block",(-257828355),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__3073,quote,ns){
return (function (p__3160){
var vec__3161 = p__3160;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3161,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3161,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",(870848730),null)),(function (){var x__23030__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.name(k));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
});})(vec__3073,quote,ns))
,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (vec__3073,quote,ns){
return (function (p__3164){
var vec__3165 = p__3164;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3165,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3165,(1),null);
return new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(v);
});})(vec__3073,quote,ns))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__3073,quote,ns){
return (function (p__3168){
var vec__3169 = p__3168;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3169,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3169,(1),null);
return new cljs.core.Keyword(null,"test","test",(577538877)).cljs$core$IFn$_invoke$arity$1(v);
});})(vec__3073,quote,ns))
,cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$1(ns)))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"env__184__auto__","env__184__auto__",(429106125),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","clear-env!","cljs.test/clear-env!",(241475586),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});
cljs.test$macros.test_all_vars_block.cljs$lang$macro = true;

var ret__23352__auto___3177 = /**
 * Calls test-vars on every var with :test metadata interned in the
 *   namespace, with fixtures.
 */
cljs.test$macros.test_all_vars = (function cljs$test$macros$test_all_vars(_AMPERSAND_form,_AMPERSAND_env,p__3173){
var vec__3174 = p__3173;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3174,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3174,(1),null);
var form = vec__3174;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","run-block","cljs.test/run-block",(-834586193),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",(-1133584918),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","test-all-vars-block","cljs.test/test-all-vars-block",(-1896786139),null)),(function (){var x__23030__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","report","cljs.test/report",(-1933655233),null)),(function (){var x__23030__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-test-all-vars","end-test-all-vars",(548827253))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ns","ns",(441598760))),(function (){var x__23030__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
});
cljs.test$macros.test_all_vars.cljs$lang$macro = true;

var ret__23352__auto___3182 = /**
 * Like test-ns, but returns a block for further composition and
 *   later execution.  Does not clear the current env.
 */
cljs.test$macros.test_ns_block = (function cljs$test$macros$test_ns_block(_AMPERSAND_form,_AMPERSAND_env,env,p__3178){
var vec__3179 = p__3178;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3179,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3179,(1),null);
var form = vec__3179;
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote,new cljs.core.Symbol(null,"quote","quote",(1377916282),null))) && ((ns instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to test-ns must be a quoted symbol","\n","(and (= quote (quote quote)) (symbol? ns))"].join('')));
}

if(cljs.core.truth_(cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$1(ns))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," does not exist"].join('')),"\n","(ana-api/find-ns ns)"].join('')));
}

return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","set-env!","cljs.test/set-env!",(-702147289),null)),(function (){var x__23030__auto__ = env;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__23030__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",(-1701237033))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ns","ns",(441598760))),(function (){var x__23030__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = (function (){var temp__21984__auto__ = cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"test-ns-hook","test-ns-hook",(6852467),null));
if(cljs.core.truth_(temp__21984__auto__)){
var v = temp__21984__auto__;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__23030__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),"test-ns-hook");
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","block","cljs.test/block",(-1587771553),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","test-all-vars-block","cljs.test/test-all-vars-block",(-1896786139),null)),(function (){var x__23030__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
}
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__23030__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-test-ns","end-test-ns",(1620675645))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ns","ns",(441598760))),(function (){var x__23030__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
});
cljs.test$macros.test_ns_block.cljs$lang$macro = true;

var ret__23352__auto___3189 = (function (){
/**
 * If the namespace defines a function named test-ns-hook, calls that.
 *   Otherwise, calls test-all-vars on the namespace.  'ns' is a
 *   namespace object or a symbol.
 * 
 *   Internally binds *report-counters* to a ref initialized to
 *   *initial-report-counters*.  
 */
cljs.test$macros.test_ns = (function cljs$test$macros$test_ns(var_args){
var G__3184 = arguments.length;
switch (G__3184) {
case (3):
return cljs.test$macros.test_ns.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.test$macros.test_ns.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.test$macros.test_ns.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,ns){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","test-ns","cljs.test/test-ns",(1574260710),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","empty-env","cljs.test/empty-env",(849387048),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = ns;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.test$macros.test_ns.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,env,p__3185){
var vec__3186 = p__3185;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3186,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3186,(1),null);
var form = vec__3186;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","run-block","cljs.test/run-block",(-834586193),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",(-1133584918),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","test-ns-block","cljs.test/test-ns-block",(844162337),null)),(function (){var x__23030__auto__ = env;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","clear-env!","cljs.test/clear-env!",(241475586),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
});

cljs.test$macros.test_ns.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.test$macros.test_ns.cljs$lang$macro = true;

var ret__23352__auto___3204 = (function (){
cljs.test$macros.use_fixtures = (function cljs$test$macros$use_fixtures(var_args){
var args__23329__auto__ = [];
var len__23326__auto___3205 = arguments.length;
var i__23327__auto___3206 = (0);
while(true){
if((i__23327__auto___3206 < len__23326__auto___3205)){
args__23329__auto__.push((arguments[i__23327__auto___3206]));

var G__3207 = (i__23327__auto___3206 + (1));
i__23327__auto___3206 = G__3207;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((3) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((3)),(0),null)):null);
return cljs.test$macros.use_fixtures.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23330__auto__);
});

cljs.test$macros.use_fixtures.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,fns){
var pred__3195 = cljs.core._EQ_;
var expr__3196 = type;
if(cljs.core.truth_((function (){var G__3198 = new cljs.core.Keyword(null,"once","once",(-262568523));
var G__3199 = expr__3196;
return (pred__3195.cljs$core$IFn$_invoke$arity$2 ? pred__3195.cljs$core$IFn$_invoke$arity$2(G__3198,G__3199) : pred__3195(G__3198,G__3199));
})())){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",(597100991),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs-test-once-fixtures","cljs-test-once-fixtures",(1554034706),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fns)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
} else {
if(cljs.core.truth_((function (){var G__3200 = new cljs.core.Keyword(null,"each","each",(940016129));
var G__3201 = expr__3196;
return (pred__3195.cljs$core$IFn$_invoke$arity$2 ? pred__3195.cljs$core$IFn$_invoke$arity$2(G__3200,G__3201) : pred__3195(G__3200,G__3201));
})())){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",(597100991),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs-test-each-fixtures","cljs-test-each-fixtures",(2061085390),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fns)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
} else {
if(cljs.core.truth_((function (){var G__3202 = new cljs.core.Keyword(null,"else","else",(-1508377146));
var G__3203 = expr__3196;
return (pred__3195.cljs$core$IFn$_invoke$arity$2 ? pred__3195.cljs$core$IFn$_invoke$arity$2(G__3202,G__3203) : pred__3195(G__3202,G__3203));
})())){
throw (new Error("First argument to cljs.test/use-fixtures must be :once or :each"));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__3196)].join('')));
}
}
}
});

cljs.test$macros.use_fixtures.cljs$lang$maxFixedArity = (3);

cljs.test$macros.use_fixtures.cljs$lang$applyTo = (function (seq3191){
var G__3192 = cljs.core.first(seq3191);
var seq3191__$1 = cljs.core.next(seq3191);
var G__3193 = cljs.core.first(seq3191__$1);
var seq3191__$2 = cljs.core.next(seq3191__$1);
var G__3194 = cljs.core.first(seq3191__$2);
var seq3191__$3 = cljs.core.next(seq3191__$2);
return cljs.test$macros.use_fixtures.cljs$core$IFn$_invoke$arity$variadic(G__3192,G__3193,G__3194,seq3191__$3);
});

return null;
})()
;
cljs.test$macros.use_fixtures.cljs$lang$macro = true;

