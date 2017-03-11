goog.provide("re_frame.interceptor");
(function (){
re_frame.interceptor.mandatory_interceptor_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",(-1388402092)),null,new cljs.core.Keyword(null,"after","after",(594996914)),null,new cljs.core.Keyword(null,"before","before",(-1633692388)),null], null), null); return (
new cljs.core.Var(function(){return re_frame.interceptor.mandatory_interceptor_keys;},new cljs.core.Symbol("re-frame.interceptor","mandatory-interceptor-keys","re-frame.interceptor/mandatory-interceptor-keys",(-1256431138),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.interceptor","re-frame.interceptor",(717021475),null),new cljs.core.Symbol(null,"mandatory-interceptor-keys","mandatory-interceptor-keys",(-936579116),null),"re_frame/interceptor.cljc",(32),(1),(8),(8),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frame.interceptor.mandatory_interceptor_keys)?re_frame.interceptor.mandatory_interceptor_keys.cljs$lang$test:null)])));})()
;
(function (){
re_frame.interceptor.interceptor_QMARK_ = (function re_frame$interceptor$interceptor_QMARK_(m){
return (cljs.core.map_QMARK_.call(null,m)) && (cljs.core._EQ_.call(null,re_frame.interceptor.mandatory_interceptor_keys,cljs.core.set.call(null,cljs.core.keys.call(null,m))));
}); return (
new cljs.core.Var(function(){return re_frame.interceptor.interceptor_QMARK_;},new cljs.core.Symbol("re-frame.interceptor","interceptor?","re-frame.interceptor/interceptor?",(1239451161),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.interceptor","re-frame.interceptor",(717021475),null),new cljs.core.Symbol(null,"interceptor?","interceptor?",(-55111657),null),"re_frame/interceptor.cljc",(19),(1),(10),(10),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),null,(cljs.core.truth_(re_frame.interceptor.interceptor_QMARK_)?re_frame.interceptor.interceptor_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Create an interceptor from named arguments
 */
(function (){
re_frame.interceptor.__GT_interceptor = (function re_frame$interceptor$__GT_interceptor(var_args){
var args__25948__auto__ = [];
var len__25946__auto___64 = arguments.length;
var i__25947__auto___65 = (0);
while(true){
if((i__25947__auto___65 < len__25946__auto___64)){
args__25948__auto__.push((arguments[i__25947__auto___65]));

var G__66 = (i__25947__auto___65 + (1));
i__25947__auto___65 = G__66;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((0) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((0)),(0),null)):null);
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return re_frame.interceptor.__GT_interceptor;},new cljs.core.Symbol("re-frame.interceptor","->interceptor","re-frame.interceptor/->interceptor",(2076500358),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.interceptor","re-frame.interceptor",(717021475),null),new cljs.core.Symbol(null,"->interceptor","->interceptor",(-390826100),null),"re_frame/interceptor.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.Symbol(null,"before","before",(6839139),null),new cljs.core.Symbol(null,"after","after",(-2059438855),null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.Symbol(null,"before","before",(6839139),null),new cljs.core.Symbol(null,"after","after",(-2059438855),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(16),(16),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.Symbol(null,"before","before",(6839139),null),new cljs.core.Symbol(null,"after","after",(-2059438855),null)], null)], null)], null)),"Create an interceptor from named arguments",(cljs.core.truth_(re_frame.interceptor.__GT_interceptor)?re_frame.interceptor.__GT_interceptor.cljs$lang$test:null)])));})()
;

re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic = (function (p__61){
var map__62 = p__61;
var map__62__$1 = ((((!((map__62 == null)))?((((map__62.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62):map__62);
var m = map__62__$1;
var id = cljs.core.get.call(null,map__62__$1,new cljs.core.Keyword(null,"id","id",(-1388402092)));
var before = cljs.core.get.call(null,map__62__$1,new cljs.core.Keyword(null,"before","before",(-1633692388)));
var after = cljs.core.get.call(null,map__62__$1,new cljs.core.Keyword(null,"after","after",(594996914)));
if(re_frame.interop.debug_enabled_QMARK_){
var temp__21873__auto___67 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),re_frame.interceptor.mandatory_interceptor_keys));
if(temp__21873__auto___67){
var unknown_keys_68 = temp__21873__auto___67;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"re-frame: ->interceptor ",m," has unknown keys:",unknown_keys_68);
} else {
}
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",(-1388402092)),(function (){var or__23109__auto__ = id;
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
return new cljs.core.Keyword(null,"unnamed","unnamed",(-26044928));
}
})(),new cljs.core.Keyword(null,"before","before",(-1633692388)),before,new cljs.core.Keyword(null,"after","after",(594996914)),after], null);
});

