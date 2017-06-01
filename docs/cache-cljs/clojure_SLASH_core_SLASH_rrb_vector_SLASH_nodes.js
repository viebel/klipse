// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants false}
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

var G__15706 = (i + (1));
var G__15707 = (r + step);
i = G__15706;
r = G__15707;
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
var and__9427__auto__ = (slc === (32));
if(and__9427__auto__){
var or__9439__auto__ = (shift === (5));
if(or__9439__auto__){
return or__9439__auto__;
} else {
var G__15715 = (root.arr[(slc - (1))]);
var G__15716 = (shift - (5));
var G__15717 = (((rngs[(31)]) - (rngs[(30)])) + (32));
root = G__15715;
shift = G__15716;
cnt = G__15717;
continue;
}
} else {
return and__9427__auto__;
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
var G__15721 = l;
var G__15722 = mid;
l = G__15721;
h = G__15722;
continue;
} else {
var G__15723 = (mid + (1));
var G__15724 = h;
l = G__15723;
h = G__15724;
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
var G__15731 = l;
var G__15732 = mid;
l = G__15731;
h = G__15732;
continue;
} else {
var G__15735 = (mid + (1));
var G__15736 = h;
l = G__15735;
h = G__15736;
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
var rngs_15741 = clojure.core.rrb_vector.nodes.ranges(parent);
var rng0_15742 = (rngs_15741[(0)]);
var new_rngs_15743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var lim_15744 = (rngs_15741[(32)]);
cljs.core.array_copy(rngs_15741,(1),new_rngs_15743,(0),(lim_15744 - (1)));

var i_15745 = (0);
while(true){
if((i_15745 < lim_15744)){
(new_rngs_15743[i_15745] = ((new_rngs_15743[i_15745]) - rng0_15742));

var G__15746 = (i_15745 + (1));
i_15745 = G__15746;
continue;
} else {
}
break;
}

(new_rngs_15743[(32)] = ((rngs_15741[(32)]) - (1)));

(new_rngs_15743[((rngs_15741[(32)]) - (1))] = (0));

(new_arr[(32)] = new_rngs_15743);
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

var i_15755 = (1);
while(true){
if((i_15755 <= li)){
(new_rngs[i_15755] = ((new_rngs[(i_15755 - (1))]) + step));

var G__15758 = (i_15755 + (1));
i_15755 = G__15758;
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

var i_15759 = (0);
while(true){
if((i_15759 <= li)){
(new_rngs[i_15759] = ((rngs[i_15759]) - d));

var G__15760 = (i_15759 + (1));
i_15759 = G__15760;
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

var j_15765 = (0);
var r_15766 = step;
while(true){
if((j_15765 <= i)){
(rngs[j_15765] = r_15766);

var G__15767 = (j_15765 + (1));
var G__15768 = (r_15766 + step);
j_15765 = G__15767;
r_15766 = G__15768;
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
var rngs = ((!(reg_QMARK_))?(function (){var G__15773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__15773[(0)] = node.arr.length);

(G__15773[(32)] = (1));

return G__15773;
})():null);
var ret = cljs.core.__GT_VectorNode(null,arr);
var arr_15779__$1 = arr;
var shift_15780__$1 = shift;
while(true){
if((shift_15780__$1 === (5))){
if(!(reg_QMARK_)){
(arr_15779__$1[(32)] = rngs);
} else {
}

(arr_15779__$1[(0)] = node);
} else {
var a_15781 = (new Array(len));
var e_15782 = cljs.core.__GT_VectorNode(null,a_15781);
(arr_15779__$1[(0)] = e_15782);

if(!(reg_QMARK_)){
(arr_15779__$1[(32)] = rngs);
} else {
}

var G__15783 = a_15781;
var G__15784 = (shift_15780__$1 - (5));
arr_15779__$1 = G__15783;
shift_15780__$1 = G__15784;
continue;
}
break;
}

return ret;
});
clojure.core.rrb_vector.nodes.fold_tail = (function clojure$core$rrb_vector$nodes$fold_tail(node,shift,cnt,tail){
var tlen = tail.length;
var reg_QMARK_ = (function (){var and__9427__auto__ = clojure.core.rrb_vector.nodes.regular_QMARK_(node);
if(cljs.core.truth_(and__9427__auto__)){
return (tlen === (32));
} else {
return and__9427__auto__;
}
})();
var arr = node.arr;
var li = clojure.core.rrb_vector.nodes.index_of_nil(arr);
var new_arr = (new Array((cljs.core.truth_(reg_QMARK_)?(32):(33))));
var rngs = ((cljs.core.not(clojure.core.rrb_vector.nodes.regular_QMARK_(node)))?clojure.core.rrb_vector.nodes.ranges(node):null);
var cret = (((shift === (5)))?cljs.core.__GT_VectorNode(null,tail):(function (){var G__15796 = (arr[(li - (1))]);
var G__15797 = (shift - (5));
var G__15798 = (cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(node))?cljs.core.mod(cnt,((1) << shift)):(function (){var li__$1 = ((rngs[(32)]) - (1));
if((li__$1 > (0))){
return ((rngs[li__$1]) - (rngs[(li__$1 - (1))]));
} else {
return (rngs[(0)]);
}
})());
var G__15799 = tail;
return (clojure.core.rrb_vector.nodes.fold_tail.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.nodes.fold_tail.cljs$core$IFn$_invoke$arity$4(G__15796,G__15797,G__15798,G__15799) : clojure.core.rrb_vector.nodes.fold_tail.call(null,G__15796,G__15797,G__15798,G__15799));
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
