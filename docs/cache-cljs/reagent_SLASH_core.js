goog.provide("reagent.core");
(function (){
reagent.core.is_client = reagent.impl.util.is_client; return (
new cljs.core.Var(function(){return reagent.core.is_client;},new cljs.core.Symbol("reagent.core","is-client","reagent.core/is-client",(1057846450),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"is-client","is-client",(-580030505),null),"reagent/core.cljs",(15),(1),(14),(14),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.core.is_client)?reagent.core.is_client.cljs$lang$test:null)])));})()
;
(function (){
reagent.core.react = reagent.impl.util.react; return (
new cljs.core.Var(function(){return reagent.core.react;},new cljs.core.Symbol("reagent.core","react","reagent.core/react",(-625575698),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"react","react",(-1198111351),null),"reagent/core.cljs",(11),(1),(16),(16),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.core.react)?reagent.core.react.cljs$lang$test:null)])));})()
;
/**
 * Create a native React element, by calling React.createElement directly.
 * 
 *   That means the second argument must be a javascript object (or nil), and
 *   that any Reagent hiccup forms must be processed with as-element. For example
 *   like this:
 * 
 *  (r/create-element "div" #js{:className "foo"}
 *     "Hi " (r/as-element [:strong "world!"])
 * 
 *   which is equivalent to
 * 
 *  [:div.foo "Hi" [:strong "world!"]]
 */
(function (){
reagent.core.create_element = (function reagent$core$create_element(var_args){
var args425 = [];
var len__23656__auto___432 = arguments.length;
var i__23657__auto___433 = (0);
while(true){
if((i__23657__auto___433 < len__23656__auto___432)){
args425.push((arguments[i__23657__auto___433]));

var G__434 = (i__23657__auto___433 + (1));
i__23657__auto___433 = G__434;
continue;
} else {
}
break;
}

var G__431 = args425.length;
switch (G__431) {
case (1):
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__23675__auto__ = (new cljs.core.IndexedSeq(args425.slice((3)),(0),null));
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23675__auto__);

}
}); return (
new cljs.core.Var(function(){return reagent.core.create_element;},new cljs.core.Symbol("reagent.core","create-element","reagent.core/create-element",(-1888667366),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"create-element","create-element",(1833774591),null),"reagent/core.cljs",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"props","props",(2093813254),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"props","props",(2093813254),null),new cljs.core.Symbol(null,"child","child",(-2030468224),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"props","props",(2093813254),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"props","props",(2093813254),null),new cljs.core.Symbol(null,"child","child",(-2030468224),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"props","props",(2093813254),null),new cljs.core.Symbol(null,"child","child",(-2030468224),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"children","children",(699969545),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null,null)], null),(1),(18),(18),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"props","props",(2093813254),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"props","props",(2093813254),null),new cljs.core.Symbol(null,"child","child",(-2030468224),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"props","props",(2093813254),null),new cljs.core.Symbol(null,"child","child",(-2030468224),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"children","children",(699969545),null)], null)),"Create a native React element, by calling React.createElement directly.\n\n  That means the second argument must be a javascript object (or nil), and\n  that any Reagent hiccup forms must be processed with as-element. For example\n  like this:\n\n    (r/create-element \"div\" #js{:className \"foo\"}\n       \"Hi \" (r/as-element [:strong \"world!\"])\n\n  which is equivalent to\n\n    [:div.foo \"Hi\" [:strong \"world!\"]]",(cljs.core.truth_(reagent.core.create_element)?reagent.core.create_element.cljs$lang$test:null)])));})()
;

reagent.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (type){
return reagent.core.create_element.call(null,type,null);
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,props){
if(!(cljs.core.map_QMARK_.call(null,props))){
} else {
throw (new Error("Assert failed: (not (map? props))"));
}

return (reagent.core.react["createElement"])(type,props);
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,props,child){
if(!(cljs.core.map_QMARK_.call(null,props))){
} else {
throw (new Error("Assert failed: (not (map? props))"));
}

return (reagent.core.react["createElement"])(type,props,child);
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,child,children){
if(!(cljs.core.map_QMARK_.call(null,props))){
} else {
throw (new Error("Assert failed: (not (map? props))"));
}

return cljs.core.apply.call(null,(reagent.core.react["createElement"]),type,props,child,children);
});

reagent.core.create_element.cljs$lang$applyTo = (function (seq426){
var G__427 = cljs.core.first.call(null,seq426);
var seq426__$1 = cljs.core.next.call(null,seq426);
var G__428 = cljs.core.first.call(null,seq426__$1);
var seq426__$2 = cljs.core.next.call(null,seq426__$1);
var G__429 = cljs.core.first.call(null,seq426__$2);
var seq426__$3 = cljs.core.next.call(null,seq426__$2);
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic(G__427,G__428,G__429,seq426__$3);
});

reagent.core.create_element.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return reagent.core.create_element;},new cljs.core.Symbol("reagent.core","create-element","reagent.core/create-element",(-1888667366),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"create-element","create-element",(1833774591),null),"reagent/core.cljs",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"props","props",(2093813254),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"props","props",(2093813254),null),new cljs.core.Symbol(null,"child","child",(-2030468224),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"props","props",(2093813254),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"props","props",(2093813254),null),new cljs.core.Symbol(null,"child","child",(-2030468224),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"props","props",(2093813254),null),new cljs.core.Symbol(null,"child","child",(-2030468224),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"children","children",(699969545),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null,null)], null),(1),(18),(18),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"props","props",(2093813254),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"props","props",(2093813254),null),new cljs.core.Symbol(null,"child","child",(-2030468224),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"props","props",(2093813254),null),new cljs.core.Symbol(null,"child","child",(-2030468224),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"children","children",(699969545),null)], null)),"Create a native React element, by calling React.createElement directly.\n\n  That means the second argument must be a javascript object (or nil), and\n  that any Reagent hiccup forms must be processed with as-element. For example\n  like this:\n\n    (r/create-element \"div\" #js{:className \"foo\"}\n       \"Hi \" (r/as-element [:strong \"world!\"])\n\n  which is equivalent to\n\n    [:div.foo \"Hi\" [:strong \"world!\"]]",(cljs.core.truth_(reagent.core.create_element)?reagent.core.create_element.cljs$lang$test:null)]));
/**
 * Turns a vector of Hiccup syntax into a React element. Returns form
 *   unchanged if it is not a vector.
 */
