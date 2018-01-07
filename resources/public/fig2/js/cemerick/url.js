// Compiled by ClojureScript 1.9.908 {}
goog.provide('cemerick.url');
goog.require('cljs.core');
goog.require('pathetic.core');
goog.require('clojure.string');
goog.require('goog.Uri');
cemerick.url.url_encode = (function cemerick$url$url_encode(string){
var G__25397 = string;
var G__25397__$1 = (((G__25397 == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25397)].join(''));
var G__25397__$2 = (((G__25397__$1 == null))?null:encodeURIComponent(G__25397__$1));
if((G__25397__$2 == null)){
return null;
} else {
return G__25397__$2.replace("+","%20");
}
});
cemerick.url.url_decode = (function cemerick$url$url_decode(string){
var G__25398 = string;
var G__25398__$1 = (((G__25398 == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25398)].join(''));
if((G__25398__$1 == null)){
return null;
} else {
return decodeURIComponent(G__25398__$1);
}
});
cemerick.url.map__GT_query = (function cemerick$url$map__GT_query(m){
var G__25399 = cljs.core.seq.call(null,m);
var G__25399__$1 = (((G__25399 == null))?null:cljs.core.sort.call(null,G__25399));
var G__25399__$2 = (((G__25399__$1 == null))?null:cljs.core.map.call(null,((function (G__25399,G__25399__$1){
return (function (p__25400){
var vec__25401 = p__25400;
var k = cljs.core.nth.call(null,vec__25401,(0),null);
var v = cljs.core.nth.call(null,vec__25401,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cemerick.url.url_encode.call(null,cljs.core.name.call(null,k)),"=",cemerick.url.url_encode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''))], null);
});})(G__25399,G__25399__$1))
,G__25399__$1));
var G__25399__$3 = (((G__25399__$2 == null))?null:cljs.core.interpose.call(null,"&",G__25399__$2));
var G__25399__$4 = (((G__25399__$3 == null))?null:cljs.core.flatten.call(null,G__25399__$3));
if((G__25399__$4 == null)){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.str,G__25399__$4);
}
});
cemerick.url.split_param = (function cemerick$url$split_param(param){
return cljs.core.take.call(null,(2),cljs.core.concat.call(null,clojure.string.split.call(null,param,/=/),cljs.core.repeat.call(null,"")));
});
cemerick.url.query__GT_map = (function cemerick$url$query__GT_map(qstr){
if(!(clojure.string.blank_QMARK_.call(null,qstr))){
var G__25404 = clojure.string.split.call(null,qstr,/&/);
var G__25404__$1 = (((G__25404 == null))?null:cljs.core.seq.call(null,G__25404));
var G__25404__$2 = (((G__25404__$1 == null))?null:cljs.core.mapcat.call(null,cemerick.url.split_param,G__25404__$1));
var G__25404__$3 = (((G__25404__$2 == null))?null:cljs.core.map.call(null,cemerick.url.url_decode,G__25404__$2));
if((G__25404__$3 == null)){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.hash_map,G__25404__$3);
}
} else {
return null;
}
});
cemerick.url.port_str = (function cemerick$url$port_str(protocol,port){
if((cljs.core.not_EQ_.call(null,null,port)) && (cljs.core.not_EQ_.call(null,(-1),port)) && (!(((port === (80))) && (cljs.core._EQ_.call(null,protocol,"http")))) && (!(((port === (443))) && (cljs.core._EQ_.call(null,protocol,"https"))))){
return [":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join('');
} else {
return null;
}
});
cemerick.url.url_creds = (function cemerick$url$url_creds(username,password){
if(cljs.core.truth_(username)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(username),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(password)].join('');
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cemerick.url.Object}
 * @implements {cljs.core.ICounted}
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
cemerick.url.URL = (function (protocol,username,password,host,port,path,query,anchor,__meta,__extmap,__hash){
this.protocol = protocol;
this.username = username;
this.password = password;
this.host = host;
this.port = port;
this.path = path;
this.query = query;
this.anchor = anchor;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cemerick.url.URL.prototype.toString = (function (){
var self__ = this;
var this$ = this;
var creds = cemerick.url.url_creds.call(null,self__.username,self__.password);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.protocol),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(creds),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(creds)?"@":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cemerick.url.port_str.call(null,self__.protocol,self__.port)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.seq.call(null,self__.query))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("?"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof self__.query === 'string')?self__.query:cemerick.url.map__GT_query.call(null,self__.query)))].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(self__.anchor)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.anchor)].join(''):null))].join('');
});


cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9051__auto__,k__9052__auto__){
var self__ = this;
var this__9051__auto____$1 = this;
return this__9051__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9052__auto__,null);
});


cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9053__auto__,k25406,else__9054__auto__){
var self__ = this;
var this__9053__auto____$1 = this;
var G__25410 = k25406;
var G__25410__$1 = (((G__25410 instanceof cljs.core.Keyword))?G__25410.fqn:null);
switch (G__25410__$1) {
case "protocol":
return self__.protocol;

break;
case "username":
return self__.username;

break;
case "password":
return self__.password;

break;
case "host":
return self__.host;

break;
case "port":
return self__.port;

break;
case "path":
return self__.path;

break;
case "query":
return self__.query;

break;
case "anchor":
return self__.anchor;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25406,else__9054__auto__);

}
});


cemerick.url.URL.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9065__auto__,writer__9066__auto__,opts__9067__auto__){
var self__ = this;
var this__9065__auto____$1 = this;
var pr_pair__9068__auto__ = ((function (this__9065__auto____$1){
return (function (keyval__9069__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9066__auto__,cljs.core.pr_writer,""," ","",opts__9067__auto__,keyval__9069__auto__);
});})(this__9065__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9066__auto__,pr_pair__9068__auto__,"#cemerick.url.URL{",", ","}",opts__9067__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"protocol","protocol",652470118),self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"username","username",1605666410),self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"password","password",417022471),self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"anchor","anchor",1549638489),self__.anchor],null))], null),self__.__extmap));
});


cemerick.url.URL.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25405){
var self__ = this;
var G__25405__$1 = this;
return (new cljs.core.RecordIter((0),G__25405__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"anchor","anchor",1549638489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


cemerick.url.URL.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9049__auto__){
var self__ = this;
var this__9049__auto____$1 = this;
return self__.__meta;
});


cemerick.url.URL.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9046__auto__){
var self__ = this;
var this__9046__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,self__.__hash));
});


cemerick.url.URL.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9055__auto__){
var self__ = this;
var this__9055__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});


cemerick.url.URL.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9047__auto__){
var self__ = this;
var this__9047__auto____$1 = this;
var h__8819__auto__ = self__.__hash;
if(!((h__8819__auto__ == null))){
return h__8819__auto__;
} else {
var h__8819__auto____$1 = ((function (h__8819__auto__,this__9047__auto____$1){
return (function (coll__9048__auto__){
return (-797987557 ^ cljs.core.hash_unordered_coll.call(null,coll__9048__auto__));
});})(h__8819__auto__,this__9047__auto____$1))
.call(null,this__9047__auto____$1);
self__.__hash = h__8819__auto____$1;

return h__8819__auto____$1;
}
});


cemerick.url.URL.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25407,other25408){
var self__ = this;
var this25407__$1 = this;
return (!((other25408 == null))) && ((this25407__$1.constructor === other25408.constructor)) && (cljs.core._EQ_.call(null,this25407__$1.protocol,other25408.protocol)) && (cljs.core._EQ_.call(null,this25407__$1.username,other25408.username)) && (cljs.core._EQ_.call(null,this25407__$1.password,other25408.password)) && (cljs.core._EQ_.call(null,this25407__$1.host,other25408.host)) && (cljs.core._EQ_.call(null,this25407__$1.port,other25408.port)) && (cljs.core._EQ_.call(null,this25407__$1.path,other25408.path)) && (cljs.core._EQ_.call(null,this25407__$1.query,other25408.query)) && (cljs.core._EQ_.call(null,this25407__$1.anchor,other25408.anchor)) && (cljs.core._EQ_.call(null,this25407__$1.__extmap,other25408.__extmap));
});


