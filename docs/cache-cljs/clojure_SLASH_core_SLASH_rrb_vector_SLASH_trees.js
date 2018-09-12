// Compiled by ClojureScript 1.9.946 {:static-fns true, :fn-invoke-direct true, :optimize-constants false}
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
var G__17982 = (node__$1.arr[((i__$1 >> shift__$2) & (31))]);
var G__17983 = (shift__$2 - (5));
node__$1 = G__17982;
shift__$2 = G__17983;
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
var G__17984 = (j + (1));
j = G__17984;
continue;
}
break;
}
})();
var i__$2 = (((j > (0)))?(i__$1 - (rngs[(j - (1))])):i__$1);
var G__17985 = i__$2;
var G__17986 = (node.arr[j]);
var G__17987 = (shift__$1 - (5));
i__$1 = G__17985;
node = G__17986;
shift__$1 = G__17987;
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

var G__17988 = (s + (5));
var G__17989 = ret;
s = G__17988;
n = G__17989;
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

var G__17990 = (s + (5));
var G__17991 = ret;
s = G__17990;
n = G__17991;
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
var n_17997 = ret;
var shift_17998__$1 = shift;
while(true){
var arr_17999__$1 = n_17997.arr;
var subidx_18000 = (((cnt - (1)) >> shift_17998__$1) & (31));
if((shift_17998__$1 === (5))){
(arr_17999__$1[subidx_18000] = tail_node);
} else {
var temp__5455__auto___18001 = (arr_17999__$1[subidx_18000]);
if(cljs.core.truth_(temp__5455__auto___18001)){
var child_18002 = temp__5455__auto___18001;
var new_carr_18003 = cljs.core.aclone(child_18002.arr);
var new_child_18004 = cljs.core.__GT_VectorNode(root_edit,new_carr_18003);
(arr_17999__$1[subidx_18000] = new_child_18004);

var G__18005 = new_child_18004;
var G__18006 = (shift_17998__$1 - (5));
n_17997 = G__18005;
shift_17998__$1 = G__18006;
continue;
} else {
(arr_17999__$1[subidx_18000] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_17998__$1 - (5)),tail_node));
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
var G__17992 = (shift - (5));
var G__17993 = (ccnt + (1));
var G__17994 = root_edit;
var G__17995 = child;
var G__17996 = tail_node;
return (clojure.core.rrb_vector.trees.push_tail.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.trees.push_tail.cljs$core$IFn$_invoke$arity$5(G__17992,G__17993,G__17994,G__17995,G__17996) : clojure.core.rrb_vector.trees.push_tail(G__17992,G__17993,G__17994,G__17995,G__17996));
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
var new_child = (function (){var G__18007 = (shift - (5));
var G__18008 = cnt;
var G__18009 = root_edit;
var G__18010 = (current_node.arr[subidx]);
return (clojure.core.rrb_vector.trees.pop_tail.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.trees.pop_tail.cljs$core$IFn$_invoke$arity$4(G__18007,G__18008,G__18009,G__18010) : clojure.core.rrb_vector.trees.pop_tail(G__18007,G__18008,G__18009,G__18010));
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
var G__18015 = (subidx__$1 + (1));
subidx__$1 = G__18015;
continue;
}
break;
}
})();
var new_rngs = cljs.core.aclone(rngs);
if((shift > (5))){
var child = (current_node.arr[subidx__$1]);
var child_cnt = (((subidx__$1 === (0)))?(rngs[(0)]):((rngs[subidx__$1]) - (rngs[(subidx__$1 - (1))])));
var new_child = (function (){var G__18011 = (shift - (5));
var G__18012 = child_cnt;
var G__18013 = root_edit;
var G__18014 = child;
return (clojure.core.rrb_vector.trees.pop_tail.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.trees.pop_tail.cljs$core$IFn$_invoke$arity$4(G__18011,G__18012,G__18013,G__18014) : clojure.core.rrb_vector.trees.pop_tail(G__18011,G__18012,G__18013,G__18014));
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
var shift_18020__$1 = shift;
var node_18021__$1 = node;
while(true){
if((shift_18020__$1 === (0))){
var arr_18022 = node_18021__$1.arr;
(arr_18022[(i & (31))] = val);
} else {
var arr_18023 = node_18021__$1.arr;
var subidx_18024 = ((i >> shift_18020__$1) & (31));
var child_18025 = clojure.core.rrb_vector.nodes.clone(shift_18020__$1,(arr_18023[subidx_18024]));
(arr_18023[subidx_18024] = child_18025);

var G__18026 = (shift_18020__$1 - (5));
var G__18027 = child_18025;
shift_18020__$1 = G__18026;
node_18021__$1 = G__18027;
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
var G__18028 = (subidx__$1 + (1));
subidx__$1 = G__18028;
continue;
}
break;
}
})();
var i__$1 = (((subidx__$1 === (0)))?i:(i - (rngs[(subidx__$1 - (1))])));
(arr[subidx__$1] = (function (){var G__18016 = (shift - (5));
var G__18017 = (arr[subidx__$1]);
var G__18018 = i__$1;
var G__18019 = val;
return (clojure.core.rrb_vector.trees.do_assoc.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.trees.do_assoc.cljs$core$IFn$_invoke$arity$4(G__18016,G__18017,G__18018,G__18019) : clojure.core.rrb_vector.trees.do_assoc(G__18016,G__18017,G__18018,G__18019));
})());

return cljs.core.__GT_VectorNode(current_node.edit,arr);
}
});