re_frame.interceptor.__GT_interceptor.cljs$lang$maxFixedArity = (0);

re_frame.interceptor.__GT_interceptor.cljs$lang$applyTo = (function (seq60){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60));
});

new cljs.core.Var(function(){return re_frame.interceptor.__GT_interceptor;},new cljs.core.Symbol("re-frame.interceptor","->interceptor","re-frame.interceptor/->interceptor",(2076500358),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.interceptor","re-frame.interceptor",(717021475),null),new cljs.core.Symbol(null,"->interceptor","->interceptor",(-390826100),null),"re_frame/interceptor.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.Symbol(null,"before","before",(6839139),null),new cljs.core.Symbol(null,"after","after",(-2059438855),null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.Symbol(null,"before","before",(6839139),null),new cljs.core.Symbol(null,"after","after",(-2059438855),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(16),(16),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.Symbol(null,"before","before",(6839139),null),new cljs.core.Symbol(null,"after","after",(-2059438855),null)], null)], null)], null)),"Create an interceptor from named arguments",(cljs.core.truth_(re_frame.interceptor.__GT_interceptor)?re_frame.interceptor.__GT_interceptor.cljs$lang$test:null)]));
(function (){
re_frame.interceptor.get_effect = (function re_frame$interceptor$get_effect(var_args){
var args69 = [];
var len__25946__auto___72 = arguments.length;
var i__25947__auto___73 = (0);
while(true){
if((i__25947__auto___73 < len__25946__auto___72)){
args69.push((arguments[i__25947__auto___73]));

var G__74 = (i__25947__auto___73 + (1));
i__25947__auto___73 = G__74;
continue;
} else {
}
break;
}

var G__71 = args69.length;
switch (G__71) {
case (1):
return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args69.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return re_frame.interceptor.get_effect;},new cljs.core.Symbol("re-frame.interceptor","get-effect","re-frame.interceptor/get-effect",(-238675168),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.interceptor","re-frame.interceptor",(717021475),null),new cljs.core.Symbol(null,"get-effect","get-effect",(116827434),null),"re_frame/interceptor.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"not-found","not-found",(1011451547),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"not-found","not-found",(1011451547),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(30),(30),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"not-found","not-found",(1011451547),null)], null)),null,(cljs.core.truth_(re_frame.interceptor.get_effect)?re_frame.interceptor.get_effect.cljs$lang$test:null)])));})()
;

re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1 = (function (context){
return new cljs.core.Keyword(null,"effects","effects",(-282369292)).cljs$core$IFn$_invoke$arity$1(context);
});

re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2 = (function (context,key){
return cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",(-282369292)),key], null));
});

re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3 = (function (context,key,not_found){
return cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",(-282369292)),key], null),not_found);
});

