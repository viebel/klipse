goog.provide("sqlingvo.compiler");
if(typeof sqlingvo.compiler.compile_sql !== 'undefined'){
} else {
/**
 * Compile the `ast` into SQL.
 */
(function (){
sqlingvo.compiler.compile_sql = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"sqlingvo.compiler","compile-sql"),((function (method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__){
return (function (db,ast){
return new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(ast);
});})(method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return sqlingvo.compiler.compile_sql;},new cljs.core.Symbol("sqlingvo.compiler","compile-sql","sqlingvo.compiler/compile-sql",(1910156879),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"compile-sql","compile-sql",(1821375215),null),"sqlingvo/compiler.cljc",(22),(1),(8),(8),cljs.core.List.EMPTY,"Compile the `ast` into SQL.",(cljs.core.truth_(sqlingvo.compiler.compile_sql)?sqlingvo.compiler.compile_sql.cljs$lang$test:null)])));})()
;
}
(function (){
sqlingvo.compiler.to_sql = (function sqlingvo$compiler$to_sql(arg){
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
new cljs.core.Var(function(){return sqlingvo.compiler.to_sql;},new cljs.core.Symbol("sqlingvo.compiler","to-sql","sqlingvo.compiler/to-sql",(-817822588),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"to-sql","to-sql",(-871083804),null),"sqlingvo/compiler.cljc",(13),(1),(12),(12),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"arg","arg",(-106730310),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler.to_sql)?sqlingvo.compiler.to_sql.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.compiler.concat_sql = (function sqlingvo$compiler$concat_sql(var_args){
var args__23658__auto__ = [];
var len__23656__auto___462 = arguments.length;
var i__23657__auto___463 = (0);
while(true){
if((i__23657__auto___463 < len__23656__auto___462)){
args__23658__auto__.push((arguments[i__23657__auto___463]));

var G__464 = (i__23657__auto___463 + (1));
i__23657__auto___463 = G__464;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((0) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((0)),(0),null)):null);
return sqlingvo.compiler.concat_sql.cljs$core$IFn$_invoke$arity$variadic(argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler.concat_sql;},new cljs.core.Symbol("sqlingvo.compiler","concat-sql","sqlingvo.compiler/concat-sql",(-639024551),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"concat-sql","concat-sql",(-585467975),null),"sqlingvo/compiler.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(19),(19),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler.concat_sql)?sqlingvo.compiler.concat_sql.cljs$lang$test:null)])));})()
;

sqlingvo.compiler.concat_sql.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.call(null,(function (stmt,p__458){
var vec__459 = p__458;
var seq__460 = cljs.core.seq.call(null,vec__459);
var first__461 = cljs.core.first.call(null,seq__460);
var seq__460__$1 = cljs.core.next.call(null,seq__460);
var sql = first__461;
var args__$1 = seq__460__$1;
return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.str,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stmt),sql], null)),cljs.core.concat.call(null,cljs.core.rest.call(null,stmt),args__$1));
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,sqlingvo.compiler.to_sql,cljs.core.remove.call(null,cljs.core.nil_QMARK_,args)));
});

sqlingvo.compiler.concat_sql.cljs$lang$maxFixedArity = (0);

sqlingvo.compiler.concat_sql.cljs$lang$applyTo = (function (seq457){
return sqlingvo.compiler.concat_sql.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq457));
});

new cljs.core.Var(function(){return sqlingvo.compiler.concat_sql;},new cljs.core.Symbol("sqlingvo.compiler","concat-sql","sqlingvo.compiler/concat-sql",(-639024551),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"concat-sql","concat-sql",(-585467975),null),"sqlingvo/compiler.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(19),(19),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler.concat_sql)?sqlingvo.compiler.concat_sql.cljs$lang$test:null)]));
(function (){
sqlingvo.compiler.join_sql = (function sqlingvo$compiler$join_sql(separator,args){
var args__$1 = cljs.core.map.call(null,sqlingvo.compiler.to_sql,args);
return cljs.core.cons.call(null,clojure.string.join.call(null,separator,cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.map.call(null,cljs.core.first,args__$1))),cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,cljs.core.rest,args__$1)));
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler.join_sql;},new cljs.core.Symbol("sqlingvo.compiler","join-sql","sqlingvo.compiler/join-sql",(2055682858),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"join-sql","join-sql",(2007652234),null),"sqlingvo/compiler.cljc",(15),(1),(27),(27),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"separator","separator",(11782402),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler.join_sql)?sqlingvo.compiler.join_sql.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.compiler.compile_sql_join = (function sqlingvo$compiler$compile_sql_join(db,separator,args){
return sqlingvo.compiler.join_sql.call(null,separator,cljs.core.map.call(null,(function (p1__27_SHARP_){
return sqlingvo.compiler.compile_sql.call(null,db,p1__27_SHARP_);
}),args));
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler.compile_sql_join;},new cljs.core.Symbol("sqlingvo.compiler","compile-sql-join","sqlingvo.compiler/compile-sql-join",(324753701),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"compile-sql-join","compile-sql-join",(343256453),null),"sqlingvo/compiler.cljc",(23),(1),(32),(32),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"separator","separator",(11782402),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler.compile_sql_join)?sqlingvo.compiler.compile_sql_join.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.compiler.keyword_sql = (function sqlingvo$compiler$keyword_sql(k){
return clojure.string.replace.call(null,clojure.string.upper_case.call(null,cljs.core.name.call(null,k)),/-/," ");
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler.keyword_sql;},new cljs.core.Symbol("sqlingvo.compiler","keyword-sql","sqlingvo.compiler/keyword-sql",(927832284),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"keyword-sql","keyword-sql",(847204220),null),"sqlingvo/compiler.cljc",(18),(1),(35),(35),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler.keyword_sql)?sqlingvo.compiler.keyword_sql.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.compiler.wrap_stmt = (function sqlingvo$compiler$wrap_stmt(stmt){
var vec__468 = stmt;
var seq__469 = cljs.core.seq.call(null,vec__468);
var first__470 = cljs.core.first.call(null,seq__469);
var seq__469__$1 = cljs.core.next.call(null,seq__469);
var sql = first__470;
var args = seq__469__$1;
return cljs.core.cons.call(null,[cljs.core.str("("),cljs.core.str(sql),cljs.core.str(")")].join(''),args);
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler.wrap_stmt;},new cljs.core.Symbol("sqlingvo.compiler","wrap-stmt","sqlingvo.compiler/wrap-stmt",(1033692217),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"wrap-stmt","wrap-stmt",(820654233),null),"sqlingvo/compiler.cljc",(16),(1),(38),(38),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stmt","stmt",(1915627230),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler.wrap_stmt)?sqlingvo.compiler.wrap_stmt.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.compiler.unwrap_stmt = (function sqlingvo$compiler$unwrap_stmt(stmt){
var vec__474 = stmt;
var seq__475 = cljs.core.seq.call(null,vec__474);
var first__476 = cljs.core.first.call(null,seq__475);
var seq__475__$1 = cljs.core.next.call(null,seq__475);
var sql = first__476;
var args = seq__475__$1;
return cljs.core.cons.call(null,clojure.string.replace.call(null,sql,/^\(|\)$/,""),args);
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler.unwrap_stmt;},new cljs.core.Symbol("sqlingvo.compiler","unwrap-stmt","sqlingvo.compiler/unwrap-stmt",(1379379082),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"unwrap-stmt","unwrap-stmt",(1456141162),null),"sqlingvo/compiler.cljc",(18),(1),(42),(42),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stmt","stmt",(1915627230),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler.unwrap_stmt)?sqlingvo.compiler.unwrap_stmt.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.compiler.compile_set_op = (function sqlingvo$compiler$compile_set_op(db,op,p__477){
var map__480 = p__477;
var map__480__$1 = ((((!((map__480 == null)))?((((map__480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__480.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__480):map__480);
var node = map__480__$1;
var all = cljs.core.get.call(null,map__480__$1,new cljs.core.Keyword(null,"all","all",(892129742)));
var stmts = cljs.core.get.call(null,map__480__$1,new cljs.core.Keyword(null,"stmts","stmts",(754560721)));
var separater = [cljs.core.str(" "),cljs.core.str(clojure.string.upper_case.call(null,cljs.core.name.call(null,op))),cljs.core.str(" "),cljs.core.str((cljs.core.truth_(all)?"ALL ":null))].join('');
return sqlingvo.compiler.compile_sql_join.call(null,db,separater,new cljs.core.Keyword(null,"stmts","stmts",(754560721)).cljs$core$IFn$_invoke$arity$1(node));
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler.compile_set_op;},new cljs.core.Symbol("sqlingvo.compiler","compile-set-op","sqlingvo.compiler/compile-set-op",(-1605781782),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"compile-set-op","compile-set-op",(-1350767286),null),"sqlingvo/compiler.cljc",(22),(1),(46),(46),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"op","op",(-242456428),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"node","node",(-2073234571),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stmts","stmts",(-1899875048),null),new cljs.core.Symbol(null,"all","all",(-1762306027),null)], null)], null)], null)),null,(cljs.core.truth_(sqlingvo.compiler.compile_set_op)?sqlingvo.compiler.compile_set_op.cljs$lang$test:null)])));})()
;
/**
 * Returns the next placeholder for an SQL parameter.
 */
(function (){
sqlingvo.compiler.placeholder = (function sqlingvo$compiler$placeholder(db){
return (function (){var or__20817__auto__ = new cljs.core.Keyword(null,"sql-next-placeholder","sql-next-placeholder",(1874967211)).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return sqlingvo.util.sql_placeholder_constant.call(null);
}
})().call(null);
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler.placeholder;},new cljs.core.Symbol("sqlingvo.compiler","placeholder","sqlingvo.compiler/placeholder",(1550130476),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"placeholder","placeholder",(1535658444),null),"sqlingvo/compiler.cljc",(19),(1),(50),(50),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null)], null)),"Returns the next placeholder for an SQL parameter.",(cljs.core.truth_(sqlingvo.compiler.placeholder)?sqlingvo.compiler.placeholder.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.compiler.compile_inline = (function sqlingvo$compiler$compile_inline(db,node){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(node))].join('')], null);
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler.compile_inline;},new cljs.core.Symbol("sqlingvo.compiler","compile-inline","sqlingvo.compiler/compile-inline",(1228918466),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"compile-inline","compile-inline",(-1245043358),null),"sqlingvo/compiler.cljc",(21),(1),(58),(58),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler.compile_inline)?sqlingvo.compiler.compile_inline.cljs$lang$test:null)])));})()
;
if(typeof sqlingvo.compiler.compile_const !== 'undefined'){
} else {
/**
 * Compile a SQL constant into a SQL statement.
 */
(function (){
sqlingvo.compiler.compile_const = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"sqlingvo.compiler","compile-const"),((function (method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__){
return (function (db,node){
return new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(node);
});})(method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return sqlingvo.compiler.compile_const;},new cljs.core.Symbol("sqlingvo.compiler","compile-const","sqlingvo.compiler/compile-const",(1962007784),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"compile-const","compile-const",(1881550984),null),"sqlingvo/compiler.cljc",(24),(1),(61),(61),cljs.core.List.EMPTY,"Compile a SQL constant into a SQL statement.",(cljs.core.truth_(sqlingvo.compiler.compile_const)?sqlingvo.compiler.compile_const.cljs$lang$test:null)])));})()
;
}
cljs.core._add_method.call(null,sqlingvo.compiler.compile_const,new cljs.core.Keyword(null,"number","number",(1570378438)),(function (db,node){
return sqlingvo.compiler.compile_inline.call(null,db,node);
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_const,new cljs.core.Keyword(null,"string","string",(-1989541586)),(function (db,node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(sqlingvo.compiler.placeholder.call(null,db))].join(''),new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(node)], null);
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_const,new cljs.core.Keyword(null,"symbol","symbol",(-1038572696)),(function (db,node){
return sqlingvo.compiler.compile_inline.call(null,db,node);
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_const,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (db,node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(sqlingvo.compiler.placeholder.call(null,db))].join(''),new cljs.core.Keyword(null,"form","form",(-1624062471)).cljs$core$IFn$_invoke$arity$1(node)], null);
}));
(function (){
sqlingvo.compiler.compile_array = (function sqlingvo$compiler$compile_array(db,p__482){
var map__485 = p__482;
var map__485__$1 = ((((!((map__485 == null)))?((((map__485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__485.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__485):map__485);
var children = cljs.core.get.call(null,map__485__$1,new cljs.core.Keyword(null,"children","children",(-940561982)));
return sqlingvo.compiler.concat_sql.call(null,"ARRAY[",sqlingvo.compiler.compile_sql_join.call(null,db,", ",children),"]");
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler.compile_array;},new cljs.core.Symbol("sqlingvo.compiler","compile-array","sqlingvo.compiler/compile-array",(518216328),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"compile-array","compile-array",(555124328),null),"sqlingvo/compiler.cljc",(21),(1),(79),(79),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",(699969545),null)], null)], null)], null)),null,(cljs.core.truth_(sqlingvo.compiler.compile_array)?sqlingvo.compiler.compile_array.cljs$lang$test:null)])));})()
;
if(typeof sqlingvo.compiler.compile_expr !== 'undefined'){
} else {
/**
 * Compile a SQL expression.
 */
(function (){
sqlingvo.compiler.compile_expr = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"sqlingvo.compiler","compile-expr"),((function (method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__){
return (function (db,ast){
return new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(ast);
});})(method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return sqlingvo.compiler.compile_expr;},new cljs.core.Symbol("sqlingvo.compiler","compile-expr","sqlingvo.compiler/compile-expr",(1713896183),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"compile-expr","compile-expr",(2071277399),null),"sqlingvo/compiler.cljc",(23),(1),(82),(82),cljs.core.List.EMPTY,"Compile a SQL expression.",(cljs.core.truth_(sqlingvo.compiler.compile_expr)?sqlingvo.compiler.compile_expr.cljs$lang$test:null)])));})()
;
}
cljs.core._add_method.call(null,sqlingvo.compiler.compile_expr,new cljs.core.Keyword(null,"array","array",(-2080713842)),(function (db,node){
return sqlingvo.compiler.compile_array.call(null,db,node);
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_expr,new cljs.core.Keyword(null,"select","select",(1147833503)),(function (db,expr){
return sqlingvo.compiler.concat_sql.call(null,sqlingvo.compiler.wrap_stmt.call(null,sqlingvo.compiler.compile_sql.call(null,db,expr)));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_expr,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (db,node){
return sqlingvo.compiler.compile_sql.call(null,db,node);
}));
(function (){
sqlingvo.compiler.compile_exprs = (function sqlingvo$compiler$compile_exprs(db,exprs){
return cljs.core.map.call(null,(function (p1__28_SHARP_){
return sqlingvo.compiler.compile_expr.call(null,db,p1__28_SHARP_);
}),exprs);
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler.compile_exprs;},new cljs.core.Symbol("sqlingvo.compiler","compile-exprs","sqlingvo.compiler/compile-exprs",(-762175912),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"compile-exprs","compile-exprs",(-696268296),null),"sqlingvo/compiler.cljc",(20),(1),(95),(95),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler.compile_exprs)?sqlingvo.compiler.compile_exprs.cljs$lang$test:null)])));})()
;
/**
 * Returns true if `node` is a modifier of an aggregate expression, otherwise false.
 */
(function (){
sqlingvo.compiler.aggregate_modifier_QMARK_ = (function sqlingvo$compiler$aggregate_modifier_QMARK_(node){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ALL",null,"DISTINCT",null], null), null).call(null,(function (){var G__488 = node;
var G__488__$1 = (((G__488 == null))?null:new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(G__488));
var G__488__$2 = (((G__488__$1 == null))?null:cljs.core.name.call(null,G__488__$1));
var G__488__$3 = (((G__488__$2 == null))?null:clojure.string.upper_case.call(null,G__488__$2));
return G__488__$3;
})());
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler.aggregate_modifier_QMARK_;},new cljs.core.Symbol("sqlingvo.compiler","aggregate-modifier?","sqlingvo.compiler/aggregate-modifier?",(-1683844383),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"aggregate-modifier?","aggregate-modifier?",(-1634710015),null),"sqlingvo/compiler.cljc",(27),(1),(100),(100),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),"Returns true if `node` is a modifier of an aggregate expression, otherwise false.",(cljs.core.truth_(sqlingvo.compiler.aggregate_modifier_QMARK_)?sqlingvo.compiler.aggregate_modifier_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Returns true if `node` is an ORDER BY expression, otherwise false.
 */
(function (){
sqlingvo.compiler.order_by_QMARK_ = (function sqlingvo$compiler$order_by_QMARK_(node){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"list","list",(765357683)))) && (cljs.core._EQ_.call(null,(function (){var G__492 = node;
var G__492__$1 = (((G__492 == null))?null:new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(G__492));
var G__492__$2 = (((G__492__$1 == null))?null:cljs.core.first.call(null,G__492__$1));
var G__492__$3 = (((G__492__$2 == null))?null:new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(G__492__$2));
var G__492__$4 = (((G__492__$3 == null))?null:cljs.core.name.call(null,G__492__$3));
var G__492__$5 = (((G__492__$4 == null))?null:clojure.string.upper_case.call(null,G__492__$4));
return G__492__$5;
})(),"ORDER-BY"));
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler.order_by_QMARK_;},new cljs.core.Symbol("sqlingvo.compiler","order-by?","sqlingvo.compiler/order-by?",(-360618164),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"order-by?","order-by?",(-430689300),null),"sqlingvo/compiler.cljc",(17),(1),(105),(105),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),"Returns true if `node` is an ORDER BY expression, otherwise false.",(cljs.core.truth_(sqlingvo.compiler.order_by_QMARK_)?sqlingvo.compiler.order_by_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Parse an aggregate expression.
 */
(function (){
sqlingvo.compiler.parse_aggregate_expression = (function sqlingvo$compiler$parse_aggregate_expression(node){
var vec__505 = cljs.core.split_with.call(null,cljs.core.complement.call(null,sqlingvo.compiler.order_by_QMARK_),new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node));
var vec__508 = cljs.core.nth.call(null,vec__505,(0),null);
var seq__509 = cljs.core.seq.call(null,vec__508);
var first__510 = cljs.core.first.call(null,seq__509);
var seq__509__$1 = cljs.core.next.call(null,seq__509);
var f = first__510;
var args = seq__509__$1;
var remaining = cljs.core.nth.call(null,vec__505,(1),null);
var vec__511 = cljs.core.split_with.call(null,sqlingvo.compiler.aggregate_modifier_QMARK_,args);
var vec__514 = cljs.core.nth.call(null,vec__511,(0),null);
var modifier = cljs.core.nth.call(null,vec__514,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__511,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,modifier,args__$1,remaining], null);
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler.parse_aggregate_expression;},new cljs.core.Symbol("sqlingvo.compiler","parse-aggregate-expression","sqlingvo.compiler/parse-aggregate-expression",(1148047906),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"parse-aggregate-expression","parse-aggregate-expression",(1498975810),null),"sqlingvo/compiler.cljc",(34),(1),(111),(111),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),"Parse an aggregate expression.",(cljs.core.truth_(sqlingvo.compiler.parse_aggregate_expression)?sqlingvo.compiler.parse_aggregate_expression.cljs$lang$test:null)])));})()
;
/**
 * Compile an aggregate expression to SQL.
 */
