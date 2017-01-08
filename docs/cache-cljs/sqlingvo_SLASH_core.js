goog.provide("sqlingvo.core");
/**
 * Return a new database for `spec`.
 */
(function (){
sqlingvo.core.db = (function sqlingvo$core$db(var_args){
var args__23658__auto__ = [];
var len__23656__auto___884 = arguments.length;
var i__23657__auto___885 = (0);
while(true){
if((i__23657__auto___885 < len__23656__auto___884)){
args__23658__auto__.push((arguments[i__23657__auto___885]));

var G__886 = (i__23657__auto___885 + (1));
i__23657__auto___885 = G__886;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((1) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((1)),(0),null)):null);
return sqlingvo.core.db.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.db;},new cljs.core.Symbol("sqlingvo.core","db","sqlingvo.core/db",(-861735826),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"db","db",(-1661185010),null),"sqlingvo/core.cljc",(9),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(10),(10),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),"Return a new database for `spec`.",(cljs.core.truth_(sqlingvo.core.db)?sqlingvo.core.db.cljs$lang$test:null)])));})()
;

sqlingvo.core.db.cljs$core$IFn$_invoke$arity$variadic = (function (spec,p__880){
var vec__881 = p__880;
var opts = cljs.core.nth.call(null,vec__881,(0),null);
return sqlingvo.db.db.call(null,spec,opts);
});

sqlingvo.core.db.cljs$lang$maxFixedArity = (1);

sqlingvo.core.db.cljs$lang$applyTo = (function (seq878){
var G__879 = cljs.core.first.call(null,seq878);
var seq878__$1 = cljs.core.next.call(null,seq878);
return sqlingvo.core.db.cljs$core$IFn$_invoke$arity$variadic(G__879,seq878__$1);
});

new cljs.core.Var(function(){return sqlingvo.core.db;},new cljs.core.Symbol("sqlingvo.core","db","sqlingvo.core/db",(-861735826),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"db","db",(-1661185010),null),"sqlingvo/core.cljc",(9),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(10),(10),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",(1988051928),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),"Return a new database for `spec`.",(cljs.core.truth_(sqlingvo.core.db)?sqlingvo.core.db.cljs$lang$test:null)]));
/**
 * Return true if `x` is a database, otherwise false.
 */
(function (){
sqlingvo.core.db_QMARK_ = (function sqlingvo$core$db_QMARK_(x){
return (x instanceof sqlingvo.db.Database);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.db_QMARK_;},new cljs.core.Symbol("sqlingvo.core","db?","sqlingvo.core/db?",(1444470924),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"db?","db?",(1715863724),null),"sqlingvo/core.cljc",(10),(1),(15),(15),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Return true if `x` is a database, otherwise false.",(cljs.core.truth_(sqlingvo.core.db_QMARK_)?sqlingvo.core.db_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.core.chain_state = (function sqlingvo$core$chain_state(body){
return sqlingvo.util.m_seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,body));
}); return (
new cljs.core.Var(function(){return sqlingvo.core.chain_state;},new cljs.core.Symbol("sqlingvo.core","chain-state","sqlingvo.core/chain-state",(145662594),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"chain-state","chain-state",(948454050),null),"sqlingvo/core.cljc",(18),(1),(20),(20),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),null,(cljs.core.truth_(sqlingvo.core.chain_state)?sqlingvo.core.chain_state.cljs$lang$test:null)])));})()
;
/**
 * Compose multiple SQL statements.
 */
(function (){
sqlingvo.core.compose = (function sqlingvo$core$compose(var_args){
var args__23658__auto__ = [];
var len__23656__auto___889 = arguments.length;
var i__23657__auto___890 = (0);
while(true){
if((i__23657__auto___890 < len__23656__auto___889)){
args__23658__auto__.push((arguments[i__23657__auto___890]));

var G__891 = (i__23657__auto___890 + (1));
i__23657__auto___890 = G__891;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((1) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((1)),(0),null)):null);
return sqlingvo.core.compose.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.compose;},new cljs.core.Symbol("sqlingvo.core","compose","sqlingvo.core/compose",(337443911),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"compose","compose",(1144740903),null),"sqlingvo/core.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"stmt","stmt",(1915627230),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stmt","stmt",(1915627230),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(23),(23),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stmt","stmt",(1915627230),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Compose multiple SQL statements.",(cljs.core.truth_(sqlingvo.core.compose)?sqlingvo.core.compose.cljs$lang$test:null)])));})()
;

sqlingvo.core.compose.cljs$core$IFn$_invoke$arity$variadic = (function (stmt,body){
return sqlingvo.expr.stmt.call(null,sqlingvo.core.chain_state.call(null,cljs.core.cons.call(null,stmt,body)));
});

sqlingvo.core.compose.cljs$lang$maxFixedArity = (1);

sqlingvo.core.compose.cljs$lang$applyTo = (function (seq887){
var G__888 = cljs.core.first.call(null,seq887);
var seq887__$1 = cljs.core.next.call(null,seq887);
return sqlingvo.core.compose.cljs$core$IFn$_invoke$arity$variadic(G__888,seq887__$1);
});

new cljs.core.Var(function(){return sqlingvo.core.compose;},new cljs.core.Symbol("sqlingvo.core","compose","sqlingvo.core/compose",(337443911),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"compose","compose",(1144740903),null),"sqlingvo/core.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"stmt","stmt",(1915627230),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stmt","stmt",(1915627230),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(23),(23),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stmt","stmt",(1915627230),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Compose multiple SQL statements.",(cljs.core.truth_(sqlingvo.core.compose)?sqlingvo.core.compose.cljs$lang$test:null)]));
/**
 * Returns the abstract syntax tree of `stmt`.
 */
(function (){
sqlingvo.core.ast = (function sqlingvo$core$ast(stmt){
return sqlingvo.expr.ast.call(null,stmt);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.ast;},new cljs.core.Symbol("sqlingvo.core","ast","sqlingvo.core/ast",(-22888845),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"ast","ast",(780197459),null),"sqlingvo/core.cljc",(10),(1),(28),(28),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stmt","stmt",(1915627230),null)], null)),"Returns the abstract syntax tree of `stmt`.",(cljs.core.truth_(sqlingvo.core.ast)?sqlingvo.core.ast.cljs$lang$test:null)])));})()
;
/**
 * Parse `expr` and return an expr with and AS clause using `alias`.
 */
(function (){
sqlingvo.core.as = (function sqlingvo$core$as(var_args){
var args__23658__auto__ = [];
var len__23656__auto___899 = arguments.length;
var i__23657__auto___900 = (0);
while(true){
if((i__23657__auto___900 < len__23656__auto___899)){
args__23658__auto__.push((arguments[i__23657__auto___900]));

var G__901 = (i__23657__auto___900 + (1));
i__23657__auto___900 = G__901;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((2) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((2)),(0),null)):null);
return sqlingvo.core.as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.as;},new cljs.core.Symbol("sqlingvo.core","as","sqlingvo.core/as",(1981907728),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"as","as",(-1505746128),null),"sqlingvo/core.cljc",(9),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"alias","alias",(-399220103),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"columns","columns",(-655998481),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"alias","alias",(-399220103),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"columns","columns",(-655998481),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(33),(33),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"alias","alias",(-399220103),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"columns","columns",(-655998481),null)], null)], null)),"Parse `expr` and return an expr with and AS clause using `alias`.",(cljs.core.truth_(sqlingvo.core.as)?sqlingvo.core.as.cljs$lang$test:null)])));})()
;

sqlingvo.core.as.cljs$core$IFn$_invoke$arity$variadic = (function (expr,alias,p__895){
var vec__896 = p__895;
var columns = cljs.core.nth.call(null,vec__896,(0),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"children","children",(-940561982)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expr","expr",(745722291)),new cljs.core.Keyword(null,"name","name",(1843675177))], null),new cljs.core.Keyword(null,"columns","columns",(1998437288)),cljs.core.mapv.call(null,sqlingvo.expr.parse_column,columns),new cljs.core.Keyword(null,"name","name",(1843675177)),sqlingvo.util.keyword_str.call(null,alias),new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"alias","alias",(-2039751630)),new cljs.core.Keyword(null,"expr","expr",(745722291)),sqlingvo.expr.parse_expr.call(null,expr)], null);
});

sqlingvo.core.as.cljs$lang$maxFixedArity = (2);

sqlingvo.core.as.cljs$lang$applyTo = (function (seq892){
var G__893 = cljs.core.first.call(null,seq892);
var seq892__$1 = cljs.core.next.call(null,seq892);
var G__894 = cljs.core.first.call(null,seq892__$1);
var seq892__$2 = cljs.core.next.call(null,seq892__$1);
return sqlingvo.core.as.cljs$core$IFn$_invoke$arity$variadic(G__893,G__894,seq892__$2);
});

new cljs.core.Var(function(){return sqlingvo.core.as;},new cljs.core.Symbol("sqlingvo.core","as","sqlingvo.core/as",(1981907728),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"as","as",(-1505746128),null),"sqlingvo/core.cljc",(9),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"alias","alias",(-399220103),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"columns","columns",(-655998481),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"alias","alias",(-399220103),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"columns","columns",(-655998481),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(33),(33),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"alias","alias",(-399220103),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"columns","columns",(-655998481),null)], null)], null)),"Parse `expr` and return an expr with and AS clause using `alias`.",(cljs.core.truth_(sqlingvo.core.as)?sqlingvo.core.as.cljs$lang$test:null)]));
/**
 * Parse `expr` and return an ORDER BY expr using ascending order.
 */
(function (){
sqlingvo.core.asc = (function sqlingvo$core$asc(expr){
return cljs.core.assoc.call(null,sqlingvo.expr.parse_expr.call(null,expr),new cljs.core.Keyword(null,"direction","direction",(-633359395)),new cljs.core.Keyword(null,"asc","asc",(356854569)));
}); return (
new cljs.core.Var(function(){return sqlingvo.core.asc;},new cljs.core.Symbol("sqlingvo.core","asc","sqlingvo.core/asc",(1193480528),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"asc","asc",(1997386096),null),"sqlingvo/core.cljc",(10),(1),(42),(42),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null)),"Parse `expr` and return an ORDER BY expr using ascending order.",(cljs.core.truth_(sqlingvo.core.asc)?sqlingvo.core.asc.cljs$lang$test:null)])));})()
;
/**
 * Add a CASCADE clause to an SQL statement.
 */
(function (){
sqlingvo.core.cascade = (function sqlingvo$core$cascade(condition){
return sqlingvo.util.conditional_clause.call(null,new cljs.core.Keyword(null,"cascade","cascade",(-314486874)),condition);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.cascade;},new cljs.core.Symbol("sqlingvo.core","cascade","sqlingvo.core/cascade",(1064023309),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"cascade","cascade",(1326044653),null),"sqlingvo/core.cljc",(14),(1),(46),(46),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condition","condition",(-985998117),null)], null)),"Add a CASCADE clause to an SQL statement.",(cljs.core.truth_(sqlingvo.core.cascade)?sqlingvo.core.cascade.cljs$lang$test:null)])));})()
;
/**
 * Add a CHECK clause to an SQL statement.
 */
(function (){
sqlingvo.core.check = (function sqlingvo$core$check(expr){
return (function (stmt){
var expr__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"check","check",(1226308904)),new cljs.core.Keyword(null,"expr","expr",(745722291)),sqlingvo.expr.parse_expr.call(null,expr)], null);
var stmt__$1 = cljs.core.update_in.call(null,stmt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checks","checks",(526134637))], null),((function (expr__$1){
return (function (p1__60_SHARP_){
return cljs.core.conj.call(null,cljs.core.vec.call(null,p1__60_SHARP_),expr__$1);
});})(expr__$1))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr__$1,stmt__$1], null);
});
}); return (
new cljs.core.Var(function(){return sqlingvo.core.check;},new cljs.core.Symbol("sqlingvo.core","check","sqlingvo.core/check",(-624532657),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"check","check",(-1428126865),null),"sqlingvo/core.cljc",(12),(1),(51),(51),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null)),"Add a CHECK clause to an SQL statement.",(cljs.core.truth_(sqlingvo.core.check)?sqlingvo.core.check.cljs$lang$test:null)])));})()
;
/**
 * Add a column to `stmt`.
 */
(function (){
sqlingvo.core.column = (function sqlingvo$core$column(var_args){
var args__23658__auto__ = [];
var len__23656__auto___908 = arguments.length;
var i__23657__auto___909 = (0);
while(true){
if((i__23657__auto___909 < len__23656__auto___908)){
args__23658__auto__.push((arguments[i__23657__auto___909]));

var G__910 = (i__23657__auto___909 + (1));
i__23657__auto___909 = G__910;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((2) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((2)),(0),null)):null);
return sqlingvo.core.column.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.column;},new cljs.core.Symbol("sqlingvo.core","column","sqlingvo.core/column",(-1920594570),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"column","column",(-576213674),null),"sqlingvo/core.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"options","options",(1740170016),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"options","options",(1740170016),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(60),(60),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"options","options",(1740170016),null)], null)], null)),"Add a column to `stmt`.",(cljs.core.truth_(sqlingvo.core.column)?sqlingvo.core.column.cljs$lang$test:null)])));})()
;

sqlingvo.core.column.cljs$core$IFn$_invoke$arity$variadic = (function (name,type,p__905){
var map__906 = p__905;
var map__906__$1 = ((((!((map__906 == null)))?((((map__906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__906.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__906):map__906);
var options = map__906__$1;
var column = cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"name","name",(1843675177)),name,new cljs.core.Keyword(null,"type","type",(1174270348)),type);
var column__$1 = cljs.core.update_in.call(null,column,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328))], null),((function (column,map__906,map__906__$1,options){
return (function (p1__61_SHARP_){
if(cljs.core.truth_(p1__61_SHARP_)){
return sqlingvo.expr.parse_expr.call(null,p1__61_SHARP_);
} else {
return null;
}
});})(column,map__906,map__906__$1,options))
);
return ((function (column,column__$1,map__906,map__906__$1,options){
return (function (stmt){
var column__$2 = cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,stmt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",(1998437288))], null),((function (column,column__$1,map__906,map__906__$1,options){
return (function (p1__62_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,p1__62_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(column__$1)], null)));
});})(column,column__$1,map__906,map__906__$1,options))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(column__$1)], null),cljs.core.assoc.call(null,column__$1,new cljs.core.Keyword(null,"schema","schema",(-1582001791)),new cljs.core.Keyword(null,"schema","schema",(-1582001791)).cljs$core$IFn$_invoke$arity$1(stmt),new cljs.core.Keyword(null,"table","table",(-564943036)),new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(stmt)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column__$2,column__$2], null);
});
;})(column,column__$1,map__906,map__906__$1,options))
});

sqlingvo.core.column.cljs$lang$maxFixedArity = (2);

sqlingvo.core.column.cljs$lang$applyTo = (function (seq902){
var G__903 = cljs.core.first.call(null,seq902);
var seq902__$1 = cljs.core.next.call(null,seq902);
var G__904 = cljs.core.first.call(null,seq902__$1);
var seq902__$2 = cljs.core.next.call(null,seq902__$1);
return sqlingvo.core.column.cljs$core$IFn$_invoke$arity$variadic(G__903,G__904,seq902__$2);
});

