// Compiled by ClojureScript 1.9.376
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

om.next.cache.Cache.cljs$lang$ctorPrWriter = (function (this__13753__auto__,writer__13754__auto__,opt__13755__auto__){
return cljs.core._write.call(null,writer__13754__auto__,"om.next.cache/Cache");
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

//# sourceURL=om/next/cache.js?rel=1483379752123
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib20vbmV4dC9jYWNoZS5qcz9yZWw9MTQ4MzM3OTc1MjEyMyIsInNvdXJjZXMiOlsiY2FjaGUuY2xqcz9yZWw9MTQ4MzM3OTc1MjEyMyJdLCJsaW5lQ291bnQiOjYzLCJtYXBwaW5ncyI6IjtBQUVBLEFBQUE7Ozs7Ozs7Ozs7QUFBQSxBQUFBLEFBQUEsQUFBQSxvQ0FBQSxwQ0FBU0ksK0NBRUlNLEdBQUdDOztBQUZoQixBQUFBLFlBQUEsUkFFUUY7QUFGUixBQUdJLElBQU1HLG9CQUFHLGdEQUFBLGhEQUFDQyw4QkFBVUYsRUFBRUcsc0ZBQW1CLEtBQUFDO0FBQXpDLEFBQ0UsR0FBSSxDQUFJUCxlQUFLLEFBQVNGO0FBQ3BCLElBQU1VLHFCQUFJLEFBQVFWO0FBQWxCLEFBQ0UsNENBQUEsNUNBQUNZLCtCQUFNWDtrQkFBUFU7QUFBQSxpQ0FBb0IsMkJBQUFBLDNCQUFDRSx3Q0FBT0gsekVBQUssT0FBQ0Ysc0ZBQU1KLEdBQUdFOzs7O0FBQzdDLEFBQUNNLCtCQUFNWCxhQUFNTyxnQkFBTUosR0FBR0U7OztBQUMxQixPQUFPTixnQkFBSUk7OztBQVJmLEFBQUEsQUFBQSxvQ0FBQSxwQ0FBU04sK0NBU0lNOztBQVRiLEFBQUEsWUFBQSxSQVNRRDtBQVRSLEFBVUksK0JBQUEsQUFBQVcseEJBQUNDLGtEQUFLZCxjQUFNRzs7O0FBVmhCLEFBQUEsK0JBQUEsL0JBQVNOO0FBQVQsQUFBQSwwRkFBQSx5REFBQSw0REFBQTs7O0FBQUEsQUFBQSxxQ0FBQSxyQ0FBU0E7O0FBQVQsQUFBQSx3Q0FBQSx4Q0FBU0E7O0FBQVQsQUFBQSw2Q0FBQSxXQUFBSixvQkFBQUMsc0JBQUFDLGxHQUFTRTtBQUFULEFBQUEsT0FBQUQsMkJBQUFGLHNCQUFBOzs7QUFBQTsyQkFBQSwzQkFBU0ksOERBQU9DLElBQUlDLE1BQU1DO0FBQTFCLEFBQUEsWUFBQUosb0JBQWdCRSxJQUFJQyxNQUFNQzs7QUFBMUIsK0RBQUEsMEZBQUEsd0NBQUEsK0RBQUEsa0RBQUEsdURBQUEsd0RBQUEsbUVBQUEsMkRBQUEsMkRBQUEsc0RBQUEsK0RBQUEsK0RBQUEsb0ZBQUEscURBQUEsd0RBQUEsaUZBQUEsMkdBQUEsOEVBQUEsaUVBQUEscUJBQUEsS0FBQSxJQUFBLG1FQUFBLElBQUEsSUFBQSxlQUFBLG1GQUFBLHlEQUFBLDREQUFBLHFFQUFBLEtBQUEsS0FBQSw0Q0FBQSxBQUFBLHdDQUFBLGxFQUFTSCwwQkFBQUE7OztBQUFBRCxBQVlUO3NCQUFBLHRCQUFNa0Isb0RBQU9kO0FBQWIsQUFDRSxZQUFBSixvQkFBQSxHQUFlLHlCQUFBLHpCQUFDbUIsNkRBQVNmOztBQUQzQiwwREFBQSxxRkFBQSx3Q0FBQSxrREFBQSx1REFBQSx3REFBQSxtRUFBQSwyREFBQSxzREFBQSwrREFBQSwrREFBQSxxREFBQSx3REFBQSw4RUFBQSw0REFBQSxxQkFBQSxLQUFBLElBQUEsS0FBQSxLQUFBLGVBQUEsbUZBQUEscUVBQUEsS0FBQSx1Q0FBQSxBQUFBLG1DQUFBLHhEQUFNYyxxQkFBQUEiLCJuYW1lcyI6WyJ0aGlzX18xMzc1M19fYXV0b19fIiwid3JpdGVyX18xMzc1NF9fYXV0b19fIiwib3B0X18xMzc1NV9fYXV0b19fIiwiY2xqcy5jb3JlLy13cml0ZSIsIm9tLm5leHQuY2FjaGUvQ2FjaGUiLCJvbS5uZXh0LmNhY2hlLy0+Q2FjaGUiLCJhcnIiLCJpbmRleCIsInNpemUiLCJ0aGlzIiwiaWQiLCJ4IiwieCciLCJjbGpzLmNvcmUvdmFyeS1tZXRhIiwiY2xqcy5jb3JlL2Fzc29jIiwianMvRGF0ZSIsImlkJyIsInAxX18xIyIsImNsanMuY29yZS9zd2FwISIsImNsanMuY29yZS9kaXNzb2MiLCJjbGpzLmNvcmUvZGVyZWYiLCJjbGpzLmNvcmUvZ2V0Iiwib20ubmV4dC5jYWNoZS9jYWNoZSIsImNsanMuY29yZS9hdG9tIl0sInNvdXJjZXNDb250ZW50IjpbIihucyBvbS5uZXh0LmNhY2hlKVxuXG4oZGVmdHlwZSBDYWNoZSBbYXJyIGluZGV4IHNpemVdXG4gIE9iamVjdFxuICAoYWRkIFt0aGlzIGlkIHhdXG4gICAgKGxldCBbeCcgKHZhcnktbWV0YSB4IGFzc29jIDpjbGllbnQtdGltZSAoanMvRGF0ZS4pKV1cbiAgICAgIChpZiAoPD0gc2l6ZSAoYWxlbmd0aCBhcnIpKVxuICAgICAgICAobGV0IFtpZCcgKC5zaGlmdCBhcnIpXVxuICAgICAgICAgIChzd2FwISBpbmRleCAjKC0+ICUgKGRpc3NvYyBpZCcpIChhc3NvYyBpZCB4JykpKSlcbiAgICAgICAgKHN3YXAhIGluZGV4IGFzc29jIGlkIHgnKSkpXG4gICAgKC5wdXNoIGFyciBpZCkpXG4gIChnZXQgW3RoaXMgaWRdXG4gICAgKGdldCBAaW5kZXggaWQpKSlcblxuKGRlZm4gY2FjaGUgW3NpemVdXG4gIChDYWNoZS4gI2pzIFtdIChhdG9tIHt9KSBzaXplKSlcbiJdfQ==