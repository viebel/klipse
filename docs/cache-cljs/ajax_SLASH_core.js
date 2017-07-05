goog.provide("ajax.core");
(function (){
ajax.core.process_response = (function ajax$core$process_response(response,interceptor){

return ajax.protocols._process_response.call(null,interceptor,response);
}); return (
new cljs.core.Var(function(){return ajax.core.process_response;},new cljs.core.Symbol("ajax.core","process-response","ajax.core/process-response",(1557306959),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"process-response","process-response",(1614222844),null),"ajax/core.cljc",(23),(1),(35),(35),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"response","response",(572107335),null),new cljs.core.Symbol(null,"interceptor","interceptor",(-1526696693),null)], null)),null,(cljs.core.truth_(ajax.core.process_response)?ajax.core.process_response.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.process_request = (function ajax$core$process_request(request,interceptor){

return ajax.protocols._process_request.call(null,interceptor,request);
}); return (
new cljs.core.Var(function(){return ajax.core.process_request;},new cljs.core.Symbol("ajax.core","process-request","ajax.core/process-request",(-2065044086),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"process-request","process-request",(-2003999961),null),"ajax/core.cljc",(22),(1),(39),(39),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"interceptor","interceptor",(-1526696693),null)], null)),null,(cljs.core.truth_(ajax.core.process_request)?ajax.core.process_request.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24307__auto__,k__24308__auto__){
var self__ = this;
var this__24307__auto____$1 = this;
return this__24307__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__24308__auto__,null);
});

ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24309__auto__,k81,else__24310__auto__){
var self__ = this;
var this__24309__auto____$1 = this;
var G__83 = k81;
var G__83__$1 = (((G__83 instanceof cljs.core.Keyword))?G__83.fqn:null);
switch (G__83__$1) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k81,else__24310__auto__);

}
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__84,opts){
var self__ = this;
var map__85 = p__84;
var map__85__$1 = ((((!((map__85 == null)))?((((map__85.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85):map__85);
var request__$1 = cljs.core.get.call(null,map__85__$1,new cljs.core.Keyword(null,"request","request",(1772954723)));
var map__87 = this;
var map__87__$1 = ((((!((map__87 == null)))?((((map__87.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87):map__87);
var request__$2 = cljs.core.get.call(null,map__87__$1,new cljs.core.Keyword(null,"request","request",(1772954723)));
return request__$2.call(null,opts);
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__89,xhrio){
var self__ = this;
var map__90 = p__89;
var map__90__$1 = ((((!((map__90 == null)))?((((map__90.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90):map__90);
var response__$1 = cljs.core.get.call(null,map__90__$1,new cljs.core.Keyword(null,"response","response",(-1068424192)));
var map__92 = this;
var map__92__$1 = ((((!((map__92 == null)))?((((map__92.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92):map__92);
var response__$2 = cljs.core.get.call(null,map__92__$1,new cljs.core.Keyword(null,"response","response",(-1068424192)));
return response__$2.call(null,xhrio);
});

ajax.core.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24321__auto__,writer__24322__auto__,opts__24323__auto__){
var self__ = this;
var this__24321__auto____$1 = this;
var pr_pair__24324__auto__ = ((function (this__24321__auto____$1){
return (function (keyval__24325__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24322__auto__,cljs.core.pr_writer,""," ","",opts__24323__auto__,keyval__24325__auto__);
});})(this__24321__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24322__auto__,pr_pair__24324__auto__,"#ajax.core.StandardInterceptor{",", ","}",opts__24323__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",(1843675177)),self__.name],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",(1772954723)),self__.request],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",(-1068424192)),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__80){
var self__ = this;
var G__80__$1 = this;
return (new cljs.core.RecordIter((0),G__80__$1,(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"request","request",(1772954723)),new cljs.core.Keyword(null,"response","response",(-1068424192))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24305__auto__){
var self__ = this;
var this__24305__auto____$1 = this;
return self__.__meta;
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24301__auto__){
var self__ = this;
var this__24301__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24311__auto__){
var self__ = this;
var this__24311__auto____$1 = this;
return ((3) + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24302__auto__){
var self__ = this;
var this__24302__auto____$1 = this;
var h__24010__auto__ = self__.__hash;
if(!((h__24010__auto__ == null))){
return h__24010__auto__;
} else {
var h__24010__auto____$1 = cljs.core.hash_imap.call(null,this__24302__auto____$1);
self__.__hash = h__24010__auto____$1;

return h__24010__auto____$1;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24303__auto__,other__24304__auto__){
var self__ = this;
var this__24303__auto____$1 = this;
if(cljs.core.truth_((function (){var and__23164__auto__ = other__24304__auto__;
if(cljs.core.truth_(and__23164__auto__)){
return ((this__24303__auto____$1.constructor === other__24304__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__24303__auto____$1,other__24304__auto__));
} else {
return and__23164__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24316__auto__,k__24317__auto__){
var self__ = this;
var this__24316__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",(1843675177)),null,new cljs.core.Keyword(null,"request","request",(1772954723)),null,new cljs.core.Keyword(null,"response","response",(-1068424192)),null], null), null),k__24317__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24316__auto____$1),self__.__meta),k__24317__auto__);
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24317__auto__)),null));
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24314__auto__,k__24315__auto__,G__80){
var self__ = this;
var this__24314__auto____$1 = this;
var pred__94 = cljs.core.keyword_identical_QMARK_;
var expr__95 = k__24315__auto__;
if(cljs.core.truth_(pred__94.call(null,new cljs.core.Keyword(null,"name","name",(1843675177)),expr__95))){
return (new ajax.core.StandardInterceptor(G__80,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__94.call(null,new cljs.core.Keyword(null,"request","request",(1772954723)),expr__95))){
return (new ajax.core.StandardInterceptor(self__.name,G__80,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__94.call(null,new cljs.core.Keyword(null,"response","response",(-1068424192)),expr__95))){
return (new ajax.core.StandardInterceptor(self__.name,self__.request,G__80,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24315__auto__,G__80),null));
}
}
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24319__auto__){
var self__ = this;
var this__24319__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",(1843675177)),self__.name],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",(1772954723)),self__.request],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",(-1068424192)),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24306__auto__,G__80){
var self__ = this;
var this__24306__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,G__80,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24312__auto__,entry__24313__auto__){
var self__ = this;
var this__24312__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24313__auto__)){
return this__24312__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__24313__auto__,(0)),cljs.core._nth.call(null,entry__24313__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24312__auto____$1,entry__24313__auto__);
}
});

ajax.core.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"response","response",(572107335),null)], null);
});

ajax.core.StandardInterceptor.cljs$lang$type = true;

ajax.core.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__24332__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/StandardInterceptor");
});

ajax.core.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__24332__auto__,writer__24333__auto__){
return cljs.core._write.call(null,writer__24333__auto__,"ajax.core/StandardInterceptor");
});

(function (){
ajax.core.__GT_StandardInterceptor = (function ajax$core$__GT_StandardInterceptor(name,request,response){
return (new ajax.core.StandardInterceptor(name,request,response,null,null,null));
}); return (
new cljs.core.Var(function(){return ajax.core.__GT_StandardInterceptor;},new cljs.core.Symbol("ajax.core","->StandardInterceptor","ajax.core/->StandardInterceptor",(-2138422733),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"->StandardInterceptor","->StandardInterceptor",(2070333854),null),"ajax/core.cljc",(31),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(43),(43),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"response","response",(572107335),null)], null)),null,(cljs.core.truth_(ajax.core.__GT_StandardInterceptor)?ajax.core.__GT_StandardInterceptor.cljs$lang$test:null)])));})()
;

(function (){
ajax.core.map__GT_StandardInterceptor = (function ajax$core$map__GT_StandardInterceptor(G__82){
return (new ajax.core.StandardInterceptor(new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(G__82),new cljs.core.Keyword(null,"request","request",(1772954723)).cljs$core$IFn$_invoke$arity$1(G__82),new cljs.core.Keyword(null,"response","response",(-1068424192)).cljs$core$IFn$_invoke$arity$1(G__82),null,cljs.core.dissoc.call(null,G__82,new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"request","request",(1772954723)),new cljs.core.Keyword(null,"response","response",(-1068424192))),null));
}); return (
new cljs.core.Var(function(){return ajax.core.map__GT_StandardInterceptor;},new cljs.core.Symbol("ajax.core","map->StandardInterceptor","ajax.core/map->StandardInterceptor",(1885350970),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"map->StandardInterceptor","map->StandardInterceptor",(-2075289271),null),"ajax/core.cljc",(31),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(43),(43),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__82","G__82",(269562069),null)], null)),null,(cljs.core.truth_(ajax.core.map__GT_StandardInterceptor)?ajax.core.map__GT_StandardInterceptor.cljs$lang$test:null)])));})()
;

(function (){
ajax.core.to_interceptor = (function ajax$core$to_interceptor(m){
return ajax.core.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",(1772954723)),cljs.core.identity,new cljs.core.Keyword(null,"response","response",(-1068424192)),cljs.core.identity], null),m));
}); return (
new cljs.core.Var(function(){return ajax.core.to_interceptor;},new cljs.core.Symbol("ajax.core","to-interceptor","ajax.core/to-interceptor",(643728016),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"to-interceptor","to-interceptor",(708446535),null),"ajax/core.cljc",(21),(1),(50),(50),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),null,(cljs.core.truth_(ajax.core.to_interceptor)?ajax.core.to_interceptor.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.get_content_type = (function ajax$core$get_content_type(response){
var or__23200__auto__ = ajax.protocols._get_response_header.call(null,response,"Content-Type");
if(cljs.core.truth_(or__23200__auto__)){
return or__23200__auto__;
} else {
return "";
}
}); return (
new cljs.core.Var(function(){return ajax.core.get_content_type;},new cljs.core.Symbol("ajax.core","get-content-type","ajax.core/get-content-type",(-115822782),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"get-content-type","get-content-type",(-486747601),null),"ajax/core.cljc",(23),(1),(55),(55),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"response","response",(572107335),null)], null)),null,(cljs.core.truth_(ajax.core.get_content_type)?ajax.core.get_content_type.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.protocols._abort.call(null,this$);
}); return (
new cljs.core.Var(function(){return ajax.core.abort;},new cljs.core.Symbol("ajax.core","abort","ajax.core/abort",(-1933719678),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"abort","abort",(-2133242571),null),"ajax/core.cljc",(12),(1),(58),(58),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),null,(cljs.core.truth_(ajax.core.abort)?ajax.core.abort.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([status]),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
}); return (
new cljs.core.Var(function(){return ajax.core.success_QMARK_;},new cljs.core.Symbol("ajax.core","success?","ajax.core/success?",(1435598544),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"success?","success?",(1517677475),null),"ajax/core.cljc",(15),(1),(60),(60),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"status","status",(-357266886),null)], null)),null,(cljs.core.truth_(ajax.core.success_QMARK_)?ajax.core.success_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.throw_error = (function ajax$core$throw_error(args){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)].join('')));
}); return (
new cljs.core.Var(function(){return ajax.core.throw_error;},new cljs.core.Symbol("ajax.core","throw-error","ajax.core/throw-error",(2124061105),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"throw-error","throw-error",(1795100418),null),"ajax/core.cljc",(18),(1),(63),(63),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(ajax.core.throw_error)?ajax.core.throw_error.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.exception_message = (function ajax$core$exception_message(e){
return e.message;
}); return (
new cljs.core.Var(function(){return ajax.core.exception_message;},new cljs.core.Symbol("ajax.core","exception-message","ajax.core/exception-message",(1984237427),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"exception-message","exception-message",(179943972),null),"ajax/core.cljc",(34),(11),(70),(70),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",(-1273166571),null)], null)),null,(cljs.core.truth_(ajax.core.exception_message)?ajax.core.exception_message.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__98,xhrio){
var map__101 = p__98;
var map__101__$1 = ((((!((map__101 == null)))?((((map__101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__101):map__101);
var description = cljs.core.get.call(null,map__101__$1,new cljs.core.Keyword(null,"description","description",(-1428560544)));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",(-1997798413)),status,new cljs.core.Keyword(null,"failure","failure",(720415879)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"response","response",(-1068424192)),null], null);
var status_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.core.exception_message.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("  Format should have been "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",(-1834235478)),status_text,new cljs.core.Keyword(null,"failure","failure",(720415879)),new cljs.core.Keyword(null,"parse","parse",(-1162164619)),new cljs.core.Keyword(null,"original-text","original-text",(744448452)),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",(-1834235478)),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",(255902478)),parse_error);
}
}); return (
new cljs.core.Var(function(){return ajax.core.exception_response;},new cljs.core.Symbol("ajax.core","exception-response","ajax.core/exception-response",(-1615237981),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"exception-response","exception-response",(-2083194354),null),"ajax/core.cljc",(25),(1),(72),(72),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",(-1273166571),null),new cljs.core.Symbol(null,"status","status",(-357266886),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"description","description",(211970983),null)], null)], null),new cljs.core.Symbol(null,"xhrio","xhrio",(1025390989),null)], null)),null,(cljs.core.truth_(ajax.core.exception_response)?ajax.core.exception_response.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.fail = (function ajax$core$fail(var_args){
var args__24990__auto__ = [];
var len__24987__auto___107 = arguments.length;
var i__24988__auto___108 = (0);
while(true){
if((i__24988__auto___108 < len__24987__auto___107)){
args__24990__auto__.push((arguments[i__24988__auto___108]));

var G__109 = (i__24988__auto___108 + (1));
i__24988__auto___108 = G__109;
continue;
} else {
}
break;
}

var argseq__24991__auto__ = ((((3) < args__24990__auto__.length))?(new cljs.core.IndexedSeq(args__24990__auto__.slice((3)),(0),null)):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__24991__auto__);
}); return (
new cljs.core.Var(function(){return ajax.core.fail;},new cljs.core.Symbol("ajax.core","fail","ajax.core/fail",(-595081466),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"fail","fail",(-948220839),null),"ajax/core.cljc",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"status","status",(-357266886),null),new cljs.core.Symbol(null,"status-text","status-text",(-193703951),null),new cljs.core.Symbol(null,"failure","failure",(-1934019890),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"status","status",(-357266886),null),new cljs.core.Symbol(null,"status-text","status-text",(-193703951),null),new cljs.core.Symbol(null,"failure","failure",(-1934019890),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(89),(89),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"status","status",(-357266886),null),new cljs.core.Symbol(null,"status-text","status-text",(-193703951),null),new cljs.core.Symbol(null,"failure","failure",(-1934019890),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),null,(cljs.core.truth_(ajax.core.fail)?ajax.core.fail.cljs$lang$test:null)])));})()
;

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",(-1997798413)),status,new cljs.core.Keyword(null,"status-text","status-text",(-1834235478)),status_text,new cljs.core.Keyword(null,"failure","failure",(720415879)),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq103){
var G__104 = cljs.core.first.call(null,seq103);
var seq103__$1 = cljs.core.next.call(null,seq103);
var G__105 = cljs.core.first.call(null,seq103__$1);
var seq103__$2 = cljs.core.next.call(null,seq103__$1);
var G__106 = cljs.core.first.call(null,seq103__$2);
var seq103__$3 = cljs.core.next.call(null,seq103__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__104,G__105,G__106,seq103__$3);
});

