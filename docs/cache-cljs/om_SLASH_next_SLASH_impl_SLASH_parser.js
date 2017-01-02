goog.provide("om.next.impl.parser");
(function (){
om.next.impl.parser.expr__GT_ast; return (
new cljs.core.Var(function(){return om.next.impl.parser.expr__GT_ast;},new cljs.core.Symbol("om.next.impl.parser","expr->ast","om.next.impl.parser/expr->ast",(977394447),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"om.next.impl.parser","om.next.impl.parser",(824573384),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"\n   Generic query expression parsing and AST manipulation.\n\n   QUERY EXPRESSIONS\n\n   Query expressions are a variation on Datomic Pull Syntax\n   http://docs.datomic.com/pull.html more suitable for generic client/server\n   state transfer. It's important to note the Om Next query expression syntax is\n   *not* a strict superset of Datomic Pull.\n\n   A query expression is composed of EDN values. The grammar for query\n   expressions follows:\n\n   QueryRoot      := EdnVector(QueryExpr*)\n   PlainQueryExpr := (EdnKeyword | IdentExpr | JoinExpr)\n   QueryExpr      := (PlainQueryExpr | ParamExpr)\n   IdentExpr      := EdnVector2(Keyword, EdnValue)\n   ParamExpr      := EdnList2(PlainQueryExpr | EdnSymbol, ParamMapExpr)\n   ParamMapExpr   := EdnMap(Keyword, EdnValue)\n   JoinExpr       := EdnMap((Keyword | IdentExpr), (QueryRoot | UnionExpr | RecurExpr))\n   UnionExpr      := EdnMap(Keyword, QueryRoot)\n   RecurExpr      := ('... | Integer)\n\n   Note most apis in Om Next expect a QueryRoot not a QueryExpr.\n\n   QUERY EXPRESSION AST FORMAT\n\n   Given a QueryExpr you can get the AST via om.next.impl.parser/expr->ast.\n   The following keys can appear in the AST representation:\n\n   {:type         (:prop | :join | :call | :root | :union | :union-entry)\n    :key          (EdnKeyword | EdnSymbol | IdentExpr)\n    :dispatch-key (EdnKeyword | EdnSymbol)\n    :union-key    EdnKeyword\n    :query        (QueryRoot | RecurExpr)\n    :params       ParamMapExpr\n    :children     EdnVector(AST)\n    :component    Object\n    :target       EdnKeyword}\n\n   :query and :params may or may not appear. :type :call is only for\n   mutations."], null)),new cljs.core.Symbol(null,"expr->ast","expr->ast",(464686145),null),"om/next/impl/parser.cljc",(19),(1),(48),true,(48),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next.impl.parser.expr__GT_ast)?om.next.impl.parser.expr__GT_ast.cljs$lang$test:null)])));})()
;
(function (){
om.next.impl.parser.symbol__GT_ast = (function om$next$impl$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",(-1516042587)),k,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",(733619510)),k], null);
}); return (
new cljs.core.Var(function(){return om.next.impl.parser.symbol__GT_ast;},new cljs.core.Symbol("om.next.impl.parser","symbol->ast","om.next.impl.parser/symbol->ast",(1432297822),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"om.next.impl.parser","om.next.impl.parser",(824573384),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"\n   Generic query expression parsing and AST manipulation.\n\n   QUERY EXPRESSIONS\n\n   Query expressions are a variation on Datomic Pull Syntax\n   http://docs.datomic.com/pull.html more suitable for generic client/server\n   state transfer. It's important to note the Om Next query expression syntax is\n   *not* a strict superset of Datomic Pull.\n\n   A query expression is composed of EDN values. The grammar for query\n   expressions follows:\n\n   QueryRoot      := EdnVector(QueryExpr*)\n   PlainQueryExpr := (EdnKeyword | IdentExpr | JoinExpr)\n   QueryExpr      := (PlainQueryExpr | ParamExpr)\n   IdentExpr      := EdnVector2(Keyword, EdnValue)\n   ParamExpr      := EdnList2(PlainQueryExpr | EdnSymbol, ParamMapExpr)\n   ParamMapExpr   := EdnMap(Keyword, EdnValue)\n   JoinExpr       := EdnMap((Keyword | IdentExpr), (QueryRoot | UnionExpr | RecurExpr))\n   UnionExpr      := EdnMap(Keyword, QueryRoot)\n   RecurExpr      := ('... | Integer)\n\n   Note most apis in Om Next expect a QueryRoot not a QueryExpr.\n\n   QUERY EXPRESSION AST FORMAT\n\n   Given a QueryExpr you can get the AST via om.next.impl.parser/expr->ast.\n   The following keys can appear in the AST representation:\n\n   {:type         (:prop | :join | :call | :root | :union | :union-entry)\n    :key          (EdnKeyword | EdnSymbol | IdentExpr)\n    :dispatch-key (EdnKeyword | EdnSymbol)\n    :union-key    EdnKeyword\n    :query        (QueryRoot | RecurExpr)\n    :params       ParamMapExpr\n    :children     EdnVector(AST)\n    :component    Object\n    :target       EdnKeyword}\n\n   :query and :params may or may not appear. :type :call is only for\n   mutations."], null)),new cljs.core.Symbol(null,"symbol->ast","symbol->ast",(1951270940),null),"om/next/impl/parser.cljc",(18),(1),(50),(50),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),null,(cljs.core.truth_(om.next.impl.parser.symbol__GT_ast)?om.next.impl.parser.symbol__GT_ast.cljs$lang$test:null)])));})()
;
(function (){
om.next.impl.parser.keyword__GT_ast = (function om$next$impl$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",(-1516042587)),k,new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"prop","prop",(-515168332)),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",(733619510)),k], null);
}); return (
new cljs.core.Var(function(){return om.next.impl.parser.keyword__GT_ast;},new cljs.core.Symbol("om.next.impl.parser","keyword->ast","om.next.impl.parser/keyword->ast",(498285586),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"om.next.impl.parser","om.next.impl.parser",(824573384),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"\n   Generic query expression parsing and AST manipulation.\n\n   QUERY EXPRESSIONS\n\n   Query expressions are a variation on Datomic Pull Syntax\n   http://docs.datomic.com/pull.html more suitable for generic client/server\n   state transfer. It's important to note the Om Next query expression syntax is\n   *not* a strict superset of Datomic Pull.\n\n   A query expression is composed of EDN values. The grammar for query\n   expressions follows:\n\n   QueryRoot      := EdnVector(QueryExpr*)\n   PlainQueryExpr := (EdnKeyword | IdentExpr | JoinExpr)\n   QueryExpr      := (PlainQueryExpr | ParamExpr)\n   IdentExpr      := EdnVector2(Keyword, EdnValue)\n   ParamExpr      := EdnList2(PlainQueryExpr | EdnSymbol, ParamMapExpr)\n   ParamMapExpr   := EdnMap(Keyword, EdnValue)\n   JoinExpr       := EdnMap((Keyword | IdentExpr), (QueryRoot | UnionExpr | RecurExpr))\n   UnionExpr      := EdnMap(Keyword, QueryRoot)\n   RecurExpr      := ('... | Integer)\n\n   Note most apis in Om Next expect a QueryRoot not a QueryExpr.\n\n   QUERY EXPRESSION AST FORMAT\n\n   Given a QueryExpr you can get the AST via om.next.impl.parser/expr->ast.\n   The following keys can appear in the AST representation:\n\n   {:type         (:prop | :join | :call | :root | :union | :union-entry)\n    :key          (EdnKeyword | EdnSymbol | IdentExpr)\n    :dispatch-key (EdnKeyword | EdnSymbol)\n    :union-key    EdnKeyword\n    :query        (QueryRoot | RecurExpr)\n    :params       ParamMapExpr\n    :children     EdnVector(AST)\n    :component    Object\n    :target       EdnKeyword}\n\n   :query and :params may or may not appear. :type :call is only for\n   mutations."], null)),new cljs.core.Symbol(null,"keyword->ast","keyword->ast",(2101401428),null),"om/next/impl/parser.cljc",(19),(1),(54),(54),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),null,(cljs.core.truth_(om.next.impl.parser.keyword__GT_ast)?om.next.impl.parser.keyword__GT_ast.cljs$lang$test:null)])));})()
;
(function (){
om.next.impl.parser.union_entry__GT_ast = (function om$next$impl$parser$union_entry__GT_ast(p__30){
var vec__34 = p__30;
var k = cljs.core.nth.call(null,vec__34,(0),null);
var v = cljs.core.nth.call(null,vec__34,(1),null);
var component = new cljs.core.Keyword(null,"component","component",(1555936782)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",(-940561982)),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,om.next.impl.parser.expr__GT_ast),v),new cljs.core.Keyword(null,"union-key","union-key",(1529707234)),k,new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"union-entry","union-entry",(223335750)),new cljs.core.Keyword(null,"query","query",(-1288509510)),v], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",(1555936782)),component], null)));
}); return (
new cljs.core.Var(function(){return om.next.impl.parser.union_entry__GT_ast;},new cljs.core.Symbol("om.next.impl.parser","union-entry->ast","om.next.impl.parser/union-entry->ast",(157763482),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"om.next.impl.parser","om.next.impl.parser",(824573384),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"\n   Generic query expression parsing and AST manipulation.\n\n   QUERY EXPRESSIONS\n\n   Query expressions are a variation on Datomic Pull Syntax\n   http://docs.datomic.com/pull.html more suitable for generic client/server\n   state transfer. It's important to note the Om Next query expression syntax is\n   *not* a strict superset of Datomic Pull.\n\n   A query expression is composed of EDN values. The grammar for query\n   expressions follows:\n\n   QueryRoot      := EdnVector(QueryExpr*)\n   PlainQueryExpr := (EdnKeyword | IdentExpr | JoinExpr)\n   QueryExpr      := (PlainQueryExpr | ParamExpr)\n   IdentExpr      := EdnVector2(Keyword, EdnValue)\n   ParamExpr      := EdnList2(PlainQueryExpr | EdnSymbol, ParamMapExpr)\n   ParamMapExpr   := EdnMap(Keyword, EdnValue)\n   JoinExpr       := EdnMap((Keyword | IdentExpr), (QueryRoot | UnionExpr | RecurExpr))\n   UnionExpr      := EdnMap(Keyword, QueryRoot)\n   RecurExpr      := ('... | Integer)\n\n   Note most apis in Om Next expect a QueryRoot not a QueryExpr.\n\n   QUERY EXPRESSION AST FORMAT\n\n   Given a QueryExpr you can get the AST via om.next.impl.parser/expr->ast.\n   The following keys can appear in the AST representation:\n\n   {:type         (:prop | :join | :call | :root | :union | :union-entry)\n    :key          (EdnKeyword | EdnSymbol | IdentExpr)\n    :dispatch-key (EdnKeyword | EdnSymbol)\n    :union-key    EdnKeyword\n    :query        (QueryRoot | RecurExpr)\n    :params       ParamMapExpr\n    :children     EdnVector(AST)\n    :component    Object\n    :target       EdnKeyword}\n\n   :query and :params may or may not appear. :type :call is only for\n   mutations."], null)),new cljs.core.Symbol(null,"union-entry->ast","union-entry->ast",(376733400),null),"om/next/impl/parser.cljc",(23),(1),(59),(59),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)], null)),null,(cljs.core.truth_(om.next.impl.parser.union_entry__GT_ast)?om.next.impl.parser.union_entry__GT_ast.cljs$lang$test:null)])));})()
;
(function (){
om.next.impl.parser.union__GT_ast = (function om$next$impl$parser$union__GT_ast(m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"children","children",(-940561982)),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,om.next.impl.parser.union_entry__GT_ast),m),new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"union","union",(2142937499)),new cljs.core.Keyword(null,"query","query",(-1288509510)),m], null);
}); return (
new cljs.core.Var(function(){return om.next.impl.parser.union__GT_ast;},new cljs.core.Symbol("om.next.impl.parser","union->ast","om.next.impl.parser/union->ast",(1908793712),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"om.next.impl.parser","om.next.impl.parser",(824573384),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"\n   Generic query expression parsing and AST manipulation.\n\n   QUERY EXPRESSIONS\n\n   Query expressions are a variation on Datomic Pull Syntax\n   http://docs.datomic.com/pull.html more suitable for generic client/server\n   state transfer. It's important to note the Om Next query expression syntax is\n   *not* a strict superset of Datomic Pull.\n\n   A query expression is composed of EDN values. The grammar for query\n   expressions follows:\n\n   QueryRoot      := EdnVector(QueryExpr*)\n   PlainQueryExpr := (EdnKeyword | IdentExpr | JoinExpr)\n   QueryExpr      := (PlainQueryExpr | ParamExpr)\n   IdentExpr      := EdnVector2(Keyword, EdnValue)\n   ParamExpr      := EdnList2(PlainQueryExpr | EdnSymbol, ParamMapExpr)\n   ParamMapExpr   := EdnMap(Keyword, EdnValue)\n   JoinExpr       := EdnMap((Keyword | IdentExpr), (QueryRoot | UnionExpr | RecurExpr))\n   UnionExpr      := EdnMap(Keyword, QueryRoot)\n   RecurExpr      := ('... | Integer)\n\n   Note most apis in Om Next expect a QueryRoot not a QueryExpr.\n\n   QUERY EXPRESSION AST FORMAT\n\n   Given a QueryExpr you can get the AST via om.next.impl.parser/expr->ast.\n   The following keys can appear in the AST representation:\n\n   {:type         (:prop | :join | :call | :root | :union | :union-entry)\n    :key          (EdnKeyword | EdnSymbol | IdentExpr)\n    :dispatch-key (EdnKeyword | EdnSymbol)\n    :union-key    EdnKeyword\n    :query        (QueryRoot | RecurExpr)\n    :params       ParamMapExpr\n    :children     EdnVector(AST)\n    :component    Object\n    :target       EdnKeyword}\n\n   :query and :params may or may not appear. :type :call is only for\n   mutations."], null)),new cljs.core.Symbol(null,"union->ast","union->ast",(1345641022),null),"om/next/impl/parser.cljc",(17),(1),(69),(69),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),null,(cljs.core.truth_(om.next.impl.parser.union__GT_ast)?om.next.impl.parser.union__GT_ast.cljs$lang$test:null)])));})()
;
(function (){
om.next.impl.parser.call__GT_ast = (function om$next$impl$parser$call__GT_ast(p__37){
var vec__42 = p__37;
var f = cljs.core.nth.call(null,vec__42,(0),null);
var args = cljs.core.nth.call(null,vec__42,(1),null);
var call = vec__42;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),f)){
return cljs.core.assoc.call(null,om.next.impl.parser.expr__GT_ast.call(null,args),new cljs.core.Keyword(null,"target","target",(253001721)),(function (){var or__20817__auto__ = new cljs.core.Keyword(null,"target","target",(253001721)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,call));
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return new cljs.core.Keyword(null,"remote","remote",(-1593576576));
}
})());
} else {
var ast = cljs.core.update_in.call(null,om.next.impl.parser.expr__GT_ast.call(null,f),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",(710516235))], null),cljs.core.merge,(function (){var or__20817__auto__ = args;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var G__45 = ast;
var G__45__$1 = (((new cljs.core.Keyword(null,"dispatch-key","dispatch-key",(733619510)).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol))?cljs.core.assoc.call(null,G__45,new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"call","call",(-519999866))):G__45);
return G__45__$1;
}
}); return (
new cljs.core.Var(function(){return om.next.impl.parser.call__GT_ast;},new cljs.core.Symbol("om.next.impl.parser","call->ast","om.next.impl.parser/call->ast",(-49019616),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"om.next.impl.parser","om.next.impl.parser",(824573384),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"\n   Generic query expression parsing and AST manipulation.\n\n   QUERY EXPRESSIONS\n\n   Query expressions are a variation on Datomic Pull Syntax\n   http://docs.datomic.com/pull.html more suitable for generic client/server\n   state transfer. It's important to note the Om Next query expression syntax is\n   *not* a strict superset of Datomic Pull.\n\n   A query expression is composed of EDN values. The grammar for query\n   expressions follows:\n\n   QueryRoot      := EdnVector(QueryExpr*)\n   PlainQueryExpr := (EdnKeyword | IdentExpr | JoinExpr)\n   QueryExpr      := (PlainQueryExpr | ParamExpr)\n   IdentExpr      := EdnVector2(Keyword, EdnValue)\n   ParamExpr      := EdnList2(PlainQueryExpr | EdnSymbol, ParamMapExpr)\n   ParamMapExpr   := EdnMap(Keyword, EdnValue)\n   JoinExpr       := EdnMap((Keyword | IdentExpr), (QueryRoot | UnionExpr | RecurExpr))\n   UnionExpr      := EdnMap(Keyword, QueryRoot)\n   RecurExpr      := ('... | Integer)\n\n   Note most apis in Om Next expect a QueryRoot not a QueryExpr.\n\n   QUERY EXPRESSION AST FORMAT\n\n   Given a QueryExpr you can get the AST via om.next.impl.parser/expr->ast.\n   The following keys can appear in the AST representation:\n\n   {:type         (:prop | :join | :call | :root | :union | :union-entry)\n    :key          (EdnKeyword | EdnSymbol | IdentExpr)\n    :dispatch-key (EdnKeyword | EdnSymbol)\n    :union-key    EdnKeyword\n    :query        (QueryRoot | RecurExpr)\n    :params       ParamMapExpr\n    :children     EdnVector(AST)\n    :component    Object\n    :target       EdnKeyword}\n\n   :query and :params may or may not appear. :type :call is only for\n   mutations."], null)),new cljs.core.Symbol(null,"call->ast","call->ast",(-567984670),null),"om/next/impl/parser.cljc",(16),(1),(74),(74),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"call","call",(1120531661),null)], null)], null)),null,(cljs.core.truth_(om.next.impl.parser.call__GT_ast)?om.next.impl.parser.call__GT_ast.cljs$lang$test:null)])));})()
;
/**
 * Convert a query to its AST representation.
 */
