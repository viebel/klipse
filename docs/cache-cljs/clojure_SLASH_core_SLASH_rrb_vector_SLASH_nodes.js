// Compiled by ClojureScript 1.9.908 {:static-fns true, :fn-invoke-direct true, :optimize-constants false}
goog.provide('clojure.core.rrb_vector.nodes');
goog.require('cljs.core');
clojure.core.rrb_vector.nodes.empty_node = cljs.core.PersistentVector.EMPTY_NODE;
clojure.core.rrb_vector.nodes.clone = (function clojure$core$rrb_vector$nodes$clone(shift,node){
return (new cljs.core.VectorNode(node.edit,cljs.core.aclone(node.arr)));
});
clojure.core.rrb_vector.nodes.regular_QMARK_ = (function clojure$core$rrb_vector$nodes$regular_QMARK_(node){
return !((node.arr.length === (33)));
});
clojure.core.rrb_vector.nodes.ranges = (function clojure$core$rrb_vector$nodes$ranges(node){
return (node.arr[(32)]);
});
clojure.core.rrb_vector.nodes.last_range = (function clojure$core$rrb_vector$nodes$last_range(node){
var rngs = clojure.core.rrb_vector.nodes.ranges(node);
var i = ((rngs[(32)]) - (1));
return (rngs[i]);
});
clojure.core.rrb_vector.nodes.regular_ranges = (function clojure$core$rrb_vector$nodes$regular_ranges(shift,cnt){
var step = ((1) << shift);
var rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var i = (0);
var r = step;
while(true){
if((r < cnt)){
(rngs[i] = r);

var G__14321 = (i + (1));
var G__14322 = (r + step);
i = G__14321;
r = G__14322;
continue;
} else {
(rngs[i] = cnt);

(rngs[(32)] = (i + (1)));

return rngs;
}
break;
}
});
clojure.core.rrb_vector.nodes.overflow_QMARK_ = (function clojure$core$rrb_vector$nodes$overflow_QMARK_(root,shift,cnt){
while(true){
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(root))){
return ((cnt >> (5)) > ((1) << shift));
} else {
var rngs = clojure.core.rrb_vector.nodes.ranges(root);
var slc = (rngs[(32)]);
var and__8740__auto__ = (slc === (32));
if(and__8740__auto__){
var or__8752__auto__ = (shift === (5));
if(or__8752__auto__){
return or__8752__auto__;
} else {
var G__14326 = (root.arr[(slc - (1))]);
var G__14327 = (shift - (5));
var G__14328 = (((rngs[(31)]) - (rngs[(30)])) + (32));
root = G__14326;
shift = G__14327;
cnt = G__14328;
continue;
}
} else {
return and__8740__auto__;
}
}
break;
}
});
clojure.core.rrb_vector.nodes.index_of_0 = (function clojure$core$rrb_vector$nodes$index_of_0(arr){
var l = (0);
var h = (31);
while(true){
if((l >= (h - (1)))){
if((((arr[l]) | (0)) === (0))){
return l;
} else {
if((((arr[h]) | (0)) === (0))){
return h;
} else {
return (32);
}
}
} else {
var mid = (l + ((h - l) >> (1)));
if((((arr[mid]) | (0)) === (0))){
var G__14330 = l;
var G__14331 = mid;
l = G__14330;
h = G__14331;
continue;
} else {
var G__14332 = (mid + (1));
var G__14333 = h;
l = G__14332;
h = G__14333;
continue;
}
}
break;
}
});
clojure.core.rrb_vector.nodes.index_of_nil = (function clojure$core$rrb_vector$nodes$index_of_nil(arr){
var l = (0);
var h = (31);
while(true){
if((l >= (h - (1)))){
if(((arr[l]) == null)){
return l;
} else {
if(((arr[h]) == null)){
return h;
} else {
return (32);
}
}
} else {
var mid = (l + ((h - l) >> (1)));
if(((arr[mid]) == null)){
var G__14339 = l;
var G__14340 = mid;
l = G__14339;
h = G__14340;
continue;
} else {
var G__14341 = (mid + (1));
var G__14342 = h;
l = G__14341;
h = G__14342;
continue;
}
}
break;
}
});
clojure.core.rrb_vector.nodes.first_child = (function clojure$core$rrb_vector$nodes$first_child(node){
return (node.arr[(0)]);
});
clojure.core.rrb_vector.nodes.last_child = (function clojure$core$rrb_vector$nodes$last_child(node){
var arr = node.arr;
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(node))){
return (arr[(clojure.core.rrb_vector.nodes.index_of_nil(arr) - (1))]);
} else {
return (arr[((clojure.core.rrb_vector.nodes.ranges(node)[(32)]) - (1))]);
}
});
clojure.core.rrb_vector.nodes.remove_leftmost_child = (function clojure$core$rrb_vector$nodes$remove_leftmost_child(shift,parent){
var arr = parent.arr;
if(((arr[(1)]) == null)){
return null;
} else {
var r_QMARK_ = clojure.core.rrb_vector.nodes.regular_QMARK_(parent);
var new_arr = (new Array((cljs.core.truth_(r_QMARK_)?(32):(33))));
cljs.core.array_copy(arr,(1),new_arr,(0),(31));

if(cljs.core.not(r_QMARK_)){
var rngs_14347 = clojure.core.rrb_vector.nodes.ranges(parent);
var rng0_14348 = (rngs_14347[(0)]);
var new_rngs_14349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var lim_14350 = (rngs_14347[(32)]);
cljs.core.array_copy(rngs_14347,(1),new_rngs_14349,(0),(lim_14350 - (1)));

var i_14351 = (0);
while(true){
if((i_14351 < lim_14350)){
(new_rngs_14349[i_14351] = ((new_rngs_14349[i_14351]) - rng0_14348));

var G__14352 = (i_14351 + (1));
i_14351 = G__14352;
continue;
} else {
}
break;
}

(new_rngs_14349[(32)] = ((rngs_14347[(32)]) - (1)));

(new_rngs_14349[((rngs_14347[(32)]) - (1))] = (0));

(new_arr[(32)] = new_rngs_14349);
} else {
}

return cljs.core.__GT_VectorNode(parent.edit,new_arr);
}
});
clojure.core.rrb_vector.nodes.replace_leftmost_child = (function clojure$core$rrb_vector$nodes$replace_leftmost_child(shift,parent,pcnt,child,d){
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(parent))){
var step = ((1) << shift);
var rng0 = (step - d);
var ncnt = (pcnt - d);
var li = ((shift >> (pcnt - (1))) & (31));
var arr = parent.arr;
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(new_arr[(0)] = child);

cljs.core.array_copy(arr,(1),new_arr,(1),li);

(new_arr[(32)] = new_rngs);

(new_rngs[(0)] = rng0);

(new_rngs[li] = ncnt);

(new_rngs[(32)] = (li + (1)));

var i_14354 = (1);
while(true){
if((i_14354 <= li)){
(new_rngs[i_14354] = ((new_rngs[(i_14354 - (1))]) + step));

var G__14355 = (i_14354 + (1));
i_14354 = G__14355;
continue;
} else {
}
break;
}

return cljs.core.__GT_VectorNode(null,new_arr);
} else {
var new_arr = cljs.core.aclone(parent.arr);
var rngs = clojure.core.rrb_vector.nodes.ranges(parent);
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var li = ((rngs[(32)]) - (1));
(new_rngs[(32)] = (rngs[(32)]));

(new_arr[(32)] = new_rngs);

(new_arr[(0)] = child);

var i_14357 = (0);
while(true){
if((i_14357 <= li)){
(new_rngs[i_14357] = ((rngs[i_14357]) - d));

var G__14358 = (i_14357 + (1));
i_14357 = G__14358;
continue;
} else {
}
break;
}

return cljs.core.__GT_VectorNode(null,new_arr);
}
});
clojure.core.rrb_vector.nodes.replace_rightmost_child = (function clojure$core$rrb_vector$nodes$replace_rightmost_child(shift,parent,child,d){
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(parent))){
var arr = parent.arr;
var i = (clojure.core.rrb_vector.nodes.index_of_nil(arr) - (1));
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(child))){
var new_arr = cljs.core.aclone(arr);
(new_arr[i] = child);

return cljs.core.__GT_VectorNode(null,new_arr);
} else {
var arr__$1 = parent.arr;
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var step = ((1) << shift);
var rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(rngs[(32)] = (i + (1)));

(new_arr[(32)] = rngs);

cljs.core.array_copy(arr__$1,(0),new_arr,(0),i);

(new_arr[i] = child);

var j_14360 = (0);
var r_14361 = step;
while(true){
if((j_14360 <= i)){
(rngs[j_14360] = r_14361);

var G__14362 = (j_14360 + (1));
var G__14363 = (r_14361 + step);
j_14360 = G__14362;
r_14361 = G__14363;
continue;
} else {
}
break;
}

(rngs[i] = clojure.core.rrb_vector.nodes.last_range(child));

return cljs.core.__GT_VectorNode(null,arr__$1);
}
} else {
var rngs = clojure.core.rrb_vector.nodes.ranges(parent);
var new_rngs = cljs.core.aclone(rngs);
var i = ((rngs[(32)]) - (1));
var new_arr = cljs.core.aclone(parent.arr);
(new_arr[i] = child);

(new_arr[(32)] = new_rngs);

(new_rngs[i] = ((rngs[i]) + d));

return cljs.core.__GT_VectorNode(null,new_arr);
}
});
clojure.core.rrb_vector.nodes.new_path_STAR_ = (function clojure$core$rrb_vector$nodes$new_path_STAR_(shift,node){
var reg_QMARK_ = ((32) === node.arr.length);
var len = ((reg_QMARK_)?(32):(33));
var arr = (new Array(len));
var rngs = ((!(reg_QMARK_))?(function (){var G__14367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__14367[(0)] = node.arr.length);

(G__14367[(32)] = (1));

return G__14367;
})():null);
var ret = cljs.core.__GT_VectorNode(null,arr);
var arr_14368__$1 = arr;
var shift_14369__$1 = shift;
while(true){
if((shift_14369__$1 === (5))){
if(!(reg_QMARK_)){
(arr_14368__$1[(32)] = rngs);
} else {
}

(arr_14368__$1[(0)] = node);
} else {
var a_14370 = (new Array(len));
var e_14371 = cljs.core.__GT_VectorNode(null,a_14370);
(arr_14368__$1[(0)] = e_14371);

if(!(reg_QMARK_)){
(arr_14368__$1[(32)] = rngs);
} else {
}

var G__14372 = a_14370;
var G__14373 = (shift_14369__$1 - (5));
arr_14368__$1 = G__14372;
shift_14369__$1 = G__14373;
continue;
}
break;
}

return ret;
});
clojure.core.rrb_vector.nodes.fold_tail = (function clojure$core$rrb_vector$nodes$fold_tail(node,shift,cnt,tail){
var tlen = tail.length;
var reg_QMARK_ = (function (){var and__8740__auto__ = clojure.core.rrb_vector.nodes.regular_QMARK_(node);
if(cljs.core.truth_(and__8740__auto__)){
return (tlen === (32));
} else {
return and__8740__auto__;
}
})();
var arr = node.arr;
var li = clojure.core.rrb_vector.nodes.index_of_nil(arr);
var new_arr = (new Array((cljs.core.truth_(reg_QMARK_)?(32):(33))));
var rngs = ((cljs.core.not(clojure.core.rrb_vector.nodes.regular_QMARK_(node)))?clojure.core.rrb_vector.nodes.ranges(node):null);
var cret = (((shift === (5)))?cljs.core.__GT_VectorNode(null,tail):(function (){var G__14375 = (arr[(li - (1))]);
var G__14376 = (shift - (5));
var G__14377 = (cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(node))?cljs.core.mod(cnt,((1) << shift)):(function (){var li__$1 = ((rngs[(32)]) - (1));
if((li__$1 > (0))){
return ((rngs[li__$1]) - (rngs[(li__$1 - (1))]));
} else {
return (rngs[(0)]);
}
})());
var G__14378 = tail;
return (clojure.core.rrb_vector.nodes.fold_tail.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.nodes.fold_tail.cljs$core$IFn$_invoke$arity$4(G__14375,G__14376,G__14377,G__14378) : clojure.core.rrb_vector.nodes.fold_tail(G__14375,G__14376,G__14377,G__14378));
})());
var new_rngs = ((cljs.core.not(reg_QMARK_))?(cljs.core.truth_(rngs)?cljs.core.aclone(rngs):clojure.core.rrb_vector.nodes.regular_ranges(shift,cnt)):null);
if((((cret == null)) || ((shift === (5)))) && ((li === (32)))){
return null;
} else {
cljs.core.array_copy(arr,(0),new_arr,(0),li);

if(cljs.core.truth_(reg_QMARK_)){
} else {
if(((cret == null)) || ((shift === (5)))){
(new_rngs[li] = ((((li > (0)))?(new_rngs[(li - (1))]):((0) | (0))) + tlen));

(new_rngs[(32)] = (li + (1)));
} else {
if((li > (0))){
(new_rngs[(li - (1))] = ((new_rngs[(li - (1))]) + tlen));
} else {
}

(new_rngs[(32)] = li);
}
}

if(cljs.core.not(reg_QMARK_)){
(new_arr[(32)] = new_rngs);
} else {
}

if((cret == null)){
(new_arr[li] = clojure.core.rrb_vector.nodes.new_path_STAR_((shift - (5)),cljs.core.__GT_VectorNode(null,tail)));
} else {
(new_arr[(((shift === (5)))?li:(li - (1)))] = cret);
}

return cljs.core.__GT_VectorNode(null,new_arr);
}
});
