// Compiled by ClojureScript 1.9.908 {}
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
var x = self__.f.call(null);
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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__9034__auto__,writer__9035__auto__,opt__9036__auto__){
return cljs.core._write.call(null,writer__9035__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26696 = arguments.length;
var i__9641__auto___26697 = (0);
while(true){
if((i__9641__auto___26697 < len__9640__auto___26696)){
args__9647__auto__.push((arguments[i__9641__auto___26697]));

var G__26698 = (i__9641__auto___26697 + (1));
i__9641__auto___26697 = G__26698;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq26695){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26695));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26700 = arguments.length;
var i__9641__auto___26701 = (0);
while(true){
if((i__9641__auto___26701 < len__9640__auto___26700)){
args__9647__auto__.push((arguments[i__9641__auto___26701]));

var G__26702 = (i__9641__auto___26701 + (1));
i__9641__auto___26701 = G__26702;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq26699){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26699));
});

var g_QMARK__26703 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_26704 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__26703){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__26703))
,null));
var mkg_26705 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__26703,g_26704){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__26703,g_26704))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__26703,g_26704,mkg_26705){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__26703).call(null,x);
});})(g_QMARK__26703,g_26704,mkg_26705))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__26703,g_26704,mkg_26705){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_26705).call(null,gfn);
});})(g_QMARK__26703,g_26704,mkg_26705))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__26703,g_26704,mkg_26705){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_26704).call(null,generator);
});})(g_QMARK__26703,g_26704,mkg_26705))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__26667__auto___26725 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__26667__auto___26725){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26726 = arguments.length;
var i__9641__auto___26727 = (0);
while(true){
if((i__9641__auto___26727 < len__9640__auto___26726)){
args__9647__auto__.push((arguments[i__9641__auto___26727]));

var G__26728 = (i__9641__auto___26727 + (1));
i__9641__auto___26727 = G__26728;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26667__auto___26725))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26667__auto___26725){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26667__auto___26725),args);
});})(g__26667__auto___26725))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__26667__auto___26725){
return (function (seq26706){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26706));
});})(g__26667__auto___26725))
;


var g__26667__auto___26729 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__26667__auto___26729){
return (function cljs$spec$gen$alpha$list(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26730 = arguments.length;
var i__9641__auto___26731 = (0);
while(true){
if((i__9641__auto___26731 < len__9640__auto___26730)){
args__9647__auto__.push((arguments[i__9641__auto___26731]));

var G__26732 = (i__9641__auto___26731 + (1));
i__9641__auto___26731 = G__26732;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26667__auto___26729))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26667__auto___26729){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26667__auto___26729),args);
});})(g__26667__auto___26729))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__26667__auto___26729){
return (function (seq26707){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26707));
});})(g__26667__auto___26729))
;


var g__26667__auto___26733 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__26667__auto___26733){
return (function cljs$spec$gen$alpha$map(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26734 = arguments.length;
var i__9641__auto___26735 = (0);
while(true){
if((i__9641__auto___26735 < len__9640__auto___26734)){
args__9647__auto__.push((arguments[i__9641__auto___26735]));

var G__26736 = (i__9641__auto___26735 + (1));
i__9641__auto___26735 = G__26736;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26667__auto___26733))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26667__auto___26733){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26667__auto___26733),args);
});})(g__26667__auto___26733))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__26667__auto___26733){
return (function (seq26708){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26708));
});})(g__26667__auto___26733))
;


var g__26667__auto___26737 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__26667__auto___26737){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26738 = arguments.length;
var i__9641__auto___26739 = (0);
while(true){
if((i__9641__auto___26739 < len__9640__auto___26738)){
args__9647__auto__.push((arguments[i__9641__auto___26739]));

var G__26740 = (i__9641__auto___26739 + (1));
i__9641__auto___26739 = G__26740;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26667__auto___26737))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26667__auto___26737){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26667__auto___26737),args);
});})(g__26667__auto___26737))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__26667__auto___26737){
return (function (seq26709){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26709));
});})(g__26667__auto___26737))
;