new cljs.core.Var(function(){return sqlingvo.core.column;},new cljs.core.Symbol("sqlingvo.core","column","sqlingvo.core/column",(-1920594570),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"column","column",(-576213674),null),"sqlingvo/core.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"options","options",(1740170016),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"options","options",(1740170016),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(60),(60),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"options","options",(1740170016),null)], null)], null)),"Add a column to `stmt`.",(cljs.core.truth_(sqlingvo.core.column)?sqlingvo.core.column.cljs$lang$test:null)]));
/**
 * Add a CONTINUE IDENTITY clause to an SQL statement.
 */
(function (){
sqlingvo.core.continue_identity = (function sqlingvo$core$continue_identity(condition){
return sqlingvo.util.conditional_clause.call(null,new cljs.core.Keyword(null,"continue-identity","continue-identity",(1689569409)),condition);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.continue_identity;},new cljs.core.Symbol("sqlingvo.core","continue-identity","sqlingvo.core/continue-identity",(912207592),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"continue-identity","continue-identity",(-964866360),null),"sqlingvo/core.cljc",(24),(1),(73),(73),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condition","condition",(-985998117),null)], null)),"Add a CONTINUE IDENTITY clause to an SQL statement.",(cljs.core.truth_(sqlingvo.core.continue_identity)?sqlingvo.core.continue_identity.cljs$lang$test:null)])));})()
;
/**
 * Add a CONCURRENTLY clause to a SQL statement.
 */
(function (){
sqlingvo.core.concurrently = (function sqlingvo$core$concurrently(condition){
return sqlingvo.util.conditional_clause.call(null,new cljs.core.Keyword(null,"concurrently","concurrently",(-528920250)),condition);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.concurrently;},new cljs.core.Symbol("sqlingvo.core","concurrently","sqlingvo.core/concurrently",(1923037165),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"concurrently","concurrently",(1111611277),null),"sqlingvo/core.cljc",(19),(1),(78),(78),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condition","condition",(-985998117),null)], null)),"Add a CONCURRENTLY clause to a SQL statement.",(cljs.core.truth_(sqlingvo.core.concurrently)?sqlingvo.core.concurrently.cljs$lang$test:null)])));})()
;
/**
 * Add a DO CONSTRAINT clause to a SQL statement.
 */
(function (){
sqlingvo.core.do_constraint = (function sqlingvo$core$do_constraint(constraint){
return sqlingvo.util.set_val.call(null,new cljs.core.Keyword(null,"do-constraint","do-constraint",(482439109)),constraint);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.do_constraint;},new cljs.core.Symbol("sqlingvo.core","do-constraint","sqlingvo.core/do-constraint",(-1896933780),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"do-constraint","do-constraint",(2122970636),null),"sqlingvo/core.cljc",(20),(1),(83),(83),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"constraint","constraint",(-929288345),null)], null)),"Add a DO CONSTRAINT clause to a SQL statement.",(cljs.core.truth_(sqlingvo.core.do_constraint)?sqlingvo.core.do_constraint.cljs$lang$test:null)])));})()
;
/**
 * Add a DO NOTHING clause to a SQL statement.
 */
(function (){
sqlingvo.core.do_nothing = (function sqlingvo$core$do_nothing(){
return sqlingvo.util.assoc_op.call(null,new cljs.core.Keyword(null,"do-nothing","do-nothing",(1030476282)));
}); return (
new cljs.core.Var(function(){return sqlingvo.core.do_nothing;},new cljs.core.Symbol("sqlingvo.core","do-nothing","sqlingvo.core/do-nothing",(-1357186975),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"do-nothing","do-nothing",(-1623959487),null),"sqlingvo/core.cljc",(17),(1),(88),(88),cljs.core.list(cljs.core.PersistentVector.EMPTY),"Add a DO NOTHING clause to a SQL statement.",(cljs.core.truth_(sqlingvo.core.do_nothing)?sqlingvo.core.do_nothing.cljs$lang$test:null)])));})()
;
/**
 * Add a DO UPDATE clause to a SQL statement.
 */
(function (){
sqlingvo.core.do_update = (function sqlingvo$core$do_update(expr){
return sqlingvo.util.assoc_op.call(null,new cljs.core.Keyword(null,"do-update","do-update",(187504845)),new cljs.core.Keyword(null,"expr","expr",(745722291)),sqlingvo.expr.parse_map_expr.call(null,expr));
}); return (
new cljs.core.Var(function(){return sqlingvo.core.do_update;},new cljs.core.Symbol("sqlingvo.core","do-update","sqlingvo.core/do-update",(-1139048652),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"do-update","do-update",(1828036372),null),"sqlingvo/core.cljc",(16),(1),(93),(93),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null)),"Add a DO UPDATE clause to a SQL statement.",(cljs.core.truth_(sqlingvo.core.do_update)?sqlingvo.core.do_update.cljs$lang$test:null)])));})()
;
/**
 * Add a WITH [NO] DATA clause to a SQL statement.
 */
(function (){
sqlingvo.core.with_data = (function sqlingvo$core$with_data(data_QMARK_){
return sqlingvo.util.assoc_op.call(null,new cljs.core.Keyword(null,"with-data","with-data",(-1106621804)),new cljs.core.Keyword(null,"data","data",(-232669377)),data_QMARK_);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.with_data;},new cljs.core.Symbol("sqlingvo.core","with-data","sqlingvo.core/with-data",(1345335355),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"with-data","with-data",(533909723),null),"sqlingvo/core.cljc",(16),(1),(98),(98),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data?","data?",(950758186),null)], null)),"Add a WITH [NO] DATA clause to a SQL statement.",(cljs.core.truth_(sqlingvo.core.with_data)?sqlingvo.core.with_data.cljs$lang$test:null)])));})()
;
/**
 * Parse `expr` and return an ORDER BY expr using descending order.
 */
(function (){
sqlingvo.core.desc = (function sqlingvo$core$desc(expr){
return cljs.core.assoc.call(null,sqlingvo.expr.parse_expr.call(null,expr),new cljs.core.Keyword(null,"direction","direction",(-633359395)),new cljs.core.Keyword(null,"desc","desc",(2093485764)));
}); return (
new cljs.core.Var(function(){return sqlingvo.core.desc;},new cljs.core.Symbol("sqlingvo.core","desc","sqlingvo.core/desc",(-1922107925),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"desc","desc",(-560950005),null),"sqlingvo/core.cljc",(11),(1),(103),(103),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null)),"Parse `expr` and return an ORDER BY expr using descending order.",(cljs.core.truth_(sqlingvo.core.desc)?sqlingvo.core.desc.cljs$lang$test:null)])));})()
;
/**
 * Parse `exprs` and return a DISTINCT clause.
 */
(function (){
sqlingvo.core.distinct = (function sqlingvo$core$distinct(var_args){
var args__23658__auto__ = [];
var len__23656__auto___916 = arguments.length;
var i__23657__auto___917 = (0);
while(true){
if((i__23657__auto___917 < len__23656__auto___916)){
args__23658__auto__.push((arguments[i__23657__auto___917]));

var G__918 = (i__23657__auto___917 + (1));
i__23657__auto___917 = G__918;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((1) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((1)),(0),null)):null);
return sqlingvo.core.distinct.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.distinct;},new cljs.core.Symbol("sqlingvo.core","distinct","sqlingvo.core/distinct",(-955906730),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"distinct","distinct",(-148347594),null),"sqlingvo/core.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on","on",(1814405471),null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on","on",(1814405471),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(108),(108),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on","on",(1814405471),null)], null)], null)], null)),"Parse `exprs` and return a DISTINCT clause.",(cljs.core.truth_(sqlingvo.core.distinct)?sqlingvo.core.distinct.cljs$lang$test:null)])));})()
;

sqlingvo.core.distinct.cljs$core$IFn$_invoke$arity$variadic = (function (exprs,p__913){
var map__914 = p__913;
var map__914__$1 = ((((!((map__914 == null)))?((((map__914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__914.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__914):map__914);
var on = cljs.core.get.call(null,map__914__$1,new cljs.core.Keyword(null,"on","on",(173873944)));
return sqlingvo.expr.make_node.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"distinct","distinct",(-1788879121)),new cljs.core.Keyword(null,"children","children",(-940561982)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exprs","exprs",(1795829094)),new cljs.core.Keyword(null,"on","on",(173873944))], null),new cljs.core.Keyword(null,"exprs","exprs",(1795829094)),sqlingvo.expr.parse_exprs.call(null,exprs),new cljs.core.Keyword(null,"on","on",(173873944)),sqlingvo.expr.parse_exprs.call(null,on));
});

sqlingvo.core.distinct.cljs$lang$maxFixedArity = (1);

sqlingvo.core.distinct.cljs$lang$applyTo = (function (seq911){
var G__912 = cljs.core.first.call(null,seq911);
var seq911__$1 = cljs.core.next.call(null,seq911);
return sqlingvo.core.distinct.cljs$core$IFn$_invoke$arity$variadic(G__912,seq911__$1);
});

new cljs.core.Var(function(){return sqlingvo.core.distinct;},new cljs.core.Symbol("sqlingvo.core","distinct","sqlingvo.core/distinct",(-955906730),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"distinct","distinct",(-148347594),null),"sqlingvo/core.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on","on",(1814405471),null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on","on",(1814405471),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(108),(108),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on","on",(1814405471),null)], null)], null)], null)),"Parse `exprs` and return a DISTINCT clause.",(cljs.core.truth_(sqlingvo.core.distinct)?sqlingvo.core.distinct.cljs$lang$test:null)]));
/**
 * Add a DELIMITER clause to an SQL statement.
 */
(function (){
sqlingvo.core.delimiter = (function sqlingvo$core$delimiter(delimiter){
return sqlingvo.util.set_val.call(null,new cljs.core.Keyword(null,"delimiter","delimiter",(-1766618000)),delimiter);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.delimiter;},new cljs.core.Symbol("sqlingvo.core","delimiter","sqlingvo.core/delimiter",(-929123625),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"delimiter","delimiter",(-126086473),null),"sqlingvo/core.cljc",(16),(1),(117),(117),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delimiter","delimiter",(-126086473),null)], null)),"Add a DELIMITER clause to an SQL statement.",(cljs.core.truth_(sqlingvo.core.delimiter)?sqlingvo.core.delimiter.cljs$lang$test:null)])));})()
;
/**
 * Add a ENCODING clause to an SQL statement.
 */
(function (){
sqlingvo.core.encoding = (function sqlingvo$core$encoding(encoding){
return sqlingvo.util.set_val.call(null,new cljs.core.Keyword(null,"encoding","encoding",(1728578272)),encoding);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.encoding;},new cljs.core.Symbol("sqlingvo.core","encoding","sqlingvo.core/encoding",(418851143),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"encoding","encoding",(-925857497),null),"sqlingvo/core.cljc",(15),(1),(122),(122),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"encoding","encoding",(-925857497),null)], null)),"Add a ENCODING clause to an SQL statement.",(cljs.core.truth_(sqlingvo.core.encoding)?sqlingvo.core.encoding.cljs$lang$test:null)])));})()
;
/**
 * Return an EXPLAIN statement for `stmt`. `opts` can be a map with
 *   the following key/value pairs:
 * 
 * - :analyze boolean
 * - :buffers boolean
 * - :costs   boolean
 * - :format  :json, :text, :yaml, :xml
 * - :timing  boolean
 * - :verbose boolean
 * 
 *   Examples:
 * 
 *  (explain db
 *    (select db [:*]
 *      (from :foo)))
 * 
 * With `analyze`:
 * 
 *  (explain db
 *    (select db [:*]
 *      (from :foo))
 *    {:analyze true})
 */
