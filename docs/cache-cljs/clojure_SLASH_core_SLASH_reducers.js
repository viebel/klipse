goog.provide("clojure.core.reducers");
(function (){
clojure.core.reducers.fjtask = (function clojure$core$reducers$fjtask(f){
return f;
}); return (
new cljs.core.Var(function(){return clojure.core.reducers.fjtask;},new cljs.core.Symbol("clojure.core.reducers","fjtask","clojure.core.reducers/fjtask",(-1800585865),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"fjtask","fjtask",(1606727547),null),"clojure/core/reducers.cljs",(14),(1),(20),(20),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),null,(cljs.core.truth_(clojure.core.reducers.fjtask)?clojure.core.reducers.fjtask.cljs$lang$test:null)])));})()
;
(function (){
clojure.core.reducers.fjinvoke = (function clojure$core$reducers$fjinvoke(f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f());
}); return (
new cljs.core.Var(function(){return clojure.core.reducers.fjinvoke;},new cljs.core.Symbol("clojure.core.reducers","fjinvoke","clojure.core.reducers/fjinvoke",(-434177210),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"fjinvoke","fjinvoke",(-1556582070),null),"clojure/core/reducers.cljs",(16),(1),(23),(23),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),null,(cljs.core.truth_(clojure.core.reducers.fjinvoke)?clojure.core.reducers.fjinvoke.cljs$lang$test:null)])));})()
;
(function (){
clojure.core.reducers.fjfork = (function clojure$core$reducers$fjfork(task){
return task;
}); return (
new cljs.core.Var(function(){return clojure.core.reducers.fjfork;},new cljs.core.Symbol("clojure.core.reducers","fjfork","clojure.core.reducers/fjfork",(956713922),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"fjfork","fjfork",(1981611454),null),"clojure/core/reducers.cljs",(14),(1),(26),(26),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"task","task",(163923534),null)], null)),null,(cljs.core.truth_(clojure.core.reducers.fjfork)?clojure.core.reducers.fjfork.cljs$lang$test:null)])));})()
;
(function (){
clojure.core.reducers.fjjoin = (function clojure$core$reducers$fjjoin(task){
return (task.cljs$core$IFn$_invoke$arity$0 ? task.cljs$core$IFn$_invoke$arity$0() : task());
}); return (
new cljs.core.Var(function(){return clojure.core.reducers.fjjoin;},new cljs.core.Symbol("clojure.core.reducers","fjjoin","clojure.core.reducers/fjjoin",(2142119141),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"fjjoin","fjjoin",(951423721),null),"clojure/core/reducers.cljs",(14),(1),(29),(29),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"task","task",(163923534),null)], null)),null,(cljs.core.truth_(clojure.core.reducers.fjjoin)?clojure.core.reducers.fjjoin.cljs$lang$test:null)])));})()
;
/**
 * Like core/reduce except:
 *   When init is not provided, (f) is used.
 *   Maps are reduced with reduce-kv
 */
(function (){
clojure.core.reducers.reduce = (function clojure$core$reducers$reduce(var_args){
var G__2421 = arguments.length;
switch (G__2421) {
case (2):
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return clojure.core.reducers.reduce;},new cljs.core.Symbol("clojure.core.reducers","reduce","clojure.core.reducers/reduce",(495039540),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"reduce","reduce",(1358839360),null),"clojure/core/reducers.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"init","init",(-234949907),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"init","init",(-234949907),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(33),(33),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"init","init",(-234949907),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Like core/reduce except:\n     When init is not provided, (f) is used.\n     Maps are reduced with reduce-kv",(cljs.core.truth_(clojure.core.reducers.reduce)?clojure.core.reducers.reduce.cljs$lang$test:null)])));})()
;

clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(f,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f()),coll);
});

clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3 = (function (f,init,coll){
if(cljs.core.map_QMARK_(coll)){
return cljs.core._kv_reduce(coll,f,init);
} else {
if((coll == null)){
return init;
} else {
if(cljs.core.array_QMARK_(coll)){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,init);
} else {
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(coll,f,init);

}
}
}
});

clojure.core.reducers.reduce.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return clojure.core.reducers.reduce;},new cljs.core.Symbol("clojure.core.reducers","reduce","clojure.core.reducers/reduce",(495039540),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"reduce","reduce",(1358839360),null),"clojure/core/reducers.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"init","init",(-234949907),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"init","init",(-234949907),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(33),(33),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"init","init",(-234949907),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Like core/reduce except:\n     When init is not provided, (f) is used.\n     Maps are reduced with reduce-kv",(cljs.core.truth_(clojure.core.reducers.reduce)?clojure.core.reducers.reduce.cljs$lang$test:null)]));

/**
 * @interface
 */
(function (){
clojure.core.reducers.CollFold = function(){}; return (
new cljs.core.Var(function(){return clojure.core.reducers.CollFold;},new cljs.core.Symbol("clojure.core.reducers","CollFold","clojure.core.reducers/CollFold",(2143788385),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"CollFold","CollFold",(-1260262547),null),"clojure/core/reducers.cljs",(22),(1),(46),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.with_meta(new cljs.core.Symbol(null,"coll-fold","coll-fold",(400453501),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"combinef","combinef",(2095886860),null),new cljs.core.Symbol(null,"reducef","reducef",(1835338990),null)], null)], null)])], null),(46),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),((clojure.core.reducers.CollFold)?clojure.core.reducers.CollFold.cljs$lang$test:null)])));})()
;

(function (){
clojure.core.reducers.coll_fold = (function clojure$core$reducers$coll_fold(coll,n,combinef,reducef){
if((!((coll == null))) && (!((coll.clojure$core$reducers$CollFold$coll_fold$arity$4 == null)))){
return coll.clojure$core$reducers$CollFold$coll_fold$arity$4(coll,n,combinef,reducef);
} else {
var x__22676__auto__ = (((coll == null))?null:coll);
var m__22677__auto__ = (clojure.core.reducers.coll_fold[goog.typeOf(x__22676__auto__)]);
if(!((m__22677__auto__ == null))){
return (m__22677__auto__.cljs$core$IFn$_invoke$arity$4 ? m__22677__auto__.cljs$core$IFn$_invoke$arity$4(coll,n,combinef,reducef) : m__22677__auto__(coll,n,combinef,reducef));
} else {
var m__22677__auto____$1 = (clojure.core.reducers.coll_fold["_"]);
if(!((m__22677__auto____$1 == null))){
return (m__22677__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__22677__auto____$1.cljs$core$IFn$_invoke$arity$4(coll,n,combinef,reducef) : m__22677__auto____$1(coll,n,combinef,reducef));
} else {
throw cljs.core.missing_protocol("CollFold.coll-fold",coll);
}
}
}
}); return (
new cljs.core.Var(function(){return clojure.core.reducers.coll_fold;},new cljs.core.Symbol("clojure.core.reducers","coll-fold","clojure.core.reducers/coll-fold",(1791490417),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("clojure.core.reducers","CollFold","clojure.core.reducers/CollFold",(2143788385),null),cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"coll-fold","coll-fold",(400453501),null),"clojure/core/reducers.cljs",(13),(1),(46),(47),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"combinef","combinef",(2095886860),null),new cljs.core.Symbol(null,"reducef","reducef",(1835338990),null)], null)),null,((clojure.core.reducers.coll_fold)?clojure.core.reducers.coll_fold.cljs$lang$test:null)])));})()
;

