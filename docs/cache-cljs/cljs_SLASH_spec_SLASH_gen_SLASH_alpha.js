// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants false}
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
})
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__10096__auto__,writer__10097__auto__,opt__10098__auto__){
return cljs.core._write(writer__10097__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19013 = arguments.length;
var i__10661__auto___19014 = (0);
while(true){
if((i__10661__auto___19014 < len__10660__auto___19013)){
args__10667__auto__.push((arguments[i__10661__auto___19014]));

var G__19015 = (i__10661__auto___19014 + (1));
i__10661__auto___19014 = G__19015;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.gen.alpha.quick_check_ref) : cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref)),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq19012){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19012));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19031 = arguments.length;
var i__10661__auto___19032 = (0);
while(true){
if((i__10661__auto___19032 < len__10660__auto___19031)){
args__10667__auto__.push((arguments[i__10661__auto___19032]));

var G__19034 = (i__10661__auto___19032 + (1));
i__10661__auto___19032 = G__19034;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.gen.alpha.for_all_STAR__ref) : cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref)),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq19019){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19019));
});

var g_QMARK__19035 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_19036 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__19035){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__19035))
,null));
var mkg_19037 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__19035,g_19036){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__19035,g_19036))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__19035,g_19036,mkg_19037){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g_QMARK__19035) : cljs.core.deref.call(null,g_QMARK__19035)).call(null,x);
});})(g_QMARK__19035,g_19036,mkg_19037))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__19035,g_19036,mkg_19037){
return (function cljs$spec$gen$alpha$generator(gfn){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mkg_19037) : cljs.core.deref.call(null,mkg_19037)).call(null,gfn);
});})(g_QMARK__19035,g_19036,mkg_19037))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__19035,g_19036,mkg_19037){
return (function cljs$spec$gen$alpha$generate(generator){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g_19036) : cljs.core.deref.call(null,g_19036)).call(null,generator);
});})(g_QMARK__19035,g_19036,mkg_19037))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator((function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gfnd) : cljs.core.deref.call(null,gfnd))).call(null,rnd,size);
}));
});
var g__18977__auto___19112 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__18977__auto___19112){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19113 = arguments.length;
var i__10661__auto___19114 = (0);
while(true){
if((i__10661__auto___19114 < len__10660__auto___19113)){
args__10667__auto__.push((arguments[i__10661__auto___19114]));

var G__19115 = (i__10661__auto___19114 + (1));
i__10661__auto___19114 = G__19115;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18977__auto___19112))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18977__auto___19112){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18977__auto___19112) : cljs.core.deref.call(null,g__18977__auto___19112)),args);
});})(g__18977__auto___19112))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__18977__auto___19112){
return (function (seq19041){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19041));
});})(g__18977__auto___19112))
;


var g__18977__auto___19118 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__18977__auto___19118){
return (function cljs$spec$gen$alpha$list(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19120 = arguments.length;
var i__10661__auto___19121 = (0);
while(true){
if((i__10661__auto___19121 < len__10660__auto___19120)){
args__10667__auto__.push((arguments[i__10661__auto___19121]));

var G__19122 = (i__10661__auto___19121 + (1));
i__10661__auto___19121 = G__19122;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18977__auto___19118))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18977__auto___19118){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18977__auto___19118) : cljs.core.deref.call(null,g__18977__auto___19118)),args);
});})(g__18977__auto___19118))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__18977__auto___19118){
return (function (seq19046){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19046));
});})(g__18977__auto___19118))
;


var g__18977__auto___19127 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__18977__auto___19127){
return (function cljs$spec$gen$alpha$map(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19128 = arguments.length;
var i__10661__auto___19129 = (0);
while(true){
if((i__10661__auto___19129 < len__10660__auto___19128)){
args__10667__auto__.push((arguments[i__10661__auto___19129]));

var G__19130 = (i__10661__auto___19129 + (1));
i__10661__auto___19129 = G__19130;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18977__auto___19127))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18977__auto___19127){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18977__auto___19127) : cljs.core.deref.call(null,g__18977__auto___19127)),args);
});})(g__18977__auto___19127))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__18977__auto___19127){
return (function (seq19049){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19049));
});})(g__18977__auto___19127))
;


