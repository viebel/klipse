goog.provide("re_frame.utils");
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 *   The key thing is that 'm' remains identical? to istelf if the path was never present
 */
(function (){
re_frame.utils.dissoc_in = (function re_frame$utils$dissoc_in(m,p__39){
var vec__43 = p__39;
var seq__44 = cljs.core.seq.call(null,vec__43);
var first__45 = cljs.core.first.call(null,seq__44);
var seq__44__$1 = cljs.core.next.call(null,seq__44);
var k = first__45;
var ks = seq__44__$1;
var keys = vec__43;
if(ks){
var temp__21873__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__21873__auto__)){
var nextmap = temp__21873__auto__;
var newmap = re_frame.utils.dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
}); return (
new cljs.core.Var(function(){return re_frame.utils.dissoc_in;},new cljs.core.Symbol("re-frame.utils","dissoc-in","re-frame.utils/dissoc-in",(-1334339665),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.utils","re-frame.utils",(-1224046192),null),new cljs.core.Symbol(null,"dissoc-in","dissoc-in",(-249353279),null),"re_frame/utils.cljc",(16),(1),(5),(5),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"ks","ks",(-754231827),null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"keys","keys",(-1586012071),null)], null)], null)),"Dissociates an entry from a nested associative structure returning a new\n  nested structure. keys is a sequence of keys. Any empty maps that result\n  will not be present in the new structure.\n  The key thing is that 'm' remains identical? to istelf if the path was never present",(cljs.core.truth_(re_frame.utils.dissoc_in)?re_frame.utils.dissoc_in.cljs$lang$test:null)])));})()
;
(function (){
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"re-frame: expected a vector, but got:",v);
}
}); return (
new cljs.core.Var(function(){return re_frame.utils.first_in_vector;},new cljs.core.Symbol("re-frame.utils","first-in-vector","re-frame.utils/first-in-vector",(-175491221),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.utils","re-frame.utils",(-1224046192),null),new cljs.core.Symbol(null,"first-in-vector","first-in-vector",(-1266840779),null),"re_frame/utils.cljc",(22),(1),(20),(20),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),null,(cljs.core.truth_(re_frame.utils.first_in_vector)?re_frame.utils.first_in_vector.cljs$lang$test:null)])));})()
;