/**
 * Reduces a collection using a (potentially parallel) reduce-combine
 *   strategy. The collection is partitioned into groups of approximately
 *   n (default 512), each of which is reduced with reducef (with a seed
 *   value obtained by calling (combinef) with no arguments). The results
 *   of these reductions are then reduced with combinef (default
 *   reducef). combinef must be associative, and, when called with no
 *   arguments, (combinef) must produce its identity element. These
 *   operations may be performed in parallel, but the results will
 *   preserve order.
 * 
 *   Note: Performing operations in parallel is currently not implemented.
 */
(function (){
clojure.core.reducers.fold = (function clojure$core$reducers$fold(var_args){
var G__2424 = arguments.length;
switch (G__2424) {
case (2):
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return clojure.core.reducers.fold;},new cljs.core.Symbol("clojure.core.reducers","fold","clojure.core.reducers/fold",(-470058353),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"fold","fold",(753070195),null),"clojure/core/reducers.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reducef","reducef",(1835338990),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combinef","combinef",(2095886860),null),new cljs.core.Symbol(null,"reducef","reducef",(1835338990),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"combinef","combinef",(2095886860),null),new cljs.core.Symbol(null,"reducef","reducef",(1835338990),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reducef","reducef",(1835338990),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combinef","combinef",(2095886860),null),new cljs.core.Symbol(null,"reducef","reducef",(1835338990),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"combinef","combinef",(2095886860),null),new cljs.core.Symbol(null,"reducef","reducef",(1835338990),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(49),(49),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reducef","reducef",(1835338990),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combinef","combinef",(2095886860),null),new cljs.core.Symbol(null,"reducef","reducef",(1835338990),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"combinef","combinef",(2095886860),null),new cljs.core.Symbol(null,"reducef","reducef",(1835338990),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Reduces a collection using a (potentially parallel) reduce-combine\n  strategy. The collection is partitioned into groups of approximately\n  n (default 512), each of which is reduced with reducef (with a seed\n  value obtained by calling (combinef) with no arguments). The results\n  of these reductions are then reduced with combinef (default\n  reducef). combinef must be associative, and, when called with no\n  arguments, (combinef) must produce its identity element. These\n  operations may be performed in parallel, but the results will\n  preserve order.\n\n  Note: Performing operations in parallel is currently not implemented.",(cljs.core.truth_(clojure.core.reducers.fold)?clojure.core.reducers.fold.cljs$lang$test:null)])));})()
;

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$2 = (function (reducef,coll){
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3(reducef,reducef,coll);
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3 = (function (combinef,reducef,coll){
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$4((512),combinef,reducef,coll);
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$4 = (function (n,combinef,reducef,coll){
return clojure.core.reducers.coll_fold(coll,n,combinef,reducef);
});

clojure.core.reducers.fold.cljs$lang$maxFixedArity = (4);

new cljs.core.Var(function(){return clojure.core.reducers.fold;},new cljs.core.Symbol("clojure.core.reducers","fold","clojure.core.reducers/fold",(-470058353),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"fold","fold",(753070195),null),"clojure/core/reducers.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reducef","reducef",(1835338990),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combinef","combinef",(2095886860),null),new cljs.core.Symbol(null,"reducef","reducef",(1835338990),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"combinef","combinef",(2095886860),null),new cljs.core.Symbol(null,"reducef","reducef",(1835338990),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reducef","reducef",(1835338990),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combinef","combinef",(2095886860),null),new cljs.core.Symbol(null,"reducef","reducef",(1835338990),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"combinef","combinef",(2095886860),null),new cljs.core.Symbol(null,"reducef","reducef",(1835338990),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(49),(49),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reducef","reducef",(1835338990),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combinef","combinef",(2095886860),null),new cljs.core.Symbol(null,"reducef","reducef",(1835338990),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"combinef","combinef",(2095886860),null),new cljs.core.Symbol(null,"reducef","reducef",(1835338990),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Reduces a collection using a (potentially parallel) reduce-combine\n  strategy. The collection is partitioned into groups of approximately\n  n (default 512), each of which is reduced with reducef (with a seed\n  value obtained by calling (combinef) with no arguments). The results\n  of these reductions are then reduced with combinef (default\n  reducef). combinef must be associative, and, when called with no\n  arguments, (combinef) must produce its identity element. These\n  operations may be performed in parallel, but the results will\n  preserve order.\n\n  Note: Performing operations in parallel is currently not implemented.",(cljs.core.truth_(clojure.core.reducers.fold)?clojure.core.reducers.fold.cljs$lang$test:null)]));
/**
 * Given a reducible collection, and a transformation function xf,
 *   returns a reducible collection, where any supplied reducing
 *   fn will be transformed by xf. xf is a function of reducing fn to
 *   reducing fn.
 */
(function (){
clojure.core.reducers.reducer = (function clojure$core$reducers$reducer(coll,xf){
if(typeof clojure.core.reducers.t_clojure$core$reducers2426 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IReduce}
*/
clojure.core.reducers.t_clojure$core$reducers2426 = (function (coll,xf,meta2427){
this.coll = coll;
this.xf = xf;
this.meta2427 = meta2427;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
clojure.core.reducers.t_clojure$core$reducers2426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2428,meta2427__$1){
var self__ = this;
var _2428__$1 = this;
return (new clojure.core.reducers.t_clojure$core$reducers2426(self__.coll,self__.xf,meta2427__$1));
});

clojure.core.reducers.t_clojure$core$reducers2426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2428){
var self__ = this;
var _2428__$1 = this;
return self__.meta2427;
});

clojure.core.reducers.t_clojure$core$reducers2426.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReduce$_reduce$arity$3(null,f1,(f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1()));
});

clojure.core.reducers.t_clojure$core$reducers2426.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(self__.coll,(self__.xf.cljs$core$IFn$_invoke$arity$1 ? self__.xf.cljs$core$IFn$_invoke$arity$1(f1) : self__.xf(f1)),init);
});

