goog.provide("cljs.test$macros");
/**
 * Returns true if argument is a function or a symbol that resolves to
 *   a function (not a macro).
 */
(function (){
cljs.test$macros.function_QMARK_ = (function cljs$test$macros$function_QMARK_(menv,x){
var and__23067__auto__ = (x instanceof cljs.core.Symbol);
if(and__23067__auto__){
return new cljs.core.Keyword(null,"fn-var","fn-var",(1086204730)).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.api.resolve(menv,x));
} else {
return and__23067__auto__;
}
}); return (
new cljs.core.Var(function(){return cljs.test$macros.function_QMARK_;},new cljs.core.Symbol("cljs.test$macros","function?","cljs.test$macros/function?",(-1653294764),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"function?","function?",(1729250129),null),"cljs/test.cljc",(16),(1),(19),(19),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"menv","menv",(-98338501),null),new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Returns true if argument is a function or a symbol that resolves to\n  a function (not a macro).",(cljs.core.truth_(cljs.test$macros.function_QMARK_)?cljs.test$macros.function_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Returns generic assertion code for any functional predicate.  The
 *   'expected' argument to 'report' will contains the original form, the
 *   'actual' argument will contain the form with all its sub-forms
 *   evaluated.  If the predicate returns false, the 'actual' form will
 *   be wrapped in (not...).
 */
(function (){
cljs.test$macros.assert_predicate = (function cljs$test$macros$assert_predicate(msg,form){
var args = cljs.core.rest(form);
var pred = cljs.core.first(form);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"values__36__auto__","values__36__auto__",(-13170098),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",(-1331406371),null)),args));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__37__auto__","result__37__auto__",(1079184214),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",(1757277831),null)),(function (){var x__25689__auto__ = pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"values__36__auto__","values__36__auto__",(-13170098),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__37__auto__","result__37__auto__",(1079184214),null)),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__25689__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pass","pass",(1574159993))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",(-406056002))),(function (){var x__25689__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expected","expected",(1583670997))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actual","actual",(107306363))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",(96507417),null)),(function (){var x__25689__auto__ = pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"values__36__auto__","values__36__auto__",(-13170098),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__25689__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fail","fail",(1706214930))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",(-406056002))),(function (){var x__25689__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expected","expected",(1583670997))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actual","actual",(107306363))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",(-1331406371),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"not","not",(1044554643),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",(96507417),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"values__36__auto__","values__36__auto__",(-13170098),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__37__auto__","result__37__auto__",(1079184214),null))], 0)));
}); return (
new cljs.core.Var(function(){return cljs.test$macros.assert_predicate;},new cljs.core.Symbol("cljs.test$macros","assert-predicate","cljs.test$macros/assert-predicate",(1451767240),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"assert-predicate","assert-predicate",(1886261199),null),"cljs/test.cljc",(23),(1),(25),(25),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"msg","msg",(254428083),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null)),"Returns generic assertion code for any functional predicate.  The\n  'expected' argument to 'report' will contains the original form, the\n  'actual' argument will contain the form with all its sub-forms\n  evaluated.  If the predicate returns false, the 'actual' form will\n  be wrapped in (not...).",(cljs.core.truth_(cljs.test$macros.assert_predicate)?cljs.test$macros.assert_predicate.cljs$lang$test:null)])));})()
;
/**
 * Returns generic assertion code for any test, including macros, Java
 *   method calls, or isolated symbols.
 */
(function (){
cljs.test$macros.assert_any = (function cljs$test$macros$assert_any(msg,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"value__38__auto__","value__38__auto__",(-1269002447),null)),(function (){var x__25689__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"value__38__auto__","value__38__auto__",(-1269002447),null)),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__25689__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pass","pass",(1574159993))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",(-406056002))),(function (){var x__25689__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expected","expected",(1583670997))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actual","actual",(107306363))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"value__38__auto__","value__38__auto__",(-1269002447),null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__25689__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fail","fail",(1706214930))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",(-406056002))),(function (){var x__25689__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expected","expected",(1583670997))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actual","actual",(107306363))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"value__38__auto__","value__38__auto__",(-1269002447),null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"value__38__auto__","value__38__auto__",(-1269002447),null))], 0)));
}); return (
new cljs.core.Var(function(){return cljs.test$macros.assert_any;},new cljs.core.Symbol("cljs.test$macros","assert-any","cljs.test$macros/assert-any",(1106656934),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"assert-any","assert-any",(735315109),null),"cljs/test.cljc",(17),(1),(45),(45),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"msg","msg",(254428083),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null)),"Returns generic assertion code for any test, including macros, Java\n  method calls, or isolated symbols.",(cljs.core.truth_(cljs.test$macros.assert_any)?cljs.test$macros.assert_any.cljs$lang$test:null)])));})()
;
if(typeof cljs.test$macros.assert_expr !== 'undefined'){
} else {
(function (){
cljs.test$macros.assert_expr = (function (){var method_table__25779__auto__ = (function (){var G__219 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__219) : cljs.core.atom.call(null,G__219));
})();
var prefer_table__25780__auto__ = (function (){var G__220 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__220) : cljs.core.atom.call(null,G__220));
})();
var method_cache__25781__auto__ = (function (){var G__221 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__221) : cljs.core.atom.call(null,G__221));
})();
var cached_hierarchy__25782__auto__ = (function (){var G__222 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__222) : cljs.core.atom.call(null,G__222));
})();
var hierarchy__25783__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.test$macros","assert-expr"),((function (method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__,hierarchy__25783__auto__){
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
});})(method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__,hierarchy__25783__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__25783__auto__,method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__));
})(); return (
new cljs.core.Var(function(){return cljs.test$macros.assert_expr;},new cljs.core.Symbol("cljs.test$macros","assert-expr","cljs.test$macros/assert-expr",(-2031011801),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"assert-expr","assert-expr",(-1462436312),null),"cljs/test.cljc",(22),(1),(66),(66),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.test$macros.assert_expr)?cljs.test$macros.assert_expr.cljs$lang$test:null)])));})()
;
}
cljs.test$macros.assert_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"always-fail","always-fail",(-1303875085)),(function (menv,msg,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__25689__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fail","fail",(1706214930))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",(-406056002))),(function (){var x__25689__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.test$macros.assert_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (menv,msg,form){
if(cljs.core.truth_((function (){var and__23067__auto__ = cljs.core.sequential_QMARK_(form);
if(and__23067__auto__){
return cljs.test$macros.function_QMARK_(menv,cljs.core.first(form));
} else {
return and__23067__auto__;
}
})())){
return cljs.test$macros.assert_predicate(msg,form);
} else {
return cljs.test$macros.assert_any(msg,form);
}
}));
cljs.test$macros.assert_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"instance?","instance?",(1075939923),null),(function (menv,msg,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"klass__39__auto__","klass__39__auto__",(-1017053852),null)),(function (){var x__25689__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(1));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"object__40__auto__","object__40__auto__",(504692716),null)),(function (){var x__25689__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__41__auto__","result__41__auto__",(1658552182),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",(2044751870),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"klass__39__auto__","klass__39__auto__",(-1017053852),null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"object__40__auto__","object__40__auto__",(504692716),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__41__auto__","result__41__auto__",(1658552182),null)),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__25689__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pass","pass",(1574159993))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",(-406056002))),(function (){var x__25689__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expected","expected",(1583670997))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actual","actual",(107306363))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","type","cljs.core/type",(-821761154),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"object__40__auto__","object__40__auto__",(504692716),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__25689__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fail","fail",(1706214930))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",(-406056002))),(function (){var x__25689__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expected","expected",(1583670997))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actual","actual",(107306363))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","type","cljs.core/type",(-821761154),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"object__40__auto__","object__40__auto__",(504692716),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__41__auto__","result__41__auto__",(1658552182),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
}));
cljs.test$macros.assert_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"thrown?","thrown?",(839971709),null),(function (menv,msg,form){
var klass = cljs.core.second(form);
var body = cljs.core.nthnext(form,(2));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",(-1273693247),null)),body,cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__25689__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fail","fail",(1706214930))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",(-406056002))),(function (){var x__25689__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expected","expected",(1583670997))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actual","actual",(107306363))),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"catch","catch",(-1616370245),null)),(function (){var x__25689__auto__ = klass;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__42__auto__","e__42__auto__",(-1959750467),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__25689__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pass","pass",(1574159993))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",(-406056002))),(function (){var x__25689__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expected","expected",(1583670997))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actual","actual",(107306363))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__42__auto__","e__42__auto__",(-1959750467),null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__42__auto__","e__42__auto__",(-1959750467),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
}));
cljs.test$macros.assert_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"thrown-with-msg?","thrown-with-msg?",(1169763203),null),(function (menv,msg,form){
var klass = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(1));
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2));
var body = cljs.core.nthnext(form,(3));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",(-1273693247),null)),body,cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__25689__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fail","fail",(1706214930))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",(-406056002))),(function (){var x__25689__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expected","expected",(1583670997))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actual","actual",(107306363))),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"catch","catch",(-1616370245),null)),(function (){var x__25689__auto__ = klass;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__43__auto__","e__43__auto__",(-1608823684),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__44__auto__","m__44__auto__",(1759810919),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-message",".-message",(-1827250821),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__43__auto__","e__43__auto__",(-1608823684),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","re-find","cljs.core/re-find",(745076500),null)),(function (){var x__25689__auto__ = re;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__44__auto__","m__44__auto__",(1759810919),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__25689__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pass","pass",(1574159993))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",(-406056002))),(function (){var x__25689__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expected","expected",(1583670997))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actual","actual",(107306363))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__43__auto__","e__43__auto__",(-1608823684),null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__25689__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fail","fail",(1706214930))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",(-406056002))),(function (){var x__25689__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expected","expected",(1583670997))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actual","actual",(107306363))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__43__auto__","e__43__auto__",(-1608823684),null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__43__auto__","e__43__auto__",(-1608823684),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
}));
/**
 * Used by the 'is' macro to catch unexpected exceptions.
 *   You don't call this.
 */