(function (){
reagent.core.as_element = (function reagent$core$as_element(form){
return reagent.impl.template.as_element.call(null,form);
}); return (
new cljs.core.Var(function(){return reagent.core.as_element;},new cljs.core.Symbol("reagent.core","as-element","reagent.core/as-element",(-1369748434),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"as-element","as-element",(-2139409597),null),"reagent/core.cljs",(17),(1),(43),(43),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",(16469056),null)], null)),"Turns a vector of Hiccup syntax into a React element. Returns form\n  unchanged if it is not a vector.",(cljs.core.truth_(reagent.core.as_element)?reagent.core.as_element.cljs$lang$test:null)])));})()
;
/**
 * Returns an adapter for a native React class, that may be used
 *   just like a Reagent component function or class in Hiccup forms.
 */
(function (){
reagent.core.adapt_react_class = (function reagent$core$adapt_react_class(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

return reagent.impl.template.adapt_react_class.call(null,c);
}); return (
new cljs.core.Var(function(){return reagent.core.adapt_react_class;},new cljs.core.Symbol("reagent.core","adapt-react-class","reagent.core/adapt-react-class",(1789410154),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"adapt-react-class","adapt-react-class",(1221068673),null),"reagent/core.cljs",(24),(1),(49),(49),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),"Returns an adapter for a native React class, that may be used\n  just like a Reagent component function or class in Hiccup forms.",(cljs.core.truth_(reagent.core.adapt_react_class)?reagent.core.adapt_react_class.cljs$lang$test:null)])));})()
;
/**
 * Returns an adapter for a Reagent component, that may be used from
 *   React, for example in JSX. A single argument, props, is passed to
 *   the component, converted to a map.
 */
(function (){
reagent.core.reactify_component = (function reagent$core$reactify_component(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

return reagent.impl.component.reactify_component.call(null,c);
}); return (
new cljs.core.Var(function(){return reagent.core.reactify_component;},new cljs.core.Symbol("reagent.core","reactify-component","reagent.core/reactify-component",(-385504376),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"reactify-component","reactify-component",(-882526483),null),"reagent/core.cljs",(25),(1),(56),(56),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),"Returns an adapter for a Reagent component, that may be used from\n  React, for example in JSX. A single argument, props, is passed to\n  the component, converted to a map.",(cljs.core.truth_(reagent.core.reactify_component)?reagent.core.reactify_component.cljs$lang$test:null)])));})()
;
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
(function (){
reagent.core.render = (function reagent$core$render(var_args){
var args436 = [];
var len__23656__auto___439 = arguments.length;
var i__23657__auto___440 = (0);
while(true){
if((i__23657__auto___440 < len__23656__auto___439)){
args436.push((arguments[i__23657__auto___440]));

var G__441 = (i__23657__auto___440 + (1));
i__23657__auto___440 = G__441;
continue;
} else {
}
break;
}

var G__438 = args436.length;
switch (G__438) {
case (2):
return reagent.core.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return reagent.core.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args436.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return reagent.core.render;},new cljs.core.Symbol("reagent.core","render","reagent.core/render",(800839204),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"render","render",(232498073),null),"reagent/core.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"container","container",(-96406180),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"container","container",(-96406180),null),new cljs.core.Symbol(null,"callback","callback",(935395299),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"container","container",(-96406180),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"container","container",(-96406180),null),new cljs.core.Symbol(null,"callback","callback",(935395299),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(64),(64),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"container","container",(-96406180),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"container","container",(-96406180),null),new cljs.core.Symbol(null,"callback","callback",(935395299),null)], null)),"Render a Reagent component into the DOM. The first argument may be\n  either a vector (using Reagent's Hiccup syntax), or a React element.\n  The second argument should be a DOM node.\n\n  Optionally takes a callback that is called when the component is in place.\n\n  Returns the mounted component instance.",(cljs.core.truth_(reagent.core.render)?reagent.core.render.cljs$lang$test:null)])));})()
;

reagent.core.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container);
});

reagent.core.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
return reagent.dom.render.call(null,comp,container,callback);
});

reagent.core.render.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return reagent.core.render;},new cljs.core.Symbol("reagent.core","render","reagent.core/render",(800839204),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"render","render",(232498073),null),"reagent/core.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"container","container",(-96406180),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"container","container",(-96406180),null),new cljs.core.Symbol(null,"callback","callback",(935395299),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"container","container",(-96406180),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"container","container",(-96406180),null),new cljs.core.Symbol(null,"callback","callback",(935395299),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(64),(64),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"container","container",(-96406180),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"container","container",(-96406180),null),new cljs.core.Symbol(null,"callback","callback",(935395299),null)], null)),"Render a Reagent component into the DOM. The first argument may be\n  either a vector (using Reagent's Hiccup syntax), or a React element.\n  The second argument should be a DOM node.\n\n  Optionally takes a callback that is called when the component is in place.\n\n  Returns the mounted component instance.",(cljs.core.truth_(reagent.core.render)?reagent.core.render.cljs$lang$test:null)]));
/**
 * Remove a component from the given DOM node.
 */
(function (){
reagent.core.unmount_component_at_node = (function reagent$core$unmount_component_at_node(container){
return reagent.dom.unmount_component_at_node.call(null,container);
}); return (
new cljs.core.Var(function(){return reagent.core.unmount_component_at_node;},new cljs.core.Symbol("reagent.core","unmount-component-at-node","reagent.core/unmount-component-at-node",(1373628939),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"unmount-component-at-node","unmount-component-at-node",(939521902),null),"reagent/core.cljs",(32),(1),(77),(77),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"container","container",(-96406180),null)], null)),"Remove a component from the given DOM node.",(cljs.core.truth_(reagent.core.unmount_component_at_node)?reagent.core.unmount_component_at_node.cljs$lang$test:null)])));})()
;
/**
 * Turns a component into an HTML string.
 */
