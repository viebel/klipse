// Compiled by ClojureScript 1.9.946 {:static-fns true, :fn-invoke-direct true, :optimize-constants false}
goog.provide('clojure.core.rrb_vector.interop');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector.protocols');
goog.require('clojure.core.rrb_vector.rrbt');
cljs.core.PersistentVector.prototype.clojure$core$rrb_vector$protocols$PSliceableVector$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$rrb_vector$protocols$PSliceableVector$_slicev$arity$3 = (function (v,start,end){
var v__$1 = this;
return clojure.core.rrb_vector.protocols._slicev(clojure.core.rrb_vector.rrbt._as_rrbt(v__$1),start,end);
});

cljs.core.Subvec.prototype.clojure$core$rrb_vector$protocols$PSliceableVector$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.clojure$core$rrb_vector$protocols$PSliceableVector$_slicev$arity$3 = (function (v,start,end){
var v__$1 = this;
return clojure.core.rrb_vector.protocols._slicev(clojure.core.rrb_vector.rrbt._as_rrbt(v__$1),start,end);
});
cljs.core.PersistentVector.prototype.clojure$core$rrb_vector$protocols$PSpliceableVector$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$rrb_vector$protocols$PSpliceableVector$_splicev$arity$2 = (function (v1,v2){
var v1__$1 = this;
return clojure.core.rrb_vector.protocols._splicev(clojure.core.rrb_vector.rrbt._as_rrbt(v1__$1),v2);
});

cljs.core.Subvec.prototype.clojure$core$rrb_vector$protocols$PSpliceableVector$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.clojure$core$rrb_vector$protocols$PSpliceableVector$_splicev$arity$2 = (function (v1,v2){
var v1__$1 = this;
return clojure.core.rrb_vector.protocols._splicev(clojure.core.rrb_vector.rrbt._as_rrbt(v1__$1),v2);
});