(function (){
sqlingvo.core.explain = (function sqlingvo$core$explain(var_args){
var args__23658__auto__ = [];
var len__23656__auto___926 = arguments.length;
var i__23657__auto___927 = (0);
while(true){
if((i__23657__auto___927 < len__23656__auto___926)){
args__23658__auto__.push((arguments[i__23657__auto___927]));

var G__928 = (i__23657__auto___927 + (1));
i__23657__auto___927 = G__928;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((2) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((2)),(0),null)):null);
return sqlingvo.core.explain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.explain;},new cljs.core.Symbol("sqlingvo.core","explain","sqlingvo.core/explain",(-1899799927),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword("style","indent","style/indent",(-39468490)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"explain","explain",(2124757673),null),"sqlingvo/core.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"stmt","stmt",(1915627230),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"stmt","stmt",(1915627230),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(127),(1),(127),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"stmt","stmt",(1915627230),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),"Return an EXPLAIN statement for `stmt`. `opts` can be a map with\n  the following key/value pairs:\n\n   - :analyze boolean\n   - :buffers boolean\n   - :costs   boolean\n   - :format  :json, :text, :yaml, :xml\n   - :timing  boolean\n   - :verbose boolean\n\n  Examples:\n\n    (explain db\n      (select db [:*]\n        (from :foo)))\n\nWith `analyze`:\n\n    (explain db\n      (select db [:*]\n        (from :foo))\n      {:analyze true})",(cljs.core.truth_(sqlingvo.core.explain)?sqlingvo.core.explain.cljs$lang$test:null)])));})()
;

sqlingvo.core.explain.cljs$core$IFn$_invoke$arity$variadic = (function (db,stmt,p__922){
var vec__923 = p__922;
var opts = cljs.core.nth.call(null,vec__923,(0),null);
if(cljs.core.truth_(sqlingvo.core.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db? db)"));
}

return sqlingvo.expr.stmt.call(null,((function (vec__923,opts){
return (function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_,sqlingvo.expr.make_node.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"explain","explain",(484226146)),new cljs.core.Keyword(null,"db","db",(993250759)),db,new cljs.core.Keyword(null,"children","children",(-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stmt","stmt",(275095703))], null),new cljs.core.Keyword(null,"stmt","stmt",(275095703)),sqlingvo.core.ast.call(null,stmt),new cljs.core.Keyword(null,"opts","opts",(155075701)),opts)], null);
});})(vec__923,opts))
);
});

sqlingvo.core.explain.cljs$lang$maxFixedArity = (2);

sqlingvo.core.explain.cljs$lang$applyTo = (function (seq919){
var G__920 = cljs.core.first.call(null,seq919);
var seq919__$1 = cljs.core.next.call(null,seq919);
var G__921 = cljs.core.first.call(null,seq919__$1);
var seq919__$2 = cljs.core.next.call(null,seq919__$1);
return sqlingvo.core.explain.cljs$core$IFn$_invoke$arity$variadic(G__920,G__921,seq919__$2);
});

new cljs.core.Var(function(){return sqlingvo.core.explain;},new cljs.core.Symbol("sqlingvo.core","explain","sqlingvo.core/explain",(-1899799927),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword("style","indent","style/indent",(-39468490)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"explain","explain",(2124757673),null),"sqlingvo/core.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"stmt","stmt",(1915627230),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"stmt","stmt",(1915627230),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(127),(1),(127),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"stmt","stmt",(1915627230),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),"Return an EXPLAIN statement for `stmt`. `opts` can be a map with\n  the following key/value pairs:\n\n   - :analyze boolean\n   - :buffers boolean\n   - :costs   boolean\n   - :format  :json, :text, :yaml, :xml\n   - :timing  boolean\n   - :verbose boolean\n\n  Examples:\n\n    (explain db\n      (select db [:*]\n        (from :foo)))\n\nWith `analyze`:\n\n    (explain db\n      (select db [:*]\n        (from :foo))\n      {:analyze true})",(cljs.core.truth_(sqlingvo.core.explain)?sqlingvo.core.explain.cljs$lang$test:null)]));
/**
 * Build a COPY statement.
 * 
 *   Examples:
 * 
 *  (copy db :country []
 *    (from :stdin))
 * 
 * Another example:
 * 
 *  (copy db :country []
 *    (from "/usr1/proj/bray/sql/country_data"))
 */
(function (){
sqlingvo.core.copy = (function sqlingvo$core$copy(var_args){
var args__23658__auto__ = [];
var len__23656__auto___933 = arguments.length;
var i__23657__auto___934 = (0);
while(true){
if((i__23657__auto___934 < len__23656__auto___933)){
args__23658__auto__.push((arguments[i__23657__auto___934]));

var G__935 = (i__23657__auto___934 + (1));
i__23657__auto___934 = G__935;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((3) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((3)),(0),null)):null);
return sqlingvo.core.copy.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.copy;},new cljs.core.Symbol("sqlingvo.core","copy","sqlingvo.core/copy",(1907032906),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword("style","indent","style/indent",(-39468490)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"copy","copy",(562914218),null),"sqlingvo/core.cljc",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"columns","columns",(-655998481),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"columns","columns",(-655998481),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(162),(3),(162),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"columns","columns",(-655998481),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Build a COPY statement.\n\n  Examples:\n\n    (copy db :country []\n      (from :stdin))\n\nAnother example:\n\n    (copy db :country []\n      (from \"/usr1/proj/bray/sql/country_data\"))",(cljs.core.truth_(sqlingvo.core.copy)?sqlingvo.core.copy.cljs$lang$test:null)])));})()
;

sqlingvo.core.copy.cljs$core$IFn$_invoke$arity$variadic = (function (db,table,columns,body){
if(cljs.core.truth_(sqlingvo.core.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db? db)"));
}

var table__$1 = sqlingvo.expr.parse_table.call(null,table);
var columns__$1 = cljs.core.map.call(null,sqlingvo.expr.parse_column,columns);
return sqlingvo.expr.stmt.call(null,((function (table__$1,columns__$1){
return (function (_){
return sqlingvo.core.chain_state.call(null,body).call(null,sqlingvo.expr.make_node.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"copy","copy",(-1077617309)),new cljs.core.Keyword(null,"db","db",(993250759)),db,new cljs.core.Keyword(null,"children","children",(-940561982)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",(-564943036)),new cljs.core.Keyword(null,"columns","columns",(1998437288))], null),new cljs.core.Keyword(null,"table","table",(-564943036)),table__$1,new cljs.core.Keyword(null,"columns","columns",(1998437288)),columns__$1));
});})(table__$1,columns__$1))
);
});

sqlingvo.core.copy.cljs$lang$maxFixedArity = (3);

sqlingvo.core.copy.cljs$lang$applyTo = (function (seq929){
var G__930 = cljs.core.first.call(null,seq929);
var seq929__$1 = cljs.core.next.call(null,seq929);
var G__931 = cljs.core.first.call(null,seq929__$1);
var seq929__$2 = cljs.core.next.call(null,seq929__$1);
var G__932 = cljs.core.first.call(null,seq929__$2);
var seq929__$3 = cljs.core.next.call(null,seq929__$2);
return sqlingvo.core.copy.cljs$core$IFn$_invoke$arity$variadic(G__930,G__931,G__932,seq929__$3);
});

new cljs.core.Var(function(){return sqlingvo.core.copy;},new cljs.core.Symbol("sqlingvo.core","copy","sqlingvo.core/copy",(1907032906),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword("style","indent","style/indent",(-39468490)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"copy","copy",(562914218),null),"sqlingvo/core.cljc",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"columns","columns",(-655998481),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"columns","columns",(-655998481),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(162),(3),(162),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"columns","columns",(-655998481),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Build a COPY statement.\n\n  Examples:\n\n    (copy db :country []\n      (from :stdin))\n\nAnother example:\n\n    (copy db :country []\n      (from \"/usr1/proj/bray/sql/country_data\"))",(cljs.core.truth_(sqlingvo.core.copy)?sqlingvo.core.copy.cljs$lang$test:null)]));
/**
 * Build a CREATE TABLE statement.
 */
(function (){
sqlingvo.core.create_table = (function sqlingvo$core$create_table(var_args){
var args__23658__auto__ = [];
var len__23656__auto___939 = arguments.length;
var i__23657__auto___940 = (0);
while(true){
if((i__23657__auto___940 < len__23656__auto___939)){
args__23658__auto__.push((arguments[i__23657__auto___940]));

var G__941 = (i__23657__auto___940 + (1));
i__23657__auto___940 = G__941;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((2) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((2)),(0),null)):null);
return sqlingvo.core.create_table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.create_table;},new cljs.core.Symbol("sqlingvo.core","create-table","sqlingvo.core/create-table",(-1664643319),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword("style","indent","style/indent",(-39468490)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"create-table","create-table",(-1357287575),null),"sqlingvo/core.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(189),(2),(189),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Build a CREATE TABLE statement.",(cljs.core.truth_(sqlingvo.core.create_table)?sqlingvo.core.create_table.cljs$lang$test:null)])));})()
;

sqlingvo.core.create_table.cljs$core$IFn$_invoke$arity$variadic = (function (db,table,body){
if(cljs.core.truth_(sqlingvo.core.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db? db)"));
}

var table__$1 = sqlingvo.expr.parse_table.call(null,table);
return sqlingvo.expr.stmt.call(null,((function (table__$1){
return (function (_){
return sqlingvo.core.chain_state.call(null,body).call(null,sqlingvo.expr.make_node.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"create-table","create-table",(1297148194)),new cljs.core.Keyword(null,"db","db",(993250759)),db,new cljs.core.Keyword(null,"children","children",(-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",(-564943036))], null),new cljs.core.Keyword(null,"table","table",(-564943036)),table__$1));
});})(table__$1))
);
});

sqlingvo.core.create_table.cljs$lang$maxFixedArity = (2);

sqlingvo.core.create_table.cljs$lang$applyTo = (function (seq936){
var G__937 = cljs.core.first.call(null,seq936);
var seq936__$1 = cljs.core.next.call(null,seq936);
var G__938 = cljs.core.first.call(null,seq936__$1);
var seq936__$2 = cljs.core.next.call(null,seq936__$1);
return sqlingvo.core.create_table.cljs$core$IFn$_invoke$arity$variadic(G__937,G__938,seq936__$2);
});

new cljs.core.Var(function(){return sqlingvo.core.create_table;},new cljs.core.Symbol("sqlingvo.core","create-table","sqlingvo.core/create-table",(-1664643319),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword("style","indent","style/indent",(-39468490)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"create-table","create-table",(-1357287575),null),"sqlingvo/core.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(189),(2),(189),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Build a CREATE TABLE statement.",(cljs.core.truth_(sqlingvo.core.create_table)?sqlingvo.core.create_table.cljs$lang$test:null)]));
/**
 * Build a DELETE statement.
 * 
 *   Examples:
 * 
 *  (delete db :continents)
 * 
 * Another example:
 * 
 *  (delete db :continents
 *    (where '(= :id 1)))
 */
(function (){
sqlingvo.core.delete$ = (function sqlingvo$core$delete(var_args){
var args__23658__auto__ = [];
var len__23656__auto___945 = arguments.length;
var i__23657__auto___946 = (0);
while(true){
if((i__23657__auto___946 < len__23656__auto___945)){
args__23658__auto__.push((arguments[i__23657__auto___946]));

var G__947 = (i__23657__auto___946 + (1));
i__23657__auto___946 = G__947;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((2) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((2)),(0),null)):null);
return sqlingvo.core.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.delete$;},new cljs.core.Symbol("sqlingvo.core","delete","sqlingvo.core/delete",(679424339),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword("style","indent","style/indent",(-39468490)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"delete","delete",(-128102093),null),"sqlingvo/core.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(204),(2),(204),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Build a DELETE statement.\n\n  Examples:\n\n    (delete db :continents)\n\nAnother example:\n\n    (delete db :continents\n      (where '(= :id 1)))",(cljs.core.truth_(sqlingvo.core.delete$)?sqlingvo.core.delete$.cljs$lang$test:null)])));})()
;

sqlingvo.core.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (db,table,body){
if(cljs.core.truth_(sqlingvo.core.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db? db)"));
}

var table__$1 = sqlingvo.expr.parse_table.call(null,table);
return sqlingvo.expr.stmt.call(null,((function (table__$1){
return (function (_){
return sqlingvo.core.chain_state.call(null,body).call(null,sqlingvo.expr.make_node.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"delete","delete",(-1768633620)),new cljs.core.Keyword(null,"db","db",(993250759)),db,new cljs.core.Keyword(null,"children","children",(-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",(-564943036))], null),new cljs.core.Keyword(null,"table","table",(-564943036)),table__$1));
});})(table__$1))
);
});

sqlingvo.core.delete$.cljs$lang$maxFixedArity = (2);

sqlingvo.core.delete$.cljs$lang$applyTo = (function (seq942){
var G__943 = cljs.core.first.call(null,seq942);
var seq942__$1 = cljs.core.next.call(null,seq942);
var G__944 = cljs.core.first.call(null,seq942__$1);
var seq942__$2 = cljs.core.next.call(null,seq942__$1);
return sqlingvo.core.delete$.cljs$core$IFn$_invoke$arity$variadic(G__943,G__944,seq942__$2);
});

new cljs.core.Var(function(){return sqlingvo.core.delete$;},new cljs.core.Symbol("sqlingvo.core","delete","sqlingvo.core/delete",(679424339),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword("style","indent","style/indent",(-39468490)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"delete","delete",(-128102093),null),"sqlingvo/core.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(204),(2),(204),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Build a DELETE statement.\n\n  Examples:\n\n    (delete db :continents)\n\nAnother example:\n\n    (delete db :continents\n      (where '(= :id 1)))",(cljs.core.truth_(sqlingvo.core.delete$)?sqlingvo.core.delete$.cljs$lang$test:null)]));
/**
 * Build a DROP TABLE statement.
 * 
 *   Examples:
 * 
 *  (drop-table db [:continents])
 * 
 * Another example:
 * 
 *  (drop-table db [:continents :countries])
 */
(function (){
sqlingvo.core.drop_table = (function sqlingvo$core$drop_table(var_args){
var args__23658__auto__ = [];
var len__23656__auto___951 = arguments.length;
var i__23657__auto___952 = (0);
while(true){
if((i__23657__auto___952 < len__23656__auto___951)){
args__23658__auto__.push((arguments[i__23657__auto___952]));

var G__953 = (i__23657__auto___952 + (1));
i__23657__auto___952 = G__953;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((2) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((2)),(0),null)):null);
return sqlingvo.core.drop_table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.drop_table;},new cljs.core.Symbol("sqlingvo.core","drop-table","sqlingvo.core/drop-table",(1204697686),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword("style","indent","style/indent",(-39468490)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"drop-table","drop-table",(2011978422),null),"sqlingvo/core.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"tables","tables",(-1319812717),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"tables","tables",(-1319812717),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(228),(2),(228),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"tables","tables",(-1319812717),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Build a DROP TABLE statement.\n\n  Examples:\n\n    (drop-table db [:continents])\n\nAnother example:\n\n    (drop-table db [:continents :countries])",(cljs.core.truth_(sqlingvo.core.drop_table)?sqlingvo.core.drop_table.cljs$lang$test:null)])));})()
;

sqlingvo.core.drop_table.cljs$core$IFn$_invoke$arity$variadic = (function (db,tables,body){
if(cljs.core.truth_(sqlingvo.core.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db? db)"));
}

var tables__$1 = cljs.core.map.call(null,sqlingvo.expr.parse_table,tables);
return sqlingvo.expr.stmt.call(null,((function (tables__$1){
return (function (stmt){
return sqlingvo.core.chain_state.call(null,body).call(null,sqlingvo.expr.make_node.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"drop-table","drop-table",(371446895)),new cljs.core.Keyword(null,"db","db",(993250759)),db,new cljs.core.Keyword(null,"children","children",(-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tables","tables",(1334623052))], null),new cljs.core.Keyword(null,"tables","tables",(1334623052)),tables__$1));
});})(tables__$1))
);
});

sqlingvo.core.drop_table.cljs$lang$maxFixedArity = (2);

sqlingvo.core.drop_table.cljs$lang$applyTo = (function (seq948){
var G__949 = cljs.core.first.call(null,seq948);
var seq948__$1 = cljs.core.next.call(null,seq948);
var G__950 = cljs.core.first.call(null,seq948__$1);
var seq948__$2 = cljs.core.next.call(null,seq948__$1);
return sqlingvo.core.drop_table.cljs$core$IFn$_invoke$arity$variadic(G__949,G__950,seq948__$2);
});

new cljs.core.Var(function(){return sqlingvo.core.drop_table;},new cljs.core.Symbol("sqlingvo.core","drop-table","sqlingvo.core/drop-table",(1204697686),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword("style","indent","style/indent",(-39468490)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"drop-table","drop-table",(2011978422),null),"sqlingvo/core.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"tables","tables",(-1319812717),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"tables","tables",(-1319812717),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(228),(2),(228),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"tables","tables",(-1319812717),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Build a DROP TABLE statement.\n\n  Examples:\n\n    (drop-table db [:continents])\n\nAnother example:\n\n    (drop-table db [:continents :countries])",(cljs.core.truth_(sqlingvo.core.drop_table)?sqlingvo.core.drop_table.cljs$lang$test:null)]));
(function (){
sqlingvo.core.make_set_op = (function sqlingvo$core$make_set_op(op,args){
var vec__960 = cljs.core.split_with.call(null,cljs.core.map_QMARK_,args);
var vec__963 = cljs.core.nth.call(null,vec__960,(0),null);
var opts = cljs.core.nth.call(null,vec__963,(0),null);
var stmts = cljs.core.nth.call(null,vec__960,(1),null);
return sqlingvo.expr.stmt.call(null,((function (vec__960,vec__963,opts,stmts){
return (function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.merge.call(null,sqlingvo.expr.make_node.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)),op,new cljs.core.Keyword(null,"db","db",(993250759)),new cljs.core.Keyword(null,"db","db",(993250759)).cljs$core$IFn$_invoke$arity$1(sqlingvo.core.ast.call(null,cljs.core.first.call(null,stmts))),new cljs.core.Keyword(null,"children","children",(-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stmts","stmts",(754560721))], null),new cljs.core.Keyword(null,"stmts","stmts",(754560721)),cljs.core.map.call(null,sqlingvo.core.ast,stmts)),opts)], null);
});})(vec__960,vec__963,opts,stmts))
);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.make_set_op;},new cljs.core.Symbol("sqlingvo.core","make-set-op","sqlingvo.core/make-set-op",(-344296718),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"make-set-op","make-set-op",(-1151593774),null),"sqlingvo/core.cljc",(19),(1),(251),(251),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",(-242456428),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(sqlingvo.core.make_set_op)?sqlingvo.core.make_set_op.cljs$lang$test:null)])));})()
;
/**
 * Build an EXCEPT statement.
 * 
 * Examples:
 * 
 *  (except
 *   (select db [1])
 *   (select db [2]))
 * 
 * Another example:
 * 
 *  (except
 *   {:all true}
 *   (select db [1])
 *   (select db [2]))
 */
(function (){
sqlingvo.core.except = (function sqlingvo$core$except(var_args){
var args__23658__auto__ = [];
var len__23656__auto___967 = arguments.length;
var i__23657__auto___968 = (0);
while(true){
if((i__23657__auto___968 < len__23656__auto___967)){
args__23658__auto__.push((arguments[i__23657__auto___968]));

var G__969 = (i__23657__auto___968 + (1));
i__23657__auto___968 = G__969;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((0) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((0)),(0),null)):null);
return sqlingvo.core.except.cljs$core$IFn$_invoke$arity$variadic(argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.except;},new cljs.core.Symbol("sqlingvo.core","except","sqlingvo.core/except",(-193423670),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"except","except",(-1537542422),null),"sqlingvo/core.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(264),(264),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Build an EXCEPT statement.\n\nExamples:\n\n    (except\n     (select db [1])\n     (select db [2]))\n\nAnother example:\n\n    (except\n     {:all true}\n     (select db [1])\n     (select db [2]))",(cljs.core.truth_(sqlingvo.core.except)?sqlingvo.core.except.cljs$lang$test:null)])));})()
;

sqlingvo.core.except.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return sqlingvo.core.make_set_op.call(null,new cljs.core.Keyword(null,"except","except",(1116893347)),args);
});

sqlingvo.core.except.cljs$lang$maxFixedArity = (0);

sqlingvo.core.except.cljs$lang$applyTo = (function (seq966){
return sqlingvo.core.except.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq966));
});

new cljs.core.Var(function(){return sqlingvo.core.except;},new cljs.core.Symbol("sqlingvo.core","except","sqlingvo.core/except",(-193423670),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"except","except",(-1537542422),null),"sqlingvo/core.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(264),(264),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Build an EXCEPT statement.\n\nExamples:\n\n    (except\n     (select db [1])\n     (select db [2]))\n\nAnother example:\n\n    (except\n     {:all true}\n     (select db [1])\n     (select db [2]))",(cljs.core.truth_(sqlingvo.core.except)?sqlingvo.core.except.cljs$lang$test:null)]));
/**
 * Add a FROM clause to an SQL statement. The `from` forms can be one
 *   or more tables, :stdin, a filename or an other sub query.
 * 
 *   Examples:
 * 
 * Simple select:
 * 
 *    (select db [:*]
 *      (from :continents))
 * 
 * 
 * Using `where`:
 * 
 *    (select db [:*]
 *      (from :continents :countries)
 *      (where '(= :continents.id :continent-id)))
 * 
 * 
 * Using `as`:
 * 
 *    (select db [:*]
 *      (from (as (select [1 2 3]) :x)))
 * 
 * Using `copy`:
 * 
 *    (copy db :country []
 *      (from :stdin))
 * 
 * Using `copy`:
 * 
 *    (copy db :country []
 *      (from "/usr1/proj/bray/sql/country_data"))
 */
