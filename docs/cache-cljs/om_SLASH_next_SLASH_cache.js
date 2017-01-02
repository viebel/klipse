goog.provide("om.next.cache");

/**
* @constructor
 * @implements {om.next.cache.Object}
*/
om.next.cache.Cache = (function (arr,index,size){
this.arr = arr;
this.index = index;
this.size = size;
})
om.next.cache.Cache.prototype.add = (function (id,x){
var self__ = this;
var this$ = this;
var x_SINGLEQUOTE__22 = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword(null,"client-time","client-time",(-1212214195)),(new Date()));
if((self__.size <= self__.arr.length)){
var id_SINGLEQUOTE__23 = self__.arr.shift();
cljs.core.swap_BANG_.call(null,self__.index,((function (id_SINGLEQUOTE__23,x_SINGLEQUOTE__22,this$){
return (function (p1__1_SHARP_){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,p1__1_SHARP_,id_SINGLEQUOTE__23),id,x_SINGLEQUOTE__22);
});})(id_SINGLEQUOTE__23,x_SINGLEQUOTE__22,this$))
);
} else {
cljs.core.swap_BANG_.call(null,self__.index,cljs.core.assoc,id,x_SINGLEQUOTE__22);
}

return self__.arr.push(id);
});

om.next.cache.Cache.prototype.get = (function (id){
var self__ = this;
var this$ = this;
return cljs.core.get.call(null,cljs.core.deref.call(null,self__.index),id);
});

om.next.cache.Cache.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"arr","arr",(2115492975),null),new cljs.core.Symbol(null,"index","index",(108845612),null),new cljs.core.Symbol(null,"size","size",(-1555742762),null)], null);
});

om.next.cache.Cache.cljs$lang$type = true;

om.next.cache.Cache.cljs$lang$ctorStr = "om.next.cache/Cache";

om.next.cache.Cache.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"om.next.cache/Cache");
});

(function (){
om.next.cache.__GT_Cache = (function om$next$cache$__GT_Cache(arr,index,size){
return (new om.next.cache.Cache(arr,index,size));
}); return (
new cljs.core.Var(function(){return om.next.cache.__GT_Cache;},new cljs.core.Symbol("om.next.cache","->Cache","om.next.cache/->Cache",(1847948887),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("om.next.cache","Object","om.next.cache/Object",(-92158995),null),null], null), null),new cljs.core.Symbol(null,"om.next.cache","om.next.cache",(-1397066205),null),new cljs.core.Symbol(null,"->Cache","->Cache",(1456256894),null),"om/next/cache.cljs",(15),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(3),(3),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"arr","arr",(2115492975),null),new cljs.core.Symbol(null,"index","index",(108845612),null),new cljs.core.Symbol(null,"size","size",(-1555742762),null)], null)),null,null,(cljs.core.truth_(om.next.cache.__GT_Cache)?om.next.cache.__GT_Cache.cljs$lang$test:null)])));})()
;

(function (){
om.next.cache.cache = (function om$next$cache$cache(size){
return (new om.next.cache.Cache([],cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),size));
}); return (
new cljs.core.Var(function(){return om.next.cache.cache;},new cljs.core.Symbol("om.next.cache","cache","om.next.cache/cache",(-14266618),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next.cache","om.next.cache",(-1397066205),null),new cljs.core.Symbol(null,"cache","cache",(403508473),null),"om/next/cache.cljs",(12),(1),(15),(15),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"size","size",(-1555742762),null)], null)),null,(cljs.core.truth_(om.next.cache.cache)?om.next.cache.cache.cljs$lang$test:null)])));})()
;
