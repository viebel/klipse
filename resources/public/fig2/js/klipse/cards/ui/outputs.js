// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.cards.ui.outputs');
goog.require('cljs.core');
goog.require('klipse.ui.outputs.cljs');
goog.require('klipse.ui.outputs.js');
goog.require('om.next');
goog.require('om.dom');
goog.require('devcards_om_next.core');
goog.require('devcards.core');
if(typeof klipse.cards.ui.outputs.Output_cljs_computed !== 'undefined'){
} else {
/**
 * @constructor
 */
klipse.cards.ui.outputs.Output_cljs_computed = (function klipse$cards$ui$outputs$Output_cljs_computed(){
var this__20076__auto__ = this;
React.Component.apply(this__20076__auto__,arguments);

if(!((this__20076__auto__.initLocalState == null))){
this__20076__auto__.state = this__20076__auto__.initLocalState();
} else {
this__20076__auto__.state = {};
}

return this__20076__auto__;
});

klipse.cards.ui.outputs.Output_cljs_computed.prototype = goog.object.clone(React.Component.prototype);
}

var x38401_38411 = klipse.cards.ui.outputs.Output_cljs_computed.prototype;
x38401_38411.componentWillUpdate = ((function (x38401_38411){
return (function (next_props__19920__auto__,next_state__19921__auto__){
var this__19919__auto__ = this;
if(((!((this__19919__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__19919__auto__.om$next$Ident$)))?true:false):false)){
var ident__19923__auto___38412 = om.next.ident.call(null,this__19919__auto__,om.next.props.call(null,this__19919__auto__));
var next_ident__19924__auto___38413 = om.next.ident.call(null,this__19919__auto__,om.next._next_props.call(null,next_props__19920__auto__,this__19919__auto__));
if(cljs.core.not_EQ_.call(null,ident__19923__auto___38412,next_ident__19924__auto___38413)){
var idxr__19925__auto___38414 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__19925__auto___38414 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__19925__auto___38414),((function (idxr__19925__auto___38414,ident__19923__auto___38412,next_ident__19924__auto___38413,this__19919__auto__,x38401_38411){
return (function (indexes__19926__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__19926__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__19923__auto___38412], null),cljs.core.disj,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__19924__auto___38413], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__19919__auto__);
});})(idxr__19925__auto___38414,ident__19923__auto___38412,next_ident__19924__auto___38413,this__19919__auto__,x38401_38411))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__19919__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19919__auto__);
});})(x38401_38411))
;

x38401_38411.shouldComponentUpdate = ((function (x38401_38411){
return (function (next_props__19920__auto__,next_state__19921__auto__){
var this__19919__auto__ = this;
var next_children__19922__auto__ = next_props__19920__auto__.children;
var next_props__19920__auto____$1 = goog.object.get(next_props__19920__auto__,"omcljs$value");
var next_props__19920__auto____$2 = (function (){var G__38403 = next_props__19920__auto____$1;
if((next_props__19920__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__38403);
} else {
return G__38403;
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
});})(x38401_38411))
;

x38401_38411.componentWillUnmount = ((function (x38401_38411){
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
});})(x38401_38411))
;

x38401_38411.componentDidUpdate = ((function (x38401_38411){
return (function (prev_props__19927__auto__,prev_state__19928__auto__){
var this__19919__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19919__auto__);
});})(x38401_38411))
;

