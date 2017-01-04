goog.provide("clojure.test.check.generators");

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
clojure.test.check.generators.Generator = (function (gen,__meta,__extmap,__hash){
this.gen = gen;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
clojure.test.check.generators.Generator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22669__auto__,k__22670__auto__){
var self__ = this;
var this__22669__auto____$1 = this;
return cljs.core._lookup.call(null,this__22669__auto____$1,k__22670__auto__,null);
});

clojure.test.check.generators.Generator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22671__auto__,k73,else__22672__auto__){
var self__ = this;
var this__22671__auto____$1 = this;
var G__75 = (((k73 instanceof cljs.core.Keyword))?k73.fqn:null);
switch (G__75) {
case "gen":
return self__.gen;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k73,else__22672__auto__);

}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22689__auto__,writer__22690__auto__,opts__22691__auto__){
var self__ = this;
var this__22689__auto____$1 = this;
var pr_pair__22692__auto__ = ((function (this__22689__auto____$1){
return (function (keyval__22693__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22690__auto__,cljs.core.pr_writer,""," ","",opts__22691__auto__,keyval__22693__auto__);
});})(this__22689__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22690__auto__,pr_pair__22692__auto__,"#clojure.test.check.generators.Generator{",", ","}",opts__22691__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gen","gen",(142575302)),self__.gen],null))], null),self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

clojure.test.check.generators.Generator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__72){
var self__ = this;
var G__72__$1 = this;
return (new cljs.core.RecordIter((0),G__72__$1,(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen","gen",(142575302))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22667__auto__){
var self__ = this;
var this__22667__auto____$1 = this;
return self__.__meta;
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22663__auto__){
var self__ = this;
var this__22663__auto____$1 = this;
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,self__.__extmap,self__.__hash));
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22673__auto__){
var self__ = this;
var this__22673__auto____$1 = this;
return ((1) + cljs.core.count.call(null,self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22664__auto__){
var self__ = this;
var this__22664__auto____$1 = this;
var h__21845__auto__ = self__.__hash;
if(!((h__21845__auto__ == null))){
return h__21845__auto__;
} else {
var h__21845__auto____$1 = cljs.core.hash_imap.call(null,this__22664__auto____$1);
self__.__hash = h__21845__auto____$1;

return h__21845__auto____$1;
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22665__auto__,other__22666__auto__){
var self__ = this;
var this__22665__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20770__auto__ = other__22666__auto__;
if(cljs.core.truth_(and__20770__auto__)){
var and__20770__auto____$1 = (this__22665__auto____$1.constructor === other__22666__auto__.constructor);
if(and__20770__auto____$1){
return cljs.core.equiv_map.call(null,this__22665__auto____$1,other__22666__auto__);
} else {
return and__20770__auto____$1;
}
} else {
return and__20770__auto__;
}
})())){
return true;
} else {
return false;
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22679__auto__,k__22680__auto__){
var self__ = this;
var this__22679__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gen","gen",(142575302)),null], null), null),k__22680__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22679__auto____$1),self__.__meta),k__22680__auto__);
} else {
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22680__auto__)),null));
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22677__auto__,k__22678__auto__,G__72){
var self__ = this;
var this__22677__auto____$1 = this;
var pred__76 = cljs.core.keyword_identical_QMARK_;
var expr__77 = k__22678__auto__;
if(cljs.core.truth_(pred__76.call(null,new cljs.core.Keyword(null,"gen","gen",(142575302)),expr__77))){
return (new clojure.test.check.generators.Generator(G__72,self__.__meta,self__.__extmap,null));
} else {
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22678__auto__,G__72),null));
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22683__auto__){
var self__ = this;
var this__22683__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gen","gen",(142575302)),self__.gen],null))], null),self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22668__auto__,G__72){
var self__ = this;
var this__22668__auto____$1 = this;
return (new clojure.test.check.generators.Generator(self__.gen,G__72,self__.__extmap,self__.__hash));
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22674__auto__,entry__22675__auto__){
var self__ = this;
var this__22674__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22675__auto__)){
return cljs.core._assoc.call(null,this__22674__auto____$1,cljs.core._nth.call(null,entry__22675__auto__,(0)),cljs.core._nth.call(null,entry__22675__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22674__auto____$1,entry__22675__auto__);
}
});

clojure.test.check.generators.Generator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null);
});

clojure.test.check.generators.Generator.cljs$lang$type = true;

clojure.test.check.generators.Generator.cljs$lang$ctorPrSeq = (function (this__23044__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"clojure.test.check.generators/Generator");
});

clojure.test.check.generators.Generator.cljs$lang$ctorPrWriter = (function (this__23044__auto__,writer__23045__auto__){
return cljs.core._write.call(null,writer__23045__auto__,"clojure.test.check.generators/Generator");
});

(function (){
clojure.test.check.generators.__GT_Generator = (function clojure$test$check$generators$__GT_Generator(gen){
return (new clojure.test.check.generators.Generator(gen,null,null,null));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.__GT_Generator;},new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",(-1179475051),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"->Generator","->Generator",(-830088035),null),"clojure/test/check/generators.cljc",(21),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(27),(27),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.__GT_Generator)?clojure.test.check.generators.__GT_Generator.cljs$lang$test:null)])));})()
;

(function (){
clojure.test.check.generators.map__GT_Generator = (function clojure$test$check$generators$map__GT_Generator(G__74){
return (new clojure.test.check.generators.Generator(new cljs.core.Keyword(null,"gen","gen",(142575302)).cljs$core$IFn$_invoke$arity$1(G__74),null,cljs.core.dissoc.call(null,G__74,new cljs.core.Keyword(null,"gen","gen",(142575302))),null));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.map__GT_Generator;},new cljs.core.Symbol("clojure.test.check.generators","map->Generator","clojure.test.check.generators/map->Generator",(202687900),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"map->Generator","map->Generator",(-1679038316),null),"clojure/test/check/generators.cljc",(21),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(27),(27),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__74","G__74",(-214555830),null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.map__GT_Generator)?clojure.test.check.generators.map__GT_Generator.cljs$lang$test:null)])));})()
;

/**
 * Test if `x` is a generator. Generators should be treated as opaque values.
 */
(function (){
clojure.test.check.generators.generator_QMARK_ = (function clojure$test$check$generators$generator_QMARK_(x){
return (x instanceof clojure.test.check.generators.Generator);
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.generator_QMARK_;},new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",(-1378210460),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"generator?","generator?",(522926188),null),"clojure/test/check/generators.cljc",(17),(1),(29),(29),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Test if `x` is a generator. Generators should be treated as opaque values.",(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_)?clojure.test.check.generators.generator_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.make_gen = (function clojure$test$check$generators$make_gen(generator_fn){
return (new clojure.test.check.generators.Generator(generator_fn,null,null,null));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.make_gen;},new cljs.core.Symbol("clojure.test.check.generators","make-gen","clojure.test.check.generators/make-gen",(1411502136),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"make-gen","make-gen",(-445717712),null),"clojure/test/check/generators.cljc",(16),(1),(34),(34),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator-fn","generator-fn",(-1842584113),null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.make_gen)?clojure.test.check.generators.make_gen.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.call_gen = (function clojure$test$check$generators$call_gen(p__80,rnd,size){
var map__83 = p__80;
var map__83__$1 = ((((!((map__83 == null)))?((((map__83.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83):map__83);
var generator_fn = cljs.core.get.call(null,map__83__$1,new cljs.core.Keyword(null,"gen","gen",(142575302)));
return generator_fn.call(null,rnd,size);
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.call_gen;},new cljs.core.Symbol("clojure.test.check.generators","call-gen","clojure.test.check.generators/call-gen",(444034274),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"no-doc","no-doc",(1559921891)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"call-gen","call-gen",(-2002365446),null),"clojure/test/check/generators.cljc",(15),(1),(38),(38),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"generator-fn","generator-fn",(-1842584113),null),new cljs.core.Keyword(null,"gen","gen",(142575302))], null),new cljs.core.Symbol(null,"rnd","rnd",(106183480),null),new cljs.core.Symbol(null,"size","size",(-1555742762),null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.call_gen)?clojure.test.check.generators.call_gen.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.gen_pure = (function clojure$test$check$generators$gen_pure(value){
return clojure.test.check.generators.make_gen.call(null,(function (rnd,size){
return value;
}));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.gen_pure;},new cljs.core.Symbol("clojure.test.check.generators","gen-pure","clojure.test.check.generators/gen-pure",(1070005925),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"no-doc","no-doc",(1559921891)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"gen-pure","gen-pure",(-1323841107),null),"clojure/test/check/generators.cljc",(15),(1),(43),(43),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.gen_pure)?clojure.test.check.generators.gen_pure.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.gen_fmap = (function clojure$test$check$generators$gen_fmap(k,p__85){
var map__88 = p__85;
var map__88__$1 = ((((!((map__88 == null)))?((((map__88.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88):map__88);
var h = cljs.core.get.call(null,map__88__$1,new cljs.core.Keyword(null,"gen","gen",(142575302)));
return clojure.test.check.generators.make_gen.call(null,((function (map__88,map__88__$1,h){
return (function (rnd,size){
return k.call(null,h.call(null,rnd,size));
});})(map__88,map__88__$1,h))
);
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.gen_fmap;},new cljs.core.Symbol("clojure.test.check.generators","gen-fmap","clojure.test.check.generators/gen-fmap",(1381968424),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"no-doc","no-doc",(1559921891)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"gen-fmap","gen-fmap",(-989054688),null),"clojure/test/check/generators.cljc",(15),(1),(50),(50),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"h","h",(-1544777029),null),new cljs.core.Keyword(null,"gen","gen",(142575302))], null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.gen_fmap)?clojure.test.check.generators.gen_fmap.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.gen_bind = (function clojure$test$check$generators$gen_bind(p__90,k){
var map__98 = p__90;
var map__98__$1 = ((((!((map__98 == null)))?((((map__98.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__98.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98):map__98);
var h = cljs.core.get.call(null,map__98__$1,new cljs.core.Keyword(null,"gen","gen",(142575302)));
return clojure.test.check.generators.make_gen.call(null,((function (map__98,map__98__$1,h){
return (function (rnd,size){
var vec__100 = clojure.test.check.random.split.call(null,rnd);
var r1 = cljs.core.nth.call(null,vec__100,(0),null);
var r2 = cljs.core.nth.call(null,vec__100,(1),null);
var inner = h.call(null,r1,size);
var map__103 = k.call(null,inner);
var map__103__$1 = ((((!((map__103 == null)))?((((map__103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__103):map__103);
var result = cljs.core.get.call(null,map__103__$1,new cljs.core.Keyword(null,"gen","gen",(142575302)));
return result.call(null,r2,size);
});})(map__98,map__98__$1,h))
);
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.gen_bind;},new cljs.core.Symbol("clojure.test.check.generators","gen-bind","clojure.test.check.generators/gen-bind",(-2108486618),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"no-doc","no-doc",(1559921891)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"gen-bind","gen-bind",(-217956562),null),"clojure/test/check/generators.cljc",(15),(1),(57),(57),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"h","h",(-1544777029),null),new cljs.core.Keyword(null,"gen","gen",(142575302))], null),new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.gen_bind)?clojure.test.check.generators.gen_bind.cljs$lang$test:null)])));})()
;
/**
 * Given a random number generator, returns an infinite lazy sequence
 *   of random number generators.
 */
(function (){
clojure.test.check.generators.lazy_random_states = (function clojure$test$check$generators$lazy_random_states(rr){
return (new cljs.core.LazySeq(null,(function (){
var vec__108 = clojure.test.check.random.split.call(null,rr);
var r1 = cljs.core.nth.call(null,vec__108,(0),null);
var r2 = cljs.core.nth.call(null,vec__108,(1),null);
return cljs.core.cons.call(null,r1,clojure.test.check.generators.lazy_random_states.call(null,r2));
}),null,null));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.lazy_random_states;},new cljs.core.Symbol("clojure.test.check.generators","lazy-random-states","clojure.test.check.generators/lazy-random-states",(1832424171),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"lazy-random-states","lazy-random-states",(-596745741),null),"clojure/test/check/generators.cljc",(25),(1),(67),(67),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rr","rr",(-977734222),null)], null)),"Given a random number generator, returns an infinite lazy sequence\n  of random number generators.",(cljs.core.truth_(clojure.test.check.generators.lazy_random_states)?clojure.test.check.generators.lazy_random_states.cljs$lang$test:null)])));})()
;
/**
 * Takes a sequence of generators and returns a generator of sequences (er, vectors).
 */
(function (){
clojure.test.check.generators.gen_seq__GT_seq_gen = (function clojure$test$check$generators$gen_seq__GT_seq_gen(gens){
return clojure.test.check.generators.make_gen.call(null,(function (rnd,size){
return cljs.core.mapv.call(null,(function (p1__6_SHARP_,p2__7_SHARP_){
return clojure.test.check.generators.call_gen.call(null,p1__6_SHARP_,p2__7_SHARP_,size);
}),gens,clojure.test.check.random.split_n.call(null,rnd,cljs.core.count.call(null,gens)));
}));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.gen_seq__GT_seq_gen;},new cljs.core.Symbol("clojure.test.check.generators","gen-seq->seq-gen","clojure.test.check.generators/gen-seq->seq-gen",(-171181758),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"gen-seq->seq-gen","gen-seq->seq-gen",(68871754),null),"clojure/test/check/generators.cljc",(24),(1),(76),(76),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gens","gens",(106737606),null)], null)),"Takes a sequence of generators and returns a generator of sequences (er, vectors).",(cljs.core.truth_(clojure.test.check.generators.gen_seq__GT_seq_gen)?clojure.test.check.generators.gen_seq__GT_seq_gen.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.fmap = (function clojure$test$check$generators$fmap(f,gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Second arg to fmap must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.gen_fmap.call(null,(function (p1__8_SHARP_){
return clojure.test.check.rose_tree.fmap.call(null,f,p1__8_SHARP_);
}),gen);
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.fmap;},new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",(1957997092),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"fmap","fmap",(55293788),null),"clojure/test/check/generators.cljc",(11),(1),(86),(86),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.fmap)?clojure.test.check.generators.fmap.cljs$lang$test:null)])));})()
;
/**
 * Create a generator that always returns `value`,
 *   and never shrinks. You can think of this as
 *   the `constantly` of generators.
 */
(function (){
clojure.test.check.generators.return$ = (function clojure$test$check$generators$return(value){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.pure.call(null,value));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.return$;},new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",(1744522038),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"return","return",(-250970578),null),"clojure/test/check/generators.cljc",(13),(1),(92),(92),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),"Create a generator that always returns `value`,\n  and never shrinks. You can think of this as\n  the `constantly` of generators.",(cljs.core.truth_(clojure.test.check.generators.return$)?clojure.test.check.generators.return$.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.bind_helper = (function clojure$test$check$generators$bind_helper(k){
return (function (rose){
return clojure.test.check.generators.gen_fmap.call(null,clojure.test.check.rose_tree.join,clojure.test.check.generators.make_gen.call(null,(function (rnd,size){
return clojure.test.check.rose_tree.fmap.call(null,(function (p1__9_SHARP_){
return clojure.test.check.generators.call_gen.call(null,p1__9_SHARP_,rnd,size);
}),clojure.test.check.rose_tree.fmap.call(null,k,rose));
})));
});
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.bind_helper;},new cljs.core.Symbol("clojure.test.check.generators","bind-helper","clojure.test.check.generators/bind-helper",(300028930),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"bind-helper","bind-helper",(-2093807846),null),"clojure/test/check/generators.cljc",(19),(1),(99),(99),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.bind_helper)?clojure.test.check.generators.bind_helper.cljs$lang$test:null)])));})()
;
/**
 * Create a new generator that passes the result of `gen` into function
 *   `k`. `k` should return a new generator. This allows you to create new
 *   generators that depend on the value of other generators. For example,
 *   to create a generator which first generates a vector of integers, and
 *   then chooses a random element from that vector:
 * 
 *    (gen/bind (gen/such-that not-empty (gen/vector gen/int))
 *              ;; this function takes a realized vector,
 *              ;; and then returns a new generator which
 *              ;; chooses a random element from it
 *              gen/elements)
 * 
 *   
 */
(function (){
clojure.test.check.generators.bind = (function clojure$test$check$generators$bind(generator,k){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to bind must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? generator)")].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,generator,clojure.test.check.generators.bind_helper.call(null,k));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.bind;},new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",(-361313906),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"bind","bind",(1527103110),null),"clojure/test/check/generators.cljc",(11),(1),(108),(108),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),"Create a new generator that passes the result of `gen` into function\n  `k`. `k` should return a new generator. This allows you to create new\n  generators that depend on the value of other generators. For example,\n  to create a generator which first generates a vector of integers, and\n  then chooses a random element from that vector:\n\n      (gen/bind (gen/such-that not-empty (gen/vector gen/int))\n                ;; this function takes a realized vector,\n                ;; and then returns a new generator which\n                ;; chooses a random element from it\n                gen/elements)\n\n  ",(cljs.core.truth_(clojure.test.check.generators.bind)?clojure.test.check.generators.bind.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.make_size_range_seq = (function clojure$test$check$generators$make_size_range_seq(max_size){
return cljs.core.cycle.call(null,cljs.core.range.call(null,(0),max_size));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.make_size_range_seq;},new cljs.core.Symbol("clojure.test.check.generators","make-size-range-seq","clojure.test.check.generators/make-size-range-seq",(461147992),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"no-doc","no-doc",(1559921891)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"make-size-range-seq","make-size-range-seq",(-366314416),null),"clojure/test/check/generators.cljc",(26),(1),(129),(129),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"max-size","max-size",(765565395),null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.make_size_range_seq)?clojure.test.check.generators.make_size_range_seq.cljs$lang$test:null)])));})()
;
/**
 * Return a sequence of realized values from `generator`.
 */
(function (){
clojure.test.check.generators.sample_seq = (function clojure$test$check$generators$sample_seq(var_args){
var args111 = [];
var len__23656__auto___114 = arguments.length;
var i__23657__auto___115 = (0);
while(true){
if((i__23657__auto___115 < len__23656__auto___114)){
args111.push((arguments[i__23657__auto___115]));

var G__116 = (i__23657__auto___115 + (1));
i__23657__auto___115 = G__116;
continue;
} else {
}
break;
}

var G__113 = args111.length;
switch (G__113) {
case (1):
return clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args111.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.sample_seq;},new cljs.core.Symbol("clojure.test.check.generators","sample-seq","clojure.test.check.generators/sample-seq",(139953413),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"sample-seq","sample-seq",(-1627068403),null),"clojure/test/check/generators.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"max-size","max-size",(765565395),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"max-size","max-size",(765565395),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(134),(134),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"max-size","max-size",(765565395),null)], null)),"Return a sequence of realized values from `generator`.",(cljs.core.truth_(clojure.test.check.generators.sample_seq)?clojure.test.check.generators.sample_seq.cljs$lang$test:null)])));})()
;

clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators.sample_seq.call(null,generator,(100));
});

clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$2 = (function (generator,max_size){
var r = clojure.test.check.random.make_random.call(null);
var size_seq = clojure.test.check.generators.make_size_range_seq.call(null,max_size);
return cljs.core.map.call(null,((function (r,size_seq){
return (function (p1__10_SHARP_,p2__11_SHARP_){
return clojure.test.check.rose_tree.root.call(null,clojure.test.check.generators.call_gen.call(null,generator,p1__10_SHARP_,p2__11_SHARP_));
});})(r,size_seq))
,clojure.test.check.generators.lazy_random_states.call(null,r),size_seq);
});

clojure.test.check.generators.sample_seq.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return clojure.test.check.generators.sample_seq;},new cljs.core.Symbol("clojure.test.check.generators","sample-seq","clojure.test.check.generators/sample-seq",(139953413),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"sample-seq","sample-seq",(-1627068403),null),"clojure/test/check/generators.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"max-size","max-size",(765565395),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"max-size","max-size",(765565395),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(134),(134),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"max-size","max-size",(765565395),null)], null)),"Return a sequence of realized values from `generator`.",(cljs.core.truth_(clojure.test.check.generators.sample_seq)?clojure.test.check.generators.sample_seq.cljs$lang$test:null)]));
/**
 * Return a sequence of `num-samples` (default 10)
 *   realized values from `generator`.
 */
(function (){
clojure.test.check.generators.sample = (function clojure$test$check$generators$sample(var_args){
var args118 = [];
var len__23656__auto___121 = arguments.length;
var i__23657__auto___122 = (0);
while(true){
if((i__23657__auto___122 < len__23656__auto___121)){
args118.push((arguments[i__23657__auto___122]));

var G__123 = (i__23657__auto___122 + (1));
i__23657__auto___122 = G__123;
continue;
} else {
}
break;
}

var G__120 = args118.length;
switch (G__120) {
case (1):
return clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args118.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.sample;},new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",(-382944992),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"sample","sample",(1719555128),null),"clojure/test/check/generators.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"num-samples","num-samples",(-1333031239),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"num-samples","num-samples",(-1333031239),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(144),(144),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"num-samples","num-samples",(-1333031239),null)], null)),"Return a sequence of `num-samples` (default 10)\n  realized values from `generator`.",(cljs.core.truth_(clojure.test.check.generators.sample)?clojure.test.check.generators.sample.cljs$lang$test:null)])));})()
;

clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators.sample.call(null,generator,(10));
});

clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$2 = (function (generator,num_samples){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to sample must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? generator)")].join('')));
}

return cljs.core.take.call(null,num_samples,clojure.test.check.generators.sample_seq.call(null,generator));
});