(function (){
reagent.core.render_to_string = (function reagent$core$render_to_string(component){
return reagent.dom.server.render_to_string.call(null,component);
}); return (
new cljs.core.Var(function(){return reagent.core.render_to_string;},new cljs.core.Symbol("reagent.core","render-to-string","reagent.core/render-to-string",(-401486534),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"render-to-string","render-to-string",(-1976442671),null),"reagent/core.cljs",(23),(1),(82),(82),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)),"Turns a component into an HTML string.",(cljs.core.truth_(reagent.core.render_to_string)?reagent.core.render_to_string.cljs$lang$test:null)])));})()
;
(function (){
reagent.core.as_component = reagent.core.as_element; return (
new cljs.core.Var(function(){return reagent.core.as_component;},new cljs.core.Symbol("reagent.core","as-component","reagent.core/as-component",(-476949910),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"as-component","as-component",(-2119031167),null),"reagent/core.cljs",(18),(1),(88),(88),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.core.as_component)?reagent.core.as_component.cljs$lang$test:null)])));})()
;
(function (){
reagent.core.render_component = reagent.core.render; return (
new cljs.core.Var(function(){return reagent.core.render_component;},new cljs.core.Symbol("reagent.core","render-component","reagent.core/render-component",(-2060829669),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"render-component","render-component",(1661620400),null),"reagent/core.cljs",(22),(1),(89),(89),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.core.render_component)?reagent.core.render_component.cljs$lang$test:null)])));})()
;
(function (){
reagent.core.render_component_to_string = reagent.core.render_to_string; return (
new cljs.core.Var(function(){return reagent.core.render_component_to_string;},new cljs.core.Symbol("reagent.core","render-component-to-string","reagent.core/render-component-to-string",(-900908752),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"render-component-to-string","render-component-to-string",(-374526891),null),"reagent/core.cljs",(32),(1),(90),(90),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.core.render_component_to_string)?reagent.core.render_component_to_string.cljs$lang$test:null)])));})()
;
/**
 * Turns a component into an HTML string, without data-react-id attributes, etc.
 */
(function (){
reagent.core.render_to_static_markup = (function reagent$core$render_to_static_markup(component){
return reagent.dom.server.render_to_static_markup.call(null,component);
}); return (
new cljs.core.Var(function(){return reagent.core.render_to_static_markup;},new cljs.core.Symbol("reagent.core","render-to-static-markup","reagent.core/render-to-static-markup",(-96115991),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"render-to-static-markup","render-to-static-markup",(-1738181034),null),"reagent/core.cljs",(30),(1),(92),(92),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)),"Turns a component into an HTML string, without data-react-id attributes, etc.",(cljs.core.truth_(reagent.core.render_to_static_markup)?reagent.core.render_to_static_markup.cljs$lang$test:null)])));})()
;
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
reagent.core.force_update_all = (function reagent$core$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

reagent.dom.force_update_all.call(null);

return reagent.impl.batching.flush_after_render.call(null);
}); return (
new cljs.core.Var(function(){return reagent.core.force_update_all;},new cljs.core.Symbol("reagent.core","force-update-all","reagent.core/force-update-all",(-1186996440),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"export","export",(214356590)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"force-update-all","force-update-all",(1197469763),null),"reagent/core.cljs",(32),true,(1),(97),(97),cljs.core.list(cljs.core.PersistentVector.EMPTY),"Force re-rendering of all mounted Reagent components. This is\n  probably only useful in a development environment, when you want to\n  update components in response to some dynamic changes to code.\n\n  Note that force-update-all may not update root components. This\n  happens if a component 'foo' is mounted with `(render [foo])` (since\n  functions are passed by value, and not by reference, in\n  ClojureScript). To get around this you'll have to introduce a layer\n  of indirection, for example by using `(render [#'foo])` instead.",(cljs.core.truth_(reagent.core.force_update_all)?reagent.core.force_update_all.cljs$lang$test:null)])));})()
;
goog.exportSymbol('reagent.core.force_update_all', reagent.core.force_update_all);
/**
 * Create a component, React style. Should be called with a map,
 *   looking like this:
 * 
 *  {:get-initial-state (fn [this])
 *   :component-will-receive-props (fn [this new-argv])
 *   :should-component-update (fn [this old-argv new-argv])
 *   :component-will-mount (fn [this])
 *   :component-did-mount (fn [this])
 *   :component-will-update (fn [this new-argv])
 *   :component-did-update (fn [this old-argv])
 *   :component-will-unmount (fn [this])
 *   :reagent-render (fn [args....])}   ;; or :render (fn [this])
 * 
 *   Everything is optional, except either :reagent-render or :render.
 */
