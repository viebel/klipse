goog.provide("poppea$macros");
(function (){
poppea$macros.curry = (function poppea$macros$curry(p__101,body){
var vec__105 = p__101;
var params1 = cljs.core.nth.call(null,vec__105,(0),null);
var params2 = cljs.core.nth.call(null,vec__105,(1),null);
return cljs.core.cons.call(null,cljs.core.vec.call(null,params1),((cljs.core.empty_QMARK_.call(null,params2))?body:(function (){var x__24698__auto__ = cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"fn","fn",(465265323),null),cljs.core.vec.call(null,params2),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})()));
}); return (
new cljs.core.Var(function(){return poppea$macros.curry;},new cljs.core.Symbol("poppea$macros","curry","poppea$macros/curry",(-1170800346),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"curry","curry",(-990460682),null),"poppea.clj",(13),(1),(5),(5),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params1","params1",(-1089621140),null),new cljs.core.Symbol(null,"params2","params2",(-1713344547),null)], null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),null,(cljs.core.truth_(poppea$macros.curry)?poppea$macros.curry.cljs$lang$test:null)])));})()
;
(function (){
poppea$macros.do_curried = (function poppea$macros$do_curried(symbol,to_fn,params){
var result = cljs.core.split_with.call(null,cljs.core.complement.call(null,cljs.core.vector_QMARK_),params);
var vec__120 = result;
var vec__123 = cljs.core.nth.call(null,vec__120,(0),null);
var name = cljs.core.nth.call(null,vec__123,(0),null);
var doc = cljs.core.nth.call(null,vec__123,(1),null);
var meta = cljs.core.nth.call(null,vec__123,(2),null);
var vec__126 = cljs.core.nth.call(null,vec__120,(1),null);
var seq__127 = cljs.core.seq.call(null,vec__126);
var first__128 = cljs.core.first.call(null,seq__127);
var seq__127__$1 = cljs.core.next.call(null,seq__127);
var args = first__128;
var body = seq__127__$1;
var vec__129 = ((typeof doc === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc,meta], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc], null));
var doc__$1 = cljs.core.nth.call(null,vec__129,(0),null);
var meta__$1 = cljs.core.nth.call(null,vec__129,(1),null);
var body__$1 = (cljs.core.truth_(meta__$1)?cljs.core.cons.call(null,meta__$1,body):body);
var arity_for_n = ((function (result,vec__120,vec__123,name,doc,meta,vec__126,seq__127,first__128,seq__127__$1,args,body,vec__129,doc__$1,meta__$1,body__$1){
return (function (p1__1_SHARP_){
return to_fn.call(null,cljs.core.split_at.call(null,(p1__1_SHARP_ + (1)),args),body__$1);
});})(result,vec__120,vec__123,name,doc,meta,vec__126,seq__127,first__128,seq__127__$1,args,body,vec__129,doc__$1,meta__$1,body__$1))
;
var arities = cljs.core.reverse.call(null,cljs.core.map.call(null,arity_for_n,cljs.core.range.call(null,(0),cljs.core.count.call(null,args))));
var before = cljs.core.keep.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [symbol,name,doc__$1], null));
return cljs.core.concat.call(null,before,arities);
}); return (
new cljs.core.Var(function(){return poppea$macros.do_curried;},new cljs.core.Symbol("poppea$macros","do-curried","poppea$macros/do-curried",(1175852643),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"do-curried","do-curried",(433444243),null),"poppea.clj",(18),(1),(12),(12),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",(601958831),null),new cljs.core.Symbol(null,"to-fn","to-fn",(-1985383263),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),null,(cljs.core.truth_(poppea$macros.do_curried)?poppea$macros.do_curried.cljs$lang$test:null)])));})()
;
var ret__25038__auto___135 = (function (){
/**
 * Builds a multiple arity function similar that returns closures
 *        for the missing parameters, similar to ML's behaviour.
 */
(function (){
poppea$macros.defn_curried = (function poppea$macros$defn_curried(var_args){
var args__24990__auto__ = [];
var len__24987__auto___136 = arguments.length;
var i__24988__auto___137 = (0);
while(true){
if((i__24988__auto___137 < len__24987__auto___136)){
args__24990__auto__.push((arguments[i__24988__auto___137]));

var G__138 = (i__24988__auto___137 + (1));
i__24988__auto___137 = G__138;
continue;
} else {
}
break;
}

var argseq__24991__auto__ = ((((2) < args__24990__auto__.length))?(new cljs.core.IndexedSeq(args__24990__auto__.slice((2)),(0),null)):null);
return poppea$macros.defn_curried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__24991__auto__);
}); return (
new cljs.core.Var(function(){return poppea$macros.defn_curried;},new cljs.core.Symbol("poppea$macros","defn-curried","poppea$macros/defn-curried",(2036297891),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"defn-curried","defn-curried",(974927603),null),"poppea.clj",(23),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(25),true,(25),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),"Builds a multiple arity function similar that returns closures\n          for the missing parameters, similar to ML's behaviour.",(cljs.core.truth_(poppea$macros.defn_curried)?poppea$macros.defn_curried.cljs$lang$test:null)])));})()
;

poppea$macros.defn_curried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,params){
return poppea$macros.do_curried.call(null,new cljs.core.Symbol(null,"defn","defn",(-126010802),null),poppea$macros.curry,params);
});

poppea$macros.defn_curried.cljs$lang$maxFixedArity = (2);

poppea$macros.defn_curried.cljs$lang$applyTo = (function (seq132){
var G__133 = cljs.core.first.call(null,seq132);
var seq132__$1 = cljs.core.next.call(null,seq132);
var G__134 = cljs.core.first.call(null,seq132__$1);
var seq132__$2 = cljs.core.next.call(null,seq132__$1);
return poppea$macros.defn_curried.cljs$core$IFn$_invoke$arity$variadic(G__133,G__134,seq132__$2);
});

return new cljs.core.Var(function(){return poppea$macros.defn_curried;},new cljs.core.Symbol("poppea$macros","defn-curried","poppea$macros/defn-curried",(2036297891),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"defn-curried","defn-curried",(974927603),null),"poppea.clj",(23),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(25),true,(25),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),"Builds a multiple arity function similar that returns closures\n          for the missing parameters, similar to ML's behaviour.",(cljs.core.truth_(poppea$macros.defn_curried)?poppea$macros.defn_curried.cljs$lang$test:null)]));
})()
;
poppea$macros.defn_curried.cljs$lang$macro = true;

