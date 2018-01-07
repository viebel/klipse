// Compiled by ClojureScript 1.9.908 {:static-fns true, :fn-invoke-direct true, :optimize-constants false}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f());
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__9423__auto__,writer__9424__auto__,opt__9425__auto__){
return cljs.core._write(writer__9424__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16573 = arguments.length;
var i__10030__auto___16574 = (0);
while(true){
if((i__10030__auto___16574 < len__10029__auto___16573)){
args__10036__auto__.push((arguments[i__10030__auto___16574]));

var G__16575 = (i__10030__auto___16574 + (1));
i__10030__auto___16574 = G__16575;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq16572){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16572));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16580 = arguments.length;
var i__10030__auto___16581 = (0);
while(true){
if((i__10030__auto___16581 < len__10029__auto___16580)){
args__10036__auto__.push((arguments[i__10030__auto___16581]));

var G__16582 = (i__10030__auto___16581 + (1));
i__10030__auto___16581 = G__16582;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq16576){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16576));
});

var g_QMARK__16586 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_16587 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__16586){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__16586))
,null));
var mkg_16588 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__16586,g_16587){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__16586,g_16587))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__16586,g_16587,mkg_16588){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
var fexpr__16583 = cljs.core.deref(g_QMARK__16586);
return (fexpr__16583.cljs$core$IFn$_invoke$arity$1 ? fexpr__16583.cljs$core$IFn$_invoke$arity$1(x) : fexpr__16583(x));
});})(g_QMARK__16586,g_16587,mkg_16588))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__16586,g_16587,mkg_16588){
return (function cljs$spec$gen$alpha$generator(gfn){
var fexpr__16584 = cljs.core.deref(mkg_16588);
return (fexpr__16584.cljs$core$IFn$_invoke$arity$1 ? fexpr__16584.cljs$core$IFn$_invoke$arity$1(gfn) : fexpr__16584(gfn));
});})(g_QMARK__16586,g_16587,mkg_16588))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__16586,g_16587,mkg_16588){
return (function cljs$spec$gen$alpha$generate(generator){
var fexpr__16585 = cljs.core.deref(g_16587);
return (fexpr__16585.cljs$core$IFn$_invoke$arity$1 ? fexpr__16585.cljs$core$IFn$_invoke$arity$1(generator) : fexpr__16585(generator));
});})(g_QMARK__16586,g_16587,mkg_16588))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator((function (rnd,size){
var fexpr__16595 = new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(gfnd));
return (fexpr__16595.cljs$core$IFn$_invoke$arity$2 ? fexpr__16595.cljs$core$IFn$_invoke$arity$2(rnd,size) : fexpr__16595(rnd,size));
}));
});
var g__14771__auto___16741 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__14771__auto___16741){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16742 = arguments.length;
var i__10030__auto___16743 = (0);
while(true){
if((i__10030__auto___16743 < len__10029__auto___16742)){
args__10036__auto__.push((arguments[i__10030__auto___16743]));

var G__16744 = (i__10030__auto___16743 + (1));
i__10030__auto___16743 = G__16744;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14771__auto___16741))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14771__auto___16741){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14771__auto___16741),args);
});})(g__14771__auto___16741))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__14771__auto___16741){
return (function (seq16596){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16596));
});})(g__14771__auto___16741))
;


var g__14771__auto___16745 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__14771__auto___16745){
return (function cljs$spec$gen$alpha$list(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16746 = arguments.length;
var i__10030__auto___16747 = (0);
while(true){
if((i__10030__auto___16747 < len__10029__auto___16746)){
args__10036__auto__.push((arguments[i__10030__auto___16747]));

var G__16748 = (i__10030__auto___16747 + (1));
i__10030__auto___16747 = G__16748;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14771__auto___16745))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14771__auto___16745){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14771__auto___16745),args);
});})(g__14771__auto___16745))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__14771__auto___16745){
return (function (seq16601){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16601));
});})(g__14771__auto___16745))
;


var g__14771__auto___16749 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__14771__auto___16749){
return (function cljs$spec$gen$alpha$map(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16750 = arguments.length;
var i__10030__auto___16751 = (0);
while(true){
if((i__10030__auto___16751 < len__10029__auto___16750)){
args__10036__auto__.push((arguments[i__10030__auto___16751]));

var G__16752 = (i__10030__auto___16751 + (1));
i__10030__auto___16751 = G__16752;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14771__auto___16749))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14771__auto___16749){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14771__auto___16749),args);
});})(g__14771__auto___16749))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__14771__auto___16749){
return (function (seq16602){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16602));
});})(g__14771__auto___16749))
;