(function (){
cljs.test$macros.try_expr = (function cljs$test$macros$try_expr(_AMPERSAND_form,_AMPERSAND_env,msg,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",(-1273693247),null)),(function (){var x__25689__auto__ = (cljs.test$macros.assert_expr.cljs$core$IFn$_invoke$arity$3 ? cljs.test$macros.assert_expr.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,msg,form) : cljs.test$macros.assert_expr.call(null,_AMPERSAND_env,msg,form));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"catch","catch",(-1616370245),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"default","default",(-1987822328))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"t__45__auto__","t__45__auto__",(-885159960),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__25689__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",(-978969032))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",(-406056002))),(function (){var x__25689__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expected","expected",(1583670997))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actual","actual",(107306363))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"t__45__auto__","t__45__auto__",(-885159960),null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
}); return (
new cljs.core.Var(function(){return cljs.test$macros.try_expr;},new cljs.core.Symbol("cljs.test$macros","try-expr","cljs.test$macros/try-expr",(991492281),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"try-expr","try-expr",(293516980),null),"cljs/test.cljc",(19),(1),(136),true,(136),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"msg","msg",(254428083),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null)),"Used by the 'is' macro to catch unexpected exceptions.\n  You don't call this.",(cljs.core.truth_(cljs.test$macros.try_expr)?cljs.test$macros.try_expr.cljs$lang$test:null)])));})()
;

cljs.test$macros.try_expr.cljs$lang$macro = true;
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
(function (){
cljs.test$macros.is = (function cljs$test$macros$is(var_args){
var args223 = [];
var len__25946__auto___226 = arguments.length;
var i__25947__auto___227 = (0);
while(true){
if((i__25947__auto___227 < len__25946__auto___226)){
args223.push((arguments[i__25947__auto___227]));

var G__228 = (i__25947__auto___227 + (1));
i__25947__auto___227 = G__228;
continue;
} else {
}
break;
}

var G__225 = args223.length;
switch (G__225) {
case (3):
return cljs.test$macros.is.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.test$macros.is.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((args223.length - (2)))].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.test$macros.is;},new cljs.core.Symbol("cljs.test$macros","is","cljs.test$macros/is",(300590698),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"is","is",(2009660525),null),"cljs/test.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"msg","msg",(254428083),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"msg","msg",(254428083),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(150),true,(150),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"msg","msg",(254428083),null)], null)),"Generic assertion macro.  'form' is any predicate test.\n  'msg' is an optional message to attach to the assertion.\n  \n  Example: (is (= 4 (+ 2 2)) \"Two plus two should be 4\")\n\n  Special forms:\n\n  (is (thrown? c body)) checks that an instance of c is thrown from\n  body, fails if not; then returns the thing thrown.\n\n  (is (thrown-with-msg? c re body)) checks that an instance of c is\n  thrown AND that the message on the exception matches (with\n  re-find) the regular expression re.",(cljs.core.truth_(cljs.test$macros.is)?cljs.test$macros.is.cljs$lang$test:null)])));})()
;

cljs.test$macros.is.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","is","cljs.test/is",(261278235),null)),(function (){var x__25689__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null)], 0)));
});

cljs.test$macros.is.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,form,msg){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","try-expr","cljs.test/try-expr",(1224770602),null)),(function (){var x__25689__auto__ = msg;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
});

cljs.test$macros.is.cljs$lang$maxFixedArity = (4);

