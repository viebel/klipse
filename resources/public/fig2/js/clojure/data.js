// Compiled by ClojureScript 1.9.908 {}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.call(null,a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq.call(null,m)){
return cljs.core.reduce.call(null,(function (result,p__28088){
var vec__28089 = p__28088;
var k = cljs.core.nth.call(null,vec__28089,(0),null);
var v = cljs.core.nth.call(null,vec__28089,(1),null);
return cljs.core.assoc.call(null,result,k,v);
}),cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.apply.call(null,cljs.core.max,cljs.core.keys.call(null,m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.call(null,a,k);
var vb = cljs.core.get.call(null,b,k);
var vec__28092 = clojure.data.diff.call(null,va,vb);
var a_STAR_ = cljs.core.nth.call(null,vec__28092,(0),null);
var b_STAR_ = cljs.core.nth.call(null,vec__28092,(1),null);
var ab = cljs.core.nth.call(null,vec__28092,(2),null);
var in_a = cljs.core.contains_QMARK_.call(null,a,k);
var in_b = cljs.core.contains_QMARK_.call(null,b,k);
var same = (in_a) && (in_b) && ((!((ab == null))) || (((va == null)) && ((vb == null))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((in_a) && ((!((a_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),(((in_b) && ((!((b_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__28096 = arguments.length;
switch (G__28096) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.call(null,a,b,clojure.set.union.call(null,cljs.core.keys.call(null,a),cljs.core.keys.call(null,b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.call(null,(function (diff1,diff2){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.call(null,cljs.core.partial.call(null,clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec.call(null,cljs.core.map.call(null,clojure.data.vectorize,clojure.data.diff_associative.call(null,((cljs.core.vector_QMARK_.call(null,a))?a:cljs.core.vec.call(null,a)),((cljs.core.vector_QMARK_.call(null,b))?b:cljs.core.vec.call(null,b)),cljs.core.range.call(null,(function (){var x__8715__auto__ = cljs.core.count.call(null,a);
var y__8716__auto__ = cljs.core.count.call(null,b);
return ((x__8715__auto__ > y__8716__auto__) ? x__8715__auto__ : y__8716__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty.call(null,clojure.set.difference.call(null,a,b)),cljs.core.not_empty.call(null,clojure.set.difference.call(null,b,a)),cljs.core.not_empty.call(null,clojure.set.intersection.call(null,a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__9096__auto__ = (((x == null))?null:x);
var m__9097__auto__ = (clojure.data.equality_partition[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,x);
} else {
var m__9097__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null)))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__9096__auto__ = (((a == null))?null:a);
var m__9097__auto__ = (clojure.data.diff_similar[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,a,b);
} else {
var m__9097__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

goog.object.set(clojure.data.equality_partition,"null",(function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
}));

goog.object.set(clojure.data.EqualityPartition,"string",true);

goog.object.set(clojure.data.equality_partition,"string",(function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
}));

goog.object.set(clojure.data.EqualityPartition,"number",true);

goog.object.set(clojure.data.equality_partition,"number",(function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
}));

goog.object.set(clojure.data.EqualityPartition,"array",true);

goog.object.set(clojure.data.equality_partition,"array",(function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
}));

goog.object.set(clojure.data.EqualityPartition,"function",true);

goog.object.set(clojure.data.equality_partition,"function",(function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
}));

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

goog.object.set(clojure.data.equality_partition,"boolean",(function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
}));

goog.object.set(clojure.data.EqualityPartition,"_",true);

goog.object.set(clojure.data.equality_partition,"_",(function (x){
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
}));
goog.object.set(clojure.data.Diff,"null",true);

goog.object.set(clojure.data.diff_similar,"null",(function (a,b){
return clojure.data.atom_diff.call(null,a,b);
}));

goog.object.set(clojure.data.Diff,"string",true);

goog.object.set(clojure.data.diff_similar,"string",(function (a,b){
return clojure.data.atom_diff.call(null,a,b);
}));

goog.object.set(clojure.data.Diff,"number",true);

goog.object.set(clojure.data.diff_similar,"number",(function (a,b){
return clojure.data.atom_diff.call(null,a,b);
}));

goog.object.set(clojure.data.Diff,"array",true);

goog.object.set(clojure.data.diff_similar,"array",(function (a,b){
return clojure.data.diff_sequential.call(null,a,b);
}));

goog.object.set(clojure.data.Diff,"function",true);

goog.object.set(clojure.data.diff_similar,"function",(function (a,b){
return clojure.data.atom_diff.call(null,a,b);
}));

goog.object.set(clojure.data.Diff,"boolean",true);

goog.object.set(clojure.data.diff_similar,"boolean",(function (a,b){
return clojure.data.atom_diff.call(null,a,b);
}));

goog.object.set(clojure.data.Diff,"_",true);

goog.object.set(clojure.data.diff_similar,"_",(function (a,b){
return (function (){var G__28101 = clojure.data.equality_partition.call(null,a);
var G__28101__$1 = (((G__28101 instanceof cljs.core.Keyword))?G__28101.fqn:null);
switch (G__28101__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28101__$1)].join('')));

}
})().call(null,a,b);
}));
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.call(null,a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.call(null,clojure.data.equality_partition.call(null,a),clojure.data.equality_partition.call(null,b))){
return clojure.data.diff_similar.call(null,a,b);
} else {
return clojure.data.atom_diff.call(null,a,b);
}
}
});

//# sourceMappingURL=data.js.map
