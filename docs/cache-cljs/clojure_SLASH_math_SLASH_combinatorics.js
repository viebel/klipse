goog.provide("clojure.math.combinatorics");
(function (){
clojure.math.combinatorics.format = goog.string.format; return (
new cljs.core.Var(function(){return clojure.math.combinatorics.format;},new cljs.core.Symbol("clojure.math.combinatorics","format","clojure.math.combinatorics/format",(1448748334),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"format","format",(333606761),null),"clojure/math/combinatorics.cljc",(21),(10),(17),(17),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.math.combinatorics.format)?clojure.math.combinatorics.format.cljs$lang$test:null)])));})()
;
/**
 * Annoyingly, the built-in distinct? doesn't handle 0 args, so we need
 * to write our own version that considers the empty-list to be distinct
 */
(function (){
clojure.math.combinatorics.all_different_QMARK_ = (function clojure$math$combinatorics$all_different_QMARK_(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,s);
} else {
return true;
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.all_different_QMARK_;},new cljs.core.Symbol("clojure.math.combinatorics","all-different?","clojure.math.combinatorics/all-different?",(-1296392573),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"all-different?","all-different?",(1326634050),null),"clojure/math/combinatorics.cljc",(22),(1),(87),(87),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),"Annoyingly, the built-in distinct? doesn't handle 0 args, so we need\nto write our own version that considers the empty-list to be distinct",(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_)?clojure.math.combinatorics.all_different_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
clojure.math.combinatorics.index_combinations = (function clojure$math$combinatorics$index_combinations(n,cnt){
return (new cljs.core.LazySeq(null,(function (){
var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__23197__auto__ = (function clojure$math$combinatorics$index_combinations_$_iter__26(s__27){
return (new cljs.core.LazySeq(null,(function (){
var s__27__$1 = s__27;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__27__$1);
if(temp__19834__auto__){
var s__27__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__27__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__29 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__28 = (0);
while(true){
if((i__28 < size__23196__auto__)){
var j = cljs.core._nth.call(null,c__23195__auto__,i__28);
cljs.core.chunk_append.call(null,b__29,((j + cnt) + (- (n + (1)))));

var G__30 = (i__28 + (1));
i__28 = G__30;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29),clojure$math$combinatorics$index_combinations_$_iter__26.call(null,cljs.core.chunk_rest.call(null,s__27__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29),null);
}
} else {
var j = cljs.core.first.call(null,s__27__$2);
return cljs.core.cons.call(null,((j + cnt) + (- (n + (1)))),clojure$math$combinatorics$index_combinations_$_iter__26.call(null,cljs.core.rest.call(null,s__27__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__23197__auto__.call(null,cljs.core.range.call(null,(1),(n + (1))));
})()));
var iter_comb = ((function (c){
return (function clojure$math$combinatorics$index_combinations_$_iter_comb(c__$1,j){
if((j > n)){
return null;
} else {
var c__$2 = cljs.core.assoc.call(null,c__$1,j,(c__$1.call(null,j) - (1)));
if((c__$2.call(null,j) < j)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$2,(j + (1))], null);
} else {
var c__$3 = c__$2;
var j__$1 = j;
while(true){
if(cljs.core._EQ_.call(null,j__$1,(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$3,j__$1], null);
} else {
var G__31 = cljs.core.assoc.call(null,c__$3,(j__$1 - (1)),(c__$3.call(null,j__$1) - (1)));
var G__32 = (j__$1 - (1));
c__$3 = G__31;
j__$1 = G__32;
continue;
}
break;
}
}
}
});})(c))
;
var step = ((function (c,iter_comb){
return (function clojure$math$combinatorics$index_combinations_$_step(c__$1,j){
return cljs.core.cons.call(null,cljs.core.rseq.call(null,cljs.core.subvec.call(null,c__$1,(1),(n + (1)))),(new cljs.core.LazySeq(null,((function (c,iter_comb){
return (function (){
var next_step = iter_comb.call(null,c__$1,j);
if(cljs.core.truth_(next_step)){
return clojure$math$combinatorics$index_combinations_$_step.call(null,next_step.call(null,(0)),next_step.call(null,(1)));
} else {
return null;
}
});})(c,iter_comb))
,null,null)));
});})(c,iter_comb))
;
return step.call(null,c,(1));
}),null,null));
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.index_combinations;},new cljs.core.Symbol("clojure.math.combinatorics","index-combinations","clojure.math.combinatorics/index-combinations",(864097233),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"index-combinations","index-combinations",(-248949488),null),"clojure/math/combinatorics.cljc",(26),(1),(95),(95),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"cnt","cnt",(1924510325),null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.index_combinations)?clojure.math.combinatorics.index_combinations.cljs$lang$test:null)])));})()
;
(function (){
clojure.math.combinatorics.distribute = (function clojure$math$combinatorics$distribute(m,index,total,distribution,already_distributed){
var distribution__$1 = distribution;
var index__$1 = index;
var already_distributed__$1 = already_distributed;
while(true){
if((index__$1 >= cljs.core.count.call(null,m))){
return null;
} else {
var quantity_to_distribute = (total - already_distributed__$1);
var mi = m.call(null,index__$1);
if((quantity_to_distribute <= mi)){
return cljs.core.conj.call(null,distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,quantity_to_distribute,total], null));
} else {
var G__33 = cljs.core.conj.call(null,distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__34 = (index__$1 + (1));
var G__35 = (already_distributed__$1 + mi);
distribution__$1 = G__33;
index__$1 = G__34;
already_distributed__$1 = G__35;
continue;
}
}
break;
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.distribute;},new cljs.core.Symbol("clojure.math.combinatorics","distribute","clojure.math.combinatorics/distribute",(2081223849),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"distribute","distribute",(988099190),null),"clojure/math/combinatorics.cljc",(18),(1),(115),(115),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"index","index",(108845612),null),new cljs.core.Symbol(null,"total","total",(-737625351),null),new cljs.core.Symbol(null,"distribution","distribution",(1355976158),null),new cljs.core.Symbol(null,"already-distributed","already-distributed",(262657386),null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.distribute)?clojure.math.combinatorics.distribute.cljs$lang$test:null)])));})()
;
(function (){
clojure.math.combinatorics.next_distribution = (function clojure$math$combinatorics$next_distribution(m,total,distribution){
var vec__42 = cljs.core.peek.call(null,distribution);
var index = cljs.core.nth.call(null,vec__42,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__42,(1),null);
var this_and_to_the_left = cljs.core.nth.call(null,vec__42,(2),null);
if((index < (cljs.core.count.call(null,m) - (1)))){
if(cljs.core._EQ_.call(null,this_bucket,(1))){
return cljs.core.conj.call(null,cljs.core.pop.call(null,distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null));
} else {
return cljs.core.conj.call(null,cljs.core.pop.call(null,distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(this_bucket - (1)),(this_and_to_the_left - (1))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null));
}
} else {
if(cljs.core._EQ_.call(null,this_bucket,total)){
return null;
} else {
var distribution__$1 = cljs.core.pop.call(null,distribution);
while(true){
var vec__45 = cljs.core.peek.call(null,distribution__$1);
var index__$1 = cljs.core.nth.call(null,vec__45,(0),null);
var this_bucket__$1 = cljs.core.nth.call(null,vec__45,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.call(null,vec__45,(2),null);
var distribution__$2 = ((cljs.core._EQ_.call(null,this_bucket__$1,(1)))?cljs.core.pop.call(null,distribution__$1):cljs.core.conj.call(null,cljs.core.pop.call(null,distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.subvec.call(null,m,(index__$1 + (1)))))){
return clojure.math.combinatorics.distribute.call(null,m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq.call(null,distribution__$2)){
var G__48 = distribution__$2;
distribution__$1 = G__48;
continue;
} else {
return null;

}
}
break;
}

}
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.next_distribution;},new cljs.core.Symbol("clojure.math.combinatorics","next-distribution","clojure.math.combinatorics/next-distribution",(-1958598997),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"next-distribution","next-distribution",(1308483700),null),"clojure/math/combinatorics.cljc",(25),(1),(129),(129),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"total","total",(-737625351),null),new cljs.core.Symbol(null,"distribution","distribution",(1355976158),null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.next_distribution)?clojure.math.combinatorics.next_distribution.cljs$lang$test:null)])));})()
;
(function (){
clojure.math.combinatorics.bounded_distributions = (function clojure$math$combinatorics$bounded_distributions(m,t){
var step = (function clojure$math$combinatorics$bounded_distributions_$_step(distribution){
return cljs.core.cons.call(null,distribution,(new cljs.core.LazySeq(null,(function (){
var temp__19834__auto__ = clojure.math.combinatorics.next_distribution.call(null,m,t,distribution);
if(cljs.core.truth_(temp__19834__auto__)){
var next_step = temp__19834__auto__;
return clojure$math$combinatorics$bounded_distributions_$_step.call(null,next_step);
} else {
return null;
}
}),null,null)));
});
return step.call(null,clojure.math.combinatorics.distribute.call(null,m,(0),t,cljs.core.PersistentVector.EMPTY,(0)));
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.bounded_distributions;},new cljs.core.Symbol("clojure.math.combinatorics","bounded-distributions","clojure.math.combinatorics/bounded-distributions",(1104991795),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"bounded-distributions","bounded-distributions",(57973884),null),"clojure/math/combinatorics.cljc",(29),(1),(156),(156),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"t","t",(242699008),null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.bounded_distributions)?clojure.math.combinatorics.bounded_distributions.cljs$lang$test:null)])));})()
;
/**
 * Handles the case when you want the combinations of a list with duplicate items.
 */
(function (){
clojure.math.combinatorics.multi_comb = (function clojure$math$combinatorics$multi_comb(l,t){
var f = cljs.core.frequencies.call(null,l);
var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,l));
var domain = cljs.core.range.call(null,cljs.core.count.call(null,v));
var m = cljs.core.vec.call(null,(function (){var iter__23197__auto__ = ((function (f,v,domain){
return (function clojure$math$combinatorics$multi_comb_$_iter__121(s__122){
return (new cljs.core.LazySeq(null,((function (f,v,domain){
return (function (){
var s__122__$1 = s__122;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__122__$1);
if(temp__19834__auto__){
var s__122__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__122__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__122__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__124 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__123 = (0);
while(true){
if((i__123 < size__23196__auto__)){
var i = cljs.core._nth.call(null,c__23195__auto__,i__123);
cljs.core.chunk_append.call(null,b__124,f.call(null,v.call(null,i)));

var G__193 = (i__123 + (1));
i__123 = G__193;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__124),clojure$math$combinatorics$multi_comb_$_iter__121.call(null,cljs.core.chunk_rest.call(null,s__122__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__124),null);
}
} else {
var i = cljs.core.first.call(null,s__122__$2);
return cljs.core.cons.call(null,f.call(null,v.call(null,i)),clojure$math$combinatorics$multi_comb_$_iter__121.call(null,cljs.core.rest.call(null,s__122__$2)));
}
} else {
return null;
}
break;
}
});})(f,v,domain))
,null,null));
});})(f,v,domain))
;
return iter__23197__auto__.call(null,domain);
})());
var qs = clojure.math.combinatorics.bounded_distributions.call(null,m,t);
var iter__23197__auto__ = ((function (f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__125(s__126){
return (new cljs.core.LazySeq(null,((function (f,v,domain,m,qs){
return (function (){
var s__126__$1 = s__126;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__126__$1);
if(temp__19834__auto__){
var s__126__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__126__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__126__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__128 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__127 = (0);
while(true){
if((i__127 < size__23196__auto__)){
var q = cljs.core._nth.call(null,c__23195__auto__,i__127);
cljs.core.chunk_append.call(null,b__128,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__23197__auto__ = ((function (i__127,q,c__23195__auto__,size__23196__auto__,b__128,s__126__$2,temp__19834__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__125_$_iter__161(s__162){
return (new cljs.core.LazySeq(null,((function (i__127,q,c__23195__auto__,size__23196__auto__,b__128,s__126__$2,temp__19834__auto__,f,v,domain,m,qs){
return (function (){
var s__162__$1 = s__162;
while(true){
var temp__19834__auto____$1 = cljs.core.seq.call(null,s__162__$1);
if(temp__19834__auto____$1){
var s__162__$2 = temp__19834__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__162__$2)){
var c__23195__auto____$1 = cljs.core.chunk_first.call(null,s__162__$2);
var size__23196__auto____$1 = cljs.core.count.call(null,c__23195__auto____$1);
var b__164 = cljs.core.chunk_buffer.call(null,size__23196__auto____$1);
if((function (){var i__163 = (0);
while(true){
if((i__163 < size__23196__auto____$1)){
var vec__171 = cljs.core._nth.call(null,c__23195__auto____$1,i__163);
var index = cljs.core.nth.call(null,vec__171,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__171,(1),null);
var _ = cljs.core.nth.call(null,vec__171,(2),null);
cljs.core.chunk_append.call(null,b__164,cljs.core.repeat.call(null,this_bucket,v.call(null,index)));

var G__194 = (i__163 + (1));
i__163 = G__194;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__164),clojure$math$combinatorics$multi_comb_$_iter__125_$_iter__161.call(null,cljs.core.chunk_rest.call(null,s__162__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__164),null);
}
} else {
var vec__174 = cljs.core.first.call(null,s__162__$2);
var index = cljs.core.nth.call(null,vec__174,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__174,(1),null);
var _ = cljs.core.nth.call(null,vec__174,(2),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,this_bucket,v.call(null,index)),clojure$math$combinatorics$multi_comb_$_iter__125_$_iter__161.call(null,cljs.core.rest.call(null,s__162__$2)));
}
} else {
return null;
}
break;
}
});})(i__127,q,c__23195__auto__,size__23196__auto__,b__128,s__126__$2,temp__19834__auto__,f,v,domain,m,qs))
,null,null));
});})(i__127,q,c__23195__auto__,size__23196__auto__,b__128,s__126__$2,temp__19834__auto__,f,v,domain,m,qs))
;
return iter__23197__auto__.call(null,q);
})()));

var G__195 = (i__127 + (1));
i__127 = G__195;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__128),clojure$math$combinatorics$multi_comb_$_iter__125.call(null,cljs.core.chunk_rest.call(null,s__126__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__128),null);
}
} else {
var q = cljs.core.first.call(null,s__126__$2);
return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__23197__auto__ = ((function (q,s__126__$2,temp__19834__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__125_$_iter__177(s__178){
return (new cljs.core.LazySeq(null,((function (q,s__126__$2,temp__19834__auto__,f,v,domain,m,qs){
return (function (){
var s__178__$1 = s__178;
while(true){
var temp__19834__auto____$1 = cljs.core.seq.call(null,s__178__$1);
if(temp__19834__auto____$1){
var s__178__$2 = temp__19834__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__178__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__178__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__180 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__179 = (0);
while(true){
if((i__179 < size__23196__auto__)){
var vec__187 = cljs.core._nth.call(null,c__23195__auto__,i__179);
var index = cljs.core.nth.call(null,vec__187,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__187,(1),null);
var _ = cljs.core.nth.call(null,vec__187,(2),null);
cljs.core.chunk_append.call(null,b__180,cljs.core.repeat.call(null,this_bucket,v.call(null,index)));

var G__196 = (i__179 + (1));
i__179 = G__196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__180),clojure$math$combinatorics$multi_comb_$_iter__125_$_iter__177.call(null,cljs.core.chunk_rest.call(null,s__178__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__180),null);
}
} else {
var vec__190 = cljs.core.first.call(null,s__178__$2);
var index = cljs.core.nth.call(null,vec__190,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__190,(1),null);
var _ = cljs.core.nth.call(null,vec__190,(2),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,this_bucket,v.call(null,index)),clojure$math$combinatorics$multi_comb_$_iter__125_$_iter__177.call(null,cljs.core.rest.call(null,s__178__$2)));
}
} else {
return null;
}
break;
}
});})(q,s__126__$2,temp__19834__auto__,f,v,domain,m,qs))
,null,null));
});})(q,s__126__$2,temp__19834__auto__,f,v,domain,m,qs))
;
return iter__23197__auto__.call(null,q);
})()),clojure$math$combinatorics$multi_comb_$_iter__125.call(null,cljs.core.rest.call(null,s__126__$2)));
}
} else {
return null;
}
break;
}
});})(f,v,domain,m,qs))
,null,null));
});})(f,v,domain,m,qs))
;
return iter__23197__auto__.call(null,qs);
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.multi_comb;},new cljs.core.Symbol("clojure.math.combinatorics","multi-comb","clojure.math.combinatorics/multi-comb",(-838576294),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"multi-comb","multi-comb",(-1947363045),null),"clojure/math/combinatorics.cljc",(18),(1),(167),(167),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"l","l",(-1258542346),null),new cljs.core.Symbol(null,"t","t",(242699008),null)], null)),"Handles the case when you want the combinations of a list with duplicate items.",(cljs.core.truth_(clojure.math.combinatorics.multi_comb)?clojure.math.combinatorics.multi_comb.cljs$lang$test:null)])));})()
;
/**
 * All the unique ways of taking t different elements from items
 */
