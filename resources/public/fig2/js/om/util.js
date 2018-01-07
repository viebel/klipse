// Compiled by ClojureScript 1.9.908 {}
goog.provide('om.util');
goog.require('cljs.core');
om.util.force_children = (function om$util$force_children(x){
var G__17468 = x;
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,om.util.force_children),G__17468);
} else {
return G__17468;
}
});
om.util.union_QMARK_ = (function om$util$union_QMARK_(expr){
var expr__$1 = (function (){var G__17469 = expr;
if(cljs.core.seq_QMARK_.call(null,expr)){
return cljs.core.first.call(null,G__17469);
} else {
return G__17469;
}
})();
return (cljs.core.map_QMARK_.call(null,expr__$1)) && (cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,cljs.core.first.call(null,expr__$1))));
});
om.util.join_QMARK_ = (function om$util$join_QMARK_(x){
var x__$1 = ((cljs.core.seq_QMARK_.call(null,x))?cljs.core.first.call(null,x):x);
return cljs.core.map_QMARK_.call(null,x__$1);
});
/**
 * Returns true if x is an ident.
 */
om.util.ident_QMARK_ = (function om$util$ident_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && (((2) === cljs.core.count.call(null,x))) && ((cljs.core.nth.call(null,x,(0)) instanceof cljs.core.Keyword));
});
om.util.join_entry = (function om$util$join_entry(expr){
if(cljs.core.seq_QMARK_.call(null,expr)){
return cljs.core.ffirst.call(null,expr);
} else {
return cljs.core.first.call(null,expr);
}
});
om.util.join_key = (function om$util$join_key(expr){
if(cljs.core.map_QMARK_.call(null,expr)){
return cljs.core.ffirst.call(null,expr);
} else {
if(cljs.core.seq_QMARK_.call(null,expr)){
return om.util.join_key.call(null,cljs.core.first.call(null,expr));
} else {
return expr;

}
}
});
om.util.join_value = (function om$util$join_value(join){
return cljs.core.second.call(null,om.util.join_entry.call(null,join));
});
om.util.unique_ident_QMARK_ = (function om$util$unique_ident_QMARK_(x){
return (om.util.ident_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second.call(null,x)));
});
om.util.recursion_QMARK_ = (function om$util$recursion_QMARK_(x){
return (cljs.core.symbol_identical_QMARK_.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),x)) || (typeof x === 'number');
});
om.util.mutation_QMARK_ = (function om$util$mutation_QMARK_(expr){
var expr__$1 = (function (){var G__17470 = expr;
if(cljs.core.seq_QMARK_.call(null,expr)){
return cljs.core.first.call(null,G__17470);
} else {
return G__17470;
}
})();
return (expr__$1 instanceof cljs.core.Symbol);
});
om.util.mutation_key = (function om$util$mutation_key(expr){
if((cljs.core.first.call(null,expr) instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? (first expr))"));
}

return cljs.core.first.call(null,expr);
});

//# sourceMappingURL=util.js.map
