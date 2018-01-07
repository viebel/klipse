// Compiled by ClojureScript 1.9.908 {:static-fns true, :fn-invoke-direct true, :optimize-constants false}
goog.provide('clojure.core.rrb_vector.rrbt');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector.protocols');
goog.require('clojure.core.rrb_vector.nodes');
goog.require('clojure.core.rrb_vector.trees');
goog.require('clojure.core.rrb_vector.transients');
clojure.core.rrb_vector.rrbt.rrbt_concat_threshold = (33);
clojure.core.rrb_vector.rrbt.max_extra_search_steps = (2);

/**
 * @interface
 */
clojure.core.rrb_vector.rrbt.AsRRBT = function(){};

clojure.core.rrb_vector.rrbt._as_rrbt = (function clojure$core$rrb_vector$rrbt$_as_rrbt(v){
if((!((v == null))) && (!((v.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 == null)))){
return v.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1(v);
} else {
var x__9485__auto__ = (((v == null))?null:v);
var m__9486__auto__ = (clojure.core.rrb_vector.rrbt._as_rrbt[goog.typeOf(x__9485__auto__)]);
if(!((m__9486__auto__ == null))){
return (m__9486__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9486__auto__.cljs$core$IFn$_invoke$arity$1(v) : m__9486__auto__(v));
} else {
var m__9486__auto____$1 = (clojure.core.rrb_vector.rrbt._as_rrbt["_"]);
if(!((m__9486__auto____$1 == null))){
return (m__9486__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9486__auto____$1.cljs$core$IFn$_invoke$arity$1(v) : m__9486__auto____$1(v));
} else {
throw cljs.core.missing_protocol("AsRRBT.-as-rrbt",v);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ASeq}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IChunkedNext}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {clojure.core.rrb_vector.rrbt.Object}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IChunkedSeq}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
clojure.core.rrb_vector.rrbt.RRBChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2179858668;
this.cljs$lang$protocol_mask$partition1$ = 1536;
});
clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,this$__$1);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = (function (){var G__14497 = self__.vec;
var G__14498 = self__.node;
var G__14499 = self__.i;
var G__14500 = (self__.off + (1));
return (clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4(G__14497,G__14498,G__14499,G__14500) : clojure.core.rrb_vector.rrbt.rrb_chunked_seq(G__14497,G__14498,G__14499,G__14500));
})();
if((s == null)){
return null;
} else {
return s;
}
} else {
return coll__$1.cljs$core$IChunkedNext$_chunked_next$arity$1(null);
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__9208__auto__ = self__.__hash;
if(!((h__9208__auto__ == null))){
return h__9208__auto__;
} else {
var h__9208__auto____$1 = cljs.core.hash_coll(coll__$1);
self__.__hash = h__9208__auto____$1;

return h__9208__auto____$1;
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(self__.vec,(self__.i + self__.off),cljs.core.count(self__.vec)),f);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(self__.vec,(self__.i + self__.off),cljs.core.count(self__.vec)),f,start);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.node[self__.off]);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = (function (){var G__14501 = self__.vec;
var G__14502 = self__.node;
var G__14503 = self__.i;
var G__14504 = (self__.off + (1));
return (clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4(G__14501,G__14502,G__14503,G__14504) : clojure.core.rrb_vector.rrbt.rrb_chunked_seq(G__14501,G__14502,G__14503,G__14504));
})();
if((s == null)){
return cljs.core.List.EMPTY;
} else {
return s;
}
} else {
return coll__$1.cljs$core$IChunkedSeq$_chunked_rest$arity$1(null);
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_chunk.cljs$core$IFn$_invoke$arity$2(self__.node,self__.off);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var l = self__.node.length;
var s = ((((self__.i + l) < cljs.core._count(self__.vec)))?(function (){var G__14505 = self__.vec;
var G__14506 = (self__.i + l);
var G__14507 = (0);
return (clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3 ? clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3(G__14505,G__14506,G__14507) : clojure.core.rrb_vector.rrbt.rrb_chunked_seq(G__14505,G__14506,G__14507));
})():null);
if((s == null)){
return cljs.core.List.EMPTY;
} else {
return s;
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
var coll__$1 = this;
return (clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$5(self__.vec,self__.node,self__.i,self__.off,m) : clojure.core.rrb_vector.rrbt.rrb_chunked_seq(self__.vec,self__.node,self__.i,self__.off,m));
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var l = self__.node.length;
var s = ((((self__.i + l) < cljs.core._count(self__.vec)))?(function (){var G__14508 = self__.vec;
var G__14509 = (self__.i + l);
var G__14510 = (0);
return (clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3 ? clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3(G__14508,G__14509,G__14510) : clojure.core.rrb_vector.rrbt.rrb_chunked_seq(G__14508,G__14509,G__14510));
})():null);
if((s == null)){
return null;
} else {
return s;
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec","vec",982683596,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"off","off",-2047994980,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$type = true;

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$ctorStr = "clojure.core.rrb-vector.rrbt/RRBChunkedSeq";

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$ctorPrWriter = (function (this__9423__auto__,writer__9424__auto__,opt__9425__auto__){
return cljs.core._write(writer__9424__auto__,"clojure.core.rrb-vector.rrbt/RRBChunkedSeq");
});

clojure.core.rrb_vector.rrbt.__GT_RRBChunkedSeq = (function clojure$core$rrb_vector$rrbt$__GT_RRBChunkedSeq(vec,node,i,off,meta,__hash){
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,meta,__hash));
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq = (function clojure$core$rrb_vector$rrbt$rrb_chunked_seq(var_args){
var G__14512 = arguments.length;
switch (G__14512) {
case 3:
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3 = (function (vec,i,off){
var cnt = vec.cnt;
var shift = vec.shift;
var root = vec.root;
var tail = vec.tail;
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,clojure.core.rrb_vector.trees.array_for(cnt,shift,root,tail,i),i,off,null,null));
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4 = (function (vec,node,i,off){
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,null,null));
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$5 = (function (vec,node,i,off,meta){
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,meta,null));
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$lang$maxFixedArity = 5;

clojure.core.rrb_vector.rrbt.slice_right = (function clojure$core$rrb_vector$rrbt$slice_right(node,shift,end){
if((shift === (0))){
var arr = node.arr;
var new_arr = (new Array(end));
cljs.core.array_copy(arr,(0),new_arr,(0),end);

return cljs.core.__GT_VectorNode(null,new_arr);
} else {
var reg_QMARK_ = clojure.core.rrb_vector.nodes.regular_QMARK_(node);
var rngs = ((cljs.core.not(reg_QMARK_))?clojure.core.rrb_vector.nodes.ranges(node):null);
var i = (((end - (1)) >> shift) & (31));
var i__$1 = (cljs.core.truth_(reg_QMARK_)?i:(function (){var j = i;
while(true){
if((end <= (rngs[j]))){
return j;
} else {
var G__14517 = (j + (1));
j = G__14517;
continue;
}
break;
}
})());
var child_end = (cljs.core.truth_(reg_QMARK_)?(function (){var ce = cljs.core.mod(end,((1) << shift));
if((ce === (0))){
return ((1) << shift);
} else {
return ce;
}
})():(((i__$1 > (0)))?(end - (rngs[(i__$1 - (1))])):end));
var arr = node.arr;
var new_child = (function (){var G__14514 = (arr[i__$1]);
var G__14515 = (shift - (5));
var G__14516 = child_end;
return (clojure.core.rrb_vector.rrbt.slice_right.cljs$core$IFn$_invoke$arity$3 ? clojure.core.rrb_vector.rrbt.slice_right.cljs$core$IFn$_invoke$arity$3(G__14514,G__14515,G__14516) : clojure.core.rrb_vector.rrbt.slice_right(G__14514,G__14515,G__14516));
})();
var regular_child_QMARK_ = (((shift === (5)))?((32) === new_child.arr.length):clojure.core.rrb_vector.nodes.regular_QMARK_(new_child));
var new_arr = (new Array((cljs.core.truth_((function (){var and__8740__auto__ = reg_QMARK_;
if(cljs.core.truth_(and__8740__auto__)){
return regular_child_QMARK_;
} else {
return and__8740__auto__;
}
})())?(32):(33))));
var new_child_rng = (cljs.core.truth_(regular_child_QMARK_)?(function (){var m = cljs.core.mod(child_end,((1) << shift));
if((m === (0))){
return ((1) << shift);
} else {
return m;
}
})():(((shift === (5)))?new_child.arr.length:clojure.core.rrb_vector.nodes.last_range(new_child)));
cljs.core.array_copy(arr,(0),new_arr,(0),i__$1);

(new_arr[i__$1] = new_child);

if(cljs.core.not((function (){var and__8740__auto__ = reg_QMARK_;
if(cljs.core.truth_(and__8740__auto__)){
return regular_child_QMARK_;
} else {
return and__8740__auto__;
}
})())){
var new_rngs_14518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var step_14519 = ((1) << shift);
if(cljs.core.truth_(reg_QMARK_)){
var n__9795__auto___14520 = i__$1;
var j_14521 = (0);
while(true){
if((j_14521 < n__9795__auto___14520)){
(new_rngs_14518[j_14521] = ((j_14521 + (1)) * step_14519));

var G__14522 = (j_14521 + (1));
j_14521 = G__14522;
continue;
} else {
}
break;
}
} else {
var n__9795__auto___14523 = i__$1;
var j_14524 = (0);
while(true){
if((j_14524 < n__9795__auto___14523)){
(new_rngs_14518[j_14524] = (rngs[j_14524]));

var G__14525 = (j_14524 + (1));
j_14524 = G__14525;
continue;
} else {
}
break;
}
}

(new_rngs_14518[i__$1] = ((((i__$1 > (0)))?(new_rngs_14518[(i__$1 - (1))]):(0)) + new_child_rng));

(new_rngs_14518[(32)] = (i__$1 + (1)));

(new_arr[(32)] = new_rngs_14518);
} else {
}

return cljs.core.__GT_VectorNode(null,new_arr);
}
});
clojure.core.rrb_vector.rrbt.slice_left = (function clojure$core$rrb_vector$rrbt$slice_left(node,shift,start,end){
if((shift === (0))){
var arr = node.arr;
var new_len = (arr.length - start);
var new_arr = (new Array(new_len));
cljs.core.array_copy(arr,start,new_arr,(0),new_len);

return cljs.core.__GT_VectorNode(null,new_arr);
} else {
var reg_QMARK_ = clojure.core.rrb_vector.nodes.regular_QMARK_(node);
var arr = node.arr;
var rngs = ((cljs.core.not(reg_QMARK_))?clojure.core.rrb_vector.nodes.ranges(node):null);
var i = ((start >> shift) & (31));
var i__$1 = (cljs.core.truth_(reg_QMARK_)?i:(function (){var j = i;
while(true){
if((start < (rngs[j]))){
return j;
} else {
var G__14530 = (j + (1));
j = G__14530;
continue;
}
break;
}
})());
var len = (cljs.core.truth_(reg_QMARK_)?(function (){var i__$2 = i__$1;
while(true){
if(((i__$2 === (32))) || (((arr[i__$2]) == null))){
return i__$2;
} else {
var G__14531 = (i__$2 + (1));
i__$2 = G__14531;
continue;
}
break;
}
})():(rngs[(32)]));
var child_start = (((i__$1 > (0)))?(start - (cljs.core.truth_(reg_QMARK_)?(i__$1 * ((1) << shift)):(rngs[(i__$1 - (1))]))):start);
var child_end = (function (){var x__9111__auto__ = ((1) << shift);
var y__9112__auto__ = (((i__$1 > (0)))?(end - (cljs.core.truth_(reg_QMARK_)?(i__$1 * ((1) << shift)):(rngs[(i__$1 - (1))]))):end);
return ((x__9111__auto__ < y__9112__auto__) ? x__9111__auto__ : y__9112__auto__);
})();
var new_child = (function (){var G__14526 = (arr[i__$1]);
var G__14527 = (shift - (5));
var G__14528 = child_start;
var G__14529 = child_end;
return (clojure.core.rrb_vector.rrbt.slice_left.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.rrbt.slice_left.cljs$core$IFn$_invoke$arity$4(G__14526,G__14527,G__14528,G__14529) : clojure.core.rrb_vector.rrbt.slice_left(G__14526,G__14527,G__14528,G__14529));
})();
var new_len = (len - i__$1);
var new_len__$1 = (((new_child == null))?(new_len - (1)):new_len);
if((new_len__$1 === (0))){
return null;
} else {
if(cljs.core.truth_(reg_QMARK_)){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rngs__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rng0 = (cljs.core.truth_((function (){var or__8752__auto__ = (new_child == null);
if(or__8752__auto__){
return or__8752__auto__;
} else {
var or__8752__auto____$1 = (shift === (5));
if(or__8752__auto____$1){
return or__8752__auto____$1;
} else {
return clojure.core.rrb_vector.nodes.regular_QMARK_(new_child);
}
}
})())?(((1) << shift) - ((start >> (shift - (5))) & (31))):clojure.core.rrb_vector.nodes.last_range(new_child));
var step = ((1) << shift);
var j_14532 = (0);
var r_14533 = rng0;
while(true){
if((j_14532 < new_len__$1)){
(rngs__$1[j_14532] = r_14533);

var G__14534 = (j_14532 + (1));
var G__14535 = (r_14533 + step);
j_14532 = G__14534;
r_14533 = G__14535;
continue;
} else {
}
break;
}

(rngs__$1[(new_len__$1 - (1))] = (end - start));

(rngs__$1[(32)] = new_len__$1);

cljs.core.array_copy(arr,(((new_child == null))?(i__$1 + (1)):i__$1),new_arr,(0),new_len__$1);

if(!((new_child == null))){
(new_arr[(0)] = new_child);
} else {
}

(new_arr[(32)] = rngs__$1);

return cljs.core.__GT_VectorNode(node.edit,new_arr);
} else {
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var j_14536 = (0);
var i_14537__$2 = i__$1;
while(true){
if((j_14536 < new_len__$1)){
(new_rngs[j_14536] = ((rngs[i_14537__$2]) - start));

var G__14538 = (j_14536 + (1));
var G__14539 = (i_14537__$2 + (1));
j_14536 = G__14538;
i_14537__$2 = G__14539;
continue;
} else {
}
break;
}

(new_rngs[(32)] = new_len__$1);

cljs.core.array_copy(arr,(((new_child == null))?(i__$1 + (1)):i__$1),new_arr,(0),new_len__$1);

if(!((new_child == null))){
(new_arr[(0)] = new_child);
} else {
}

(new_arr[(32)] = new_rngs);

return cljs.core.__GT_VectorNode(node.edit,new_arr);

}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IVector}
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEditableCollection}
 * @implements {clojure.core.rrb_vector.rrbt.AsRRBT}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {clojure.core.rrb_vector.protocols.PSliceableVector}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IMapEntry}
 * @implements {clojure.core.rrb_vector.rrbt.Object}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {clojure.core.rrb_vector.protocols.PSpliceableVector}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
clojure.core.rrb_vector.rrbt.Vector = (function (cnt,shift,root,tail,meta,__hash){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2315152159;
this.cljs$lang$protocol_mask$partition1$ = 2052;
});
clojure.core.rrb_vector.rrbt.Vector.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_(this$);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IIndexed$_nth$arity$3(null,k,null);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this$,f,init){
var self__ = this;
var this$__$1 = this;
var i = (0);
var j = (0);
var init__$1 = init;
var arr = clojure.core.rrb_vector.trees.array_for(self__.cnt,self__.shift,self__.root,self__.tail,i);
var lim = (arr.length - (1));
var step = (lim + (1));
while(true){
var init__$2 = (function (){var G__14541 = init__$1;
var G__14542 = (i + j);
var G__14543 = (arr[j]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14541,G__14542,G__14543) : f(G__14541,G__14542,G__14543));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
return cljs.core.deref(init__$2);
} else {
if((j < lim)){
var G__14554 = i;
var G__14555 = (j + (1));
var G__14556 = init__$2;
var G__14557 = arr;
var G__14558 = lim;
var G__14559 = step;
i = G__14554;
j = G__14555;
init__$1 = G__14556;
arr = G__14557;
lim = G__14558;
step = G__14559;
continue;
} else {
var i__$1 = (i + step);
if((i__$1 < self__.cnt)){
var arr__$1 = clojure.core.rrb_vector.trees.array_for(self__.cnt,self__.shift,self__.root,self__.tail,i__$1);
var len = arr__$1.length;
var lim__$1 = (len - (1));
var G__14560 = i__$1;
var G__14561 = (0);
var G__14562 = init__$2;
var G__14563 = arr__$1;
var G__14564 = lim__$1;
var G__14565 = len;
i = G__14560;
j = G__14561;
init__$1 = G__14562;
arr = G__14563;
lim = G__14564;
step = G__14565;
continue;
} else {
return init__$2;
}
}
}
break;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
if((((0) <= i)) && ((i < self__.cnt))){
var tail_off = (self__.cnt - self__.tail.length);
if((tail_off <= i)){
return (self__.tail[(i - tail_off)]);
} else {
var i__$1 = i;
var node = self__.root;
var shift__$1 = self__.shift;
while(true){
if((shift__$1 === (0))){
var arr = node.arr;
return (arr[((i__$1 >> shift__$1) & (31))]);
} else {
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(node))){
var arr = node.arr;
var idx = ((i__$1 >> shift__$1) & (31));
var i__$2 = i__$1;
var node__$1 = (arr[idx]);
var shift__$2 = (shift__$1 - (5));
while(true){
var arr__$1 = node__$1.arr;
var idx__$1 = ((i__$2 >> shift__$2) & (31));
if((shift__$2 === (0))){
return (arr__$1[idx__$1]);
} else {
var G__14566 = i__$2;
var G__14567 = (arr__$1[idx__$1]);
var G__14568 = (shift__$2 - (5));
i__$2 = G__14566;
node__$1 = G__14567;
shift__$2 = G__14568;
continue;
}
break;
}
} else {
var arr = node.arr;
var rngs = clojure.core.rrb_vector.nodes.ranges(node);
var idx = (function (){var j = ((i__$1 >> shift__$1) & (31));
while(true){
if((i__$1 < (rngs[j]))){
return j;
} else {
var G__14569 = (j + (1));
j = G__14569;
continue;
}
break;
}
})();
var i__$2 = (((idx === (0)))?i__$1:(i__$1 - (rngs[(idx - (1))])));
var G__14570 = i__$2;
var G__14571 = (arr[idx]);
var G__14572 = (shift__$1 - (5));
i__$1 = G__14570;
node = G__14571;
shift__$1 = G__14572;
continue;
}
}
break;
}
}
} else {
return cljs.core.vector_index_out_of_bounds(i,self__.cnt);
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
if(((i >= (0))) && ((i < self__.cnt))){
return this$__$1.cljs$core$IIndexed$_nth$arity$2(null,i);
} else {
return not_found;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,this$__$1);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (this$,i,val){
var self__ = this;
var this$__$1 = this;
if((((0) <= i)) && ((i < self__.cnt))){
var tail_off = clojure.core.rrb_vector.trees.tail_offset(self__.cnt,self__.tail);
if((i >= tail_off)){
var new_tail = (new Array(self__.tail.length));
var idx = (i - tail_off);
cljs.core.array_copy(self__.tail,(0),new_tail,(0),self__.tail.length);

(new_tail[idx] = val);

return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,new_tail,self__.meta,null));
} else {
return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,clojure.core.rrb_vector.trees.do_assoc(self__.shift,self__.root,i,val),self__.tail,self__.meta,null));
}
} else {
if((i === self__.cnt)){
return this$__$1.cljs$core$ICollection$_conj$arity$2(null,val);
} else {
return cljs.core.vector_index_out_of_bounds(i,self__.cnt);

}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IIndexed$_nth$arity$2(null,(0));
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IIndexed$_nth$arity$2(null,(1));
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt > (0))){
return this$__$1.cljs$core$IIndexed$_nth$arity$2(null,(self__.cnt - (1)));
} else {
return null;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
} else {
if((self__.tail.length > (1))){
var new_tail = (new Array((self__.tail.length - (1))));
cljs.core.array_copy(self__.tail,(0),new_tail,(0),new_tail.length);

return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),self__.shift,self__.root,new_tail,self__.meta,null));
} else {
var new_tail = clojure.core.rrb_vector.trees.array_for(self__.cnt,self__.shift,self__.root,self__.tail,(self__.cnt - (2)));
var root_cnt = clojure.core.rrb_vector.trees.tail_offset(self__.cnt,self__.tail);
var new_root = clojure.core.rrb_vector.trees.pop_tail(self__.shift,root_cnt,self__.root.edit,self__.root);
if((new_root == null)){
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),self__.shift,clojure.core.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else {
if(((self__.shift > (5))) && (((new_root.arr[(1)]) == null))){
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),(self__.shift - (5)),(new_root.arr[(0)]),new_tail,self__.meta,null));
} else {
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),self__.shift,new_root,new_tail,self__.meta,null));

}
}

}
}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt > (0))){
return (new cljs.core.RSeq(this$__$1,(self__.cnt - (1)),null));
} else {
return null;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__9208__auto__ = self__.__hash;
if(!((h__9208__auto__ == null))){
return h__9208__auto__;
} else {
var h__9208__auto____$1 = cljs.core.hash_coll(this$__$1);
self__.__hash = h__9208__auto____$1;

return h__9208__auto____$1;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return cljs.core.equiv_sequential(this$__$1,that);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__14544 = self__.cnt;
var G__14545 = self__.shift;
var G__14546 = clojure.core.rrb_vector.transients.editable_root(self__.root);
var G__14547 = clojure.core.rrb_vector.transients.editable_tail(self__.tail);
var G__14548 = self__.tail.length;
return (clojure.core.rrb_vector.rrbt.__GT_Transient.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.rrbt.__GT_Transient.cljs$core$IFn$_invoke$arity$5(G__14544,G__14545,G__14546,G__14547,G__14548) : clojure.core.rrb_vector.rrbt.__GT_Transient(G__14544,G__14545,G__14546,G__14547,G__14548));
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSliceableVector$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSliceableVector$_slicev$arity$3 = (function (this$,start,end){
var self__ = this;
var this$__$1 = this;
var new_cnt = (end - start);
if(((start < (0))) || ((end > self__.cnt))){
throw (new Error("vector index out of bounds"));
} else {
if((start === end)){
return cljs.core.empty(this$__$1);
} else {
if((start > end)){
throw (new Error("start index greater than end index"));
} else {
var tail_off = clojure.core.rrb_vector.trees.tail_offset(self__.cnt,self__.tail);
if((start >= tail_off)){
var new_tail = (new Array(new_cnt));
cljs.core.array_copy(self__.tail,(start - tail_off),new_tail,(0),new_cnt);

return (new clojure.core.rrb_vector.rrbt.Vector(new_cnt,(5),clojure.core.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else {
var tail_cut_QMARK_ = (end > tail_off);
var new_root = ((tail_cut_QMARK_)?self__.root:clojure.core.rrb_vector.rrbt.slice_right(self__.root,self__.shift,end));
var new_root__$1 = (((start === (0)))?new_root:clojure.core.rrb_vector.rrbt.slice_left(new_root,self__.shift,start,(function (){var x__9111__auto__ = end;
var y__9112__auto__ = tail_off;
return ((x__9111__auto__ < y__9112__auto__) ? x__9111__auto__ : y__9112__auto__);
})()));
var new_tail = ((tail_cut_QMARK_)?(function (){var new_len = (end - tail_off);
var new_tail = (new Array(new_len));
cljs.core.array_copy(self__.tail,(0),new_tail,(0),new_len);

return new_tail;
})():clojure.core.rrb_vector.trees.array_for(new_cnt,self__.shift,new_root__$1,[],(new_cnt - (1))));
var new_root__$2 = ((tail_cut_QMARK_)?new_root__$1:clojure.core.rrb_vector.trees.pop_tail(self__.shift,new_cnt,new_root__$1.edit,new_root__$1));
if((new_root__$2 == null)){
return (new clojure.core.rrb_vector.rrbt.Vector(new_cnt,(5),clojure.core.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else {
var r = new_root__$2;
var s = self__.shift;
while(true){
if(((s > (5))) && (((r.arr[(1)]) == null))){
var G__14573 = (r.arr[(0)]);
var G__14574 = (s - (5));
r = G__14573;
s = G__14574;
continue;
} else {
return (new clojure.core.rrb_vector.rrbt.Vector(new_cnt,s,r,new_tail,self__.meta,null));
}
break;
}
}
}

}
}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(this$__$1,f);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(this$__$1,f,start);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,k,v){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IVector$_assoc_n$arity$3(null,k,v);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt === (0))){
return null;
} else {
if((clojure.core.rrb_vector.trees.tail_offset(self__.cnt,self__.tail) === (0))){
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(self__.tail);
} else {
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3(this$__$1,(0),(0));

}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,self__.tail,meta__$1,self__.__hash));
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,val){
var self__ = this;
var this$__$1 = this;
if((self__.tail.length < (32))){
var tail_len = self__.tail.length;
var new_tail = (new Array((tail_len + (1))));
cljs.core.array_copy(self__.tail,(0),new_tail,(0),tail_len);

(new_tail[tail_len] = val);

return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),self__.shift,self__.root,new_tail,self__.meta,null));
} else {
var tail_node = cljs.core.__GT_VectorNode(self__.root.edit,self__.tail);
var new_tail = (function (){var new_arr = [null];
(new_arr[(0)] = val);

return new_arr;
})();
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.overflow_QMARK_(self__.root,self__.shift,self__.cnt))){
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(self__.root))){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode(self__.root.edit,new_arr);
var G__14549_14575 = new_arr;
(G__14549_14575[(0)] = self__.root);

(G__14549_14575[(1)] = clojure.core.rrb_vector.trees.new_path(self__.tail,self__.root.edit,self__.shift,tail_node));


return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),(self__.shift + (5)),new_root,new_tail,self__.meta,null));
} else {
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode(self__.root.edit,new_arr);
var root_total_range = (clojure.core.rrb_vector.nodes.ranges(self__.root)[(31)]);
var G__14550_14576 = new_arr;
(G__14550_14576[(0)] = self__.root);

(G__14550_14576[(1)] = clojure.core.rrb_vector.trees.new_path(self__.tail,self__.root.edit,self__.shift,tail_node));

(G__14550_14576[(32)] = new_rngs);


var G__14551_14577 = new_rngs;
(G__14551_14577[(0)] = root_total_range);

(G__14551_14577[(1)] = (root_total_range + (32)));

(G__14551_14577[(32)] = (2));


return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),(self__.shift + (5)),new_root,new_tail,self__.meta,null));
}
} else {
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),self__.shift,clojure.core.rrb_vector.trees.push_tail(self__.shift,self__.cnt,self__.root.edit,self__.root,tail_node),new_tail,self__.meta,null));
}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.call = (function() {
var G__14578 = null;
var G__14578__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__14578__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__14578 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14578__2.call(this,self__,k);
case 3:
return G__14578__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14578.cljs$core$IFn$_invoke$arity$2 = G__14578__2;
G__14578.cljs$core$IFn$_invoke$arity$3 = G__14578__3;
return G__14578;
})()
;

