// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__8351__auto__ = v;
if(cljs.core.truth_(and__8351__auto__)){
return (v > (0));
} else {
return and__8351__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__25170_SHARP_,p2__25169_SHARP_){
var vec__25171 = clojure.string.split.call(null,p2__25169_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__25171,(0),null);
var v = cljs.core.nth.call(null,vec__25171,(1),null);
return cljs.core.assoc.call(null,p1__25170_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__25174_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__25174_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__25175){
var vec__25176 = p__25175;
var k = cljs.core.nth.call(null,vec__25176,(0),null);
var v = cljs.core.nth.call(null,vec__25176,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__25179_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25179_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__8351__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__8351__auto__){
var and__8351__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__8351__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__8351__auto____$1;
}
} else {
return and__8351__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__6751__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__6751__auto__)){
var params = temp__6751__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__25180_SHARP_){
return cljs_http.client.decode_body.call(null,p1__25180_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__9647__auto__ = [];
var len__9640__auto___25187 = arguments.length;
var i__9641__auto___25188 = (0);
while(true){
if((i__9641__auto___25188 < len__9640__auto___25187)){
args__9647__auto__.push((arguments[i__9641__auto___25188]));

var G__25189 = (i__9641__auto___25188 + (1));
i__9641__auto___25188 = G__25189;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((1) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9648__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__25183){
var vec__25184 = p__25183;
var default_headers = cljs.core.nth.call(null,vec__25184,(0),null);
return ((function (vec__25184,default_headers){
return (function (request){
var temp__6751__auto__ = (function (){var or__8363__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__6751__auto__)){
var default_headers__$1 = temp__6751__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__25184,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq25181){
var G__25182 = cljs.core.first.call(null,seq25181);
var seq25181__$1 = cljs.core.next.call(null,seq25181);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__25182,seq25181__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__9647__auto__ = [];
var len__9640__auto___25196 = arguments.length;
var i__9641__auto___25197 = (0);
while(true){
if((i__9641__auto___25197 < len__9640__auto___25196)){
args__9647__auto__.push((arguments[i__9641__auto___25197]));

var G__25198 = (i__9641__auto___25197 + (1));
i__9641__auto___25197 = G__25198;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((1) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9648__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__25192){
var vec__25193 = p__25192;
var accept = cljs.core.nth.call(null,vec__25193,(0),null);
return ((function (vec__25193,accept){
return (function (request){
var temp__6751__auto__ = (function (){var or__8363__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__6751__auto__)){
var accept__$1 = temp__6751__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__25193,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq25190){
var G__25191 = cljs.core.first.call(null,seq25190);
var seq25190__$1 = cljs.core.next.call(null,seq25190);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__25191,seq25190__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__9647__auto__ = [];
var len__9640__auto___25205 = arguments.length;
var i__9641__auto___25206 = (0);
while(true){
if((i__9641__auto___25206 < len__9640__auto___25205)){
args__9647__auto__.push((arguments[i__9641__auto___25206]));

var G__25207 = (i__9641__auto___25206 + (1));
i__9641__auto___25206 = G__25207;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((1) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9648__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__25201){
var vec__25202 = p__25201;
var content_type = cljs.core.nth.call(null,vec__25202,(0),null);
return ((function (vec__25202,content_type){
return (function (request){
var temp__6751__auto__ = (function (){var or__8363__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__6751__auto__)){
var content_type__$1 = temp__6751__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__25202,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq25199){
var G__25200 = cljs.core.first.call(null,seq25199);
var seq25199__$1 = cljs.core.next.call(null,seq25199);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__25200,seq25199__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__6751__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__6751__auto__)){
var params = temp__6751__auto__;
var map__25208 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__25208__$1 = ((((!((map__25208 == null)))?((((map__25208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25208.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25208):map__25208);
var encoding = cljs.core.get.call(null,map__25208__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__25208__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__25212 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__25212__$1 = ((((!((map__25212 == null)))?((((map__25212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25212.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25212):map__25212);
var decoding = cljs.core.get.call(null,map__25212__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__25212__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__25212,map__25212__$1,decoding,decoding_opts){
return (function (p1__25210_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__25210_SHARP_,decoding,decoding_opts);
});})(map__25212,map__25212__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__25212,map__25212__$1,decoding,decoding_opts,transit_decode){
return (function (p1__25211_SHARP_){
return cljs_http.client.decode_body.call(null,p1__25211_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__25212,map__25212__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__6751__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__6751__auto__)){
var params = temp__6751__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__25214_SHARP_){
return cljs_http.client.decode_body.call(null,p1__25214_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__25215){
var map__25216 = p__25215;
var map__25216__$1 = ((((!((map__25216 == null)))?((((map__25216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25216.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25216):map__25216);
var req = map__25216__$1;
var query_params = cljs.core.get.call(null,map__25216__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__25218){
var map__25219 = p__25218;
var map__25219__$1 = ((((!((map__25219 == null)))?((((map__25219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25219.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25219):map__25219);
var request = map__25219__$1;
var form_params = cljs.core.get.call(null,map__25219__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__25219__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__25219__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__8351__auto__ = form_params;
if(cljs.core.truth_(and__8351__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__8351__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__25221_25231 = cljs.core.seq.call(null,params);
var chunk__25222_25232 = null;
var count__25223_25233 = (0);
var i__25224_25234 = (0);
while(true){
if((i__25224_25234 < count__25223_25233)){
var vec__25225_25235 = cljs.core._nth.call(null,chunk__25222_25232,i__25224_25234);
var k_25236 = cljs.core.nth.call(null,vec__25225_25235,(0),null);
var v_25237 = cljs.core.nth.call(null,vec__25225_25235,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_25237)){
form_data.append(cljs.core.name.call(null,k_25236),cljs.core.first.call(null,v_25237),cljs.core.second.call(null,v_25237));
} else {
form_data.append(cljs.core.name.call(null,k_25236),v_25237);
}

var G__25238 = seq__25221_25231;
var G__25239 = chunk__25222_25232;
var G__25240 = count__25223_25233;
var G__25241 = (i__25224_25234 + (1));
seq__25221_25231 = G__25238;
chunk__25222_25232 = G__25239;
count__25223_25233 = G__25240;
i__25224_25234 = G__25241;
continue;
} else {
var temp__6753__auto___25242 = cljs.core.seq.call(null,seq__25221_25231);
if(temp__6753__auto___25242){
var seq__25221_25243__$1 = temp__6753__auto___25242;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25221_25243__$1)){
var c__9294__auto___25244 = cljs.core.chunk_first.call(null,seq__25221_25243__$1);
var G__25245 = cljs.core.chunk_rest.call(null,seq__25221_25243__$1);
var G__25246 = c__9294__auto___25244;
var G__25247 = cljs.core.count.call(null,c__9294__auto___25244);
var G__25248 = (0);
seq__25221_25231 = G__25245;
chunk__25222_25232 = G__25246;
count__25223_25233 = G__25247;
i__25224_25234 = G__25248;
continue;
} else {
var vec__25228_25249 = cljs.core.first.call(null,seq__25221_25243__$1);
var k_25250 = cljs.core.nth.call(null,vec__25228_25249,(0),null);
var v_25251 = cljs.core.nth.call(null,vec__25228_25249,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_25251)){
form_data.append(cljs.core.name.call(null,k_25250),cljs.core.first.call(null,v_25251),cljs.core.second.call(null,v_25251));
} else {
form_data.append(cljs.core.name.call(null,k_25250),v_25251);
}

var G__25252 = cljs.core.next.call(null,seq__25221_25243__$1);
var G__25253 = null;
var G__25254 = (0);
var G__25255 = (0);
seq__25221_25231 = G__25252;
chunk__25222_25232 = G__25253;
count__25223_25233 = G__25254;
i__25224_25234 = G__25255;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__25256){
var map__25257 = p__25256;
var map__25257__$1 = ((((!((map__25257 == null)))?((((map__25257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25257.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25257):map__25257);
var request = map__25257__$1;
var multipart_params = cljs.core.get.call(null,map__25257__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__25257__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__8351__auto__ = multipart_params;
if(cljs.core.truth_(and__8351__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__8351__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__6751__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__6751__auto__)){
var m = temp__6751__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__25259_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__25259_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__25261){
var map__25262 = p__25261;
var map__25262__$1 = ((((!((map__25262 == null)))?((((map__25262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25262.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25262):map__25262);
var req = map__25262__$1;
var query_params = cljs.core.get.call(null,map__25262__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__6751__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__6751__auto__)){
var spec = temp__6751__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__6751__auto__,map__25262,map__25262__$1,req,query_params){
return (function (p1__25260_SHARP_){
return cljs.core.merge.call(null,p1__25260_SHARP_,query_params);
});})(spec,temp__6751__auto__,map__25262,map__25262__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__9647__auto__ = [];
var len__9640__auto___25270 = arguments.length;
var i__9641__auto___25271 = (0);
while(true){
if((i__9641__auto___25271 < len__9640__auto___25270)){
args__9647__auto__.push((arguments[i__9641__auto___25271]));

var G__25272 = (i__9641__auto___25271 + (1));
i__9641__auto___25271 = G__25272;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((1) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9648__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__25266){
var vec__25267 = p__25266;
var credentials = cljs.core.nth.call(null,vec__25267,(0),null);
return ((function (vec__25267,credentials){
return (function (req){
var credentials__$1 = (function (){var or__8363__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__25267,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq25264){
var G__25265 = cljs.core.first.call(null,seq25264);
var seq25264__$1 = cljs.core.next.call(null,seq25264);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__25265,seq25264__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__6751__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__6751__auto__)){
var oauth_token = temp__6751__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__6751__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__6751__auto__)){
var custom_channel = temp__6751__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__9647__auto__ = [];
var len__9640__auto___25279 = arguments.length;
var i__9641__auto___25280 = (0);
while(true){
if((i__9641__auto___25280 < len__9640__auto___25279)){
args__9647__auto__.push((arguments[i__9641__auto___25280]));

var G__25281 = (i__9641__auto___25280 + (1));
i__9641__auto___25280 = G__25281;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((1) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9648__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25275){
var vec__25276 = p__25275;
var req = cljs.core.nth.call(null,vec__25276,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq25273){
var G__25274 = cljs.core.first.call(null,seq25273);
var seq25273__$1 = cljs.core.next.call(null,seq25273);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__25274,seq25273__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__9647__auto__ = [];
var len__9640__auto___25288 = arguments.length;
var i__9641__auto___25289 = (0);
while(true){
if((i__9641__auto___25289 < len__9640__auto___25288)){
args__9647__auto__.push((arguments[i__9641__auto___25289]));

var G__25290 = (i__9641__auto___25289 + (1));
i__9641__auto___25289 = G__25290;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((1) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9648__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25284){
var vec__25285 = p__25284;
var req = cljs.core.nth.call(null,vec__25285,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq25282){
var G__25283 = cljs.core.first.call(null,seq25282);
var seq25282__$1 = cljs.core.next.call(null,seq25282);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__25283,seq25282__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__9647__auto__ = [];
var len__9640__auto___25297 = arguments.length;
var i__9641__auto___25298 = (0);
while(true){
if((i__9641__auto___25298 < len__9640__auto___25297)){
args__9647__auto__.push((arguments[i__9641__auto___25298]));

var G__25299 = (i__9641__auto___25298 + (1));
i__9641__auto___25298 = G__25299;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((1) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9648__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25293){
var vec__25294 = p__25293;
var req = cljs.core.nth.call(null,vec__25294,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq25291){
var G__25292 = cljs.core.first.call(null,seq25291);
var seq25291__$1 = cljs.core.next.call(null,seq25291);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__25292,seq25291__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__9647__auto__ = [];
var len__9640__auto___25306 = arguments.length;
var i__9641__auto___25307 = (0);
while(true){
if((i__9641__auto___25307 < len__9640__auto___25306)){
args__9647__auto__.push((arguments[i__9641__auto___25307]));

var G__25308 = (i__9641__auto___25307 + (1));
i__9641__auto___25307 = G__25308;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((1) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9648__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25302){
var vec__25303 = p__25302;
var req = cljs.core.nth.call(null,vec__25303,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq25300){
var G__25301 = cljs.core.first.call(null,seq25300);
var seq25300__$1 = cljs.core.next.call(null,seq25300);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__25301,seq25300__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__9647__auto__ = [];
var len__9640__auto___25315 = arguments.length;
var i__9641__auto___25316 = (0);
while(true){
if((i__9641__auto___25316 < len__9640__auto___25315)){
args__9647__auto__.push((arguments[i__9641__auto___25316]));

var G__25317 = (i__9641__auto___25316 + (1));
i__9641__auto___25316 = G__25317;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((1) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9648__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25311){
var vec__25312 = p__25311;
var req = cljs.core.nth.call(null,vec__25312,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq25309){
var G__25310 = cljs.core.first.call(null,seq25309);
var seq25309__$1 = cljs.core.next.call(null,seq25309);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__25310,seq25309__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__9647__auto__ = [];
var len__9640__auto___25324 = arguments.length;
var i__9641__auto___25325 = (0);
while(true){
if((i__9641__auto___25325 < len__9640__auto___25324)){
args__9647__auto__.push((arguments[i__9641__auto___25325]));

var G__25326 = (i__9641__auto___25325 + (1));
i__9641__auto___25325 = G__25326;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((1) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9648__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25320){
var vec__25321 = p__25320;
var req = cljs.core.nth.call(null,vec__25321,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq25318){
var G__25319 = cljs.core.first.call(null,seq25318);
var seq25318__$1 = cljs.core.next.call(null,seq25318);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__25319,seq25318__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__9647__auto__ = [];
var len__9640__auto___25333 = arguments.length;
var i__9641__auto___25334 = (0);
while(true){
if((i__9641__auto___25334 < len__9640__auto___25333)){
args__9647__auto__.push((arguments[i__9641__auto___25334]));

var G__25335 = (i__9641__auto___25334 + (1));
i__9641__auto___25334 = G__25335;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((1) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9648__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25329){
var vec__25330 = p__25329;
var req = cljs.core.nth.call(null,vec__25330,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq25327){
var G__25328 = cljs.core.first.call(null,seq25327);
var seq25327__$1 = cljs.core.next.call(null,seq25327);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__25328,seq25327__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__9647__auto__ = [];
var len__9640__auto___25342 = arguments.length;
var i__9641__auto___25343 = (0);
while(true){
if((i__9641__auto___25343 < len__9640__auto___25342)){
args__9647__auto__.push((arguments[i__9641__auto___25343]));

var G__25344 = (i__9641__auto___25343 + (1));
i__9641__auto___25343 = G__25344;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((1) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9648__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25338){
var vec__25339 = p__25338;
var req = cljs.core.nth.call(null,vec__25339,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq25336){
var G__25337 = cljs.core.first.call(null,seq25336);
var seq25336__$1 = cljs.core.next.call(null,seq25336);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__25337,seq25336__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__9647__auto__ = [];
var len__9640__auto___25351 = arguments.length;
var i__9641__auto___25352 = (0);
while(true){
if((i__9641__auto___25352 < len__9640__auto___25351)){
args__9647__auto__.push((arguments[i__9641__auto___25352]));

var G__25353 = (i__9641__auto___25352 + (1));
i__9641__auto___25352 = G__25353;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((1) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9648__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25347){
var vec__25348 = p__25347;
var req = cljs.core.nth.call(null,vec__25348,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq25345){
var G__25346 = cljs.core.first.call(null,seq25345);
var seq25345__$1 = cljs.core.next.call(null,seq25345);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__25346,seq25345__$1);
});


//# sourceMappingURL=client.js.map