var ret__25038__auto___142 = (function (){
/**
 * Builds a multiple arity function similar that returns closures
 *        for the missing parameters, similar to ML's behaviour.
 */
(function (){
poppea$macros.defn_curried_ = (function poppea$macros$defn_curried_(var_args){
var args__24990__auto__ = [];
var len__24987__auto___143 = arguments.length;
var i__24988__auto___144 = (0);
while(true){
if((i__24988__auto___144 < len__24987__auto___143)){
args__24990__auto__.push((arguments[i__24988__auto___144]));

var G__145 = (i__24988__auto___144 + (1));
i__24988__auto___144 = G__145;
continue;
} else {
}
break;
}

var argseq__24991__auto__ = ((((2) < args__24990__auto__.length))?(new cljs.core.IndexedSeq(args__24990__auto__.slice((2)),(0),null)):null);
return poppea$macros.defn_curried_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__24991__auto__);
}); return (
new cljs.core.Var(function(){return poppea$macros.defn_curried_;},new cljs.core.Symbol("poppea$macros","defn-curried-","poppea$macros/defn-curried-",(1713351435),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"defn-curried-","defn-curried-",(-1486953157),null),"poppea.clj",(24),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(31),true,(31),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),"Builds a multiple arity function similar that returns closures\n          for the missing parameters, similar to ML's behaviour.",(cljs.core.truth_(poppea$macros.defn_curried_)?poppea$macros.defn_curried_.cljs$lang$test:null)])));})()
;

poppea$macros.defn_curried_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,params){
return poppea$macros.do_curried.call(null,new cljs.core.Symbol(null,"defn-","defn-",(1097765044),null),poppea$macros.curry,params);
});

poppea$macros.defn_curried_.cljs$lang$maxFixedArity = (2);

poppea$macros.defn_curried_.cljs$lang$applyTo = (function (seq139){
var G__140 = cljs.core.first.call(null,seq139);
var seq139__$1 = cljs.core.next.call(null,seq139);
var G__141 = cljs.core.first.call(null,seq139__$1);
var seq139__$2 = cljs.core.next.call(null,seq139__$1);
return poppea$macros.defn_curried_.cljs$core$IFn$_invoke$arity$variadic(G__140,G__141,seq139__$2);
});

return new cljs.core.Var(function(){return poppea$macros.defn_curried_;},new cljs.core.Symbol("poppea$macros","defn-curried-","poppea$macros/defn-curried-",(1713351435),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"defn-curried-","defn-curried-",(-1486953157),null),"poppea.clj",(24),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(31),true,(31),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),"Builds a multiple arity function similar that returns closures\n          for the missing parameters, similar to ML's behaviour.",(cljs.core.truth_(poppea$macros.defn_curried_)?poppea$macros.defn_curried_.cljs$lang$test:null)]));
})()
;
poppea$macros.defn_curried_.cljs$lang$macro = true;

var ret__25038__auto___149 = (function (){
/**
 * Builds a multiple arity function similar that returns closures
 *        for the missing parameters, similar to ML's behaviour.
 */
(function (){
poppea$macros.fn_curried = (function poppea$macros$fn_curried(var_args){
var args__24990__auto__ = [];
var len__24987__auto___150 = arguments.length;
var i__24988__auto___151 = (0);
while(true){
if((i__24988__auto___151 < len__24987__auto___150)){
args__24990__auto__.push((arguments[i__24988__auto___151]));

var G__152 = (i__24988__auto___151 + (1));
i__24988__auto___151 = G__152;
continue;
} else {
}
break;
}

var argseq__24991__auto__ = ((((2) < args__24990__auto__.length))?(new cljs.core.IndexedSeq(args__24990__auto__.slice((2)),(0),null)):null);
return poppea$macros.fn_curried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__24991__auto__);
}); return (
new cljs.core.Var(function(){return poppea$macros.fn_curried;},new cljs.core.Symbol("poppea$macros","fn-curried","poppea$macros/fn-curried",(-294573745),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"fn-curried","fn-curried",(-1355617505),null),"poppea.clj",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(37),true,(37),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),"Builds a multiple arity function similar that returns closures\n          for the missing parameters, similar to ML's behaviour.",(cljs.core.truth_(poppea$macros.fn_curried)?poppea$macros.fn_curried.cljs$lang$test:null)])));})()
;

poppea$macros.fn_curried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,params){
return poppea$macros.do_curried.call(null,new cljs.core.Symbol(null,"fn","fn",(465265323),null),poppea$macros.curry,params);
});

poppea$macros.fn_curried.cljs$lang$maxFixedArity = (2);

poppea$macros.fn_curried.cljs$lang$applyTo = (function (seq146){
var G__147 = cljs.core.first.call(null,seq146);
var seq146__$1 = cljs.core.next.call(null,seq146);
var G__148 = cljs.core.first.call(null,seq146__$1);
var seq146__$2 = cljs.core.next.call(null,seq146__$1);
return poppea$macros.fn_curried.cljs$core$IFn$_invoke$arity$variadic(G__147,G__148,seq146__$2);
});

return new cljs.core.Var(function(){return poppea$macros.fn_curried;},new cljs.core.Symbol("poppea$macros","fn-curried","poppea$macros/fn-curried",(-294573745),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"fn-curried","fn-curried",(-1355617505),null),"poppea.clj",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(37),true,(37),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),"Builds a multiple arity function similar that returns closures\n          for the missing parameters, similar to ML's behaviour.",(cljs.core.truth_(poppea$macros.fn_curried)?poppea$macros.fn_curried.cljs$lang$test:null)]));
})()
;
poppea$macros.fn_curried.cljs$lang$macro = true;