new cljs.core.Var(function(){return cljs.test$macros.is;},new cljs.core.Symbol("cljs.test$macros","is","cljs.test$macros/is",(300590698),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"is","is",(2009660525),null),"cljs/test.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"msg","msg",(254428083),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"msg","msg",(254428083),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(150),true,(150),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"msg","msg",(254428083),null)], null)),"Generic assertion macro.  'form' is any predicate test.\n  'msg' is an optional message to attach to the assertion.\n  \n  Example: (is (= 4 (+ 2 2)) \"Two plus two should be 4\")\n\n  Special forms:\n\n  (is (thrown? c body)) checks that an instance of c is thrown from\n  body, fails if not; then returns the thing thrown.\n\n  (is (thrown-with-msg? c re body)) checks that an instance of c is\n  thrown AND that the message on the exception matches (with\n  re-find) the regular expression re.",(cljs.core.truth_(cljs.test$macros.is)?cljs.test$macros.is.cljs$lang$test:null)]));

cljs.test$macros.is.cljs$lang$macro = true;
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
(function (){
cljs.test$macros.are = (function cljs$test$macros$are(var_args){
var args__25948__auto__ = [];
var len__25946__auto___235 = arguments.length;
var i__25947__auto___236 = (0);
while(true){
if((i__25947__auto___236 < len__25946__auto___235)){
args__25948__auto__.push((arguments[i__25947__auto___236]));

var G__237 = (i__25947__auto___236 + (1));
i__25947__auto___236 = G__237;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((4) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((4)),(0),null)):null);
return cljs.test$macros.are.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return cljs.test$macros.are;},new cljs.core.Symbol("cljs.test$macros","are","cljs.test$macros/are",(1480070079),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"are","are",(1713001856),null),"cljs/test.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"argv","argv",(177740632),null),new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"argv","argv",(177740632),null),new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(168),true,(168),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"argv","argv",(177740632),null),new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Checks multiple assertions with a template expression.\n  See clojure.template/do-template for an explanation of\n  templates.\n\n  Example: (are [x y] (= x y)  \n                2 (+ 1 1)\n                4 (* 2 2))\n  Expands to: \n           (do (is (= 2 (+ 1 1)))\n               (is (= 4 (* 2 2))))\n\n  Note: This breaks some reporting features, such as line numbers.",(cljs.core.truth_(cljs.test$macros.are)?cljs.test$macros.are.cljs$lang$test:null)])));})()
;

cljs.test$macros.are.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,argv,expr,args){
if(((cljs.core.empty_QMARK_(argv)) && (cljs.core.empty_QMARK_(args))) || (((cljs.core.count(argv) > (0))) && ((cljs.core.count(args) > (0))) && ((cljs.core.mod(cljs.core.count(args),cljs.core.count(argv)) === (0))))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.template","do-template","clojure.template/do-template",(-1006634288),null)),(function (){var x__25689__auto__ = argv;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","is","cljs.test/is",(261278235),null)),(function (){var x__25689__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),args], 0)));
} else {
throw (new Error("The number of args doesn't match are's argv."));
}
});

cljs.test$macros.are.cljs$lang$maxFixedArity = (4);

cljs.test$macros.are.cljs$lang$applyTo = (function (seq230){
var G__231 = cljs.core.first(seq230);
var seq230__$1 = cljs.core.next(seq230);
var G__232 = cljs.core.first(seq230__$1);
var seq230__$2 = cljs.core.next(seq230__$1);
var G__233 = cljs.core.first(seq230__$2);
var seq230__$3 = cljs.core.next(seq230__$2);
var G__234 = cljs.core.first(seq230__$3);
var seq230__$4 = cljs.core.next(seq230__$3);
return cljs.test$macros.are.cljs$core$IFn$_invoke$arity$variadic(G__231,G__232,G__233,G__234,seq230__$4);
});

new cljs.core.Var(function(){return cljs.test$macros.are;},new cljs.core.Symbol("cljs.test$macros","are","cljs.test$macros/are",(1480070079),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"are","are",(1713001856),null),"cljs/test.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"argv","argv",(177740632),null),new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"argv","argv",(177740632),null),new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(168),true,(168),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"argv","argv",(177740632),null),new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Checks multiple assertions with a template expression.\n  See clojure.template/do-template for an explanation of\n  templates.\n\n  Example: (are [x y] (= x y)  \n                2 (+ 1 1)\n                4 (* 2 2))\n  Expands to: \n           (do (is (= 2 (+ 1 1)))\n               (is (= 4 (* 2 2))))\n\n  Note: This breaks some reporting features, such as line numbers.",(cljs.core.truth_(cljs.test$macros.are)?cljs.test$macros.are.cljs$lang$test:null)]));

cljs.test$macros.are.cljs$lang$macro = true;
/**
 * Adds a new string to the list of testing contexts.  May be nested,
 *   but must occur inside a test function (deftest).
 */
(function (){
cljs.test$macros.testing = (function cljs$test$macros$testing(var_args){
var args__25948__auto__ = [];
var len__25946__auto___242 = arguments.length;
var i__25947__auto___243 = (0);
while(true){
if((i__25947__auto___243 < len__25946__auto___242)){
args__25948__auto__.push((arguments[i__25947__auto___243]));

var G__244 = (i__25947__auto___243 + (1));
i__25947__auto___243 = G__244;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((3) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((3)),(0),null)):null);
return cljs.test$macros.testing.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return cljs.test$macros.testing;},new cljs.core.Symbol("cljs.test$macros","testing","cljs.test$macros/testing",(-1927277407),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"testing","testing",(-1492767066),null),"cljs/test.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"string","string",(-349010059),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"string","string",(-349010059),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(192),true,(192),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"string","string",(-349010059),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Adds a new string to the list of testing contexts.  May be nested,\n  but must occur inside a test function (deftest).",(cljs.core.truth_(cljs.test$macros.testing)?cljs.test$macros.testing.cljs$lang$test:null)])));})()
;

cljs.test$macros.testing.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,string,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","update-current-env!","cljs.test/update-current-env!",(-250761520),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",(-1485646523))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",(-460750931),null)),(function (){var x__25689__auto__ = string;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",(-1273693247),null)),body,cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",(-1065347064),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","update-current-env!","cljs.test/update-current-env!",(-250761520),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",(-1485646523))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",(-285075455),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
});

cljs.test$macros.testing.cljs$lang$maxFixedArity = (3);

cljs.test$macros.testing.cljs$lang$applyTo = (function (seq238){
var G__239 = cljs.core.first(seq238);
var seq238__$1 = cljs.core.next(seq238);
var G__240 = cljs.core.first(seq238__$1);
var seq238__$2 = cljs.core.next(seq238__$1);
var G__241 = cljs.core.first(seq238__$2);
var seq238__$3 = cljs.core.next(seq238__$2);
return cljs.test$macros.testing.cljs$core$IFn$_invoke$arity$variadic(G__239,G__240,G__241,seq238__$3);
});

new cljs.core.Var(function(){return cljs.test$macros.testing;},new cljs.core.Symbol("cljs.test$macros","testing","cljs.test$macros/testing",(-1927277407),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"testing","testing",(-1492767066),null),"cljs/test.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"string","string",(-349010059),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"string","string",(-349010059),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(192),true,(192),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"string","string",(-349010059),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Adds a new string to the list of testing contexts.  May be nested,\n  but must occur inside a test function (deftest).",(cljs.core.truth_(cljs.test$macros.testing)?cljs.test$macros.testing.cljs$lang$test:null)]));