var g__18977__auto___19131 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__18977__auto___19131){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19132 = arguments.length;
var i__10661__auto___19133 = (0);
while(true){
if((i__10661__auto___19133 < len__10660__auto___19132)){
args__10667__auto__.push((arguments[i__10661__auto___19133]));

var G__19134 = (i__10661__auto___19133 + (1));
i__10661__auto___19133 = G__19134;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18977__auto___19131))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18977__auto___19131){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18977__auto___19131) : cljs.core.deref.call(null,g__18977__auto___19131)),args);
});})(g__18977__auto___19131))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__18977__auto___19131){
return (function (seq19054){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19054));
});})(g__18977__auto___19131))
;


var g__18977__auto___19135 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__18977__auto___19135){
return (function cljs$spec$gen$alpha$set(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19136 = arguments.length;
var i__10661__auto___19137 = (0);
while(true){
if((i__10661__auto___19137 < len__10660__auto___19136)){
args__10667__auto__.push((arguments[i__10661__auto___19137]));

var G__19138 = (i__10661__auto___19137 + (1));
i__10661__auto___19137 = G__19138;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18977__auto___19135))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18977__auto___19135){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18977__auto___19135) : cljs.core.deref.call(null,g__18977__auto___19135)),args);
});})(g__18977__auto___19135))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__18977__auto___19135){
return (function (seq19059){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19059));
});})(g__18977__auto___19135))
;


var g__18977__auto___19139 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__18977__auto___19139){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19140 = arguments.length;
var i__10661__auto___19141 = (0);
while(true){
if((i__10661__auto___19141 < len__10660__auto___19140)){
args__10667__auto__.push((arguments[i__10661__auto___19141]));

var G__19142 = (i__10661__auto___19141 + (1));
i__10661__auto___19141 = G__19142;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18977__auto___19139))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18977__auto___19139){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18977__auto___19139) : cljs.core.deref.call(null,g__18977__auto___19139)),args);
});})(g__18977__auto___19139))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__18977__auto___19139){
return (function (seq19068){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19068));
});})(g__18977__auto___19139))
;


var g__18977__auto___19143 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__18977__auto___19143){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19144 = arguments.length;
var i__10661__auto___19145 = (0);
while(true){
if((i__10661__auto___19145 < len__10660__auto___19144)){
args__10667__auto__.push((arguments[i__10661__auto___19145]));

var G__19146 = (i__10661__auto___19145 + (1));
i__10661__auto___19145 = G__19146;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18977__auto___19143))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18977__auto___19143){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18977__auto___19143) : cljs.core.deref.call(null,g__18977__auto___19143)),args);
});})(g__18977__auto___19143))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__18977__auto___19143){
return (function (seq19075){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19075));
});})(g__18977__auto___19143))
;


var g__18977__auto___19147 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__18977__auto___19147){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19148 = arguments.length;
var i__10661__auto___19149 = (0);
while(true){
if((i__10661__auto___19149 < len__10660__auto___19148)){
args__10667__auto__.push((arguments[i__10661__auto___19149]));

var G__19150 = (i__10661__auto___19149 + (1));
i__10661__auto___19149 = G__19150;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18977__auto___19147))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18977__auto___19147){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18977__auto___19147) : cljs.core.deref.call(null,g__18977__auto___19147)),args);
});})(g__18977__auto___19147))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__18977__auto___19147){
return (function (seq19080){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19080));
});})(g__18977__auto___19147))
;


var g__18977__auto___19151 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__18977__auto___19151){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19154 = arguments.length;
var i__10661__auto___19155 = (0);
while(true){
if((i__10661__auto___19155 < len__10660__auto___19154)){
args__10667__auto__.push((arguments[i__10661__auto___19155]));

var G__19156 = (i__10661__auto___19155 + (1));
i__10661__auto___19155 = G__19156;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18977__auto___19151))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18977__auto___19151){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18977__auto___19151) : cljs.core.deref.call(null,g__18977__auto___19151)),args);
});})(g__18977__auto___19151))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__18977__auto___19151){
return (function (seq19082){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19082));
});})(g__18977__auto___19151))
;


var g__18977__auto___19158 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__18977__auto___19158){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19162 = arguments.length;
var i__10661__auto___19163 = (0);
while(true){
if((i__10661__auto___19163 < len__10660__auto___19162)){
args__10667__auto__.push((arguments[i__10661__auto___19163]));

var G__19164 = (i__10661__auto___19163 + (1));
i__10661__auto___19163 = G__19164;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18977__auto___19158))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18977__auto___19158){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18977__auto___19158) : cljs.core.deref.call(null,g__18977__auto___19158)),args);
});})(g__18977__auto___19158))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__18977__auto___19158){
return (function (seq19084){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19084));
});})(g__18977__auto___19158))
;