(function (){
poppea$macros.coffee_map_fn = (function poppea$macros$coffee_map_fn(keys){
if(cljs.core.empty_QMARK_.call(null,keys)){
return cljs.core.PersistentVector.EMPTY;
} else {
var k = cljs.core.first.call(null,keys);
if((k instanceof cljs.core.Symbol)){
return cljs.core.cons.call(null,cljs.core.keyword.call(null,k),cljs.core.cons.call(null,k,poppea$macros.coffee_map_fn.call(null,cljs.core.next.call(null,keys))));
} else {
return cljs.core.cons.call(null,k,cljs.core.cons.call(null,cljs.core.second.call(null,keys),poppea$macros.coffee_map_fn.call(null,cljs.core.next.call(null,cljs.core.next.call(null,keys)))));
}
}
}); return (
new cljs.core.Var(function(){return poppea$macros.coffee_map_fn;},new cljs.core.Symbol("poppea$macros","coffee-map-fn","poppea$macros/coffee-map-fn",(-1268587546),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"coffee-map-fn","coffee-map-fn",(-215767626),null),"poppea.clj",(21),(1),(43),(43),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",(-1586012071),null)], null)),null,(cljs.core.truth_(poppea$macros.coffee_map_fn)?poppea$macros.coffee_map_fn.cljs$lang$test:null)])));})()
;
var ret__25038__auto___156 = (function (){
(function (){
poppea$macros.coffee_map = (function poppea$macros$coffee_map(var_args){
var args__24990__auto__ = [];
var len__24987__auto___157 = arguments.length;
var i__24988__auto___158 = (0);
while(true){
if((i__24988__auto___158 < len__24987__auto___157)){
args__24990__auto__.push((arguments[i__24988__auto___158]));

var G__159 = (i__24988__auto___158 + (1));
i__24988__auto___158 = G__159;
continue;
} else {
}
break;
}

var argseq__24991__auto__ = ((((2) < args__24990__auto__.length))?(new cljs.core.IndexedSeq(args__24990__auto__.slice((2)),(0),null)):null);
return poppea$macros.coffee_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__24991__auto__);
}); return (
new cljs.core.Var(function(){return poppea$macros.coffee_map;},new cljs.core.Symbol("poppea$macros","coffee-map","poppea$macros/coffee-map",(634955024),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"coffee-map","coffee-map",(-1709578272),null),"poppea.clj",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"keys","keys",(-1586012071),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"keys","keys",(-1586012071),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(53),true,(53),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"keys","keys",(-1586012071),null)], null)),null,(cljs.core.truth_(poppea$macros.coffee_map)?poppea$macros.coffee_map.cljs$lang$test:null)])));})()
;

poppea$macros.coffee_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,keys){
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"hash-map","hash-map",(-439030950),null),poppea$macros.coffee_map_fn.call(null,keys));
});

poppea$macros.coffee_map.cljs$lang$maxFixedArity = (2);

poppea$macros.coffee_map.cljs$lang$applyTo = (function (seq153){
var G__154 = cljs.core.first.call(null,seq153);
var seq153__$1 = cljs.core.next.call(null,seq153);
var G__155 = cljs.core.first.call(null,seq153__$1);
var seq153__$2 = cljs.core.next.call(null,seq153__$1);
return poppea$macros.coffee_map.cljs$core$IFn$_invoke$arity$variadic(G__154,G__155,seq153__$2);
});

return new cljs.core.Var(function(){return poppea$macros.coffee_map;},new cljs.core.Symbol("poppea$macros","coffee-map","poppea$macros/coffee-map",(634955024),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"coffee-map","coffee-map",(-1709578272),null),"poppea.clj",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"keys","keys",(-1586012071),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"keys","keys",(-1586012071),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(53),true,(53),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"keys","keys",(-1586012071),null)], null)),null,(cljs.core.truth_(poppea$macros.coffee_map)?poppea$macros.coffee_map.cljs$lang$test:null)]));
})()
;
poppea$macros.coffee_map.cljs$lang$macro = true;

