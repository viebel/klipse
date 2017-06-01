// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants false}
goog.provide('clojure.core.rrb_vector.trees');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector.nodes');
clojure.core.rrb_vector.trees.tail_offset = (function clojure$core$rrb_vector$trees$tail_offset(cnt,tail){
return (cnt - tail.length);
});
clojure.core.rrb_vector.trees.array_for = (function clojure$core$rrb_vector$trees$array_for(cnt,shift,root,tail,i){
if((((0) <= i)) && ((i < cnt))){
if((i >= clojure.core.rrb_vector.trees.tail_offset(cnt,tail))){
return tail;
} else {
var i__$1 = i;
var node = root;
var shift__$1 = shift;
while(true){
if((shift__$1 === (0))){
return node.arr;
} else {
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(node))){
var node__$1 = (node.arr[((i__$1 >> shift__$1) & (31))]);
var shift__$2 = (shift__$1 - (5));
while(true){
if((shift__$2 === (0))){
return node__$1.arr;
} else {
var G__15815 = (node__$1.arr[((i__$1 >> shift__$2) & (31))]);
var G__15816 = (shift__$2 - (5));
node__$1 = G__15815;
shift__$2 = G__15816;
continue;
}
break;
}
} else {
var rngs = clojure.core.rrb_vector.nodes.ranges(node);
var j = (function (){var j = ((i__$1 >> shift__$1) & (31));
while(true){
if((i__$1 < (rngs[j]))){
return j;
} else {
var G__15817 = (j + (1));
j = G__15817;
continue;
}
break;
}
})();
var i__$2 = (((j > (0)))?(i__$1 - (rngs[(j - (1))])):i__$1);
var G__15819 = i__$2;
var G__15820 = (node.arr[j]);
var G__15821 = (shift__$1 - (5));
i__$1 = G__15819;
node = G__15820;
shift__$1 = G__15821;
continue;
}
}
break;
}
}
} else {
return cljs.core.vector_index_out_of_bounds(i,cnt);
}
});
clojure.core.rrb_vector.trees.new_path = (function clojure$core$rrb_vector$trees$new_path(tail,edit,shift,current_node){
if((tail.length === (32))){
var s = (0);
var n = current_node;
while(true){
if((s === shift)){
return n;
} else {
var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var ret = cljs.core.__GT_VectorNode(edit,arr);
(arr[(0)] = n);

var G__15829 = (s + (5));
var G__15830 = ret;
s = G__15829;
n = G__15830;
continue;
}
break;
}
} else {
var s = (0);
var n = current_node;
while(true){
if((s === shift)){
return n;
} else {
var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var ret = cljs.core.__GT_VectorNode(edit,arr);
(arr[(0)] = n);

(arr[(32)] = rngs);

(rngs[(32)] = (1));

(rngs[(0)] = tail.length);

var G__15833 = (s + (5));
var G__15834 = ret;
s = G__15833;
n = G__15834;
continue;
}
break;
}
}
});
clojure.core.rrb_vector.trees.push_tail = (function clojure$core$rrb_vector$trees$push_tail(shift,cnt,root_edit,current_node,tail_node){
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(current_node))){
var arr = cljs.core.aclone(current_node.arr);
var ret = cljs.core.__GT_VectorNode(current_node.edit,arr);
var n_15847 = ret;
var shift_15848__$1 = shift;
while(true){
var arr_15849__$1 = n_15847.arr;
var subidx_15850 = (((cnt - (1)) >> shift_15848__$1) & (31));
if((shift_15848__$1 === (5))){
(arr_15849__$1[subidx_15850] = tail_node);
} else {
var temp__6736__auto___15852 = (arr_15849__$1[subidx_15850]);
if(cljs.core.truth_(temp__6736__auto___15852)){
var child_15853 = temp__6736__auto___15852;
var new_carr_15854 = cljs.core.aclone(child_15853.arr);
var new_child_15855 = cljs.core.__GT_VectorNode(root_edit,new_carr_15854);
(arr_15849__$1[subidx_15850] = new_child_15855);

var G__15856 = new_child_15855;
var G__15857 = (shift_15848__$1 - (5));
n_15847 = G__15856;
shift_15848__$1 = G__15857;
continue;
} else {
(arr_15849__$1[subidx_15850] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_15848__$1 - (5)),tail_node));
}
}
break;
}

