// Compiled by ClojureScript 1.9.908 {}
goog.provide('rewrite_clj.node.reader_macro');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.node.whitespace');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {rewrite_clj.node.reader_macro.Object}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
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
rewrite_clj.node.reader_macro.ReaderNode = (function (tag,prefix,suffix,sexpr_fn,sexpr_count,children,__meta,__extmap,__hash){
this.tag = tag;
this.prefix = prefix;
this.suffix = suffix;
this.sexpr_fn = sexpr_fn;
this.sexpr_count = sexpr_count;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rewrite_clj.node.reader_macro.ReaderNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});


rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9051__auto__,k__9052__auto__){
var self__ = this;
var this__9051__auto____$1 = this;
return this__9051__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9052__auto__,null);
});


rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9053__auto__,k24867,else__9054__auto__){
var self__ = this;
var this__9053__auto____$1 = this;
var G__24871 = k24867;
var G__24871__$1 = (((G__24871 instanceof cljs.core.Keyword))?G__24871.fqn:null);
switch (G__24871__$1) {
case "tag":
return self__.tag;

break;
case "prefix":
return self__.prefix;

break;
case "suffix":
return self__.suffix;

break;
case "sexpr-fn":
return self__.sexpr_fn;

break;
case "sexpr-count":
return self__.sexpr_count;

break;
case "children":
return self__.children;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24867,else__9054__auto__);

}
});


rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9065__auto__,writer__9066__auto__,opts__9067__auto__){
var self__ = this;
var this__9065__auto____$1 = this;
var pr_pair__9068__auto__ = ((function (this__9065__auto____$1){
return (function (keyval__9069__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9066__auto__,cljs.core.pr_writer,""," ","",opts__9067__auto__,keyval__9069__auto__);
});})(this__9065__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9066__auto__,pr_pair__9068__auto__,"#rewrite-clj.node.reader-macro.ReaderNode{",", ","}",opts__9067__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),self__.sexpr_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),self__.sexpr_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
});


rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24866){
var self__ = this;
var G__24866__$1 = this;
return (new cljs.core.RecordIter((0),G__24866__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9049__auto__){
var self__ = this;
var this__9049__auto____$1 = this;
return self__.__meta;
});


rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9046__auto__){
var self__ = this;
var this__9046__auto____$1 = this;
return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,self__.__hash));
});


rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9055__auto__){
var self__ = this;
var this__9055__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});


rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9047__auto__){
var self__ = this;
var this__9047__auto____$1 = this;
var h__8819__auto__ = self__.__hash;
if(!((h__8819__auto__ == null))){
return h__8819__auto__;
} else {
var h__8819__auto____$1 = ((function (h__8819__auto__,this__9047__auto____$1){
return (function (coll__9048__auto__){
return (1051800113 ^ cljs.core.hash_unordered_coll.call(null,coll__9048__auto__));
});})(h__8819__auto__,this__9047__auto____$1))
.call(null,this__9047__auto____$1);
self__.__hash = h__8819__auto____$1;

return h__8819__auto____$1;
}
});


rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24868,other24869){
var self__ = this;
var this24868__$1 = this;
return (!((other24869 == null))) && ((this24868__$1.constructor === other24869.constructor)) && (cljs.core._EQ_.call(null,this24868__$1.tag,other24869.tag)) && (cljs.core._EQ_.call(null,this24868__$1.prefix,other24869.prefix)) && (cljs.core._EQ_.call(null,this24868__$1.suffix,other24869.suffix)) && (cljs.core._EQ_.call(null,this24868__$1.sexpr_fn,other24869.sexpr_fn)) && (cljs.core._EQ_.call(null,this24868__$1.sexpr_count,other24869.sexpr_count)) && (cljs.core._EQ_.call(null,this24868__$1.children,other24869.children)) && (cljs.core._EQ_.call(null,this24868__$1.__extmap,other24869.__extmap));
});


rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;


rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.tag;
});


rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.not.call(null,self__.sexpr_fn);
});


rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.sexpr_fn)){
return self__.sexpr_fn.call(null,rewrite_clj.node.protocols.sexprs.call(null,self__.children));
} else {
throw (new Error("Unsupported operation"));
}
});


rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (((rewrite_clj.node.protocols.sum_lengths.call(null,self__.children) + (1)) + cljs.core.count.call(null,self__.prefix)) + cljs.core.count.call(null,self__.suffix));
});


rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.protocols.concat_strings.call(null,self__.children)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.suffix)].join('');
});


rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9060__auto__,k__9061__auto__){
var self__ = this;
var this__9060__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),null], null), null),k__9061__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9060__auto____$1),self__.__meta),k__9061__auto__);
} else {
return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9061__auto__)),null));
}
});


rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL;


rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
});


rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.sexpr_count)){
rewrite_clj.node.protocols.assert_sexpr_count.call(null,children_SINGLEQUOTE_,self__.sexpr_count);
} else {
}

return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
});


rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9058__auto__,k__9059__auto__,G__24866){
var self__ = this;
var this__9058__auto____$1 = this;
var pred__24872 = cljs.core.keyword_identical_QMARK_;
var expr__24873 = k__9059__auto__;
if(cljs.core.truth_(pred__24872.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__24873))){
return (new rewrite_clj.node.reader_macro.ReaderNode(G__24866,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24872.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__24873))){
return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,G__24866,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24872.call(null,new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__24873))){
return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,G__24866,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24872.call(null,new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),expr__24873))){
return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,G__24866,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24872.call(null,new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),expr__24873))){
return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,G__24866,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24872.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__24873))){
return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,G__24866,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9059__auto__,G__24866),null));
}
}
}
}
}
}
});


rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9063__auto__){
var self__ = this;
var this__9063__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),self__.sexpr_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),self__.sexpr_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
});


rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9050__auto__,G__24866){
var self__ = this;
var this__9050__auto____$1 = this;
return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,G__24866,self__.__extmap,self__.__hash));
});


rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9056__auto__,entry__9057__auto__){
var self__ = this;
var this__9056__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9057__auto__)){
return this__9056__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9057__auto__,(0)),cljs.core._nth.call(null,entry__9057__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9056__auto____$1,entry__9057__auto__);
}
});

rewrite_clj.node.reader_macro.ReaderNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"sexpr-fn","sexpr-fn",425590113,null),new cljs.core.Symbol(null,"sexpr-count","sexpr-count",-1763900812,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null);
});

rewrite_clj.node.reader_macro.ReaderNode.cljs$lang$type = true;

rewrite_clj.node.reader_macro.ReaderNode.cljs$lang$ctorPrSeq = (function (this__9089__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.reader-macro/ReaderNode");
});

rewrite_clj.node.reader_macro.ReaderNode.cljs$lang$ctorPrWriter = (function (this__9089__auto__,writer__9090__auto__){
return cljs.core._write.call(null,writer__9090__auto__,"rewrite-clj.node.reader-macro/ReaderNode");
});

rewrite_clj.node.reader_macro.__GT_ReaderNode = (function rewrite_clj$node$reader_macro$__GT_ReaderNode(tag,prefix,suffix,sexpr_fn,sexpr_count,children){
return (new rewrite_clj.node.reader_macro.ReaderNode(tag,prefix,suffix,sexpr_fn,sexpr_count,children,null,null,null));
});

rewrite_clj.node.reader_macro.map__GT_ReaderNode = (function rewrite_clj$node$reader_macro$map__GT_ReaderNode(G__24870){
return (new rewrite_clj.node.reader_macro.ReaderNode(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__24870),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__24870),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__24870),new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414).cljs$core$IFn$_invoke$arity$1(G__24870),new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957).cljs$core$IFn$_invoke$arity$1(G__24870),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__24870),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__24870,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),new cljs.core.Keyword(null,"children","children",-940561982))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {rewrite_clj.node.reader_macro.Object}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
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
rewrite_clj.node.reader_macro.ReaderMacroNode = (function (children,__meta,__extmap,__hash){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});


rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9051__auto__,k__9052__auto__){
var self__ = this;
var this__9051__auto____$1 = this;
return this__9051__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9052__auto__,null);
});


rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9053__auto__,k24877,else__9054__auto__){
var self__ = this;
var this__9053__auto____$1 = this;
var G__24881 = k24877;
var G__24881__$1 = (((G__24881 instanceof cljs.core.Keyword))?G__24881.fqn:null);
switch (G__24881__$1) {
case "children":
return self__.children;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24877,else__9054__auto__);

}
});


rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9065__auto__,writer__9066__auto__,opts__9067__auto__){
var self__ = this;
var this__9065__auto____$1 = this;
var pr_pair__9068__auto__ = ((function (this__9065__auto____$1){
return (function (keyval__9069__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9066__auto__,cljs.core.pr_writer,""," ","",opts__9067__auto__,keyval__9069__auto__);
});})(this__9065__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9066__auto__,pr_pair__9068__auto__,"#rewrite-clj.node.reader-macro.ReaderMacroNode{",", ","}",opts__9067__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
});


rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24876){
var self__ = this;
var G__24876__$1 = this;
return (new cljs.core.RecordIter((0),G__24876__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9049__auto__){
var self__ = this;
var this__9049__auto____$1 = this;
return self__.__meta;
});


rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9046__auto__){
var self__ = this;
var this__9046__auto____$1 = this;
return (new rewrite_clj.node.reader_macro.ReaderMacroNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
});


rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9055__auto__){
var self__ = this;
var this__9055__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});


rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9047__auto__){
var self__ = this;
var this__9047__auto____$1 = this;
var h__8819__auto__ = self__.__hash;
if(!((h__8819__auto__ == null))){
return h__8819__auto__;
} else {
var h__8819__auto____$1 = ((function (h__8819__auto__,this__9047__auto____$1){
return (function (coll__9048__auto__){
return (856986356 ^ cljs.core.hash_unordered_coll.call(null,coll__9048__auto__));
});})(h__8819__auto__,this__9047__auto____$1))
.call(null,this__9047__auto____$1);
self__.__hash = h__8819__auto____$1;

return h__8819__auto____$1;
}
});


rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24878,other24879){
var self__ = this;
var this24878__$1 = this;
return (!((other24879 == null))) && ((this24878__$1.constructor === other24879.constructor)) && (cljs.core._EQ_.call(null,this24878__$1.children,other24879.children)) && (cljs.core._EQ_.call(null,this24878__$1.__extmap,other24879.__extmap));
});


rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;


rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422);
});


rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});


rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,(function (){var x__9317__auto__ = this$__$1.rewrite_clj$node$protocols$Node$string$arity$1(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),new cljs.core.Symbol(null,"read-string","read-string",-558384455,null));
});


rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (rewrite_clj.node.protocols.sum_lengths.call(null,self__.children) + (1));
});


rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.protocols.concat_strings.call(null,self__.children))].join('');
});


rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9060__auto__,k__9061__auto__){
var self__ = this;
var this__9060__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),null], null), null),k__9061__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9060__auto____$1),self__.__meta),k__9061__auto__);
} else {
return (new rewrite_clj.node.reader_macro.ReaderMacroNode(self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9061__auto__)),null));
}
});


rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL;


rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
});


rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
rewrite_clj.node.protocols.assert_sexpr_count.call(null,children_SINGLEQUOTE_,(2));

return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
});


rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9058__auto__,k__9059__auto__,G__24876){
var self__ = this;
var this__9058__auto____$1 = this;
var pred__24882 = cljs.core.keyword_identical_QMARK_;
var expr__24883 = k__9059__auto__;
if(cljs.core.truth_(pred__24882.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__24883))){
return (new rewrite_clj.node.reader_macro.ReaderMacroNode(G__24876,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.reader_macro.ReaderMacroNode(self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9059__auto__,G__24876),null));
}
});


rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9063__auto__){
var self__ = this;
var this__9063__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
});


rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9050__auto__,G__24876){
var self__ = this;
var this__9050__auto____$1 = this;
return (new rewrite_clj.node.reader_macro.ReaderMacroNode(self__.children,G__24876,self__.__extmap,self__.__hash));
});


rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9056__auto__,entry__9057__auto__){
var self__ = this;
var this__9056__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9057__auto__)){
return this__9056__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9057__auto__,(0)),cljs.core._nth.call(null,entry__9057__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9056__auto____$1,entry__9057__auto__);
}
});

rewrite_clj.node.reader_macro.ReaderMacroNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null)], null);
});

rewrite_clj.node.reader_macro.ReaderMacroNode.cljs$lang$type = true;

rewrite_clj.node.reader_macro.ReaderMacroNode.cljs$lang$ctorPrSeq = (function (this__9089__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.reader-macro/ReaderMacroNode");
});

rewrite_clj.node.reader_macro.ReaderMacroNode.cljs$lang$ctorPrWriter = (function (this__9089__auto__,writer__9090__auto__){
return cljs.core._write.call(null,writer__9090__auto__,"rewrite-clj.node.reader-macro/ReaderMacroNode");
});

rewrite_clj.node.reader_macro.__GT_ReaderMacroNode = (function rewrite_clj$node$reader_macro$__GT_ReaderMacroNode(children){
return (new rewrite_clj.node.reader_macro.ReaderMacroNode(children,null,null,null));
});

rewrite_clj.node.reader_macro.map__GT_ReaderMacroNode = (function rewrite_clj$node$reader_macro$map__GT_ReaderMacroNode(G__24880){
return (new rewrite_clj.node.reader_macro.ReaderMacroNode(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__24880),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__24880,new cljs.core.Keyword(null,"children","children",-940561982))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {rewrite_clj.node.reader_macro.Object}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
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
rewrite_clj.node.reader_macro.DerefNode = (function (children,__meta,__extmap,__hash){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rewrite_clj.node.reader_macro.DerefNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});


rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9051__auto__,k__9052__auto__){
var self__ = this;
var this__9051__auto____$1 = this;
return this__9051__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9052__auto__,null);
});


rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9053__auto__,k24887,else__9054__auto__){
var self__ = this;
var this__9053__auto____$1 = this;
var G__24891 = k24887;
var G__24891__$1 = (((G__24891 instanceof cljs.core.Keyword))?G__24891.fqn:null);
switch (G__24891__$1) {
case "children":
return self__.children;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24887,else__9054__auto__);

}
});


rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9065__auto__,writer__9066__auto__,opts__9067__auto__){
var self__ = this;
var this__9065__auto____$1 = this;
var pr_pair__9068__auto__ = ((function (this__9065__auto____$1){
return (function (keyval__9069__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9066__auto__,cljs.core.pr_writer,""," ","",opts__9067__auto__,keyval__9069__auto__);
});})(this__9065__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9066__auto__,pr_pair__9068__auto__,"#rewrite-clj.node.reader-macro.DerefNode{",", ","}",opts__9067__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
});


rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24886){
var self__ = this;
var G__24886__$1 = this;
return (new cljs.core.RecordIter((0),G__24886__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9049__auto__){
var self__ = this;
var this__9049__auto____$1 = this;
return self__.__meta;
});


rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9046__auto__){
var self__ = this;
var this__9046__auto____$1 = this;
return (new rewrite_clj.node.reader_macro.DerefNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
});


rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9055__auto__){
var self__ = this;
var this__9055__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});


rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9047__auto__){
var self__ = this;
var this__9047__auto____$1 = this;
var h__8819__auto__ = self__.__hash;
if(!((h__8819__auto__ == null))){
return h__8819__auto__;
} else {
var h__8819__auto____$1 = ((function (h__8819__auto__,this__9047__auto____$1){
return (function (coll__9048__auto__){
return (-1560233006 ^ cljs.core.hash_unordered_coll.call(null,coll__9048__auto__));
});})(h__8819__auto__,this__9047__auto____$1))
.call(null,this__9047__auto____$1);
self__.__hash = h__8819__auto____$1;

return h__8819__auto____$1;
}
});


rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24888,other24889){
var self__ = this;
var this24888__$1 = this;
return (!((other24889 == null))) && ((this24888__$1.constructor === other24889.constructor)) && (cljs.core._EQ_.call(null,this24888__$1.children,other24889.children)) && (cljs.core._EQ_.call(null,this24888__$1.__extmap,other24889.__extmap));
});


rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;


rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"deref","deref",-145586795);
});


rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});


rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"deref","deref",1494944732,null),rewrite_clj.node.protocols.sexprs.call(null,self__.children));
});


rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (rewrite_clj.node.protocols.sum_lengths.call(null,self__.children) + (1));
});


rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.protocols.concat_strings.call(null,self__.children))].join('');
});


rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9060__auto__,k__9061__auto__){
var self__ = this;
var this__9060__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),null], null), null),k__9061__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9060__auto____$1),self__.__meta),k__9061__auto__);
} else {
return (new rewrite_clj.node.reader_macro.DerefNode(self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9061__auto__)),null));
}
});


rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL;


rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
});


rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
rewrite_clj.node.protocols.assert_sexpr_count.call(null,children_SINGLEQUOTE_,(1));

return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
});


rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9058__auto__,k__9059__auto__,G__24886){
var self__ = this;
var this__9058__auto____$1 = this;
var pred__24892 = cljs.core.keyword_identical_QMARK_;
var expr__24893 = k__9059__auto__;
if(cljs.core.truth_(pred__24892.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__24893))){
return (new rewrite_clj.node.reader_macro.DerefNode(G__24886,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.reader_macro.DerefNode(self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9059__auto__,G__24886),null));
}
});


rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9063__auto__){
var self__ = this;
var this__9063__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
});


rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9050__auto__,G__24886){
var self__ = this;
var this__9050__auto____$1 = this;
return (new rewrite_clj.node.reader_macro.DerefNode(self__.children,G__24886,self__.__extmap,self__.__hash));
});


rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9056__auto__,entry__9057__auto__){
var self__ = this;
var this__9056__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9057__auto__)){
return this__9056__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9057__auto__,(0)),cljs.core._nth.call(null,entry__9057__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9056__auto____$1,entry__9057__auto__);
}
});

rewrite_clj.node.reader_macro.DerefNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null)], null);
});

