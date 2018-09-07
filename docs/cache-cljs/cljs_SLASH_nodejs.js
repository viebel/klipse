goog.provide("cljs.nodejs");
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2988__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__2988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2989__i = 0, G__2989__a = new Array(arguments.length -  0);
while (G__2989__i < G__2989__a.length) {G__2989__a[G__2989__i] = arguments[G__2989__i + 0]; ++G__2989__i;}
  args = new cljs.core.IndexedSeq(G__2989__a,0,null);
} 
return G__2988__delegate.call(this,args);};
G__2988.cljs$lang$maxFixedArity = 0;
G__2988.cljs$lang$applyTo = (function (arglist__2990){
var args = cljs.core.seq(arglist__2990);
return G__2988__delegate(args);
});
G__2988.cljs$core$IFn$_invoke$arity$variadic = G__2988__delegate;
return G__2988;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2991__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__2991 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2992__i = 0, G__2992__a = new Array(arguments.length -  0);
while (G__2992__i < G__2992__a.length) {G__2992__a[G__2992__i] = arguments[G__2992__i + 0]; ++G__2992__i;}
  args = new cljs.core.IndexedSeq(G__2992__a,0,null);
} 
return G__2991__delegate.call(this,args);};
G__2991.cljs$lang$maxFixedArity = 0;
G__2991.cljs$lang$applyTo = (function (arglist__2993){
var args = cljs.core.seq(arglist__2993);
return G__2991__delegate(args);
});
G__2991.cljs$core$IFn$_invoke$arity$variadic = G__2991__delegate;
return G__2991;
})()
;

return null;
});
