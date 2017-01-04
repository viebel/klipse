goog.provide("clojure.test.check");
(function (){
clojure.test.check.shrink_loop; return (
new cljs.core.Var(function(){return clojure.test.check.shrink_loop;},new cljs.core.Symbol("clojure.test.check","shrink-loop","clojure.test.check/shrink-loop",(-419882804),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check","clojure.test.check",(-2057571184),null),new cljs.core.Symbol(null,"shrink-loop","shrink-loop",(1434628802),null),"clojure/test/check.cljc",(21),(1),(18),true,(18),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.test.check.shrink_loop)?clojure.test.check.shrink_loop.cljs$lang$test:null)])));})()
;

(function (){
clojure.test.check.failure; return (
new cljs.core.Var(function(){return clojure.test.check.failure;},new cljs.core.Symbol("clojure.test.check","failure","clojure.test.check/failure",(2108872916),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check","clojure.test.check",(-2057571184),null),new cljs.core.Symbol(null,"failure","failure",(-1934019890),null),"clojure/test/check.cljc",(29),(1),(18),true,(18),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.test.check.failure)?clojure.test.check.failure.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.make_rng = (function clojure$test$check$make_rng(seed){
if(cljs.core.truth_(seed)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed,clojure.test.check.random.make_random.call(null,seed)], null);
} else {
var non_nil_seed = clojure.test.check.impl.get_current_time_millis.call(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [non_nil_seed,clojure.test.check.random.make_random.call(null,non_nil_seed)], null);
}
}); return (
new cljs.core.Var(function(){return clojure.test.check.make_rng;},new cljs.core.Symbol("clojure.test.check","make-rng","clojure.test.check/make-rng",(-8022839),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check","clojure.test.check",(-2057571184),null),new cljs.core.Symbol(null,"make-rng","make-rng",(1284471491),null),"clojure/test/check.cljc",(16),(1),(20),(20),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seed","seed",(1709144854),null)], null)),null,(cljs.core.truth_(clojure.test.check.make_rng)?clojure.test.check.make_rng.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.complete = (function clojure$test$check$complete(property,num_trials,seed){
clojure.test.check.clojure_test.report_trial.call(null,property,num_trials,num_trials);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"num-tests","num-tests",(2050041354)),num_trials,new cljs.core.Keyword(null,"seed","seed",(68613327)),seed,new cljs.core.Keyword(null,"result","result",(1415092211)),true], null);
}); return (
new cljs.core.Var(function(){return clojure.test.check.complete;},new cljs.core.Symbol("clojure.test.check","complete","clojure.test.check/complete",(-1326734166),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check","clojure.test.check",(-2057571184),null),new cljs.core.Symbol(null,"complete","complete",(1140142752),null),"clojure/test/check.cljc",(16),(1),(27),(27),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"property","property",(526253295),null),new cljs.core.Symbol(null,"num-trials","num-trials",(-1249103010),null),new cljs.core.Symbol(null,"seed","seed",(1709144854),null)], null)),null,(cljs.core.truth_(clojure.test.check.complete)?clojure.test.check.complete.cljs$lang$test:null)])));})()
;
/**
 * True if the value is not falsy or an exception
 */
(function (){
clojure.test.check.not_falsey_or_exception_QMARK_ = (function clojure$test$check$not_falsey_or_exception_QMARK_(value){
var and__20770__auto__ = value;
if(cljs.core.truth_(and__20770__auto__)){
return cljs.core.not.call(null,clojure.test.check.impl.exception_like_QMARK_.call(null,value));
} else {
return and__20770__auto__;
}
}); return (
new cljs.core.Var(function(){return clojure.test.check.not_falsey_or_exception_QMARK_;},new cljs.core.Symbol("clojure.test.check","not-falsey-or-exception?","clojure.test.check/not-falsey-or-exception?",(-1906832188),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check","clojure.test.check",(-2057571184),null),new cljs.core.Symbol(null,"not-falsey-or-exception?","not-falsey-or-exception?",(-9594162),null),"clojure/test/check.cljc",(32),(1),(32),(32),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),"True if the value is not falsy or an exception",(cljs.core.truth_(clojure.test.check.not_falsey_or_exception_QMARK_)?clojure.test.check.not_falsey_or_exception_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Tests `property` `num-tests` times.
 *   Takes optional keys `:seed` and `:max-size`. The seed parameter
 *   can be used to re-run previous tests, as the seed used is returned
 *   after a test is run. The max-size can be used to control the 'size'
 *   of generated values. The size will start at 0, and grow up to
 *   max-size, as the number of tests increases. Generators will use
 *   the size parameter to bound their growth. This prevents, for example,
 *   generating a five-thousand element vector on the very first test.
 * 
 *   Examples:
 * 
 *    (def p (for-all [a gen/pos-int] (> (* a a) a)))
 *    (quick-check 100 p)
 *   
 */
(function (){
clojure.test.check.quick_check = (function clojure$test$check$quick_check(var_args){
var args__23658__auto__ = [];
var len__23656__auto___466 = arguments.length;
var i__23657__auto___467 = (0);
while(true){
if((i__23657__auto___467 < len__23656__auto___466)){
args__23658__auto__.push((arguments[i__23657__auto___467]));

var G__468 = (i__23657__auto___467 + (1));
i__23657__auto___467 = G__468;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((2) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((2)),(0),null)):null);
return clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return clojure.test.check.quick_check;},new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",(-810344251),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check","clojure.test.check",(-2057571184),null),new cljs.core.Symbol(null,"quick-check","quick-check",(1555674831),null),"clojure/test/check.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"num-tests","num-tests",(-604394415),null),new cljs.core.Symbol(null,"property","property",(526253295),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"max-size","max-size",(765565395),null),(200)], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seed","seed",(1709144854),null),new cljs.core.Symbol(null,"max-size","max-size",(765565395),null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num-tests","num-tests",(-604394415),null),new cljs.core.Symbol(null,"property","property",(526253295),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"max-size","max-size",(765565395),null),(200)], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seed","seed",(1709144854),null),new cljs.core.Symbol(null,"max-size","max-size",(765565395),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(37),(37),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num-tests","num-tests",(-604394415),null),new cljs.core.Symbol(null,"property","property",(526253295),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"max-size","max-size",(765565395),null),(200)], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seed","seed",(1709144854),null),new cljs.core.Symbol(null,"max-size","max-size",(765565395),null)], null)], null)], null)),"Tests `property` `num-tests` times.\n  Takes optional keys `:seed` and `:max-size`. The seed parameter\n  can be used to re-run previous tests, as the seed used is returned\n  after a test is run. The max-size can be used to control the 'size'\n  of generated values. The size will start at 0, and grow up to\n  max-size, as the number of tests increases. Generators will use\n  the size parameter to bound their growth. This prevents, for example,\n  generating a five-thousand element vector on the very first test.\n\n  Examples:\n\n      (def p (for-all [a gen/pos-int] (> (* a a) a)))\n      (quick-check 100 p)\n  ",(cljs.core.truth_(clojure.test.check.quick_check)?clojure.test.check.quick_check.cljs$lang$test:null)])));})()
;

clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (num_tests,property,p__454){
var map__455 = p__454;
var map__455__$1 = ((((!((map__455 == null)))?((((map__455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__455.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__455):map__455);
var max_size = cljs.core.get.call(null,map__455__$1,new cljs.core.Keyword(null,"max-size","max-size",(-874966132)),(200));
var seed = cljs.core.get.call(null,map__455__$1,new cljs.core.Keyword(null,"seed","seed",(68613327)));
var vec__457 = clojure.test.check.make_rng.call(null,seed);
var created_seed = cljs.core.nth.call(null,vec__457,(0),null);
var rng = cljs.core.nth.call(null,vec__457,(1),null);
var size_seq = clojure.test.check.generators.make_size_range_seq.call(null,max_size);
var so_far = (0);
var size_seq__$1 = size_seq;
var rstate = rng;
while(true){
if((so_far === num_tests)){
return clojure.test.check.complete.call(null,property,num_tests,created_seed);
} else {
var vec__460 = size_seq__$1;
var seq__461 = cljs.core.seq.call(null,vec__460);
var first__462 = cljs.core.first.call(null,seq__461);
var seq__461__$1 = cljs.core.next.call(null,seq__461);
var size = first__462;
var rest_size_seq = seq__461__$1;
var vec__463 = clojure.test.check.random.split.call(null,rstate);
var r1 = cljs.core.nth.call(null,vec__463,(0),null);
var r2 = cljs.core.nth.call(null,vec__463,(1),null);
var result_map_rose = clojure.test.check.generators.call_gen.call(null,property,r1,size);
var result_map = clojure.test.check.rose_tree.root.call(null,result_map_rose);
var result = new cljs.core.Keyword(null,"result","result",(1415092211)).cljs$core$IFn$_invoke$arity$1(result_map);
var args = new cljs.core.Keyword(null,"args","args",(1315556576)).cljs$core$IFn$_invoke$arity$1(result_map);
if(cljs.core.truth_(clojure.test.check.not_falsey_or_exception_QMARK_.call(null,result))){
clojure.test.check.clojure_test.report_trial.call(null,property,so_far,num_tests);

var G__469 = (so_far + (1));
var G__470 = rest_size_seq;
var G__471 = r2;
so_far = G__469;
size_seq__$1 = G__470;
rstate = G__471;
continue;
} else {
return clojure.test.check.failure.call(null,property,result_map_rose,so_far,size,created_seed);
}
}
break;
}
});

clojure.test.check.quick_check.cljs$lang$maxFixedArity = (2);

clojure.test.check.quick_check.cljs$lang$applyTo = (function (seq451){
var G__452 = cljs.core.first.call(null,seq451);
var seq451__$1 = cljs.core.next.call(null,seq451);
var G__453 = cljs.core.first.call(null,seq451__$1);
var seq451__$2 = cljs.core.next.call(null,seq451__$1);
return clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic(G__452,G__453,seq451__$2);
});

new cljs.core.Var(function(){return clojure.test.check.quick_check;},new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",(-810344251),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check","clojure.test.check",(-2057571184),null),new cljs.core.Symbol(null,"quick-check","quick-check",(1555674831),null),"clojure/test/check.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"num-tests","num-tests",(-604394415),null),new cljs.core.Symbol(null,"property","property",(526253295),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"max-size","max-size",(765565395),null),(200)], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seed","seed",(1709144854),null),new cljs.core.Symbol(null,"max-size","max-size",(765565395),null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num-tests","num-tests",(-604394415),null),new cljs.core.Symbol(null,"property","property",(526253295),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"max-size","max-size",(765565395),null),(200)], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seed","seed",(1709144854),null),new cljs.core.Symbol(null,"max-size","max-size",(765565395),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(37),(37),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num-tests","num-tests",(-604394415),null),new cljs.core.Symbol(null,"property","property",(526253295),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"max-size","max-size",(765565395),null),(200)], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seed","seed",(1709144854),null),new cljs.core.Symbol(null,"max-size","max-size",(765565395),null)], null)], null)], null)),"Tests `property` `num-tests` times.\n  Takes optional keys `:seed` and `:max-size`. The seed parameter\n  can be used to re-run previous tests, as the seed used is returned\n  after a test is run. The max-size can be used to control the 'size'\n  of generated values. The size will start at 0, and grow up to\n  max-size, as the number of tests increases. Generators will use\n  the size parameter to bound their growth. This prevents, for example,\n  generating a five-thousand element vector on the very first test.\n\n  Examples:\n\n      (def p (for-all [a gen/pos-int] (> (* a a) a)))\n      (quick-check 100 p)\n  ",(cljs.core.truth_(clojure.test.check.quick_check)?clojure.test.check.quick_check.cljs$lang$test:null)]));
(function (){
clojure.test.check.smallest_shrink = (function clojure$test$check$smallest_shrink(total_nodes_visited,depth,smallest){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"total-nodes-visited","total-nodes-visited",(-620132443)),total_nodes_visited,new cljs.core.Keyword(null,"result","result",(1415092211)),new cljs.core.Keyword(null,"result","result",(1415092211)).cljs$core$IFn$_invoke$arity$1(smallest),new cljs.core.Keyword(null,"smallest","smallest",(-152623883)),new cljs.core.Keyword(null,"args","args",(1315556576)).cljs$core$IFn$_invoke$arity$1(smallest),new cljs.core.Keyword(null,"depth","depth",(1768663640)),depth], null);
}); return (
new cljs.core.Var(function(){return clojure.test.check.smallest_shrink;},new cljs.core.Symbol("clojure.test.check","smallest-shrink","clojure.test.check/smallest-shrink",(1199171940),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check","clojure.test.check",(-2057571184),null),new cljs.core.Symbol(null,"smallest-shrink","smallest-shrink",(-268140690),null),"clojure/test/check.cljc",(23),(1),(72),(72),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"total-nodes-visited","total-nodes-visited",(1020399084),null),new cljs.core.Symbol(null,"depth","depth",(-885772129),null),new cljs.core.Symbol(null,"smallest","smallest",(1487907644),null)], null)),null,(cljs.core.truth_(clojure.test.check.smallest_shrink)?clojure.test.check.smallest_shrink.cljs$lang$test:null)])));})()
;
/**
 * Shrinking a value produces a sequence of smaller values of the same type.
 *   Each of these values can then be shrunk. Think of this as a tree. We do a
 *   modified depth-first search of the tree:
 * 
 *   Do a non-exhaustive search for a deeper (than the root) failing example.
 *   Additional rules added to depth-first search:
 *   * If a node passes the property, you may continue searching at this depth,
 *   but not backtrack
 *   * If a node fails the property, search its children
 *   The value returned is the left-most failing example at the depth where a
 *   passing example was found.
 */
(function (){
clojure.test.check.shrink_loop = (function clojure$test$check$shrink_loop(rose_tree){
var shrinks_this_depth = clojure.test.check.rose_tree.children.call(null,rose_tree);
var nodes = shrinks_this_depth;
var current_smallest = clojure.test.check.rose_tree.root.call(null,rose_tree);
var total_nodes_visited = (0);
var depth = (0);
while(true){
if(cljs.core.empty_QMARK_.call(null,nodes)){
return clojure.test.check.smallest_shrink.call(null,total_nodes_visited,depth,current_smallest);
} else {
var vec__475 = nodes;
var seq__476 = cljs.core.seq.call(null,vec__475);
var first__477 = cljs.core.first.call(null,seq__476);
var seq__476__$1 = cljs.core.next.call(null,seq__476);
var head = first__477;
var tail = seq__476__$1;
var result = new cljs.core.Keyword(null,"result","result",(1415092211)).cljs$core$IFn$_invoke$arity$1(clojure.test.check.rose_tree.root.call(null,head));
if(cljs.core.truth_(clojure.test.check.not_falsey_or_exception_QMARK_.call(null,result))){
var G__478 = tail;
var G__479 = current_smallest;
var G__480 = (total_nodes_visited + (1));
var G__481 = depth;
nodes = G__478;
current_smallest = G__479;
total_nodes_visited = G__480;
depth = G__481;
continue;
} else {
var temp__19520__auto__ = cljs.core.seq.call(null,clojure.test.check.rose_tree.children.call(null,head));
if(temp__19520__auto__){
var children = temp__19520__auto__;
var G__482 = children;
var G__483 = clojure.test.check.rose_tree.root.call(null,head);
var G__484 = (total_nodes_visited + (1));
var G__485 = (depth + (1));
nodes = G__482;
current_smallest = G__483;
total_nodes_visited = G__484;
depth = G__485;
continue;
} else {
var G__486 = tail;
var G__487 = clojure.test.check.rose_tree.root.call(null,head);
var G__488 = (total_nodes_visited + (1));
var G__489 = depth;
nodes = G__486;
current_smallest = G__487;
total_nodes_visited = G__488;
depth = G__489;
continue;
}
}
}
break;
}
}); return (
new cljs.core.Var(function(){return clojure.test.check.shrink_loop;},new cljs.core.Symbol("clojure.test.check","shrink-loop","clojure.test.check/shrink-loop",(-419882804),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check","clojure.test.check",(-2057571184),null),new cljs.core.Symbol(null,"shrink-loop","shrink-loop",(1434628802),null),"clojure/test/check.cljc",(19),(1),(79),(79),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rose-tree","rose-tree",(1715983872),null)], null)),"Shrinking a value produces a sequence of smaller values of the same type.\n  Each of these values can then be shrunk. Think of this as a tree. We do a\n  modified depth-first search of the tree:\n\n  Do a non-exhaustive search for a deeper (than the root) failing example.\n  Additional rules added to depth-first search:\n  * If a node passes the property, you may continue searching at this depth,\n  but not backtrack\n  * If a node fails the property, search its children\n  The value returned is the left-most failing example at the depth where a\n  passing example was found.",(cljs.core.truth_(clojure.test.check.shrink_loop)?clojure.test.check.shrink_loop.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.failure = (function clojure$test$check$failure(property,failing_rose_tree,trial_number,size,seed){
var root = clojure.test.check.rose_tree.root.call(null,failing_rose_tree);
var result = new cljs.core.Keyword(null,"result","result",(1415092211)).cljs$core$IFn$_invoke$arity$1(root);
var failing_args = new cljs.core.Keyword(null,"args","args",(1315556576)).cljs$core$IFn$_invoke$arity$1(root);
clojure.test.check.clojure_test.report_failure.call(null,property,result,trial_number,failing_args);

return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"shrunk","shrunk",(-2041664412)),clojure.test.check.shrink_loop.call(null,failing_rose_tree),new cljs.core.Keyword(null,"num-tests","num-tests",(2050041354)),(trial_number + (1)),new cljs.core.Keyword(null,"seed","seed",(68613327)),seed,new cljs.core.Keyword(null,"fail","fail",(1706214930)),cljs.core.vec.call(null,failing_args),new cljs.core.Keyword(null,"result","result",(1415092211)),result,new cljs.core.Keyword(null,"failing-size","failing-size",(-429562538)),size], null);
}); return (
new cljs.core.Var(function(){return clojure.test.check.failure;},new cljs.core.Symbol("clojure.test.check","failure","clojure.test.check/failure",(2108872916),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check","clojure.test.check",(-2057571184),null),new cljs.core.Symbol(null,"failure","failure",(-1934019890),null),"clojure/test/check.cljc",(15),(1),(112),(112),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"property","property",(526253295),null),new cljs.core.Symbol(null,"failing-rose-tree","failing-rose-tree",(1497987144),null),new cljs.core.Symbol(null,"trial-number","trial-number",(-892379080),null),new cljs.core.Symbol(null,"size","size",(-1555742762),null),new cljs.core.Symbol(null,"seed","seed",(1709144854),null)], null)),null,(cljs.core.truth_(clojure.test.check.failure)?clojure.test.check.failure.cljs$lang$test:null)])));})()
;