new cljs.core.Var(function(){return ajax.core.fail;},new cljs.core.Symbol("ajax.core","fail","ajax.core/fail",(-595081466),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"fail","fail",(-948220839),null),"ajax/core.cljc",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"status","status",(-357266886),null),new cljs.core.Symbol(null,"status-text","status-text",(-193703951),null),new cljs.core.Symbol(null,"failure","failure",(-1934019890),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"status","status",(-357266886),null),new cljs.core.Symbol(null,"status-text","status-text",(-193703951),null),new cljs.core.Symbol(null,"failure","failure",(-1934019890),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(89),(89),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"status","status",(-357266886),null),new cljs.core.Symbol(null,"status-text","status-text",(-193703951),null),new cljs.core.Symbol(null,"failure","failure",(-1934019890),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),null,(cljs.core.truth_(ajax.core.fail)?ajax.core.fail.cljs$lang$test:null)]));
(function (){
ajax.core.content_type_to_request_header = (function ajax$core$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
}); return (
new cljs.core.Var(function(){return ajax.core.content_type_to_request_header;},new cljs.core.Symbol("ajax.core","content-type-to-request-header","ajax.core/content-type-to-request-header",(-483247238),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"content-type-to-request-header","content-type-to-request-header",(-552679897),null),"ajax/core.cljc",(37),(1),(97),(97),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null)], null)),null,(cljs.core.truth_(ajax.core.content_type_to_request_header)?ajax.core.content_type_to_request_header.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24307__auto__,k__24308__auto__){
var self__ = this;
var this__24307__auto____$1 = this;
return this__24307__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__24308__auto__,null);
});

ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24309__auto__,k111,else__24310__auto__){
var self__ = this;
var this__24309__auto____$1 = this;
var G__113 = k111;
var G__113__$1 = (((G__113 instanceof cljs.core.Keyword))?G__113.fqn:null);
switch (G__113__$1) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k111,else__24310__auto__);

}
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__114,request){
var self__ = this;
var map__115 = p__114;
var map__115__$1 = ((((!((map__115 == null)))?((((map__115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__115.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115):map__115);
var content_type__$1 = cljs.core.get.call(null,map__115__$1,new cljs.core.Keyword(null,"content-type","content-type",(-508222634)));
var map__117 = this;
var map__117__$1 = ((((!((map__117 == null)))?((((map__117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117):map__117);
var content_type__$2 = cljs.core.get.call(null,map__117__$1,new cljs.core.Keyword(null,"content-type","content-type",(-508222634)));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",(-835030129)),((function (map__117,map__117__$1,content_type__$2,map__115,map__115__$1,content_type__$1){
return (function (p1__4_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.core.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__23200__auto__ = p1__4_SHARP_;
if(cljs.core.truth_(or__23200__auto__)){
return or__23200__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__117,map__117__$1,content_type__$2,map__115,map__115__$1,content_type__$1))
);
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__119,xhrio){
var self__ = this;
var map__120 = p__119;
var map__120__$1 = ((((!((map__120 == null)))?((((map__120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__120.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120):map__120);
var format = map__120__$1;
var read__$1 = cljs.core.get.call(null,map__120__$1,new cljs.core.Keyword(null,"read","read",(1140058661)));
var map__122 = this;
var map__122__$1 = ((((!((map__122 == null)))?((((map__122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__122):map__122);
var format__$1 = map__122__$1;
var read__$2 = cljs.core.get.call(null,map__122__$1,new cljs.core.Keyword(null,"read","read",(1140058661)));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
var G__125 = status;
switch (G__125) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",(-1397425762)));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",(1775972619)));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",(-318625318)));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"response","response",(-1068424192)),response);
}
}catch (e126){if((e126 instanceof Object)){
var e = e126;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e126;

}
}
}
}catch (e124){if((e124 instanceof Object)){
var e = e124;
var message = e.message;
return ajax.core.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",(-335277064)),new cljs.core.Keyword(null,"exception","exception",(-335277064)),e);
} else {
throw e124;

}
}});

ajax.core.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24321__auto__,writer__24322__auto__,opts__24323__auto__){
var self__ = this;
var this__24321__auto____$1 = this;
var pr_pair__24324__auto__ = ((function (this__24321__auto____$1){
return (function (keyval__24325__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24322__auto__,cljs.core.pr_writer,""," ","",opts__24323__auto__,keyval__24325__auto__);
});})(this__24321__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24322__auto__,pr_pair__24324__auto__,"#ajax.core.ResponseFormat{",", ","}",opts__24323__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",(1140058661)),self__.read],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",(-1428560544)),self__.description],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",(-508222634)),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__110){
var self__ = this;
var G__110__$1 = this;
return (new cljs.core.RecordIter((0),G__110__$1,(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",(1140058661)),new cljs.core.Keyword(null,"description","description",(-1428560544)),new cljs.core.Keyword(null,"content-type","content-type",(-508222634))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.core.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24305__auto__){
var self__ = this;
var this__24305__auto____$1 = this;
return self__.__meta;
});

ajax.core.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24301__auto__){
var self__ = this;
var this__24301__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24311__auto__){
var self__ = this;
var this__24311__auto____$1 = this;
return ((3) + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24302__auto__){
var self__ = this;
var this__24302__auto____$1 = this;
var h__24010__auto__ = self__.__hash;
if(!((h__24010__auto__ == null))){
return h__24010__auto__;
} else {
var h__24010__auto____$1 = cljs.core.hash_imap.call(null,this__24302__auto____$1);
self__.__hash = h__24010__auto____$1;

return h__24010__auto____$1;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24303__auto__,other__24304__auto__){
var self__ = this;
var this__24303__auto____$1 = this;
if(cljs.core.truth_((function (){var and__23164__auto__ = other__24304__auto__;
if(cljs.core.truth_(and__23164__auto__)){
return ((this__24303__auto____$1.constructor === other__24304__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__24303__auto____$1,other__24304__auto__));
} else {
return and__23164__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24316__auto__,k__24317__auto__){
var self__ = this;
var this__24316__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",(1140058661)),null,new cljs.core.Keyword(null,"description","description",(-1428560544)),null,new cljs.core.Keyword(null,"content-type","content-type",(-508222634)),null], null), null),k__24317__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24316__auto____$1),self__.__meta),k__24317__auto__);
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24317__auto__)),null));
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24314__auto__,k__24315__auto__,G__110){
var self__ = this;
var this__24314__auto____$1 = this;
var pred__127 = cljs.core.keyword_identical_QMARK_;
var expr__128 = k__24315__auto__;
if(cljs.core.truth_(pred__127.call(null,new cljs.core.Keyword(null,"read","read",(1140058661)),expr__128))){
return (new ajax.core.ResponseFormat(G__110,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__127.call(null,new cljs.core.Keyword(null,"description","description",(-1428560544)),expr__128))){
return (new ajax.core.ResponseFormat(self__.read,G__110,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__127.call(null,new cljs.core.Keyword(null,"content-type","content-type",(-508222634)),expr__128))){
return (new ajax.core.ResponseFormat(self__.read,self__.description,G__110,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24315__auto__,G__110),null));
}
}
}
});

ajax.core.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24319__auto__){
var self__ = this;
var this__24319__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",(1140058661)),self__.read],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",(-1428560544)),self__.description],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",(-508222634)),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24306__auto__,G__110){
var self__ = this;
var this__24306__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,G__110,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24312__auto__,entry__24313__auto__){
var self__ = this;
var this__24312__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24313__auto__)){
return this__24312__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__24313__auto__,(0)),cljs.core._nth.call(null,entry__24313__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24312__auto____$1,entry__24313__auto__);
}
});

ajax.core.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",(-1514377108),null),new cljs.core.Symbol(null,"description","description",(211970983),null),new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null)], null);
});

ajax.core.ResponseFormat.cljs$lang$type = true;

ajax.core.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__24332__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ResponseFormat");
});

ajax.core.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__24332__auto__,writer__24333__auto__){
return cljs.core._write.call(null,writer__24333__auto__,"ajax.core/ResponseFormat");
});

(function (){
ajax.core.__GT_ResponseFormat = (function ajax$core$__GT_ResponseFormat(read,description,content_type){
return (new ajax.core.ResponseFormat(read,description,content_type,null,null,null));
}); return (
new cljs.core.Var(function(){return ajax.core.__GT_ResponseFormat;},new cljs.core.Symbol("ajax.core","->ResponseFormat","ajax.core/->ResponseFormat",(-1822645759),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"->ResponseFormat","->ResponseFormat",(-1665646666),null),"ajax/core.cljc",(26),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(103),(103),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",(-1514377108),null),new cljs.core.Symbol(null,"description","description",(211970983),null),new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null)], null)),null,(cljs.core.truth_(ajax.core.__GT_ResponseFormat)?ajax.core.__GT_ResponseFormat.cljs$lang$test:null)])));})()
;

(function (){
ajax.core.map__GT_ResponseFormat = (function ajax$core$map__GT_ResponseFormat(G__112){
return (new ajax.core.ResponseFormat(new cljs.core.Keyword(null,"read","read",(1140058661)).cljs$core$IFn$_invoke$arity$1(G__112),new cljs.core.Keyword(null,"description","description",(-1428560544)).cljs$core$IFn$_invoke$arity$1(G__112),new cljs.core.Keyword(null,"content-type","content-type",(-508222634)).cljs$core$IFn$_invoke$arity$1(G__112),null,cljs.core.dissoc.call(null,G__112,new cljs.core.Keyword(null,"read","read",(1140058661)),new cljs.core.Keyword(null,"description","description",(-1428560544)),new cljs.core.Keyword(null,"content-type","content-type",(-508222634))),null));
}); return (
new cljs.core.Var(function(){return ajax.core.map__GT_ResponseFormat;},new cljs.core.Symbol("ajax.core","map->ResponseFormat","ajax.core/map->ResponseFormat",(-800872880),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"map->ResponseFormat","map->ResponseFormat",(-865190611),null),"ajax/core.cljc",(26),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(103),(103),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__112","G__112",(-1827980670),null)], null)),null,(cljs.core.truth_(ajax.core.map__GT_ResponseFormat)?ajax.core.map__GT_ResponseFormat.cljs$lang$test:null)])));})()
;

(function (){
ajax.core.params_to_str_alt = (function ajax$core$params_to_str_alt(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return ajax.core.params_to_str_alt;},new cljs.core.Symbol("ajax.core","params-to-str-alt","ajax.core/params-to-str-alt",(-1708926021),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"params-to-str-alt","params-to-str-alt",(-1508954778),null),"ajax/core.cljc",(28),(5),(142),(142),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),null,(cljs.core.truth_(ajax.core.params_to_str_alt)?ajax.core.params_to_str_alt.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.param_to_str; return (
new cljs.core.Var(function(){return ajax.core.param_to_str;},new cljs.core.Symbol("ajax.core","param-to-str","ajax.core/param-to-str",(1824252304),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"param-to-str","param-to-str",(2068083965),null),"ajax/core.cljc",(22),(1),(150),true,(150),cljs.core.List.EMPTY,null,(cljs.core.truth_(ajax.core.param_to_str)?ajax.core.param_to_str.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.vec_param_to_str = (function ajax$core$vec_param_to_str(var_args){
var args132 = [];
var len__24987__auto___135 = arguments.length;
var i__24988__auto___136 = (0);
while(true){
if((i__24988__auto___136 < len__24987__auto___135)){
args132.push((arguments[i__24988__auto___136]));

var G__137 = (i__24988__auto___136 + (1));
i__24988__auto___136 = G__137;
continue;
} else {
}
break;
}

var G__134 = args132.length;
switch (G__134) {
case (3):
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (2):
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (1):
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args132.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return ajax.core.vec_param_to_str;},new cljs.core.Symbol("ajax.core","vec-param-to-str","ajax.core/vec-param-to-str",(-641725295),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"vec-param-to-str","vec-param-to-str",(-719079070),null),"ajax/core.cljc",(33),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"key","key",(124488940),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"key","key",(124488940),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(152),(152),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"key","key",(124488940),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null)], null)),null,(cljs.core.truth_(ajax.core.vec_param_to_str)?ajax.core.vec_param_to_str.cljs$lang$test:null)])));})()
;

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3 = (function (prefix,key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,key){
return (function (value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return ajax.core.vec_param_to_str;},new cljs.core.Symbol("ajax.core","vec-param-to-str","ajax.core/vec-param-to-str",(-641725295),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"vec-param-to-str","vec-param-to-str",(-719079070),null),"ajax/core.cljc",(33),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"key","key",(124488940),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"key","key",(124488940),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(152),(152),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"key","key",(124488940),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null)], null)),null,(cljs.core.truth_(ajax.core.vec_param_to_str)?ajax.core.vec_param_to_str.cljs$lang$test:null)]));
(function (){
ajax.core.param_to_str = (function ajax$core$param_to_str(var_args){
var args139 = [];
var len__24987__auto___150 = arguments.length;
var i__24988__auto___151 = (0);
while(true){
if((i__24988__auto___151 < len__24987__auto___150)){
args139.push((arguments[i__24988__auto___151]));

var G__152 = (i__24988__auto___151 + (1));
i__24988__auto___151 = G__152;
continue;
} else {
}
break;
}

var G__141 = args139.length;
switch (G__141) {
case (2):
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (1):
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args139.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return ajax.core.param_to_str;},new cljs.core.Symbol("ajax.core","param-to-str","ajax.core/param-to-str",(1824252304),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"param-to-str","param-to-str",(2068083965),null),"ajax/core.cljc",(29),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(155),(155),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null)], null)),null,(cljs.core.truth_(ajax.core.param_to_str)?ajax.core.param_to_str.cljs$lang$test:null)])));})()
;

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,p__142){
var vec__143 = p__142;
var key = cljs.core.nth.call(null,vec__143,(0),null);
var value = cljs.core.nth.call(null,vec__143,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (p__146){
var vec__147 = p__146;
var key = cljs.core.nth.call(null,vec__147,(0),null);
var value = cljs.core.nth.call(null,vec__147,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});
});

