// Compiled by ClojureScript 1.9.908 {:static-fns true, :fn-invoke-direct true, :optimize-constants false}
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
var n_14459 = ret;
var shift_14460__$1 = shift;
while(true){
var arr_14461 = n_14459.arr;
var subidx_14462 = (((cnt - (1)) >> shift_14460__$1) & (31));
if((shift_14460__$1 === (5))){
(arr_14461[subidx_14462] = tail_node);
} else {
var child_14463 = (arr_14461[subidx_14462]);
if((child_14463 == null)){
(arr_14461[subidx_14462] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_14460__$1 - (5)),tail_node));
} else {
var editable_child_14464 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_14463);
(arr_14461[subidx_14462] = editable_child_14464);

var G__14465 = editable_child_14464;
var G__14466 = (shift_14460__$1 - (5));
n_14459 = G__14465;
shift_14460__$1 = G__14466;
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
var G__14454 = (shift - (5));
var G__14455 = (ccnt + (1));
var G__14456 = root_edit;
var G__14457 = child;
var G__14458 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__14454,G__14455,G__14456,G__14457,G__14458) : clojure.core.rrb_vector.transients.push_tail_BANG_(G__14454,G__14455,G__14456,G__14457,G__14458));
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
var child = (function (){var G__14467 = (shift - (5));
var G__14468 = cnt;
var G__14469 = root_edit;
var G__14470 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__14467,G__14468,G__14469,G__14470) : clojure.core.rrb_vector.transients.pop_tail_BANG_(G__14467,G__14468,G__14469,G__14470));
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
var G__14475 = (subidx__$1 + (1));
subidx__$1 = G__14475;
continue;
}
break;
}
})();
if((shift > (5))){
var child = (ret.arr[subidx__$1]);
var child_cnt = (((subidx__$1 === (0)))?(rngs[(0)]):((rngs[subidx__$1]) - (rngs[(subidx__$1 - (1))])));
var new_child = (function (){var G__14471 = (shift - (5));
var G__14472 = child_cnt;
var G__14473 = root_edit;
var G__14474 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__14471,G__14472,G__14473,G__14474) : clojure.core.rrb_vector.transients.pop_tail_BANG_(G__14471,G__14472,G__14473,G__14474));
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
var shift_14481__$1 = shift;
var node_14482 = ret;
while(true){
if((shift_14481__$1 === (0))){
var arr_14483 = node_14482.arr;
(arr_14483[(i & (31))] = val);
} else {
var arr_14484 = node_14482.arr;
var subidx_14485 = ((i >> shift_14481__$1) & (31));
var child_14486 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_14484[subidx_14485]));
(arr_14484[subidx_14485] = child_14486);

var G__14487 = (shift_14481__$1 - (5));
var G__14488 = child_14486;
shift_14481__$1 = G__14487;
node_14482 = G__14488;
continue;
}
break;
}
} else {
var arr_14489 = ret.arr;
var rngs_14490 = clojure.core.rrb_vector.nodes.ranges(ret);
var subidx_14491 = ((i >> shift) & (31));
var subidx_14492__$1 = (function (){var subidx__$1 = subidx_14491;
while(true){
if((i < ((rngs_14490[subidx__$1]) | (0)))){
return subidx__$1;
} else {
var G__14494 = (subidx__$1 + (1));
subidx__$1 = G__14494;
continue;
}
break;
}
})();
var i_14493__$1 = (((subidx_14492__$1 === (0)))?i:(i - (rngs_14490[(subidx_14492__$1 - (1))])));
(arr_14489[subidx_14492__$1] = (function (){var G__14476 = (shift - (5));
var G__14477 = root_edit;
var G__14478 = (arr_14489[subidx_14492__$1]);
var G__14479 = i_14493__$1;
var G__14480 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__14476,G__14477,G__14478,G__14479,G__14480) : clojure.core.rrb_vector.transients.do_assoc_BANG_(G__14476,G__14477,G__14478,G__14479,G__14480));
})());
}

return ret;
});
