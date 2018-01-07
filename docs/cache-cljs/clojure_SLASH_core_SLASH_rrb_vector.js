// Compiled by ClojureScript 1.9.908 {:static-fns true, :fn-invoke-direct true, :optimize-constants false}
goog.provide('clojure.core.rrb_vector');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector.protocols');
goog.require('clojure.core.rrb_vector.rrbt');
goog.require('clojure.core.rrb_vector.interop');
/**
 * Concatenates the given vectors in logarithmic time.
 */
clojure.core.rrb_vector.catvec = (function clojure$core$rrb_vector$catvec(var_args){
var G__15126 = arguments.length;
switch (G__15126) {
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
var args_arr__10052__auto__ = [];
var len__10029__auto___15133 = arguments.length;
var i__10030__auto___15134 = (0);
while(true){
if((i__10030__auto___15134 < len__10029__auto___15133)){
args_arr__10052__auto__.push((arguments[i__10030__auto___15134]));

var G__15137 = (i__10030__auto___15134 + (1));
i__10030__auto___15134 = G__15137;
continue;
} else {
}
break;
}

var argseq__10053__auto__ = (new cljs.core.IndexedSeq(args_arr__10052__auto__.slice((4)),(0),null));
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10053__auto__);

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

clojure.core.rrb_vector.catvec.cljs$lang$applyTo = (function (seq15121){
var G__15122 = cljs.core.first(seq15121);
var seq15121__$1 = cljs.core.next(seq15121);
var G__15123 = cljs.core.first(seq15121__$1);
var seq15121__$2 = cljs.core.next(seq15121__$1);
var G__15124 = cljs.core.first(seq15121__$2);
var seq15121__$3 = cljs.core.next(seq15121__$2);
var G__15125 = cljs.core.first(seq15121__$3);
var seq15121__$4 = cljs.core.next(seq15121__$3);
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic(G__15122,G__15123,G__15124,G__15125,seq15121__$4);
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
var G__15142 = arguments.length;
switch (G__15142) {
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
var G__15153 = arguments.length;
switch (G__15153) {
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
var args_arr__10052__auto__ = [];
var len__10029__auto___15160 = arguments.length;
var i__10030__auto___15161 = (0);
while(true){
if((i__10030__auto___15161 < len__10029__auto___15160)){
args_arr__10052__auto__.push((arguments[i__10030__auto___15161]));

var G__15162 = (i__10030__auto___15161 + (1));
i__10030__auto___15161 = G__15162;
continue;
} else {
}
break;
}

var argseq__10053__auto__ = (new cljs.core.IndexedSeq(args_arr__10052__auto__.slice((4)),(0),null));
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10053__auto__);

}
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$0 = (function (){
var arr__15154 = [];
return (new clojure.core.rrb_vector.rrbt.Vector(0,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__15154,null,(0)));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$1 = (function (x1){
var arr__15155 = [null];
(arr__15155[(0)] = x1);

return (new clojure.core.rrb_vector.rrbt.Vector(1,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__15155,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$2 = (function (x1,x2){
var arr__15156 = [null,null];
(arr__15156[(0)] = x1);

(arr__15156[(1)] = x2);

return (new clojure.core.rrb_vector.rrbt.Vector(2,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__15156,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$3 = (function (x1,x2,x3){
var arr__15157 = [null,null,null];
(arr__15157[(0)] = x1);

(arr__15157[(1)] = x2);

(arr__15157[(2)] = x3);

return (new clojure.core.rrb_vector.rrbt.Vector(3,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__15157,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4 = (function (x1,x2,x3,x4){
var arr__15158 = [null,null,null,null];
(arr__15158[(0)] = x1);

(arr__15158[(1)] = x2);

(arr__15158[(2)] = x3);

(arr__15158[(3)] = x4);

return (new clojure.core.rrb_vector.rrbt.Vector(4,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__15158,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic = (function (x1,x2,x3,x4,xn){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4(x1,x2,x3,x4),xn);
});

clojure.core.rrb_vector.vector.cljs$lang$applyTo = (function (seq15148){
var G__15149 = cljs.core.first(seq15148);
var seq15148__$1 = cljs.core.next(seq15148);
var G__15150 = cljs.core.first(seq15148__$1);
var seq15148__$2 = cljs.core.next(seq15148__$1);
var G__15151 = cljs.core.first(seq15148__$2);
var seq15148__$3 = cljs.core.next(seq15148__$2);
var G__15152 = cljs.core.first(seq15148__$3);
var seq15148__$4 = cljs.core.next(seq15148__$3);
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic(G__15149,G__15150,G__15151,G__15152,seq15148__$4);
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