clojure.core.reducers.t_clojure$core$reducers2426.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"xf","xf",(2042434515),null),new cljs.core.Symbol(null,"meta2427","meta2427",(-47461695),null)], null);
});

clojure.core.reducers.t_clojure$core$reducers2426.cljs$lang$type = true;

clojure.core.reducers.t_clojure$core$reducers2426.cljs$lang$ctorStr = "clojure.core.reducers/t_clojure$core$reducers2426";

clojure.core.reducers.t_clojure$core$reducers2426.cljs$lang$ctorPrWriter = (function (this__22622__auto__,writer__22623__auto__,opt__22624__auto__){
return cljs.core._write(writer__22623__auto__,"clojure.core.reducers/t_clojure$core$reducers2426");
});

(function (){
clojure.core.reducers.__GT_t_clojure$core$reducers2426 = (function clojure$core$reducers$reducer_$___GT_t_clojure$core$reducers2426(coll__$1,xf__$1,meta2427){
return (new clojure.core.reducers.t_clojure$core$reducers2426(coll__$1,xf__$1,meta2427));
}); return (
new cljs.core.Var(function(){return clojure.core.reducers.__GT_t_clojure$core$reducers2426;},new cljs.core.Symbol("clojure.core.reducers","->t_clojure$core$reducers2426","clojure.core.reducers/->t_clojure$core$reducers2426",(701807221),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"anonymous","anonymous",(447897231)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IReduce","cljs.core/IReduce",(-577837345),null),null], null), null),cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"->t_clojure$core$reducers2426","->t_clojure$core$reducers2426",(-688062367),null),"clojure/core/reducers.cljs",true,(6),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(72),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"xf","xf",(2042434515),null),new cljs.core.Symbol(null,"meta2427","meta2427",(-47461695),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IReduce","cljs.core/IReduce",(-577837345),null),null], null), null),null,(cljs.core.truth_(clojure.core.reducers.__GT_t_clojure$core$reducers2426)?clojure.core.reducers.__GT_t_clojure$core$reducers2426.cljs$lang$test:null)])));})()
;

}

return (new clojure.core.reducers.t_clojure$core$reducers2426(coll,xf,cljs.core.PersistentArrayMap.EMPTY));
}); return (
new cljs.core.Var(function(){return clojure.core.reducers.reducer;},new cljs.core.Symbol("clojure.core.reducers","reducer","clojure.core.reducers/reducer",(-1705093000),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"reducer","reducer",(-948842876),null),"clojure/core/reducers.cljs",(14),(1),(66),(66),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"xf","xf",(2042434515),null)], null)),"Given a reducible collection, and a transformation function xf,\n  returns a reducible collection, where any supplied reducing\n  fn will be transformed by xf. xf is a function of reducing fn to\n  reducing fn.",(cljs.core.truth_(clojure.core.reducers.reducer)?clojure.core.reducers.reducer.cljs$lang$test:null)])));})()
;
/**
 * Given a foldable collection, and a transformation function xf,
 *   returns a foldable collection, where any supplied reducing
 *   fn will be transformed by xf. xf is a function of reducing fn to
 *   reducing fn.
 */
(function (){
clojure.core.reducers.folder = (function clojure$core$reducers$folder(coll,xf){
if(typeof clojure.core.reducers.t_clojure$core$reducers2429 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IReduce}
 * @implements {clojure.core.reducers.CollFold}
*/
clojure.core.reducers.t_clojure$core$reducers2429 = (function (coll,xf,meta2430){
this.coll = coll;
this.xf = xf;
this.meta2430 = meta2430;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
clojure.core.reducers.t_clojure$core$reducers2429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2431,meta2430__$1){
var self__ = this;
var _2431__$1 = this;
return (new clojure.core.reducers.t_clojure$core$reducers2429(self__.coll,self__.xf,meta2430__$1));
});

clojure.core.reducers.t_clojure$core$reducers2429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2431){
var self__ = this;
var _2431__$1 = this;
return self__.meta2430;
});

clojure.core.reducers.t_clojure$core$reducers2429.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (_,f1){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(self__.coll,(self__.xf.cljs$core$IFn$_invoke$arity$1 ? self__.xf.cljs$core$IFn$_invoke$arity$1(f1) : self__.xf(f1)),(f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1()));
});

clojure.core.reducers.t_clojure$core$reducers2429.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(self__.coll,(self__.xf.cljs$core$IFn$_invoke$arity$1 ? self__.xf.cljs$core$IFn$_invoke$arity$1(f1) : self__.xf(f1)),init);
});

clojure.core.reducers.t_clojure$core$reducers2429.prototype.clojure$core$reducers$CollFold$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.reducers.t_clojure$core$reducers2429.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (_,n,combinef,reducef){
var self__ = this;
var ___$1 = this;
return clojure.core.reducers.coll_fold(self__.coll,n,combinef,(self__.xf.cljs$core$IFn$_invoke$arity$1 ? self__.xf.cljs$core$IFn$_invoke$arity$1(reducef) : self__.xf(reducef)));
});

clojure.core.reducers.t_clojure$core$reducers2429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"xf","xf",(2042434515),null),new cljs.core.Symbol(null,"meta2430","meta2430",(-1765809440),null)], null);
});

clojure.core.reducers.t_clojure$core$reducers2429.cljs$lang$type = true;

clojure.core.reducers.t_clojure$core$reducers2429.cljs$lang$ctorStr = "clojure.core.reducers/t_clojure$core$reducers2429";

clojure.core.reducers.t_clojure$core$reducers2429.cljs$lang$ctorPrWriter = (function (this__22622__auto__,writer__22623__auto__,opt__22624__auto__){
return cljs.core._write(writer__22623__auto__,"clojure.core.reducers/t_clojure$core$reducers2429");
});