(function (){
sqlingvo.core.from = (function sqlingvo$core$from(var_args){
var args__23658__auto__ = [];
var len__23656__auto___972 = arguments.length;
var i__23657__auto___973 = (0);
while(true){
if((i__23657__auto___973 < len__23656__auto___972)){
args__23658__auto__.push((arguments[i__23657__auto___973]));

var G__974 = (i__23657__auto___973 + (1));
i__23657__auto___973 = G__974;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((0) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((0)),(0),null)):null);
return sqlingvo.core.from.cljs$core$IFn$_invoke$arity$variadic(argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.from;},new cljs.core.Symbol("sqlingvo.core","from","sqlingvo.core/from",(-1648028965),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"from","from",(-839142725),null),"sqlingvo/core.cljc",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"from","from",(-839142725),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"from","from",(-839142725),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(282),(282),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"from","from",(-839142725),null)], null)),"Add a FROM clause to an SQL statement. The `from` forms can be one\n  or more tables, :stdin, a filename or an other sub query.\n\n  Examples:\n\nSimple select:\n\n      (select db [:*]\n        (from :continents))\n\n\nUsing `where`:\n\n      (select db [:*]\n        (from :continents :countries)\n        (where '(= :continents.id :continent-id)))\n\n\nUsing `as`:\n\n      (select db [:*]\n        (from (as (select [1 2 3]) :x)))\n\nUsing `copy`:\n\n      (copy db :country []\n        (from :stdin))\n\nUsing `copy`:\n\n      (copy db :country []\n        (from \"/usr1/proj/bray/sql/country_data\"))",(cljs.core.truth_(sqlingvo.core.from)?sqlingvo.core.from.cljs$lang$test:null)])));})()
;

sqlingvo.core.from.cljs$core$IFn$_invoke$arity$variadic = (function (from){
return (function (stmt){
var from__$1 = (function (){var G__971 = (((new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(stmt) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(stmt).fqn:null);
switch (G__971) {
case "copy":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,from)], null);

break;
default:
return cljs.core.map.call(null,sqlingvo.expr.parse_from,from);

}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from__$1,cljs.core.update_in.call(null,stmt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",(1815293044))], null),((function (from__$1){
return (function (p1__63_SHARP_){
return cljs.core.concat.call(null,p1__63_SHARP_,from__$1);
});})(from__$1))
)], null);
});
});

sqlingvo.core.from.cljs$lang$maxFixedArity = (0);

sqlingvo.core.from.cljs$lang$applyTo = (function (seq970){
return sqlingvo.core.from.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq970));
});

new cljs.core.Var(function(){return sqlingvo.core.from;},new cljs.core.Symbol("sqlingvo.core","from","sqlingvo.core/from",(-1648028965),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"from","from",(-839142725),null),"sqlingvo/core.cljc",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"from","from",(-839142725),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"from","from",(-839142725),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(282),(282),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"from","from",(-839142725),null)], null)),"Add a FROM clause to an SQL statement. The `from` forms can be one\n  or more tables, :stdin, a filename or an other sub query.\n\n  Examples:\n\nSimple select:\n\n      (select db [:*]\n        (from :continents))\n\n\nUsing `where`:\n\n      (select db [:*]\n        (from :continents :countries)\n        (where '(= :continents.id :continent-id)))\n\n\nUsing `as`:\n\n      (select db [:*]\n        (from (as (select [1 2 3]) :x)))\n\nUsing `copy`:\n\n      (copy db :country []\n        (from :stdin))\n\nUsing `copy`:\n\n      (copy db :country []\n        (from \"/usr1/proj/bray/sql/country_data\"))",(cljs.core.truth_(sqlingvo.core.from)?sqlingvo.core.from.cljs$lang$test:null)]));
/**
 * Add a GROUP BY clause to an SQL statement.
 */
(function (){
sqlingvo.core.group_by = (function sqlingvo$core$group_by(var_args){
var args__23658__auto__ = [];
var len__23656__auto___977 = arguments.length;
var i__23657__auto___978 = (0);
while(true){
if((i__23657__auto___978 < len__23656__auto___977)){
args__23658__auto__.push((arguments[i__23657__auto___978]));

var G__979 = (i__23657__auto___978 + (1));
i__23657__auto___978 = G__979;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((0) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((0)),(0),null)):null);
return sqlingvo.core.group_by.cljs$core$IFn$_invoke$arity$variadic(argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.group_by;},new cljs.core.Symbol("sqlingvo.core","group-by","sqlingvo.core/group-by",(-1693520051),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"group-by","group-by",(1261391725),null),"sqlingvo/core.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(322),(322),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null)], null)),"Add a GROUP BY clause to an SQL statement.",(cljs.core.truth_(sqlingvo.core.group_by)?sqlingvo.core.group_by.cljs$lang$test:null)])));})()
;

sqlingvo.core.group_by.cljs$core$IFn$_invoke$arity$variadic = (function (exprs){
return sqlingvo.util.concat_in.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group-by","group-by",(-379139802))], null),sqlingvo.expr.parse_exprs.call(null,exprs));
});

sqlingvo.core.group_by.cljs$lang$maxFixedArity = (0);

sqlingvo.core.group_by.cljs$lang$applyTo = (function (seq976){
return sqlingvo.core.group_by.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq976));
});

new cljs.core.Var(function(){return sqlingvo.core.group_by;},new cljs.core.Symbol("sqlingvo.core","group-by","sqlingvo.core/group-by",(-1693520051),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"group-by","group-by",(1261391725),null),"sqlingvo/core.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(322),(322),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null)], null)),"Add a GROUP BY clause to an SQL statement.",(cljs.core.truth_(sqlingvo.core.group_by)?sqlingvo.core.group_by.cljs$lang$test:null)]));
/**
 * Add a HAVING clause to an SQL statement.
 * 
 *   Examples:
 * 
 *  (select db [:city '(max :temp-lo)]
 *    (from :weather)
 *    (group-by :city)
 *    (having '(< (max :temp-lo) 40)))
 */
(function (){
sqlingvo.core.having = (function sqlingvo$core$having(var_args){
var args__23658__auto__ = [];
var len__23656__auto___986 = arguments.length;
var i__23657__auto___987 = (0);
while(true){
if((i__23657__auto___987 < len__23656__auto___986)){
args__23658__auto__.push((arguments[i__23657__auto___987]));

var G__988 = (i__23657__auto___987 + (1));
i__23657__auto___987 = G__988;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((1) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((1)),(0),null)):null);
return sqlingvo.core.having.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.having;},new cljs.core.Symbol("sqlingvo.core","having","sqlingvo.core/having",(-1206494551),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"having","having",(1240988361),null),"sqlingvo/core.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combine","combine",(207448214),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combine","combine",(207448214),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(327),(327),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combine","combine",(207448214),null)], null)], null)),"Add a HAVING clause to an SQL statement.\n\n  Examples:\n\n    (select db [:city '(max :temp-lo)]\n      (from :weather)\n      (group-by :city)\n      (having '(< (max :temp-lo) 40)))",(cljs.core.truth_(sqlingvo.core.having)?sqlingvo.core.having.cljs$lang$test:null)])));})()
;

sqlingvo.core.having.cljs$core$IFn$_invoke$arity$variadic = (function (condition,p__982){
var vec__983 = p__982;
var combine = cljs.core.nth.call(null,vec__983,(0),null);
return sqlingvo.util.build_condition.call(null,new cljs.core.Keyword(null,"having","having",(-399543166)),condition,combine);
});

sqlingvo.core.having.cljs$lang$maxFixedArity = (1);

sqlingvo.core.having.cljs$lang$applyTo = (function (seq980){
var G__981 = cljs.core.first.call(null,seq980);
var seq980__$1 = cljs.core.next.call(null,seq980);
return sqlingvo.core.having.cljs$core$IFn$_invoke$arity$variadic(G__981,seq980__$1);
});

new cljs.core.Var(function(){return sqlingvo.core.having;},new cljs.core.Symbol("sqlingvo.core","having","sqlingvo.core/having",(-1206494551),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"having","having",(1240988361),null),"sqlingvo/core.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combine","combine",(207448214),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combine","combine",(207448214),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(327),(327),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combine","combine",(207448214),null)], null)], null)),"Add a HAVING clause to an SQL statement.\n\n  Examples:\n\n    (select db [:city '(max :temp-lo)]\n      (from :weather)\n      (group-by :city)\n      (having '(< (max :temp-lo) 40)))",(cljs.core.truth_(sqlingvo.core.having)?sqlingvo.core.having.cljs$lang$test:null)]));
/**
 * Add a IF EXISTS clause to an SQL statement.
 */
(function (){
sqlingvo.core.if_exists = (function sqlingvo$core$if_exists(condition){
return sqlingvo.util.conditional_clause.call(null,new cljs.core.Keyword(null,"if-exists","if-exists",(-1964107033)),condition);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.if_exists;},new cljs.core.Symbol("sqlingvo.core","if-exists","sqlingvo.core/if-exists",(1016611086),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"if-exists","if-exists",(-323575506),null),"sqlingvo/core.cljc",(16),(1),(339),(339),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condition","condition",(-985998117),null)], null)),"Add a IF EXISTS clause to an SQL statement.",(cljs.core.truth_(sqlingvo.core.if_exists)?sqlingvo.core.if_exists.cljs$lang$test:null)])));})()
;
/**
 * Add a IF EXISTS clause to an SQL statement.
 */
(function (){
sqlingvo.core.if_not_exists = (function sqlingvo$core$if_not_exists(condition){
return sqlingvo.util.conditional_clause.call(null,new cljs.core.Keyword(null,"if-not-exists","if-not-exists",(739006925)),condition);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.if_not_exists;},new cljs.core.Symbol("sqlingvo.core","if-not-exists","sqlingvo.core/if-not-exists",(-1120518092),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"if-not-exists","if-not-exists",(-1915428844),null),"sqlingvo/core.cljc",(20),(1),(344),(344),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condition","condition",(-985998117),null)], null)),"Add a IF EXISTS clause to an SQL statement.",(cljs.core.truth_(sqlingvo.core.if_not_exists)?sqlingvo.core.if_not_exists.cljs$lang$test:null)])));})()
;
/**
 * Add an INHERITS clause to an SQL statement.
 */
(function (){
sqlingvo.core.inherits = (function sqlingvo$core$inherits(var_args){
var args__23658__auto__ = [];
var len__23656__auto___990 = arguments.length;
var i__23657__auto___991 = (0);
while(true){
if((i__23657__auto___991 < len__23656__auto___990)){
args__23658__auto__.push((arguments[i__23657__auto___991]));

var G__992 = (i__23657__auto___991 + (1));
i__23657__auto___991 = G__992;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((0) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((0)),(0),null)):null);
return sqlingvo.core.inherits.cljs$core$IFn$_invoke$arity$variadic(argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.inherits;},new cljs.core.Symbol("sqlingvo.core","inherits","sqlingvo.core/inherits",(-1460304818),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"inherits","inherits",(1490429038),null),"sqlingvo/core.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"tables","tables",(-1319812717),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"tables","tables",(-1319812717),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(349),(349),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"tables","tables",(-1319812717),null)], null)),"Add an INHERITS clause to an SQL statement.",(cljs.core.truth_(sqlingvo.core.inherits)?sqlingvo.core.inherits.cljs$lang$test:null)])));})()
;

sqlingvo.core.inherits.cljs$core$IFn$_invoke$arity$variadic = (function (tables){
var tables__$1 = cljs.core.mapv.call(null,sqlingvo.expr.parse_table,tables);
return ((function (tables__$1){
return (function (stmt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tables__$1,cljs.core.assoc.call(null,stmt,new cljs.core.Keyword(null,"inherits","inherits",(-150102489)),tables__$1)], null);
});
;})(tables__$1))
});

sqlingvo.core.inherits.cljs$lang$maxFixedArity = (0);

sqlingvo.core.inherits.cljs$lang$applyTo = (function (seq989){
return sqlingvo.core.inherits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq989));
});

new cljs.core.Var(function(){return sqlingvo.core.inherits;},new cljs.core.Symbol("sqlingvo.core","inherits","sqlingvo.core/inherits",(-1460304818),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"inherits","inherits",(1490429038),null),"sqlingvo/core.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"tables","tables",(-1319812717),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"tables","tables",(-1319812717),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(349),(349),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"tables","tables",(-1319812717),null)], null)),"Add an INHERITS clause to an SQL statement.",(cljs.core.truth_(sqlingvo.core.inherits)?sqlingvo.core.inherits.cljs$lang$test:null)]));
/**
 * Build a INSERT statement.
 */
(function (){
sqlingvo.core.insert = (function sqlingvo$core$insert(var_args){
var args__23658__auto__ = [];
var len__23656__auto___997 = arguments.length;
var i__23657__auto___998 = (0);
while(true){
if((i__23657__auto___998 < len__23656__auto___997)){
args__23658__auto__.push((arguments[i__23657__auto___998]));

var G__999 = (i__23657__auto___998 + (1));
i__23657__auto___998 = G__999;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((3) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((3)),(0),null)):null);
return sqlingvo.core.insert.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.insert;},new cljs.core.Symbol("sqlingvo.core","insert","sqlingvo.core/insert",(-1642646294),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword("style","indent","style/indent",(-39468490)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"insert","insert",(-1367960374),null),"sqlingvo/core.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"columns","columns",(-655998481),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"columns","columns",(-655998481),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(356),(3),(356),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"columns","columns",(-655998481),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Build a INSERT statement.",(cljs.core.truth_(sqlingvo.core.insert)?sqlingvo.core.insert.cljs$lang$test:null)])));})()
;

sqlingvo.core.insert.cljs$core$IFn$_invoke$arity$variadic = (function (db,table,columns,body){
if(cljs.core.truth_(sqlingvo.core.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db? db)"));
}

var table__$1 = sqlingvo.expr.parse_table.call(null,table);
var columns__$1 = cljs.core.map.call(null,sqlingvo.expr.parse_column,columns);
return sqlingvo.expr.stmt.call(null,((function (table__$1,columns__$1){
return (function (_){
return sqlingvo.core.chain_state.call(null,body).call(null,sqlingvo.expr.make_node.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"insert","insert",(1286475395)),new cljs.core.Keyword(null,"db","db",(993250759)),db,new cljs.core.Keyword(null,"children","children",(-940561982)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",(-564943036)),new cljs.core.Keyword(null,"columns","columns",(1998437288))], null),new cljs.core.Keyword(null,"table","table",(-564943036)),table__$1,new cljs.core.Keyword(null,"columns","columns",(1998437288)),(cljs.core.truth_(cljs.core.not_empty.call(null,columns__$1))?columns__$1:null)));
});})(table__$1,columns__$1))
);
});

sqlingvo.core.insert.cljs$lang$maxFixedArity = (3);

sqlingvo.core.insert.cljs$lang$applyTo = (function (seq993){
var G__994 = cljs.core.first.call(null,seq993);
var seq993__$1 = cljs.core.next.call(null,seq993);
var G__995 = cljs.core.first.call(null,seq993__$1);
var seq993__$2 = cljs.core.next.call(null,seq993__$1);
var G__996 = cljs.core.first.call(null,seq993__$2);
var seq993__$3 = cljs.core.next.call(null,seq993__$2);
return sqlingvo.core.insert.cljs$core$IFn$_invoke$arity$variadic(G__994,G__995,G__996,seq993__$3);
});

new cljs.core.Var(function(){return sqlingvo.core.insert;},new cljs.core.Symbol("sqlingvo.core","insert","sqlingvo.core/insert",(-1642646294),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword("style","indent","style/indent",(-39468490)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"insert","insert",(-1367960374),null),"sqlingvo/core.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"columns","columns",(-655998481),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"columns","columns",(-655998481),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(356),(3),(356),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"columns","columns",(-655998481),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Build a INSERT statement.",(cljs.core.truth_(sqlingvo.core.insert)?sqlingvo.core.insert.cljs$lang$test:null)]));
/**
 * Build an INTERSECT statement.
 * 
 * Examples:
 * 
 *   (intersect
 *    (select db [1])
 *    (select db [2]))
 * 
 * Another example:
 * 
 *   (intersect
 *    {:all true}
 *    (select db [1])
 *    (select db [2]))
 */
(function (){
sqlingvo.core.intersect = (function sqlingvo$core$intersect(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1001 = arguments.length;
var i__23657__auto___1002 = (0);
while(true){
if((i__23657__auto___1002 < len__23656__auto___1001)){
args__23658__auto__.push((arguments[i__23657__auto___1002]));

var G__1003 = (i__23657__auto___1002 + (1));
i__23657__auto___1002 = G__1003;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((0) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((0)),(0),null)):null);
return sqlingvo.core.intersect.cljs$core$IFn$_invoke$arity$variadic(argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.intersect;},new cljs.core.Symbol("sqlingvo.core","intersect","sqlingvo.core/intersect",(-664952033),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"intersect","intersect",(-399260865),null),"sqlingvo/core.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(375),(375),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Build an INTERSECT statement.\n\nExamples:\n\n     (intersect\n      (select db [1])\n      (select db [2]))\n\nAnother example:\n\n     (intersect\n      {:all true}\n      (select db [1])\n      (select db [2]))",(cljs.core.truth_(sqlingvo.core.intersect)?sqlingvo.core.intersect.cljs$lang$test:null)])));})()
;

sqlingvo.core.intersect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return sqlingvo.core.make_set_op.call(null,new cljs.core.Keyword(null,"intersect","intersect",(-2039792392)),args);
});

sqlingvo.core.intersect.cljs$lang$maxFixedArity = (0);

sqlingvo.core.intersect.cljs$lang$applyTo = (function (seq1000){
return sqlingvo.core.intersect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1000));
});

