goog.provide("day8.re_frame.http_fx");
/**
 * ajax-request only provides a single handler for success and errors
 */
(function (){
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__396){
var vec__400 = p__396;
var success_QMARK_ = cljs.core.nth.call(null,vec__400,(0),null);
var response = cljs.core.nth.call(null,vec__400,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return on_success.call(null,response);
} else {
var details = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",(-774711847)),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",(-563909920)),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",(1848699973)),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",(276598110)),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",(-502855302)),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response);
return on_failure.call(null,details);
}
}); return (
new cljs.core.Var(function(){return day8.re_frame.http_fx.ajax_xhrio_handler;},new cljs.core.Symbol("day8.re-frame.http-fx","ajax-xhrio-handler","day8.re-frame.http-fx/ajax-xhrio-handler",(-1651936414),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"day8.re-frame.http-fx","day8.re-frame.http-fx",(-581891074),null),new cljs.core.Symbol(null,"ajax-xhrio-handler","ajax-xhrio-handler",(-147323572),null),"day8/re_frame/http_fx.cljs",(25),(1),(23),(23),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-success","on-success",(-867531660),null),new cljs.core.Symbol(null,"on-failure","on-failure",(-1811547524),null),new cljs.core.Symbol(null,"xhrio","xhrio",(1025390989),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"success?","success?",(1517677475),null),new cljs.core.Symbol(null,"response","response",(572107335),null)], null)], null)),"ajax-request only provides a single handler for success and errors",(cljs.core.truth_(day8.re_frame.http_fx.ajax_xhrio_handler)?day8.re_frame.http_fx.ajax_xhrio_handler.cljs$lang$test:null)])));})()
;
(function (){
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__403){
var map__406 = p__403;
var map__406__$1 = ((((!((map__406 == null)))?((((map__406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__406):map__406);
var request = map__406__$1;
var on_success = cljs.core.get.call(null,map__406__$1,new cljs.core.Keyword(null,"on-success","on-success",(1786904109)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",(-1593227158))], null));
var on_failure = cljs.core.get.call(null,map__406__$1,new cljs.core.Keyword(null,"on-failure","on-failure",(842888245)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",(962976084))], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"api","api",(-899839580)),api,new cljs.core.Keyword(null,"handler","handler",(-195596612)),cljs.core.partial.call(null,day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__406,map__406__$1,request,on_success,on_failure){
return (function (p1__7_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,p1__7_SHARP_));
});})(api,map__406,map__406__$1,request,on_success,on_failure))
,((function (api,map__406,map__406__$1,request,on_success,on_failure){
return (function (p1__8_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_failure,p1__8_SHARP_));
});})(api,map__406,map__406__$1,request,on_success,on_failure))
,api)),new cljs.core.Keyword(null,"on-success","on-success",(1786904109)),new cljs.core.Keyword(null,"on-failure","on-failure",(842888245)));
}); return (
new cljs.core.Var(function(){return day8.re_frame.http_fx.request__GT_xhrio_options;},new cljs.core.Symbol("day8.re-frame.http-fx","request->xhrio-options","day8.re-frame.http-fx/request->xhrio-options",(343032011),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"day8.re-frame.http-fx","day8.re-frame.http-fx",(-581891074),null),new cljs.core.Symbol(null,"request->xhrio-options","request->xhrio-options",(-809305831),null),"day8/re_frame/http_fx.cljs",(29),(1),(39),(39),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-success","on-success",(-867531660),null),new cljs.core.Symbol(null,"on-failure","on-failure",(-1811547524),null)], null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"on-success","on-success",(-867531660),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",(-1593227158))], null),new cljs.core.Symbol(null,"on-failure","on-failure",(-1811547524),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",(962976084))], null)], null)], null)], null)),null,(cljs.core.truth_(day8.re_frame.http_fx.request__GT_xhrio_options)?day8.re_frame.http_fx.request__GT_xhrio_options.cljs$lang$test:null)])));})()
;
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",(1846166714)),(function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_.call(null,request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__412 = cljs.core.seq.call(null,seq_request_maps);
var chunk__413 = null;
var count__414 = (0);
var i__415 = (0);
while(true){
if((i__415 < count__414)){
var request__$1 = cljs.core._nth.call(null,chunk__413,i__415);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));

var G__416 = seq__412;
var G__417 = chunk__413;
var G__418 = count__414;
var G__419 = (i__415 + (1));
seq__412 = G__416;
chunk__413 = G__417;
count__414 = G__418;
i__415 = G__419;
continue;
} else {
var temp__22562__auto__ = cljs.core.seq.call(null,seq__412);
if(temp__22562__auto__){
var seq__412__$1 = temp__22562__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__412__$1)){
var c__24659__auto__ = cljs.core.chunk_first.call(null,seq__412__$1);
var G__420 = cljs.core.chunk_rest.call(null,seq__412__$1);
var G__421 = c__24659__auto__;
var G__422 = cljs.core.count.call(null,c__24659__auto__);
var G__423 = (0);
seq__412 = G__420;
chunk__413 = G__421;
count__414 = G__422;
i__415 = G__423;
continue;
} else {
var request__$1 = cljs.core.first.call(null,seq__412__$1);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));

var G__424 = cljs.core.next.call(null,seq__412__$1);
var G__425 = null;
var G__426 = (0);
var G__427 = (0);
seq__412 = G__424;
chunk__413 = G__425;
count__414 = G__426;
i__415 = G__427;
continue;
}
} else {
return null;
}
}
break;
}
}));
