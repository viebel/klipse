goog.provide("clojure.data");
(function (){
clojure.data.diff; return (
new cljs.core.Var(function(){return clojure.data.diff;},new cljs.core.Symbol("clojure.data","diff","clojure.data/diff",(-683865998),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.data","clojure.data",(-2083828516),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Stuart Halloway",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Non-core data functions."], null)),new cljs.core.Symbol(null,"diff","diff",(-518492986),null),"clojure/data.cljs",(14),(1),(15),true,(15),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.data.diff)?clojure.data.diff.cljs$lang$test:null)])));})()
;
/**
 * Internal helper for diff.
 */
(function (){
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
}); return (
new cljs.core.Var(function(){return clojure.data.atom_diff;},new cljs.core.Symbol("clojure.data","atom-diff","clojure.data/atom-diff",(-1875632086),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.data","clojure.data",(-2083828516),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Stuart Halloway",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Non-core data functions."], null)),new cljs.core.Symbol(null,"atom-diff","atom-diff",(-1360409178),null),"clojure/data.cljs",(17),(1),(17),(17),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null)], null)),"Internal helper for diff.",(cljs.core.truth_(clojure.data.atom_diff)?clojure.data.atom_diff.cljs$lang$test:null)])));})()
;
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
(function (){
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__2553){
var vec__2554 = p__2553;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2554,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2554,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return clojure.data.vectorize;},new cljs.core.Symbol("clojure.data","vectorize","clojure.data/vectorize",(-1468139915),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.data","clojure.data",(-2083828516),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Stuart Halloway",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Non-core data functions."], null)),new cljs.core.Symbol(null,"vectorize","vectorize",(-27746943),null),"clojure/data.cljs",(17),(1),(23),(23),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),"Convert an associative-by-numeric-index collection into\n   an equivalent vector, with nil for any missing keys",(cljs.core.truth_(clojure.data.vectorize)?clojure.data.vectorize.cljs$lang$test:null)])));})()
;
/**
 * Diff associative things a and b, comparing only the key k.
 */
(function (){
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__2557 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff(va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2557,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2557,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2557,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = (in_a) && (in_b) && ((!((ab == null))) || (((va == null)) && ((vb == null))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((in_a) && ((!((a_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),(((in_b) && ((!((b_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
}); return (
new cljs.core.Var(function(){return clojure.data.diff_associative_key;},new cljs.core.Symbol("clojure.data","diff-associative-key","clojure.data/diff-associative-key",(481737435),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.data","clojure.data",(-2083828516),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Stuart Halloway",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Non-core data functions."], null)),new cljs.core.Symbol(null,"diff-associative-key","diff-associative-key",(-829716913),null),"clojure/data.cljs",(28),(1),(33),(33),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),"Diff associative things a and b, comparing only the key k.",(cljs.core.truth_(clojure.data.diff_associative_key)?clojure.data.diff_associative_key.cljs$lang$test:null)])));})()
;
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
(function (){
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__2561 = arguments.length;
switch (G__2561) {
case (2):
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return clojure.data.diff_associative;},new cljs.core.Symbol("clojure.data","diff-associative","clojure.data/diff-associative",(1378922723),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.data","clojure.data",(-2083828516),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Stuart Halloway",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Non-core data functions."], null)),new cljs.core.Symbol(null,"diff-associative","diff-associative",(1545327),null),"clojure/data.cljs",(24),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"ks","ks",(-754231827),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"ks","ks",(-754231827),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(49),(49),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"ks","ks",(-754231827),null)], null)),"Diff associative things a and b, comparing only keys in ks (if supplied).",(cljs.core.truth_(clojure.data.diff_associative)?clojure.data.diff_associative.cljs$lang$test:null)])));})()
;

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return clojure.data.diff_associative;},new cljs.core.Symbol("clojure.data","diff-associative","clojure.data/diff-associative",(1378922723),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.data","clojure.data",(-2083828516),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Stuart Halloway",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Non-core data functions."], null)),new cljs.core.Symbol(null,"diff-associative","diff-associative",(1545327),null),"clojure/data.cljs",(24),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"ks","ks",(-754231827),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"ks","ks",(-754231827),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(49),(49),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"ks","ks",(-754231827),null)], null)),"Diff associative things a and b, comparing only keys in ks (if supplied).",(cljs.core.truth_(clojure.data.diff_associative)?clojure.data.diff_associative.cljs$lang$test:null)]));
(function (){
clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__22296__auto__ = cljs.core.count(a);
var y__22297__auto__ = cljs.core.count(b);
return ((x__22296__auto__ > y__22297__auto__) ? x__22296__auto__ : y__22297__auto__);
})()))));
}); return (
new cljs.core.Var(function(){return clojure.data.diff_sequential;},new cljs.core.Symbol("clojure.data","diff-sequential","clojure.data/diff-sequential",(-530494291),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.data","clojure.data",(-2083828516),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Stuart Halloway",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Non-core data functions."], null)),new cljs.core.Symbol(null,"diff-sequential","diff-sequential",(839149625),null),"clojure/data.cljs",(23),(1),(62),(62),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null)], null)),null,(cljs.core.truth_(clojure.data.diff_sequential)?clojure.data.diff_sequential.cljs$lang$test:null)])));})()
;
(function (){
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
}); return (
new cljs.core.Var(function(){return clojure.data.diff_set;},new cljs.core.Symbol("clojure.data","diff-set","clojure.data/diff-set",(946593171),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.data","clojure.data",(-2083828516),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Stuart Halloway",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Non-core data functions."], null)),new cljs.core.Symbol(null,"diff-set","diff-set",(-364591609),null),"clojure/data.cljs",(16),(1),(69),(69),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null)], null)),null,(cljs.core.truth_(clojure.data.diff_set)?clojure.data.diff_set.cljs$lang$test:null)])));})()
;

/**
 * Implementation detail. Subject to change.
 * @interface
 */
(function (){
clojure.data.EqualityPartition = function(){}; return (
new cljs.core.Var(function(){return clojure.data.EqualityPartition;},new cljs.core.Symbol("clojure.data","EqualityPartition","clojure.data/EqualityPartition",(-2099186728),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.data","clojure.data",(-2083828516),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Stuart Halloway",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Non-core data functions."], null)),new cljs.core.Symbol(null,"EqualityPartition","EqualityPartition",(-255599508),null),"clojure/data.cljs",(31),(1),(75),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.with_meta(new cljs.core.Symbol(null,"equality-partition","equality-partition",(1419043626),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Implementation detail. Subject to change."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)], null)])], null),(75),cljs.core.List.EMPTY,"Implementation detail. Subject to change.",cljs.core.list("@interface"),((clojure.data.EqualityPartition)?clojure.data.EqualityPartition.cljs$lang$test:null)])));})()
;

/**
 * Implementation detail. Subject to change.
 */
(function (){
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__22676__auto__ = (((x == null))?null:x);
var m__22677__auto__ = (clojure.data.equality_partition[goog.typeOf(x__22676__auto__)]);
if(!((m__22677__auto__ == null))){
return (m__22677__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22677__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__22677__auto__(x));
} else {
var m__22677__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__22677__auto____$1 == null))){
return (m__22677__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22677__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__22677__auto____$1(x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
}); return (
new cljs.core.Var(function(){return clojure.data.equality_partition;},new cljs.core.Symbol("clojure.data","equality-partition","clojure.data/equality-partition",(-1501847714),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("clojure.data","EqualityPartition","clojure.data/EqualityPartition",(-2099186728),null),cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.data","clojure.data",(-2083828516),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Stuart Halloway",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Non-core data functions."], null)),new cljs.core.Symbol(null,"equality-partition","equality-partition",(1419043626),null),"clojure/data.cljs",(22),(1),(75),(77),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Implementation detail. Subject to change.",((clojure.data.equality_partition)?clojure.data.equality_partition.cljs$lang$test:null)])));})()
;


/**
 * Implementation detail. Subject to change.
 * @interface
 */
(function (){
clojure.data.Diff = function(){}; return (
new cljs.core.Var(function(){return clojure.data.Diff;},new cljs.core.Symbol("clojure.data","Diff","clojure.data/Diff",(-1724958619),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.data","clojure.data",(-2083828516),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Stuart Halloway",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Non-core data functions."], null)),new cljs.core.Symbol(null,"Diff","Diff",(-1425488399),null),"clojure/data.cljs",(18),(1),(79),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.with_meta(new cljs.core.Symbol(null,"diff-similar","diff-similar",(230692495),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Implementation detail. Subject to change."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null)], null)], null)])], null),(79),cljs.core.List.EMPTY,"Implementation detail. Subject to change.",cljs.core.list("@interface"),((clojure.data.Diff)?clojure.data.Diff.cljs$lang$test:null)])));})()
;

/**
 * Implementation detail. Subject to change.
 */
(function (){
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null)))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__22676__auto__ = (((a == null))?null:a);
var m__22677__auto__ = (clojure.data.diff_similar[goog.typeOf(x__22676__auto__)]);
if(!((m__22677__auto__ == null))){
return (m__22677__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22677__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__22677__auto__(a,b));
} else {
var m__22677__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__22677__auto____$1 == null))){
return (m__22677__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22677__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__22677__auto____$1(a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
}); return (
new cljs.core.Var(function(){return clojure.data.diff_similar;},new cljs.core.Symbol("clojure.data","diff-similar","clojure.data/diff-similar",(1072499067),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("clojure.data","Diff","clojure.data/Diff",(-1724958619),null),cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.data","clojure.data",(-2083828516),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Stuart Halloway",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Non-core data functions."], null)),new cljs.core.Symbol(null,"diff-similar","diff-similar",(230692495),null),"clojure/data.cljs",(16),(1),(79),(81),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null)], null)),"Implementation detail. Subject to change.",((clojure.data.diff_similar)?clojure.data.diff_similar.cljs$lang$test:null)])));})()
;

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__2563_2587 = clojure.data.equality_partition;
var G__2564_2588 = "null";
var G__2565_2589 = ((function (G__2563_2587,G__2564_2588){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",(-397043653));
});})(G__2563_2587,G__2564_2588))
;
goog.object.set(G__2563_2587,G__2564_2588,G__2565_2589);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__2566_2590 = clojure.data.equality_partition;
var G__2567_2591 = "string";
var G__2568_2592 = ((function (G__2566_2590,G__2567_2591){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",(-397043653));
});})(G__2566_2590,G__2567_2591))
;
goog.object.set(G__2566_2590,G__2567_2591,G__2568_2592);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__2569_2593 = clojure.data.equality_partition;
var G__2570_2594 = "number";
var G__2571_2595 = ((function (G__2569_2593,G__2570_2594){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",(-397043653));
});})(G__2569_2593,G__2570_2594))
;
goog.object.set(G__2569_2593,G__2570_2594,G__2571_2595);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__2572_2596 = clojure.data.equality_partition;
var G__2573_2597 = "array";
var G__2574_2598 = ((function (G__2572_2596,G__2573_2597){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",(-1082983960));
});})(G__2572_2596,G__2573_2597))
;
goog.object.set(G__2572_2596,G__2573_2597,G__2574_2598);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__2575_2599 = clojure.data.equality_partition;
var G__2576_2600 = "function";
var G__2577_2601 = ((function (G__2575_2599,G__2576_2600){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",(-397043653));
});})(G__2575_2599,G__2576_2600))
;
goog.object.set(G__2575_2599,G__2576_2600,G__2577_2601);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__2578_2602 = clojure.data.equality_partition;
var G__2579_2603 = "boolean";
var G__2580_2604 = ((function (G__2578_2602,G__2579_2603){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",(-397043653));
});})(G__2578_2602,G__2579_2603))
;
goog.object.set(G__2578_2602,G__2579_2603,G__2580_2604);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__2581_2605 = clojure.data.equality_partition;
var G__2582_2606 = "_";
var G__2583_2607 = ((function (G__2581_2605,G__2582_2606){
return (function (x){
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",(1371690461));
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",(304602554));
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",(-1082983960));
} else {
return new cljs.core.Keyword(null,"atom","atom",(-397043653));

}
}
}
});})(G__2581_2605,G__2582_2606))
;
goog.object.set(G__2581_2605,G__2582_2606,G__2583_2607);
goog.object.set(clojure.data.Diff,"null",true);