new cljs.core.Var(function(){return sqlingvo.core.intersect;},new cljs.core.Symbol("sqlingvo.core","intersect","sqlingvo.core/intersect",(-664952033),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"intersect","intersect",(-399260865),null),"sqlingvo/core.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(375),(375),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Build an INTERSECT statement.\n\nExamples:\n\n     (intersect\n      (select db [1])\n      (select db [2]))\n\nAnother example:\n\n     (intersect\n      {:all true}\n      (select db [1])\n      (select db [2]))",(cljs.core.truth_(sqlingvo.core.intersect)?sqlingvo.core.intersect.cljs$lang$test:null)]));
/**
 * Add a JOIN clause to a statement.
 * 
 *   Examples:
 * 
 * First:
 * 
 *  (select db [:*]
 *    (from :countries)
 *    (join :continents '(using :id)))
 * 
 * Second:
 * 
 *  (select db [:*]
 *    (from :continents)
 *    (join :countries.continent-id :continents.id))
 * 
 * Third:
 * 
 *  (select db [:*]
 *    (from :countries)
 *    (join :continents '(on (= :continents.id :countries.continent-id))))
 */
(function (){
sqlingvo.core.join = (function sqlingvo$core$join(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1010 = arguments.length;
var i__23657__auto___1011 = (0);
while(true){
if((i__23657__auto___1011 < len__23656__auto___1010)){
args__23658__auto__.push((arguments[i__23657__auto___1011]));

var G__1012 = (i__23657__auto___1011 + (1));
i__23657__auto___1011 = G__1012;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((2) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((2)),(0),null)):null);
return sqlingvo.core.join.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.join;},new cljs.core.Symbol("sqlingvo.core","join","sqlingvo.core/join",(124556837),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"join","join",(881669637),null),"sqlingvo/core.cljc",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"outer","outer",(1265345571),null),new cljs.core.Symbol(null,"pk","pk",(868594795),null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"outer","outer",(1265345571),null),new cljs.core.Symbol(null,"pk","pk",(868594795),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(393),(393),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"outer","outer",(1265345571),null),new cljs.core.Symbol(null,"pk","pk",(868594795),null)], null)], null)], null)),"Add a JOIN clause to a statement.\n\n  Examples:\n\nFirst:\n\n    (select db [:*]\n      (from :countries)\n      (join :continents '(using :id)))\n\nSecond:\n\n    (select db [:*]\n      (from :continents)\n      (join :countries.continent-id :continents.id))\n\nThird:\n\n    (select db [:*]\n      (from :countries)\n      (join :continents '(on (= :continents.id :countries.continent-id))))",(cljs.core.truth_(sqlingvo.core.join)?sqlingvo.core.join.cljs$lang$test:null)])));})()
;

sqlingvo.core.join.cljs$core$IFn$_invoke$arity$variadic = (function (from,condition,p__1007){
var map__1008 = p__1007;
var map__1008__$1 = ((((!((map__1008 == null)))?((((map__1008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1008.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1008):map__1008);
var outer = cljs.core.get.call(null,map__1008__$1,new cljs.core.Keyword(null,"outer","outer",(-375185956)));
var pk = cljs.core.get.call(null,map__1008__$1,new cljs.core.Keyword(null,"pk","pk",(-771936732)));
var type = cljs.core.get.call(null,map__1008__$1,new cljs.core.Keyword(null,"type","type",(1174270348)));
return sqlingvo.util.concat_in.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"joins","joins",(1033962699))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var join = sqlingvo.expr.make_node.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"join","join",(-758861890)),new cljs.core.Keyword(null,"children","children",(-940561982)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"outer","outer",(-375185956)),new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"from","from",(1815293044))], null),new cljs.core.Keyword(null,"outer","outer",(-375185956)),outer,new cljs.core.Keyword(null,"type","type",(1174270348)),type,new cljs.core.Keyword(null,"from","from",(1815293044)),sqlingvo.expr.parse_from.call(null,from));
if((cljs.core.sequential_QMARK_.call(null,condition)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",(173873944)),cljs.core.keyword.call(null,cljs.core.name.call(null,cljs.core.first.call(null,condition)))))){
return cljs.core.assoc.call(null,join,new cljs.core.Keyword(null,"on","on",(173873944)),sqlingvo.expr.parse_expr.call(null,cljs.core.first.call(null,cljs.core.rest.call(null,condition))));
} else {
if((cljs.core.sequential_QMARK_.call(null,condition)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"using","using",(1948623036)),cljs.core.keyword.call(null,cljs.core.name.call(null,cljs.core.first.call(null,condition)))))){
return cljs.core.assoc.call(null,join,new cljs.core.Keyword(null,"using","using",(1948623036)),sqlingvo.expr.parse_exprs.call(null,cljs.core.rest.call(null,condition)));
} else {
if(((from instanceof cljs.core.Keyword)) && ((condition instanceof cljs.core.Keyword))){
return cljs.core.assoc.call(null,join,new cljs.core.Keyword(null,"from","from",(1815293044)),sqlingvo.expr.parse_table.call(null,clojure.string.join.call(null,".",cljs.core.butlast.call(null,clojure.string.split.call(null,cljs.core.name.call(null,from),/\./)))),new cljs.core.Keyword(null,"on","on",(173873944)),sqlingvo.expr.parse_expr.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null)),(function (){var x__23399__auto__ = from;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = condition;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()))));
} else {
throw cljs.core.ex_info.call(null,"Invalid JOIN condition.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"condition","condition",(1668437652)),condition], null));

}
}
}
})()], null));
});

sqlingvo.core.join.cljs$lang$maxFixedArity = (2);

sqlingvo.core.join.cljs$lang$applyTo = (function (seq1004){
var G__1005 = cljs.core.first.call(null,seq1004);
var seq1004__$1 = cljs.core.next.call(null,seq1004);
var G__1006 = cljs.core.first.call(null,seq1004__$1);
var seq1004__$2 = cljs.core.next.call(null,seq1004__$1);
return sqlingvo.core.join.cljs$core$IFn$_invoke$arity$variadic(G__1005,G__1006,seq1004__$2);
});

new cljs.core.Var(function(){return sqlingvo.core.join;},new cljs.core.Symbol("sqlingvo.core","join","sqlingvo.core/join",(124556837),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"join","join",(881669637),null),"sqlingvo/core.cljc",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"outer","outer",(1265345571),null),new cljs.core.Symbol(null,"pk","pk",(868594795),null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"outer","outer",(1265345571),null),new cljs.core.Symbol(null,"pk","pk",(868594795),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(393),(393),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"outer","outer",(1265345571),null),new cljs.core.Symbol(null,"pk","pk",(868594795),null)], null)], null)], null)),"Add a JOIN clause to a statement.\n\n  Examples:\n\nFirst:\n\n    (select db [:*]\n      (from :countries)\n      (join :continents '(using :id)))\n\nSecond:\n\n    (select db [:*]\n      (from :continents)\n      (join :countries.continent-id :continents.id))\n\nThird:\n\n    (select db [:*]\n      (from :countries)\n      (join :continents '(on (= :continents.id :countries.continent-id))))",(cljs.core.truth_(sqlingvo.core.join)?sqlingvo.core.join.cljs$lang$test:null)]));
/**
 * Add a LIKE clause to an SQL statement.
 */
(function (){
sqlingvo.core.like = (function sqlingvo$core$like(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1018 = arguments.length;
var i__23657__auto___1019 = (0);
while(true){
if((i__23657__auto___1019 < len__23656__auto___1018)){
args__23658__auto__.push((arguments[i__23657__auto___1019]));

var G__1020 = (i__23657__auto___1019 + (1));
i__23657__auto___1019 = G__1020;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((1) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((1)),(0),null)):null);
return sqlingvo.core.like.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.like;},new cljs.core.Symbol("sqlingvo.core","like","sqlingvo.core/like",(-89351669),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"like","like",(726481451),null),"sqlingvo/core.cljc",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(440),(440),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),"Add a LIKE clause to an SQL statement.",(cljs.core.truth_(sqlingvo.core.like)?sqlingvo.core.like.cljs$lang$test:null)])));})()
;

sqlingvo.core.like.cljs$core$IFn$_invoke$arity$variadic = (function (table,p__1015){
var map__1016 = p__1015;
var map__1016__$1 = ((((!((map__1016 == null)))?((((map__1016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1016.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1016):map__1016);
var opts = map__1016__$1;
var table__$1 = sqlingvo.expr.parse_table.call(null,table);
var like = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"like","like",(-914050076)),new cljs.core.Keyword(null,"table","table",(-564943036)),table__$1);
return sqlingvo.util.set_val.call(null,new cljs.core.Keyword(null,"like","like",(-914050076)),like);
});

sqlingvo.core.like.cljs$lang$maxFixedArity = (1);

sqlingvo.core.like.cljs$lang$applyTo = (function (seq1013){
var G__1014 = cljs.core.first.call(null,seq1013);
var seq1013__$1 = cljs.core.next.call(null,seq1013);
return sqlingvo.core.like.cljs$core$IFn$_invoke$arity$variadic(G__1014,seq1013__$1);
});

new cljs.core.Var(function(){return sqlingvo.core.like;},new cljs.core.Symbol("sqlingvo.core","like","sqlingvo.core/like",(-89351669),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"like","like",(726481451),null),"sqlingvo/core.cljc",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(440),(440),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),"Add a LIKE clause to an SQL statement.",(cljs.core.truth_(sqlingvo.core.like)?sqlingvo.core.like.cljs$lang$test:null)]));
/**
 * Add a LIMIT clause to an SQL statement.
 */
(function (){
sqlingvo.core.limit = (function sqlingvo$core$limit(expr){
if(cljs.core.truth_(expr)){
return sqlingvo.util.assoc_op.call(null,new cljs.core.Keyword(null,"limit","limit",(-1355822363)),new cljs.core.Keyword(null,"expr","expr",(745722291)),sqlingvo.expr.parse_expr.call(null,expr));
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return sqlingvo.core.limit;},new cljs.core.Symbol("sqlingvo.core","limit","sqlingvo.core/limit",(1625026828),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"limit","limit",(284709164),null),"sqlingvo/core.cljc",(12),(1),(447),(447),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null)),"Add a LIMIT clause to an SQL statement.",(cljs.core.truth_(sqlingvo.core.limit)?sqlingvo.core.limit.cljs$lang$test:null)])));})()
;
/**
 * Parse `expr` and return an NULLS FIRST/LAST expr.
 */
(function (){
sqlingvo.core.nulls = (function sqlingvo$core$nulls(expr,where){
return cljs.core.assoc.call(null,sqlingvo.expr.parse_expr.call(null,expr),new cljs.core.Keyword(null,"nulls","nulls",(-1240282893)),where);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.nulls;},new cljs.core.Symbol("sqlingvo.core","nulls","sqlingvo.core/nulls",(-972706022),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"nulls","nulls",(400248634),null),"sqlingvo/core.cljc",(12),(1),(452),(452),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"where","where",(-404264438),null)], null)),"Parse `expr` and return an NULLS FIRST/LAST expr.",(cljs.core.truth_(sqlingvo.core.nulls)?sqlingvo.core.nulls.cljs$lang$test:null)])));})()
;
/**
 * Add a ON CONFLICT clause to a SQL statement.
 */
(function (){
sqlingvo.core.on_conflict = (function sqlingvo$core$on_conflict(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1026 = arguments.length;
var i__23657__auto___1027 = (0);
while(true){
if((i__23657__auto___1027 < len__23656__auto___1026)){
args__23658__auto__.push((arguments[i__23657__auto___1027]));

var G__1028 = (i__23657__auto___1027 + (1));
i__23657__auto___1027 = G__1028;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((1) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((1)),(0),null)):null);
return sqlingvo.core.on_conflict.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.on_conflict;},new cljs.core.Symbol("sqlingvo.core","on-conflict","sqlingvo.core/on-conflict",(277259457),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword("style","indent","style/indent",(-39468490)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"on-conflict","on-conflict",(-1059044127),null),"sqlingvo/core.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"target","target",(1893533248),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",(1893533248),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(457),(1),(457),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",(1893533248),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Add a ON CONFLICT clause to a SQL statement.",(cljs.core.truth_(sqlingvo.core.on_conflict)?sqlingvo.core.on_conflict.cljs$lang$test:null)])));})()
;

sqlingvo.core.on_conflict.cljs$core$IFn$_invoke$arity$variadic = (function (target,body){
var target__$1 = cljs.core.map.call(null,sqlingvo.expr.parse_column,target);
var vec__1023 = sqlingvo.core.chain_state.call(null,body).call(null,sqlingvo.expr.make_node.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"on-conflict","on-conflict",(1595391642)),new cljs.core.Keyword(null,"target","target",(253001721)),target__$1,new cljs.core.Keyword(null,"children","children",(-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",(253001721))], null)));
var _ = cljs.core.nth.call(null,vec__1023,(0),null);
var node = cljs.core.nth.call(null,vec__1023,(1),null);
return sqlingvo.expr.stmt.call(null,((function (vec__1023,_,node,target__$1){
return (function (stmt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_,cljs.core.assoc.call(null,stmt,new cljs.core.Keyword(null,"on-conflict","on-conflict",(1595391642)),node)], null);
});})(vec__1023,_,node,target__$1))
);
});

sqlingvo.core.on_conflict.cljs$lang$maxFixedArity = (1);

sqlingvo.core.on_conflict.cljs$lang$applyTo = (function (seq1021){
var G__1022 = cljs.core.first.call(null,seq1021);
var seq1021__$1 = cljs.core.next.call(null,seq1021);
return sqlingvo.core.on_conflict.cljs$core$IFn$_invoke$arity$variadic(G__1022,seq1021__$1);
});

