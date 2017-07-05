goog.provide("ajax.macros$macros");
var ret__25038__auto___79 = (function (){
ajax.macros$macros.easy_api = (function ajax$macros$macros$easy_api(_AMPERSAND_form,_AMPERSAND_env,method){
var uri = cljs.core.symbol.call(null,"uri");
var opts = cljs.core.symbol.call(null,"opts");
var easy_ajax_request = cljs.core.symbol.call(null,"easy-ajax-request");
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",(-1606493717),null)),(function (){var x__24698__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"accepts the URI and an optional map of options, options include:\n        :handler - the handler function for successful operation\n                   should accept a single parameter which is the\n                   deserialized response\n        :error-handler - the handler function for errors, should accept a\n                         map with keys :status and :status-text\n        :format - the format for the request\n        :response-format - the format for the response\n        :params - a map of parameters that will be sent with the request"),(function (){var x__24698__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__24698__auto__ = uri;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&","&",(-2144855648),null)),(function (){var x__24698__auto__ = opts;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),(function (){var x__24698__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__24698__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__3__auto__","f__3__auto__",(1975896890),null)),(function (){var x__24698__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",(-752535972),null)),(function (){var x__24698__auto__ = opts;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),(function (){var x__24698__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__24698__auto__ = easy_ajax_request;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),(function (){var x__24698__auto__ = uri;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),(function (){var x__24698__auto__ = cljs.core.name.call(null,method);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),(function (){var x__24698__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__24698__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",(713156450),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__3__auto__","f__3__auto__",(1975896890),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),(function (){var x__24698__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",(1757277831),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",(303385767),null)),(function (){var x__24698__auto__ = opts;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__3__auto__","f__3__auto__",(1975896890),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})()));
}); return (
new cljs.core.Var(function(){return ajax.macros$macros.easy_api;},new cljs.core.Symbol("ajax.macros$macros","easy-api","ajax.macros$macros/easy-api",(563297417),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"ajax.macros$macros","ajax.macros$macros",(1674096052),null),new cljs.core.Symbol(null,"easy-api","easy-api",(421616887),null),"ajax/macros.clj",(19),(1),(3),true,(3),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"method","method",(1696235119),null)], null)),null,(cljs.core.truth_(ajax.macros$macros.easy_api)?ajax.macros$macros.easy_api.cljs$lang$test:null)])));})()
;
ajax.macros$macros.easy_api.cljs$lang$macro = true;

