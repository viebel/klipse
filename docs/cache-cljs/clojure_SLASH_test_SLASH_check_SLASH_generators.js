// Compiled by ClojureScript 1.9.376
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
clojure.test.check.generators.Generator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13883__auto__,k__13884__auto__){
var self__ = this;
var this__13883__auto____$1 = this;
return this__13883__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__13884__auto__,null);
});

clojure.test.check.generators.Generator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13885__auto__,k73,else__13886__auto__){
var self__ = this;
var this__13885__auto____$1 = this;
var G__75 = (((k73 instanceof cljs.core.Keyword))?k73.fqn:null);
switch (G__75) {
case "gen":
return self__.gen;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k73,else__13886__auto__);

}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13897__auto__,writer__13898__auto__,opts__13899__auto__){
var self__ = this;
var this__13897__auto____$1 = this;
var pr_pair__13900__auto__ = ((function (this__13897__auto____$1){
return (function (keyval__13901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__13898__auto__,cljs.core.pr_writer,""," ","",opts__13899__auto__,keyval__13901__auto__);
});})(this__13897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__13898__auto__,pr_pair__13900__auto__,"#clojure.test.check.generators.Generator{",", ","}",opts__13899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gen","gen",(142575302)),self__.gen],null))], null),self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

clojure.test.check.generators.Generator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__72){
var self__ = this;
var G__72__$1 = this;
return (new cljs.core.RecordIter((0),G__72__$1,(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen","gen",(142575302))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13881__auto__){
var self__ = this;
var this__13881__auto____$1 = this;
return self__.__meta;
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13876__auto__){
var self__ = this;
var this__13876__auto____$1 = this;
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,self__.__extmap,self__.__hash));
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13887__auto__){
var self__ = this;
var this__13887__auto____$1 = this;
return ((1) + cljs.core.count.call(null,self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13877__auto__){
var self__ = this;
var this__13877__auto____$1 = this;
var h__12767__auto__ = self__.__hash;
if(!((h__12767__auto__ == null))){
return h__12767__auto__;
} else {
var h__12767__auto____$1 = cljs.core.hash_imap.call(null,this__13877__auto____$1);
self__.__hash = h__12767__auto____$1;

return h__12767__auto____$1;
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13878__auto__,other__13879__auto__){
var self__ = this;
var this__13878__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11256__auto__ = other__13879__auto__;
if(cljs.core.truth_(and__11256__auto__)){
return ((this__13878__auto____$1.constructor === other__13879__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__13878__auto____$1,other__13879__auto__));
} else {
return and__11256__auto__;
}
})())){
return true;
} else {
return false;
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13892__auto__,k__13893__auto__){
var self__ = this;
var this__13892__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gen","gen",(142575302)),null], null), null),k__13893__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__13892__auto____$1),self__.__meta),k__13893__auto__);
} else {
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__13893__auto__)),null));
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13890__auto__,k__13891__auto__,G__72){
var self__ = this;
var this__13890__auto____$1 = this;
var pred__76 = cljs.core.keyword_identical_QMARK_;
var expr__77 = k__13891__auto__;
if(cljs.core.truth_(pred__76.call(null,new cljs.core.Keyword(null,"gen","gen",(142575302)),expr__77))){
return (new clojure.test.check.generators.Generator(G__72,self__.__meta,self__.__extmap,null));
} else {
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__13891__auto__,G__72),null));
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13895__auto__){
var self__ = this;
var this__13895__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gen","gen",(142575302)),self__.gen],null))], null),self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13882__auto__,G__72){
var self__ = this;
var this__13882__auto____$1 = this;
return (new clojure.test.check.generators.Generator(self__.gen,G__72,self__.__extmap,self__.__hash));
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13888__auto__,entry__13889__auto__){
var self__ = this;
var this__13888__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__13889__auto__)){
return this__13888__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__13889__auto__,(0)),cljs.core._nth.call(null,entry__13889__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__13888__auto____$1,entry__13889__auto__);
}
});

clojure.test.check.generators.Generator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",(1783106829),null)], null);
});

clojure.test.check.generators.Generator.cljs$lang$type = true;

clojure.test.check.generators.Generator.cljs$lang$ctorPrSeq = (function (this__14488__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"clojure.test.check.generators/Generator");
});

