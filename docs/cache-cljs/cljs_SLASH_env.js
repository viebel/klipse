// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants false}
goog.provide('cljs.env');
goog.require('cljs.core');
cljs.env._STAR_compiler_STAR_ = null;
cljs.env.default_compiler_env = (function cljs$env$default_compiler_env(var_args){
var args16339 = [];
var len__10660__auto___16343 = arguments.length;
var i__10661__auto___16344 = (0);
while(true){
if((i__10661__auto___16344 < len__10660__auto___16343)){
args16339.push((arguments[i__10661__auto___16344]));

var G__16345 = (i__10661__auto___16344 + (1));
i__10661__auto___16344 = G__16345;
continue;
} else {
}
break;
}

var G__16341 = args16339.length;
switch (G__16341) {
case 0:
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16339.length)].join('')));

}
});

cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1 = (function (options){
var G__16342 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)], null)], null),new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.analyzer","data-readers","cljs.analyzer/data-readers",1778544933),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239),null,new cljs.core.Keyword(null,"options","options",99638489),options], null)], 0));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16342) : cljs.core.atom.call(null,G__16342));
});

cljs.env.default_compiler_env.cljs$lang$maxFixedArity = 1;

