goog.provide("re_frame.subs");
(function (){
re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",(-2093760025)); return (
new cljs.core.Var(function(){return re_frame.subs.kind;},new cljs.core.Symbol("re-frame.subs","kind","re-frame.subs/kind",(1584919726),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.subs","re-frame.subs",(-487921482),null),new cljs.core.Symbol(null,"kind","kind",(923265724),null),"re_frame/subs.cljc",(10),(1),(10),(10),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frame.subs.kind)?re_frame.subs.kind.cljs$lang$test:null)])));})()
;
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.subs.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
(function (){
re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY); return (
new cljs.core.Var(function(){return re_frame.subs.query__GT_reaction;},new cljs.core.Symbol("re-frame.subs","query->reaction","re-frame.subs/query->reaction",(1072268313),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.subs","re-frame.subs",(-487921482),null),new cljs.core.Symbol(null,"query->reaction","query->reaction",(1423540843),null),"re_frame/subs.cljc",(21),(1),(18),(18),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frame.subs.query__GT_reaction)?re_frame.subs.query__GT_reaction.cljs$lang$test:null)])));})()
;
/**
 * Runs on-dispose for all subscriptions we have in the subscription cache.
 *   Used to force recreation of new subscriptions. Should only be necessary
 *   in development.
 * 
 *   The on-dispose functions for the subscriptions will remove themselves from the
 *   cache.
 * 
 *   Useful when reloading Figwheel code after a React exception, as React components
 *   aren't cleaned up properly. This means a subscription's on-dispose function isn't
 *   run when the components are destroyed. If a bad subscription caused your exception,
 *   then you can't fix it without reloading your browser.
 */
(function (){
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(){
var seq__122_132 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction));
var chunk__123_133 = null;
var count__124_134 = (0);
var i__125_135 = (0);
while(true){
if((i__125_135 < count__124_134)){
var vec__126_136 = cljs.core._nth.call(null,chunk__123_133,i__125_135);
var k_137 = cljs.core.nth.call(null,vec__126_136,(0),null);
var rxn_138 = cljs.core.nth.call(null,vec__126_136,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_138);

var G__139 = seq__122_132;
var G__140 = chunk__123_133;
var G__141 = count__124_134;
var G__142 = (i__125_135 + (1));
seq__122_132 = G__139;
chunk__123_133 = G__140;
count__124_134 = G__141;
i__125_135 = G__142;
continue;
} else {
var temp__22186__auto___143 = cljs.core.seq.call(null,seq__122_132);
if(temp__22186__auto___143){
var seq__122_144__$1 = temp__22186__auto___143;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__122_144__$1)){
var c__25653__auto___145 = cljs.core.chunk_first.call(null,seq__122_144__$1);
var G__146 = cljs.core.chunk_rest.call(null,seq__122_144__$1);
var G__147 = c__25653__auto___145;
var G__148 = cljs.core.count.call(null,c__25653__auto___145);
var G__149 = (0);
seq__122_132 = G__146;
chunk__123_133 = G__147;
count__124_134 = G__148;
i__125_135 = G__149;
continue;
} else {
var vec__129_150 = cljs.core.first.call(null,seq__122_144__$1);
var k_151 = cljs.core.nth.call(null,vec__129_150,(0),null);
var rxn_152 = cljs.core.nth.call(null,vec__129_150,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_152);

var G__153 = cljs.core.next.call(null,seq__122_144__$1);
var G__154 = null;
var G__155 = (0);
var G__156 = (0);
seq__122_132 = G__153;
chunk__123_133 = G__154;
count__124_134 = G__155;
i__125_135 = G__156;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",(-436710552)),"Subscription cache should be empty after clearing it.");
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return re_frame.subs.clear_subscription_cache_BANG_;},new cljs.core.Symbol("re-frame.subs","clear-subscription-cache!","re-frame.subs/clear-subscription-cache!",(-4601075),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.subs","re-frame.subs",(-487921482),null),new cljs.core.Symbol(null,"clear-subscription-cache!","clear-subscription-cache!",(1196020095),null),"re_frame/subs.cljc",(32),(1),(20),(20),cljs.core.list(cljs.core.PersistentVector.EMPTY),"Runs on-dispose for all subscriptions we have in the subscription cache.\n  Used to force recreation of new subscriptions. Should only be necessary\n  in development.\n\n  The on-dispose functions for the subscriptions will remove themselves from the\n  cache.\n\n  Useful when reloading Figwheel code after a React exception, as React components\n  aren't cleaned up properly. This means a subscription's on-dispose function isn't\n  run when the components are destroyed. If a bad subscription caused your exception,\n  then you can't fix it without reloading your browser.",(cljs.core.truth_(re_frame.subs.clear_subscription_cache_BANG_)?re_frame.subs.clear_subscription_cache_BANG_.cljs$lang$test:null)])));})()
;
/**
 * Unregisters all existing subscription handlers
 */
(function (){
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.call(null,re_frame.subs.kind);

return re_frame.subs.clear_subscription_cache_BANG_.call(null);
}); return (
new cljs.core.Var(function(){return re_frame.subs.clear_all_handlers_BANG_;},new cljs.core.Symbol("re-frame.subs","clear-all-handlers!","re-frame.subs/clear-all-handlers!",(-914639320),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.subs","re-frame.subs",(-487921482),null),new cljs.core.Symbol(null,"clear-all-handlers!","clear-all-handlers!",(1846259734),null),"re_frame/subs.cljc",(26),(1),(38),(38),cljs.core.list(cljs.core.PersistentVector.EMPTY),"Unregisters all existing subscription handlers",(cljs.core.truth_(re_frame.subs.clear_all_handlers_BANG_)?re_frame.subs.clear_all_handlers_BANG_.cljs$lang$test:null)])));})()
;
/**
 * cache the reaction r
 */
(function (){
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_.call(null,r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

return re_frame.trace.with_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",(-1267664310)),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)),new cljs.core.Keyword("sub","dispose","sub/dispose",(365440536)),new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",(-1514170131)),query_v,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,r)], null)], null),null);
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

re_frame.trace.merge_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,r)], null)], null));

return r;
}); return (
new cljs.core.Var(function(){return re_frame.subs.cache_and_return;},new cljs.core.Symbol("re-frame.subs","cache-and-return","re-frame.subs/cache-and-return",(-882614414),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.subs","re-frame.subs",(-487921482),null),new cljs.core.Symbol(null,"cache-and-return","cache-and-return",(575939936),null),"re_frame/subs.cljc",(23),(1),(44),(44),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",(126361396),null),new cljs.core.Symbol(null,"dynv","dynv",(-405952138),null),new cljs.core.Symbol(null,"r","r",(1169147337),null)], null)),"cache the reaction r",(cljs.core.truth_(re_frame.subs.cache_and_return)?re_frame.subs.cache_and_return.cljs$lang$test:null)])));})()
;
(function (){
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var args157 = [];
var len__25946__auto___160 = arguments.length;
var i__25947__auto___161 = (0);
while(true){
if((i__25947__auto___161 < len__25946__auto___160)){
args157.push((arguments[i__25947__auto___161]));

var G__162 = (i__25947__auto___161 + (1));
i__25947__auto___161 = G__162;
continue;
} else {
}
break;
}

var G__159 = args157.length;
switch (G__159) {
case (1):
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args157.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return re_frame.subs.cache_lookup;},new cljs.core.Symbol("re-frame.subs","cache-lookup","re-frame.subs/cache-lookup",(-1677619793),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.subs","re-frame.subs",(-487921482),null),new cljs.core.Symbol(null,"cache-lookup","cache-lookup",(1735496633),null),"re_frame/subs.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",(126361396),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",(126361396),null),new cljs.core.Symbol(null,"dyn-v","dyn-v",(-1704441177),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",(126361396),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",(126361396),null),new cljs.core.Symbol(null,"dyn-v","dyn-v",(-1704441177),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(60),(60),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",(126361396),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",(126361396),null),new cljs.core.Symbol(null,"dyn-v","dyn-v",(-1704441177),null)], null)),null,(cljs.core.truth_(re_frame.subs.cache_lookup)?re_frame.subs.cache_lookup.cljs$lang$test:null)])));})()
;

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return re_frame.subs.cache_lookup;},new cljs.core.Symbol("re-frame.subs","cache-lookup","re-frame.subs/cache-lookup",(-1677619793),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.subs","re-frame.subs",(-487921482),null),new cljs.core.Symbol(null,"cache-lookup","cache-lookup",(1735496633),null),"re_frame/subs.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",(126361396),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",(126361396),null),new cljs.core.Symbol(null,"dyn-v","dyn-v",(-1704441177),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",(126361396),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",(126361396),null),new cljs.core.Symbol(null,"dyn-v","dyn-v",(-1704441177),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(60),(60),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",(126361396),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",(126361396),null),new cljs.core.Symbol(null,"dyn-v","dyn-v",(-1704441177),null)], null)),null,(cljs.core.truth_(re_frame.subs.cache_lookup)?re_frame.subs.cache_lookup.cljs$lang$test:null)]));
/**
 * Returns a Reagent/reaction which contains a computation
 */