var g__14771__auto___16753 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__14771__auto___16753){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16754 = arguments.length;
var i__10030__auto___16755 = (0);
while(true){
if((i__10030__auto___16755 < len__10029__auto___16754)){
args__10036__auto__.push((arguments[i__10030__auto___16755]));

var G__16756 = (i__10030__auto___16755 + (1));
i__10030__auto___16755 = G__16756;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14771__auto___16753))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14771__auto___16753){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14771__auto___16753),args);
});})(g__14771__auto___16753))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__14771__auto___16753){
return (function (seq16606){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16606));
});})(g__14771__auto___16753))
;


var g__14771__auto___16757 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__14771__auto___16757){
return (function cljs$spec$gen$alpha$set(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16758 = arguments.length;
var i__10030__auto___16759 = (0);
while(true){
if((i__10030__auto___16759 < len__10029__auto___16758)){
args__10036__auto__.push((arguments[i__10030__auto___16759]));

var G__16760 = (i__10030__auto___16759 + (1));
i__10030__auto___16759 = G__16760;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14771__auto___16757))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14771__auto___16757){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14771__auto___16757),args);
});})(g__14771__auto___16757))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__14771__auto___16757){
return (function (seq16615){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16615));
});})(g__14771__auto___16757))
;


var g__14771__auto___16763 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__14771__auto___16763){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16766 = arguments.length;
var i__10030__auto___16767 = (0);
while(true){
if((i__10030__auto___16767 < len__10029__auto___16766)){
args__10036__auto__.push((arguments[i__10030__auto___16767]));

var G__16768 = (i__10030__auto___16767 + (1));
i__10030__auto___16767 = G__16768;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14771__auto___16763))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14771__auto___16763){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14771__auto___16763),args);
});})(g__14771__auto___16763))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__14771__auto___16763){
return (function (seq16620){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16620));
});})(g__14771__auto___16763))
;


var g__14771__auto___16769 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__14771__auto___16769){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16770 = arguments.length;
var i__10030__auto___16771 = (0);
while(true){
if((i__10030__auto___16771 < len__10029__auto___16770)){
args__10036__auto__.push((arguments[i__10030__auto___16771]));

var G__16772 = (i__10030__auto___16771 + (1));
i__10030__auto___16771 = G__16772;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14771__auto___16769))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14771__auto___16769){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14771__auto___16769),args);
});})(g__14771__auto___16769))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__14771__auto___16769){
return (function (seq16635){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16635));
});})(g__14771__auto___16769))
;


var g__14771__auto___16774 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__14771__auto___16774){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16775 = arguments.length;
var i__10030__auto___16776 = (0);
while(true){
if((i__10030__auto___16776 < len__10029__auto___16775)){
args__10036__auto__.push((arguments[i__10030__auto___16776]));

var G__16777 = (i__10030__auto___16776 + (1));
i__10030__auto___16776 = G__16777;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14771__auto___16774))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14771__auto___16774){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14771__auto___16774),args);
});})(g__14771__auto___16774))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__14771__auto___16774){
return (function (seq16642){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16642));
});})(g__14771__auto___16774))
;


var g__14771__auto___16778 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__14771__auto___16778){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16779 = arguments.length;
var i__10030__auto___16780 = (0);
while(true){
if((i__10030__auto___16780 < len__10029__auto___16779)){
args__10036__auto__.push((arguments[i__10030__auto___16780]));

var G__16781 = (i__10030__auto___16780 + (1));
i__10030__auto___16780 = G__16781;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14771__auto___16778))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14771__auto___16778){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14771__auto___16778),args);
});})(g__14771__auto___16778))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__14771__auto___16778){
return (function (seq16652){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16652));
});})(g__14771__auto___16778))
;


var g__14771__auto___16782 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__14771__auto___16782){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16783 = arguments.length;
var i__10030__auto___16784 = (0);
while(true){
if((i__10030__auto___16784 < len__10029__auto___16783)){
args__10036__auto__.push((arguments[i__10030__auto___16784]));

var G__16785 = (i__10030__auto___16784 + (1));
i__10030__auto___16784 = G__16785;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14771__auto___16782))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14771__auto___16782){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14771__auto___16782),args);
});})(g__14771__auto___16782))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__14771__auto___16782){
return (function (seq16667){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16667));
});})(g__14771__auto___16782))
;