cljs.test$macros.testing.cljs$lang$macro = true;
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
(function (){
cljs.test$macros.deftest = (function cljs$test$macros$deftest(var_args){
var args__25948__auto__ = [];
var len__25946__auto___249 = arguments.length;
var i__25947__auto___250 = (0);
while(true){
if((i__25947__auto___250 < len__25946__auto___249)){
args__25948__auto__.push((arguments[i__25947__auto___250]));

var G__251 = (i__25947__auto___250 + (1));
i__25947__auto___250 = G__251;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((3) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((3)),(0),null)):null);
return cljs.test$macros.deftest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return cljs.test$macros.deftest;},new cljs.core.Symbol("cljs.test$macros","deftest","cljs.test$macros/deftest",(-775237528),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"deftest","deftest",(938248815),null),"cljs/test.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(206),true,(206),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Defines a test function with no arguments.  Test functions may call\n  other tests, so tests may be composed.  If you compose tests, you\n  should also define a function named test-ns-hook; run-tests will\n  call test-ns-hook instead of testing all vars.\n\n  Note: Actually, the test body goes in the :test metadata on the var,\n  and the real function (the value of the var) calls test-var on\n  itself.\n\n  When cljs.analyzer/*load-tests* is false, deftest is ignored.",(cljs.core.truth_(cljs.test$macros.deftest)?cljs.test$macros.deftest.cljs$lang$test:null)])));})()
;

cljs.test$macros.deftest.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
if(cljs.analyzer._STAR_load_tests_STAR_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",(597100991),null)),(function (){var x__25689__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,new cljs.core.Keyword(null,"test","test",(577538877)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","test-var","cljs.test/test-var",(639352116),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$var",".-cljs$lang$var",(416918061),null)),(function (){var x__25689__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",(250714521),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$var",".-cljs$lang$var",(416918061),null)),(function (){var x__25689__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",(870848730),null)),(function (){var x__25689__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
} else {
return null;
}
});

cljs.test$macros.deftest.cljs$lang$maxFixedArity = (3);

cljs.test$macros.deftest.cljs$lang$applyTo = (function (seq245){
var G__246 = cljs.core.first(seq245);
var seq245__$1 = cljs.core.next(seq245);
var G__247 = cljs.core.first(seq245__$1);
var seq245__$2 = cljs.core.next(seq245__$1);
var G__248 = cljs.core.first(seq245__$2);
var seq245__$3 = cljs.core.next(seq245__$2);
return cljs.test$macros.deftest.cljs$core$IFn$_invoke$arity$variadic(G__246,G__247,G__248,seq245__$3);
});

new cljs.core.Var(function(){return cljs.test$macros.deftest;},new cljs.core.Symbol("cljs.test$macros","deftest","cljs.test$macros/deftest",(-775237528),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"deftest","deftest",(938248815),null),"cljs/test.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(206),true,(206),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Defines a test function with no arguments.  Test functions may call\n  other tests, so tests may be composed.  If you compose tests, you\n  should also define a function named test-ns-hook; run-tests will\n  call test-ns-hook instead of testing all vars.\n\n  Note: Actually, the test body goes in the :test metadata on the var,\n  and the real function (the value of the var) calls test-var on\n  itself.\n\n  When cljs.analyzer/*load-tests* is false, deftest is ignored.",(cljs.core.truth_(cljs.test$macros.deftest)?cljs.test$macros.deftest.cljs$lang$test:null)]));

cljs.test$macros.deftest.cljs$lang$macro = true;
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
(function (){
cljs.test$macros.async = (function cljs$test$macros$async(var_args){
var args__25948__auto__ = [];
var len__25946__auto___256 = arguments.length;
var i__25947__auto___257 = (0);
while(true){
if((i__25947__auto___257 < len__25946__auto___256)){
args__25948__auto__.push((arguments[i__25947__auto___257]));

var G__258 = (i__25947__auto___257 + (1));
i__25947__auto___257 = G__258;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((3) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((3)),(0),null)):null);
return cljs.test$macros.async.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return cljs.test$macros.async;},new cljs.core.Symbol("cljs.test$macros","async","cljs.test$macros/async",(1242277127),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"async","async",(-1603666168),null),"cljs/test.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"done","done",(750687339),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"done","done",(750687339),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(224),true,(224),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"done","done",(750687339),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Wraps body as a CPS function that can be returned from a test to\n  continue asynchronously.  Binds done to a function that must be\n  invoked once and from an async context after any assertions.\n\n  (deftest example-with-timeout\n    (async done\n      (js/setTimeout (fn []\n                       ;; make assertions in async context...\n                       (done) ;; ...then call done\n                       )\n                     0)))",(cljs.core.truth_(cljs.test$macros.async)?cljs.test$macros.async.cljs$lang$test:null)])));})()
;

cljs.test$macros.async.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,done,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reify","cljs.core/reify",(463577556),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","IAsyncTest","cljs.test/IAsyncTest",(-885937316),null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",(-920223129),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-invoke","-invoke",(1821963807),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___46__auto__","___46__auto__",(-92372653),null)),(function (){var x__25689__auto__ = done;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([body], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
});

cljs.test$macros.async.cljs$lang$maxFixedArity = (3);

cljs.test$macros.async.cljs$lang$applyTo = (function (seq252){
var G__253 = cljs.core.first(seq252);
var seq252__$1 = cljs.core.next(seq252);
var G__254 = cljs.core.first(seq252__$1);
var seq252__$2 = cljs.core.next(seq252__$1);
var G__255 = cljs.core.first(seq252__$2);
var seq252__$3 = cljs.core.next(seq252__$2);
return cljs.test$macros.async.cljs$core$IFn$_invoke$arity$variadic(G__253,G__254,G__255,seq252__$3);
});

new cljs.core.Var(function(){return cljs.test$macros.async;},new cljs.core.Symbol("cljs.test$macros","async","cljs.test$macros/async",(1242277127),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"async","async",(-1603666168),null),"cljs/test.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"done","done",(750687339),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"done","done",(750687339),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(224),true,(224),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"done","done",(750687339),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Wraps body as a CPS function that can be returned from a test to\n  continue asynchronously.  Binds done to a function that must be\n  invoked once and from an async context after any assertions.\n\n  (deftest example-with-timeout\n    (async done\n      (js/setTimeout (fn []\n                       ;; make assertions in async context...\n                       (done) ;; ...then call done\n                       )\n                     0)))",(cljs.core.truth_(cljs.test$macros.async)?cljs.test$macros.async.cljs$lang$test:null)]));

