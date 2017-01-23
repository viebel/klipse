goog.provide("sqlingvo.util");
/**
 * A set of reserved words that should not be quoted.
 */
(function (){
sqlingvo.util._STAR_reserved_STAR_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["EXCLUDED",null,"DEFAULT",null], null), null); return (
new cljs.core.Var(function(){return sqlingvo.util._STAR_reserved_STAR_;},new cljs.core.Symbol("sqlingvo.util","*reserved*","sqlingvo.util/*reserved*",(1550888746),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"*reserved*","*reserved*",(203065577),null),"sqlingvo/util.cljc",(26),(1),true,(7),(7),cljs.core.List.EMPTY,"A set of reserved words that should not be quoted.",(cljs.core.truth_(sqlingvo.util._STAR_reserved_STAR_)?sqlingvo.util._STAR_reserved_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Return the qualified name of the keyword `k` as a string.
 */
(function (){
sqlingvo.util.keyword_str = (function sqlingvo$util$keyword_str(k){
if((k instanceof cljs.core.Keyword)){
if(cljs.core.truth_(cljs.core.namespace.call(null,k))){
return [cljs.core.str(cljs.core.namespace.call(null,k)),cljs.core.str("/"),cljs.core.str(cljs.core.name.call(null,k))].join('');
} else {
return [cljs.core.str(cljs.core.name.call(null,k))].join('');
}
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return sqlingvo.util.keyword_str;},new cljs.core.Symbol("sqlingvo.util","keyword-str","sqlingvo.util/keyword-str",(375989222),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"keyword-str","keyword-str",(1166213925),null),"sqlingvo/util.cljc",(18),(1),(11),(11),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),"Return the qualified name of the keyword `k` as a string.",(cljs.core.truth_(sqlingvo.util.keyword_str)?sqlingvo.util.keyword_str.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.util.m_bind = (function sqlingvo$util$m_bind(mv,mf){
return (function (state){
var vec__72 = mv.call(null,state);
var temp_v = cljs.core.nth.call(null,vec__72,(0),null);
var temp_state = cljs.core.nth.call(null,vec__72,(1),null);
var new_mv = mf.call(null,temp_v);
return new_mv.call(null,temp_state);
});
}); return (
new cljs.core.Var(function(){return sqlingvo.util.m_bind;},new cljs.core.Symbol("sqlingvo.util","m-bind","sqlingvo.util/m-bind",(1963494468),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"m-bind","m-bind",(-1521292287),null),"sqlingvo/util.cljc",(13),(1),(19),(19),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mv","mv",(1147462442),null),new cljs.core.Symbol(null,"mf","mf",(420183542),null)], null)),null,(cljs.core.truth_(sqlingvo.util.m_bind)?sqlingvo.util.m_bind.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.util.m_result = (function sqlingvo$util$m_result(x){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,state], null);
});
}); return (
new cljs.core.Var(function(){return sqlingvo.util.m_result;},new cljs.core.Symbol("sqlingvo.util","m-result","sqlingvo.util/m-result",(439019066),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"m-result","m-result",(-905643529),null),"sqlingvo/util.cljc",(15),(1),(25),(25),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(sqlingvo.util.m_result)?sqlingvo.util.m_result.cljs$lang$test:null)])));})()
;
/**
 * 'Executes' the monadic values in ms and returns a sequence of the
 *   basic values contained in them.
 */
