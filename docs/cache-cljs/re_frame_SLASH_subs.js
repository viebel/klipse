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
var seq__248_258 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction));
var chunk__249_259 = null;
var count__250_260 = (0);
var i__251_261 = (0);
while(true){
if((i__251_261 < count__250_260)){
var vec__252_262 = cljs.core._nth.call(null,chunk__249_259,i__251_261);
var k_263 = cljs.core.nth.call(null,vec__252_262,(0),null);
var rxn_264 = cljs.core.nth.call(null,vec__252_262,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_264);

var G__265 = seq__248_258;
var G__266 = chunk__249_259;
var G__267 = count__250_260;
var G__268 = (i__251_261 + (1));
seq__248_258 = G__265;
chunk__249_259 = G__266;
count__250_260 = G__267;
i__251_261 = G__268;
continue;
} else {
var temp__22186__auto___269 = cljs.core.seq.call(null,seq__248_258);
if(temp__22186__auto___269){
var seq__248_270__$1 = temp__22186__auto___269;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__248_270__$1)){
var c__25653__auto___271 = cljs.core.chunk_first.call(null,seq__248_270__$1);
var G__272 = cljs.core.chunk_rest.call(null,seq__248_270__$1);
var G__273 = c__25653__auto___271;
var G__274 = cljs.core.count.call(null,c__25653__auto___271);
var G__275 = (0);
seq__248_258 = G__272;
chunk__249_259 = G__273;
count__250_260 = G__274;
i__251_261 = G__275;
continue;
} else {
var vec__255_276 = cljs.core.first.call(null,seq__248_270__$1);
var k_277 = cljs.core.nth.call(null,vec__255_276,(0),null);
var rxn_278 = cljs.core.nth.call(null,vec__255_276,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_278);

var G__279 = cljs.core.next.call(null,seq__248_270__$1);
var G__280 = null;
var G__281 = (0);
var G__282 = (0);
seq__248_258 = G__279;
chunk__249_259 = G__280;
count__250_260 = G__281;
i__251_261 = G__282;
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

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_296 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",(-1267664310)),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)),new cljs.core.Keyword("sub","dispose","sub/dispose",(365440536)),new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",(-1514170131)),query_v,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__1__auto___309 = re_frame.interop.now.call(null);
var duration__2__auto___310 = (end__1__auto___309 - new cljs.core.Keyword(null,"start","start",(-355208981)).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__297_311 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__298_312 = null;
var count__299_313 = (0);
var i__300_314 = (0);
while(true){
if((i__300_314 < count__299_313)){
var vec__301_315 = cljs.core._nth.call(null,chunk__298_312,i__300_314);
var k__3__auto___316 = cljs.core.nth.call(null,vec__301_315,(0),null);
var cb__4__auto___317 = cljs.core.nth.call(null,vec__301_315,(1),null);
try{cb__4__auto___317.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__2__auto___310,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e304){var e__5__auto___318 = e304;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__3__auto___316,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__5__auto___318);
}
var G__319 = seq__297_311;
var G__320 = chunk__298_312;
var G__321 = count__299_313;
var G__322 = (i__300_314 + (1));
seq__297_311 = G__319;
chunk__298_312 = G__320;
count__299_313 = G__321;
i__300_314 = G__322;
continue;
} else {
var temp__22186__auto___323 = cljs.core.seq.call(null,seq__297_311);
if(temp__22186__auto___323){
var seq__297_324__$1 = temp__22186__auto___323;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__297_324__$1)){
var c__25653__auto___325 = cljs.core.chunk_first.call(null,seq__297_324__$1);
var G__326 = cljs.core.chunk_rest.call(null,seq__297_324__$1);
var G__327 = c__25653__auto___325;
var G__328 = cljs.core.count.call(null,c__25653__auto___325);
var G__329 = (0);
seq__297_311 = G__326;
chunk__298_312 = G__327;
count__299_313 = G__328;
i__300_314 = G__329;
continue;
} else {
var vec__305_330 = cljs.core.first.call(null,seq__297_324__$1);
var k__3__auto___331 = cljs.core.nth.call(null,vec__305_330,(0),null);
var cb__4__auto___332 = cljs.core.nth.call(null,vec__305_330,(1),null);
try{cb__4__auto___332.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__2__auto___310,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e308){var e__5__auto___333 = e308;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__3__auto___331,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__5__auto___333);
}
var G__334 = cljs.core.next.call(null,seq__297_324__$1);
var G__335 = null;
var G__336 = (0);
var G__337 = (0);
seq__297_311 = G__334;
chunk__298_312 = G__335;
count__299_313 = G__336;
i__300_314 = G__337;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_296;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__6__auto___338 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__6__auto___338;

} else {
}

return r;
}); return (
new cljs.core.Var(function(){return re_frame.subs.cache_and_return;},new cljs.core.Symbol("re-frame.subs","cache-and-return","re-frame.subs/cache-and-return",(-882614414),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.subs","re-frame.subs",(-487921482),null),new cljs.core.Symbol(null,"cache-and-return","cache-and-return",(575939936),null),"re_frame/subs.cljc",(23),(1),(44),(44),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",(126361396),null),new cljs.core.Symbol(null,"dynv","dynv",(-405952138),null),new cljs.core.Symbol(null,"r","r",(1169147337),null)], null)),"cache the reaction r",(cljs.core.truth_(re_frame.subs.cache_and_return)?re_frame.subs.cache_and_return.cljs$lang$test:null)])));})()
;
(function (){
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var args339 = [];
var len__25946__auto___342 = arguments.length;
var i__25947__auto___343 = (0);
while(true){
if((i__25947__auto___343 < len__25946__auto___342)){
args339.push((arguments[i__25947__auto___343]));

var G__344 = (i__25947__auto___343 + (1));
i__25947__auto___343 = G__344;
continue;
} else {
}
break;
}

var G__341 = args339.length;
switch (G__341) {
case (1):
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args339.length)].join('')));

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
var args346 = [];
var len__25946__auto___375 = arguments.length;
var i__25947__auto___376 = (0);
while(true){
if((i__25947__auto___376 < len__25946__auto___375)){
args346.push((arguments[i__25947__auto___376]));

var G__377 = (i__25947__auto___376 + (1));
i__25947__auto___376 = G__377;
continue;
} else {
}
break;
}