cljs.test$macros.async.cljs$lang$macro = true;
(function (){
cljs.test$macros.ns_QMARK_ = (function cljs$test$macros$ns_QMARK_(x){
return (cljs.core.seq_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Symbol(null,"quote","quote",(1377916282),null)));
}); return (
new cljs.core.Var(function(){return cljs.test$macros.ns_QMARK_;},new cljs.core.Symbol("cljs.test$macros","ns?","cljs.test$macros/ns?",(811578437),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"ns?","ns?",(447901248),null),"cljs/test.cljc",(10),(1),(246),(246),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.test$macros.ns_QMARK_)?cljs.test$macros.ns_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Like test-vars, but returns a block for further composition and
 *   later execution.
 */
(function (){
cljs.test$macros.run_tests_block = (function cljs$test$macros$run_tests_block(var_args){
var args__25948__auto__ = [];
var len__25946__auto___267 = arguments.length;
var i__25947__auto___268 = (0);
while(true){
if((i__25947__auto___268 < len__25946__auto___267)){
args__25948__auto__.push((arguments[i__25947__auto___268]));

var G__269 = (i__25947__auto___268 + (1));
i__25947__auto___268 = G__269;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((3) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((3)),(0),null)):null);
return cljs.test$macros.run_tests_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return cljs.test$macros.run_tests_block;},new cljs.core.Symbol("cljs.test$macros","run-tests-block","cljs.test$macros/run-tests-block",(1151902833),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"run-tests-block","run-tests-block",(1590583922),null),"cljs/test.cljc",(26),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env-or-ns","env-or-ns",(-1749047216),null),new cljs.core.Symbol(null,"namespaces","namespaces",(196374058),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env-or-ns","env-or-ns",(-1749047216),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"namespaces","namespaces",(196374058),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(249),true,(249),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env-or-ns","env-or-ns",(-1749047216),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"namespaces","namespaces",(196374058),null)], null)),"Like test-vars, but returns a block for further composition and\n  later execution.",(cljs.core.truth_(cljs.test$macros.run_tests_block)?cljs.test$macros.run_tests_block.cljs$lang$test:null)])));})()
;

cljs.test$macros.run_tests_block.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,env_or_ns,namespaces){
if(cljs.core.every_QMARK_((function (p__263){
var vec__264 = p__263;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__264,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__264,(1),null);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote,new cljs.core.Symbol(null,"quote","quote",(1377916282),null))) && ((ns instanceof cljs.core.Symbol));
}),namespaces)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("All arguments to run-tests must be quoted symbols"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(every? (fn [[quote ns]] (and (= quote (quote quote)) (symbol? ns))) namespaces)")].join('')));
}

var is_ns = cljs.test$macros.ns_QMARK_(env_or_ns);
var env = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("env");
var summary = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("summary");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__25689__auto__ = env;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = (cljs.core.truth_(is_ns)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","empty-env","cljs.test/empty-env",(849387048),null)))):env_or_ns);
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = summary;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","volatile!","cljs.core/volatile!",(-829435536),null)),(function (){var x__25689__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"test","test",(577538877))),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pass","pass",(1574159993))),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fail","fail",(1706214930))),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",(-978969032))),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"summary","summary",(380847952)))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",(-1133584918),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (is_ns,env,summary){
return (function (ns){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",(-1133584918),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","test-ns-block","cljs.test/test-ns-block",(844162337),null)),(function (){var x__25689__auto__ = env;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = ns;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vswap!","cljs.core/vswap!",(-2062892188),null)),(function (){var x__25689__auto__ = summary;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","partial","cljs.core/partial",(1483172485),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","merge-with","cljs.core/merge-with",(366771213),null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","+","cljs.core/+",(-342754435),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"report-counters","report-counters",(-1702609242))),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","get-and-clear-env!","cljs.test/get-and-clear-env!",(-1402633791),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
});})(is_ns,env,summary))
,(cljs.core.truth_(is_ns)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [env_or_ns], null),namespaces):namespaces)),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","set-env!","cljs.test/set-env!",(-702147289),null)),(function (){var x__25689__auto__ = env;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null)),(function (){var x__25689__auto__ = summary;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","report","cljs.test/report",(-1933655233),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",(322326297),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null)),(function (){var x__25689__auto__ = summary;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-run-tests","end-run-tests",(267300563)))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","clear-env!","cljs.test/clear-env!",(241475586),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
});

cljs.test$macros.run_tests_block.cljs$lang$maxFixedArity = (3);

cljs.test$macros.run_tests_block.cljs$lang$applyTo = (function (seq259){
var G__260 = cljs.core.first(seq259);
var seq259__$1 = cljs.core.next(seq259);
var G__261 = cljs.core.first(seq259__$1);
var seq259__$2 = cljs.core.next(seq259__$1);
var G__262 = cljs.core.first(seq259__$2);
var seq259__$3 = cljs.core.next(seq259__$2);
return cljs.test$macros.run_tests_block.cljs$core$IFn$_invoke$arity$variadic(G__260,G__261,G__262,seq259__$3);
});

new cljs.core.Var(function(){return cljs.test$macros.run_tests_block;},new cljs.core.Symbol("cljs.test$macros","run-tests-block","cljs.test$macros/run-tests-block",(1151902833),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"run-tests-block","run-tests-block",(1590583922),null),"cljs/test.cljc",(26),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env-or-ns","env-or-ns",(-1749047216),null),new cljs.core.Symbol(null,"namespaces","namespaces",(196374058),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env-or-ns","env-or-ns",(-1749047216),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"namespaces","namespaces",(196374058),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(249),true,(249),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env-or-ns","env-or-ns",(-1749047216),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"namespaces","namespaces",(196374058),null)], null)),"Like test-vars, but returns a block for further composition and\n  later execution.",(cljs.core.truth_(cljs.test$macros.run_tests_block)?cljs.test$macros.run_tests_block.cljs$lang$test:null)]));

cljs.test$macros.run_tests_block.cljs$lang$macro = true;
/**
 * Runs all tests in the given namespaces; prints results.
 *   Defaults to current namespace if none given. Does not return a meaningful
 *   value due to the possiblity of asynchronous execution. To detect test
 *   completion add a :end-run-tests method case to the cljs.test/report
 *   multimethod.
 */
(function (){
cljs.test$macros.run_tests = (function cljs$test$macros$run_tests(var_args){
var args270 = [];
var len__25946__auto___277 = arguments.length;
var i__25947__auto___278 = (0);
while(true){
if((i__25947__auto___278 < len__25946__auto___277)){
args270.push((arguments[i__25947__auto___278]));

var G__279 = (i__25947__auto___278 + (1));
i__25947__auto___278 = G__279;
continue;
} else {
}
break;
}

var G__276 = args270.length;
switch (G__276) {
case (2):
return cljs.test$macros.run_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.test$macros.run_tests.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__25965__auto__ = (new cljs.core.IndexedSeq(args270.slice((3)),(0),null));
return cljs.test$macros.run_tests.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25965__auto__);

}
}); return (
new cljs.core.Var(function(){return cljs.test$macros.run_tests;},new cljs.core.Symbol("cljs.test$macros","run-tests","cljs.test$macros/run-tests",(-1179575048),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"run-tests","run-tests",(-1546431749),null),"cljs/test.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env-or-ns","env-or-ns",(-1749047216),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env-or-ns","env-or-ns",(-1749047216),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env-or-ns","env-or-ns",(-1749047216),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"namespaces","namespaces",(196374058),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(284),true,(284),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env-or-ns","env-or-ns",(-1749047216),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env-or-ns","env-or-ns",(-1749047216),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"namespaces","namespaces",(196374058),null)], null)),"Runs all tests in the given namespaces; prints results.\n  Defaults to current namespace if none given. Does not return a meaningful\n  value due to the possiblity of asynchronous execution. To detect test\n  completion add a :end-run-tests method case to the cljs.test/report\n  multimethod.",(cljs.core.truth_(cljs.test$macros.run_tests)?cljs.test$macros.run_tests.cljs$lang$test:null)])));})()
;