(function (){
om.next.impl.parser.query__GT_ast = (function om$next$impl$parser$query__GT_ast(query){
var component = new cljs.core.Keyword(null,"component","component",(1555936782)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children","children",(-940561982)),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,om.next.impl.parser.expr__GT_ast),query),new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"root","root",(-448657453))], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",(1555936782)),component], null)));
}); return (
new cljs.core.Var(function(){return om.next.impl.parser.query__GT_ast;},new cljs.core.Symbol("om.next.impl.parser","query->ast","om.next.impl.parser/query->ast",(303814803),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"om.next.impl.parser","om.next.impl.parser",(824573384),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"\n   Generic query expression parsing and AST manipulation.\n\n   QUERY EXPRESSIONS\n\n   Query expressions are a variation on Datomic Pull Syntax\n   http://docs.datomic.com/pull.html more suitable for generic client/server\n   state transfer. It's important to note the Om Next query expression syntax is\n   *not* a strict superset of Datomic Pull.\n\n   A query expression is composed of EDN values. The grammar for query\n   expressions follows:\n\n   QueryRoot      := EdnVector(QueryExpr*)\n   PlainQueryExpr := (EdnKeyword | IdentExpr | JoinExpr)\n   QueryExpr      := (PlainQueryExpr | ParamExpr)\n   IdentExpr      := EdnVector2(Keyword, EdnValue)\n   ParamExpr      := EdnList2(PlainQueryExpr | EdnSymbol, ParamMapExpr)\n   ParamMapExpr   := EdnMap(Keyword, EdnValue)\n   JoinExpr       := EdnMap((Keyword | IdentExpr), (QueryRoot | UnionExpr | RecurExpr))\n   UnionExpr      := EdnMap(Keyword, QueryRoot)\n   RecurExpr      := ('... | Integer)\n\n   Note most apis in Om Next expect a QueryRoot not a QueryExpr.\n\n   QUERY EXPRESSION AST FORMAT\n\n   Given a QueryExpr you can get the AST via om.next.impl.parser/expr->ast.\n   The following keys can appear in the AST representation:\n\n   {:type         (:prop | :join | :call | :root | :union | :union-entry)\n    :key          (EdnKeyword | EdnSymbol | IdentExpr)\n    :dispatch-key (EdnKeyword | EdnSymbol)\n    :union-key    EdnKeyword\n    :query        (QueryRoot | RecurExpr)\n    :params       ParamMapExpr\n    :children     EdnVector(AST)\n    :component    Object\n    :target       EdnKeyword}\n\n   :query and :params may or may not appear. :type :call is only for\n   mutations."], null)),new cljs.core.Symbol(null,"query->ast","query->ast",(1930047957),null),"om/next/impl/parser.cljc",(17),(1),(81),(81),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),"Convert a query to its AST representation.",(cljs.core.truth_(om.next.impl.parser.query__GT_ast)?om.next.impl.parser.query__GT_ast.cljs$lang$test:null)])));})()
;
(function (){
om.next.impl.parser.join__GT_ast = (function om$next$impl$parser$join__GT_ast(join){
var query_root_QMARK_ = new cljs.core.Keyword(null,"query-root","query-root",(359781888)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,join));
var vec__49 = cljs.core.first.call(null,join);
var k = cljs.core.nth.call(null,vec__49,(0),null);
var v = cljs.core.nth.call(null,vec__49,(1),null);
var ast = om.next.impl.parser.expr__GT_ast.call(null,k);
var component = new cljs.core.Keyword(null,"component","component",(1555936782)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
return cljs.core.merge.call(null,ast,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"join","join",(-758861890)),new cljs.core.Keyword(null,"query","query",(-1288509510)),v], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",(1555936782)),component], null)),(cljs.core.truth_(query_root_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",(359781888)),true], null):null),(((typeof v === 'number') || (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"...","...",(-1926939749),null),v)))?null:((cljs.core.vector_QMARK_.call(null,v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",(-940561982)),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,om.next.impl.parser.expr__GT_ast),v)], null):((cljs.core.map_QMARK_.call(null,v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",(-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.impl.parser.union__GT_ast.call(null,v)], null)], null):(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid join, "),cljs.core.str(join)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword("error","invalid-join","error/invalid-join",(1594073006))], null))})()
))));
}); return (
new cljs.core.Var(function(){return om.next.impl.parser.join__GT_ast;},new cljs.core.Symbol("om.next.impl.parser","join->ast","om.next.impl.parser/join->ast",(1181858420),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"om.next.impl.parser","om.next.impl.parser",(824573384),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"\n   Generic query expression parsing and AST manipulation.\n\n   QUERY EXPRESSIONS\n\n   Query expressions are a variation on Datomic Pull Syntax\n   http://docs.datomic.com/pull.html more suitable for generic client/server\n   state transfer. It's important to note the Om Next query expression syntax is\n   *not* a strict superset of Datomic Pull.\n\n   A query expression is composed of EDN values. The grammar for query\n   expressions follows:\n\n   QueryRoot      := EdnVector(QueryExpr*)\n   PlainQueryExpr := (EdnKeyword | IdentExpr | JoinExpr)\n   QueryExpr      := (PlainQueryExpr | ParamExpr)\n   IdentExpr      := EdnVector2(Keyword, EdnValue)\n   ParamExpr      := EdnList2(PlainQueryExpr | EdnSymbol, ParamMapExpr)\n   ParamMapExpr   := EdnMap(Keyword, EdnValue)\n   JoinExpr       := EdnMap((Keyword | IdentExpr), (QueryRoot | UnionExpr | RecurExpr))\n   UnionExpr      := EdnMap(Keyword, QueryRoot)\n   RecurExpr      := ('... | Integer)\n\n   Note most apis in Om Next expect a QueryRoot not a QueryExpr.\n\n   QUERY EXPRESSION AST FORMAT\n\n   Given a QueryExpr you can get the AST via om.next.impl.parser/expr->ast.\n   The following keys can appear in the AST representation:\n\n   {:type         (:prop | :join | :call | :root | :union | :union-entry)\n    :key          (EdnKeyword | EdnSymbol | IdentExpr)\n    :dispatch-key (EdnKeyword | EdnSymbol)\n    :union-key    EdnKeyword\n    :query        (QueryRoot | RecurExpr)\n    :params       ParamMapExpr\n    :children     EdnVector(AST)\n    :component    Object\n    :target       EdnKeyword}\n\n   :query and :params may or may not appear. :type :call is only for\n   mutations."], null)),new cljs.core.Symbol(null,"join->ast","join->ast",(-1484593870),null),"om/next/impl/parser.cljc",(16),(1),(91),(91),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"join","join",(881669637),null)], null)),null,(cljs.core.truth_(om.next.impl.parser.join__GT_ast)?om.next.impl.parser.join__GT_ast.cljs$lang$test:null)])));})()
;
(function (){
om.next.impl.parser.ident__GT_ast = (function om$next$impl$parser$ident__GT_ast(p__52){
var vec__56 = p__52;
var k = cljs.core.nth.call(null,vec__56,(0),null);
var id = cljs.core.nth.call(null,vec__56,(1),null);
var ref = vec__56;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",(-1516042587)),ref,new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"prop","prop",(-515168332)),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",(733619510)),k], null);
}); return (
new cljs.core.Var(function(){return om.next.impl.parser.ident__GT_ast;},new cljs.core.Symbol("om.next.impl.parser","ident->ast","om.next.impl.parser/ident->ast",(-1895776300),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"om.next.impl.parser","om.next.impl.parser",(824573384),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"\n   Generic query expression parsing and AST manipulation.\n\n   QUERY EXPRESSIONS\n\n   Query expressions are a variation on Datomic Pull Syntax\n   http://docs.datomic.com/pull.html more suitable for generic client/server\n   state transfer. It's important to note the Om Next query expression syntax is\n   *not* a strict superset of Datomic Pull.\n\n   A query expression is composed of EDN values. The grammar for query\n   expressions follows:\n\n   QueryRoot      := EdnVector(QueryExpr*)\n   PlainQueryExpr := (EdnKeyword | IdentExpr | JoinExpr)\n   QueryExpr      := (PlainQueryExpr | ParamExpr)\n   IdentExpr      := EdnVector2(Keyword, EdnValue)\n   ParamExpr      := EdnList2(PlainQueryExpr | EdnSymbol, ParamMapExpr)\n   ParamMapExpr   := EdnMap(Keyword, EdnValue)\n   JoinExpr       := EdnMap((Keyword | IdentExpr), (QueryRoot | UnionExpr | RecurExpr))\n   UnionExpr      := EdnMap(Keyword, QueryRoot)\n   RecurExpr      := ('... | Integer)\n\n   Note most apis in Om Next expect a QueryRoot not a QueryExpr.\n\n   QUERY EXPRESSION AST FORMAT\n\n   Given a QueryExpr you can get the AST via om.next.impl.parser/expr->ast.\n   The following keys can appear in the AST representation:\n\n   {:type         (:prop | :join | :call | :root | :union | :union-entry)\n    :key          (EdnKeyword | EdnSymbol | IdentExpr)\n    :dispatch-key (EdnKeyword | EdnSymbol)\n    :union-key    EdnKeyword\n    :query        (QueryRoot | RecurExpr)\n    :params       ParamMapExpr\n    :children     EdnVector(AST)\n    :component    Object\n    :target       EdnKeyword}\n\n   :query and :params may or may not appear. :type :call is only for\n   mutations."], null)),new cljs.core.Symbol(null,"ident->ast","ident->ast",(-1401727850),null),"om/next/impl/parser.cljc",(17),(1),(110),(110),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"ref","ref",(-1364538802),null)], null)], null)),null,(cljs.core.truth_(om.next.impl.parser.ident__GT_ast)?om.next.impl.parser.ident__GT_ast.cljs$lang$test:null)])));})()
;
/**
 * Given a query expression convert it into an AST.
 */