new cljs.core.Var(function(){return sqlingvo.core.on_conflict;},new cljs.core.Symbol("sqlingvo.core","on-conflict","sqlingvo.core/on-conflict",(277259457),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword("style","indent","style/indent",(-39468490)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"on-conflict","on-conflict",(-1059044127),null),"sqlingvo/core.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"target","target",(1893533248),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",(1893533248),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(457),(1),(457),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",(1893533248),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Add a ON CONFLICT clause to a SQL statement.",(cljs.core.truth_(sqlingvo.core.on_conflict)?sqlingvo.core.on_conflict.cljs$lang$test:null)]));
/**
 * Add a ON CONFLICT ON CONSTRAINT clause to a SQL statement.
 */
(function (){
sqlingvo.core.on_conflict_on_constraint = (function sqlingvo$core$on_conflict_on_constraint(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1034 = arguments.length;
var i__23657__auto___1035 = (0);
while(true){
if((i__23657__auto___1035 < len__23656__auto___1034)){
args__23658__auto__.push((arguments[i__23657__auto___1035]));

var G__1036 = (i__23657__auto___1035 + (1));
i__23657__auto___1035 = G__1036;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((1) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((1)),(0),null)):null);
return sqlingvo.core.on_conflict_on_constraint.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.on_conflict_on_constraint;},new cljs.core.Symbol("sqlingvo.core","on-conflict-on-constraint","sqlingvo.core/on-conflict-on-constraint",(1221704494),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword("style","indent","style/indent",(-39468490)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"on-conflict-on-constraint","on-conflict-on-constraint",(2025741262),null),"sqlingvo/core.cljc",(32),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"target","target",(1893533248),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",(1893533248),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(472),(1),(472),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",(1893533248),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Add a ON CONFLICT ON CONSTRAINT clause to a SQL statement.",(cljs.core.truth_(sqlingvo.core.on_conflict_on_constraint)?sqlingvo.core.on_conflict_on_constraint.cljs$lang$test:null)])));})()
;

sqlingvo.core.on_conflict_on_constraint.cljs$core$IFn$_invoke$arity$variadic = (function (target,body){
var vec__1031 = sqlingvo.core.chain_state.call(null,body).call(null,sqlingvo.expr.make_node.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"on-conflict-on-constraint","on-conflict-on-constraint",(385209735)),new cljs.core.Keyword(null,"target","target",(253001721)),target,new cljs.core.Keyword(null,"children","children",(-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",(253001721))], null)));
var _ = cljs.core.nth.call(null,vec__1031,(0),null);
var node = cljs.core.nth.call(null,vec__1031,(1),null);
return sqlingvo.expr.stmt.call(null,((function (vec__1031,_,node){
return (function (stmt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_,cljs.core.assoc.call(null,stmt,new cljs.core.Keyword(null,"on-conflict-on-constraint","on-conflict-on-constraint",(385209735)),node)], null);
});})(vec__1031,_,node))
);
});

sqlingvo.core.on_conflict_on_constraint.cljs$lang$maxFixedArity = (1);

sqlingvo.core.on_conflict_on_constraint.cljs$lang$applyTo = (function (seq1029){
var G__1030 = cljs.core.first.call(null,seq1029);
var seq1029__$1 = cljs.core.next.call(null,seq1029);
return sqlingvo.core.on_conflict_on_constraint.cljs$core$IFn$_invoke$arity$variadic(G__1030,seq1029__$1);
});

new cljs.core.Var(function(){return sqlingvo.core.on_conflict_on_constraint;},new cljs.core.Symbol("sqlingvo.core","on-conflict-on-constraint","sqlingvo.core/on-conflict-on-constraint",(1221704494),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword("style","indent","style/indent",(-39468490)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"on-conflict-on-constraint","on-conflict-on-constraint",(2025741262),null),"sqlingvo/core.cljc",(32),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"target","target",(1893533248),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",(1893533248),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(472),(1),(472),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",(1893533248),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Add a ON CONFLICT ON CONSTRAINT clause to a SQL statement.",(cljs.core.truth_(sqlingvo.core.on_conflict_on_constraint)?sqlingvo.core.on_conflict_on_constraint.cljs$lang$test:null)]));
/**
 * Add a OFFSET clause to an SQL statement.
 */
(function (){
sqlingvo.core.offset = (function sqlingvo$core$offset(expr){
return sqlingvo.util.assoc_op.call(null,new cljs.core.Keyword(null,"offset","offset",(296498311)),new cljs.core.Keyword(null,"expr","expr",(745722291)),sqlingvo.expr.parse_expr.call(null,expr));
}); return (
new cljs.core.Var(function(){return sqlingvo.core.offset;},new cljs.core.Symbol("sqlingvo.core","offset","sqlingvo.core/offset",(-1558832402),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null),"sqlingvo/core.cljc",(13),(1),(486),(486),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null)),"Add a OFFSET clause to an SQL statement.",(cljs.core.truth_(sqlingvo.core.offset)?sqlingvo.core.offset.cljs$lang$test:null)])));})()
;
/**
 * Add a ORDER BY clause to an SQL statement.
 */
(function (){
sqlingvo.core.order_by = (function sqlingvo$core$order_by(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1038 = arguments.length;
var i__23657__auto___1039 = (0);
while(true){
if((i__23657__auto___1039 < len__23656__auto___1038)){
args__23658__auto__.push((arguments[i__23657__auto___1039]));

var G__1040 = (i__23657__auto___1039 + (1));
i__23657__auto___1039 = G__1040;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((0) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((0)),(0),null)):null);
return sqlingvo.core.order_by.cljs$core$IFn$_invoke$arity$variadic(argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.order_by;},new cljs.core.Symbol("sqlingvo.core","order-by","sqlingvo.core/order-by",(-332190691),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"order-by","order-by",(-1127117699),null),"sqlingvo/core.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(491),(491),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null)], null)),"Add a ORDER BY clause to an SQL statement.",(cljs.core.truth_(sqlingvo.core.order_by)?sqlingvo.core.order_by.cljs$lang$test:null)])));})()
;

sqlingvo.core.order_by.cljs$core$IFn$_invoke$arity$variadic = (function (exprs){
return sqlingvo.util.concat_in.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order-by","order-by",(1527318070))], null),sqlingvo.expr.parse_exprs.call(null,exprs));
});

sqlingvo.core.order_by.cljs$lang$maxFixedArity = (0);

sqlingvo.core.order_by.cljs$lang$applyTo = (function (seq1037){
return sqlingvo.core.order_by.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1037));
});

new cljs.core.Var(function(){return sqlingvo.core.order_by;},new cljs.core.Symbol("sqlingvo.core","order-by","sqlingvo.core/order-by",(-332190691),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"order-by","order-by",(-1127117699),null),"sqlingvo/core.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(491),(491),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null)], null)),"Add a ORDER BY clause to an SQL statement.",(cljs.core.truth_(sqlingvo.core.order_by)?sqlingvo.core.order_by.cljs$lang$test:null)]));
/**
 * Add a WINDOW clause to an SQL statement.
 */
(function (){
sqlingvo.core.window = (function sqlingvo$core$window(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1042 = arguments.length;
var i__23657__auto___1043 = (0);
while(true){
if((i__23657__auto___1043 < len__23656__auto___1042)){
args__23658__auto__.push((arguments[i__23657__auto___1043]));

var G__1044 = (i__23657__auto___1043 + (1));
i__23657__auto___1043 = G__1044;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((0) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((0)),(0),null)):null);
return sqlingvo.core.window.cljs$core$IFn$_invoke$arity$variadic(argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.window;},new cljs.core.Symbol("sqlingvo.core","window","sqlingvo.core/window",(-1131384619),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"window","window",(-1929916235),null),"sqlingvo/core.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(496),(496),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null)], null)),"Add a WINDOW clause to an SQL statement.",(cljs.core.truth_(sqlingvo.core.window)?sqlingvo.core.window.cljs$lang$test:null)])));})()
;

sqlingvo.core.window.cljs$core$IFn$_invoke$arity$variadic = (function (exprs){
return sqlingvo.util.assoc_op.call(null,new cljs.core.Keyword(null,"window","window",(724519534)),new cljs.core.Keyword(null,"definitions","definitions",(167529986)),sqlingvo.expr.parse_exprs.call(null,exprs));
});

sqlingvo.core.window.cljs$lang$maxFixedArity = (0);

sqlingvo.core.window.cljs$lang$applyTo = (function (seq1041){
return sqlingvo.core.window.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1041));
});

new cljs.core.Var(function(){return sqlingvo.core.window;},new cljs.core.Symbol("sqlingvo.core","window","sqlingvo.core/window",(-1131384619),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"window","window",(-1929916235),null),"sqlingvo/core.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(496),(496),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null)], null)),"Add a WINDOW clause to an SQL statement.",(cljs.core.truth_(sqlingvo.core.window)?sqlingvo.core.window.cljs$lang$test:null)]));
/**
 * Add a PRIMARY KEY clause to a table.
 */
(function (){
sqlingvo.core.primary_key = (function sqlingvo$core$primary_key(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1046 = arguments.length;
var i__23657__auto___1047 = (0);
while(true){
if((i__23657__auto___1047 < len__23656__auto___1046)){
args__23658__auto__.push((arguments[i__23657__auto___1047]));

var G__1048 = (i__23657__auto___1047 + (1));
i__23657__auto___1047 = G__1048;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((0) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((0)),(0),null)):null);
return sqlingvo.core.primary_key.cljs$core$IFn$_invoke$arity$variadic(argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.primary_key;},new cljs.core.Symbol("sqlingvo.core","primary-key","sqlingvo.core/primary-key",(1718941764),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"primary-key","primary-key",(-1231923164),null),"sqlingvo/core.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"keys","keys",(-1586012071),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"keys","keys",(-1586012071),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(501),(501),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"keys","keys",(-1586012071),null)], null)),"Add a PRIMARY KEY clause to a table.",(cljs.core.truth_(sqlingvo.core.primary_key)?sqlingvo.core.primary_key.cljs$lang$test:null)])));})()
;

sqlingvo.core.primary_key.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return (function (stmt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,stmt,new cljs.core.Keyword(null,"primary-key","primary-key",(1422512605)),cljs.core.vec.call(null,keys))], null);
});
});

sqlingvo.core.primary_key.cljs$lang$maxFixedArity = (0);

sqlingvo.core.primary_key.cljs$lang$applyTo = (function (seq1045){
return sqlingvo.core.primary_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1045));
});

new cljs.core.Var(function(){return sqlingvo.core.primary_key;},new cljs.core.Symbol("sqlingvo.core","primary-key","sqlingvo.core/primary-key",(1718941764),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"primary-key","primary-key",(-1231923164),null),"sqlingvo/core.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"keys","keys",(-1586012071),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"keys","keys",(-1586012071),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(501),(501),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"keys","keys",(-1586012071),null)], null)),"Add a PRIMARY KEY clause to a table.",(cljs.core.truth_(sqlingvo.core.primary_key)?sqlingvo.core.primary_key.cljs$lang$test:null)]));
/**
 * Build a DROP MATERIALIZED VIEW statement.
 * 
 *   Examples:
 * 
 *  (drop-materialized-view db :order-summary)
 */
(function (){
sqlingvo.core.drop_materialized_view = (function sqlingvo$core$drop_materialized_view(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1052 = arguments.length;
var i__23657__auto___1053 = (0);
while(true){
if((i__23657__auto___1053 < len__23656__auto___1052)){
args__23658__auto__.push((arguments[i__23657__auto___1053]));

var G__1054 = (i__23657__auto___1053 + (1));
i__23657__auto___1053 = G__1054;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((2) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((2)),(0),null)):null);
return sqlingvo.core.drop_materialized_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.drop_materialized_view;},new cljs.core.Symbol("sqlingvo.core","drop-materialized-view","sqlingvo.core/drop-materialized-view",(664589263),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword("style","indent","style/indent",(-39468490)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"drop-materialized-view","drop-materialized-view",(-138578961),null),"sqlingvo/core.cljc",(29),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"view","view",(-1406440955),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"view","view",(-1406440955),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(507),(2),(507),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"view","view",(-1406440955),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Build a DROP MATERIALIZED VIEW statement.\n\n  Examples:\n\n    (drop-materialized-view db :order-summary)",(cljs.core.truth_(sqlingvo.core.drop_materialized_view)?sqlingvo.core.drop_materialized_view.cljs$lang$test:null)])));})()
;

sqlingvo.core.drop_materialized_view.cljs$core$IFn$_invoke$arity$variadic = (function (db,view,body){
if(cljs.core.truth_(sqlingvo.core.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db? db)"));
}

var view__$1 = sqlingvo.expr.parse_table.call(null,view);
return sqlingvo.expr.stmt.call(null,((function (view__$1){
return (function (_){
return sqlingvo.core.chain_state.call(null,body).call(null,sqlingvo.expr.make_node.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"drop-materialized-view","drop-materialized-view",(-1779110488)),new cljs.core.Keyword(null,"db","db",(993250759)),db,new cljs.core.Keyword(null,"children","children",(-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",(1247994814))], null),new cljs.core.Keyword(null,"view","view",(1247994814)),view__$1));
});})(view__$1))
);
});

sqlingvo.core.drop_materialized_view.cljs$lang$maxFixedArity = (2);

sqlingvo.core.drop_materialized_view.cljs$lang$applyTo = (function (seq1049){
var G__1050 = cljs.core.first.call(null,seq1049);
var seq1049__$1 = cljs.core.next.call(null,seq1049);
var G__1051 = cljs.core.first.call(null,seq1049__$1);
var seq1049__$2 = cljs.core.next.call(null,seq1049__$1);
return sqlingvo.core.drop_materialized_view.cljs$core$IFn$_invoke$arity$variadic(G__1050,G__1051,seq1049__$2);
});

new cljs.core.Var(function(){return sqlingvo.core.drop_materialized_view;},new cljs.core.Symbol("sqlingvo.core","drop-materialized-view","sqlingvo.core/drop-materialized-view",(664589263),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword("style","indent","style/indent",(-39468490)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"drop-materialized-view","drop-materialized-view",(-138578961),null),"sqlingvo/core.cljc",(29),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"view","view",(-1406440955),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"view","view",(-1406440955),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(507),(2),(507),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"view","view",(-1406440955),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Build a DROP MATERIALIZED VIEW statement.\n\n  Examples:\n\n    (drop-materialized-view db :order-summary)",(cljs.core.truth_(sqlingvo.core.drop_materialized_view)?sqlingvo.core.drop_materialized_view.cljs$lang$test:null)]));
/**
 * Build a REFRESH MATERIALIZED VIEW statement.
 * 
 *   Examples:
 * 
 *  (refresh-materialized-view db :order-summary)
 */
(function (){
sqlingvo.core.refresh_materialized_view = (function sqlingvo$core$refresh_materialized_view(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1058 = arguments.length;
var i__23657__auto___1059 = (0);
while(true){
if((i__23657__auto___1059 < len__23656__auto___1058)){
args__23658__auto__.push((arguments[i__23657__auto___1059]));

var G__1060 = (i__23657__auto___1059 + (1));
i__23657__auto___1059 = G__1060;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((2) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((2)),(0),null)):null);
return sqlingvo.core.refresh_materialized_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.refresh_materialized_view;},new cljs.core.Symbol("sqlingvo.core","refresh-materialized-view","sqlingvo.core/refresh-materialized-view",(179351762),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword("style","indent","style/indent",(-39468490)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"refresh-materialized-view","refresh-materialized-view",(1519457074),null),"sqlingvo/core.cljc",(32),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"view","view",(-1406440955),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"view","view",(-1406440955),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(526),(2),(526),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"view","view",(-1406440955),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Build a REFRESH MATERIALIZED VIEW statement.\n\n  Examples:\n\n    (refresh-materialized-view db :order-summary)",(cljs.core.truth_(sqlingvo.core.refresh_materialized_view)?sqlingvo.core.refresh_materialized_view.cljs$lang$test:null)])));})()
;

sqlingvo.core.refresh_materialized_view.cljs$core$IFn$_invoke$arity$variadic = (function (db,view,body){
if(cljs.core.truth_(sqlingvo.core.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db? db)"));
}

var view__$1 = sqlingvo.expr.parse_table.call(null,view);
return sqlingvo.expr.stmt.call(null,((function (view__$1){
return (function (_){
return sqlingvo.core.chain_state.call(null,body).call(null,sqlingvo.expr.make_node.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"refresh-materialized-view","refresh-materialized-view",(-121074453)),new cljs.core.Keyword(null,"db","db",(993250759)),db,new cljs.core.Keyword(null,"children","children",(-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",(1247994814))], null),new cljs.core.Keyword(null,"view","view",(1247994814)),view__$1));
});})(view__$1))
);
});

sqlingvo.core.refresh_materialized_view.cljs$lang$maxFixedArity = (2);

sqlingvo.core.refresh_materialized_view.cljs$lang$applyTo = (function (seq1055){
var G__1056 = cljs.core.first.call(null,seq1055);
var seq1055__$1 = cljs.core.next.call(null,seq1055);
var G__1057 = cljs.core.first.call(null,seq1055__$1);
var seq1055__$2 = cljs.core.next.call(null,seq1055__$1);
return sqlingvo.core.refresh_materialized_view.cljs$core$IFn$_invoke$arity$variadic(G__1056,G__1057,seq1055__$2);
});

new cljs.core.Var(function(){return sqlingvo.core.refresh_materialized_view;},new cljs.core.Symbol("sqlingvo.core","refresh-materialized-view","sqlingvo.core/refresh-materialized-view",(179351762),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword("style","indent","style/indent",(-39468490)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"refresh-materialized-view","refresh-materialized-view",(1519457074),null),"sqlingvo/core.cljc",(32),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"view","view",(-1406440955),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"view","view",(-1406440955),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(526),(2),(526),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"view","view",(-1406440955),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Build a REFRESH MATERIALIZED VIEW statement.\n\n  Examples:\n\n    (refresh-materialized-view db :order-summary)",(cljs.core.truth_(sqlingvo.core.refresh_materialized_view)?sqlingvo.core.refresh_materialized_view.cljs$lang$test:null)]));
/**
 * Add a RESTART IDENTITY clause to an SQL statement.
 */
(function (){
sqlingvo.core.restart_identity = (function sqlingvo$core$restart_identity(condition){
return sqlingvo.util.conditional_clause.call(null,new cljs.core.Keyword(null,"restart-identity","restart-identity",(-69684336)),condition);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.restart_identity;},new cljs.core.Symbol("sqlingvo.core","restart-identity","sqlingvo.core/restart-identity",(1841338871),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"restart-identity","restart-identity",(1570847191),null),"sqlingvo/core.cljc",(23),(1),(545),(545),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condition","condition",(-985998117),null)], null)),"Add a RESTART IDENTITY clause to an SQL statement.",(cljs.core.truth_(sqlingvo.core.restart_identity)?sqlingvo.core.restart_identity.cljs$lang$test:null)])));})()
;
/**
 * Add a RESTRICT clause to an SQL statement.
 */
(function (){
sqlingvo.core.restrict = (function sqlingvo$core$restrict(condition){
return sqlingvo.util.conditional_clause.call(null,new cljs.core.Keyword(null,"restrict","restrict",(-1071101511)),condition);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.restrict;},new cljs.core.Symbol("sqlingvo.core","restrict","sqlingvo.core/restrict",(295137312),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"restrict","restrict",(569430016),null),"sqlingvo/core.cljc",(15),(1),(550),(550),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condition","condition",(-985998117),null)], null)),"Add a RESTRICT clause to an SQL statement.",(cljs.core.truth_(sqlingvo.core.restrict)?sqlingvo.core.restrict.cljs$lang$test:null)])));})()
;
/**
 * Add a RETURNING clause to an SQL statement.
 * 
 * Examples:
 * 
 *  (insert db :distributors []
 *    (values [{:did 106 :dname "XYZ Widgets"}])
 *    (returning :*))
 * 
 * Another example:
 * 
 *  (update db :films
 *    {:kind "Dramatic"}
 *    (where '(= :kind "Drama"))
 *    (returning :*))
 */
(function (){
sqlingvo.core.returning = (function sqlingvo$core$returning(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1062 = arguments.length;
var i__23657__auto___1063 = (0);
while(true){
if((i__23657__auto___1063 < len__23656__auto___1062)){
args__23658__auto__.push((arguments[i__23657__auto___1063]));

var G__1064 = (i__23657__auto___1063 + (1));
i__23657__auto___1063 = G__1064;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((0) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((0)),(0),null)):null);
return sqlingvo.core.returning.cljs$core$IFn$_invoke$arity$variadic(argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.returning;},new cljs.core.Symbol("sqlingvo.core","returning","sqlingvo.core/returning",(-1161151654),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"returning","returning",(1252907898),null),"sqlingvo/core.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(555),(555),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null)], null)),"Add a RETURNING clause to an SQL statement.\n\nExamples:\n\n    (insert db :distributors []\n      (values [{:did 106 :dname \"XYZ Widgets\"}])\n      (returning :*))\n\nAnother example:\n\n    (update db :films\n      {:kind \"Dramatic\"}\n      (where '(= :kind \"Drama\"))\n      (returning :*))",(cljs.core.truth_(sqlingvo.core.returning)?sqlingvo.core.returning.cljs$lang$test:null)])));})()
;

sqlingvo.core.returning.cljs$core$IFn$_invoke$arity$variadic = (function (exprs){
return sqlingvo.util.concat_in.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"returning","returning",(-387623629))], null),sqlingvo.expr.parse_exprs.call(null,exprs));
});

sqlingvo.core.returning.cljs$lang$maxFixedArity = (0);

sqlingvo.core.returning.cljs$lang$applyTo = (function (seq1061){
return sqlingvo.core.returning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1061));
});

new cljs.core.Var(function(){return sqlingvo.core.returning;},new cljs.core.Symbol("sqlingvo.core","returning","sqlingvo.core/returning",(-1161151654),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"returning","returning",(1252907898),null),"sqlingvo/core.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(555),(555),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null)], null)),"Add a RETURNING clause to an SQL statement.\n\nExamples:\n\n    (insert db :distributors []\n      (values [{:did 106 :dname \"XYZ Widgets\"}])\n      (returning :*))\n\nAnother example:\n\n    (update db :films\n      {:kind \"Dramatic\"}\n      (where '(= :kind \"Drama\"))\n      (returning :*))",(cljs.core.truth_(sqlingvo.core.returning)?sqlingvo.core.returning.cljs$lang$test:null)]));
/**
 * Build a SELECT statement.
 * 
 *   Examples:
 * 
 *  (select db [1])
 * 
 * All the columns:
 * 
 *  (select db [:*]
 *    (from :continents))
 * 
 * 
 * Only `id` and `name`:
 * 
 *  (select db [:id :name]
 *    (from :continents))
 */
(function (){
sqlingvo.core.select = (function sqlingvo$core$select(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1072 = arguments.length;
var i__23657__auto___1073 = (0);
while(true){
if((i__23657__auto___1073 < len__23656__auto___1072)){
args__23658__auto__.push((arguments[i__23657__auto___1073]));

var G__1074 = (i__23657__auto___1073 + (1));
i__23657__auto___1073 = G__1074;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((2) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((2)),(0),null)):null);
return sqlingvo.core.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.select;},new cljs.core.Symbol("sqlingvo.core","select","sqlingvo.core/select",(-703417722),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword("style","indent","style/indent",(-39468490)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"select","select",(-1506602266),null),"sqlingvo/core.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(573),(2),(573),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Build a SELECT statement.\n\n  Examples:\n\n    (select db [1])\n\nAll the columns:\n\n    (select db [:*]\n      (from :continents))\n\n\nOnly `id` and `name`:\n\n    (select db [:id :name]\n      (from :continents))",(cljs.core.truth_(sqlingvo.core.select)?sqlingvo.core.select.cljs$lang$test:null)])));})()
;

sqlingvo.core.select.cljs$core$IFn$_invoke$arity$variadic = (function (db,exprs,body){
if(cljs.core.truth_(sqlingvo.core.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db? db)"));
}

var vec__1068 = sqlingvo.core.chain_state.call(null,body).call(null,sqlingvo.expr.make_node.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"select","select",(1147833503)),new cljs.core.Keyword(null,"db","db",(993250759)),db,new cljs.core.Keyword(null,"children","children",(-940561982)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"distinct","distinct",(-1788879121)),new cljs.core.Keyword(null,"exprs","exprs",(1795829094))], null),new cljs.core.Keyword(null,"distinct","distinct",(-1788879121)),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"distinct","distinct",(-1788879121)),new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(exprs)))?exprs:null),new cljs.core.Keyword(null,"exprs","exprs",(1795829094)),((cljs.core.sequential_QMARK_.call(null,exprs))?sqlingvo.expr.parse_exprs.call(null,exprs):null)));
var _ = cljs.core.nth.call(null,vec__1068,(0),null);
var select = cljs.core.nth.call(null,vec__1068,(1),null);
return sqlingvo.expr.stmt.call(null,((function (vec__1068,_,select){
return (function (stmt){
return cljs.core.repeat.call(null,(2),(function (){var G__1071 = (((new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(stmt) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(stmt).fqn:null);
switch (G__1071) {
case "insert":
return cljs.core.assoc.call(null,stmt,new cljs.core.Keyword(null,"select","select",(1147833503)),select);

break;
case "select":
return cljs.core.assoc.call(null,stmt,new cljs.core.Keyword(null,"exprs","exprs",(1795829094)),new cljs.core.Keyword(null,"exprs","exprs",(1795829094)).cljs$core$IFn$_invoke$arity$1(select));

break;
default:
return select;

}
})());
});})(vec__1068,_,select))
);
});

sqlingvo.core.select.cljs$lang$maxFixedArity = (2);

sqlingvo.core.select.cljs$lang$applyTo = (function (seq1065){
var G__1066 = cljs.core.first.call(null,seq1065);
var seq1065__$1 = cljs.core.next.call(null,seq1065);
var G__1067 = cljs.core.first.call(null,seq1065__$1);
var seq1065__$2 = cljs.core.next.call(null,seq1065__$1);
return sqlingvo.core.select.cljs$core$IFn$_invoke$arity$variadic(G__1066,G__1067,seq1065__$2);
});

new cljs.core.Var(function(){return sqlingvo.core.select;},new cljs.core.Symbol("sqlingvo.core","select","sqlingvo.core/select",(-703417722),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword("style","indent","style/indent",(-39468490)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"select","select",(-1506602266),null),"sqlingvo/core.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(573),(2),(573),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"exprs","exprs",(-858606675),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Build a SELECT statement.\n\n  Examples:\n\n    (select db [1])\n\nAll the columns:\n\n    (select db [:*]\n      (from :continents))\n\n\nOnly `id` and `name`:\n\n    (select db [:id :name]\n      (from :continents))",(cljs.core.truth_(sqlingvo.core.select)?sqlingvo.core.select.cljs$lang$test:null)]));
/**
 * Add a TEMPORARY clause to an SQL statement.
 */
(function (){
sqlingvo.core.temporary = (function sqlingvo$core$temporary(condition){
return sqlingvo.util.conditional_clause.call(null,new cljs.core.Keyword(null,"temporary","temporary",(1635533692)),condition);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.temporary;},new cljs.core.Symbol("sqlingvo.core","temporary","sqlingvo.core/temporary",(-55940829),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"temporary","temporary",(-1018902077),null),"sqlingvo/core.cljc",(16),(1),(611),(611),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condition","condition",(-985998117),null)], null)),"Add a TEMPORARY clause to an SQL statement.",(cljs.core.truth_(sqlingvo.core.temporary)?sqlingvo.core.temporary.cljs$lang$test:null)])));})()
;
/**
 * Build a TRUNCATE statement.
 * 
 *   Examples:
 * 
 *  (truncate db [:continents])
 * 
 * Another example:
 * 
 *  (truncate db [:continents :countries])
 */
(function (){
sqlingvo.core.truncate = (function sqlingvo$core$truncate(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1079 = arguments.length;
var i__23657__auto___1080 = (0);
while(true){
if((i__23657__auto___1080 < len__23656__auto___1079)){
args__23658__auto__.push((arguments[i__23657__auto___1080]));

var G__1081 = (i__23657__auto___1080 + (1));
i__23657__auto___1080 = G__1081;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((2) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((2)),(0),null)):null);
return sqlingvo.core.truncate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.truncate;},new cljs.core.Symbol("sqlingvo.core","truncate","sqlingvo.core/truncate",(1652903788),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword("style","indent","style/indent",(-39468490)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"truncate","truncate",(313208588),null),"sqlingvo/core.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"tables","tables",(-1319812717),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"tables","tables",(-1319812717),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(616),(2),(616),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"tables","tables",(-1319812717),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Build a TRUNCATE statement.\n\n  Examples:\n\n    (truncate db [:continents])\n\nAnother example:\n\n    (truncate db [:continents :countries])",(cljs.core.truth_(sqlingvo.core.truncate)?sqlingvo.core.truncate.cljs$lang$test:null)])));})()
;

sqlingvo.core.truncate.cljs$core$IFn$_invoke$arity$variadic = (function (db,tables,body){
if(cljs.core.truth_(sqlingvo.core.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db? db)"));
}

var tables__$1 = cljs.core.map.call(null,sqlingvo.expr.parse_table,tables);
return sqlingvo.expr.stmt.call(null,((function (tables__$1){
return (function (_){
return sqlingvo.core.chain_state.call(null,body).call(null,sqlingvo.expr.make_node.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"truncate","truncate",(-1327322939)),new cljs.core.Keyword(null,"db","db",(993250759)),db,new cljs.core.Keyword(null,"children","children",(-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tables","tables",(1334623052))], null),new cljs.core.Keyword(null,"tables","tables",(1334623052)),tables__$1));
});})(tables__$1))
);
});

sqlingvo.core.truncate.cljs$lang$maxFixedArity = (2);

sqlingvo.core.truncate.cljs$lang$applyTo = (function (seq1076){
var G__1077 = cljs.core.first.call(null,seq1076);
var seq1076__$1 = cljs.core.next.call(null,seq1076);
var G__1078 = cljs.core.first.call(null,seq1076__$1);
var seq1076__$2 = cljs.core.next.call(null,seq1076__$1);
return sqlingvo.core.truncate.cljs$core$IFn$_invoke$arity$variadic(G__1077,G__1078,seq1076__$2);
});

new cljs.core.Var(function(){return sqlingvo.core.truncate;},new cljs.core.Symbol("sqlingvo.core","truncate","sqlingvo.core/truncate",(1652903788),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword("style","indent","style/indent",(-39468490)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"truncate","truncate",(313208588),null),"sqlingvo/core.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"tables","tables",(-1319812717),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"tables","tables",(-1319812717),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(616),(2),(616),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"tables","tables",(-1319812717),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Build a TRUNCATE statement.\n\n  Examples:\n\n    (truncate db [:continents])\n\nAnother example:\n\n    (truncate db [:continents :countries])",(cljs.core.truth_(sqlingvo.core.truncate)?sqlingvo.core.truncate.cljs$lang$test:null)]));
/**
 * Build a UNION statement.
 * 
 * Examples:
 * 
 *   (union
 *    (select db [1])
 *    (select db [2]))
 * 
 * Another example:
 * 
 *   (union
 *    {:all true}
 *    (select db [1])
 *    (select db [2]))
 */
(function (){
sqlingvo.core.union = (function sqlingvo$core$union(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1083 = arguments.length;
var i__23657__auto___1084 = (0);
while(true){
if((i__23657__auto___1084 < len__23656__auto___1083)){
args__23658__auto__.push((arguments[i__23657__auto___1084]));

var G__1085 = (i__23657__auto___1084 + (1));
i__23657__auto___1084 = G__1085;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((0) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((0)),(0),null)):null);
return sqlingvo.core.union.cljs$core$IFn$_invoke$arity$variadic(argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.union;},new cljs.core.Symbol("sqlingvo.core","union","sqlingvo.core/union",(828721026),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"union","union",(-511498270),null),"sqlingvo/core.cljc",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(639),(639),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Build a UNION statement.\n\n   Examples:\n\n     (union\n      (select db [1])\n      (select db [2]))\n\nAnother example:\n\n     (union\n      {:all true}\n      (select db [1])\n      (select db [2]))",(cljs.core.truth_(sqlingvo.core.union)?sqlingvo.core.union.cljs$lang$test:null)])));})()
;

sqlingvo.core.union.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return sqlingvo.core.make_set_op.call(null,new cljs.core.Keyword(null,"union","union",(2142937499)),args);
});

sqlingvo.core.union.cljs$lang$maxFixedArity = (0);

sqlingvo.core.union.cljs$lang$applyTo = (function (seq1082){
return sqlingvo.core.union.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1082));
});

new cljs.core.Var(function(){return sqlingvo.core.union;},new cljs.core.Symbol("sqlingvo.core","union","sqlingvo.core/union",(828721026),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"union","union",(-511498270),null),"sqlingvo/core.cljc",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(639),(639),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Build a UNION statement.\n\n   Examples:\n\n     (union\n      (select db [1])\n      (select db [2]))\n\nAnother example:\n\n     (union\n      {:all true}\n      (select db [1])\n      (select db [2]))",(cljs.core.truth_(sqlingvo.core.union)?sqlingvo.core.union.cljs$lang$test:null)]));
/**
 * Build a UPDATE statement.
 * 
 *   Examples:
 * 
 *  (update db :films {:kind "Dramatic"}
 *    (where '(= :kind "Drama")))
 */
(function (){
sqlingvo.core.update = (function sqlingvo$core$update(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1090 = arguments.length;
var i__23657__auto___1091 = (0);
while(true){
if((i__23657__auto___1091 < len__23656__auto___1090)){
args__23658__auto__.push((arguments[i__23657__auto___1091]));

var G__1092 = (i__23657__auto___1091 + (1));
i__23657__auto___1091 = G__1092;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((3) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((3)),(0),null)):null);
return sqlingvo.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.update;},new cljs.core.Symbol("sqlingvo.core","update","sqlingvo.core/update",(1882939699),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword("style","indent","style/indent",(-39468490)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"update","update",(-1608859373),null),"sqlingvo/core.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(657),(2),(657),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Build a UPDATE statement.\n\n  Examples:\n\n    (update db :films {:kind \"Dramatic\"}\n      (where '(= :kind \"Drama\")))",(cljs.core.truth_(sqlingvo.core.update)?sqlingvo.core.update.cljs$lang$test:null)])));})()
;

sqlingvo.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (db,table,row,body){
if(cljs.core.truth_(sqlingvo.core.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db? db)"));
}

var table__$1 = sqlingvo.expr.parse_table.call(null,table);
var exprs = ((cljs.core.sequential_QMARK_.call(null,row))?sqlingvo.expr.parse_exprs.call(null,row):null);
var row__$1 = ((cljs.core.map_QMARK_.call(null,row))?sqlingvo.expr.parse_map_expr.call(null,row):null);
return sqlingvo.expr.stmt.call(null,((function (table__$1,exprs,row__$1){
return (function (_){
return sqlingvo.core.chain_state.call(null,body).call(null,sqlingvo.expr.make_node.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"update","update",(1045576396)),new cljs.core.Keyword(null,"db","db",(993250759)),db,new cljs.core.Keyword(null,"children","children",(-940561982)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",(-564943036)),new cljs.core.Keyword(null,"exprs","exprs",(1795829094)),new cljs.core.Keyword(null,"row","row",(-570139521))], null),new cljs.core.Keyword(null,"table","table",(-564943036)),table__$1,new cljs.core.Keyword(null,"exprs","exprs",(1795829094)),exprs,new cljs.core.Keyword(null,"row","row",(-570139521)),row__$1));
});})(table__$1,exprs,row__$1))
);
});

sqlingvo.core.update.cljs$lang$maxFixedArity = (3);

sqlingvo.core.update.cljs$lang$applyTo = (function (seq1086){
var G__1087 = cljs.core.first.call(null,seq1086);
var seq1086__$1 = cljs.core.next.call(null,seq1086);
var G__1088 = cljs.core.first.call(null,seq1086__$1);
var seq1086__$2 = cljs.core.next.call(null,seq1086__$1);
var G__1089 = cljs.core.first.call(null,seq1086__$2);
var seq1086__$3 = cljs.core.next.call(null,seq1086__$2);
return sqlingvo.core.update.cljs$core$IFn$_invoke$arity$variadic(G__1087,G__1088,G__1089,seq1086__$3);
});

new cljs.core.Var(function(){return sqlingvo.core.update;},new cljs.core.Symbol("sqlingvo.core","update","sqlingvo.core/update",(1882939699),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword("style","indent","style/indent",(-39468490)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"update","update",(-1608859373),null),"sqlingvo/core.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(657),(2),(657),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Build a UPDATE statement.\n\n  Examples:\n\n    (update db :films {:kind \"Dramatic\"}\n      (where '(= :kind \"Drama\")))",(cljs.core.truth_(sqlingvo.core.update)?sqlingvo.core.update.cljs$lang$test:null)]));
/**
 * Return a VALUES statement or clause.
 * 
 *   Examples:
 * 
 * 
 *  (values db [[1 "one"] [2 "two"] [3 "three"]])
 * 
 * With insert:
 * 
 *  (insert db :distributors []
 *    (values [{:did 106 :dname "XYZ Widgets"}]))
 */
(function (){
sqlingvo.core.values = (function sqlingvo$core$values(var_args){
var args1093 = [];
var len__23656__auto___1097 = arguments.length;
var i__23657__auto___1098 = (0);
while(true){
if((i__23657__auto___1098 < len__23656__auto___1097)){
args1093.push((arguments[i__23657__auto___1098]));

var G__1099 = (i__23657__auto___1098 + (1));
i__23657__auto___1098 = G__1099;
continue;
} else {
}
break;
}

var G__1095 = args1093.length;
switch (G__1095) {
case (1):
return sqlingvo.core.values.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return sqlingvo.core.values.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1093.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return sqlingvo.core.values;},new cljs.core.Symbol("sqlingvo.core","values","sqlingvo.core/values",(1201456347),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"values","values",(2013177083),null),"sqlingvo/core.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vals","vals",(-1886377036),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"vals","vals",(-1886377036),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vals","vals",(-1886377036),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"vals","vals",(-1886377036),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(681),(681),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vals","vals",(-1886377036),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"vals","vals",(-1886377036),null)], null)),"Return a VALUES statement or clause.\n\n  Examples:\n\n\n    (values db [[1 \"one\"] [2 \"two\"] [3 \"three\"]])\n\nWith insert:\n\n    (insert db :distributors []\n      (values [{:did 106 :dname \"XYZ Widgets\"}]))",(cljs.core.truth_(sqlingvo.core.values)?sqlingvo.core.values.cljs$lang$test:null)])));})()
;

sqlingvo.core.values.cljs$core$IFn$_invoke$arity$1 = (function (vals){
return sqlingvo.core.values.call(null,null,vals);
});

sqlingvo.core.values.cljs$core$IFn$_invoke$arity$2 = (function (db,vals){
return sqlingvo.expr.stmt.call(null,(function (stmt){
var node = ((cljs.core._EQ_.call(null,vals,new cljs.core.Keyword(null,"default","default",(-1987822328))))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",(993250759)),db,new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"default","default",(-1987822328)),new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"values","values",(372645556))], null):((cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,vals))?new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db","db",(993250759)),db,new cljs.core.Keyword(null,"columns","columns",(1998437288)),(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"columns","columns",(1998437288)).cljs$core$IFn$_invoke$arity$1(stmt)))?new cljs.core.Keyword(null,"columns","columns",(1998437288)).cljs$core$IFn$_invoke$arity$1(stmt):cljs.core.mapv.call(null,sqlingvo.expr.parse_column,cljs.core.apply.call(null,cljs.core.sorted_set,cljs.core.mapcat.call(null,cljs.core.keys,vals)))),new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"records","records",(1326822832)),new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"values","values",(372645556)),new cljs.core.Keyword(null,"values","values",(372645556)),cljs.core.mapv.call(null,sqlingvo.expr.parse_map_expr,vals)], null):new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db","db",(993250759)),db,new cljs.core.Keyword(null,"columns","columns",(1998437288)),new cljs.core.Keyword(null,"columns","columns",(1998437288)).cljs$core$IFn$_invoke$arity$1(stmt),new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"exprs","exprs",(1795829094)),new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"values","values",(372645556)),new cljs.core.Keyword(null,"values","values",(372645556)),cljs.core.mapv.call(null,sqlingvo.expr.parse_exprs,vals)], null)
));
return cljs.core.repeat.call(null,(2),(function (){var G__1096 = (((new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(stmt) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(stmt).fqn:null);
switch (G__1096) {
case "insert":
return cljs.core.assoc.call(null,stmt,new cljs.core.Keyword(null,"values","values",(372645556)),node);

break;
default:
return node;

}
})());
}));
});

sqlingvo.core.values.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return sqlingvo.core.values;},new cljs.core.Symbol("sqlingvo.core","values","sqlingvo.core/values",(1201456347),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"values","values",(2013177083),null),"sqlingvo/core.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vals","vals",(-1886377036),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"vals","vals",(-1886377036),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vals","vals",(-1886377036),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"vals","vals",(-1886377036),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(681),(681),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vals","vals",(-1886377036),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"vals","vals",(-1886377036),null)], null)),"Return a VALUES statement or clause.\n\n  Examples:\n\n\n    (values db [[1 \"one\"] [2 \"two\"] [3 \"three\"]])\n\nWith insert:\n\n    (insert db :distributors []\n      (values [{:did 106 :dname \"XYZ Widgets\"}]))",(cljs.core.truth_(sqlingvo.core.values)?sqlingvo.core.values.cljs$lang$test:null)]));
/**
 * Add a WHERE clause to an SQL statement.
 * 
 *   Examples:
 * 
 *  (select db [1]
 *    (where '(in 1 (1 2 3))))
 * 
 * Another example:
 * 
 *  (select db [*]
 *    (from :continents)
 *    (where '(= :name "Europe")))
 * 
 * Another example:
 * 
 *  (delete db :continents
 *    (where '(= :id 1)))
 */