(function (){
poppea$macros.extract_symbols = (function poppea$macros$extract_symbols(index,lhs){
if((lhs instanceof cljs.core.Symbol)){
return lhs;
} else {
if(cljs.core.vector_QMARK_.call(null,lhs)){
return index;
} else {
if(cljs.core.map_QMARK_.call(null,lhs)){
var or__23200__auto__ = new cljs.core.Keyword(null,"as","as",(1148689641)).cljs$core$IFn$_invoke$arity$1(lhs);
if(cljs.core.truth_(or__23200__auto__)){
return or__23200__auto__;
} else {
return index;
}
} else {
return index;

}
}
}
}); return (
new cljs.core.Var(function(){return poppea$macros.extract_symbols;},new cljs.core.Symbol("poppea$macros","extract-symbols","poppea$macros/extract-symbols",(2055392219),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"extract-symbols","extract-symbols",(943917451),null),"poppea.clj",(22),(1),(56),(56),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",(108845612),null),new cljs.core.Symbol(null,"lhs","lhs",(-1482353675),null)], null)),null,(cljs.core.truth_(poppea$macros.extract_symbols)?poppea$macros.extract_symbols.cljs$lang$test:null)])));})()
;
(function (){
poppea$macros.binding_symbols = (function poppea$macros$binding_symbols(binding_clause){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2_SHARP_){
if((p1__2_SHARP_ instanceof cljs.core.Symbol)){
return cljs.core.keyword.call(null,cljs.core.name.call(null,p1__2_SHARP_));
} else {
return p1__2_SHARP_;
}
}),cljs.core.map_indexed.call(null,poppea$macros.extract_symbols,binding_clause)));
}); return (
new cljs.core.Var(function(){return poppea$macros.binding_symbols;},new cljs.core.Symbol("poppea$macros","binding-symbols","poppea$macros/binding-symbols",(591083296),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"binding-symbols","binding-symbols",(-436668080),null),"poppea.clj",(23),(1),(62),(62),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding-clause","binding-clause",(1844668850),null)], null)),null,(cljs.core.truth_(poppea$macros.binding_symbols)?poppea$macros.binding_symbols.cljs$lang$test:null)])));})()
;
(function (){
poppea$macros.binding_symbols_for_var = (function poppea$macros$binding_symbols_for_var(function$){
return poppea$macros.binding_symbols.call(null,cljs.core.first.call(null,cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs.core._,cljs.core.count),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,function$)))));
}); return (
new cljs.core.Var(function(){return poppea$macros.binding_symbols_for_var;},new cljs.core.Symbol("poppea$macros","binding-symbols-for-var","poppea$macros/binding-symbols-for-var",(-117082951),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"binding-symbols-for-var","binding-symbols-for-var",(910668393),null),"poppea.clj",(30),(1),(67),(67),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"function","function",(-486723946),null)], null)),null,(cljs.core.truth_(poppea$macros.binding_symbols_for_var)?poppea$macros.binding_symbols_for_var.cljs$lang$test:null)])));})()
;
(function (){
poppea$macros.parameter_capture_QMARK_ = (function poppea$macros$parameter_capture_QMARK_(param){
var and__23164__auto__ = (param instanceof cljs.core.Symbol);
if(and__23164__auto__){
return cljs.core.re_find.call(null,/^%/,cljs.core.name.call(null,param));
} else {
return and__23164__auto__;
}
}); return (
new cljs.core.Var(function(){return poppea$macros.parameter_capture_QMARK_;},new cljs.core.Symbol("poppea$macros","parameter-capture?","poppea$macros/parameter-capture?",(30436933),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"parameter-capture?","parameter-capture?",(-1064226411),null),"poppea.clj",(25),(1),(72),(72),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"param","param",(-640803946),null)], null)),null,(cljs.core.truth_(poppea$macros.parameter_capture_QMARK_)?poppea$macros.parameter_capture_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
poppea$macros.bound_index = (function poppea$macros$bound_index(param){
if(cljs.core.truth_(poppea$macros.parameter_capture_QMARK_.call(null,param))){
var s = cljs.core.name.call(null,param).substring((1));
var a = cljs.tools.reader.edn.read_string.call(null,s);
if(typeof a === 'number'){
return (a - (1));
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,s),(0))){
return (0);
} else {
return null;
}
}
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return poppea$macros.bound_index;},new cljs.core.Symbol("poppea$macros","bound-index","poppea$macros/bound-index",(-828132023),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"bound-index","bound-index",(266532665),null),"poppea.clj",(18),(1),(76),(76),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"param","param",(-640803946),null)], null)),null,(cljs.core.truth_(poppea$macros.bound_index)?poppea$macros.bound_index.cljs$lang$test:null)])));})()
;
poppea$macros.defn_curried.call(null,poppea$macros.include__PERCENT_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [poppea$macros.params,poppea$macros.bound,poppea$macros.index], null),(cljs.core.truth_(poppea$macros.index)?cljs.core.nth.call(null,poppea$macros.params,poppea$macros.index):poppea$macros.bound));
(function (){
poppea$macros.bound_params = (function poppea$macros$bound_params(this$){
return cljs.core.remove.call(null,(function (p1__4_SHARP_){
return cljs.core._EQ_.call(null,p1__4_SHARP_,new cljs.core.Keyword("poppea","missing","poppea/missing",(1546305828)));
}),cljs.core.map.call(null,(function (p1__3_SHARP_){
return cljs.core.get.call(null,this$,p1__3_SHARP_,new cljs.core.Keyword("poppea","missing","poppea/missing",(1546305828)));
}),poppea$macros.binding_symbols_for_var.call(null,new cljs.core.Keyword("poppea","function","poppea/function",(1132738988)).cljs$core$IFn$_invoke$arity$1(this$))));
}); return (
new cljs.core.Var(function(){return poppea$macros.bound_params;},new cljs.core.Symbol("poppea$macros","bound-params","poppea$macros/bound-params",(-1885440792),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"bound-params","bound-params",(819934904),null),"poppea.clj",(19),(1),(88),(88),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),null,(cljs.core.truth_(poppea$macros.bound_params)?poppea$macros.bound_params.cljs$lang$test:null)])));})()
;
(function (){
poppea$macros.partial_invoke__PERCENT_ = (function poppea$macros$partial_invoke__PERCENT_(var_args){
var args__24990__auto__ = [];
var len__24987__auto___162 = arguments.length;
var i__24988__auto___163 = (0);
while(true){
if((i__24988__auto___163 < len__24987__auto___162)){
args__24990__auto__.push((arguments[i__24988__auto___163]));

var G__164 = (i__24988__auto___163 + (1));
i__24988__auto___163 = G__164;
continue;
} else {
}
break;
}

var argseq__24991__auto__ = ((((1) < args__24990__auto__.length))?(new cljs.core.IndexedSeq(args__24990__auto__.slice((1)),(0),null)):null);
return poppea$macros.partial_invoke__PERCENT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24991__auto__);
}); return (
new cljs.core.Var(function(){return poppea$macros.partial_invoke__PERCENT_;},new cljs.core.Symbol("poppea$macros","partial-invoke-%","poppea$macros/partial-invoke-%",(944027375),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"partial-invoke-%","partial-invoke-%",(-16354273),null),"poppea.clj",(23),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(94),(94),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),null,(cljs.core.truth_(poppea$macros.partial_invoke__PERCENT_)?poppea$macros.partial_invoke__PERCENT_.cljs$lang$test:null)])));})()
;

poppea$macros.partial_invoke__PERCENT_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,params){
var bound_params = poppea$macros.bound_params.call(null,this$);
var indexes = cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,poppea$macros.bound_index,bound_params));
var non_nil_indexes = cljs.core.remove.call(null,cljs.core.nil_QMARK_,indexes);
var c = ((cljs.core.empty_QMARK_.call(null,non_nil_indexes))?(0):(cljs.core.apply.call(null,cljs.core.max,non_nil_indexes) + (1)));
return cljs.core.apply.call(null,new cljs.core.Keyword("poppea","function","poppea/function",(1132738988)).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.concat.call(null,cljs.core.map.call(null,poppea$macros.include__PERCENT_.call(null,params),bound_params,indexes),cljs.core.drop.call(null,c,params)));
});

poppea$macros.partial_invoke__PERCENT_.cljs$lang$maxFixedArity = (1);

poppea$macros.partial_invoke__PERCENT_.cljs$lang$applyTo = (function (seq160){
var G__161 = cljs.core.first.call(null,seq160);
var seq160__$1 = cljs.core.next.call(null,seq160);
return poppea$macros.partial_invoke__PERCENT_.cljs$core$IFn$_invoke$arity$variadic(G__161,seq160__$1);
});