var g__18977__auto___19169 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__18977__auto___19169){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19170 = arguments.length;
var i__10661__auto___19171 = (0);
while(true){
if((i__10661__auto___19171 < len__10660__auto___19170)){
args__10667__auto__.push((arguments[i__10661__auto___19171]));

var G__19172 = (i__10661__auto___19171 + (1));
i__10661__auto___19171 = G__19172;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18977__auto___19169))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18977__auto___19169){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18977__auto___19169) : cljs.core.deref.call(null,g__18977__auto___19169)),args);
});})(g__18977__auto___19169))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__18977__auto___19169){
return (function (seq19089){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19089));
});})(g__18977__auto___19169))
;


var g__18977__auto___19173 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__18977__auto___19173){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19174 = arguments.length;
var i__10661__auto___19175 = (0);
while(true){
if((i__10661__auto___19175 < len__10660__auto___19174)){
args__10667__auto__.push((arguments[i__10661__auto___19175]));

var G__19176 = (i__10661__auto___19175 + (1));
i__10661__auto___19175 = G__19176;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18977__auto___19173))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18977__auto___19173){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18977__auto___19173) : cljs.core.deref.call(null,g__18977__auto___19173)),args);
});})(g__18977__auto___19173))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__18977__auto___19173){
return (function (seq19090){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19090));
});})(g__18977__auto___19173))
;


var g__18977__auto___19182 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__18977__auto___19182){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19184 = arguments.length;
var i__10661__auto___19185 = (0);
while(true){
if((i__10661__auto___19185 < len__10660__auto___19184)){
args__10667__auto__.push((arguments[i__10661__auto___19185]));

var G__19186 = (i__10661__auto___19185 + (1));
i__10661__auto___19185 = G__19186;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18977__auto___19182))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18977__auto___19182){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18977__auto___19182) : cljs.core.deref.call(null,g__18977__auto___19182)),args);
});})(g__18977__auto___19182))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__18977__auto___19182){
return (function (seq19091){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19091));
});})(g__18977__auto___19182))
;


var g__18977__auto___19189 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__18977__auto___19189){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19192 = arguments.length;
var i__10661__auto___19193 = (0);
while(true){
if((i__10661__auto___19193 < len__10660__auto___19192)){
args__10667__auto__.push((arguments[i__10661__auto___19193]));

var G__19194 = (i__10661__auto___19193 + (1));
i__10661__auto___19193 = G__19194;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18977__auto___19189))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18977__auto___19189){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18977__auto___19189) : cljs.core.deref.call(null,g__18977__auto___19189)),args);
});})(g__18977__auto___19189))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__18977__auto___19189){
return (function (seq19094){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19094));
});})(g__18977__auto___19189))
;


var g__18977__auto___19195 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__18977__auto___19195){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19196 = arguments.length;
var i__10661__auto___19197 = (0);
while(true){
if((i__10661__auto___19197 < len__10660__auto___19196)){
args__10667__auto__.push((arguments[i__10661__auto___19197]));

var G__19199 = (i__10661__auto___19197 + (1));
i__10661__auto___19197 = G__19199;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18977__auto___19195))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18977__auto___19195){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18977__auto___19195) : cljs.core.deref.call(null,g__18977__auto___19195)),args);
});})(g__18977__auto___19195))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__18977__auto___19195){
return (function (seq19096){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19096));
});})(g__18977__auto___19195))
;


var g__18977__auto___19202 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__18977__auto___19202){
return (function cljs$spec$gen$alpha$return(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19203 = arguments.length;
var i__10661__auto___19204 = (0);
while(true){
if((i__10661__auto___19204 < len__10660__auto___19203)){
args__10667__auto__.push((arguments[i__10661__auto___19204]));

var G__19208 = (i__10661__auto___19204 + (1));
i__10661__auto___19204 = G__19208;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18977__auto___19202))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18977__auto___19202){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18977__auto___19202) : cljs.core.deref.call(null,g__18977__auto___19202)),args);
});})(g__18977__auto___19202))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__18977__auto___19202){
return (function (seq19101){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19101));
});})(g__18977__auto___19202))
;


