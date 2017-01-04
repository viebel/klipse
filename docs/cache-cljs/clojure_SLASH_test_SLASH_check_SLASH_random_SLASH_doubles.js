goog.provide("clojure.test.check.random.doubles");
(function (){
clojure.test.check.random.doubles.double_unit = (function (){var i = (53);
var x = (1);
while(true){
if((i === (0))){
return x;
} else {
var G__25 = (i - (1));
var G__26 = (x / (2));
i = G__25;
x = G__26;
continue;
}
break;
}
})(); return (
new cljs.core.Var(function(){return clojure.test.check.random.doubles.double_unit;},new cljs.core.Symbol("clojure.test.check.random.doubles","double-unit","clojure.test.check.random.doubles/double-unit",(1360285475),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random.doubles","clojure.test.check.random.doubles",(877405703),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks"], null)),new cljs.core.Symbol(null,"double-unit","double-unit",(-1686592302),null),"clojure/test/check/random/doubles.cljs",(27),(1),(14),(14),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.test.check.random.doubles.double_unit)?clojure.test.check.random.doubles.double_unit.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.random.doubles.big_double_unit = (clojure.test.check.random.doubles.double_unit * (4294967296)); return (
new cljs.core.Var(function(){return clojure.test.check.random.doubles.big_double_unit;},new cljs.core.Symbol("clojure.test.check.random.doubles","big-double-unit","clojure.test.check.random.doubles/big-double-unit",(1529803339),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random.doubles","clojure.test.check.random.doubles",(877405703),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks"], null)),new cljs.core.Symbol(null,"big-double-unit","big-double-unit",(-1779279110),null),"clojure/test/check/random/doubles.cljs",(31),(1),(20),(20),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.test.check.random.doubles.big_double_unit)?clojure.test.check.random.doubles.big_double_unit.cljs$lang$test:null)])));})()
;
/**
 * Given a uniformly distributed random long, returns a uniformly
 *   distributed double between 0.0 (inclusive) and 1.0 (exclusive).
 */
(function (){
clojure.test.check.random.doubles.rand_long__GT_rand_double = (function clojure$test$check$random$doubles$rand_long__GT_rand_double(long$){
var x = clojure.test.check.random.longs.unsigned_bit_shift_right.call(null,long$,(11));
var low_bits = x.getLowBitsUnsigned();
var high_bits = x.getHighBits();
return ((clojure.test.check.random.doubles.double_unit * low_bits) + (clojure.test.check.random.doubles.big_double_unit * high_bits));
}); return (
new cljs.core.Var(function(){return clojure.test.check.random.doubles.rand_long__GT_rand_double;},new cljs.core.Symbol("clojure.test.check.random.doubles","rand-long->rand-double","clojure.test.check.random.doubles/rand-long->rand-double",(-1242606343),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random.doubles","clojure.test.check.random.doubles",(877405703),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks"], null)),new cljs.core.Symbol(null,"rand-long->rand-double","rand-long->rand-double",(-280286134),null),"clojure/test/check/random/doubles.cljs",(29),(1),(24),(24),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"long","long",(1469079434),null)], null)),"Given a uniformly distributed random long, returns a uniformly\n  distributed double between 0.0 (inclusive) and 1.0 (exclusive).",(cljs.core.truth_(clojure.test.check.random.doubles.rand_long__GT_rand_double)?clojure.test.check.random.doubles.rand_long__GT_rand_double.cljs$lang$test:null)])));})()
;