re_frame.interceptor.get_effect.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return re_frame.interceptor.get_effect;},new cljs.core.Symbol("re-frame.interceptor","get-effect","re-frame.interceptor/get-effect",(-238675168),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.interceptor","re-frame.interceptor",(717021475),null),new cljs.core.Symbol(null,"get-effect","get-effect",(116827434),null),"re_frame/interceptor.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"not-found","not-found",(1011451547),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"not-found","not-found",(1011451547),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(30),(30),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"not-found","not-found",(1011451547),null)], null)),null,(cljs.core.truth_(re_frame.interceptor.get_effect)?re_frame.interceptor.get_effect.cljs$lang$test:null)]));
(function (){
re_frame.interceptor.assoc_effect = (function re_frame$interceptor$assoc_effect(context,key,value){
return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",(-282369292)),key], null),value);
}); return (
new cljs.core.Var(function(){return re_frame.interceptor.assoc_effect;},new cljs.core.Symbol("re-frame.interceptor","assoc-effect","re-frame.interceptor/assoc-effect",(-2068588487),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.interceptor","re-frame.interceptor",(717021475),null),new cljs.core.Symbol(null,"assoc-effect","assoc-effect",(300107315),null),"re_frame/interceptor.cljc",(19),(1),(39),(39),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),null,(cljs.core.truth_(re_frame.interceptor.assoc_effect)?re_frame.interceptor.assoc_effect.cljs$lang$test:null)])));})()
;
(function (){
re_frame.interceptor.get_coeffect = (function re_frame$interceptor$get_coeffect(var_args){
var args76 = [];
var len__25946__auto___79 = arguments.length;
var i__25947__auto___80 = (0);
while(true){
if((i__25947__auto___80 < len__25946__auto___79)){
args76.push((arguments[i__25947__auto___80]));

var G__81 = (i__25947__auto___80 + (1));
i__25947__auto___80 = G__81;
continue;
} else {
}
break;
}

var G__78 = args76.length;
switch (G__78) {
case (1):
return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args76.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return re_frame.interceptor.get_coeffect;},new cljs.core.Symbol("re-frame.interceptor","get-coeffect","re-frame.interceptor/get-coeffect",(-1453150952),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.interceptor","re-frame.interceptor",(717021475),null),new cljs.core.Symbol(null,"get-coeffect","get-coeffect",(1018510098),null),"re_frame/interceptor.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"not-found","not-found",(1011451547),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"not-found","not-found",(1011451547),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(45),(45),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"not-found","not-found",(1011451547),null)], null)),null,(cljs.core.truth_(re_frame.interceptor.get_coeffect)?re_frame.interceptor.get_coeffect.cljs$lang$test:null)])));})()
;

re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1 = (function (context){
return new cljs.core.Keyword(null,"coeffects","coeffects",(497912985)).cljs$core$IFn$_invoke$arity$1(context);
});

re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2 = (function (context,key){
return cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",(497912985)),key], null));
});

re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$3 = (function (context,key,not_found){
return cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",(497912985)),key], null),not_found);
});

