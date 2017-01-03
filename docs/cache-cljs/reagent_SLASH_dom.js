goog.provide("reagent.dom");
if(typeof reagent.dom.imported !== 'undefined'){
} else {
(function (){
reagent.dom.imported = null; return (
new cljs.core.Var(function(){return reagent.dom.imported;},new cljs.core.Symbol("reagent.dom","imported","reagent.dom/imported",(-289376445),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.dom","reagent.dom",(-2138920962),null),new cljs.core.Symbol(null,"imported","imported",(656152905),null),"reagent/dom.cljs",(28),(1),(10),(10),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.dom.imported)?reagent.dom.imported.cljs$lang$test:null)])));})()
;
}
(function (){
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__20817__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
}); return (
new cljs.core.Var(function(){return reagent.dom.module;},new cljs.core.Symbol("reagent.dom","module","reagent.dom/module",(-807511268),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.dom","reagent.dom",(-2138920962),null),new cljs.core.Symbol(null,"module","module",(-1229817578),null),"reagent/dom.cljs",(13),(1),(12),(12),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(reagent.dom.module)?reagent.dom.module.cljs$lang$test:null)])));})()
;
if(typeof reagent.dom.roots !== 'undefined'){
} else {
(function (){
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY); return (
new cljs.core.Var(function(){return reagent.dom.roots;},new cljs.core.Symbol("reagent.dom","roots","reagent.dom/roots",(-343621265),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.dom","reagent.dom",(-2138920962),null),new cljs.core.Symbol(null,"roots","roots",(551612277),null),"reagent/dom.cljs",(25),(1),(22),(22),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.dom.roots)?reagent.dom.roots.cljs$lang$test:null)])));})()
;
}
(function (){
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
}); return (
new cljs.core.Var(function(){return reagent.dom.unmount_comp;},new cljs.core.Symbol("reagent.dom","unmount-comp","reagent.dom/unmount-comp",(-1611113582),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.dom","reagent.dom",(-2138920962),null),new cljs.core.Symbol(null,"unmount-comp","unmount-comp",(-719472236),null),"reagent/dom.cljs",(20),(1),(24),(24),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"container","container",(-96406180),null)], null)),null,(cljs.core.truth_(reagent.dom.unmount_comp)?reagent.dom.unmount_comp.cljs$lang$test:null)])));})()
;
(function (){
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_380 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_380){
return (function (){
var _STAR_always_update_STAR_381 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_381;
}});})(_STAR_always_update_STAR_380))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_380;
}}); return (
new cljs.core.Var(function(){return reagent.dom.render_comp;},new cljs.core.Symbol("reagent.dom","render-comp","reagent.dom/render-comp",(-304101378),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.dom","reagent.dom",(-2138920962),null),new cljs.core.Symbol(null,"render-comp","render-comp",(-1535952444),null),"reagent/dom.cljs",(19),(1),(28),(28),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"container","container",(-96406180),null),new cljs.core.Symbol(null,"callback","callback",(935395299),null)], null)),null,(cljs.core.truth_(reagent.dom.render_comp)?reagent.dom.render_comp.cljs$lang$test:null)])));})()
;
(function (){
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
}); return (
new cljs.core.Var(function(){return reagent.dom.re_render_component;},new cljs.core.Symbol("reagent.dom","re-render-component","reagent.dom/re-render-component",(1678013624),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.dom","reagent.dom",(-2138920962),null),new cljs.core.Symbol(null,"re-render-component","re-render-component",(-1293919582),null),"reagent/dom.cljs",(27),(1),(38),(38),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"container","container",(-96406180),null)], null)),null,(cljs.core.truth_(reagent.dom.re_render_component)?reagent.dom.re_render_component.cljs$lang$test:null)])));})()
;
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
(function (){
reagent.dom.render = (function reagent$dom$render(var_args){
var args382 = [];
var len__23656__auto___385 = arguments.length;
var i__23657__auto___386 = (0);
while(true){
if((i__23657__auto___386 < len__23656__auto___385)){
args382.push((arguments[i__23657__auto___386]));

var G__387 = (i__23657__auto___386 + (1));
i__23657__auto___386 = G__387;
continue;
} else {
}
break;
}

var G__384 = args382.length;
switch (G__384) {
case (2):
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args382.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return reagent.dom.render;},new cljs.core.Symbol("reagent.dom","render","reagent.dom/render",(-1216356973),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.dom","reagent.dom",(-2138920962),null),new cljs.core.Symbol(null,"render","render",(232498073),null),"reagent/dom.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"container","container",(-96406180),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"container","container",(-96406180),null),new cljs.core.Symbol(null,"callback","callback",(935395299),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"container","container",(-96406180),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"container","container",(-96406180),null),new cljs.core.Symbol(null,"callback","callback",(935395299),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(41),(41),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"container","container",(-96406180),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"container","container",(-96406180),null),new cljs.core.Symbol(null,"callback","callback",(935395299),null)], null)),"Render a Reagent component into the DOM. The first argument may be\n  either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.\n\n  Optionally takes a callback that is called when the component is in place.\n\n  Returns the mounted component instance.",(cljs.core.truth_(reagent.dom.render)?reagent.dom.render.cljs$lang$test:null)])));})()
;

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return reagent.dom.render;},new cljs.core.Symbol("reagent.dom","render","reagent.dom/render",(-1216356973),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.dom","reagent.dom",(-2138920962),null),new cljs.core.Symbol(null,"render","render",(232498073),null),"reagent/dom.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"container","container",(-96406180),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"container","container",(-96406180),null),new cljs.core.Symbol(null,"callback","callback",(935395299),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"container","container",(-96406180),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"container","container",(-96406180),null),new cljs.core.Symbol(null,"callback","callback",(935395299),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(41),(41),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"container","container",(-96406180),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"container","container",(-96406180),null),new cljs.core.Symbol(null,"callback","callback",(935395299),null)], null)),"Render a Reagent component into the DOM. The first argument may be\n  either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.\n\n  Optionally takes a callback that is called when the component is in place.\n\n  Returns the mounted component instance.",(cljs.core.truth_(reagent.dom.render)?reagent.dom.render.cljs$lang$test:null)]));
(function (){
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
}); return (
new cljs.core.Var(function(){return reagent.dom.unmount_component_at_node;},new cljs.core.Symbol("reagent.dom","unmount-component-at-node","reagent.dom/unmount-component-at-node",(-401354396),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.dom","reagent.dom",(-2138920962),null),new cljs.core.Symbol(null,"unmount-component-at-node","unmount-component-at-node",(939521902),null),"reagent/dom.cljs",(32),(1),(56),(56),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"container","container",(-96406180),null)], null)),null,(cljs.core.truth_(reagent.dom.unmount_component_at_node)?reagent.dom.unmount_component_at_node.cljs$lang$test:null)])));})()
;
/**
 * Returns the root DOM node of a mounted component.
 */
(function (){
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
}); return (
new cljs.core.Var(function(){return reagent.dom.dom_node;},new cljs.core.Symbol("reagent.dom","dom-node","reagent.dom/dom-node",(-1251855976),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.dom","reagent.dom",(-2138920962),null),new cljs.core.Symbol(null,"dom-node","dom-node",(2092815254),null),"reagent/dom.cljs",(15),(1),(59),(59),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Returns the root DOM node of a mounted component.",(cljs.core.truth_(reagent.dom.dom_node)?reagent.dom.dom_node.cljs$lang$test:null)])));})()
;
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
(function (){
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__393_397 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__394_398 = null;
var count__395_399 = (0);
var i__396_400 = (0);
while(true){
if((i__396_400 < count__395_399)){
var v_401 = cljs.core._nth.call(null,chunk__394_398,i__396_400);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_401);

var G__402 = seq__393_397;
var G__403 = chunk__394_398;
var G__404 = count__395_399;
var G__405 = (i__396_400 + (1));
seq__393_397 = G__402;
chunk__394_398 = G__403;
count__395_399 = G__404;
i__396_400 = G__405;
continue;
} else {
var temp__19834__auto___406 = cljs.core.seq.call(null,seq__393_397);
if(temp__19834__auto___406){
var seq__393_407__$1 = temp__19834__auto___406;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__393_407__$1)){
var c__23363__auto___408 = cljs.core.chunk_first.call(null,seq__393_407__$1);
var G__409 = cljs.core.chunk_rest.call(null,seq__393_407__$1);
var G__410 = c__23363__auto___408;
var G__411 = cljs.core.count.call(null,c__23363__auto___408);
var G__412 = (0);
seq__393_397 = G__409;
chunk__394_398 = G__410;
count__395_399 = G__411;
i__396_400 = G__412;
continue;
} else {
var v_413 = cljs.core.first.call(null,seq__393_407__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_413);

var G__414 = cljs.core.next.call(null,seq__393_407__$1);
var G__415 = null;
var G__416 = (0);
var G__417 = (0);
seq__393_397 = G__414;
chunk__394_398 = G__415;
count__395_399 = G__416;
i__396_400 = G__417;
continue;
}
} else {
}
}
break;
}

return "Updated";
}); return (
new cljs.core.Var(function(){return reagent.dom.force_update_all;},new cljs.core.Symbol("reagent.dom","force-update-all","reagent.dom/force-update-all",(519296605),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.dom","reagent.dom",(-2138920962),null),new cljs.core.Symbol(null,"force-update-all","force-update-all",(1197469763),null),"reagent/dom.cljs",(23),(1),(66),(66),cljs.core.list(cljs.core.PersistentVector.EMPTY),"Force re-rendering of all mounted Reagent components. This is\n  probably only useful in a development environment, when you want to\n  update components in response to some dynamic changes to code.\n\n  Note that force-update-all may not update root components. This\n  happens if a component 'foo' is mounted with `(render [foo])` (since\n  functions are passed by value, and not by reference, in\n  ClojureScript). To get around this you'll have to introduce a layer\n  of indirection, for example by using `(render [#'foo])` instead.",(cljs.core.truth_(reagent.dom.force_update_all)?reagent.dom.force_update_all.cljs$lang$test:null)])));})()
;