(function (){
sqlingvo.core.where = (function sqlingvo$core$where(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1108 = arguments.length;
var i__23657__auto___1109 = (0);
while(true){
if((i__23657__auto___1109 < len__23656__auto___1108)){
args__23658__auto__.push((arguments[i__23657__auto___1109]));

var G__1110 = (i__23657__auto___1109 + (1));
i__23657__auto___1109 = G__1110;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((1) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((1)),(0),null)):null);
return sqlingvo.core.where.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.where;},new cljs.core.Symbol("sqlingvo.core","where","sqlingvo.core/where",(-1752839638),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"where","where",(-404264438),null),"sqlingvo/core.cljc",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combine","combine",(207448214),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combine","combine",(207448214),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(724),(724),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combine","combine",(207448214),null)], null)], null)),"Add a WHERE clause to an SQL statement.\n\n  Examples:\n\n    (select db [1]\n      (where '(in 1 (1 2 3))))\n\nAnother example:\n\n    (select db [*]\n      (from :continents)\n      (where '(= :name \"Europe\")))\n\nAnother example:\n\n    (delete db :continents\n      (where '(= :id 1)))",(cljs.core.truth_(sqlingvo.core.where)?sqlingvo.core.where.cljs$lang$test:null)])));})()
;

sqlingvo.core.where.cljs$core$IFn$_invoke$arity$variadic = (function (condition,p__1104){
var vec__1105 = p__1104;
var combine = cljs.core.nth.call(null,vec__1105,(0),null);
return sqlingvo.util.build_condition.call(null,new cljs.core.Keyword(null,"where","where",(-2044795965)),condition,combine);
});

