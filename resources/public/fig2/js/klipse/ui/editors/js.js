// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.ui.editors.js');
goog.require('cljs.core');
goog.require('klipse.ui.editors.editor');
goog.require('om.next');
goog.require('om.dom');
klipse.ui.editors.js.config_editor = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),true,new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),true,new cljs.core.Keyword(null,"lineWrapping","lineWrapping",1248501985),true,new cljs.core.Keyword(null,"autoCloseBrackets","autoCloseBrackets",1157493311),true,new cljs.core.Keyword(null,"mode","mode",654403691),"javascript",new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true,new cljs.core.Keyword(null,"scrollbarStyle","scrollbarStyle",-963515367),"overlay"], null);
klipse.ui.editors.js.placeholder_editor = ";; Press Ctrl-Enter or wait for 3 sec to transpile...";
klipse.ui.editors.js.init_editor = (function klipse$ui$editors$js$init_editor(compiler){
return klipse.ui.editors.editor.create.call(null,"code-js",klipse.ui.editors.js.config_editor);
});
/**
 * @constructor
 */
klipse.ui.editors.js.Js_editor = (function klipse$ui$editors$js$Js_editor(){
var this__20076__auto__ = this;
React.Component.apply(this__20076__auto__,arguments);

if(!((this__20076__auto__.initLocalState == null))){
this__20076__auto__.state = this__20076__auto__.initLocalState();
} else {
this__20076__auto__.state = {};
}

return this__20076__auto__;
});

klipse.ui.editors.js.Js_editor.prototype = goog.object.clone(React.Component.prototype);

var x34451_34464 = klipse.ui.editors.js.Js_editor.prototype;
x34451_34464.componentWillUpdate = ((function (x34451_34464){
return (function (next_props__19920__auto__,next_state__19921__auto__){
var this__19919__auto__ = this;
if(((!((this__19919__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__19919__auto__.om$next$Ident$)))?true:false):false)){
var ident__19923__auto___34465 = om.next.ident.call(null,this__19919__auto__,om.next.props.call(null,this__19919__auto__));
var next_ident__19924__auto___34466 = om.next.ident.call(null,this__19919__auto__,om.next._next_props.call(null,next_props__19920__auto__,this__19919__auto__));
if(cljs.core.not_EQ_.call(null,ident__19923__auto___34465,next_ident__19924__auto___34466)){
var idxr__19925__auto___34467 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__19925__auto___34467 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__19925__auto___34467),((function (idxr__19925__auto___34467,ident__19923__auto___34465,next_ident__19924__auto___34466,this__19919__auto__,x34451_34464){
return (function (indexes__19926__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__19926__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__19923__auto___34465], null),cljs.core.disj,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__19924__auto___34466], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__19919__auto__);
});})(idxr__19925__auto___34467,ident__19923__auto___34465,next_ident__19924__auto___34466,this__19919__auto__,x34451_34464))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__19919__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19919__auto__);
});})(x34451_34464))
;

x34451_34464.shouldComponentUpdate = ((function (x34451_34464){
return (function (next_props__19920__auto__,next_state__19921__auto__){
var this__19919__auto__ = this;
var next_children__19922__auto__ = next_props__19920__auto__.children;
var next_props__19920__auto____$1 = goog.object.get(next_props__19920__auto__,"omcljs$value");
var next_props__19920__auto____$2 = (function (){var G__34453 = next_props__19920__auto____$1;
if((next_props__19920__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__34453);
} else {
return G__34453;
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
});})(x34451_34464))
;

x34451_34464.componentWillUnmount = ((function (x34451_34464){
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
});})(x34451_34464))
;

x34451_34464.isMounted = ((function (x34451_34464){
return (function (){
var this__19919__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19919__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x34451_34464))
;

x34451_34464.componentWillMount = ((function (x34451_34464){
return (function (){
var this__19919__auto__ = this;
var indexer__19929__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19929__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19929__auto__,this__19919__auto__);
}
});})(x34451_34464))
;

x34451_34464.componentDidUpdate = ((function (x34451_34464){
return (function (prev_props__19909__auto__,prev_state__19910__auto__){
var this__19908__auto__ = this;
var this$ = this__19908__auto__;
var prev_props = om.next._prev_props.call(null,prev_props__19909__auto__,this__19908__auto__);
var prev_state = goog.object.get(prev_state__19910__auto__,"omcljs$previousState");
var vec__34454_34468 = new cljs.core.Keyword(null,"compilation","compilation",-1328774561).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var status_34469 = cljs.core.nth.call(null,vec__34454_34468,(0),null);
var result_34470 = cljs.core.nth.call(null,vec__34454_34468,(1),null);
var editor_js_34471 = om.next.get_state.call(null,this$,new cljs.core.Keyword(null,"editor","editor",-989377770));
if(cljs.core.truth_(editor_js_34471)){
klipse.ui.editors.editor.do_indent.call(null,klipse.ui.editors.editor.set_value.call(null,editor_js_34471,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),status_34469))?result_34470:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_34470)].join(''))));
} else {
}

return om.next.clear_prev_props_BANG_.call(null,this__19908__auto__);
});})(x34451_34464))
;

x34451_34464.componentDidMount = ((function (x34451_34464){
return (function (){
var this$ = this;
return om.next.set_state_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor","editor",-989377770),klipse.ui.editors.js.init_editor.call(null,this$)], null));
});})(x34451_34464))
;

x34451_34464.render = ((function (x34451_34464){
return (function (){
var this__19918__auto__ = this;
var this$ = this__19918__auto__;
var _STAR_reconciler_STAR_34457 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_34458 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_34459 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_34460 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_34461 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__19918__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__19918__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__19918__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__19918__auto__);

om.next._STAR_parent_STAR_ = this__19918__auto__;

try{return om.dom.section.call(null,({"className": "js-editor"}),om.dom.textarea.call(null,({"id": "code-js", "placeholder": klipse.ui.editors.js.placeholder_editor})));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_34461;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_34460;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_34459;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_34458;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_34457;
}});})(x34451_34464))
;


klipse.ui.editors.js.Js_editor.prototype.constructor = klipse.ui.editors.js.Js_editor;

klipse.ui.editors.js.Js_editor.prototype.constructor.displayName = "klipse.ui.editors.js/Js-editor";

klipse.ui.editors.js.Js_editor.prototype.om$isComponent = true;

var x34462_34472 = klipse.ui.editors.js.Js_editor;
/** @nocollapse */
x34462_34472.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x34462_34472.om$next$IQuery$query$arity$1 = ((function (x34462_34472){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null);
});})(x34462_34472))
;


var x34463_34473 = klipse.ui.editors.js.Js_editor.prototype;

x34463_34473.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x34463_34473.om$next$IQuery$query$arity$1 = ((function (x34463_34473){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null);
});})(x34463_34473))
;


klipse.ui.editors.js.Js_editor.cljs$lang$type = true;

klipse.ui.editors.js.Js_editor.cljs$lang$ctorStr = "klipse.ui.editors.js/Js-editor";

klipse.ui.editors.js.Js_editor.cljs$lang$ctorPrWriter = (function (this__20079__auto__,writer__20080__auto__,opt__20081__auto__){
return cljs.core._write.call(null,writer__20080__auto__,"klipse.ui.editors.js/Js-editor");
});
klipse.ui.editors.js.js_editor = om.next.factory.call(null,klipse.ui.editors.js.Js_editor);

//# sourceMappingURL=js.js.map
