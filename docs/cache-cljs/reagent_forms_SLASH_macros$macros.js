goog.provide("reagent_forms.macros$macros");
(function (){
reagent_forms.macros$macros.render_element = (function reagent_forms$macros$macros$render_element(var_args){
var args__25948__auto__ = [];
var len__25946__auto___905 = arguments.length;
var i__25947__auto___906 = (0);
while(true){
if((i__25947__auto___906 < len__25946__auto___905)){
args__25948__auto__.push((arguments[i__25947__auto___906]));

var G__907 = (i__25947__auto___906 + (1));
i__25947__auto___906 = G__907;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((4) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((4)),(0),null)):null);
return reagent_forms.macros$macros.render_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return reagent_forms.macros$macros.render_element;},new cljs.core.Symbol("reagent-forms.macros$macros","render-element","reagent-forms.macros$macros/render-element",(736022594),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent-forms.macros$macros","reagent-forms.macros$macros",(-1229068846),null),new cljs.core.Symbol(null,"render-element","render-element",(-418831692),null),"reagent_forms/macros.clj",(25),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"attrs","attrs",(-450137186),null),new cljs.core.Symbol(null,"doc","doc",(-741138878),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"attrs","attrs",(-450137186),null),new cljs.core.Symbol(null,"doc","doc",(-741138878),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(3),true,(3),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"attrs","attrs",(-450137186),null),new cljs.core.Symbol(null,"doc","doc",(-741138878),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),null,(cljs.core.truth_(reagent_forms.macros$macros.render_element)?reagent_forms.macros$macros.render_element.cljs$lang$test:null)])));})()
;

reagent_forms.macros$macros.render_element.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,attrs,doc,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",(1346583165),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"visible__27__auto__","visible__27__auto__",(-1376011844),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"visible?","visible?",(2129863715))),(function (){var x__25689__auto__ = attrs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"visible__27__auto__","visible__27__auto__",(-1376011844),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null)),(function (){var x__25689__auto__ = doc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
});

reagent_forms.macros$macros.render_element.cljs$lang$maxFixedArity = (4);

reagent_forms.macros$macros.render_element.cljs$lang$applyTo = (function (seq900){
var G__901 = cljs.core.first.call(null,seq900);
var seq900__$1 = cljs.core.next.call(null,seq900);
var G__902 = cljs.core.first.call(null,seq900__$1);
var seq900__$2 = cljs.core.next.call(null,seq900__$1);
var G__903 = cljs.core.first.call(null,seq900__$2);
var seq900__$3 = cljs.core.next.call(null,seq900__$2);
var G__904 = cljs.core.first.call(null,seq900__$3);
var seq900__$4 = cljs.core.next.call(null,seq900__$3);
return reagent_forms.macros$macros.render_element.cljs$core$IFn$_invoke$arity$variadic(G__901,G__902,G__903,G__904,seq900__$4);
});

new cljs.core.Var(function(){return reagent_forms.macros$macros.render_element;},new cljs.core.Symbol("reagent-forms.macros$macros","render-element","reagent-forms.macros$macros/render-element",(736022594),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent-forms.macros$macros","reagent-forms.macros$macros",(-1229068846),null),new cljs.core.Symbol(null,"render-element","render-element",(-418831692),null),"reagent_forms/macros.clj",(25),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"attrs","attrs",(-450137186),null),new cljs.core.Symbol(null,"doc","doc",(-741138878),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"attrs","attrs",(-450137186),null),new cljs.core.Symbol(null,"doc","doc",(-741138878),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(3),true,(3),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"attrs","attrs",(-450137186),null),new cljs.core.Symbol(null,"doc","doc",(-741138878),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),null,(cljs.core.truth_(reagent_forms.macros$macros.render_element)?reagent_forms.macros$macros.render_element.cljs$lang$test:null)]));

reagent_forms.macros$macros.render_element.cljs$lang$macro = true;