var g__26667__auto___26741 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__26667__auto___26741){
return (function cljs$spec$gen$alpha$set(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26742 = arguments.length;
var i__9641__auto___26743 = (0);
while(true){
if((i__9641__auto___26743 < len__9640__auto___26742)){
args__9647__auto__.push((arguments[i__9641__auto___26743]));

var G__26744 = (i__9641__auto___26743 + (1));
i__9641__auto___26743 = G__26744;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26667__auto___26741))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26667__auto___26741){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26667__auto___26741),args);
});})(g__26667__auto___26741))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__26667__auto___26741){
return (function (seq26710){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26710));
});})(g__26667__auto___26741))
;


var g__26667__auto___26745 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__26667__auto___26745){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26746 = arguments.length;
var i__9641__auto___26747 = (0);
while(true){
if((i__9641__auto___26747 < len__9640__auto___26746)){
args__9647__auto__.push((arguments[i__9641__auto___26747]));

var G__26748 = (i__9641__auto___26747 + (1));
i__9641__auto___26747 = G__26748;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26667__auto___26745))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26667__auto___26745){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26667__auto___26745),args);
});})(g__26667__auto___26745))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__26667__auto___26745){
return (function (seq26711){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26711));
});})(g__26667__auto___26745))
;


var g__26667__auto___26749 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__26667__auto___26749){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26750 = arguments.length;
var i__9641__auto___26751 = (0);
while(true){
if((i__9641__auto___26751 < len__9640__auto___26750)){
args__9647__auto__.push((arguments[i__9641__auto___26751]));

var G__26752 = (i__9641__auto___26751 + (1));
i__9641__auto___26751 = G__26752;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26667__auto___26749))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26667__auto___26749){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26667__auto___26749),args);
});})(g__26667__auto___26749))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__26667__auto___26749){
return (function (seq26712){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26712));
});})(g__26667__auto___26749))
;


var g__26667__auto___26753 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__26667__auto___26753){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26754 = arguments.length;
var i__9641__auto___26755 = (0);
while(true){
if((i__9641__auto___26755 < len__9640__auto___26754)){
args__9647__auto__.push((arguments[i__9641__auto___26755]));

var G__26756 = (i__9641__auto___26755 + (1));
i__9641__auto___26755 = G__26756;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26667__auto___26753))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26667__auto___26753){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26667__auto___26753),args);
});})(g__26667__auto___26753))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__26667__auto___26753){
return (function (seq26713){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26713));
});})(g__26667__auto___26753))
;


var g__26667__auto___26757 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__26667__auto___26757){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26758 = arguments.length;
var i__9641__auto___26759 = (0);
while(true){
if((i__9641__auto___26759 < len__9640__auto___26758)){
args__9647__auto__.push((arguments[i__9641__auto___26759]));

var G__26760 = (i__9641__auto___26759 + (1));
i__9641__auto___26759 = G__26760;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26667__auto___26757))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26667__auto___26757){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26667__auto___26757),args);
});})(g__26667__auto___26757))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__26667__auto___26757){
return (function (seq26714){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26714));
});})(g__26667__auto___26757))
;


var g__26667__auto___26761 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__26667__auto___26761){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26762 = arguments.length;
var i__9641__auto___26763 = (0);
while(true){
if((i__9641__auto___26763 < len__9640__auto___26762)){
args__9647__auto__.push((arguments[i__9641__auto___26763]));

var G__26764 = (i__9641__auto___26763 + (1));
i__9641__auto___26763 = G__26764;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26667__auto___26761))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26667__auto___26761){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26667__auto___26761),args);
});})(g__26667__auto___26761))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__26667__auto___26761){
return (function (seq26715){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26715));
});})(g__26667__auto___26761))
;