(function (){
sqlingvo.compiler.compile_aggregate_expression = (function sqlingvo$compiler$compile_aggregate_expression(db,node){
var vec__521 = sqlingvo.compiler.parse_aggregate_expression.call(null,node);
var f = cljs.core.nth.call(null,vec__521,(0),null);
var modifier = cljs.core.nth.call(null,vec__521,(1),null);
var args = cljs.core.nth.call(null,vec__521,(2),null);
var remaining = cljs.core.nth.call(null,vec__521,(3),null);
return sqlingvo.compiler.concat_sql.call(null,sqlingvo.util.sql_quote_fn.call(null,db,new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(f)),"(",(cljs.core.truth_(modifier)?sqlingvo.compiler.concat_sql.call(null,(function (){var G__524 = modifier;
var G__524__$1 = (((G__524 == null))?null:new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(G__524));
var G__524__$2 = (((G__524__$1 == null))?null:cljs.core.name.call(null,G__524__$1));
var G__524__$3 = (((G__524__$2 == null))?null:clojure.string.upper_case.call(null,G__524__$2));
return G__524__$3;
})()," "):null),sqlingvo.compiler.join_sql.call(null,", ",sqlingvo.compiler.compile_exprs.call(null,db,args)),(cljs.core.truth_(cljs.core.not_empty.call(null,remaining))?sqlingvo.compiler.concat_sql.call(null," ",sqlingvo.compiler.join_sql.call(null," ",sqlingvo.compiler.compile_exprs.call(null,db,remaining))):null),")");
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler.compile_aggregate_expression;},new cljs.core.Symbol("sqlingvo.compiler","compile-aggregate-expression","sqlingvo.compiler/compile-aggregate-expression",(1989850641),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"compile-aggregate-expression","compile-aggregate-expression",(2037357169),null),"sqlingvo/compiler.cljc",(35),(1),(118),(118),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),"Compile an aggregate expression to SQL.",(cljs.core.truth_(sqlingvo.compiler.compile_aggregate_expression)?sqlingvo.compiler.compile_aggregate_expression.cljs$lang$test:null)])));})()
;
/**
 * Compile a 2-arity SQL function node into a SQL statement.
 */
(function (){
sqlingvo.compiler.compile_2_ary = (function sqlingvo$compiler$compile_2_ary(db,node){
var vec__532 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__533 = cljs.core.seq.call(null,vec__532);
var first__534 = cljs.core.first.call(null,seq__533);
var seq__533__$1 = cljs.core.next.call(null,seq__533);
var name = first__534;
var args = seq__533__$1;
if(((1) < cljs.core.count.call(null,args))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("More than 1 arg needed."),cljs.core.str("\n"),cljs.core.str("(< 1 (count args))")].join('')));
}

return sqlingvo.compiler.join_sql.call(null," AND ",cljs.core.map.call(null,((function (vec__532,seq__533,first__534,seq__533__$1,name,args){
return (function (p__535){
var vec__536 = p__535;
var arg_1 = cljs.core.nth.call(null,vec__536,(0),null);
var arg_2 = cljs.core.nth.call(null,vec__536,(1),null);
return sqlingvo.compiler.concat_sql.call(null,"(",sqlingvo.compiler.compile_expr.call(null,db,arg_1)," ",cljs.core.name.call(null,new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(name))," ",sqlingvo.compiler.compile_expr.call(null,db,arg_2),")");
});})(vec__532,seq__533,first__534,seq__533__$1,name,args))
,cljs.core.partition.call(null,(2),(1),args)));
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler.compile_2_ary;},new cljs.core.Symbol("sqlingvo.compiler","compile-2-ary","sqlingvo.compiler/compile-2-ary",(423350863),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"compile-2-ary","compile-2-ary",(501525935),null),"sqlingvo/compiler.cljc",(20),(1),(130),(130),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),"Compile a 2-arity SQL function node into a SQL statement.",(cljs.core.truth_(sqlingvo.compiler.compile_2_ary)?sqlingvo.compiler.compile_2_ary.cljs$lang$test:null)])));})()
;
/**
 * Compile a SQL infix function node into a SQL statement.
 */