new cljs.core.Var(function(){return poppea$macros.partial_invoke__PERCENT_;},new cljs.core.Symbol("poppea$macros","partial-invoke-%","poppea$macros/partial-invoke-%",(944027375),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"partial-invoke-%","partial-invoke-%",(-16354273),null),"poppea.clj",(23),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(94),(94),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),null,(cljs.core.truth_(poppea$macros.partial_invoke__PERCENT_)?poppea$macros.partial_invoke__PERCENT_.cljs$lang$test:null)]));
(function (){
poppea$macros.partial_invoke = (function poppea$macros$partial_invoke(var_args){
var args__24990__auto__ = [];
var len__24987__auto___167 = arguments.length;
var i__24988__auto___168 = (0);
while(true){
if((i__24988__auto___168 < len__24987__auto___167)){
args__24990__auto__.push((arguments[i__24988__auto___168]));

var G__169 = (i__24988__auto___168 + (1));
i__24988__auto___168 = G__169;
continue;
} else {
}
break;
}

var argseq__24991__auto__ = ((((1) < args__24990__auto__.length))?(new cljs.core.IndexedSeq(args__24990__auto__.slice((1)),(0),null)):null);
return poppea$macros.partial_invoke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24991__auto__);
}); return (
new cljs.core.Var(function(){return poppea$macros.partial_invoke;},new cljs.core.Symbol("poppea$macros","partial-invoke","poppea$macros/partial-invoke",(100314439),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"partial-invoke","partial-invoke",(1153036087),null),"poppea.clj",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(105),(105),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),null,(cljs.core.truth_(poppea$macros.partial_invoke)?poppea$macros.partial_invoke.cljs$lang$test:null)])));})()
;

poppea$macros.partial_invoke.cljs$core$IFn$_invoke$arity$variadic = (function (this$,params){
return cljs.core.apply.call(null,new cljs.core.Keyword("poppea","function","poppea/function",(1132738988)).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.concat.call(null,poppea$macros.bound_params.call(null,this$),params));
});

poppea$macros.partial_invoke.cljs$lang$maxFixedArity = (1);

poppea$macros.partial_invoke.cljs$lang$applyTo = (function (seq165){
var G__166 = cljs.core.first.call(null,seq165);
var seq165__$1 = cljs.core.next.call(null,seq165);
return poppea$macros.partial_invoke.cljs$core$IFn$_invoke$arity$variadic(G__166,seq165__$1);
});

new cljs.core.Var(function(){return poppea$macros.partial_invoke;},new cljs.core.Symbol("poppea$macros","partial-invoke","poppea$macros/partial-invoke",(100314439),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"partial-invoke","partial-invoke",(1153036087),null),"poppea.clj",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(105),(105),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),null,(cljs.core.truth_(poppea$macros.partial_invoke)?poppea$macros.partial_invoke.cljs$lang$test:null)]));
(function (){
poppea$macros.record_lookup = (function poppea$macros$record_lookup(var_args){
var args__24990__auto__ = [];
var len__24987__auto___172 = arguments.length;
var i__24988__auto___173 = (0);
while(true){
if((i__24988__auto___173 < len__24987__auto___172)){
args__24990__auto__.push((arguments[i__24988__auto___173]));

var G__174 = (i__24988__auto___173 + (1));
i__24988__auto___173 = G__174;
continue;
} else {
}
break;
}

var argseq__24991__auto__ = ((((1) < args__24990__auto__.length))?(new cljs.core.IndexedSeq(args__24990__auto__.slice((1)),(0),null)):null);
return poppea$macros.record_lookup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24991__auto__);
}); return (
new cljs.core.Var(function(){return poppea$macros.record_lookup;},new cljs.core.Symbol("poppea$macros","record-lookup","poppea$macros/record-lookup",(84541060),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"record-lookup","record-lookup",(1146502356),null),"poppea.clj",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"path","path",(1452340359),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"path","path",(1452340359),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(110),(110),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"path","path",(1452340359),null)], null)),null,(cljs.core.truth_(poppea$macros.record_lookup)?poppea$macros.record_lookup.cljs$lang$test:null)])));})()
;

poppea$macros.record_lookup.cljs$core$IFn$_invoke$arity$variadic = (function (this$,path){
return cljs.core.get_in.call(null,this$,path,null);
});

poppea$macros.record_lookup.cljs$lang$maxFixedArity = (1);

poppea$macros.record_lookup.cljs$lang$applyTo = (function (seq170){
var G__171 = cljs.core.first.call(null,seq170);
var seq170__$1 = cljs.core.next.call(null,seq170);
return poppea$macros.record_lookup.cljs$core$IFn$_invoke$arity$variadic(G__171,seq170__$1);
});

new cljs.core.Var(function(){return poppea$macros.record_lookup;},new cljs.core.Symbol("poppea$macros","record-lookup","poppea$macros/record-lookup",(84541060),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"record-lookup","record-lookup",(1146502356),null),"poppea.clj",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"path","path",(1452340359),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"path","path",(1452340359),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(110),(110),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"path","path",(1452340359),null)], null)),null,(cljs.core.truth_(poppea$macros.record_lookup)?poppea$macros.record_lookup.cljs$lang$test:null)]));
var ret__25038__auto___179 = (function (){
(function (){
poppea$macros.defrecord_fn = (function poppea$macros$defrecord_fn(var_args){
var args__24990__auto__ = [];
var len__24987__auto___180 = arguments.length;
var i__24988__auto___181 = (0);
while(true){
if((i__24988__auto___181 < len__24987__auto___180)){
args__24990__auto__.push((arguments[i__24988__auto___181]));

var G__182 = (i__24988__auto___181 + (1));
i__24988__auto___181 = G__182;
continue;
} else {
}
break;
}

var argseq__24991__auto__ = ((((3) < args__24990__auto__.length))?(new cljs.core.IndexedSeq(args__24990__auto__.slice((3)),(0),null)):null);
return poppea$macros.defrecord_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__24991__auto__);
}); return (
new cljs.core.Var(function(){return poppea$macros.defrecord_fn;},new cljs.core.Symbol("poppea$macros","defrecord-fn","poppea$macros/defrecord-fn",(1588934667),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"defrecord-fn","defrecord-fn",(-1670120709),null),"poppea.clj",(23),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"function-symbol","function-symbol",(304463257),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"function-symbol","function-symbol",(304463257),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(112),true,(112),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"function-symbol","function-symbol",(304463257),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null)], null)),null,(cljs.core.truth_(poppea$macros.defrecord_fn)?poppea$macros.defrecord_fn.cljs$lang$test:null)])));})()
;