var g__26667__auto___26765 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__26667__auto___26765){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26766 = arguments.length;
var i__9641__auto___26767 = (0);
while(true){
if((i__9641__auto___26767 < len__9640__auto___26766)){
args__9647__auto__.push((arguments[i__9641__auto___26767]));

var G__26768 = (i__9641__auto___26767 + (1));
i__9641__auto___26767 = G__26768;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26667__auto___26765))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26667__auto___26765){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26667__auto___26765),args);
});})(g__26667__auto___26765))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__26667__auto___26765){
return (function (seq26716){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26716));
});})(g__26667__auto___26765))
;


var g__26667__auto___26769 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__26667__auto___26769){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26770 = arguments.length;
var i__9641__auto___26771 = (0);
while(true){
if((i__9641__auto___26771 < len__9640__auto___26770)){
args__9647__auto__.push((arguments[i__9641__auto___26771]));

var G__26772 = (i__9641__auto___26771 + (1));
i__9641__auto___26771 = G__26772;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26667__auto___26769))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26667__auto___26769){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26667__auto___26769),args);
});})(g__26667__auto___26769))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__26667__auto___26769){
return (function (seq26717){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26717));
});})(g__26667__auto___26769))
;


var g__26667__auto___26773 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__26667__auto___26773){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26774 = arguments.length;
var i__9641__auto___26775 = (0);
while(true){
if((i__9641__auto___26775 < len__9640__auto___26774)){
args__9647__auto__.push((arguments[i__9641__auto___26775]));

var G__26776 = (i__9641__auto___26775 + (1));
i__9641__auto___26775 = G__26776;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26667__auto___26773))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26667__auto___26773){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26667__auto___26773),args);
});})(g__26667__auto___26773))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__26667__auto___26773){
return (function (seq26718){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26718));
});})(g__26667__auto___26773))
;


var g__26667__auto___26777 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__26667__auto___26777){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26778 = arguments.length;
var i__9641__auto___26779 = (0);
while(true){
if((i__9641__auto___26779 < len__9640__auto___26778)){
args__9647__auto__.push((arguments[i__9641__auto___26779]));

var G__26780 = (i__9641__auto___26779 + (1));
i__9641__auto___26779 = G__26780;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26667__auto___26777))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26667__auto___26777){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26667__auto___26777),args);
});})(g__26667__auto___26777))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__26667__auto___26777){
return (function (seq26719){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26719));
});})(g__26667__auto___26777))
;


var g__26667__auto___26781 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__26667__auto___26781){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26782 = arguments.length;
var i__9641__auto___26783 = (0);
while(true){
if((i__9641__auto___26783 < len__9640__auto___26782)){
args__9647__auto__.push((arguments[i__9641__auto___26783]));

var G__26784 = (i__9641__auto___26783 + (1));
i__9641__auto___26783 = G__26784;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26667__auto___26781))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26667__auto___26781){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26667__auto___26781),args);
});})(g__26667__auto___26781))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__26667__auto___26781){
return (function (seq26720){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26720));
});})(g__26667__auto___26781))
;


var g__26667__auto___26785 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__26667__auto___26785){
return (function cljs$spec$gen$alpha$return(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26786 = arguments.length;
var i__9641__auto___26787 = (0);
while(true){
if((i__9641__auto___26787 < len__9640__auto___26786)){
args__9647__auto__.push((arguments[i__9641__auto___26787]));

var G__26788 = (i__9641__auto___26787 + (1));
i__9641__auto___26787 = G__26788;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26667__auto___26785))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26667__auto___26785){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26667__auto___26785),args);
});})(g__26667__auto___26785))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__26667__auto___26785){
return (function (seq26721){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26721));
});})(g__26667__auto___26785))
;


var g__26667__auto___26789 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__26667__auto___26789){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26790 = arguments.length;
var i__9641__auto___26791 = (0);
while(true){
if((i__9641__auto___26791 < len__9640__auto___26790)){
args__9647__auto__.push((arguments[i__9641__auto___26791]));

var G__26792 = (i__9641__auto___26791 + (1));
i__9641__auto___26791 = G__26792;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26667__auto___26789))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26667__auto___26789){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26667__auto___26789),args);
});})(g__26667__auto___26789))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__26667__auto___26789){
return (function (seq26722){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26722));
});})(g__26667__auto___26789))
;


