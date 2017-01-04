goog.provide("clojure.test.check.random.longs.bit_count_impl");
(function (){
clojure.test.check.random.longs.bit_count_impl.lookup = (function (){var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(arr[(0)] = (0));

var n__23475__auto___22 = (256);
var i_23 = (0);
while(true){
if((i_23 < n__23475__auto___22)){
(arr[i_23] = ((arr[(i_23 >> (1))]) + (i_23 & (1))));

var G__24 = (i_23 + (1));
i_23 = G__24;
continue;
} else {
}
break;
}

return arr;
})(); return (
new cljs.core.Var(function(){return clojure.test.check.random.longs.bit_count_impl.lookup;},new cljs.core.Symbol("clojure.test.check.random.longs.bit-count-impl","lookup","clojure.test.check.random.longs.bit-count-impl/lookup",(-396731403),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random.longs.bit-count-impl","clojure.test.check.random.longs.bit-count-impl",(-361420910),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks"], null)),new cljs.core.Symbol(null,"lookup","lookup",(-1429078931),null),"clojure/test/check/random/longs/bit_count_impl.cljs",(22),(1),(18),(18),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.test.check.random.longs.bit_count_impl.lookup)?clojure.test.check.random.longs.bit_count_impl.lookup.cljs$lang$test:null)])));})()
;
/**
 * Returns a JS number (not a Long), the number of set bits in the
 *   given Long.
 */
(function (){
clojure.test.check.random.longs.bit_count_impl.bit_count = (function clojure$test$check$random$longs$bit_count_impl$bit_count(x){
var low = x.low_;
var high = x.high_;
return ((((((((clojure.test.check.random.longs.bit_count_impl.lookup[(low & (255))]) + (clojure.test.check.random.longs.bit_count_impl.lookup[((low >> (8)) & (255))])) + (clojure.test.check.random.longs.bit_count_impl.lookup[((low >> (16)) & (255))])) + (clojure.test.check.random.longs.bit_count_impl.lookup[((low >> (24)) & (255))])) + (clojure.test.check.random.longs.bit_count_impl.lookup[(high & (255))])) + (clojure.test.check.random.longs.bit_count_impl.lookup[((high >> (8)) & (255))])) + (clojure.test.check.random.longs.bit_count_impl.lookup[((high >> (16)) & (255))])) + (clojure.test.check.random.longs.bit_count_impl.lookup[((high >> (24)) & (255))]));
}); return (
new cljs.core.Var(function(){return clojure.test.check.random.longs.bit_count_impl.bit_count;},new cljs.core.Symbol("clojure.test.check.random.longs.bit-count-impl","bit-count","clojure.test.check.random.longs.bit-count-impl/bit-count",(361529293),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random.longs.bit-count-impl","clojure.test.check.random.longs.bit-count-impl",(-361420910),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks"], null)),new cljs.core.Symbol(null,"bit-count","bit-count",(1400227397),null),"clojure/test/check/random/longs/bit_count_impl.cljs",(16),(1),(26),(26),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Returns a JS number (not a Long), the number of set bits in the\n  given Long.",(cljs.core.truth_(clojure.test.check.random.longs.bit_count_impl.bit_count)?clojure.test.check.random.longs.bit_count_impl.bit_count.cljs$lang$test:null)])));})()
;
