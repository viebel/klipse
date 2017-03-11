goog.provide("re_frame.events");
(function (){
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",(301435442)); return (
new cljs.core.Var(function(){return re_frame.events.kind;},new cljs.core.Symbol("re-frame.events","kind","re-frame.events/kind",(1110032584),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.events","re-frame.events",(-307935036),null),new cljs.core.Symbol(null,"kind","kind",(923265724),null),"re_frame/events.cljc",(10),(1),(11),(11),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frame.events.kind)?re_frame.events.kind.cljs$lang$test:null)])));})()
;
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
(function (){
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__11_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__11_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected a collection of interceptors, got:")].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", given an empty interceptor chain")].join(''));
} else {
}

var temp__22186__auto___108 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__22186__auto___108)){
var not_i_109 = temp__22186__auto___108;
if(cljs.core.fn_QMARK_.call(null,not_i_109)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_109);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected interceptors, but got:")].join(''),not_i_109);
}
} else {
}

return chain;
}
}); return (
new cljs.core.Var(function(){return re_frame.events.flatten_and_remove_nils;},new cljs.core.Symbol("re-frame.events","flatten-and-remove-nils","re-frame.events/flatten-and-remove-nils",(874050682),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"re-frame.events","re-frame.events",(-307935036),null),new cljs.core.Symbol(null,"flatten-and-remove-nils","flatten-and-remove-nils",(-503928234),null),"re_frame/events.cljc",(31),(1),(14),(14),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null)], null)),"`interceptors` might have nested collections, and contain nil elements.\n  return a flat collection, with all nils removed.\n  This function is 9/10 about giving good error messages",(cljs.core.truth_(re_frame.events.flatten_and_remove_nils)?re_frame.events.flatten_and_remove_nils.cljs$lang$test:null)])));})()
;
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
(function (){
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
}); return (
new cljs.core.Var(function(){return re_frame.events.register;},new cljs.core.Symbol("re-frame.events","register","re-frame.events/register",(1779430695),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.events","re-frame.events",(-307935036),null),new cljs.core.Symbol(null,"register","register",(-685913253),null),"re_frame/events.cljc",(15),(1),(35),(35),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null)], null)),"Associate the given event `id` with the given collection of `interceptors`.\n\n   `interceptors` may contain nested collections and there may be nils\n   at any level,so process this structure into a simple, nil-less vector\n   before registration.\n\n   An `event handler` will likely be at the end of the chain (wrapped in an interceptor).",(cljs.core.truth_(re_frame.events.register)?re_frame.events.register.cljs$lang$test:null)])));})()
;
(function (){
re_frame.events._STAR_handling_STAR_ = null; return (
new cljs.core.Var(function(){return re_frame.events._STAR_handling_STAR_;},new cljs.core.Symbol("re-frame.events","*handling*","re-frame.events/*handling*",(-303832408),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.events","re-frame.events",(-307935036),null),new cljs.core.Symbol(null,"*handling*","*handling*",(991021244),null),"re_frame/events.cljc",(26),(1),true,(50),(50),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)?re_frame.events._STAR_handling_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
(function (){
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__21873__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__21873__auto__)){
var interceptors = temp__21873__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: while handling \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_frame.events._STAR_handling_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\", dispatch-sync was called for \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_v),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". You can't call dispatch-sync within an event handler.")].join(''));
} else {
var _STAR_handling_STAR_111 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{return re_frame.trace.with_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",(-1267664310)),event_id,new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",(301435442)),event_v], null)], null),re_frame.interceptor.execute.call(null,event_v,interceptors));
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_111;
}}
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return re_frame.events.handle;},new cljs.core.Symbol("re-frame.events","handle","re-frame.events/handle",(-922918071),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.events","re-frame.events",(-307935036),null),new cljs.core.Symbol(null,"handle","handle",(-1115486915),null),"re_frame/events.cljc",(13),(1),(52),(52),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-v","event-v",(-1275754404),null)], null)),"Given an event vector, look up the associated intercepter chain, and execute it.",(cljs.core.truth_(re_frame.events.handle)?re_frame.events.handle.cljs$lang$test:null)])));})()
;