(function (){
sqlingvo.compiler.compile_infix = (function sqlingvo$compiler$compile_infix(db,node){
var vec__542 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__543 = cljs.core.seq.call(null,vec__542);
var first__544 = cljs.core.first.call(null,seq__543);
var seq__543__$1 = cljs.core.next.call(null,seq__543);
var name = first__544;
var args = seq__543__$1;
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args))){
return sqlingvo.compiler.compile_expr.call(null,db,cljs.core.first.call(null,args));
} else {
var args__$1 = sqlingvo.compiler.compile_exprs.call(null,db,args);
return cljs.core.cons.call(null,[cljs.core.str("("),cljs.core.str(clojure.string.join.call(null,[cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str(" ")].join(''),cljs.core.map.call(null,cljs.core.first,args__$1))),cljs.core.str(")")].join(''),cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,cljs.core.rest,args__$1)));

}
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler.compile_infix;},new cljs.core.Symbol("sqlingvo.compiler","compile-infix","sqlingvo.compiler/compile-infix",(681059942),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"compile-infix","compile-infix",(632638150),null),"sqlingvo/compiler.cljc",(20),(1),(142),(142),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),"Compile a SQL infix function node into a SQL statement.",(cljs.core.truth_(sqlingvo.compiler.compile_infix)?sqlingvo.compiler.compile_infix.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.compiler.compile_complex_args = (function sqlingvo$compiler$compile_complex_args(db,node){
var vec__548 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__549 = cljs.core.seq.call(null,vec__548);
var first__550 = cljs.core.first.call(null,seq__549);
var seq__549__$1 = cljs.core.next.call(null,seq__549);
var name = first__550;
var args = seq__549__$1;
return sqlingvo.compiler.concat_sql.call(null,"(",cljs.core.name.call(null,new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(name))," ",sqlingvo.compiler.compile_sql_join.call(null,db," ",args),")");
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler.compile_complex_args;},new cljs.core.Symbol("sqlingvo.compiler","compile-complex-args","sqlingvo.compiler/compile-complex-args",(1371044362),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"compile-complex-args","compile-complex-args",(1418564074),null),"sqlingvo/compiler.cljc",(27),(1),(154),(154),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler.compile_complex_args)?sqlingvo.compiler.compile_complex_args.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.compiler.compile_whitespace_args = (function sqlingvo$compiler$compile_whitespace_args(db,node){
var vec__554 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__555 = cljs.core.seq.call(null,vec__554);
var first__556 = cljs.core.first.call(null,seq__555);
var seq__555__$1 = cljs.core.next.call(null,seq__555);
var name = first__556;
var args = seq__555__$1;
return sqlingvo.compiler.concat_sql.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(name)),"(",sqlingvo.compiler.compile_sql_join.call(null,db," ",args),")");
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler.compile_whitespace_args;},new cljs.core.Symbol("sqlingvo.compiler","compile-whitespace-args","sqlingvo.compiler/compile-whitespace-args",(-308053580),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"compile-whitespace-args","compile-whitespace-args",(-1862491116),null),"sqlingvo/compiler.cljc",(30),(1),(161),(161),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler.compile_whitespace_args)?sqlingvo.compiler.compile_whitespace_args.cljs$lang$test:null)])));})()
;
if(typeof sqlingvo.compiler.compile_fn !== 'undefined'){
} else {
/**
 * Compile a SQL function node into a SQL statement.
 */
(function (){
sqlingvo.compiler.compile_fn = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"sqlingvo.compiler","compile-fn"),((function (method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__){
return (function (db,node){
var G__557 = node;
var G__557__$1 = (((G__557 == null))?null:new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(G__557));
var G__557__$2 = (((G__557__$1 == null))?null:cljs.core.first.call(null,G__557__$1));
var G__557__$3 = (((G__557__$2 == null))?null:new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(G__557__$2));
var G__557__$4 = (((G__557__$3 == null))?null:cljs.core.keyword.call(null,G__557__$3));
return G__557__$4;
});})(method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return sqlingvo.compiler.compile_fn;},new cljs.core.Symbol("sqlingvo.compiler","compile-fn","sqlingvo.compiler/compile-fn",(-1861131040),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"compile-fn","compile-fn",(-1899745280),null),"sqlingvo/compiler.cljc",(21),(1),(168),(168),cljs.core.List.EMPTY,"Compile a SQL function node into a SQL statement.",(cljs.core.truth_(sqlingvo.compiler.compile_fn)?sqlingvo.compiler.compile_fn.cljs$lang$test:null)])));})()
;
}
cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"case","case",(1143702196)),(function (db,node){
var vec__558 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__559 = cljs.core.seq.call(null,vec__558);
var first__560 = cljs.core.first.call(null,seq__559);
var seq__559__$1 = cljs.core.next.call(null,seq__559);
var _ = first__560;
var args = seq__559__$1;
var parts = cljs.core.partition.call(null,(2),(2),null,args);
return sqlingvo.compiler.concat_sql.call(null,cljs.core.apply.call(null,sqlingvo.compiler.concat_sql,"CASE",cljs.core.concat.call(null,(function (){var iter__23197__auto__ = ((function (vec__558,seq__559,first__560,seq__559__$1,_,args,parts){
return (function sqlingvo$compiler$iter__561(s__562){
return (new cljs.core.LazySeq(null,((function (vec__558,seq__559,first__560,seq__559__$1,_,args,parts){
return (function (){
var s__562__$1 = s__562;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__562__$1);
if(temp__19834__auto__){
var s__562__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__562__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__562__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__564 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__563 = (0);
while(true){
if((i__563 < size__23196__auto__)){
var vec__571 = cljs.core._nth.call(null,c__23195__auto__,i__563);
var test = cljs.core.nth.call(null,vec__571,(0),null);
var then = cljs.core.nth.call(null,vec__571,(1),null);
cljs.core.chunk_append.call(null,b__564,sqlingvo.compiler.concat_sql.call(null," WHEN ",sqlingvo.compiler.compile_expr.call(null,db,test)," THEN ",sqlingvo.compiler.compile_expr.call(null,db,then)));

var G__593 = (i__563 + (1));
i__563 = G__593;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__564),sqlingvo$compiler$iter__561.call(null,cljs.core.chunk_rest.call(null,s__562__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__564),null);
}
} else {
var vec__574 = cljs.core.first.call(null,s__562__$2);
var test = cljs.core.nth.call(null,vec__574,(0),null);
var then = cljs.core.nth.call(null,vec__574,(1),null);
return cljs.core.cons.call(null,sqlingvo.compiler.concat_sql.call(null," WHEN ",sqlingvo.compiler.compile_expr.call(null,db,test)," THEN ",sqlingvo.compiler.compile_expr.call(null,db,then)),sqlingvo$compiler$iter__561.call(null,cljs.core.rest.call(null,s__562__$2)));
}
} else {
return null;
}
break;
}
});})(vec__558,seq__559,first__560,seq__559__$1,_,args,parts))
,null,null));
});})(vec__558,seq__559,first__560,seq__559__$1,_,args,parts))
;
return iter__23197__auto__.call(null,cljs.core.filter.call(null,((function (iter__23197__auto__,vec__558,seq__559,first__560,seq__559__$1,_,args,parts){
return (function (p1__29_SHARP_){
return cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,p1__29_SHARP_));
});})(iter__23197__auto__,vec__558,seq__559,first__560,seq__559__$1,_,args,parts))
,parts));
})(),(function (){var iter__23197__auto__ = ((function (vec__558,seq__559,first__560,seq__559__$1,_,args,parts){
return (function sqlingvo$compiler$iter__577(s__578){
return (new cljs.core.LazySeq(null,((function (vec__558,seq__559,first__560,seq__559__$1,_,args,parts){
return (function (){
var s__578__$1 = s__578;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__578__$1);
if(temp__19834__auto__){
var s__578__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__578__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__578__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__580 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__579 = (0);
while(true){
if((i__579 < size__23196__auto__)){
var vec__587 = cljs.core._nth.call(null,c__23195__auto__,i__579);
var else$ = cljs.core.nth.call(null,vec__587,(0),null);
cljs.core.chunk_append.call(null,b__580,sqlingvo.compiler.concat_sql.call(null," ELSE ",sqlingvo.compiler.compile_expr.call(null,db,else$)));

var G__594 = (i__579 + (1));
i__579 = G__594;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__580),sqlingvo$compiler$iter__577.call(null,cljs.core.chunk_rest.call(null,s__578__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__580),null);
}
} else {
var vec__590 = cljs.core.first.call(null,s__578__$2);
var else$ = cljs.core.nth.call(null,vec__590,(0),null);
return cljs.core.cons.call(null,sqlingvo.compiler.concat_sql.call(null," ELSE ",sqlingvo.compiler.compile_expr.call(null,db,else$)),sqlingvo$compiler$iter__577.call(null,cljs.core.rest.call(null,s__578__$2)));
}
} else {
return null;
}
break;
}
});})(vec__558,seq__559,first__560,seq__559__$1,_,args,parts))
,null,null));
});})(vec__558,seq__559,first__560,seq__559__$1,_,args,parts))
;
return iter__23197__auto__.call(null,cljs.core.filter.call(null,((function (iter__23197__auto__,vec__558,seq__559,first__560,seq__559__$1,_,args,parts){
return (function (p1__30_SHARP_){
return cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,p1__30_SHARP_));
});})(iter__23197__auto__,vec__558,seq__559,first__560,seq__559__$1,_,args,parts))
,parts));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" END"], null))));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"cast","cast",(-1761029143)),(function (db,node){
var vec__595 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__596 = cljs.core.seq.call(null,vec__595);
var first__597 = cljs.core.first.call(null,seq__596);
var seq__596__$1 = cljs.core.next.call(null,seq__596);
var _ = first__597;
var vec__598 = seq__596__$1;
var expr = cljs.core.nth.call(null,vec__598,(0),null);
var type = cljs.core.nth.call(null,vec__598,(1),null);
return sqlingvo.compiler.concat_sql.call(null,"CAST(",sqlingvo.compiler.compile_expr.call(null,db,expr)," AS ",sqlingvo.util.sql_type_name.call(null,new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(type)),")");
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"count","count",(2139924085)),(function (db,node){
var vec__601 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__602 = cljs.core.seq.call(null,vec__601);
var first__603 = cljs.core.first.call(null,seq__602);
var seq__602__$1 = cljs.core.next.call(null,seq__602);
var name = first__603;
var args = seq__602__$1;
return sqlingvo.compiler.concat_sql.call(null,"count(",((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"distinct","distinct",(-148347594),null),new cljs.core.Keyword(null,"form","form",(-1624062471)).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args))))?"DISTINCT ":null),sqlingvo.compiler.join_sql.call(null,", ",cljs.core.map.call(null,((function (vec__601,seq__602,first__603,seq__602__$1,name,args){
return (function (p1__31_SHARP_){
return sqlingvo.compiler.compile_expr.call(null,db,p1__31_SHARP_);
});})(vec__601,seq__602,first__603,seq__602__$1,name,args))
,cljs.core.remove.call(null,((function (vec__601,seq__602,first__603,seq__602__$1,name,args){
return (function (p1__32_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"distinct","distinct",(-148347594),null),new cljs.core.Keyword(null,"form","form",(-1624062471)).cljs$core$IFn$_invoke$arity$1(p1__32_SHARP_));
});})(vec__601,seq__602,first__603,seq__602__$1,name,args))
,args))),")");
}));
/**
 * Compile `node` into a comma separated list.
 */