(function (){
clojure.math.combinatorics.combinations = (function clojure$math$combinatorics$combinations(items,t){
var v_items = cljs.core.vec.call(null,cljs.core.reverse.call(null,items));
if((t === (0))){
var x__23399__auto__ = cljs.core.List.EMPTY;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
} else {
var cnt = cljs.core.count.call(null,items);
if((t > cnt)){
return null;
} else {
if(cljs.core._EQ_.call(null,t,(1))){
var iter__23197__auto__ = ((function (cnt,v_items){
return (function clojure$math$combinatorics$combinations_$_iter__201(s__202){
return (new cljs.core.LazySeq(null,((function (cnt,v_items){
return (function (){
var s__202__$1 = s__202;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__202__$1);
if(temp__19834__auto__){
var s__202__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__202__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__202__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__204 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__203 = (0);
while(true){
if((i__203 < size__23196__auto__)){
var item = cljs.core._nth.call(null,c__23195__auto__,i__203);
cljs.core.chunk_append.call(null,b__204,(function (){var x__23399__auto__ = item;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})());

var G__205 = (i__203 + (1));
i__203 = G__205;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__204),clojure$math$combinatorics$combinations_$_iter__201.call(null,cljs.core.chunk_rest.call(null,s__202__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__204),null);
}
} else {
var item = cljs.core.first.call(null,s__202__$2);
return cljs.core.cons.call(null,(function (){var x__23399__auto__ = item;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),clojure$math$combinatorics$combinations_$_iter__201.call(null,cljs.core.rest.call(null,s__202__$2)));
}
} else {
return null;
}
break;
}
});})(cnt,v_items))
,null,null));
});})(cnt,v_items))
;
return iter__23197__auto__.call(null,cljs.core.distinct.call(null,items));
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
if(cljs.core._EQ_.call(null,t,cnt)){
var x__23399__auto__ = cljs.core.seq.call(null,items);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
} else {
return cljs.core.map.call(null,((function (cnt,v_items){
return (function (p1__1_SHARP_){
return cljs.core.map.call(null,v_items,p1__1_SHARP_);
});})(cnt,v_items))
,clojure.math.combinatorics.index_combinations.call(null,t,cnt));
}
} else {
return clojure.math.combinatorics.multi_comb.call(null,items,t);

}
}
}
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.combinations;},new cljs.core.Symbol("clojure.math.combinatorics","combinations","clojure.math.combinatorics/combinations",(-1144146223),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"combinations","combinations",(2103807122),null),"clojure/math/combinatorics.cljc",(19),(1),(180),(180),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",(-1622480831),null),new cljs.core.Symbol(null,"t","t",(242699008),null)], null)),"All the unique ways of taking t different elements from items",(cljs.core.truth_(clojure.math.combinatorics.combinations)?clojure.math.combinatorics.combinations.cljs$lang$test:null)])));})()
;
/**
 * Given a sequence that may have chunks, return a sequence that is 1-at-a-time
 * lazy with no chunks. Chunks are good for efficiency when the data items are
 * small, but when being processed via map, for example, a reference is kept to
 * every function result in the chunk until the entire chunk has been processed,
 * which increases the amount of memory in use that cannot be garbage
 * collected.
 */
(function (){
clojure.math.combinatorics.unchunk = (function clojure$math$combinatorics$unchunk(s){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),clojure.math.combinatorics.unchunk.call(null,cljs.core.rest.call(null,s)));
} else {
return null;
}
}),null,null));
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.unchunk;},new cljs.core.Symbol("clojure.math.combinatorics","unchunk","clojure.math.combinatorics/unchunk",(1348038256),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"unchunk","unchunk",(-1816062785),null),"clojure/math/combinatorics.cljc",(15),(1),(193),(193),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),"Given a sequence that may have chunks, return a sequence that is 1-at-a-time\nlazy with no chunks. Chunks are good for efficiency when the data items are\nsmall, but when being processed via map, for example, a reference is kept to\nevery function result in the chunk until the entire chunk has been processed,\nwhich increases the amount of memory in use that cannot be garbage\ncollected.",(cljs.core.truth_(clojure.math.combinatorics.unchunk)?clojure.math.combinatorics.unchunk.cljs$lang$test:null)])));})()
;
/**
 * All the subsets of items
 */
(function (){
clojure.math.combinatorics.subsets = (function clojure$math$combinatorics$subsets(items){
return cljs.core.mapcat.call(null,(function (n){
return clojure.math.combinatorics.combinations.call(null,items,n);
}),clojure.math.combinatorics.unchunk.call(null,cljs.core.range.call(null,(cljs.core.count.call(null,items) + (1)))));
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.subsets;},new cljs.core.Symbol("clojure.math.combinatorics","subsets","clojure.math.combinatorics/subsets",(1209719261),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"subsets","subsets",(-1921850470),null),"clojure/math/combinatorics.cljc",(14),(1),(205),(205),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",(-1622480831),null)], null)),"All the subsets of items",(cljs.core.truth_(clojure.math.combinatorics.subsets)?clojure.math.combinatorics.subsets.cljs$lang$test:null)])));})()
;
/**
 * All the ways to take one item from each sequence
 */
(function (){
clojure.math.combinatorics.cartesian_product = (function clojure$math$combinatorics$cartesian_product(var_args){
var args__23658__auto__ = [];
var len__23656__auto___207 = arguments.length;
var i__23657__auto___208 = (0);
while(true){
if((i__23657__auto___208 < len__23656__auto___207)){
args__23658__auto__.push((arguments[i__23657__auto___208]));

var G__209 = (i__23657__auto___208 + (1));
i__23657__auto___208 = G__209;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((0) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((0)),(0),null)):null);
return clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.cartesian_product;},new cljs.core.Symbol("clojure.math.combinatorics","cartesian-product","clojure.math.combinatorics/cartesian-product",(264376590),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"cartesian-product","cartesian-product",(1232721737),null),"clojure/math/combinatorics.cljc",(24),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"seqs","seqs",(-287103031),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"seqs","seqs",(-287103031),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(211),(211),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"seqs","seqs",(-287103031),null)], null)),"All the ways to take one item from each sequence",(cljs.core.truth_(clojure.math.combinatorics.cartesian_product)?clojure.math.combinatorics.cartesian_product.cljs$lang$test:null)])));})()
;

clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = ((function (v_original_seqs){
return (function clojure$math$combinatorics$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
var temp__19520__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__19520__auto__){
var rst = temp__19520__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__210 = (i - (1));
var G__211 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__210;
v_seqs__$2 = G__211;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return clojure$math$combinatorics$step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step.call(null,v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

clojure.math.combinatorics.cartesian_product.cljs$lang$maxFixedArity = (0);

clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq206){
return clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq206));
});

new cljs.core.Var(function(){return clojure.math.combinatorics.cartesian_product;},new cljs.core.Symbol("clojure.math.combinatorics","cartesian-product","clojure.math.combinatorics/cartesian-product",(264376590),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"cartesian-product","cartesian-product",(1232721737),null),"clojure/math/combinatorics.cljc",(24),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"seqs","seqs",(-287103031),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"seqs","seqs",(-287103031),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(211),(211),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"seqs","seqs",(-287103031),null)], null)),"All the ways to take one item from each sequence",(cljs.core.truth_(clojure.math.combinatorics.cartesian_product)?clojure.math.combinatorics.cartesian_product.cljs$lang$test:null)]));
/**
 * All the ways of taking n (possibly the same) elements from the sequence of items
 */
(function (){
clojure.math.combinatorics.selections = (function clojure$math$combinatorics$selections(items,n){
return cljs.core.apply.call(null,clojure.math.combinatorics.cartesian_product,cljs.core.take.call(null,n,cljs.core.repeat.call(null,items)));
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.selections;},new cljs.core.Symbol("clojure.math.combinatorics","selections","clojure.math.combinatorics/selections",(1745449741),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"selections","selections",(362921294),null),"clojure/math/combinatorics.cljc",(17),(1),(231),(231),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",(-1622480831),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"All the ways of taking n (possibly the same) elements from the sequence of items",(cljs.core.truth_(clojure.math.combinatorics.selections)?clojure.math.combinatorics.selections.cljs$lang$test:null)])));})()
;
(function (){
clojure.math.combinatorics.iter_perm = (function clojure$math$combinatorics$iter_perm(v){
var len = cljs.core.count.call(null,v);
var j = (function (){var i = (len - (2));
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
if((v.call(null,i) < v.call(null,(i + (1))))){
return i;
} else {
var G__212 = (i - (1));
i = G__212;
continue;

}
}
break;
}
})();
if(cljs.core.truth_(j)){
var vj = v.call(null,j);
var l = (function (){var i = (len - (1));
while(true){
if((vj < v.call(null,i))){
return i;
} else {
var G__213 = (i - (1));
i = G__213;
continue;
}
break;
}
})();
var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);
var k = (j + (1));
var l__$1 = (len - (1));
while(true){
if((k < l__$1)){
var G__214 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__215 = (k + (1));
var G__216 = (l__$1 - (1));
v__$1 = G__214;
k = G__215;
l__$1 = G__216;
continue;
} else {
return v__$1;
}
break;
}
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.iter_perm;},new cljs.core.Symbol("clojure.math.combinatorics","iter-perm","clojure.math.combinatorics/iter-perm",(-1823554381),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"iter-perm","iter-perm",(-727285006),null),"clojure/math/combinatorics.cljc",(17),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.iter_perm)?clojure.math.combinatorics.iter_perm.cljs$lang$test:null)])));})()
;
(function (){
clojure.math.combinatorics.vec_lex_permutations = (function clojure$math$combinatorics$vec_lex_permutations(v){
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,v,(new cljs.core.LazySeq(null,(function (){
return clojure.math.combinatorics.vec_lex_permutations.call(null,clojure.math.combinatorics.iter_perm.call(null,v));
}),null,null)));
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.vec_lex_permutations;},new cljs.core.Symbol("clojure.math.combinatorics","vec-lex-permutations","clojure.math.combinatorics/vec-lex-permutations",(-53027977),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"vec-lex-permutations","vec-lex-permutations",(860788144),null),"clojure/math/combinatorics.cljc",(28),(1),(252),(252),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.vec_lex_permutations)?clojure.math.combinatorics.vec_lex_permutations.cljs$lang$test:null)])));})()
;
/**
 * DEPRECATED as a public function.
 * 
 * In prior versions of the combinatorics library, there were two similar functions: permutations and lex-permutations.  It was a source of confusion to know which to call.  Now, you can always call permutations.  When appropriate (i.e., when you pass in a sorted sequence of numbers), permutations will automatically call lex-permutations as a speed optimization.
 */
(function (){
clojure.math.combinatorics.lex_permutations = (function clojure$math$combinatorics$lex_permutations(c){
return (new cljs.core.LazySeq(null,(function (){
var vec_sorted = cljs.core.vec.call(null,cljs.core.sort.call(null,c));
if((cljs.core.count.call(null,vec_sorted) === (0))){
var x__23399__auto__ = cljs.core.PersistentVector.EMPTY;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
} else {
return clojure.math.combinatorics.vec_lex_permutations.call(null,vec_sorted);
}
}),null,null));
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.lex_permutations;},new cljs.core.Symbol("clojure.math.combinatorics","lex-permutations","clojure.math.combinatorics/lex-permutations",(-1771097716),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"deprecated","deprecated",(1498275348)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"lex-permutations","lex-permutations",(-872944689),null),"clojure/math/combinatorics.cljc",(24),(1),(255),"1.3",(255),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),"DEPRECATED as a public function.\n\nIn prior versions of the combinatorics library, there were two similar functions: permutations and lex-permutations.  It was a source of confusion to know which to call.  Now, you can always call permutations.  When appropriate (i.e., when you pass in a sorted sequence of numbers), permutations will automatically call lex-permutations as a speed optimization.",(cljs.core.truth_(clojure.math.combinatorics.lex_permutations)?clojure.math.combinatorics.lex_permutations.cljs$lang$test:null)])));})()
;
/**
 * Returns true iff s is a sequence of numbers in non-decreasing order
 */
(function (){
clojure.math.combinatorics.sorted_numbers_QMARK_ = (function clojure$math$combinatorics$sorted_numbers_QMARK_(s){
var and__20770__auto__ = cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,s);
if(and__20770__auto__){
var or__20817__auto__ = cljs.core.empty_QMARK_.call(null,s);
if(or__20817__auto__){
return or__20817__auto__;
} else {
return cljs.core.apply.call(null,cljs.core._LT__EQ_,s);
}
} else {
return and__20770__auto__;
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.sorted_numbers_QMARK_;},new cljs.core.Symbol("clojure.math.combinatorics","sorted-numbers?","clojure.math.combinatorics/sorted-numbers?",(-724894989),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"sorted-numbers?","sorted-numbers?",(-1842171728),null),"clojure/math/combinatorics.cljc",(23),(1),(267),(267),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),"Returns true iff s is a sequence of numbers in non-decreasing order",(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_)?clojure.math.combinatorics.sorted_numbers_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Handles the case when you want the permutations of a list with duplicate items.
 */
(function (){
clojure.math.combinatorics.multi_perm = (function clojure$math$combinatorics$multi_perm(l){
var f = cljs.core.frequencies.call(null,l);
var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,l));
var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__23197__auto__ = ((function (f,v){
return (function clojure$math$combinatorics$multi_perm_$_iter__221(s__222){
return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){
var s__222__$1 = s__222;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__222__$1);
if(temp__19834__auto__){
var s__222__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__222__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__222__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__224 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__223 = (0);
while(true){
if((i__223 < size__23196__auto__)){
var i = cljs.core._nth.call(null,c__23195__auto__,i__223);
cljs.core.chunk_append.call(null,b__224,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__225 = (i__223 + (1));
i__223 = G__225;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__224),clojure$math$combinatorics$multi_perm_$_iter__221.call(null,cljs.core.chunk_rest.call(null,s__222__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__224),null);
}
} else {
var i = cljs.core.first.call(null,s__222__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$multi_perm_$_iter__221.call(null,cljs.core.rest.call(null,s__222__$2)));
}
} else {
return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;
return iter__23197__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),clojure.math.combinatorics.lex_permutations.call(null,indices));
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.multi_perm;},new cljs.core.Symbol("clojure.math.combinatorics","multi-perm","clojure.math.combinatorics/multi-perm",(1344651960),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"multi-perm","multi-perm",(314719609),null),"clojure/math/combinatorics.cljc",(18),(1),(273),(273),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"l","l",(-1258542346),null)], null)),"Handles the case when you want the permutations of a list with duplicate items.",(cljs.core.truth_(clojure.math.combinatorics.multi_perm)?clojure.math.combinatorics.multi_perm.cljs$lang$test:null)])));})()
;
/**
 * All the distinct permutations of items, lexicographic by index 
 * (special handling for duplicate items).
 */