poppea$macros.defrecord_fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,function_symbol,definition){
var invoke = cljs.core.symbol.call(null,"invoke");
var applyTo = cljs.core.symbol.call(null,"applyTo");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"defrecord","defrecord",(273038109),null)], null),definition,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure","lang.IFn","clojure/lang.IFn",(1718363844),null)),(function (){var x__24698__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__24698__auto__ = invoke;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),(function (){var x__24698__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__5__auto__","this__5__auto__",(1886851669),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),(function (){var x__24698__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__24698__auto__ = function_symbol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__5__auto__","this__5__auto__",(1886851669),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),(function (){var x__24698__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__24698__auto__ = invoke;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),(function (){var x__24698__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__5__auto__","this__5__auto__",(1886851669),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__6__auto__","a__6__auto__",(-1155530851),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),(function (){var x__24698__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__24698__auto__ = function_symbol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__5__auto__","this__5__auto__",(1886851669),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__6__auto__","a__6__auto__",(-1155530851),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),(function (){var x__24698__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__24698__auto__ = invoke;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),(function (){var x__24698__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__5__auto__","this__5__auto__",(1886851669),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__6__auto__","a__6__auto__",(-1155530851),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"b__7__auto__","b__7__auto__",(1726640501),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),(function (){var x__24698__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__24698__auto__ = function_symbol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__5__auto__","this__5__auto__",(1886851669),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__6__auto__","a__6__auto__",(-1155530851),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"b__7__auto__","b__7__auto__",(1726640501),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),(function (){var x__24698__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__24698__auto__ = invoke;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),(function (){var x__24698__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__5__auto__","this__5__auto__",(1886851669),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__6__auto__","a__6__auto__",(-1155530851),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"b__7__auto__","b__7__auto__",(1726640501),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__8__auto__","c__8__auto__",(-894046096),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),(function (){var x__24698__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__24698__auto__ = function_symbol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__5__auto__","this__5__auto__",(1886851669),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__6__auto__","a__6__auto__",(-1155530851),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"b__7__auto__","b__7__auto__",(1726640501),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__8__auto__","c__8__auto__",(-894046096),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),(function (){var x__24698__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__24698__auto__ = invoke;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),(function (){var x__24698__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__5__auto__","this__5__auto__",(1886851669),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__6__auto__","a__6__auto__",(-1155530851),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"b__7__auto__","b__7__auto__",(1726640501),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__8__auto__","c__8__auto__",(-894046096),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"d__9__auto__","d__9__auto__",(-1430738633),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),(function (){var x__24698__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__24698__auto__ = function_symbol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__5__auto__","this__5__auto__",(1886851669),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__6__auto__","a__6__auto__",(-1155530851),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"b__7__auto__","b__7__auto__",(1726640501),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__8__auto__","c__8__auto__",(-894046096),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"d__9__auto__","d__9__auto__",(-1430738633),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),(function (){var x__24698__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__24698__auto__ = invoke;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),(function (){var x__24698__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__5__auto__","this__5__auto__",(1886851669),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__6__auto__","a__6__auto__",(-1155530851),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"b__7__auto__","b__7__auto__",(1726640501),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__8__auto__","c__8__auto__",(-894046096),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"d__9__auto__","d__9__auto__",(-1430738633),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__10__auto__","e__10__auto__",(-1598227957),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),(function (){var x__24698__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__24698__auto__ = function_symbol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__5__auto__","this__5__auto__",(1886851669),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__6__auto__","a__6__auto__",(-1155530851),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"b__7__auto__","b__7__auto__",(1726640501),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__8__auto__","c__8__auto__",(-894046096),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"d__9__auto__","d__9__auto__",(-1430738633),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__10__auto__","e__10__auto__",(-1598227957),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),(function (){var x__24698__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__24698__auto__ = applyTo;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),(function (){var x__24698__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__5__auto__","this__5__auto__",(1886851669),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__11__auto__","args__11__auto__",(-1367596498),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),(function (){var x__24698__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.lang.AFn","applyToHelper","clojure.lang.AFn/applyToHelper",(613353815),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__5__auto__","this__5__auto__",(1886851669),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__11__auto__","args__11__auto__",(-1367596498),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})())));
});

poppea$macros.defrecord_fn.cljs$lang$maxFixedArity = (3);

poppea$macros.defrecord_fn.cljs$lang$applyTo = (function (seq175){
var G__176 = cljs.core.first.call(null,seq175);
var seq175__$1 = cljs.core.next.call(null,seq175);
var G__177 = cljs.core.first.call(null,seq175__$1);
var seq175__$2 = cljs.core.next.call(null,seq175__$1);
var G__178 = cljs.core.first.call(null,seq175__$2);
var seq175__$3 = cljs.core.next.call(null,seq175__$2);
return poppea$macros.defrecord_fn.cljs$core$IFn$_invoke$arity$variadic(G__176,G__177,G__178,seq175__$3);
});

return new cljs.core.Var(function(){return poppea$macros.defrecord_fn;},new cljs.core.Symbol("poppea$macros","defrecord-fn","poppea$macros/defrecord-fn",(1588934667),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"defrecord-fn","defrecord-fn",(-1670120709),null),"poppea.clj",(23),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"function-symbol","function-symbol",(304463257),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"function-symbol","function-symbol",(304463257),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(112),true,(112),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"function-symbol","function-symbol",(304463257),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null)], null)),null,(cljs.core.truth_(poppea$macros.defrecord_fn)?poppea$macros.defrecord_fn.cljs$lang$test:null)]));
})()
;
poppea$macros.defrecord_fn.cljs$lang$macro = true;

poppea$macros.defrecord_fn.call(null,poppea$macros.partial_invoke__PERCENT_,poppea$macros.DocumentedPartialArg,cljs.core.PersistentVector.EMPTY);
poppea$macros.defrecord_fn.call(null,poppea$macros.partial_invoke,poppea$macros.DocumentedPartial,cljs.core.PersistentVector.EMPTY);
(function (){
poppea$macros.document_partial_map = (function poppea$macros$document_partial_map(symbol,process,params){
if(!((poppea$macros.resolve.call(null,symbol) == null))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Could not resolve "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(not (nil? (resolve symbol)))")].join('')));
}

