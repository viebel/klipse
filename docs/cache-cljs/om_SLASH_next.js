goog.provide("om.next");
(function (){
om.next.collect_statics = (function om$next$collect_statics(dt){
var split_on_static = (function om$next$collect_statics_$_split_on_static(forms){
return cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"static","static",(-1440077198),null),null], null), null)),forms);
});
var split_on_symbol = (function om$next$collect_statics_$_split_on_symbol(forms){
return cljs.core.split_with.call(null,cljs.core.complement.call(null,cljs.core.symbol_QMARK_),forms);
});
var dt__$1 = cljs.core.seq.call(null,dt);
var dt_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
var statics = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"fields","fields",(-1932066230)),cljs.core.PersistentArrayMap.EMPTY], null);
while(true){
if(dt__$1){
var vec__1425 = split_on_static.call(null,dt__$1);
var pre = cljs.core.nth.call(null,vec__1425,(0),null);
var vec__1428 = cljs.core.nth.call(null,vec__1425,(1),null);
var seq__1429 = cljs.core.seq.call(null,vec__1428);
var first__1430 = cljs.core.first.call(null,seq__1429);
var seq__1429__$1 = cljs.core.next.call(null,seq__1429);
var _ = first__1430;
var first__1430__$1 = cljs.core.first.call(null,seq__1429__$1);
var seq__1429__$2 = cljs.core.next.call(null,seq__1429__$1);
var sym = first__1430__$1;
var remaining = seq__1429__$2;
var post = vec__1428;
var dt_SINGLEQUOTE___$1 = cljs.core.into.call(null,dt_SINGLEQUOTE_,pre);
if(cljs.core.seq.call(null,post)){
if(cljs.core._EQ_.call(null,sym,new cljs.core.Symbol(null,"field","field",(338095027),null))){
var vec__1431 = cljs.core.split_at.call(null,(2),remaining);
var field_info = cljs.core.nth.call(null,vec__1431,(0),null);
var dt__$2 = cljs.core.nth.call(null,vec__1431,(1),null);
var G__1437 = cljs.core.seq.call(null,dt__$2);
var G__1438 = dt_SINGLEQUOTE___$1;
var G__1439 = cljs.core.update_in.call(null,statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fields","fields",(-1932066230))], null),cljs.core.conj,cljs.core.vec.call(null,field_info));
dt__$1 = G__1437;
dt_SINGLEQUOTE_ = G__1438;
statics = G__1439;
continue;
} else {
if((sym instanceof cljs.core.Symbol)){
var vec__1434 = split_on_symbol.call(null,remaining);
var protocol_info = cljs.core.nth.call(null,vec__1434,(0),null);
var dt__$2 = cljs.core.nth.call(null,vec__1434,(1),null);
var G__1440 = cljs.core.seq.call(null,dt__$2);
var G__1441 = dt_SINGLEQUOTE___$1;
var G__1442 = cljs.core.update_in.call(null,statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocols","protocols",(-5615896))], null),cljs.core.into,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym], null),protocol_info));
dt__$1 = G__1440;
dt_SINGLEQUOTE_ = G__1441;
statics = G__1442;
continue;
} else {
throw (new Error("Malformed static"));

}
}
} else {
var G__1443 = null;
var G__1444 = dt_SINGLEQUOTE___$1;
var G__1445 = statics;
dt__$1 = G__1443;
dt_SINGLEQUOTE_ = G__1444;
statics = G__1445;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"statics","statics",(-1984882809)),statics,new cljs.core.Keyword(null,"dt","dt",(-368444759)),dt_SINGLEQUOTE_], null);
}
break;
}
}); return (
new cljs.core.Var(function(){return om.next.collect_statics;},new cljs.core.Symbol("om.next","collect-statics","om.next/collect-statics",(1021026208),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"collect-statics","collect-statics",(1632247971),null),"om/next.cljc",(22),(1),(24),(24),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null)], null)),null,(cljs.core.truth_(om.next.collect_statics)?om.next.collect_statics.cljs$lang$test:null)])));})()
;
(function (){
om.next.validate_statics = (function om$next$validate_statics(dt){
var temp__19834__auto__ = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Ident",null,"IQuery",null,"IQueryParams",null], null), null),cljs.core.map.call(null,(function (p1__103_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,[cljs.core.str(p1__103_SHARP_)].join(''),/\//));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,dt)));
if(cljs.core.truth_(temp__19834__auto__)){
var invalid = temp__19834__auto__;
throw (new Error([cljs.core.str(invalid),cljs.core.str(" protocol declaration must appear with `static`.")].join('')));
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return om.next.validate_statics;},new cljs.core.Symbol("om.next","validate-statics","om.next/validate-statics",(-1261778083),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"validate-statics","validate-statics",(406395992),null),"om/next.cljc",(24),(1),(49),(49),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null)], null)),null,(cljs.core.truth_(om.next.validate_statics)?om.next.validate_statics.cljs$lang$test:null)])));})()
;
(function (){
om.next.lifecycle_sigs = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"initLocalState","initLocalState",(1594027651),null),new cljs.core.Symbol(null,"componentWillMount","componentWillMount",(1355203908),null),new cljs.core.Symbol(null,"componentDidUpdate","componentDidUpdate",(-342946454),null),new cljs.core.Symbol(null,"componentWillUnmount","componentWillUnmount",(-1080646955),null),new cljs.core.Symbol(null,"componentWillReceiveProps","componentWillReceiveProps",(-2094446795),null),new cljs.core.Symbol(null,"shouldComponentUpdate","shouldComponentUpdate",(-858684809),null),new cljs.core.Symbol(null,"render","render",(232498073),null),new cljs.core.Symbol(null,"componentWillUpdate","componentWillUpdate",(-1997044837),null),new cljs.core.Symbol(null,"componentDidMount","componentDidMount",(-1698724833),null)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"prev-props","prev-props",(1081981230),null),new cljs.core.Symbol(null,"prev-state","prev-state",(1365252518),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null),new cljs.core.Symbol(null,"next-state","next-state",(211803275),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null),new cljs.core.Symbol(null,"next-state","next-state",(211803275),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)]); return (
new cljs.core.Var(function(){return om.next.lifecycle_sigs;},new cljs.core.Symbol("om.next","lifecycle-sigs","om.next/lifecycle-sigs",(1308766601),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"lifecycle-sigs","lifecycle-sigs",(-1701649782),null),"om/next.cljc",(20),(1),(59),(59),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next.lifecycle_sigs)?om.next.lifecycle_sigs.cljs$lang$test:null)])));})()
;
(function (){
om.next.validate_sig = (function om$next$validate_sig(p__1446){
var vec__1450 = p__1446;
var name = cljs.core.nth.call(null,vec__1450,(0),null);
var sig = cljs.core.nth.call(null,vec__1450,(1),null);
var method = vec__1450;
var sig_SINGLEQUOTE_ = cljs.core.get.call(null,om.next.lifecycle_sigs,name);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,sig_SINGLEQUOTE_),cljs.core.count.call(null,sig))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid signature for "),cljs.core.str(name),cljs.core.str(" got "),cljs.core.str(sig),cljs.core.str(", need "),cljs.core.str(sig_SINGLEQUOTE_)].join('')),cljs.core.str("\n"),cljs.core.str("(= (count sig') (count sig))")].join('')));
}
}); return (
new cljs.core.Var(function(){return om.next.validate_sig;},new cljs.core.Symbol("om.next","validate-sig","om.next/validate-sig",(-1988244688),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"validate-sig","validate-sig",(1038972983),null),"om/next.cljc",(19),(1),(70),(70),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"sig","sig",(-279885673),null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"method","method",(1696235119),null)], null)], null)),null,(cljs.core.truth_(om.next.validate_sig)?om.next.validate_sig.cljs$lang$test:null)])));})()
;
(function (){
om.next.reshape_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",(976027214)),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentWillUpdate","componentWillUpdate",(-1997044837),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__134__auto__","next-props__134__auto__",(1343049390),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__135__auto__","next-state__135__auto__",(-1352098234),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","implements?","cljs.core/implements?",(-251485149),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","Ident","om.next/Ident",(-1165621946),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__136__auto__","ident__136__auto__",(1105376252),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",(-1255218310),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","props","om.next/props",(679329025),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__137__auto__","next-ident__137__auto__",(-1204419859),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",(-1255218310),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-next-props","om.next/-next-props",(1700067080),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__134__auto__","next-props__134__auto__",(1343049390),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",(1017572457),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__136__auto__","ident__136__auto__",(1105376252),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__137__auto__","next-ident__137__auto__",(-1204419859),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__138__auto__","idxr__138__auto__",(-837002043),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",(-1307311504),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",(1605739065),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",(994861415))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",(-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",(-556141047),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__138__auto__","idxr__138__auto__",(-837002043),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",(-2144679919),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexes","indexes",(1496475545))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__138__auto__","idxr__138__auto__",(-837002043),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__139__auto__","indexes__139__auto__",(2035620620),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",(1488366311),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__139__auto__","indexes__139__auto__",(2035620620),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",(-2120854498),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",(-303587249))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__136__auto__","ident__136__auto__",(1105376252),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","disj","cljs.core/disj",(1679005177),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",(-2120854498),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",(-303587249))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__137__auto__","next-ident__137__auto__",(-1204419859),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fnil","cljs.core/fnil",(479587341),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",(-460750931),null)),(function (){var x__23399__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null))));
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
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-props!","om.next/merge-pending-props!",(-1035300673),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-state!","om.next/merge-pending-state!",(1487578810),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentDidUpdate","componentDidUpdate",(-342946454),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-props__140__auto__","prev-props__140__auto__",(897776333),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-state__141__auto__","prev-state__141__auto__",(1045552891),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","clear-prev-props!","om.next/clear-prev-props!",(1240655595),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"isMounted","isMounted",(-1263254906),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","boolean","cljs.core/boolean",(-1222483266),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","getValueByKeys","goog.object/getValueByKeys",(-1135358948),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_reactInternalInstance"),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_renderedComponent")));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentWillUnmount","componentWillUnmount",(-1080646955),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__142__auto__","r__142__auto__",(-481981336),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",(1605739065),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__143__auto__","cfg__143__auto__",(1051383145),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",(994861415))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__142__auto__","r__142__auto__",(-481981336),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__144__auto__","st__144__auto__",(-63245382),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"state","state",(-1988618099))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__143__auto__","cfg__143__auto__",(1051383145),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__145__auto__","indexer__145__auto__",(750859040),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",(-1774914315))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__143__auto__","cfg__143__auto__",(1051383145),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",(100665144),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__144__auto__","st__144__auto__",(-63245382),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",(-1307311504),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__144__auto__","st__144__auto__",(-63245382),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",(-22717146))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",(-2144679919),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__144__auto__","st__144__auto__",(-63245382),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",(-2120854498),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",(-22717146))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",(-432349815),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",(-556141047),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__145__auto__","indexer__145__auto__",(750859040),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","drop-component!","om.next.protocols/drop-component!",(1227662523),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__145__auto__","indexer__145__auto__",(750859040),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentWillMount","componentWillMount",(1355203908),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__145__auto__","indexer__145__auto__",(750859040),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",(-1307311504),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",(1605739065),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",(994861415))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",(-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",(-556141047),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__145__auto__","indexer__145__auto__",(750859040),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","index-component!","om.next.protocols/index-component!",(-1047911549),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__145__auto__","indexer__145__auto__",(750859040),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"shouldComponentUpdate","shouldComponentUpdate",(-858684809),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__134__auto__","next-props__134__auto__",(1343049390),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__135__auto__","next-state__135__auto__",(-1352098234),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-children__146__auto__","next-children__146__auto__",(-283582514),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",(1975675962),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__134__auto__","next-props__134__auto__",(1343049390),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-children","om.next/-children",(-16965396),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__134__auto__","next-props__134__auto__",(1343049390),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",(-1684509985),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__134__auto__","next-props__134__auto__",(1343049390),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$value")));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__134__auto__","next-props__134__auto__",(1343049390),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",(-113941356),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__134__auto__","next-props__134__auto__",(1343049390),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",(2044751870),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","OmProps","om.next/OmProps",(-1258962915),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__134__auto__","next-props__134__auto__",(1343049390),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","unwrap","om.next/unwrap",(-621667282),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",(1017572457),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","props","om.next/props",(679329025),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__134__auto__","next-props__134__auto__",(1343049390),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",(-300507420),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-state","-state",(1439972041),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",(1017572457),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",(-1684509985),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",(1975675962),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-state","-state",(1439972041),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state")));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",(-1684509985),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__135__auto__","next-state__135__auto__",(-1352098234),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state")));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",(1017572457),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",(-300507420),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__133__auto__","this__133__auto__",(1577496665),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-props","om.next/-props",(1063294959),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-children","om.next/-children",(-16965396),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-children__146__auto__","next-children__146__auto__",(-283582514),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()))),new cljs.core.Keyword(null,"reshape","reshape",(1588089910)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"render","render",(232498073),null),(function (p__1453){
var vec__1454 = p__1453;
var seq__1455 = cljs.core.seq.call(null,vec__1454);
var first__1456 = cljs.core.first.call(null,seq__1455);
var seq__1455__$1 = cljs.core.next.call(null,seq__1455);
var name = first__1456;
var first__1456__$1 = cljs.core.first.call(null,seq__1455__$1);
var seq__1455__$2 = cljs.core.next.call(null,seq__1455__$1);
var vec__1457 = first__1456__$1;
var this$ = cljs.core.nth.call(null,vec__1457,(0),null);
var args = vec__1457;
var body = seq__1455__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__132__auto__","this__132__auto__",(-1940237766),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__132__auto__","this__132__auto__",(-1940237766),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",(2050379843),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*reconciler*","om.next/*reconciler*",(2063201960),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",(1605739065),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__132__auto__","this__132__auto__",(-1940237766),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*depth*","om.next/*depth*",(161261240),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",(-879172610),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","depth","om.next/depth",(-1750843006),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__132__auto__","this__132__auto__",(-1940237766),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*shared*","om.next/*shared*",(-270307055),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","shared","om.next/shared",(426941171),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__132__auto__","this__132__auto__",(-1940237766),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*instrument*","om.next/*instrument*",(-1428199886),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","instrument","om.next/instrument",(1410710376),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__132__auto__","this__132__auto__",(-1940237766),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*parent*","om.next/*parent*",(-764653121),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__132__auto__","this__132__auto__",(-1940237766),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
}),new cljs.core.Symbol(null,"componentWillReceiveProps","componentWillReceiveProps",(-2094446795),null),(function (p__1460){
var vec__1461 = p__1460;
var seq__1462 = cljs.core.seq.call(null,vec__1461);
var first__1463 = cljs.core.first.call(null,seq__1462);
var seq__1462__$1 = cljs.core.next.call(null,seq__1462);
var name = first__1463;
var first__1463__$1 = cljs.core.first.call(null,seq__1462__$1);
var seq__1462__$2 = cljs.core.next.call(null,seq__1462__$1);
var vec__1464 = first__1463__$1;
var this$ = cljs.core.nth.call(null,vec__1464,(0),null);
var next_props = cljs.core.nth.call(null,vec__1464,(1),null);
var args = vec__1464;
var body = seq__1462__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__112__auto__","this__112__auto__",(-654300068),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__113__auto__","next-props__113__auto__",(170947684),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__112__auto__","this__112__auto__",(-654300068),null)),(function (){var x__23399__auto__ = next_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-next-props","om.next/-next-props",(1700067080),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__113__auto__","next-props__113__auto__",(170947684),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__112__auto__","this__112__auto__",(-654300068),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
}),new cljs.core.Symbol(null,"componentDidUpdate","componentDidUpdate",(-342946454),null),(function (p__1467){
var vec__1468 = p__1467;
var seq__1469 = cljs.core.seq.call(null,vec__1468);
var first__1470 = cljs.core.first.call(null,seq__1469);
var seq__1469__$1 = cljs.core.next.call(null,seq__1469);
var name = first__1470;
var first__1470__$1 = cljs.core.first.call(null,seq__1469__$1);
var seq__1469__$2 = cljs.core.next.call(null,seq__1469__$1);
var vec__1471 = first__1470__$1;
var this$ = cljs.core.nth.call(null,vec__1471,(0),null);
var prev_props = cljs.core.nth.call(null,vec__1471,(1),null);
var prev_state = cljs.core.nth.call(null,vec__1471,(2),null);
var args = vec__1471;
var body = seq__1469__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__122__auto__","this__122__auto__",(316239940),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-props__123__auto__","prev-props__123__auto__",(790643813),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-state__124__auto__","prev-state__124__auto__",(919539545),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__122__auto__","this__122__auto__",(316239940),null)),(function (){var x__23399__auto__ = prev_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prev-props","om.next/-prev-props",(-1189686117),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-props__123__auto__","prev-props__123__auto__",(790643813),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__122__auto__","this__122__auto__",(316239940),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = prev_state;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",(-1684509985),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-state__124__auto__","prev-state__124__auto__",(919539545),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$previousState")));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),body,(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","clear-prev-props!","om.next/clear-prev-props!",(1240655595),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__122__auto__","this__122__auto__",(316239940),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
}),new cljs.core.Symbol(null,"componentWillUpdate","componentWillUpdate",(-1997044837),null),(function (p__1474){
var vec__1475 = p__1474;
var seq__1476 = cljs.core.seq.call(null,vec__1475);
var first__1477 = cljs.core.first.call(null,seq__1476);
var seq__1476__$1 = cljs.core.next.call(null,seq__1476);
var name = first__1477;
var first__1477__$1 = cljs.core.first.call(null,seq__1476__$1);
var seq__1476__$2 = cljs.core.next.call(null,seq__1476__$1);
var vec__1478 = first__1477__$1;
var this$ = cljs.core.nth.call(null,vec__1478,(0),null);
var next_props = cljs.core.nth.call(null,vec__1478,(1),null);
var next_state = cljs.core.nth.call(null,vec__1478,(2),null);
var args = vec__1478;
var body = seq__1476__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__114__auto__","this__114__auto__",(-703625735),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__115__auto__","next-props__115__auto__",(1799630319),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__116__auto__","next-state__116__auto__",(-1745456736),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__114__auto__","this__114__auto__",(-703625735),null)),(function (){var x__23399__auto__ = next_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-next-props","om.next/-next-props",(1700067080),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__115__auto__","next-props__115__auto__",(1799630319),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__114__auto__","this__114__auto__",(-703625735),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = next_state;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",(-1684509985),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__116__auto__","next-state__116__auto__",(-1745456736),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$pendingState")));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",(-1684509985),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__116__auto__","next-state__116__auto__",(-1745456736),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state")));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__117__auto__","ret__117__auto__",(753717865),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","implements?","cljs.core/implements?",(-251485149),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","Ident","om.next/Ident",(-1165621946),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__114__auto__","this__114__auto__",(-703625735),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__118__auto__","ident__118__auto__",(1836047227),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",(-1255218310),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__114__auto__","this__114__auto__",(-703625735),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","props","om.next/props",(679329025),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__114__auto__","this__114__auto__",(-703625735),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__119__auto__","next-ident__119__auto__",(1381837008),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",(-1255218310),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__114__auto__","this__114__auto__",(-703625735),null)),(function (){var x__23399__auto__ = next_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",(1017572457),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__118__auto__","ident__118__auto__",(1836047227),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__119__auto__","next-ident__119__auto__",(1381837008),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__120__auto__","idxr__120__auto__",(-1792186477),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",(-1307311504),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",(1605739065),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__114__auto__","this__114__auto__",(-703625735),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",(994861415))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",(-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",(-556141047),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__120__auto__","idxr__120__auto__",(-1792186477),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",(-2144679919),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexes","indexes",(1496475545))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__120__auto__","idxr__120__auto__",(-1792186477),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__121__auto__","indexes__121__auto__",(1185763510),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",(1488366311),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__121__auto__","indexes__121__auto__",(1185763510),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",(-2120854498),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",(-303587249))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__118__auto__","ident__118__auto__",(1836047227),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","disj","cljs.core/disj",(1679005177),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__114__auto__","this__114__auto__",(-703625735),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",(-2120854498),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",(-303587249))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__119__auto__","next-ident__119__auto__",(1381837008),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fnil","cljs.core/fnil",(479587341),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",(-460750931),null)),(function (){var x__23399__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__114__auto__","this__114__auto__",(-703625735),null))));
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
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-props!","om.next/merge-pending-props!",(-1035300673),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__114__auto__","this__114__auto__",(-703625735),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-state!","om.next/merge-pending-state!",(1487578810),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__114__auto__","this__114__auto__",(-703625735),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__117__auto__","ret__117__auto__",(753717865),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
}),new cljs.core.Symbol(null,"componentWillUnmount","componentWillUnmount",(-1080646955),null),(function (p__1481){
var vec__1482 = p__1481;
var seq__1483 = cljs.core.seq.call(null,vec__1482);
var first__1484 = cljs.core.first.call(null,seq__1483);
var seq__1483__$1 = cljs.core.next.call(null,seq__1483);
var name = first__1484;
var first__1484__$1 = cljs.core.first.call(null,seq__1483__$1);
var seq__1483__$2 = cljs.core.next.call(null,seq__1483__$1);
var vec__1485 = first__1484__$1;
var this$ = cljs.core.nth.call(null,vec__1485,(0),null);
var args = vec__1485;
var body = seq__1483__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__127__auto__","this__127__auto__",(-2042316569),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__127__auto__","this__127__auto__",(-2042316569),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__128__auto__","r__128__auto__",(1969081498),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",(1605739065),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__127__auto__","this__127__auto__",(-2042316569),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__129__auto__","cfg__129__auto__",(-272737198),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",(994861415))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__128__auto__","r__128__auto__",(1969081498),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__130__auto__","st__130__auto__",(2083045606),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"state","state",(-1988618099))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__129__auto__","cfg__129__auto__",(-272737198),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__131__auto__","indexer__131__auto__",(-1145069718),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",(-1774914315))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__129__auto__","cfg__129__auto__",(-272737198),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",(100665144),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__130__auto__","st__130__auto__",(2083045606),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",(-1307311504),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__130__auto__","st__130__auto__",(2083045606),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",(-22717146))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__127__auto__","this__127__auto__",(-2042316569),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",(-2144679919),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__130__auto__","st__130__auto__",(2083045606),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",(-2120854498),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",(-22717146))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",(-432349815),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__127__auto__","this__127__auto__",(-2042316569),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",(-556141047),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__131__auto__","indexer__131__auto__",(-1145069718),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","drop-component!","om.next.protocols/drop-component!",(1227662523),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__131__auto__","indexer__131__auto__",(-1145069718),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__127__auto__","this__127__auto__",(-2042316569),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
}),new cljs.core.Symbol(null,"initLocalState","initLocalState",(1594027651),null),(function (p__1488){
var vec__1489 = p__1488;
var seq__1490 = cljs.core.seq.call(null,vec__1489);
var first__1491 = cljs.core.first.call(null,seq__1490);
var seq__1490__$1 = cljs.core.next.call(null,seq__1490);
var name = first__1491;
var first__1491__$1 = cljs.core.first.call(null,seq__1490__$1);
var seq__1490__$2 = cljs.core.next.call(null,seq__1490__$1);
var vec__1492 = first__1491__$1;
var this$ = cljs.core.nth.call(null,vec__1492,(0),null);
var args = vec__1492;
var body = seq__1490__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__111__auto__","ret__111__auto__",(242664660),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","js-obj","cljs.core/js-obj",(1009370607),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__111__auto__","ret__111__auto__",(242664660),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
}),new cljs.core.Symbol(null,"componentWillMount","componentWillMount",(1355203908),null),(function (p__1495){
var vec__1496 = p__1495;
var seq__1497 = cljs.core.seq.call(null,vec__1496);
var first__1498 = cljs.core.first.call(null,seq__1497);
var seq__1497__$1 = cljs.core.next.call(null,seq__1497);
var name = first__1498;
var first__1498__$1 = cljs.core.first.call(null,seq__1497__$1);
var seq__1497__$2 = cljs.core.next.call(null,seq__1497__$1);
var vec__1499 = first__1498__$1;
var this$ = cljs.core.nth.call(null,vec__1499,(0),null);
var args = vec__1499;
var body = seq__1497__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__125__auto__","this__125__auto__",(448408768),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__125__auto__","this__125__auto__",(448408768),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__126__auto__","indexer__126__auto__",(1325605805),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",(-1307311504),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",(1605739065),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__125__auto__","this__125__auto__",(448408768),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",(994861415))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",(-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",(-556141047),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__126__auto__","indexer__126__auto__",(1325605805),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","index-component!","om.next.protocols/index-component!",(-1047911549),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__126__auto__","indexer__126__auto__",(1325605805),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__125__auto__","this__125__auto__",(448408768),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
})], null)], null); return (
new cljs.core.Var(function(){return om.next.reshape_map;},new cljs.core.Symbol("om.next","reshape-map","om.next/reshape-map",(-981750683),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"reshape-map","reshape-map",(1774919014),null),"om/next.cljc",(17),(1),(109),(109),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next.reshape_map)?om.next.reshape_map.cljs$lang$test:null)])));})()
;
(function (){
om.next.reshape = (function om$next$reshape(dt,p__1502){
var map__1543 = p__1502;
var map__1543__$1 = ((((!((map__1543 == null)))?((((map__1543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1543.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1543):map__1543);
var defaults = cljs.core.get.call(null,map__1543__$1,new cljs.core.Keyword(null,"defaults","defaults",(976027214)));
var reshape = cljs.core.get.call(null,map__1543__$1,new cljs.core.Keyword(null,"reshape","reshape",(1588089910)));
var reshape_STAR_ = ((function (map__1543,map__1543__$1,defaults,reshape){
return (function om$next$reshape_$_reshape_STAR_(x){
if((cljs.core.sequential_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,reshape,cljs.core.first.call(null,x)))){
var reshapef = cljs.core.get.call(null,reshape,cljs.core.first.call(null,x));
om.next.validate_sig.call(null,x);

return reshapef.call(null,x);
} else {
return x;
}
});})(map__1543,map__1543__$1,defaults,reshape))
;
var add_defaults_step = ((function (map__1543,map__1543__$1,defaults,reshape){
return (function om$next$reshape_$_add_defaults_step(ret,p__1564){
var vec__1574 = p__1564;
var name = cljs.core.nth.call(null,vec__1574,(0),null);
var impl = cljs.core.nth.call(null,vec__1574,(1),null);
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([name], true),cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.seq_QMARK_,ret))))){
var vec__1577 = cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"Object","Object",(61210754),null),null], null), null)),ret);
var before = cljs.core.nth.call(null,vec__1577,(0),null);
var vec__1580 = cljs.core.nth.call(null,vec__1577,(1),null);
var seq__1581 = cljs.core.seq.call(null,vec__1580);
var first__1582 = cljs.core.first.call(null,seq__1581);
var seq__1581__$1 = cljs.core.next.call(null,seq__1581);
var p = first__1582;
var after = seq__1581__$1;
return cljs.core.into.call(null,cljs.core.conj.call(null,cljs.core.vec.call(null,before),p,cljs.core.cons.call(null,name,impl)),after);
} else {
return ret;
}
});})(map__1543,map__1543__$1,defaults,reshape))
;
var add_defaults = ((function (map__1543,map__1543__$1,defaults,reshape){
return (function om$next$reshape_$_add_defaults(dt__$1){
return cljs.core.reduce.call(null,add_defaults_step,dt__$1,defaults);
});})(map__1543,map__1543__$1,defaults,reshape))
;
var add_object_protocol = ((function (map__1543,map__1543__$1,defaults,reshape){
return (function om$next$reshape_$_add_object_protocol(dt__$1){
if(cljs.core.not.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"Object","Object",(61210754),null),null], null), null),dt__$1))){
return cljs.core.conj.call(null,dt__$1,new cljs.core.Symbol(null,"Object","Object",(61210754),null));
} else {
return dt__$1;
}
});})(map__1543,map__1543__$1,defaults,reshape))
;
return add_defaults.call(null,add_object_protocol.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,reshape_STAR_,dt))));
}); return (
new cljs.core.Var(function(){return om.next.reshape;},new cljs.core.Symbol("om.next","reshape","om.next/reshape",(-1815934086),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"reshape","reshape",(-1066345859),null),"om/next.cljc",(14),(1),(238),(238),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dt","dt",(1272086768),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reshape","reshape",(-1066345859),null),new cljs.core.Symbol(null,"defaults","defaults",(-1678408555),null)], null)], null)], null)),null,(cljs.core.truth_(om.next.reshape)?om.next.reshape.cljs$lang$test:null)])));})()
;
(function (){
om.next.defui_STAR_ = (function om$next$defui_STAR_(var_args){
var args1583 = [];
var len__23656__auto___1605 = arguments.length;
var i__23657__auto___1606 = (0);
while(true){
if((i__23657__auto___1606 < len__23656__auto___1605)){
args1583.push((arguments[i__23657__auto___1606]));

var G__1607 = (i__23657__auto___1606 + (1));
i__23657__auto___1606 = G__1607;
continue;
} else {
}
break;
}

var G__1585 = args1583.length;
switch (G__1585) {
case (2):
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1583.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next.defui_STAR_;},new cljs.core.Symbol("om.next","defui*","om.next/defui*",(-2101904841),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"defui*","defui*",(1036454706),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(363),(363),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),null,(cljs.core.truth_(om.next.defui_STAR_)?om.next.defui_STAR_.cljs$lang$test:null)])));})()
;

om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (name,form){
return om.next.defui_STAR_.call(null,name,form,null);
});

om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (name,forms,env){
var field_set_BANG_ = (function om$next$field_set_BANG_(obj,p__1593){
var vec__1597 = p__1593;
var field = cljs.core.nth.call(null,vec__1597,(0),null);
var value = cljs.core.nth.call(null,vec__1597,(1),null);
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
var forms__$1 = (function (){var G__1601 = forms;
var G__1601__$1 = (cljs.core.truth_(docstring)?cljs.core.rest.call(null,G__1601):G__1601);
return G__1601__$1;
})();
var map__1600 = om.next.collect_statics.call(null,forms__$1);
var map__1600__$1 = ((((!((map__1600 == null)))?((((map__1600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1600.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1600):map__1600);
var statics = cljs.core.get.call(null,map__1600__$1,new cljs.core.Keyword(null,"statics","statics",(-1984882809)));
var dt = cljs.core.get.call(null,map__1600__$1,new cljs.core.Keyword(null,"dt","dt",(-368444759)));
var _ = om.next.validate_statics.call(null,dt);
var rname = (cljs.core.truth_(env)?new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",(535295783))),name)):name);
var ctor = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",(-1606493717),null)),(function (){var x__23399__auto__ = cljs.core.with_meta.call(null,name,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@constructor"], null)], null),cljs.core.meta.call(null,name),(cljs.core.truth_(docstring)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),docstring], null):null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","this-as","cljs.core/this-as",(623378171),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__156__auto__","this__156__auto__",(-389013824),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",(-1176201338),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","React.Component","js/React.Component",(752301916),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__156__auto__","this__156__auto__",(-389013824),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","js-arguments","cljs.core/js-arguments",(464029257),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",(-1997686824),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-initLocalState",".-initLocalState",(-1875308467),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__156__auto__","this__156__auto__",(-389013824),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",(250714521),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-state",".-state",(2145135971),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__156__auto__","this__156__auto__",(-389013824),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".initLocalState",".initLocalState",(-104173886),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__156__auto__","this__156__auto__",(-389013824),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",(250714521),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-state",".-state",(2145135971),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__156__auto__","this__156__auto__",(-389013824),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","js-obj","cljs.core/js-obj",(1009370607),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__156__auto__","this__156__auto__",(-389013824),null))));
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
})(),om.next.reshape.call(null,dt,om.next.reshape_map)));
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
})(),cljs.core.map.call(null,((function (docstring,forms__$1,map__1600,map__1600__$1,statics,dt,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__157_SHARP_){
return field_set_BANG_.call(null,name,p1__157_SHARP_);
});})(docstring,forms__$1,map__1600,map__1600__$1,statics,dt,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name))
,new cljs.core.Keyword(null,"fields","fields",(-1932066230)).cljs$core$IFn$_invoke$arity$1(statics)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",(-585401629),null)),(function (){var x__23399__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core.mapv.call(null,((function (docstring,forms__$1,map__1600,map__1600__$1,statics,dt,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__158_SHARP_){
var G__1604 = p1__158_SHARP_;
var G__1604__$1 = (((p1__158_SHARP_ instanceof cljs.core.Symbol))?cljs.core.vary_meta.call(null,G__1604,cljs.core.assoc,new cljs.core.Keyword(null,"static","static",(1214358571)),true):G__1604);
return G__1604__$1;
});})(docstring,forms__$1,map__1600,map__1600__$1,statics,dt,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name))
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
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__159__auto__","this__159__auto__",(338268357),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__160__auto__","writer__160__auto__",(-380182438),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__161__auto__","opt__161__auto__",(-149103723),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",(527220517),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__160__auto__","writer__160__auto__",(-380182438),null)),(function (){var x__23399__auto__ = [cljs.core.str(rname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
});

om.next.defui_STAR_.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return om.next.defui_STAR_;},new cljs.core.Symbol("om.next","defui*","om.next/defui*",(-2101904841),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"defui*","defui*",(1036454706),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(363),(363),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),null,(cljs.core.truth_(om.next.defui_STAR_)?om.next.defui_STAR_.cljs$lang$test:null)]));
(function (){
om.next.defui = (function om$next$defui(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1613 = arguments.length;
var i__23657__auto___1614 = (0);
while(true){
if((i__23657__auto___1614 < len__23656__auto___1613)){
args__23658__auto__.push((arguments[i__23657__auto___1614]));

var G__1615 = (i__23657__auto___1614 + (1));
i__23657__auto___1614 = G__1615;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((3) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((3)),(0),null)):null);
return om.next.defui.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return om.next.defui;},new cljs.core.Symbol("om.next","defui","om.next/defui",(1665242576),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"defui","defui",(-1898044243),null),"om/next.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(418),true,(418),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),null,(cljs.core.truth_(om.next.defui)?om.next.defui.cljs$lang$test:null)])));})()
;

om.next.defui.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,forms){
if(cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",(441598760)).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return om.next.defui_STAR_.call(null,name,forms,_AMPERSAND_env);
} else {
return null;
}
});

om.next.defui.cljs$lang$maxFixedArity = (3);

om.next.defui.cljs$lang$applyTo = (function (seq1609){
var G__1610 = cljs.core.first.call(null,seq1609);
var seq1609__$1 = cljs.core.next.call(null,seq1609);
var G__1611 = cljs.core.first.call(null,seq1609__$1);
var seq1609__$2 = cljs.core.next.call(null,seq1609__$1);
var G__1612 = cljs.core.first.call(null,seq1609__$2);
var seq1609__$3 = cljs.core.next.call(null,seq1609__$2);
return om.next.defui.cljs$core$IFn$_invoke$arity$variadic(G__1610,G__1611,G__1612,seq1609__$3);
});

new cljs.core.Var(function(){return om.next.defui;},new cljs.core.Symbol("om.next","defui","om.next/defui",(1665242576),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"defui","defui",(-1898044243),null),"om/next.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(418),true,(418),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),null,(cljs.core.truth_(om.next.defui)?om.next.defui.cljs$lang$test:null)]));

om.next.defui.cljs$lang$macro = true;
(function (){
om.next.ui = (function om$next$ui(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1619 = arguments.length;
var i__23657__auto___1620 = (0);
while(true){
if((i__23657__auto___1620 < len__23656__auto___1619)){
args__23658__auto__.push((arguments[i__23657__auto___1620]));

var G__1621 = (i__23657__auto___1620 + (1));
i__23657__auto___1620 = G__1621;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((2) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((2)),(0),null)):null);
return om.next.ui.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return om.next.ui;},new cljs.core.Symbol("om.next","ui","om.next/ui",(-1300606279),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"ui","ui",(1170877882),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(423),true,(423),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),null,(cljs.core.truth_(om.next.ui)?om.next.ui.cljs$lang$test:null)])));})()
;

om.next.ui.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"ui_"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",(447897231)),true], null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","defui","om.next/defui",(1665242576),null)),(function (){var x__23399__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
});

om.next.ui.cljs$lang$maxFixedArity = (2);

om.next.ui.cljs$lang$applyTo = (function (seq1616){
var G__1617 = cljs.core.first.call(null,seq1616);
var seq1616__$1 = cljs.core.next.call(null,seq1616);
var G__1618 = cljs.core.first.call(null,seq1616__$1);
var seq1616__$2 = cljs.core.next.call(null,seq1616__$1);
return om.next.ui.cljs$core$IFn$_invoke$arity$variadic(G__1617,G__1618,seq1616__$2);
});

new cljs.core.Var(function(){return om.next.ui;},new cljs.core.Symbol("om.next","ui","om.next/ui",(-1300606279),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"ui","ui",(1170877882),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(423),true,(423),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),null,(cljs.core.truth_(om.next.ui)?om.next.ui.cljs$lang$test:null)]));

om.next.ui.cljs$lang$macro = true;
(function (){
om.next.invariant_STAR_ = (function om$next$invariant_STAR_(condition,message,env){
var opts = cljs.analyzer.api.get_options.call(null);
var fn_scope = new cljs.core.Keyword(null,"fn-scope","fn-scope",(-865664859)).cljs$core$IFn$_invoke$arity$1(env);
var fn_name = (function (){var G__1623 = fn_scope;
var G__1623__$1 = (((G__1623 == null))?null:cljs.core.first.call(null,G__1623));
var G__1623__$2 = (((G__1623__$1 == null))?null:new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(G__1623__$1));
var G__1623__$3 = (((G__1623__$2 == null))?null:[cljs.core.str(G__1623__$2)].join(''));
return G__1623__$3;
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"elide-asserts","elide-asserts",(537063272)).cljs$core$IFn$_invoke$arity$1(opts))){
return null;
} else {
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__162__auto__","l__162__auto__",(-919558773),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*logger*","om.next/*logger*",(-530662591),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",(-556141047),null)),(function (){var x__23399__auto__ = condition;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.log","error","goog.log/error",(-1510663407),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__162__auto__","l__162__auto__",(-919558773),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invariant Violation"),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",(-556141047),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),(function (){var x__23399__auto__ = fn_name;
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
new cljs.core.Var(function(){return om.next.invariant_STAR_;},new cljs.core.Symbol("om.next","invariant*","om.next/invariant*",(560581073),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"invariant*","invariant*",(1996076758),null),"om/next.cljc",(17),(1),(429),(429),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.Symbol(null,"message","message",(1234475525),null),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),null,(cljs.core.truth_(om.next.invariant_STAR_)?om.next.invariant_STAR_.cljs$lang$test:null)])));})()
;
(function (){
om.next.invariant = (function om$next$invariant(_AMPERSAND_form,_AMPERSAND_env,condition,message){
if(cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",(441598760)).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return om.next.invariant_STAR_.call(null,condition,message,_AMPERSAND_env);
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return om.next.invariant;},new cljs.core.Symbol("om.next","invariant","om.next/invariant",(1367306884),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"invariant","invariant",(-17914981),null),"om/next.cljc",(20),(1),(443),true,(443),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condition","condition",(-985998117),null),new cljs.core.Symbol(null,"message","message",(1234475525),null)], null)),null,(cljs.core.truth_(om.next.invariant)?om.next.invariant.cljs$lang$test:null)])));})()
;

om.next.invariant.cljs$lang$macro = true;
if(typeof om.next._STAR_logger_STAR_ !== 'undefined'){
} else {
(function (){
om.next._STAR_logger_STAR_ = ((goog.DEBUG)?(function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("om.next");
})()
:null); return (
new cljs.core.Var(function(){return om.next._STAR_logger_STAR_;},new cljs.core.Symbol("om.next","*logger*","om.next/*logger*",(-530662591),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"*logger*","*logger*",(334424668),null),"om/next.cljc",(21),(4),(519),(519),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next._STAR_logger_STAR_)?om.next._STAR_logger_STAR_.cljs$lang$test:null)])));})()
;
}
(function (){
om.next.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY); return (
new cljs.core.Var(function(){return om.next.roots;},new cljs.core.Symbol("om.next","roots","om.next/roots",(1330691688),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"roots","roots",(551612277),null),"om/next.cljc",(21),(1),(527),(527),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next.roots)?om.next.roots.cljs$lang$test:null)])));})()
;
(function (){
om.next._STAR_raf_STAR_ = null; return (
new cljs.core.Var(function(){return om.next._STAR_raf_STAR_;},new cljs.core.Symbol("om.next","*raf*","om.next/*raf*",(220754617),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"*raf*","*raf*",(-1579637324),null),"om/next.cljc",(28),(1),true,(528),(528),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next._STAR_raf_STAR_)?om.next._STAR_raf_STAR_.cljs$lang$test:null)])));})()
;
(function (){
om.next._STAR_reconciler_STAR_ = null; return (
new cljs.core.Var(function(){return om.next._STAR_reconciler_STAR_;},new cljs.core.Symbol("om.next","*reconciler*","om.next/*reconciler*",(2063201960),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"*reconciler*","*reconciler*",(155789231),null),"om/next.cljc",(49),(1),true,(529),(529),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next._STAR_reconciler_STAR_)?om.next._STAR_reconciler_STAR_.cljs$lang$test:null)])));})()
;
(function (){
om.next._STAR_parent_STAR_ = null; return (
new cljs.core.Var(function(){return om.next._STAR_parent_STAR_;},new cljs.core.Symbol("om.next","*parent*","om.next/*parent*",(-764653121),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"*parent*","*parent*",(2140937904),null),"om/next.cljc",(45),(1),true,(530),(530),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next._STAR_parent_STAR_)?om.next._STAR_parent_STAR_.cljs$lang$test:null)])));})()
;
(function (){
om.next._STAR_shared_STAR_ = null; return (
new cljs.core.Var(function(){return om.next._STAR_shared_STAR_;},new cljs.core.Symbol("om.next","*shared*","om.next/*shared*",(-270307055),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"*shared*","*shared*",(-1133277678),null),"om/next.cljc",(45),(1),true,(531),(531),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next._STAR_shared_STAR_)?om.next._STAR_shared_STAR_.cljs$lang$test:null)])));})()
;
(function (){
om.next._STAR_instrument_STAR_ = null; return (
new cljs.core.Var(function(){return om.next._STAR_instrument_STAR_;},new cljs.core.Symbol("om.next","*instrument*","om.next/*instrument*",(-1428199886),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"*instrument*","*instrument*",(-38807759),null),"om/next.cljc",(49),(1),true,(532),(532),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next._STAR_instrument_STAR_)?om.next._STAR_instrument_STAR_.cljs$lang$test:null)])));})()
;
(function (){
om.next._STAR_depth_STAR_ = (0); return (
new cljs.core.Var(function(){return om.next._STAR_depth_STAR_;},new cljs.core.Symbol("om.next","*depth*","om.next/*depth*",(161261240),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"*depth*","*depth*",(1563105205),null),"om/next.cljc",(44),(1),true,(533),(533),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next._STAR_depth_STAR_)?om.next._STAR_depth_STAR_.cljs$lang$test:null)])));})()
;
(function (){
om.next.nil_or_map_QMARK_ = (function om$next$nil_or_map_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_.call(null,x));
}); return (
new cljs.core.Var(function(){return om.next.nil_or_map_QMARK_;},new cljs.core.Symbol("om.next","nil-or-map?","om.next/nil-or-map?",(-993484488),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"nil-or-map?","nil-or-map?",(808981051),null),"om/next.cljc",(18),(1),(538),(538),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,((om.next.nil_or_map_QMARK_)?om.next.nil_or_map_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Given a query expression return its key.
 */
(function (){
om.next.expr__GT_key = (function om$next$expr__GT_key(expr){
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
var G__1625 = expr;
var G__1625__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",(-1201019570),null),cljs.core.second.call(null,expr)))?cljs.core.first.call(null,G__1625):G__1625);
return G__1625__$1;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid query expr "),cljs.core.str(expr)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",(-881565136))], null));

}
}
}
}
}); return (
new cljs.core.Var(function(){return om.next.expr__GT_key;},new cljs.core.Symbol("om.next","expr->key","om.next/expr->key",(-178611551),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"expr->key","expr->key",(566832038),null),"om/next.cljc",(17),(1),(543),(543),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null)),"Given a query expression return its key.",(cljs.core.truth_(om.next.expr__GT_key)?om.next.expr__GT_key.cljs$lang$test:null)])));})()
;
/**
 * Return a zipper on a query expression.
 */
(function (){
om.next.query_zip = (function om$next$query_zip(root){
return clojure.zip.zipper.call(null,(function (p1__163_SHARP_){
return (cljs.core.vector_QMARK_.call(null,p1__163_SHARP_)) || (cljs.core.map_QMARK_.call(null,p1__163_SHARP_)) || (cljs.core.seq_QMARK_.call(null,p1__163_SHARP_));
}),cljs.core.seq,(function (node,children){
var ret = ((cljs.core.vector_QMARK_.call(null,node))?cljs.core.vec.call(null,children):((cljs.core.map_QMARK_.call(null,node))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_.call(null,node))?children:null)));
return cljs.core.with_meta.call(null,ret,cljs.core.meta.call(null,node));
}),root);
}); return (
new cljs.core.Var(function(){return om.next.query_zip;},new cljs.core.Symbol("om.next","query-zip","om.next/query-zip",(1660740734),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"query-zip","query-zip",(829248881),null),"om/next.cljc",(17),(1),(558),(558),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root","root",(1191874074),null)], null)),"Return a zipper on a query expression.",(cljs.core.truth_(om.next.query_zip)?om.next.query_zip.cljs$lang$test:null)])));})()
;
/**
 * Move from the current zipper location to the specified key. loc must be a
 * hash map node.
 */
(function (){
om.next.move_to_key = (function om$next$move_to_key(loc,k){
var loc__$1 = clojure.zip.down.call(null,loc);
while(true){
var node = clojure.zip.node.call(null,loc__$1);
if(cljs.core._EQ_.call(null,k,cljs.core.first.call(null,node))){
return clojure.zip.right.call(null,clojure.zip.down.call(null,loc__$1));
} else {
var G__1626 = clojure.zip.right.call(null,loc__$1);
loc__$1 = G__1626;
continue;
}
break;
}
}); return (
new cljs.core.Var(function(){return om.next.move_to_key;},new cljs.core.Symbol("om.next","move-to-key","om.next/move-to-key",(-918790174),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"move-to-key","move-to-key",(-1699967263),null),"om/next.cljc",(19),(1),(572),(572),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"loc","loc",(1056246626),null),new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),"Move from the current zipper location to the specified key. loc must be a\n   hash map node.",(cljs.core.truth_(om.next.move_to_key)?om.next.move_to_key.cljs$lang$test:null)])));})()
;
/**
 * Given a query and a path into a query return a zipper focused at the location
 * specified by the path. This location can be replaced to customize / alter
 * the query.
 */
(function (){
om.next.query_template = (function om$next$query_template(query,path){
var query_template_STAR_ = (function om$next$query_template_$_query_template_STAR_(loc,path__$1){
while(true){
if(cljs.core.empty_QMARK_.call(null,path__$1)){
return loc;
} else {
var node = clojure.zip.node.call(null,loc);
if(cljs.core.vector_QMARK_.call(null,node)){
var G__1659 = clojure.zip.down.call(null,loc);
var G__1660 = path__$1;
loc = G__1659;
path__$1 = G__1660;
continue;
} else {
var vec__1655 = path__$1;
var seq__1656 = cljs.core.seq.call(null,vec__1655);
var first__1657 = cljs.core.first.call(null,seq__1656);
var seq__1656__$1 = cljs.core.next.call(null,seq__1656);
var k = first__1657;
var ks = seq__1656__$1;
var k_SINGLEQUOTE_ = om.next.expr__GT_key.call(null,node);
if(cljs.core._EQ_.call(null,k,k_SINGLEQUOTE_)){
if((cljs.core.map_QMARK_.call(null,node)) || ((cljs.core.seq_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,node))))){
var loc_SINGLEQUOTE_ = om.next.move_to_key.call(null,(function (){var G__1658 = loc;
var G__1658__$1 = ((cljs.core.seq_QMARK_.call(null,node))?clojure.zip.down.call(null,G__1658):G__1658);
return G__1658__$1;
})(),k);
var node_SINGLEQUOTE_ = clojure.zip.node.call(null,loc_SINGLEQUOTE_);
if(cljs.core.map_QMARK_.call(null,node_SINGLEQUOTE_)){
if(cljs.core.seq.call(null,ks)){
var G__1661 = clojure.zip.replace.call(null,loc_SINGLEQUOTE_,clojure.zip.node.call(null,om.next.move_to_key.call(null,loc_SINGLEQUOTE_,cljs.core.first.call(null,ks))));
var G__1662 = cljs.core.next.call(null,ks);
loc = G__1661;
path__$1 = G__1662;
continue;
} else {
return loc_SINGLEQUOTE_;
}
} else {
var G__1663 = loc_SINGLEQUOTE_;
var G__1664 = ks;
loc = G__1663;
path__$1 = G__1664;
continue;
}
} else {
var G__1665 = clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,loc))));
var G__1666 = ks;
loc = G__1665;
path__$1 = G__1666;
continue;
}
} else {
var G__1667 = clojure.zip.right.call(null,loc);
var G__1668 = path__$1;
loc = G__1667;
path__$1 = G__1668;
continue;
}
}
}
break;
}
});
return query_template_STAR_.call(null,om.next.query_zip.call(null,query),path);
}); return (
new cljs.core.Var(function(){return om.next.query_template;},new cljs.core.Symbol("om.next","query-template","om.next/query-template",(500115726),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"query-template","query-template",(-918587903),null),"om/next.cljc",(22),(1),(582),(582),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"path","path",(1452340359),null)], null)),"Given a query and a path into a query return a zipper focused at the location\n   specified by the path. This location can be replaced to customize / alter\n   the query.",(cljs.core.truth_(om.next.query_template)?om.next.query_template.cljs$lang$test:null)])));})()
;
(function (){
om.next.replace = (function om$next$replace(template,new_query){
return clojure.zip.root.call(null,clojure.zip.replace.call(null,template,new_query));
}); return (
new cljs.core.Var(function(){return om.next.replace;},new cljs.core.Symbol("om.next","replace","om.next/replace",(-562697522),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"replace","replace",(853943757),null),"om/next.cljc",(15),(1),(612),(612),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",(938125843),null),new cljs.core.Symbol(null,"new-query","new-query",(-438810452),null)], null)),null,(cljs.core.truth_(om.next.replace)?om.next.replace.cljs$lang$test:null)])));})()
;
(function (){
om.next.focus_query_STAR_; return (
new cljs.core.Var(function(){return om.next.focus_query_STAR_;},new cljs.core.Symbol("om.next","focus-query*","om.next/focus-query*",(1570960952),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"focus-query*","focus-query*",(825444149),null),"om/next.cljc",(22),(1),(615),true,(615),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next.focus_query_STAR_)?om.next.focus_query_STAR_.cljs$lang$test:null)])));})()
;
(function (){
om.next.focused_join = (function om$next$focused_join(expr,ks,full_expr,union_expr){
var expr_meta = cljs.core.meta.call(null,expr);
var expr_SINGLEQUOTE_ = ((cljs.core.map_QMARK_.call(null,expr))?(function (){var join_value = cljs.core.second.call(null,cljs.core.first.call(null,expr));
var join_value__$1 = (((om.util.recursion_QMARK_.call(null,join_value)) && (cljs.core.seq.call(null,ks)))?((!((union_expr == null)))?union_expr:full_expr):join_value);
return cljs.core.PersistentArrayMap.fromArray([cljs.core.ffirst.call(null,expr),om.next.focus_query_STAR_.call(null,join_value__$1,ks,null)], true, false);
})():((cljs.core.seq_QMARK_.call(null,expr))?(function (){var x__23399__auto__ = om.next.focused_join.call(null,cljs.core.first.call(null,expr),ks,null,null);
return cljs.core._conj.call(null,(function (){var x__23399__auto____$1 = cljs.core.second.call(null,expr);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto____$1);
})(),x__23399__auto__);
})():expr
));
var G__1670 = expr_SINGLEQUOTE_;
var G__1670__$1 = ((cljs.core.some_QMARK_.call(null,expr_meta))?cljs.core.with_meta.call(null,G__1670,expr_meta):G__1670);
return G__1670__$1;
}); return (
new cljs.core.Var(function(){return om.next.focused_join;},new cljs.core.Symbol("om.next","focused-join","om.next/focused-join",(-68573968),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"focused-join","focused-join",(387545037),null),"om/next.cljc",(20),(1),(617),(617),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"ks","ks",(-754231827),null),new cljs.core.Symbol(null,"full-expr","full-expr",(1757972123),null),new cljs.core.Symbol(null,"union-expr","union-expr",(-2017401102),null)], null)),null,(cljs.core.truth_(om.next.focused_join)?om.next.focused_join.cljs$lang$test:null)])));})()
;
(function (){
om.next.focus_query_STAR_ = (function om$next$focus_query_STAR_(query,path,union_expr){
if(cljs.core.empty_QMARK_.call(null,path)){
return query;
} else {
var vec__1674 = path;
var seq__1675 = cljs.core.seq.call(null,vec__1674);
var first__1676 = cljs.core.first.call(null,seq__1675);
var seq__1675__$1 = cljs.core.next.call(null,seq__1675);
var k = first__1676;
var ks = seq__1675__$1;
var match = ((function (vec__1674,seq__1675,first__1676,seq__1675__$1,k,ks){
return (function om$next$focus_query_STAR__$_match(x){
return cljs.core._EQ_.call(null,k,om.util.join_key.call(null,x));
});})(vec__1674,seq__1675,first__1676,seq__1675__$1,k,ks))
;
var value = ((function (vec__1674,seq__1675,first__1676,seq__1675__$1,k,ks){
return (function om$next$focus_query_STAR__$_value(x){
return om.next.focused_join.call(null,x,ks,query,union_expr);
});})(vec__1674,seq__1675,first__1676,seq__1675__$1,k,ks))
;
if(cljs.core.map_QMARK_.call(null,query)){
return cljs.core.PersistentArrayMap.fromArray([k,om.next.focus_query_STAR_.call(null,cljs.core.get.call(null,query,k),ks,query)], true, false);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,match),cljs.core.map.call(null,value),cljs.core.take.call(null,(1))),query);
}
}
}); return (
new cljs.core.Var(function(){return om.next.focus_query_STAR_;},new cljs.core.Symbol("om.next","focus-query*","om.next/focus-query*",(1570960952),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"focus-query*","focus-query*",(825444149),null),"om/next.cljc",(20),(1),(635),(635),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),new cljs.core.Symbol(null,"union-expr","union-expr",(-2017401102),null)], null)),null,(cljs.core.truth_(om.next.focus_query_STAR_)?om.next.focus_query_STAR_.cljs$lang$test:null)])));})()
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
om.next.focus_query = (function om$next$focus_query(query,path){
return om.next.focus_query_STAR_.call(null,query,path,null);
}); return (
new cljs.core.Var(function(){return om.next.focus_query;},new cljs.core.Symbol("om.next","focus-query","om.next/focus-query",(-1708914680),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"focus-query","focus-query",(917821711),null),"om/next.cljc",(18),(1),(648),(648),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"path","path",(1452340359),null)], null)),"Given a query, focus it along the specified path.\n\n  Examples:\n    (om.next/focus-query [:foo :bar :baz] [:foo])\n    => [:foo]\n\n    (om.next/focus-query [{:foo [:bar :baz]} :woz] [:foo :bar])\n    => [{:foo [:bar]}]",(cljs.core.truth_(om.next.focus_query)?om.next.focus_query.cljs$lang$test:null)])));})()
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
om.next.focus__GT_path = (function om$next$focus__GT_path(var_args){
var args1677 = [];
var len__23656__auto___1683 = arguments.length;
var i__23657__auto___1684 = (0);
while(true){
if((i__23657__auto___1684 < len__23656__auto___1683)){
args1677.push((arguments[i__23657__auto___1684]));

var G__1685 = (i__23657__auto___1684 + (1));
i__23657__auto___1684 = G__1685;
continue;
} else {
}
break;
}

var G__1679 = args1677.length;
switch (G__1679) {
case (1):
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1677.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next.focus__GT_path;},new cljs.core.Symbol("om.next","focus->path","om.next/focus->path",(-78956650),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"focus->path","focus->path",(668690067),null),"om/next.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null),new cljs.core.Symbol(null,"bound","bound",(-2066818599),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null),new cljs.core.Symbol(null,"bound","bound",(-2066818599),null),new cljs.core.Symbol(null,"path","path",(1452340359),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null),new cljs.core.Symbol(null,"bound","bound",(-2066818599),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null),new cljs.core.Symbol(null,"bound","bound",(-2066818599),null),new cljs.core.Symbol(null,"path","path",(1452340359),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(662),(662),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null),new cljs.core.Symbol(null,"bound","bound",(-2066818599),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null),new cljs.core.Symbol(null,"bound","bound",(-2066818599),null),new cljs.core.Symbol(null,"path","path",(1452340359),null)], null)),"Given a focused query return the path represented by the query.\n\n   Examples:\n\n     (om.next/focus->path [{:foo [{:bar {:baz []}]}])\n     => [:foo :bar :baz]",(cljs.core.truth_(om.next.focus__GT_path)?om.next.focus__GT_path.cljs$lang$test:null)])));})()
;

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (focus){
return om.next.focus__GT_path.call(null,focus,new cljs.core.Symbol(null,"*","*",(345799209),null),cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (focus,bound){
return om.next.focus__GT_path.call(null,focus,bound,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3 = (function (focus,bound,path){
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
var vec__1680 = om.util.join_entry.call(null,cljs.core.first.call(null,focus));
var k = cljs.core.nth.call(null,vec__1680,(0),null);
var focus_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__1680,(1),null);
var focus_SINGLEQUOTE___$1 = ((om.util.recursion_QMARK_.call(null,focus_SINGLEQUOTE_))?focus:focus_SINGLEQUOTE_);
var G__1687 = focus_SINGLEQUOTE___$1;
var G__1688 = bound;
var G__1689 = cljs.core.conj.call(null,path,k);
focus = G__1687;
bound = G__1688;
path = G__1689;
continue;
} else {
return path;
}
break;
}
});

om.next.focus__GT_path.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return om.next.focus__GT_path;},new cljs.core.Symbol("om.next","focus->path","om.next/focus->path",(-78956650),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"focus->path","focus->path",(668690067),null),"om/next.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null),new cljs.core.Symbol(null,"bound","bound",(-2066818599),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null),new cljs.core.Symbol(null,"bound","bound",(-2066818599),null),new cljs.core.Symbol(null,"path","path",(1452340359),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null),new cljs.core.Symbol(null,"bound","bound",(-2066818599),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null),new cljs.core.Symbol(null,"bound","bound",(-2066818599),null),new cljs.core.Symbol(null,"path","path",(1452340359),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(662),(662),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null),new cljs.core.Symbol(null,"bound","bound",(-2066818599),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focus","focus",(1875209438),null),new cljs.core.Symbol(null,"bound","bound",(-2066818599),null),new cljs.core.Symbol(null,"path","path",(1452340359),null)], null)),"Given a focused query return the path represented by the query.\n\n   Examples:\n\n     (om.next/focus->path [{:foo [{:bar {:baz []}]}])\n     => [:foo :bar :baz]",(cljs.core.truth_(om.next.focus__GT_path)?om.next.focus__GT_path.cljs$lang$test:null)]));

/**
 * @interface
 */
(function (){
om.next.Ident = function(){}; return (
new cljs.core.Var(function(){return om.next.Ident;},new cljs.core.Symbol("om.next","Ident","om.next/Ident",(-1165621946),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"Ident","Ident",(1695963715),null),"om/next.cljc",(19),(1),(689),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"ident","ident",(1639789181),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Return the ident for this component"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"props","props",(2093813254),null)], null)], null)], true, false)], null),(689),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(om.next.Ident)?om.next.Ident.cljs$lang$test:null)])));})()
;

/**
 * Return the ident for this component
 */
(function (){
om.next.ident = (function om$next$ident(this$,props){
if((!((this$ == null))) && (!((this$.om$next$Ident$ident$arity$2 == null)))){
return this$.om$next$Ident$ident$arity$2(this$,props);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (om.next.ident[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$,props);
} else {
var m__23055__auto____$1 = (om.next.ident["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$,props);
} else {
throw cljs.core.missing_protocol.call(null,"Ident.ident",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return om.next.ident;},new cljs.core.Symbol("om.next","ident","om.next/ident",(-1255218310),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("om.next","Ident","om.next/Ident",(-1165621946),null),new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"ident","ident",(1639789181),null),"om/next.cljc",(9),(1),(689),(690),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"props","props",(2093813254),null)], null)),"Return the ident for this component",(cljs.core.truth_(om.next.ident)?om.next.ident.cljs$lang$test:null)])));})()
;


/**
 * @interface
 */
(function (){
om.next.IQueryParams = function(){}; return (
new cljs.core.Var(function(){return om.next.IQueryParams;},new cljs.core.Symbol("om.next","IQueryParams","om.next/IQueryParams",(897665811),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"IQueryParams","IQueryParams",(-651060716),null),"om/next.cljc",(26),(1),(692),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Return the query parameters"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null)], true, false)], null),(692),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(om.next.IQueryParams)?om.next.IQueryParams.cljs$lang$test:null)])));})()
;

/**
 * Return the query parameters
 */
(function (){
om.next.params = (function om$next$params(this$){
if((!((this$ == null))) && (!((this$.om$next$IQueryParams$params$arity$1 == null)))){
return this$.om$next$IQueryParams$params$arity$1(this$);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (om.next.params[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$);
} else {
var m__23055__auto____$1 = (om.next.params["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQueryParams.params",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return om.next.params;},new cljs.core.Symbol("om.next","params","om.next/params",(1071486295),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("om.next","IQueryParams","om.next/IQueryParams",(897665811),null),new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null),"om/next.cljc",(10),(1),(692),(693),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Return the query parameters",(cljs.core.truth_(om.next.params)?om.next.params.cljs$lang$test:null)])));})()
;

(om.next.IQueryParams["_"] = true);

(om.next.params["_"] = (function (_){
return null;
}));

/**
 * @interface
 */
(function (){
om.next.IQuery = function(){}; return (
new cljs.core.Var(function(){return om.next.IQuery;},new cljs.core.Symbol("om.next","IQuery","om.next/IQuery",(1346493365),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"IQuery","IQuery",(-2026788688),null),"om/next.cljc",(20),(1),(704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Return the component's unbound query"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null)], true, false)], null),(704),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(om.next.IQuery)?om.next.IQuery.cljs$lang$test:null)])));})()
;

/**
 * Return the component's unbound query
 */
(function (){
om.next.query = (function om$next$query(this$){
if((!((this$ == null))) && (!((this$.om$next$IQuery$query$arity$1 == null)))){
return this$.om$next$IQuery$query$arity$1(this$);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (om.next.query[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$);
} else {
var m__23055__auto____$1 = (om.next.query["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQuery.query",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return om.next.query;},new cljs.core.Symbol("om.next","query","om.next/query",(-1450454782),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("om.next","IQuery","om.next/IQuery",(1346493365),null),new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"query","query",(352022017),null),"om/next.cljc",(9),(1),(704),(705),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Return the component's unbound query",(cljs.core.truth_(om.next.query)?om.next.query.cljs$lang$test:null)])));})()
;


/**
 * @interface
 */
(function (){
om.next.ILocalState = function(){}; return (
new cljs.core.Var(function(){return om.next.ILocalState;},new cljs.core.Symbol("om.next","ILocalState","om.next/ILocalState",(481674936),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"ILocalState","ILocalState",(-1322960961),null),"om/next.cljc",(25),(1),(707),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"-set-state!","-set-state!",(-1928389047),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Set the component's local state"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"-get-state","-get-state",(-431117095),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Get the component's local state"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"-get-rendered-state","-get-rendered-state",(-842928263),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Get the component's rendered local state"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"-merge-pending-state!","-merge-pending-state!",(1478484527),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Get the component's pending local state"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null)], true, false)], null),(707),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(om.next.ILocalState)?om.next.ILocalState.cljs$lang$test:null)])));})()
;

/**
 * Set the component's local state
 */
(function (){
om.next._set_state_BANG_ = (function om$next$_set_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_set_state_BANG_$arity$2 == null)))){
return this$.om$next$ILocalState$_set_state_BANG_$arity$2(this$,new_state);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (om.next._set_state_BANG_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$,new_state);
} else {
var m__23055__auto____$1 = (om.next._set_state_BANG_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$,new_state);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-set-state!",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return om.next._set_state_BANG_;},new cljs.core.Symbol("om.next","-set-state!","om.next/-set-state!",(968838988),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("om.next","ILocalState","om.next/ILocalState",(481674936),null),new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"-set-state!","-set-state!",(-1928389047),null),"om/next.cljc",(15),(1),(707),(708),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null)], null)),"Set the component's local state",(cljs.core.truth_(om.next._set_state_BANG_)?om.next._set_state_BANG_.cljs$lang$test:null)])));})()
;

/**
 * Get the component's local state
 */
(function (){
om.next._get_state = (function om$next$_get_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_state$arity$1(this$);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (om.next._get_state[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$);
} else {
var m__23055__auto____$1 = (om.next._get_state["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-state",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return om.next._get_state;},new cljs.core.Symbol("om.next","-get-state","om.next/-get-state",(-1845748282),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("om.next","ILocalState","om.next/ILocalState",(481674936),null),new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"-get-state","-get-state",(-431117095),null),"om/next.cljc",(14),(1),(707),(709),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Get the component's local state",(cljs.core.truth_(om.next._get_state)?om.next._get_state.cljs$lang$test:null)])));})()
;

/**
 * Get the component's rendered local state
 */
(function (){
om.next._get_rendered_state = (function om$next$_get_rendered_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_rendered_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_rendered_state$arity$1(this$);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (om.next._get_rendered_state[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$);
} else {
var m__23055__auto____$1 = (om.next._get_rendered_state["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-rendered-state",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return om.next._get_rendered_state;},new cljs.core.Symbol("om.next","-get-rendered-state","om.next/-get-rendered-state",(2020695676),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("om.next","ILocalState","om.next/ILocalState",(481674936),null),new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"-get-rendered-state","-get-rendered-state",(-842928263),null),"om/next.cljc",(23),(1),(707),(710),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Get the component's rendered local state",(cljs.core.truth_(om.next._get_rendered_state)?om.next._get_rendered_state.cljs$lang$test:null)])));})()
;

/**
 * Get the component's pending local state
 */
(function (){
om.next._merge_pending_state_BANG_ = (function om$next$_merge_pending_state_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1 == null)))){
return this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1(this$);
} else {
var x__23054__auto__ = (((this$ == null))?null:this$);
var m__23055__auto__ = (om.next._merge_pending_state_BANG_[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,this$);
} else {
var m__23055__auto____$1 = (om.next._merge_pending_state_BANG_["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-merge-pending-state!",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return om.next._merge_pending_state_BANG_;},new cljs.core.Symbol("om.next","-merge-pending-state!","om.next/-merge-pending-state!",(-173035224),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("om.next","ILocalState","om.next/ILocalState",(481674936),null),new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"-merge-pending-state!","-merge-pending-state!",(1478484527),null),"om/next.cljc",(25),(1),(707),(711),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Get the component's pending local state",(cljs.core.truth_(om.next._merge_pending_state_BANG_)?om.next._merge_pending_state_BANG_.cljs$lang$test:null)])));})()
;

(function (){
om.next.var_QMARK_ = (function om$next$var_QMARK_(x){
var and__20770__auto__ = (x instanceof cljs.core.Symbol);
if(and__20770__auto__){
return goog.string.startsWith([cljs.core.str(x)].join(''),"?");
} else {
return and__20770__auto__;
}
}); return (
new cljs.core.Var(function(){return om.next.var_QMARK_;},new cljs.core.Symbol("om.next","var?","om.next/var?",(-1188188178),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"var?","var?",(230455531),null),"om/next.cljc",(12),(1),(713),(713),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(om.next.var_QMARK_)?om.next.var_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
om.next.var__GT_keyword = (function om$next$var__GT_keyword(x){
return cljs.core.keyword.call(null,[cljs.core.str(x)].join('').substring((1)));
}); return (
new cljs.core.Var(function(){return om.next.var__GT_keyword;},new cljs.core.Symbol("om.next","var->keyword","om.next/var->keyword",(98966134),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"var->keyword","var->keyword",(1897384777),null),"om/next.cljc",(20),(1),(718),(718),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(om.next.var__GT_keyword)?om.next.var__GT_keyword.cljs$lang$test:null)])));})()
;
(function (){
om.next.replace_var = (function om$next$replace_var(expr,params){
if(cljs.core.truth_(om.next.var_QMARK_.call(null,expr))){
return cljs.core.get.call(null,params,om.next.var__GT_keyword.call(null,expr),expr);
} else {
return expr;
}
}); return (
new cljs.core.Var(function(){return om.next.replace_var;},new cljs.core.Symbol("om.next","replace-var","om.next/replace-var",(-581245565),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"replace-var","replace-var",(-1427426176),null),"om/next.cljc",(19),(1),(721),(721),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),null,(cljs.core.truth_(om.next.replace_var)?om.next.replace_var.cljs$lang$test:null)])));})()
;
(function (){
om.next.bind_query = (function om$next$bind_query(query,params){
var qm = cljs.core.meta.call(null,query);
var tr = cljs.core.map.call(null,((function (qm){
return (function (p1__164_SHARP_){
return om.next.bind_query.call(null,p1__164_SHARP_,params);
});})(qm))
);
var ret = ((cljs.core.seq_QMARK_.call(null,query))?cljs.core.apply.call(null,cljs.core.list,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,tr,query)):((cljs.core.coll_QMARK_.call(null,query))?cljs.core.into.call(null,cljs.core.empty.call(null,query),tr,query):om.next.replace_var.call(null,query,params)
));
var G__1692 = ret;
var G__1692__$1 = (cljs.core.truth_((function (){var and__20770__auto__ = qm;
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
})())?cljs.core.with_meta.call(null,G__1692,qm):G__1692);
return G__1692__$1;
}); return (
new cljs.core.Var(function(){return om.next.bind_query;},new cljs.core.Symbol("om.next","bind-query","om.next/bind-query",(-734529476),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"bind-query","bind-query",(61228851),null),"om/next.cljc",(18),(1),(726),(726),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null)], null)),null,(cljs.core.truth_(om.next.bind_query)?om.next.bind_query.cljs$lang$test:null)])));})()
;
(function (){
om.next.component_QMARK_; return (
new cljs.core.Var(function(){return om.next.component_QMARK_;},new cljs.core.Symbol("om.next","component?","om.next/component?",(665223536),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"component?","component?",(2048315517),null),"om/next.cljc",(20),(1),(739),true,(739),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next.component_QMARK_)?om.next.component_QMARK_.cljs$lang$test:null)])));})()
;

(function (){
om.next.get_reconciler; return (
new cljs.core.Var(function(){return om.next.get_reconciler;},new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",(1605739065),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"get-reconciler","get-reconciler",(-1306137282),null),"om/next.cljc",(35),(1),(739),true,(739),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next.get_reconciler)?om.next.get_reconciler.cljs$lang$test:null)])));})()
;

(function (){
om.next.props; return (
new cljs.core.Var(function(){return om.next.props;},new cljs.core.Symbol("om.next","props","om.next/props",(679329025),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"props","props",(2093813254),null),"om/next.cljc",(41),(1),(739),true,(739),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next.props)?om.next.props.cljs$lang$test:null)])));})()
;

(function (){
om.next.class_path; return (
new cljs.core.Var(function(){return om.next.class_path;},new cljs.core.Symbol("om.next","class-path","om.next/class-path",(-1962074504),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"class-path","class-path",(-126000779),null),"om/next.cljc",(52),(1),(739),true,(739),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next.class_path)?om.next.class_path.cljs$lang$test:null)])));})()
;

(function (){
om.next.get_indexer; return (
new cljs.core.Var(function(){return om.next.get_indexer;},new cljs.core.Symbol("om.next","get-indexer","om.next/get-indexer",(-2122285226),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"get-indexer","get-indexer",(-152032173),null),"om/next.cljc",(64),(1),(739),true,(739),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next.get_indexer)?om.next.get_indexer.cljs$lang$test:null)])));})()
;

(function (){
om.next.path; return (
new cljs.core.Var(function(){return om.next.path;},new cljs.core.Symbol("om.next","path","om.next/path",(570492298),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),"om/next.cljc",(69),(1),(739),true,(739),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next.path)?om.next.path.cljs$lang$test:null)])));})()
;

(function (){
om.next.react_type; return (
new cljs.core.Var(function(){return om.next.react_type;},new cljs.core.Symbol("om.next","react-type","om.next/react-type",(-1721303640),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"react-type","react-type",(-870904667),null),"om/next.cljc",(80),(1),(739),true,(739),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next.react_type)?om.next.react_type.cljs$lang$test:null)])));})()
;
(function (){
om.next.component__GT_query_data = (function om$next$component__GT_query_data(component){
var G__1695 = om.next.get_reconciler.call(null,component);
var G__1695__$1 = (((G__1695 == null))?null:new cljs.core.Keyword(null,"config","config",(994861415)).cljs$core$IFn$_invoke$arity$1(G__1695));
var G__1695__$2 = (((G__1695__$1 == null))?null:new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(G__1695__$1));
var G__1695__$3 = (((G__1695__$2 == null))?null:cljs.core.deref.call(null,G__1695__$2));
var G__1695__$4 = (((G__1695__$3 == null))?null:new cljs.core.Keyword("om.next","queries","om.next/queries",(-22717146)).cljs$core$IFn$_invoke$arity$1(G__1695__$3));
var G__1695__$5 = (((G__1695__$4 == null))?null:cljs.core.get.call(null,G__1695__$4,component));
return G__1695__$5;
}); return (
new cljs.core.Var(function(){return om.next.component__GT_query_data;},new cljs.core.Symbol("om.next","component->query-data","om.next/component->query-data",(-1162848370),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"component->query-data","component->query-data",(371304075),null),"om/next.cljc",(29),(1),(741),(741),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)),null,(cljs.core.truth_(om.next.component__GT_query_data)?om.next.component__GT_query_data.cljs$lang$test:null)])));})()
;
/**
 * Return the unbound query for a component.
 */
(function (){
om.next.get_unbound_query = (function om$next$get_unbound_query(component){
return new cljs.core.Keyword(null,"query","query",(-1288509510)).cljs$core$IFn$_invoke$arity$2(om.next.component__GT_query_data.call(null,component),om.next.query.call(null,component));
}); return (
new cljs.core.Var(function(){return om.next.get_unbound_query;},new cljs.core.Symbol("om.next","get-unbound-query","om.next/get-unbound-query",(1755443963),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"get-unbound-query","get-unbound-query",(995099590),null),"om/next.cljc",(24),(1),(745),(745),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)),"Return the unbound query for a component.",(cljs.core.truth_(om.next.get_unbound_query)?om.next.get_unbound_query.cljs$lang$test:null)])));})()
;
/**
 * Return the query params for a component.
 */
(function (){
om.next.get_params = (function om$next$get_params(component){
return new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$2(om.next.component__GT_query_data.call(null,component),om.next.params.call(null,component));
}); return (
new cljs.core.Var(function(){return om.next.get_params;},new cljs.core.Symbol("om.next","get-params","om.next/get-params",(1605477846),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"get-params","get-params",(-400427309),null),"om/next.cljc",(17),(1),(750),(750),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)),"Return the query params for a component.",(cljs.core.truth_(om.next.get_params)?om.next.get_params.cljs$lang$test:null)])));})()
;
(function (){
om.next.get_component_query = (function om$next$get_component_query(var_args){
var args1696 = [];
var len__23656__auto___1699 = arguments.length;
var i__23657__auto___1700 = (0);
while(true){
if((i__23657__auto___1700 < len__23656__auto___1699)){
args1696.push((arguments[i__23657__auto___1700]));

var G__1701 = (i__23657__auto___1700 + (1));
i__23657__auto___1700 = G__1701;
continue;
} else {
}
break;
}

var G__1698 = args1696.length;
switch (G__1698) {
case (1):
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1696.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next.get_component_query;},new cljs.core.Symbol("om.next","get-component-query","om.next/get-component-query",(-1814561055),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"get-component-query","get-component-query",(1061432806),null),"om/next.cljc",(27),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"query-data","query-data",(-1508389107),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"query-data","query-data",(-1508389107),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(755),(755),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"query-data","query-data",(-1508389107),null)], null)),null,(cljs.core.truth_(om.next.get_component_query)?om.next.get_component_query.cljs$lang$test:null)])));})()
;

om.next.get_component_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_component_query.call(null,component,om.next.component__GT_query_data.call(null,component));
});

om.next.get_component_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query_data){
var q = new cljs.core.Keyword(null,"query","query",(-1288509510)).cljs$core$IFn$_invoke$arity$2(query_data,om.next.query.call(null,component));
var c_SINGLEQUOTE_ = new cljs.core.Keyword(null,"component","component",(1555936782)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c_SINGLEQUOTE_ == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(component),cljs.core.str(" reuses "),cljs.core.str(c_SINGLEQUOTE_),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str("(nil? c')")].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$2(query_data,om.next.params.call(null,component))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",(1555936782)),om.next.react_type.call(null,component)], null));
});

om.next.get_component_query.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return om.next.get_component_query;},new cljs.core.Symbol("om.next","get-component-query","om.next/get-component-query",(-1814561055),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"get-component-query","get-component-query",(1061432806),null),"om/next.cljc",(27),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"query-data","query-data",(-1508389107),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"query-data","query-data",(-1508389107),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(755),(755),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"query-data","query-data",(-1508389107),null)], null)),null,(cljs.core.truth_(om.next.get_component_query)?om.next.get_component_query.cljs$lang$test:null)]));
(function (){
om.next.iquery_QMARK_ = (function om$next$iquery_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$next$IQuery$))){
return true;
} else {
return false;
}
} else {
return false;
}
}); return (
new cljs.core.Var(function(){return om.next.iquery_QMARK_;},new cljs.core.Symbol("om.next","iquery?","om.next/iquery?",(1814908492),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"iquery?","iquery?",(951893833),null),"om/next.cljc",(14),(1),(767),(767),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,((om.next.iquery_QMARK_)?om.next.iquery_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Return a IQuery/IParams local bound query. Works for component classes
 * and component instances. Does not use the indexer.
 */
(function (){
om.next.get_class_or_instance_query = (function om$next$get_class_or_instance_query(x){
if(cljs.core.truth_(om.next.component_QMARK_.call(null,x))){
return om.next.get_component_query.call(null,x);
} else {
var q = om.next.query.call(null,x);
var c = new cljs.core.Keyword(null,"component","component",(1555936782)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(x),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str("(nil? c)")].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,om.next.params.call(null,x)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",(1555936782)),x], null));
}
}); return (
new cljs.core.Var(function(){return om.next.get_class_or_instance_query;},new cljs.core.Symbol("om.next","get-class-or-instance-query","om.next/get-class-or-instance-query",(1414693054),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"get-class-or-instance-query","get-class-or-instance-query",(-389886021),null),"om/next.cljc",(35),(1),(776),(776),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Return a IQuery/IParams local bound query. Works for component classes\n   and component instances. Does not use the indexer.",(cljs.core.truth_(om.next.get_class_or_instance_query)?om.next.get_class_or_instance_query.cljs$lang$test:null)])));})()
;
/**
 * Get a component's static query from the indexer. For recursive queries, recurses
 * up the data path. Falls back to `get-class-or-instance-query` if nothing is
 * found in the indexer.
 */
(function (){
om.next.get_indexed_query = (function om$next$get_indexed_query(component,class_path_query_data,data_path){
while(true){
var qs = cljs.core.filter.call(null,((function (component,class_path_query_data,data_path){
return (function (p1__165_SHARP_){
return cljs.core._EQ_.call(null,data_path,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__165_SHARP_),data_path));
});})(component,class_path_query_data,data_path))
,class_path_query_data);
var qs__$1 = ((cljs.core.empty_QMARK_.call(null,qs))?class_path_query_data:qs);
if(!(cljs.core.empty_QMARK_.call(null,qs__$1))){
var q = cljs.core.first.call(null,qs__$1);
var node = clojure.zip.node.call(null,q);
if(!(om.util.recursion_QMARK_.call(null,node))){
return node;
} else {
var G__1705 = component;
var G__1706 = class_path_query_data;
var G__1707 = cljs.core.pop.call(null,data_path);
component = G__1705;
class_path_query_data = G__1706;
data_path = G__1707;
continue;
}
} else {
return om.next.get_class_or_instance_query.call(null,component);
}
break;
}
}); return (
new cljs.core.Var(function(){return om.next.get_indexed_query;},new cljs.core.Symbol("om.next","get-indexed-query","om.next/get-indexed-query",(543859558),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"get-indexed-query","get-indexed-query",(1461342841),null),"om/next.cljc",(25),(1),(788),(788),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"class-path-query-data","class-path-query-data",(203872838),null),new cljs.core.Symbol(null,"data-path","data-path",(-1979633588),null)], null)),"Get a component's static query from the indexer. For recursive queries, recurses\n   up the data path. Falls back to `get-class-or-instance-query` if nothing is\n   found in the indexer.",(cljs.core.truth_(om.next.get_indexed_query)?om.next.get_indexed_query.cljs$lang$test:null)])));})()
;
/**
 * Return a IQuery/IParams instance bound query. Works for component classes
 * and component instances. See also om.next/full-query.
 */
(function (){
om.next.get_query = (function om$next$get_query(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$next$IQuery$)))?true:false):false)){
if(cljs.core.truth_(om.next.component_QMARK_.call(null,x))){
var temp__19520__auto__ = om.next.component__GT_query_data.call(null,x);
if(cljs.core.truth_(temp__19520__auto__)){
var query_data = temp__19520__auto__;
return om.next.get_component_query.call(null,x,query_data);
} else {
var cp = om.next.class_path.call(null,x);
var r = om.next.get_reconciler.call(null,x);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,x));
var class_path_query_data = cljs.core.get.call(null,new cljs.core.Keyword(null,"class-path->query","class-path->query",(-1222593700)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om.next.get_indexer.call(null,r))),cp);
return om.next.get_indexed_query.call(null,x,class_path_query_data,data_path);
}
} else {
return om.next.get_class_or_instance_query.call(null,x);
}
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return om.next.get_query;},new cljs.core.Symbol("om.next","get-query","om.next/get-query",(2128418481),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"get-query","get-query",(709707190),null),"om/next.cljc",(16),(1),(804),(804),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Return a IQuery/IParams instance bound query. Works for component classes\n   and component instances. See also om.next/full-query.",(cljs.core.truth_(om.next.get_query)?om.next.get_query.cljs$lang$test:null)])));})()
;
(function (){
om.next.tag = (function om$next$tag(x,class$){
return cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",(1555936782)),class$);
}); return (
new cljs.core.Var(function(){return om.next.tag;},new cljs.core.Symbol("om.next","tag","om.next/tag",(-1068526653),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"tag","tag",(350170304),null),"om/next.cljc",(10),(1),(820),(820),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"class","class",(-390430469),null)], null)),null,(cljs.core.truth_(om.next.tag)?om.next.tag.cljs$lang$test:null)])));})()
;

/**
* @constructor
*/
om.next.OmProps = (function (props,basis_t){
this.props = props;
this.basis_t = basis_t;
})

om.next.OmProps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",(2093813254),null),new cljs.core.Symbol(null,"basis-t","basis-t",(216455797),null)], null);
});

om.next.OmProps.cljs$lang$type = true;

om.next.OmProps.cljs$lang$ctorStr = "om.next/OmProps";

om.next.OmProps.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"om.next/OmProps");
});

(function (){
om.next.__GT_OmProps = (function om$next$__GT_OmProps(props,basis_t){
return (new om.next.OmProps(props,basis_t));
}); return (
new cljs.core.Var(function(){return om.next.__GT_OmProps;},new cljs.core.Symbol("om.next","->OmProps","om.next/->OmProps",(545509799),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"->OmProps","->OmProps",(-1808564062),null),"om/next.cljc",(36),(10),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(826),(826),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",(2093813254),null),new cljs.core.Symbol(null,"basis-t","basis-t",(216455797),null)], null)),null,null,(cljs.core.truth_(om.next.__GT_OmProps)?om.next.__GT_OmProps.cljs$lang$test:null)])));})()
;

(function (){
om.next.om_props = (function om$next$om_props(props,basis_t){
return (new om.next.OmProps(props,basis_t));
}); return (
new cljs.core.Var(function(){return om.next.om_props;},new cljs.core.Symbol("om.next","om-props","om.next/om-props",(-220465035),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"om-props","om-props",(-1507086518),null),"om/next.cljc",(19),(4),(829),(829),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",(2093813254),null),new cljs.core.Symbol(null,"basis-t","basis-t",(216455797),null)], null)),null,(cljs.core.truth_(om.next.om_props)?om.next.om_props.cljs$lang$test:null)])));})()
;
(function (){
om.next.om_props_basis = (function om$next$om_props_basis(om_props){
return om_props.basis_t;
}); return (
new cljs.core.Var(function(){return om.next.om_props_basis;},new cljs.core.Symbol("om.next","om-props-basis","om.next/om-props-basis",(1040541640),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"om-props-basis","om-props-basis",(1804249291),null),"om/next.cljc",(25),(4),(833),(833),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"om-props","om-props",(-1507086518),null)], null)),null,(cljs.core.truth_(om.next.om_props_basis)?om.next.om_props_basis.cljs$lang$test:null)])));})()
;
(function (){
om.next.nil_props = om.next.om_props.call(null,null,(-1)); return (
new cljs.core.Var(function(){return om.next.nil_props;},new cljs.core.Symbol("om.next","nil-props","om.next/nil-props",(1847733129),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"nil-props","nil-props",(-1028416374),null),"om/next.cljc",(34),(10),(836),(836),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next.nil_props)?om.next.nil_props.cljs$lang$test:null)])));})()
;
(function (){
om.next.unwrap = (function om$next$unwrap(om_props){
return om_props.props;
}); return (
new cljs.core.Var(function(){return om.next.unwrap;},new cljs.core.Symbol("om.next","unwrap","om.next/unwrap",(-621667282),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"unwrap","unwrap",(241356065),null),"om/next.cljc",(17),(4),(839),(839),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"om-props","om-props",(-1507086518),null)], null)),null,(cljs.core.truth_(om.next.unwrap)?om.next.unwrap.cljs$lang$test:null)])));})()
;
(function (){
om.next.compute_react_key = (function om$next$compute_react_key(cl,props){
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
new cljs.core.Var(function(){return om.next.compute_react_key;},new cljs.core.Symbol("om.next","compute-react-key","om.next/compute-react-key",(-444213367),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"compute-react-key","compute-react-key",(-1992973164),null),"om/next.cljc",(28),(4),(855),(855),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cl","cl",(-1661515732),null),new cljs.core.Symbol(null,"props","props",(2093813254),null)], null)),null,(cljs.core.truth_(om.next.compute_react_key)?om.next.compute_react_key.cljs$lang$test:null)])));})()
;
/**
 * Create a factory constructor from a component class created with
 *    om.next/defui.
 */
(function (){
om.next.factory = (function om$next$factory(var_args){
var args1710 = [];
var len__23656__auto___1718 = arguments.length;
var i__23657__auto___1719 = (0);
while(true){
if((i__23657__auto___1719 < len__23656__auto___1718)){
args1710.push((arguments[i__23657__auto___1719]));

var G__1720 = (i__23657__auto___1719 + (1));
i__23657__auto___1719 = G__1720;
continue;
} else {
}
break;
}

var G__1712 = args1710.length;
switch (G__1712) {
case (1):
return om.next.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return om.next.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1710.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next.factory;},new cljs.core.Symbol("om.next","factory","om.next/factory",(-1727290266),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"factory","factory",(1704465273),null),"om/next.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",(-390430469),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",(-390430469),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"instrument?","instrument?",(-195050869),null),true], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validator","validator",(-325659154),null),new cljs.core.Symbol(null,"keyfn","keyfn",(-1874375437),null),new cljs.core.Symbol(null,"instrument?","instrument?",(-195050869),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",(-390430469),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",(-390430469),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"instrument?","instrument?",(-195050869),null),true], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validator","validator",(-325659154),null),new cljs.core.Symbol(null,"keyfn","keyfn",(-1874375437),null),new cljs.core.Symbol(null,"instrument?","instrument?",(-195050869),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(4),(911),(911),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",(-390430469),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",(-390430469),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"instrument?","instrument?",(-195050869),null),true], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validator","validator",(-325659154),null),new cljs.core.Symbol(null,"keyfn","keyfn",(-1874375437),null),new cljs.core.Symbol(null,"instrument?","instrument?",(-195050869),null)], null)], null)], null)),"Create a factory constructor from a component class created with\n      om.next/defui.",(cljs.core.truth_(om.next.factory)?om.next.factory.cljs$lang$test:null)])));})()
;

om.next.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return om.next.factory.call(null,class$,null);
});

om.next.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__1713){
var map__1714 = p__1713;
var map__1714__$1 = ((((!((map__1714 == null)))?((((map__1714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1714):map__1714);
var opts = map__1714__$1;
var instrument_QMARK_ = cljs.core.get.call(null,map__1714__$1,new cljs.core.Keyword(null,"instrument?","instrument?",(-1835582396)),true);
var validator = cljs.core.get.call(null,map__1714__$1,new cljs.core.Keyword(null,"validator","validator",(-1966190681)));
var keyfn = cljs.core.get.call(null,map__1714__$1,new cljs.core.Keyword(null,"keyfn","keyfn",(780060332)));
if(cljs.core.fn_QMARK_.call(null,class$)){
} else {
throw (new Error("Assert failed: (fn? class)"));
}

return ((function (map__1714,map__1714__$1,opts,instrument_QMARK_,validator,keyfn){
return (function() { 
var om$next$self__delegate = function (props,children){
if((validator == null)){
} else {
if(cljs.core.truth_(validator.call(null,props))){
} else {
throw (new Error("Assert failed: (validator props)"));
}
}

if(cljs.core.truth_((function (){var and__20770__auto__ = om.next._STAR_instrument_STAR_;
if(cljs.core.truth_(and__20770__auto__)){
return instrument_QMARK_;
} else {
return and__20770__auto__;
}
})())){
return om.next._STAR_instrument_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",(-940561982)),children,new cljs.core.Keyword(null,"factory","factory",(63933746)),om.next.factory.call(null,class$,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"instrument?","instrument?",(-1835582396)),false)),new cljs.core.Keyword(null,"class","class",(-2030961996)),class$,new cljs.core.Keyword(null,"props","props",(453281727)),props], null));
} else {
var key = ((!((keyfn == null)))?keyfn.call(null,props):om.next.compute_react_key.call(null,class$,props));
var ref = new cljs.core.Keyword(null,"ref","ref",(1289896967)).cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__1717 = ref;
var G__1717__$1 = (((ref instanceof cljs.core.Keyword))?[cljs.core.str(G__1717)].join(''):G__1717);
return G__1717__$1;
})();
var t = ((!((om.next._STAR_reconciler_STAR_ == null)))?om.next.protocols.basis_t.call(null,om.next._STAR_reconciler_STAR_):(0));
return React.createElement(class$,({"omcljs$value": om.next.om_props.call(null,props,t), "omcljs$instrument": om.next._STAR_instrument_STAR_, "key": key, "omcljs$reactKey": key, "ref": ref__$1, "omcljs$shared": om.next._STAR_shared_STAR_, "omcljs$path": new cljs.core.Keyword(null,"om-path","om-path",(-1911443978)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props)), "omcljs$reconciler": om.next._STAR_reconciler_STAR_, "omcljs$depth": om.next._STAR_depth_STAR_, "omcljs$parent": om.next._STAR_parent_STAR_}),om.util.force_children.call(null,children));
}
};
var om$next$self = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__1722__i = 0, G__1722__a = new Array(arguments.length -  1);
while (G__1722__i < G__1722__a.length) {G__1722__a[G__1722__i] = arguments[G__1722__i + 1]; ++G__1722__i;}
  children = new cljs.core.IndexedSeq(G__1722__a,0);
} 
return om$next$self__delegate.call(this,props,children);};
om$next$self.cljs$lang$maxFixedArity = 1;
om$next$self.cljs$lang$applyTo = (function (arglist__1723){
var props = cljs.core.first(arglist__1723);
var children = cljs.core.rest(arglist__1723);
return om$next$self__delegate(props,children);
});
om$next$self.cljs$core$IFn$_invoke$arity$variadic = om$next$self__delegate;
return om$next$self;
})()
;
;})(map__1714,map__1714__$1,opts,instrument_QMARK_,validator,keyfn))
});

om.next.factory.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return om.next.factory;},new cljs.core.Symbol("om.next","factory","om.next/factory",(-1727290266),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"factory","factory",(1704465273),null),"om/next.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",(-390430469),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",(-390430469),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"instrument?","instrument?",(-195050869),null),true], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validator","validator",(-325659154),null),new cljs.core.Symbol(null,"keyfn","keyfn",(-1874375437),null),new cljs.core.Symbol(null,"instrument?","instrument?",(-195050869),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",(-390430469),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",(-390430469),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"instrument?","instrument?",(-195050869),null),true], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validator","validator",(-325659154),null),new cljs.core.Symbol(null,"keyfn","keyfn",(-1874375437),null),new cljs.core.Symbol(null,"instrument?","instrument?",(-195050869),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(4),(911),(911),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",(-390430469),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",(-390430469),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"instrument?","instrument?",(-195050869),null),true], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validator","validator",(-325659154),null),new cljs.core.Symbol(null,"keyfn","keyfn",(-1874375437),null),new cljs.core.Symbol(null,"instrument?","instrument?",(-195050869),null)], null)], null)], null)),"Create a factory constructor from a component class created with\n      om.next/defui.",(cljs.core.truth_(om.next.factory)?om.next.factory.cljs$lang$test:null)]));
/**
 * Returns true if the argument is an Om component.
 */
(function (){
om.next.component_QMARK_ = (function om$next$component_QMARK_(x){
if(!((x == null))){
return x.om$isComponent === true;
} else {
return false;
}
}); return (
new cljs.core.Var(function(){return om.next.component_QMARK_;},new cljs.core.Symbol("om.next","component?","om.next/component?",(665223536),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"component?","component?",(2048315517),null),"om/next.cljc",(17),(1),(956),(956),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Returns true if the argument is an Om component.",((om.next.component_QMARK_)?om.next.component_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
om.next.state = (function om$next$state(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return c.state;
}); return (
new cljs.core.Var(function(){return om.next.state;},new cljs.core.Symbol("om.next","state","om.next/state",(-2018039335),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"state","state",(-348086572),null),"om/next.cljc",(13),(1),(965),(965),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(om.next.state)?om.next.state.cljs$lang$test:null)])));})()
;
/**
 * PRIVATE: Do not use
 */
(function (){
om.next.get_prop = (function om$next$get_prop(c,k){
return goog.object.get(c.props,k);
}); return (
new cljs.core.Var(function(){return om.next.get_prop;},new cljs.core.Symbol("om.next","get-prop","om.next/get-prop",(1053429764),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"get-prop","get-prop",(-746961151),null),"om/next.cljc",(16),(1),(969),(969),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),"PRIVATE: Do not use",(cljs.core.truth_(om.next.get_prop)?om.next.get_prop.cljs$lang$test:null)])));})()
;
(function (){
om.next.get_props_STAR_ = (function om$next$get_props_STAR_(x,k){
if((x == null)){
return om.next.nil_props;
} else {
var y = goog.object.get(x,k);
if((y == null)){
return om.next.nil_props;
} else {
return y;
}
}
}); return (
new cljs.core.Var(function(){return om.next.get_props_STAR_;},new cljs.core.Symbol("om.next","get-props*","om.next/get-props*",(1432588886),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"get-props*","get-props*",(-504348333),null),"om/next.cljc",(21),(4),(976),(976),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),null,(cljs.core.truth_(om.next.get_props_STAR_)?om.next.get_props_STAR_.cljs$lang$test:null)])));})()
;
(function (){
om.next.get_prev_props = (function om$next$get_prev_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$prev$value");
}); return (
new cljs.core.Var(function(){return om.next.get_prev_props;},new cljs.core.Symbol("om.next","get-prev-props","om.next/get-prev-props",(1621927299),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"get-prev-props","get-prev-props",(-1673733490),null),"om/next.cljc",(25),(4),(986),(986),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(om.next.get_prev_props)?om.next.get_prev_props.cljs$lang$test:null)])));})()
;
(function (){
om.next.get_next_props = (function om$next$get_next_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$next$value");
}); return (
new cljs.core.Var(function(){return om.next.get_next_props;},new cljs.core.Symbol("om.next","get-next-props","om.next/get-next-props",(132975076),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"get-next-props","get-next-props",(-1417815839),null),"om/next.cljc",(25),(4),(990),(990),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(om.next.get_next_props)?om.next.get_next_props.cljs$lang$test:null)])));})()
;
(function (){
om.next.get_props = (function om$next$get_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$value");
}); return (
new cljs.core.Var(function(){return om.next.get_props;},new cljs.core.Symbol("om.next","get-props","om.next/get-props",(594634115),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"get-props","get-props",(-689851264),null),"om/next.cljc",(20),(4),(994),(994),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(om.next.get_props)?om.next.get_props.cljs$lang$test:null)])));})()
;
/**
 * PRIVATE: Do not use
 */
(function (){
om.next.set_prop_BANG_ = (function om$next$set_prop_BANG_(c,k,v){
return goog.object.set(c.props,k,v);
}); return (
new cljs.core.Var(function(){return om.next.set_prop_BANG_;},new cljs.core.Symbol("om.next","set-prop!","om.next/set-prop!",(1460581913),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"set-prop!","set-prop!",(-90277612),null),"om/next.cljc",(20),(4),(998),(998),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),"PRIVATE: Do not use",(cljs.core.truth_(om.next.set_prop_BANG_)?om.next.set_prop_BANG_.cljs$lang$test:null)])));})()
;
(function (){
om.next.get_reconciler = (function om$next$get_reconciler(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return om.next.get_prop.call(null,c,"omcljs$reconciler");
}); return (
new cljs.core.Var(function(){return om.next.get_reconciler;},new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",(1605739065),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"get-reconciler","get-reconciler",(-1306137282),null),"om/next.cljc",(21),(1),(1003),(1003),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(om.next.get_reconciler)?om.next.get_reconciler.cljs$lang$test:null)])));})()
;
(function (){
om.next.props_STAR_ = (function om$next$props_STAR_(var_args){
var args1724 = [];
var len__23656__auto___1727 = arguments.length;
var i__23657__auto___1728 = (0);
while(true){
if((i__23657__auto___1728 < len__23656__auto___1727)){
args1724.push((arguments[i__23657__auto___1728]));

var G__1729 = (i__23657__auto___1728 + (1));
i__23657__auto___1728 = G__1729;
continue;
} else {
}
break;
}

var G__1726 = args1724.length;
switch (G__1726) {
case (2):
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1724.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next.props_STAR_;},new cljs.core.Symbol("om.next","props*","om.next/props*",(-1096630333),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"props*","props*",(-768250162),null),"om/next.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"z","z",(851004344),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"z","z",(851004344),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(4),(1010),(1010),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"z","z",(851004344),null)], null)),null,(cljs.core.truth_(om.next.props_STAR_)?om.next.props_STAR_.cljs$lang$test:null)])));})()
;

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,y);
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,om.next.props_STAR_.call(null,y,z));
});

om.next.props_STAR_.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return om.next.props_STAR_;},new cljs.core.Symbol("om.next","props*","om.next/props*",(-1096630333),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"props*","props*",(-768250162),null),"om/next.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"z","z",(851004344),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"z","z",(851004344),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(4),(1010),(1010),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"z","z",(851004344),null)], null)),null,(cljs.core.truth_(om.next.props_STAR_)?om.next.props_STAR_.cljs$lang$test:null)]));
(function (){
om.next.prev_props_STAR_ = (function om$next$prev_props_STAR_(var_args){
var args1731 = [];
var len__23656__auto___1734 = arguments.length;
var i__23657__auto___1735 = (0);
while(true){
if((i__23657__auto___1735 < len__23656__auto___1734)){
args1731.push((arguments[i__23657__auto___1735]));

var G__1736 = (i__23657__auto___1735 + (1));
i__23657__auto___1735 = G__1736;
continue;
} else {
}
break;
}

var G__1733 = args1731.length;
switch (G__1733) {
case (2):
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1731.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next.prev_props_STAR_;},new cljs.core.Symbol("om.next","prev-props*","om.next/prev-props*",(1837219041),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"prev-props*","prev-props*",(20870124),null),"om/next.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"z","z",(851004344),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"z","z",(851004344),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(4),(1017),(1017),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"z","z",(851004344),null)], null)),null,(cljs.core.truth_(om.next.prev_props_STAR_)?om.next.prev_props_STAR_.cljs$lang$test:null)])));})()
;

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.min_key.call(null,om.next.om_props_basis,x,y);
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.min_key.call(null,om.next.om_props_basis,om.next.props_STAR_.call(null,x,y),om.next.props_STAR_.call(null,y,z));
});

om.next.prev_props_STAR_.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return om.next.prev_props_STAR_;},new cljs.core.Symbol("om.next","prev-props*","om.next/prev-props*",(1837219041),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"prev-props*","prev-props*",(20870124),null),"om/next.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"z","z",(851004344),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"z","z",(851004344),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(4),(1017),(1017),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.Symbol(null,"z","z",(851004344),null)], null)),null,(cljs.core.truth_(om.next.prev_props_STAR_)?om.next.prev_props_STAR_.cljs$lang$test:null)]));
(function (){
om.next._prev_props = (function om$next$_prev_props(prev_props,component){
var cst = component.state;
var props = component.props;
return om.next.unwrap.call(null,om.next.prev_props_STAR_.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,prev_props),om.next.get_prev_props.call(null,cst)),om.next.props_STAR_.call(null,om.next.get_props.call(null,cst),om.next.get_props.call(null,props))));
}); return (
new cljs.core.Var(function(){return om.next._prev_props;},new cljs.core.Symbol("om.next","-prev-props","om.next/-prev-props",(-1189686117),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"-prev-props","-prev-props",(1839605606),null),"om/next.cljc",(21),(4),(1025),(1025),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prev-props","prev-props",(1081981230),null),new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)),null,(cljs.core.truth_(om.next._prev_props)?om.next._prev_props.cljs$lang$test:null)])));})()
;
(function (){
om.next._next_props = (function om$next$_next_props(next_props,component){
return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,component.props),om.next.get_props.call(null,next_props),om.next.get_next_props.call(null,component.state)));
}); return (
new cljs.core.Var(function(){return om.next._next_props;},new cljs.core.Symbol("om.next","-next-props","om.next/-next-props",(1700067080),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"-next-props","-next-props",(432317957),null),"om/next.cljc",(21),(4),(1034),(1034),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null),new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)),null,(cljs.core.truth_(om.next._next_props)?om.next._next_props.cljs$lang$test:null)])));})()
;
(function (){
om.next.merge_pending_props_BANG_ = (function om$next$merge_pending_props_BANG_(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var cst = c.state;
var props = c.props;
var pending = goog.object.get(cst,"omcljs$next$value");
var prev = om.next.props_STAR_.call(null,om.next.get_props.call(null,cst),om.next.get_props.call(null,props));
goog.object.set(cst,"omcljs$prev$value",prev);

if((pending == null)){
return null;
} else {
goog.object.remove(cst,"omcljs$next$value");

return goog.object.set(cst,"omcljs$value",pending);
}
}); return (
new cljs.core.Var(function(){return om.next.merge_pending_props_BANG_;},new cljs.core.Symbol("om.next","merge-pending-props!","om.next/merge-pending-props!",(-1035300673),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"merge-pending-props!","merge-pending-props!",(490389946),null),"om/next.cljc",(31),(4),(1042),(1042),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(om.next.merge_pending_props_BANG_)?om.next.merge_pending_props_BANG_.cljs$lang$test:null)])));})()
;
(function (){
om.next.clear_prev_props_BANG_ = (function om$next$clear_prev_props_BANG_(c){
return goog.object.remove(c.state,"omcljs$prev$value");
}); return (
new cljs.core.Var(function(){return om.next.clear_prev_props_BANG_;},new cljs.core.Symbol("om.next","clear-prev-props!","om.next/clear-prev-props!",(1240655595),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"clear-prev-props!","clear-prev-props!",(442643942),null),"om/next.cljc",(28),(4),(1054),(1054),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(om.next.clear_prev_props_BANG_)?om.next.clear_prev_props_BANG_.cljs$lang$test:null)])));})()
;
/**
 * Get basis t value for when the component last read its props from
 *    the global state.
 */
(function (){
om.next.t = (function om$next$t(c){
return om.next.om_props_basis.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,c.props),om.next.get_props.call(null,c.state)));
}); return (
new cljs.core.Var(function(){return om.next.t;},new cljs.core.Symbol("om.next","t","om.next/t",(-622381041),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"t","t",(242699008),null),"om/next.cljc",(12),(4),(1058),(1058),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),"Get basis t value for when the component last read its props from\n      the global state.",(cljs.core.truth_(om.next.t)?om.next.t.cljs$lang$test:null)])));})()
;
/**
 * Returns the parent Om component.
 */
(function (){
om.next.parent = (function om$next$parent(component){
return om.next.get_prop.call(null,component,"omcljs$parent");
}); return (
new cljs.core.Var(function(){return om.next.parent;},new cljs.core.Symbol("om.next","parent","om.next/parent",(-1846275839),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"parent","parent",(761652748),null),"om/next.cljc",(14),(1),(1067),(1067),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)),"Returns the parent Om component.",(cljs.core.truth_(om.next.parent)?om.next.parent.cljs$lang$test:null)])));})()
;
/**
 * PRIVATE: Returns the render depth (a integer) of the component relative to
 *  the mount root.
 */
(function (){
om.next.depth = (function om$next$depth(component){
if(om.next.component_QMARK_.call(null,component)){
return om.next.get_prop.call(null,component,"omcljs$depth");
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return om.next.depth;},new cljs.core.Symbol("om.next","depth","om.next/depth",(-1750843006),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"depth","depth",(-885772129),null),"om/next.cljc",(12),(1),(1073),(1073),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)),"PRIVATE: Returns the render depth (a integer) of the component relative to\n    the mount root.",(cljs.core.truth_(om.next.depth)?om.next.depth.cljs$lang$test:null)])));})()
;
/**
 * Returns the components React key.
 */
(function (){
om.next.react_key = (function om$next$react_key(component){
return om.next.get_prop.call(null,component,"omcljs$reactKey");
}); return (
new cljs.core.Var(function(){return om.next.react_key;},new cljs.core.Symbol("om.next","react-key","om.next/react-key",(-334067596),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"react-key","react-key",(-1316554421),null),"om/next.cljc",(16),(1),(1081),(1081),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)),"Returns the components React key.",(cljs.core.truth_(om.next.react_key)?om.next.react_key.cljs$lang$test:null)])));})()
;
/**
 * Returns the component type, regardless of whether the component has been
 *    mounted
 */
(function (){
om.next.react_type = (function om$next$react_type(x){
var or__20817__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return cljs.core.type.call(null,x);
}
}); return (
new cljs.core.Var(function(){return om.next.react_type;},new cljs.core.Symbol("om.next","react-type","om.next/react-type",(-1721303640),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"react-type","react-type",(-870904667),null),"om/next.cljc",(20),(4),(1099),(1099),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Returns the component type, regardless of whether the component has been\n      mounted",(cljs.core.truth_(om.next.react_type)?om.next.react_type.cljs$lang$test:null)])));})()
;
/**
 * Returns the component's Om data path.
 */
(function (){
om.next.path = (function om$next$path(c){
return om.next.get_prop.call(null,c,"omcljs$path");
}); return (
new cljs.core.Var(function(){return om.next.path;},new cljs.core.Symbol("om.next","path","om.next/path",(570492298),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),"om/next.cljc",(12),(1),(1105),(1105),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),"Returns the component's Om data path.",(cljs.core.truth_(om.next.path)?om.next.path.cljs$lang$test:null)])));})()
;
/**
 * Return the global shared properties of the Om Next root. See :shared and
 * :shared-fn reconciler options.
 */
(function (){
om.next.shared = (function om$next$shared(var_args){
var args1738 = [];
var len__23656__auto___1743 = arguments.length;
var i__23657__auto___1744 = (0);
while(true){
if((i__23657__auto___1744 < len__23656__auto___1743)){
args1738.push((arguments[i__23657__auto___1744]));

var G__1745 = (i__23657__auto___1744 + (1));
i__23657__auto___1744 = G__1745;
continue;
} else {
}
break;
}

var G__1740 = args1738.length;
switch (G__1740) {
case (1):
return om.next.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return om.next.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1738.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next.shared;},new cljs.core.Symbol("om.next","shared","om.next/shared",(426941171),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"shared","shared",(1256385534),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1111),(1111),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),"Return the global shared properties of the Om Next root. See :shared and\n   :shared-fn reconciler options.",(cljs.core.truth_(om.next.shared)?om.next.shared.cljs$lang$test:null)])));})()
;

om.next.shared.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.shared.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.shared.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var shared = goog.object.get(component.props,"omcljs$shared");
var ks = (function (){var G__1741 = k_or_ks;
var G__1741__$1 = ((!(cljs.core.sequential_QMARK_.call(null,k_or_ks)))?(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[G__1741],null)):G__1741);
return G__1741__$1;
})();
var G__1742 = shared;
var G__1742__$1 = ((!(cljs.core.empty_QMARK_.call(null,ks)))?cljs.core.get_in.call(null,G__1742,ks):G__1742);
return G__1742__$1;
});

om.next.shared.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return om.next.shared;},new cljs.core.Symbol("om.next","shared","om.next/shared",(426941171),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"shared","shared",(1256385534),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1111),(1111),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),"Return the global shared properties of the Om Next root. See :shared and\n   :shared-fn reconciler options.",(cljs.core.truth_(om.next.shared)?om.next.shared.cljs$lang$test:null)]));
(function (){
om.next.instrument = (function om$next$instrument(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return om.next.get_prop.call(null,component,"omcljs$instrument");
}); return (
new cljs.core.Var(function(){return om.next.instrument;},new cljs.core.Symbol("om.next","instrument","om.next/instrument",(1410710376),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"instrument","instrument",(679832683),null),"om/next.cljc",(17),(1),(1125),(1125),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)),null,(cljs.core.truth_(om.next.instrument)?om.next.instrument.cljs$lang$test:null)])));})()
;
(function (){
om.next.update_props_BANG_ = (function om$next$update_props_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var G__1748 = c.state;
goog.object.set(G__1748,"omcljs$next$value",om.next.om_props.call(null,next_props,om.next.protocols.basis_t.call(null,om.next.get_reconciler.call(null,c))));

return G__1748;
}); return (
new cljs.core.Var(function(){return om.next.update_props_BANG_;},new cljs.core.Symbol("om.next","update-props!","om.next/update-props!",(477094665),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"update-props!","update-props!",(-924872694),null),"om/next.cljc",(24),(4),(1131),(1131),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null)], null)),null,(cljs.core.truth_(om.next.update_props_BANG_)?om.next.update_props_BANG_.cljs$lang$test:null)])));})()
;
/**
 * Return a components props.
 */
(function (){
om.next.props = (function om$next$props(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,component.props),om.next.get_props.call(null,component.state)));
}); return (
new cljs.core.Var(function(){return om.next.props;},new cljs.core.Symbol("om.next","props","om.next/props",(679329025),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"props","props",(2093813254),null),"om/next.cljc",(15),(4),(1144),(1144),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)),"Return a components props.",(cljs.core.truth_(om.next.props)?om.next.props.cljs$lang$test:null)])));})()
;
/**
 * Add computed properties to props. Note will replace any pre-existing
 * computed properties.
 */
(function (){
om.next.computed = (function om$next$computed(props,computed_map){
if((props == null)){
return null;
} else {
if(cljs.core.vector_QMARK_.call(null,props)){
var G__1751 = props;
var G__1751__$1 = ((!(cljs.core.empty_QMARK_.call(null,computed_map)))?cljs.core.vary_meta.call(null,G__1751,cljs.core.assoc,new cljs.core.Keyword("om.next","computed","om.next/computed",(1947886329)),computed_map):G__1751);
return G__1751__$1;
} else {
var G__1752 = props;
var G__1752__$1 = ((!(cljs.core.empty_QMARK_.call(null,computed_map)))?cljs.core.assoc.call(null,G__1752,new cljs.core.Keyword("om.next","computed","om.next/computed",(1947886329)),computed_map):G__1752);
return G__1752__$1;
}
}
}); return (
new cljs.core.Var(function(){return om.next.computed;},new cljs.core.Symbol("om.next","computed","om.next/computed",(-706549440),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"computed","computed",(158514765),null),"om/next.cljc",(15),(1),(1157),(1157),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",(2093813254),null),new cljs.core.Symbol(null,"computed-map","computed-map",(651328426),null)], null)),"Add computed properties to props. Note will replace any pre-existing\n   computed properties.",(cljs.core.truth_(om.next.computed)?om.next.computed.cljs$lang$test:null)])));})()
;
/**
 * Return the computed properties on a component or its props.
 */
(function (){
om.next.get_computed = (function om$next$get_computed(var_args){
var args1753 = [];
var len__23656__auto___1758 = arguments.length;
var i__23657__auto___1759 = (0);
while(true){
if((i__23657__auto___1759 < len__23656__auto___1758)){
args1753.push((arguments[i__23657__auto___1759]));

var G__1760 = (i__23657__auto___1759 + (1));
i__23657__auto___1759 = G__1760;
continue;
} else {
}
break;
}

var G__1755 = args1753.length;
switch (G__1755) {
case (1):
return om.next.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1753.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next.get_computed;},new cljs.core.Symbol("om.next","get-computed","om.next/get-computed",(-1692368107),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"get-computed","get-computed",(663761424),null),"om/next.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1168),(1168),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),"Return the computed properties on a component or its props.",(cljs.core.truth_(om.next.get_computed)?om.next.get_computed.cljs$lang$test:null)])));})()
;

om.next.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return om.next.get_computed.call(null,x,cljs.core.PersistentVector.EMPTY);
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
if((x == null)){
return null;
} else {
var props = (function (){var G__1756 = x;
var G__1756__$1 = ((om.next.component_QMARK_.call(null,x))?om.next.props.call(null,G__1756):G__1756);
return G__1756__$1;
})();
var ks = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","computed","om.next/computed",(1947886329))], null),(function (){var G__1757 = k_or_ks;
var G__1757__$1 = ((!(cljs.core.sequential_QMARK_.call(null,k_or_ks)))?(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[G__1757],null)):G__1757);
return G__1757__$1;
})());
if(cljs.core.vector_QMARK_.call(null,props)){
return cljs.core.get_in.call(null,cljs.core.meta.call(null,props),ks);
} else {
return cljs.core.get_in.call(null,props,ks);
}
}
});

om.next.get_computed.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return om.next.get_computed;},new cljs.core.Symbol("om.next","get-computed","om.next/get-computed",(-1692368107),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"get-computed","get-computed",(663761424),null),"om/next.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1168),(1168),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),"Return the computed properties on a component or its props.",(cljs.core.truth_(om.next.get_computed)?om.next.get_computed.cljs$lang$test:null)]));
(function (){
om.next.schedule_render_BANG_; return (
new cljs.core.Var(function(){return om.next.schedule_render_BANG_;},new cljs.core.Symbol("om.next","schedule-render!","om.next/schedule-render!",(188229046),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"schedule-render!","schedule-render!",(-559385419),null),"om/next.cljc",(26),(1),(1182),true,(1182),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next.schedule_render_BANG_)?om.next.schedule_render_BANG_.cljs$lang$test:null)])));})()
;
/**
 * Set the component local state of the component. Analogous to React's
 * setState.
 */
(function (){
om.next.set_state_BANG_ = (function om$next$set_state_BANG_(component,new_state){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

if(((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.om$next$ILocalState$)))?true:false):false)){
om.next._set_state_BANG_.call(null,component,new_state);
} else {
goog.object.set(component.state,"omcljs$pendingState",new_state);
}

var temp__19520__auto__ = om.next.get_reconciler.call(null,component);
if(cljs.core.truth_(temp__19520__auto__)){
var r = temp__19520__auto__;
om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

return om.next.schedule_render_BANG_.call(null,r);
} else {
return component.forceUpdate();
}
}); return (
new cljs.core.Var(function(){return om.next.set_state_BANG_;},new cljs.core.Symbol("om.next","set-state!","om.next/set-state!",(1807509646),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"set-state!","set-state!",(-1204823669),null),"om/next.cljc",(20),(4),(1193),(1193),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null)], null)),"Set the component local state of the component. Analogous to React's\n   setState.",(cljs.core.truth_(om.next.set_state_BANG_)?om.next.set_state_BANG_.cljs$lang$test:null)])));})()
;
/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state.
 */
(function (){
om.next.get_state = (function om$next$get_state(var_args){
var args1764 = [];
var len__23656__auto___1768 = arguments.length;
var i__23657__auto___1769 = (0);
while(true){
if((i__23657__auto___1769 < len__23656__auto___1768)){
args1764.push((arguments[i__23657__auto___1769]));

var G__1770 = (i__23657__auto___1769 + (1));
i__23657__auto___1769 = G__1770;
continue;
} else {
}
break;
}

var G__1766 = args1764.length;
switch (G__1766) {
case (1):
return om.next.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return om.next.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1764.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next.get_state;},new cljs.core.Symbol("om.next","get-state","om.next/get-state",(322100085),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"get-state","get-state",(-1081972112),null),"om/next.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1207),(1207),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),"Get a component's local state. May provide a single key or a sequential\n   collection of keys for indexed access into the component's local state.",(cljs.core.truth_(om.next.get_state)?om.next.get_state.cljs$lang$test:null)])));})()
;

om.next.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_state.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = ((((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.om$next$ILocalState$)))?true:false):false))?om.next._get_state.call(null,component):(function (){var temp__19834__auto__ = component.state;
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

om.next.get_state.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return om.next.get_state;},new cljs.core.Symbol("om.next","get-state","om.next/get-state",(322100085),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"get-state","get-state",(-1081972112),null),"om/next.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1207),(1207),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),"Get a component's local state. May provide a single key or a sequential\n   collection of keys for indexed access into the component's local state.",(cljs.core.truth_(om.next.get_state)?om.next.get_state.cljs$lang$test:null)]));
/**
 * Update a component's local state. Similar to Clojure(Script)'s swap!
 */
(function (){
om.next.update_state_BANG_ = (function om$next$update_state_BANG_(var_args){
var args1772 = [];
var len__23656__auto___1782 = arguments.length;
var i__23657__auto___1783 = (0);
while(true){
if((i__23657__auto___1783 < len__23656__auto___1782)){
args1772.push((arguments[i__23657__auto___1783]));

var G__1784 = (i__23657__auto___1783 + (1));
i__23657__auto___1783 = G__1784;
continue;
} else {
}
break;
}

var G__1781 = args1772.length;
switch (G__1781) {
case (2):
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (5):
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case (6):
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var argseq__23675__auto__ = (new cljs.core.IndexedSeq(args1772.slice((6)),(0),null));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__23675__auto__);

}
}); return (
new cljs.core.Var(function(){return om.next.update_state_BANG_;},new cljs.core.Symbol("om.next","update-state!","om.next/update-state!",(73309010),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"update-state!","update-state!",(-1328622511),null),"om/next.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(6),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"arg-rest","arg-rest",(-1024311453),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null,null,null,null)], null),(1),(1223),(1223),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"arg-rest","arg-rest",(-1024311453),null)], null)),"Update a component's local state. Similar to Clojure(Script)'s swap!",(cljs.core.truth_(om.next.update_state_BANG_)?om.next.update_state_BANG_.cljs$lang$test:null)])));})()
;

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component)));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (component,f,arg0,arg1,arg2,arg3){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_state_BANG_.call(null,component,cljs.core.apply.call(null,f,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3,arg_rest));
});

om.next.update_state_BANG_.cljs$lang$applyTo = (function (seq1773){
var G__1774 = cljs.core.first.call(null,seq1773);
var seq1773__$1 = cljs.core.next.call(null,seq1773);
var G__1775 = cljs.core.first.call(null,seq1773__$1);
var seq1773__$2 = cljs.core.next.call(null,seq1773__$1);
var G__1776 = cljs.core.first.call(null,seq1773__$2);
var seq1773__$3 = cljs.core.next.call(null,seq1773__$2);
var G__1777 = cljs.core.first.call(null,seq1773__$3);
var seq1773__$4 = cljs.core.next.call(null,seq1773__$3);
var G__1778 = cljs.core.first.call(null,seq1773__$4);
var seq1773__$5 = cljs.core.next.call(null,seq1773__$4);
var G__1779 = cljs.core.first.call(null,seq1773__$5);
var seq1773__$6 = cljs.core.next.call(null,seq1773__$5);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__1774,G__1775,G__1776,G__1777,G__1778,G__1779,seq1773__$6);
});

om.next.update_state_BANG_.cljs$lang$maxFixedArity = (6);

new cljs.core.Var(function(){return om.next.update_state_BANG_;},new cljs.core.Symbol("om.next","update-state!","om.next/update-state!",(73309010),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"update-state!","update-state!",(-1328622511),null),"om/next.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(6),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"arg-rest","arg-rest",(-1024311453),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null,null,null,null)], null),(1),(1223),(1223),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"arg-rest","arg-rest",(-1024311453),null)], null)),"Update a component's local state. Similar to Clojure(Script)'s swap!",(cljs.core.truth_(om.next.update_state_BANG_)?om.next.update_state_BANG_.cljs$lang$test:null)]));
/**
 * Get the rendered state of component. om.next/get-state always returns the
 * up-to-date state.
 */
(function (){
om.next.get_rendered_state = (function om$next$get_rendered_state(var_args){
var args1786 = [];
var len__23656__auto___1791 = arguments.length;
var i__23657__auto___1792 = (0);
while(true){
if((i__23657__auto___1792 < len__23656__auto___1791)){
args1786.push((arguments[i__23657__auto___1792]));

var G__1793 = (i__23657__auto___1792 + (1));
i__23657__auto___1792 = G__1793;
continue;
} else {
}
break;
}

var G__1788 = args1786.length;
switch (G__1788) {
case (1):
return om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1786.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next.get_rendered_state;},new cljs.core.Symbol("om.next","get-rendered-state","om.next/get-rendered-state",(-544989689),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"get-rendered-state","get-rendered-state",(1815604484),null),"om/next.cljc",(25),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1239),(1239),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),"Get the rendered state of component. om.next/get-state always returns the\n   up-to-date state.",(cljs.core.truth_(om.next.get_rendered_state)?om.next.get_rendered_state.cljs$lang$test:null)])));})()
;

om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_rendered_state.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = ((((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.om$next$ILocalState$)))?true:false):false))?om.next._get_rendered_state.call(null,component):(function (){var G__1790 = component;
var G__1790__$1 = (((G__1790 == null))?null:G__1790.state);
var G__1790__$2 = (((G__1790__$1 == null))?null:goog.object.get(G__1790__$1,"omcljs$state"));
return G__1790__$2;
})());
return cljs.core.get_in.call(null,cst,((cljs.core.sequential_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_rendered_state.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return om.next.get_rendered_state;},new cljs.core.Symbol("om.next","get-rendered-state","om.next/get-rendered-state",(-544989689),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"get-rendered-state","get-rendered-state",(1815604484),null),"om/next.cljc",(25),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1239),(1239),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"k-or-ks","k-or-ks",(1689310410),null)], null)),"Get the rendered state of component. om.next/get-state always returns the\n   up-to-date state.",(cljs.core.truth_(om.next.get_rendered_state)?om.next.get_rendered_state.cljs$lang$test:null)]));
(function (){
om.next.merge_pending_state_BANG_ = (function om$next$merge_pending_state_BANG_(c){
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$ILocalState$)))?true:false):false)){
return om.next._merge_pending_state_BANG_.call(null,c);
} else {
var temp__19834__auto__ = (function (){var G__1798 = c;
var G__1798__$1 = (((G__1798 == null))?null:G__1798.state);
var G__1798__$2 = (((G__1798__$1 == null))?null:goog.object.get(G__1798__$1,"omcljs$pendingState"));
return G__1798__$2;
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
new cljs.core.Var(function(){return om.next.merge_pending_state_BANG_;},new cljs.core.Symbol("om.next","merge-pending-state!","om.next/merge-pending-state!",(1487578810),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"merge-pending-state!","merge-pending-state!",(-195364935),null),"om/next.cljc",(31),(4),(1254),(1254),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(om.next.merge_pending_state_BANG_)?om.next.merge_pending_state_BANG_.cljs$lang$test:null)])));})()
;
(function (){
om.next.react_set_state_BANG_ = (function om$next$react_set_state_BANG_(var_args){
var args1799 = [];
var len__23656__auto___1802 = arguments.length;
var i__23657__auto___1803 = (0);
while(true){
if((i__23657__auto___1803 < len__23656__auto___1802)){
args1799.push((arguments[i__23657__auto___1803]));

var G__1804 = (i__23657__auto___1803 + (1));
i__23657__auto___1803 = G__1804;
continue;
} else {
}
break;
}

var G__1801 = args1799.length;
switch (G__1801) {
case (2):
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1799.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next.react_set_state_BANG_;},new cljs.core.Symbol("om.next","react-set-state!","om.next/react-set-state!",(-260795448),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"react-set-state!","react-set-state!",(535085269),null),"om/next.cljc",(23),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null),new cljs.core.Symbol(null,"cb","cb",(-2064487928),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null),new cljs.core.Symbol(null,"cb","cb",(-2064487928),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1264),(1264),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null),new cljs.core.Symbol(null,"cb","cb",(-2064487928),null)], null)),null,(cljs.core.truth_(om.next.react_set_state_BANG_)?om.next.react_set_state_BANG_.cljs$lang$test:null)])));})()
;

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return om.next.react_set_state_BANG_.call(null,component,new_state,null);
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,cb){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return component.setState(({"omcljs$state": new_state}),cb);
});

om.next.react_set_state_BANG_.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return om.next.react_set_state_BANG_;},new cljs.core.Symbol("om.next","react-set-state!","om.next/react-set-state!",(-260795448),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"react-set-state!","react-set-state!",(535085269),null),"om/next.cljc",(23),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null),new cljs.core.Symbol(null,"cb","cb",(-2064487928),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null),new cljs.core.Symbol(null,"cb","cb",(-2064487928),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1264),(1264),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"new-state","new-state",(1150182315),null),new cljs.core.Symbol(null,"cb","cb",(-2064487928),null)], null)),null,(cljs.core.truth_(om.next.react_set_state_BANG_)?om.next.react_set_state_BANG_.cljs$lang$test:null)]));
(function (){
om.next.full_query; return (
new cljs.core.Var(function(){return om.next.full_query;},new cljs.core.Symbol("om.next","full-query","om.next/full-query",(889633954),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"full-query","full-query",(-1063894081),null),"om/next.cljc",(20),(1),(1274),true,(1274),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next.full_query)?om.next.full_query.cljs$lang$test:null)])));})()
;

(function (){
om.next.to_env; return (
new cljs.core.Var(function(){return om.next.to_env;},new cljs.core.Symbol("om.next","to-env","om.next/to-env",(1155266097),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"to-env","to-env",(726350092),null),"om/next.cljc",(27),(1),(1274),true,(1274),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next.to_env)?om.next.to_env.cljs$lang$test:null)])));})()
;

(function (){
om.next.schedule_sends_BANG_; return (
new cljs.core.Var(function(){return om.next.schedule_sends_BANG_;},new cljs.core.Symbol("om.next","schedule-sends!","om.next/schedule-sends!",(114914578),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"schedule-sends!","schedule-sends!",(-362167787),null),"om/next.cljc",(43),(1),(1274),true,(1274),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next.schedule_sends_BANG_)?om.next.schedule_sends_BANG_.cljs$lang$test:null)])));})()
;

(function (){
om.next.reconciler_QMARK_; return (
new cljs.core.Var(function(){return om.next.reconciler_QMARK_;},new cljs.core.Symbol("om.next","reconciler?","om.next/reconciler?",(2051175409),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"reconciler?","reconciler?",(250756342),null),"om/next.cljc",(55),(1),(1274),true,(1274),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next.reconciler_QMARK_)?om.next.reconciler_QMARK_.cljs$lang$test:null)])));})()
;

(function (){
om.next.ref__GT_components; return (
new cljs.core.Var(function(){return om.next.ref__GT_components;},new cljs.core.Symbol("om.next","ref->components","om.next/ref->components",(-234383461),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"ref->components","ref->components",(1336944278),null),"om/next.cljc",(71),(1),(1274),true,(1274),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next.ref__GT_components)?om.next.ref__GT_components.cljs$lang$test:null)])));})()
;

(function (){
om.next.force; return (
new cljs.core.Var(function(){return om.next.force;},new cljs.core.Symbol("om.next","force","om.next/force",(1070919662),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"force","force",(-1872478483),null),"om/next.cljc",(77),(1),(1274),true,(1274),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next.force)?om.next.force.cljs$lang$test:null)])));})()
;
(function (){
om.next.gather_sends = (function om$next$gather_sends(p__1806,q,remotes){
var map__1813 = p__1806;
var map__1813__$1 = ((((!((map__1813 == null)))?((((map__1813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1813.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1813):map__1813);
var env = map__1813__$1;
var parser = cljs.core.get.call(null,map__1813__$1,new cljs.core.Keyword(null,"parser","parser",(-1543495310)));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,((function (map__1813,map__1813__$1,env,parser){
return (function (p1__166_SHARP_){
return (new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__166_SHARP_,parser.call(null,env,q,p1__166_SHARP_)],null));
});})(map__1813,map__1813__$1,env,parser))
),cljs.core.filter.call(null,((function (map__1813,map__1813__$1,env,parser){
return (function (p__1815){
var vec__1816 = p__1815;
var _ = cljs.core.nth.call(null,vec__1816,(0),null);
var v = cljs.core.nth.call(null,vec__1816,(1),null);
return (cljs.core.count.call(null,v) > (0));
});})(map__1813,map__1813__$1,env,parser))
)),remotes);
}); return (
new cljs.core.Var(function(){return om.next.gather_sends;},new cljs.core.Symbol("om.next","gather-sends","om.next/gather-sends",(328561256),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"gather-sends","gather-sends",(2114265957),null),"om/next.cljc",(19),(1),(1276),(1276),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parser","parser",(97036217),null)], null)], null),new cljs.core.Symbol(null,"q","q",(-1965434072),null),new cljs.core.Symbol(null,"remotes","remotes",(-1522069457),null)], null)),null,(cljs.core.truth_(om.next.gather_sends)?om.next.gather_sends.cljs$lang$test:null)])));})()
;
/**
 * Given r (a reconciler) and a query expression including a mutation and
 * any simple reads, return the equivalent query expression where the simple
 * reads have been replaced by the full query for each component that cares about
 * the specified read.
 */
(function (){
om.next.transform_reads = (function om$next$transform_reads(r,tx){
if(cljs.core.truth_(new cljs.core.Keyword(null,"easy-reads","easy-reads",(803667467)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",(994861415)).cljs$core$IFn$_invoke$arity$1(r)))){
var with_target = (function om$next$transform_reads_$_with_target(target,q){
if(!((target == null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.force.call(null,cljs.core.first.call(null,q),target)], null);
} else {
return q;
}
});
var add_focused_query = (function om$next$transform_reads_$_add_focused_query(k,target,tx__$1,c){
var transformed = om.next.full_query.call(null,c,with_target.call(null,target,om.next.focus_query.call(null,om.next.get_query.call(null,c),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))));
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
var cs = om.next.ref__GT_components.call(null,r,key);
var G__1821 = cljs.core.next.call(null,exprs);
var G__1822 = cljs.core.reduce.call(null,((function (exprs,tx_SINGLEQUOTE_,cs,expr,ast,key,tgt){
return (function (p1__167_SHARP_,p2__168_SHARP_){
return add_focused_query.call(null,key,tgt,p1__167_SHARP_,p2__168_SHARP_);
});})(exprs,tx_SINGLEQUOTE_,cs,expr,ast,key,tgt))
,(function (){var G__1820 = tx_SINGLEQUOTE_;
var G__1820__$1 = ((cljs.core.empty_QMARK_.call(null,cs))?cljs.core.conj.call(null,G__1820,expr):G__1820);
return G__1820__$1;
})(),cs);
exprs = G__1821;
tx_SINGLEQUOTE_ = G__1822;
continue;
} else {
var G__1823 = cljs.core.next.call(null,exprs);
var G__1824 = cljs.core.conj.call(null,tx_SINGLEQUOTE_,expr);
exprs = G__1823;
tx_SINGLEQUOTE_ = G__1824;
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
new cljs.core.Var(function(){return om.next.transform_reads;},new cljs.core.Symbol("om.next","transform-reads","om.next/transform-reads",(-1538016291),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"transform-reads","transform-reads",(1911294686),null),"om/next.cljc",(22),(1),(1284),(1284),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null)),"Given r (a reconciler) and a query expression including a mutation and\n   any simple reads, return the equivalent query expression where the simple\n   reads have been replaced by the full query for each component that cares about\n   the specified read.",(cljs.core.truth_(om.next.transform_reads)?om.next.transform_reads.cljs$lang$test:null)])));})()
;
/**
 * Change the query of a component. Takes a map containing :params and/or
 * :query. :params should be a map of new bindings and :query should be a query
 * expression. Will schedule a re-render as well as remote re-sends if
 * necessary.
 */
(function (){
om.next.set_query_BANG_ = (function om$next$set_query_BANG_(var_args){
var args1825 = [];
var len__23656__auto___1832 = arguments.length;
var i__23657__auto___1833 = (0);
while(true){
if((i__23657__auto___1833 < len__23656__auto___1832)){
args1825.push((arguments[i__23657__auto___1833]));

var G__1834 = (i__23657__auto___1833 + (1));
i__23657__auto___1833 = G__1834;
continue;
} else {
}
break;
}

var G__1827 = args1825.length;
switch (G__1827) {
case (2):
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1825.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next.set_query_BANG_;},new cljs.core.Symbol("om.next","set-query!","om.next/set-query!",(-873869947),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"set-query!","set-query!",(-1619444602),null),"om/next.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"params&query","params&query",(329623383),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)], null),new cljs.core.Symbol(null,"reads","reads",(425464166),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"params&query","params&query",(329623383),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)], null),new cljs.core.Symbol(null,"reads","reads",(425464166),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1316),(1316),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"params&query","params&query",(329623383),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)], null),new cljs.core.Symbol(null,"reads","reads",(425464166),null)], null)),"Change the query of a component. Takes a map containing :params and/or\n   :query. :params should be a map of new bindings and :query should be a query\n   expression. Will schedule a re-render as well as remote re-sends if\n   necessary.",(cljs.core.truth_(om.next.set_query_BANG_)?om.next.set_query_BANG_.cljs$lang$test:null)])));})()
;

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,params_AMPERSAND_query){
return om.next.set_query_BANG_.call(null,x,params_AMPERSAND_query,null);
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,p__1828,reads){
var map__1829 = p__1828;
var map__1829__$1 = ((((!((map__1829 == null)))?((((map__1829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1829):map__1829);
var query = cljs.core.get.call(null,map__1829__$1,new cljs.core.Keyword(null,"query","query",(-1288509510)));
var params = cljs.core.get.call(null,map__1829__$1,new cljs.core.Keyword(null,"params","params",(710516235)));
if(cljs.core.truth_((function (){var or__20817__auto__ = om.next.reconciler_QMARK_.call(null,x);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return om.next.component_QMARK_.call(null,x);
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

var r = ((om.next.component_QMARK_.call(null,x))?om.next.get_reconciler.call(null,x):x);
var c = ((om.next.component_QMARK_.call(null,x))?x:null);
var root = new cljs.core.Keyword(null,"root","root",(-448657453)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(r)));
var cfg = new cljs.core.Keyword(null,"config","config",(994861415)).cljs$core$IFn$_invoke$arity$1(r);
var st = new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid.call(null);
new cljs.core.Keyword(null,"history","history",(-247395220)).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,st));

var temp__19834__auto___1836 = new cljs.core.Keyword(null,"logger","logger",(-220675947)).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__19834__auto___1836)){
var l_1837 = temp__19834__auto___1836;
goog.log.info(l_1837,[cljs.core.str((function (){var temp__19834__auto____$1 = ((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false))?om.next.ident.call(null,c,om.next.props.call(null,c)):null);
if(cljs.core.truth_(temp__19834__auto____$1)){
var ident = temp__19834__auto____$1;
return [cljs.core.str(cljs.core.pr_str.call(null,ident)),cljs.core.str(" ")].join('');
} else {
return null;
}
})()),cljs.core.str((cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?"reconciler ":null)),cljs.core.str((cljs.core.truth_(query)?(function (){


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

var rootq_1838 = ((!((c == null)))?om.next.full_query.call(null,c):(((reads == null))?om.next.get_query.call(null,root):null));
var sends_1839 = om.next.gather_sends.call(null,om.next.to_env.call(null,cfg),cljs.core.into.call(null,(function (){var or__20817__auto__ = rootq_1838;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),om.next.transform_reads.call(null,r,reads)),new cljs.core.Keyword(null,"remotes","remotes",(1132366312)).cljs$core$IFn$_invoke$arity$1(cfg));
if(cljs.core.empty_QMARK_.call(null,sends_1839)){
} else {
om.next.protocols.queue_sends_BANG_.call(null,r,sends_1839);

om.next.schedule_sends_BANG_.call(null,r);
}

return null;
});

om.next.set_query_BANG_.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return om.next.set_query_BANG_;},new cljs.core.Symbol("om.next","set-query!","om.next/set-query!",(-873869947),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"set-query!","set-query!",(-1619444602),null),"om/next.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"params&query","params&query",(329623383),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)], null),new cljs.core.Symbol(null,"reads","reads",(425464166),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"params&query","params&query",(329623383),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)], null),new cljs.core.Symbol(null,"reads","reads",(425464166),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1316),(1316),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"params&query","params&query",(329623383),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)], null),new cljs.core.Symbol(null,"reads","reads",(425464166),null)], null)),"Change the query of a component. Takes a map containing :params and/or\n   :query. :params should be a map of new bindings and :query should be a query\n   expression. Will schedule a re-render as well as remote re-sends if\n   necessary.",(cljs.core.truth_(om.next.set_query_BANG_)?om.next.set_query_BANG_.cljs$lang$test:null)]));
/**
 * Update a component's query and query parameters with a function.
 */
(function (){
om.next.update_query_BANG_ = (function om$next$update_query_BANG_(var_args){
var args1840 = [];
var len__23656__auto___1850 = arguments.length;
var i__23657__auto___1851 = (0);
while(true){
if((i__23657__auto___1851 < len__23656__auto___1850)){
args1840.push((arguments[i__23657__auto___1851]));

var G__1852 = (i__23657__auto___1851 + (1));
i__23657__auto___1851 = G__1852;
continue;
} else {
}
break;
}

var G__1849 = args1840.length;
switch (G__1849) {
case (2):
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (5):
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__23675__auto__ = (new cljs.core.IndexedSeq(args1840.slice((6)),(0),null));
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__23675__auto__);

}
}); return (
new cljs.core.Var(function(){return om.next.update_query_BANG_;},new cljs.core.Symbol("om.next","update-query!","om.next/update-query!",(1268222996),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"update-query!","update-query!",(-1492656879),null),"om/next.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(6),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"arg-rest","arg-rest",(-1024311453),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null,null,null)], null),(1),(1368),(1368),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"arg-rest","arg-rest",(-1024311453),null)], null)),"Update a component's query and query parameters with a function.",(cljs.core.truth_(om.next.update_query_BANG_)?om.next.update_query_BANG_.cljs$lang$test:null)])));})()
;

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",(710516235)),om.next.get_params.call(null,component),new cljs.core.Keyword(null,"query","query",(-1288509510)),om.next.get_unbound_query.call(null,component)], null)));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",(710516235)),om.next.get_params.call(null,component),new cljs.core.Keyword(null,"query","query",(-1288509510)),om.next.get_unbound_query.call(null,component)], null),arg0));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",(710516235)),om.next.get_params.call(null,component),new cljs.core.Keyword(null,"query","query",(-1288509510)),om.next.get_unbound_query.call(null,component)], null),arg0,arg1));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",(710516235)),om.next.get_params.call(null,component),new cljs.core.Keyword(null,"query","query",(-1288509510)),om.next.get_unbound_query.call(null,component)], null),arg0,arg1,arg2));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_query_BANG_.call(null,component,cljs.core.apply.call(null,f,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",(710516235)),om.next.get_params.call(null,component),new cljs.core.Keyword(null,"query","query",(-1288509510)),om.next.get_unbound_query.call(null,component)], null),arg0,arg1,arg2,arg3,arg_rest));
});

om.next.update_query_BANG_.cljs$lang$applyTo = (function (seq1841){
var G__1842 = cljs.core.first.call(null,seq1841);
var seq1841__$1 = cljs.core.next.call(null,seq1841);
var G__1843 = cljs.core.first.call(null,seq1841__$1);
var seq1841__$2 = cljs.core.next.call(null,seq1841__$1);
var G__1844 = cljs.core.first.call(null,seq1841__$2);
var seq1841__$3 = cljs.core.next.call(null,seq1841__$2);
var G__1845 = cljs.core.first.call(null,seq1841__$3);
var seq1841__$4 = cljs.core.next.call(null,seq1841__$3);
var G__1846 = cljs.core.first.call(null,seq1841__$4);
var seq1841__$5 = cljs.core.next.call(null,seq1841__$4);
var G__1847 = cljs.core.first.call(null,seq1841__$5);
var seq1841__$6 = cljs.core.next.call(null,seq1841__$5);
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__1842,G__1843,G__1844,G__1845,G__1846,G__1847,seq1841__$6);
});

om.next.update_query_BANG_.cljs$lang$maxFixedArity = (6);

new cljs.core.Var(function(){return om.next.update_query_BANG_;},new cljs.core.Symbol("om.next","update-query!","om.next/update-query!",(1268222996),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"update-query!","update-query!",(-1492656879),null),"om/next.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(6),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"arg-rest","arg-rest",(-1024311453),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null,null,null)], null),(1),(1368),(1368),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"arg0","arg0",(-1024593414),null),new cljs.core.Symbol(null,"arg1","arg1",(-1702536411),null),new cljs.core.Symbol(null,"arg2","arg2",(-924884852),null),new cljs.core.Symbol(null,"arg3","arg3",(153709031),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"arg-rest","arg-rest",(-1024311453),null)], null)),"Update a component's query and query parameters with a function.",(cljs.core.truth_(om.next.update_query_BANG_)?om.next.update_query_BANG_.cljs$lang$test:null)]));
/**
 * Returns true if the component is mounted.
 */
(function (){
om.next.mounted_QMARK_ = (function om$next$mounted_QMARK_(x){
return (om.next.component_QMARK_.call(null,x)) && (x.isMounted());
}); return (
new cljs.core.Var(function(){return om.next.mounted_QMARK_;},new cljs.core.Symbol("om.next","mounted?","om.next/mounted?",(950681480),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"mounted?","mounted?",(-1942321009),null),"om/next.cljc",(15),(1),(1395),(1395),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Returns true if the component is mounted.",((om.next.mounted_QMARK_)?om.next.mounted_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Returns the component associated with a component's React ref.
 */
(function (){
om.next.react_ref = (function om$next$react_ref(component,name){
var G__1855 = component.refs;
var G__1855__$1 = (((G__1855 == null))?null:goog.object.get(G__1855,name));
return G__1855__$1;
}); return (
new cljs.core.Var(function(){return om.next.react_ref;},new cljs.core.Symbol("om.next","react-ref","om.next/react-ref",(1575863902),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"react-ref","react-ref",(-513960099),null),"om/next.cljc",(16),(1),(1402),(1402),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"name","name",(-810760592),null)], null)),"Returns the component associated with a component's React ref.",(cljs.core.truth_(om.next.react_ref)?om.next.react_ref.cljs$lang$test:null)])));})()
;
/**
 * Returns the component's children.
 */
(function (){
om.next.children = (function om$next$children(component){
return component.props.children;
}); return (
new cljs.core.Var(function(){return om.next.children;},new cljs.core.Symbol("om.next","children","om.next/children",(1523081484),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"children","children",(699969545),null),"om/next.cljc",(15),(1),(1408),(1408),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null)),"Returns the component's children.",(cljs.core.truth_(om.next.children)?om.next.children.cljs$lang$test:null)])));})()
;
(function (){
om.next.update_component_BANG_ = (function om$next$update_component_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

om.next.update_props_BANG_.call(null,c,next_props);

return c.forceUpdate();
}); return (
new cljs.core.Var(function(){return om.next.update_component_BANG_;},new cljs.core.Symbol("om.next","update-component!","om.next/update-component!",(516196154),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"update-component!","update-component!",(1249179655),null),"om/next.cljc",(28),(4),(1415),(1415),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null)], null)),null,(cljs.core.truth_(om.next.update_component_BANG_)?om.next.update_component_BANG_.cljs$lang$test:null)])));})()
;
(function (){
om.next.should_update_QMARK_ = (function om$next$should_update_QMARK_(var_args){
var args1856 = [];
var len__23656__auto___1859 = arguments.length;
var i__23657__auto___1860 = (0);
while(true){
if((i__23657__auto___1860 < len__23656__auto___1859)){
args1856.push((arguments[i__23657__auto___1860]));

var G__1861 = (i__23657__auto___1860 + (1));
i__23657__auto___1860 = G__1861;
continue;
} else {
}
break;
}

var G__1858 = args1856.length;
switch (G__1858) {
case (2):
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1856.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next.should_update_QMARK_;},new cljs.core.Symbol("om.next","should-update?","om.next/should-update?",(-1035804503),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"should-update?","should-update?",(-1343008342),null),"om/next.cljc",(24),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null),new cljs.core.Symbol(null,"next-state","next-state",(211803275),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null),new cljs.core.Symbol(null,"next-state","next-state",(211803275),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(4),(1421),(1421),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null),new cljs.core.Symbol(null,"next-state","next-state",(211803275),null)], null)),null,(cljs.core.truth_(om.next.should_update_QMARK_)?om.next.should_update_QMARK_.cljs$lang$test:null)])));})()
;

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,next_props){
return om.next.should_update_QMARK_.call(null,c,next_props,null);
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (c,next_props,next_state){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return c.shouldComponentUpdate(({"omcljs$value": next_props}),({"omcljs$state": next_state}));
});

om.next.should_update_QMARK_.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return om.next.should_update_QMARK_;},new cljs.core.Symbol("om.next","should-update?","om.next/should-update?",(-1035804503),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"should-update?","should-update?",(-1343008342),null),"om/next.cljc",(24),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null),new cljs.core.Symbol(null,"next-state","next-state",(211803275),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null),new cljs.core.Symbol(null,"next-state","next-state",(211803275),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(4),(1421),(1421),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"next-props","next-props",(-266324026),null),new cljs.core.Symbol(null,"next-state","next-state",(211803275),null)], null)),null,(cljs.core.truth_(om.next.should_update_QMARK_)?om.next.should_update_QMARK_.cljs$lang$test:null)]));
/**
 * Return the raw component class path associated with a component. Contains
 * duplicates for recursive component trees.
 */
(function (){
om.next.raw_class_path = (function om$next$raw_class_path(c){
var c__$1 = c;
var ret = (function (){var x__23399__auto__ = om.next.react_type.call(null,c__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})();
while(true){
var temp__19520__auto__ = om.next.parent.call(null,c__$1);
if(cljs.core.truth_(temp__19520__auto__)){
var p = temp__19520__auto__;
if(om.next.iquery_QMARK_.call(null,p)){
var G__1863 = p;
var G__1864 = cljs.core.cons.call(null,om.next.react_type.call(null,p),ret);
c__$1 = G__1863;
ret = G__1864;
continue;
} else {
var G__1865 = p;
var G__1866 = ret;
c__$1 = G__1865;
ret = G__1866;
continue;
}
} else {
return ret;
}
break;
}
}); return (
new cljs.core.Var(function(){return om.next.raw_class_path;},new cljs.core.Symbol("om.next","raw-class-path","om.next/raw-class-path",(-932760440),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"raw-class-path","raw-class-path",(-1644787829),null),"om/next.cljc",(22),(1),(1430),(1430),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),"Return the raw component class path associated with a component. Contains\n   duplicates for recursive component trees.",(cljs.core.truth_(om.next.raw_class_path)?om.next.raw_class_path.cljs$lang$test:null)])));})()
;
/**
 * Return the component class path associated with a component.
 */
(function (){
om.next.class_path = (function om$next$class_path(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var raw_cp = om.next.raw_class_path.call(null,c);
var cp = cljs.core.seq.call(null,raw_cp);
var ret = cljs.core.PersistentVector.EMPTY;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cp){
var c__$1 = cljs.core.first.call(null,cp);
if(cljs.core.contains_QMARK_.call(null,seen,c__$1)){
var G__1867 = cljs.core.next.call(null,cp);
var G__1868 = ret;
var G__1869 = seen;
cp = G__1867;
ret = G__1868;
seen = G__1869;
continue;
} else {
var G__1870 = cljs.core.next.call(null,cp);
var G__1871 = cljs.core.conj.call(null,ret,c__$1);
var G__1872 = cljs.core.conj.call(null,seen,c__$1);
cp = G__1870;
ret = G__1871;
seen = G__1872;
continue;
}
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
}); return (
new cljs.core.Var(function(){return om.next.class_path;},new cljs.core.Symbol("om.next","class-path","om.next/class-path",(-1962074504),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"class-path","class-path",(-126000779),null),"om/next.cljc",(17),(1),(1441),(1441),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),"Return the component class path associated with a component.",(cljs.core.truth_(om.next.class_path)?om.next.class_path.cljs$lang$test:null)])));})()
;
/**
 * Returns true if a component's classpath is recursive
 */
(function (){
om.next.recursive_class_path_QMARK_ = (function om$next$recursive_class_path_QMARK_(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,om.next.raw_class_path.call(null,c)));
}); return (
new cljs.core.Var(function(){return om.next.recursive_class_path_QMARK_;},new cljs.core.Symbol("om.next","recursive-class-path?","om.next/recursive-class-path?",(-22073556),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"recursive-class-path?","recursive-class-path?",(-1411393495),null),"om/next.cljc",(29),(1),(1454),(1454),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),"Returns true if a component's classpath is recursive",((om.next.recursive_class_path_QMARK_)?om.next.recursive_class_path_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Given a class or mounted component x and a ref to an instantiated component
 * or class that defines a subquery, pick the most specific subquery. If the
 * component is mounted subquery-ref will be used, subquery-class otherwise.
 */
(function (){
om.next.subquery = (function om$next$subquery(x,subquery_ref,subquery_class){
if(((subquery_ref instanceof cljs.core.Keyword)) || (typeof subquery_ref === 'string')){
} else {
throw (new Error("Assert failed: (or (keyword? subquery-ref) (string? subquery-ref))"));
}

if(cljs.core.fn_QMARK_.call(null,subquery_class)){
} else {
throw (new Error("Assert failed: (fn? subquery-class)"));
}

var ref = (function (){var G__1874 = subquery_ref;
var G__1874__$1 = (((subquery_ref instanceof cljs.core.Keyword))?[cljs.core.str(G__1874)].join(''):G__1874);
return G__1874__$1;
})();
if((om.next.component_QMARK_.call(null,x)) && (om.next.mounted_QMARK_.call(null,x))){
return om.next.get_query.call(null,om.next.react_ref.call(null,x,ref));
} else {
return om.next.get_query.call(null,subquery_class);
}
}); return (
new cljs.core.Var(function(){return om.next.subquery;},new cljs.core.Symbol("om.next","subquery","om.next/subquery",(-1765734305),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"subquery","subquery",(997383004),null),"om/next.cljc",(15),(1),(1461),(1461),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"subquery-ref","subquery-ref",(1353295365),null),new cljs.core.Symbol(null,"subquery-class","subquery-class",(-917164088),null)], null)),"Given a class or mounted component x and a ref to an instantiated component\n   or class that defines a subquery, pick the most specific subquery. If the\n   component is mounted subquery-ref will be used, subquery-class otherwise.",(cljs.core.truth_(om.next.subquery)?om.next.subquery.cljs$lang$test:null)])));})()
;
/**
 * Given a mounted component with assigned props, return the ident for the
 * component.
 */
(function (){
om.next.get_ident = (function om$next$get_ident(x){
if(om.next.component_QMARK_.call(null,x)){
} else {
throw (new Error("Assert failed: (component? x)"));
}

var m = om.next.props.call(null,x);
if(!((m == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("get-ident invoked on component with nil props"),cljs.core.str("\n"),cljs.core.str("(not (nil? m))")].join('')));
}

return om.next.ident.call(null,x,m);
}); return (
new cljs.core.Var(function(){return om.next.get_ident;},new cljs.core.Symbol("om.next","get-ident","om.next/get-ident",(1405982607),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"get-ident","get-ident",(1063069322),null),"om/next.cljc",(16),(1),(1473),(1473),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Given a mounted component with assigned props, return the ident for the\n   component.",(cljs.core.truth_(om.next.get_ident)?om.next.get_ident.cljs$lang$test:null)])));})()
;
(function (){
om.next.reconciler_QMARK_; return (
new cljs.core.Var(function(){return om.next.reconciler_QMARK_;},new cljs.core.Symbol("om.next","reconciler?","om.next/reconciler?",(2051175409),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"reconciler?","reconciler?",(250756342),null),"om/next.cljc",(21),(1),(1485),true,(1485),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next.reconciler_QMARK_)?om.next.reconciler_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
om.next.basis_t = (function om$next$basis_t(reconciler){
return om.next.protocols.basis_t.call(null,reconciler);
}); return (
new cljs.core.Var(function(){return om.next.basis_t;},new cljs.core.Symbol("om.next","basis-t","om.next/basis-t",(1534495608),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"basis-t","basis-t",(216455797),null),"om/next.cljc",(15),(1),(1487),(1487),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null)], null)),null,(cljs.core.truth_(om.next.basis_t)?om.next.basis_t.cljs$lang$test:null)])));})()
;
(function (){
om.next.queue_render_BANG_ = (function om$next$queue_render_BANG_(f){
if(cljs.core.fn_QMARK_.call(null,om.next._STAR_raf_STAR_)){
return om.next._STAR_raf_STAR_.call(null,f);
} else {
if(!(typeof requestAnimationFrame !== 'undefined')){
return setTimeout(f,(16));
} else {
return requestAnimationFrame(f);

}
}
}); return (
new cljs.core.Var(function(){return om.next.queue_render_BANG_;},new cljs.core.Symbol("om.next","queue-render!","om.next/queue-render!",(-1420253036),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"queue-render!","queue-render!",(2009627499),null),"om/next.cljc",(24),(4),(1491),(1491),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),null,(cljs.core.truth_(om.next.queue_render_BANG_)?om.next.queue_render_BANG_.cljs$lang$test:null)])));})()
;
(function (){
om.next.schedule_render_BANG_ = (function om$next$schedule_render_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_render_BANG_.call(null,reconciler))){
return om.next.queue_render_BANG_.call(null,(function (){
return om.next.protocols.reconcile_BANG_.call(null,reconciler);
}));
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return om.next.schedule_render_BANG_;},new cljs.core.Symbol("om.next","schedule-render!","om.next/schedule-render!",(188229046),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"schedule-render!","schedule-render!",(-559385419),null),"om/next.cljc",(26),(4),(1502),(1502),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null)], null)),null,(cljs.core.truth_(om.next.schedule_render_BANG_)?om.next.schedule_render_BANG_.cljs$lang$test:null)])));})()
;
(function (){
om.next.schedule_sends_BANG_ = (function om$next$schedule_sends_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_sends_BANG_.call(null,reconciler))){
return setTimeout((function (){
return om.next.protocols.send_BANG_.call(null,reconciler);
}),(0));
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return om.next.schedule_sends_BANG_;},new cljs.core.Symbol("om.next","schedule-sends!","om.next/schedule-sends!",(114914578),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"schedule-sends!","schedule-sends!",(-362167787),null),"om/next.cljc",(22),(1),(1506),(1506),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null)], null)),null,(cljs.core.truth_(om.next.schedule_sends_BANG_)?om.next.schedule_sends_BANG_.cljs$lang$test:null)])));})()
;
(function (){
om.next.remove_root_BANG_; return (
new cljs.core.Var(function(){return om.next.remove_root_BANG_;},new cljs.core.Symbol("om.next","remove-root!","om.next/remove-root!",(-100698336),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"remove-root!","remove-root!",(-1924159939),null),"om/next.cljc",(22),(1),(1511),true,(1511),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next.remove_root_BANG_)?om.next.remove_root_BANG_.cljs$lang$test:null)])));})()
;
/**
 * Given a root component class and a target root DOM node, instantiate and
 * render the root class using the reconciler's :state property. The reconciler
 * will continue to observe changes to :state and keep the target node in sync.
 * Note a reconciler may have only one root. If invoked on a reconciler with an
 * existing root, the new root will replace the old one.
 */
(function (){
om.next.add_root_BANG_ = (function om$next$add_root_BANG_(var_args){
var args1875 = [];
var len__23656__auto___1878 = arguments.length;
var i__23657__auto___1879 = (0);
while(true){
if((i__23657__auto___1879 < len__23656__auto___1878)){
args1875.push((arguments[i__23657__auto___1879]));

var G__1880 = (i__23657__auto___1879 + (1));
i__23657__auto___1879 = G__1880;
continue;
} else {
}
break;
}

var G__1877 = args1875.length;
switch (G__1877) {
case (3):
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1875.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next.add_root_BANG_;},new cljs.core.Symbol("om.next","add-root!","om.next/add-root!",(1661249809),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"add-root!","add-root!",(-789260266),null),"om/next.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"root-class","root-class",(1372859229),null),new cljs.core.Symbol(null,"target","target",(1893533248),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"root-class","root-class",(1372859229),null),new cljs.core.Symbol(null,"target","target",(1893533248),null),new cljs.core.Symbol(null,"options","options",(1740170016),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"root-class","root-class",(1372859229),null),new cljs.core.Symbol(null,"target","target",(1893533248),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"root-class","root-class",(1372859229),null),new cljs.core.Symbol(null,"target","target",(1893533248),null),new cljs.core.Symbol(null,"options","options",(1740170016),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1513),(1513),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"root-class","root-class",(1372859229),null),new cljs.core.Symbol(null,"target","target",(1893533248),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"root-class","root-class",(1372859229),null),new cljs.core.Symbol(null,"target","target",(1893533248),null),new cljs.core.Symbol(null,"options","options",(1740170016),null)], null)),"Given a root component class and a target root DOM node, instantiate and\n   render the root class using the reconciler's :state property. The reconciler\n   will continue to observe changes to :state and keep the target node in sync.\n   Note a reconciler may have only one root. If invoked on a reconciler with an\n   existing root, the new root will replace the old one.",(cljs.core.truth_(om.next.add_root_BANG_)?om.next.add_root_BANG_.cljs$lang$test:null)])));})()
;

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,root_class,target){
return om.next.add_root_BANG_.call(null,reconciler,root_class,target,null);
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,root_class,target,options){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

if(cljs.core.fn_QMARK_.call(null,root_class)){
} else {
throw (new Error("Assert failed: (fn? root-class)"));
}

var temp__19834__auto___1882 = cljs.core.get.call(null,cljs.core.deref.call(null,om.next.roots),target);
if(cljs.core.truth_(temp__19834__auto___1882)){
var old_reconciler_1883 = temp__19834__auto___1882;
om.next.remove_root_BANG_.call(null,old_reconciler_1883,target);
} else {
}

cljs.core.swap_BANG_.call(null,om.next.roots,cljs.core.assoc,target,reconciler);

return om.next.protocols.add_root_BANG_.call(null,reconciler,root_class,target,options);
});

om.next.add_root_BANG_.cljs$lang$maxFixedArity = (4);

new cljs.core.Var(function(){return om.next.add_root_BANG_;},new cljs.core.Symbol("om.next","add-root!","om.next/add-root!",(1661249809),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"add-root!","add-root!",(-789260266),null),"om/next.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"root-class","root-class",(1372859229),null),new cljs.core.Symbol(null,"target","target",(1893533248),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"root-class","root-class",(1372859229),null),new cljs.core.Symbol(null,"target","target",(1893533248),null),new cljs.core.Symbol(null,"options","options",(1740170016),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"root-class","root-class",(1372859229),null),new cljs.core.Symbol(null,"target","target",(1893533248),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"root-class","root-class",(1372859229),null),new cljs.core.Symbol(null,"target","target",(1893533248),null),new cljs.core.Symbol(null,"options","options",(1740170016),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1513),(1513),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"root-class","root-class",(1372859229),null),new cljs.core.Symbol(null,"target","target",(1893533248),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"root-class","root-class",(1372859229),null),new cljs.core.Symbol(null,"target","target",(1893533248),null),new cljs.core.Symbol(null,"options","options",(1740170016),null)], null)),"Given a root component class and a target root DOM node, instantiate and\n   render the root class using the reconciler's :state property. The reconciler\n   will continue to observe changes to :state and keep the target node in sync.\n   Note a reconciler may have only one root. If invoked on a reconciler with an\n   existing root, the new root will replace the old one.",(cljs.core.truth_(om.next.add_root_BANG_)?om.next.add_root_BANG_.cljs$lang$test:null)]));
/**
 * Remove a root target (a DOM element) from a reconciler. The reconciler will
 * no longer attempt to reconcile application state with the specified root.
 */
(function (){
om.next.remove_root_BANG_ = (function om$next$remove_root_BANG_(reconciler,target){
return om.next.protocols.remove_root_BANG_.call(null,reconciler,target);
}); return (
new cljs.core.Var(function(){return om.next.remove_root_BANG_;},new cljs.core.Symbol("om.next","remove-root!","om.next/remove-root!",(-100698336),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"remove-root!","remove-root!",(-1924159939),null),"om/next.cljc",(19),(1),(1528),(1528),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"target","target",(1893533248),null)], null)),"Remove a root target (a DOM element) from a reconciler. The reconciler will\n   no longer attempt to reconcile application state with the specified root.",(cljs.core.truth_(om.next.remove_root_BANG_)?om.next.remove_root_BANG_.cljs$lang$test:null)])));})()
;

/**
 * @interface
 */
(function (){
om.next.ITxIntercept = function(){}; return (
new cljs.core.Var(function(){return om.next.ITxIntercept;},new cljs.core.Symbol("om.next","ITxIntercept","om.next/ITxIntercept",(-2051927898),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"ITxIntercept","ITxIntercept",(1992475043),null),"om/next.cljc",(26),(1),(1537),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"tx-intercept","tx-intercept",(1300167208),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"An optional protocol that component may implement to intercept child\n     transactions."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null)], null)], true, false)], null),(1537),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(om.next.ITxIntercept)?om.next.ITxIntercept.cljs$lang$test:null)])));})()
;

/**
 * An optional protocol that component may implement to intercept child
 *   transactions.
 */
(function (){
om.next.tx_intercept = (function om$next$tx_intercept(c,tx){
if((!((c == null))) && (!((c.om$next$ITxIntercept$tx_intercept$arity$2 == null)))){
return c.om$next$ITxIntercept$tx_intercept$arity$2(c,tx);
} else {
var x__23054__auto__ = (((c == null))?null:c);
var m__23055__auto__ = (om.next.tx_intercept[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,c,tx);
} else {
var m__23055__auto____$1 = (om.next.tx_intercept["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,c,tx);
} else {
throw cljs.core.missing_protocol.call(null,"ITxIntercept.tx-intercept",c);
}
}
}
}); return (
new cljs.core.Var(function(){return om.next.tx_intercept;},new cljs.core.Symbol("om.next","tx-intercept","om.next/tx-intercept",(416107819),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("om.next","ITxIntercept","om.next/ITxIntercept",(-2051927898),null),new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"tx-intercept","tx-intercept",(1300167208),null),"om/next.cljc",(16),(1),(1537),(1538),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null)),"An optional protocol that component may implement to intercept child\n     transactions.",(cljs.core.truth_(om.next.tx_intercept)?om.next.tx_intercept.cljs$lang$test:null)])));})()
;

(function (){
om.next.to_env = (function om$next$to_env(x){
var config = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?new cljs.core.Keyword(null,"config","config",(994861415)).cljs$core$IFn$_invoke$arity$1(x):x);
return cljs.core.select_keys.call(null,config,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",(-1988618099)),new cljs.core.Keyword(null,"shared","shared",(-384145993)),new cljs.core.Keyword(null,"parser","parser",(-1543495310)),new cljs.core.Keyword(null,"logger","logger",(-220675947)),new cljs.core.Keyword(null,"pathopt","pathopt",(-61073149))], null));
}); return (
new cljs.core.Var(function(){return om.next.to_env;},new cljs.core.Symbol("om.next","to-env","om.next/to-env",(1155266097),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"to-env","to-env",(726350092),null),"om/next.cljc",(14),(1),(1542),(1542),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(om.next.to_env)?om.next.to_env.cljs$lang$test:null)])));})()
;
(function (){
om.next.transact_STAR_ = (function om$next$transact_STAR_(r,c,ref,tx){
var cfg = new cljs.core.Keyword(null,"config","config",(994861415)).cljs$core$IFn$_invoke$arity$1(r);
var ref__$1 = (cljs.core.truth_((function (){var and__20770__auto__ = c;
if(cljs.core.truth_(and__20770__auto__)){
var and__20770__auto____$1 = ((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false);
if(and__20770__auto____$1){
return cljs.core.not.call(null,ref);
} else {
return and__20770__auto____$1;
}
} else {
return and__20770__auto__;
}
})())?om.next.ident.call(null,c,om.next.props.call(null,c)):ref);
var env = cljs.core.merge.call(null,om.next.to_env.call(null,cfg),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reconciler","reconciler",(-1832826966)),r,new cljs.core.Keyword(null,"component","component",(1555936782)),c], null),(cljs.core.truth_(ref__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",(1289896967)),ref__$1], null):null));
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
var snds = om.next.gather_sends.call(null,env,tx,new cljs.core.Keyword(null,"remotes","remotes",(1132366312)).cljs$core$IFn$_invoke$arity$1(cfg));
var q = (function (){var G__1889 = cljs.core.PersistentVector.EMPTY;
var G__1889__$1 = ((!((c == null)))?cljs.core.conj.call(null,G__1889,c):G__1889);
var G__1889__$2 = ((!((ref__$1 == null)))?cljs.core.conj.call(null,G__1889__$1,ref__$1):G__1889__$1);
return G__1889__$2;
})();
om.next.protocols.queue_BANG_.call(null,r,cljs.core.into.call(null,q,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,v)));

if(cljs.core.empty_QMARK_.call(null,snds)){
} else {
om.next.protocols.queue_sends_BANG_.call(null,r,snds);

om.next.schedule_sends_BANG_.call(null,r);
}

return v;
}); return (
new cljs.core.Var(function(){return om.next.transact_STAR_;},new cljs.core.Symbol("om.next","transact*","om.next/transact*",(1925362429),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"transact*","transact*",(-2125282824),null),"om/next.cljc",(16),(1),(1546),(1546),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"c","c",(-122660552),null),new cljs.core.Symbol(null,"ref","ref",(-1364538802),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null)),null,(cljs.core.truth_(om.next.transact_STAR_)?om.next.transact_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Given a query expression annotate all mutations by adding a :mutator -> ident
 * entry to the metadata of each mutation expression in the query.
 */
(function (){
om.next.annotate_mutations = (function om$next$annotate_mutations(tx,ident){
var annotate = (function om$next$annotate_mutations_$_annotate(expr,ident__$1){
var G__1897 = expr;
var G__1897__$1 = ((om.util.mutation_QMARK_.call(null,expr))?cljs.core.vary_meta.call(null,G__1897,cljs.core.assoc,new cljs.core.Keyword(null,"mutator","mutator",(-1326825366)),ident__$1):G__1897);
return G__1897__$1;
});
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__169_SHARP_){
return annotate.call(null,p1__169_SHARP_,ident);
})),tx);
}); return (
new cljs.core.Var(function(){return om.next.annotate_mutations;},new cljs.core.Symbol("om.next","annotate-mutations","om.next/annotate-mutations",(1826315620),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"annotate-mutations","annotate-mutations",(-1689578911),null),"om/next.cljc",(25),(1),(1576),(1576),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tx","tx",(2107161945),null),new cljs.core.Symbol(null,"ident","ident",(1639789181),null)], null)),"Given a query expression annotate all mutations by adding a :mutator -> ident\n   entry to the metadata of each mutation expression in the query.",(cljs.core.truth_(om.next.annotate_mutations)?om.next.annotate_mutations.cljs$lang$test:null)])));})()
;
(function (){
om.next.some_iquery_QMARK_ = (function om$next$some_iquery_QMARK_(c){
var c__$1 = c;
while(true){
if((c__$1 == null)){
return false;
} else {
if(om.next.iquery_QMARK_.call(null,c__$1)){
return true;
} else {
var G__1898 = om.next.parent.call(null,c__$1);
c__$1 = G__1898;
continue;

}
}
break;
}
}); return (
new cljs.core.Var(function(){return om.next.some_iquery_QMARK_;},new cljs.core.Symbol("om.next","some-iquery?","om.next/some-iquery?",(1495081135),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"some-iquery?","some-iquery?",(-1402113108),null),"om/next.cljc",(19),(1),(1585),(1585),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(om.next.some_iquery_QMARK_)?om.next.some_iquery_QMARK_.cljs$lang$test:null)])));})()
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
om.next.transact_BANG_ = (function om$next$transact_BANG_(var_args){
var args1899 = [];
var len__23656__auto___1909 = arguments.length;
var i__23657__auto___1910 = (0);
while(true){
if((i__23657__auto___1910 < len__23656__auto___1909)){
args1899.push((arguments[i__23657__auto___1910]));

var G__1911 = (i__23657__auto___1910 + (1));
i__23657__auto___1910 = G__1911;
continue;
} else {
}
break;
}

var G__1901 = args1899.length;
switch (G__1901) {
case (2):
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1899.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next.transact_BANG_;},new cljs.core.Symbol("om.next","transact!","om.next/transact!",(1192159894),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"transact!","transact!",(817805717),null),"om/next.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"ref","ref",(-1364538802),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"ref","ref",(-1364538802),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1592),(1592),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"ref","ref",(-1364538802),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null)),"Given a reconciler or component run a transaction. tx is a parse expression\n   that should include mutations followed by any necessary read. The reads will\n   be used to trigger component re-rendering.\n\n   Example:\n\n     (om/transact! widget\n       '[(do/this!) (do/that!)\n         :read/this :read/that])",(cljs.core.truth_(om.next.transact_BANG_)?om.next.transact_BANG_.cljs$lang$test:null)])));})()
;

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,tx){
if(cljs.core.truth_((function (){var or__20817__auto__ = om.next.component_QMARK_.call(null,x);
if(or__20817__auto__){
return or__20817__auto__;
} else {
return om.next.reconciler_QMARK_.call(null,x);
}
})())){
} else {
throw (new Error("Assert failed: (or (component? x) (reconciler? x))"));
}

if(cljs.core.vector_QMARK_.call(null,tx)){
} else {
throw (new Error("Assert failed: (vector? tx)"));
}

var tx__$1 = (function (){var G__1902 = tx;
var G__1902__$1 = (((function (){var and__20770__auto__ = om.next.component_QMARK_.call(null,x);
if(and__20770__auto__){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$next$Ident$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.next.Ident,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.next.Ident,x);
}
} else {
return and__20770__auto__;
}
})())?om.next.annotate_mutations.call(null,G__1902,om.next.get_ident.call(null,x)):G__1902);
return G__1902__$1;
})();
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))){
return om.next.transact_STAR_.call(null,x,null,null,tx__$1);
} else {
if(!(om.next.iquery_QMARK_.call(null,x))){
var l__64__auto___1913 = om.next._STAR_logger_STAR_;
if(cljs.core.truth_(om.next.some_iquery_QMARK_.call(null,x))){
} else {
goog.log.error(l__64__auto___1913,[cljs.core.str("Invariant Violation"),cljs.core.str((((null == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str(null),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("transact! should be called on a component"),cljs.core.str("that implements IQuery or has a parent that"),cljs.core.str("implements IQuery")].join(''))].join(''));
}

return om.next.transact_STAR_.call(null,om.next.get_reconciler.call(null,x),null,null,tx__$1);
} else {
var p = om.next.parent.call(null,x);
var x__$1 = x;
var tx__$2 = tx__$1;
while(true){
if((p == null)){
var r = om.next.get_reconciler.call(null,x__$1);
return om.next.transact_STAR_.call(null,r,x__$1,null,om.next.transform_reads.call(null,r,tx__$2));
} else {
var vec__1905 = ((((!((p == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === p.om$next$ITxIntercept$)))?true:false):false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,om.next.tx_intercept.call(null,p,tx__$2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,tx__$2], null));
var x_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__1905,(0),null);
var tx__$3 = cljs.core.nth.call(null,vec__1905,(1),null);
var G__1914 = om.next.parent.call(null,p);
var G__1915 = x_SINGLEQUOTE_;
var G__1916 = tx__$3;
p = G__1914;
x__$1 = G__1915;
tx__$2 = G__1916;
continue;
}
break;
}

}
}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (r,ref,tx){
return om.next.transact_STAR_.call(null,r,null,ref,tx);
});

om.next.transact_BANG_.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return om.next.transact_BANG_;},new cljs.core.Symbol("om.next","transact!","om.next/transact!",(1192159894),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"transact!","transact!",(817805717),null),"om/next.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"ref","ref",(-1364538802),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"ref","ref",(-1364538802),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1592),(1592),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.Symbol(null,"ref","ref",(-1364538802),null),new cljs.core.Symbol(null,"tx","tx",(2107161945),null)], null)),"Given a reconciler or component run a transaction. tx is a parse expression\n   that should include mutations followed by any necessary read. The reads will\n   be used to trigger component re-rendering.\n\n   Example:\n\n     (om/transact! widget\n       '[(do/this!) (do/that!)\n         :read/this :read/that])",(cljs.core.truth_(om.next.transact_BANG_)?om.next.transact_BANG_.cljs$lang$test:null)]));
/**
 * Create a parser. The argument is a map of two keys, :read and :mutate. Both
 * functions should have the signature (Env -> Key -> Params -> ParseResult).
 */
(function (){
om.next.parser = (function om$next$parser(p__1917){
var map__1920 = p__1917;
var map__1920__$1 = ((((!((map__1920 == null)))?((((map__1920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1920):map__1920);
var opts = map__1920__$1;
var mutate = cljs.core.get.call(null,map__1920__$1,new cljs.core.Keyword(null,"mutate","mutate",(1422419038)));
var read = cljs.core.get.call(null,map__1920__$1,new cljs.core.Keyword(null,"read","read",(1140058661)));
if(cljs.core.map_QMARK_.call(null,opts)){
} else {
throw (new Error("Assert failed: (map? opts)"));
}

return om.next.impl.parser.parser.call(null,opts);
}); return (
new cljs.core.Var(function(){return om.next.parser;},new cljs.core.Symbol("om.next","parser","om.next/parser",(1362651324),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"parser","parser",(97036217),null),"om/next.cljc",(13),(1),(1633),(1633),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",(-1514377108),null),new cljs.core.Symbol(null,"mutate","mutate",(-1232016731),null)], null)], null)], null)),"Create a parser. The argument is a map of two keys, :read and :mutate. Both\n   functions should have the signature (Env -> Key -> Params -> ParseResult).",(cljs.core.truth_(om.next.parser)?om.next.parser.cljs$lang$test:null)])));})()
;
/**
 * Helper function for implementing :read and :mutate as multimethods. Use this
 * as the dispatch-fn.
 */
(function (){
om.next.dispatch = (function om$next$dispatch(_,key,___$1){
return key;
}); return (
new cljs.core.Var(function(){return om.next.dispatch;},new cljs.core.Symbol("om.next","dispatch","om.next/dispatch",(83088253),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"dispatch","dispatch",(-1335098760),null),"om/next.cljc",(15),(1),(1640),(1640),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",(-1201019570),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.Symbol(null,"_","_",(-1201019570),null)], null)),"Helper function for implementing :read and :mutate as multimethods. Use this\n   as the dispatch-fn.",(cljs.core.truth_(om.next.dispatch)?om.next.dispatch.cljs$lang$test:null)])));})()
;
/**
 * Given a query expression convert it into an AST.
 */
(function (){
om.next.query__GT_ast = (function om$next$query__GT_ast(query_expr){
return om.next.impl.parser.query__GT_ast.call(null,query_expr);
}); return (
new cljs.core.Var(function(){return om.next.query__GT_ast;},new cljs.core.Symbol("om.next","query->ast","om.next/query->ast",(-1348796718),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"query->ast","query->ast",(1930047957),null),"om/next.cljc",(17),(1),(1645),(1645),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-expr","query-expr",(-350123470),null)], null)),"Given a query expression convert it into an AST.",(cljs.core.truth_(om.next.query__GT_ast)?om.next.query__GT_ast.cljs$lang$test:null)])));})()
;
(function (){
om.next.ast__GT_query = (function om$next$ast__GT_query(query_ast){

return om.next.impl.parser.ast__GT_expr.call(null,query_ast,true);
}); return (
new cljs.core.Var(function(){return om.next.ast__GT_query;},new cljs.core.Symbol("om.next","ast->query","om.next/ast->query",(244838991),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"ast->query","ast->query",(-1167645878),null),"om/next.cljc",(17),(1),(1650),(1650),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-ast","query-ast",(2074073495),null)], null)),null,(cljs.core.truth_(om.next.ast__GT_query)?om.next.ast__GT_query.cljs$lang$test:null)])));})()
;
(function (){
om.next.get_dispatch_key = (function om$next$get_dispatch_key(prop){
var G__1923 = prop;
var G__1923__$1 = (((!(om.util.ident_QMARK_.call(null,prop))) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,prop),new cljs.core.Symbol(null,"_","_",(-1201019570),null))))?cljs.core.comp.call(null,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",(733619510)),om.next.impl.parser.expr__GT_ast).call(null,G__1923):G__1923);
return G__1923__$1;
}); return (
new cljs.core.Var(function(){return om.next.get_dispatch_key;},new cljs.core.Symbol("om.next","get-dispatch-key","om.next/get-dispatch-key",(1841250416),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"get-dispatch-key","get-dispatch-key",(-556853379),null),"om/next.cljc",(24),(1),(1654),(1654),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prop","prop",(1125363195),null)], null)),null,(cljs.core.truth_(om.next.get_dispatch_key)?om.next.get_dispatch_key.cljs$lang$test:null)])));})()
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
om.next.cascade_query = (function om$next$cascade_query(class_path__GT_query,classpath,data_path,new_query,union_keys){
var cp = classpath;
var data_path__$1 = data_path;
var new_query__$1 = new_query;
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!(cljs.core.empty_QMARK_.call(null,cp))){
var rendered_data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys)),data_path__$1);
var filter_data_path = (function (){var G__1925 = rendered_data_path;
var G__1925__$1 = ((!(cljs.core.empty_QMARK_.call(null,rendered_data_path)))?cljs.core.pop.call(null,G__1925):G__1925);
return G__1925__$1;
})();
var qs = cljs.core.filter.call(null,((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path){
return (function (p1__170_SHARP_){
return cljs.core._EQ_.call(null,filter_data_path,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__170_SHARP_),filter_data_path));
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
return cljs.core.assoc.call(null,clojure.zip.node.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q),rendered_data_path)),union_key,new_query__$1);
})():new_query__$1);
return om.next.query_template.call(null,om.next.focus_query.call(null,om.next.replace.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q),rendered_data_path),new_query__$2),filter_data_path),filter_data_path);
});})(cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path,qs))
),qs);
var G__1926 = cljs.core.pop.call(null,cp);
var G__1927 = cljs.core.pop.call(null,data_path__$1);
var G__1928 = clojure.zip.node.call(null,cljs.core.first.call(null,qs_SINGLEQUOTE_));
var G__1929 = cljs.core.assoc.call(null,ret,cp,qs_SINGLEQUOTE_);
cp = G__1926;
data_path__$1 = G__1927;
new_query__$1 = G__1928;
ret = G__1929;
continue;
} else {
return ret;
}
break;
}
}); return (
new cljs.core.Var(function(){return om.next.cascade_query;},new cljs.core.Symbol("om.next","cascade-query","om.next/cascade-query",(1011083346),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"cascade-query","cascade-query",(1775482719),null),"om/next.cljc",(21),(1),(1663),(1663),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class-path->query","class-path->query",(417937827),null),new cljs.core.Symbol(null,"classpath","classpath",(1940053512),null),new cljs.core.Symbol(null,"data-path","data-path",(-1979633588),null),new cljs.core.Symbol(null,"new-query","new-query",(-438810452),null),new cljs.core.Symbol(null,"union-keys","union-keys",(785717794),null)], null)),"Cascades a query up the classpath. class-path->query is a map of classpaths\n   to their queries. classpath is the classpath where we start cascading (typically\n   the direct parent's classpath of the component changing query). data-path is\n   the data path in the classpath's query to the new query. new-query is the\n   query to be applied to the classpaths. union-keys are any keys into union\n   queries found during index building; they are used to access union queries\n   when cascading the classpath, and to generate the classpaths' rendered-paths,\n   which skip these keys.",(cljs.core.truth_(om.next.cascade_query)?om.next.cascade_query.cljs$lang$test:null)])));})()
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
om.next.Indexer = (function (indexes,extfs,__meta,__extmap,__hash){
this.indexes = indexes;
this.extfs = extfs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065266934;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next.Indexer.prototype.om$next$protocols$IIndexer$ = cljs.core.PROTOCOL_SENTINEL;

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_root$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var prop__GT_classes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var class_path__GT_query = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var rootq = om.next.get_query.call(null,x);
var root_class = (function (){var G__1933 = x;
var G__1933__$1 = ((om.next.component_QMARK_.call(null,x))?om.next.react_type.call(null,G__1933):G__1933);
return G__1933__$1;
})();
var build_index_STAR_ = ((function (prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function om$next$build_index_STAR_(class$,query,path,classpath,union_expr,union_keys){
var l__64__auto___2050 = om.next._STAR_logger_STAR_;
if((!(om.next.iquery_QMARK_.call(null,class$))) || ((om.next.iquery_QMARK_.call(null,class$)) && (!(cljs.core.empty_QMARK_.call(null,query))))){
} else {
goog.log.error(l__64__auto___2050,[cljs.core.str("Invariant Violation"),cljs.core.str(((("build-index*" == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str("build-index*"),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("`IQuery` implementation must return a non-empty query."),cljs.core.str(" Check the `IQuery` implementation of component `"),cljs.core.str(((om.next.component_QMARK_.call(null,class$))?class$.constructor.displayName:class$.prototype.constructor.displayName)),cljs.core.str("`.")].join(''))].join(''));
}

var recursive_QMARK_ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([class$], true),classpath);
var classpath__$1 = (function (){var G__2015 = classpath;
var G__2015__$1 = (((!((class$ == null))) && (cljs.core.not.call(null,recursive_QMARK_)))?cljs.core.conj.call(null,G__2015,class$):G__2015);
return G__2015__$1;
})();
var dp__GT_cs = cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.indexes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",(-1244619750))], null));
if(cljs.core.truth_(class$)){
var root_query_2051 = ((cljs.core.empty_QMARK_.call(null,path))?rootq:clojure.zip.root.call(null,cljs.core.first.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,class_path__GT_query),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_class], null)))));
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classpath__$1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),om.next.query_template.call(null,om.next.focus_query.call(null,root_query_2051,path),path));
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
var map__2016 = cljs.core.group_by.call(null,om.util.join_QMARK_,query);
var map__2016__$1 = ((((!((map__2016 == null)))?((((map__2016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2016.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2016):map__2016);
var props = cljs.core.get.call(null,map__2016__$1,false);
var joins = cljs.core.get.call(null,map__2016__$1,true);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (map__2016,map__2016__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__171_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__171_SHARP_,cljs.core.zipmap.call(null,cljs.core.map.call(null,om.next.get_dispatch_key,props),cljs.core.repeat.call(null,cljs.core.PersistentHashSet.fromArray([class$], true))));
});})(map__2016,map__2016__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

var seq__2018 = cljs.core.seq.call(null,joins);
var chunk__2019 = null;
var count__2020 = (0);
var i__2021 = (0);
while(true){
if((i__2021 < count__2020)){
var join = cljs.core._nth.call(null,chunk__2019,i__2021);
var vec__2022_2052 = om.util.join_entry.call(null,join);
var prop_2053 = cljs.core.nth.call(null,vec__2022_2052,(0),null);
var query_SINGLEQUOTE__2054 = cljs.core.nth.call(null,vec__2022_2052,(1),null);
var prop_dispatch_key_2055 = om.next.get_dispatch_key.call(null,prop_2053);
var recursion_QMARK__2056 = om.util.recursion_QMARK_.call(null,query_SINGLEQUOTE__2054);
var union_recursion_QMARK__2057 = (function (){var and__20770__auto__ = recursion_QMARK__2056;
if(and__20770__auto__){
return union_expr;
} else {
return and__20770__auto__;
}
})();
var query_SINGLEQUOTE__2058__$1 = ((recursion_QMARK__2056)?((!((union_expr == null)))?union_expr:query):query_SINGLEQUOTE__2054);
var path_SINGLEQUOTE__2059 = cljs.core.conj.call(null,path,prop_2053);
var rendered_path_SINGLEQUOTE__2060 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys),path_SINGLEQUOTE__2059));
var cs_2061 = cljs.core.get.call(null,dp__GT_cs,rendered_path_SINGLEQUOTE__2060);
var cascade_query_QMARK__2062 = (cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_2061),(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"component","component",(1555936782)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__2058__$1)),om.next.react_type.call(null,cljs.core.first.call(null,cs_2061)))) && (!(cljs.core.map_QMARK_.call(null,query_SINGLEQUOTE__2058__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__2063 = ((cascade_query_QMARK__2062)?om.next.get_query.call(null,cljs.core.first.call(null,cs_2061)):query_SINGLEQUOTE__2058__$1);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__2018,chunk__2019,count__2020,i__2021,vec__2022_2052,prop_2053,query_SINGLEQUOTE__2054,prop_dispatch_key_2055,recursion_QMARK__2056,union_recursion_QMARK__2057,query_SINGLEQUOTE__2058__$1,path_SINGLEQUOTE__2059,rendered_path_SINGLEQUOTE__2060,cs_2061,cascade_query_QMARK__2062,query_SINGLEQUOTE__SINGLEQUOTE__2063,join,map__2016,map__2016__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__172_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__172_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_dispatch_key_2055,cljs.core.PersistentHashSet.fromArray([class$], true)], true, false));
});})(seq__2018,chunk__2019,count__2020,i__2021,vec__2022_2052,prop_2053,query_SINGLEQUOTE__2054,prop_dispatch_key_2055,recursion_QMARK__2056,union_recursion_QMARK__2057,query_SINGLEQUOTE__2058__$1,path_SINGLEQUOTE__2059,rendered_path_SINGLEQUOTE__2060,cs_2061,cascade_query_QMARK__2062,query_SINGLEQUOTE__SINGLEQUOTE__2063,join,map__2016,map__2016__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

if((cascade_query_QMARK__2062) && (cljs.core.not_EQ_.call(null,query_SINGLEQUOTE__2058__$1,query_SINGLEQUOTE__SINGLEQUOTE__2063))){
var cp__GT_q_SINGLEQUOTE__2064 = om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1,path_SINGLEQUOTE__2059,query_SINGLEQUOTE__SINGLEQUOTE__2063,union_keys);
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__2064);
} else {
}

var class_SINGLEQUOTE__2065 = new cljs.core.Keyword(null,"component","component",(1555936782)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__SINGLEQUOTE__2063));
if((recursion_QMARK__2056) && ((class_SINGLEQUOTE__2065 == null))){
} else {
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__2065,query_SINGLEQUOTE__SINGLEQUOTE__2063,path_SINGLEQUOTE__2059,classpath__$1,((recursion_QMARK__2056)?union_expr:null),union_keys);
}

var G__2066 = seq__2018;
var G__2067 = chunk__2019;
var G__2068 = count__2020;
var G__2069 = (i__2021 + (1));
seq__2018 = G__2066;
chunk__2019 = G__2067;
count__2020 = G__2068;
i__2021 = G__2069;
continue;
} else {
var temp__19834__auto__ = cljs.core.seq.call(null,seq__2018);
if(temp__19834__auto__){
var seq__2018__$1 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2018__$1)){
var c__23363__auto__ = cljs.core.chunk_first.call(null,seq__2018__$1);
var G__2070 = cljs.core.chunk_rest.call(null,seq__2018__$1);
var G__2071 = c__23363__auto__;
var G__2072 = cljs.core.count.call(null,c__23363__auto__);
var G__2073 = (0);
seq__2018 = G__2070;
chunk__2019 = G__2071;
count__2020 = G__2072;
i__2021 = G__2073;
continue;
} else {
var join = cljs.core.first.call(null,seq__2018__$1);
var vec__2025_2074 = om.util.join_entry.call(null,join);
var prop_2075 = cljs.core.nth.call(null,vec__2025_2074,(0),null);
var query_SINGLEQUOTE__2076 = cljs.core.nth.call(null,vec__2025_2074,(1),null);
var prop_dispatch_key_2077 = om.next.get_dispatch_key.call(null,prop_2075);
var recursion_QMARK__2078 = om.util.recursion_QMARK_.call(null,query_SINGLEQUOTE__2076);
var union_recursion_QMARK__2079 = (function (){var and__20770__auto__ = recursion_QMARK__2078;
if(and__20770__auto__){
return union_expr;
} else {
return and__20770__auto__;
}
})();
var query_SINGLEQUOTE__2080__$1 = ((recursion_QMARK__2078)?((!((union_expr == null)))?union_expr:query):query_SINGLEQUOTE__2076);
var path_SINGLEQUOTE__2081 = cljs.core.conj.call(null,path,prop_2075);
var rendered_path_SINGLEQUOTE__2082 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys),path_SINGLEQUOTE__2081));
var cs_2083 = cljs.core.get.call(null,dp__GT_cs,rendered_path_SINGLEQUOTE__2082);
var cascade_query_QMARK__2084 = (cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_2083),(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"component","component",(1555936782)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__2080__$1)),om.next.react_type.call(null,cljs.core.first.call(null,cs_2083)))) && (!(cljs.core.map_QMARK_.call(null,query_SINGLEQUOTE__2080__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__2085 = ((cascade_query_QMARK__2084)?om.next.get_query.call(null,cljs.core.first.call(null,cs_2083)):query_SINGLEQUOTE__2080__$1);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__2018,chunk__2019,count__2020,i__2021,vec__2025_2074,prop_2075,query_SINGLEQUOTE__2076,prop_dispatch_key_2077,recursion_QMARK__2078,union_recursion_QMARK__2079,query_SINGLEQUOTE__2080__$1,path_SINGLEQUOTE__2081,rendered_path_SINGLEQUOTE__2082,cs_2083,cascade_query_QMARK__2084,query_SINGLEQUOTE__SINGLEQUOTE__2085,join,seq__2018__$1,temp__19834__auto__,map__2016,map__2016__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__172_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__172_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_dispatch_key_2077,cljs.core.PersistentHashSet.fromArray([class$], true)], true, false));
});})(seq__2018,chunk__2019,count__2020,i__2021,vec__2025_2074,prop_2075,query_SINGLEQUOTE__2076,prop_dispatch_key_2077,recursion_QMARK__2078,union_recursion_QMARK__2079,query_SINGLEQUOTE__2080__$1,path_SINGLEQUOTE__2081,rendered_path_SINGLEQUOTE__2082,cs_2083,cascade_query_QMARK__2084,query_SINGLEQUOTE__SINGLEQUOTE__2085,join,seq__2018__$1,temp__19834__auto__,map__2016,map__2016__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

if((cascade_query_QMARK__2084) && (cljs.core.not_EQ_.call(null,query_SINGLEQUOTE__2080__$1,query_SINGLEQUOTE__SINGLEQUOTE__2085))){
var cp__GT_q_SINGLEQUOTE__2086 = om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1,path_SINGLEQUOTE__2081,query_SINGLEQUOTE__SINGLEQUOTE__2085,union_keys);
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__2086);
} else {
}

var class_SINGLEQUOTE__2087 = new cljs.core.Keyword(null,"component","component",(1555936782)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__SINGLEQUOTE__2085));
if((recursion_QMARK__2078) && ((class_SINGLEQUOTE__2087 == null))){
} else {
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__2087,query_SINGLEQUOTE__SINGLEQUOTE__2085,path_SINGLEQUOTE__2081,classpath__$1,((recursion_QMARK__2078)?union_expr:null),union_keys);
}

var G__2088 = cljs.core.next.call(null,seq__2018__$1);
var G__2089 = null;
var G__2090 = (0);
var G__2091 = (0);
seq__2018 = G__2088;
chunk__2019 = G__2089;
count__2020 = G__2090;
i__2021 = G__2091;
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
var seq__2028 = cljs.core.seq.call(null,query);
var chunk__2029 = null;
var count__2030 = (0);
var i__2031 = (0);
while(true){
if((i__2031 < count__2030)){
var vec__2032 = cljs.core._nth.call(null,chunk__2029,i__2031);
var prop = cljs.core.nth.call(null,vec__2032,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__2032,(1),null);
var path_SINGLEQUOTE__2092 = cljs.core.conj.call(null,path,prop);
var class_SINGLEQUOTE__2093 = new cljs.core.Keyword(null,"component","component",(1555936782)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE_));
var cs_2094 = cljs.core.filter.call(null,((function (seq__2028,chunk__2029,count__2030,i__2031,path_SINGLEQUOTE__2092,class_SINGLEQUOTE__2093,vec__2032,prop,query_SINGLEQUOTE_,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__173_SHARP_){
return cljs.core._EQ_.call(null,class_SINGLEQUOTE__2093,om.next.react_type.call(null,p1__173_SHARP_));
});})(seq__2028,chunk__2029,count__2030,i__2031,path_SINGLEQUOTE__2092,class_SINGLEQUOTE__2093,vec__2032,prop,query_SINGLEQUOTE_,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,cljs.core.get.call(null,dp__GT_cs,path));
var cascade_query_QMARK__2095 = (function (){var and__20770__auto__ = class_SINGLEQUOTE__2093;
if(cljs.core.truth_(and__20770__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_2094),(1));
} else {
return and__20770__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__2096 = (cljs.core.truth_(cascade_query_QMARK__2095)?om.next.get_query.call(null,cljs.core.first.call(null,cs_2094)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__20770__auto__ = cascade_query_QMARK__2095;
if(cljs.core.truth_(and__20770__auto__)){
return cljs.core.not_EQ_.call(null,query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__2096);
} else {
return and__20770__auto__;
}
})())){
var qs_2097 = cljs.core.get.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1);
var q_2098 = cljs.core.first.call(null,qs_2097);
var qnode_2099 = clojure.zip.node.call(null,(function (){var G__2035 = q_2098;
var G__2035__$1 = (((class$ == null))?om.next.query_template.call(null,G__2035,path):G__2035);
return G__2035__$1;
})());
var new_query_2100 = cljs.core.assoc.call(null,qnode_2099,prop,query_SINGLEQUOTE__SINGLEQUOTE__2096);
var q_SINGLEQUOTE__2101 = (function (){var G__2036 = clojure.zip.replace.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q_2098),path),new_query_2100);
var G__2036__$1 = (((class$ == null))?om.next.query_template.call(null,om.next.focus_query.call(null,clojure.zip.root.call(null,G__2036),cljs.core.pop.call(null,path)),cljs.core.pop.call(null,path)):G__2036);
return G__2036__$1;
})();
var qs_SINGLEQUOTE__2102 = cljs.core.into.call(null,cljs.core.PersistentHashSet.fromArray([q_SINGLEQUOTE__2101], true),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([q_2098], true)),qs_2097);
var cp__GT_q_SINGLEQUOTE__2103 = cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([classpath__$1,qs_SINGLEQUOTE__2102], true, false),om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),cljs.core.pop.call(null,classpath__$1),path,clojure.zip.node.call(null,q_SINGLEQUOTE__2101),union_keys));
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__2103);
} else {
}

om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__2093,query_SINGLEQUOTE__SINGLEQUOTE__2096,path_SINGLEQUOTE__2092,classpath__$1,query,cljs.core.conj.call(null,union_keys,prop));

var G__2104 = seq__2028;
var G__2105 = chunk__2029;
var G__2106 = count__2030;
var G__2107 = (i__2031 + (1));
seq__2028 = G__2104;
chunk__2029 = G__2105;
count__2030 = G__2106;
i__2031 = G__2107;
continue;
} else {
var temp__19834__auto__ = cljs.core.seq.call(null,seq__2028);
if(temp__19834__auto__){
var seq__2028__$1 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2028__$1)){
var c__23363__auto__ = cljs.core.chunk_first.call(null,seq__2028__$1);
var G__2108 = cljs.core.chunk_rest.call(null,seq__2028__$1);
var G__2109 = c__23363__auto__;
var G__2110 = cljs.core.count.call(null,c__23363__auto__);
var G__2111 = (0);
seq__2028 = G__2108;
chunk__2029 = G__2109;
count__2030 = G__2110;
i__2031 = G__2111;
continue;
} else {
var vec__2037 = cljs.core.first.call(null,seq__2028__$1);
var prop = cljs.core.nth.call(null,vec__2037,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__2037,(1),null);
var path_SINGLEQUOTE__2112 = cljs.core.conj.call(null,path,prop);
var class_SINGLEQUOTE__2113 = new cljs.core.Keyword(null,"component","component",(1555936782)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE_));
var cs_2114 = cljs.core.filter.call(null,((function (seq__2028,chunk__2029,count__2030,i__2031,path_SINGLEQUOTE__2112,class_SINGLEQUOTE__2113,vec__2037,prop,query_SINGLEQUOTE_,seq__2028__$1,temp__19834__auto__,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__173_SHARP_){
return cljs.core._EQ_.call(null,class_SINGLEQUOTE__2113,om.next.react_type.call(null,p1__173_SHARP_));
});})(seq__2028,chunk__2029,count__2030,i__2031,path_SINGLEQUOTE__2112,class_SINGLEQUOTE__2113,vec__2037,prop,query_SINGLEQUOTE_,seq__2028__$1,temp__19834__auto__,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,cljs.core.get.call(null,dp__GT_cs,path));
var cascade_query_QMARK__2115 = (function (){var and__20770__auto__ = class_SINGLEQUOTE__2113;
if(cljs.core.truth_(and__20770__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_2114),(1));
} else {
return and__20770__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__2116 = (cljs.core.truth_(cascade_query_QMARK__2115)?om.next.get_query.call(null,cljs.core.first.call(null,cs_2114)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__20770__auto__ = cascade_query_QMARK__2115;
if(cljs.core.truth_(and__20770__auto__)){
return cljs.core.not_EQ_.call(null,query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__2116);
} else {
return and__20770__auto__;
}
})())){
var qs_2117 = cljs.core.get.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1);
var q_2118 = cljs.core.first.call(null,qs_2117);
var qnode_2119 = clojure.zip.node.call(null,(function (){var G__2040 = q_2118;
var G__2040__$1 = (((class$ == null))?om.next.query_template.call(null,G__2040,path):G__2040);
return G__2040__$1;
})());
var new_query_2120 = cljs.core.assoc.call(null,qnode_2119,prop,query_SINGLEQUOTE__SINGLEQUOTE__2116);
var q_SINGLEQUOTE__2121 = (function (){var G__2041 = clojure.zip.replace.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q_2118),path),new_query_2120);
var G__2041__$1 = (((class$ == null))?om.next.query_template.call(null,om.next.focus_query.call(null,clojure.zip.root.call(null,G__2041),cljs.core.pop.call(null,path)),cljs.core.pop.call(null,path)):G__2041);
return G__2041__$1;
})();
var qs_SINGLEQUOTE__2122 = cljs.core.into.call(null,cljs.core.PersistentHashSet.fromArray([q_SINGLEQUOTE__2121], true),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([q_2118], true)),qs_2117);
var cp__GT_q_SINGLEQUOTE__2123 = cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([classpath__$1,qs_SINGLEQUOTE__2122], true, false),om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),cljs.core.pop.call(null,classpath__$1),path,clojure.zip.node.call(null,q_SINGLEQUOTE__2121),union_keys));
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__2123);
} else {
}

om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__2113,query_SINGLEQUOTE__SINGLEQUOTE__2116,path_SINGLEQUOTE__2112,classpath__$1,query,cljs.core.conj.call(null,union_keys,prop));

var G__2124 = cljs.core.next.call(null,seq__2028__$1);
var G__2125 = null;
var G__2126 = (0);
var G__2127 = (0);
seq__2028 = G__2124;
chunk__2029 = G__2125;
count__2030 = G__2126;
i__2031 = G__2127;
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

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"index-component","index-component",(-1258618905)).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",(436435919)),om.next.react_type.call(null,c)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,c));
var indexes__$3 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"index-component","index-component",(-1258618905)).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$2,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",(-1244619750)),data_path], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var ident = ((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false))?(function (){var ident = om.next.ident.call(null,c,om.next.props.call(null,c));
var l__64__auto___2128 = om.next._STAR_logger_STAR_;
if(om.util.ident_QMARK_.call(null,ident)){
} else {
goog.log.error(l__64__auto___2128,[cljs.core.str("Invariant Violation"),cljs.core.str((((null == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str(null),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("malformed Ident. An ident must be a vector of "),cljs.core.str("two elements (a keyword and an EDN value). Check "),cljs.core.str("the Ident implementation of component `"),cljs.core.str(c.constructor.displayName),cljs.core.str("`.")].join(''))].join(''));
}

var l__64__auto___2129 = om.next._STAR_logger_STAR_;
if(cljs.core.some_QMARK_.call(null,cljs.core.second.call(null,ident))){
} else {
goog.log.error(l__64__auto___2129,[cljs.core.str("Invariant Violation"),cljs.core.str((((null == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str(null),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("component "),cljs.core.str(c.constructor.displayName),cljs.core.str("'s ident ("),cljs.core.str(ident),cljs.core.str(") has a `nil` second element."),cljs.core.str(" This warning can be safely ignored if that is intended.")].join(''))].join(''));
}

return ident;
})():null);
if(!((ident == null))){
var G__2043 = indexes__$3;
var G__2043__$1 = (cljs.core.truth_(ident)?cljs.core.update_in.call(null,G__2043,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",(-303587249)),ident], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c):G__2043);
return G__2043__$1;
} else {
return indexes__$3;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$drop_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"drop-component","drop-component",(1805913749)).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",(436435919)),om.next.react_type.call(null,c)], null),cljs.core.disj,c);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,c));
var indexes__$3 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"drop-component","drop-component",(1805913749)).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$2,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",(-1244619750)),data_path], null),cljs.core.disj,c);
var ident = ((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false))?om.next.ident.call(null,c,om.next.props.call(null,c)):null);
if(!((ident == null))){
var G__2045 = indexes__$3;
var G__2045__$1 = (cljs.core.truth_(ident)?cljs.core.update_in.call(null,G__2045,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",(-303587249)),ident], null),cljs.core.disj,c):G__2045);
return G__2045__$1;
} else {
return indexes__$3;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$key__GT_components$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var indexes__$1 = cljs.core.deref.call(null,self__.indexes);
if(om.next.component_QMARK_.call(null,k)){
return cljs.core.PersistentHashSet.fromArray([k], true);
} else {
var temp__19520__auto__ = new cljs.core.Keyword(null,"ref->components","ref->components",(-303587249)).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,k);
if(cljs.core.truth_(temp__19520__auto__)){
var cs = temp__19520__auto__;
return cs;
} else {
return cljs.core.transduce.call(null,cljs.core.map.call(null,((function (temp__19520__auto__,indexes__$1,___$1){
return (function (p1__174_SHARP_){
return cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",(436435919)),p1__174_SHARP_], null));
});})(temp__19520__auto__,indexes__$1,___$1))
),cljs.core.completing.call(null,cljs.core.into),cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",(-303587249)),k], null),cljs.core.PersistentHashSet.EMPTY),cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop->classes","prop->classes",(515892717)),k], null)));
}
}
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22669__auto__,k__22670__auto__){
var self__ = this;
var this__22669__auto____$1 = this;
return cljs.core._lookup.call(null,this__22669__auto____$1,k__22670__auto__,null);
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22671__auto__,k1931,else__22672__auto__){
var self__ = this;
var this__22671__auto____$1 = this;
var G__2046 = (((k1931 instanceof cljs.core.Keyword))?k1931.fqn:null);
switch (G__2046) {
case "indexes":
return self__.indexes;

break;
case "extfs":
return self__.extfs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1931,else__22672__auto__);

}
});

om.next.Indexer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22689__auto__,writer__22690__auto__,opts__22691__auto__){
var self__ = this;
var this__22689__auto____$1 = this;
var pr_pair__22692__auto__ = ((function (this__22689__auto____$1){
return (function (keyval__22693__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22690__auto__,cljs.core.pr_writer,""," ","",opts__22691__auto__,keyval__22693__auto__);
});})(this__22689__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22690__auto__,pr_pair__22692__auto__,"#om.next.Indexer{",", ","}",opts__22691__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",(1496475545)),self__.indexes],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extfs","extfs",(607041493)),self__.extfs],null))], null),self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

om.next.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1930){
var self__ = this;
var G__1930__$1 = this;
return (new cljs.core.RecordIter((0),G__1930__$1,(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",(1496475545)),new cljs.core.Keyword(null,"extfs","extfs",(607041493))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

om.next.Indexer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22667__auto__){
var self__ = this;
var this__22667__auto____$1 = this;
return self__.__meta;
});

om.next.Indexer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22663__auto__){
var self__ = this;
var this__22663__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22673__auto__){
var self__ = this;
var this__22673__auto____$1 = this;
return ((2) + cljs.core.count.call(null,self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22664__auto__){
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

om.next.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22665__auto__,other__22666__auto__){
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

om.next.Indexer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22679__auto__,k__22680__auto__){
var self__ = this;
var this__22679__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indexes","indexes",(1496475545)),null,new cljs.core.Keyword(null,"extfs","extfs",(607041493)),null], null), null),k__22680__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22679__auto____$1),self__.__meta),k__22680__auto__);
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22680__auto__)),null));
}
});

om.next.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22677__auto__,k__22678__auto__,G__1930){
var self__ = this;
var this__22677__auto____$1 = this;
var pred__2047 = cljs.core.keyword_identical_QMARK_;
var expr__2048 = k__22678__auto__;
if(cljs.core.truth_(pred__2047.call(null,new cljs.core.Keyword(null,"indexes","indexes",(1496475545)),expr__2048))){
return (new om.next.Indexer(G__1930,self__.extfs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__2047.call(null,new cljs.core.Keyword(null,"extfs","extfs",(607041493)),expr__2048))){
return (new om.next.Indexer(self__.indexes,G__1930,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22678__auto__,G__1930),null));
}
}
});

om.next.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22683__auto__){
var self__ = this;
var this__22683__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",(1496475545)),self__.indexes],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extfs","extfs",(607041493)),self__.extfs],null))], null),self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22668__auto__,G__1930){
var self__ = this;
var this__22668__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,G__1930,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22674__auto__,entry__22675__auto__){
var self__ = this;
var this__22674__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22675__auto__)){
return cljs.core._assoc.call(null,this__22674__auto____$1,cljs.core._nth.call(null,entry__22675__auto__,(0)),cljs.core._nth.call(null,entry__22675__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22674__auto____$1,entry__22675__auto__);
}
});

om.next.Indexer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.indexes);
});

om.next.Indexer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"indexes","indexes",(-1157960224),null),new cljs.core.Symbol(null,"extfs","extfs",(-2047394276),null)], null);
});

om.next.Indexer.cljs$lang$type = true;

om.next.Indexer.cljs$lang$ctorPrSeq = (function (this__23044__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Indexer");
});

om.next.Indexer.cljs$lang$ctorPrWriter = (function (this__23044__auto__,writer__23045__auto__){
return cljs.core._write.call(null,writer__23045__auto__,"om.next/Indexer");
});

(function (){
om.next.__GT_Indexer = (function om$next$__GT_Indexer(indexes,extfs){
return (new om.next.Indexer(indexes,extfs,null,null,null));
}); return (
new cljs.core.Var(function(){return om.next.__GT_Indexer;},new cljs.core.Symbol("om.next","->Indexer","om.next/->Indexer",(-647371798),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"->Indexer","->Indexer",(1962431213),null),"om/next.cljc",(19),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(1704),(1704),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"indexes","indexes",(-1157960224),null),new cljs.core.Symbol(null,"extfs","extfs",(-2047394276),null)], null)),null,(cljs.core.truth_(om.next.__GT_Indexer)?om.next.__GT_Indexer.cljs$lang$test:null)])));})()
;

(function (){
om.next.map__GT_Indexer = (function om$next$map__GT_Indexer(G__1932){
return (new om.next.Indexer(new cljs.core.Keyword(null,"indexes","indexes",(1496475545)).cljs$core$IFn$_invoke$arity$1(G__1932),new cljs.core.Keyword(null,"extfs","extfs",(607041493)).cljs$core$IFn$_invoke$arity$1(G__1932),null,cljs.core.dissoc.call(null,G__1932,new cljs.core.Keyword(null,"indexes","indexes",(1496475545)),new cljs.core.Keyword(null,"extfs","extfs",(607041493))),null));
}); return (
new cljs.core.Var(function(){return om.next.map__GT_Indexer;},new cljs.core.Symbol("om.next","map->Indexer","om.next/map->Indexer",(219529299),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"map->Indexer","map->Indexer",(-106589858),null),"om/next.cljc",(19),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(1704),(1704),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__1932","G__1932",(-1334603360),null)], null)),null,(cljs.core.truth_(om.next.map__GT_Indexer)?om.next.map__GT_Indexer.cljs$lang$test:null)])));})()
;

/**
 * Given a function (Component -> Ref), return an indexer.
 */
(function (){
om.next.indexer = (function om$next$indexer(var_args){
var args2131 = [];
var len__23656__auto___2134 = arguments.length;
var i__23657__auto___2135 = (0);
while(true){
if((i__23657__auto___2135 < len__23656__auto___2134)){
args2131.push((arguments[i__23657__auto___2135]));

var G__2136 = (i__23657__auto___2135 + (1));
i__23657__auto___2135 = G__2136;
continue;
} else {
}
break;
}

var G__2133 = args2131.length;
switch (G__2133) {
case (0):
return om.next.indexer.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return om.next.indexer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2131.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next.indexer;},new cljs.core.Symbol("om.next","indexer","om.next/indexer",(1129162801),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"indexer","indexer",(-134382788),null),"om/next.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"extfs","extfs",(-2047394276),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"extfs","extfs",(-2047394276),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1888),(1888),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"extfs","extfs",(-2047394276),null)], null)),"Given a function (Component -> Ref), return an indexer.",(cljs.core.truth_(om.next.indexer)?om.next.indexer.cljs$lang$test:null)])));})()
;

om.next.indexer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.next.indexer.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index-component","index-component",(-1258618905)),(function (indexes,component){
return indexes;
}),new cljs.core.Keyword(null,"ref->components","ref->components",(-303587249)),(function (indexes,ref){
return null;
}),new cljs.core.Keyword(null,"drop-component","drop-component",(1805913749)),(function (indexes,component){
return indexes;
})], null));
});

om.next.indexer.cljs$core$IFn$_invoke$arity$1 = (function (extfs){
return (new om.next.Indexer(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref->components","ref->components",(-303587249)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"class->components","class->components",(436435919)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"data-path->components","data-path->components",(-1244619750)),cljs.core.PersistentArrayMap.EMPTY], null)),extfs,null,null,null));
});

om.next.indexer.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return om.next.indexer;},new cljs.core.Symbol("om.next","indexer","om.next/indexer",(1129162801),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"indexer","indexer",(-134382788),null),"om/next.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"extfs","extfs",(-2047394276),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"extfs","extfs",(-2047394276),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1888),(1888),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"extfs","extfs",(-2047394276),null)], null)),"Given a function (Component -> Ref), return an indexer.",(cljs.core.truth_(om.next.indexer)?om.next.indexer.cljs$lang$test:null)]));
/**
 * PRIVATE: Get the indexer associated with the reconciler.
 */
(function (){
om.next.get_indexer = (function om$next$get_indexer(reconciler){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"indexer","indexer",(-1774914315)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",(994861415)).cljs$core$IFn$_invoke$arity$1(reconciler));
}); return (
new cljs.core.Var(function(){return om.next.get_indexer;},new cljs.core.Symbol("om.next","get-indexer","om.next/get-indexer",(-2122285226),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"get-indexer","get-indexer",(-152032173),null),"om/next.cljc",(18),(1),(1903),(1903),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null)], null)),"PRIVATE: Get the indexer associated with the reconciler.",(cljs.core.truth_(om.next.get_indexer)?om.next.get_indexer.cljs$lang$test:null)])));})()
;
/**
 * Return all components for a given ref.
 */
(function (){
om.next.ref__GT_components = (function om$next$ref__GT_components(x,ref){
if((ref == null)){
return null;
} else {
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return om.next.protocols.key__GT_components.call(null,indexer,ref);
}
}); return (
new cljs.core.Var(function(){return om.next.ref__GT_components;},new cljs.core.Symbol("om.next","ref->components","om.next/ref->components",(-234383461),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"ref->components","ref->components",(1336944278),null),"om/next.cljc",(22),(1),(1909),(1909),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"ref","ref",(-1364538802),null)], null)),"Return all components for a given ref.",(cljs.core.truth_(om.next.ref__GT_components)?om.next.ref__GT_components.cljs$lang$test:null)])));})()
;
/**
 * Get any component from the indexer that matches the ref.
 */
(function (){
om.next.ref__GT_any = (function om$next$ref__GT_any(x,ref){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,om.next.protocols.key__GT_components.call(null,indexer,ref));
}); return (
new cljs.core.Var(function(){return om.next.ref__GT_any;},new cljs.core.Symbol("om.next","ref->any","om.next/ref->any",(-1724573215),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"ref->any","ref->any",(1151682790),null),"om/next.cljc",(15),(1),(1916),(1916),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"ref","ref",(-1364538802),null)], null)),"Get any component from the indexer that matches the ref.",(cljs.core.truth_(om.next.ref__GT_any)?om.next.ref__GT_any.cljs$lang$test:null)])));})()
;
/**
 * Get any component from the indexer that matches the component class.
 */
(function (){
om.next.class__GT_any = (function om$next$class__GT_any(x,class$){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",(436435919)),class$], null)));
}); return (
new cljs.core.Var(function(){return om.next.class__GT_any;},new cljs.core.Symbol("om.next","class->any","om.next/class->any",(1823861570),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"class->any","class->any",(-1874478001),null),"om/next.cljc",(17),(1),(1922),(1922),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"class","class",(-390430469),null)], null)),"Get any component from the indexer that matches the component class.",(cljs.core.truth_(om.next.class__GT_any)?om.next.class__GT_any.cljs$lang$test:null)])));})()
;
/**
 * Given x (a reconciler or indexer) and y (a component or component class
 * path), return the queries for that path.
 */
(function (){
om.next.class_path__GT_queries = (function om$next$class_path__GT_queries(x,y){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
var cp = ((om.next.component_QMARK_.call(null,y))?om.next.class_path.call(null,y):y);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,clojure.zip.root),cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",(-1222593700)),cp], null)));
}); return (
new cljs.core.Var(function(){return om.next.class_path__GT_queries;},new cljs.core.Symbol("om.next","class-path->queries","om.next/class-path->queries",(-291747967),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"class-path->queries","class-path->queries",(420320898),null),"om/next.cljc",(26),(1),(1928),(1928),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"y","y",(-117328249),null)], null)),"Given x (a reconciler or indexer) and y (a component or component class\n   path), return the queries for that path.",(cljs.core.truth_(om.next.class_path__GT_queries)?om.next.class_path__GT_queries.cljs$lang$test:null)])));})()
;
/**
 * Returns the absolute query for a given component, not relative like
 * om.next/get-query.
 */
(function (){
om.next.full_query = (function om$next$full_query(var_args){
var args2138 = [];
var len__23656__auto___2142 = arguments.length;
var i__23657__auto___2143 = (0);
while(true){
if((i__23657__auto___2143 < len__23656__auto___2142)){
args2138.push((arguments[i__23657__auto___2143]));

var G__2144 = (i__23657__auto___2143 + (1));
i__23657__auto___2143 = G__2144;
continue;
} else {
}
break;
}

var G__2140 = args2138.length;
switch (G__2140) {
case (1):
return om.next.full_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return om.next.full_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2138.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next.full_query;},new cljs.core.Symbol("om.next","full-query","om.next/full-query",(889633954),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"full-query","full-query",(-1063894081),null),"om/next.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1937),(1937),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),"Returns the absolute query for a given component, not relative like\n   om.next/get-query.",(cljs.core.truth_(om.next.full_query)?om.next.full_query.cljs$lang$test:null)])));})()
;

om.next.full_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
if(om.next.iquery_QMARK_.call(null,component)){
if((om.next.path.call(null,component) == null)){
return om.next.replace.call(null,cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",(-1222593700)),om.next.class_path.call(null,component)], null))),om.next.get_query.call(null,component));
} else {
return om.next.full_query.call(null,component,om.next.get_query.call(null,component));
}
} else {
return null;
}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query){
if(om.next.iquery_QMARK_.call(null,component)){
var xf = (function (){var G__2141 = cljs.core.remove.call(null,cljs.core.number_QMARK_);
var G__2141__$1 = ((om.next.recursive_class_path_QMARK_.call(null,component))?cljs.core.comp.call(null,cljs.core.distinct.call(null),G__2141):G__2141);
return G__2141__$1;
})();
var path_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,xf,om.next.path.call(null,component));
var cp = om.next.class_path.call(null,component);
var qs = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",(-1222593700)),cp], null));
if(!(cljs.core.empty_QMARK_.call(null,qs))){
var q = cljs.core.first.call(null,cljs.core.filter.call(null,((function (xf,path_SINGLEQUOTE_,cp,qs){
return (function (p1__175_SHARP_){
return cljs.core._EQ_.call(null,path_SINGLEQUOTE_,cljs.core.mapv.call(null,om.next.get_dispatch_key,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__175_SHARP_),path_SINGLEQUOTE_)));
});})(xf,path_SINGLEQUOTE_,cp,qs))
,qs));
if(!((q == null))){
return om.next.replace.call(null,q,query);
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

om.next.full_query.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return om.next.full_query;},new cljs.core.Symbol("om.next","full-query","om.next/full-query",(889633954),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"full-query","full-query",(-1063894081),null),"om/next.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1937),(1937),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",(-1098498987),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),"Returns the absolute query for a given component, not relative like\n   om.next/get-query.",(cljs.core.truth_(om.next.full_query)?om.next.full_query.cljs$lang$test:null)]));
(function (){
om.next.normalize_STAR_ = (function om$next$normalize_STAR_(query,data,refs,union_seen){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",(345799209),null)], null),query)){
return data;
} else {
if(cljs.core.map_QMARK_.call(null,query)){
var class$ = new cljs.core.Keyword(null,"component","component",(1555936782)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query));
var ident = ((((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.om$next$Ident$)))?true:false):false))?om.next.ident.call(null,class$,data):null);
if(!((ident == null))){
return cljs.core.vary_meta.call(null,om.next.normalize_STAR_.call(null,cljs.core.get.call(null,query,cljs.core.first.call(null,ident)),data,refs,union_seen),cljs.core.assoc,new cljs.core.Keyword("om","tag","om/tag",(-1290356769)),cljs.core.first.call(null,ident));
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
var vec__2163 = om.util.join_entry.call(null,expr);
var k = cljs.core.nth.call(null,vec__2163,(0),null);
var sel = cljs.core.nth.call(null,vec__2163,(1),null);
var recursive_QMARK_ = om.util.recursion_QMARK_.call(null,sel);
var union_entry = ((om.util.union_QMARK_.call(null,expr))?sel:union_seen);
var sel__$1 = ((recursive_QMARK_)?((!((union_seen == null)))?union_seen:query):sel);
var class$ = new cljs.core.Keyword(null,"component","component",(1555936782)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sel__$1));
var v = cljs.core.get.call(null,data,k);
if((recursive_QMARK_) && (om.util.ident_QMARK_.call(null,v))){
var G__2178 = cljs.core.next.call(null,q);
var G__2179 = ret;
q = G__2178;
ret = G__2179;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,v)){
var x = om.next.normalize_STAR_.call(null,sel__$1,v,refs,union_entry);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.om$next$Ident$)))?true:false):false))))){
var i = om.next.ident.call(null,class$,v);
cljs.core.swap_BANG_.call(null,refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,i),cljs.core.second.call(null,i)], null),cljs.core.merge,x);

var G__2180 = cljs.core.next.call(null,q);
var G__2181 = cljs.core.assoc.call(null,ret,k,i);
q = G__2180;
ret = G__2181;
continue;
} else {
var G__2182 = cljs.core.next.call(null,q);
var G__2183 = cljs.core.assoc.call(null,ret,k,x);
q = G__2182;
ret = G__2183;
continue;
}
} else {
if(cljs.core.vector_QMARK_.call(null,v)){
var xs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,vec__2163,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__176_SHARP_){
return om.next.normalize_STAR_.call(null,sel__$1,p1__176_SHARP_,refs,union_entry);
});})(q,ret,vec__2163,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),v);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.om$next$Ident$)))?true:false):false))))){
var is = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,xs,vec__2163,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__178_SHARP_){
return om.next.ident.call(null,class$,p1__178_SHARP_);
});})(q,ret,xs,vec__2163,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),xs);
if(cljs.core.vector_QMARK_.call(null,sel__$1)){
if(cljs.core.empty_QMARK_.call(null,is)){
} else {
cljs.core.swap_BANG_.call(null,refs,((function (q,ret,is,xs,vec__2163,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs__$1){
return cljs.core.reduce.call(null,((function (q,ret,is,xs,vec__2163,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (m,p__2170){
var vec__2171 = p__2170;
var i = cljs.core.nth.call(null,vec__2171,(0),null);
var x = cljs.core.nth.call(null,vec__2171,(1),null);
return cljs.core.update_in.call(null,m,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__2163,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs__$1,cljs.core.zipmap.call(null,is,xs));
});})(q,ret,is,xs,vec__2163,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}
} else {
cljs.core.swap_BANG_.call(null,refs,((function (q,ret,is,xs,vec__2163,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.call(null,((function (q,ret,is,xs,vec__2163,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (ret__$1,p__2174){
var vec__2175 = p__2174;
var i = cljs.core.nth.call(null,vec__2175,(0),null);
var x = cljs.core.nth.call(null,vec__2175,(1),null);
return cljs.core.update_in.call(null,ret__$1,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__2163,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs_SINGLEQUOTE_,cljs.core.map.call(null,cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__2163,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}

var G__2184 = cljs.core.next.call(null,q);
var G__2185 = cljs.core.assoc.call(null,ret,k,is);
q = G__2184;
ret = G__2185;
continue;
} else {
var G__2186 = cljs.core.next.call(null,q);
var G__2187 = cljs.core.assoc.call(null,ret,k,xs);
q = G__2186;
ret = G__2187;
continue;
}
} else {
if((v == null)){
var G__2188 = cljs.core.next.call(null,q);
var G__2189 = ret;
q = G__2188;
ret = G__2189;
continue;
} else {
var G__2190 = cljs.core.next.call(null,q);
var G__2191 = cljs.core.assoc.call(null,ret,k,v);
q = G__2190;
ret = G__2191;
continue;

}
}
}
}
} else {
var k = ((cljs.core.seq_QMARK_.call(null,expr))?cljs.core.first.call(null,expr):expr);
var v = cljs.core.get.call(null,data,k);
if((v == null)){
var G__2192 = cljs.core.next.call(null,q);
var G__2193 = ret;
q = G__2192;
ret = G__2193;
continue;
} else {
var G__2194 = cljs.core.next.call(null,q);
var G__2195 = cljs.core.assoc.call(null,ret,k,v);
q = G__2194;
ret = G__2195;
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
new cljs.core.Var(function(){return om.next.normalize_STAR_;},new cljs.core.Symbol("om.next","normalize*","om.next/normalize*",(1961308099),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"normalize*","normalize*",(597122766),null),"om/next.cljc",(18),(1),(1974),(1974),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null),new cljs.core.Symbol(null,"union-seen","union-seen",(959521680),null)], null)),null,(cljs.core.truth_(om.next.normalize_STAR_)?om.next.normalize_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Given a Om component class or instance and a tree of data, use the component's
 * query to transform the tree into the default database format. All nodes that
 * can be mapped via Ident implementations wil be replaced with ident links. The
 * original node data will be moved into tables indexed by ident. If merge-idents
 * option is true, will return these tables in the result instead of as metadata.
 */
(function (){
om.next.tree__GT_db = (function om$next$tree__GT_db(var_args){
var args2196 = [];
var len__23656__auto___2199 = arguments.length;
var i__23657__auto___2200 = (0);
while(true){
if((i__23657__auto___2200 < len__23656__auto___2199)){
args2196.push((arguments[i__23657__auto___2200]));

var G__2201 = (i__23657__auto___2200 + (1));
i__23657__auto___2200 = G__2201;
continue;
} else {
}
break;
}

var G__2198 = args2196.length;
switch (G__2198) {
case (2):
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2196.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next.tree__GT_db;},new cljs.core.Symbol("om.next","tree->db","om.next/tree->db",(1741499054),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"tree->db","tree->db",(844986795),null),"om/next.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"data","data",(1407862150),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),cljs.core.with_meta(new cljs.core.Symbol(null,"merge-idents","merge-idents",(-2016150948),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null)], null))], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"data","data",(1407862150),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),cljs.core.with_meta(new cljs.core.Symbol(null,"merge-idents","merge-idents",(-2016150948),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null)], null))], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2059),(2059),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"data","data",(1407862150),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),cljs.core.with_meta(new cljs.core.Symbol(null,"merge-idents","merge-idents",(-2016150948),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null)], null))], null)),"Given a Om component class or instance and a tree of data, use the component's\n   query to transform the tree into the default database format. All nodes that\n   can be mapped via Ident implementations wil be replaced with ident links. The\n   original node data will be moved into tables indexed by ident. If merge-idents\n   option is true, will return these tables in the result instead of as metadata.",(cljs.core.truth_(om.next.tree__GT_db)?om.next.tree__GT_db.cljs$lang$test:null)])));})()
;

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return om.next.tree__GT_db.call(null,x,data,false);
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_idents){
var refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var x__$1 = ((cljs.core.vector_QMARK_.call(null,x))?x:om.next.get_query.call(null,x));
var ret = om.next.normalize_STAR_.call(null,x__$1,data,refs,null);
if(merge_idents){
var refs_SINGLEQUOTE_ = cljs.core.deref.call(null,refs);
return cljs.core.assoc.call(null,cljs.core.merge.call(null,ret,refs_SINGLEQUOTE_),new cljs.core.Keyword("om.next","tables","om.next/tables",(1677536335)),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,refs_SINGLEQUOTE_)));
} else {
return cljs.core.with_meta.call(null,ret,cljs.core.deref.call(null,refs));
}
});

om.next.tree__GT_db.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return om.next.tree__GT_db;},new cljs.core.Symbol("om.next","tree->db","om.next/tree->db",(1741499054),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"tree->db","tree->db",(844986795),null),"om/next.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"data","data",(1407862150),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),cljs.core.with_meta(new cljs.core.Symbol(null,"merge-idents","merge-idents",(-2016150948),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null)], null))], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"data","data",(1407862150),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),cljs.core.with_meta(new cljs.core.Symbol(null,"merge-idents","merge-idents",(-2016150948),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null)], null))], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2059),(2059),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"data","data",(1407862150),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),cljs.core.with_meta(new cljs.core.Symbol(null,"merge-idents","merge-idents",(-2016150948),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null)], null))], null)),"Given a Om component class or instance and a tree of data, use the component's\n   query to transform the tree into the default database format. All nodes that\n   can be mapped via Ident implementations wil be replaced with ident links. The\n   original node data will be moved into tables indexed by ident. If merge-idents\n   option is true, will return these tables in the result instead of as metadata.",(cljs.core.truth_(om.next.tree__GT_db)?om.next.tree__GT_db.cljs$lang$test:null)]));
(function (){
om.next.sift_idents = (function om$next$sift_idents(res){
var map__2205 = cljs.core.group_by.call(null,(function (p1__179_SHARP_){
return cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,p1__179_SHARP_));
}),res);
var map__2205__$1 = ((((!((map__2205 == null)))?((((map__2205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2205):map__2205);
var rest = cljs.core.get.call(null,map__2205__$1,false);
var idents = cljs.core.get.call(null,map__2205__$1,true);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,idents),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,rest)], null);
}); return (
new cljs.core.Var(function(){return om.next.sift_idents;},new cljs.core.Symbol("om.next","sift-idents","om.next/sift-idents",(258453631),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"sift-idents","sift-idents",(2096613242),null),"om/next.cljc",(19),(1),(2077),(2077),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"res","res",(245523648),null)], null)),null,(cljs.core.truth_(om.next.sift_idents)?om.next.sift_idents.cljs$lang$test:null)])));})()
;
/**
 * Changes a join on key k with depth limit from [:a {:k n}] to [:a {:k (dec n)}]
 */
(function (){
om.next.reduce_query_depth = (function om$next$reduce_query_depth(q,k){
if(!(cljs.core.empty_QMARK_.call(null,om.next.focus_query.call(null,q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))))){
var pos = om.next.query_template.call(null,q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var node = clojure.zip.node.call(null,pos);
var node_SINGLEQUOTE_ = (function (){var G__2208 = node;
var G__2208__$1 = ((typeof node === 'number')?(G__2208 - (1)):G__2208);
return G__2208__$1;
})();
return om.next.replace.call(null,pos,node_SINGLEQUOTE_);
} else {
return q;
}
}); return (
new cljs.core.Var(function(){return om.next.reduce_query_depth;},new cljs.core.Symbol("om.next","reduce-query-depth","om.next/reduce-query-depth",(-1771492618),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"reduce-query-depth","reduce-query-depth",(-889783351),null),"om/next.cljc",(25),(1),(2081),(2081),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"q","q",(-1965434072),null),new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),"Changes a join on key k with depth limit from [:a {:k n}] to [:a {:k (dec n)}]",(cljs.core.truth_(om.next.reduce_query_depth)?om.next.reduce_query_depth.cljs$lang$test:null)])));})()
;
/**
 * Given a union expression decrement each of the query roots by one if it
 * is recursive.
 */
(function (){
om.next.reduce_union_recursion_depth = (function om$next$reduce_union_recursion_depth(union_expr,recursion_key){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__2213){
var vec__2214 = p__2213;
var k = cljs.core.nth.call(null,vec__2214,(0),null);
var q = cljs.core.nth.call(null,vec__2214,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.next.reduce_query_depth.call(null,q,recursion_key)], null);
}),union_expr));
}); return (
new cljs.core.Var(function(){return om.next.reduce_union_recursion_depth;},new cljs.core.Symbol("om.next","reduce-union-recursion-depth","om.next/reduce-union-recursion-depth",(-1318404524),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"reduce-union-recursion-depth","reduce-union-recursion-depth",(-1025838767),null),"om/next.cljc",(36),(1),(2091),(2091),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"union-expr","union-expr",(-2017401102),null),new cljs.core.Symbol(null,"recursion-key","recursion-key",(-2003391386),null)], null)),"Given a union expression decrement each of the query roots by one if it\n   is recursive.",(cljs.core.truth_(om.next.reduce_union_recursion_depth)?om.next.reduce_union_recursion_depth.cljs$lang$test:null)])));})()
;
(function (){
om.next.mappable_ident_QMARK_ = (function om$next$mappable_ident_QMARK_(refs,ident){
return (om.util.ident_QMARK_.call(null,ident)) && (cljs.core.contains_QMARK_.call(null,refs,cljs.core.first.call(null,ident)));
}); return (
new cljs.core.Var(function(){return om.next.mappable_ident_QMARK_;},new cljs.core.Symbol("om.next","mappable-ident?","om.next/mappable-ident?",(2108263503),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"mappable-ident?","mappable-ident?",(557440842),null),"om/next.cljc",(23),(1),(2099),(2099),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"refs","refs",(80480079),null),new cljs.core.Symbol(null,"ident","ident",(1639789181),null)], null)),null,(cljs.core.truth_(om.next.mappable_ident_QMARK_)?om.next.mappable_ident_QMARK_.cljs$lang$test:null)])));})()
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
om.next.denormalize_STAR_ = (function om$next$denormalize_STAR_(query,data,refs,map_ident,idents_seen,union_expr,recurse_key){
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
if(cljs.core.truth_(om.next.mappable_ident_QMARK_.call(null,refs,data__$1))){
var G__2261 = cljs.core.get_in.call(null,refs,map_ident.call(null,data__$1));
data__$1 = G__2261;
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
if(cljs.core.not.call(null,om.next.mappable_ident_QMARK_.call(null,refs,ident))){
if(cljs.core._EQ_.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",(345799209),null)], null))){
return ident;
} else {
var map__2239 = cljs.core.group_by.call(null,om.util.join_QMARK_,query);
var map__2239__$1 = ((((!((map__2239 == null)))?((((map__2239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2239.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2239):map__2239);
var props = cljs.core.get.call(null,map__2239__$1,false);
var joins = cljs.core.get.call(null,map__2239__$1,true);
var props__$1 = cljs.core.mapv.call(null,((function (map__2239,map__2239__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__180_SHARP_){
var G__2241 = p1__180_SHARP_;
var G__2241__$1 = ((cljs.core.seq_QMARK_.call(null,p1__180_SHARP_))?cljs.core.first.call(null,G__2241):G__2241);
return G__2241__$1;
});})(map__2239,map__2239__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq.call(null,joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first.call(null,joins__$1);
var vec__2242 = om.util.join_entry.call(null,join);
var key = cljs.core.nth.call(null,vec__2242,(0),null);
var sel = cljs.core.nth.call(null,vec__2242,(1),null);
var v = cljs.core.get.call(null,ident,key);
var G__2262 = cljs.core.next.call(null,joins__$1);
var G__2263 = cljs.core.assoc.call(null,ret,key,om.next.denormalize_STAR_.call(null,sel,v,refs,map_ident,idents_seen,union_expr,recurse_key));
joins__$1 = G__2262;
ret = G__2263;
continue;
} else {
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,ident,props__$1),ret);
}
break;
}
}
} else {
var ident_SINGLEQUOTE_ = cljs.core.get_in.call(null,refs,map_ident.call(null,ident));
var query__$1 = (function (){var G__2245 = query;
var G__2245__$1 = (cljs.core.truth_(union_recur_QMARK_)?om.next.reduce_union_recursion_depth.call(null,G__2245,recurse_key):G__2245);
return G__2245__$1;
})();
var union_seen_SINGLEQUOTE_ = (function (){var G__2246 = union_expr;
var G__2246__$1 = (cljs.core.truth_(union_recur_QMARK_)?om.next.reduce_union_recursion_depth.call(null,G__2246,recurse_key):G__2246);
return G__2246__$1;
})();
var query_SINGLEQUOTE_ = (function (){var G__2247 = query__$1;
var G__2247__$1 = ((cljs.core.map_QMARK_.call(null,query__$1))?cljs.core.get.call(null,G__2247,cljs.core.first.call(null,ident)):G__2247);
return G__2247__$1;
})();
return om.next.denormalize_STAR_.call(null,query_SINGLEQUOTE_,ident_SINGLEQUOTE_,refs,map_ident,idents_seen,union_seen_SINGLEQUOTE_,null);
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
return om.next.denormalize_STAR_.call(null,cljs.core.get.call(null,query,cljs.core.first.call(null,recur_ident)),data__$1,refs,map_ident,idents_seen,union_expr,recurse_key);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",(345799209),null)], null),query)){
return data__$1;
} else {
var map__2248 = cljs.core.group_by.call(null,((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__181_SHARP_){
var or__20817__auto__ = om.util.join_QMARK_.call(null,p1__181_SHARP_);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return (om.util.ident_QMARK_.call(null,p1__181_SHARP_)) || ((cljs.core.seq_QMARK_.call(null,p1__181_SHARP_)) && (om.util.ident_QMARK_.call(null,cljs.core.first.call(null,p1__181_SHARP_))));
}
});})(union_recur_QMARK_,recur_ident,data__$1))
,query);
var map__2248__$1 = ((((!((map__2248 == null)))?((((map__2248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2248.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2248):map__2248);
var props = cljs.core.get.call(null,map__2248__$1,false);
var joins = cljs.core.get.call(null,map__2248__$1,true);
var props__$1 = cljs.core.mapv.call(null,((function (map__2248,map__2248__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__182_SHARP_){
var G__2250 = p1__182_SHARP_;
var G__2250__$1 = ((cljs.core.seq_QMARK_.call(null,p1__182_SHARP_))?cljs.core.first.call(null,G__2250):G__2250);
return G__2250__$1;
});})(map__2248,map__2248__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq.call(null,joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first.call(null,joins__$1);
var join__$1 = (function (){var G__2254 = join;
var G__2254__$1 = ((cljs.core.seq_QMARK_.call(null,join))?cljs.core.first.call(null,G__2254):G__2254);
return G__2254__$1;
})();
var join__$2 = (function (){var G__2255 = join__$1;
var G__2255__$1 = ((om.util.ident_QMARK_.call(null,join__$1))?cljs.core.PersistentHashMap.fromArrays([G__2255],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",(345799209),null)], null)]):G__2255);
return G__2255__$1;
})();
var vec__2251 = om.util.join_entry.call(null,join__$2);
var key = cljs.core.nth.call(null,vec__2251,(0),null);
var sel = cljs.core.nth.call(null,vec__2251,(1),null);
var recurse_QMARK_ = om.util.recursion_QMARK_.call(null,sel);
var recurse_key__$1 = ((recurse_QMARK_)?key:null);
var v = ((om.util.ident_QMARK_.call(null,key))?((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",(-1201019570),null),cljs.core.second.call(null,key)))?cljs.core.get.call(null,refs,cljs.core.first.call(null,key)):cljs.core.get_in.call(null,refs,map_ident.call(null,key))):cljs.core.get.call(null,data__$1,key));
var key__$1 = (function (){var G__2256 = key;
var G__2256__$1 = ((om.util.unique_ident_QMARK_.call(null,key))?cljs.core.first.call(null,G__2256):G__2256);
return G__2256__$1;
})();
var v__$1 = (cljs.core.truth_(om.next.mappable_ident_QMARK_.call(null,refs,v))?(function (){var v__$1 = v;
while(true){
var next = cljs.core.get_in.call(null,refs,map_ident.call(null,v__$1));
if(cljs.core.truth_(om.next.mappable_ident_QMARK_.call(null,refs,next))){
var G__2264 = next;
v__$1 = G__2264;
continue;
} else {
return map_ident.call(null,v__$1);
}
break;
}
})():v);
var limit = ((typeof sel === 'number')?sel:new cljs.core.Keyword(null,"none","none",(1333468478)));
var union_entry = ((om.util.union_QMARK_.call(null,join__$2))?sel:((recurse_QMARK_)?union_expr:null));
var sel__$1 = ((recurse_QMARK_)?((!((union_expr == null)))?union_entry:om.next.reduce_query_depth.call(null,query,key__$1)):(cljs.core.truth_((function (){var and__20770__auto__ = om.next.mappable_ident_QMARK_.call(null,refs,v__$1);
if(cljs.core.truth_(and__20770__auto__)){
return om.util.union_QMARK_.call(null,join__$2);
} else {
return and__20770__auto__;
}
})())?cljs.core.get.call(null,sel,cljs.core.first.call(null,v__$1)):(((om.util.ident_QMARK_.call(null,key__$1)) && (om.util.union_QMARK_.call(null,join__$2)))?cljs.core.get.call(null,sel,cljs.core.first.call(null,key__$1)):sel
)));
var graph_loop_QMARK_ = (recurse_QMARK_) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.get.call(null,idents_seen,key__$1)),v__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"none","none",(1333468478)),limit));
var idents_seen__$1 = (cljs.core.truth_((function (){var and__20770__auto__ = om.next.mappable_ident_QMARK_.call(null,refs,v__$1);
if(cljs.core.truth_(and__20770__auto__)){
return recurse_QMARK_;
} else {
return and__20770__auto__;
}
})())?cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,idents_seen,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key__$1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),v__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",(534500972)),key__$1], null),v__$1):idents_seen);
if(cljs.core._EQ_.call(null,(0),limit)){
var G__2265 = cljs.core.next.call(null,joins__$1);
var G__2266 = ret;
joins__$1 = G__2265;
ret = G__2266;
continue;
} else {
if(graph_loop_QMARK_){
var G__2267 = cljs.core.next.call(null,joins__$1);
var G__2268 = ret;
joins__$1 = G__2267;
ret = G__2268;
continue;
} else {
if((v__$1 == null)){
var G__2269 = cljs.core.next.call(null,joins__$1);
var G__2270 = ret;
joins__$1 = G__2269;
ret = G__2270;
continue;
} else {
var G__2271 = cljs.core.next.call(null,joins__$1);
var G__2272 = cljs.core.assoc.call(null,ret,key__$1,om.next.denormalize_STAR_.call(null,sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1));
joins__$1 = G__2271;
ret = G__2272;
continue;

}
}
}
} else {
var temp__19520__auto__ = cljs.core.some.call(null,((function (joins__$1,ret,map__2248,map__2248__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1){
return (function (p__2257){
var vec__2258 = p__2257;
var k = cljs.core.nth.call(null,vec__2258,(0),null);
var identset = cljs.core.nth.call(null,vec__2258,(1),null);
if(cljs.core.contains_QMARK_.call(null,identset,cljs.core.get.call(null,data__$1,k))){
return cljs.core.get_in.call(null,idents_seen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",(534500972)),k], null));
} else {
return null;
}
});})(joins__$1,ret,map__2248,map__2248__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1))
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
new cljs.core.Var(function(){return om.next.denormalize_STAR_;},new cljs.core.Symbol("om.next","denormalize*","om.next/denormalize*",(977372840),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"denormalize*","denormalize*",(-424659025),null),"om/next.cljc",(20),(1),(2105),(2105),cljs.core.list(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null),new cljs.core.Symbol(null,"map-ident","map-ident",(-941881244),null),new cljs.core.Symbol(null,"idents-seen","idents-seen",(442271002),null),new cljs.core.Symbol(null,"union-expr","union-expr",(-2017401102),null),new cljs.core.Symbol(null,"recurse-key","recurse-key",(1211905935),null)], null)),"Denormalize a data based on query. refs is a data structure which maps idents\n   to their values. map-ident is a function taking a ident to another ident,\n   used during tempid transition. idents-seen is the set of idents encountered,\n   used to limit recursion. union-expr is the current union expression being\n   evaluated. recurse-key is key representing the current recursive query being\n   evaluted.",(cljs.core.truth_(om.next.denormalize_STAR_)?om.next.denormalize_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Given a query, some data in the default database format, and the entire
 * application state in the default database format, return the tree where all
 * ident links have been replaced with their original node values.
 */
(function (){
om.next.db__GT_tree = (function om$next$db__GT_tree(var_args){
var args2273 = [];
var len__23656__auto___2276 = arguments.length;
var i__23657__auto___2277 = (0);
while(true){
if((i__23657__auto___2277 < len__23656__auto___2276)){
args2273.push((arguments[i__23657__auto___2277]));

var G__2278 = (i__23657__auto___2277 + (1));
i__23657__auto___2277 = G__2278;
continue;
} else {
}
break;
}

var G__2275 = args2273.length;
switch (G__2275) {
case (3):
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2273.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next.db__GT_tree;},new cljs.core.Symbol("om.next","db->tree","om.next/db->tree",(1138129443),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"db->tree","db->tree",(-26752736),null),"om/next.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null),new cljs.core.Symbol(null,"map-ident","map-ident",(-941881244),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null),new cljs.core.Symbol(null,"map-ident","map-ident",(-941881244),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2233),(2233),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null),new cljs.core.Symbol(null,"map-ident","map-ident",(-941881244),null)], null)),"Given a query, some data in the default database format, and the entire\n   application state in the default database format, return the tree where all\n   ident links have been replaced with their original node values.",(cljs.core.truth_(om.next.db__GT_tree)?om.next.db__GT_tree.cljs$lang$test:null)])));})()
;

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3 = (function (query,data,refs){
if(cljs.core.map_QMARK_.call(null,refs)){
} else {
throw (new Error("Assert failed: (map? refs)"));
}

return om.next.denormalize_STAR_.call(null,query,data,refs,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4 = (function (query,data,refs,map_ident){
if(cljs.core.map_QMARK_.call(null,refs)){
} else {
throw (new Error("Assert failed: (map? refs)"));
}

return om.next.denormalize_STAR_.call(null,query,data,refs,map_ident,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$lang$maxFixedArity = (4);

new cljs.core.Var(function(){return om.next.db__GT_tree;},new cljs.core.Symbol("om.next","db->tree","om.next/db->tree",(1138129443),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"db->tree","db->tree",(-26752736),null),"om/next.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null),new cljs.core.Symbol(null,"map-ident","map-ident",(-941881244),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null),new cljs.core.Symbol(null,"map-ident","map-ident",(-941881244),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2233),(2233),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null),new cljs.core.Symbol(null,"map-ident","map-ident",(-941881244),null)], null)),"Given a query, some data in the default database format, and the entire\n   application state in the default database format, return the tree where all\n   ident links have been replaced with their original node values.",(cljs.core.truth_(om.next.db__GT_tree)?om.next.db__GT_tree.cljs$lang$test:null)]));
(function (){
om.next.rewrite = (function om$next$rewrite(rewrite_map,result){
var step = (function om$next$rewrite_$_step(res,p__2301){
var vec__2305 = p__2301;
var k = cljs.core.nth.call(null,vec__2305,(0),null);
var orig_paths = cljs.core.nth.call(null,vec__2305,(1),null);
var to_move = cljs.core.get.call(null,result,k);
var res_SINGLEQUOTE_ = cljs.core.reduce.call(null,((function (to_move,vec__2305,k,orig_paths){
return (function (p1__183_SHARP_,p2__184_SHARP_){
return cljs.core.assoc_in.call(null,p1__183_SHARP_,cljs.core.conj.call(null,p2__184_SHARP_,k),to_move);
});})(to_move,vec__2305,k,orig_paths))
,res,orig_paths);
return cljs.core.dissoc.call(null,res_SINGLEQUOTE_,k);
});
return cljs.core.reduce.call(null,step,result,rewrite_map);
}); return (
new cljs.core.Var(function(){return om.next.rewrite;},new cljs.core.Symbol("om.next","rewrite","om.next/rewrite",(1648077484),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"rewrite","rewrite",(-1783948381),null),"om/next.cljc",(14),(1),(2247),(2247),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rewrite-map","rewrite-map",(819594757),null),new cljs.core.Symbol(null,"result","result",(-1239343558),null)], null)),null,(cljs.core.truth_(om.next.rewrite)?om.next.rewrite.cljs$lang$test:null)])));})()
;
/**
 * When given a join `{:join selector-vector}`, roots found so far, and a `path` prefix:
 *   returns a (possibly empty) sequence of [re-rooted-join prefix] results.
 *   Does NOT support sub-roots. Each re-rooted join will share only
 *   one common parent (their common branching point).
 *   
 */
(function (){
om.next.move_roots = (function om$next$move_roots(join,result_roots,path){
var query_root_QMARK_ = (function om$next$move_roots_$_query_root_QMARK_(join__$1){
return new cljs.core.Keyword(null,"query-root","query-root",(359781888)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,join__$1)) === true;
});
if(cljs.core.truth_(om.util.join_QMARK_.call(null,join))){
if(cljs.core.truth_(query_root_QMARK_.call(null,join))){
return cljs.core.conj.call(null,result_roots,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [join,path], null));
} else {
return cljs.core.mapcat.call(null,(function (p1__185_SHARP_){
return om.next.move_roots.call(null,p1__185_SHARP_,result_roots,cljs.core.conj.call(null,path,om.util.join_key.call(null,join)));
}),om.util.join_value.call(null,join));
}
} else {
return result_roots;
}
}); return (
new cljs.core.Var(function(){return om.next.move_roots;},new cljs.core.Symbol("om.next","move-roots","om.next/move-roots",(-1235620398),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"move-roots","move-roots",(-1012384593),null),"om/next.cljc",(18),(1),(2255),(2255),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"join","join",(881669637),null),new cljs.core.Symbol(null,"result-roots","result-roots",(889183512),null),new cljs.core.Symbol(null,"path","path",(1452340359),null)], null)),"When given a join `{:join selector-vector}`, roots found so far, and a `path` prefix:\n  returns a (possibly empty) sequence of [re-rooted-join prefix] results.\n  Does NOT support sub-roots. Each re-rooted join will share only\n  one common parent (their common branching point).\n  ",(cljs.core.truth_(om.next.move_roots)?om.next.move_roots.cljs$lang$test:null)])));})()
;
/**
 * Searches a query for duplicate joins and deep-merges them into a new query.
 */
(function (){
om.next.merge_joins = (function om$next$merge_joins(query){
var step = (function om$next$merge_joins_$_step(res,expr){
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
var nq = ((om.util.recursion_QMARK_.call(null,q))?q:((om.util.recursion_QMARK_.call(null,jv))?jv:om.next.merge_joins.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,q,jv)))
));
return cljs.core.update_in.call(null,res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-by-join","query-by-join",(-131270450))], null),cljs.core.assoc,jk,nq);
})():cljs.core.update_in.call(null,res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-mergeable","not-mergeable",(-291093370))], null),cljs.core.conj,expr)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements-seen","elements-seen",(723482521))], null),cljs.core.conj,expr);
}
});
var init = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"not-mergeable","not-mergeable",(-291093370)),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"query-by-join","query-by-join",(-131270450)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"elements-seen","elements-seen",(723482521)),cljs.core.PersistentHashSet.EMPTY], null);
var res = cljs.core.reduce.call(null,step,init,query);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.Keyword(null,"not-mergeable","not-mergeable",(-291093370)).cljs$core$IFn$_invoke$arity$1(res),cljs.core.mapv.call(null,((function (init,res){
return (function (p__2312){
var vec__2313 = p__2312;
var jkey = cljs.core.nth.call(null,vec__2313,(0),null);
var jsel = cljs.core.nth.call(null,vec__2313,(1),null);
return cljs.core.PersistentArrayMap.fromArray([jkey,jsel], true, false);
});})(init,res))
,new cljs.core.Keyword(null,"query-by-join","query-by-join",(-131270450)).cljs$core$IFn$_invoke$arity$1(res))));
}); return (
new cljs.core.Var(function(){return om.next.merge_joins;},new cljs.core.Symbol("om.next","merge-joins","om.next/merge-joins",(529590826),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"merge-joins","merge-joins",(-350144201),null),"om/next.cljc",(19),(1),(2272),(2272),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),"Searches a query for duplicate joins and deep-merges them into a new query.",(cljs.core.truth_(om.next.merge_joins)?om.next.merge_joins.cljs$lang$test:null)])));})()
;
(function (){
om.next.process_roots = (function om$next$process_roots(query){

var retain = (function om$next$process_roots_$_retain(expr){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr,cljs.core.PersistentVector.EMPTY], null)], null);
});
var reroot = (function om$next$process_roots_$_reroot(expr){
var roots = om.next.move_roots.call(null,expr,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
if(cljs.core.empty_QMARK_.call(null,roots)){
return retain.call(null,expr);
} else {
return roots;
}
});
var rewrite_map_step = (function om$next$process_roots_$_rewrite_map_step(rewrites,p__2337){
var vec__2341 = p__2337;
var expr = cljs.core.nth.call(null,vec__2341,(0),null);
var path = cljs.core.nth.call(null,vec__2341,(1),null);
if(cljs.core.empty_QMARK_.call(null,path)){
return rewrites;
} else {
return cljs.core.update_in.call(null,rewrites,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.util.join_key.call(null,expr)], null),cljs.core.conj,path);
}
});
var reroots = cljs.core.mapcat.call(null,reroot,query);
var query__$1 = om.next.merge_joins.call(null,cljs.core.mapv.call(null,cljs.core.first,reroots));
var rewrite_map = cljs.core.reduce.call(null,rewrite_map_step,cljs.core.PersistentArrayMap.EMPTY,reroots);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",(-1288509510)),query__$1,new cljs.core.Keyword(null,"rewrite","rewrite",(870487388)),cljs.core.partial.call(null,om.next.rewrite,rewrite_map)], null);
}); return (
new cljs.core.Var(function(){return om.next.process_roots;},new cljs.core.Symbol("om.next","process-roots","om.next/process-roots",(-863455119),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"process-roots","process-roots",(-1609012916),null),"om/next.cljc",(20),(1),(2301),(2301),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),null,(cljs.core.truth_(om.next.process_roots)?om.next.process_roots.cljs$lang$test:null)])));})()
;
(function (){
om.next.merge_idents = (function om$next$merge_idents(tree,config,refs,query){
var map__2360 = config;
var map__2360__$1 = ((((!((map__2360 == null)))?((((map__2360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2360):map__2360);
var merge_ident = cljs.core.get.call(null,map__2360__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",(1040841862)));
var indexer = cljs.core.get.call(null,map__2360__$1,new cljs.core.Keyword(null,"indexer","indexer",(-1774914315)));
var ident_joins = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (map__2360,map__2360__$1,merge_ident,indexer){
return (function (p1__186_SHARP_){
var and__20770__auto__ = om.util.join_QMARK_.call(null,p1__186_SHARP_);
if(cljs.core.truth_(and__20770__auto__)){
return om.util.ident_QMARK_.call(null,om.util.join_key.call(null,p1__186_SHARP_));
} else {
return and__20770__auto__;
}
});})(map__2360,map__2360__$1,merge_ident,indexer))
,query));
var step = ((function (map__2360,map__2360__$1,merge_ident,indexer,ident_joins){
return (function om$next$merge_idents_$_step(tree_SINGLEQUOTE_,p__2369){
var vec__2373 = p__2369;
var ident = cljs.core.nth.call(null,vec__2373,(0),null);
var props = cljs.core.nth.call(null,vec__2373,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",(-1904390051)).cljs$core$IFn$_invoke$arity$1(config))){
var c_or_q = (function (){var or__20817__auto__ = cljs.core.get.call(null,ident_joins,ident);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return om.next.ref__GT_any.call(null,indexer,ident);
}
})();
var props_SINGLEQUOTE_ = om.next.tree__GT_db.call(null,c_or_q,props);
var refs__$1 = cljs.core.meta.call(null,props_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",(-127861161)).cljs$core$IFn$_invoke$arity$1(config).call(null,merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_),refs__$1);
} else {
return merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props);
}
});})(map__2360,map__2360__$1,merge_ident,indexer,ident_joins))
;
return cljs.core.reduce.call(null,step,tree,refs);
}); return (
new cljs.core.Var(function(){return om.next.merge_idents;},new cljs.core.Symbol("om.next","merge-idents","om.next/merge-idents",(1952662865),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"merge-idents","merge-idents",(-2016150948),null),"om/next.cljc",(20),(1),(2323),(2323),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tree","tree",(1444219499),null),new cljs.core.Symbol(null,"config","config",(-1659574354),null),new cljs.core.Symbol(null,"refs","refs",(80480079),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),null,(cljs.core.truth_(om.next.merge_idents)?om.next.merge_idents.cljs$lang$test:null)])));})()
;
(function (){
om.next.merge_novelty_BANG_ = (function om$next$merge_novelty_BANG_(reconciler,state,res,query){
var config = new cljs.core.Keyword(null,"config","config",(994861415)).cljs$core$IFn$_invoke$arity$1(reconciler);
var vec__2379 = om.next.sift_idents.call(null,res);
var idts = cljs.core.nth.call(null,vec__2379,(0),null);
var res_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__2379,(1),null);
var res_SINGLEQUOTE___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",(-1904390051)).cljs$core$IFn$_invoke$arity$1(config))?om.next.tree__GT_db.call(null,(function (){var or__20817__auto__ = query;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return new cljs.core.Keyword(null,"root","root",(-448657453)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(reconciler)));
}
})(),res_SINGLEQUOTE_,true):res_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",(-127861161)).cljs$core$IFn$_invoke$arity$1(config).call(null,om.next.merge_idents.call(null,state,config,idts,query),res_SINGLEQUOTE___$1);
}); return (
new cljs.core.Var(function(){return om.next.merge_novelty_BANG_;},new cljs.core.Symbol("om.next","merge-novelty!","om.next/merge-novelty!",(-1892989716),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"merge-novelty!","merge-novelty!",(1402681327),null),"om/next.cljc",(22),(1),(2338),(2338),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"res","res",(245523648),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),null,(cljs.core.truth_(om.next.merge_novelty_BANG_)?om.next.merge_novelty_BANG_.cljs$lang$test:null)])));})()
;
(function (){
om.next.default_merge = (function om$next$default_merge(reconciler,state,res,query){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tempids","tempids",(1767509089)),cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"tempids","tempids",(1767509089)),cljs.core.second),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.symbol_QMARK_,cljs.core.first),res))),new cljs.core.Keyword(null,"keys","keys",(1068423698)),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,res)),new cljs.core.Keyword(null,"next","next",(-117701485)),om.next.merge_novelty_BANG_.call(null,reconciler,state,res,query)], null);
}); return (
new cljs.core.Var(function(){return om.next.default_merge;},new cljs.core.Symbol("om.next","default-merge","om.next/default-merge",(878397383),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"default-merge","default-merge",(-2131978558),null),"om/next.cljc",(20),(1),(2351),(2351),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"res","res",(245523648),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),null,(cljs.core.truth_(om.next.default_merge)?om.next.default_merge.cljs$lang$test:null)])));})()
;
/**
 * Merge a state delta into the application state. Affected components managed
 * by the reconciler will re-render.
 */
(function (){
om.next.merge_BANG_ = (function om$next$merge_BANG_(var_args){
var args2382 = [];
var len__23656__auto___2387 = arguments.length;
var i__23657__auto___2388 = (0);
while(true){
if((i__23657__auto___2388 < len__23656__auto___2387)){
args2382.push((arguments[i__23657__auto___2388]));

var G__2389 = (i__23657__auto___2388 + (1));
i__23657__auto___2388 = G__2389;
continue;
} else {
}
break;
}

var G__2384 = args2382.length;
switch (G__2384) {
case (2):
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2382.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next.merge_BANG_;},new cljs.core.Symbol("om.next","merge!","om.next/merge!",(-363219326),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"merge!","merge!",(919144837),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"delta","delta",(1749471484),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"delta","delta",(1749471484),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"delta","delta",(1749471484),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"delta","delta",(1749471484),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2358),(2358),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"delta","delta",(1749471484),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"delta","delta",(1749471484),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),"Merge a state delta into the application state. Affected components managed\n   by the reconciler will re-render.",(cljs.core.truth_(om.next.merge_BANG_)?om.next.merge_BANG_.cljs$lang$test:null)])));})()
;

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,delta){
return om.next.merge_BANG_.call(null,reconciler,delta,null);
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,delta,query){
var config = new cljs.core.Keyword(null,"config","config",(994861415)).cljs$core$IFn$_invoke$arity$1(reconciler);
var state = new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(config);
var merge_STAR_ = new cljs.core.Keyword(null,"merge","merge",(-1804319409)).cljs$core$IFn$_invoke$arity$1(config);
var map__2385 = merge_STAR_.call(null,reconciler,cljs.core.deref.call(null,state),delta,query);
var map__2385__$1 = ((((!((map__2385 == null)))?((((map__2385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2385.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2385):map__2385);
var tempids = cljs.core.get.call(null,map__2385__$1,new cljs.core.Keyword(null,"tempids","tempids",(1767509089)));
var keys = cljs.core.get.call(null,map__2385__$1,new cljs.core.Keyword(null,"keys","keys",(1068423698)));
var next = cljs.core.get.call(null,map__2385__$1,new cljs.core.Keyword(null,"next","next",(-117701485)));
om.next.protocols.queue_BANG_.call(null,reconciler,keys);

return cljs.core.reset_BANG_.call(null,state,(function (){var temp__19520__auto__ = new cljs.core.Keyword(null,"migrate","migrate",(-207110743)).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__19520__auto__)){
var migrate = temp__19520__auto__;
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,next,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",(-22717146))], null)),migrate.call(null,next,(function (){var or__20817__auto__ = query;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return om.next.get_query.call(null,new cljs.core.Keyword(null,"root","root",(-448657453)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(reconciler))));
}
})(),tempids,new cljs.core.Keyword(null,"id-key","id-key",(-1881730044)).cljs$core$IFn$_invoke$arity$1(config)));
} else {
return next;
}
})());
});

om.next.merge_BANG_.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return om.next.merge_BANG_;},new cljs.core.Symbol("om.next","merge!","om.next/merge!",(-363219326),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"merge!","merge!",(919144837),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"delta","delta",(1749471484),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"delta","delta",(1749471484),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"delta","delta",(1749471484),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"delta","delta",(1749471484),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2358),(2358),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"delta","delta",(1749471484),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"delta","delta",(1749471484),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),"Merge a state delta into the application state. Affected components managed\n   by the reconciler will re-render.",(cljs.core.truth_(om.next.merge_BANG_)?om.next.merge_BANG_.cljs$lang$test:null)]));

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
om.next.Reconciler = (function (config,state,__meta,__extmap,__hash){
this.config = config;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065266934;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22669__auto__,k__22670__auto__){
var self__ = this;
var this__22669__auto____$1 = this;
return cljs.core._lookup.call(null,this__22669__auto____$1,k__22670__auto__,null);
});

om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22671__auto__,k2392,else__22672__auto__){
var self__ = this;
var this__22671__auto____$1 = this;
var G__2394 = (((k2392 instanceof cljs.core.Keyword))?k2392.fqn:null);
switch (G__2394) {
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k2392,else__22672__auto__);

}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$ = cljs.core.PROTOCOL_SENTINEL;

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$2 = (function (_,ks){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",(1455835879))], null),cljs.core.into,ks);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_sends_BANG_$arity$2 = (function (_,sends){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued-sends","queued-sends",(278114765))], null),new cljs.core.Keyword(null,"merge-sends","merge-sends",(-1718434202)).cljs$core$IFn$_invoke$arity$1(self__.config),sends);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$send_BANG_$arity$1 = (function (this$){
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
var om$next$send_cb = null;
var om$next$send_cb__1 = (function (res){
return om.next.merge_BANG_.call(null,this$__$1,res,null);
});
var om$next$send_cb__2 = (function (res,query){
return om.next.merge_BANG_.call(null,this$__$1,res,query);
});
om$next$send_cb = function(res,query){
switch(arguments.length){
case 1:
return om$next$send_cb__1.call(this,res);
case 2:
return om$next$send_cb__2.call(this,res,query);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$send_cb.cljs$core$IFn$_invoke$arity$1 = om$next$send_cb__1;
om$next$send_cb.cljs$core$IFn$_invoke$arity$2 = om$next$send_cb__2;
return om$next$send_cb;
})()
;})(sends,this$__$1))
);
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$1 = (function (this$){
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
return (function (p1__188_SHARP_){
return om.next.protocols.key__GT_components.call(null,new cljs.core.Keyword(null,"indexer","indexer",(-1774914315)).cljs$core$IFn$_invoke$arity$1(self__.config),p1__188_SHARP_);
});})(st,q,this$__$1))
),((function (st,q,this$__$1){
return (function (p1__189_SHARP_,p2__190_SHARP_){
return cljs.core.into.call(null,p1__189_SHARP_,p2__190_SHARP_);
});})(st,q,this$__$1))
,cljs.core.PersistentHashSet.EMPTY,q);
var map__2395 = self__.config;
var map__2395__$1 = ((((!((map__2395 == null)))?((((map__2395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2395.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2395):map__2395);
var ui__GT_props = cljs.core.get.call(null,map__2395__$1,new cljs.core.Keyword(null,"ui->props","ui->props",(-237981102)));
var env = om.next.to_env.call(null,self__.config);
var root = new cljs.core.Keyword(null,"root","root",(-448657453)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
var seq__2397 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"optimize","optimize",(-1912349448)).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,cs));
var chunk__2398 = null;
var count__2399 = (0);
var i__2400 = (0);
while(true){
if((i__2400 < count__2399)){
var c = cljs.core._nth.call(null,chunk__2398,i__2400);
var props_change_QMARK__2408 = (om.next.protocols.basis_t.call(null,this$__$1) > om.next.t.call(null,c));
if(om.next.mounted_QMARK_.call(null,c)){
var computed_2409 = om.next.get_computed.call(null,om.next.props.call(null,c));
var next_raw_props_2410 = ui__GT_props.call(null,env,c);
var next_props_2411 = om.next.computed.call(null,next_raw_props_2410,computed_2409);
if((typeof c.componentWillReceiveProps !== 'undefined') && (om.next.iquery_QMARK_.call(null,root)) && (props_change_QMARK__2408)){
var next_props_2412__$1 = (((next_props_2411 == null))?(function (){var temp__19834__auto__ = om.next.props.call(null,c);
if(cljs.core.truth_(temp__19834__auto__)){
var props = temp__19834__auto__;
return props;
} else {
return null;
}
})():next_props_2411);
c.componentWillReceiveProps(({"omcljs$value": om.next.om_props.call(null,next_props_2412__$1,om.next.protocols.basis_t.call(null,this$__$1))}));
} else {
}

if(cljs.core.truth_(om.next.should_update_QMARK_.call(null,c,next_props_2411,om.next.get_state.call(null,c)))){
if(!((next_props_2411 == null))){
om.next.update_component_BANG_.call(null,c,next_props_2411);
} else {
c.forceUpdate();
}

if((om.next.iquery_QMARK_.call(null,root)) && (cljs.core.not_EQ_.call(null,c,root)) && (props_change_QMARK__2408)){
var temp__19834__auto___2413 = om.next.path.call(null,c);
if(cljs.core.truth_(temp__19834__auto___2413)){
var update_path_2414 = temp__19834__auto___2413;
var p_2415 = om.next.parent.call(null,c);
while(true){
if(cljs.core.some_QMARK_.call(null,p_2415)){
var update_path_SINGLEQUOTE__2416 = cljs.core.subvec.call(null,update_path_2414,cljs.core.count.call(null,om.next.path.call(null,p_2415)));
om.next.update_props_BANG_.call(null,p_2415,cljs.core.assoc_in.call(null,om.next.props.call(null,p_2415),update_path_SINGLEQUOTE__2416,next_raw_props_2410));

om.next.merge_pending_props_BANG_.call(null,p_2415);

var G__2417 = om.next.parent.call(null,p_2415);
p_2415 = G__2417;
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

var G__2418 = seq__2397;
var G__2419 = chunk__2398;
var G__2420 = count__2399;
var G__2421 = (i__2400 + (1));
seq__2397 = G__2418;
chunk__2398 = G__2419;
count__2399 = G__2420;
i__2400 = G__2421;
continue;
} else {
var temp__19834__auto__ = cljs.core.seq.call(null,seq__2397);
if(temp__19834__auto__){
var seq__2397__$1 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2397__$1)){
var c__23363__auto__ = cljs.core.chunk_first.call(null,seq__2397__$1);
var G__2422 = cljs.core.chunk_rest.call(null,seq__2397__$1);
var G__2423 = c__23363__auto__;
var G__2424 = cljs.core.count.call(null,c__23363__auto__);
var G__2425 = (0);
seq__2397 = G__2422;
chunk__2398 = G__2423;
count__2399 = G__2424;
i__2400 = G__2425;
continue;
} else {
var c = cljs.core.first.call(null,seq__2397__$1);
var props_change_QMARK__2426 = (om.next.protocols.basis_t.call(null,this$__$1) > om.next.t.call(null,c));
if(om.next.mounted_QMARK_.call(null,c)){
var computed_2427 = om.next.get_computed.call(null,om.next.props.call(null,c));
var next_raw_props_2428 = ui__GT_props.call(null,env,c);
var next_props_2429 = om.next.computed.call(null,next_raw_props_2428,computed_2427);
if((typeof c.componentWillReceiveProps !== 'undefined') && (om.next.iquery_QMARK_.call(null,root)) && (props_change_QMARK__2426)){
var next_props_2430__$1 = (((next_props_2429 == null))?(function (){var temp__19834__auto____$1 = om.next.props.call(null,c);
if(cljs.core.truth_(temp__19834__auto____$1)){
var props = temp__19834__auto____$1;
return props;
} else {
return null;
}
})():next_props_2429);
c.componentWillReceiveProps(({"omcljs$value": om.next.om_props.call(null,next_props_2430__$1,om.next.protocols.basis_t.call(null,this$__$1))}));
} else {
}

if(cljs.core.truth_(om.next.should_update_QMARK_.call(null,c,next_props_2429,om.next.get_state.call(null,c)))){
if(!((next_props_2429 == null))){
om.next.update_component_BANG_.call(null,c,next_props_2429);
} else {
c.forceUpdate();
}

if((om.next.iquery_QMARK_.call(null,root)) && (cljs.core.not_EQ_.call(null,c,root)) && (props_change_QMARK__2426)){
var temp__19834__auto___2431__$1 = om.next.path.call(null,c);
if(cljs.core.truth_(temp__19834__auto___2431__$1)){
var update_path_2432 = temp__19834__auto___2431__$1;
var p_2433 = om.next.parent.call(null,c);
while(true){
if(cljs.core.some_QMARK_.call(null,p_2433)){
var update_path_SINGLEQUOTE__2434 = cljs.core.subvec.call(null,update_path_2432,cljs.core.count.call(null,om.next.path.call(null,p_2433)));
om.next.update_props_BANG_.call(null,p_2433,cljs.core.assoc_in.call(null,om.next.props.call(null,p_2433),update_path_SINGLEQUOTE__2434,next_raw_props_2428));

om.next.merge_pending_props_BANG_.call(null,p_2433);

var G__2435 = om.next.parent.call(null,p_2433);
p_2433 = G__2435;
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

var G__2436 = cljs.core.next.call(null,seq__2397__$1);
var G__2437 = null;
var G__2438 = (0);
var G__2439 = (0);
seq__2397 = G__2436;
chunk__2398 = G__2437;
count__2399 = G__2438;
i__2400 = G__2439;
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

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_render_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"queued","queued",(1701634607)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queued","queued",(1701634607)),true);

return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_sends_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"sends-queued","sends-queued",(-1276878712)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"sends-queued","sends-queued",(-1276878712)),true);

return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"t","t",(-1397832519)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$add_root_BANG_$arity$4 = (function (this$,root_class,target,options){
var self__ = this;
var this$__$1 = this;
var ret = cljs.core.atom.call(null,null);
var rctor = om.next.factory.call(null,root_class);
var guid = cljs.core.random_uuid.call(null);
if(om.next.iquery_QMARK_.call(null,root_class)){
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
var new_state_2440 = om.next.tree__GT_db.call(null,root_class,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(self__.config)));
var refs_2441 = cljs.core.meta.call(null,new_state_2440);
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.merge.call(null,new_state_2440,refs_2441));

cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"normalized","normalized",(-1887621663)),true);
} else {
}

var renderf = ((function (ret,rctor,guid,this$__$1){
return (function (data){
var _STAR_reconciler_STAR_2401 = om.next._STAR_reconciler_STAR_;
var _STAR_shared_STAR_2402 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_2403 = om.next._STAR_instrument_STAR_;
om.next._STAR_reconciler_STAR_ = this$__$1;

om.next._STAR_shared_STAR_ = cljs.core.merge.call(null,new cljs.core.Keyword(null,"shared","shared",(-384145993)).cljs$core$IFn$_invoke$arity$1(self__.config),(cljs.core.truth_(new cljs.core.Keyword(null,"shared-fn","shared-fn",(-180260144)).cljs$core$IFn$_invoke$arity$1(self__.config))?new cljs.core.Keyword(null,"shared-fn","shared-fn",(-180260144)).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,data):null));

om.next._STAR_instrument_STAR_ = new cljs.core.Keyword(null,"instrument","instrument",(-960698844)).cljs$core$IFn$_invoke$arity$1(self__.config);

try{var c = ((!((target == null)))?new cljs.core.Keyword(null,"root-render","root-render",(835981146)).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,rctor.call(null,data),target):(((cljs.core.deref.call(null,ret) == null))?rctor.call(null,data):(function (){var temp__19834__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(temp__19834__auto__)){
var c_SINGLEQUOTE_ = temp__19834__auto__;
if(om.next.mounted_QMARK_.call(null,c_SINGLEQUOTE_)){
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
}finally {om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_2403;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_2402;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_2401;
}});})(ret,rctor,guid,this$__$1))
;
var parsef = ((function (renderf,ret,rctor,guid,this$__$1){
return (function (){
var sel = om.next.get_query.call(null,(function (){var or__20817__auto__ = cljs.core.deref.call(null,ret);
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
var env = om.next.to_env.call(null,self__.config);
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
return (function (p1__187_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__187_SHARP_,new cljs.core.Keyword(null,"target","target",(253001721))),new cljs.core.Keyword(null,"render","render",(-1408033454))),new cljs.core.Keyword(null,"root","root",(-448657453))),new cljs.core.Keyword(null,"remove","remove",(-131428414)));
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

if(!(om.next.iquery_QMARK_.call(null,root_class))){
return om.next.queue_render_BANG_.call(null,parsef);
} else {
return om.next.schedule_render_BANG_.call(null,this$__$1);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

parsef.call(null);

var temp__19834__auto___2442 = om.next.get_query.call(null,(function (){var or__20817__auto__ = (function (){var and__20770__auto__ = target;
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
if(cljs.core.truth_(temp__19834__auto___2442)){
var sel_2443 = temp__19834__auto___2442;
var env_2444 = om.next.to_env.call(null,self__.config);
var snds_2445 = om.next.gather_sends.call(null,env_2444,sel_2443,new cljs.core.Keyword(null,"remotes","remotes",(1132366312)).cljs$core$IFn$_invoke$arity$1(self__.config));
if(cljs.core.empty_QMARK_.call(null,snds_2445)){
} else {
var temp__19834__auto___2446__$1 = new cljs.core.Keyword(null,"send","send",(-652151114)).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(temp__19834__auto___2446__$1)){
var send_2447 = temp__19834__auto___2446__$1;
send_2447.call(null,snds_2445,((function (send_2447,temp__19834__auto___2446__$1,env_2444,snds_2445,sel_2443,temp__19834__auto___2442,renderf,parsef,ret,rctor,guid,this$__$1){
return (function() {
var om$next$send_cb = null;
var om$next$send_cb__1 = (function (res){
om.next.merge_BANG_.call(null,this$__$1,res,null);

return renderf.call(null,new cljs.core.Keyword(null,"parser","parser",(-1543495310)).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_2444,sel_2443));
});
var om$next$send_cb__2 = (function (res,query){
om.next.merge_BANG_.call(null,this$__$1,res,query);

return renderf.call(null,new cljs.core.Keyword(null,"parser","parser",(-1543495310)).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_2444,sel_2443));
});
om$next$send_cb = function(res,query){
switch(arguments.length){
case 1:
return om$next$send_cb__1.call(this,res);
case 2:
return om$next$send_cb__2.call(this,res,query);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$send_cb.cljs$core$IFn$_invoke$arity$1 = om$next$send_cb__1;
om$next$send_cb.cljs$core$IFn$_invoke$arity$2 = om$next$send_cb__2;
return om$next$send_cb;
})()
;})(send_2447,temp__19834__auto___2446__$1,env_2444,snds_2445,sel_2443,temp__19834__auto___2442,renderf,parsef,ret,rctor,guid,this$__$1))
);
} else {
}
}
} else {
}

return cljs.core.deref.call(null,ret);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$reindex_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var root = cljs.core.get.call(null,cljs.core.deref.call(null,self__.state),new cljs.core.Keyword(null,"root","root",(-448657453)));
if(om.next.iquery_QMARK_.call(null,root)){
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

om.next.Reconciler.prototype.om$next$protocols$IReconciler$remove_root_BANG_$arity$2 = (function (_,target){
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

om.next.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22689__auto__,writer__22690__auto__,opts__22691__auto__){
var self__ = this;
var this__22689__auto____$1 = this;
var pr_pair__22692__auto__ = ((function (this__22689__auto____$1){
return (function (keyval__22693__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22690__auto__,cljs.core.pr_writer,""," ","",opts__22691__auto__,keyval__22693__auto__);
});})(this__22689__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22690__auto__,pr_pair__22692__auto__,"#om.next.Reconciler{",", ","}",opts__22691__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",(994861415)),self__.config],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",(-1988618099)),self__.state],null))], null),self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

om.next.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__2391){
var self__ = this;
var G__2391__$1 = this;
return (new cljs.core.RecordIter((0),G__2391__$1,(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",(994861415)),new cljs.core.Keyword(null,"state","state",(-1988618099))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

om.next.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22667__auto__){
var self__ = this;
var this__22667__auto____$1 = this;
return self__.__meta;
});

om.next.Reconciler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22663__auto__){
var self__ = this;
var this__22663__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22673__auto__){
var self__ = this;
var this__22673__auto____$1 = this;
return ((2) + cljs.core.count.call(null,self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22664__auto__){
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

om.next.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22665__auto__,other__22666__auto__){
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

om.next.Reconciler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22679__auto__,k__22680__auto__){
var self__ = this;
var this__22679__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config","config",(994861415)),null,new cljs.core.Keyword(null,"state","state",(-1988618099)),null], null), null),k__22680__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22679__auto____$1),self__.__meta),k__22680__auto__);
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22680__auto__)),null));
}
});

om.next.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22677__auto__,k__22678__auto__,G__2391){
var self__ = this;
var this__22677__auto____$1 = this;
var pred__2404 = cljs.core.keyword_identical_QMARK_;
var expr__2405 = k__22678__auto__;
if(cljs.core.truth_(pred__2404.call(null,new cljs.core.Keyword(null,"config","config",(994861415)),expr__2405))){
return (new om.next.Reconciler(G__2391,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__2404.call(null,new cljs.core.Keyword(null,"state","state",(-1988618099)),expr__2405))){
return (new om.next.Reconciler(self__.config,G__2391,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22678__auto__,G__2391),null));
}
}
});

om.next.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22683__auto__){
var self__ = this;
var this__22683__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",(994861415)),self__.config],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",(-1988618099)),self__.state],null))], null),self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22668__auto__,G__2391){
var self__ = this;
var this__22668__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,G__2391,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22674__auto__,entry__22675__auto__){
var self__ = this;
var this__22674__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22675__auto__)){
return cljs.core._assoc.call(null,this__22674__auto____$1,cljs.core._nth.call(null,entry__22675__auto__,(0)),cljs.core._nth.call(null,entry__22675__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22674__auto____$1,entry__22675__auto__);
}
});

om.next.Reconciler.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(self__.config));
});

om.next.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",(-1659574354),null),new cljs.core.Symbol(null,"state","state",(-348086572),null)], null);
});

om.next.Reconciler.cljs$lang$type = true;

om.next.Reconciler.cljs$lang$ctorPrSeq = (function (this__23044__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Reconciler");
});

om.next.Reconciler.cljs$lang$ctorPrWriter = (function (this__23044__auto__,writer__23045__auto__){
return cljs.core._write.call(null,writer__23045__auto__,"om.next/Reconciler");
});

(function (){
om.next.__GT_Reconciler = (function om$next$__GT_Reconciler(config,state){
return (new om.next.Reconciler(config,state,null,null,null));
}); return (
new cljs.core.Var(function(){return om.next.__GT_Reconciler;},new cljs.core.Symbol("om.next","->Reconciler","om.next/->Reconciler",(2084403476),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"->Reconciler","->Reconciler",(-791869417),null),"om/next.cljc",(22),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(2377),(2377),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",(-1659574354),null),new cljs.core.Symbol(null,"state","state",(-348086572),null)], null)),null,(cljs.core.truth_(om.next.__GT_Reconciler)?om.next.__GT_Reconciler.cljs$lang$test:null)])));})()
;

(function (){
om.next.map__GT_Reconciler = (function om$next$map__GT_Reconciler(G__2393){
return (new om.next.Reconciler(new cljs.core.Keyword(null,"config","config",(994861415)).cljs$core$IFn$_invoke$arity$1(G__2393),new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(G__2393),null,cljs.core.dissoc.call(null,G__2393,new cljs.core.Keyword(null,"config","config",(994861415)),new cljs.core.Keyword(null,"state","state",(-1988618099))),null));
}); return (
new cljs.core.Var(function(){return om.next.map__GT_Reconciler;},new cljs.core.Symbol("om.next","map->Reconciler","om.next/map->Reconciler",(16226824),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"map->Reconciler","map->Reconciler",(-1402517237),null),"om/next.cljc",(22),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(2377),(2377),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__2393","G__2393",(-258389035),null)], null)),null,(cljs.core.truth_(om.next.map__GT_Reconciler)?om.next.map__GT_Reconciler.cljs$lang$test:null)])));})()
;

(function (){
om.next.default_ui__GT_props = (function om$next$default_ui__GT_props(p__2448,c){
var map__2454 = p__2448;
var map__2454__$1 = ((((!((map__2454 == null)))?((((map__2454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2454):map__2454);
var env = map__2454__$1;
var pathopt = cljs.core.get.call(null,map__2454__$1,new cljs.core.Keyword(null,"pathopt","pathopt",(-61073149)));
var parser = cljs.core.get.call(null,map__2454__$1,new cljs.core.Keyword(null,"parser","parser",(-1543495310)));
var ui = (((function (){var and__20770__auto__ = pathopt;
if(and__20770__auto__){
var and__20770__auto____$1 = ((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false);
if(and__20770__auto____$1){
return om.next.iquery_QMARK_.call(null,c);
} else {
return and__20770__auto____$1;
}
} else {
return and__20770__auto__;
}
})())?(function (){var id = om.next.ident.call(null,c,om.next.props.call(null,c));
return cljs.core.get.call(null,parser.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([id,om.next.get_query.call(null,c)], true, false)], null)),id);
})():null);
if(!((ui == null))){
return ui;
} else {
var fq = om.next.full_query.call(null,c);
if((fq == null)){
return null;
} else {
var s = cljs.core.system_time.call(null);
var ui__$1 = parser.call(null,env,fq);
var e = cljs.core.system_time.call(null);
var temp__19834__auto___2459 = new cljs.core.Keyword(null,"logger","logger",(-220675947)).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__19834__auto___2459)){
var l_2460 = temp__19834__auto___2459;
var dt_2461 = (e - s);
if(((16) < dt_2461)){
goog.log.warning(l_2460,[cljs.core.str(c),cljs.core.str(" query took "),cljs.core.str(dt_2461),cljs.core.str(" msecs")].join(''));
} else {
}
} else {
}

return cljs.core.get_in.call(null,ui__$1,om.next.path.call(null,c));
}
}
}); return (
new cljs.core.Var(function(){return om.next.default_ui__GT_props;},new cljs.core.Symbol("om.next","default-ui->props","om.next/default-ui->props",(-1273938386),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"default-ui->props","default-ui->props",(-528380117),null),"om/next.cljc",(24),(1),(2555),(2555),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parser","parser",(97036217),null),cljs.core.with_meta(new cljs.core.Symbol(null,"pathopt","pathopt",(1579458378),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null)], null))], null)], null),new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(om.next.default_ui__GT_props)?om.next.default_ui__GT_props.cljs$lang$test:null)])));})()
;
(function (){
om.next.default_merge_ident = (function om$next$default_merge_ident(_,tree,ref,props){
return cljs.core.update_in.call(null,tree,ref,cljs.core.merge,props);
}); return (
new cljs.core.Var(function(){return om.next.default_merge_ident;},new cljs.core.Symbol("om.next","default-merge-ident","om.next/default-merge-ident",(1898776684),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"default-merge-ident","default-merge-ident",(-1537549975),null),"om/next.cljc",(26),(1),(2577),(2577),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",(-1201019570),null),new cljs.core.Symbol(null,"tree","tree",(1444219499),null),new cljs.core.Symbol(null,"ref","ref",(-1364538802),null),new cljs.core.Symbol(null,"props","props",(2093813254),null)], null)),null,(cljs.core.truth_(om.next.default_merge_ident)?om.next.default_merge_ident.cljs$lang$test:null)])));})()
;
(function (){
om.next.default_merge_tree = (function om$next$default_merge_tree(a,b){
if(cljs.core.map_QMARK_.call(null,a)){
return cljs.core.merge.call(null,a,b);
} else {
return b;
}
}); return (
new cljs.core.Var(function(){return om.next.default_merge_tree;},new cljs.core.Symbol("om.next","default-merge-tree","om.next/default-merge-tree",(44586882),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"default-merge-tree","default-merge-tree",(-1103624561),null),"om/next.cljc",(25),(1),(2581),(2581),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null)], null)),null,(cljs.core.truth_(om.next.default_merge_tree)?om.next.default_merge_tree.cljs$lang$test:null)])));})()
;
/**
 * Given app-state-pure (the application state as an immutable value), a query,
 * tempids (a hash map from tempid to stable id), and an optional id-key
 * keyword, return a new application state value with the tempids replaced by
 * the stable ids.
 */
(function (){
om.next.default_migrate = (function om$next$default_migrate(var_args){
var args2462 = [];
var len__23656__auto___2509 = arguments.length;
var i__23657__auto___2510 = (0);
while(true){
if((i__23657__auto___2510 < len__23656__auto___2509)){
args2462.push((arguments[i__23657__auto___2510]));

var G__2511 = (i__23657__auto___2510 + (1));
i__23657__auto___2510 = G__2511;
continue;
} else {
}
break;
}

var G__2464 = args2462.length;
switch (G__2464) {
case (3):
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2462.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next.default_migrate;},new cljs.core.Symbol("om.next","default-migrate","om.next/default-migrate",(-1814324012),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"default-migrate","default-migrate",(642510251),null),"om/next.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state-pure","app-state-pure",(865242660),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"tempids","tempids",(-886926680),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state-pure","app-state-pure",(865242660),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"tempids","tempids",(-886926680),null),new cljs.core.Symbol(null,"id-key","id-key",(-241198517),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state-pure","app-state-pure",(865242660),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"tempids","tempids",(-886926680),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state-pure","app-state-pure",(865242660),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"tempids","tempids",(-886926680),null),new cljs.core.Symbol(null,"id-key","id-key",(-241198517),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2587),(2587),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state-pure","app-state-pure",(865242660),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"tempids","tempids",(-886926680),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state-pure","app-state-pure",(865242660),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"tempids","tempids",(-886926680),null),new cljs.core.Symbol(null,"id-key","id-key",(-241198517),null)], null)),"Given app-state-pure (the application state as an immutable value), a query,\n   tempids (a hash map from tempid to stable id), and an optional id-key\n   keyword, return a new application state value with the tempids replaced by\n   the stable ids.",(cljs.core.truth_(om.next.default_migrate)?om.next.default_migrate.cljs$lang$test:null)])));})()
;

om.next.default_migrate.cljs$core$IFn$_invoke$arity$3 = (function (app_state_pure,query,tempids){
return om.next.default_migrate.call(null,app_state_pure,query,tempids,null);
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$4 = (function (app_state_pure,query,tempids,id_key){
var dissoc_in = (function om$next$dissoc_in(pure,p__2487){
var vec__2491 = p__2487;
var table = cljs.core.nth.call(null,vec__2491,(0),null);
var id = cljs.core.nth.call(null,vec__2491,(1),null);
return cljs.core.assoc.call(null,pure,table,cljs.core.dissoc.call(null,cljs.core.get.call(null,pure,table),id));
});
var step = (function om$next$step(pure,p__2494){
var vec__2502 = p__2494;
var old = cljs.core.nth.call(null,vec__2502,(0),null);
var vec__2505 = cljs.core.nth.call(null,vec__2502,(1),null);
var _ = cljs.core.nth.call(null,vec__2505,(0),null);
var id = cljs.core.nth.call(null,vec__2505,(1),null);
var new$ = vec__2505;
return cljs.core.assoc_in.call(null,dissoc_in.call(null,pure,old),new$,(function (){var G__2508 = cljs.core.merge.call(null,cljs.core.get_in.call(null,pure,old),cljs.core.get_in.call(null,pure,new$));
var G__2508__$1 = ((!((id_key == null)))?cljs.core.assoc.call(null,G__2508,id_key,id):G__2508);
return G__2508__$1;
})());
});
if(!(cljs.core.empty_QMARK_.call(null,tempids))){
var pure_SINGLEQUOTE_ = cljs.core.reduce.call(null,step,app_state_pure,tempids);
return om.next.tree__GT_db.call(null,query,om.next.db__GT_tree.call(null,query,pure_SINGLEQUOTE_,pure_SINGLEQUOTE_,((function (pure_SINGLEQUOTE_){
return (function (ident){
return cljs.core.get.call(null,tempids,ident,ident);
});})(pure_SINGLEQUOTE_))
),true);
} else {
return app_state_pure;
}
});

om.next.default_migrate.cljs$lang$maxFixedArity = (4);

new cljs.core.Var(function(){return om.next.default_migrate;},new cljs.core.Symbol("om.next","default-migrate","om.next/default-migrate",(-1814324012),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"default-migrate","default-migrate",(642510251),null),"om/next.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state-pure","app-state-pure",(865242660),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"tempids","tempids",(-886926680),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state-pure","app-state-pure",(865242660),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"tempids","tempids",(-886926680),null),new cljs.core.Symbol(null,"id-key","id-key",(-241198517),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state-pure","app-state-pure",(865242660),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"tempids","tempids",(-886926680),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state-pure","app-state-pure",(865242660),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"tempids","tempids",(-886926680),null),new cljs.core.Symbol(null,"id-key","id-key",(-241198517),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2587),(2587),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state-pure","app-state-pure",(865242660),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"tempids","tempids",(-886926680),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state-pure","app-state-pure",(865242660),null),new cljs.core.Symbol(null,"query","query",(352022017),null),new cljs.core.Symbol(null,"tempids","tempids",(-886926680),null),new cljs.core.Symbol(null,"id-key","id-key",(-241198517),null)], null)),"Given app-state-pure (the application state as an immutable value), a query,\n   tempids (a hash map from tempid to stable id), and an optional id-key\n   keyword, return a new application state value with the tempids replaced by\n   the stable ids.",(cljs.core.truth_(om.next.default_migrate)?om.next.default_migrate.cljs$lang$test:null)]));
(function (){
om.next.has_error_QMARK_ = (function om$next$has_error_QMARK_(x){
return (cljs.core.map_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,x,new cljs.core.Keyword("om.next","error","om.next/error",(-1841983205))));
}); return (
new cljs.core.Var(function(){return om.next.has_error_QMARK_;},new cljs.core.Symbol("om.next","has-error?","om.next/has-error?",(1956544569),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"has-error?","has-error?",(-670157004),null),"om/next.cljc",(18),(1),(2610),(2610),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,((om.next.has_error_QMARK_)?om.next.has_error_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
om.next.default_extract_errors = (function om$next$default_extract_errors(reconciler,res,query){
var extract_STAR_ = (function om$next$default_extract_errors_$_extract_STAR_(query__$1,res__$1,errs){
var class$ = new cljs.core.Keyword(null,"component","component",(1555936782)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query__$1));
var top_error_QMARK_ = (((!((class$ == null))) && (om.next.has_error_QMARK_.call(null,res__$1)))?cljs.core.swap_BANG_.call(null,errs,((function (class$){
return (function (p1__191_SHARP_){
return cljs.core.update_in.call(null,p1__191_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.ident.call(null,class$,res__$1)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",(-1841983205)).cljs$core$IFn$_invoke$arity$1(res__$1));
});})(class$))
):null);
var ret = (((top_error_QMARK_ == null))?cljs.core.PersistentArrayMap.EMPTY:null);
if(cljs.core.vector_QMARK_.call(null,query__$1)){
if(cljs.core.vector_QMARK_.call(null,res__$1)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (class$,top_error_QMARK_,ret){
return (function (p1__192_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_.call(null,query__$1,p1__192_SHARP_,errs);
});})(class$,top_error_QMARK_,ret))
),res__$1);
} else {
var exprs = cljs.core.seq.call(null,query__$1);
var ret__$1 = ret;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first.call(null,exprs);
var k = (function (){var k = om.next.expr__GT_key.call(null,expr);
var k__$1 = (function (){var G__2520 = k;
var G__2520__$1 = ((om.util.unique_ident_QMARK_.call(null,k))?cljs.core.first.call(null,G__2520):G__2520);
return G__2520__$1;
})();
return k__$1;
})();
var data = cljs.core.get.call(null,res__$1,k);
if(om.util.mutation_QMARK_.call(null,expr)){
var mk = om.util.mutation_key.call(null,expr);
var ret_SINGLEQUOTE_ = cljs.core.get.call(null,res__$1,mk);
if(om.next.has_error_QMARK_.call(null,ret_SINGLEQUOTE_)){
var x = new cljs.core.Keyword(null,"mutator","mutator",(-1326825366)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,expr));
cljs.core.swap_BANG_.call(null,errs,((function (exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__193_SHARP_){
return cljs.core.update_in.call(null,p1__193_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",(-1841983205)).cljs$core$IFn$_invoke$arity$1(ret_SINGLEQUOTE_));
});})(exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__2521 = cljs.core.next.call(null,exprs);
var G__2522 = ret__$1;
exprs = G__2521;
ret__$1 = G__2522;
continue;
} else {
var G__2523 = cljs.core.next.call(null,exprs);
var G__2524 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,mk,ret_SINGLEQUOTE_));
exprs = G__2523;
ret__$1 = G__2524;
continue;
}
} else {
if(om.util.union_QMARK_.call(null,expr)){
var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var class_SINGLEQUOTE_ = new cljs.core.Keyword(null,"component","component",(1555936782)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,jv));
if(!(cljs.core.vector_QMARK_.call(null,data))){
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_.call(null,cljs.core.get.call(null,jv,cljs.core.first.call(null,om.next.ident.call(null,class_SINGLEQUOTE_,data))),data,errs);
var G__2525 = cljs.core.next.call(null,exprs);
var G__2526 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__2525;
ret__$1 = G__2526;
continue;
} else {
var ret_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__194_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_.call(null,cljs.core.get.call(null,jv,cljs.core.first.call(null,om.next.ident.call(null,class_SINGLEQUOTE_,p1__194_SHARP_))),p1__194_SHARP_,errs);
});})(exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
),data);
var G__2527 = cljs.core.next.call(null,exprs);
var G__2528 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__2527;
ret__$1 = G__2528;
continue;
}
} else {
if(cljs.core.truth_(om.util.join_QMARK_.call(null,expr))){
var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_.call(null,jv,data,errs);
var G__2529 = cljs.core.next.call(null,exprs);
var G__2530 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__2529;
ret__$1 = G__2530;
continue;
} else {
if((cljs.core.map_QMARK_.call(null,data)) && (om.next.has_error_QMARK_.call(null,data))){
cljs.core.swap_BANG_.call(null,errs,((function (exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__195_SHARP_){
return cljs.core.update_in.call(null,p1__195_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__20817__auto__ = (((class$ == null))?null:om.next.ident.call(null,class$,res__$1));
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return k;
}
})()], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",(-1841983205)).cljs$core$IFn$_invoke$arity$1(data));
});})(exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__2531 = cljs.core.next.call(null,exprs);
var G__2532 = null;
exprs = G__2531;
ret__$1 = G__2532;
continue;
} else {
var G__2533 = cljs.core.next.call(null,exprs);
var G__2534 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,k,data));
exprs = G__2533;
ret__$1 = G__2534;
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
new cljs.core.Var(function(){return om.next.default_extract_errors;},new cljs.core.Symbol("om.next","default-extract-errors","om.next/default-extract-errors",(-1820530314),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"default-extract-errors","default-extract-errors",(653043317),null),"om/next.cljc",(29),(1),(2615),(2615),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"res","res",(245523648),null),new cljs.core.Symbol(null,"query","query",(352022017),null)], null)),null,(cljs.core.truth_(om.next.default_extract_errors)?om.next.default_extract_errors.cljs$lang$test:null)])));})()
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
om.next.reconciler = (function om$next$reconciler(p__2535){
var map__2539 = p__2535;
var map__2539__$1 = ((((!((map__2539 == null)))?((((map__2539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2539.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2539):map__2539);
var config = map__2539__$1;
var root_render = cljs.core.get.call(null,map__2539__$1,new cljs.core.Keyword(null,"root-render","root-render",(835981146)),((function (map__2539,map__2539__$1,config){
return (function (p1__198_SHARP_,p2__199_SHARP_){
return ReactDOM.render(p1__198_SHARP_,p2__199_SHARP_);
});})(map__2539,map__2539__$1,config))
);
var normalize = cljs.core.get.call(null,map__2539__$1,new cljs.core.Keyword(null,"normalize","normalize",(-1904390051)));
var prune_tree = cljs.core.get.call(null,map__2539__$1,new cljs.core.Keyword(null,"prune-tree","prune-tree",(142138431)),om.next.default_extract_errors);
var pathopt = cljs.core.get.call(null,map__2539__$1,new cljs.core.Keyword(null,"pathopt","pathopt",(-61073149)),false);
var instrument = cljs.core.get.call(null,map__2539__$1,new cljs.core.Keyword(null,"instrument","instrument",(-960698844)));
var id_key = cljs.core.get.call(null,map__2539__$1,new cljs.core.Keyword(null,"id-key","id-key",(-1881730044)));
var merge_sends = cljs.core.get.call(null,map__2539__$1,new cljs.core.Keyword(null,"merge-sends","merge-sends",(-1718434202)),((function (map__2539,map__2539__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key){
return (function (p1__196_SHARP_,p2__197_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__196_SHARP_,p2__197_SHARP_);
});})(map__2539,map__2539__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key))
);
var merge_ident = cljs.core.get.call(null,map__2539__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",(1040841862)),om.next.default_merge_ident);
var remotes = cljs.core.get.call(null,map__2539__$1,new cljs.core.Keyword(null,"remotes","remotes",(1132366312)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",(-1593576576))], null));
var migrate = cljs.core.get.call(null,map__2539__$1,new cljs.core.Keyword(null,"migrate","migrate",(-207110743)),om.next.default_migrate);
var easy_reads = cljs.core.get.call(null,map__2539__$1,new cljs.core.Keyword(null,"easy-reads","easy-reads",(803667467)),true);
var history = cljs.core.get.call(null,map__2539__$1,new cljs.core.Keyword(null,"history","history",(-247395220)),(100));
var state = cljs.core.get.call(null,map__2539__$1,new cljs.core.Keyword(null,"state","state",(-1988618099)));
var merge = cljs.core.get.call(null,map__2539__$1,new cljs.core.Keyword(null,"merge","merge",(-1804319409)),om.next.default_merge);
var shared_fn = cljs.core.get.call(null,map__2539__$1,new cljs.core.Keyword(null,"shared-fn","shared-fn",(-180260144)));
var ui__GT_props = cljs.core.get.call(null,map__2539__$1,new cljs.core.Keyword(null,"ui->props","ui->props",(-237981102)),om.next.default_ui__GT_props);
var parser = cljs.core.get.call(null,map__2539__$1,new cljs.core.Keyword(null,"parser","parser",(-1543495310)));
var indexer = cljs.core.get.call(null,map__2539__$1,new cljs.core.Keyword(null,"indexer","indexer",(-1774914315)),om.next.indexer);
var root_unmount = cljs.core.get.call(null,map__2539__$1,new cljs.core.Keyword(null,"root-unmount","root-unmount",(1692900789)),((function (map__2539,map__2539__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer){
return (function (p1__200_SHARP_){
return ReactDOM.unmountComponentAtNode(p1__200_SHARP_);
});})(map__2539,map__2539__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer))
);
var send = cljs.core.get.call(null,map__2539__$1,new cljs.core.Keyword(null,"send","send",(-652151114)));
var merge_tree = cljs.core.get.call(null,map__2539__$1,new cljs.core.Keyword(null,"merge-tree","merge-tree",(-127861161)),om.next.default_merge_tree);
var shared = cljs.core.get.call(null,map__2539__$1,new cljs.core.Keyword(null,"shared","shared",(-384145993)));
var optimize = cljs.core.get.call(null,map__2539__$1,new cljs.core.Keyword(null,"optimize","optimize",(-1912349448)),((function (map__2539,map__2539__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared){
return (function (cs){
return cljs.core.sort_by.call(null,om.next.depth,cs);
});})(map__2539,map__2539__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared))
);
if(cljs.core.map_QMARK_.call(null,config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

var idxr = indexer.call(null);
var norm_QMARK_ = ((!((state == null)))?((((state.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === state.cljs$core$IAtom$)))?true:(((!state.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state));
var state_SINGLEQUOTE_ = ((norm_QMARK_)?state:cljs.core.atom.call(null,state));
var logger = ((cljs.core.contains_QMARK_.call(null,config,new cljs.core.Keyword(null,"logger","logger",(-220675947))))?new cljs.core.Keyword(null,"logger","logger",(-220675947)).cljs$core$IFn$_invoke$arity$1(config):om.next._STAR_logger_STAR_);
var ret = (new om.next.Reconciler(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pathopt","pathopt",(-61073149)),new cljs.core.Keyword(null,"id-key","id-key",(-1881730044)),new cljs.core.Keyword(null,"instrument","instrument",(-960698844)),new cljs.core.Keyword(null,"merge-ident","merge-ident",(1040841862)),new cljs.core.Keyword(null,"merge-sends","merge-sends",(-1718434202)),new cljs.core.Keyword(null,"remotes","remotes",(1132366312)),new cljs.core.Keyword(null,"migrate","migrate",(-207110743)),new cljs.core.Keyword(null,"easy-reads","easy-reads",(803667467)),new cljs.core.Keyword(null,"history","history",(-247395220)),new cljs.core.Keyword(null,"state","state",(-1988618099)),new cljs.core.Keyword(null,"merge","merge",(-1804319409)),new cljs.core.Keyword(null,"shared-fn","shared-fn",(-180260144)),new cljs.core.Keyword(null,"parser","parser",(-1543495310)),new cljs.core.Keyword(null,"ui->props","ui->props",(-237981102)),new cljs.core.Keyword(null,"logger","logger",(-220675947)),new cljs.core.Keyword(null,"indexer","indexer",(-1774914315)),new cljs.core.Keyword(null,"root-unmount","root-unmount",(1692900789)),new cljs.core.Keyword(null,"send","send",(-652151114)),new cljs.core.Keyword(null,"shared","shared",(-384145993)),new cljs.core.Keyword(null,"merge-tree","merge-tree",(-127861161)),new cljs.core.Keyword(null,"optimize","optimize",(-1912349448)),new cljs.core.Keyword(null,"root-render","root-render",(835981146)),new cljs.core.Keyword(null,"normalize","normalize",(-1904390051)),new cljs.core.Keyword(null,"prune-tree","prune-tree",(142138431))],[pathopt,id_key,instrument,merge_ident,merge_sends,remotes,migrate,easy_reads,om.next.cache.cache.call(null,history),state_SINGLEQUOTE_,merge,shared_fn,parser,ui__GT_props,logger,idxr,root_unmount,send,shared,merge_tree,optimize,root_render,(function (){var or__20817__auto__ = !(norm_QMARK_);
if(or__20817__auto__){
return or__20817__auto__;
} else {
return normalize;
}
})(),prune_tree]),cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"normalized","normalized",(-1887621663)),new cljs.core.Keyword(null,"remove","remove",(-131428414)),new cljs.core.Keyword(null,"queue","queue",(1455835879)),new cljs.core.Keyword(null,"sends-queued","sends-queued",(-1276878712)),new cljs.core.Keyword(null,"queued-sends","queued-sends",(278114765)),new cljs.core.Keyword(null,"queued","queued",(1701634607)),new cljs.core.Keyword(null,"render","render",(-1408033454)),new cljs.core.Keyword(null,"root","root",(-448657453)),new cljs.core.Keyword(null,"t","t",(-1397832519)),new cljs.core.Keyword(null,"target","target",(253001721))],[norm_QMARK_,null,cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,false,null,null,(0),null])),null,null,null));
return ret;
}); return (
new cljs.core.Var(function(){return om.next.reconciler;},new cljs.core.Symbol("om.next","reconciler","om.next/reconciler",(-2009498370),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),"om/next.cljc",(17),(1),(2701),(2701),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"config","config",(-1659574354),null),new cljs.core.Keyword(null,"or","or",(235744169)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"root-render","root-render",(-1818454623),null),new cljs.core.Symbol(null,"prune-tree","prune-tree",(1782669958),null),new cljs.core.Symbol(null,"pathopt","pathopt",(1579458378),null),new cljs.core.Symbol(null,"merge-sends","merge-sends",(-77902675),null),new cljs.core.Symbol(null,"merge-ident","merge-ident",(-1613593907),null),new cljs.core.Symbol(null,"remotes","remotes",(-1522069457),null),new cljs.core.Symbol(null,"migrate","migrate",(1433420784),null),new cljs.core.Symbol(null,"easy-reads","easy-reads",(-1850768302),null),new cljs.core.Symbol(null,"history","history",(1393136307),null),new cljs.core.Symbol(null,"merge","merge",(-163787882),null),new cljs.core.Symbol(null,"ui->props","ui->props",(1402550425),null),new cljs.core.Symbol(null,"indexer","indexer",(-134382788),null),new cljs.core.Symbol(null,"root-unmount","root-unmount",(-961534980),null),new cljs.core.Symbol(null,"merge-tree","merge-tree",(1512670366),null),new cljs.core.Symbol(null,"optimize","optimize",(-271817921),null)],[cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__198#","p1__198#",(-194192331),null),new cljs.core.Symbol(null,"p2__199#","p2__199#",(853517307),null)], null),cljs.core.list(new cljs.core.Symbol("js","ReactDOM.render","js/ReactDOM.render",(167810325),null),new cljs.core.Symbol(null,"p1__198#","p1__198#",(-194192331),null),new cljs.core.Symbol(null,"p2__199#","p2__199#",(853517307),null))),new cljs.core.Symbol(null,"default-extract-errors","default-extract-errors",(653043317),null),false,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__196#","p1__196#",(2111904790),null),new cljs.core.Symbol(null,"p2__197#","p2__197#",(-1192097053),null)], null),cljs.core.list(new cljs.core.Symbol(null,"merge-with","merge-with",(1025434534),null),new cljs.core.Symbol(null,"into","into",(1489695498),null),new cljs.core.Symbol(null,"p1__196#","p1__196#",(2111904790),null),new cljs.core.Symbol(null,"p2__197#","p2__197#",(-1192097053),null))),new cljs.core.Symbol(null,"default-merge-ident","default-merge-ident",(-1537549975),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",(-1593576576))], null),new cljs.core.Symbol(null,"default-migrate","default-migrate",(642510251),null),true,(100),new cljs.core.Symbol(null,"default-merge","default-merge",(-2131978558),null),new cljs.core.Symbol(null,"default-ui->props","default-ui->props",(-528380117),null),new cljs.core.Symbol("om.next","indexer","om.next/indexer",(1129162801),null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__200#","p1__200#",(-1683511867),null)], null),cljs.core.list(new cljs.core.Symbol("js","ReactDOM.unmountComponentAtNode","js/ReactDOM.unmountComponentAtNode",(934113739),null),new cljs.core.Symbol(null,"p1__200#","p1__200#",(-1683511867),null))),new cljs.core.Symbol(null,"default-merge-tree","default-merge-tree",(-1103624561),null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",(465265323),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cs","cs",(-117024463),null)], null),cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",(1317932224),null),new cljs.core.Symbol(null,"depth","depth",(-885772129),null),new cljs.core.Symbol(null,"cs","cs",(-117024463),null)))]),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"shared","shared",(1256385534),null),new cljs.core.Symbol(null,"shared-fn","shared-fn",(1460271383),null),new cljs.core.Symbol(null,"parser","parser",(97036217),null),new cljs.core.Symbol(null,"indexer","indexer",(-134382788),null),new cljs.core.Symbol(null,"ui->props","ui->props",(1402550425),null),new cljs.core.Symbol(null,"normalize","normalize",(-263858524),null),new cljs.core.Symbol(null,"send","send",(988380413),null),new cljs.core.Symbol(null,"merge-sends","merge-sends",(-77902675),null),new cljs.core.Symbol(null,"remotes","remotes",(-1522069457),null),new cljs.core.Symbol(null,"merge","merge",(-163787882),null),new cljs.core.Symbol(null,"merge-tree","merge-tree",(1512670366),null),new cljs.core.Symbol(null,"merge-ident","merge-ident",(-1613593907),null),new cljs.core.Symbol(null,"prune-tree","prune-tree",(1782669958),null),new cljs.core.Symbol(null,"optimize","optimize",(-271817921),null),new cljs.core.Symbol(null,"history","history",(1393136307),null),new cljs.core.Symbol(null,"root-render","root-render",(-1818454623),null),new cljs.core.Symbol(null,"root-unmount","root-unmount",(-961534980),null),new cljs.core.Symbol(null,"pathopt","pathopt",(1579458378),null),new cljs.core.Symbol(null,"migrate","migrate",(1433420784),null),new cljs.core.Symbol(null,"id-key","id-key",(-241198517),null),new cljs.core.Symbol(null,"instrument","instrument",(679832683),null),new cljs.core.Symbol(null,"easy-reads","easy-reads",(-1850768302),null)], null)], null)], null)),"Construct a reconciler from a configuration map.\n\n   Required parameters:\n     :state        - the application state. If IAtom value is not supplied the\n                     data will be normalized into the default database format\n                     using the root query. This can be disabled by explicitly\n                     setting the optional :normalize parameter to false.\n     :parser       - the parser to be used\n\n   Optional parameters:\n     :shared       - a map of global shared properties for the component tree.\n     :shared-fn    - a function to compute global shared properties from the root props.\n                     the result is merged with :shared.\n     :send         - required only if the parser will return a non-empty value when\n                     run against the supplied :remotes. send is a function of two\n                     arguments, the map of remote expressions keyed by remote target\n                     and a callback which should be invoked with the result from each\n                     remote target. Note this means the callback can be invoked\n                     multiple times to support parallel fetching and incremental\n                     loading if desired. The callback should take the response as the\n                     first argument and the the query that was sent as the second\n                     argument.\n     :normalize    - whether the state should be normalized. If true it is assumed\n                     all novelty introduced into the system will also need\n                     normalization.\n     :remotes      - a vector of keywords representing remote services which can\n                     evaluate query expressions. Defaults to [:remote]\n     :root-render  - the root render function. Defaults to ReactDOM.render\n     :root-unmount - the root unmount function. Defaults to\n                     ReactDOM.unmountComponentAtNode\n     :logger       - supply a goog.log compatible logger",(cljs.core.truth_(om.next.reconciler)?om.next.reconciler.cljs$lang$test:null)])));})()
;
/**
 * Returns true if x is a reconciler.
 */
(function (){
om.next.reconciler_QMARK_ = (function om$next$reconciler_QMARK_(x){
return (x instanceof om.next.Reconciler);
}); return (
new cljs.core.Var(function(){return om.next.reconciler_QMARK_;},new cljs.core.Symbol("om.next","reconciler?","om.next/reconciler?",(2051175409),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"reconciler?","reconciler?",(250756342),null),"om/next.cljc",(18),(1),(2794),(2794),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Returns true if x is a reconciler.",((om.next.reconciler_QMARK_)?om.next.reconciler_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Return the reconciler's application state atom. Useful when the reconciler
 * was initialized via denormalized data.
 */
(function (){
om.next.app_state = (function om$next$app_state(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",(994861415)).cljs$core$IFn$_invoke$arity$1(reconciler));
}); return (
new cljs.core.Var(function(){return om.next.app_state;},new cljs.core.Symbol("om.next","app-state","om.next/app-state",(1398276902),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"app-state","app-state",(130568249),null),"om/next.cljc",(16),(1),(2800),(2800),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null)], null)),"Return the reconciler's application state atom. Useful when the reconciler\n   was initialized via denormalized data.",(cljs.core.truth_(om.next.app_state)?om.next.app_state.cljs$lang$test:null)])));})()
;
/**
 * Return the application's root component.
 */
(function (){
om.next.app_root = (function om$next$app_root(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(reconciler)),new cljs.core.Keyword(null,"root","root",(-448657453)));
}); return (
new cljs.core.Var(function(){return om.next.app_root;},new cljs.core.Symbol("om.next","app-root","om.next/app-root",(339259018),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"app-root","app-root",(-930579063),null),"om/next.cljc",(15),(1),(2807),(2807),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null)], null)),"Return the application's root component.",(cljs.core.truth_(om.next.app_root)?om.next.app_root.cljs$lang$test:null)])));})()
;
/**
 * Force a re-render of the root. Not recommended for anything except
 * recomputing :shared.
 */
(function (){
om.next.force_root_render_BANG_ = (function om$next$force_root_render_BANG_(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",(-1988618099)).cljs$core$IFn$_invoke$arity$1(reconciler)),new cljs.core.Keyword(null,"render","render",(-1408033454))).call(null);
}); return (
new cljs.core.Var(function(){return om.next.force_root_render_BANG_;},new cljs.core.Symbol("om.next","force-root-render!","om.next/force-root-render!",(-1675084379),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"force-root-render!","force-root-render!",(-908489056),null),"om/next.cljc",(25),(1),(2813),(2813),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null)], null)),"Force a re-render of the root. Not recommended for anything except\n   recomputing :shared.",(cljs.core.truth_(om.next.force_root_render_BANG_)?om.next.force_root_render_BANG_.cljs$lang$test:null)])));})()
;
/**
 * Given a reconciler and UUID return the application state snapshost
 * from history associated with the UUID. The size of the reconciler history
 * may be configured by the :history option when constructing the reconciler.
 */
(function (){
om.next.from_history = (function om$next$from_history(reconciler,uuid){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"history","history",(-247395220)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",(994861415)).cljs$core$IFn$_invoke$arity$1(reconciler)).get(uuid);
}); return (
new cljs.core.Var(function(){return om.next.from_history;},new cljs.core.Symbol("om.next","from-history","om.next/from-history",(-378335800),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"from-history","from-history",(-1243390261),null),"om/next.cljc",(19),(1),(2820),(2820),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",(-192295439),null),new cljs.core.Symbol(null,"uuid","uuid",(-504564192),null)], null)),"Given a reconciler and UUID return the application state snapshost\n   from history associated with the UUID. The size of the reconciler history\n   may be configured by the :history option when constructing the reconciler.",(cljs.core.truth_(om.next.from_history)?om.next.from_history.cljs$lang$test:null)])));})()
;
/**
 * Return a temporary id.
 */
(function (){
om.next.tempid = (function om$next$tempid(var_args){
var args2542 = [];
var len__23656__auto___2545 = arguments.length;
var i__23657__auto___2546 = (0);
while(true){
if((i__23657__auto___2546 < len__23656__auto___2545)){
args2542.push((arguments[i__23657__auto___2546]));

var G__2547 = (i__23657__auto___2546 + (1));
i__23657__auto___2546 = G__2547;
continue;
} else {
}
break;
}

var G__2544 = args2542.length;
switch (G__2544) {
case (0):
return om.next.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return om.next.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2542.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next.tempid;},new cljs.core.Symbol("om.next","tempid","om.next/tempid",(1800417470),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"tempid","tempid",(-1226772547),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2828),(2828),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null)),"Return a temporary id.",(cljs.core.truth_(om.next.tempid)?om.next.tempid.cljs$lang$test:null)])));})()
;

om.next.tempid.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.tempid.tempid.call(null);
});

om.next.tempid.cljs$core$IFn$_invoke$arity$1 = (function (id){
return om.tempid.tempid.call(null,id);
});

om.next.tempid.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return om.next.tempid;},new cljs.core.Symbol("om.next","tempid","om.next/tempid",(1800417470),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"tempid","tempid",(-1226772547),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2828),(2828),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null)),"Return a temporary id.",(cljs.core.truth_(om.next.tempid)?om.next.tempid.cljs$lang$test:null)]));
/**
 * Return true if x is a tempid, false otherwise
 */
(function (){
om.next.tempid_QMARK_ = (function om$next$tempid_QMARK_(x){
return om.tempid.tempid_QMARK_.call(null,x);
}); return (
new cljs.core.Var(function(){return om.next.tempid_QMARK_;},new cljs.core.Symbol("om.next","tempid?","om.next/tempid?",(-824774782),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"tempid?","tempid?",(2034653313),null),"om/next.cljc",(14),(1),(2833),(2833),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Return true if x is a tempid, false otherwise",((om.next.tempid_QMARK_)?om.next.tempid_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Create a Om Next transit reader. This reader can handler the tempid type.
 * Can pass transit reader customization opts map.
 */
(function (){
om.next.reader = (function om$next$reader(var_args){
var args2549 = [];
var len__23656__auto___2552 = arguments.length;
var i__23657__auto___2553 = (0);
while(true){
if((i__23657__auto___2553 < len__23656__auto___2552)){
args2549.push((arguments[i__23657__auto___2553]));

var G__2554 = (i__23657__auto___2553 + (1));
i__23657__auto___2553 = G__2554;
continue;
} else {
}
break;
}

var G__2551 = args2549.length;
switch (G__2551) {
case (0):
return om.next.reader.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return om.next.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2549.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next.reader;},new cljs.core.Symbol("om.next","reader","om.next/reader",(-1753554719),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"reader","reader",(1810192380),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2839),(2839),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Create a Om Next transit reader. This reader can handler the tempid type.\n   Can pass transit reader customization opts map.",(cljs.core.truth_(om.next.reader)?om.next.reader.cljs$lang$test:null)])));})()
;

om.next.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.reader.call(null);
});

om.next.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.reader.call(null,opts);
});

om.next.reader.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return om.next.reader;},new cljs.core.Symbol("om.next","reader","om.next/reader",(-1753554719),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"reader","reader",(1810192380),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2839),(2839),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Create a Om Next transit reader. This reader can handler the tempid type.\n   Can pass transit reader customization opts map.",(cljs.core.truth_(om.next.reader)?om.next.reader.cljs$lang$test:null)]));
/**
 * Create a Om Next transit writer. This writer can handler the tempid type.
 * Can pass transit writer customization opts map.
 */
(function (){
om.next.writer = (function om$next$writer(var_args){
var args2556 = [];
var len__23656__auto___2559 = arguments.length;
var i__23657__auto___2560 = (0);
while(true){
if((i__23657__auto___2560 < len__23656__auto___2559)){
args2556.push((arguments[i__23657__auto___2560]));

var G__2561 = (i__23657__auto___2560 + (1));
i__23657__auto___2560 = G__2561;
continue;
} else {
}
break;
}

var G__2558 = args2556.length;
switch (G__2558) {
case (0):
return om.next.writer.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return om.next.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2556.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next.writer;},new cljs.core.Symbol("om.next","writer","om.next/writer",(-2052220834),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"writer","writer",(1362963291),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2845),(2845),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Create a Om Next transit writer. This writer can handler the tempid type.\n   Can pass transit writer customization opts map.",(cljs.core.truth_(om.next.writer)?om.next.writer.cljs$lang$test:null)])));})()
;

om.next.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.writer.call(null);
});

om.next.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.writer.call(null,opts);
});

om.next.writer.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return om.next.writer;},new cljs.core.Symbol("om.next","writer","om.next/writer",(-2052220834),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"writer","writer",(1362963291),null),"om/next.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2845),(2845),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Create a Om Next transit writer. This writer can handler the tempid type.\n   Can pass transit writer customization opts map.",(cljs.core.truth_(om.next.writer)?om.next.writer.cljs$lang$test:null)]));
/**
 * Given a query expression return an equivalent query expression that can be
 * spliced into a transaction that will force a read of that key from the
 * specified remote target.
 */
(function (){
om.next.force = (function om$next$force(var_args){
var args2563 = [];
var len__23656__auto___2566 = arguments.length;
var i__23657__auto___2567 = (0);
while(true){
if((i__23657__auto___2567 < len__23656__auto___2566)){
args2563.push((arguments[i__23657__auto___2567]));

var G__2568 = (i__23657__auto___2567 + (1));
i__23657__auto___2567 = G__2568;
continue;
} else {
}
break;
}

var G__2565 = args2563.length;
switch (G__2565) {
case (1):
return om.next.force.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return om.next.force.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2563.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.next.force;},new cljs.core.Symbol("om.next","force","om.next/force",(1070919662),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"force","force",(-1872478483),null),"om/next.cljc",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"target","target",(1893533248),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"target","target",(1893533248),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2851),(2851),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"target","target",(1893533248),null)], null)),"Given a query expression return an equivalent query expression that can be\n   spliced into a transaction that will force a read of that key from the\n   specified remote target.",(cljs.core.truth_(om.next.force)?om.next.force.cljs$lang$test:null)])));})()
;

om.next.force.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return om.next.force.call(null,expr,new cljs.core.Keyword(null,"remote","remote",(-1593576576)));
});

om.next.force.cljs$core$IFn$_invoke$arity$2 = (function (expr,target){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,(function (){var x__23399__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",(253001721)),target], null));
});

om.next.force.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return om.next.force;},new cljs.core.Symbol("om.next","force","om.next/force",(1070919662),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.next","om.next",(-1186024806),null),new cljs.core.Symbol(null,"force","force",(-1872478483),null),"om/next.cljc",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"target","target",(1893533248),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"target","target",(1893533248),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2851),(2851),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null),new cljs.core.Symbol(null,"target","target",(1893533248),null)], null)),"Given a query expression return an equivalent query expression that can be\n   spliced into a transaction that will force a read of that key from the\n   specified remote target.",(cljs.core.truth_(om.next.force)?om.next.force.cljs$lang$test:null)]));