(function (){
clojure.math.combinatorics.permutations = (function clojure$math$combinatorics$permutations(items){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_.call(null,items))){
return clojure.math.combinatorics.lex_permutations.call(null,items);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
var v = cljs.core.vec.call(null,items);
return cljs.core.map.call(null,((function (v){
return (function (p1__2_SHARP_){
return cljs.core.map.call(null,v,p1__2_SHARP_);
});})(v))
,clojure.math.combinatorics.lex_permutations.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v))));
} else {
return clojure.math.combinatorics.multi_perm.call(null,items);

}
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.permutations;},new cljs.core.Symbol("clojure.math.combinatorics","permutations","clojure.math.combinatorics/permutations",(1636205837),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"permutations","permutations",(-1558265014),null),"clojure/math/combinatorics.cljc",(19),(1),(283),(283),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",(-1622480831),null)], null)),"All the distinct permutations of items, lexicographic by index \n(special handling for duplicate items).",(cljs.core.truth_(clojure.math.combinatorics.permutations)?clojure.math.combinatorics.permutations.cljs$lang$test:null)])));})()
;
(function (){
clojure.math.combinatorics.factorial = (function clojure$math$combinatorics$factorial(n){
if(cljs.core.integer_QMARK_.call(null,n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if(!((n < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var acc = cljs.core.long$.call(null,(1));
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return acc;
} else {
var G__226 = (acc * n__$1);
var G__227 = (n__$1 - (1));
acc = G__226;
n__$1 = G__227;
continue;
}
break;
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.factorial;},new cljs.core.Symbol("clojure.math.combinatorics","factorial","clojure.math.combinatorics/factorial",(1158017902),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"factorial","factorial",(127776047),null),"clojure/math/combinatorics.cljc",(17),(1),(302),(302),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.factorial)?clojure.math.combinatorics.factorial.cljs$lang$test:null)])));})()
;
/**
 * Input is a non-negative base 10 integer, output is the number in the
 * factorial number system (http://en.wikipedia.org/wiki/Factorial_number_system)
 * expressed as a list of 'digits'
 */
(function (){
clojure.math.combinatorics.factorial_numbers = (function clojure$math$combinatorics$factorial_numbers(n){
if(cljs.core.integer_QMARK_.call(null,n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if(!((n < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var n__$1 = n;
var digits = cljs.core.List.EMPTY;
var divisor = (1);
while(true){
if((n__$1 === (0))){
return digits;
} else {
var q = cljs.core.quot.call(null,n__$1,divisor);
var r = cljs.core.rem.call(null,n__$1,divisor);
var G__228 = q;
var G__229 = cljs.core.cons.call(null,r,digits);
var G__230 = (divisor + (1));
n__$1 = G__228;
digits = G__229;
divisor = G__230;
continue;
}
break;
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.factorial_numbers;},new cljs.core.Symbol("clojure.math.combinatorics","factorial-numbers","clojure.math.combinatorics/factorial-numbers",(-1310965928),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"factorial-numbers","factorial-numbers",(-1938553497),null),"clojure/math/combinatorics.cljc",(25),(1),(307),(307),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Input is a non-negative base 10 integer, output is the number in the\nfactorial number system (http://en.wikipedia.org/wiki/Factorial_number_system)\nexpressed as a list of 'digits'",(cljs.core.truth_(clojure.math.combinatorics.factorial_numbers)?clojure.math.combinatorics.factorial_numbers.cljs$lang$test:null)])));})()
;
(function (){
clojure.math.combinatorics.remove_nth = (function clojure$math$combinatorics$remove_nth(l,n){
var acc = cljs.core.PersistentVector.EMPTY;
var l__$1 = l;
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return cljs.core.into.call(null,acc,cljs.core.rest.call(null,l__$1));
} else {
var G__231 = cljs.core.conj.call(null,acc,cljs.core.first.call(null,l__$1));
var G__232 = cljs.core.rest.call(null,l__$1);
var G__233 = (n__$1 - (1));
acc = G__231;
l__$1 = G__232;
n__$1 = G__233;
continue;
}
break;
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.remove_nth;},new cljs.core.Symbol("clojure.math.combinatorics","remove-nth","clojure.math.combinatorics/remove-nth",(798668037),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"remove-nth","remove-nth",(1745026756),null),"clojure/math/combinatorics.cljc",(18),(1),(319),(319),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"l","l",(-1258542346),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.remove_nth)?clojure.math.combinatorics.remove_nth.cljs$lang$test:null)])));})()
;
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
(function (){
clojure.math.combinatorics.nth_permutation_distinct = (function clojure$math$combinatorics$nth_permutation_distinct(l,n){
if((n < clojure.math.combinatorics.factorial.call(null,cljs.core.count.call(null,l)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(clojure.math.combinatorics.format.call(null,"%s is too large. Input has only %s permutations.",[cljs.core.str(n)].join(''),[cljs.core.str(clojure.math.combinatorics.factorial.call(null,cljs.core.count.call(null,l)))].join(''))),cljs.core.str("\n"),cljs.core.str("(< n (factorial (count l)))")].join('')));
}

var length = cljs.core.count.call(null,l);
var fact_nums = clojure.math.combinatorics.factorial_numbers.call(null,n);
var indices = cljs.core.concat.call(null,cljs.core.repeat.call(null,(length - cljs.core.count.call(null,fact_nums)),(0)),fact_nums);
var l__$1 = l;
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,indices)){
return perm;
} else {
var i = cljs.core.first.call(null,indices);
var item = cljs.core.nth.call(null,l__$1,i);
var G__234 = cljs.core.rest.call(null,indices);
var G__235 = clojure.math.combinatorics.remove_nth.call(null,l__$1,i);
var G__236 = cljs.core.conj.call(null,perm,item);
indices = G__234;
l__$1 = G__235;
perm = G__236;
continue;
}
break;
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.nth_permutation_distinct;},new cljs.core.Symbol("clojure.math.combinatorics","nth-permutation-distinct","clojure.math.combinatorics/nth-permutation-distinct",(1458773496),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"nth-permutation-distinct","nth-permutation-distinct",(463152057),null),"clojure/math/combinatorics.cljc",(32),(1),(324),(324),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"l","l",(-1258542346),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Input should be a sorted sequential collection l of distinct items, \noutput is nth-permutation (0-based)",(cljs.core.truth_(clojure.math.combinatorics.nth_permutation_distinct)?clojure.math.combinatorics.nth_permutation_distinct.cljs$lang$test:null)])));})()
;
(function (){
clojure.math.combinatorics.count_permutations_from_frequencies = (function clojure$math$combinatorics$count_permutations_from_frequencies(freqs){
var counts = cljs.core.vals.call(null,freqs);
return cljs.core.reduce.call(null,cljs.core._SLASH_,clojure.math.combinatorics.factorial.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,counts)),cljs.core.map.call(null,clojure.math.combinatorics.factorial,counts));
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.count_permutations_from_frequencies;},new cljs.core.Symbol("clojure.math.combinatorics","count-permutations-from-frequencies","clojure.math.combinatorics/count-permutations-from-frequencies",(1264685762),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"count-permutations-from-frequencies","count-permutations-from-frequencies",(248106115),null),"clojure/math/combinatorics.cljc",(43),(1),(344),(344),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"freqs","freqs",(-1438965067),null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.count_permutations_from_frequencies)?clojure.math.combinatorics.count_permutations_from_frequencies.cljs$lang$test:null)])));})()
;
/**
 * Counts the number of distinct permutations of l
 */
(function (){
clojure.math.combinatorics.count_permutations = (function clojure$math$combinatorics$count_permutations(l){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,l))){
return clojure.math.combinatorics.factorial.call(null,cljs.core.count.call(null,l));
} else {
return clojure.math.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.frequencies.call(null,l));
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.count_permutations;},new cljs.core.Symbol("clojure.math.combinatorics","count-permutations","clojure.math.combinatorics/count-permutations",(1996623633),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"count-permutations","count-permutations",(-1248180912),null),"clojure/math/combinatorics.cljc",(25),(1),(349),(349),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"l","l",(-1258542346),null)], null)),"Counts the number of distinct permutations of l",(cljs.core.truth_(clojure.math.combinatorics.count_permutations)?clojure.math.combinatorics.count_permutations.cljs$lang$test:null)])));})()
;
/**
 * Takes a sorted frequency map and returns how far into the sequence of
 * lexicographic permutations you get by varying the first item
 */
(function (){
clojure.math.combinatorics.initial_perm_numbers = (function clojure$math$combinatorics$initial_perm_numbers(freqs){
return cljs.core.reductions.call(null,cljs.core._PLUS_,(0),(function (){var iter__23197__auto__ = (function clojure$math$combinatorics$initial_perm_numbers_$_iter__253(s__254){
return (new cljs.core.LazySeq(null,(function (){
var s__254__$1 = s__254;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__254__$1);
if(temp__19834__auto__){
var s__254__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__254__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__254__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__256 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__255 = (0);
while(true){
if((i__255 < size__23196__auto__)){
var vec__263 = cljs.core._nth.call(null,c__23195__auto__,i__255);
var k = cljs.core.nth.call(null,vec__263,(0),null);
var v = cljs.core.nth.call(null,vec__263,(1),null);
cljs.core.chunk_append.call(null,b__256,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.assoc.call(null,freqs,k,(v - (1)))));

var G__269 = (i__255 + (1));
i__255 = G__269;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__256),clojure$math$combinatorics$initial_perm_numbers_$_iter__253.call(null,cljs.core.chunk_rest.call(null,s__254__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__256),null);
}
} else {
var vec__266 = cljs.core.first.call(null,s__254__$2);
var k = cljs.core.nth.call(null,vec__266,(0),null);
var v = cljs.core.nth.call(null,vec__266,(1),null);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.assoc.call(null,freqs,k,(v - (1)))),clojure$math$combinatorics$initial_perm_numbers_$_iter__253.call(null,cljs.core.rest.call(null,s__254__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__23197__auto__.call(null,freqs);
})());
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.initial_perm_numbers;},new cljs.core.Symbol("clojure.math.combinatorics","initial-perm-numbers","clojure.math.combinatorics/initial-perm-numbers",(-2025981204),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"initial-perm-numbers","initial-perm-numbers",(-995875029),null),"clojure/math/combinatorics.cljc",(28),(1),(356),(356),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"freqs","freqs",(-1438965067),null)], null)),"Takes a sorted frequency map and returns how far into the sequence of\nlexicographic permutations you get by varying the first item",(cljs.core.truth_(clojure.math.combinatorics.initial_perm_numbers)?clojure.math.combinatorics.initial_perm_numbers.cljs$lang$test:null)])));})()
;
/**
 * Finds the index and remainder from the initial-perm-numbers.
 */
(function (){
clojure.math.combinatorics.index_remainder = (function clojure$math$combinatorics$index_remainder(perm_numbers,n){
var perm_numbers__$1 = perm_numbers;
var index = (0);
while(true){
if(((cljs.core.first.call(null,perm_numbers__$1) <= n)) && ((n < cljs.core.second.call(null,perm_numbers__$1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(n - cljs.core.first.call(null,perm_numbers__$1))], null);
} else {
var G__270 = cljs.core.rest.call(null,perm_numbers__$1);
var G__271 = (index + (1));
perm_numbers__$1 = G__270;
index = G__271;
continue;
}
break;
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.index_remainder;},new cljs.core.Symbol("clojure.math.combinatorics","index-remainder","clojure.math.combinatorics/index-remainder",(56306549),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"index-remainder","index-remainder",(1170432436),null),"clojure/math/combinatorics.cljc",(23),(1),(372),(372),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"perm-numbers","perm-numbers",(1126218954),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Finds the index and remainder from the initial-perm-numbers.",(cljs.core.truth_(clojure.math.combinatorics.index_remainder)?clojure.math.combinatorics.index_remainder.cljs$lang$test:null)])));})()
;
(function (){
clojure.math.combinatorics.dec_key = (function clojure$math$combinatorics$dec_key(m,k){
if(cljs.core._EQ_.call(null,(1),m.call(null,k))){
return cljs.core.dissoc.call(null,m,k);
} else {
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.dec);
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.dec_key;},new cljs.core.Symbol("clojure.math.combinatorics","dec-key","clojure.math.combinatorics/dec-key",(-1720393266),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"dec-key","dec-key",(-624116849),null),"clojure/math/combinatorics.cljc",(15),(1),(388),(388),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.dec_key)?clojure.math.combinatorics.dec_key.cljs$lang$test:null)])));})()
;
/**
 * Input is a non-negative base 10 integer n, and a sorted frequency map freqs.
 * Output is a list of 'digits' in this wacky duplicate factorial number system
 */
(function (){
clojure.math.combinatorics.factorial_numbers_with_duplicates = (function clojure$math$combinatorics$factorial_numbers_with_duplicates(n,freqs){
var n__$1 = n;
var digits = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
while(true){
if((n__$1 === (0))){
return cljs.core.into.call(null,digits,cljs.core.repeat.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,freqs__$1)),(0)));
} else {
var vec__275 = clojure.math.combinatorics.index_remainder.call(null,clojure.math.combinatorics.initial_perm_numbers.call(null,freqs__$1),n__$1);
var index = cljs.core.nth.call(null,vec__275,(0),null);
var remainder = cljs.core.nth.call(null,vec__275,(1),null);
var G__278 = remainder;
var G__279 = cljs.core.conj.call(null,digits,index);
var G__280 = (function (){var nth_key = cljs.core.nth.call(null,cljs.core.keys.call(null,freqs__$1),index);
return clojure.math.combinatorics.dec_key.call(null,freqs__$1,nth_key);
})();
n__$1 = G__278;
digits = G__279;
freqs__$1 = G__280;
continue;
}
break;
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.factorial_numbers_with_duplicates;},new cljs.core.Symbol("clojure.math.combinatorics","factorial-numbers-with-duplicates","clojure.math.combinatorics/factorial-numbers-with-duplicates",(-255556532),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"factorial-numbers-with-duplicates","factorial-numbers-with-duplicates",(-1284720115),null),"clojure/math/combinatorics.cljc",(41),(1),(393),(393),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"freqs","freqs",(-1438965067),null)], null)),"Input is a non-negative base 10 integer n, and a sorted frequency map freqs.\nOutput is a list of 'digits' in this wacky duplicate factorial number system",(cljs.core.truth_(clojure.math.combinatorics.factorial_numbers_with_duplicates)?clojure.math.combinatorics.factorial_numbers_with_duplicates.cljs$lang$test:null)])));})()
;
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
(function (){
clojure.math.combinatorics.nth_permutation_duplicates = (function clojure$math$combinatorics$nth_permutation_duplicates(l,n){
if((n < clojure.math.combinatorics.count_permutations.call(null,l))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(clojure.math.combinatorics.format.call(null,"%s is too large. Input has only %s permutations.",[cljs.core.str(n)].join(''),[cljs.core.str(clojure.math.combinatorics.count_permutations.call(null,l))].join(''))),cljs.core.str("\n"),cljs.core.str("(< n (count-permutations l))")].join('')));
}

var freqs = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.frequencies.call(null,l));
var indices = clojure.math.combinatorics.factorial_numbers_with_duplicates.call(null,n,freqs);
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,indices)){
return perm;
} else {
var i = cljs.core.first.call(null,indices);
var item = cljs.core.nth.call(null,cljs.core.keys.call(null,freqs),i);
var G__281 = clojure.math.combinatorics.dec_key.call(null,freqs,item);
var G__282 = cljs.core.rest.call(null,indices);
var G__283 = cljs.core.conj.call(null,perm,item);
freqs = G__281;
indices = G__282;
perm = G__283;
continue;
}
break;
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.nth_permutation_duplicates;},new cljs.core.Symbol("clojure.math.combinatorics","nth-permutation-duplicates","clojure.math.combinatorics/nth-permutation-duplicates",(581811585),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"nth-permutation-duplicates","nth-permutation-duplicates",(-419138622),null),"clojure/math/combinatorics.cljc",(34),(1),(405),(405),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"l","l",(-1258542346),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Input should be a sorted sequential collection l of distinct items, \noutput is nth-permutation (0-based)",(cljs.core.truth_(clojure.math.combinatorics.nth_permutation_duplicates)?clojure.math.combinatorics.nth_permutation_duplicates.cljs$lang$test:null)])));})()
;
/**
 * (nth (permutations items)) but calculated more directly.
 */