(function (){
reagent.core.create_class = (function reagent$core$create_class(spec){
return reagent.impl.component.create_class.call(null,spec);
}); return (
new cljs.core.Var(function(){return reagent.core.create_class;},new cljs.core.Symbol("reagent.core","create-class","reagent.core/create-class",(-1100017147),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"create-class","create-class",(-665911586),null),"reagent/core.cljs",(19),(1),(112),(112),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",(1988051928),null)], null)),"Create a component, React style. Should be called with a map,\n  looking like this:\n\n    {:get-initial-state (fn [this])\n     :component-will-receive-props (fn [this new-argv])\n     :should-component-update (fn [this old-argv new-argv])\n     :component-will-mount (fn [this])\n     :component-did-mount (fn [this])\n     :component-will-update (fn [this new-argv])\n     :component-did-update (fn [this old-argv])\n     :component-will-unmount (fn [this])\n     :reagent-render (fn [args....])}   ;; or :render (fn [this])\n\n  Everything is optional, except either :reagent-render or :render.",(cljs.core.truth_(reagent.core.create_class)?reagent.core.create_class.cljs$lang$test:null)])));})()
;
/**
 * Returns the current React component (a.k.a this) in a component
 *   function.
 */
(function (){
reagent.core.current_component = (function reagent$core$current_component(){
return reagent.impl.component._STAR_current_component_STAR_;
}); return (
new cljs.core.Var(function(){return reagent.core.current_component;},new cljs.core.Symbol("reagent.core","current-component","reagent.core/current-component",(-739982166),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"current-component","current-component",(830794177),null),"reagent/core.cljs",(24),(1),(131),(131),cljs.core.list(cljs.core.PersistentVector.EMPTY),"Returns the current React component (a.k.a this) in a component\n  function.",(cljs.core.truth_(reagent.core.current_component)?reagent.core.current_component.cljs$lang$test:null)])));})()
;
/**
 * Returns an atom containing a components state.
 */
(function (){
reagent.core.state_atom = (function reagent$core$state_atom(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error("Assert failed: (comp/reagent-component? this)"));
}

return reagent.impl.component.state_atom.call(null,this$);
}); return (
new cljs.core.Var(function(){return reagent.core.state_atom;},new cljs.core.Symbol("reagent.core","state-atom","reagent.core/state-atom",(-853597457),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"state-atom","state-atom",(-1350625912),null),"reagent/core.cljs",(17),(1),(137),(137),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Returns an atom containing a components state.",(cljs.core.truth_(reagent.core.state_atom)?reagent.core.state_atom.cljs$lang$test:null)])));})()
;
/**
 * Returns the state of a component, as set with replace-state or set-state.
 *   Equivalent to (deref (r/state-atom this))
 */
(function (){
reagent.core.state = (function reagent$core$state(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error("Assert failed: (comp/reagent-component? this)"));
}

return cljs.core.deref.call(null,reagent.core.state_atom.call(null,this$));
}); return (
new cljs.core.Var(function(){return reagent.core.state;},new cljs.core.Symbol("reagent.core","state","reagent.core/state",(-920165519),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"state","state",(-348086572),null),"reagent/core.cljs",(12),(1),(143),(143),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Returns the state of a component, as set with replace-state or set-state.\n  Equivalent to (deref (r/state-atom this))",(cljs.core.truth_(reagent.core.state)?reagent.core.state.cljs$lang$test:null)])));})()
;
/**
 * Set state of a component.
 *   Equivalent to (reset! (state-atom this) new-state)
 */
(function (){
reagent.core.replace_state = (function reagent$core$replace_state(this$,new_state){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error("Assert failed: (comp/reagent-component? this)"));
}

if(((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state))){
} else {
throw (new Error("Assert failed: (or (nil? new-state) (map? new-state))"));
}

return cljs.core.reset_BANG_.call(null,reagent.core.state_atom.call(null,this$),new_state);
}); return (
new cljs.core.Var(function(){return reagent.core.replace_state;},new cljs.core.Symbol("reagent.core","replace-state","reagent.core/replace-state",(2038045877),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"replace-state","replace-state",(391776344),null),"reagent/core.cljs",(20),(1),(150),(150),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null)], null)),"Set state of a component.\n  Equivalent to (reset! (state-atom this) new-state)",(cljs.core.truth_(reagent.core.replace_state)?reagent.core.replace_state.cljs$lang$test:null)])));})()
;
/**
 * Merge component state with new-state.
 *   Equivalent to (swap! (state-atom this) merge new-state)
 */
(function (){
reagent.core.set_state = (function reagent$core$set_state(this$,new_state){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error("Assert failed: (comp/reagent-component? this)"));
}

if(((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state))){
} else {
throw (new Error("Assert failed: (or (nil? new-state) (map? new-state))"));
}

return cljs.core.swap_BANG_.call(null,reagent.core.state_atom.call(null,this$),cljs.core.merge,new_state);
}); return (
new cljs.core.Var(function(){return reagent.core.set_state;},new cljs.core.Symbol("reagent.core","set-state","reagent.core/set-state",(-1819933857),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"set-state","set-state",(-1310318856),null),"reagent/core.cljs",(16),(1),(158),(158),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null)], null)),"Merge component state with new-state.\n  Equivalent to (swap! (state-atom this) merge new-state)",(cljs.core.truth_(reagent.core.set_state)?reagent.core.set_state.cljs$lang$test:null)])));})()
;
/**
 * Force a component to re-render immediately.
 * 
 *   If the second argument is true, child components will also be
 *   re-rendered, even is their arguments have not changed.
 */
(function (){
reagent.core.force_update = (function reagent$core$force_update(var_args){
var args443 = [];
var len__23656__auto___446 = arguments.length;
var i__23657__auto___447 = (0);
while(true){
if((i__23657__auto___447 < len__23656__auto___446)){
args443.push((arguments[i__23657__auto___447]));

var G__448 = (i__23657__auto___447 + (1));
i__23657__auto___447 = G__448;
continue;
} else {
}
break;
}

var G__445 = args443.length;
switch (G__445) {
case (1):
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args443.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return reagent.core.force_update;},new cljs.core.Symbol("reagent.core","force-update","reagent.core/force-update",(-1356231299),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"force-update","force-update",(-1928742502),null),"reagent/core.cljs",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"deep","deep",(-563568894),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"deep","deep",(-563568894),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(166),(166),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"deep","deep",(-563568894),null)], null)),"Force a component to re-render immediately.\n\n  If the second argument is true, child components will also be\n  re-rendered, even is their arguments have not changed.",(cljs.core.truth_(reagent.core.force_update)?reagent.core.force_update.cljs$lang$test:null)])));})()
;

reagent.core.force_update.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return reagent.core.force_update.call(null,this$,false);
});

reagent.core.force_update.cljs$core$IFn$_invoke$arity$2 = (function (this$,deep){
reagent.ratom.flush_BANG_.call(null);

reagent.impl.util.force_update.call(null,this$,deep);

return reagent.impl.batching.flush_after_render.call(null);
});

reagent.core.force_update.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return reagent.core.force_update;},new cljs.core.Symbol("reagent.core","force-update","reagent.core/force-update",(-1356231299),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"force-update","force-update",(-1928742502),null),"reagent/core.cljs",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"deep","deep",(-563568894),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"deep","deep",(-563568894),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(166),(166),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"deep","deep",(-563568894),null)], null)),"Force a component to re-render immediately.\n\n  If the second argument is true, child components will also be\n  re-rendered, even is their arguments have not changed.",(cljs.core.truth_(reagent.core.force_update)?reagent.core.force_update.cljs$lang$test:null)]));
/**
 * Returns the props passed to a component.
 */
