goog.provide("clojure.test.check.properties");
(function (){
clojure.test.check.properties.apply_gen = (function clojure$test$check$properties$apply_gen(function$){
return (function (args){
var result = (function (){try{return cljs.core.apply.call(null,function$,args);
}catch (e491){var t = e491;
return t;
}})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",(1315556576)),args,new cljs.core.Keyword(null,"function","function",(-2127255473)),function$,new cljs.core.Keyword(null,"result","result",(1415092211)),result], null);
});
}); return (
new cljs.core.Var(function(){return clojure.test.check.properties.apply_gen;},new cljs.core.Symbol("clojure.test.check.properties","apply-gen","clojure.test.check.properties/apply-gen",(-1238894043),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.properties","clojure.test.check.properties",(-1352974441),null),new cljs.core.Symbol(null,"apply-gen","apply-gen",(1310317070),null),"clojure/test/check/properties.cljc",(17),(1),(13),(13),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"function","function",(-486723946),null)], null)),null,(cljs.core.truth_(clojure.test.check.properties.apply_gen)?clojure.test.check.properties.apply_gen.cljs$lang$test:null)])));})()
;
/**
 * Creates a property (properties are also generators). A property
 *   is a generator that generates the result of applying the function
 *   under test with the realized arguments. Once realized, the arguments
 *   will be applied to `function` with `apply`.
 * 
 *   Example:
 * 
 *   (for-all* [gen/int gen/int] (fn [a b] (>= (+ a b) a)))
 *   
 */
(function (){
clojure.test.check.properties.for_all_STAR_ = (function clojure$test$check$properties$for_all_STAR_(args,function$){
return clojure.test.check.generators.fmap.call(null,clojure.test.check.properties.apply_gen.call(null,function$),cljs.core.apply.call(null,clojure.test.check.generators.tuple,args));
}); return (
new cljs.core.Var(function(){return clojure.test.check.properties.for_all_STAR_;},new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",(67088845),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.properties","clojure.test.check.properties",(-1352974441),null),new cljs.core.Symbol(null,"for-all*","for-all*",(1807061392),null),"clojure/test/check/properties.cljc",(15),(1),(23),(23),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"function","function",(-486723946),null)], null)),"Creates a property (properties are also generators). A property\n  is a generator that generates the result of applying the function\n  under test with the realized arguments. Once realized, the arguments\n  will be applied to `function` with `apply`.\n\n  Example:\n\n  (for-all* [gen/int gen/int] (fn [a b] (>= (+ a b) a)))\n  ",(cljs.core.truth_(clojure.test.check.properties.for_all_STAR_)?clojure.test.check.properties.for_all_STAR_.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.properties.binding_vars = (function clojure$test$check$properties$binding_vars(bindings){
return cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),bindings));
}); return (
new cljs.core.Var(function(){return clojure.test.check.properties.binding_vars;},new cljs.core.Symbol("clojure.test.check.properties","binding-vars","clojure.test.check.properties/binding-vars",(-1746489655),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.properties","clojure.test.check.properties",(-1352974441),null),new cljs.core.Symbol(null,"binding-vars","binding-vars",(-937636036),null),"clojure/test/check/properties.cljc",(20),(1),(38),(38),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null)], null)),null,(cljs.core.truth_(clojure.test.check.properties.binding_vars)?clojure.test.check.properties.binding_vars.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.properties.binding_gens = (function clojure$test$check$properties$binding_gens(bindings){
return cljs.core.map.call(null,cljs.core.second,cljs.core.partition.call(null,(2),bindings));
}); return (
new cljs.core.Var(function(){return clojure.test.check.properties.binding_gens;},new cljs.core.Symbol("clojure.test.check.properties","binding-gens","clojure.test.check.properties/binding-gens",(-99183592),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.properties","clojure.test.check.properties",(-1352974441),null),new cljs.core.Symbol(null,"binding-gens","binding-gens",(-1033341747),null),"clojure/test/check/properties.cljc",(20),(1),(42),(42),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null)], null)),null,(cljs.core.truth_(clojure.test.check.properties.binding_gens)?clojure.test.check.properties.binding_gens.cljs$lang$test:null)])));})()
;
/**
 * Macro sugar for `for-all*`. `for-all` lets you name the parameter
 *   and use them in expression, without wrapping them in a lambda. Like
 *   `for-all*`, it returns a property.
 * 
 *   Examples
 * 
 *   (for-all [a gen/int
 *          b gen/int]
 *  (>= (+ a b) a))
 *   
 */
(function (){
clojure.test.check.properties.for_all = (function clojure$test$check$properties$for_all(var_args){
var args__23658__auto__ = [];
var len__23656__auto___496 = arguments.length;
var i__23657__auto___497 = (0);
while(true){
if((i__23657__auto___497 < len__23656__auto___496)){
args__23658__auto__.push((arguments[i__23657__auto___497]));

var G__498 = (i__23657__auto___497 + (1));
i__23657__auto___497 = G__498;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((3) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((3)),(0),null)):null);
return clojure.test.check.properties.for_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return clojure.test.check.properties.for_all;},new cljs.core.Symbol("clojure.test.check.properties","for-all","clojure.test.check.properties/for-all",(-679618117),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.properties","clojure.test.check.properties",(-1352974441),null),new cljs.core.Symbol(null,"for-all","for-all",(-1079559698),null),"clojure/test/check/properties.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(46),true,(46),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Macro sugar for `for-all*`. `for-all` lets you name the parameter\n  and use them in expression, without wrapping them in a lambda. Like\n  `for-all*`, it returns a property.\n\n  Examples\n\n  (for-all [a gen/int\n            b gen/int]\n    (>= (+ a b) a))\n  ",(cljs.core.truth_(clojure.test.check.properties.for_all)?clojure.test.check.properties.for_all.cljs$lang$test:null)])));})()
;

clojure.test.check.properties.for_all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",(67088845),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,clojure.test.check.properties.binding_gens.call(null,bindings));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,clojure.test.check.properties.binding_vars.call(null,bindings))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
});

clojure.test.check.properties.for_all.cljs$lang$maxFixedArity = (3);

clojure.test.check.properties.for_all.cljs$lang$applyTo = (function (seq492){
var G__493 = cljs.core.first.call(null,seq492);
var seq492__$1 = cljs.core.next.call(null,seq492);
var G__494 = cljs.core.first.call(null,seq492__$1);
var seq492__$2 = cljs.core.next.call(null,seq492__$1);
var G__495 = cljs.core.first.call(null,seq492__$2);
var seq492__$3 = cljs.core.next.call(null,seq492__$2);
return clojure.test.check.properties.for_all.cljs$core$IFn$_invoke$arity$variadic(G__493,G__494,G__495,seq492__$3);
});

new cljs.core.Var(function(){return clojure.test.check.properties.for_all;},new cljs.core.Symbol("clojure.test.check.properties","for-all","clojure.test.check.properties/for-all",(-679618117),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.properties","clojure.test.check.properties",(-1352974441),null),new cljs.core.Symbol(null,"for-all","for-all",(-1079559698),null),"clojure/test/check/properties.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(46),true,(46),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Macro sugar for `for-all*`. `for-all` lets you name the parameter\n  and use them in expression, without wrapping them in a lambda. Like\n  `for-all*`, it returns a property.\n\n  Examples\n\n  (for-all [a gen/int\n            b gen/int]\n    (>= (+ a b) a))\n  ",(cljs.core.truth_(clojure.test.check.properties.for_all)?clojure.test.check.properties.for_all.cljs$lang$test:null)]));

clojure.test.check.properties.for_all.cljs$lang$macro = true;