(function (){
clojure.math.combinatorics.nth_permutation = (function clojure$math$combinatorics$nth_permutation(items,n){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_.call(null,items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.nth_permutation_distinct.call(null,items,n);
} else {
return clojure.math.combinatorics.nth_permutation_duplicates.call(null,items,n);
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
var v = cljs.core.vec.call(null,items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct.call(null,cljs.core.range.call(null,cljs.core.count.call(null,items)),n);
return cljs.core.vec.call(null,cljs.core.map.call(null,v,perm_indices));
} else {
var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,items));
var f = cljs.core.frequencies.call(null,items);
var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__23197__auto__ = ((function (v,f){
return (function clojure$math$combinatorics$nth_permutation_$_iter__288(s__289){
return (new cljs.core.LazySeq(null,((function (v,f){
return (function (){
var s__289__$1 = s__289;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__289__$1);
if(temp__19834__auto__){
var s__289__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__289__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__289__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__291 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__290 = (0);
while(true){
if((i__290 < size__23196__auto__)){
var i = cljs.core._nth.call(null,c__23195__auto__,i__290);
cljs.core.chunk_append.call(null,b__291,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__292 = (i__290 + (1));
i__290 = G__292;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__291),clojure$math$combinatorics$nth_permutation_$_iter__288.call(null,cljs.core.chunk_rest.call(null,s__289__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__291),null);
}
} else {
var i = cljs.core.first.call(null,s__289__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$nth_permutation_$_iter__288.call(null,cljs.core.rest.call(null,s__289__$2)));
}
} else {
return null;
}
break;
}
});})(v,f))
,null,null));
});})(v,f))
;
return iter__23197__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());
return cljs.core.vec.call(null,cljs.core.map.call(null,v,clojure.math.combinatorics.nth_permutation_duplicates.call(null,indices,n)));
}
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.nth_permutation;},new cljs.core.Symbol("clojure.math.combinatorics","nth-permutation","clojure.math.combinatorics/nth-permutation",(-759868347),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"nth-permutation","nth-permutation",(-1876258428),null),"clojure/math/combinatorics.cljc",(22),(1),(424),(424),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",(-1622480831),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"(nth (permutations items)) but calculated more directly.",(cljs.core.truth_(clojure.math.combinatorics.nth_permutation)?clojure.math.combinatorics.nth_permutation.cljs$lang$test:null)])));})()
;
/**
 * (drop n (permutations items)) but calculated more directly.
 */
(function (){
clojure.math.combinatorics.drop_permutations = (function clojure$math$combinatorics$drop_permutations(items,n){
if((n === (0))){
return clojure.math.combinatorics.permutations.call(null,items);
} else {
if(cljs.core._EQ_.call(null,n,clojure.math.combinatorics.count_permutations.call(null,items))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_.call(null,items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.vec_lex_permutations.call(null,clojure.math.combinatorics.nth_permutation_distinct.call(null,items,n));
} else {
return clojure.math.combinatorics.vec_lex_permutations.call(null,clojure.math.combinatorics.nth_permutation_duplicates.call(null,items,n));
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
var v = cljs.core.vec.call(null,items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct.call(null,cljs.core.range.call(null,cljs.core.count.call(null,items)),n);
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations.call(null,perm_indices));
} else {
var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,items));
var f = cljs.core.frequencies.call(null,items);
var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__23197__auto__ = ((function (v,f){
return (function clojure$math$combinatorics$drop_permutations_$_iter__297(s__298){
return (new cljs.core.LazySeq(null,((function (v,f){
return (function (){
var s__298__$1 = s__298;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__298__$1);
if(temp__19834__auto__){
var s__298__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__298__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__298__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__300 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__299 = (0);
while(true){
if((i__299 < size__23196__auto__)){
var i = cljs.core._nth.call(null,c__23195__auto__,i__299);
cljs.core.chunk_append.call(null,b__300,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__301 = (i__299 + (1));
i__299 = G__301;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__300),clojure$math$combinatorics$drop_permutations_$_iter__297.call(null,cljs.core.chunk_rest.call(null,s__298__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__300),null);
}
} else {
var i = cljs.core.first.call(null,s__298__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$drop_permutations_$_iter__297.call(null,cljs.core.rest.call(null,s__298__$2)));
}
} else {
return null;
}
break;
}
});})(v,f))
,null,null));
});})(v,f))
;
return iter__23197__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations.call(null,clojure.math.combinatorics.nth_permutation_duplicates.call(null,indices,n)));
}
}

}
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.drop_permutations;},new cljs.core.Symbol("clojure.math.combinatorics","drop-permutations","clojure.math.combinatorics/drop-permutations",(-875552903),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"drop-permutations","drop-permutations",(141286022),null),"clojure/math/combinatorics.cljc",(24),(1),(442),(442),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",(-1622480831),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"(drop n (permutations items)) but calculated more directly.",(cljs.core.truth_(clojure.math.combinatorics.drop_permutations)?clojure.math.combinatorics.drop_permutations.cljs$lang$test:null)])));})()
;
(function (){
clojure.math.combinatorics.n_take_k = (function clojure$math$combinatorics$n_take_k(n,k){
while(true){
if((k < (0))){
return (0);
} else {
if((k > n)){
return (0);
} else {
if((k === (0))){
return (1);
} else {
if(cljs.core._EQ_.call(null,k,(1))){
return n;
} else {
if((k > cljs.core.quot.call(null,n,(2)))){
var G__302 = n;
var G__303 = (n - k);
n = G__302;
k = G__303;
continue;
} else {
return (cljs.core.apply.call(null,cljs.core._STAR_,cljs.core.range.call(null,((n - k) + (1)),(n + (1)))) / cljs.core.apply.call(null,cljs.core._STAR_,cljs.core.range.call(null,(1),(k + (1)))));

}
}
}
}
}
break;
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.n_take_k;},new cljs.core.Symbol("clojure.math.combinatorics","n-take-k","clojure.math.combinatorics/n-take-k",(-399083260),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"n-take-k","n-take-k",(-676741947),null),"clojure/math/combinatorics.cljc",(16),(1),(468),(468),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.n_take_k)?clojure.math.combinatorics.n_take_k.cljs$lang$test:null)])));})()
;
(function (){
clojure.math.combinatorics.count_combinations_from_frequencies = (function clojure$math$combinatorics$count_combinations_from_frequencies(freqs,t){
var counts = cljs.core.vals.call(null,freqs);
var sum = cljs.core.apply.call(null,cljs.core._PLUS_,counts);
if((t === (0))){
return (1);
} else {
if(cljs.core._EQ_.call(null,t,(1))){
return cljs.core.count.call(null,freqs);
} else {
if(cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),counts)){
return clojure.math.combinatorics.n_take_k.call(null,cljs.core.count.call(null,freqs),t);
} else {
if((t > sum)){
return (0);
} else {
if(cljs.core._EQ_.call(null,t,sum)){
return (1);
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,freqs),(1))){
return (1);
} else {
var new_freqs = clojure.math.combinatorics.dec_key.call(null,freqs,cljs.core.first.call(null,cljs.core.keys.call(null,freqs)));
return (clojure.math.combinatorics.count_combinations_from_frequencies.call(null,new_freqs,(t - (1))) + clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.dissoc.call(null,freqs,cljs.core.first.call(null,cljs.core.keys.call(null,freqs))),t));

}
}
}
}
}
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.count_combinations_from_frequencies;},new cljs.core.Symbol("clojure.math.combinatorics","count-combinations-from-frequencies","clojure.math.combinatorics/count-combinations-from-frequencies",(-820434949),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"count-combinations-from-frequencies","count-combinations-from-frequencies",(-1968084936),null),"clojure/math/combinatorics.cljc",(60),(1),true,(478),(478),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"freqs","freqs",(-1438965067),null),new cljs.core.Symbol(null,"t","t",(242699008),null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.count_combinations_from_frequencies)?clojure.math.combinatorics.count_combinations_from_frequencies.cljs$lang$test:null)])));})()
;
/**
 * We need an internal version that doesn't memoize each call to count-combinations-from-frequencies
 * so that we can memoize over a series of calls.
 */
(function (){
clojure.math.combinatorics.count_combinations_unmemoized = (function clojure$math$combinatorics$count_combinations_unmemoized(items,t){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.n_take_k.call(null,cljs.core.count.call(null,items),t);
} else {
return clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.frequencies.call(null,items),t);
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.count_combinations_unmemoized;},new cljs.core.Symbol("clojure.math.combinatorics","count-combinations-unmemoized","clojure.math.combinatorics/count-combinations-unmemoized",(-2026841229),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"count-combinations-unmemoized","count-combinations-unmemoized",(-1000808014),null),"clojure/math/combinatorics.cljc",(37),(1),(493),(493),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",(-1622480831),null),new cljs.core.Symbol(null,"t","t",(242699008),null)], null)),"We need an internal version that doesn't memoize each call to count-combinations-from-frequencies\nso that we can memoize over a series of calls.",(cljs.core.truth_(clojure.math.combinatorics.count_combinations_unmemoized)?clojure.math.combinatorics.count_combinations_unmemoized.cljs$lang$test:null)])));})()
;
/**
 * (count (combinations items t)) but computed more directly
 */
(function (){
clojure.math.combinatorics.count_combinations = (function clojure$math$combinatorics$count_combinations(items,t){
var count_combinations_from_frequencies305 = clojure.math.combinatorics.count_combinations_from_frequencies;
clojure.math.combinatorics.count_combinations_from_frequencies = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);

try{return clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,t);
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies305;
}}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.count_combinations;},new cljs.core.Symbol("clojure.math.combinatorics","count-combinations","clojure.math.combinatorics/count-combinations",(-1343626903),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"count-combinations","count-combinations",(-331274328),null),"clojure/math/combinatorics.cljc",(25),(1),(501),(501),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",(-1622480831),null),new cljs.core.Symbol(null,"t","t",(242699008),null)], null)),"(count (combinations items t)) but computed more directly",(cljs.core.truth_(clojure.math.combinatorics.count_combinations)?clojure.math.combinatorics.count_combinations.cljs$lang$test:null)])));})()
;
(function (){
clojure.math.combinatorics.expt_int = (function clojure$math$combinatorics$expt_int(base,pow){
var n = pow;
var y = cljs.core.long$.call(null,(1));
var z = base;
while(true){
var t = cljs.core.even_QMARK_.call(null,n);
var n__$1 = cljs.core.quot.call(null,n,(2));
if(t){
var G__306 = n__$1;
var G__307 = y;
var G__308 = (z * z);
n = G__306;
y = G__307;
z = G__308;
continue;
} else {
if((n__$1 === (0))){
return (z * y);
} else {
var G__309 = n__$1;
var G__310 = (z * y);
var G__311 = (z * z);
n = G__309;
y = G__310;
z = G__311;
continue;

}
}
break;
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.expt_int;},new cljs.core.Symbol("clojure.math.combinatorics","expt-int","clojure.math.combinatorics/expt-int",(1243018977),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"expt-int","expt-int",(-1997615968),null),"clojure/math/combinatorics.cljc",(16),(1),(507),(507),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",(1825810849),null),new cljs.core.Symbol(null,"pow","pow",(196526960),null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.expt_int)?clojure.math.combinatorics.expt_int.cljs$lang$test:null)])));})()
;
(function (){
clojure.math.combinatorics.count_subsets_unmemoized = (function clojure$math$combinatorics$count_subsets_unmemoized(items){
if(cljs.core.empty_QMARK_.call(null,items)){
return (1);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.expt_int.call(null,(2),cljs.core.count.call(null,items));
} else {
return cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__23197__auto__ = (function clojure$math$combinatorics$count_subsets_unmemoized_$_iter__316(s__317){
return (new cljs.core.LazySeq(null,(function (){
var s__317__$1 = s__317;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__317__$1);
if(temp__19834__auto__){
var s__317__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__317__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__317__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__319 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__318 = (0);
while(true){
if((i__318 < size__23196__auto__)){
var i = cljs.core._nth.call(null,c__23195__auto__,i__318);
cljs.core.chunk_append.call(null,b__319,clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,i));

var G__320 = (i__318 + (1));
i__318 = G__320;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__319),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__316.call(null,cljs.core.chunk_rest.call(null,s__317__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__319),null);
}
} else {
var i = cljs.core.first.call(null,s__317__$2);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,i),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__316.call(null,cljs.core.rest.call(null,s__317__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__23197__auto__.call(null,cljs.core.range.call(null,(0),(cljs.core.count.call(null,items) + (1))));
})());

}
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.count_subsets_unmemoized;},new cljs.core.Symbol("clojure.math.combinatorics","count-subsets-unmemoized","clojure.math.combinatorics/count-subsets-unmemoized",(-766469145),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"count-subsets-unmemoized","count-subsets-unmemoized",(287884326),null),"clojure/math/combinatorics.cljc",(32),(1),(515),(515),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",(-1622480831),null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.count_subsets_unmemoized)?clojure.math.combinatorics.count_subsets_unmemoized.cljs$lang$test:null)])));})()
;
/**
 * (count (subsets items)) but computed more directly
 */
(function (){
clojure.math.combinatorics.count_subsets = (function clojure$math$combinatorics$count_subsets(items){
var count_combinations_from_frequencies322 = clojure.math.combinatorics.count_combinations_from_frequencies;
clojure.math.combinatorics.count_combinations_from_frequencies = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);

try{return clojure.math.combinatorics.count_subsets_unmemoized.call(null,items);
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies322;
}}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.count_subsets;},new cljs.core.Symbol("clojure.math.combinatorics","count-subsets","clojure.math.combinatorics/count-subsets",(1842404973),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"count-subsets","count-subsets",(783819820),null),"clojure/math/combinatorics.cljc",(20),(1),(523),(523),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",(-1622480831),null)], null)),"(count (subsets items)) but computed more directly",(cljs.core.truth_(clojure.math.combinatorics.count_subsets)?clojure.math.combinatorics.count_subsets.cljs$lang$test:null)])));})()
;
/**
 * The nth element of the sequence of t-combinations of items,
 * where items is a collection of distinct elements
 */
(function (){
clojure.math.combinatorics.nth_combination_distinct = (function clojure$math$combinatorics$nth_combination_distinct(items,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var items__$1 = items;
var t__$1 = t;
var n__$1 = n;
while(true){
if(((n__$1 === (0))) || (cljs.core.empty_QMARK_.call(null,items__$1))){
return cljs.core.into.call(null,comb,cljs.core.take.call(null,t__$1,items__$1));
} else {
var dc_dt = clojure.math.combinatorics.n_take_k.call(null,(cljs.core.count.call(null,items__$1) - (1)),(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__323 = cljs.core.conj.call(null,comb,cljs.core.first.call(null,items__$1));
var G__324 = cljs.core.rest.call(null,items__$1);
var G__325 = (t__$1 - (1));
var G__326 = n__$1;
comb = G__323;
items__$1 = G__324;
t__$1 = G__325;
n__$1 = G__326;
continue;
} else {
var G__327 = comb;
var G__328 = cljs.core.rest.call(null,items__$1);
var G__329 = t__$1;
var G__330 = (n__$1 - dc_dt);
comb = G__327;
items__$1 = G__328;
t__$1 = G__329;
n__$1 = G__330;
continue;
}
}
break;
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.nth_combination_distinct;},new cljs.core.Symbol("clojure.math.combinatorics","nth-combination-distinct","clojure.math.combinatorics/nth-combination-distinct",(-503267481),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"nth-combination-distinct","nth-combination-distinct",(-1486292698),null),"clojure/math/combinatorics.cljc",(32),(1),(530),(530),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",(-1622480831),null),new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"The nth element of the sequence of t-combinations of items,\nwhere items is a collection of distinct elements",(cljs.core.truth_(clojure.math.combinatorics.nth_combination_distinct)?clojure.math.combinatorics.nth_combination_distinct.cljs$lang$test:null)])));})()
;
/**
 * The nth element of the sequence of t-combinations of the multiset
 * represented by freqs
 */
(function (){
clojure.math.combinatorics.nth_combination_freqs = (function clojure$math$combinatorics$nth_combination_freqs(freqs,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
var t__$1 = t;
var n__$1 = n;
while(true){
if(((n__$1 === (0))) || (cljs.core.empty_QMARK_.call(null,freqs__$1))){
return cljs.core.into.call(null,comb,cljs.core.take.call(null,t__$1,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__23197__auto__ = ((function (comb,freqs__$1,t__$1,n__$1){
return (function clojure$math$combinatorics$nth_combination_freqs_$_iter__347(s__348){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__348__$1 = s__348;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__348__$1);
if(temp__19834__auto__){
var s__348__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__348__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__348__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__350 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__349 = (0);
while(true){
if((i__349 < size__23196__auto__)){
var vec__357 = cljs.core._nth.call(null,c__23195__auto__,i__349);
var k = cljs.core.nth.call(null,vec__357,(0),null);
var v = cljs.core.nth.call(null,vec__357,(1),null);
cljs.core.chunk_append.call(null,b__350,cljs.core.repeat.call(null,v,k));

var G__363 = (i__349 + (1));
i__349 = G__363;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350),clojure$math$combinatorics$nth_combination_freqs_$_iter__347.call(null,cljs.core.chunk_rest.call(null,s__348__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350),null);
}
} else {
var vec__360 = cljs.core.first.call(null,s__348__$2);
var k = cljs.core.nth.call(null,vec__360,(0),null);
var v = cljs.core.nth.call(null,vec__360,(1),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,v,k),clojure$math$combinatorics$nth_combination_freqs_$_iter__347.call(null,cljs.core.rest.call(null,s__348__$2)));
}
} else {
return null;
}
break;
}
});})(comb,freqs__$1,t__$1,n__$1))
,null,null));
});})(comb,freqs__$1,t__$1,n__$1))
;
return iter__23197__auto__.call(null,freqs__$1);
})())));
} else {
var first_key = cljs.core.first.call(null,cljs.core.keys.call(null,freqs__$1));
var remove_one_key = clojure.math.combinatorics.dec_key.call(null,freqs__$1,first_key);
var dc_dt = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,remove_one_key,(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__364 = cljs.core.conj.call(null,comb,first_key);
var G__365 = remove_one_key;
var G__366 = (t__$1 - (1));
var G__367 = n__$1;
comb = G__364;
freqs__$1 = G__365;
t__$1 = G__366;
n__$1 = G__367;
continue;
} else {
var G__368 = comb;
var G__369 = cljs.core.dissoc.call(null,freqs__$1,first_key);
var G__370 = t__$1;
var G__371 = (n__$1 - dc_dt);
comb = G__368;
freqs__$1 = G__369;
t__$1 = G__370;
n__$1 = G__371;
continue;
}
}
break;
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.nth_combination_freqs;},new cljs.core.Symbol("clojure.math.combinatorics","nth-combination-freqs","clojure.math.combinatorics/nth-combination-freqs",(-800605499),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"nth-combination-freqs","nth-combination-freqs",(-1925192700),null),"clojure/math/combinatorics.cljc",(29),(1),(544),(544),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"freqs","freqs",(-1438965067),null),new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"The nth element of the sequence of t-combinations of the multiset\nrepresented by freqs",(cljs.core.truth_(clojure.math.combinatorics.nth_combination_freqs)?clojure.math.combinatorics.nth_combination_freqs.cljs$lang$test:null)])));})()
;
/**
 * The nth element of the sequence of t-combinations of items
 */
(function (){
clojure.math.combinatorics.nth_combination = (function clojure$math$combinatorics$nth_combination(items,t,n){
if((n < clojure.math.combinatorics.count_combinations.call(null,items,t))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(clojure.math.combinatorics.format.call(null,"%s is too large. Input has only %s combinations.",[cljs.core.str(n)].join(''),[cljs.core.str(clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,t))].join(''))),cljs.core.str("\n"),cljs.core.str("(< n (count-combinations items t))")].join('')));
}

if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.nth_combination_distinct.call(null,items,t,n);
} else {
var count_combinations_from_frequencies377 = clojure.math.combinatorics.count_combinations_from_frequencies;
clojure.math.combinatorics.count_combinations_from_frequencies = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);