(function (){
reagent.core.props = (function reagent$core$props(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error("Assert failed: (comp/reagent-component? this)"));
}

return reagent.impl.component.get_props.call(null,this$);
}); return (
new cljs.core.Var(function(){return reagent.core.props;},new cljs.core.Symbol("reagent.core","props","reagent.core/props",(1659763545),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"props","props",(2093813254),null),"reagent/core.cljs",(12),(1),(178),(178),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Returns the props passed to a component.",(cljs.core.truth_(reagent.core.props)?reagent.core.props.cljs$lang$test:null)])));})()
;
/**
 * Returns the children passed to a component.
 */
(function (){
reagent.core.children = (function reagent$core$children(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error("Assert failed: (comp/reagent-component? this)"));
}

return reagent.impl.component.get_children.call(null,this$);
}); return (
new cljs.core.Var(function(){return reagent.core.children;},new cljs.core.Symbol("reagent.core","children","reagent.core/children",(257449956),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"children","children",(699969545),null),"reagent/core.cljs",(15),(1),(184),(184),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Returns the children passed to a component.",(cljs.core.truth_(reagent.core.children)?reagent.core.children.cljs$lang$test:null)])));})()
;
/**
 * Returns the entire Hiccup form passed to the component.
 */
(function (){
reagent.core.argv = (function reagent$core$argv(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error("Assert failed: (comp/reagent-component? this)"));
}

return reagent.impl.component.get_argv.call(null,this$);
}); return (
new cljs.core.Var(function(){return reagent.core.argv;},new cljs.core.Symbol("reagent.core","argv","reagent.core/argv",(1756901347),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"argv","argv",(177740632),null),"reagent/core.cljs",(11),(1),(190),(190),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Returns the entire Hiccup form passed to the component.",(cljs.core.truth_(reagent.core.argv)?reagent.core.argv.cljs$lang$test:null)])));})()
;
/**
 * Returns the root DOM node of a mounted component.
 */
(function (){
reagent.core.dom_node = (function reagent$core$dom_node(this$){
return reagent.dom.dom_node.call(null,this$);
}); return (
new cljs.core.Var(function(){return reagent.core.dom_node;},new cljs.core.Symbol("reagent.core","dom-node","reagent.core/dom-node",(509464115),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"dom-node","dom-node",(2092815254),null),"reagent/core.cljs",(15),(1),(196),(196),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Returns the root DOM node of a mounted component.",(cljs.core.truth_(reagent.core.dom_node)?reagent.core.dom_node.cljs$lang$test:null)])));})()
;
/**
 * Utility function that merges two maps, handling :class and :style
 *   specially, like React's transferPropsTo.
 */
(function (){
reagent.core.merge_props = (function reagent$core$merge_props(defaults,props){
return reagent.impl.util.merge_props.call(null,defaults,props);
}); return (
new cljs.core.Var(function(){return reagent.core.merge_props;},new cljs.core.Symbol("reagent.core","merge-props","reagent.core/merge-props",(1807680111),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"merge-props","merge-props",(-2057503102),null),"reagent/core.cljs",(18),(1),(201),(201),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"defaults","defaults",(-1678408555),null),new cljs.core.Symbol(null,"props","props",(2093813254),null)], null)),"Utility function that merges two maps, handling :class and :style\n  specially, like React's transferPropsTo.",(cljs.core.truth_(reagent.core.merge_props)?reagent.core.merge_props.cljs$lang$test:null)])));})()
;
/**
 * Render dirty components immediately to the DOM.
 * 
 *   Note that this may not work in event handlers, since React.js does
 *   batching of updates there.
 */
(function (){
reagent.core.flush = (function reagent$core$flush(){
return reagent.impl.batching.flush.call(null);
}); return (
new cljs.core.Var(function(){return reagent.core.flush;},new cljs.core.Symbol("reagent.core","flush","reagent.core/flush",(59315205),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"flush","flush",(501820328),null),"reagent/core.cljs",(12),(1),(207),(207),cljs.core.list(cljs.core.PersistentVector.EMPTY),"Render dirty components immediately to the DOM.\n\n  Note that this may not work in event handlers, since React.js does\n  batching of updates there.",(cljs.core.truth_(reagent.core.flush)?reagent.core.flush.cljs$lang$test:null)])));})()
;
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 *   Reagent components that derefs one of these are automatically
 *   re-rendered.
 */
(function (){
reagent.core.atom = (function reagent$core$atom(var_args){
var args450 = [];
var len__23656__auto___455 = arguments.length;
var i__23657__auto___456 = (0);
while(true){
if((i__23657__auto___456 < len__23656__auto___455)){
args450.push((arguments[i__23657__auto___456]));

var G__457 = (i__23657__auto___456 + (1));
i__23657__auto___456 = G__457;
continue;
} else {
}
break;
}

var G__454 = args450.length;
switch (G__454) {
case (1):
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__23675__auto__ = (new cljs.core.IndexedSeq(args450.slice((1)),(0),null));
return reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23675__auto__);

}
}); return (
new cljs.core.Var(function(){return reagent.core.atom;},new cljs.core.Symbol("reagent.core","atom","reagent.core/atom",(1748890217),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"atom","atom",(1243487874),null),"reagent/core.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"rest","rest",(398835108),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(219),(219),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"rest","rest",(398835108),null)], null)),"Like clojure.core/atom, except that it keeps track of derefs.\n  Reagent components that derefs one of these are automatically\n  re-rendered.",(cljs.core.truth_(reagent.core.atom)?reagent.core.atom.cljs$lang$test:null)])));})()
;

reagent.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return reagent.ratom.atom.call(null,x);
});

reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){
return cljs.core.apply.call(null,reagent.ratom.atom,x,rest);
});

reagent.core.atom.cljs$lang$applyTo = (function (seq451){
var G__452 = cljs.core.first.call(null,seq451);
var seq451__$1 = cljs.core.next.call(null,seq451);
return reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic(G__452,seq451__$1);
});

reagent.core.atom.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return reagent.core.atom;},new cljs.core.Symbol("reagent.core","atom","reagent.core/atom",(1748890217),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"atom","atom",(1243487874),null),"reagent/core.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"rest","rest",(398835108),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(219),(219),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"rest","rest",(398835108),null)], null)),"Like clojure.core/atom, except that it keeps track of derefs.\n  Reagent components that derefs one of these are automatically\n  re-rendered.",(cljs.core.truth_(reagent.core.atom)?reagent.core.atom.cljs$lang$test:null)]));
/**
 * Takes a function and optional arguments, and returns a derefable
 *   containing the output of that function. If the function derefs
 *   Reagent atoms (or track, etc), the value will be updated whenever
 *   the atom changes.
 * 
 *   In other words, @(track foo bar) will produce the same result
 *   as (foo bar), but foo will only be called again when the atoms it
 *   depends on changes, and will only trigger updates of components when
 *   its result changes.
 * 
 *   track is lazy, i.e the function is only evaluated on deref.
 */
