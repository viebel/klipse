// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.cards.ui.editors');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('klipse.ui.editors.cljs');
goog.require('klipse.ui.editors.js');
goog.require('klipse.control.control');
goog.require('devcards_om_next.core');
goog.require('devcards.core');
if(typeof klipse.cards.ui.editors.Editor_cljs_computed !== 'undefined'){
} else {
/**
 * @constructor
 */
klipse.cards.ui.editors.Editor_cljs_computed = (function klipse$cards$ui$editors$Editor_cljs_computed(){
var this__20076__auto__ = this;
React.Component.apply(this__20076__auto__,arguments);

if(!((this__20076__auto__.initLocalState == null))){
this__20076__auto__.state = this__20076__auto__.initLocalState();
} else {
this__20076__auto__.state = {};
}

return this__20076__auto__;
});

klipse.cards.ui.editors.Editor_cljs_computed.prototype = goog.object.clone(React.Component.prototype);
}

var x155690_155700 = klipse.cards.ui.editors.Editor_cljs_computed.prototype;
x155690_155700.componentWillUpdate = ((function (x155690_155700){
return (function (next_props__19920__auto__,next_state__19921__auto__){
var this__19919__auto__ = this;
if(((!((this__19919__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__19919__auto__.om$next$Ident$)))?true:false):false)){
var ident__19923__auto___155701 = om.next.ident.call(null,this__19919__auto__,om.next.props.call(null,this__19919__auto__));
var next_ident__19924__auto___155702 = om.next.ident.call(null,this__19919__auto__,om.next._next_props.call(null,next_props__19920__auto__,this__19919__auto__));
if(cljs.core.not_EQ_.call(null,ident__19923__auto___155701,next_ident__19924__auto___155702)){
var idxr__19925__auto___155703 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__19925__auto___155703 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__19925__auto___155703),((function (idxr__19925__auto___155703,ident__19923__auto___155701,next_ident__19924__auto___155702,this__19919__auto__,x155690_155700){
return (function (indexes__19926__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__19926__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__19923__auto___155701], null),cljs.core.disj,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__19924__auto___155702], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__19919__auto__);
});})(idxr__19925__auto___155703,ident__19923__auto___155701,next_ident__19924__auto___155702,this__19919__auto__,x155690_155700))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__19919__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19919__auto__);
});})(x155690_155700))
;

x155690_155700.shouldComponentUpdate = ((function (x155690_155700){
return (function (next_props__19920__auto__,next_state__19921__auto__){
var this__19919__auto__ = this;
var next_children__19922__auto__ = next_props__19920__auto__.children;
var next_props__19920__auto____$1 = goog.object.get(next_props__19920__auto__,"omcljs$value");
var next_props__19920__auto____$2 = (function (){var G__155692 = next_props__19920__auto____$1;
if((next_props__19920__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__155692);
} else {
return G__155692;
}
})();
var or__8363__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19919__auto__),next_props__19920__auto____$2);
if(or__8363__auto__){
return or__8363__auto__;
} else {
var or__8363__auto____$1 = (function (){var and__8351__auto__ = this__19919__auto__.state;
if(cljs.core.truth_(and__8351__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19919__auto__.state,"omcljs$state"),goog.object.get(next_state__19921__auto__,"omcljs$state"));
} else {
return and__8351__auto__;
}
})();
if(cljs.core.truth_(or__8363__auto____$1)){
return or__8363__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__19919__auto__.props.children,next_children__19922__auto__);
}
}
});})(x155690_155700))
;

x155690_155700.componentWillUnmount = ((function (x155690_155700){
return (function (){
var this__19919__auto__ = this;
var r__19930__auto__ = om.next.get_reconciler.call(null,this__19919__auto__);
var cfg__19931__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19930__auto__);
var st__19932__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19931__auto__);
var indexer__19929__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19931__auto__);
if(cljs.core.truth_((function (){var and__8351__auto__ = !((st__19932__auto__ == null));
if(and__8351__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__19932__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__19919__auto__], null));
} else {
return and__8351__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__19932__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19919__auto__);
} else {
}

if((indexer__19929__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19929__auto__,this__19919__auto__);
}
});})(x155690_155700))
;

x155690_155700.componentDidUpdate = ((function (x155690_155700){
return (function (prev_props__19927__auto__,prev_state__19928__auto__){
var this__19919__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19919__auto__);
});})(x155690_155700))
;