try{var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,items));
var f = cljs.core.frequencies.call(null,items);
var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__23197__auto__ = ((function (v,f,count_combinations_from_frequencies377){
return (function clojure$math$combinatorics$nth_combination_$_iter__378(s__379){
return (new cljs.core.LazySeq(null,((function (v,f,count_combinations_from_frequencies377){
return (function (){
var s__379__$1 = s__379;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__379__$1);
if(temp__19834__auto__){
var s__379__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__379__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__379__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__381 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__380 = (0);
while(true){
if((i__380 < size__23196__auto__)){
var i = cljs.core._nth.call(null,c__23195__auto__,i__380);
cljs.core.chunk_append.call(null,b__381,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__382 = (i__380 + (1));
i__380 = G__382;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__381),clojure$math$combinatorics$nth_combination_$_iter__378.call(null,cljs.core.chunk_rest.call(null,s__379__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__381),null);
}
} else {
var i = cljs.core.first.call(null,s__379__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$nth_combination_$_iter__378.call(null,cljs.core.rest.call(null,s__379__$2)));
}
} else {
return null;
}
break;
}
});})(v,f,count_combinations_from_frequencies377))
,null,null));
});})(v,f,count_combinations_from_frequencies377))
;
return iter__23197__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());
var indices_freqs = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.frequencies.call(null,indices));
return cljs.core.vec.call(null,cljs.core.map.call(null,v,clojure.math.combinatorics.nth_combination_freqs.call(null,indices_freqs,t,n)));
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies377;
}}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.nth_combination;},new cljs.core.Symbol("clojure.math.combinatorics","nth-combination","clojure.math.combinatorics/nth-combination",(-381039481),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"nth-combination","nth-combination",(-1345254592),null),"clojure/math/combinatorics.cljc",(22),(1),(561),(561),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",(-1622480831),null),new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"The nth element of the sequence of t-combinations of items",(cljs.core.truth_(clojure.math.combinatorics.nth_combination)?clojure.math.combinatorics.nth_combination.cljs$lang$test:null)])));})()
;
(function (){
clojure.math.combinatorics.nth_subset = (function clojure$math$combinatorics$nth_subset(items,n){
if((n < clojure.math.combinatorics.count_subsets.call(null,items))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(clojure.math.combinatorics.format.call(null,"%s is too large. Input has only %s subsets.",[cljs.core.str(n)].join(''),[cljs.core.str(clojure.math.combinatorics.count_subsets.call(null,items))].join(''))),cljs.core.str("\n"),cljs.core.str("(< n (count-subsets items))")].join('')));
}

var size = (0);
var n__$1 = n;
while(true){
var num_combinations = clojure.math.combinatorics.count_combinations.call(null,items,size);
if((n__$1 < num_combinations)){
return clojure.math.combinatorics.nth_combination.call(null,items,size,n__$1);
} else {
var G__383 = (size + (1));
var G__384 = (n__$1 - num_combinations);
size = G__383;
n__$1 = G__384;
continue;
}
break;
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.nth_subset;},new cljs.core.Symbol("clojure.math.combinatorics","nth-subset","clojure.math.combinatorics/nth-subset",(1429946715),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"nth-subset","nth-subset",(396594970),null),"clojure/math/combinatorics.cljc",(17),(1),(578),(578),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",(-1622480831),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.nth_subset)?clojure.math.combinatorics.nth_subset.cljs$lang$test:null)])));})()
;
/**
 * The opposite of nth, i.e., from an item in a list, find the n
 */
(function (){
clojure.math.combinatorics.list_index = (function clojure$math$combinatorics$list_index(l,item){
var l__$1 = l;
var n = (0);
while(true){
if(cljs.core.seq.call(null,l__$1)){
} else {
throw (new Error("Assert failed: (seq l)"));
}

if(cljs.core._EQ_.call(null,item,cljs.core.first.call(null,l__$1))){
return n;
} else {
var G__385 = cljs.core.rest.call(null,l__$1);
var G__386 = (n + (1));
l__$1 = G__385;
n = G__386;
continue;
}
break;
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.list_index;},new cljs.core.Symbol("clojure.math.combinatorics","list-index","clojure.math.combinatorics/list-index",(876643344),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"list-index","list-index",(1991787089),null),"clojure/math/combinatorics.cljc",(18),(1),(594),(594),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"l","l",(-1258542346),null),new cljs.core.Symbol(null,"item","item",(1889905329),null)], null)),"The opposite of nth, i.e., from an item in a list, find the n",(cljs.core.truth_(clojure.math.combinatorics.list_index)?clojure.math.combinatorics.list_index.cljs$lang$test:null)])));})()
;
(function (){
clojure.math.combinatorics.permutation_index_distinct = (function clojure$math$combinatorics$permutation_index_distinct(l){
var l__$1 = l;
var index = cljs.core.long$.call(null,(0));
var n = (cljs.core.count.call(null,l__$1) - (1));
while(true){
if(cljs.core.empty_QMARK_.call(null,l__$1)){
return index;
} else {
var G__387 = cljs.core.rest.call(null,l__$1);
var G__388 = (index + (clojure.math.combinatorics.factorial.call(null,n) * clojure.math.combinatorics.list_index.call(null,cljs.core.sort.call(null,l__$1),cljs.core.first.call(null,l__$1))));
var G__389 = (n - (1));
l__$1 = G__387;
index = G__388;
n = G__389;
continue;
}
break;
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.permutation_index_distinct;},new cljs.core.Symbol("clojure.math.combinatorics","permutation-index-distinct","clojure.math.combinatorics/permutation-index-distinct",(-625838022),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"permutation-index-distinct","permutation-index-distinct",(-1725254075),null),"clojure/math/combinatorics.cljc",(34),(1),(602),(602),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"l","l",(-1258542346),null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.permutation_index_distinct)?clojure.math.combinatorics.permutation_index_distinct.cljs$lang$test:null)])));})()
;
(function (){
clojure.math.combinatorics.permutation_index_duplicates = (function clojure$math$combinatorics$permutation_index_duplicates(l){
var l__$1 = l;
var index = cljs.core.long$.call(null,(0));
var freqs = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.frequencies.call(null,l__$1));
while(true){
if(cljs.core.empty_QMARK_.call(null,l__$1)){
return index;
} else {
var G__398 = cljs.core.rest.call(null,l__$1);
var G__399 = cljs.core.reduce.call(null,cljs.core._PLUS_,index,(function (){var iter__23197__auto__ = ((function (l__$1,index,freqs){
return (function clojure$math$combinatorics$permutation_index_duplicates_$_iter__394(s__395){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
var s__395__$1 = s__395;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__395__$1);
if(temp__19834__auto__){
var s__395__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__395__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__395__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__397 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__396 = (0);
while(true){
if((i__396 < size__23196__auto__)){
var k = cljs.core._nth.call(null,c__23195__auto__,i__396);
cljs.core.chunk_append.call(null,b__397,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,clojure.math.combinatorics.dec_key.call(null,freqs,k)));

var G__401 = (i__396 + (1));
i__396 = G__401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__397),clojure$math$combinatorics$permutation_index_duplicates_$_iter__394.call(null,cljs.core.chunk_rest.call(null,s__395__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__397),null);
}
} else {
var k = cljs.core.first.call(null,s__395__$2);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,clojure.math.combinatorics.dec_key.call(null,freqs,k)),clojure$math$combinatorics$permutation_index_duplicates_$_iter__394.call(null,cljs.core.rest.call(null,s__395__$2)));
}
} else {
return null;
}
break;
}
});})(l__$1,index,freqs))
,null,null));
});})(l__$1,index,freqs))
;
return iter__23197__auto__.call(null,cljs.core.take_while.call(null,((function (l__$1,index,freqs,iter__23197__auto__){
return (function (p1__3_SHARP_){
return (cljs.core.compare.call(null,p1__3_SHARP_,cljs.core.first.call(null,l__$1)) < (0));
});})(l__$1,index,freqs,iter__23197__auto__))
,cljs.core.keys.call(null,freqs)));
})());
var G__400 = clojure.math.combinatorics.dec_key.call(null,freqs,cljs.core.first.call(null,l__$1));
l__$1 = G__398;
index = G__399;
freqs = G__400;
continue;
}
break;
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.permutation_index_duplicates;},new cljs.core.Symbol("clojure.math.combinatorics","permutation-index-duplicates","clojure.math.combinatorics/permutation-index-duplicates",(934586663),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"permutation-index-duplicates","permutation-index-duplicates",(-199430944),null),"clojure/math/combinatorics.cljc",(36),(1),(610),(610),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"l","l",(-1258542346),null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.permutation_index_duplicates)?clojure.math.combinatorics.permutation_index_duplicates.cljs$lang$test:null)])));})()
;
/**
 * Input must be a sortable collection of items.  Returns the n such that
 *  (nth-permutation (sort items) n) is items.
 */
