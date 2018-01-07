// Compiled by ClojureScript 1.9.908 {:static-fns true, :fn-invoke-direct true, :optimize-constants false}
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
var G__14388 = (node__$1.arr[((i__$1 >> shift__$2) & (31))]);
var G__14389 = (shift__$2 - (5));
node__$1 = G__14388;
shift__$2 = G__14389;
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
var G__14390 = (j + (1));
j = G__14390;
continue;
}
break;
}
})();
var i__$2 = (((j > (0)))?(i__$1 - (rngs[(j - (1))])):i__$1);
var G__14391 = i__$2;
var G__14392 = (node.arr[j]);
var G__14393 = (shift__$1 - (5));
i__$1 = G__14391;
node = G__14392;
shift__$1 = G__14393;
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

var G__14394 = (s + (5));
var G__14395 = ret;
s = G__14394;
n = G__14395;
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

var G__14396 = (s + (5));
var G__14397 = ret;
s = G__14396;
n = G__14397;
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
var n_14405 = ret;
var shift_14406__$1 = shift;
while(true){
var arr_14407__$1 = n_14405.arr;
var subidx_14408 = (((cnt - (1)) >> shift_14406__$1) & (31));
if((shift_14406__$1 === (5))){
(arr_14407__$1[subidx_14408] = tail_node);
} else {
var temp__5276__auto___14409 = (arr_14407__$1[subidx_14408]);
if(cljs.core.truth_(temp__5276__auto___14409)){
var child_14410 = temp__5276__auto___14409;
var new_carr_14411 = cljs.core.aclone(child_14410.arr);
var new_child_14412 = cljs.core.__GT_VectorNode(root_edit,new_carr_14411);
(arr_14407__$1[subidx_14408] = new_child_14412);

var G__14414 = new_child_14412;
var G__14415 = (shift_14406__$1 - (5));
n_14405 = G__14414;
shift_14406__$1 = G__14415;
continue;
} else {
(arr_14407__$1[subidx_14408] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_14406__$1 - (5)),tail_node));
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
var G__14400 = (shift - (5));
var G__14401 = (ccnt + (1));
var G__14402 = root_edit;
var G__14403 = child;
var G__14404 = tail_node;
return (clojure.core.rrb_vector.trees.push_tail.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.trees.push_tail.cljs$core$IFn$_invoke$arity$5(G__14400,G__14401,G__14402,G__14403,G__14404) : clojure.core.rrb_vector.trees.push_tail(G__14400,G__14401,G__14402,G__14403,G__14404));
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
var new_child = (function (){var G__14422 = (shift - (5));
var G__14423 = cnt;
var G__14424 = root_edit;
var G__14425 = (current_node.arr[subidx]);
return (clojure.core.rrb_vector.trees.pop_tail.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.trees.pop_tail.cljs$core$IFn$_invoke$arity$4(G__14422,G__14423,G__14424,G__14425) : clojure.core.rrb_vector.trees.pop_tail(G__14422,G__14423,G__14424,G__14425));
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
var G__14433 = (subidx__$1 + (1));
subidx__$1 = G__14433;
continue;
}
break;
}
})();
var new_rngs = cljs.core.aclone(rngs);
if((shift > (5))){
var child = (current_node.arr[subidx__$1]);
var child_cnt = (((subidx__$1 === (0)))?(rngs[(0)]):((rngs[subidx__$1]) - (rngs[(subidx__$1 - (1))])));
var new_child = (function (){var G__14427 = (shift - (5));
var G__14428 = child_cnt;
var G__14429 = root_edit;
var G__14430 = child;
return (clojure.core.rrb_vector.trees.pop_tail.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.trees.pop_tail.cljs$core$IFn$_invoke$arity$4(G__14427,G__14428,G__14429,G__14430) : clojure.core.rrb_vector.trees.pop_tail(G__14427,G__14428,G__14429,G__14430));
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
var shift_14439__$1 = shift;
var node_14440__$1 = node;
while(true){
if((shift_14439__$1 === (0))){
var arr_14441 = node_14440__$1.arr;
(arr_14441[(i & (31))] = val);
} else {
var arr_14442 = node_14440__$1.arr;
var subidx_14443 = ((i >> shift_14439__$1) & (31));
var child_14444 = clojure.core.rrb_vector.nodes.clone(shift_14439__$1,(arr_14442[subidx_14443]));
(arr_14442[subidx_14443] = child_14444);

var G__14445 = (shift_14439__$1 - (5));
var G__14446 = child_14444;
shift_14439__$1 = G__14445;
node_14440__$1 = G__14446;
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
var G__14447 = (subidx__$1 + (1));
subidx__$1 = G__14447;
continue;
}
break;
}
})();
var i__$1 = (((subidx__$1 === (0)))?i:(i - (rngs[(subidx__$1 - (1))])));
(arr[subidx__$1] = (function (){var G__14435 = (shift - (5));
var G__14436 = (arr[subidx__$1]);
var G__14437 = i__$1;
var G__14438 = val;
return (clojure.core.rrb_vector.trees.do_assoc.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.trees.do_assoc.cljs$core$IFn$_invoke$arity$4(G__14435,G__14436,G__14437,G__14438) : clojure.core.rrb_vector.trees.do_assoc(G__14435,G__14436,G__14437,G__14438));
})());

return cljs.core.__GT_VectorNode(current_node.edit,arr);
}
});
