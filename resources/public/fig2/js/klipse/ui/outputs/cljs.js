// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.ui.outputs.cljs');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
klipse.ui.outputs.cljs.placeholder_textarea = ";; Press Ctrl-Enter or wait for 3 sec to eval in clojure...";
/**
 * @constructor
 */
klipse.ui.outputs.cljs.Cljs_textarea = (function klipse$ui$outputs$cljs$Cljs_textarea(){
var this__20076__auto__ = this;
React.Component.apply(this__20076__auto__,arguments);

if(!((this__20076__auto__.initLocalState == null))){
this__20076__auto__.state = this__20076__auto__.initLocalState();
} else {
this__20076__auto__.state = {};
}

return this__20076__auto__;
});

klipse.ui.outputs.cljs.Cljs_textarea.prototype = goog.object.clone(React.Component.prototype);

var x35229_35242 = klipse.ui.outputs.cljs.Cljs_textarea.prototype;
x35229_35242.componentWillUpdate = ((function (x35229_35242){
return (function (next_props__19920__auto__,next_state__19921__auto__){
var this__19919__auto__ = this;
if(((!((this__19919__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__19919__auto__.om$next$Ident$)))?true:false):false)){
var ident__19923__auto___35243 = om.next.ident.call(null,this__19919__auto__,om.next.props.call(null,this__19919__auto__));
var next_ident__19924__auto___35244 = om.next.ident.call(null,this__19919__auto__,om.next._next_props.call(null,next_props__19920__auto__,this__19919__auto__));
if(cljs.core.not_EQ_.call(null,ident__19923__auto___35243,next_ident__19924__auto___35244)){
var idxr__19925__auto___35245 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__19925__auto___35245 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__19925__auto___35245),((function (idxr__19925__auto___35245,ident__19923__auto___35243,next_ident__19924__auto___35244,this__19919__auto__,x35229_35242){
return (function (indexes__19926__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__19926__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__19923__auto___35243], null),cljs.core.disj,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__19924__auto___35244], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__19919__auto__);
});})(idxr__19925__auto___35245,ident__19923__auto___35243,next_ident__19924__auto___35244,this__19919__auto__,x35229_35242))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__19919__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19919__auto__);
});})(x35229_35242))
;

x35229_35242.shouldComponentUpdate = ((function (x35229_35242){
return (function (next_props__19920__auto__,next_state__19921__auto__){
var this__19919__auto__ = this;
var next_children__19922__auto__ = next_props__19920__auto__.children;
var next_props__19920__auto____$1 = goog.object.get(next_props__19920__auto__,"omcljs$value");
var next_props__19920__auto____$2 = (function (){var G__35231 = next_props__19920__auto____$1;
if((next_props__19920__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__35231);
} else {
return G__35231;
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
});})(x35229_35242))
;

x35229_35242.componentWillUnmount = ((function (x35229_35242){
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
});})(x35229_35242))
;

x35229_35242.componentDidUpdate = ((function (x35229_35242){
return (function (prev_props__19927__auto__,prev_state__19928__auto__){
var this__19919__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19919__auto__);
});})(x35229_35242))
;

x35229_35242.isMounted = ((function (x35229_35242){
return (function (){
var this__19919__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19919__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x35229_35242))
;

x35229_35242.componentWillMount = ((function (x35229_35242){
return (function (){
var this__19919__auto__ = this;
var indexer__19929__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19929__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19929__auto__,this__19919__auto__);
}
});})(x35229_35242))
;

x35229_35242.render = ((function (x35229_35242){
return (function (){
var this__19918__auto__ = this;
var this$ = this__19918__auto__;
var _STAR_reconciler_STAR_35232 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_35233 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_35234 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_35235 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_35236 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__19918__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__19918__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__19918__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__19918__auto__);

om.next._STAR_parent_STAR_ = this__19918__auto__;

try{var vec__35237 = new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var status = cljs.core.nth.call(null,vec__35237,(0),null);
var result = cljs.core.nth.call(null,vec__35237,(1),null);
var status_class = (cljs.core.truth_(status)?cljs.core.name.call(null,status):null);
return om.dom.section.call(null,({"className": "cljs-textarea"}),om.dom.textarea.call(null,({"value": (function (){var or__8363__auto__ = result;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return "";
}
})(), "className": status_class, "placeholder": klipse.ui.outputs.cljs.placeholder_textarea, "readOnly": true})));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_35236;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_35235;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_35234;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_35233;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_35232;
}});})(x35229_35242))
;


klipse.ui.outputs.cljs.Cljs_textarea.prototype.constructor = klipse.ui.outputs.cljs.Cljs_textarea;

klipse.ui.outputs.cljs.Cljs_textarea.prototype.constructor.displayName = "klipse.ui.outputs.cljs/Cljs-textarea";

klipse.ui.outputs.cljs.Cljs_textarea.prototype.om$isComponent = true;

var x35240_35246 = klipse.ui.outputs.cljs.Cljs_textarea;
/** @nocollapse */
x35240_35246.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x35240_35246.om$next$IQuery$query$arity$1 = ((function (x35240_35246){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402)], null);
});})(x35240_35246))
;


var x35241_35247 = klipse.ui.outputs.cljs.Cljs_textarea.prototype;

x35241_35247.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x35241_35247.om$next$IQuery$query$arity$1 = ((function (x35241_35247){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402)], null);
});})(x35241_35247))
;


klipse.ui.outputs.cljs.Cljs_textarea.cljs$lang$type = true;

klipse.ui.outputs.cljs.Cljs_textarea.cljs$lang$ctorStr = "klipse.ui.outputs.cljs/Cljs-textarea";

klipse.ui.outputs.cljs.Cljs_textarea.cljs$lang$ctorPrWriter = (function (this__20079__auto__,writer__20080__auto__,opt__20081__auto__){
return cljs.core._write.call(null,writer__20080__auto__,"klipse.ui.outputs.cljs/Cljs-textarea");
});
klipse.ui.outputs.cljs.cljs_textarea = om.next.factory.call(null,klipse.ui.outputs.cljs.Cljs_textarea);

//# sourceMappingURL=cljs.js.map