re_frame.interceptor.get_coeffect.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return re_frame.interceptor.get_coeffect;},new cljs.core.Symbol("re-frame.interceptor","get-coeffect","re-frame.interceptor/get-coeffect",(-1453150952),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.interceptor","re-frame.interceptor",(717021475),null),new cljs.core.Symbol(null,"get-coeffect","get-coeffect",(1018510098),null),"re_frame/interceptor.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"not-found","not-found",(1011451547),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"not-found","not-found",(1011451547),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(45),(45),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"not-found","not-found",(1011451547),null)], null)),null,(cljs.core.truth_(re_frame.interceptor.get_coeffect)?re_frame.interceptor.get_coeffect.cljs$lang$test:null)]));
(function (){
re_frame.interceptor.assoc_coeffect = (function re_frame$interceptor$assoc_coeffect(context,key,value){
return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",(497912985)),key], null),value);
}); return (
new cljs.core.Var(function(){return re_frame.interceptor.assoc_coeffect;},new cljs.core.Symbol("re-frame.interceptor","assoc-coeffect","re-frame.interceptor/assoc-coeffect",(-2145903949),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.interceptor","re-frame.interceptor",(717021475),null),new cljs.core.Symbol(null,"assoc-coeffect","assoc-coeffect",(891917445),null),"re_frame/interceptor.cljc",(21),(1),(53),(53),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),null,(cljs.core.truth_(re_frame.interceptor.assoc_coeffect)?re_frame.interceptor.assoc_coeffect.cljs$lang$test:null)])));})()
;
(function (){
re_frame.interceptor.update_coeffect = (function re_frame$interceptor$update_coeffect(var_args){
var args__25948__auto__ = [];
var len__25946__auto___87 = arguments.length;
var i__25947__auto___88 = (0);
while(true){
if((i__25947__auto___88 < len__25946__auto___87)){
args__25948__auto__.push((arguments[i__25947__auto___88]));

var G__89 = (i__25947__auto___88 + (1));
i__25947__auto___88 = G__89;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((3) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((3)),(0),null)):null);
return re_frame.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return re_frame.interceptor.update_coeffect;},new cljs.core.Symbol("re-frame.interceptor","update-coeffect","re-frame.interceptor/update-coeffect",(-557432687),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.interceptor","re-frame.interceptor",(717021475),null),new cljs.core.Symbol(null,"update-coeffect","update-coeffect",(-1380519321),null),"re_frame/interceptor.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(57),(57),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(re_frame.interceptor.update_coeffect)?re_frame.interceptor.update_coeffect.cljs$lang$test:null)])));})()
;

re_frame.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic = (function (context,key,f,args){
return cljs.core.apply.call(null,cljs.core.update,context,key,f,args);
});

re_frame.interceptor.update_coeffect.cljs$lang$maxFixedArity = (3);

re_frame.interceptor.update_coeffect.cljs$lang$applyTo = (function (seq83){
var G__84 = cljs.core.first.call(null,seq83);
var seq83__$1 = cljs.core.next.call(null,seq83);
var G__85 = cljs.core.first.call(null,seq83__$1);
var seq83__$2 = cljs.core.next.call(null,seq83__$1);
var G__86 = cljs.core.first.call(null,seq83__$2);
var seq83__$3 = cljs.core.next.call(null,seq83__$2);
return re_frame.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic(G__84,G__85,G__86,seq83__$3);
});

new cljs.core.Var(function(){return re_frame.interceptor.update_coeffect;},new cljs.core.Symbol("re-frame.interceptor","update-coeffect","re-frame.interceptor/update-coeffect",(-557432687),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.interceptor","re-frame.interceptor",(717021475),null),new cljs.core.Symbol(null,"update-coeffect","update-coeffect",(-1380519321),null),"re_frame/interceptor.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(57),(57),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(re_frame.interceptor.update_coeffect)?re_frame.interceptor.update_coeffect.cljs$lang$test:null)]));
(function (){
re_frame.interceptor.invoke_interceptor_fn = (function re_frame$interceptor$invoke_interceptor_fn(context,interceptor,direction){
var temp__21873__auto__ = cljs.core.get.call(null,interceptor,direction);
if(cljs.core.truth_(temp__21873__auto__)){
var f = temp__21873__auto__;
return f.call(null,context);
} else {
return context;
}
}); return (
new cljs.core.Var(function(){return re_frame.interceptor.invoke_interceptor_fn;},new cljs.core.Symbol("re-frame.interceptor","invoke-interceptor-fn","re-frame.interceptor/invoke-interceptor-fn",(-90169954),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"re-frame.interceptor","re-frame.interceptor",(717021475),null),new cljs.core.Symbol(null,"invoke-interceptor-fn","invoke-interceptor-fn",(1878037352),null),"re_frame/interceptor.cljc",(29),(1),(64),(64),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"interceptor","interceptor",(-1526696693),null),new cljs.core.Symbol(null,"direction","direction",(1007172132),null)], null)),null,(cljs.core.truth_(re_frame.interceptor.invoke_interceptor_fn)?re_frame.interceptor.invoke_interceptor_fn.cljs$lang$test:null)])));})()
;
/**
 * Loop over all interceptors, calling `direction` function on each,
 *   threading the value of `context` through every call.
 * 
 *   `direction` is one of `:before` or `:after`.
 * 
 *   Each iteration, the next interceptor to process is obtained from
 *   context's `:queue`. After they are processed, interceptors are popped
 *   from `:queue` and added to `:stack`.
 * 
 *   After sufficient iteration, `:queue` will be empty, and `:stack` will
 *   contain all interceptors processed.
 * 
 *   Returns updated `context`. Ie. the `context` which has been threaded
 *   through all interceptor functions.
 * 
 *   Generally speaking, an interceptor's `:before` function will (if present)
 *   add to a `context's` `:coeffects`, while it's `:after` function
 *   will modify the `context`'s `:effects`.  Very approximately.
 * 
 *   But because all interceptor functions are given `context`, and can
 *   return a modified version of it, the way is clear for an interceptor
 *   to introspect the stack or queue, or even modify the queue
 *   (add new interceptors via `enqueue`?). This is a very fluid arrangement.
 */