(function (){
sqlingvo.util.m_seq = (function sqlingvo$util$m_seq(ms){
return cljs.core.reduce.call(null,(function (q,p){
return sqlingvo.util.m_bind.call(null,p,(function (x){
return sqlingvo.util.m_bind.call(null,q,(function (y){
return sqlingvo.util.m_result.call(null,cljs.core.cons.call(null,x,y));
}));
}));
}),sqlingvo.util.m_result.call(null,cljs.core.List.EMPTY),cljs.core.reverse.call(null,ms));
}); return (
new cljs.core.Var(function(){return sqlingvo.util.m_seq;},new cljs.core.Symbol("sqlingvo.util","m-seq","sqlingvo.util/m-seq",(-440088487),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"m-seq","m-seq",(-711021596),null),"sqlingvo/util.cljc",(12),(1),(29),(29),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ms","ms",(487821794),null)], null)),"'Executes' the monadic values in ms and returns a sequence of the\n  basic values contained in them.",(cljs.core.truth_(sqlingvo.util.m_seq)?sqlingvo.util.m_seq.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.util.set_val = (function sqlingvo$util$set_val(k,v){
return (function (stmt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.assoc.call(null,stmt,k,v)], null);
});
}); return (
new cljs.core.Var(function(){return sqlingvo.util.set_val;},new cljs.core.Symbol("sqlingvo.util","set-val","sqlingvo.util/set-val",(-1340646915),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"set-val","set-val",(-2134017608),null),"sqlingvo/util.cljc",(14),(1),(40),(40),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),null,(cljs.core.truth_(sqlingvo.util.set_val)?sqlingvo.util.set_val.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.util.assoc_op = (function sqlingvo$util$assoc_op(var_args){
var args__23658__auto__ = [];
var len__23656__auto___80 = arguments.length;
var i__23657__auto___81 = (0);
while(true){
if((i__23657__auto___81 < len__23656__auto___80)){
args__23658__auto__.push((arguments[i__23657__auto___81]));

var G__82 = (i__23657__auto___81 + (1));
i__23657__auto___81 = G__82;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((1) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((1)),(0),null)):null);
return sqlingvo.util.assoc_op.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.util.assoc_op;},new cljs.core.Symbol("sqlingvo.util","assoc-op","sqlingvo.util/assoc-op",(516404212),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"assoc-op","assoc-op",(-290614479),null),"sqlingvo/util.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"op","op",(-242456428),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",(-242456428),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(44),(44),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",(-242456428),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),null,(cljs.core.truth_(sqlingvo.util.assoc_op)?sqlingvo.util.assoc_op.cljs$lang$test:null)])));})()
;

sqlingvo.util.assoc_op.cljs$core$IFn$_invoke$arity$variadic = (function (op,p__77){
var map__78 = p__77;
var map__78__$1 = ((((!((map__78 == null)))?((((map__78.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78):map__78);
var opts = map__78__$1;
return sqlingvo.util.set_val.call(null,op,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"op","op",(-1882987955)),op));
});

sqlingvo.util.assoc_op.cljs$lang$maxFixedArity = (1);

sqlingvo.util.assoc_op.cljs$lang$applyTo = (function (seq75){
var G__76 = cljs.core.first.call(null,seq75);
var seq75__$1 = cljs.core.next.call(null,seq75);
return sqlingvo.util.assoc_op.cljs$core$IFn$_invoke$arity$variadic(G__76,seq75__$1);
});

new cljs.core.Var(function(){return sqlingvo.util.assoc_op;},new cljs.core.Symbol("sqlingvo.util","assoc-op","sqlingvo.util/assoc-op",(516404212),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"assoc-op","assoc-op",(-290614479),null),"sqlingvo/util.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"op","op",(-242456428),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",(-242456428),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(44),(44),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",(-242456428),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),null,(cljs.core.truth_(sqlingvo.util.assoc_op)?sqlingvo.util.assoc_op.cljs$lang$test:null)]));
/**
 * Helper to build WHERE and HAVING conditions.
 */
(function (){
sqlingvo.util.build_condition = (function sqlingvo$util$build_condition(var_args){
var args__23658__auto__ = [];
var len__23656__auto___90 = arguments.length;
var i__23657__auto___91 = (0);
while(true){
if((i__23657__auto___91 < len__23656__auto___90)){
args__23658__auto__.push((arguments[i__23657__auto___91]));

var G__92 = (i__23657__auto___91 + (1));
i__23657__auto___91 = G__92;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((2) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((2)),(0),null)):null);
return sqlingvo.util.build_condition.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.util.build_condition;},new cljs.core.Symbol("sqlingvo.util","build-condition","sqlingvo.util/build-condition",(1635505503),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"build-condition","build-condition",(279786768),null),"sqlingvo/util.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"condition-type","condition-type",(937232151),null),new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combine","combine",(207448214),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condition-type","condition-type",(937232151),null),new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combine","combine",(207448214),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(47),(47),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condition-type","condition-type",(937232151),null),new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combine","combine",(207448214),null)], null)], null)),"Helper to build WHERE and HAVING conditions.",(cljs.core.truth_(sqlingvo.util.build_condition)?sqlingvo.util.build_condition.cljs$lang$test:null)])));})()
;