clojure.test.check.generators.sample.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return clojure.test.check.generators.sample;},new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",(-382944992),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"sample","sample",(1719555128),null),"clojure/test/check/generators.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"num-samples","num-samples",(-1333031239),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"num-samples","num-samples",(-1333031239),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(144),(144),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"num-samples","num-samples",(-1333031239),null)], null)),"Return a sequence of `num-samples` (default 10)\n  realized values from `generator`.",(cljs.core.truth_(clojure.test.check.generators.sample)?clojure.test.check.generators.sample.cljs$lang$test:null)]));
/**
 * Returns a single sample value from the generator, using a default
 *   size of 30.
 */
(function (){
clojure.test.check.generators.generate = (function clojure$test$check$generators$generate(var_args){
var args125 = [];
var len__23656__auto___128 = arguments.length;
var i__23657__auto___129 = (0);
while(true){
if((i__23657__auto___129 < len__23656__auto___128)){
args125.push((arguments[i__23657__auto___129]));

var G__130 = (i__23657__auto___129 + (1));
i__23657__auto___129 = G__130;
continue;
} else {
}
break;
}

var G__127 = args125.length;
switch (G__127) {
case (1):
return clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args125.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.generate;},new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",(-690390711),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"generate","generate",(1477078705),null),"clojure/test/check/generators.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"size","size",(-1555742762),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"size","size",(-1555742762),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(154),(154),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"size","size",(-1555742762),null)], null)),"Returns a single sample value from the generator, using a default\n  size of 30.",(cljs.core.truth_(clojure.test.check.generators.generate)?clojure.test.check.generators.generate.cljs$lang$test:null)])));})()
;

clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators.generate.call(null,generator,(30));
});

clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$2 = (function (generator,size){
var rng = clojure.test.check.random.make_random.call(null);
return clojure.test.check.rose_tree.root.call(null,clojure.test.check.generators.call_gen.call(null,generator,rng,size));
});

clojure.test.check.generators.generate.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return clojure.test.check.generators.generate;},new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",(-690390711),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"generate","generate",(1477078705),null),"clojure/test/check/generators.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"size","size",(-1555742762),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"size","size",(-1555742762),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(154),(154),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"size","size",(-1555742762),null)], null)),"Returns a single sample value from the generator, using a default\n  size of 30.",(cljs.core.truth_(clojure.test.check.generators.generate)?clojure.test.check.generators.generate.cljs$lang$test:null)]));
(function (){
clojure.test.check.generators.halfs = (function clojure$test$check$generators$halfs(n){
return cljs.core.take_while.call(null,(function (p1__12_SHARP_){
return cljs.core.not_EQ_.call(null,(0),p1__12_SHARP_);
}),cljs.core.iterate.call(null,(function (p1__13_SHARP_){
return cljs.core.quot.call(null,p1__13_SHARP_,(2));
}),n));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.halfs;},new cljs.core.Symbol("clojure.test.check.generators","halfs","clojure.test.check.generators/halfs",(-1016815961),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"halfs","halfs",(1354083807),null),"clojure/test/check/generators.cljc",(13),(1),(167),(167),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.halfs)?clojure.test.check.generators.halfs.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.shrink_int = (function clojure$test$check$generators$shrink_int(integer){
return cljs.core.map.call(null,(function (p1__14_SHARP_){
return (integer - p1__14_SHARP_);
}),clojure.test.check.generators.halfs.call(null,integer));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.shrink_int;},new cljs.core.Symbol("clojure.test.check.generators","shrink-int","clojure.test.check.generators/shrink-int",(1131166100),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"shrink-int","shrink-int",(-734196580),null),"clojure/test/check/generators.cljc",(18),(1),(171),(171),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"integer","integer",(1035809817),null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.shrink_int)?clojure.test.check.generators.shrink_int.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.int_rose_tree = (function clojure$test$check$generators$int_rose_tree(value){
return clojure.test.check.rose_tree.make_rose.call(null,value,cljs.core.map.call(null,clojure.test.check.generators.int_rose_tree,clojure.test.check.generators.shrink_int.call(null,value)));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.int_rose_tree;},new cljs.core.Symbol("clojure.test.check.generators","int-rose-tree","clojure.test.check.generators/int-rose-tree",(1466930196),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"int-rose-tree","int-rose-tree",(-524459236),null),"clojure/test/check/generators.cljc",(21),(1),(175),(175),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.int_rose_tree)?clojure.test.check.generators.int_rose_tree.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.calc_long = (function clojure$test$check$generators$calc_long(factor,lower,upper){
return cljs.core.long$.call(null,Math.floor((lower + ((factor * ((1) + upper)) - (factor * lower)))));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.calc_long;},new cljs.core.Symbol("clojure.test.check.generators","calc-long","clojure.test.check.generators/calc-long",(-521694038),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"calc-long","calc-long",(1362649506),null),"clojure/test/check/generators.cljc",(17),(1),(187),(187),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"factor","factor",(-462641221),null),new cljs.core.Symbol(null,"lower","lower",(-1534114948),null),new cljs.core.Symbol(null,"upper","upper",(1886775433),null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.calc_long)?clojure.test.check.generators.calc_long.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.rand_range = (function clojure$test$check$generators$rand_range(rnd,lower,upper){
if((lower <= upper)){
} else {
throw (new Error("Assert failed: (<= lower upper)"));
}

return clojure.test.check.generators.calc_long.call(null,clojure.test.check.random.rand_double.call(null,rnd),lower,upper);
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.rand_range;},new cljs.core.Symbol("clojure.test.check.generators","rand-range","clojure.test.check.generators/rand-range",(130014851),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"rand-range","rand-range",(-152262245),null),"clojure/test/check/generators.cljc",(18),(1),(208),(208),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rnd","rnd",(106183480),null),new cljs.core.Symbol(null,"lower","lower",(-1534114948),null),new cljs.core.Symbol(null,"upper","upper",(1886775433),null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.rand_range)?clojure.test.check.generators.rand_range.cljs$lang$test:null)])));})()
;
/**
 * Create a generator that depends on the size parameter.
 *   `sized-gen` is a function that takes an integer and returns
 *   a generator.
 */
(function (){
clojure.test.check.generators.sized = (function clojure$test$check$generators$sized(sized_gen){
return clojure.test.check.generators.make_gen.call(null,(function (rnd,size){
var sized_gen__$1 = sized_gen.call(null,size);
return clojure.test.check.generators.call_gen.call(null,sized_gen__$1,rnd,size);
}));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.sized;},new cljs.core.Symbol("clojure.test.check.generators","sized","clojure.test.check.generators/sized",(558320186),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"sized","sized",(-768190158),null),"clojure/test/check/generators.cljc",(12),(1),(213),(213),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sized-gen","sized-gen",(260980917),null)], null)),"Create a generator that depends on the size parameter.\n  `sized-gen` is a function that takes an integer and returns\n  a generator.",(cljs.core.truth_(clojure.test.check.generators.sized)?clojure.test.check.generators.sized.cljs$lang$test:null)])));})()
;
/**
 * Create a new generator with `size` always bound to `n`.
 */
(function (){
clojure.test.check.generators.resize = (function clojure$test$check$generators$resize(n,generator){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Second arg to resize must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? generator)")].join('')));
}

var map__134 = generator;
var map__134__$1 = ((((!((map__134 == null)))?((((map__134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134):map__134);
var gen = cljs.core.get.call(null,map__134__$1,new cljs.core.Keyword(null,"gen","gen",(142575302)));
return clojure.test.check.generators.make_gen.call(null,((function (map__134,map__134__$1,gen){
return (function (rnd,_size){
return gen.call(null,rnd,n);
});})(map__134,map__134__$1,gen))
);
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.resize;},new cljs.core.Symbol("clojure.test.check.generators","resize","clojure.test.check.generators/resize",(-498200195),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"resize","resize",(1937898613),null),"clojure/test/check/generators.cljc",(13),(1),(226),(226),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"generator","generator",(1067569246),null)], null)),"Create a new generator with `size` always bound to `n`.",(cljs.core.truth_(clojure.test.check.generators.resize)?clojure.test.check.generators.resize.cljs$lang$test:null)])));})()
;
/**
 * Create a new generator that modifies the size parameter by the given function. Intended to
 * support generators with sizes that need to grow at different rates compared to the normal
 * linear scaling.
 */
(function (){
clojure.test.check.generators.scale = (function clojure$test$check$generators$scale(f,generator){
return clojure.test.check.generators.sized.call(null,(function (n){
return clojure.test.check.generators.resize.call(null,f.call(null,n),generator);
}));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.scale;},new cljs.core.Symbol("clojure.test.check.generators","scale","clojure.test.check.generators/scale",(-1015196554),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"scale","scale",(1410104174),null),"clojure/test/check/generators.cljc",(12),(1),(235),(235),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"generator","generator",(1067569246),null)], null)),"Create a new generator that modifies the size parameter by the given function. Intended to\n   support generators with sizes that need to grow at different rates compared to the normal\n   linear scaling.",(cljs.core.truth_(clojure.test.check.generators.scale)?clojure.test.check.generators.scale.cljs$lang$test:null)])));})()
;
/**
 * Create a generator that returns numbers in the range
 *   `lower` to `upper`, inclusive.
 */
(function (){
clojure.test.check.generators.choose = (function clojure$test$check$generators$choose(lower,upper){
return clojure.test.check.generators.make_gen.call(null,(function (rnd,_size){
var value = clojure.test.check.generators.rand_range.call(null,rnd,lower,upper);
return clojure.test.check.rose_tree.filter.call(null,((function (value){
return (function (p1__15_SHARP_){
return ((p1__15_SHARP_ >= lower)) && ((p1__15_SHARP_ <= upper));
});})(value))
,clojure.test.check.generators.int_rose_tree.call(null,value));
}));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.choose;},new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",(909997832),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"choose","choose",(-974232464),null),"clojure/test/check/generators.cljc",(13),(1),(242),(242),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"lower","lower",(-1534114948),null),new cljs.core.Symbol(null,"upper","upper",(1886775433),null)], null)),"Create a generator that returns numbers in the range\n     `lower` to `upper`, inclusive.",(cljs.core.truth_(clojure.test.check.generators.choose)?clojure.test.check.generators.choose.cljs$lang$test:null)])));})()
;
/**
 * Create a generator that randomly chooses a value from the list of
 *   provided generators. Shrinks toward choosing an earlier generator,
 *   as well as shrinking the value generated by the chosen generator.
 * 
 *   Examples:
 * 
 *    (one-of [gen/int gen/boolean (gen/vector gen/int)])
 * 
 *   
 */
(function (){
clojure.test.check.generators.one_of = (function clojure$test$check$generators$one_of(generators){
if(cljs.core.every_QMARK_.call(null,clojure.test.check.generators.generator_QMARK_,generators)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arg to one-of must be a collection of generators"),cljs.core.str("\n"),cljs.core.str("(every? generator? generators)")].join('')));
}

return clojure.test.check.generators.bind.call(null,clojure.test.check.generators.choose.call(null,(0),(cljs.core.count.call(null,generators) - (1))),(function (p1__16_SHARP_){
return cljs.core.nth.call(null,generators,p1__16_SHARP_);
}));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.one_of;},new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",(-183339191),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"one-of","one-of",(1784898625),null),"clojure/test/check/generators.cljc",(13),(1),(264),(264),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generators","generators",(-269612955),null)], null)),"Create a generator that randomly chooses a value from the list of\n  provided generators. Shrinks toward choosing an earlier generator,\n  as well as shrinking the value generated by the chosen generator.\n\n  Examples:\n\n      (one-of [gen/int gen/boolean (gen/vector gen/int)])\n\n  ",(cljs.core.truth_(clojure.test.check.generators.one_of)?clojure.test.check.generators.one_of.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.pick = (function clojure$test$check$generators$pick(p__136,n){
while(true){
var vec__143 = p__136;
var seq__144 = cljs.core.seq.call(null,vec__143);
var first__145 = cljs.core.first.call(null,seq__144);
var seq__144__$1 = cljs.core.next.call(null,seq__144);
var h = first__145;
var tail = seq__144__$1;
var vec__146 = h;
var chance = cljs.core.nth.call(null,vec__146,(0),null);
var gen = cljs.core.nth.call(null,vec__146,(1),null);
if((n <= chance)){
return gen;
} else {
var G__149 = tail;
var G__150 = (n - chance);
p__136 = G__149;
n = G__150;
continue;
}
break;
}
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.pick;},new cljs.core.Symbol("clojure.test.check.generators","pick","clojure.test.check.generators/pick",(1007436359),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"pick","pick",(1300068175),null),"clojure/test/check/generators.cljc",(12),(1),(280),(280),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"h","h",(-1544777029),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"tail","tail",(494507963),null)], null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.pick)?clojure.test.check.generators.pick.cljs$lang$test:null)])));})()
;
/**
 * Create a generator that chooses a generator from `pairs` based on the
 *   provided likelihoods. The likelihood of a given generator being chosen is
 *   its likelihood divided by the sum of all likelihoods
 * 
 *   Examples:
 * 
 *    (gen/frequency [[5 gen/int] [3 (gen/vector gen/int)] [2 gen/boolean]])
 *   
 */
(function (){
clojure.test.check.generators.frequency = (function clojure$test$check$generators$frequency(pairs){
if(cljs.core.every_QMARK_.call(null,(function (p__155){
var vec__156 = p__155;
var x = cljs.core.nth.call(null,vec__156,(0),null);
var g = cljs.core.nth.call(null,vec__156,(1),null);
var and__20770__auto__ = typeof x === 'number';
if(and__20770__auto__){
return clojure.test.check.generators.generator_QMARK_.call(null,g);
} else {
return and__20770__auto__;
}
}),pairs)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arg to frequency must be a list of [num generator] pairs"),cljs.core.str("\n"),cljs.core.str("(every? (fn [[x g]] (and (number? x) (generator? g))) pairs)")].join('')));
}

var total = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.first,pairs));
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.choose.call(null,(1),total),((function (total){
return (function (p1__17_SHARP_){
return clojure.test.check.generators.pick.call(null,pairs,clojure.test.check.rose_tree.root.call(null,p1__17_SHARP_));
});})(total))
);
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.frequency;},new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",(2090703177),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"frequency","frequency",(231640145),null),"clojure/test/check/generators.cljc",(16),(1),(287),(287),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pairs","pairs",(-2039825990),null)], null)),"Create a generator that chooses a generator from `pairs` based on the\n  provided likelihoods. The likelihood of a given generator being chosen is\n  its likelihood divided by the sum of all likelihoods\n\n  Examples:\n\n      (gen/frequency [[5 gen/int] [3 (gen/vector gen/int)] [2 gen/boolean]])\n  ",(cljs.core.truth_(clojure.test.check.generators.frequency)?clojure.test.check.generators.frequency.cljs$lang$test:null)])));})()
;
/**
 * Create a generator that randomly chooses an element from `coll`.
 * 
 *   Examples:
 * 
 *    (gen/elements [:foo :bar :baz])
 *   
 */
(function (){
clojure.test.check.generators.elements = (function clojure$test$check$generators$elements(coll){
if(cljs.core.seq.call(null,coll)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("elements cannot be called with an empty collection"),cljs.core.str("\n"),cljs.core.str("(seq coll)")].join('')));
}

var v = cljs.core.vec.call(null,coll);
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.choose.call(null,(0),(cljs.core.count.call(null,v) - (1))),((function (v){
return (function (p1__18_SHARP_){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.fmap.call(null,v,p1__18_SHARP_));
});})(v))
);
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.elements;},new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",(438991326),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"elements","elements",(-1996789034),null),"clojure/test/check/generators.cljc",(15),(1),(304),(304),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Create a generator that randomly chooses an element from `coll`.\n\n  Examples:\n\n      (gen/elements [:foo :bar :baz])\n  ",(cljs.core.truth_(clojure.test.check.generators.elements)?clojure.test.check.generators.elements.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.such_that_helper = (function clojure$test$check$generators$such_that_helper(max_tries,pred,gen,tries_left,rng,size){
while(true){
if((tries_left === (0))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Couldn't satisfy such-that predicate after "),cljs.core.str(max_tries),cljs.core.str(" tries.")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
var vec__162 = clojure.test.check.random.split.call(null,rng);
var r1 = cljs.core.nth.call(null,vec__162,(0),null);
var r2 = cljs.core.nth.call(null,vec__162,(1),null);
var value = clojure.test.check.generators.call_gen.call(null,gen,r1,size);
if(cljs.core.truth_(pred.call(null,clojure.test.check.rose_tree.root.call(null,value)))){
return clojure.test.check.rose_tree.filter.call(null,pred,value);
} else {
var G__165 = max_tries;
var G__166 = pred;
var G__167 = gen;
var G__168 = (tries_left - (1));
var G__169 = r2;
var G__170 = (size + (1));
max_tries = G__165;
pred = G__166;
gen = G__167;
tries_left = G__168;
rng = G__169;
size = G__170;
continue;
}
}
break;
}
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.such_that_helper;},new cljs.core.Symbol("clojure.test.check.generators","such-that-helper","clojure.test.check.generators/such-that-helper",(-2134555353),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"such-that-helper","such-that-helper",(934695471),null),"clojure/test/check/generators.cljc",(24),(1),(317),(317),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"max-tries","max-tries",(-183910265),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"tries-left","tries-left",(740180174),null),new cljs.core.Symbol(null,"rng","rng",(-1571769753),null),new cljs.core.Symbol(null,"size","size",(-1555742762),null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.such_that_helper)?clojure.test.check.generators.such_that_helper.cljs$lang$test:null)])));})()
;
/**
 * Create a generator that generates values from `gen` that satisfy predicate
 *   `pred`. Care is needed to ensure there is a high chance `gen` will satisfy
 *   `pred`. By default, `such-that` will try 10 times to generate a value that
 *   satisfies the predicate. If no value passes this predicate after this number
 *   of iterations, a runtime exception will be throw. You can pass an optional
 *   third argument to change the number of times tried. Note also that each
 *   time such-that retries, it will increase the size parameter.
 * 
 *   Examples:
 * 
 *    ;; generate non-empty vectors of integers
 *    ;; (note, gen/not-empty does exactly this)
 *    (gen/such-that not-empty (gen/vector gen/int))
 *   
 */
(function (){
clojure.test.check.generators.such_that = (function clojure$test$check$generators$such_that(var_args){
var args171 = [];
var len__23656__auto___174 = arguments.length;
var i__23657__auto___175 = (0);
while(true){
if((i__23657__auto___175 < len__23656__auto___174)){
args171.push((arguments[i__23657__auto___175]));

var G__176 = (i__23657__auto___175 + (1));
i__23657__auto___175 = G__176;
continue;
} else {
}
break;
}

var G__173 = args171.length;
switch (G__173) {
case (2):
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args171.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.such_that;},new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",(-1754178732),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"such-that","such-that",(1715619932),null),"clojure/test/check/generators.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"max-tries","max-tries",(-183910265),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"max-tries","max-tries",(-183910265),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(328),(328),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"max-tries","max-tries",(-183910265),null)], null)),"Create a generator that generates values from `gen` that satisfy predicate\n  `pred`. Care is needed to ensure there is a high chance `gen` will satisfy\n  `pred`. By default, `such-that` will try 10 times to generate a value that\n  satisfies the predicate. If no value passes this predicate after this number\n  of iterations, a runtime exception will be throw. You can pass an optional\n  third argument to change the number of times tried. Note also that each\n  time such-that retries, it will increase the size parameter.\n\n  Examples:\n\n      ;; generate non-empty vectors of integers\n      ;; (note, gen/not-empty does exactly this)\n      (gen/such-that not-empty (gen/vector gen/int))\n  ",(cljs.core.truth_(clojure.test.check.generators.such_that)?clojure.test.check.generators.such_that.cljs$lang$test:null)])));})()
;

clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2 = (function (pred,gen){
return clojure.test.check.generators.such_that.call(null,pred,gen,(10));
});

clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3 = (function (pred,gen,max_tries){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Second arg to such-that must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.make_gen.call(null,(function (rand_seed,size){
return clojure.test.check.generators.such_that_helper.call(null,max_tries,pred,gen,max_tries,rand_seed,size);
}));
});

clojure.test.check.generators.such_that.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return clojure.test.check.generators.such_that;},new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",(-1754178732),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"such-that","such-that",(1715619932),null),"clojure/test/check/generators.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"max-tries","max-tries",(-183910265),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"max-tries","max-tries",(-183910265),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(328),(328),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"max-tries","max-tries",(-183910265),null)], null)),"Create a generator that generates values from `gen` that satisfy predicate\n  `pred`. Care is needed to ensure there is a high chance `gen` will satisfy\n  `pred`. By default, `such-that` will try 10 times to generate a value that\n  satisfies the predicate. If no value passes this predicate after this number\n  of iterations, a runtime exception will be throw. You can pass an optional\n  third argument to change the number of times tried. Note also that each\n  time such-that retries, it will increase the size parameter.\n\n  Examples:\n\n      ;; generate non-empty vectors of integers\n      ;; (note, gen/not-empty does exactly this)\n      (gen/such-that not-empty (gen/vector gen/int))\n  ",(cljs.core.truth_(clojure.test.check.generators.such_that)?clojure.test.check.generators.such_that.cljs$lang$test:null)]));
/**
 * Modifies a generator so that it doesn't generate empty collections.
 * 
 *   Examples:
 * 
 *    ;; generate a vector of booleans, but never the empty vector
 *    (gen/not-empty (gen/vector gen/boolean))
 *   
 */
