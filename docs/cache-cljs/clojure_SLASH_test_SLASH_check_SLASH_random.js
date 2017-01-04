goog.provide("clojure.test.check.random");

/**
 * @interface
 */
(function (){
clojure.test.check.random.IRandom = function(){}; return (
new cljs.core.Var(function(){return clojure.test.check.random.IRandom;},new cljs.core.Symbol("clojure.test.check.random","IRandom","clojure.test.check.random/IRandom",(-1117896154),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random","clojure.test.check.random",(2043592849),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Purely functional and splittable pseudo-random number generators."], null)),new cljs.core.Symbol(null,"IRandom","IRandom",(-1056573795),null),"clojure/test/check/random.cljs",(21),(1),(19),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"rand-long","rand-long",(1654086308),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Returns a random goog.math.Long based on the given immutable RNG.\n\n  Note: to maintain independence you should not call more than one\n  function in the IRandom protocol with the same argument"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rng","rng",(-1571769753),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"rand-double","rand-double",(-1487667849),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Returns a random double between 0.0 (inclusive) and 1.0 (exclusive)\n  based on the given immutable RNG.\n\n  Note: to maintain independence you should not call more than one\n  function in the IRandom protocol with the same argument"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rng","rng",(-1571769753),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",(1041096409),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Returns two new RNGs [rng1 rng2], which should generate\n  sufficiently independent random data.\n\n  Note: to maintain independence you should not call more than one\n  function in the IRandom protocol with the same argument"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rng","rng",(-1571769753),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"split-n","split-n",(671122803),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Returns a collection of `n` RNGs, which should generate\n  sufficiently independent random data.\n\n  Note: to maintain independence you should not call more than one\n  function in the IRandom protocol with the same argument"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rng","rng",(-1571769753),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)], null)], true, false)], null),(19),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(clojure.test.check.random.IRandom)?clojure.test.check.random.IRandom.cljs$lang$test:null)])));})()
;

/**
 * Returns a random goog.math.Long based on the given immutable RNG.
 * 
 *   Note: to maintain independence you should not call more than one
 *   function in the IRandom protocol with the same argument
 */
(function (){
clojure.test.check.random.rand_long = (function clojure$test$check$random$rand_long(rng){
if((!((rng == null))) && (!((rng.clojure$test$check$random$IRandom$rand_long$arity$1 == null)))){
return rng.clojure$test$check$random$IRandom$rand_long$arity$1(rng);
} else {
var x__23054__auto__ = (((rng == null))?null:rng);
var m__23055__auto__ = (clojure.test.check.random.rand_long[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,rng);
} else {
var m__23055__auto____$1 = (clojure.test.check.random.rand_long["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,rng);
} else {
throw cljs.core.missing_protocol.call(null,"IRandom.rand-long",rng);
}
}
}
}); return (
new cljs.core.Var(function(){return clojure.test.check.random.rand_long;},new cljs.core.Symbol("clojure.test.check.random","rand-long","clojure.test.check.random/rand-long",(-1770336529),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("clojure.test.check.random","IRandom","clojure.test.check.random/IRandom",(-1117896154),null),cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random","clojure.test.check.random",(2043592849),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Purely functional and splittable pseudo-random number generators."], null)),new cljs.core.Symbol(null,"rand-long","rand-long",(1654086308),null),"clojure/test/check/random.cljs",(13),(1),(19),(20),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rng","rng",(-1571769753),null)], null)),"Returns a random goog.math.Long based on the given immutable RNG.\n\n  Note: to maintain independence you should not call more than one\n  function in the IRandom protocol with the same argument",(cljs.core.truth_(clojure.test.check.random.rand_long)?clojure.test.check.random.rand_long.cljs$lang$test:null)])));})()
;

/**
 * Returns a random double between 0.0 (inclusive) and 1.0 (exclusive)
 *   based on the given immutable RNG.
 * 
 *   Note: to maintain independence you should not call more than one
 *   function in the IRandom protocol with the same argument
 */
(function (){
clojure.test.check.random.rand_double = (function clojure$test$check$random$rand_double(rng){
if((!((rng == null))) && (!((rng.clojure$test$check$random$IRandom$rand_double$arity$1 == null)))){
return rng.clojure$test$check$random$IRandom$rand_double$arity$1(rng);
} else {
var x__23054__auto__ = (((rng == null))?null:rng);
var m__23055__auto__ = (clojure.test.check.random.rand_double[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,rng);
} else {
var m__23055__auto____$1 = (clojure.test.check.random.rand_double["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,rng);
} else {
throw cljs.core.missing_protocol.call(null,"IRandom.rand-double",rng);
}
}
}
}); return (
new cljs.core.Var(function(){return clojure.test.check.random.rand_double;},new cljs.core.Symbol("clojure.test.check.random","rand-double","clojure.test.check.random/rand-double",(1932486962),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("clojure.test.check.random","IRandom","clojure.test.check.random/IRandom",(-1117896154),null),cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random","clojure.test.check.random",(2043592849),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Purely functional and splittable pseudo-random number generators."], null)),new cljs.core.Symbol(null,"rand-double","rand-double",(-1487667849),null),"clojure/test/check/random.cljs",(15),(1),(19),(25),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rng","rng",(-1571769753),null)], null)),"Returns a random double between 0.0 (inclusive) and 1.0 (exclusive)\n  based on the given immutable RNG.\n\n  Note: to maintain independence you should not call more than one\n  function in the IRandom protocol with the same argument",(cljs.core.truth_(clojure.test.check.random.rand_double)?clojure.test.check.random.rand_double.cljs$lang$test:null)])));})()
;

/**
 * Returns two new RNGs [rng1 rng2], which should generate
 *   sufficiently independent random data.
 * 
 *   Note: to maintain independence you should not call more than one
 *   function in the IRandom protocol with the same argument
 */
(function (){
clojure.test.check.random.split = (function clojure$test$check$random$split(rng){
if((!((rng == null))) && (!((rng.clojure$test$check$random$IRandom$split$arity$1 == null)))){
return rng.clojure$test$check$random$IRandom$split$arity$1(rng);
} else {
var x__23054__auto__ = (((rng == null))?null:rng);
var m__23055__auto__ = (clojure.test.check.random.split[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,rng);
} else {
var m__23055__auto____$1 = (clojure.test.check.random.split["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,rng);
} else {
throw cljs.core.missing_protocol.call(null,"IRandom.split",rng);
}
}
}
}); return (
new cljs.core.Var(function(){return clojure.test.check.random.split;},new cljs.core.Symbol("clojure.test.check.random","split","clojure.test.check.random/split",(1649496836),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("clojure.test.check.random","IRandom","clojure.test.check.random/IRandom",(-1117896154),null),cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random","clojure.test.check.random",(2043592849),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Purely functional and splittable pseudo-random number generators."], null)),new cljs.core.Symbol(null,"split","split",(1041096409),null),"clojure/test/check/random.cljs",(9),(1),(19),(31),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rng","rng",(-1571769753),null)], null)),"Returns two new RNGs [rng1 rng2], which should generate\n  sufficiently independent random data.\n\n  Note: to maintain independence you should not call more than one\n  function in the IRandom protocol with the same argument",(cljs.core.truth_(clojure.test.check.random.split)?clojure.test.check.random.split.cljs$lang$test:null)])));})()
;

/**
 * Returns a collection of `n` RNGs, which should generate
 *   sufficiently independent random data.
 * 
 *   Note: to maintain independence you should not call more than one
 *   function in the IRandom protocol with the same argument
 */
(function (){
clojure.test.check.random.split_n = (function clojure$test$check$random$split_n(rng,n){
if((!((rng == null))) && (!((rng.clojure$test$check$random$IRandom$split_n$arity$2 == null)))){
return rng.clojure$test$check$random$IRandom$split_n$arity$2(rng,n);
} else {
var x__23054__auto__ = (((rng == null))?null:rng);
var m__23055__auto__ = (clojure.test.check.random.split_n[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,rng,n);
} else {
var m__23055__auto____$1 = (clojure.test.check.random.split_n["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,rng,n);
} else {
throw cljs.core.missing_protocol.call(null,"IRandom.split-n",rng);
}
}
}
}); return (
new cljs.core.Var(function(){return clojure.test.check.random.split_n;},new cljs.core.Symbol("clojure.test.check.random","split-n","clojure.test.check.random/split-n",(2094795070),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("clojure.test.check.random","IRandom","clojure.test.check.random/IRandom",(-1117896154),null),cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random","clojure.test.check.random",(2043592849),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Purely functional and splittable pseudo-random number generators."], null)),new cljs.core.Symbol(null,"split-n","split-n",(671122803),null),"clojure/test/check/random.cljs",(11),(1),(19),(37),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rng","rng",(-1571769753),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Returns a collection of `n` RNGs, which should generate\n  sufficiently independent random data.\n\n  Note: to maintain independence you should not call more than one\n  function in the IRandom protocol with the same argument",(cljs.core.truth_(clojure.test.check.random.split_n)?clojure.test.check.random.split_n.cljs$lang$test:null)])));})()
;

/**
 * Helper for defining constants.
 */
(function (){
clojure.test.check.random.hex_long = (function clojure$test$check$random$hex_long(s){
return clojure.test.check.random.longs.from_string.call(null,s,(16));
}); return (
new cljs.core.Var(function(){return clojure.test.check.random.hex_long;},new cljs.core.Symbol("clojure.test.check.random","hex-long","clojure.test.check.random/hex-long",(-1910800152),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random","clojure.test.check.random",(2043592849),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Purely functional and splittable pseudo-random number generators."], null)),new cljs.core.Symbol(null,"hex-long","hex-long",(-742454089),null),"clojure/test/check/random.cljs",(25),(1),(49),(49),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),"Helper for defining constants.",(cljs.core.truth_(clojure.test.check.random.hex_long)?clojure.test.check.random.hex_long.cljs$lang$test:null)])));})()
;
/**
 * Performs (-> x (unsigned-bit-shift-right n) (bit-xor x)).
 */
(function (){
clojure.test.check.random.bxoubsr = (function clojure$test$check$random$bxoubsr(x,n){
return clojure.test.check.random.longs.bit_xor.call(null,clojure.test.check.random.longs.unsigned_bit_shift_right.call(null,x,n),x);
}); return (
new cljs.core.Var(function(){return clojure.test.check.random.bxoubsr;},new cljs.core.Symbol("clojure.test.check.random","bxoubsr","clojure.test.check.random/bxoubsr",(496849890),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random","clojure.test.check.random",(2043592849),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Purely functional and splittable pseudo-random number generators."], null)),new cljs.core.Symbol(null,"bxoubsr","bxoubsr",(-369696851),null),"clojure/test/check/random.cljs",(24),(1),(54),(54),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Performs (-> x (unsigned-bit-shift-right n) (bit-xor x)).",(cljs.core.truth_(clojure.test.check.random.bxoubsr)?clojure.test.check.random.bxoubsr.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.random.mix_64_const_1 = clojure.test.check.random.hex_long.call(null,"bf58476d1ce4e5b9"); return (
new cljs.core.Var(function(){return clojure.test.check.random.mix_64_const_1;},new cljs.core.Symbol("clojure.test.check.random","mix-64-const-1","clojure.test.check.random/mix-64-const-1",(1787915732),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random","clojure.test.check.random",(2043592849),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Purely functional and splittable pseudo-random number generators."], null)),new cljs.core.Symbol(null,"mix-64-const-1","mix-64-const-1",(-1103693543),null),"clojure/test/check/random.cljs",(30),(1),(59),(59),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.test.check.random.mix_64_const_1)?clojure.test.check.random.mix_64_const_1.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.random.mix_64_const_2 = clojure.test.check.random.hex_long.call(null,"94d049bb133111eb"); return (
new cljs.core.Var(function(){return clojure.test.check.random.mix_64_const_2;},new cljs.core.Symbol("clojure.test.check.random","mix-64-const-2","clojure.test.check.random/mix-64-const-2",(-2059478205),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random","clojure.test.check.random",(2043592849),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Purely functional and splittable pseudo-random number generators."], null)),new cljs.core.Symbol(null,"mix-64-const-2","mix-64-const-2",(-152942836),null),"clojure/test/check/random.cljs",(30),(1),(60),(60),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.test.check.random.mix_64_const_2)?clojure.test.check.random.mix_64_const_2.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.random.mix_64 = (function clojure$test$check$random$mix_64(n){
return clojure.test.check.random.bxoubsr.call(null,clojure.test.check.random.longs._STAR_.call(null,clojure.test.check.random.bxoubsr.call(null,clojure.test.check.random.longs._STAR_.call(null,clojure.test.check.random.bxoubsr.call(null,n,(30)),clojure.test.check.random.mix_64_const_1),(27)),clojure.test.check.random.mix_64_const_2),(31));
}); return (
new cljs.core.Var(function(){return clojure.test.check.random.mix_64;},new cljs.core.Symbol("clojure.test.check.random","mix-64","clojure.test.check.random/mix-64",(416690401),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random","clojure.test.check.random",(2043592849),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Purely functional and splittable pseudo-random number generators."], null)),new cljs.core.Symbol(null,"mix-64","mix-64",(-190217436),null),"clojure/test/check/random.cljs",(23),(1),(62),(62),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),null,(cljs.core.truth_(clojure.test.check.random.mix_64)?clojure.test.check.random.mix_64.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.random.mix_gamma_const_1 = clojure.test.check.random.hex_long.call(null,"ff51afd7ed558ccd"); return (
new cljs.core.Var(function(){return clojure.test.check.random.mix_gamma_const_1;},new cljs.core.Symbol("clojure.test.check.random","mix-gamma-const-1","clojure.test.check.random/mix-gamma-const-1",(-1061345905),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random","clojure.test.check.random",(2043592849),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Purely functional and splittable pseudo-random number generators."], null)),new cljs.core.Symbol(null,"mix-gamma-const-1","mix-gamma-const-1",(337220162),null),"clojure/test/check/random.cljs",(33),(1),(71),(71),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.test.check.random.mix_gamma_const_1)?clojure.test.check.random.mix_gamma_const_1.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.random.mix_gamma_const_2 = clojure.test.check.random.hex_long.call(null,"c4ceb9fe1a85ec53"); return (
new cljs.core.Var(function(){return clojure.test.check.random.mix_gamma_const_2;},new cljs.core.Symbol("clojure.test.check.random","mix-gamma-const-2","clojure.test.check.random/mix-gamma-const-2",(-1089786795),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random","clojure.test.check.random",(2043592849),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Purely functional and splittable pseudo-random number generators."], null)),new cljs.core.Symbol(null,"mix-gamma-const-2","mix-gamma-const-2",(66367720),null),"clojure/test/check/random.cljs",(33),(1),(72),(72),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.test.check.random.mix_gamma_const_2)?clojure.test.check.random.mix_gamma_const_2.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.random.mix_gamma_const_3 = clojure.test.check.random.hex_long.call(null,"aaaaaaaaaaaaaaaa"); return (
new cljs.core.Var(function(){return clojure.test.check.random.mix_gamma_const_3;},new cljs.core.Symbol("clojure.test.check.random","mix-gamma-const-3","clojure.test.check.random/mix-gamma-const-3",(567869183),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random","clojure.test.check.random",(2043592849),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Purely functional and splittable pseudo-random number generators."], null)),new cljs.core.Symbol(null,"mix-gamma-const-3","mix-gamma-const-3",(-831189710),null),"clojure/test/check/random.cljs",(33),(1),(73),(73),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.test.check.random.mix_gamma_const_3)?clojure.test.check.random.mix_gamma_const_3.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.random.mix_gamma = (function clojure$test$check$random$mix_gamma(n){
var z = clojure.test.check.random.longs.bit_or.call(null,clojure.test.check.random.bxoubsr.call(null,clojure.test.check.random.longs._STAR_.call(null,clojure.test.check.random.bxoubsr.call(null,clojure.test.check.random.longs._STAR_.call(null,clojure.test.check.random.bxoubsr.call(null,n,(33)),clojure.test.check.random.mix_gamma_const_1),(33)),clojure.test.check.random.mix_gamma_const_2),(33)),clojure.test.check.random.longs.ONE);
var z__$1 = (function (){var G__28 = z;
var G__28__$1 = ((((24) > clojure.test.check.random.longs.bit_count.call(null,clojure.test.check.random.bxoubsr.call(null,z,(1)))))?clojure.test.check.random.longs.bit_xor.call(null,G__28,clojure.test.check.random.mix_gamma_const_3):G__28);
return G__28__$1;
})();
return z__$1;
}); return (
new cljs.core.Var(function(){return clojure.test.check.random.mix_gamma;},new cljs.core.Symbol("clojure.test.check.random","mix-gamma","clojure.test.check.random/mix-gamma",(-1116283235),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random","clojure.test.check.random",(2043592849),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Purely functional and splittable pseudo-random number generators."], null)),new cljs.core.Symbol(null,"mix-gamma","mix-gamma",(1762740944),null),"clojure/test/check/random.cljs",(26),(1),(75),(75),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),null,(cljs.core.truth_(clojure.test.check.random.mix_gamma)?clojure.test.check.random.mix_gamma.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {clojure.test.check.random.IRandom}
*/
clojure.test.check.random.JavaUtilSplittableRandom = (function (gamma,state){
this.gamma = gamma;
this.state = state;
})
clojure.test.check.random.JavaUtilSplittableRandom.prototype.clojure$test$check$random$IRandom$ = cljs.core.PROTOCOL_SENTINEL;

clojure.test.check.random.JavaUtilSplittableRandom.prototype.clojure$test$check$random$IRandom$rand_long$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return clojure.test.check.random.mix_64.call(null,clojure.test.check.random.longs._PLUS_.call(null,self__.state,self__.gamma));
});

