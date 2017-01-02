// Compiled by ClojureScript 1.9.376
goog.provide("om.transit");

/**
* @constructor
 * @implements {om.transit.Object}
*/
om.transit.TempIdHandler = (function (){
})
om.transit.TempIdHandler.prototype.tag = (function (_){
var self__ = this;
var ___$1 = this;
return "om/id";
});

om.transit.TempIdHandler.prototype.rep = (function (r){
var self__ = this;
var _ = this;
return r.id;
});

om.transit.TempIdHandler.prototype.stringRep = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

om.transit.TempIdHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

om.transit.TempIdHandler.cljs$lang$type = true;

om.transit.TempIdHandler.cljs$lang$ctorStr = "om.transit/TempIdHandler";

om.transit.TempIdHandler.cljs$lang$ctorPrWriter = (function (this__13753__auto__,writer__13754__auto__,opt__13755__auto__){
return cljs.core._write.call(null,writer__13754__auto__,"om.transit/TempIdHandler");
});

(function (){
om.transit.__GT_TempIdHandler = (function om$transit$__GT_TempIdHandler(){
return (new om.transit.TempIdHandler());
}); return (
new cljs.core.Var(function(){return om.transit.__GT_TempIdHandler;},new cljs.core.Symbol("om.transit","->TempIdHandler","om.transit/->TempIdHandler",(1125263140),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("om.transit","Object","om.transit/Object",(-1957700927),null),null], null), null),new cljs.core.Symbol(null,"om.transit","om.transit",(-607160771),null),new cljs.core.Symbol(null,"->TempIdHandler","->TempIdHandler",(-889548313),null),"om/transit.cljc",(26),(4),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(11),(11),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,null,(cljs.core.truth_(om.transit.__GT_TempIdHandler)?om.transit.__GT_TempIdHandler.cljs$lang$test:null)])));})()
;

(function (){
om.transit.writer = (function om$transit$writer(var_args){
var args246 = [];
var len__16006__auto___249 = arguments.length;
var i__16007__auto___250 = (0);
while(true){
if((i__16007__auto___250 < len__16006__auto___249)){
args246.push((arguments[i__16007__auto___250]));

var G__251 = (i__16007__auto___250 + (1));
i__16007__auto___250 = G__251;
continue;
} else {
}
break;
}

var G__248 = args246.length;
switch (G__248) {
case (0):
return om.transit.writer.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return om.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args246.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.transit.writer;},new cljs.core.Symbol("om.transit","writer","om.transit/writer",(-655723234),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.transit","om.transit",(-607160771),null),new cljs.core.Symbol(null,"writer","writer",(1362963291),null),"om/transit.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(4),(26),(26),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(om.transit.writer)?om.transit.writer.cljs$lang$test:null)])));})()
;

om.transit.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.writer.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

om.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",(1279968570)),cljs.core.assoc_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",(79528781)),om.tempid.TempId], null),(new om.transit.TempIdHandler())));
});

om.transit.writer.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return om.transit.writer;},new cljs.core.Symbol("om.transit","writer","om.transit/writer",(-655723234),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.transit","om.transit",(-607160771),null),new cljs.core.Symbol(null,"writer","writer",(1362963291),null),"om/transit.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(4),(26),(26),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(om.transit.writer)?om.transit.writer.cljs$lang$test:null)]));
(function (){
om.transit.reader = (function om$transit$reader(var_args){
var args253 = [];
var len__16006__auto___256 = arguments.length;
var i__16007__auto___257 = (0);
while(true){
if((i__16007__auto___257 < len__16006__auto___256)){
args253.push((arguments[i__16007__auto___257]));

var G__258 = (i__16007__auto___257 + (1));
i__16007__auto___257 = G__258;
continue;
} else {
}
break;
}

var G__255 = args253.length;
switch (G__255) {
case (0):
return om.transit.reader.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return om.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args253.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.transit.reader;},new cljs.core.Symbol("om.transit","reader","om.transit/reader",(-533591007),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.transit","om.transit",(-607160771),null),new cljs.core.Symbol(null,"reader","reader",(1810192380),null),"om/transit.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(4),(42),(42),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(om.transit.reader)?om.transit.reader.cljs$lang$test:null)])));})()
;