clojure.core.rrb_vector.rrbt.Vector.prototype.apply = (function (self__,args14540){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14540)));
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$IIndexed$_nth$arity$2(null,k);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(this$__$1,that);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSpliceableVector$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSpliceableVector$_splicev$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
var G__14552 = this$__$1;
var G__14553 = clojure.core.rrb_vector.rrbt._as_rrbt(that);
return (clojure.core.rrb_vector.rrbt.splice_rrbts.cljs$core$IFn$_invoke$arity$2 ? clojure.core.rrb_vector.rrbt.splice_rrbts.cljs$core$IFn$_invoke$arity$2(G__14552,G__14553) : clojure.core.rrb_vector.rrbt.splice_rrbts(G__14552,G__14553));
});

clojure.core.rrb_vector.rrbt.Vector.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"shift","shift",-1657295705,null),new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"tail","tail",494507963,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

clojure.core.rrb_vector.rrbt.Vector.cljs$lang$type = true;

clojure.core.rrb_vector.rrbt.Vector.cljs$lang$ctorStr = "clojure.core.rrb-vector.rrbt/Vector";

clojure.core.rrb_vector.rrbt.Vector.cljs$lang$ctorPrWriter = (function (this__9423__auto__,writer__9424__auto__,opt__9425__auto__){
return cljs.core._write(writer__9424__auto__,"clojure.core.rrb-vector.rrbt/Vector");
});