ajax.core.param_to_str.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return ajax.core.param_to_str;},new cljs.core.Symbol("ajax.core","param-to-str","ajax.core/param-to-str",(1824252304),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"param-to-str","param-to-str",(2068083965),null),"ajax/core.cljc",(29),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(155),(155),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null)], null)),null,(cljs.core.truth_(ajax.core.param_to_str)?ajax.core.param_to_str.cljs$lang$test:null)]));
(function (){
ajax.core.to_utf8_writer = (function ajax$core$to_utf8_writer(to_str){
return to_str;
}); return (
new cljs.core.Var(function(){return ajax.core.to_utf8_writer;},new cljs.core.Symbol("ajax.core","to-utf8-writer","ajax.core/to-utf8-writer",(1368650154),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"to-utf8-writer","to-utf8-writer",(632322845),null),"ajax/core.cljc",(21),(1),(170),(170),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"to-str","to-str",(764743209),null)], null)),null,(cljs.core.truth_(ajax.core.to_utf8_writer)?ajax.core.to_utf8_writer.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
var url_encode_fn = encodeURIComponent;
return clojure.string.join.call(null,"&",cljs.core.map.call(null,((function (url_encode_fn){
return (function (p__158){
var vec__159 = p__158;
var k = cljs.core.nth.call(null,vec__159,(0),null);
var v = cljs.core.nth.call(null,vec__159,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url_encode_fn.call(null,v))].join('');
});})(url_encode_fn))
,cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,null),cljs.core.seq.call(null,params))));
}); return (
new cljs.core.Var(function(){return ajax.core.params_to_str;},new cljs.core.Symbol("ajax.core","params-to-str","ajax.core/params-to-str",(921436988),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"params-to-str","params-to-str",(705662419),null),"ajax/core.cljc",(20),(1),(177),(177),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),null,(cljs.core.truth_(ajax.core.params_to_str)?ajax.core.params_to_str.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.uri_with_params = (function ajax$core$uri_with_params(var_args){
var args162 = [];
var len__24987__auto___165 = arguments.length;
var i__24988__auto___166 = (0);
while(true){
if((i__24988__auto___166 < len__24987__auto___165)){
args162.push((arguments[i__24988__auto___166]));

var G__167 = (i__24988__auto___166 + (1));
i__24988__auto___166 = G__167;
continue;
} else {
}
break;
}

var G__164 = args162.length;
switch (G__164) {
case (3):
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (2):
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (1):
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args162.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return ajax.core.uri_with_params;},new cljs.core.Symbol("ajax.core","uri-with-params","ajax.core/uri-with-params",(482317311),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"uri-with-params","uri-with-params",(545459856),null),"ajax/core.cljc",(32),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"params-to-str","params-to-str",(705662419),null),new cljs.core.Symbol(null,"uri","uri",(865819680),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"params-to-str","params-to-str",(705662419),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"params-to-str","params-to-str",(705662419),null),new cljs.core.Symbol(null,"uri","uri",(865819680),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"params-to-str","params-to-str",(705662419),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(185),(185),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"params-to-str","params-to-str",(705662419),null),new cljs.core.Symbol(null,"uri","uri",(865819680),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"params-to-str","params-to-str",(705662419),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),null,(cljs.core.truth_(ajax.core.uri_with_params)?ajax.core.uri_with_params.cljs$lang$test:null)])));})()
;

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$3 = (function (params,params_to_str,uri){
if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(params_to_str.call(null,params))].join('');
} else {
return uri;
}
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (params,params_to_str){
return (function (uri){
if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (params){
return (function (params_to_str,uri){
if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
});

ajax.core.uri_with_params.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return ajax.core.uri_with_params;},new cljs.core.Symbol("ajax.core","uri-with-params","ajax.core/uri-with-params",(482317311),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"uri-with-params","uri-with-params",(545459856),null),"ajax/core.cljc",(32),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"params-to-str","params-to-str",(705662419),null),new cljs.core.Symbol(null,"uri","uri",(865819680),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"params-to-str","params-to-str",(705662419),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"params-to-str","params-to-str",(705662419),null),new cljs.core.Symbol(null,"uri","uri",(865819680),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"params-to-str","params-to-str",(705662419),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(185),(185),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"params-to-str","params-to-str",(705662419),null),new cljs.core.Symbol(null,"uri","uri",(865819680),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"params-to-str","params-to-str",(705662419),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),null,(cljs.core.truth_(ajax.core.uri_with_params)?ajax.core.uri_with_params.cljs$lang$test:null)]));
(function (){
ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",(-1857649168)),format,new cljs.core.Keyword(null,"content-type","content-type",(-508222634)),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
}); return (
new cljs.core.Var(function(){return ajax.core.get_request_format;},new cljs.core.Symbol("ajax.core","get-request-format","ajax.core/get-request-format",(1093870619),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"get-request-format","get-request-format",(1297526470),null),"ajax/core.cljc",(25),(1),(192),(192),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"format","format",(333606761),null)], null)),null,(cljs.core.truth_(ajax.core.get_request_format)?ajax.core.get_request_format.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ProcessGet = (function (params_to_str,__meta,__extmap,__hash){
this.params_to_str = params_to_str;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24307__auto__,k__24308__auto__){
var self__ = this;
var this__24307__auto____$1 = this;
return this__24307__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__24308__auto__,null);
});

ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24309__auto__,k170,else__24310__auto__){
var self__ = this;
var this__24309__auto____$1 = this;
var G__172 = k170;
var G__172__$1 = (((G__172 instanceof cljs.core.Keyword))?G__172.fqn:null);
switch (G__172__$1) {
case "params-to-str":
return self__.params_to_str;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k170,else__24310__auto__);

}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__173){
var self__ = this;
var map__174 = p__173;
var map__174__$1 = ((((!((map__174 == null)))?((((map__174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__174.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__174):map__174);
var request = map__174__$1;
var method = cljs.core.get.call(null,map__174__$1,new cljs.core.Keyword(null,"method","method",(55703592)));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",(-774711847)),ajax.core.uri_with_params.call(null,new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(request),self__.params_to_str)));
} else {
return request;
}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24321__auto__,writer__24322__auto__,opts__24323__auto__){
var self__ = this;
var this__24321__auto____$1 = this;
var pr_pair__24324__auto__ = ((function (this__24321__auto____$1){
return (function (keyval__24325__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24322__auto__,cljs.core.pr_writer,""," ","",opts__24323__auto__,keyval__24325__auto__);
});})(this__24321__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24322__auto__,pr_pair__24324__auto__,"#ajax.core.ProcessGet{",", ","}",opts__24323__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-to-str","params-to-str",(-934869108)),self__.params_to_str],null))], null),self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__169){
var self__ = this;
var G__169__$1 = this;
return (new cljs.core.RecordIter((0),G__169__$1,(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params-to-str","params-to-str",(-934869108))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.core.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24305__auto__){
var self__ = this;
var this__24305__auto____$1 = this;
return self__.__meta;
});

ajax.core.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24301__auto__){
var self__ = this;
var this__24301__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24311__auto__){
var self__ = this;
var this__24311__auto____$1 = this;
return ((1) + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24302__auto__){
var self__ = this;
var this__24302__auto____$1 = this;
var h__24010__auto__ = self__.__hash;
if(!((h__24010__auto__ == null))){
return h__24010__auto__;
} else {
var h__24010__auto____$1 = cljs.core.hash_imap.call(null,this__24302__auto____$1);
self__.__hash = h__24010__auto____$1;

return h__24010__auto____$1;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24303__auto__,other__24304__auto__){
var self__ = this;
var this__24303__auto____$1 = this;
if(cljs.core.truth_((function (){var and__23164__auto__ = other__24304__auto__;
if(cljs.core.truth_(and__23164__auto__)){
return ((this__24303__auto____$1.constructor === other__24304__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__24303__auto____$1,other__24304__auto__));
} else {
return and__23164__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24316__auto__,k__24317__auto__){
var self__ = this;
var this__24316__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params-to-str","params-to-str",(-934869108)),null], null), null),k__24317__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24316__auto____$1),self__.__meta),k__24317__auto__);
} else {
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24317__auto__)),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24314__auto__,k__24315__auto__,G__169){
var self__ = this;
var this__24314__auto____$1 = this;
var pred__176 = cljs.core.keyword_identical_QMARK_;
var expr__177 = k__24315__auto__;
if(cljs.core.truth_(pred__176.call(null,new cljs.core.Keyword(null,"params-to-str","params-to-str",(-934869108)),expr__177))){
return (new ajax.core.ProcessGet(G__169,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24315__auto__,G__169),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24319__auto__){
var self__ = this;
var this__24319__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-to-str","params-to-str",(-934869108)),self__.params_to_str],null))], null),self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24306__auto__,G__169){
var self__ = this;
var this__24306__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.params_to_str,G__169,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24312__auto__,entry__24313__auto__){
var self__ = this;
var this__24312__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24313__auto__)){
return this__24312__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__24313__auto__,(0)),cljs.core._nth.call(null,entry__24313__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24312__auto____$1,entry__24313__auto__);
}
});

ajax.core.ProcessGet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params-to-str","params-to-str",(705662419),null)], null);
});

ajax.core.ProcessGet.cljs$lang$type = true;

ajax.core.ProcessGet.cljs$lang$ctorPrSeq = (function (this__24332__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ProcessGet");
});

ajax.core.ProcessGet.cljs$lang$ctorPrWriter = (function (this__24332__auto__,writer__24333__auto__){
return cljs.core._write.call(null,writer__24333__auto__,"ajax.core/ProcessGet");
});

(function (){
ajax.core.__GT_ProcessGet = (function ajax$core$__GT_ProcessGet(params_to_str){
return (new ajax.core.ProcessGet(params_to_str,null,null,null));
}); return (
new cljs.core.Var(function(){return ajax.core.__GT_ProcessGet;},new cljs.core.Symbol("ajax.core","->ProcessGet","ajax.core/->ProcessGet",(776191809),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"->ProcessGet","->ProcessGet",(-630966894),null),"ajax/core.cljc",(22),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(199),(199),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params-to-str","params-to-str",(705662419),null)], null)),null,(cljs.core.truth_(ajax.core.__GT_ProcessGet)?ajax.core.__GT_ProcessGet.cljs$lang$test:null)])));})()
;

(function (){
ajax.core.map__GT_ProcessGet = (function ajax$core$map__GT_ProcessGet(G__171){
return (new ajax.core.ProcessGet(new cljs.core.Keyword(null,"params-to-str","params-to-str",(-934869108)).cljs$core$IFn$_invoke$arity$1(G__171),null,cljs.core.dissoc.call(null,G__171,new cljs.core.Keyword(null,"params-to-str","params-to-str",(-934869108))),null));
}); return (
new cljs.core.Var(function(){return ajax.core.map__GT_ProcessGet;},new cljs.core.Symbol("ajax.core","map->ProcessGet","ajax.core/map->ProcessGet",(-553392986),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"map->ProcessGet","map->ProcessGet",(-882609197),null),"ajax/core.cljc",(22),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(199),(199),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__171","G__171",(-85719641),null)], null)),null,(cljs.core.truth_(ajax.core.map__GT_ProcessGet)?ajax.core.map__GT_ProcessGet.cljs$lang$test:null)])));})()
;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24307__auto__,k__24308__auto__){
var self__ = this;
var this__24307__auto____$1 = this;
return this__24307__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__24308__auto__,null);
});

ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24309__auto__,k181,else__24310__auto__){
var self__ = this;
var this__24309__auto____$1 = this;
var G__183 = k181;
switch (G__183) {
default:
return cljs.core.get.call(null,self__.__extmap,k181,else__24310__auto__);

}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__184){
var self__ = this;
var map__185 = p__184;
var map__185__$1 = ((((!((map__185 == null)))?((((map__185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__185.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__185):map__185);
var request = map__185__$1;
var body = cljs.core.get.call(null,map__185__$1,new cljs.core.Keyword(null,"body","body",(-2049205669)));
var params = cljs.core.get.call(null,map__185__$1,new cljs.core.Keyword(null,"params","params",(710516235)));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24321__auto__,writer__24322__auto__,opts__24323__auto__){
var self__ = this;
var this__24321__auto____$1 = this;
var pr_pair__24324__auto__ = ((function (this__24321__auto____$1){
return (function (keyval__24325__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24322__auto__,cljs.core.pr_writer,""," ","",opts__24323__auto__,keyval__24325__auto__);
});})(this__24321__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24322__auto__,pr_pair__24324__auto__,"#ajax.core.DirectSubmission{",", ","}",opts__24323__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__180){
var self__ = this;
var G__180__$1 = this;
return (new cljs.core.RecordIter((0),G__180__$1,(0),cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.core.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24305__auto__){
var self__ = this;
var this__24305__auto____$1 = this;
return self__.__meta;
});

ajax.core.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24301__auto__){
var self__ = this;
var this__24301__auto____$1 = this;
return (new ajax.core.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24311__auto__){
var self__ = this;
var this__24311__auto____$1 = this;
return ((0) + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24302__auto__){
var self__ = this;
var this__24302__auto____$1 = this;
var h__24010__auto__ = self__.__hash;
if(!((h__24010__auto__ == null))){
return h__24010__auto__;
} else {
var h__24010__auto____$1 = cljs.core.hash_imap.call(null,this__24302__auto____$1);
self__.__hash = h__24010__auto____$1;

return h__24010__auto____$1;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24303__auto__,other__24304__auto__){
var self__ = this;
var this__24303__auto____$1 = this;
if(cljs.core.truth_((function (){var and__23164__auto__ = other__24304__auto__;
if(cljs.core.truth_(and__23164__auto__)){
return ((this__24303__auto____$1.constructor === other__24304__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__24303__auto____$1,other__24304__auto__));
} else {
return and__23164__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24316__auto__,k__24317__auto__){
var self__ = this;
var this__24316__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__24317__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24316__auto____$1),self__.__meta),k__24317__auto__);
} else {
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24317__auto__)),null));
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24314__auto__,k__24315__auto__,G__180){
var self__ = this;
var this__24314__auto____$1 = this;
var pred__187 = cljs.core.keyword_identical_QMARK_;
var expr__188 = k__24315__auto__;
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24315__auto__,G__180),null));
});

ajax.core.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24319__auto__){
var self__ = this;
var this__24319__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24306__auto__,G__180){
var self__ = this;
var this__24306__auto____$1 = this;
return (new ajax.core.DirectSubmission(G__180,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24312__auto__,entry__24313__auto__){
var self__ = this;
var this__24312__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24313__auto__)){
return this__24312__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__24313__auto__,(0)),cljs.core._nth.call(null,entry__24313__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24312__auto____$1,entry__24313__auto__);
}
});

ajax.core.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.DirectSubmission.cljs$lang$type = true;

ajax.core.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__24332__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/DirectSubmission");
});

ajax.core.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__24332__auto__,writer__24333__auto__){
return cljs.core._write.call(null,writer__24333__auto__,"ajax.core/DirectSubmission");
});

(function (){
ajax.core.__GT_DirectSubmission = (function ajax$core$__GT_DirectSubmission(){
return (new ajax.core.DirectSubmission(null,null,null));
}); return (
new cljs.core.Var(function(){return ajax.core.__GT_DirectSubmission;},new cljs.core.Symbol("ajax.core","->DirectSubmission","ajax.core/->DirectSubmission",(1699082258),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"->DirectSubmission","->DirectSubmission",(-1722200379),null),"ajax/core.cljc",(28),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(208),(208),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ajax.core.__GT_DirectSubmission)?ajax.core.__GT_DirectSubmission.cljs$lang$test:null)])));})()
;

(function (){
ajax.core.map__GT_DirectSubmission = (function ajax$core$map__GT_DirectSubmission(G__182){
return (new ajax.core.DirectSubmission(null,cljs.core.dissoc.call(null,G__182),null));
}); return (
new cljs.core.Var(function(){return ajax.core.map__GT_DirectSubmission;},new cljs.core.Symbol("ajax.core","map->DirectSubmission","ajax.core/map->DirectSubmission",(1644536364),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"map->DirectSubmission","map->DirectSubmission",(1981880159),null),"ajax/core.cljc",(28),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(208),(208),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__182","G__182",(1170395945),null)], null)),null,(cljs.core.truth_(ajax.core.map__GT_DirectSubmission)?ajax.core.map__GT_DirectSubmission.cljs$lang$test:null)])));})()
;

(function (){
ajax.core.apply_request_format = (function ajax$core$apply_request_format(write,params){
return write.call(null,params);
}); return (
new cljs.core.Var(function(){return ajax.core.apply_request_format;},new cljs.core.Symbol("ajax.core","apply-request-format","ajax.core/apply-request-format",(-1064347692),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"apply-request-format","apply-request-format",(-190111225),null),"ajax/core.cljc",(27),(1),(214),(214),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"write","write",(-217117641),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),null,(cljs.core.truth_(ajax.core.apply_request_format)?ajax.core.apply_request_format.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24307__auto__,k__24308__auto__){
var self__ = this;
var this__24307__auto____$1 = this;
return this__24307__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__24308__auto__,null);
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24309__auto__,k192,else__24310__auto__){
var self__ = this;
var this__24309__auto____$1 = this;
var G__194 = k192;
switch (G__194) {
default:
return cljs.core.get.call(null,self__.__extmap,k192,else__24310__auto__);

}
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__195){
var self__ = this;
var map__196 = p__195;
var map__196__$1 = ((((!((map__196 == null)))?((((map__196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__196):map__196);
var request = map__196__$1;
var uri = cljs.core.get.call(null,map__196__$1,new cljs.core.Keyword(null,"uri","uri",(-774711847)));
var method = cljs.core.get.call(null,map__196__$1,new cljs.core.Keyword(null,"method","method",(55703592)));
var format = cljs.core.get.call(null,map__196__$1,new cljs.core.Keyword(null,"format","format",(-1306924766)));
var params = cljs.core.get.call(null,map__196__$1,new cljs.core.Keyword(null,"params","params",(710516235)));
var headers = cljs.core.get.call(null,map__196__$1,new cljs.core.Keyword(null,"headers","headers",(-835030129)));
var ___$1 = this;
var map__198 = ajax.core.get_request_format.call(null,format);
var map__198__$1 = ((((!((map__198 == null)))?((((map__198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198):map__198);
var write = cljs.core.get.call(null,map__198__$1,new cljs.core.Keyword(null,"write","write",(-1857649168)));
var content_type = cljs.core.get.call(null,map__198__$1,new cljs.core.Keyword(null,"content-type","content-type",(-508222634)));
var body = ((!((write == null)))?ajax.core.apply_request_format.call(null,write,params):ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__23200__auto__ = headers;
if(cljs.core.truth_(or__23200__auto__)){
return or__23200__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",(-2049205669)),body,new cljs.core.Keyword(null,"headers","headers",(-835030129)),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.core.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24321__auto__,writer__24322__auto__,opts__24323__auto__){
var self__ = this;
var this__24321__auto____$1 = this;
var pr_pair__24324__auto__ = ((function (this__24321__auto____$1){
return (function (keyval__24325__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24322__auto__,cljs.core.pr_writer,""," ","",opts__24323__auto__,keyval__24325__auto__);
});})(this__24321__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24322__auto__,pr_pair__24324__auto__,"#ajax.core.ApplyRequestFormat{",", ","}",opts__24323__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__191){
var self__ = this;
var G__191__$1 = this;
return (new cljs.core.RecordIter((0),G__191__$1,(0),cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24305__auto__){
var self__ = this;
var this__24305__auto____$1 = this;
return self__.__meta;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24301__auto__){
var self__ = this;
var this__24301__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24311__auto__){
var self__ = this;
var this__24311__auto____$1 = this;
return ((0) + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24302__auto__){
var self__ = this;
var this__24302__auto____$1 = this;
var h__24010__auto__ = self__.__hash;
if(!((h__24010__auto__ == null))){
return h__24010__auto__;
} else {
var h__24010__auto____$1 = cljs.core.hash_imap.call(null,this__24302__auto____$1);
self__.__hash = h__24010__auto____$1;

return h__24010__auto____$1;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24303__auto__,other__24304__auto__){
var self__ = this;
var this__24303__auto____$1 = this;
if(cljs.core.truth_((function (){var and__23164__auto__ = other__24304__auto__;
if(cljs.core.truth_(and__23164__auto__)){
return ((this__24303__auto____$1.constructor === other__24304__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__24303__auto____$1,other__24304__auto__));
} else {
return and__23164__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24316__auto__,k__24317__auto__){
var self__ = this;
var this__24316__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__24317__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24316__auto____$1),self__.__meta),k__24317__auto__);
} else {
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24317__auto__)),null));
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24314__auto__,k__24315__auto__,G__191){
var self__ = this;
var this__24314__auto____$1 = this;
var pred__200 = cljs.core.keyword_identical_QMARK_;
var expr__201 = k__24315__auto__;
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24315__auto__,G__191),null));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24319__auto__){
var self__ = this;
var this__24319__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24306__auto__,G__191){
var self__ = this;
var this__24306__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(G__191,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24312__auto__,entry__24313__auto__){
var self__ = this;
var this__24312__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24313__auto__)){
return this__24312__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__24313__auto__,(0)),cljs.core._nth.call(null,entry__24313__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24312__auto____$1,entry__24313__auto__);
}
});

ajax.core.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ApplyRequestFormat.cljs$lang$type = true;

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__24332__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ApplyRequestFormat");
});

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__24332__auto__,writer__24333__auto__){
return cljs.core._write.call(null,writer__24333__auto__,"ajax.core/ApplyRequestFormat");
});

(function (){
ajax.core.__GT_ApplyRequestFormat = (function ajax$core$__GT_ApplyRequestFormat(){
return (new ajax.core.ApplyRequestFormat(null,null,null));
}); return (
new cljs.core.Var(function(){return ajax.core.__GT_ApplyRequestFormat;},new cljs.core.Symbol("ajax.core","->ApplyRequestFormat","ajax.core/->ApplyRequestFormat",(743931830),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"->ApplyRequestFormat","->ApplyRequestFormat",(946586979),null),"ajax/core.cljc",(30),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(220),(220),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ajax.core.__GT_ApplyRequestFormat)?ajax.core.__GT_ApplyRequestFormat.cljs$lang$test:null)])));})()
;

(function (){
ajax.core.map__GT_ApplyRequestFormat = (function ajax$core$map__GT_ApplyRequestFormat(G__193){
return (new ajax.core.ApplyRequestFormat(null,cljs.core.dissoc.call(null,G__193),null));
}); return (
new cljs.core.Var(function(){return ajax.core.map__GT_ApplyRequestFormat;},new cljs.core.Symbol("ajax.core","map->ApplyRequestFormat","ajax.core/map->ApplyRequestFormat",(1034148405),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"map->ApplyRequestFormat","map->ApplyRequestFormat",(1237082506),null),"ajax/core.cljc",(30),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(220),(220),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__193","G__193",(-247599618),null)], null)),null,(cljs.core.truth_(ajax.core.map__GT_ApplyRequestFormat)?ajax.core.map__GT_ApplyRequestFormat.cljs$lang$test:null)])));})()
;

(function (){
ajax.core.transit_type = (function ajax$core$transit_type(p__204){
var map__207 = p__204;
var map__207__$1 = ((((!((map__207 == null)))?((((map__207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__207.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__207):map__207);
var type = cljs.core.get.call(null,map__207__$1,new cljs.core.Keyword(null,"type","type",(1174270348)));
var or__23200__auto__ = type;
if(cljs.core.truth_(or__23200__auto__)){
return or__23200__auto__;
} else {
return new cljs.core.Keyword(null,"json","json",(1279968570));
}
}); return (
new cljs.core.Var(function(){return ajax.core.transit_type;},new cljs.core.Symbol("ajax.core","transit-type","ajax.core/transit-type",(1359975244),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"transit-type","transit-type",(1307248185),null),"ajax/core.cljc",(19),(1),(241),(241),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null)], null)], null)], null)),null,(cljs.core.truth_(ajax.core.transit_type)?ajax.core.transit_type.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.transit_write_fn = (function ajax$core$transit_write_fn(type,request){
var writer = (function (){var or__23200__auto__ = new cljs.core.Keyword(null,"writer","writer",(-277568236)).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__23200__auto__)){
return or__23200__auto__;
} else {
return cognitect.transit.writer.call(null,type,request);
}
})();
return ((function (writer){
return (function ajax$core$transit_write_fn_$_transit_write_params(params){
return cognitect.transit.write.call(null,writer,params);
});
;})(writer))
}); return (
new cljs.core.Var(function(){return ajax.core.transit_write_fn;},new cljs.core.Symbol("ajax.core","transit-write-fn","ajax.core/transit-write-fn",(-1418546217),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"transit-write-fn","transit-write-fn",(-728876894),null),"ajax/core.cljc",(33),(11),(244),(244),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),null,(cljs.core.truth_(ajax.core.transit_write_fn)?ajax.core.transit_write_fn.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.transit_request_format = (function ajax$core$transit_request_format(var_args){
var args209 = [];
var len__24987__auto___212 = arguments.length;
var i__24988__auto___213 = (0);
while(true){
if((i__24988__auto___213 < len__24987__auto___212)){
args209.push((arguments[i__24988__auto___213]));

var G__214 = (i__24988__auto___213 + (1));
i__24988__auto___213 = G__214;
continue;
} else {
}
break;
}

var G__211 = args209.length;
switch (G__211) {
case (0):
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args209.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return ajax.core.transit_request_format;},new cljs.core.Symbol("ajax.core","transit-request-format","ajax.core/transit-request-format",(842152849),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"transit-request-format","transit-request-format",(1046391906),null),"ajax/core.cljc",(29),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(255),(255),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),null,(cljs.core.truth_(ajax.core.transit_request_format)?ajax.core.transit_request_format.cljs$lang$test:null)])));})()
;

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
var type = ajax.core.transit_type.call(null,request);
var mime_type = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"json","json",(1279968570))))?"json":"msgpack");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",(-1857649168)),ajax.core.transit_write_fn.call(null,type,request),new cljs.core.Keyword(null,"content-type","content-type",(-508222634)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("application/transit+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mime_type)].join('')], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return ajax.core.transit_request_format;},new cljs.core.Symbol("ajax.core","transit-request-format","ajax.core/transit-request-format",(842152849),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"transit-request-format","transit-request-format",(1046391906),null),"ajax/core.cljc",(29),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(255),(255),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),null,(cljs.core.truth_(ajax.core.transit_request_format)?ajax.core.transit_request_format.cljs$lang$test:null)]));
(function (){
ajax.core.transit_read_fn = (function ajax$core$transit_read_fn(request){
var reader = (function (){var or__23200__auto__ = new cljs.core.Keyword(null,"reader","reader",(169660853)).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__23200__auto__)){
return or__23200__auto__;
} else {
return cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",(1279968570)),request);
}
})();
return ((function (reader){
return (function ajax$core$transit_read_fn_$_transit_read_response(response){
return cognitect.transit.read.call(null,reader,ajax.protocols._body.call(null,response));
});
;})(reader))
}); return (
new cljs.core.Var(function(){return ajax.core.transit_read_fn;},new cljs.core.Symbol("ajax.core","transit-read-fn","ajax.core/transit-read-fn",(1561632705),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"transit-read-fn","transit-read-fn",(1232085010),null),"ajax/core.cljc",(32),(11),(263),(263),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),null,(cljs.core.truth_(ajax.core.transit_read_fn)?ajax.core.transit_read_fn.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.transit_response_format = (function ajax$core$transit_response_format(var_args){
var args216 = [];
var len__24987__auto___219 = arguments.length;
var i__24988__auto___220 = (0);
while(true){
if((i__24988__auto___220 < len__24987__auto___219)){
args216.push((arguments[i__24988__auto___220]));

var G__221 = (i__24988__auto___220 + (1));
i__24988__auto___220 = G__221;
continue;
} else {
}
break;
}

var G__218 = args216.length;
switch (G__218) {
case (0):
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args216.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return ajax.core.transit_response_format;},new cljs.core.Symbol("ajax.core","transit-response-format","ajax.core/transit-response-format",(1743973673),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"transit-response-format","transit-response-format",(462907130),null),"ajax/core.cljc",(30),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(276),(276),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),null,(cljs.core.truth_(ajax.core.transit_response_format)?ajax.core.transit_response_format.cljs$lang$test:null)])));})()
;

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return ajax.core.transit_response_format.call(null,ajax.core.transit_type.call(null,request),request);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2 = (function (type,request){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",(1140058661)),ajax.core.transit_read_fn.call(null,request),new cljs.core.Keyword(null,"description","description",(-1428560544)),"Transit",new cljs.core.Keyword(null,"content-type","content-type",(-508222634)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json"], null)], null));
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return ajax.core.transit_response_format;},new cljs.core.Symbol("ajax.core","transit-response-format","ajax.core/transit-response-format",(1743973673),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"transit-response-format","transit-response-format",(462907130),null),"ajax/core.cljc",(30),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(276),(276),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),null,(cljs.core.truth_(ajax.core.transit_response_format)?ajax.core.transit_response_format.cljs$lang$test:null)]));
(function (){
ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",(-1857649168)),ajax.core.to_utf8_writer.call(null,ajax.core.params_to_str),new cljs.core.Keyword(null,"content-type","content-type",(-508222634)),"application/x-www-form-urlencoded; charset=utf-8"], null);
}); return (
new cljs.core.Var(function(){return ajax.core.url_request_format;},new cljs.core.Symbol("ajax.core","url-request-format","ajax.core/url-request-format",(-1610761429),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"url-request-format","url-request-format",(-2082918152),null),"ajax/core.cljc",(25),(1),(289),(289),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ajax.core.url_request_format)?ajax.core.url_request_format.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.raw_response_format = (function ajax$core$raw_response_format(var_args){
var args223 = [];
var len__24987__auto___226 = arguments.length;
var i__24988__auto___227 = (0);
while(true){
if((i__24988__auto___227 < len__24987__auto___226)){
args223.push((arguments[i__24988__auto___227]));

var G__228 = (i__24988__auto___227 + (1));
i__24988__auto___227 = G__228;
continue;
} else {
}
break;
}

var G__225 = args223.length;
switch (G__225) {
case (0):
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args223.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return ajax.core.raw_response_format;},new cljs.core.Symbol("ajax.core","raw-response-format","ajax.core/raw-response-format",(165303065),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"raw-response-format","raw-response-format",(502782404),null),"ajax/core.cljc",(26),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",(-1201019570),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",(-1201019570),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(293),(293),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",(-1201019570),null)], null)),null,(cljs.core.truth_(ajax.core.raw_response_format)?ajax.core.raw_response_format.cljs$lang$test:null)])));})()
;

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",(1140058661)),ajax.protocols._body,new cljs.core.Keyword(null,"description","description",(-1428560544)),"raw text",new cljs.core.Keyword(null,"content-type","content-type",(-508222634)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.core.raw_response_format.call(null);
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return ajax.core.raw_response_format;},new cljs.core.Symbol("ajax.core","raw-response-format","ajax.core/raw-response-format",(165303065),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"raw-response-format","raw-response-format",(502782404),null),"ajax/core.cljc",(26),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",(-1201019570),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",(-1201019570),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(293),(293),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",(-1201019570),null)], null)),null,(cljs.core.truth_(ajax.core.raw_response_format)?ajax.core.raw_response_format.cljs$lang$test:null)]));
(function (){
ajax.core.text_request_format = (function ajax$core$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",(-1857649168)),ajax.core.to_utf8_writer.call(null,cljs.core.identity),new cljs.core.Keyword(null,"content-type","content-type",(-508222634)),"text/plain; charset=utf-8"], null);
}); return (
new cljs.core.Var(function(){return ajax.core.text_request_format;},new cljs.core.Symbol("ajax.core","text-request-format","ajax.core/text-request-format",(-1136916927),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"text-request-format","text-request-format",(-1447006052),null),"ajax/core.cljc",(26),(1),(300),(300),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ajax.core.text_request_format)?ajax.core.text_request_format.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.text_response_format = ajax.core.raw_response_format; return (
new cljs.core.Var(function(){return ajax.core.text_response_format;},new cljs.core.Symbol("ajax.core","text-response-format","ajax.core/text-response-format",(1875705088),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"text-response-format","text-response-format",(1403741165),null),"ajax/core.cljc",(30),(5),(319),(319),cljs.core.List.EMPTY,null,(cljs.core.truth_(ajax.core.text_response_format)?ajax.core.text_response_format.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
}); return (
new cljs.core.Var(function(){return ajax.core.write_json;},new cljs.core.Symbol("ajax.core","write-json","ajax.core/write-json",(-1345264789),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"write-json","write-json",(-1816832456),null),"ajax/core.cljc",(27),(11),(321),(321),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",(1407862150),null)], null)),null,(cljs.core.truth_(ajax.core.write_json)?ajax.core.write_json.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",(-1857649168)),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",(-508222634)),"application/json"], null);
}); return (
new cljs.core.Var(function(){return ajax.core.json_request_format;},new cljs.core.Symbol("ajax.core","json-request-format","ajax.core/json-request-format",(1516018481),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"json-request-format","json-request-format",(1446516354),null),"ajax/core.cljc",(26),(1),(326),(326),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ajax.core.json_request_format)?ajax.core.json_request_format.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.strip_prefix = (function ajax$core$strip_prefix(prefix,text){
if(cljs.core.truth_((function (){var and__23164__auto__ = prefix;
if(cljs.core.truth_(and__23164__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__23164__auto__;
}
})())){
return text.substring(prefix.length);
} else {
return text;
}
}); return (
new cljs.core.Var(function(){return ajax.core.strip_prefix;},new cljs.core.Symbol("ajax.core","strip-prefix","ajax.core/strip-prefix",(1140859352),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"strip-prefix","strip-prefix",(1479302005),null),"ajax/core.cljc",(30),(12),(345),(345),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"String","String",(-2070057435),null)], null)),new cljs.core.Symbol(null,"text","text",(-150030170),null)], null)),null,(cljs.core.truth_(ajax.core.strip_prefix)?ajax.core.strip_prefix.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.json_read = (function ajax$core$json_read(var_args){
var args230 = [];
var len__24987__auto___233 = arguments.length;
var i__24988__auto___234 = (0);
while(true){
if((i__24988__auto___234 < len__24987__auto___233)){
args230.push((arguments[i__24988__auto___234]));

var G__235 = (i__24988__auto___234 + (1));
i__24988__auto___234 = G__235;
continue;
} else {
}
break;
}

var G__232 = args230.length;
switch (G__232) {
case (4):
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (3):
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (2):
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (1):
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args230.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return ajax.core.json_read;},new cljs.core.Symbol("ajax.core","json-read","ajax.core/json-read",(549332993),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"json-read","json-read",(882031964),null),"ajax/core.cljc",(26),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"raw","raw",(-1049784497),null),new cljs.core.Symbol(null,"keywords?","keywords?",(-1889486036),null),new cljs.core.Symbol(null,"xhrio","xhrio",(1025390989),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"raw","raw",(-1049784497),null),new cljs.core.Symbol(null,"keywords?","keywords?",(-1889486036),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"raw","raw",(-1049784497),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"raw","raw",(-1049784497),null),new cljs.core.Symbol(null,"keywords?","keywords?",(-1889486036),null),new cljs.core.Symbol(null,"xhrio","xhrio",(1025390989),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"raw","raw",(-1049784497),null),new cljs.core.Symbol(null,"keywords?","keywords?",(-1889486036),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"raw","raw",(-1049784497),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null,null)], null),(1),(350),(350),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"raw","raw",(-1049784497),null),new cljs.core.Symbol(null,"keywords?","keywords?",(-1889486036),null),new cljs.core.Symbol(null,"xhrio","xhrio",(1025390989),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"raw","raw",(-1049784497),null),new cljs.core.Symbol(null,"keywords?","keywords?",(-1889486036),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"raw","raw",(-1049784497),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null)], null)),null,(cljs.core.truth_(ajax.core.json_read)?ajax.core.json_read.cljs$lang$test:null)])));})()
;

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",(1310784252)),keywords_QMARK_);
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",(1310784252)),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",(1310784252)),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",(1310784252)),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = (4);