(function (){
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var args164 = [];
var len__25946__auto___167 = arguments.length;
var i__25947__auto___168 = (0);
while(true){
if((i__25947__auto___168 < len__25946__auto___167)){
args164.push((arguments[i__25947__auto___168]));

var G__169 = (i__25947__auto___168 + (1));
i__25947__auto___168 = G__169;
continue;
} else {
}
break;
}

var G__166 = args164.length;
switch (G__166) {
case (1):
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args164.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return re_frame.subs.subscribe;},new cljs.core.Symbol("re-frame.subs","subscribe","re-frame.subs/subscribe",(-775420943),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.subs","re-frame.subs",(-487921482),null),new cljs.core.Symbol(null,"subscribe","subscribe",(2056785283),null),"re_frame/subs.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",(126361396),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"dynv","dynv",(-405952138),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",(126361396),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"dynv","dynv",(-405952138),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(69),(69),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",(126361396),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"dynv","dynv",(-405952138),null)], null)),"Returns a Reagent/reaction which contains a computation",(cljs.core.truth_(re_frame.subs.subscribe)?re_frame.subs.subscribe.cljs$lang$test:null)])));})()
;

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.trace.with_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",(-1267664310)),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)),new cljs.core.Keyword("sub","create","sub/create",(-1301317560)),new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",(-1514170131)),query_v], null)], null),(function (){var temp__21873__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__21873__auto__)){
var cached = temp__21873__auto__;
re_frame.trace.merge_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),true,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,cached)], null)], null));

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
re_frame.trace.merge_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),false], null)], null));