clojure.test.check.generators.Generator.cljs$lang$ctorPrWriter = (function (this__14488__auto__,writer__14489__auto__){
return cljs.core._write.call(null,writer__14489__auto__,"clojure.test.check.generators/Generator");
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
var len__16006__auto___114 = arguments.length;
var i__16007__auto___115 = (0);
while(true){
if((i__16007__auto___115 < len__16006__auto___114)){
args111.push((arguments[i__16007__auto___115]));

var G__116 = (i__16007__auto___115 + (1));
i__16007__auto___115 = G__116;
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
var len__16006__auto___121 = arguments.length;
var i__16007__auto___122 = (0);
while(true){
if((i__16007__auto___122 < len__16006__auto___121)){
args118.push((arguments[i__16007__auto___122]));

var G__123 = (i__16007__auto___122 + (1));
i__16007__auto___122 = G__123;
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
var len__16006__auto___128 = arguments.length;
var i__16007__auto___129 = (0);
while(true){
if((i__16007__auto___129 < len__16006__auto___128)){
args125.push((arguments[i__16007__auto___129]));

var G__130 = (i__16007__auto___129 + (1));
i__16007__auto___129 = G__130;
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
var and__11256__auto__ = typeof x === 'number';
if(and__11256__auto__){
return clojure.test.check.generators.generator_QMARK_.call(null,g);
} else {
return and__11256__auto__;
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
var len__16006__auto___174 = arguments.length;
var i__16007__auto___175 = (0);
while(true){
if((i__16007__auto___175 < len__16006__auto___174)){
args171.push((arguments[i__16007__auto___175]));

var G__176 = (i__16007__auto___175 + (1));
i__16007__auto___175 = G__176;
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
var args__16008__auto__ = [];
var len__16006__auto___179 = arguments.length;
var i__16007__auto___180 = (0);
while(true){
if((i__16007__auto___180 < len__16006__auto___179)){
args__16008__auto__.push((arguments[i__16007__auto___180]));

var G__181 = (i__16007__auto___180 + (1));
i__16007__auto___180 = G__181;
continue;
} else {
}
break;
}

var argseq__16009__auto__ = ((((0) < args__16008__auto__.length))?(new cljs.core.IndexedSeq(args__16008__auto__.slice((0)),(0),null)):null);
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__16009__auto__);
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
var len__16006__auto___185 = arguments.length;
var i__16007__auto___186 = (0);
while(true){
if((i__16007__auto___186 < len__16006__auto___185)){
args182.push((arguments[i__16007__auto___186]));

var G__187 = (i__16007__auto___186 + (1));
i__16007__auto___186 = G__187;
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
var args__16008__auto__ = [];
var len__16006__auto___197 = arguments.length;
var i__16007__auto___198 = (0);
while(true){
if((i__16007__auto___198 < len__16006__auto___197)){
args__16008__auto__.push((arguments[i__16007__auto___198]));

var G__199 = (i__16007__auto___198 + (1));
i__16007__auto___198 = G__199;
continue;
} else {
}
break;
}

var argseq__16009__auto__ = ((((0) < args__16008__auto__.length))?(new cljs.core.IndexedSeq(args__16008__auto__.slice((0)),(0),null)):null);
return clojure.test.check.generators.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__16009__auto__);
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
return !((cljs.core._lookup.call(null,s,k) == null));
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
var or__11284__auto__ = cljs.core.empty_QMARK_.call(null,coll);
if(or__11284__auto__){
return or__11284__auto__;
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
var hard_min_elements = (function (){var or__11284__auto__ = num_elements;
if(cljs.core.truth_(or__11284__auto__)){
return or__11284__auto__;
} else {
var or__11284__auto____$1 = min_elements;
if(cljs.core.truth_(or__11284__auto____$1)){
return or__11284__auto____$1;
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
var min_elements__$1 = (function (){var or__11284__auto__ = min_elements;
if(cljs.core.truth_(or__11284__auto__)){
return or__11284__auto__;
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
var len__16006__auto___241 = arguments.length;
var i__16007__auto___242 = (0);
while(true){
if((i__16007__auto___242 < len__16006__auto___241)){
args238.push((arguments[i__16007__auto___242]));

var G__243 = (i__16007__auto___242 + (1));
i__16007__auto___242 = G__243;
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
var len__16006__auto___248 = arguments.length;
var i__16007__auto___249 = (0);
while(true){
if((i__16007__auto___249 < len__16006__auto___248)){
args245.push((arguments[i__16007__auto___249]));

var G__250 = (i__16007__auto___249 + (1));
i__16007__auto___249 = G__250;
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
var len__16006__auto___255 = arguments.length;
var i__16007__auto___256 = (0);
while(true){
if((i__16007__auto___256 < len__16006__auto___255)){
args252.push((arguments[i__16007__auto___256]));

var G__257 = (i__16007__auto___256 + (1));
i__16007__auto___256 = G__257;
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
var len__16006__auto___262 = arguments.length;
var i__16007__auto___263 = (0);
while(true){
if((i__16007__auto___263 < len__16006__auto___262)){
args259.push((arguments[i__16007__auto___263]));

var G__264 = (i__16007__auto___263 + (1));
i__16007__auto___263 = G__264;
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
var len__16006__auto___269 = arguments.length;
var i__16007__auto___270 = (0);
while(true){
if((i__16007__auto___270 < len__16006__auto___269)){
args266.push((arguments[i__16007__auto___270]));

var G__271 = (i__16007__auto___270 + (1));
i__16007__auto___270 = G__271;
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
var len__16006__auto___276 = arguments.length;
var i__16007__auto___277 = (0);
while(true){
if((i__16007__auto___277 < len__16006__auto___276)){
args273.push((arguments[i__16007__auto___277]));

var G__278 = (i__16007__auto___277 + (1));
i__16007__auto___277 = G__278;
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
var len__16006__auto___283 = arguments.length;
var i__16007__auto___284 = (0);
while(true){
if((i__16007__auto___284 < len__16006__auto___283)){
args280.push((arguments[i__16007__auto___284]));

var G__285 = (i__16007__auto___284 + (1));
i__16007__auto___284 = G__285;
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
var size__$1 = (function (){var x__12379__auto__ = size;
var y__12380__auto__ = (1);
return ((x__12379__auto__ > y__12380__auto__) ? x__12379__auto__ : y__12380__auto__);
})();
var max_bit_count = (function (){var x__12452__auto__ = size__$1;
var y__12453__auto__ = (54);
return ((x__12452__auto__ < y__12453__auto__) ? x__12452__auto__ : y__12453__auto__);
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
var min__$1 = (function (){var or__11284__auto__ = min;
if(cljs.core.truth_(or__11284__auto__)){
return or__11284__auto__;
} else {
return clojure.test.check.generators.MIN_INTEGER;
}
})();
var max__$1 = (function (){var or__11284__auto__ = max;
if(cljs.core.truth_(or__11284__auto__)){
return or__11284__auto__;
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
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.choose.call(null,(0),(function (){var x__12452__auto__ = size;
var y__12453__auto__ = (52);
return ((x__12452__auto__ < y__12453__auto__) ? x__12452__auto__ : y__12453__auto__);
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
var qs8 = ((1) << cljs.core.quot.call(null,(function (){var x__12452__auto__ = (200);
var y__12453__auto__ = size;
return ((x__12452__auto__ < y__12453__auto__) ? x__12452__auto__ : y__12453__auto__);
})(),(8)));
if(((lb <= (0))) && (((0) <= ub))){
return clojure.test.check.generators.choose.call(null,(function (){var x__12379__auto__ = lb;
var y__12380__auto__ = (- qs8);
return ((x__12379__auto__ > y__12380__auto__) ? x__12379__auto__ : y__12380__auto__);
})(),(function (){var x__12452__auto__ = ub;
var y__12453__auto__ = qs8;
return ((x__12452__auto__ < y__12453__auto__) ? x__12452__auto__ : y__12453__auto__);
})());
} else {
if((ub < (0))){
return clojure.test.check.generators.choose.call(null,(function (){var x__12379__auto__ = lb;
var y__12380__auto__ = (ub - qs8);
return ((x__12379__auto__ > y__12380__auto__) ? x__12379__auto__ : y__12380__auto__);
})(),ub);
} else {
return clojure.test.check.generators.choose.call(null,lb,(function (){var x__12452__auto__ = ub;
var y__12453__auto__ = (lb + qs8);
return ((x__12452__auto__ < y__12453__auto__) ? x__12452__auto__ : y__12453__auto__);
})());

}
}
}));
});
if(((lower_bound == null)) && ((upper_bound == null))){
return clojure.test.check.generators.tuple.call(null,gen_exp.call(null,(-1023),(1023)),clojure.test.check.generators.elements.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
} else {
var lower_bound__$1 = (function (){var or__11284__auto__ = lower_bound;
if(cljs.core.truth_(or__11284__auto__)){
return or__11284__auto__;
} else {
return clojure.test.check.generators.MIN_NEG_VALUE;
}
})();
var upper_bound__$1 = (function (){var or__11284__auto__ = upper_bound;
if(cljs.core.truth_(or__11284__auto__)){
return or__11284__auto__;
} else {
return clojure.test.check.generators.MAX_POS_VALUE;
}
})();
var lbexp = (function (){var x__12379__auto__ = (-1023);
var y__12380__auto__ = clojure.test.check.generators.get_exponent.call(null,lower_bound__$1);
return ((x__12379__auto__ > y__12380__auto__) ? x__12379__auto__ : y__12380__auto__);
})();
var ubexp = (function (){var x__12379__auto__ = (-1023);
var y__12380__auto__ = clojure.test.check.generators.get_exponent.call(null,upper_bound__$1);
return ((x__12379__auto__ > y__12380__auto__) ? x__12379__auto__ : y__12380__auto__);
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
,clojure.test.check.generators.tuple.call(null,gen_exp.call(null,(-1023),(function (){var x__12379__auto__ = ubexp;
var y__12380__auto__ = lbexp;
return ((x__12379__auto__ > y__12380__auto__) ? x__12379__auto__ : y__12380__auto__);
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
if(cljs.core.truth_((function (){var or__11284__auto__ = (pred == null);
if(or__11284__auto__){
return or__11284__auto__;
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
var G__354__$1 = (cljs.core.truth_(lower_bound)?(function (){var x__12379__auto__ = G__354;
var y__12380__auto__ = lower_bound;
return ((x__12379__auto__ > y__12380__auto__) ? x__12379__auto__ : y__12380__auto__);
})():G__354);
return G__354__$1;
})();
var block_ub = (function (){var G__355 = high;
var G__355__$1 = (cljs.core.truth_(upper_bound)?(function (){var x__12452__auto__ = G__355;
var y__12453__auto__ = upper_bound;
return ((x__12452__auto__ < y__12453__auto__) ? x__12452__auto__ : y__12453__auto__);
})():G__355);
return G__355__$1;
})();
var x__$1 = (block_lb + ((block_ub - block_lb) * (base - (1))));
var x__12379__auto__ = (function (){var x__12452__auto__ = x__$1;
var y__12453__auto__ = block_ub;
return ((x__12452__auto__ < y__12453__auto__) ? x__12452__auto__ : y__12453__auto__);
})();
var y__12380__auto__ = block_lb;
return ((x__12379__auto__ > y__12380__auto__) ? x__12379__auto__ : y__12380__auto__);
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
var G__363__$2 = (cljs.core.truth_((function (){var and__11256__auto__ = infinite_QMARK_;
if(cljs.core.truth_(and__11256__auto__)){
return (max == null);
} else {
return and__11256__auto__;
}
})())?cljs.core.conj.call(null,G__363__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,clojure.test.check.generators.POS_INFINITY)], null)):G__363__$1);
var G__363__$3 = (cljs.core.truth_((function (){var and__11256__auto__ = infinite_QMARK_;
if(cljs.core.truth_(and__11256__auto__)){
return (min == null);
} else {
return and__11256__auto__;
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
return cljs.core.boolean$.call(null,(function (){var and__11256__auto__ = d;
if(cljs.core.truth_(and__11256__auto__)){
var and__11256__auto____$1 = (("+" === c)) || (("-" === c));
if(and__11256__auto____$1){
return clojure.test.check.generators.digit_QMARK_.call(null,d);
} else {
return and__11256__auto____$1;
}
} else {
return and__11256__auto__;
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
var args__16008__auto__ = [];
var len__16006__auto___424 = arguments.length;
var i__16007__auto___425 = (0);
while(true){
if((i__16007__auto___425 < len__16006__auto___424)){
args__16008__auto__.push((arguments[i__16007__auto___425]));

var G__426 = (i__16007__auto___425 + (1));
i__16007__auto___425 = G__426;
continue;
} else {
}
break;
}

var argseq__16009__auto__ = ((((3) < args__16008__auto__.length))?(new cljs.core.IndexedSeq(args__16008__auto__.slice((3)),(0),null)):null);
return clojure.test.check.generators.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__16009__auto__);
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
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__15749__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"val__38__auto__","val__38__auto__",(-1563106925),null)),(function (){var x__15749__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__15749__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__15749__auto__);
})(),(function (){var x__15749__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__15749__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",(-1378210460),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"val__38__auto__","val__38__auto__",(-1563106925),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__15749__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"val__38__auto__","val__38__auto__",(-1563106925),null)),(function (){var x__15749__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",(1744522038),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"val__38__auto__","val__38__auto__",(-1563106925),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__15749__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__15749__auto__);
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
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",(-361313906),null)),(function (){var x__15749__auto__ = gen;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__15749__auto__);
})(),(function (){var x__15749__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__15749__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__15749__auto__ = binding;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__15749__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__15749__auto__);
})(),(function (){var x__15749__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.test.check.generators","let","clojure.test.check.generators/let",(-2079390126),null)),(function (){var x__15749__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__15749__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__15749__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__15749__auto__);
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

//# sourceURL=clojure/test/check/generators.js?rel=1483438393378
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvanVyZS90ZXN0L2NoZWNrL2dlbmVyYXRvcnMuanM/cmVsPTE0ODM0MzgzOTMzNzgiLCJzb3VyY2VzIjpbImdlbmVyYXRvcnMuY2xqcz9yZWw9MTQ4MzQzODM5MzM3OCJdLCJsaW5lQ291bnQiOjI4MTIsIm1hcHBpbmdzIjoiO0FBMEJBLEFBQUEsQUFBQSxBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQUEsQUFBQSxBQUFBLHNGQUFBLFdBQUFBLG9CQUFBQyxySEFBVzBEOztBQUFYLEFBQUEsSUFBQTNELDBCQUFBO0FBQUEsQUFBQSxPQUFBQSwrREFBQUMsaUJBQUE7OztBQUFBLEFBQUEsQUFBQSxzRkFBQSxXQUFBQyxvQkFBQUMsSUFBQUMsekhBQVd1RDs7QUFBWCxBQUFBLElBQUF6RCwwQkFBQTtBQUFBLEFBQUEsSUFBQUcsUUFBQSxFQUFBLENBQUFGLGVBQUFHLG9CQUFBLEFBQUFILFFBQUE7QUFBQSxBQUFBLFFBQUFFO0tBQUE7QUFBQUU7Ozs7QUFBQSxPQUFBQyx3QkFBQUMsZ0JBQUFOLElBQUFDOzs7OztBQUFBLEFBQUEsQUFBQSxrR0FBQSxXQUFBTSxvQkFBQUMsc0JBQUFDLHZKQUFXK0M7O0FBQVgsQUFBQSxJQUFBakQsMEJBQUE7QUFBQSxBQUFBLElBQUFHLHlCQUFBO2tCQUFBQztBQUFBLEFBQUEsT0FBQUMseUNBQUFKLHNCQUFBSyxvQkFBQSxHQUFBLElBQUEsR0FBQUosb0JBQUFFOzs7QUFBQSxBQUFBLE9BQUFDLHlDQUFBSixzQkFBQUUsdUJBQUEsNENBQUEsS0FBQSxJQUFBRCxvQkFBQSxBQUFBSywyQkFBQSxtRkFBQSxLQUFBQywyQkFBQSxLQUFBLElBQUEsSUFBQSxBQUFBQSxzQ0FBQSxDQUFBLG9EQUFBWCxZQUFBLGVBQUFFOzs7QUFBQSxBQUFBLEFBQUEseUVBQUFVLHpFQUFXd0M7O0FBQVgsQUFBQSxBQUFBLDBGQUFBLFdBQUF2QyxyR0FBV3VDOztBQUFYLEFBQUEsSUFBQXZDLFlBQUE7QUFBQSxBQUFBLFlBQUFD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Ozs7O0FBdENKLEFBQUEsQUFBQVYsNkRBQUE7O0FBQUEsQUFBQSxBQUFBQSx1REFBQSxXQUFBRztBQUFBLEFBQUEsSUFBQUMsU0FBQSwwQkFBQUQsMUJBMi9DZ0RoVjtJQTMvQ2hEZ1YsYUFBQSx5QkFBQUEsekJBNC9Da0QvVTtJQTUvQ2xEaVYsU0FBQSwwQkFBQUYsMUJBMi9DZ0RoVjtJQTMvQ2hEZ1YsYUFBQSx5QkFBQUEsekJBNC9Da0QvVTtJQTUvQ2xEa1YsU0FBQSwwQkFBQUgsMUJBMi9DZ0RoVjtJQTMvQ2hEZ1YsYUFBQSx5QkFBQUEsekJBNC9Da0QvVTtBQTUvQ2xELEFBQUEsT0FBQTRVLHdFQUFBSSxPQUFBQyxPQUFBQyxPQUFBSDs7O0FBQUEseUVBQUEsbUhBQUEsd0NBQUEsa0RBQUEsdURBQUEsd0RBQUEsbUVBQUEsNERBQUEsMkRBQUEsc0RBQUEseURBQUEsK0RBQUEsK0RBQUEscURBQUEsd0RBQUEsNEdBQUEsd0RBQUEscUNBQUEsS0FBQSwyQ0FBQSw4REFBQSxLQUFBLDZFQUFBLElBQUEseUVBQUEsbUZBQUEsZUFBQSw2REFBQSwyREFBQSxvRUFBQSxvRUFBQSwrREFBQSxlQUFBLG1GQUFBLDZEQUFBLDJEQUFBLG9FQUFBLHNEQUFBLG9FQUFBLHlFQUFBLGVBQUEsY0FBQSxJQUFBLE9BQUEsS0FBQSxPQUFBLGVBQUEsbUZBQUEsNkRBQUEsMkRBQUEsb0VBQUEsc0RBQUEsb0VBQUEsMmtDQUFBLHNEQUFBLEFBQUEsa0RBQUEsdEZBQVVILG9DQUFBQTs7QUFBVixBQUFBLHFEQUFBLHJEQUFVQSIsIm5hbWVzIjpbInRoaXNfXzEzODgzX19hdXRvX18iLCJrX18xMzg4NF9fYXV0b19fIiwidGhpc19fMTM4ODVfX2F1dG9fXyIsIms3MyIsImVsc2VfXzEzODg2X19hdXRvX18iLCJHX183NSIsImNsanMuY29yZS9LZXl3b3JkIiwiZ2VuIiwiY2xqcy5jb3JlL2dldCIsIl9fZXh0bWFwIiwidGhpc19fMTM4OTdfX2F1dG9fXyIsIndyaXRlcl9fMTM4OThfX2F1dG9fXyIsIm9wdHNfXzEzODk5X19hdXRvX18iLCJwci1wYWlyX18xMzkwMF9fYXV0b19fIiwia2V5dmFsX18xMzkwMV9fYXV0b19fIiwiY2xqcy5jb3JlL3ByLXNlcXVlbnRpYWwtd3JpdGVyIiwiY2xqcy5jb3JlL3ByLXdyaXRlciIsImNsanMuY29yZS9jb25jYXQiLCJjbGpzLmNvcmUvUGVyc2lzdGVudFZlY3RvciIsImNsanMuY29yZS9QUk9UT0NPTF9TRU5USU5FTCIsIkdfXzcyIiwiY2xqcy5jb3JlL1JlY29yZEl0ZXIiLCJjbGpzLmNvcmUvLWl0ZXJhdG9yIiwiY2xqcy5jb3JlL25pbC1pdGVyIiwidGhpc19fMTM4ODFfX2F1dG9fXyIsIl9fbWV0YSIsInRoaXNfXzEzODc2X19hdXRvX18iLCJfX2hhc2giLCJ0aGlzX18xMzg4N19fYXV0b19fIiwiY2xqcy5jb3JlL2NvdW50IiwidGhpc19fMTM4NzdfX2F1dG9fXyIsImhfXzEyNzY3X19hdXRvX18iLCJjbGpzLmNvcmUvaGFzaC1pbWFwIiwidGhpc19fMTM4NzhfX2F1dG9fXyIsIm90aGVyX18xMzg3OV9fYXV0b19fIiwiYW5kX18xMTI1Nl9fYXV0b19fIiwiY2xqcy5jb3JlL2VxdWl2LW1hcCIsInRoaXNfXzEzODkyX19hdXRvX18iLCJrX18xMzg5M19fYXV0b19fIiwiY2xqcy5jb3JlL2NvbnRhaW5zPyIsImNsanMuY29yZS9kaXNzb2MiLCJjbGpzLmNvcmUvd2l0aC1tZXRhIiwiY2xqcy5jb3JlL2ludG8iLCJjbGpzLmNvcmUvbm90LWVtcHR5IiwidGhpc19fMTM4OTBfX2F1dG9fXyIsImtfXzEzODkxX19hdXRvX18iLCJwcmVkX183NiIsImNsanMuY29yZS9rZXl3b3JkLWlkZW50aWNhbD8iLCJleHByX183NyIsImNsanMuY29yZS9hc3NvYyIsInRoaXNfXzEzODk1X19hdXRvX18iLCJjbGpzLmNvcmUvc2VxIiwidGhpc19fMTM4ODJfX2F1dG9fXyIsInRoaXNfXzEzODg4X19hdXRvX18iLCJlbnRyeV9fMTM4ODlfX2F1dG9fXyIsImNsanMuY29yZS92ZWN0b3I/IiwiY2xqcy5jb3JlLy1udGgiLCJjbGpzLmNvcmUvcmVkdWNlIiwiY2xqcy5jb3JlLy1jb25qIiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvR2VuZXJhdG9yIiwidGhpc19fMTQ0ODhfX2F1dG9fXyIsImNsanMuY29yZS9MaXN0Iiwid3JpdGVyX18xNDQ4OV9fYXV0b19fIiwiY2xqcy5jb3JlLy13cml0ZSIsIkdfXzc0IiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvLT5HZW5lcmF0b3IiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9tYXAtPkdlbmVyYXRvciIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL2dlbmVyYXRvcj8iLCJ4IiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvbWFrZS1nZW4iLCJnZW5lcmF0b3ItZm4iLCJwX184MCIsIm1hcF9fODMiLCJjbGpzLmNvcmUvYXBwbHkiLCJjbGpzLmNvcmUvaGFzaC1tYXAiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9jYWxsLWdlbiIsInJuZCIsInNpemUiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9nZW4tcHVyZSIsInZhbHVlIiwicF9fODUiLCJtYXBfXzg4IiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvZ2VuLWZtYXAiLCJrIiwiaCIsInBfXzkwIiwibWFwX185OCIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL2dlbi1iaW5kIiwidmVjX18xMDAiLCJjbGpzLmNvcmUvbnRoIiwibWFwX18xMDMiLCJyMSIsInIyIiwiY2xvanVyZS50ZXN0LmNoZWNrLnJhbmRvbS9zcGxpdCIsImlubmVyIiwicmVzdWx0IiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvbGF6eS1yYW5kb20tc3RhdGVzIiwicnIiLCJjbGpzLmNvcmUvTGF6eVNlcSIsInZlY19fMTA4IiwiY2xqcy5jb3JlL2NvbnMiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9nZW4tc2VxLT5zZXEtZ2VuIiwiZ2VucyIsInAxX182IyIsInAyX183IyIsImNsanMuY29yZS9tYXB2IiwiY2xvanVyZS50ZXN0LmNoZWNrLnJhbmRvbS9zcGxpdC1uIiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvZm1hcCIsImYiLCJqcy9FcnJvciIsInAxX184IyIsImNsb2p1cmUudGVzdC5jaGVjay5yb3NlLXRyZWUvZm1hcCIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL3JldHVybiIsImNsb2p1cmUudGVzdC5jaGVjay5yb3NlLXRyZWUvcHVyZSIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL2JpbmQtaGVscGVyIiwicm9zZSIsImNsb2p1cmUudGVzdC5jaGVjay5yb3NlLXRyZWUvam9pbiIsInAxX185IyIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL2JpbmQiLCJnZW5lcmF0b3IiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9tYWtlLXNpemUtcmFuZ2Utc2VxIiwibWF4LXNpemUiLCJjbGpzLmNvcmUvY3ljbGUiLCJjbGpzLmNvcmUvcmFuZ2UiLCJ2YXJfYXJncyIsImFyZ3MxMTEiLCJsZW5fXzE2MDA2X19hdXRvX18iLCJpX18xNjAwN19fYXV0b19fIiwiR19fMTEzIiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvc2FtcGxlLXNlcSIsInIiLCJjbG9qdXJlLnRlc3QuY2hlY2sucmFuZG9tL21ha2UtcmFuZG9tIiwic2l6ZS1zZXEiLCJwMV9fMTAjIiwicDJfXzExIyIsImNsanMuY29yZS9tYXAiLCJjbG9qdXJlLnRlc3QuY2hlY2sucm9zZS10cmVlL3Jvb3QiLCJhcmdzMTE4IiwiR19fMTIwIiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvc2FtcGxlIiwibnVtLXNhbXBsZXMiLCJjbGpzLmNvcmUvdGFrZSIsImFyZ3MxMjUiLCJHX18xMjciLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9nZW5lcmF0ZSIsInJuZyIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL2hhbGZzIiwibiIsInAxX18xMiMiLCJjbGpzLmNvcmUvdGFrZS13aGlsZSIsImNsanMuY29yZS9ub3Q9IiwicDFfXzEzIyIsImNsanMuY29yZS9pdGVyYXRlIiwiY2xqcy5jb3JlL3F1b3QiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9zaHJpbmstaW50IiwiaW50ZWdlciIsInAxX18xNCMiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9pbnQtcm9zZS10cmVlIiwiY2xvanVyZS50ZXN0LmNoZWNrLnJvc2UtdHJlZS9tYWtlLXJvc2UiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9jYWxjLWxvbmciLCJmYWN0b3IiLCJsb3dlciIsInVwcGVyIiwiY2xqcy5jb3JlL2xvbmciLCJNYXRoL2Zsb29yIiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvcmFuZC1yYW5nZSIsImNsb2p1cmUudGVzdC5jaGVjay5yYW5kb20vcmFuZC1kb3VibGUiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9zaXplZCIsInNpemVkLWdlbiIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL3Jlc2l6ZSIsIm1hcF9fMTM0IiwiX3NpemUiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9zY2FsZSIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL2Nob29zZSIsInAxX18xNSMiLCJjbG9qdXJlLnRlc3QuY2hlY2sucm9zZS10cmVlL2ZpbHRlciIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL29uZS1vZiIsImdlbmVyYXRvcnMiLCJjbGpzLmNvcmUvZXZlcnk/IiwicDFfXzE2IyIsInBfXzEzNiIsInZlY19fMTQzIiwic2VxX18xNDQiLCJmaXJzdF9fMTQ1IiwiY2xqcy5jb3JlL2ZpcnN0IiwiY2xqcy5jb3JlL25leHQiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9waWNrIiwidGFpbCIsInZlY19fMTQ2IiwiY2hhbmNlIiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvZnJlcXVlbmN5IiwicGFpcnMiLCJwX18xNTUiLCJ2ZWNfXzE1NiIsImciLCJ0b3RhbCIsImNsanMuY29yZS8rIiwicDFfXzE3IyIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL2VsZW1lbnRzIiwiY29sbCIsInYiLCJjbGpzLmNvcmUvdmVjIiwicDFfXzE4IyIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL3N1Y2gtdGhhdC1oZWxwZXIiLCJtYXgtdHJpZXMiLCJwcmVkIiwidHJpZXMtbGVmdCIsImNsanMuY29yZS9leC1pbmZvIiwidmVjX18xNjIiLCJhcmdzMTcxIiwiR19fMTczIiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvc3VjaC10aGF0IiwicmFuZC1zZWVkIiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvbm90LWVtcHR5IiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvbm8tc2hyaW5rIiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvc2hyaW5rLTIiLCJjbGpzLmNvcmUvY29tcCIsImNsb2p1cmUudGVzdC5jaGVjay5yb3NlLXRyZWUvY29sbGFwc2UiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9ib29sZWFuIiwiYXJnc19fMTYwMDhfX2F1dG9fXyIsImFyZ3NlcV9fMTYwMDlfX2F1dG9fXyIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL3R1cGxlIiwic2VxMTc4Iiwicm9zZXMiLCJjbG9qdXJlLnRlc3QuY2hlY2sucm9zZS10cmVlL3ppcCIsImNsanMuY29yZS92ZWN0b3IiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9pbnQiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9uYXQiLCJwMV9fMTkjIiwiTWF0aC9hYnMiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9wb3MtaW50IiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvbmVnLWludCIsInAxX18yMCMiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9zLXBvcy1pbnQiLCJjbGpzLmNvcmUvaW5jIiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvcy1uZWctaW50IiwiY2xqcy5jb3JlL2RlYyIsImFyZ3MxODIiLCJHX18xODQiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy92ZWN0b3IiLCJwMV9fMjEjIiwibnVtLWVsZW1lbnRzLXJvc2UiLCJjbGpzLmNvcmUvcmVwZWF0IiwiY2xvanVyZS50ZXN0LmNoZWNrLnJvc2UtdHJlZS9zaHJpbmsiLCJudW0tZWxlbWVudHMiLCJtaW4tZWxlbWVudHMiLCJtYXgtZWxlbWVudHMiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9saXN0IiwicDFfXzIyIyIsImNsanMuY29yZS9saXN0IiwicF9fMTg5IiwidmVjX18xOTMiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9zd2FwIiwiaTEiLCJpMiIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL3NodWZmbGUiLCJpbmRleC1nZW4iLCJwMV9fMjMjIiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvaGFzaC1tYXAiLCJzZXExOTYiLCJrdnMiLCJjbGpzLmNvcmUvZXZlbj8iLCJrcyIsImNsanMuY29yZS90YWtlLW50aCIsInZzIiwiY2xqcy5jb3JlL3Jlc3QiLCJwMV9fMjQjIiwiY2xqcy5jb3JlL3ppcG1hcCIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL3RyYW5zaWVudC1zZXQtY29udGFpbnM/IiwicyIsImNsanMuY29yZS8tbG9va3VwIiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvY29sbC1kaXN0aW5jdC1ieSoiLCJlbXB0eS1jb2xsIiwia2V5LWZuIiwic2h1ZmZsZS1mbiIsInJvc2UtdHJlZXMiLCJjbGpzLmNvcmUvdHJhbnNpZW50IiwidHJpZXMiLCJjbGpzLmNvcmUvPSIsImNsanMuY29yZS9wZXJzaXN0ZW50ISIsInJlc3RfXzI1IyIsInZlY19fMjAzIiwicm5nMSIsInJuZzIiLCJyb290IiwiY2xqcy5jb3JlL2NvbmohIiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvZGlzdGluY3QtYnk/Iiwib3JfXzExMjg0X19hdXRvX18iLCJjbGpzLmNvcmUvZW1wdHk/IiwiY2xqcy5jb3JlL2Rpc3RpbmN0PyIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL3RoZS1zaHVmZmxlLWZuIiwiY2xqcy5jb3JlL2VtcHR5IiwiY2FyZCIsImRlYy1jYXJkIiwicF9fMjI2IiwidmVjX18yMjciLCJpZHgiLCJ2ZWNfXzIzMCIsInN3YXAtaWR4IiwicF9fMjMzIiwibWFwX18yMzYiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9jb2xsLWRpc3RpbmN0LWJ5IiwiYWxsb3dzLWR1cGVzPyIsIm9yZGVyZWQ/IiwiX3JuZyIsImhhcmQtbWluLWVsZW1lbnRzIiwicDFfXzI2IyIsInNpemUtcHJlZCIsImdlbi1zaXplIiwicDFfXzI3IyIsImNsanMuY29yZS9ldmVyeS1wcmVkIiwicDFfXzI4IyIsInAxX18yOSMiLCJwMV9fMzAjIiwicDFfXzMxIyIsImFyZ3MyMzgiLCJHX18yNDAiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy92ZWN0b3ItZGlzdGluY3QiLCJvcHRzIiwiY2xqcy5jb3JlL2lkZW50aXR5IiwiYXJnczI0NSIsIkdfXzI0NyIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL2xpc3QtZGlzdGluY3QiLCJhcmdzMjUyIiwiR19fMjU0IiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvdmVjdG9yLWRpc3RpbmN0LWJ5IiwiYXJnczI1OSIsIkdfXzI2MSIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL2xpc3QtZGlzdGluY3QtYnkiLCJhcmdzMjY2IiwiR19fMjY4IiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvc2V0IiwiYXJnczI3MyIsIkdfXzI3NSIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL3NvcnRlZC1zZXQiLCJjbGpzLmNvcmUvc29ydGVkLXNldCIsImFyZ3MyODAiLCJHX18yODIiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9tYXAiLCJrZXktZ2VuIiwidmFsLWdlbiIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL2dlbi1yYXctbG9uZyIsImNsb2p1cmUudGVzdC5jaGVjay5yYW5kb20vcmFuZC1sb25nIiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvTUFYX0lOVEVHRVIiLCJjbGpzLmNvcmUvKiIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL01JTl9JTlRFR0VSIiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvYWJzIiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvbG9uZy0+bGFyZ2UtaW50ZWdlciIsImJpdC1jb3VudCIsIm1pbiIsIm1heCIsInJlcyIsIkdfXzI4OSIsInJlcyciLCJHX18yOTAiLCJjbGpzLmNvcmUvb2RkPyIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL2xhcmdlLWludGVnZXIqKiIsInhfXzEyMzc5X19hdXRvX18iLCJ5X18xMjM4MF9fYXV0b19fIiwibWF4LWJpdC1jb3VudCIsInhfXzEyNDUyX19hdXRvX18iLCJ5X18xMjQ1M19fYXV0b19fIiwidmVjX18yOTUiLCJwX18yOTgiLCJtYXBfXzMwMSIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL2xhcmdlLWludGVnZXIqIiwicDFfXzMyIyIsInAxX18zMyMiLCJwMV9fMzQjIiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvbGFyZ2UtaW50ZWdlciIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL1BPU19JTkZJTklUWSIsImpzL051bWJlciIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL05FR19JTkZJTklUWSIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL01BWF9QT1NfVkFMVUUiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9NSU5fTkVHX1ZBTFVFIiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvTkFOIiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvdW5pZm9ybS1pbnRlZ2VyIiwiR19fMzA4IiwicF9fMzA5IiwidmVjX18zMTAiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9zY2FsYiIsImV4cCIsImpzL01hdGgiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9maWZ0eS10d28tYml0LXJldmVyc2UiLCJvdXQiLCJvdXQtc2hpZnRlciIsIk1hdGgvcG93IiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvYmFja3dhcmRzLXNocmlua2luZy1zaWduaWZpY2FuZCIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL2dldC1leHBvbmVudCIsIk1hdGgvbG9nIiwidCIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL2RvdWJsZS1leHAtYW5kLXNpZ24iLCJsb3dlci1ib3VuZCIsInVwcGVyLWJvdW5kIiwibGIiLCJ1YiIsInFzOCIsImdlbi1leHAiLCJsYmV4cCIsInViZXhwIiwicF9fMzIxIiwidmVjX18zMjIiLCJzaWduIiwicGFpciIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL2Jsb2NrLWJvdW5kcyIsInZlY19fMzI4IiwibG93IiwiaGlnaCIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL2RvdWJsZS1maW5pdGUiLCJwMV9fMzUjIiwicDFfXzM2IyIsInAxX18zNyMiLCJwX18zNDQiLCJ2ZWNfXzM0NSIsInZlY19fMzQ4Iiwic2lnbmlmaWNhbmQiLCJiYXNlIiwidmVjX18zNTEiLCJibG9jay1sYiIsIkdfXzM1NCIsImJsb2NrLXViIiwiR19fMzU1IiwiR19fMzU2IiwicF9fMzU3IiwibWFwX18zNjEiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9kb3VibGUqIiwiaW5maW5pdGU/IiwiTmFOPyIsImZyZXF1ZW5jeS1hcmciLCJHX18zNjMiLCJjbGpzLmNvcmUvY29uaiIsImNsanMuY29yZS9zZWNvbmQiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9kb3VibGUiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9jaGFyIiwiY2xqcy5jb3JlL2NoYXIiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9jaGFyLWFzY2lpIiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvY2hhci1hbHBoYW51bWVyaWMiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9jaGFyLWFscGhhLW51bWVyaWMiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9jaGFyLWFscGhhIiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvY2hhci1zeW1ib2wtc3BlY2lhbCIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL2NoYXIta2V5d29yZC1yZXN0IiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvY2hhci1rZXl3b3JkLWZpcnN0IiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvc3RyaW5nIiwiY2xvanVyZS5zdHJpbmcvam9pbiIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL3N0cmluZy1hc2NpaSIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL3N0cmluZy1hbHBoYW51bWVyaWMiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9zdHJpbmctYWxwaGEtbnVtZXJpYyIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL2RpZ2l0PyIsImQiLCJnb29nLnN0cmluZy9pc051bWVyaWMiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy8rLW9yLS0tZGlnaXQ/IiwiYyIsImNsanMuY29yZS9ib29sZWFuIiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvbmFtZXNwYWNlLXNlZ21lbnQiLCJwX18zNjgiLCJ2ZWNfXzM2OSIsInZlY19fMzcyIiwiY2xqcy5jb3JlL25vdCIsInBfXzM2NCIsInZlY19fMzY1IiwiY3MiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9uYW1lc3BhY2UiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9rZXl3b3JkLXNlZ21lbnQtcmVzdCIsInBfXzM3NSIsInZlY19fMzc2IiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMva2V5d29yZC1zZWdtZW50LWZpcnN0IiwicF9fMzc5IiwidmVjX18zODAiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9rZXl3b3JkIiwicF9fMzgzIiwidmVjX18zODQiLCJjbGpzLmNvcmUva2V5d29yZCIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL2tleXdvcmQtbnMiLCJwX18zODciLCJ2ZWNfXzM4OCIsIm5zIiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvY2hhci1zeW1ib2wtZmlyc3QiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9jaGFyLXN5bWJvbC1yZXN0IiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvc3ltYm9sIiwicF9fMzk1IiwidmVjX18zOTYiLCJ2ZWNfXzM5OSIsInBfXzM5MSIsInZlY19fMzkyIiwiY2xqcy5jb3JlL3N5bWJvbCIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL3N5bWJvbC1ucyIsInBfXzQwNiIsInZlY19fNDA3IiwidmVjX180MTAiLCJfIiwicF9fNDAyIiwidmVjX180MDMiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9yYXRpbyIsInBfXzQxMyIsInZlY19fNDE0IiwiYSIsImIiLCJjbGpzLmNvcmUvY29tcGxlbWVudCIsImNsanMuY29yZS96ZXJvPyIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL3V1aWQiLCJuaWJibGVzIiwicmhleCIsImNsanMuY29yZS91dWlkIiwiaGV4IiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvc2ltcGxlLXR5cGUiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9zaW1wbGUtdHlwZS1wcmludGFibGUiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9jb250YWluZXItdHlwZSIsImlubmVyLXR5cGUiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9yZWN1cnNpdmUtaGVscGVyIiwiY29udGFpbmVyLWdlbi1mbiIsInNjYWxhci1nZW4iLCJzY2FsYXItc2l6ZSIsImNoaWxkcmVuLXNpemUiLCJoZWlnaHQiLCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9ycy9yZWN1cnNpdmUtZ2VuIiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvYW55IiwiY2xvanVyZS50ZXN0LmNoZWNrLmdlbmVyYXRvcnMvYW55LXByaW50YWJsZSIsImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzL2xldCIsIiZmb3JtIiwiJmVudiIsInNlcTQxNyIsIkdfXzQxOCIsIkdfXzQxOSIsIkdfXzQyMCIsImJpbmRpbmdzIiwiYm9keSIsImNsanMuY29yZS9zZXF1ZW5jZSIsInhfXzE1NzQ5X19hdXRvX18iLCJ2ZWNfXzQyMSIsInNlcV9fNDIyIiwiZmlyc3RfXzQyMyIsImJpbmRpbmciLCJtb3JlIiwiY2xqcy5jb3JlL0luZGV4ZWRTZXEiXSwic291cmNlc0NvbnRlbnQiOlsiOyAgIENvcHlyaWdodCAoYykgUmljaCBIaWNrZXksIFJlaWQgRHJhcGVyLCBhbmQgY29udHJpYnV0b3JzLlxuOyAgIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG47ICAgVGhlIHVzZSBhbmQgZGlzdHJpYnV0aW9uIHRlcm1zIGZvciB0aGlzIHNvZnR3YXJlIGFyZSBjb3ZlcmVkIGJ5IHRoZVxuOyAgIEVjbGlwc2UgUHVibGljIExpY2Vuc2UgMS4wIChodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvZWNsaXBzZS0xLjAucGhwKVxuOyAgIHdoaWNoIGNhbiBiZSBmb3VuZCBpbiB0aGUgZmlsZSBlcGwtdjEwLmh0bWwgYXQgdGhlIHJvb3Qgb2YgdGhpcyBkaXN0cmlidXRpb24uXG47ICAgQnkgdXNpbmcgdGhpcyBzb2Z0d2FyZSBpbiBhbnkgZmFzaGlvbiwgeW91IGFyZSBhZ3JlZWluZyB0byBiZSBib3VuZCBieVxuOyAgIHRoZSB0ZXJtcyBvZiB0aGlzIGxpY2Vuc2UuXG47ICAgWW91IG11c3Qgbm90IHJlbW92ZSB0aGlzIG5vdGljZSwgb3IgYW55IG90aGVyLCBmcm9tIHRoaXMgc29mdHdhcmUuXG5cbihucyBjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9yc1xuICAoOnJlZmVyLWNsb2p1cmUgOmV4Y2x1ZGUgW2ludCB2ZWN0b3IgbGlzdCBoYXNoLW1hcCBtYXAga2V5d29yZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXIgYm9vbGVhbiBieXRlIGJ5dGVzIHNlcXVlbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2h1ZmZsZSBub3QtZW1wdHkgc3ltYm9sIG5hbWVzcGFjZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldCBzb3J0ZWQtc2V0IHV1aWQgZG91YmxlIGxldF0pXG4gICg6cmVxdWlyZSBbIz8oOmNsaiBjbG9qdXJlLmNvcmUgOmNsanMgY2xqcy5jb3JlKSA6YXMgY29yZVxuICAgICAgICAgICAgICM/QCg6Y2xqcyBbOmluY2x1ZGUtbWFjcm9zIHRydWVdKV1cbiAgICAgICAgICAgIFtjbG9qdXJlLnRlc3QuY2hlY2sucmFuZG9tIDphcyByYW5kb21dXG4gICAgICAgICAgICBbY2xvanVyZS50ZXN0LmNoZWNrLnJvc2UtdHJlZSA6YXMgcm9zZV1cbiAgICAgICAgICAgICM/QCg6Y2xqcyBbW2dvb2cuc3RyaW5nIDphcyBnc3RyaW5nXVxuICAgICAgICAgICAgICAgICAgICAgICBbY2xvanVyZS5zdHJpbmddXSkpKVxuXG5cbjs7IEdlblxuOzsgKGludGVybmFsIGZ1bmN0aW9ucylcbjs7IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4oZGVmcmVjb3JkIEdlbmVyYXRvciBbZ2VuXSlcblxuKGRlZm4gZ2VuZXJhdG9yP1xuICBcIlRlc3QgaWYgYHhgIGlzIGEgZ2VuZXJhdG9yLiBHZW5lcmF0b3JzIHNob3VsZCBiZSB0cmVhdGVkIGFzIG9wYXF1ZSB2YWx1ZXMuXCJcbiAgW3hdXG4gIChpbnN0YW5jZT8gR2VuZXJhdG9yIHgpKVxuXG4oZGVmbi0gbWFrZS1nZW5cbiAgW2dlbmVyYXRvci1mbl1cbiAgKEdlbmVyYXRvci4gZ2VuZXJhdG9yLWZuKSlcblxuKGRlZm4gY2FsbC1nZW5cbiAgezpuby1kb2MgdHJ1ZX1cbiAgW3tnZW5lcmF0b3ItZm4gOmdlbn0gcm5kIHNpemVdXG4gIChnZW5lcmF0b3ItZm4gcm5kIHNpemUpKVxuXG4oZGVmbiBnZW4tcHVyZVxuICB7Om5vLWRvYyB0cnVlfVxuICBbdmFsdWVdXG4gIChtYWtlLWdlblxuICAgIChmbiBbcm5kIHNpemVdXG4gICAgICB2YWx1ZSkpKVxuXG4oZGVmbiBnZW4tZm1hcFxuICB7Om5vLWRvYyB0cnVlfVxuICBbayB7aCA6Z2VufV1cbiAgKG1ha2UtZ2VuXG4gICAgKGZuIFtybmQgc2l6ZV1cbiAgICAgIChrIChoIHJuZCBzaXplKSkpKSlcblxuKGRlZm4gZ2VuLWJpbmRcbiAgezpuby1kb2MgdHJ1ZX1cbiAgW3toIDpnZW59IGtdXG4gIChtYWtlLWdlblxuICAgIChmbiBbcm5kIHNpemVdXG4gICAgICAoY29yZS9sZXQgW1tyMSByMl0gKHJhbmRvbS9zcGxpdCBybmQpXG4gICAgICAgICAgICBpbm5lciAoaCByMSBzaXplKVxuICAgICAgICAgICAge3Jlc3VsdCA6Z2VufSAoayBpbm5lcildXG4gICAgICAgIChyZXN1bHQgcjIgc2l6ZSkpKSkpXG5cbihkZWZuIGxhenktcmFuZG9tLXN0YXRlc1xuICBcIkdpdmVuIGEgcmFuZG9tIG51bWJlciBnZW5lcmF0b3IsIHJldHVybnMgYW4gaW5maW5pdGUgbGF6eSBzZXF1ZW5jZVxuICBvZiByYW5kb20gbnVtYmVyIGdlbmVyYXRvcnMuXCJcbiAgW3JyXVxuICAobGF6eS1zZXFcbiAgIChjb3JlL2xldCBbW3IxIHIyXSAocmFuZG9tL3NwbGl0IHJyKV1cbiAgICAgKGNvbnMgcjFcbiAgICAgICAgICAgKGxhenktcmFuZG9tLXN0YXRlcyByMikpKSkpXG5cbihkZWZuLSBnZW4tc2VxLT5zZXEtZ2VuXG4gIFwiVGFrZXMgYSBzZXF1ZW5jZSBvZiBnZW5lcmF0b3JzIGFuZCByZXR1cm5zIGEgZ2VuZXJhdG9yIG9mIHNlcXVlbmNlcyAoZXIsIHZlY3RvcnMpLlwiXG4gIFtnZW5zXVxuICAobWFrZS1nZW5cbiAgIChmbiBbcm5kIHNpemVdXG4gICAgIChtYXB2ICMoY2FsbC1nZW4gJSAlMiBzaXplKSBnZW5zIChyYW5kb20vc3BsaXQtbiBybmQgKGNvdW50IGdlbnMpKSkpKSlcblxuOzsgRXhwb3J0ZWQgZ2VuZXJhdG9yIGZ1bmN0aW9uc1xuOzsgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbihkZWZuIGZtYXBcbiAgW2YgZ2VuXVxuICAoYXNzZXJ0IChnZW5lcmF0b3I/IGdlbikgXCJTZWNvbmQgYXJnIHRvIGZtYXAgbXVzdCBiZSBhIGdlbmVyYXRvclwiKVxuICAoZ2VuLWZtYXAgIyhyb3NlL2ZtYXAgZiAlKSBnZW4pKVxuXG5cbihkZWZuIHJldHVyblxuICBcIkNyZWF0ZSBhIGdlbmVyYXRvciB0aGF0IGFsd2F5cyByZXR1cm5zIGB2YWx1ZWAsXG4gIGFuZCBuZXZlciBzaHJpbmtzLiBZb3UgY2FuIHRoaW5rIG9mIHRoaXMgYXNcbiAgdGhlIGBjb25zdGFudGx5YCBvZiBnZW5lcmF0b3JzLlwiXG4gIFt2YWx1ZV1cbiAgKGdlbi1wdXJlIChyb3NlL3B1cmUgdmFsdWUpKSlcblxuKGRlZm4tIGJpbmQtaGVscGVyXG4gIFtrXVxuICAoZm4gW3Jvc2VdXG4gICAgKGdlbi1mbWFwIHJvc2Uvam9pblxuICAgICAgICAgICAgICAobWFrZS1nZW5cbiAgICAgICAgICAgICAgICAoZm4gW3JuZCBzaXplXVxuICAgICAgICAgICAgICAgICAgKHJvc2UvZm1hcCAjKGNhbGwtZ2VuICUgcm5kIHNpemUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyb3NlL2ZtYXAgayByb3NlKSkpKSkpKVxuXG4oZGVmbiBiaW5kXG4gIFwiQ3JlYXRlIGEgbmV3IGdlbmVyYXRvciB0aGF0IHBhc3NlcyB0aGUgcmVzdWx0IG9mIGBnZW5gIGludG8gZnVuY3Rpb25cbiAgYGtgLiBga2Agc2hvdWxkIHJldHVybiBhIG5ldyBnZW5lcmF0b3IuIFRoaXMgYWxsb3dzIHlvdSB0byBjcmVhdGUgbmV3XG4gIGdlbmVyYXRvcnMgdGhhdCBkZXBlbmQgb24gdGhlIHZhbHVlIG9mIG90aGVyIGdlbmVyYXRvcnMuIEZvciBleGFtcGxlLFxuICB0byBjcmVhdGUgYSBnZW5lcmF0b3Igd2hpY2ggZmlyc3QgZ2VuZXJhdGVzIGEgdmVjdG9yIG9mIGludGVnZXJzLCBhbmRcbiAgdGhlbiBjaG9vc2VzIGEgcmFuZG9tIGVsZW1lbnQgZnJvbSB0aGF0IHZlY3RvcjpcblxuICAgICAgKGdlbi9iaW5kIChnZW4vc3VjaC10aGF0IG5vdC1lbXB0eSAoZ2VuL3ZlY3RvciBnZW4vaW50KSlcbiAgICAgICAgICAgICAgICA7OyB0aGlzIGZ1bmN0aW9uIHRha2VzIGEgcmVhbGl6ZWQgdmVjdG9yLFxuICAgICAgICAgICAgICAgIDs7IGFuZCB0aGVuIHJldHVybnMgYSBuZXcgZ2VuZXJhdG9yIHdoaWNoXG4gICAgICAgICAgICAgICAgOzsgY2hvb3NlcyBhIHJhbmRvbSBlbGVtZW50IGZyb20gaXRcbiAgICAgICAgICAgICAgICBnZW4vZWxlbWVudHMpXG5cbiAgXCJcbiAgW2dlbmVyYXRvciBrXVxuICAoYXNzZXJ0IChnZW5lcmF0b3I/IGdlbmVyYXRvcikgXCJGaXJzdCBhcmcgdG8gYmluZCBtdXN0IGJlIGEgZ2VuZXJhdG9yXCIpXG4gIChnZW4tYmluZCBnZW5lcmF0b3IgKGJpbmQtaGVscGVyIGspKSlcblxuOzsgSGVscGVyc1xuOzsgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbihkZWZuIG1ha2Utc2l6ZS1yYW5nZS1zZXFcbiAgezpuby1kb2MgdHJ1ZX1cbiAgW21heC1zaXplXVxuICAoY3ljbGUgKHJhbmdlIDAgbWF4LXNpemUpKSlcblxuKGRlZm4gc2FtcGxlLXNlcVxuICBcIlJldHVybiBhIHNlcXVlbmNlIG9mIHJlYWxpemVkIHZhbHVlcyBmcm9tIGBnZW5lcmF0b3JgLlwiXG4gIChbZ2VuZXJhdG9yXSAoc2FtcGxlLXNlcSBnZW5lcmF0b3IgMTAwKSlcbiAgKFtnZW5lcmF0b3IgbWF4LXNpemVdXG4gICAoY29yZS9sZXQgW3IgKHJhbmRvbS9tYWtlLXJhbmRvbSlcbiAgICAgICAgIHNpemUtc2VxIChtYWtlLXNpemUtcmFuZ2Utc2VxIG1heC1zaXplKV1cbiAgICAgKGNvcmUvbWFwICMocm9zZS9yb290IChjYWxsLWdlbiBnZW5lcmF0b3IgJTEgJTIpKVxuICAgICAgICAgICAgICAgKGxhenktcmFuZG9tLXN0YXRlcyByKVxuICAgICAgICAgICAgICAgc2l6ZS1zZXEpKSkpXG5cbihkZWZuIHNhbXBsZVxuICBcIlJldHVybiBhIHNlcXVlbmNlIG9mIGBudW0tc2FtcGxlc2AgKGRlZmF1bHQgMTApXG4gIHJlYWxpemVkIHZhbHVlcyBmcm9tIGBnZW5lcmF0b3JgLlwiXG4gIChbZ2VuZXJhdG9yXVxuICAgKHNhbXBsZSBnZW5lcmF0b3IgMTApKVxuICAoW2dlbmVyYXRvciBudW0tc2FtcGxlc11cbiAgIChhc3NlcnQgKGdlbmVyYXRvcj8gZ2VuZXJhdG9yKSBcIkZpcnN0IGFyZyB0byBzYW1wbGUgbXVzdCBiZSBhIGdlbmVyYXRvclwiKVxuICAgKHRha2UgbnVtLXNhbXBsZXMgKHNhbXBsZS1zZXEgZ2VuZXJhdG9yKSkpKVxuXG5cbihkZWZuIGdlbmVyYXRlXG4gIFwiUmV0dXJucyBhIHNpbmdsZSBzYW1wbGUgdmFsdWUgZnJvbSB0aGUgZ2VuZXJhdG9yLCB1c2luZyBhIGRlZmF1bHRcbiAgc2l6ZSBvZiAzMC5cIlxuICAoW2dlbmVyYXRvcl1cbiAgICAgKGdlbmVyYXRlIGdlbmVyYXRvciAzMCkpXG4gIChbZ2VuZXJhdG9yIHNpemVdXG4gICAgIChjb3JlL2xldCBbcm5nIChyYW5kb20vbWFrZS1yYW5kb20pXVxuICAgICAgIChyb3NlL3Jvb3QgKGNhbGwtZ2VuIGdlbmVyYXRvciBybmcgc2l6ZSkpKSkpXG5cblxuOzsgSW50ZXJuYWwgSGVscGVyc1xuOzsgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbihkZWZuLSBoYWxmc1xuICBbbl1cbiAgKHRha2Utd2hpbGUgIyhub3Q9IDAgJSkgKGl0ZXJhdGUgIyhxdW90ICUgMikgbikpKVxuXG4oZGVmbi0gc2hyaW5rLWludFxuICBbaW50ZWdlcl1cbiAgKGNvcmUvbWFwICMoLSBpbnRlZ2VyICUpIChoYWxmcyBpbnRlZ2VyKSkpXG5cbihkZWZuLSBpbnQtcm9zZS10cmVlXG4gIFt2YWx1ZV1cbiAgKHJvc2UvbWFrZS1yb3NlIHZhbHVlIChjb3JlL21hcCBpbnQtcm9zZS10cmVlIChzaHJpbmstaW50IHZhbHVlKSkpKVxuXG47OyBjYWxjLWxvbmcgaXMgZmFjdG9yZWQgb3V0IHRvIHN1cHBvcnQgdGVzdGluZyB0aGUgc3VycHJpc2luZ2x5IHRyaWNreSBkb3VibGUgbWF0aC4gIE5vdGU6XG47OyBBbiBleHRyZW1lIGxvbmcgdmFsdWUgZG9lcyBub3QgaGF2ZSBhIHByZWNpc2lvbi1wcmVzZXJ2aW5nIHJlcHJlc2VudGF0aW9uIGFzIGEgZG91YmxlLlxuOzsgQmUgY2FyZWZ1bCBhYm91dCBjaGFuZ2luZyB0aGlzIGNvZGUgdW5sZXNzIHlvdSB1bmRlcnN0YW5kIHdoYXQncyBoYXBwZW5pbmcgaW4gdGhlc2Vcbjs7IGV4YW1wbGVzOlxuOztcbjs7ICg9IChsb25nICgtIEludGVnZXIvTUFYX1ZBTFVFIChkb3VibGUgKC0gSW50ZWdlci9NQVhfVkFMVUUgMTApKSkpIDEwKVxuOzsgKD0gKGxvbmcgKC0gTG9uZy9NQVhfVkFMVUUgKGRvdWJsZSAoLSBMb25nL01BWF9WQUxVRSAxMCkpKSkgMClcblxuKGRlZm4tIGNhbGMtbG9uZ1xuICBbZmFjdG9yIGxvd2VyIHVwcGVyXVxuICA7OyB0aGVzZSBwcmUtIGFuZCBwb3N0LWNvbmRpdGlvbnMgYXJlIGRpc2FibGVkIGZvciBkZXBsb3ltZW50XG4gICNfIHs6cHJlIFsoZmxvYXQ/IGZhY3RvcikgKD49IGZhY3RvciAwLjApICg8IGZhY3RvciAxLjApXG4gICAgICAgICAgICAoaW50ZWdlcj8gbG93ZXIpIChpbnRlZ2VyPyB1cHBlcikgKDw9IGxvd2VyIHVwcGVyKV1cbiAgICAgIDpwb3N0IFsoaW50ZWdlcj8gJSldfVxuICA7OyBVc2UgLScgb24gd2lkdGggdG8gbWFpbnRhaW4gYWNjdXJhY3kgd2l0aCBvdmVyZmxvdyBwcm90ZWN0aW9uLlxuICAjPyg6Y2xqXG4gICAgIChjb3JlL2xldCBbd2lkdGggKC0nIHVwcGVyIGxvd2VyIC0xKV1cbiAgICAgICA7OyBQcmVzZXJ2ZSBsb25nIHByZWNpc2lvbiBpZiB0aGUgd2lkdGggaXMgaW4gdGhlIGxvbmcgcmFuZ2UuICBPdGhlcndpc2UsIHdlIG11c3QgYWNjZXB0XG4gICAgICAgOzsgbGVzcyBwcmVjaXNpb24gYmVjYXVzZSBkb3VibGVzIGRvbid0IGhhdmUgZW5vdWdoIGJpdHMgdG8gcHJlc2VydmUgbG9uZyBlcXVpdmFsZW5jZSBhdFxuICAgICAgIDs7IGV4dHJlbWUgdmFsdWVzLlxuICAgICAgIChpZiAoPCB3aWR0aCBMb25nL01BWF9WQUxVRSlcbiAgICAgICAgICgrIGxvd2VyIChsb25nIChNYXRoL2Zsb29yICgqIGZhY3RvciB3aWR0aCkpKSlcbiAgICAgICAgIDs7IENsYW1wIGRvd24gdG8gdXBwZXIgYmVjYXVzZSBkb3VibGUgbWF0aC5cbiAgICAgICAgIChtaW4gdXBwZXIgKGxvbmcgKE1hdGgvZmxvb3IgKCsgbG93ZXIgKCogZmFjdG9yIHdpZHRoKSkpKSkpKVxuXG4gICAgIDpjbGpzXG4gICAgIChsb25nIChNYXRoL2Zsb29yICgrIGxvd2VyICgtICgqIGZhY3RvciAoKyAxLjAgdXBwZXIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCogZmFjdG9yIGxvd2VyKSkpKSkpKVxuXG4oZGVmbi0gcmFuZC1yYW5nZVxuICBbcm5kIGxvd2VyIHVwcGVyXVxuICB7OnByZSBbKDw9IGxvd2VyIHVwcGVyKV19XG4gIChjYWxjLWxvbmcgKHJhbmRvbS9yYW5kLWRvdWJsZSBybmQpIGxvd2VyIHVwcGVyKSlcblxuKGRlZm4gc2l6ZWRcbiAgXCJDcmVhdGUgYSBnZW5lcmF0b3IgdGhhdCBkZXBlbmRzIG9uIHRoZSBzaXplIHBhcmFtZXRlci5cbiAgYHNpemVkLWdlbmAgaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGFuIGludGVnZXIgYW5kIHJldHVybnNcbiAgYSBnZW5lcmF0b3IuXCJcbiAgW3NpemVkLWdlbl1cbiAgKG1ha2UtZ2VuXG4gICAgKGZuIFtybmQgc2l6ZV1cbiAgICAgIChjb3JlL2xldCBbc2l6ZWQtZ2VuIChzaXplZC1nZW4gc2l6ZSldXG4gICAgICAgIChjYWxsLWdlbiBzaXplZC1nZW4gcm5kIHNpemUpKSkpKVxuXG47OyBDb21iaW5hdG9ycyBhbmQgaGVscGVyc1xuOzsgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbihkZWZuIHJlc2l6ZVxuICBcIkNyZWF0ZSBhIG5ldyBnZW5lcmF0b3Igd2l0aCBgc2l6ZWAgYWx3YXlzIGJvdW5kIHRvIGBuYC5cIlxuICBbbiBnZW5lcmF0b3JdXG4gIChhc3NlcnQgKGdlbmVyYXRvcj8gZ2VuZXJhdG9yKSBcIlNlY29uZCBhcmcgdG8gcmVzaXplIG11c3QgYmUgYSBnZW5lcmF0b3JcIilcbiAgKGNvcmUvbGV0IFt7OmtleXMgW2dlbl19IGdlbmVyYXRvcl1cbiAgICAobWFrZS1nZW5cbiAgICAgKGZuIFtybmQgX3NpemVdXG4gICAgICAgKGdlbiBybmQgbikpKSkpXG5cbihkZWZuIHNjYWxlXG4gIFwiQ3JlYXRlIGEgbmV3IGdlbmVyYXRvciB0aGF0IG1vZGlmaWVzIHRoZSBzaXplIHBhcmFtZXRlciBieSB0aGUgZ2l2ZW4gZnVuY3Rpb24uIEludGVuZGVkIHRvXG4gICBzdXBwb3J0IGdlbmVyYXRvcnMgd2l0aCBzaXplcyB0aGF0IG5lZWQgdG8gZ3JvdyBhdCBkaWZmZXJlbnQgcmF0ZXMgY29tcGFyZWQgdG8gdGhlIG5vcm1hbFxuICAgbGluZWFyIHNjYWxpbmcuXCJcbiAgKFtmIGdlbmVyYXRvcl1cbiAgICAoc2l6ZWQgKGZuIFtuXSAocmVzaXplIChmIG4pIGdlbmVyYXRvcikpKSkpXG5cbihkZWZuIGNob29zZVxuICAjPyg6Y2xqXG4gICAgIFwiQ3JlYXRlIGEgZ2VuZXJhdG9yIHRoYXQgcmV0dXJucyBsb25nIGludGVnZXJzIGluIHRoZSByYW5nZSBgbG93ZXJgIHRvIGB1cHBlcmAsIGluY2x1c2l2ZS5cIlxuXG4gICAgIDpjbGpzXG4gICAgIFwiQ3JlYXRlIGEgZ2VuZXJhdG9yIHRoYXQgcmV0dXJucyBudW1iZXJzIGluIHRoZSByYW5nZVxuICAgICBgbG93ZXJgIHRvIGB1cHBlcmAsIGluY2x1c2l2ZS5cIilcbiAgW2xvd2VyIHVwcGVyXVxuICA7OyBjYXN0IHRvIGxvbmcgdG8gc3VwcG9ydCBkb3VibGVzIGFzIGFyZ3VtZW50cyBwZXIgVENIRUNLLTczXG4gIChjb3JlL2xldCAjPyg6Y2xqXG4gICAgICAgICAgW2xvd2VyIChsb25nIGxvd2VyKVxuICAgICAgICAgICB1cHBlciAobG9uZyB1cHBlcildXG5cbiAgICAgICAgICA6Y2xqcyA7OyBkb2VzIG5vdGhpbmcsIG5vIGxvbmcgaW4gY2xqc1xuICAgICAgICAgIFtdKVxuICAgIChtYWtlLWdlblxuICAgICAoZm4gW3JuZCBfc2l6ZV1cbiAgICAgICAoY29yZS9sZXQgW3ZhbHVlIChyYW5kLXJhbmdlIHJuZCBsb3dlciB1cHBlcildXG4gICAgICAgICAocm9zZS9maWx0ZXJcbiAgICAgICAgICAjKGFuZCAoPj0gJSBsb3dlcikgKDw9ICUgdXBwZXIpKVxuICAgICAgICAgIChpbnQtcm9zZS10cmVlIHZhbHVlKSkpKSkpKVxuXG4oZGVmbiBvbmUtb2ZcbiAgXCJDcmVhdGUgYSBnZW5lcmF0b3IgdGhhdCByYW5kb21seSBjaG9vc2VzIGEgdmFsdWUgZnJvbSB0aGUgbGlzdCBvZlxuICBwcm92aWRlZCBnZW5lcmF0b3JzLiBTaHJpbmtzIHRvd2FyZCBjaG9vc2luZyBhbiBlYXJsaWVyIGdlbmVyYXRvcixcbiAgYXMgd2VsbCBhcyBzaHJpbmtpbmcgdGhlIHZhbHVlIGdlbmVyYXRlZCBieSB0aGUgY2hvc2VuIGdlbmVyYXRvci5cblxuICBFeGFtcGxlczpcblxuICAgICAgKG9uZS1vZiBbZ2VuL2ludCBnZW4vYm9vbGVhbiAoZ2VuL3ZlY3RvciBnZW4vaW50KV0pXG5cbiAgXCJcbiAgW2dlbmVyYXRvcnNdXG4gIChhc3NlcnQgKGV2ZXJ5PyBnZW5lcmF0b3I/IGdlbmVyYXRvcnMpXG4gICAgICAgICAgXCJBcmcgdG8gb25lLW9mIG11c3QgYmUgYSBjb2xsZWN0aW9uIG9mIGdlbmVyYXRvcnNcIilcbiAgKGJpbmQgKGNob29zZSAwIChkZWMgKGNvdW50IGdlbmVyYXRvcnMpKSlcbiAgICAgICAgIyhudGggZ2VuZXJhdG9ycyAlKSkpXG5cbihkZWZuLSBwaWNrXG4gIFtbaCAmIHRhaWxdIG5dXG4gIChjb3JlL2xldCBbW2NoYW5jZSBnZW5dIGhdXG4gICAgKGlmICg8PSBuIGNoYW5jZSlcbiAgICAgIGdlblxuICAgICAgKHJlY3VyIHRhaWwgKC0gbiBjaGFuY2UpKSkpKVxuXG4oZGVmbiBmcmVxdWVuY3lcbiAgXCJDcmVhdGUgYSBnZW5lcmF0b3IgdGhhdCBjaG9vc2VzIGEgZ2VuZXJhdG9yIGZyb20gYHBhaXJzYCBiYXNlZCBvbiB0aGVcbiAgcHJvdmlkZWQgbGlrZWxpaG9vZHMuIFRoZSBsaWtlbGlob29kIG9mIGEgZ2l2ZW4gZ2VuZXJhdG9yIGJlaW5nIGNob3NlbiBpc1xuICBpdHMgbGlrZWxpaG9vZCBkaXZpZGVkIGJ5IHRoZSBzdW0gb2YgYWxsIGxpa2VsaWhvb2RzXG5cbiAgRXhhbXBsZXM6XG5cbiAgICAgIChnZW4vZnJlcXVlbmN5IFtbNSBnZW4vaW50XSBbMyAoZ2VuL3ZlY3RvciBnZW4vaW50KV0gWzIgZ2VuL2Jvb2xlYW5dXSlcbiAgXCJcbiAgW3BhaXJzXVxuICAoYXNzZXJ0IChldmVyeT8gKGZuIFtbeCBnXV0gKGFuZCAobnVtYmVyPyB4KSAoZ2VuZXJhdG9yPyBnKSkpXG4gICAgICAgICAgICAgICAgICBwYWlycylcbiAgICAgICAgICBcIkFyZyB0byBmcmVxdWVuY3kgbXVzdCBiZSBhIGxpc3Qgb2YgW251bSBnZW5lcmF0b3JdIHBhaXJzXCIpXG4gIChjb3JlL2xldCBbdG90YWwgKGFwcGx5ICsgKGNvcmUvbWFwIGZpcnN0IHBhaXJzKSldXG4gICAgKGdlbi1iaW5kIChjaG9vc2UgMSB0b3RhbClcbiAgICAgICAgICAgICAgIyhwaWNrIHBhaXJzIChyb3NlL3Jvb3QgJSkpKSkpXG5cbihkZWZuIGVsZW1lbnRzXG4gIFwiQ3JlYXRlIGEgZ2VuZXJhdG9yIHRoYXQgcmFuZG9tbHkgY2hvb3NlcyBhbiBlbGVtZW50IGZyb20gYGNvbGxgLlxuXG4gIEV4YW1wbGVzOlxuXG4gICAgICAoZ2VuL2VsZW1lbnRzIFs6Zm9vIDpiYXIgOmJhel0pXG4gIFwiXG4gIFtjb2xsXVxuICAoYXNzZXJ0IChzZXEgY29sbCkgXCJlbGVtZW50cyBjYW5ub3QgYmUgY2FsbGVkIHdpdGggYW4gZW1wdHkgY29sbGVjdGlvblwiKVxuICAoY29yZS9sZXQgW3YgKHZlYyBjb2xsKV1cbiAgICAoZ2VuLWJpbmQgKGNob29zZSAwIChkZWMgKGNvdW50IHYpKSlcbiAgICAgICAgICAgICAgIyhnZW4tcHVyZSAocm9zZS9mbWFwIHYgJSkpKSkpXG5cbihkZWZuLSBzdWNoLXRoYXQtaGVscGVyXG4gIFttYXgtdHJpZXMgcHJlZCBnZW4gdHJpZXMtbGVmdCBybmcgc2l6ZV1cbiAgKGlmICh6ZXJvPyB0cmllcy1sZWZ0KVxuICAgICh0aHJvdyAoZXgtaW5mbyAoc3RyIFwiQ291bGRuJ3Qgc2F0aXNmeSBzdWNoLXRoYXQgcHJlZGljYXRlIGFmdGVyIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXRyaWVzIFwiIHRyaWVzLlwiKSB7fSkpXG4gICAgKGNvcmUvbGV0IFtbcjEgcjJdIChyYW5kb20vc3BsaXQgcm5nKVxuICAgICAgICAgIHZhbHVlIChjYWxsLWdlbiBnZW4gcjEgc2l6ZSldXG4gICAgICAoaWYgKHByZWQgKHJvc2Uvcm9vdCB2YWx1ZSkpXG4gICAgICAgIChyb3NlL2ZpbHRlciBwcmVkIHZhbHVlKVxuICAgICAgICAocmVjdXIgbWF4LXRyaWVzIHByZWQgZ2VuIChkZWMgdHJpZXMtbGVmdCkgcjIgKGluYyBzaXplKSkpKSkpXG5cbihkZWZuIHN1Y2gtdGhhdFxuICBcIkNyZWF0ZSBhIGdlbmVyYXRvciB0aGF0IGdlbmVyYXRlcyB2YWx1ZXMgZnJvbSBgZ2VuYCB0aGF0IHNhdGlzZnkgcHJlZGljYXRlXG4gIGBwcmVkYC4gQ2FyZSBpcyBuZWVkZWQgdG8gZW5zdXJlIHRoZXJlIGlzIGEgaGlnaCBjaGFuY2UgYGdlbmAgd2lsbCBzYXRpc2Z5XG4gIGBwcmVkYC4gQnkgZGVmYXVsdCwgYHN1Y2gtdGhhdGAgd2lsbCB0cnkgMTAgdGltZXMgdG8gZ2VuZXJhdGUgYSB2YWx1ZSB0aGF0XG4gIHNhdGlzZmllcyB0aGUgcHJlZGljYXRlLiBJZiBubyB2YWx1ZSBwYXNzZXMgdGhpcyBwcmVkaWNhdGUgYWZ0ZXIgdGhpcyBudW1iZXJcbiAgb2YgaXRlcmF0aW9ucywgYSBydW50aW1lIGV4Y2VwdGlvbiB3aWxsIGJlIHRocm93LiBZb3UgY2FuIHBhc3MgYW4gb3B0aW9uYWxcbiAgdGhpcmQgYXJndW1lbnQgdG8gY2hhbmdlIHRoZSBudW1iZXIgb2YgdGltZXMgdHJpZWQuIE5vdGUgYWxzbyB0aGF0IGVhY2hcbiAgdGltZSBzdWNoLXRoYXQgcmV0cmllcywgaXQgd2lsbCBpbmNyZWFzZSB0aGUgc2l6ZSBwYXJhbWV0ZXIuXG5cbiAgRXhhbXBsZXM6XG5cbiAgICAgIDs7IGdlbmVyYXRlIG5vbi1lbXB0eSB2ZWN0b3JzIG9mIGludGVnZXJzXG4gICAgICA7OyAobm90ZSwgZ2VuL25vdC1lbXB0eSBkb2VzIGV4YWN0bHkgdGhpcylcbiAgICAgIChnZW4vc3VjaC10aGF0IG5vdC1lbXB0eSAoZ2VuL3ZlY3RvciBnZW4vaW50KSlcbiAgXCJcbiAgKFtwcmVkIGdlbl1cbiAgIChzdWNoLXRoYXQgcHJlZCBnZW4gMTApKVxuICAoW3ByZWQgZ2VuIG1heC10cmllc11cbiAgIChhc3NlcnQgKGdlbmVyYXRvcj8gZ2VuKSBcIlNlY29uZCBhcmcgdG8gc3VjaC10aGF0IG11c3QgYmUgYSBnZW5lcmF0b3JcIilcbiAgIChtYWtlLWdlblxuICAgICAoZm4gW3JhbmQtc2VlZCBzaXplXVxuICAgICAgIChzdWNoLXRoYXQtaGVscGVyIG1heC10cmllcyBwcmVkIGdlbiBtYXgtdHJpZXMgcmFuZC1zZWVkIHNpemUpKSkpKVxuXG4oZGVmbiBub3QtZW1wdHlcbiAgXCJNb2RpZmllcyBhIGdlbmVyYXRvciBzbyB0aGF0IGl0IGRvZXNuJ3QgZ2VuZXJhdGUgZW1wdHkgY29sbGVjdGlvbnMuXG5cbiAgRXhhbXBsZXM6XG5cbiAgICAgIDs7IGdlbmVyYXRlIGEgdmVjdG9yIG9mIGJvb2xlYW5zLCBidXQgbmV2ZXIgdGhlIGVtcHR5IHZlY3RvclxuICAgICAgKGdlbi9ub3QtZW1wdHkgKGdlbi92ZWN0b3IgZ2VuL2Jvb2xlYW4pKVxuICBcIlxuICBbZ2VuXVxuICAoYXNzZXJ0IChnZW5lcmF0b3I/IGdlbikgXCJBcmcgdG8gbm90LWVtcHR5IG11c3QgYmUgYSBnZW5lcmF0b3JcIilcbiAgKHN1Y2gtdGhhdCBjb3JlL25vdC1lbXB0eSBnZW4pKVxuXG4oZGVmbiBuby1zaHJpbmtcbiAgXCJDcmVhdGUgYSBuZXcgZ2VuZXJhdG9yIHRoYXQgaXMganVzdCBsaWtlIGBnZW5gLCBleGNlcHQgZG9lcyBub3Qgc2hyaW5rXG4gIGF0IGFsbC4gVGhpcyBjYW4gYmUgdXNlZnVsIHdoZW4gc2hyaW5raW5nIGlzIHRha2luZyBhIGxvbmcgdGltZSBvciBpcyBub3RcbiAgYXBwbGljYWJsZSB0byB0aGUgZG9tYWluLlwiXG4gIFtnZW5dXG4gIChhc3NlcnQgKGdlbmVyYXRvcj8gZ2VuKSBcIkFyZyB0byBuby1zaHJpbmsgbXVzdCBiZSBhIGdlbmVyYXRvclwiKVxuICAoZ2VuLWJpbmQgZ2VuXG4gICAgICAgICAgICAoZm4gW3Jvc2VdXG4gICAgICAgICAgICAgIChnZW4tcHVyZSAocm9zZS9tYWtlLXJvc2UgKHJvc2Uvcm9vdCByb3NlKSBbXSkpKSkpXG5cbihkZWZuIHNocmluay0yXG4gIFwiQ3JlYXRlIGEgbmV3IGdlbmVyYXRvciBsaWtlIGBnZW5gLCBidXQgd2lsbCBjb25zaWRlciBub2RlcyBmb3Igc2hyaW5raW5nXG4gIGV2ZW4gaWYgdGhlaXIgcGFyZW50IHBhc3NlcyB0aGUgdGVzdCAodXAgdG8gb25lIGFkZGl0aW9uYWwgbGV2ZWwpLlwiXG4gIFtnZW5dXG4gIChhc3NlcnQgKGdlbmVyYXRvcj8gZ2VuKSBcIkFyZyB0byBzaHJpbmstMiBtdXN0IGJlIGEgZ2VuZXJhdG9yXCIpXG4gIChnZW4tYmluZCBnZW4gKGNvbXAgZ2VuLXB1cmUgcm9zZS9jb2xsYXBzZSkpKVxuXG4oZGVmIGJvb2xlYW5cbiAgXCJHZW5lcmF0ZXMgb25lIG9mIGB0cnVlYCBvciBgZmFsc2VgLiBTaHJpbmtzIHRvIGBmYWxzZWAuXCJcbiAgKGVsZW1lbnRzIFtmYWxzZSB0cnVlXSkpXG5cbihkZWZuIHR1cGxlXG4gIFwiQ3JlYXRlIGEgZ2VuZXJhdG9yIHRoYXQgcmV0dXJucyBhIHZlY3Rvciwgd2hvc2UgZWxlbWVudHMgYXJlIGNob3NlblxuICBmcm9tIHRoZSBnZW5lcmF0b3JzIGluIHRoZSBzYW1lIHBvc2l0aW9uLiBUaGUgaW5kaXZpZHVhbCBlbGVtZW50cyBzaHJpbmtcbiAgYWNjb3JkaW5nIHRvIHRoZWlyIGdlbmVyYXRvciwgYnV0IHRoZSB2YWx1ZSB3aWxsIG5ldmVyIHNocmluayBpbiBjb3VudC5cblxuICBFeGFtcGxlczpcblxuICAgICAgKGRlZiB0ICh0dXBsZSBnZW4vaW50IGdlbi9ib29sZWFuKSlcbiAgICAgIChzYW1wbGUgdClcbiAgICAgIDs7ID0+IChbMSB0cnVlXSBbMiB0cnVlXSBbMiBmYWxzZV0gWzEgZmFsc2VdIFswIHRydWVdIFstMiBmYWxzZV0gWy02IGZhbHNlXVxuICAgICAgOzsgPT4gIFszIHRydWVdIFstNCBmYWxzZV0gWzkgdHJ1ZV0pKVxuICBcIlxuICBbJiBnZW5lcmF0b3JzXVxuICAoYXNzZXJ0IChldmVyeT8gZ2VuZXJhdG9yPyBnZW5lcmF0b3JzKVxuICAgICAgICAgIFwiQXJncyB0byB0dXBsZSBtdXN0IGJlIGdlbmVyYXRvcnNcIilcbiAgKGdlbi1iaW5kIChnZW4tc2VxLT5zZXEtZ2VuIGdlbmVyYXRvcnMpXG4gICAgICAgICAgICAoZm4gW3Jvc2VzXVxuICAgICAgICAgICAgICAoZ2VuLXB1cmUgKHJvc2UvemlwIGNvcmUvdmVjdG9yIHJvc2VzKSkpKSlcblxuKGRlZiBpbnRcbiAgXCJHZW5lcmF0ZXMgYSBwb3NpdGl2ZSBvciBuZWdhdGl2ZSBpbnRlZ2VyIGJvdW5kZWQgYnkgdGhlIGdlbmVyYXRvcidzXG4gIGBzaXplYCBwYXJhbWV0ZXIuXG4gIChSZWFsbHkgcmV0dXJucyBhIGxvbmcpXCJcbiAgKHNpemVkIChmbiBbc2l6ZV0gKGNob29zZSAoLSBzaXplKSBzaXplKSkpKVxuXG4oZGVmIG5hdFxuICBcIkdlbmVyYXRlcyBuYXR1cmFsIG51bWJlcnMsIHN0YXJ0aW5nIGF0IHplcm8uIFNocmlua3MgdG8gemVyby5cIlxuICAoZm1hcCAjKE1hdGgvYWJzIChsb25nICUpKSBpbnQpKVxuXG4oZGVmIHBvcy1pbnRcbiAgXCJHZW5lcmF0ZSBwb3NpdGl2ZSBpbnRlZ2VycyBib3VuZGVkIGJ5IHRoZSBnZW5lcmF0b3IncyBgc2l6ZWAgcGFyYW1ldGVyLlwiXG4gIG5hdClcblxuKGRlZiBuZWctaW50XG4gIFwiR2VuZXJhdGUgbmVnYXRpdmUgaW50ZWdlcnMgYm91bmRlZCBieSB0aGUgZ2VuZXJhdG9yJ3MgYHNpemVgIHBhcmFtZXRlci5cIlxuICAoZm1hcCAjKCogLTEgJSkgbmF0KSlcblxuKGRlZiBzLXBvcy1pbnRcbiAgXCJHZW5lcmF0ZSBzdHJpY3RseSBwb3NpdGl2ZSBpbnRlZ2VycyBib3VuZGVkIGJ5IHRoZSBnZW5lcmF0b3IncyBgc2l6ZWBcbiAgIHBhcmFtZXRlci5cIlxuICAoZm1hcCBpbmMgbmF0KSlcblxuKGRlZiBzLW5lZy1pbnRcbiAgXCJHZW5lcmF0ZSBzdHJpY3RseSBuZWdhdGl2ZSBpbnRlZ2VycyBib3VuZGVkIGJ5IHRoZSBnZW5lcmF0b3IncyBgc2l6ZWBcbiAgIHBhcmFtZXRlci5cIlxuICAoZm1hcCBkZWMgbmVnLWludCkpXG5cbihkZWZuIHZlY3RvclxuICBcIkNyZWF0ZSBhIGdlbmVyYXRvciB3aG9zZSBlbGVtZW50cyBhcmUgY2hvc2VuIGZyb20gYGdlbmAuIFRoZSBjb3VudCBvZiB0aGVcbiAgdmVjdG9yIHdpbGwgYmUgYm91bmRlZCBieSB0aGUgYHNpemVgIGdlbmVyYXRvciBwYXJhbWV0ZXIuXCJcbiAgKFtnZW5lcmF0b3JdXG4gICAoYXNzZXJ0IChnZW5lcmF0b3I/IGdlbmVyYXRvcikgXCJBcmcgdG8gdmVjdG9yIG11c3QgYmUgYSBnZW5lcmF0b3JcIilcbiAgIChnZW4tYmluZFxuICAgICAoc2l6ZWQgIyhjaG9vc2UgMCAlKSlcbiAgICAgKGZuIFtudW0tZWxlbWVudHMtcm9zZV1cbiAgICAgICAoZ2VuLWJpbmQgKGdlbi1zZXEtPnNlcS1nZW5cbiAgICAgICAgICAgICAgICAgIChyZXBlYXQgKHJvc2Uvcm9vdCBudW0tZWxlbWVudHMtcm9zZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdG9yKSlcbiAgICAgICAgICAgICAgICAgKGZuIFtyb3Nlc11cbiAgICAgICAgICAgICAgICAgICAoZ2VuLXB1cmUgKHJvc2Uvc2hyaW5rIGNvcmUvdmVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3NlcykpKSkpKSlcbiAgKFtnZW5lcmF0b3IgbnVtLWVsZW1lbnRzXVxuICAgKGFzc2VydCAoZ2VuZXJhdG9yPyBnZW5lcmF0b3IpIFwiRmlyc3QgYXJnIHRvIHZlY3RvciBtdXN0IGJlIGEgZ2VuZXJhdG9yXCIpXG4gICAoYXBwbHkgdHVwbGUgKHJlcGVhdCBudW0tZWxlbWVudHMgZ2VuZXJhdG9yKSkpXG4gIChbZ2VuZXJhdG9yIG1pbi1lbGVtZW50cyBtYXgtZWxlbWVudHNdXG4gICAoYXNzZXJ0IChnZW5lcmF0b3I/IGdlbmVyYXRvcikgXCJGaXJzdCBhcmcgdG8gdmVjdG9yIG11c3QgYmUgYSBnZW5lcmF0b3JcIilcbiAgIChnZW4tYmluZFxuICAgICAoY2hvb3NlIG1pbi1lbGVtZW50cyBtYXgtZWxlbWVudHMpXG4gICAgIChmbiBbbnVtLWVsZW1lbnRzLXJvc2VdXG4gICAgICAgKGdlbi1iaW5kIChnZW4tc2VxLT5zZXEtZ2VuXG4gICAgICAgICAgICAgICAgICAocmVwZWF0IChyb3NlL3Jvb3QgbnVtLWVsZW1lbnRzLXJvc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRvcikpXG4gICAgICAgICAgICAgICAgIChmbiBbcm9zZXNdXG4gICAgICAgICAgICAgICAgICAgKGdlbi1iaW5kXG4gICAgICAgICAgICAgICAgICAgICAoZ2VuLXB1cmUgKHJvc2Uvc2hyaW5rIGNvcmUvdmVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvc2VzKSlcbiAgICAgICAgICAgICAgICAgICAgIChmbiBbcm9zZV1cbiAgICAgICAgICAgICAgICAgICAgICAgKGdlbi1wdXJlIChyb3NlL2ZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZm4gW3ZdIChhbmQgKD49IChjb3VudCB2KSBtaW4tZWxlbWVudHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPD0gKGNvdW50IHYpIG1heC1lbGVtZW50cykpKSByb3NlKSkpKSkpKSkpKVxuXG4oZGVmbiBsaXN0XG4gIFwiTGlrZSBgdmVjdG9yYCwgYnV0IGdlbmVyYXRlcyBsaXN0cy5cIlxuICBbZ2VuZXJhdG9yXVxuICAoYXNzZXJ0IChnZW5lcmF0b3I/IGdlbmVyYXRvcikgXCJGaXJzdCBhcmcgdG8gbGlzdCBtdXN0IGJlIGEgZ2VuZXJhdG9yXCIpXG4gIChnZW4tYmluZCAoc2l6ZWQgIyhjaG9vc2UgMCAlKSlcbiAgICAgICAgICAgIChmbiBbbnVtLWVsZW1lbnRzLXJvc2VdXG4gICAgICAgICAgICAgIChnZW4tYmluZCAoZ2VuLXNlcS0+c2VxLWdlblxuICAgICAgICAgICAgICAgICAgICAgICAgIChyZXBlYXQgKHJvc2Uvcm9vdCBudW0tZWxlbWVudHMtcm9zZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRvcikpXG4gICAgICAgICAgICAgICAgICAgICAgICAoZm4gW3Jvc2VzXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAoZ2VuLXB1cmUgKHJvc2Uvc2hyaW5rIGNvcmUvbGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvc2VzKSkpKSkpKVxuXG4oZGVmbi0gc3dhcFxuICBbY29sbCBbaTEgaTJdXVxuICAoYXNzb2MgY29sbCBpMiAoY29sbCBpMSkgaTEgKGNvbGwgaTIpKSlcblxuKGRlZm5cbiAgXns6YWRkZWQgXCIwLjYuMFwifVxuICBzaHVmZmxlXG4gIFwiQ3JlYXRlIGEgZ2VuZXJhdG9yIHRoYXQgZ2VuZXJhdGVzIHJhbmRvbSBwZXJtdXRhdGlvbnMgb2YgYGNvbGxgLiBTaHJpbmtzXG4gIHRvd2FyZCB0aGUgb3JpZ2luYWwgY29sbGVjdGlvbjogYGNvbGxgLiBgY29sbGAgd2lsbCBiZSB0dXJuZWQgaW50byBhIHZlY3RvcixcbiAgaWYgaXQncyBub3QgYWxyZWFkeS5cIlxuICBbY29sbF1cbiAgKGNvcmUvbGV0IFtpbmRleC1nZW4gKGNob29zZSAwIChkZWMgKGNvdW50IGNvbGwpKSldXG4gICAgKGZtYXAgIyhyZWR1Y2Ugc3dhcCAodmVjIGNvbGwpICUpXG4gICAgICAgICAgOzsgYSB2ZWN0b3Igb2Ygc3dhcCBpbnN0cnVjdGlvbnMsIHdpdGggY291bnQgYmV0d2VlblxuICAgICAgICAgIDs7IHplcm8gYW5kIDIgKiBjb3VudC4gVGhpcyBtZWFucyB0aGF0IHRoZSBhdmVyYWdlIG51bWJlclxuICAgICAgICAgIDs7IG9mIGluc3RydWN0aW9ucyBpcyBjb3VudCwgd2hpY2ggc2hvdWxkIHByb3ZpZGUgc3VmZmljaWVudFxuICAgICAgICAgIDs7ICh0aG91Z2ggcGVyaGFwcyBub3QgJ3BlcmZlY3QnKSBzaHVmZmxpbmcuIFRoaXMgc3RpbGwgZ2l2ZXMgdXNcbiAgICAgICAgICA7OyBuaWNlLCByZWxhdGl2ZWx5IHF1aWNrIHNocmlua3MuXG4gICAgICAgICAgKHZlY3RvciAodHVwbGUgaW5kZXgtZ2VuIGluZGV4LWdlbikgMCAoKiAyIChjb3VudCBjb2xsKSkpKSkpXG5cbjs7IE5PVEUgY2xqczogQ29tbWVudCBvdXQgZm9yIG5vdyAtIERhdmlkXG5cbiM/KDpjbGpcbiAgICAoZGVmIGJ5dGVcbiAgICAgIFwiR2VuZXJhdGVzIGBqYXZhLmxhbmcuQnl0ZWBzLCB1c2luZyB0aGUgZnVsbCBieXRlLXJhbmdlLlwiXG4gICAgICAoZm1hcCBjb3JlL2J5dGUgKGNob29zZSBCeXRlL01JTl9WQUxVRSBCeXRlL01BWF9WQUxVRSkpKSlcblxuIz8oOmNsalxuICAgIChkZWYgYnl0ZXNcbiAgICAgIFwiR2VuZXJhdGVzIGJ5dGUtYXJyYXlzLlwiXG4gICAgICAoZm1hcCBjb3JlL2J5dGUtYXJyYXkgKHZlY3RvciBieXRlKSkpKVxuXG4oZGVmbiBoYXNoLW1hcFxuICBcIkxpa2UgY2xvanVyZS5jb3JlL2hhc2gtbWFwLCBleGNlcHQgdGhlIHZhbHVlcyBhcmUgZ2VuZXJhdG9ycy5cbiAgIFJldHVybnMgYSBnZW5lcmF0b3IgdGhhdCBtYWtlcyBtYXBzIHdpdGggdGhlIHN1cHBsaWVkIGtleXMgYW5kXG4gICB2YWx1ZXMgZ2VuZXJhdGVkIHVzaW5nIHRoZSBzdXBwbGllZCBnZW5lcmF0b3JzLlxuXG4gIEV4YW1wbGVzOlxuXG4gICAgKGdlbi9oYXNoLW1hcCA6YSBnZW4vYm9vbGVhbiA6YiBnZW4vbmF0KVxuICBcIlxuICBbJiBrdnNdXG4gIChhc3NlcnQgKGV2ZW4/IChjb3VudCBrdnMpKSlcbiAgKGNvcmUvbGV0IFtrcyAodGFrZS1udGggMiBrdnMpXG4gICAgICAgIHZzICh0YWtlLW50aCAyIChyZXN0IGt2cykpXVxuICAgIChhc3NlcnQgKGV2ZXJ5PyBnZW5lcmF0b3I/IHZzKVxuICAgICAgICAgICAgXCJWYWx1ZSBhcmdzIHRvIGhhc2gtbWFwIG11c3QgYmUgZ2VuZXJhdG9yc1wiKVxuICAgIChmbWFwICMoemlwbWFwIGtzICUpXG4gICAgICAgICAgKGFwcGx5IHR1cGxlIHZzKSkpKVxuXG47OyBDb2xsZWN0aW9ucyBvZiBkaXN0aW5jdCBlbGVtZW50c1xuOzsgKGhhcyB0byBiZSBkb25lIGluIGEgbG93LWxldmVsIHdheSAoaW5zdGVhZCBvZiB3aXRoIGNvbWJpbmF0b3JzKVxuOzsgIGFuZCBpcyBzdWJqZWN0IHRvIHRoZSBzYW1lIGtpbmQgb2YgZmFpbHVyZSBhcyBzdWNoLXRoYXQpXG47OyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuKGRlZm4gXjpwcml2YXRlIHRyYW5zaWVudC1zZXQtY29udGFpbnM/XG4gIFtzIGtdXG4gICM/ICg6Y2xqXG4gICAgICAoLmNvbnRhaW5zIF5jbG9qdXJlLmxhbmcuSVRyYW5zaWVudFNldCBzIGspXG4gICAgICA6Y2xqc1xuICAgICAgKHNvbWU/ICgtbG9va3VwIHMgaykpKSlcblxuKGRlZm4gXjpwcml2YXRlIGNvbGwtZGlzdGluY3QtYnkqXG4gIFwiUmV0dXJucyBhIHJvc2UgdHJlZS5cIlxuICBbZW1wdHktY29sbCBrZXktZm4gc2h1ZmZsZS1mbiBnZW4gcm5nIHNpemUgbnVtLWVsZW1lbnRzIG1pbi1lbGVtZW50cyBtYXgtdHJpZXNdXG4gIHs6cHJlIFtnZW4gKDpnZW4gZ2VuKV19XG4gIChsb29wIFtyb3NlLXRyZWVzICh0cmFuc2llbnQgW10pXG4gICAgICAgICBzICh0cmFuc2llbnQgI3t9KVxuICAgICAgICAgcm5nIHJuZ1xuICAgICAgICAgc2l6ZSBzaXplXG4gICAgICAgICB0cmllcyAwXVxuICAgIChjb25kIChhbmQgKD0gbWF4LXRyaWVzIHRyaWVzKVxuICAgICAgICAgICAgICAgKDwgKGNvdW50IHJvc2UtdHJlZXMpIG1pbi1lbGVtZW50cykpXG4gICAgICAgICAgKHRocm93IChleC1pbmZvIFwiQ291bGRuJ3QgZ2VuZXJhdGUgZW5vdWdoIGRpc3RpbmN0IGVsZW1lbnRzIVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHs6Z2VuIGdlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1heC10cmllcyBtYXgtdHJpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDpudW0tZWxlbWVudHMgbnVtLWVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6c28tZmFyICgtPj4gcm9zZS10cmVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwZXJzaXN0ZW50ISlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29yZS9tYXAgcm9zZS9yb290KSl9KSlcblxuXG4gICAgICAgICAgKG9yICg9IG1heC10cmllcyB0cmllcylcbiAgICAgICAgICAgICAgKD0gKGNvdW50IHJvc2UtdHJlZXMpIG51bS1lbGVtZW50cykpXG4gICAgICAgICAgKC0+PiAocGVyc2lzdGVudCEgcm9zZS10cmVlcylcbiAgICAgICAgICAgICAgIDs7IHdlIHNodWZmbGUgdGhlIHJvc2UgdHJlZXMgc28gdGhhdCB3ZSBhcmVuJ3QgYmlhc2VkXG4gICAgICAgICAgICAgICA7OyB0b3dhcmQgZ2VuZXJhdGluZyBcInNtYWxsZXJcIiBlbGVtZW50cyBlYXJsaWVyIGluIHRoZVxuICAgICAgICAgICAgICAgOzsgY29sbGVjdGlvbiAob25seSBhcHBsaWVzIHRvIG9yZGVyZWQgY29sbGVjdGlvbnMpXG4gICAgICAgICAgICAgICA7O1xuICAgICAgICAgICAgICAgOzsgc2h1ZmZsaW5nIHRoZSByb3NlIHRyZWVzIGlzIG1vcmUgZWZmaWNpZW50IHRoYW5cbiAgICAgICAgICAgICAgIDs7IChiaW5kIC4uLiBzaHVmZmxlKSBiZWNhdXNlIHdlIG9ubHkgcGVyZm9ybSB0aGVcbiAgICAgICAgICAgICAgIDs7IHNodWZmbGluZyBvbmNlIGFuZCB3ZSBoYXZlIG5vIG5lZWQgdG8gc2hyaW5rIHRoZVxuICAgICAgICAgICAgICAgOzsgc2h1ZmxpbmcuXG4gICAgICAgICAgICAgICAoc2h1ZmZsZS1mbiBybmcpXG4gICAgICAgICAgICAgICAocm9zZS9zaHJpbmsgIyhpbnRvIGVtcHR5LWNvbGwgJSYpKSlcblxuICAgICAgICAgIDplbHNlXG4gICAgICAgICAgKGNvcmUvbGV0IFtbcm5nMSBybmcyXSAocmFuZG9tL3NwbGl0IHJuZylcbiAgICAgICAgICAgICAgICByb3NlIChjYWxsLWdlbiBnZW4gcm5nMSBzaXplKVxuICAgICAgICAgICAgICAgIHJvb3QgKHJvc2Uvcm9vdCByb3NlKVxuICAgICAgICAgICAgICAgIGsgKGtleS1mbiByb290KV1cbiAgICAgICAgICAgIChpZiAodHJhbnNpZW50LXNldC1jb250YWlucz8gcyBrKVxuICAgICAgICAgICAgICAocmVjdXIgcm9zZS10cmVlcyBzIHJuZzIgKGluYyBzaXplKSAoaW5jIHRyaWVzKSlcbiAgICAgICAgICAgICAgKHJlY3VyIChjb25qISByb3NlLXRyZWVzIHJvc2UpXG4gICAgICAgICAgICAgICAgICAgICAoY29uaiEgcyBrKVxuICAgICAgICAgICAgICAgICAgICAgcm5nMlxuICAgICAgICAgICAgICAgICAgICAgc2l6ZVxuICAgICAgICAgICAgICAgICAgICAgMCkpKSkpKVxuXG4oZGVmbiBeOnByaXZhdGUgZGlzdGluY3QtYnk/XG4gIFwiTGlrZSBjbG9qdXJlLmNvcmUvZGlzdGluY3Q/IGJ1dCB0YWtlcyBhIGNvbGxlY3Rpb24gaW5zdGVhZCBvZiB2YXJhcmdzLFxuICBhbmQgcmV0dXJucyB0cnVlIGZvciBlbXB0eSBjb2xsZWN0aW9ucy5cIlxuICBbZiBjb2xsXVxuICAob3IgKGVtcHR5PyBjb2xsKVxuICAgICAgKGFwcGx5IGRpc3RpbmN0PyAoY29yZS9tYXAgZiBjb2xsKSkpKVxuXG4oZGVmbiBeOnByaXZhdGUgdGhlLXNodWZmbGUtZm5cbiAgXCJSZXR1cm5zIGEgc2h1ZmZsZWQgdmVyc2lvbiBvZiBjb2xsIGFjY29yZGluZyB0byB0aGUgcm5nLlxuXG4gIE5vdGUgdGhhdCB0aGlzIGlzIG5vdCBhIGdlbmVyYXRvciwgaXQgaXMganVzdCBhIHV0aWxpdHkgZnVuY3Rpb24uXCJcbiAgW3JuZyBjb2xsXVxuICAoY29yZS9sZXQgW2VtcHR5LWNvbGwgKGVtcHR5IGNvbGwpXG4gICAgICAgIHYgKHZlYyBjb2xsKVxuICAgICAgICBjYXJkIChjb3VudCBjb2xsKVxuICAgICAgICBkZWMtY2FyZCAoZGVjIGNhcmQpXVxuICAgIChpbnRvIGVtcHR5LWNvbGxcbiAgICAgICAgICAoZmlyc3RcbiAgICAgICAgICAgKHJlZHVjZSAoZm4gW1t2IHJuZ10gaWR4XVxuICAgICAgICAgICAgICAgICAgICAgKGNvcmUvbGV0IFtbcm5nMSBybmcyXSAocmFuZG9tL3NwbGl0IHJuZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YXAtaWR4IChyYW5kLXJhbmdlIHJuZzEgaWR4IGRlYy1jYXJkKV1cbiAgICAgICAgICAgICAgICAgICAgICAgWyhzd2FwIHYgW2lkeCBzd2FwLWlkeF0pIHJuZzJdKSlcbiAgICAgICAgICAgICAgICAgICBbdiBybmddXG4gICAgICAgICAgICAgICAgICAgKHJhbmdlIGNhcmQpKSkpKSlcblxuKGRlZm4gXjpwcml2YXRlIGNvbGwtZGlzdGluY3QtYnlcbiAgW2VtcHR5LWNvbGwga2V5LWZuIGFsbG93cy1kdXBlcz8gb3JkZXJlZD8gZ2VuXG4gICB7OmtleXMgW251bS1lbGVtZW50cyBtaW4tZWxlbWVudHMgbWF4LWVsZW1lbnRzIG1heC10cmllc10gOm9yIHttYXgtdHJpZXMgMTB9fV1cbiAgKGNvcmUvbGV0IFtzaHVmZmxlLWZuIChpZiBvcmRlcmVkP1xuICAgICAgICAgICAgICAgICAgICAgdGhlLXNodWZmbGUtZm5cbiAgICAgICAgICAgICAgICAgICAgIChmbiBbX3JuZyBjb2xsXSBjb2xsKSlcbiAgICAgICAgaGFyZC1taW4tZWxlbWVudHMgKG9yIG51bS1lbGVtZW50cyBtaW4tZWxlbWVudHMgMSldXG4gICAgKGlmIG51bS1lbGVtZW50c1xuICAgICAgKGNvcmUvbGV0IFtzaXplLXByZWQgIyg9IG51bS1lbGVtZW50cyAoY291bnQgJSkpXVxuICAgICAgICAoYXNzZXJ0IChhbmQgKG5pbD8gbWluLWVsZW1lbnRzKSAobmlsPyBtYXgtZWxlbWVudHMpKSlcbiAgICAgICAgKG1ha2UtZ2VuXG4gICAgICAgICAoZm4gW3JuZyBnZW4tc2l6ZV1cbiAgICAgICAgICAgKHJvc2UvZmlsdGVyXG4gICAgICAgICAgICAoaWYgYWxsb3dzLWR1cGVzP1xuICAgICAgICAgICAgICA7OyBpcyB0aGVyZSBhIHNtYXJ0ZXIgd2F5IHRvIGRvIHRoZSBzaHJpbmtpbmcgdGhhbiBjaGVja2luZ1xuICAgICAgICAgICAgICA7OyB0aGUgZGlzdGluY3RuZXNzIG9mIHRoZSBlbnRpcmUgY29sbGVjdGlvbiBhdCBlYWNoXG4gICAgICAgICAgICAgIDs7IHN0ZXA/XG4gICAgICAgICAgICAgIChldmVyeS1wcmVkIHNpemUtcHJlZCAjKGRpc3RpbmN0LWJ5PyBrZXktZm4gJSkpXG4gICAgICAgICAgICAgIHNpemUtcHJlZClcbiAgICAgICAgICAgIChjb2xsLWRpc3RpbmN0LWJ5KiBlbXB0eS1jb2xsIGtleS1mbiBzaHVmZmxlLWZuIGdlbiBybmcgZ2VuLXNpemVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW0tZWxlbWVudHMgaGFyZC1taW4tZWxlbWVudHMgbWF4LXRyaWVzKSkpKSlcbiAgICAgIChjb3JlL2xldCBbbWluLWVsZW1lbnRzIChvciBtaW4tZWxlbWVudHMgMClcbiAgICAgICAgICAgICAgICAgc2l6ZS1wcmVkIChpZiBtYXgtZWxlbWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIyg8PSBtaW4tZWxlbWVudHMgKGNvdW50ICUpIG1heC1lbGVtZW50cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIyg8PSBtaW4tZWxlbWVudHMgKGNvdW50ICUpKSldXG4gICAgICAgIChnZW4tYmluZFxuICAgICAgICAgKGlmIG1heC1lbGVtZW50c1xuICAgICAgICAgICAoY2hvb3NlIG1pbi1lbGVtZW50cyBtYXgtZWxlbWVudHMpXG4gICAgICAgICAgIChzaXplZCAjKGNob29zZSBtaW4tZWxlbWVudHMgKCsgbWluLWVsZW1lbnRzICUpKSkpXG4gICAgICAgICAoZm4gW251bS1lbGVtZW50cy1yb3NlXVxuICAgICAgICAgICAoY29yZS9sZXQgW251bS1lbGVtZW50cyAocm9zZS9yb290IG51bS1lbGVtZW50cy1yb3NlKV1cbiAgICAgICAgICAgICAobWFrZS1nZW5cbiAgICAgICAgICAgICAgKGZuIFtybmcgZ2VuLXNpemVdXG4gICAgICAgICAgICAgICAgKHJvc2UvZmlsdGVyXG4gICAgICAgICAgICAgICAgIChpZiBhbGxvd3MtZHVwZXM/XG4gICAgICAgICAgICAgICAgICAgOzsgc2FtZSBjb21tZW50IGFzIGFib3ZlXG4gICAgICAgICAgICAgICAgICAgKGV2ZXJ5LXByZWQgc2l6ZS1wcmVkICMoZGlzdGluY3QtYnk/IGtleS1mbiAlKSlcbiAgICAgICAgICAgICAgICAgICBzaXplLXByZWQpXG4gICAgICAgICAgICAgICAgIChjb2xsLWRpc3RpbmN0LWJ5KiBlbXB0eS1jb2xsIGtleS1mbiBzaHVmZmxlLWZuIGdlbiBybmcgZ2VuLXNpemVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bS1lbGVtZW50cyBoYXJkLW1pbi1lbGVtZW50cyBtYXgtdHJpZXMpKSkpKSkpKSkpKVxuXG5cbjs7IEkgdHJpZWQgdG8gcmVkdWNlIHRoZSBkdXBsaWNhdGlvbiBpbiB0aGVzZSBkb2NzdHJpbmdzIHdpdGggYSBtYWNybyxcbjs7IGJ1dCBjb3VsZG4ndCBtYWtlIGl0IHdvcmsgaW4gY2xqcy5cblxuKGRlZm4gdmVjdG9yLWRpc3RpbmN0XG4gIFwiR2VuZXJhdGVzIGEgdmVjdG9yIG9mIGVsZW1lbnRzIGZyb20gdGhlIGdpdmVuIGdlbmVyYXRvciwgd2l0aCB0aGVcbiAgZ3VhcmFudGVlIHRoYXQgdGhlIGVsZW1lbnRzIHdpbGwgYmUgZGlzdGluY3QuXG5cbiAgSWYgdGhlIGdlbmVyYXRvciBjYW5ub3Qgb3IgaXMgdW5saWtlbHkgdG8gcHJvZHVjZSBlbm91Z2ggZGlzdGluY3RcbiAgZWxlbWVudHMsIHRoaXMgZ2VuZXJhdG9yIHdpbGwgZmFpbCBpbiB0aGUgc2FtZSB3YXkgYXMgc3VjaC10aGF0LlxuXG4gIEF2YWlsYWJsZSBvcHRpb25zOlxuXG4gICAgOm51bS1lbGVtZW50cyAgdGhlIGZpeGVkIHNpemUgb2YgZ2VuZXJhdGVkIHZlY3RvcnNcbiAgICA6bWluLWVsZW1lbnRzICB0aGUgbWluIHNpemUgb2YgZ2VuZXJhdGVkIHZlY3RvcnNcbiAgICA6bWF4LWVsZW1lbnRzICB0aGUgbWF4IHNpemUgb2YgZ2VuZXJhdGVkIHZlY3RvcnNcbiAgICA6bWF4LXRyaWVzICAgICB0aGUgbnVtYmVyIG9mIHRpbWVzIHRoZSBnZW5lcmF0b3Igd2lsbCBiZSB0cmllZCBiZWZvcmVcbiAgICAgICAgICAgICAgICAgICBmYWlsaW5nIHdoZW4gaXQgZG9lcyBub3QgcHJvZHVjZSBkaXN0aW5jdCBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgIChkZWZhdWx0IDEwKVwiXG4gIChbZ2VuXSAodmVjdG9yLWRpc3RpbmN0IGdlbiB7fSkpXG4gIChbZ2VuIG9wdHNdXG4gICAoYXNzZXJ0IChnZW5lcmF0b3I/IGdlbikgXCJGaXJzdCBhcmcgdG8gdmVjdG9yLWRpc3RpbmN0IG11c3QgYmUgYSBnZW5lcmF0b3IhXCIpXG4gICAoY29sbC1kaXN0aW5jdC1ieSBbXSBpZGVudGl0eSB0cnVlIHRydWUgZ2VuIG9wdHMpKSlcblxuKGRlZm4gbGlzdC1kaXN0aW5jdFxuICBcIkdlbmVyYXRlcyBhIGxpc3Qgb2YgZWxlbWVudHMgZnJvbSB0aGUgZ2l2ZW4gZ2VuZXJhdG9yLCB3aXRoIHRoZVxuICBndWFyYW50ZWUgdGhhdCB0aGUgZWxlbWVudHMgd2lsbCBiZSBkaXN0aW5jdC5cblxuICBJZiB0aGUgZ2VuZXJhdG9yIGNhbm5vdCBvciBpcyB1bmxpa2VseSB0byBwcm9kdWNlIGVub3VnaCBkaXN0aW5jdFxuICBlbGVtZW50cywgdGhpcyBnZW5lcmF0b3Igd2lsbCBmYWlsIGluIHRoZSBzYW1lIHdheSBhcyBzdWNoLXRoYXQuXG5cbiAgQXZhaWxhYmxlIG9wdGlvbnM6XG5cbiAgICA6bnVtLWVsZW1lbnRzICB0aGUgZml4ZWQgc2l6ZSBvZiBnZW5lcmF0ZWQgdmVjdG9yc1xuICAgIDptaW4tZWxlbWVudHMgIHRoZSBtaW4gc2l6ZSBvZiBnZW5lcmF0ZWQgdmVjdG9yc1xuICAgIDptYXgtZWxlbWVudHMgIHRoZSBtYXggc2l6ZSBvZiBnZW5lcmF0ZWQgdmVjdG9yc1xuICAgIDptYXgtdHJpZXMgICAgIHRoZSBudW1iZXIgb2YgdGltZXMgdGhlIGdlbmVyYXRvciB3aWxsIGJlIHRyaWVkIGJlZm9yZVxuICAgICAgICAgICAgICAgICAgIGZhaWxpbmcgd2hlbiBpdCBkb2VzIG5vdCBwcm9kdWNlIGRpc3RpbmN0IGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgKGRlZmF1bHQgMTApXCJcbiAgKFtnZW5dIChsaXN0LWRpc3RpbmN0IGdlbiB7fSkpXG4gIChbZ2VuIG9wdHNdXG4gICAoYXNzZXJ0IChnZW5lcmF0b3I/IGdlbikgXCJGaXJzdCBhcmcgdG8gbGlzdC1kaXN0aW5jdCBtdXN0IGJlIGEgZ2VuZXJhdG9yIVwiKVxuICAgKGNvbGwtZGlzdGluY3QtYnkgKCkgaWRlbnRpdHkgdHJ1ZSB0cnVlIGdlbiBvcHRzKSkpXG5cbihkZWZuIHZlY3Rvci1kaXN0aW5jdC1ieVxuICBcIkdlbmVyYXRlcyBhIHZlY3RvciBvZiBlbGVtZW50cyBmcm9tIHRoZSBnaXZlbiBnZW5lcmF0b3IsIHdpdGggdGhlXG4gIGd1YXJhbnRlZSB0aGF0IChtYXAga2V5LWZuIHRoZS12ZWN0b3IpIHdpbGwgYmUgZGlzdGluY3QuXG5cbiAgSWYgdGhlIGdlbmVyYXRvciBjYW5ub3Qgb3IgaXMgdW5saWtlbHkgdG8gcHJvZHVjZSBlbm91Z2ggZGlzdGluY3RcbiAgZWxlbWVudHMsIHRoaXMgZ2VuZXJhdG9yIHdpbGwgZmFpbCBpbiB0aGUgc2FtZSB3YXkgYXMgc3VjaC10aGF0LlxuXG4gIEF2YWlsYWJsZSBvcHRpb25zOlxuXG4gICAgOm51bS1lbGVtZW50cyAgdGhlIGZpeGVkIHNpemUgb2YgZ2VuZXJhdGVkIHZlY3RvcnNcbiAgICA6bWluLWVsZW1lbnRzICB0aGUgbWluIHNpemUgb2YgZ2VuZXJhdGVkIHZlY3RvcnNcbiAgICA6bWF4LWVsZW1lbnRzICB0aGUgbWF4IHNpemUgb2YgZ2VuZXJhdGVkIHZlY3RvcnNcbiAgICA6bWF4LXRyaWVzICAgICB0aGUgbnVtYmVyIG9mIHRpbWVzIHRoZSBnZW5lcmF0b3Igd2lsbCBiZSB0cmllZCBiZWZvcmVcbiAgICAgICAgICAgICAgICAgICBmYWlsaW5nIHdoZW4gaXQgZG9lcyBub3QgcHJvZHVjZSBkaXN0aW5jdCBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgIChkZWZhdWx0IDEwKVwiXG4gIChba2V5LWZuIGdlbl0gKHZlY3Rvci1kaXN0aW5jdC1ieSBrZXktZm4gZ2VuIHt9KSlcbiAgKFtrZXktZm4gZ2VuIG9wdHNdXG4gICAoYXNzZXJ0IChnZW5lcmF0b3I/IGdlbikgXCJGaXJzdCBhcmcgdG8gdmVjdG9yLWRpc3RpbmN0LWJ5IG11c3QgYmUgYSBnZW5lcmF0b3IhXCIpXG4gICAoY29sbC1kaXN0aW5jdC1ieSBbXSBrZXktZm4gdHJ1ZSB0cnVlIGdlbiBvcHRzKSkpXG5cbihkZWZuIGxpc3QtZGlzdGluY3QtYnlcbiAgXCJHZW5lcmF0ZXMgYSBsaXN0IG9mIGVsZW1lbnRzIGZyb20gdGhlIGdpdmVuIGdlbmVyYXRvciwgd2l0aCB0aGVcbiAgZ3VhcmFudGVlIHRoYXQgKG1hcCBrZXktZm4gdGhlLWxpc3QpIHdpbGwgYmUgZGlzdGluY3QuXG5cbiAgSWYgdGhlIGdlbmVyYXRvciBjYW5ub3Qgb3IgaXMgdW5saWtlbHkgdG8gcHJvZHVjZSBlbm91Z2ggZGlzdGluY3RcbiAgZWxlbWVudHMsIHRoaXMgZ2VuZXJhdG9yIHdpbGwgZmFpbCBpbiB0aGUgc2FtZSB3YXkgYXMgc3VjaC10aGF0LlxuXG4gIEF2YWlsYWJsZSBvcHRpb25zOlxuXG4gICAgOm51bS1lbGVtZW50cyAgdGhlIGZpeGVkIHNpemUgb2YgZ2VuZXJhdGVkIHZlY3RvcnNcbiAgICA6bWluLWVsZW1lbnRzICB0aGUgbWluIHNpemUgb2YgZ2VuZXJhdGVkIHZlY3RvcnNcbiAgICA6bWF4LWVsZW1lbnRzICB0aGUgbWF4IHNpemUgb2YgZ2VuZXJhdGVkIHZlY3RvcnNcbiAgICA6bWF4LXRyaWVzICAgICB0aGUgbnVtYmVyIG9mIHRpbWVzIHRoZSBnZW5lcmF0b3Igd2lsbCBiZSB0cmllZCBiZWZvcmVcbiAgICAgICAgICAgICAgICAgICBmYWlsaW5nIHdoZW4gaXQgZG9lcyBub3QgcHJvZHVjZSBkaXN0aW5jdCBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgIChkZWZhdWx0IDEwKVwiXG4gIChba2V5LWZuIGdlbl0gKGxpc3QtZGlzdGluY3QtYnkga2V5LWZuIGdlbiB7fSkpXG4gIChba2V5LWZuIGdlbiBvcHRzXVxuICAgKGFzc2VydCAoZ2VuZXJhdG9yPyBnZW4pIFwiRmlyc3QgYXJnIHRvIGxpc3QtZGlzdGluY3QtYnkgbXVzdCBiZSBhIGdlbmVyYXRvciFcIilcbiAgIChjb2xsLWRpc3RpbmN0LWJ5ICgpIGtleS1mbiB0cnVlIHRydWUgZ2VuIG9wdHMpKSlcblxuKGRlZm4gc2V0XG4gIFwiR2VuZXJhdGVzIGEgc2V0IG9mIGVsZW1lbnRzIGZyb20gdGhlIGdpdmVuIGdlbmVyYXRvci5cblxuICBJZiB0aGUgZ2VuZXJhdG9yIGNhbm5vdCBvciBpcyB1bmxpa2VseSB0byBwcm9kdWNlIGVub3VnaCBkaXN0aW5jdFxuICBlbGVtZW50cywgdGhpcyBnZW5lcmF0b3Igd2lsbCBmYWlsIGluIHRoZSBzYW1lIHdheSBhcyBzdWNoLXRoYXQuXG5cbiAgQXZhaWxhYmxlIG9wdGlvbnM6XG5cbiAgICA6bnVtLWVsZW1lbnRzICB0aGUgZml4ZWQgc2l6ZSBvZiBnZW5lcmF0ZWQgdmVjdG9yc1xuICAgIDptaW4tZWxlbWVudHMgIHRoZSBtaW4gc2l6ZSBvZiBnZW5lcmF0ZWQgdmVjdG9yc1xuICAgIDptYXgtZWxlbWVudHMgIHRoZSBtYXggc2l6ZSBvZiBnZW5lcmF0ZWQgdmVjdG9yc1xuICAgIDptYXgtdHJpZXMgICAgIHRoZSBudW1iZXIgb2YgdGltZXMgdGhlIGdlbmVyYXRvciB3aWxsIGJlIHRyaWVkIGJlZm9yZVxuICAgICAgICAgICAgICAgICAgIGZhaWxpbmcgd2hlbiBpdCBkb2VzIG5vdCBwcm9kdWNlIGRpc3RpbmN0IGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgKGRlZmF1bHQgMTApXCJcbiAgKFtnZW5dIChzZXQgZ2VuIHt9KSlcbiAgKFtnZW4gb3B0c11cbiAgIChhc3NlcnQgKGdlbmVyYXRvcj8gZ2VuKSBcIkZpcnN0IGFyZyB0byBzZXQgbXVzdCBiZSBhIGdlbmVyYXRvciFcIilcbiAgIChjb2xsLWRpc3RpbmN0LWJ5ICN7fSBpZGVudGl0eSBmYWxzZSBmYWxzZSBnZW4gb3B0cykpKVxuXG4oZGVmbiBzb3J0ZWQtc2V0XG4gIFwiR2VuZXJhdGVzIGEgc29ydGVkIHNldCBvZiBlbGVtZW50cyBmcm9tIHRoZSBnaXZlbiBnZW5lcmF0b3IuXG5cbiAgSWYgdGhlIGdlbmVyYXRvciBjYW5ub3Qgb3IgaXMgdW5saWtlbHkgdG8gcHJvZHVjZSBlbm91Z2ggZGlzdGluY3RcbiAgZWxlbWVudHMsIHRoaXMgZ2VuZXJhdG9yIHdpbGwgZmFpbCBpbiB0aGUgc2FtZSB3YXkgYXMgc3VjaC10aGF0LlxuXG4gIEF2YWlsYWJsZSBvcHRpb25zOlxuXG4gICAgOm51bS1lbGVtZW50cyAgdGhlIGZpeGVkIHNpemUgb2YgZ2VuZXJhdGVkIHZlY3RvcnNcbiAgICA6bWluLWVsZW1lbnRzICB0aGUgbWluIHNpemUgb2YgZ2VuZXJhdGVkIHZlY3RvcnNcbiAgICA6bWF4LWVsZW1lbnRzICB0aGUgbWF4IHNpemUgb2YgZ2VuZXJhdGVkIHZlY3RvcnNcbiAgICA6bWF4LXRyaWVzICAgICB0aGUgbnVtYmVyIG9mIHRpbWVzIHRoZSBnZW5lcmF0b3Igd2lsbCBiZSB0cmllZCBiZWZvcmVcbiAgICAgICAgICAgICAgICAgICBmYWlsaW5nIHdoZW4gaXQgZG9lcyBub3QgcHJvZHVjZSBkaXN0aW5jdCBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgIChkZWZhdWx0IDEwKVwiXG4gIChbZ2VuXSAoc29ydGVkLXNldCBnZW4ge30pKVxuICAoW2dlbiBvcHRzXVxuICAgKGFzc2VydCAoZ2VuZXJhdG9yPyBnZW4pIFwiRmlyc3QgYXJnIHRvIHNvcnRlZC1zZXQgbXVzdCBiZSBhIGdlbmVyYXRvciFcIilcbiAgIChjb2xsLWRpc3RpbmN0LWJ5IChjb3JlL3NvcnRlZC1zZXQpIGlkZW50aXR5IGZhbHNlIGZhbHNlIGdlbiBvcHRzKSkpXG5cbihkZWZuIG1hcFxuICBcIkNyZWF0ZSBhIGdlbmVyYXRvciB0aGF0IGdlbmVyYXRlcyBtYXBzLCB3aXRoIGtleXMgY2hvc2VuIGZyb21cbiAgYGtleS1nZW5gIGFuZCB2YWx1ZXMgY2hvc2VuIGZyb20gYHZhbC1nZW5gLlxuXG4gIElmIHRoZSBrZXkgZ2VuZXJhdG9yIGNhbm5vdCBvciBpcyB1bmxpa2VseSB0byBwcm9kdWNlIGVub3VnaCBkaXN0aW5jdFxuICBlbGVtZW50cywgdGhpcyBnZW5lcmF0b3Igd2lsbCBmYWlsIGluIHRoZSBzYW1lIHdheSBhcyBzdWNoLXRoYXQuXG5cbiAgQXZhaWxhYmxlIG9wdGlvbnM6XG5cbiAgICA6bnVtLWVsZW1lbnRzICB0aGUgZml4ZWQgc2l6ZSBvZiBnZW5lcmF0ZWQgdmVjdG9yc1xuICAgIDptaW4tZWxlbWVudHMgIHRoZSBtaW4gc2l6ZSBvZiBnZW5lcmF0ZWQgdmVjdG9yc1xuICAgIDptYXgtZWxlbWVudHMgIHRoZSBtYXggc2l6ZSBvZiBnZW5lcmF0ZWQgdmVjdG9yc1xuICAgIDptYXgtdHJpZXMgICAgIHRoZSBudW1iZXIgb2YgdGltZXMgdGhlIGdlbmVyYXRvciB3aWxsIGJlIHRyaWVkIGJlZm9yZVxuICAgICAgICAgICAgICAgICAgIGZhaWxpbmcgd2hlbiBpdCBkb2VzIG5vdCBwcm9kdWNlIGRpc3RpbmN0IGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgKGRlZmF1bHQgMTApXCJcbiAgKFtrZXktZ2VuIHZhbC1nZW5dIChtYXAga2V5LWdlbiB2YWwtZ2VuIHt9KSlcbiAgKFtrZXktZ2VuIHZhbC1nZW4gb3B0c11cbiAgIChjb2xsLWRpc3RpbmN0LWJ5IHt9IGZpcnN0IGZhbHNlIGZhbHNlICh0dXBsZSBrZXktZ2VuIHZhbC1nZW4pIG9wdHMpKSlcblxuOzsgbGFyZ2UgaW50ZWdlcnNcbjs7IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG47OyBUaGlzIGFwcHJvYWNoIGhhcyBhIGZldyBkaXN0cmlidXRpb24gZWRnZSBjYXNlcywgYnV0IGlzIHByZXR0eSBnb29kXG47OyBmb3IgZXhwZWN0ZWQgdXNlcyBhbmQgaXMgd2F5IGJldHRlciB0aGFuIG5vdGhpbmcuXG5cbihkZWYgXjpwcml2YXRlIGdlbi1yYXctbG9uZ1xuICBcIkdlbmVyYXRlcyBhIHNpbmdsZSB1bmlmb3JtbHkgcmFuZG9tIGxvbmcsIGRvZXMgbm90IHNocmluay5cIlxuICAobWFrZS1nZW4gKGZuIFtybmQgX3NpemVdXG4gICAgICAgICAgICAgIChyb3NlL3B1cmUgKHJhbmRvbS9yYW5kLWxvbmcgcm5kKSkpKSlcblxuKGRlZiBeOnByaXZhdGUgTUFYX0lOVEVHRVJcbiAgIz8oOmNsaiBMb25nL01BWF9WQUxVRSA6Y2xqcyAoZGVjIChhcHBseSAqIChyZXBlYXQgNTMgMikpKSkpXG4oZGVmIF46cHJpdmF0ZSBNSU5fSU5URUdFUlxuICAjPyg6Y2xqIExvbmcvTUlOX1ZBTFVFIDpjbGpzICgtIE1BWF9JTlRFR0VSKSkpXG5cbihkZWZuIF46cHJpdmF0ZSBhYnNcbiAgW3hdXG4gICM/KDpjbGogKE1hdGgvYWJzIChsb25nIHgpKSA6Y2xqcyAoTWF0aC9hYnMgeCkpKVxuXG4oZGVmbiBeOnByaXZhdGUgbG9uZy0+bGFyZ2UtaW50ZWdlclxuICBbYml0LWNvdW50IHggbWluIG1heF1cbiAgKGxvb3AgW3JlcyAoLT4geFxuICAgICAgICAgICAgICAgICAoIz8oOmNsaiBiaXQtc2hpZnQtcmlnaHQgOmNsanMgLnNoaWZ0UmlnaHQpXG4gICAgICAgICAgICAgICAgICAgICgtIDY0IGJpdC1jb3VudCkpXG4gICAgICAgICAgICAgICAgICM/KDpjbGpzIC50b051bWJlcilcbiAgICAgICAgICAgICAgICAgOzsgc28gd2UgZG9uJ3QgZ2V0IGludG8gYW4gaW5maW5pdGUgbG9vcCBiaXQtc2hpZnRpbmdcbiAgICAgICAgICAgICAgICAgOzsgLTFcbiAgICAgICAgICAgICAgICAgKGNvbmQtPiAoemVybz8gbWluKSAoYWJzKSkpXVxuICAgIChpZiAoPD0gbWluIHJlcyBtYXgpXG4gICAgICByZXNcbiAgICAgIChjb3JlL2xldCBbcmVzJyAoLSByZXMpXVxuICAgICAgICAoaWYgKDw9IG1pbiByZXMnIG1heClcbiAgICAgICAgICByZXMnXG4gICAgICAgICAgKHJlY3VyICM/KDpjbGogKGJpdC1zaGlmdC1yaWdodCByZXMgMSlcbiAgICAgICAgICAgICAgICAgICAgOzsgZW11bGF0aW5nIGJpdC1zaGlmdC1yaWdodFxuICAgICAgICAgICAgICAgICAgICA6Y2xqcyAoLT4gcmVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29uZC0+IChvZGQ/IHJlcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChpZiAobmVnPyByZXMpIGluYyBkZWMpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgvIDIpKSkpKSkpKSlcblxuKGRlZm4gXjpwcml2YXRlIGxhcmdlLWludGVnZXIqKlxuICBcIkxpa2UgbGFyZ2UtaW50ZWdlciosIGJ1dCBhc3N1bWVzIHJhbmdlIGluY2x1ZGVzIHplcm8uXCJcbiAgW21pbiBtYXhdXG4gIChzaXplZCAoZm4gW3NpemVdXG4gICAgICAgICAgIChjb3JlL2xldCBbc2l6ZSAoY29yZS9tYXggc2l6ZSAxKSA7OyBubyBuZWVkIHRvIHdvcnJ5IGFib3V0IHNpemU9MFxuICAgICAgICAgICAgICAgICBtYXgtYml0LWNvdW50IChjb3JlL21pbiBzaXplICM/KDpjbGogNjQgOmNsanMgNTQpKV1cbiAgICAgICAgICAgICAoZ2VuLWZtYXAgKGZuIFtyb3NlXVxuICAgICAgICAgICAgICAgICAgICAgICAgIChjb3JlL2xldCBbW2JpdC1jb3VudCB4XSAocm9zZS9yb290IHJvc2UpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGludC1yb3NlLXRyZWUgKGxvbmctPmxhcmdlLWludGVnZXIgYml0LWNvdW50IHggbWluIG1heCkpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgKHR1cGxlIChjaG9vc2UgMSBtYXgtYml0LWNvdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuLXJhdy1sb25nKSkpKSkpXG5cblxuKGRlZm4gbGFyZ2UtaW50ZWdlcipcbiAgXCJMaWtlIGxhcmdlLWludGVnZXIsIGJ1dCBhY2NlcHRzIG9wdGlvbnM6XG5cbiAgICA6bWluICB0aGUgbWluaW11bSBpbnRlZ2VyIChpbmNsdXNpdmUpXG4gICAgOm1heCAgdGhlIG1heGltdW0gaW50ZWdlciAoaW5jbHVzaXZlKVxuXG4gIEJvdGggOm1pbiBhbmQgOm1heCBhcmUgb3B0aW9uYWwuXCJcbiAgW3s6a2V5cyBbbWluIG1heF19XVxuICAoY29yZS9sZXQgW21pbiAob3IgbWluIE1JTl9JTlRFR0VSKVxuICAgICAgICBtYXggKG9yIG1heCBNQVhfSU5URUdFUildXG4gICAgKGFzc2VydCAoPD0gbWluIG1heCkpXG4gICAgKHN1Y2gtdGhhdCAjKDw9IG1pbiAlIG1heClcbiAgICAgICAgICAgICAgIChpZiAoPD0gbWluIDAgbWF4KVxuICAgICAgICAgICAgICAgICAobGFyZ2UtaW50ZWdlcioqIG1pbiBtYXgpXG4gICAgICAgICAgICAgICAgIChpZiAoPCBtYXggMClcbiAgICAgICAgICAgICAgICAgICAoZm1hcCAjKCsgbWF4ICUpIChsYXJnZS1pbnRlZ2VyKiogKC0gbWluIG1heCkgMCkpXG4gICAgICAgICAgICAgICAgICAgKGZtYXAgIygrIG1pbiAlKSAobGFyZ2UtaW50ZWdlcioqIDAgKC0gbWF4IG1pbikpKSkpKSkpXG5cbihkZWYgbGFyZ2UtaW50ZWdlclxuICBcIkdlbmVyYXRlcyBhIHBsYXRmb3JtLW5hdGl2ZSBpbnRlZ2VyIGZyb20gdGhlIGZ1bGwgYXZhaWxhYmxlIHJhbmdlXG4gIChpbiBjbGosIDY0LWJpdCBMb25ncywgYW5kIGluIGNsanMsIG51bWJlcnMgYmV0d2VlbiAtKDJeNTMgLSAxKSBhbmRcbiAgKDJeNTMgLSAxKSkuXG5cbiAgVXNlIGxhcmdlLWludGVnZXIqIGZvciBtb3JlIGNvbnRyb2wuXCJcbiAgKGxhcmdlLWludGVnZXIqIHt9KSlcblxuXG47OyBkb3VibGVzXG47OyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG47OyBUaGlzIGNvZGUgaXMgYSBsb3QgbW9yZSBjb21wbGV4IHRoYW4gYW55IHJlYXNvbmFibGUgcGVyc29uIHdvdWxkXG47OyBleHBlY3QsIGZvciB0d28gcmVhc29uczpcbjs7XG47OyAxKSBJIHdhbnRlZCB0aGUgZ2VuZXJhdG9yIHRvIHN0YXJ0IHdpdGggc2ltcGxlIHZhbHVlcyBhbmQgZ3JvdyB3aXRoXG47OyB0aGUgc2l6ZSBwYXJhbWV0ZXIsIGFzIHdlbGwgYXMgc2hyaW5rIGJhY2sgdG8gc2ltcGxlIHZhbHVlcy4gSVxuOzsgZGVjaWRlZCB0byBkZWZpbmUgXCJzaW1wbGVcIiBhcyBudW1iZXJzIHdpdGggc2ltcGxlciAoY2xvc2VyIHRvIDApXG47OyBleHBvbmVudHMsIHdpdGggc2ltcGxlciBmcmFjdGlvbmFsIHBhcnRzIChmZXdlciBsb3dlci1sZXZlbCBiaXRzXG47OyBzZXQpLCBhbmQgd2l0aCBwb3NpdGl2ZSBiZWluZyBzaW1wbGVyIHRoYW4gbmVnYXRpdmUuIEkgYWxzbyB3YW50ZWRcbjs7IHRvIHRha2UgYSBvcHRpb25hbCBtaW4vbWF4IHBhcmFtZXRlcnMsIHdoaWNoIGNvbXBsaWNhdGVzIHRoZSBoZWxsXG47OyBvdXQgb2YgdGhpbmdzXG47O1xuOzsgMikgSXQgd29ya3MgaW4gQ0xKUyBhcyB3ZWxsLCB3aGljaCBoYXMgZmV3ZXIgdXRpbGl0eSBmdW5jdGlvbnMgZm9yXG47OyBkb3VibGVzLCBhbmQgSSB3YW50ZWQgaXQgdG8gd29yayBleGFjdGx5IHRoZSBzYW1lIHdheSBpbiBDTEpTIGp1c3Rcbjs7IHRvIHZhbGlkYXRlIHRoZSB3aG9sZSBjcm9zcy1wbGF0Zm9ybSBzaXR1YXRpb24uIEl0IHNob3VsZCBnZW5lcmF0ZVxuOzsgdGhlIGV4YWN0IHNhbWUgbnVtYmVycyBvbiBib3RoIHBsYXRmb3Jtcy5cbjs7XG47OyBTb21lIG9mIHRoZSBsb3dlciBsZXZlbCBzdHVmZiBjb3VsZCBwcm9iYWJseSBiZSBsZXNzIG1lc3N5IGFuZFxuOzsgZmFzdGVyLCBlc3BlY2lhbGx5IGZvciBDTEpTLlxuXG4oZGVmIF46cHJpdmF0ZSBQT1NfSU5GSU5JVFkgIz8oOmNsaiBEb3VibGUvUE9TSVRJVkVfSU5GSU5JVFksIDpjbGpzICguLVBPU0lUSVZFX0lORklOSVRZIGpzL051bWJlcikpKVxuKGRlZiBeOnByaXZhdGUgTkVHX0lORklOSVRZICM/KDpjbGogRG91YmxlL05FR0FUSVZFX0lORklOSVRZLCA6Y2xqcyAoLi1ORUdBVElWRV9JTkZJTklUWSBqcy9OdW1iZXIpKSlcbihkZWYgXjpwcml2YXRlIE1BWF9QT1NfVkFMVUUgIz8oOmNsaiBEb3VibGUvTUFYX1ZBTFVFLCA6Y2xqcyAoLi1NQVhfVkFMVUUganMvTnVtYmVyKSkpXG4oZGVmIF46cHJpdmF0ZSBNSU5fTkVHX1ZBTFVFICgtIE1BWF9QT1NfVkFMVUUpKVxuKGRlZiBeOnByaXZhdGUgTkFOICM/KDpjbGogRG91YmxlL05hTiwgOmNsanMgKC4tTmFOIGpzL051bWJlcikpKVxuXG4oZGVmbiBeOnByaXZhdGUgdW5pZm9ybS1pbnRlZ2VyXG4gIFwiR2VuZXJhdGVzIGFuIGludGVnZXIgdW5pZm9ybWx5IGluIHRoZSByYW5nZSAwLi4oMl5iaXQtY291bnQtMSkuXCJcbiAgW2JpdC1jb3VudF1cbiAgezphc3NlcnQgWyg8PSAwIGJpdC1jb3VudCA1MildfVxuICAoaWYgKDw9IGJpdC1jb3VudCAzMilcbiAgICA7OyB0aGUgY2FzZSBoZXJlIGlzIGp1c3QgZm9yIGNsanNcbiAgICAoY2hvb3NlIDAgKGNhc2UgKGxvbmcgYml0LWNvdW50KVxuICAgICAgICAgICAgICAgIDMyIDB4ZmZmZmZmZmZcbiAgICAgICAgICAgICAgICAzMSAweDdmZmZmZmZmXG4gICAgICAgICAgICAgICAgKC0+IDEgKGJpdC1zaGlmdC1sZWZ0IGJpdC1jb3VudCkgZGVjKSkpXG4gICAgKGZtYXAgKGZuIFtbdXBwZXIgbG93ZXJdXVxuICAgICAgICAgICAgIz8gKDpjbGpcbiAgICAgICAgICAgICAgICAoLT4gdXBwZXIgKGJpdC1zaGlmdC1sZWZ0IDMyKSAoKyBsb3dlcikpXG5cbiAgICAgICAgICAgICAgICA6Y2xqc1xuICAgICAgICAgICAgICAgICgtPiB1cHBlciAoKiAweDEwMDAwMDAwMCkgKCsgbG93ZXIpKSkpXG4gICAgICAgICAgKHR1cGxlICh1bmlmb3JtLWludGVnZXIgKC0gYml0LWNvdW50IDMyKSlcbiAgICAgICAgICAgICAgICAgKHVuaWZvcm0taW50ZWdlciAzMikpKSkpXG5cbihkZWZuIF46cHJpdmF0ZSBzY2FsYlxuICBbeCBleHBdXG4gICM/KDpjbGogKE1hdGgvc2NhbGIgXmRvdWJsZSB4IF5pbnQgZXhwKVxuICAgICA6Y2xqcyAoKiB4ICgucG93IGpzL01hdGggMiBleHApKSkpXG5cbihkZWZuIF46cHJpdmF0ZSBmaWZ0eS10d28tYml0LXJldmVyc2VcbiAgXCJCaXQtcmV2ZXJzZXMgYW4gaW50ZWdlciBpbiB0aGUgcmFuZ2UgWzAsIDJeNTIpLlwiXG4gIFtuXVxuICAjPyAoOmNsalxuICAgICAgKC0+IG4gKExvbmcvcmV2ZXJzZSkgKHVuc2lnbmVkLWJpdC1zaGlmdC1yaWdodCAxMikpXG5cbiAgICAgIDpjbGpzXG4gICAgICAobG9vcCBbb3V0IDBcbiAgICAgICAgICAgICBuIG5cbiAgICAgICAgICAgICBvdXQtc2hpZnRlciAoTWF0aC9wb3cgMiA1MildXG4gICAgICAgIChpZiAoPCBuIDEpXG4gICAgICAgICAgKCogb3V0IG91dC1zaGlmdGVyKVxuICAgICAgICAgIChyZWN1ciAoLT4gb3V0ICgqIDIpICgrIChiaXQtYW5kIG4gMSkpKVxuICAgICAgICAgICAgICAgICAoLyBuIDIpXG4gICAgICAgICAgICAgICAgICgvIG91dC1zaGlmdGVyIDIpKSkpKSlcblxuKGRlZiBeOnByaXZhdGUgYmFja3dhcmRzLXNocmlua2luZy1zaWduaWZpY2FuZFxuICBcIkdlbmVyYXRlcyBhIDUyLWJpdCBub24tbmVnYXRpdmUgaW50ZWdlciB0aGF0IHNocmlua3MgdG93YXJkIGhhdmluZ1xuICBmZXdlciBsb3dlci1vcmRlciBiaXRzIChhbmQgc2hyaW5rcyB0byAwIGlmIHBvc3NpYmxlKS5cIlxuICAoZm1hcCBmaWZ0eS10d28tYml0LXJldmVyc2VcbiAgICAgICAgKHNpemVkIChmbiBbc2l6ZV1cbiAgICAgICAgICAgICAgICAgKGdlbi1iaW5kIChjaG9vc2UgMCAobWluIHNpemUgNTIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZuIFtyb3NlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodW5pZm9ybS1pbnRlZ2VyIChyb3NlL3Jvb3Qgcm9zZSkpKSkpKSkpXG5cbihkZWZuIF46cHJpdmF0ZSBnZXQtZXhwb25lbnRcbiAgW3hdXG4gICM/ICg6Y2xqXG4gICAgICAoTWF0aC9nZXRFeHBvbmVudCBeRG91YmxlIHgpXG5cbiAgICAgIDpjbGpzXG4gICAgICAoaWYgKHplcm8/IHgpXG4gICAgICAgIC0xMDIzXG4gICAgICAgIChjb3JlL2xldCBbeCAoTWF0aC9hYnMgeClcblxuICAgICAgICAgICAgICAgICAgIHJlc1xuICAgICAgICAgICAgICAgICAgIChNYXRoL2Zsb29yICgqIChNYXRoL2xvZyB4KSAoLi1MT0cyRSBqcy9NYXRoKSkpXG5cbiAgICAgICAgICAgICAgICAgICB0IChzY2FsYiB4ICgtIHJlcykpXVxuICAgICAgICAgIChjb25kICg8IHQgMSkgKGRlYyByZXMpXG4gICAgICAgICAgICAgICAgKDw9IDIgdCkgKGluYyByZXMpXG4gICAgICAgICAgICAgICAgOmVsc2UgcmVzKSkpKSlcblxuKGRlZm4gXjpwcml2YXRlIGRvdWJsZS1leHAtYW5kLXNpZ25cbiAgXCJHZW5lcmF0ZXMgW2V4cCBzaWduXSwgd2hlcmUgZXhwIGlzIGluIFstMTAyMywgMTAyM10gYW5kIHNpZ24gaXMgMVxuICBvciAtMS4gT25seSBnZW5lcmF0ZXMgdmFsdWVzIGZvciBleHAgYW5kIHNpZ24gZm9yIHdoaWNoIHRoZXJlIGFyZVxuICBkb3VibGVzIHdpdGhpbiB0aGUgZ2l2ZW4gYm91bmRzLlwiXG4gIFtsb3dlci1ib3VuZCB1cHBlci1ib3VuZF1cbiAgKGxldGZuIFsoZ2VuLWV4cCBbbGIgdWJdXG4gICAgICAgICAgICAoc2l6ZWQgKGZuIFtzaXplXVxuICAgICAgICAgICAgICAgICAgICAgKGNvcmUvbGV0IFtxczggKGJpdC1zaGlmdC1sZWZ0IDEgKHF1b3QgKG1pbiAyMDAgc2l6ZSkgOCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAoY29uZCAoPD0gbGIgMCB1YilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNob29zZSAobWF4IGxiICgtIHFzOCkpIChtaW4gdWIgcXM4KSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPCB1YiAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hvb3NlIChtYXggbGIgKC0gdWIgcXM4KSkgdWIpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNob29zZSBsYiAobWluIHViICgrIGxiIHFzOCkpKSkpKSkpXVxuICAgIChpZiAoYW5kIChuaWw/IGxvd2VyLWJvdW5kKVxuICAgICAgICAgICAgIChuaWw/IHVwcGVyLWJvdW5kKSlcbiAgICAgICh0dXBsZSAoZ2VuLWV4cCAtMTAyMyAxMDIzKVxuICAgICAgICAgICAgIChlbGVtZW50cyBbMS4wIC0xLjBdKSlcbiAgICAgIChjb3JlL2xldCBbbG93ZXItYm91bmQgKG9yIGxvd2VyLWJvdW5kIE1JTl9ORUdfVkFMVUUpXG4gICAgICAgICAgICAgICAgIHVwcGVyLWJvdW5kIChvciB1cHBlci1ib3VuZCBNQVhfUE9TX1ZBTFVFKVxuICAgICAgICAgICAgICAgICBsYmV4cCAobWF4IC0xMDIzIChnZXQtZXhwb25lbnQgbG93ZXItYm91bmQpKVxuICAgICAgICAgICAgICAgICB1YmV4cCAobWF4IC0xMDIzIChnZXQtZXhwb25lbnQgdXBwZXItYm91bmQpKV1cbiAgICAgICAgKGNvbmQgKDw9IDAuMCBsb3dlci1ib3VuZClcbiAgICAgICAgICAgICAgKHR1cGxlIChnZW4tZXhwIGxiZXhwIHViZXhwKVxuICAgICAgICAgICAgICAgICAgICAgKHJldHVybiAxLjApKVxuXG4gICAgICAgICAgICAgICg8PSB1cHBlci1ib3VuZCAwLjApXG4gICAgICAgICAgICAgICh0dXBsZSAoZ2VuLWV4cCB1YmV4cCBsYmV4cClcbiAgICAgICAgICAgICAgICAgICAgIChyZXR1cm4gLTEuMCkpXG5cbiAgICAgICAgICAgICAgOmVsc2VcbiAgICAgICAgICAgICAgKGZtYXAgKGZuIFtbZXhwIHNpZ24gOmFzIHBhaXJdXVxuICAgICAgICAgICAgICAgICAgICAgIChpZiAob3IgKGFuZCAobmVnPyBzaWduKSAoPCBsYmV4cCBleHApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFuZCAocG9zPyBzaWduKSAoPCB1YmV4cCBleHApKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFtleHAgKC0gc2lnbildXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWlyKSlcbiAgICAgICAgICAgICAgICAgICAgKHR1cGxlXG4gICAgICAgICAgICAgICAgICAgICAoZ2VuLWV4cCAtMTAyMyAobWF4IHViZXhwIGxiZXhwKSlcbiAgICAgICAgICAgICAgICAgICAgIChlbGVtZW50cyBbMS4wIC0xLjBdKSkpKSkpKSlcblxuKGRlZm4gXjpwcml2YXRlIGJsb2NrLWJvdW5kc1xuICBcIlJldHVybnMgW2xvdyBoaWdoXSwgdGhlIHNtYWxsZXN0IGFuZCBsYXJnZXN0IG51bWJlcnMgaW4gdGhlIGdpdmVuXG4gIHJhbmdlLlwiXG4gIFtleHAgc2lnbl1cbiAgKGlmIChuZWc/IHNpZ24pXG4gICAgKGNvcmUvbGV0IFtbbG93IGhpZ2hdIChibG9jay1ib3VuZHMgZXhwICgtIHNpZ24pKV1cbiAgICAgIFsoLSBoaWdoKSAoLSBsb3cpXSlcbiAgICAoaWYgKD0gLTEwMjMgZXhwKVxuICAgICAgWzAuMCAoLT4gMS4wIChzY2FsYiA1MikgZGVjIChzY2FsYiAtMTA3NCkpXVxuICAgICAgWyhzY2FsYiAxLjAgZXhwKVxuICAgICAgICgtPiAxLjAgKHNjYWxiIDUyKSBkZWMgKHNjYWxiICgtIGV4cCA1MSkpKV0pKSlcblxuKGRlZm4gXjpwcml2YXRlIGRvdWJsZS1maW5pdGVcbiAgWyBsb3dlci1ib3VuZCB1cHBlci1ib3VuZF1cbiAgezpwcmUgWyhvciAobmlsPyBsb3dlci1ib3VuZClcbiAgICAgICAgICAgICAobmlsPyB1cHBlci1ib3VuZClcbiAgICAgICAgICAgICAoPD0gbG93ZXItYm91bmQgdXBwZXItYm91bmQpKV19XG4gIChjb3JlL2xldCBbcHJlZCAoaWYgbG93ZXItYm91bmRcbiAgICAgICAgICAgICAgICAgICAgKGlmIHVwcGVyLWJvdW5kXG4gICAgICAgICAgICAgICAgICAgICAgIyg8PSBsb3dlci1ib3VuZCAlIHVwcGVyLWJvdW5kKVxuICAgICAgICAgICAgICAgICAgICAgICMoPD0gbG93ZXItYm91bmQgJSkpXG4gICAgICAgICAgICAgICAgICAgIChpZiB1cHBlci1ib3VuZFxuICAgICAgICAgICAgICAgICAgICAgICMoPD0gJSB1cHBlci1ib3VuZCkpKVxuXG4gICAgICAgICAgICAgZ2VuXG4gICAgICAgICAgICAgKGZtYXAgKGZuIFtbW2V4cCBzaWduXSBzaWduaWZpY2FuZF1dXG4gICAgICAgICAgICAgICAgICAgICAoY29yZS9sZXQgWyA7OyAxLjAgPD0gYmFzZSA8IDIuMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlIChpbmMgKC8gc2lnbmlmaWNhbmQgKE1hdGgvcG93IDIgNTIpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCAoLT4gYmFzZSAoc2NhbGIgZXhwKSAoKiBzaWduKSldXG4gICAgICAgICAgICAgICAgICAgICAgIChpZiAob3IgKG5pbD8gcHJlZCkgKHByZWQgeCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgeFxuICAgICAgICAgICAgICAgICAgICAgICAgIDs7IFNjYWxlIHRoaW5ncyBhIGJpdCB3aGVuIHdlIGhhdmUgYSBwYXJ0aWFsIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgOzsgdG8gZGVhbCB3aXRoLiBJdCB3b24ndCBiZSBncmVhdCBmb3IgZ2VuZXJhdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgIDs7IHNpbXBsZSBudW1iZXJzLCBidXQgb2ggd2VsbC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAoY29yZS9sZXQgW1tsb3cgaGlnaF0gKGJsb2NrLWJvdW5kcyBleHAgc2lnbilcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2stbGIgKGNvbmQtPiBsb3cgIGxvd2VyLWJvdW5kIChtYXggbG93ZXItYm91bmQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2stdWIgKGNvbmQtPiBoaWdoIHVwcGVyLWJvdW5kIChtaW4gdXBwZXItYm91bmQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCAoKyBibG9jay1sYiAoKiAoLSBibG9jay11YiBibG9jay1sYikgKC0gYmFzZSAxKSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKC0+IHggKG1pbiBibG9jay11YikgKG1heCBibG9jay1sYikpKSkpKVxuICAgICAgICAgICAgICAgICAgICh0dXBsZSAoZG91YmxlLWV4cC1hbmQtc2lnbiBsb3dlci1ib3VuZCB1cHBlci1ib3VuZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja3dhcmRzLXNocmlua2luZy1zaWduaWZpY2FuZCkpXVxuICAgIDs7IHdyYXBwaW5nIGluIHRoZSBzdWNoLXRoYXQgaXMgbmVjZXNzYXJ5IGZvciBzdGF5aW5nIGluIGJvdW5kc1xuICAgIDs7IGR1cmluZyBzaHJpbmtpbmdcbiAgICAoY29uZC0+PiBnZW4gcHJlZCAoc3VjaC10aGF0IHByZWQpKSkpXG5cbihkZWZuIGRvdWJsZSpcbiAgXCJHZW5lcmF0ZXMgYSA2NC1iaXQgZmxvYXRpbmcgcG9pbnQgbnVtYmVyLiBPcHRpb25zOlxuXG4gICAgOmluZmluaXRlPyAtIHdoZXRoZXIgKy8tIGluZmluaXR5IGNhbiBiZSBnZW5lcmF0ZWQgKGRlZmF1bHQgdHJ1ZSlcbiAgICA6TmFOPyAgICAgIC0gd2hldGhlciBOYU4gY2FuIGJlIGdlbmVyYXRlZCAoZGVmYXVsdCB0cnVlKVxuICAgIDptaW4gICAgICAgLSBtaW5pbXVtIHZhbHVlIChpbmNsdXNpdmUsIGRlZmF1bHQgbm9uZSlcbiAgICA6bWF4ICAgICAgIC0gbWF4aW11bSB2YWx1ZSAoaW5jbHVzaXZlLCBkZWZhdWx0IG5vbmUpXG5cbiAgTm90ZSB0aGF0IHRoZSBtaW4vbWF4IG9wdGlvbnMgbXVzdCBiZSBmaW5pdGUgbnVtYmVycy4gU3VwcGx5aW5nIGFcbiAgbWluIHByZWNsdWRlcyAtSW5maW5pdHksIGFuZCBzdXBwbHlpbmcgYSBtYXggcHJlY2x1ZGVzICtJbmZpbml0eS5cIlxuICBbezprZXlzIFtpbmZpbml0ZT8gTmFOPyBtaW4gbWF4XVxuICAgIDpvciB7aW5maW5pdGU/IHRydWUsIE5hTj8gdHJ1ZX19XVxuICAoY29yZS9sZXQgW2ZyZXF1ZW5jeS1hcmcgKGNvbmQtPiBbWzk1IChkb3VibGUtZmluaXRlIG1pbiBtYXgpXV1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaWYgKG5pbD8gbWluKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvciAobmlsPyBtYXgpICg8PSAwLjAgbWF4KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaWYgKG5pbD8gbWF4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDw9IG1pbiAwLjApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPD0gbWluIDAuMCBtYXgpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbmpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDs7IEFkZCB6ZXJvcyBoZXJlIGFzIGEgc3BlY2lhbCBjYXNlLCBzaW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOzsgdGhlIGBmaW5pdGVgIGNvZGUgY29uc2lkZXJzIHplcm9zIHJhdGhlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOzsgY29tcGxleCAoYXMgdGhleSBoYXZlIGEgLTEwMjMgZXhwb25lbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOzsgSSB0aGluayBtb3N0IHVzZXMgY2FuJ3QgZGlzdGluZ3Vpc2ggMC4wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7OyBmcm9tIC0wLjAsIGJ1dCBzZWVtcyB3b3J0aCB0aHJvd2luZyBib3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7OyBpbiBqdXN0IGluIGNhc2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbMSAocmV0dXJuIDAuMCldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbMSAocmV0dXJuIC0wLjApXSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYW5kIGluZmluaXRlPyAobmlsPyBtYXgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29uaiBbMSAocmV0dXJuIFBPU19JTkZJTklUWSldKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhbmQgaW5maW5pdGU/IChuaWw/IG1pbikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb25qIFsxIChyZXR1cm4gTkVHX0lORklOSVRZKV0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmFOPyAoY29uaiBbMSAocmV0dXJuIE5BTildKSldXG4gICAgKGlmICg9IDEgKGNvdW50IGZyZXF1ZW5jeS1hcmcpKVxuICAgICAgKC0+IGZyZXF1ZW5jeS1hcmcgZmlyc3Qgc2Vjb25kKVxuICAgICAgKGZyZXF1ZW5jeSBmcmVxdWVuY3ktYXJnKSkpKVxuXG4oZGVmIGRvdWJsZVxuICBcIkdlbmVyYXRlcyA2NC1iaXQgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyBmcm9tIHRoZSBlbnRpcmUgcmFuZ2UsXG4gIGluY2x1ZGluZyArLy0gaW5maW5pdHkgYW5kIE5hTi4gVXNlIGRvdWJsZSogZm9yIG1vcmUgY29udHJvbC5cIlxuICAoZG91YmxlKiB7fSkpXG5cblxuOzsgQ2hhcmFjdGVycyAmIFN0cmluZ3Ncbjs7IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4oZGVmIGNoYXJcbiAgXCJHZW5lcmF0ZXMgY2hhcmFjdGVyIGZyb20gMC0yNTUuXCJcbiAgKGZtYXAgY29yZS9jaGFyIChjaG9vc2UgMCAyNTUpKSlcblxuKGRlZiBjaGFyLWFzY2lpXG4gIFwiR2VuZXJhdGUgb25seSBhc2NpaSBjaGFyYWN0ZXIuXCJcbiAgKGZtYXAgY29yZS9jaGFyIChjaG9vc2UgMzIgMTI2KSkpXG5cbihkZWYgY2hhci1hbHBoYW51bWVyaWNcbiAgXCJHZW5lcmF0ZSBhbHBoYW51bWVyaWMgY2hhcmFjdGVycy5cIlxuICAoZm1hcCBjb3JlL2NoYXJcbiAgICAgICAgKG9uZS1vZiBbKGNob29zZSA0OCA1NylcbiAgICAgICAgICAgICAgICAgKGNob29zZSA2NSA5MClcbiAgICAgICAgICAgICAgICAgKGNob29zZSA5NyAxMjIpXSkpKVxuXG4oZGVmIF57OmRlcHJlY2F0ZWQgXCIwLjYuMFwifVxuICBjaGFyLWFscGhhLW51bWVyaWNcbiAgXCJEZXByZWNhdGVkIC0gdXNlIGNoYXItYWxwaGFudW1lcmljIGluc3RlYWQuXG5cbiAgR2VuZXJhdGUgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMuXCJcbiAgY2hhci1hbHBoYW51bWVyaWMpXG5cbihkZWYgY2hhci1hbHBoYVxuICBcIkdlbmVyYXRlIGFscGhhIGNoYXJhY3RlcnMuXCJcbiAgKGZtYXAgY29yZS9jaGFyXG4gICAgICAgIChvbmUtb2YgWyhjaG9vc2UgNjUgOTApXG4gICAgICAgICAgICAgICAgIChjaG9vc2UgOTcgMTIyKV0pKSlcblxuKGRlZiBeezpwcml2YXRlIHRydWV9IGNoYXItc3ltYm9sLXNwZWNpYWxcbiAgXCJHZW5lcmF0ZSBub24tYWxwaGFudW1lcmljIGNoYXJhY3RlcnMgdGhhdCBjYW4gYmUgaW4gYSBzeW1ib2wuXCJcbiAgKGVsZW1lbnRzIFtcXCogXFwrIFxcISBcXC0gXFxfIFxcP10pKVxuXG4oZGVmIF57OnByaXZhdGUgdHJ1ZX0gY2hhci1rZXl3b3JkLXJlc3RcbiAgXCJHZW5lcmF0ZSBjaGFyYWN0ZXJzIHRoYXQgY2FuIGJlIHRoZSBjaGFyIGZvbGxvd2luZyBmaXJzdCBvZiBhIGtleXdvcmQuXCJcbiAgKGZyZXF1ZW5jeSBbWzIgY2hhci1hbHBoYW51bWVyaWNdXG4gICAgICAgICAgICAgIFsxIGNoYXItc3ltYm9sLXNwZWNpYWxdXSkpXG5cbihkZWYgXns6cHJpdmF0ZSB0cnVlfSBjaGFyLWtleXdvcmQtZmlyc3RcbiAgXCJHZW5lcmF0ZSBjaGFyYWN0ZXJzIHRoYXQgY2FuIGJlIHRoZSBmaXJzdCBjaGFyIG9mIGEga2V5d29yZC5cIlxuICAoZnJlcXVlbmN5IFtbMiBjaGFyLWFscGhhXVxuICAgICAgICAgICAgICBbMSBjaGFyLXN5bWJvbC1zcGVjaWFsXV0pKVxuXG4oZGVmIHN0cmluZ1xuICBcIkdlbmVyYXRlIHN0cmluZ3MuIE1heSBnZW5lcmF0ZSB1bnByaW50YWJsZSBjaGFyYWN0ZXJzLlwiXG4gIChmbWFwIGNsb2p1cmUuc3RyaW5nL2pvaW4gKHZlY3RvciBjaGFyKSkpXG5cbihkZWYgc3RyaW5nLWFzY2lpXG4gIFwiR2VuZXJhdGUgYXNjaWkgc3RyaW5ncy5cIlxuICAoZm1hcCBjbG9qdXJlLnN0cmluZy9qb2luICh2ZWN0b3IgY2hhci1hc2NpaSkpKVxuXG4oZGVmIHN0cmluZy1hbHBoYW51bWVyaWNcbiAgXCJHZW5lcmF0ZSBhbHBoYW51bWVyaWMgc3RyaW5ncy5cIlxuICAoZm1hcCBjbG9qdXJlLnN0cmluZy9qb2luICh2ZWN0b3IgY2hhci1hbHBoYW51bWVyaWMpKSlcblxuKGRlZiBeezpkZXByZWNhdGVkIFwiMC42LjBcIn1cbiAgc3RyaW5nLWFscGhhLW51bWVyaWNcbiAgXCJEZXByZWNhdGVkIC0gdXNlIHN0cmluZy1hbHBoYW51bWVyaWMgaW5zdGVhZC5cblxuICBHZW5lcmF0ZSBhbHBoYW51bWVyaWMgc3RyaW5ncy5cIlxuICBzdHJpbmctYWxwaGFudW1lcmljKVxuXG4oZGVmbi0gZGlnaXQ/XG4gIFtkXVxuICAjPyg6Y2xqICAoQ2hhcmFjdGVyL2lzRGlnaXQgXkNoYXJhY3RlciBkKVxuICAgICA6Y2xqcyAoZ3N0cmluZy9pc051bWVyaWMgZCkpKVxuXG4oZGVmbi0gKy1vci0tLWRpZ2l0P1xuICBcIlJldHVybnMgdHJ1ZSBpZiBjIGlzIFxcXFwrIG9yIFxcXFwtIGFuZCBkIGlzIG5vbi1uaWwgYW5kIGEgZGlnaXQuXG5cbiAgU3ltYm9scyB0aGF0IHN0YXJ0IHdpdGggKzMgb3IgLTIgYXJlIG5vdCByZWFkYWJsZSBiZWNhdXNlIHRoZXkgbG9va1xuICBsaWtlIG51bWJlcnMuXCJcbiAgW2MgZF1cbiAgKGNvcmUvYm9vbGVhbiAoYW5kIGRcbiAgICAgICAgICAgICAgICAgICAgIChvciAoIz8oOmNsaiA9IDpjbGpzIGlkZW50aWNhbD8pIFxcKyBjKVxuICAgICAgICAgICAgICAgICAgICAgICAgICgjPyg6Y2xqID0gOmNsanMgaWRlbnRpY2FsPykgXFwtIGMpKVxuICAgICAgICAgICAgICAgICAgICAgKGRpZ2l0PyBkKSkpKVxuXG4oZGVmIF57OnByaXZhdGUgdHJ1ZX0gbmFtZXNwYWNlLXNlZ21lbnRcbiAgXCJHZW5lcmF0ZSB0aGUgc2VnbWVudCBvZiBhIG5hbWVzcGFjZS5cIlxuICAoLT4+ICh0dXBsZSBjaGFyLWtleXdvcmQtZmlyc3QgKHZlY3RvciBjaGFyLWtleXdvcmQtcmVzdCkpXG4gICAgICAgKHN1Y2gtdGhhdCAoZm4gW1tjIFtkXV1dIChub3QgKCstb3ItLS1kaWdpdD8gYyBkKSkpKVxuICAgICAgIChmbWFwIChmbiBbW2MgY3NdXSAoY2xvanVyZS5zdHJpbmcvam9pbiAoY29ucyBjIGNzKSkpKSkpXG5cbihkZWYgXns6cHJpdmF0ZSB0cnVlfSBuYW1lc3BhY2VcbiAgXCJHZW5lcmF0ZSBhIG5hbWVzcGFjZSAob3IgbmlsIGZvciBubyBuYW1lc3BhY2UpLlwiXG4gICgtPj4gKHZlY3RvciBuYW1lc3BhY2Utc2VnbWVudClcbiAgICAgICAoZm1hcCAoZm4gW3ZdICh3aGVuIChzZXEgdilcbiAgICAgICAgICAgICAgICAgICAgICAgKGNsb2p1cmUuc3RyaW5nL2pvaW4gXCIuXCIgdikpKSkpKVxuXG4oZGVmIF57OnByaXZhdGUgdHJ1ZX0ga2V5d29yZC1zZWdtZW50LXJlc3RcbiAgXCJHZW5lcmF0ZSBzZWdtZW50cyBvZiBhIGtleXdvcmQgKGJldHdlZW4gXFxcXDopXCJcbiAgKC0+PiAodHVwbGUgY2hhci1rZXl3b3JkLXJlc3QgKHZlY3RvciBjaGFyLWtleXdvcmQtcmVzdCkpXG4gICAgICAgKGZtYXAgKGZuIFtbYyBjc11dIChjbG9qdXJlLnN0cmluZy9qb2luIChjb25zIGMgY3MpKSkpKSlcblxuKGRlZiBeezpwcml2YXRlIHRydWV9IGtleXdvcmQtc2VnbWVudC1maXJzdFxuICBcIkdlbmVyYXRlIHNlZ21lbnRzIG9mIGEga2V5d29yZCB0aGF0IGNhbiBiZSBmaXJzdCAoYmV0d2VlbiBcXFxcOilcIlxuICAoLT4+ICh0dXBsZSBjaGFyLWtleXdvcmQtZmlyc3QgKHZlY3RvciBjaGFyLWtleXdvcmQtcmVzdCkpXG4gICAgICAgKGZtYXAgKGZuIFtbYyBjc11dIChjbG9qdXJlLnN0cmluZy9qb2luIChjb25zIGMgY3MpKSkpKSlcblxuKGRlZiBrZXl3b3JkXG4gIFwiR2VuZXJhdGUga2V5d29yZHMgd2l0aG91dCBuYW1lc3BhY2VzLlwiXG4gICgtPj4gKHR1cGxlIGtleXdvcmQtc2VnbWVudC1maXJzdCAodmVjdG9yIGtleXdvcmQtc2VnbWVudC1yZXN0KSlcbiAgICAgICAoZm1hcCAoZm4gW1tjIGNzXV1cbiAgICAgICAgICAgICAgIChjb3JlL2tleXdvcmQgKGNsb2p1cmUuc3RyaW5nL2pvaW4gXCI6XCIgKGNvbnMgYyBjcykpKSkpKSlcblxuKGRlZlxuICBeezphZGRlZCBcIjAuNS45XCJ9XG4gIGtleXdvcmQtbnNcbiAgXCJHZW5lcmF0ZSBrZXl3b3JkcyB3aXRoIG9wdGlvbmFsIG5hbWVzcGFjZXMuXCJcbiAgKC0+PiAodHVwbGUgbmFtZXNwYWNlIGNoYXIta2V5d29yZC1maXJzdCAodmVjdG9yIGNoYXIta2V5d29yZC1yZXN0KSlcbiAgICAgICAoZm1hcCAoZm4gW1tucyBjIGNzXV1cbiAgICAgICAgICAgICAgIChjb3JlL2tleXdvcmQgbnMgKGNsb2p1cmUuc3RyaW5nL2pvaW4gKGNvbnMgYyBjcykpKSkpKSlcblxuKGRlZiBeezpwcml2YXRlIHRydWV9IGNoYXItc3ltYm9sLWZpcnN0XG4gIChmcmVxdWVuY3kgW1sxMCBjaGFyLWFscGhhXVxuICAgICAgICAgICAgICBbNSBjaGFyLXN5bWJvbC1zcGVjaWFsXVxuICAgICAgICAgICAgICBbMSAocmV0dXJuIFxcLildXSkpXG5cbihkZWYgXns6cHJpdmF0ZSB0cnVlfSBjaGFyLXN5bWJvbC1yZXN0XG4gIChmcmVxdWVuY3kgW1sxMCBjaGFyLWFscGhhbnVtZXJpY11cbiAgICAgICAgICAgICAgWzUgY2hhci1zeW1ib2wtc3BlY2lhbF1cbiAgICAgICAgICAgICAgWzEgKHJldHVybiBcXC4pXV0pKVxuXG4oZGVmIHN5bWJvbFxuICBcIkdlbmVyYXRlIHN5bWJvbHMgd2l0aG91dCBuYW1lc3BhY2VzLlwiXG4gIChmcmVxdWVuY3kgW1sxMDAgKC0+PiAodHVwbGUgY2hhci1zeW1ib2wtZmlyc3QgKHZlY3RvciBjaGFyLXN5bWJvbC1yZXN0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIChzdWNoLXRoYXQgKGZuIFtbYyBbZF1dXSAobm90ICgrLW9yLS0tZGlnaXQ/IGMgZCkpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIChmbWFwIChmbiBbW2MgY3NdXSAoY29yZS9zeW1ib2wgKGNsb2p1cmUuc3RyaW5nL2pvaW4gKGNvbnMgYyBjcykpKSkpKV1cbiAgICAgICAgICAgICAgWzEgKHJldHVybiAnLyldXSkpXG5cbihkZWZcbiAgXns6YWRkZWQgXCIwLjUuOVwifVxuICBzeW1ib2wtbnNcbiAgXCJHZW5lcmF0ZSBzeW1ib2xzIHdpdGggb3B0aW9uYWwgbmFtZXNwYWNlcy5cIlxuICAoZnJlcXVlbmN5IFtbMTAwICgtPj4gKHR1cGxlIG5hbWVzcGFjZSBjaGFyLXN5bWJvbC1maXJzdCAodmVjdG9yIGNoYXItc3ltYm9sLXJlc3QpKVxuICAgICAgICAgICAgICAgICAgICAgICAgKHN1Y2gtdGhhdCAoZm4gW1tfIGMgW2RdXV0gKG5vdCAoKy1vci0tLWRpZ2l0PyBjIGQpKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAoZm1hcCAoZm4gW1tucyBjIGNzXV0gKGNvcmUvc3ltYm9sIG5zIChjbG9qdXJlLnN0cmluZy9qb2luIChjb25zIGMgY3MpKSkpKSldXG4gICAgICAgICAgICAgIFsxIChyZXR1cm4gJy8pXV0pKVxuXG4oZGVmIHJhdGlvXG4gIFwiR2VuZXJhdGVzIGEgYGNsb2p1cmUubGFuZy5SYXRpb2AuIFNocmlua3MgdG93YXJkIDAuIE5vdCBhbGwgdmFsdWVzIGdlbmVyYXRlZFxuICB3aWxsIGJlIHJhdGlvcywgYXMgbWFueSB2YWx1ZXMgcmV0dXJuZWQgYnkgYC9gIGFyZSBub3QgcmF0aW9zLlwiXG4gIChmbWFwXG4gICAgKGZuIFtbYSBiXV0gKC8gYSBiKSlcbiAgICAodHVwbGUgaW50XG4gICAgICAgICAgIChzdWNoLXRoYXQgKGNvbXBsZW1lbnQgemVybz8pIGludCkpKSlcblxuKGRlZiB1dWlkXG4gIFwiR2VuZXJhdGVzIGEgcmFuZG9tIHR5cGUtNCBVVUlELiBEb2VzIG5vdCBzaHJpbmsuXCJcbiAgKG5vLXNocmlua1xuICAgIz8oOmNsalxuICAgICAgOzsgdGhpcyBjb3VsZCBiZSBkb25lIHdpdGggY29tYmluYXRvcnMsIGJ1dCBkb2luZyBpdCBsb3ctbGV2ZWxcbiAgICAgIDs7IHNlZW1zIHRvIGJlIDEweCBmYXN0ZXJcbiAgICAgIChtYWtlLWdlblxuICAgICAgIChmbiBbcm5nIF9zaXplXVxuICAgICAgICAgKGNvcmUvbGV0IFtbcjEgcjJdIChyYW5kb20vc3BsaXQgcm5nKVxuICAgICAgICAgICAgICAgICAgICB4MSAoLT4gKHJhbmRvbS9yYW5kLWxvbmcgcjEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoYml0LWFuZCAtNDUwNTcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoYml0LW9yIDB4NDAwMCkpXG4gICAgICAgICAgICAgICAgICAgIHgyICgtPiAocmFuZG9tL3JhbmQtbG9uZyByMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChiaXQtb3IgLTkyMjMzNzIwMzY4NTQ3NzU4MDgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoYml0LWFuZCAtNDYxMTY4NjAxODQyNzM4NzkwNSkpXVxuICAgICAgICAgICAocm9zZS9tYWtlLXJvc2VcbiAgICAgICAgICAgIChqYXZhLnV0aWwuVVVJRC4geDEgeDIpXG4gICAgICAgICAgICBbXSkpKSlcblxuICAgICAgOmNsanNcbiAgICAgIDs7IHRoaXMgY291bGQgZGVmaW5pdGVseSBiZSBvcHRpbWl6ZWQgc28gdGhhdCBpdCBkb2Vzbid0IHJlcXVpcmVcbiAgICAgIDs7IGdlbmVyYXRpbmcgMzEgbnVtYmVyc1xuICAgICAgKGZtYXAgKGZuIFtuaWJibGVzXVxuICAgICAgICAgICAgICAobGV0Zm4gWyhoZXggW2lkeF0gKC50b1N0cmluZyAobmliYmxlcyBpZHgpIDE2KSldXG4gICAgICAgICAgICAgICAgKGNvcmUvbGV0IFtyaGV4ICgtPiAobmliYmxlcyAxNSkgKGJpdC1hbmQgMykgKCsgOCkgKC50b1N0cmluZyAxNikpXVxuICAgICAgICAgICAgICAgICAgKGNvcmUvdXVpZCAoc3RyIChoZXggMCkgIChoZXggMSkgIChoZXggMikgIChoZXggMylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaGV4IDQpICAoaGV4IDUpICAoaGV4IDYpICAoaGV4IDcpICBcIi1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChoZXggOCkgIChoZXggOSkgIChoZXggMTApIChoZXggMTEpIFwiLVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI0XCIgICAgICAoaGV4IDEyKSAoaGV4IDEzKSAoaGV4IDE0KSBcIi1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJoZXggICAgIChoZXggMTYpIChoZXggMTcpIChoZXggMTgpIFwiLVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGhleCAxOSkgKGhleCAyMCkgKGhleCAyMSkgKGhleCAyMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaGV4IDIzKSAoaGV4IDI0KSAoaGV4IDI1KSAoaGV4IDI2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChoZXggMjcpIChoZXggMjgpIChoZXggMjkpIChoZXggMzApKSkpKSlcbiAgICAgICAgICAgICh2ZWN0b3IgKGNob29zZSAwIDE1KSAzMSkpKSkpXG5cbihkZWYgc2ltcGxlLXR5cGVcbiAgKG9uZS1vZiBbaW50IGxhcmdlLWludGVnZXIgZG91YmxlIGNoYXIgc3RyaW5nIHJhdGlvIGJvb2xlYW4ga2V5d29yZFxuICAgICAgICAgICBrZXl3b3JkLW5zIHN5bWJvbCBzeW1ib2wtbnMgdXVpZF0pKVxuXG4oZGVmIHNpbXBsZS10eXBlLXByaW50YWJsZVxuICAob25lLW9mIFtpbnQgbGFyZ2UtaW50ZWdlciBkb3VibGUgY2hhci1hc2NpaSBzdHJpbmctYXNjaWkgcmF0aW8gYm9vbGVhblxuICAgICAgICAgICBrZXl3b3JkIGtleXdvcmQtbnMgc3ltYm9sIHN5bWJvbC1ucyB1dWlkXSkpXG5cbihkZWZuIGNvbnRhaW5lci10eXBlXG4gIFtpbm5lci10eXBlXVxuICAob25lLW9mIFsodmVjdG9yIGlubmVyLXR5cGUpXG4gICAgICAgICAgIChsaXN0IGlubmVyLXR5cGUpXG4gICAgICAgICAgIChtYXAgaW5uZXItdHlwZSBpbm5lci10eXBlKV0pKVxuXG4oZGVmbi0gcmVjdXJzaXZlLWhlbHBlclxuICBbY29udGFpbmVyLWdlbi1mbiBzY2FsYXItZ2VuIHNjYWxhci1zaXplIGNoaWxkcmVuLXNpemUgaGVpZ2h0XVxuICAoaWYgKHplcm8/IGhlaWdodClcbiAgICAocmVzaXplIHNjYWxhci1zaXplIHNjYWxhci1nZW4pXG4gICAgKHJlc2l6ZSBjaGlsZHJlbi1zaXplXG4gICAgICAgICAgICAoY29udGFpbmVyLWdlbi1mblxuICAgICAgICAgICAgICAocmVjdXJzaXZlLWhlbHBlclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci1nZW4tZm4gc2NhbGFyLWdlblxuICAgICAgICAgICAgICAgIHNjYWxhci1zaXplIGNoaWxkcmVuLXNpemUgKGRlYyBoZWlnaHQpKSkpKSlcblxuKGRlZm5cbiAgXns6YWRkZWQgXCIwLjUuOVwifVxuICByZWN1cnNpdmUtZ2VuXG4gIFwiVGhpcyBpcyBhIGhlbHBlciBmb3Igd3JpdGluZyByZWN1cnNpdmUgKHRyZWUtc2hhcGVkKSBnZW5lcmF0b3JzLiBUaGUgZmlyc3RcbiAgYXJndW1lbnQgc2hvdWxkIGJlIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIGdlbmVyYXRvciBhcyBhbiBhcmd1bWVudCwgYW5kXG4gIHByb2R1Y2VzIGFub3RoZXIgZ2VuZXJhdG9yIHRoYXQgJ2NvbnRhaW5zJyB0aGF0IGdlbmVyYXRvci4gVGhlIHZlY3RvciBmdW5jdGlvblxuICBpbiB0aGlzIG5hbWVzcGFjZSBpcyBhIHNpbXBsZSBleGFtcGxlLiBUaGUgc2Vjb25kIGFyZ3VtZW50IGlzIGEgc2NhbGFyXG4gIGdlbmVyYXRvciwgbGlrZSBib29sZWFuLiBGb3IgZXhhbXBsZSwgdG8gcHJvZHVjZSBhIHRyZWUgb2YgYm9vbGVhbnM6XG5cbiAgICAoZ2VuL3JlY3Vyc2l2ZS1nZW4gZ2VuL3ZlY3RvciBnZW4vYm9vbGVhbilcblxuICBWZWN0b3JzIG9yIG1hcHMgZWl0aGVyIHJlY3VycmluZyBvciBjb250YWluaW5nIGJvb2xlYW5zIG9yIGludGVnZXJzOlxuXG4gICAgKGdlbi9yZWN1cnNpdmUtZ2VuIChmbiBbaW5uZXJdIChnZW4vb25lLW9mIFsoZ2VuL3ZlY3RvciBpbm5lcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChnZW4vbWFwIGlubmVyIGlubmVyKV0pKVxuICAgICAgICAgICAgICAgICAgICAgICAoZ2VuL29uZS1vZiBbZ2VuL2Jvb2xlYW4gZ2VuL2ludF0pKVxuICBcIlxuICBbY29udGFpbmVyLWdlbi1mbiBzY2FsYXItZ2VuXVxuICAoYXNzZXJ0IChnZW5lcmF0b3I/IHNjYWxhci1nZW4pXG4gICAgICAgICAgXCJTZWNvbmQgYXJnIHRvIHJlY3Vyc2l2ZS1nZW4gbXVzdCBiZSBhIGdlbmVyYXRvclwiKVxuICAoc2l6ZWQgKGZuIFtzaXplXVxuICAgICAgICAgICAoYmluZCAoY2hvb3NlIDEgNSlcbiAgICAgICAgICAgICAgICAgKGZuIFtoZWlnaHRdIChjb3JlL2xldCBbY2hpbGRyZW4tc2l6ZSAoTWF0aC9wb3cgc2l6ZSAoLyAxIGhlaWdodCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVjdXJzaXZlLWhlbHBlciBjb250YWluZXItZ2VuLWZuIHNjYWxhci1nZW4gc2l6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbi1zaXplIGhlaWdodCkpKSkpKSlcblxuKGRlZiBhbnlcbiAgXCJBIHJlY3Vyc2l2ZSBnZW5lcmF0b3IgdGhhdCB3aWxsIGdlbmVyYXRlIG1hbnkgZGlmZmVyZW50LCBvZnRlbiBuZXN0ZWQsIHZhbHVlc1wiXG4gIChyZWN1cnNpdmUtZ2VuIGNvbnRhaW5lci10eXBlIHNpbXBsZS10eXBlKSlcblxuKGRlZiBhbnktcHJpbnRhYmxlXG4gIFwiTGlrZSBhbnksIGJ1dCBhdm9pZHMgY2hhcmFjdGVycyB0aGF0IHRoZSBzaGVsbCB3aWxsIGludGVycHJldCBhcyBhY3Rpb25zLFxuICBsaWtlIDcgYW5kIDE0IChiZWxsIGFuZCBhbHRlcm5hdGUgY2hhcmFjdGVyIHNldCBjb21tYW5kKVwiXG4gIChyZWN1cnNpdmUtZ2VuIGNvbnRhaW5lci10eXBlIHNpbXBsZS10eXBlLXByaW50YWJsZSkpXG5cblxuOzsgTWFjcm9zXG47OyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuKGRlZm1hY3JvIGxldFxuICBcIk1hY3JvIGZvciBidWlsZGluZyBnZW5lcmF0b3JzIHVzaW5nIHZhbHVlcyBmcm9tIG90aGVyIGdlbmVyYXRvcnMuXG4gIFVzZXMgYSBiaW5kaW5nIHZlY3RvciB3aXRoIHRoZSBzYW1lIHN5bnRheCBhcyBjbG9qdXJlLmNvcmUvbGV0LFxuICB3aGVyZSB0aGUgcmlnaHQtaGFuZCBzaWRlIG9mIHRoZSBiaW5kaW5nIHBhaXJzIGFyZSBnZW5lcmF0b3JzLCBhbmRcbiAgdGhlIGxlZnQtaGFuZCBzaWRlIGFyZSBuYW1lcyAob3IgZGVzdHJ1Y3R1cmluZyBmb3JtcykgZm9yIGdlbmVyYXRlZFxuICB2YWx1ZXMuXG5cbiAgU3Vic2VxdWVudCBnZW5lcmF0b3IgZXhwcmVzc2lvbnMgY2FuIHJlZmVyIHRvIHRoZSBwcmV2aW91c2x5IGJvdW5kXG4gIHZhbHVlcywgaW4gdGhlIHNhbWUgd2F5IGFzIGNsb2p1cmUuY29yZS9sZXQuXG5cbiAgVGhlIGJvZHkgb2YgdGhlIGxldCBjYW4gYmUgZWl0aGVyIGEgdmFsdWUgb3IgYSBnZW5lcmF0b3IsIGFuZCBkb2VzXG4gIHRoZSBleHBlY3RlZCB0aGluZyBpbiBlaXRoZXIgY2FzZS4gSW4gdGhpcyB3YXkgbGV0IHByb3ZpZGVzIHRoZVxuICBmdW5jdGlvbmFsaXR5IG9mIGJvdGggYGJpbmRgIGFuZCBgZm1hcGAuXG5cbiAgRXhhbXBsZXM6XG5cbiAgICAoZ2VuL2xldCBbc3RycyAoZ2VuL25vdC1lbXB0eSAoZ2VuL2xpc3QgZ2VuL3N0cmluZykpXG4gICAgICAgICAgICAgIHMgKGdlbi9lbGVtZW50cyBzdHJzKV1cbiAgICAgIHs6c29tZS1zdHJpbmdzIHN0cnNcbiAgICAgICA6b25lLW9mLXRob3NlLXN0cmluZ3Mgc30pXG5cbiAgICA7OyBnZW5lcmF0ZXMgY29sbGVjdGlvbnMgb2YgXFxcInVzZXJzXFxcIiB0aGF0IGhhdmUgaW50ZWdlciBJRHNcbiAgICA7OyBmcm9tIDAuLi5OLTEsIGJ1dCBhcmUgaW4gYSByYW5kb20gb3JkZXJcbiAgICAoZ2VuL2xldCBbdXNlcnMgKGdlbi9saXN0IChnZW4vaGFzaC1tYXAgOm5hbWUgZ2VuL3N0cmluZy1hc2NpaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWdlIGdlbi9uYXQpKV1cbiAgICAgICgtPj4gdXNlcnNcbiAgICAgICAgICAgKG1hcCAjKGFzc29jICUyIDppZCAlMSkgKHJhbmdlKSlcbiAgICAgICAgICAgKGdlbi9zaHVmZmxlKSkpXCJcbiAgW2JpbmRpbmdzICYgYm9keV1cbiAgKGFzc2VydCAodmVjdG9yPyBiaW5kaW5ncylcbiAgICAgICAgICBcIkZpcnN0IGFyZyB0byBnZW4vbGV0IG11c3QgYmUgYSB2ZWN0b3Igb2YgYmluZGluZ3MuXCIpXG4gIChhc3NlcnQgKGV2ZW4/IChjb3VudCBiaW5kaW5ncykpXG4gICAgICAgICAgXCJnZW4vbGV0IHJlcXVpcmVzIGFuIGV2ZW4gbnVtYmVyIG9mIGZvcm1zIGluIGJpbmRpbmcgdmVjdG9yXCIpXG4gIChpZiAoZW1wdHk/IGJpbmRpbmdzKVxuICAgIGAoY29yZS9sZXQgW3ZhbCMgKGRvIH5AYm9keSldXG4gICAgICAgKGlmIChnZW5lcmF0b3I/IHZhbCMpXG4gICAgICAgICB2YWwjXG4gICAgICAgICAocmV0dXJuIHZhbCMpKSlcbiAgICAoY29yZS9sZXQgW1tiaW5kaW5nIGdlbiAmIG1vcmVdIGJpbmRpbmdzXVxuICAgICAgYChiaW5kIH5nZW4gKGZuIFt+YmluZGluZ10gKGxldCBbfkBtb3JlXSB+QGJvZHkpKSkpKSlcbiJdfQ==