(function (){
sqlingvo.compiler.compile_list = (function sqlingvo$compiler$compile_list(db,node){
return sqlingvo.compiler.concat_sql.call(null,"(",sqlingvo.compiler.compile_sql_join.call(null,db,", ",new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node)),")");
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler.compile_list;},new cljs.core.Symbol("sqlingvo.compiler","compile-list","sqlingvo.compiler/compile-list",(1306979397),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"compile-list","compile-list",(1228091813),null),"sqlingvo/compiler.cljc",(20),(1),(197),(197),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),"Compile `node` into a comma separated list.",(cljs.core.truth_(sqlingvo.compiler.compile_list)?sqlingvo.compiler.compile_list.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"in","in",(-1531184865)),(function (db,node){
var vec__604 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var _ = cljs.core.nth.call(null,vec__604,(0),null);
var member = cljs.core.nth.call(null,vec__604,(1),null);
var expr = cljs.core.nth.call(null,vec__604,(2),null);
return sqlingvo.compiler.concat_sql.call(null,sqlingvo.compiler.compile_expr.call(null,db,member)," IN ",((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(expr),new cljs.core.Keyword(null,"list","list",(765357683))))?((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(expr)))?"(NULL)":sqlingvo.compiler.compile_list.call(null,db,expr)):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(expr),new cljs.core.Keyword(null,"values","values",(372645556))))?sqlingvo.compiler.concat_sql.call(null,"(",sqlingvo.compiler.compile_expr.call(null,db,expr),")"):sqlingvo.compiler.compile_expr.call(null,db,expr)
)));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"exists","exists",(1312597120)),(function (db,node){
var vec__607 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__608 = cljs.core.seq.call(null,vec__607);
var first__609 = cljs.core.first.call(null,seq__608);
var seq__608__$1 = cljs.core.next.call(null,seq__608);
var _ = first__609;
var args = seq__608__$1;
return sqlingvo.compiler.concat_sql.call(null,"(EXISTS ",sqlingvo.compiler.compile_expr.call(null,db,cljs.core.first.call(null,args)),")");
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"not","not",(-595976884)),(function (db,node){
var vec__610 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__611 = cljs.core.seq.call(null,vec__610);
var first__612 = cljs.core.first.call(null,seq__611);
var seq__611__$1 = cljs.core.next.call(null,seq__611);
var _ = first__612;
var args = seq__611__$1;
return sqlingvo.compiler.concat_sql.call(null,"(NOT ",sqlingvo.compiler.compile_expr.call(null,db,cljs.core.first.call(null,args)),")");
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"not-exists","not-exists",(-1099344155)),(function (db,node){
var vec__613 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__614 = cljs.core.seq.call(null,vec__613);
var first__615 = cljs.core.first.call(null,seq__614);
var seq__614__$1 = cljs.core.next.call(null,seq__614);
var _ = first__615;
var args = seq__614__$1;
return sqlingvo.compiler.concat_sql.call(null,"(NOT EXISTS ",sqlingvo.compiler.compile_expr.call(null,db,cljs.core.first.call(null,args)),")");
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"is-null","is-null",(-1997050930)),(function (db,node){
var vec__616 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__617 = cljs.core.seq.call(null,vec__616);
var first__618 = cljs.core.first.call(null,seq__617);
var seq__617__$1 = cljs.core.next.call(null,seq__617);
var _ = first__618;
var args = seq__617__$1;
return sqlingvo.compiler.concat_sql.call(null,"(",sqlingvo.compiler.compile_expr.call(null,db,cljs.core.first.call(null,args))," IS NULL)");
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"is-not-null","is-not-null",(304696033)),(function (db,node){
var vec__619 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__620 = cljs.core.seq.call(null,vec__619);
var first__621 = cljs.core.first.call(null,seq__620);
var seq__620__$1 = cljs.core.next.call(null,seq__620);
var _ = first__621;
var args = seq__620__$1;
return sqlingvo.compiler.concat_sql.call(null,"(",sqlingvo.compiler.compile_expr.call(null,db,cljs.core.first.call(null,args))," IS NOT NULL)");
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"not-like","not-like",(678250642)),(function (db,node){
var vec__622 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__623 = cljs.core.seq.call(null,vec__622);
var first__624 = cljs.core.first.call(null,seq__623);
var seq__623__$1 = cljs.core.next.call(null,seq__623);
var _ = first__624;
var args = seq__623__$1;
var vec__625 = sqlingvo.compiler.compile_exprs.call(null,db,args);
var string = cljs.core.nth.call(null,vec__625,(0),null);
var pattern = cljs.core.nth.call(null,vec__625,(1),null);
return sqlingvo.compiler.concat_sql.call(null,"(",string," NOT LIKE ",pattern,")");
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"range","range",(1639692286)),(function (db,node){
var vec__628 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__629 = cljs.core.seq.call(null,vec__628);
var first__630 = cljs.core.first.call(null,seq__629);
var seq__629__$1 = cljs.core.next.call(null,seq__629);
var _ = first__630;
var args = seq__629__$1;
return sqlingvo.compiler.concat_sql.call(null,"(",sqlingvo.compiler.compile_sql_join.call(null,db,", ",args),")");
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"row","row",(-570139521)),(function (db,node){
var vec__631 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__632 = cljs.core.seq.call(null,vec__631);
var first__633 = cljs.core.first.call(null,seq__632);
var seq__632__$1 = cljs.core.next.call(null,seq__632);
var _ = first__633;
var args = seq__632__$1;
return sqlingvo.compiler.concat_sql.call(null,"ROW(",sqlingvo.compiler.join_sql.call(null,", ",sqlingvo.compiler.compile_exprs.call(null,db,args)),")");
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"over","over",(192553051)),(function (db,node){
var vec__634 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__635 = cljs.core.seq.call(null,vec__634);
var first__636 = cljs.core.first.call(null,seq__635);
var seq__635__$1 = cljs.core.next.call(null,seq__635);
var _ = first__636;
var args = seq__635__$1;
var args__$1 = cljs.core.map.call(null,((function (vec__634,seq__635,first__636,seq__635__$1,_,args){
return (function (p1__33_SHARP_){
return sqlingvo.compiler.compile_sql.call(null,db,p1__33_SHARP_);
});})(vec__634,seq__635,first__636,seq__635__$1,_,args))
,args);
return sqlingvo.compiler.concat_sql.call(null,cljs.core.first.call(null,args__$1)," OVER (",sqlingvo.compiler.join_sql.call(null," ",cljs.core.rest.call(null,args__$1)),")");
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"partition-by","partition-by",(1324497520)),(function (db,node){
var vec__637 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__638 = cljs.core.seq.call(null,vec__637);
var first__639 = cljs.core.first.call(null,seq__638);
var seq__638__$1 = cljs.core.next.call(null,seq__638);
var _ = first__639;
var args = seq__638__$1;
var vec__640 = args;
var seq__641 = cljs.core.seq.call(null,vec__640);
var first__642 = cljs.core.first.call(null,seq__641);
var seq__641__$1 = cljs.core.next.call(null,seq__641);
var expr = first__642;
var more_args = seq__641__$1;
return sqlingvo.compiler.concat_sql.call(null,"PARTITION BY ",((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array","array",(-2080713842)),new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(expr)))?sqlingvo.compiler.compile_sql_join.call(null,db,", ",new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(expr)):sqlingvo.compiler.compile_expr.call(null,db,expr)),((cljs.core.seq.call(null,more_args))?sqlingvo.compiler.concat_sql.call(null," ",sqlingvo.compiler.compile_sql_join.call(null,db," ",more_args)):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"order-by","order-by",(1527318070)),(function (db,node){
var vec__643 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__644 = cljs.core.seq.call(null,vec__643);
var first__645 = cljs.core.first.call(null,seq__644);
var seq__644__$1 = cljs.core.next.call(null,seq__644);
var _ = first__645;
var args = seq__644__$1;
return sqlingvo.compiler.concat_sql.call(null,"ORDER BY ",sqlingvo.compiler.compile_sql_join.call(null,db,", ",args));
}));
(function (){
sqlingvo.compiler.compile_direction = (function sqlingvo$compiler$compile_direction(db,node){
var vec__649 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__650 = cljs.core.seq.call(null,vec__649);
var first__651 = cljs.core.first.call(null,seq__650);
var seq__650__$1 = cljs.core.next.call(null,seq__650);
var name = first__651;
var args = seq__650__$1;
return sqlingvo.compiler.concat_sql.call(null,sqlingvo.compiler.compile_sql.call(null,db,cljs.core.first.call(null,args))," ",clojure.string.upper_case.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(name))));
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler.compile_direction;},new cljs.core.Symbol("sqlingvo.compiler","compile-direction","sqlingvo.compiler/compile-direction",(-1310320756),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"compile-direction","compile-direction",(-1263191508),null),"sqlingvo/compiler.cljc",(25),(1),(266),(266),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler.compile_direction)?sqlingvo.compiler.compile_direction.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"asc","asc",(356854569)),(function (db,node){
return sqlingvo.compiler.compile_direction.call(null,db,node);
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"desc","desc",(2093485764)),(function (db,node){
return sqlingvo.compiler.compile_direction.call(null,db,node);
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (db,node){
var vec__652 = new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node);
var seq__653 = cljs.core.seq.call(null,vec__652);
var first__654 = cljs.core.first.call(null,seq__653);
var seq__653__$1 = cljs.core.next.call(null,seq__653);
var name = first__654;
var args = seq__653__$1;
return sqlingvo.compiler.concat_sql.call(null,sqlingvo.util.sql_quote_fn.call(null,db,new cljs.core.Keyword(null,"val","val",(128701612)).cljs$core$IFn$_invoke$arity$1(name)),"(",sqlingvo.compiler.join_sql.call(null,", ",sqlingvo.compiler.compile_exprs.call(null,db,args)),")");
}));
if(typeof sqlingvo.compiler.compile_from !== 'undefined'){
} else {
(function (){
sqlingvo.compiler.compile_from = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"sqlingvo.compiler","compile-from"),((function (method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__){
return (function (db,ast){
return new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(ast);
});})(method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return sqlingvo.compiler.compile_from;},new cljs.core.Symbol("sqlingvo.compiler","compile-from","sqlingvo.compiler/compile-from",(-1095050293),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"compile-from","compile-from",(-1184352405),null),"sqlingvo/compiler.cljc",(23),(1),(284),(284),cljs.core.List.EMPTY,null,(cljs.core.truth_(sqlingvo.compiler.compile_from)?sqlingvo.compiler.compile_from.cljs$lang$test:null)])));})()
;
}
cljs.core._add_method.call(null,sqlingvo.compiler.compile_from,new cljs.core.Keyword(null,"list","list",(765357683)),(function (db,fn){
return sqlingvo.compiler.compile_sql.call(null,db,fn);
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_from,new cljs.core.Keyword(null,"select","select",(1147833503)),(function (db,node){
var vec__655 = sqlingvo.compiler.compile_sql.call(null,db,node);
var seq__656 = cljs.core.seq.call(null,vec__655);
var first__657 = cljs.core.first.call(null,seq__656);
var seq__656__$1 = cljs.core.next.call(null,seq__656);
var sql = first__657;
var args = seq__656__$1;
return cljs.core.cons.call(null,[cljs.core.str("("),cljs.core.str(sql),cljs.core.str(") AS "),cljs.core.str(sqlingvo.util.sql_quote.call(null,db,new cljs.core.Keyword(null,"as","as",(1148689641)).cljs$core$IFn$_invoke$arity$1(node)))].join(''),args);
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_from,new cljs.core.Keyword(null,"table","table",(-564943036)),(function (db,node){
return sqlingvo.compiler.compile_sql.call(null,db,node);
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_from,new cljs.core.Keyword(null,"alias","alias",(-2039751630)),(function (db,node){
return sqlingvo.compiler.compile_sql.call(null,db,node);
}));
(function (){
sqlingvo.compiler.compile_column = (function sqlingvo$compiler$compile_column(db,column){
if(cljs.core.truth_(new cljs.core.Keyword(null,"length","length",(588987862)).cljs$core$IFn$_invoke$arity$1(column))){
cljs.core.println.call(null,"Column :length is deprecated, use :size instead!");
} else {
}

return sqlingvo.compiler.concat_sql.call(null,sqlingvo.util.sql_quote.call(null,db,new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(column))," ",clojure.string.replace.call(null,clojure.string.upper_case.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(column))),"-"," "),(cljs.core.truth_(new cljs.core.Keyword(null,"array?","array?",(1405427572)).cljs$core$IFn$_invoke$arity$1(column))?"[]":null),(function (){var temp__19520__auto__ = (function (){var or__20817__auto__ = new cljs.core.Keyword(null,"size","size",(1098693007)).cljs$core$IFn$_invoke$arity$1(column);
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
return sqlingvo.compiler.concat_sql.call(null," DEFAULT ",sqlingvo.compiler.compile_sql.call(null,db,default$));
} else {
return null;
}
})());
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler.compile_column;},new cljs.core.Symbol("sqlingvo.compiler","compile-column","sqlingvo.compiler/compile-column",(1680337766),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"compile-column","compile-column",(1623852998),null),"sqlingvo/compiler.cljc",(21),(1),(299),(299),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"column","column",(-576213674),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler.compile_column)?sqlingvo.compiler.compile_column.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"alias","alias",(-2039751630)),(function (db,p__658){
var map__659 = p__658;
var map__659__$1 = ((((!((map__659 == null)))?((((map__659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__659.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__659):map__659);
var columns = cljs.core.get.call(null,map__659__$1,new cljs.core.Keyword(null,"columns","columns",(1998437288)));
var name = cljs.core.get.call(null,map__659__$1,new cljs.core.Keyword(null,"name","name",(1843675177)));
var expr = cljs.core.get.call(null,map__659__$1,new cljs.core.Keyword(null,"expr","expr",(745722291)));
return sqlingvo.compiler.concat_sql.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"select","select",(1147833503)),null,new cljs.core.Keyword(null,"values","values",(372645556)),null], null), null),new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(expr)))?sqlingvo.compiler.wrap_stmt.call(null,sqlingvo.compiler.compile_sql.call(null,db,expr)):sqlingvo.compiler.compile_sql.call(null,db,expr)),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"table","table",(-564943036)),new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(expr)))?" ":" AS "),sqlingvo.util.sql_quote.call(null,db,name),(cljs.core.truth_(cljs.core.not_empty.call(null,columns))?sqlingvo.compiler.concat_sql.call(null," (",sqlingvo.compiler.join_sql.call(null,", ",cljs.core.map.call(null,((function (map__659,map__659__$1,columns,name,expr){
return (function (p1__34_SHARP_){
return sqlingvo.compiler.compile_sql.call(null,db,p1__34_SHARP_);
});})(map__659,map__659__$1,columns,name,expr))
,columns)),")"):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"array","array",(-2080713842)),(function (db,node){
return sqlingvo.compiler.compile_array.call(null,db,node);
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"cascade","cascade",(-314486874)),(function (db,node){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CASCADE"], null);
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"check","check",(1226308904)),(function (db,p__661){
var map__662 = p__661;
var map__662__$1 = ((((!((map__662 == null)))?((((map__662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__662.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__662):map__662);
var expr = cljs.core.get.call(null,map__662__$1,new cljs.core.Keyword(null,"expr","expr",(745722291)));
return sqlingvo.compiler.concat_sql.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECK "], null),sqlingvo.compiler.compile_expr.call(null,db,expr));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"concurrently","concurrently",(-528920250)),(function (db,node){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CONCURRENTLY"], null);
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"condition","condition",(1668437652)),(function (db,p__664){
var map__665 = p__664;
var map__665__$1 = ((((!((map__665 == null)))?((((map__665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__665.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__665):map__665);
var condition = cljs.core.get.call(null,map__665__$1,new cljs.core.Keyword(null,"condition","condition",(1668437652)));
return sqlingvo.compiler.compile_sql.call(null,db,condition);
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"column","column",(2078222095)),(function (db,p__667){
var map__668 = p__667;
var map__668__$1 = ((((!((map__668 == null)))?((((map__668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__668.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__668):map__668);
var direction = cljs.core.get.call(null,map__668__$1,new cljs.core.Keyword(null,"direction","direction",(-633359395)));
var schema = cljs.core.get.call(null,map__668__$1,new cljs.core.Keyword(null,"schema","schema",(-1582001791)));
var table = cljs.core.get.call(null,map__668__$1,new cljs.core.Keyword(null,"table","table",(-564943036)));
var name = cljs.core.get.call(null,map__668__$1,new cljs.core.Keyword(null,"name","name",(1843675177)));
var nulls = cljs.core.get.call(null,map__668__$1,new cljs.core.Keyword(null,"nulls","nulls",(-1240282893)));
return sqlingvo.compiler.concat_sql.call(null,clojure.string.join.call(null,".",cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(schema)?sqlingvo.util.sql_quote.call(null,db,schema):null),(cljs.core.truth_(table)?sqlingvo.util.sql_quote.call(null,db,table):null),(cljs.core.truth_(name)?((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"*","*",(-1294732318)),name))?"*":sqlingvo.util.sql_quote.call(null,db,name)):null)], null))),(cljs.core.truth_(direction)?[cljs.core.str(" "),cljs.core.str(clojure.string.upper_case.call(null,cljs.core.name.call(null,direction)))].join(''):null),(cljs.core.truth_(nulls)?[cljs.core.str(" NULLS "),cljs.core.str(sqlingvo.compiler.keyword_sql.call(null,nulls))].join(''):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"constant","constant",(-379609303)),(function (db,node){
return sqlingvo.compiler.compile_const.call(null,db,node);
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"continue-identity","continue-identity",(1689569409)),(function (db,p__670){
var map__671 = p__670;
var map__671__$1 = ((((!((map__671 == null)))?((((map__671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__671.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__671):map__671);
var op = cljs.core.get.call(null,map__671__$1,new cljs.core.Keyword(null,"op","op",(-1882987955)));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CONTINUE IDENTITY"], null);
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"copy","copy",(-1077617309)),(function (db,p__673){
var map__674 = p__673;
var map__674__$1 = ((((!((map__674 == null)))?((((map__674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__674.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__674):map__674);
var to = cljs.core.get.call(null,map__674__$1,new cljs.core.Keyword(null,"to","to",(192099007)));
var encoding = cljs.core.get.call(null,map__674__$1,new cljs.core.Keyword(null,"encoding","encoding",(1728578272)));
var table = cljs.core.get.call(null,map__674__$1,new cljs.core.Keyword(null,"table","table",(-564943036)));
var columns = cljs.core.get.call(null,map__674__$1,new cljs.core.Keyword(null,"columns","columns",(1998437288)));
var delimiter = cljs.core.get.call(null,map__674__$1,new cljs.core.Keyword(null,"delimiter","delimiter",(-1766618000)));
var from = cljs.core.get.call(null,map__674__$1,new cljs.core.Keyword(null,"from","from",(1815293044)));
return sqlingvo.compiler.concat_sql.call(null,"COPY ",sqlingvo.compiler.compile_sql.call(null,db,table),(cljs.core.truth_(cljs.core.not_empty.call(null,columns))?sqlingvo.compiler.concat_sql.call(null," (",sqlingvo.compiler.compile_sql_join.call(null,db,", ",columns),")"):null)," FROM ",(function (){var from__$1 = cljs.core.first.call(null,from);
if(typeof from__$1 === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["?",from__$1], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"stdin","stdin",(177433088)),from__$1)){
return "STDIN";
} else {
return null;
}
}
})(),(cljs.core.truth_(encoding)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(" ENCODING "),cljs.core.str(sqlingvo.compiler.placeholder.call(null,db))].join(''),encoding], null):null),(cljs.core.truth_(delimiter)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(" DELIMITER "),cljs.core.str(sqlingvo.compiler.placeholder.call(null,db))].join(''),delimiter], null):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"create-table","create-table",(1297148194)),(function (db,p__676){
var map__677 = p__676;
var map__677__$1 = ((((!((map__677 == null)))?((((map__677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__677.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__677):map__677);
var node = map__677__$1;
var temporary = cljs.core.get.call(null,map__677__$1,new cljs.core.Keyword(null,"temporary","temporary",(1635533692)));
var primary_key = cljs.core.get.call(null,map__677__$1,new cljs.core.Keyword(null,"primary-key","primary-key",(1422512605)));
var table = cljs.core.get.call(null,map__677__$1,new cljs.core.Keyword(null,"table","table",(-564943036)));
var like = cljs.core.get.call(null,map__677__$1,new cljs.core.Keyword(null,"like","like",(-914050076)));
var inherits = cljs.core.get.call(null,map__677__$1,new cljs.core.Keyword(null,"inherits","inherits",(-150102489)));
var if_not_exists = cljs.core.get.call(null,map__677__$1,new cljs.core.Keyword(null,"if-not-exists","if-not-exists",(739006925)));
var checks = cljs.core.get.call(null,map__677__$1,new cljs.core.Keyword(null,"checks","checks",(526134637)));
var columns = cljs.core.map.call(null,new cljs.core.Keyword(null,"column","column",(2078222095)).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"columns","columns",(1998437288)).cljs$core$IFn$_invoke$arity$1(node));
return sqlingvo.compiler.concat_sql.call(null,"CREATE",(cljs.core.truth_(temporary)?" TEMPORARY":null)," TABLE",(cljs.core.truth_(if_not_exists)?" IF NOT EXISTS":null),sqlingvo.compiler.concat_sql.call(null," ",sqlingvo.compiler.compile_sql.call(null,db,table))," (",((!(cljs.core.empty_QMARK_.call(null,columns)))?sqlingvo.compiler.join_sql.call(null,", ",cljs.core.map.call(null,((function (columns,map__677,map__677__$1,node,temporary,primary_key,table,like,inherits,if_not_exists,checks){
return (function (p1__35_SHARP_){
return sqlingvo.compiler.compile_column.call(null,db,p1__35_SHARP_);
});})(columns,map__677,map__677__$1,node,temporary,primary_key,table,like,inherits,if_not_exists,checks))
,columns)):(cljs.core.truth_(like)?sqlingvo.compiler.compile_sql.call(null,db,like):null)),(cljs.core.truth_(cljs.core.not_empty.call(null,checks))?sqlingvo.compiler.compile_sql_join.call(null,db,", ",checks):null),(cljs.core.truth_(cljs.core.not_empty.call(null,primary_key))?sqlingvo.compiler.concat_sql.call(null,", PRIMARY KEY(",clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (columns,map__677,map__677__$1,node,temporary,primary_key,table,like,inherits,if_not_exists,checks){
return (function (p1__36_SHARP_){
return sqlingvo.util.sql_quote.call(null,db,p1__36_SHARP_);
});})(columns,map__677,map__677__$1,node,temporary,primary_key,table,like,inherits,if_not_exists,checks))
,primary_key)),")"):null),")",(cljs.core.truth_(inherits)?sqlingvo.compiler.concat_sql.call(null," INHERITS (",sqlingvo.compiler.compile_sql_join.call(null,db,", ",inherits),")"):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"delete","delete",(-1768633620)),(function (db,node){
var map__679 = node;
var map__679__$1 = ((((!((map__679 == null)))?((((map__679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__679.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__679):map__679);
var where = cljs.core.get.call(null,map__679__$1,new cljs.core.Keyword(null,"where","where",(-2044795965)));
var table = cljs.core.get.call(null,map__679__$1,new cljs.core.Keyword(null,"table","table",(-564943036)));
var returning = cljs.core.get.call(null,map__679__$1,new cljs.core.Keyword(null,"returning","returning",(-387623629)));
return sqlingvo.compiler.concat_sql.call(null,"DELETE FROM ",sqlingvo.compiler.compile_sql.call(null,db,table),(cljs.core.truth_(cljs.core.not_empty.call(null,where))?sqlingvo.compiler.concat_sql.call(null," WHERE ",sqlingvo.compiler.compile_sql.call(null,db,where)):null),(cljs.core.truth_(cljs.core.not_empty.call(null,returning))?sqlingvo.compiler.concat_sql.call(null," RETURNING ",sqlingvo.compiler.compile_sql_join.call(null,db,", ",returning)):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"distinct","distinct",(-1788879121)),(function (db,p__681){
var map__682 = p__681;
var map__682__$1 = ((((!((map__682 == null)))?((((map__682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__682):map__682);
var exprs = cljs.core.get.call(null,map__682__$1,new cljs.core.Keyword(null,"exprs","exprs",(1795829094)));
var on = cljs.core.get.call(null,map__682__$1,new cljs.core.Keyword(null,"on","on",(173873944)));
return sqlingvo.compiler.concat_sql.call(null,"DISTINCT ",(cljs.core.truth_(cljs.core.not_empty.call(null,on))?sqlingvo.compiler.concat_sql.call(null,"ON (",sqlingvo.compiler.compile_sql_join.call(null,db,", ",on),") "):null),sqlingvo.compiler.compile_sql_join.call(null,db,", ",exprs));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"drop-table","drop-table",(371446895)),(function (db,p__684){
var map__685 = p__684;
var map__685__$1 = ((((!((map__685 == null)))?((((map__685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__685.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__685):map__685);
var restrict = cljs.core.get.call(null,map__685__$1,new cljs.core.Keyword(null,"restrict","restrict",(-1071101511)));
var cascade = cljs.core.get.call(null,map__685__$1,new cljs.core.Keyword(null,"cascade","cascade",(-314486874)));
var if_exists = cljs.core.get.call(null,map__685__$1,new cljs.core.Keyword(null,"if-exists","if-exists",(-1964107033)));
var tables = cljs.core.get.call(null,map__685__$1,new cljs.core.Keyword(null,"tables","tables",(1334623052)));
return sqlingvo.compiler.join_sql.call(null," ",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DROP TABLE",sqlingvo.compiler.compile_sql.call(null,db,if_exists),sqlingvo.compiler.compile_sql_join.call(null,db,", ",tables),sqlingvo.compiler.compile_sql.call(null,db,cascade),sqlingvo.compiler.compile_sql.call(null,db,restrict)], null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"except","except",(1116893347)),(function (db,node){
return sqlingvo.compiler.compile_set_op.call(null,db,new cljs.core.Keyword(null,"except","except",(1116893347)),node);
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"expr-list","expr-list",(-6297624)),(function (db,p__687){
var map__688 = p__687;
var map__688__$1 = ((((!((map__688 == null)))?((((map__688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__688):map__688);
var children = cljs.core.get.call(null,map__688__$1,new cljs.core.Keyword(null,"children","children",(-940561982)));
var as = cljs.core.get.call(null,map__688__$1,new cljs.core.Keyword(null,"as","as",(1148689641)));
return sqlingvo.compiler.concat_sql.call(null,sqlingvo.compiler.compile_sql_join.call(null,db," ",children));
}));
if(typeof sqlingvo.compiler.compile_explain_option !== 'undefined'){
} else {
/**
 * Compile an EXPLAIN option.
 */
(function (){
sqlingvo.compiler.compile_explain_option = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"sqlingvo.compiler","compile-explain-option"),((function (method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__){
return (function (db,p__690){
var vec__691 = p__690;
var option = cljs.core.nth.call(null,vec__691,(0),null);
var value = cljs.core.nth.call(null,vec__691,(1),null);
return option;
});})(method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return sqlingvo.compiler.compile_explain_option;},new cljs.core.Symbol("sqlingvo.compiler","compile-explain-option","sqlingvo.compiler/compile-explain-option",(-586855452),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"compile-explain-option","compile-explain-option",(-564683196),null),"sqlingvo/compiler.cljc",(33),(1),(437),(437),cljs.core.List.EMPTY,"Compile an EXPLAIN option.",(cljs.core.truth_(sqlingvo.compiler.compile_explain_option)?sqlingvo.compiler.compile_explain_option.cljs$lang$test:null)])));})()
;
}
cljs.core._add_method.call(null,sqlingvo.compiler.compile_explain_option,new cljs.core.Keyword(null,"format","format",(-1306924766)),(function (db,p__694){
var vec__695 = p__694;
var option = cljs.core.nth.call(null,vec__695,(0),null);
var value = cljs.core.nth.call(null,vec__695,(1),null);
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",(-1790561697)),null,new cljs.core.Keyword(null,"xml","xml",(-1170142052)),null,new cljs.core.Keyword(null,"json","json",(1279968570)),null,new cljs.core.Keyword(null,"yaml","yaml",(2065170959)),null], null), null),value)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid EXPLAIN format: "),cljs.core.str(cljs.core.name.call(null,value))].join('')),cljs.core.str("\n"),cljs.core.str("(contains? #{:text :xml :json :yaml} value)")].join('')));
}

return sqlingvo.compiler.concat_sql.call(null,"FORMAT ",clojure.string.upper_case.call(null,cljs.core.name.call(null,value)));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_explain_option,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (db,p__698){
var vec__699 = p__698;
var option = cljs.core.nth.call(null,vec__699,(0),null);
var value = cljs.core.nth.call(null,vec__699,(1),null);
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"analyze","analyze",(-766389120)),null,new cljs.core.Keyword(null,"buffers","buffers",(471409492)),null,new cljs.core.Keyword(null,"costs","costs",(2093295309)),null,new cljs.core.Keyword(null,"timing","timing",(-1849225195)),null,new cljs.core.Keyword(null,"verbose","verbose",(1694226060)),null], null), null),option)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid EXPLAIN option: "),cljs.core.str(cljs.core.name.call(null,option))].join('')),cljs.core.str("\n"),cljs.core.str("(contains? #{:analyze :buffers :costs :timing :verbose} option)")].join('')));
}

return sqlingvo.compiler.concat_sql.call(null,clojure.string.upper_case.call(null,cljs.core.name.call(null,option))," ",clojure.string.upper_case.call(null,[cljs.core.str(value === true)].join('')));
}));
/**
 * Compile the EXPLAIN `options`.
 */
(function (){
sqlingvo.compiler.compile_explain_options = (function sqlingvo$compiler$compile_explain_options(db,options){
if(cljs.core.empty_QMARK_.call(null,options)){
return null;
} else {
return sqlingvo.compiler.concat_sql.call(null,"(",sqlingvo.compiler.join_sql.call(null,", ",cljs.core.map.call(null,(function (p1__37_SHARP_){
return sqlingvo.compiler.compile_explain_option.call(null,db,p1__37_SHARP_);
}),options)),")");
}
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler.compile_explain_options;},new cljs.core.Symbol("sqlingvo.compiler","compile-explain-options","sqlingvo.compiler/compile-explain-options",(-268918659),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"compile-explain-options","compile-explain-options",(-501746659),null),"sqlingvo/compiler.cljc",(30),(1),(453),(453),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"options","options",(1740170016),null)], null)),"Compile the EXPLAIN `options`.",(cljs.core.truth_(sqlingvo.compiler.compile_explain_options)?sqlingvo.compiler.compile_explain_options.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"explain","explain",(484226146)),(function (db,node){
var opts = sqlingvo.compiler.compile_explain_options.call(null,db,new cljs.core.Keyword(null,"opts","opts",(155075701)).cljs$core$IFn$_invoke$arity$1(node));
return sqlingvo.compiler.concat_sql.call(null,"EXPLAIN ",(cljs.core.truth_(opts)?sqlingvo.compiler.concat_sql.call(null,opts," "):null),sqlingvo.compiler.compile_sql.call(null,db,new cljs.core.Keyword(null,"stmt","stmt",(275095703)).cljs$core$IFn$_invoke$arity$1(node)));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"attr","attr",(-604132353)),(function (db,node){
return sqlingvo.compiler.concat_sql.call(null,"(",sqlingvo.compiler.compile_sql.call(null,db,new cljs.core.Keyword(null,"arg","arg",(-1747261837)).cljs$core$IFn$_invoke$arity$1(node)),").",sqlingvo.util.sql_quote.call(null,db,new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(node)));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"from","from",(1815293044)),(function (db,p__702){
var map__703 = p__702;
var map__703__$1 = ((((!((map__703 == null)))?((((map__703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__703.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__703):map__703);
var clause = cljs.core.get.call(null,map__703__$1,new cljs.core.Keyword(null,"clause","clause",(1479668060)));
var joins = cljs.core.get.call(null,map__703__$1,new cljs.core.Keyword(null,"joins","joins",(1033962699)));
return sqlingvo.compiler.concat_sql.call(null,"FROM ",sqlingvo.compiler.join_sql.call(null,", ",cljs.core.map.call(null,((function (map__703,map__703__$1,clause,joins){
return (function (p1__38_SHARP_){
return sqlingvo.compiler.compile_from.call(null,db,p1__38_SHARP_);
});})(map__703,map__703__$1,clause,joins))
,clause)),(cljs.core.truth_(cljs.core.not_empty.call(null,joins))?sqlingvo.compiler.compile_sql_join.call(null,db," ",joins):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"group-by","group-by",(-379139802)),(function (db,p__705){
var map__706 = p__705;
var map__706__$1 = ((((!((map__706 == null)))?((((map__706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706):map__706);
var exprs = cljs.core.get.call(null,map__706__$1,new cljs.core.Keyword(null,"exprs","exprs",(1795829094)));
return sqlingvo.compiler.concat_sql.call(null,"GROUP BY",sqlingvo.compiler.compile_sql.call(null,db,exprs));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"if-exists","if-exists",(-1964107033)),(function (db,p__708){
var map__709 = p__708;
var map__709__$1 = ((((!((map__709 == null)))?((((map__709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__709.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__709):map__709);
var op = cljs.core.get.call(null,map__709__$1,new cljs.core.Keyword(null,"op","op",(-1882987955)));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IF EXISTS"], null);
}));
(function (){
sqlingvo.compiler.compile_value = (function sqlingvo$compiler$compile_value(db,columns,value){
var values = cljs.core.map.call(null,(function (p1__39_SHARP_){
var or__20817__auto__ = cljs.core.get.call(null,value,p1__39_SHARP_);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"nil","nil",(99600501))], null);
}
}),cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",(1843675177)),columns));
var values__$1 = cljs.core.map.call(null,((function (values){
return (function (p1__40_SHARP_){
return sqlingvo.compiler.compile_sql.call(null,db,p1__40_SHARP_);
});})(values))
,values);
return sqlingvo.compiler.concat_sql.call(null,"(",sqlingvo.compiler.join_sql.call(null,", ",values__$1),")");
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler.compile_value;},new cljs.core.Symbol("sqlingvo.compiler","compile-value","sqlingvo.compiler/compile-value",(1201861837),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"compile-value","compile-value",(1157439533),null),"sqlingvo/compiler.cljc",(21),(1),(483),(483),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"columns","columns",(-655998481),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler.compile_value)?sqlingvo.compiler.compile_value.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.compiler.compile_values_maps = (function sqlingvo$compiler$compile_values_maps(db,p__711){
var map__714 = p__711;
var map__714__$1 = ((((!((map__714 == null)))?((((map__714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__714):map__714);
var columns = cljs.core.get.call(null,map__714__$1,new cljs.core.Keyword(null,"columns","columns",(1998437288)));
var values = cljs.core.get.call(null,map__714__$1,new cljs.core.Keyword(null,"values","values",(372645556)));
var values__$1 = cljs.core.map.call(null,((function (map__714,map__714__$1,columns,values){
return (function (p1__41_SHARP_){
return sqlingvo.compiler.compile_value.call(null,db,columns,p1__41_SHARP_);
});})(map__714,map__714__$1,columns,values))
,values);
return sqlingvo.compiler.concat_sql.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["VALUES "], null),sqlingvo.compiler.join_sql.call(null,", ",values__$1));
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler.compile_values_maps;},new cljs.core.Symbol("sqlingvo.compiler","compile-values-maps","sqlingvo.compiler/compile-values-maps",(1891221770),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"compile-values-maps","compile-values-maps",(1279990954),null),"sqlingvo/compiler.cljc",(27),(1),(488),(488),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"columns","columns",(-655998481),null),new cljs.core.Symbol(null,"values","values",(2013177083),null)], null)], null)], null)),null,(cljs.core.truth_(sqlingvo.compiler.compile_values_maps)?sqlingvo.compiler.compile_values_maps.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.compiler.compile_values_exprs = (function sqlingvo$compiler$compile_values_exprs(db,node){
return sqlingvo.compiler.concat_sql.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["VALUES "], null),sqlingvo.compiler.join_sql.call(null,", ",(function (){var iter__23197__auto__ = (function sqlingvo$compiler$compile_values_exprs_$_iter__720(s__721){
return (new cljs.core.LazySeq(null,(function (){
var s__721__$1 = s__721;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__721__$1);
if(temp__19834__auto__){
var s__721__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__721__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__721__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__723 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__722 = (0);
while(true){
if((i__722 < size__23196__auto__)){
var exprs = cljs.core._nth.call(null,c__23195__auto__,i__722);
cljs.core.chunk_append.call(null,b__723,sqlingvo.compiler.concat_sql.call(null,"(",sqlingvo.compiler.join_sql.call(null,", ",cljs.core.map.call(null,((function (i__722,exprs,c__23195__auto__,size__23196__auto__,b__723,s__721__$2,temp__19834__auto__){
return (function (p1__42_SHARP_){
return sqlingvo.compiler.compile_sql.call(null,db,p1__42_SHARP_);
});})(i__722,exprs,c__23195__auto__,size__23196__auto__,b__723,s__721__$2,temp__19834__auto__))
,exprs)),")"));

var G__724 = (i__722 + (1));
i__722 = G__724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__723),sqlingvo$compiler$compile_values_exprs_$_iter__720.call(null,cljs.core.chunk_rest.call(null,s__721__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__723),null);
}
} else {
var exprs = cljs.core.first.call(null,s__721__$2);
return cljs.core.cons.call(null,sqlingvo.compiler.concat_sql.call(null,"(",sqlingvo.compiler.join_sql.call(null,", ",cljs.core.map.call(null,((function (exprs,s__721__$2,temp__19834__auto__){
return (function (p1__42_SHARP_){
return sqlingvo.compiler.compile_sql.call(null,db,p1__42_SHARP_);
});})(exprs,s__721__$2,temp__19834__auto__))
,exprs)),")"),sqlingvo$compiler$compile_values_exprs_$_iter__720.call(null,cljs.core.rest.call(null,s__721__$2)));
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
new cljs.core.Var(function(){return sqlingvo.compiler.compile_values_exprs;},new cljs.core.Symbol("sqlingvo.compiler","compile-values-exprs","sqlingvo.compiler/compile-values-exprs",(941722556),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"compile-values-exprs","compile-values-exprs",(1071439452),null),"sqlingvo/compiler.cljc",(28),(1),(492),(492),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler.compile_values_exprs)?sqlingvo.compiler.compile_values_exprs.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"values","values",(372645556)),(function (db,node){
var G__725 = (((new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(node) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(node).fqn:null);
switch (G__725) {
case "default":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DEFAULT VALUES"], null);

break;
case "exprs":
return sqlingvo.compiler.compile_values_exprs.call(null,db,node);

break;
case "records":
return sqlingvo.compiler.compile_values_maps.call(null,db,node);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(node))].join('')));

}
}));
(function (){
sqlingvo.compiler.compile_row = (function sqlingvo$compiler$compile_row(db,row){
return sqlingvo.compiler.join_sql.call(null,", ",(function (){var iter__23197__auto__ = (function sqlingvo$compiler$compile_row_$_iter__731(s__732){
return (new cljs.core.LazySeq(null,(function (){
var s__732__$1 = s__732;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__732__$1);
if(temp__19834__auto__){
var s__732__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__732__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__732__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__734 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__733 = (0);
while(true){
if((i__733 < size__23196__auto__)){
var column = cljs.core._nth.call(null,c__23195__auto__,i__733);
cljs.core.chunk_append.call(null,b__734,sqlingvo.compiler.concat_sql.call(null,[cljs.core.str(sqlingvo.util.sql_quote.call(null,db,column)),cljs.core.str(" = ")].join(''),sqlingvo.compiler.compile_sql.call(null,db,cljs.core.get.call(null,row,column))));

var G__735 = (i__733 + (1));
i__733 = G__735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__734),sqlingvo$compiler$compile_row_$_iter__731.call(null,cljs.core.chunk_rest.call(null,s__732__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__734),null);
}
} else {
var column = cljs.core.first.call(null,s__732__$2);
return cljs.core.cons.call(null,sqlingvo.compiler.concat_sql.call(null,[cljs.core.str(sqlingvo.util.sql_quote.call(null,db,column)),cljs.core.str(" = ")].join(''),sqlingvo.compiler.compile_sql.call(null,db,cljs.core.get.call(null,row,column))),sqlingvo$compiler$compile_row_$_iter__731.call(null,cljs.core.rest.call(null,s__732__$2)));
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
new cljs.core.Var(function(){return sqlingvo.compiler.compile_row;},new cljs.core.Symbol("sqlingvo.compiler","compile-row","sqlingvo.compiler/compile-row",(-752803136),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"compile-row","compile-row",(-797698208),null),"sqlingvo/compiler.cljc",(18),(1),(508),(508),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"row","row",(1070392006),null)], null)),null,(cljs.core.truth_(sqlingvo.compiler.compile_row)?sqlingvo.compiler.compile_row.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"do-nothing","do-nothing",(1030476282)),(function (db,node){
return " DO NOTHING";
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"do-update","do-update",(187504845)),(function (db,node){
return sqlingvo.compiler.concat_sql.call(null," DO UPDATE SET ",sqlingvo.compiler.compile_row.call(null,db,new cljs.core.Keyword(null,"expr","expr",(745722291)).cljs$core$IFn$_invoke$arity$1(node)));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"on-conflict","on-conflict",(1595391642)),(function (db,node){
return sqlingvo.compiler.concat_sql.call(null," ON CONFLICT ",(function (){var temp__19834__auto__ = new cljs.core.Keyword(null,"target","target",(253001721)).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__19834__auto__)){
var target = temp__19834__auto__;
return sqlingvo.compiler.concat_sql.call(null,"(",sqlingvo.compiler.join_sql.call(null,", ",cljs.core.map.call(null,((function (target,temp__19834__auto__){
return (function (p1__43_SHARP_){
return sqlingvo.compiler.compile_sql.call(null,db,p1__43_SHARP_);
});})(target,temp__19834__auto__))
,target)),")");
} else {
return null;
}
})(),sqlingvo.compiler.compile_sql.call(null,db,new cljs.core.Keyword(null,"do-update","do-update",(187504845)).cljs$core$IFn$_invoke$arity$1(node)),(function (){var temp__19834__auto__ = new cljs.core.Keyword(null,"where","where",(-2044795965)).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__19834__auto__)){
var where = temp__19834__auto__;
return sqlingvo.compiler.concat_sql.call(null," WHERE ",sqlingvo.compiler.compile_sql.call(null,db,where));
} else {
return null;
}
})(),sqlingvo.compiler.compile_sql.call(null,db,new cljs.core.Keyword(null,"do-nothing","do-nothing",(1030476282)).cljs$core$IFn$_invoke$arity$1(node)));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"on-conflict-on-constraint","on-conflict-on-constraint",(385209735)),(function (db,node){
return sqlingvo.compiler.concat_sql.call(null," ON CONFLICT ON CONSTRAINT",(function (){var temp__19834__auto__ = new cljs.core.Keyword(null,"target","target",(253001721)).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__19834__auto__)){
var target = temp__19834__auto__;
return sqlingvo.compiler.concat_sql.call(null," ",sqlingvo.util.sql_quote.call(null,db,target));
} else {
return null;
}
})(),sqlingvo.compiler.compile_sql.call(null,db,new cljs.core.Keyword(null,"do-update","do-update",(187504845)).cljs$core$IFn$_invoke$arity$1(node)),(function (){var temp__19834__auto__ = new cljs.core.Keyword(null,"where","where",(-2044795965)).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__19834__auto__)){
var where = temp__19834__auto__;
return sqlingvo.compiler.concat_sql.call(null," WHERE ",sqlingvo.compiler.compile_sql.call(null,db,where));
} else {
return null;
}
})(),sqlingvo.compiler.compile_sql.call(null,db,new cljs.core.Keyword(null,"do-nothing","do-nothing",(1030476282)).cljs$core$IFn$_invoke$arity$1(node)));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"insert","insert",(1286475395)),(function (db,p__736){
var map__737 = p__736;
var map__737__$1 = ((((!((map__737 == null)))?((((map__737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__737):map__737);
var node = map__737__$1;
var select = cljs.core.get.call(null,map__737__$1,new cljs.core.Keyword(null,"select","select",(1147833503)));
var where = cljs.core.get.call(null,map__737__$1,new cljs.core.Keyword(null,"where","where",(-2044795965)));
var table = cljs.core.get.call(null,map__737__$1,new cljs.core.Keyword(null,"table","table",(-564943036)));
var columns = cljs.core.get.call(null,map__737__$1,new cljs.core.Keyword(null,"columns","columns",(1998437288)));
var rows = cljs.core.get.call(null,map__737__$1,new cljs.core.Keyword(null,"rows","rows",(850049680)));
var returning = cljs.core.get.call(null,map__737__$1,new cljs.core.Keyword(null,"returning","returning",(-387623629)));
var values = cljs.core.get.call(null,map__737__$1,new cljs.core.Keyword(null,"values","values",(372645556)));
var with$ = cljs.core.get.call(null,map__737__$1,new cljs.core.Keyword(null,"with","with",(-1536296876)));
var columns__$1 = (cljs.core.truth_(cljs.core.not_empty.call(null,columns))?columns:new cljs.core.Keyword(null,"columns","columns",(1998437288)).cljs$core$IFn$_invoke$arity$1(values));
return sqlingvo.compiler.concat_sql.call(null,"INSERT INTO ",sqlingvo.compiler.compile_sql.call(null,db,table),(cljs.core.truth_(cljs.core.not_empty.call(null,columns__$1))?sqlingvo.compiler.concat_sql.call(null," (",sqlingvo.compiler.compile_sql_join.call(null,db,", ",columns__$1),")"):null),(cljs.core.truth_(values)?sqlingvo.compiler.concat_sql.call(null," ",sqlingvo.compiler.compile_sql.call(null,db,values)):null),(cljs.core.truth_(select)?sqlingvo.compiler.concat_sql.call(null," ",sqlingvo.compiler.compile_sql.call(null,db,select)):null),(cljs.core.truth_(with$)?sqlingvo.compiler.concat_sql.call(null," ",sqlingvo.compiler.compile_sql.call(null,db,with$)):null),(cljs.core.truth_(cljs.core.not_empty.call(null,where))?sqlingvo.compiler.concat_sql.call(null," WHERE ",sqlingvo.compiler.compile_sql.call(null,db,where)):null),sqlingvo.compiler.compile_sql.call(null,db,new cljs.core.Keyword(null,"on-conflict","on-conflict",(1595391642)).cljs$core$IFn$_invoke$arity$1(node)),sqlingvo.compiler.compile_sql.call(null,db,new cljs.core.Keyword(null,"on-conflict-on-constraint","on-conflict-on-constraint",(385209735)).cljs$core$IFn$_invoke$arity$1(node)),(cljs.core.truth_(cljs.core.not_empty.call(null,returning))?sqlingvo.compiler.concat_sql.call(null," RETURNING ",sqlingvo.compiler.compile_sql_join.call(null,db,", ",returning)):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"intersect","intersect",(-2039792392)),(function (db,node){
return sqlingvo.compiler.compile_set_op.call(null,db,new cljs.core.Keyword(null,"intersect","intersect",(-2039792392)),node);
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"join","join",(-758861890)),(function (db,p__739){
var map__740 = p__739;
var map__740__$1 = ((((!((map__740 == null)))?((((map__740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__740.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__740):map__740);
var how = cljs.core.get.call(null,map__740__$1,new cljs.core.Keyword(null,"how","how",(-35333639)));
var outer = cljs.core.get.call(null,map__740__$1,new cljs.core.Keyword(null,"outer","outer",(-375185956)));
var using = cljs.core.get.call(null,map__740__$1,new cljs.core.Keyword(null,"using","using",(1948623036)));
var type = cljs.core.get.call(null,map__740__$1,new cljs.core.Keyword(null,"type","type",(1174270348)));
var from = cljs.core.get.call(null,map__740__$1,new cljs.core.Keyword(null,"from","from",(1815293044)));
var on = cljs.core.get.call(null,map__740__$1,new cljs.core.Keyword(null,"on","on",(173873944)));
return sqlingvo.compiler.concat_sql.call(null,(function (){var G__742 = type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cross","cross",(194557789)),G__742)){
return "CROSS ";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"inner","inner",(-1383171215)),G__742)){
return "INNER ";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",(-399115937)),G__742)){
return "LEFT ";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",(-452581833)),G__742)){
return "RIGHT ";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"full","full",(436801220)),G__742)){
return "FULL ";
} else {
if(cljs.core._EQ_.call(null,null,G__742)){
return "";
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
}
}
}
}
}
})(),(cljs.core.truth_(outer)?"OUTER ":null),"JOIN ",sqlingvo.compiler.compile_from.call(null,db,from),(cljs.core.truth_(on)?sqlingvo.compiler.concat_sql.call(null," ON ",sqlingvo.compiler.compile_sql.call(null,db,on)):null),(cljs.core.truth_(cljs.core.not_empty.call(null,using))?sqlingvo.compiler.concat_sql.call(null," USING (",sqlingvo.compiler.compile_sql_join.call(null,db,", ",using),")"):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"keyword","keyword",(811389747)),(function (db,p__743){
var map__744 = p__743;
var map__744__$1 = ((((!((map__744 == null)))?((((map__744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__744.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__744):map__744);
var form = cljs.core.get.call(null,map__744__$1,new cljs.core.Keyword(null,"form","form",(-1624062471)));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sqlingvo.util.sql_quote.call(null,db,form)], null);
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"limit","limit",(-1355822363)),(function (db,p__746){
var map__747 = p__746;
var map__747__$1 = ((((!((map__747 == null)))?((((map__747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__747):map__747);
var expr = cljs.core.get.call(null,map__747__$1,new cljs.core.Keyword(null,"expr","expr",(745722291)));
return sqlingvo.compiler.concat_sql.call(null,"LIMIT ",sqlingvo.compiler.compile_expr.call(null,db,expr));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"like","like",(-914050076)),(function (db,p__749){
var map__750 = p__749;
var map__750__$1 = ((((!((map__750 == null)))?((((map__750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__750.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__750):map__750);
var table = cljs.core.get.call(null,map__750__$1,new cljs.core.Keyword(null,"table","table",(-564943036)));
var including = cljs.core.get.call(null,map__750__$1,new cljs.core.Keyword(null,"including","including",(-1349477850)));
var excluding = cljs.core.get.call(null,map__750__$1,new cljs.core.Keyword(null,"excluding","excluding",(98959558)));
return sqlingvo.compiler.concat_sql.call(null,"LIKE ",sqlingvo.compiler.compile_sql.call(null,db,table),(cljs.core.truth_(cljs.core.not_empty.call(null,including))?[cljs.core.str(" INCLUDING "),cljs.core.str(clojure.string.join.call(null," ",cljs.core.map.call(null,sqlingvo.compiler.keyword_sql,including)))].join(''):null),(cljs.core.truth_(cljs.core.not_empty.call(null,excluding))?[cljs.core.str(" EXCLUDING "),cljs.core.str(clojure.string.join.call(null," ",cljs.core.map.call(null,sqlingvo.compiler.keyword_sql,excluding)))].join(''):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"list","list",(765357683)),(function (db,node){
return sqlingvo.compiler.concat_sql.call(null,sqlingvo.compiler.compile_fn.call(null,db,node),(function (){var temp__19834__auto__ = new cljs.core.Keyword(null,"direction","direction",(-633359395)).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__19834__auto__)){
var direction = temp__19834__auto__;
return [cljs.core.str(" "),cljs.core.str(clojure.string.upper_case.call(null,cljs.core.name.call(null,direction)))].join('');
} else {
return null;
}
})());
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"nil","nil",(99600501)),(function (db,_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NULL"], null);
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"offset","offset",(296498311)),(function (db,p__752){
var map__753 = p__752;
var map__753__$1 = ((((!((map__753 == null)))?((((map__753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__753):map__753);
var expr = cljs.core.get.call(null,map__753__$1,new cljs.core.Keyword(null,"expr","expr",(745722291)));
return sqlingvo.compiler.concat_sql.call(null,"OFFSET ",sqlingvo.compiler.compile_expr.call(null,db,expr));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"table","table",(-564943036)),(function (db,p__755){
var map__756 = p__755;
var map__756__$1 = ((((!((map__756 == null)))?((((map__756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__756):map__756);
var schema = cljs.core.get.call(null,map__756__$1,new cljs.core.Keyword(null,"schema","schema",(-1582001791)));
var name = cljs.core.get.call(null,map__756__$1,new cljs.core.Keyword(null,"name","name",(1843675177)));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(clojure.string.join.call(null,".",cljs.core.map.call(null,((function (map__756,map__756__$1,schema,name){
return (function (p1__44_SHARP_){
return sqlingvo.util.sql_quote.call(null,db,p1__44_SHARP_);
});})(map__756,map__756__$1,schema,name))
,cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema,name], null)))))].join('')], null);
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"drop-materialized-view","drop-materialized-view",(-1779110488)),(function (db,node){
var map__758 = node;
var map__758__$1 = ((((!((map__758 == null)))?((((map__758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__758):map__758);
var restrict = cljs.core.get.call(null,map__758__$1,new cljs.core.Keyword(null,"restrict","restrict",(-1071101511)));
var view = cljs.core.get.call(null,map__758__$1,new cljs.core.Keyword(null,"view","view",(1247994814)));
var cascade = cljs.core.get.call(null,map__758__$1,new cljs.core.Keyword(null,"cascade","cascade",(-314486874)));
var if_exists = cljs.core.get.call(null,map__758__$1,new cljs.core.Keyword(null,"if-exists","if-exists",(-1964107033)));
return sqlingvo.compiler.concat_sql.call(null,"DROP MATERIALIZED VIEW ",(cljs.core.truth_(if_exists)?sqlingvo.compiler.concat_sql.call(null,sqlingvo.compiler.compile_sql.call(null,db,if_exists)," "):null),sqlingvo.compiler.compile_sql.call(null,db,view),(cljs.core.truth_(cascade)?sqlingvo.compiler.concat_sql.call(null," ",sqlingvo.compiler.compile_sql.call(null,db,cascade)):null),(cljs.core.truth_(restrict)?sqlingvo.compiler.concat_sql.call(null," ",sqlingvo.compiler.compile_sql.call(null,db,restrict)):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"refresh-materialized-view","refresh-materialized-view",(-121074453)),(function (db,node){
var map__760 = node;
var map__760__$1 = ((((!((map__760 == null)))?((((map__760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__760):map__760);
var view = cljs.core.get.call(null,map__760__$1,new cljs.core.Keyword(null,"view","view",(1247994814)));
var concurrently = cljs.core.get.call(null,map__760__$1,new cljs.core.Keyword(null,"concurrently","concurrently",(-528920250)));
var with_data = cljs.core.get.call(null,map__760__$1,new cljs.core.Keyword(null,"with-data","with-data",(-1106621804)));
return sqlingvo.compiler.concat_sql.call(null,"REFRESH MATERIALIZED VIEW ",(cljs.core.truth_(concurrently)?sqlingvo.compiler.concat_sql.call(null,sqlingvo.compiler.compile_sql.call(null,db,concurrently)," "):null),sqlingvo.compiler.compile_sql.call(null,db,view),(cljs.core.truth_(with_data)?sqlingvo.compiler.concat_sql.call(null," ",sqlingvo.compiler.compile_sql.call(null,db,with_data)):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"restrict","restrict",(-1071101511)),(function (db,p__762){
var map__763 = p__762;
var map__763__$1 = ((((!((map__763 == null)))?((((map__763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__763.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__763):map__763);
var op = cljs.core.get.call(null,map__763__$1,new cljs.core.Keyword(null,"op","op",(-1882987955)));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RESTRICT"], null);
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"restart-identity","restart-identity",(-69684336)),(function (db,p__765){
var map__766 = p__765;
var map__766__$1 = ((((!((map__766 == null)))?((((map__766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__766.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__766):map__766);
var op = cljs.core.get.call(null,map__766__$1,new cljs.core.Keyword(null,"op","op",(-1882987955)));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RESTART IDENTITY"], null);
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"select","select",(1147833503)),(function (db,node){
var map__768 = node;
var map__768__$1 = ((((!((map__768 == null)))?((((map__768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__768.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__768):map__768);
var set = cljs.core.get.call(null,map__768__$1,new cljs.core.Keyword(null,"set","set",(304602554)));
var where = cljs.core.get.call(null,map__768__$1,new cljs.core.Keyword(null,"where","where",(-2044795965)));
var limit = cljs.core.get.call(null,map__768__$1,new cljs.core.Keyword(null,"limit","limit",(-1355822363)));
var group_by = cljs.core.get.call(null,map__768__$1,new cljs.core.Keyword(null,"group-by","group-by",(-379139802)));
var exprs = cljs.core.get.call(null,map__768__$1,new cljs.core.Keyword(null,"exprs","exprs",(1795829094)));
var offset = cljs.core.get.call(null,map__768__$1,new cljs.core.Keyword(null,"offset","offset",(296498311)));
var joins = cljs.core.get.call(null,map__768__$1,new cljs.core.Keyword(null,"joins","joins",(1033962699)));
var distinct = cljs.core.get.call(null,map__768__$1,new cljs.core.Keyword(null,"distinct","distinct",(-1788879121)));
var from = cljs.core.get.call(null,map__768__$1,new cljs.core.Keyword(null,"from","from",(1815293044)));
var order_by = cljs.core.get.call(null,map__768__$1,new cljs.core.Keyword(null,"order-by","order-by",(1527318070)));
return sqlingvo.compiler.concat_sql.call(null,"SELECT ",sqlingvo.compiler.join_sql.call(null,", ",cljs.core.map.call(null,((function (map__768,map__768__$1,set,where,limit,group_by,exprs,offset,joins,distinct,from,order_by){
return (function (p1__45_SHARP_){
return sqlingvo.compiler.compile_expr.call(null,db,p1__45_SHARP_);
});})(map__768,map__768__$1,set,where,limit,group_by,exprs,offset,joins,distinct,from,order_by))
,exprs)),(cljs.core.truth_(distinct)?sqlingvo.compiler.compile_sql.call(null,db,distinct):null),(cljs.core.truth_(cljs.core.not_empty.call(null,from))?sqlingvo.compiler.concat_sql.call(null," FROM ",sqlingvo.compiler.join_sql.call(null,", ",cljs.core.map.call(null,((function (map__768,map__768__$1,set,where,limit,group_by,exprs,offset,joins,distinct,from,order_by){
return (function (p1__46_SHARP_){
return sqlingvo.compiler.compile_from.call(null,db,p1__46_SHARP_);
});})(map__768,map__768__$1,set,where,limit,group_by,exprs,offset,joins,distinct,from,order_by))
,from))):null),(cljs.core.truth_(cljs.core.not_empty.call(null,joins))?sqlingvo.compiler.concat_sql.call(null," ",sqlingvo.compiler.compile_sql_join.call(null,db," ",joins)):null),(cljs.core.truth_(cljs.core.not_empty.call(null,where))?sqlingvo.compiler.concat_sql.call(null," WHERE ",sqlingvo.compiler.compile_sql.call(null,db,where)):null),(cljs.core.truth_(cljs.core.not_empty.call(null,group_by))?sqlingvo.compiler.concat_sql.call(null," GROUP BY ",sqlingvo.compiler.compile_sql_join.call(null,db,", ",group_by)):null),(function (){var temp__19834__auto__ = new cljs.core.Keyword(null,"having","having",(-399543166)).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__19834__auto__)){
var having = temp__19834__auto__;
return sqlingvo.compiler.concat_sql.call(null," HAVING ",sqlingvo.compiler.compile_sql.call(null,db,having));
} else {
return null;
}
})(),(function (){var temp__19834__auto__ = new cljs.core.Keyword(null,"window","window",(724519534)).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__19834__auto__)){
var window = temp__19834__auto__;
return sqlingvo.compiler.concat_sql.call(null," ",sqlingvo.compiler.compile_sql.call(null,db,window));
} else {
return null;
}
})(),(cljs.core.truth_(cljs.core.not_empty.call(null,order_by))?sqlingvo.compiler.concat_sql.call(null," ORDER BY ",sqlingvo.compiler.compile_sql_join.call(null,db,", ",order_by)):null),(function (){var temp__19834__auto__ = (function (){var and__20770__auto__ = limit;
if(cljs.core.truth_(and__20770__auto__)){
return cljs.core.seq.call(null,sqlingvo.compiler.compile_sql.call(null,db,limit));
} else {
return and__20770__auto__;
}
})();
if(cljs.core.truth_(temp__19834__auto__)){
var limit_sql = temp__19834__auto__;
return sqlingvo.compiler.concat_sql.call(null," ",limit_sql);
} else {
return null;
}
})(),(cljs.core.truth_(offset)?sqlingvo.compiler.concat_sql.call(null," ",sqlingvo.compiler.compile_sql.call(null,db,offset)):null),(cljs.core.truth_(cljs.core.not_empty.call(null,set))?sqlingvo.compiler.concat_sql.call(null," ",sqlingvo.compiler.compile_sql_join.call(null,db,", ",set)):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"truncate","truncate",(-1327322939)),(function (db,p__770){
var map__771 = p__770;
var map__771__$1 = ((((!((map__771 == null)))?((((map__771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__771.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__771):map__771);
var restrict = cljs.core.get.call(null,map__771__$1,new cljs.core.Keyword(null,"restrict","restrict",(-1071101511)));
var continue_identity = cljs.core.get.call(null,map__771__$1,new cljs.core.Keyword(null,"continue-identity","continue-identity",(1689569409)));
var cascade = cljs.core.get.call(null,map__771__$1,new cljs.core.Keyword(null,"cascade","cascade",(-314486874)));
var tables = cljs.core.get.call(null,map__771__$1,new cljs.core.Keyword(null,"tables","tables",(1334623052)));
var restart_identity = cljs.core.get.call(null,map__771__$1,new cljs.core.Keyword(null,"restart-identity","restart-identity",(-69684336)));
return sqlingvo.compiler.join_sql.call(null," ",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TRUNCATE TABLE",sqlingvo.compiler.compile_sql_join.call(null,db,", ",tables),sqlingvo.compiler.compile_sql.call(null,db,continue_identity),sqlingvo.compiler.compile_sql.call(null,db,restart_identity),sqlingvo.compiler.compile_sql.call(null,db,cascade),sqlingvo.compiler.compile_sql.call(null,db,restrict)], null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"union","union",(2142937499)),(function (db,node){
return sqlingvo.compiler.compile_set_op.call(null,db,new cljs.core.Keyword(null,"union","union",(2142937499)),node);
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"update","update",(1045576396)),(function (db,node){
var map__773 = node;
var map__773__$1 = ((((!((map__773 == null)))?((((map__773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__773.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__773):map__773);
var row = cljs.core.get.call(null,map__773__$1,new cljs.core.Keyword(null,"row","row",(-570139521)));
var where = cljs.core.get.call(null,map__773__$1,new cljs.core.Keyword(null,"where","where",(-2044795965)));
var table = cljs.core.get.call(null,map__773__$1,new cljs.core.Keyword(null,"table","table",(-564943036)));
var exprs = cljs.core.get.call(null,map__773__$1,new cljs.core.Keyword(null,"exprs","exprs",(1795829094)));
var returning = cljs.core.get.call(null,map__773__$1,new cljs.core.Keyword(null,"returning","returning",(-387623629)));
var from = cljs.core.get.call(null,map__773__$1,new cljs.core.Keyword(null,"from","from",(1815293044)));
return sqlingvo.compiler.concat_sql.call(null,"UPDATE ",sqlingvo.compiler.compile_sql.call(null,db,table)," SET ",(cljs.core.truth_(row)?sqlingvo.compiler.compile_row.call(null,db,row):sqlingvo.compiler.join_sql.call(null,", ",cljs.core.map.call(null,sqlingvo.compiler.unwrap_stmt,sqlingvo.compiler.compile_exprs.call(null,db,exprs)))),(cljs.core.truth_(cljs.core.not_empty.call(null,from))?sqlingvo.compiler.concat_sql.call(null," FROM ",sqlingvo.compiler.join_sql.call(null," ",cljs.core.map.call(null,((function (map__773,map__773__$1,row,where,table,exprs,returning,from){
return (function (p1__47_SHARP_){
return sqlingvo.compiler.compile_from.call(null,db,p1__47_SHARP_);
});})(map__773,map__773__$1,row,where,table,exprs,returning,from))
,from))):null),(cljs.core.truth_(cljs.core.not_empty.call(null,where))?sqlingvo.compiler.concat_sql.call(null," WHERE ",sqlingvo.compiler.compile_sql.call(null,db,where)):null),(cljs.core.truth_(cljs.core.not_empty.call(null,returning))?sqlingvo.compiler.concat_sql.call(null," RETURNING ",sqlingvo.compiler.compile_sql_join.call(null,db,", ",returning)):null));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"with","with",(-1536296876)),(function (db,p__775){
var map__776 = p__775;
var map__776__$1 = ((((!((map__776 == null)))?((((map__776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__776.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__776):map__776);
var node = map__776__$1;
var query = cljs.core.get.call(null,map__776__$1,new cljs.core.Keyword(null,"query","query",(-1288509510)));
var bindings = cljs.core.get.call(null,map__776__$1,new cljs.core.Keyword(null,"bindings","bindings",(1271397192)));
return sqlingvo.compiler.concat_sql.call(null,"WITH ",sqlingvo.compiler.join_sql.call(null,", ",cljs.core.map.call(null,((function (map__776,map__776__$1,node,query,bindings){
return (function (alias,stmt){
return sqlingvo.compiler.concat_sql.call(null,sqlingvo.util.sql_quote.call(null,db,alias)," AS (",sqlingvo.compiler.compile_sql.call(null,db,stmt),")");
});})(map__776,map__776__$1,node,query,bindings))
,cljs.core.map.call(null,cljs.core.first,bindings),cljs.core.map.call(null,cljs.core.second,bindings)))," ",sqlingvo.compiler.compile_sql.call(null,db,query));
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"window","window",(724519534)),(function (db,node){
return sqlingvo.compiler.concat_sql.call(null,"WINDOW ",sqlingvo.compiler.join_sql.call(null,", ",(function (){var iter__23197__auto__ = (function sqlingvo$compiler$iter__778(s__779){
return (new cljs.core.LazySeq(null,(function (){
var s__779__$1 = s__779;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__779__$1);
if(temp__19834__auto__){
var s__779__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__779__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__779__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__781 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__780 = (0);
while(true){
if((i__780 < size__23196__auto__)){
var alias = cljs.core._nth.call(null,c__23195__auto__,i__780);
cljs.core.chunk_append.call(null,b__781,sqlingvo.compiler.concat_sql.call(null,sqlingvo.util.sql_quote.call(null,db,new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(alias))," AS (",sqlingvo.compiler.compile_sql.call(null,db,new cljs.core.Keyword(null,"expr","expr",(745722291)).cljs$core$IFn$_invoke$arity$1(alias)),")"));

var G__782 = (i__780 + (1));
i__780 = G__782;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__781),sqlingvo$compiler$iter__778.call(null,cljs.core.chunk_rest.call(null,s__779__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__781),null);
}
} else {
var alias = cljs.core.first.call(null,s__779__$2);
return cljs.core.cons.call(null,sqlingvo.compiler.concat_sql.call(null,sqlingvo.util.sql_quote.call(null,db,new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(alias))," AS (",sqlingvo.compiler.compile_sql.call(null,db,new cljs.core.Keyword(null,"expr","expr",(745722291)).cljs$core$IFn$_invoke$arity$1(alias)),")"),sqlingvo$compiler$iter__778.call(null,cljs.core.rest.call(null,s__779__$2)));
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
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,new cljs.core.Keyword(null,"with-data","with-data",(-1106621804)),(function (db,node){
if(cljs.core.truth_(new cljs.core.Keyword(null,"data","data",(-232669377)).cljs$core$IFn$_invoke$arity$1(node))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WITH DATA"], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WITH NO DATA"], null);
}
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_sql,null,(function (db,p__783){
var map__784 = p__783;
var map__784__$1 = ((((!((map__784 == null)))?((((map__784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__784.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__784):map__784);
var op = cljs.core.get.call(null,map__784__$1,new cljs.core.Keyword(null,"op","op",(-1882987955)));
return cljs.core.PersistentVector.EMPTY;
}));
/**
 * Define SQL functions in terms of `arity-fn`.
 */
(function (){
sqlingvo.compiler.defarity = (function sqlingvo$compiler$defarity(var_args){
var args__23658__auto__ = [];
var len__23656__auto___794 = arguments.length;
var i__23657__auto___795 = (0);
while(true){
if((i__23657__auto___795 < len__23656__auto___794)){
args__23658__auto__.push((arguments[i__23657__auto___795]));

var G__796 = (i__23657__auto___795 + (1));
i__23657__auto___795 = G__796;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((3) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((3)),(0),null)):null);
return sqlingvo.compiler.defarity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler.defarity;},new cljs.core.Symbol("sqlingvo.compiler","defarity","sqlingvo.compiler/defarity",(505140809),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"defarity","defarity",(287899113),null),"sqlingvo/compiler.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"arity-fn","arity-fn",(-672310774),null),new cljs.core.Symbol(null,"fns","fns",(-1469296983),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"arity-fn","arity-fn",(-672310774),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"fns","fns",(-1469296983),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(718),true,(718),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"arity-fn","arity-fn",(-672310774),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"fns","fns",(-1469296983),null)], null)),"Define SQL functions in terms of `arity-fn`.",(cljs.core.truth_(sqlingvo.compiler.defarity)?sqlingvo.compiler.defarity.cljs$lang$test:null)])));})()
;

sqlingvo.compiler.defarity.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,arity_fn,fns){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var iter__23197__auto__ = (function sqlingvo$compiler$iter__790(s__791){
return (new cljs.core.LazySeq(null,(function (){
var s__791__$1 = s__791;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__791__$1);
if(temp__19834__auto__){
var s__791__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__791__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__791__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__793 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__792 = (0);
while(true){
if((i__792 < size__23196__auto__)){
var fn_SHARP_ = cljs.core._nth.call(null,c__23195__auto__,i__792);
cljs.core.chunk_append.call(null,b__793,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",(-180785162),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("sqlingvo.compiler","compile-fn","sqlingvo.compiler/compile-fn",(-1861131040),null)),(function (){var x__23399__auto__ = fn_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"db","db",(-1661185010),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"node","node",(-2073234571),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = arity_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"db","db",(-1661185010),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"node","node",(-2073234571),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));

var G__797 = (i__792 + (1));
i__792 = G__797;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__793),sqlingvo$compiler$iter__790.call(null,cljs.core.chunk_rest.call(null,s__791__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__793),null);
}
} else {
var fn_SHARP_ = cljs.core.first.call(null,s__791__$2);
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",(-180785162),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("sqlingvo.compiler","compile-fn","sqlingvo.compiler/compile-fn",(-1861131040),null)),(function (){var x__23399__auto__ = fn_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"db","db",(-1661185010),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"node","node",(-2073234571),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = arity_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"db","db",(-1661185010),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"node","node",(-2073234571),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())),sqlingvo$compiler$iter__790.call(null,cljs.core.rest.call(null,s__791__$2)));
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

sqlingvo.compiler.defarity.cljs$lang$maxFixedArity = (3);

sqlingvo.compiler.defarity.cljs$lang$applyTo = (function (seq786){
var G__787 = cljs.core.first.call(null,seq786);
var seq786__$1 = cljs.core.next.call(null,seq786);
var G__788 = cljs.core.first.call(null,seq786__$1);
var seq786__$2 = cljs.core.next.call(null,seq786__$1);
var G__789 = cljs.core.first.call(null,seq786__$2);
var seq786__$3 = cljs.core.next.call(null,seq786__$2);
return sqlingvo.compiler.defarity.cljs$core$IFn$_invoke$arity$variadic(G__787,G__788,G__789,seq786__$3);
});

new cljs.core.Var(function(){return sqlingvo.compiler.defarity;},new cljs.core.Symbol("sqlingvo.compiler","defarity","sqlingvo.compiler/defarity",(505140809),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"defarity","defarity",(287899113),null),"sqlingvo/compiler.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"arity-fn","arity-fn",(-672310774),null),new cljs.core.Symbol(null,"fns","fns",(-1469296983),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"arity-fn","arity-fn",(-672310774),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"fns","fns",(-1469296983),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(718),true,(718),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"arity-fn","arity-fn",(-672310774),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"fns","fns",(-1469296983),null)], null)),"Define SQL functions in terms of `arity-fn`.",(cljs.core.truth_(sqlingvo.compiler.defarity)?sqlingvo.compiler.defarity.cljs$lang$test:null)]));

sqlingvo.compiler.defarity.cljs$lang$macro = true;
cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"=","=",(1152933628)),(function (db,node){
return sqlingvo.compiler.compile_2_ary.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"!=","!=",(-1841737356)),(function (db,node){
return sqlingvo.compiler.compile_2_ary.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"<>","<>",(1280186386)),(function (db,node){
return sqlingvo.compiler.compile_2_ary.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"<#>","<#>",(-930575823)),(function (db,node){
return sqlingvo.compiler.compile_2_ary.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"<->","<->",(1485072401)),(function (db,node){
return sqlingvo.compiler.compile_2_ary.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"<","<",(-646864291)),(function (db,node){
return sqlingvo.compiler.compile_2_ary.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,">",">",(-555517146)),(function (db,node){
return sqlingvo.compiler.compile_2_ary.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"<=","<=",(-395636158)),(function (db,node){
return sqlingvo.compiler.compile_2_ary.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,">=",">=",(-623615505)),(function (db,node){
return sqlingvo.compiler.compile_2_ary.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"&&","&&",(1323453035)),(function (db,node){
return sqlingvo.compiler.compile_2_ary.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"<@","<@",(913586654)),(function (db,node){
return sqlingvo.compiler.compile_2_ary.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"@>","@>",(752832077)),(function (db,node){
return sqlingvo.compiler.compile_2_ary.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword("","","/",(1013904242)),(function (db,node){
return sqlingvo.compiler.compile_2_ary.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"^","^",(-618210931)),(function (db,node){
return sqlingvo.compiler.compile_2_ary.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"~","~",(1980060602)),(function (db,node){
return sqlingvo.compiler.compile_2_ary.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"~*","~*",(1823069765)),(function (db,node){
return sqlingvo.compiler.compile_2_ary.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"like","like",(-914050076)),(function (db,node){
return sqlingvo.compiler.compile_2_ary.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"ilike","ilike",(-153282469)),(function (db,node){
return sqlingvo.compiler.compile_2_ary.call(null,db,node);
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"+","+",(1913524883)),(function (db,node){
return sqlingvo.compiler.compile_infix.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"-","-",(-2112348439)),(function (db,node){
return sqlingvo.compiler.compile_infix.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"*","*",(-1294732318)),(function (db,node){
return sqlingvo.compiler.compile_infix.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"&","&",(509580121)),(function (db,node){
return sqlingvo.compiler.compile_infix.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"!~","!~",(190783159)),(function (db,node){
return sqlingvo.compiler.compile_infix.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"!~*","!~*",(1518895738)),(function (db,node){
return sqlingvo.compiler.compile_infix.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"%","%",(1704198600)),(function (db,node){
return sqlingvo.compiler.compile_infix.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"and","and",(-971899817)),(function (db,node){
return sqlingvo.compiler.compile_infix.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"or","or",(235744169)),(function (db,node){
return sqlingvo.compiler.compile_infix.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"union","union",(2142937499)),(function (db,node){
return sqlingvo.compiler.compile_infix.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"||","||",(-207700737)),(function (db,node){
return sqlingvo.compiler.compile_infix.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"overlaps","overlaps",(1398230580)),(function (db,node){
return sqlingvo.compiler.compile_infix.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"@@","@@",(-1402529547)),(function (db,node){
return sqlingvo.compiler.compile_infix.call(null,db,node);
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"partition","partition",(1174740751)),(function (db,node){
return sqlingvo.compiler.compile_complex_args.call(null,db,node);
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"substring","substring",(1140866276)),(function (db,node){
return sqlingvo.compiler.compile_whitespace_args.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"trim","trim",(774319767)),(function (db,node){
return sqlingvo.compiler.compile_whitespace_args.call(null,db,node);
}));
cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"array_agg","array_agg",(1929983189)),(function (db,node){
return sqlingvo.compiler.compile_aggregate_expression.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"avg","avg",(197406200)),(function (db,node){
return sqlingvo.compiler.compile_aggregate_expression.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"bit_and","bit_and",(1725425413)),(function (db,node){
return sqlingvo.compiler.compile_aggregate_expression.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"bit_or","bit_or",(-1013484927)),(function (db,node){
return sqlingvo.compiler.compile_aggregate_expression.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"bool_and","bool_and",(294162266)),(function (db,node){
return sqlingvo.compiler.compile_aggregate_expression.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"bool_or","bool_or",(-510993902)),(function (db,node){
return sqlingvo.compiler.compile_aggregate_expression.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"count","count",(2139924085)),(function (db,node){
return sqlingvo.compiler.compile_aggregate_expression.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"every","every",(-2060295878)),(function (db,node){
return sqlingvo.compiler.compile_aggregate_expression.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"json_agg","json_agg",(722776070)),(function (db,node){
return sqlingvo.compiler.compile_aggregate_expression.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"json_object_agg","json_object_agg",(1017469860)),(function (db,node){
return sqlingvo.compiler.compile_aggregate_expression.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"jsonb_agg","jsonb_agg",(156463451)),(function (db,node){
return sqlingvo.compiler.compile_aggregate_expression.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"jsonb_object_agg","jsonb_object_agg",(-1317158788)),(function (db,node){
return sqlingvo.compiler.compile_aggregate_expression.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"max","max",(61366548)),(function (db,node){
return sqlingvo.compiler.compile_aggregate_expression.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"min","min",(444991522)),(function (db,node){
return sqlingvo.compiler.compile_aggregate_expression.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"string_agg","string_agg",(168169796)),(function (db,node){
return sqlingvo.compiler.compile_aggregate_expression.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"sum","sum",(136986814)),(function (db,node){
return sqlingvo.compiler.compile_aggregate_expression.call(null,db,node);
}));

cljs.core._add_method.call(null,sqlingvo.compiler.compile_fn,new cljs.core.Keyword(null,"xmlagg","xmlagg",(364152434)),(function (db,node){
return sqlingvo.compiler.compile_aggregate_expression.call(null,db,node);
}));
/**
 * Compile `stmt` into a clojure.java.jdbc compatible prepared
 *   statement vector.
 */
(function (){
sqlingvo.compiler.compile_stmt = (function sqlingvo$compiler$compile_stmt(p__798){
var map__801 = p__798;
var map__801__$1 = ((((!((map__801 == null)))?((((map__801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__801.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__801):map__801);
var stmt = map__801__$1;
var db = cljs.core.get.call(null,map__801__$1,new cljs.core.Keyword(null,"db","db",(993250759)));
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
return cljs.core.vec.call(null,sqlingvo.compiler.compile_sql.call(null,db__$1,stmt));
}); return (
new cljs.core.Var(function(){return sqlingvo.compiler.compile_stmt;},new cljs.core.Symbol("sqlingvo.compiler","compile-stmt","sqlingvo.compiler/compile-stmt",(1337717957),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.compiler","sqlingvo.compiler",(1310919997),null),new cljs.core.Symbol(null,"compile-stmt","compile-stmt",(1351925797),null),"sqlingvo/compiler.cljc",(19),(1),(760),(760),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"stmt","stmt",(1915627230),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null)], null)], null)], null)),"Compile `stmt` into a clojure.java.jdbc compatible prepared\n  statement vector.",(cljs.core.truth_(sqlingvo.compiler.compile_stmt)?sqlingvo.compiler.compile_stmt.cljs$lang$test:null)])));})()
;