if((handler_fn == null)){
re_frame.trace.merge_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",(-978969032)),true], null));

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
})());
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (v,dynv){
return re_frame.trace.with_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",(-1267664310)),re_frame.utils.first_in_vector.call(null,v),new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)),new cljs.core.Keyword("sub","create","sub/create",(-1301317560)),new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",(-1514170131)),v,new cljs.core.Keyword(null,"dyn-v","dyn-v",(949994592)),dynv], null)], null),(function (){var temp__21873__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__21873__auto__)){
var cached = temp__21873__auto__;
re_frame.trace.merge_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),true,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,cached)], null)], null));

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
re_frame.trace.merge_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),false], null)], null));

if(re_frame.interop.debug_enabled_QMARK_){
var temp__22186__auto___171 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__22186__auto___171)){
var not_reactive_172 = temp__22186__auto___171;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",(-436710552)),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_172);
} else {
}
} else {
}

if((handler_fn == null)){
re_frame.trace.merge_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",(-978969032)),true], null));

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__21873__auto__){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__21873__auto__))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__21873__auto__){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__21873__auto__))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__21873__auto__){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__21873__auto__))
));
}
}
})());
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return re_frame.subs.subscribe;},new cljs.core.Symbol("re-frame.subs","subscribe","re-frame.subs/subscribe",(-775420943),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.subs","re-frame.subs",(-487921482),null),new cljs.core.Symbol(null,"subscribe","subscribe",(2056785283),null),"re_frame/subs.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",(126361396),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"dynv","dynv",(-405952138),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",(126361396),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"dynv","dynv",(-405952138),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(69),(69),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",(126361396),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"dynv","dynv",(-405952138),null)], null)),"Returns a Reagent/reaction which contains a computation",(cljs.core.truth_(re_frame.subs.subscribe)?re_frame.subs.subscribe.cljs$lang$test:null)]));
/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
(function (){
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__177){
var vec__178 = p__177;
var k = cljs.core.nth.call(null,vec__178,(0),null);
var v = cljs.core.nth.call(null,vec__178,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
}); return (
new cljs.core.Var(function(){return re_frame.subs.map_vals;},new cljs.core.Symbol("re-frame.subs","map-vals","re-frame.subs/map-vals",(-1494774652),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"re-frame.subs","re-frame.subs",(-487921482),null),new cljs.core.Symbol(null,"map-vals","map-vals",(-818445670),null),"re_frame/subs.cljc",(16),(1),(117),(117),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),"Returns a new version of 'm' in which 'f' has been applied to each value.\n  (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}",(cljs.core.truth_(re_frame.subs.map_vals)?re_frame.subs.map_vals.cljs$lang$test:null)])));})()
;
(function (){
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
re_frame.trace.merge_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",(563633497)),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null));

return signals__$1;
}); return (
new cljs.core.Var(function(){return re_frame.subs.deref_input_signals;},new cljs.core.Symbol("re-frame.subs","deref-input-signals","re-frame.subs/deref-input-signals",(-545468041),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"re-frame.subs","re-frame.subs",(-487921482),null),new cljs.core.Symbol(null,"deref-input-signals","deref-input-signals",(-1483945215),null),"re_frame/subs.cljc",(27),(1),(126),(126),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"signals","signals",(-922298748),null),new cljs.core.Symbol(null,"query-id","query-id",(-1180306927),null)], null)),null,(cljs.core.truth_(re_frame.subs.deref_input_signals)?re_frame.subs.deref_input_signals.cljs$lang$test:null)])));})()
;
/**
 * Associate the given `query id` with a handler function and an optional signal function.
 * 
 *   There's 3 ways this function can be called
 * 
 *   1. (reg-sub
 *     :test-sub
 *     (fn [db [_]] db))
 *   The value in app-db is passed to the computation function as the 1st argument.
 * 
 *   2. (reg-sub
 *     :a-b-sub
 *     (fn [q-vec d-vec]
 *       [(subs/subscribe [:a-sub])
 *        (subs/subscribe [:b-sub])])
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   Two functions provided. The 2nd is computation function, as before. The 1st
 *   is returns what `input signals` should be provided to the computation. The
 *   `input signals` function is called with two arguments: the query vector
 *   and the dynamic vector. The return value can be singleton reaction or
 *   a sequence of reactions.
 * 
 *   3. (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))```
 *   This 3rd variation is just syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. `:<-` is supplied followed by the subscription
 *   vector.
 *   
 */
