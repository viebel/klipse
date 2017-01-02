// Compiled by ClojureScript 1.9.376
goog.provide("om.tempid");

/**
* @constructor
 * @implements {om.tempid.Object}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IPrintWithWriter}
*/
om.tempid.TempId = (function (id,__hash){
this.id = id;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2141192192;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om.tempid.TempId.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});

om.tempid.TempId.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return ((other instanceof om.tempid.TempId)) && (cljs.core._EQ_.call(null,this$__$1.id,other.id));
});

om.tempid.TempId.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.__hash == null)){
self__.__hash = cljs.core.hash.call(null,self__.id);
} else {
}

return self__.__hash;
});

om.tempid.TempId.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.write_all.call(null,writer,"#om/id[\"",self__.id,"\"]");
});

om.tempid.TempId.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",(-1328796629),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null);
});

om.tempid.TempId.cljs$lang$type = true;

om.tempid.TempId.cljs$lang$ctorStr = "om.tempid/TempId";

om.tempid.TempId.cljs$lang$ctorPrWriter = (function (this__13753__auto__,writer__13754__auto__,opt__13755__auto__){
return cljs.core._write.call(null,writer__13754__auto__,"om.tempid/TempId");
});

(function (){
om.tempid.__GT_TempId = (function om$tempid$__GT_TempId(id,__hash){
return (new om.tempid.TempId(id,__hash));
}); return (
new cljs.core.Var(function(){return om.tempid.__GT_TempId;},new cljs.core.Symbol("om.tempid","->TempId","om.tempid/->TempId",(-138469644),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("om.tempid","Object","om.tempid/Object",(-318270843),null),null,new cljs.core.Symbol("cljs.core","IEquiv","cljs.core/IEquiv",(-1245752602),null),null,new cljs.core.Symbol("cljs.core","IHash","cljs.core/IHash",(-32453786),null),null,new cljs.core.Symbol("cljs.core","IPrintWithWriter","cljs.core/IPrintWithWriter",(1349251417),null),null], null), null),new cljs.core.Symbol(null,"om.tempid","om.tempid",(64977556),null),new cljs.core.Symbol(null,"->TempId","->TempId",(635399413),null),"om/tempid.cljc",(19),(4),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(8),(8),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",(-1328796629),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IEquiv","cljs.core/IEquiv",(-1245752602),null),null,new cljs.core.Symbol("cljs.core","IHash","cljs.core/IHash",(-32453786),null),null,new cljs.core.Symbol("cljs.core","IPrintWithWriter","cljs.core/IPrintWithWriter",(1349251417),null),null], null), null),null,(cljs.core.truth_(om.tempid.__GT_TempId)?om.tempid.__GT_TempId.cljs$lang$test:null)])));})()
;

(function (){
om.tempid.tempid = (function om$tempid$tempid(var_args){
var args239 = [];
var len__16006__auto___242 = arguments.length;
var i__16007__auto___243 = (0);
while(true){
if((i__16007__auto___243 < len__16006__auto___242)){
args239.push((arguments[i__16007__auto___243]));

var G__244 = (i__16007__auto___243 + (1));
i__16007__auto___243 = G__244;
continue;
} else {
}
break;
}

var G__241 = args239.length;
switch (G__241) {
case (0):
return om.tempid.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return om.tempid.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args239.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.tempid.tempid;},new cljs.core.Symbol("om.tempid","tempid","om.tempid/tempid",(1145052546),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.tempid","om.tempid",(64977556),null),new cljs.core.Symbol(null,"tempid","tempid",(-1226772547),null),"om/tempid.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(4),(26),(26),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null)),null,(cljs.core.truth_(om.tempid.tempid)?om.tempid.tempid.cljs$lang$test:null)])));})()
;

om.tempid.tempid.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.tempid.tempid.call(null,cljs.core.random_uuid.call(null));
});

om.tempid.tempid.cljs$core$IFn$_invoke$arity$1 = (function (id){
return (new om.tempid.TempId(id,null));
});