var g__18977__auto___19213 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__18977__auto___19213){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19215 = arguments.length;
var i__10661__auto___19216 = (0);
while(true){
if((i__10661__auto___19216 < len__10660__auto___19215)){
args__10667__auto__.push((arguments[i__10661__auto___19216]));

var G__19217 = (i__10661__auto___19216 + (1));
i__10661__auto___19216 = G__19217;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18977__auto___19213))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18977__auto___19213){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18977__auto___19213) : cljs.core.deref.call(null,g__18977__auto___19213)),args);
});})(g__18977__auto___19213))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__18977__auto___19213){
return (function (seq19102){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19102));
});})(g__18977__auto___19213))
;


var g__18977__auto___19218 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__18977__auto___19218){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19219 = arguments.length;
var i__10661__auto___19220 = (0);
while(true){
if((i__10661__auto___19220 < len__10660__auto___19219)){
args__10667__auto__.push((arguments[i__10661__auto___19220]));

var G__19221 = (i__10661__auto___19220 + (1));
i__10661__auto___19220 = G__19221;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18977__auto___19218))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18977__auto___19218){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18977__auto___19218) : cljs.core.deref.call(null,g__18977__auto___19218)),args);
});})(g__18977__auto___19218))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__18977__auto___19218){
return (function (seq19103){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19103));
});})(g__18977__auto___19218))
;


var g__18977__auto___19222 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__18977__auto___19222){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19223 = arguments.length;
var i__10661__auto___19224 = (0);
while(true){
if((i__10661__auto___19224 < len__10660__auto___19223)){
args__10667__auto__.push((arguments[i__10661__auto___19224]));

var G__19225 = (i__10661__auto___19224 + (1));
i__10661__auto___19224 = G__19225;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18977__auto___19222))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18977__auto___19222){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18977__auto___19222) : cljs.core.deref.call(null,g__18977__auto___19222)),args);
});})(g__18977__auto___19222))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__18977__auto___19222){
return (function (seq19107){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19107));
});})(g__18977__auto___19222))
;

var g__18990__auto___19287 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__18990__auto___19287){
return (function cljs$spec$gen$alpha$any(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19288 = arguments.length;
var i__10661__auto___19289 = (0);
while(true){
if((i__10661__auto___19289 < len__10660__auto___19288)){
args__10667__auto__.push((arguments[i__10661__auto___19289]));

var G__19290 = (i__10661__auto___19289 + (1));
i__10661__auto___19289 = G__19290;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18990__auto___19287))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18990__auto___19287){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18990__auto___19287) : cljs.core.deref.call(null,g__18990__auto___19287));
});})(g__18990__auto___19287))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__18990__auto___19287){
return (function (seq19229){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19229));
});})(g__18990__auto___19287))
;


var g__18990__auto___19291 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__18990__auto___19291){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19292 = arguments.length;
var i__10661__auto___19293 = (0);
while(true){
if((i__10661__auto___19293 < len__10660__auto___19292)){
args__10667__auto__.push((arguments[i__10661__auto___19293]));

var G__19294 = (i__10661__auto___19293 + (1));
i__10661__auto___19293 = G__19294;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18990__auto___19291))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18990__auto___19291){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18990__auto___19291) : cljs.core.deref.call(null,g__18990__auto___19291));
});})(g__18990__auto___19291))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__18990__auto___19291){
return (function (seq19230){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19230));
});})(g__18990__auto___19291))
;


var g__18990__auto___19295 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__18990__auto___19295){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19296 = arguments.length;
var i__10661__auto___19297 = (0);
while(true){
if((i__10661__auto___19297 < len__10660__auto___19296)){
args__10667__auto__.push((arguments[i__10661__auto___19297]));

var G__19298 = (i__10661__auto___19297 + (1));
i__10661__auto___19297 = G__19298;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18990__auto___19295))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18990__auto___19295){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18990__auto___19295) : cljs.core.deref.call(null,g__18990__auto___19295));
});})(g__18990__auto___19295))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__18990__auto___19295){
return (function (seq19234){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19234));
});})(g__18990__auto___19295))
;


var g__18990__auto___19299 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__18990__auto___19299){
return (function cljs$spec$gen$alpha$char(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19300 = arguments.length;
var i__10661__auto___19301 = (0);
while(true){
if((i__10661__auto___19301 < len__10660__auto___19300)){
args__10667__auto__.push((arguments[i__10661__auto___19301]));

var G__19302 = (i__10661__auto___19301 + (1));
i__10661__auto___19301 = G__19302;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18990__auto___19299))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18990__auto___19299){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18990__auto___19299) : cljs.core.deref.call(null,g__18990__auto___19299));
});})(g__18990__auto___19299))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__18990__auto___19299){
return (function (seq19235){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19235));
});})(g__18990__auto___19299))
;


