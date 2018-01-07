// Compiled by ClojureScript 1.9.908 {}
goog.provide('rewrite_clj.node.quote');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {rewrite_clj.node.quote.Object}
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
rewrite_clj.node.quote.QuoteNode = (function (tag,prefix,sym,children,__meta,__extmap,__hash){
this.tag = tag;
this.prefix = prefix;
this.sym = sym;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rewrite_clj.node.quote.QuoteNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});


rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9051__auto__,k__9052__auto__){
var self__ = this;
var this__9051__auto____$1 = this;
return this__9051__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9052__auto__,null);
});


rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9053__auto__,k24939,else__9054__auto__){
var self__ = this;
var this__9053__auto____$1 = this;
var G__24943 = k24939;
var G__24943__$1 = (((G__24943 instanceof cljs.core.Keyword))?G__24943.fqn:null);
switch (G__24943__$1) {
case "tag":
return self__.tag;

break;
case "prefix":
return self__.prefix;

break;
case "sym":
return self__.sym;

break;
case "children":
return self__.children;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24939,else__9054__auto__);

}
});


rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9065__auto__,writer__9066__auto__,opts__9067__auto__){
var self__ = this;
var this__9065__auto____$1 = this;
var pr_pair__9068__auto__ = ((function (this__9065__auto____$1){
return (function (keyval__9069__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9066__auto__,cljs.core.pr_writer,""," ","",opts__9067__auto__,keyval__9069__auto__);
});})(this__9065__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9066__auto__,pr_pair__9068__auto__,"#rewrite-clj.node.quote.QuoteNode{",", ","}",opts__9067__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
});


rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24938){
var self__ = this;
var G__24938__$1 = this;
return (new cljs.core.RecordIter((0),G__24938__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9049__auto__){
var self__ = this;
var this__9049__auto____$1 = this;
return self__.__meta;
});


rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9046__auto__){
var self__ = this;
var this__9046__auto____$1 = this;
return (new rewrite_clj.node.quote.QuoteNode(self__.tag,self__.prefix,self__.sym,self__.children,self__.__meta,self__.__extmap,self__.__hash));
});


rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9055__auto__){
var self__ = this;
var this__9055__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});


rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9047__auto__){
var self__ = this;
var this__9047__auto____$1 = this;
var h__8819__auto__ = self__.__hash;
if(!((h__8819__auto__ == null))){
return h__8819__auto__;
} else {
var h__8819__auto____$1 = ((function (h__8819__auto__,this__9047__auto____$1){
return (function (coll__9048__auto__){
return (1712251858 ^ cljs.core.hash_unordered_coll.call(null,coll__9048__auto__));
});})(h__8819__auto__,this__9047__auto____$1))
.call(null,this__9047__auto____$1);
self__.__hash = h__8819__auto____$1;

return h__8819__auto____$1;
}
});


rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24940,other24941){
var self__ = this;
var this24940__$1 = this;
return (!((other24941 == null))) && ((this24940__$1.constructor === other24941.constructor)) && (cljs.core._EQ_.call(null,this24940__$1.tag,other24941.tag)) && (cljs.core._EQ_.call(null,this24940__$1.prefix,other24941.prefix)) && (cljs.core._EQ_.call(null,this24940__$1.sym,other24941.sym)) && (cljs.core._EQ_.call(null,this24940__$1.children,other24941.children)) && (cljs.core._EQ_.call(null,this24940__$1.__extmap,other24941.__extmap));
});


rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;


rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.tag;
});


rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});


rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var x__9317__auto__ = self__.sym;
return cljs.core._conj.call(null,(function (){var x__9317__auto____$1 = cljs.core.first.call(null,rewrite_clj.node.protocols.sexprs.call(null,self__.children));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto____$1);
})(),x__9317__auto__);
});


rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.count.call(null,self__.prefix) + rewrite_clj.node.protocols.sum_lengths.call(null,self__.children));
});


rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.protocols.concat_strings.call(null,self__.children))].join('');
});


rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9060__auto__,k__9061__auto__){
var self__ = this;
var this__9060__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null], null), null),k__9061__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9060__auto____$1),self__.__meta),k__9061__auto__);
} else {
return (new rewrite_clj.node.quote.QuoteNode(self__.tag,self__.prefix,self__.sym,self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9061__auto__)),null));
}
});


rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL;


rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
});


rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
rewrite_clj.node.protocols.assert_single_sexpr.call(null,children_SINGLEQUOTE_);

return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
});


rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9058__auto__,k__9059__auto__,G__24938){
var self__ = this;
var this__9058__auto____$1 = this;
var pred__24944 = cljs.core.keyword_identical_QMARK_;
var expr__24945 = k__9059__auto__;
if(cljs.core.truth_(pred__24944.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__24945))){
return (new rewrite_clj.node.quote.QuoteNode(G__24938,self__.prefix,self__.sym,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24944.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__24945))){
return (new rewrite_clj.node.quote.QuoteNode(self__.tag,G__24938,self__.sym,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24944.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__24945))){
return (new rewrite_clj.node.quote.QuoteNode(self__.tag,self__.prefix,G__24938,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24944.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__24945))){
return (new rewrite_clj.node.quote.QuoteNode(self__.tag,self__.prefix,self__.sym,G__24938,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.quote.QuoteNode(self__.tag,self__.prefix,self__.sym,self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9059__auto__,G__24938),null));
}
}
}
}
});


rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9063__auto__){
var self__ = this;
var this__9063__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
});


rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9050__auto__,G__24938){
var self__ = this;
var this__9050__auto____$1 = this;
return (new rewrite_clj.node.quote.QuoteNode(self__.tag,self__.prefix,self__.sym,self__.children,G__24938,self__.__extmap,self__.__hash));
});


rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9056__auto__,entry__9057__auto__){
var self__ = this;
var this__9056__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9057__auto__)){
return this__9056__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9057__auto__,(0)),cljs.core._nth.call(null,entry__9057__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9056__auto____$1,entry__9057__auto__);
}
});

rewrite_clj.node.quote.QuoteNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"sym","sym",195671222,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null);
});

rewrite_clj.node.quote.QuoteNode.cljs$lang$type = true;

rewrite_clj.node.quote.QuoteNode.cljs$lang$ctorPrSeq = (function (this__9089__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.quote/QuoteNode");
});

rewrite_clj.node.quote.QuoteNode.cljs$lang$ctorPrWriter = (function (this__9089__auto__,writer__9090__auto__){
return cljs.core._write.call(null,writer__9090__auto__,"rewrite-clj.node.quote/QuoteNode");
});

rewrite_clj.node.quote.__GT_QuoteNode = (function rewrite_clj$node$quote$__GT_QuoteNode(tag,prefix,sym,children){
return (new rewrite_clj.node.quote.QuoteNode(tag,prefix,sym,children,null,null,null));
});

rewrite_clj.node.quote.map__GT_QuoteNode = (function rewrite_clj$node$quote$map__GT_QuoteNode(G__24942){
return (new rewrite_clj.node.quote.QuoteNode(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__24942),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__24942),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__24942),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__24942),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__24942,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"children","children",-940561982))),null));
});

rewrite_clj.node.quote.__GT_node = (function rewrite_clj$node$quote$__GT_node(t,prefix,sym,children){
rewrite_clj.node.protocols.assert_single_sexpr.call(null,children);

return rewrite_clj.node.quote.__GT_QuoteNode.call(null,t,prefix,sym,children);
});
/**
 * Create node representing a quoted form.
 * Takes either a seq of nodes or a single one.
 */
rewrite_clj.node.quote.quote_node = (function rewrite_clj$node$quote$quote_node(children){
while(true){
if(cljs.core.sequential_QMARK_.call(null,children)){
return rewrite_clj.node.quote.__GT_node.call(null,new cljs.core.Keyword(null,"quote","quote",-262615245),"'",new cljs.core.Symbol(null,"quote","quote",1377916282,null),children);
} else {
var G__24948 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__24948;
continue;
}
break;
}
});
/**
 * Create node representing a syntax-quoted form.
 * Takes either a seq of nodes or a single one.
 */
rewrite_clj.node.quote.syntax_quote_node = (function rewrite_clj$node$quote$syntax_quote_node(children){
while(true){
if(cljs.core.sequential_QMARK_.call(null,children)){
return rewrite_clj.node.quote.__GT_node.call(null,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),"`",new cljs.core.Symbol(null,"quote","quote",1377916282,null),children);
} else {
var G__24949 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__24949;
continue;
}
break;
}
});
/**
 * Create node representing an unquoted form. (`~...`)
 * Takes either a seq of nodes or a single one.
 */
rewrite_clj.node.quote.unquote_node = (function rewrite_clj$node$quote$unquote_node(children){
while(true){
if(cljs.core.sequential_QMARK_.call(null,children)){
return rewrite_clj.node.quote.__GT_node.call(null,new cljs.core.Keyword(null,"unquote","unquote",1649741032),"~",new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),children);
} else {
var G__24950 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__24950;
continue;
}
break;
}
});
/**
 * Create node representing an unquote-spliced form. (`~@...`)
 * Takes either a seq of nodes or a single one.
 */
rewrite_clj.node.quote.unquote_splicing_node = (function rewrite_clj$node$quote$unquote_splicing_node(children){
while(true){
if(cljs.core.sequential_QMARK_.call(null,children)){
return rewrite_clj.node.quote.__GT_node.call(null,new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),"~@",new cljs.core.Symbol(null,"unquote-splicing","unquote-splicing",-1359168213,null),children);
} else {
var G__24951 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__24951;
continue;
}
break;
}
});

//# sourceMappingURL=quote.js.map