clojure.core.rrb_vector.rrbt.__GT_Vector = (function clojure$core$rrb_vector$rrbt$__GT_Vector(cnt,shift,root,tail,meta,__hash){
return (new clojure.core.rrb_vector.rrbt.Vector(cnt,shift,root,tail,meta,__hash));
});

cljs.core.PersistentVector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){
var this$__$1 = this;
return (new clojure.core.rrb_vector.rrbt.Vector(cljs.core.count(this$__$1),this$__$1.shift,this$__$1.root,this$__$1.tail,cljs.core.meta(this$__$1),null));
});

cljs.core.Subvec.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){
var this$__$1 = this;
var v = this$__$1.v;
var start = this$__$1.start;
var end = this$__$1.end;
return clojure.core.rrb_vector.protocols._slicev(clojure.core.rrb_vector.rrbt._as_rrbt(v),start,end);
});
clojure.core.rrb_vector.rrbt.shift_from_to = (function clojure$core$rrb_vector$rrbt$shift_from_to(node,from,to){
while(true){
if((from === to)){
return node;
} else {
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(node))){
var G__14582 = cljs.core.__GT_VectorNode(node.edit,(function (){var G__14579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__14579[(0)] = node);

return G__14579;
})());
var G__14583 = ((5) + from);
var G__14584 = to;
node = G__14582;
from = G__14583;
to = G__14584;
continue;
} else {
var G__14585 = cljs.core.__GT_VectorNode(node.edit,(function (){var G__14580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__14580[(0)] = node);

(G__14580[(32)] = (function (){var G__14581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__14581[(0)] = clojure.core.rrb_vector.nodes.last_range(node));

(G__14581[(32)] = (1));

return G__14581;
})());

return G__14580;
})());
var G__14586 = ((5) + from);
var G__14587 = to;
node = G__14585;
from = G__14586;
to = G__14587;
continue;

}
}
break;
}
});
clojure.core.rrb_vector.rrbt.slot_count = (function clojure$core$rrb_vector$rrbt$slot_count(node,shift){
var arr = node.arr;
if((shift === (0))){
return arr.length;
} else {
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(node))){
return clojure.core.rrb_vector.nodes.index_of_nil(arr);
} else {
var rngs = clojure.core.rrb_vector.nodes.ranges(node);
return (rngs[(32)]);
}
}
});
clojure.core.rrb_vector.rrbt.subtree_branch_count = (function clojure$core$rrb_vector$rrbt$subtree_branch_count(node,shift){
var arr = node.arr;
var cs = (shift - (5));
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(node))){
var i = (0);
var sbc = (0);
while(true){
if((i === (32))){
return sbc;
} else {
var temp__5276__auto__ = (arr[i]);
if(cljs.core.truth_(temp__5276__auto__)){
var child = temp__5276__auto__;
var G__14588 = (i + (1));
var G__14589 = (sbc + clojure.core.rrb_vector.rrbt.slot_count(child,cs));
i = G__14588;
sbc = G__14589;
continue;
} else {
return sbc;
}
}
break;
}
} else {
var lim = (clojure.core.rrb_vector.nodes.ranges(node)[(32)]);
var i = (0);
var sbc = (0);
while(true){
if((i === lim)){
return sbc;
} else {
var child = (arr[i]);
var G__14590 = (i + (1));
var G__14591 = (sbc + clojure.core.rrb_vector.rrbt.slot_count(child,cs));
i = G__14590;
sbc = G__14591;
continue;
}
break;
}
}
});
clojure.core.rrb_vector.rrbt.leaf_seq = (function clojure$core$rrb_vector$rrbt$leaf_seq(arr){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__14592_SHARP_){
return p1__14592_SHARP_.arr;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.take.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.nodes.index_of_nil(arr),arr)], 0));
});
clojure.core.rrb_vector.rrbt.rebalance_leaves = (function clojure$core$rrb_vector$rrbt$rebalance_leaves(n1,cnt1,n2,cnt2,transferred_leaves){
var slc1 = clojure.core.rrb_vector.rrbt.slot_count(n1,(5));
var slc2 = clojure.core.rrb_vector.rrbt.slot_count(n2,(5));
var a = (slc1 + slc2);
var sbc1 = clojure.core.rrb_vector.rrbt.subtree_branch_count(n1,(5));
var sbc2 = clojure.core.rrb_vector.rrbt.subtree_branch_count(n2,(5));
var p = (sbc1 + sbc2);
var e = (a - (cljs.core.quot((p - (1)),(32)) + (1)));
if((e <= (2))){
return [n1,n2];
} else {
if(((sbc1 + sbc2) <= (1024))){
var reg_QMARK_ = (cljs.core.mod(p,(32)) === (0));
var new_arr = (new Array(((reg_QMARK_)?(32):(33))));
var new_n1 = cljs.core.__GT_VectorNode(null,new_arr);
var i_14593 = (0);
var bs_14594 = cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((32),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.rrbt.leaf_seq(n1.arr),clojure.core.rrb_vector.rrbt.leaf_seq(n2.arr)));
while(true){
var temp__5278__auto___14595 = cljs.core.seq(bs_14594);
if(temp__5278__auto___14595){
var xs__5831__auto___14596 = temp__5278__auto___14595;
var block_14597 = cljs.core.first(xs__5831__auto___14596);
var a_14598__$1 = (new Array(cljs.core.count(block_14597)));
var i_14599__$1 = (0);
var xs_14600 = cljs.core.seq(block_14597);
while(true){
if(xs_14600){
(a_14598__$1[i_14599__$1] = cljs.core.first(xs_14600));

var G__14601 = (i_14599__$1 + (1));
var G__14602 = cljs.core.next(xs_14600);
i_14599__$1 = G__14601;
xs_14600 = G__14602;
continue;
} else {
}
break;
}

(new_arr[i_14593] = cljs.core.__GT_VectorNode(null,a_14598__$1));

var G__14603 = (i_14593 + (1));
var G__14604 = cljs.core.next(bs_14594);
i_14593 = G__14603;
bs_14594 = G__14604;
continue;
} else {
}
break;
}

if(!(reg_QMARK_)){
(new_arr[(32)] = clojure.core.rrb_vector.nodes.regular_ranges((5),p));
} else {
}

transferred_leaves.val = sbc2;

return [new_n1,null];
} else {
var reg_QMARK_ = (cljs.core.mod(p,(32)) === (0));
var new_arr1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_arr2 = (new Array(((reg_QMARK_)?(32):(33))));
var new_n1 = cljs.core.__GT_VectorNode(null,new_arr1);
var new_n2 = cljs.core.__GT_VectorNode(null,new_arr2);
var i_14605 = (0);
var bs_14606 = cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((32),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.rrbt.leaf_seq((new Array(n1))),clojure.core.rrb_vector.rrbt.leaf_seq((new Array(n2)))));
while(true){
var temp__5278__auto___14607 = cljs.core.seq(bs_14606);
if(temp__5278__auto___14607){
var xs__5831__auto___14608 = temp__5278__auto___14607;
var block_14609 = cljs.core.first(xs__5831__auto___14608);
var a_14610__$1 = (new Array(cljs.core.count(block_14609)));
var i_14611__$1 = (0);
var xs_14612 = cljs.core.seq(block_14609);
while(true){
if(xs_14612){
(a_14610__$1[i_14611__$1] = cljs.core.first(xs_14612));

var G__14613 = (i_14611__$1 + (1));
var G__14614 = cljs.core.next(xs_14612);
i_14611__$1 = G__14613;
xs_14612 = G__14614;
continue;
} else {
}
break;
}

if((i_14605 < (32))){
(new_arr1[i_14605] = cljs.core.__GT_VectorNode(null,a_14610__$1));
} else {
(new_arr2[(i_14605 - (32))] = cljs.core.__GT_VectorNode(null,a_14610__$1));
}

var G__14615 = (i_14605 + (1));
var G__14616 = cljs.core.next(bs_14606);
i_14605 = G__14615;
bs_14606 = G__14616;
continue;
} else {
}
break;
}

if(!(reg_QMARK_)){
(new_arr2[(32)] = clojure.core.rrb_vector.nodes.regular_ranges((5),(p - (1024))));
} else {
}

transferred_leaves.val = ((1024) - sbc1);

return [new_n1,new_n2];

}
}
});
clojure.core.rrb_vector.rrbt.child_seq = (function clojure$core$rrb_vector$rrbt$child_seq(node,shift,cnt){
var arr = node.arr;
var rngs = (cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(node))?clojure.core.rrb_vector.nodes.regular_ranges(shift,cnt):clojure.core.rrb_vector.nodes.ranges(node));
var cs = (cljs.core.truth_(rngs)?(rngs[(32)]):clojure.core.rrb_vector.nodes.index_of_nil(arr));
var cseq = ((function (arr,rngs,cs){
return (function clojure$core$rrb_vector$rrbt$child_seq_$_cseq(c,r){
var arr__$1 = c.arr;
var rngs__$1 = (cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(c))?clojure.core.rrb_vector.nodes.regular_ranges((shift - (5)),r):clojure.core.rrb_vector.nodes.ranges(c));
var gcs = (cljs.core.truth_(rngs__$1)?(rngs__$1[(32)]):clojure.core.rrb_vector.nodes.index_of_nil(arr__$1));
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,cljs.core.take.cljs$core$IFn$_invoke$arity$2(gcs,arr__$1),cljs.core.take.cljs$core$IFn$_invoke$arity$2(gcs,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,rngs__$1,cljs.core.cons((0),rngs__$1))));
});})(arr,rngs,cs))
;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cseq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.take.cljs$core$IFn$_invoke$arity$2(cs,arr),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cs,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,rngs,cljs.core.cons((0),rngs)))], 0));
});
clojure.core.rrb_vector.rrbt.rebalance = (function clojure$core$rrb_vector$rrbt$rebalance(shift,n1,cnt1,n2,cnt2,transferred_leaves){
if((n2 == null)){
return [n1,null];
} else {
var slc1 = clojure.core.rrb_vector.rrbt.slot_count(n1,shift);
var slc2 = clojure.core.rrb_vector.rrbt.slot_count(n2,shift);
var a = (slc1 + slc2);
var sbc1 = clojure.core.rrb_vector.rrbt.subtree_branch_count(n1,shift);
var sbc2 = clojure.core.rrb_vector.rrbt.subtree_branch_count(n2,shift);
var p = (sbc1 + sbc2);
var e = (a - (cljs.core.quot((p - (1)),(32)) + (1)));
if((e <= (2))){
return [n1,n2];
} else {
if(((sbc1 + sbc2) <= (1024))){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_n1 = cljs.core.__GT_VectorNode(null,new_arr);
var i_14623 = (0);
var bs_14624 = cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((32),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.rrbt.child_seq(n1,shift,cnt1),clojure.core.rrb_vector.rrbt.child_seq(n2,shift,cnt2)));
while(true){
var temp__5278__auto___14625 = cljs.core.seq(bs_14624);
if(temp__5278__auto___14625){
var xs__5831__auto___14626 = temp__5278__auto___14625;
var block_14627 = cljs.core.first(xs__5831__auto___14626);
var a_14628__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var r_14629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(a_14628__$1[(32)] = r_14629);

(r_14629[(32)] = cljs.core.count(block_14627));

var i_14630__$1 = (0);
var o_14631 = (0);
var gcs_14632 = cljs.core.seq(block_14627);
while(true){
var temp__5278__auto___14633__$1 = cljs.core.seq(gcs_14632);
if(temp__5278__auto___14633__$1){
var xs__5831__auto___14634__$1 = temp__5278__auto___14633__$1;
var vec__14617_14635 = cljs.core.first(xs__5831__auto___14634__$1);
var gc_14636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14617_14635,(0),null);
var gcr_14637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14617_14635,(1),null);
(a_14628__$1[i_14630__$1] = gc_14636);

(r_14629[i_14630__$1] = (o_14631 + gcr_14637));

var G__14638 = (i_14630__$1 + (1));
var G__14639 = (o_14631 + gcr_14637);
var G__14640 = cljs.core.next(gcs_14632);
i_14630__$1 = G__14638;
o_14631 = G__14639;
gcs_14632 = G__14640;
continue;
} else {
}
break;
}

(new_arr[i_14623] = cljs.core.__GT_VectorNode(null,a_14628__$1));

(new_rngs[i_14623] = ((r_14629[((r_14629[(32)]) - (1))]) + (((i_14623 > (0)))?(new_rngs[(i_14623 - (1))]):(0))));

(new_rngs[(32)] = (i_14623 + (1)));

var G__14641 = (i_14623 + (1));
var G__14642 = cljs.core.next(bs_14624);
i_14623 = G__14641;
bs_14624 = G__14642;
continue;
} else {
}
break;
}

(new_arr[(32)] = new_rngs);

transferred_leaves.val = cnt2;

return [new_n1,null];
} else {
var new_arr1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_arr2 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs2 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_n1 = cljs.core.__GT_VectorNode(null,new_arr1);
var new_n2 = cljs.core.__GT_VectorNode(null,new_arr2);
var i_14643 = (0);
var bs_14644 = cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((32),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.rrbt.child_seq(n1,shift,cnt1),clojure.core.rrb_vector.rrbt.child_seq(n2,shift,cnt2)));
while(true){
var temp__5278__auto___14645 = cljs.core.seq(bs_14644);
if(temp__5278__auto___14645){
var xs__5831__auto___14646 = temp__5278__auto___14645;
var block_14647 = cljs.core.first(xs__5831__auto___14646);
var a_14648__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var r_14649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(a_14648__$1[(32)] = r_14649);

(r_14649[(32)] = cljs.core.count(block_14647));

var i_14650__$1 = (0);
var o_14651 = (0);
var gcs_14652 = cljs.core.seq(block_14647);
while(true){
var temp__5278__auto___14653__$1 = cljs.core.seq(gcs_14652);
if(temp__5278__auto___14653__$1){
var xs__5831__auto___14654__$1 = temp__5278__auto___14653__$1;
var vec__14620_14655 = cljs.core.first(xs__5831__auto___14654__$1);
var gc_14656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14620_14655,(0),null);
var gcr_14657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14620_14655,(1),null);
(a_14648__$1[i_14650__$1] = gc_14656);

(r_14649[i_14650__$1] = (o_14651 + gcr_14657));

var G__14658 = (i_14650__$1 + (1));
var G__14659 = (o_14651 + gcr_14657);
var G__14660 = cljs.core.next(gcs_14652);
i_14650__$1 = G__14658;
o_14651 = G__14659;
gcs_14652 = G__14660;
continue;
} else {
}
break;
}

if(((i_14643 < (32))) && ((((i_14643 * (32)) + cljs.core.count(block_14647)) > sbc1))){
var tbs_14661 = (((i_14643 * (32)) + cljs.core.count(block_14647)) - sbc1);
var li_14662 = ((r_14649[(32)]) - (1));
var d_14663 = (((tbs_14661 >= (32)))?(r_14649[li_14662]):((r_14649[li_14662]) - (r_14649[(li_14662 - tbs_14661)])));
transferred_leaves.val = (transferred_leaves.val + d_14663);
} else {
}

var new_arr_14664 = (((i_14643 < (32)))?new_arr1:new_arr2);
var new_rngs_14665 = (((i_14643 < (32)))?new_rngs1:new_rngs2);
var i_14666__$1 = cljs.core.mod(i_14643,(32));
(new_arr_14664[i_14666__$1] = cljs.core.__GT_VectorNode(null,a_14648__$1));

(new_rngs_14665[i_14666__$1] = ((r_14649[((r_14649[(32)]) - (1))]) + (((i_14666__$1 > (0)))?(new_rngs_14665[(i_14666__$1 - (1))]):(0))));

(new_rngs_14665[(32)] = (i_14666__$1 + (1)));

var G__14667 = (i_14643 + (1));
var G__14668 = cljs.core.next(bs_14644);
i_14643 = G__14667;
bs_14644 = G__14668;
continue;
} else {
}
break;
}