var G__2608_2632 = clojure.data.diff_similar;
var G__2609_2633 = "null";
var G__2610_2634 = ((function (G__2608_2632,G__2609_2633){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__2608_2632,G__2609_2633))
;
goog.object.set(G__2608_2632,G__2609_2633,G__2610_2634);

goog.object.set(clojure.data.Diff,"string",true);

var G__2611_2635 = clojure.data.diff_similar;
var G__2612_2636 = "string";
var G__2613_2637 = ((function (G__2611_2635,G__2612_2636){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__2611_2635,G__2612_2636))
;
goog.object.set(G__2611_2635,G__2612_2636,G__2613_2637);

goog.object.set(clojure.data.Diff,"number",true);

var G__2614_2638 = clojure.data.diff_similar;
var G__2615_2639 = "number";
var G__2616_2640 = ((function (G__2614_2638,G__2615_2639){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__2614_2638,G__2615_2639))
;
goog.object.set(G__2614_2638,G__2615_2639,G__2616_2640);

goog.object.set(clojure.data.Diff,"array",true);

var G__2617_2641 = clojure.data.diff_similar;
var G__2618_2642 = "array";
var G__2619_2643 = ((function (G__2617_2641,G__2618_2642){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__2617_2641,G__2618_2642))
;
goog.object.set(G__2617_2641,G__2618_2642,G__2619_2643);

goog.object.set(clojure.data.Diff,"function",true);

var G__2620_2644 = clojure.data.diff_similar;
var G__2621_2645 = "function";
var G__2622_2646 = ((function (G__2620_2644,G__2621_2645){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__2620_2644,G__2621_2645))
;
goog.object.set(G__2620_2644,G__2621_2645,G__2622_2646);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__2623_2647 = clojure.data.diff_similar;
var G__2624_2648 = "boolean";
var G__2625_2649 = ((function (G__2623_2647,G__2624_2648){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__2623_2647,G__2624_2648))
;
goog.object.set(G__2623_2647,G__2624_2648,G__2625_2649);

goog.object.set(clojure.data.Diff,"_",true);

var G__2626_2650 = clojure.data.diff_similar;
var G__2627_2651 = "_";
var G__2628_2652 = ((function (G__2626_2650,G__2627_2651){
return (function (a,b){
var fexpr__2630 = (function (){var G__2631 = clojure.data.equality_partition(a);
var G__2631__$1 = (((G__2631 instanceof cljs.core.Keyword))?G__2631.fqn:null);
switch (G__2631__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__2631__$1)].join('')));

}
})();
return (fexpr__2630.cljs$core$IFn$_invoke$arity$2 ? fexpr__2630.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__2630(a,b));
});})(G__2626_2650,G__2627_2651))
;
goog.object.set(G__2626_2650,G__2627_2651,G__2628_2652);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
(function (){
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
}); return (
new cljs.core.Var(function(){return clojure.data.diff;},new cljs.core.Symbol("clojure.data","diff","clojure.data/diff",(-683865998),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.data","clojure.data",(-2083828516),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Stuart Halloway",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Non-core data functions."], null)),new cljs.core.Symbol(null,"diff","diff",(-518492986),null),"clojure/data.cljs",(11),(1),(144),(144),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null)], null)),"Recursively compares a and b, returning a tuple of\n  [things-only-in-a things-only-in-b things-in-both].\n  Comparison rules:\n\n  * For equal a and b, return [nil nil a].\n  * Maps are subdiffed where keys match and values differ.\n  * Sets are never subdiffed.\n  * All sequential things are treated as associative collections\n    by their indexes, with results returned as vectors.\n  * Everything else (including strings!) is treated as\n    an atom and compared for equality.",(cljs.core.truth_(clojure.data.diff)?clojure.data.diff.cljs$lang$test:null)])));})()
;