(function (){
clojure.test.check.generators.not_empty = (function clojure$test$check$generators$not_empty(gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arg to not-empty must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.such_that.call(null,cljs.core.not_empty,gen);
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.not_empty;},new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",(-876211682),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"not-empty","not-empty",(2029453590),null),"clojure/test/check/generators.cljc",(16),(1),(351),(351),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)),"Modifies a generator so that it doesn't generate empty collections.\n\n  Examples:\n\n      ;; generate a vector of booleans, but never the empty vector\n      (gen/not-empty (gen/vector gen/boolean))\n  ",(cljs.core.truth_(clojure.test.check.generators.not_empty)?clojure.test.check.generators.not_empty.cljs$lang$test:null)])));})()
;
/**
 * Create a new generator that is just like `gen`, except does not shrink
 *   at all. This can be useful when shrinking is taking a long time or is not
 *   applicable to the domain.
 */
(function (){
clojure.test.check.generators.no_shrink = (function clojure$test$check$generators$no_shrink(gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arg to no-shrink must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,gen,(function (rose){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.make_rose.call(null,clojure.test.check.rose_tree.root.call(null,rose),cljs.core.PersistentVector.EMPTY));
}));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.no_shrink;},new cljs.core.Symbol("clojure.test.check.generators","no-shrink","clojure.test.check.generators/no-shrink",(-1902006986),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"no-shrink","no-shrink",(-7323586),null),"clojure/test/check/generators.cljc",(16),(1),(363),(363),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)),"Create a new generator that is just like `gen`, except does not shrink\n  at all. This can be useful when shrinking is taking a long time or is not\n  applicable to the domain.",(cljs.core.truth_(clojure.test.check.generators.no_shrink)?clojure.test.check.generators.no_shrink.cljs$lang$test:null)])));})()
;
/**
 * Create a new generator like `gen`, but will consider nodes for shrinking
 *   even if their parent passes the test (up to one additional level).
 */
(function (){
clojure.test.check.generators.shrink_2 = (function clojure$test$check$generators$shrink_2(gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arg to shrink-2 must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,gen,cljs.core.comp.call(null,clojure.test.check.generators.gen_pure,clojure.test.check.rose_tree.collapse));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.shrink_2;},new cljs.core.Symbol("clojure.test.check.generators","shrink-2","clojure.test.check.generators/shrink-2",(-1712453172),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"shrink-2","shrink-2",(387783892),null),"clojure/test/check/generators.cljc",(15),(1),(373),(373),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null)),"Create a new generator like `gen`, but will consider nodes for shrinking\n  even if their parent passes the test (up to one additional level).",(cljs.core.truth_(clojure.test.check.generators.shrink_2)?clojure.test.check.generators.shrink_2.cljs$lang$test:null)])));})()
;
/**
 * Generates one of `true` or `false`. Shrinks to `false`.
 */
(function (){
clojure.test.check.generators.boolean$ = clojure.test.check.generators.elements.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null)); return (
new cljs.core.Var(function(){return clojure.test.check.generators.boolean$;},new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",(1586992347),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),"clojure/test/check/generators.cljc",(13),(1),(380),(380),cljs.core.List.EMPTY,"Generates one of `true` or `false`. Shrinks to `false`.",(cljs.core.truth_(clojure.test.check.generators.boolean$)?clojure.test.check.generators.boolean$.cljs$lang$test:null)])));})()
;
/**
 * Create a generator that returns a vector, whose elements are chosen
 *   from the generators in the same position. The individual elements shrink
 *   according to their generator, but the value will never shrink in count.
 * 
 *   Examples:
 * 
 *    (def t (tuple gen/int gen/boolean))
 *    (sample t)
 *    ;; => ([1 true] [2 true] [2 false] [1 false] [0 true] [-2 false] [-6 false]
 *    ;; =>  [3 true] [-4 false] [9 true]))
 *   
 */
(function (){
clojure.test.check.generators.tuple = (function clojure$test$check$generators$tuple(var_args){
var args__23658__auto__ = [];
var len__23656__auto___179 = arguments.length;
var i__23657__auto___180 = (0);
while(true){
if((i__23657__auto___180 < len__23656__auto___179)){
args__23658__auto__.push((arguments[i__23657__auto___180]));

var G__181 = (i__23657__auto___180 + (1));
i__23657__auto___180 = G__181;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((0) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((0)),(0),null)):null);
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.tuple;},new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",(-143711557),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"tuple","tuple",(1167864243),null),"clojure/test/check/generators.cljc",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"generators","generators",(-269612955),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"generators","generators",(-269612955),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(384),(384),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"generators","generators",(-269612955),null)], null)),"Create a generator that returns a vector, whose elements are chosen\n  from the generators in the same position. The individual elements shrink\n  according to their generator, but the value will never shrink in count.\n\n  Examples:\n\n      (def t (tuple gen/int gen/boolean))\n      (sample t)\n      ;; => ([1 true] [2 true] [2 false] [1 false] [0 true] [-2 false] [-6 false]\n      ;; =>  [3 true] [-4 false] [9 true]))\n  ",(cljs.core.truth_(clojure.test.check.generators.tuple)?clojure.test.check.generators.tuple.cljs$lang$test:null)])));})()
;

clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic = (function (generators){
if(cljs.core.every_QMARK_.call(null,clojure.test.check.generators.generator_QMARK_,generators)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Args to tuple must be generators"),cljs.core.str("\n"),cljs.core.str("(every? generator? generators)")].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.gen_seq__GT_seq_gen.call(null,generators),(function (roses){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.zip.call(null,cljs.core.vector,roses));
}));
});

clojure.test.check.generators.tuple.cljs$lang$maxFixedArity = (0);

clojure.test.check.generators.tuple.cljs$lang$applyTo = (function (seq178){
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq178));
});

new cljs.core.Var(function(){return clojure.test.check.generators.tuple;},new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",(-143711557),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"tuple","tuple",(1167864243),null),"clojure/test/check/generators.cljc",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"generators","generators",(-269612955),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"generators","generators",(-269612955),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(384),(384),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"generators","generators",(-269612955),null)], null)),"Create a generator that returns a vector, whose elements are chosen\n  from the generators in the same position. The individual elements shrink\n  according to their generator, but the value will never shrink in count.\n\n  Examples:\n\n      (def t (tuple gen/int gen/boolean))\n      (sample t)\n      ;; => ([1 true] [2 true] [2 false] [1 false] [0 true] [-2 false] [-6 false]\n      ;; =>  [3 true] [-4 false] [9 true]))\n  ",(cljs.core.truth_(clojure.test.check.generators.tuple)?clojure.test.check.generators.tuple.cljs$lang$test:null)]));
/**
 * Generates a positive or negative integer bounded by the generator's
 *   `size` parameter.
 *   (Really returns a long)
 */
(function (){
clojure.test.check.generators.int$ = clojure.test.check.generators.sized.call(null,(function (size){
return clojure.test.check.generators.choose.call(null,(- size),size);
})); return (
new cljs.core.Var(function(){return clojure.test.check.generators.int$;},new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",(1756228469),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"int","int",(-100885395),null),"clojure/test/check/generators.cljc",(9),(1),(403),(403),cljs.core.List.EMPTY,"Generates a positive or negative integer bounded by the generator's\n  `size` parameter.\n  (Really returns a long)",(cljs.core.truth_(clojure.test.check.generators.int$)?clojure.test.check.generators.int$.cljs$lang$test:null)])));})()
;
/**
 * Generates natural numbers, starting at zero. Shrinks to zero.
 */
(function (){
clojure.test.check.generators.nat = clojure.test.check.generators.fmap.call(null,(function (p1__19_SHARP_){
return Math.abs(cljs.core.long$.call(null,p1__19_SHARP_));
}),clojure.test.check.generators.int$); return (
new cljs.core.Var(function(){return clojure.test.check.generators.nat;},new cljs.core.Symbol("clojure.test.check.generators","nat","clojure.test.check.generators/nat",(4002058),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"nat","nat",(-1857281422),null),"clojure/test/check/generators.cljc",(9),(1),(409),(409),cljs.core.List.EMPTY,"Generates natural numbers, starting at zero. Shrinks to zero.",(cljs.core.truth_(clojure.test.check.generators.nat)?clojure.test.check.generators.nat.cljs$lang$test:null)])));})()
;
/**
 * Generate positive integers bounded by the generator's `size` parameter.
 */
(function (){
clojure.test.check.generators.pos_int = clojure.test.check.generators.nat; return (
new cljs.core.Var(function(){return clojure.test.check.generators.pos_int;},new cljs.core.Symbol("clojure.test.check.generators","pos-int","clojure.test.check.generators/pos-int",(-731716802),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"pos-int","pos-int",(1655561734),null),"clojure/test/check/generators.cljc",(13),(1),(413),(413),cljs.core.List.EMPTY,"Generate positive integers bounded by the generator's `size` parameter.",(cljs.core.truth_(clojure.test.check.generators.pos_int)?clojure.test.check.generators.pos_int.cljs$lang$test:null)])));})()
;
/**
 * Generate negative integers bounded by the generator's `size` parameter.
 */
(function (){
clojure.test.check.generators.neg_int = clojure.test.check.generators.fmap.call(null,(function (p1__20_SHARP_){
return ((-1) * p1__20_SHARP_);
}),clojure.test.check.generators.nat); return (
new cljs.core.Var(function(){return clojure.test.check.generators.neg_int;},new cljs.core.Symbol("clojure.test.check.generators","neg-int","clojure.test.check.generators/neg-int",(443641373),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"neg-int","neg-int",(-381265131),null),"clojure/test/check/generators.cljc",(13),(1),(417),(417),cljs.core.List.EMPTY,"Generate negative integers bounded by the generator's `size` parameter.",(cljs.core.truth_(clojure.test.check.generators.neg_int)?clojure.test.check.generators.neg_int.cljs$lang$test:null)])));})()
;
/**
 * Generate strictly positive integers bounded by the generator's `size`
 * parameter.
 */
(function (){
clojure.test.check.generators.s_pos_int = clojure.test.check.generators.fmap.call(null,cljs.core.inc,clojure.test.check.generators.nat); return (
new cljs.core.Var(function(){return clojure.test.check.generators.s_pos_int;},new cljs.core.Symbol("clojure.test.check.generators","s-pos-int","clojure.test.check.generators/s-pos-int",(-1526040062),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"s-pos-int","s-pos-int",(-698790646),null),"clojure/test/check/generators.cljc",(15),(1),(421),(421),cljs.core.List.EMPTY,"Generate strictly positive integers bounded by the generator's `size`\n   parameter.",(cljs.core.truth_(clojure.test.check.generators.s_pos_int)?clojure.test.check.generators.s_pos_int.cljs$lang$test:null)])));})()
;
/**
 * Generate strictly negative integers bounded by the generator's `size`
 * parameter.
 */
(function (){
clojure.test.check.generators.s_neg_int = clojure.test.check.generators.fmap.call(null,cljs.core.dec,clojure.test.check.generators.neg_int); return (
new cljs.core.Var(function(){return clojure.test.check.generators.s_neg_int;},new cljs.core.Symbol("clojure.test.check.generators","s-neg-int","clojure.test.check.generators/s-neg-int",(-1264873270),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"s-neg-int","s-neg-int",(122338770),null),"clojure/test/check/generators.cljc",(15),(1),(426),(426),cljs.core.List.EMPTY,"Generate strictly negative integers bounded by the generator's `size`\n   parameter.",(cljs.core.truth_(clojure.test.check.generators.s_neg_int)?clojure.test.check.generators.s_neg_int.cljs$lang$test:null)])));})()
;
/**
 * Create a generator whose elements are chosen from `gen`. The count of the
 *   vector will be bounded by the `size` generator parameter.
 */
(function (){
clojure.test.check.generators.vector = (function clojure$test$check$generators$vector(var_args){
var args182 = [];
var len__23656__auto___185 = arguments.length;
var i__23657__auto___186 = (0);
while(true){
if((i__23657__auto___186 < len__23656__auto___185)){
args182.push((arguments[i__23657__auto___186]));

var G__187 = (i__23657__auto___186 + (1));
i__23657__auto___186 = G__187;
continue;
} else {
}
break;
}

var G__184 = args182.length;
switch (G__184) {
case (1):
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args182.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.vector;},new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",(1081775325),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"vector","vector",(-751469611),null),"clojure/test/check/generators.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"num-elements","num-elements",(-694013662),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"min-elements","min-elements",(-1705064989),null),new cljs.core.Symbol(null,"max-elements","max-elements",(2073565600),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"num-elements","num-elements",(-694013662),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"min-elements","min-elements",(-1705064989),null),new cljs.core.Symbol(null,"max-elements","max-elements",(2073565600),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(431),(431),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"num-elements","num-elements",(-694013662),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"min-elements","min-elements",(-1705064989),null),new cljs.core.Symbol(null,"max-elements","max-elements",(2073565600),null)], null)),"Create a generator whose elements are chosen from `gen`. The count of the\n  vector will be bounded by the `size` generator parameter.",(cljs.core.truth_(clojure.test.check.generators.vector)?clojure.test.check.generators.vector.cljs$lang$test:null)])));})()
;

clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1 = (function (generator){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arg to vector must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? generator)")].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.sized.call(null,(function (p1__21_SHARP_){
return clojure.test.check.generators.choose.call(null,(0),p1__21_SHARP_);
})),(function (num_elements_rose){
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.gen_seq__GT_seq_gen.call(null,cljs.core.repeat.call(null,clojure.test.check.rose_tree.root.call(null,num_elements_rose),generator)),(function (roses){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.shrink.call(null,cljs.core.vector,roses));
}));
}));
});

clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2 = (function (generator,num_elements){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to vector must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? generator)")].join('')));
}

return cljs.core.apply.call(null,clojure.test.check.generators.tuple,cljs.core.repeat.call(null,num_elements,generator));
});

clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3 = (function (generator,min_elements,max_elements){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to vector must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? generator)")].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.choose.call(null,min_elements,max_elements),(function (num_elements_rose){
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.gen_seq__GT_seq_gen.call(null,cljs.core.repeat.call(null,clojure.test.check.rose_tree.root.call(null,num_elements_rose),generator)),(function (roses){
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.shrink.call(null,cljs.core.vector,roses)),(function (rose){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.filter.call(null,(function (v){
return ((cljs.core.count.call(null,v) >= min_elements)) && ((cljs.core.count.call(null,v) <= max_elements));
}),rose));
}));
}));
}));
});

clojure.test.check.generators.vector.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return clojure.test.check.generators.vector;},new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",(1081775325),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"vector","vector",(-751469611),null),"clojure/test/check/generators.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"num-elements","num-elements",(-694013662),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"min-elements","min-elements",(-1705064989),null),new cljs.core.Symbol(null,"max-elements","max-elements",(2073565600),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"num-elements","num-elements",(-694013662),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"min-elements","min-elements",(-1705064989),null),new cljs.core.Symbol(null,"max-elements","max-elements",(2073565600),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(431),(431),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"num-elements","num-elements",(-694013662),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null),new cljs.core.Symbol(null,"min-elements","min-elements",(-1705064989),null),new cljs.core.Symbol(null,"max-elements","max-elements",(2073565600),null)], null)),"Create a generator whose elements are chosen from `gen`. The count of the\n  vector will be bounded by the `size` generator parameter.",(cljs.core.truth_(clojure.test.check.generators.vector)?clojure.test.check.generators.vector.cljs$lang$test:null)]));
/**
 * Like `vector`, but generates lists.
 */
(function (){
clojure.test.check.generators.list = (function clojure$test$check$generators$list(generator){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to list must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? generator)")].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.sized.call(null,(function (p1__22_SHARP_){
return clojure.test.check.generators.choose.call(null,(0),p1__22_SHARP_);
})),(function (num_elements_rose){
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.gen_seq__GT_seq_gen.call(null,cljs.core.repeat.call(null,clojure.test.check.rose_tree.root.call(null,num_elements_rose),generator)),(function (roses){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.shrink.call(null,cljs.core.list,roses));
}));
}));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.list;},new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",(506971058),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"list","list",(-1889078086),null),"clojure/test/check/generators.cljc",(11),(1),(465),(465),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"generator","generator",(1067569246),null)], null)),"Like `vector`, but generates lists.",(cljs.core.truth_(clojure.test.check.generators.list)?clojure.test.check.generators.list.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.swap = (function clojure$test$check$generators$swap(coll,p__189){
var vec__193 = p__189;
var i1 = cljs.core.nth.call(null,vec__193,(0),null);
var i2 = cljs.core.nth.call(null,vec__193,(1),null);
return cljs.core.assoc.call(null,coll,i2,coll.call(null,i1),i1,coll.call(null,i2));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.swap;},new cljs.core.Symbol("clojure.test.check.generators","swap","clojure.test.check.generators/swap",(-507983100),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"swap","swap",(1869207164),null),"clojure/test/check/generators.cljc",(12),(1),(478),(478),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i1","i1",(-572470430),null),new cljs.core.Symbol(null,"i2","i2",(850408895),null)], null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.swap)?clojure.test.check.generators.swap.cljs$lang$test:null)])));})()
;
/**
 * Create a generator that generates random permutations of `coll`. Shrinks
 *   toward the original collection: `coll`. `coll` will be turned into a vector,
 *   if it's not already.
 */
(function (){
clojure.test.check.generators.shuffle = (function clojure$test$check$generators$shuffle(coll){
var index_gen = clojure.test.check.generators.choose.call(null,(0),(cljs.core.count.call(null,coll) - (1)));
return clojure.test.check.generators.fmap.call(null,((function (index_gen){
return (function (p1__23_SHARP_){
return cljs.core.reduce.call(null,clojure.test.check.generators.swap,cljs.core.vec.call(null,coll),p1__23_SHARP_);
});})(index_gen))
,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.tuple.call(null,index_gen,index_gen),(0),((2) * cljs.core.count.call(null,coll))));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.shuffle;},new cljs.core.Symbol("clojure.test.check.generators","shuffle","clojure.test.check.generators/shuffle",(1032401055),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",(2057651688)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],["0.6.0",new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"shuffle","shuffle",(-1393023609),null),"clojure/test/check/generators.cljc",(10),(1),(482),(484),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Create a generator that generates random permutations of `coll`. Shrinks\n  toward the original collection: `coll`. `coll` will be turned into a vector,\n  if it's not already.",(cljs.core.truth_(clojure.test.check.generators.shuffle)?clojure.test.check.generators.shuffle.cljs$lang$test:null)])));})()
;
/**
 * Like clojure.core/hash-map, except the values are generators.
 * Returns a generator that makes maps with the supplied keys and
 * values generated using the supplied generators.
 * 
 *   Examples:
 * 
 *  (gen/hash-map :a gen/boolean :b gen/nat)
 *   
 */
(function (){
clojure.test.check.generators.hash_map = (function clojure$test$check$generators$hash_map(var_args){
var args__23658__auto__ = [];
var len__23656__auto___197 = arguments.length;
var i__23657__auto___198 = (0);
while(true){
if((i__23657__auto___198 < len__23656__auto___197)){
args__23658__auto__.push((arguments[i__23657__auto___198]));

var G__199 = (i__23657__auto___198 + (1));
i__23657__auto___198 = G__199;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((0) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((0)),(0),null)):null);
return clojure.test.check.generators.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.hash_map;},new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",(1961346626),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"hash-map","hash-map",(-439030950),null),"clojure/test/check/generators.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"kvs","kvs",(-1695980277),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"kvs","kvs",(-1695980277),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(510),(510),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"kvs","kvs",(-1695980277),null)], null)),"Like clojure.core/hash-map, except the values are generators.\n   Returns a generator that makes maps with the supplied keys and\n   values generated using the supplied generators.\n\n  Examples:\n\n    (gen/hash-map :a gen/boolean :b gen/nat)\n  ",(cljs.core.truth_(clojure.test.check.generators.hash_map)?clojure.test.check.generators.hash_map.cljs$lang$test:null)])));})()
;

clojure.test.check.generators.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var ks = cljs.core.take_nth.call(null,(2),kvs);
var vs = cljs.core.take_nth.call(null,(2),cljs.core.rest.call(null,kvs));
if(cljs.core.every_QMARK_.call(null,clojure.test.check.generators.generator_QMARK_,vs)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Value args to hash-map must be generators"),cljs.core.str("\n"),cljs.core.str("(every? generator? vs)")].join('')));
}

return clojure.test.check.generators.fmap.call(null,((function (ks,vs){
return (function (p1__24_SHARP_){
return cljs.core.zipmap.call(null,ks,p1__24_SHARP_);
});})(ks,vs))
,cljs.core.apply.call(null,clojure.test.check.generators.tuple,vs));
});

clojure.test.check.generators.hash_map.cljs$lang$maxFixedArity = (0);

clojure.test.check.generators.hash_map.cljs$lang$applyTo = (function (seq196){
return clojure.test.check.generators.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq196));
});