cljs.test$macros.run_tests.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","run-tests","cljs.test/run-tests",(-878084023),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","empty-env","cljs.test/empty-env",(849387048),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = cljs.analyzer._STAR_cljs_ns_STAR_;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
});

cljs.test$macros.run_tests.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,env_or_ns){
if(cljs.core.truth_(cljs.test$macros.ns_QMARK_(env_or_ns))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","run-tests","cljs.test/run-tests",(-878084023),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","empty-env","cljs.test/empty-env",(849387048),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = env_or_ns;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","run-tests","cljs.test/run-tests",(-878084023),null)),(function (){var x__25689__auto__ = env_or_ns;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = cljs.analyzer._STAR_cljs_ns_STAR_;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
}
});

cljs.test$macros.run_tests.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,env_or_ns,namespaces){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","run-block","cljs.test/run-block",(-834586193),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","run-tests-block","cljs.test/run-tests-block",(915419136),null)),(function (){var x__25689__auto__ = env_or_ns;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([namespaces], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
});

cljs.test$macros.run_tests.cljs$lang$applyTo = (function (seq271){
var G__272 = cljs.core.first(seq271);
var seq271__$1 = cljs.core.next(seq271);
var G__273 = cljs.core.first(seq271__$1);
var seq271__$2 = cljs.core.next(seq271__$1);
var G__274 = cljs.core.first(seq271__$2);
var seq271__$3 = cljs.core.next(seq271__$2);
return cljs.test$macros.run_tests.cljs$core$IFn$_invoke$arity$variadic(G__272,G__273,G__274,seq271__$3);
});

cljs.test$macros.run_tests.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs.test$macros.run_tests;},new cljs.core.Symbol("cljs.test$macros","run-tests","cljs.test$macros/run-tests",(-1179575048),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"run-tests","run-tests",(-1546431749),null),"cljs/test.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env-or-ns","env-or-ns",(-1749047216),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env-or-ns","env-or-ns",(-1749047216),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env-or-ns","env-or-ns",(-1749047216),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"namespaces","namespaces",(196374058),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(284),true,(284),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env-or-ns","env-or-ns",(-1749047216),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env-or-ns","env-or-ns",(-1749047216),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"namespaces","namespaces",(196374058),null)], null)),"Runs all tests in the given namespaces; prints results.\n  Defaults to current namespace if none given. Does not return a meaningful\n  value due to the possiblity of asynchronous execution. To detect test\n  completion add a :end-run-tests method case to the cljs.test/report\n  multimethod.",(cljs.core.truth_(cljs.test$macros.run_tests)?cljs.test$macros.run_tests.cljs$lang$test:null)]));

cljs.test$macros.run_tests.cljs$lang$macro = true;
/**
 * Runs all tests in all namespaces; prints results.
 *   Optional argument is a regular expression; only namespaces with
 *   names matching the regular expression (with re-matches) will be
 *   tested.
 */
(function (){
cljs.test$macros.run_all_tests = (function cljs$test$macros$run_all_tests(var_args){
var args281 = [];
var len__25946__auto___285 = arguments.length;
var i__25947__auto___286 = (0);
while(true){
if((i__25947__auto___286 < len__25946__auto___285)){
args281.push((arguments[i__25947__auto___286]));

var G__287 = (i__25947__auto___286 + (1));
i__25947__auto___286 = G__287;
continue;
} else {
}
break;
}

var G__283 = args281.length;
switch (G__283) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((args281.length - (2)))].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.test$macros.run_all_tests;},new cljs.core.Symbol("cljs.test$macros","run-all-tests","cljs.test$macros/run-all-tests",(-456629639),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"run-all-tests","run-all-tests",(-1055479740),null),"cljs/test.cljc",(24),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"re","re",(1869207729),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"re","re",(1869207729),null),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"re","re",(1869207729),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"re","re",(1869207729),null),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(298),true,(298),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"re","re",(1869207729),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"re","re",(1869207729),null),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),"Runs all tests in all namespaces; prints results.\n  Optional argument is a regular expression; only namespaces with\n  names matching the regular expression (with re-matches) will be\n  tested.",(cljs.core.truth_(cljs.test$macros.run_all_tests)?cljs.test$macros.run_all_tests.cljs$lang$test:null)])));})()
;

cljs.test$macros.run_all_tests.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","run-all-tests","cljs.test/run-all-tests",(-154085674),null)),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","empty-env","cljs.test/empty-env",(849387048),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
});

cljs.test$macros.run_all_tests.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,re){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","run-all-tests","cljs.test/run-all-tests",(-154085674),null)),(function (){var x__25689__auto__ = re;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","empty-env","cljs.test/empty-env",(849387048),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
});

cljs.test$macros.run_all_tests.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,re,env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","run-tests","cljs.test/run-tests",(-878084023),null)),(function (){var x__25689__auto__ = env;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ns){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = ns;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
}),(function (){var G__284 = cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$0();
var G__284__$1 = (cljs.core.truth_(re)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__284){
return (function (p1__47_SHARP_){
return cljs.core.re_matches(re,cljs.core.name(p1__47_SHARP_));
});})(G__284))
,G__284):G__284);
return G__284__$1;
})())], 0)));
});

cljs.test$macros.run_all_tests.cljs$lang$maxFixedArity = (4);

new cljs.core.Var(function(){return cljs.test$macros.run_all_tests;},new cljs.core.Symbol("cljs.test$macros","run-all-tests","cljs.test$macros/run-all-tests",(-456629639),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"run-all-tests","run-all-tests",(-1055479740),null),"cljs/test.cljc",(24),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"re","re",(1869207729),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"re","re",(1869207729),null),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"re","re",(1869207729),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"re","re",(1869207729),null),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(298),true,(298),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"re","re",(1869207729),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"re","re",(1869207729),null),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),"Runs all tests in all namespaces; prints results.\n  Optional argument is a regular expression; only namespaces with\n  names matching the regular expression (with re-matches) will be\n  tested.",(cljs.core.truth_(cljs.test$macros.run_all_tests)?cljs.test$macros.run_all_tests.cljs$lang$test:null)]));