new cljs.core.Var(function(){return ajax.core.json_read;},new cljs.core.Symbol("ajax.core","json-read","ajax.core/json-read",(549332993),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"json-read","json-read",(882031964),null),"ajax/core.cljc",(26),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"raw","raw",(-1049784497),null),new cljs.core.Symbol(null,"keywords?","keywords?",(-1889486036),null),new cljs.core.Symbol(null,"xhrio","xhrio",(1025390989),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"raw","raw",(-1049784497),null),new cljs.core.Symbol(null,"keywords?","keywords?",(-1889486036),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"raw","raw",(-1049784497),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"raw","raw",(-1049784497),null),new cljs.core.Symbol(null,"keywords?","keywords?",(-1889486036),null),new cljs.core.Symbol(null,"xhrio","xhrio",(1025390989),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"raw","raw",(-1049784497),null),new cljs.core.Symbol(null,"keywords?","keywords?",(-1889486036),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"raw","raw",(-1049784497),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null,null)], null),(1),(350),(350),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"raw","raw",(-1049784497),null),new cljs.core.Symbol(null,"keywords?","keywords?",(-1889486036),null),new cljs.core.Symbol(null,"xhrio","xhrio",(1025390989),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"raw","raw",(-1049784497),null),new cljs.core.Symbol(null,"keywords?","keywords?",(-1889486036),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"raw","raw",(-1049784497),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null)], null)),null,(cljs.core.truth_(ajax.core.json_read)?ajax.core.json_read.cljs$lang$test:null)]));
/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
(function (){
ajax.core.json_response_format = (function ajax$core$json_response_format(var_args){
var args237 = [];
var len__24987__auto___243 = arguments.length;
var i__24988__auto___244 = (0);
while(true){
if((i__24988__auto___244 < len__24987__auto___243)){
args237.push((arguments[i__24988__auto___244]));

var G__245 = (i__24988__auto___244 + (1));
i__24988__auto___244 = G__245;
continue;
} else {
}
break;
}

var G__239 = args237.length;
switch (G__239) {
case (0):
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args237.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return ajax.core.json_response_format;},new cljs.core.Symbol("ajax.core","json-response-format","ajax.core/json-response-format",(358882374),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"json-response-format","json-response-format",(692692627),null),"ajax/core.cljc",(27),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"keywords?","keywords?",(-1889486036),null),new cljs.core.Symbol(null,"raw","raw",(-1049784497),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"keywords?","keywords?",(-1889486036),null),new cljs.core.Symbol(null,"raw","raw",(-1049784497),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(358),(358),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"keywords?","keywords?",(-1889486036),null),new cljs.core.Symbol(null,"raw","raw",(-1049784497),null)], null)], null)], null)),"Returns a JSON response format.  Options include\n   :keywords? Returns the keys as keywords\n   :prefix A prefix that needs to be stripped off.  This is to\n   combat JSON hijacking.  If you're using JSON with GET request,\n   you should think about using this.\n   http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses\n   http://haacked.com/archive/2009/06/24/json-hijacking.aspx",(cljs.core.truth_(ajax.core.json_response_format)?ajax.core.json_response_format.cljs$lang$test:null)])));})()
;

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__240){
var map__241 = p__240;
var map__241__$1 = ((((!((map__241 == null)))?((((map__241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__241.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__241):map__241);
var prefix = cljs.core.get.call(null,map__241__$1,new cljs.core.Keyword(null,"prefix","prefix",(-265908465)));
var keywords_QMARK_ = cljs.core.get.call(null,map__241__$1,new cljs.core.Keyword(null,"keywords?","keywords?",(764949733)));
var raw = cljs.core.get.call(null,map__241__$1,new cljs.core.Keyword(null,"raw","raw",(1604651272)));
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",(1140058661)),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",(-1428560544)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("JSON"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(prefix)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" prefix '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),new cljs.core.Keyword(null,"content-type","content-type",(-508222634)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null)], null));
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return ajax.core.json_response_format;},new cljs.core.Symbol("ajax.core","json-response-format","ajax.core/json-response-format",(358882374),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"json-response-format","json-response-format",(692692627),null),"ajax/core.cljc",(27),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"keywords?","keywords?",(-1889486036),null),new cljs.core.Symbol(null,"raw","raw",(-1049784497),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"keywords?","keywords?",(-1889486036),null),new cljs.core.Symbol(null,"raw","raw",(-1049784497),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(358),(358),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"keywords?","keywords?",(-1889486036),null),new cljs.core.Symbol(null,"raw","raw",(-1049784497),null)], null)], null)], null)),"Returns a JSON response format.  Options include\n   :keywords? Returns the keys as keywords\n   :prefix A prefix that needs to be stripped off.  This is to\n   combat JSON hijacking.  If you're using JSON with GET request,\n   you should think about using this.\n   http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses\n   http://haacked.com/archive/2009/06/24/json-hijacking.aspx",(cljs.core.truth_(ajax.core.json_response_format)?ajax.core.json_response_format.cljs$lang$test:null)]));
(function (){
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.core.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*",ajax.core.raw_response_format], null)], null); return (
new cljs.core.Var(function(){return ajax.core.default_formats;},new cljs.core.Symbol("ajax.core","default-formats","ajax.core/default-formats",(1628437945),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"default-formats","default-formats",(1427335370),null),"ajax/core.cljc",(21),(1),(377),(377),cljs.core.List.EMPTY,null,(cljs.core.truth_(ajax.core.default_formats)?ajax.core.default_formats.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.get_format = (function ajax$core$get_format(var_args){
var args247 = [];
var len__24987__auto___250 = arguments.length;
var i__24988__auto___251 = (0);
while(true){
if((i__24988__auto___251 < len__24987__auto___250)){
args247.push((arguments[i__24988__auto___251]));

var G__252 = (i__24988__auto___251 + (1));
i__24988__auto___251 = G__252;
continue;
} else {
}
break;
}

var G__249 = args247.length;
switch (G__249) {
case (2):
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (1):
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args247.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return ajax.core.get_format;},new cljs.core.Symbol("ajax.core","get-format","ajax.core/get-format",(1230533538),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"get-format","get-format",(2101142741),null),"ajax/core.cljc",(27),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"format-entry","format-entry",(-621761444),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"format-entry","format-entry",(-621761444),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(385),(385),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"format-entry","format-entry",(-621761444),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),null,(cljs.core.truth_(ajax.core.get_format)?ajax.core.get_format.cljs$lang$test:null)])));})()
;

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return ajax.core.get_format;},new cljs.core.Symbol("ajax.core","get-format","ajax.core/get-format",(1230533538),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"get-format","get-format",(2101142741),null),"ajax/core.cljc",(27),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"format-entry","format-entry",(-621761444),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"format-entry","format-entry",(-621761444),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(385),(385),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"format-entry","format-entry",(-621761444),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),null,(cljs.core.truth_(ajax.core.get_format)?ajax.core.get_format.cljs$lang$test:null)]));
(function (){
ajax.core.get_accept_entries = (function ajax$core$get_accept_entries(var_args){
var args254 = [];
var len__24987__auto___257 = arguments.length;
var i__24988__auto___258 = (0);
while(true){
if((i__24988__auto___258 < len__24987__auto___257)){
args254.push((arguments[i__24988__auto___258]));

var G__259 = (i__24988__auto___258 + (1));
i__24988__auto___258 = G__259;
continue;
} else {
}
break;
}

var G__256 = args254.length;
switch (G__256) {
case (2):
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (1):
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args254.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return ajax.core.get_accept_entries;},new cljs.core.Symbol("ajax.core","get-accept-entries","ajax.core/get-accept-entries",(-996039302),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"get-accept-entries","get-accept-entries",(-783986003),null),"ajax/core.cljc",(35),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"format-entry","format-entry",(-621761444),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"format-entry","format-entry",(-621761444),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(396),(396),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"format-entry","format-entry",(-621761444),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),null,(cljs.core.truth_(ajax.core.get_accept_entries)?ajax.core.get_accept_entries.cljs$lang$test:null)])));})()
;

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",(-508222634)).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",(-508222634)).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});
});

