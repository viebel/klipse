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
var seq__660 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",(-282369292)).cljs$core$IFn$_invoke$arity$1(context));
var chunk__661 = null;
var count__662 = (0);
var i__663 = (0);
while(true){
if((i__663 < count__662)){
var vec__664 = cljs.core._nth.call(null,chunk__661,i__663);
var effect_k = cljs.core.nth.call(null,vec__664,(0),null);
var value = cljs.core.nth.call(null,vec__664,(1),null);
var temp__21873__auto___670 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__21873__auto___670)){
var effect_fn_671 = temp__21873__auto___670;
effect_fn_671.call(null,value);
} else {
}

var G__672 = seq__660;
var G__673 = chunk__661;
var G__674 = count__662;
var G__675 = (i__663 + (1));
seq__660 = G__672;
chunk__661 = G__673;
count__662 = G__674;
i__663 = G__675;
continue;
} else {
var temp__22186__auto__ = cljs.core.seq.call(null,seq__660);
if(temp__22186__auto__){
var seq__660__$1 = temp__22186__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__660__$1)){
var c__25653__auto__ = cljs.core.chunk_first.call(null,seq__660__$1);
var G__676 = cljs.core.chunk_rest.call(null,seq__660__$1);
var G__677 = c__25653__auto__;
var G__678 = cljs.core.count.call(null,c__25653__auto__);
var G__679 = (0);
seq__660 = G__676;
chunk__661 = G__677;
count__662 = G__678;
i__663 = G__679;
continue;
} else {
var vec__667 = cljs.core.first.call(null,seq__660__$1);
var effect_k = cljs.core.nth.call(null,vec__667,(0),null);
var value = cljs.core.nth.call(null,vec__667,(1),null);
var temp__21873__auto___680 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__21873__auto___680)){
var effect_fn_681 = temp__21873__auto___680;
effect_fn_681.call(null,value);
} else {
}