var g__26667__auto___26793 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__26667__auto___26793){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26794 = arguments.length;
var i__9641__auto___26795 = (0);
while(true){
if((i__9641__auto___26795 < len__9640__auto___26794)){
args__9647__auto__.push((arguments[i__9641__auto___26795]));

var G__26796 = (i__9641__auto___26795 + (1));
i__9641__auto___26795 = G__26796;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26667__auto___26793))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26667__auto___26793){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26667__auto___26793),args);
});})(g__26667__auto___26793))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__26667__auto___26793){
return (function (seq26723){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26723));
});})(g__26667__auto___26793))
;


var g__26667__auto___26797 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__26667__auto___26797){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26798 = arguments.length;
var i__9641__auto___26799 = (0);
while(true){
if((i__9641__auto___26799 < len__9640__auto___26798)){
args__9647__auto__.push((arguments[i__9641__auto___26799]));

var G__26800 = (i__9641__auto___26799 + (1));
i__9641__auto___26799 = G__26800;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26667__auto___26797))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26667__auto___26797){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26667__auto___26797),args);
});})(g__26667__auto___26797))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__26667__auto___26797){
return (function (seq26724){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26724));
});})(g__26667__auto___26797))
;

var g__26680__auto___26822 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__26680__auto___26822){
return (function cljs$spec$gen$alpha$any(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26823 = arguments.length;
var i__9641__auto___26824 = (0);
while(true){
if((i__9641__auto___26824 < len__9640__auto___26823)){
args__9647__auto__.push((arguments[i__9641__auto___26824]));

var G__26825 = (i__9641__auto___26824 + (1));
i__9641__auto___26824 = G__26825;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26680__auto___26822))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26680__auto___26822){
return (function (args){
return cljs.core.deref.call(null,g__26680__auto___26822);
});})(g__26680__auto___26822))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__26680__auto___26822){
return (function (seq26801){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26801));
});})(g__26680__auto___26822))
;


var g__26680__auto___26826 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__26680__auto___26826){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26827 = arguments.length;
var i__9641__auto___26828 = (0);
while(true){
if((i__9641__auto___26828 < len__9640__auto___26827)){
args__9647__auto__.push((arguments[i__9641__auto___26828]));

var G__26829 = (i__9641__auto___26828 + (1));
i__9641__auto___26828 = G__26829;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26680__auto___26826))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26680__auto___26826){
return (function (args){
return cljs.core.deref.call(null,g__26680__auto___26826);
});})(g__26680__auto___26826))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__26680__auto___26826){
return (function (seq26802){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26802));
});})(g__26680__auto___26826))
;


var g__26680__auto___26830 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__26680__auto___26830){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26831 = arguments.length;
var i__9641__auto___26832 = (0);
while(true){
if((i__9641__auto___26832 < len__9640__auto___26831)){
args__9647__auto__.push((arguments[i__9641__auto___26832]));

var G__26833 = (i__9641__auto___26832 + (1));
i__9641__auto___26832 = G__26833;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26680__auto___26830))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26680__auto___26830){
return (function (args){
return cljs.core.deref.call(null,g__26680__auto___26830);
});})(g__26680__auto___26830))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__26680__auto___26830){
return (function (seq26803){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26803));
});})(g__26680__auto___26830))
;


var g__26680__auto___26834 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__26680__auto___26834){
return (function cljs$spec$gen$alpha$char(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26835 = arguments.length;
var i__9641__auto___26836 = (0);
while(true){
if((i__9641__auto___26836 < len__9640__auto___26835)){
args__9647__auto__.push((arguments[i__9641__auto___26836]));

var G__26837 = (i__9641__auto___26836 + (1));
i__9641__auto___26836 = G__26837;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26680__auto___26834))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26680__auto___26834){
return (function (args){
return cljs.core.deref.call(null,g__26680__auto___26834);
});})(g__26680__auto___26834))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__26680__auto___26834){
return (function (seq26804){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26804));
});})(g__26680__auto___26834))
;