(function (){
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__25948__auto__ = [];
var len__25946__auto___184 = arguments.length;
var i__25947__auto___185 = (0);
while(true){
if((i__25947__auto___185 < len__25946__auto___184)){
args__25948__auto__.push((arguments[i__25947__auto___185]));

var G__186 = (i__25947__auto___185 + (1));
i__25947__auto___185 = G__186;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((1) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return re_frame.subs.reg_sub;},new cljs.core.Symbol("re-frame.subs","reg-sub","re-frame.subs/reg-sub",(-1694442379),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.subs","re-frame.subs",(-487921482),null),new cljs.core.Symbol(null,"reg-sub","reg-sub",(852548167),null),"re_frame/subs.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"query-id","query-id",(-1180306927),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-id","query-id",(-1180306927),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(137),(137),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-id","query-id",(-1180306927),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Associate the given `query id` with a handler function and an optional signal function.\n\n  There's 3 ways this function can be called\n\n  1. (reg-sub\n       :test-sub\n       (fn [db [_]] db))\n  The value in app-db is passed to the computation function as the 1st argument.\n\n  2. (reg-sub\n       :a-b-sub\n       (fn [q-vec d-vec]\n         [(subs/subscribe [:a-sub])\n          (subs/subscribe [:b-sub])])\n       (fn [[a b] [_]] {:a a :b b}))\n\n  Two functions provided. The 2nd is computation function, as before. The 1st\n  is returns what `input signals` should be provided to the computation. The\n  `input signals` function is called with two arguments: the query vector\n  and the dynamic vector. The return value can be singleton reaction or\n  a sequence of reactions.\n\n  3. (reg-sub\n       :a-b-sub\n       :<- [:a-sub]\n       :<- [:b-sub]\n       (fn [[a b] [_]] {:a a :b b}))```\n  This 3rd variation is just syntactic sugar for the 2nd. Pairs are supplied instead\n  of an `input signals` functions. `:<-` is supplied followed by the subscription\n  vector.\n  ",(cljs.core.truth_(re_frame.subs.reg_sub)?re_frame.subs.reg_sub.cljs$lang$test:null)])));})()
;

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: reg-sub for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", ")].join('');
var inputs_fn = (function (){var G__183 = cljs.core.count.call(null,input_args);
switch (G__183) {
case (0):
return ((function (G__183,computation_fn,input_args,err_header){
return (function() {
var G__188 = null;
var G__188__1 = (function (_){
return re_frame.db.app_db;
});
var G__188__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__188 = function(_,___$1){
switch(arguments.length){
case 1:
return G__188__1.call(this,_);
case 2:
return G__188__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__188.cljs$core$IFn$_invoke$arity$1 = G__188__1;
G__188.cljs$core$IFn$_invoke$arity$2 = G__188__2;
return G__188;
})()
;})(G__183,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),err_header,"2nd argument expected to be an inputs function, got:",f);
}

return f;

break;
case (2):
return ((function (G__183,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return re_frame.subs.subscribe.call(null,cljs.core.second.call(null,input_args));
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe.call(null,cljs.core.second.call(null,input_args));
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(G__183,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,vecs,G__183,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,vecs,G__183,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler.call(null,re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
return re_frame.trace.with_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",(-1267664310)),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)),new cljs.core.Keyword("sub","run","sub/run",(-1821315581)),new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",(-1514170131)),query_vec,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),cljs.core.deref.call(null,reaction_id)], null)], null),computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec));
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
return re_frame.trace.with_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",(-1267664310)),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)),new cljs.core.Keyword("sub","run","sub/run",(-1821315581)),new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",(-1514170131)),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",(949994592)),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),cljs.core.deref.call(null,reaction_id)], null)], null),computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec));
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq181){
var G__182 = cljs.core.first.call(null,seq181);
var seq181__$1 = cljs.core.next.call(null,seq181);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__182,seq181__$1);
});