(function (){
clojure.core.reducers.__GT_t_clojure$core$reducers2429 = (function clojure$core$reducers$folder_$___GT_t_clojure$core$reducers2429(coll__$1,xf__$1,meta2430){
return (new clojure.core.reducers.t_clojure$core$reducers2429(coll__$1,xf__$1,meta2430));
}); return (
new cljs.core.Var(function(){return clojure.core.reducers.__GT_t_clojure$core$reducers2429;},new cljs.core.Symbol("clojure.core.reducers","->t_clojure$core$reducers2429","clojure.core.reducers/->t_clojure$core$reducers2429",(440888511),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"anonymous","anonymous",(447897231)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IReduce","cljs.core/IReduce",(-577837345),null),null,new cljs.core.Symbol("clojure.core.reducers","CollFold","clojure.core.reducers/CollFold",(2143788385),null),null], null), null),cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"->t_clojure$core$reducers2429","->t_clojure$core$reducers2429",(1098767011),null),"clojure/core/reducers.cljs",true,(6),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(85),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"xf","xf",(2042434515),null),new cljs.core.Symbol(null,"meta2430","meta2430",(-1765809440),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IReduce","cljs.core/IReduce",(-577837345),null),null], null), null),null,(cljs.core.truth_(clojure.core.reducers.__GT_t_clojure$core$reducers2429)?clojure.core.reducers.__GT_t_clojure$core$reducers2429.cljs$lang$test:null)])));})()
;

}

return (new clojure.core.reducers.t_clojure$core$reducers2429(coll,xf,cljs.core.PersistentArrayMap.EMPTY));
}); return (
new cljs.core.Var(function(){return clojure.core.reducers.folder;},new cljs.core.Symbol("clojure.core.reducers","folder","clojure.core.reducers/folder",(1933243715),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"folder","folder",(-1138554033),null),"clojure/core/reducers.cljs",(13),(1),(79),(79),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"xf","xf",(2042434515),null)], null)),"Given a foldable collection, and a transformation function xf,\n  returns a foldable collection, where any supplied reducing\n  fn will be transformed by xf. xf is a function of reducing fn to\n  reducing fn.",(cljs.core.truth_(clojure.core.reducers.folder)?clojure.core.reducers.folder.cljs$lang$test:null)])));})()
;
/**
 * Applies f to every value in the reduction of coll. Foldable.
 */
(function (){
clojure.core.reducers.map = (function clojure$core$reducers$map(var_args){
var G__2433 = arguments.length;
switch (G__2433) {
case (1):
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return clojure.core.reducers.map;},new cljs.core.Symbol("clojure.core.reducers","map","clojure.core.reducers/map",(1223906840),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"map","map",(-1282745308),null),"clojure/core/reducers.cljs",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(96),(96),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Applies f to every value in the reduction of coll. Foldable.",(cljs.core.truth_(clojure.core.reducers.map)?clojure.core.reducers.map.cljs$lang$test:null)])));})()
;

clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (x__22438__auto__){
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(f,x__22438__auto__);
});
});

clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.folder(coll,(function (f1){
return (function() {
var G__2439 = null;
var G__2439__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1());
});
var G__2439__2 = (function (ret,v){
var G__2434 = ret;
var G__2435 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f(v));
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__2434,G__2435) : f1(G__2434,G__2435));
});
var G__2439__3 = (function (ret,k,v){
var G__2436 = ret;
var G__2437 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f(k,v));
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__2436,G__2437) : f1(G__2436,G__2437));
});
G__2439 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__2439__0.call(this);
case 2:
return G__2439__2.call(this,ret,k);
case 3:
return G__2439__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__2439.cljs$core$IFn$_invoke$arity$0 = G__2439__0;
G__2439.cljs$core$IFn$_invoke$arity$2 = G__2439__2;
G__2439.cljs$core$IFn$_invoke$arity$3 = G__2439__3;
return G__2439;
})()
}));
});

clojure.core.reducers.map.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return clojure.core.reducers.map;},new cljs.core.Symbol("clojure.core.reducers","map","clojure.core.reducers/map",(1223906840),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"map","map",(-1282745308),null),"clojure/core/reducers.cljs",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(96),(96),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Applies f to every value in the reduction of coll. Foldable.",(cljs.core.truth_(clojure.core.reducers.map)?clojure.core.reducers.map.cljs$lang$test:null)]));
/**
 * Applies f to every value in the reduction of coll, concatenating the result
 *   colls of (f val). Foldable.
 */
(function (){
clojure.core.reducers.mapcat = (function clojure$core$reducers$mapcat(var_args){
var G__2441 = arguments.length;
switch (G__2441) {
case (1):
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return clojure.core.reducers.mapcat;},new cljs.core.Symbol("clojure.core.reducers","mapcat","clojure.core.reducers/mapcat",(-1727874255),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"mapcat","mapcat",(-601348859),null),"clojure/core/reducers.cljs",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(106),(106),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Applies f to every value in the reduction of coll, concatenating the result\n  colls of (f val). Foldable.",(cljs.core.truth_(clojure.core.reducers.mapcat)?clojure.core.reducers.mapcat.cljs$lang$test:null)])));})()
;

clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (x__22438__auto__){
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2(f,x__22438__auto__);
});
});

clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.folder(coll,(function (f1){
return (function() {
var G__2443 = null;
var G__2443__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1());
});
var G__2443__2 = (function (ret,v){
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(f1,ret,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f(v)));
});
var G__2443__3 = (function (ret,k,v){
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(f1,ret,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f(k,v)));
});
G__2443 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__2443__0.call(this);
case 2:
return G__2443__2.call(this,ret,k);
case 3:
return G__2443__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__2443.cljs$core$IFn$_invoke$arity$0 = G__2443__0;
G__2443.cljs$core$IFn$_invoke$arity$2 = G__2443__2;
G__2443.cljs$core$IFn$_invoke$arity$3 = G__2443__3;
return G__2443;
})()
}));
});

clojure.core.reducers.mapcat.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return clojure.core.reducers.mapcat;},new cljs.core.Symbol("clojure.core.reducers","mapcat","clojure.core.reducers/mapcat",(-1727874255),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"mapcat","mapcat",(-601348859),null),"clojure/core/reducers.cljs",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(106),(106),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Applies f to every value in the reduction of coll, concatenating the result\n  colls of (f val). Foldable.",(cljs.core.truth_(clojure.core.reducers.mapcat)?clojure.core.reducers.mapcat.cljs$lang$test:null)]));
/**
 * Retains values in the reduction of coll for which (pred val)
 *   returns logical true. Foldable.
 */
(function (){
clojure.core.reducers.filter = (function clojure$core$reducers$filter(var_args){
var G__2445 = arguments.length;
switch (G__2445) {
case (1):
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return clojure.core.reducers.filter;},new cljs.core.Symbol("clojure.core.reducers","filter","clojure.core.reducers/filter",(1812201973),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"filter","filter",(691993593),null),"clojure/core/reducers.cljs",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(117),(117),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Retains values in the reduction of coll for which (pred val)\n  returns logical true. Foldable.",(cljs.core.truth_(clojure.core.reducers.filter)?clojure.core.reducers.filter.cljs$lang$test:null)])));})()
;

clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__22438__auto__){
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2(pred,x__22438__auto__);
});
});

clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.folder(coll,(function (f1){
return (function() {
var G__2447 = null;
var G__2447__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1());
});
var G__2447__2 = (function (ret,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred(v)))){
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(ret,v) : f1(ret,v));
} else {
return ret;
}
});
var G__2447__3 = (function (ret,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred(k,v)))){
return (f1.cljs$core$IFn$_invoke$arity$3 ? f1.cljs$core$IFn$_invoke$arity$3(ret,k,v) : f1(ret,k,v));
} else {
return ret;
}
});
G__2447 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__2447__0.call(this);
case 2:
return G__2447__2.call(this,ret,k);
case 3:
return G__2447__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__2447.cljs$core$IFn$_invoke$arity$0 = G__2447__0;
G__2447.cljs$core$IFn$_invoke$arity$2 = G__2447__2;
G__2447.cljs$core$IFn$_invoke$arity$3 = G__2447__3;
return G__2447;
})()
}));
});

clojure.core.reducers.filter.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return clojure.core.reducers.filter;},new cljs.core.Symbol("clojure.core.reducers","filter","clojure.core.reducers/filter",(1812201973),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"filter","filter",(691993593),null),"clojure/core/reducers.cljs",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(117),(117),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Retains values in the reduction of coll for which (pred val)\n  returns logical true. Foldable.",(cljs.core.truth_(clojure.core.reducers.filter)?clojure.core.reducers.filter.cljs$lang$test:null)]));
/**
 * Takes any nested combination of sequential things (lists, vectors,
 *   etc.) and returns their contents as a single, flat foldable
 *   collection.
 */
(function (){
clojure.core.reducers.flatten = (function clojure$core$reducers$flatten(var_args){
var G__2449 = arguments.length;
switch (G__2449) {
case (0):
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return clojure.core.reducers.flatten;},new cljs.core.Symbol("clojure.core.reducers","flatten","clojure.core.reducers/flatten",(-1791237725),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"flatten","flatten",(-1441633353),null),"clojure/core/reducers.cljs",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(130),(130),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Takes any nested combination of sequential things (lists, vectors,\n  etc.) and returns their contents as a single, flat foldable\n  collection.",(cljs.core.truth_(clojure.core.reducers.flatten)?clojure.core.reducers.flatten.cljs$lang$test:null)])));})()
;

clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (x__22438__auto__){
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1(x__22438__auto__);
});
});

clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return clojure.core.reducers.folder(coll,(function (f1){
return (function() {
var G__2451 = null;
var G__2451__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1());
});
var G__2451__2 = (function (ret,v){
if(cljs.core.sequential_QMARK_(v)){
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1(v),f1,ret);
} else {
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(ret,v) : f1(ret,v));
}
});
G__2451 = function(ret,v){
switch(arguments.length){
case 0:
return G__2451__0.call(this);
case 2:
return G__2451__2.call(this,ret,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__2451.cljs$core$IFn$_invoke$arity$0 = G__2451__0;
G__2451.cljs$core$IFn$_invoke$arity$2 = G__2451__2;
return G__2451;
})()
}));
});

clojure.core.reducers.flatten.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return clojure.core.reducers.flatten;},new cljs.core.Symbol("clojure.core.reducers","flatten","clojure.core.reducers/flatten",(-1791237725),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"flatten","flatten",(-1441633353),null),"clojure/core/reducers.cljs",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(130),(130),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Takes any nested combination of sequential things (lists, vectors,\n  etc.) and returns their contents as a single, flat foldable\n  collection.",(cljs.core.truth_(clojure.core.reducers.flatten)?clojure.core.reducers.flatten.cljs$lang$test:null)]));
/**
 * Removes values in the reduction of coll for which (pred val)
 *   returns logical true. Foldable.
 */
(function (){
clojure.core.reducers.remove = (function clojure$core$reducers$remove(var_args){
var G__2453 = arguments.length;
switch (G__2453) {
case (1):
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return clojure.core.reducers.remove;},new cljs.core.Symbol("clojure.core.reducers","remove","clojure.core.reducers/remove",(1678409757),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"remove","remove",(1509103113),null),"clojure/core/reducers.cljs",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(145),(145),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Removes values in the reduction of coll for which (pred val)\n  returns logical true. Foldable.",(cljs.core.truth_(clojure.core.reducers.remove)?clojure.core.reducers.remove.cljs$lang$test:null)])));})()
;

clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__22438__auto__){
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$2(pred,x__22438__auto__);
});
});

clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(pred),coll);
});

clojure.core.reducers.remove.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return clojure.core.reducers.remove;},new cljs.core.Symbol("clojure.core.reducers","remove","clojure.core.reducers/remove",(1678409757),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"remove","remove",(1509103113),null),"clojure/core/reducers.cljs",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(145),(145),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Removes values in the reduction of coll for which (pred val)\n  returns logical true. Foldable.",(cljs.core.truth_(clojure.core.reducers.remove)?clojure.core.reducers.remove.cljs$lang$test:null)]));
/**
 * Ends the reduction of coll when (pred val) returns logical false.
 */
(function (){
clojure.core.reducers.take_while = (function clojure$core$reducers$take_while(var_args){
var G__2456 = arguments.length;
switch (G__2456) {
case (1):
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return clojure.core.reducers.take_while;},new cljs.core.Symbol("clojure.core.reducers","take-while","clojure.core.reducers/take-while",(-1465978380),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"take-while","take-while",(2007268328),null),"clojure/core/reducers.cljs",(23),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(152),(152),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Ends the reduction of coll when (pred val) returns logical false.",(cljs.core.truth_(clojure.core.reducers.take_while)?clojure.core.reducers.take_while.cljs$lang$test:null)])));})()
;

clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__22438__auto__){
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2(pred,x__22438__auto__);
});
});

clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.reducer(coll,(function (f1){
return (function() {
var G__2458 = null;
var G__2458__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1());
});
var G__2458__2 = (function (ret,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred(v)))){
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(ret,v) : f1(ret,v));
} else {
return cljs.core.reduced(ret);
}
});
var G__2458__3 = (function (ret,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred(k,v)))){
return (f1.cljs$core$IFn$_invoke$arity$3 ? f1.cljs$core$IFn$_invoke$arity$3(ret,k,v) : f1(ret,k,v));
} else {
return cljs.core.reduced(ret);
}
});
G__2458 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__2458__0.call(this);
case 2:
return G__2458__2.call(this,ret,k);
case 3:
return G__2458__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__2458.cljs$core$IFn$_invoke$arity$0 = G__2458__0;
G__2458.cljs$core$IFn$_invoke$arity$2 = G__2458__2;
G__2458.cljs$core$IFn$_invoke$arity$3 = G__2458__3;
return G__2458;
})()
}));
});

