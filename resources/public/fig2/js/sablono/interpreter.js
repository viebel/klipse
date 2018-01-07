// Compiled by ClojureScript 1.9.908 {}
goog.provide('sablono.interpreter');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('goog.object');
goog.require('cljsjs.react');

/**
 * @interface
 */
sablono.interpreter.IInterpreter = function(){};

/**
 * Interpret a Clojure data structure as a React fn call.
 */
sablono.interpreter.interpret = (function sablono$interpreter$interpret(this$){
if((!((this$ == null))) && (!((this$.sablono$interpreter$IInterpreter$interpret$arity$1 == null)))){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1(this$);
} else {
var x__9096__auto__ = (((this$ == null))?null:this$);
var m__9097__auto__ = (sablono.interpreter.interpret[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,this$);
} else {
var m__9097__auto____$1 = (sablono.interpreter.interpret["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInterpreter.interpret",this$);
}
}
}
});

sablono.interpreter.wrap_form_element = (function sablono$interpreter$wrap_form_element(element,property,coerce){
return React.createClass(({"displayName": ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''), "getInitialState": (function (){
var this$ = this;
return ({"state_value": coerce.call(null,(this$.props[property]))});
}), "onChange": (function (e){
var this$ = this;
var handler = (this$.props["onChange"]);
if((handler == null)){
return null;
} else {
handler.call(null,e);

return this$.setState(({"state_value": (e.target[property])}));
}
}), "componentWillReceiveProps": (function (new_props){
var this$ = this;
var state_value = (this$.state["state_value"]);
var element_value = (ReactDOM.findDOMNode(this$)[property]);
if(cljs.core.not_EQ_.call(null,state_value,element_value)){
return this$.setState(({"state_value": element_value}));
} else {
return this$.setState(({"state_value": coerce.call(null,(new_props[property]))}));
}
}), "render": (function (){
var this$ = this;
var element_props = ({});
goog.object.extend(element_props,this$.props,({"onChange": (this$["onChange"]), "children": (this$.props["children"])}));

(element_props[property] = (this$.state["state_value"]));

return React.createElement(element,element_props);
})}));
});
sablono.interpreter.wrapped_input = sablono.interpreter.wrap_form_element.call(null,"input","value",cljs.core.str);
sablono.interpreter.wrapped_checked = sablono.interpreter.wrap_form_element.call(null,"input","checked",cljs.core.boolean$);
sablono.interpreter.wrapped_select = sablono.interpreter.wrap_form_element.call(null,"select","value",cljs.core.str);
sablono.interpreter.wrapped_textarea = sablono.interpreter.wrap_form_element.call(null,"textarea","value",cljs.core.str);
sablono.interpreter.defined_QMARK_ = (function sablono$interpreter$defined_QMARK_(x){
return (!((x == null))) && (!((void 0 === x)));
});
sablono.interpreter.create_element = (function sablono$interpreter$create_element(var_args){
var args__9647__auto__ = [];
var len__9640__auto___15564 = arguments.length;
var i__9641__auto___15565 = (0);
while(true){
if((i__9641__auto___15565 < len__9640__auto___15564)){
args__9647__auto__.push((arguments[i__9641__auto___15565]));

var G__15566 = (i__9641__auto___15565 + (1));
i__9641__auto___15565 = G__15566;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((2) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((2)),(0),null)):null);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9648__auto__);
});

sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,children){
var class$ = (function (){var or__8363__auto__ = ((!((props == null)))?(function (){var G__15562 = cljs.core.name.call(null,type);
switch (G__15562) {
case "input":
var G__15563 = props.type;
switch (G__15563) {
case "radio":
if(cljs.core.truth_(sablono.interpreter.defined_QMARK_.call(null,props.checked))){
return sablono.interpreter.wrapped_checked;
} else {
return null;
}

break;
case "checkbox":
if(cljs.core.truth_(sablono.interpreter.defined_QMARK_.call(null,props.checked))){
return sablono.interpreter.wrapped_checked;
} else {
return null;
}

break;
default:
if(cljs.core.truth_(sablono.interpreter.defined_QMARK_.call(null,props.value))){
return sablono.interpreter.wrapped_input;
} else {
return null;
}

}

break;
case "select":
if(cljs.core.truth_(sablono.interpreter.defined_QMARK_.call(null,props.value))){
return sablono.interpreter.wrapped_select;
} else {
return null;
}

break;
case "textarea":
if(cljs.core.truth_(sablono.interpreter.defined_QMARK_.call(null,props.value))){
return sablono.interpreter.wrapped_textarea;
} else {
return null;
}

break;
default:
return null;

}
})():null);
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return cljs.core.name.call(null,type);
}
})();
var children__$1 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,children);
if(!((props == null))){
if((props.value == null)){
props.value = undefined;
} else {
}

if((props.checked == null)){
props.checked = undefined;
} else {
}
} else {
}

if(cljs.core.empty_QMARK_.call(null,children__$1)){
return React.createElement(class$,props);
} else {
return cljs.core.apply.call(null,React.createElement,class$,props,children__$1);
}
});

sablono.interpreter.create_element.cljs$lang$maxFixedArity = (2);

sablono.interpreter.create_element.cljs$lang$applyTo = (function (seq15557){
var G__15558 = cljs.core.first.call(null,seq15557);
var seq15557__$1 = cljs.core.next.call(null,seq15557);
var G__15559 = cljs.core.first.call(null,seq15557__$1);
var seq15557__$2 = cljs.core.next.call(null,seq15557__$1);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic(G__15558,G__15559,seq15557__$2);
});

sablono.interpreter.attributes = (function sablono$interpreter$attributes(attrs){
var attrs__$1 = cljs.core.clj__GT_js.call(null,sablono.util.html_to_dom_attrs.call(null,attrs));
var class$ = attrs__$1.className;
var class$__$1 = ((cljs.core.array_QMARK_.call(null,class$))?clojure.string.join.call(null," ",class$):class$);
if(clojure.string.blank_QMARK_.call(null,class$__$1)){
delete attrs__$1["className"];
} else {
attrs__$1.className = class$__$1;
}

return attrs__$1;
});
/**
 * Interpret the seq `x` as HTML elements.
 */
sablono.interpreter.interpret_seq = (function sablono$interpreter$interpret_seq(x){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,sablono.interpreter.interpret),x);
});
/**
 * Render an element vector as a HTML element.
 */
sablono.interpreter.element = (function sablono$interpreter$element(element){
var vec__15569 = sablono.normalize.element.call(null,element);
var type = cljs.core.nth.call(null,vec__15569,(0),null);
var attrs = cljs.core.nth.call(null,vec__15569,(1),null);
var content = cljs.core.nth.call(null,vec__15569,(2),null);
return cljs.core.apply.call(null,sablono.interpreter.create_element,type,sablono.interpreter.attributes.call(null,attrs),sablono.interpreter.interpret_seq.call(null,content));
});
/**
 * Interpret the vector `x` as an HTML element or a the children of
 *   an element.
 */
sablono.interpreter.interpret_vec = (function sablono$interpreter$interpret_vec(x){
if(cljs.core.truth_(sablono.util.element_QMARK_.call(null,x))){
return sablono.interpreter.element.call(null,x);
} else {
return sablono.interpreter.interpret_seq.call(null,x);
}
});
cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec.call(null,this$__$1);
});

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec.call(null,this$__$1);
});

goog.object.set(sablono.interpreter.IInterpreter,"_",true);

goog.object.set(sablono.interpreter.interpret,"_",(function (this$){
return this$;
}));

goog.object.set(sablono.interpreter.IInterpreter,"null",true);

goog.object.set(sablono.interpreter.interpret,"null",(function (this$){
return null;
}));

//# sourceMappingURL=interpreter.js.map