return ret;
} else {
var arr = cljs.core.aclone(current_node.arr);
var rngs = clojure.core.rrb_vector.nodes.ranges(current_node);
var li = ((rngs[(32)]) - (1));
var ret = cljs.core.__GT_VectorNode(current_node.edit,arr);
var cret = (((shift === (5)))?null:(function (){var child = (arr[li]);
var ccnt = (((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)]));
if(!((ccnt === ((1) << shift)))){
var G__15842 = (shift - (5));
var G__15843 = (ccnt + (1));
var G__15844 = root_edit;
var G__15845 = child;
var G__15846 = tail_node;
return (clojure.core.rrb_vector.trees.push_tail.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.trees.push_tail.cljs$core$IFn$_invoke$arity$5(G__15842,G__15843,G__15844,G__15845,G__15846) : clojure.core.rrb_vector.trees.push_tail.call(null,G__15842,G__15843,G__15844,G__15845,G__15846));
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.trees.pop_tail = (function clojure$core$rrb_vector$trees$pop_tail(shift,cnt,root_edit,current_node){
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(current_node))){
var subidx = (((cnt - (1)) >> shift) & (31));
if((shift > (5))){
var new_child = (function (){var G__15866 = (shift - (5));
var G__15867 = cnt;
var G__15868 = root_edit;
var G__15869 = (current_node.arr[subidx]);
return (clojure.core.rrb_vector.trees.pop_tail.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.trees.pop_tail.cljs$core$IFn$_invoke$arity$4(G__15866,G__15867,G__15868,G__15869) : clojure.core.rrb_vector.trees.pop_tail.call(null,G__15866,G__15867,G__15868,G__15869));
})();
if(((new_child == null)) && ((subidx === (0)))){
return null;
} else {
var arr = cljs.core.aclone(current_node.arr);
(arr[subidx] = new_child);

return cljs.core.__GT_VectorNode(root_edit,arr);
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = cljs.core.aclone(current_node.arr);
(arr[subidx] = null);

return cljs.core.__GT_VectorNode(root_edit,arr);

}
}
} else {
var subidx = (((cnt - (1)) >> shift) & (31));
var rngs = clojure.core.rrb_vector.nodes.ranges(current_node);
var subidx__$1 = (function (){var subidx__$1 = subidx;
while(true){
if(((((rngs[(subidx__$1 + (1))]) | (0)) === (0))) || ((subidx__$1 === (31)))){
return subidx__$1;
} else {
var G__15876 = (subidx__$1 + (1));
subidx__$1 = G__15876;
continue;
}
break;
}
})();
var new_rngs = cljs.core.aclone(rngs);
if((shift > (5))){
var child = (current_node.arr[subidx__$1]);
var child_cnt = (((subidx__$1 === (0)))?(rngs[(0)]):((rngs[subidx__$1]) - (rngs[(subidx__$1 - (1))])));
var new_child = (function (){var G__15870 = (shift - (5));
var G__15871 = child_cnt;
var G__15872 = root_edit;
var G__15873 = child;
return (clojure.core.rrb_vector.trees.pop_tail.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.trees.pop_tail.cljs$core$IFn$_invoke$arity$4(G__15870,G__15871,G__15872,G__15873) : clojure.core.rrb_vector.trees.pop_tail.call(null,G__15870,G__15871,G__15872,G__15873));
})();
if(((new_child == null)) && ((subidx__$1 === (0)))){
return null;
} else {
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(child))){
var arr = cljs.core.aclone(current_node.arr);
(new_rngs[subidx__$1] = ((new_rngs[subidx__$1]) - (32)));

(arr[subidx__$1] = new_child);

(arr[(32)] = new_rngs);

if((new_child == null)){
(new_rngs[(32)] = ((new_rngs[(32)]) - (1)));
} else {
}

return cljs.core.__GT_VectorNode(root_edit,arr);
} else {
var rng = clojure.core.rrb_vector.nodes.last_range(child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range(new_child):(0)));
var arr = cljs.core.aclone(current_node.arr);
(new_rngs[subidx__$1] = ((new_rngs[subidx__$1]) - diff));

(arr[subidx__$1] = new_child);

(arr[(32)] = new_rngs);

if((new_child == null)){
(new_rngs[(32)] = ((new_rngs[(32)]) - (1)));
} else {
}

return cljs.core.__GT_VectorNode(root_edit,arr);

}
}
} else {
if((subidx__$1 === (0))){
return null;
} else {
var arr = cljs.core.aclone(current_node.arr);
var child = (arr[subidx__$1]);
var new_rngs__$1 = cljs.core.aclone(rngs);
(arr[subidx__$1] = null);

(arr[(32)] = new_rngs__$1);

(new_rngs__$1[subidx__$1] = (0));

(new_rngs__$1[(32)] = ((new_rngs__$1[(32)]) - (1)));

return cljs.core.__GT_VectorNode(root_edit,arr);

}
}
}
});
clojure.core.rrb_vector.trees.do_assoc = (function clojure$core$rrb_vector$trees$do_assoc(shift,current_node,i,val){
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(current_node))){
var node = clojure.core.rrb_vector.nodes.clone(shift,current_node);
var shift_15885__$1 = shift;
var node_15886__$1 = node;
while(true){
if((shift_15885__$1 === (0))){
var arr_15887 = node_15886__$1.arr;
(arr_15887[(i & (31))] = val);
} else {
var arr_15888 = node_15886__$1.arr;
var subidx_15889 = ((i >> shift_15885__$1) & (31));
var child_15890 = clojure.core.rrb_vector.nodes.clone(shift_15885__$1,(arr_15888[subidx_15889]));
(arr_15888[subidx_15889] = child_15890);

var G__15891 = (shift_15885__$1 - (5));
var G__15892 = child_15890;
shift_15885__$1 = G__15891;
node_15886__$1 = G__15892;
continue;
}
break;
}

return node;
} else {
var arr = cljs.core.aclone(current_node.arr);
var rngs = clojure.core.rrb_vector.nodes.ranges(current_node);
var subidx = ((i >> shift) & (31));
var subidx__$1 = (function (){var subidx__$1 = subidx;
while(true){
if((i < ((rngs[subidx__$1]) | (0)))){
return subidx__$1;
} else {
var G__15893 = (subidx__$1 + (1));
subidx__$1 = G__15893;
continue;
}
break;
}
})();
var i__$1 = (((subidx__$1 === (0)))?i:(i - (rngs[(subidx__$1 - (1))])));
(arr[subidx__$1] = (function (){var G__15881 = (shift - (5));
var G__15882 = (arr[subidx__$1]);
var G__15883 = i__$1;
var G__15884 = val;
return (clojure.core.rrb_vector.trees.do_assoc.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.trees.do_assoc.cljs$core$IFn$_invoke$arity$4(G__15881,G__15882,G__15883,G__15884) : clojure.core.rrb_vector.trees.do_assoc.call(null,G__15881,G__15882,G__15883,G__15884));
})());

return cljs.core.__GT_VectorNode(current_node.edit,arr);
}
});