cemerick.url.URL.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9060__auto__,k__9061__auto__){
var self__ = this;
var this__9060__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"protocol","protocol",652470118),null,new cljs.core.Keyword(null,"password","password",417022471),null,new cljs.core.Keyword(null,"username","username",1605666410),null,new cljs.core.Keyword(null,"port","port",1534937262),null,new cljs.core.Keyword(null,"host","host",-1558485167),null,new cljs.core.Keyword(null,"anchor","anchor",1549638489),null,new cljs.core.Keyword(null,"query","query",-1288509510),null], null), null),k__9061__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9060__auto____$1),self__.__meta),k__9061__auto__);
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9061__auto__)),null));
}
});


cemerick.url.URL.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9058__auto__,k__9059__auto__,G__25405){
var self__ = this;
var this__9058__auto____$1 = this;
var pred__25411 = cljs.core.keyword_identical_QMARK_;
var expr__25412 = k__9059__auto__;
if(cljs.core.truth_(pred__25411.call(null,new cljs.core.Keyword(null,"protocol","protocol",652470118),expr__25412))){
return (new cemerick.url.URL(G__25405,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25411.call(null,new cljs.core.Keyword(null,"username","username",1605666410),expr__25412))){
return (new cemerick.url.URL(self__.protocol,G__25405,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25411.call(null,new cljs.core.Keyword(null,"password","password",417022471),expr__25412))){
return (new cemerick.url.URL(self__.protocol,self__.username,G__25405,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25411.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),expr__25412))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,G__25405,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25411.call(null,new cljs.core.Keyword(null,"port","port",1534937262),expr__25412))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,G__25405,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25411.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__25412))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,G__25405,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25411.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),expr__25412))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,G__25405,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25411.call(null,new cljs.core.Keyword(null,"anchor","anchor",1549638489),expr__25412))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,G__25405,self__.__meta,self__.__extmap,null));
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9059__auto__,G__25405),null));
}
}
}
}
}
}
}
}
});


cemerick.url.URL.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9063__auto__){
var self__ = this;
var this__9063__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"protocol","protocol",652470118),self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"username","username",1605666410),self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"password","password",417022471),self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"anchor","anchor",1549638489),self__.anchor],null))], null),self__.__extmap));
});


cemerick.url.URL.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9050__auto__,G__25405){
var self__ = this;
var this__9050__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,G__25405,self__.__extmap,self__.__hash));
});


cemerick.url.URL.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9056__auto__,entry__9057__auto__){
var self__ = this;
var this__9056__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9057__auto__)){
return this__9056__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9057__auto__,(0)),cljs.core._nth.call(null,entry__9057__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9056__auto____$1,entry__9057__auto__);
}
});

cemerick.url.URL.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null),new cljs.core.Symbol(null,"username","username",-1048769359,null),new cljs.core.Symbol(null,"password","password",2057553998,null),new cljs.core.Symbol(null,"host","host",82046360,null),new cljs.core.Symbol(null,"port","port",-1119498507,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"query","query",352022017,null),new cljs.core.Symbol(null,"anchor","anchor",-1104797280,null)], null);
});

cemerick.url.URL.cljs$lang$type = true;

cemerick.url.URL.cljs$lang$ctorPrSeq = (function (this__9089__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cemerick.url/URL");
});

cemerick.url.URL.cljs$lang$ctorPrWriter = (function (this__9089__auto__,writer__9090__auto__){
return cljs.core._write.call(null,writer__9090__auto__,"cemerick.url/URL");
});

cemerick.url.__GT_URL = (function cemerick$url$__GT_URL(protocol,username,password,host,port,path,query,anchor){
return (new cemerick.url.URL(protocol,username,password,host,port,path,query,anchor,null,null,null));
});

