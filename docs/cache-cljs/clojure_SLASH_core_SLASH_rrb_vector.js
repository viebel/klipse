// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants false}
goog.provide('clojure.core.rrb_vector');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector.protocols');
goog.require('clojure.core.rrb_vector.rrbt');
goog.require('clojure.core.rrb_vector.interop');
/**
 * Concatenates the given vectors in logarithmic time.
 */
clojure.core.rrb_vector.catvec = (function clojure$core$rrb_vector$catvec(var_args){
var args16253 = [];
var len__10660__auto___16273 = arguments.length;
var i__10661__auto___16274 = (0);
while(true){
if((i__10661__auto___16274 < len__10660__auto___16273)){
args16253.push((arguments[i__10661__auto___16274]));

var G__16278 = (i__10661__auto___16274 + (1));
i__10661__auto___16274 = G__16278;
continue;
} else {
}
break;
}

var G__16264 = args16253.length;
switch (G__16264) {
case 0:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args16253.slice((4)),(0),null));
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10683__auto__);

}
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$1 = (function (v1){
return v1;
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$2 = (function (v1,v2){
return clojure.core.rrb_vector.protocols._splicev(v1,v2);
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$3 = (function (v1,v2,v3){
return clojure.core.rrb_vector.protocols._splicev(clojure.core.rrb_vector.protocols._splicev(v1,v2),v3);
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$4 = (function (v1,v2,v3,v4){
return clojure.core.rrb_vector.protocols._splicev(clojure.core.rrb_vector.protocols._splicev(v1,v2),clojure.core.rrb_vector.protocols._splicev(v3,v4));
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic = (function (v1,v2,v3,v4,vn){
return clojure.core.rrb_vector.protocols._splicev(clojure.core.rrb_vector.protocols._splicev(clojure.core.rrb_vector.protocols._splicev(v1,v2),clojure.core.rrb_vector.protocols._splicev(v3,v4)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.catvec,vn));
});

clojure.core.rrb_vector.catvec.cljs$lang$applyTo = (function (seq16254){
var G__16255 = cljs.core.first(seq16254);
var seq16254__$1 = cljs.core.next(seq16254);
var G__16256 = cljs.core.first(seq16254__$1);
var seq16254__$2 = cljs.core.next(seq16254__$1);
var G__16257 = cljs.core.first(seq16254__$2);
var seq16254__$3 = cljs.core.next(seq16254__$2);
var G__16258 = cljs.core.first(seq16254__$3);
var seq16254__$4 = cljs.core.next(seq16254__$3);
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic(G__16255,G__16256,G__16257,G__16258,seq16254__$4);
});

clojure.core.rrb_vector.catvec.cljs$lang$maxFixedArity = (4);

/**
 * Returns a new vector containing the elements of the given vector v
 *   lying between the start (inclusive) and end (exclusive) indices in
 *   logarithmic time. end defaults to end of vector. The resulting
 *   vector shares structure with the original, but does not hold on to
 *   any elements of the original vector lying outside the given index
 *   range.
 */
clojure.core.rrb_vector.subvec = (function clojure$core$rrb_vector$subvec(var_args){
var args16295 = [];
var len__10660__auto___16304 = arguments.length;
var i__10661__auto___16305 = (0);
while(true){
if((i__10661__auto___16305 < len__10660__auto___16304)){
args16295.push((arguments[i__10661__auto___16305]));

var G__16306 = (i__10661__auto___16305 + (1));
i__10661__auto___16305 = G__16306;
continue;
} else {
}
break;
}

var G__16300 = args16295.length;
switch (G__16300) {
case 2:
return clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16295.length)].join('')));

}
});

clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
return clojure.core.rrb_vector.protocols._slicev(v,start,cljs.core.count(v));
});

clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
return clojure.core.rrb_vector.protocols._slicev(v,start,end);
});

clojure.core.rrb_vector.subvec.cljs$lang$maxFixedArity = 3;

/**
 * Creates a new vector containing the args.
 */
clojure.core.rrb_vector.vector = (function clojure$core$rrb_vector$vector(var_args){
var args16308 = [];
var len__10660__auto___16329 = arguments.length;
var i__10661__auto___16330 = (0);
while(true){
if((i__10661__auto___16330 < len__10660__auto___16329)){
args16308.push((arguments[i__10661__auto___16330]));

var G__16331 = (i__10661__auto___16330 + (1));
i__10661__auto___16330 = G__16331;
continue;
} else {
}
break;
}

var G__16316 = args16308.length;
switch (G__16316) {
case 0:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10683__auto__ = (new cljs.core.IndexedSeq(args16308.slice((4)),(0),null));
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10683__auto__);

}
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$0 = (function (){
var arr__16317 = [];
return (new clojure.core.rrb_vector.rrbt.Vector(0,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__16317,null,(0)));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$1 = (function (x1){
var arr__16318 = [null];
(arr__16318[(0)] = x1);

return (new clojure.core.rrb_vector.rrbt.Vector(1,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__16318,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$2 = (function (x1,x2){
var arr__16323 = [null,null];
(arr__16323[(0)] = x1);

(arr__16323[(1)] = x2);

return (new clojure.core.rrb_vector.rrbt.Vector(2,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__16323,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$3 = (function (x1,x2,x3){
var arr__16327 = [null,null,null];
(arr__16327[(0)] = x1);

(arr__16327[(1)] = x2);

(arr__16327[(2)] = x3);

return (new clojure.core.rrb_vector.rrbt.Vector(3,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__16327,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4 = (function (x1,x2,x3,x4){
var arr__16328 = [null,null,null,null];
(arr__16328[(0)] = x1);

(arr__16328[(1)] = x2);

(arr__16328[(2)] = x3);

(arr__16328[(3)] = x4);

return (new clojure.core.rrb_vector.rrbt.Vector(4,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__16328,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic = (function (x1,x2,x3,x4,xn){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4(x1,x2,x3,x4),xn);
});

clojure.core.rrb_vector.vector.cljs$lang$applyTo = (function (seq16309){
var G__16310 = cljs.core.first(seq16309);
var seq16309__$1 = cljs.core.next(seq16309);
var G__16311 = cljs.core.first(seq16309__$1);
var seq16309__$2 = cljs.core.next(seq16309__$1);
var G__16312 = cljs.core.first(seq16309__$2);
var seq16309__$3 = cljs.core.next(seq16309__$2);
var G__16313 = cljs.core.first(seq16309__$3);
var seq16309__$4 = cljs.core.next(seq16309__$3);
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic(G__16310,G__16311,G__16312,G__16313,seq16309__$4);
});

clojure.core.rrb_vector.vector.cljs$lang$maxFixedArity = (4);

/**
 * Returns a vector containing the contents of coll.
 * 
 *   If coll is a vector, returns an RRB vector using the internal tree
 *   of coll.
 */
clojure.core.rrb_vector.vec = (function clojure$core$rrb_vector$vec(coll){
if(cljs.core.vector_QMARK_(coll)){
return clojure.core.rrb_vector.rrbt._as_rrbt(coll);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.vector,coll);
}
});