var g__18990__auto___19303 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__18990__auto___19303){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19304 = arguments.length;
var i__10661__auto___19305 = (0);
while(true){
if((i__10661__auto___19305 < len__10660__auto___19304)){
args__10667__auto__.push((arguments[i__10661__auto___19305]));

var G__19306 = (i__10661__auto___19305 + (1));
i__10661__auto___19305 = G__19306;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18990__auto___19303))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18990__auto___19303){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18990__auto___19303) : cljs.core.deref.call(null,g__18990__auto___19303));
});})(g__18990__auto___19303))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__18990__auto___19303){
return (function (seq19238){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19238));
});})(g__18990__auto___19303))
;


var g__18990__auto___19307 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__18990__auto___19307){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19308 = arguments.length;
var i__10661__auto___19309 = (0);
while(true){
if((i__10661__auto___19309 < len__10660__auto___19308)){
args__10667__auto__.push((arguments[i__10661__auto___19309]));

var G__19310 = (i__10661__auto___19309 + (1));
i__10661__auto___19309 = G__19310;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18990__auto___19307))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18990__auto___19307){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18990__auto___19307) : cljs.core.deref.call(null,g__18990__auto___19307));
});})(g__18990__auto___19307))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__18990__auto___19307){
return (function (seq19241){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19241));
});})(g__18990__auto___19307))
;


var g__18990__auto___19311 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__18990__auto___19311){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19312 = arguments.length;
var i__10661__auto___19313 = (0);
while(true){
if((i__10661__auto___19313 < len__10660__auto___19312)){
args__10667__auto__.push((arguments[i__10661__auto___19313]));

var G__19314 = (i__10661__auto___19313 + (1));
i__10661__auto___19313 = G__19314;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18990__auto___19311))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18990__auto___19311){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18990__auto___19311) : cljs.core.deref.call(null,g__18990__auto___19311));
});})(g__18990__auto___19311))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__18990__auto___19311){
return (function (seq19242){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19242));
});})(g__18990__auto___19311))
;


var g__18990__auto___19315 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__18990__auto___19315){
return (function cljs$spec$gen$alpha$double(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19316 = arguments.length;
var i__10661__auto___19317 = (0);
while(true){
if((i__10661__auto___19317 < len__10660__auto___19316)){
args__10667__auto__.push((arguments[i__10661__auto___19317]));

var G__19318 = (i__10661__auto___19317 + (1));
i__10661__auto___19317 = G__19318;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18990__auto___19315))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18990__auto___19315){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18990__auto___19315) : cljs.core.deref.call(null,g__18990__auto___19315));
});})(g__18990__auto___19315))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__18990__auto___19315){
return (function (seq19243){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19243));
});})(g__18990__auto___19315))
;


var g__18990__auto___19319 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__18990__auto___19319){
return (function cljs$spec$gen$alpha$int(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19320 = arguments.length;
var i__10661__auto___19321 = (0);
while(true){
if((i__10661__auto___19321 < len__10660__auto___19320)){
args__10667__auto__.push((arguments[i__10661__auto___19321]));

var G__19322 = (i__10661__auto___19321 + (1));
i__10661__auto___19321 = G__19322;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18990__auto___19319))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18990__auto___19319){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18990__auto___19319) : cljs.core.deref.call(null,g__18990__auto___19319));
});})(g__18990__auto___19319))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__18990__auto___19319){
return (function (seq19247){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19247));
});})(g__18990__auto___19319))
;


var g__18990__auto___19323 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__18990__auto___19323){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19326 = arguments.length;
var i__10661__auto___19328 = (0);
while(true){
if((i__10661__auto___19328 < len__10660__auto___19326)){
args__10667__auto__.push((arguments[i__10661__auto___19328]));

var G__19329 = (i__10661__auto___19328 + (1));
i__10661__auto___19328 = G__19329;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18990__auto___19323))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18990__auto___19323){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18990__auto___19323) : cljs.core.deref.call(null,g__18990__auto___19323));
});})(g__18990__auto___19323))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__18990__auto___19323){
return (function (seq19248){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19248));
});})(g__18990__auto___19323))
;