(function (){
om.next.impl.parser.expr__GT_ast = (function om$next$impl$parser$expr__GT_ast(x){
if((x instanceof cljs.core.Symbol)){
return om.next.impl.parser.symbol__GT_ast.call(null,x);
} else {
if((x instanceof cljs.core.Keyword)){
return om.next.impl.parser.keyword__GT_ast.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return om.next.impl.parser.join__GT_ast.call(null,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return om.next.impl.parser.ident__GT_ast.call(null,x);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return om.next.impl.parser.call__GT_ast.call(null,x);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid expression "),cljs.core.str(x)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",(-881565136))], null));

}
}
}
}
}
}); return (
new cljs.core.Var(function(){return om.next.impl.parser.expr__GT_ast;},new cljs.core.Symbol("om.next.impl.parser","expr->ast","om.next.impl.parser/expr->ast",(977394447),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"om.next.impl.parser","om.next.impl.parser",(824573384),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"\n   Generic query expression parsing and AST manipulation.\n\n   QUERY EXPRESSIONS\n\n   Query expressions are a variation on Datomic Pull Syntax\n   http://docs.datomic.com/pull.html more suitable for generic client/server\n   state transfer. It's important to note the Om Next query expression syntax is\n   *not* a strict superset of Datomic Pull.\n\n   A query expression is composed of EDN values. The grammar for query\n   expressions follows:\n\n   QueryRoot      := EdnVector(QueryExpr*)\n   PlainQueryExpr := (EdnKeyword | IdentExpr | JoinExpr)\n   QueryExpr      := (PlainQueryExpr | ParamExpr)\n   IdentExpr      := EdnVector2(Keyword, EdnValue)\n   ParamExpr      := EdnList2(PlainQueryExpr | EdnSymbol, ParamMapExpr)\n   ParamMapExpr   := EdnMap(Keyword, EdnValue)\n   JoinExpr       := EdnMap((Keyword | IdentExpr), (QueryRoot | UnionExpr | RecurExpr))\n   UnionExpr      := EdnMap(Keyword, QueryRoot)\n   RecurExpr      := ('... | Integer)\n\n   Note most apis in Om Next expect a QueryRoot not a QueryExpr.\n\n   QUERY EXPRESSION AST FORMAT\n\n   Given a QueryExpr you can get the AST via om.next.impl.parser/expr->ast.\n   The following keys can appear in the AST representation:\n\n   {:type         (:prop | :join | :call | :root | :union | :union-entry)\n    :key          (EdnKeyword | EdnSymbol | IdentExpr)\n    :dispatch-key (EdnKeyword | EdnSymbol)\n    :union-key    EdnKeyword\n    :query        (QueryRoot | RecurExpr)\n    :params       ParamMapExpr\n    :children     EdnVector(AST)\n    :component    Object\n    :target       EdnKeyword}\n\n   :query and :params may or may not appear. :type :call is only for\n   mutations."], null)),new cljs.core.Symbol(null,"expr->ast","expr->ast",(464686145),null),"om/next/impl/parser.cljc",(16),(1),(115),(115),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Given a query expression convert it into an AST.",(cljs.core.truth_(om.next.impl.parser.expr__GT_ast)?om.next.impl.parser.expr__GT_ast.cljs$lang$test:null)])));})()
;
(function (){
om.next.impl.parser.wrap_expr = (function om$next$impl$parser$wrap_expr(root_QMARK_,expr){
if(cljs.core.truth_(root_QMARK_)){
return cljs.core.with_meta.call(null,(function (){var G__60 = expr;
var G__60__$1 = (((expr instanceof cljs.core.Keyword))?(function (){var x__23399__auto__ = G__60;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})():G__60);
return G__60__$1;
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",(359781888)),true], null));
} else {
return expr;
}
}); return (
new cljs.core.Var(function(){return om.next.impl.parser.wrap_expr;},new cljs.core.Symbol("om.next.impl.parser","wrap-expr","om.next.impl.parser/wrap-expr",(508296831),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"om.next.impl.parser","om.next.impl.parser",(824573384),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"\n   Generic query expression parsing and AST manipulation.\n\n   QUERY EXPRESSIONS\n\n   Query expressions are a variation on Datomic Pull Syntax\n   http://docs.datomic.com/pull.html more suitable for generic client/server\n   state transfer. It's important to note the Om Next query expression syntax is\n   *not* a strict superset of Datomic Pull.\n\n   A query expression is composed of EDN values. The grammar for query\n   expressions follows:\n\n   QueryRoot      := EdnVector(QueryExpr*)\n   PlainQueryExpr := (EdnKeyword | IdentExpr | JoinExpr)\n   QueryExpr      := (PlainQueryExpr | ParamExpr)\n   IdentExpr      := EdnVector2(Keyword, EdnValue)\n   ParamExpr      := EdnList2(PlainQueryExpr | EdnSymbol, ParamMapExpr)\n   ParamMapExpr   := EdnMap(Keyword, EdnValue)\n   JoinExpr       := EdnMap((Keyword | IdentExpr), (QueryRoot | UnionExpr | RecurExpr))\n   UnionExpr      := EdnMap(Keyword, QueryRoot)\n   RecurExpr      := ('... | Integer)\n\n   Note most apis in Om Next expect a QueryRoot not a QueryExpr.\n\n   QUERY EXPRESSION AST FORMAT\n\n   Given a QueryExpr you can get the AST via om.next.impl.parser/expr->ast.\n   The following keys can appear in the AST representation:\n\n   {:type         (:prop | :join | :call | :root | :union | :union-entry)\n    :key          (EdnKeyword | EdnSymbol | IdentExpr)\n    :dispatch-key (EdnKeyword | EdnSymbol)\n    :union-key    EdnKeyword\n    :query        (QueryRoot | RecurExpr)\n    :params       ParamMapExpr\n    :children     EdnVector(AST)\n    :component    Object\n    :target       EdnKeyword}\n\n   :query and :params may or may not appear. :type :call is only for\n   mutations."], null)),new cljs.core.Symbol(null,"wrap-expr","wrap-expr",(1062512433),null),"om/next/impl/parser.cljc",(16),(1),(128),(128),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root?","root?",(-405107991),null),new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null)),null,(cljs.core.truth_(om.next.impl.parser.wrap_expr)?om.next.impl.parser.wrap_expr.cljs$lang$test:null)])));})()
;
/**
 * Given a query expression AST convert it back into a query expression.
 */
(function (){
om.next.impl.parser.ast__GT_expr = (function om$next$impl$parser$ast__GT_expr(var_args){
var args61 = [];
var len__23656__auto___78 = arguments.length;
var i__23657__auto___79 = (0);
while(true){
if((i__23657__auto___79 < len__23656__auto___78)){
args61.push((arguments[i__23657__auto___79]));

var G__80 = (i__23657__auto___79 + (1));
i__23657__auto___79 = G__80;
continue;
} else {
}
break;
}

var G__63 = args61.length;
switch (G__63) {
case (1):
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next.impl.parser.ast__GT_expr;},new cljs.core.Symbol("om.next.impl.parser","ast->expr","om.next.impl.parser/ast->expr",(-1728441600),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"om.next.impl.parser","om.next.impl.parser",(824573384),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"\n   Generic query expression parsing and AST manipulation.\n\n   QUERY EXPRESSIONS\n\n   Query expressions are a variation on Datomic Pull Syntax\n   http://docs.datomic.com/pull.html more suitable for generic client/server\n   state transfer. It's important to note the Om Next query expression syntax is\n   *not* a strict superset of Datomic Pull.\n\n   A query expression is composed of EDN values. The grammar for query\n   expressions follows:\n\n   QueryRoot      := EdnVector(QueryExpr*)\n   PlainQueryExpr := (EdnKeyword | IdentExpr | JoinExpr)\n   QueryExpr      := (PlainQueryExpr | ParamExpr)\n   IdentExpr      := EdnVector2(Keyword, EdnValue)\n   ParamExpr      := EdnList2(PlainQueryExpr | EdnSymbol, ParamMapExpr)\n   ParamMapExpr   := EdnMap(Keyword, EdnValue)\n   JoinExpr       := EdnMap((Keyword | IdentExpr), (QueryRoot | UnionExpr | RecurExpr))\n   UnionExpr      := EdnMap(Keyword, QueryRoot)\n   RecurExpr      := ('... | Integer)\n\n   Note most apis in Om Next expect a QueryRoot not a QueryExpr.\n\n   QUERY EXPRESSION AST FORMAT\n\n   Given a QueryExpr you can get the AST via om.next.impl.parser/expr->ast.\n   The following keys can appear in the AST representation:\n\n   {:type         (:prop | :join | :call | :root | :union | :union-entry)\n    :key          (EdnKeyword | EdnSymbol | IdentExpr)\n    :dispatch-key (EdnKeyword | EdnSymbol)\n    :union-key    EdnKeyword\n    :query        (QueryRoot | RecurExpr)\n    :params       ParamMapExpr\n    :children     EdnVector(AST)\n    :component    Object\n    :target       EdnKeyword}\n\n   :query and :params may or may not appear. :type :call is only for\n   mutations."], null)),new cljs.core.Symbol(null,"ast->expr","ast->expr",(-108172606),null),"om/next/impl/parser.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ast","ast",(780197459),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"ast","ast",(780197459),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)], null),new cljs.core.Symbol(null,"unparse?","unparse?",(641270279),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ast","ast",(780197459),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"ast","ast",(780197459),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)], null),new cljs.core.Symbol(null,"unparse?","unparse?",(641270279),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(135),(135),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ast","ast",(780197459),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"ast","ast",(780197459),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)], null),new cljs.core.Symbol(null,"unparse?","unparse?",(641270279),null)], null)),"Given a query expression AST convert it back into a query expression.",(cljs.core.truth_(om.next.impl.parser.ast__GT_expr)?om.next.impl.parser.ast__GT_expr.cljs$lang$test:null)])));})()
;

