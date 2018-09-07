// Compiled by ClojureScript 1.9.946 {:static-fns true, :fn-invoke-direct true, :optimize-constants false}
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

var G__17942 = (i + (1));
var G__17943 = (r + step);
i = G__17942;
r = G__17943;
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
var and__8796__auto__ = (slc === (32));
if(and__8796__auto__){
var or__8808__auto__ = (shift === (5));
if(or__8808__auto__){
return or__8808__auto__;
} else {
var G__17944 = (root.arr[(slc - (1))]);
var G__17945 = (shift - (5));
var G__17946 = (((rngs[(31)]) - (rngs[(30)])) + (32));
root = G__17944;
shift = G__17945;
cnt = G__17946;
continue;
}
} else {
return and__8796__auto__;
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
var G__17947 = l;
var G__17948 = mid;
l = G__17947;
h = G__17948;
continue;
} else {
var G__17949 = (mid + (1));
var G__17950 = h;
l = G__17949;
h = G__17950;
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
var G__17951 = l;
var G__17952 = mid;
l = G__17951;
h = G__17952;
continue;
} else {
var G__17953 = (mid + (1));
var G__17954 = h;
l = G__17953;
h = G__17954;
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
var rngs_17955 = clojure.core.rrb_vector.nodes.ranges(parent);
var rng0_17956 = (rngs_17955[(0)]);
var new_rngs_17957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var lim_17958 = (rngs_17955[(32)]);
cljs.core.array_copy(rngs_17955,(1),new_rngs_17957,(0),(lim_17958 - (1)));

var i_17959 = (0);
while(true){
if((i_17959 < lim_17958)){
(new_rngs_17957[i_17959] = ((new_rngs_17957[i_17959]) - rng0_17956));

var G__17960 = (i_17959 + (1));
i_17959 = G__17960;
continue;
} else {
}
break;
}

(new_rngs_17957[(32)] = ((rngs_17955[(32)]) - (1)));

(new_rngs_17957[((rngs_17955[(32)]) - (1))] = (0));

(new_arr[(32)] = new_rngs_17957);
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

var i_17961 = (1);
while(true){
if((i_17961 <= li)){
(new_rngs[i_17961] = ((new_rngs[(i_17961 - (1))]) + step));

var G__17962 = (i_17961 + (1));
i_17961 = G__17962;
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

var i_17963 = (0);
while(true){
if((i_17963 <= li)){
(new_rngs[i_17963] = ((rngs[i_17963]) - d));

var G__17964 = (i_17963 + (1));
i_17963 = G__17964;
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

var j_17965 = (0);
var r_17966 = step;
while(true){
if((j_17965 <= i)){
(rngs[j_17965] = r_17966);

var G__17967 = (j_17965 + (1));
var G__17968 = (r_17966 + step);
j_17965 = G__17967;
r_17966 = G__17968;
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
var rngs = ((!(reg_QMARK_))?(function (){var G__17969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__17969[(0)] = node.arr.length);

(G__17969[(32)] = (1));

return G__17969;
})():null);
var ret = cljs.core.__GT_VectorNode(null,arr);
var arr_17970__$1 = arr;
var shift_17971__$1 = shift;
while(true){
if((shift_17971__$1 === (5))){
if(!(reg_QMARK_)){
(arr_17970__$1[(32)] = rngs);
} else {
}

(arr_17970__$1[(0)] = node);
} else {
var a_17972 = (new Array(len));
var e_17973 = cljs.core.__GT_VectorNode(null,a_17972);
(arr_17970__$1[(0)] = e_17973);

if(!(reg_QMARK_)){
(arr_17970__$1[(32)] = rngs);
} else {
}

var G__17974 = a_17972;
var G__17975 = (shift_17971__$1 - (5));
arr_17970__$1 = G__17974;
shift_17971__$1 = G__17975;
continue;
}
break;
}

return ret;
});
clojure.core.rrb_vector.nodes.fold_tail = (function clojure$core$rrb_vector$nodes$fold_tail(node,shift,cnt,tail){
var tlen = tail.length;
var reg_QMARK_ = (function (){var and__8796__auto__ = clojure.core.rrb_vector.nodes.regular_QMARK_(node);
if(cljs.core.truth_(and__8796__auto__)){
return (tlen === (32));
} else {
return and__8796__auto__;
}
})();
var arr = node.arr;
var li = clojure.core.rrb_vector.nodes.index_of_nil(arr);
var new_arr = (new Array((cljs.core.truth_(reg_QMARK_)?(32):(33))));
var rngs = ((cljs.core.not(clojure.core.rrb_vector.nodes.regular_QMARK_(node)))?clojure.core.rrb_vector.nodes.ranges(node):null);
var cret = (((shift === (5)))?cljs.core.__GT_VectorNode(null,tail):(function (){var G__17976 = (arr[(li - (1))]);
var G__17977 = (shift - (5));
var G__17978 = (cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(node))?cljs.core.mod(cnt,((1) << shift)):(function (){var li__$1 = ((rngs[(32)]) - (1));
if((li__$1 > (0))){
return ((rngs[li__$1]) - (rngs[(li__$1 - (1))]));
} else {
return (rngs[(0)]);
}
})());
var G__17979 = tail;
return (clojure.core.rrb_vector.nodes.fold_tail.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.nodes.fold_tail.cljs$core$IFn$_invoke$arity$4(G__17976,G__17977,G__17978,G__17979) : clojure.core.rrb_vector.nodes.fold_tail(G__17976,G__17977,G__17978,G__17979));
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
