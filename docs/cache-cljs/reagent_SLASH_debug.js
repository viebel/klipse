goog.provide("reagent.debug");
(function (){
reagent.debug.has_console = typeof console !== 'undefined'; return (
new cljs.core.Var(function(){return reagent.debug.has_console;},new cljs.core.Symbol("reagent.debug","has-console","reagent.debug/has-console",(-1814194486),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"const","const",(1709929842)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.debug","reagent.debug",(1010511129),null),new cljs.core.Symbol(null,"has-console","has-console",(233105617),null),"reagent/debug.cljs",(25),(1),true,(4),(4),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.debug.has_console)?reagent.debug.has_console.cljs$lang$test:null)])));})()
;
(function (){
reagent.debug.tracking = false; return (
new cljs.core.Var(function(){return reagent.debug.tracking;},new cljs.core.Symbol("reagent.debug","tracking","reagent.debug/tracking",(2016110706),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.debug","reagent.debug",(1010511129),null),new cljs.core.Symbol(null,"tracking","tracking",(-624903589),null),"reagent/debug.cljs",(23),(1),(6),(6),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.List.EMPTY,null,((reagent.debug.tracking)?reagent.debug.tracking.cljs$lang$test:null)])));})()
;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
(function (){
reagent.debug.warnings = cljs.core.atom.call(null,null); return (
new cljs.core.Var(function(){return reagent.debug.warnings;},new cljs.core.Symbol("reagent.debug","warnings","reagent.debug/warnings",(1469347043),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.debug","reagent.debug",(1010511129),null),new cljs.core.Symbol(null,"warnings","warnings",(905093876),null),"reagent/debug.cljs",(18),(1),(8),(8),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.debug.warnings)?reagent.debug.warnings.cljs$lang$test:null)])));})()
;
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
(function (){
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__65__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",(-436710552))], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__65 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66__i = 0, G__66__a = new Array(arguments.length -  0);
while (G__66__i < G__66__a.length) {G__66__a[G__66__i] = arguments[G__66__i + 0]; ++G__66__i;}
  args = new cljs.core.IndexedSeq(G__66__a,0);
} 
return G__65__delegate.call(this,args);};
G__65.cljs$lang$maxFixedArity = 0;
G__65.cljs$lang$applyTo = (function (arglist__67){
var args = cljs.core.seq(arglist__67);
return G__65__delegate(args);
});
G__65.cljs$core$IFn$_invoke$arity$variadic = G__65__delegate;
return G__65;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__68__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",(-978969032))], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__68 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69__i = 0, G__69__a = new Array(arguments.length -  0);
while (G__69__i < G__69__a.length) {G__69__a[G__69__i] = arguments[G__69__i + 0]; ++G__69__i;}
  args = new cljs.core.IndexedSeq(G__69__a,0);
} 
return G__68__delegate.call(this,args);};
G__68.cljs$lang$maxFixedArity = 0;
G__68.cljs$lang$applyTo = (function (arglist__70){
var args = cljs.core.seq(arglist__70);
return G__68__delegate(args);
});
G__68.cljs$core$IFn$_invoke$arity$variadic = G__68__delegate;
return G__68;
})()
;})(o))
;

return o;
})(); return (
new cljs.core.Var(function(){return reagent.debug.track_console;},new cljs.core.Symbol("reagent.debug","track-console","reagent.debug/track-console",(-1553126476),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.debug","reagent.debug",(1010511129),null),new cljs.core.Symbol(null,"track-console","track-console",(17070495),null),"reagent/debug.cljs",(23),(1),(10),(10),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.debug.track_console)?reagent.debug.track_console.cljs$lang$test:null)])));})()
;
}
(function (){
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
}); return (
new cljs.core.Var(function(){return reagent.debug.track_warnings;},new cljs.core.Symbol("reagent.debug","track-warnings","reagent.debug/track-warnings",(744162047),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.debug","reagent.debug",(1010511129),null),new cljs.core.Symbol(null,"track-warnings","track-warnings",(1114789092),null),"reagent/debug.cljs",(21),(1),(20),(20),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),null,(cljs.core.truth_(reagent.debug.track_warnings)?reagent.debug.track_warnings.cljs$lang$test:null)])));})()
;
