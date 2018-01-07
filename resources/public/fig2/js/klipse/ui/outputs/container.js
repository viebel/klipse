// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.ui.outputs.container');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
klipse.ui.outputs.container.ContainerInner = (function klipse$ui$outputs$container$ContainerInner(){
var this__20076__auto__ = this;
React.Component.apply(this__20076__auto__,arguments);

if(!((this__20076__auto__.initLocalState == null))){
this__20076__auto__.state = this__20076__auto__.initLocalState();
} else {
this__20076__auto__.state = {};
}

return this__20076__auto__;
});

klipse.ui.outputs.container.ContainerInner.prototype = goog.object.clone(React.Component.prototype);

var x35252_35261 = klipse.ui.outputs.container.ContainerInner.prototype;
x35252_35261.componentWillUpdate = ((function (x35252_35261){
return (function (next_props__19920__auto__,next_state__19921__auto__){
var this__19919__auto__ = this;
if(((!((this__19919__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__19919__auto__.om$next$Ident$)))?true:false):false)){
var ident__19923__auto___35262 = om.next.ident.call(null,this__19919__auto__,om.next.props.call(null,this__19919__auto__));
var next_ident__19924__auto___35263 = om.next.ident.call(null,this__19919__auto__,om.next._next_props.call(null,next_props__19920__auto__,this__19919__auto__));
if(cljs.core.not_EQ_.call(null,ident__19923__auto___35262,next_ident__19924__auto___35263)){
var idxr__19925__auto___35264 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__19925__auto___35264 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__19925__auto___35264),((function (idxr__19925__auto___35264,ident__19923__auto___35262,next_ident__19924__auto___35263,this__19919__auto__,x35252_35261){
return (function (indexes__19926__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__19926__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__19923__auto___35262], null),cljs.core.disj,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__19924__auto___35263], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__19919__auto__);
});})(idxr__19925__auto___35264,ident__19923__auto___35262,next_ident__19924__auto___35263,this__19919__auto__,x35252_35261))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__19919__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19919__auto__);
});})(x35252_35261))
;

x35252_35261.componentWillUnmount = ((function (x35252_35261){
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
});})(x35252_35261))
;

x35252_35261.componentDidUpdate = ((function (x35252_35261){
return (function (prev_props__19927__auto__,prev_state__19928__auto__){
var this__19919__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19919__auto__);
});})(x35252_35261))
;

x35252_35261.isMounted = ((function (x35252_35261){
return (function (){
var this__19919__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19919__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x35252_35261))
;

x35252_35261.componentWillMount = ((function (x35252_35261){
return (function (){
var this__19919__auto__ = this;
var indexer__19929__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19929__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19929__auto__,this__19919__auto__);
}
});})(x35252_35261))
;

x35252_35261.componentDidMount = ((function (x35252_35261){
return (function (){
var this$ = this;
return klipse_container = om.dom.node.call(null,this$);
});})(x35252_35261))
;

x35252_35261.shouldComponentUpdate = ((function (x35252_35261){
return (function (){
var this$ = this;
return false;
});})(x35252_35261))
;

x35252_35261.render = ((function (x35252_35261){
return (function (){
var this__19918__auto__ = this;
var this$ = this__19918__auto__;
var _STAR_reconciler_STAR_35254 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_35255 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_35256 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_35257 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_35258 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__19918__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__19918__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__19918__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__19918__auto__);

om.next._STAR_parent_STAR_ = this__19918__auto__;

try{return om.dom.div.call(null,({"id": "klipse-container"}),om.dom.p.call(null,null,"This is your ",om.dom.strong.call(null,null,"klipse container"),"."),om.dom.p.call(null,null,"You can access it with ",om.dom.code.call(null,null,"(js/document.getElementById \"klipse-container\")")," or with ",om.dom.code.call(null,null,"js/klipse-container"),"."),om.dom.p.call(null,null,"For instance, try to copy and paste the following code into the top left box and press 'Ctrl-Enter` or wait for 3 seconds:"),om.dom.pre.call(null,null,om.dom.code.call(null,null,"(set!\n (.-innerHTML js/klipse-container)\n \"<div style='color:blue;'> Hello <b>World</b>!</div>\")")));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_35258;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_35257;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_35256;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_35255;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_35254;
}});})(x35252_35261))
;


klipse.ui.outputs.container.ContainerInner.prototype.constructor = klipse.ui.outputs.container.ContainerInner;

klipse.ui.outputs.container.ContainerInner.prototype.constructor.displayName = "klipse.ui.outputs.container/ContainerInner";

klipse.ui.outputs.container.ContainerInner.prototype.om$isComponent = true;

var x35259_35265 = klipse.ui.outputs.container.ContainerInner;


var x35260_35266 = klipse.ui.outputs.container.ContainerInner.prototype;


klipse.ui.outputs.container.ContainerInner.cljs$lang$type = true;