x38401_38411.isMounted = ((function (x38401_38411){
return (function (){
var this__19919__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19919__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x38401_38411))
;

x38401_38411.componentWillMount = ((function (x38401_38411){
return (function (){
var this__19919__auto__ = this;
var indexer__19929__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19929__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19929__auto__,this__19919__auto__);
}
});})(x38401_38411))
;

x38401_38411.render = ((function (x38401_38411){
return (function (){
var this__19918__auto__ = this;
var this$ = this__19918__auto__;
var _STAR_reconciler_STAR_38404 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_38405 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_38406 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_38407 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_38408 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__19918__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__19918__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__19918__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__19918__auto__);

om.next._STAR_parent_STAR_ = this__19918__auto__;

try{return om.dom.div.call(null,({"className": "dev-cards-section"}),om.dom.div.call(null,({"className": "toolbox"}),om.dom.button.call(null,({"onClick": ((function (_STAR_reconciler_STAR_38404,_STAR_depth_STAR_38405,_STAR_shared_STAR_38406,_STAR_instrument_STAR_38407,_STAR_parent_STAR_38408,this$,this__19918__auto__,x38401_38411){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("output-cljs","success","output-cljs/success",-1643208417,null))], null));
});})(_STAR_reconciler_STAR_38404,_STAR_depth_STAR_38405,_STAR_shared_STAR_38406,_STAR_instrument_STAR_38407,_STAR_parent_STAR_38408,this$,this__19918__auto__,x38401_38411))
}),"Emulate success"),om.dom.button.call(null,({"onClick": ((function (_STAR_reconciler_STAR_38404,_STAR_depth_STAR_38405,_STAR_shared_STAR_38406,_STAR_instrument_STAR_38407,_STAR_parent_STAR_38408,this$,this__19918__auto__,x38401_38411){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("output-cljs","error","output-cljs/error",-747469895,null))], null));
});})(_STAR_reconciler_STAR_38404,_STAR_depth_STAR_38405,_STAR_shared_STAR_38406,_STAR_instrument_STAR_38407,_STAR_parent_STAR_38408,this$,this__19918__auto__,x38401_38411))
}),"Emulate error"),om.dom.button.call(null,({"onClick": ((function (_STAR_reconciler_STAR_38404,_STAR_depth_STAR_38405,_STAR_shared_STAR_38406,_STAR_instrument_STAR_38407,_STAR_parent_STAR_38408,this$,this__19918__auto__,x38401_38411){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("output-cljs","default","output-cljs/default",1064314509,null))], null));
});})(_STAR_reconciler_STAR_38404,_STAR_depth_STAR_38405,_STAR_shared_STAR_38406,_STAR_instrument_STAR_38407,_STAR_parent_STAR_38408,this$,this__19918__auto__,x38401_38411))
}),"Emulate empty")),klipse.ui.outputs.cljs.cljs_textarea.call(null,om.next.props.call(null,this$)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_38408;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_38407;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_38406;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_38405;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_38404;
}});})(x38401_38411))
;


klipse.cards.ui.outputs.Output_cljs_computed.prototype.constructor = klipse.cards.ui.outputs.Output_cljs_computed;

klipse.cards.ui.outputs.Output_cljs_computed.prototype.constructor.displayName = "klipse.cards.ui.outputs/Output-cljs-computed";

klipse.cards.ui.outputs.Output_cljs_computed.prototype.om$isComponent = true;

var x38409_38415 = klipse.cards.ui.outputs.Output_cljs_computed;
/** @nocollapse */
x38409_38415.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x38409_38415.om$next$IQuery$query$arity$1 = ((function (x38409_38415){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402)], null);
});})(x38409_38415))
;


var x38410_38416 = klipse.cards.ui.outputs.Output_cljs_computed.prototype;

x38410_38416.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x38410_38416.om$next$IQuery$query$arity$1 = ((function (x38410_38416){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402)], null);
});})(x38410_38416))
;


klipse.cards.ui.outputs.Output_cljs_computed.cljs$lang$type = true;

klipse.cards.ui.outputs.Output_cljs_computed.cljs$lang$ctorStr = "klipse.cards.ui.outputs/Output-cljs-computed";

klipse.cards.ui.outputs.Output_cljs_computed.cljs$lang$ctorPrWriter = (function (this__20079__auto__,writer__20080__auto__,opt__20081__auto__){
return cljs.core._write.call(null,writer__20080__auto__,"klipse.cards.ui.outputs/Output-cljs-computed");
});
if(typeof klipse.cards.ui.outputs.Output_js_computed !== 'undefined'){
} else {
/**
 * @constructor
 */
klipse.cards.ui.outputs.Output_js_computed = (function klipse$cards$ui$outputs$Output_js_computed(){
var this__20076__auto__ = this;
React.Component.apply(this__20076__auto__,arguments);

if(!((this__20076__auto__.initLocalState == null))){
this__20076__auto__.state = this__20076__auto__.initLocalState();
} else {
this__20076__auto__.state = {};
}

return this__20076__auto__;
});

klipse.cards.ui.outputs.Output_js_computed.prototype = goog.object.clone(React.Component.prototype);
}

