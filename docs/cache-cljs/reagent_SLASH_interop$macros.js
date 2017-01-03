goog.provide("reagent.interop$macros");
(function (){
reagent.interop$macros.js_call = (function reagent$interop$macros$js_call(f,args){
var argstr = clojure.string.join.call(null,",",cljs.core.repeat.call(null,cljs.core.count.call(null,args),"~{}"));
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",(-1134233646),null),[cljs.core.str("~{}("),cljs.core.str(argstr),cljs.core.str(")")].join(''),f,args);
}); return (
new cljs.core.Var(function(){return reagent.interop$macros.js_call;},new cljs.core.Symbol("reagent.interop$macros","js-call","reagent.interop$macros/js-call",(-6119022),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.interop$macros","reagent.interop$macros",(-158020944),null),new cljs.core.Symbol(null,"js-call","js-call",(-133977240),null),"reagent/interop.clj",(15),(1),(4),(4),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(reagent.interop$macros.js_call)?reagent.interop$macros.js_call.cljs$lang$test:null)])));})()
;
(function (){
reagent.interop$macros.dot_args = (function reagent$interop$macros$dot_args(object,member){
if(((member instanceof cljs.core.Symbol)) || ((member instanceof cljs.core.Keyword))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Symbol or keyword expected, not "),cljs.core.str(member)].join('')),cljs.core.str("\n"),cljs.core.str("(or (symbol? member) (keyword? member))")].join('')));
}

if((!((object instanceof cljs.core.Symbol))) || (cljs.core.not.call(null,cljs.core.re_find.call(null,/\./,cljs.core.name.call(null,object))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Dot not allowed in "),cljs.core.str(object)].join('')),cljs.core.str("\n"),cljs.core.str("(or (not (symbol? object)) (not (re-find #\"\\.\" (name object))))")].join('')));
}

var n = cljs.core.name.call(null,member);
var field_QMARK_ = ((member instanceof cljs.core.Keyword)) || (cljs.core._EQ_.call(null,cljs.core.subs.call(null,n,(0),(1)),"-"));
var names = clojure.string.split.call(null,(((member instanceof cljs.core.Symbol))?clojure.string.replace.call(null,n,/^-/,""):n),/\./);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [field_QMARK_,names], null);
}); return (
new cljs.core.Var(function(){return reagent.interop$macros.dot_args;},new cljs.core.Symbol("reagent.interop$macros","dot-args","reagent.interop$macros/dot-args",(609423949),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"reagent.interop$macros","reagent.interop$macros",(-158020944),null),new cljs.core.Symbol(null,"dot-args","dot-args",(435296487),null),"reagent/interop.clj",(16),(1),(9),(9),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"object","object",(-1179821820),null),new cljs.core.Symbol(null,"member","member",(-371489289),null)], null)),null,(cljs.core.truth_(reagent.interop$macros.dot_args)?reagent.interop$macros.dot_args.cljs$lang$test:null)])));})()
;
/**
 * Access member in a javascript object, in a Closure-safe way.
 *   'member' is assumed to be a field if it is a keyword or if
 *   the name starts with '-', otherwise the named function is
 *   called with the optional args.
 *   'member' may contain '.', to allow access in nested objects.
 *   If 'object' is a symbol it is not allowed contain '.'.
 * 
 *   ($ o :foo) is equivalent to (.-foo o), except that it gives
 *   the same result under advanced compilation.
 *   ($ o foo arg1 arg2) is the same as (.foo o arg1 arg2).
 */
(function (){
reagent.interop$macros.$ = (function reagent$interop$macros$$(var_args){
var args__23658__auto__ = [];
var len__23656__auto___79 = arguments.length;
var i__23657__auto___80 = (0);
while(true){
if((i__23657__auto___80 < len__23656__auto___79)){
args__23658__auto__.push((arguments[i__23657__auto___80]));

var G__81 = (i__23657__auto___80 + (1));
i__23657__auto___80 = G__81;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((4) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((4)),(0),null)):null);
return reagent.interop$macros.$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return reagent.interop$macros.$;},new cljs.core.Symbol("reagent.interop$macros","$","reagent.interop$macros/$",(-1440306566),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.interop$macros","reagent.interop$macros",(-158020944),null),new cljs.core.Symbol(null,"$","$",(-1580747756),null),"reagent/interop.clj",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"object","object",(-1179821820),null),new cljs.core.Symbol(null,"member","member",(-371489289),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"object","object",(-1179821820),null),new cljs.core.Symbol(null,"member","member",(-371489289),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(25),true,(25),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"object","object",(-1179821820),null),new cljs.core.Symbol(null,"member","member",(-371489289),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Access member in a javascript object, in a Closure-safe way.\n  'member' is assumed to be a field if it is a keyword or if\n  the name starts with '-', otherwise the named function is\n  called with the optional args.\n  'member' may contain '.', to allow access in nested objects.\n  If 'object' is a symbol it is not allowed contain '.'.\n\n  ($ o :foo) is equivalent to (.-foo o), except that it gives\n  the same result under advanced compilation.\n  ($ o foo arg1 arg2) is the same as (.foo o arg1 arg2).",(cljs.core.truth_(reagent.interop$macros.$)?reagent.interop$macros.$.cljs$lang$test:null)])));})()
;

reagent.interop$macros.$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,object,member,args){
var vec__76 = reagent.interop$macros.dot_args.call(null,object,member);
var field = cljs.core.nth.call(null,vec__76,(0),null);
var names = cljs.core.nth.call(null,vec__76,(1),null);
if(cljs.core.truth_(field)){
if(cljs.core.empty_QMARK_.call(null,args)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Passing args to field doesn't make sense: "),cljs.core.str(member)].join('')),cljs.core.str("\n"),cljs.core.str("(empty? args)")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",(6345791),null)),(function (){var x__23399__auto__ = object;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),names));
} else {
return reagent.interop$macros.js_call.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"aget","aget",(1491056546),null),object,names),args);
}
});