var g__14771__auto___16787 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__14771__auto___16787){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16789 = arguments.length;
var i__10030__auto___16790 = (0);
while(true){
if((i__10030__auto___16790 < len__10029__auto___16789)){
args__10036__auto__.push((arguments[i__10030__auto___16790]));

var G__16791 = (i__10030__auto___16790 + (1));
i__10030__auto___16790 = G__16791;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14771__auto___16787))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14771__auto___16787){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14771__auto___16787),args);
});})(g__14771__auto___16787))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__14771__auto___16787){
return (function (seq16677){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16677));
});})(g__14771__auto___16787))
;


var g__14771__auto___16793 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__14771__auto___16793){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16795 = arguments.length;
var i__10030__auto___16796 = (0);
while(true){
if((i__10030__auto___16796 < len__10029__auto___16795)){
args__10036__auto__.push((arguments[i__10030__auto___16796]));

var G__16797 = (i__10030__auto___16796 + (1));
i__10030__auto___16796 = G__16797;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14771__auto___16793))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14771__auto___16793){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14771__auto___16793),args);
});})(g__14771__auto___16793))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__14771__auto___16793){
return (function (seq16694){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16694));
});})(g__14771__auto___16793))
;


var g__14771__auto___16800 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__14771__auto___16800){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16801 = arguments.length;
var i__10030__auto___16802 = (0);
while(true){
if((i__10030__auto___16802 < len__10029__auto___16801)){
args__10036__auto__.push((arguments[i__10030__auto___16802]));

var G__16803 = (i__10030__auto___16802 + (1));
i__10030__auto___16802 = G__16803;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14771__auto___16800))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14771__auto___16800){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14771__auto___16800),args);
});})(g__14771__auto___16800))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__14771__auto___16800){
return (function (seq16702){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16702));
});})(g__14771__auto___16800))
;


var g__14771__auto___16805 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__14771__auto___16805){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16806 = arguments.length;
var i__10030__auto___16807 = (0);
while(true){
if((i__10030__auto___16807 < len__10029__auto___16806)){
args__10036__auto__.push((arguments[i__10030__auto___16807]));

var G__16809 = (i__10030__auto___16807 + (1));
i__10030__auto___16807 = G__16809;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14771__auto___16805))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14771__auto___16805){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14771__auto___16805),args);
});})(g__14771__auto___16805))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__14771__auto___16805){
return (function (seq16708){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16708));
});})(g__14771__auto___16805))
;


var g__14771__auto___16811 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__14771__auto___16811){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16816 = arguments.length;
var i__10030__auto___16817 = (0);
while(true){
if((i__10030__auto___16817 < len__10029__auto___16816)){
args__10036__auto__.push((arguments[i__10030__auto___16817]));

var G__16818 = (i__10030__auto___16817 + (1));
i__10030__auto___16817 = G__16818;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14771__auto___16811))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14771__auto___16811){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14771__auto___16811),args);
});})(g__14771__auto___16811))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__14771__auto___16811){
return (function (seq16713){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16713));
});})(g__14771__auto___16811))
;


var g__14771__auto___16826 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__14771__auto___16826){
return (function cljs$spec$gen$alpha$return(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16830 = arguments.length;
var i__10030__auto___16831 = (0);
while(true){
if((i__10030__auto___16831 < len__10029__auto___16830)){
args__10036__auto__.push((arguments[i__10030__auto___16831]));

var G__16832 = (i__10030__auto___16831 + (1));
i__10030__auto___16831 = G__16832;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14771__auto___16826))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14771__auto___16826){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14771__auto___16826),args);
});})(g__14771__auto___16826))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__14771__auto___16826){
return (function (seq16720){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16720));
});})(g__14771__auto___16826))
;