sqlingvo.util.build_condition.cljs$core$IFn$_invoke$arity$variadic = (function (condition_type,condition,p__86){
var vec__87 = p__86;
var combine = cljs.core.nth.call(null,vec__87,(0),null);
var condition__$1 = sqlingvo.expr.parse_condition.call(null,condition);
return ((function (condition__$1,vec__87,combine){
return (function (stmt){
if(((combine == null)) || ((new cljs.core.Keyword(null,"condition","condition",(1668437652)).cljs$core$IFn$_invoke$arity$1(condition_type.call(null,stmt)) == null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,stmt,condition_type,condition__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc_in.call(null,stmt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [condition_type,new cljs.core.Keyword(null,"condition","condition",(1668437652))], null),sqlingvo.expr.make_node.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"condition","condition",(1668437652)),new cljs.core.Keyword(null,"children","children",(-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"condition","condition",(1668437652))], null),new cljs.core.Keyword(null,"condition","condition",(1668437652)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children","children",(-940561982)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sqlingvo.expr.parse_expr.call(null,combine),new cljs.core.Keyword(null,"condition","condition",(1668437652)).cljs$core$IFn$_invoke$arity$1(condition_type.call(null,stmt)),new cljs.core.Keyword(null,"condition","condition",(1668437652)).cljs$core$IFn$_invoke$arity$1(condition__$1)], null),new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"list","list",(765357683))], null)))], null);

}
});
;})(condition__$1,vec__87,combine))
});

sqlingvo.util.build_condition.cljs$lang$maxFixedArity = (2);

sqlingvo.util.build_condition.cljs$lang$applyTo = (function (seq83){
var G__84 = cljs.core.first.call(null,seq83);
var seq83__$1 = cljs.core.next.call(null,seq83);
var G__85 = cljs.core.first.call(null,seq83__$1);
var seq83__$2 = cljs.core.next.call(null,seq83__$1);
return sqlingvo.util.build_condition.cljs$core$IFn$_invoke$arity$variadic(G__84,G__85,seq83__$2);
});

new cljs.core.Var(function(){return sqlingvo.util.build_condition;},new cljs.core.Symbol("sqlingvo.util","build-condition","sqlingvo.util/build-condition",(1635505503),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"build-condition","build-condition",(279786768),null),"sqlingvo/util.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"condition-type","condition-type",(937232151),null),new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combine","combine",(207448214),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condition-type","condition-type",(937232151),null),new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combine","combine",(207448214),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(47),(47),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condition-type","condition-type",(937232151),null),new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combine","combine",(207448214),null)], null)], null)),"Helper to build WHERE and HAVING conditions.",(cljs.core.truth_(sqlingvo.util.build_condition)?sqlingvo.util.build_condition.cljs$lang$test:null)]));
(function (){
sqlingvo.util.concat_in = (function sqlingvo$util$concat_in(ks,coll){
return (function (stmt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,((cljs.core.empty_QMARK_.call(null,coll))?stmt:cljs.core.update_in.call(null,stmt,ks,(function (p1__1_SHARP_){
return cljs.core.concat.call(null,p1__1_SHARP_,coll);
})))], null);
});
}); return (
new cljs.core.Var(function(){return sqlingvo.util.concat_in;},new cljs.core.Symbol("sqlingvo.util","concat-in","sqlingvo.util/concat-in",(1515746726),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"concat-in","concat-in",(174200293),null),"sqlingvo/util.cljc",(16),(1),(70),(70),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",(-754231827),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),null,(cljs.core.truth_(sqlingvo.util.concat_in)?sqlingvo.util.concat_in.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.util.dissoc_op = (function sqlingvo$util$dissoc_op(k){
return (function (stmt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.dissoc.call(null,stmt,k)], null);
});
}); return (
new cljs.core.Var(function(){return sqlingvo.util.dissoc_op;},new cljs.core.Symbol("sqlingvo.util","dissoc-op","sqlingvo.util/dissoc-op",(1861559217),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"dissoc-op","dissoc-op",(-1323367566),null),"sqlingvo/util.cljc",(16),(1),(75),(75),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),null,(cljs.core.truth_(sqlingvo.util.dissoc_op)?sqlingvo.util.dissoc_op.cljs$lang$test:null)])));})()
;
/**
 * Returns `x` as a sequential data structure.
 */