var g__26680__auto___26838 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__26680__auto___26838){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26839 = arguments.length;
var i__9641__auto___26840 = (0);
while(true){
if((i__9641__auto___26840 < len__9640__auto___26839)){
args__9647__auto__.push((arguments[i__9641__auto___26840]));

var G__26841 = (i__9641__auto___26840 + (1));
i__9641__auto___26840 = G__26841;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26680__auto___26838))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26680__auto___26838){
return (function (args){
return cljs.core.deref.call(null,g__26680__auto___26838);
});})(g__26680__auto___26838))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__26680__auto___26838){
return (function (seq26805){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26805));
});})(g__26680__auto___26838))
;


var g__26680__auto___26842 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__26680__auto___26842){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26843 = arguments.length;
var i__9641__auto___26844 = (0);
while(true){
if((i__9641__auto___26844 < len__9640__auto___26843)){
args__9647__auto__.push((arguments[i__9641__auto___26844]));

var G__26845 = (i__9641__auto___26844 + (1));
i__9641__auto___26844 = G__26845;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26680__auto___26842))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26680__auto___26842){
return (function (args){
return cljs.core.deref.call(null,g__26680__auto___26842);
});})(g__26680__auto___26842))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__26680__auto___26842){
return (function (seq26806){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26806));
});})(g__26680__auto___26842))
;


var g__26680__auto___26846 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__26680__auto___26846){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26847 = arguments.length;
var i__9641__auto___26848 = (0);
while(true){
if((i__9641__auto___26848 < len__9640__auto___26847)){
args__9647__auto__.push((arguments[i__9641__auto___26848]));

var G__26849 = (i__9641__auto___26848 + (1));
i__9641__auto___26848 = G__26849;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26680__auto___26846))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26680__auto___26846){
return (function (args){
return cljs.core.deref.call(null,g__26680__auto___26846);
});})(g__26680__auto___26846))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__26680__auto___26846){
return (function (seq26807){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26807));
});})(g__26680__auto___26846))
;


var g__26680__auto___26850 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__26680__auto___26850){
return (function cljs$spec$gen$alpha$double(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26851 = arguments.length;
var i__9641__auto___26852 = (0);
while(true){
if((i__9641__auto___26852 < len__9640__auto___26851)){
args__9647__auto__.push((arguments[i__9641__auto___26852]));

var G__26853 = (i__9641__auto___26852 + (1));
i__9641__auto___26852 = G__26853;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26680__auto___26850))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26680__auto___26850){
return (function (args){
return cljs.core.deref.call(null,g__26680__auto___26850);
});})(g__26680__auto___26850))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__26680__auto___26850){
return (function (seq26808){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26808));
});})(g__26680__auto___26850))
;


var g__26680__auto___26854 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__26680__auto___26854){
return (function cljs$spec$gen$alpha$int(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26855 = arguments.length;
var i__9641__auto___26856 = (0);
while(true){
if((i__9641__auto___26856 < len__9640__auto___26855)){
args__9647__auto__.push((arguments[i__9641__auto___26856]));

var G__26857 = (i__9641__auto___26856 + (1));
i__9641__auto___26856 = G__26857;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26680__auto___26854))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26680__auto___26854){
return (function (args){
return cljs.core.deref.call(null,g__26680__auto___26854);
});})(g__26680__auto___26854))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__26680__auto___26854){
return (function (seq26809){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26809));
});})(g__26680__auto___26854))
;


var g__26680__auto___26858 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__26680__auto___26858){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26859 = arguments.length;
var i__9641__auto___26860 = (0);
while(true){
if((i__9641__auto___26860 < len__9640__auto___26859)){
args__9647__auto__.push((arguments[i__9641__auto___26860]));

var G__26861 = (i__9641__auto___26860 + (1));
i__9641__auto___26860 = G__26861;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26680__auto___26858))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26680__auto___26858){
return (function (args){
return cljs.core.deref.call(null,g__26680__auto___26858);
});})(g__26680__auto___26858))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__26680__auto___26858){
return (function (seq26810){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26810));
});})(g__26680__auto___26858))
;