(function (){
reagent.core.track = (function reagent$core$track(var_args){
var args__23658__auto__ = [];
var len__23656__auto___461 = arguments.length;
var i__23657__auto___462 = (0);
while(true){
if((i__23657__auto___462 < len__23656__auto___461)){
args__23658__auto__.push((arguments[i__23657__auto___462]));

var G__463 = (i__23657__auto___462 + (1));
i__23657__auto___462 = G__463;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((1) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((1)),(0),null)):null);
return reagent.core.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return reagent.core.track;},new cljs.core.Symbol("reagent.core","track","reagent.core/track",(1263921785),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"track","track",(1836319014),null),"reagent/core.cljs",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(226),(226),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Takes a function and optional arguments, and returns a derefable\n  containing the output of that function. If the function derefs\n  Reagent atoms (or track, etc), the value will be updated whenever\n  the atom changes.\n\n  In other words, @(track foo bar) will produce the same result\n  as (foo bar), but foo will only be called again when the atoms it\n  depends on changes, and will only trigger updates of components when\n  its result changes.\n\n  track is lazy, i.e the function is only evaluated on deref.",(cljs.core.truth_(reagent.core.track)?reagent.core.track.cljs$lang$test:null)])));})()
;

reagent.core.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track.call(null,f,args);
});

reagent.core.track.cljs$lang$maxFixedArity = (1);

reagent.core.track.cljs$lang$applyTo = (function (seq459){
var G__460 = cljs.core.first.call(null,seq459);
var seq459__$1 = cljs.core.next.call(null,seq459);
return reagent.core.track.cljs$core$IFn$_invoke$arity$variadic(G__460,seq459__$1);
});

new cljs.core.Var(function(){return reagent.core.track;},new cljs.core.Symbol("reagent.core","track","reagent.core/track",(1263921785),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"track","track",(1836319014),null),"reagent/core.cljs",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(226),(226),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Takes a function and optional arguments, and returns a derefable\n  containing the output of that function. If the function derefs\n  Reagent atoms (or track, etc), the value will be updated whenever\n  the atom changes.\n\n  In other words, @(track foo bar) will produce the same result\n  as (foo bar), but foo will only be called again when the atoms it\n  depends on changes, and will only trigger updates of components when\n  its result changes.\n\n  track is lazy, i.e the function is only evaluated on deref.",(cljs.core.truth_(reagent.core.track)?reagent.core.track.cljs$lang$test:null)]));
/**
 * An eager version of track. The function passed is called
 *   immediately, and continues to be called when needed, until stopped
 *   with dispose!.
 */
(function (){
reagent.core.track_BANG_ = (function reagent$core$track_BANG_(var_args){
var args__23658__auto__ = [];
var len__23656__auto___466 = arguments.length;
var i__23657__auto___467 = (0);
while(true){
if((i__23657__auto___467 < len__23656__auto___466)){
args__23658__auto__.push((arguments[i__23657__auto___467]));

var G__468 = (i__23657__auto___467 + (1));
i__23657__auto___467 = G__468;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((1) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((1)),(0),null)):null);
return reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return reagent.core.track_BANG_;},new cljs.core.Symbol("reagent.core","track!","reagent.core/track!",(-954652078),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"track!","track!",(-516308489),null),"reagent/core.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(242),(242),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"An eager version of track. The function passed is called\n  immediately, and continues to be called when needed, until stopped\n  with dispose!.",(cljs.core.truth_(reagent.core.track_BANG_)?reagent.core.track_BANG_.cljs$lang$test:null)])));})()
;

reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track_BANG_.call(null,f,args);
});

reagent.core.track_BANG_.cljs$lang$maxFixedArity = (1);

reagent.core.track_BANG_.cljs$lang$applyTo = (function (seq464){
var G__465 = cljs.core.first.call(null,seq464);
var seq464__$1 = cljs.core.next.call(null,seq464);
return reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__465,seq464__$1);
});

new cljs.core.Var(function(){return reagent.core.track_BANG_;},new cljs.core.Symbol("reagent.core","track!","reagent.core/track!",(-954652078),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"track!","track!",(-516308489),null),"reagent/core.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(242),(242),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"An eager version of track. The function passed is called\n  immediately, and continues to be called when needed, until stopped\n  with dispose!.",(cljs.core.truth_(reagent.core.track_BANG_)?reagent.core.track_BANG_.cljs$lang$test:null)]));
/**
 * Stop the result of track! from updating.
 */
(function (){
reagent.core.dispose_BANG_ = (function reagent$core$dispose_BANG_(x){
return reagent.ratom.dispose_BANG_.call(null,x);
}); return (
new cljs.core.Var(function(){return reagent.core.dispose_BANG_;},new cljs.core.Symbol("reagent.core","dispose!","reagent.core/dispose!",(239740642),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"dispose!","dispose!",(-395693497),null),"reagent/core.cljs",(15),(1),(250),(250),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Stop the result of track! from updating.",(cljs.core.truth_(reagent.core.dispose_BANG_)?reagent.core.dispose_BANG_.cljs$lang$test:null)])));})()
;
/**
 * Provide a combination of value and callback, that looks like an atom.
 * 
 *   The first argument can be any value, that will be returned when the
 *   result is deref'ed.
 * 
 *   The second argument should be a function, that is called with the
 *   optional extra arguments provided to wrap, and the new value of the
 *   resulting 'atom'.
 * 
 *   Use for example like this:
 * 
 *   (wrap (:foo @state)
 *      swap! state assoc :foo)
 * 
 *   Probably useful only for passing to child components.
 */
(function (){
reagent.core.wrap = (function reagent$core$wrap(var_args){
var args__23658__auto__ = [];
var len__23656__auto___472 = arguments.length;
var i__23657__auto___473 = (0);
while(true){
if((i__23657__auto___473 < len__23656__auto___472)){
args__23658__auto__.push((arguments[i__23657__auto___473]));

var G__474 = (i__23657__auto___473 + (1));
i__23657__auto___473 = G__474;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((2) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((2)),(0),null)):null);
return reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return reagent.core.wrap;},new cljs.core.Symbol("reagent.core","wrap","reagent.core/wrap",(-1226079859),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"wrap","wrap",(-1802765782),null),"reagent/core.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.Symbol(null,"reset-fn","reset-fn",(949643977),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.Symbol(null,"reset-fn","reset-fn",(949643977),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(255),(255),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.Symbol(null,"reset-fn","reset-fn",(949643977),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Provide a combination of value and callback, that looks like an atom.\n\n  The first argument can be any value, that will be returned when the\n  result is deref'ed.\n\n  The second argument should be a function, that is called with the\n  optional extra arguments provided to wrap, and the new value of the\n  resulting 'atom'.\n\n  Use for example like this:\n\n  (wrap (:foo @state)\n        swap! state assoc :foo)\n\n  Probably useful only for passing to child components.",(cljs.core.truth_(reagent.core.wrap)?reagent.core.wrap.cljs$lang$test:null)])));})()
;

reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic = (function (value,reset_fn,args){
if(cljs.core.ifn_QMARK_.call(null,reset_fn)){
} else {
throw (new Error("Assert failed: (ifn? reset-fn)"));
}

return reagent.ratom.make_wrapper.call(null,value,reset_fn,args);
});

reagent.core.wrap.cljs$lang$maxFixedArity = (2);

reagent.core.wrap.cljs$lang$applyTo = (function (seq469){
var G__470 = cljs.core.first.call(null,seq469);
var seq469__$1 = cljs.core.next.call(null,seq469);
var G__471 = cljs.core.first.call(null,seq469__$1);
var seq469__$2 = cljs.core.next.call(null,seq469__$1);
return reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic(G__470,G__471,seq469__$2);
});

new cljs.core.Var(function(){return reagent.core.wrap;},new cljs.core.Symbol("reagent.core","wrap","reagent.core/wrap",(-1226079859),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"wrap","wrap",(-1802765782),null),"reagent/core.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.Symbol(null,"reset-fn","reset-fn",(949643977),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.Symbol(null,"reset-fn","reset-fn",(949643977),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(255),(255),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.Symbol(null,"reset-fn","reset-fn",(949643977),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Provide a combination of value and callback, that looks like an atom.\n\n  The first argument can be any value, that will be returned when the\n  result is deref'ed.\n\n  The second argument should be a function, that is called with the\n  optional extra arguments provided to wrap, and the new value of the\n  resulting 'atom'.\n\n  Use for example like this:\n\n  (wrap (:foo @state)\n        swap! state assoc :foo)\n\n  Probably useful only for passing to child components.",(cljs.core.truth_(reagent.core.wrap)?reagent.core.wrap.cljs$lang$test:null)]));
/**
 * Provide a cursor into a Reagent atom.
 * 
 *   Behaves like a Reagent atom but focuses updates and derefs to
 *   the specified path within the wrapped Reagent atom. e.g.,
 *  (let [c (cursor ra [:nested :content])]
 *    ... @c ;; equivalent to (get-in @ra [:nested :content])
 *    ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
 *    ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
 *    )
 * 
 *   The first parameter can also be a function, that should look
 *   something like this:
 * 
 *  (defn set-get
 *    ([k] (get-in @state k))
 *    ([k v] (swap! state assoc-in k v)))
 * 
 *   The function will be called with one argument – the path passed to
 *   cursor – when the cursor is deref'ed, and two arguments (path and
 *   new value) when the cursor is modified.
 * 
 *   Given that set-get function, (and that state is a Reagent atom, or
 *   another cursor) these cursors are equivalent:
 *   (cursor state [:foo]) and (cursor set-get [:foo]).
 * 
 *   Note that a cursor is lazy: its value will not change until it is
 *   used. This may be noticed with add-watch.
 */
(function (){
reagent.core.cursor = (function reagent$core$cursor(src,path){
return reagent.ratom.cursor.call(null,src,path);
}); return (
new cljs.core.Var(function(){return reagent.core.cursor;},new cljs.core.Symbol("reagent.core","cursor","reagent.core/cursor",(-1137097804),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"cursor","cursor",(-1642498285),null),"reagent/core.cljs",(13),(1),(278),(278),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"src","src",(-10544524),null),new cljs.core.Symbol(null,"path","path",(1452340359),null)], null)),"Provide a cursor into a Reagent atom.\n\n  Behaves like a Reagent atom but focuses updates and derefs to\n  the specified path within the wrapped Reagent atom. e.g.,\n    (let [c (cursor ra [:nested :content])]\n      ... @c ;; equivalent to (get-in @ra [:nested :content])\n      ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)\n      ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)\n      )\n\n  The first parameter can also be a function, that should look\n  something like this:\n\n    (defn set-get\n      ([k] (get-in @state k))\n      ([k v] (swap! state assoc-in k v)))\n\n  The function will be called with one argument \u2013 the path passed to\n  cursor \u2013 when the cursor is deref'ed, and two arguments (path and\n  new value) when the cursor is modified.\n\n  Given that set-get function, (and that state is a Reagent atom, or\n  another cursor) these cursors are equivalent:\n  (cursor state [:foo]) and (cursor set-get [:foo]).\n\n  Note that a cursor is lazy: its value will not change until it is\n  used. This may be noticed with add-watch.",(cljs.core.truth_(reagent.core.cursor)?reagent.core.cursor.cljs$lang$test:null)])));})()
;
/**
 * Swaps the value of a to be (apply f current-value-of-atom args).
 * 
 *   rswap! works like swap!, except that recursive calls to rswap! on
 *   the same atom are allowed – and it always returns nil.
 */