(function (){
sqlingvo.util.sequential = (function sqlingvo$util$sequential(x){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}); return (
new cljs.core.Var(function(){return sqlingvo.util.sequential;},new cljs.core.Symbol("sqlingvo.util","sequential","sqlingvo.util/sequential",(1909563538),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"sequential","sequential",(557547567),null),"sqlingvo/util.cljc",(17),(1),(79),(79),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Returns `x` as a sequential data structure.",(cljs.core.truth_(sqlingvo.util.sequential)?sqlingvo.util.sequential.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.util.conditional_clause = (function sqlingvo$util$conditional_clause(clause,condition){
if(cljs.core.truth_(condition)){
return sqlingvo.util.assoc_op.call(null,clause);
} else {
return sqlingvo.util.dissoc_op.call(null,clause);
}
}); return (
new cljs.core.Var(function(){return sqlingvo.util.conditional_clause;},new cljs.core.Symbol("sqlingvo.util","conditional-clause","sqlingvo.util/conditional-clause",(-1204152230),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"conditional-clause","conditional-clause",(1750087709),null),"sqlingvo/util.cljc",(25),(1),(85),(85),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clause","clause",(-1174767709),null),new cljs.core.Symbol(null,"condition","condition",(-985998117),null)], null)),null,(cljs.core.truth_(sqlingvo.util.conditional_clause)?sqlingvo.util.conditional_clause.cljs$lang$test:null)])));})()
;
/**
 * Return the SQL name for the `type` keyword.
 */
(function (){
sqlingvo.util.sql_type_name = (function sqlingvo$util$sql_type_name(type){
var G__94 = type;
var G__94__$1 = (((G__94 == null))?null:cljs.core.name.call(null,G__94));
var G__94__$2 = (((G__94__$1 == null))?null:clojure.string.replace.call(null,G__94__$1,"-"," "));
return G__94__$2;
}); return (
new cljs.core.Var(function(){return sqlingvo.util.sql_type_name;},new cljs.core.Symbol("sqlingvo.util","sql-type-name","sqlingvo.util/sql-type-name",(-789202383),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"sql-type-name","sql-type-name",(-1601463300),null),"sqlingvo/util.cljc",(20),(1),(90),(90),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null)], null)),"Return the SQL name for the `type` keyword.",(cljs.core.truth_(sqlingvo.util.sql_type_name)?sqlingvo.util.sql_type_name.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.util.split_sql_name = (function sqlingvo$util$split_sql_name(x){
if(cljs.core.truth_(x)){
return clojure.string.split.call(null,cljs.core.name.call(null,x),/\./);
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return sqlingvo.util.split_sql_name;},new cljs.core.Symbol("sqlingvo.util","split-sql-name","sqlingvo.util/split-sql-name",(1927133495),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"split-sql-name","split-sql-name",(570710260),null),"sqlingvo/util.cljc",(22),(1),(95),(95),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(sqlingvo.util.split_sql_name)?sqlingvo.util.split_sql_name.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.util.map_sql_name = (function sqlingvo$util$map_sql_name(f,x){
return clojure.string.join.call(null,".",cljs.core.map.call(null,f,sqlingvo.util.split_sql_name.call(null,x)));
}); return (
new cljs.core.Var(function(){return sqlingvo.util.map_sql_name;},new cljs.core.Symbol("sqlingvo.util","map-sql-name","sqlingvo.util/map-sql-name",(-502269196),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"map-sql-name","map-sql-name",(871963275),null),"sqlingvo/util.cljc",(20),(1),(98),(98),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(sqlingvo.util.map_sql_name)?sqlingvo.util.map_sql_name.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.util.sql_name_underscore = (function sqlingvo$util$sql_name_underscore(x){
return sqlingvo.util.map_sql_name.call(null,(function (p1__2_SHARP_){
return clojure.string.replace.call(null,p1__2_SHARP_,"-","_");
}),x);
}); return (
new cljs.core.Var(function(){return sqlingvo.util.sql_name_underscore;},new cljs.core.Symbol("sqlingvo.util","sql-name-underscore","sqlingvo.util/sql-name-underscore",(-669170467),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"sql-name-underscore","sql-name-underscore",(-2000198504),null),"sqlingvo/util.cljc",(26),(1),(103),(103),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(sqlingvo.util.sql_name_underscore)?sqlingvo.util.sql_name_underscore.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.util.sql_keyword_hyphenate = (function sqlingvo$util$sql_keyword_hyphenate(x){
return cljs.core.keyword.call(null,sqlingvo.util.map_sql_name.call(null,(function (p1__3_SHARP_){
return clojure.string.replace.call(null,cljs.core.name.call(null,p1__3_SHARP_),"_","-");
}),x));
}); return (
new cljs.core.Var(function(){return sqlingvo.util.sql_keyword_hyphenate;},new cljs.core.Symbol("sqlingvo.util","sql-keyword-hyphenate","sqlingvo.util/sql-keyword-hyphenate",(540494939),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"sql-keyword-hyphenate","sql-keyword-hyphenate",(-798053348),null),"sqlingvo/util.cljc",(28),(1),(106),(106),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(sqlingvo.util.sql_keyword_hyphenate)?sqlingvo.util.sql_keyword_hyphenate.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.util.sql_quote_char = (function sqlingvo$util$sql_quote_char(x,before,after){
if((x == null)){
return x;
} else {
if(cljs.core._EQ_.call(null,"*",x)){
return "*";
} else {
if(cljs.core.contains_QMARK_.call(null,sqlingvo.util._STAR_reserved_STAR_,x)){
return x;
} else {
return [cljs.core.str(before),cljs.core.str(x),cljs.core.str(after)].join('');

}
}
}
}); return (
new cljs.core.Var(function(){return sqlingvo.util.sql_quote_char;},new cljs.core.Symbol("sqlingvo.util","sql-quote-char","sqlingvo.util/sql-quote-char",(-802867729),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"sql-quote-char","sql-quote-char",(-1594698464),null),"sqlingvo/util.cljc",(22),(1),(109),(109),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"before","before",(6839139),null),new cljs.core.Symbol(null,"after","after",(-2059438855),null)], null)),null,(cljs.core.truth_(sqlingvo.util.sql_quote_char)?sqlingvo.util.sql_quote_char.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.util.sql_quote_backtick = (function sqlingvo$util$sql_quote_backtick(x){
if(cljs.core.truth_(x)){
return sqlingvo.util.map_sql_name.call(null,(function (p1__4_SHARP_){
return sqlingvo.util.sql_quote_char.call(null,p1__4_SHARP_,"`","`");
}),x);
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return sqlingvo.util.sql_quote_backtick;},new cljs.core.Symbol("sqlingvo.util","sql-quote-backtick","sqlingvo.util/sql-quote-backtick",(-239323491),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"sql-quote-backtick","sql-quote-backtick",(-1047111976),null),"sqlingvo/util.cljc",(25),(1),(120),(120),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(sqlingvo.util.sql_quote_backtick)?sqlingvo.util.sql_quote_backtick.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.util.sql_quote_double_quote = (function sqlingvo$util$sql_quote_double_quote(x){
if(cljs.core.truth_(x)){
return sqlingvo.util.map_sql_name.call(null,(function (p1__5_SHARP_){
return sqlingvo.util.sql_quote_char.call(null,p1__5_SHARP_,"\"","\"");
}),x);
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return sqlingvo.util.sql_quote_double_quote;},new cljs.core.Symbol("sqlingvo.util","sql-quote-double-quote","sqlingvo.util/sql-quote-double-quote",(2123351018),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"sql-quote-double-quote","sql-quote-double-quote",(1319494439),null),"sqlingvo/util.cljc",(29),(1),(123),(123),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(sqlingvo.util.sql_quote_double_quote)?sqlingvo.util.sql_quote_double_quote.cljs$lang$test:null)])));})()
;
/**
 * Return the `db` specific SQL name for `x`.
 */
(function (){
sqlingvo.util.sql_name = (function sqlingvo$util$sql_name(db,x){
if(cljs.core.truth_(x)){
return (function (){var or__20817__auto__ = new cljs.core.Keyword(null,"sql-name","sql-name",(1248734839)).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return cljs.core.name;
}
})().call(null,x);
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return sqlingvo.util.sql_name;},new cljs.core.Symbol("sqlingvo.util","sql-name","sqlingvo.util/sql-name",(-1612671757),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"sql-name","sql-name",(-1405700930),null),"sqlingvo/util.cljc",(15),(1),(126),(126),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Return the `db` specific SQL name for `x`.",(cljs.core.truth_(sqlingvo.util.sql_name)?sqlingvo.util.sql_name.cljs$lang$test:null)])));})()
;
/**
 * Return the `db` specific SQL keyword for `x`.
 */
(function (){
sqlingvo.util.sql_keyword = (function sqlingvo$util$sql_keyword(db,x){
if(cljs.core.truth_(x)){
return (function (){var or__20817__auto__ = new cljs.core.Keyword(null,"sql-keyword","sql-keyword",(-1779548197)).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return cljs.core.keyword;
}
})().call(null,x);
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return sqlingvo.util.sql_keyword;},new cljs.core.Symbol("sqlingvo.util","sql-keyword","sqlingvo.util/sql-keyword",(-949950873),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"sql-keyword","sql-keyword",(-139016670),null),"sqlingvo/util.cljc",(18),(1),(132),(132),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Return the `db` specific SQL keyword for `x`.",(cljs.core.truth_(sqlingvo.util.sql_keyword)?sqlingvo.util.sql_keyword.cljs$lang$test:null)])));})()
;
/**
 * Return the `db` specific quoted string for `x`.
 */
(function (){
sqlingvo.util.sql_quote = (function sqlingvo$util$sql_quote(db,x){
if(cljs.core.truth_(x)){
return (function (){var or__20817__auto__ = new cljs.core.Keyword(null,"sql-quote","sql-quote",(994700328)).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return sqlingvo.util.sql_quote_backtick;
}
})().call(null,sqlingvo.util.sql_name.call(null,db,x));
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return sqlingvo.util.sql_quote;},new cljs.core.Symbol("sqlingvo.util","sql-quote","sqlingvo.util/sql-quote",(-842526168),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"sql-quote","sql-quote",(-1659735441),null),"sqlingvo/util.cljc",(16),(1),(138),(138),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Return the `db` specific quoted string for `x`.",(cljs.core.truth_(sqlingvo.util.sql_quote)?sqlingvo.util.sql_quote.cljs$lang$test:null)])));})()
;
/**
 * Quote an SQL identifier only if needed.
 */
(function (){
sqlingvo.util.sql_quote_fn = (function sqlingvo$util$sql_quote_fn(db,x){
if(cljs.core.truth_(x)){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/[a-z_][a-z0-9_]*/,cljs.core.name.call(null,x)))){
return sqlingvo.util.sql_name.call(null,db,x);
} else {
return sqlingvo.util.sql_quote.call(null,db,x);
}
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return sqlingvo.util.sql_quote_fn;},new cljs.core.Symbol("sqlingvo.util","sql-quote-fn","sqlingvo.util/sql-quote-fn",(693255744),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"sql-quote-fn","sql-quote-fn",(-108257651),null),"sqlingvo/util.cljc",(19),(1),(145),(145),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",(-1661185010),null),new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Quote an SQL identifier only if needed.",(cljs.core.truth_(sqlingvo.util.sql_quote_fn)?sqlingvo.util.sql_quote_fn.cljs$lang$test:null)])));})()
;
/**
 * Returns a fn that uses a constant strategy to produce
 *   placeholders.
 */
(function (){
sqlingvo.util.sql_placeholder_constant = (function sqlingvo$util$sql_placeholder_constant(var_args){
var args__23658__auto__ = [];
var len__23656__auto___100 = arguments.length;
var i__23657__auto___101 = (0);
while(true){
if((i__23657__auto___101 < len__23656__auto___100)){
args__23658__auto__.push((arguments[i__23657__auto___101]));

var G__102 = (i__23657__auto___101 + (1));
i__23657__auto___101 = G__102;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((0) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((0)),(0),null)):null);
return sqlingvo.util.sql_placeholder_constant.cljs$core$IFn$_invoke$arity$variadic(argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.util.sql_placeholder_constant;},new cljs.core.Symbol("sqlingvo.util","sql-placeholder-constant","sqlingvo.util/sql-placeholder-constant",(-2005608023),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"sql-placeholder-constant","sql-placeholder-constant",(-1196492306),null),"sqlingvo/util.cljc",(31),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"placeholder","placeholder",(1535658444),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"placeholder","placeholder",(1535658444),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(153),(153),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"placeholder","placeholder",(1535658444),null)], null)], null)),"Returns a fn that uses a constant strategy to produce\n  placeholders.",(cljs.core.truth_(sqlingvo.util.sql_placeholder_constant)?sqlingvo.util.sql_placeholder_constant.cljs$lang$test:null)])));})()
;

sqlingvo.util.sql_placeholder_constant.cljs$core$IFn$_invoke$arity$variadic = (function (p__96){
var vec__97 = p__96;
var placeholder = cljs.core.nth.call(null,vec__97,(0),null);
var placeholder__$1 = [cljs.core.str((function (){var or__20817__auto__ = placeholder;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return "?";
}
})())].join('');
return cljs.core.constantly.call(null,placeholder__$1);
});

sqlingvo.util.sql_placeholder_constant.cljs$lang$maxFixedArity = (0);

sqlingvo.util.sql_placeholder_constant.cljs$lang$applyTo = (function (seq95){
return sqlingvo.util.sql_placeholder_constant.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq95));
});

new cljs.core.Var(function(){return sqlingvo.util.sql_placeholder_constant;},new cljs.core.Symbol("sqlingvo.util","sql-placeholder-constant","sqlingvo.util/sql-placeholder-constant",(-2005608023),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"sql-placeholder-constant","sql-placeholder-constant",(-1196492306),null),"sqlingvo/util.cljc",(31),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"placeholder","placeholder",(1535658444),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"placeholder","placeholder",(1535658444),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(153),(153),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"placeholder","placeholder",(1535658444),null)], null)], null)),"Returns a fn that uses a constant strategy to produce\n  placeholders.",(cljs.core.truth_(sqlingvo.util.sql_placeholder_constant)?sqlingvo.util.sql_placeholder_constant.cljs$lang$test:null)]));
/**
 * Returns a fn that uses a counting strategy to produce
 *   placeholders.
 */