var g__26680__auto___26862 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__26680__auto___26862){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26863 = arguments.length;
var i__9641__auto___26864 = (0);
while(true){
if((i__9641__auto___26864 < len__9640__auto___26863)){
args__9647__auto__.push((arguments[i__9641__auto___26864]));

var G__26865 = (i__9641__auto___26864 + (1));
i__9641__auto___26864 = G__26865;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26680__auto___26862))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26680__auto___26862){
return (function (args){
return cljs.core.deref.call(null,g__26680__auto___26862);
});})(g__26680__auto___26862))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__26680__auto___26862){
return (function (seq26811){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26811));
});})(g__26680__auto___26862))
;


var g__26680__auto___26866 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__26680__auto___26866){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26867 = arguments.length;
var i__9641__auto___26868 = (0);
while(true){
if((i__9641__auto___26868 < len__9640__auto___26867)){
args__9647__auto__.push((arguments[i__9641__auto___26868]));

var G__26869 = (i__9641__auto___26868 + (1));
i__9641__auto___26868 = G__26869;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26680__auto___26866))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26680__auto___26866){
return (function (args){
return cljs.core.deref.call(null,g__26680__auto___26866);
});})(g__26680__auto___26866))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__26680__auto___26866){
return (function (seq26812){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26812));
});})(g__26680__auto___26866))
;


var g__26680__auto___26870 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__26680__auto___26870){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26871 = arguments.length;
var i__9641__auto___26872 = (0);
while(true){
if((i__9641__auto___26872 < len__9640__auto___26871)){
args__9647__auto__.push((arguments[i__9641__auto___26872]));

var G__26873 = (i__9641__auto___26872 + (1));
i__9641__auto___26872 = G__26873;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26680__auto___26870))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26680__auto___26870){
return (function (args){
return cljs.core.deref.call(null,g__26680__auto___26870);
});})(g__26680__auto___26870))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__26680__auto___26870){
return (function (seq26813){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26813));
});})(g__26680__auto___26870))
;


var g__26680__auto___26874 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__26680__auto___26874){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26875 = arguments.length;
var i__9641__auto___26876 = (0);
while(true){
if((i__9641__auto___26876 < len__9640__auto___26875)){
args__9647__auto__.push((arguments[i__9641__auto___26876]));

var G__26877 = (i__9641__auto___26876 + (1));
i__9641__auto___26876 = G__26877;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26680__auto___26874))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26680__auto___26874){
return (function (args){
return cljs.core.deref.call(null,g__26680__auto___26874);
});})(g__26680__auto___26874))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__26680__auto___26874){
return (function (seq26814){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26814));
});})(g__26680__auto___26874))
;


var g__26680__auto___26878 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__26680__auto___26878){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26879 = arguments.length;
var i__9641__auto___26880 = (0);
while(true){
if((i__9641__auto___26880 < len__9640__auto___26879)){
args__9647__auto__.push((arguments[i__9641__auto___26880]));

var G__26881 = (i__9641__auto___26880 + (1));
i__9641__auto___26880 = G__26881;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26680__auto___26878))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26680__auto___26878){
return (function (args){
return cljs.core.deref.call(null,g__26680__auto___26878);
});})(g__26680__auto___26878))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__26680__auto___26878){
return (function (seq26815){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26815));
});})(g__26680__auto___26878))
;


var g__26680__auto___26882 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__26680__auto___26882){
return (function cljs$spec$gen$alpha$string(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26883 = arguments.length;
var i__9641__auto___26884 = (0);
while(true){
if((i__9641__auto___26884 < len__9640__auto___26883)){
args__9647__auto__.push((arguments[i__9641__auto___26884]));

var G__26885 = (i__9641__auto___26884 + (1));
i__9641__auto___26884 = G__26885;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26680__auto___26882))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26680__auto___26882){
return (function (args){
return cljs.core.deref.call(null,g__26680__auto___26882);
});})(g__26680__auto___26882))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__26680__auto___26882){
return (function (seq26816){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26816));
});})(g__26680__auto___26882))
;