(new_arr1[(32)] = new_rngs1);

(new_arr2[(32)] = new_rngs2);

return [new_n1,new_n2];

}
}
}
});
clojure.core.rrb_vector.rrbt.zippath = (function clojure$core$rrb_vector$rrbt$zippath(shift,n1,cnt1,n2,cnt2,transferred_leaves){
if((shift === (5))){
return clojure.core.rrb_vector.rrbt.rebalance_leaves(n1,cnt1,n2,cnt2,transferred_leaves);
} else {
var c1 = clojure.core.rrb_vector.nodes.last_child(n1);
var c2 = clojure.core.rrb_vector.nodes.first_child(n2);
var ccnt1 = (cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(n1))?(function (){var m = cljs.core.mod(cnt1,((1) << shift));
if((m === (0))){
return ((1) << shift);
} else {
return m;
}
})():(function (){var rngs = clojure.core.rrb_vector.nodes.ranges(n1);
var i = ((rngs[(32)]) - (1));
if((i === (0))){
return (rngs[(0)]);
} else {
return ((rngs[i]) - (rngs[(i - (1))]));
}
})());
var ccnt2 = (cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(n2))?(function (){var m = cljs.core.mod(cnt2,((1) << shift));
if((m === (0))){
return ((1) << shift);
} else {
return m;
}
})():(clojure.core.rrb_vector.nodes.ranges(n2)[(0)]));
var next_transferred_leaves = (new cljs.core.Box((0)));
var vec__14669 = (function (){var G__14672 = (shift - (5));
var G__14673 = c1;
var G__14674 = ccnt1;
var G__14675 = c2;
var G__14676 = ccnt2;
var G__14677 = next_transferred_leaves;
return (clojure.core.rrb_vector.rrbt.zippath.cljs$core$IFn$_invoke$arity$6 ? clojure.core.rrb_vector.rrbt.zippath.cljs$core$IFn$_invoke$arity$6(G__14672,G__14673,G__14674,G__14675,G__14676,G__14677) : clojure.core.rrb_vector.rrbt.zippath(G__14672,G__14673,G__14674,G__14675,G__14676,G__14677));
})();
var new_c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14669,(0),null);
var new_c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14669,(1),null);
var d = next_transferred_leaves.val;
transferred_leaves.val = (transferred_leaves.val + d);