clojure.test.check.random.JavaUtilSplittableRandom.prototype.clojure$test$check$random$IRandom$rand_double$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return clojure.test.check.random.doubles.rand_long__GT_rand_double.call(null,clojure.test.check.random.rand_long.call(null,this$__$1));
});

clojure.test.check.random.JavaUtilSplittableRandom.prototype.clojure$test$check$random$IRandom$split$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var state_SINGLEQUOTE_ = clojure.test.check.random.longs._PLUS_.call(null,self__.gamma,self__.state);
var state_SINGLEQUOTE__SINGLEQUOTE_ = clojure.test.check.random.longs._PLUS_.call(null,self__.gamma,state_SINGLEQUOTE_);
var gamma_SINGLEQUOTE_ = clojure.test.check.random.mix_gamma.call(null,state_SINGLEQUOTE__SINGLEQUOTE_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new clojure.test.check.random.JavaUtilSplittableRandom(self__.gamma,state_SINGLEQUOTE__SINGLEQUOTE_)),(new clojure.test.check.random.JavaUtilSplittableRandom(gamma_SINGLEQUOTE_,clojure.test.check.random.mix_64.call(null,state_SINGLEQUOTE_)))], null);
});

clojure.test.check.random.JavaUtilSplittableRandom.prototype.clojure$test$check$random$IRandom$split_n$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
var G__29 = n;
switch (G__29) {
case (0):
return cljs.core.PersistentVector.EMPTY;

break;
case (1):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null);