cemerick.url.map__GT_URL = (function cemerick$url$map__GT_URL(G__25409){
return (new cemerick.url.URL(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(G__25409),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(G__25409),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(G__25409),new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(G__25409),new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(G__25409),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__25409),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(G__25409),new cljs.core.Keyword(null,"anchor","anchor",1549638489).cljs$core$IFn$_invoke$arity$1(G__25409),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__25409,new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"anchor","anchor",1549638489))),null));
});

cemerick.url.translate_default = (function cemerick$url$translate_default(s,old_default,new_default){
if(cljs.core._EQ_.call(null,s,old_default)){
return new_default;
} else {
return s;
}
});
cemerick.url.url_STAR_ = (function cemerick$url$url_STAR_(url){
var url__$1 = (new goog.Uri(url));
var vec__25415 = clojure.string.split.call(null,(function (){var or__8363__auto__ = url__$1.getUserInfo();
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return "";
}
})(),/:/,(2));
var user = cljs.core.nth.call(null,vec__25415,(0),null);
var pass = cljs.core.nth.call(null,vec__25415,(1),null);
return (new cemerick.url.URL(url__$1.getScheme(),(function (){var and__8351__auto__ = cljs.core.seq.call(null,user);
if(and__8351__auto__){
return user;
} else {
return and__8351__auto__;
}
})(),(function (){var and__8351__auto__ = cljs.core.seq.call(null,pass);
if(and__8351__auto__){
return pass;
} else {
return and__8351__auto__;
}
})(),url__$1.getDomain(),cemerick.url.translate_default.call(null,url__$1.getPort(),null,(-1)),pathetic.core.normalize.call(null,url__$1.getPath()),cemerick.url.query__GT_map.call(null,cemerick.url.translate_default.call(null,url__$1.getQuery(),"",null)),cemerick.url.translate_default.call(null,url__$1.getFragment(),"",null),null,null,null));
});
/**
 * Returns a new URL record for the given url string(s).
 * 
 * The first argument must be a base url — either a complete url string, or
 * a pre-existing URL record instance that will serve as the basis for the new
 * URL.  Any additional arguments must be strings, which are interpreted as
 * relative paths that are successively resolved against the base url's path
 * to construct the final :path in the returned URL record. 
 * 
 * This function does not perform any url-encoding.  Use `url-encode` to encode
 * URL path segments as desired before passing them into this fn.
 */
cemerick.url.url = (function cemerick$url$url(var_args){
var G__25421 = arguments.length;
switch (G__25421) {
case 1:
return cemerick.url.url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__9663__auto__ = [];
var len__9640__auto___25423 = arguments.length;
var i__9641__auto___25424 = (0);
while(true){
if((i__9641__auto___25424 < len__9640__auto___25423)){
args_arr__9663__auto__.push((arguments[i__9641__auto___25424]));

var G__25425 = (i__9641__auto___25424 + (1));
i__9641__auto___25424 = G__25425;
continue;
} else {
}
break;
}

var argseq__9664__auto__ = (new cljs.core.IndexedSeq(args_arr__9663__auto__.slice((1)),(0),null));
return cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9664__auto__);

}
});

cemerick.url.url.cljs$core$IFn$_invoke$arity$1 = (function (url){
if((url instanceof cemerick.url.URL)){
return url;
} else {
return cemerick.url.url_STAR_.call(null,url);
}
});

cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic = (function (base_url,path_segments){
var base_url__$1 = (((base_url instanceof cemerick.url.URL))?base_url:cemerick.url.url.call(null,base_url));
return cljs.core.assoc.call(null,base_url__$1,new cljs.core.Keyword(null,"path","path",-188191168),pathetic.core.normalize.call(null,cljs.core.reduce.call(null,pathetic.core.resolve,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(base_url__$1),path_segments)));
});

cemerick.url.url.cljs$lang$applyTo = (function (seq25419){
var G__25420 = cljs.core.first.call(null,seq25419);
var seq25419__$1 = cljs.core.next.call(null,seq25419);
return cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic(G__25420,seq25419__$1);
});

cemerick.url.url.cljs$lang$maxFixedArity = (1);


//# sourceMappingURL=url.js.map