return clojure.core.rrb_vector.rrbt.rebalance(shift,(((c1 === new_c1))?n1:clojure.core.rrb_vector.nodes.replace_rightmost_child(shift,n1,new_c1,d)),(cnt1 + d),(cljs.core.truth_(new_c2)?(((c2 === new_c2))?n2:clojure.core.rrb_vector.nodes.replace_leftmost_child(shift,n2,cnt2,new_c2,d)):clojure.core.rrb_vector.nodes.remove_leftmost_child(shift,n2)),(cnt2 - d),transferred_leaves);
}
});
clojure.core.rrb_vector.rrbt.squash_nodes = (function clojure$core$rrb_vector$rrbt$squash_nodes(shift,n1,cnt1,n2,cnt2){
var arr1 = n1.arr;
var arr2 = n2.arr;
var li1 = clojure.core.rrb_vector.nodes.index_of_nil(arr1);
var li2 = clojure.core.rrb_vector.nodes.index_of_nil(arr2);
var slots = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(li1,arr1),cljs.core.take.cljs$core$IFn$_invoke$arity$2(li2,arr2));
if((cljs.core.count(slots) > (32))){
return [n1,n2];
} else {
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rngs1 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(li1,(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(n1))?clojure.core.rrb_vector.nodes.regular_ranges(shift,cnt1):clojure.core.rrb_vector.nodes.ranges(n1)));
var rngs2 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(li2,(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(n2))?clojure.core.rrb_vector.nodes.regular_ranges(shift,cnt2):clojure.core.rrb_vector.nodes.ranges(n2)));
var rngs2__$1 = (function (){var r = cljs.core.last(rngs1);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (r,new_rngs,new_arr,rngs1,rngs2,arr1,arr2,li1,li2,slots){
return (function (p1__14678_SHARP_){
return (p1__14678_SHARP_ + r);
});})(r,new_rngs,new_arr,rngs1,rngs2,arr1,arr2,li1,li2,slots))
,rngs2);
})();
var rngs = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rngs1,rngs2__$1);
(new_arr[(32)] = new_rngs);