reagent.interop$macros.$.cljs$lang$maxFixedArity = (4);

reagent.interop$macros.$.cljs$lang$applyTo = (function (seq71){
var G__72 = cljs.core.first.call(null,seq71);
var seq71__$1 = cljs.core.next.call(null,seq71);
var G__73 = cljs.core.first.call(null,seq71__$1);
var seq71__$2 = cljs.core.next.call(null,seq71__$1);
var G__74 = cljs.core.first.call(null,seq71__$2);
var seq71__$3 = cljs.core.next.call(null,seq71__$2);
var G__75 = cljs.core.first.call(null,seq71__$3);
var seq71__$4 = cljs.core.next.call(null,seq71__$3);
return reagent.interop$macros.$.cljs$core$IFn$_invoke$arity$variadic(G__72,G__73,G__74,G__75,seq71__$4);
});

new cljs.core.Var(function(){return reagent.interop$macros.$;},new cljs.core.Symbol("reagent.interop$macros","$","reagent.interop$macros/$",(-1440306566),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.interop$macros","reagent.interop$macros",(-158020944),null),new cljs.core.Symbol(null,"$","$",(-1580747756),null),"reagent/interop.clj",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"object","object",(-1179821820),null),new cljs.core.Symbol(null,"member","member",(-371489289),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"object","object",(-1179821820),null),new cljs.core.Symbol(null,"member","member",(-371489289),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(25),true,(25),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"object","object",(-1179821820),null),new cljs.core.Symbol(null,"member","member",(-371489289),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Access member in a javascript object, in a Closure-safe way.\n  'member' is assumed to be a field if it is a keyword or if\n  the name starts with '-', otherwise the named function is\n  called with the optional args.\n  'member' may contain '.', to allow access in nested objects.\n  If 'object' is a symbol it is not allowed contain '.'.\n\n  ($ o :foo) is equivalent to (.-foo o), except that it gives\n  the same result under advanced compilation.\n  ($ o foo arg1 arg2) is the same as (.foo o arg1 arg2).",(cljs.core.truth_(reagent.interop$macros.$)?reagent.interop$macros.$.cljs$lang$test:null)]));

reagent.interop$macros.$.cljs$lang$macro = true;
/**
 * Set field in a javascript object, in a Closure-safe way.
 *   'field' should be a keyword or a symbol starting with '-'.
 *   'field' may contain '.', to allow access in nested objects.
 *   If 'object' is a symbol it is not allowed contain '.'.
 * 
 *   ($! o :foo 1) is equivalent to (set! (.-foo o) 1), except that it
 *   gives the same result under advanced compilation.
 */
(function (){
reagent.interop$macros.$_BANG_ = (function reagent$interop$macros$$_BANG_(_AMPERSAND_form,_AMPERSAND_env,object,field,value){
var vec__85 = reagent.interop$macros.dot_args.call(null,object,field);
var field__$1 = cljs.core.nth.call(null,vec__85,(0),null);
var names = cljs.core.nth.call(null,vec__85,(1),null);
if(cljs.core.truth_(field__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Field name must start with - in "),cljs.core.str(field__$1)].join('')),cljs.core.str("\n"),cljs.core.str("field")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",(-898215545),null)),(function (){var x__23399__auto__ = object;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),names,(function (){var x__23399__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
}); return (
new cljs.core.Var(function(){return reagent.interop$macros.$_BANG_;},new cljs.core.Symbol("reagent.interop$macros","$!","reagent.interop$macros/$!",(-1587551610),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"reagent.interop$macros","reagent.interop$macros",(-158020944),null),new cljs.core.Symbol(null,"$!","$!",(-1095699348),null),"reagent/interop.clj",(13),(1),(45),true,(45),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"object","object",(-1179821820),null),new cljs.core.Symbol(null,"field","field",(338095027),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),"Set field in a javascript object, in a Closure-safe way.\n  'field' should be a keyword or a symbol starting with '-'.\n  'field' may contain '.', to allow access in nested objects.\n  If 'object' is a symbol it is not allowed contain '.'.\n\n  ($! o :foo 1) is equivalent to (set! (.-foo o) 1), except that it\n  gives the same result under advanced compilation.",(cljs.core.truth_(reagent.interop$macros.$_BANG_)?reagent.interop$macros.$_BANG_.cljs$lang$test:null)])));})()
;

reagent.interop$macros.$_BANG_.cljs$lang$macro = true;
