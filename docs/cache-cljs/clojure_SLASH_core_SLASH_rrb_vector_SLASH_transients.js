// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants false}
goog.provide('clojure.core.rrb_vector.transients');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector.nodes');
goog.require('clojure.core.rrb_vector.trees');
clojure.core.rrb_vector.transients.ensure_editable = (function clojure$core$rrb_vector$transients$ensure_editable(edit,node){
if((node.edit === edit)){
return node;
} else {
var new_arr = cljs.core.aclone(node.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(edit,new_arr));
}
});
clojure.core.rrb_vector.transients.editable_root = (function clojure$core$rrb_vector$transients$editable_root(root){
return (new cljs.core.VectorNode({},cljs.core.aclone(root.arr)));
});
clojure.core.rrb_vector.transients.editable_tail = (function clojure$core$rrb_vector$transients$editable_tail(tail){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tail,(0),ret,(0),tail.length);

return ret;
});
clojure.core.rrb_vector.transients.push_tail_BANG_ = (function clojure$core$rrb_vector$transients$push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(ret))){
var n_15910 = ret;
var shift_15911__$1 = shift;
while(true){
var arr_15912 = n_15910.arr;
var subidx_15913 = (((cnt - (1)) >> shift_15911__$1) & (31));
if((shift_15911__$1 === (5))){
(arr_15912[subidx_15913] = tail_node);
} else {
var child_15914 = (arr_15912[subidx_15913]);
if((child_15914 == null)){
(arr_15912[subidx_15913] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_15911__$1 - (5)),tail_node));
} else {
var editable_child_15915 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_15914);
(arr_15912[subidx_15913] = editable_child_15915);

var G__15916 = editable_child_15915;
var G__15917 = (shift_15911__$1 - (5));
n_15910 = G__15916;
shift_15911__$1 = G__15917;
continue;
}
}
break;
}

return ret;
} else {
var arr = ret.arr;
var rngs = clojure.core.rrb_vector.nodes.ranges(ret);
var li = ((rngs[(32)]) - (1));
var cret = (((shift === (5)))?null:(function (){var child = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr[li]));
var ccnt = (((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)]));
if(!((ccnt === ((1) << shift)))){
var G__15905 = (shift - (5));
var G__15906 = (ccnt + (1));
var G__15907 = root_edit;
var G__15908 = child;
var G__15909 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__15905,G__15906,G__15907,G__15908,G__15909) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__15905,G__15906,G__15907,G__15908,G__15909));
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
clojure.core.rrb_vector.transients.pop_tail_BANG_ = (function clojure$core$rrb_vector$transients$pop_tail_BANG_(shift,cnt,root_edit,current_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(ret))){
var subidx = (((cnt - (1)) >> shift) & (31));
if((shift > (5))){
var child = (function (){var G__15926 = (shift - (5));
var G__15927 = cnt;
var G__15928 = root_edit;
var G__15929 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__15926,G__15927,G__15928,G__15929) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__15926,G__15927,G__15928,G__15929));
})();
if(((child == null)) && ((subidx === (0)))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = null);

return ret;

}
}
} else {
var subidx = (((cnt - (1)) >> shift) & (31));
var rngs = clojure.core.rrb_vector.nodes.ranges(ret);
var subidx__$1 = (function (){var subidx__$1 = subidx;
while(true){
if(((((rngs[(subidx__$1 + (1))]) | (0)) === (0))) || ((subidx__$1 === (31)))){
return subidx__$1;
} else {
var G__15934 = (subidx__$1 + (1));
subidx__$1 = G__15934;
continue;
}
break;
}
})();
if((shift > (5))){
var child = (ret.arr[subidx__$1]);
var child_cnt = (((subidx__$1 === (0)))?(rngs[(0)]):((rngs[subidx__$1]) - (rngs[(subidx__$1 - (1))])));
var new_child = (function (){var G__15930 = (shift - (5));
var G__15931 = child_cnt;
var G__15932 = root_edit;
var G__15933 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__15930,G__15931,G__15932,G__15933) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__15930,G__15931,G__15932,G__15933));
})();
if(((new_child == null)) && ((subidx__$1 === (0)))){
return null;
} else {
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(child))){
var arr = ret.arr;
(rngs[subidx__$1] = ((rngs[subidx__$1]) - (32)));

(arr[subidx__$1] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;
} else {
var rng = clojure.core.rrb_vector.nodes.last_range(child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range(new_child):(0)));
var arr = ret.arr;
(rngs[subidx__$1] = ((rngs[subidx__$1]) - diff));

(arr[subidx__$1] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;

}
}
} else {
if((subidx__$1 === (0))){
return null;
} else {
var arr = ret.arr;
var child = (arr[subidx__$1]);
(arr[subidx__$1] = null);

(rngs[subidx__$1] = (0));

(rngs[(32)] = ((rngs[(32)]) - (1)));

return ret;

}
}
}
});
clojure.core.rrb_vector.transients.do_assoc_BANG_ = (function clojure$core$rrb_vector$transients$do_assoc_BANG_(shift,root_edit,current_node,i,val){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(ret))){
var shift_15945__$1 = shift;
var node_15946 = ret;
while(true){
if((shift_15945__$1 === (0))){
var arr_15947 = node_15946.arr;
(arr_15947[(i & (31))] = val);
} else {
var arr_15948 = node_15946.arr;
var subidx_15949 = ((i >> shift_15945__$1) & (31));
var child_15950 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_15948[subidx_15949]));
(arr_15948[subidx_15949] = child_15950);

var G__15951 = (shift_15945__$1 - (5));
var G__15952 = child_15950;
shift_15945__$1 = G__15951;
node_15946 = G__15952;
continue;
}
break;
}
} else {
var arr_15953 = ret.arr;
var rngs_15954 = clojure.core.rrb_vector.nodes.ranges(ret);
var subidx_15955 = ((i >> shift) & (31));
var subidx_15956__$1 = (function (){var subidx__$1 = subidx_15955;
while(true){
if((i < ((rngs_15954[subidx__$1]) | (0)))){
return subidx__$1;
} else {
var G__15958 = (subidx__$1 + (1));
subidx__$1 = G__15958;
continue;
}
break;
}
})();
var i_15957__$1 = (((subidx_15956__$1 === (0)))?i:(i - (rngs_15954[(subidx_15956__$1 - (1))])));
(arr_15953[subidx_15956__$1] = (function (){var G__15940 = (shift - (5));
var G__15941 = root_edit;
var G__15942 = (arr_15953[subidx_15956__$1]);
var G__15943 = i_15957__$1;
var G__15944 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__15940,G__15941,G__15942,G__15943,G__15944) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__15940,G__15941,G__15942,G__15943,G__15944));
})());
}

return ret;
});