clojure.core.reducers.take_while.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return clojure.core.reducers.take_while;},new cljs.core.Symbol("clojure.core.reducers","take-while","clojure.core.reducers/take-while",(-1465978380),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"take-while","take-while",(2007268328),null),"clojure/core/reducers.cljs",(23),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(152),(152),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Ends the reduction of coll when (pred val) returns logical false.",(cljs.core.truth_(clojure.core.reducers.take_while)?clojure.core.reducers.take_while.cljs$lang$test:null)]));
/**
 * Ends the reduction of coll after consuming n values.
 */
(function (){
clojure.core.reducers.take = (function clojure$core$reducers$take(var_args){
var G__2460 = arguments.length;
switch (G__2460) {
case (1):
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return clojure.core.reducers.take;},new cljs.core.Symbol("clojure.core.reducers","take","clojure.core.reducers/take",(-19136585),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"take","take",(871646627),null),"clojure/core/reducers.cljs",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(164),(164),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Ends the reduction of coll after consuming n values.",(cljs.core.truth_(clojure.core.reducers.take)?clojure.core.reducers.take.cljs$lang$test:null)])));})()
;

clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (function (x__22438__auto__){
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(n,x__22438__auto__);
});
});

clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return clojure.core.reducers.reducer(coll,(function (f1){
var cnt = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(n);
return ((function (cnt){
return (function() {
var G__2462 = null;
var G__2462__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1());
});
var G__2462__2 = (function (ret,v){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cnt,cljs.core.dec);

if((cljs.core.deref(cnt) < (0))){
return cljs.core.reduced(ret);
} else {
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(ret,v) : f1(ret,v));
}
});
var G__2462__3 = (function (ret,k,v){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cnt,cljs.core.dec);

if((cljs.core.deref(cnt) < (0))){
return cljs.core.reduced(ret);
} else {
return (f1.cljs$core$IFn$_invoke$arity$3 ? f1.cljs$core$IFn$_invoke$arity$3(ret,k,v) : f1(ret,k,v));
}
});
G__2462 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__2462__0.call(this);
case 2:
return G__2462__2.call(this,ret,k);
case 3:
return G__2462__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__2462.cljs$core$IFn$_invoke$arity$0 = G__2462__0;
G__2462.cljs$core$IFn$_invoke$arity$2 = G__2462__2;
G__2462.cljs$core$IFn$_invoke$arity$3 = G__2462__3;
return G__2462;
})()
;})(cnt))
}));
});

clojure.core.reducers.take.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return clojure.core.reducers.take;},new cljs.core.Symbol("clojure.core.reducers","take","clojure.core.reducers/take",(-19136585),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"take","take",(871646627),null),"clojure/core/reducers.cljs",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(164),(164),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Ends the reduction of coll after consuming n values.",(cljs.core.truth_(clojure.core.reducers.take)?clojure.core.reducers.take.cljs$lang$test:null)]));
/**
 * Elides the first n values from the reduction of coll.
 */
(function (){
clojure.core.reducers.drop = (function clojure$core$reducers$drop(var_args){
var G__2464 = arguments.length;
switch (G__2464) {
case (1):
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return clojure.core.reducers.drop;},new cljs.core.Symbol("clojure.core.reducers","drop","clojure.core.reducers/drop",(-1134258002),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"drop","drop",(2005013138),null),"clojure/core/reducers.cljs",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(178),(178),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Elides the first n values from the reduction of coll.",(cljs.core.truth_(clojure.core.reducers.drop)?clojure.core.reducers.drop.cljs$lang$test:null)])));})()
;

clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (function (x__22438__auto__){
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2(n,x__22438__auto__);
});
});

clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return clojure.core.reducers.reducer(coll,(function (f1){
var cnt = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(n);
return ((function (cnt){
return (function() {
var G__2466 = null;
var G__2466__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1());
});
var G__2466__2 = (function (ret,v){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cnt,cljs.core.dec);

if((cljs.core.deref(cnt) < (0))){
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(ret,v) : f1(ret,v));
} else {
return ret;
}
});
var G__2466__3 = (function (ret,k,v){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cnt,cljs.core.dec);

if((cljs.core.deref(cnt) < (0))){
return (f1.cljs$core$IFn$_invoke$arity$3 ? f1.cljs$core$IFn$_invoke$arity$3(ret,k,v) : f1(ret,k,v));
} else {
return ret;
}
});
G__2466 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__2466__0.call(this);
case 2:
return G__2466__2.call(this,ret,k);
case 3:
return G__2466__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__2466.cljs$core$IFn$_invoke$arity$0 = G__2466__0;
G__2466.cljs$core$IFn$_invoke$arity$2 = G__2466__2;
G__2466.cljs$core$IFn$_invoke$arity$3 = G__2466__3;
return G__2466;
})()
;})(cnt))
}));
});

clojure.core.reducers.drop.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return clojure.core.reducers.drop;},new cljs.core.Symbol("clojure.core.reducers","drop","clojure.core.reducers/drop",(-1134258002),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"drop","drop",(2005013138),null),"clojure/core/reducers.cljs",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(178),(178),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Elides the first n values from the reduction of coll.",(cljs.core.truth_(clojure.core.reducers.drop)?clojure.core.reducers.drop.cljs$lang$test:null)]));

/**
* @constructor
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IReduce}
 * @implements {clojure.core.reducers.CollFold}
*/
clojure.core.reducers.Cat = (function (cnt,left,right){
this.cnt = cnt;
this.left = left;
this.right = right;
this.cljs$lang$protocol_mask$partition0$ = 8912898;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
clojure.core.reducers.Cat.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
});

clojure.core.reducers.Cat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(self__.left),cljs.core.seq(self__.right));
});

clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReduce$_reduce$arity$3(null,f1,(f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1()));
});

clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(self__.right,f1,cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(self__.left,f1,init));
});

clojure.core.reducers.Cat.prototype.clojure$core$reducers$CollFold$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.reducers.Cat.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (this$,n,combinef,reducef){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReduce$_reduce$arity$2(null,reducef);
});

clojure.core.reducers.Cat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cnt","cnt",(1924510325),null),new cljs.core.Symbol(null,"left","left",(1241415590),null),new cljs.core.Symbol(null,"right","right",(1187949694),null)], null);
});

clojure.core.reducers.Cat.cljs$lang$type = true;

clojure.core.reducers.Cat.cljs$lang$ctorStr = "clojure.core.reducers/Cat";