var i_14679 = (0);
var cs_14680 = cljs.core.seq(slots);
while(true){
if(cs_14680){
(new_arr[i_14679] = cljs.core.first(cs_14680));

var G__14681 = (i_14679 + (1));
var G__14682 = cljs.core.next(cs_14680);
i_14679 = G__14681;
cs_14680 = G__14682;
continue;
} else {
}
break;
}

var i_14683 = (0);
var rngs_14684__$1 = cljs.core.seq(rngs);
while(true){
if(rngs_14684__$1){
(new_rngs[i_14683] = cljs.core.first(rngs_14684__$1));

var G__14685 = (i_14683 + (1));
var G__14686 = cljs.core.next(rngs_14684__$1);
i_14683 = G__14685;
rngs_14684__$1 = G__14686;
continue;
} else {
(new_rngs[(32)] = i_14683);
}
break;
}

return [cljs.core.__GT_VectorNode(null,new_arr),null];
}
});
clojure.core.rrb_vector.rrbt.splice_rrbts = (function clojure$core$rrb_vector$rrbt$splice_rrbts(v1,v2){
if((cljs.core.count(v1) === (0))){
return v2;
} else {
if((cljs.core.count(v2) < (33))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v1,v2);
} else {
var s1 = v1.shift;
var s2 = v2.shift;
var r1 = v1.root;
var o_QMARK_ = clojure.core.rrb_vector.nodes.overflow_QMARK_(r1,s1,(cljs.core.count(v1) + ((32) - v1.tail.length)));
var r1__$1 = (cljs.core.truth_(o_QMARK_)?(function (){var tail = v1.tail;
var tail_node = cljs.core.__GT_VectorNode(null,tail);
var reg_QMARK_ = (function (){var and__8740__auto__ = clojure.core.rrb_vector.nodes.regular_QMARK_(r1);
if(cljs.core.truth_(and__8740__auto__)){
return (tail.length === (32));
} else {
return and__8740__auto__;
}
})();
var arr = (new Array((cljs.core.truth_(reg_QMARK_)?(32):(33))));
(arr[(0)] = r1);

(arr[(1)] = clojure.core.rrb_vector.nodes.new_path_STAR_(s1,tail_node));

if(cljs.core.not(reg_QMARK_)){
var rngs_14694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(rngs_14694[(32)] = (2));

(rngs_14694[(0)] = (cljs.core.count(v1) - tail.length));

(rngs_14694[(1)] = cljs.core.count(v1));

(arr[(32)] = rngs_14694);
} else {
}

return cljs.core.__GT_VectorNode(null,arr);
})():clojure.core.rrb_vector.nodes.fold_tail(r1,s1,clojure.core.rrb_vector.trees.tail_offset(v1.cnt,v1.tail),v1.tail));
var s1__$1 = (cljs.core.truth_(o_QMARK_)?(s1 + (5)):s1);
var r2 = v2.root;
var s = (function (){var x__9104__auto__ = s1__$1;
var y__9105__auto__ = s2;
return ((x__9104__auto__ > y__9105__auto__) ? x__9104__auto__ : y__9105__auto__);
})();
var r1__$2 = clojure.core.rrb_vector.rrbt.shift_from_to(r1__$1,s1__$1,s);
var r2__$1 = clojure.core.rrb_vector.rrbt.shift_from_to(r2,s2,s);
var transferred_leaves = (new cljs.core.Box((0)));
var vec__14687 = clojure.core.rrb_vector.rrbt.zippath(s,r1__$2,cljs.core.count(v1),r2__$1,(cljs.core.count(v2) - v2.tail.length),transferred_leaves);
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14687,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14687,(1),null);
var d = transferred_leaves.val;
var ncnt1 = (cljs.core.count(v1) + d);
var ncnt2 = ((cljs.core.count(v2) - v2.tail.length) - d);
var vec__14690 = (((n2 === r2__$1))?clojure.core.rrb_vector.rrbt.squash_nodes(s,n1,ncnt1,n2,ncnt2):[n1,n2]);
var n1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14690,(0),null);
var n2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14690,(1),null);
var ncnt1__$1 = (cljs.core.truth_(n2__$1)?ncnt1:(ncnt1 + ncnt2));
var ncnt2__$1 = (cljs.core.truth_(n2__$1)?ncnt2:(0));
if(cljs.core.truth_(n2__$1)){
var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode(null,arr);
(arr[(0)] = n1__$1);

(arr[(1)] = n2__$1);

(arr[(32)] = (function (){var G__14693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__14693[(0)] = ncnt1__$1);

(G__14693[(1)] = (ncnt1__$1 + ncnt2__$1));

(G__14693[(32)] = (2));

return G__14693;
})());

