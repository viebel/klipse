// Compiled by ClojureScript 1.9.908 {}
goog.provide('rewrite_clj.node.protocols');
goog.require('cljs.core');
goog.require('clojure.string');

/**
 * Protocol for EDN/Clojure nodes.
 * @interface
 */
rewrite_clj.node.protocols.Node = function(){};

/**
 * Keyword representing the type of the node.
 */
rewrite_clj.node.protocols.tag = (function rewrite_clj$node$protocols$tag(_){
if((!((_ == null))) && (!((_.rewrite_clj$node$protocols$Node$tag$arity$1 == null)))){
return _.rewrite_clj$node$protocols$Node$tag$arity$1(_);
} else {
var x__9096__auto__ = (((_ == null))?null:_);
var m__9097__auto__ = (rewrite_clj.node.protocols.tag[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,_);
} else {
var m__9097__auto____$1 = (rewrite_clj.node.protocols.tag["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Node.tag",_);
}
}
}
});

/**
 * Return true if the node cannot be converted to an s-expression
 *   element.
 */
rewrite_clj.node.protocols.printable_only_QMARK_ = (function rewrite_clj$node$protocols$printable_only_QMARK_(_){
if((!((_ == null))) && (!((_.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 == null)))){
return _.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1(_);
} else {
var x__9096__auto__ = (((_ == null))?null:_);
var m__9097__auto__ = (rewrite_clj.node.protocols.printable_only_QMARK_[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,_);
} else {
var m__9097__auto____$1 = (rewrite_clj.node.protocols.printable_only_QMARK_["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Node.printable-only?",_);
}
}
}
});

/**
 * Convert node to s-expression.
 */
rewrite_clj.node.protocols.sexpr = (function rewrite_clj$node$protocols$sexpr(_){
if((!((_ == null))) && (!((_.rewrite_clj$node$protocols$Node$sexpr$arity$1 == null)))){
return _.rewrite_clj$node$protocols$Node$sexpr$arity$1(_);
} else {
var x__9096__auto__ = (((_ == null))?null:_);
var m__9097__auto__ = (rewrite_clj.node.protocols.sexpr[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,_);
} else {
var m__9097__auto____$1 = (rewrite_clj.node.protocols.sexpr["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Node.sexpr",_);
}
}
}
});

/**
 * Get number of characters for the string version of this node.
 */
rewrite_clj.node.protocols.length = (function rewrite_clj$node$protocols$length(_){
if((!((_ == null))) && (!((_.rewrite_clj$node$protocols$Node$length$arity$1 == null)))){
return _.rewrite_clj$node$protocols$Node$length$arity$1(_);
} else {
var x__9096__auto__ = (((_ == null))?null:_);
var m__9097__auto__ = (rewrite_clj.node.protocols.length[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,_);
} else {
var m__9097__auto____$1 = (rewrite_clj.node.protocols.length["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Node.length",_);
}
}
}
});

/**
 * Convert node to printable string.
 */
rewrite_clj.node.protocols.string = (function rewrite_clj$node$protocols$string(_){
if((!((_ == null))) && (!((_.rewrite_clj$node$protocols$Node$string$arity$1 == null)))){
return _.rewrite_clj$node$protocols$Node$string$arity$1(_);
} else {
var x__9096__auto__ = (((_ == null))?null:_);
var m__9097__auto__ = (rewrite_clj.node.protocols.string[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,_);
} else {
var m__9097__auto____$1 = (rewrite_clj.node.protocols.string["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Node.string",_);
}
}
}
});

goog.object.set(rewrite_clj.node.protocols.Node,"object",true);

goog.object.set(rewrite_clj.node.protocols.tag,"object",(function (_){
return new cljs.core.Keyword(null,"unknown","unknown",-935977881);
}));

goog.object.set(rewrite_clj.node.protocols.printable_only_QMARK_,"object",(function (_){
return false;
}));

goog.object.set(rewrite_clj.node.protocols.sexpr,"object",(function (this$){
return this$;
}));

goog.object.set(rewrite_clj.node.protocols.length,"object",(function (this$){
return cljs.core.count.call(null,rewrite_clj.node.protocols.string.call(null,this$));
}));

goog.object.set(rewrite_clj.node.protocols.string,"object",(function (this$){
return cljs.core.pr_str.call(null,this$);
}));
/**
 * Given a seq of nodes, convert those that represent s-expressions
 * to the respective forms.
 */
rewrite_clj.node.protocols.sexprs = (function rewrite_clj$node$protocols$sexprs(nodes){
return cljs.core.map.call(null,rewrite_clj.node.protocols.sexpr,cljs.core.remove.call(null,rewrite_clj.node.protocols.printable_only_QMARK_,nodes));
});
/**
 * Sum up lengths of the given nodes.
 */
