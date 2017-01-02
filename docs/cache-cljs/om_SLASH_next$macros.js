goog.provide("om.next$macros");
(function (){
om.next$macros.collect_statics = (function om$next$macros$collect_statics(dt){
var split_on_static = (function om$next$macros$collect_statics_$_split_on_static(forms){
return cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"static","static",(-1440077198),null),null], null), null)),forms);
});
var split_on_symbol = (function om$next$macros$collect_statics_$_split_on_symbol(forms){
return cljs.core.split_with.call(null,cljs.core.complement.call(null,cljs.core.symbol_QMARK_),forms);
});
var dt__$1 = cljs.core.seq.call(null,dt);
var dt_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
var statics = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"fields","fields",(-1932066230)),cljs.core.PersistentArrayMap.EMPTY], null);
while(true){
if(dt__$1){
var vec__272 = split_on_static.call(null,dt__$1);
var pre = cljs.core.nth.call(null,vec__272,(0),null);
var vec__275 = cljs.core.nth.call(null,vec__272,(1),null);
var seq__276 = cljs.core.seq.call(null,vec__275);
var first__277 = cljs.core.first.call(null,seq__276);
var seq__276__$1 = cljs.core.next.call(null,seq__276);
var _ = first__277;
var first__277__$1 = cljs.core.first.call(null,seq__276__$1);
var seq__276__$2 = cljs.core.next.call(null,seq__276__$1);
var sym = first__277__$1;
var remaining = seq__276__$2;
var post = vec__275;
var dt_SINGLEQUOTE___$1 = cljs.core.into.call(null,dt_SINGLEQUOTE_,pre);
if(cljs.core.seq.call(null,post)){
if(cljs.core._EQ_.call(null,sym,new cljs.core.Symbol(null,"field","field",(338095027),null))){
var vec__278 = cljs.core.split_at.call(null,(2),remaining);
var field_info = cljs.core.nth.call(null,vec__278,(0),null);
var dt__$2 = cljs.core.nth.call(null,vec__278,(1),null);
var G__284 = cljs.core.seq.call(null,dt__$2);
var G__285 = dt_SINGLEQUOTE___$1;
var G__286 = cljs.core.update_in.call(null,statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fields","fields",(-1932066230))], null),cljs.core.conj,cljs.core.vec.call(null,field_info));
dt__$1 = G__284;
dt_SINGLEQUOTE_ = G__285;
statics = G__286;
continue;
} else {
if((sym instanceof cljs.core.Symbol)){
var vec__281 = split_on_symbol.call(null,remaining);
var protocol_info = cljs.core.nth.call(null,vec__281,(0),null);
var dt__$2 = cljs.core.nth.call(null,vec__281,(1),null);
var G__287 = cljs.core.seq.call(null,dt__$2);
var G__288 = dt_SINGLEQUOTE___$1;
var G__289 = cljs.core.update_in.call(null,statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocols","protocols",(-5615896))], null),cljs.core.into,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym], null),protocol_info));
dt__$1 = G__287;
dt_SINGLEQUOTE_ = G__288;
statics = G__289;
continue;
} else {
throw (new Error("Malformed static"));

}
}
} else {
var G__290 = null;
var G__291 = dt_SINGLEQUOTE___$1;
var G__292 = statics;
dt__$1 = G__290;
dt_SINGLEQUOTE_ = G__291;
statics = G__292;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"statics","statics",(-1984882809)),statics,new cljs.core.Keyword(null,"dt","dt",(-368444759)),dt_SINGLEQUOTE_], null);
}
break;
}
}); return (
new cljs.core.Var(function(){return om.next$macros.collect_statics;},new cljs.core.Symbol("om.next$macros","collect-statics","om.next$macros/collect-statics",(1835620251),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"collect-statics","collect-statics",(1632247971),null),"om/next.cljc",(22),(1),(24),(24),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null)], null)),null,(cljs.core.truth_(om.next$macros.collect_statics)?om.next$macros.collect_statics.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.validate_statics = (function om$next$macros$validate_statics(dt){
var temp__19834__auto__ = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Ident",null,"IQuery",null,"IQueryParams",null], null), null),cljs.core.map.call(null,(function (p1__5_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,[cljs.core.str(p1__5_SHARP_)].join(''),/\//));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,dt)));
if(cljs.core.truth_(temp__19834__auto__)){
var invalid = temp__19834__auto__;
throw (new Error([cljs.core.str(invalid),cljs.core.str(" protocol declaration must appear with `static`.")].join('')));
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return om.next$macros.validate_statics;},new cljs.core.Symbol("om.next$macros","validate-statics","om.next$macros/validate-statics",(72876864),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"validate-statics","validate-statics",(406395992),null),"om/next.cljc",(24),(1),(49),(49),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null)], null)),null,(cljs.core.truth_(om.next$macros.validate_statics)?om.next$macros.validate_statics.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.lifecycle_sigs = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"initLocalState","initLocalState",(1594027651),null),new cljs.core.Symbol(null,"componentWillMount","componentWillMount",(1355203908),null),new cljs.core.Symbol(null,"componentDidUpdate","componentDidUpdate",(-342946454),null),new cljs.core.Symbol(null,"componentWillUnmount","componentWillUnmount",(-1080646955),null),new cljs.core.Symbol(null,"componentWillReceiveProps","componentWillReceiveProps",(-2094446795),null),new cljs.core.Symbol(null,"shouldComponentUpdate","shouldComponentUpdate",(-858684809),null),new cljs.core.Symbol(null,"render","render",(232498073),null),new cljs.core.Symbol(null,"componentWillUpdate","componentWillUpdate",(-1997044837),null),new cljs.core.Symbol(null,"componentDidMount","componentDidMount",(-1698724833),null)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"prev-props","prev-props",(1081981230),null),new cljs.core.Symbol(null,"prev-state","prev-state",(1365252518),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null),new cljs.core.Symbol(null,"next-state","next-state",(211803275),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null),new cljs.core.Symbol(null,"next-state","next-state",(211803275),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)]); return (
new cljs.core.Var(function(){return om.next$macros.lifecycle_sigs;},new cljs.core.Symbol("om.next$macros","lifecycle-sigs","om.next$macros/lifecycle-sigs",(-1632241246),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"lifecycle-sigs","lifecycle-sigs",(-1701649782),null),"om/next.cljc",(20),(1),(59),(59),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros.lifecycle_sigs)?om.next$macros.lifecycle_sigs.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.validate_sig = (function om$next$macros$validate_sig(p__293){
var vec__297 = p__293;
var name = cljs.core.nth.call(null,vec__297,(0),null);
var sig = cljs.core.nth.call(null,vec__297,(1),null);
var method = vec__297;
var sig_SINGLEQUOTE_ = cljs.core.get.call(null,om.next$macros.lifecycle_sigs,name);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,sig_SINGLEQUOTE_),cljs.core.count.call(null,sig))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid signature for "),cljs.core.str(name),cljs.core.str(" got "),cljs.core.str(sig),cljs.core.str(", need "),cljs.core.str(sig_SINGLEQUOTE_)].join('')),cljs.core.str("\n"),cljs.core.str("(= (count sig') (count sig))")].join('')));
}
}); return (
new cljs.core.Var(function(){return om.next$macros.validate_sig;},new cljs.core.Symbol("om.next$macros","validate-sig","om.next$macros/validate-sig",(969675615),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"validate-sig","validate-sig",(1038972983),null),"om/next.cljc",(19),(1),(70),(70),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"sig","sig",(-279885673),null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"method","method",(1696235119),null)], null)], null)),null,(cljs.core.truth_(om.next$macros.validate_sig)?om.next$macros.validate_sig.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.reshape_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",(976027214)),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentWillUpdate","componentWillUpdate",(-1997044837),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__36__auto__","next-props__36__auto__",(1469724803),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__37__auto__","next-state__37__auto__",(1762952370),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","implements?","cljs.core/implements?",(-251485149),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","Ident","om.next/Ident",(-1165621946),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__38__auto__","ident__38__auto__",(-566253879),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",(-1255218310),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","props","om.next/props",(679329025),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__39__auto__","next-ident__39__auto__",(2135314455),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",(-1255218310),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-next-props","om.next/-next-props",(1700067080),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__36__auto__","next-props__36__auto__",(1469724803),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",(1017572457),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__38__auto__","ident__38__auto__",(-566253879),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__39__auto__","next-ident__39__auto__",(2135314455),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__40__auto__","idxr__40__auto__",(-1392735007),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",(-1307311504),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",(1605739065),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",(994861415))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",(-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",(-556141047),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__40__auto__","idxr__40__auto__",(-1392735007),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",(-2144679919),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexes","indexes",(1496475545))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__40__auto__","idxr__40__auto__",(-1392735007),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__41__auto__","indexes__41__auto__",(1260961861),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",(1488366311),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__41__auto__","indexes__41__auto__",(1260961861),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",(-2120854498),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",(-303587249))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__38__auto__","ident__38__auto__",(-566253879),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","disj","cljs.core/disj",(1679005177),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",(-2120854498),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",(-303587249))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__39__auto__","next-ident__39__auto__",(2135314455),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fnil","cljs.core/fnil",(479587341),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",(-460750931),null)),(function (){var x__23399__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-props!","om.next/merge-pending-props!",(-1035300673),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-state!","om.next/merge-pending-state!",(1487578810),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentDidUpdate","componentDidUpdate",(-342946454),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-props__42__auto__","prev-props__42__auto__",(20707974),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-state__43__auto__","prev-state__43__auto__",(650089084),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","clear-prev-props!","om.next/clear-prev-props!",(1240655595),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"isMounted","isMounted",(-1263254906),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","boolean","cljs.core/boolean",(-1222483266),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","getValueByKeys","goog.object/getValueByKeys",(-1135358948),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_reactInternalInstance"),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_renderedComponent")));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentWillUnmount","componentWillUnmount",(-1080646955),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__44__auto__","r__44__auto__",(230134545),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",(1605739065),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__45__auto__","cfg__45__auto__",(1181078872),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",(994861415))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__44__auto__","r__44__auto__",(230134545),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__46__auto__","st__46__auto__",(-269981436),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"state","state",(-1988618099))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__45__auto__","cfg__45__auto__",(1181078872),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__47__auto__","indexer__47__auto__",(-8481513),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",(-1774914315))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__45__auto__","cfg__45__auto__",(1181078872),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",(100665144),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__46__auto__","st__46__auto__",(-269981436),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",(-1307311504),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__46__auto__","st__46__auto__",(-269981436),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",(-22717146))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",(-2144679919),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__46__auto__","st__46__auto__",(-269981436),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",(-2120854498),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",(-22717146))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",(-432349815),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",(-556141047),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__47__auto__","indexer__47__auto__",(-8481513),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","drop-component!","om.next.protocols/drop-component!",(1227662523),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__47__auto__","indexer__47__auto__",(-8481513),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentWillMount","componentWillMount",(1355203908),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__47__auto__","indexer__47__auto__",(-8481513),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",(-1307311504),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",(1605739065),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",(994861415))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",(-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",(-556141047),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__47__auto__","indexer__47__auto__",(-8481513),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","index-component!","om.next.protocols/index-component!",(-1047911549),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__47__auto__","indexer__47__auto__",(-8481513),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"shouldComponentUpdate","shouldComponentUpdate",(-858684809),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__36__auto__","next-props__36__auto__",(1469724803),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__37__auto__","next-state__37__auto__",(1762952370),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-children__48__auto__","next-children__48__auto__",(-1709192788),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",(1975675962),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__36__auto__","next-props__36__auto__",(1469724803),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-children","om.next/-children",(-16965396),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__36__auto__","next-props__36__auto__",(1469724803),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",(-1684509985),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__36__auto__","next-props__36__auto__",(1469724803),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$value")));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__36__auto__","next-props__36__auto__",(1469724803),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",(-113941356),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__36__auto__","next-props__36__auto__",(1469724803),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",(2044751870),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","OmProps","om.next/OmProps",(-1258962915),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__36__auto__","next-props__36__auto__",(1469724803),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","unwrap","om.next/unwrap",(-621667282),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",(1017572457),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","props","om.next/props",(679329025),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__36__auto__","next-props__36__auto__",(1469724803),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",(-300507420),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-state","-state",(1439972041),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",(1017572457),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",(-1684509985),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",(1975675962),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-state","-state",(1439972041),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state")));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",(-1684509985),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__37__auto__","next-state__37__auto__",(1762952370),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state")));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",(1017572457),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",(-300507420),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__35__auto__","this__35__auto__",(1482013767),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-props","om.next/-props",(1063294959),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-children","om.next/-children",(-16965396),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-children__48__auto__","next-children__48__auto__",(-1709192788),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()))),new cljs.core.Keyword(null,"reshape","reshape",(1588089910)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"render","render",(232498073),null),(function (p__300){
var vec__301 = p__300;
var seq__302 = cljs.core.seq.call(null,vec__301);
var first__303 = cljs.core.first.call(null,seq__302);
var seq__302__$1 = cljs.core.next.call(null,seq__302);
var name = first__303;
var first__303__$1 = cljs.core.first.call(null,seq__302__$1);
var seq__302__$2 = cljs.core.next.call(null,seq__302__$1);
var vec__304 = first__303__$1;
var this$ = cljs.core.nth.call(null,vec__304,(0),null);
var args = vec__304;
var body = seq__302__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__34__auto__","this__34__auto__",(544118536),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__34__auto__","this__34__auto__",(544118536),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",(2050379843),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*reconciler*","om.next/*reconciler*",(2063201960),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",(1605739065),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__34__auto__","this__34__auto__",(544118536),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*depth*","om.next/*depth*",(161261240),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",(-879172610),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","depth","om.next/depth",(-1750843006),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__34__auto__","this__34__auto__",(544118536),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*shared*","om.next/*shared*",(-270307055),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","shared","om.next/shared",(426941171),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__34__auto__","this__34__auto__",(544118536),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*instrument*","om.next/*instrument*",(-1428199886),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","instrument","om.next/instrument",(1410710376),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__34__auto__","this__34__auto__",(544118536),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*parent*","om.next/*parent*",(-764653121),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__34__auto__","this__34__auto__",(544118536),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
}),new cljs.core.Symbol(null,"componentWillReceiveProps","componentWillReceiveProps",(-2094446795),null),(function (p__307){
var vec__308 = p__307;
var seq__309 = cljs.core.seq.call(null,vec__308);
var first__310 = cljs.core.first.call(null,seq__309);
var seq__309__$1 = cljs.core.next.call(null,seq__309);
var name = first__310;
var first__310__$1 = cljs.core.first.call(null,seq__309__$1);
var seq__309__$2 = cljs.core.next.call(null,seq__309__$1);
var vec__311 = first__310__$1;
var this$ = cljs.core.nth.call(null,vec__311,(0),null);
var next_props = cljs.core.nth.call(null,vec__311,(1),null);
var args = vec__311;
var body = seq__309__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__14__auto__","this__14__auto__",(-1439764415),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__15__auto__","next-props__15__auto__",(-455468576),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__14__auto__","this__14__auto__",(-1439764415),null)),(function (){var x__23399__auto__ = next_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-next-props","om.next/-next-props",(1700067080),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__15__auto__","next-props__15__auto__",(-455468576),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__14__auto__","this__14__auto__",(-1439764415),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
}),new cljs.core.Symbol(null,"componentDidUpdate","componentDidUpdate",(-342946454),null),(function (p__314){
var vec__315 = p__314;
var seq__316 = cljs.core.seq.call(null,vec__315);
var first__317 = cljs.core.first.call(null,seq__316);
var seq__316__$1 = cljs.core.next.call(null,seq__316);
var name = first__317;
var first__317__$1 = cljs.core.first.call(null,seq__316__$1);
var seq__316__$2 = cljs.core.next.call(null,seq__316__$1);
var vec__318 = first__317__$1;
var this$ = cljs.core.nth.call(null,vec__318,(0),null);
var prev_props = cljs.core.nth.call(null,vec__318,(1),null);
var prev_state = cljs.core.nth.call(null,vec__318,(2),null);
var args = vec__318;
var body = seq__316__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__24__auto__","this__24__auto__",(1651296799),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-props__25__auto__","prev-props__25__auto__",(-356698215),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-state__26__auto__","prev-state__26__auto__",(-802123355),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__24__auto__","this__24__auto__",(1651296799),null)),(function (){var x__23399__auto__ = prev_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prev-props","om.next/-prev-props",(-1189686117),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-props__25__auto__","prev-props__25__auto__",(-356698215),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__24__auto__","this__24__auto__",(1651296799),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = prev_state;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",(-1684509985),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-state__26__auto__","prev-state__26__auto__",(-802123355),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$previousState")));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),body,(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","clear-prev-props!","om.next/clear-prev-props!",(1240655595),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__24__auto__","this__24__auto__",(1651296799),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
}),new cljs.core.Symbol(null,"componentWillUpdate","componentWillUpdate",(-1997044837),null),(function (p__321){
var vec__322 = p__321;
var seq__323 = cljs.core.seq.call(null,vec__322);
var first__324 = cljs.core.first.call(null,seq__323);
var seq__323__$1 = cljs.core.next.call(null,seq__323);
var name = first__324;
var first__324__$1 = cljs.core.first.call(null,seq__323__$1);
var seq__323__$2 = cljs.core.next.call(null,seq__323__$1);
var vec__325 = first__324__$1;
var this$ = cljs.core.nth.call(null,vec__325,(0),null);
var next_props = cljs.core.nth.call(null,vec__325,(1),null);
var next_state = cljs.core.nth.call(null,vec__325,(2),null);
var args = vec__325;
var body = seq__323__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16__auto__","this__16__auto__",(1067503567),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__17__auto__","next-props__17__auto__",(1174654770),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__18__auto__","next-state__18__auto__",(1707379351),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16__auto__","this__16__auto__",(1067503567),null)),(function (){var x__23399__auto__ = next_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-next-props","om.next/-next-props",(1700067080),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__17__auto__","next-props__17__auto__",(1174654770),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16__auto__","this__16__auto__",(1067503567),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = next_state;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",(-1684509985),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__18__auto__","next-state__18__auto__",(1707379351),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$pendingState")));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",(-1684509985),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__18__auto__","next-state__18__auto__",(1707379351),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state")));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__19__auto__","ret__19__auto__",(463924384),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","implements?","cljs.core/implements?",(-251485149),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","Ident","om.next/Ident",(-1165621946),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16__auto__","this__16__auto__",(1067503567),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__20__auto__","ident__20__auto__",(-1562186624),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",(-1255218310),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16__auto__","this__16__auto__",(1067503567),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","props","om.next/props",(679329025),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16__auto__","this__16__auto__",(1067503567),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__21__auto__","next-ident__21__auto__",(331659347),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",(-1255218310),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16__auto__","this__16__auto__",(1067503567),null)),(function (){var x__23399__auto__ = next_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",(1017572457),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__20__auto__","ident__20__auto__",(-1562186624),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__21__auto__","next-ident__21__auto__",(331659347),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__22__auto__","idxr__22__auto__",(1984858247),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",(-1307311504),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",(1605739065),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16__auto__","this__16__auto__",(1067503567),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",(994861415))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",(-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",(-556141047),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__22__auto__","idxr__22__auto__",(1984858247),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",(-2144679919),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexes","indexes",(1496475545))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__22__auto__","idxr__22__auto__",(1984858247),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__23__auto__","indexes__23__auto__",(-1970337166),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",(1488366311),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__23__auto__","indexes__23__auto__",(-1970337166),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",(-2120854498),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",(-303587249))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__20__auto__","ident__20__auto__",(-1562186624),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","disj","cljs.core/disj",(1679005177),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16__auto__","this__16__auto__",(1067503567),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",(-2120854498),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",(-303587249))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__21__auto__","next-ident__21__auto__",(331659347),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fnil","cljs.core/fnil",(479587341),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",(-460750931),null)),(function (){var x__23399__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16__auto__","this__16__auto__",(1067503567),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-props!","om.next/merge-pending-props!",(-1035300673),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16__auto__","this__16__auto__",(1067503567),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-state!","om.next/merge-pending-state!",(1487578810),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16__auto__","this__16__auto__",(1067503567),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__19__auto__","ret__19__auto__",(463924384),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
}),new cljs.core.Symbol(null,"componentWillUnmount","componentWillUnmount",(-1080646955),null),(function (p__328){
var vec__329 = p__328;
var seq__330 = cljs.core.seq.call(null,vec__329);
var first__331 = cljs.core.first.call(null,seq__330);
var seq__330__$1 = cljs.core.next.call(null,seq__330);
var name = first__331;
var first__331__$1 = cljs.core.first.call(null,seq__330__$1);
var seq__330__$2 = cljs.core.next.call(null,seq__330__$1);
var vec__332 = first__331__$1;
var this$ = cljs.core.nth.call(null,vec__332,(0),null);
var args = vec__332;
var body = seq__330__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__29__auto__","this__29__auto__",(-108370010),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__29__auto__","this__29__auto__",(-108370010),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__30__auto__","r__30__auto__",(-970015425),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",(1605739065),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__29__auto__","this__29__auto__",(-108370010),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__31__auto__","cfg__31__auto__",(1645584762),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",(994861415))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__30__auto__","r__30__auto__",(-970015425),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__32__auto__","st__32__auto__",(1736765107),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"state","state",(-1988618099))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__31__auto__","cfg__31__auto__",(1645584762),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__33__auto__","indexer__33__auto__",(-1681619647),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",(-1774914315))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__31__auto__","cfg__31__auto__",(1645584762),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",(100665144),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__32__auto__","st__32__auto__",(1736765107),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",(-1307311504),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__32__auto__","st__32__auto__",(1736765107),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",(-22717146))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__29__auto__","this__29__auto__",(-108370010),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",(-2144679919),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__32__auto__","st__32__auto__",(1736765107),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",(-2120854498),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",(-22717146))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",(-432349815),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__29__auto__","this__29__auto__",(-108370010),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",(-556141047),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__33__auto__","indexer__33__auto__",(-1681619647),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","drop-component!","om.next.protocols/drop-component!",(1227662523),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__33__auto__","indexer__33__auto__",(-1681619647),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__29__auto__","this__29__auto__",(-108370010),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
}),new cljs.core.Symbol(null,"initLocalState","initLocalState",(1594027651),null),(function (p__335){
var vec__336 = p__335;
var seq__337 = cljs.core.seq.call(null,vec__336);
var first__338 = cljs.core.first.call(null,seq__337);
var seq__337__$1 = cljs.core.next.call(null,seq__337);
var name = first__338;
var first__338__$1 = cljs.core.first.call(null,seq__337__$1);
var seq__337__$2 = cljs.core.next.call(null,seq__337__$1);
var vec__339 = first__338__$1;
var this$ = cljs.core.nth.call(null,vec__339,(0),null);
var args = vec__339;
var body = seq__337__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__13__auto__","ret__13__auto__",(19895322),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","js-obj","cljs.core/js-obj",(1009370607),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__13__auto__","ret__13__auto__",(19895322),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
}),new cljs.core.Symbol(null,"componentWillMount","componentWillMount",(1355203908),null),(function (p__342){
var vec__343 = p__342;
var seq__344 = cljs.core.seq.call(null,vec__343);
var first__345 = cljs.core.first.call(null,seq__344);
var seq__344__$1 = cljs.core.next.call(null,seq__344);
var name = first__345;
var first__345__$1 = cljs.core.first.call(null,seq__344__$1);
var seq__344__$2 = cljs.core.next.call(null,seq__344__$1);
var vec__346 = first__345__$1;
var this$ = cljs.core.nth.call(null,vec__346,(0),null);
var args = vec__346;
var body = seq__344__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__27__auto__","this__27__auto__",(-2081735268),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__27__auto__","this__27__auto__",(-2081735268),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__28__auto__","indexer__28__auto__",(1404759345),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",(-1307311504),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",(1605739065),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__27__auto__","this__27__auto__",(-2081735268),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",(994861415))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",(-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",(-556141047),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__28__auto__","indexer__28__auto__",(1404759345),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","index-component!","om.next.protocols/index-component!",(-1047911549),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__28__auto__","indexer__28__auto__",(1404759345),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__27__auto__","this__27__auto__",(-2081735268),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
})], null)], null); return (
new cljs.core.Var(function(){return om.next$macros.reshape_map;},new cljs.core.Symbol("om.next$macros","reshape-map","om.next$macros/reshape-map",(1978295422),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"reshape-map","reshape-map",(1774919014),null),"om/next.cljc",(17),(1),(109),(109),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros.reshape_map)?om.next$macros.reshape_map.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.reshape = (function om$next$macros$reshape(dt,p__349){
var map__390 = p__349;
var map__390__$1 = ((((!((map__390 == null)))?((((map__390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__390.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__390):map__390);
var defaults = cljs.core.get.call(null,map__390__$1,new cljs.core.Keyword(null,"defaults","defaults",(976027214)));
var reshape = cljs.core.get.call(null,map__390__$1,new cljs.core.Keyword(null,"reshape","reshape",(1588089910)));
var reshape_STAR_ = ((function (map__390,map__390__$1,defaults,reshape){
return (function om$next$macros$reshape_$_reshape_STAR_(x){
if((cljs.core.sequential_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,reshape,cljs.core.first.call(null,x)))){
var reshapef = cljs.core.get.call(null,reshape,cljs.core.first.call(null,x));
om.next$macros.validate_sig.call(null,x);

return reshapef.call(null,x);
} else {
return x;
}
});})(map__390,map__390__$1,defaults,reshape))
;
var add_defaults_step = ((function (map__390,map__390__$1,defaults,reshape){
return (function om$next$macros$reshape_$_add_defaults_step(ret,p__411){
var vec__421 = p__411;
var name = cljs.core.nth.call(null,vec__421,(0),null);
var impl = cljs.core.nth.call(null,vec__421,(1),null);
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([name], true),cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.seq_QMARK_,ret))))){
var vec__424 = cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"Object","Object",(61210754),null),null], null), null)),ret);
var before = cljs.core.nth.call(null,vec__424,(0),null);
var vec__427 = cljs.core.nth.call(null,vec__424,(1),null);
var seq__428 = cljs.core.seq.call(null,vec__427);
var first__429 = cljs.core.first.call(null,seq__428);
var seq__428__$1 = cljs.core.next.call(null,seq__428);
var p = first__429;
var after = seq__428__$1;
return cljs.core.into.call(null,cljs.core.conj.call(null,cljs.core.vec.call(null,before),p,cljs.core.cons.call(null,name,impl)),after);
} else {
return ret;
}
});})(map__390,map__390__$1,defaults,reshape))
;
var add_defaults = ((function (map__390,map__390__$1,defaults,reshape){
return (function om$next$macros$reshape_$_add_defaults(dt__$1){
return cljs.core.reduce.call(null,add_defaults_step,dt__$1,defaults);
});})(map__390,map__390__$1,defaults,reshape))
;
var add_object_protocol = ((function (map__390,map__390__$1,defaults,reshape){
return (function om$next$macros$reshape_$_add_object_protocol(dt__$1){
if(cljs.core.not.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"Object","Object",(61210754),null),null], null), null),dt__$1))){
return cljs.core.conj.call(null,dt__$1,new cljs.core.Symbol(null,"Object","Object",(61210754),null));
} else {
return dt__$1;
}
});})(map__390,map__390__$1,defaults,reshape))
;
return add_defaults.call(null,add_object_protocol.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,reshape_STAR_,dt))));
}); return (
new cljs.core.Var(function(){return om.next$macros.reshape;},new cljs.core.Symbol("om.next$macros","reshape","om.next$macros/reshape",(-1001262235),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"reshape","reshape",(-1066345859),null),"om/next.cljc",(14),(1),(238),(238),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reshape","reshape",(-1066345859),null),new cljs.core.Symbol(null,"defaults","defaults",(-1678408555),null)], null)], null)], null)),null,(cljs.core.truth_(om.next$macros.reshape)?om.next$macros.reshape.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.defui_STAR_ = (function om$next$macros$defui_STAR_(var_args){
var args430 = [];
var len__23656__auto___452 = arguments.length;
var i__23657__auto___453 = (0);
while(true){
if((i__23657__auto___453 < len__23656__auto___452)){
args430.push((arguments[i__23657__auto___453]));

var G__454 = (i__23657__auto___453 + (1));
i__23657__auto___453 = G__454;
continue;
} else {
}
break;
}

var G__432 = args430.length;
switch (G__432) {
case (2):
return om.next$macros.defui_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return om.next$macros.defui_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args430.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next$macros.defui_STAR_;},new cljs.core.Symbol("om.next$macros","defui*","om.next$macros/defui*",(823669338),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"defui*","defui*",(1036454706),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(363),(363),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),null,(cljs.core.truth_(om.next$macros.defui_STAR_)?om.next$macros.defui_STAR_.cljs$lang$test:null)])));})()
;

om.next$macros.defui_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (name,form){
return om.next$macros.defui_STAR_.call(null,name,form,null);
});

om.next$macros.defui_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (name,forms,env){
var field_set_BANG_ = (function om$next$macros$field_set_BANG_(obj,p__440){
var vec__444 = p__440;
var field = cljs.core.nth.call(null,vec__444,(0),null);
var value = cljs.core.nth.call(null,vec__444,(1),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",(250714521),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",(1975675962),null)),(function (){var x__23399__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(field)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
});
var docstring = ((typeof cljs.core.first.call(null,forms) === 'string')?cljs.core.first.call(null,forms):null);
var forms__$1 = (function (){var G__448 = forms;
var G__448__$1 = (cljs.core.truth_(docstring)?cljs.core.rest.call(null,G__448):G__448);
return G__448__$1;
})();
var map__447 = om.next$macros.collect_statics.call(null,forms__$1);
var map__447__$1 = ((((!((map__447 == null)))?((((map__447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__447.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__447):map__447);
var statics = cljs.core.get.call(null,map__447__$1,new cljs.core.Keyword(null,"statics","statics",(-1984882809)));
var dt = cljs.core.get.call(null,map__447__$1,new cljs.core.Keyword(null,"dt","dt",(-368444759)));
var _ = om.next$macros.validate_statics.call(null,dt);
var rname = (cljs.core.truth_(env)?new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",(535295783))),name)):name);
var ctor = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",(-1606493717),null)),(function (){var x__23399__auto__ = cljs.core.with_meta.call(null,name,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@constructor"], null)], null),cljs.core.meta.call(null,name),(cljs.core.truth_(docstring)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),docstring], null):null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","this-as","cljs.core/this-as",(623378171),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58__auto__","this__58__auto__",(23494597),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",(-1176201338),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","React.Component","js/React.Component",(752301916),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58__auto__","this__58__auto__",(23494597),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","js-arguments","cljs.core/js-arguments",(464029257),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",(-1997686824),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-initLocalState",".-initLocalState",(-1875308467),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58__auto__","this__58__auto__",(23494597),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",(250714521),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-state",".-state",(2145135971),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58__auto__","this__58__auto__",(23494597),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".initLocalState",".initLocalState",(-104173886),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58__auto__","this__58__auto__",(23494597),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",(250714521),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-state",".-state",(2145135971),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58__auto__","this__58__auto__",(23494597),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","js-obj","cljs.core/js-obj",(1009370607),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58__auto__","this__58__auto__",(23494597),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
var set_react_proto_BANG_ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",(250714521),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",(-1562038608),null)),(function (){var x__23399__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","clone","goog.object/clone",(-508199474),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","React.Component.prototype","js/React.Component.prototype",(259217051),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
var ctor__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"once","once",(-262568523)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,name)))?cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",(-556141047),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","exists?","cljs.core/exists?",(1852387968),null)),(function (){var x__23399__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = ctor;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = set_react_proto_BANG_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())):cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__23399__auto__ = ctor;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = set_react_proto_BANG_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
var display_name = (cljs.core.truth_(env)?[cljs.core.str(new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",(441598760)).cljs$core$IFn$_invoke$arity$1(env))),cljs.core.str("/"),cljs.core.str(name)].join(''):new cljs.core.Symbol("js","undefined","js/undefined",(-329966622),null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__23399__auto__ = ctor__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",(-585401629),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",(-1562038608),null)),(function (){var x__23399__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),om.next$macros.reshape.call(null,dt,om.next$macros.reshape_map)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",(250714521),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",(-300507420),null)),(function (){var x__23399__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prototype","om.next/-prototype",(951061230),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-constructor","om.next/-constructor",(-675008524),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",(250714521),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",(-300507420),null)),(function (){var x__23399__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prototype","om.next/-prototype",(951061230),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-constructor","om.next/-constructor",(-675008524),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-displayName","om.next/-displayName",(250349469),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = display_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",(250714521),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",(-300507420),null)),(function (){var x__23399__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prototype","om.next/-prototype",(951061230),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-om$isComponent","om.next/-om$isComponent",(-1994912590),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core.map.call(null,((function (docstring,forms__$1,map__447,map__447__$1,statics,dt,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__59_SHARP_){
return field_set_BANG_.call(null,name,p1__59_SHARP_);
});})(docstring,forms__$1,map__447,map__447__$1,statics,dt,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name))
,new cljs.core.Keyword(null,"fields","fields",(-1932066230)).cljs$core$IFn$_invoke$arity$1(statics)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",(-585401629),null)),(function (){var x__23399__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core.mapv.call(null,((function (docstring,forms__$1,map__447,map__447__$1,statics,dt,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__60_SHARP_){
var G__451 = p1__60_SHARP_;
var G__451__$1 = (((p1__60_SHARP_ instanceof cljs.core.Symbol))?cljs.core.vary_meta.call(null,G__451,cljs.core.assoc,new cljs.core.Keyword(null,"static","static",(1214358571)),true):G__451);
return G__451__$1;
});})(docstring,forms__$1,map__447,map__447__$1,statics,dt,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name))
,new cljs.core.Keyword(null,"protocols","protocols",(-5615896)).cljs$core$IFn$_invoke$arity$1(statics))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",(-585401629),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",(1975675962),null)),(function (){var x__23399__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",(-450831903),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),new cljs.core.Keyword(null,"protocols","protocols",(-5615896)).cljs$core$IFn$_invoke$arity$1(statics)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",(250714521),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",(-1029307724),null)),(function (){var x__23399__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",(250714521),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",(-1820706991),null)),(function (){var x__23399__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = [cljs.core.str(rname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",(250714521),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",(255834464),null)),(function (){var x__23399__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__61__auto__","this__61__auto__",(-1438938393),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__62__auto__","writer__62__auto__",(402466855),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__63__auto__","opt__63__auto__",(-962908919),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",(527220517),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__62__auto__","writer__62__auto__",(402466855),null)),(function (){var x__23399__auto__ = [cljs.core.str(rname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
});

om.next$macros.defui_STAR_.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return om.next$macros.defui_STAR_;},new cljs.core.Symbol("om.next$macros","defui*","om.next$macros/defui*",(823669338),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"defui*","defui*",(1036454706),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(363),(363),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),null,(cljs.core.truth_(om.next$macros.defui_STAR_)?om.next$macros.defui_STAR_.cljs$lang$test:null)]));
(function (){
om.next$macros.defui = (function om$next$macros$defui(var_args){
var args__23658__auto__ = [];
var len__23656__auto___460 = arguments.length;
var i__23657__auto___461 = (0);
while(true){
if((i__23657__auto___461 < len__23656__auto___460)){
args__23658__auto__.push((arguments[i__23657__auto___461]));

var G__462 = (i__23657__auto___461 + (1));
i__23657__auto___461 = G__462;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((3) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((3)),(0),null)):null);
return om.next$macros.defui.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return om.next$macros.defui;},new cljs.core.Symbol("om.next$macros","defui","om.next$macros/defui",(-1828790859),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"defui","defui",(-1898044243),null),"om/next.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(418),true,(418),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),null,(cljs.core.truth_(om.next$macros.defui)?om.next$macros.defui.cljs$lang$test:null)])));})()
;

om.next$macros.defui.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,forms){
if(cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",(441598760)).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return om.next$macros.defui_STAR_.call(null,name,forms,_AMPERSAND_env);
} else {
return null;
}
});

om.next$macros.defui.cljs$lang$maxFixedArity = (3);

om.next$macros.defui.cljs$lang$applyTo = (function (seq456){
var G__457 = cljs.core.first.call(null,seq456);
var seq456__$1 = cljs.core.next.call(null,seq456);
var G__458 = cljs.core.first.call(null,seq456__$1);
var seq456__$2 = cljs.core.next.call(null,seq456__$1);
var G__459 = cljs.core.first.call(null,seq456__$2);
var seq456__$3 = cljs.core.next.call(null,seq456__$2);
return om.next$macros.defui.cljs$core$IFn$_invoke$arity$variadic(G__457,G__458,G__459,seq456__$3);
});

new cljs.core.Var(function(){return om.next$macros.defui;},new cljs.core.Symbol("om.next$macros","defui","om.next$macros/defui",(-1828790859),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"defui","defui",(-1898044243),null),"om/next.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(418),true,(418),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),null,(cljs.core.truth_(om.next$macros.defui)?om.next$macros.defui.cljs$lang$test:null)]));

om.next$macros.defui.cljs$lang$macro = true;
(function (){
om.next$macros.ui = (function om$next$macros$ui(var_args){
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

var argseq__23659__auto__ = ((((2) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((2)),(0),null)):null);
return om.next$macros.ui.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return om.next$macros.ui;},new cljs.core.Symbol("om.next$macros","ui","om.next$macros/ui",(1100290770),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"ui","ui",(1170877882),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(423),true,(423),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),null,(cljs.core.truth_(om.next$macros.ui)?om.next$macros.ui.cljs$lang$test:null)])));})()
;

om.next$macros.ui.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"ui_"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",(447897231)),true], null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","defui","om.next/defui",(1665242576),null)),(function (){var x__23399__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
});

om.next$macros.ui.cljs$lang$maxFixedArity = (2);

om.next$macros.ui.cljs$lang$applyTo = (function (seq463){
var G__464 = cljs.core.first.call(null,seq463);
var seq463__$1 = cljs.core.next.call(null,seq463);
var G__465 = cljs.core.first.call(null,seq463__$1);
var seq463__$2 = cljs.core.next.call(null,seq463__$1);
return om.next$macros.ui.cljs$core$IFn$_invoke$arity$variadic(G__464,G__465,seq463__$2);
});

new cljs.core.Var(function(){return om.next$macros.ui;},new cljs.core.Symbol("om.next$macros","ui","om.next$macros/ui",(1100290770),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"ui","ui",(1170877882),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(423),true,(423),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),null,(cljs.core.truth_(om.next$macros.ui)?om.next$macros.ui.cljs$lang$test:null)]));

om.next$macros.ui.cljs$lang$macro = true;
(function (){
om.next$macros.invariant_STAR_ = (function om$next$macros$invariant_STAR_(condition,message,env){
var opts = cljs.analyzer.api.get_options.call(null);
var fn_scope = new cljs.core.Keyword(null,"fn-scope","fn-scope",(-865664859)).cljs$core$IFn$_invoke$arity$1(env);
var fn_name = (function (){var G__470 = fn_scope;
var G__470__$1 = (((G__470 == null))?null:cljs.core.first.call(null,G__470));
var G__470__$2 = (((G__470__$1 == null))?null:new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(G__470__$1));
var G__470__$3 = (((G__470__$2 == null))?null:[cljs.core.str(G__470__$2)].join(''));
return G__470__$3;
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"elide-asserts","elide-asserts",(537063272)).cljs$core$IFn$_invoke$arity$1(opts))){
return null;
} else {
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__64__auto__","l__64__auto__",(-801958849),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*logger*","om.next/*logger*",(-530662591),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",(-556141047),null)),(function (){var x__23399__auto__ = condition;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.log","error","goog.log/error",(-1510663407),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__64__auto__","l__64__auto__",(-801958849),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invariant Violation"),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",(-556141047),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),(function (){var x__23399__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," (in function: `"),(function (){var x__23399__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"`)")));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,": "),(function (){var x__23399__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
}
}); return (
new cljs.core.Var(function(){return om.next$macros.invariant_STAR_;},new cljs.core.Symbol("om.next$macros","invariant*","om.next$macros/invariant*",(1926791678),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"invariant*","invariant*",(1996076758),null),"om/next.cljc",(17),(1),(429),(429),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.Symbol(null,"message","message",(1234475525),null),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),null,(cljs.core.truth_(om.next$macros.invariant_STAR_)?om.next$macros.invariant_STAR_.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.invariant = (function om$next$macros$invariant(_AMPERSAND_form,_AMPERSAND_env,condition,message){
if(cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",(441598760)).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return om.next$macros.invariant_STAR_.call(null,condition,message,_AMPERSAND_env);
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return om.next$macros.invariant;},new cljs.core.Symbol("om.next$macros","invariant","om.next$macros/invariant",(17664739),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"invariant","invariant",(-17914981),null),"om/next.cljc",(20),(1),(443),true,(443),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.Symbol(null,"message","message",(1234475525),null)], null)),null,(cljs.core.truth_(om.next$macros.invariant)?om.next$macros.invariant.cljs$lang$test:null)])));})()
;

om.next$macros.invariant.cljs$lang$macro = true;
if(typeof om.next$macros._STAR_logger_STAR_ !== 'undefined'){
} else {
(function (){
om.next$macros._STAR_logger_STAR_ = ((goog.DEBUG)?(function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("om.next");
})()
:null); return (
new cljs.core.Var(function(){return om.next$macros._STAR_logger_STAR_;},new cljs.core.Symbol("om.next$macros","*logger*","om.next$macros/*logger*",(397537956),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"*logger*","*logger*",(334424668),null),"om/next.cljc",(21),(4),(519),(519),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros._STAR_logger_STAR_)?om.next$macros._STAR_logger_STAR_.cljs$lang$test:null)])));})()
;
}
(function (){
om.next$macros.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY); return (
new cljs.core.Var(function(){return om.next$macros.roots;},new cljs.core.Symbol("om.next$macros","roots","om.next$macros/roots",(1019332173),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"roots","roots",(551612277),null),"om/next.cljc",(21),(1),(527),(527),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros.roots)?om.next$macros.roots.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros._STAR_raf_STAR_ = null; return (
new cljs.core.Var(function(){return om.next$macros._STAR_raf_STAR_;},new cljs.core.Symbol("om.next$macros","*raf*","om.next$macros/*raf*",(1572424284),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"*raf*","*raf*",(-1579637324),null),"om/next.cljc",(28),(1),true,(528),(528),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros._STAR_raf_STAR_)?om.next$macros._STAR_raf_STAR_.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros._STAR_reconciler_STAR_ = null; return (
new cljs.core.Var(function(){return om.next$macros._STAR_reconciler_STAR_;},new cljs.core.Symbol("om.next$macros","*reconciler*","om.next$macros/*reconciler*",(91111063),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"*reconciler*","*reconciler*",(155789231),null),"om/next.cljc",(49),(1),true,(529),(529),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros._STAR_reconciler_STAR_)?om.next$macros._STAR_reconciler_STAR_.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros._STAR_parent_STAR_ = null; return (
new cljs.core.Var(function(){return om.next$macros._STAR_parent_STAR_;},new cljs.core.Symbol("om.next$macros","*parent*","om.next$macros/*parent*",(1677527384),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"*parent*","*parent*",(2140937904),null),"om/next.cljc",(45),(1),true,(530),(530),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros._STAR_parent_STAR_)?om.next$macros._STAR_parent_STAR_.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros._STAR_shared_STAR_ = null; return (
new cljs.core.Var(function(){return om.next$macros._STAR_shared_STAR_;},new cljs.core.Symbol("om.next$macros","*shared*","om.next$macros/*shared*",(-1080903414),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"*shared*","*shared*",(-1133277678),null),"om/next.cljc",(45),(1),true,(531),(531),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros._STAR_shared_STAR_)?om.next$macros._STAR_shared_STAR_.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros._STAR_instrument_STAR_ = null; return (
new cljs.core.Var(function(){return om.next$macros._STAR_instrument_STAR_;},new cljs.core.Symbol("om.next$macros","*instrument*","om.next$macros/*instrument*",(-112673239),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"*instrument*","*instrument*",(-38807759),null),"om/next.cljc",(49),(1),true,(532),(532),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros._STAR_instrument_STAR_)?om.next$macros._STAR_instrument_STAR_.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros._STAR_depth_STAR_ = (0); return (
new cljs.core.Var(function(){return om.next$macros._STAR_depth_STAR_;},new cljs.core.Symbol("om.next$macros","*depth*","om.next$macros/*depth*",(1493954141),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"*depth*","*depth*",(1563105205),null),"om/next.cljc",(44),(1),true,(533),(533),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros._STAR_depth_STAR_)?om.next$macros._STAR_depth_STAR_.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.nil_or_map_QMARK_ = (function om$next$macros$nil_or_map_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_.call(null,x));
}); return (
new cljs.core.Var(function(){return om.next$macros.nil_or_map_QMARK_;},new cljs.core.Symbol("om.next$macros","nil-or-map?","om.next$macros/nil-or-map?",(878405971),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"nil-or-map?","nil-or-map?",(808981051),null),"om/next.cljc",(18),(1),(538),(538),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,((om.next$macros.nil_or_map_QMARK_)?om.next$macros.nil_or_map_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Given a query expression return its key.
 */
(function (){
om.next$macros.expr__GT_key = (function om$next$macros$expr__GT_key(expr){
if((expr instanceof cljs.core.Keyword)){
return expr;
} else {
if(cljs.core.map_QMARK_.call(null,expr)){
return cljs.core.ffirst.call(null,expr);
} else {
if(cljs.core.seq_QMARK_.call(null,expr)){
var expr_SINGLEQUOTE_ = cljs.core.first.call(null,expr);
if(cljs.core.map_QMARK_.call(null,expr_SINGLEQUOTE_)){
return cljs.core.ffirst.call(null,expr_SINGLEQUOTE_);
} else {
return null;
}
} else {
if(om.util.ident_QMARK_.call(null,expr)){
var G__472 = expr;
var G__472__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",(-1201019570),null),cljs.core.second.call(null,expr)))?cljs.core.first.call(null,G__472):G__472);
return G__472__$1;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid query expr "),cljs.core.str(expr)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",(-881565136))], null));

}
}
}
}
}); return (
new cljs.core.Var(function(){return om.next$macros.expr__GT_key;},new cljs.core.Symbol("om.next$macros","expr->key","om.next$macros/expr->key",(623497806),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"expr->key","expr->key",(566832038),null),"om/next.cljc",(17),(1),(543),(543),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null)),"Given a query expression return its key.",(cljs.core.truth_(om.next$macros.expr__GT_key)?om.next$macros.expr__GT_key.cljs$lang$test:null)])));})()
;
/**
 * Return a zipper on a query expression.
 */
(function (){
om.next$macros.query_zip = (function om$next$macros$query_zip(root){
return clojure.zip.zipper.call(null,(function (p1__65_SHARP_){
return (cljs.core.vector_QMARK_.call(null,p1__65_SHARP_)) || (cljs.core.map_QMARK_.call(null,p1__65_SHARP_)) || (cljs.core.seq_QMARK_.call(null,p1__65_SHARP_));
}),cljs.core.seq,(function (node,children){
var ret = ((cljs.core.vector_QMARK_.call(null,node))?cljs.core.vec.call(null,children):((cljs.core.map_QMARK_.call(null,node))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_.call(null,node))?children:null)));
return cljs.core.with_meta.call(null,ret,cljs.core.meta.call(null,node));
}),root);
}); return (
new cljs.core.Var(function(){return om.next$macros.query_zip;},new cljs.core.Symbol("om.next$macros","query-zip","om.next$macros/query-zip",(848178201),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"query-zip","query-zip",(829248881),null),"om/next.cljc",(17),(1),(558),(558),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root","root",(1191874074),null)], null)),"Return a zipper on a query expression.",(cljs.core.truth_(om.next$macros.query_zip)?om.next$macros.query_zip.cljs$lang$test:null)])));})()
;
/**
 * Move from the current zipper location to the specified key. loc must be a
 * hash map node.
 */
(function (){
om.next$macros.move_to_key = (function om$next$macros$move_to_key(loc,k){
var loc__$1 = clojure.zip.down.call(null,loc);
while(true){
var node = clojure.zip.node.call(null,loc__$1);
if(cljs.core._EQ_.call(null,k,cljs.core.first.call(null,node))){
return clojure.zip.right.call(null,clojure.zip.down.call(null,loc__$1));
} else {
var G__473 = clojure.zip.right.call(null,loc__$1);
loc__$1 = G__473;
continue;
}
break;
}
}); return (
new cljs.core.Var(function(){return om.next$macros.move_to_key;},new cljs.core.Symbol("om.next$macros","move-to-key","om.next$macros/move-to-key",(-1634887719),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"move-to-key","move-to-key",(-1699967263),null),"om/next.cljc",(19),(1),(572),(572),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"loc","loc",(1056246626),null),new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),"Move from the current zipper location to the specified key. loc must be a\n   hash map node.",(cljs.core.truth_(om.next$macros.move_to_key)?om.next$macros.move_to_key.cljs$lang$test:null)])));})()
;
/**
 * Given a query and a path into a query return a zipper focused at the location
 * specified by the path. This location can be replaced to customize / alter
 * the query.
 */
(function (){
om.next$macros.query_template = (function om$next$macros$query_template(query,path){
var query_template_STAR_ = (function om$next$macros$query_template_$_query_template_STAR_(loc,path__$1){
while(true){
if(cljs.core.empty_QMARK_.call(null,path__$1)){
return loc;
} else {
var node = clojure.zip.node.call(null,loc);
if(cljs.core.vector_QMARK_.call(null,node)){
var G__506 = clojure.zip.down.call(null,loc);
var G__507 = path__$1;
loc = G__506;
path__$1 = G__507;
continue;
} else {
var vec__502 = path__$1;
var seq__503 = cljs.core.seq.call(null,vec__502);
var first__504 = cljs.core.first.call(null,seq__503);
var seq__503__$1 = cljs.core.next.call(null,seq__503);
var k = first__504;
var ks = seq__503__$1;
var k_SINGLEQUOTE_ = om.next$macros.expr__GT_key.call(null,node);
if(cljs.core._EQ_.call(null,k,k_SINGLEQUOTE_)){
if((cljs.core.map_QMARK_.call(null,node)) || ((cljs.core.seq_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,node))))){
var loc_SINGLEQUOTE_ = om.next$macros.move_to_key.call(null,(function (){var G__505 = loc;
var G__505__$1 = ((cljs.core.seq_QMARK_.call(null,node))?clojure.zip.down.call(null,G__505):G__505);
return G__505__$1;
})(),k);
var node_SINGLEQUOTE_ = clojure.zip.node.call(null,loc_SINGLEQUOTE_);
if(cljs.core.map_QMARK_.call(null,node_SINGLEQUOTE_)){
if(cljs.core.seq.call(null,ks)){
var G__508 = clojure.zip.replace.call(null,loc_SINGLEQUOTE_,clojure.zip.node.call(null,om.next$macros.move_to_key.call(null,loc_SINGLEQUOTE_,cljs.core.first.call(null,ks))));
var G__509 = cljs.core.next.call(null,ks);
loc = G__508;
path__$1 = G__509;
continue;
} else {
return loc_SINGLEQUOTE_;
}
} else {
var G__510 = loc_SINGLEQUOTE_;
var G__511 = ks;
loc = G__510;
path__$1 = G__511;
continue;
}
} else {
var G__512 = clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,loc))));
var G__513 = ks;
loc = G__512;
path__$1 = G__513;
continue;
}
} else {
var G__514 = clojure.zip.right.call(null,loc);
var G__515 = path__$1;
loc = G__514;
path__$1 = G__515;
continue;
}
}
}
break;
}
});
return query_template_STAR_.call(null,om.next$macros.query_zip.call(null,query),path);
}); return (
new cljs.core.Var(function(){return om.next$macros.query_template;},new cljs.core.Symbol("om.next$macros","query-template","om.next$macros/query-template",(-849583831),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"query-template","query-template",(-918587903),null),"om/next.cljc",(22),(1),(582),(582),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"path","path",(1452340359),null)], null)),"Given a query and a path into a query return a zipper focused at the location\n   specified by the path. This location can be replaced to customize / alter\n   the query.",(cljs.core.truth_(om.next$macros.query_template)?om.next$macros.query_template.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.replace = (function om$next$macros$replace(template,new_query){
return clojure.zip.root.call(null,clojure.zip.replace.call(null,template,new_query));
}); return (
new cljs.core.Var(function(){return om.next$macros.replace;},new cljs.core.Symbol("om.next$macros","replace","om.next$macros/replace",(235352613),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"replace","replace",(853943757),null),"om/next.cljc",(15),(1),(612),(612),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",(938125843),null),new cljs.core.Symbol(null,"new-query","new-query",(-438810452),null)], null)),null,(cljs.core.truth_(om.next$macros.replace)?om.next$macros.replace.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.focus_query_STAR_; return (
new cljs.core.Var(function(){return om.next$macros.focus_query_STAR_;},new cljs.core.Symbol("om.next$macros","focus-query*","om.next$macros/focus-query*",(219164637),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"focus-query*","focus-query*",(825444149),null),"om/next.cljc",(22),(1),(615),true,(615),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros.focus_query_STAR_)?om.next$macros.focus_query_STAR_.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.focused_join = (function om$next$macros$focused_join(expr,ks,full_expr,union_expr){
var expr_meta = cljs.core.meta.call(null,expr);
var expr_SINGLEQUOTE_ = ((cljs.core.map_QMARK_.call(null,expr))?(function (){var join_value = cljs.core.second.call(null,cljs.core.first.call(null,expr));
var join_value__$1 = (((om.util.recursion_QMARK_.call(null,join_value)) && (cljs.core.seq.call(null,ks)))?((!((union_expr == null)))?union_expr:full_expr):join_value);
return cljs.core.PersistentArrayMap.fromArray([cljs.core.ffirst.call(null,expr),om.next$macros.focus_query_STAR_.call(null,join_value__$1,ks,null)], true, false);
})():((cljs.core.seq_QMARK_.call(null,expr))?(function (){var x__23399__auto__ = om.next$macros.focused_join.call(null,cljs.core.first.call(null,expr),ks,null,null);
return cljs.core._conj.call(null,(function (){var x__23399__auto____$1 = cljs.core.second.call(null,expr);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto____$1);
})(),x__23399__auto__);
})():expr
));
var G__517 = expr_SINGLEQUOTE_;
var G__517__$1 = ((cljs.core.some_QMARK_.call(null,expr_meta))?cljs.core.with_meta.call(null,G__517,expr_meta):G__517);
return G__517__$1;
}); return (
new cljs.core.Var(function(){return om.next$macros.focused_join;},new cljs.core.Symbol("om.next$macros","focused-join","om.next$macros/focused-join",(192441557),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"focused-join","focused-join",(387545037),null),"om/next.cljc",(20),(1),(617),(617),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"ks","ks",(-754231827),null),new cljs.core.Symbol(null,"full-expr","full-expr",(1757972123),null),new cljs.core.Symbol(null,"union-expr","union-expr",(-2017401102),null)], null)),null,(cljs.core.truth_(om.next$macros.focused_join)?om.next$macros.focused_join.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.focus_query_STAR_ = (function om$next$macros$focus_query_STAR_(query,path,union_expr){
if(cljs.core.empty_QMARK_.call(null,path)){
return query;
} else {
var vec__521 = path;
var seq__522 = cljs.core.seq.call(null,vec__521);
var first__523 = cljs.core.first.call(null,seq__522);
var seq__522__$1 = cljs.core.next.call(null,seq__522);
var k = first__523;
var ks = seq__522__$1;
var match = ((function (vec__521,seq__522,first__523,seq__522__$1,k,ks){
return (function om$next$macros$focus_query_STAR__$_match(x){
return cljs.core._EQ_.call(null,k,om.util.join_key.call(null,x));
});})(vec__521,seq__522,first__523,seq__522__$1,k,ks))
;
var value = ((function (vec__521,seq__522,first__523,seq__522__$1,k,ks){
return (function om$next$macros$focus_query_STAR__$_value(x){
return om.next$macros.focused_join.call(null,x,ks,query,union_expr);
});})(vec__521,seq__522,first__523,seq__522__$1,k,ks))
;
if(cljs.core.map_QMARK_.call(null,query)){
return cljs.core.PersistentArrayMap.fromArray([k,om.next$macros.focus_query_STAR_.call(null,cljs.core.get.call(null,query,k),ks,query)], true, false);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,match),cljs.core.map.call(null,value),cljs.core.take.call(null,(1))),query);
}
}
}); return (
new cljs.core.Var(function(){return om.next$macros.focus_query_STAR_;},new cljs.core.Symbol("om.next$macros","focus-query*","om.next$macros/focus-query*",(219164637),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"focus-query*","focus-query*",(825444149),null),"om/next.cljc",(20),(1),(635),(635),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),new cljs.core.Symbol(null,"union-expr","union-expr",(-2017401102),null)], null)),null,(cljs.core.truth_(om.next$macros.focus_query_STAR_)?om.next$macros.focus_query_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Given a query, focus it along the specified path.
 * 
 *   Examples:
 *  (om.next/focus-query [:foo :bar :baz] [:foo])
 *  => [:foo]
 * 
 *  (om.next/focus-query [{:foo [:bar :baz]} :woz] [:foo :bar])
 *  => [{:foo [:bar]}]
 */
(function (){
om.next$macros.focus_query = (function om$next$macros$focus_query(query,path){
return om.next$macros.focus_query_STAR_.call(null,query,path,null);
}); return (
new cljs.core.Var(function(){return om.next$macros.focus_query;},new cljs.core.Symbol("om.next$macros","focus-query","om.next$macros/focus-query",(1254867063),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"focus-query","focus-query",(917821711),null),"om/next.cljc",(18),(1),(648),(648),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"path","path",(1452340359),null)], null)),"Given a query, focus it along the specified path.\n\n  Examples:\n    (om.next/focus-query [:foo :bar :baz] [:foo])\n    => [:foo]\n\n    (om.next/focus-query [{:foo [:bar :baz]} :woz] [:foo :bar])\n    => [{:foo [:bar]}]",(cljs.core.truth_(om.next$macros.focus_query)?om.next$macros.focus_query.cljs$lang$test:null)])));})()
;
/**
 * Given a focused query return the path represented by the query.
 * 
 * Examples:
 * 
 *   (om.next/focus->path [{:foo [{:bar {:baz []}]}])
 *   => [:foo :bar :baz]
 */
(function (){
om.next$macros.focus__GT_path = (function om$next$macros$focus__GT_path(var_args){
var args524 = [];
var len__23656__auto___530 = arguments.length;
var i__23657__auto___531 = (0);
while(true){
if((i__23657__auto___531 < len__23656__auto___530)){
args524.push((arguments[i__23657__auto___531]));

var G__532 = (i__23657__auto___531 + (1));
i__23657__auto___531 = G__532;
continue;
} else {
}
break;
}

var G__526 = args524.length;
switch (G__526) {
case (1):
return om.next$macros.focus__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return om.next$macros.focus__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return om.next$macros.focus__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args524.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next$macros.focus__GT_path;},new cljs.core.Symbol("om.next$macros","focus->path","om.next$macros/focus->path",(725241787),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"focus->path","focus->path",(668690067),null),"om/next.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null),new cljs.core.Symbol(null,"bound","bound",(-2066818599),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null),new cljs.core.Symbol(null,"bound","bound",(-2066818599),null),new cljs.core.Symbol(null,"path","path",(1452340359),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null),new cljs.core.Symbol(null,"bound","bound",(-2066818599),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null),new cljs.core.Symbol(null,"bound","bound",(-2066818599),null),new cljs.core.Symbol(null,"path","path",(1452340359),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(662),(662),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null),new cljs.core.Symbol(null,"bound","bound",(-2066818599),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null),new cljs.core.Symbol(null,"bound","bound",(-2066818599),null),new cljs.core.Symbol(null,"path","path",(1452340359),null)], null)),"Given a focused query return the path represented by the query.\n\n   Examples:\n\n     (om.next/focus->path [{:foo [{:bar {:baz []}]}])\n     => [:foo :bar :baz]",(cljs.core.truth_(om.next$macros.focus__GT_path)?om.next$macros.focus__GT_path.cljs$lang$test:null)])));})()
;

om.next$macros.focus__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (focus){
return om.next$macros.focus__GT_path.call(null,focus,new cljs.core.Symbol(null,"*","*",(345799209),null),cljs.core.PersistentVector.EMPTY);
});

om.next$macros.focus__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (focus,bound){
return om.next$macros.focus__GT_path.call(null,focus,bound,cljs.core.PersistentVector.EMPTY);
});

om.next$macros.focus__GT_path.cljs$core$IFn$_invoke$arity$3 = (function (focus,bound,path){
while(true){
if(cljs.core.truth_((function (){var and__20770__auto__ = (cljs.core._EQ_.call(null,bound,new cljs.core.Symbol(null,"*","*",(345799209),null))) || ((cljs.core.not_EQ_.call(null,path,bound)) && ((cljs.core.count.call(null,path) < cljs.core.count.call(null,bound))));
if(and__20770__auto__){
var and__20770__auto____$1 = cljs.core.some.call(null,om.util.join_QMARK_,focus);
if(cljs.core.truth_(and__20770__auto____$1)){
return ((1) === cljs.core.count.call(null,focus));
} else {
return and__20770__auto____$1;
}
} else {
return and__20770__auto__;
}
})())){
var vec__527 = om.util.join_entry.call(null,cljs.core.first.call(null,focus));
var k = cljs.core.nth.call(null,vec__527,(0),null);
var focus_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__527,(1),null);
var focus_SINGLEQUOTE___$1 = ((om.util.recursion_QMARK_.call(null,focus_SINGLEQUOTE_))?focus:focus_SINGLEQUOTE_);
var G__534 = focus_SINGLEQUOTE___$1;
var G__535 = bound;
var G__536 = cljs.core.conj.call(null,path,k);
focus = G__534;
bound = G__535;
path = G__536;
continue;
} else {
return path;
}
break;
}
});

om.next$macros.focus__GT_path.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return om.next$macros.focus__GT_path;},new cljs.core.Symbol("om.next$macros","focus->path","om.next$macros/focus->path",(725241787),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"focus->path","focus->path",(668690067),null),"om/next.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null),new cljs.core.Symbol(null,"bound","bound",(-2066818599),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null),new cljs.core.Symbol(null,"bound","bound",(-2066818599),null),new cljs.core.Symbol(null,"path","path",(1452340359),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null),new cljs.core.Symbol(null,"bound","bound",(-2066818599),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null),new cljs.core.Symbol(null,"bound","bound",(-2066818599),null),new cljs.core.Symbol(null,"path","path",(1452340359),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(662),(662),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null),new cljs.core.Symbol(null,"bound","bound",(-2066818599),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null),new cljs.core.Symbol(null,"bound","bound",(-2066818599),null),new cljs.core.Symbol(null,"path","path",(1452340359),null)], null)),"Given a focused query return the path represented by the query.\n\n   Examples:\n\n     (om.next/focus->path [{:foo [{:bar {:baz []}]}])\n     => [:foo :bar :baz]",(cljs.core.truth_(om.next$macros.focus__GT_path)?om.next$macros.focus__GT_path.cljs$lang$test:null)]));

/**
 * @interface
 */
(function (){
om.next$macros.Ident = function(){}; return (
new cljs.core.Var(function(){return om.next$macros.Ident;},new cljs.core.Symbol("om.next$macros","Ident","om.next$macros/Ident",(1765241531),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"Ident","Ident",(1695963715),null),"om/next.cljc",(19),(1),(689),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"ident","ident",(1639789181),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Return the ident for this component"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"props","props",(2093813254),null)], null)], null)], true, false)], null),(689),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(om.next$macros.Ident)?om.next$macros.Ident.cljs$lang$test:null)])));})()
;

/**
 * Return the ident for this component
 */
(function (){
om.next$macros.ident = (function om$next$macros$ident(this$,props){
if((!((this$ == null))) && (!((this$.om$next$macros$Ident$ident$arity$2 == null)))){
return this$.om$next$macros$Ident$ident$arity$2(this$,props);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (om.next$macros.ident[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$,props);
} else {
var m__23055__auto____$1 = (om.next$macros.ident["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$,props);
} else {
throw cljs.core.missing_protocol.call(null,"Ident.ident",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return om.next$macros.ident;},new cljs.core.Symbol("om.next$macros","ident","om.next$macros/ident",(1708927845),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("om.next$macros","Ident","om.next$macros/Ident",(1765241531),null),new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"ident","ident",(1639789181),null),"om/next.cljc",(9),(1),(689),(690),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"props","props",(2093813254),null)], null)),"Return the ident for this component",(cljs.core.truth_(om.next$macros.ident)?om.next$macros.ident.cljs$lang$test:null)])));})()
;


/**
 * @interface
 */
(function (){
om.next$macros.IQueryParams = function(){}; return (
new cljs.core.Var(function(){return om.next$macros.IQueryParams;},new cljs.core.Symbol("om.next$macros","IQueryParams","om.next$macros/IQueryParams",(-988380356),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"IQueryParams","IQueryParams",(-651060716),null),"om/next.cljc",(26),(1),(692),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Return the query parameters"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null)], true, false)], null),(692),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(om.next$macros.IQueryParams)?om.next$macros.IQueryParams.cljs$lang$test:null)])));})()
;

/**
 * Return the query parameters
 */
(function (){
om.next$macros.params = (function om$next$macros$params(this$){
if((!((this$ == null))) && (!((this$.om$next$macros$IQueryParams$params$arity$1 == null)))){
return this$.om$next$macros$IQueryParams$params$arity$1(this$);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (om.next$macros.params[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$);
} else {
var m__23055__auto____$1 = (om.next$macros.params["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQueryParams.params",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return om.next$macros.params;},new cljs.core.Symbol("om.next$macros","params","om.next$macros/params",(-2008851078),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("om.next$macros","IQueryParams","om.next$macros/IQueryParams",(-988380356),null),new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null),"om/next.cljc",(10),(1),(692),(693),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Return the query parameters",(cljs.core.truth_(om.next$macros.params)?om.next$macros.params.cljs$lang$test:null)])));})()
;

(om.next$macros.IQueryParams["_"] = true);

(om.next$macros.params["_"] = (function (_){
return null;
}));

/**
 * @interface
 */
(function (){
om.next$macros.IQuery = function(){}; return (
new cljs.core.Var(function(){return om.next$macros.IQuery;},new cljs.core.Symbol("om.next$macros","IQuery","om.next$macros/IQuery",(-2083089496),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"IQuery","IQuery",(-2026788688),null),"om/next.cljc",(20),(1),(704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Return the component's unbound query"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null)], true, false)], null),(704),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(om.next$macros.IQuery)?om.next$macros.IQuery.cljs$lang$test:null)])));})()
;

/**
 * Return the component's unbound query
 */
(function (){
om.next$macros.query = (function om$next$macros$query(this$){
if((!((this$ == null))) && (!((this$.om$next$macros$IQuery$query$arity$1 == null)))){
return this$.om$next$macros$IQuery$query$arity$1(this$);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (om.next$macros.query[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$);
} else {
var m__23055__auto____$1 = (om.next$macros.query["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQuery.query",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return om.next$macros.query;},new cljs.core.Symbol("om.next$macros","query","om.next$macros/query",(421042553),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("om.next$macros","IQuery","om.next$macros/IQuery",(-2083089496),null),new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"query","query",(352022017),null),"om/next.cljc",(9),(1),(704),(705),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Return the component's unbound query",(cljs.core.truth_(om.next$macros.query)?om.next$macros.query.cljs$lang$test:null)])));})()
;


/**
 * @interface
 */
(function (){
om.next$macros.ILocalState = function(){}; return (
new cljs.core.Var(function(){return om.next$macros.ILocalState;},new cljs.core.Symbol("om.next$macros","ILocalState","om.next$macros/ILocalState",(-1392238937),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"ILocalState","ILocalState",(-1322960961),null),"om/next.cljc",(25),(1),(707),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"-set-state!","-set-state!",(-1928389047),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Set the component's local state"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"-get-state","-get-state",(-431117095),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Get the component's local state"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"-get-rendered-state","-get-rendered-state",(-842928263),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Get the component's rendered local state"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"-merge-pending-state!","-merge-pending-state!",(1478484527),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Get the component's pending local state"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null)], true, false)], null),(707),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(om.next$macros.ILocalState)?om.next$macros.ILocalState.cljs$lang$test:null)])));})()
;

/**
 * Set the component's local state
 */
(function (){
om.next$macros._set_state_BANG_ = (function om$next$macros$_set_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.om$next$macros$ILocalState$_set_state_BANG_$arity$2 == null)))){
return this$.om$next$macros$ILocalState$_set_state_BANG_$arity$2(this$,new_state);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (om.next$macros._set_state_BANG_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$,new_state);
} else {
var m__23055__auto____$1 = (om.next$macros._set_state_BANG_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$,new_state);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-set-state!",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return om.next$macros._set_state_BANG_;},new cljs.core.Symbol("om.next$macros","-set-state!","om.next$macros/-set-state!",(-1993472159),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("om.next$macros","ILocalState","om.next$macros/ILocalState",(-1392238937),null),new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"-set-state!","-set-state!",(-1928389047),null),"om/next.cljc",(15),(1),(707),(708),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null)], null)),"Set the component's local state",(cljs.core.truth_(om.next$macros._set_state_BANG_)?om.next$macros._set_state_BANG_.cljs$lang$test:null)])));})()
;

/**
 * Get the component's local state
 */
(function (){
om.next$macros._get_state = (function om$next$macros$_get_state(this$){
if((!((this$ == null))) && (!((this$.om$next$macros$ILocalState$_get_state$arity$1 == null)))){
return this$.om$next$macros$ILocalState$_get_state$arity$1(this$);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (om.next$macros._get_state[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$);
} else {
var m__23055__auto____$1 = (om.next$macros._get_state["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-state",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return om.next$macros._get_state;},new cljs.core.Symbol("om.next$macros","-get-state","om.next$macros/-get-state",(-496839391),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("om.next$macros","ILocalState","om.next$macros/ILocalState",(-1392238937),null),new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"-get-state","-get-state",(-431117095),null),"om/next.cljc",(14),(1),(707),(709),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Get the component's local state",(cljs.core.truth_(om.next$macros._get_state)?om.next$macros._get_state.cljs$lang$test:null)])));})()
;

/**
 * Get the component's rendered local state
 */
(function (){
om.next$macros._get_rendered_state = (function om$next$macros$_get_rendered_state(this$){
if((!((this$ == null))) && (!((this$.om$next$macros$ILocalState$_get_rendered_state$arity$1 == null)))){
return this$.om$next$macros$ILocalState$_get_rendered_state$arity$1(this$);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (om.next$macros._get_rendered_state[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$);
} else {
var m__23055__auto____$1 = (om.next$macros._get_rendered_state["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-rendered-state",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return om.next$macros._get_rendered_state;},new cljs.core.Symbol("om.next$macros","-get-rendered-state","om.next$macros/-get-rendered-state",(-907114911),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("om.next$macros","ILocalState","om.next$macros/ILocalState",(-1392238937),null),new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"-get-rendered-state","-get-rendered-state",(-842928263),null),"om/next.cljc",(23),(1),(707),(710),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Get the component's rendered local state",(cljs.core.truth_(om.next$macros._get_rendered_state)?om.next$macros._get_rendered_state.cljs$lang$test:null)])));})()
;

/**
 * Get the component's pending local state
 */
(function (){
om.next$macros._merge_pending_state_BANG_ = (function om$next$macros$_merge_pending_state_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$next$macros$ILocalState$_merge_pending_state_BANG_$arity$1 == null)))){
return this$.om$next$macros$ILocalState$_merge_pending_state_BANG_$arity$1(this$);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (om.next$macros._merge_pending_state_BANG_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$);
} else {
var m__23055__auto____$1 = (om.next$macros._merge_pending_state_BANG_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-merge-pending-state!",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return om.next$macros._merge_pending_state_BANG_;},new cljs.core.Symbol("om.next$macros","-merge-pending-state!","om.next$macros/-merge-pending-state!",(1144977687),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("om.next$macros","ILocalState","om.next$macros/ILocalState",(-1392238937),null),new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"-merge-pending-state!","-merge-pending-state!",(1478484527),null),"om/next.cljc",(25),(1),(707),(711),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Get the component's pending local state",(cljs.core.truth_(om.next$macros._merge_pending_state_BANG_)?om.next$macros._merge_pending_state_BANG_.cljs$lang$test:null)])));})()
;

(function (){
om.next$macros.var_QMARK_ = (function om$next$macros$var_QMARK_(x){
var and__20770__auto__ = (x instanceof cljs.core.Symbol);
if(and__20770__auto__){
return goog.string.startsWith([cljs.core.str(x)].join(''),"?");
} else {
return and__20770__auto__;
}
}); return (
new cljs.core.Var(function(){return om.next$macros.var_QMARK_;},new cljs.core.Symbol("om.next$macros","var?","om.next$macros/var?",(160655315),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"var?","var?",(230455531),null),"om/next.cljc",(12),(1),(713),(713),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(om.next$macros.var_QMARK_)?om.next$macros.var_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.var__GT_keyword = (function om$next$macros$var__GT_keyword(x){
return cljs.core.keyword.call(null,[cljs.core.str(x)].join('').substring((1)));
}); return (
new cljs.core.Var(function(){return om.next$macros.var__GT_keyword;},new cljs.core.Symbol("om.next$macros","var->keyword","om.next$macros/var->keyword",(1970741841),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"var->keyword","var->keyword",(1897384777),null),"om/next.cljc",(20),(1),(718),(718),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(om.next$macros.var__GT_keyword)?om.next$macros.var__GT_keyword.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.replace_var = (function om$next$macros$replace_var(expr,params){
if(cljs.core.truth_(om.next$macros.var_QMARK_.call(null,expr))){
return cljs.core.get.call(null,params,om.next$macros.var__GT_keyword.call(null,expr),expr);
} else {
return expr;
}
}); return (
new cljs.core.Var(function(){return om.next$macros.replace_var;},new cljs.core.Symbol("om.next$macros","replace-var","om.next$macros/replace-var",(-1362371080),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"replace-var","replace-var",(-1427426176),null),"om/next.cljc",(19),(1),(721),(721),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),null,(cljs.core.truth_(om.next$macros.replace_var)?om.next$macros.replace_var.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.bind_query = (function om$next$macros$bind_query(query,params){
var qm = cljs.core.meta.call(null,query);
var tr = cljs.core.map.call(null,((function (qm){
return (function (p1__66_SHARP_){
return om.next$macros.bind_query.call(null,p1__66_SHARP_,params);
});})(qm))
);
var ret = ((cljs.core.seq_QMARK_.call(null,query))?cljs.core.apply.call(null,cljs.core.list,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,tr,query)):((cljs.core.coll_QMARK_.call(null,query))?cljs.core.into.call(null,cljs.core.empty.call(null,query),tr,query):om.next$macros.replace_var.call(null,query,params)
));
var G__539 = ret;
var G__539__$1 = (cljs.core.truth_((function (){var and__20770__auto__ = qm;
if(cljs.core.truth_(and__20770__auto__)){
if(!((ret == null))){
if(((ret.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === ret.cljs$core$IMeta$))){
return true;
} else {
if((!ret.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,ret);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,ret);
}
} else {
return and__20770__auto__;
}
})())?cljs.core.with_meta.call(null,G__539,qm):G__539);
return G__539__$1;
}); return (
new cljs.core.Var(function(){return om.next$macros.bind_query;},new cljs.core.Symbol("om.next$macros","bind-query","om.next$macros/bind-query",(126169051),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"bind-query","bind-query",(61228851),null),"om/next.cljc",(18),(1),(726),(726),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),null,(cljs.core.truth_(om.next$macros.bind_query)?om.next$macros.bind_query.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.component_QMARK_; return (
new cljs.core.Var(function(){return om.next$macros.component_QMARK_;},new cljs.core.Symbol("om.next$macros","component?","om.next$macros/component?",(1983248661),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"component?","component?",(2048315517),null),"om/next.cljc",(20),(1),(739),true,(739),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros.component_QMARK_)?om.next$macros.component_QMARK_.cljs$lang$test:null)])));})()
;

(function (){
om.next$macros.get_reconciler; return (
new cljs.core.Var(function(){return om.next$macros.get_reconciler;},new cljs.core.Symbol("om.next$macros","get-reconciler","om.next$macros/get-reconciler",(-1345914330),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"get-reconciler","get-reconciler",(-1306137282),null),"om/next.cljc",(35),(1),(739),true,(739),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros.get_reconciler)?om.next$macros.get_reconciler.cljs$lang$test:null)])));})()
;

(function (){
om.next$macros.props; return (
new cljs.core.Var(function(){return om.next$macros.props;},new cljs.core.Symbol("om.next$macros","props","om.next$macros/props",(2028922158),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"props","props",(2093813254),null),"om/next.cljc",(41),(1),(739),true,(739),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros.props)?om.next$macros.props.cljs$lang$test:null)])));})()
;

(function (){
om.next$macros.class_path; return (
new cljs.core.Var(function(){return om.next$macros.class_path;},new cljs.core.Symbol("om.next$macros","class-path","om.next$macros/class-path",(-73640419),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"class-path","class-path",(-126000779),null),"om/next.cljc",(52),(1),(739),true,(739),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros.class_path)?om.next$macros.class_path.cljs$lang$test:null)])));})()
;

(function (){
om.next$macros.get_indexer; return (
new cljs.core.Var(function(){return om.next$macros.get_indexer;},new cljs.core.Symbol("om.next$macros","get-indexer","om.next$macros/get-indexer",(-233617541),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"get-indexer","get-indexer",(-152032173),null),"om/next.cljc",(64),(1),(739),true,(739),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros.get_indexer)?om.next$macros.get_indexer.cljs$lang$test:null)])));})()
;

(function (){
om.next$macros.path; return (
new cljs.core.Var(function(){return om.next$macros.path;},new cljs.core.Symbol("om.next$macros","path","om.next$macros/path",(1383321007),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),"om/next.cljc",(69),(1),(739),true,(739),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros.path)?om.next$macros.path.cljs$lang$test:null)])));})()
;

(function (){
om.next$macros.react_type; return (
new cljs.core.Var(function(){return om.next$macros.react_type;},new cljs.core.Symbol("om.next$macros","react-type","om.next$macros/react-type",(-906746419),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"react-type","react-type",(-870904667),null),"om/next.cljc",(80),(1),(739),true,(739),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros.react_type)?om.next$macros.react_type.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.component__GT_query_data = (function om$next$macros$component__GT_query_data(component){
var G__542 = om.next$macros.get_reconciler.call(null,component);
var G__542__$1 = (((G__542 == null))?null:new cljs.core.Keyword(null,"config","config",(994861415)).cljs$core$IFn$_invoke$arity$1(G__542));
var G__542__$2 = (((G__542__$1 == null))?null:new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(G__542__$1));
var G__542__$3 = (((G__542__$2 == null))?null:cljs.core.deref.call(null,G__542__$2));
var G__542__$4 = (((G__542__$3 == null))?null:new cljs.core.Keyword("om.next","queries","om.next/queries",(-22717146)).cljs$core$IFn$_invoke$arity$1(G__542__$3));
var G__542__$5 = (((G__542__$4 == null))?null:cljs.core.get.call(null,G__542__$4,component));
return G__542__$5;
}); return (
new cljs.core.Var(function(){return om.next$macros.component__GT_query_data;},new cljs.core.Symbol("om.next$macros","component->query-data","om.next$macros/component->query-data",(180527091),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"component->query-data","component->query-data",(371304075),null),"om/next.cljc",(29),(1),(741),(741),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)),null,(cljs.core.truth_(om.next$macros.component__GT_query_data)?om.next$macros.component__GT_query_data.cljs$lang$test:null)])));})()
;
/**
 * Return the unbound query for a component.
 */
(function (){
om.next$macros.get_unbound_query = (function om$next$macros$get_unbound_query(component){
return new cljs.core.Keyword(null,"query","query",(-1288509510)).cljs$core$IFn$_invoke$arity$2(om.next$macros.component__GT_query_data.call(null,component),om.next$macros.query.call(null,component));
}); return (
new cljs.core.Var(function(){return om.next$macros.get_unbound_query;},new cljs.core.Symbol("om.next$macros","get-unbound-query","om.next$macros/get-unbound-query",(657668830),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"get-unbound-query","get-unbound-query",(995099590),null),"om/next.cljc",(24),(1),(745),(745),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)),"Return the unbound query for a component.",(cljs.core.truth_(om.next$macros.get_unbound_query)?om.next$macros.get_unbound_query.cljs$lang$test:null)])));})()
;
/**
 * Return the query params for a component.
 */
(function (){
om.next$macros.get_params = (function om$next$macros$get_params(component){
return new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$2(om.next$macros.component__GT_query_data.call(null,component),om.next$macros.params.call(null,component));
}); return (
new cljs.core.Var(function(){return om.next$macros.get_params;},new cljs.core.Symbol("om.next$macros","get-params","om.next$macros/get-params",(-335483397),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"get-params","get-params",(-400427309),null),"om/next.cljc",(17),(1),(750),(750),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)),"Return the query params for a component.",(cljs.core.truth_(om.next$macros.get_params)?om.next$macros.get_params.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.get_component_query = (function om$next$macros$get_component_query(var_args){
var args543 = [];
var len__23656__auto___546 = arguments.length;
var i__23657__auto___547 = (0);
while(true){
if((i__23657__auto___547 < len__23656__auto___546)){
args543.push((arguments[i__23657__auto___547]));

var G__548 = (i__23657__auto___547 + (1));
i__23657__auto___547 = G__548;
continue;
} else {
}
break;
}

var G__545 = args543.length;
switch (G__545) {
case (1):
return om.next$macros.get_component_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return om.next$macros.get_component_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args543.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next$macros.get_component_query;},new cljs.core.Symbol("om.next$macros","get-component-query","om.next$macros/get-component-query",(1130677902),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"get-component-query","get-component-query",(1061432806),null),"om/next.cljc",(27),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"query-data","query-data",(-1508389107),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"query-data","query-data",(-1508389107),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(755),(755),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"query-data","query-data",(-1508389107),null)], null)),null,(cljs.core.truth_(om.next$macros.get_component_query)?om.next$macros.get_component_query.cljs$lang$test:null)])));})()
;

om.next$macros.get_component_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next$macros.get_component_query.call(null,component,om.next$macros.component__GT_query_data.call(null,component));
});

om.next$macros.get_component_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query_data){
var q = new cljs.core.Keyword(null,"query","query",(-1288509510)).cljs$core$IFn$_invoke$arity$2(query_data,om.next$macros.query.call(null,component));
var c_SINGLEQUOTE_ = new cljs.core.Keyword(null,"component","component",(1555936782)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c_SINGLEQUOTE_ == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(component),cljs.core.str(" reuses "),cljs.core.str(c_SINGLEQUOTE_),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str("(nil? c')")].join('')));
}

return cljs.core.with_meta.call(null,om.next$macros.bind_query.call(null,q,new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$2(query_data,om.next$macros.params.call(null,component))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",(1555936782)),om.next$macros.react_type.call(null,component)], null));
});

om.next$macros.get_component_query.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return om.next$macros.get_component_query;},new cljs.core.Symbol("om.next$macros","get-component-query","om.next$macros/get-component-query",(1130677902),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"get-component-query","get-component-query",(1061432806),null),"om/next.cljc",(27),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"query-data","query-data",(-1508389107),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"query-data","query-data",(-1508389107),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(755),(755),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"query-data","query-data",(-1508389107),null)], null)),null,(cljs.core.truth_(om.next$macros.get_component_query)?om.next$macros.get_component_query.cljs$lang$test:null)]));
(function (){
om.next$macros.iquery_QMARK_ = (function om$next$macros$iquery_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$next$macros$IQuery$))){
return true;
} else {
return false;
}
} else {
return false;
}
}); return (
new cljs.core.Var(function(){return om.next$macros.iquery_QMARK_;},new cljs.core.Symbol("om.next$macros","iquery?","om.next$macros/iquery?",(1017087921),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"iquery?","iquery?",(951893833),null),"om/next.cljc",(14),(1),(767),(767),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,((om.next$macros.iquery_QMARK_)?om.next$macros.iquery_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Return a IQuery/IParams local bound query. Works for component classes
 * and component instances. Does not use the indexer.
 */
(function (){
om.next$macros.get_class_or_instance_query = (function om$next$macros$get_class_or_instance_query(x){
if(cljs.core.truth_(om.next$macros.component_QMARK_.call(null,x))){
return om.next$macros.get_component_query.call(null,x);
} else {
var q = om.next$macros.query.call(null,x);
var c = new cljs.core.Keyword(null,"component","component",(1555936782)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(x),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str("(nil? c)")].join('')));
}

return cljs.core.with_meta.call(null,om.next$macros.bind_query.call(null,q,om.next$macros.params.call(null,x)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",(1555936782)),x], null));
}
}); return (
new cljs.core.Var(function(){return om.next$macros.get_class_or_instance_query;},new cljs.core.Symbol("om.next$macros","get-class-or-instance-query","om.next$macros/get-class-or-instance-query",(-454960941),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"get-class-or-instance-query","get-class-or-instance-query",(-389886021),null),"om/next.cljc",(35),(1),(776),(776),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Return a IQuery/IParams local bound query. Works for component classes\n   and component instances. Does not use the indexer.",(cljs.core.truth_(om.next$macros.get_class_or_instance_query)?om.next$macros.get_class_or_instance_query.cljs$lang$test:null)])));})()
;
/**
 * Get a component's static query from the indexer. For recursive queries, recurses
 * up the data path. Falls back to `get-class-or-instance-query` if nothing is
 * found in the indexer.
 */
(function (){
om.next$macros.get_indexed_query = (function om$next$macros$get_indexed_query(component,class_path_query_data,data_path){
while(true){
var qs = cljs.core.filter.call(null,((function (component,class_path_query_data,data_path){
return (function (p1__67_SHARP_){
return cljs.core._EQ_.call(null,data_path,om.next$macros.focus__GT_path.call(null,clojure.zip.root.call(null,p1__67_SHARP_),data_path));
});})(component,class_path_query_data,data_path))
,class_path_query_data);
var qs__$1 = ((cljs.core.empty_QMARK_.call(null,qs))?class_path_query_data:qs);
if(!(cljs.core.empty_QMARK_.call(null,qs__$1))){
var q = cljs.core.first.call(null,qs__$1);
var node = clojure.zip.node.call(null,q);
if(!(om.util.recursion_QMARK_.call(null,node))){
return node;
} else {
var G__552 = component;
var G__553 = class_path_query_data;
var G__554 = cljs.core.pop.call(null,data_path);
component = G__552;
class_path_query_data = G__553;
data_path = G__554;
continue;
}
} else {
return om.next$macros.get_class_or_instance_query.call(null,component);
}
break;
}
}); return (
new cljs.core.Var(function(){return om.next$macros.get_indexed_query;},new cljs.core.Symbol("om.next$macros","get-indexed-query","om.next$macros/get-indexed-query",(1358523201),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"get-indexed-query","get-indexed-query",(1461342841),null),"om/next.cljc",(25),(1),(788),(788),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"class-path-query-data","class-path-query-data",(203872838),null),new cljs.core.Symbol(null,"data-path","data-path",(-1979633588),null)], null)),"Get a component's static query from the indexer. For recursive queries, recurses\n   up the data path. Falls back to `get-class-or-instance-query` if nothing is\n   found in the indexer.",(cljs.core.truth_(om.next$macros.get_indexed_query)?om.next$macros.get_indexed_query.cljs$lang$test:null)])));})()
;
/**
 * Return a IQuery/IParams instance bound query. Works for component classes
 * and component instances. See also om.next/full-query.
 */
(function (){
om.next$macros.get_query = (function om$next$macros$get_query(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$next$macros$IQuery$)))?true:false):false)){
if(cljs.core.truth_(om.next$macros.component_QMARK_.call(null,x))){
var temp__19520__auto__ = om.next$macros.component__GT_query_data.call(null,x);
if(cljs.core.truth_(temp__19520__auto__)){
var query_data = temp__19520__auto__;
return om.next$macros.get_component_query.call(null,x,query_data);
} else {
var cp = om.next$macros.class_path.call(null,x);
var r = om.next$macros.get_reconciler.call(null,x);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next$macros.path.call(null,x));
var class_path_query_data = cljs.core.get.call(null,new cljs.core.Keyword(null,"class-path->query","class-path->query",(-1222593700)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om.next$macros.get_indexer.call(null,r))),cp);
return om.next$macros.get_indexed_query.call(null,x,class_path_query_data,data_path);
}
} else {
return om.next$macros.get_class_or_instance_query.call(null,x);
}
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return om.next$macros.get_query;},new cljs.core.Symbol("om.next$macros","get-query","om.next$macros/get-query",(778854110),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"get-query","get-query",(709707190),null),"om/next.cljc",(16),(1),(804),(804),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Return a IQuery/IParams instance bound query. Works for component classes\n   and component instances. See also om.next/full-query.",(cljs.core.truth_(om.next$macros.get_query)?om.next$macros.get_query.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.tag = (function om$next$macros$tag(x,class$){
return cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",(1555936782)),class$);
}); return (
new cljs.core.Var(function(){return om.next$macros.tag;},new cljs.core.Symbol("om.next$macros","tag","om.next$macros/tag",(280910648),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"tag","tag",(350170304),null),"om/next.cljc",(10),(1),(820),(820),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"class","class",(-390430469),null)], null)),null,(cljs.core.truth_(om.next$macros.tag)?om.next$macros.tag.cljs$lang$test:null)])));})()
;

/**
* @constructor
*/
om.next$macros.OmProps = (function (props,basis_t){
this.props = props;
this.basis_t = basis_t;
})

om.next$macros.OmProps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",(2093813254),null),new cljs.core.Symbol(null,"basis-t","basis-t",(216455797),null)], null);
});

om.next$macros.OmProps.cljs$lang$type = true;

om.next$macros.OmProps.cljs$lang$ctorStr = "om.next$macros/OmProps";

om.next$macros.OmProps.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"om.next$macros/OmProps");
});

(function (){
om.next$macros.__GT_OmProps = (function om$next$macros$__GT_OmProps(props,basis_t){
return (new om.next$macros.OmProps(props,basis_t));
}); return (
new cljs.core.Var(function(){return om.next$macros.__GT_OmProps;},new cljs.core.Symbol("om.next$macros","->OmProps","om.next$macros/->OmProps",(-1877829302),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"->OmProps","->OmProps",(-1808564062),null),"om/next.cljc",(36),(10),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(826),(826),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",(2093813254),null),new cljs.core.Symbol(null,"basis-t","basis-t",(216455797),null)], null)),null,null,(cljs.core.truth_(om.next$macros.__GT_OmProps)?om.next$macros.__GT_OmProps.cljs$lang$test:null)])));})()
;

(function (){
om.next$macros.om_props = (function om$next$macros$om_props(props,basis_t){
return (new om.next$macros.OmProps(props,basis_t));
}); return (
new cljs.core.Var(function(){return om.next$macros.om_props;},new cljs.core.Symbol("om.next$macros","om-props","om.next$macros/om-props",(-1572294574),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"om-props","om-props",(-1507086518),null),"om/next.cljc",(19),(4),(829),(829),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",(2093813254),null),new cljs.core.Symbol(null,"basis-t","basis-t",(216455797),null)], null)),null,(cljs.core.truth_(om.next$macros.om_props)?om.next$macros.om_props.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.om_props_basis = (function om$next$macros$om_props_basis(om_props){
return om_props.basis_t;
}); return (
new cljs.core.Var(function(){return om.next$macros.om_props_basis;},new cljs.core.Symbol("om.next$macros","om-props-basis","om.next$macros/om-props-basis",(1877630947),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"om-props-basis","om-props-basis",(1804249291),null),"om/next.cljc",(25),(4),(833),(833),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"om-props","om-props",(-1507086518),null)], null)),null,(cljs.core.truth_(om.next$macros.om_props_basis)?om.next$macros.om_props_basis.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.nil_props = om.next$macros.om_props.call(null,null,(-1)); return (
new cljs.core.Var(function(){return om.next$macros.nil_props;},new cljs.core.Symbol("om.next$macros","nil-props","om.next$macros/nil-props",(-560766046),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"nil-props","nil-props",(-1028416374),null),"om/next.cljc",(34),(10),(836),(836),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros.nil_props)?om.next$macros.nil_props.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.unwrap = (function om$next$macros$unwrap(om_props){
return om_props.props;
}); return (
new cljs.core.Var(function(){return om.next$macros.unwrap;},new cljs.core.Symbol("om.next$macros","unwrap","om.next$macros/unwrap",(168682569),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"unwrap","unwrap",(241356065),null),"om/next.cljc",(17),(4),(839),(839),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"om-props","om-props",(-1507086518),null)], null)),null,(cljs.core.truth_(om.next$macros.unwrap)?om.next$macros.unwrap.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.compute_react_key = (function om$next$macros$compute_react_key(cl,props){
var temp__19520__auto__ = new cljs.core.Keyword(null,"react-key","react-key",(1337881348)).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__19520__auto__)){
var rk = temp__19520__auto__;
return rk;
} else {
var temp__19520__auto____$1 = new cljs.core.Keyword(null,"om-path","om-path",(-1911443978)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props));
if(cljs.core.truth_(temp__19520__auto____$1)){
var idx = temp__19520__auto____$1;
return [cljs.core.str(cl.name),cljs.core.str("_"),cljs.core.str(idx)].join('');
} else {
return undefined;
}
}
}); return (
new cljs.core.Var(function(){return om.next$macros.compute_react_key;},new cljs.core.Symbol("om.next$macros","compute-react-key","om.next$macros/compute-react-key",(-1256812564),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"compute-react-key","compute-react-key",(-1992973164),null),"om/next.cljc",(28),(4),(855),(855),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cl","cl",(-1661515732),null),new cljs.core.Symbol(null,"props","props",(2093813254),null)], null)),null,(cljs.core.truth_(om.next$macros.compute_react_key)?om.next$macros.compute_react_key.cljs$lang$test:null)])));})()
;
/**
 * Create a factory constructor from a component class created with
 *    om.next/defui.
 */
(function (){
om.next$macros.factory = (function om$next$macros$factory(var_args){
var args557 = [];
var len__23656__auto___565 = arguments.length;
var i__23657__auto___566 = (0);
while(true){
if((i__23657__auto___566 < len__23656__auto___565)){
args557.push((arguments[i__23657__auto___566]));

var G__567 = (i__23657__auto___566 + (1));
i__23657__auto___566 = G__567;
continue;
} else {
}
break;
}

var G__559 = args557.length;
switch (G__559) {
case (1):
return om.next$macros.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return om.next$macros.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args557.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next$macros.factory;},new cljs.core.Symbol("om.next$macros","factory","om.next$macros/factory",(1773763649),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"factory","factory",(1704465273),null),"om/next.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",(-390430469),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",(-390430469),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"instrument?","instrument?",(-195050869),null),true], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validator","validator",(-325659154),null),new cljs.core.Symbol(null,"keyfn","keyfn",(-1874375437),null),new cljs.core.Symbol(null,"instrument?","instrument?",(-195050869),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",(-390430469),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",(-390430469),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"instrument?","instrument?",(-195050869),null),true], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validator","validator",(-325659154),null),new cljs.core.Symbol(null,"keyfn","keyfn",(-1874375437),null),new cljs.core.Symbol(null,"instrument?","instrument?",(-195050869),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(4),(911),(911),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",(-390430469),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",(-390430469),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"instrument?","instrument?",(-195050869),null),true], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validator","validator",(-325659154),null),new cljs.core.Symbol(null,"keyfn","keyfn",(-1874375437),null),new cljs.core.Symbol(null,"instrument?","instrument?",(-195050869),null)], null)], null)], null)),"Create a factory constructor from a component class created with\n      om.next/defui.",(cljs.core.truth_(om.next$macros.factory)?om.next$macros.factory.cljs$lang$test:null)])));})()
;

om.next$macros.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return om.next$macros.factory.call(null,class$,null);
});

om.next$macros.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__560){
var map__561 = p__560;
var map__561__$1 = ((((!((map__561 == null)))?((((map__561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__561.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__561):map__561);
var opts = map__561__$1;
var instrument_QMARK_ = cljs.core.get.call(null,map__561__$1,new cljs.core.Keyword(null,"instrument?","instrument?",(-1835582396)),true);
var validator = cljs.core.get.call(null,map__561__$1,new cljs.core.Keyword(null,"validator","validator",(-1966190681)));
var keyfn = cljs.core.get.call(null,map__561__$1,new cljs.core.Keyword(null,"keyfn","keyfn",(780060332)));
if(cljs.core.fn_QMARK_.call(null,class$)){
} else {
throw (new Error("Assert failed: (fn? class)"));
}

return ((function (map__561,map__561__$1,opts,instrument_QMARK_,validator,keyfn){
return (function() { 
var om$next$macros$self__delegate = function (props,children){
if((validator == null)){
} else {
if(cljs.core.truth_(validator.call(null,props))){
} else {
throw (new Error("Assert failed: (validator props)"));
}
}

if(cljs.core.truth_((function (){var and__20770__auto__ = om.next$macros._STAR_instrument_STAR_;
if(cljs.core.truth_(and__20770__auto__)){
return instrument_QMARK_;
} else {
return and__20770__auto__;
}
})())){
return om.next$macros._STAR_instrument_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",(-940561982)),children,new cljs.core.Keyword(null,"factory","factory",(63933746)),om.next$macros.factory.call(null,class$,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"instrument?","instrument?",(-1835582396)),false)),new cljs.core.Keyword(null,"class","class",(-2030961996)),class$,new cljs.core.Keyword(null,"props","props",(453281727)),props], null));
} else {
var key = ((!((keyfn == null)))?keyfn.call(null,props):om.next$macros.compute_react_key.call(null,class$,props));
var ref = new cljs.core.Keyword(null,"ref","ref",(1289896967)).cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__564 = ref;
var G__564__$1 = (((ref instanceof cljs.core.Keyword))?[cljs.core.str(G__564)].join(''):G__564);
return G__564__$1;
})();
var t = ((!((om.next$macros._STAR_reconciler_STAR_ == null)))?om.next.protocols.basis_t.call(null,om.next$macros._STAR_reconciler_STAR_):(0));
return React.createElement(class$,({"omcljs$value": om.next$macros.om_props.call(null,props,t), "omcljs$instrument": om.next$macros._STAR_instrument_STAR_, "key": key, "omcljs$reactKey": key, "ref": ref__$1, "omcljs$shared": om.next$macros._STAR_shared_STAR_, "omcljs$path": new cljs.core.Keyword(null,"om-path","om-path",(-1911443978)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props)), "omcljs$reconciler": om.next$macros._STAR_reconciler_STAR_, "omcljs$depth": om.next$macros._STAR_depth_STAR_, "omcljs$parent": om.next$macros._STAR_parent_STAR_}),om.util.force_children.call(null,children));
}
};
var om$next$macros$self = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__569__i = 0, G__569__a = new Array(arguments.length -  1);
while (G__569__i < G__569__a.length) {G__569__a[G__569__i] = arguments[G__569__i + 1]; ++G__569__i;}
  children = new cljs.core.IndexedSeq(G__569__a,0);
} 
return om$next$macros$self__delegate.call(this,props,children);};
om$next$macros$self.cljs$lang$maxFixedArity = 1;
om$next$macros$self.cljs$lang$applyTo = (function (arglist__570){
var props = cljs.core.first(arglist__570);
var children = cljs.core.rest(arglist__570);
return om$next$macros$self__delegate(props,children);
});
om$next$macros$self.cljs$core$IFn$_invoke$arity$variadic = om$next$macros$self__delegate;
return om$next$macros$self;
})()
;
;})(map__561,map__561__$1,opts,instrument_QMARK_,validator,keyfn))
});

om.next$macros.factory.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return om.next$macros.factory;},new cljs.core.Symbol("om.next$macros","factory","om.next$macros/factory",(1773763649),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"factory","factory",(1704465273),null),"om/next.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",(-390430469),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",(-390430469),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"instrument?","instrument?",(-195050869),null),true], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validator","validator",(-325659154),null),new cljs.core.Symbol(null,"keyfn","keyfn",(-1874375437),null),new cljs.core.Symbol(null,"instrument?","instrument?",(-195050869),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",(-390430469),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",(-390430469),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"instrument?","instrument?",(-195050869),null),true], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validator","validator",(-325659154),null),new cljs.core.Symbol(null,"keyfn","keyfn",(-1874375437),null),new cljs.core.Symbol(null,"instrument?","instrument?",(-195050869),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(4),(911),(911),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",(-390430469),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",(-390430469),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"instrument?","instrument?",(-195050869),null),true], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validator","validator",(-325659154),null),new cljs.core.Symbol(null,"keyfn","keyfn",(-1874375437),null),new cljs.core.Symbol(null,"instrument?","instrument?",(-195050869),null)], null)], null)], null)),"Create a factory constructor from a component class created with\n      om.next/defui.",(cljs.core.truth_(om.next$macros.factory)?om.next$macros.factory.cljs$lang$test:null)]));
/**
 * Returns true if the argument is an Om component.
 */
(function (){
om.next$macros.component_QMARK_ = (function om$next$macros$component_QMARK_(x){
if(!((x == null))){
return x.om$isComponent === true;
} else {
return false;
}
}); return (
new cljs.core.Var(function(){return om.next$macros.component_QMARK_;},new cljs.core.Symbol("om.next$macros","component?","om.next$macros/component?",(1983248661),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"component?","component?",(2048315517),null),"om/next.cljc",(17),(1),(956),(956),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Returns true if the argument is an Om component.",((om.next$macros.component_QMARK_)?om.next$macros.component_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.state = (function om$next$macros$state(c){
if(om.next$macros.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return c.state;
}); return (
new cljs.core.Var(function(){return om.next$macros.state;},new cljs.core.Symbol("om.next$macros","state","om.next$macros/state",(-685743620),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"state","state",(-348086572),null),"om/next.cljc",(13),(1),(965),(965),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(om.next$macros.state)?om.next$macros.state.cljs$lang$test:null)])));})()
;
/**
 * PRIVATE: Do not use
 */
(function (){
om.next$macros.get_prop = (function om$next$macros$get_prop(c,k){
return goog.object.get(c.props,k);
}); return (
new cljs.core.Var(function(){return om.next$macros.get_prop;},new cljs.core.Symbol("om.next$macros","get-prop","om.next$macros/get-prop",(-819636103),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"get-prop","get-prop",(-746961151),null),"om/next.cljc",(16),(1),(969),(969),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),"PRIVATE: Do not use",(cljs.core.truth_(om.next$macros.get_prop)?om.next$macros.get_prop.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.get_props_STAR_ = (function om$next$macros$get_props_STAR_(x,k){
if((x == null)){
return om.next$macros.nil_props;
} else {
var y = goog.object.get(x,k);
if((y == null)){
return om.next$macros.nil_props;
} else {
return y;
}
}
}); return (
new cljs.core.Var(function(){return om.next$macros.get_props_STAR_;},new cljs.core.Symbol("om.next$macros","get-props*","om.next$macros/get-props*",(-439264693),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"get-props*","get-props*",(-504348333),null),"om/next.cljc",(21),(4),(976),(976),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),null,(cljs.core.truth_(om.next$macros.get_props_STAR_)?om.next$macros.get_props_STAR_.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.get_prev_props = (function om$next$macros$get_prev_props(x){
return om.next$macros.get_props_STAR_.call(null,x,"omcljs$prev$value");
}); return (
new cljs.core.Var(function(){return om.next$macros.get_prev_props;},new cljs.core.Symbol("om.next$macros","get-prev-props","om.next$macros/get-prev-props",(-1876955738),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"get-prev-props","get-prev-props",(-1673733490),null),"om/next.cljc",(25),(4),(986),(986),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(om.next$macros.get_prev_props)?om.next$macros.get_prev_props.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.get_next_props = (function om$next$macros$get_next_props(x){
return om.next$macros.get_props_STAR_.call(null,x,"omcljs$next$value");
}); return (
new cljs.core.Var(function(){return om.next$macros.get_next_props;},new cljs.core.Symbol("om.next$macros","get-next-props","om.next$macros/get-next-props",(1461596553),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"get-next-props","get-next-props",(-1417815839),null),"om/next.cljc",(25),(4),(990),(990),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(om.next$macros.get_next_props)?om.next$macros.get_next_props.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.get_props = (function om$next$macros$get_props(x){
return om.next$macros.get_props_STAR_.call(null,x,"omcljs$value");
}); return (
new cljs.core.Var(function(){return om.next$macros.get_props;},new cljs.core.Symbol("om.next$macros","get-props","om.next$macros/get-props",(-759013896),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"get-props","get-props",(-689851264),null),"om/next.cljc",(20),(4),(994),(994),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(om.next$macros.get_props)?om.next$macros.get_props.cljs$lang$test:null)])));})()
;
/**
 * PRIVATE: Do not use
 */
(function (){
om.next$macros.set_prop_BANG_ = (function om$next$macros$set_prop_BANG_(c,k,v){
return goog.object.set(c.props,k,v);
}); return (
new cljs.core.Var(function(){return om.next$macros.set_prop_BANG_;},new cljs.core.Symbol("om.next$macros","set-prop!","om.next$macros/set-prop!",(-2035192260),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"set-prop!","set-prop!",(-90277612),null),"om/next.cljc",(20),(4),(998),(998),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),"PRIVATE: Do not use",(cljs.core.truth_(om.next$macros.set_prop_BANG_)?om.next$macros.set_prop_BANG_.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.get_reconciler = (function om$next$macros$get_reconciler(c){
if(om.next$macros.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return om.next$macros.get_prop.call(null,c,"omcljs$reconciler");
}); return (
new cljs.core.Var(function(){return om.next$macros.get_reconciler;},new cljs.core.Symbol("om.next$macros","get-reconciler","om.next$macros/get-reconciler",(-1345914330),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"get-reconciler","get-reconciler",(-1306137282),null),"om/next.cljc",(21),(1),(1003),(1003),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(om.next$macros.get_reconciler)?om.next$macros.get_reconciler.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.props_STAR_ = (function om$next$macros$props_STAR_(var_args){
var args571 = [];
var len__23656__auto___574 = arguments.length;
var i__23657__auto___575 = (0);
while(true){
if((i__23657__auto___575 < len__23656__auto___574)){
args571.push((arguments[i__23657__auto___575]));

var G__576 = (i__23657__auto___575 + (1));
i__23657__auto___575 = G__576;
continue;
} else {
}
break;
}

var G__573 = args571.length;
switch (G__573) {
case (2):
return om.next$macros.props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return om.next$macros.props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args571.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next$macros.props_STAR_;},new cljs.core.Symbol("om.next$macros","props*","om.next$macros/props*",(-287995930),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"props*","props*",(-768250162),null),"om/next.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"z","z",(851004344),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"z","z",(851004344),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(4),(1010),(1010),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"z","z",(851004344),null)], null)),null,(cljs.core.truth_(om.next$macros.props_STAR_)?om.next$macros.props_STAR_.cljs$lang$test:null)])));})()
;

om.next$macros.props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.max_key.call(null,om.next$macros.om_props_basis,x,y);
});

om.next$macros.props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.max_key.call(null,om.next$macros.om_props_basis,x,om.next$macros.props_STAR_.call(null,y,z));
});

om.next$macros.props_STAR_.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return om.next$macros.props_STAR_;},new cljs.core.Symbol("om.next$macros","props*","om.next$macros/props*",(-287995930),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"props*","props*",(-768250162),null),"om/next.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"z","z",(851004344),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"z","z",(851004344),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(4),(1010),(1010),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"z","z",(851004344),null)], null)),null,(cljs.core.truth_(om.next$macros.props_STAR_)?om.next$macros.props_STAR_.cljs$lang$test:null)]));
(function (){
om.next$macros.prev_props_STAR_ = (function om$next$macros$prev_props_STAR_(var_args){
var args578 = [];
var len__23656__auto___581 = arguments.length;
var i__23657__auto___582 = (0);
while(true){
if((i__23657__auto___582 < len__23656__auto___581)){
args578.push((arguments[i__23657__auto___582]));

var G__583 = (i__23657__auto___582 + (1));
i__23657__auto___582 = G__583;
continue;
} else {
}
break;
}

var G__580 = args578.length;
switch (G__580) {
case (2):
return om.next$macros.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return om.next$macros.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args578.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next$macros.prev_props_STAR_;},new cljs.core.Symbol("om.next$macros","prev-props*","om.next$macros/prev-props*",(1025459204),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"prev-props*","prev-props*",(20870124),null),"om/next.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"z","z",(851004344),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"z","z",(851004344),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(4),(1017),(1017),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"z","z",(851004344),null)], null)),null,(cljs.core.truth_(om.next$macros.prev_props_STAR_)?om.next$macros.prev_props_STAR_.cljs$lang$test:null)])));})()
;

om.next$macros.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.min_key.call(null,om.next$macros.om_props_basis,x,y);
});

om.next$macros.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.min_key.call(null,om.next$macros.om_props_basis,om.next$macros.props_STAR_.call(null,x,y),om.next$macros.props_STAR_.call(null,y,z));
});

om.next$macros.prev_props_STAR_.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return om.next$macros.prev_props_STAR_;},new cljs.core.Symbol("om.next$macros","prev-props*","om.next$macros/prev-props*",(1025459204),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"prev-props*","prev-props*",(20870124),null),"om/next.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"z","z",(851004344),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"z","z",(851004344),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(4),(1017),(1017),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"z","z",(851004344),null)], null)),null,(cljs.core.truth_(om.next$macros.prev_props_STAR_)?om.next$macros.prev_props_STAR_.cljs$lang$test:null)]));
(function (){
om.next$macros._prev_props = (function om$next$macros$_prev_props(prev_props,component){
var cst = component.state;
var props = component.props;
return om.next$macros.unwrap.call(null,om.next$macros.prev_props_STAR_.call(null,om.next$macros.props_STAR_.call(null,om.next$macros.get_props.call(null,prev_props),om.next$macros.get_prev_props.call(null,cst)),om.next$macros.props_STAR_.call(null,om.next$macros.get_props.call(null,cst),om.next$macros.get_props.call(null,props))));
}); return (
new cljs.core.Var(function(){return om.next$macros._prev_props;},new cljs.core.Symbol("om.next$macros","-prev-props","om.next$macros/-prev-props",(1770458238),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"-prev-props","-prev-props",(1839605606),null),"om/next.cljc",(21),(4),(1025),(1025),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prev-props","prev-props",(1081981230),null),new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)),null,(cljs.core.truth_(om.next$macros._prev_props)?om.next$macros._prev_props.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros._next_props = (function om$next$macros$_next_props(next_props,component){
return om.next$macros.unwrap.call(null,om.next$macros.props_STAR_.call(null,om.next$macros.get_props.call(null,component.props),om.next$macros.get_props.call(null,next_props),om.next$macros.get_next_props.call(null,component.state)));
}); return (
new cljs.core.Var(function(){return om.next$macros._next_props;},new cljs.core.Symbol("om.next$macros","-next-props","om.next$macros/-next-props",(367382317),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"-next-props","-next-props",(432317957),null),"om/next.cljc",(21),(4),(1034),(1034),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null),new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)),null,(cljs.core.truth_(om.next$macros._next_props)?om.next$macros._next_props.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.merge_pending_props_BANG_ = (function om$next$macros$merge_pending_props_BANG_(c){
if(om.next$macros.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var cst = c.state;
var props = c.props;
var pending = goog.object.get(cst,"omcljs$next$value");
var prev = om.next$macros.props_STAR_.call(null,om.next$macros.get_props.call(null,cst),om.next$macros.get_props.call(null,props));
goog.object.set(cst,"omcljs$prev$value",prev);

if((pending == null)){
return null;
} else {
goog.object.remove(cst,"omcljs$next$value");

return goog.object.set(cst,"omcljs$value",pending);
}
}); return (
new cljs.core.Var(function(){return om.next$macros.merge_pending_props_BANG_;},new cljs.core.Symbol("om.next$macros","merge-pending-props!","om.next$macros/merge-pending-props!",(316397778),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"merge-pending-props!","merge-pending-props!",(490389946),null),"om/next.cljc",(31),(4),(1042),(1042),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(om.next$macros.merge_pending_props_BANG_)?om.next$macros.merge_pending_props_BANG_.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.clear_prev_props_BANG_ = (function om$next$macros$clear_prev_props_BANG_(c){
return goog.object.remove(c.state,"omcljs$prev$value");
}); return (
new cljs.core.Var(function(){return om.next$macros.clear_prev_props_BANG_;},new cljs.core.Symbol("om.next$macros","clear-prev-props!","om.next$macros/clear-prev-props!",(507719182),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"clear-prev-props!","clear-prev-props!",(442643942),null),"om/next.cljc",(28),(4),(1054),(1054),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(om.next$macros.clear_prev_props_BANG_)?om.next$macros.clear_prev_props_BANG_.cljs$lang$test:null)])));})()
;
/**
 * Get basis t value for when the component last read its props from
 *    the global state.
 */
(function (){
om.next$macros.t = (function om$next$macros$t(c){
return om.next$macros.om_props_basis.call(null,om.next$macros.props_STAR_.call(null,om.next$macros.get_props.call(null,c.props),om.next$macros.get_props.call(null,c.state)));
}); return (
new cljs.core.Var(function(){return om.next$macros.t;},new cljs.core.Symbol("om.next$macros","t","om.next$macros/t",(177496104),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"t","t",(242699008),null),"om/next.cljc",(12),(4),(1058),(1058),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),"Get basis t value for when the component last read its props from\n      the global state.",(cljs.core.truth_(om.next$macros.t)?om.next$macros.t.cljs$lang$test:null)])));})()
;
/**
 * Returns the parent Om component.
 */
(function (){
om.next$macros.parent = (function om$next$macros$parent(component){
return om.next$macros.get_prop.call(null,component,"omcljs$parent");
}); return (
new cljs.core.Var(function(){return om.next$macros.parent;},new cljs.core.Symbol("om.next$macros","parent","om.next$macros/parent",(562485540),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"parent","parent",(761652748),null),"om/next.cljc",(14),(1),(1067),(1067),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)),"Returns the parent Om component.",(cljs.core.truth_(om.next$macros.parent)?om.next$macros.parent.cljs$lang$test:null)])));})()
;
/**
 * PRIVATE: Returns the render depth (a integer) of the component relative to
 *  the mount root.
 */
(function (){
om.next$macros.depth = (function om$next$macros$depth(component){
if(om.next$macros.component_QMARK_.call(null,component)){
return om.next$macros.get_prop.call(null,component,"omcljs$depth");
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return om.next$macros.depth;},new cljs.core.Symbol("om.next$macros","depth","om.next$macros/depth",(-942204441),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"depth","depth",(-885772129),null),"om/next.cljc",(12),(1),(1073),(1073),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)),"PRIVATE: Returns the render depth (a integer) of the component relative to\n    the mount root.",(cljs.core.truth_(om.next$macros.depth)?om.next$macros.depth.cljs$lang$test:null)])));})()
;
/**
 * Returns the components React key.
 */
(function (){
om.next$macros.react_key = (function om$next$macros$react_key(component){
return om.next$macros.get_prop.call(null,component,"omcljs$reactKey");
}); return (
new cljs.core.Var(function(){return om.next$macros.react_key;},new cljs.core.Symbol("om.next$macros","react-key","om.next$macros/react-key",(-1113075629),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"react-key","react-key",(-1316554421),null),"om/next.cljc",(16),(1),(1081),(1081),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)),"Returns the components React key.",(cljs.core.truth_(om.next$macros.react_key)?om.next$macros.react_key.cljs$lang$test:null)])));})()
;
/**
 * Returns the component type, regardless of whether the component has been
 *    mounted
 */
(function (){
om.next$macros.react_type = (function om$next$macros$react_type(x){
var or__20817__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return cljs.core.type.call(null,x);
}
}); return (
new cljs.core.Var(function(){return om.next$macros.react_type;},new cljs.core.Symbol("om.next$macros","react-type","om.next$macros/react-type",(-906746419),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"react-type","react-type",(-870904667),null),"om/next.cljc",(20),(4),(1099),(1099),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Returns the component type, regardless of whether the component has been\n      mounted",(cljs.core.truth_(om.next$macros.react_type)?om.next$macros.react_type.cljs$lang$test:null)])));})()
;
/**
 * Returns the component's Om data path.
 */
(function (){
om.next$macros.path = (function om$next$macros$path(c){
return om.next$macros.get_prop.call(null,c,"omcljs$path");
}); return (
new cljs.core.Var(function(){return om.next$macros.path;},new cljs.core.Symbol("om.next$macros","path","om.next$macros/path",(1383321007),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),"om/next.cljc",(12),(1),(1105),(1105),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),"Returns the component's Om data path.",(cljs.core.truth_(om.next$macros.path)?om.next$macros.path.cljs$lang$test:null)])));})()
;
/**
 * Return the global shared properties of the Om Next root. See :shared and
 * :shared-fn reconciler options.
 */
(function (){
om.next$macros.shared = (function om$next$macros$shared(var_args){
var args585 = [];
var len__23656__auto___590 = arguments.length;
var i__23657__auto___591 = (0);
while(true){
if((i__23657__auto___591 < len__23656__auto___590)){
args585.push((arguments[i__23657__auto___591]));

var G__592 = (i__23657__auto___591 + (1));
i__23657__auto___591 = G__592;
continue;
} else {
}
break;
}

var G__587 = args585.length;
switch (G__587) {
case (1):
return om.next$macros.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return om.next$macros.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args585.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next$macros.shared;},new cljs.core.Symbol("om.next$macros","shared","om.next$macros/shared",(1317261974),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"shared","shared",(1256385534),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1111),(1111),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),"Return the global shared properties of the Om Next root. See :shared and\n   :shared-fn reconciler options.",(cljs.core.truth_(om.next$macros.shared)?om.next$macros.shared.cljs$lang$test:null)])));})()
;

om.next$macros.shared.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next$macros.shared.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next$macros.shared.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next$macros.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var shared = goog.object.get(component.props,"omcljs$shared");
var ks = (function (){var G__588 = k_or_ks;
var G__588__$1 = ((!(cljs.core.sequential_QMARK_.call(null,k_or_ks)))?(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[G__588],null)):G__588);
return G__588__$1;
})();
var G__589 = shared;
var G__589__$1 = ((!(cljs.core.empty_QMARK_.call(null,ks)))?cljs.core.get_in.call(null,G__589,ks):G__589);
return G__589__$1;
});

om.next$macros.shared.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return om.next$macros.shared;},new cljs.core.Symbol("om.next$macros","shared","om.next$macros/shared",(1317261974),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"shared","shared",(1256385534),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1111),(1111),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),"Return the global shared properties of the Om Next root. See :shared and\n   :shared-fn reconciler options.",(cljs.core.truth_(om.next$macros.shared)?om.next$macros.shared.cljs$lang$test:null)]));
(function (){
om.next$macros.instrument = (function om$next$macros$instrument(component){
if(om.next$macros.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return om.next$macros.get_prop.call(null,component,"omcljs$instrument");
}); return (
new cljs.core.Var(function(){return om.next$macros.instrument;},new cljs.core.Symbol("om.next$macros","instrument","om.next$macros/instrument",(610562819),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"instrument","instrument",(679832683),null),"om/next.cljc",(17),(1),(1125),(1125),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)),null,(cljs.core.truth_(om.next$macros.instrument)?om.next$macros.instrument.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.update_props_BANG_ = (function om$next$macros$update_props_BANG_(c,next_props){
if(om.next$macros.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var G__595 = c.state;
goog.object.set(G__595,"omcljs$next$value",om.next$macros.om_props.call(null,next_props,om.next.protocols.basis_t.call(null,om.next$macros.get_reconciler.call(null,c))));

return G__595;
}); return (
new cljs.core.Var(function(){return om.next$macros.update_props_BANG_;},new cljs.core.Symbol("om.next$macros","update-props!","om.next$macros/update-props!",(-855721182),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"update-props!","update-props!",(-924872694),null),"om/next.cljc",(24),(4),(1131),(1131),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null)], null)),null,(cljs.core.truth_(om.next$macros.update_props_BANG_)?om.next$macros.update_props_BANG_.cljs$lang$test:null)])));})()
;
/**
 * Return a components props.
 */
(function (){
om.next$macros.props = (function om$next$macros$props(component){
if(om.next$macros.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return om.next$macros.unwrap.call(null,om.next$macros.props_STAR_.call(null,om.next$macros.get_props.call(null,component.props),om.next$macros.get_props.call(null,component.state)));
}); return (
new cljs.core.Var(function(){return om.next$macros.props;},new cljs.core.Symbol("om.next$macros","props","om.next$macros/props",(2028922158),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"props","props",(2093813254),null),"om/next.cljc",(15),(4),(1144),(1144),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)),"Return a components props.",(cljs.core.truth_(om.next$macros.props)?om.next$macros.props.cljs$lang$test:null)])));})()
;
/**
 * Add computed properties to props. Note will replace any pre-existing
 * computed properties.
 */
(function (){
om.next$macros.computed = (function om$next$macros$computed(props,computed_map){
if((props == null)){
return null;
} else {
if(cljs.core.vector_QMARK_.call(null,props)){
var G__598 = props;
var G__598__$1 = ((!(cljs.core.empty_QMARK_.call(null,computed_map)))?cljs.core.vary_meta.call(null,G__598,cljs.core.assoc,new cljs.core.Keyword("om.next","computed","om.next/computed",(1947886329)),computed_map):G__598);
return G__598__$1;
} else {
var G__599 = props;
var G__599__$1 = ((!(cljs.core.empty_QMARK_.call(null,computed_map)))?cljs.core.assoc.call(null,G__599,new cljs.core.Keyword("om.next","computed","om.next/computed",(1947886329)),computed_map):G__599);
return G__599__$1;
}
}
}); return (
new cljs.core.Var(function(){return om.next$macros.computed;},new cljs.core.Symbol("om.next$macros","computed","om.next$macros/computed",(85053797),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"computed","computed",(158514765),null),"om/next.cljc",(15),(1),(1157),(1157),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",(2093813254),null),new cljs.core.Symbol(null,"computed-map","computed-map",(651328426),null)], null)),"Add computed properties to props. Note will replace any pre-existing\n   computed properties.",(cljs.core.truth_(om.next$macros.computed)?om.next$macros.computed.cljs$lang$test:null)])));})()
;
/**
 * Return the computed properties on a component or its props.
 */
(function (){
om.next$macros.get_computed = (function om$next$macros$get_computed(var_args){
var args600 = [];
var len__23656__auto___605 = arguments.length;
var i__23657__auto___606 = (0);
while(true){
if((i__23657__auto___606 < len__23656__auto___605)){
args600.push((arguments[i__23657__auto___606]));

var G__607 = (i__23657__auto___606 + (1));
i__23657__auto___606 = G__607;
continue;
} else {
}
break;
}

var G__602 = args600.length;
switch (G__602) {
case (1):
return om.next$macros.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return om.next$macros.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args600.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next$macros.get_computed;},new cljs.core.Symbol("om.next$macros","get-computed","om.next$macros/get-computed",(733989640),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"get-computed","get-computed",(663761424),null),"om/next.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1168),(1168),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),"Return the computed properties on a component or its props.",(cljs.core.truth_(om.next$macros.get_computed)?om.next$macros.get_computed.cljs$lang$test:null)])));})()
;

om.next$macros.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return om.next$macros.get_computed.call(null,x,cljs.core.PersistentVector.EMPTY);
});

om.next$macros.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
if((x == null)){
return null;
} else {
var props = (function (){var G__603 = x;
var G__603__$1 = ((om.next$macros.component_QMARK_.call(null,x))?om.next$macros.props.call(null,G__603):G__603);
return G__603__$1;
})();
var ks = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","computed","om.next/computed",(1947886329))], null),(function (){var G__604 = k_or_ks;
var G__604__$1 = ((!(cljs.core.sequential_QMARK_.call(null,k_or_ks)))?(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[G__604],null)):G__604);
return G__604__$1;
})());
if(cljs.core.vector_QMARK_.call(null,props)){
return cljs.core.get_in.call(null,cljs.core.meta.call(null,props),ks);
} else {
return cljs.core.get_in.call(null,props,ks);
}
}
});

om.next$macros.get_computed.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return om.next$macros.get_computed;},new cljs.core.Symbol("om.next$macros","get-computed","om.next$macros/get-computed",(733989640),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"get-computed","get-computed",(663761424),null),"om/next.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1168),(1168),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),"Return the computed properties on a component or its props.",(cljs.core.truth_(om.next$macros.get_computed)?om.next$macros.get_computed.cljs$lang$test:null)]));
(function (){
om.next$macros.schedule_render_BANG_; return (
new cljs.core.Var(function(){return om.next$macros.schedule_render_BANG_;},new cljs.core.Symbol("om.next$macros","schedule-render!","om.next$macros/schedule-render!",(-628417203),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"schedule-render!","schedule-render!",(-559385419),null),"om/next.cljc",(26),(1),(1182),true,(1182),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros.schedule_render_BANG_)?om.next$macros.schedule_render_BANG_.cljs$lang$test:null)])));})()
;
/**
 * Set the component local state of the component. Analogous to React's
 * setState.
 */
(function (){
om.next$macros.set_state_BANG_ = (function om$next$macros$set_state_BANG_(component,new_state){
if(om.next$macros.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

if(((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.om$next$macros$ILocalState$)))?true:false):false)){
om.next$macros._set_state_BANG_.call(null,component,new_state);
} else {
goog.object.set(component.state,"omcljs$pendingState",new_state);
}

var temp__19520__auto__ = om.next$macros.get_reconciler.call(null,component);
if(cljs.core.truth_(temp__19520__auto__)){
var r = temp__19520__auto__;
om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

return om.next$macros.schedule_render_BANG_.call(null,r);
} else {
return component.forceUpdate();
}
}); return (
new cljs.core.Var(function(){return om.next$macros.set_state_BANG_;},new cljs.core.Symbol("om.next$macros","set-state!","om.next$macros/set-state!",(-1542545245),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"set-state!","set-state!",(-1204823669),null),"om/next.cljc",(20),(4),(1193),(1193),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null)], null)),"Set the component local state of the component. Analogous to React's\n   setState.",(cljs.core.truth_(om.next$macros.set_state_BANG_)?om.next$macros.set_state_BANG_.cljs$lang$test:null)])));})()
;
/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state.
 */
(function (){
om.next$macros.get_state = (function om$next$macros$get_state(var_args){
var args611 = [];
var len__23656__auto___615 = arguments.length;
var i__23657__auto___616 = (0);
while(true){
if((i__23657__auto___616 < len__23656__auto___615)){
args611.push((arguments[i__23657__auto___616]));

var G__617 = (i__23657__auto___616 + (1));
i__23657__auto___616 = G__617;
continue;
} else {
}
break;
}

var G__613 = args611.length;
switch (G__613) {
case (1):
return om.next$macros.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return om.next$macros.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args611.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next$macros.get_state;},new cljs.core.Symbol("om.next$macros","get-state","om.next$macros/get-state",(-1549692264),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"get-state","get-state",(-1081972112),null),"om/next.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1207),(1207),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),"Get a component's local state. May provide a single key or a sequential\n   collection of keys for indexed access into the component's local state.",(cljs.core.truth_(om.next$macros.get_state)?om.next$macros.get_state.cljs$lang$test:null)])));})()
;

om.next$macros.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next$macros.get_state.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next$macros.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next$macros.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = ((((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.om$next$macros$ILocalState$)))?true:false):false))?om.next$macros._get_state.call(null,component):(function (){var temp__19834__auto__ = component.state;
if(cljs.core.truth_(temp__19834__auto__)){
var state = temp__19834__auto__;
var or__20817__auto__ = goog.object.get(state,"omcljs$pendingState");
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return goog.object.get(state,"omcljs$state");
}
} else {
return null;
}
})());
return cljs.core.get_in.call(null,cst,((cljs.core.sequential_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next$macros.get_state.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return om.next$macros.get_state;},new cljs.core.Symbol("om.next$macros","get-state","om.next$macros/get-state",(-1549692264),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"get-state","get-state",(-1081972112),null),"om/next.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1207),(1207),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),"Get a component's local state. May provide a single key or a sequential\n   collection of keys for indexed access into the component's local state.",(cljs.core.truth_(om.next$macros.get_state)?om.next$macros.get_state.cljs$lang$test:null)]));
/**
 * Update a component's local state. Similar to Clojure(Script)'s swap!
 */
(function (){
om.next$macros.update_state_BANG_ = (function om$next$macros$update_state_BANG_(var_args){
var args619 = [];
var len__23656__auto___629 = arguments.length;
var i__23657__auto___630 = (0);
while(true){
if((i__23657__auto___630 < len__23656__auto___629)){
args619.push((arguments[i__23657__auto___630]));

var G__631 = (i__23657__auto___630 + (1));
i__23657__auto___630 = G__631;
continue;
} else {
}
break;
}

var G__628 = args619.length;
switch (G__628) {
case (2):
return om.next$macros.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return om.next$macros.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return om.next$macros.update_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (5):
return om.next$macros.update_state_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case (6):
return om.next$macros.update_state_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var argseq__23675__auto__ = (new cljs.core.IndexedSeq(args619.slice((6)),(0),null));
return om.next$macros.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__23675__auto__);

}
}); return (
new cljs.core.Var(function(){return om.next$macros.update_state_BANG_;},new cljs.core.Symbol("om.next$macros","update-state!","om.next$macros/update-state!",(-1271938231),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"update-state!","update-state!",(-1328622511),null),"om/next.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(6),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"arg-rest","arg-rest",(-1024311453),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null,null,null,null)], null),(1),(1223),(1223),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"arg-rest","arg-rest",(-1024311453),null)], null)),"Update a component's local state. Similar to Clojure(Script)'s swap!",(cljs.core.truth_(om.next$macros.update_state_BANG_)?om.next$macros.update_state_BANG_.cljs$lang$test:null)])));})()
;

om.next$macros.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next$macros.set_state_BANG_.call(null,component,f.call(null,om.next$macros.get_state.call(null,component)));
});

om.next$macros.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next$macros.set_state_BANG_.call(null,component,f.call(null,om.next$macros.get_state.call(null,component),arg0));
});

om.next$macros.update_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next$macros.set_state_BANG_.call(null,component,f.call(null,om.next$macros.get_state.call(null,component),arg0,arg1));
});

om.next$macros.update_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next$macros.set_state_BANG_.call(null,component,f.call(null,om.next$macros.get_state.call(null,component),arg0,arg1,arg2));
});

om.next$macros.update_state_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (component,f,arg0,arg1,arg2,arg3){
return om.next$macros.set_state_BANG_.call(null,component,f.call(null,om.next$macros.get_state.call(null,component),arg0,arg1,arg2,arg3));
});

om.next$macros.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next$macros.set_state_BANG_.call(null,component,cljs.core.apply.call(null,f,om.next$macros.get_state.call(null,component),arg0,arg1,arg2,arg3,arg_rest));
});

om.next$macros.update_state_BANG_.cljs$lang$applyTo = (function (seq620){
var G__621 = cljs.core.first.call(null,seq620);
var seq620__$1 = cljs.core.next.call(null,seq620);
var G__622 = cljs.core.first.call(null,seq620__$1);
var seq620__$2 = cljs.core.next.call(null,seq620__$1);
var G__623 = cljs.core.first.call(null,seq620__$2);
var seq620__$3 = cljs.core.next.call(null,seq620__$2);
var G__624 = cljs.core.first.call(null,seq620__$3);
var seq620__$4 = cljs.core.next.call(null,seq620__$3);
var G__625 = cljs.core.first.call(null,seq620__$4);
var seq620__$5 = cljs.core.next.call(null,seq620__$4);
var G__626 = cljs.core.first.call(null,seq620__$5);
var seq620__$6 = cljs.core.next.call(null,seq620__$5);
return om.next$macros.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__621,G__622,G__623,G__624,G__625,G__626,seq620__$6);
});

om.next$macros.update_state_BANG_.cljs$lang$maxFixedArity = (6);

new cljs.core.Var(function(){return om.next$macros.update_state_BANG_;},new cljs.core.Symbol("om.next$macros","update-state!","om.next$macros/update-state!",(-1271938231),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"update-state!","update-state!",(-1328622511),null),"om/next.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(6),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"arg-rest","arg-rest",(-1024311453),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null,null,null,null)], null),(1),(1223),(1223),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"arg-rest","arg-rest",(-1024311453),null)], null)),"Update a component's local state. Similar to Clojure(Script)'s swap!",(cljs.core.truth_(om.next$macros.update_state_BANG_)?om.next$macros.update_state_BANG_.cljs$lang$test:null)]));
/**
 * Get the rendered state of component. om.next/get-state always returns the
 * up-to-date state.
 */
(function (){
om.next$macros.get_rendered_state = (function om$next$macros$get_rendered_state(var_args){
var args633 = [];
var len__23656__auto___638 = arguments.length;
var i__23657__auto___639 = (0);
while(true){
if((i__23657__auto___639 < len__23656__auto___638)){
args633.push((arguments[i__23657__auto___639]));

var G__640 = (i__23657__auto___639 + (1));
i__23657__auto___639 = G__640;
continue;
} else {
}
break;
}

var G__635 = args633.length;
switch (G__635) {
case (1):
return om.next$macros.get_rendered_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return om.next$macros.get_rendered_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args633.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next$macros.get_rendered_state;},new cljs.core.Symbol("om.next$macros","get-rendered-state","om.next$macros/get-rendered-state",(-1877551588),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"get-rendered-state","get-rendered-state",(1815604484),null),"om/next.cljc",(25),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1239),(1239),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),"Get the rendered state of component. om.next/get-state always returns the\n   up-to-date state.",(cljs.core.truth_(om.next$macros.get_rendered_state)?om.next$macros.get_rendered_state.cljs$lang$test:null)])));})()
;

om.next$macros.get_rendered_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next$macros.get_rendered_state.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next$macros.get_rendered_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next$macros.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = ((((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.om$next$macros$ILocalState$)))?true:false):false))?om.next$macros._get_rendered_state.call(null,component):(function (){var G__637 = component;
var G__637__$1 = (((G__637 == null))?null:G__637.state);
var G__637__$2 = (((G__637__$1 == null))?null:goog.object.get(G__637__$1,"omcljs$state"));
return G__637__$2;
})());
return cljs.core.get_in.call(null,cst,((cljs.core.sequential_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next$macros.get_rendered_state.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return om.next$macros.get_rendered_state;},new cljs.core.Symbol("om.next$macros","get-rendered-state","om.next$macros/get-rendered-state",(-1877551588),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"get-rendered-state","get-rendered-state",(1815604484),null),"om/next.cljc",(25),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1239),(1239),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),"Get the rendered state of component. om.next/get-state always returns the\n   up-to-date state.",(cljs.core.truth_(om.next$macros.get_rendered_state)?om.next$macros.get_rendered_state.cljs$lang$test:null)]));
(function (){
om.next$macros.merge_pending_state_BANG_ = (function om$next$macros$merge_pending_state_BANG_(c){
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$macros$ILocalState$)))?true:false):false)){
return om.next$macros._merge_pending_state_BANG_.call(null,c);
} else {
var temp__19834__auto__ = (function (){var G__645 = c;
var G__645__$1 = (((G__645 == null))?null:G__645.state);
var G__645__$2 = (((G__645__$1 == null))?null:goog.object.get(G__645__$1,"omcljs$pendingState"));
return G__645__$2;
})();
if(cljs.core.truth_(temp__19834__auto__)){
var pending = temp__19834__auto__;
var state = c.state;
var previous = goog.object.get(state,"omcljs$state");
goog.object.remove(state,"omcljs$pendingState");

goog.object.set(state,"omcljs$previousState",previous);

return goog.object.set(state,"omcljs$state",pending);
} else {
return null;
}
}
}); return (
new cljs.core.Var(function(){return om.next$macros.merge_pending_state_BANG_;},new cljs.core.Symbol("om.next$macros","merge-pending-state!","om.next$macros/merge-pending-state!",(-398725423),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"merge-pending-state!","merge-pending-state!",(-195364935),null),"om/next.cljc",(31),(4),(1254),(1254),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(om.next$macros.merge_pending_state_BANG_)?om.next$macros.merge_pending_state_BANG_.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.react_set_state_BANG_ = (function om$next$macros$react_set_state_BANG_(var_args){
var args646 = [];
var len__23656__auto___649 = arguments.length;
var i__23657__auto___650 = (0);
while(true){
if((i__23657__auto___650 < len__23656__auto___649)){
args646.push((arguments[i__23657__auto___650]));

var G__651 = (i__23657__auto___650 + (1));
i__23657__auto___650 = G__651;
continue;
} else {
}
break;
}

var G__648 = args646.length;
switch (G__648) {
case (2):
return om.next$macros.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return om.next$macros.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args646.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next$macros.react_set_state_BANG_;},new cljs.core.Symbol("om.next$macros","react-set-state!","om.next$macros/react-set-state!",(63286061),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"react-set-state!","react-set-state!",(535085269),null),"om/next.cljc",(23),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null),new cljs.core.Symbol(null,"cb","cb",(-2064487928),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null),new cljs.core.Symbol(null,"cb","cb",(-2064487928),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1264),(1264),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null),new cljs.core.Symbol(null,"cb","cb",(-2064487928),null)], null)),null,(cljs.core.truth_(om.next$macros.react_set_state_BANG_)?om.next$macros.react_set_state_BANG_.cljs$lang$test:null)])));})()
;

om.next$macros.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return om.next$macros.react_set_state_BANG_.call(null,component,new_state,null);
});

om.next$macros.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,cb){
if(om.next$macros.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return component.setState(({"omcljs$state": new_state}),cb);
});

om.next$macros.react_set_state_BANG_.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return om.next$macros.react_set_state_BANG_;},new cljs.core.Symbol("om.next$macros","react-set-state!","om.next$macros/react-set-state!",(63286061),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"react-set-state!","react-set-state!",(535085269),null),"om/next.cljc",(23),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null),new cljs.core.Symbol(null,"cb","cb",(-2064487928),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null),new cljs.core.Symbol(null,"cb","cb",(-2064487928),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1264),(1264),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null),new cljs.core.Symbol(null,"cb","cb",(-2064487928),null)], null)),null,(cljs.core.truth_(om.next$macros.react_set_state_BANG_)?om.next$macros.react_set_state_BANG_.cljs$lang$test:null)]));
(function (){
om.next$macros.full_query; return (
new cljs.core.Var(function(){return om.next$macros.full_query;},new cljs.core.Symbol("om.next$macros","full-query","om.next$macros/full-query",(-994741113),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"full-query","full-query",(-1063894081),null),"om/next.cljc",(20),(1),(1274),true,(1274),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros.full_query)?om.next$macros.full_query.cljs$lang$test:null)])));})()
;

(function (){
om.next$macros.to_env; return (
new cljs.core.Var(function(){return om.next$macros.to_env;},new cljs.core.Symbol("om.next$macros","to-env","om.next$macros/to-env",(392703508),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"to-env","to-env",(726350092),null),"om/next.cljc",(27),(1),(1274),true,(1274),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros.to_env)?om.next$macros.to_env.cljs$lang$test:null)])));})()
;

(function (){
om.next$macros.schedule_sends_BANG_; return (
new cljs.core.Var(function(){return om.next$macros.schedule_sends_BANG_;},new cljs.core.Symbol("om.next$macros","schedule-sends!","om.next$macros/schedule-sends!",(-700043971),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"schedule-sends!","schedule-sends!",(-362167787),null),"om/next.cljc",(43),(1),(1274),true,(1274),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros.schedule_sends_BANG_)?om.next$macros.schedule_sends_BANG_.cljs$lang$test:null)])));})()
;

(function (){
om.next$macros.reconciler_QMARK_; return (
new cljs.core.Var(function(){return om.next$macros.reconciler_QMARK_;},new cljs.core.Symbol("om.next$macros","reconciler?","om.next$macros/reconciler?",(170740510),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"reconciler?","reconciler?",(250756342),null),"om/next.cljc",(55),(1),(1274),true,(1274),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros.reconciler_QMARK_)?om.next$macros.reconciler_QMARK_.cljs$lang$test:null)])));})()
;

(function (){
om.next$macros.ref__GT_components; return (
new cljs.core.Var(function(){return om.next$macros.ref__GT_components;},new cljs.core.Symbol("om.next$macros","ref->components","om.next$macros/ref->components",(1133596606),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"ref->components","ref->components",(1336944278),null),"om/next.cljc",(71),(1),(1274),true,(1274),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros.ref__GT_components)?om.next$macros.ref__GT_components.cljs$lang$test:null)])));})()
;

(function (){
om.next$macros.force; return (
new cljs.core.Var(function(){return om.next$macros.force;},new cljs.core.Symbol("om.next$macros","force","om.next$macros/force",(1815816133),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"force","force",(-1872478483),null),"om/next.cljc",(77),(1),(1274),true,(1274),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros.force)?om.next$macros.force.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.gather_sends = (function om$next$macros$gather_sends(p__653,q,remotes){
var map__660 = p__653;
var map__660__$1 = ((((!((map__660 == null)))?((((map__660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__660.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__660):map__660);
var env = map__660__$1;
var parser = cljs.core.get.call(null,map__660__$1,new cljs.core.Keyword(null,"parser","parser",(-1543495310)));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,((function (map__660,map__660__$1,env,parser){
return (function (p1__68_SHARP_){
return (new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__68_SHARP_,parser.call(null,env,q,p1__68_SHARP_)],null));
});})(map__660,map__660__$1,env,parser))
),cljs.core.filter.call(null,((function (map__660,map__660__$1,env,parser){
return (function (p__662){
var vec__663 = p__662;
var _ = cljs.core.nth.call(null,vec__663,(0),null);
var v = cljs.core.nth.call(null,vec__663,(1),null);
return (cljs.core.count.call(null,v) > (0));
});})(map__660,map__660__$1,env,parser))
)),remotes);
}); return (
new cljs.core.Var(function(){return om.next$macros.gather_sends;},new cljs.core.Symbol("om.next$macros","gather-sends","om.next$macros/gather-sends",(1139035021),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"gather-sends","gather-sends",(2114265957),null),"om/next.cljc",(19),(1),(1276),(1276),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parser","parser",(97036217),null)], null)], null),new cljs.core.Symbol(null,"q","q",(-1965434072),null),new cljs.core.Symbol(null,"remotes","remotes",(-1522069457),null)], null)),null,(cljs.core.truth_(om.next$macros.gather_sends)?om.next$macros.gather_sends.cljs$lang$test:null)])));})()
;
/**
 * Given r (a reconciler) and a query expression including a mutation and
 * any simple reads, return the equivalent query expression where the simple
 * reads have been replaced by the full query for each component that cares about
 * the specified read.
 */
(function (){
om.next$macros.transform_reads = (function om$next$macros$transform_reads(r,tx){
if(cljs.core.truth_(new cljs.core.Keyword(null,"easy-reads","easy-reads",(803667467)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",(994861415)).cljs$core$IFn$_invoke$arity$1(r)))){
var with_target = (function om$next$macros$transform_reads_$_with_target(target,q){
if(!((target == null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next$macros.force.call(null,cljs.core.first.call(null,q),target)], null);
} else {
return q;
}
});
var add_focused_query = (function om$next$macros$transform_reads_$_add_focused_query(k,target,tx__$1,c){
var transformed = om.next$macros.full_query.call(null,c,with_target.call(null,target,om.next$macros.focus_query.call(null,om.next$macros.get_query.call(null,c),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))));
return cljs.core.into.call(null,tx__$1,cljs.core.remove.call(null,cljs.core.set.call(null,tx__$1)),transformed);
});
var exprs = cljs.core.seq.call(null,tx);
var tx_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first.call(null,exprs);
var ast = om.next.impl.parser.expr__GT_ast.call(null,expr);
var key = new cljs.core.Keyword(null,"key","key",(-1516042587)).cljs$core$IFn$_invoke$arity$1(ast);
var tgt = new cljs.core.Keyword(null,"target","target",(253001721)).cljs$core$IFn$_invoke$arity$1(ast);
if((key instanceof cljs.core.Keyword)){
var cs = om.next$macros.ref__GT_components.call(null,r,key);
var G__668 = cljs.core.next.call(null,exprs);
var G__669 = cljs.core.reduce.call(null,((function (exprs,tx_SINGLEQUOTE_,cs,expr,ast,key,tgt){
return (function (p1__69_SHARP_,p2__70_SHARP_){
return add_focused_query.call(null,key,tgt,p1__69_SHARP_,p2__70_SHARP_);
});})(exprs,tx_SINGLEQUOTE_,cs,expr,ast,key,tgt))
,(function (){var G__667 = tx_SINGLEQUOTE_;
var G__667__$1 = ((cljs.core.empty_QMARK_.call(null,cs))?cljs.core.conj.call(null,G__667,expr):G__667);
return G__667__$1;
})(),cs);
exprs = G__668;
tx_SINGLEQUOTE_ = G__669;
continue;
} else {
var G__670 = cljs.core.next.call(null,exprs);
var G__671 = cljs.core.conj.call(null,tx_SINGLEQUOTE_,expr);
exprs = G__670;
tx_SINGLEQUOTE_ = G__671;
continue;
}
} else {
return tx_SINGLEQUOTE_;
}
break;
}
} else {
return tx;
}
}); return (
new cljs.core.Var(function(){return om.next$macros.transform_reads;},new cljs.core.Symbol("om.next$macros","transform-reads","om.next$macros/transform-reads",(1976361910),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"transform-reads","transform-reads",(1911294686),null),"om/next.cljc",(22),(1),(1284),(1284),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null)),"Given r (a reconciler) and a query expression including a mutation and\n   any simple reads, return the equivalent query expression where the simple\n   reads have been replaced by the full query for each component that cares about\n   the specified read.",(cljs.core.truth_(om.next$macros.transform_reads)?om.next$macros.transform_reads.cljs$lang$test:null)])));})()
;
/**
 * Change the query of a component. Takes a map containing :params and/or
 * :query. :params should be a map of new bindings and :query should be a query
 * expression. Will schedule a re-render as well as remote re-sends if
 * necessary.
 */
(function (){
om.next$macros.set_query_BANG_ = (function om$next$macros$set_query_BANG_(var_args){
var args672 = [];
var len__23656__auto___679 = arguments.length;
var i__23657__auto___680 = (0);
while(true){
if((i__23657__auto___680 < len__23656__auto___679)){
args672.push((arguments[i__23657__auto___680]));

var G__681 = (i__23657__auto___680 + (1));
i__23657__auto___680 = G__681;
continue;
} else {
}
break;
}

var G__674 = args672.length;
switch (G__674) {
case (2):
return om.next$macros.set_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return om.next$macros.set_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args672.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next$macros.set_query_BANG_;},new cljs.core.Symbol("om.next$macros","set-query!","om.next$macros/set-query!",(-1684531810),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"set-query!","set-query!",(-1619444602),null),"om/next.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"params&query","params&query",(329623383),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)], null),new cljs.core.Symbol(null,"reads","reads",(425464166),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"params&query","params&query",(329623383),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)], null),new cljs.core.Symbol(null,"reads","reads",(425464166),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1316),(1316),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"params&query","params&query",(329623383),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)], null),new cljs.core.Symbol(null,"reads","reads",(425464166),null)], null)),"Change the query of a component. Takes a map containing :params and/or\n   :query. :params should be a map of new bindings and :query should be a query\n   expression. Will schedule a re-render as well as remote re-sends if\n   necessary.",(cljs.core.truth_(om.next$macros.set_query_BANG_)?om.next$macros.set_query_BANG_.cljs$lang$test:null)])));})()
;

om.next$macros.set_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,params_AMPERSAND_query){
return om.next$macros.set_query_BANG_.call(null,x,params_AMPERSAND_query,null);
});

om.next$macros.set_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,p__675,reads){
var map__676 = p__675;
var map__676__$1 = ((((!((map__676 == null)))?((((map__676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__676.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__676):map__676);
var query = cljs.core.get.call(null,map__676__$1,new cljs.core.Keyword(null,"query","query",(-1288509510)));
var params = cljs.core.get.call(null,map__676__$1,new cljs.core.Keyword(null,"params","params",(710516235)));
if(cljs.core.truth_((function (){var or__20817__auto__ = om.next$macros.reconciler_QMARK_.call(null,x);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return om.next$macros.component_QMARK_.call(null,x);
}
})())){
} else {
throw (new Error("Assert failed: (or (reconciler? x) (component? x))"));
}

if((!((params == null))) || (!((query == null)))){
} else {
throw (new Error("Assert failed: (or (not (nil? params)) (not (nil? query)))"));
}

if(((reads == null)) || (cljs.core.vector_QMARK_.call(null,reads))){
} else {
throw (new Error("Assert failed: (or (nil? reads) (vector? reads))"));
}

var r = ((om.next$macros.component_QMARK_.call(null,x))?om.next$macros.get_reconciler.call(null,x):x);
var c = ((om.next$macros.component_QMARK_.call(null,x))?x:null);
var root = new cljs.core.Keyword(null,"root","root",(-448657453)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(r)));
var cfg = new cljs.core.Keyword(null,"config","config",(994861415)).cljs$core$IFn$_invoke$arity$1(r);
var st = new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid.call(null);
new cljs.core.Keyword(null,"history","history",(-247395220)).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,st));

var temp__19834__auto___683 = new cljs.core.Keyword(null,"logger","logger",(-220675947)).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__19834__auto___683)){
var l_684 = temp__19834__auto___683;
goog.log.info(l_684,[cljs.core.str((function (){var temp__19834__auto____$1 = ((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$macros$Ident$)))?true:false):false))?om.next$macros.ident.call(null,c,om.next$macros.props.call(null,c)):null);
if(cljs.core.truth_(temp__19834__auto____$1)){
var ident = temp__19834__auto____$1;
return [cljs.core.str(cljs.core.pr_str.call(null,ident)),cljs.core.str(" ")].join('');
} else {
return null;
}
})()),cljs.core.str((cljs.core.truth_(om.next$macros.reconciler_QMARK_.call(null,x))?"reconciler ":null)),cljs.core.str((cljs.core.truth_(query)?(function (){


return ", ";
})()
:null)),cljs.core.str((cljs.core.truth_(params)?(function (){


return " ";
})()
:null)),cljs.core.str(cljs.core.pr_str.call(null,id))].join(''));
} else {
}

cljs.core.swap_BANG_.call(null,st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",(-22717146)),(function (){var or__20817__auto__ = c;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return root;
}
})()], null),cljs.core.merge,cljs.core.merge.call(null,(cljs.core.truth_(query)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",(-1288509510)),query], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",(710516235)),params], null):null)));

if((!((c == null))) && ((reads == null))){
om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
} else {
}

if((reads == null)){
} else {
om.next.protocols.queue_BANG_.call(null,r,reads);
}

om.next.protocols.reindex_BANG_.call(null,r);

var rootq_685 = ((!((c == null)))?om.next$macros.full_query.call(null,c):(((reads == null))?om.next$macros.get_query.call(null,root):null));
var sends_686 = om.next$macros.gather_sends.call(null,om.next$macros.to_env.call(null,cfg),cljs.core.into.call(null,(function (){var or__20817__auto__ = rootq_685;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),om.next$macros.transform_reads.call(null,r,reads)),new cljs.core.Keyword(null,"remotes","remotes",(1132366312)).cljs$core$IFn$_invoke$arity$1(cfg));
if(cljs.core.empty_QMARK_.call(null,sends_686)){
} else {
om.next.protocols.queue_sends_BANG_.call(null,r,sends_686);

om.next$macros.schedule_sends_BANG_.call(null,r);
}

return null;
});

om.next$macros.set_query_BANG_.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return om.next$macros.set_query_BANG_;},new cljs.core.Symbol("om.next$macros","set-query!","om.next$macros/set-query!",(-1684531810),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"set-query!","set-query!",(-1619444602),null),"om/next.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"params&query","params&query",(329623383),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)], null),new cljs.core.Symbol(null,"reads","reads",(425464166),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"params&query","params&query",(329623383),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)], null),new cljs.core.Symbol(null,"reads","reads",(425464166),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1316),(1316),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"params&query","params&query",(329623383),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)], null),new cljs.core.Symbol(null,"reads","reads",(425464166),null)], null)),"Change the query of a component. Takes a map containing :params and/or\n   :query. :params should be a map of new bindings and :query should be a query\n   expression. Will schedule a re-render as well as remote re-sends if\n   necessary.",(cljs.core.truth_(om.next$macros.set_query_BANG_)?om.next$macros.set_query_BANG_.cljs$lang$test:null)]));
/**
 * Update a component's query and query parameters with a function.
 */
(function (){
om.next$macros.update_query_BANG_ = (function om$next$macros$update_query_BANG_(var_args){
var args687 = [];
var len__23656__auto___697 = arguments.length;
var i__23657__auto___698 = (0);
while(true){
if((i__23657__auto___698 < len__23656__auto___697)){
args687.push((arguments[i__23657__auto___698]));

var G__699 = (i__23657__auto___698 + (1));
i__23657__auto___698 = G__699;
continue;
} else {
}
break;
}

var G__696 = args687.length;
switch (G__696) {
case (2):
return om.next$macros.update_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return om.next$macros.update_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return om.next$macros.update_query_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (5):
return om.next$macros.update_query_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__23675__auto__ = (new cljs.core.IndexedSeq(args687.slice((6)),(0),null));
return om.next$macros.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__23675__auto__);

}
}); return (
new cljs.core.Var(function(){return om.next$macros.update_query_BANG_;},new cljs.core.Symbol("om.next$macros","update-query!","om.next$macros/update-query!",(-1154956279),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"update-query!","update-query!",(-1492656879),null),"om/next.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(6),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"arg-rest","arg-rest",(-1024311453),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null,null,null)], null),(1),(1368),(1368),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"arg-rest","arg-rest",(-1024311453),null)], null)),"Update a component's query and query parameters with a function.",(cljs.core.truth_(om.next$macros.update_query_BANG_)?om.next$macros.update_query_BANG_.cljs$lang$test:null)])));})()
;

om.next$macros.update_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next$macros.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",(710516235)),om.next$macros.get_params.call(null,component),new cljs.core.Keyword(null,"query","query",(-1288509510)),om.next$macros.get_unbound_query.call(null,component)], null)));
});

om.next$macros.update_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next$macros.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",(710516235)),om.next$macros.get_params.call(null,component),new cljs.core.Keyword(null,"query","query",(-1288509510)),om.next$macros.get_unbound_query.call(null,component)], null),arg0));
});

om.next$macros.update_query_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next$macros.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",(710516235)),om.next$macros.get_params.call(null,component),new cljs.core.Keyword(null,"query","query",(-1288509510)),om.next$macros.get_unbound_query.call(null,component)], null),arg0,arg1));
});

om.next$macros.update_query_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next$macros.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",(710516235)),om.next$macros.get_params.call(null,component),new cljs.core.Keyword(null,"query","query",(-1288509510)),om.next$macros.get_unbound_query.call(null,component)], null),arg0,arg1,arg2));
});

om.next$macros.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next$macros.set_query_BANG_.call(null,component,cljs.core.apply.call(null,f,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",(710516235)),om.next$macros.get_params.call(null,component),new cljs.core.Keyword(null,"query","query",(-1288509510)),om.next$macros.get_unbound_query.call(null,component)], null),arg0,arg1,arg2,arg3,arg_rest));
});

om.next$macros.update_query_BANG_.cljs$lang$applyTo = (function (seq688){
var G__689 = cljs.core.first.call(null,seq688);
var seq688__$1 = cljs.core.next.call(null,seq688);
var G__690 = cljs.core.first.call(null,seq688__$1);
var seq688__$2 = cljs.core.next.call(null,seq688__$1);
var G__691 = cljs.core.first.call(null,seq688__$2);
var seq688__$3 = cljs.core.next.call(null,seq688__$2);
var G__692 = cljs.core.first.call(null,seq688__$3);
var seq688__$4 = cljs.core.next.call(null,seq688__$3);
var G__693 = cljs.core.first.call(null,seq688__$4);
var seq688__$5 = cljs.core.next.call(null,seq688__$4);
var G__694 = cljs.core.first.call(null,seq688__$5);
var seq688__$6 = cljs.core.next.call(null,seq688__$5);
return om.next$macros.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__689,G__690,G__691,G__692,G__693,G__694,seq688__$6);
});

om.next$macros.update_query_BANG_.cljs$lang$maxFixedArity = (6);

new cljs.core.Var(function(){return om.next$macros.update_query_BANG_;},new cljs.core.Symbol("om.next$macros","update-query!","om.next$macros/update-query!",(-1154956279),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"update-query!","update-query!",(-1492656879),null),"om/next.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(6),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"arg-rest","arg-rest",(-1024311453),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null,null,null)], null),(1),(1368),(1368),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"arg-rest","arg-rest",(-1024311453),null)], null)),"Update a component's query and query parameters with a function.",(cljs.core.truth_(om.next$macros.update_query_BANG_)?om.next$macros.update_query_BANG_.cljs$lang$test:null)]));
/**
 * Returns true if the component is mounted.
 */
(function (){
om.next$macros.mounted_QMARK_ = (function om$next$macros$mounted_QMARK_(x){
return (om.next$macros.component_QMARK_.call(null,x)) && (x.isMounted());
}); return (
new cljs.core.Var(function(){return om.next$macros.mounted_QMARK_;},new cljs.core.Symbol("om.next$macros","mounted?","om.next$macros/mounted?",(-2011858953),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"mounted?","mounted?",(-1942321009),null),"om/next.cljc",(15),(1),(1395),(1395),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Returns true if the component is mounted.",((om.next$macros.mounted_QMARK_)?om.next$macros.mounted_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Returns the component associated with a component's React ref.
 */
(function (){
om.next$macros.react_ref = (function om$next$macros$react_ref(component,name){
var G__702 = component.refs;
var G__702__$1 = (((G__702 == null))?null:goog.object.get(G__702,name));
return G__702__$1;
}); return (
new cljs.core.Var(function(){return om.next$macros.react_ref;},new cljs.core.Symbol("om.next$macros","react-ref","om.next$macros/react-ref",(-310444491),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"react-ref","react-ref",(-513960099),null),"om/next.cljc",(16),(1),(1402),(1402),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"name","name",(-810760592),null)], null)),"Returns the component associated with a component's React ref.",(cljs.core.truth_(om.next$macros.react_ref)?om.next$macros.react_ref.cljs$lang$test:null)])));})()
;
/**
 * Returns the component's children.
 */
(function (){
om.next$macros.children = (function om$next$macros$children(component){
return component.props.children;
}); return (
new cljs.core.Var(function(){return om.next$macros.children;},new cljs.core.Symbol("om.next$macros","children","om.next$macros/children",(358177137),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"children","children",(699969545),null),"om/next.cljc",(15),(1),(1408),(1408),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)),"Returns the component's children.",(cljs.core.truth_(om.next$macros.children)?om.next$macros.children.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.update_component_BANG_ = (function om$next$macros$update_component_BANG_(c,next_props){
if(om.next$macros.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

om.next$macros.update_props_BANG_.call(null,c,next_props);

return c.forceUpdate();
}); return (
new cljs.core.Var(function(){return om.next$macros.update_component_BANG_;},new cljs.core.Symbol("om.next$macros","update-component!","om.next$macros/update-component!",(1314246431),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"update-component!","update-component!",(1249179655),null),"om/next.cljc",(28),(4),(1415),(1415),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null)], null)),null,(cljs.core.truth_(om.next$macros.update_component_BANG_)?om.next$macros.update_component_BANG_.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.should_update_QMARK_ = (function om$next$macros$should_update_QMARK_(var_args){
var args703 = [];
var len__23656__auto___706 = arguments.length;
var i__23657__auto___707 = (0);
while(true){
if((i__23657__auto___707 < len__23656__auto___706)){
args703.push((arguments[i__23657__auto___707]));

var G__708 = (i__23657__auto___707 + (1));
i__23657__auto___707 = G__708;
continue;
} else {
}
break;
}

var G__705 = args703.length;
switch (G__705) {
case (2):
return om.next$macros.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return om.next$macros.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args703.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next$macros.should_update_QMARK_;},new cljs.core.Symbol("om.next$macros","should-update?","om.next$macros/should-update?",(-1278203838),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"should-update?","should-update?",(-1343008342),null),"om/next.cljc",(24),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null),new cljs.core.Symbol(null,"next-state","next-state",(211803275),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null),new cljs.core.Symbol(null,"next-state","next-state",(211803275),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(4),(1421),(1421),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null),new cljs.core.Symbol(null,"next-state","next-state",(211803275),null)], null)),null,(cljs.core.truth_(om.next$macros.should_update_QMARK_)?om.next$macros.should_update_QMARK_.cljs$lang$test:null)])));})()
;

om.next$macros.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,next_props){
return om.next$macros.should_update_QMARK_.call(null,c,next_props,null);
});

om.next$macros.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (c,next_props,next_state){
if(om.next$macros.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return c.shouldComponentUpdate(({"omcljs$value": next_props}),({"omcljs$state": next_state}));
});

om.next$macros.should_update_QMARK_.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return om.next$macros.should_update_QMARK_;},new cljs.core.Symbol("om.next$macros","should-update?","om.next$macros/should-update?",(-1278203838),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"should-update?","should-update?",(-1343008342),null),"om/next.cljc",(24),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null),new cljs.core.Symbol(null,"next-state","next-state",(211803275),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null),new cljs.core.Symbol(null,"next-state","next-state",(211803275),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(4),(1421),(1421),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null),new cljs.core.Symbol(null,"next-state","next-state",(211803275),null)], null)),null,(cljs.core.truth_(om.next$macros.should_update_QMARK_)?om.next$macros.should_update_QMARK_.cljs$lang$test:null)]));
/**
 * Return the raw component class path associated with a component. Contains
 * duplicates for recursive component trees.
 */
(function (){
om.next$macros.raw_class_path = (function om$next$macros$raw_class_path(c){
var c__$1 = c;
var ret = (function (){var x__23399__auto__ = om.next$macros.react_type.call(null,c__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})();
while(true){
var temp__19520__auto__ = om.next$macros.parent.call(null,c__$1);
if(cljs.core.truth_(temp__19520__auto__)){
var p = temp__19520__auto__;
if(om.next$macros.iquery_QMARK_.call(null,p)){
var G__710 = p;
var G__711 = cljs.core.cons.call(null,om.next$macros.react_type.call(null,p),ret);
c__$1 = G__710;
ret = G__711;
continue;
} else {
var G__712 = p;
var G__713 = ret;
c__$1 = G__712;
ret = G__713;
continue;
}
} else {
return ret;
}
break;
}
}); return (
new cljs.core.Var(function(){return om.next$macros.raw_class_path;},new cljs.core.Symbol("om.next$macros","raw-class-path","om.next$macros/raw-class-path",(-1743356765),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"raw-class-path","raw-class-path",(-1644787829),null),"om/next.cljc",(22),(1),(1430),(1430),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),"Return the raw component class path associated with a component. Contains\n   duplicates for recursive component trees.",(cljs.core.truth_(om.next$macros.raw_class_path)?om.next$macros.raw_class_path.cljs$lang$test:null)])));})()
;
/**
 * Return the component class path associated with a component.
 */
(function (){
om.next$macros.class_path = (function om$next$macros$class_path(c){
if(om.next$macros.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var raw_cp = om.next$macros.raw_class_path.call(null,c);
var cp = cljs.core.seq.call(null,raw_cp);
var ret = cljs.core.PersistentVector.EMPTY;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cp){
var c__$1 = cljs.core.first.call(null,cp);
if(cljs.core.contains_QMARK_.call(null,seen,c__$1)){
var G__714 = cljs.core.next.call(null,cp);
var G__715 = ret;
var G__716 = seen;
cp = G__714;
ret = G__715;
seen = G__716;
continue;
} else {
var G__717 = cljs.core.next.call(null,cp);
var G__718 = cljs.core.conj.call(null,ret,c__$1);
var G__719 = cljs.core.conj.call(null,seen,c__$1);
cp = G__717;
ret = G__718;
seen = G__719;
continue;
}
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
}); return (
new cljs.core.Var(function(){return om.next$macros.class_path;},new cljs.core.Symbol("om.next$macros","class-path","om.next$macros/class-path",(-73640419),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"class-path","class-path",(-126000779),null),"om/next.cljc",(17),(1),(1441),(1441),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),"Return the component class path associated with a component.",(cljs.core.truth_(om.next$macros.class_path)?om.next$macros.class_path.cljs$lang$test:null)])));})()
;
/**
 * Returns true if a component's classpath is recursive
 */
(function (){
om.next$macros.recursive_class_path_QMARK_ = (function om$next$macros$recursive_class_path_QMARK_(c){
if(om.next$macros.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,om.next$macros.raw_class_path.call(null,c)));
}); return (
new cljs.core.Var(function(){return om.next$macros.recursive_class_path_QMARK_;},new cljs.core.Symbol("om.next$macros","recursive-class-path?","om.next$macros/recursive-class-path?",(-1354829631),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"recursive-class-path?","recursive-class-path?",(-1411393495),null),"om/next.cljc",(29),(1),(1454),(1454),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),"Returns true if a component's classpath is recursive",((om.next$macros.recursive_class_path_QMARK_)?om.next$macros.recursive_class_path_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Given a class or mounted component x and a ref to an instantiated component
 * or class that defines a subquery, pick the most specific subquery. If the
 * component is mounted subquery-ref will be used, subquery-class otherwise.
 */
(function (){
om.next$macros.subquery = (function om$next$macros$subquery(x,subquery_ref,subquery_class){
if(((subquery_ref instanceof cljs.core.Keyword)) || (typeof subquery_ref === 'string')){
} else {
throw (new Error("Assert failed: (or (keyword? subquery-ref) (string? subquery-ref))"));
}

if(cljs.core.fn_QMARK_.call(null,subquery_class)){
} else {
throw (new Error("Assert failed: (fn? subquery-class)"));
}

var ref = (function (){var G__721 = subquery_ref;
var G__721__$1 = (((subquery_ref instanceof cljs.core.Keyword))?[cljs.core.str(G__721)].join(''):G__721);
return G__721__$1;
})();
if((om.next$macros.component_QMARK_.call(null,x)) && (om.next$macros.mounted_QMARK_.call(null,x))){
return om.next$macros.get_query.call(null,om.next$macros.react_ref.call(null,x,ref));
} else {
return om.next$macros.get_query.call(null,subquery_class);
}
}); return (
new cljs.core.Var(function(){return om.next$macros.subquery;},new cljs.core.Symbol("om.next$macros","subquery","om.next$macros/subquery",(659800116),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"subquery","subquery",(997383004),null),"om/next.cljc",(15),(1),(1461),(1461),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"subquery-ref","subquery-ref",(1353295365),null),new cljs.core.Symbol(null,"subquery-class","subquery-class",(-917164088),null)], null)),"Given a class or mounted component x and a ref to an instantiated component\n   or class that defines a subquery, pick the most specific subquery. If the\n   component is mounted subquery-ref will be used, subquery-class otherwise.",(cljs.core.truth_(om.next$macros.subquery)?om.next$macros.subquery.cljs$lang$test:null)])));})()
;
/**
 * Given a mounted component with assigned props, return the ident for the
 * component.
 */
(function (){
om.next$macros.get_ident = (function om$next$macros$get_ident(x){
if(om.next$macros.component_QMARK_.call(null,x)){
} else {
throw (new Error("Assert failed: (component? x)"));
}

var m = om.next$macros.props.call(null,x);
if(!((m == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("get-ident invoked on component with nil props"),cljs.core.str("\n"),cljs.core.str("(not (nil? m))")].join('')));
}

return om.next$macros.ident.call(null,x,m);
}); return (
new cljs.core.Var(function(){return om.next$macros.get_ident;},new cljs.core.Symbol("om.next$macros","get-ident","om.next$macros/get-ident",(62709666),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"get-ident","get-ident",(1063069322),null),"om/next.cljc",(16),(1),(1473),(1473),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Given a mounted component with assigned props, return the ident for the\n   component.",(cljs.core.truth_(om.next$macros.get_ident)?om.next$macros.get_ident.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.reconciler_QMARK_; return (
new cljs.core.Var(function(){return om.next$macros.reconciler_QMARK_;},new cljs.core.Symbol("om.next$macros","reconciler?","om.next$macros/reconciler?",(170740510),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"reconciler?","reconciler?",(250756342),null),"om/next.cljc",(21),(1),(1485),true,(1485),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros.reconciler_QMARK_)?om.next$macros.reconciler_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.basis_t = (function om$next$macros$basis_t(reconciler){
return om.next.protocols.basis_t.call(null,reconciler);
}); return (
new cljs.core.Var(function(){return om.next$macros.basis_t;},new cljs.core.Symbol("om.next$macros","basis-t","om.next$macros/basis-t",(184677149),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"basis-t","basis-t",(216455797),null),"om/next.cljc",(15),(1),(1487),(1487),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null)], null)),null,(cljs.core.truth_(om.next$macros.basis_t)?om.next$macros.basis_t.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.queue_render_BANG_ = (function om$next$macros$queue_render_BANG_(f){
if(cljs.core.fn_QMARK_.call(null,om.next$macros._STAR_raf_STAR_)){
return om.next$macros._STAR_raf_STAR_.call(null,f);
} else {
if(!(typeof requestAnimationFrame !== 'undefined')){
return setTimeout(f,(16));
} else {
return requestAnimationFrame(f);

}
}
}); return (
new cljs.core.Var(function(){return om.next$macros.queue_render_BANG_;},new cljs.core.Symbol("om.next$macros","queue-render!","om.next$macros/queue-render!",(2078888051),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"queue-render!","queue-render!",(2009627499),null),"om/next.cljc",(24),(4),(1491),(1491),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),null,(cljs.core.truth_(om.next$macros.queue_render_BANG_)?om.next$macros.queue_render_BANG_.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.schedule_render_BANG_ = (function om$next$macros$schedule_render_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_render_BANG_.call(null,reconciler))){
return om.next$macros.queue_render_BANG_.call(null,(function (){
return om.next.protocols.reconcile_BANG_.call(null,reconciler);
}));
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return om.next$macros.schedule_render_BANG_;},new cljs.core.Symbol("om.next$macros","schedule-render!","om.next$macros/schedule-render!",(-628417203),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"schedule-render!","schedule-render!",(-559385419),null),"om/next.cljc",(26),(4),(1502),(1502),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null)], null)),null,(cljs.core.truth_(om.next$macros.schedule_render_BANG_)?om.next$macros.schedule_render_BANG_.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.schedule_sends_BANG_ = (function om$next$macros$schedule_sends_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_sends_BANG_.call(null,reconciler))){
return setTimeout((function (){
return om.next.protocols.send_BANG_.call(null,reconciler);
}),(0));
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return om.next$macros.schedule_sends_BANG_;},new cljs.core.Symbol("om.next$macros","schedule-sends!","om.next$macros/schedule-sends!",(-700043971),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"schedule-sends!","schedule-sends!",(-362167787),null),"om/next.cljc",(22),(1),(1506),(1506),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null)], null)),null,(cljs.core.truth_(om.next$macros.schedule_sends_BANG_)?om.next$macros.schedule_sends_BANG_.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.remove_root_BANG_; return (
new cljs.core.Var(function(){return om.next$macros.remove_root_BANG_;},new cljs.core.Symbol("om.next$macros","remove-root!","om.next$macros/remove-root!",(-1989636347),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"remove-root!","remove-root!",(-1924159939),null),"om/next.cljc",(22),(1),(1511),true,(1511),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next$macros.remove_root_BANG_)?om.next$macros.remove_root_BANG_.cljs$lang$test:null)])));})()
;
/**
 * Given a root component class and a target root DOM node, instantiate and
 * render the root class using the reconciler's :state property. The reconciler
 * will continue to observe changes to :state and keep the target node in sync.
 * Note a reconciler may have only one root. If invoked on a reconciler with an
 * existing root, the new root will replace the old one.
 */
(function (){
om.next$macros.add_root_BANG_ = (function om$next$macros$add_root_BANG_(var_args){
var args722 = [];
var len__23656__auto___725 = arguments.length;
var i__23657__auto___726 = (0);
while(true){
if((i__23657__auto___726 < len__23656__auto___725)){
args722.push((arguments[i__23657__auto___726]));

var G__727 = (i__23657__auto___726 + (1));
i__23657__auto___726 = G__727;
continue;
} else {
}
break;
}

var G__724 = args722.length;
switch (G__724) {
case (3):
return om.next$macros.add_root_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return om.next$macros.add_root_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args722.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next$macros.add_root_BANG_;},new cljs.core.Symbol("om.next$macros","add-root!","om.next$macros/add-root!",(748024126),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"add-root!","add-root!",(-789260266),null),"om/next.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"root-class","root-class",(1372859229),null),new cljs.core.Symbol(null,"target","target",(1893533248),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"root-class","root-class",(1372859229),null),new cljs.core.Symbol(null,"target","target",(1893533248),null),new cljs.core.Symbol(null,"options","options",(1740170016),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"root-class","root-class",(1372859229),null),new cljs.core.Symbol(null,"target","target",(1893533248),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"root-class","root-class",(1372859229),null),new cljs.core.Symbol(null,"target","target",(1893533248),null),new cljs.core.Symbol(null,"options","options",(1740170016),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1513),(1513),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"root-class","root-class",(1372859229),null),new cljs.core.Symbol(null,"target","target",(1893533248),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"root-class","root-class",(1372859229),null),new cljs.core.Symbol(null,"target","target",(1893533248),null),new cljs.core.Symbol(null,"options","options",(1740170016),null)], null)),"Given a root component class and a target root DOM node, instantiate and\n   render the root class using the reconciler's :state property. The reconciler\n   will continue to observe changes to :state and keep the target node in sync.\n   Note a reconciler may have only one root. If invoked on a reconciler with an\n   existing root, the new root will replace the old one.",(cljs.core.truth_(om.next$macros.add_root_BANG_)?om.next$macros.add_root_BANG_.cljs$lang$test:null)])));})()
;

om.next$macros.add_root_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,root_class,target){
return om.next$macros.add_root_BANG_.call(null,reconciler,root_class,target,null);
});

om.next$macros.add_root_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,root_class,target,options){
if(cljs.core.truth_(om.next$macros.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

if(cljs.core.fn_QMARK_.call(null,root_class)){
} else {
throw (new Error("Assert failed: (fn? root-class)"));
}

var temp__19834__auto___729 = cljs.core.get.call(null,cljs.core.deref.call(null,om.next$macros.roots),target);
if(cljs.core.truth_(temp__19834__auto___729)){
var old_reconciler_730 = temp__19834__auto___729;
om.next$macros.remove_root_BANG_.call(null,old_reconciler_730,target);
} else {
}

cljs.core.swap_BANG_.call(null,om.next$macros.roots,cljs.core.assoc,target,reconciler);

return om.next.protocols.add_root_BANG_.call(null,reconciler,root_class,target,options);
});

om.next$macros.add_root_BANG_.cljs$lang$maxFixedArity = (4);

new cljs.core.Var(function(){return om.next$macros.add_root_BANG_;},new cljs.core.Symbol("om.next$macros","add-root!","om.next$macros/add-root!",(748024126),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"add-root!","add-root!",(-789260266),null),"om/next.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"root-class","root-class",(1372859229),null),new cljs.core.Symbol(null,"target","target",(1893533248),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"root-class","root-class",(1372859229),null),new cljs.core.Symbol(null,"target","target",(1893533248),null),new cljs.core.Symbol(null,"options","options",(1740170016),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"root-class","root-class",(1372859229),null),new cljs.core.Symbol(null,"target","target",(1893533248),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"root-class","root-class",(1372859229),null),new cljs.core.Symbol(null,"target","target",(1893533248),null),new cljs.core.Symbol(null,"options","options",(1740170016),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1513),(1513),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"root-class","root-class",(1372859229),null),new cljs.core.Symbol(null,"target","target",(1893533248),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"root-class","root-class",(1372859229),null),new cljs.core.Symbol(null,"target","target",(1893533248),null),new cljs.core.Symbol(null,"options","options",(1740170016),null)], null)),"Given a root component class and a target root DOM node, instantiate and\n   render the root class using the reconciler's :state property. The reconciler\n   will continue to observe changes to :state and keep the target node in sync.\n   Note a reconciler may have only one root. If invoked on a reconciler with an\n   existing root, the new root will replace the old one.",(cljs.core.truth_(om.next$macros.add_root_BANG_)?om.next$macros.add_root_BANG_.cljs$lang$test:null)]));
/**
 * Remove a root target (a DOM element) from a reconciler. The reconciler will
 * no longer attempt to reconcile application state with the specified root.
 */
(function (){
om.next$macros.remove_root_BANG_ = (function om$next$macros$remove_root_BANG_(reconciler,target){
return om.next.protocols.remove_root_BANG_.call(null,reconciler,target);
}); return (
new cljs.core.Var(function(){return om.next$macros.remove_root_BANG_;},new cljs.core.Symbol("om.next$macros","remove-root!","om.next$macros/remove-root!",(-1989636347),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"remove-root!","remove-root!",(-1924159939),null),"om/next.cljc",(19),(1),(1528),(1528),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"target","target",(1893533248),null)], null)),"Remove a root target (a DOM element) from a reconciler. The reconciler will\n   no longer attempt to reconcile application state with the specified root.",(cljs.core.truth_(om.next$macros.remove_root_BANG_)?om.next$macros.remove_root_BANG_.cljs$lang$test:null)])));})()
;

/**
 * @interface
 */
(function (){
om.next$macros.ITxIntercept = function(){}; return (
new cljs.core.Var(function(){return om.next$macros.ITxIntercept;},new cljs.core.Symbol("om.next$macros","ITxIntercept","om.next$macros/ITxIntercept",(1243732043),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"ITxIntercept","ITxIntercept",(1992475043),null),"om/next.cljc",(26),(1),(1537),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"tx-intercept","tx-intercept",(1300167208),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An optional protocol that component may implement to intercept child\n     transactions."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null)], null)], true, false)], null),(1537),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(om.next$macros.ITxIntercept)?om.next$macros.ITxIntercept.cljs$lang$test:null)])));})()
;

/**
 * An optional protocol that component may implement to intercept child
 *   transactions.
 */
(function (){
om.next$macros.tx_intercept = (function om$next$macros$tx_intercept(c,tx){
if((!((c == null))) && (!((c.om$next$macros$ITxIntercept$tx_intercept$arity$2 == null)))){
return c.om$next$macros$ITxIntercept$tx_intercept$arity$2(c,tx);
} else {
var x__23054__auto__ = (((c == null))?null:c);
var m__23055__auto__ = (om.next$macros.tx_intercept[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,c,tx);
} else {
var m__23055__auto____$1 = (om.next$macros.tx_intercept["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,c,tx);
} else {
throw cljs.core.missing_protocol.call(null,"ITxIntercept.tx-intercept",c);
}
}
}
}); return (
new cljs.core.Var(function(){return om.next$macros.tx_intercept;},new cljs.core.Symbol("om.next$macros","tx-intercept","om.next$macros/tx-intercept",(1230901952),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("om.next$macros","ITxIntercept","om.next$macros/ITxIntercept",(1243732043),null),new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"tx-intercept","tx-intercept",(1300167208),null),"om/next.cljc",(16),(1),(1537),(1538),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null)),"An optional protocol that component may implement to intercept child\n     transactions.",(cljs.core.truth_(om.next$macros.tx_intercept)?om.next$macros.tx_intercept.cljs$lang$test:null)])));})()
;

(function (){
om.next$macros.to_env = (function om$next$macros$to_env(x){
var config = (cljs.core.truth_(om.next$macros.reconciler_QMARK_.call(null,x))?new cljs.core.Keyword(null,"config","config",(994861415)).cljs$core$IFn$_invoke$arity$1(x):x);
return cljs.core.select_keys.call(null,config,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",(-1988618099)),new cljs.core.Keyword(null,"shared","shared",(-384145993)),new cljs.core.Keyword(null,"parser","parser",(-1543495310)),new cljs.core.Keyword(null,"logger","logger",(-220675947)),new cljs.core.Keyword(null,"pathopt","pathopt",(-61073149))], null));
}); return (
new cljs.core.Var(function(){return om.next$macros.to_env;},new cljs.core.Symbol("om.next$macros","to-env","om.next$macros/to-env",(392703508),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"to-env","to-env",(726350092),null),"om/next.cljc",(14),(1),(1542),(1542),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(om.next$macros.to_env)?om.next$macros.to_env.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.transact_STAR_ = (function om$next$macros$transact_STAR_(r,c,ref,tx){
var cfg = new cljs.core.Keyword(null,"config","config",(994861415)).cljs$core$IFn$_invoke$arity$1(r);
var ref__$1 = (cljs.core.truth_((function (){var and__20770__auto__ = c;
if(cljs.core.truth_(and__20770__auto__)){
var and__20770__auto____$1 = ((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$macros$Ident$)))?true:false):false);
if(and__20770__auto____$1){
return cljs.core.not.call(null,ref);
} else {
return and__20770__auto____$1;
}
} else {
return and__20770__auto__;
}
})())?om.next$macros.ident.call(null,c,om.next$macros.props.call(null,c)):ref);
var env = cljs.core.merge.call(null,om.next$macros.to_env.call(null,cfg),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reconciler","reconciler",(-1832826966)),r,new cljs.core.Keyword(null,"component","component",(1555936782)),c], null),(cljs.core.truth_(ref__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",(1289896967)),ref__$1], null):null));
var id = cljs.core.random_uuid.call(null);
var _ = new cljs.core.Keyword(null,"history","history",(-247395220)).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(cfg)));
var ___$1 = (function (){var temp__19834__auto__ = new cljs.core.Keyword(null,"logger","logger",(-220675947)).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__19834__auto__)){
var l = temp__19834__auto__;
return goog.log.info(l,[cljs.core.str((cljs.core.truth_(ref__$1)?[cljs.core.str(cljs.core.pr_str.call(null,ref__$1)),cljs.core.str(" ")].join(''):null)),cljs.core.str("transacted '"),cljs.core.str(tx),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.call(null,id))].join(''));
} else {
return null;
}
})();
var v = new cljs.core.Keyword(null,"parser","parser",(-1543495310)).cljs$core$IFn$_invoke$arity$1(cfg).call(null,env,tx);
var snds = om.next$macros.gather_sends.call(null,env,tx,new cljs.core.Keyword(null,"remotes","remotes",(1132366312)).cljs$core$IFn$_invoke$arity$1(cfg));
var q = (function (){var G__736 = cljs.core.PersistentVector.EMPTY;
var G__736__$1 = ((!((c == null)))?cljs.core.conj.call(null,G__736,c):G__736);
var G__736__$2 = ((!((ref__$1 == null)))?cljs.core.conj.call(null,G__736__$1,ref__$1):G__736__$1);
return G__736__$2;
})();
om.next.protocols.queue_BANG_.call(null,r,cljs.core.into.call(null,q,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,v)));

if(cljs.core.empty_QMARK_.call(null,snds)){
} else {
om.next.protocols.queue_sends_BANG_.call(null,r,snds);

om.next$macros.schedule_sends_BANG_.call(null,r);
}

return v;
}); return (
new cljs.core.Var(function(){return om.next$macros.transact_STAR_;},new cljs.core.Symbol("om.next$macros","transact*","om.next$macros/transact*",(-2056131872),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"transact*","transact*",(-2125282824),null),"om/next.cljc",(16),(1),(1546),(1546),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"ref","ref",(-1364538802),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null)),null,(cljs.core.truth_(om.next$macros.transact_STAR_)?om.next$macros.transact_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Given a query expression annotate all mutations by adding a :mutator -> ident
 * entry to the metadata of each mutation expression in the query.
 */
(function (){
om.next$macros.annotate_mutations = (function om$next$macros$annotate_mutations(tx,ident){
var annotate = (function om$next$macros$annotate_mutations_$_annotate(expr,ident__$1){
var G__744 = expr;
var G__744__$1 = ((om.util.mutation_QMARK_.call(null,expr))?cljs.core.vary_meta.call(null,G__744,cljs.core.assoc,new cljs.core.Keyword(null,"mutator","mutator",(-1326825366)),ident__$1):G__744);
return G__744__$1;
});
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__71_SHARP_){
return annotate.call(null,p1__71_SHARP_,ident);
})),tx);
}); return (
new cljs.core.Var(function(){return om.next$macros.annotate_mutations;},new cljs.core.Symbol("om.next$macros","annotate-mutations","om.next$macros/annotate-mutations",(-1620441767),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"annotate-mutations","annotate-mutations",(-1689578911),null),"om/next.cljc",(25),(1),(1576),(1576),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tx","tx",(2107161945),null),new cljs.core.Symbol(null,"ident","ident",(1639789181),null)], null)),"Given a query expression annotate all mutations by adding a :mutator -> ident\n   entry to the metadata of each mutation expression in the query.",(cljs.core.truth_(om.next$macros.annotate_mutations)?om.next$macros.annotate_mutations.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.some_iquery_QMARK_ = (function om$next$macros$some_iquery_QMARK_(c){
var c__$1 = c;
while(true){
if((c__$1 == null)){
return false;
} else {
if(om.next$macros.iquery_QMARK_.call(null,c__$1)){
return true;
} else {
var G__745 = om.next$macros.parent.call(null,c__$1);
c__$1 = G__745;
continue;

}
}
break;
}
}); return (
new cljs.core.Var(function(){return om.next$macros.some_iquery_QMARK_;},new cljs.core.Symbol("om.next$macros","some-iquery?","om.next$macros/some-iquery?",(-1467197308),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"some-iquery?","some-iquery?",(-1402113108),null),"om/next.cljc",(19),(1),(1585),(1585),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(om.next$macros.some_iquery_QMARK_)?om.next$macros.some_iquery_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Given a reconciler or component run a transaction. tx is a parse expression
 * that should include mutations followed by any necessary read. The reads will
 * be used to trigger component re-rendering.
 * 
 * Example:
 * 
 *   (om/transact! widget
 *     '[(do/this!) (do/that!)
 *       :read/this :read/that])
 */
(function (){
om.next$macros.transact_BANG_ = (function om$next$macros$transact_BANG_(var_args){
var args746 = [];
var len__23656__auto___756 = arguments.length;
var i__23657__auto___757 = (0);
while(true){
if((i__23657__auto___757 < len__23656__auto___756)){
args746.push((arguments[i__23657__auto___757]));

var G__758 = (i__23657__auto___757 + (1));
i__23657__auto___757 = G__758;
continue;
} else {
}
break;
}

var G__748 = args746.length;
switch (G__748) {
case (2):
return om.next$macros.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return om.next$macros.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args746.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next$macros.transact_BANG_;},new cljs.core.Symbol("om.next$macros","transact!","om.next$macros/transact!",(929145517),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"transact!","transact!",(817805717),null),"om/next.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"ref","ref",(-1364538802),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"ref","ref",(-1364538802),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1592),(1592),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"ref","ref",(-1364538802),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null)),"Given a reconciler or component run a transaction. tx is a parse expression\n   that should include mutations followed by any necessary read. The reads will\n   be used to trigger component re-rendering.\n\n   Example:\n\n     (om/transact! widget\n       '[(do/this!) (do/that!)\n         :read/this :read/that])",(cljs.core.truth_(om.next$macros.transact_BANG_)?om.next$macros.transact_BANG_.cljs$lang$test:null)])));})()
;

om.next$macros.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,tx){
if(cljs.core.truth_((function (){var or__20817__auto__ = om.next$macros.component_QMARK_.call(null,x);
if(or__20817__auto__){
return or__20817__auto__;
} else {
return om.next$macros.reconciler_QMARK_.call(null,x);
}
})())){
} else {
throw (new Error("Assert failed: (or (component? x) (reconciler? x))"));
}

if(cljs.core.vector_QMARK_.call(null,tx)){
} else {
throw (new Error("Assert failed: (vector? tx)"));
}

var tx__$1 = (function (){var G__749 = tx;
var G__749__$1 = (((function (){var and__20770__auto__ = om.next$macros.component_QMARK_.call(null,x);
if(and__20770__auto__){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$next$macros$Ident$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.next$macros.Ident,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.next$macros.Ident,x);
}
} else {
return and__20770__auto__;
}
})())?om.next$macros.annotate_mutations.call(null,G__749,om.next$macros.get_ident.call(null,x)):G__749);
return G__749__$1;
})();
if(cljs.core.truth_(om.next$macros.reconciler_QMARK_.call(null,x))){
return om.next$macros.transact_STAR_.call(null,x,null,null,tx__$1);
} else {
if(!(om.next$macros.iquery_QMARK_.call(null,x))){
om.next$macros.invariant.call(null,om.next$macros.some_iquery_QMARK_.call(null,x),[cljs.core.str("transact! should be called on a component"),cljs.core.str("that implements IQuery or has a parent that"),cljs.core.str("implements IQuery")].join(''));

return om.next$macros.transact_STAR_.call(null,om.next$macros.get_reconciler.call(null,x),null,null,tx__$1);
} else {
var p = om.next$macros.parent.call(null,x);
var x__$1 = x;
var tx__$2 = tx__$1;
while(true){
if((p == null)){
var r = om.next$macros.get_reconciler.call(null,x__$1);
return om.next$macros.transact_STAR_.call(null,r,x__$1,null,om.next$macros.transform_reads.call(null,r,tx__$2));
} else {
var vec__752 = ((((!((p == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === p.om$next$macros$ITxIntercept$)))?true:false):false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,om.next$macros.tx_intercept.call(null,p,tx__$2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,tx__$2], null));
var x_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__752,(0),null);
var tx__$3 = cljs.core.nth.call(null,vec__752,(1),null);
var G__760 = om.next$macros.parent.call(null,p);
var G__761 = x_SINGLEQUOTE_;
var G__762 = tx__$3;
p = G__760;
x__$1 = G__761;
tx__$2 = G__762;
continue;
}
break;
}

}
}
});

om.next$macros.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (r,ref,tx){
return om.next$macros.transact_STAR_.call(null,r,null,ref,tx);
});

om.next$macros.transact_BANG_.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return om.next$macros.transact_BANG_;},new cljs.core.Symbol("om.next$macros","transact!","om.next$macros/transact!",(929145517),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"transact!","transact!",(817805717),null),"om/next.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"ref","ref",(-1364538802),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"ref","ref",(-1364538802),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1592),(1592),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"ref","ref",(-1364538802),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null)),"Given a reconciler or component run a transaction. tx is a parse expression\n   that should include mutations followed by any necessary read. The reads will\n   be used to trigger component re-rendering.\n\n   Example:\n\n     (om/transact! widget\n       '[(do/this!) (do/that!)\n         :read/this :read/that])",(cljs.core.truth_(om.next$macros.transact_BANG_)?om.next$macros.transact_BANG_.cljs$lang$test:null)]));
/**
 * Create a parser. The argument is a map of two keys, :read and :mutate. Both
 * functions should have the signature (Env -> Key -> Params -> ParseResult).
 */
(function (){
om.next$macros.parser = (function om$next$macros$parser(p__763){
var map__766 = p__763;
var map__766__$1 = ((((!((map__766 == null)))?((((map__766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__766.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__766):map__766);
var opts = map__766__$1;
var mutate = cljs.core.get.call(null,map__766__$1,new cljs.core.Keyword(null,"mutate","mutate",(1422419038)));
var read = cljs.core.get.call(null,map__766__$1,new cljs.core.Keyword(null,"read","read",(1140058661)));
if(cljs.core.map_QMARK_.call(null,opts)){
} else {
throw (new Error("Assert failed: (map? opts)"));
}

return om.next.impl.parser.parser.call(null,opts);
}); return (
new cljs.core.Var(function(){return om.next$macros.parser;},new cljs.core.Symbol("om.next$macros","parser","om.next$macros/parser",(28029089),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"parser","parser",(97036217),null),"om/next.cljc",(13),(1),(1633),(1633),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",(-1514377108),null),new cljs.core.Symbol(null,"mutate","mutate",(-1232016731),null)], null)], null)], null)),"Create a parser. The argument is a map of two keys, :read and :mutate. Both\n   functions should have the signature (Env -> Key -> Params -> ParseResult).",(cljs.core.truth_(om.next$macros.parser)?om.next$macros.parser.cljs$lang$test:null)])));})()
;
/**
 * Helper function for implementing :read and :mutate as multimethods. Use this
 * as the dispatch-fn.
 */
(function (){
om.next$macros.dispatch = (function om$next$macros$dispatch(_,key,___$1){
return key;
}); return (
new cljs.core.Var(function(){return om.next$macros.dispatch;},new cljs.core.Symbol("om.next$macros","dispatch","om.next$macros/dispatch",(-1270015344),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"dispatch","dispatch",(-1335098760),null),"om/next.cljc",(15),(1),(1640),(1640),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",(-1201019570),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"_","_",(-1201019570),null)], null)),"Helper function for implementing :read and :mutate as multimethods. Use this\n   as the dispatch-fn.",(cljs.core.truth_(om.next$macros.dispatch)?om.next$macros.dispatch.cljs$lang$test:null)])));})()
;
/**
 * Given a query expression convert it into an AST.
 */
(function (){
om.next$macros.query__GT_ast = (function om$next$macros$query__GT_ast(query_expr){
return om.next.impl.parser.query__GT_ast.call(null,query_expr);
}); return (
new cljs.core.Var(function(){return om.next$macros.query__GT_ast;},new cljs.core.Symbol("om.next$macros","query->ast","om.next$macros/query->ast",(2137859837),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"query->ast","query->ast",(1930047957),null),"om/next.cljc",(17),(1),(1645),(1645),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-expr","query-expr",(-350123470),null)], null)),"Given a query expression convert it into an AST.",(cljs.core.truth_(om.next$macros.query__GT_ast)?om.next$macros.query__GT_ast.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.ast__GT_query = (function om$next$macros$ast__GT_query(query_ast){

return om.next.impl.parser.ast__GT_expr.call(null,query_ast,true);
}); return (
new cljs.core.Var(function(){return om.next$macros.ast__GT_query;},new cljs.core.Symbol("om.next$macros","ast->query","om.next$macros/ast->query",(-1107244446),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"ast->query","ast->query",(-1167645878),null),"om/next.cljc",(17),(1),(1650),(1650),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-ast","query-ast",(2074073495),null)], null)),null,(cljs.core.truth_(om.next$macros.ast__GT_query)?om.next$macros.ast__GT_query.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.get_dispatch_key = (function om$next$macros$get_dispatch_key(prop){
var G__769 = prop;
var G__769__$1 = (((!(om.util.ident_QMARK_.call(null,prop))) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,prop),new cljs.core.Symbol(null,"_","_",(-1201019570),null))))?cljs.core.comp.call(null,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",(733619510)),om.next.impl.parser.expr__GT_ast).call(null,G__769):G__769);
return G__769__$1;
}); return (
new cljs.core.Var(function(){return om.next$macros.get_dispatch_key;},new cljs.core.Symbol("om.next$macros","get-dispatch-key","om.next$macros/get-dispatch-key",(573442069),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"get-dispatch-key","get-dispatch-key",(-556853379),null),"om/next.cljc",(24),(1),(1654),(1654),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prop","prop",(1125363195),null)], null)),null,(cljs.core.truth_(om.next$macros.get_dispatch_key)?om.next$macros.get_dispatch_key.cljs$lang$test:null)])));})()
;
/**
 * Cascades a query up the classpath. class-path->query is a map of classpaths
 * to their queries. classpath is the classpath where we start cascading (typically
 * the direct parent's classpath of the component changing query). data-path is
 * the data path in the classpath's query to the new query. new-query is the
 * query to be applied to the classpaths. union-keys are any keys into union
 * queries found during index building; they are used to access union queries
 * when cascading the classpath, and to generate the classpaths' rendered-paths,
 * which skip these keys.
 */
(function (){
om.next$macros.cascade_query = (function om$next$macros$cascade_query(class_path__GT_query,classpath,data_path,new_query,union_keys){
var cp = classpath;
var data_path__$1 = data_path;
var new_query__$1 = new_query;
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!(cljs.core.empty_QMARK_.call(null,cp))){
var rendered_data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys)),data_path__$1);
var filter_data_path = (function (){var G__771 = rendered_data_path;
var G__771__$1 = ((!(cljs.core.empty_QMARK_.call(null,rendered_data_path)))?cljs.core.pop.call(null,G__771):G__771);
return G__771__$1;
})();
var qs = cljs.core.filter.call(null,((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path){
return (function (p1__72_SHARP_){
return cljs.core._EQ_.call(null,filter_data_path,om.next$macros.focus__GT_path.call(null,clojure.zip.root.call(null,p1__72_SHARP_),filter_data_path));
});})(cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path))
,cljs.core.get.call(null,class_path__GT_query,cp));
var qs_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path,qs){
return (function (q){
var new_query__$2 = (cljs.core.truth_((function (){var or__20817__auto__ = cljs.core.map_QMARK_.call(null,clojure.zip.node.call(null,q));
if(or__20817__auto__){
return or__20817__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cljs.core.peek.call(null,data_path__$1)], true),union_keys);
}
})())?(function (){var union_key = cljs.core.peek.call(null,data_path__$1);
return cljs.core.assoc.call(null,clojure.zip.node.call(null,om.next$macros.query_template.call(null,clojure.zip.root.call(null,q),rendered_data_path)),union_key,new_query__$1);
})():new_query__$1);
return om.next$macros.query_template.call(null,om.next$macros.focus_query.call(null,om.next$macros.replace.call(null,om.next$macros.query_template.call(null,clojure.zip.root.call(null,q),rendered_data_path),new_query__$2),filter_data_path),filter_data_path);
});})(cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path,qs))
),qs);
var G__772 = cljs.core.pop.call(null,cp);
var G__773 = cljs.core.pop.call(null,data_path__$1);
var G__774 = clojure.zip.node.call(null,cljs.core.first.call(null,qs_SINGLEQUOTE_));
var G__775 = cljs.core.assoc.call(null,ret,cp,qs_SINGLEQUOTE_);
cp = G__772;
data_path__$1 = G__773;
new_query__$1 = G__774;
ret = G__775;
continue;
} else {
return ret;
}
break;
}
}); return (
new cljs.core.Var(function(){return om.next$macros.cascade_query;},new cljs.core.Symbol("om.next$macros","cascade-query","om.next$macros/cascade-query",(1844617335),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"cascade-query","cascade-query",(1775482719),null),"om/next.cljc",(21),(1),(1663),(1663),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class-path->query","class-path->query",(417937827),null),new cljs.core.Symbol(null,"classpath","classpath",(1940053512),null),new cljs.core.Symbol(null,"data-path","data-path",(-1979633588),null),new cljs.core.Symbol(null,"new-query","new-query",(-438810452),null),new cljs.core.Symbol(null,"union-keys","union-keys",(785717794),null)], null)),"Cascades a query up the classpath. class-path->query is a map of classpaths\n   to their queries. classpath is the classpath where we start cascading (typically\n   the direct parent's classpath of the component changing query). data-path is\n   the data path in the classpath's query to the new query. new-query is the\n   query to be applied to the classpaths. union-keys are any keys into union\n   queries found during index building; they are used to access union queries\n   when cascading the classpath, and to generate the classpaths' rendered-paths,\n   which skip these keys.",(cljs.core.truth_(om.next$macros.cascade_query)?om.next$macros.cascade_query.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IIndexer}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next$macros.Indexer = (function (indexes,extfs,__meta,__extmap,__hash){
this.indexes = indexes;
this.extfs = extfs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065266934;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next$macros.Indexer.prototype.om$next$protocols$IIndexer$ = cljs.core.PROTOCOL_SENTINEL;

om.next$macros.Indexer.prototype.om$next$protocols$IIndexer$index_root$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var prop__GT_classes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var class_path__GT_query = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var rootq = om.next$macros.get_query.call(null,x);
var root_class = (function (){var G__779 = x;
var G__779__$1 = ((om.next$macros.component_QMARK_.call(null,x))?om.next$macros.react_type.call(null,G__779):G__779);
return G__779__$1;
})();
var build_index_STAR_ = ((function (prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function om$next$macros$build_index_STAR_(class$,query,path,classpath,union_expr,union_keys){
om.next$macros.invariant.call(null,(!(om.next$macros.iquery_QMARK_.call(null,class$))) || ((om.next$macros.iquery_QMARK_.call(null,class$)) && (!(cljs.core.empty_QMARK_.call(null,query)))),[cljs.core.str("`IQuery` implementation must return a non-empty query."),cljs.core.str(" Check the `IQuery` implementation of component `"),cljs.core.str(((om.next$macros.component_QMARK_.call(null,class$))?class$.constructor.displayName:class$.prototype.constructor.displayName)),cljs.core.str("`.")].join(''));

var recursive_QMARK_ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([class$], true),classpath);
var classpath__$1 = (function (){var G__861 = classpath;
var G__861__$1 = (((!((class$ == null))) && (cljs.core.not.call(null,recursive_QMARK_)))?cljs.core.conj.call(null,G__861,class$):G__861);
return G__861__$1;
})();
var dp__GT_cs = cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.indexes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",(-1244619750))], null));
if(cljs.core.truth_(class$)){
var root_query_896 = ((cljs.core.empty_QMARK_.call(null,path))?rootq:clojure.zip.root.call(null,cljs.core.first.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,class_path__GT_query),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_class], null)))));
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classpath__$1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),om.next$macros.query_template.call(null,om.next$macros.focus_query.call(null,root_query_896,path),path));
} else {
}

var recursive_join_QMARK_ = (function (){var and__20770__auto__ = recursive_QMARK_;
if(cljs.core.truth_(and__20770__auto__)){
var and__20770__auto____$1 = cljs.core.some.call(null,((function (and__20770__auto__,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (e){
var and__20770__auto____$1 = om.util.join_QMARK_.call(null,e);
if(cljs.core.truth_(and__20770__auto____$1)){
return !(om.util.recursion_QMARK_.call(null,om.util.join_value.call(null,e)));
} else {
return and__20770__auto____$1;
}
});})(and__20770__auto__,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,query);
if(cljs.core.truth_(and__20770__auto____$1)){
return cljs.core._EQ_.call(null,cljs.core.distinct.call(null,path),path);
} else {
return and__20770__auto____$1;
}
} else {
return and__20770__auto__;
}
})();
var recursive_union_QMARK_ = (function (){var and__20770__auto__ = recursive_QMARK_;
if(cljs.core.truth_(and__20770__auto__)){
var and__20770__auto____$1 = union_expr;
if(cljs.core.truth_(and__20770__auto____$1)){
return cljs.core._EQ_.call(null,cljs.core.distinct.call(null,path),path);
} else {
return and__20770__auto____$1;
}
} else {
return and__20770__auto__;
}
})();
if(cljs.core.truth_((function (){var or__20817__auto__ = cljs.core.not.call(null,recursive_QMARK_);
if(or__20817__auto__){
return or__20817__auto__;
} else {
var or__20817__auto____$1 = recursive_join_QMARK_;
if(cljs.core.truth_(or__20817__auto____$1)){
return or__20817__auto____$1;
} else {
return recursive_union_QMARK_;
}
}
})())){
if(cljs.core.vector_QMARK_.call(null,query)){
var map__862 = cljs.core.group_by.call(null,om.util.join_QMARK_,query);
var map__862__$1 = ((((!((map__862 == null)))?((((map__862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__862):map__862);
var props = cljs.core.get.call(null,map__862__$1,false);
var joins = cljs.core.get.call(null,map__862__$1,true);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (map__862,map__862__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__73_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__73_SHARP_,cljs.core.zipmap.call(null,cljs.core.map.call(null,om.next$macros.get_dispatch_key,props),cljs.core.repeat.call(null,cljs.core.PersistentHashSet.fromArray([class$], true))));
});})(map__862,map__862__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

var seq__864 = cljs.core.seq.call(null,joins);
var chunk__865 = null;
var count__866 = (0);
var i__867 = (0);
while(true){
if((i__867 < count__866)){
var join = cljs.core._nth.call(null,chunk__865,i__867);
var vec__868_897 = om.util.join_entry.call(null,join);
var prop_898 = cljs.core.nth.call(null,vec__868_897,(0),null);
var query_SINGLEQUOTE__899 = cljs.core.nth.call(null,vec__868_897,(1),null);
var prop_dispatch_key_900 = om.next$macros.get_dispatch_key.call(null,prop_898);
var recursion_QMARK__901 = om.util.recursion_QMARK_.call(null,query_SINGLEQUOTE__899);
var union_recursion_QMARK__902 = (function (){var and__20770__auto__ = recursion_QMARK__901;
if(and__20770__auto__){
return union_expr;
} else {
return and__20770__auto__;
}
})();
var query_SINGLEQUOTE__903__$1 = ((recursion_QMARK__901)?((!((union_expr == null)))?union_expr:query):query_SINGLEQUOTE__899);
var path_SINGLEQUOTE__904 = cljs.core.conj.call(null,path,prop_898);
var rendered_path_SINGLEQUOTE__905 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys),path_SINGLEQUOTE__904));
var cs_906 = cljs.core.get.call(null,dp__GT_cs,rendered_path_SINGLEQUOTE__905);
var cascade_query_QMARK__907 = (cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_906),(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"component","component",(1555936782)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__903__$1)),om.next$macros.react_type.call(null,cljs.core.first.call(null,cs_906)))) && (!(cljs.core.map_QMARK_.call(null,query_SINGLEQUOTE__903__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__908 = ((cascade_query_QMARK__907)?om.next$macros.get_query.call(null,cljs.core.first.call(null,cs_906)):query_SINGLEQUOTE__903__$1);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__864,chunk__865,count__866,i__867,vec__868_897,prop_898,query_SINGLEQUOTE__899,prop_dispatch_key_900,recursion_QMARK__901,union_recursion_QMARK__902,query_SINGLEQUOTE__903__$1,path_SINGLEQUOTE__904,rendered_path_SINGLEQUOTE__905,cs_906,cascade_query_QMARK__907,query_SINGLEQUOTE__SINGLEQUOTE__908,join,map__862,map__862__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__74_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__74_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_dispatch_key_900,cljs.core.PersistentHashSet.fromArray([class$], true)], true, false));
});})(seq__864,chunk__865,count__866,i__867,vec__868_897,prop_898,query_SINGLEQUOTE__899,prop_dispatch_key_900,recursion_QMARK__901,union_recursion_QMARK__902,query_SINGLEQUOTE__903__$1,path_SINGLEQUOTE__904,rendered_path_SINGLEQUOTE__905,cs_906,cascade_query_QMARK__907,query_SINGLEQUOTE__SINGLEQUOTE__908,join,map__862,map__862__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

if((cascade_query_QMARK__907) && (cljs.core.not_EQ_.call(null,query_SINGLEQUOTE__903__$1,query_SINGLEQUOTE__SINGLEQUOTE__908))){
var cp__GT_q_SINGLEQUOTE__909 = om.next$macros.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1,path_SINGLEQUOTE__904,query_SINGLEQUOTE__SINGLEQUOTE__908,union_keys);
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__909);
} else {
}

var class_SINGLEQUOTE__910 = new cljs.core.Keyword(null,"component","component",(1555936782)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__SINGLEQUOTE__908));
if((recursion_QMARK__901) && ((class_SINGLEQUOTE__910 == null))){
} else {
om$next$macros$build_index_STAR_.call(null,class_SINGLEQUOTE__910,query_SINGLEQUOTE__SINGLEQUOTE__908,path_SINGLEQUOTE__904,classpath__$1,((recursion_QMARK__901)?union_expr:null),union_keys);
}

var G__911 = seq__864;
var G__912 = chunk__865;
var G__913 = count__866;
var G__914 = (i__867 + (1));
seq__864 = G__911;
chunk__865 = G__912;
count__866 = G__913;
i__867 = G__914;
continue;
} else {
var temp__19834__auto__ = cljs.core.seq.call(null,seq__864);
if(temp__19834__auto__){
var seq__864__$1 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__864__$1)){
var c__23363__auto__ = cljs.core.chunk_first.call(null,seq__864__$1);
var G__915 = cljs.core.chunk_rest.call(null,seq__864__$1);
var G__916 = c__23363__auto__;
var G__917 = cljs.core.count.call(null,c__23363__auto__);
var G__918 = (0);
seq__864 = G__915;
chunk__865 = G__916;
count__866 = G__917;
i__867 = G__918;
continue;
} else {
var join = cljs.core.first.call(null,seq__864__$1);
var vec__871_919 = om.util.join_entry.call(null,join);
var prop_920 = cljs.core.nth.call(null,vec__871_919,(0),null);
var query_SINGLEQUOTE__921 = cljs.core.nth.call(null,vec__871_919,(1),null);
var prop_dispatch_key_922 = om.next$macros.get_dispatch_key.call(null,prop_920);
var recursion_QMARK__923 = om.util.recursion_QMARK_.call(null,query_SINGLEQUOTE__921);
var union_recursion_QMARK__924 = (function (){var and__20770__auto__ = recursion_QMARK__923;
if(and__20770__auto__){
return union_expr;
} else {
return and__20770__auto__;
}
})();
var query_SINGLEQUOTE__925__$1 = ((recursion_QMARK__923)?((!((union_expr == null)))?union_expr:query):query_SINGLEQUOTE__921);
var path_SINGLEQUOTE__926 = cljs.core.conj.call(null,path,prop_920);
var rendered_path_SINGLEQUOTE__927 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys),path_SINGLEQUOTE__926));
var cs_928 = cljs.core.get.call(null,dp__GT_cs,rendered_path_SINGLEQUOTE__927);
var cascade_query_QMARK__929 = (cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_928),(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"component","component",(1555936782)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__925__$1)),om.next$macros.react_type.call(null,cljs.core.first.call(null,cs_928)))) && (!(cljs.core.map_QMARK_.call(null,query_SINGLEQUOTE__925__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__930 = ((cascade_query_QMARK__929)?om.next$macros.get_query.call(null,cljs.core.first.call(null,cs_928)):query_SINGLEQUOTE__925__$1);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__864,chunk__865,count__866,i__867,vec__871_919,prop_920,query_SINGLEQUOTE__921,prop_dispatch_key_922,recursion_QMARK__923,union_recursion_QMARK__924,query_SINGLEQUOTE__925__$1,path_SINGLEQUOTE__926,rendered_path_SINGLEQUOTE__927,cs_928,cascade_query_QMARK__929,query_SINGLEQUOTE__SINGLEQUOTE__930,join,seq__864__$1,temp__19834__auto__,map__862,map__862__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__74_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__74_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_dispatch_key_922,cljs.core.PersistentHashSet.fromArray([class$], true)], true, false));
});})(seq__864,chunk__865,count__866,i__867,vec__871_919,prop_920,query_SINGLEQUOTE__921,prop_dispatch_key_922,recursion_QMARK__923,union_recursion_QMARK__924,query_SINGLEQUOTE__925__$1,path_SINGLEQUOTE__926,rendered_path_SINGLEQUOTE__927,cs_928,cascade_query_QMARK__929,query_SINGLEQUOTE__SINGLEQUOTE__930,join,seq__864__$1,temp__19834__auto__,map__862,map__862__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

if((cascade_query_QMARK__929) && (cljs.core.not_EQ_.call(null,query_SINGLEQUOTE__925__$1,query_SINGLEQUOTE__SINGLEQUOTE__930))){
var cp__GT_q_SINGLEQUOTE__931 = om.next$macros.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1,path_SINGLEQUOTE__926,query_SINGLEQUOTE__SINGLEQUOTE__930,union_keys);
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__931);
} else {
}

var class_SINGLEQUOTE__932 = new cljs.core.Keyword(null,"component","component",(1555936782)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__SINGLEQUOTE__930));
if((recursion_QMARK__923) && ((class_SINGLEQUOTE__932 == null))){
} else {
om$next$macros$build_index_STAR_.call(null,class_SINGLEQUOTE__932,query_SINGLEQUOTE__SINGLEQUOTE__930,path_SINGLEQUOTE__926,classpath__$1,((recursion_QMARK__923)?union_expr:null),union_keys);
}

var G__933 = cljs.core.next.call(null,seq__864__$1);
var G__934 = null;
var G__935 = (0);
var G__936 = (0);
seq__864 = G__933;
chunk__865 = G__934;
count__866 = G__935;
i__867 = G__936;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.map_QMARK_.call(null,query)){
var seq__874 = cljs.core.seq.call(null,query);
var chunk__875 = null;
var count__876 = (0);
var i__877 = (0);
while(true){
if((i__877 < count__876)){
var vec__878 = cljs.core._nth.call(null,chunk__875,i__877);
var prop = cljs.core.nth.call(null,vec__878,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__878,(1),null);
var path_SINGLEQUOTE__937 = cljs.core.conj.call(null,path,prop);
var class_SINGLEQUOTE__938 = new cljs.core.Keyword(null,"component","component",(1555936782)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE_));
var cs_939 = cljs.core.filter.call(null,((function (seq__874,chunk__875,count__876,i__877,path_SINGLEQUOTE__937,class_SINGLEQUOTE__938,vec__878,prop,query_SINGLEQUOTE_,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__75_SHARP_){
return cljs.core._EQ_.call(null,class_SINGLEQUOTE__938,om.next$macros.react_type.call(null,p1__75_SHARP_));
});})(seq__874,chunk__875,count__876,i__877,path_SINGLEQUOTE__937,class_SINGLEQUOTE__938,vec__878,prop,query_SINGLEQUOTE_,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,cljs.core.get.call(null,dp__GT_cs,path));
var cascade_query_QMARK__940 = (function (){var and__20770__auto__ = class_SINGLEQUOTE__938;
if(cljs.core.truth_(and__20770__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_939),(1));
} else {
return and__20770__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__941 = (cljs.core.truth_(cascade_query_QMARK__940)?om.next$macros.get_query.call(null,cljs.core.first.call(null,cs_939)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__20770__auto__ = cascade_query_QMARK__940;
if(cljs.core.truth_(and__20770__auto__)){
return cljs.core.not_EQ_.call(null,query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__941);
} else {
return and__20770__auto__;
}
})())){
var qs_942 = cljs.core.get.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1);
var q_943 = cljs.core.first.call(null,qs_942);
var qnode_944 = clojure.zip.node.call(null,(function (){var G__881 = q_943;
var G__881__$1 = (((class$ == null))?om.next$macros.query_template.call(null,G__881,path):G__881);
return G__881__$1;
})());
var new_query_945 = cljs.core.assoc.call(null,qnode_944,prop,query_SINGLEQUOTE__SINGLEQUOTE__941);
var q_SINGLEQUOTE__946 = (function (){var G__882 = clojure.zip.replace.call(null,om.next$macros.query_template.call(null,clojure.zip.root.call(null,q_943),path),new_query_945);
var G__882__$1 = (((class$ == null))?om.next$macros.query_template.call(null,om.next$macros.focus_query.call(null,clojure.zip.root.call(null,G__882),cljs.core.pop.call(null,path)),cljs.core.pop.call(null,path)):G__882);
return G__882__$1;
})();
var qs_SINGLEQUOTE__947 = cljs.core.into.call(null,cljs.core.PersistentHashSet.fromArray([q_SINGLEQUOTE__946], true),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([q_943], true)),qs_942);
var cp__GT_q_SINGLEQUOTE__948 = cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([classpath__$1,qs_SINGLEQUOTE__947], true, false),om.next$macros.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),cljs.core.pop.call(null,classpath__$1),path,clojure.zip.node.call(null,q_SINGLEQUOTE__946),union_keys));
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__948);
} else {
}

om$next$macros$build_index_STAR_.call(null,class_SINGLEQUOTE__938,query_SINGLEQUOTE__SINGLEQUOTE__941,path_SINGLEQUOTE__937,classpath__$1,query,cljs.core.conj.call(null,union_keys,prop));

var G__949 = seq__874;
var G__950 = chunk__875;
var G__951 = count__876;
var G__952 = (i__877 + (1));
seq__874 = G__949;
chunk__875 = G__950;
count__876 = G__951;
i__877 = G__952;
continue;
} else {
var temp__19834__auto__ = cljs.core.seq.call(null,seq__874);
if(temp__19834__auto__){
var seq__874__$1 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__874__$1)){
var c__23363__auto__ = cljs.core.chunk_first.call(null,seq__874__$1);
var G__953 = cljs.core.chunk_rest.call(null,seq__874__$1);
var G__954 = c__23363__auto__;
var G__955 = cljs.core.count.call(null,c__23363__auto__);
var G__956 = (0);
seq__874 = G__953;
chunk__875 = G__954;
count__876 = G__955;
i__877 = G__956;
continue;
} else {
var vec__883 = cljs.core.first.call(null,seq__874__$1);
var prop = cljs.core.nth.call(null,vec__883,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__883,(1),null);
var path_SINGLEQUOTE__957 = cljs.core.conj.call(null,path,prop);
var class_SINGLEQUOTE__958 = new cljs.core.Keyword(null,"component","component",(1555936782)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE_));
var cs_959 = cljs.core.filter.call(null,((function (seq__874,chunk__875,count__876,i__877,path_SINGLEQUOTE__957,class_SINGLEQUOTE__958,vec__883,prop,query_SINGLEQUOTE_,seq__874__$1,temp__19834__auto__,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__75_SHARP_){
return cljs.core._EQ_.call(null,class_SINGLEQUOTE__958,om.next$macros.react_type.call(null,p1__75_SHARP_));
});})(seq__874,chunk__875,count__876,i__877,path_SINGLEQUOTE__957,class_SINGLEQUOTE__958,vec__883,prop,query_SINGLEQUOTE_,seq__874__$1,temp__19834__auto__,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,cljs.core.get.call(null,dp__GT_cs,path));
var cascade_query_QMARK__960 = (function (){var and__20770__auto__ = class_SINGLEQUOTE__958;
if(cljs.core.truth_(and__20770__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_959),(1));
} else {
return and__20770__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__961 = (cljs.core.truth_(cascade_query_QMARK__960)?om.next$macros.get_query.call(null,cljs.core.first.call(null,cs_959)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__20770__auto__ = cascade_query_QMARK__960;
if(cljs.core.truth_(and__20770__auto__)){
return cljs.core.not_EQ_.call(null,query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__961);
} else {
return and__20770__auto__;
}
})())){
var qs_962 = cljs.core.get.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1);
var q_963 = cljs.core.first.call(null,qs_962);
var qnode_964 = clojure.zip.node.call(null,(function (){var G__886 = q_963;
var G__886__$1 = (((class$ == null))?om.next$macros.query_template.call(null,G__886,path):G__886);
return G__886__$1;
})());
var new_query_965 = cljs.core.assoc.call(null,qnode_964,prop,query_SINGLEQUOTE__SINGLEQUOTE__961);
var q_SINGLEQUOTE__966 = (function (){var G__887 = clojure.zip.replace.call(null,om.next$macros.query_template.call(null,clojure.zip.root.call(null,q_963),path),new_query_965);
var G__887__$1 = (((class$ == null))?om.next$macros.query_template.call(null,om.next$macros.focus_query.call(null,clojure.zip.root.call(null,G__887),cljs.core.pop.call(null,path)),cljs.core.pop.call(null,path)):G__887);
return G__887__$1;
})();
var qs_SINGLEQUOTE__967 = cljs.core.into.call(null,cljs.core.PersistentHashSet.fromArray([q_SINGLEQUOTE__966], true),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([q_963], true)),qs_962);
var cp__GT_q_SINGLEQUOTE__968 = cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([classpath__$1,qs_SINGLEQUOTE__967], true, false),om.next$macros.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),cljs.core.pop.call(null,classpath__$1),path,clojure.zip.node.call(null,q_SINGLEQUOTE__966),union_keys));
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__968);
} else {
}

om$next$macros$build_index_STAR_.call(null,class_SINGLEQUOTE__958,query_SINGLEQUOTE__SINGLEQUOTE__961,path_SINGLEQUOTE__957,classpath__$1,query,cljs.core.conj.call(null,union_keys,prop));

var G__969 = cljs.core.next.call(null,seq__874__$1);
var G__970 = null;
var G__971 = (0);
var G__972 = (0);
seq__874 = G__969;
chunk__875 = G__970;
count__876 = G__971;
i__877 = G__972;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
} else {
return null;
}
});})(prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
;
build_index_STAR_.call(null,root_class,rootq,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.call(null,self__.indexes,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prop->classes","prop->classes",(515892717)),cljs.core.deref.call(null,prop__GT_classes),new cljs.core.Keyword(null,"class-path->query","class-path->query",(-1222593700)),cljs.core.deref.call(null,class_path__GT_query)], null));
});

om.next$macros.Indexer.prototype.om$next$protocols$IIndexer$index_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"index-component","index-component",(-1258618905)).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",(436435919)),om.next$macros.react_type.call(null,c)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next$macros.path.call(null,c));
var indexes__$3 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"index-component","index-component",(-1258618905)).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$2,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",(-1244619750)),data_path], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var ident = ((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$macros$Ident$)))?true:false):false))?(function (){var ident = om.next$macros.ident.call(null,c,om.next$macros.props.call(null,c));
om.next$macros.invariant.call(null,om.util.ident_QMARK_.call(null,ident),[cljs.core.str("malformed Ident. An ident must be a vector of "),cljs.core.str("two elements (a keyword and an EDN value). Check "),cljs.core.str("the Ident implementation of component `"),cljs.core.str(c.constructor.displayName),cljs.core.str("`.")].join(''));

om.next$macros.invariant.call(null,cljs.core.some_QMARK_.call(null,cljs.core.second.call(null,ident)),[cljs.core.str("component "),cljs.core.str(c.constructor.displayName),cljs.core.str("'s ident ("),cljs.core.str(ident),cljs.core.str(") has a `nil` second element."),cljs.core.str(" This warning can be safely ignored if that is intended.")].join(''));

return ident;
})():null);
if(!((ident == null))){
var G__889 = indexes__$3;
var G__889__$1 = (cljs.core.truth_(ident)?cljs.core.update_in.call(null,G__889,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",(-303587249)),ident], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c):G__889);
return G__889__$1;
} else {
return indexes__$3;
}
});})(___$1))
);
});

om.next$macros.Indexer.prototype.om$next$protocols$IIndexer$drop_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"drop-component","drop-component",(1805913749)).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",(436435919)),om.next$macros.react_type.call(null,c)], null),cljs.core.disj,c);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next$macros.path.call(null,c));
var indexes__$3 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"drop-component","drop-component",(1805913749)).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$2,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",(-1244619750)),data_path], null),cljs.core.disj,c);
var ident = ((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$macros$Ident$)))?true:false):false))?om.next$macros.ident.call(null,c,om.next$macros.props.call(null,c)):null);
if(!((ident == null))){
var G__891 = indexes__$3;
var G__891__$1 = (cljs.core.truth_(ident)?cljs.core.update_in.call(null,G__891,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",(-303587249)),ident], null),cljs.core.disj,c):G__891);
return G__891__$1;
} else {
return indexes__$3;
}
});})(___$1))
);
});

om.next$macros.Indexer.prototype.om$next$protocols$IIndexer$key__GT_components$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var indexes__$1 = cljs.core.deref.call(null,self__.indexes);
if(om.next$macros.component_QMARK_.call(null,k)){
return cljs.core.PersistentHashSet.fromArray([k], true);
} else {
var temp__19520__auto__ = new cljs.core.Keyword(null,"ref->components","ref->components",(-303587249)).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,k);
if(cljs.core.truth_(temp__19520__auto__)){
var cs = temp__19520__auto__;
return cs;
} else {
return cljs.core.transduce.call(null,cljs.core.map.call(null,((function (temp__19520__auto__,indexes__$1,___$1){
return (function (p1__76_SHARP_){
return cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",(436435919)),p1__76_SHARP_], null));
});})(temp__19520__auto__,indexes__$1,___$1))
),cljs.core.completing.call(null,cljs.core.into),cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",(-303587249)),k], null),cljs.core.PersistentHashSet.EMPTY),cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop->classes","prop->classes",(515892717)),k], null)));
}
}
});

om.next$macros.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22669__auto__,k__22670__auto__){
var self__ = this;
var this__22669__auto____$1 = this;
return cljs.core._lookup.call(null,this__22669__auto____$1,k__22670__auto__,null);
});

om.next$macros.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22671__auto__,k777,else__22672__auto__){
var self__ = this;
var this__22671__auto____$1 = this;
var G__892 = (((k777 instanceof cljs.core.Keyword))?k777.fqn:null);
switch (G__892) {
case "indexes":
return self__.indexes;

break;
case "extfs":
return self__.extfs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k777,else__22672__auto__);

}
});

om.next$macros.Indexer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22689__auto__,writer__22690__auto__,opts__22691__auto__){
var self__ = this;
var this__22689__auto____$1 = this;
var pr_pair__22692__auto__ = ((function (this__22689__auto____$1){
return (function (keyval__22693__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22690__auto__,cljs.core.pr_writer,""," ","",opts__22691__auto__,keyval__22693__auto__);
});})(this__22689__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22690__auto__,pr_pair__22692__auto__,"#om.next$macros.Indexer{",", ","}",opts__22691__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",(1496475545)),self__.indexes],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extfs","extfs",(607041493)),self__.extfs],null))], null),self__.__extmap));
});

om.next$macros.Indexer.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

om.next$macros.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__776){
var self__ = this;
var G__776__$1 = this;
return (new cljs.core.RecordIter((0),G__776__$1,(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",(1496475545)),new cljs.core.Keyword(null,"extfs","extfs",(607041493))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

om.next$macros.Indexer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22667__auto__){
var self__ = this;
var this__22667__auto____$1 = this;
return self__.__meta;
});

om.next$macros.Indexer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22663__auto__){
var self__ = this;
var this__22663__auto____$1 = this;
return (new om.next$macros.Indexer(self__.indexes,self__.extfs,self__.__meta,self__.__extmap,self__.__hash));
});

om.next$macros.Indexer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22673__auto__){
var self__ = this;
var this__22673__auto____$1 = this;
return ((2) + cljs.core.count.call(null,self__.__extmap));
});

om.next$macros.Indexer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22664__auto__){
var self__ = this;
var this__22664__auto____$1 = this;
var h__21845__auto__ = self__.__hash;
if(!((h__21845__auto__ == null))){
return h__21845__auto__;
} else {
var h__21845__auto____$1 = cljs.core.hash_imap.call(null,this__22664__auto____$1);
self__.__hash = h__21845__auto____$1;

return h__21845__auto____$1;
}
});

om.next$macros.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22665__auto__,other__22666__auto__){
var self__ = this;
var this__22665__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20770__auto__ = other__22666__auto__;
if(cljs.core.truth_(and__20770__auto__)){
var and__20770__auto____$1 = (this__22665__auto____$1.constructor === other__22666__auto__.constructor);
if(and__20770__auto____$1){
return cljs.core.equiv_map.call(null,this__22665__auto____$1,other__22666__auto__);
} else {
return and__20770__auto____$1;
}
} else {
return and__20770__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next$macros.Indexer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22679__auto__,k__22680__auto__){
var self__ = this;
var this__22679__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indexes","indexes",(1496475545)),null,new cljs.core.Keyword(null,"extfs","extfs",(607041493)),null], null), null),k__22680__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22679__auto____$1),self__.__meta),k__22680__auto__);
} else {
return (new om.next$macros.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22680__auto__)),null));
}
});

om.next$macros.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22677__auto__,k__22678__auto__,G__776){
var self__ = this;
var this__22677__auto____$1 = this;
var pred__893 = cljs.core.keyword_identical_QMARK_;
var expr__894 = k__22678__auto__;
if(cljs.core.truth_(pred__893.call(null,new cljs.core.Keyword(null,"indexes","indexes",(1496475545)),expr__894))){
return (new om.next$macros.Indexer(G__776,self__.extfs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__893.call(null,new cljs.core.Keyword(null,"extfs","extfs",(607041493)),expr__894))){
return (new om.next$macros.Indexer(self__.indexes,G__776,self__.__meta,self__.__extmap,null));
} else {
return (new om.next$macros.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22678__auto__,G__776),null));
}
}
});

om.next$macros.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22683__auto__){
var self__ = this;
var this__22683__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",(1496475545)),self__.indexes],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extfs","extfs",(607041493)),self__.extfs],null))], null),self__.__extmap));
});

om.next$macros.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22668__auto__,G__776){
var self__ = this;
var this__22668__auto____$1 = this;
return (new om.next$macros.Indexer(self__.indexes,self__.extfs,G__776,self__.__extmap,self__.__hash));
});

om.next$macros.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22674__auto__,entry__22675__auto__){
var self__ = this;
var this__22674__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22675__auto__)){
return cljs.core._assoc.call(null,this__22674__auto____$1,cljs.core._nth.call(null,entry__22675__auto__,(0)),cljs.core._nth.call(null,entry__22675__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22674__auto____$1,entry__22675__auto__);
}
});

om.next$macros.Indexer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.indexes);
});

om.next$macros.Indexer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"indexes","indexes",(-1157960224),null),new cljs.core.Symbol(null,"extfs","extfs",(-2047394276),null)], null);
});

om.next$macros.Indexer.cljs$lang$type = true;

om.next$macros.Indexer.cljs$lang$ctorPrSeq = (function (this__23044__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next$macros/Indexer");
});

om.next$macros.Indexer.cljs$lang$ctorPrWriter = (function (this__23044__auto__,writer__23045__auto__){
return cljs.core._write.call(null,writer__23045__auto__,"om.next$macros/Indexer");
});

(function (){
om.next$macros.__GT_Indexer = (function om$next$macros$__GT_Indexer(indexes,extfs){
return (new om.next$macros.Indexer(indexes,extfs,null,null,null));
}); return (
new cljs.core.Var(function(){return om.next$macros.__GT_Indexer;},new cljs.core.Symbol("om.next$macros","->Indexer","om.next$macros/->Indexer",(144227285),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"->Indexer","->Indexer",(1962431213),null),"om/next.cljc",(19),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(1704),(1704),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"indexes","indexes",(-1157960224),null),new cljs.core.Symbol(null,"extfs","extfs",(-2047394276),null)], null)),null,(cljs.core.truth_(om.next$macros.__GT_Indexer)?om.next$macros.__GT_Indexer.cljs$lang$test:null)])));})()
;

(function (){
om.next$macros.map__GT_Indexer = (function om$next$macros$map__GT_Indexer(G__778){
return (new om.next$macros.Indexer(new cljs.core.Keyword(null,"indexes","indexes",(1496475545)).cljs$core$IFn$_invoke$arity$1(G__778),new cljs.core.Keyword(null,"extfs","extfs",(607041493)).cljs$core$IFn$_invoke$arity$1(G__778),null,cljs.core.dissoc.call(null,G__778,new cljs.core.Keyword(null,"indexes","indexes",(1496475545)),new cljs.core.Keyword(null,"extfs","extfs",(607041493))),null));
}); return (
new cljs.core.Var(function(){return om.next$macros.map__GT_Indexer;},new cljs.core.Symbol("om.next$macros","map->Indexer","om.next$macros/map->Indexer",(-41645962),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"map->Indexer","map->Indexer",(-106589858),null),"om/next.cljc",(19),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(1704),(1704),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__778","G__778",(-1017236579),null)], null)),null,(cljs.core.truth_(om.next$macros.map__GT_Indexer)?om.next$macros.map__GT_Indexer.cljs$lang$test:null)])));})()
;

/**
 * Given a function (Component -> Ref), return an indexer.
 */
(function (){
om.next$macros.indexer = (function om$next$macros$indexer(var_args){
var args974 = [];
var len__23656__auto___977 = arguments.length;
var i__23657__auto___978 = (0);
while(true){
if((i__23657__auto___978 < len__23656__auto___977)){
args974.push((arguments[i__23657__auto___978]));

var G__979 = (i__23657__auto___978 + (1));
i__23657__auto___978 = G__979;
continue;
} else {
}
break;
}

var G__976 = args974.length;
switch (G__976) {
case (0):
return om.next$macros.indexer.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return om.next$macros.indexer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args974.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next$macros.indexer;},new cljs.core.Symbol("om.next$macros","indexer","om.next$macros/indexer",(-203791404),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"indexer","indexer",(-134382788),null),"om/next.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"extfs","extfs",(-2047394276),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"extfs","extfs",(-2047394276),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1888),(1888),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"extfs","extfs",(-2047394276),null)], null)),"Given a function (Component -> Ref), return an indexer.",(cljs.core.truth_(om.next$macros.indexer)?om.next$macros.indexer.cljs$lang$test:null)])));})()
;

om.next$macros.indexer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.next$macros.indexer.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index-component","index-component",(-1258618905)),(function (indexes,component){
return indexes;
}),new cljs.core.Keyword(null,"ref->components","ref->components",(-303587249)),(function (indexes,ref){
return null;
}),new cljs.core.Keyword(null,"drop-component","drop-component",(1805913749)),(function (indexes,component){
return indexes;
})], null));
});

om.next$macros.indexer.cljs$core$IFn$_invoke$arity$1 = (function (extfs){
return (new om.next$macros.Indexer(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref->components","ref->components",(-303587249)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"class->components","class->components",(436435919)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"data-path->components","data-path->components",(-1244619750)),cljs.core.PersistentArrayMap.EMPTY], null)),extfs,null,null,null));
});

om.next$macros.indexer.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return om.next$macros.indexer;},new cljs.core.Symbol("om.next$macros","indexer","om.next$macros/indexer",(-203791404),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"indexer","indexer",(-134382788),null),"om/next.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"extfs","extfs",(-2047394276),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"extfs","extfs",(-2047394276),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1888),(1888),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"extfs","extfs",(-2047394276),null)], null)),"Given a function (Component -> Ref), return an indexer.",(cljs.core.truth_(om.next$macros.indexer)?om.next$macros.indexer.cljs$lang$test:null)]));
/**
 * PRIVATE: Get the indexer associated with the reconciler.
 */
(function (){
om.next$macros.get_indexer = (function om$next$macros$get_indexer(reconciler){
if(cljs.core.truth_(om.next$macros.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"indexer","indexer",(-1774914315)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",(994861415)).cljs$core$IFn$_invoke$arity$1(reconciler));
}); return (
new cljs.core.Var(function(){return om.next$macros.get_indexer;},new cljs.core.Symbol("om.next$macros","get-indexer","om.next$macros/get-indexer",(-233617541),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"get-indexer","get-indexer",(-152032173),null),"om/next.cljc",(18),(1),(1903),(1903),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null)], null)),"PRIVATE: Get the indexer associated with the reconciler.",(cljs.core.truth_(om.next$macros.get_indexer)?om.next$macros.get_indexer.cljs$lang$test:null)])));})()
;
/**
 * Return all components for a given ref.
 */
(function (){
om.next$macros.ref__GT_components = (function om$next$macros$ref__GT_components(x,ref){
if((ref == null)){
return null;
} else {
var indexer = (cljs.core.truth_(om.next$macros.reconciler_QMARK_.call(null,x))?om.next$macros.get_indexer.call(null,x):x);
return om.next.protocols.key__GT_components.call(null,indexer,ref);
}
}); return (
new cljs.core.Var(function(){return om.next$macros.ref__GT_components;},new cljs.core.Symbol("om.next$macros","ref->components","om.next$macros/ref->components",(1133596606),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"ref->components","ref->components",(1336944278),null),"om/next.cljc",(22),(1),(1909),(1909),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"ref","ref",(-1364538802),null)], null)),"Return all components for a given ref.",(cljs.core.truth_(om.next$macros.ref__GT_components)?om.next$macros.ref__GT_components.cljs$lang$test:null)])));})()
;
/**
 * Get any component from the indexer that matches the ref.
 */
(function (){
om.next$macros.ref__GT_any = (function om$next$macros$ref__GT_any(x,ref){
var indexer = (cljs.core.truth_(om.next$macros.reconciler_QMARK_.call(null,x))?om.next$macros.get_indexer.call(null,x):x);
return cljs.core.first.call(null,om.next.protocols.key__GT_components.call(null,indexer,ref));
}); return (
new cljs.core.Var(function(){return om.next$macros.ref__GT_any;},new cljs.core.Symbol("om.next$macros","ref->any","om.next$macros/ref->any",(1220829582),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"ref->any","ref->any",(1151682790),null),"om/next.cljc",(15),(1),(1916),(1916),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"ref","ref",(-1364538802),null)], null)),"Get any component from the indexer that matches the ref.",(cljs.core.truth_(om.next$macros.ref__GT_any)?om.next$macros.ref__GT_any.cljs$lang$test:null)])));})()
;
/**
 * Get any component from the indexer that matches the component class.
 */
(function (){
om.next$macros.class__GT_any = (function om$next$macros$class__GT_any(x,class$){
var indexer = (cljs.core.truth_(om.next$macros.reconciler_QMARK_.call(null,x))?om.next$macros.get_indexer.call(null,x):x);
return cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",(436435919)),class$], null)));
}); return (
new cljs.core.Var(function(){return om.next$macros.class__GT_any;},new cljs.core.Symbol("om.next$macros","class->any","om.next$macros/class->any",(-1675308185),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"class->any","class->any",(-1874478001),null),"om/next.cljc",(17),(1),(1922),(1922),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"class","class",(-390430469),null)], null)),"Get any component from the indexer that matches the component class.",(cljs.core.truth_(om.next$macros.class__GT_any)?om.next$macros.class__GT_any.cljs$lang$test:null)])));})()
;
/**
 * Given x (a reconciler or indexer) and y (a component or component class
 * path), return the queries for that path.
 */
(function (){
om.next$macros.class_path__GT_queries = (function om$next$macros$class_path__GT_queries(x,y){
var indexer = (cljs.core.truth_(om.next$macros.reconciler_QMARK_.call(null,x))?om.next$macros.get_indexer.call(null,x):x);
var cp = ((om.next$macros.component_QMARK_.call(null,y))?om.next$macros.class_path.call(null,y):y);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,clojure.zip.root),cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",(-1222593700)),cp], null)));
}); return (
new cljs.core.Var(function(){return om.next$macros.class_path__GT_queries;},new cljs.core.Symbol("om.next$macros","class-path->queries","om.next$macros/class-path->queries",(489590778),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"class-path->queries","class-path->queries",(420320898),null),"om/next.cljc",(26),(1),(1928),(1928),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null)),"Given x (a reconciler or indexer) and y (a component or component class\n   path), return the queries for that path.",(cljs.core.truth_(om.next$macros.class_path__GT_queries)?om.next$macros.class_path__GT_queries.cljs$lang$test:null)])));})()
;
/**
 * Returns the absolute query for a given component, not relative like
 * om.next/get-query.
 */
(function (){
om.next$macros.full_query = (function om$next$macros$full_query(var_args){
var args981 = [];
var len__23656__auto___985 = arguments.length;
var i__23657__auto___986 = (0);
while(true){
if((i__23657__auto___986 < len__23656__auto___985)){
args981.push((arguments[i__23657__auto___986]));

var G__987 = (i__23657__auto___986 + (1));
i__23657__auto___986 = G__987;
continue;
} else {
}
break;
}

var G__983 = args981.length;
switch (G__983) {
case (1):
return om.next$macros.full_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return om.next$macros.full_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args981.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next$macros.full_query;},new cljs.core.Symbol("om.next$macros","full-query","om.next$macros/full-query",(-994741113),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"full-query","full-query",(-1063894081),null),"om/next.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1937),(1937),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),"Returns the absolute query for a given component, not relative like\n   om.next/get-query.",(cljs.core.truth_(om.next$macros.full_query)?om.next$macros.full_query.cljs$lang$test:null)])));})()
;

om.next$macros.full_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
if(om.next$macros.iquery_QMARK_.call(null,component)){
if((om.next$macros.path.call(null,component) == null)){
return om.next$macros.replace.call(null,cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next$macros.get_indexer.call(null,om.next$macros.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",(-1222593700)),om.next$macros.class_path.call(null,component)], null))),om.next$macros.get_query.call(null,component));
} else {
return om.next$macros.full_query.call(null,component,om.next$macros.get_query.call(null,component));
}
} else {
return null;
}
});

om.next$macros.full_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query){
if(om.next$macros.iquery_QMARK_.call(null,component)){
var xf = (function (){var G__984 = cljs.core.remove.call(null,cljs.core.number_QMARK_);
var G__984__$1 = ((om.next$macros.recursive_class_path_QMARK_.call(null,component))?cljs.core.comp.call(null,cljs.core.distinct.call(null),G__984):G__984);
return G__984__$1;
})();
var path_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,xf,om.next$macros.path.call(null,component));
var cp = om.next$macros.class_path.call(null,component);
var qs = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next$macros.get_indexer.call(null,om.next$macros.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",(-1222593700)),cp], null));
if(!(cljs.core.empty_QMARK_.call(null,qs))){
var q = cljs.core.first.call(null,cljs.core.filter.call(null,((function (xf,path_SINGLEQUOTE_,cp,qs){
return (function (p1__77_SHARP_){
return cljs.core._EQ_.call(null,path_SINGLEQUOTE_,cljs.core.mapv.call(null,om.next$macros.get_dispatch_key,om.next$macros.focus__GT_path.call(null,clojure.zip.root.call(null,p1__77_SHARP_),path_SINGLEQUOTE_)));
});})(xf,path_SINGLEQUOTE_,cp,qs))
,qs));
if(!((q == null))){
return om.next$macros.replace.call(null,q,query);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("No queries exist for component path "),cljs.core.str(cp),cljs.core.str(" or data path "),cljs.core.str(path_SINGLEQUOTE_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",(2125033807))], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("No queries exist for component path "),cljs.core.str(cp)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",(2125033807))], null));
}
} else {
return null;
}
});

om.next$macros.full_query.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return om.next$macros.full_query;},new cljs.core.Symbol("om.next$macros","full-query","om.next$macros/full-query",(-994741113),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"full-query","full-query",(-1063894081),null),"om/next.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1937),(1937),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),"Returns the absolute query for a given component, not relative like\n   om.next/get-query.",(cljs.core.truth_(om.next$macros.full_query)?om.next$macros.full_query.cljs$lang$test:null)]));
(function (){
om.next$macros.normalize_STAR_ = (function om$next$macros$normalize_STAR_(query,data,refs,union_seen){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",(345799209),null)], null),query)){
return data;
} else {
if(cljs.core.map_QMARK_.call(null,query)){
var class$ = new cljs.core.Keyword(null,"component","component",(1555936782)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query));
var ident = ((((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.om$next$macros$Ident$)))?true:false):false))?om.next$macros.ident.call(null,class$,data):null);
if(!((ident == null))){
return cljs.core.vary_meta.call(null,om.next$macros.normalize_STAR_.call(null,cljs.core.get.call(null,query,cljs.core.first.call(null,ident)),data,refs,union_seen),cljs.core.assoc,new cljs.core.Keyword("om","tag","om/tag",(-1290356769)),cljs.core.first.call(null,ident));
} else {
throw (new Error("Union components must implement Ident"));
}
} else {
if(cljs.core.vector_QMARK_.call(null,data)){
return data;
} else {
var q = cljs.core.seq.call(null,query);
var ret = data;
while(true){
if(!((q == null))){
var expr = cljs.core.first.call(null,q);
if(cljs.core.truth_(om.util.join_QMARK_.call(null,expr))){
var vec__1006 = om.util.join_entry.call(null,expr);
var k = cljs.core.nth.call(null,vec__1006,(0),null);
var sel = cljs.core.nth.call(null,vec__1006,(1),null);
var recursive_QMARK_ = om.util.recursion_QMARK_.call(null,sel);
var union_entry = ((om.util.union_QMARK_.call(null,expr))?sel:union_seen);
var sel__$1 = ((recursive_QMARK_)?((!((union_seen == null)))?union_seen:query):sel);
var class$ = new cljs.core.Keyword(null,"component","component",(1555936782)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sel__$1));
var v = cljs.core.get.call(null,data,k);
if((recursive_QMARK_) && (om.util.ident_QMARK_.call(null,v))){
var G__1021 = cljs.core.next.call(null,q);
var G__1022 = ret;
q = G__1021;
ret = G__1022;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,v)){
var x = om.next$macros.normalize_STAR_.call(null,sel__$1,v,refs,union_entry);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.om$next$macros$Ident$)))?true:false):false))))){
var i = om.next$macros.ident.call(null,class$,v);
cljs.core.swap_BANG_.call(null,refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,i),cljs.core.second.call(null,i)], null),cljs.core.merge,x);

var G__1023 = cljs.core.next.call(null,q);
var G__1024 = cljs.core.assoc.call(null,ret,k,i);
q = G__1023;
ret = G__1024;
continue;
} else {
var G__1025 = cljs.core.next.call(null,q);
var G__1026 = cljs.core.assoc.call(null,ret,k,x);
q = G__1025;
ret = G__1026;
continue;
}
} else {
if(cljs.core.vector_QMARK_.call(null,v)){
var xs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,vec__1006,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__78_SHARP_){
return om.next$macros.normalize_STAR_.call(null,sel__$1,p1__78_SHARP_,refs,union_entry);
});})(q,ret,vec__1006,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),v);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.om$next$macros$Ident$)))?true:false):false))))){
var is = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,xs,vec__1006,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__80_SHARP_){
return om.next$macros.ident.call(null,class$,p1__80_SHARP_);
});})(q,ret,xs,vec__1006,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),xs);
if(cljs.core.vector_QMARK_.call(null,sel__$1)){
if(cljs.core.empty_QMARK_.call(null,is)){
} else {
cljs.core.swap_BANG_.call(null,refs,((function (q,ret,is,xs,vec__1006,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs__$1){
return cljs.core.reduce.call(null,((function (q,ret,is,xs,vec__1006,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (m,p__1013){
var vec__1014 = p__1013;
var i = cljs.core.nth.call(null,vec__1014,(0),null);
var x = cljs.core.nth.call(null,vec__1014,(1),null);
return cljs.core.update_in.call(null,m,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__1006,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs__$1,cljs.core.zipmap.call(null,is,xs));
});})(q,ret,is,xs,vec__1006,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}
} else {
cljs.core.swap_BANG_.call(null,refs,((function (q,ret,is,xs,vec__1006,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.call(null,((function (q,ret,is,xs,vec__1006,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (ret__$1,p__1017){
var vec__1018 = p__1017;
var i = cljs.core.nth.call(null,vec__1018,(0),null);
var x = cljs.core.nth.call(null,vec__1018,(1),null);
return cljs.core.update_in.call(null,ret__$1,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__1006,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs_SINGLEQUOTE_,cljs.core.map.call(null,cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__1006,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}

var G__1027 = cljs.core.next.call(null,q);
var G__1028 = cljs.core.assoc.call(null,ret,k,is);
q = G__1027;
ret = G__1028;
continue;
} else {
var G__1029 = cljs.core.next.call(null,q);
var G__1030 = cljs.core.assoc.call(null,ret,k,xs);
q = G__1029;
ret = G__1030;
continue;
}
} else {
if((v == null)){
var G__1031 = cljs.core.next.call(null,q);
var G__1032 = ret;
q = G__1031;
ret = G__1032;
continue;
} else {
var G__1033 = cljs.core.next.call(null,q);
var G__1034 = cljs.core.assoc.call(null,ret,k,v);
q = G__1033;
ret = G__1034;
continue;

}
}
}
}
} else {
var k = ((cljs.core.seq_QMARK_.call(null,expr))?cljs.core.first.call(null,expr):expr);
var v = cljs.core.get.call(null,data,k);
if((v == null)){
var G__1035 = cljs.core.next.call(null,q);
var G__1036 = ret;
q = G__1035;
ret = G__1036;
continue;
} else {
var G__1037 = cljs.core.next.call(null,q);
var G__1038 = cljs.core.assoc.call(null,ret,k,v);
q = G__1037;
ret = G__1038;
continue;
}
}
} else {
return ret;
}
break;
}

}
}
}
}); return (
new cljs.core.Var(function(){return om.next$macros.normalize_STAR_;},new cljs.core.Symbol("om.next$macros","normalize*","om.next$macros/normalize*",(608729062),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"normalize*","normalize*",(597122766),null),"om/next.cljc",(18),(1),(1974),(1974),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null),new cljs.core.Symbol(null,"union-seen","union-seen",(959521680),null)], null)),null,(cljs.core.truth_(om.next$macros.normalize_STAR_)?om.next$macros.normalize_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Given a Om component class or instance and a tree of data, use the component's
 * query to transform the tree into the default database format. All nodes that
 * can be mapped via Ident implementations wil be replaced with ident links. The
 * original node data will be moved into tables indexed by ident. If merge-idents
 * option is true, will return these tables in the result instead of as metadata.
 */
(function (){
om.next$macros.tree__GT_db = (function om$next$macros$tree__GT_db(var_args){
var args1039 = [];
var len__23656__auto___1042 = arguments.length;
var i__23657__auto___1043 = (0);
while(true){
if((i__23657__auto___1043 < len__23656__auto___1042)){
args1039.push((arguments[i__23657__auto___1043]));

var G__1044 = (i__23657__auto___1043 + (1));
i__23657__auto___1043 = G__1044;
continue;
} else {
}
break;
}

var G__1041 = args1039.length;
switch (G__1041) {
case (2):
return om.next$macros.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return om.next$macros.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1039.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next$macros.tree__GT_db;},new cljs.core.Symbol("om.next$macros","tree->db","om.next$macros/tree->db",(910037651),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"tree->db","tree->db",(844986795),null),"om/next.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"data","data",(1407862150),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),cljs.core.with_meta(new cljs.core.Symbol(null,"merge-idents","merge-idents",(-2016150948),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null)], null))], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"data","data",(1407862150),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),cljs.core.with_meta(new cljs.core.Symbol(null,"merge-idents","merge-idents",(-2016150948),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null)], null))], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2059),(2059),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"data","data",(1407862150),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),cljs.core.with_meta(new cljs.core.Symbol(null,"merge-idents","merge-idents",(-2016150948),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null)], null))], null)),"Given a Om component class or instance and a tree of data, use the component's\n   query to transform the tree into the default database format. All nodes that\n   can be mapped via Ident implementations wil be replaced with ident links. The\n   original node data will be moved into tables indexed by ident. If merge-idents\n   option is true, will return these tables in the result instead of as metadata.",(cljs.core.truth_(om.next$macros.tree__GT_db)?om.next$macros.tree__GT_db.cljs$lang$test:null)])));})()
;

om.next$macros.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return om.next$macros.tree__GT_db.call(null,x,data,false);
});

om.next$macros.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_idents){
var refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var x__$1 = ((cljs.core.vector_QMARK_.call(null,x))?x:om.next$macros.get_query.call(null,x));
var ret = om.next$macros.normalize_STAR_.call(null,x__$1,data,refs,null);
if(merge_idents){
var refs_SINGLEQUOTE_ = cljs.core.deref.call(null,refs);
return cljs.core.assoc.call(null,cljs.core.merge.call(null,ret,refs_SINGLEQUOTE_),new cljs.core.Keyword("om.next","tables","om.next/tables",(1677536335)),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,refs_SINGLEQUOTE_)));
} else {
return cljs.core.with_meta.call(null,ret,cljs.core.deref.call(null,refs));
}
});

om.next$macros.tree__GT_db.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return om.next$macros.tree__GT_db;},new cljs.core.Symbol("om.next$macros","tree->db","om.next$macros/tree->db",(910037651),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"tree->db","tree->db",(844986795),null),"om/next.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"data","data",(1407862150),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),cljs.core.with_meta(new cljs.core.Symbol(null,"merge-idents","merge-idents",(-2016150948),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null)], null))], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"data","data",(1407862150),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),cljs.core.with_meta(new cljs.core.Symbol(null,"merge-idents","merge-idents",(-2016150948),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null)], null))], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2059),(2059),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"data","data",(1407862150),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),cljs.core.with_meta(new cljs.core.Symbol(null,"merge-idents","merge-idents",(-2016150948),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null)], null))], null)),"Given a Om component class or instance and a tree of data, use the component's\n   query to transform the tree into the default database format. All nodes that\n   can be mapped via Ident implementations wil be replaced with ident links. The\n   original node data will be moved into tables indexed by ident. If merge-idents\n   option is true, will return these tables in the result instead of as metadata.",(cljs.core.truth_(om.next$macros.tree__GT_db)?om.next$macros.tree__GT_db.cljs$lang$test:null)]));
(function (){
om.next$macros.sift_idents = (function om$next$macros$sift_idents(res){
var map__1048 = cljs.core.group_by.call(null,(function (p1__81_SHARP_){
return cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,p1__81_SHARP_));
}),res);
var map__1048__$1 = ((((!((map__1048 == null)))?((((map__1048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1048.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1048):map__1048);
var rest = cljs.core.get.call(null,map__1048__$1,false);
var idents = cljs.core.get.call(null,map__1048__$1,true);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,idents),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,rest)], null);
}); return (
new cljs.core.Var(function(){return om.next$macros.sift_idents;},new cljs.core.Symbol("om.next$macros","sift-idents","om.next$macros/sift-idents",(2132207714),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"sift-idents","sift-idents",(2096613242),null),"om/next.cljc",(19),(1),(2077),(2077),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"res","res",(245523648),null)], null)),null,(cljs.core.truth_(om.next$macros.sift_idents)?om.next$macros.sift_idents.cljs$lang$test:null)])));})()
;
/**
 * Changes a join on key k with depth limit from [:a {:k n}] to [:a {:k (dec n)}]
 */
(function (){
om.next$macros.reduce_query_depth = (function om$next$macros$reduce_query_depth(q,k){
if(!(cljs.core.empty_QMARK_.call(null,om.next$macros.focus_query.call(null,q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))))){
var pos = om.next$macros.query_template.call(null,q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var node = clojure.zip.node.call(null,pos);
var node_SINGLEQUOTE_ = (function (){var G__1051 = node;
var G__1051__$1 = ((typeof node === 'number')?(G__1051 - (1)):G__1051);
return G__1051__$1;
})();
return om.next$macros.replace.call(null,pos,node_SINGLEQUOTE_);
} else {
return q;
}
}); return (
new cljs.core.Var(function(){return om.next$macros.reduce_query_depth;},new cljs.core.Symbol("om.next$macros","reduce-query-depth","om.next$macros/reduce-query-depth",(-963124527),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"reduce-query-depth","reduce-query-depth",(-889783351),null),"om/next.cljc",(25),(1),(2081),(2081),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"q","q",(-1965434072),null),new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),"Changes a join on key k with depth limit from [:a {:k n}] to [:a {:k (dec n)}]",(cljs.core.truth_(om.next$macros.reduce_query_depth)?om.next$macros.reduce_query_depth.cljs$lang$test:null)])));})()
;
/**
 * Given a union expression decrement each of the query roots by one if it
 * is recursive.
 */
(function (){
om.next$macros.reduce_union_recursion_depth = (function om$next$macros$reduce_union_recursion_depth(union_expr,recursion_key){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__1056){
var vec__1057 = p__1056;
var k = cljs.core.nth.call(null,vec__1057,(0),null);
var q = cljs.core.nth.call(null,vec__1057,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.next$macros.reduce_query_depth.call(null,q,recursion_key)], null);
}),union_expr));
}); return (
new cljs.core.Var(function(){return om.next$macros.reduce_union_recursion_depth;},new cljs.core.Symbol("om.next$macros","reduce-union-recursion-depth","om.next$macros/reduce-union-recursion-depth",(-956438967),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"reduce-union-recursion-depth","reduce-union-recursion-depth",(-1025838767),null),"om/next.cljc",(36),(1),(2091),(2091),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"union-expr","union-expr",(-2017401102),null),new cljs.core.Symbol(null,"recursion-key","recursion-key",(-2003391386),null)], null)),"Given a union expression decrement each of the query roots by one if it\n   is recursive.",(cljs.core.truth_(om.next$macros.reduce_union_recursion_depth)?om.next$macros.reduce_union_recursion_depth.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.mappable_ident_QMARK_ = (function om$next$macros$mappable_ident_QMARK_(refs,ident){
return (om.util.ident_QMARK_.call(null,ident)) && (cljs.core.contains_QMARK_.call(null,refs,cljs.core.first.call(null,ident)));
}); return (
new cljs.core.Var(function(){return om.next$macros.mappable_ident_QMARK_;},new cljs.core.Symbol("om.next$macros","mappable-ident?","om.next$macros/mappable-ident?",(756610994),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"mappable-ident?","mappable-ident?",(557440842),null),"om/next.cljc",(23),(1),(2099),(2099),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"refs","refs",(80480079),null),new cljs.core.Symbol(null,"ident","ident",(1639789181),null)], null)),null,(cljs.core.truth_(om.next$macros.mappable_ident_QMARK_)?om.next$macros.mappable_ident_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Denormalize a data based on query. refs is a data structure which maps idents
 * to their values. map-ident is a function taking a ident to another ident,
 * used during tempid transition. idents-seen is the set of idents encountered,
 * used to limit recursion. union-expr is the current union expression being
 * evaluated. recurse-key is key representing the current recursive query being
 * evaluted.
 */
(function (){
om.next$macros.denormalize_STAR_ = (function om$next$macros$denormalize_STAR_(query,data,refs,map_ident,idents_seen,union_expr,recurse_key){
var union_recur_QMARK_ = (function (){var and__20770__auto__ = union_expr;
if(cljs.core.truth_(and__20770__auto__)){
return recurse_key;
} else {
return and__20770__auto__;
}
})();
var recur_ident = (cljs.core.truth_(union_recur_QMARK_)?data:null);
var data__$1 = (function (){var data__$1 = data;
while(true){
if(cljs.core.truth_(om.next$macros.mappable_ident_QMARK_.call(null,refs,data__$1))){
var G__1104 = cljs.core.get_in.call(null,refs,map_ident.call(null,data__$1));
data__$1 = G__1104;
continue;
} else {
return data__$1;
}
break;
}
})();
if(cljs.core.vector_QMARK_.call(null,data__$1)){
var step = ((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (ident){
if(cljs.core.not.call(null,om.next$macros.mappable_ident_QMARK_.call(null,refs,ident))){
if(cljs.core._EQ_.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",(345799209),null)], null))){
return ident;
} else {
var map__1082 = cljs.core.group_by.call(null,om.util.join_QMARK_,query);
var map__1082__$1 = ((((!((map__1082 == null)))?((((map__1082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1082.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1082):map__1082);
var props = cljs.core.get.call(null,map__1082__$1,false);
var joins = cljs.core.get.call(null,map__1082__$1,true);
var props__$1 = cljs.core.mapv.call(null,((function (map__1082,map__1082__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__82_SHARP_){
var G__1084 = p1__82_SHARP_;
var G__1084__$1 = ((cljs.core.seq_QMARK_.call(null,p1__82_SHARP_))?cljs.core.first.call(null,G__1084):G__1084);
return G__1084__$1;
});})(map__1082,map__1082__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq.call(null,joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first.call(null,joins__$1);
var vec__1085 = om.util.join_entry.call(null,join);
var key = cljs.core.nth.call(null,vec__1085,(0),null);
var sel = cljs.core.nth.call(null,vec__1085,(1),null);
var v = cljs.core.get.call(null,ident,key);
var G__1105 = cljs.core.next.call(null,joins__$1);
var G__1106 = cljs.core.assoc.call(null,ret,key,om.next$macros.denormalize_STAR_.call(null,sel,v,refs,map_ident,idents_seen,union_expr,recurse_key));
joins__$1 = G__1105;
ret = G__1106;
continue;
} else {
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,ident,props__$1),ret);
}
break;
}
}
} else {
var ident_SINGLEQUOTE_ = cljs.core.get_in.call(null,refs,map_ident.call(null,ident));
var query__$1 = (function (){var G__1088 = query;
var G__1088__$1 = (cljs.core.truth_(union_recur_QMARK_)?om.next$macros.reduce_union_recursion_depth.call(null,G__1088,recurse_key):G__1088);
return G__1088__$1;
})();
var union_seen_SINGLEQUOTE_ = (function (){var G__1089 = union_expr;
var G__1089__$1 = (cljs.core.truth_(union_recur_QMARK_)?om.next$macros.reduce_union_recursion_depth.call(null,G__1089,recurse_key):G__1089);
return G__1089__$1;
})();
var query_SINGLEQUOTE_ = (function (){var G__1090 = query__$1;
var G__1090__$1 = ((cljs.core.map_QMARK_.call(null,query__$1))?cljs.core.get.call(null,G__1090,cljs.core.first.call(null,ident)):G__1090);
return G__1090__$1;
})();
return om.next$macros.denormalize_STAR_.call(null,query_SINGLEQUOTE_,ident_SINGLEQUOTE_,refs,map_ident,idents_seen,union_seen_SINGLEQUOTE_,null);
}
});})(union_recur_QMARK_,recur_ident,data__$1))
;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,step),data__$1);
} else {
if(cljs.core.truth_((function (){var and__20770__auto__ = cljs.core.map_QMARK_.call(null,query);
if(and__20770__auto__){
return union_recur_QMARK_;
} else {
return and__20770__auto__;
}
})())){
return om.next$macros.denormalize_STAR_.call(null,cljs.core.get.call(null,query,cljs.core.first.call(null,recur_ident)),data__$1,refs,map_ident,idents_seen,union_expr,recurse_key);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",(345799209),null)], null),query)){
return data__$1;
} else {
var map__1091 = cljs.core.group_by.call(null,((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__83_SHARP_){
var or__20817__auto__ = om.util.join_QMARK_.call(null,p1__83_SHARP_);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return (om.util.ident_QMARK_.call(null,p1__83_SHARP_)) || ((cljs.core.seq_QMARK_.call(null,p1__83_SHARP_)) && (om.util.ident_QMARK_.call(null,cljs.core.first.call(null,p1__83_SHARP_))));
}
});})(union_recur_QMARK_,recur_ident,data__$1))
,query);
var map__1091__$1 = ((((!((map__1091 == null)))?((((map__1091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1091.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1091):map__1091);
var props = cljs.core.get.call(null,map__1091__$1,false);
var joins = cljs.core.get.call(null,map__1091__$1,true);
var props__$1 = cljs.core.mapv.call(null,((function (map__1091,map__1091__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__84_SHARP_){
var G__1093 = p1__84_SHARP_;
var G__1093__$1 = ((cljs.core.seq_QMARK_.call(null,p1__84_SHARP_))?cljs.core.first.call(null,G__1093):G__1093);
return G__1093__$1;
});})(map__1091,map__1091__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq.call(null,joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first.call(null,joins__$1);
var join__$1 = (function (){var G__1097 = join;
var G__1097__$1 = ((cljs.core.seq_QMARK_.call(null,join))?cljs.core.first.call(null,G__1097):G__1097);
return G__1097__$1;
})();
var join__$2 = (function (){var G__1098 = join__$1;
var G__1098__$1 = ((om.util.ident_QMARK_.call(null,join__$1))?cljs.core.PersistentHashMap.fromArrays([G__1098],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",(345799209),null)], null)]):G__1098);
return G__1098__$1;
})();
var vec__1094 = om.util.join_entry.call(null,join__$2);
var key = cljs.core.nth.call(null,vec__1094,(0),null);
var sel = cljs.core.nth.call(null,vec__1094,(1),null);
var recurse_QMARK_ = om.util.recursion_QMARK_.call(null,sel);
var recurse_key__$1 = ((recurse_QMARK_)?key:null);
var v = ((om.util.ident_QMARK_.call(null,key))?((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",(-1201019570),null),cljs.core.second.call(null,key)))?cljs.core.get.call(null,refs,cljs.core.first.call(null,key)):cljs.core.get_in.call(null,refs,map_ident.call(null,key))):cljs.core.get.call(null,data__$1,key));
var key__$1 = (function (){var G__1099 = key;
var G__1099__$1 = ((om.util.unique_ident_QMARK_.call(null,key))?cljs.core.first.call(null,G__1099):G__1099);
return G__1099__$1;
})();
var v__$1 = (cljs.core.truth_(om.next$macros.mappable_ident_QMARK_.call(null,refs,v))?(function (){var v__$1 = v;
while(true){
var next = cljs.core.get_in.call(null,refs,map_ident.call(null,v__$1));
if(cljs.core.truth_(om.next$macros.mappable_ident_QMARK_.call(null,refs,next))){
var G__1107 = next;
v__$1 = G__1107;
continue;
} else {
return map_ident.call(null,v__$1);
}
break;
}
})():v);
var limit = ((typeof sel === 'number')?sel:new cljs.core.Keyword(null,"none","none",(1333468478)));
var union_entry = ((om.util.union_QMARK_.call(null,join__$2))?sel:((recurse_QMARK_)?union_expr:null));
var sel__$1 = ((recurse_QMARK_)?((!((union_expr == null)))?union_entry:om.next$macros.reduce_query_depth.call(null,query,key__$1)):(cljs.core.truth_((function (){var and__20770__auto__ = om.next$macros.mappable_ident_QMARK_.call(null,refs,v__$1);
if(cljs.core.truth_(and__20770__auto__)){
return om.util.union_QMARK_.call(null,join__$2);
} else {
return and__20770__auto__;
}
})())?cljs.core.get.call(null,sel,cljs.core.first.call(null,v__$1)):(((om.util.ident_QMARK_.call(null,key__$1)) && (om.util.union_QMARK_.call(null,join__$2)))?cljs.core.get.call(null,sel,cljs.core.first.call(null,key__$1)):sel
)));
var graph_loop_QMARK_ = (recurse_QMARK_) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.get.call(null,idents_seen,key__$1)),v__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"none","none",(1333468478)),limit));
var idents_seen__$1 = (cljs.core.truth_((function (){var and__20770__auto__ = om.next$macros.mappable_ident_QMARK_.call(null,refs,v__$1);
if(cljs.core.truth_(and__20770__auto__)){
return recurse_QMARK_;
} else {
return and__20770__auto__;
}
})())?cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,idents_seen,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key__$1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),v__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",(534500972)),key__$1], null),v__$1):idents_seen);
if(cljs.core._EQ_.call(null,(0),limit)){
var G__1108 = cljs.core.next.call(null,joins__$1);
var G__1109 = ret;
joins__$1 = G__1108;
ret = G__1109;
continue;
} else {
if(graph_loop_QMARK_){
var G__1110 = cljs.core.next.call(null,joins__$1);
var G__1111 = ret;
joins__$1 = G__1110;
ret = G__1111;
continue;
} else {
if((v__$1 == null)){
var G__1112 = cljs.core.next.call(null,joins__$1);
var G__1113 = ret;
joins__$1 = G__1112;
ret = G__1113;
continue;
} else {
var G__1114 = cljs.core.next.call(null,joins__$1);
var G__1115 = cljs.core.assoc.call(null,ret,key__$1,om.next$macros.denormalize_STAR_.call(null,sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1));
joins__$1 = G__1114;
ret = G__1115;
continue;

}
}
}
} else {
var temp__19520__auto__ = cljs.core.some.call(null,((function (joins__$1,ret,map__1091,map__1091__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1){
return (function (p__1100){
var vec__1101 = p__1100;
var k = cljs.core.nth.call(null,vec__1101,(0),null);
var identset = cljs.core.nth.call(null,vec__1101,(1),null);
if(cljs.core.contains_QMARK_.call(null,identset,cljs.core.get.call(null,data__$1,k))){
return cljs.core.get_in.call(null,idents_seen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",(534500972)),k], null));
} else {
return null;
}
});})(joins__$1,ret,map__1091,map__1091__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1))
,cljs.core.dissoc.call(null,idents_seen,new cljs.core.Keyword(null,"last-ident","last-ident",(534500972))));
if(cljs.core.truth_(temp__19520__auto__)){
var looped_key = temp__19520__auto__;
return looped_key;
} else {
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,data__$1,props__$1),ret);
}
}
break;
}
}

}
}
}); return (
new cljs.core.Var(function(){return om.next$macros.denormalize_STAR_;},new cljs.core.Symbol("om.next$macros","denormalize*","om.next$macros/denormalize*",(-355250537),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"denormalize*","denormalize*",(-424659025),null),"om/next.cljc",(20),(1),(2105),(2105),cljs.core.list(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null),new cljs.core.Symbol(null,"map-ident","map-ident",(-941881244),null),new cljs.core.Symbol(null,"idents-seen","idents-seen",(442271002),null),new cljs.core.Symbol(null,"union-expr","union-expr",(-2017401102),null),new cljs.core.Symbol(null,"recurse-key","recurse-key",(1211905935),null)], null)),"Denormalize a data based on query. refs is a data structure which maps idents\n   to their values. map-ident is a function taking a ident to another ident,\n   used during tempid transition. idents-seen is the set of idents encountered,\n   used to limit recursion. union-expr is the current union expression being\n   evaluated. recurse-key is key representing the current recursive query being\n   evaluted.",(cljs.core.truth_(om.next$macros.denormalize_STAR_)?om.next$macros.denormalize_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Given a query, some data in the default database format, and the entire
 * application state in the default database format, return the tree where all
 * ident links have been replaced with their original node values.
 */
(function (){
om.next$macros.db__GT_tree = (function om$next$macros$db__GT_tree(var_args){
var args1116 = [];
var len__23656__auto___1119 = arguments.length;
var i__23657__auto___1120 = (0);
while(true){
if((i__23657__auto___1120 < len__23656__auto___1119)){
args1116.push((arguments[i__23657__auto___1120]));

var G__1121 = (i__23657__auto___1120 + (1));
i__23657__auto___1120 = G__1121;
continue;
} else {
}
break;
}

var G__1118 = args1116.length;
switch (G__1118) {
case (3):
return om.next$macros.db__GT_tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return om.next$macros.db__GT_tree.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1116.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next$macros.db__GT_tree;},new cljs.core.Symbol("om.next$macros","db->tree","om.next$macros/db->tree",(-230378984),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"db->tree","db->tree",(-26752736),null),"om/next.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null),new cljs.core.Symbol(null,"map-ident","map-ident",(-941881244),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null),new cljs.core.Symbol(null,"map-ident","map-ident",(-941881244),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2233),(2233),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null),new cljs.core.Symbol(null,"map-ident","map-ident",(-941881244),null)], null)),"Given a query, some data in the default database format, and the entire\n   application state in the default database format, return the tree where all\n   ident links have been replaced with their original node values.",(cljs.core.truth_(om.next$macros.db__GT_tree)?om.next$macros.db__GT_tree.cljs$lang$test:null)])));})()
;

om.next$macros.db__GT_tree.cljs$core$IFn$_invoke$arity$3 = (function (query,data,refs){
if(cljs.core.map_QMARK_.call(null,refs)){
} else {
throw (new Error("Assert failed: (map? refs)"));
}

return om.next$macros.denormalize_STAR_.call(null,query,data,refs,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next$macros.db__GT_tree.cljs$core$IFn$_invoke$arity$4 = (function (query,data,refs,map_ident){
if(cljs.core.map_QMARK_.call(null,refs)){
} else {
throw (new Error("Assert failed: (map? refs)"));
}

return om.next$macros.denormalize_STAR_.call(null,query,data,refs,map_ident,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next$macros.db__GT_tree.cljs$lang$maxFixedArity = (4);

new cljs.core.Var(function(){return om.next$macros.db__GT_tree;},new cljs.core.Symbol("om.next$macros","db->tree","om.next$macros/db->tree",(-230378984),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"db->tree","db->tree",(-26752736),null),"om/next.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null),new cljs.core.Symbol(null,"map-ident","map-ident",(-941881244),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null),new cljs.core.Symbol(null,"map-ident","map-ident",(-941881244),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2233),(2233),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null),new cljs.core.Symbol(null,"map-ident","map-ident",(-941881244),null)], null)),"Given a query, some data in the default database format, and the entire\n   application state in the default database format, return the tree where all\n   ident links have been replaced with their original node values.",(cljs.core.truth_(om.next$macros.db__GT_tree)?om.next$macros.db__GT_tree.cljs$lang$test:null)]));
(function (){
om.next$macros.rewrite = (function om$next$macros$rewrite(rewrite_map,result){
var step = (function om$next$macros$rewrite_$_step(res,p__1144){
var vec__1148 = p__1144;
var k = cljs.core.nth.call(null,vec__1148,(0),null);
var orig_paths = cljs.core.nth.call(null,vec__1148,(1),null);
var to_move = cljs.core.get.call(null,result,k);
var res_SINGLEQUOTE_ = cljs.core.reduce.call(null,((function (to_move,vec__1148,k,orig_paths){
return (function (p1__85_SHARP_,p2__86_SHARP_){
return cljs.core.assoc_in.call(null,p1__85_SHARP_,cljs.core.conj.call(null,p2__86_SHARP_,k),to_move);
});})(to_move,vec__1148,k,orig_paths))
,res,orig_paths);
return cljs.core.dissoc.call(null,res_SINGLEQUOTE_,k);
});
return cljs.core.reduce.call(null,step,result,rewrite_map);
}); return (
new cljs.core.Var(function(){return om.next$macros.rewrite;},new cljs.core.Symbol("om.next$macros","rewrite","om.next$macros/rewrite",(-1849007413),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"rewrite","rewrite",(-1783948381),null),"om/next.cljc",(14),(1),(2247),(2247),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rewrite-map","rewrite-map",(819594757),null),new cljs.core.Symbol(null,"result","result",(-1239343558),null)], null)),null,(cljs.core.truth_(om.next$macros.rewrite)?om.next$macros.rewrite.cljs$lang$test:null)])));})()
;
/**
 * When given a join `{:join selector-vector}`, roots found so far, and a `path` prefix:
 *   returns a (possibly empty) sequence of [re-rooted-join prefix] results.
 *   Does NOT support sub-roots. Each re-rooted join will share only
 *   one common parent (their common branching point).
 *   
 */
(function (){
om.next$macros.move_roots = (function om$next$macros$move_roots(join,result_roots,path){
var query_root_QMARK_ = (function om$next$macros$move_roots_$_query_root_QMARK_(join__$1){
return new cljs.core.Keyword(null,"query-root","query-root",(359781888)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,join__$1)) === true;
});
if(cljs.core.truth_(om.util.join_QMARK_.call(null,join))){
if(cljs.core.truth_(query_root_QMARK_.call(null,join))){
return cljs.core.conj.call(null,result_roots,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [join,path], null));
} else {
return cljs.core.mapcat.call(null,(function (p1__87_SHARP_){
return om.next$macros.move_roots.call(null,p1__87_SHARP_,result_roots,cljs.core.conj.call(null,path,om.util.join_key.call(null,join)));
}),om.util.join_value.call(null,join));
}
} else {
return result_roots;
}
}); return (
new cljs.core.Var(function(){return om.next$macros.move_roots;},new cljs.core.Symbol("om.next$macros","move-roots","om.next$macros/move-roots",(-942987849),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"move-roots","move-roots",(-1012384593),null),"om/next.cljc",(18),(1),(2255),(2255),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"join","join",(881669637),null),new cljs.core.Symbol(null,"result-roots","result-roots",(889183512),null),new cljs.core.Symbol(null,"path","path",(1452340359),null)], null)),"When given a join `{:join selector-vector}`, roots found so far, and a `path` prefix:\n  returns a (possibly empty) sequence of [re-rooted-join prefix] results.\n  Does NOT support sub-roots. Each re-rooted join will share only\n  one common parent (their common branching point).\n  ",(cljs.core.truth_(om.next$macros.move_roots)?om.next$macros.move_roots.cljs$lang$test:null)])));})()
;
/**
 * Searches a query for duplicate joins and deep-merges them into a new query.
 */
(function (){
om.next$macros.merge_joins = (function om$next$macros$merge_joins(query){
var step = (function om$next$macros$merge_joins_$_step(res,expr){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"elements-seen","elements-seen",(723482521)).cljs$core$IFn$_invoke$arity$1(res),expr)){
return res;
} else {
return cljs.core.update_in.call(null,(cljs.core.truth_((function (){var and__20770__auto__ = om.util.join_QMARK_.call(null,expr);
if(cljs.core.truth_(and__20770__auto__)){
return (!(om.util.union_QMARK_.call(null,expr))) && (!(cljs.core.list_QMARK_.call(null,expr)));
} else {
return and__20770__auto__;
}
})())?(function (){var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var q = (function (){var or__20817__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"query-by-join","query-by-join",(-131270450)).cljs$core$IFn$_invoke$arity$1(res),jk);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var nq = ((om.util.recursion_QMARK_.call(null,q))?q:((om.util.recursion_QMARK_.call(null,jv))?jv:om.next$macros.merge_joins.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,q,jv)))
));
return cljs.core.update_in.call(null,res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-by-join","query-by-join",(-131270450))], null),cljs.core.assoc,jk,nq);
})():cljs.core.update_in.call(null,res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-mergeable","not-mergeable",(-291093370))], null),cljs.core.conj,expr)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements-seen","elements-seen",(723482521))], null),cljs.core.conj,expr);
}
});
var init = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"not-mergeable","not-mergeable",(-291093370)),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"query-by-join","query-by-join",(-131270450)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"elements-seen","elements-seen",(723482521)),cljs.core.PersistentHashSet.EMPTY], null);
var res = cljs.core.reduce.call(null,step,init,query);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.Keyword(null,"not-mergeable","not-mergeable",(-291093370)).cljs$core$IFn$_invoke$arity$1(res),cljs.core.mapv.call(null,((function (init,res){
return (function (p__1155){
var vec__1156 = p__1155;
var jkey = cljs.core.nth.call(null,vec__1156,(0),null);
var jsel = cljs.core.nth.call(null,vec__1156,(1),null);
return cljs.core.PersistentArrayMap.fromArray([jkey,jsel], true, false);
});})(init,res))
,new cljs.core.Keyword(null,"query-by-join","query-by-join",(-131270450)).cljs$core$IFn$_invoke$arity$1(res))));
}); return (
new cljs.core.Var(function(){return om.next$macros.merge_joins;},new cljs.core.Symbol("om.next$macros","merge-joins","om.next$macros/merge-joins",(-284290545),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"merge-joins","merge-joins",(-350144201),null),"om/next.cljc",(19),(1),(2272),(2272),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),"Searches a query for duplicate joins and deep-merges them into a new query.",(cljs.core.truth_(om.next$macros.merge_joins)?om.next$macros.merge_joins.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.process_roots = (function om$next$macros$process_roots(query){

var retain = (function om$next$macros$process_roots_$_retain(expr){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr,cljs.core.PersistentVector.EMPTY], null)], null);
});
var reroot = (function om$next$macros$process_roots_$_reroot(expr){
var roots = om.next$macros.move_roots.call(null,expr,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
if(cljs.core.empty_QMARK_.call(null,roots)){
return retain.call(null,expr);
} else {
return roots;
}
});
var rewrite_map_step = (function om$next$macros$process_roots_$_rewrite_map_step(rewrites,p__1180){
var vec__1184 = p__1180;
var expr = cljs.core.nth.call(null,vec__1184,(0),null);
var path = cljs.core.nth.call(null,vec__1184,(1),null);
if(cljs.core.empty_QMARK_.call(null,path)){
return rewrites;
} else {
return cljs.core.update_in.call(null,rewrites,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.util.join_key.call(null,expr)], null),cljs.core.conj,path);
}
});
var reroots = cljs.core.mapcat.call(null,reroot,query);
var query__$1 = om.next$macros.merge_joins.call(null,cljs.core.mapv.call(null,cljs.core.first,reroots));
var rewrite_map = cljs.core.reduce.call(null,rewrite_map_step,cljs.core.PersistentArrayMap.EMPTY,reroots);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",(-1288509510)),query__$1,new cljs.core.Keyword(null,"rewrite","rewrite",(870487388)),cljs.core.partial.call(null,om.next$macros.rewrite,rewrite_map)], null);
}); return (
new cljs.core.Var(function(){return om.next$macros.process_roots;},new cljs.core.Symbol("om.next$macros","process-roots","om.next$macros/process-roots",(-1673957292),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"process-roots","process-roots",(-1609012916),null),"om/next.cljc",(20),(1),(2301),(2301),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),null,(cljs.core.truth_(om.next$macros.process_roots)?om.next$macros.process_roots.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.merge_idents = (function om$next$macros$merge_idents(tree,config,refs,query){
var map__1203 = config;
var map__1203__$1 = ((((!((map__1203 == null)))?((((map__1203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1203):map__1203);
var merge_ident = cljs.core.get.call(null,map__1203__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",(1040841862)));
var indexer = cljs.core.get.call(null,map__1203__$1,new cljs.core.Keyword(null,"indexer","indexer",(-1774914315)));
var ident_joins = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (map__1203,map__1203__$1,merge_ident,indexer){
return (function (p1__88_SHARP_){
var and__20770__auto__ = om.util.join_QMARK_.call(null,p1__88_SHARP_);
if(cljs.core.truth_(and__20770__auto__)){
return om.util.ident_QMARK_.call(null,om.util.join_key.call(null,p1__88_SHARP_));
} else {
return and__20770__auto__;
}
});})(map__1203,map__1203__$1,merge_ident,indexer))
,query));
var step = ((function (map__1203,map__1203__$1,merge_ident,indexer,ident_joins){
return (function om$next$macros$merge_idents_$_step(tree_SINGLEQUOTE_,p__1212){
var vec__1216 = p__1212;
var ident = cljs.core.nth.call(null,vec__1216,(0),null);
var props = cljs.core.nth.call(null,vec__1216,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",(-1904390051)).cljs$core$IFn$_invoke$arity$1(config))){
var c_or_q = (function (){var or__20817__auto__ = cljs.core.get.call(null,ident_joins,ident);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return om.next$macros.ref__GT_any.call(null,indexer,ident);
}
})();
var props_SINGLEQUOTE_ = om.next$macros.tree__GT_db.call(null,c_or_q,props);
var refs__$1 = cljs.core.meta.call(null,props_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",(-127861161)).cljs$core$IFn$_invoke$arity$1(config).call(null,merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_),refs__$1);
} else {
return merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props);
}
});})(map__1203,map__1203__$1,merge_ident,indexer,ident_joins))
;
return cljs.core.reduce.call(null,step,tree,refs);
}); return (
new cljs.core.Var(function(){return om.next$macros.merge_idents;},new cljs.core.Symbol("om.next$macros","merge-idents","om.next$macros/merge-idents",(-1947202188),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"merge-idents","merge-idents",(-2016150948),null),"om/next.cljc",(20),(1),(2323),(2323),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tree","tree",(1444219499),null),new cljs.core.Symbol(null,"config","config",(-1659574354),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),null,(cljs.core.truth_(om.next$macros.merge_idents)?om.next$macros.merge_idents.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.merge_novelty_BANG_ = (function om$next$macros$merge_novelty_BANG_(reconciler,state,res,query){
var config = new cljs.core.Keyword(null,"config","config",(994861415)).cljs$core$IFn$_invoke$arity$1(reconciler);
var vec__1222 = om.next$macros.sift_idents.call(null,res);
var idts = cljs.core.nth.call(null,vec__1222,(0),null);
var res_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__1222,(1),null);
var res_SINGLEQUOTE___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",(-1904390051)).cljs$core$IFn$_invoke$arity$1(config))?om.next$macros.tree__GT_db.call(null,(function (){var or__20817__auto__ = query;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return new cljs.core.Keyword(null,"root","root",(-448657453)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(reconciler)));
}
})(),res_SINGLEQUOTE_,true):res_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",(-127861161)).cljs$core$IFn$_invoke$arity$1(config).call(null,om.next$macros.merge_idents.call(null,state,config,idts,query),res_SINGLEQUOTE___$1);
}); return (
new cljs.core.Var(function(){return om.next$macros.merge_novelty_BANG_;},new cljs.core.Symbol("om.next$macros","merge-novelty!","om.next$macros/merge-novelty!",(1605897415),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"merge-novelty!","merge-novelty!",(1402681327),null),"om/next.cljc",(22),(1),(2338),(2338),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"res","res",(245523648),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),null,(cljs.core.truth_(om.next$macros.merge_novelty_BANG_)?om.next$macros.merge_novelty_BANG_.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.default_merge = (function om$next$macros$default_merge(reconciler,state,res,query){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tempids","tempids",(1767509089)),cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"tempids","tempids",(1767509089)),cljs.core.second),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.symbol_QMARK_,cljs.core.first),res))),new cljs.core.Keyword(null,"keys","keys",(1068423698)),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,res)),new cljs.core.Keyword(null,"next","next",(-117701485)),om.next$macros.merge_novelty_BANG_.call(null,reconciler,state,res,query)], null);
}); return (
new cljs.core.Var(function(){return om.next$macros.default_merge;},new cljs.core.Symbol("om.next$macros","default-merge","om.next$macros/default-merge",(-2066890950),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"default-merge","default-merge",(-2131978558),null),"om/next.cljc",(20),(1),(2351),(2351),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"res","res",(245523648),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),null,(cljs.core.truth_(om.next$macros.default_merge)?om.next$macros.default_merge.cljs$lang$test:null)])));})()
;
/**
 * Merge a state delta into the application state. Affected components managed
 * by the reconciler will re-render.
 */
(function (){
om.next$macros.merge_BANG_ = (function om$next$macros$merge_BANG_(var_args){
var args1225 = [];
var len__23656__auto___1230 = arguments.length;
var i__23657__auto___1231 = (0);
while(true){
if((i__23657__auto___1231 < len__23656__auto___1230)){
args1225.push((arguments[i__23657__auto___1231]));

var G__1232 = (i__23657__auto___1231 + (1));
i__23657__auto___1231 = G__1232;
continue;
} else {
}
break;
}

var G__1227 = args1225.length;
switch (G__1227) {
case (2):
return om.next$macros.merge_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return om.next$macros.merge_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1225.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next$macros.merge_BANG_;},new cljs.core.Symbol("om.next$macros","merge!","om.next$macros/merge!",(988348077),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"merge!","merge!",(919144837),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"delta","delta",(1749471484),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"delta","delta",(1749471484),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"delta","delta",(1749471484),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"delta","delta",(1749471484),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2358),(2358),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"delta","delta",(1749471484),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"delta","delta",(1749471484),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),"Merge a state delta into the application state. Affected components managed\n   by the reconciler will re-render.",(cljs.core.truth_(om.next$macros.merge_BANG_)?om.next$macros.merge_BANG_.cljs$lang$test:null)])));})()
;

om.next$macros.merge_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,delta){
return om.next$macros.merge_BANG_.call(null,reconciler,delta,null);
});

om.next$macros.merge_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,delta,query){
var config = new cljs.core.Keyword(null,"config","config",(994861415)).cljs$core$IFn$_invoke$arity$1(reconciler);
var state = new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(config);
var merge_STAR_ = new cljs.core.Keyword(null,"merge","merge",(-1804319409)).cljs$core$IFn$_invoke$arity$1(config);
var map__1228 = merge_STAR_.call(null,reconciler,cljs.core.deref.call(null,state),delta,query);
var map__1228__$1 = ((((!((map__1228 == null)))?((((map__1228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1228.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1228):map__1228);
var tempids = cljs.core.get.call(null,map__1228__$1,new cljs.core.Keyword(null,"tempids","tempids",(1767509089)));
var keys = cljs.core.get.call(null,map__1228__$1,new cljs.core.Keyword(null,"keys","keys",(1068423698)));
var next = cljs.core.get.call(null,map__1228__$1,new cljs.core.Keyword(null,"next","next",(-117701485)));
om.next.protocols.queue_BANG_.call(null,reconciler,keys);

return cljs.core.reset_BANG_.call(null,state,(function (){var temp__19520__auto__ = new cljs.core.Keyword(null,"migrate","migrate",(-207110743)).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__19520__auto__)){
var migrate = temp__19520__auto__;
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,next,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",(-22717146))], null)),migrate.call(null,next,(function (){var or__20817__auto__ = query;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return om.next$macros.get_query.call(null,new cljs.core.Keyword(null,"root","root",(-448657453)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(reconciler))));
}
})(),tempids,new cljs.core.Keyword(null,"id-key","id-key",(-1881730044)).cljs$core$IFn$_invoke$arity$1(config)));
} else {
return next;
}
})());
});

om.next$macros.merge_BANG_.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return om.next$macros.merge_BANG_;},new cljs.core.Symbol("om.next$macros","merge!","om.next$macros/merge!",(988348077),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"merge!","merge!",(919144837),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"delta","delta",(1749471484),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"delta","delta",(1749471484),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"delta","delta",(1749471484),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"delta","delta",(1749471484),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2358),(2358),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"delta","delta",(1749471484),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"delta","delta",(1749471484),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),"Merge a state delta into the application state. Affected components managed\n   by the reconciler will re-render.",(cljs.core.truth_(om.next$macros.merge_BANG_)?om.next$macros.merge_BANG_.cljs$lang$test:null)]));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IReconciler}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next$macros.Reconciler = (function (config,state,__meta,__extmap,__hash){
this.config = config;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065266934;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next$macros.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22669__auto__,k__22670__auto__){
var self__ = this;
var this__22669__auto____$1 = this;
return cljs.core._lookup.call(null,this__22669__auto____$1,k__22670__auto__,null);
});

om.next$macros.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22671__auto__,k1235,else__22672__auto__){
var self__ = this;
var this__22671__auto____$1 = this;
var G__1237 = (((k1235 instanceof cljs.core.Keyword))?k1235.fqn:null);
switch (G__1237) {
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1235,else__22672__auto__);

}
});

om.next$macros.Reconciler.prototype.om$next$protocols$IReconciler$ = cljs.core.PROTOCOL_SENTINEL;

om.next$macros.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$2 = (function (_,ks){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",(1455835879))], null),cljs.core.into,ks);
});

om.next$macros.Reconciler.prototype.om$next$protocols$IReconciler$queue_sends_BANG_$arity$2 = (function (_,sends){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued-sends","queued-sends",(278114765))], null),new cljs.core.Keyword(null,"merge-sends","merge-sends",(-1718434202)).cljs$core$IFn$_invoke$arity$1(self__.config),sends);
});

om.next$macros.Reconciler.prototype.om$next$protocols$IReconciler$send_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sends = new cljs.core.Keyword(null,"queued-sends","queued-sends",(278114765)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.empty_QMARK_.call(null,sends)){
return null;
} else {
cljs.core.swap_BANG_.call(null,self__.state,((function (sends,this$__$1){
return (function (state__$1){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"queued-sends","queued-sends",(278114765)),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"sends-queued","sends-queued",(-1276878712)),false);
});})(sends,this$__$1))
);

return new cljs.core.Keyword(null,"send","send",(-652151114)).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,sends,((function (sends,this$__$1){
return (function() {
var om$next$macros$send_cb = null;
var om$next$macros$send_cb__1 = (function (res){
return om.next$macros.merge_BANG_.call(null,this$__$1,res,null);
});
var om$next$macros$send_cb__2 = (function (res,query){
return om.next$macros.merge_BANG_.call(null,this$__$1,res,query);
});
om$next$macros$send_cb = function(res,query){
switch(arguments.length){
case 1:
return om$next$macros$send_cb__1.call(this,res);
case 2:
return om$next$macros$send_cb__2.call(this,res,query);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$macros$send_cb.cljs$core$IFn$_invoke$arity$1 = om$next$macros$send_cb__1;
om$next$macros$send_cb.cljs$core$IFn$_invoke$arity$2 = om$next$macros$send_cb__2;
return om$next$macros$send_cb;
})()
;})(sends,this$__$1))
);
}
});

om.next$macros.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var st = cljs.core.deref.call(null,self__.state);
var q = new cljs.core.Keyword(null,"queue","queue",(1455835879)).cljs$core$IFn$_invoke$arity$1(st);
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued","queued",(1701634607))], null),cljs.core.not);

cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queue","queue",(1455835879)),cljs.core.PersistentVector.EMPTY);

if(cljs.core.empty_QMARK_.call(null,q)){
return new cljs.core.Keyword(null,"render","render",(-1408033454)).cljs$core$IFn$_invoke$arity$1(st).call(null);
} else {
var cs = cljs.core.transduce.call(null,cljs.core.map.call(null,((function (st,q,this$__$1){
return (function (p1__90_SHARP_){
return om.next.protocols.key__GT_components.call(null,new cljs.core.Keyword(null,"indexer","indexer",(-1774914315)).cljs$core$IFn$_invoke$arity$1(self__.config),p1__90_SHARP_);
});})(st,q,this$__$1))
),((function (st,q,this$__$1){
return (function (p1__91_SHARP_,p2__92_SHARP_){
return cljs.core.into.call(null,p1__91_SHARP_,p2__92_SHARP_);
});})(st,q,this$__$1))
,cljs.core.PersistentHashSet.EMPTY,q);
var map__1238 = self__.config;
var map__1238__$1 = ((((!((map__1238 == null)))?((((map__1238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1238):map__1238);
var ui__GT_props = cljs.core.get.call(null,map__1238__$1,new cljs.core.Keyword(null,"ui->props","ui->props",(-237981102)));
var env = om.next$macros.to_env.call(null,self__.config);
var root = new cljs.core.Keyword(null,"root","root",(-448657453)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
var seq__1240 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"optimize","optimize",(-1912349448)).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,cs));
var chunk__1241 = null;
var count__1242 = (0);
var i__1243 = (0);
while(true){
if((i__1243 < count__1242)){
var c = cljs.core._nth.call(null,chunk__1241,i__1243);
var props_change_QMARK__1251 = (om.next.protocols.basis_t.call(null,this$__$1) > om.next$macros.t.call(null,c));
if(om.next$macros.mounted_QMARK_.call(null,c)){
var computed_1252 = om.next$macros.get_computed.call(null,om.next$macros.props.call(null,c));
var next_raw_props_1253 = ui__GT_props.call(null,env,c);
var next_props_1254 = om.next$macros.computed.call(null,next_raw_props_1253,computed_1252);
if((typeof c.componentWillReceiveProps !== 'undefined') && (om.next$macros.iquery_QMARK_.call(null,root)) && (props_change_QMARK__1251)){
var next_props_1255__$1 = (((next_props_1254 == null))?(function (){var temp__19834__auto__ = om.next$macros.props.call(null,c);
if(cljs.core.truth_(temp__19834__auto__)){
var props = temp__19834__auto__;
return props;
} else {
return null;
}
})():next_props_1254);
c.componentWillReceiveProps(({"omcljs$value": om.next$macros.om_props.call(null,next_props_1255__$1,om.next.protocols.basis_t.call(null,this$__$1))}));
} else {
}

if(cljs.core.truth_(om.next$macros.should_update_QMARK_.call(null,c,next_props_1254,om.next$macros.get_state.call(null,c)))){
if(!((next_props_1254 == null))){
om.next$macros.update_component_BANG_.call(null,c,next_props_1254);
} else {
c.forceUpdate();
}

if((om.next$macros.iquery_QMARK_.call(null,root)) && (cljs.core.not_EQ_.call(null,c,root)) && (props_change_QMARK__1251)){
var temp__19834__auto___1256 = om.next$macros.path.call(null,c);
if(cljs.core.truth_(temp__19834__auto___1256)){
var update_path_1257 = temp__19834__auto___1256;
var p_1258 = om.next$macros.parent.call(null,c);
while(true){
if(cljs.core.some_QMARK_.call(null,p_1258)){
var update_path_SINGLEQUOTE__1259 = cljs.core.subvec.call(null,update_path_1257,cljs.core.count.call(null,om.next$macros.path.call(null,p_1258)));
om.next$macros.update_props_BANG_.call(null,p_1258,cljs.core.assoc_in.call(null,om.next$macros.props.call(null,p_1258),update_path_SINGLEQUOTE__1259,next_raw_props_1253));

om.next$macros.merge_pending_props_BANG_.call(null,p_1258);

var G__1260 = om.next$macros.parent.call(null,p_1258);
p_1258 = G__1260;
continue;
} else {
}
break;
}
} else {
}
} else {
}
} else {
}
} else {
}

var G__1261 = seq__1240;
var G__1262 = chunk__1241;
var G__1263 = count__1242;
var G__1264 = (i__1243 + (1));
seq__1240 = G__1261;
chunk__1241 = G__1262;
count__1242 = G__1263;
i__1243 = G__1264;
continue;
} else {
var temp__19834__auto__ = cljs.core.seq.call(null,seq__1240);
if(temp__19834__auto__){
var seq__1240__$1 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1240__$1)){
var c__23363__auto__ = cljs.core.chunk_first.call(null,seq__1240__$1);
var G__1265 = cljs.core.chunk_rest.call(null,seq__1240__$1);
var G__1266 = c__23363__auto__;
var G__1267 = cljs.core.count.call(null,c__23363__auto__);
var G__1268 = (0);
seq__1240 = G__1265;
chunk__1241 = G__1266;
count__1242 = G__1267;
i__1243 = G__1268;
continue;
} else {
var c = cljs.core.first.call(null,seq__1240__$1);
var props_change_QMARK__1269 = (om.next.protocols.basis_t.call(null,this$__$1) > om.next$macros.t.call(null,c));
if(om.next$macros.mounted_QMARK_.call(null,c)){
var computed_1270 = om.next$macros.get_computed.call(null,om.next$macros.props.call(null,c));
var next_raw_props_1271 = ui__GT_props.call(null,env,c);
var next_props_1272 = om.next$macros.computed.call(null,next_raw_props_1271,computed_1270);
if((typeof c.componentWillReceiveProps !== 'undefined') && (om.next$macros.iquery_QMARK_.call(null,root)) && (props_change_QMARK__1269)){
var next_props_1273__$1 = (((next_props_1272 == null))?(function (){var temp__19834__auto____$1 = om.next$macros.props.call(null,c);
if(cljs.core.truth_(temp__19834__auto____$1)){
var props = temp__19834__auto____$1;
return props;
} else {
return null;
}
})():next_props_1272);
c.componentWillReceiveProps(({"omcljs$value": om.next$macros.om_props.call(null,next_props_1273__$1,om.next.protocols.basis_t.call(null,this$__$1))}));
} else {
}

if(cljs.core.truth_(om.next$macros.should_update_QMARK_.call(null,c,next_props_1272,om.next$macros.get_state.call(null,c)))){
if(!((next_props_1272 == null))){
om.next$macros.update_component_BANG_.call(null,c,next_props_1272);
} else {
c.forceUpdate();
}

if((om.next$macros.iquery_QMARK_.call(null,root)) && (cljs.core.not_EQ_.call(null,c,root)) && (props_change_QMARK__1269)){
var temp__19834__auto___1274__$1 = om.next$macros.path.call(null,c);
if(cljs.core.truth_(temp__19834__auto___1274__$1)){
var update_path_1275 = temp__19834__auto___1274__$1;
var p_1276 = om.next$macros.parent.call(null,c);
while(true){
if(cljs.core.some_QMARK_.call(null,p_1276)){
var update_path_SINGLEQUOTE__1277 = cljs.core.subvec.call(null,update_path_1275,cljs.core.count.call(null,om.next$macros.path.call(null,p_1276)));
om.next$macros.update_props_BANG_.call(null,p_1276,cljs.core.assoc_in.call(null,om.next$macros.props.call(null,p_1276),update_path_SINGLEQUOTE__1277,next_raw_props_1271));

om.next$macros.merge_pending_props_BANG_.call(null,p_1276);

var G__1278 = om.next$macros.parent.call(null,p_1276);
p_1276 = G__1278;
continue;
} else {
}
break;
}
} else {
}
} else {
}
} else {
}
} else {
}

var G__1279 = cljs.core.next.call(null,seq__1240__$1);
var G__1280 = null;
var G__1281 = (0);
var G__1282 = (0);
seq__1240 = G__1279;
chunk__1241 = G__1280;
count__1242 = G__1281;
i__1243 = G__1282;
continue;
}
} else {
return null;
}
}
break;
}
}
});

om.next$macros.Reconciler.prototype.om$next$protocols$IReconciler$schedule_render_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"queued","queued",(1701634607)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queued","queued",(1701634607)),true);

return true;
} else {
return false;
}
});

om.next$macros.Reconciler.prototype.om$next$protocols$IReconciler$schedule_sends_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"sends-queued","sends-queued",(-1276878712)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"sends-queued","sends-queued",(-1276878712)),true);

return true;
} else {
return false;
}
});

om.next$macros.Reconciler.prototype.om$next$protocols$IReconciler$basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"t","t",(-1397832519)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
});

om.next$macros.Reconciler.prototype.om$next$protocols$IReconciler$add_root_BANG_$arity$4 = (function (this$,root_class,target,options){
var self__ = this;
var this$__$1 = this;
var ret = cljs.core.atom.call(null,null);
var rctor = om.next$macros.factory.call(null,root_class);
var guid = cljs.core.random_uuid.call(null);
if(om.next$macros.iquery_QMARK_.call(null,root_class)){
om.next.protocols.index_root.call(null,new cljs.core.Keyword(null,"indexer","indexer",(-1774914315)).cljs$core$IFn$_invoke$arity$1(self__.config),root_class);
} else {
}

if(cljs.core.truth_((function (){var and__20770__auto__ = new cljs.core.Keyword(null,"normalize","normalize",(-1904390051)).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(and__20770__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"normalized","normalized",(-1887621663)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)));
} else {
return and__20770__auto__;
}
})())){
var new_state_1283 = om.next$macros.tree__GT_db.call(null,root_class,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(self__.config)));
var refs_1284 = cljs.core.meta.call(null,new_state_1283);
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.merge.call(null,new_state_1283,refs_1284));

cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"normalized","normalized",(-1887621663)),true);
} else {
}

var renderf = ((function (ret,rctor,guid,this$__$1){
return (function (data){
var _STAR_reconciler_STAR_1244 = om.next$macros._STAR_reconciler_STAR_;
var _STAR_shared_STAR_1245 = om.next$macros._STAR_shared_STAR_;
var _STAR_instrument_STAR_1246 = om.next$macros._STAR_instrument_STAR_;
om.next$macros._STAR_reconciler_STAR_ = this$__$1;

om.next$macros._STAR_shared_STAR_ = cljs.core.merge.call(null,new cljs.core.Keyword(null,"shared","shared",(-384145993)).cljs$core$IFn$_invoke$arity$1(self__.config),(cljs.core.truth_(new cljs.core.Keyword(null,"shared-fn","shared-fn",(-180260144)).cljs$core$IFn$_invoke$arity$1(self__.config))?new cljs.core.Keyword(null,"shared-fn","shared-fn",(-180260144)).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,data):null));

om.next$macros._STAR_instrument_STAR_ = new cljs.core.Keyword(null,"instrument","instrument",(-960698844)).cljs$core$IFn$_invoke$arity$1(self__.config);

try{var c = ((!((target == null)))?new cljs.core.Keyword(null,"root-render","root-render",(835981146)).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,rctor.call(null,data),target):(((cljs.core.deref.call(null,ret) == null))?rctor.call(null,data):(function (){var temp__19834__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(temp__19834__auto__)){
var c_SINGLEQUOTE_ = temp__19834__auto__;
if(om.next$macros.mounted_QMARK_.call(null,c_SINGLEQUOTE_)){
return c_SINGLEQUOTE_.forceUpdate(data);
} else {
return null;
}
} else {
return null;
}
})()
));
if(((cljs.core.deref.call(null,ret) == null)) && (!((c == null)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"root","root",(-448657453)),c);

return cljs.core.reset_BANG_.call(null,ret,c);
} else {
return null;
}
}finally {om.next$macros._STAR_instrument_STAR_ = _STAR_instrument_STAR_1246;

om.next$macros._STAR_shared_STAR_ = _STAR_shared_STAR_1245;

om.next$macros._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_1244;
}});})(ret,rctor,guid,this$__$1))
;
var parsef = ((function (renderf,ret,rctor,guid,this$__$1){
return (function (){
var sel = om.next$macros.get_query.call(null,(function (){var or__20817__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return root_class;
}
})());
if(((sel == null)) || (cljs.core.vector_QMARK_.call(null,sel))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Application root query must be a vector"),cljs.core.str("\n"),cljs.core.str("(or (nil? sel) (vector? sel))")].join('')));
}

if(!((sel == null))){
var env = om.next$macros.to_env.call(null,self__.config);
var v = new cljs.core.Keyword(null,"parser","parser",(-1543495310)).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env,sel);
if(cljs.core.empty_QMARK_.call(null,v)){
return null;
} else {
return renderf.call(null,v);
}
} else {
return renderf.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(self__.config)));
}
});})(renderf,ret,rctor,guid,this$__$1))
;
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"remove","remove",(-131428414)),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (){
cljs.core.remove_watch.call(null,new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__20817__auto__ = target;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return guid;
}
})());

cljs.core.swap_BANG_.call(null,self__.state,((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (p1__89_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__89_SHARP_,new cljs.core.Keyword(null,"target","target",(253001721))),new cljs.core.Keyword(null,"render","render",(-1408033454))),new cljs.core.Keyword(null,"root","root",(-448657453))),new cljs.core.Keyword(null,"remove","remove",(-131428414)));
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

if((target == null)){
return null;
} else {
return new cljs.core.Keyword(null,"root-unmount","root-unmount",(1692900789)).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,target);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
,new cljs.core.Keyword(null,"render","render",(-1408033454)),parsef,new cljs.core.Keyword(null,"root","root",(-448657453)),root_class,new cljs.core.Keyword(null,"target","target",(253001721)),target], null));

cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__20817__auto__ = target;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return guid;
}
})(),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (_,___$1,___$2,___$3){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",(-1397832519))], null),cljs.core.inc);

if(!(om.next$macros.iquery_QMARK_.call(null,root_class))){
return om.next$macros.queue_render_BANG_.call(null,parsef);
} else {
return om.next$macros.schedule_render_BANG_.call(null,this$__$1);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

parsef.call(null);

var temp__19834__auto___1285 = om.next$macros.get_query.call(null,(function (){var or__20817__auto__ = (function (){var and__20770__auto__ = target;
if(cljs.core.truth_(and__20770__auto__)){
return cljs.core.deref.call(null,ret);
} else {
return and__20770__auto__;
}
})();
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return root_class;
}
})());
if(cljs.core.truth_(temp__19834__auto___1285)){
var sel_1286 = temp__19834__auto___1285;
var env_1287 = om.next$macros.to_env.call(null,self__.config);
var snds_1288 = om.next$macros.gather_sends.call(null,env_1287,sel_1286,new cljs.core.Keyword(null,"remotes","remotes",(1132366312)).cljs$core$IFn$_invoke$arity$1(self__.config));
if(cljs.core.empty_QMARK_.call(null,snds_1288)){
} else {
var temp__19834__auto___1289__$1 = new cljs.core.Keyword(null,"send","send",(-652151114)).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(temp__19834__auto___1289__$1)){
var send_1290 = temp__19834__auto___1289__$1;
send_1290.call(null,snds_1288,((function (send_1290,temp__19834__auto___1289__$1,env_1287,snds_1288,sel_1286,temp__19834__auto___1285,renderf,parsef,ret,rctor,guid,this$__$1){
return (function() {
var om$next$macros$send_cb = null;
var om$next$macros$send_cb__1 = (function (res){
om.next$macros.merge_BANG_.call(null,this$__$1,res,null);

return renderf.call(null,new cljs.core.Keyword(null,"parser","parser",(-1543495310)).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_1287,sel_1286));
});
var om$next$macros$send_cb__2 = (function (res,query){
om.next$macros.merge_BANG_.call(null,this$__$1,res,query);

return renderf.call(null,new cljs.core.Keyword(null,"parser","parser",(-1543495310)).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_1287,sel_1286));
});
om$next$macros$send_cb = function(res,query){
switch(arguments.length){
case 1:
return om$next$macros$send_cb__1.call(this,res);
case 2:
return om$next$macros$send_cb__2.call(this,res,query);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$macros$send_cb.cljs$core$IFn$_invoke$arity$1 = om$next$macros$send_cb__1;
om$next$macros$send_cb.cljs$core$IFn$_invoke$arity$2 = om$next$macros$send_cb__2;
return om$next$macros$send_cb;
})()
;})(send_1290,temp__19834__auto___1289__$1,env_1287,snds_1288,sel_1286,temp__19834__auto___1285,renderf,parsef,ret,rctor,guid,this$__$1))
);
} else {
}
}
} else {
}

return cljs.core.deref.call(null,ret);
});

om.next$macros.Reconciler.prototype.om$next$protocols$IReconciler$reindex_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var root = cljs.core.get.call(null,cljs.core.deref.call(null,self__.state),new cljs.core.Keyword(null,"root","root",(-448657453)));
if(om.next$macros.iquery_QMARK_.call(null,root)){
var indexer = new cljs.core.Keyword(null,"indexer","indexer",(-1774914315)).cljs$core$IFn$_invoke$arity$1(self__.config);
var c = cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",(436435919)),root], null)));
return om.next.protocols.index_root.call(null,indexer,(function (){var or__20817__auto__ = c;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return root;
}
})());
} else {
return null;
}
});

om.next$macros.Reconciler.prototype.om$next$protocols$IReconciler$remove_root_BANG_$arity$2 = (function (_,target){
var self__ = this;
var ___$1 = this;
var temp__19834__auto__ = new cljs.core.Keyword(null,"remove","remove",(-131428414)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.truth_(temp__19834__auto__)){
var remove = temp__19834__auto__;
return remove.call(null);
} else {
return null;
}
});

om.next$macros.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22689__auto__,writer__22690__auto__,opts__22691__auto__){
var self__ = this;
var this__22689__auto____$1 = this;
var pr_pair__22692__auto__ = ((function (this__22689__auto____$1){
return (function (keyval__22693__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22690__auto__,cljs.core.pr_writer,""," ","",opts__22691__auto__,keyval__22693__auto__);
});})(this__22689__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22690__auto__,pr_pair__22692__auto__,"#om.next$macros.Reconciler{",", ","}",opts__22691__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",(994861415)),self__.config],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",(-1988618099)),self__.state],null))], null),self__.__extmap));
});

om.next$macros.Reconciler.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

om.next$macros.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1234){
var self__ = this;
var G__1234__$1 = this;
return (new cljs.core.RecordIter((0),G__1234__$1,(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",(994861415)),new cljs.core.Keyword(null,"state","state",(-1988618099))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

om.next$macros.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22667__auto__){
var self__ = this;
var this__22667__auto____$1 = this;
return self__.__meta;
});

om.next$macros.Reconciler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22663__auto__){
var self__ = this;
var this__22663__auto____$1 = this;
return (new om.next$macros.Reconciler(self__.config,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});

om.next$macros.Reconciler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22673__auto__){
var self__ = this;
var this__22673__auto____$1 = this;
return ((2) + cljs.core.count.call(null,self__.__extmap));
});

om.next$macros.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22664__auto__){
var self__ = this;
var this__22664__auto____$1 = this;
var h__21845__auto__ = self__.__hash;
if(!((h__21845__auto__ == null))){
return h__21845__auto__;
} else {
var h__21845__auto____$1 = cljs.core.hash_imap.call(null,this__22664__auto____$1);
self__.__hash = h__21845__auto____$1;

return h__21845__auto____$1;
}
});

om.next$macros.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22665__auto__,other__22666__auto__){
var self__ = this;
var this__22665__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20770__auto__ = other__22666__auto__;
if(cljs.core.truth_(and__20770__auto__)){
var and__20770__auto____$1 = (this__22665__auto____$1.constructor === other__22666__auto__.constructor);
if(and__20770__auto____$1){
return cljs.core.equiv_map.call(null,this__22665__auto____$1,other__22666__auto__);
} else {
return and__20770__auto____$1;
}
} else {
return and__20770__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next$macros.Reconciler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22679__auto__,k__22680__auto__){
var self__ = this;
var this__22679__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config","config",(994861415)),null,new cljs.core.Keyword(null,"state","state",(-1988618099)),null], null), null),k__22680__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22679__auto____$1),self__.__meta),k__22680__auto__);
} else {
return (new om.next$macros.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22680__auto__)),null));
}
});

om.next$macros.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22677__auto__,k__22678__auto__,G__1234){
var self__ = this;
var this__22677__auto____$1 = this;
var pred__1247 = cljs.core.keyword_identical_QMARK_;
var expr__1248 = k__22678__auto__;
if(cljs.core.truth_(pred__1247.call(null,new cljs.core.Keyword(null,"config","config",(994861415)),expr__1248))){
return (new om.next$macros.Reconciler(G__1234,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1247.call(null,new cljs.core.Keyword(null,"state","state",(-1988618099)),expr__1248))){
return (new om.next$macros.Reconciler(self__.config,G__1234,self__.__meta,self__.__extmap,null));
} else {
return (new om.next$macros.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22678__auto__,G__1234),null));
}
}
});

om.next$macros.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22683__auto__){
var self__ = this;
var this__22683__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",(994861415)),self__.config],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",(-1988618099)),self__.state],null))], null),self__.__extmap));
});

om.next$macros.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22668__auto__,G__1234){
var self__ = this;
var this__22668__auto____$1 = this;
return (new om.next$macros.Reconciler(self__.config,self__.state,G__1234,self__.__extmap,self__.__hash));
});

om.next$macros.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22674__auto__,entry__22675__auto__){
var self__ = this;
var this__22674__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22675__auto__)){
return cljs.core._assoc.call(null,this__22674__auto____$1,cljs.core._nth.call(null,entry__22675__auto__,(0)),cljs.core._nth.call(null,entry__22675__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22674__auto____$1,entry__22675__auto__);
}
});

om.next$macros.Reconciler.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(self__.config));
});

om.next$macros.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",(-1659574354),null),new cljs.core.Symbol(null,"state","state",(-348086572),null)], null);
});

om.next$macros.Reconciler.cljs$lang$type = true;

om.next$macros.Reconciler.cljs$lang$ctorPrSeq = (function (this__23044__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next$macros/Reconciler");
});

om.next$macros.Reconciler.cljs$lang$ctorPrWriter = (function (this__23044__auto__,writer__23045__auto__){
return cljs.core._write.call(null,writer__23045__auto__,"om.next$macros/Reconciler");
});

(function (){
om.next$macros.__GT_Reconciler = (function om$next$macros$__GT_Reconciler(config,state){
return (new om.next$macros.Reconciler(config,state,null,null,null));
}); return (
new cljs.core.Var(function(){return om.next$macros.__GT_Reconciler;},new cljs.core.Symbol("om.next$macros","->Reconciler","om.next$macros/->Reconciler",(-1397874385),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"->Reconciler","->Reconciler",(-791869417),null),"om/next.cljc",(22),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(2377),(2377),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",(-1659574354),null),new cljs.core.Symbol(null,"state","state",(-348086572),null)], null)),null,(cljs.core.truth_(om.next$macros.__GT_Reconciler)?om.next$macros.__GT_Reconciler.cljs$lang$test:null)])));})()
;

(function (){
om.next$macros.map__GT_Reconciler = (function om$next$macros$map__GT_Reconciler(G__1236){
return (new om.next$macros.Reconciler(new cljs.core.Keyword(null,"config","config",(994861415)).cljs$core$IFn$_invoke$arity$1(G__1236),new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(G__1236),null,cljs.core.dissoc.call(null,G__1236,new cljs.core.Keyword(null,"config","config",(994861415)),new cljs.core.Keyword(null,"state","state",(-1988618099))),null));
}); return (
new cljs.core.Var(function(){return om.next$macros.map__GT_Reconciler;},new cljs.core.Symbol("om.next$macros","map->Reconciler","om.next$macros/map->Reconciler",(1346785827),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"map->Reconciler","map->Reconciler",(-1402517237),null),"om/next.cljc",(22),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(2377),(2377),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__1236","G__1236",(-1943770311),null)], null)),null,(cljs.core.truth_(om.next$macros.map__GT_Reconciler)?om.next$macros.map__GT_Reconciler.cljs$lang$test:null)])));})()
;

(function (){
om.next$macros.default_ui__GT_props = (function om$next$macros$default_ui__GT_props(p__1291,c){
var map__1297 = p__1291;
var map__1297__$1 = ((((!((map__1297 == null)))?((((map__1297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1297):map__1297);
var env = map__1297__$1;
var pathopt = cljs.core.get.call(null,map__1297__$1,new cljs.core.Keyword(null,"pathopt","pathopt",(-61073149)));
var parser = cljs.core.get.call(null,map__1297__$1,new cljs.core.Keyword(null,"parser","parser",(-1543495310)));
var ui = (((function (){var and__20770__auto__ = pathopt;
if(and__20770__auto__){
var and__20770__auto____$1 = ((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$macros$Ident$)))?true:false):false);
if(and__20770__auto____$1){
return om.next$macros.iquery_QMARK_.call(null,c);
} else {
return and__20770__auto____$1;
}
} else {
return and__20770__auto__;
}
})())?(function (){var id = om.next$macros.ident.call(null,c,om.next$macros.props.call(null,c));
return cljs.core.get.call(null,parser.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([id,om.next$macros.get_query.call(null,c)], true, false)], null)),id);
})():null);
if(!((ui == null))){
return ui;
} else {
var fq = om.next$macros.full_query.call(null,c);
if((fq == null)){
return null;
} else {
var s = cljs.core.system_time.call(null);
var ui__$1 = parser.call(null,env,fq);
var e = cljs.core.system_time.call(null);
var temp__19834__auto___1302 = new cljs.core.Keyword(null,"logger","logger",(-220675947)).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__19834__auto___1302)){
var l_1303 = temp__19834__auto___1302;
var dt_1304 = (e - s);
if(((16) < dt_1304)){
goog.log.warning(l_1303,[cljs.core.str(c),cljs.core.str(" query took "),cljs.core.str(dt_1304),cljs.core.str(" msecs")].join(''));
} else {
}
} else {
}

return cljs.core.get_in.call(null,ui__$1,om.next$macros.path.call(null,c));
}
}
}); return (
new cljs.core.Var(function(){return om.next$macros.default_ui__GT_props;},new cljs.core.Symbol("om.next$macros","default-ui->props","om.next$macros/default-ui->props",(-455055421),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"default-ui->props","default-ui->props",(-528380117),null),"om/next.cljc",(24),(1),(2555),(2555),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parser","parser",(97036217),null),cljs.core.with_meta(new cljs.core.Symbol(null,"pathopt","pathopt",(1579458378),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null)], null))], null)], null),new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(om.next$macros.default_ui__GT_props)?om.next$macros.default_ui__GT_props.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.default_merge_ident = (function om$next$macros$default_merge_ident(_,tree,ref,props){
return cljs.core.update_in.call(null,tree,ref,cljs.core.merge,props);
}); return (
new cljs.core.Var(function(){return om.next$macros.default_merge_ident;},new cljs.core.Symbol("om.next$macros","default-merge-ident","om.next$macros/default-merge-ident",(-1598308271),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"default-merge-ident","default-merge-ident",(-1537549975),null),"om/next.cljc",(26),(1),(2577),(2577),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",(-1201019570),null),new cljs.core.Symbol(null,"tree","tree",(1444219499),null),new cljs.core.Symbol(null,"ref","ref",(-1364538802),null),new cljs.core.Symbol(null,"props","props",(2093813254),null)], null)),null,(cljs.core.truth_(om.next$macros.default_merge_ident)?om.next$macros.default_merge_ident.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.default_merge_tree = (function om$next$macros$default_merge_tree(a,b){
if(cljs.core.map_QMARK_.call(null,a)){
return cljs.core.merge.call(null,a,b);
} else {
return b;
}
}); return (
new cljs.core.Var(function(){return om.next$macros.default_merge_tree;},new cljs.core.Symbol("om.next$macros","default-merge-tree","om.next$macros/default-merge-tree",(-1306972249),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"default-merge-tree","default-merge-tree",(-1103624561),null),"om/next.cljc",(25),(1),(2581),(2581),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null)], null)),null,(cljs.core.truth_(om.next$macros.default_merge_tree)?om.next$macros.default_merge_tree.cljs$lang$test:null)])));})()
;
/**
 * Given app-state-pure (the application state as an immutable value), a query,
 * tempids (a hash map from tempid to stable id), and an optional id-key
 * keyword, return a new application state value with the tempids replaced by
 * the stable ids.
 */
(function (){
om.next$macros.default_migrate = (function om$next$macros$default_migrate(var_args){
var args1305 = [];
var len__23656__auto___1352 = arguments.length;
var i__23657__auto___1353 = (0);
while(true){
if((i__23657__auto___1353 < len__23656__auto___1352)){
args1305.push((arguments[i__23657__auto___1353]));

var G__1354 = (i__23657__auto___1353 + (1));
i__23657__auto___1353 = G__1354;
continue;
} else {
}
break;
}

var G__1307 = args1305.length;
switch (G__1307) {
case (3):
return om.next$macros.default_migrate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return om.next$macros.default_migrate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1305.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next$macros.default_migrate;},new cljs.core.Symbol("om.next$macros","default-migrate","om.next$macros/default-migrate",(577553587),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"default-migrate","default-migrate",(642510251),null),"om/next.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state-pure","app-state-pure",(865242660),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"tempids","tempids",(-886926680),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state-pure","app-state-pure",(865242660),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"tempids","tempids",(-886926680),null),new cljs.core.Symbol(null,"id-key","id-key",(-241198517),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state-pure","app-state-pure",(865242660),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"tempids","tempids",(-886926680),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state-pure","app-state-pure",(865242660),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"tempids","tempids",(-886926680),null),new cljs.core.Symbol(null,"id-key","id-key",(-241198517),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2587),(2587),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state-pure","app-state-pure",(865242660),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"tempids","tempids",(-886926680),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state-pure","app-state-pure",(865242660),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"tempids","tempids",(-886926680),null),new cljs.core.Symbol(null,"id-key","id-key",(-241198517),null)], null)),"Given app-state-pure (the application state as an immutable value), a query,\n   tempids (a hash map from tempid to stable id), and an optional id-key\n   keyword, return a new application state value with the tempids replaced by\n   the stable ids.",(cljs.core.truth_(om.next$macros.default_migrate)?om.next$macros.default_migrate.cljs$lang$test:null)])));})()
;

om.next$macros.default_migrate.cljs$core$IFn$_invoke$arity$3 = (function (app_state_pure,query,tempids){
return om.next$macros.default_migrate.call(null,app_state_pure,query,tempids,null);
});

om.next$macros.default_migrate.cljs$core$IFn$_invoke$arity$4 = (function (app_state_pure,query,tempids,id_key){
var dissoc_in = (function om$next$macros$dissoc_in(pure,p__1330){
var vec__1334 = p__1330;
var table = cljs.core.nth.call(null,vec__1334,(0),null);
var id = cljs.core.nth.call(null,vec__1334,(1),null);
return cljs.core.assoc.call(null,pure,table,cljs.core.dissoc.call(null,cljs.core.get.call(null,pure,table),id));
});
var step = (function om$next$macros$step(pure,p__1337){
var vec__1345 = p__1337;
var old = cljs.core.nth.call(null,vec__1345,(0),null);
var vec__1348 = cljs.core.nth.call(null,vec__1345,(1),null);
var _ = cljs.core.nth.call(null,vec__1348,(0),null);
var id = cljs.core.nth.call(null,vec__1348,(1),null);
var new$ = vec__1348;
return cljs.core.assoc_in.call(null,dissoc_in.call(null,pure,old),new$,(function (){var G__1351 = cljs.core.merge.call(null,cljs.core.get_in.call(null,pure,old),cljs.core.get_in.call(null,pure,new$));
var G__1351__$1 = ((!((id_key == null)))?cljs.core.assoc.call(null,G__1351,id_key,id):G__1351);
return G__1351__$1;
})());
});
if(!(cljs.core.empty_QMARK_.call(null,tempids))){
var pure_SINGLEQUOTE_ = cljs.core.reduce.call(null,step,app_state_pure,tempids);
return om.next$macros.tree__GT_db.call(null,query,om.next$macros.db__GT_tree.call(null,query,pure_SINGLEQUOTE_,pure_SINGLEQUOTE_,((function (pure_SINGLEQUOTE_){
return (function (ident){
return cljs.core.get.call(null,tempids,ident,ident);
});})(pure_SINGLEQUOTE_))
),true);
} else {
return app_state_pure;
}
});

om.next$macros.default_migrate.cljs$lang$maxFixedArity = (4);

new cljs.core.Var(function(){return om.next$macros.default_migrate;},new cljs.core.Symbol("om.next$macros","default-migrate","om.next$macros/default-migrate",(577553587),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"default-migrate","default-migrate",(642510251),null),"om/next.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state-pure","app-state-pure",(865242660),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"tempids","tempids",(-886926680),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state-pure","app-state-pure",(865242660),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"tempids","tempids",(-886926680),null),new cljs.core.Symbol(null,"id-key","id-key",(-241198517),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state-pure","app-state-pure",(865242660),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"tempids","tempids",(-886926680),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state-pure","app-state-pure",(865242660),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"tempids","tempids",(-886926680),null),new cljs.core.Symbol(null,"id-key","id-key",(-241198517),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2587),(2587),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state-pure","app-state-pure",(865242660),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"tempids","tempids",(-886926680),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state-pure","app-state-pure",(865242660),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"tempids","tempids",(-886926680),null),new cljs.core.Symbol(null,"id-key","id-key",(-241198517),null)], null)),"Given app-state-pure (the application state as an immutable value), a query,\n   tempids (a hash map from tempid to stable id), and an optional id-key\n   keyword, return a new application state value with the tempids replaced by\n   the stable ids.",(cljs.core.truth_(om.next$macros.default_migrate)?om.next$macros.default_migrate.cljs$lang$test:null)]));
(function (){
om.next$macros.has_error_QMARK_ = (function om$next$macros$has_error_QMARK_(x){
return (cljs.core.map_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,x,new cljs.core.Keyword("om.next","error","om.next/error",(-1841983205))));
}); return (
new cljs.core.Var(function(){return om.next$macros.has_error_QMARK_;},new cljs.core.Symbol("om.next$macros","has-error?","om.next$macros/has-error?",(-1003528228),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"has-error?","has-error?",(-670157004),null),"om/next.cljc",(18),(1),(2610),(2610),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,((om.next$macros.has_error_QMARK_)?om.next$macros.has_error_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
om.next$macros.default_extract_errors = (function om$next$macros$default_extract_errors(reconciler,res,query){
var extract_STAR_ = (function om$next$macros$default_extract_errors_$_extract_STAR_(query__$1,res__$1,errs){
var class$ = new cljs.core.Keyword(null,"component","component",(1555936782)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query__$1));
var top_error_QMARK_ = (((!((class$ == null))) && (om.next$macros.has_error_QMARK_.call(null,res__$1)))?cljs.core.swap_BANG_.call(null,errs,((function (class$){
return (function (p1__93_SHARP_){
return cljs.core.update_in.call(null,p1__93_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next$macros.ident.call(null,class$,res__$1)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",(-1841983205)).cljs$core$IFn$_invoke$arity$1(res__$1));
});})(class$))
):null);
var ret = (((top_error_QMARK_ == null))?cljs.core.PersistentArrayMap.EMPTY:null);
if(cljs.core.vector_QMARK_.call(null,query__$1)){
if(cljs.core.vector_QMARK_.call(null,res__$1)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (class$,top_error_QMARK_,ret){
return (function (p1__94_SHARP_){
return om$next$macros$default_extract_errors_$_extract_STAR_.call(null,query__$1,p1__94_SHARP_,errs);
});})(class$,top_error_QMARK_,ret))
),res__$1);
} else {
var exprs = cljs.core.seq.call(null,query__$1);
var ret__$1 = ret;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first.call(null,exprs);
var k = (function (){var k = om.next$macros.expr__GT_key.call(null,expr);
var k__$1 = (function (){var G__1363 = k;
var G__1363__$1 = ((om.util.unique_ident_QMARK_.call(null,k))?cljs.core.first.call(null,G__1363):G__1363);
return G__1363__$1;
})();
return k__$1;
})();
var data = cljs.core.get.call(null,res__$1,k);
if(om.util.mutation_QMARK_.call(null,expr)){
var mk = om.util.mutation_key.call(null,expr);
var ret_SINGLEQUOTE_ = cljs.core.get.call(null,res__$1,mk);
if(om.next$macros.has_error_QMARK_.call(null,ret_SINGLEQUOTE_)){
var x = new cljs.core.Keyword(null,"mutator","mutator",(-1326825366)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,expr));
cljs.core.swap_BANG_.call(null,errs,((function (exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__95_SHARP_){
return cljs.core.update_in.call(null,p1__95_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",(-1841983205)).cljs$core$IFn$_invoke$arity$1(ret_SINGLEQUOTE_));
});})(exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__1364 = cljs.core.next.call(null,exprs);
var G__1365 = ret__$1;
exprs = G__1364;
ret__$1 = G__1365;
continue;
} else {
var G__1366 = cljs.core.next.call(null,exprs);
var G__1367 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,mk,ret_SINGLEQUOTE_));
exprs = G__1366;
ret__$1 = G__1367;
continue;
}
} else {
if(om.util.union_QMARK_.call(null,expr)){
var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var class_SINGLEQUOTE_ = new cljs.core.Keyword(null,"component","component",(1555936782)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,jv));
if(!(cljs.core.vector_QMARK_.call(null,data))){
var ret_SINGLEQUOTE_ = om$next$macros$default_extract_errors_$_extract_STAR_.call(null,cljs.core.get.call(null,jv,cljs.core.first.call(null,om.next$macros.ident.call(null,class_SINGLEQUOTE_,data))),data,errs);
var G__1368 = cljs.core.next.call(null,exprs);
var G__1369 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__1368;
ret__$1 = G__1369;
continue;
} else {
var ret_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__96_SHARP_){
return om$next$macros$default_extract_errors_$_extract_STAR_.call(null,cljs.core.get.call(null,jv,cljs.core.first.call(null,om.next$macros.ident.call(null,class_SINGLEQUOTE_,p1__96_SHARP_))),p1__96_SHARP_,errs);
});})(exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
),data);
var G__1370 = cljs.core.next.call(null,exprs);
var G__1371 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__1370;
ret__$1 = G__1371;
continue;
}
} else {
if(cljs.core.truth_(om.util.join_QMARK_.call(null,expr))){
var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var ret_SINGLEQUOTE_ = om$next$macros$default_extract_errors_$_extract_STAR_.call(null,jv,data,errs);
var G__1372 = cljs.core.next.call(null,exprs);
var G__1373 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__1372;
ret__$1 = G__1373;
continue;
} else {
if((cljs.core.map_QMARK_.call(null,data)) && (om.next$macros.has_error_QMARK_.call(null,data))){
cljs.core.swap_BANG_.call(null,errs,((function (exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__97_SHARP_){
return cljs.core.update_in.call(null,p1__97_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__20817__auto__ = (((class$ == null))?null:om.next$macros.ident.call(null,class$,res__$1));
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return k;
}
})()], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",(-1841983205)).cljs$core$IFn$_invoke$arity$1(data));
});})(exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__1374 = cljs.core.next.call(null,exprs);
var G__1375 = null;
exprs = G__1374;
ret__$1 = G__1375;
continue;
} else {
var G__1376 = cljs.core.next.call(null,exprs);
var G__1377 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,k,data));
exprs = G__1376;
ret__$1 = G__1377;
continue;

}
}
}
}
} else {
return ret__$1;
}
break;
}
}
} else {
return null;
}
});
var errs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ret = extract_STAR_.call(null,query,res,errs);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"errors","errors",(-908790718)),cljs.core.deref.call(null,errs),new cljs.core.Keyword(null,"tree","tree",(-196312028)),ret], null);
}); return (
new cljs.core.Var(function(){return om.next$macros.default_extract_errors;},new cljs.core.Symbol("om.next$macros","default-extract-errors","om.next$macros/default-extract-errors",(588099853),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"default-extract-errors","default-extract-errors",(653043317),null),"om/next.cljc",(29),(1),(2615),(2615),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"res","res",(245523648),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),null,(cljs.core.truth_(om.next$macros.default_extract_errors)?om.next$macros.default_extract_errors.cljs$lang$test:null)])));})()
;
/**
 * Construct a reconciler from a configuration map.
 * 
 * Required parameters:
 *   :state        - the application state. If IAtom value is not supplied the
 *                   data will be normalized into the default database format
 *                   using the root query. This can be disabled by explicitly
 *                   setting the optional :normalize parameter to false.
 *   :parser       - the parser to be used
 * 
 * Optional parameters:
 *   :shared       - a map of global shared properties for the component tree.
 *   :shared-fn    - a function to compute global shared properties from the root props.
 *                   the result is merged with :shared.
 *   :send         - required only if the parser will return a non-empty value when
 *                   run against the supplied :remotes. send is a function of two
 *                   arguments, the map of remote expressions keyed by remote target
 *                   and a callback which should be invoked with the result from each
 *                   remote target. Note this means the callback can be invoked
 *                   multiple times to support parallel fetching and incremental
 *                   loading if desired. The callback should take the response as the
 *                   first argument and the the query that was sent as the second
 *                   argument.
 *   :normalize    - whether the state should be normalized. If true it is assumed
 *                   all novelty introduced into the system will also need
 *                   normalization.
 *   :remotes      - a vector of keywords representing remote services which can
 *                   evaluate query expressions. Defaults to [:remote]
 *   :root-render  - the root render function. Defaults to ReactDOM.render
 *   :root-unmount - the root unmount function. Defaults to
 *                   ReactDOM.unmountComponentAtNode
 *   :logger       - supply a goog.log compatible logger
 */
(function (){
om.next$macros.reconciler = (function om$next$macros$reconciler(p__1378){
var map__1382 = p__1378;
var map__1382__$1 = ((((!((map__1382 == null)))?((((map__1382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1382.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1382):map__1382);
var config = map__1382__$1;
var root_render = cljs.core.get.call(null,map__1382__$1,new cljs.core.Keyword(null,"root-render","root-render",(835981146)),((function (map__1382,map__1382__$1,config){
return (function (p1__100_SHARP_,p2__101_SHARP_){
return ReactDOM.render(p1__100_SHARP_,p2__101_SHARP_);
});})(map__1382,map__1382__$1,config))
);
var normalize = cljs.core.get.call(null,map__1382__$1,new cljs.core.Keyword(null,"normalize","normalize",(-1904390051)));
var prune_tree = cljs.core.get.call(null,map__1382__$1,new cljs.core.Keyword(null,"prune-tree","prune-tree",(142138431)),om.next$macros.default_extract_errors);
var pathopt = cljs.core.get.call(null,map__1382__$1,new cljs.core.Keyword(null,"pathopt","pathopt",(-61073149)),false);
var instrument = cljs.core.get.call(null,map__1382__$1,new cljs.core.Keyword(null,"instrument","instrument",(-960698844)));
var id_key = cljs.core.get.call(null,map__1382__$1,new cljs.core.Keyword(null,"id-key","id-key",(-1881730044)));
var merge_sends = cljs.core.get.call(null,map__1382__$1,new cljs.core.Keyword(null,"merge-sends","merge-sends",(-1718434202)),((function (map__1382,map__1382__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key){
return (function (p1__98_SHARP_,p2__99_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__98_SHARP_,p2__99_SHARP_);
});})(map__1382,map__1382__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key))
);
var merge_ident = cljs.core.get.call(null,map__1382__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",(1040841862)),om.next$macros.default_merge_ident);
var remotes = cljs.core.get.call(null,map__1382__$1,new cljs.core.Keyword(null,"remotes","remotes",(1132366312)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",(-1593576576))], null));
var migrate = cljs.core.get.call(null,map__1382__$1,new cljs.core.Keyword(null,"migrate","migrate",(-207110743)),om.next$macros.default_migrate);
var easy_reads = cljs.core.get.call(null,map__1382__$1,new cljs.core.Keyword(null,"easy-reads","easy-reads",(803667467)),true);
var history = cljs.core.get.call(null,map__1382__$1,new cljs.core.Keyword(null,"history","history",(-247395220)),(100));
var state = cljs.core.get.call(null,map__1382__$1,new cljs.core.Keyword(null,"state","state",(-1988618099)));
var merge = cljs.core.get.call(null,map__1382__$1,new cljs.core.Keyword(null,"merge","merge",(-1804319409)),om.next$macros.default_merge);
var shared_fn = cljs.core.get.call(null,map__1382__$1,new cljs.core.Keyword(null,"shared-fn","shared-fn",(-180260144)));
var ui__GT_props = cljs.core.get.call(null,map__1382__$1,new cljs.core.Keyword(null,"ui->props","ui->props",(-237981102)),om.next$macros.default_ui__GT_props);
var parser = cljs.core.get.call(null,map__1382__$1,new cljs.core.Keyword(null,"parser","parser",(-1543495310)));
var indexer = cljs.core.get.call(null,map__1382__$1,new cljs.core.Keyword(null,"indexer","indexer",(-1774914315)),om.next$macros.indexer);
var root_unmount = cljs.core.get.call(null,map__1382__$1,new cljs.core.Keyword(null,"root-unmount","root-unmount",(1692900789)),((function (map__1382,map__1382__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer){
return (function (p1__102_SHARP_){
return ReactDOM.unmountComponentAtNode(p1__102_SHARP_);
});})(map__1382,map__1382__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer))
);
var send = cljs.core.get.call(null,map__1382__$1,new cljs.core.Keyword(null,"send","send",(-652151114)));
var merge_tree = cljs.core.get.call(null,map__1382__$1,new cljs.core.Keyword(null,"merge-tree","merge-tree",(-127861161)),om.next$macros.default_merge_tree);
var shared = cljs.core.get.call(null,map__1382__$1,new cljs.core.Keyword(null,"shared","shared",(-384145993)));
var optimize = cljs.core.get.call(null,map__1382__$1,new cljs.core.Keyword(null,"optimize","optimize",(-1912349448)),((function (map__1382,map__1382__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared){
return (function (cs){
return cljs.core.sort_by.call(null,om.next$macros.depth,cs);
});})(map__1382,map__1382__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared))
);
if(cljs.core.map_QMARK_.call(null,config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

var idxr = indexer.call(null);
var norm_QMARK_ = ((!((state == null)))?((((state.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === state.cljs$core$IAtom$)))?true:(((!state.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state));
var state_SINGLEQUOTE_ = ((norm_QMARK_)?state:cljs.core.atom.call(null,state));
var logger = ((cljs.core.contains_QMARK_.call(null,config,new cljs.core.Keyword(null,"logger","logger",(-220675947))))?new cljs.core.Keyword(null,"logger","logger",(-220675947)).cljs$core$IFn$_invoke$arity$1(config):om.next$macros._STAR_logger_STAR_);
var ret = (new om.next$macros.Reconciler(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pathopt","pathopt",(-61073149)),new cljs.core.Keyword(null,"id-key","id-key",(-1881730044)),new cljs.core.Keyword(null,"instrument","instrument",(-960698844)),new cljs.core.Keyword(null,"merge-ident","merge-ident",(1040841862)),new cljs.core.Keyword(null,"merge-sends","merge-sends",(-1718434202)),new cljs.core.Keyword(null,"remotes","remotes",(1132366312)),new cljs.core.Keyword(null,"migrate","migrate",(-207110743)),new cljs.core.Keyword(null,"easy-reads","easy-reads",(803667467)),new cljs.core.Keyword(null,"history","history",(-247395220)),new cljs.core.Keyword(null,"state","state",(-1988618099)),new cljs.core.Keyword(null,"merge","merge",(-1804319409)),new cljs.core.Keyword(null,"shared-fn","shared-fn",(-180260144)),new cljs.core.Keyword(null,"parser","parser",(-1543495310)),new cljs.core.Keyword(null,"ui->props","ui->props",(-237981102)),new cljs.core.Keyword(null,"logger","logger",(-220675947)),new cljs.core.Keyword(null,"indexer","indexer",(-1774914315)),new cljs.core.Keyword(null,"root-unmount","root-unmount",(1692900789)),new cljs.core.Keyword(null,"send","send",(-652151114)),new cljs.core.Keyword(null,"shared","shared",(-384145993)),new cljs.core.Keyword(null,"merge-tree","merge-tree",(-127861161)),new cljs.core.Keyword(null,"optimize","optimize",(-1912349448)),new cljs.core.Keyword(null,"root-render","root-render",(835981146)),new cljs.core.Keyword(null,"normalize","normalize",(-1904390051)),new cljs.core.Keyword(null,"prune-tree","prune-tree",(142138431))],[pathopt,id_key,instrument,merge_ident,merge_sends,remotes,migrate,easy_reads,om.next.cache.cache.call(null,history),state_SINGLEQUOTE_,merge,shared_fn,parser,ui__GT_props,logger,idxr,root_unmount,send,shared,merge_tree,optimize,root_render,(function (){var or__20817__auto__ = !(norm_QMARK_);
if(or__20817__auto__){
return or__20817__auto__;
} else {
return normalize;
}
})(),prune_tree]),cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"normalized","normalized",(-1887621663)),new cljs.core.Keyword(null,"remove","remove",(-131428414)),new cljs.core.Keyword(null,"queue","queue",(1455835879)),new cljs.core.Keyword(null,"sends-queued","sends-queued",(-1276878712)),new cljs.core.Keyword(null,"queued-sends","queued-sends",(278114765)),new cljs.core.Keyword(null,"queued","queued",(1701634607)),new cljs.core.Keyword(null,"render","render",(-1408033454)),new cljs.core.Keyword(null,"root","root",(-448657453)),new cljs.core.Keyword(null,"t","t",(-1397832519)),new cljs.core.Keyword(null,"target","target",(253001721))],[norm_QMARK_,null,cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,false,null,null,(0),null])),null,null,null));
return ret;
}); return (
new cljs.core.Var(function(){return om.next$macros.reconciler;},new cljs.core.Symbol("om.next$macros","reconciler","om.next$macros/reconciler",(-123030375),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),"om/next.cljc",(17),(1),(2701),(2701),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"config","config",(-1659574354),null),new cljs.core.Keyword(null,"or","or",(235744169)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"root-render","root-render",(-1818454623),null),new cljs.core.Symbol(null,"prune-tree","prune-tree",(1782669958),null),new cljs.core.Symbol(null,"pathopt","pathopt",(1579458378),null),new cljs.core.Symbol(null,"merge-sends","merge-sends",(-77902675),null),new cljs.core.Symbol(null,"merge-ident","merge-ident",(-1613593907),null),new cljs.core.Symbol(null,"remotes","remotes",(-1522069457),null),new cljs.core.Symbol(null,"migrate","migrate",(1433420784),null),new cljs.core.Symbol(null,"easy-reads","easy-reads",(-1850768302),null),new cljs.core.Symbol(null,"history","history",(1393136307),null),new cljs.core.Symbol(null,"merge","merge",(-163787882),null),new cljs.core.Symbol(null,"ui->props","ui->props",(1402550425),null),new cljs.core.Symbol(null,"indexer","indexer",(-134382788),null),new cljs.core.Symbol(null,"root-unmount","root-unmount",(-961534980),null),new cljs.core.Symbol(null,"merge-tree","merge-tree",(1512670366),null),new cljs.core.Symbol(null,"optimize","optimize",(-271817921),null)],[cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__100#","p1__100#",(-52318561),null),new cljs.core.Symbol(null,"p2__101#","p2__101#",(459053091),null)], null),cljs.core.list(new cljs.core.Symbol("js","ReactDOM.render","js/ReactDOM.render",(167810325),null),new cljs.core.Symbol(null,"p1__100#","p1__100#",(-52318561),null),new cljs.core.Symbol(null,"p2__101#","p2__101#",(459053091),null))),new cljs.core.Symbol(null,"default-extract-errors","default-extract-errors",(653043317),null),false,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__98#","p1__98#",(886774757),null),new cljs.core.Symbol(null,"p2__99#","p2__99#",(-786803677),null)], null),cljs.core.list(new cljs.core.Symbol(null,"merge-with","merge-with",(1025434534),null),new cljs.core.Symbol(null,"into","into",(1489695498),null),new cljs.core.Symbol(null,"p1__98#","p1__98#",(886774757),null),new cljs.core.Symbol(null,"p2__99#","p2__99#",(-786803677),null))),new cljs.core.Symbol(null,"default-merge-ident","default-merge-ident",(-1537549975),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",(-1593576576))], null),new cljs.core.Symbol(null,"default-migrate","default-migrate",(642510251),null),true,(100),new cljs.core.Symbol(null,"default-merge","default-merge",(-2131978558),null),new cljs.core.Symbol(null,"default-ui->props","default-ui->props",(-528380117),null),new cljs.core.Symbol("om.next","indexer","om.next/indexer",(1129162801),null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__102#","p1__102#",(-2088502375),null)], null),cljs.core.list(new cljs.core.Symbol("js","ReactDOM.unmountComponentAtNode","js/ReactDOM.unmountComponentAtNode",(934113739),null),new cljs.core.Symbol(null,"p1__102#","p1__102#",(-2088502375),null))),new cljs.core.Symbol(null,"default-merge-tree","default-merge-tree",(-1103624561),null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",(465265323),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cs","cs",(-117024463),null)], null),cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",(1317932224),null),new cljs.core.Symbol(null,"depth","depth",(-885772129),null),new cljs.core.Symbol(null,"cs","cs",(-117024463),null)))]),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"shared","shared",(1256385534),null),new cljs.core.Symbol(null,"shared-fn","shared-fn",(1460271383),null),new cljs.core.Symbol(null,"parser","parser",(97036217),null),new cljs.core.Symbol(null,"indexer","indexer",(-134382788),null),new cljs.core.Symbol(null,"ui->props","ui->props",(1402550425),null),new cljs.core.Symbol(null,"normalize","normalize",(-263858524),null),new cljs.core.Symbol(null,"send","send",(988380413),null),new cljs.core.Symbol(null,"merge-sends","merge-sends",(-77902675),null),new cljs.core.Symbol(null,"remotes","remotes",(-1522069457),null),new cljs.core.Symbol(null,"merge","merge",(-163787882),null),new cljs.core.Symbol(null,"merge-tree","merge-tree",(1512670366),null),new cljs.core.Symbol(null,"merge-ident","merge-ident",(-1613593907),null),new cljs.core.Symbol(null,"prune-tree","prune-tree",(1782669958),null),new cljs.core.Symbol(null,"optimize","optimize",(-271817921),null),new cljs.core.Symbol(null,"history","history",(1393136307),null),new cljs.core.Symbol(null,"root-render","root-render",(-1818454623),null),new cljs.core.Symbol(null,"root-unmount","root-unmount",(-961534980),null),new cljs.core.Symbol(null,"pathopt","pathopt",(1579458378),null),new cljs.core.Symbol(null,"migrate","migrate",(1433420784),null),new cljs.core.Symbol(null,"id-key","id-key",(-241198517),null),new cljs.core.Symbol(null,"instrument","instrument",(679832683),null),new cljs.core.Symbol(null,"easy-reads","easy-reads",(-1850768302),null)], null)], null)], null)),"Construct a reconciler from a configuration map.\n\n   Required parameters:\n     :state        - the application state. If IAtom value is not supplied the\n                     data will be normalized into the default database format\n                     using the root query. This can be disabled by explicitly\n                     setting the optional :normalize parameter to false.\n     :parser       - the parser to be used\n\n   Optional parameters:\n     :shared       - a map of global shared properties for the component tree.\n     :shared-fn    - a function to compute global shared properties from the root props.\n                     the result is merged with :shared.\n     :send         - required only if the parser will return a non-empty value when\n                     run against the supplied :remotes. send is a function of two\n                     arguments, the map of remote expressions keyed by remote target\n                     and a callback which should be invoked with the result from each\n                     remote target. Note this means the callback can be invoked\n                     multiple times to support parallel fetching and incremental\n                     loading if desired. The callback should take the response as the\n                     first argument and the the query that was sent as the second\n                     argument.\n     :normalize    - whether the state should be normalized. If true it is assumed\n                     all novelty introduced into the system will also need\n                     normalization.\n     :remotes      - a vector of keywords representing remote services which can\n                     evaluate query expressions. Defaults to [:remote]\n     :root-render  - the root render function. Defaults to ReactDOM.render\n     :root-unmount - the root unmount function. Defaults to\n                     ReactDOM.unmountComponentAtNode\n     :logger       - supply a goog.log compatible logger",(cljs.core.truth_(om.next$macros.reconciler)?om.next$macros.reconciler.cljs$lang$test:null)])));})()
;
/**
 * Returns true if x is a reconciler.
 */
(function (){
om.next$macros.reconciler_QMARK_ = (function om$next$macros$reconciler_QMARK_(x){
return (x instanceof om.next$macros.Reconciler);
}); return (
new cljs.core.Var(function(){return om.next$macros.reconciler_QMARK_;},new cljs.core.Symbol("om.next$macros","reconciler?","om.next$macros/reconciler?",(170740510),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"reconciler?","reconciler?",(250756342),null),"om/next.cljc",(18),(1),(2794),(2794),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Returns true if x is a reconciler.",((om.next$macros.reconciler_QMARK_)?om.next$macros.reconciler_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Return the reconciler's application state atom. Useful when the reconciler
 * was initialized via denormalized data.
 */
(function (){
om.next$macros.app_state = (function om$next$macros$app_state(reconciler){
if(om.next$macros.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",(994861415)).cljs$core$IFn$_invoke$arity$1(reconciler));
}); return (
new cljs.core.Var(function(){return om.next$macros.app_state;},new cljs.core.Symbol("om.next$macros","app-state","om.next$macros/app-state",(53037825),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"app-state","app-state",(130568249),null),"om/next.cljc",(16),(1),(2800),(2800),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null)], null)),"Return the reconciler's application state atom. Useful when the reconciler\n   was initialized via denormalized data.",(cljs.core.truth_(om.next$macros.app_state)?om.next$macros.app_state.cljs$lang$test:null)])));})()
;
/**
 * Return the application's root component.
 */
(function (){
om.next$macros.app_root = (function om$next$macros$app_root(reconciler){
if(om.next$macros.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(reconciler)),new cljs.core.Keyword(null,"root","root",(-448657453)));
}); return (
new cljs.core.Var(function(){return om.next$macros.app_root;},new cljs.core.Symbol("om.next$macros","app-root","om.next$macros/app-root",(-995662175),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"app-root","app-root",(-930579063),null),"om/next.cljc",(15),(1),(2807),(2807),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null)], null)),"Return the application's root component.",(cljs.core.truth_(om.next$macros.app_root)?om.next$macros.app_root.cljs$lang$test:null)])));})()
;
/**
 * Force a re-render of the root. Not recommended for anything except
 * recomputing :shared.
 */
(function (){
om.next$macros.force_root_render_BANG_ = (function om$next$macros$force_root_render_BANG_(reconciler){
if(om.next$macros.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(reconciler)),new cljs.core.Keyword(null,"render","render",(-1408033454))).call(null);
}); return (
new cljs.core.Var(function(){return om.next$macros.force_root_render_BANG_;},new cljs.core.Symbol("om.next$macros","force-root-render!","om.next$macros/force-root-render!",(-843483752),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"force-root-render!","force-root-render!",(-908489056),null),"om/next.cljc",(25),(1),(2813),(2813),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null)], null)),"Force a re-render of the root. Not recommended for anything except\n   recomputing :shared.",(cljs.core.truth_(om.next$macros.force_root_render_BANG_)?om.next$macros.force_root_render_BANG_.cljs$lang$test:null)])));})()
;
/**
 * Given a reconciler and UUID return the application state snapshost
 * from history associated with the UUID. The size of the reconciler history
 * may be configured by the :history option when constructing the reconciler.
 */
(function (){
om.next$macros.from_history = (function om$next$macros$from_history(reconciler,uuid){
if(om.next$macros.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"history","history",(-247395220)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",(994861415)).cljs$core$IFn$_invoke$arity$1(reconciler)).get(uuid);
}); return (
new cljs.core.Var(function(){return om.next$macros.from_history;},new cljs.core.Symbol("om.next$macros","from-history","om.next$macros/from-history",(-1190890013),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"from-history","from-history",(-1243390261),null),"om/next.cljc",(19),(1),(2820),(2820),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"uuid","uuid",(-504564192),null)], null)),"Given a reconciler and UUID return the application state snapshost\n   from history associated with the UUID. The size of the reconciler history\n   may be configured by the :history option when constructing the reconciler.",(cljs.core.truth_(om.next$macros.from_history)?om.next$macros.from_history.cljs$lang$test:null)])));})()
;
/**
 * Return a temporary id.
 */
(function (){
om.next$macros.tempid = (function om$next$macros$tempid(var_args){
var args1385 = [];
var len__23656__auto___1388 = arguments.length;
var i__23657__auto___1389 = (0);
while(true){
if((i__23657__auto___1389 < len__23656__auto___1388)){
args1385.push((arguments[i__23657__auto___1389]));

var G__1390 = (i__23657__auto___1389 + (1));
i__23657__auto___1389 = G__1390;
continue;
} else {
}
break;
}

var G__1387 = args1385.length;
switch (G__1387) {
case (0):
return om.next$macros.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return om.next$macros.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1385.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next$macros.tempid;},new cljs.core.Symbol("om.next$macros","tempid","om.next$macros/tempid",(-1161693035),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"tempid","tempid",(-1226772547),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2828),(2828),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null)),"Return a temporary id.",(cljs.core.truth_(om.next$macros.tempid)?om.next$macros.tempid.cljs$lang$test:null)])));})()
;

om.next$macros.tempid.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.tempid.tempid.call(null);
});

om.next$macros.tempid.cljs$core$IFn$_invoke$arity$1 = (function (id){
return om.tempid.tempid.call(null,id);
});

om.next$macros.tempid.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return om.next$macros.tempid;},new cljs.core.Symbol("om.next$macros","tempid","om.next$macros/tempid",(-1161693035),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"tempid","tempid",(-1226772547),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2828),(2828),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null)),"Return a temporary id.",(cljs.core.truth_(om.next$macros.tempid)?om.next$macros.tempid.cljs$lang$test:null)]));
/**
 * Return true if x is a tempid, false otherwise
 */
(function (){
om.next$macros.tempid_QMARK_ = (function om$next$macros$tempid_QMARK_(x){
return om.tempid.tempid_QMARK_.call(null,x);
}); return (
new cljs.core.Var(function(){return om.next$macros.tempid_QMARK_;},new cljs.core.Symbol("om.next$macros","tempid?","om.next$macros/tempid?",(2099755001),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"tempid?","tempid?",(2034653313),null),"om/next.cljc",(14),(1),(2833),(2833),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Return true if x is a tempid, false otherwise",((om.next$macros.tempid_QMARK_)?om.next$macros.tempid_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Create a Om Next transit reader. This reader can handler the tempid type.
 * Can pass transit reader customization opts map.
 */
(function (){
om.next$macros.reader = (function om$next$macros$reader(var_args){
var args1392 = [];
var len__23656__auto___1395 = arguments.length;
var i__23657__auto___1396 = (0);
while(true){
if((i__23657__auto___1396 < len__23656__auto___1395)){
args1392.push((arguments[i__23657__auto___1396]));

var G__1397 = (i__23657__auto___1396 + (1));
i__23657__auto___1396 = G__1397;
continue;
} else {
}
break;
}

var G__1394 = args1392.length;
switch (G__1394) {
case (0):
return om.next$macros.reader.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return om.next$macros.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1392.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next$macros.reader;},new cljs.core.Symbol("om.next$macros","reader","om.next$macros/reader",(1741011140),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"reader","reader",(1810192380),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2839),(2839),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Create a Om Next transit reader. This reader can handler the tempid type.\n   Can pass transit reader customization opts map.",(cljs.core.truth_(om.next$macros.reader)?om.next$macros.reader.cljs$lang$test:null)])));})()
;

om.next$macros.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.reader.call(null);
});

om.next$macros.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.reader.call(null,opts);
});

om.next$macros.reader.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return om.next$macros.reader;},new cljs.core.Symbol("om.next$macros","reader","om.next$macros/reader",(1741011140),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"reader","reader",(1810192380),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2839),(2839),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Create a Om Next transit reader. This reader can handler the tempid type.\n   Can pass transit reader customization opts map.",(cljs.core.truth_(om.next$macros.reader)?om.next$macros.reader.cljs$lang$test:null)]));
/**
 * Create a Om Next transit writer. This writer can handler the tempid type.
 * Can pass transit writer customization opts map.
 */
(function (){
om.next$macros.writer = (function om$next$macros$writer(var_args){
var args1399 = [];
var len__23656__auto___1402 = arguments.length;
var i__23657__auto___1403 = (0);
while(true){
if((i__23657__auto___1403 < len__23656__auto___1402)){
args1399.push((arguments[i__23657__auto___1403]));

var G__1404 = (i__23657__auto___1403 + (1));
i__23657__auto___1403 = G__1404;
continue;
} else {
}
break;
}

var G__1401 = args1399.length;
switch (G__1401) {
case (0):
return om.next$macros.writer.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return om.next$macros.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1399.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next$macros.writer;},new cljs.core.Symbol("om.next$macros","writer","om.next$macros/writer",(1432141891),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"writer","writer",(1362963291),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2845),(2845),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Create a Om Next transit writer. This writer can handler the tempid type.\n   Can pass transit writer customization opts map.",(cljs.core.truth_(om.next$macros.writer)?om.next$macros.writer.cljs$lang$test:null)])));})()
;

om.next$macros.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.writer.call(null);
});

om.next$macros.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.writer.call(null,opts);
});

om.next$macros.writer.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return om.next$macros.writer;},new cljs.core.Symbol("om.next$macros","writer","om.next$macros/writer",(1432141891),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"writer","writer",(1362963291),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2845),(2845),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Create a Om Next transit writer. This writer can handler the tempid type.\n   Can pass transit writer customization opts map.",(cljs.core.truth_(om.next$macros.writer)?om.next$macros.writer.cljs$lang$test:null)]));
/**
 * Given a query expression return an equivalent query expression that can be
 * spliced into a transaction that will force a read of that key from the
 * specified remote target.
 */
(function (){
om.next$macros.force = (function om$next$macros$force(var_args){
var args1406 = [];
var len__23656__auto___1409 = arguments.length;
var i__23657__auto___1410 = (0);
while(true){
if((i__23657__auto___1410 < len__23656__auto___1409)){
args1406.push((arguments[i__23657__auto___1410]));

var G__1411 = (i__23657__auto___1410 + (1));
i__23657__auto___1410 = G__1411;
continue;
} else {
}
break;
}

var G__1408 = args1406.length;
switch (G__1408) {
case (1):
return om.next$macros.force.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return om.next$macros.force.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1406.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next$macros.force;},new cljs.core.Symbol("om.next$macros","force","om.next$macros/force",(1815816133),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"force","force",(-1872478483),null),"om/next.cljc",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"target","target",(1893533248),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"target","target",(1893533248),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2851),(2851),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"target","target",(1893533248),null)], null)),"Given a query expression return an equivalent query expression that can be\n   spliced into a transaction that will force a read of that key from the\n   specified remote target.",(cljs.core.truth_(om.next$macros.force)?om.next$macros.force.cljs$lang$test:null)])));})()
;

om.next$macros.force.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return om.next$macros.force.call(null,expr,new cljs.core.Keyword(null,"remote","remote",(-1593576576)));
});

om.next$macros.force.cljs$core$IFn$_invoke$arity$2 = (function (expr,target){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,(function (){var x__23399__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",(253001721)),target], null));
});

om.next$macros.force.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return om.next$macros.force;},new cljs.core.Symbol("om.next$macros","force","om.next$macros/force",(1815816133),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next$macros","om.next$macros",(-1351178148),null),new cljs.core.Symbol(null,"force","force",(-1872478483),null),"om/next.cljc",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"target","target",(1893533248),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"target","target",(1893533248),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2851),(2851),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"target","target",(1893533248),null)], null)),"Given a query expression return an equivalent query expression that can be\n   spliced into a transaction that will force a read of that key from the\n   specified remote target.",(cljs.core.truth_(om.next$macros.force)?om.next$macros.force.cljs$lang$test:null)]));