(function (){
clojure.math.combinatorics.permutation_index = (function clojure$math$combinatorics$permutation_index(items){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.permutation_index_distinct.call(null,items);
} else {
return clojure.math.combinatorics.permutation_index_duplicates.call(null,items);
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.permutation_index;},new cljs.core.Symbol("clojure.math.combinatorics","permutation-index","clojure.math.combinatorics/permutation-index",(1853744798),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"permutation-index","permutation-index",(736436447),null),"clojure/math/combinatorics.cljc",(24),(1),(620),(620),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",(-1622480831),null)], null)),"Input must be a sortable collection of items.  Returns the n such that\n    (nth-permutation (sort items) n) is items.",(cljs.core.truth_(clojure.math.combinatorics.permutation_index)?clojure.math.combinatorics.permutation_index.cljs$lang$test:null)])));})()
;
(function (){
clojure.math.combinatorics.update = (function clojure$math$combinatorics$update(vec,index,f){
var item = vec.call(null,index);
return cljs.core.assoc.call(null,vec,index,f.call(null,item));
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.update;},new cljs.core.Symbol("clojure.math.combinatorics","update","clojure.math.combinatorics/update",(1669499728),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"update","update",(-1608859373),null),"clojure/math/combinatorics.cljc",(14),(1),(645),(645),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec","vec",(982683596),null),new cljs.core.Symbol(null,"index","index",(108845612),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.update)?clojure.math.combinatorics.update.cljs$lang$test:null)])));})()
;
(function (){
clojure.math.combinatorics.init = (function clojure$math$combinatorics$init(n,s){
if(cljs.core.truth_(s)){
return cljs.core.vec.call(null,(function (){var iter__23197__auto__ = (function clojure$math$combinatorics$init_$_iter__406(s__407){
return (new cljs.core.LazySeq(null,(function (){
var s__407__$1 = s__407;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__407__$1);
if(temp__19834__auto__){
var s__407__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__407__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__407__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__409 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__408 = (0);
while(true){
if((i__408 < size__23196__auto__)){
var i = cljs.core._nth.call(null,c__23195__auto__,i__408);
cljs.core.chunk_append.call(null,b__409,(function (){var x__21615__auto__ = (0);
var y__21616__auto__ = (i - ((n - s) - (-1)));
return ((x__21615__auto__ > y__21616__auto__) ? x__21615__auto__ : y__21616__auto__);
})());

var G__410 = (i__408 + (1));
i__408 = G__410;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__409),clojure$math$combinatorics$init_$_iter__406.call(null,cljs.core.chunk_rest.call(null,s__407__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__409),null);
}
} else {
var i = cljs.core.first.call(null,s__407__$2);
return cljs.core.cons.call(null,(function (){var x__21615__auto__ = (0);
var y__21616__auto__ = (i - ((n - s) - (-1)));
return ((x__21615__auto__ > y__21616__auto__) ? x__21615__auto__ : y__21616__auto__);
})(),clojure$math$combinatorics$init_$_iter__406.call(null,cljs.core.rest.call(null,s__407__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__23197__auto__.call(null,cljs.core.range.call(null,(1),(n + (1))));
})());
} else {
return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,(0)));
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.init;},new cljs.core.Symbol("clojure.math.combinatorics","init","clojure.math.combinatorics/init",(-1286199262),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"init","init",(-234949907),null),"clojure/math/combinatorics.cljc",(12),(1),(651),(651),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.init)?clojure.math.combinatorics.init.cljs$lang$test:null)])));})()
;
(function (){
clojure.math.combinatorics.growth_strings_H = (function clojure$math$combinatorics$growth_strings_H(var_args){
var args411 = [];
var len__23656__auto___417 = arguments.length;
var i__23657__auto___418 = (0);
while(true){
if((i__23657__auto___418 < len__23656__auto___417)){
args411.push((arguments[i__23657__auto___418]));

var G__419 = (i__23657__auto___418 + (1));
i__23657__auto___418 = G__419;
continue;
} else {
}
break;
}

var G__413 = args411.length;
switch (G__413) {
case (3):
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (5):
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args411.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.growth_strings_H;},new cljs.core.Symbol("clojure.math.combinatorics","growth-strings-H","clojure.math.combinatorics/growth-strings-H",(-428743943),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"growth-strings-H","growth-strings-H",(613033990),null),"clojure/math/combinatorics.cljc",(24),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(5),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(658),(658),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.growth_strings_H)?clojure.math.combinatorics.growth_strings_H.cljs$lang$test:null)])));})()
;

clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3 = (function (n,r,s){
return clojure.math.combinatorics.growth_strings_H.call(null,n,clojure.math.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,(1))),r,s);
});

clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5 = (function (n,a,b,r,s){
return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){
if((function (){var and__20770__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));
if(and__20770__auto__){
if(cljs.core.truth_(r)){
return (cljs.core.peek.call(null,a) < (r - (1)));
} else {
return true;
}
} else {
return and__20770__auto__;
}
})()){
return clojure.math.combinatorics.growth_strings_H.call(null,n,clojure.math.combinatorics.update.call(null,a,(n - (1)),cljs.core.inc),b,r,s);
} else {
var j = (function (){var j = (n - (2));
while(true){
if((function (){var and__20770__auto__ = (a.call(null,j) < b.call(null,j));
if(and__20770__auto__){
var and__20770__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - (1))):true);
if(and__20770__auto____$1){
if(cljs.core.truth_(s)){
return (((s - b.call(null,j)) - ((((a.call(null,j) + (1)) === b.call(null,j)))?(1):(0))) <= (n - j));
} else {
return true;
}
} else {
return and__20770__auto____$1;
}
} else {
return and__20770__auto__;
}
})()){
return j;
} else {
var G__421 = (j - (1));
j = G__421;
continue;
}
break;
}
})();
if((j === (0))){
return cljs.core.List.EMPTY;
} else {
var a__$1 = clojure.math.combinatorics.update.call(null,a,j,cljs.core.inc);
var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?(1):(0)))):null);
var vec__414 = (function (){var a__$2 = a__$1;
var b__$1 = b;
var i = (j + (1));
var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?(1):(0)));
while(true){
if((i === n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else {
if(cljs.core.truth_((function (){var and__20770__auto__ = s;
if(cljs.core.truth_(and__20770__auto__)){
return (i > ((n - x) - (1)));
} else {
return and__20770__auto__;
}
})())){
var new_a_i = ((i - n) + s);
var G__422 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__423 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__424 = (i + (1));
var G__425 = (function (){var x__21615__auto__ = current_max;
var y__21616__auto__ = (new_a_i + (1));
return ((x__21615__auto__ > y__21616__auto__) ? x__21615__auto__ : y__21616__auto__);
})();
a__$2 = G__422;
b__$1 = G__423;
i = G__424;
current_max = G__425;
continue;
} else {
var G__426 = cljs.core.assoc.call(null,a__$2,i,(0));
var G__427 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__428 = (i + (1));
var G__429 = current_max;
a__$2 = G__426;
b__$1 = G__427;
i = G__428;
current_max = G__429;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.call(null,vec__414,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__414,(1),null);
return clojure.math.combinatorics.growth_strings_H.call(null,n,a__$2,b__$1,r,s);
}
}
}),null,null)));
});

clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = (5);

new cljs.core.Var(function(){return clojure.math.combinatorics.growth_strings_H;},new cljs.core.Symbol("clojure.math.combinatorics","growth-strings-H","clojure.math.combinatorics/growth-strings-H",(-428743943),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"growth-strings-H","growth-strings-H",(613033990),null),"clojure/math/combinatorics.cljc",(24),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(5),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(658),(658),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.growth_strings_H)?clojure.math.combinatorics.growth_strings_H.cljs$lang$test:null)]));
(function (){
clojure.math.combinatorics.lex_partitions_H = (function clojure$math$combinatorics$lex_partitions_H(var_args){
var args__23658__auto__ = [];
var len__23656__auto___439 = arguments.length;
var i__23657__auto___440 = (0);
while(true){
if((i__23657__auto___440 < len__23656__auto___439)){
args__23658__auto__.push((arguments[i__23657__auto___440]));

var G__441 = (i__23657__auto___440 + (1));
i__23657__auto___440 = G__441;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((1) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.lex_partitions_H;},new cljs.core.Symbol("clojure.math.combinatorics","lex-partitions-H","clojure.math.combinatorics/lex-partitions-H",(1489900071),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"lex-partitions-H","lex-partitions-H",(459680998),null),"clojure/math/combinatorics.cljc",(24),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"N","N",(999901667),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Keyword(null,"max","max",(61366548)),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Keyword(null,"min","min",(444991522))], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"N","N",(999901667),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Keyword(null,"max","max",(61366548)),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Keyword(null,"min","min",(444991522))], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(709),(709),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"N","N",(999901667),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Keyword(null,"max","max",(61366548)),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Keyword(null,"min","min",(444991522))], null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.lex_partitions_H)?clojure.math.combinatorics.lex_partitions_H.cljs$lang$test:null)])));})()
;

clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__432){
var map__433 = p__432;
var map__433__$1 = ((((!((map__433 == null)))?((((map__433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__433.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__433):map__433);
var to = cljs.core.get.call(null,map__433__$1,new cljs.core.Keyword(null,"max","max",(61366548)));
var from = cljs.core.get.call(null,map__433__$1,new cljs.core.Keyword(null,"min","min",(444991522)));
if(cljs.core._EQ_.call(null,N,(0))){
if((((function (){var or__20817__auto__ = from;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__20817__auto__ = to;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return (0);
}
})()))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var from__$1 = (cljs.core.truth_((function (){var and__20770__auto__ = from;
if(cljs.core.truth_(and__20770__auto__)){
return (from <= (1));
} else {
return and__20770__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__20770__auto__ = to;
if(cljs.core.truth_(and__20770__auto__)){
return (to >= N);
} else {
return and__20770__auto__;
}
})())?null:to);
if(!((((1) <= (function (){var or__20817__auto__ = from__$1;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return (1);
}
})())) && ((((function (){var or__20817__auto__ = from__$1;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return (1);
}
})() <= (function (){var or__20817__auto__ = to__$1;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return N;
}
})())) && (((function (){var or__20817__auto__ = to__$1;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return N;
}
})() <= N))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.call(null,N,(0))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
if(cljs.core._EQ_.call(null,N,(1))){
return cljs.core.list(cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)));
} else {
if(cljs.core._EQ_.call(null,to__$1,(1))){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = cljs.core.range.call(null,N);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
} else {
var growth_strings = clojure.math.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);
var iter__23197__auto__ = ((function (growth_strings,from__$1,to__$1,map__433,map__433__$1,to,from){
return (function clojure$math$combinatorics$iter__435(s__436){
return (new cljs.core.LazySeq(null,((function (growth_strings,from__$1,to__$1,map__433,map__433__$1,to,from){
return (function (){
var s__436__$1 = s__436;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__436__$1);
if(temp__19834__auto__){
var s__436__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__436__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__436__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__438 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__437 = (0);
while(true){
if((i__437 < size__23196__auto__)){
var growth_string = cljs.core._nth.call(null,c__23195__auto__,i__437);
var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));
cljs.core.chunk_append.call(null,b__438,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));

var G__442 = (i__437 + (1));
i__437 = G__442;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__438),clojure$math$combinatorics$iter__435.call(null,cljs.core.chunk_rest.call(null,s__436__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__438),null);
}
} else {
var growth_string = cljs.core.first.call(null,s__436__$2);
var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));
return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),clojure$math$combinatorics$iter__435.call(null,cljs.core.rest.call(null,s__436__$2)));
}
} else {
return null;
}
break;
}
});})(growth_strings,from__$1,to__$1,map__433,map__433__$1,to,from))
,null,null));
});})(growth_strings,from__$1,to__$1,map__433,map__433__$1,to,from))
;
return iter__23197__auto__.call(null,growth_strings);

}
}
}
}
}
});

clojure.math.combinatorics.lex_partitions_H.cljs$lang$maxFixedArity = (1);

clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq430){
var G__431 = cljs.core.first.call(null,seq430);
var seq430__$1 = cljs.core.next.call(null,seq430);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic(G__431,seq430__$1);
});

new cljs.core.Var(function(){return clojure.math.combinatorics.lex_partitions_H;},new cljs.core.Symbol("clojure.math.combinatorics","lex-partitions-H","clojure.math.combinatorics/lex-partitions-H",(1489900071),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"lex-partitions-H","lex-partitions-H",(459680998),null),"clojure/math/combinatorics.cljc",(24),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"N","N",(999901667),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Keyword(null,"max","max",(61366548)),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Keyword(null,"min","min",(444991522))], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"N","N",(999901667),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Keyword(null,"max","max",(61366548)),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Keyword(null,"min","min",(444991522))], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(709),(709),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"N","N",(999901667),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Keyword(null,"max","max",(61366548)),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Keyword(null,"min","min",(444991522))], null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.lex_partitions_H)?clojure.math.combinatorics.lex_partitions_H.cljs$lang$test:null)]));
(function (){
clojure.math.combinatorics.partitions_H = (function clojure$math$combinatorics$partitions_H(var_args){
var args__23658__auto__ = [];
var len__23656__auto___465 = arguments.length;
var i__23657__auto___466 = (0);
while(true){
if((i__23657__auto___466 < len__23656__auto___465)){
args__23658__auto__.push((arguments[i__23657__auto___466]));

var G__467 = (i__23657__auto___466 + (1));
i__23657__auto___466 = G__467;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((1) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.partitions_H;},new cljs.core.Symbol("clojure.math.combinatorics","partitions-H","clojure.math.combinatorics/partitions-H",(745528518),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"partitions-H","partitions-H",(-293102971),null),"clojure/math/combinatorics.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"items","items",(-1622480831),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",(-1622480831),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(728),(728),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",(-1622480831),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.partitions_H)?clojure.math.combinatorics.partitions_H.cljs$lang$test:null)])));})()
;

clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
var items__$1 = cljs.core.vec.call(null,items);
var N = cljs.core.count.call(null,items__$1);
var lex = cljs.core.apply.call(null,clojure.math.combinatorics.lex_partitions_H,N,args);
var iter__23197__auto__ = ((function (items__$1,N,lex){
return (function clojure$math$combinatorics$iter__445(s__446){
return (new cljs.core.LazySeq(null,((function (items__$1,N,lex){
return (function (){
var s__446__$1 = s__446;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__446__$1);
if(temp__19834__auto__){
var s__446__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__446__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__446__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__448 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__447 = (0);
while(true){
if((i__447 < size__23196__auto__)){
var parts = cljs.core._nth.call(null,c__23195__auto__,i__447);
cljs.core.chunk_append.call(null,b__448,(function (){var iter__23197__auto__ = ((function (i__447,parts,c__23195__auto__,size__23196__auto__,b__448,s__446__$2,temp__19834__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__445_$_iter__457(s__458){
return (new cljs.core.LazySeq(null,((function (i__447,parts,c__23195__auto__,size__23196__auto__,b__448,s__446__$2,temp__19834__auto__,items__$1,N,lex){
return (function (){
var s__458__$1 = s__458;
while(true){
var temp__19834__auto____$1 = cljs.core.seq.call(null,s__458__$1);
if(temp__19834__auto____$1){
var s__458__$2 = temp__19834__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__458__$2)){
var c__23195__auto____$1 = cljs.core.chunk_first.call(null,s__458__$2);
var size__23196__auto____$1 = cljs.core.count.call(null,c__23195__auto____$1);
var b__460 = cljs.core.chunk_buffer.call(null,size__23196__auto____$1);
if((function (){var i__459 = (0);
while(true){
if((i__459 < size__23196__auto____$1)){
var part = cljs.core._nth.call(null,c__23195__auto____$1,i__459);
cljs.core.chunk_append.call(null,b__460,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__459,i__447,part,c__23195__auto____$1,size__23196__auto____$1,b__460,s__458__$2,temp__19834__auto____$1,parts,c__23195__auto__,size__23196__auto__,b__448,s__446__$2,temp__19834__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__459,i__447,part,c__23195__auto____$1,size__23196__auto____$1,b__460,s__458__$2,temp__19834__auto____$1,parts,c__23195__auto__,size__23196__auto__,b__448,s__446__$2,temp__19834__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));

var G__468 = (i__459 + (1));
i__459 = G__468;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__460),clojure$math$combinatorics$iter__445_$_iter__457.call(null,cljs.core.chunk_rest.call(null,s__458__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__460),null);
}
} else {
var part = cljs.core.first.call(null,s__458__$2);
return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__447,part,s__458__$2,temp__19834__auto____$1,parts,c__23195__auto__,size__23196__auto__,b__448,s__446__$2,temp__19834__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__447,part,s__458__$2,temp__19834__auto____$1,parts,c__23195__auto__,size__23196__auto__,b__448,s__446__$2,temp__19834__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__445_$_iter__457.call(null,cljs.core.rest.call(null,s__458__$2)));
}
} else {
return null;
}
break;
}
});})(i__447,parts,c__23195__auto__,size__23196__auto__,b__448,s__446__$2,temp__19834__auto__,items__$1,N,lex))
,null,null));
});})(i__447,parts,c__23195__auto__,size__23196__auto__,b__448,s__446__$2,temp__19834__auto__,items__$1,N,lex))
;
return iter__23197__auto__.call(null,parts);
})());

var G__469 = (i__447 + (1));
i__447 = G__469;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__448),clojure$math$combinatorics$iter__445.call(null,cljs.core.chunk_rest.call(null,s__446__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__448),null);
}
} else {
var parts = cljs.core.first.call(null,s__446__$2);
return cljs.core.cons.call(null,(function (){var iter__23197__auto__ = ((function (parts,s__446__$2,temp__19834__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__445_$_iter__461(s__462){
return (new cljs.core.LazySeq(null,((function (parts,s__446__$2,temp__19834__auto__,items__$1,N,lex){
return (function (){
var s__462__$1 = s__462;
while(true){
var temp__19834__auto____$1 = cljs.core.seq.call(null,s__462__$1);
if(temp__19834__auto____$1){
var s__462__$2 = temp__19834__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__462__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__462__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__464 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__463 = (0);
while(true){
if((i__463 < size__23196__auto__)){
var part = cljs.core._nth.call(null,c__23195__auto__,i__463);
cljs.core.chunk_append.call(null,b__464,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__463,part,c__23195__auto__,size__23196__auto__,b__464,s__462__$2,temp__19834__auto____$1,parts,s__446__$2,temp__19834__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__463,part,c__23195__auto__,size__23196__auto__,b__464,s__462__$2,temp__19834__auto____$1,parts,s__446__$2,temp__19834__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));

var G__470 = (i__463 + (1));
i__463 = G__470;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__464),clojure$math$combinatorics$iter__445_$_iter__461.call(null,cljs.core.chunk_rest.call(null,s__462__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__464),null);
}
} else {
var part = cljs.core.first.call(null,s__462__$2);
return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__462__$2,temp__19834__auto____$1,parts,s__446__$2,temp__19834__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__462__$2,temp__19834__auto____$1,parts,s__446__$2,temp__19834__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__445_$_iter__461.call(null,cljs.core.rest.call(null,s__462__$2)));
}
} else {
return null;
}
break;
}
});})(parts,s__446__$2,temp__19834__auto__,items__$1,N,lex))
,null,null));
});})(parts,s__446__$2,temp__19834__auto__,items__$1,N,lex))
;
return iter__23197__auto__.call(null,parts);
})(),clojure$math$combinatorics$iter__445.call(null,cljs.core.rest.call(null,s__446__$2)));
}
} else {
return null;
}
break;
}
});})(items__$1,N,lex))
,null,null));
});})(items__$1,N,lex))
;
return iter__23197__auto__.call(null,lex);
});