var x38419_38429 = klipse.cards.ui.outputs.Output_js_computed.prototype;
x38419_38429.componentWillUpdate = ((function (x38419_38429){
return (function (next_props__19920__auto__,next_state__19921__auto__){
var this__19919__auto__ = this;
if(((!((this__19919__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__19919__auto__.om$next$Ident$)))?true:false):false)){
var ident__19923__auto___38430 = om.next.ident.call(null,this__19919__auto__,om.next.props.call(null,this__19919__auto__));
var next_ident__19924__auto___38431 = om.next.ident.call(null,this__19919__auto__,om.next._next_props.call(null,next_props__19920__auto__,this__19919__auto__));
if(cljs.core.not_EQ_.call(null,ident__19923__auto___38430,next_ident__19924__auto___38431)){
var idxr__19925__auto___38432 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__19925__auto___38432 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__19925__auto___38432),((function (idxr__19925__auto___38432,ident__19923__auto___38430,next_ident__19924__auto___38431,this__19919__auto__,x38419_38429){
return (function (indexes__19926__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__19926__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__19923__auto___38430], null),cljs.core.disj,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__19924__auto___38431], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__19919__auto__);
});})(idxr__19925__auto___38432,ident__19923__auto___38430,next_ident__19924__auto___38431,this__19919__auto__,x38419_38429))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__19919__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19919__auto__);
});})(x38419_38429))
;

x38419_38429.shouldComponentUpdate = ((function (x38419_38429){
return (function (next_props__19920__auto__,next_state__19921__auto__){
var this__19919__auto__ = this;
var next_children__19922__auto__ = next_props__19920__auto__.children;
var next_props__19920__auto____$1 = goog.object.get(next_props__19920__auto__,"omcljs$value");
var next_props__19920__auto____$2 = (function (){var G__38421 = next_props__19920__auto____$1;
if((next_props__19920__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__38421);
} else {
return G__38421;
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
});})(x38419_38429))
;

x38419_38429.componentWillUnmount = ((function (x38419_38429){
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
});})(x38419_38429))
;

x38419_38429.componentDidUpdate = ((function (x38419_38429){
return (function (prev_props__19927__auto__,prev_state__19928__auto__){
var this__19919__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19919__auto__);
});})(x38419_38429))
;