var G__348 = args346.length;
switch (G__348) {
case (1):
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args346.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return re_frame.subs.subscribe;},new cljs.core.Symbol("re-frame.subs","subscribe","re-frame.subs/subscribe",(-775420943),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.subs","re-frame.subs",(-487921482),null),new cljs.core.Symbol(null,"subscribe","subscribe",(2056785283),null),"re_frame/subs.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",(126361396),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"dynv","dynv",(-405952138),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",(126361396),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"dynv","dynv",(-405952138),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(69),(69),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",(126361396),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"dynv","dynv",(-405952138),null)], null)),"Returns a Reagent/reaction which contains a computation",(cljs.core.truth_(re_frame.subs.subscribe)?re_frame.subs.subscribe.cljs$lang$test:null)])));})()
;

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_349 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",(-1267664310)),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)),new cljs.core.Keyword("sub","create","sub/create",(-1301317560)),new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",(-1514170131)),query_v], null)], null));

try{try{var temp__21873__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__21873__auto__)){
var cached = temp__21873__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__6__auto___379 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),true,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),true,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__6__auto___379;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__6__auto___380 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),false], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__6__auto___380;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__6__auto___381 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",(-978969032)),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",(-978969032)),true], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__6__auto___381;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__1__auto___382 = re_frame.interop.now.call(null);
var duration__2__auto___383 = (end__1__auto___382 - new cljs.core.Keyword(null,"start","start",(-355208981)).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__350_384 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__351_385 = null;
var count__352_386 = (0);
var i__353_387 = (0);
while(true){
if((i__353_387 < count__352_386)){
var vec__354_388 = cljs.core._nth.call(null,chunk__351_385,i__353_387);
var k__3__auto___389 = cljs.core.nth.call(null,vec__354_388,(0),null);
var cb__4__auto___390 = cljs.core.nth.call(null,vec__354_388,(1),null);
try{cb__4__auto___390.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__2__auto___383,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e357){var e__5__auto___391 = e357;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__3__auto___389,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__5__auto___391);
}
var G__392 = seq__350_384;
var G__393 = chunk__351_385;
var G__394 = count__352_386;
var G__395 = (i__353_387 + (1));
seq__350_384 = G__392;
chunk__351_385 = G__393;
count__352_386 = G__394;
i__353_387 = G__395;
continue;
} else {
var temp__22186__auto___396 = cljs.core.seq.call(null,seq__350_384);
if(temp__22186__auto___396){
var seq__350_397__$1 = temp__22186__auto___396;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__350_397__$1)){
var c__25653__auto___398 = cljs.core.chunk_first.call(null,seq__350_397__$1);
var G__399 = cljs.core.chunk_rest.call(null,seq__350_397__$1);
var G__400 = c__25653__auto___398;
var G__401 = cljs.core.count.call(null,c__25653__auto___398);
var G__402 = (0);
seq__350_384 = G__399;
chunk__351_385 = G__400;
count__352_386 = G__401;
i__353_387 = G__402;
continue;
} else {
var vec__358_403 = cljs.core.first.call(null,seq__350_397__$1);
var k__3__auto___404 = cljs.core.nth.call(null,vec__358_403,(0),null);
var cb__4__auto___405 = cljs.core.nth.call(null,vec__358_403,(1),null);
try{cb__4__auto___405.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__2__auto___383,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e361){var e__5__auto___406 = e361;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__3__auto___404,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__5__auto___406);
}
var G__407 = cljs.core.next.call(null,seq__350_397__$1);
var G__408 = null;
var G__409 = (0);
var G__410 = (0);
seq__350_384 = G__407;
chunk__351_385 = G__408;
count__352_386 = G__409;
i__353_387 = G__410;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_349;
}} else {
var temp__21873__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__21873__auto__)){
var cached = temp__21873__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__6__auto___411 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),true,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),true,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__6__auto___411;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__6__auto___412 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),false], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__6__auto___412;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__6__auto___413 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",(-978969032)),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",(-978969032)),true], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__6__auto___413;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (v,dynv){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_362 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",(-1267664310)),re_frame.utils.first_in_vector.call(null,v),new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)),new cljs.core.Keyword("sub","create","sub/create",(-1301317560)),new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",(-1514170131)),v,new cljs.core.Keyword(null,"dyn-v","dyn-v",(949994592)),dynv], null)], null));

