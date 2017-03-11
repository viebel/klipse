goog.provide("re_frame.fx");
(function (){
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",(-1237829572)); return (
new cljs.core.Var(function(){return re_frame.fx.kind;},new cljs.core.Symbol("re-frame.fx","kind","re-frame.fx/kind",(1383214593),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.fx","re-frame.fx",(-1970680630),null),new cljs.core.Symbol(null,"kind","kind",(923265724),null),"re_frame/fx.cljc",(10),(1),(14),(14),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frame.fx.kind)?re_frame.fx.kind.cljs$lang$test:null)])));})()
;
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
(function (){
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind); return (
new cljs.core.Var(function(){return re_frame.fx.register;},new cljs.core.Symbol("re-frame.fx","register","re-frame.fx/register",(2060851182),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.fx","re-frame.fx",(-1970680630),null),new cljs.core.Symbol(null,"register","register",(-685913253),null),"re_frame/fx.cljc",(14),(1),(16),(16),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frame.fx.register)?re_frame.fx.register.cljs$lang$test:null)])));})()
;
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
(function (){
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",(-1388402092)),new cljs.core.Keyword(null,"do-fx","do-fx",(1194163050)),new cljs.core.Keyword(null,"after","after",(594996914)),(function re_frame$fx$do_fx_after(context){
var seq__221 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",(-282369292)).cljs$core$IFn$_invoke$arity$1(context));
var chunk__222 = null;
var count__223 = (0);
var i__224 = (0);
while(true){
if((i__224 < count__223)){
var vec__225 = cljs.core._nth.call(null,chunk__222,i__224);
var effect_k = cljs.core.nth.call(null,vec__225,(0),null);
var value = cljs.core.nth.call(null,vec__225,(1),null);
var temp__21873__auto___231 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__21873__auto___231)){
var effect_fn_232 = temp__21873__auto___231;
effect_fn_232.call(null,value);
} else {
}

var G__233 = seq__221;
var G__234 = chunk__222;
var G__235 = count__223;
var G__236 = (i__224 + (1));
seq__221 = G__233;
chunk__222 = G__234;
count__223 = G__235;
i__224 = G__236;
continue;
} else {
var temp__22186__auto__ = cljs.core.seq.call(null,seq__221);
if(temp__22186__auto__){
var seq__221__$1 = temp__22186__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__221__$1)){
var c__25653__auto__ = cljs.core.chunk_first.call(null,seq__221__$1);
var G__237 = cljs.core.chunk_rest.call(null,seq__221__$1);
var G__238 = c__25653__auto__;
var G__239 = cljs.core.count.call(null,c__25653__auto__);
var G__240 = (0);
seq__221 = G__237;
chunk__222 = G__238;
count__223 = G__239;
i__224 = G__240;
continue;
} else {
var vec__228 = cljs.core.first.call(null,seq__221__$1);
var effect_k = cljs.core.nth.call(null,vec__228,(0),null);
var value = cljs.core.nth.call(null,vec__228,(1),null);
var temp__21873__auto___241 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__21873__auto___241)){
var effect_fn_242 = temp__21873__auto___241;
effect_fn_242.call(null,value);
} else {
}

var G__243 = cljs.core.next.call(null,seq__221__$1);
var G__244 = null;
var G__245 = (0);
var G__246 = (0);
seq__221 = G__243;
chunk__222 = G__244;
count__223 = G__245;
i__224 = G__246;
continue;
}
} else {
return null;
}
}
break;
}
})); return (
new cljs.core.Var(function(){return re_frame.fx.do_fx;},new cljs.core.Symbol("re-frame.fx","do-fx","re-frame.fx/do-fx",(228771076),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.fx","re-frame.fx",(-1970680630),null),new cljs.core.Symbol(null,"do-fx","do-fx",(-1460272719),null),"re_frame/fx.cljc",(11),(1),(20),(20),cljs.core.List.EMPTY,"An interceptor which actions a `context's` (side) `:effects`.\n\n  For each key in the `:effects` map, call the `effects handler` previously\n  registered using `reg-fx`.\n\n  So, if `:effects` was:\n      {:dispatch  [:hello 42]\n       :db        {...}\n       :undo      \"set flag\"}\n  call the registered effects handlers for each of the map's keys:\n  `:dispatch`, `:undo` and `:db`.",(cljs.core.truth_(re_frame.fx.do_fx)?re_frame.fx.do_fx.cljs$lang$test:null)])));})()
;
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",(291951390)),(function (value){
var seq__247 = cljs.core.seq.call(null,value);
var chunk__248 = null;
var count__249 = (0);
var i__250 = (0);
while(true){
if((i__250 < count__249)){
var map__251 = cljs.core._nth.call(null,chunk__248,i__250);
var map__251__$1 = ((((!((map__251 == null)))?((((map__251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__251.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__251):map__251);
var effect = map__251__$1;
var ms = cljs.core.get.call(null,map__251__$1,new cljs.core.Keyword(null,"ms","ms",(-1152709733)));
var dispatch = cljs.core.get.call(null,map__251__$1,new cljs.core.Keyword(null,"dispatch","dispatch",(1319337009)));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__247,chunk__248,count__249,i__250,map__251,map__251__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__247,chunk__248,count__249,i__250,map__251,map__251__$1,effect,ms,dispatch))
,ms);
}

var G__255 = seq__247;
var G__256 = chunk__248;
var G__257 = count__249;
var G__258 = (i__250 + (1));
seq__247 = G__255;
chunk__248 = G__256;
count__249 = G__257;
i__250 = G__258;
continue;
} else {
var temp__22186__auto__ = cljs.core.seq.call(null,seq__247);
if(temp__22186__auto__){
var seq__247__$1 = temp__22186__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__247__$1)){
var c__25653__auto__ = cljs.core.chunk_first.call(null,seq__247__$1);
var G__259 = cljs.core.chunk_rest.call(null,seq__247__$1);
var G__260 = c__25653__auto__;
var G__261 = cljs.core.count.call(null,c__25653__auto__);
var G__262 = (0);
seq__247 = G__259;
chunk__248 = G__260;
count__249 = G__261;
i__250 = G__262;
continue;
} else {
var map__253 = cljs.core.first.call(null,seq__247__$1);
var map__253__$1 = ((((!((map__253 == null)))?((((map__253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__253.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__253):map__253);
var effect = map__253__$1;
var ms = cljs.core.get.call(null,map__253__$1,new cljs.core.Keyword(null,"ms","ms",(-1152709733)));
var dispatch = cljs.core.get.call(null,map__253__$1,new cljs.core.Keyword(null,"dispatch","dispatch",(1319337009)));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__247,chunk__248,count__249,i__250,map__253,map__253__$1,effect,ms,dispatch,seq__247__$1,temp__22186__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__247,chunk__248,count__249,i__250,map__253,map__253__$1,effect,ms,dispatch,seq__247__$1,temp__22186__auto__))
,ms);
}

var G__263 = cljs.core.next.call(null,seq__247__$1);
var G__264 = null;
var G__265 = (0);
var G__266 = (0);
seq__247 = G__263;
chunk__248 = G__264;
count__249 = G__265;
i__250 = G__266;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",(1319337009)),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",(-504469236)),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__267 = cljs.core.seq.call(null,value);
var chunk__268 = null;
var count__269 = (0);
var i__270 = (0);
while(true){
if((i__270 < count__269)){
var event = cljs.core._nth.call(null,chunk__268,i__270);
re_frame.router.dispatch.call(null,event);

var G__271 = seq__267;
var G__272 = chunk__268;
var G__273 = count__269;
var G__274 = (i__270 + (1));
seq__267 = G__271;
chunk__268 = G__272;
count__269 = G__273;
i__270 = G__274;
continue;
} else {
var temp__22186__auto__ = cljs.core.seq.call(null,seq__267);
if(temp__22186__auto__){
var seq__267__$1 = temp__22186__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__267__$1)){
var c__25653__auto__ = cljs.core.chunk_first.call(null,seq__267__$1);
var G__275 = cljs.core.chunk_rest.call(null,seq__267__$1);
var G__276 = c__25653__auto__;
var G__277 = cljs.core.count.call(null,c__25653__auto__);
var G__278 = (0);
seq__267 = G__275;
chunk__268 = G__276;
count__269 = G__277;
i__270 = G__278;
continue;
} else {
var event = cljs.core.first.call(null,seq__267__$1);
re_frame.router.dispatch.call(null,event);

var G__279 = cljs.core.next.call(null,seq__267__$1);
var G__280 = null;
var G__281 = (0);
var G__282 = (0);
seq__267 = G__279;
chunk__268 = G__280;
count__269 = G__281;
i__270 = G__282;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",(-1096518994)),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__283 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__284 = null;
var count__285 = (0);
var i__286 = (0);
while(true){
if((i__286 < count__285)){
var event = cljs.core._nth.call(null,chunk__284,i__286);
clear_event.call(null,event);

var G__287 = seq__283;
var G__288 = chunk__284;
var G__289 = count__285;
var G__290 = (i__286 + (1));
seq__283 = G__287;
chunk__284 = G__288;
count__285 = G__289;
i__286 = G__290;
continue;
} else {
var temp__22186__auto__ = cljs.core.seq.call(null,seq__283);
if(temp__22186__auto__){
var seq__283__$1 = temp__22186__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__283__$1)){
var c__25653__auto__ = cljs.core.chunk_first.call(null,seq__283__$1);
var G__291 = cljs.core.chunk_rest.call(null,seq__283__$1);
var G__292 = c__25653__auto__;
var G__293 = cljs.core.count.call(null,c__25653__auto__);
var G__294 = (0);
seq__283 = G__291;
chunk__284 = G__292;
count__285 = G__293;
i__286 = G__294;
continue;
} else {
var event = cljs.core.first.call(null,seq__283__$1);
clear_event.call(null,event);

var G__295 = cljs.core.next.call(null,seq__283__$1);
var G__296 = null;
var G__297 = (0);
var G__298 = (0);
seq__283 = G__295;
chunk__284 = G__296;
count__285 = G__297;
i__286 = G__298;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",(993250759)),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));