x155690_155700.isMounted = ((function (x155690_155700){
return (function (){
var this__19919__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19919__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x155690_155700))
;

x155690_155700.componentWillMount = ((function (x155690_155700){
return (function (){
var this__19919__auto__ = this;
var indexer__19929__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19929__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19929__auto__,this__19919__auto__);
}
});})(x155690_155700))
;

x155690_155700.render = ((function (x155690_155700){
return (function (){
var this__19918__auto__ = this;
var this$ = this__19918__auto__;
var _STAR_reconciler_STAR_155693 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_155694 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_155695 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_155696 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_155697 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__19918__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__19918__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__19918__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__19918__auto__);

om.next._STAR_parent_STAR_ = this__19918__auto__;

try{return om.dom.div.call(null,({"className": "dev-cards-section"}),klipse.ui.editors.cljs.cljs_editor.call(null,om.next.props.call(null,this$)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_155697;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_155696;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_155695;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_155694;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_155693;
}});})(x155690_155700))
;


klipse.cards.ui.editors.Editor_cljs_computed.prototype.constructor = klipse.cards.ui.editors.Editor_cljs_computed;

klipse.cards.ui.editors.Editor_cljs_computed.prototype.constructor.displayName = "klipse.cards.ui.editors/Editor-cljs-computed";

klipse.cards.ui.editors.Editor_cljs_computed.prototype.om$isComponent = true;

var x155698_155704 = klipse.cards.ui.editors.Editor_cljs_computed;


var x155699_155705 = klipse.cards.ui.editors.Editor_cljs_computed.prototype;


klipse.cards.ui.editors.Editor_cljs_computed.cljs$lang$type = true;

klipse.cards.ui.editors.Editor_cljs_computed.cljs$lang$ctorStr = "klipse.cards.ui.editors/Editor-cljs-computed";

klipse.cards.ui.editors.Editor_cljs_computed.cljs$lang$ctorPrWriter = (function (this__20079__auto__,writer__20080__auto__,opt__20081__auto__){
return cljs.core._write.call(null,writer__20080__auto__,"klipse.cards.ui.editors/Editor-cljs-computed");
});
if(typeof klipse.cards.ui.editors.editor_cljs_reconciler !== 'undefined'){
} else {
klipse.cards.ui.editors.editor_cljs_reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),"(+ 103212 2)"], null),new cljs.core.Keyword(null,"parser","parser",-1543495310),klipse.control.control.parser], null));
}
/**
 * @constructor
 */
klipse.cards.ui.editors.Root_computed = (function klipse$cards$ui$editors$Root_computed(){
var this__20076__auto__ = this;
React.Component.apply(this__20076__auto__,arguments);

if(!((this__20076__auto__.initLocalState == null))){
this__20076__auto__.state = this__20076__auto__.initLocalState();
} else {
this__20076__auto__.state = {};
}

return this__20076__auto__;
});

klipse.cards.ui.editors.Root_computed.prototype = goog.object.clone(React.Component.prototype);

var x155708_155720 = klipse.cards.ui.editors.Root_computed.prototype;
x155708_155720.componentWillUpdate = ((function (x155708_155720){
return (function (next_props__19920__auto__,next_state__19921__auto__){
var this__19919__auto__ = this;
if(((!((this__19919__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__19919__auto__.om$next$Ident$)))?true:false):false)){
var ident__19923__auto___155721 = om.next.ident.call(null,this__19919__auto__,om.next.props.call(null,this__19919__auto__));
var next_ident__19924__auto___155722 = om.next.ident.call(null,this__19919__auto__,om.next._next_props.call(null,next_props__19920__auto__,this__19919__auto__));
if(cljs.core.not_EQ_.call(null,ident__19923__auto___155721,next_ident__19924__auto___155722)){
var idxr__19925__auto___155723 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__19925__auto___155723 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__19925__auto___155723),((function (idxr__19925__auto___155723,ident__19923__auto___155721,next_ident__19924__auto___155722,this__19919__auto__,x155708_155720){
return (function (indexes__19926__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__19926__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__19923__auto___155721], null),cljs.core.disj,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__19924__auto___155722], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__19919__auto__);
});})(idxr__19925__auto___155723,ident__19923__auto___155721,next_ident__19924__auto___155722,this__19919__auto__,x155708_155720))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__19919__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19919__auto__);
});})(x155708_155720))
;