x38419_38429.isMounted = ((function (x38419_38429){
return (function (){
var this__19919__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19919__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x38419_38429))
;

x38419_38429.componentWillMount = ((function (x38419_38429){
return (function (){
var this__19919__auto__ = this;
var indexer__19929__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19929__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19929__auto__,this__19919__auto__);
}
});})(x38419_38429))
;

x38419_38429.render = ((function (x38419_38429){
return (function (){
var this__19918__auto__ = this;
var this$ = this__19918__auto__;
var _STAR_reconciler_STAR_38422 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_38423 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_38424 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_38425 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_38426 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__19918__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__19918__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__19918__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__19918__auto__);

om.next._STAR_parent_STAR_ = this__19918__auto__;

try{return om.dom.div.call(null,({"className": "dev-cards-section"}),om.dom.div.call(null,({"className": "toolbox"}),om.dom.button.call(null,({"onClick": ((function (_STAR_reconciler_STAR_38422,_STAR_depth_STAR_38423,_STAR_shared_STAR_38424,_STAR_instrument_STAR_38425,_STAR_parent_STAR_38426,this$,this__19918__auto__,x38419_38429){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("output-js","success","output-js/success",1368911396,null))], null));
});})(_STAR_reconciler_STAR_38422,_STAR_depth_STAR_38423,_STAR_shared_STAR_38424,_STAR_instrument_STAR_38425,_STAR_parent_STAR_38426,this$,this__19918__auto__,x38419_38429))
}),"Emulate success"),om.dom.button.call(null,({"onClick": ((function (_STAR_reconciler_STAR_38422,_STAR_depth_STAR_38423,_STAR_shared_STAR_38424,_STAR_instrument_STAR_38425,_STAR_parent_STAR_38426,this$,this__19918__auto__,x38419_38429){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("output-js","error","output-js/error",-1734846832,null))], null));
});})(_STAR_reconciler_STAR_38422,_STAR_depth_STAR_38423,_STAR_shared_STAR_38424,_STAR_instrument_STAR_38425,_STAR_parent_STAR_38426,this$,this__19918__auto__,x38419_38429))
}),"Emulate error"),om.dom.button.call(null,({"onClick": ((function (_STAR_reconciler_STAR_38422,_STAR_depth_STAR_38423,_STAR_shared_STAR_38424,_STAR_instrument_STAR_38425,_STAR_parent_STAR_38426,this$,this__19918__auto__,x38419_38429){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("output-js","default","output-js/default",1973383604,null))], null));
});})(_STAR_reconciler_STAR_38422,_STAR_depth_STAR_38423,_STAR_shared_STAR_38424,_STAR_instrument_STAR_38425,_STAR_parent_STAR_38426,this$,this__19918__auto__,x38419_38429))
}),"Emulate empty")),klipse.ui.outputs.js.js_textarea.call(null,om.next.props.call(null,this$)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_38426;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_38425;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_38424;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_38423;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_38422;
}});})(x38419_38429))
;


klipse.cards.ui.outputs.Output_js_computed.prototype.constructor = klipse.cards.ui.outputs.Output_js_computed;

klipse.cards.ui.outputs.Output_js_computed.prototype.constructor.displayName = "klipse.cards.ui.outputs/Output-js-computed";

klipse.cards.ui.outputs.Output_js_computed.prototype.om$isComponent = true;

var x38427_38433 = klipse.cards.ui.outputs.Output_js_computed;
/** @nocollapse */
x38427_38433.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x38427_38433.om$next$IQuery$query$arity$1 = ((function (x38427_38433){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evaluation-js","evaluation-js",1837122413)], null);
});})(x38427_38433))
;


var x38428_38434 = klipse.cards.ui.outputs.Output_js_computed.prototype;

x38428_38434.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x38428_38434.om$next$IQuery$query$arity$1 = ((function (x38428_38434){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evaluation-js","evaluation-js",1837122413)], null);
});})(x38428_38434))
;


klipse.cards.ui.outputs.Output_js_computed.cljs$lang$type = true;

klipse.cards.ui.outputs.Output_js_computed.cljs$lang$ctorStr = "klipse.cards.ui.outputs/Output-js-computed";