new cljs.core.Var(function(){return re_frame.subs.reg_sub;},new cljs.core.Symbol("re-frame.subs","reg-sub","re-frame.subs/reg-sub",(-1694442379),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.subs","re-frame.subs",(-487921482),null),new cljs.core.Symbol(null,"reg-sub","reg-sub",(852548167),null),"re_frame/subs.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"query-id","query-id",(-1180306927),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-id","query-id",(-1180306927),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(137),(137),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-id","query-id",(-1180306927),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Associate the given `query id` with a handler function and an optional signal function.\n\n  There's 3 ways this function can be called\n\n  1. (reg-sub\n       :test-sub\n       (fn [db [_]] db))\n  The value in app-db is passed to the computation function as the 1st argument.\n\n  2. (reg-sub\n       :a-b-sub\n       (fn [q-vec d-vec]\n         [(subs/subscribe [:a-sub])\n          (subs/subscribe [:b-sub])])\n       (fn [[a b] [_]] {:a a :b b}))\n\n  Two functions provided. The 2nd is computation function, as before. The 1st\n  is returns what `input signals` should be provided to the computation. The\n  `input signals` function is called with two arguments: the query vector\n  and the dynamic vector. The return value can be singleton reaction or\n  a sequence of reactions.\n\n  3. (reg-sub\n       :a-b-sub\n       :<- [:a-sub]\n       :<- [:b-sub]\n       (fn [[a b] [_]] {:a a :b b}))```\n  This 3rd variation is just syntactic sugar for the 2nd. Pairs are supplied instead\n  of an `input signals` functions. `:<-` is supplied followed by the subscription\n  vector.\n  ",(cljs.core.truth_(re_frame.subs.reg_sub)?re_frame.subs.reg_sub.cljs$lang$test:null)]));