clojure.math.combinatorics.partitions_H.cljs$lang$maxFixedArity = (1);

clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq443){
var G__444 = cljs.core.first.call(null,seq443);
var seq443__$1 = cljs.core.next.call(null,seq443);
return clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic(G__444,seq443__$1);
});

new cljs.core.Var(function(){return clojure.math.combinatorics.partitions_H;},new cljs.core.Symbol("clojure.math.combinatorics","partitions-H","clojure.math.combinatorics/partitions-H",(745528518),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"partitions-H","partitions-H",(-293102971),null),"clojure/math/combinatorics.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"items","items",(-1622480831),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",(-1622480831),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(728),(728),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",(-1622480831),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.partitions_H)?clojure.math.combinatorics.partitions_H.cljs$lang$test:null)]));
(function (){
clojure.math.combinatorics.m5; return (
new cljs.core.Var(function(){return clojure.math.combinatorics.m5;},new cljs.core.Symbol("clojure.math.combinatorics","m5","clojure.math.combinatorics/m5",(-69162488),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"m5","m5",(944305225),null),"clojure/math/combinatorics.cljc",(12),(1),(769),true,(769),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.math.combinatorics.m5)?clojure.math.combinatorics.m5.cljs$lang$test:null)])));})()
;

(function (){
clojure.math.combinatorics.m6; return (
new cljs.core.Var(function(){return clojure.math.combinatorics.m6;},new cljs.core.Symbol("clojure.math.combinatorics","m6","clojure.math.combinatorics/m6",(-535047654),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"m6","m6",(-1649174309),null),"clojure/math/combinatorics.cljc",(15),(1),(769),true,(769),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.math.combinatorics.m6)?clojure.math.combinatorics.m6.cljs$lang$test:null)])));})()
;
(function (){
clojure.math.combinatorics.multiset_partitions_M = (function clojure$math$combinatorics$multiset_partitions_M(var_args){
var args471 = [];
var len__23656__auto___500 = arguments.length;
var i__23657__auto___501 = (0);
while(true){
if((i__23657__auto___501 < len__23656__auto___500)){
args471.push((arguments[i__23657__auto___501]));

var G__502 = (i__23657__auto___501 + (1));
i__23657__auto___501 = G__502;
continue;
} else {
}
break;
}

var G__473 = args471.length;
switch (G__473) {
case (3):
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (11):
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args471.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.multiset_partitions_M;},new cljs.core.Symbol("clojure.math.combinatorics","multiset-partitions-M","clojure.math.combinatorics/multiset-partitions-M",(-1065632262),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"multiset-partitions-M","multiset-partitions-M",(261355451),null),"clojure/math/combinatorics.cljc",(29),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(11),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"multiset","multiset",(-1319177230),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"u","u",(483896742),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"l","l",(-1258542346),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"multiset","multiset",(-1319177230),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"u","u",(483896742),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"l","l",(-1258542346),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(771),(771),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"multiset","multiset",(-1319177230),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"u","u",(483896742),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"l","l",(-1258542346),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.multiset_partitions_M)?clojure.math.combinatorics.multiset_partitions_M.cljs$lang$test:null)])));})()
;

clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3 = (function (multiset,r,s){
var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));
var m = cljs.core.count.call(null,multiset);
var f = cljs.core.PersistentVector.EMPTY;
var c = cljs.core.PersistentVector.EMPTY;
var u = cljs.core.PersistentVector.EMPTY;
var v = cljs.core.PersistentVector.EMPTY;
var vec__474 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.call(null,j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__504 = (j + (1));
var G__505 = cljs.core.assoc.call(null,c__$1,j,(j + (1)));
var G__506 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + (1))));
var G__507 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + (1))));
j = G__504;
c__$1 = G__505;
u__$1 = G__506;
v__$1 = G__507;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.call(null,vec__474,(0),null);
var u__$1 = cljs.core.nth.call(null,vec__474,(1),null);
var v__$1 = cljs.core.nth.call(null,vec__474,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.call(null,f,(0),(0),(1),m);
var stack = cljs.core.List.EMPTY;
return clojure.math.combinatorics.multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});

clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__477 = (function (){var j = a;
var k = b;
var x = false;
var u__$1 = u;
var v__$1 = v;
var c__$1 = c;
while(true){
if((j >= b)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else {
var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));
if(cljs.core._EQ_.call(null,u__$2.call(null,k),(0))){
var G__508 = (j + (1));
var G__509 = k;
var G__510 = true;
var G__511 = u__$2;
var G__512 = v__$1;
var G__513 = c__$1;
j = G__508;
k = G__509;
x = G__510;
u__$1 = G__511;
v__$1 = G__512;
c__$1 = G__513;
continue;
} else {
if(!(x)){
var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));
var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__21649__auto__ = v__$1.call(null,j);
var y__21650__auto__ = u__$2.call(null,k);
return ((x__21649__auto__ < y__21650__auto__) ? x__21649__auto__ : y__21650__auto__);
})());
var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__514 = j__$1;
var G__515 = k__$1;
var G__516 = x__$1;
var G__517 = u__$2;
var G__518 = v__$2;
var G__519 = c__$2;
j = G__514;
k = G__515;
x = G__516;
u__$1 = G__517;
v__$1 = G__518;
c__$1 = G__519;
continue;
} else {
var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));
var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__520 = j__$1;
var G__521 = k__$1;
var G__522 = x;
var G__523 = u__$2;
var G__524 = v__$2;
var G__525 = c__$2;
j = G__520;
k = G__521;
x = G__522;
u__$1 = G__523;
v__$1 = G__524;
c__$1 = G__525;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.call(null,vec__477,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__477,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__477,(2),null);
var j = cljs.core.nth.call(null,vec__477,(3),null);
var k = cljs.core.nth.call(null,vec__477,(4),null);
if(cljs.core.truth_((function (){var and__20770__auto__ = r;
if(cljs.core.truth_(and__20770__auto__)){
return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - (1))));
} else {
return and__20770__auto__;
}
})())){
return clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else {
if(cljs.core.truth_((function (){var and__20770__auto__ = s;
if(cljs.core.truth_(and__20770__auto__)){
return ((k <= b)) && (((l + (1)) < s));
} else {
return and__20770__auto__;
}
})())){
return clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else {
if((k > b)){
var a__$1 = b;
var b__$1 = k;
var l__$1 = (l + (1));
var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + (1)),b__$1);
var G__526 = n;
var G__527 = m;
var G__528 = f__$1;
var G__529 = c__$1;
var G__530 = u__$1;
var G__531 = v__$1;
var G__532 = a__$1;
var G__533 = b__$1;
var G__534 = l__$1;
var G__535 = r;
var G__536 = s;
n = G__526;
m = G__527;
f = G__528;
c = G__529;
u = G__530;
v = G__531;
a = G__532;
b = G__533;
l = G__534;
r = G__535;
s = G__536;
continue;
} else {
var part = (function (){var iter__23197__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__477,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__480(s__481){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__477,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__481__$1 = s__481;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__481__$1);
if(temp__19834__auto__){
var s__481__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__481__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__481__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__483 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__482 = (0);
while(true){
if((i__482 < size__23196__auto__)){
var y = cljs.core._nth.call(null,c__23195__auto__,i__482);
cljs.core.chunk_append.call(null,b__483,(function (){var first_col = f.call(null,y);
var last_col = (f.call(null,(y + (1))) - (1));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__23197__auto__ = ((function (i__482,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__23195__auto__,size__23196__auto__,b__483,s__481__$2,temp__19834__auto__,vec__477,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__480_$_iter__492(s__493){
return (new cljs.core.LazySeq(null,((function (i__482,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__23195__auto__,size__23196__auto__,b__483,s__481__$2,temp__19834__auto__,vec__477,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__493__$1 = s__493;
while(true){
var temp__19834__auto____$1 = cljs.core.seq.call(null,s__493__$1);
if(temp__19834__auto____$1){
var s__493__$2 = temp__19834__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__493__$2)){
var c__23195__auto____$1 = cljs.core.chunk_first.call(null,s__493__$2);
var size__23196__auto____$1 = cljs.core.count.call(null,c__23195__auto____$1);
var b__495 = cljs.core.chunk_buffer.call(null,size__23196__auto____$1);
if((function (){var i__494 = (0);
while(true){
if((i__494 < size__23196__auto____$1)){
var z = cljs.core._nth.call(null,c__23195__auto____$1,i__494);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
cljs.core.chunk_append.call(null,b__495,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));

var G__537 = (i__494 + (1));
i__494 = G__537;
continue;
} else {
var G__538 = (i__494 + (1));
i__494 = G__538;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__495),clojure$math$combinatorics$iter__480_$_iter__492.call(null,cljs.core.chunk_rest.call(null,s__493__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__495),null);
}
} else {
var z = cljs.core.first.call(null,s__493__$2);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),clojure$math$combinatorics$iter__480_$_iter__492.call(null,cljs.core.rest.call(null,s__493__$2)));
} else {
var G__539 = cljs.core.rest.call(null,s__493__$2);
s__493__$1 = G__539;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__482,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__23195__auto__,size__23196__auto__,b__483,s__481__$2,temp__19834__auto__,vec__477,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__482,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__23195__auto__,size__23196__auto__,b__483,s__481__$2,temp__19834__auto__,vec__477,u__$1,v__$1,c__$1,j,k))
;
return iter__23197__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + (1))));
})());
})());

var G__540 = (i__482 + (1));
i__482 = G__540;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__483),clojure$math$combinatorics$iter__480.call(null,cljs.core.chunk_rest.call(null,s__481__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__483),null);
}
} else {
var y = cljs.core.first.call(null,s__481__$2);
return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);
var last_col = (f.call(null,(y + (1))) - (1));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__23197__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__481__$2,temp__19834__auto__,vec__477,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__480_$_iter__496(s__497){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__481__$2,temp__19834__auto__,vec__477,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__497__$1 = s__497;
while(true){
var temp__19834__auto____$1 = cljs.core.seq.call(null,s__497__$1);
if(temp__19834__auto____$1){
var s__497__$2 = temp__19834__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__497__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__497__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__499 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__498 = (0);
while(true){
if((i__498 < size__23196__auto__)){
var z = cljs.core._nth.call(null,c__23195__auto__,i__498);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
cljs.core.chunk_append.call(null,b__499,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));

var G__541 = (i__498 + (1));
i__498 = G__541;
continue;
} else {
var G__542 = (i__498 + (1));
i__498 = G__542;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__499),clojure$math$combinatorics$iter__480_$_iter__496.call(null,cljs.core.chunk_rest.call(null,s__497__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__499),null);
}
} else {
var z = cljs.core.first.call(null,s__497__$2);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),clojure$math$combinatorics$iter__480_$_iter__496.call(null,cljs.core.rest.call(null,s__497__$2)));
} else {
var G__543 = cljs.core.rest.call(null,s__497__$2);
s__497__$1 = G__543;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__481__$2,temp__19834__auto__,vec__477,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__481__$2,temp__19834__auto__,vec__477,u__$1,v__$1,c__$1,j,k))
;
return iter__23197__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + (1))));
})());
})(),clojure$math$combinatorics$iter__480.call(null,cljs.core.rest.call(null,s__481__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__477,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__477,u__$1,v__$1,c__$1,j,k))
;
return iter__23197__auto__.call(null,cljs.core.range.call(null,(l + (1))));
})();
return cljs.core.cons.call(null,part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__477,u__$1,v__$1,c__$1,j,k){
return (function (){
return clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__477,u__$1,v__$1,c__$1,j,k))
,null,null)));

}
}
}
break;
}
});

clojure.math.combinatorics.multiset_partitions_M.cljs$lang$maxFixedArity = (11);