var g__14771__auto___16834 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__14771__auto___16834){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16844 = arguments.length;
var i__10030__auto___16845 = (0);
while(true){
if((i__10030__auto___16845 < len__10029__auto___16844)){
args__10036__auto__.push((arguments[i__10030__auto___16845]));

var G__16847 = (i__10030__auto___16845 + (1));
i__10030__auto___16845 = G__16847;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14771__auto___16834))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14771__auto___16834){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14771__auto___16834),args);
});})(g__14771__auto___16834))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__14771__auto___16834){
return (function (seq16726){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16726));
});})(g__14771__auto___16834))
;


var g__14771__auto___16859 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__14771__auto___16859){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16867 = arguments.length;
var i__10030__auto___16868 = (0);
while(true){
if((i__10030__auto___16868 < len__10029__auto___16867)){
args__10036__auto__.push((arguments[i__10030__auto___16868]));

var G__16869 = (i__10030__auto___16868 + (1));
i__10030__auto___16868 = G__16869;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14771__auto___16859))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14771__auto___16859){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14771__auto___16859),args);
});})(g__14771__auto___16859))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__14771__auto___16859){
return (function (seq16732){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16732));
});})(g__14771__auto___16859))
;


var g__14771__auto___16881 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__14771__auto___16881){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16889 = arguments.length;
var i__10030__auto___16890 = (0);
while(true){
if((i__10030__auto___16890 < len__10029__auto___16889)){
args__10036__auto__.push((arguments[i__10030__auto___16890]));

var G__16891 = (i__10030__auto___16890 + (1));
i__10030__auto___16890 = G__16891;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14771__auto___16881))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14771__auto___16881){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14771__auto___16881),args);
});})(g__14771__auto___16881))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__14771__auto___16881){
return (function (seq16738){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16738));
});})(g__14771__auto___16881))
;

var g__14784__auto___16936 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__14784__auto___16936){
return (function cljs$spec$gen$alpha$any(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16937 = arguments.length;
var i__10030__auto___16938 = (0);
while(true){
if((i__10030__auto___16938 < len__10029__auto___16937)){
args__10036__auto__.push((arguments[i__10030__auto___16938]));

var G__16939 = (i__10030__auto___16938 + (1));
i__10030__auto___16938 = G__16939;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14784__auto___16936))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14784__auto___16936){
return (function (args){
return cljs.core.deref(g__14784__auto___16936);
});})(g__14784__auto___16936))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__14784__auto___16936){
return (function (seq16892){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16892));
});})(g__14784__auto___16936))
;


var g__14784__auto___16943 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__14784__auto___16943){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16944 = arguments.length;
var i__10030__auto___16945 = (0);
while(true){
if((i__10030__auto___16945 < len__10029__auto___16944)){
args__10036__auto__.push((arguments[i__10030__auto___16945]));

var G__16946 = (i__10030__auto___16945 + (1));
i__10030__auto___16945 = G__16946;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14784__auto___16943))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14784__auto___16943){
return (function (args){
return cljs.core.deref(g__14784__auto___16943);
});})(g__14784__auto___16943))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__14784__auto___16943){
return (function (seq16896){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16896));
});})(g__14784__auto___16943))
;


var g__14784__auto___16950 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__14784__auto___16950){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16951 = arguments.length;
var i__10030__auto___16952 = (0);
while(true){
if((i__10030__auto___16952 < len__10029__auto___16951)){
args__10036__auto__.push((arguments[i__10030__auto___16952]));

var G__16953 = (i__10030__auto___16952 + (1));
i__10030__auto___16952 = G__16953;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14784__auto___16950))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14784__auto___16950){
return (function (args){
return cljs.core.deref(g__14784__auto___16950);
});})(g__14784__auto___16950))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__14784__auto___16950){
return (function (seq16900){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16900));
});})(g__14784__auto___16950))
;


var g__14784__auto___16957 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__14784__auto___16957){
return (function cljs$spec$gen$alpha$char(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16958 = arguments.length;
var i__10030__auto___16959 = (0);
while(true){
if((i__10030__auto___16959 < len__10029__auto___16958)){
args__10036__auto__.push((arguments[i__10030__auto___16959]));

var G__16960 = (i__10030__auto___16959 + (1));
i__10030__auto___16959 = G__16960;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14784__auto___16957))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14784__auto___16957){
return (function (args){
return cljs.core.deref(g__14784__auto___16957);
});})(g__14784__auto___16957))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__14784__auto___16957){
return (function (seq16901){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16901));
});})(g__14784__auto___16957))
;