sqlingvo.core.where.cljs$lang$maxFixedArity = (1);

sqlingvo.core.where.cljs$lang$applyTo = (function (seq1102){
var G__1103 = cljs.core.first.call(null,seq1102);
var seq1102__$1 = cljs.core.next.call(null,seq1102);
return sqlingvo.core.where.cljs$core$IFn$_invoke$arity$variadic(G__1103,seq1102__$1);
});

new cljs.core.Var(function(){return sqlingvo.core.where;},new cljs.core.Symbol("sqlingvo.core","where","sqlingvo.core/where",(-1752839638),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"where","where",(-404264438),null),"sqlingvo/core.cljc",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combine","combine",(207448214),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combine","combine",(207448214),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(724),(724),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combine","combine",(207448214),null)], null)], null)),"Add a WHERE clause to an SQL statement.\n\n  Examples:\n\n    (select db [1]\n      (where '(in 1 (1 2 3))))\n\nAnother example:\n\n    (select db [*]\n      (from :continents)\n      (where '(= :name \"Europe\")))\n\nAnother example:\n\n    (delete db :continents\n      (where '(= :id 1)))",(cljs.core.truth_(sqlingvo.core.where)?sqlingvo.core.where.cljs$lang$test:null)]));
/**
 * Build a WITH (common table expressions) query.
 */
(function (){
sqlingvo.core.with$ = (function sqlingvo$core$with(db,bindings,query){
if(cljs.core.truth_(sqlingvo.core.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db? db)"));
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("The WITH bindings must be even."),cljs.core.str("\n"),cljs.core.str("(even? (count bindings))")].join('')));
}

var bindings__$1 = cljs.core.map.call(null,(function (p__1115){
var vec__1116 = p__1115;
var name = cljs.core.nth.call(null,vec__1116,(0),null);
var stmt = cljs.core.nth.call(null,vec__1116,(1),null);
return (new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.call(null,name),sqlingvo.core.ast.call(null,stmt)],null));
}),cljs.core.partition.call(null,(2),bindings));
var query__$1 = sqlingvo.core.ast.call(null,query);
var node = sqlingvo.expr.make_node.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"with","with",(-1536296876)),new cljs.core.Keyword(null,"db","db",(993250759)),db,new cljs.core.Keyword(null,"children","children",(-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",(1271397192))], null),new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),bindings__$1,new cljs.core.Keyword(null,"query","query",(-1288509510)),query__$1);
return sqlingvo.expr.stmt.call(null,((function (bindings__$1,query__$1,node){
return (function (stmt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,(cljs.core.truth_(stmt)?cljs.core.assoc.call(null,stmt,new cljs.core.Keyword(null,"with","with",(-1536296876)),node):node)], null);
});})(bindings__$1,query__$1,node))
);
}); return (
new cljs.core.Var(function(){return sqlingvo.core.with$;},new cljs.core.Symbol("sqlingvo.core","with","sqlingvo.core/with",(-699081029),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword("style","indent","style/indent",(-39468490)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"with","with",(104234651),null),"sqlingvo/core.cljc",(11),(1),(745),(2),(745),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),"Build a WITH (common table expressions) query.",(cljs.core.truth_(sqlingvo.core.with$)?sqlingvo.core.with$.cljs$lang$test:null)])));})()
;
/**
 * Compile `stmt` into a clojure.java.jdbc compatible vector.
 */
(function (){
sqlingvo.core.sql = (function sqlingvo$core$sql(stmt){
return sqlingvo.compiler.compile_stmt.call(null,sqlingvo.core.ast.call(null,stmt));
}); return (
new cljs.core.Var(function(){return sqlingvo.core.sql;},new cljs.core.Symbol("sqlingvo.core","sql","sqlingvo.core/sql",(2085092921),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.core","sqlingvo.core",(-913723678),null),new cljs.core.Symbol(null,"sql","sql",(-1402986983),null),"sqlingvo/core.cljc",(10),(1),(768),(768),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stmt","stmt",(1915627230),null)], null)),"Compile `stmt` into a clojure.java.jdbc compatible vector.",(cljs.core.truth_(sqlingvo.core.sql)?sqlingvo.core.sql.cljs$lang$test:null)])));})()
;
sqlingvo.expr.Stmt.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

sqlingvo.expr.Stmt.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (stmt,writer,opts){
var stmt__$1 = this;
return cljs.core._pr_writer.call(null,sqlingvo.core.sql.call(null,stmt__$1),writer,opts);
});
cljs.core._add_method.call(null,cljs.pprint.simple_dispatch,sqlingvo.expr.Stmt,(function (stmt){
return cljs.core.pr.call(null,sqlingvo.core.sql.call(null,stmt));
}));
