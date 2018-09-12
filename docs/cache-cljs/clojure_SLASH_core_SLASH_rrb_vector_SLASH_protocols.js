// Compiled by ClojureScript 1.9.946 {:static-fns true, :fn-invoke-direct true, :optimize-constants false}
goog.provide('clojure.core.rrb_vector.protocols');
goog.require('cljs.core');

/**
 * @interface
 */
clojure.core.rrb_vector.protocols.PSpliceableVector = function(){};

clojure.core.rrb_vector.protocols._splicev = (function clojure$core$rrb_vector$protocols$_splicev(v1,v2){
if((!((v1 == null))) && (!((v1.clojure$core$rrb_vector$protocols$PSpliceableVector$_splicev$arity$2 == null)))){
return v1.clojure$core$rrb_vector$protocols$PSpliceableVector$_splicev$arity$2(v1,v2);
} else {
var x__9541__auto__ = (((v1 == null))?null:v1);
var m__9542__auto__ = (clojure.core.rrb_vector.protocols._splicev[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$2(v1,v2) : m__9542__auto__(v1,v2));
} else {
var m__9542__auto____$1 = (clojure.core.rrb_vector.protocols._splicev["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2(v1,v2) : m__9542__auto____$1(v1,v2));
} else {
throw cljs.core.missing_protocol("PSpliceableVector.-splicev",v1);
}
}
}
});


/**
 * @interface
 */
clojure.core.rrb_vector.protocols.PSliceableVector = function(){};

clojure.core.rrb_vector.protocols._slicev = (function clojure$core$rrb_vector$protocols$_slicev(v,start,end){
if((!((v == null))) && (!((v.clojure$core$rrb_vector$protocols$PSliceableVector$_slicev$arity$3 == null)))){
return v.clojure$core$rrb_vector$protocols$PSliceableVector$_slicev$arity$3(v,start,end);
} else {
var x__9541__auto__ = (((v == null))?null:v);
var m__9542__auto__ = (clojure.core.rrb_vector.protocols._slicev[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$3(v,start,end) : m__9542__auto__(v,start,end));
} else {
var m__9542__auto____$1 = (clojure.core.rrb_vector.protocols._slicev["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$3(v,start,end) : m__9542__auto____$1(v,start,end));
} else {
throw cljs.core.missing_protocol("PSliceableVector.-slicev",v);
}
}
}
});