break;
default:
var n_dec = (n - (1));
var state__$1 = self__.state;
var ret = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core._EQ_.call(null,n_dec,cljs.core.count.call(null,ret))){
return cljs.core.persistent_BANG_.call(null,cljs.core.conj_BANG_.call(null,ret,(new clojure.test.check.random.JavaUtilSplittableRandom(self__.gamma,state__$1))));
} else {
var state_SINGLEQUOTE_ = clojure.test.check.random.longs._PLUS_.call(null,self__.gamma,state__$1);
var state_SINGLEQUOTE__SINGLEQUOTE_ = clojure.test.check.random.longs._PLUS_.call(null,self__.gamma,state_SINGLEQUOTE_);
var gamma_SINGLEQUOTE_ = clojure.test.check.random.mix_gamma.call(null,state_SINGLEQUOTE__SINGLEQUOTE_);
var new_rng = (new clojure.test.check.random.JavaUtilSplittableRandom(gamma_SINGLEQUOTE_,clojure.test.check.random.mix_64.call(null,state_SINGLEQUOTE_)));
var G__31 = state_SINGLEQUOTE__SINGLEQUOTE_;
var G__32 = cljs.core.conj_BANG_.call(null,ret,new_rng);
state__$1 = G__31;
ret = G__32;
continue;
}
break;
}

}
});