var function$ = poppea$macros.resolve.call(null,symbol);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",(303385767),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("poppea","function","poppea/function",(1132738988))),(function (){var x__24698__auto__ = function$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})(),cljs.core.interleave.call(null,poppea$macros.binding_symbols_for_var.call(null,function$),cljs.core.map.call(null,process,params))));
}); return (
new cljs.core.Var(function(){return poppea$macros.document_partial_map;},new cljs.core.Symbol("poppea$macros","document-partial-map","poppea$macros/document-partial-map",(1378550415),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"document-partial-map","document-partial-map",(-1821720385),null),"poppea.clj",(27),(1),(137),(137),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",(601958831),null),new cljs.core.Symbol(null,"process","process",(-1011242831),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),null,(cljs.core.truth_(poppea$macros.document_partial_map)?poppea$macros.document_partial_map.cljs$lang$test:null)])));})()
;
(function (){
poppea$macros.capture__PERCENT_ = (function poppea$macros$capture__PERCENT_(s){
if(cljs.core.truth_(poppea$macros.parameter_capture_QMARK_.call(null,s))){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__24698__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})()));
} else {
return s;
}
}); return (
new cljs.core.Var(function(){return poppea$macros.capture__PERCENT_;},new cljs.core.Symbol("poppea$macros","capture-%","poppea$macros/capture-%",(-1589200925),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"capture-%","capture-%",(-528452333),null),"poppea.clj",(16),(1),(146),(146),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),null,(cljs.core.truth_(poppea$macros.capture__PERCENT_)?poppea$macros.capture__PERCENT_.cljs$lang$test:null)])));})()
;
var ret__25038__auto___187 = (function (){
(function (){
poppea$macros.document_partial__PERCENT_ = (function poppea$macros$document_partial__PERCENT_(var_args){
var args__24990__auto__ = [];
var len__24987__auto___188 = arguments.length;
var i__24988__auto___189 = (0);
while(true){
if((i__24988__auto___189 < len__24987__auto___188)){
args__24990__auto__.push((arguments[i__24988__auto___189]));

var G__190 = (i__24988__auto___189 + (1));
i__24988__auto___189 = G__190;
continue;
} else {
}
break;
}

var argseq__24991__auto__ = ((((3) < args__24990__auto__.length))?(new cljs.core.IndexedSeq(args__24990__auto__.slice((3)),(0),null)):null);
return poppea$macros.document_partial__PERCENT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__24991__auto__);
}); return (
new cljs.core.Var(function(){return poppea$macros.document_partial__PERCENT_;},new cljs.core.Symbol("poppea$macros","document-partial-%","poppea$macros/document-partial-%",(13653147),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"document-partial-%","document-partial-%",(-820962613),null),"poppea.clj",(29),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"symbol","symbol",(601958831),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"symbol","symbol",(601958831),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(149),true,(149),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"symbol","symbol",(601958831),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),null,(cljs.core.truth_(poppea$macros.document_partial__PERCENT_)?poppea$macros.document_partial__PERCENT_.cljs$lang$test:null)])));})()
;

poppea$macros.document_partial__PERCENT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,symbol,params){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("poppea","map->DocumentedPartialArg","poppea/map->DocumentedPartialArg",(1686148062),null)),(function (){var x__24698__auto__ = poppea$macros.document_partial_map.call(null,symbol,poppea$macros.capture__PERCENT_,params);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})()));
});

poppea$macros.document_partial__PERCENT_.cljs$lang$maxFixedArity = (3);

poppea$macros.document_partial__PERCENT_.cljs$lang$applyTo = (function (seq183){
var G__184 = cljs.core.first.call(null,seq183);
var seq183__$1 = cljs.core.next.call(null,seq183);
var G__185 = cljs.core.first.call(null,seq183__$1);
var seq183__$2 = cljs.core.next.call(null,seq183__$1);
var G__186 = cljs.core.first.call(null,seq183__$2);
var seq183__$3 = cljs.core.next.call(null,seq183__$2);
return poppea$macros.document_partial__PERCENT_.cljs$core$IFn$_invoke$arity$variadic(G__184,G__185,G__186,seq183__$3);
});

return new cljs.core.Var(function(){return poppea$macros.document_partial__PERCENT_;},new cljs.core.Symbol("poppea$macros","document-partial-%","poppea$macros/document-partial-%",(13653147),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"document-partial-%","document-partial-%",(-820962613),null),"poppea.clj",(29),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"symbol","symbol",(601958831),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"symbol","symbol",(601958831),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(149),true,(149),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"symbol","symbol",(601958831),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),null,(cljs.core.truth_(poppea$macros.document_partial__PERCENT_)?poppea$macros.document_partial__PERCENT_.cljs$lang$test:null)]));
})()
;
poppea$macros.document_partial__PERCENT_.cljs$lang$macro = true;

var ret__25038__auto___195 = (function (){
(function (){
poppea$macros.document_partial = (function poppea$macros$document_partial(var_args){
var args__24990__auto__ = [];
var len__24987__auto___196 = arguments.length;
var i__24988__auto___197 = (0);
while(true){
if((i__24988__auto___197 < len__24987__auto___196)){
args__24990__auto__.push((arguments[i__24988__auto___197]));

var G__198 = (i__24988__auto___197 + (1));
i__24988__auto___197 = G__198;
continue;
} else {
}
break;
}

var argseq__24991__auto__ = ((((3) < args__24990__auto__.length))?(new cljs.core.IndexedSeq(args__24990__auto__.slice((3)),(0),null)):null);
return poppea$macros.document_partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__24991__auto__);
}); return (
new cljs.core.Var(function(){return poppea$macros.document_partial;},new cljs.core.Symbol("poppea$macros","document-partial","poppea$macros/document-partial",(112419835),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"document-partial","document-partial",(1240489387),null),"poppea.clj",(27),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"symbol","symbol",(601958831),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"symbol","symbol",(601958831),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(153),true,(153),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"symbol","symbol",(601958831),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),null,(cljs.core.truth_(poppea$macros.document_partial)?poppea$macros.document_partial.cljs$lang$test:null)])));})()
;

poppea$macros.document_partial.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,symbol,params){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("poppea","map->DocumentedPartial","poppea/map->DocumentedPartial",(-575351360),null)),(function (){var x__24698__auto__ = poppea$macros.document_partial_map.call(null,symbol,cljs.core.identity,params);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24698__auto__);
})()));
});

poppea$macros.document_partial.cljs$lang$maxFixedArity = (3);