(function (){
re_frame.interceptor.invoke_interceptors = (function re_frame$interceptor$invoke_interceptors(context,direction){
var context__$1 = context;
while(true){
var queue = new cljs.core.Keyword(null,"queue","queue",(1455835879)).cljs$core$IFn$_invoke$arity$1(context__$1);
if(cljs.core.empty_QMARK_.call(null,queue)){
return context__$1;
} else {
var interceptor = cljs.core.peek.call(null,queue);
var stack = new cljs.core.Keyword(null,"stack","stack",(-793405930)).cljs$core$IFn$_invoke$arity$1(context__$1);
var G__90 = re_frame.interceptor.invoke_interceptor_fn.call(null,cljs.core.assoc.call(null,context__$1,new cljs.core.Keyword(null,"queue","queue",(1455835879)),cljs.core.pop.call(null,queue),new cljs.core.Keyword(null,"stack","stack",(-793405930)),cljs.core.conj.call(null,stack,interceptor)),interceptor,direction);
context__$1 = G__90;
continue;
}
break;
}
}); return (
new cljs.core.Var(function(){return re_frame.interceptor.invoke_interceptors;},new cljs.core.Symbol("re-frame.interceptor","invoke-interceptors","re-frame.interceptor/invoke-interceptors",(647694154),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"re-frame.interceptor","re-frame.interceptor",(717021475),null),new cljs.core.Symbol(null,"invoke-interceptors","invoke-interceptors",(-1286893244),null),"re_frame/interceptor.cljc",(27),(1),(71),(71),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"direction","direction",(1007172132),null)], null)),"Loop over all interceptors, calling `direction` function on each,\n  threading the value of `context` through every call.\n\n  `direction` is one of `:before` or `:after`.\n\n  Each iteration, the next interceptor to process is obtained from\n  context's `:queue`. After they are processed, interceptors are popped\n  from `:queue` and added to `:stack`.\n\n  After sufficient iteration, `:queue` will be empty, and `:stack` will\n  contain all interceptors processed.\n\n  Returns updated `context`. Ie. the `context` which has been threaded\n  through all interceptor functions.\n\n  Generally speaking, an interceptor's `:before` function will (if present)\n  add to a `context's` `:coeffects`, while it's `:after` function\n  will modify the `context`'s `:effects`.  Very approximately.\n\n  But because all interceptor functions are given `context`, and can\n  return a modified version of it, the way is clear for an interceptor\n  to introspect the stack or queue, or even modify the queue\n  (add new interceptors via `enqueue`?). This is a very fluid arrangement.",(cljs.core.truth_(re_frame.interceptor.invoke_interceptors)?re_frame.interceptor.invoke_interceptors.cljs$lang$test:null)])));})()
;
/**
 * Add a collection of `interceptors` to the end of `context's` execution `:queue`.
 *   Returns the updated `context`.
 * 
 *   In an advanced case, this function could allow an interceptor to add new
 *   interceptors to the `:queue` of a context.
 */