rewrite_clj.node.protocols.sum_lengths = (function rewrite_clj$node$protocols$sum_lengths(nodes){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,rewrite_clj.node.protocols.length,nodes));
});
/**
 * Convert nodes to strings and concatenate them.
 */
rewrite_clj.node.protocols.concat_strings = (function rewrite_clj$node$protocols$concat_strings(nodes){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.map.call(null,rewrite_clj.node.protocols.string,nodes));
});

/**
 * Protocol for non-leaf EDN/Clojure nodes.
 * @interface
 */
rewrite_clj.node.protocols.InnerNode = function(){};

/**
 * Check whether the node can contain children.
 */
rewrite_clj.node.protocols.inner_QMARK_ = (function rewrite_clj$node$protocols$inner_QMARK_(_){
if((!((_ == null))) && (!((_.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 == null)))){
return _.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1(_);
} else {
var x__9096__auto__ = (((_ == null))?null:_);
var m__9097__auto__ = (rewrite_clj.node.protocols.inner_QMARK_[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,_);
} else {
var m__9097__auto____$1 = (rewrite_clj.node.protocols.inner_QMARK_["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"InnerNode.inner?",_);
}
}
}
});

/**
 * Get child nodes.
 */
rewrite_clj.node.protocols.children = (function rewrite_clj$node$protocols$children(_){
if((!((_ == null))) && (!((_.rewrite_clj$node$protocols$InnerNode$children$arity$1 == null)))){
return _.rewrite_clj$node$protocols$InnerNode$children$arity$1(_);
} else {
var x__9096__auto__ = (((_ == null))?null:_);
var m__9097__auto__ = (rewrite_clj.node.protocols.children[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,_);
} else {
var m__9097__auto____$1 = (rewrite_clj.node.protocols.children["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"InnerNode.children",_);
}
}
}
});

/**
 * Replace the node's children.
 */
rewrite_clj.node.protocols.replace_children = (function rewrite_clj$node$protocols$replace_children(_,children){
if((!((_ == null))) && (!((_.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 == null)))){
return _.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2(_,children);
} else {
var x__9096__auto__ = (((_ == null))?null:_);
var m__9097__auto__ = (rewrite_clj.node.protocols.replace_children[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,_,children);
} else {
var m__9097__auto____$1 = (rewrite_clj.node.protocols.replace_children["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,_,children);
} else {
throw cljs.core.missing_protocol.call(null,"InnerNode.replace-children",_);
}
}
}
});

goog.object.set(rewrite_clj.node.protocols.InnerNode,"object",true);

goog.object.set(rewrite_clj.node.protocols.inner_QMARK_,"object",(function (_){
return false;
}));

goog.object.set(rewrite_clj.node.protocols.children,"object",(function (_){
throw (new Error("UnsupportedOperationException"));
}));

goog.object.set(rewrite_clj.node.protocols.replace_children,"object",(function (_,___$1){
throw (new Error("UnsupportedOperationException"));
}));
/**
 * Get all child s-expressions for the given node.
 */
rewrite_clj.node.protocols.child_sexprs = (function rewrite_clj$node$protocols$child_sexprs(node){
if(cljs.core.truth_(rewrite_clj.node.protocols.inner_QMARK_.call(null,node))){
return rewrite_clj.node.protocols.sexprs.call(null,rewrite_clj.node.protocols.children.call(null,node));
} else {
return null;
}
});

/**
 * Protocol for values that can be coerced to nodes.
 * @interface
 */
rewrite_clj.node.protocols.NodeCoerceable = function(){};

rewrite_clj.node.protocols.coerce = (function rewrite_clj$node$protocols$coerce(_){
if((!((_ == null))) && (!((_.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 == null)))){
return _.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1(_);
} else {
var x__9096__auto__ = (((_ == null))?null:_);
var m__9097__auto__ = (rewrite_clj.node.protocols.coerce[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,_);
} else {
var m__9097__auto____$1 = (rewrite_clj.node.protocols.coerce["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"NodeCoerceable.coerce",_);
}
}
}
});

rewrite_clj.node.protocols.assert_sexpr_count = (function rewrite_clj$node$protocols$assert_sexpr_count(nodes,c){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.remove.call(null,rewrite_clj.node.protocols.printable_only_QMARK_,nodes)),c)){
return null;
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["can only contain",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," non-whitespace form(s)."].join('')),"\n","(= (count (remove printable-only? nodes)) c)"].join('')));
}
});
rewrite_clj.node.protocols.assert_single_sexpr = (function rewrite_clj$node$protocols$assert_single_sexpr(nodes){
return rewrite_clj.node.protocols.assert_sexpr_count.call(null,nodes,(1));
});

//# sourceMappingURL=protocols.js.map
