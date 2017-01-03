goog.provide("reagent.impl.util");
if(typeof reagent.impl.util.react !== 'undefined'){
} else {
(function (){
reagent.impl.util.react = ((typeof React !== 'undefined')?React:((typeof require !== 'undefined')?(function (){var or__20817__auto__ = require("react");
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
throw (new Error("require('react') failed"));
}
})():(function(){throw (new Error("js/React is missing"))})()
)); return (
new cljs.core.Var(function(){return reagent.impl.util.react;},new cljs.core.Symbol("reagent.impl.util","react","reagent.impl.util/react",(1052316005),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.util","reagent.impl.util",(-980228224),null),new cljs.core.Symbol(null,"react","react",(-1198111351),null),"reagent/impl/util.cljs",(15),(1),(7),(7),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.impl.util.react)?reagent.impl.util.react.cljs$lang$test:null)])));})()
;
}
(function (){
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null))); return (
new cljs.core.Var(function(){return reagent.impl.util.is_client;},new cljs.core.Symbol("reagent.impl.util","is-client","reagent.impl.util/is-client",(1527644731),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.util","reagent.impl.util",(-980228224),null),new cljs.core.Symbol(null,"is-client","is-client",(-580030505),null),"reagent/impl/util.cljs",(15),(1),(13),(13),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.impl.util.is_client)?reagent.impl.util.is_client.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.util._STAR_non_reactive_STAR_ = false; return (
new cljs.core.Var(function(){return reagent.impl.util._STAR_non_reactive_STAR_;},new cljs.core.Symbol("reagent.impl.util","*non-reactive*","reagent.impl.util/*non-reactive*",(1425139399),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.util","reagent.impl.util",(-980228224),null),new cljs.core.Symbol(null,"*non-reactive*","*non-reactive*",(-556741197),null),"reagent/impl/util.cljs",(39),(1),true,(16),(16),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.List.EMPTY,null,((reagent.impl.util._STAR_non_reactive_STAR_)?reagent.impl.util._STAR_non_reactive_STAR_.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.util.memoize_1 = (function reagent$impl$util$memoize_1(f){
var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (mem){
return (function (arg){
var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);
if(!((v == null))){
return v;
} else {
var ret = f.call(null,arg);
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
}); return (
new cljs.core.Var(function(){return reagent.impl.util.memoize_1;},new cljs.core.Symbol("reagent.impl.util","memoize-1","reagent.impl.util/memoize-1",(-1046833896),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.util","reagent.impl.util",(-980228224),null),new cljs.core.Symbol(null,"memoize-1","memoize-1",(1203388460),null),"reagent/impl/util.cljs",(16),(1),(22),(22),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),null,(cljs.core.truth_(reagent.impl.util.memoize_1)?reagent.impl.util.memoize_1.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null); return (
new cljs.core.Var(function(){return reagent.impl.util.dont_camel_case;},new cljs.core.Symbol("reagent.impl.util","dont-camel-case","reagent.impl.util/dont-camel-case",(-933280137),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.util","reagent.impl.util",(-980228224),null),new cljs.core.Symbol(null,"dont-camel-case","dont-camel-case",(1113592235),null),"reagent/impl/util.cljs",(21),(1),(32),(32),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.impl.util.dont_camel_case)?reagent.impl.util.dont_camel_case.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.util.capitalize = (function reagent$impl$util$capitalize(s){
if((cljs.core.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1)))),cljs.core.str(cljs.core.subs.call(null,s,(1)))].join('');
}
}); return (
new cljs.core.Var(function(){return reagent.impl.util.capitalize;},new cljs.core.Symbol("reagent.impl.util","capitalize","reagent.impl.util/capitalize",(245492784),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.util","reagent.impl.util",(-980228224),null),new cljs.core.Symbol(null,"capitalize","capitalize",(-2143275164),null),"reagent/impl/util.cljs",(17),(1),(34),(34),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),null,(cljs.core.truth_(reagent.impl.util.capitalize)?reagent.impl.util.capitalize.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.util.dash_to_camel = (function reagent$impl$util$dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var vec__91 = clojure.string.split.call(null,name_str,/-/);
var seq__92 = cljs.core.seq.call(null,vec__91);
var first__93 = cljs.core.first.call(null,seq__92);
var seq__92__$1 = cljs.core.next.call(null,seq__92);
var start = first__93;
var parts = seq__92__$1;
if(cljs.core.truth_(reagent.impl.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
}
}
}); return (
new cljs.core.Var(function(){return reagent.impl.util.dash_to_camel;},new cljs.core.Symbol("reagent.impl.util","dash-to-camel","reagent.impl.util/dash-to-camel",(2088220518),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.util","reagent.impl.util",(-980228224),null),new cljs.core.Symbol(null,"dash-to-camel","dash-to-camel",(-229225590),null),"reagent/impl/util.cljs",(20),(1),(39),(39),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dashed","dashed",(191282208),null)], null)),null,(cljs.core.truth_(reagent.impl.util.dash_to_camel)?reagent.impl.util.dash_to_camel.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.util.fun_name = (function reagent$impl$util$fun_name(f){
var n = (function (){var or__20817__auto__ = (function (){var and__20770__auto__ = cljs.core.fn_QMARK_.call(null,f);
if(and__20770__auto__){
var or__20817__auto__ = (f["displayName"]);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return (f["name"]);
}
} else {
return and__20770__auto__;
}
})();
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
var or__20817__auto____$1 = (function (){var and__20770__auto__ = ((!((f == null)))?((((f.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === f.cljs$core$INamed$)))?true:false):false);
if(and__20770__auto__){
return cljs.core.name.call(null,f);
} else {
return and__20770__auto__;
}
})();
if(cljs.core.truth_(or__20817__auto____$1)){
return or__20817__auto____$1;
} else {
var m = cljs.core.meta.call(null,f);
if(cljs.core.map_QMARK_.call(null,m)){
return new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
})();
return clojure.string.replace.call(null,[cljs.core.str(n)].join(''),"$",".");
}); return (
new cljs.core.Var(function(){return reagent.impl.util.fun_name;},new cljs.core.Symbol("reagent.impl.util","fun-name","reagent.impl.util/fun-name",(-1205698344),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.util","reagent.impl.util",(-980228224),null),new cljs.core.Symbol(null,"fun-name","fun-name",(1107423220),null),"reagent/impl/util.cljs",(15),(1),(48),(48),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),null,(cljs.core.truth_(reagent.impl.util.fun_name)?reagent.impl.util.fun_name.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__103__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__20817__auto___104 = self__.p;
if(cljs.core.truth_(or__20817__auto___104)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__103 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__105__i = 0, G__105__a = new Array(arguments.length -  1);
while (G__105__i < G__105__a.length) {G__105__a[G__105__i] = arguments[G__105__i + 1]; ++G__105__i;}
  a = new cljs.core.IndexedSeq(G__105__a,0);
} 
return G__103__delegate.call(this,self__,a);};
G__103.cljs$lang$maxFixedArity = 1;
G__103.cljs$lang$applyTo = (function (arglist__106){
var self__ = cljs.core.first(arglist__106);
var a = cljs.core.rest(arglist__106);
return G__103__delegate(self__,a);
});
G__103.cljs$core$IFn$_invoke$arity$variadic = G__103__delegate;
return G__103;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args102){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args102)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__107__delegate = function (a){
var _ = this;
var or__20817__auto___108 = self__.p;
if(cljs.core.truth_(or__20817__auto___108)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__107 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__109__i = 0, G__109__a = new Array(arguments.length -  0);
while (G__109__i < G__109__a.length) {G__109__a[G__109__i] = arguments[G__109__i + 0]; ++G__109__i;}
  a = new cljs.core.IndexedSeq(G__109__a,0);
} 
return G__107__delegate.call(this,a);};
G__107.cljs$lang$maxFixedArity = 0;
G__107.cljs$lang$applyTo = (function (arglist__110){
var a = cljs.core.seq(arglist__110);
return G__107__delegate(a);
});
G__107.cljs$core$IFn$_invoke$arity$variadic = G__107__delegate;
return G__107;
})()
;

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null),cljs.core.with_meta(new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null);
});

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"reagent.impl.util/partial-ifn");
});

(function (){
reagent.impl.util.__GT_partial_ifn = (function reagent$impl$util$__GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
}); return (
new cljs.core.Var(function(){return reagent.impl.util.__GT_partial_ifn;},new cljs.core.Symbol("reagent.impl.util","->partial-ifn","reagent.impl.util/->partial-ifn",(-1381579693),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",(-920223129),null),null,new cljs.core.Symbol("cljs.core","IEquiv","cljs.core/IEquiv",(-1245752602),null),null,new cljs.core.Symbol("cljs.core","IHash","cljs.core/IHash",(-32453786),null),null], null), null),new cljs.core.Symbol(null,"reagent.impl.util","reagent.impl.util",(-980228224),null),new cljs.core.Symbol(null,"->partial-ifn","->partial-ifn",(596110127),null),"reagent/impl/util.cljs",(21),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(61),(61),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null),cljs.core.with_meta(new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",(-920223129),null),null,new cljs.core.Symbol("cljs.core","IEquiv","cljs.core/IEquiv",(-1245752602),null),null,new cljs.core.Symbol("cljs.core","IHash","cljs.core/IHash",(-32453786),null),null], null), null),null,(cljs.core.truth_(reagent.impl.util.__GT_partial_ifn)?reagent.impl.util.__GT_partial_ifn.cljs$lang$test:null)])));})()
;