clojure.core.reducers.Cat.cljs$lang$ctorPrWriter = (function (this__22622__auto__,writer__22623__auto__,opt__22624__auto__){
return cljs.core._write(writer__22623__auto__,"clojure.core.reducers/Cat");
});

(function (){
clojure.core.reducers.__GT_Cat = (function clojure$core$reducers$__GT_Cat(cnt,left,right){
return (new clojure.core.reducers.Cat(cnt,left,right));
}); return (
new cljs.core.Var(function(){return clojure.core.reducers.__GT_Cat;},new cljs.core.Symbol("clojure.core.reducers","->Cat","clojure.core.reducers/->Cat",(1688392710),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("cljs.core","ICounted","cljs.core/ICounted",(-1299011378),null),null,new cljs.core.Symbol("cljs.core","ISeqable","cljs.core/ISeqable",(137437203),null),null,new cljs.core.Symbol("cljs.core","IReduce","cljs.core/IReduce",(-577837345),null),null,new cljs.core.Symbol("clojure.core.reducers","CollFold","clojure.core.reducers/CollFold",(2143788385),null),null], null), null),cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"->Cat","->Cat",(1603035666),null),"clojure/core/reducers.cljs",(13),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(193),(193),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cnt","cnt",(1924510325),null),new cljs.core.Symbol(null,"left","left",(1241415590),null),new cljs.core.Symbol(null,"right","right",(1187949694),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","ICounted","cljs.core/ICounted",(-1299011378),null),null,new cljs.core.Symbol("cljs.core","ISeqable","cljs.core/ISeqable",(137437203),null),null,new cljs.core.Symbol("cljs.core","IReduce","cljs.core/IReduce",(-577837345),null),null], null), null),null,(cljs.core.truth_(clojure.core.reducers.__GT_Cat)?clojure.core.reducers.__GT_Cat.cljs$lang$test:null)])));})()
;

/**
 * A high-performance combining fn that yields the catenation of the
 *   reduced values. The result is reducible, foldable, seqable and
 *   counted, providing the identity collections are reducible, seqable
 *   and counted. The single argument version will build a combining fn
 *   with the supplied identity constructor. Tests for identity
 *   with (zero? (count x)). See also foldcat.
 */
