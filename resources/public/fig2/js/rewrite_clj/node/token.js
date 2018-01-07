// Compiled by ClojureScript 1.9.908 {}
goog.provide('rewrite_clj.node.token');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {rewrite_clj.node.token.Object}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.token.TokenNode = (function (value,string_value,__meta,__extmap,__hash){
this.value = value;
this.string_value = string_value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rewrite_clj.node.token.TokenNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});


rewrite_clj.node.token.TokenNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9051__auto__,k__9052__auto__){
var self__ = this;
var this__9051__auto____$1 = this;
return this__9051__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9052__auto__,null);
});


rewrite_clj.node.token.TokenNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9053__auto__,k24810,else__9054__auto__){
var self__ = this;
var this__9053__auto____$1 = this;
var G__24814 = k24810;
var G__24814__$1 = (((G__24814 instanceof cljs.core.Keyword))?G__24814.fqn:null);
switch (G__24814__$1) {
case "value":
return self__.value;

break;
case "string-value":
return self__.string_value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24810,else__9054__auto__);

}
});


rewrite_clj.node.token.TokenNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9065__auto__,writer__9066__auto__,opts__9067__auto__){
var self__ = this;
var this__9065__auto____$1 = this;
var pr_pair__9068__auto__ = ((function (this__9065__auto____$1){
return (function (keyval__9069__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9066__auto__,cljs.core.pr_writer,""," ","",opts__9067__auto__,keyval__9069__auto__);
});})(this__9065__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9066__auto__,pr_pair__9068__auto__,"#rewrite-clj.node.token.TokenNode{",", ","}",opts__9067__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"string-value","string-value",1109600561),self__.string_value],null))], null),self__.__extmap));
});


rewrite_clj.node.token.TokenNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24809){
var self__ = this;
var G__24809__$1 = this;
return (new cljs.core.RecordIter((0),G__24809__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"string-value","string-value",1109600561)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


rewrite_clj.node.token.TokenNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9049__auto__){
var self__ = this;
var this__9049__auto____$1 = this;
return self__.__meta;
});


rewrite_clj.node.token.TokenNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9046__auto__){
var self__ = this;
var this__9046__auto____$1 = this;
return (new rewrite_clj.node.token.TokenNode(self__.value,self__.string_value,self__.__meta,self__.__extmap,self__.__hash));
});


rewrite_clj.node.token.TokenNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9055__auto__){
var self__ = this;
var this__9055__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});


rewrite_clj.node.token.TokenNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9047__auto__){
var self__ = this;
var this__9047__auto____$1 = this;
var h__8819__auto__ = self__.__hash;
if(!((h__8819__auto__ == null))){
return h__8819__auto__;
} else {
var h__8819__auto____$1 = ((function (h__8819__auto__,this__9047__auto____$1){
return (function (coll__9048__auto__){
return (1106307029 ^ cljs.core.hash_unordered_coll.call(null,coll__9048__auto__));
});})(h__8819__auto__,this__9047__auto____$1))
.call(null,this__9047__auto____$1);
self__.__hash = h__8819__auto____$1;

return h__8819__auto____$1;
}
});


rewrite_clj.node.token.TokenNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24811,other24812){
var self__ = this;
var this24811__$1 = this;
return (!((other24812 == null))) && ((this24811__$1.constructor === other24812.constructor)) && (cljs.core._EQ_.call(null,this24811__$1.value,other24812.value)) && (cljs.core._EQ_.call(null,this24811__$1.string_value,other24812.string_value)) && (cljs.core._EQ_.call(null,this24811__$1.__extmap,other24812.__extmap));
});


rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;


rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"token","token",-1211463215);
});


rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});


rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});


rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.string_value.length;
});


rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.string_value;
});


rewrite_clj.node.token.TokenNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9060__auto__,k__9061__auto__){
var self__ = this;
var this__9060__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"string-value","string-value",1109600561),null], null), null),k__9061__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9060__auto____$1),self__.__meta),k__9061__auto__);
} else {
return (new rewrite_clj.node.token.TokenNode(self__.value,self__.string_value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9061__auto__)),null));
}
});


rewrite_clj.node.token.TokenNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9058__auto__,k__9059__auto__,G__24809){
var self__ = this;
var this__9058__auto____$1 = this;
var pred__24815 = cljs.core.keyword_identical_QMARK_;
var expr__24816 = k__9059__auto__;
if(cljs.core.truth_(pred__24815.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__24816))){
return (new rewrite_clj.node.token.TokenNode(G__24809,self__.string_value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24815.call(null,new cljs.core.Keyword(null,"string-value","string-value",1109600561),expr__24816))){
return (new rewrite_clj.node.token.TokenNode(self__.value,G__24809,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.token.TokenNode(self__.value,self__.string_value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9059__auto__,G__24809),null));
}
}
});


rewrite_clj.node.token.TokenNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9063__auto__){
var self__ = this;
var this__9063__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"string-value","string-value",1109600561),self__.string_value],null))], null),self__.__extmap));
});


rewrite_clj.node.token.TokenNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9050__auto__,G__24809){
var self__ = this;
var this__9050__auto____$1 = this;
return (new rewrite_clj.node.token.TokenNode(self__.value,self__.string_value,G__24809,self__.__extmap,self__.__hash));
});


rewrite_clj.node.token.TokenNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9056__auto__,entry__9057__auto__){
var self__ = this;
var this__9056__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9057__auto__)){
return this__9056__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9057__auto__,(0)),cljs.core._nth.call(null,entry__9057__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9056__auto____$1,entry__9057__auto__);
}
});

rewrite_clj.node.token.TokenNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"string-value","string-value",-1544835208,null)], null);
});

rewrite_clj.node.token.TokenNode.cljs$lang$type = true;

rewrite_clj.node.token.TokenNode.cljs$lang$ctorPrSeq = (function (this__9089__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.token/TokenNode");
});

rewrite_clj.node.token.TokenNode.cljs$lang$ctorPrWriter = (function (this__9089__auto__,writer__9090__auto__){
return cljs.core._write.call(null,writer__9090__auto__,"rewrite-clj.node.token/TokenNode");
});

rewrite_clj.node.token.__GT_TokenNode = (function rewrite_clj$node$token$__GT_TokenNode(value,string_value){
return (new rewrite_clj.node.token.TokenNode(value,string_value,null,null,null));
});

rewrite_clj.node.token.map__GT_TokenNode = (function rewrite_clj$node$token$map__GT_TokenNode(G__24813){
return (new rewrite_clj.node.token.TokenNode(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__24813),new cljs.core.Keyword(null,"string-value","string-value",1109600561).cljs$core$IFn$_invoke$arity$1(G__24813),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__24813,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"string-value","string-value",1109600561))),null));
});

/**
 * Create node for an unspecified EDN token.
 */
rewrite_clj.node.token.token_node = (function rewrite_clj$node$token$token_node(var_args){
var G__24820 = arguments.length;
switch (G__24820) {
case 1:
return rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$1 = (function (value){
return rewrite_clj.node.token.token_node.call(null,value,cljs.core.pr_str.call(null,value));
});

rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$2 = (function (value,string_value){
return rewrite_clj.node.token.__GT_TokenNode.call(null,value,string_value);
});

rewrite_clj.node.token.token_node.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=token.js.map
