goog.provide("sqlingvo.compiler$macros");
if(typeof sqlingvo.compiler$macros.compile_sql !== 'undefined'){
} else {
/**
 * Compile the `ast` into SQL.
 */
(function (){
sqlingvo.compiler$macros.compile_sql = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"sqlingvo.compiler$macros","compile-sql"),((function (method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__){
return (function (db,ast){
return new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(ast);
});})(method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.compile_sql;},new cljs.core.Symbol("sqlingvo.compiler$macros","compile-sql","sqlingvo.compiler$macros/compile-sql",(2099333572),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"compile-sql","compile-sql",(1821375215),null),"sqlingvo/compiler.cljc",(22),(1),(8),(8),cljs.core.List.EMPTY,"Compile the `ast` into SQL.",(cljs.core.truth_(sqlingvo.compiler$macros.compile_sql)?sqlingvo.compiler$macros.compile_sql.cljs$lang$test:null)])));})()
;
}
(function (){
sqlingvo.compiler$macros.to_sql = (function sqlingvo$compiler$macros$to_sql(arg){
if(typeof arg === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null);
} else {
if(cljs.core.sequential_QMARK_.call(null,arg)){
return arg;
} else {
return null;
}
}
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.to_sql;},new cljs.core.Symbol("sqlingvo.compiler$macros","to-sql","sqlingvo.compiler$macros/to-sql",(-591779855),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"to-sql","to-sql",(-871083804),null),"sqlingvo/compiler.cljc",(13),(1),(12),(12),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"arg","arg",(-106730310),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler$macros.to_sql)?sqlingvo.compiler$macros.to_sql.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.compiler$macros.concat_sql = (function sqlingvo$compiler$macros$concat_sql(var_args){
var args__23658__auto__ = [];
var len__23656__auto___116 = arguments.length;
var i__23657__auto___117 = (0);
while(true){
if((i__23657__auto___117 < len__23656__auto___116)){
args__23658__auto__.push((arguments[i__23657__auto___117]));

var G__118 = (i__23657__auto___117 + (1));
i__23657__auto___117 = G__118;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((0) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((0)),(0),null)):null);
return sqlingvo.compiler$macros.concat_sql.cljs$core$IFn$_invoke$arity$variadic(argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.concat_sql;},new cljs.core.Symbol("sqlingvo.compiler$macros","concat-sql","sqlingvo.compiler$macros/concat-sql",(-309582638),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"concat-sql","concat-sql",(-585467975),null),"sqlingvo/compiler.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(19),(19),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler$macros.concat_sql)?sqlingvo.compiler$macros.concat_sql.cljs$lang$test:null)])));})()
;

sqlingvo.compiler$macros.concat_sql.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.call(null,(function (stmt,p__112){
var vec__113 = p__112;
var seq__114 = cljs.core.seq.call(null,vec__113);
var first__115 = cljs.core.first.call(null,seq__114);
var seq__114__$1 = cljs.core.next.call(null,seq__114);
var sql = first__115;
var args__$1 = seq__114__$1;
return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.str,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stmt),sql], null)),cljs.core.concat.call(null,cljs.core.rest.call(null,stmt),args__$1));
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,sqlingvo.compiler$macros.to_sql,cljs.core.remove.call(null,cljs.core.nil_QMARK_,args)));
});

sqlingvo.compiler$macros.concat_sql.cljs$lang$maxFixedArity = (0);

sqlingvo.compiler$macros.concat_sql.cljs$lang$applyTo = (function (seq111){
return sqlingvo.compiler$macros.concat_sql.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq111));
});

new cljs.core.Var(function(){return sqlingvo.compiler$macros.concat_sql;},new cljs.core.Symbol("sqlingvo.compiler$macros","concat-sql","sqlingvo.compiler$macros/concat-sql",(-309582638),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"concat-sql","concat-sql",(-585467975),null),"sqlingvo/compiler.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(19),(19),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler$macros.concat_sql)?sqlingvo.compiler$macros.concat_sql.cljs$lang$test:null)]));
(function (){
sqlingvo.compiler$macros.join_sql = (function sqlingvo$compiler$macros$join_sql(separator,args){
var args__$1 = cljs.core.map.call(null,sqlingvo.compiler$macros.to_sql,args);
return cljs.core.cons.call(null,clojure.string.join.call(null,separator,cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.map.call(null,cljs.core.first,args__$1))),cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,cljs.core.rest,args__$1)));
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.join_sql;},new cljs.core.Symbol("sqlingvo.compiler$macros","join-sql","sqlingvo.compiler$macros/join-sql",(1712907425),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"join-sql","join-sql",(2007652234),null),"sqlingvo/compiler.cljc",(15),(1),(27),(27),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"separator","separator",(11782402),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler$macros.join_sql)?sqlingvo.compiler$macros.join_sql.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.compiler$macros.compile_sql_join = (function sqlingvo$compiler$macros$compile_sql_join(db,separator,args){
return sqlingvo.compiler$macros.join_sql.call(null,separator,cljs.core.map.call(null,(function (p1__6_SHARP_){
return sqlingvo.compiler$macros.compile_sql.call(null,db,p1__6_SHARP_);
}),args));
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.compile_sql_join;},new cljs.core.Symbol("sqlingvo.compiler$macros","compile-sql-join","sqlingvo.compiler$macros/compile-sql-join",(79722666),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"compile-sql-join","compile-sql-join",(343256453),null),"sqlingvo/compiler.cljc",(23),(1),(32),(32),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"separator","separator",(11782402),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler$macros.compile_sql_join)?sqlingvo.compiler$macros.compile_sql_join.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.compiler$macros.keyword_sql = (function sqlingvo$compiler$macros$keyword_sql(k){
return clojure.string.replace.call(null,clojure.string.upper_case.call(null,cljs.core.name.call(null,k)),/-/," ");
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.keyword_sql;},new cljs.core.Symbol("sqlingvo.compiler$macros","keyword-sql","sqlingvo.compiler$macros/keyword-sql",(65731145),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"keyword-sql","keyword-sql",(847204220),null),"sqlingvo/compiler.cljc",(18),(1),(35),(35),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler$macros.keyword_sql)?sqlingvo.compiler$macros.keyword_sql.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.compiler$macros.wrap_stmt = (function sqlingvo$compiler$macros$wrap_stmt(stmt){
var vec__122 = stmt;
var seq__123 = cljs.core.seq.call(null,vec__122);
var first__124 = cljs.core.first.call(null,seq__123);
var seq__123__$1 = cljs.core.next.call(null,seq__123);
var sql = first__124;
var args = seq__123__$1;
return cljs.core.cons.call(null,[cljs.core.str("("),cljs.core.str(sql),cljs.core.str(")")].join(''),args);
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.wrap_stmt;},new cljs.core.Symbol("sqlingvo.compiler$macros","wrap-stmt","sqlingvo.compiler$macros/wrap-stmt",(1091012018),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"wrap-stmt","wrap-stmt",(820654233),null),"sqlingvo/compiler.cljc",(16),(1),(38),(38),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stmt","stmt",(1915627230),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler$macros.wrap_stmt)?sqlingvo.compiler$macros.wrap_stmt.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.compiler$macros.unwrap_stmt = (function sqlingvo$compiler$macros$unwrap_stmt(stmt){
var vec__128 = stmt;
var seq__129 = cljs.core.seq.call(null,vec__128);
var first__130 = cljs.core.first.call(null,seq__129);
var seq__129__$1 = cljs.core.next.call(null,seq__129);
var sql = first__130;
var args = seq__129__$1;
return cljs.core.cons.call(null,clojure.string.replace.call(null,sql,/^\(|\)$/,""),args);
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.unwrap_stmt;},new cljs.core.Symbol("sqlingvo.compiler$macros","unwrap-stmt","sqlingvo.compiler$macros/unwrap-stmt",(-1503885823),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"unwrap-stmt","unwrap-stmt",(1456141162),null),"sqlingvo/compiler.cljc",(18),(1),(42),(42),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stmt","stmt",(1915627230),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler$macros.unwrap_stmt)?sqlingvo.compiler$macros.unwrap_stmt.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.compiler$macros.compile_set_op = (function sqlingvo$compiler$macros$compile_set_op(db,op,p__131){
var map__134 = p__131;
var map__134__$1 = ((((!((map__134 == null)))?((((map__134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134):map__134);
var node = map__134__$1;
var all = cljs.core.get.call(null,map__134__$1,new cljs.core.Keyword(null,"all","all",(892129742)));
var stmts = cljs.core.get.call(null,map__134__$1,new cljs.core.Keyword(null,"stmts","stmts",(754560721)));
var separater = [cljs.core.str(" "),cljs.core.str(clojure.string.upper_case.call(null,cljs.core.name.call(null,op))),cljs.core.str(" "),cljs.core.str((cljs.core.truth_(all)?"ALL ":null))].join('');
return sqlingvo.compiler$macros.compile_sql_join.call(null,db,separater,new cljs.core.Keyword(null,"stmts","stmts",(754560721)).cljs$core$IFn$_invoke$arity$1(node));
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.compile_set_op;},new cljs.core.Symbol("sqlingvo.compiler$macros","compile-set-op","sqlingvo.compiler$macros/compile-set-op",(1609470049),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"compile-set-op","compile-set-op",(-1350767286),null),"sqlingvo/compiler.cljc",(22),(1),(46),(46),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"op","op",(-242456428),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"node","node",(-2073234571),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stmts","stmts",(-1899875048),null),new cljs.core.Symbol(null,"all","all",(-1762306027),null)], null)], null)], null)),null,(cljs.core.truth_(sqlingvo.compiler$macros.compile_set_op)?sqlingvo.compiler$macros.compile_set_op.cljs$lang$test:null)])));})()
;
/**
 * Returns the next placeholder for an SQL parameter.
 */
(function (){
sqlingvo.compiler$macros.placeholder = (function sqlingvo$compiler$macros$placeholder(db){
return (function (){var or__20817__auto__ = new cljs.core.Keyword(null,"sql-next-placeholder","sql-next-placeholder",(1874967211)).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return sqlingvo.util.sql_placeholder_constant.call(null);
}
})().call(null);
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.placeholder;},new cljs.core.Symbol("sqlingvo.compiler$macros","placeholder","sqlingvo.compiler$macros/placeholder",(1209727705),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"placeholder","placeholder",(1535658444),null),"sqlingvo/compiler.cljc",(19),(1),(50),(50),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null)], null)),"Returns the next placeholder for an SQL parameter.",(cljs.core.truth_(sqlingvo.compiler$macros.placeholder)?sqlingvo.compiler$macros.placeholder.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.compiler$macros.compile_inline = (function sqlingvo$compiler$macros$compile_inline(db,node){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(node))].join('')], null);
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.compile_inline;},new cljs.core.Symbol("sqlingvo.compiler$macros","compile-inline","sqlingvo.compiler$macros/compile-inline",(1163456607),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"compile-inline","compile-inline",(-1245043358),null),"sqlingvo/compiler.cljc",(21),(1),(58),(58),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler$macros.compile_inline)?sqlingvo.compiler$macros.compile_inline.cljs$lang$test:null)])));})()
;
if(typeof sqlingvo.compiler$macros.compile_const !== 'undefined'){
} else {
/**
 * Compile a SQL constant into a SQL statement.
 */
(function (){
sqlingvo.compiler$macros.compile_const = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"sqlingvo.compiler$macros","compile-const"),((function (method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__){
return (function (db,node){
return new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(node);
});})(method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.compile_const;},new cljs.core.Symbol("sqlingvo.compiler$macros","compile-const","sqlingvo.compiler$macros/compile-const",(1083506079),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"compile-const","compile-const",(1881550984),null),"sqlingvo/compiler.cljc",(24),(1),(61),(61),cljs.core.List.EMPTY,"Compile a SQL constant into a SQL statement.",(cljs.core.truth_(sqlingvo.compiler$macros.compile_const)?sqlingvo.compiler$macros.compile_const.cljs$lang$test:null)])));})()
;
}
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_const,new cljs.core.Keyword(null,"number","number",(1570378438)),(function (db,node){
return sqlingvo.compiler$macros.compile_inline.call(null,db,node);
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_const,new cljs.core.Keyword(null,"string","string",(-1989541586)),(function (db,node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(sqlingvo.compiler$macros.placeholder.call(null,db))].join(''),new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(node)], null);
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_const,new cljs.core.Keyword(null,"symbol","symbol",(-1038572696)),(function (db,node){
return sqlingvo.compiler$macros.compile_inline.call(null,db,node);
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_const,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (db,node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(sqlingvo.compiler$macros.placeholder.call(null,db))].join(''),new cljs.core.Keyword(null,"form","form",(-1624062471)).cljs$core$IFn$_invoke$arity$1(node)], null);
}));
(function (){
sqlingvo.compiler$macros.compile_array = (function sqlingvo$compiler$macros$compile_array(db,p__136){
var map__139 = p__136;
var map__139__$1 = ((((!((map__139 == null)))?((((map__139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__139):map__139);
var children = cljs.core.get.call(null,map__139__$1,new cljs.core.Keyword(null,"children","children",(-940561982)));
return sqlingvo.compiler$macros.concat_sql.call(null,"ARRAY[",sqlingvo.compiler$macros.compile_sql_join.call(null,db,", ",children),"]");
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.compile_array;},new cljs.core.Symbol("sqlingvo.compiler$macros","compile-array","sqlingvo.compiler$macros/compile-array",(310655749),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"compile-array","compile-array",(555124328),null),"sqlingvo/compiler.cljc",(21),(1),(79),(79),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",(699969545),null)], null)], null)], null)),null,(cljs.core.truth_(sqlingvo.compiler$macros.compile_array)?sqlingvo.compiler$macros.compile_array.cljs$lang$test:null)])));})()
;
if(typeof sqlingvo.compiler$macros.compile_expr !== 'undefined'){
} else {
/**
 * Compile a SQL expression.
 */
(function (){
sqlingvo.compiler$macros.compile_expr = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"sqlingvo.compiler$macros","compile-expr"),((function (method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__){
return (function (db,ast){
return new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(ast);
});})(method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.compile_expr;},new cljs.core.Symbol("sqlingvo.compiler$macros","compile-expr","sqlingvo.compiler$macros/compile-expr",(1804130412),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"compile-expr","compile-expr",(2071277399),null),"sqlingvo/compiler.cljc",(23),(1),(82),(82),cljs.core.List.EMPTY,"Compile a SQL expression.",(cljs.core.truth_(sqlingvo.compiler$macros.compile_expr)?sqlingvo.compiler$macros.compile_expr.cljs$lang$test:null)])));})()
;
}
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_expr,new cljs.core.Keyword(null,"array","array",(-2080713842)),(function (db,node){
return sqlingvo.compiler$macros.compile_array.call(null,db,node);
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_expr,new cljs.core.Keyword(null,"select","select",(1147833503)),(function (db,expr){
return sqlingvo.compiler$macros.concat_sql.call(null,sqlingvo.compiler$macros.wrap_stmt.call(null,sqlingvo.compiler$macros.compile_sql.call(null,db,expr)));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_expr,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (db,node){
return sqlingvo.compiler$macros.compile_sql.call(null,db,node);
}));
(function (){
sqlingvo.compiler$macros.compile_exprs = (function sqlingvo$compiler$macros$compile_exprs(db,exprs){
return cljs.core.map.call(null,(function (p1__7_SHARP_){
return sqlingvo.compiler$macros.compile_expr.call(null,db,p1__7_SHARP_);
}),exprs);
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.compile_exprs;},new cljs.core.Symbol("sqlingvo.compiler$macros","compile-exprs","sqlingvo.compiler$macros/compile-exprs",(653098213),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"compile-exprs","compile-exprs",(-696268296),null),"sqlingvo/compiler.cljc",(20),(1),(95),(95),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler$macros.compile_exprs)?sqlingvo.compiler$macros.compile_exprs.cljs$lang$test:null)])));})()
;
/**
 * Returns true if `node` is a modifier of an aggregate expression, otherwise false.
 */
(function (){
sqlingvo.compiler$macros.aggregate_modifier_QMARK_ = (function sqlingvo$compiler$macros$aggregate_modifier_QMARK_(node){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ALL",null,"DISTINCT",null], null), null).call(null,(function (){var G__142 = node;
var G__142__$1 = (((G__142 == null))?null:new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(G__142));
var G__142__$2 = (((G__142__$1 == null))?null:cljs.core.name.call(null,G__142__$1));
var G__142__$3 = (((G__142__$2 == null))?null:clojure.string.upper_case.call(null,G__142__$2));
return G__142__$3;
})());
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.aggregate_modifier_QMARK_;},new cljs.core.Symbol("sqlingvo.compiler$macros","aggregate-modifier?","sqlingvo.compiler$macros/aggregate-modifier?",(-1912097926),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"aggregate-modifier?","aggregate-modifier?",(-1634710015),null),"sqlingvo/compiler.cljc",(27),(1),(100),(100),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),"Returns true if `node` is a modifier of an aggregate expression, otherwise false.",(cljs.core.truth_(sqlingvo.compiler$macros.aggregate_modifier_QMARK_)?sqlingvo.compiler$macros.aggregate_modifier_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Returns true if `node` is an ORDER BY expression, otherwise false.
 */
(function (){
sqlingvo.compiler$macros.order_by_QMARK_ = (function sqlingvo$compiler$macros$order_by_QMARK_(node){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"list","list",(765357683)))) && (cljs.core._EQ_.call(null,(function (){var G__146 = node;
var G__146__$1 = (((G__146 == null))?null:new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(G__146));
var G__146__$2 = (((G__146__$1 == null))?null:cljs.core.first.call(null,G__146__$1));
var G__146__$3 = (((G__146__$2 == null))?null:new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(G__146__$2));
var G__146__$4 = (((G__146__$3 == null))?null:cljs.core.name.call(null,G__146__$3));
var G__146__$5 = (((G__146__$4 == null))?null:clojure.string.upper_case.call(null,G__146__$4));
return G__146__$5;
})(),"ORDER-BY"));
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.order_by_QMARK_;},new cljs.core.Symbol("sqlingvo.compiler$macros","order-by?","sqlingvo.compiler$macros/order-by?",(-163954477),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"order-by?","order-by?",(-430689300),null),"sqlingvo/compiler.cljc",(17),(1),(105),(105),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),"Returns true if `node` is an ORDER BY expression, otherwise false.",(cljs.core.truth_(sqlingvo.compiler$macros.order_by_QMARK_)?sqlingvo.compiler$macros.order_by_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Parse an aggregate expression.
 */
(function (){
sqlingvo.compiler$macros.parse_aggregate_expression = (function sqlingvo$compiler$macros$parse_aggregate_expression(node){
var vec__159 = cljs.core.split_with.call(null,cljs.core.complement.call(null,sqlingvo.compiler$macros.order_by_QMARK_),new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node));
var vec__162 = cljs.core.nth.call(null,vec__159,(0),null);
var seq__163 = cljs.core.seq.call(null,vec__162);
var first__164 = cljs.core.first.call(null,seq__163);
var seq__163__$1 = cljs.core.next.call(null,seq__163);
var f = first__164;
var args = seq__163__$1;
var remaining = cljs.core.nth.call(null,vec__159,(1),null);
var vec__165 = cljs.core.split_with.call(null,sqlingvo.compiler$macros.aggregate_modifier_QMARK_,args);
var vec__168 = cljs.core.nth.call(null,vec__165,(0),null);
var modifier = cljs.core.nth.call(null,vec__168,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__165,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,modifier,args__$1,remaining], null);
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.parse_aggregate_expression;},new cljs.core.Symbol("sqlingvo.compiler$macros","parse-aggregate-expression","sqlingvo.compiler$macros/parse-aggregate-expression",(1220997311),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"parse-aggregate-expression","parse-aggregate-expression",(1498975810),null),"sqlingvo/compiler.cljc",(34),(1),(111),(111),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),"Parse an aggregate expression.",(cljs.core.truth_(sqlingvo.compiler$macros.parse_aggregate_expression)?sqlingvo.compiler$macros.parse_aggregate_expression.cljs$lang$test:null)])));})()
;
/**
 * Compile an aggregate expression to SQL.
 */