(function (){
clojure.core.reducers.cat = (function clojure$core$reducers$cat(var_args){
var G__2468 = arguments.length;
switch (G__2468) {
case (0):
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return clojure.core.reducers.cat;},new cljs.core.Symbol("clojure.core.reducers","cat","clojure.core.reducers/cat",(1372295484),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"cat","cat",(182721320),null),"clojure/core/reducers.cljs",(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ctor","ctor",(-903570967),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"left","left",(1241415590),null),new cljs.core.Symbol(null,"right","right",(1187949694),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ctor","ctor",(-903570967),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"left","left",(1241415590),null),new cljs.core.Symbol(null,"right","right",(1187949694),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(213),(213),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ctor","ctor",(-903570967),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"left","left",(1241415590),null),new cljs.core.Symbol(null,"right","right",(1187949694),null)], null)),"A high-performance combining fn that yields the catenation of the\n  reduced values. The result is reducible, foldable, seqable and\n  counted, providing the identity collections are reducible, seqable\n  and counted. The single argument version will build a combining fn\n  with the supplied identity constructor. Tests for identity\n  with (zero? (count x)). See also foldcat.",(cljs.core.truth_(clojure.core.reducers.cat)?clojure.core.reducers.cat.cljs$lang$test:null)])));})()
;

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$0 = (function (){
return [];
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$1 = (function (ctor){
return (function() {
var G__2470 = null;
var G__2470__0 = (function (){
return (ctor.cljs$core$IFn$_invoke$arity$0 ? ctor.cljs$core$IFn$_invoke$arity$0() : ctor());
});
var G__2470__2 = (function (left,right){
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$2(left,right);
});
G__2470 = function(left,right){
switch(arguments.length){
case 0:
return G__2470__0.call(this);
case 2:
return G__2470__2.call(this,left,right);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__2470.cljs$core$IFn$_invoke$arity$0 = G__2470__0;
G__2470.cljs$core$IFn$_invoke$arity$2 = G__2470__2;
return G__2470;
})()
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$2 = (function (left,right){
if((cljs.core.count(left) === (0))){
return right;
} else {
if((cljs.core.count(right) === (0))){
return left;
} else {
return (new clojure.core.reducers.Cat((cljs.core.count(left) + cljs.core.count(right)),left,right));

}
}
});

clojure.core.reducers.cat.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return clojure.core.reducers.cat;},new cljs.core.Symbol("clojure.core.reducers","cat","clojure.core.reducers/cat",(1372295484),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"cat","cat",(182721320),null),"clojure/core/reducers.cljs",(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ctor","ctor",(-903570967),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"left","left",(1241415590),null),new cljs.core.Symbol(null,"right","right",(1187949694),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ctor","ctor",(-903570967),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"left","left",(1241415590),null),new cljs.core.Symbol(null,"right","right",(1187949694),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(213),(213),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ctor","ctor",(-903570967),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"left","left",(1241415590),null),new cljs.core.Symbol(null,"right","right",(1187949694),null)], null)),"A high-performance combining fn that yields the catenation of the\n  reduced values. The result is reducible, foldable, seqable and\n  counted, providing the identity collections are reducible, seqable\n  and counted. The single argument version will build a combining fn\n  with the supplied identity constructor. Tests for identity\n  with (zero? (count x)). See also foldcat.",(cljs.core.truth_(clojure.core.reducers.cat)?clojure.core.reducers.cat.cljs$lang$test:null)]));
/**
 * .adds x to acc and returns acc
 */
(function (){
clojure.core.reducers.append_BANG_ = (function clojure$core$reducers$append_BANG_(acc,x){
var G__2471 = acc;
G__2471.push(x);

return G__2471;
}); return (
new cljs.core.Var(function(){return clojure.core.reducers.append_BANG_;},new cljs.core.Symbol("clojure.core.reducers","append!","clojure.core.reducers/append!",(1764228493),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"append!","append!",(853374833),null),"clojure/core/reducers.cljs",(14),(1),(232),(232),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"acc","acc",(-1815869457),null),new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),".adds x to acc and returns acc",(cljs.core.truth_(clojure.core.reducers.append_BANG_)?clojure.core.reducers.append_BANG_.cljs$lang$test:null)])));})()
;
/**
 * Equivalent to (fold cat append! coll)
 */
(function (){
clojure.core.reducers.foldcat = (function clojure$core$reducers$foldcat(coll){
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3(clojure.core.reducers.cat,clojure.core.reducers.append_BANG_,coll);
}); return (
new cljs.core.Var(function(){return clojure.core.reducers.foldcat;},new cljs.core.Symbol("clojure.core.reducers","foldcat","clojure.core.reducers/foldcat",(-1368768560),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"foldcat","foldcat",(1632405924),null),"clojure/core/reducers.cljs",(14),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Equivalent to (fold cat append! coll)",(cljs.core.truth_(clojure.core.reducers.foldcat)?clojure.core.reducers.foldcat.cljs$lang$test:null)])));})()
;
/**
 * Builds a combining fn out of the supplied operator and identity
 *   constructor. op must be associative and ctor called with no args
 *   must return an identity value for it.
 */
(function (){
clojure.core.reducers.monoid = (function clojure$core$reducers$monoid(op,ctor){
return (function() {
var clojure$core$reducers$monoid_$_m = null;
var clojure$core$reducers$monoid_$_m__0 = (function (){
return (ctor.cljs$core$IFn$_invoke$arity$0 ? ctor.cljs$core$IFn$_invoke$arity$0() : ctor());
});
var clojure$core$reducers$monoid_$_m__2 = (function (a,b){
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(a,b) : op(a,b));
});
clojure$core$reducers$monoid_$_m = function(a,b){
switch(arguments.length){
case 0:
return clojure$core$reducers$monoid_$_m__0.call(this);
case 2:
return clojure$core$reducers$monoid_$_m__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
clojure$core$reducers$monoid_$_m.cljs$core$IFn$_invoke$arity$0 = clojure$core$reducers$monoid_$_m__0;
clojure$core$reducers$monoid_$_m.cljs$core$IFn$_invoke$arity$2 = clojure$core$reducers$monoid_$_m__2;
return clojure$core$reducers$monoid_$_m;
})()
}); return (
new cljs.core.Var(function(){return clojure.core.reducers.monoid;},new cljs.core.Symbol("clojure.core.reducers","monoid","clojure.core.reducers/monoid",(-1286095616),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"monoid","monoid",(1982407932),null),"clojure/core/reducers.cljs",(13),(1),(242),(242),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",(-242456428),null),new cljs.core.Symbol(null,"ctor","ctor",(-903570967),null)], null)),"Builds a combining fn out of the supplied operator and identity\n  constructor. op must be associative and ctor called with no args\n  must return an identity value for it.",(cljs.core.truth_(clojure.core.reducers.monoid)?clojure.core.reducers.monoid.cljs$lang$test:null)])));})()
;
(function (){
clojure.core.reducers.foldvec = (function clojure$core$reducers$foldvec(v,n,combinef,reducef){
if(cljs.core.empty_QMARK_(v)){
return (combinef.cljs$core$IFn$_invoke$arity$0 ? combinef.cljs$core$IFn$_invoke$arity$0() : combinef());
} else {
if((cljs.core.count(v) <= n)){
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(reducef,(combinef.cljs$core$IFn$_invoke$arity$0 ? combinef.cljs$core$IFn$_invoke$arity$0() : combinef()),v);
} else {
var split = cljs.core.quot(cljs.core.count(v),(2));
var v1 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),split);
var v2 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,split,cljs.core.count(v));
var fc = ((function (split,v1,v2){
return (function (child){
return ((function (split,v1,v2){
return (function (){
return (clojure.core.reducers.foldvec.cljs$core$IFn$_invoke$arity$4 ? clojure.core.reducers.foldvec.cljs$core$IFn$_invoke$arity$4(child,n,combinef,reducef) : clojure.core.reducers.foldvec(child,n,combinef,reducef));
});
;})(split,v1,v2))
});})(split,v1,v2))
;
return clojure.core.reducers.fjinvoke(((function (split,v1,v2,fc){
return (function (){
var f1 = fc(v1);
var t2 = clojure.core.reducers.fjtask(fc(v2));
clojure.core.reducers.fjfork(t2);

var G__2472 = (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1());
var G__2473 = clojure.core.reducers.fjjoin(t2);
return (combinef.cljs$core$IFn$_invoke$arity$2 ? combinef.cljs$core$IFn$_invoke$arity$2(G__2472,G__2473) : combinef(G__2472,G__2473));
});})(split,v1,v2,fc))
);

}
}
}); return (
new cljs.core.Var(function(){return clojure.core.reducers.foldvec;},new cljs.core.Symbol("clojure.core.reducers","foldvec","clojure.core.reducers/foldvec",(1188816674),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.reducers","clojure.core.reducers",(2120855305),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"A library for reduction and parallel folding. Alpha and subject\n      to change.  Note that fold and its derivatives require\n      jsr166y.jar for fork/join support. See Clojure's pom.xml for the\n      dependency info.",new cljs.core.Keyword(null,"author","author",(2111686192)),"Rich Hickey"], null)),new cljs.core.Symbol(null,"foldvec","foldvec",(-1983800034),null),"clojure/core/reducers.cljs",(15),(1),(273),(273),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"combinef","combinef",(2095886860),null),new cljs.core.Symbol(null,"reducef","reducef",(1835338990),null)], null)),null,(cljs.core.truth_(clojure.core.reducers.foldvec)?clojure.core.reducers.foldvec.cljs$lang$test:null)])));})()
;
goog.object.set(clojure.core.reducers.CollFold,"null",true);

var G__2474_2480 = clojure.core.reducers.coll_fold;
var G__2475_2481 = "null";
var G__2476_2482 = ((function (G__2474_2480,G__2475_2481){
return (function (coll,n,combinef,reducef){
return (combinef.cljs$core$IFn$_invoke$arity$0 ? combinef.cljs$core$IFn$_invoke$arity$0() : combinef());
});})(G__2474_2480,G__2475_2481))
;
goog.object.set(G__2474_2480,G__2475_2481,G__2476_2482);

goog.object.set(clojure.core.reducers.CollFold,"object",true);

var G__2477_2483 = clojure.core.reducers.coll_fold;
var G__2478_2484 = "object";
var G__2479_2485 = ((function (G__2477_2483,G__2478_2484){
return (function (coll,n,combinef,reducef){
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(reducef,(combinef.cljs$core$IFn$_invoke$arity$0 ? combinef.cljs$core$IFn$_invoke$arity$0() : combinef()),coll);
});})(G__2477_2483,G__2478_2484))
;
goog.object.set(G__2477_2483,G__2478_2484,G__2479_2485);

cljs.core.PersistentVector.prototype.clojure$core$reducers$CollFold$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (v,n,combinef,reducef){
var v__$1 = this;
return clojure.core.reducers.foldvec(v__$1,n,combinef,reducef);
});