clojure.test.check.random.JavaUtilSplittableRandom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gamma","gamma",(-770466082),null),new cljs.core.Symbol(null,"state","state",(-348086572),null)], null);
});

clojure.test.check.random.JavaUtilSplittableRandom.cljs$lang$type = true;

clojure.test.check.random.JavaUtilSplittableRandom.cljs$lang$ctorStr = "clojure.test.check.random/JavaUtilSplittableRandom";

clojure.test.check.random.JavaUtilSplittableRandom.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"clojure.test.check.random/JavaUtilSplittableRandom");
});

(function (){
clojure.test.check.random.__GT_JavaUtilSplittableRandom = (function clojure$test$check$random$__GT_JavaUtilSplittableRandom(gamma,state){
return (new clojure.test.check.random.JavaUtilSplittableRandom(gamma,state));
}); return (
new cljs.core.Var(function(){return clojure.test.check.random.__GT_JavaUtilSplittableRandom;},new cljs.core.Symbol("clojure.test.check.random","->JavaUtilSplittableRandom","clojure.test.check.random/->JavaUtilSplittableRandom",(-1044382725),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("clojure.test.check.random","IRandom","clojure.test.check.random/IRandom",(-1117896154),null),null], null), null),cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random","clojure.test.check.random",(2043592849),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Purely functional and splittable pseudo-random number generators."], null)),new cljs.core.Symbol(null,"->JavaUtilSplittableRandom","->JavaUtilSplittableRandom",(-1659678786),null),"clojure/test/check/random.cljs",(34),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(91),(91),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gamma","gamma",(-770466082),null),new cljs.core.Symbol(null,"state","state",(-348086572),null)], null)),null,null,(cljs.core.truth_(clojure.test.check.random.__GT_JavaUtilSplittableRandom)?clojure.test.check.random.__GT_JavaUtilSplittableRandom.cljs$lang$test:null)])));})()
;