(function (){
sqlingvo.compiler$macros.compile_aggregate_expression = (function sqlingvo$compiler$macros$compile_aggregate_expression(db,node){
var vec__175 = sqlingvo.compiler$macros.parse_aggregate_expression.call(null,node);
var f = cljs.core.nth.call(null,vec__175,(0),null);
var modifier = cljs.core.nth.call(null,vec__175,(1),null);
var args = cljs.core.nth.call(null,vec__175,(2),null);
var remaining = cljs.core.nth.call(null,vec__175,(3),null);
return sqlingvo.compiler$macros.concat_sql.call(null,sqlingvo.util.sql_quote_fn.call(null,db,new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(f)),"(",(cljs.core.truth_(modifier)?sqlingvo.compiler$macros.concat_sql.call(null,(function (){var G__178 = modifier;
var G__178__$1 = (((G__178 == null))?null:new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(G__178));
var G__178__$2 = (((G__178__$1 == null))?null:cljs.core.name.call(null,G__178__$1));
var G__178__$3 = (((G__178__$2 == null))?null:clojure.string.upper_case.call(null,G__178__$2));
return G__178__$3;
})()," "):null),sqlingvo.compiler$macros.join_sql.call(null,", ",sqlingvo.compiler$macros.compile_exprs.call(null,db,args)),(cljs.core.truth_(cljs.core.not_empty.call(null,remaining))?sqlingvo.compiler$macros.concat_sql.call(null," ",sqlingvo.compiler$macros.join_sql.call(null," ",sqlingvo.compiler$macros.compile_exprs.call(null,db,remaining))):null),")");
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.compile_aggregate_expression;},new cljs.core.Symbol("sqlingvo.compiler$macros","compile-aggregate-expression","sqlingvo.compiler$macros/compile-aggregate-expression",(184407196),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"compile-aggregate-expression","compile-aggregate-expression",(2037357169),null),"sqlingvo/compiler.cljc",(35),(1),(118),(118),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),"Compile an aggregate expression to SQL.",(cljs.core.truth_(sqlingvo.compiler$macros.compile_aggregate_expression)?sqlingvo.compiler$macros.compile_aggregate_expression.cljs$lang$test:null)])));})()
;
/**
 * Compile a 2-arity SQL function node into a SQL statement.
 */
(function (){
sqlingvo.compiler$macros.compile_2_ary = (function sqlingvo$compiler$macros$compile_2_ary(db,node){
var vec__186 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__187 = cljs.core.seq.call(null,vec__186);
var first__188 = cljs.core.first.call(null,seq__187);
var seq__187__$1 = cljs.core.next.call(null,seq__187);
var name = first__188;
var args = seq__187__$1;
if(((1) < cljs.core.count.call(null,args))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("More than 1 arg needed."),cljs.core.str("\n"),cljs.core.str("(< 1 (count args))")].join('')));
}

return sqlingvo.compiler$macros.join_sql.call(null," AND ",cljs.core.map.call(null,((function (vec__186,seq__187,first__188,seq__187__$1,name,args){
return (function (p__189){
var vec__190 = p__189;
var arg_1 = cljs.core.nth.call(null,vec__190,(0),null);
var arg_2 = cljs.core.nth.call(null,vec__190,(1),null);
return sqlingvo.compiler$macros.concat_sql.call(null,"(",sqlingvo.compiler$macros.compile_expr.call(null,db,arg_1)," ",cljs.core.name.call(null,new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(name))," ",sqlingvo.compiler$macros.compile_expr.call(null,db,arg_2),")");
});})(vec__186,seq__187,first__188,seq__187__$1,name,args))
,cljs.core.partition.call(null,(2),(1),args)));
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.compile_2_ary;},new cljs.core.Symbol("sqlingvo.compiler$macros","compile-2-ary","sqlingvo.compiler$macros/compile-2-ary",(1834414266),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"compile-2-ary","compile-2-ary",(501525935),null),"sqlingvo/compiler.cljc",(20),(1),(130),(130),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),"Compile a 2-arity SQL function node into a SQL statement.",(cljs.core.truth_(sqlingvo.compiler$macros.compile_2_ary)?sqlingvo.compiler$macros.compile_2_ary.cljs$lang$test:null)])));})()
;
/**
 * Compile a SQL infix function node into a SQL statement.
 */