(function (){
re_frame.interceptor.enqueue = (function re_frame$interceptor$enqueue(context,interceptors){
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"queue","queue",(1455835879)),cljs.core.fnil.call(null,cljs.core.into,re_frame.interop.empty_queue),interceptors);
}); return (
new cljs.core.Var(function(){return re_frame.interceptor.enqueue;},new cljs.core.Symbol("re-frame.interceptor","enqueue","re-frame.interceptor/enqueue",(1061340173),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.interceptor","re-frame.interceptor",(717021475),null),new cljs.core.Symbol(null,"enqueue","enqueue",(1377000435),null),"re_frame/interceptor.cljc",(14),(1),(108),(108),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null)], null)),"Add a collection of `interceptors` to the end of `context's` execution `:queue`.\n  Returns the updated `context`.\n\n  In an advanced case, this function could allow an interceptor to add new\n  interceptors to the `:queue` of a context.",(cljs.core.truth_(re_frame.interceptor.enqueue)?re_frame.interceptor.enqueue.cljs$lang$test:null)])));})()
;
/**
 * Create a fresh context
 */
(function (){
re_frame.interceptor.context = (function re_frame$interceptor$context(var_args){
var args91 = [];
var len__25946__auto___94 = arguments.length;
var i__25947__auto___95 = (0);
while(true){
if((i__25947__auto___95 < len__25946__auto___94)){
args91.push((arguments[i__25947__auto___95]));

var G__96 = (i__25947__auto___95 + (1));
i__25947__auto___95 = G__96;
continue;
} else {
}
break;
}

var G__93 = args91.length;
switch (G__93) {
case (2):
return re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args91.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return re_frame.interceptor.context;},new cljs.core.Symbol("re-frame.interceptor","context","re-frame.interceptor/context",(1169972800),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"re-frame.interceptor","re-frame.interceptor",(717021475),null),new cljs.core.Symbol(null,"context","context",(810340414),null),"re_frame/interceptor.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",(1941966969),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",(1941966969),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null),new cljs.core.Symbol(null,"db","db",(-1661185010),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",(1941966969),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",(1941966969),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null),new cljs.core.Symbol(null,"db","db",(-1661185010),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(120),(120),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",(1941966969),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",(1941966969),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null),new cljs.core.Symbol(null,"db","db",(-1661185010),null)], null)),"Create a fresh context",(cljs.core.truth_(re_frame.interceptor.context)?re_frame.interceptor.context.cljs$lang$test:null)])));})()
;

re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$2 = (function (event,interceptors){
return re_frame.interceptor.enqueue.call(null,re_frame.interceptor.assoc_coeffect.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"event","event",(301435442)),event),interceptors);
});

re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$3 = (function (event,interceptors,db){
return re_frame.interceptor.assoc_coeffect.call(null,re_frame.interceptor.context.call(null,event,interceptors),new cljs.core.Keyword(null,"db","db",(993250759)),db);
});

re_frame.interceptor.context.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return re_frame.interceptor.context;},new cljs.core.Symbol("re-frame.interceptor","context","re-frame.interceptor/context",(1169972800),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"re-frame.interceptor","re-frame.interceptor",(717021475),null),new cljs.core.Symbol(null,"context","context",(810340414),null),"re_frame/interceptor.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",(1941966969),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",(1941966969),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null),new cljs.core.Symbol(null,"db","db",(-1661185010),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",(1941966969),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",(1941966969),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null),new cljs.core.Symbol(null,"db","db",(-1661185010),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(120),(120),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",(1941966969),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",(1941966969),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null),new cljs.core.Symbol(null,"db","db",(-1661185010),null)], null)),"Create a fresh context",(cljs.core.truth_(re_frame.interceptor.context)?re_frame.interceptor.context.cljs$lang$test:null)]));
/**
 * Called on completion of `:before` processing, this function prepares/modifies
 * `context` for the backwards sweep of processing in which an interceptor
 * chain's `:after` fns are called.
 * 
 *   At this point in processing, the `:queue` is empty and `:stack` holds all
 *   the previously run interceptors. So this function enables the backwards walk
 *   by priming `:queue` with what's currently in `:stack`
 */
(function (){
re_frame.interceptor.change_direction = (function re_frame$interceptor$change_direction(context){
return re_frame.interceptor.enqueue.call(null,cljs.core.dissoc.call(null,context,new cljs.core.Keyword(null,"queue","queue",(1455835879))),new cljs.core.Keyword(null,"stack","stack",(-793405930)).cljs$core$IFn$_invoke$arity$1(context));
}); return (
new cljs.core.Var(function(){return re_frame.interceptor.change_direction;},new cljs.core.Symbol("re-frame.interceptor","change-direction","re-frame.interceptor/change-direction",(5531381),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"re-frame.interceptor","re-frame.interceptor",(717021475),null),new cljs.core.Symbol(null,"change-direction","change-direction",(-1820002053),null),"re_frame/interceptor.cljc",(24),(1),(131),(131),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null)], null)),"Called on completion of `:before` processing, this function prepares/modifies\n   `context` for the backwards sweep of processing in which an interceptor\n   chain's `:after` fns are called.\n\n  At this point in processing, the `:queue` is empty and `:stack` holds all\n  the previously run interceptors. So this function enables the backwards walk\n  by priming `:queue` with what's currently in `:stack`",(cljs.core.truth_(re_frame.interceptor.change_direction)?re_frame.interceptor.change_direction.cljs$lang$test:null)])));})()
;
/**
 * Executes the given chain (coll) of interceptors.
 * 
 * Each interceptor has this form:
 *     {:before  (fn [context] ...)     ;; returns possibly modified context
 *      :after   (fn [context] ...)}    ;; `identity` would be a noop
 * 
 * Walks the queue of iterceptors from beginning to end, calling the
 * `:before` fn on each, then reverse direction and walk backwards,
 * calling the `:after` fn on each.
 * 
 * The last interceptor in the chain presumably wraps an event
 * handler fn. So the overall goal of the process is to "handle
 * the given event".
 * 
 * Thread a `context` through all calls. `context` has this form:
 * 
 *   {:coeffects {:event [:a-query-id :some-param]
 *                :db    <original contents of app-db>}
 *    :effects   {:db    <new value for app-db>
 *                :dispatch  [:an-event-id :param1]}
 *    :queue     <a collection of further interceptors>
 *    :stack     <a collection of interceptors already walked>}
 * 
 * `context` has `:coeffects` and `:effects` which, if this was a web
 * server, would be somewhat anologous to `request` and `response`
 * respectively.
 * 
 * `coeffects` will contain data like `event` and the initial
 * state of `db` -  the inputs required by the event handler
 * (sitting presumably on the end of the chain), while handler-returned
 * side effects are put into `:effects` including, but not limited to,
 * new values for `db`.
 * 
 * The first few interceptors in a chain will likely have `:before`
 * functions which "prime" the `context` by adding the event, and
 * the current state of app-db into `:coeffects`. But interceptors can
 * add whatever they want to `:coeffects` - perhaps the event handler needs
 * some information from localstore, or a random number, or access to
 * a DataScript connection.
 * 
 * Equally, some interceptors in the chain will have `:after` fn
 * which can process the side effects accumulated into `:effects`
 * including but, not limited to, updates to app-db.
 * 
 * Through both stages (before and after), `context` contains a `:queue`
 * of interceptors yet to be processed, and a `:stack` of interceptors
 * already done.  In advanced cases, these values can be modified by the
 * functions through which the context is threaded.
 */