x155708_155720.shouldComponentUpdate = ((function (x155708_155720){
return (function (next_props__19920__auto__,next_state__19921__auto__){
var this__19919__auto__ = this;
var next_children__19922__auto__ = next_props__19920__auto__.children;
var next_props__19920__auto____$1 = goog.object.get(next_props__19920__auto__,"omcljs$value");
var next_props__19920__auto____$2 = (function (){var G__155710 = next_props__19920__auto____$1;
if((next_props__19920__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__155710);
} else {
return G__155710;
}
})();
var or__8363__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19919__auto__),next_props__19920__auto____$2);
if(or__8363__auto__){
return or__8363__auto__;
} else {
var or__8363__auto____$1 = (function (){var and__8351__auto__ = this__19919__auto__.state;
if(cljs.core.truth_(and__8351__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19919__auto__.state,"omcljs$state"),goog.object.get(next_state__19921__auto__,"omcljs$state"));
} else {
return and__8351__auto__;
}
})();
if(cljs.core.truth_(or__8363__auto____$1)){
return or__8363__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__19919__auto__.props.children,next_children__19922__auto__);
}
}
});})(x155708_155720))
;

x155708_155720.componentWillUnmount = ((function (x155708_155720){
return (function (){
var this__19919__auto__ = this;
var r__19930__auto__ = om.next.get_reconciler.call(null,this__19919__auto__);
var cfg__19931__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19930__auto__);
var st__19932__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19931__auto__);
var indexer__19929__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19931__auto__);
if(cljs.core.truth_((function (){var and__8351__auto__ = !((st__19932__auto__ == null));
if(and__8351__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__19932__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__19919__auto__], null));
} else {
return and__8351__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__19932__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19919__auto__);
} else {
}

if((indexer__19929__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19929__auto__,this__19919__auto__);
}
});})(x155708_155720))
;

x155708_155720.componentDidUpdate = ((function (x155708_155720){
return (function (prev_props__19927__auto__,prev_state__19928__auto__){
var this__19919__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19919__auto__);
});})(x155708_155720))
;

x155708_155720.isMounted = ((function (x155708_155720){
return (function (){
var this__19919__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19919__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x155708_155720))
;

x155708_155720.componentWillMount = ((function (x155708_155720){
return (function (){
var this__19919__auto__ = this;
var indexer__19929__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19929__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19929__auto__,this__19919__auto__);
}
});})(x155708_155720))
;

x155708_155720.render = ((function (x155708_155720){
return (function (){
var this__19918__auto__ = this;
var this$ = this__19918__auto__;
var _STAR_reconciler_STAR_155711 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_155712 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_155713 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_155714 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_155715 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__19918__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__19918__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__19918__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__19918__auto__);

om.next._STAR_parent_STAR_ = this__19918__auto__;

try{var map__155716 = om.next.get_computed.call(null,this$);
var map__155716__$1 = ((((!((map__155716 == null)))?((((map__155716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__155716.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__155716):map__155716);
var updateJS = cljs.core.get.call(null,map__155716__$1,new cljs.core.Keyword(null,"updateJS","updateJS",-1174586884));
return om.dom.div.call(null,({"className": "dev-cards-section"}),om.dom.div.call(null,({"className": "toolbox"}),om.dom.button.call(null,({"onClick": updateJS}),"Add JS code to editor")),klipse.ui.editors.js.js_editor.call(null,om.next.props.call(null,this$)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_155715;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_155714;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_155713;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_155712;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_155711;
}});})(x155708_155720))
;


klipse.cards.ui.editors.Root_computed.prototype.constructor = klipse.cards.ui.editors.Root_computed;

klipse.cards.ui.editors.Root_computed.prototype.constructor.displayName = "klipse.cards.ui.editors/Root-computed";

klipse.cards.ui.editors.Root_computed.prototype.om$isComponent = true;

var x155718_155724 = klipse.cards.ui.editors.Root_computed;


var x155719_155725 = klipse.cards.ui.editors.Root_computed.prototype;


klipse.cards.ui.editors.Root_computed.cljs$lang$type = true;

klipse.cards.ui.editors.Root_computed.cljs$lang$ctorStr = "klipse.cards.ui.editors/Root-computed";

klipse.cards.ui.editors.Root_computed.cljs$lang$ctorPrWriter = (function (this__20079__auto__,writer__20080__auto__,opt__20081__auto__){
return cljs.core._write.call(null,writer__20080__auto__,"klipse.cards.ui.editors/Root-computed");
});
klipse.cards.ui.editors.root_computed = om.next.factory.call(null,klipse.cards.ui.editors.Root_computed);

//# sourceMappingURL=editors.js.map