(function (){
reagent.core.rswap_BANG_ = (function reagent$core$rswap_BANG_(var_args){
var args__23658__auto__ = [];
var len__23656__auto___480 = arguments.length;
var i__23657__auto___481 = (0);
while(true){
if((i__23657__auto___481 < len__23656__auto___480)){
args__23658__auto__.push((arguments[i__23657__auto___481]));

var G__482 = (i__23657__auto___481 + (1));
i__23657__auto___481 = G__482;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((2) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((2)),(0),null)):null);
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return reagent.core.rswap_BANG_;},new cljs.core.Symbol("reagent.core","rswap!","reagent.core/rswap!",(-1840523676),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"rswap!","rswap!",(-1347695677),null),"reagent/core.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(312),(312),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Swaps the value of a to be (apply f current-value-of-atom args).\n\n  rswap! works like swap!, except that recursive calls to rswap! on\n  the same atom are allowed \u2013 and it always returns nil.",(cljs.core.truth_(reagent.core.rswap_BANG_)?reagent.core.rswap_BANG_.cljs$lang$test:null)])));})()
;

reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
if(((!((a == null)))?((((a.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IAtom$)))?true:(((!a.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,a):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,a))){
} else {
throw (new Error("Assert failed: (satisfies? IAtom a)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(cljs.core.truth_(a.rswapping)){
(function (){var or__20817__auto__ = a.rswapfs;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return a.rswapfs = [];
}
})().push((function (p1__12_SHARP_){
return cljs.core.apply.call(null,f,p1__12_SHARP_,args);
}));
} else {
a.rswapping = true;

try{cljs.core.swap_BANG_.call(null,a,(function (state){
var s = cljs.core.apply.call(null,f,state,args);
while(true){
var temp__20287__auto__ = (function (){var G__479 = a.rswapfs;
var G__479__$1 = (((G__479 == null))?null:G__479.shift());
return G__479__$1;
})();
if((temp__20287__auto__ == null)){
return s;
} else {
var sf = temp__20287__auto__;
var G__483 = sf.call(null,s);
s = G__483;
continue;
}
break;
}
}));
}finally {a.rswapping = false;
}}

return null;
});

reagent.core.rswap_BANG_.cljs$lang$maxFixedArity = (2);

reagent.core.rswap_BANG_.cljs$lang$applyTo = (function (seq475){
var G__476 = cljs.core.first.call(null,seq475);
var seq475__$1 = cljs.core.next.call(null,seq475);
var G__477 = cljs.core.first.call(null,seq475__$1);
var seq475__$2 = cljs.core.next.call(null,seq475__$1);
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__476,G__477,seq475__$2);
});