var G__682 = cljs.core.next.call(null,seq__660__$1);
var G__683 = null;
var G__684 = (0);
var G__685 = (0);
seq__660 = G__682;
chunk__661 = G__683;
count__662 = G__684;
i__663 = G__685;
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
var seq__686 = cljs.core.seq.call(null,value);
var chunk__687 = null;
var count__688 = (0);
var i__689 = (0);
while(true){
if((i__689 < count__688)){
var map__690 = cljs.core._nth.call(null,chunk__687,i__689);
var map__690__$1 = ((((!((map__690 == null)))?((((map__690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__690.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__690):map__690);
var effect = map__690__$1;
var ms = cljs.core.get.call(null,map__690__$1,new cljs.core.Keyword(null,"ms","ms",(-1152709733)));
var dispatch = cljs.core.get.call(null,map__690__$1,new cljs.core.Keyword(null,"dispatch","dispatch",(1319337009)));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__686,chunk__687,count__688,i__689,map__690,map__690__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__686,chunk__687,count__688,i__689,map__690,map__690__$1,effect,ms,dispatch))
,ms);
}

var G__694 = seq__686;
var G__695 = chunk__687;
var G__696 = count__688;
var G__697 = (i__689 + (1));
seq__686 = G__694;
chunk__687 = G__695;
count__688 = G__696;
i__689 = G__697;
continue;
} else {
var temp__22186__auto__ = cljs.core.seq.call(null,seq__686);
if(temp__22186__auto__){
var seq__686__$1 = temp__22186__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__686__$1)){
var c__25653__auto__ = cljs.core.chunk_first.call(null,seq__686__$1);
var G__698 = cljs.core.chunk_rest.call(null,seq__686__$1);
var G__699 = c__25653__auto__;
var G__700 = cljs.core.count.call(null,c__25653__auto__);
var G__701 = (0);
seq__686 = G__698;
chunk__687 = G__699;
count__688 = G__700;
i__689 = G__701;
continue;
} else {
var map__692 = cljs.core.first.call(null,seq__686__$1);
var map__692__$1 = ((((!((map__692 == null)))?((((map__692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__692.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__692):map__692);
var effect = map__692__$1;
var ms = cljs.core.get.call(null,map__692__$1,new cljs.core.Keyword(null,"ms","ms",(-1152709733)));
var dispatch = cljs.core.get.call(null,map__692__$1,new cljs.core.Keyword(null,"dispatch","dispatch",(1319337009)));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__686,chunk__687,count__688,i__689,map__692,map__692__$1,effect,ms,dispatch,seq__686__$1,temp__22186__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__686,chunk__687,count__688,i__689,map__692,map__692__$1,effect,ms,dispatch,seq__686__$1,temp__22186__auto__))
,ms);
}

var G__702 = cljs.core.next.call(null,seq__686__$1);
var G__703 = null;
var G__704 = (0);
var G__705 = (0);
seq__686 = G__702;
chunk__687 = G__703;
count__688 = G__704;
i__689 = G__705;
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

var seq__706 = cljs.core.seq.call(null,value);
var chunk__707 = null;
var count__708 = (0);
var i__709 = (0);
while(true){
if((i__709 < count__708)){
var event = cljs.core._nth.call(null,chunk__707,i__709);
re_frame.router.dispatch.call(null,event);

var G__710 = seq__706;
var G__711 = chunk__707;
var G__712 = count__708;
var G__713 = (i__709 + (1));
seq__706 = G__710;
chunk__707 = G__711;
count__708 = G__712;
i__709 = G__713;
continue;
} else {
var temp__22186__auto__ = cljs.core.seq.call(null,seq__706);
if(temp__22186__auto__){
var seq__706__$1 = temp__22186__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__706__$1)){
var c__25653__auto__ = cljs.core.chunk_first.call(null,seq__706__$1);
var G__714 = cljs.core.chunk_rest.call(null,seq__706__$1);
var G__715 = c__25653__auto__;
var G__716 = cljs.core.count.call(null,c__25653__auto__);
var G__717 = (0);
seq__706 = G__714;
chunk__707 = G__715;
count__708 = G__716;
i__709 = G__717;
continue;
} else {
var event = cljs.core.first.call(null,seq__706__$1);
re_frame.router.dispatch.call(null,event);

var G__718 = cljs.core.next.call(null,seq__706__$1);
var G__719 = null;
var G__720 = (0);
var G__721 = (0);
seq__706 = G__718;
chunk__707 = G__719;
count__708 = G__720;
i__709 = G__721;
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
var seq__722 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__723 = null;
var count__724 = (0);
var i__725 = (0);
while(true){
if((i__725 < count__724)){
var event = cljs.core._nth.call(null,chunk__723,i__725);
clear_event.call(null,event);

var G__726 = seq__722;
var G__727 = chunk__723;
var G__728 = count__724;
var G__729 = (i__725 + (1));
seq__722 = G__726;
chunk__723 = G__727;
count__724 = G__728;
i__725 = G__729;
continue;
} else {
var temp__22186__auto__ = cljs.core.seq.call(null,seq__722);
if(temp__22186__auto__){
var seq__722__$1 = temp__22186__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__722__$1)){
var c__25653__auto__ = cljs.core.chunk_first.call(null,seq__722__$1);
var G__730 = cljs.core.chunk_rest.call(null,seq__722__$1);
var G__731 = c__25653__auto__;
var G__732 = cljs.core.count.call(null,c__25653__auto__);
var G__733 = (0);
seq__722 = G__730;
chunk__723 = G__731;
count__724 = G__732;
i__725 = G__733;
continue;
} else {
var event = cljs.core.first.call(null,seq__722__$1);
clear_event.call(null,event);

var G__734 = cljs.core.next.call(null,seq__722__$1);
var G__735 = null;
var G__736 = (0);
var G__737 = (0);
seq__722 = G__734;
chunk__723 = G__735;
count__724 = G__736;
i__725 = G__737;
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