return (new clojure.core.rrb_vector.rrbt.Vector((cljs.core.count(v1) + cljs.core.count(v2)),(s + (5)),new_root,v2.tail,null,null));
} else {
var r = n1__$1;
var s__$1 = s;
while(true){
if(((s__$1 > (5))) && (((r.arr[(1)]) == null))){
var G__14695 = (r.arr[(0)]);
var G__14696 = (s__$1 - (5));
r = G__14695;
s__$1 = G__14696;
continue;
} else {
return (new clojure.core.rrb_vector.rrbt.Vector((cljs.core.count(v1) + cljs.core.count(v2)),s__$1,r,v2.tail,null,null));
}
break;
}
}

}
}
});

/**
* @constructor
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ITransientCollection}
 * @implements {cljs.core.ITransientVector}
 * @implements {cljs.core.ITransientAssociative}
*/
clojure.core.rrb_vector.rrbt.Transient = (function (cnt,shift,root,tail,tidx){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.tidx = tidx;
this.cljs$lang$protocol_mask$partition1$ = 88;
this.cljs$lang$protocol_mask$partition0$ = 2;
});
clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
if((self__.tidx < (32))){
(self__.tail[self__.tidx] = o);

self__.cnt = (self__.cnt + (1));

self__.tidx = (self__.tidx + (1));

return this$__$1;
} else {
var tail_node = cljs.core.__GT_VectorNode(self__.root.edit,self__.tail);
var new_tail = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(new_tail[(0)] = o);

self__.tail = new_tail;

self__.tidx = (1);

if(cljs.core.truth_(clojure.core.rrb_vector.nodes.overflow_QMARK_(self__.root,self__.shift,self__.cnt))){
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(self__.root))){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var G__14697_14700 = new_arr;
(G__14697_14700[(0)] = self__.root);

(G__14697_14700[(1)] = clojure.core.rrb_vector.trees.new_path(self__.tail,self__.root.edit,self__.shift,tail_node));


self__.root = cljs.core.__GT_VectorNode(self__.root.edit,new_arr);

self__.shift = (self__.shift + (5));

self__.cnt = (self__.cnt + (1));

return this$__$1;
} else {
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode(self__.root.edit,new_arr);
var root_total_range = (clojure.core.rrb_vector.nodes.ranges(self__.root)[(31)]);
var G__14698_14701 = new_arr;
(G__14698_14701[(0)] = self__.root);

(G__14698_14701[(1)] = clojure.core.rrb_vector.trees.new_path(self__.tail,self__.root.edit,self__.shift,tail_node));

(G__14698_14701[(32)] = new_rngs);


var G__14699_14702 = new_rngs;
(G__14699_14702[(0)] = root_total_range);

(G__14699_14702[(1)] = (root_total_range + (32)));

(G__14699_14702[(32)] = (2));


self__.root = new_root;

self__.shift = (self__.shift + (5));

self__.cnt = (self__.cnt + (1));

return this$__$1;
}
} else {
var new_root = clojure.core.rrb_vector.transients.push_tail_BANG_(self__.shift,self__.cnt,self__.root.edit,self__.root,tail_node);
self__.root = new_root;

self__.cnt = (self__.cnt + (1));

return this$__$1;
}
}
} else {
throw (new Error("conj! after persistent!"));
}
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
self__.root.edit = null;