rewrite_clj.node.reader_macro.DerefNode.cljs$lang$type = true;

rewrite_clj.node.reader_macro.DerefNode.cljs$lang$ctorPrSeq = (function (this__9089__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.reader-macro/DerefNode");
});

rewrite_clj.node.reader_macro.DerefNode.cljs$lang$ctorPrWriter = (function (this__9089__auto__,writer__9090__auto__){
return cljs.core._write.call(null,writer__9090__auto__,"rewrite-clj.node.reader-macro/DerefNode");
});

rewrite_clj.node.reader_macro.__GT_DerefNode = (function rewrite_clj$node$reader_macro$__GT_DerefNode(children){
return (new rewrite_clj.node.reader_macro.DerefNode(children,null,null,null));
});

rewrite_clj.node.reader_macro.map__GT_DerefNode = (function rewrite_clj$node$reader_macro$map__GT_DerefNode(G__24890){
return (new rewrite_clj.node.reader_macro.DerefNode(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__24890),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__24890,new cljs.core.Keyword(null,"children","children",-940561982))),null));
});

rewrite_clj.node.reader_macro.__GT_node = (function rewrite_clj$node$reader_macro$__GT_node(tag,prefix,suffix,sexpr_fn,sexpr_count,children){
if(cljs.core.truth_(sexpr_count)){
rewrite_clj.node.protocols.assert_sexpr_count.call(null,children,sexpr_count);
} else {
}

return rewrite_clj.node.reader_macro.__GT_ReaderNode.call(null,tag,prefix,suffix,sexpr_fn,sexpr_count,children);
});
/**
 * Create node representing a var.
 * Takes either a seq of nodes or a single one.
 */
rewrite_clj.node.reader_macro.var_node = (function rewrite_clj$node$reader_macro$var_node(children){
while(true){
if(cljs.core.sequential_QMARK_.call(null,children)){
return rewrite_clj.node.reader_macro.__GT_node.call(null,new cljs.core.Keyword(null,"var","var",-769682797),"'","",((function (children){
return (function (p1__24896_SHARP_){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"var","var",870848730,null),p1__24896_SHARP_);
});})(children))
,(1),children);
} else {
var G__24897 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__24897;
continue;
}
break;
}
});
/**
 * Create node representing an inline evaluation. (`#=...`)
 * Takes either a seq of nodes or a single one.
 */
rewrite_clj.node.reader_macro.eval_node = (function rewrite_clj$node$reader_macro$eval_node(children){
while(true){
if(cljs.core.sequential_QMARK_.call(null,children)){
return rewrite_clj.node.reader_macro.__GT_node.call(null,new cljs.core.Keyword(null,"eval","eval",-1103567905),"=","",((function (children){
return (function (p1__24898_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9317__auto__ = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),p1__24898_SHARP_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),new cljs.core.Symbol(null,"eval","eval",536963622,null));
});})(children))
,(1),children);
} else {
var G__24899 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__24899;
continue;
}
break;
}
});
/**
 * Create node representing a reader macro. (`#... ...`)
 */
rewrite_clj.node.reader_macro.reader_macro_node = (function rewrite_clj$node$reader_macro$reader_macro_node(var_args){
var G__24901 = arguments.length;
switch (G__24901) {
case 1:
return rewrite_clj.node.reader_macro.reader_macro_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.node.reader_macro.reader_macro_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rewrite_clj.node.reader_macro.reader_macro_node.cljs$core$IFn$_invoke$arity$1 = (function (children){
return rewrite_clj.node.reader_macro.__GT_ReaderMacroNode.call(null,children);
});

rewrite_clj.node.reader_macro.reader_macro_node.cljs$core$IFn$_invoke$arity$2 = (function (macro_node,form_node){
return rewrite_clj.node.reader_macro.__GT_ReaderMacroNode.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [macro_node,rewrite_clj.node.whitespace.spaces.call(null,(1)),form_node], null));
});

rewrite_clj.node.reader_macro.reader_macro_node.cljs$lang$maxFixedArity = 2;

/**
 * Create node representing the dereferencing of a form. (`@...`)
 * Takes either a seq of nodes or a single one.
 */
rewrite_clj.node.reader_macro.deref_node = (function rewrite_clj$node$reader_macro$deref_node(children){
if(cljs.core.sequential_QMARK_.call(null,children)){
return rewrite_clj.node.reader_macro.__GT_DerefNode.call(null,children);
} else {
return rewrite_clj.node.reader_macro.__GT_DerefNode.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null));
}
});

//# sourceMappingURL=reader_macro.js.map