om.transit.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.reader.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

om.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",(1279968570)),cljs.core.assoc_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",(79528781)),"om/id"], null),(function (id){
return om.tempid.tempid.call(null,id);
})));
});

om.transit.reader.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return om.transit.reader;},new cljs.core.Symbol("om.transit","reader","om.transit/reader",(-533591007),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.transit","om.transit",(-607160771),null),new cljs.core.Symbol(null,"reader","reader",(1810192380),null),"om/transit.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(4),(42),(42),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(om.transit.reader)?om.transit.reader.cljs$lang$test:null)]));

//# sourceURL=om/transit.js?rel=1483379761905
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib20vdHJhbnNpdC5qcz9yZWw9MTQ4MzM3OTc2MTkwNSIsInNvdXJjZXMiOlsidHJhbnNpdC5jbGpzP3JlbD0xNDgzMzc5NzYxOTA1Il0sImxpbmVDb3VudCI6MTQyLCJtYXBwaW5ncyI6IjtBQVVHLEFBQUE7Ozs7Ozs7QUFBQSxBQUFBLEFBQUEsQUFBQSx5Q0FBQSx6Q0FBU0ksb0RBRUNFOztBQUZWLEFBQUEsWUFBQSxSQUVRQTtBQUZSLEFBQUE7OztBQUFBLEFBQUEsQUFBQSx5Q0FBQSx6Q0FBU0Ysb0RBR0NHOztBQUhWLEFBQUEsUUFBQSxKQUdRRDtBQUhSLEFBR2EsT0FBR0M7OztBQUhoQixBQUFBLEFBQUEsK0NBQUEsL0NBQVNILDBEQUlPRTs7QUFKaEIsQUFBQSxZQUFBLFJBSWNBO0FBSmQsQUFBQTs7O0FBQUEsQUFBQSxvQ0FBQSxwQ0FBU0Y7QUFBVCxBQUFBOzs7QUFBQSxBQUFBLDBDQUFBLDFDQUFTQTs7QUFBVCxBQUFBLDZDQUFBLDdDQUFTQTs7QUFBVCxBQUFBLGtEQUFBLFdBQUFKLG9CQUFBQyxzQkFBQUMsdkdBQVNFO0FBQVQsQUFBQSxPQUFBRCwyQkFBQUYsc0JBQUE7OztBQUFBO2dDQUFBLGhDQUFTSTtBQUFULEFBQUEsWUFBQUQ7O0FBQUEsb0VBQUEsb0dBQUEsd0NBQUEsK0RBQUEsa0RBQUEsdURBQUEsd0RBQUEsbUVBQUEsMkRBQUEsMkRBQUEsc0RBQUEsK0RBQUEsK0RBQUEsb0ZBQUEscURBQUEsd0RBQUEsaUZBQUEsdUdBQUEsdUVBQUEsaUZBQUEsa0JBQUEsS0FBQSxJQUFBLG1FQUFBLEtBQUEsS0FBQSxlQUFBLGtDQUFBLEtBQUEsS0FBQSxpREFBQSxBQUFBLDZDQUFBLDVFQUFTQywrQkFBQUE7OztBQUFBRCxBQWVULEFBQUE7b0JBQUEsNEJBQUFJLGhEQUFNSztBQUFOLEFBQUEsSUFBQUosVUFBQTtBQUFBLEFBQUEsSUFBQUMseUJBQUEsQUFBQTtBQUFBLEFBQUEsSUFBQUMsdUJBQUE7O0FBQUEsQUFBQSxHQUFBLENBQUFBLHVCQUFB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QUFBLGtGQUFBLHdDQUFBLGtEQUFBLHVEQUFBLHdEQUFBLG1FQUFBLDREQUFBLDJEQUFBLHNEQUFBLCtEQUFBLCtEQUFBLHFEQUFBLHdEQUFBLHVFQUFBLCtEQUFBLGtCQUFBLEtBQUEsMkNBQUEsOERBQUEsTUFBQSw2RUFBQSxJQUFBLHlFQUFBLGVBQUEsaUNBQUEsbUZBQUEsb0VBQUEsK0RBQUEsZUFBQSxpQ0FBQSxtRkFBQSxvRUFBQSx5RUFBQSxlQUFBLEtBQUEsY0FBQSxJQUFBLEtBQUEsS0FBQSxlQUFBLGlDQUFBLG1GQUFBLG9FQUFBLEtBQUEscUNBQUEsQUFBQSxpQ0FBQSxwREFBTUEsbUJBQUFBO0FBcUJUIiwibmFtZXMiOlsidGhpc19fMTM3NTNfX2F1dG9fXyIsIndyaXRlcl9fMTM3NTRfX2F1dG9fXyIsIm9wdF9fMTM3NTVfX2F1dG9fXyIsImNsanMuY29yZS8td3JpdGUiLCJvbS50cmFuc2l0L1RlbXBJZEhhbmRsZXIiLCJvbS50cmFuc2l0Ly0+VGVtcElkSGFuZGxlciIsIl8iLCJyIiwidmFyX2FyZ3MiLCJhcmdzMjQ2IiwibGVuX18xNjAwNl9fYXV0b19fIiwiaV9fMTYwMDdfX2F1dG9fXyIsIkdfXzI0OCIsIm9tLnRyYW5zaXQvd3JpdGVyIiwianMvRXJyb3IiLCJvcHRzIiwiY29nbml0ZWN0LnRyYW5zaXQvd3JpdGVyIiwiY2xqcy5jb3JlL2Fzc29jLWluIiwib20udGVtcGlkL1RlbXBJZCIsImFyZ3MyNTMiLCJHX18yNTUiLCJvbS50cmFuc2l0L3JlYWRlciIsImNvZ25pdGVjdC50cmFuc2l0L3JlYWRlciIsImlkIiwib20udGVtcGlkL3RlbXBpZCJdLCJzb3VyY2VzQ29udGVudCI6WyIobnMgb20udHJhbnNpdFxuICAjPyg6Y2xqICg6cmVmZXItY2xvanVyZSA6ZXhjbHVkZSBbcmVmXSkpXG4gICg6cmVxdWlyZSBbY29nbml0ZWN0LnRyYW5zaXQgOmFzIHRdXG4gICAjPyg6Y2xqcyBbY29tLmNvZ25pdGVjdC50cmFuc2l0IDphcyBjdF0pXG4gICAgICAgICAgICBbb20udGVtcGlkIDphcyB0ZW1waWQgIz9AKDpjbGpzIFs6cmVmZXIgW1RlbXBJZF1dKV0pXG4gICM/KDpjbGogKDppbXBvcnQgW2NvbS5jb2duaXRlY3QudHJhbnNpdFxuICAgICAgICAgICAgICAgICAgICBUcmFuc2l0RmFjdG9yeSBXcml0ZUhhbmRsZXIgUmVhZEhhbmRsZXJdXG4gICAgICAgICAgICAgICAgICAgW29tLnRlbXBpZCBUZW1wSWRdKSkpXG5cbiM/KDpjbGpzXG4gICAoZGVmdHlwZSBUZW1wSWRIYW5kbGVyIFtdXG4gICAgIE9iamVjdFxuICAgICAodGFnIFtfIF9dIFwib20vaWRcIilcbiAgICAgKHJlcCBbXyByXSAoLiByIC1pZCkpXG4gICAgIChzdHJpbmdSZXAgW18gX10gbmlsKSkpXG5cbiM/KDpjbGpcbiAgIChkZWZ0eXBlIFRlbXBJZEhhbmRsZXIgW11cbiAgICAgV3JpdGVIYW5kbGVyXG4gICAgICh0YWcgW18gX10gXCJvbS9pZFwiKVxuICAgICAocmVwIFtfIHJdICguIF5UZW1wSWQgciAtaWQpKVxuICAgICAoc3RyaW5nUmVwIFtfIHJdICguIF5UZW1wSWQgciAtaWQpKVxuICAgICAoZ2V0VmVyYm9zZUhhbmRsZXIgW19dIG5pbCkpKVxuXG4jPyg6Y2xqc1xuICAgKGRlZm4gd3JpdGVyXG4gICAgIChbXVxuICAgICAgKHdyaXRlciB7fSkpXG4gICAgIChbb3B0c11cbiAgICAgICh0L3dyaXRlciA6anNvblxuICAgICAgICAoYXNzb2MtaW4gb3B0cyBbOmhhbmRsZXJzIFRlbXBJZF0gKFRlbXBJZEhhbmRsZXIuKSkpKSkpXG5cbiM/KDpjbGpcbiAgIChkZWZuIHdyaXRlclxuICAgICAoW291dF1cbiAgICAgICh3cml0ZXIgb3V0IHt9KSlcbiAgICAgKFtvdXQgb3B0c11cbiAgICAgICh0L3dyaXRlciBvdXQgOmpzb25cbiAgICAgICAgKGFzc29jLWluIG9wdHMgWzpoYW5kbGVycyBUZW1wSWRdIChUZW1wSWRIYW5kbGVyLikpKSkpKVxuXG4jPyg6Y2xqc1xuICAgKGRlZm4gcmVhZGVyXG4gICAgIChbXVxuICAgICAgKHJlYWRlciB7fSkpXG4gICAgIChbb3B0c11cbiAgICAgICh0L3JlYWRlciA6anNvblxuICAgICAgICAoYXNzb2MtaW4gb3B0c1xuICAgICAgICAgIFs6aGFuZGxlcnMgXCJvbS9pZFwiXVxuICAgICAgICAgIChmbiBbaWRdICh0ZW1waWQvdGVtcGlkIGlkKSkpKSkpKVxuXG4jPyg6Y2xqXG4gICAoZGVmbiByZWFkZXJcbiAgICAgKFtpbl1cbiAgICAgIChyZWFkZXIgaW4ge30pKVxuICAgICAoW2luIG9wdHNdXG4gICAgICAodC9yZWFkZXIgaW4gOmpzb25cbiAgICAgICAgKGFzc29jLWluIG9wdHNcbiAgICAgICAgICBbOmhhbmRsZXJzIFwib20vaWRcIl1cbiAgICAgICAgICAocmVpZnlcbiAgICAgICAgICAgIFJlYWRIYW5kbGVyXG4gICAgICAgICAgICAoZnJvbVJlcCBbXyBpZF0gKFRlbXBJZC4gaWQpKSkpKSkpKVxuXG4oY29tbWVudFxuICA7OyBjbGpzXG4gICh0L3JlYWQgKHJlYWRlcikgKHQvd3JpdGUgKHdyaXRlcikgKHRlbXBpZC90ZW1waWQpKSlcblxuICA7OyBjbGpcbiAgKGltcG9ydCAnW2phdmEuaW8gQnl0ZUFycmF5T3V0cHV0U3RyZWFtIEJ5dGVBcnJheUlucHV0U3RyZWFtXSlcblxuICAoZGVmIGJhb3MgKEJ5dGVBcnJheU91dHB1dFN0cmVhbS4gNDA5NikpXG4gIChkZWYgdyAod3JpdGVyIGJhb3MpKVxuICAodC93cml0ZSB3IChUZW1wSWQuIChqYXZhLnV0aWwuVVVJRC9yYW5kb21VVUlEKSkpXG4gICgudG9TdHJpbmcgYmFvcylcblxuICAoZGVmIGluIChCeXRlQXJyYXlJbnB1dFN0cmVhbS4gKC50b0J5dGVBcnJheSBiYW9zKSkpXG4gIChkZWYgciAocmVhZGVyIGluKSlcbiAgKHQvcmVhZCByKVxuICApIl19