(function (){
reagent.impl.util.merge_class = (function reagent$impl$util$merge_class(p1,p2){
var class$ = (function (){var temp__19834__auto__ = new cljs.core.Keyword(null,"class","class",(-2030961996)).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__19834__auto__)){
var c1 = temp__19834__auto__;
var temp__19834__auto____$1 = new cljs.core.Keyword(null,"class","class",(-2030961996)).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__19834__auto____$1)){
var c2 = temp__19834__auto____$1;
return [cljs.core.str(c1),cljs.core.str(" "),cljs.core.str(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",(-2030961996)),class$);
}
}); return (
new cljs.core.Var(function(){return reagent.impl.util.merge_class;},new cljs.core.Symbol("reagent.impl.util","merge-class","reagent.impl.util/merge-class",(1845152746),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.impl.util","reagent.impl.util",(-980228224),null),new cljs.core.Symbol(null,"merge-class","merge-class",(-1747327178),null),"reagent/impl/util.cljs",(19),(1),(72),(72),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",(703771573),null),new cljs.core.Symbol(null,"p2","p2",(-1748935128),null)], null)),null,(cljs.core.truth_(reagent.impl.util.merge_class)?reagent.impl.util.merge_class.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.util.merge_style = (function reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__19834__auto__ = new cljs.core.Keyword(null,"style","style",(-496642736)).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__19834__auto__)){
var s1 = temp__19834__auto__;
var temp__19834__auto____$1 = new cljs.core.Keyword(null,"style","style",(-496642736)).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__19834__auto____$1)){
var s2 = temp__19834__auto____$1;
return cljs.core.merge.call(null,s1,s2);
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",(-496642736)),style);
}
}); return (
new cljs.core.Var(function(){return reagent.impl.util.merge_style;},new cljs.core.Symbol("reagent.impl.util","merge-style","reagent.impl.util/merge-style",(-2010814057),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.impl.util","reagent.impl.util",(-980228224),null),new cljs.core.Symbol(null,"merge-style","merge-style",(1925471947),null),"reagent/impl/util.cljs",(19),(1),(80),(80),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",(703771573),null),new cljs.core.Symbol(null,"p2","p2",(-1748935128),null)], null)),null,(cljs.core.truth_(reagent.impl.util.merge_style)?reagent.impl.util.merge_style.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.util.merge_props = (function reagent$impl$util$merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_.call(null,p1)){
} else {
throw (new Error("Assert failed: (map? p1)"));
}

return reagent.impl.util.merge_style.call(null,p1,reagent.impl.util.merge_class.call(null,p1,cljs.core.merge.call(null,p1,p2)));
}
}); return (
new cljs.core.Var(function(){return reagent.impl.util.merge_props;},new cljs.core.Symbol("reagent.impl.util","merge-props","reagent.impl.util/merge-props",(263989718),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.util","reagent.impl.util",(-980228224),null),new cljs.core.Symbol(null,"merge-props","merge-props",(-2057503102),null),"reagent/impl/util.cljs",(18),(1),(88),(88),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",(703771573),null),new cljs.core.Symbol(null,"p2","p2",(-1748935128),null)], null)),null,(cljs.core.truth_(reagent.impl.util.merge_props)?reagent.impl.util.merge_props.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.util._STAR_always_update_STAR_ = false; return (
new cljs.core.Var(function(){return reagent.impl.util._STAR_always_update_STAR_;},new cljs.core.Symbol("reagent.impl.util","*always-update*","reagent.impl.util/*always-update*",(539220658),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.util","reagent.impl.util",(-980228224),null),new cljs.core.Symbol(null,"*always-update*","*always-update*",(-636711330),null),"reagent/impl/util.cljs",(31),(1),true,(96),(96),cljs.core.List.EMPTY,null,(cljs.core.truth_(reagent.impl.util._STAR_always_update_STAR_)?reagent.impl.util._STAR_always_update_STAR_.cljs$lang$test:null)])));})()
;
(function (){
reagent.impl.util.force_update = (function reagent$impl$util$force_update(comp,deep){
if(cljs.core.truth_(deep)){
var _STAR_always_update_STAR_112 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (comp["forceUpdate"])();
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_112;
}} else {
return (comp["forceUpdate"])();
}
}); return (
new cljs.core.Var(function(){return reagent.impl.util.force_update;},new cljs.core.Symbol("reagent.impl.util","force-update","reagent.impl.util/force-update",(187229942),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.impl.util","reagent.impl.util",(-980228224),null),new cljs.core.Symbol(null,"force-update","force-update",(-1928742502),null),"reagent/impl/util.cljs",(19),(1),(98),(98),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",(-1462482139),null),new cljs.core.Symbol(null,"deep","deep",(-563568894),null)], null)),null,(cljs.core.truth_(reagent.impl.util.force_update)?reagent.impl.util.force_update.cljs$lang$test:null)])));})()
;