klipse.ui.outputs.container.ContainerInner.cljs$lang$ctorStr = "klipse.ui.outputs.container/ContainerInner";

klipse.ui.outputs.container.ContainerInner.cljs$lang$ctorPrWriter = (function (this__20079__auto__,writer__20080__auto__,opt__20081__auto__){
return cljs.core._write.call(null,writer__20080__auto__,"klipse.ui.outputs.container/ContainerInner");
});
klipse.ui.outputs.container.container_inner = om.next.factory.call(null,klipse.ui.outputs.container.ContainerInner);
/**
 * @constructor
 */
klipse.ui.outputs.container.Container = (function klipse$ui$outputs$container$Container(){
var this__20076__auto__ = this;
React.Component.apply(this__20076__auto__,arguments);

if(!((this__20076__auto__.initLocalState == null))){
this__20076__auto__.state = this__20076__auto__.initLocalState();
} else {
this__20076__auto__.state = {};
}

return this__20076__auto__;
});

klipse.ui.outputs.container.Container.prototype = goog.object.clone(React.Component.prototype);

var x35269_35278 = klipse.ui.outputs.container.Container.prototype;
x35269_35278.componentWillUpdate = ((function (x35269_35278){
return (function (next_props__19920__auto__,next_state__19921__auto__){
var this__19919__auto__ = this;
if(((!((this__19919__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__19919__auto__.om$next$Ident$)))?true:false):false)){
var ident__19923__auto___35279 = om.next.ident.call(null,this__19919__auto__,om.next.props.call(null,this__19919__auto__));
var next_ident__19924__auto___35280 = om.next.ident.call(null,this__19919__auto__,om.next._next_props.call(null,next_props__19920__auto__,this__19919__auto__));
if(cljs.core.not_EQ_.call(null,ident__19923__auto___35279,next_ident__19924__auto___35280)){
var idxr__19925__auto___35281 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__19925__auto___35281 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__19925__auto___35281),((function (idxr__19925__auto___35281,ident__19923__auto___35279,next_ident__19924__auto___35280,this__19919__auto__,x35269_35278){
return (function (indexes__19926__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__19926__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__19923__auto___35279], null),cljs.core.disj,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__19924__auto___35280], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__19919__auto__);
});})(idxr__19925__auto___35281,ident__19923__auto___35279,next_ident__19924__auto___35280,this__19919__auto__,x35269_35278))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__19919__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19919__auto__);
});})(x35269_35278))
;

x35269_35278.componentWillUnmount = ((function (x35269_35278){
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
});})(x35269_35278))
;

x35269_35278.componentDidUpdate = ((function (x35269_35278){
return (function (prev_props__19927__auto__,prev_state__19928__auto__){
var this__19919__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19919__auto__);
});})(x35269_35278))
;

x35269_35278.isMounted = ((function (x35269_35278){
return (function (){
var this__19919__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19919__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x35269_35278))
;

x35269_35278.componentWillMount = ((function (x35269_35278){
return (function (){
var this__19919__auto__ = this;
var indexer__19929__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19929__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19929__auto__,this__19919__auto__);
}
});})(x35269_35278))
;

x35269_35278.shouldComponentUpdate = ((function (x35269_35278){
return (function (){
var this$ = this;
return false;
});})(x35269_35278))
;

x35269_35278.render = ((function (x35269_35278){
return (function (){
var this__19918__auto__ = this;
var this$ = this__19918__auto__;
var _STAR_reconciler_STAR_35271 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_35272 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_35273 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_35274 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_35275 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__19918__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__19918__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__19918__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__19918__auto__);

om.next._STAR_parent_STAR_ = this__19918__auto__;

try{return om.dom.div.call(null,({"id": "klipse-container-wrapper"}),klipse.ui.outputs.container.container_inner.call(null,om.next.props.call(null,this$)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_35275;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_35274;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_35273;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_35272;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_35271;
}});})(x35269_35278))
;


klipse.ui.outputs.container.Container.prototype.constructor = klipse.ui.outputs.container.Container;

klipse.ui.outputs.container.Container.prototype.constructor.displayName = "klipse.ui.outputs.container/Container";

klipse.ui.outputs.container.Container.prototype.om$isComponent = true;

var x35276_35282 = klipse.ui.outputs.container.Container;


var x35277_35283 = klipse.ui.outputs.container.Container.prototype;


klipse.ui.outputs.container.Container.cljs$lang$type = true;

klipse.ui.outputs.container.Container.cljs$lang$ctorStr = "klipse.ui.outputs.container/Container";

klipse.ui.outputs.container.Container.cljs$lang$ctorPrWriter = (function (this__20079__auto__,writer__20080__auto__,opt__20081__auto__){
return cljs.core._write.call(null,writer__20080__auto__,"klipse.ui.outputs.container/Container");
});
klipse.ui.outputs.container.container = om.next.factory.call(null,klipse.ui.outputs.container.Container);

//# sourceMappingURL=container.js.map