(function (){
sqlingvo.compiler$macros.compile_infix = (function sqlingvo$compiler$macros$compile_infix(db,node){
var vec__196 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__197 = cljs.core.seq.call(null,vec__196);
var first__198 = cljs.core.first.call(null,seq__197);
var seq__197__$1 = cljs.core.next.call(null,seq__197);
var name = first__198;
var args = seq__197__$1;
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args))){
return sqlingvo.compiler$macros.compile_expr.call(null,db,cljs.core.first.call(null,args));
} else {
var args__$1 = sqlingvo.compiler$macros.compile_exprs.call(null,db,args);
return cljs.core.cons.call(null,[cljs.core.str("("),cljs.core.str(clojure.string.join.call(null,[cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str(" ")].join(''),cljs.core.map.call(null,cljs.core.first,args__$1))),cljs.core.str(")")].join(''),cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,cljs.core.rest,args__$1)));

}
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.compile_infix;},new cljs.core.Symbol("sqlingvo.compiler$macros","compile-infix","sqlingvo.compiler$macros/compile-infix",(891754963),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"compile-infix","compile-infix",(632638150),null),"sqlingvo/compiler.cljc",(20),(1),(142),(142),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),"Compile a SQL infix function node into a SQL statement.",(cljs.core.truth_(sqlingvo.compiler$macros.compile_infix)?sqlingvo.compiler$macros.compile_infix.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.compiler$macros.compile_complex_args = (function sqlingvo$compiler$macros$compile_complex_args(db,node){
var vec__202 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__203 = cljs.core.seq.call(null,vec__202);
var first__204 = cljs.core.first.call(null,seq__203);
var seq__203__$1 = cljs.core.next.call(null,seq__203);
var name = first__204;
var args = seq__203__$1;
return sqlingvo.compiler$macros.concat_sql.call(null,"(",cljs.core.name.call(null,new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(name))," ",sqlingvo.compiler$macros.compile_sql_join.call(null,db," ",args),")");
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.compile_complex_args;},new cljs.core.Symbol("sqlingvo.compiler$macros","compile-complex-args","sqlingvo.compiler$macros/compile-complex-args",(1142891649),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"compile-complex-args","compile-complex-args",(1418564074),null),"sqlingvo/compiler.cljc",(27),(1),(154),(154),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler$macros.compile_complex_args)?sqlingvo.compiler$macros.compile_complex_args.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.compiler$macros.compile_whitespace_args = (function sqlingvo$compiler$macros$compile_whitespace_args(db,node){
var vec__208 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__209 = cljs.core.seq.call(null,vec__208);
var first__210 = cljs.core.first.call(null,seq__209);
var seq__209__$1 = cljs.core.next.call(null,seq__209);
var name = first__210;
var args = seq__209__$1;
return sqlingvo.compiler$macros.concat_sql.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(name)),"(",sqlingvo.compiler$macros.compile_sql_join.call(null,db," ",args),")");
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.compile_whitespace_args;},new cljs.core.Symbol("sqlingvo.compiler$macros","compile-whitespace-args","sqlingvo.compiler$macros/compile-whitespace-args",(-519152863),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"compile-whitespace-args","compile-whitespace-args",(-1862491116),null),"sqlingvo/compiler.cljc",(30),(1),(161),(161),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler$macros.compile_whitespace_args)?sqlingvo.compiler$macros.compile_whitespace_args.cljs$lang$test:null)])));})()
;
if(typeof sqlingvo.compiler$macros.compile_fn !== 'undefined'){
} else {
/**
 * Compile a SQL function node into a SQL statement.
 */
(function (){
sqlingvo.compiler$macros.compile_fn = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"sqlingvo.compiler$macros","compile-fn"),((function (method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__){
return (function (db,node){
var G__211 = node;
var G__211__$1 = (((G__211 == null))?null:new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(G__211));
var G__211__$2 = (((G__211__$1 == null))?null:cljs.core.first.call(null,G__211__$1));
var G__211__$3 = (((G__211__$2 == null))?null:new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(G__211__$2));
var G__211__$4 = (((G__211__$3 == null))?null:cljs.core.keyword.call(null,G__211__$3));
return G__211__$4;
});})(method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.compile_fn;},new cljs.core.Symbol("sqlingvo.compiler$macros","compile-fn","sqlingvo.compiler$macros/compile-fn",(-1631943299),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"compile-fn","compile-fn",(-1899745280),null),"sqlingvo/compiler.cljc",(21),(1),(168),(168),cljs.core.List.EMPTY,"Compile a SQL function node into a SQL statement.",(cljs.core.truth_(sqlingvo.compiler$macros.compile_fn)?sqlingvo.compiler$macros.compile_fn.cljs$lang$test:null)])));})()
;
}
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_fn,new cljs.core.Keyword(null,"case","case",(1143702196)),(function (db,node){
var vec__212 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__213 = cljs.core.seq.call(null,vec__212);
var first__214 = cljs.core.first.call(null,seq__213);
var seq__213__$1 = cljs.core.next.call(null,seq__213);
var _ = first__214;
var args = seq__213__$1;
var parts = cljs.core.partition.call(null,(2),(2),null,args);
return sqlingvo.compiler$macros.concat_sql.call(null,cljs.core.apply.call(null,sqlingvo.compiler$macros.concat_sql,"CASE",cljs.core.concat.call(null,(function (){var iter__23197__auto__ = ((function (vec__212,seq__213,first__214,seq__213__$1,_,args,parts){
return (function sqlingvo$compiler$macros$iter__215(s__216){
return (new cljs.core.LazySeq(null,((function (vec__212,seq__213,first__214,seq__213__$1,_,args,parts){
return (function (){
var s__216__$1 = s__216;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__216__$1);
if(temp__19834__auto__){
var s__216__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__216__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__216__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__218 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__217 = (0);
while(true){
if((i__217 < size__23196__auto__)){
var vec__225 = cljs.core._nth.call(null,c__23195__auto__,i__217);
var test = cljs.core.nth.call(null,vec__225,(0),null);
var then = cljs.core.nth.call(null,vec__225,(1),null);
cljs.core.chunk_append.call(null,b__218,sqlingvo.compiler$macros.concat_sql.call(null," WHEN ",sqlingvo.compiler$macros.compile_expr.call(null,db,test)," THEN ",sqlingvo.compiler$macros.compile_expr.call(null,db,then)));

var G__247 = (i__217 + (1));
i__217 = G__247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__218),sqlingvo$compiler$macros$iter__215.call(null,cljs.core.chunk_rest.call(null,s__216__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__218),null);
}
} else {
var vec__228 = cljs.core.first.call(null,s__216__$2);
var test = cljs.core.nth.call(null,vec__228,(0),null);
var then = cljs.core.nth.call(null,vec__228,(1),null);
return cljs.core.cons.call(null,sqlingvo.compiler$macros.concat_sql.call(null," WHEN ",sqlingvo.compiler$macros.compile_expr.call(null,db,test)," THEN ",sqlingvo.compiler$macros.compile_expr.call(null,db,then)),sqlingvo$compiler$macros$iter__215.call(null,cljs.core.rest.call(null,s__216__$2)));
}
} else {
return null;
}
break;
}
});})(vec__212,seq__213,first__214,seq__213__$1,_,args,parts))
,null,null));
});})(vec__212,seq__213,first__214,seq__213__$1,_,args,parts))
;
return iter__23197__auto__.call(null,cljs.core.filter.call(null,((function (iter__23197__auto__,vec__212,seq__213,first__214,seq__213__$1,_,args,parts){
return (function (p1__8_SHARP_){
return cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,p1__8_SHARP_));
});})(iter__23197__auto__,vec__212,seq__213,first__214,seq__213__$1,_,args,parts))
,parts));
})(),(function (){var iter__23197__auto__ = ((function (vec__212,seq__213,first__214,seq__213__$1,_,args,parts){
return (function sqlingvo$compiler$macros$iter__231(s__232){
return (new cljs.core.LazySeq(null,((function (vec__212,seq__213,first__214,seq__213__$1,_,args,parts){
return (function (){
var s__232__$1 = s__232;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__232__$1);
if(temp__19834__auto__){
var s__232__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__232__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__232__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__234 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__233 = (0);
while(true){
if((i__233 < size__23196__auto__)){
var vec__241 = cljs.core._nth.call(null,c__23195__auto__,i__233);
var else$ = cljs.core.nth.call(null,vec__241,(0),null);
cljs.core.chunk_append.call(null,b__234,sqlingvo.compiler$macros.concat_sql.call(null," ELSE ",sqlingvo.compiler$macros.compile_expr.call(null,db,else$)));

var G__248 = (i__233 + (1));
i__233 = G__248;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__234),sqlingvo$compiler$macros$iter__231.call(null,cljs.core.chunk_rest.call(null,s__232__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__234),null);
}
} else {
var vec__244 = cljs.core.first.call(null,s__232__$2);
var else$ = cljs.core.nth.call(null,vec__244,(0),null);
return cljs.core.cons.call(null,sqlingvo.compiler$macros.concat_sql.call(null," ELSE ",sqlingvo.compiler$macros.compile_expr.call(null,db,else$)),sqlingvo$compiler$macros$iter__231.call(null,cljs.core.rest.call(null,s__232__$2)));
}
} else {
return null;
}
break;
}
});})(vec__212,seq__213,first__214,seq__213__$1,_,args,parts))
,null,null));
});})(vec__212,seq__213,first__214,seq__213__$1,_,args,parts))
;
return iter__23197__auto__.call(null,cljs.core.filter.call(null,((function (iter__23197__auto__,vec__212,seq__213,first__214,seq__213__$1,_,args,parts){
return (function (p1__9_SHARP_){
return cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,p1__9_SHARP_));
});})(iter__23197__auto__,vec__212,seq__213,first__214,seq__213__$1,_,args,parts))
,parts));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" END"], null))));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_fn,new cljs.core.Keyword(null,"cast","cast",(-1761029143)),(function (db,node){
var vec__249 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__250 = cljs.core.seq.call(null,vec__249);
var first__251 = cljs.core.first.call(null,seq__250);
var seq__250__$1 = cljs.core.next.call(null,seq__250);
var _ = first__251;
var vec__252 = seq__250__$1;
var expr = cljs.core.nth.call(null,vec__252,(0),null);
var type = cljs.core.nth.call(null,vec__252,(1),null);
return sqlingvo.compiler$macros.concat_sql.call(null,"CAST(",sqlingvo.compiler$macros.compile_expr.call(null,db,expr)," AS ",sqlingvo.util.sql_type_name.call(null,new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(type)),")");
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_fn,new cljs.core.Keyword(null,"count","count",(2139924085)),(function (db,node){
var vec__255 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__256 = cljs.core.seq.call(null,vec__255);
var first__257 = cljs.core.first.call(null,seq__256);
var seq__256__$1 = cljs.core.next.call(null,seq__256);
var name = first__257;
var args = seq__256__$1;
return sqlingvo.compiler$macros.concat_sql.call(null,"count(",((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"distinct","distinct",(-148347594),null),new cljs.core.Keyword(null,"form","form",(-1624062471)).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args))))?"DISTINCT ":null),sqlingvo.compiler$macros.join_sql.call(null,", ",cljs.core.map.call(null,((function (vec__255,seq__256,first__257,seq__256__$1,name,args){
return (function (p1__10_SHARP_){
return sqlingvo.compiler$macros.compile_expr.call(null,db,p1__10_SHARP_);
});})(vec__255,seq__256,first__257,seq__256__$1,name,args))
,cljs.core.remove.call(null,((function (vec__255,seq__256,first__257,seq__256__$1,name,args){
return (function (p1__11_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"distinct","distinct",(-148347594),null),new cljs.core.Keyword(null,"form","form",(-1624062471)).cljs$core$IFn$_invoke$arity$1(p1__11_SHARP_));
});})(vec__255,seq__256,first__257,seq__256__$1,name,args))
,args))),")");
}));
/**
 * Compile `node` into a comma separated list.
 */