new cljs.core.Var(function(){return clojure.test.check.generators.hash_map;},new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",(1961346626),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"hash-map","hash-map",(-439030950),null),"clojure/test/check/generators.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"kvs","kvs",(-1695980277),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"kvs","kvs",(-1695980277),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(510),(510),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"kvs","kvs",(-1695980277),null)], null)),"Like clojure.core/hash-map, except the values are generators.\n   Returns a generator that makes maps with the supplied keys and\n   values generated using the supplied generators.\n\n  Examples:\n\n    (gen/hash-map :a gen/boolean :b gen/nat)\n  ",(cljs.core.truth_(clojure.test.check.generators.hash_map)?clojure.test.check.generators.hash_map.cljs$lang$test:null)]));
(function (){
clojure.test.check.generators.transient_set_contains_QMARK_ = (function clojure$test$check$generators$transient_set_contains_QMARK_(s,k){
return cljs.core.some_QMARK_.call(null,cljs.core._lookup.call(null,s,k));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.transient_set_contains_QMARK_;},new cljs.core.Symbol("clojure.test.check.generators","transient-set-contains?","clojure.test.check.generators/transient-set-contains?",(-1932559197),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"transient-set-contains?","transient-set-contains?",(532439995),null),"clojure/test/check/generators.cljc",(40),(1),(533),(533),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null),new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.transient_set_contains_QMARK_)?clojure.test.check.generators.transient_set_contains_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Returns a rose tree.
 */
(function (){
clojure.test.check.generators.coll_distinct_by_STAR_ = (function clojure$test$check$generators$coll_distinct_by_STAR_(empty_coll,key_fn,shuffle_fn,gen,rng,size,num_elements,min_elements,max_tries){
if(cljs.core.truth_(gen)){
} else {
throw (new Error("Assert failed: gen"));
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"gen","gen",(142575302)).cljs$core$IFn$_invoke$arity$1(gen))){
} else {
throw (new Error("Assert failed: (:gen gen)"));
}

var rose_trees = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var s = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
var rng__$1 = rng;
var size__$1 = size;
var tries = (0);
while(true){
if((cljs.core._EQ_.call(null,max_tries,tries)) && ((cljs.core.count.call(null,rose_trees) < min_elements))){
throw cljs.core.ex_info.call(null,"Couldn't generate enough distinct elements!",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-tries","max-tries",(-1824441792)),max_tries,new cljs.core.Keyword(null,"gen","gen",(142575302)),gen,new cljs.core.Keyword(null,"num-elements","num-elements",(1960422107)),num_elements,new cljs.core.Keyword(null,"so-far","so-far",(-1973642241)),cljs.core.map.call(null,clojure.test.check.rose_tree.root,cljs.core.persistent_BANG_.call(null,rose_trees))], null));
} else {
if((cljs.core._EQ_.call(null,max_tries,tries)) || (cljs.core._EQ_.call(null,cljs.core.count.call(null,rose_trees),num_elements))){
return clojure.test.check.rose_tree.shrink.call(null,((function (rose_trees,s,rng__$1,size__$1,tries){
return (function() { 
var G__206__delegate = function (rest__25_SHARP_){
return cljs.core.into.call(null,empty_coll,rest__25_SHARP_);
};
var G__206 = function (var_args){
var rest__25_SHARP_ = null;
if (arguments.length > 0) {
var G__207__i = 0, G__207__a = new Array(arguments.length -  0);
while (G__207__i < G__207__a.length) {G__207__a[G__207__i] = arguments[G__207__i + 0]; ++G__207__i;}
  rest__25_SHARP_ = new cljs.core.IndexedSeq(G__207__a,0);
} 
return G__206__delegate.call(this,rest__25_SHARP_);};
G__206.cljs$lang$maxFixedArity = 0;
G__206.cljs$lang$applyTo = (function (arglist__208){
var rest__25_SHARP_ = cljs.core.seq(arglist__208);
return G__206__delegate(rest__25_SHARP_);
});
G__206.cljs$core$IFn$_invoke$arity$variadic = G__206__delegate;
return G__206;
})()
;})(rose_trees,s,rng__$1,size__$1,tries))
,shuffle_fn.call(null,rng__$1,cljs.core.persistent_BANG_.call(null,rose_trees)));
} else {
var vec__203 = clojure.test.check.random.split.call(null,rng__$1);
var rng1 = cljs.core.nth.call(null,vec__203,(0),null);
var rng2 = cljs.core.nth.call(null,vec__203,(1),null);
var rose = clojure.test.check.generators.call_gen.call(null,gen,rng1,size__$1);
var root = clojure.test.check.rose_tree.root.call(null,rose);
var k = key_fn.call(null,root);
if(cljs.core.truth_(clojure.test.check.generators.transient_set_contains_QMARK_.call(null,s,k))){
var G__209 = rose_trees;
var G__210 = s;
var G__211 = rng2;
var G__212 = (size__$1 + (1));
var G__213 = (tries + (1));
rose_trees = G__209;
s = G__210;
rng__$1 = G__211;
size__$1 = G__212;
tries = G__213;
continue;
} else {
var G__214 = cljs.core.conj_BANG_.call(null,rose_trees,rose);
var G__215 = cljs.core.conj_BANG_.call(null,s,k);
var G__216 = rng2;
var G__217 = size__$1;
var G__218 = (0);
rose_trees = G__214;
s = G__215;
rng__$1 = G__216;
size__$1 = G__217;
tries = G__218;
continue;
}

}
}
break;
}
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.coll_distinct_by_STAR_;},new cljs.core.Symbol("clojure.test.check.generators","coll-distinct-by*","clojure.test.check.generators/coll-distinct-by*",(2142340968),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"coll-distinct-by*","coll-distinct-by*",(-532237216),null),"clojure/test/check/generators.cljc",(34),(1),(540),(540),cljs.core.list(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"empty-coll","empty-coll",(-1766089024),null),new cljs.core.Symbol(null,"key-fn","key-fn",(1004377048),null),new cljs.core.Symbol(null,"shuffle-fn","shuffle-fn",(805593803),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"rng","rng",(-1571769753),null),new cljs.core.Symbol(null,"size","size",(-1555742762),null),new cljs.core.Symbol(null,"num-elements","num-elements",(-694013662),null),new cljs.core.Symbol(null,"min-elements","min-elements",(-1705064989),null),new cljs.core.Symbol(null,"max-tries","max-tries",(-183910265),null)], null)),"Returns a rose tree.",(cljs.core.truth_(clojure.test.check.generators.coll_distinct_by_STAR_)?clojure.test.check.generators.coll_distinct_by_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Like clojure.core/distinct? but takes a collection instead of varargs,
 *   and returns true for empty collections.
 */
(function (){
clojure.test.check.generators.distinct_by_QMARK_ = (function clojure$test$check$generators$distinct_by_QMARK_(f,coll){
var or__20817__auto__ = cljs.core.empty_QMARK_.call(null,coll);
if(or__20817__auto__){
return or__20817__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,cljs.core.map.call(null,f,coll));
}
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.distinct_by_QMARK_;},new cljs.core.Symbol("clojure.test.check.generators","distinct-by?","clojure.test.check.generators/distinct-by?",(24295401),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"distinct-by?","distinct-by?",(-1884972335),null),"clojure/test/check/generators.cljc",(29),(1),(587),(587),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Like clojure.core/distinct? but takes a collection instead of varargs,\n  and returns true for empty collections.",(cljs.core.truth_(clojure.test.check.generators.distinct_by_QMARK_)?clojure.test.check.generators.distinct_by_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Returns a shuffled version of coll according to the rng.
 * 
 *   Note that this is not a generator, it is just a utility function.
 */
(function (){
clojure.test.check.generators.the_shuffle_fn = (function clojure$test$check$generators$the_shuffle_fn(rng,coll){
var empty_coll = cljs.core.empty.call(null,coll);
var v = cljs.core.vec.call(null,coll);
var card = cljs.core.count.call(null,coll);
var dec_card = (card - (1));
return cljs.core.into.call(null,empty_coll,cljs.core.first.call(null,cljs.core.reduce.call(null,((function (empty_coll,v,card,dec_card){
return (function (p__226,idx){
var vec__227 = p__226;
var v__$1 = cljs.core.nth.call(null,vec__227,(0),null);
var rng__$1 = cljs.core.nth.call(null,vec__227,(1),null);
var vec__230 = clojure.test.check.random.split.call(null,rng__$1);
var rng1 = cljs.core.nth.call(null,vec__230,(0),null);
var rng2 = cljs.core.nth.call(null,vec__230,(1),null);
var swap_idx = clojure.test.check.generators.rand_range.call(null,rng1,idx,dec_card);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.swap.call(null,v__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,swap_idx], null)),rng2], null);
});})(empty_coll,v,card,dec_card))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,rng], null),cljs.core.range.call(null,card))));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.the_shuffle_fn;},new cljs.core.Symbol("clojure.test.check.generators","the-shuffle-fn","clojure.test.check.generators/the-shuffle-fn",(-1957073781),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"the-shuffle-fn","the-shuffle-fn",(413696403),null),"clojure/test/check/generators.cljc",(31),(1),(594),(594),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rng","rng",(-1571769753),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Returns a shuffled version of coll according to the rng.\n\n  Note that this is not a generator, it is just a utility function.",(cljs.core.truth_(clojure.test.check.generators.the_shuffle_fn)?clojure.test.check.generators.the_shuffle_fn.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.coll_distinct_by = (function clojure$test$check$generators$coll_distinct_by(empty_coll,key_fn,allows_dupes_QMARK_,ordered_QMARK_,gen,p__233){
var map__236 = p__233;
var map__236__$1 = ((((!((map__236 == null)))?((((map__236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__236.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__236):map__236);
var max_elements = cljs.core.get.call(null,map__236__$1,new cljs.core.Keyword(null,"max-elements","max-elements",(433034073)));
var num_elements = cljs.core.get.call(null,map__236__$1,new cljs.core.Keyword(null,"num-elements","num-elements",(1960422107)));
var min_elements = cljs.core.get.call(null,map__236__$1,new cljs.core.Keyword(null,"min-elements","min-elements",(949370780)));
var max_tries = cljs.core.get.call(null,map__236__$1,new cljs.core.Keyword(null,"max-tries","max-tries",(-1824441792)),(10));
var shuffle_fn = (cljs.core.truth_(ordered_QMARK_)?clojure.test.check.generators.the_shuffle_fn:((function (map__236,map__236__$1,max_elements,num_elements,min_elements,max_tries){
return (function (_rng,coll){
return coll;
});})(map__236,map__236__$1,max_elements,num_elements,min_elements,max_tries))
);
var hard_min_elements = (function (){var or__20817__auto__ = num_elements;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
var or__20817__auto____$1 = min_elements;
if(cljs.core.truth_(or__20817__auto____$1)){
return or__20817__auto____$1;
} else {
return (1);
}
}
})();
if(cljs.core.truth_(num_elements)){
var size_pred = ((function (shuffle_fn,hard_min_elements,map__236,map__236__$1,max_elements,num_elements,min_elements,max_tries){
return (function (p1__26_SHARP_){
return cljs.core._EQ_.call(null,num_elements,cljs.core.count.call(null,p1__26_SHARP_));
});})(shuffle_fn,hard_min_elements,map__236,map__236__$1,max_elements,num_elements,min_elements,max_tries))
;
if(((min_elements == null)) && ((max_elements == null))){
} else {
throw (new Error("Assert failed: (and (nil? min-elements) (nil? max-elements))"));
}

return clojure.test.check.generators.make_gen.call(null,((function (size_pred,shuffle_fn,hard_min_elements,map__236,map__236__$1,max_elements,num_elements,min_elements,max_tries){
return (function (rng,gen_size){
return clojure.test.check.rose_tree.filter.call(null,(cljs.core.truth_(allows_dupes_QMARK_)?cljs.core.every_pred.call(null,size_pred,((function (size_pred,shuffle_fn,hard_min_elements,map__236,map__236__$1,max_elements,num_elements,min_elements,max_tries){
return (function (p1__27_SHARP_){
return clojure.test.check.generators.distinct_by_QMARK_.call(null,key_fn,p1__27_SHARP_);
});})(size_pred,shuffle_fn,hard_min_elements,map__236,map__236__$1,max_elements,num_elements,min_elements,max_tries))
):size_pred),clojure.test.check.generators.coll_distinct_by_STAR_.call(null,empty_coll,key_fn,shuffle_fn,gen,rng,gen_size,num_elements,hard_min_elements,max_tries));
});})(size_pred,shuffle_fn,hard_min_elements,map__236,map__236__$1,max_elements,num_elements,min_elements,max_tries))
);
} else {
var min_elements__$1 = (function (){var or__20817__auto__ = min_elements;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return (0);
}
})();
var size_pred = (cljs.core.truth_(max_elements)?((function (min_elements__$1,shuffle_fn,hard_min_elements,map__236,map__236__$1,max_elements,num_elements,min_elements,max_tries){
return (function (p1__28_SHARP_){
return ((min_elements__$1 <= cljs.core.count.call(null,p1__28_SHARP_))) && ((cljs.core.count.call(null,p1__28_SHARP_) <= max_elements));
});})(min_elements__$1,shuffle_fn,hard_min_elements,map__236,map__236__$1,max_elements,num_elements,min_elements,max_tries))
:((function (min_elements__$1,shuffle_fn,hard_min_elements,map__236,map__236__$1,max_elements,num_elements,min_elements,max_tries){
return (function (p1__29_SHARP_){
return (min_elements__$1 <= cljs.core.count.call(null,p1__29_SHARP_));
});})(min_elements__$1,shuffle_fn,hard_min_elements,map__236,map__236__$1,max_elements,num_elements,min_elements,max_tries))
);
return clojure.test.check.generators.gen_bind.call(null,(cljs.core.truth_(max_elements)?clojure.test.check.generators.choose.call(null,min_elements__$1,max_elements):clojure.test.check.generators.sized.call(null,((function (min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__236,map__236__$1,max_elements,num_elements,min_elements,max_tries){
return (function (p1__30_SHARP_){
return clojure.test.check.generators.choose.call(null,min_elements__$1,(min_elements__$1 + p1__30_SHARP_));
});})(min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__236,map__236__$1,max_elements,num_elements,min_elements,max_tries))
)),((function (min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__236,map__236__$1,max_elements,num_elements,min_elements,max_tries){
return (function (num_elements_rose){
var num_elements__$1 = clojure.test.check.rose_tree.root.call(null,num_elements_rose);
return clojure.test.check.generators.make_gen.call(null,((function (num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__236,map__236__$1,max_elements,num_elements,min_elements,max_tries){
return (function (rng,gen_size){
return clojure.test.check.rose_tree.filter.call(null,(cljs.core.truth_(allows_dupes_QMARK_)?cljs.core.every_pred.call(null,size_pred,((function (num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__236,map__236__$1,max_elements,num_elements,min_elements,max_tries){
return (function (p1__31_SHARP_){
return clojure.test.check.generators.distinct_by_QMARK_.call(null,key_fn,p1__31_SHARP_);
});})(num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__236,map__236__$1,max_elements,num_elements,min_elements,max_tries))
):size_pred),clojure.test.check.generators.coll_distinct_by_STAR_.call(null,empty_coll,key_fn,shuffle_fn,gen,rng,gen_size,num_elements__$1,hard_min_elements,max_tries));
});})(num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__236,map__236__$1,max_elements,num_elements,min_elements,max_tries))
);
});})(min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__236,map__236__$1,max_elements,num_elements,min_elements,max_tries))
);
}
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.coll_distinct_by;},new cljs.core.Symbol("clojure.test.check.generators","coll-distinct-by","clojure.test.check.generators/coll-distinct-by",(657224634),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"coll-distinct-by","coll-distinct-by",(-1233303886),null),"clojure/test/check/generators.cljc",(33),(1),(612),(612),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"empty-coll","empty-coll",(-1766089024),null),new cljs.core.Symbol(null,"key-fn","key-fn",(1004377048),null),new cljs.core.Symbol(null,"allows-dupes?","allows-dupes?",(188843409),null),new cljs.core.Symbol(null,"ordered?","ordered?",(-1842273081),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"max-tries","max-tries",(-183910265),null),(10)], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num-elements","num-elements",(-694013662),null),new cljs.core.Symbol(null,"min-elements","min-elements",(-1705064989),null),new cljs.core.Symbol(null,"max-elements","max-elements",(2073565600),null),new cljs.core.Symbol(null,"max-tries","max-tries",(-183910265),null)], null)], null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.coll_distinct_by)?clojure.test.check.generators.coll_distinct_by.cljs$lang$test:null)])));})()
;
/**
 * Generates a vector of elements from the given generator, with the
 *   guarantee that the elements will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
(function (){
clojure.test.check.generators.vector_distinct = (function clojure$test$check$generators$vector_distinct(var_args){
var args238 = [];
var len__23656__auto___241 = arguments.length;
var i__23657__auto___242 = (0);
while(true){
if((i__23657__auto___242 < len__23656__auto___241)){
args238.push((arguments[i__23657__auto___242]));

var G__243 = (i__23657__auto___242 + (1));
i__23657__auto___242 = G__243;
continue;
} else {
}
break;
}

var G__240 = args238.length;
switch (G__240) {
case (1):
return clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args238.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.vector_distinct;},new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",(1656877834),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"vector-distinct","vector-distinct",(294553090),null),"clojure/test/check/generators.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(657),(657),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Generates a vector of elements from the given generator, with the\n  guarantee that the elements will be distinct.\n\n  If the generator cannot or is unlikely to produce enough distinct\n  elements, this generator will fail in the same way as such-that.\n\n  Available options:\n\n    :num-elements  the fixed size of generated vectors\n    :min-elements  the min size of generated vectors\n    :max-elements  the max size of generated vectors\n    :max-tries     the number of times the generator will be tried before\n                   failing when it does not produce distinct elements\n                   (default 10)",(cljs.core.truth_(clojure.test.check.generators.vector_distinct)?clojure.test.check.generators.vector_distinct.cljs$lang$test:null)])));})()
;

clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.vector_distinct.call(null,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to vector-distinct must be a generator!"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.identity,true,true,gen,opts);
});

clojure.test.check.generators.vector_distinct.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return clojure.test.check.generators.vector_distinct;},new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",(1656877834),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"vector-distinct","vector-distinct",(294553090),null),"clojure/test/check/generators.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(657),(657),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Generates a vector of elements from the given generator, with the\n  guarantee that the elements will be distinct.\n\n  If the generator cannot or is unlikely to produce enough distinct\n  elements, this generator will fail in the same way as such-that.\n\n  Available options:\n\n    :num-elements  the fixed size of generated vectors\n    :min-elements  the min size of generated vectors\n    :max-elements  the max size of generated vectors\n    :max-tries     the number of times the generator will be tried before\n                   failing when it does not produce distinct elements\n                   (default 10)",(cljs.core.truth_(clojure.test.check.generators.vector_distinct)?clojure.test.check.generators.vector_distinct.cljs$lang$test:null)]));
/**
 * Generates a list of elements from the given generator, with the
 *   guarantee that the elements will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
(function (){
clojure.test.check.generators.list_distinct = (function clojure$test$check$generators$list_distinct(var_args){
var args245 = [];
var len__23656__auto___248 = arguments.length;
var i__23657__auto___249 = (0);
while(true){
if((i__23657__auto___249 < len__23656__auto___248)){
args245.push((arguments[i__23657__auto___249]));

var G__250 = (i__23657__auto___249 + (1));
i__23657__auto___249 = G__250;
continue;
} else {
}
break;
}

var G__247 = args245.length;
switch (G__247) {
case (1):
return clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args245.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.list_distinct;},new cljs.core.Symbol("clojure.test.check.generators","list-distinct","clojure.test.check.generators/list-distinct",(-1693426277),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"list-distinct","list-distinct",(172052195),null),"clojure/test/check/generators.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(677),(677),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Generates a list of elements from the given generator, with the\n  guarantee that the elements will be distinct.\n\n  If the generator cannot or is unlikely to produce enough distinct\n  elements, this generator will fail in the same way as such-that.\n\n  Available options:\n\n    :num-elements  the fixed size of generated vectors\n    :min-elements  the min size of generated vectors\n    :max-elements  the max size of generated vectors\n    :max-tries     the number of times the generator will be tried before\n                   failing when it does not produce distinct elements\n                   (default 10)",(cljs.core.truth_(clojure.test.check.generators.list_distinct)?clojure.test.check.generators.list_distinct.cljs$lang$test:null)])));})()
;

clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.list_distinct.call(null,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to list-distinct must be a generator!"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.List.EMPTY,cljs.core.identity,true,true,gen,opts);
});

clojure.test.check.generators.list_distinct.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return clojure.test.check.generators.list_distinct;},new cljs.core.Symbol("clojure.test.check.generators","list-distinct","clojure.test.check.generators/list-distinct",(-1693426277),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"list-distinct","list-distinct",(172052195),null),"clojure/test/check/generators.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(677),(677),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Generates a list of elements from the given generator, with the\n  guarantee that the elements will be distinct.\n\n  If the generator cannot or is unlikely to produce enough distinct\n  elements, this generator will fail in the same way as such-that.\n\n  Available options:\n\n    :num-elements  the fixed size of generated vectors\n    :min-elements  the min size of generated vectors\n    :max-elements  the max size of generated vectors\n    :max-tries     the number of times the generator will be tried before\n                   failing when it does not produce distinct elements\n                   (default 10)",(cljs.core.truth_(clojure.test.check.generators.list_distinct)?clojure.test.check.generators.list_distinct.cljs$lang$test:null)]));
/**
 * Generates a vector of elements from the given generator, with the
 *   guarantee that (map key-fn the-vector) will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
(function (){
clojure.test.check.generators.vector_distinct_by = (function clojure$test$check$generators$vector_distinct_by(var_args){
var args252 = [];
var len__23656__auto___255 = arguments.length;
var i__23657__auto___256 = (0);
while(true){
if((i__23657__auto___256 < len__23656__auto___255)){
args252.push((arguments[i__23657__auto___256]));

var G__257 = (i__23657__auto___256 + (1));
i__23657__auto___256 = G__257;
continue;
} else {
}
break;
}

var G__254 = args252.length;
switch (G__254) {
case (2):
return clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args252.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.vector_distinct_by;},new cljs.core.Symbol("clojure.test.check.generators","vector-distinct-by","clojure.test.check.generators/vector-distinct-by",(1476761348),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"vector-distinct-by","vector-distinct-by",(-382434692),null),"clojure/test/check/generators.cljc",(25),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-fn","key-fn",(1004377048),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-fn","key-fn",(1004377048),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-fn","key-fn",(1004377048),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-fn","key-fn",(1004377048),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(697),(697),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-fn","key-fn",(1004377048),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-fn","key-fn",(1004377048),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Generates a vector of elements from the given generator, with the\n  guarantee that (map key-fn the-vector) will be distinct.\n\n  If the generator cannot or is unlikely to produce enough distinct\n  elements, this generator will fail in the same way as such-that.\n\n  Available options:\n\n    :num-elements  the fixed size of generated vectors\n    :min-elements  the min size of generated vectors\n    :max-elements  the max size of generated vectors\n    :max-tries     the number of times the generator will be tried before\n                   failing when it does not produce distinct elements\n                   (default 10)",(cljs.core.truth_(clojure.test.check.generators.vector_distinct_by)?clojure.test.check.generators.vector_distinct_by.cljs$lang$test:null)])));})()
;

clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (key_fn,gen){
return clojure.test.check.generators.vector_distinct_by.call(null,key_fn,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$3 = (function (key_fn,gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to vector-distinct-by must be a generator!"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.PersistentVector.EMPTY,key_fn,true,true,gen,opts);
});

clojure.test.check.generators.vector_distinct_by.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return clojure.test.check.generators.vector_distinct_by;},new cljs.core.Symbol("clojure.test.check.generators","vector-distinct-by","clojure.test.check.generators/vector-distinct-by",(1476761348),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"vector-distinct-by","vector-distinct-by",(-382434692),null),"clojure/test/check/generators.cljc",(25),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-fn","key-fn",(1004377048),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-fn","key-fn",(1004377048),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-fn","key-fn",(1004377048),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-fn","key-fn",(1004377048),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(697),(697),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-fn","key-fn",(1004377048),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-fn","key-fn",(1004377048),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Generates a vector of elements from the given generator, with the\n  guarantee that (map key-fn the-vector) will be distinct.\n\n  If the generator cannot or is unlikely to produce enough distinct\n  elements, this generator will fail in the same way as such-that.\n\n  Available options:\n\n    :num-elements  the fixed size of generated vectors\n    :min-elements  the min size of generated vectors\n    :max-elements  the max size of generated vectors\n    :max-tries     the number of times the generator will be tried before\n                   failing when it does not produce distinct elements\n                   (default 10)",(cljs.core.truth_(clojure.test.check.generators.vector_distinct_by)?clojure.test.check.generators.vector_distinct_by.cljs$lang$test:null)]));
/**
 * Generates a list of elements from the given generator, with the
 *   guarantee that (map key-fn the-list) will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
(function (){
clojure.test.check.generators.list_distinct_by = (function clojure$test$check$generators$list_distinct_by(var_args){
var args259 = [];
var len__23656__auto___262 = arguments.length;
var i__23657__auto___263 = (0);
while(true){
if((i__23657__auto___263 < len__23656__auto___262)){
args259.push((arguments[i__23657__auto___263]));

var G__264 = (i__23657__auto___263 + (1));
i__23657__auto___263 = G__264;
continue;
} else {
}
break;
}

var G__261 = args259.length;
switch (G__261) {
case (2):
return clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args259.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.list_distinct_by;},new cljs.core.Symbol("clojure.test.check.generators","list-distinct-by","clojure.test.check.generators/list-distinct-by",(413059571),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"list-distinct-by","list-distinct-by",(-1982866229),null),"clojure/test/check/generators.cljc",(23),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-fn","key-fn",(1004377048),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-fn","key-fn",(1004377048),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-fn","key-fn",(1004377048),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-fn","key-fn",(1004377048),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(717),(717),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-fn","key-fn",(1004377048),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-fn","key-fn",(1004377048),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Generates a list of elements from the given generator, with the\n  guarantee that (map key-fn the-list) will be distinct.\n\n  If the generator cannot or is unlikely to produce enough distinct\n  elements, this generator will fail in the same way as such-that.\n\n  Available options:\n\n    :num-elements  the fixed size of generated vectors\n    :min-elements  the min size of generated vectors\n    :max-elements  the max size of generated vectors\n    :max-tries     the number of times the generator will be tried before\n                   failing when it does not produce distinct elements\n                   (default 10)",(cljs.core.truth_(clojure.test.check.generators.list_distinct_by)?clojure.test.check.generators.list_distinct_by.cljs$lang$test:null)])));})()
;

clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (key_fn,gen){
return clojure.test.check.generators.list_distinct_by.call(null,key_fn,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$3 = (function (key_fn,gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to list-distinct-by must be a generator!"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.List.EMPTY,key_fn,true,true,gen,opts);
});

clojure.test.check.generators.list_distinct_by.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return clojure.test.check.generators.list_distinct_by;},new cljs.core.Symbol("clojure.test.check.generators","list-distinct-by","clojure.test.check.generators/list-distinct-by",(413059571),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"list-distinct-by","list-distinct-by",(-1982866229),null),"clojure/test/check/generators.cljc",(23),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-fn","key-fn",(1004377048),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-fn","key-fn",(1004377048),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-fn","key-fn",(1004377048),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-fn","key-fn",(1004377048),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(717),(717),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-fn","key-fn",(1004377048),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-fn","key-fn",(1004377048),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Generates a list of elements from the given generator, with the\n  guarantee that (map key-fn the-list) will be distinct.\n\n  If the generator cannot or is unlikely to produce enough distinct\n  elements, this generator will fail in the same way as such-that.\n\n  Available options:\n\n    :num-elements  the fixed size of generated vectors\n    :min-elements  the min size of generated vectors\n    :max-elements  the max size of generated vectors\n    :max-tries     the number of times the generator will be tried before\n                   failing when it does not produce distinct elements\n                   (default 10)",(cljs.core.truth_(clojure.test.check.generators.list_distinct_by)?clojure.test.check.generators.list_distinct_by.cljs$lang$test:null)]));
/**
 * Generates a set of elements from the given generator.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
(function (){
clojure.test.check.generators.set = (function clojure$test$check$generators$set(var_args){
var args266 = [];
var len__23656__auto___269 = arguments.length;
var i__23657__auto___270 = (0);
while(true){
if((i__23657__auto___270 < len__23656__auto___269)){
args266.push((arguments[i__23657__auto___270]));

var G__271 = (i__23657__auto___270 + (1));
i__23657__auto___270 = G__271;
continue;
} else {
}
break;
}

var G__268 = args266.length;
switch (G__268) {
case (1):
return clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args266.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.set;},new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",(-1027639543),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"set","set",(1945134081),null),"clojure/test/check/generators.cljc",(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(737),(737),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Generates a set of elements from the given generator.\n\n  If the generator cannot or is unlikely to produce enough distinct\n  elements, this generator will fail in the same way as such-that.\n\n  Available options:\n\n    :num-elements  the fixed size of generated vectors\n    :min-elements  the min size of generated vectors\n    :max-elements  the max size of generated vectors\n    :max-tries     the number of times the generator will be tried before\n                   failing when it does not produce distinct elements\n                   (default 10)",(cljs.core.truth_(clojure.test.check.generators.set)?clojure.test.check.generators.set.cljs$lang$test:null)])));})()
;

clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.set.call(null,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to set must be a generator!"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.identity,false,false,gen,opts);
});

clojure.test.check.generators.set.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return clojure.test.check.generators.set;},new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",(-1027639543),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"set","set",(1945134081),null),"clojure/test/check/generators.cljc",(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(737),(737),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Generates a set of elements from the given generator.\n\n  If the generator cannot or is unlikely to produce enough distinct\n  elements, this generator will fail in the same way as such-that.\n\n  Available options:\n\n    :num-elements  the fixed size of generated vectors\n    :min-elements  the min size of generated vectors\n    :max-elements  the max size of generated vectors\n    :max-tries     the number of times the generator will be tried before\n                   failing when it does not produce distinct elements\n                   (default 10)",(cljs.core.truth_(clojure.test.check.generators.set)?clojure.test.check.generators.set.cljs$lang$test:null)]));
/**
 * Generates a sorted set of elements from the given generator.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
(function (){
clojure.test.check.generators.sorted_set = (function clojure$test$check$generators$sorted_set(var_args){
var args273 = [];
var len__23656__auto___276 = arguments.length;
var i__23657__auto___277 = (0);
while(true){
if((i__23657__auto___277 < len__23656__auto___276)){
args273.push((arguments[i__23657__auto___277]));

var G__278 = (i__23657__auto___277 + (1));
i__23657__auto___277 = G__278;
continue;
} else {
}
break;
}

var G__275 = args273.length;
switch (G__275) {
case (1):
return clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args273.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.sorted_set;},new cljs.core.Symbol("clojure.test.check.generators","sorted-set","clojure.test.check.generators/sorted-set",(-1407942616),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"sorted-set","sorted-set",(992325424),null),"clojure/test/check/generators.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(756),(756),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Generates a sorted set of elements from the given generator.\n\n  If the generator cannot or is unlikely to produce enough distinct\n  elements, this generator will fail in the same way as such-that.\n\n  Available options:\n\n    :num-elements  the fixed size of generated vectors\n    :min-elements  the min size of generated vectors\n    :max-elements  the max size of generated vectors\n    :max-tries     the number of times the generator will be tried before\n                   failing when it does not produce distinct elements\n                   (default 10)",(cljs.core.truth_(clojure.test.check.generators.sorted_set)?clojure.test.check.generators.sorted_set.cljs$lang$test:null)])));})()
;

clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.sorted_set.call(null,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to sorted-set must be a generator!"),cljs.core.str("\n"),cljs.core.str("(generator? gen)")].join('')));
}

return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.sorted_set.call(null),cljs.core.identity,false,false,gen,opts);
});

clojure.test.check.generators.sorted_set.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return clojure.test.check.generators.sorted_set;},new cljs.core.Symbol("clojure.test.check.generators","sorted-set","clojure.test.check.generators/sorted-set",(-1407942616),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"sorted-set","sorted-set",(992325424),null),"clojure/test/check/generators.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(756),(756),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Generates a sorted set of elements from the given generator.\n\n  If the generator cannot or is unlikely to produce enough distinct\n  elements, this generator will fail in the same way as such-that.\n\n  Available options:\n\n    :num-elements  the fixed size of generated vectors\n    :min-elements  the min size of generated vectors\n    :max-elements  the max size of generated vectors\n    :max-tries     the number of times the generator will be tried before\n                   failing when it does not produce distinct elements\n                   (default 10)",(cljs.core.truth_(clojure.test.check.generators.sorted_set)?clojure.test.check.generators.sorted_set.cljs$lang$test:null)]));
/**
 * Create a generator that generates maps, with keys chosen from
 *   `key-gen` and values chosen from `val-gen`.
 * 
 *   If the key generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
(function (){
clojure.test.check.generators.map = (function clojure$test$check$generators$map(var_args){
var args280 = [];
var len__23656__auto___283 = arguments.length;
var i__23657__auto___284 = (0);
while(true){
if((i__23657__auto___284 < len__23656__auto___283)){
args280.push((arguments[i__23657__auto___284]));

var G__285 = (i__23657__auto___284 + (1));
i__23657__auto___284 = G__285;
continue;
} else {
}
break;
}

var G__282 = args280.length;
switch (G__282) {
case (2):
return clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args280.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.map;},new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",(45738796),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"map","map",(-1282745308),null),"clojure/test/check/generators.cljc",(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-gen","key-gen",(415199034),null),new cljs.core.Symbol(null,"val-gen","val-gen",(1908485367),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-gen","key-gen",(415199034),null),new cljs.core.Symbol(null,"val-gen","val-gen",(1908485367),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-gen","key-gen",(415199034),null),new cljs.core.Symbol(null,"val-gen","val-gen",(1908485367),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-gen","key-gen",(415199034),null),new cljs.core.Symbol(null,"val-gen","val-gen",(1908485367),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(775),(775),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-gen","key-gen",(415199034),null),new cljs.core.Symbol(null,"val-gen","val-gen",(1908485367),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-gen","key-gen",(415199034),null),new cljs.core.Symbol(null,"val-gen","val-gen",(1908485367),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Create a generator that generates maps, with keys chosen from\n  `key-gen` and values chosen from `val-gen`.\n\n  If the key generator cannot or is unlikely to produce enough distinct\n  elements, this generator will fail in the same way as such-that.\n\n  Available options:\n\n    :num-elements  the fixed size of generated vectors\n    :min-elements  the min size of generated vectors\n    :max-elements  the max size of generated vectors\n    :max-tries     the number of times the generator will be tried before\n                   failing when it does not produce distinct elements\n                   (default 10)",(cljs.core.truth_(clojure.test.check.generators.map)?clojure.test.check.generators.map.cljs$lang$test:null)])));})()
;

clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$2 = (function (key_gen,val_gen){
return clojure.test.check.generators.map.call(null,key_gen,val_gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$3 = (function (key_gen,val_gen,opts){
return clojure.test.check.generators.coll_distinct_by.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.first,false,false,clojure.test.check.generators.tuple.call(null,key_gen,val_gen),opts);
});

clojure.test.check.generators.map.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return clojure.test.check.generators.map;},new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",(45738796),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"map","map",(-1282745308),null),"clojure/test/check/generators.cljc",(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-gen","key-gen",(415199034),null),new cljs.core.Symbol(null,"val-gen","val-gen",(1908485367),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-gen","key-gen",(415199034),null),new cljs.core.Symbol(null,"val-gen","val-gen",(1908485367),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-gen","key-gen",(415199034),null),new cljs.core.Symbol(null,"val-gen","val-gen",(1908485367),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-gen","key-gen",(415199034),null),new cljs.core.Symbol(null,"val-gen","val-gen",(1908485367),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(775),(775),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-gen","key-gen",(415199034),null),new cljs.core.Symbol(null,"val-gen","val-gen",(1908485367),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-gen","key-gen",(415199034),null),new cljs.core.Symbol(null,"val-gen","val-gen",(1908485367),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Create a generator that generates maps, with keys chosen from\n  `key-gen` and values chosen from `val-gen`.\n\n  If the key generator cannot or is unlikely to produce enough distinct\n  elements, this generator will fail in the same way as such-that.\n\n  Available options:\n\n    :num-elements  the fixed size of generated vectors\n    :min-elements  the min size of generated vectors\n    :max-elements  the max size of generated vectors\n    :max-tries     the number of times the generator will be tried before\n                   failing when it does not produce distinct elements\n                   (default 10)",(cljs.core.truth_(clojure.test.check.generators.map)?clojure.test.check.generators.map.cljs$lang$test:null)]));
/**
 * Generates a single uniformly random long, does not shrink.
 */
(function (){
clojure.test.check.generators.gen_raw_long = clojure.test.check.generators.make_gen.call(null,(function (rnd,_size){
return clojure.test.check.rose_tree.pure.call(null,clojure.test.check.random.rand_long.call(null,rnd));
})); return (
new cljs.core.Var(function(){return clojure.test.check.generators.gen_raw_long;},new cljs.core.Symbol("clojure.test.check.generators","gen-raw-long","clojure.test.check.generators/gen-raw-long",(1351110606),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"gen-raw-long","gen-raw-long",(-1481025226),null),"clojure/test/check/generators.cljc",(28),(1),(800),(800),cljs.core.List.EMPTY,"Generates a single uniformly random long, does not shrink.",(cljs.core.truth_(clojure.test.check.generators.gen_raw_long)?clojure.test.check.generators.gen_raw_long.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.MAX_INTEGER = (cljs.core.apply.call(null,cljs.core._STAR_,cljs.core.repeat.call(null,(53),(2))) - (1)); return (
new cljs.core.Var(function(){return clojure.test.check.generators.MAX_INTEGER;},new cljs.core.Symbol("clojure.test.check.generators","MAX_INTEGER","clojure.test.check.generators/MAX_INTEGER",(809930053),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"MAX_INTEGER","MAX_INTEGER",(1098381437),null),"clojure/test/check/generators.cljc",(27),(1),(805),(805),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.test.check.generators.MAX_INTEGER)?clojure.test.check.generators.MAX_INTEGER.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.MIN_INTEGER = (- clojure.test.check.generators.MAX_INTEGER); return (
new cljs.core.Var(function(){return clojure.test.check.generators.MIN_INTEGER;},new cljs.core.Symbol("clojure.test.check.generators","MIN_INTEGER","clojure.test.check.generators/MIN_INTEGER",(-1198537445),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"MIN_INTEGER","MIN_INTEGER",(733532163),null),"clojure/test/check/generators.cljc",(27),(1),(807),(807),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.test.check.generators.MIN_INTEGER)?clojure.test.check.generators.MIN_INTEGER.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.abs = (function clojure$test$check$generators$abs(x){
return Math.abs(x);
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.abs;},new cljs.core.Symbol("clojure.test.check.generators","abs","clojure.test.check.generators/abs",(577734210),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"abs","abs",(1394505050),null),"clojure/test/check/generators.cljc",(20),(1),(810),(810),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.abs)?clojure.test.check.generators.abs.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.long__GT_large_integer = (function clojure$test$check$generators$long__GT_large_integer(bit_count,x,min,max){
var res = (function (){var G__289 = x.shiftRight(((64) - bit_count)).toNumber();
var G__289__$1 = (((min === (0)))?clojure.test.check.generators.abs.call(null,G__289):G__289);
return G__289__$1;
})();
while(true){
if(((min <= res)) && ((res <= max))){
return res;
} else {
var res_SINGLEQUOTE_ = (- res);
if(((min <= res_SINGLEQUOTE_)) && ((res_SINGLEQUOTE_ <= max))){
return res_SINGLEQUOTE_;
} else {
var G__291 = ((function (){var G__290 = res;
var G__290__$1 = ((cljs.core.odd_QMARK_.call(null,res))?(((res < (0)))?cljs.core.inc:cljs.core.dec).call(null,G__290):G__290);
return G__290__$1;
})() / (2));
res = G__291;
continue;
}
}
break;
}
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.long__GT_large_integer;},new cljs.core.Symbol("clojure.test.check.generators","long->large-integer","clojure.test.check.generators/long->large-integer",(489570097),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"long->large-integer","long->large-integer",(1675579913),null),"clojure/test/check/generators.cljc",(36),(1),(814),(814),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bit-count","bit-count",(1400227397),null),new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"min","min",(2085523049),null),new cljs.core.Symbol(null,"max","max",(1701898075),null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.long__GT_large_integer)?clojure.test.check.generators.long__GT_large_integer.cljs$lang$test:null)])));})()
;
/**
 * Like large-integer*, but assumes range includes zero.
 */
(function (){
clojure.test.check.generators.large_integer_STAR__STAR_ = (function clojure$test$check$generators$large_integer_STAR__STAR_(min,max){
return clojure.test.check.generators.sized.call(null,(function (size){
var size__$1 = (function (){var x__21615__auto__ = size;
var y__21616__auto__ = (1);
return ((x__21615__auto__ > y__21616__auto__) ? x__21615__auto__ : y__21616__auto__);
})();
var max_bit_count = (function (){var x__21649__auto__ = size__$1;
var y__21650__auto__ = (54);
return ((x__21649__auto__ < y__21650__auto__) ? x__21649__auto__ : y__21650__auto__);
})();
return clojure.test.check.generators.gen_fmap.call(null,((function (size__$1,max_bit_count){
return (function (rose){
var vec__295 = clojure.test.check.rose_tree.root.call(null,rose);
var bit_count = cljs.core.nth.call(null,vec__295,(0),null);
var x = cljs.core.nth.call(null,vec__295,(1),null);
return clojure.test.check.generators.int_rose_tree.call(null,clojure.test.check.generators.long__GT_large_integer.call(null,bit_count,x,min,max));
});})(size__$1,max_bit_count))
,clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.choose.call(null,(1),max_bit_count),clojure.test.check.generators.gen_raw_long));
}));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.large_integer_STAR__STAR_;},new cljs.core.Symbol("clojure.test.check.generators","large-integer**","clojure.test.check.generators/large-integer**",(1878283194),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"large-integer**","large-integer**",(-526040926),null),"clojure/test/check/generators.cljc",(32),(1),(835),(835),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"min","min",(2085523049),null),new cljs.core.Symbol(null,"max","max",(1701898075),null)], null)),"Like large-integer*, but assumes range includes zero.",(cljs.core.truth_(clojure.test.check.generators.large_integer_STAR__STAR_)?clojure.test.check.generators.large_integer_STAR__STAR_.cljs$lang$test:null)])));})()
;
/**
 * Like large-integer, but accepts options:
 * 
 *  :min  the minimum integer (inclusive)
 *  :max  the maximum integer (inclusive)
 * 
 *   Both :min and :max are optional.
 */
(function (){
clojure.test.check.generators.large_integer_STAR_ = (function clojure$test$check$generators$large_integer_STAR_(p__298){
var map__301 = p__298;
var map__301__$1 = ((((!((map__301 == null)))?((((map__301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__301):map__301);
var min = cljs.core.get.call(null,map__301__$1,new cljs.core.Keyword(null,"min","min",(444991522)));
var max = cljs.core.get.call(null,map__301__$1,new cljs.core.Keyword(null,"max","max",(61366548)));
var min__$1 = (function (){var or__20817__auto__ = min;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return clojure.test.check.generators.MIN_INTEGER;
}
})();
var max__$1 = (function (){var or__20817__auto__ = max;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return clojure.test.check.generators.MAX_INTEGER;
}
})();
if((min__$1 <= max__$1)){
} else {
throw (new Error("Assert failed: (<= min max)"));
}

return clojure.test.check.generators.such_that.call(null,((function (min__$1,max__$1,map__301,map__301__$1,min,max){
return (function (p1__32_SHARP_){
return ((min__$1 <= p1__32_SHARP_)) && ((p1__32_SHARP_ <= max__$1));
});})(min__$1,max__$1,map__301,map__301__$1,min,max))
,((((min__$1 <= (0))) && (((0) <= max__$1)))?clojure.test.check.generators.large_integer_STAR__STAR_.call(null,min__$1,max__$1):(((max__$1 < (0)))?clojure.test.check.generators.fmap.call(null,((function (min__$1,max__$1,map__301,map__301__$1,min,max){
return (function (p1__33_SHARP_){
return (max__$1 + p1__33_SHARP_);
});})(min__$1,max__$1,map__301,map__301__$1,min,max))
,clojure.test.check.generators.large_integer_STAR__STAR_.call(null,(min__$1 - max__$1),(0))):clojure.test.check.generators.fmap.call(null,((function (min__$1,max__$1,map__301,map__301__$1,min,max){
return (function (p1__34_SHARP_){
return (min__$1 + p1__34_SHARP_);
});})(min__$1,max__$1,map__301,map__301__$1,min,max))
,clojure.test.check.generators.large_integer_STAR__STAR_.call(null,(0),(max__$1 - min__$1))))));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.large_integer_STAR_;},new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",(-437830670),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"large-integer*","large-integer*",(1454785786),null),"clojure/test/check/generators.cljc",(21),(1),(848),(848),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"min","min",(2085523049),null),new cljs.core.Symbol(null,"max","max",(1701898075),null)], null)], null)], null)),"Like large-integer, but accepts options:\n\n    :min  the minimum integer (inclusive)\n    :max  the maximum integer (inclusive)\n\n  Both :min and :max are optional.",(cljs.core.truth_(clojure.test.check.generators.large_integer_STAR_)?clojure.test.check.generators.large_integer_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Generates a platform-native integer from the full available range
 *   (in clj, 64-bit Longs, and in cljs, numbers between -(2^53 - 1) and
 *   (2^53 - 1)).
 * 
 *   Use large-integer* for more control.
 */
(function (){
clojure.test.check.generators.large_integer = clojure.test.check.generators.large_integer_STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY); return (
new cljs.core.Var(function(){return clojure.test.check.generators.large_integer;},new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",(-865967138),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"large-integer","large-integer",(2100515030),null),"clojure/test/check/generators.cljc",(19),(1),(866),(866),cljs.core.List.EMPTY,"Generates a platform-native integer from the full available range\n  (in clj, 64-bit Longs, and in cljs, numbers between -(2^53 - 1) and\n  (2^53 - 1)).\n\n  Use large-integer* for more control.",(cljs.core.truth_(clojure.test.check.generators.large_integer)?clojure.test.check.generators.large_integer.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.POS_INFINITY = Number.POSITIVE_INFINITY; return (
new cljs.core.Var(function(){return clojure.test.check.generators.POS_INFINITY;},new cljs.core.Symbol("clojure.test.check.generators","POS_INFINITY","clojure.test.check.generators/POS_INFINITY",(-1686312465),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"POS_INFINITY","POS_INFINITY",(139172599),null),"clojure/test/check/generators.cljc",(28),(1),(898),(898),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.test.check.generators.POS_INFINITY)?clojure.test.check.generators.POS_INFINITY.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.NEG_INFINITY = Number.NEGATIVE_INFINITY; return (
new cljs.core.Var(function(){return clojure.test.check.generators.NEG_INFINITY;},new cljs.core.Symbol("clojure.test.check.generators","NEG_INFINITY","clojure.test.check.generators/NEG_INFINITY",(-1211036766),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"NEG_INFINITY","NEG_INFINITY",(652221626),null),"clojure/test/check/generators.cljc",(28),(1),(899),(899),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.test.check.generators.NEG_INFINITY)?clojure.test.check.generators.NEG_INFINITY.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.MAX_POS_VALUE = Number.MAX_VALUE; return (
new cljs.core.Var(function(){return clojure.test.check.generators.MAX_POS_VALUE;},new cljs.core.Symbol("clojure.test.check.generators","MAX_POS_VALUE","clojure.test.check.generators/MAX_POS_VALUE",(-316704477),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"MAX_POS_VALUE","MAX_POS_VALUE",(1608520747),null),"clojure/test/check/generators.cljc",(29),(1),(900),(900),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.test.check.generators.MAX_POS_VALUE)?clojure.test.check.generators.MAX_POS_VALUE.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.MIN_NEG_VALUE = (- clojure.test.check.generators.MAX_POS_VALUE); return (
new cljs.core.Var(function(){return clojure.test.check.generators.MIN_NEG_VALUE;},new cljs.core.Symbol("clojure.test.check.generators","MIN_NEG_VALUE","clojure.test.check.generators/MIN_NEG_VALUE",(385966154),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"MIN_NEG_VALUE","MIN_NEG_VALUE",(-2033158846),null),"clojure/test/check/generators.cljc",(29),(1),(901),(901),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.test.check.generators.MIN_NEG_VALUE)?clojure.test.check.generators.MIN_NEG_VALUE.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.NAN = Number.NaN; return (
new cljs.core.Var(function(){return clojure.test.check.generators.NAN;},new cljs.core.Symbol("clojure.test.check.generators","NAN","clojure.test.check.generators/NAN",(-2066414818),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"NAN","NAN",(2007119382),null),"clojure/test/check/generators.cljc",(19),(1),(902),(902),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.test.check.generators.NAN)?clojure.test.check.generators.NAN.cljs$lang$test:null)])));})()
;
/**
 * Generates an integer uniformly in the range 0..(2^bit-count-1).
 */
(function (){
clojure.test.check.generators.uniform_integer = (function clojure$test$check$generators$uniform_integer(bit_count){
if((bit_count <= (32))){
return clojure.test.check.generators.choose.call(null,(0),(function (){var G__308 = cljs.core.long$.call(null,bit_count);
switch (G__308) {
case (32):
return (4294967295);

break;
case (31):
return (2147483647);

break;
default:
return (((1) << bit_count) - (1));

}
})());
} else {
return clojure.test.check.generators.fmap.call(null,(function (p__309){
var vec__310 = p__309;
var upper = cljs.core.nth.call(null,vec__310,(0),null);
var lower = cljs.core.nth.call(null,vec__310,(1),null);
return ((upper * (4294967296)) + lower);
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.uniform_integer.call(null,(bit_count - (32))),clojure.test.check.generators.uniform_integer.call(null,(32))));
}
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.uniform_integer;},new cljs.core.Symbol("clojure.test.check.generators","uniform-integer","clojure.test.check.generators/uniform-integer",(292149177),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"uniform-integer","uniform-integer",(1646721665),null),"clojure/test/check/generators.cljc",(32),(1),(904),(904),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bit-count","bit-count",(1400227397),null)], null)),"Generates an integer uniformly in the range 0..(2^bit-count-1).",(cljs.core.truth_(clojure.test.check.generators.uniform_integer)?clojure.test.check.generators.uniform_integer.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.scalb = (function clojure$test$check$generators$scalb(x,exp){
return (x * Math.pow((2),exp));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.scalb;},new cljs.core.Symbol("clojure.test.check.generators","scalb","clojure.test.check.generators/scalb",(-43061043),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"scalb","scalb",(1918748117),null),"clojure/test/check/generators.cljc",(22),(1),(923),(923),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"exp","exp",(1378825265),null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.scalb)?clojure.test.check.generators.scalb.cljs$lang$test:null)])));})()
;
/**
 * Bit-reverses an integer in the range [0, 2^52).
 */
(function (){
clojure.test.check.generators.fifty_two_bit_reverse = (function clojure$test$check$generators$fifty_two_bit_reverse(n){
var out = (0);
var n__$1 = n;
var out_shifter = Math.pow((2),(52));
while(true){
if((n__$1 < (1))){
return (out * out_shifter);
} else {
var G__314 = ((out * (2)) + (n__$1 & (1)));
var G__315 = (n__$1 / (2));
var G__316 = (out_shifter / (2));
out = G__314;
n__$1 = G__315;
out_shifter = G__316;
continue;
}
break;
}
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.fifty_two_bit_reverse;},new cljs.core.Symbol("clojure.test.check.generators","fifty-two-bit-reverse","clojure.test.check.generators/fifty-two-bit-reverse",(1589227134),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"fifty-two-bit-reverse","fifty-two-bit-reverse",(761836406),null),"clojure/test/check/generators.cljc",(38),(1),(928),(928),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Bit-reverses an integer in the range [0, 2^52).",(cljs.core.truth_(clojure.test.check.generators.fifty_two_bit_reverse)?clojure.test.check.generators.fifty_two_bit_reverse.cljs$lang$test:null)])));})()
;
/**
 * Generates a 52-bit non-negative integer that shrinks toward having
 *   fewer lower-order bits (and shrinks to 0 if possible).
 */
(function (){
clojure.test.check.generators.backwards_shrinking_significand = clojure.test.check.generators.fmap.call(null,clojure.test.check.generators.fifty_two_bit_reverse,clojure.test.check.generators.sized.call(null,(function (size){
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.choose.call(null,(0),(function (){var x__21649__auto__ = size;
var y__21650__auto__ = (52);
return ((x__21649__auto__ < y__21650__auto__) ? x__21649__auto__ : y__21650__auto__);
})()),(function (rose){
return clojure.test.check.generators.uniform_integer.call(null,clojure.test.check.rose_tree.root.call(null,rose));
}));
}))); return (
new cljs.core.Var(function(){return clojure.test.check.generators.backwards_shrinking_significand;},new cljs.core.Symbol("clojure.test.check.generators","backwards-shrinking-significand","clojure.test.check.generators/backwards-shrinking-significand",(-1208016106),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"backwards-shrinking-significand","backwards-shrinking-significand",(84825614),null),"clojure/test/check/generators.cljc",(47),(1),(944),(944),cljs.core.List.EMPTY,"Generates a 52-bit non-negative integer that shrinks toward having\n  fewer lower-order bits (and shrinks to 0 if possible).",(cljs.core.truth_(clojure.test.check.generators.backwards_shrinking_significand)?clojure.test.check.generators.backwards_shrinking_significand.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.get_exponent = (function clojure$test$check$generators$get_exponent(x){
if((x === (0))){
return (-1023);
} else {
var x__$1 = Math.abs(x);
var res = Math.floor((Math.log(x__$1) * Math.LOG2E));
var t = clojure.test.check.generators.scalb.call(null,x__$1,(- res));
if((t < (1))){
return (res - (1));
} else {
if(((2) <= t)){
return (res + (1));
} else {
return res;

}
}
}
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.get_exponent;},new cljs.core.Symbol("clojure.test.check.generators","get-exponent","clojure.test.check.generators/get-exponent",(1949243458),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"get-exponent","get-exponent",(100142410),null),"clojure/test/check/generators.cljc",(29),(1),(953),(953),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.get_exponent)?clojure.test.check.generators.get_exponent.cljs$lang$test:null)])));})()
;
/**
 * Generates [exp sign], where exp is in [-1023, 1023] and sign is 1
 *   or -1. Only generates values for exp and sign for which there are
 *   doubles within the given bounds.
 */
(function (){
clojure.test.check.generators.double_exp_and_sign = (function clojure$test$check$generators$double_exp_and_sign(lower_bound,upper_bound){
var gen_exp = (function clojure$test$check$generators$double_exp_and_sign_$_gen_exp(lb,ub){
return clojure.test.check.generators.sized.call(null,(function (size){
var qs8 = ((1) << cljs.core.quot.call(null,(function (){var x__21649__auto__ = (200);
var y__21650__auto__ = size;
return ((x__21649__auto__ < y__21650__auto__) ? x__21649__auto__ : y__21650__auto__);
})(),(8)));
if(((lb <= (0))) && (((0) <= ub))){
return clojure.test.check.generators.choose.call(null,(function (){var x__21615__auto__ = lb;
var y__21616__auto__ = (- qs8);
return ((x__21615__auto__ > y__21616__auto__) ? x__21615__auto__ : y__21616__auto__);
})(),(function (){var x__21649__auto__ = ub;
var y__21650__auto__ = qs8;
return ((x__21649__auto__ < y__21650__auto__) ? x__21649__auto__ : y__21650__auto__);
})());
} else {
if((ub < (0))){
return clojure.test.check.generators.choose.call(null,(function (){var x__21615__auto__ = lb;
var y__21616__auto__ = (ub - qs8);
return ((x__21615__auto__ > y__21616__auto__) ? x__21615__auto__ : y__21616__auto__);
})(),ub);
} else {
return clojure.test.check.generators.choose.call(null,lb,(function (){var x__21649__auto__ = ub;
var y__21650__auto__ = (lb + qs8);
return ((x__21649__auto__ < y__21650__auto__) ? x__21649__auto__ : y__21650__auto__);
})());

}
}
}));
});
if(((lower_bound == null)) && ((upper_bound == null))){
return clojure.test.check.generators.tuple.call(null,gen_exp.call(null,(-1023),(1023)),clojure.test.check.generators.elements.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
} else {
var lower_bound__$1 = (function (){var or__20817__auto__ = lower_bound;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return clojure.test.check.generators.MIN_NEG_VALUE;
}
})();
var upper_bound__$1 = (function (){var or__20817__auto__ = upper_bound;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return clojure.test.check.generators.MAX_POS_VALUE;
}
})();
var lbexp = (function (){var x__21615__auto__ = (-1023);
var y__21616__auto__ = clojure.test.check.generators.get_exponent.call(null,lower_bound__$1);
return ((x__21615__auto__ > y__21616__auto__) ? x__21615__auto__ : y__21616__auto__);
})();
var ubexp = (function (){var x__21615__auto__ = (-1023);
var y__21616__auto__ = clojure.test.check.generators.get_exponent.call(null,upper_bound__$1);
return ((x__21615__auto__ > y__21616__auto__) ? x__21615__auto__ : y__21616__auto__);
})();
if(((0) <= lower_bound__$1)){
return clojure.test.check.generators.tuple.call(null,gen_exp.call(null,lbexp,ubexp),clojure.test.check.generators.return$.call(null,(1)));
} else {
if((upper_bound__$1 <= (0))){
return clojure.test.check.generators.tuple.call(null,gen_exp.call(null,ubexp,lbexp),clojure.test.check.generators.return$.call(null,(-1)));
} else {
return clojure.test.check.generators.fmap.call(null,((function (lower_bound__$1,upper_bound__$1,lbexp,ubexp){
return (function (p__321){
var vec__322 = p__321;
var exp = cljs.core.nth.call(null,vec__322,(0),null);
var sign = cljs.core.nth.call(null,vec__322,(1),null);
var pair = vec__322;
if((((sign < (0))) && ((lbexp < exp))) || (((sign > (0))) && ((ubexp < exp)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exp,(- sign)], null);
} else {
return pair;
}
});})(lower_bound__$1,upper_bound__$1,lbexp,ubexp))
,clojure.test.check.generators.tuple.call(null,gen_exp.call(null,(-1023),(function (){var x__21615__auto__ = ubexp;
var y__21616__auto__ = lbexp;
return ((x__21615__auto__ > y__21616__auto__) ? x__21615__auto__ : y__21616__auto__);
})()),clojure.test.check.generators.elements.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null))));

}
}
}
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.double_exp_and_sign;},new cljs.core.Symbol("clojure.test.check.generators","double-exp-and-sign","clojure.test.check.generators/double-exp-and-sign",(-2024973926),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"double-exp-and-sign","double-exp-and-sign",(295447170),null),"clojure/test/check/generators.cljc",(36),(1),(971),(971),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"lower-bound","lower-bound",(1794164016),null),new cljs.core.Symbol(null,"upper-bound","upper-bound",(-1091542953),null)], null)),"Generates [exp sign], where exp is in [-1023, 1023] and sign is 1\n  or -1. Only generates values for exp and sign for which there are\n  doubles within the given bounds.",(cljs.core.truth_(clojure.test.check.generators.double_exp_and_sign)?clojure.test.check.generators.double_exp_and_sign.cljs$lang$test:null)])));})()
;
/**
 * Returns [low high], the smallest and largest numbers in the given
 *   range.
 */