new cljs.core.Var(function(){return reagent.core.rswap_BANG_;},new cljs.core.Symbol("reagent.core","rswap!","reagent.core/rswap!",(-1840523676),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"rswap!","rswap!",(-1347695677),null),"reagent/core.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(312),(312),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Swaps the value of a to be (apply f current-value-of-atom args).\n\n  rswap! works like swap!, except that recursive calls to rswap! on\n  the same atom are allowed \u2013 and it always returns nil.",(cljs.core.truth_(reagent.core.rswap_BANG_)?reagent.core.rswap_BANG_.cljs$lang$test:null)]));
/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just before components are rendered.
 */
(function (){
reagent.core.next_tick = (function reagent$core$next_tick(f){
return reagent.impl.batching.do_before_flush.call(null,f);
}); return (
new cljs.core.Var(function(){return reagent.core.next_tick;},new cljs.core.Symbol("reagent.core","next-tick","reagent.core/next-tick",(-809292160),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"next-tick","next-tick",(-500999387),null),"reagent/core.cljs",(16),(1),(333),(333),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),"Run f using requestAnimationFrame or equivalent.\n\n  f will be called just before components are rendered.",(cljs.core.truth_(reagent.core.next_tick)?reagent.core.next_tick.cljs$lang$test:null)])));})()
;
/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just after any queued renders in the next animation
 *   frame (and even if no renders actually occur).
 */
(function (){
reagent.core.after_render = (function reagent$core$after_render(f){
return reagent.impl.batching.do_after_render.call(null,f);
}); return (
new cljs.core.Var(function(){return reagent.core.after_render;},new cljs.core.Symbol("reagent.core","after-render","reagent.core/after-render",(-164077011),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"after-render","after-render",(-656902336),null),"reagent/core.cljs",(19),(1),(340),(340),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),"Run f using requestAnimationFrame or equivalent.\n\n  f will be called just after any queued renders in the next animation\n  frame (and even if no renders actually occur).",(cljs.core.truth_(reagent.core.after_render)?reagent.core.after_render.cljs$lang$test:null)])));})()
;
/**
 * Works just like clojure.core/partial, except that it is an IFn, and
 *   the result can be compared with =
 */
(function (){
reagent.core.partial = (function reagent$core$partial(var_args){
var args__23658__auto__ = [];
var len__23656__auto___486 = arguments.length;
var i__23657__auto___487 = (0);
while(true){
if((i__23657__auto___487 < len__23656__auto___486)){
args__23658__auto__.push((arguments[i__23657__auto___487]));

var G__488 = (i__23657__auto___487 + (1));
i__23657__auto___487 = G__488;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((1) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((1)),(0),null)):null);
return reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return reagent.core.partial;},new cljs.core.Symbol("reagent.core","partial","reagent.core/partial",(1376271301),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"partial","partial",(1881673272),null),"reagent/core.cljs",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(348),(348),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Works just like clojure.core/partial, except that it is an IFn, and\n  the result can be compared with =",(cljs.core.truth_(reagent.core.partial)?reagent.core.partial.cljs$lang$test:null)])));})()
;

reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (new reagent.impl.util.partial_ifn(f,args,null));
});

reagent.core.partial.cljs$lang$maxFixedArity = (1);

reagent.core.partial.cljs$lang$applyTo = (function (seq484){
var G__485 = cljs.core.first.call(null,seq484);
var seq484__$1 = cljs.core.next.call(null,seq484);
return reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic(G__485,seq484__$1);
});

new cljs.core.Var(function(){return reagent.core.partial;},new cljs.core.Symbol("reagent.core","partial","reagent.core/partial",(1376271301),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"partial","partial",(1881673272),null),"reagent/core.cljs",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(348),(348),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Works just like clojure.core/partial, except that it is an IFn, and\n  the result can be compared with =",(cljs.core.truth_(reagent.core.partial)?reagent.core.partial.cljs$lang$test:null)]));
(function (){
reagent.core.component_path = (function reagent$core$component_path(c){
return reagent.impl.component.component_path.call(null,c);
}); return (
new cljs.core.Var(function(){return reagent.core.component_path;},new cljs.core.Symbol("reagent.core","component-path","reagent.core/component-path",(992590805),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.core","reagent.core",(1841519592),null),new cljs.core.Symbol(null,"component-path","component-path",(625585842),null),"reagent/core.cljs",(21),(1),(354),(354),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(reagent.core.component_path)?reagent.core.component_path.cljs$lang$test:null)])));})()
;
