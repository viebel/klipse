// Compiled by ClojureScript 1.9.946 {:static-fns true, :fn-invoke-direct true, :optimize-constants false}
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
var n_18038 = ret;
var shift_18039__$1 = shift;
while(true){
var arr_18040 = n_18038.arr;
var subidx_18041 = (((cnt - (1)) >> shift_18039__$1) & (31));
if((shift_18039__$1 === (5))){
(arr_18040[subidx_18041] = tail_node);
} else {
var child_18042 = (arr_18040[subidx_18041]);
if((child_18042 == null)){
(arr_18040[subidx_18041] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_18039__$1 - (5)),tail_node));
} else {
var editable_child_18043 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_18042);
(arr_18040[subidx_18041] = editable_child_18043);

var G__18044 = editable_child_18043;
var G__18045 = (shift_18039__$1 - (5));
n_18038 = G__18044;
shift_18039__$1 = G__18045;
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
var G__18033 = (shift - (5));
var G__18034 = (ccnt + (1));
var G__18035 = root_edit;
var G__18036 = child;
var G__18037 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__18033,G__18034,G__18035,G__18036,G__18037) : clojure.core.rrb_vector.transients.push_tail_BANG_(G__18033,G__18034,G__18035,G__18036,G__18037));
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
var child = (function (){var G__18046 = (shift - (5));
var G__18047 = cnt;
var G__18048 = root_edit;
var G__18049 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__18046,G__18047,G__18048,G__18049) : clojure.core.rrb_vector.transients.pop_tail_BANG_(G__18046,G__18047,G__18048,G__18049));
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
var G__18054 = (subidx__$1 + (1));
subidx__$1 = G__18054;
continue;
}
break;
}
})();
if((shift > (5))){
var child = (ret.arr[subidx__$1]);
var child_cnt = (((subidx__$1 === (0)))?(rngs[(0)]):((rngs[subidx__$1]) - (rngs[(subidx__$1 - (1))])));
var new_child = (function (){var G__18050 = (shift - (5));
var G__18051 = child_cnt;
var G__18052 = root_edit;
var G__18053 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__18050,G__18051,G__18052,G__18053) : clojure.core.rrb_vector.transients.pop_tail_BANG_(G__18050,G__18051,G__18052,G__18053));
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
var shift_18060__$1 = shift;
var node_18061 = ret;
while(true){
if((shift_18060__$1 === (0))){
var arr_18062 = node_18061.arr;
(arr_18062[(i & (31))] = val);
} else {
var arr_18063 = node_18061.arr;
var subidx_18064 = ((i >> shift_18060__$1) & (31));
var child_18065 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_18063[subidx_18064]));
(arr_18063[subidx_18064] = child_18065);

var G__18066 = (shift_18060__$1 - (5));
var G__18067 = child_18065;
shift_18060__$1 = G__18066;
node_18061 = G__18067;
continue;
}
break;
}
} else {
var arr_18068 = ret.arr;
var rngs_18069 = clojure.core.rrb_vector.nodes.ranges(ret);
var subidx_18070 = ((i >> shift) & (31));
var subidx_18071__$1 = (function (){var subidx__$1 = subidx_18070;
while(true){
if((i < ((rngs_18069[subidx__$1]) | (0)))){
return subidx__$1;
} else {
var G__18073 = (subidx__$1 + (1));
subidx__$1 = G__18073;
continue;
}
break;
}
})();
var i_18072__$1 = (((subidx_18071__$1 === (0)))?i:(i - (rngs_18069[(subidx_18071__$1 - (1))])));
(arr_18068[subidx_18071__$1] = (function (){var G__18055 = (shift - (5));
var G__18056 = root_edit;
var G__18057 = (arr_18068[subidx_18071__$1]);
var G__18058 = i_18072__$1;
var G__18059 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__18055,G__18056,G__18057,G__18058,G__18059) : clojure.core.rrb_vector.transients.do_assoc_BANG_(G__18055,G__18056,G__18057,G__18058,G__18059));
})());
}

return ret;
});