var g__14784__auto___16964 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__14784__auto___16964){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16966 = arguments.length;
var i__10030__auto___16967 = (0);
while(true){
if((i__10030__auto___16967 < len__10029__auto___16966)){
args__10036__auto__.push((arguments[i__10030__auto___16967]));

var G__16968 = (i__10030__auto___16967 + (1));
i__10030__auto___16967 = G__16968;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14784__auto___16964))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14784__auto___16964){
return (function (args){
return cljs.core.deref(g__14784__auto___16964);
});})(g__14784__auto___16964))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__14784__auto___16964){
return (function (seq16905){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16905));
});})(g__14784__auto___16964))
;


var g__14784__auto___16969 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__14784__auto___16969){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16971 = arguments.length;
var i__10030__auto___16972 = (0);
while(true){
if((i__10030__auto___16972 < len__10029__auto___16971)){
args__10036__auto__.push((arguments[i__10030__auto___16972]));

var G__16973 = (i__10030__auto___16972 + (1));
i__10030__auto___16972 = G__16973;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14784__auto___16969))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14784__auto___16969){
return (function (args){
return cljs.core.deref(g__14784__auto___16969);
});})(g__14784__auto___16969))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__14784__auto___16969){
return (function (seq16906){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16906));
});})(g__14784__auto___16969))
;


var g__14784__auto___16977 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__14784__auto___16977){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16978 = arguments.length;
var i__10030__auto___16979 = (0);
while(true){
if((i__10030__auto___16979 < len__10029__auto___16978)){
args__10036__auto__.push((arguments[i__10030__auto___16979]));

var G__16980 = (i__10030__auto___16979 + (1));
i__10030__auto___16979 = G__16980;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14784__auto___16977))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14784__auto___16977){
return (function (args){
return cljs.core.deref(g__14784__auto___16977);
});})(g__14784__auto___16977))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__14784__auto___16977){
return (function (seq16907){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16907));
});})(g__14784__auto___16977))
;


var g__14784__auto___16981 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__14784__auto___16981){
return (function cljs$spec$gen$alpha$double(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16982 = arguments.length;
var i__10030__auto___16983 = (0);
while(true){
if((i__10030__auto___16983 < len__10029__auto___16982)){
args__10036__auto__.push((arguments[i__10030__auto___16983]));

var G__16986 = (i__10030__auto___16983 + (1));
i__10030__auto___16983 = G__16986;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14784__auto___16981))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14784__auto___16981){
return (function (args){
return cljs.core.deref(g__14784__auto___16981);
});})(g__14784__auto___16981))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__14784__auto___16981){
return (function (seq16908){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16908));
});})(g__14784__auto___16981))
;


var g__14784__auto___16987 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__14784__auto___16987){
return (function cljs$spec$gen$alpha$int(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16988 = arguments.length;
var i__10030__auto___16989 = (0);
while(true){
if((i__10030__auto___16989 < len__10029__auto___16988)){
args__10036__auto__.push((arguments[i__10030__auto___16989]));

var G__16990 = (i__10030__auto___16989 + (1));
i__10030__auto___16989 = G__16990;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14784__auto___16987))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14784__auto___16987){
return (function (args){
return cljs.core.deref(g__14784__auto___16987);
});})(g__14784__auto___16987))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__14784__auto___16987){
return (function (seq16909){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16909));
});})(g__14784__auto___16987))
;


var g__14784__auto___16992 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__14784__auto___16992){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16993 = arguments.length;
var i__10030__auto___16994 = (0);
while(true){
if((i__10030__auto___16994 < len__10029__auto___16993)){
args__10036__auto__.push((arguments[i__10030__auto___16994]));

var G__16995 = (i__10030__auto___16994 + (1));
i__10030__auto___16994 = G__16995;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14784__auto___16992))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14784__auto___16992){
return (function (args){
return cljs.core.deref(g__14784__auto___16992);
});})(g__14784__auto___16992))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__14784__auto___16992){
return (function (seq16910){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16910));
});})(g__14784__auto___16992))
;


var g__14784__auto___16996 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__14784__auto___16996){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__10036__auto__ = [];
var len__10029__auto___16999 = arguments.length;
var i__10030__auto___17000 = (0);
while(true){
if((i__10030__auto___17000 < len__10029__auto___16999)){
args__10036__auto__.push((arguments[i__10030__auto___17000]));

var G__17001 = (i__10030__auto___17000 + (1));
i__10030__auto___17000 = G__17001;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14784__auto___16996))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14784__auto___16996){
return (function (args){
return cljs.core.deref(g__14784__auto___16996);
});})(g__14784__auto___16996))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__14784__auto___16996){
return (function (seq16911){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16911));
});})(g__14784__auto___16996))
;


