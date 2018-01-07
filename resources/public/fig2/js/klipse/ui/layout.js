// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.ui.layout');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('klipse.ui.editors.cljs');
goog.require('klipse.ui.editors.js');
goog.require('klipse.ui.outputs.container');
goog.require('klipse.ui.outputs.cljs');
goog.require('klipse.ui.outputs.js');
/**
 * @constructor
 */
klipse.ui.layout.Layout = (function klipse$ui$layout$Layout(){
var this__20076__auto__ = this;
React.Component.apply(this__20076__auto__,arguments);

if(!((this__20076__auto__.initLocalState == null))){
this__20076__auto__.state = this__20076__auto__.initLocalState();
} else {
this__20076__auto__.state = {};
}

return this__20076__auto__;
});

klipse.ui.layout.Layout.prototype = goog.object.clone(React.Component.prototype);

var x35308_35321 = klipse.ui.layout.Layout.prototype;
x35308_35321.componentWillUpdate = ((function (x35308_35321){
return (function (next_props__19920__auto__,next_state__19921__auto__){
var this__19919__auto__ = this;
if(((!((this__19919__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__19919__auto__.om$next$Ident$)))?true:false):false)){
var ident__19923__auto___35322 = om.next.ident.call(null,this__19919__auto__,om.next.props.call(null,this__19919__auto__));
var next_ident__19924__auto___35323 = om.next.ident.call(null,this__19919__auto__,om.next._next_props.call(null,next_props__19920__auto__,this__19919__auto__));
if(cljs.core.not_EQ_.call(null,ident__19923__auto___35322,next_ident__19924__auto___35323)){
var idxr__19925__auto___35324 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__19925__auto___35324 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__19925__auto___35324),((function (idxr__19925__auto___35324,ident__19923__auto___35322,next_ident__19924__auto___35323,this__19919__auto__,x35308_35321){
return (function (indexes__19926__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__19926__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__19923__auto___35322], null),cljs.core.disj,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__19924__auto___35323], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__19919__auto__);
});})(idxr__19925__auto___35324,ident__19923__auto___35322,next_ident__19924__auto___35323,this__19919__auto__,x35308_35321))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__19919__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19919__auto__);
});})(x35308_35321))
;

x35308_35321.shouldComponentUpdate = ((function (x35308_35321){
return (function (next_props__19920__auto__,next_state__19921__auto__){
var this__19919__auto__ = this;
var next_children__19922__auto__ = next_props__19920__auto__.children;
var next_props__19920__auto____$1 = goog.object.get(next_props__19920__auto__,"omcljs$value");
var next_props__19920__auto____$2 = (function (){var G__35310 = next_props__19920__auto____$1;
if((next_props__19920__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__35310);
} else {
return G__35310;
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
});})(x35308_35321))
;

x35308_35321.componentWillUnmount = ((function (x35308_35321){
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
});})(x35308_35321))
;

x35308_35321.componentDidUpdate = ((function (x35308_35321){
return (function (prev_props__19927__auto__,prev_state__19928__auto__){
var this__19919__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19919__auto__);
});})(x35308_35321))
;