klipse.cards.ui.outputs.Output_js_computed.cljs$lang$ctorPrWriter = (function (this__20079__auto__,writer__20080__auto__,opt__20081__auto__){
return cljs.core._write.call(null,writer__20080__auto__,"klipse.cards.ui.outputs/Output-js-computed");
});
klipse.cards.ui.outputs.read = (function klipse$cards$ui$outputs$read(p__38435,key,params){
var map__38436 = p__38435;
var map__38436__$1 = ((((!((map__38436 == null)))?((((map__38436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38436.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38436):map__38436);
var state = cljs.core.get.call(null,map__38436__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),key,"")], null);
});
if(typeof klipse.cards.ui.outputs.mutate !== 'undefined'){
} else {
klipse.cards.ui.outputs.mutate = (function (){var method_table__9416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9420__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse.cards.ui.outputs","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9420__auto__,method_table__9416__auto__,prefer_table__9417__auto__,method_cache__9418__auto__,cached_hierarchy__9419__auto__));
})();
}
cljs.core._add_method.call(null,klipse.cards.ui.outputs.mutate,new cljs.core.Symbol("output-cljs","default","output-cljs/default",1064314509,null),(function (p__38438,_,___$1){
var map__38439 = p__38438;
var map__38439__$1 = ((((!((map__38439 == null)))?((((map__38439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38439):map__38439);
var state = cljs.core.get.call(null,map__38439__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__38439,map__38439__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402));
});})(map__38439,map__38439__$1,state))
], null);
}));
cljs.core._add_method.call(null,klipse.cards.ui.outputs.mutate,new cljs.core.Symbol("output-cljs","error","output-cljs/error",-747469895,null),(function (p__38441,_,___$1){
var map__38442 = p__38441;
var map__38442__$1 = ((((!((map__38442 == null)))?((((map__38442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38442):map__38442);
var state = cljs.core.get.call(null,map__38442__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__38442,map__38442__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),"ERROR"], null));
});})(map__38442,map__38442__$1,state))
], null);
}));
cljs.core._add_method.call(null,klipse.cards.ui.outputs.mutate,new cljs.core.Symbol("output-cljs","success","output-cljs/success",-1643208417,null),(function (p__38444,_,___$1){
var map__38445 = p__38444;
var map__38445__$1 = ((((!((map__38445 == null)))?((((map__38445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38445.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38445):map__38445);
var state = cljs.core.get.call(null,map__38445__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__38445,map__38445__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),"[:a :b :c]"], null));
});})(map__38445,map__38445__$1,state))
], null);
}));
cljs.core._add_method.call(null,klipse.cards.ui.outputs.mutate,new cljs.core.Symbol("output-js","default","output-js/default",1973383604,null),(function (p__38447,_,___$1){
var map__38448 = p__38447;
var map__38448__$1 = ((((!((map__38448 == null)))?((((map__38448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38448.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38448):map__38448);
var state = cljs.core.get.call(null,map__38448__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__38448,map__38448__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"evaluation-js","evaluation-js",1837122413));
});})(map__38448,map__38448__$1,state))
], null);
}));
cljs.core._add_method.call(null,klipse.cards.ui.outputs.mutate,new cljs.core.Symbol("output-js","error","output-js/error",-1734846832,null),(function (p__38450,_,___$1){
var map__38451 = p__38450;
var map__38451__$1 = ((((!((map__38451 == null)))?((((map__38451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38451.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38451):map__38451);
var state = cljs.core.get.call(null,map__38451__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__38451,map__38451__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"evaluation-js","evaluation-js",1837122413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),"ERROR"], null));
});})(map__38451,map__38451__$1,state))
], null);
}));
cljs.core._add_method.call(null,klipse.cards.ui.outputs.mutate,new cljs.core.Symbol("output-js","success","output-js/success",1368911396,null),(function (p__38453,_,___$1){
var map__38454 = p__38453;
var map__38454__$1 = ((((!((map__38454 == null)))?((((map__38454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38454):map__38454);
var state = cljs.core.get.call(null,map__38454__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__38454,map__38454__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"evaluation-js","evaluation-js",1837122413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),"#'cljs.user/x"], null));
});})(map__38454,map__38454__$1,state))
], null);
}));
if(typeof klipse.cards.ui.outputs.output_cljs_data !== 'undefined'){
} else {
klipse.cards.ui.outputs.output_cljs_data = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof klipse.cards.ui.outputs.output_js_data !== 'undefined'){
} else {
klipse.cards.ui.outputs.output_js_data = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
klipse.cards.ui.outputs.output_parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),klipse.cards.ui.outputs.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),klipse.cards.ui.outputs.mutate], null));
if(typeof klipse.cards.ui.outputs.output_cljs_reconciler !== 'undefined'){
} else {
klipse.cards.ui.outputs.output_cljs_reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),klipse.cards.ui.outputs.output_cljs_data,new cljs.core.Keyword(null,"parser","parser",-1543495310),klipse.cards.ui.outputs.output_parser], null));
}
if(typeof klipse.cards.ui.outputs.output_js_reconciler !== 'undefined'){
} else {
klipse.cards.ui.outputs.output_js_reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),klipse.cards.ui.outputs.output_js_data,new cljs.core.Keyword(null,"parser","parser",-1543495310),klipse.cards.ui.outputs.output_parser], null));
}

//# sourceMappingURL=outputs.js.map