(function (){
re_frame.interceptor.execute = (function re_frame$interceptor$execute(event_v,interceptors){
return re_frame.interceptor.invoke_interceptors.call(null,re_frame.interceptor.change_direction.call(null,re_frame.interceptor.invoke_interceptors.call(null,re_frame.interceptor.context.call(null,event_v,interceptors),new cljs.core.Keyword(null,"before","before",(-1633692388)))),new cljs.core.Keyword(null,"after","after",(594996914)));
}); return (
new cljs.core.Var(function(){return re_frame.interceptor.execute;},new cljs.core.Symbol("re-frame.interceptor","execute","re-frame.interceptor/execute",(658519045),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.interceptor","re-frame.interceptor",(717021475),null),new cljs.core.Symbol(null,"execute","execute",(1511032339),null),"re_frame/interceptor.cljc",(14),(1),(145),(145),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-v","event-v",(-1275754404),null),new cljs.core.Symbol(null,"interceptors","interceptors",(93748576),null)], null)),"Executes the given chain (coll) of interceptors.\n\n   Each interceptor has this form:\n       {:before  (fn [context] ...)     ;; returns possibly modified context\n        :after   (fn [context] ...)}    ;; `identity` would be a noop\n\n   Walks the queue of iterceptors from beginning to end, calling the\n   `:before` fn on each, then reverse direction and walk backwards,\n   calling the `:after` fn on each.\n\n   The last interceptor in the chain presumably wraps an event\n   handler fn. So the overall goal of the process is to \"handle\n   the given event\".\n\n   Thread a `context` through all calls. `context` has this form:\n\n     {:coeffects {:event [:a-query-id :some-param]\n                  :db    <original contents of app-db>}\n      :effects   {:db    <new value for app-db>\n                  :dispatch  [:an-event-id :param1]}\n      :queue     <a collection of further interceptors>\n      :stack     <a collection of interceptors already walked>}\n\n   `context` has `:coeffects` and `:effects` which, if this was a web\n   server, would be somewhat anologous to `request` and `response`\n   respectively.\n\n   `coeffects` will contain data like `event` and the initial\n   state of `db` -  the inputs required by the event handler\n   (sitting presumably on the end of the chain), while handler-returned\n   side effects are put into `:effects` including, but not limited to,\n   new values for `db`.\n\n   The first few interceptors in a chain will likely have `:before`\n   functions which \"prime\" the `context` by adding the event, and\n   the current state of app-db into `:coeffects`. But interceptors can\n   add whatever they want to `:coeffects` - perhaps the event handler needs\n   some information from localstore, or a random number, or access to\n   a DataScript connection.\n\n   Equally, some interceptors in the chain will have `:after` fn\n   which can process the side effects accumulated into `:effects`\n   including but, not limited to, updates to app-db.\n\n   Through both stages (before and after), `context` contains a `:queue`\n   of interceptors yet to be processed, and a `:stack` of interceptors\n   already done.  In advanced cases, these values can be modified by the\n   functions through which the context is threaded.",(cljs.core.truth_(re_frame.interceptor.execute)?re_frame.interceptor.execute.cljs$lang$test:null)])));})()
;