(function (){
sqlingvo.compiler$macros.compile_list = (function sqlingvo$compiler$macros$compile_list(db,node){
return sqlingvo.compiler$macros.concat_sql.call(null,"(",sqlingvo.compiler$macros.compile_sql_join.call(null,db,", ",new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node)),")");
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.compile_list;},new cljs.core.Symbol("sqlingvo.compiler$macros","compile-list","sqlingvo.compiler$macros/compile-list",(2038533822),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"compile-list","compile-list",(1228091813),null),"sqlingvo/compiler.cljc",(20),(1),(197),(197),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),"Compile `node` into a comma separated list.",(cljs.core.truth_(sqlingvo.compiler$macros.compile_list)?sqlingvo.compiler$macros.compile_list.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_fn,new cljs.core.Keyword(null,"in","in",(-1531184865)),(function (db,node){
var vec__258 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var _ = cljs.core.nth.call(null,vec__258,(0),null);
var member = cljs.core.nth.call(null,vec__258,(1),null);
var expr = cljs.core.nth.call(null,vec__258,(2),null);
return sqlingvo.compiler$macros.concat_sql.call(null,sqlingvo.compiler$macros.compile_expr.call(null,db,member)," IN ",((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(expr),new cljs.core.Keyword(null,"list","list",(765357683))))?((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(expr)))?"(NULL)":sqlingvo.compiler$macros.compile_list.call(null,db,expr)):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(expr),new cljs.core.Keyword(null,"values","values",(372645556))))?sqlingvo.compiler$macros.concat_sql.call(null,"(",sqlingvo.compiler$macros.compile_expr.call(null,db,expr),")"):sqlingvo.compiler$macros.compile_expr.call(null,db,expr)
)));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_fn,new cljs.core.Keyword(null,"exists","exists",(1312597120)),(function (db,node){
var vec__261 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__262 = cljs.core.seq.call(null,vec__261);
var first__263 = cljs.core.first.call(null,seq__262);
var seq__262__$1 = cljs.core.next.call(null,seq__262);
var _ = first__263;
var args = seq__262__$1;
return sqlingvo.compiler$macros.concat_sql.call(null,"(EXISTS ",sqlingvo.compiler$macros.compile_expr.call(null,db,cljs.core.first.call(null,args)),")");
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_fn,new cljs.core.Keyword(null,"not","not",(-595976884)),(function (db,node){
var vec__264 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__265 = cljs.core.seq.call(null,vec__264);
var first__266 = cljs.core.first.call(null,seq__265);
var seq__265__$1 = cljs.core.next.call(null,seq__265);
var _ = first__266;
var args = seq__265__$1;
return sqlingvo.compiler$macros.concat_sql.call(null,"(NOT ",sqlingvo.compiler$macros.compile_expr.call(null,db,cljs.core.first.call(null,args)),")");
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_fn,new cljs.core.Keyword(null,"not-exists","not-exists",(-1099344155)),(function (db,node){
var vec__267 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__268 = cljs.core.seq.call(null,vec__267);
var first__269 = cljs.core.first.call(null,seq__268);
var seq__268__$1 = cljs.core.next.call(null,seq__268);
var _ = first__269;
var args = seq__268__$1;
return sqlingvo.compiler$macros.concat_sql.call(null,"(NOT EXISTS ",sqlingvo.compiler$macros.compile_expr.call(null,db,cljs.core.first.call(null,args)),")");
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_fn,new cljs.core.Keyword(null,"is-null","is-null",(-1997050930)),(function (db,node){
var vec__270 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__271 = cljs.core.seq.call(null,vec__270);
var first__272 = cljs.core.first.call(null,seq__271);
var seq__271__$1 = cljs.core.next.call(null,seq__271);
var _ = first__272;
var args = seq__271__$1;
return sqlingvo.compiler$macros.concat_sql.call(null,"(",sqlingvo.compiler$macros.compile_expr.call(null,db,cljs.core.first.call(null,args))," IS NULL)");
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_fn,new cljs.core.Keyword(null,"is-not-null","is-not-null",(304696033)),(function (db,node){
var vec__273 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__274 = cljs.core.seq.call(null,vec__273);
var first__275 = cljs.core.first.call(null,seq__274);
var seq__274__$1 = cljs.core.next.call(null,seq__274);
var _ = first__275;
var args = seq__274__$1;
return sqlingvo.compiler$macros.concat_sql.call(null,"(",sqlingvo.compiler$macros.compile_expr.call(null,db,cljs.core.first.call(null,args))," IS NOT NULL)");
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_fn,new cljs.core.Keyword(null,"not-like","not-like",(678250642)),(function (db,node){
var vec__276 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__277 = cljs.core.seq.call(null,vec__276);
var first__278 = cljs.core.first.call(null,seq__277);
var seq__277__$1 = cljs.core.next.call(null,seq__277);
var _ = first__278;
var args = seq__277__$1;
var vec__279 = sqlingvo.compiler$macros.compile_exprs.call(null,db,args);
var string = cljs.core.nth.call(null,vec__279,(0),null);
var pattern = cljs.core.nth.call(null,vec__279,(1),null);
return sqlingvo.compiler$macros.concat_sql.call(null,"(",string," NOT LIKE ",pattern,")");
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_fn,new cljs.core.Keyword(null,"range","range",(1639692286)),(function (db,node){
var vec__282 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__283 = cljs.core.seq.call(null,vec__282);
var first__284 = cljs.core.first.call(null,seq__283);
var seq__283__$1 = cljs.core.next.call(null,seq__283);
var _ = first__284;
var args = seq__283__$1;
return sqlingvo.compiler$macros.concat_sql.call(null,"(",sqlingvo.compiler$macros.compile_sql_join.call(null,db,", ",args),")");
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_fn,new cljs.core.Keyword(null,"row","row",(-570139521)),(function (db,node){
var vec__285 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__286 = cljs.core.seq.call(null,vec__285);
var first__287 = cljs.core.first.call(null,seq__286);
var seq__286__$1 = cljs.core.next.call(null,seq__286);
var _ = first__287;
var args = seq__286__$1;
return sqlingvo.compiler$macros.concat_sql.call(null,"ROW(",sqlingvo.compiler$macros.join_sql.call(null,", ",sqlingvo.compiler$macros.compile_exprs.call(null,db,args)),")");
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_fn,new cljs.core.Keyword(null,"over","over",(192553051)),(function (db,node){
var vec__288 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__289 = cljs.core.seq.call(null,vec__288);
var first__290 = cljs.core.first.call(null,seq__289);
var seq__289__$1 = cljs.core.next.call(null,seq__289);
var _ = first__290;
var args = seq__289__$1;
var args__$1 = cljs.core.map.call(null,((function (vec__288,seq__289,first__290,seq__289__$1,_,args){
return (function (p1__12_SHARP_){
return sqlingvo.compiler$macros.compile_sql.call(null,db,p1__12_SHARP_);
});})(vec__288,seq__289,first__290,seq__289__$1,_,args))
,args);
return sqlingvo.compiler$macros.concat_sql.call(null,cljs.core.first.call(null,args__$1)," OVER (",sqlingvo.compiler$macros.join_sql.call(null," ",cljs.core.rest.call(null,args__$1)),")");
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_fn,new cljs.core.Keyword(null,"partition-by","partition-by",(1324497520)),(function (db,node){
var vec__291 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__292 = cljs.core.seq.call(null,vec__291);
var first__293 = cljs.core.first.call(null,seq__292);
var seq__292__$1 = cljs.core.next.call(null,seq__292);
var _ = first__293;
var args = seq__292__$1;
var vec__294 = args;
var seq__295 = cljs.core.seq.call(null,vec__294);
var first__296 = cljs.core.first.call(null,seq__295);
var seq__295__$1 = cljs.core.next.call(null,seq__295);
var expr = first__296;
var more_args = seq__295__$1;
return sqlingvo.compiler$macros.concat_sql.call(null,"PARTITION BY ",((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array","array",(-2080713842)),new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(expr)))?sqlingvo.compiler$macros.compile_sql_join.call(null,db,", ",new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(expr)):sqlingvo.compiler$macros.compile_expr.call(null,db,expr)),((cljs.core.seq.call(null,more_args))?sqlingvo.compiler$macros.concat_sql.call(null," ",sqlingvo.compiler$macros.compile_sql_join.call(null,db," ",more_args)):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_fn,new cljs.core.Keyword(null,"order-by","order-by",(1527318070)),(function (db,node){
var vec__297 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__298 = cljs.core.seq.call(null,vec__297);
var first__299 = cljs.core.first.call(null,seq__298);
var seq__298__$1 = cljs.core.next.call(null,seq__298);
var _ = first__299;
var args = seq__298__$1;
return sqlingvo.compiler$macros.concat_sql.call(null,"ORDER BY ",sqlingvo.compiler$macros.compile_sql_join.call(null,db,", ",args));
}));
(function (){
sqlingvo.compiler$macros.compile_direction = (function sqlingvo$compiler$macros$compile_direction(db,node){
var vec__303 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__304 = cljs.core.seq.call(null,vec__303);
var first__305 = cljs.core.first.call(null,seq__304);
var seq__304__$1 = cljs.core.next.call(null,seq__304);
var name = first__305;
var args = seq__304__$1;
return sqlingvo.compiler$macros.concat_sql.call(null,sqlingvo.compiler$macros.compile_sql.call(null,db,cljs.core.first.call(null,args))," ",clojure.string.upper_case.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(name))));
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.compile_direction;},new cljs.core.Symbol("sqlingvo.compiler$macros","compile-direction","sqlingvo.compiler$macros/compile-direction",(-1538561773),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"compile-direction","compile-direction",(-1263191508),null),"sqlingvo/compiler.cljc",(25),(1),(266),(266),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler$macros.compile_direction)?sqlingvo.compiler$macros.compile_direction.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_fn,new cljs.core.Keyword(null,"asc","asc",(356854569)),(function (db,node){
return sqlingvo.compiler$macros.compile_direction.call(null,db,node);
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_fn,new cljs.core.Keyword(null,"desc","desc",(2093485764)),(function (db,node){
return sqlingvo.compiler$macros.compile_direction.call(null,db,node);
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_fn,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (db,node){
var vec__306 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__307 = cljs.core.seq.call(null,vec__306);
var first__308 = cljs.core.first.call(null,seq__307);
var seq__307__$1 = cljs.core.next.call(null,seq__307);
var name = first__308;
var args = seq__307__$1;
return sqlingvo.compiler$macros.concat_sql.call(null,sqlingvo.util.sql_quote_fn.call(null,db,new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(name)),"(",sqlingvo.compiler$macros.join_sql.call(null,", ",sqlingvo.compiler$macros.compile_exprs.call(null,db,args)),")");
}));
if(typeof sqlingvo.compiler$macros.compile_from !== 'undefined'){
} else {
(function (){
sqlingvo.compiler$macros.compile_from = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"sqlingvo.compiler$macros","compile-from"),((function (method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__){
return (function (db,ast){
return new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(ast);
});})(method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.compile_from;},new cljs.core.Symbol("sqlingvo.compiler$macros","compile-from","sqlingvo.compiler$macros/compile-from",(-1996096900),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"compile-from","compile-from",(-1184352405),null),"sqlingvo/compiler.cljc",(23),(1),(284),(284),cljs.core.List.EMPTY,null,(cljs.core.truth_(sqlingvo.compiler$macros.compile_from)?sqlingvo.compiler$macros.compile_from.cljs$lang$test:null)])));})()
;
}
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_from,new cljs.core.Keyword(null,"list","list",(765357683)),(function (db,fn){
return sqlingvo.compiler$macros.compile_sql.call(null,db,fn);
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_from,new cljs.core.Keyword(null,"select","select",(1147833503)),(function (db,node){
var vec__309 = sqlingvo.compiler$macros.compile_sql.call(null,db,node);
var seq__310 = cljs.core.seq.call(null,vec__309);
var first__311 = cljs.core.first.call(null,seq__310);
var seq__310__$1 = cljs.core.next.call(null,seq__310);
var sql = first__311;
var args = seq__310__$1;
return cljs.core.cons.call(null,[cljs.core.str("("),cljs.core.str(sql),cljs.core.str(") AS "),cljs.core.str(sqlingvo.util.sql_quote.call(null,db,new cljs.core.Keyword(null,"as","as",(1148689641)).cljs$core$IFn$_invoke$arity$1(node)))].join(''),args);
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_from,new cljs.core.Keyword(null,"table","table",(-564943036)),(function (db,node){
return sqlingvo.compiler$macros.compile_sql.call(null,db,node);
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_from,new cljs.core.Keyword(null,"alias","alias",(-2039751630)),(function (db,node){
return sqlingvo.compiler$macros.compile_sql.call(null,db,node);
}));
(function (){
sqlingvo.compiler$macros.compile_column = (function sqlingvo$compiler$macros$compile_column(db,column){
if(cljs.core.truth_(new cljs.core.Keyword(null,"length","length",(588987862)).cljs$core$IFn$_invoke$arity$1(column))){
cljs.core.println.call(null,"Column :length is deprecated, use :size instead!");
} else {
}

return sqlingvo.compiler$macros.concat_sql.call(null,sqlingvo.util.sql_quote.call(null,db,new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(column))," ",clojure.string.replace.call(null,clojure.string.upper_case.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(column))),"-"," "),(cljs.core.truth_(new cljs.core.Keyword(null,"array?","array?",(1405427572)).cljs$core$IFn$_invoke$arity$1(column))?"[]":null),(function (){var temp__19520__auto__ = (function (){var or__20817__auto__ = new cljs.core.Keyword(null,"size","size",(1098693007)).cljs$core$IFn$_invoke$arity$1(column);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return new cljs.core.Keyword(null,"size","size",(1098693007)).cljs$core$IFn$_invoke$arity$1(column);
}
})();
if(cljs.core.truth_(temp__19520__auto__)){
var size = temp__19520__auto__;
return [cljs.core.str("("),cljs.core.str(size),cljs.core.str(")")].join('');
} else {
return null;
}
})(),(cljs.core.truth_(new cljs.core.Keyword(null,"not-null?","not-null?",(-2042435516)).cljs$core$IFn$_invoke$arity$1(column))?" NOT NULL":null),(cljs.core.truth_(new cljs.core.Keyword(null,"unique?","unique?",(-392536907)).cljs$core$IFn$_invoke$arity$1(column))?" UNIQUE":null),(cljs.core.truth_(new cljs.core.Keyword(null,"primary-key?","primary-key?",(1804256454)).cljs$core$IFn$_invoke$arity$1(column))?" PRIMARY KEY":null),(function (){var temp__19520__auto__ = new cljs.core.Keyword(null,"default","default",(-1987822328)).cljs$core$IFn$_invoke$arity$1(column);
if(cljs.core.truth_(temp__19520__auto__)){
var default$ = temp__19520__auto__;
return sqlingvo.compiler$macros.concat_sql.call(null," DEFAULT ",sqlingvo.compiler$macros.compile_sql.call(null,db,default$));
} else {
return null;
}
})());
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.compile_column;},new cljs.core.Symbol("sqlingvo.compiler$macros","compile-column","sqlingvo.compiler$macros/compile-column",(1891158739),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"compile-column","compile-column",(1623852998),null),"sqlingvo/compiler.cljc",(21),(1),(299),(299),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"column","column",(-576213674),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler$macros.compile_column)?sqlingvo.compiler$macros.compile_column.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"alias","alias",(-2039751630)),(function (db,p__312){
var map__313 = p__312;
var map__313__$1 = ((((!((map__313 == null)))?((((map__313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__313):map__313);
var columns = cljs.core.get.call(null,map__313__$1,new cljs.core.Keyword(null,"columns","columns",(1998437288)));
var name = cljs.core.get.call(null,map__313__$1,new cljs.core.Keyword(null,"name","name",(1843675177)));
var expr = cljs.core.get.call(null,map__313__$1,new cljs.core.Keyword(null,"expr","expr",(745722291)));
return sqlingvo.compiler$macros.concat_sql.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"select","select",(1147833503)),null,new cljs.core.Keyword(null,"values","values",(372645556)),null], null), null),new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(expr)))?sqlingvo.compiler$macros.wrap_stmt.call(null,sqlingvo.compiler$macros.compile_sql.call(null,db,expr)):sqlingvo.compiler$macros.compile_sql.call(null,db,expr)),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"table","table",(-564943036)),new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(expr)))?" ":" AS "),sqlingvo.util.sql_quote.call(null,db,name),(cljs.core.truth_(cljs.core.not_empty.call(null,columns))?sqlingvo.compiler$macros.concat_sql.call(null," (",sqlingvo.compiler$macros.join_sql.call(null,", ",cljs.core.map.call(null,((function (map__313,map__313__$1,columns,name,expr){
return (function (p1__13_SHARP_){
return sqlingvo.compiler$macros.compile_sql.call(null,db,p1__13_SHARP_);
});})(map__313,map__313__$1,columns,name,expr))
,columns)),")"):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"array","array",(-2080713842)),(function (db,node){
return sqlingvo.compiler$macros.compile_array.call(null,db,node);
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"cascade","cascade",(-314486874)),(function (db,node){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CASCADE"], null);
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"check","check",(1226308904)),(function (db,p__315){
var map__316 = p__315;
var map__316__$1 = ((((!((map__316 == null)))?((((map__316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__316):map__316);
var expr = cljs.core.get.call(null,map__316__$1,new cljs.core.Keyword(null,"expr","expr",(745722291)));
return sqlingvo.compiler$macros.concat_sql.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECK "], null),sqlingvo.compiler$macros.compile_expr.call(null,db,expr));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"concurrently","concurrently",(-528920250)),(function (db,node){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CONCURRENTLY"], null);
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"condition","condition",(1668437652)),(function (db,p__318){
var map__319 = p__318;
var map__319__$1 = ((((!((map__319 == null)))?((((map__319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__319.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__319):map__319);
var condition = cljs.core.get.call(null,map__319__$1,new cljs.core.Keyword(null,"condition","condition",(1668437652)));
return sqlingvo.compiler$macros.compile_sql.call(null,db,condition);
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"column","column",(2078222095)),(function (db,p__321){
var map__322 = p__321;
var map__322__$1 = ((((!((map__322 == null)))?((((map__322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__322.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__322):map__322);
var direction = cljs.core.get.call(null,map__322__$1,new cljs.core.Keyword(null,"direction","direction",(-633359395)));
var schema = cljs.core.get.call(null,map__322__$1,new cljs.core.Keyword(null,"schema","schema",(-1582001791)));
var table = cljs.core.get.call(null,map__322__$1,new cljs.core.Keyword(null,"table","table",(-564943036)));
var name = cljs.core.get.call(null,map__322__$1,new cljs.core.Keyword(null,"name","name",(1843675177)));
var nulls = cljs.core.get.call(null,map__322__$1,new cljs.core.Keyword(null,"nulls","nulls",(-1240282893)));
return sqlingvo.compiler$macros.concat_sql.call(null,clojure.string.join.call(null,".",cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(schema)?sqlingvo.util.sql_quote.call(null,db,schema):null),(cljs.core.truth_(table)?sqlingvo.util.sql_quote.call(null,db,table):null),(cljs.core.truth_(name)?((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"*","*",(-1294732318)),name))?"*":sqlingvo.util.sql_quote.call(null,db,name)):null)], null))),(cljs.core.truth_(direction)?[cljs.core.str(" "),cljs.core.str(clojure.string.upper_case.call(null,cljs.core.name.call(null,direction)))].join(''):null),(cljs.core.truth_(nulls)?[cljs.core.str(" NULLS "),cljs.core.str(sqlingvo.compiler$macros.keyword_sql.call(null,nulls))].join(''):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"constant","constant",(-379609303)),(function (db,node){
return sqlingvo.compiler$macros.compile_const.call(null,db,node);
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"continue-identity","continue-identity",(1689569409)),(function (db,p__324){
var map__325 = p__324;
var map__325__$1 = ((((!((map__325 == null)))?((((map__325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__325.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__325):map__325);
var op = cljs.core.get.call(null,map__325__$1,new cljs.core.Keyword(null,"op","op",(-1882987955)));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CONTINUE IDENTITY"], null);
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"copy","copy",(-1077617309)),(function (db,p__327){
var map__328 = p__327;
var map__328__$1 = ((((!((map__328 == null)))?((((map__328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__328.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__328):map__328);
var to = cljs.core.get.call(null,map__328__$1,new cljs.core.Keyword(null,"to","to",(192099007)));
var encoding = cljs.core.get.call(null,map__328__$1,new cljs.core.Keyword(null,"encoding","encoding",(1728578272)));
var table = cljs.core.get.call(null,map__328__$1,new cljs.core.Keyword(null,"table","table",(-564943036)));
var columns = cljs.core.get.call(null,map__328__$1,new cljs.core.Keyword(null,"columns","columns",(1998437288)));
var delimiter = cljs.core.get.call(null,map__328__$1,new cljs.core.Keyword(null,"delimiter","delimiter",(-1766618000)));
var from = cljs.core.get.call(null,map__328__$1,new cljs.core.Keyword(null,"from","from",(1815293044)));
return sqlingvo.compiler$macros.concat_sql.call(null,"COPY ",sqlingvo.compiler$macros.compile_sql.call(null,db,table),(cljs.core.truth_(cljs.core.not_empty.call(null,columns))?sqlingvo.compiler$macros.concat_sql.call(null," (",sqlingvo.compiler$macros.compile_sql_join.call(null,db,", ",columns),")"):null)," FROM ",(function (){var from__$1 = cljs.core.first.call(null,from);
if(typeof from__$1 === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["?",from__$1], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"stdin","stdin",(177433088)),from__$1)){
return "STDIN";
} else {
return null;
}
}
})(),(cljs.core.truth_(encoding)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(" ENCODING "),cljs.core.str(sqlingvo.compiler$macros.placeholder.call(null,db))].join(''),encoding], null):null),(cljs.core.truth_(delimiter)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(" DELIMITER "),cljs.core.str(sqlingvo.compiler$macros.placeholder.call(null,db))].join(''),delimiter], null):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"create-table","create-table",(1297148194)),(function (db,p__330){
var map__331 = p__330;
var map__331__$1 = ((((!((map__331 == null)))?((((map__331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__331.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__331):map__331);
var node = map__331__$1;
var temporary = cljs.core.get.call(null,map__331__$1,new cljs.core.Keyword(null,"temporary","temporary",(1635533692)));
var primary_key = cljs.core.get.call(null,map__331__$1,new cljs.core.Keyword(null,"primary-key","primary-key",(1422512605)));
var table = cljs.core.get.call(null,map__331__$1,new cljs.core.Keyword(null,"table","table",(-564943036)));
var like = cljs.core.get.call(null,map__331__$1,new cljs.core.Keyword(null,"like","like",(-914050076)));
var inherits = cljs.core.get.call(null,map__331__$1,new cljs.core.Keyword(null,"inherits","inherits",(-150102489)));
var if_not_exists = cljs.core.get.call(null,map__331__$1,new cljs.core.Keyword(null,"if-not-exists","if-not-exists",(739006925)));
var checks = cljs.core.get.call(null,map__331__$1,new cljs.core.Keyword(null,"checks","checks",(526134637)));
var columns = cljs.core.map.call(null,new cljs.core.Keyword(null,"column","column",(2078222095)).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"columns","columns",(1998437288)).cljs$core$IFn$_invoke$arity$1(node));
return sqlingvo.compiler$macros.concat_sql.call(null,"CREATE",(cljs.core.truth_(temporary)?" TEMPORARY":null)," TABLE",(cljs.core.truth_(if_not_exists)?" IF NOT EXISTS":null),sqlingvo.compiler$macros.concat_sql.call(null," ",sqlingvo.compiler$macros.compile_sql.call(null,db,table))," (",((!(cljs.core.empty_QMARK_.call(null,columns)))?sqlingvo.compiler$macros.join_sql.call(null,", ",cljs.core.map.call(null,((function (columns,map__331,map__331__$1,node,temporary,primary_key,table,like,inherits,if_not_exists,checks){
return (function (p1__14_SHARP_){
return sqlingvo.compiler$macros.compile_column.call(null,db,p1__14_SHARP_);
});})(columns,map__331,map__331__$1,node,temporary,primary_key,table,like,inherits,if_not_exists,checks))
,columns)):(cljs.core.truth_(like)?sqlingvo.compiler$macros.compile_sql.call(null,db,like):null)),(cljs.core.truth_(cljs.core.not_empty.call(null,checks))?sqlingvo.compiler$macros.compile_sql_join.call(null,db,", ",checks):null),(cljs.core.truth_(cljs.core.not_empty.call(null,primary_key))?sqlingvo.compiler$macros.concat_sql.call(null,", PRIMARY KEY(",clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (columns,map__331,map__331__$1,node,temporary,primary_key,table,like,inherits,if_not_exists,checks){
return (function (p1__15_SHARP_){
return sqlingvo.util.sql_quote.call(null,db,p1__15_SHARP_);
});})(columns,map__331,map__331__$1,node,temporary,primary_key,table,like,inherits,if_not_exists,checks))
,primary_key)),")"):null),")",(cljs.core.truth_(inherits)?sqlingvo.compiler$macros.concat_sql.call(null," INHERITS (",sqlingvo.compiler$macros.compile_sql_join.call(null,db,", ",inherits),")"):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"delete","delete",(-1768633620)),(function (db,node){
var map__333 = node;
var map__333__$1 = ((((!((map__333 == null)))?((((map__333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__333):map__333);
var where = cljs.core.get.call(null,map__333__$1,new cljs.core.Keyword(null,"where","where",(-2044795965)));
var table = cljs.core.get.call(null,map__333__$1,new cljs.core.Keyword(null,"table","table",(-564943036)));
var returning = cljs.core.get.call(null,map__333__$1,new cljs.core.Keyword(null,"returning","returning",(-387623629)));
return sqlingvo.compiler$macros.concat_sql.call(null,"DELETE FROM ",sqlingvo.compiler$macros.compile_sql.call(null,db,table),(cljs.core.truth_(cljs.core.not_empty.call(null,where))?sqlingvo.compiler$macros.concat_sql.call(null," WHERE ",sqlingvo.compiler$macros.compile_sql.call(null,db,where)):null),(cljs.core.truth_(cljs.core.not_empty.call(null,returning))?sqlingvo.compiler$macros.concat_sql.call(null," RETURNING ",sqlingvo.compiler$macros.compile_sql_join.call(null,db,", ",returning)):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"distinct","distinct",(-1788879121)),(function (db,p__335){
var map__336 = p__335;
var map__336__$1 = ((((!((map__336 == null)))?((((map__336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__336.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__336):map__336);
var exprs = cljs.core.get.call(null,map__336__$1,new cljs.core.Keyword(null,"exprs","exprs",(1795829094)));
var on = cljs.core.get.call(null,map__336__$1,new cljs.core.Keyword(null,"on","on",(173873944)));
return sqlingvo.compiler$macros.concat_sql.call(null,"DISTINCT ",(cljs.core.truth_(cljs.core.not_empty.call(null,on))?sqlingvo.compiler$macros.concat_sql.call(null,"ON (",sqlingvo.compiler$macros.compile_sql_join.call(null,db,", ",on),") "):null),sqlingvo.compiler$macros.compile_sql_join.call(null,db,", ",exprs));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"drop-table","drop-table",(371446895)),(function (db,p__338){
var map__339 = p__338;
var map__339__$1 = ((((!((map__339 == null)))?((((map__339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__339):map__339);
var restrict = cljs.core.get.call(null,map__339__$1,new cljs.core.Keyword(null,"restrict","restrict",(-1071101511)));
var cascade = cljs.core.get.call(null,map__339__$1,new cljs.core.Keyword(null,"cascade","cascade",(-314486874)));
var if_exists = cljs.core.get.call(null,map__339__$1,new cljs.core.Keyword(null,"if-exists","if-exists",(-1964107033)));
var tables = cljs.core.get.call(null,map__339__$1,new cljs.core.Keyword(null,"tables","tables",(1334623052)));
return sqlingvo.compiler$macros.join_sql.call(null," ",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DROP TABLE",sqlingvo.compiler$macros.compile_sql.call(null,db,if_exists),sqlingvo.compiler$macros.compile_sql_join.call(null,db,", ",tables),sqlingvo.compiler$macros.compile_sql.call(null,db,cascade),sqlingvo.compiler$macros.compile_sql.call(null,db,restrict)], null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"except","except",(1116893347)),(function (db,node){
return sqlingvo.compiler$macros.compile_set_op.call(null,db,new cljs.core.Keyword(null,"except","except",(1116893347)),node);
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"expr-list","expr-list",(-6297624)),(function (db,p__341){
var map__342 = p__341;
var map__342__$1 = ((((!((map__342 == null)))?((((map__342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__342.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__342):map__342);
var children = cljs.core.get.call(null,map__342__$1,new cljs.core.Keyword(null,"children","children",(-940561982)));
var as = cljs.core.get.call(null,map__342__$1,new cljs.core.Keyword(null,"as","as",(1148689641)));
return sqlingvo.compiler$macros.concat_sql.call(null,sqlingvo.compiler$macros.compile_sql_join.call(null,db," ",children));
}));
if(typeof sqlingvo.compiler$macros.compile_explain_option !== 'undefined'){
} else {
/**
 * Compile an EXPLAIN option.
 */
(function (){
sqlingvo.compiler$macros.compile_explain_option = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"sqlingvo.compiler$macros","compile-explain-option"),((function (method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__){
return (function (db,p__344){
var vec__345 = p__344;
var option = cljs.core.nth.call(null,vec__345,(0),null);
var value = cljs.core.nth.call(null,vec__345,(1),null);
return option;
});})(method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.compile_explain_option;},new cljs.core.Symbol("sqlingvo.compiler$macros","compile-explain-option","sqlingvo.compiler$macros/compile-explain-option",(-824038037),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"compile-explain-option","compile-explain-option",(-564683196),null),"sqlingvo/compiler.cljc",(33),(1),(437),(437),cljs.core.List.EMPTY,"Compile an EXPLAIN option.",(cljs.core.truth_(sqlingvo.compiler$macros.compile_explain_option)?sqlingvo.compiler$macros.compile_explain_option.cljs$lang$test:null)])));})()
;
}
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_explain_option,new cljs.core.Keyword(null,"format","format",(-1306924766)),(function (db,p__348){
var vec__349 = p__348;
var option = cljs.core.nth.call(null,vec__349,(0),null);
var value = cljs.core.nth.call(null,vec__349,(1),null);
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",(-1790561697)),null,new cljs.core.Keyword(null,"xml","xml",(-1170142052)),null,new cljs.core.Keyword(null,"json","json",(1279968570)),null,new cljs.core.Keyword(null,"yaml","yaml",(2065170959)),null], null), null),value)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid EXPLAIN format: "),cljs.core.str(cljs.core.name.call(null,value))].join('')),cljs.core.str("\n"),cljs.core.str("(contains? #{:text :xml :json :yaml} value)")].join('')));
}

return sqlingvo.compiler$macros.concat_sql.call(null,"FORMAT ",clojure.string.upper_case.call(null,cljs.core.name.call(null,value)));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_explain_option,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (db,p__352){
var vec__353 = p__352;
var option = cljs.core.nth.call(null,vec__353,(0),null);
var value = cljs.core.nth.call(null,vec__353,(1),null);
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"analyze","analyze",(-766389120)),null,new cljs.core.Keyword(null,"buffers","buffers",(471409492)),null,new cljs.core.Keyword(null,"costs","costs",(2093295309)),null,new cljs.core.Keyword(null,"timing","timing",(-1849225195)),null,new cljs.core.Keyword(null,"verbose","verbose",(1694226060)),null], null), null),option)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid EXPLAIN option: "),cljs.core.str(cljs.core.name.call(null,option))].join('')),cljs.core.str("\n"),cljs.core.str("(contains? #{:analyze :buffers :costs :timing :verbose} option)")].join('')));
}

return sqlingvo.compiler$macros.concat_sql.call(null,clojure.string.upper_case.call(null,cljs.core.name.call(null,option))," ",clojure.string.upper_case.call(null,[cljs.core.str(value === true)].join('')));
}));
/**
 * Compile the EXPLAIN `options`.
 */
(function (){
sqlingvo.compiler$macros.compile_explain_options = (function sqlingvo$compiler$macros$compile_explain_options(db,options){
if(cljs.core.empty_QMARK_.call(null,options)){
return null;
} else {
return sqlingvo.compiler$macros.concat_sql.call(null,"(",sqlingvo.compiler$macros.join_sql.call(null,", ",cljs.core.map.call(null,(function (p1__16_SHARP_){
return sqlingvo.compiler$macros.compile_explain_option.call(null,db,p1__16_SHARP_);
}),options)),")");
}
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.compile_explain_options;},new cljs.core.Symbol("sqlingvo.compiler$macros","compile-explain-options","sqlingvo.compiler$macros/compile-explain-options",(-1819965694),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"compile-explain-options","compile-explain-options",(-501746659),null),"sqlingvo/compiler.cljc",(30),(1),(453),(453),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"options","options",(1740170016),null)], null)),"Compile the EXPLAIN `options`.",(cljs.core.truth_(sqlingvo.compiler$macros.compile_explain_options)?sqlingvo.compiler$macros.compile_explain_options.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"explain","explain",(484226146)),(function (db,node){
var opts = sqlingvo.compiler$macros.compile_explain_options.call(null,db,new cljs.core.Keyword(null,"opts","opts",(155075701)).cljs$core$IFn$_invoke$arity$1(node));
return sqlingvo.compiler$macros.concat_sql.call(null,"EXPLAIN ",(cljs.core.truth_(opts)?sqlingvo.compiler$macros.concat_sql.call(null,opts," "):null),sqlingvo.compiler$macros.compile_sql.call(null,db,new cljs.core.Keyword(null,"stmt","stmt",(275095703)).cljs$core$IFn$_invoke$arity$1(node)));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"attr","attr",(-604132353)),(function (db,node){
return sqlingvo.compiler$macros.concat_sql.call(null,"(",sqlingvo.compiler$macros.compile_sql.call(null,db,new cljs.core.Keyword(null,"arg","arg",(-1747261837)).cljs$core$IFn$_invoke$arity$1(node)),").",sqlingvo.util.sql_quote.call(null,db,new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(node)));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"from","from",(1815293044)),(function (db,p__356){
var map__357 = p__356;
var map__357__$1 = ((((!((map__357 == null)))?((((map__357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__357.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__357):map__357);
var clause = cljs.core.get.call(null,map__357__$1,new cljs.core.Keyword(null,"clause","clause",(1479668060)));
var joins = cljs.core.get.call(null,map__357__$1,new cljs.core.Keyword(null,"joins","joins",(1033962699)));
return sqlingvo.compiler$macros.concat_sql.call(null,"FROM ",sqlingvo.compiler$macros.join_sql.call(null,", ",cljs.core.map.call(null,((function (map__357,map__357__$1,clause,joins){
return (function (p1__17_SHARP_){
return sqlingvo.compiler$macros.compile_from.call(null,db,p1__17_SHARP_);
});})(map__357,map__357__$1,clause,joins))
,clause)),(cljs.core.truth_(cljs.core.not_empty.call(null,joins))?sqlingvo.compiler$macros.compile_sql_join.call(null,db," ",joins):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"group-by","group-by",(-379139802)),(function (db,p__359){
var map__360 = p__359;
var map__360__$1 = ((((!((map__360 == null)))?((((map__360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__360):map__360);
var exprs = cljs.core.get.call(null,map__360__$1,new cljs.core.Keyword(null,"exprs","exprs",(1795829094)));
return sqlingvo.compiler$macros.concat_sql.call(null,"GROUP BY",sqlingvo.compiler$macros.compile_sql.call(null,db,exprs));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"if-exists","if-exists",(-1964107033)),(function (db,p__362){
var map__363 = p__362;
var map__363__$1 = ((((!((map__363 == null)))?((((map__363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__363.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__363):map__363);
var op = cljs.core.get.call(null,map__363__$1,new cljs.core.Keyword(null,"op","op",(-1882987955)));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IF EXISTS"], null);
}));
(function (){
sqlingvo.compiler$macros.compile_value = (function sqlingvo$compiler$macros$compile_value(db,columns,value){
var values = cljs.core.map.call(null,(function (p1__18_SHARP_){
var or__20817__auto__ = cljs.core.get.call(null,value,p1__18_SHARP_);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"nil","nil",(99600501))], null);
}
}),cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",(1843675177)),columns));
var values__$1 = cljs.core.map.call(null,((function (values){
return (function (p1__19_SHARP_){
return sqlingvo.compiler$macros.compile_sql.call(null,db,p1__19_SHARP_);
});})(values))
,values);
return sqlingvo.compiler$macros.concat_sql.call(null,"(",sqlingvo.compiler$macros.join_sql.call(null,", ",values__$1),")");
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.compile_value;},new cljs.core.Symbol("sqlingvo.compiler$macros","compile-value","sqlingvo.compiler$macros/compile-value",(1263506232),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"compile-value","compile-value",(1157439533),null),"sqlingvo/compiler.cljc",(21),(1),(483),(483),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"columns","columns",(-655998481),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler$macros.compile_value)?sqlingvo.compiler$macros.compile_value.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.compiler$macros.compile_values_maps = (function sqlingvo$compiler$macros$compile_values_maps(db,p__365){
var map__368 = p__365;
var map__368__$1 = ((((!((map__368 == null)))?((((map__368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__368):map__368);
var columns = cljs.core.get.call(null,map__368__$1,new cljs.core.Keyword(null,"columns","columns",(1998437288)));
var values = cljs.core.get.call(null,map__368__$1,new cljs.core.Keyword(null,"values","values",(372645556)));
var values__$1 = cljs.core.map.call(null,((function (map__368,map__368__$1,columns,values){
return (function (p1__20_SHARP_){
return sqlingvo.compiler$macros.compile_value.call(null,db,columns,p1__20_SHARP_);
});})(map__368,map__368__$1,columns,values))
,values);
return sqlingvo.compiler$macros.concat_sql.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["VALUES "], null),sqlingvo.compiler$macros.join_sql.call(null,", ",values__$1));
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.compile_values_maps;},new cljs.core.Symbol("sqlingvo.compiler$macros","compile-values-maps","sqlingvo.compiler$macros/compile-values-maps",(2094837693),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"compile-values-maps","compile-values-maps",(1279990954),null),"sqlingvo/compiler.cljc",(27),(1),(488),(488),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"columns","columns",(-655998481),null),new cljs.core.Symbol(null,"values","values",(2013177083),null)], null)], null)], null)),null,(cljs.core.truth_(sqlingvo.compiler$macros.compile_values_maps)?sqlingvo.compiler$macros.compile_values_maps.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.compiler$macros.compile_values_exprs = (function sqlingvo$compiler$macros$compile_values_exprs(db,node){
return sqlingvo.compiler$macros.concat_sql.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["VALUES "], null),sqlingvo.compiler$macros.join_sql.call(null,", ",(function (){var iter__23197__auto__ = (function sqlingvo$compiler$macros$compile_values_exprs_$_iter__374(s__375){
return (new cljs.core.LazySeq(null,(function (){
var s__375__$1 = s__375;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__375__$1);
if(temp__19834__auto__){
var s__375__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__375__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__375__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__377 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__376 = (0);
while(true){
if((i__376 < size__23196__auto__)){
var exprs = cljs.core._nth.call(null,c__23195__auto__,i__376);
cljs.core.chunk_append.call(null,b__377,sqlingvo.compiler$macros.concat_sql.call(null,"(",sqlingvo.compiler$macros.join_sql.call(null,", ",cljs.core.map.call(null,((function (i__376,exprs,c__23195__auto__,size__23196__auto__,b__377,s__375__$2,temp__19834__auto__){
return (function (p1__21_SHARP_){
return sqlingvo.compiler$macros.compile_sql.call(null,db,p1__21_SHARP_);
});})(i__376,exprs,c__23195__auto__,size__23196__auto__,b__377,s__375__$2,temp__19834__auto__))
,exprs)),")"));

var G__378 = (i__376 + (1));
i__376 = G__378;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__377),sqlingvo$compiler$macros$compile_values_exprs_$_iter__374.call(null,cljs.core.chunk_rest.call(null,s__375__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__377),null);
}
} else {
var exprs = cljs.core.first.call(null,s__375__$2);
return cljs.core.cons.call(null,sqlingvo.compiler$macros.concat_sql.call(null,"(",sqlingvo.compiler$macros.join_sql.call(null,", ",cljs.core.map.call(null,((function (exprs,s__375__$2,temp__19834__auto__){
return (function (p1__21_SHARP_){
return sqlingvo.compiler$macros.compile_sql.call(null,db,p1__21_SHARP_);
});})(exprs,s__375__$2,temp__19834__auto__))
,exprs)),")"),sqlingvo$compiler$macros$compile_values_exprs_$_iter__374.call(null,cljs.core.rest.call(null,s__375__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__23197__auto__.call(null,new cljs.core.Keyword(null,"values","values",(372645556)).cljs$core$IFn$_invoke$arity$1(node));
})()));
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.compile_values_exprs;},new cljs.core.Symbol("sqlingvo.compiler$macros","compile-values-exprs","sqlingvo.compiler$macros/compile-values-exprs",(1280224579),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"compile-values-exprs","compile-values-exprs",(1071439452),null),"sqlingvo/compiler.cljc",(28),(1),(492),(492),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler$macros.compile_values_exprs)?sqlingvo.compiler$macros.compile_values_exprs.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"values","values",(372645556)),(function (db,node){
var G__379 = (((new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(node) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(node).fqn:null);
switch (G__379) {
case "default":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DEFAULT VALUES"], null);

break;
case "exprs":
return sqlingvo.compiler$macros.compile_values_exprs.call(null,db,node);

break;
case "records":
return sqlingvo.compiler$macros.compile_values_maps.call(null,db,node);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(node))].join('')));

}
}));
(function (){
sqlingvo.compiler$macros.compile_row = (function sqlingvo$compiler$macros$compile_row(db,row){
return sqlingvo.compiler$macros.join_sql.call(null,", ",(function (){var iter__23197__auto__ = (function sqlingvo$compiler$macros$compile_row_$_iter__385(s__386){
return (new cljs.core.LazySeq(null,(function (){
var s__386__$1 = s__386;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__386__$1);
if(temp__19834__auto__){
var s__386__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__386__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__386__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__388 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__387 = (0);
while(true){
if((i__387 < size__23196__auto__)){
var column = cljs.core._nth.call(null,c__23195__auto__,i__387);
cljs.core.chunk_append.call(null,b__388,sqlingvo.compiler$macros.concat_sql.call(null,[cljs.core.str(sqlingvo.util.sql_quote.call(null,db,column)),cljs.core.str(" = ")].join(''),sqlingvo.compiler$macros.compile_sql.call(null,db,cljs.core.get.call(null,row,column))));

var G__389 = (i__387 + (1));
i__387 = G__389;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__388),sqlingvo$compiler$macros$compile_row_$_iter__385.call(null,cljs.core.chunk_rest.call(null,s__386__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__388),null);
}
} else {
var column = cljs.core.first.call(null,s__386__$2);
return cljs.core.cons.call(null,sqlingvo.compiler$macros.concat_sql.call(null,[cljs.core.str(sqlingvo.util.sql_quote.call(null,db,column)),cljs.core.str(" = ")].join(''),sqlingvo.compiler$macros.compile_sql.call(null,db,cljs.core.get.call(null,row,column))),sqlingvo$compiler$macros$compile_row_$_iter__385.call(null,cljs.core.rest.call(null,s__386__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__23197__auto__.call(null,cljs.core.keys.call(null,row));
})());
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.compile_row;},new cljs.core.Symbol("sqlingvo.compiler$macros","compile-row","sqlingvo.compiler$macros/compile-row",(-808991653),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"compile-row","compile-row",(-797698208),null),"sqlingvo/compiler.cljc",(18),(1),(508),(508),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"row","row",(1070392006),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler$macros.compile_row)?sqlingvo.compiler$macros.compile_row.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"do-nothing","do-nothing",(1030476282)),(function (db,node){
return " DO NOTHING";
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"do-update","do-update",(187504845)),(function (db,node){
return sqlingvo.compiler$macros.concat_sql.call(null," DO UPDATE SET ",sqlingvo.compiler$macros.compile_row.call(null,db,new cljs.core.Keyword(null,"expr","expr",(745722291)).cljs$core$IFn$_invoke$arity$1(node)));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"on-conflict","on-conflict",(1595391642)),(function (db,node){
return sqlingvo.compiler$macros.concat_sql.call(null," ON CONFLICT ",(function (){var temp__19834__auto__ = new cljs.core.Keyword(null,"target","target",(253001721)).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__19834__auto__)){
var target = temp__19834__auto__;
return sqlingvo.compiler$macros.concat_sql.call(null,"(",sqlingvo.compiler$macros.join_sql.call(null,", ",cljs.core.map.call(null,((function (target,temp__19834__auto__){
return (function (p1__22_SHARP_){
return sqlingvo.compiler$macros.compile_sql.call(null,db,p1__22_SHARP_);
});})(target,temp__19834__auto__))
,target)),")");
} else {
return null;
}
})(),sqlingvo.compiler$macros.compile_sql.call(null,db,new cljs.core.Keyword(null,"do-update","do-update",(187504845)).cljs$core$IFn$_invoke$arity$1(node)),(function (){var temp__19834__auto__ = new cljs.core.Keyword(null,"where","where",(-2044795965)).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__19834__auto__)){
var where = temp__19834__auto__;
return sqlingvo.compiler$macros.concat_sql.call(null," WHERE ",sqlingvo.compiler$macros.compile_sql.call(null,db,where));
} else {
return null;
}
})(),sqlingvo.compiler$macros.compile_sql.call(null,db,new cljs.core.Keyword(null,"do-nothing","do-nothing",(1030476282)).cljs$core$IFn$_invoke$arity$1(node)));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"on-conflict-on-constraint","on-conflict-on-constraint",(385209735)),(function (db,node){
return sqlingvo.compiler$macros.concat_sql.call(null," ON CONFLICT ON CONSTRAINT",(function (){var temp__19834__auto__ = new cljs.core.Keyword(null,"target","target",(253001721)).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__19834__auto__)){
var target = temp__19834__auto__;
return sqlingvo.compiler$macros.concat_sql.call(null," ",sqlingvo.util.sql_quote.call(null,db,target));
} else {
return null;
}
})(),sqlingvo.compiler$macros.compile_sql.call(null,db,new cljs.core.Keyword(null,"do-update","do-update",(187504845)).cljs$core$IFn$_invoke$arity$1(node)),(function (){var temp__19834__auto__ = new cljs.core.Keyword(null,"where","where",(-2044795965)).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__19834__auto__)){
var where = temp__19834__auto__;
return sqlingvo.compiler$macros.concat_sql.call(null," WHERE ",sqlingvo.compiler$macros.compile_sql.call(null,db,where));
} else {
return null;
}
})(),sqlingvo.compiler$macros.compile_sql.call(null,db,new cljs.core.Keyword(null,"do-nothing","do-nothing",(1030476282)).cljs$core$IFn$_invoke$arity$1(node)));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"insert","insert",(1286475395)),(function (db,p__390){
var map__391 = p__390;
var map__391__$1 = ((((!((map__391 == null)))?((((map__391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__391.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__391):map__391);
var node = map__391__$1;
var select = cljs.core.get.call(null,map__391__$1,new cljs.core.Keyword(null,"select","select",(1147833503)));
var where = cljs.core.get.call(null,map__391__$1,new cljs.core.Keyword(null,"where","where",(-2044795965)));
var table = cljs.core.get.call(null,map__391__$1,new cljs.core.Keyword(null,"table","table",(-564943036)));
var columns = cljs.core.get.call(null,map__391__$1,new cljs.core.Keyword(null,"columns","columns",(1998437288)));
var rows = cljs.core.get.call(null,map__391__$1,new cljs.core.Keyword(null,"rows","rows",(850049680)));
var returning = cljs.core.get.call(null,map__391__$1,new cljs.core.Keyword(null,"returning","returning",(-387623629)));
var values = cljs.core.get.call(null,map__391__$1,new cljs.core.Keyword(null,"values","values",(372645556)));
var with$ = cljs.core.get.call(null,map__391__$1,new cljs.core.Keyword(null,"with","with",(-1536296876)));
var columns__$1 = (cljs.core.truth_(cljs.core.not_empty.call(null,columns))?columns:new cljs.core.Keyword(null,"columns","columns",(1998437288)).cljs$core$IFn$_invoke$arity$1(values));
return sqlingvo.compiler$macros.concat_sql.call(null,"INSERT INTO ",sqlingvo.compiler$macros.compile_sql.call(null,db,table),(cljs.core.truth_(cljs.core.not_empty.call(null,columns__$1))?sqlingvo.compiler$macros.concat_sql.call(null," (",sqlingvo.compiler$macros.compile_sql_join.call(null,db,", ",columns__$1),")"):null),(cljs.core.truth_(values)?sqlingvo.compiler$macros.concat_sql.call(null," ",sqlingvo.compiler$macros.compile_sql.call(null,db,values)):null),(cljs.core.truth_(select)?sqlingvo.compiler$macros.concat_sql.call(null," ",sqlingvo.compiler$macros.compile_sql.call(null,db,select)):null),(cljs.core.truth_(with$)?sqlingvo.compiler$macros.concat_sql.call(null," ",sqlingvo.compiler$macros.compile_sql.call(null,db,with$)):null),(cljs.core.truth_(cljs.core.not_empty.call(null,where))?sqlingvo.compiler$macros.concat_sql.call(null," WHERE ",sqlingvo.compiler$macros.compile_sql.call(null,db,where)):null),sqlingvo.compiler$macros.compile_sql.call(null,db,new cljs.core.Keyword(null,"on-conflict","on-conflict",(1595391642)).cljs$core$IFn$_invoke$arity$1(node)),sqlingvo.compiler$macros.compile_sql.call(null,db,new cljs.core.Keyword(null,"on-conflict-on-constraint","on-conflict-on-constraint",(385209735)).cljs$core$IFn$_invoke$arity$1(node)),(cljs.core.truth_(cljs.core.not_empty.call(null,returning))?sqlingvo.compiler$macros.concat_sql.call(null," RETURNING ",sqlingvo.compiler$macros.compile_sql_join.call(null,db,", ",returning)):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"intersect","intersect",(-2039792392)),(function (db,node){
return sqlingvo.compiler$macros.compile_set_op.call(null,db,new cljs.core.Keyword(null,"intersect","intersect",(-2039792392)),node);
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"join","join",(-758861890)),(function (db,p__393){
var map__394 = p__393;
var map__394__$1 = ((((!((map__394 == null)))?((((map__394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__394.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__394):map__394);
var how = cljs.core.get.call(null,map__394__$1,new cljs.core.Keyword(null,"how","how",(-35333639)));
var outer = cljs.core.get.call(null,map__394__$1,new cljs.core.Keyword(null,"outer","outer",(-375185956)));
var using = cljs.core.get.call(null,map__394__$1,new cljs.core.Keyword(null,"using","using",(1948623036)));
var type = cljs.core.get.call(null,map__394__$1,new cljs.core.Keyword(null,"type","type",(1174270348)));
var from = cljs.core.get.call(null,map__394__$1,new cljs.core.Keyword(null,"from","from",(1815293044)));
var on = cljs.core.get.call(null,map__394__$1,new cljs.core.Keyword(null,"on","on",(173873944)));
return sqlingvo.compiler$macros.concat_sql.call(null,(function (){var G__396 = type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",(194557789)),G__396)){
return "CROSS ";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"inner","inner",(-1383171215)),G__396)){
return "INNER ";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",(-399115937)),G__396)){
return "LEFT ";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",(-452581833)),G__396)){
return "RIGHT ";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"full","full",(436801220)),G__396)){
return "FULL ";
} else {
if(cljs.core._EQ_.call(null,null,G__396)){
return "";
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
}
}
}
}
}
})(),(cljs.core.truth_(outer)?"OUTER ":null),"JOIN ",sqlingvo.compiler$macros.compile_from.call(null,db,from),(cljs.core.truth_(on)?sqlingvo.compiler$macros.concat_sql.call(null," ON ",sqlingvo.compiler$macros.compile_sql.call(null,db,on)):null),(cljs.core.truth_(cljs.core.not_empty.call(null,using))?sqlingvo.compiler$macros.concat_sql.call(null," USING (",sqlingvo.compiler$macros.compile_sql_join.call(null,db,", ",using),")"):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"keyword","keyword",(811389747)),(function (db,p__397){
var map__398 = p__397;
var map__398__$1 = ((((!((map__398 == null)))?((((map__398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__398.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__398):map__398);
var form = cljs.core.get.call(null,map__398__$1,new cljs.core.Keyword(null,"form","form",(-1624062471)));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sqlingvo.util.sql_quote.call(null,db,form)], null);
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"limit","limit",(-1355822363)),(function (db,p__400){
var map__401 = p__400;
var map__401__$1 = ((((!((map__401 == null)))?((((map__401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__401.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__401):map__401);
var expr = cljs.core.get.call(null,map__401__$1,new cljs.core.Keyword(null,"expr","expr",(745722291)));
return sqlingvo.compiler$macros.concat_sql.call(null,"LIMIT ",sqlingvo.compiler$macros.compile_expr.call(null,db,expr));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"like","like",(-914050076)),(function (db,p__403){
var map__404 = p__403;
var map__404__$1 = ((((!((map__404 == null)))?((((map__404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__404.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__404):map__404);
var table = cljs.core.get.call(null,map__404__$1,new cljs.core.Keyword(null,"table","table",(-564943036)));
var including = cljs.core.get.call(null,map__404__$1,new cljs.core.Keyword(null,"including","including",(-1349477850)));
var excluding = cljs.core.get.call(null,map__404__$1,new cljs.core.Keyword(null,"excluding","excluding",(98959558)));
return sqlingvo.compiler$macros.concat_sql.call(null,"LIKE ",sqlingvo.compiler$macros.compile_sql.call(null,db,table),(cljs.core.truth_(cljs.core.not_empty.call(null,including))?[cljs.core.str(" INCLUDING "),cljs.core.str(clojure.string.join.call(null," ",cljs.core.map.call(null,sqlingvo.compiler$macros.keyword_sql,including)))].join(''):null),(cljs.core.truth_(cljs.core.not_empty.call(null,excluding))?[cljs.core.str(" EXCLUDING "),cljs.core.str(clojure.string.join.call(null," ",cljs.core.map.call(null,sqlingvo.compiler$macros.keyword_sql,excluding)))].join(''):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"list","list",(765357683)),(function (db,node){
return sqlingvo.compiler$macros.concat_sql.call(null,sqlingvo.compiler$macros.compile_fn.call(null,db,node),(function (){var temp__19834__auto__ = new cljs.core.Keyword(null,"direction","direction",(-633359395)).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__19834__auto__)){
var direction = temp__19834__auto__;
return [cljs.core.str(" "),cljs.core.str(clojure.string.upper_case.call(null,cljs.core.name.call(null,direction)))].join('');
} else {
return null;
}
})());
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"nil","nil",(99600501)),(function (db,_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NULL"], null);
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"offset","offset",(296498311)),(function (db,p__406){
var map__407 = p__406;
var map__407__$1 = ((((!((map__407 == null)))?((((map__407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__407):map__407);
var expr = cljs.core.get.call(null,map__407__$1,new cljs.core.Keyword(null,"expr","expr",(745722291)));
return sqlingvo.compiler$macros.concat_sql.call(null,"OFFSET ",sqlingvo.compiler$macros.compile_expr.call(null,db,expr));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"table","table",(-564943036)),(function (db,p__409){
var map__410 = p__409;
var map__410__$1 = ((((!((map__410 == null)))?((((map__410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__410.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__410):map__410);
var schema = cljs.core.get.call(null,map__410__$1,new cljs.core.Keyword(null,"schema","schema",(-1582001791)));
var name = cljs.core.get.call(null,map__410__$1,new cljs.core.Keyword(null,"name","name",(1843675177)));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(clojure.string.join.call(null,".",cljs.core.map.call(null,((function (map__410,map__410__$1,schema,name){
return (function (p1__23_SHARP_){
return sqlingvo.util.sql_quote.call(null,db,p1__23_SHARP_);
});})(map__410,map__410__$1,schema,name))
,cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema,name], null)))))].join('')], null);
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"drop-materialized-view","drop-materialized-view",(-1779110488)),(function (db,node){
var map__412 = node;
var map__412__$1 = ((((!((map__412 == null)))?((((map__412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__412):map__412);
var restrict = cljs.core.get.call(null,map__412__$1,new cljs.core.Keyword(null,"restrict","restrict",(-1071101511)));
var view = cljs.core.get.call(null,map__412__$1,new cljs.core.Keyword(null,"view","view",(1247994814)));
var cascade = cljs.core.get.call(null,map__412__$1,new cljs.core.Keyword(null,"cascade","cascade",(-314486874)));
var if_exists = cljs.core.get.call(null,map__412__$1,new cljs.core.Keyword(null,"if-exists","if-exists",(-1964107033)));
return sqlingvo.compiler$macros.concat_sql.call(null,"DROP MATERIALIZED VIEW ",(cljs.core.truth_(if_exists)?sqlingvo.compiler$macros.concat_sql.call(null,sqlingvo.compiler$macros.compile_sql.call(null,db,if_exists)," "):null),sqlingvo.compiler$macros.compile_sql.call(null,db,view),(cljs.core.truth_(cascade)?sqlingvo.compiler$macros.concat_sql.call(null," ",sqlingvo.compiler$macros.compile_sql.call(null,db,cascade)):null),(cljs.core.truth_(restrict)?sqlingvo.compiler$macros.concat_sql.call(null," ",sqlingvo.compiler$macros.compile_sql.call(null,db,restrict)):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"refresh-materialized-view","refresh-materialized-view",(-121074453)),(function (db,node){
var map__414 = node;
var map__414__$1 = ((((!((map__414 == null)))?((((map__414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__414.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__414):map__414);
var view = cljs.core.get.call(null,map__414__$1,new cljs.core.Keyword(null,"view","view",(1247994814)));
var concurrently = cljs.core.get.call(null,map__414__$1,new cljs.core.Keyword(null,"concurrently","concurrently",(-528920250)));
var with_data = cljs.core.get.call(null,map__414__$1,new cljs.core.Keyword(null,"with-data","with-data",(-1106621804)));
return sqlingvo.compiler$macros.concat_sql.call(null,"REFRESH MATERIALIZED VIEW ",(cljs.core.truth_(concurrently)?sqlingvo.compiler$macros.concat_sql.call(null,sqlingvo.compiler$macros.compile_sql.call(null,db,concurrently)," "):null),sqlingvo.compiler$macros.compile_sql.call(null,db,view),(cljs.core.truth_(with_data)?sqlingvo.compiler$macros.concat_sql.call(null," ",sqlingvo.compiler$macros.compile_sql.call(null,db,with_data)):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"restrict","restrict",(-1071101511)),(function (db,p__416){
var map__417 = p__416;
var map__417__$1 = ((((!((map__417 == null)))?((((map__417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__417.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__417):map__417);
var op = cljs.core.get.call(null,map__417__$1,new cljs.core.Keyword(null,"op","op",(-1882987955)));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RESTRICT"], null);
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"restart-identity","restart-identity",(-69684336)),(function (db,p__419){
var map__420 = p__419;
var map__420__$1 = ((((!((map__420 == null)))?((((map__420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__420.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__420):map__420);
var op = cljs.core.get.call(null,map__420__$1,new cljs.core.Keyword(null,"op","op",(-1882987955)));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RESTART IDENTITY"], null);
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"select","select",(1147833503)),(function (db,node){
var map__422 = node;
var map__422__$1 = ((((!((map__422 == null)))?((((map__422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422):map__422);
var set = cljs.core.get.call(null,map__422__$1,new cljs.core.Keyword(null,"set","set",(304602554)));
var where = cljs.core.get.call(null,map__422__$1,new cljs.core.Keyword(null,"where","where",(-2044795965)));
var limit = cljs.core.get.call(null,map__422__$1,new cljs.core.Keyword(null,"limit","limit",(-1355822363)));
var group_by = cljs.core.get.call(null,map__422__$1,new cljs.core.Keyword(null,"group-by","group-by",(-379139802)));
var exprs = cljs.core.get.call(null,map__422__$1,new cljs.core.Keyword(null,"exprs","exprs",(1795829094)));
var offset = cljs.core.get.call(null,map__422__$1,new cljs.core.Keyword(null,"offset","offset",(296498311)));
var joins = cljs.core.get.call(null,map__422__$1,new cljs.core.Keyword(null,"joins","joins",(1033962699)));
var distinct = cljs.core.get.call(null,map__422__$1,new cljs.core.Keyword(null,"distinct","distinct",(-1788879121)));
var from = cljs.core.get.call(null,map__422__$1,new cljs.core.Keyword(null,"from","from",(1815293044)));
var order_by = cljs.core.get.call(null,map__422__$1,new cljs.core.Keyword(null,"order-by","order-by",(1527318070)));
return sqlingvo.compiler$macros.concat_sql.call(null,"SELECT ",sqlingvo.compiler$macros.join_sql.call(null,", ",cljs.core.map.call(null,((function (map__422,map__422__$1,set,where,limit,group_by,exprs,offset,joins,distinct,from,order_by){
return (function (p1__24_SHARP_){
return sqlingvo.compiler$macros.compile_expr.call(null,db,p1__24_SHARP_);
});})(map__422,map__422__$1,set,where,limit,group_by,exprs,offset,joins,distinct,from,order_by))
,exprs)),(cljs.core.truth_(distinct)?sqlingvo.compiler$macros.compile_sql.call(null,db,distinct):null),(cljs.core.truth_(cljs.core.not_empty.call(null,from))?sqlingvo.compiler$macros.concat_sql.call(null," FROM ",sqlingvo.compiler$macros.join_sql.call(null,", ",cljs.core.map.call(null,((function (map__422,map__422__$1,set,where,limit,group_by,exprs,offset,joins,distinct,from,order_by){
return (function (p1__25_SHARP_){
return sqlingvo.compiler$macros.compile_from.call(null,db,p1__25_SHARP_);
});})(map__422,map__422__$1,set,where,limit,group_by,exprs,offset,joins,distinct,from,order_by))
,from))):null),(cljs.core.truth_(cljs.core.not_empty.call(null,joins))?sqlingvo.compiler$macros.concat_sql.call(null," ",sqlingvo.compiler$macros.compile_sql_join.call(null,db," ",joins)):null),(cljs.core.truth_(cljs.core.not_empty.call(null,where))?sqlingvo.compiler$macros.concat_sql.call(null," WHERE ",sqlingvo.compiler$macros.compile_sql.call(null,db,where)):null),(cljs.core.truth_(cljs.core.not_empty.call(null,group_by))?sqlingvo.compiler$macros.concat_sql.call(null," GROUP BY ",sqlingvo.compiler$macros.compile_sql_join.call(null,db,", ",group_by)):null),(function (){var temp__19834__auto__ = new cljs.core.Keyword(null,"having","having",(-399543166)).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__19834__auto__)){
var having = temp__19834__auto__;
return sqlingvo.compiler$macros.concat_sql.call(null," HAVING ",sqlingvo.compiler$macros.compile_sql.call(null,db,having));
} else {
return null;
}
})(),(function (){var temp__19834__auto__ = new cljs.core.Keyword(null,"window","window",(724519534)).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__19834__auto__)){
var window = temp__19834__auto__;
return sqlingvo.compiler$macros.concat_sql.call(null," ",sqlingvo.compiler$macros.compile_sql.call(null,db,window));
} else {
return null;
}
})(),(cljs.core.truth_(cljs.core.not_empty.call(null,order_by))?sqlingvo.compiler$macros.concat_sql.call(null," ORDER BY ",sqlingvo.compiler$macros.compile_sql_join.call(null,db,", ",order_by)):null),(function (){var temp__19834__auto__ = (function (){var and__20770__auto__ = limit;
if(cljs.core.truth_(and__20770__auto__)){
return cljs.core.seq.call(null,sqlingvo.compiler$macros.compile_sql.call(null,db,limit));
} else {
return and__20770__auto__;
}
})();
if(cljs.core.truth_(temp__19834__auto__)){
var limit_sql = temp__19834__auto__;
return sqlingvo.compiler$macros.concat_sql.call(null," ",limit_sql);
} else {
return null;
}
})(),(cljs.core.truth_(offset)?sqlingvo.compiler$macros.concat_sql.call(null," ",sqlingvo.compiler$macros.compile_sql.call(null,db,offset)):null),(cljs.core.truth_(cljs.core.not_empty.call(null,set))?sqlingvo.compiler$macros.concat_sql.call(null," ",sqlingvo.compiler$macros.compile_sql_join.call(null,db,", ",set)):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"truncate","truncate",(-1327322939)),(function (db,p__424){
var map__425 = p__424;
var map__425__$1 = ((((!((map__425 == null)))?((((map__425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__425.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__425):map__425);
var restrict = cljs.core.get.call(null,map__425__$1,new cljs.core.Keyword(null,"restrict","restrict",(-1071101511)));
var continue_identity = cljs.core.get.call(null,map__425__$1,new cljs.core.Keyword(null,"continue-identity","continue-identity",(1689569409)));
var cascade = cljs.core.get.call(null,map__425__$1,new cljs.core.Keyword(null,"cascade","cascade",(-314486874)));
var tables = cljs.core.get.call(null,map__425__$1,new cljs.core.Keyword(null,"tables","tables",(1334623052)));
var restart_identity = cljs.core.get.call(null,map__425__$1,new cljs.core.Keyword(null,"restart-identity","restart-identity",(-69684336)));
return sqlingvo.compiler$macros.join_sql.call(null," ",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TRUNCATE TABLE",sqlingvo.compiler$macros.compile_sql_join.call(null,db,", ",tables),sqlingvo.compiler$macros.compile_sql.call(null,db,continue_identity),sqlingvo.compiler$macros.compile_sql.call(null,db,restart_identity),sqlingvo.compiler$macros.compile_sql.call(null,db,cascade),sqlingvo.compiler$macros.compile_sql.call(null,db,restrict)], null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"union","union",(2142937499)),(function (db,node){
return sqlingvo.compiler$macros.compile_set_op.call(null,db,new cljs.core.Keyword(null,"union","union",(2142937499)),node);
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"update","update",(1045576396)),(function (db,node){
var map__427 = node;
var map__427__$1 = ((((!((map__427 == null)))?((((map__427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__427):map__427);
var row = cljs.core.get.call(null,map__427__$1,new cljs.core.Keyword(null,"row","row",(-570139521)));
var where = cljs.core.get.call(null,map__427__$1,new cljs.core.Keyword(null,"where","where",(-2044795965)));
var table = cljs.core.get.call(null,map__427__$1,new cljs.core.Keyword(null,"table","table",(-564943036)));
var exprs = cljs.core.get.call(null,map__427__$1,new cljs.core.Keyword(null,"exprs","exprs",(1795829094)));
var returning = cljs.core.get.call(null,map__427__$1,new cljs.core.Keyword(null,"returning","returning",(-387623629)));
var from = cljs.core.get.call(null,map__427__$1,new cljs.core.Keyword(null,"from","from",(1815293044)));
return sqlingvo.compiler$macros.concat_sql.call(null,"UPDATE ",sqlingvo.compiler$macros.compile_sql.call(null,db,table)," SET ",(cljs.core.truth_(row)?sqlingvo.compiler$macros.compile_row.call(null,db,row):sqlingvo.compiler$macros.join_sql.call(null,", ",cljs.core.map.call(null,sqlingvo.compiler$macros.unwrap_stmt,sqlingvo.compiler$macros.compile_exprs.call(null,db,exprs)))),(cljs.core.truth_(cljs.core.not_empty.call(null,from))?sqlingvo.compiler$macros.concat_sql.call(null," FROM ",sqlingvo.compiler$macros.join_sql.call(null," ",cljs.core.map.call(null,((function (map__427,map__427__$1,row,where,table,exprs,returning,from){
return (function (p1__26_SHARP_){
return sqlingvo.compiler$macros.compile_from.call(null,db,p1__26_SHARP_);
});})(map__427,map__427__$1,row,where,table,exprs,returning,from))
,from))):null),(cljs.core.truth_(cljs.core.not_empty.call(null,where))?sqlingvo.compiler$macros.concat_sql.call(null," WHERE ",sqlingvo.compiler$macros.compile_sql.call(null,db,where)):null),(cljs.core.truth_(cljs.core.not_empty.call(null,returning))?sqlingvo.compiler$macros.concat_sql.call(null," RETURNING ",sqlingvo.compiler$macros.compile_sql_join.call(null,db,", ",returning)):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"with","with",(-1536296876)),(function (db,p__429){
var map__430 = p__429;
var map__430__$1 = ((((!((map__430 == null)))?((((map__430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__430):map__430);
var node = map__430__$1;
var query = cljs.core.get.call(null,map__430__$1,new cljs.core.Keyword(null,"query","query",(-1288509510)));
var bindings = cljs.core.get.call(null,map__430__$1,new cljs.core.Keyword(null,"bindings","bindings",(1271397192)));
return sqlingvo.compiler$macros.concat_sql.call(null,"WITH ",sqlingvo.compiler$macros.join_sql.call(null,", ",cljs.core.map.call(null,((function (map__430,map__430__$1,node,query,bindings){
return (function (alias,stmt){
return sqlingvo.compiler$macros.concat_sql.call(null,sqlingvo.util.sql_quote.call(null,db,alias)," AS (",sqlingvo.compiler$macros.compile_sql.call(null,db,stmt),")");
});})(map__430,map__430__$1,node,query,bindings))
,cljs.core.map.call(null,cljs.core.first,bindings),cljs.core.map.call(null,cljs.core.second,bindings)))," ",sqlingvo.compiler$macros.compile_sql.call(null,db,query));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"window","window",(724519534)),(function (db,node){
return sqlingvo.compiler$macros.concat_sql.call(null,"WINDOW ",sqlingvo.compiler$macros.join_sql.call(null,", ",(function (){var iter__23197__auto__ = (function sqlingvo$compiler$macros$iter__432(s__433){
return (new cljs.core.LazySeq(null,(function (){
var s__433__$1 = s__433;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__433__$1);
if(temp__19834__auto__){
var s__433__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__433__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__433__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__435 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__434 = (0);
while(true){
if((i__434 < size__23196__auto__)){
var alias = cljs.core._nth.call(null,c__23195__auto__,i__434);
cljs.core.chunk_append.call(null,b__435,sqlingvo.compiler$macros.concat_sql.call(null,sqlingvo.util.sql_quote.call(null,db,new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(alias))," AS (",sqlingvo.compiler$macros.compile_sql.call(null,db,new cljs.core.Keyword(null,"expr","expr",(745722291)).cljs$core$IFn$_invoke$arity$1(alias)),")"));

var G__436 = (i__434 + (1));
i__434 = G__436;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__435),sqlingvo$compiler$macros$iter__432.call(null,cljs.core.chunk_rest.call(null,s__433__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__435),null);
}
} else {
var alias = cljs.core.first.call(null,s__433__$2);
return cljs.core.cons.call(null,sqlingvo.compiler$macros.concat_sql.call(null,sqlingvo.util.sql_quote.call(null,db,new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(alias))," AS (",sqlingvo.compiler$macros.compile_sql.call(null,db,new cljs.core.Keyword(null,"expr","expr",(745722291)).cljs$core$IFn$_invoke$arity$1(alias)),")"),sqlingvo$compiler$macros$iter__432.call(null,cljs.core.rest.call(null,s__433__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__23197__auto__.call(null,new cljs.core.Keyword(null,"definitions","definitions",(167529986)).cljs$core$IFn$_invoke$arity$1(node));
})()));
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,new cljs.core.Keyword(null,"with-data","with-data",(-1106621804)),(function (db,node){
if(cljs.core.truth_(new cljs.core.Keyword(null,"data","data",(-232669377)).cljs$core$IFn$_invoke$arity$1(node))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WITH DATA"], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WITH NO DATA"], null);
}
}));
cljs.core._add_method.call(null,sqlingvo.compiler$macros.compile_sql,null,(function (db,p__437){
var map__438 = p__437;
var map__438__$1 = ((((!((map__438 == null)))?((((map__438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__438):map__438);
var op = cljs.core.get.call(null,map__438__$1,new cljs.core.Keyword(null,"op","op",(-1882987955)));
return cljs.core.PersistentVector.EMPTY;
}));
/**
 * Define SQL functions in terms of `arity-fn`.
 */
(function (){
sqlingvo.compiler$macros.defarity = (function sqlingvo$compiler$macros$defarity(var_args){
var args__23658__auto__ = [];
var len__23656__auto___448 = arguments.length;
var i__23657__auto___449 = (0);
while(true){
if((i__23657__auto___449 < len__23656__auto___448)){
args__23658__auto__.push((arguments[i__23657__auto___449]));

var G__450 = (i__23657__auto___449 + (1));
i__23657__auto___449 = G__450;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((3) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((3)),(0),null)):null);
return sqlingvo.compiler$macros.defarity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.defarity;},new cljs.core.Symbol("sqlingvo.compiler$macros","defarity","sqlingvo.compiler$macros/defarity",(-507596546),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"defarity","defarity",(287899113),null),"sqlingvo/compiler.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"arity-fn","arity-fn",(-672310774),null),new cljs.core.Symbol(null,"fns","fns",(-1469296983),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"arity-fn","arity-fn",(-672310774),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"fns","fns",(-1469296983),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(718),true,(718),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"arity-fn","arity-fn",(-672310774),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"fns","fns",(-1469296983),null)], null)),"Define SQL functions in terms of `arity-fn`.",(cljs.core.truth_(sqlingvo.compiler$macros.defarity)?sqlingvo.compiler$macros.defarity.cljs$lang$test:null)])));})()
;

sqlingvo.compiler$macros.defarity.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,arity_fn,fns){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var iter__23197__auto__ = (function sqlingvo$compiler$macros$iter__444(s__445){
return (new cljs.core.LazySeq(null,(function (){
var s__445__$1 = s__445;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__445__$1);
if(temp__19834__auto__){
var s__445__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__445__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__445__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__447 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__446 = (0);
while(true){
if((i__446 < size__23196__auto__)){
var fn_SHARP_ = cljs.core._nth.call(null,c__23195__auto__,i__446);
cljs.core.chunk_append.call(null,b__447,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",(-180785162),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("sqlingvo.compiler","compile-fn","sqlingvo.compiler/compile-fn",(-1861131040),null)),(function (){var x__23399__auto__ = fn_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"db","db",(-1661185010),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"node","node",(-2073234571),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = arity_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"db","db",(-1661185010),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"node","node",(-2073234571),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));

var G__451 = (i__446 + (1));
i__446 = G__451;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__447),sqlingvo$compiler$macros$iter__444.call(null,cljs.core.chunk_rest.call(null,s__445__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__447),null);
}
} else {
var fn_SHARP_ = cljs.core.first.call(null,s__445__$2);
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",(-180785162),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("sqlingvo.compiler","compile-fn","sqlingvo.compiler/compile-fn",(-1861131040),null)),(function (){var x__23399__auto__ = fn_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"db","db",(-1661185010),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"node","node",(-2073234571),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = arity_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"db","db",(-1661185010),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"node","node",(-2073234571),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())),sqlingvo$compiler$macros$iter__444.call(null,cljs.core.rest.call(null,s__445__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__23197__auto__.call(null,cljs.core.map.call(null,cljs.core.keyword,fns));
})()));
});

sqlingvo.compiler$macros.defarity.cljs$lang$maxFixedArity = (3);

sqlingvo.compiler$macros.defarity.cljs$lang$applyTo = (function (seq440){
var G__441 = cljs.core.first.call(null,seq440);
var seq440__$1 = cljs.core.next.call(null,seq440);
var G__442 = cljs.core.first.call(null,seq440__$1);
var seq440__$2 = cljs.core.next.call(null,seq440__$1);
var G__443 = cljs.core.first.call(null,seq440__$2);
var seq440__$3 = cljs.core.next.call(null,seq440__$2);
return sqlingvo.compiler$macros.defarity.cljs$core$IFn$_invoke$arity$variadic(G__441,G__442,G__443,seq440__$3);
});

new cljs.core.Var(function(){return sqlingvo.compiler$macros.defarity;},new cljs.core.Symbol("sqlingvo.compiler$macros","defarity","sqlingvo.compiler$macros/defarity",(-507596546),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"defarity","defarity",(287899113),null),"sqlingvo/compiler.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"arity-fn","arity-fn",(-672310774),null),new cljs.core.Symbol(null,"fns","fns",(-1469296983),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"arity-fn","arity-fn",(-672310774),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"fns","fns",(-1469296983),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(718),true,(718),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"arity-fn","arity-fn",(-672310774),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"fns","fns",(-1469296983),null)], null)),"Define SQL functions in terms of `arity-fn`.",(cljs.core.truth_(sqlingvo.compiler$macros.defarity)?sqlingvo.compiler$macros.defarity.cljs$lang$test:null)]));

sqlingvo.compiler$macros.defarity.cljs$lang$macro = true;
sqlingvo.compiler$macros.defarity.call(null,sqlingvo.compiler$macros.compile_2_ary,"=","!=","<>","<#>","<->","<",">","<=",">=","&&","<@","@>","/","^","~","~*","like","ilike");
sqlingvo.compiler$macros.defarity.call(null,sqlingvo.compiler$macros.compile_infix,"+","-","*","&","!~","!~*","%","and","or","union","||","overlaps","@@");
sqlingvo.compiler$macros.defarity.call(null,sqlingvo.compiler$macros.compile_complex_args,"partition");
sqlingvo.compiler$macros.defarity.call(null,sqlingvo.compiler$macros.compile_whitespace_args,"substring","trim");
sqlingvo.compiler$macros.defarity.call(null,sqlingvo.compiler$macros.compile_aggregate_expression,"array_agg","avg","bit_and","bit_or","bool_and","bool_or","count","every","json_agg","json_object_agg","jsonb_agg","jsonb_object_agg","max","min","string_agg","sum","xmlagg");
/**
 * Compile `stmt` into a clojure.java.jdbc compatible prepared
 *   statement vector.
 */
(function (){
sqlingvo.compiler$macros.compile_stmt = (function sqlingvo$compiler$macros$compile_stmt(p__452){
var map__455 = p__452;
var map__455__$1 = ((((!((map__455 == null)))?((((map__455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__455.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__455):map__455);
var stmt = map__455__$1;
var db = cljs.core.get.call(null,map__455__$1,new cljs.core.Keyword(null,"db","db",(993250759)));
if(cljs.core.truth_(db)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No db given!"),cljs.core.str("\n"),cljs.core.str("db")].join('')));
}

var placeholder = (function (){var or__20817__auto__ = new cljs.core.Keyword(null,"sql-placeholder","sql-placeholder",(1418724315)).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return sqlingvo.util.sql_placeholder_constant;
}
})().call(null);
var db__$1 = cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sql-next-placeholder","sql-next-placeholder",(1874967211)),placeholder);
return cljs.core.vec.call(null,sqlingvo.compiler$macros.compile_sql.call(null,db__$1,stmt));
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler$macros.compile_stmt;},new cljs.core.Symbol("sqlingvo.compiler$macros","compile-stmt","sqlingvo.compiler$macros/compile-stmt",(1074140976),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler$macros","sqlingvo.compiler$macros",(1527073368),null),new cljs.core.Symbol(null,"compile-stmt","compile-stmt",(1351925797),null),"sqlingvo/compiler.cljc",(19),(1),(760),(760),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"stmt","stmt",(1915627230),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null)], null)], null)], null)),"Compile `stmt` into a clojure.java.jdbc compatible prepared\n  statement vector.",(cljs.core.truth_(sqlingvo.compiler$macros.compile_stmt)?sqlingvo.compiler$macros.compile_stmt.cljs$lang$test:null)])));})()
;