var g__14784__auto___17006 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__14784__auto___17006){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__10036__auto__ = [];
var len__10029__auto___17008 = arguments.length;
var i__10030__auto___17009 = (0);
while(true){
if((i__10030__auto___17009 < len__10029__auto___17008)){
args__10036__auto__.push((arguments[i__10030__auto___17009]));

var G__17011 = (i__10030__auto___17009 + (1));
i__10030__auto___17009 = G__17011;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14784__auto___17006))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14784__auto___17006){
return (function (args){
return cljs.core.deref(g__14784__auto___17006);
});})(g__14784__auto___17006))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__14784__auto___17006){
return (function (seq16912){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16912));
});})(g__14784__auto___17006))
;


var g__14784__auto___17012 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__14784__auto___17012){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__10036__auto__ = [];
var len__10029__auto___17013 = arguments.length;
var i__10030__auto___17014 = (0);
while(true){
if((i__10030__auto___17014 < len__10029__auto___17013)){
args__10036__auto__.push((arguments[i__10030__auto___17014]));

var G__17015 = (i__10030__auto___17014 + (1));
i__10030__auto___17014 = G__17015;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14784__auto___17012))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14784__auto___17012){
return (function (args){
return cljs.core.deref(g__14784__auto___17012);
});})(g__14784__auto___17012))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__14784__auto___17012){
return (function (seq16913){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16913));
});})(g__14784__auto___17012))
;


var g__14784__auto___17016 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__14784__auto___17016){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__10036__auto__ = [];
var len__10029__auto___17017 = arguments.length;
var i__10030__auto___17018 = (0);
while(true){
if((i__10030__auto___17018 < len__10029__auto___17017)){
args__10036__auto__.push((arguments[i__10030__auto___17018]));

var G__17022 = (i__10030__auto___17018 + (1));
i__10030__auto___17018 = G__17022;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14784__auto___17016))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14784__auto___17016){
return (function (args){
return cljs.core.deref(g__14784__auto___17016);
});})(g__14784__auto___17016))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__14784__auto___17016){
return (function (seq16917){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16917));
});})(g__14784__auto___17016))
;


var g__14784__auto___17023 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__14784__auto___17023){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__10036__auto__ = [];
var len__10029__auto___17024 = arguments.length;
var i__10030__auto___17025 = (0);
while(true){
if((i__10030__auto___17025 < len__10029__auto___17024)){
args__10036__auto__.push((arguments[i__10030__auto___17025]));

var G__17026 = (i__10030__auto___17025 + (1));
i__10030__auto___17025 = G__17026;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14784__auto___17023))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14784__auto___17023){
return (function (args){
return cljs.core.deref(g__14784__auto___17023);
});})(g__14784__auto___17023))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__14784__auto___17023){
return (function (seq16919){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16919));
});})(g__14784__auto___17023))
;


var g__14784__auto___17027 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__14784__auto___17027){
return (function cljs$spec$gen$alpha$string(var_args){
var args__10036__auto__ = [];
var len__10029__auto___17028 = arguments.length;
var i__10030__auto___17029 = (0);
while(true){
if((i__10030__auto___17029 < len__10029__auto___17028)){
args__10036__auto__.push((arguments[i__10030__auto___17029]));

var G__17030 = (i__10030__auto___17029 + (1));
i__10030__auto___17029 = G__17030;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14784__auto___17027))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14784__auto___17027){
return (function (args){
return cljs.core.deref(g__14784__auto___17027);
});})(g__14784__auto___17027))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__14784__auto___17027){
return (function (seq16920){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16920));
});})(g__14784__auto___17027))
;


var g__14784__auto___17033 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__14784__auto___17033){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__10036__auto__ = [];
var len__10029__auto___17034 = arguments.length;
var i__10030__auto___17035 = (0);
while(true){
if((i__10030__auto___17035 < len__10029__auto___17034)){
args__10036__auto__.push((arguments[i__10030__auto___17035]));

var G__17036 = (i__10030__auto___17035 + (1));
i__10030__auto___17035 = G__17036;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14784__auto___17033))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14784__auto___17033){
return (function (args){
return cljs.core.deref(g__14784__auto___17033);
});})(g__14784__auto___17033))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__14784__auto___17033){
return (function (seq16921){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16921));
});})(g__14784__auto___17033))
;


