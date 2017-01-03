goog.provide("reagent.dom.server");
if(typeof reagent.dom.server.imported !== 'undefined'){
} else {
(function (){
reagent.dom.server.imported = null; return (
new cljs.core.Var(function(){return reagent.dom.server.imported;},new cljs.core.Symbol("reagent.dom.server","imported","reagent.dom.server/imported",(898782884),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.dom.server","reagent.dom.server",(287885348),null),new cljs.core.Symbol(null,"imported","imported",(656152905),null),"reagent/dom/server.cljs",(28),(1),(8),(8),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.dom.server.imported)?reagent.dom.server.imported.cljs$lang$test:null)])));})()
;
}
(function (){
reagent.dom.server.module = (function reagent$dom$server$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.server.imported)){
return reagent.dom.server.imported;
} else {
if(typeof ReactDOMServer !== 'undefined'){
return reagent.dom.server.imported = ReactDOMServer;
} else {
if(typeof require !== 'undefined'){
var or__20817__auto__ = reagent.dom.server.imported = require("react-dom/server");
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
throw (new Error("require('react-dom/server') failed"));
}
} else {
throw (new Error("js/ReactDOMServer is missing"));

}
}
}
}); return (
new cljs.core.Var(function(){return reagent.dom.server.module;},new cljs.core.Symbol("reagent.dom.server","module","reagent.dom.server/module",(-1993852167),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.dom.server","reagent.dom.server",(287885348),null),new cljs.core.Symbol(null,"module","module",(-1229817578),null),"reagent/dom/server.cljs",(13),(1),(10),(10),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(reagent.dom.server.module)?reagent.dom.server.module.cljs$lang$test:null)])));})()
;
/**
 * Turns a component into an HTML string.
 */
(function (){
reagent.dom.server.render_to_string = (function reagent$dom$server$render_to_string(component){
reagent.ratom.flush_BANG_.call(null);

var _STAR_non_reactive_STAR_375 = reagent.impl.util._STAR_non_reactive_STAR_;
reagent.impl.util._STAR_non_reactive_STAR_ = true;

try{return (reagent.dom.server.module.call(null)["renderToString"])(reagent.impl.template.as_element.call(null,component));
}finally {reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR_375;
}}); return (
new cljs.core.Var(function(){return reagent.dom.server.render_to_string;},new cljs.core.Symbol("reagent.dom.server","render-to-string","reagent.dom.server/render-to-string",(-1112596470),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.dom.server","reagent.dom.server",(287885348),null),new cljs.core.Symbol(null,"render-to-string","render-to-string",(-1976442671),null),"reagent/dom/server.cljs",(23),(1),(21),(21),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)),"Turns a component into an HTML string.",(cljs.core.truth_(reagent.dom.server.render_to_string)?reagent.dom.server.render_to_string.cljs$lang$test:null)])));})()
;
/**
 * Turns a component into an HTML string, without data-react-id attributes, etc.
 */
(function (){
reagent.dom.server.render_to_static_markup = (function reagent$dom$server$render_to_static_markup(component){
reagent.ratom.flush_BANG_.call(null);

var _STAR_non_reactive_STAR_377 = reagent.impl.util._STAR_non_reactive_STAR_;
reagent.impl.util._STAR_non_reactive_STAR_ = true;

try{return (reagent.dom.server.module.call(null)["renderToStaticMarkup"])(reagent.impl.template.as_element.call(null,component));
}finally {reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR_377;
}}); return (
new cljs.core.Var(function(){return reagent.dom.server.render_to_static_markup;},new cljs.core.Symbol("reagent.dom.server","render-to-static-markup","reagent.dom.server/render-to-static-markup",(-1476446663),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.dom.server","reagent.dom.server",(287885348),null),new cljs.core.Symbol(null,"render-to-static-markup","render-to-static-markup",(-1738181034),null),"reagent/dom/server.cljs",(30),(1),(28),(28),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)),"Turns a component into an HTML string, without data-react-id attributes, etc.",(cljs.core.truth_(reagent.dom.server.render_to_static_markup)?reagent.dom.server.render_to_static_markup.cljs$lang$test:null)])));})()
;