(function (){
clojure.test.check.generators.block_bounds = (function clojure$test$check$generators$block_bounds(exp,sign){
if((sign < (0))){
var vec__328 = clojure.test.check.generators.block_bounds.call(null,exp,(- sign));
var low = cljs.core.nth.call(null,vec__328,(0),null);
var high = cljs.core.nth.call(null,vec__328,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- high),(- low)], null);
} else {
if(cljs.core._EQ_.call(null,(-1023),exp)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),clojure.test.check.generators.scalb.call(null,(clojure.test.check.generators.scalb.call(null,(1),(52)) - (1)),(-1074))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.scalb.call(null,(1),exp),clojure.test.check.generators.scalb.call(null,(clojure.test.check.generators.scalb.call(null,(1),(52)) - (1)),(exp - (51)))], null);
}
}
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.block_bounds;},new cljs.core.Symbol("clojure.test.check.generators","block-bounds","clojure.test.check.generators/block-bounds",(1285181091),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"block-bounds","block-bounds",(-1351253),null),"clojure/test/check/generators.cljc",(29),(1),(1013),(1013),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",(1378825265),null),new cljs.core.Symbol(null,"sign","sign",(-1392714102),null)], null)),"Returns [low high], the smallest and largest numbers in the given\n  range.",(cljs.core.truth_(clojure.test.check.generators.block_bounds)?clojure.test.check.generators.block_bounds.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.double_finite = (function clojure$test$check$generators$double_finite(lower_bound,upper_bound){
if(((lower_bound == null)) || ((upper_bound == null)) || ((lower_bound <= upper_bound))){
} else {
throw (new Error("Assert failed: (or (nil? lower-bound) (nil? upper-bound) (<= lower-bound upper-bound))"));
}