om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1 = (function (ast){
return om.next.impl.parser.ast__GT_expr.call(null,ast,false);
});

om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2 = (function (p__64,unparse_QMARK_){
var map__65 = p__64;
var map__65__$1 = ((((!((map__65 == null)))?((((map__65.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65):map__65);
var ast = map__65__$1;
var type = cljs.core.get.call(null,map__65__$1,new cljs.core.Keyword(null,"type","type",(1174270348)));
var component = cljs.core.get.call(null,map__65__$1,new cljs.core.Keyword(null,"component","component",(1555936782)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"root","root",(-448657453)),type)){
var G__67 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (map__65,map__65__$1,ast,type,component){
return (function (p1__2_SHARP_){
return om.next.impl.parser.ast__GT_expr.call(null,p1__2_SHARP_,unparse_QMARK_);
});})(map__65,map__65__$1,ast,type,component))
),new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(ast));
var G__67__$1 = ((!((component == null)))?cljs.core.with_meta.call(null,G__67,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",(1555936782)),component], null)):G__67);
return G__67__$1;
} else {
var map__68 = ast;
var map__68__$1 = ((((!((map__68 == null)))?((((map__68.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68):map__68);
var query = cljs.core.get.call(null,map__68__$1,new cljs.core.Keyword(null,"query","query",(-1288509510)));
var query_root = cljs.core.get.call(null,map__68__$1,new cljs.core.Keyword(null,"query-root","query-root",(359781888)));
var key = cljs.core.get.call(null,map__68__$1,new cljs.core.Keyword(null,"key","key",(-1516042587)));
var params = cljs.core.get.call(null,map__68__$1,new cljs.core.Keyword(null,"params","params",(710516235)));
return om.next.impl.parser.wrap_expr.call(null,query_root,((!((params == null)))?(function (){var expr = om.next.impl.parser.ast__GT_expr.call(null,cljs.core.dissoc.call(null,ast,new cljs.core.Keyword(null,"params","params",(710516235))),unparse_QMARK_);
if(!(cljs.core.empty_QMARK_.call(null,params))){
var x__23399__auto__ = expr;
return cljs.core._conj.call(null,(function (){var x__23399__auto____$1 = params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto____$1);
})(),x__23399__auto__);
} else {
var x__23399__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
}
})():((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"join","join",(-758861890)),type))?(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"...","...",(-1926939749),null),query)) && (!(typeof query === 'number')) && (unparse_QMARK_ === true))?(function (){var map__70 = ast;
var map__70__$1 = ((((!((map__70 == null)))?((((map__70.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70):map__70);
var children = cljs.core.get.call(null,map__70__$1,new cljs.core.Keyword(null,"children","children",(-940561982)));
if((((1) === cljs.core.count.call(null,children))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"union","union",(2142937499)),new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,children))))){
return cljs.core.PersistentArrayMap.fromArray([key,cljs.core.into.call(null,(function (){var G__72 = cljs.core.PersistentArrayMap.EMPTY;
var G__72__$1 = (cljs.core.truth_(component)?cljs.core.with_meta.call(null,G__72,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",(1555936782)),component], null)):G__72);
return G__72__$1;
})(),cljs.core.map.call(null,((function (map__70,map__70__$1,children,map__68,map__68__$1,query,query_root,key,params,map__65,map__65__$1,ast,type,component){
return (function (p__73){
var map__74 = p__73;
var map__74__$1 = ((((!((map__74 == null)))?((((map__74.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74):map__74);
var children__$1 = cljs.core.get.call(null,map__74__$1,new cljs.core.Keyword(null,"children","children",(-940561982)));
var union_key = cljs.core.get.call(null,map__74__$1,new cljs.core.Keyword(null,"union-key","union-key",(1529707234)));
var component__$1 = cljs.core.get.call(null,map__74__$1,new cljs.core.Keyword(null,"component","component",(1555936782)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_key,(function (){var G__76 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (map__74,map__74__$1,children__$1,union_key,component__$1,map__70,map__70__$1,children,map__68,map__68__$1,query,query_root,key,params,map__65,map__65__$1,ast,type,component){
return (function (p1__3_SHARP_){
return om.next.impl.parser.ast__GT_expr.call(null,p1__3_SHARP_,unparse_QMARK_);
});})(map__74,map__74__$1,children__$1,union_key,component__$1,map__70,map__70__$1,children,map__68,map__68__$1,query,query_root,key,params,map__65,map__65__$1,ast,type,component))
),children__$1);
var G__76__$1 = ((!((component__$1 == null)))?cljs.core.with_meta.call(null,G__76,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",(1555936782)),component__$1], null)):G__76);
return G__76__$1;
})()], null);
});})(map__70,map__70__$1,children,map__68,map__68__$1,query,query_root,key,params,map__65,map__65__$1,ast,type,component))
),new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,children)))], true, false);
} else {
return cljs.core.PersistentArrayMap.fromArray([key,(function (){var G__77 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (map__70,map__70__$1,children,map__68,map__68__$1,query,query_root,key,params,map__65,map__65__$1,ast,type,component){
return (function (p1__4_SHARP_){
return om.next.impl.parser.ast__GT_expr.call(null,p1__4_SHARP_,unparse_QMARK_);
});})(map__70,map__70__$1,children,map__68,map__68__$1,query,query_root,key,params,map__65,map__65__$1,ast,type,component))
),children);
var G__77__$1 = ((!((component == null)))?cljs.core.with_meta.call(null,G__77,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",(1555936782)),component], null)):G__77);
return G__77__$1;
})()], true, false);
}
})():cljs.core.PersistentArrayMap.fromArray([key,query], true, false)):key)));
}
});

om.next.impl.parser.ast__GT_expr.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return om.next.impl.parser.ast__GT_expr;},new cljs.core.Symbol("om.next.impl.parser","ast->expr","om.next.impl.parser/ast->expr",(-1728441600),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"om.next.impl.parser","om.next.impl.parser",(824573384),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"\n   Generic query expression parsing and AST manipulation.\n\n   QUERY EXPRESSIONS\n\n   Query expressions are a variation on Datomic Pull Syntax\n   http://docs.datomic.com/pull.html more suitable for generic client/server\n   state transfer. It's important to note the Om Next query expression syntax is\n   *not* a strict superset of Datomic Pull.\n\n   A query expression is composed of EDN values. The grammar for query\n   expressions follows:\n\n   QueryRoot      := EdnVector(QueryExpr*)\n   PlainQueryExpr := (EdnKeyword | IdentExpr | JoinExpr)\n   QueryExpr      := (PlainQueryExpr | ParamExpr)\n   IdentExpr      := EdnVector2(Keyword, EdnValue)\n   ParamExpr      := EdnList2(PlainQueryExpr | EdnSymbol, ParamMapExpr)\n   ParamMapExpr   := EdnMap(Keyword, EdnValue)\n   JoinExpr       := EdnMap((Keyword | IdentExpr), (QueryRoot | UnionExpr | RecurExpr))\n   UnionExpr      := EdnMap(Keyword, QueryRoot)\n   RecurExpr      := ('... | Integer)\n\n   Note most apis in Om Next expect a QueryRoot not a QueryExpr.\n\n   QUERY EXPRESSION AST FORMAT\n\n   Given a QueryExpr you can get the AST via om.next.impl.parser/expr->ast.\n   The following keys can appear in the AST representation:\n\n   {:type         (:prop | :join | :call | :root | :union | :union-entry)\n    :key          (EdnKeyword | EdnSymbol | IdentExpr)\n    :dispatch-key (EdnKeyword | EdnSymbol)\n    :union-key    EdnKeyword\n    :query        (QueryRoot | RecurExpr)\n    :params       ParamMapExpr\n    :children     EdnVector(AST)\n    :component    Object\n    :target       EdnKeyword}\n\n   :query and :params may or may not appear. :type :call is only for\n   mutations."], null)),new cljs.core.Symbol(null,"ast->expr","ast->expr",(-108172606),null),"om/next/impl/parser.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ast","ast",(780197459),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"ast","ast",(780197459),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)], null),new cljs.core.Symbol(null,"unparse?","unparse?",(641270279),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ast","ast",(780197459),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"ast","ast",(780197459),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)], null),new cljs.core.Symbol(null,"unparse?","unparse?",(641270279),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(135),(135),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ast","ast",(780197459),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"ast","ast",(780197459),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)], null),new cljs.core.Symbol(null,"unparse?","unparse?",(641270279),null)], null)),"Given a query expression AST convert it back into a query expression.",(cljs.core.truth_(om.next.impl.parser.ast__GT_expr)?om.next.impl.parser.ast__GT_expr.cljs$lang$test:null)]));
/**
 * Add path metadata to a data structure. data is the data to be worked on.
 * path is the current path into the data. query is the query used to
 * walk the data. union-expr tracks the last seen union query to be used
 * when it finds a recursive union.
 */