ajax.core.get_accept_entries.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return ajax.core.get_accept_entries;},new cljs.core.Symbol("ajax.core","get-accept-entries","ajax.core/get-accept-entries",(-996039302),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"get-accept-entries","get-accept-entries",(-783986003),null),"ajax/core.cljc",(35),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"format-entry","format-entry",(-621761444),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"format-entry","format-entry",(-621761444),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(396),(396),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"format-entry","format-entry",(-621761444),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),null,(cljs.core.truth_(ajax.core.get_accept_entries)?ajax.core.get_accept_entries.cljs$lang$test:null)]));
(function (){
ajax.core.content_type_matches = (function ajax$core$content_type_matches(var_args){
var args261 = [];
var len__24987__auto___264 = arguments.length;
var i__24988__auto___265 = (0);
while(true){
if((i__24988__auto___265 < len__24987__auto___264)){
args261.push((arguments[i__24988__auto___265]));

var G__266 = (i__24988__auto___265 + (1));
i__24988__auto___265 = G__266;
continue;
} else {
}
break;
}

var G__263 = args261.length;
switch (G__263) {
case (2):
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (1):
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args261.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return ajax.core.content_type_matches;},new cljs.core.Symbol("ajax.core","content-type-matches","ajax.core/content-type-matches",(-1279298522),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"content-type-matches","content-type-matches",(-941887661),null),"ajax/core.cljc",(37),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"String","String",(-2070057435),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"accept","accept",(-780305338),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"String","String",(-2070057435),null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"String","String",(-2070057435),null)], null))], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"String","String",(-2070057435),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"accept","accept",(-780305338),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"String","String",(-2070057435),null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"String","String",(-2070057435),null)], null))], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(404),(404),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"String","String",(-2070057435),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"accept","accept",(-780305338),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"String","String",(-2070057435),null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"String","String",(-2070057435),null)], null))], null)),null,(cljs.core.truth_(ajax.core.content_type_matches)?ajax.core.content_type_matches.cljs$lang$test:null)])));})()
;

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2 = (function (content_type,accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.content_type_matches.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return ajax.core.content_type_matches;},new cljs.core.Symbol("ajax.core","content-type-matches","ajax.core/content-type-matches",(-1279298522),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"content-type-matches","content-type-matches",(-941887661),null),"ajax/core.cljc",(37),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"String","String",(-2070057435),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"accept","accept",(-780305338),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"String","String",(-2070057435),null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"String","String",(-2070057435),null)], null))], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"String","String",(-2070057435),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"accept","accept",(-780305338),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"String","String",(-2070057435),null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"String","String",(-2070057435),null)], null))], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(404),(404),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"String","String",(-2070057435),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"accept","accept",(-780305338),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"String","String",(-2070057435),null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"String","String",(-2070057435),null)], null))], null)),null,(cljs.core.truth_(ajax.core.content_type_matches)?ajax.core.content_type_matches.cljs$lang$test:null)]));
(function (){
ajax.core.detect_content_type = (function ajax$core$detect_content_type(var_args){
var args268 = [];
var len__24987__auto___271 = arguments.length;
var i__24988__auto___272 = (0);
while(true){
if((i__24988__auto___272 < len__24987__auto___271)){
args268.push((arguments[i__24988__auto___272]));

var G__273 = (i__24988__auto___272 + (1));
i__24988__auto___272 = G__273;
continue;
} else {
}
break;
}

var G__270 = args268.length;
switch (G__270) {
case (3):
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (2):
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (1):
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args268.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return ajax.core.detect_content_type;},new cljs.core.Symbol("ajax.core","detect-content-type","ajax.core/detect-content-type",(117681295),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"detect-content-type","detect-content-type",(455025184),null),"ajax/core.cljc",(36),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null),new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"format-entry","format-entry",(-621761444),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null),new cljs.core.Symbol(null,"request","request",(-881481046),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null),new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"format-entry","format-entry",(-621761444),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null),new cljs.core.Symbol(null,"request","request",(-881481046),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(409),(409),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null),new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"format-entry","format-entry",(-621761444),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null),new cljs.core.Symbol(null,"request","request",(-881481046),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null)], null)),null,(cljs.core.truth_(ajax.core.detect_content_type)?ajax.core.detect_content_type.cljs$lang$test:null)])));})()
;

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,request){
return (function (format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return ajax.core.detect_content_type;},new cljs.core.Symbol("ajax.core","detect-content-type","ajax.core/detect-content-type",(117681295),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"detect-content-type","detect-content-type",(455025184),null),"ajax/core.cljc",(36),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null),new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"format-entry","format-entry",(-621761444),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null),new cljs.core.Symbol(null,"request","request",(-881481046),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null),new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"format-entry","format-entry",(-621761444),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null),new cljs.core.Symbol(null,"request","request",(-881481046),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(409),(409),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null),new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"format-entry","format-entry",(-621761444),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null),new cljs.core.Symbol(null,"request","request",(-881481046),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content-type","content-type",(1132308893),null)], null)),null,(cljs.core.truth_(ajax.core.detect_content_type)?ajax.core.detect_content_type.cljs$lang$test:null)]));
(function (){
ajax.core.get_default_format = (function ajax$core$get_default_format(response,p__275){
var map__278 = p__275;
var map__278__$1 = ((((!((map__278 == null)))?((((map__278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__278.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__278):map__278);
var request = map__278__$1;
var response_format = cljs.core.get.call(null,map__278__$1,new cljs.core.Keyword(null,"response-format","response-format",(1664465322)));
var f = ajax.core.detect_content_type.call(null,ajax.core.get_content_type.call(null,response),request);
return ajax.core.get_format.call(null,request,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
}); return (
new cljs.core.Var(function(){return ajax.core.get_default_format;},new cljs.core.Symbol("ajax.core","get-default-format","ajax.core/get-default-format",(-409703888),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"get-default-format","get-default-format",(-763833881),null),"ajax/core.cljc",(25),(1),(414),(414),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"response","response",(572107335),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"response-format","response-format",(-989970447),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)], null)),null,(cljs.core.truth_(ajax.core.get_default_format)?ajax.core.get_default_format.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var args280 = [];
var len__24987__auto___283 = arguments.length;
var i__24988__auto___284 = (0);
while(true){
if((i__24988__auto___284 < len__24987__auto___283)){
args280.push((arguments[i__24988__auto___284]));

var G__285 = (i__24988__auto___284 + (1));
i__24988__auto___284 = G__285;
continue;
} else {
}
break;
}

var G__282 = args280.length;
switch (G__282) {
case (2):
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (1):
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args280.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return ajax.core.detect_response_format_read;},new cljs.core.Symbol("ajax.core","detect-response-format-read","ajax.core/detect-response-format-read",(1618931194),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"detect-response-format-read","detect-response-format-read",(-1667590135),null),"ajax/core.cljc",(44),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"response","response",(572107335),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"response","response",(572107335),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(422),(422),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"response","response",(572107335),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),null,(cljs.core.truth_(ajax.core.detect_response_format_read)?ajax.core.detect_response_format_read.cljs$lang$test:null)])));})()
;

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (request,response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",(1140058661)).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",(1140058661)).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return ajax.core.detect_response_format_read;},new cljs.core.Symbol("ajax.core","detect-response-format-read","ajax.core/detect-response-format-read",(1618931194),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"detect-response-format-read","detect-response-format-read",(-1667590135),null),"ajax/core.cljc",(44),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"response","response",(572107335),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"response","response",(572107335),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(422),(422),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null),new cljs.core.Symbol(null,"response","response",(572107335),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),null,(cljs.core.truth_(ajax.core.detect_response_format_read)?ajax.core.detect_response_format_read.cljs$lang$test:null)]));
(function (){
ajax.core.accept_header = (function ajax$core$accept_header(p__287){
var map__290 = p__287;
var map__290__$1 = ((((!((map__290 == null)))?((((map__290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290):map__290);
var request = map__290__$1;
var response_format = cljs.core.get.call(null,map__290__$1,new cljs.core.Keyword(null,"response-format","response-format",(1664465322)));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return cljs.core.mapcat.call(null,ajax.core.get_accept_entries.call(null,request),response_format);
} else {
return ajax.core.get_accept_entries.call(null,request,response_format);
}
}); return (
new cljs.core.Var(function(){return ajax.core.accept_header;},new cljs.core.Symbol("ajax.core","accept-header","ajax.core/accept-header",(762404468),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"accept-header","accept-header",(-648227903),null),"ajax/core.cljc",(20),(1),(427),(427),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"response-format","response-format",(-989970447),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)], null)),null,(cljs.core.truth_(ajax.core.accept_header)?ajax.core.accept_header.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var args292 = [];
var len__24987__auto___295 = arguments.length;
var i__24988__auto___296 = (0);
while(true){
if((i__24988__auto___296 < len__24987__auto___295)){
args292.push((arguments[i__24988__auto___296]));

var G__297 = (i__24988__auto___296 + (1));
i__24988__auto___296 = G__297;
continue;
} else {
}
break;
}

var G__294 = args292.length;
switch (G__294) {
case (0):
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args292.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return ajax.core.detect_response_format;},new cljs.core.Symbol("ajax.core","detect-response-format","ajax.core/detect-response-format",(1220704017),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"detect-response-format","detect-response-format",(1017515132),null),"ajax/core.cljc",(29),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(432),(432),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(ajax.core.detect_response_format)?ajax.core.detect_response_format.cljs$lang$test:null)])));})()
;

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-format","response-format",(1664465322)),ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header.call(null,opts);
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",(1140058661)),ajax.core.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",(-1306924766)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("(from "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(accept),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),new cljs.core.Keyword(null,"content-type","content-type",(-508222634)),accept], null));
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return ajax.core.detect_response_format;},new cljs.core.Symbol("ajax.core","detect-response-format","ajax.core/detect-response-format",(1220704017),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"detect-response-format","detect-response-format",(1017515132),null),"ajax/core.cljc",(29),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(432),(432),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(ajax.core.detect_response_format)?ajax.core.detect_response_format.cljs$lang$test:null)]));
(function (){
ajax.core.get_response_format = (function ajax$core$get_response_format(p__299){
var map__302 = p__299;
var map__302__$1 = ((((!((map__302 == null)))?((((map__302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__302):map__302);
var opts = map__302__$1;
var response_format = cljs.core.get.call(null,map__302__$1,new cljs.core.Keyword(null,"response-format","response-format",(1664465322)));
if((response_format instanceof ajax.core.ResponseFormat)){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return ajax.core.detect_response_format.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",(1140058661)),response_format,new cljs.core.Keyword(null,"description","description",(-1428560544)),"custom",new cljs.core.Keyword(null,"content-type","content-type",(-508222634)),"*/*"], null));
} else {
return ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
}); return (
new cljs.core.Var(function(){return ajax.core.get_response_format;},new cljs.core.Symbol("ajax.core","get-response-format","ajax.core/get-response-format",(-497637695),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"get-response-format","get-response-format",(374004652),null),"ajax/core.cljc",(26),(1),(443),(443),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"response-format","response-format",(-989970447),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),null,(cljs.core.truth_(ajax.core.get_response_format)?ajax.core.get_response_format.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
}); return (
new cljs.core.Var(function(){return ajax.core.normalize_method;},new cljs.core.Symbol("ajax.core","normalize-method","ajax.core/normalize-method",(2018900928),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"normalize-method","normalize-method",(1953907063),null),"ajax/core.cljc",(23),(1),(456),(456),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"method","method",(1696235119),null)], null)),null,(cljs.core.truth_(ajax.core.normalize_method)?ajax.core.normalize_method.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.js_handler = (function ajax$core$js_handler(var_args){
var args304 = [];
var len__24987__auto___307 = arguments.length;
var i__24988__auto___308 = (0);
while(true){
if((i__24988__auto___308 < len__24987__auto___307)){
args304.push((arguments[i__24988__auto___308]));

var G__309 = (i__24988__auto___308 + (1));
i__24988__auto___308 = G__309;
continue;
} else {
}
break;
}

var G__306 = args304.length;
switch (G__306) {
case (3):
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (2):
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (1):
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args304.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return ajax.core.js_handler;},new cljs.core.Symbol("ajax.core","js-handler","ajax.core/js-handler",(468100),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"js-handler","js-handler",(204198865),null),"ajax/core.cljc",(27),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",(1444934915),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null),new cljs.core.Symbol(null,"response","response",(572107335),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",(1444934915),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",(1444934915),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",(1444934915),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null),new cljs.core.Symbol(null,"response","response",(572107335),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",(1444934915),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",(1444934915),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(461),(461),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",(1444934915),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null),new cljs.core.Symbol(null,"response","response",(572107335),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",(1444934915),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",(1444934915),null)], null)),null,(cljs.core.truth_(ajax.core.js_handler)?ajax.core.js_handler.cljs$lang$test:null)])));})()
;

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (handler,interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (handler,interceptors){
return (function (response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return (function (interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return ajax.core.js_handler;},new cljs.core.Symbol("ajax.core","js-handler","ajax.core/js-handler",(468100),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"js-handler","js-handler",(204198865),null),"ajax/core.cljc",(27),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",(1444934915),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null),new cljs.core.Symbol(null,"response","response",(572107335),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",(1444934915),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",(1444934915),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",(1444934915),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null),new cljs.core.Symbol(null,"response","response",(572107335),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",(1444934915),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",(1444934915),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(461),(461),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",(1444934915),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null),new cljs.core.Symbol(null,"response","response",(572107335),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",(1444934915),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",(1444934915),null)], null)),null,(cljs.core.truth_(ajax.core.js_handler)?ajax.core.js_handler.cljs$lang$test:null)]));
(function (){
ajax.core.base_handler = (function ajax$core$base_handler(interceptors,p__311){
var map__314 = p__311;
var map__314__$1 = ((((!((map__314 == null)))?((((map__314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__314):map__314);
var handler = cljs.core.get.call(null,map__314__$1,new cljs.core.Keyword(null,"handler","handler",(-195596612)));
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.call(null,handler,interceptors);
} else {
return ajax.core.throw_error.call(null,"No ajax handler provided.");
}
}); return (
new cljs.core.Var(function(){return ajax.core.base_handler;},new cljs.core.Symbol("ajax.core","base-handler","ajax.core/base-handler",(1810410191),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"base-handler","base-handler",(532955066),null),"ajax/core.cljc",(19),(1),(475),(475),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",(1444934915),null)], null)], null)], null)),null,(cljs.core.truth_(ajax.core.base_handler)?ajax.core.base_handler.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.core.ProcessGet(ajax.core.params_to_str,null,null,null)),(new ajax.core.DirectSubmission(null,null,null)),(new ajax.core.ApplyRequestFormat(null,null,null))], null); return (
new cljs.core.Var(function(){return ajax.core.request_interceptors;},new cljs.core.Symbol("ajax.core","request-interceptors","ajax.core/request-interceptors",(1701969393),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"request-interceptors","request-interceptors",(-1852471130),null),"ajax/core.cljc",(26),(1),(480),(480),cljs.core.List.EMPTY,null,(cljs.core.truth_(ajax.core.request_interceptors)?ajax.core.request_interceptors.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.default_interceptors = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY); return (
new cljs.core.Var(function(){return ajax.core.default_interceptors;},new cljs.core.Symbol("ajax.core","default-interceptors","ajax.core/default-interceptors",(-559960448),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"default-interceptors","default-interceptors",(-893771721),null),"ajax/core.cljc",(26),(1),(482),(482),cljs.core.List.EMPTY,null,(cljs.core.truth_(ajax.core.default_interceptors)?ajax.core.default_interceptors.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.normalize_request = (function ajax$core$normalize_request(request){
var response_format = ajax.core.get_response_format.call(null,request);
return cljs.core.update.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"method","method",(55703592)),ajax.core.normalize_method),new cljs.core.Keyword(null,"interceptors","interceptors",(-1546782951)),((function (response_format){
return (function (p1__5_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__23200__auto__ = p1__5_SHARP_;
if(cljs.core.truth_(or__23200__auto__)){
return or__23200__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_interceptors);
}
})(),ajax.core.request_interceptors);
});})(response_format))
);
}); return (
new cljs.core.Var(function(){return ajax.core.normalize_request;},new cljs.core.Symbol("ajax.core","normalize-request","ajax.core/normalize-request",(1930651425),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"normalize-request","normalize-request",(1198581874),null),"ajax/core.cljc",(24),(1),(484),(484),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),null,(cljs.core.truth_(ajax.core.normalize_request)?ajax.core.normalize_request.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.new_default_api = (function ajax$core$new_default_api(){
return (new goog.net.XhrIo());
}); return (
new cljs.core.Var(function(){return ajax.core.new_default_api;},new cljs.core.Symbol("ajax.core","new-default-api","ajax.core/new-default-api",(-1592948559),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"new-default-api","new-default-api",(-1255664116),null),"ajax/core.cljc",(22),(1),(493),(493),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ajax.core.new_default_api)?ajax.core.new_default_api.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.raw_ajax_request = (function ajax$core$raw_ajax_request(p__316){
var map__319 = p__316;
var map__319__$1 = ((((!((map__319 == null)))?((((map__319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__319.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__319):map__319);
var request = map__319__$1;
var interceptors = cljs.core.get.call(null,map__319__$1,new cljs.core.Keyword(null,"interceptors","interceptors",(-1546782951)));
var request__$1 = cljs.core.reduce.call(null,ajax.core.process_request,request,interceptors);
var handler = ajax.core.base_handler.call(null,cljs.core.reverse.call(null,interceptors),request__$1);
var api = (function (){var or__23200__auto__ = new cljs.core.Keyword(null,"api","api",(-899839580)).cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__23200__auto__)){
return or__23200__auto__;
} else {
return ajax.core.new_default_api.call(null);
}
})();
return ajax.protocols._js_ajax_request.call(null,api,request__$1,handler);
}); return (
new cljs.core.Var(function(){return ajax.core.raw_ajax_request;},new cljs.core.Symbol("ajax.core","raw-ajax-request","ajax.core/raw-ajax-request",(486133713),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"raw-ajax-request","raw-ajax-request",(550777478),null),"ajax/core.cljc",(23),(1),(497),(497),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)], null)),null,(cljs.core.truth_(ajax.core.raw_ajax_request)?ajax.core.raw_ajax_request.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.ajax_request = (function ajax$core$ajax_request(request){
return ajax.core.raw_ajax_request.call(null,ajax.core.normalize_request.call(null,request));
}); return (
new cljs.core.Var(function(){return ajax.core.ajax_request;},new cljs.core.Symbol("ajax.core","ajax-request","ajax.core/ajax-request",(-913943903),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"ajax-request","ajax-request",(-1248141866),null),"ajax/core.cljc",(19),(1),(503),(503),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",(-881481046),null)], null)),null,(cljs.core.truth_(ajax.core.ajax_request)?ajax.core.ajax_request.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",(-1857649168)),format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.call(null,format_params);
} else {
var G__322 = format;
var G__322__$1 = (((G__322 instanceof cljs.core.Keyword))?G__322.fqn:null);
switch (G__322__$1) {
case "transit":
return ajax.core.transit_request_format.call(null,format_params);

break;
case "json":
return ajax.core.json_request_format.call(null);

break;
case "text":
return ajax.core.text_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "url":
return ajax.core.url_request_format.call(null);

break;
default:
return null;

}

}
}
}
}); return (
new cljs.core.Var(function(){return ajax.core.keyword_request_format;},new cljs.core.Symbol("ajax.core","keyword-request-format","ajax.core/keyword-request-format",(-1533414126),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"keyword-request-format","keyword-request-format",(-1467651969),null),"ajax/core.cljc",(29),(1),(508),(508),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"format","format",(333606761),null),new cljs.core.Symbol(null,"format-params","format-params",(1680465998),null)], null)),null,(cljs.core.truth_(ajax.core.keyword_request_format)?ajax.core.keyword_request_format.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.keyword_response_format_element = (function ajax$core$keyword_response_format_element(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,format),ajax.core.keyword_response_format_element.call(null,cljs.core.second.call(null,format),format_params)], null);
} else {
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",(1140058661)),format,new cljs.core.Keyword(null,"description","description",(-1428560544)),"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.call(null);
} else {
var G__325 = format;
var G__325__$1 = (((G__325 instanceof cljs.core.Keyword))?G__325.fqn:null);
switch (G__325__$1) {
case "transit":
return ajax.core.transit_response_format.call(null,format_params);

break;
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "text":
return ajax.core.text_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
case "detect":
return ajax.core.detect_response_format.call(null);

break;
default:
return null;

}

}
}
}
}
}); return (
new cljs.core.Var(function(){return ajax.core.keyword_response_format_element;},new cljs.core.Symbol("ajax.core","keyword-response-format-element","ajax.core/keyword-response-format-element",(1627402676),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"keyword-response-format-element","keyword-response-format-element",(2129506059),null),"ajax/core.cljc",(38),(1),(521),(521),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"format","format",(333606761),null),new cljs.core.Symbol(null,"format-params","format-params",(1680465998),null)], null)),null,(cljs.core.truth_(ajax.core.keyword_response_format_element)?ajax.core.keyword_response_format_element.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__6_SHARP_){
return ajax.core.keyword_response_format_element.call(null,p1__6_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_element.call(null,format,format_params);
}
}); return (
new cljs.core.Var(function(){return ajax.core.keyword_response_format;},new cljs.core.Symbol("ajax.core","keyword-response-format","ajax.core/keyword-response-format",(-280285145),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"keyword-response-format","keyword-response-format",(-76108424),null),"ajax/core.cljc",(30),(1),(537),(537),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"format","format",(333606761),null),new cljs.core.Symbol(null,"format-params","format-params",(1680465998),null)], null)),null,(cljs.core.truth_(ajax.core.keyword_response_format)?ajax.core.keyword_response_format.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.print_response = (function ajax$core$print_response(response){
return cljs.core.println.call(null,"CLJS-AJAX response:",response);
}); return (
new cljs.core.Var(function(){return ajax.core.print_response;},new cljs.core.Symbol("ajax.core","print-response","ajax.core/print-response",(565677842),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"print-response","print-response",(765098465),null),"ajax/core.cljc",(21),(1),(544),(544),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"response","response",(572107335),null)], null)),null,(cljs.core.truth_(ajax.core.print_response)?ajax.core.print_response.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.default_handler = cljs.core.atom.call(null,ajax.core.print_response); return (
new cljs.core.Var(function(){return ajax.core.default_handler;},new cljs.core.Symbol("ajax.core","default-handler","ajax.core/default-handler",(686064275),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"default-handler","default-handler",(612372320),null),"ajax/core.cljc",(21),(1),(547),(547),cljs.core.List.EMPTY,null,(cljs.core.truth_(ajax.core.default_handler)?ajax.core.default_handler.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.print_error_response = (function ajax$core$print_error_response(response){
if(typeof console !== 'undefined'){
return console.error(response);
} else {
if(typeof window !== 'undefined'){
return window.alert([cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)].join(''));
} else {
return cljs.core.println.call(null,"CLJS-AJAX ERROR:",response);

}
}
}); return (
new cljs.core.Var(function(){return ajax.core.print_error_response;},new cljs.core.Symbol("ajax.core","print-error-response","ajax.core/print-error-response",(976630800),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"print-error-response","print-error-response",(236109511),null),"ajax/core.cljc",(27),(1),(549),(549),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"response","response",(572107335),null)], null)),null,(cljs.core.truth_(ajax.core.print_error_response)?ajax.core.print_error_response.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.default_error_handler = cljs.core.atom.call(null,ajax.core.print_error_response); return (
new cljs.core.Var(function(){return ajax.core.default_error_handler;},new cljs.core.Symbol("ajax.core","default-error-handler","ajax.core/default-error-handler",(-917328433),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"default-error-handler","default-error-handler",(-583607654),null),"ajax/core.cljc",(27),(1),(555),(555),cljs.core.List.EMPTY,null,(cljs.core.truth_(ajax.core.default_error_handler)?ajax.core.default_error_handler.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.transform_handler = (function ajax$core$transform_handler(p__327){
var map__337 = p__327;
var map__337__$1 = ((((!((map__337 == null)))?((((map__337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__337.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__337):map__337);
var handler = cljs.core.get.call(null,map__337__$1,new cljs.core.Keyword(null,"handler","handler",(-195596612)));
var error_handler = cljs.core.get.call(null,map__337__$1,new cljs.core.Keyword(null,"error-handler","error-handler",(-484945776)));
var finally$ = cljs.core.get.call(null,map__337__$1,new cljs.core.Keyword(null,"finally","finally",(1589088705)));
var h = (function (){var or__23200__auto__ = handler;
if(cljs.core.truth_(or__23200__auto__)){
return or__23200__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_handler);
}
})();
var e = (function (){var or__23200__auto__ = error_handler;
if(cljs.core.truth_(or__23200__auto__)){
return or__23200__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_error_handler);
}
})();
return ((function (h,e,map__337,map__337__$1,handler,error_handler,finally$){
return (function ajax$core$transform_handler_$_easy_handler(p__339){
var vec__343 = p__339;
var ok = cljs.core.nth.call(null,vec__343,(0),null);
var result = cljs.core.nth.call(null,vec__343,(1),null);
(cljs.core.truth_(ok)?h:e).call(null,result);

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(h,e,map__337,map__337__$1,handler,error_handler,finally$))
}); return (
new cljs.core.Var(function(){return ajax.core.transform_handler;},new cljs.core.Symbol("ajax.core","transform-handler","ajax.core/transform-handler",(309922879),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"transform-handler","transform-handler",(509969104),null),"ajax/core.cljc",(24),(1),(558),(558),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",(1444934915),null),new cljs.core.Symbol(null,"error-handler","error-handler",(1155585751),null),new cljs.core.Symbol(null,"finally","finally",(-1065347064),null)], null)], null)], null)),null,(cljs.core.truth_(ajax.core.transform_handler)?ajax.core.transform_handler.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.transform_opts = (function ajax$core$transform_opts(p__346){
var map__349 = p__346;
var map__349__$1 = ((((!((map__349 == null)))?((((map__349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__349.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__349):map__349);
var opts = map__349__$1;
var method = cljs.core.get.call(null,map__349__$1,new cljs.core.Keyword(null,"method","method",(55703592)));
var format = cljs.core.get.call(null,map__349__$1,new cljs.core.Keyword(null,"format","format",(-1306924766)));
var response_format = cljs.core.get.call(null,map__349__$1,new cljs.core.Keyword(null,"response-format","response-format",(1664465322)));
var params = cljs.core.get.call(null,map__349__$1,new cljs.core.Keyword(null,"params","params",(710516235)));
var body = cljs.core.get.call(null,map__349__$1,new cljs.core.Keyword(null,"body","body",(-2049205669)));

var needs_format = ((body == null)) && (cljs.core.not_EQ_.call(null,method,"GET"));
var rf = (cljs.core.truth_((function (){var or__23200__auto__ = format;
if(cljs.core.truth_(or__23200__auto__)){
return or__23200__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format.call(null,format,opts):null);
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",(-195596612)),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",(-1306924766)),rf,new cljs.core.Keyword(null,"response-format","response-format",(1664465322)),ajax.core.keyword_response_format.call(null,response_format,opts));
}); return (
new cljs.core.Var(function(){return ajax.core.transform_opts;},new cljs.core.Symbol("ajax.core","transform-opts","ajax.core/transform-opts",(794114527),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"transform-opts","transform-opts",(884389744),null),"ajax/core.cljc",(21),(1),(567),(567),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"method","method",(1696235119),null),new cljs.core.Symbol(null,"format","format",(333606761),null),new cljs.core.Symbol(null,"response-format","response-format",(-989970447),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),null,(cljs.core.truth_(ajax.core.transform_opts)?ajax.core.transform_opts.cljs$lang$test:null)])));})()
;
(function (){
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request.call(null,ajax.core.transform_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",(-774711847)),uri,new cljs.core.Keyword(null,"method","method",(55703592)),method)));
}); return (
new cljs.core.Var(function(){return ajax.core.easy_ajax_request;},new cljs.core.Symbol("ajax.core","easy-ajax-request","ajax.core/easy-ajax-request",(2045278512),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"easy-ajax-request","easy-ajax-request",(1976429709),null),"ajax/core.cljc",(24),(1),(582),(582),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"method","method",(1696235119),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(ajax.core.easy_ajax_request)?ajax.core.easy_ajax_request.cljs$lang$test:null)])));})()
;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
(function (){
ajax.core.GET = (function ajax$core$GET(var_args){
var args__24990__auto__ = [];
var len__24987__auto___353 = arguments.length;
var i__24988__auto___354 = (0);
while(true){
if((i__24988__auto___354 < len__24987__auto___353)){
args__24990__auto__.push((arguments[i__24988__auto___354]));

var G__355 = (i__24988__auto___354 + (1));
i__24988__auto___354 = G__355;
continue;
} else {
}
break;
}

var argseq__24991__auto__ = ((((1) < args__24990__auto__.length))?(new cljs.core.IndexedSeq(args__24990__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24991__auto__);
}); return (
new cljs.core.Var(function(){return ajax.core.GET;},new cljs.core.Symbol("ajax.core","GET","ajax.core/GET",(-580027892),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"GET","GET",(-917844743),null),"ajax/core.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(589),(589),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request",(cljs.core.truth_(ajax.core.GET)?ajax.core.GET.cljs$lang$test:null)])));})()
;

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__3__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__3__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__3__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq351){
var G__352 = cljs.core.first.call(null,seq351);
var seq351__$1 = cljs.core.next.call(null,seq351);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__352,seq351__$1);
});

new cljs.core.Var(function(){return ajax.core.GET;},new cljs.core.Symbol("ajax.core","GET","ajax.core/GET",(-580027892),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"GET","GET",(-917844743),null),"ajax/core.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(589),(589),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request",(cljs.core.truth_(ajax.core.GET)?ajax.core.GET.cljs$lang$test:null)]));
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
(function (){
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__24990__auto__ = [];
var len__24987__auto___358 = arguments.length;
var i__24988__auto___359 = (0);
while(true){
if((i__24988__auto___359 < len__24987__auto___358)){
args__24990__auto__.push((arguments[i__24988__auto___359]));

var G__360 = (i__24988__auto___359 + (1));
i__24988__auto___359 = G__360;
continue;
} else {
}
break;
}

var argseq__24991__auto__ = ((((1) < args__24990__auto__.length))?(new cljs.core.IndexedSeq(args__24990__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24991__auto__);
}); return (
new cljs.core.Var(function(){return ajax.core.HEAD;},new cljs.core.Symbol("ajax.core","HEAD","ajax.core/HEAD",(1834834092),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"HEAD","HEAD",(1903810169),null),"ajax/core.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(590),(590),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request",(cljs.core.truth_(ajax.core.HEAD)?ajax.core.HEAD.cljs$lang$test:null)])));})()
;

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__3__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__3__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__3__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq356){
var G__357 = cljs.core.first.call(null,seq356);
var seq356__$1 = cljs.core.next.call(null,seq356);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__357,seq356__$1);
});

new cljs.core.Var(function(){return ajax.core.HEAD;},new cljs.core.Symbol("ajax.core","HEAD","ajax.core/HEAD",(1834834092),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"HEAD","HEAD",(1903810169),null),"ajax/core.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(590),(590),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request",(cljs.core.truth_(ajax.core.HEAD)?ajax.core.HEAD.cljs$lang$test:null)]));
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
(function (){
ajax.core.POST = (function ajax$core$POST(var_args){
var args__24990__auto__ = [];
var len__24987__auto___363 = arguments.length;
var i__24988__auto___364 = (0);
while(true){
if((i__24988__auto___364 < len__24987__auto___363)){
args__24990__auto__.push((arguments[i__24988__auto___364]));

var G__365 = (i__24988__auto___364 + (1));
i__24988__auto___364 = G__365;
continue;
} else {
}
break;
}

var argseq__24991__auto__ = ((((1) < args__24990__auto__.length))?(new cljs.core.IndexedSeq(args__24990__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24991__auto__);
}); return (
new cljs.core.Var(function(){return ajax.core.POST;},new cljs.core.Symbol("ajax.core","POST","ajax.core/POST",(1572763855),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"POST","POST",(1750988384),null),"ajax/core.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(591),(591),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request",(cljs.core.truth_(ajax.core.POST)?ajax.core.POST.cljs$lang$test:null)])));})()
;

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__3__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__3__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__3__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq361){
var G__362 = cljs.core.first.call(null,seq361);
var seq361__$1 = cljs.core.next.call(null,seq361);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__362,seq361__$1);
});

new cljs.core.Var(function(){return ajax.core.POST;},new cljs.core.Symbol("ajax.core","POST","ajax.core/POST",(1572763855),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"POST","POST",(1750988384),null),"ajax/core.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(591),(591),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request",(cljs.core.truth_(ajax.core.POST)?ajax.core.POST.cljs$lang$test:null)]));
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
(function (){
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__24990__auto__ = [];
var len__24987__auto___368 = arguments.length;
var i__24988__auto___369 = (0);
while(true){
if((i__24988__auto___369 < len__24987__auto___368)){
args__24990__auto__.push((arguments[i__24988__auto___369]));

var G__370 = (i__24988__auto___369 + (1));
i__24988__auto___369 = G__370;
continue;
} else {
}
break;
}

var argseq__24991__auto__ = ((((1) < args__24990__auto__.length))?(new cljs.core.IndexedSeq(args__24990__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24991__auto__);
}); return (
new cljs.core.Var(function(){return ajax.core.PUT;},new cljs.core.Symbol("ajax.core","PUT","ajax.core/PUT",(117595477),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"PUT","PUT",(-201468416),null),"ajax/core.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(592),(592),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request",(cljs.core.truth_(ajax.core.PUT)?ajax.core.PUT.cljs$lang$test:null)])));})()
;

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__3__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__3__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__3__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq366){
var G__367 = cljs.core.first.call(null,seq366);
var seq366__$1 = cljs.core.next.call(null,seq366);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__367,seq366__$1);
});

new cljs.core.Var(function(){return ajax.core.PUT;},new cljs.core.Symbol("ajax.core","PUT","ajax.core/PUT",(117595477),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"PUT","PUT",(-201468416),null),"ajax/core.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(592),(592),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request",(cljs.core.truth_(ajax.core.PUT)?ajax.core.PUT.cljs$lang$test:null)]));
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
(function (){
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__24990__auto__ = [];
var len__24987__auto___373 = arguments.length;
var i__24988__auto___374 = (0);
while(true){
if((i__24988__auto___374 < len__24987__auto___373)){
args__24990__auto__.push((arguments[i__24988__auto___374]));

var G__375 = (i__24988__auto___374 + (1));
i__24988__auto___374 = G__375;
continue;
} else {
}
break;
}

var argseq__24991__auto__ = ((((1) < args__24990__auto__.length))?(new cljs.core.IndexedSeq(args__24990__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24991__auto__);
}); return (
new cljs.core.Var(function(){return ajax.core.DELETE;},new cljs.core.Symbol("ajax.core","DELETE","ajax.core/DELETE",(-1115542810),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"DELETE","DELETE",(-965761997),null),"ajax/core.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(593),(593),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request",(cljs.core.truth_(ajax.core.DELETE)?ajax.core.DELETE.cljs$lang$test:null)])));})()
;

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__3__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__3__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__3__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq371){
var G__372 = cljs.core.first.call(null,seq371);
var seq371__$1 = cljs.core.next.call(null,seq371);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__372,seq371__$1);
});

new cljs.core.Var(function(){return ajax.core.DELETE;},new cljs.core.Symbol("ajax.core","DELETE","ajax.core/DELETE",(-1115542810),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"DELETE","DELETE",(-965761997),null),"ajax/core.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(593),(593),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request",(cljs.core.truth_(ajax.core.DELETE)?ajax.core.DELETE.cljs$lang$test:null)]));
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
(function (){
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__24990__auto__ = [];
var len__24987__auto___378 = arguments.length;
var i__24988__auto___379 = (0);
while(true){
if((i__24988__auto___379 < len__24987__auto___378)){
args__24990__auto__.push((arguments[i__24988__auto___379]));

var G__380 = (i__24988__auto___379 + (1));
i__24988__auto___379 = G__380;
continue;
} else {
}
break;
}

var argseq__24991__auto__ = ((((1) < args__24990__auto__.length))?(new cljs.core.IndexedSeq(args__24990__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24991__auto__);
}); return (
new cljs.core.Var(function(){return ajax.core.OPTIONS;},new cljs.core.Symbol("ajax.core","OPTIONS","ajax.core/OPTIONS",(538242386),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"OPTIONS","OPTIONS",(742094783),null),"ajax/core.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(594),(594),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request",(cljs.core.truth_(ajax.core.OPTIONS)?ajax.core.OPTIONS.cljs$lang$test:null)])));})()
;

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__3__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__3__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__3__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq376){
var G__377 = cljs.core.first.call(null,seq376);
var seq376__$1 = cljs.core.next.call(null,seq376);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__377,seq376__$1);
});

new cljs.core.Var(function(){return ajax.core.OPTIONS;},new cljs.core.Symbol("ajax.core","OPTIONS","ajax.core/OPTIONS",(538242386),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"OPTIONS","OPTIONS",(742094783),null),"ajax/core.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(594),(594),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request",(cljs.core.truth_(ajax.core.OPTIONS)?ajax.core.OPTIONS.cljs$lang$test:null)]));
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
(function (){
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__24990__auto__ = [];
var len__24987__auto___383 = arguments.length;
var i__24988__auto___384 = (0);
while(true){
if((i__24988__auto___384 < len__24987__auto___383)){
args__24990__auto__.push((arguments[i__24988__auto___384]));

var G__385 = (i__24988__auto___384 + (1));
i__24988__auto___384 = G__385;
continue;
} else {
}
break;
}

var argseq__24991__auto__ = ((((1) < args__24990__auto__.length))?(new cljs.core.IndexedSeq(args__24990__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24991__auto__);
}); return (
new cljs.core.Var(function(){return ajax.core.TRACE;},new cljs.core.Symbol("ajax.core","TRACE","ajax.core/TRACE",(-532528279),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"TRACE","TRACE",(-64041414),null),"ajax/core.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(595),(595),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request",(cljs.core.truth_(ajax.core.TRACE)?ajax.core.TRACE.cljs$lang$test:null)])));})()
;

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__3__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__3__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__3__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq381){
var G__382 = cljs.core.first.call(null,seq381);
var seq381__$1 = cljs.core.next.call(null,seq381);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__382,seq381__$1);
});

new cljs.core.Var(function(){return ajax.core.TRACE;},new cljs.core.Symbol("ajax.core","TRACE","ajax.core/TRACE",(-532528279),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"TRACE","TRACE",(-64041414),null),"ajax/core.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(595),(595),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request",(cljs.core.truth_(ajax.core.TRACE)?ajax.core.TRACE.cljs$lang$test:null)]));
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
(function (){
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__24990__auto__ = [];
var len__24987__auto___388 = arguments.length;
var i__24988__auto___389 = (0);
while(true){
if((i__24988__auto___389 < len__24987__auto___388)){
args__24990__auto__.push((arguments[i__24988__auto___389]));

var G__390 = (i__24988__auto___389 + (1));
i__24988__auto___389 = G__390;
continue;
} else {
}
break;
}

var argseq__24991__auto__ = ((((1) < args__24990__auto__.length))?(new cljs.core.IndexedSeq(args__24990__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24991__auto__);
}); return (
new cljs.core.Var(function(){return ajax.core.PATCH;},new cljs.core.Symbol("ajax.core","PATCH","ajax.core/PATCH",(-1168388223),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"PATCH","PATCH",(-1233173284),null),"ajax/core.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(596),(596),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request",(cljs.core.truth_(ajax.core.PATCH)?ajax.core.PATCH.cljs$lang$test:null)])));})()
;

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__3__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PATCH",(((f__3__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__3__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq386){
var G__387 = cljs.core.first.call(null,seq386);
var seq386__$1 = cljs.core.next.call(null,seq386);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__387,seq386__$1);
});

new cljs.core.Var(function(){return ajax.core.PATCH;},new cljs.core.Symbol("ajax.core","PATCH","ajax.core/PATCH",(-1168388223),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"PATCH","PATCH",(-1233173284),null),"ajax/core.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(596),(596),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request",(cljs.core.truth_(ajax.core.PATCH)?ajax.core.PATCH.cljs$lang$test:null)]));
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
(function (){
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__24990__auto__ = [];
var len__24987__auto___393 = arguments.length;
var i__24988__auto___394 = (0);
while(true){
if((i__24988__auto___394 < len__24987__auto___393)){
args__24990__auto__.push((arguments[i__24988__auto___394]));

var G__395 = (i__24988__auto___394 + (1));
i__24988__auto___394 = G__395;
continue;
} else {
}
break;
}

var argseq__24991__auto__ = ((((1) < args__24990__auto__.length))?(new cljs.core.IndexedSeq(args__24990__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24991__auto__);
}); return (
new cljs.core.Var(function(){return ajax.core.PURGE;},new cljs.core.Symbol("ajax.core","PURGE","ajax.core/PURGE",(-850838574),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"PURGE","PURGE",(-89476959),null),"ajax/core.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(597),(597),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request",(cljs.core.truth_(ajax.core.PURGE)?ajax.core.PURGE.cljs$lang$test:null)])));})()
;

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__3__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PURGE",(((f__3__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__3__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq391){
var G__392 = cljs.core.first.call(null,seq391);
var seq391__$1 = cljs.core.next.call(null,seq391);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__392,seq391__$1);
});

new cljs.core.Var(function(){return ajax.core.PURGE;},new cljs.core.Symbol("ajax.core","PURGE","ajax.core/PURGE",(-850838574),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.core","ajax.core",(-1363316958),null),new cljs.core.Symbol(null,"PURGE","PURGE",(-89476959),null),"ajax/core.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(597),(597),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",(865819680),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request",(cljs.core.truth_(ajax.core.PURGE)?ajax.core.PURGE.cljs$lang$test:null)]));