var pred = (cljs.core.truth_(lower_bound)?(cljs.core.truth_(upper_bound)?(function (p1__35_SHARP_){
return ((lower_bound <= p1__35_SHARP_)) && ((p1__35_SHARP_ <= upper_bound));
}):(function (p1__36_SHARP_){
return (lower_bound <= p1__36_SHARP_);
})):(cljs.core.truth_(upper_bound)?(function (p1__37_SHARP_){
return (p1__37_SHARP_ <= upper_bound);
}):null));
var gen = clojure.test.check.generators.fmap.call(null,((function (pred){
return (function (p__344){
var vec__345 = p__344;
var vec__348 = cljs.core.nth.call(null,vec__345,(0),null);
var exp = cljs.core.nth.call(null,vec__348,(0),null);
var sign = cljs.core.nth.call(null,vec__348,(1),null);
var significand = cljs.core.nth.call(null,vec__345,(1),null);
var base = ((significand / Math.pow((2),(52))) + (1));
var x = (clojure.test.check.generators.scalb.call(null,base,exp) * sign);
if(cljs.core.truth_((function (){var or__20817__auto__ = (pred == null);
if(or__20817__auto__){
return or__20817__auto__;
} else {
return pred.call(null,x);
}
})())){
return x;
} else {
var vec__351 = clojure.test.check.generators.block_bounds.call(null,exp,sign);
var low = cljs.core.nth.call(null,vec__351,(0),null);
var high = cljs.core.nth.call(null,vec__351,(1),null);
var block_lb = (function (){var G__354 = low;
var G__354__$1 = (cljs.core.truth_(lower_bound)?(function (){var x__21615__auto__ = G__354;
var y__21616__auto__ = lower_bound;
return ((x__21615__auto__ > y__21616__auto__) ? x__21615__auto__ : y__21616__auto__);
})():G__354);
return G__354__$1;
})();
var block_ub = (function (){var G__355 = high;
var G__355__$1 = (cljs.core.truth_(upper_bound)?(function (){var x__21649__auto__ = G__355;
var y__21650__auto__ = upper_bound;
return ((x__21649__auto__ < y__21650__auto__) ? x__21649__auto__ : y__21650__auto__);
})():G__355);
return G__355__$1;
})();
var x__$1 = (block_lb + ((block_ub - block_lb) * (base - (1))));
var x__21615__auto__ = (function (){var x__21649__auto__ = x__$1;
var y__21650__auto__ = block_ub;
return ((x__21649__auto__ < y__21650__auto__) ? x__21649__auto__ : y__21650__auto__);
})();
var y__21616__auto__ = block_lb;
return ((x__21615__auto__ > y__21616__auto__) ? x__21615__auto__ : y__21616__auto__);
}
});})(pred))
,clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.double_exp_and_sign.call(null,lower_bound,upper_bound),clojure.test.check.generators.backwards_shrinking_significand));
var G__356 = gen;
var G__356__$1 = (cljs.core.truth_(pred)?clojure.test.check.generators.such_that.call(null,pred,G__356):G__356);
return G__356__$1;
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.double_finite;},new cljs.core.Symbol("clojure.test.check.generators","double-finite","clojure.test.check.generators/double-finite",(-585398729),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"double-finite","double-finite",(1817013039),null),"clojure/test/check/generators.cljc",(30),(1),(1025),(1025),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"lower-bound","lower-bound",(1794164016),null),new cljs.core.Symbol(null,"upper-bound","upper-bound",(-1091542953),null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.double_finite)?clojure.test.check.generators.double_finite.cljs$lang$test:null)])));})()
;
/**
 * Generates a 64-bit floating point number. Options:
 * 
 *  :infinite? - whether +/- infinity can be generated (default true)
 *  :NaN?      - whether NaN can be generated (default true)
 *  :min       - minimum value (inclusive, default none)
 *  :max       - maximum value (inclusive, default none)
 * 
 *   Note that the min/max options must be finite numbers. Supplying a
 *   min precludes -Infinity, and supplying a max precludes +Infinity.
 */
