goog.provide("clojure.data");
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
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
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__2887){
var vec__2888 = p__2887;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2888,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2888,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__2891 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff(va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2891,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2891,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2891,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = (in_a) && (in_b) && ((!((ab == null))) || (((va == null)) && ((vb == null))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((in_a) && ((!((a_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),(((in_b) && ((!((b_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__2895 = arguments.length;
switch (G__2895) {
case (2):
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = (3);

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__22485__auto__ = cljs.core.count(a);
var y__22486__auto__ = cljs.core.count(b);
return ((x__22485__auto__ > y__22486__auto__) ? x__22485__auto__ : y__22486__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
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
var x__22826__auto__ = (((x == null))?null:x);
var m__22827__auto__ = (clojure.data.equality_partition[goog.typeOf(x__22826__auto__)]);
if(!((m__22827__auto__ == null))){
return (m__22827__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22827__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__22827__auto__(x));
} else {
var m__22827__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__22827__auto____$1 == null))){
return (m__22827__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22827__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__22827__auto____$1(x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
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
var x__22826__auto__ = (((a == null))?null:a);
var m__22827__auto__ = (clojure.data.diff_similar[goog.typeOf(x__22826__auto__)]);
if(!((m__22827__auto__ == null))){
return (m__22827__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22827__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__22827__auto__(a,b));
} else {
var m__22827__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__22827__auto____$1 == null))){
return (m__22827__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22827__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__22827__auto____$1(a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__2897_2921 = clojure.data.equality_partition;
var G__2898_2922 = "null";
var G__2899_2923 = ((function (G__2897_2921,G__2898_2922){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",(-397043653));
});})(G__2897_2921,G__2898_2922))
;
goog.object.set(G__2897_2921,G__2898_2922,G__2899_2923);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__2900_2924 = clojure.data.equality_partition;
var G__2901_2925 = "string";
var G__2902_2926 = ((function (G__2900_2924,G__2901_2925){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",(-397043653));
});})(G__2900_2924,G__2901_2925))
;
goog.object.set(G__2900_2924,G__2901_2925,G__2902_2926);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__2903_2927 = clojure.data.equality_partition;
var G__2904_2928 = "number";
var G__2905_2929 = ((function (G__2903_2927,G__2904_2928){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",(-397043653));
});})(G__2903_2927,G__2904_2928))
;
goog.object.set(G__2903_2927,G__2904_2928,G__2905_2929);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__2906_2930 = clojure.data.equality_partition;
var G__2907_2931 = "array";
var G__2908_2932 = ((function (G__2906_2930,G__2907_2931){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",(-1082983960));
});})(G__2906_2930,G__2907_2931))
;
goog.object.set(G__2906_2930,G__2907_2931,G__2908_2932);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__2909_2933 = clojure.data.equality_partition;
var G__2910_2934 = "function";
var G__2911_2935 = ((function (G__2909_2933,G__2910_2934){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",(-397043653));
});})(G__2909_2933,G__2910_2934))
;
goog.object.set(G__2909_2933,G__2910_2934,G__2911_2935);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__2912_2936 = clojure.data.equality_partition;
var G__2913_2937 = "boolean";
var G__2914_2938 = ((function (G__2912_2936,G__2913_2937){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",(-397043653));
});})(G__2912_2936,G__2913_2937))
;
goog.object.set(G__2912_2936,G__2913_2937,G__2914_2938);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__2915_2939 = clojure.data.equality_partition;
var G__2916_2940 = "_";
var G__2917_2941 = ((function (G__2915_2939,G__2916_2940){
return (function (x){
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",(1371690461));
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",(304602554));
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",(-1082983960));
} else {
return new cljs.core.Keyword(null,"atom","atom",(-397043653));

}
}
}
});})(G__2915_2939,G__2916_2940))
;
goog.object.set(G__2915_2939,G__2916_2940,G__2917_2941);
goog.object.set(clojure.data.Diff,"null",true);

var G__2942_2966 = clojure.data.diff_similar;
var G__2943_2967 = "null";
var G__2944_2968 = ((function (G__2942_2966,G__2943_2967){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__2942_2966,G__2943_2967))
;
goog.object.set(G__2942_2966,G__2943_2967,G__2944_2968);

goog.object.set(clojure.data.Diff,"string",true);

var G__2945_2969 = clojure.data.diff_similar;
var G__2946_2970 = "string";
var G__2947_2971 = ((function (G__2945_2969,G__2946_2970){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__2945_2969,G__2946_2970))
;
goog.object.set(G__2945_2969,G__2946_2970,G__2947_2971);

goog.object.set(clojure.data.Diff,"number",true);

var G__2948_2972 = clojure.data.diff_similar;
var G__2949_2973 = "number";
var G__2950_2974 = ((function (G__2948_2972,G__2949_2973){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__2948_2972,G__2949_2973))
;
goog.object.set(G__2948_2972,G__2949_2973,G__2950_2974);

goog.object.set(clojure.data.Diff,"array",true);

var G__2951_2975 = clojure.data.diff_similar;
var G__2952_2976 = "array";
var G__2953_2977 = ((function (G__2951_2975,G__2952_2976){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__2951_2975,G__2952_2976))
;
goog.object.set(G__2951_2975,G__2952_2976,G__2953_2977);

goog.object.set(clojure.data.Diff,"function",true);

var G__2954_2978 = clojure.data.diff_similar;
var G__2955_2979 = "function";
var G__2956_2980 = ((function (G__2954_2978,G__2955_2979){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__2954_2978,G__2955_2979))
;
goog.object.set(G__2954_2978,G__2955_2979,G__2956_2980);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__2957_2981 = clojure.data.diff_similar;
var G__2958_2982 = "boolean";
var G__2959_2983 = ((function (G__2957_2981,G__2958_2982){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__2957_2981,G__2958_2982))
;
goog.object.set(G__2957_2981,G__2958_2982,G__2959_2983);

goog.object.set(clojure.data.Diff,"_",true);

var G__2960_2984 = clojure.data.diff_similar;
var G__2961_2985 = "_";
var G__2962_2986 = ((function (G__2960_2984,G__2961_2985){
return (function (a,b){
var fexpr__2964 = (function (){var G__2965 = clojure.data.equality_partition(a);
var G__2965__$1 = (((G__2965 instanceof cljs.core.Keyword))?G__2965.fqn:null);
switch (G__2965__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__2965__$1)].join('')));

}
})();
return (fexpr__2964.cljs$core$IFn$_invoke$arity$2 ? fexpr__2964.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__2964(a,b));
});})(G__2960_2984,G__2961_2985))
;
goog.object.set(G__2960_2984,G__2961_2985,G__2962_2986);
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