new cljs.core.Var(function(){return clojure.math.combinatorics.multiset_partitions_M;},new cljs.core.Symbol("clojure.math.combinatorics","multiset-partitions-M","clojure.math.combinatorics/multiset-partitions-M",(-1065632262),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"multiset-partitions-M","multiset-partitions-M",(261355451),null),"clojure/math/combinatorics.cljc",(29),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(11),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"multiset","multiset",(-1319177230),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"u","u",(483896742),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"l","l",(-1258542346),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"multiset","multiset",(-1319177230),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"u","u",(483896742),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"l","l",(-1258542346),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(771),(771),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"multiset","multiset",(-1319177230),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"u","u",(483896742),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"l","l",(-1258542346),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.multiset_partitions_M)?clojure.math.combinatorics.multiset_partitions_M.cljs$lang$test:null)]));
(function (){
clojure.math.combinatorics.m5 = (function clojure$math$combinatorics$m5(n,m,f,c,u,v,a,b,l,r,s){
var j = (function (){var j = (b - (1));
while(true){
if(cljs.core.not_EQ_.call(null,v.call(null,j),(0))){
return j;
} else {
var G__552 = (j - (1));
j = G__552;
continue;
}
break;
}
})();
if(cljs.core.truth_((function (){var and__20770__auto__ = r;
if(cljs.core.truth_(and__20770__auto__)){
return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - (1)) * (r - l)) < u.call(null,j)));
} else {
return and__20770__auto__;
}
})())){
return clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else {
if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),(1)))){
return clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else {
var v__$1 = clojure.math.combinatorics.update.call(null,v,j,cljs.core.dec);
var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__23197__auto__ = ((function (v__$1,j){
return (function clojure$math$combinatorics$m5_$_iter__548(s__549){
return (new cljs.core.LazySeq(null,((function (v__$1,j){
return (function (){
var s__549__$1 = s__549;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__549__$1);
if(temp__19834__auto__){
var s__549__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__549__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__549__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__551 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__550 = (0);
while(true){
if((i__550 < size__23196__auto__)){
var i = cljs.core._nth.call(null,c__23195__auto__,i__550);
cljs.core.chunk_append.call(null,b__551,(u.call(null,i) - v__$1.call(null,i)));

var G__553 = (i__550 + (1));
i__550 = G__553;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__551),clojure$math$combinatorics$m5_$_iter__548.call(null,cljs.core.chunk_rest.call(null,s__549__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__551),null);
}
} else {
var i = cljs.core.first.call(null,s__549__$2);
return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),clojure$math$combinatorics$m5_$_iter__548.call(null,cljs.core.rest.call(null,s__549__$2)));
}
} else {
return null;
}
break;
}
});})(v__$1,j))
,null,null));
});})(v__$1,j))
;
return iter__23197__auto__.call(null,cljs.core.range.call(null,a,(j + (1))));
})()):null);
var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + (1)),b);
var v__$2 = v__$1;
while(true){
if(cljs.core.empty_QMARK_.call(null,ks)){
return v__$2;
} else {
var k = cljs.core.first.call(null,ks);
var G__554 = cljs.core.rest.call(null,ks);
var G__555 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__554;
v__$2 = G__555;
continue;
}
break;
}
})();
var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + (1))):(0));
var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__21615__auto__ = (0);
var y__21616__auto__ = (min_partitions_after_this - diff_uv);
return ((x__21615__auto__ > y__21616__auto__) ? x__21615__auto__ : y__21616__auto__);
})():(0));
var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,(0)))?v__$2:(function (){var k_1 = (b - (1));
var v__$3 = v__$2;
var amount = amount_to_dec;
while(true){
var vk = v__$3.call(null,k_1);
if((amount > vk)){
var G__556 = (k_1 - (1));
var G__557 = cljs.core.assoc.call(null,v__$3,k_1,(0));
var G__558 = (amount - vk);
k_1 = G__556;
v__$3 = G__557;
amount = G__558;
continue;
} else {
return cljs.core.assoc.call(null,v__$3,k_1,(vk - amount));
}
break;
}
})());
return clojure.math.combinatorics.multiset_partitions_M.call(null,n,m,f,c,u,v__$3,a,b,l,r,s);

}
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.m5;},new cljs.core.Symbol("clojure.math.combinatorics","m5","clojure.math.combinatorics/m5",(-69162488),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"m5","m5",(944305225),null),"clojure/math/combinatorics.cljc",(10),(1),(833),(833),cljs.core.list(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"u","u",(483896742),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"l","l",(-1258542346),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.m5)?clojure.math.combinatorics.m5.cljs$lang$test:null)])));})()
;
(function (){
clojure.math.combinatorics.m6 = (function clojure$math$combinatorics$m6(n,m,f,c,u,v,a,b,l,r,s){
if(cljs.core._EQ_.call(null,l,(0))){
return cljs.core.List.EMPTY;
} else {
var l__$1 = (l - (1));
var b__$1 = a;
var a__$1 = f.call(null,l__$1);
return clojure.math.combinatorics.m5.call(null,n,m,f,c,u,v,a__$1,b__$1,l__$1,r,s);
}
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.m6;},new cljs.core.Symbol("clojure.math.combinatorics","m6","clojure.math.combinatorics/m6",(-535047654),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"m6","m6",(-1649174309),null),"clojure/math/combinatorics.cljc",(10),(1),(870),(870),cljs.core.list(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"u","u",(483896742),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"l","l",(-1258542346),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.m6)?clojure.math.combinatorics.m6.cljs$lang$test:null)])));})()
;
(function (){
clojure.math.combinatorics.partitions_M = (function clojure$math$combinatorics$partitions_M(var_args){
var args__23658__auto__ = [];
var len__23656__auto___652 = arguments.length;
var i__23657__auto___653 = (0);
while(true){
if((i__23657__auto___653 < len__23656__auto___652)){
args__23658__auto__.push((arguments[i__23657__auto___653]));

var G__654 = (i__23657__auto___653 + (1));
i__23657__auto___653 = G__654;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((1) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.partitions_M;},new cljs.core.Symbol("clojure.math.combinatorics","partitions-M","clojure.math.combinatorics/partitions-M",(116018245),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"partitions-M","partitions-M",(1501727108),null),"clojure/math/combinatorics.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"items","items",(-1622480831),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Keyword(null,"max","max",(61366548)),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Keyword(null,"min","min",(444991522))], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",(-1622480831),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Keyword(null,"max","max",(61366548)),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Keyword(null,"min","min",(444991522))], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(879),(879),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",(-1622480831),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Keyword(null,"max","max",(61366548)),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Keyword(null,"min","min",(444991522))], null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.partitions_M)?clojure.math.combinatorics.partitions_M.cljs$lang$test:null)])));})()
;

clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__561){
var map__562 = p__561;
var map__562__$1 = ((((!((map__562 == null)))?((((map__562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__562.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__562):map__562);
var to = cljs.core.get.call(null,map__562__$1,new cljs.core.Keyword(null,"max","max",(61366548)));
var from = cljs.core.get.call(null,map__562__$1,new cljs.core.Keyword(null,"min","min",(444991522)));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),(0))){
if((((function (){var or__20817__auto__ = from;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__20817__auto__ = to;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return (0);
}
})()))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var items__$1 = cljs.core.vec.call(null,items);
var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));
var freqs = cljs.core.frequencies.call(null,items__$1);
var N = cljs.core.count.call(null,items__$1);
var M = cljs.core.count.call(null,ditems);
var from__$1 = (cljs.core.truth_((function (){var and__20770__auto__ = from;
if(cljs.core.truth_(and__20770__auto__)){
return (from <= (1));
} else {
return and__20770__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__20770__auto__ = to;
if(cljs.core.truth_(and__20770__auto__)){
return (to >= N);
} else {
return and__20770__auto__;
}
})())?null:to);
if(!((((1) <= (function (){var or__20817__auto__ = from__$1;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return (1);
}
})())) && ((((function (){var or__20817__auto__ = from__$1;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return (1);
}
})() <= (function (){var or__20817__auto__ = to__$1;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return N;
}
})())) && (((function (){var or__20817__auto__ = to__$1;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return N;
}
})() <= N))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.call(null,N,(1))){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = cljs.core.first.call(null,items__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
} else {
var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__23197__auto__ = ((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__562,map__562__$1,to,from){
return (function clojure$math$combinatorics$iter__564(s__565){
return (new cljs.core.LazySeq(null,((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__562,map__562__$1,to,from){
return (function (){
var s__565__$1 = s__565;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__565__$1);
if(temp__19834__auto__){
var s__565__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__565__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__565__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__567 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__566 = (0);
while(true){
if((i__566 < size__23196__auto__)){
var i = cljs.core._nth.call(null,c__23195__auto__,i__566);
var j = (i + (1));
cljs.core.chunk_append.call(null,b__567,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));

var G__655 = (i__566 + (1));
i__566 = G__655;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__567),clojure$math$combinatorics$iter__564.call(null,cljs.core.chunk_rest.call(null,s__565__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__567),null);
}
} else {
var i = cljs.core.first.call(null,s__565__$2);
var j = (i + (1));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),clojure$math$combinatorics$iter__564.call(null,cljs.core.rest.call(null,s__565__$2)));
}
} else {
return null;
}
break;
}
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__562,map__562__$1,to,from))
,null,null));
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__562,map__562__$1,to,from))
;
return iter__23197__auto__.call(null,cljs.core.range.call(null,M));
})());
var parts = clojure.math.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);
var iter__23197__auto__ = ((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__562,map__562__$1,to,from){
return (function clojure$math$combinatorics$iter__568(s__569){
return (new cljs.core.LazySeq(null,((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__562,map__562__$1,to,from){
return (function (){
var s__569__$1 = s__569;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__569__$1);
if(temp__19834__auto__){
var s__569__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__569__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__569__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__571 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__570 = (0);
while(true){
if((i__570 < size__23196__auto__)){
var part = cljs.core._nth.call(null,c__23195__auto__,i__570);
cljs.core.chunk_append.call(null,b__571,(function (){var iter__23197__auto__ = ((function (i__570,part,c__23195__auto__,size__23196__auto__,b__571,s__569__$2,temp__19834__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__562,map__562__$1,to,from){
return (function clojure$math$combinatorics$iter__568_$_iter__612(s__613){
return (new cljs.core.LazySeq(null,((function (i__570,part,c__23195__auto__,size__23196__auto__,b__571,s__569__$2,temp__19834__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__562,map__562__$1,to,from){
return (function (){
var s__613__$1 = s__613;
while(true){
var temp__19834__auto____$1 = cljs.core.seq.call(null,s__613__$1);
if(temp__19834__auto____$1){
var s__613__$2 = temp__19834__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__613__$2)){
var c__23195__auto____$1 = cljs.core.chunk_first.call(null,s__613__$2);
var size__23196__auto____$1 = cljs.core.count.call(null,c__23195__auto____$1);
var b__615 = cljs.core.chunk_buffer.call(null,size__23196__auto____$1);
if((function (){var i__614 = (0);
while(true){
if((i__614 < size__23196__auto____$1)){
var multiset = cljs.core._nth.call(null,c__23195__auto____$1,i__614);
cljs.core.chunk_append.call(null,b__615,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__614,i__570,multiset,c__23195__auto____$1,size__23196__auto____$1,b__615,s__613__$2,temp__19834__auto____$1,part,c__23195__auto__,size__23196__auto__,b__571,s__569__$2,temp__19834__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__562,map__562__$1,to,from){
return (function (p__624){
var vec__625 = p__624;
var index = cljs.core.nth.call(null,vec__625,(0),null);
var numtimes = cljs.core.nth.call(null,vec__625,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__614,i__570,multiset,c__23195__auto____$1,size__23196__auto____$1,b__615,s__613__$2,temp__19834__auto____$1,part,c__23195__auto__,size__23196__auto__,b__571,s__569__$2,temp__19834__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__562,map__562__$1,to,from))
,multiset)));

var G__656 = (i__614 + (1));
i__614 = G__656;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__615),clojure$math$combinatorics$iter__568_$_iter__612.call(null,cljs.core.chunk_rest.call(null,s__613__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__615),null);
}
} else {
var multiset = cljs.core.first.call(null,s__613__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__570,multiset,s__613__$2,temp__19834__auto____$1,part,c__23195__auto__,size__23196__auto__,b__571,s__569__$2,temp__19834__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__562,map__562__$1,to,from){
return (function (p__628){
var vec__629 = p__628;
var index = cljs.core.nth.call(null,vec__629,(0),null);
var numtimes = cljs.core.nth.call(null,vec__629,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__570,multiset,s__613__$2,temp__19834__auto____$1,part,c__23195__auto__,size__23196__auto__,b__571,s__569__$2,temp__19834__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__562,map__562__$1,to,from))
,multiset)),clojure$math$combinatorics$iter__568_$_iter__612.call(null,cljs.core.rest.call(null,s__613__$2)));
}
} else {
return null;
}
break;
}
});})(i__570,part,c__23195__auto__,size__23196__auto__,b__571,s__569__$2,temp__19834__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__562,map__562__$1,to,from))
,null,null));
});})(i__570,part,c__23195__auto__,size__23196__auto__,b__571,s__569__$2,temp__19834__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__562,map__562__$1,to,from))
;
return iter__23197__auto__.call(null,part);
})());

var G__657 = (i__570 + (1));
i__570 = G__657;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__571),clojure$math$combinatorics$iter__568.call(null,cljs.core.chunk_rest.call(null,s__569__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__571),null);
}
} else {
var part = cljs.core.first.call(null,s__569__$2);
return cljs.core.cons.call(null,(function (){var iter__23197__auto__ = ((function (part,s__569__$2,temp__19834__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__562,map__562__$1,to,from){
return (function clojure$math$combinatorics$iter__568_$_iter__632(s__633){
return (new cljs.core.LazySeq(null,((function (part,s__569__$2,temp__19834__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__562,map__562__$1,to,from){
return (function (){
var s__633__$1 = s__633;
while(true){
var temp__19834__auto____$1 = cljs.core.seq.call(null,s__633__$1);
if(temp__19834__auto____$1){
var s__633__$2 = temp__19834__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__633__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__633__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__635 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__634 = (0);
while(true){
if((i__634 < size__23196__auto__)){
var multiset = cljs.core._nth.call(null,c__23195__auto__,i__634);
cljs.core.chunk_append.call(null,b__635,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__634,multiset,c__23195__auto__,size__23196__auto__,b__635,s__633__$2,temp__19834__auto____$1,part,s__569__$2,temp__19834__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__562,map__562__$1,to,from){
return (function (p__644){
var vec__645 = p__644;
var index = cljs.core.nth.call(null,vec__645,(0),null);
var numtimes = cljs.core.nth.call(null,vec__645,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__634,multiset,c__23195__auto__,size__23196__auto__,b__635,s__633__$2,temp__19834__auto____$1,part,s__569__$2,temp__19834__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__562,map__562__$1,to,from))
,multiset)));

var G__658 = (i__634 + (1));
i__634 = G__658;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__635),clojure$math$combinatorics$iter__568_$_iter__632.call(null,cljs.core.chunk_rest.call(null,s__633__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__635),null);
}
} else {
var multiset = cljs.core.first.call(null,s__633__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__633__$2,temp__19834__auto____$1,part,s__569__$2,temp__19834__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__562,map__562__$1,to,from){
return (function (p__648){
var vec__649 = p__648;
var index = cljs.core.nth.call(null,vec__649,(0),null);
var numtimes = cljs.core.nth.call(null,vec__649,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(multiset,s__633__$2,temp__19834__auto____$1,part,s__569__$2,temp__19834__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__562,map__562__$1,to,from))
,multiset)),clojure$math$combinatorics$iter__568_$_iter__632.call(null,cljs.core.rest.call(null,s__633__$2)));
}
} else {
return null;
}
break;
}
});})(part,s__569__$2,temp__19834__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__562,map__562__$1,to,from))
,null,null));
});})(part,s__569__$2,temp__19834__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__562,map__562__$1,to,from))
;
return iter__23197__auto__.call(null,part);
})(),clojure$math$combinatorics$iter__568.call(null,cljs.core.rest.call(null,s__569__$2)));
}
} else {
return null;
}
break;
}
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__562,map__562__$1,to,from))
,null,null));
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__562,map__562__$1,to,from))
;
return iter__23197__auto__.call(null,parts);

}
}
}
});

clojure.math.combinatorics.partitions_M.cljs$lang$maxFixedArity = (1);

clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq559){
var G__560 = cljs.core.first.call(null,seq559);
var seq559__$1 = cljs.core.next.call(null,seq559);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic(G__560,seq559__$1);
});

new cljs.core.Var(function(){return clojure.math.combinatorics.partitions_M;},new cljs.core.Symbol("clojure.math.combinatorics","partitions-M","clojure.math.combinatorics/partitions-M",(116018245),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"partitions-M","partitions-M",(1501727108),null),"clojure/math/combinatorics.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"items","items",(-1622480831),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Keyword(null,"max","max",(61366548)),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Keyword(null,"min","min",(444991522))], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",(-1622480831),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Keyword(null,"max","max",(61366548)),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Keyword(null,"min","min",(444991522))], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(879),(879),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",(-1622480831),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"to","to",(1832630534),null),new cljs.core.Keyword(null,"max","max",(61366548)),new cljs.core.Symbol(null,"from","from",(-839142725),null),new cljs.core.Keyword(null,"min","min",(444991522))], null)], null)),null,(cljs.core.truth_(clojure.math.combinatorics.partitions_M)?clojure.math.combinatorics.partitions_M.cljs$lang$test:null)]));
/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
(function (){
clojure.math.combinatorics.partitions = (function clojure$math$combinatorics$partitions(var_args){
var args__23658__auto__ = [];
var len__23656__auto___661 = arguments.length;
var i__23657__auto___662 = (0);
while(true){
if((i__23657__auto___662 < len__23656__auto___661)){
args__23658__auto__.push((arguments[i__23657__auto___662]));

var G__663 = (i__23657__auto___662 + (1));
i__23657__auto___662 = G__663;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((1) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return clojure.math.combinatorics.partitions;},new cljs.core.Symbol("clojure.math.combinatorics","partitions","clojure.math.combinatorics/partitions",(1196497222),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"partitions","partitions",(-2051456255),null),"clojure/math/combinatorics.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"items","items",(-1622480831),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",(-1622480831),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(905),(905),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",(-1622480831),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"All the lexicographic distinct partitions of items.\n    Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.",(cljs.core.truth_(clojure.math.combinatorics.partitions)?clojure.math.combinatorics.partitions.cljs$lang$test:null)])));})()
;

clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),(0))){
return cljs.core.apply.call(null,clojure.math.combinatorics.partitions_H,items,args);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return cljs.core.apply.call(null,clojure.math.combinatorics.partitions_H,items,args);
} else {
return cljs.core.apply.call(null,clojure.math.combinatorics.partitions_M,items,args);

}
}
});

clojure.math.combinatorics.partitions.cljs$lang$maxFixedArity = (1);

clojure.math.combinatorics.partitions.cljs$lang$applyTo = (function (seq659){
var G__660 = cljs.core.first.call(null,seq659);
var seq659__$1 = cljs.core.next.call(null,seq659);
return clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic(G__660,seq659__$1);
});

new cljs.core.Var(function(){return clojure.math.combinatorics.partitions;},new cljs.core.Symbol("clojure.math.combinatorics","partitions","clojure.math.combinatorics/partitions",(1196497222),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.math.combinatorics","clojure.math.combinatorics",(-1751590034),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",(2111686192)),"Mark Engelberg",new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Efficient, functional algorithms for generating lazy\nsequences for common combinatorial functions. (See the source code \nfor a longer description.)"], null)),new cljs.core.Symbol(null,"partitions","partitions",(-2051456255),null),"clojure/math/combinatorics.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"items","items",(-1622480831),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",(-1622480831),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(905),(905),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",(-1622480831),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"All the lexicographic distinct partitions of items.\n    Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.",(cljs.core.truth_(clojure.math.combinatorics.partitions)?clojure.math.combinatorics.partitions.cljs$lang$test:null)]));
