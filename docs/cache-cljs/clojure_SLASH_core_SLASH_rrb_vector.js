// Compiled by ClojureScript 1.9.946 {:static-fns true, :fn-invoke-direct true, :optimize-constants false}
goog.provide('clojure.core.rrb_vector');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector.protocols');
goog.require('clojure.core.rrb_vector.rrbt');
goog.require('clojure.core.rrb_vector.interop');
/**
 * Concatenates the given vectors in logarithmic time.
 */
clojure.core.rrb_vector.catvec = (function clojure$core$rrb_vector$catvec(var_args){
var G__18638 = arguments.length;
switch (G__18638) {
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
var args_arr__10110__auto__ = [];
var len__10087__auto___18640 = arguments.length;
var i__10088__auto___18641 = (0);
while(true){
if((i__10088__auto___18641 < len__10087__auto___18640)){
args_arr__10110__auto__.push((arguments[i__10088__auto___18641]));

var G__18642 = (i__10088__auto___18641 + (1));
i__10088__auto___18641 = G__18642;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

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

clojure.core.rrb_vector.catvec.cljs$lang$applyTo = (function (seq18633){
var G__18634 = cljs.core.first(seq18633);
var seq18633__$1 = cljs.core.next(seq18633);
var G__18635 = cljs.core.first(seq18633__$1);
var seq18633__$2 = cljs.core.next(seq18633__$1);
var G__18636 = cljs.core.first(seq18633__$2);
var seq18633__$3 = cljs.core.next(seq18633__$2);
var G__18637 = cljs.core.first(seq18633__$3);
var seq18633__$4 = cljs.core.next(seq18633__$3);
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic(G__18634,G__18635,G__18636,G__18637,seq18633__$4);
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
var G__18644 = arguments.length;
switch (G__18644) {
case 2:
return clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__18652 = arguments.length;
switch (G__18652) {
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
var args_arr__10110__auto__ = [];
var len__10087__auto___18659 = arguments.length;
var i__10088__auto___18660 = (0);
while(true){
if((i__10088__auto___18660 < len__10087__auto___18659)){
args_arr__10110__auto__.push((arguments[i__10088__auto___18660]));

var G__18661 = (i__10088__auto___18660 + (1));
i__10088__auto___18660 = G__18661;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$0 = (function (){
var arr__18653 = [];
return (new clojure.core.rrb_vector.rrbt.Vector(0,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__18653,null,(0)));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$1 = (function (x1){
var arr__18654 = [null];
(arr__18654[(0)] = x1);

return (new clojure.core.rrb_vector.rrbt.Vector(1,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__18654,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$2 = (function (x1,x2){
var arr__18655 = [null,null];
(arr__18655[(0)] = x1);

(arr__18655[(1)] = x2);

return (new clojure.core.rrb_vector.rrbt.Vector(2,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__18655,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$3 = (function (x1,x2,x3){
var arr__18656 = [null,null,null];
(arr__18656[(0)] = x1);

(arr__18656[(1)] = x2);

(arr__18656[(2)] = x3);

return (new clojure.core.rrb_vector.rrbt.Vector(3,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__18656,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4 = (function (x1,x2,x3,x4){
var arr__18657 = [null,null,null,null];
(arr__18657[(0)] = x1);

(arr__18657[(1)] = x2);

(arr__18657[(2)] = x3);

(arr__18657[(3)] = x4);

return (new clojure.core.rrb_vector.rrbt.Vector(4,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__18657,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic = (function (x1,x2,x3,x4,xn){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4(x1,x2,x3,x4),xn);
});

clojure.core.rrb_vector.vector.cljs$lang$applyTo = (function (seq18647){
var G__18648 = cljs.core.first(seq18647);
var seq18647__$1 = cljs.core.next(seq18647);
var G__18649 = cljs.core.first(seq18647__$1);
var seq18647__$2 = cljs.core.next(seq18647__$1);
var G__18650 = cljs.core.first(seq18647__$2);
var seq18647__$3 = cljs.core.next(seq18647__$2);
var G__18651 = cljs.core.first(seq18647__$3);
var seq18647__$4 = cljs.core.next(seq18647__$3);
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic(G__18648,G__18649,G__18650,G__18651,seq18647__$4);
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