var g__26680__auto___26886 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__26680__auto___26886){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26887 = arguments.length;
var i__9641__auto___26888 = (0);
while(true){
if((i__9641__auto___26888 < len__9640__auto___26887)){
args__9647__auto__.push((arguments[i__9641__auto___26888]));

var G__26889 = (i__9641__auto___26888 + (1));
i__9641__auto___26888 = G__26889;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26680__auto___26886))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26680__auto___26886){
return (function (args){
return cljs.core.deref.call(null,g__26680__auto___26886);
});})(g__26680__auto___26886))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__26680__auto___26886){
return (function (seq26817){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26817));
});})(g__26680__auto___26886))
;


var g__26680__auto___26890 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__26680__auto___26890){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26891 = arguments.length;
var i__9641__auto___26892 = (0);
while(true){
if((i__9641__auto___26892 < len__9640__auto___26891)){
args__9647__auto__.push((arguments[i__9641__auto___26892]));

var G__26893 = (i__9641__auto___26892 + (1));
i__9641__auto___26892 = G__26893;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26680__auto___26890))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26680__auto___26890){
return (function (args){
return cljs.core.deref.call(null,g__26680__auto___26890);
});})(g__26680__auto___26890))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__26680__auto___26890){
return (function (seq26818){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26818));
});})(g__26680__auto___26890))
;


var g__26680__auto___26894 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__26680__auto___26894){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26895 = arguments.length;
var i__9641__auto___26896 = (0);
while(true){
if((i__9641__auto___26896 < len__9640__auto___26895)){
args__9647__auto__.push((arguments[i__9641__auto___26896]));

var G__26897 = (i__9641__auto___26896 + (1));
i__9641__auto___26896 = G__26897;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26680__auto___26894))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26680__auto___26894){
return (function (args){
return cljs.core.deref.call(null,g__26680__auto___26894);
});})(g__26680__auto___26894))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__26680__auto___26894){
return (function (seq26819){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26819));
});})(g__26680__auto___26894))
;


var g__26680__auto___26898 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__26680__auto___26898){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26899 = arguments.length;
var i__9641__auto___26900 = (0);
while(true){
if((i__9641__auto___26900 < len__9640__auto___26899)){
args__9647__auto__.push((arguments[i__9641__auto___26900]));

var G__26901 = (i__9641__auto___26900 + (1));
i__9641__auto___26900 = G__26901;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26680__auto___26898))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26680__auto___26898){
return (function (args){
return cljs.core.deref.call(null,g__26680__auto___26898);
});})(g__26680__auto___26898))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__26680__auto___26898){
return (function (seq26820){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26820));
});})(g__26680__auto___26898))
;


var g__26680__auto___26902 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__26680__auto___26902){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26903 = arguments.length;
var i__9641__auto___26904 = (0);
while(true){
if((i__9641__auto___26904 < len__9640__auto___26903)){
args__9647__auto__.push((arguments[i__9641__auto___26904]));

var G__26905 = (i__9641__auto___26904 + (1));
i__9641__auto___26904 = G__26905;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});})(g__26680__auto___26902))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26680__auto___26902){
return (function (args){
return cljs.core.deref.call(null,g__26680__auto___26902);
});})(g__26680__auto___26902))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__26680__auto___26902){
return (function (seq26821){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26821));
});})(g__26680__auto___26902))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__9647__auto__ = [];
var len__9640__auto___26908 = arguments.length;
var i__9641__auto___26909 = (0);
while(true){
if((i__9641__auto___26909 < len__9640__auto___26908)){
args__9647__auto__.push((arguments[i__9641__auto___26909]));

var G__26910 = (i__9641__auto___26909 + (1));
i__9641__auto___26909 = G__26910;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__26906_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__26906_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq26907){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26907));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__26911_SHARP_){
return (new Date(p1__26911_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map
