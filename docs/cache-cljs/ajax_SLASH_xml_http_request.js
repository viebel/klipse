goog.provide("ajax.xml_http_request");
(function (){
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",(-1937378906)),(1),new cljs.core.Keyword(null,"connection-established","connection-established",(-1403749733)),(2),new cljs.core.Keyword(null,"request-received","request-received",(2110590540)),(3),new cljs.core.Keyword(null,"processing-request","processing-request",(-264947221)),(4),new cljs.core.Keyword(null,"response-ready","response-ready",(245208276))], null).call(null,e.target.readyState);
}); return (
new cljs.core.Var(function(){return ajax.xml_http_request.ready_state;},new cljs.core.Symbol("ajax.xml-http-request","ready-state","ajax.xml-http-request/ready-state",(1158762452),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.xml-http-request","ajax.xml-http-request",(1620784037),null),new cljs.core.Symbol(null,"ready-state","ready-state",(1700089098),null),"ajax/xml_http_request.cljs",(18),(1),(5),(5),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",(-1273166571),null)], null)),null,(cljs.core.truth_(ajax.xml_http_request.ready_state)?ajax.xml_http_request.ready_state.cljs$lang$test:null)])));})()
;
(function (){
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("@pupeno/xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest); return (
new cljs.core.Var(function(){return ajax.xml_http_request.xmlhttprequest;},new cljs.core.Symbol("ajax.xml-http-request","xmlhttprequest","ajax.xml-http-request/xmlhttprequest",(1690343557),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.xml-http-request","ajax.xml-http-request",(1620784037),null),new cljs.core.Symbol(null,"xmlhttprequest","xmlhttprequest",(67933747),null),"ajax/xml_http_request.cljs",(20),(1),(12),(12),cljs.core.List.EMPTY,null,(cljs.core.truth_(ajax.xml_http_request.xmlhttprequest)?ajax.xml_http_request.xmlhttprequest.cljs$lang$test:null)])));})()
;
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__39,handler){
var map__40 = p__39;
var map__40__$1 = ((((!((map__40 == null)))?((((map__40.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40):map__40);
var uri = cljs.core.get.call(null,map__40__$1,new cljs.core.Keyword(null,"uri","uri",(-774711847)));
var method = cljs.core.get.call(null,map__40__$1,new cljs.core.Keyword(null,"method","method",(55703592)));
var body = cljs.core.get.call(null,map__40__$1,new cljs.core.Keyword(null,"body","body",(-2049205669)));
var headers = cljs.core.get.call(null,map__40__$1,new cljs.core.Keyword(null,"headers","headers",(-835030129)));
var timeout = cljs.core.get.call(null,map__40__$1,new cljs.core.Keyword(null,"timeout","timeout",(-318625318)),(0));
var with_credentials = cljs.core.get.call(null,map__40__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",(-1163127235)),false);
var response_format = cljs.core.get.call(null,map__40__$1,new cljs.core.Keyword(null,"response-format","response-format",(1664465322)));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__40,map__40__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__2_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",(245208276)),ajax.xml_http_request.ready_state.call(null,p1__2_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__40,map__40__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__22562__auto___52 = new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__22562__auto___52)){
var response_type_53 = temp__22562__auto___52;
this$__$1.responseType = cljs.core.name.call(null,response_type_53);
} else {
}

var seq__42_54 = cljs.core.seq.call(null,headers);
var chunk__43_55 = null;
var count__44_56 = (0);
var i__45_57 = (0);
while(true){
if((i__45_57 < count__44_56)){
var vec__46_58 = cljs.core._nth.call(null,chunk__43_55,i__45_57);
var k_59 = cljs.core.nth.call(null,vec__46_58,(0),null);
var v_60 = cljs.core.nth.call(null,vec__46_58,(1),null);
this$__$1.setRequestHeader(k_59,v_60);

var G__61 = seq__42_54;
var G__62 = chunk__43_55;
var G__63 = count__44_56;
var G__64 = (i__45_57 + (1));
seq__42_54 = G__61;
chunk__43_55 = G__62;
count__44_56 = G__63;
i__45_57 = G__64;
continue;
} else {
var temp__22562__auto___65 = cljs.core.seq.call(null,seq__42_54);
if(temp__22562__auto___65){
var seq__42_66__$1 = temp__22562__auto___65;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42_66__$1)){
var c__24659__auto___67 = cljs.core.chunk_first.call(null,seq__42_66__$1);
var G__68 = cljs.core.chunk_rest.call(null,seq__42_66__$1);
var G__69 = c__24659__auto___67;
var G__70 = cljs.core.count.call(null,c__24659__auto___67);
var G__71 = (0);
seq__42_54 = G__68;
chunk__43_55 = G__69;
count__44_56 = G__70;
i__45_57 = G__71;
continue;
} else {
var vec__49_72 = cljs.core.first.call(null,seq__42_66__$1);
var k_73 = cljs.core.nth.call(null,vec__49_72,(0),null);
var v_74 = cljs.core.nth.call(null,vec__49_72,(1),null);
this$__$1.setRequestHeader(k_73,v_74);

var G__75 = cljs.core.next.call(null,seq__42_66__$1);
var G__76 = null;
var G__77 = (0);
var G__78 = (0);
seq__42_54 = G__75;
chunk__43_55 = G__76;
count__44_56 = G__77;
i__45_57 = G__78;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__23200__auto__ = body;
if(cljs.core.truth_(or__23200__auto__)){
return or__23200__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});
