// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.control.control');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs.reader');
goog.require('klipse.control.parser');
goog.require('om.next');
klipse.control.control.init_layout = (function klipse$control$control$init_layout(){
var map__155684 = klipse.utils.url_parameters.call(null);
var map__155684__$1 = ((((!((map__155684 == null)))?((((map__155684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__155684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__155684):map__155684);
var js_only = cljs.core.get.call(null,map__155684__$1,new cljs.core.Keyword(null,"js_only","js_only",-566245764));
var eval_only = cljs.core.get.call(null,map__155684__$1,new cljs.core.Keyword(null,"eval_only","eval_only",-1002092154));
var container = cljs.core.get.call(null,map__155684__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
if(cljs.core.truth_(js_only)){
return new cljs.core.Keyword(null,"js-only","js-only",-565028193);
} else {
if(cljs.core.truth_(eval_only)){
return new cljs.core.Keyword(null,"eval-only","eval-only",-933784392);
} else {
if(cljs.core.truth_(container)){
return new cljs.core.Keyword(null,"with-container","with-container",1952825242);
} else {
return new cljs.core.Keyword(null,"global","global",93595047);

}
}
}
});
klipse.control.control.logger_QMARK_ = (function klipse$control$control$logger_QMARK_(){
return (cljs.core.boolean$.call(null,cljs.reader.read_string.call(null,(function (){var or__8363__auto__ = new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(klipse.utils.url_parameters.call(null));
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return "false";
}
})()))) || (cljs.core.boolean$.call(null,cljs.reader.read_string.call(null,(function (){var or__8363__auto__ = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(klipse.utils.url_parameters.call(null));
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return "false";
}
})())));
});
if(typeof klipse.control.control.app_state !== 'undefined'){
} else {
klipse.control.control.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editor-modes","editor-modes",-599444568),cljs.core.cycle.call(null,cljs.core.list(new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"paredit","paredit",-1195358877),new cljs.core.Keyword(null,"parinfer-indent","parinfer-indent",-1564399074),new cljs.core.Keyword(null,"parinfer-paren","parinfer-paren",1095749834))),new cljs.core.Keyword(null,"input","input",556931961),""], null),new cljs.core.Keyword(null,"compilation","compilation",-1328774561),null,new cljs.core.Keyword(null,"evaluation-js","evaluation-js",1837122413),null,new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402),null,new cljs.core.Keyword(null,"editing-mode","editing-mode",-1786670387),null,new cljs.core.Keyword(null,"code-layout","code-layout",1098272213),klipse.control.control.init_layout.call(null)], null));
}
klipse.control.control.parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),klipse.control.parser.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),klipse.control.parser.mutate], null));
klipse.control.control.config = (function klipse$control$control$config(){
var $ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),klipse.control.control.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),klipse.control.control.parser], null);
if(cljs.core.not.call(null,klipse.control.control.logger_QMARK_.call(null))){
return cljs.core.assoc.call(null,$,new cljs.core.Keyword(null,"logger","logger",-220675947),null);
} else {
return $;
}
});
klipse.control.control.reconciler = (function klipse$control$control$reconciler(initial_input){
cljs.core.swap_BANG_.call(null,klipse.control.control.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"input","input",556931961)], null),initial_input);

return om.next.reconciler.call(null,klipse.control.control.config.call(null));
});

//# sourceMappingURL=control.js.map