(function (){
om.next.impl.parser.path_meta = (function om$next$impl$parser$path_meta(var_args){
var args82 = [];
var len__23656__auto___96 = arguments.length;
var i__23657__auto___97 = (0);
while(true){
if((i__23657__auto___97 < len__23656__auto___96)){
args82.push((arguments[i__23657__auto___97]));

var G__98 = (i__23657__auto___97 + (1));
i__23657__auto___97 = G__98;
continue;
} else {
}
break;
}

var G__84 = args82.length;
switch (G__84) {
case (3):
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args82.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next.impl.parser.path_meta;},new cljs.core.Symbol("om.next.impl.parser","path-meta","om.next.impl.parser/path-meta",(1318162078),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"om.next.impl.parser","om.next.impl.parser",(824573384),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"\n   Generic query expression parsing and AST manipulation.\n\n   QUERY EXPRESSIONS\n\n   Query expressions are a variation on Datomic Pull Syntax\n   http://docs.datomic.com/pull.html more suitable for generic client/server\n   state transfer. It's important to note the Om Next query expression syntax is\n   *not* a strict superset of Datomic Pull.\n\n   A query expression is composed of EDN values. The grammar for query\n   expressions follows:\n\n   QueryRoot      := EdnVector(QueryExpr*)\n   PlainQueryExpr := (EdnKeyword | IdentExpr | JoinExpr)\n   QueryExpr      := (PlainQueryExpr | ParamExpr)\n   IdentExpr      := EdnVector2(Keyword, EdnValue)\n   ParamExpr      := EdnList2(PlainQueryExpr | EdnSymbol, ParamMapExpr)\n   ParamMapExpr   := EdnMap(Keyword, EdnValue)\n   JoinExpr       := EdnMap((Keyword | IdentExpr), (QueryRoot | UnionExpr | RecurExpr))\n   UnionExpr      := EdnMap(Keyword, QueryRoot)\n   RecurExpr      := ('... | Integer)\n\n   Note most apis in Om Next expect a QueryRoot not a QueryExpr.\n\n   QUERY EXPRESSION AST FORMAT\n\n   Given a QueryExpr you can get the AST via om.next.impl.parser/expr->ast.\n   The following keys can appear in the AST representation:\n\n   {:type         (:prop | :join | :call | :root | :union | :union-entry)\n    :key          (EdnKeyword | EdnSymbol | IdentExpr)\n    :dispatch-key (EdnKeyword | EdnSymbol)\n    :union-key    EdnKeyword\n    :query        (QueryRoot | RecurExpr)\n    :params       ParamMapExpr\n    :children     EdnVector(AST)\n    :component    Object\n    :target       EdnKeyword}\n\n   :query and :params may or may not appear. :type :call is only for\n   mutations."], null)),new cljs.core.Symbol(null,"path-meta","path-meta",(1776481872),null),"om/next/impl/parser.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"union-expr","union-expr",(-2017401102),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"union-expr","union-expr",(-2017401102),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(167),(167),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"union-expr","union-expr",(-2017401102),null)], null)),"Add path metadata to a data structure. data is the data to be worked on.\n   path is the current path into the data. query is the query used to\n   walk the data. union-expr tracks the last seen union query to be used\n   when it finds a recursive union.",(cljs.core.truth_(om.next.impl.parser.path_meta)?om.next.impl.parser.path_meta.cljs$lang$test:null)])));})()
;

om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$3 = (function (data,path,query){
return om.next.impl.parser.path_meta.call(null,data,path,query,null);
});

om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4 = (function (data,path,query,union_expr){
if((query == null)){
var G__85 = data;
var G__85__$1 = ((((!((data == null)))?((((data.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IWithMeta$)))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,data)))?cljs.core.vary_meta.call(null,G__85,cljs.core.assoc,new cljs.core.Keyword(null,"om-path","om-path",(-1911443978)),path):G__85);
return G__85__$1;
} else {
if(cljs.core.sequential_QMARK_.call(null,data)){
return cljs.core.vary_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.call(null,(function (idx,v){
return om.next.impl.parser.path_meta.call(null,v,cljs.core.conj.call(null,path,idx),query,union_expr);
})),data),cljs.core.assoc,new cljs.core.Keyword(null,"om-path","om-path",(-1911443978)),path);
} else {
if(cljs.core.vector_QMARK_.call(null,query)){
var joins = cljs.core.seq.call(null,query);
var ret = data;
while(true){
if(!((joins == null))){
var join = cljs.core.first.call(null,joins);
if(cljs.core.not.call(null,(function (){var or__20817__auto__ = om.util.join_QMARK_.call(null,join);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return (om.util.ident_QMARK_.call(null,join)) || ((cljs.core.seq_QMARK_.call(null,join)) && (om.util.ident_QMARK_.call(null,cljs.core.first.call(null,join))));
}
})())){
var G__100 = cljs.core.next.call(null,joins);
var G__101 = ret;
joins = G__100;
ret = G__101;
continue;
} else {
var join__$1 = (function (){var G__90 = join;
var G__90__$1 = ((cljs.core.seq_QMARK_.call(null,join))?cljs.core.first.call(null,G__90):G__90);
return G__90__$1;
})();
var join__$2 = (function (){var G__91 = join__$1;
var G__91__$1 = ((om.util.ident_QMARK_.call(null,join__$1))?cljs.core.PersistentHashMap.fromArrays([G__91],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",(345799209),null)], null)]):G__91);
return G__91__$1;
})();
var vec__87 = om.util.join_entry.call(null,join__$2);
var key = cljs.core.nth.call(null,vec__87,(0),null);
var sel = cljs.core.nth.call(null,vec__87,(1),null);
var union_entry = ((om.util.union_QMARK_.call(null,join__$2))?sel:union_expr);
var sel__$1 = ((om.util.recursion_QMARK_.call(null,sel))?((!((union_expr == null)))?union_entry:query):sel);
var key__$1 = (function (){var G__92 = key;
var G__92__$1 = ((om.util.unique_ident_QMARK_.call(null,key))?cljs.core.first.call(null,G__92):G__92);
return G__92__$1;
})();
var v = cljs.core.get.call(null,ret,key__$1);
var G__102 = cljs.core.next.call(null,joins);
var G__103 = (function (){var G__93 = ret;
var G__93__$1 = (((cljs.core.map_QMARK_.call(null,ret)) && (cljs.core.contains_QMARK_.call(null,ret,key__$1)))?cljs.core.assoc.call(null,G__93,key__$1,om.next.impl.parser.path_meta.call(null,v,cljs.core.conj.call(null,path,key__$1),sel__$1,union_entry)):G__93);
return G__93__$1;
})();
joins = G__102;
ret = G__103;
continue;
}
} else {
var G__94 = ret;
var G__94__$1 = ((((!((ret == null)))?((((ret.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === ret.cljs$core$IWithMeta$)))?true:(((!ret.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,ret):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,ret)))?cljs.core.vary_meta.call(null,G__94,cljs.core.assoc,new cljs.core.Keyword(null,"om-path","om-path",(-1911443978)),path):G__94);
return G__94__$1;
}
break;
}
} else {
if(cljs.core.map_QMARK_.call(null,data)){
var dispatch_key = cljs.core.comp.call(null,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",(733619510)),om.next.impl.parser.expr__GT_ast);
var branches = cljs.core.vals.call(null,query);
var props = cljs.core.map.call(null,dispatch_key,cljs.core.keys.call(null,data));
var query__$1 = cljs.core.reduce.call(null,((function (dispatch_key,branches,props){
return (function (ret,q){
var query_props = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,dispatch_key),q);
var props__$1 = cljs.core.set.call(null,props);
if(cljs.core._EQ_.call(null,cljs.core.set.call(null,props__$1),cljs.core.set.call(null,query_props))){
return cljs.core.reduced.call(null,q);
} else {
if(cljs.core.truth_(clojure.set.subset_QMARK_.call(null,props__$1,query_props))){
return q;
} else {
return ret;

}
}
});})(dispatch_key,branches,props))
,null,branches);
return om.next.impl.parser.path_meta.call(null,data,path,query__$1,union_expr);
} else {
return data;
}

}
}
}
});

om.next.impl.parser.path_meta.cljs$lang$maxFixedArity = (4);

new cljs.core.Var(function(){return om.next.impl.parser.path_meta;},new cljs.core.Symbol("om.next.impl.parser","path-meta","om.next.impl.parser/path-meta",(1318162078),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"om.next.impl.parser","om.next.impl.parser",(824573384),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"\n   Generic query expression parsing and AST manipulation.\n\n   QUERY EXPRESSIONS\n\n   Query expressions are a variation on Datomic Pull Syntax\n   http://docs.datomic.com/pull.html more suitable for generic client/server\n   state transfer. It's important to note the Om Next query expression syntax is\n   *not* a strict superset of Datomic Pull.\n\n   A query expression is composed of EDN values. The grammar for query\n   expressions follows:\n\n   QueryRoot      := EdnVector(QueryExpr*)\n   PlainQueryExpr := (EdnKeyword | IdentExpr | JoinExpr)\n   QueryExpr      := (PlainQueryExpr | ParamExpr)\n   IdentExpr      := EdnVector2(Keyword, EdnValue)\n   ParamExpr      := EdnList2(PlainQueryExpr | EdnSymbol, ParamMapExpr)\n   ParamMapExpr   := EdnMap(Keyword, EdnValue)\n   JoinExpr       := EdnMap((Keyword | IdentExpr), (QueryRoot | UnionExpr | RecurExpr))\n   UnionExpr      := EdnMap(Keyword, QueryRoot)\n   RecurExpr      := ('... | Integer)\n\n   Note most apis in Om Next expect a QueryRoot not a QueryExpr.\n\n   QUERY EXPRESSION AST FORMAT\n\n   Given a QueryExpr you can get the AST via om.next.impl.parser/expr->ast.\n   The following keys can appear in the AST representation:\n\n   {:type         (:prop | :join | :call | :root | :union | :union-entry)\n    :key          (EdnKeyword | EdnSymbol | IdentExpr)\n    :dispatch-key (EdnKeyword | EdnSymbol)\n    :union-key    EdnKeyword\n    :query        (QueryRoot | RecurExpr)\n    :params       ParamMapExpr\n    :children     EdnVector(AST)\n    :component    Object\n    :target       EdnKeyword}\n\n   :query and :params may or may not appear. :type :call is only for\n   mutations."], null)),new cljs.core.Symbol(null,"path-meta","path-meta",(1776481872),null),"om/next/impl/parser.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"union-expr","union-expr",(-2017401102),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"union-expr","union-expr",(-2017401102),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(167),(167),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"union-expr","union-expr",(-2017401102),null)], null)),"Add path metadata to a data structure. data is the data to be worked on.\n   path is the current path into the data. query is the query used to\n   walk the data. union-expr tracks the last seen union query to be used\n   when it finds a recursive union.",(cljs.core.truth_(om.next.impl.parser.path_meta)?om.next.impl.parser.path_meta.cljs$lang$test:null)]));
(function (){
om.next.impl.parser.rethrow_QMARK_ = (function om$next$impl$parser$rethrow_QMARK_(x){
return ((x instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword("om.next","abort","om.next/abort",(-897542671)),new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,x))));
}); return (
new cljs.core.Var(function(){return om.next.impl.parser.rethrow_QMARK_;},new cljs.core.Symbol("om.next.impl.parser","rethrow?","om.next.impl.parser/rethrow?",(-1415211776),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"om.next.impl.parser","om.next.impl.parser",(824573384),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"\n   Generic query expression parsing and AST manipulation.\n\n   QUERY EXPRESSIONS\n\n   Query expressions are a variation on Datomic Pull Syntax\n   http://docs.datomic.com/pull.html more suitable for generic client/server\n   state transfer. It's important to note the Om Next query expression syntax is\n   *not* a strict superset of Datomic Pull.\n\n   A query expression is composed of EDN values. The grammar for query\n   expressions follows:\n\n   QueryRoot      := EdnVector(QueryExpr*)\n   PlainQueryExpr := (EdnKeyword | IdentExpr | JoinExpr)\n   QueryExpr      := (PlainQueryExpr | ParamExpr)\n   IdentExpr      := EdnVector2(Keyword, EdnValue)\n   ParamExpr      := EdnList2(PlainQueryExpr | EdnSymbol, ParamMapExpr)\n   ParamMapExpr   := EdnMap(Keyword, EdnValue)\n   JoinExpr       := EdnMap((Keyword | IdentExpr), (QueryRoot | UnionExpr | RecurExpr))\n   UnionExpr      := EdnMap(Keyword, QueryRoot)\n   RecurExpr      := ('... | Integer)\n\n   Note most apis in Om Next expect a QueryRoot not a QueryExpr.\n\n   QUERY EXPRESSION AST FORMAT\n\n   Given a QueryExpr you can get the AST via om.next.impl.parser/expr->ast.\n   The following keys can appear in the AST representation:\n\n   {:type         (:prop | :join | :call | :root | :union | :union-entry)\n    :key          (EdnKeyword | EdnSymbol | IdentExpr)\n    :dispatch-key (EdnKeyword | EdnSymbol)\n    :union-key    EdnKeyword\n    :query        (QueryRoot | RecurExpr)\n    :params       ParamMapExpr\n    :children     EdnVector(AST)\n    :component    Object\n    :target       EdnKeyword}\n\n   :query and :params may or may not appear. :type :call is only for\n   mutations."], null)),new cljs.core.Symbol(null,"rethrow?","rethrow?",(-2001438010),null),"om/next/impl/parser.cljc",(15),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(om.next.impl.parser.rethrow_QMARK_)?om.next.impl.parser.rethrow_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Given a :read and/or :mutate function return a parser. Refer to om.next/parser
 * for top level documentation.
 */
(function (){
om.next.impl.parser.parser = (function om$next$impl$parser$parser(p__104){
var map__171 = p__104;
var map__171__$1 = ((((!((map__171 == null)))?((((map__171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__171.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__171):map__171);
var config = map__171__$1;
var mutate = cljs.core.get.call(null,map__171__$1,new cljs.core.Keyword(null,"mutate","mutate",(1422419038)));
var read = cljs.core.get.call(null,map__171__$1,new cljs.core.Keyword(null,"read","read",(1140058661)));
return ((function (map__171,map__171__$1,config,mutate,read){
return (function() {
var om$next$impl$parser$parser_$_self = null;
var om$next$impl$parser$parser_$_self__2 = (function (env,query){
return om$next$impl$parser$parser_$_self.call(null,env,query,null);
});
var om$next$impl$parser$parser_$_self__3 = (function (env,query,target){
var elide_paths_QMARK_ = (function (){var or__20817__auto__ = new cljs.core.Keyword(null,"elide-paths","elide-paths",(-1165465185)).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return new cljs.core.Keyword(null,"query-root","query-root",(359781888)).cljs$core$IFn$_invoke$arity$1(env);
}
})();
var map__205 = (function (){var G__206 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"parser","parser",(-1543495310)),om$next$impl$parser$parser_$_self,new cljs.core.Keyword(null,"target","target",(253001721)),target,new cljs.core.Keyword(null,"query-root","query-root",(359781888)),new cljs.core.Keyword("om.next","root","om.next/root",(-1714259778)));
var G__206__$1 = ((!(cljs.core.contains_QMARK_.call(null,env,new cljs.core.Keyword(null,"path","path",(-188191168)))))?cljs.core.assoc.call(null,G__206,new cljs.core.Keyword(null,"path","path",(-188191168)),cljs.core.PersistentVector.EMPTY):G__206);
return G__206__$1;
})();
var map__205__$1 = ((((!((map__205 == null)))?((((map__205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__205):map__205);
var env__$1 = map__205__$1;
var path = cljs.core.get.call(null,map__205__$1,new cljs.core.Keyword(null,"path","path",(-188191168)));
var step = ((function (elide_paths_QMARK_,map__205,map__205__$1,env__$1,path,map__171,map__171__$1,config,mutate,read){
return (function om$next$impl$parser$parser_$_self_$_step(ret,expr){
var map__229 = om.next.impl.parser.expr__GT_ast.call(null,expr);
var map__229__$1 = ((((!((map__229 == null)))?((((map__229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__229.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__229):map__229);
var ast = map__229__$1;
var query_SINGLEQUOTE_ = cljs.core.get.call(null,map__229__$1,new cljs.core.Keyword(null,"query","query",(-1288509510)));
var key = cljs.core.get.call(null,map__229__$1,new cljs.core.Keyword(null,"key","key",(-1516042587)));
var params = cljs.core.get.call(null,map__229__$1,new cljs.core.Keyword(null,"params","params",(710516235)));
var dispatch_key = cljs.core.get.call(null,map__229__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",(733619510)));
var env__$2 = (function (){var G__231 = cljs.core.merge.call(null,env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",(-860334068)),ast,new cljs.core.Keyword(null,"query","query",(-1288509510)),query_SINGLEQUOTE_], null));
var G__231__$1 = (((query_SINGLEQUOTE_ == null))?cljs.core.dissoc.call(null,G__231,new cljs.core.Keyword(null,"query","query",(-1288509510))):G__231);
var G__231__$2 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"...","...",(-1926939749),null),query_SINGLEQUOTE_))?cljs.core.assoc.call(null,G__231__$1,new cljs.core.Keyword(null,"query","query",(-1288509510)),query):G__231__$1);
var G__231__$3 = ((cljs.core.vector_QMARK_.call(null,key))?cljs.core.assoc.call(null,G__231__$2,new cljs.core.Keyword(null,"query-root","query-root",(359781888)),key):G__231__$2);
return G__231__$3;
})();
var type = new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(ast);
var call_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"call","call",(-519999866)),type);
var res = (function (){var G__232 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__232) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse mutation attempted but no :mutate function supplied"),cljs.core.str("\n"),cljs.core.str("mutate")].join('')));
}

return mutate.call(null,env__$2,dispatch_key,params);

break;
case "prop":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str("read")].join('')));
}

return read.call(null,env__$2,dispatch_key,params);

break;
case "join":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str("read")].join('')));
}

return read.call(null,env__$2,dispatch_key,params);

break;
case "union":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str("read")].join('')));
}

return read.call(null,env__$2,dispatch_key,params);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
if(!((target == null))){
var ast_SINGLEQUOTE_ = cljs.core.get.call(null,res,target);
var G__233 = ret;
var G__233__$1 = ((ast_SINGLEQUOTE_ === true)?cljs.core.conj.call(null,G__233,expr):G__233);
var G__233__$2 = ((cljs.core.map_QMARK_.call(null,ast_SINGLEQUOTE_))?cljs.core.conj.call(null,G__233__$1,om.next.impl.parser.ast__GT_expr.call(null,ast_SINGLEQUOTE_)):G__233__$1);
return G__233__$2;
} else {
if(!((call_QMARK_) || ((new cljs.core.Keyword(null,"target","target",(253001721)).cljs$core$IFn$_invoke$arity$1(ast) == null)) || (cljs.core.contains_QMARK_.call(null,res,new cljs.core.Keyword(null,"value","value",(305978217)))))){
return ret;
} else {
var error = cljs.core.atom.call(null,null);
var mut_ret = cljs.core.atom.call(null,null);
if((call_QMARK_) && (!((new cljs.core.Keyword(null,"action","action",(-811238024)).cljs$core$IFn$_invoke$arity$1(res) == null)))){
try{cljs.core.reset_BANG_.call(null,mut_ret,new cljs.core.Keyword(null,"action","action",(-811238024)).cljs$core$IFn$_invoke$arity$1(res).call(null));
}catch (e234){var e_238 = e234;
if(cljs.core.truth_(om.next.impl.parser.rethrow_QMARK_.call(null,e_238))){
throw e_238;
} else {
cljs.core.reset_BANG_.call(null,error,e_238);
}
}} else {
}

var value = new cljs.core.Keyword(null,"value","value",(305978217)).cljs$core$IFn$_invoke$arity$1(res);
if(call_QMARK_){
if(((value == null)) || (cljs.core.map_QMARK_.call(null,value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(dispatch_key),cljs.core.str(" mutation :value must be nil or a map with structure {:keys [...]}")].join('')),cljs.core.str("\n"),cljs.core.str("(or (nil? value) (map? value))")].join('')));
}
} else {
}

var G__235 = ret;
var G__235__$1 = ((!((value == null)))?cljs.core.assoc.call(null,G__235,key,value):G__235);
var G__235__$2 = (cljs.core.truth_(cljs.core.deref.call(null,mut_ret))?cljs.core.assoc_in.call(null,G__235__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"result","result",(1415092211))], null),cljs.core.deref.call(null,mut_ret)):G__235__$1);
var G__235__$3 = (cljs.core.truth_(cljs.core.deref.call(null,error))?cljs.core.assoc.call(null,G__235__$2,key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("om.next","error","om.next/error",(-1841983205)),cljs.core.deref.call(null,error)], null)):G__235__$2);
return G__235__$3;
}
}
});})(elide_paths_QMARK_,map__205,map__205__$1,env__$1,path,map__171,map__171__$1,config,mutate,read))
;
var G__236 = cljs.core.reduce.call(null,step,(((target == null))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentVector.EMPTY),query);
var G__236__$1 = ((((target == null)) && (cljs.core.not.call(null,elide_paths_QMARK_)))?om.next.impl.parser.path_meta.call(null,G__236,path,query):G__236);
return G__236__$1;
});
om$next$impl$parser$parser_$_self = function(env,query,target){
switch(arguments.length){
case 2:
return om$next$impl$parser$parser_$_self__2.call(this,env,query);
case 3:
return om$next$impl$parser$parser_$_self__3.call(this,env,query,target);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$2 = om$next$impl$parser$parser_$_self__2;
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$3 = om$next$impl$parser$parser_$_self__3;
return om$next$impl$parser$parser_$_self;
})()
;})(map__171,map__171__$1,config,mutate,read))
}); return (
new cljs.core.Var(function(){return om.next.impl.parser.parser;},new cljs.core.Symbol("om.next.impl.parser","parser","om.next.impl.parser/parser",(-457601285),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"om.next.impl.parser","om.next.impl.parser",(824573384),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"\n   Generic query expression parsing and AST manipulation.\n\n   QUERY EXPRESSIONS\n\n   Query expressions are a variation on Datomic Pull Syntax\n   http://docs.datomic.com/pull.html more suitable for generic client/server\n   state transfer. It's important to note the Om Next query expression syntax is\n   *not* a strict superset of Datomic Pull.\n\n   A query expression is composed of EDN values. The grammar for query\n   expressions follows:\n\n   QueryRoot      := EdnVector(QueryExpr*)\n   PlainQueryExpr := (EdnKeyword | IdentExpr | JoinExpr)\n   QueryExpr      := (PlainQueryExpr | ParamExpr)\n   IdentExpr      := EdnVector2(Keyword, EdnValue)\n   ParamExpr      := EdnList2(PlainQueryExpr | EdnSymbol, ParamMapExpr)\n   ParamMapExpr   := EdnMap(Keyword, EdnValue)\n   JoinExpr       := EdnMap((Keyword | IdentExpr), (QueryRoot | UnionExpr | RecurExpr))\n   UnionExpr      := EdnMap(Keyword, QueryRoot)\n   RecurExpr      := ('... | Integer)\n\n   Note most apis in Om Next expect a QueryRoot not a QueryExpr.\n\n   QUERY EXPRESSION AST FORMAT\n\n   Given a QueryExpr you can get the AST via om.next.impl.parser/expr->ast.\n   The following keys can appear in the AST representation:\n\n   {:type         (:prop | :join | :call | :root | :union | :union-entry)\n    :key          (EdnKeyword | EdnSymbol | IdentExpr)\n    :dispatch-key (EdnKeyword | EdnSymbol)\n    :union-key    EdnKeyword\n    :query        (QueryRoot | RecurExpr)\n    :params       ParamMapExpr\n    :children     EdnVector(AST)\n    :component    Object\n    :target       EdnKeyword}\n\n   :query and :params may or may not appear. :type :call is only for\n   mutations."], null)),new cljs.core.Symbol(null,"parser","parser",(97036217),null),"om/next/impl/parser.cljc",(13),(1),(241),(241),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"config","config",(-1659574354),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",(-1514377108),null),new cljs.core.Symbol(null,"mutate","mutate",(-1232016731),null)], null)], null)], null)),"Given a :read and/or :mutate function return a parser. Refer to om.next/parser\n   for top level documentation.",(cljs.core.truth_(om.next.impl.parser.parser)?om.next.impl.parser.parser.cljs$lang$test:null)])));})()
;
(function (){
om.next.impl.parser.dispatch = (function om$next$impl$parser$dispatch(_,k,___$1){
return k;
}); return (
new cljs.core.Var(function(){return om.next.impl.parser.dispatch;},new cljs.core.Symbol("om.next.impl.parser","dispatch","om.next.impl.parser/dispatch",(-1754075842),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"om.next.impl.parser","om.next.impl.parser",(824573384),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"\n   Generic query expression parsing and AST manipulation.\n\n   QUERY EXPRESSIONS\n\n   Query expressions are a variation on Datomic Pull Syntax\n   http://docs.datomic.com/pull.html more suitable for generic client/server\n   state transfer. It's important to note the Om Next query expression syntax is\n   *not* a strict superset of Datomic Pull.\n\n   A query expression is composed of EDN values. The grammar for query\n   expressions follows:\n\n   QueryRoot      := EdnVector(QueryExpr*)\n   PlainQueryExpr := (EdnKeyword | IdentExpr | JoinExpr)\n   QueryExpr      := (PlainQueryExpr | ParamExpr)\n   IdentExpr      := EdnVector2(Keyword, EdnValue)\n   ParamExpr      := EdnList2(PlainQueryExpr | EdnSymbol, ParamMapExpr)\n   ParamMapExpr   := EdnMap(Keyword, EdnValue)\n   JoinExpr       := EdnMap((Keyword | IdentExpr), (QueryRoot | UnionExpr | RecurExpr))\n   UnionExpr      := EdnMap(Keyword, QueryRoot)\n   RecurExpr      := ('... | Integer)\n\n   Note most apis in Om Next expect a QueryRoot not a QueryExpr.\n\n   QUERY EXPRESSION AST FORMAT\n\n   Given a QueryExpr you can get the AST via om.next.impl.parser/expr->ast.\n   The following keys can appear in the AST representation:\n\n   {:type         (:prop | :join | :call | :root | :union | :union-entry)\n    :key          (EdnKeyword | EdnSymbol | IdentExpr)\n    :dispatch-key (EdnKeyword | EdnSymbol)\n    :union-key    EdnKeyword\n    :query        (QueryRoot | RecurExpr)\n    :params       ParamMapExpr\n    :children     EdnVector(AST)\n    :component    Object\n    :target       EdnKeyword}\n\n   :query and :params may or may not appear. :type :call is only for\n   mutations."], null)),new cljs.core.Symbol(null,"dispatch","dispatch",(-1335098760),null),"om/next/impl/parser.cljc",(15),(1),(296),(296),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",(-1201019570),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"_","_",(-1201019570),null)], null)),null,(cljs.core.truth_(om.next.impl.parser.dispatch)?om.next.impl.parser.dispatch.cljs$lang$test:null)])));})()
;