try{try{var temp__21873__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__21873__auto__)){
var cached = temp__21873__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__6__auto___414 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),true,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),true,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__6__auto___414;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__6__auto___415 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),false], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__6__auto___415;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__22186__auto___416 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__22186__auto___416)){
var not_reactive_417 = temp__22186__auto___416;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",(-436710552)),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_417);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__6__auto___418 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",(-978969032)),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",(-978969032)),true], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__6__auto___418;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__21873__auto__,_STAR_current_trace_STAR_362){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__21873__auto__,_STAR_current_trace_STAR_362))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__21873__auto__,_STAR_current_trace_STAR_362){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__21873__auto__,_STAR_current_trace_STAR_362))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__21873__auto__,_STAR_current_trace_STAR_362){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__21873__auto__,_STAR_current_trace_STAR_362))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__1__auto___419 = re_frame.interop.now.call(null);
var duration__2__auto___420 = (end__1__auto___419 - new cljs.core.Keyword(null,"start","start",(-355208981)).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__363_421 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__364_422 = null;
var count__365_423 = (0);
var i__366_424 = (0);
while(true){
if((i__366_424 < count__365_423)){
var vec__367_425 = cljs.core._nth.call(null,chunk__364_422,i__366_424);
var k__3__auto___426 = cljs.core.nth.call(null,vec__367_425,(0),null);
var cb__4__auto___427 = cljs.core.nth.call(null,vec__367_425,(1),null);
try{cb__4__auto___427.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__2__auto___420,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e370){var e__5__auto___428 = e370;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__3__auto___426,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__5__auto___428);
}
var G__429 = seq__363_421;
var G__430 = chunk__364_422;
var G__431 = count__365_423;
var G__432 = (i__366_424 + (1));
seq__363_421 = G__429;
chunk__364_422 = G__430;
count__365_423 = G__431;
i__366_424 = G__432;
continue;
} else {
var temp__22186__auto___433 = cljs.core.seq.call(null,seq__363_421);
if(temp__22186__auto___433){
var seq__363_434__$1 = temp__22186__auto___433;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__363_434__$1)){
var c__25653__auto___435 = cljs.core.chunk_first.call(null,seq__363_434__$1);
var G__436 = cljs.core.chunk_rest.call(null,seq__363_434__$1);
var G__437 = c__25653__auto___435;
var G__438 = cljs.core.count.call(null,c__25653__auto___435);
var G__439 = (0);
seq__363_421 = G__436;
chunk__364_422 = G__437;
count__365_423 = G__438;
i__366_424 = G__439;
continue;
} else {
var vec__371_440 = cljs.core.first.call(null,seq__363_434__$1);
var k__3__auto___441 = cljs.core.nth.call(null,vec__371_440,(0),null);
var cb__4__auto___442 = cljs.core.nth.call(null,vec__371_440,(1),null);
try{cb__4__auto___442.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__2__auto___420,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e374){var e__5__auto___443 = e374;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__3__auto___441,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__5__auto___443);
}
var G__444 = cljs.core.next.call(null,seq__363_434__$1);
var G__445 = null;
var G__446 = (0);
var G__447 = (0);
seq__363_421 = G__444;
chunk__364_422 = G__445;
count__365_423 = G__446;
i__366_424 = G__447;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_362;
}} else {
var temp__21873__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__21873__auto__)){
var cached = temp__21873__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__6__auto___448 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),true,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),true,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__6__auto___448;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__6__auto___449 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),false], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__6__auto___449;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__22186__auto___450 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__22186__auto___450)){
var not_reactive_451 = temp__22186__auto___450;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",(-436710552)),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_451);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__6__auto___452 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",(-978969032)),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",(-978969032)),true], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__6__auto___452;

} else {
}

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
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return re_frame.subs.subscribe;},new cljs.core.Symbol("re-frame.subs","subscribe","re-frame.subs/subscribe",(-775420943),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.subs","re-frame.subs",(-487921482),null),new cljs.core.Symbol(null,"subscribe","subscribe",(2056785283),null),"re_frame/subs.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",(126361396),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"dynv","dynv",(-405952138),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",(126361396),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"dynv","dynv",(-405952138),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(69),(69),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",(126361396),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"dynv","dynv",(-405952138),null)], null)),"Returns a Reagent/reaction which contains a computation",(cljs.core.truth_(re_frame.subs.subscribe)?re_frame.subs.subscribe.cljs$lang$test:null)]));
/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
(function (){
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__457){
var vec__458 = p__457;
var k = cljs.core.nth.call(null,vec__458,(0),null);
var v = cljs.core.nth.call(null,vec__458,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
}); return (
new cljs.core.Var(function(){return re_frame.subs.map_vals;},new cljs.core.Symbol("re-frame.subs","map-vals","re-frame.subs/map-vals",(-1494774652),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"re-frame.subs","re-frame.subs",(-487921482),null),new cljs.core.Symbol(null,"map-vals","map-vals",(-818445670),null),"re_frame/subs.cljc",(16),(1),(117),(117),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),"Returns a new version of 'm' in which 'f' has been applied to each value.\n  (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}",(cljs.core.truth_(re_frame.subs.map_vals)?re_frame.subs.map_vals.cljs$lang$test:null)])));})()
;
(function (){
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__6__auto___461 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",(563633497)),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",(563633497)),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__6__auto___461;

} else {
}

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
var len__25946__auto___517 = arguments.length;
var i__25947__auto___518 = (0);
while(true){
if((i__25947__auto___518 < len__25946__auto___517)){
args__25948__auto__.push((arguments[i__25947__auto___518]));

var G__519 = (i__25947__auto___518 + (1));
i__25947__auto___518 = G__519;
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
var inputs_fn = (function (){var G__464 = cljs.core.count.call(null,input_args);
switch (G__464) {
case (0):
return ((function (G__464,computation_fn,input_args,err_header){
return (function() {
var G__521 = null;
var G__521__1 = (function (_){
return re_frame.db.app_db;
});
var G__521__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__521 = function(_,___$1){
switch(arguments.length){
case 1:
return G__521__1.call(this,_);
case 2:
return G__521__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__521.cljs$core$IFn$_invoke$arity$1 = G__521__1;
G__521.cljs$core$IFn$_invoke$arity$2 = G__521__2;
return G__521;
})()
;})(G__464,computation_fn,input_args,err_header))

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
return ((function (G__464,computation_fn,input_args,err_header){
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
;})(G__464,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,vecs,G__464,computation_fn,input_args,err_header){
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
;})(pairs,vecs,G__464,computation_fn,input_args,err_header))

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
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_491 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",(-1267664310)),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)),new cljs.core.Keyword("sub","run","sub/run",(-1821315581)),new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",(-1514170131)),query_vec,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__1__auto___522 = re_frame.interop.now.call(null);
var duration__2__auto___523 = (end__1__auto___522 - new cljs.core.Keyword(null,"start","start",(-355208981)).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__492_524 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__493_525 = null;
var count__494_526 = (0);
var i__495_527 = (0);
while(true){
if((i__495_527 < count__494_526)){
var vec__496_528 = cljs.core._nth.call(null,chunk__493_525,i__495_527);
var k__3__auto___529 = cljs.core.nth.call(null,vec__496_528,(0),null);
var cb__4__auto___530 = cljs.core.nth.call(null,vec__496_528,(1),null);
try{cb__4__auto___530.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__2__auto___523,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e499){var e__5__auto___531 = e499;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__3__auto___529,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__5__auto___531);
}
var G__532 = seq__492_524;
var G__533 = chunk__493_525;
var G__534 = count__494_526;
var G__535 = (i__495_527 + (1));
seq__492_524 = G__532;
chunk__493_525 = G__533;
count__494_526 = G__534;
i__495_527 = G__535;
continue;
} else {
var temp__22186__auto___536 = cljs.core.seq.call(null,seq__492_524);
if(temp__22186__auto___536){
var seq__492_537__$1 = temp__22186__auto___536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__492_537__$1)){
var c__25653__auto___538 = cljs.core.chunk_first.call(null,seq__492_537__$1);
var G__539 = cljs.core.chunk_rest.call(null,seq__492_537__$1);
var G__540 = c__25653__auto___538;
var G__541 = cljs.core.count.call(null,c__25653__auto___538);
var G__542 = (0);
seq__492_524 = G__539;
chunk__493_525 = G__540;
count__494_526 = G__541;
i__495_527 = G__542;
continue;
} else {
var vec__500_543 = cljs.core.first.call(null,seq__492_537__$1);
var k__3__auto___544 = cljs.core.nth.call(null,vec__500_543,(0),null);
var cb__4__auto___545 = cljs.core.nth.call(null,vec__500_543,(1),null);
try{cb__4__auto___545.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__2__auto___523,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e503){var e__5__auto___546 = e503;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__3__auto___544,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__5__auto___546);
}
var G__547 = cljs.core.next.call(null,seq__492_537__$1);
var G__548 = null;
var G__549 = (0);
var G__550 = (0);
seq__492_524 = G__547;
chunk__493_525 = G__548;
count__494_526 = G__549;
i__495_527 = G__550;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_491;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}
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
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_504 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",(-1267664310)),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)),new cljs.core.Keyword("sub","run","sub/run",(-1821315581)),new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",(-1514170131)),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",(949994592)),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__1__auto___551 = re_frame.interop.now.call(null);
var duration__2__auto___552 = (end__1__auto___551 - new cljs.core.Keyword(null,"start","start",(-355208981)).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__505_553 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__506_554 = null;
var count__507_555 = (0);
var i__508_556 = (0);
while(true){
if((i__508_556 < count__507_555)){
var vec__509_557 = cljs.core._nth.call(null,chunk__506_554,i__508_556);
var k__3__auto___558 = cljs.core.nth.call(null,vec__509_557,(0),null);
var cb__4__auto___559 = cljs.core.nth.call(null,vec__509_557,(1),null);
try{cb__4__auto___559.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__2__auto___552,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e512){var e__5__auto___560 = e512;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__3__auto___558,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__5__auto___560);
}
var G__561 = seq__505_553;
var G__562 = chunk__506_554;
var G__563 = count__507_555;
var G__564 = (i__508_556 + (1));
seq__505_553 = G__561;
chunk__506_554 = G__562;
count__507_555 = G__563;
i__508_556 = G__564;
continue;
} else {
var temp__22186__auto___565 = cljs.core.seq.call(null,seq__505_553);
if(temp__22186__auto___565){
var seq__505_566__$1 = temp__22186__auto___565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__505_566__$1)){
var c__25653__auto___567 = cljs.core.chunk_first.call(null,seq__505_566__$1);
var G__568 = cljs.core.chunk_rest.call(null,seq__505_566__$1);
var G__569 = c__25653__auto___567;
var G__570 = cljs.core.count.call(null,c__25653__auto___567);
var G__571 = (0);
seq__505_553 = G__568;
chunk__506_554 = G__569;
count__507_555 = G__570;
i__508_556 = G__571;
continue;
} else {
var vec__513_572 = cljs.core.first.call(null,seq__505_566__$1);
var k__3__auto___573 = cljs.core.nth.call(null,vec__513_572,(0),null);
var cb__4__auto___574 = cljs.core.nth.call(null,vec__513_572,(1),null);
try{cb__4__auto___574.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__2__auto___552,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e516){var e__5__auto___575 = e516;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__3__auto___573,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__5__auto___575);
}
var G__576 = cljs.core.next.call(null,seq__505_566__$1);
var G__577 = null;
var G__578 = (0);
var G__579 = (0);
seq__505_553 = G__576;
chunk__506_554 = G__577;
count__507_555 = G__578;
i__508_556 = G__579;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_504;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}
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

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq462){
var G__463 = cljs.core.first.call(null,seq462);
var seq462__$1 = cljs.core.next.call(null,seq462);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__463,seq462__$1);
});

new cljs.core.Var(function(){return re_frame.subs.reg_sub;},new cljs.core.Symbol("re-frame.subs","reg-sub","re-frame.subs/reg-sub",(-1694442379),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.subs","re-frame.subs",(-487921482),null),new cljs.core.Symbol(null,"reg-sub","reg-sub",(852548167),null),"re_frame/subs.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"query-id","query-id",(-1180306927),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-id","query-id",(-1180306927),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(137),(137),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-id","query-id",(-1180306927),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Associate the given `query id` with a handler function and an optional signal function.\n\n  There's 3 ways this function can be called\n\n  1. (reg-sub\n       :test-sub\n       (fn [db [_]] db))\n  The value in app-db is passed to the computation function as the 1st argument.\n\n  2. (reg-sub\n       :a-b-sub\n       (fn [q-vec d-vec]\n         [(subs/subscribe [:a-sub])\n          (subs/subscribe [:b-sub])])\n       (fn [[a b] [_]] {:a a :b b}))\n\n  Two functions provided. The 2nd is computation function, as before. The 1st\n  is returns what `input signals` should be provided to the computation. The\n  `input signals` function is called with two arguments: the query vector\n  and the dynamic vector. The return value can be singleton reaction or\n  a sequence of reactions.\n\n  3. (reg-sub\n       :a-b-sub\n       :<- [:a-sub]\n       :<- [:b-sub]\n       (fn [[a b] [_]] {:a a :b b}))```\n  This 3rd variation is just syntactic sugar for the 2nd. Pairs are supplied instead\n  of an `input signals` functions. `:<-` is supplied followed by the subscription\n  vector.\n  ",(cljs.core.truth_(re_frame.subs.reg_sub)?re_frame.subs.reg_sub.cljs$lang$test:null)]));