om.tempid.tempid.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return om.tempid.tempid;},new cljs.core.Symbol("om.tempid","tempid","om.tempid/tempid",(1145052546),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.tempid","om.tempid",(64977556),null),new cljs.core.Symbol(null,"tempid","tempid",(-1226772547),null),"om/tempid.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(4),(26),(26),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null)),null,(cljs.core.truth_(om.tempid.tempid)?om.tempid.tempid.cljs$lang$test:null)]));
(function (){
om.tempid.tempid_QMARK_ = (function om$tempid$tempid_QMARK_(x){
return (x instanceof om.tempid.TempId);
}); return (
new cljs.core.Var(function(){return om.tempid.tempid_QMARK_;},new cljs.core.Symbol("om.tempid","tempid?","om.tempid/tempid?",(732351110),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.tempid","om.tempid",(64977556),null),new cljs.core.Symbol(null,"tempid?","tempid?",(2034653313),null),"om/tempid.cljc",(14),(1),(52),(52),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,((om.tempid.tempid_QMARK_)?om.tempid.tempid_QMARK_.cljs$lang$test:null)])));})()
;

//# sourceURL=om/tempid.js?rel=1483379761111
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib20vdGVtcGlkLmpzP3JlbD0xNDgzMzc5NzYxMTExIiwic291cmNlcyI6WyJ0ZW1waWQuY2xqcz9yZWw9MTQ4MzM3OTc2MTExMSJdLCJsaW5lQ291bnQiOjExOCwibWFwcGluZ3MiOiI7QUFPRyxBQUFBOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQUEsQUFBQSxBQUFBLHNDQUFBLHRDQUFTSTs7QUFBVCxBQUFBLFlBQUEsUkFFYUk7QUFGYixBQUdJLE9BQUNDLDJCQUFPRDs7O0FBSFosQUFBQSxBQUFBLDZEQUFBLDdEQUFTSix3RUFLRUksTUFBS0U7O0FBTGhCLEFBQUEsZ0JBQUEsWkFLV0Y7QUFMWCxBQU1JLFFBQUssa0JBQVdKLGpCQUFPTSx3Q0FDbEIsQUFBQ0MseUJBQUUsQUFBR0gsYUFBVSxBQUFHRTs7O0FBUDVCLEFBQUEsQUFBQSwyREFBQSwzREFBU04sc0VBU0NJOztBQVRWLEFBQUEsZ0JBQUEsWkFTVUE7QUFUVixBQVVJLEdBQU0sa0JBQUEsakJBQU1EO0FBQVosQUFDRSxBQUFNQSxnQkFBTyxBQUFDSyx5QkFBS047O0FBRHJCOztBQUVBQzs7O0FBWkosQUFBQSxBQUFBLDJFQUFBLDNFQUFTSCxzRkFjTVMsRUFBRUMsT0FBT0Q7O0FBZHhCLEFBQUEsWUFBQSxSQWNlQTtBQWRmLEFBZUksNENBQUEsc0JBQUEsM0RBQUNFLDhCQUFVRCxtQkFBbUJSOzs7QUFmbEMsQUFBQSw0QkFBQSw1QkFBU0Y7QUFBVCxBQUFBLDBGQUFBLG9CQUFBLHNEQUFBLDJDQUFBLDREQUFBLGNBQUEsb0JBQUEsZ0VBQUEsMkNBQUEsNERBQUE7OztBQUFBLEFBQUEsa0NBQUEsbENBQVNBOztBQUFULEFBQUEscUNBQUEsckNBQVNBOztBQUFULEFBQUEsMENBQUEsV0FBQUosb0JBQUFDLHNCQUFBQywvRkFBU0U7QUFBVCxBQUFBLE9BQUFELDJCQUFBRixzQkFBQTs7O0FBQUE7d0JBQUEseEJBQVNJLHdEQUFrQkMsR0FBYUM7QUFBeEMsQUFBQSxZQUFBSCxpQkFBMkJFLEdBQWFDOztBQUF4Qyw0REFBQSxvRkFBQSx3Q0FBQSwrREFBQSxrREFBQSx1REFBQSx3REFBQSxtRUFBQSwyREFBQSwyREFBQSxzREFBQSwrREFBQSwrREFBQSxvRkFBQSxxREFBQSx3REFBQSxpRkFBQSxxRkFBQSxzRkFBQSxrRkFBQSx3SEFBQSxtRUFBQSxrRUFBQSxpQkFBQSxLQUFBLElBQUEsbUVBQUEsSUFBQSxJQUFBLGVBQUEsbUZBQUEsb0JBQUEsc0RBQUEsMkNBQUEsNERBQUEsY0FBQSxvQkFBQSxnRUFBQSwyQ0FBQSw0REFBQSx1QkFBQSxpRkFBQSxzRkFBQSxrRkFBQSx3SEFBQSxLQUFBLHlDQUFBLEFBQUEscUNBQUEsNURBQVNGLHVCQUFBQTs7O0FBQUFELEFBa0JULEFBQUE7bUJBQUEsMkJBQUFZLDlDQUFNSztBQUFOLEFBQUEsSUFBQUosVUFBQTtBQUFBLEFBQUEsSUFBQUMseUJBQUEsQUFBQTtBQUFBLEFBQUEsSUFBQUMsdUJBQUE7O0FBQUEsQUFBQSxHQUFBLENBQUFBLHVCQUFBRDtBQUFBLEFBQUEsQUFBQUQsYUFBQSxDQUFBLFVBQUFFOztBQUFBLGFBQUEsQ0FBQUEsdUJBQUE7Ozs7QUFBQTs7OztBQUFBLElBQUFDLFNBQUEsQUFBQUg7QUFBQSxBQUFBLFFBQUFHO0tBQUE7QUFBQSxPQUFBQzs7O0tBQUE7QUFBQSxPQUFBQSwrQ0FBQSxDQUFBLFVBQUE7Ozs7QUFBQSxNQUFBLEtBQUFDLE1BQUEsZUFBQSxpQ0FBQSxBQUFBTDs7OztBQUFBLHVEQUFBLGdGQUFBLHdDQUFBLGtEQUFBLHVEQUFBLHdEQUFBLG1FQUFBLDREQUFBLDJEQUFBLHNEQUFBLCtEQUFBLCtEQUFBLHFEQUFBLHdEQUFBLG1FQUFBLGdFQUFBLGlCQUFBLEtBQUEsMkNBQUEsOERBQUEsTUFBQSw2RUFBQSxJQUFBLHlFQUFBLGVBQUEsaUNBQUEsbUZBQUEsK0RBQUEsK0RBQUEsZUFBQSxpQ0FBQSxtRkFBQSwrREFBQSx5RUFBQSxlQUFBLEtBQUEsY0FBQSxJQUFBLEtBQUEsS0FBQSxlQUFBLGlDQUFBLG1GQUFBLCtEQUFBLEtBQUEsb0NBQUEsQUFBQSxnQ0FBQSxsREFBTUksa0JBQUFBOzs7QUFBTixBQUFBLGlEQUFBLGpEQUFNQTtBQUFOLEFBRUcsT0FBQ0EsMkJBQU8sQUFBQ0U7OztBQUZaLEFBQUEsaURBQUEsakRBQU1GLDREQUdGZjtBQUhKLEFBSUcsWUFBQUYsb0JBQUEsSEFBU0U7OztBQUpaLEFBQUEsMkNBQUEsM0NBQU1lOztBQUFOLHVEQUFBLGdGQUFBLHdDQUFBLGtEQUFBLHVEQUFBLHdEQUFBLG1FQUFBLDREQUFBLDJEQUFBLHNEQUFBLCtEQUFBLCtEQUFBLHFEQUFBLHdEQUFBLG1FQUFBLGdFQUFBLGlCQUFBLEtBQUEsMkNBQUEsOERBQUEsTUFBQSw2RUFBQSxJQUFBLHlFQUFBLGVBQUEsaUNBQUEsbUZBQUEsK0RBQUEsK0RBQUEsZUFBQSxpQ0FBQSxtRkFBQSwrREFBQSx5RUFBQSxlQUFBLEtBQUEsY0FBQSxJQUFBLEtBQUEsS0FBQSxlQUFBLGlDQUFBLG1GQUFBLCtEQUFBLEtBQUEsb0NBQUEsQUFBQSxnQ0FBQSxsREFBTUEsa0JBQUFBO0FBMEJUOzBCQUFBLDFCQUFNRyw0REFFSEM7QUFGSCxBQUdFLHFCQUFXckIsYkFBT3FCOztBQUhwQiw4REFBQSxpRkFBQSx3Q0FBQSxrREFBQSx1REFBQSx3REFBQSxtRUFBQSwyREFBQSxzREFBQSwrREFBQSxzREFBQSwrREFBQSxxREFBQSx3REFBQSxtRUFBQSxpRUFBQSxpQkFBQSxLQUFBLElBQUEsS0FBQSxLQUFBLGlFQUFBLGVBQUEsbUZBQUEsOERBQUEsS0FBQSwyQkFBQSxBQUFBLHVDQUFBLGhFQUFNRCx5QkFBQUEiLCJuYW1lcyI6WyJ0aGlzX18xMzc1M19fYXV0b19fIiwid3JpdGVyX18xMzc1NF9fYXV0b19fIiwib3B0X18xMzc1NV9fYXV0b19fIiwiY2xqcy5jb3JlLy13cml0ZSIsIm9tLnRlbXBpZC9UZW1wSWQiLCJvbS50ZW1waWQvLT5UZW1wSWQiLCJpZCIsIl9faGFzaCIsInRoaXMiLCJjbGpzLmNvcmUvcHItc3RyIiwib3RoZXIiLCJjbGpzLmNvcmUvPSIsImNsanMuY29yZS9oYXNoIiwiXyIsIndyaXRlciIsImNsanMuY29yZS93cml0ZS1hbGwiLCJ2YXJfYXJncyIsImFyZ3MyMzkiLCJsZW5fXzE2MDA2X19hdXRvX18iLCJpX18xNjAwN19fYXV0b19fIiwiR19fMjQxIiwib20udGVtcGlkL3RlbXBpZCIsImpzL0Vycm9yIiwiY2xqcy5jb3JlL3JhbmRvbS11dWlkIiwib20udGVtcGlkL3RlbXBpZD8iLCJ4Il0sInNvdXJjZXNDb250ZW50IjpbIihucyBvbS50ZW1waWRcbiAgIz8oOmNsaiAoOmltcG9ydCBbamF2YS5pbyBXcml0ZXJdKSkpXG5cbjs7ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG47OyBDbG9qdXJlU2NyaXB0XG5cbiM/KDpjbGpzXG4gICAoZGVmdHlwZSBUZW1wSWQgW146bXV0YWJsZSBpZCBeOm11dGFibGUgX19oYXNoXVxuICAgICBPYmplY3RcbiAgICAgKHRvU3RyaW5nIFt0aGlzXVxuICAgICAgIChwci1zdHIgdGhpcykpXG4gICAgIElFcXVpdlxuICAgICAoLWVxdWl2IFt0aGlzIG90aGVyXVxuICAgICAgIChhbmQgKGluc3RhbmNlPyBUZW1wSWQgb3RoZXIpXG4gICAgICAgICAgICAoPSAoLiB0aGlzIC1pZCkgKC4gb3RoZXIgLWlkKSkpKVxuICAgICBJSGFzaFxuICAgICAoLWhhc2ggW3RoaXNdXG4gICAgICAgKHdoZW4gKG5pbD8gX19oYXNoKVxuICAgICAgICAgKHNldCEgX19oYXNoIChoYXNoIGlkKSkpXG4gICAgICAgX19oYXNoKVxuICAgICBJUHJpbnRXaXRoV3JpdGVyXG4gICAgICgtcHItd3JpdGVyIFtfIHdyaXRlciBfXVxuICAgICAgICh3cml0ZS1hbGwgd3JpdGVyIFwiI29tL2lkW1xcXCJcIiBpZCBcIlxcXCJdXCIpKSkpXG5cbiM/KDpjbGpzXG4gICAoZGVmbiB0ZW1waWRcbiAgICAgKFtdXG4gICAgICAodGVtcGlkIChyYW5kb20tdXVpZCkpKVxuICAgICAoW2lkXVxuICAgICAgKFRlbXBJZC4gaWQgbmlsKSkpKVxuXG47OyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOzsgQ2xvanVyZVxuXG4jPyg6Y2xqXG4gICAoZGVmcmVjb3JkIFRlbXBJZCBbaWRdXG4gICAgIE9iamVjdFxuICAgICAodG9TdHJpbmcgW3RoaXNdXG4gICAgICAgKHByLXN0ciB0aGlzKSkpKVxuXG4jPyg6Y2xqXG4gICAoZGVmbWV0aG9kIHByaW50LW1ldGhvZCBUZW1wSWQgW15UZW1wSWQgeCBeV3JpdGVyIHdyaXRlcl1cbiAgICAgKC53cml0ZSB3cml0ZXIgKHN0ciBcIiNvbS9pZFtcXFwiXCIgKC5pZCB4KSBcIlxcXCJdXCIpKSkpXG5cbiM/KDpjbGpcbiAgIChkZWZuIHRlbXBpZFxuICAgICAoW11cbiAgICAgICh0ZW1waWQgKGphdmEudXRpbC5VVUlEL3JhbmRvbVVVSUQpKSlcbiAgICAgKFt1dWlkXVxuICAgICAgKFRlbXBJZC4gdXVpZCkpKSlcblxuKGRlZm4gdGVtcGlkP1xuICAjPyg6Y2xqcyB7OnRhZyBib29sZWFufSlcbiAgW3hdXG4gIChpbnN0YW5jZT8gVGVtcElkIHgpKVxuIl19