(function (){
clojure.test.check.generators.double_STAR_ = (function clojure$test$check$generators$double_STAR_(p__357){
var map__361 = p__357;
var map__361__$1 = ((((!((map__361 == null)))?((((map__361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__361):map__361);
var NaN_QMARK_ = cljs.core.get.call(null,map__361__$1,new cljs.core.Keyword(null,"NaN?","NaN?",(-1917767651)),true);
var min = cljs.core.get.call(null,map__361__$1,new cljs.core.Keyword(null,"min","min",(444991522)));
var infinite_QMARK_ = cljs.core.get.call(null,map__361__$1,new cljs.core.Keyword(null,"infinite?","infinite?",(-2017886608)),true);
var max = cljs.core.get.call(null,map__361__$1,new cljs.core.Keyword(null,"max","max",(61366548)));
var frequency_arg = (function (){var G__363 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(95),clojure.test.check.generators.double_finite.call(null,min,max)], null)], null);
var G__363__$1 = (((((min == null))?((max == null)) || (((0) <= max)):(((max == null))?(min <= (0)):((min <= (0))) && (((0) <= max)))))?cljs.core.conj.call(null,G__363,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,(0))], null)):G__363);
var G__363__$2 = (cljs.core.truth_((function (){var and__20770__auto__ = infinite_QMARK_;
if(cljs.core.truth_(and__20770__auto__)){
return (max == null);
} else {
return and__20770__auto__;
}
})())?cljs.core.conj.call(null,G__363__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,clojure.test.check.generators.POS_INFINITY)], null)):G__363__$1);
var G__363__$3 = (cljs.core.truth_((function (){var and__20770__auto__ = infinite_QMARK_;
if(cljs.core.truth_(and__20770__auto__)){
return (min == null);
} else {
return and__20770__auto__;
}
})())?cljs.core.conj.call(null,G__363__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,clojure.test.check.generators.NEG_INFINITY)], null)):G__363__$2);
var G__363__$4 = (cljs.core.truth_(NaN_QMARK_)?cljs.core.conj.call(null,G__363__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,clojure.test.check.generators.NAN)], null)):G__363__$3);
return G__363__$4;
})();
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,frequency_arg))){
return cljs.core.second.call(null,cljs.core.first.call(null,frequency_arg));
} else {
return clojure.test.check.generators.frequency.call(null,frequency_arg);
}
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.double_STAR_;},new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",(841542265),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"double*","double*",(-1021838991),null),"clojure/test/check/generators.cljc",(14),(1),(1059),(1059),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"NaN?","NaN?",(-277236124),null),true,new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),true], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),new cljs.core.Symbol(null,"NaN?","NaN?",(-277236124),null),new cljs.core.Symbol(null,"min","min",(2085523049),null),new cljs.core.Symbol(null,"max","max",(1701898075),null)], null)], null)], null)),"Generates a 64-bit floating point number. Options:\n\n    :infinite? - whether +/- infinity can be generated (default true)\n    :NaN?      - whether NaN can be generated (default true)\n    :min       - minimum value (inclusive, default none)\n    :max       - maximum value (inclusive, default none)\n\n  Note that the min/max options must be finite numbers. Supplying a\n  min precludes -Infinity, and supplying a max precludes +Infinity.",(cljs.core.truth_(clojure.test.check.generators.double_STAR_)?clojure.test.check.generators.double_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Generates 64-bit floating point numbers from the entire range,
 *   including +/- infinity and NaN. Use double* for more control.
 */
(function (){
clojure.test.check.generators.double$ = clojure.test.check.generators.double_STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY); return (
new cljs.core.Var(function(){return clojure.test.check.generators.double$;},new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",(668331090),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"double","double",(-1769548886),null),"clojure/test/check/generators.cljc",(12),(1),(1100),(1100),cljs.core.List.EMPTY,"Generates 64-bit floating point numbers from the entire range,\n  including +/- infinity and NaN. Use double* for more control.",(cljs.core.truth_(clojure.test.check.generators.double$)?clojure.test.check.generators.double$.cljs$lang$test:null)])));})()
;
/**
 * Generates character from 0-255.
 */
(function (){
clojure.test.check.generators.char$ = clojure.test.check.generators.fmap.call(null,cljs.core.char$,clojure.test.check.generators.choose.call(null,(0),(255))); return (
new cljs.core.Var(function(){return clojure.test.check.generators.char$;},new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",(-1426343459),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"char","char",(998943941),null),"clojure/test/check/generators.cljc",(10),(1),(1109),(1109),cljs.core.List.EMPTY,"Generates character from 0-255.",(cljs.core.truth_(clojure.test.check.generators.char$)?clojure.test.check.generators.char$.cljs$lang$test:null)])));})()
;
/**
 * Generate only ascii character.
 */
(function (){
clojure.test.check.generators.char_ascii = clojure.test.check.generators.fmap.call(null,cljs.core.char$,clojure.test.check.generators.choose.call(null,(32),(126))); return (
new cljs.core.Var(function(){return clojure.test.check.generators.char_ascii;},new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",(-899908538),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"char-ascii","char-ascii",(1533897086),null),"clojure/test/check/generators.cljc",(16),(1),(1113),(1113),cljs.core.List.EMPTY,"Generate only ascii character.",(cljs.core.truth_(clojure.test.check.generators.char_ascii)?clojure.test.check.generators.char_ascii.cljs$lang$test:null)])));})()
;
/**
 * Generate alphanumeric characters.
 */
(function (){
clojure.test.check.generators.char_alphanumeric = clojure.test.check.generators.fmap.call(null,cljs.core.char$,clojure.test.check.generators.one_of.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.choose.call(null,(48),(57)),clojure.test.check.generators.choose.call(null,(65),(90)),clojure.test.check.generators.choose.call(null,(97),(122))], null))); return (
new cljs.core.Var(function(){return clojure.test.check.generators.char_alphanumeric;},new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",(1383091431),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"char-alphanumeric","char-alphanumeric",(-1045995537),null),"clojure/test/check/generators.cljc",(23),(1),(1117),(1117),cljs.core.List.EMPTY,"Generate alphanumeric characters.",(cljs.core.truth_(clojure.test.check.generators.char_alphanumeric)?clojure.test.check.generators.char_alphanumeric.cljs$lang$test:null)])));})()
;
/**
 * Deprecated - use char-alphanumeric instead.
 * 
 *   Generate alphanumeric characters.
 */
(function (){
clojure.test.check.generators.char_alpha_numeric = clojure.test.check.generators.char_alphanumeric; return (
new cljs.core.Var(function(){return clojure.test.check.generators.char_alpha_numeric;},new cljs.core.Symbol("clojure.test.check.generators","char-alpha-numeric","clojure.test.check.generators/char-alpha-numeric",(1912653334),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"deprecated","deprecated",(1498275348)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"char-alpha-numeric","char-alpha-numeric",(-852381426),null),"clojure/test/check/generators.cljc",(21),(1),(1124),"0.6.0",(1125),cljs.core.List.EMPTY,"Deprecated - use char-alphanumeric instead.\n\n  Generate alphanumeric characters.",(cljs.core.truth_(clojure.test.check.generators.char_alpha_numeric)?clojure.test.check.generators.char_alpha_numeric.cljs$lang$test:null)])));})()
;
/**
 * Generate alpha characters.
 */
(function (){
clojure.test.check.generators.char_alpha = clojure.test.check.generators.fmap.call(null,cljs.core.char$,clojure.test.check.generators.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.choose.call(null,(65),(90)),clojure.test.check.generators.choose.call(null,(97),(122))], null))); return (
new cljs.core.Var(function(){return clojure.test.check.generators.char_alpha;},new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",(615785796),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"char-alpha","char-alpha",(-1752967092),null),"clojure/test/check/generators.cljc",(16),(1),(1131),(1131),cljs.core.List.EMPTY,"Generate alpha characters.",(cljs.core.truth_(clojure.test.check.generators.char_alpha)?clojure.test.check.generators.char_alpha.cljs$lang$test:null)])));})()
;
/**
 * Generate non-alphanumeric characters that can be in a symbol.
 */
(function (){
clojure.test.check.generators.char_symbol_special = clojure.test.check.generators.elements.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*","+","!","-","_","?"], null)); return (
new cljs.core.Var(function(){return clojure.test.check.generators.char_symbol_special;},new cljs.core.Symbol("clojure.test.check.generators","char-symbol-special","clojure.test.check.generators/char-symbol-special",(-1587886012),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"char-symbol-special","char-symbol-special",(812202828),null),"clojure/test/check/generators.cljc",(42),(1),(1137),(1137),cljs.core.List.EMPTY,"Generate non-alphanumeric characters that can be in a symbol.",(cljs.core.truth_(clojure.test.check.generators.char_symbol_special)?clojure.test.check.generators.char_symbol_special.cljs$lang$test:null)])));})()
;
/**
 * Generate characters that can be the char following first of a keyword.
 */
(function (){
clojure.test.check.generators.char_keyword_rest = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),clojure.test.check.generators.char_alphanumeric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.char_symbol_special], null)], null)); return (
new cljs.core.Var(function(){return clojure.test.check.generators.char_keyword_rest;},new cljs.core.Symbol("clojure.test.check.generators","char-keyword-rest","clojure.test.check.generators/char-keyword-rest",(-1883501670),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"char-keyword-rest","char-keyword-rest",(483081346),null),"clojure/test/check/generators.cljc",(40),(1),(1141),(1141),cljs.core.List.EMPTY,"Generate characters that can be the char following first of a keyword.",(cljs.core.truth_(clojure.test.check.generators.char_keyword_rest)?clojure.test.check.generators.char_keyword_rest.cljs$lang$test:null)])));})()
;
/**
 * Generate characters that can be the first char of a keyword.
 */
(function (){
clojure.test.check.generators.char_keyword_first = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),clojure.test.check.generators.char_alpha], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.char_symbol_special], null)], null)); return (
new cljs.core.Var(function(){return clojure.test.check.generators.char_keyword_first;},new cljs.core.Symbol("clojure.test.check.generators","char-keyword-first","clojure.test.check.generators/char-keyword-first",(13798889),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"char-keyword-first","char-keyword-first",(-1241271583),null),"clojure/test/check/generators.cljc",(41),(1),(1146),(1146),cljs.core.List.EMPTY,"Generate characters that can be the first char of a keyword.",(cljs.core.truth_(clojure.test.check.generators.char_keyword_first)?clojure.test.check.generators.char_keyword_first.cljs$lang$test:null)])));})()
;
/**
 * Generate strings. May generate unprintable characters.
 */
(function (){
clojure.test.check.generators.string = clojure.test.check.generators.fmap.call(null,clojure.string.join,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char$)); return (
new cljs.core.Var(function(){return clojure.test.check.generators.string;},new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",(-1704750979),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"string","string",(-349010059),null),"clojure/test/check/generators.cljc",(12),(1),(1151),(1151),cljs.core.List.EMPTY,"Generate strings. May generate unprintable characters.",(cljs.core.truth_(clojure.test.check.generators.string)?clojure.test.check.generators.string.cljs$lang$test:null)])));})()
;
/**
 * Generate ascii strings.
 */
(function (){
clojure.test.check.generators.string_ascii = clojure.test.check.generators.fmap.call(null,clojure.string.join,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_ascii)); return (
new cljs.core.Var(function(){return clojure.test.check.generators.string_ascii;},new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",(-2009877640),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"string-ascii","string-ascii",(963419760),null),"clojure/test/check/generators.cljc",(18),(1),(1155),(1155),cljs.core.List.EMPTY,"Generate ascii strings.",(cljs.core.truth_(clojure.test.check.generators.string_ascii)?clojure.test.check.generators.string_ascii.cljs$lang$test:null)])));})()
;
/**
 * Generate alphanumeric strings.
 */
(function (){
clojure.test.check.generators.string_alphanumeric = clojure.test.check.generators.fmap.call(null,clojure.string.join,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_alphanumeric)); return (
new cljs.core.Var(function(){return clojure.test.check.generators.string_alphanumeric;},new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",(836374939),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"string-alphanumeric","string-alphanumeric",(-2104663325),null),"clojure/test/check/generators.cljc",(25),(1),(1159),(1159),cljs.core.List.EMPTY,"Generate alphanumeric strings.",(cljs.core.truth_(clojure.test.check.generators.string_alphanumeric)?clojure.test.check.generators.string_alphanumeric.cljs$lang$test:null)])));})()
;
/**
 * Deprecated - use string-alphanumeric instead.
 * 
 *   Generate alphanumeric strings.
 */
(function (){
clojure.test.check.generators.string_alpha_numeric = clojure.test.check.generators.string_alphanumeric; return (
new cljs.core.Var(function(){return clojure.test.check.generators.string_alpha_numeric;},new cljs.core.Symbol("clojure.test.check.generators","string-alpha-numeric","clojure.test.check.generators/string-alpha-numeric",(548775676),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"deprecated","deprecated",(1498275348)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"string-alpha-numeric","string-alpha-numeric",(-1847159820),null),"clojure/test/check/generators.cljc",(23),(1),(1163),"0.6.0",(1164),cljs.core.List.EMPTY,"Deprecated - use string-alphanumeric instead.\n\n  Generate alphanumeric strings.",(cljs.core.truth_(clojure.test.check.generators.string_alpha_numeric)?clojure.test.check.generators.string_alpha_numeric.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.digit_QMARK_ = (function clojure$test$check$generators$digit_QMARK_(d){
return goog.string.isNumeric(d);
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.digit_QMARK_;},new cljs.core.Symbol("clojure.test.check.generators","digit?","clojure.test.check.generators/digit?",(-375158835),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"digit?","digit?",(-1737322283),null),"clojure/test/check/generators.cljc",(14),(1),(1170),(1170),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",(-682293345),null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.digit_QMARK_)?clojure.test.check.generators.digit_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Returns true if c is \+ or \- and d is non-nil and a digit.
 * 
 *   Symbols that start with +3 or -2 are not readable because they look
 *   like numbers.
 */
(function (){
clojure.test.check.generators._PLUS__or___digit_QMARK_ = (function clojure$test$check$generators$_PLUS__or___digit_QMARK_(c,d){
return cljs.core.boolean$.call(null,(function (){var and__20770__auto__ = d;
if(cljs.core.truth_(and__20770__auto__)){
var and__20770__auto____$1 = (("+" === c)) || (("-" === c));
if(and__20770__auto____$1){
return clojure.test.check.generators.digit_QMARK_.call(null,d);
} else {
return and__20770__auto____$1;
}
} else {
return and__20770__auto__;
}
})());
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators._PLUS__or___digit_QMARK_;},new cljs.core.Symbol("clojure.test.check.generators","+-or---digit?","clojure.test.check.generators/+-or---digit?",(1042863798),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"+-or---digit?","+-or---digit?",(-1445346386),null),"clojure/test/check/generators.cljc",(21),(1),(1175),(1175),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"d","d",(-682293345),null)], null)),"Returns true if c is \\+ or \\- and d is non-nil and a digit.\n\n  Symbols that start with +3 or -2 are not readable because they look\n  like numbers.",(cljs.core.truth_(clojure.test.check.generators._PLUS__or___digit_QMARK_)?clojure.test.check.generators._PLUS__or___digit_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Generate the segment of a namespace.
 */
(function (){
clojure.test.check.generators.namespace_segment = clojure.test.check.generators.fmap.call(null,(function (p__364){
var vec__365 = p__364;
var c = cljs.core.nth.call(null,vec__365,(0),null);
var cs = cljs.core.nth.call(null,vec__365,(1),null);
return clojure.string.join.call(null,cljs.core.cons.call(null,c,cs));
}),clojure.test.check.generators.such_that.call(null,(function (p__368){
var vec__369 = p__368;
var c = cljs.core.nth.call(null,vec__369,(0),null);
var vec__372 = cljs.core.nth.call(null,vec__369,(1),null);
var d = cljs.core.nth.call(null,vec__372,(0),null);
return cljs.core.not.call(null,clojure.test.check.generators._PLUS__or___digit_QMARK_.call(null,c,d));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.char_keyword_first,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_keyword_rest)))); return (
new cljs.core.Var(function(){return clojure.test.check.generators.namespace_segment;},new cljs.core.Symbol("clojure.test.check.generators","namespace-segment","clojure.test.check.generators/namespace-segment",(-1589125189),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"namespace-segment","namespace-segment",(907472051),null),"clojure/test/check/generators.cljc",(40),(1),(1186),(1186),cljs.core.List.EMPTY,"Generate the segment of a namespace.",(cljs.core.truth_(clojure.test.check.generators.namespace_segment)?clojure.test.check.generators.namespace_segment.cljs$lang$test:null)])));})()
;
/**
 * Generate a namespace (or nil for no namespace).
 */
(function (){
clojure.test.check.generators.namespace = clojure.test.check.generators.fmap.call(null,(function (v){
if(cljs.core.seq.call(null,v)){
return clojure.string.join.call(null,".",v);
} else {
return null;
}
}),clojure.test.check.generators.vector.call(null,clojure.test.check.generators.namespace_segment)); return (
new cljs.core.Var(function(){return clojure.test.check.generators.namespace;},new cljs.core.Symbol("clojure.test.check.generators","namespace","clojure.test.check.generators/namespace",(-1005102741),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"namespace","namespace",(1263021155),null),"clojure/test/check/generators.cljc",(32),(1),(1192),(1192),cljs.core.List.EMPTY,"Generate a namespace (or nil for no namespace).",(cljs.core.truth_(clojure.test.check.generators.namespace)?clojure.test.check.generators.namespace.cljs$lang$test:null)])));})()
;
/**
 * Generate segments of a keyword (between \:)
 */
(function (){
clojure.test.check.generators.keyword_segment_rest = clojure.test.check.generators.fmap.call(null,(function (p__375){
var vec__376 = p__375;
var c = cljs.core.nth.call(null,vec__376,(0),null);
var cs = cljs.core.nth.call(null,vec__376,(1),null);
return clojure.string.join.call(null,cljs.core.cons.call(null,c,cs));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.char_keyword_rest,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_keyword_rest))); return (
new cljs.core.Var(function(){return clojure.test.check.generators.keyword_segment_rest;},new cljs.core.Symbol("clojure.test.check.generators","keyword-segment-rest","clojure.test.check.generators/keyword-segment-rest",(1381282060),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"keyword-segment-rest","keyword-segment-rest",(-1023029756),null),"clojure/test/check/generators.cljc",(43),(1),(1198),(1198),cljs.core.List.EMPTY,"Generate segments of a keyword (between \\:)",(cljs.core.truth_(clojure.test.check.generators.keyword_segment_rest)?clojure.test.check.generators.keyword_segment_rest.cljs$lang$test:null)])));})()
;
/**
 * Generate segments of a keyword that can be first (between \:)
 */
(function (){
clojure.test.check.generators.keyword_segment_first = clojure.test.check.generators.fmap.call(null,(function (p__379){
var vec__380 = p__379;
var c = cljs.core.nth.call(null,vec__380,(0),null);
var cs = cljs.core.nth.call(null,vec__380,(1),null);
return clojure.string.join.call(null,cljs.core.cons.call(null,c,cs));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.char_keyword_first,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_keyword_rest))); return (
new cljs.core.Var(function(){return clojure.test.check.generators.keyword_segment_first;},new cljs.core.Symbol("clojure.test.check.generators","keyword-segment-first","clojure.test.check.generators/keyword-segment-first",(-1888890586),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"keyword-segment-first","keyword-segment-first",(-63258082),null),"clojure/test/check/generators.cljc",(44),(1),(1203),(1203),cljs.core.List.EMPTY,"Generate segments of a keyword that can be first (between \\:)",(cljs.core.truth_(clojure.test.check.generators.keyword_segment_first)?clojure.test.check.generators.keyword_segment_first.cljs$lang$test:null)])));})()
;
/**
 * Generate keywords without namespaces.
 */
(function (){
clojure.test.check.generators.keyword = clojure.test.check.generators.fmap.call(null,(function (p__383){
var vec__384 = p__383;
var c = cljs.core.nth.call(null,vec__384,(0),null);
var cs = cljs.core.nth.call(null,vec__384,(1),null);
return cljs.core.keyword.call(null,clojure.string.join.call(null,":",cljs.core.cons.call(null,c,cs)));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.keyword_segment_first,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.keyword_segment_rest))); return (
new cljs.core.Var(function(){return clojure.test.check.generators.keyword;},new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",(24530530),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"keyword","keyword",(-1843046022),null),"clojure/test/check/generators.cljc",(13),(1),(1208),(1208),cljs.core.List.EMPTY,"Generate keywords without namespaces.",(cljs.core.truth_(clojure.test.check.generators.keyword)?clojure.test.check.generators.keyword.cljs$lang$test:null)])));})()
;
/**
 * Generate keywords with optional namespaces.
 */
(function (){
clojure.test.check.generators.keyword_ns = clojure.test.check.generators.fmap.call(null,(function (p__387){
var vec__388 = p__387;
var ns = cljs.core.nth.call(null,vec__388,(0),null);
var c = cljs.core.nth.call(null,vec__388,(1),null);
var cs = cljs.core.nth.call(null,vec__388,(2),null);
return cljs.core.keyword.call(null,ns,clojure.string.join.call(null,cljs.core.cons.call(null,c,cs)));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.namespace,clojure.test.check.generators.char_keyword_first,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_keyword_rest))); return (
new cljs.core.Var(function(){return clojure.test.check.generators.keyword_ns;},new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",(-1492628482),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",(2057651688)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],["0.5.9",new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"keyword-ns","keyword-ns",(366591222),null),"clojure/test/check/generators.cljc",(13),(1),(1214),(1216),cljs.core.List.EMPTY,"Generate keywords with optional namespaces.",(cljs.core.truth_(clojure.test.check.generators.keyword_ns)?clojure.test.check.generators.keyword_ns.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.char_symbol_first = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),clojure.test.check.generators.char_alpha], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),clojure.test.check.generators.char_symbol_special], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,".")], null)], null)); return (
new cljs.core.Var(function(){return clojure.test.check.generators.char_symbol_first;},new cljs.core.Symbol("clojure.test.check.generators","char-symbol-first","clojure.test.check.generators/char-symbol-first",(-2106630130),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"char-symbol-first","char-symbol-first",(1905816854),null),"clojure/test/check/generators.cljc",(40),(1),(1222),(1222),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.test.check.generators.char_symbol_first)?clojure.test.check.generators.char_symbol_first.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.char_symbol_rest = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),clojure.test.check.generators.char_alphanumeric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),clojure.test.check.generators.char_symbol_special], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,".")], null)], null)); return (
new cljs.core.Var(function(){return clojure.test.check.generators.char_symbol_rest;},new cljs.core.Symbol("clojure.test.check.generators","char-symbol-rest","clojure.test.check.generators/char-symbol-rest",(901416609),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"char-symbol-rest","char-symbol-rest",(-1528040023),null),"clojure/test/check/generators.cljc",(39),(1),(1227),(1227),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.test.check.generators.char_symbol_rest)?clojure.test.check.generators.char_symbol_rest.cljs$lang$test:null)])));})()
;
/**
 * Generate symbols without namespaces.
 */