var g__14784__auto___17038 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__14784__auto___17038){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__10036__auto__ = [];
var len__10029__auto___17039 = arguments.length;
var i__10030__auto___17040 = (0);
while(true){
if((i__10030__auto___17040 < len__10029__auto___17039)){
args__10036__auto__.push((arguments[i__10030__auto___17040]));

var G__17041 = (i__10030__auto___17040 + (1));
i__10030__auto___17040 = G__17041;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14784__auto___17038))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14784__auto___17038){
return (function (args){
return cljs.core.deref(g__14784__auto___17038);
});})(g__14784__auto___17038))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__14784__auto___17038){
return (function (seq16922){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16922));
});})(g__14784__auto___17038))
;


var g__14784__auto___17042 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__14784__auto___17042){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__10036__auto__ = [];
var len__10029__auto___17043 = arguments.length;
var i__10030__auto___17044 = (0);
while(true){
if((i__10030__auto___17044 < len__10029__auto___17043)){
args__10036__auto__.push((arguments[i__10030__auto___17044]));

var G__17045 = (i__10030__auto___17044 + (1));
i__10030__auto___17044 = G__17045;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14784__auto___17042))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14784__auto___17042){
return (function (args){
return cljs.core.deref(g__14784__auto___17042);
});})(g__14784__auto___17042))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__14784__auto___17042){
return (function (seq16927){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16927));
});})(g__14784__auto___17042))
;


var g__14784__auto___17048 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__14784__auto___17048){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__10036__auto__ = [];
var len__10029__auto___17049 = arguments.length;
var i__10030__auto___17050 = (0);
while(true){
if((i__10030__auto___17050 < len__10029__auto___17049)){
args__10036__auto__.push((arguments[i__10030__auto___17050]));

var G__17055 = (i__10030__auto___17050 + (1));
i__10030__auto___17050 = G__17055;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14784__auto___17048))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14784__auto___17048){
return (function (args){
return cljs.core.deref(g__14784__auto___17048);
});})(g__14784__auto___17048))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__14784__auto___17048){
return (function (seq16928){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16928));
});})(g__14784__auto___17048))
;


var g__14784__auto___17061 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__14784__auto___17061){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__10036__auto__ = [];
var len__10029__auto___17062 = arguments.length;
var i__10030__auto___17063 = (0);
while(true){
if((i__10030__auto___17063 < len__10029__auto___17062)){
args__10036__auto__.push((arguments[i__10030__auto___17063]));

var G__17064 = (i__10030__auto___17063 + (1));
i__10030__auto___17063 = G__17064;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});})(g__14784__auto___17061))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14784__auto___17061){
return (function (args){
return cljs.core.deref(g__14784__auto___17061);
});})(g__14784__auto___17061))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__14784__auto___17061){
return (function (seq16932){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16932));
});})(g__14784__auto___17061))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__10036__auto__ = [];
var len__10029__auto___17068 = arguments.length;
var i__10030__auto___17069 = (0);
while(true){
if((i__10030__auto___17069 < len__10029__auto___17068)){
args__10036__auto__.push((arguments[i__10030__auto___17069]));

var G__17070 = (i__10030__auto___17069 + (1));
i__10030__auto___17069 = G__17070;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__17065_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__17065_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gens)], 0));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq17066){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17066));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace(ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns()], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.any_printable()], null)], 0)),cljs.spec.gen.alpha.boolean$(),cljs.spec.gen.alpha.char$(),cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (simple){
return (function (p1__17071_SHARP_){
return (new Date(p1__17071_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer()], 0)),cljs.spec.gen.alpha.symbol(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)], 0)),cljs.spec.gen.alpha.string_alphanumeric(),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)),cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0))], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], 0)),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], 0)),cljs.spec.gen.alpha.uuid(),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.symbol()], null)], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.double$()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns()], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.string_alphanumeric()], null)], 0)),cljs.spec.gen.alpha.symbol_ns(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_(pred)){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pred], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.gen_builtins),pred);
}
});