cljs.test$macros.run_all_tests.cljs$lang$macro = true;
(function (){
cljs.test$macros.test_all_vars_block = (function cljs$test$macros$test_all_vars_block(_AMPERSAND_form,_AMPERSAND_env,p__289){
var vec__389 = p__289;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__389,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__389,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"env__48__auto__","env__48__auto__",(-395888225),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","get-current-env","cljs.test/get-current-env",(1274262302),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",(-1133584918),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"env__48__auto__","env__48__auto__",(-395888225),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","set-env!","cljs.test/set-env!",(-702147289),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","empty-env","cljs.test/empty-env",(849387048),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = (cljs.core.truth_(cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"cljs-test-once-fixtures","cljs-test-once-fixtures",(1554034706),null)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","update-current-env!","cljs.test/update-current-env!",(-250761520),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"once-fixtures","once-fixtures",(1253947167))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",(322326297),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = ns;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),"cljs-test-once-fixtures");
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = (cljs.core.truth_(cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"cljs-test-each-fixtures","cljs-test-each-fixtures",(2061085390),null)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","update-current-env!","cljs.test/update-current-env!",(-250761520),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"each-fixtures","each-fixtures",(802243977))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",(322326297),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = ns;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),"cljs-test-each-fixtures");
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","test-vars-block","cljs.test/test-vars-block",(-257828355),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__389,quote,ns){
return (function (p__476){
var vec__477 = p__476;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__477,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__477,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",(870848730),null)),(function (){var x__25689__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.name(k));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
});})(vec__389,quote,ns))
,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (vec__389,quote,ns){
return (function (p__480){
var vec__481 = p__480;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__481,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__481,(1),null);
return new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(v);
});})(vec__389,quote,ns))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__389,quote,ns){
return (function (p__484){
var vec__485 = p__484;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__485,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__485,(1),null);
return new cljs.core.Keyword(null,"test","test",(577538877)).cljs$core$IFn$_invoke$arity$1(v);
});})(vec__389,quote,ns))
,cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$1(ns)))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"env__48__auto__","env__48__auto__",(-395888225),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","clear-env!","cljs.test/clear-env!",(241475586),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
}); return (
new cljs.core.Var(function(){return cljs.test$macros.test_all_vars_block;},new cljs.core.Symbol("cljs.test$macros","test-all-vars-block","cljs.test$macros/test-all-vars-block",(-1667683692),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"test-all-vars-block","test-all-vars-block",(1723555995),null),"cljs/test.cljc",(30),(1),(312),true,(312),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null)], null)),null,(cljs.core.truth_(cljs.test$macros.test_all_vars_block)?cljs.test$macros.test_all_vars_block.cljs$lang$test:null)])));})()
;

cljs.test$macros.test_all_vars_block.cljs$lang$macro = true;
/**
 * Calls test-vars on every var with :test metadata interned in the
 *   namespace, with fixtures.
 */
(function (){
cljs.test$macros.test_all_vars = (function cljs$test$macros$test_all_vars(_AMPERSAND_form,_AMPERSAND_env,p__488){
var vec__492 = p__488;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__492,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__492,(1),null);
var form = vec__492;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","run-block","cljs.test/run-block",(-834586193),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",(-1133584918),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","test-all-vars-block","cljs.test/test-all-vars-block",(-1896786139),null)),(function (){var x__25689__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","report","cljs.test/report",(-1933655233),null)),(function (){var x__25689__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-test-all-vars","end-test-all-vars",(548827253))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ns","ns",(441598760))),(function (){var x__25689__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
}); return (
new cljs.core.Var(function(){return cljs.test$macros.test_all_vars;},new cljs.core.Symbol("cljs.test$macros","test-all-vars","cljs.test$macros/test-all-vars",(-18886492),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"test-all-vars","test-all-vars",(-520230239),null),"cljs/test.cljc",(24),(1),(335),true,(335),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"form","form",(16469056),null)], null)], null)),"Calls test-vars on every var with :test metadata interned in the\n  namespace, with fixtures.",(cljs.core.truth_(cljs.test$macros.test_all_vars)?cljs.test$macros.test_all_vars.cljs$lang$test:null)])));})()
;

cljs.test$macros.test_all_vars.cljs$lang$macro = true;
/**
 * Like test-ns, but returns a block for further composition and
 *   later execution.  Does not clear the current env.
 */
(function (){
cljs.test$macros.test_ns_block = (function cljs$test$macros$test_ns_block(_AMPERSAND_form,_AMPERSAND_env,env,p__495){
var vec__499 = p__495;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__499,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__499,(1),null);
var form = vec__499;
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote,new cljs.core.Symbol(null,"quote","quote",(1377916282),null))) && ((ns instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Argument to test-ns must be a quoted symbol"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(and (= quote (quote quote)) (symbol? ns))")].join('')));
}

if(cljs.core.truth_(cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$1(ns))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Namespace "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(ana-api/find-ns ns)")].join('')));
}

return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","set-env!","cljs.test/set-env!",(-702147289),null)),(function (){var x__25689__auto__ = env;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__25689__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",(-1701237033))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ns","ns",(441598760))),(function (){var x__25689__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = (function (){var temp__21873__auto__ = cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"test-ns-hook","test-ns-hook",(6852467),null));
if(cljs.core.truth_(temp__21873__auto__)){
var v = temp__21873__auto__;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__25689__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),"test-ns-hook");
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","block","cljs.test/block",(-1587771553),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","test-all-vars-block","cljs.test/test-all-vars-block",(-1896786139),null)),(function (){var x__25689__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
}
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",(1258077813),null)),(function (){var x__25689__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-test-ns","end-test-ns",(1620675645))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ns","ns",(441598760))),(function (){var x__25689__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})())));
}); return (
new cljs.core.Var(function(){return cljs.test$macros.test_ns_block;},new cljs.core.Symbol("cljs.test$macros","test-ns-block","cljs.test$macros/test-ns-block",(-1001820016),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"test-ns-block","test-ns-block",(-644400493),null),"cljs/test.cljc",(24),(1),(344),true,(344),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"form","form",(16469056),null)], null)], null)),"Like test-ns, but returns a block for further composition and\n  later execution.  Does not clear the current env.",(cljs.core.truth_(cljs.test$macros.test_ns_block)?cljs.test$macros.test_ns_block.cljs$lang$test:null)])));})()
;

cljs.test$macros.test_ns_block.cljs$lang$macro = true;
/**
 * If the namespace defines a function named test-ns-hook, calls that.
 *   Otherwise, calls test-all-vars on the namespace.  'ns' is a
 *   namespace object or a symbol.
 * 
 *   Internally binds *report-counters* to a ref initialized to
 *   *initial-report-counters*.  
 */