(function (){
clojure.test.check.random.golden_gamma = clojure.test.check.random.hex_long.call(null,"9e3779b97f4a7c15"); return (
new cljs.core.Var(function(){return clojure.test.check.random.golden_gamma;},new cljs.core.Symbol("clojure.test.check.random","golden-gamma","clojure.test.check.random/golden-gamma",(-1740746823),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random","clojure.test.check.random",(2043592849),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Purely functional and splittable pseudo-random number generators."], null)),new cljs.core.Symbol(null,"golden-gamma","golden-gamma",(1272101830),null),"clojure/test/check/random.cljs",(28),(1),(120),(120),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.test.check.random.golden_gamma)?clojure.test.check.random.golden_gamma.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.random.make_java_util_splittable_random = (function clojure$test$check$random$make_java_util_splittable_random(seed){
return (new clojure.test.check.random.JavaUtilSplittableRandom(clojure.test.check.random.golden_gamma,(function (){var or__20817__auto__ = clojure.test.check.random.longs.__GT_long.call(null,seed);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
throw cljs.core.ex_info.call(null,"Bad random seed!",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"seed","seed",(68613327)),seed], null));
}
})()));
}); return (
new cljs.core.Var(function(){return clojure.test.check.random.make_java_util_splittable_random;},new cljs.core.Symbol("clojure.test.check.random","make-java-util-splittable-random","clojure.test.check.random/make-java-util-splittable-random",(-984656447),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random","clojure.test.check.random",(2043592849),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Purely functional and splittable pseudo-random number generators."], null)),new cljs.core.Symbol(null,"make-java-util-splittable-random","make-java-util-splittable-random",(686088580),null),"clojure/test/check/random.cljs",(39),(1),(123),(123),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seed","seed",(1709144854),null)], null)),null,(cljs.core.truth_(clojure.test.check.random.make_java_util_splittable_random)?clojure.test.check.random.make_java_util_splittable_random.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.random.next_rng = (function (){var a = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",(-1988618099)),clojure.test.check.random.make_java_util_splittable_random.call(null,(new Date()).valueOf())], null));
return ((function (a){
return (function (){
return new cljs.core.Keyword(null,"returned","returned",(-2020439163)).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,a,((function (a){
return (function (p__33){
var map__34 = p__33;
var map__34__$1 = ((((!((map__34 == null)))?((((map__34.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34):map__34);
var state = cljs.core.get.call(null,map__34__$1,new cljs.core.Keyword(null,"state","state",(-1988618099)));
var vec__36 = clojure.test.check.random.split.call(null,state);
var r1 = cljs.core.nth.call(null,vec__36,(0),null);
var r2 = cljs.core.nth.call(null,vec__36,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"returned","returned",(-2020439163)),r2,new cljs.core.Keyword(null,"state","state",(-1988618099)),r1], null);
});})(a))
));
});
;})(a))
})(); return (
new cljs.core.Var(function(){return clojure.test.check.random.next_rng;},new cljs.core.Symbol("clojure.test.check.random","next-rng","clojure.test.check.random/next-rng",(-1645286125),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random","clojure.test.check.random",(2043592849),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Purely functional and splittable pseudo-random number generators."], null)),new cljs.core.Symbol(null,"next-rng","next-rng",(-376800938),null),"clojure/test/check/random.cljs",(24),(1),(130),(130),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.test.check.random.next_rng)?clojure.test.check.random.next_rng.cljs$lang$test:null)])));})()
;
/**
 * Given an optional integer (or goog.math.Long) seed, returns an
 *   implementation of the IRandom protocol.
 */