var trimmed_tail = (new Array(self__.tidx));
cljs.core.array_copy(self__.tail,(0),trimmed_tail,(0),self__.tidx);

return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,trimmed_tail,null,null));
} else {
throw (new Error("persistent! called twice"));
}
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (this$,key,val){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(null,key,val);
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (this$,i,val){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
if((((0) <= i)) && ((i < self__.cnt))){
var tail_off = (self__.cnt - self__.tidx);
if((tail_off <= i)){
(self__.tail[(i - tail_off)] = val);
} else {
self__.root = clojure.core.rrb_vector.transients.do_assoc_BANG_(self__.shift,self__.root.edit,self__.root,i,val);
}

return this$__$1;
} else {
if((i === self__.cnt)){
return this$__$1.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,val);
} else {
return cljs.core.vector_index_out_of_bounds(i,self__.cnt);

}
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
self__.cnt = (0);

self__.tidx = (0);

(self__.tail[(0)] = null);

return this$__$1;
} else {
if((self__.tidx > (1))){
self__.cnt = (self__.cnt - (1));

self__.tidx = (self__.tidx - (1));

(self__.tail[self__.tidx] = null);

return this$__$1;
} else {
var new_tail_base = clojure.core.rrb_vector.trees.array_for(self__.cnt,self__.shift,self__.root,self__.tail,(self__.cnt - (2)));
var new_tail = cljs.core.aclone(new_tail_base);
var new_tidx = new_tail_base.length;
var new_root = clojure.core.rrb_vector.transients.pop_tail_BANG_(self__.shift,self__.cnt,self__.root.edit,self__.root);
if((new_root == null)){
self__.cnt = (self__.cnt - (1));

self__.root = clojure.core.rrb_vector.transients.ensure_editable(self__.root.edit,clojure.core.rrb_vector.nodes.empty_node);

self__.tail = new_tail;

self__.tidx = new_tidx;

return this$__$1;
} else {
if(((self__.shift > (5))) && (((new_root.arr[(1)]) == null))){
self__.cnt = (self__.cnt - (1));

self__.shift = (self__.shift - (5));

self__.root = (new_root.arr[(0)]);

self__.tail = new_tail;

self__.tidx = new_tidx;

return this$__$1;
} else {
self__.cnt = (self__.cnt - (1));

self__.root = new_root;

self__.tail = new_tail;

self__.tidx = new_tidx;

return this$__$1;

}
}

}
}
}
} else {
throw (new Error("count after persistent!"));
}
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
return self__.cnt;
} else {
throw (new Error("count after persistent!"));
}
});

clojure.core.rrb_vector.rrbt.Transient.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"shift","shift",-1657295705,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tail","tail",494507963,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tidx","tidx",1939123455,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

clojure.core.rrb_vector.rrbt.Transient.cljs$lang$type = true;

clojure.core.rrb_vector.rrbt.Transient.cljs$lang$ctorStr = "clojure.core.rrb-vector.rrbt/Transient";

clojure.core.rrb_vector.rrbt.Transient.cljs$lang$ctorPrWriter = (function (this__9423__auto__,writer__9424__auto__,opt__9425__auto__){
return cljs.core._write(writer__9424__auto__,"clojure.core.rrb-vector.rrbt/Transient");
});

clojure.core.rrb_vector.rrbt.__GT_Transient = (function clojure$core$rrb_vector$rrbt$__GT_Transient(cnt,shift,root,tail,tidx){
return (new clojure.core.rrb_vector.rrbt.Transient(cnt,shift,root,tail,tidx));
});

