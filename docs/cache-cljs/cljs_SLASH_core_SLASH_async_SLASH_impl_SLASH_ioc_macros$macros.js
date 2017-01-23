goog.provide("cljs.core.async.impl.ioc_macros$macros");
(function (){
cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_ = (function cljs$core$async$impl$ioc_macros$macros$aset_all_BANG_(var_args){
var args__23658__auto__ = [];
var len__23656__auto___37 = arguments.length;
var i__23657__auto___38 = (0);
while(true){
if((i__23657__auto___38 < len__23656__auto___37)){
args__23658__auto__.push((arguments[i__23657__auto___38]));

var G__39 = (i__23657__auto___38 + (1));
i__23657__auto___38 = G__39;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((3) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((3)),(0),null)):null);
return cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_;},new cljs.core.Symbol("cljs.core.async.impl.ioc-macros$macros","aset-all!","cljs.core.async.impl.ioc-macros$macros/aset-all!",(1008081118),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.ioc-macros$macros","cljs.core.async.impl.ioc-macros$macros",(614809260),null),new cljs.core.Symbol(null,"aset-all!","aset-all!",(1872929299),null),"cljs/core/async/impl/ioc_macros.clj",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"arr","arr",(2115492975),null),new cljs.core.Symbol(null,"more","more",(-418290273),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"arr","arr",(2115492975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"more","more",(-418290273),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(14),true,(14),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"arr","arr",(2115492975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"more","more",(-418290273),null)], null)),null,(cljs.core.truth_(cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_)?cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_.cljs$lang$test:null)])));})()
;

cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,arr,more){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,more))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Must give an even number of args to aset-all!"),cljs.core.str("\n"),cljs.core.str("(even? (count more))")].join('')));
}

var bindings = cljs.core.partition.call(null,(2),more);
var arr_sym = cljs.core.gensym.call(null,"statearr-");
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = arr_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = arr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core.map.call(null,((function (bindings,arr_sym){
return (function (p__33){
var vec__34 = p__33;
var idx = cljs.core.nth.call(null,vec__34,(0),null);
var val = cljs.core.nth.call(null,vec__34,(1),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",(-898215545),null)),(function (){var x__23399__auto__ = arr_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
});})(bindings,arr_sym))
,bindings),(function (){var x__23399__auto__ = arr_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
});

cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_.cljs$lang$applyTo = (function (seq29){
var G__30 = cljs.core.first.call(null,seq29);
var seq29__$1 = cljs.core.next.call(null,seq29);
var G__31 = cljs.core.first.call(null,seq29__$1);
var seq29__$2 = cljs.core.next.call(null,seq29__$1);
var G__32 = cljs.core.first.call(null,seq29__$2);
var seq29__$3 = cljs.core.next.call(null,seq29__$2);
return cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30,G__31,G__32,seq29__$3);
});

new cljs.core.Var(function(){return cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_;},new cljs.core.Symbol("cljs.core.async.impl.ioc-macros$macros","aset-all!","cljs.core.async.impl.ioc-macros$macros/aset-all!",(1008081118),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.ioc-macros$macros","cljs.core.async.impl.ioc-macros$macros",(614809260),null),new cljs.core.Symbol(null,"aset-all!","aset-all!",(1872929299),null),"cljs/core/async/impl/ioc_macros.clj",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"arr","arr",(2115492975),null),new cljs.core.Symbol(null,"more","more",(-418290273),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"arr","arr",(2115492975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"more","more",(-418290273),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(14),true,(14),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"arr","arr",(2115492975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"more","more",(-418290273),null)], null)),null,(cljs.core.truth_(cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_)?cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_.cljs$lang$test:null)]));

cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_.cljs$lang$macro = true;
/**
 * Allows a user to define a state monad binding plan.
 * 
 *   (gen-plan
 *  [_ (assoc-in-plan [:foo :bar] 42)
 *   val (get-in-plan [:foo :bar])]
 *  val)
 */
(function (){
cljs.core.async.impl.ioc_macros$macros.gen_plan = (function cljs$core$async$impl$ioc_macros$macros$gen_plan(_AMPERSAND_form,_AMPERSAND_env,binds,id_expr){
var binds__$1 = cljs.core.partition.call(null,(2),binds);
var psym = cljs.core.gensym.call(null,"plan_");
var forms = cljs.core.reduce.call(null,((function (binds__$1,psym){
return (function (acc,p__44){
var vec__45 = p__44;
var id = cljs.core.nth.call(null,vec__45,(0),null);
var expr = cljs.core.nth.call(null,vec__45,(1),null);
return cljs.core.concat.call(null,acc,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()))));
});})(binds__$1,psym))
,cljs.core.PersistentVector.EMPTY,binds__$1);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,forms)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = id_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
}); return (
new cljs.core.Var(function(){return cljs.core.async.impl.ioc_macros$macros.gen_plan;},new cljs.core.Symbol("cljs.core.async.impl.ioc-macros$macros","gen-plan","cljs.core.async.impl.ioc-macros$macros/gen-plan",(-1345548427),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.async.impl.ioc-macros$macros","cljs.core.async.impl.ioc-macros$macros",(614809260),null),new cljs.core.Symbol(null,"gen-plan","gen-plan",(-90581848),null),"cljs/core/async/impl/ioc_macros.clj",(19),(1),(28),true,(28),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binds","binds",(2004181187),null),new cljs.core.Symbol(null,"id-expr","id-expr",(1166187588),null)], null)),"Allows a user to define a state monad binding plan.\n\n  (gen-plan\n    [_ (assoc-in-plan [:foo :bar] 42)\n     val (get-in-plan [:foo :bar])]\n    val)",(cljs.core.truth_(cljs.core.async.impl.ioc_macros$macros.gen_plan)?cljs.core.async.impl.ioc_macros$macros.gen_plan.cljs$lang$test:null)])));})()
;

cljs.core.async.impl.ioc_macros$macros.gen_plan.cljs$lang$macro = true;