(function (){
clojure.test.check.generators.symbol = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),clojure.test.check.generators.fmap.call(null,(function (p__391){
var vec__392 = p__391;
var c = cljs.core.nth.call(null,vec__392,(0),null);
var cs = cljs.core.nth.call(null,vec__392,(1),null);
return cljs.core.symbol.call(null,clojure.string.join.call(null,cljs.core.cons.call(null,c,cs)));
}),clojure.test.check.generators.such_that.call(null,(function (p__395){
var vec__396 = p__395;
var c = cljs.core.nth.call(null,vec__396,(0),null);
var vec__399 = cljs.core.nth.call(null,vec__396,(1),null);
var d = cljs.core.nth.call(null,vec__399,(0),null);
return cljs.core.not.call(null,clojure.test.check.generators._PLUS__or___digit_QMARK_.call(null,c,d));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.char_symbol_first,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_symbol_rest))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,new cljs.core.Symbol(null,"/","/",(-1371932971),null))], null)], null)); return (
new cljs.core.Var(function(){return clojure.test.check.generators.symbol;},new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",(-1305461065),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"symbol","symbol",(601958831),null),"clojure/test/check/generators.cljc",(12),(1),(1232),(1232),cljs.core.List.EMPTY,"Generate symbols without namespaces.",(cljs.core.truth_(clojure.test.check.generators.symbol)?clojure.test.check.generators.symbol.cljs$lang$test:null)])));})()
;
/**
 * Generate symbols with optional namespaces.
 */
(function (){
clojure.test.check.generators.symbol_ns = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),clojure.test.check.generators.fmap.call(null,(function (p__402){
var vec__403 = p__402;
var ns = cljs.core.nth.call(null,vec__403,(0),null);
var c = cljs.core.nth.call(null,vec__403,(1),null);
var cs = cljs.core.nth.call(null,vec__403,(2),null);
return cljs.core.symbol.call(null,ns,clojure.string.join.call(null,cljs.core.cons.call(null,c,cs)));
}),clojure.test.check.generators.such_that.call(null,(function (p__406){
var vec__407 = p__406;
var _ = cljs.core.nth.call(null,vec__407,(0),null);
var c = cljs.core.nth.call(null,vec__407,(1),null);
var vec__410 = cljs.core.nth.call(null,vec__407,(2),null);
var d = cljs.core.nth.call(null,vec__410,(0),null);
return cljs.core.not.call(null,clojure.test.check.generators._PLUS__or___digit_QMARK_.call(null,c,d));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.namespace,clojure.test.check.generators.char_symbol_first,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_symbol_rest))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,new cljs.core.Symbol(null,"/","/",(-1371932971),null))], null)], null)); return (
new cljs.core.Var(function(){return clojure.test.check.generators.symbol_ns;},new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",(-862629490),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",(2057651688)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],["0.5.9",new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"symbol-ns","symbol-ns",(1606698630),null),"clojure/test/check/generators.cljc",(12),(1),(1239),(1241),cljs.core.List.EMPTY,"Generate symbols with optional namespaces.",(cljs.core.truth_(clojure.test.check.generators.symbol_ns)?clojure.test.check.generators.symbol_ns.cljs$lang$test:null)])));})()
;
/**
 * Generates a `clojure.lang.Ratio`. Shrinks toward 0. Not all values generated
 *   will be ratios, as many values returned by `/` are not ratios.
 */
(function (){
clojure.test.check.generators.ratio = clojure.test.check.generators.fmap.call(null,(function (p__413){
var vec__414 = p__413;
var a = cljs.core.nth.call(null,vec__414,(0),null);
var b = cljs.core.nth.call(null,vec__414,(1),null);
return (a / b);
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.int$,clojure.test.check.generators.such_that.call(null,cljs.core.complement.call(null,cljs.core.zero_QMARK_),clojure.test.check.generators.int$))); return (
new cljs.core.Var(function(){return clojure.test.check.generators.ratio;},new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",(1540966915),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"ratio","ratio",(713971483),null),"clojure/test/check/generators.cljc",(11),(1),(1248),(1248),cljs.core.List.EMPTY,"Generates a `clojure.lang.Ratio`. Shrinks toward 0. Not all values generated\n  will be ratios, as many values returned by `/` are not ratios.",(cljs.core.truth_(clojure.test.check.generators.ratio)?clojure.test.check.generators.ratio.cljs$lang$test:null)])));})()
;
/**
 * Generates a random type-4 UUID. Does not shrink.
 */
(function (){
clojure.test.check.generators.uuid = clojure.test.check.generators.no_shrink.call(null,clojure.test.check.generators.fmap.call(null,(function (nibbles){
var hex = (function clojure$test$check$generators$hex(idx){
return nibbles.call(null,idx).toString((16));
});
var rhex = ((nibbles.call(null,(15)) & (3)) + (8)).toString((16));
return cljs.core.uuid.call(null,[cljs.core.str(hex.call(null,(0))),cljs.core.str(hex.call(null,(1))),cljs.core.str(hex.call(null,(2))),cljs.core.str(hex.call(null,(3))),cljs.core.str(hex.call(null,(4))),cljs.core.str(hex.call(null,(5))),cljs.core.str(hex.call(null,(6))),cljs.core.str(hex.call(null,(7))),cljs.core.str("-"),cljs.core.str(hex.call(null,(8))),cljs.core.str(hex.call(null,(9))),cljs.core.str(hex.call(null,(10))),cljs.core.str(hex.call(null,(11))),cljs.core.str("-"),cljs.core.str("4"),cljs.core.str(hex.call(null,(12))),cljs.core.str(hex.call(null,(13))),cljs.core.str(hex.call(null,(14))),cljs.core.str("-"),cljs.core.str(rhex),cljs.core.str(hex.call(null,(16))),cljs.core.str(hex.call(null,(17))),cljs.core.str(hex.call(null,(18))),cljs.core.str("-"),cljs.core.str(hex.call(null,(19))),cljs.core.str(hex.call(null,(20))),cljs.core.str(hex.call(null,(21))),cljs.core.str(hex.call(null,(22))),cljs.core.str(hex.call(null,(23))),cljs.core.str(hex.call(null,(24))),cljs.core.str(hex.call(null,(25))),cljs.core.str(hex.call(null,(26))),cljs.core.str(hex.call(null,(27))),cljs.core.str(hex.call(null,(28))),cljs.core.str(hex.call(null,(29))),cljs.core.str(hex.call(null,(30)))].join(''));
}),clojure.test.check.generators.vector.call(null,clojure.test.check.generators.choose.call(null,(0),(15)),(31)))); return (
new cljs.core.Var(function(){return clojure.test.check.generators.uuid;},new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",(1589373144),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"uuid","uuid",(-504564192),null),"clojure/test/check/generators.cljc",(10),(1),(1256),(1256),cljs.core.List.EMPTY,"Generates a random type-4 UUID. Does not shrink.",(cljs.core.truth_(clojure.test.check.generators.uuid)?clojure.test.check.generators.uuid.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.simple_type = clojure.test.check.generators.one_of.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.int$,clojure.test.check.generators.large_integer,clojure.test.check.generators.double$,clojure.test.check.generators.char$,clojure.test.check.generators.string,clojure.test.check.generators.ratio,clojure.test.check.generators.boolean$,clojure.test.check.generators.keyword,clojure.test.check.generators.keyword_ns,clojure.test.check.generators.symbol,clojure.test.check.generators.symbol_ns,clojure.test.check.generators.uuid], null)); return (
new cljs.core.Var(function(){return clojure.test.check.generators.simple_type;},new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",(892572284),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"simple-type","simple-type",(-1535340732),null),"clojure/test/check/generators.cljc",(17),(1),(1291),(1291),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.test.check.generators.simple_type)?clojure.test.check.generators.simple_type.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.simple_type_printable = clojure.test.check.generators.one_of.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.int$,clojure.test.check.generators.large_integer,clojure.test.check.generators.double$,clojure.test.check.generators.char_ascii,clojure.test.check.generators.string_ascii,clojure.test.check.generators.ratio,clojure.test.check.generators.boolean$,clojure.test.check.generators.keyword,clojure.test.check.generators.keyword_ns,clojure.test.check.generators.symbol,clojure.test.check.generators.symbol_ns,clojure.test.check.generators.uuid], null)); return (
new cljs.core.Var(function(){return clojure.test.check.generators.simple_type_printable;},new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",(-58489962),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"simple-type-printable","simple-type-printable",(1844483742),null),"clojure/test/check/generators.cljc",(27),(1),(1295),(1295),cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.test.check.generators.simple_type_printable)?clojure.test.check.generators.simple_type_printable.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.container_type = (function clojure$test$check$generators$container_type(inner_type){
return clojure.test.check.generators.one_of.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.vector.call(null,inner_type),clojure.test.check.generators.list.call(null,inner_type),clojure.test.check.generators.map.call(null,inner_type,inner_type)], null));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.container_type;},new cljs.core.Symbol("clojure.test.check.generators","container-type","clojure.test.check.generators/container-type",(-750121409),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"container-type","container-type",(1623005959),null),"clojure/test/check/generators.cljc",(21),(1),(1299),(1299),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inner-type","inner-type",(73749867),null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.container_type)?clojure.test.check.generators.container_type.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.generators.recursive_helper = (function clojure$test$check$generators$recursive_helper(container_gen_fn,scalar_gen,scalar_size,children_size,height){
if((height === (0))){
return clojure.test.check.generators.resize.call(null,scalar_size,scalar_gen);
} else {
return clojure.test.check.generators.resize.call(null,children_size,container_gen_fn.call(null,clojure.test.check.generators.recursive_helper.call(null,container_gen_fn,scalar_gen,scalar_size,children_size,(height - (1)))));
}
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.recursive_helper;},new cljs.core.Symbol("clojure.test.check.generators","recursive-helper","clojure.test.check.generators/recursive-helper",(1137397043),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"recursive-helper","recursive-helper",(-788899781),null),"clojure/test/check/generators.cljc",(24),(1),(1305),(1305),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"container-gen-fn","container-gen-fn",(-443651401),null),new cljs.core.Symbol(null,"scalar-gen","scalar-gen",(-503972759),null),new cljs.core.Symbol(null,"scalar-size","scalar-size",(-1372257834),null),new cljs.core.Symbol(null,"children-size","children-size",(-1075041730),null),new cljs.core.Symbol(null,"height","height",(-1629257147),null)], null)),null,(cljs.core.truth_(clojure.test.check.generators.recursive_helper)?clojure.test.check.generators.recursive_helper.cljs$lang$test:null)])));})()
;
/**
 * This is a helper for writing recursive (tree-shaped) generators. The first
 *   argument should be a function that takes a generator as an argument, and
 *   produces another generator that 'contains' that generator. The vector function
 *   in this namespace is a simple example. The second argument is a scalar
 *   generator, like boolean. For example, to produce a tree of booleans:
 * 
 *  (gen/recursive-gen gen/vector gen/boolean)
 * 
 *   Vectors or maps either recurring or containing booleans or integers:
 * 
 *  (gen/recursive-gen (fn [inner] (gen/one-of [(gen/vector inner)
 *                                              (gen/map inner inner)]))
 *                     (gen/one-of [gen/boolean gen/int]))
 *   
 */
(function (){
clojure.test.check.generators.recursive_gen = (function clojure$test$check$generators$recursive_gen(container_gen_fn,scalar_gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,scalar_gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Second arg to recursive-gen must be a generator"),cljs.core.str("\n"),cljs.core.str("(generator? scalar-gen)")].join('')));
}

return clojure.test.check.generators.sized.call(null,(function (size){
return clojure.test.check.generators.bind.call(null,clojure.test.check.generators.choose.call(null,(1),(5)),(function (height){
var children_size = Math.pow(size,((1) / height));
return clojure.test.check.generators.recursive_helper.call(null,container_gen_fn,scalar_gen,size,children_size,height);
}));
}));
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.recursive_gen;},new cljs.core.Symbol("clojure.test.check.generators","recursive-gen","clojure.test.check.generators/recursive-gen",(723795861),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",(2057651688)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],["0.5.9",new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"recursive-gen","recursive-gen",(-1173017971),null),"clojure/test/check/generators.cljc",(16),(1),(1315),(1317),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"container-gen-fn","container-gen-fn",(-443651401),null),new cljs.core.Symbol(null,"scalar-gen","scalar-gen",(-503972759),null)], null)),"This is a helper for writing recursive (tree-shaped) generators. The first\n  argument should be a function that takes a generator as an argument, and\n  produces another generator that 'contains' that generator. The vector function\n  in this namespace is a simple example. The second argument is a scalar\n  generator, like boolean. For example, to produce a tree of booleans:\n\n    (gen/recursive-gen gen/vector gen/boolean)\n\n  Vectors or maps either recurring or containing booleans or integers:\n\n    (gen/recursive-gen (fn [inner] (gen/one-of [(gen/vector inner)\n                                                (gen/map inner inner)]))\n                       (gen/one-of [gen/boolean gen/int]))\n  ",(cljs.core.truth_(clojure.test.check.generators.recursive_gen)?clojure.test.check.generators.recursive_gen.cljs$lang$test:null)])));})()
;
/**
 * A recursive generator that will generate many different, often nested, values
 */
(function (){
clojure.test.check.generators.any = clojure.test.check.generators.recursive_gen.call(null,clojure.test.check.generators.container_type,clojure.test.check.generators.simple_type); return (
new cljs.core.Var(function(){return clojure.test.check.generators.any;},new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",(1883743710),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"any","any",(-948528346),null),"clojure/test/check/generators.cljc",(9),(1),(1341),(1341),cljs.core.List.EMPTY,"A recursive generator that will generate many different, often nested, values",(cljs.core.truth_(clojure.test.check.generators.any)?clojure.test.check.generators.any.cljs$lang$test:null)])));})()
;
/**
 * Like any, but avoids characters that the shell will interpret as actions,
 *   like 7 and 14 (bell and alternate character set command)
 */
(function (){
clojure.test.check.generators.any_printable = clojure.test.check.generators.recursive_gen.call(null,clojure.test.check.generators.container_type,clojure.test.check.generators.simple_type_printable); return (
new cljs.core.Var(function(){return clojure.test.check.generators.any_printable;},new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",(-1570493991),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"any-printable","any-printable",(1563768609),null),"clojure/test/check/generators.cljc",(19),(1),(1345),(1345),cljs.core.List.EMPTY,"Like any, but avoids characters that the shell will interpret as actions,\n  like 7 and 14 (bell and alternate character set command)",(cljs.core.truth_(clojure.test.check.generators.any_printable)?clojure.test.check.generators.any_printable.cljs$lang$test:null)])));})()
;
/**
 * Macro for building generators using values from other generators.
 *   Uses a binding vector with the same syntax as clojure.core/let,
 *   where the right-hand side of the binding pairs are generators, and
 *   the left-hand side are names (or destructuring forms) for generated
 *   values.
 * 
 *   Subsequent generator expressions can refer to the previously bound
 *   values, in the same way as clojure.core/let.
 * 
 *   The body of the let can be either a value or a generator, and does
 *   the expected thing in either case. In this way let provides the
 *   functionality of both `bind` and `fmap`.
 * 
 *   Examples:
 * 
 *  (gen/let [strs (gen/not-empty (gen/list gen/string))
 *            s (gen/elements strs)]
 *    {:some-strings strs
 *     :one-of-those-strings s})
 * 
 *  ;; generates collections of "users" that have integer IDs
 *  ;; from 0...N-1, but are in a random order
 *  (gen/let [users (gen/list (gen/hash-map :name gen/string-ascii
 *                                          :age gen/nat))]
 *    (->> users
 *         (map #(assoc %2 :id %1) (range))
 *         (gen/shuffle)))
 */
(function (){
clojure.test.check.generators.let$ = (function clojure$test$check$generators$let(var_args){
var args__23658__auto__ = [];
var len__23656__auto___424 = arguments.length;
var i__23657__auto___425 = (0);
while(true){
if((i__23657__auto___425 < len__23656__auto___424)){
args__23658__auto__.push((arguments[i__23657__auto___425]));

var G__426 = (i__23657__auto___425 + (1));
i__23657__auto___425 = G__426;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((3) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((3)),(0),null)):null);
return clojure.test.check.generators.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return clojure.test.check.generators.let$;},new cljs.core.Symbol("clojure.test.check.generators","let","clojure.test.check.generators/let",(-2079390126),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"let","let",(358118826),null),"clojure/test/check/generators.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(1354),true,(1354),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Macro for building generators using values from other generators.\n  Uses a binding vector with the same syntax as clojure.core/let,\n  where the right-hand side of the binding pairs are generators, and\n  the left-hand side are names (or destructuring forms) for generated\n  values.\n\n  Subsequent generator expressions can refer to the previously bound\n  values, in the same way as clojure.core/let.\n\n  The body of the let can be either a value or a generator, and does\n  the expected thing in either case. In this way let provides the\n  functionality of both `bind` and `fmap`.\n\n  Examples:\n\n    (gen/let [strs (gen/not-empty (gen/list gen/string))\n              s (gen/elements strs)]\n      {:some-strings strs\n       :one-of-those-strings s})\n\n    ;; generates collections of \"users\" that have integer IDs\n    ;; from 0...N-1, but are in a random order\n    (gen/let [users (gen/list (gen/hash-map :name gen/string-ascii\n                                            :age gen/nat))]\n      (->> users\n           (map #(assoc %2 :id %1) (range))\n           (gen/shuffle)))",(cljs.core.truth_(clojure.test.check.generators.let$)?clojure.test.check.generators.let$.cljs$lang$test:null)])));})()
;

clojure.test.check.generators.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to gen/let must be a vector of bindings."),cljs.core.str("\n"),cljs.core.str("(vector? bindings)")].join('')));
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("gen/let requires an even number of forms in binding vector"),cljs.core.str("\n"),cljs.core.str("(even? (count bindings))")].join('')));
}

if(cljs.core.empty_QMARK_.call(null,bindings)){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"val__38__auto__","val__38__auto__",(-1563106925),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",(-1378210460),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"val__38__auto__","val__38__auto__",(-1563106925),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"val__38__auto__","val__38__auto__",(-1563106925),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",(1744522038),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"val__38__auto__","val__38__auto__",(-1563106925),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
} else {
var vec__421 = bindings;
var seq__422 = cljs.core.seq.call(null,vec__421);
var first__423 = cljs.core.first.call(null,seq__422);
var seq__422__$1 = cljs.core.next.call(null,seq__422);
var binding = first__423;
var first__423__$1 = cljs.core.first.call(null,seq__422__$1);
var seq__422__$2 = cljs.core.next.call(null,seq__422__$1);
var gen = first__423__$1;
var more = seq__422__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",(-361313906),null)),(function (){var x__23399__auto__ = gen;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = binding;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.test.check.generators","let","clojure.test.check.generators/let",(-2079390126),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
}
});

clojure.test.check.generators.let$.cljs$lang$maxFixedArity = (3);

clojure.test.check.generators.let$.cljs$lang$applyTo = (function (seq417){
var G__418 = cljs.core.first.call(null,seq417);
var seq417__$1 = cljs.core.next.call(null,seq417);
var G__419 = cljs.core.first.call(null,seq417__$1);
var seq417__$2 = cljs.core.next.call(null,seq417__$1);
var G__420 = cljs.core.first.call(null,seq417__$2);
var seq417__$3 = cljs.core.next.call(null,seq417__$2);
return clojure.test.check.generators.let$.cljs$core$IFn$_invoke$arity$variadic(G__418,G__419,G__420,seq417__$3);
});

new cljs.core.Var(function(){return clojure.test.check.generators.let$;},new cljs.core.Symbol("clojure.test.check.generators","let","clojure.test.check.generators/let",(-2079390126),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.generators","clojure.test.check.generators",(445023851),null),new cljs.core.Symbol(null,"let","let",(358118826),null),"clojure/test/check/generators.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(1354),true,(1354),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Macro for building generators using values from other generators.\n  Uses a binding vector with the same syntax as clojure.core/let,\n  where the right-hand side of the binding pairs are generators, and\n  the left-hand side are names (or destructuring forms) for generated\n  values.\n\n  Subsequent generator expressions can refer to the previously bound\n  values, in the same way as clojure.core/let.\n\n  The body of the let can be either a value or a generator, and does\n  the expected thing in either case. In this way let provides the\n  functionality of both `bind` and `fmap`.\n\n  Examples:\n\n    (gen/let [strs (gen/not-empty (gen/list gen/string))\n              s (gen/elements strs)]\n      {:some-strings strs\n       :one-of-those-strings s})\n\n    ;; generates collections of \"users\" that have integer IDs\n    ;; from 0...N-1, but are in a random order\n    (gen/let [users (gen/list (gen/hash-map :name gen/string-ascii\n                                            :age gen/nat))]\n      (->> users\n           (map #(assoc %2 :id %1) (range))\n           (gen/shuffle)))",(cljs.core.truth_(clojure.test.check.generators.let$)?clojure.test.check.generators.let$.cljs$lang$test:null)]));

clojure.test.check.generators.let$.cljs$lang$macro = true;