x35308_35321.isMounted = ((function (x35308_35321){
return (function (){
var this__19919__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19919__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x35308_35321))
;

x35308_35321.componentWillMount = ((function (x35308_35321){
return (function (){
var this__19919__auto__ = this;
var indexer__19929__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19929__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19929__auto__,this__19919__auto__);
}
});})(x35308_35321))
;

x35308_35321.render = ((function (x35308_35321){
return (function (){
var this__19918__auto__ = this;
var this$ = this__19918__auto__;
var _STAR_reconciler_STAR_35311 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_35312 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_35313 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_35314 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_35315 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__19918__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__19918__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__19918__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__19918__auto__);

om.next._STAR_parent_STAR_ = this__19918__auto__;

try{var map__35316 = om.next.props.call(null,this$);
var map__35316__$1 = ((((!((map__35316 == null)))?((((map__35316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35316):map__35316);
var code_layout = cljs.core.get.call(null,map__35316__$1,new cljs.core.Keyword(null,"code-layout","code-layout",1098272213));
var G__35318 = code_layout;
var G__35318__$1 = (((G__35318 instanceof cljs.core.Keyword))?G__35318.fqn:null);
switch (G__35318__$1) {
case "eval-only":
return om.dom.div.call(null,({"className": "klipse-layout klipse-layout-eval-only"}),om.dom.div.call(null,({"className": "klipse-item"}),klipse.ui.editors.cljs.cljs_editor.call(null,om.next.props.call(null,this$))),om.dom.div.call(null,({"className": "klipse-item"}),klipse.ui.outputs.cljs.cljs_textarea.call(null,om.next.props.call(null,this$))),om.dom.div.call(null,({"className": "klipse-item"}),klipse.ui.outputs.js.js_textarea.call(null,om.next.props.call(null,this$))));

break;
case "js-only":
return om.dom.div.call(null,({"className": "klipse-layout klipse-layout-js-only"}),om.dom.div.call(null,({"className": "klipse-item"}),klipse.ui.editors.cljs.cljs_editor.call(null,om.next.props.call(null,this$))),om.dom.div.call(null,({"className": "klipse-item"}),klipse.ui.editors.js.js_editor.call(null,om.next.props.call(null,this$))));

break;
case "with-container":
return om.dom.div.call(null,({"className": "klipse-layout klipse-layout-global"}),om.dom.div.call(null,({"className": "klipse-item"}),klipse.ui.editors.cljs.cljs_editor.call(null,om.next.props.call(null,this$))),om.dom.div.call(null,({"className": "klipse-item"}),klipse.ui.outputs.container.container.call(null,om.next.props.call(null,this$))),om.dom.div.call(null,({"className": "klipse-item"}),klipse.ui.outputs.cljs.cljs_textarea.call(null,om.next.props.call(null,this$))),om.dom.div.call(null,({"className": "klipse-item"}),klipse.ui.outputs.js.js_textarea.call(null,om.next.props.call(null,this$))));

break;
default:
return om.dom.div.call(null,({"className": "klipse-layout klipse-layout-global"}),om.dom.div.call(null,({"className": "klipse-item"}),klipse.ui.editors.cljs.cljs_editor.call(null,om.next.props.call(null,this$))),om.dom.div.call(null,({"className": "klipse-item"}),klipse.ui.editors.js.js_editor.call(null,om.next.props.call(null,this$))),om.dom.div.call(null,({"className": "klipse-item"}),klipse.ui.outputs.cljs.cljs_textarea.call(null,om.next.props.call(null,this$))),om.dom.div.call(null,({"className": "klipse-item"}),klipse.ui.outputs.js.js_textarea.call(null,om.next.props.call(null,this$))));

}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_35315;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_35314;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_35313;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_35312;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_35311;
}});})(x35308_35321))
;


klipse.ui.layout.Layout.prototype.constructor = klipse.ui.layout.Layout;

klipse.ui.layout.Layout.prototype.constructor.displayName = "klipse.ui.layout/Layout";

klipse.ui.layout.Layout.prototype.om$isComponent = true;

var x35319_35326 = klipse.ui.layout.Layout;
/** @nocollapse */
x35319_35326.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x35319_35326.om$next$IQuery$query$arity$1 = ((function (x35319_35326){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code-layout","code-layout",1098272213)),(function (){var x__9317__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input","input",556931961)),(function (){var x__9317__auto__ = om.next.get_query.call(null,klipse.ui.editors.cljs.Cljs_editor);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),(function (){var x__9317__auto__ = om.next.get_query.call(null,klipse.ui.editors.js.Js_editor);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402)),(function (){var x__9317__auto__ = om.next.get_query.call(null,klipse.ui.outputs.cljs.Cljs_textarea);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"evaluation-js","evaluation-js",1837122413)),(function (){var x__9317__auto__ = om.next.get_query.call(null,klipse.ui.outputs.js.Js_textarea);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))));
});})(x35319_35326))
;


var x35320_35327 = klipse.ui.layout.Layout.prototype;

x35320_35327.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x35320_35327.om$next$IQuery$query$arity$1 = ((function (x35320_35327){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code-layout","code-layout",1098272213)),(function (){var x__9317__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input","input",556931961)),(function (){var x__9317__auto__ = om.next.get_query.call(null,klipse.ui.editors.cljs.Cljs_editor);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),(function (){var x__9317__auto__ = om.next.get_query.call(null,klipse.ui.editors.js.Js_editor);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402)),(function (){var x__9317__auto__ = om.next.get_query.call(null,klipse.ui.outputs.cljs.Cljs_textarea);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"evaluation-js","evaluation-js",1837122413)),(function (){var x__9317__auto__ = om.next.get_query.call(null,klipse.ui.outputs.js.Js_textarea);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))));
});})(x35320_35327))
;


klipse.ui.layout.Layout.cljs$lang$type = true;

klipse.ui.layout.Layout.cljs$lang$ctorStr = "klipse.ui.layout/Layout";

klipse.ui.layout.Layout.cljs$lang$ctorPrWriter = (function (this__20079__auto__,writer__20080__auto__,opt__20081__auto__){
return cljs.core._write.call(null,writer__20080__auto__,"klipse.ui.layout/Layout");
});
klipse.ui.layout.layout = om.next.factory.call(null,klipse.ui.layout.Layout);

//# sourceMappingURL=layout.js.map
