// Compiled by ClojureScript 1.9.908 {}
goog.provide('rewrite_clj.node.coercer');
goog.require('cljs.core');
goog.require('rewrite_clj.node.comment');
goog.require('rewrite_clj.node.forms');
goog.require('rewrite_clj.node.keyword');
goog.require('rewrite_clj.node.quote');
goog.require('rewrite_clj.node.stringz');
goog.require('rewrite_clj.node.uneval');
goog.require('rewrite_clj.node.meta');
goog.require('rewrite_clj.node.fn');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.node.reader_macro');
goog.require('rewrite_clj.node.seq');
goog.require('rewrite_clj.node.token');
goog.require('rewrite_clj.node.whitespace');
rewrite_clj.node.coercer.node_with_meta = (function rewrite_clj$node$coercer$node_with_meta(n,value){
if(((!((value == null)))?((((value.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IWithMeta$)))?true:false):false)){
var mta = cljs.core.meta.call(null,value);
if(cljs.core.empty_QMARK_.call(null,mta)){
return n;
} else {
return rewrite_clj.node.meta.meta_node.call(null,rewrite_clj.node.protocols.coerce.call(null,mta),n);
}
} else {
return n;
}
});
goog.object.set(rewrite_clj.node.protocols.NodeCoerceable,"object",true);

goog.object.set(rewrite_clj.node.protocols.coerce,"object",(function (v){
return rewrite_clj.node.coercer.node_with_meta.call(null,rewrite_clj.node.token.token_node.call(null,v),v);
}));
goog.object.set(rewrite_clj.node.protocols.NodeCoerceable,"number",true);

goog.object.set(rewrite_clj.node.protocols.coerce,"number",(function (n){
return rewrite_clj.node.coercer.node_with_meta.call(null,rewrite_clj.node.token.token_node.call(null,n),n);
}));
goog.object.set(rewrite_clj.node.protocols.NodeCoerceable,"string",true);

goog.object.set(rewrite_clj.node.protocols.coerce,"string",(function (n){
return rewrite_clj.node.coercer.node_with_meta.call(null,rewrite_clj.node.stringz.string_node.call(null,n),n);
}));
rewrite_clj.node.coercer.seq_node = (function rewrite_clj$node$coercer$seq_node(f,sq){
return rewrite_clj.node.coercer.node_with_meta.call(null,f.call(null,cljs.core.vec.call(null,rewrite_clj.node.whitespace.space_separated.call(null,cljs.core.map.call(null,rewrite_clj.node.protocols.coerce,sq)))),sq);
});

cljs.core.PersistentVector.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentVector.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (sq){
var sq__$1 = this;
return rewrite_clj.node.coercer.seq_node.call(null,rewrite_clj.node.seq.vector_node,sq__$1);
});


cljs.core.List.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.List.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (sq){
var sq__$1 = this;
return rewrite_clj.node.coercer.seq_node.call(null,rewrite_clj.node.seq.list_node,sq__$1);
});


cljs.core.PersistentHashSet.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentHashSet.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (sq){
var sq__$1 = this;
return rewrite_clj.node.coercer.seq_node.call(null,rewrite_clj.node.seq.set_node,sq__$1);
});
var comma_24984 = rewrite_clj.node.whitespace.whitespace_node.call(null,", ");
var space_24985 = rewrite_clj.node.whitespace.whitespace_node.call(null," ");
rewrite_clj.node.coercer.map__GT_children = ((function (comma_24984,space_24985){
return (function rewrite_clj$node$coercer$map__GT_children(m){
return cljs.core.vec.call(null,cljs.core.butlast.call(null,cljs.core.mapcat.call(null,((function (comma_24984,space_24985){
return (function (p__24980){
var vec__24981 = p__24980;
var k = cljs.core.nth.call(null,vec__24981,(0),null);
var v = cljs.core.nth.call(null,vec__24981,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewrite_clj.node.protocols.coerce.call(null,k),space_24985,rewrite_clj.node.protocols.coerce.call(null,v),comma_24984], null);
});})(comma_24984,space_24985))
,m)));
});})(comma_24984,space_24985))
;

cljs.core.PersistentHashMap.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentHashMap.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (m){
var m__$1 = this;
return rewrite_clj.node.coercer.node_with_meta.call(null,rewrite_clj.node.seq.map_node.call(null,rewrite_clj.node.coercer.map__GT_children.call(null,m__$1)),m__$1);
});

rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;


rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});


rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;


rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});


rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;


rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});


rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;


rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});


rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;


rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});


rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;


rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});


rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;


rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});


rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;


rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});


rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;


rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});


rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;


rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});


rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;


rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});


rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;


rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});


rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;


rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});


rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;


rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});

//# sourceMappingURL=coercer.js.map