(function (){
clojure.test.check.random.make_random = (function clojure$test$check$random$make_random(var_args){
var args39 = [];
var len__23656__auto___42 = arguments.length;
var i__23657__auto___43 = (0);
while(true){
if((i__23657__auto___43 < len__23656__auto___42)){
args39.push((arguments[i__23657__auto___43]));

var G__44 = (i__23657__auto___43 + (1));
i__23657__auto___43 = G__44;
continue;
} else {
}
break;
}

var G__41 = args39.length;
switch (G__41) {
case (0):
return clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return clojure.test.check.random.make_random;},new cljs.core.Symbol("clojure.test.check.random","make-random","clojure.test.check.random/make-random",(-1725795871),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random","clojure.test.check.random",(2043592849),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Purely functional and splittable pseudo-random number generators."], null)),new cljs.core.Symbol(null,"make-random","make-random",(1838087598),null),"clojure/test/check/random.cljs",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seed","seed",(1709144854),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seed","seed",(1709144854),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(140),(140),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seed","seed",(1709144854),null)], null)),"Given an optional integer (or goog.math.Long) seed, returns an\n  implementation of the IRandom protocol.",(cljs.core.truth_(clojure.test.check.random.make_random)?clojure.test.check.random.make_random.cljs$lang$test:null)])));})()
;

clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure.test.check.random.next_rng.call(null);
});

clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1 = (function (seed){
return clojure.test.check.random.make_java_util_splittable_random.call(null,seed);
});

clojure.test.check.random.make_random.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return clojure.test.check.random.make_random;},new cljs.core.Symbol("clojure.test.check.random","make-random","clojure.test.check.random/make-random",(-1725795871),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.test.check.random","clojure.test.check.random",(2043592849),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Gary Fredericks",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Purely functional and splittable pseudo-random number generators."], null)),new cljs.core.Symbol(null,"make-random","make-random",(1838087598),null),"clojure/test/check/random.cljs",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seed","seed",(1709144854),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seed","seed",(1709144854),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(140),(140),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seed","seed",(1709144854),null)], null)),"Given an optional integer (or goog.math.Long) seed, returns an\n  implementation of the IRandom protocol.",(cljs.core.truth_(clojure.test.check.random.make_random)?clojure.test.check.random.make_random.cljs$lang$test:null)]));