var g__18990__auto___19335 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__18990__auto___19335){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19336 = arguments.length;
var i__10661__auto___19337 = (0);
while(true){
if((i__10661__auto___19337 < len__10660__auto___19336)){
args__10667__auto__.push((arguments[i__10661__auto___19337]));

var G__19338 = (i__10661__auto___19337 + (1));
i__10661__auto___19337 = G__19338;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18990__auto___19335))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18990__auto___19335){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18990__auto___19335) : cljs.core.deref.call(null,g__18990__auto___19335));
});})(g__18990__auto___19335))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__18990__auto___19335){
return (function (seq19249){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19249));
});})(g__18990__auto___19335))
;


var g__18990__auto___19343 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__18990__auto___19343){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19348 = arguments.length;
var i__10661__auto___19349 = (0);
while(true){
if((i__10661__auto___19349 < len__10660__auto___19348)){
args__10667__auto__.push((arguments[i__10661__auto___19349]));

var G__19350 = (i__10661__auto___19349 + (1));
i__10661__auto___19349 = G__19350;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18990__auto___19343))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18990__auto___19343){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18990__auto___19343) : cljs.core.deref.call(null,g__18990__auto___19343));
});})(g__18990__auto___19343))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__18990__auto___19343){
return (function (seq19250){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19250));
});})(g__18990__auto___19343))
;


var g__18990__auto___19351 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__18990__auto___19351){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19352 = arguments.length;
var i__10661__auto___19353 = (0);
while(true){
if((i__10661__auto___19353 < len__10660__auto___19352)){
args__10667__auto__.push((arguments[i__10661__auto___19353]));

var G__19354 = (i__10661__auto___19353 + (1));
i__10661__auto___19353 = G__19354;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18990__auto___19351))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18990__auto___19351){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18990__auto___19351) : cljs.core.deref.call(null,g__18990__auto___19351));
});})(g__18990__auto___19351))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__18990__auto___19351){
return (function (seq19251){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19251));
});})(g__18990__auto___19351))
;


var g__18990__auto___19355 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__18990__auto___19355){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19356 = arguments.length;
var i__10661__auto___19357 = (0);
while(true){
if((i__10661__auto___19357 < len__10660__auto___19356)){
args__10667__auto__.push((arguments[i__10661__auto___19357]));

var G__19358 = (i__10661__auto___19357 + (1));
i__10661__auto___19357 = G__19358;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18990__auto___19355))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18990__auto___19355){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18990__auto___19355) : cljs.core.deref.call(null,g__18990__auto___19355));
});})(g__18990__auto___19355))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__18990__auto___19355){
return (function (seq19252){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19252));
});})(g__18990__auto___19355))
;


var g__18990__auto___19359 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__18990__auto___19359){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19360 = arguments.length;
var i__10661__auto___19361 = (0);
while(true){
if((i__10661__auto___19361 < len__10660__auto___19360)){
args__10667__auto__.push((arguments[i__10661__auto___19361]));

var G__19362 = (i__10661__auto___19361 + (1));
i__10661__auto___19361 = G__19362;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18990__auto___19359))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18990__auto___19359){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18990__auto___19359) : cljs.core.deref.call(null,g__18990__auto___19359));
});})(g__18990__auto___19359))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__18990__auto___19359){
return (function (seq19256){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19256));
});})(g__18990__auto___19359))
;


var g__18990__auto___19366 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__18990__auto___19366){
return (function cljs$spec$gen$alpha$string(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19368 = arguments.length;
var i__10661__auto___19369 = (0);
while(true){
if((i__10661__auto___19369 < len__10660__auto___19368)){
args__10667__auto__.push((arguments[i__10661__auto___19369]));

var G__19370 = (i__10661__auto___19369 + (1));
i__10661__auto___19369 = G__19370;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18990__auto___19366))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18990__auto___19366){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18990__auto___19366) : cljs.core.deref.call(null,g__18990__auto___19366));
});})(g__18990__auto___19366))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__18990__auto___19366){
return (function (seq19257){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19257));
});})(g__18990__auto___19366))
;


var g__18990__auto___19371 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__18990__auto___19371){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19372 = arguments.length;
var i__10661__auto___19373 = (0);
while(true){
if((i__10661__auto___19373 < len__10660__auto___19372)){
args__10667__auto__.push((arguments[i__10661__auto___19373]));

var G__19374 = (i__10661__auto___19373 + (1));
i__10661__auto___19373 = G__19374;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18990__auto___19371))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18990__auto___19371){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18990__auto___19371) : cljs.core.deref.call(null,g__18990__auto___19371));
});})(g__18990__auto___19371))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__18990__auto___19371){
return (function (seq19258){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19258));
});})(g__18990__auto___19371))
;


