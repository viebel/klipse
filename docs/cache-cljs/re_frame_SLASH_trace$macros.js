goog.provide("re_frame.trace$macros");
(function (){
re_frame.trace$macros.id = cljs.core.atom.call(null,(0)); return (
new cljs.core.Var(function(){return re_frame.trace$macros.id;},new cljs.core.Symbol("re-frame.trace$macros","id","re-frame.trace$macros/id",(945653114),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.trace$macros","re-frame.trace$macros",(1224667537),null),new cljs.core.Symbol(null,"id","id",(252129435),null),"re_frame/trace.cljc",(8),(1),(10),(10),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frame.trace$macros.id)?re_frame.trace$macros.id.cljs$lang$test:null)])));})()
;
(function (){
re_frame.trace$macros._STAR_current_trace_STAR_ = null; return (
new cljs.core.Var(function(){return re_frame.trace$macros._STAR_current_trace_STAR_;},new cljs.core.Symbol("re-frame.trace$macros","*current-trace*","re-frame.trace$macros/*current-trace*",(-1013408067),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.trace$macros","re-frame.trace$macros",(1224667537),null),new cljs.core.Symbol(null,"*current-trace*","*current-trace*",(-833689188),null),"re_frame/trace.cljc",(31),(1),true,(11),(11),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frame.trace$macros._STAR_current_trace_STAR_)?re_frame.trace$macros._STAR_current_trace_STAR_.cljs$lang$test:null)])));})()
;
(function (){
re_frame.trace$macros.reset_tracing_BANG_ = (function re_frame$trace$macros$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace$macros.id,(0));
}); return (
new cljs.core.Var(function(){return re_frame.trace$macros.reset_tracing_BANG_;},new cljs.core.Symbol("re-frame.trace$macros","reset-tracing!","re-frame.trace$macros/reset-tracing!",(1466396704),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.trace$macros","re-frame.trace$macros",(1224667537),null),new cljs.core.Symbol(null,"reset-tracing!","reset-tracing!",(-1439908413),null),"re_frame/trace.cljc",(21),(1),(13),(13),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(re_frame.trace$macros.reset_tracing_BANG_)?re_frame.trace$macros.reset_tracing_BANG_.cljs$lang$test:null)])));})()
;
(function (){
re_frame.trace$macros.trace_enabled_QMARK_; return (
new cljs.core.Var(function(){return re_frame.trace$macros.trace_enabled_QMARK_;},new cljs.core.Symbol("re-frame.trace$macros","trace-enabled?","re-frame.trace$macros/trace-enabled?",(-2059240707),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.trace$macros","re-frame.trace$macros",(1224667537),null),new cljs.core.Symbol(null,"trace-enabled?","trace-enabled?",(-1877362722),null),"re_frame/trace.cljc",(37),(10),(16),true,(16),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frame.trace$macros.trace_enabled_QMARK_)?re_frame.trace$macros.trace_enabled_QMARK_.cljs$lang$test:null)])));})()
;

/** @define {boolean} */
goog.define("re_frame.trace$macros.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
(function (){
re_frame.trace$macros.is_trace_enabled_QMARK_ = (function re_frame$trace$macros$is_trace_enabled_QMARK_(){
return re_frame.trace$macros.trace_enabled_QMARK_;
}); return (
new cljs.core.Var(function(){return re_frame.trace$macros.is_trace_enabled_QMARK_;},new cljs.core.Symbol("re-frame.trace$macros","is-trace-enabled?","re-frame.trace$macros/is-trace-enabled?",(-318159922),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.trace$macros","re-frame.trace$macros",(1224667537),null),new cljs.core.Symbol(null,"is-trace-enabled?","is-trace-enabled?",(305372975),null),"re_frame/trace.cljc",(33),(1),(19),(19),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(cljs.core.PersistentVector.EMPTY),"See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details",((re_frame.trace$macros.is_trace_enabled_QMARK_)?re_frame.trace$macros.is_trace_enabled_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
re_frame.trace$macros.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY); return (
new cljs.core.Var(function(){return re_frame.trace$macros.trace_cbs;},new cljs.core.Symbol("re-frame.trace$macros","trace-cbs","re-frame.trace$macros/trace-cbs",(1515785707),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.trace$macros","re-frame.trace$macros",(1224667537),null),new cljs.core.Symbol(null,"trace-cbs","trace-cbs",(1227867850),null),"re_frame/trace.cljc",(15),(1),(24),(24),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frame.trace$macros.trace_cbs)?re_frame.trace$macros.trace_cbs.cljs$lang$test:null)])));})()
;
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
(function (){
re_frame.trace$macros.register_trace_cb = (function re_frame$trace$macros$register_trace_cb(key,f){
return cljs.core.swap_BANG_.call(null,re_frame.trace$macros.trace_cbs,cljs.core.assoc,key,f);
}); return (
new cljs.core.Var(function(){return re_frame.trace$macros.register_trace_cb;},new cljs.core.Symbol("re-frame.trace$macros","register-trace-cb","re-frame.trace$macros/register-trace-cb",(-997774781),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.trace$macros","re-frame.trace$macros",(1224667537),null),new cljs.core.Symbol(null,"register-trace-cb","register-trace-cb",(-161644692),null),"re_frame/trace.cljc",(24),(1),(26),(26),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),"Registers a tracing callback function which will receive a collection of one or more traces.\n  Will replace an existing callback function if it shares the same key.",(cljs.core.truth_(re_frame.trace$macros.register_trace_cb)?re_frame.trace$macros.register_trace_cb.cljs$lang$test:null)])));})()
;
(function (){
re_frame.trace$macros.remove_trace_cb = (function re_frame$trace$macros$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace$macros.trace_cbs,cljs.core.dissoc,key);

return null;
}); return (
new cljs.core.Var(function(){return re_frame.trace$macros.remove_trace_cb;},new cljs.core.Symbol("re-frame.trace$macros","remove-trace-cb","re-frame.trace$macros/remove-trace-cb",(971289085),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.trace$macros","re-frame.trace$macros",(1224667537),null),new cljs.core.Symbol(null,"remove-trace-cb","remove-trace-cb",(-995197220),null),"re_frame/trace.cljc",(22),(1),(32),(32),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",(124488940),null)], null)),null,(cljs.core.truth_(re_frame.trace$macros.remove_trace_cb)?re_frame.trace$macros.remove_trace_cb.cljs$lang$test:null)])));})()
;
(function (){
re_frame.trace$macros.next_id = (function re_frame$trace$macros$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace$macros.id,cljs.core.inc);
}); return (
new cljs.core.Var(function(){return re_frame.trace$macros.next_id;},new cljs.core.Symbol("re-frame.trace$macros","next-id","re-frame.trace$macros/next-id",(664548590),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.trace$macros","re-frame.trace$macros",(1224667537),null),new cljs.core.Symbol(null,"next-id","next-id",(1416290765),null),"re_frame/trace.cljc",(14),(1),(36),(36),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(re_frame.trace$macros.next_id)?re_frame.trace$macros.next_id.cljs$lang$test:null)])));})()
;
(function (){
re_frame.trace$macros.start_trace = (function re_frame$trace$macros$start_trace(p__159){
var map__162 = p__159;
var map__162__$1 = ((((!((map__162 == null)))?((((map__162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__162.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__162):map__162);
var operation = cljs.core.get.call(null,map__162__$1,new cljs.core.Keyword(null,"operation","operation",(-1267664310)));
var op_type = cljs.core.get.call(null,map__162__$1,new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)));
var tags = cljs.core.get.call(null,map__162__$1,new cljs.core.Keyword(null,"tags","tags",(1771418977)));
var child_of = cljs.core.get.call(null,map__162__$1,new cljs.core.Keyword(null,"child-of","child-of",(-903376662)));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",(-1388402092)),re_frame.trace$macros.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",(-1267664310)),operation,new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)),op_type,new cljs.core.Keyword(null,"tags","tags",(1771418977)),tags,new cljs.core.Keyword(null,"child-of","child-of",(-903376662)),(function (){var or__23109__auto__ = child_of;
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(re_frame.trace$macros._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",(-355208981)),re_frame.interop.now.call(null)], null);
}); return (
new cljs.core.Var(function(){return re_frame.trace$macros.start_trace;},new cljs.core.Symbol("re-frame.trace$macros","start-trace","re-frame.trace$macros/start-trace",(524642385),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.trace$macros","re-frame.trace$macros",(1224667537),null),new cljs.core.Symbol(null,"start-trace","start-trace",(270253950),null),"re_frame/trace.cljc",(18),(1),(38),(38),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"operation","operation",(372867217),null),new cljs.core.Symbol(null,"op-type","op-type",(4389859),null),new cljs.core.Symbol(null,"tags","tags",(-883016792),null),new cljs.core.Symbol(null,"child-of","child-of",(737154865),null)], null)], null)], null)),null,(cljs.core.truth_(re_frame.trace$macros.start_trace)?re_frame.trace$macros.start_trace.cljs$lang$test:null)])));})()
;
(function (){
re_frame.trace$macros.finish_trace = (function re_frame$trace$macros$finish_trace(_AMPERSAND_form,_AMPERSAND_env,trace){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.trace","is-trace-enabled?","re-frame.trace/is-trace-enabled?",(-746708463),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__1__auto__","end__1__auto__",(-1993615034),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.interop","now","re-frame.interop/now",(458059402),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"duration__2__auto__","duration__2__auto__",(371546232),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-","cljs.core/-",(187040141),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__1__auto__","end__1__auto__",(-1993615034),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"start","start",(-355208981))),(function (){var x__25689__auto__ = trace;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","doseq","cljs.core/doseq",(-169320766),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__3__auto__","k__3__auto__",(1807234466),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cb__4__auto__","cb__4__auto__",(-770430328),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.trace","trace-cbs","re-frame.trace/trace-cbs",(-1947456548),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",(-1273693247),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cb__4__auto__","cb__4__auto__",(-770430328),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",(322326297),null)),(function (){var x__25689__auto__ = trace;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"duration","duration",(1444101068))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"duration__2__auto__","duration__2__auto__",(371546232),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end","end",(-268185958))),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.interop","now","re-frame.interop/now",(458059402),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"catch","catch",(-1616370245),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"default","default",(-1987822328))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__5__auto__","e__5__auto__",(2124973438),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.loggers","console","re-frame.loggers/console",(-317229304),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",(-978969032))),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Error thrown from trace cb"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__3__auto__","k__3__auto__",(1807234466),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"while storing"),(function (){var x__25689__auto__ = trace;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__5__auto__","e__5__auto__",(2124973438),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}); return (
new cljs.core.Var(function(){return re_frame.trace$macros.finish_trace;},new cljs.core.Symbol("re-frame.trace$macros","finish-trace","re-frame.trace$macros/finish-trace",(-1235024526),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.trace$macros","re-frame.trace$macros",(1224667537),null),new cljs.core.Symbol(null,"finish-trace","finish-trace",(-1556693485),null),"re_frame/trace.cljc",(25),(3),(47),true,(47),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"trace","trace",(557784112),null)], null)),null,(cljs.core.truth_(re_frame.trace$macros.finish_trace)?re_frame.trace$macros.finish_trace.cljs$lang$test:null)])));})()
;

re_frame.trace$macros.finish_trace.cljs$lang$macro = true;

/**
 * Create a trace inside the scope of the with-trace macro
 * 
 *        Common keys for trace-opts
 *        :op-type - what kind of operation is this? e.g. :sub/create, :render.
 *        :operation - identifier for the operation, for an subscription it would be the subscription keyword
 *        tags - a map of arbitrary kv pairs
 */
(function (){
re_frame.trace$macros.with_trace = (function re_frame$trace$macros$with_trace(var_args){
var args__25948__auto__ = [];
var len__25946__auto___171 = arguments.length;
var i__25947__auto___172 = (0);
while(true){
if((i__25947__auto___172 < len__25946__auto___171)){
args__25948__auto__.push((arguments[i__25947__auto___172]));

var G__173 = (i__25947__auto___172 + (1));
i__25947__auto___172 = G__173;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((3) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((3)),(0),null)):null);
return re_frame.trace$macros.with_trace.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return re_frame.trace$macros.with_trace;},new cljs.core.Symbol("re-frame.trace$macros","with-trace","re-frame.trace$macros/with-trace",(1032668875),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.trace$macros","re-frame.trace$macros",(1224667537),null),new cljs.core.Symbol(null,"with-trace","with-trace",(794342314),null),"re_frame/trace.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"operation","operation",(372867217),null),new cljs.core.Symbol(null,"op-type","op-type",(4389859),null),new cljs.core.Symbol(null,"tags","tags",(-883016792),null),new cljs.core.Symbol(null,"child-of","child-of",(737154865),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"trace-opts","trace-opts",(-1009662858),null)], null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"operation","operation",(372867217),null),new cljs.core.Symbol(null,"op-type","op-type",(4389859),null),new cljs.core.Symbol(null,"tags","tags",(-883016792),null),new cljs.core.Symbol(null,"child-of","child-of",(737154865),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"trace-opts","trace-opts",(-1009662858),null)], null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(2),(60),true,(60),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"operation","operation",(372867217),null),new cljs.core.Symbol(null,"op-type","op-type",(4389859),null),new cljs.core.Symbol(null,"tags","tags",(-883016792),null),new cljs.core.Symbol(null,"child-of","child-of",(737154865),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"trace-opts","trace-opts",(-1009662858),null)], null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Create a trace inside the scope of the with-trace macro\n\n          Common keys for trace-opts\n          :op-type - what kind of operation is this? e.g. :sub/create, :render.\n          :operation - identifier for the operation, for an subscription it would be the subscription keyword\n          tags - a map of arbitrary kv pairs",(cljs.core.truth_(re_frame.trace$macros.with_trace)?re_frame.trace$macros.with_trace.cljs$lang$test:null)])));})()
;

re_frame.trace$macros.with_trace.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__168,body){
var map__169 = p__168;
var map__169__$1 = ((((!((map__169 == null)))?((((map__169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__169.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__169):map__169);
var trace_opts = map__169__$1;
var operation = cljs.core.get.call(null,map__169__$1,new cljs.core.Keyword(null,"operation","operation",(-1267664310)));
var op_type = cljs.core.get.call(null,map__169__$1,new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)));
var tags = cljs.core.get.call(null,map__169__$1,new cljs.core.Keyword(null,"tags","tags",(1771418977)));
var child_of = cljs.core.get.call(null,map__169__$1,new cljs.core.Keyword(null,"child-of","child-of",(-903376662)));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.trace","is-trace-enabled?","re-frame.trace/is-trace-enabled?",(-746708463),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",(2050379843),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.trace","*current-trace*","re-frame.trace/*current-trace*",(-1928561546),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.trace","start-trace","re-frame.trace/start-trace",(-774485496),null)),(function (){var x__25689__auto__ = trace_opts;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",(-1273693247),null)),body,(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",(-1065347064),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.trace","finish-trace","re-frame.trace/finish-trace",(-504356059),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.trace","*current-trace*","re-frame.trace/*current-trace*",(-1928561546),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
});

re_frame.trace$macros.with_trace.cljs$lang$maxFixedArity = (3);

re_frame.trace$macros.with_trace.cljs$lang$applyTo = (function (seq164){
var G__165 = cljs.core.first.call(null,seq164);
var seq164__$1 = cljs.core.next.call(null,seq164);
var G__166 = cljs.core.first.call(null,seq164__$1);
var seq164__$2 = cljs.core.next.call(null,seq164__$1);
var G__167 = cljs.core.first.call(null,seq164__$2);
var seq164__$3 = cljs.core.next.call(null,seq164__$2);
return re_frame.trace$macros.with_trace.cljs$core$IFn$_invoke$arity$variadic(G__165,G__166,G__167,seq164__$3);
});

new cljs.core.Var(function(){return re_frame.trace$macros.with_trace;},new cljs.core.Symbol("re-frame.trace$macros","with-trace","re-frame.trace$macros/with-trace",(1032668875),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.trace$macros","re-frame.trace$macros",(1224667537),null),new cljs.core.Symbol(null,"with-trace","with-trace",(794342314),null),"re_frame/trace.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"operation","operation",(372867217),null),new cljs.core.Symbol(null,"op-type","op-type",(4389859),null),new cljs.core.Symbol(null,"tags","tags",(-883016792),null),new cljs.core.Symbol(null,"child-of","child-of",(737154865),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"trace-opts","trace-opts",(-1009662858),null)], null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"operation","operation",(372867217),null),new cljs.core.Symbol(null,"op-type","op-type",(4389859),null),new cljs.core.Symbol(null,"tags","tags",(-883016792),null),new cljs.core.Symbol(null,"child-of","child-of",(737154865),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"trace-opts","trace-opts",(-1009662858),null)], null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(2),(60),true,(60),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"operation","operation",(372867217),null),new cljs.core.Symbol(null,"op-type","op-type",(4389859),null),new cljs.core.Symbol(null,"tags","tags",(-883016792),null),new cljs.core.Symbol(null,"child-of","child-of",(737154865),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"trace-opts","trace-opts",(-1009662858),null)], null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Create a trace inside the scope of the with-trace macro\n\n          Common keys for trace-opts\n          :op-type - what kind of operation is this? e.g. :sub/create, :render.\n          :operation - identifier for the operation, for an subscription it would be the subscription keyword\n          tags - a map of arbitrary kv pairs",(cljs.core.truth_(re_frame.trace$macros.with_trace)?re_frame.trace$macros.with_trace.cljs$lang$test:null)]));

re_frame.trace$macros.with_trace.cljs$lang$macro = true;

(function (){
re_frame.trace$macros.merge_trace_BANG_ = (function re_frame$trace$macros$merge_trace_BANG_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.trace","is-trace-enabled?","re-frame.trace/is-trace-enabled?",(-746708463),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-trace__6__auto__","new-trace__6__auto__",(-1515893745),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",(1488366311),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update","cljs.core/update",(-908565906),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.trace","*current-trace*","re-frame.trace/*current-trace*",(-1928561546),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tags","tags",(1771418977))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","merge","cljs.core/merge",(-822184067),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tags","tags",(1771418977))),(function (){var x__25689__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","merge","cljs.core/merge",(-822184067),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",(-432349815),null)),(function (){var x__25689__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tags","tags",(1771418977)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",(250714521),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.trace","*current-trace*","re-frame.trace/*current-trace*",(-1928561546),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-trace__6__auto__","new-trace__6__auto__",(-1515893745),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null)));
}); return (
new cljs.core.Var(function(){return re_frame.trace$macros.merge_trace_BANG_;},new cljs.core.Symbol("re-frame.trace$macros","merge-trace!","re-frame.trace$macros/merge-trace!",(-1166367081),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.trace$macros","re-frame.trace$macros",(1224667537),null),new cljs.core.Symbol(null,"merge-trace!","merge-trace!",(-1532660812),null),"re_frame/trace.cljc",(25),(3),(74),true,(74),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),null,(cljs.core.truth_(re_frame.trace$macros.merge_trace_BANG_)?re_frame.trace$macros.merge_trace_BANG_.cljs$lang$test:null)])));})()
;

re_frame.trace$macros.merge_trace_BANG_.cljs$lang$macro = true;