(function (){
cljs.test$macros.test_ns = (function cljs$test$macros$test_ns(var_args){
var args502 = [];
var len__25946__auto___509 = arguments.length;
var i__25947__auto___510 = (0);
while(true){
if((i__25947__auto___510 < len__25946__auto___509)){
args502.push((arguments[i__25947__auto___510]));

var G__511 = (i__25947__auto___510 + (1));
i__25947__auto___510 = G__511;
continue;
} else {
}
break;
}

var G__504 = args502.length;
switch (G__504) {
case (3):
return cljs.test$macros.test_ns.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.test$macros.test_ns.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((args502.length - (2)))].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.test$macros.test_ns;},new cljs.core.Symbol("cljs.test$macros","test-ns","cljs.test$macros/test-ns",(1807672151),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"test-ns","test-ns",(1973098840),null),"cljs/test.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"form","form",(16469056),null)], null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"form","form",(16469056),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(361),true,(361),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"form","form",(16469056),null)], null)], null)),"If the namespace defines a function named test-ns-hook, calls that.\n  Otherwise, calls test-all-vars on the namespace.  'ns' is a\n  namespace object or a symbol.\n\n  Internally binds *report-counters* to a ref initialized to\n  *initial-report-counters*.  ",(cljs.core.truth_(cljs.test$macros.test_ns)?cljs.test$macros.test_ns.cljs$lang$test:null)])));})()
;

cljs.test$macros.test_ns.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,ns){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","test-ns","cljs.test/test-ns",(1574260710),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","empty-env","cljs.test/empty-env",(849387048),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = ns;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
});

cljs.test$macros.test_ns.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,env,p__505){
var vec__506 = p__505;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__506,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__506,(1),null);
var form = vec__506;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","run-block","cljs.test/run-block",(-834586193),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",(-1133584918),null)),(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","test-ns-block","cljs.test/test-ns-block",(844162337),null)),(function (){var x__25689__auto__ = env;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","clear-env!","cljs.test/clear-env!",(241475586),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()));
});

cljs.test$macros.test_ns.cljs$lang$maxFixedArity = (4);

new cljs.core.Var(function(){return cljs.test$macros.test_ns;},new cljs.core.Symbol("cljs.test$macros","test-ns","cljs.test$macros/test-ns",(1807672151),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"test-ns","test-ns",(1973098840),null),"cljs/test.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"form","form",(16469056),null)], null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"form","form",(16469056),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(361),true,(361),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"form","form",(16469056),null)], null)], null)),"If the namespace defines a function named test-ns-hook, calls that.\n  Otherwise, calls test-all-vars on the namespace.  'ns' is a\n  namespace object or a symbol.\n\n  Internally binds *report-counters* to a ref initialized to\n  *initial-report-counters*.  ",(cljs.core.truth_(cljs.test$macros.test_ns)?cljs.test$macros.test_ns.cljs$lang$test:null)]));

cljs.test$macros.test_ns.cljs$lang$macro = true;
(function (){
cljs.test$macros.use_fixtures = (function cljs$test$macros$use_fixtures(var_args){
var args__25948__auto__ = [];
var len__25946__auto___526 = arguments.length;
var i__25947__auto___527 = (0);
while(true){
if((i__25947__auto___527 < len__25946__auto___526)){
args__25948__auto__.push((arguments[i__25947__auto___527]));

var G__528 = (i__25947__auto___527 + (1));
i__25947__auto___527 = G__528;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((3) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((3)),(0),null)):null);
return cljs.test$macros.use_fixtures.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return cljs.test$macros.use_fixtures;},new cljs.core.Symbol("cljs.test$macros","use-fixtures","cljs.test$macros/use-fixtures",(1245225206),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"use-fixtures","use-fixtures",(-1608548619),null),"cljs/test.cljc",(23),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"fns","fns",(-1469296983),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"fns","fns",(-1469296983),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(378),true,(378),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"fns","fns",(-1469296983),null)], null)),null,(cljs.core.truth_(cljs.test$macros.use_fixtures)?cljs.test$macros.use_fixtures.cljs$lang$test:null)])));})()
;

cljs.test$macros.use_fixtures.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,fns){
var pred__517 = cljs.core._EQ_;
var expr__518 = type;
if(cljs.core.truth_((function (){var G__520 = new cljs.core.Keyword(null,"once","once",(-262568523));
var G__521 = expr__518;
return (pred__517.cljs$core$IFn$_invoke$arity$2 ? pred__517.cljs$core$IFn$_invoke$arity$2(G__520,G__521) : pred__517.call(null,G__520,G__521));
})())){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",(597100991),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs-test-once-fixtures","cljs-test-once-fixtures",(1554034706),null)),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fns)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
} else {
if(cljs.core.truth_((function (){var G__522 = new cljs.core.Keyword(null,"each","each",(940016129));
var G__523 = expr__518;
return (pred__517.cljs$core$IFn$_invoke$arity$2 ? pred__517.cljs$core$IFn$_invoke$arity$2(G__522,G__523) : pred__517.call(null,G__522,G__523));
})())){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",(597100991),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs-test-each-fixtures","cljs-test-each-fixtures",(2061085390),null)),cljs.core.array_seq([(function (){var x__25689__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fns)));
return cljs.core._conj(cljs.core.List.EMPTY,x__25689__auto__);
})()], 0)));
} else {
if(cljs.core.truth_((function (){var G__524 = new cljs.core.Keyword(null,"else","else",(-1508377146));
var G__525 = expr__518;
return (pred__517.cljs$core$IFn$_invoke$arity$2 ? pred__517.cljs$core$IFn$_invoke$arity$2(G__524,G__525) : pred__517.call(null,G__524,G__525));
})())){
throw (new Error("First argument to cljs.test/use-fixtures must be :once or :each"));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__518)].join('')));
}
}
}
});

cljs.test$macros.use_fixtures.cljs$lang$maxFixedArity = (3);

cljs.test$macros.use_fixtures.cljs$lang$applyTo = (function (seq513){
var G__514 = cljs.core.first(seq513);
var seq513__$1 = cljs.core.next(seq513);
var G__515 = cljs.core.first(seq513__$1);
var seq513__$2 = cljs.core.next(seq513__$1);
var G__516 = cljs.core.first(seq513__$2);
var seq513__$3 = cljs.core.next(seq513__$2);
return cljs.test$macros.use_fixtures.cljs$core$IFn$_invoke$arity$variadic(G__514,G__515,G__516,seq513__$3);
});

new cljs.core.Var(function(){return cljs.test$macros.use_fixtures;},new cljs.core.Symbol("cljs.test$macros","use-fixtures","cljs.test$macros/use-fixtures",(1245225206),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.test$macros","cljs.test$macros",(-2050887540),null),new cljs.core.Symbol(null,"use-fixtures","use-fixtures",(-1608548619),null),"cljs/test.cljc",(23),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"fns","fns",(-1469296983),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"fns","fns",(-1469296983),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(378),true,(378),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"fns","fns",(-1469296983),null)], null)),null,(cljs.core.truth_(cljs.test$macros.use_fixtures)?cljs.test$macros.use_fixtures.cljs$lang$test:null)]));

cljs.test$macros.use_fixtures.cljs$lang$macro = true;