var g__18990__auto___19380 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__18990__auto___19380){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19386 = arguments.length;
var i__10661__auto___19387 = (0);
while(true){
if((i__10661__auto___19387 < len__10660__auto___19386)){
args__10667__auto__.push((arguments[i__10661__auto___19387]));

var G__19390 = (i__10661__auto___19387 + (1));
i__10661__auto___19387 = G__19390;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18990__auto___19380))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18990__auto___19380){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18990__auto___19380) : cljs.core.deref.call(null,g__18990__auto___19380));
});})(g__18990__auto___19380))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__18990__auto___19380){
return (function (seq19263){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19263));
});})(g__18990__auto___19380))
;


var g__18990__auto___19403 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__18990__auto___19403){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19408 = arguments.length;
var i__10661__auto___19409 = (0);
while(true){
if((i__10661__auto___19409 < len__10660__auto___19408)){
args__10667__auto__.push((arguments[i__10661__auto___19409]));

var G__19410 = (i__10661__auto___19409 + (1));
i__10661__auto___19409 = G__19410;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18990__auto___19403))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18990__auto___19403){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18990__auto___19403) : cljs.core.deref.call(null,g__18990__auto___19403));
});})(g__18990__auto___19403))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__18990__auto___19403){
return (function (seq19268){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19268));
});})(g__18990__auto___19403))
;


var g__18990__auto___19412 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__18990__auto___19412){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19413 = arguments.length;
var i__10661__auto___19414 = (0);
while(true){
if((i__10661__auto___19414 < len__10660__auto___19413)){
args__10667__auto__.push((arguments[i__10661__auto___19414]));

var G__19415 = (i__10661__auto___19414 + (1));
i__10661__auto___19414 = G__19415;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18990__auto___19412))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18990__auto___19412){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18990__auto___19412) : cljs.core.deref.call(null,g__18990__auto___19412));
});})(g__18990__auto___19412))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__18990__auto___19412){
return (function (seq19271){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19271));
});})(g__18990__auto___19412))
;


var g__18990__auto___19416 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__18990__auto___19416){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19417 = arguments.length;
var i__10661__auto___19418 = (0);
while(true){
if((i__10661__auto___19418 < len__10660__auto___19417)){
args__10667__auto__.push((arguments[i__10661__auto___19418]));

var G__19419 = (i__10661__auto___19418 + (1));
i__10661__auto___19418 = G__19419;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});})(g__18990__auto___19416))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18990__auto___19416){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__18990__auto___19416) : cljs.core.deref.call(null,g__18990__auto___19416));
});})(g__18990__auto___19416))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__18990__auto___19416){
return (function (seq19282){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19282));
});})(g__18990__auto___19416))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__10667__auto__ = [];
var len__10660__auto___19429 = arguments.length;
var i__10661__auto___19430 = (0);
while(true){
if((i__10661__auto___19430 < len__10660__auto___19429)){
args__10667__auto__.push((arguments[i__10661__auto___19430]));

var G__19431 = (i__10661__auto___19430 + (1));
i__10661__auto___19430 = G__19431;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (p1__19424_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__19424_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gens)], 0));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq19425){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19425));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace(ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns()], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)),cljs.spec.gen.alpha.any_printable()], null)], 0)),cljs.spec.gen.alpha.boolean$(),cljs.spec.gen.alpha.char$(),cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (simple){
return (function (p1__19436_SHARP_){
return (new Date(p1__19436_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer()], 0)),cljs.spec.gen.alpha.symbol(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0))], null)], 0)),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple,simple], 0)),cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)], 0)),cljs.spec.gen.alpha.string_alphanumeric(),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple,simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0))], null)], 0)),cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0)], 0)),cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0))], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([true], 0)),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], 0)),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], 0)),cljs.spec.gen.alpha.uuid(),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.symbol()], null)], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.double$()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns()], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple,simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.gen.alpha.string_alphanumeric()], null)], 0)),cljs.spec.gen.alpha.symbol_ns(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple,simple], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0))], null)], 0))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_(pred)){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pred], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.gen.alpha.gen_builtins) : cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins)),pred);
}
});