poppea$macros.document_partial.cljs$lang$applyTo = (function (seq191){
var G__192 = cljs.core.first.call(null,seq191);
var seq191__$1 = cljs.core.next.call(null,seq191);
var G__193 = cljs.core.first.call(null,seq191__$1);
var seq191__$2 = cljs.core.next.call(null,seq191__$1);
var G__194 = cljs.core.first.call(null,seq191__$2);
var seq191__$3 = cljs.core.next.call(null,seq191__$2);
return poppea$macros.document_partial.cljs$core$IFn$_invoke$arity$variadic(G__192,G__193,G__194,seq191__$3);
});

return new cljs.core.Var(function(){return poppea$macros.document_partial;},new cljs.core.Symbol("poppea$macros","document-partial","poppea$macros/document-partial",(112419835),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"document-partial","document-partial",(1240489387),null),"poppea.clj",(27),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"symbol","symbol",(601958831),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"symbol","symbol",(601958831),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(153),true,(153),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"symbol","symbol",(601958831),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),null,(cljs.core.truth_(poppea$macros.document_partial)?poppea$macros.document_partial.cljs$lang$test:null)]));
})()
;
poppea$macros.document_partial.cljs$lang$macro = true;

var ret__25038__auto___202 = (function (){
(function (){
poppea$macros.defrecord_get = (function poppea$macros$defrecord_get(var_args){
var args__24990__auto__ = [];
var len__24987__auto___203 = arguments.length;
var i__24988__auto___204 = (0);
while(true){
if((i__24988__auto___204 < len__24987__auto___203)){
args__24990__auto__.push((arguments[i__24988__auto___204]));

var G__205 = (i__24988__auto___204 + (1));
i__24988__auto___204 = G__205;
continue;
} else {
}
break;
}

var argseq__24991__auto__ = ((((2) < args__24990__auto__.length))?(new cljs.core.IndexedSeq(args__24990__auto__.slice((2)),(0),null)):null);
return poppea$macros.defrecord_get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__24991__auto__);
}); return (
new cljs.core.Var(function(){return poppea$macros.defrecord_get;},new cljs.core.Symbol("poppea$macros","defrecord-get","poppea$macros/defrecord-get",(-998301081),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"defrecord-get","defrecord-get",(-2059637705),null),"poppea.clj",(24),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(157),true,(157),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null)], null)),null,(cljs.core.truth_(poppea$macros.defrecord_get)?poppea$macros.defrecord_get.cljs$lang$test:null)])));})()
;

poppea$macros.defrecord_get.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,definition){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("poppea","defrecord-fn","poppea/defrecord-fn",(1508068288),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("poppea","record-lookup","poppea/record-lookup",(530992447),null)),definition));
});

poppea$macros.defrecord_get.cljs$lang$maxFixedArity = (2);

poppea$macros.defrecord_get.cljs$lang$applyTo = (function (seq199){
var G__200 = cljs.core.first.call(null,seq199);
var seq199__$1 = cljs.core.next.call(null,seq199);
var G__201 = cljs.core.first.call(null,seq199__$1);
var seq199__$2 = cljs.core.next.call(null,seq199__$1);
return poppea$macros.defrecord_get.cljs$core$IFn$_invoke$arity$variadic(G__200,G__201,seq199__$2);
});

return new cljs.core.Var(function(){return poppea$macros.defrecord_get;},new cljs.core.Symbol("poppea$macros","defrecord-get","poppea$macros/defrecord-get",(-998301081),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"defrecord-get","defrecord-get",(-2059637705),null),"poppea.clj",(24),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(157),true,(157),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"definition","definition",(441801545),null)], null)),null,(cljs.core.truth_(poppea$macros.defrecord_get)?poppea$macros.defrecord_get.cljs$lang$test:null)]));
})()
;
poppea$macros.defrecord_get.cljs$lang$macro = true;

(function (){
poppea$macros.at = (function poppea$macros$at(yield$){
return (function() {
var G__206 = null;
var G__206__0 = (function (){
cljs.core.println.call(null,"Arity 0");

return yield$.call(null);
});
var G__206__1 = (function (x){
cljs.core.println.call(null,"Arity 1");

return yield$.call(null,x);
});
var G__206__2 = (function (r,x){
cljs.core.println.call(null,"Arity 2");

(function (){
poppea$macros.p0 = yield$; return (
new cljs.core.Var(function(){return poppea$macros.p0;},new cljs.core.Symbol("poppea$macros","p0","poppea$macros/p0",(-263301434),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"p0","p0",(-1097897962),null),"poppea.clj",(15),(8),(164),(164),cljs.core.List.EMPTY,null,(cljs.core.truth_(poppea$macros.p0)?poppea$macros.p0.cljs$lang$test:null)])));})()
;

(function (){
poppea$macros.p1 = r; return (
new cljs.core.Var(function(){return poppea$macros.p1;},new cljs.core.Symbol("poppea$macros","p1","poppea$macros/p1",(-281809563),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"p1","p1",(703771573),null),"poppea.clj",(15),(8),(165),(165),cljs.core.List.EMPTY,null,(cljs.core.truth_(poppea$macros.p1)?poppea$macros.p1.cljs$lang$test:null)])));})()
;

(function (){
poppea$macros.p2 = x; return (
new cljs.core.Var(function(){return poppea$macros.p2;},new cljs.core.Symbol("poppea$macros","p2","poppea$macros/p2",(1459511416),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"p2","p2",(-1748935128),null),"poppea.clj",(15),(8),(166),(166),cljs.core.List.EMPTY,null,(cljs.core.truth_(poppea$macros.p2)?poppea$macros.p2.cljs$lang$test:null)])));})()
;

return yield$.call(null,r,x);
});
G__206 = function(r,x){
switch(arguments.length){
case 0:
return G__206__0.call(this);
case 1:
return G__206__1.call(this,r);
case 2:
return G__206__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__206.cljs$core$IFn$_invoke$arity$0 = G__206__0;
G__206.cljs$core$IFn$_invoke$arity$1 = G__206__1;
G__206.cljs$core$IFn$_invoke$arity$2 = G__206__2;
return G__206;
})()
}); return (
new cljs.core.Var(function(){return poppea$macros.at;},new cljs.core.Symbol("poppea$macros","at","poppea$macros/at",(2023145804),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"poppea$macros","poppea$macros",(1474220127),null),new cljs.core.Symbol(null,"at","at",(-1177484420),null),"poppea.clj",(9),(1),(160),(160),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"yield","yield",(1818406536),null)], null)),null,(cljs.core.truth_(poppea$macros.at)?poppea$macros.at.cljs$lang$test:null)])));})()
;
