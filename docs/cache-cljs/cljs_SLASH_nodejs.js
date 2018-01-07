goog.provide("cljs.nodejs");
(function (){
cljs.nodejs.require = require; return (
new cljs.core.Var(function(){return cljs.nodejs.require;},new cljs.core.Symbol("cljs.nodejs","require","cljs.nodejs/require",(1599359961),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.nodejs","cljs.nodejs",(1856951313),null),new cljs.core.Symbol(null,"require","require",(1172530194),null),"cljs/nodejs.cljs",(13),(1),(16),(16),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.nodejs.require)?cljs.nodejs.require.cljs$lang$test:null)])));})()
;
(function (){
cljs.nodejs.process = process; return (
new cljs.core.Var(function(){return cljs.nodejs.process;},new cljs.core.Symbol("cljs.nodejs","process","cljs.nodejs/process",(889227642),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.nodejs","cljs.nodejs",(1856951313),null),new cljs.core.Symbol(null,"process","process",(-1011242831),null),"cljs/nodejs.cljs",(13),(1),(17),(17),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.nodejs.process)?cljs.nodejs.process.cljs$lang$test:null)])));})()
;
(function (){
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2654__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__2654 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2655__i = 0, G__2655__a = new Array(arguments.length -  0);
while (G__2655__i < G__2655__a.length) {G__2655__a[G__2655__i] = arguments[G__2655__i + 0]; ++G__2655__i;}
  args = new cljs.core.IndexedSeq(G__2655__a,0,null);
} 
return G__2654__delegate.call(this,args);};
G__2654.cljs$lang$maxFixedArity = 0;
G__2654.cljs$lang$applyTo = (function (arglist__2656){
var args = cljs.core.seq(arglist__2656);
return G__2654__delegate(args);
});
G__2654.cljs$core$IFn$_invoke$arity$variadic = G__2654__delegate;
return G__2654;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2657__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__2657 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2658__i = 0, G__2658__a = new Array(arguments.length -  0);
while (G__2658__i < G__2658__a.length) {G__2658__a[G__2658__i] = arguments[G__2658__i + 0]; ++G__2658__i;}
  args = new cljs.core.IndexedSeq(G__2658__a,0,null);
} 
return G__2657__delegate.call(this,args);};
G__2657.cljs$lang$maxFixedArity = 0;
G__2657.cljs$lang$applyTo = (function (arglist__2659){
var args = cljs.core.seq(arglist__2659);
return G__2657__delegate(args);
});
G__2657.cljs$core$IFn$_invoke$arity$variadic = G__2657__delegate;
return G__2657;
})()
;

return null;
}); return (
new cljs.core.Var(function(){return cljs.nodejs.enable_util_print_BANG_;},new cljs.core.Symbol("cljs.nodejs","enable-util-print!","cljs.nodejs/enable-util-print!",(1729524168),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.nodejs","cljs.nodejs",(1856951313),null),new cljs.core.Symbol(null,"enable-util-print!","enable-util-print!",(1818173071),null),"cljs/nodejs.cljs",(25),(1),(19),(19),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs.nodejs.enable_util_print_BANG_)?cljs.nodejs.enable_util_print_BANG_.cljs$lang$test:null)])));})()
;