(function (){
sqlingvo.util.sql_placeholder_count = (function sqlingvo$util$sql_placeholder_count(var_args){
var args__23658__auto__ = [];
var len__23656__auto___108 = arguments.length;
var i__23657__auto___109 = (0);
while(true){
if((i__23657__auto___109 < len__23656__auto___108)){
args__23658__auto__.push((arguments[i__23657__auto___109]));

var G__110 = (i__23657__auto___109 + (1));
i__23657__auto___109 = G__110;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((0) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((0)),(0),null)):null);
return sqlingvo.util.sql_placeholder_count.cljs$core$IFn$_invoke$arity$variadic(argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.util.sql_placeholder_count;},new cljs.core.Symbol("sqlingvo.util","sql-placeholder-count","sqlingvo.util/sql-placeholder-count",(-1957758565),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"sql-placeholder-count","sql-placeholder-count",(-1146824410),null),"sqlingvo/util.cljc",(28),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(160),(160),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null)], null)], null)),"Returns a fn that uses a counting strategy to produce\n  placeholders.",(cljs.core.truth_(sqlingvo.util.sql_placeholder_count)?sqlingvo.util.sql_placeholder_count.cljs$lang$test:null)])));})()
;

sqlingvo.util.sql_placeholder_count.cljs$core$IFn$_invoke$arity$variadic = (function (p__104){
var vec__105 = p__104;
var prefix = cljs.core.nth.call(null,vec__105,(0),null);
var counter = cljs.core.atom.call(null,(0));
var prefix__$1 = [cljs.core.str((function (){var or__20817__auto__ = prefix;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return "$";
}
})())].join('');
return ((function (counter,prefix__$1,vec__105,prefix){
return (function (){
return [cljs.core.str(prefix__$1),cljs.core.str(cljs.core.swap_BANG_.call(null,counter,cljs.core.inc))].join('');
});
;})(counter,prefix__$1,vec__105,prefix))
});

sqlingvo.util.sql_placeholder_count.cljs$lang$maxFixedArity = (0);

sqlingvo.util.sql_placeholder_count.cljs$lang$applyTo = (function (seq103){
return sqlingvo.util.sql_placeholder_count.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq103));
});

new cljs.core.Var(function(){return sqlingvo.util.sql_placeholder_count;},new cljs.core.Symbol("sqlingvo.util","sql-placeholder-count","sqlingvo.util/sql-placeholder-count",(-1957758565),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.util","sqlingvo.util",(1606349302),null),new cljs.core.Symbol(null,"sql-placeholder-count","sql-placeholder-count",(-1146824410),null),"sqlingvo/util.cljc",(28),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(160),(160),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null)], null)], null)),"Returns a fn that uses a counting strategy to produce\n  placeholders.",(cljs.core.truth_(sqlingvo.util.sql_placeholder_count)?sqlingvo.util.sql_placeholder_count.cljs$lang$test:null)]));
