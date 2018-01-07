// Compiled by ClojureScript 1.9.908 {}
goog.provide('om.next');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.log');
goog.require('om.next.cache');
goog.require('om.next.impl.parser');
goog.require('om.tempid');
goog.require('om.transit');
goog.require('om.util');
goog.require('clojure.zip');
goog.require('om.next.protocols');
goog.require('cljs.analyzer');
goog.require('cljs.analyzer.api');
goog.require('clojure.string');
goog.require('goog.debug.Console');
om.next.collect_statics = (function om$next$collect_statics(dt){
var split_on_static = (function om$next$collect_statics_$_split_on_static(forms){
return cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"static","static",-1440077198,null),null], null), null)),forms);
});
var split_on_symbol = (function om$next$collect_statics_$_split_on_symbol(forms){
return cljs.core.split_with.call(null,cljs.core.complement.call(null,cljs.core.symbol_QMARK_),forms);
});
var dt__$1 = cljs.core.seq.call(null,dt);
var dt_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
var statics = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fields","fields",-1932066230),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"protocols","protocols",-5615896),cljs.core.PersistentVector.EMPTY], null);
while(true){
if(dt__$1){
var vec__20944 = split_on_static.call(null,dt__$1);
var pre = cljs.core.nth.call(null,vec__20944,(0),null);
var vec__20947 = cljs.core.nth.call(null,vec__20944,(1),null);
var seq__20948 = cljs.core.seq.call(null,vec__20947);
var first__20949 = cljs.core.first.call(null,seq__20948);
var seq__20948__$1 = cljs.core.next.call(null,seq__20948);
var _ = first__20949;
var first__20949__$1 = cljs.core.first.call(null,seq__20948__$1);
var seq__20948__$2 = cljs.core.next.call(null,seq__20948__$1);
var sym = first__20949__$1;
var remaining = seq__20948__$2;
var post = vec__20947;
var dt_SINGLEQUOTE___$1 = cljs.core.into.call(null,dt_SINGLEQUOTE_,pre);
if(cljs.core.seq.call(null,post)){
if(cljs.core._EQ_.call(null,sym,new cljs.core.Symbol(null,"field","field",338095027,null))){
var vec__20950 = cljs.core.split_at.call(null,(2),remaining);
var field_info = cljs.core.nth.call(null,vec__20950,(0),null);
var dt__$2 = cljs.core.nth.call(null,vec__20950,(1),null);
var G__20956 = cljs.core.seq.call(null,dt__$2);
var G__20957 = dt_SINGLEQUOTE___$1;
var G__20958 = cljs.core.update_in.call(null,statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fields","fields",-1932066230)], null),cljs.core.conj,cljs.core.vec.call(null,field_info));
dt__$1 = G__20956;
dt_SINGLEQUOTE_ = G__20957;
statics = G__20958;
continue;
} else {
if((sym instanceof cljs.core.Symbol)){
var vec__20953 = split_on_symbol.call(null,remaining);
var protocol_info = cljs.core.nth.call(null,vec__20953,(0),null);
var dt__$2 = cljs.core.nth.call(null,vec__20953,(1),null);
var G__20959 = cljs.core.seq.call(null,dt__$2);
var G__20960 = dt_SINGLEQUOTE___$1;
var G__20961 = cljs.core.update_in.call(null,statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocols","protocols",-5615896)], null),cljs.core.into,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym], null),protocol_info));
dt__$1 = G__20959;
dt_SINGLEQUOTE_ = G__20960;
statics = G__20961;
continue;
} else {
throw (new Error("Malformed static"));

}
}
} else {
var G__20962 = null;
var G__20963 = dt_SINGLEQUOTE___$1;
var G__20964 = statics;
dt__$1 = G__20962;
dt_SINGLEQUOTE_ = G__20963;
statics = G__20964;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dt","dt",-368444759),dt_SINGLEQUOTE_,new cljs.core.Keyword(null,"statics","statics",-1984882809),statics], null);
}
break;
}
});
om.next.validate_statics = (function om$next$validate_statics(dt){
var temp__6753__auto__ = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["IQueryParams",null,"IQuery",null,"Ident",null], null), null),cljs.core.map.call(null,(function (p1__20965_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20965_SHARP_)].join(''),/\//));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,dt)));
if(cljs.core.truth_(temp__6753__auto__)){
var invalid = temp__6753__auto__;
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(invalid)," protocol declaration must appear with `static`."].join('')));
} else {
return null;
}
});
om.next.lifecycle_sigs = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"initLocalState","initLocalState",1594027651,null),new cljs.core.Symbol(null,"componentWillMount","componentWillMount",1355203908,null),new cljs.core.Symbol(null,"componentDidUpdate","componentDidUpdate",-342946454,null),new cljs.core.Symbol(null,"componentWillUnmount","componentWillUnmount",-1080646955,null),new cljs.core.Symbol(null,"componentWillReceiveProps","componentWillReceiveProps",-2094446795,null),new cljs.core.Symbol(null,"shouldComponentUpdate","shouldComponentUpdate",-858684809,null),new cljs.core.Symbol(null,"render","render",232498073,null),new cljs.core.Symbol(null,"componentWillUpdate","componentWillUpdate",-1997044837,null),new cljs.core.Symbol(null,"componentDidMount","componentDidMount",-1698724833,null)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"prev-props","prev-props",1081981230,null),new cljs.core.Symbol(null,"prev-state","prev-state",1365252518,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"next-props","next-props",-266324026,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"next-props","next-props",-266324026,null),new cljs.core.Symbol(null,"next-state","next-state",211803275,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"next-props","next-props",-266324026,null),new cljs.core.Symbol(null,"next-state","next-state",211803275,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null)]);
om.next.validate_sig = (function om$next$validate_sig(p__20966){
var vec__20967 = p__20966;
var name = cljs.core.nth.call(null,vec__20967,(0),null);
var sig = cljs.core.nth.call(null,vec__20967,(1),null);
var method = vec__20967;
var sig_SINGLEQUOTE_ = cljs.core.get.call(null,om.next.lifecycle_sigs,name);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,sig_SINGLEQUOTE_),cljs.core.count.call(null,sig))){
return null;
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Invalid signature for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig),", need ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig_SINGLEQUOTE_)].join('')),"\n","(= (count sig') (count sig))"].join('')));
}
});
om.next.reshape_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reshape","reshape",1588089910),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"initLocalState","initLocalState",1594027651,null),(function (p__21013){
var vec__21014 = p__21013;
var seq__21015 = cljs.core.seq.call(null,vec__21014);
var first__21016 = cljs.core.first.call(null,seq__21015);
var seq__21015__$1 = cljs.core.next.call(null,seq__21015);
var name = first__21016;
var first__21016__$1 = cljs.core.first.call(null,seq__21015__$1);
var seq__21015__$2 = cljs.core.next.call(null,seq__21015__$1);
var vec__21017 = first__21016__$1;
var this$ = cljs.core.nth.call(null,vec__21017,(0),null);
var args = vec__21017;
var body = seq__21015__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9317__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__20977__auto__","ret__20977__auto__",-380922482,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","js-obj","cljs.core/js-obj",1009370607,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__20977__auto__","ret__20977__auto__",-380922482,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
}),new cljs.core.Symbol(null,"componentWillReceiveProps","componentWillReceiveProps",-2094446795,null),(function (p__21020){
var vec__21021 = p__21020;
var seq__21022 = cljs.core.seq.call(null,vec__21021);
var first__21023 = cljs.core.first.call(null,seq__21022);
var seq__21022__$1 = cljs.core.next.call(null,seq__21022);
var name = first__21023;
var first__21023__$1 = cljs.core.first.call(null,seq__21022__$1);
var seq__21022__$2 = cljs.core.next.call(null,seq__21022__$1);
var vec__21024 = first__21023__$1;
var this$ = cljs.core.nth.call(null,vec__21024,(0),null);
var next_props = cljs.core.nth.call(null,vec__21024,(1),null);
var args = vec__21024;
var body = seq__21022__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9317__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20978__auto__","this__20978__auto__",-1019745370,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__20979__auto__","next-props__20979__auto__",-658113891,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9317__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20978__auto__","this__20978__auto__",-1019745370,null)),(function (){var x__9317__auto__ = next_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-next-props","om.next/-next-props",1700067080,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__20979__auto__","next-props__20979__auto__",-658113891,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20978__auto__","this__20978__auto__",-1019745370,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
}),new cljs.core.Symbol(null,"componentWillUpdate","componentWillUpdate",-1997044837,null),(function (p__21027){
var vec__21028 = p__21027;
var seq__21029 = cljs.core.seq.call(null,vec__21028);
var first__21030 = cljs.core.first.call(null,seq__21029);
var seq__21029__$1 = cljs.core.next.call(null,seq__21029);
var name = first__21030;
var first__21030__$1 = cljs.core.first.call(null,seq__21029__$1);
var seq__21029__$2 = cljs.core.next.call(null,seq__21029__$1);
var vec__21031 = first__21030__$1;
var this$ = cljs.core.nth.call(null,vec__21031,(0),null);
var next_props = cljs.core.nth.call(null,vec__21031,(1),null);
var next_state = cljs.core.nth.call(null,vec__21031,(2),null);
var args = vec__21031;
var body = seq__21029__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9317__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20980__auto__","this__20980__auto__",458164191,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__20981__auto__","next-props__20981__auto__",541908884,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__20982__auto__","next-state__20982__auto__",-1533686900,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9317__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20980__auto__","this__20980__auto__",458164191,null)),(function (){var x__9317__auto__ = next_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-next-props","om.next/-next-props",1700067080,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__20981__auto__","next-props__20981__auto__",541908884,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20980__auto__","this__20980__auto__",458164191,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = next_state;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__20982__auto__","next-state__20982__auto__",-1533686900,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$pendingState"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__20982__auto__","next-state__20982__auto__",-1533686900,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__20983__auto__","ret__20983__auto__",-430339143,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","implements?","cljs.core/implements?",-251485149,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","Ident","om.next/Ident",-1165621946,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20980__auto__","this__20980__auto__",458164191,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__20984__auto__","ident__20984__auto__",1016185107,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",-1255218310,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20980__auto__","this__20980__auto__",458164191,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","props","om.next/props",679329025,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20980__auto__","this__20980__auto__",458164191,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__20985__auto__","next-ident__20985__auto__",10568658,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",-1255218310,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20980__auto__","this__20980__auto__",458164191,null)),(function (){var x__9317__auto__ = next_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__20984__auto__","ident__20984__auto__",1016185107,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__20985__auto__","next-ident__20985__auto__",10568658,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__20986__auto__","idxr__20986__auto__",-1397207849,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20980__auto__","this__20980__auto__",458164191,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__20986__auto__","idxr__20986__auto__",-1397207849,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexes","indexes",1496475545)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__20986__auto__","idxr__20986__auto__",-1397207849,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__20987__auto__","indexes__20987__auto__",2011605938,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__20987__auto__","indexes__20987__auto__",2011605938,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__20984__auto__","ident__20984__auto__",1016185107,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","disj","cljs.core/disj",1679005177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20980__auto__","this__20980__auto__",458164191,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__20985__auto__","next-ident__20985__auto__",10568658,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fnil","cljs.core/fnil",479587341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null)),(function (){var x__9317__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20980__auto__","this__20980__auto__",458164191,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-props!","om.next/merge-pending-props!",-1035300673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20980__auto__","this__20980__auto__",458164191,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-state!","om.next/merge-pending-state!",1487578810,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20980__auto__","this__20980__auto__",458164191,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__20983__auto__","ret__20983__auto__",-430339143,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
}),new cljs.core.Symbol(null,"componentDidUpdate","componentDidUpdate",-342946454,null),(function (p__21034){
var vec__21035 = p__21034;
var seq__21036 = cljs.core.seq.call(null,vec__21035);
var first__21037 = cljs.core.first.call(null,seq__21036);
var seq__21036__$1 = cljs.core.next.call(null,seq__21036);
var name = first__21037;
var first__21037__$1 = cljs.core.first.call(null,seq__21036__$1);
var seq__21036__$2 = cljs.core.next.call(null,seq__21036__$1);
var vec__21038 = first__21037__$1;
var this$ = cljs.core.nth.call(null,vec__21038,(0),null);
var prev_props = cljs.core.nth.call(null,vec__21038,(1),null);
var prev_state = cljs.core.nth.call(null,vec__21038,(2),null);
var args = vec__21038;
var body = seq__21036__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9317__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20988__auto__","this__20988__auto__",-1187434153,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-props__20989__auto__","prev-props__20989__auto__",-1279429151,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-state__20990__auto__","prev-state__20990__auto__",732858241,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9317__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20988__auto__","this__20988__auto__",-1187434153,null)),(function (){var x__9317__auto__ = prev_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prev-props","om.next/-prev-props",-1189686117,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-props__20989__auto__","prev-props__20989__auto__",-1279429151,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20988__auto__","this__20988__auto__",-1187434153,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = prev_state;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-state__20990__auto__","prev-state__20990__auto__",732858241,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$previousState"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),body,(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","clear-prev-props!","om.next/clear-prev-props!",1240655595,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20988__auto__","this__20988__auto__",-1187434153,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
}),new cljs.core.Symbol(null,"componentWillMount","componentWillMount",1355203908,null),(function (p__21041){
var vec__21042 = p__21041;
var seq__21043 = cljs.core.seq.call(null,vec__21042);
var first__21044 = cljs.core.first.call(null,seq__21043);
var seq__21043__$1 = cljs.core.next.call(null,seq__21043);
var name = first__21044;
var first__21044__$1 = cljs.core.first.call(null,seq__21043__$1);
var seq__21043__$2 = cljs.core.next.call(null,seq__21043__$1);
var vec__21045 = first__21044__$1;
var this$ = cljs.core.nth.call(null,vec__21045,(0),null);
var args = vec__21045;
var body = seq__21043__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9317__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20991__auto__","this__20991__auto__",-445797612,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9317__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20991__auto__","this__20991__auto__",-445797612,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__20992__auto__","indexer__20992__auto__",371870410,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20991__auto__","this__20991__auto__",-445797612,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__20992__auto__","indexer__20992__auto__",371870410,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","index-component!","om.next.protocols/index-component!",-1047911549,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__20992__auto__","indexer__20992__auto__",371870410,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20991__auto__","this__20991__auto__",-445797612,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
}),new cljs.core.Symbol(null,"componentWillUnmount","componentWillUnmount",-1080646955,null),(function (p__21048){
var vec__21049 = p__21048;
var seq__21050 = cljs.core.seq.call(null,vec__21049);
var first__21051 = cljs.core.first.call(null,seq__21050);
var seq__21050__$1 = cljs.core.next.call(null,seq__21050);
var name = first__21051;
var first__21051__$1 = cljs.core.first.call(null,seq__21050__$1);
var seq__21050__$2 = cljs.core.next.call(null,seq__21050__$1);
var vec__21052 = first__21051__$1;
var this$ = cljs.core.nth.call(null,vec__21052,(0),null);
var args = vec__21052;
var body = seq__21050__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9317__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20993__auto__","this__20993__auto__",-1057407340,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9317__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20993__auto__","this__20993__auto__",-1057407340,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__20994__auto__","r__20994__auto__",1837311851,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20993__auto__","this__20993__auto__",-1057407340,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__20995__auto__","cfg__20995__auto__",-1962279418,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__20994__auto__","r__20994__auto__",1837311851,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__20996__auto__","st__20996__auto__",-2004731245,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"state","state",-1988618099)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__20995__auto__","cfg__20995__auto__",-1962279418,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__20997__auto__","indexer__20997__auto__",-604781630,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__20995__auto__","cfg__20995__auto__",-1962279418,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__20996__auto__","st__20996__auto__",-2004731245,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__20996__auto__","st__20996__auto__",-2004731245,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20993__auto__","this__20993__auto__",-1057407340,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__20996__auto__","st__20996__auto__",-2004731245,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20993__auto__","this__20993__auto__",-1057407340,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__20997__auto__","indexer__20997__auto__",-604781630,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","drop-component!","om.next.protocols/drop-component!",1227662523,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__20997__auto__","indexer__20997__auto__",-604781630,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20993__auto__","this__20993__auto__",-1057407340,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
}),new cljs.core.Symbol(null,"render","render",232498073,null),(function (p__21055){
var vec__21056 = p__21055;
var seq__21057 = cljs.core.seq.call(null,vec__21056);
var first__21058 = cljs.core.first.call(null,seq__21057);
var seq__21057__$1 = cljs.core.next.call(null,seq__21057);
var name = first__21058;
var first__21058__$1 = cljs.core.first.call(null,seq__21057__$1);
var seq__21057__$2 = cljs.core.next.call(null,seq__21057__$1);
var vec__21059 = first__21058__$1;
var this$ = cljs.core.nth.call(null,vec__21059,(0),null);
var args = vec__21059;
var body = seq__21057__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9317__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20998__auto__","this__20998__auto__",-1097702094,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9317__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20998__auto__","this__20998__auto__",-1097702094,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*reconciler*","om.next/*reconciler*",2063201960,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20998__auto__","this__20998__auto__",-1097702094,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*depth*","om.next/*depth*",161261240,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","depth","om.next/depth",-1750843006,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20998__auto__","this__20998__auto__",-1097702094,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*shared*","om.next/*shared*",-270307055,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","shared","om.next/shared",426941171,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20998__auto__","this__20998__auto__",-1097702094,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*instrument*","om.next/*instrument*",-1428199886,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","instrument","om.next/instrument",1410710376,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20998__auto__","this__20998__auto__",-1097702094,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*parent*","om.next/*parent*",-764653121,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20998__auto__","this__20998__auto__",-1097702094,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
})], null),new cljs.core.Keyword(null,"defaults","defaults",976027214),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"isMounted","isMounted",-1263254906,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","boolean","cljs.core/boolean",-1222483266,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","getValueByKeys","goog.object/getValueByKeys",-1135358948,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_reactInternalInstance"),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_renderedComponent"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"shouldComponentUpdate","shouldComponentUpdate",-858684809,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__21000__auto__","next-props__21000__auto__",-1738077425,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__21001__auto__","next-state__21001__auto__",-1289238155,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-children__21002__auto__","next-children__21002__auto__",269394045,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__21000__auto__","next-props__21000__auto__",-1738077425,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-children","om.next/-children",-16965396,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__21000__auto__","next-props__21000__auto__",-1738077425,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__21000__auto__","next-props__21000__auto__",-1738077425,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$value"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__21000__auto__","next-props__21000__auto__",-1738077425,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__21000__auto__","next-props__21000__auto__",-1738077425,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","OmProps","om.next/OmProps",-1258962915,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__21000__auto__","next-props__21000__auto__",-1738077425,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","unwrap","om.next/unwrap",-621667282,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","props","om.next/props",679329025,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__21000__auto__","next-props__21000__auto__",-1738077425,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-state","-state",1439972041,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-state","-state",1439972041,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__21001__auto__","next-state__21001__auto__",-1289238155,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-props","om.next/-props",1063294959,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-children","om.next/-children",-16965396,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-children__21002__auto__","next-children__21002__auto__",269394045,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentWillUpdate","componentWillUpdate",-1997044837,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__21000__auto__","next-props__21000__auto__",-1738077425,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__21001__auto__","next-state__21001__auto__",-1289238155,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","implements?","cljs.core/implements?",-251485149,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","Ident","om.next/Ident",-1165621946,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__21003__auto__","ident__21003__auto__",-187935831,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",-1255218310,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","props","om.next/props",679329025,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__21004__auto__","next-ident__21004__auto__",1063636596,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",-1255218310,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-next-props","om.next/-next-props",1700067080,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__21000__auto__","next-props__21000__auto__",-1738077425,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__21003__auto__","ident__21003__auto__",-187935831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__21004__auto__","next-ident__21004__auto__",1063636596,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__21005__auto__","idxr__21005__auto__",-200671706,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__21005__auto__","idxr__21005__auto__",-200671706,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexes","indexes",1496475545)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__21005__auto__","idxr__21005__auto__",-200671706,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__21006__auto__","indexes__21006__auto__",-2072355413,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__21006__auto__","indexes__21006__auto__",-2072355413,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__21003__auto__","ident__21003__auto__",-187935831,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","disj","cljs.core/disj",1679005177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__21004__auto__","next-ident__21004__auto__",1063636596,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fnil","cljs.core/fnil",479587341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null)),(function (){var x__9317__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-props!","om.next/merge-pending-props!",-1035300673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-state!","om.next/merge-pending-state!",1487578810,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentDidUpdate","componentDidUpdate",-342946454,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-props__21007__auto__","prev-props__21007__auto__",-384736994,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-state__21008__auto__","prev-state__21008__auto__",-1688239529,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","clear-prev-props!","om.next/clear-prev-props!",1240655595,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentWillMount","componentWillMount",1355203908,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__21009__auto__","indexer__21009__auto__",1007548309,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__21009__auto__","indexer__21009__auto__",1007548309,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","index-component!","om.next.protocols/index-component!",-1047911549,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__21009__auto__","indexer__21009__auto__",1007548309,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentWillUnmount","componentWillUnmount",-1080646955,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__21010__auto__","r__21010__auto__",-2031350480,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__21011__auto__","cfg__21011__auto__",-2001163481,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__21010__auto__","r__21010__auto__",-2031350480,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__21012__auto__","st__21012__auto__",-575228511,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"state","state",-1988618099)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__21011__auto__","cfg__21011__auto__",-2001163481,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__21009__auto__","indexer__21009__auto__",1007548309,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__21011__auto__","cfg__21011__auto__",-2001163481,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__21012__auto__","st__21012__auto__",-575228511,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__21012__auto__","st__21012__auto__",-575228511,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__21012__auto__","st__21012__auto__",-575228511,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__21009__auto__","indexer__21009__auto__",1007548309,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","drop-component!","om.next.protocols/drop-component!",1227662523,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__21009__auto__","indexer__21009__auto__",1007548309,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20999__auto__","this__20999__auto__",-1546688331,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))))], null);
om.next.reshape = (function om$next$reshape(dt,p__21062){
var map__21063 = p__21062;
var map__21063__$1 = ((((!((map__21063 == null)))?((((map__21063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21063.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21063):map__21063);
var reshape = cljs.core.get.call(null,map__21063__$1,new cljs.core.Keyword(null,"reshape","reshape",1588089910));
var defaults = cljs.core.get.call(null,map__21063__$1,new cljs.core.Keyword(null,"defaults","defaults",976027214));
var reshape_STAR_ = ((function (map__21063,map__21063__$1,reshape,defaults){
return (function om$next$reshape_$_reshape_STAR_(x){
if((cljs.core.sequential_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,reshape,cljs.core.first.call(null,x)))){
var reshapef = cljs.core.get.call(null,reshape,cljs.core.first.call(null,x));
om.next.validate_sig.call(null,x);

return reshapef.call(null,x);
} else {
return x;
}
});})(map__21063,map__21063__$1,reshape,defaults))
;
var add_defaults_step = ((function (map__21063,map__21063__$1,reshape,defaults){
return (function om$next$reshape_$_add_defaults_step(ret,p__21075){
var vec__21076 = p__21075;
var name = cljs.core.nth.call(null,vec__21076,(0),null);
var impl = cljs.core.nth.call(null,vec__21076,(1),null);
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([name]),cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.seq_QMARK_,ret))))){
var vec__21079 = cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"Object","Object",61210754,null),null], null), null)),ret);
var before = cljs.core.nth.call(null,vec__21079,(0),null);
var vec__21082 = cljs.core.nth.call(null,vec__21079,(1),null);
var seq__21083 = cljs.core.seq.call(null,vec__21082);
var first__21084 = cljs.core.first.call(null,seq__21083);
var seq__21083__$1 = cljs.core.next.call(null,seq__21083);
var p = first__21084;
var after = seq__21083__$1;
return cljs.core.into.call(null,cljs.core.conj.call(null,cljs.core.vec.call(null,before),p,cljs.core.cons.call(null,name,impl)),after);
} else {
return ret;
}
});})(map__21063,map__21063__$1,reshape,defaults))
;
var add_defaults = ((function (map__21063,map__21063__$1,reshape,defaults){
return (function om$next$reshape_$_add_defaults(dt__$1){
return cljs.core.reduce.call(null,add_defaults_step,dt__$1,defaults);
});})(map__21063,map__21063__$1,reshape,defaults))
;
var add_object_protocol = ((function (map__21063,map__21063__$1,reshape,defaults){
return (function om$next$reshape_$_add_object_protocol(dt__$1){
if(cljs.core.not.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"Object","Object",61210754,null),null], null), null),dt__$1))){
return cljs.core.conj.call(null,dt__$1,new cljs.core.Symbol(null,"Object","Object",61210754,null));
} else {
return dt__$1;
}
});})(map__21063,map__21063__$1,reshape,defaults))
;
return add_defaults.call(null,add_object_protocol.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,reshape_STAR_,dt))));
});
om.next.defui_STAR_ = (function om$next$defui_STAR_(var_args){
var G__21101 = arguments.length;
switch (G__21101) {
case 2:
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (name,form){
return om.next.defui_STAR_.call(null,name,form,null);
});

om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (name,forms,env){
var field_set_BANG_ = (function om$next$field_set_BANG_(obj,p__21106){
var vec__21107 = p__21106;
var field = cljs.core.nth.call(null,vec__21107,(0),null);
var value = cljs.core.nth.call(null,vec__21107,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9317__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(field)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
});
var docstring = ((typeof cljs.core.first.call(null,forms) === 'string')?cljs.core.first.call(null,forms):null);
var forms__$1 = (function (){var G__21111 = forms;
if(cljs.core.truth_(docstring)){
return cljs.core.rest.call(null,G__21111);
} else {
return G__21111;
}
})();
var map__21110 = om.next.collect_statics.call(null,forms__$1);
var map__21110__$1 = ((((!((map__21110 == null)))?((((map__21110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21110.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21110):map__21110);
var dt = cljs.core.get.call(null,map__21110__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
var statics = cljs.core.get.call(null,map__21110__$1,new cljs.core.Keyword(null,"statics","statics",-1984882809));
var _ = om.next.validate_statics.call(null,dt);
var rname = (cljs.core.truth_(env)?new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),name)):name);
var ctor = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null)),(function (){var x__9317__auto__ = cljs.core.with_meta.call(null,name,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@constructor"], null)], null),cljs.core.meta.call(null,name),(cljs.core.truth_(docstring)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null):null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","this-as","cljs.core/this-as",623378171,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21094__auto__","this__21094__auto__",1727078417,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","React.Component","js/React.Component",752301916,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21094__auto__","this__21094__auto__",1727078417,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","js-arguments","cljs.core/js-arguments",464029257,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-initLocalState",".-initLocalState",-1875308467,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21094__auto__","this__21094__auto__",1727078417,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-state",".-state",2145135971,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21094__auto__","this__21094__auto__",1727078417,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".initLocalState",".initLocalState",-104173886,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21094__auto__","this__21094__auto__",1727078417,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-state",".-state",2145135971,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21094__auto__","this__21094__auto__",1727078417,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","js-obj","cljs.core/js-obj",1009370607,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21094__auto__","this__21094__auto__",1727078417,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
var set_react_proto_BANG_ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__9317__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","clone","goog.object/clone",-508199474,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","React.Component.prototype","js/React.Component.prototype",259217051,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
var ctor__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,name)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","exists?","cljs.core/exists?",1852387968,null)),(function (){var x__9317__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = ctor;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = set_react_proto_BANG_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9317__auto__ = ctor;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = set_react_proto_BANG_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})()))));
var display_name = (cljs.core.truth_(env)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):new cljs.core.Symbol("js","undefined","js/undefined",-329966622,null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9317__auto__ = ctor__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__9317__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),om.next.reshape.call(null,dt,om.next.reshape_map))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9317__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prototype","om.next/-prototype",951061230,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-constructor","om.next/-constructor",-675008524,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9317__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prototype","om.next/-prototype",951061230,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-constructor","om.next/-constructor",-675008524,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-displayName","om.next/-displayName",250349469,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = display_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9317__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prototype","om.next/-prototype",951061230,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-om$isComponent","om.next/-om$isComponent",-1994912590,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core.map.call(null,((function (docstring,forms__$1,map__21110,map__21110__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__21095_SHARP_){
return field_set_BANG_.call(null,name,p1__21095_SHARP_);
});})(docstring,forms__$1,map__21110,map__21110__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name))
,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(statics)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__9317__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core.mapv.call(null,((function (docstring,forms__$1,map__21110,map__21110__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__21096_SHARP_){
var G__21114 = p1__21096_SHARP_;
if((p1__21096_SHARP_ instanceof cljs.core.Symbol)){
return cljs.core.vary_meta.call(null,G__21114,cljs.core.assoc,new cljs.core.Keyword(null,"static","static",1214358571),true);
} else {
return G__21114;
}
});})(docstring,forms__$1,map__21110,map__21110__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name))
,new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(statics)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9317__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(statics))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__9317__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__9317__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__9317__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21097__auto__","this__21097__auto__",1349027820,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__21098__auto__","writer__21098__auto__",1270101374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__21099__auto__","opt__21099__auto__",972240736,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__21098__auto__","writer__21098__auto__",1270101374,null)),(function (){var x__9317__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
});

om.next.defui_STAR_.cljs$lang$maxFixedArity = 3;

var ret__9686__auto___21120 = (function (){
om.next.defui = (function om$next$defui(var_args){
var args__9647__auto__ = [];
var len__9640__auto___21121 = arguments.length;
var i__9641__auto___21122 = (0);
while(true){
if((i__9641__auto___21122 < len__9640__auto___21121)){
args__9647__auto__.push((arguments[i__9641__auto___21122]));

var G__21123 = (i__9641__auto___21122 + (1));
i__9641__auto___21122 = G__21123;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((3) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((3)),(0),null)):null);
return om.next.defui.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9648__auto__);
});

om.next.defui.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,forms){
if(cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return om.next.defui_STAR_.call(null,name,forms,_AMPERSAND_env);
} else {
return null;
}
});

om.next.defui.cljs$lang$maxFixedArity = (3);

om.next.defui.cljs$lang$applyTo = (function (seq21116){
var G__21117 = cljs.core.first.call(null,seq21116);
var seq21116__$1 = cljs.core.next.call(null,seq21116);
var G__21118 = cljs.core.first.call(null,seq21116__$1);
var seq21116__$2 = cljs.core.next.call(null,seq21116__$1);
var G__21119 = cljs.core.first.call(null,seq21116__$2);
var seq21116__$3 = cljs.core.next.call(null,seq21116__$2);
return om.next.defui.cljs$core$IFn$_invoke$arity$variadic(G__21117,G__21118,G__21119,seq21116__$3);
});

return null;
})()
;
om.next.defui.cljs$lang$macro = true;

var ret__9686__auto___21127 = (function (){
om.next.ui = (function om$next$ui(var_args){
var args__9647__auto__ = [];
var len__9640__auto___21128 = arguments.length;
var i__9641__auto___21129 = (0);
while(true){
if((i__9641__auto___21129 < len__9640__auto___21128)){
args__9647__auto__.push((arguments[i__9641__auto___21129]));

var G__21130 = (i__9641__auto___21129 + (1));
i__9641__auto___21129 = G__21130;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((2) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((2)),(0),null)):null);
return om.next.ui.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9648__auto__);
});

om.next.ui.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"ui_"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","defui","om.next/defui",1665242576,null)),(function (){var x__9317__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),forms)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
});

om.next.ui.cljs$lang$maxFixedArity = (2);

om.next.ui.cljs$lang$applyTo = (function (seq21124){
var G__21125 = cljs.core.first.call(null,seq21124);
var seq21124__$1 = cljs.core.next.call(null,seq21124);
var G__21126 = cljs.core.first.call(null,seq21124__$1);
var seq21124__$2 = cljs.core.next.call(null,seq21124__$1);
return om.next.ui.cljs$core$IFn$_invoke$arity$variadic(G__21125,G__21126,seq21124__$2);
});

return null;
})()
;
om.next.ui.cljs$lang$macro = true;

om.next.invariant_STAR_ = (function om$next$invariant_STAR_(condition,message,env){
var opts = cljs.analyzer.api.get_options.call(null);
var fn_scope = new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859).cljs$core$IFn$_invoke$arity$1(env);
var fn_name = (function (){var G__21132 = fn_scope;
var G__21132__$1 = (((G__21132 == null))?null:cljs.core.first.call(null,G__21132));
var G__21132__$2 = (((G__21132__$1 == null))?null:new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__21132__$1));
if((G__21132__$2 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21132__$2)].join('');
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272).cljs$core$IFn$_invoke$arity$1(opts))){
return null;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__9317__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__21131__auto__","l__21131__auto__",-21173016,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*logger*","om.next/*logger*",-530662591,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__9317__auto__ = condition;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.log","error","goog.log/error",-1510663407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__21131__auto__","l__21131__auto__",-21173016,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invariant Violation"),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),(function (){var x__9317__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),(function (){var x__9317__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," (in function: `"),(function (){var x__9317__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"`)"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,": "),(function (){var x__9317__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})())));
}
});
var ret__9686__auto___21133 = om.next.invariant = (function om$next$invariant(_AMPERSAND_form,_AMPERSAND_env,condition,message){
if(cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return om.next.invariant_STAR_.call(null,condition,message,_AMPERSAND_env);
} else {
return null;
}
});
om.next.invariant.cljs$lang$macro = true;

if(typeof om.next._STAR_logger_STAR_ !== 'undefined'){
} else {
om.next._STAR_logger_STAR_ = ((goog.DEBUG)?(function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("om.next");
})()
:null);
}
om.next.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.next._STAR_raf_STAR_ = null;
om.next._STAR_reconciler_STAR_ = null;
om.next._STAR_parent_STAR_ = null;
om.next._STAR_shared_STAR_ = null;
om.next._STAR_instrument_STAR_ = null;
om.next._STAR_depth_STAR_ = (0);
om.next.nil_or_map_QMARK_ = (function om$next$nil_or_map_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_.call(null,x));
});
/**
 * Given a query expression return its key.
 */
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
var G__21134 = expr;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second.call(null,expr))){
return cljs.core.first.call(null,G__21134);
} else {
return G__21134;
}
} else {
throw cljs.core.ex_info.call(null,["Invalid query expr ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",-881565136)], null));

}
}
}
}
});
/**
 * Return a zipper on a query expression.
 */
om.next.query_zip = (function om$next$query_zip(root){
return clojure.zip.zipper.call(null,(function (p1__21135_SHARP_){
return (cljs.core.vector_QMARK_.call(null,p1__21135_SHARP_)) || (cljs.core.map_QMARK_.call(null,p1__21135_SHARP_)) || (cljs.core.seq_QMARK_.call(null,p1__21135_SHARP_));
}),cljs.core.seq,(function (node,children){
var ret = ((cljs.core.vector_QMARK_.call(null,node))?cljs.core.vec.call(null,children):((cljs.core.map_QMARK_.call(null,node))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_.call(null,node))?children:null)));
return cljs.core.with_meta.call(null,ret,cljs.core.meta.call(null,node));
}),root);
});
/**
 * Move from the current zipper location to the specified key. loc must be a
 * hash map node.
 */
om.next.move_to_key = (function om$next$move_to_key(loc,k){
var loc__$1 = clojure.zip.down.call(null,loc);
while(true){
var node = clojure.zip.node.call(null,loc__$1);
if(cljs.core._EQ_.call(null,k,cljs.core.first.call(null,node))){
return clojure.zip.right.call(null,clojure.zip.down.call(null,loc__$1));
} else {
var G__21136 = clojure.zip.right.call(null,loc__$1);
loc__$1 = G__21136;
continue;
}
break;
}
});
/**
 * Given a query and a path into a query return a zipper focused at the location
 * specified by the path. This location can be replaced to customize / alter
 * the query.
 */
om.next.query_template = (function om$next$query_template(query,path){
var query_template_STAR_ = (function om$next$query_template_$_query_template_STAR_(loc,path__$1){
while(true){
if(cljs.core.empty_QMARK_.call(null,path__$1)){
return loc;
} else {
var node = clojure.zip.node.call(null,loc);
if(cljs.core.vector_QMARK_.call(null,node)){
var G__21145 = clojure.zip.down.call(null,loc);
var G__21146 = path__$1;
loc = G__21145;
path__$1 = G__21146;
continue;
} else {
var vec__21141 = path__$1;
var seq__21142 = cljs.core.seq.call(null,vec__21141);
var first__21143 = cljs.core.first.call(null,seq__21142);
var seq__21142__$1 = cljs.core.next.call(null,seq__21142);
var k = first__21143;
var ks = seq__21142__$1;
var k_SINGLEQUOTE_ = om.next.expr__GT_key.call(null,node);
if(cljs.core._EQ_.call(null,k,k_SINGLEQUOTE_)){
if((cljs.core.map_QMARK_.call(null,node)) || ((cljs.core.seq_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,node))))){
var loc_SINGLEQUOTE_ = om.next.move_to_key.call(null,(function (){var G__21144 = loc;
if(cljs.core.seq_QMARK_.call(null,node)){
return clojure.zip.down.call(null,G__21144);
} else {
return G__21144;
}
})(),k);
var node_SINGLEQUOTE_ = clojure.zip.node.call(null,loc_SINGLEQUOTE_);
if(cljs.core.map_QMARK_.call(null,node_SINGLEQUOTE_)){
if(cljs.core.seq.call(null,ks)){
var G__21147 = clojure.zip.replace.call(null,loc_SINGLEQUOTE_,clojure.zip.node.call(null,om.next.move_to_key.call(null,loc_SINGLEQUOTE_,cljs.core.first.call(null,ks))));
var G__21148 = cljs.core.next.call(null,ks);
loc = G__21147;
path__$1 = G__21148;
continue;
} else {
return loc_SINGLEQUOTE_;
}
} else {
var G__21149 = loc_SINGLEQUOTE_;
var G__21150 = ks;
loc = G__21149;
path__$1 = G__21150;
continue;
}
} else {
var G__21151 = clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,loc))));
var G__21152 = ks;
loc = G__21151;
path__$1 = G__21152;
continue;
}
} else {
var G__21153 = clojure.zip.right.call(null,loc);
var G__21154 = path__$1;
loc = G__21153;
path__$1 = G__21154;
continue;
}
}
}
break;
}
});
return query_template_STAR_.call(null,om.next.query_zip.call(null,query),path);
});
om.next.replace = (function om$next$replace(template,new_query){
return clojure.zip.root.call(null,clojure.zip.replace.call(null,template,new_query));
});
om.next.focused_join = (function om$next$focused_join(expr,ks,full_expr,union_expr){
var expr_meta = cljs.core.meta.call(null,expr);
var expr_SINGLEQUOTE_ = ((cljs.core.map_QMARK_.call(null,expr))?(function (){var join_value = cljs.core.second.call(null,cljs.core.first.call(null,expr));
var join_value__$1 = (((om.util.recursion_QMARK_.call(null,join_value)) && (cljs.core.seq.call(null,ks)))?((!((union_expr == null)))?union_expr:full_expr):join_value);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.ffirst.call(null,expr),om.next.focus_query_STAR_.call(null,join_value__$1,ks,null)]);
})():((cljs.core.seq_QMARK_.call(null,expr))?(function (){var x__9317__auto__ = om.next.focused_join.call(null,cljs.core.first.call(null,expr),ks,null,null);
return cljs.core._conj.call(null,(function (){var x__9317__auto____$1 = cljs.core.second.call(null,expr);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto____$1);
})(),x__9317__auto__);
})():expr
));
var G__21155 = expr_SINGLEQUOTE_;
if(!((expr_meta == null))){
return cljs.core.with_meta.call(null,G__21155,expr_meta);
} else {
return G__21155;
}
});
om.next.focus_query_STAR_ = (function om$next$focus_query_STAR_(query,path,union_expr){
if(cljs.core.empty_QMARK_.call(null,path)){
return query;
} else {
var vec__21156 = path;
var seq__21157 = cljs.core.seq.call(null,vec__21156);
var first__21158 = cljs.core.first.call(null,seq__21157);
var seq__21157__$1 = cljs.core.next.call(null,seq__21157);
var k = first__21158;
var ks = seq__21157__$1;
var match = ((function (vec__21156,seq__21157,first__21158,seq__21157__$1,k,ks){
return (function om$next$focus_query_STAR__$_match(x){
return cljs.core._EQ_.call(null,k,om.util.join_key.call(null,x));
});})(vec__21156,seq__21157,first__21158,seq__21157__$1,k,ks))
;
var value = ((function (vec__21156,seq__21157,first__21158,seq__21157__$1,k,ks){
return (function om$next$focus_query_STAR__$_value(x){
return om.next.focused_join.call(null,x,ks,query,union_expr);
});})(vec__21156,seq__21157,first__21158,seq__21157__$1,k,ks))
;
if(cljs.core.map_QMARK_.call(null,query)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,om.next.focus_query_STAR_.call(null,cljs.core.get.call(null,query,k),ks,query)]);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,match),cljs.core.map.call(null,value),cljs.core.take.call(null,(1))),query);
}
}
});
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
om.next.focus_query = (function om$next$focus_query(query,path){
return om.next.focus_query_STAR_.call(null,query,path,null);
});
/**
 * Given a focused query return the path represented by the query.
 * 
 * Examples:
 * 
 *   (om.next/focus->path [{:foo [{:bar {:baz []}]}])
 *   => [:foo :bar :baz]
 */
om.next.focus__GT_path = (function om$next$focus__GT_path(var_args){
var G__21160 = arguments.length;
switch (G__21160) {
case 1:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (focus){
return om.next.focus__GT_path.call(null,focus,new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (focus,bound){
return om.next.focus__GT_path.call(null,focus,bound,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3 = (function (focus,bound,path){
while(true){
if(cljs.core.truth_((function (){var and__8351__auto__ = (cljs.core._EQ_.call(null,bound,new cljs.core.Symbol(null,"*","*",345799209,null))) || ((cljs.core.not_EQ_.call(null,path,bound)) && ((cljs.core.count.call(null,path) < cljs.core.count.call(null,bound))));
if(and__8351__auto__){
var and__8351__auto____$1 = cljs.core.some.call(null,om.util.join_QMARK_,focus);
if(cljs.core.truth_(and__8351__auto____$1)){
return ((1) === cljs.core.count.call(null,focus));
} else {
return and__8351__auto____$1;
}
} else {
return and__8351__auto__;
}
})())){
var vec__21161 = om.util.join_entry.call(null,cljs.core.first.call(null,focus));
var k = cljs.core.nth.call(null,vec__21161,(0),null);
var focus_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__21161,(1),null);
var focus_SINGLEQUOTE___$1 = ((om.util.recursion_QMARK_.call(null,focus_SINGLEQUOTE_))?focus:focus_SINGLEQUOTE_);
var G__21165 = focus_SINGLEQUOTE___$1;
var G__21166 = bound;
var G__21167 = cljs.core.conj.call(null,path,k);
focus = G__21165;
bound = G__21166;
path = G__21167;
continue;
} else {
return path;
}
break;
}
});

om.next.focus__GT_path.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
om.next.Ident = function(){};

/**
 * Return the ident for this component
 */
om.next.ident = (function om$next$ident(this$,props){
if((!((this$ == null))) && (!((this$.om$next$Ident$ident$arity$2 == null)))){
return this$.om$next$Ident$ident$arity$2(this$,props);
} else {
var x__9096__auto__ = (((this$ == null))?null:this$);
var m__9097__auto__ = (om.next.ident[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,this$,props);
} else {
var m__9097__auto____$1 = (om.next.ident["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,this$,props);
} else {
throw cljs.core.missing_protocol.call(null,"Ident.ident",this$);
}
}
}
});


/**
 * @interface
 */
om.next.IQueryParams = function(){};

/**
 * Return the query parameters
 */
om.next.params = (function om$next$params(this$){
if((!((this$ == null))) && (!((this$.om$next$IQueryParams$params$arity$1 == null)))){
return this$.om$next$IQueryParams$params$arity$1(this$);
} else {
var x__9096__auto__ = (((this$ == null))?null:this$);
var m__9097__auto__ = (om.next.params[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,this$);
} else {
var m__9097__auto____$1 = (om.next.params["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQueryParams.params",this$);
}
}
}
});

goog.object.set(om.next.IQueryParams,"_",true);

goog.object.set(om.next.params,"_",(function (_){
return null;
}));

/**
 * @interface
 */
om.next.IQuery = function(){};

/**
 * Return the component's unbound query
 */
om.next.query = (function om$next$query(this$){
if((!((this$ == null))) && (!((this$.om$next$IQuery$query$arity$1 == null)))){
return this$.om$next$IQuery$query$arity$1(this$);
} else {
var x__9096__auto__ = (((this$ == null))?null:this$);
var m__9097__auto__ = (om.next.query[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,this$);
} else {
var m__9097__auto____$1 = (om.next.query["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQuery.query",this$);
}
}
}
});


/**
 * @interface
 */
om.next.ILocalState = function(){};

/**
 * Set the component's local state
 */
om.next._set_state_BANG_ = (function om$next$_set_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_set_state_BANG_$arity$2 == null)))){
return this$.om$next$ILocalState$_set_state_BANG_$arity$2(this$,new_state);
} else {
var x__9096__auto__ = (((this$ == null))?null:this$);
var m__9097__auto__ = (om.next._set_state_BANG_[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,this$,new_state);
} else {
var m__9097__auto____$1 = (om.next._set_state_BANG_["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,this$,new_state);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-set-state!",this$);
}
}
}
});

/**
 * Get the component's local state
 */
om.next._get_state = (function om$next$_get_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_state$arity$1(this$);
} else {
var x__9096__auto__ = (((this$ == null))?null:this$);
var m__9097__auto__ = (om.next._get_state[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,this$);
} else {
var m__9097__auto____$1 = (om.next._get_state["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-state",this$);
}
}
}
});

/**
 * Get the component's rendered local state
 */
om.next._get_rendered_state = (function om$next$_get_rendered_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_rendered_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_rendered_state$arity$1(this$);
} else {
var x__9096__auto__ = (((this$ == null))?null:this$);
var m__9097__auto__ = (om.next._get_rendered_state[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,this$);
} else {
var m__9097__auto____$1 = (om.next._get_rendered_state["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-rendered-state",this$);
}
}
}
});

/**
 * Get the component's pending local state
 */
om.next._merge_pending_state_BANG_ = (function om$next$_merge_pending_state_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1 == null)))){
return this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1(this$);
} else {
var x__9096__auto__ = (((this$ == null))?null:this$);
var m__9097__auto__ = (om.next._merge_pending_state_BANG_[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,this$);
} else {
var m__9097__auto____$1 = (om.next._merge_pending_state_BANG_["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-merge-pending-state!",this$);
}
}
}
});

om.next.var_QMARK_ = (function om$next$var_QMARK_(x){
var and__8351__auto__ = (x instanceof cljs.core.Symbol);
if(and__8351__auto__){
return goog.string.startsWith([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),"?");
} else {
return and__8351__auto__;
}
});
om.next.var__GT_keyword = (function om$next$var__GT_keyword(x){
return cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('').substring((1)));
});
om.next.replace_var = (function om$next$replace_var(expr,params){
if(cljs.core.truth_(om.next.var_QMARK_.call(null,expr))){
return cljs.core.get.call(null,params,om.next.var__GT_keyword.call(null,expr),expr);
} else {
return expr;
}
});
om.next.bind_query = (function om$next$bind_query(query,params){
var qm = cljs.core.meta.call(null,query);
var tr = cljs.core.map.call(null,((function (qm){
return (function (p1__21168_SHARP_){
return om.next.bind_query.call(null,p1__21168_SHARP_,params);
});})(qm))
);
var ret = ((cljs.core.seq_QMARK_.call(null,query))?cljs.core.apply.call(null,cljs.core.list,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,tr,query)):((cljs.core.coll_QMARK_.call(null,query))?cljs.core.into.call(null,cljs.core.empty.call(null,query),tr,query):om.next.replace_var.call(null,query,params)
));
var G__21169 = ret;
if(cljs.core.truth_((function (){var and__8351__auto__ = qm;
if(cljs.core.truth_(and__8351__auto__)){
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
return and__8351__auto__;
}
})())){
return cljs.core.with_meta.call(null,G__21169,qm);
} else {
return G__21169;
}
});






om.next.component__GT_query_data = (function om$next$component__GT_query_data(component){
var G__21171 = om.next.get_reconciler.call(null,component);
var G__21171__$1 = (((G__21171 == null))?null:new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__21171));
var G__21171__$2 = (((G__21171__$1 == null))?null:new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__21171__$1));
var G__21171__$3 = (((G__21171__$2 == null))?null:cljs.core.deref.call(null,G__21171__$2));
var G__21171__$4 = (((G__21171__$3 == null))?null:new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146).cljs$core$IFn$_invoke$arity$1(G__21171__$3));
if((G__21171__$4 == null)){
return null;
} else {
return cljs.core.get.call(null,G__21171__$4,component);
}
});
/**
 * Return the unbound query for a component.
 */
om.next.get_unbound_query = (function om$next$get_unbound_query(component){
return new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(om.next.component__GT_query_data.call(null,component),om.next.query.call(null,component));
});
/**
 * Return the query params for a component.
 */
om.next.get_params = (function om$next$get_params(component){
return new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(om.next.component__GT_query_data.call(null,component),om.next.params.call(null,component));
});
om.next.get_component_query = (function om$next$get_component_query(var_args){
var G__21173 = arguments.length;
switch (G__21173) {
case 1:
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.get_component_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_component_query.call(null,component,om.next.component__GT_query_data.call(null,component));
});

om.next.get_component_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query_data){
var q = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(query_data,om.next.query.call(null,component));
var c_SINGLEQUOTE_ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c_SINGLEQUOTE_ == null)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Query violation, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component)," reuses ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_SINGLEQUOTE_)," query"].join('')),"\n","(nil? c')"].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(query_data,om.next.params.call(null,component))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),om.next.react_type.call(null,component)], null));
});

om.next.get_component_query.cljs$lang$maxFixedArity = 2;

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
});
/**
 * Return a IQuery/IParams local bound query. Works for component classes
 * and component instances. Does not use the indexer.
 */
om.next.get_class_or_instance_query = (function om$next$get_class_or_instance_query(x){
if(cljs.core.truth_(om.next.component_QMARK_.call(null,x))){
return om.next.get_component_query.call(null,x);
} else {
var q = om.next.query.call(null,x);
var c = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c == null)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Query violation, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," reuses ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," query"].join('')),"\n","(nil? c)"].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,om.next.params.call(null,x)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),x], null));
}
});
/**
 * Get a component's static query from the indexer. For recursive queries, recurses
 * up the data path. Falls back to `get-class-or-instance-query` if nothing is
 * found in the indexer.
 */
om.next.get_indexed_query = (function om$next$get_indexed_query(component,class_path_query_data,data_path){
while(true){
var qs = cljs.core.filter.call(null,((function (component,class_path_query_data,data_path){
return (function (p1__21176_SHARP_){
return cljs.core._EQ_.call(null,data_path,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__21176_SHARP_),data_path));
});})(component,class_path_query_data,data_path))
,class_path_query_data);
var qs__$1 = ((cljs.core.empty_QMARK_.call(null,qs))?class_path_query_data:qs);
if(!(cljs.core.empty_QMARK_.call(null,qs__$1))){
var q = cljs.core.first.call(null,qs__$1);
var node = clojure.zip.node.call(null,q);
if(!(om.util.recursion_QMARK_.call(null,node))){
return node;
} else {
var G__21177 = component;
var G__21178 = class_path_query_data;
var G__21179 = cljs.core.pop.call(null,data_path);
component = G__21177;
class_path_query_data = G__21178;
data_path = G__21179;
continue;
}
} else {
return om.next.get_class_or_instance_query.call(null,component);
}
break;
}
});
/**
 * Return a IQuery/IParams instance bound query. Works for component classes
 * and component instances. See also om.next/full-query.
 */
om.next.get_query = (function om$next$get_query(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$next$IQuery$)))?true:false):false)){
if(cljs.core.truth_(om.next.component_QMARK_.call(null,x))){
var temp__6751__auto__ = om.next.component__GT_query_data.call(null,x);
if(cljs.core.truth_(temp__6751__auto__)){
var query_data = temp__6751__auto__;
return om.next.get_component_query.call(null,x,query_data);
} else {
var cp = om.next.class_path.call(null,x);
var r = om.next.get_reconciler.call(null,x);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,x));
var class_path_query_data = cljs.core.get.call(null,new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om.next.get_indexer.call(null,r))),cp);
return om.next.get_indexed_query.call(null,x,class_path_query_data,data_path);
}
} else {
return om.next.get_class_or_instance_query.call(null,x);
}
} else {
return null;
}
});
om.next.tag = (function om$next$tag(x,class$){
return cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),class$);
});

/**
* @constructor
*/
om.next.OmProps = (function (props,basis_t){
this.props = props;
this.basis_t = basis_t;
});

om.next.OmProps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"basis-t","basis-t",216455797,null)], null);
});

om.next.OmProps.cljs$lang$type = true;

om.next.OmProps.cljs$lang$ctorStr = "om.next/OmProps";

om.next.OmProps.cljs$lang$ctorPrWriter = (function (this__9034__auto__,writer__9035__auto__,opt__9036__auto__){
return cljs.core._write.call(null,writer__9035__auto__,"om.next/OmProps");
});

om.next.__GT_OmProps = (function om$next$__GT_OmProps(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});

om.next.om_props = (function om$next$om_props(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});
om.next.om_props_basis = (function om$next$om_props_basis(om_props){
return om_props.basis_t;
});
om.next.nil_props = om.next.om_props.call(null,null,(-1));
om.next.unwrap = (function om$next$unwrap(om_props){
return om_props.props;
});
om.next.compute_react_key = (function om$next$compute_react_key(cl,props){
var temp__6751__auto__ = new cljs.core.Keyword(null,"react-key","react-key",1337881348).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__6751__auto__)){
var rk = temp__6751__auto__;
return rk;
} else {
var temp__6751__auto____$1 = new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props));
if(cljs.core.truth_(temp__6751__auto____$1)){
var idx = temp__6751__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cl.name),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('');
} else {
return undefined;
}
}
});
/**
 * Create a factory constructor from a component class created with
 *    om.next/defui.
 */
om.next.factory = (function om$next$factory(var_args){
var G__21182 = arguments.length;
switch (G__21182) {
case 1:
return om.next.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return om.next.factory.call(null,class$,null);
});

om.next.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__21183){
var map__21184 = p__21183;
var map__21184__$1 = ((((!((map__21184 == null)))?((((map__21184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21184.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21184):map__21184);
var opts = map__21184__$1;
var validator = cljs.core.get.call(null,map__21184__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var keyfn = cljs.core.get.call(null,map__21184__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332));
var instrument_QMARK_ = cljs.core.get.call(null,map__21184__$1,new cljs.core.Keyword(null,"instrument?","instrument?",-1835582396),true);
if(cljs.core.fn_QMARK_.call(null,class$)){
} else {
throw (new Error("Assert failed: (fn? class)"));
}

return ((function (map__21184,map__21184__$1,opts,validator,keyfn,instrument_QMARK_){
return (function() { 
var om$next$self__delegate = function (props,children){
if((validator == null)){
} else {
if(cljs.core.truth_(validator.call(null,props))){
} else {
throw (new Error("Assert failed: (validator props)"));
}
}

if(cljs.core.truth_((function (){var and__8351__auto__ = om.next._STAR_instrument_STAR_;
if(cljs.core.truth_(and__8351__auto__)){
return instrument_QMARK_;
} else {
return and__8351__auto__;
}
})())){
return om.next._STAR_instrument_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"factory","factory",63933746),om.next.factory.call(null,class$,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"instrument?","instrument?",-1835582396),false))], null));
} else {
var key = ((!((keyfn == null)))?keyfn.call(null,props):om.next.compute_react_key.call(null,class$,props));
var ref = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__21186 = ref;
if((ref instanceof cljs.core.Keyword)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21186)].join('');
} else {
return G__21186;
}
})();
var t = ((!((om.next._STAR_reconciler_STAR_ == null)))?om.next.protocols.basis_t.call(null,om.next._STAR_reconciler_STAR_):(0));
return React.createElement(class$,({"omcljs$value": om.next.om_props.call(null,props,t), "omcljs$instrument": om.next._STAR_instrument_STAR_, "key": key, "omcljs$reactKey": key, "ref": ref__$1, "omcljs$shared": om.next._STAR_shared_STAR_, "omcljs$path": new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props)), "omcljs$reconciler": om.next._STAR_reconciler_STAR_, "omcljs$depth": om.next._STAR_depth_STAR_, "omcljs$parent": om.next._STAR_parent_STAR_}),om.util.force_children.call(null,children));
}
};
var om$next$self = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__21188__i = 0, G__21188__a = new Array(arguments.length -  1);
while (G__21188__i < G__21188__a.length) {G__21188__a[G__21188__i] = arguments[G__21188__i + 1]; ++G__21188__i;}
  children = new cljs.core.IndexedSeq(G__21188__a,0,null);
} 
return om$next$self__delegate.call(this,props,children);};
om$next$self.cljs$lang$maxFixedArity = 1;
om$next$self.cljs$lang$applyTo = (function (arglist__21189){
var props = cljs.core.first(arglist__21189);
var children = cljs.core.rest(arglist__21189);
return om$next$self__delegate(props,children);
});
om$next$self.cljs$core$IFn$_invoke$arity$variadic = om$next$self__delegate;
return om$next$self;
})()
;
;})(map__21184,map__21184__$1,opts,validator,keyfn,instrument_QMARK_))
});

om.next.factory.cljs$lang$maxFixedArity = 2;

/**
 * Returns true if the argument is an Om component.
 */
om.next.component_QMARK_ = (function om$next$component_QMARK_(x){
if(!((x == null))){
return x.om$isComponent === true;
} else {
return false;
}
});
om.next.state = (function om$next$state(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return c.state;
});
/**
 * PRIVATE: Do not use
 */
om.next.get_prop = (function om$next$get_prop(c,k){
return goog.object.get(c.props,k);
});
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
});
om.next.get_prev_props = (function om$next$get_prev_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$prev$value");
});
om.next.get_next_props = (function om$next$get_next_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$next$value");
});
om.next.get_props = (function om$next$get_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$value");
});
/**
 * PRIVATE: Do not use
 */
om.next.set_prop_BANG_ = (function om$next$set_prop_BANG_(c,k,v){
return goog.object.set(c.props,k,v);
});
om.next.get_reconciler = (function om$next$get_reconciler(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return om.next.get_prop.call(null,c,"omcljs$reconciler");
});
om.next.props_STAR_ = (function om$next$props_STAR_(var_args){
var G__21191 = arguments.length;
switch (G__21191) {
case 2:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,y);
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,om.next.props_STAR_.call(null,y,z));
});

om.next.props_STAR_.cljs$lang$maxFixedArity = 3;

om.next.prev_props_STAR_ = (function om$next$prev_props_STAR_(var_args){
var G__21194 = arguments.length;
switch (G__21194) {
case 2:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.min_key.call(null,om.next.om_props_basis,x,y);
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.min_key.call(null,om.next.om_props_basis,om.next.props_STAR_.call(null,x,y),om.next.props_STAR_.call(null,y,z));
});

om.next.prev_props_STAR_.cljs$lang$maxFixedArity = 3;

om.next._prev_props = (function om$next$_prev_props(prev_props,component){
var cst = component.state;
var props = component.props;
return om.next.unwrap.call(null,om.next.prev_props_STAR_.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,prev_props),om.next.get_prev_props.call(null,cst)),om.next.props_STAR_.call(null,om.next.get_props.call(null,cst),om.next.get_props.call(null,props))));
});
om.next._next_props = (function om$next$_next_props(next_props,component){
return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,component.props),om.next.get_props.call(null,next_props),om.next.get_next_props.call(null,component.state)));
});
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
});
om.next.clear_prev_props_BANG_ = (function om$next$clear_prev_props_BANG_(c){
return goog.object.remove(c.state,"omcljs$prev$value");
});
/**
 * Get basis t value for when the component last read its props from
 *    the global state.
 */
om.next.t = (function om$next$t(c){
return om.next.om_props_basis.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,c.props),om.next.get_props.call(null,c.state)));
});
/**
 * Returns the parent Om component.
 */
om.next.parent = (function om$next$parent(component){
return om.next.get_prop.call(null,component,"omcljs$parent");
});
/**
 * PRIVATE: Returns the render depth (a integer) of the component relative to
 *  the mount root.
 */
om.next.depth = (function om$next$depth(component){
if(om.next.component_QMARK_.call(null,component)){
return om.next.get_prop.call(null,component,"omcljs$depth");
} else {
return null;
}
});
/**
 * Returns the components React key.
 */
om.next.react_key = (function om$next$react_key(component){
return om.next.get_prop.call(null,component,"omcljs$reactKey");
});
/**
 * Returns the component type, regardless of whether the component has been
 *    mounted
 */
om.next.react_type = (function om$next$react_type(x){
var or__8363__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return cljs.core.type.call(null,x);
}
});
/**
 * Returns the component's Om data path.
 */
om.next.path = (function om$next$path(c){
return om.next.get_prop.call(null,c,"omcljs$path");
});
/**
 * Return the global shared properties of the Om Next root. See :shared and
 * :shared-fn reconciler options.
 */
om.next.shared = (function om$next$shared(var_args){
var G__21197 = arguments.length;
switch (G__21197) {
case 1:
return om.next.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.shared.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.shared.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.shared.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var shared = goog.object.get(component.props,"omcljs$shared");
var ks = (function (){var G__21198 = k_or_ks;
if(!(cljs.core.sequential_QMARK_.call(null,k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__21198],null));
} else {
return G__21198;
}
})();
var G__21199 = shared;
if(!(cljs.core.empty_QMARK_.call(null,ks))){
return cljs.core.get_in.call(null,G__21199,ks);
} else {
return G__21199;
}
});

om.next.shared.cljs$lang$maxFixedArity = 2;

om.next.instrument = (function om$next$instrument(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return om.next.get_prop.call(null,component,"omcljs$instrument");
});
om.next.update_props_BANG_ = (function om$next$update_props_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var G__21201 = c.state;
goog.object.set(G__21201,"omcljs$next$value",om.next.om_props.call(null,next_props,om.next.protocols.basis_t.call(null,om.next.get_reconciler.call(null,c))));

return G__21201;
});
/**
 * Return a components props.
 */
om.next.props = (function om$next$props(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,component.props),om.next.get_props.call(null,component.state)));
});
/**
 * Add computed properties to props. Note will replace any pre-existing
 * computed properties.
 */
om.next.computed = (function om$next$computed(props,computed_map){
if((props == null)){
return null;
} else {
if(cljs.core.vector_QMARK_.call(null,props)){
var G__21202 = props;
if(!(cljs.core.empty_QMARK_.call(null,computed_map))){
return cljs.core.vary_meta.call(null,G__21202,cljs.core.assoc,new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329),computed_map);
} else {
return G__21202;
}
} else {
var G__21203 = props;
if(!(cljs.core.empty_QMARK_.call(null,computed_map))){
return cljs.core.assoc.call(null,G__21203,new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329),computed_map);
} else {
return G__21203;
}
}
}
});
/**
 * Return the computed properties on a component or its props.
 */
om.next.get_computed = (function om$next$get_computed(var_args){
var G__21205 = arguments.length;
switch (G__21205) {
case 1:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return om.next.get_computed.call(null,x,cljs.core.PersistentVector.EMPTY);
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
if((x == null)){
return null;
} else {
var props = (function (){var G__21206 = x;
if(om.next.component_QMARK_.call(null,x)){
return om.next.props.call(null,G__21206);
} else {
return G__21206;
}
})();
var ks = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329)], null),(function (){var G__21207 = k_or_ks;
if(!(cljs.core.sequential_QMARK_.call(null,k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__21207],null));
} else {
return G__21207;
}
})());
if(cljs.core.vector_QMARK_.call(null,props)){
return cljs.core.get_in.call(null,cljs.core.meta.call(null,props),ks);
} else {
return cljs.core.get_in.call(null,props,ks);
}
}
});

om.next.get_computed.cljs$lang$maxFixedArity = 2;

/**
 * Set the component local state of the component. Analogous to React's
 * setState.
 */
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

var temp__6751__auto__ = om.next.get_reconciler.call(null,component);
if(cljs.core.truth_(temp__6751__auto__)){
var r = temp__6751__auto__;
om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

return om.next.schedule_render_BANG_.call(null,r);
} else {
return component.forceUpdate();
}
});
/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state.
 */
om.next.get_state = (function om$next$get_state(var_args){
var G__21211 = arguments.length;
switch (G__21211) {
case 1:
return om.next.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_state.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = ((((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.om$next$ILocalState$)))?true:false):false))?om.next._get_state.call(null,component):(function (){var temp__6753__auto__ = component.state;
if(cljs.core.truth_(temp__6753__auto__)){
var state = temp__6753__auto__;
var or__8363__auto__ = goog.object.get(state,"omcljs$pendingState");
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return goog.object.get(state,"omcljs$state");
}
} else {
return null;
}
})());
return cljs.core.get_in.call(null,cst,((cljs.core.sequential_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_state.cljs$lang$maxFixedArity = 2;

/**
 * Update a component's local state. Similar to Clojure(Script)'s swap!
 */
om.next.update_state_BANG_ = (function om$next$update_state_BANG_(var_args){
var G__21222 = arguments.length;
switch (G__21222) {
case 2:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__9663__auto__ = [];
var len__9640__auto___21224 = arguments.length;
var i__9641__auto___21225 = (0);
while(true){
if((i__9641__auto___21225 < len__9640__auto___21224)){
args_arr__9663__auto__.push((arguments[i__9641__auto___21225]));

var G__21226 = (i__9641__auto___21225 + (1));
i__9641__auto___21225 = G__21226;
continue;
} else {
}
break;
}

var argseq__9664__auto__ = (new cljs.core.IndexedSeq(args_arr__9663__auto__.slice((6)),(0),null));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__9664__auto__);

}
});

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

om.next.update_state_BANG_.cljs$lang$applyTo = (function (seq21215){
var G__21216 = cljs.core.first.call(null,seq21215);
var seq21215__$1 = cljs.core.next.call(null,seq21215);
var G__21217 = cljs.core.first.call(null,seq21215__$1);
var seq21215__$2 = cljs.core.next.call(null,seq21215__$1);
var G__21218 = cljs.core.first.call(null,seq21215__$2);
var seq21215__$3 = cljs.core.next.call(null,seq21215__$2);
var G__21219 = cljs.core.first.call(null,seq21215__$3);
var seq21215__$4 = cljs.core.next.call(null,seq21215__$3);
var G__21220 = cljs.core.first.call(null,seq21215__$4);
var seq21215__$5 = cljs.core.next.call(null,seq21215__$4);
var G__21221 = cljs.core.first.call(null,seq21215__$5);
var seq21215__$6 = cljs.core.next.call(null,seq21215__$5);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21216,G__21217,G__21218,G__21219,G__21220,G__21221,seq21215__$6);
});

om.next.update_state_BANG_.cljs$lang$maxFixedArity = (6);

/**
 * Get the rendered state of component. om.next/get-state always returns the
 * up-to-date state.
 */
om.next.get_rendered_state = (function om$next$get_rendered_state(var_args){
var G__21228 = arguments.length;
switch (G__21228) {
case 1:
return om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_rendered_state.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = ((((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.om$next$ILocalState$)))?true:false):false))?om.next._get_rendered_state.call(null,component):(function (){var G__21230 = component;
var G__21230__$1 = (((G__21230 == null))?null:G__21230.state);
if((G__21230__$1 == null)){
return null;
} else {
return goog.object.get(G__21230__$1,"omcljs$state");
}
})());
return cljs.core.get_in.call(null,cst,((cljs.core.sequential_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_rendered_state.cljs$lang$maxFixedArity = 2;

om.next.merge_pending_state_BANG_ = (function om$next$merge_pending_state_BANG_(c){
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$ILocalState$)))?true:false):false)){
return om.next._merge_pending_state_BANG_.call(null,c);
} else {
var temp__6753__auto__ = (function (){var G__21233 = c;
var G__21233__$1 = (((G__21233 == null))?null:G__21233.state);
if((G__21233__$1 == null)){
return null;
} else {
return goog.object.get(G__21233__$1,"omcljs$pendingState");
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var pending = temp__6753__auto__;
var state = c.state;
var previous = goog.object.get(state,"omcljs$state");
goog.object.remove(state,"omcljs$pendingState");

goog.object.set(state,"omcljs$previousState",previous);

return goog.object.set(state,"omcljs$state",pending);
} else {
return null;
}
}
});
om.next.react_set_state_BANG_ = (function om$next$react_set_state_BANG_(var_args){
var G__21235 = arguments.length;
switch (G__21235) {
case 2:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

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

om.next.react_set_state_BANG_.cljs$lang$maxFixedArity = 3;






/**
 * Given an environment, a query and a set of remotes return a hash map of remotes
 * mapped to the query specific to that remote.
 */
om.next.gather_sends = (function om$next$gather_sends(p__21238,q,remotes){
var map__21239 = p__21238;
var map__21239__$1 = ((((!((map__21239 == null)))?((((map__21239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21239.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21239):map__21239);
var env = map__21239__$1;
var parser = cljs.core.get.call(null,map__21239__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,((function (map__21239,map__21239__$1,env,parser){
return (function (p1__21237_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__21237_SHARP_,parser.call(null,env,q,p1__21237_SHARP_)],null));
});})(map__21239,map__21239__$1,env,parser))
),cljs.core.filter.call(null,((function (map__21239,map__21239__$1,env,parser){
return (function (p__21241){
var vec__21242 = p__21241;
var _ = cljs.core.nth.call(null,vec__21242,(0),null);
var v = cljs.core.nth.call(null,vec__21242,(1),null);
return (cljs.core.count.call(null,v) > (0));
});})(map__21239,map__21239__$1,env,parser))
)),remotes);
});
/**
 * Given r (a reconciler) and a query expression including a mutation and
 * any simple reads, return the equivalent query expression where the simple
 * reads have been replaced by the full query for each component that cares about
 * the specified read.
 */
om.next.transform_reads = (function om$next$transform_reads(r,tx){
if(cljs.core.truth_(new cljs.core.Keyword(null,"easy-reads","easy-reads",803667467).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r)))){
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
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var tgt = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast);
if((key instanceof cljs.core.Keyword)){
var cs = om.next.ref__GT_components.call(null,r,key);
var G__21248 = cljs.core.next.call(null,exprs);
var G__21249 = cljs.core.reduce.call(null,((function (exprs,tx_SINGLEQUOTE_,cs,expr,ast,key,tgt){
return (function (p1__21245_SHARP_,p2__21246_SHARP_){
return add_focused_query.call(null,key,tgt,p1__21245_SHARP_,p2__21246_SHARP_);
});})(exprs,tx_SINGLEQUOTE_,cs,expr,ast,key,tgt))
,(function (){var G__21247 = tx_SINGLEQUOTE_;
if(cljs.core.empty_QMARK_.call(null,cs)){
return cljs.core.conj.call(null,G__21247,expr);
} else {
return G__21247;
}
})(),cs);
exprs = G__21248;
tx_SINGLEQUOTE_ = G__21249;
continue;
} else {
var G__21250 = cljs.core.next.call(null,exprs);
var G__21251 = cljs.core.conj.call(null,tx_SINGLEQUOTE_,expr);
exprs = G__21250;
tx_SINGLEQUOTE_ = G__21251;
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
});
/**
 * Change the query of a component. Takes a map containing :params and/or
 * :query. :params should be a map of new bindings and :query should be a query
 * expression. Will schedule a re-render as well as remote re-sends if
 * necessary.
 */
om.next.set_query_BANG_ = (function om$next$set_query_BANG_(var_args){
var G__21253 = arguments.length;
switch (G__21253) {
case 2:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,params_AMPERSAND_query){
return om.next.set_query_BANG_.call(null,x,params_AMPERSAND_query,null);
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,p__21254,reads){
var map__21255 = p__21254;
var map__21255__$1 = ((((!((map__21255 == null)))?((((map__21255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21255.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21255):map__21255);
var params = cljs.core.get.call(null,map__21255__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.call(null,map__21255__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
if(cljs.core.truth_((function (){var or__8363__auto__ = om.next.reconciler_QMARK_.call(null,x);
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
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
var xs = ((!((c == null)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null):cljs.core.PersistentVector.EMPTY);
var root = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(r)));
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var st = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid.call(null);
new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,st));

var temp__6753__auto___21269 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__6753__auto___21269)){
var l_21270 = temp__6753__auto___21269;
goog.log.info(l_21270,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6753__auto____$1 = ((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false))?om.next.ident.call(null,c,om.next.props.call(null,c)):null);
if(cljs.core.truth_(temp__6753__auto____$1)){
var ident = temp__6753__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,ident))," "].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?"reconciler ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(query)?(function (){


return ", ";
})()
:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(params)?(function (){


return " ";
})()
:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,id))].join(''));
} else {
}

cljs.core.swap_BANG_.call(null,st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),(function (){var or__8363__auto__ = c;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return root;
}
})()], null),cljs.core.merge,cljs.core.merge.call(null,(cljs.core.truth_(query)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),params], null):null)));

if((!((c == null))) && ((reads == null))){
om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
} else {
}

if((reads == null)){
} else {
om.next.protocols.queue_BANG_.call(null,r,reads);
}

om.next.protocols.reindex_BANG_.call(null,r);

var rootq_21271 = ((!((c == null)))?om.next.full_query.call(null,c):(((reads == null))?om.next.get_query.call(null,root):null));
var sends_21272 = om.next.gather_sends.call(null,om.next.to_env.call(null,cfg),cljs.core.into.call(null,(function (){var or__8363__auto__ = rootq_21271;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),om.next.transform_reads.call(null,r,reads)),new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(cfg));
if(cljs.core.empty_QMARK_.call(null,sends_21272)){
} else {
var seq__21258_21273 = cljs.core.seq.call(null,sends_21272);
var chunk__21259_21274 = null;
var count__21260_21275 = (0);
var i__21261_21276 = (0);
while(true){
if((i__21261_21276 < count__21260_21275)){
var vec__21262_21277 = cljs.core._nth.call(null,chunk__21259_21274,i__21261_21276);
var remote_21278 = cljs.core.nth.call(null,vec__21262_21277,(0),null);
var __21279 = cljs.core.nth.call(null,vec__21262_21277,(1),null);
om.next.protocols.queue_BANG_.call(null,r,xs,remote_21278);

var G__21280 = seq__21258_21273;
var G__21281 = chunk__21259_21274;
var G__21282 = count__21260_21275;
var G__21283 = (i__21261_21276 + (1));
seq__21258_21273 = G__21280;
chunk__21259_21274 = G__21281;
count__21260_21275 = G__21282;
i__21261_21276 = G__21283;
continue;
} else {
var temp__6753__auto___21284 = cljs.core.seq.call(null,seq__21258_21273);
if(temp__6753__auto___21284){
var seq__21258_21285__$1 = temp__6753__auto___21284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21258_21285__$1)){
var c__9294__auto___21286 = cljs.core.chunk_first.call(null,seq__21258_21285__$1);
var G__21287 = cljs.core.chunk_rest.call(null,seq__21258_21285__$1);
var G__21288 = c__9294__auto___21286;
var G__21289 = cljs.core.count.call(null,c__9294__auto___21286);
var G__21290 = (0);
seq__21258_21273 = G__21287;
chunk__21259_21274 = G__21288;
count__21260_21275 = G__21289;
i__21261_21276 = G__21290;
continue;
} else {
var vec__21265_21291 = cljs.core.first.call(null,seq__21258_21285__$1);
var remote_21292 = cljs.core.nth.call(null,vec__21265_21291,(0),null);
var __21293 = cljs.core.nth.call(null,vec__21265_21291,(1),null);
om.next.protocols.queue_BANG_.call(null,r,xs,remote_21292);

var G__21294 = cljs.core.next.call(null,seq__21258_21285__$1);
var G__21295 = null;
var G__21296 = (0);
var G__21297 = (0);
seq__21258_21273 = G__21294;
chunk__21259_21274 = G__21295;
count__21260_21275 = G__21296;
i__21261_21276 = G__21297;
continue;
}
} else {
}
}
break;
}

om.next.protocols.queue_sends_BANG_.call(null,r,sends_21272);

om.next.schedule_sends_BANG_.call(null,r);
}

return null;
});

om.next.set_query_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Update a component's query and query parameters with a function.
 */
om.next.update_query_BANG_ = (function om$next$update_query_BANG_(var_args){
var G__21306 = arguments.length;
switch (G__21306) {
case 2:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__9663__auto__ = [];
var len__9640__auto___21308 = arguments.length;
var i__9641__auto___21309 = (0);
while(true){
if((i__9641__auto___21309 < len__9640__auto___21308)){
args_arr__9663__auto__.push((arguments[i__9641__auto___21309]));

var G__21310 = (i__9641__auto___21309 + (1));
i__9641__auto___21309 = G__21310;
continue;
} else {
}
break;
}

var argseq__9664__auto__ = (new cljs.core.IndexedSeq(args_arr__9663__auto__.slice((6)),(0),null));
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__9664__auto__);

}
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null)));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0,arg1));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0,arg1,arg2));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_query_BANG_.call(null,component,cljs.core.apply.call(null,f,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0,arg1,arg2,arg3,arg_rest));
});

om.next.update_query_BANG_.cljs$lang$applyTo = (function (seq21299){
var G__21300 = cljs.core.first.call(null,seq21299);
var seq21299__$1 = cljs.core.next.call(null,seq21299);
var G__21301 = cljs.core.first.call(null,seq21299__$1);
var seq21299__$2 = cljs.core.next.call(null,seq21299__$1);
var G__21302 = cljs.core.first.call(null,seq21299__$2);
var seq21299__$3 = cljs.core.next.call(null,seq21299__$2);
var G__21303 = cljs.core.first.call(null,seq21299__$3);
var seq21299__$4 = cljs.core.next.call(null,seq21299__$3);
var G__21304 = cljs.core.first.call(null,seq21299__$4);
var seq21299__$5 = cljs.core.next.call(null,seq21299__$4);
var G__21305 = cljs.core.first.call(null,seq21299__$5);
var seq21299__$6 = cljs.core.next.call(null,seq21299__$5);
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21300,G__21301,G__21302,G__21303,G__21304,G__21305,seq21299__$6);
});

om.next.update_query_BANG_.cljs$lang$maxFixedArity = (6);

/**
 * Returns true if the component is mounted.
 */
om.next.mounted_QMARK_ = (function om$next$mounted_QMARK_(x){
return (om.next.component_QMARK_.call(null,x)) && (x.isMounted());
});
/**
 * Returns the component associated with a component's React ref.
 */
om.next.react_ref = (function om$next$react_ref(component,name){
var G__21311 = component.refs;
if((G__21311 == null)){
return null;
} else {
return goog.object.get(G__21311,name);
}
});
/**
 * Returns the component's children.
 */
om.next.children = (function om$next$children(component){
return component.props.children;
});
om.next.update_component_BANG_ = (function om$next$update_component_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

om.next.update_props_BANG_.call(null,c,next_props);

return c.forceUpdate();
});
om.next.should_update_QMARK_ = (function om$next$should_update_QMARK_(var_args){
var G__21313 = arguments.length;
switch (G__21313) {
case 2:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

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

om.next.should_update_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * Return the raw component class path associated with a component. Contains
 * duplicates for recursive component trees.
 */
om.next.raw_class_path = (function om$next$raw_class_path(c){
var c__$1 = c;
var ret = (function (){var x__9317__auto__ = om.next.react_type.call(null,c__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})();
while(true){
var temp__6751__auto__ = om.next.parent.call(null,c__$1);
if(cljs.core.truth_(temp__6751__auto__)){
var p = temp__6751__auto__;
if(om.next.iquery_QMARK_.call(null,p)){
var G__21315 = p;
var G__21316 = cljs.core.cons.call(null,om.next.react_type.call(null,p),ret);
c__$1 = G__21315;
ret = G__21316;
continue;
} else {
var G__21317 = p;
var G__21318 = ret;
c__$1 = G__21317;
ret = G__21318;
continue;
}
} else {
return ret;
}
break;
}
});
/**
 * Return the component class path associated with a component.
 */
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
var G__21319 = cljs.core.next.call(null,cp);
var G__21320 = ret;
var G__21321 = seen;
cp = G__21319;
ret = G__21320;
seen = G__21321;
continue;
} else {
var G__21322 = cljs.core.next.call(null,cp);
var G__21323 = cljs.core.conj.call(null,ret,c__$1);
var G__21324 = cljs.core.conj.call(null,seen,c__$1);
cp = G__21322;
ret = G__21323;
seen = G__21324;
continue;
}
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
});
/**
 * Returns true if a component's classpath is recursive
 */
om.next.recursive_class_path_QMARK_ = (function om$next$recursive_class_path_QMARK_(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,om.next.raw_class_path.call(null,c)));
});
/**
 * Given a class or mounted component x and a ref to an instantiated component
 * or class that defines a subquery, pick the most specific subquery. If the
 * component is mounted subquery-ref will be used, subquery-class otherwise.
 */
om.next.subquery = (function om$next$subquery(x,subquery_ref,subquery_class){
if(((subquery_ref instanceof cljs.core.Keyword)) || (typeof subquery_ref === 'string')){
} else {
throw (new Error("Assert failed: (or (keyword? subquery-ref) (string? subquery-ref))"));
}

if(cljs.core.fn_QMARK_.call(null,subquery_class)){
} else {
throw (new Error("Assert failed: (fn? subquery-class)"));
}

var ref = (function (){var G__21325 = subquery_ref;
if((subquery_ref instanceof cljs.core.Keyword)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21325)].join('');
} else {
return G__21325;
}
})();
if((om.next.component_QMARK_.call(null,x)) && (om.next.mounted_QMARK_.call(null,x))){
return om.next.get_query.call(null,om.next.react_ref.call(null,x,ref));
} else {
return om.next.get_query.call(null,subquery_class);
}
});
/**
 * Given a mounted component with assigned props, return the ident for the
 * component.
 */
om.next.get_ident = (function om$next$get_ident(x){
if(om.next.component_QMARK_.call(null,x)){
} else {
throw (new Error("Assert failed: (component? x)"));
}

var m = om.next.props.call(null,x);
if(!((m == null))){
} else {
throw (new Error(["Assert failed: ","get-ident invoked on component with nil props","\n","(not (nil? m))"].join('')));
}

return om.next.ident.call(null,x,m);
});
om.next.basis_t = (function om$next$basis_t(reconciler){
return om.next.protocols.basis_t.call(null,reconciler);
});
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
});
om.next.schedule_render_BANG_ = (function om$next$schedule_render_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_render_BANG_.call(null,reconciler))){
return om.next.queue_render_BANG_.call(null,(function (){
return om.next.protocols.reconcile_BANG_.call(null,reconciler);
}));
} else {
return null;
}
});
om.next.schedule_sends_BANG_ = (function om$next$schedule_sends_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_sends_BANG_.call(null,reconciler))){
return setTimeout((function (){
return om.next.protocols.send_BANG_.call(null,reconciler);
}),(0));
} else {
return null;
}
});
/**
 * Given a root component class and a target root DOM node, instantiate and
 * render the root class using the reconciler's :state property. The reconciler
 * will continue to observe changes to :state and keep the target node in sync.
 * Note a reconciler may have only one root. If invoked on a reconciler with an
 * existing root, the new root will replace the old one.
 */
om.next.add_root_BANG_ = (function om$next$add_root_BANG_(var_args){
var G__21327 = arguments.length;
switch (G__21327) {
case 3:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

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

var temp__6753__auto___21329 = cljs.core.get.call(null,cljs.core.deref.call(null,om.next.roots),target);
if(cljs.core.truth_(temp__6753__auto___21329)){
var old_reconciler_21330 = temp__6753__auto___21329;
om.next.remove_root_BANG_.call(null,old_reconciler_21330,target);
} else {
}

cljs.core.swap_BANG_.call(null,om.next.roots,cljs.core.assoc,target,reconciler);

return om.next.protocols.add_root_BANG_.call(null,reconciler,root_class,target,options);
});

om.next.add_root_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Remove a root target (a DOM element) from a reconciler. The reconciler will
 * no longer attempt to reconcile application state with the specified root.
 */
om.next.remove_root_BANG_ = (function om$next$remove_root_BANG_(reconciler,target){
return om.next.protocols.remove_root_BANG_.call(null,reconciler,target);
});

/**
 * @interface
 */
om.next.ITxIntercept = function(){};

/**
 * An optional protocol that component may implement to intercept child
 *   transactions.
 */
om.next.tx_intercept = (function om$next$tx_intercept(c,tx){
if((!((c == null))) && (!((c.om$next$ITxIntercept$tx_intercept$arity$2 == null)))){
return c.om$next$ITxIntercept$tx_intercept$arity$2(c,tx);
} else {
var x__9096__auto__ = (((c == null))?null:c);
var m__9097__auto__ = (om.next.tx_intercept[goog.typeOf(x__9096__auto__)]);
if(!((m__9097__auto__ == null))){
return m__9097__auto__.call(null,c,tx);
} else {
var m__9097__auto____$1 = (om.next.tx_intercept["_"]);
if(!((m__9097__auto____$1 == null))){
return m__9097__auto____$1.call(null,c,tx);
} else {
throw cljs.core.missing_protocol.call(null,"ITxIntercept.tx-intercept",c);
}
}
}
});

om.next.to_env = (function om$next$to_env(x){
var config = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(x):x);
return cljs.core.select_keys.call(null,config,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"logger","logger",-220675947),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149)], null));
});
om.next.transact_STAR_ = (function om$next$transact_STAR_(r,c,ref,tx){
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var ref__$1 = (cljs.core.truth_((function (){var and__8351__auto__ = c;
if(cljs.core.truth_(and__8351__auto__)){
var and__8351__auto____$1 = ((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false);
if(and__8351__auto____$1){
return cljs.core.not.call(null,ref);
} else {
return and__8351__auto____$1;
}
} else {
return and__8351__auto__;
}
})())?om.next.ident.call(null,c,om.next.props.call(null,c)):ref);
var env = cljs.core.merge.call(null,om.next.to_env.call(null,cfg),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),r,new cljs.core.Keyword(null,"component","component",1555936782),c], null),(cljs.core.truth_(ref__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref__$1], null):null));
var id = cljs.core.random_uuid.call(null);
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg)));
var ___$1 = (function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__6753__auto__)){
var l = temp__6753__auto__;
return goog.log.info(l,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ref__$1)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,ref__$1))," "].join(''):null)),"transacted '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tx),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,id))].join(''));
} else {
return null;
}
})();
var old_state = cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg));
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(cfg).call(null,env,tx);
var snds = om.next.gather_sends.call(null,env,tx,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(cfg));
var xs = (function (){var G__21333 = cljs.core.PersistentVector.EMPTY;
var G__21333__$1 = ((!((c == null)))?cljs.core.conj.call(null,G__21333,c):G__21333);
if(!((ref__$1 == null))){
return cljs.core.conj.call(null,G__21333__$1,ref__$1);
} else {
return G__21333__$1;
}
})();
om.next.protocols.queue_BANG_.call(null,r,cljs.core.into.call(null,xs,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,v)));

if(cljs.core.empty_QMARK_.call(null,snds)){
} else {
var seq__21334_21344 = cljs.core.seq.call(null,snds);
var chunk__21335_21345 = null;
var count__21336_21346 = (0);
var i__21337_21347 = (0);
while(true){
if((i__21337_21347 < count__21336_21346)){
var vec__21338_21348 = cljs.core._nth.call(null,chunk__21335_21345,i__21337_21347);
var remote_21349 = cljs.core.nth.call(null,vec__21338_21348,(0),null);
var __21350__$2 = cljs.core.nth.call(null,vec__21338_21348,(1),null);
om.next.protocols.queue_BANG_.call(null,r,xs,remote_21349);

var G__21351 = seq__21334_21344;
var G__21352 = chunk__21335_21345;
var G__21353 = count__21336_21346;
var G__21354 = (i__21337_21347 + (1));
seq__21334_21344 = G__21351;
chunk__21335_21345 = G__21352;
count__21336_21346 = G__21353;
i__21337_21347 = G__21354;
continue;
} else {
var temp__6753__auto___21355 = cljs.core.seq.call(null,seq__21334_21344);
if(temp__6753__auto___21355){
var seq__21334_21356__$1 = temp__6753__auto___21355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21334_21356__$1)){
var c__9294__auto___21357 = cljs.core.chunk_first.call(null,seq__21334_21356__$1);
var G__21358 = cljs.core.chunk_rest.call(null,seq__21334_21356__$1);
var G__21359 = c__9294__auto___21357;
var G__21360 = cljs.core.count.call(null,c__9294__auto___21357);
var G__21361 = (0);
seq__21334_21344 = G__21358;
chunk__21335_21345 = G__21359;
count__21336_21346 = G__21360;
i__21337_21347 = G__21361;
continue;
} else {
var vec__21341_21362 = cljs.core.first.call(null,seq__21334_21356__$1);
var remote_21363 = cljs.core.nth.call(null,vec__21341_21362,(0),null);
var __21364__$2 = cljs.core.nth.call(null,vec__21341_21362,(1),null);
om.next.protocols.queue_BANG_.call(null,r,xs,remote_21363);

var G__21365 = cljs.core.next.call(null,seq__21334_21356__$1);
var G__21366 = null;
var G__21367 = (0);
var G__21368 = (0);
seq__21334_21344 = G__21365;
chunk__21335_21345 = G__21366;
count__21336_21346 = G__21367;
i__21337_21347 = G__21368;
continue;
}
} else {
}
}
break;
}

om.next.protocols.queue_sends_BANG_.call(null,r,snds);

om.next.schedule_sends_BANG_.call(null,r);
}

var temp__6753__auto___21369 = new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__6753__auto___21369)){
var f_21370 = temp__6753__auto___21369;
var tx_data_21371 = cljs.core.merge.call(null,env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg))], null));
f_21370.call(null,tx_data_21371,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx","tx",466630418),tx,new cljs.core.Keyword(null,"ret","ret",-468222814),v,new cljs.core.Keyword(null,"sends","sends",-1708040810),snds], null));
} else {
}

return v;
});
/**
 * Given a query expression annotate all mutations by adding a :mutator -> ident
 * entry to the metadata of each mutation expression in the query.
 */
om.next.annotate_mutations = (function om$next$annotate_mutations(tx,ident){
var annotate = (function om$next$annotate_mutations_$_annotate(expr,ident__$1){
var G__21374 = expr;
if(om.util.mutation_QMARK_.call(null,expr)){
return cljs.core.vary_meta.call(null,G__21374,cljs.core.assoc,new cljs.core.Keyword(null,"mutator","mutator",-1326825366),ident__$1);
} else {
return G__21374;
}
});
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__21372_SHARP_){
return annotate.call(null,p1__21372_SHARP_,ident);
})),tx);
});
om.next.some_iquery_QMARK_ = (function om$next$some_iquery_QMARK_(c){
var c__$1 = c;
while(true){
if((c__$1 == null)){
return false;
} else {
if(om.next.iquery_QMARK_.call(null,c__$1)){
return true;
} else {
var G__21375 = om.next.parent.call(null,c__$1);
c__$1 = G__21375;
continue;

}
}
break;
}
});
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
om.next.transact_BANG_ = (function om$next$transact_BANG_(var_args){
var G__21377 = arguments.length;
switch (G__21377) {
case 2:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,tx){
if(cljs.core.truth_((function (){var or__8363__auto__ = om.next.component_QMARK_.call(null,x);
if(or__8363__auto__){
return or__8363__auto__;
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

var tx__$1 = (function (){var G__21378 = tx;
if((function (){var and__8351__auto__ = om.next.component_QMARK_.call(null,x);
if(and__8351__auto__){
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
return and__8351__auto__;
}
})()){
return om.next.annotate_mutations.call(null,G__21378,om.next.get_ident.call(null,x));
} else {
return G__21378;
}
})();
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))){
return om.next.transact_STAR_.call(null,x,null,null,tx__$1);
} else {
if(!(om.next.iquery_QMARK_.call(null,x))){
var l__20106__auto___21386 = om.next._STAR_logger_STAR_;
if(cljs.core.truth_(om.next.some_iquery_QMARK_.call(null,x))){
} else {
goog.log.error(l__20106__auto___21386,["Invariant Violation",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((null == null))?null:[" (in function: `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(null),"`)"].join(''))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["transact! should be called on a component","that implements IQuery or has a parent that","implements IQuery"].join(''))].join(''));
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
var vec__21381 = ((((!((p == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === p.om$next$ITxIntercept$)))?true:false):false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,om.next.tx_intercept.call(null,p,tx__$2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,tx__$2], null));
var x_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__21381,(0),null);
var tx__$3 = cljs.core.nth.call(null,vec__21381,(1),null);
var G__21387 = om.next.parent.call(null,p);
var G__21388 = x_SINGLEQUOTE_;
var G__21389 = tx__$3;
p = G__21387;
x__$1 = G__21388;
tx__$2 = G__21389;
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

om.next.transact_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Create a parser. The argument is a map of two keys, :read and :mutate. Both
 * functions should have the signature (Env -> Key -> Params -> ParseResult).
 */
om.next.parser = (function om$next$parser(p__21390){
var map__21391 = p__21390;
var map__21391__$1 = ((((!((map__21391 == null)))?((((map__21391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21391.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21391):map__21391);
var opts = map__21391__$1;
var read = cljs.core.get.call(null,map__21391__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.call(null,map__21391__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
if(cljs.core.map_QMARK_.call(null,opts)){
} else {
throw (new Error("Assert failed: (map? opts)"));
}

return om.next.impl.parser.parser.call(null,opts);
});
/**
 * Helper function for implementing :read and :mutate as multimethods. Use this
 * as the dispatch-fn.
 */
om.next.dispatch = (function om$next$dispatch(_,key,___$1){
return key;
});
/**
 * Given a query expression convert it into an AST.
 */
om.next.query__GT_ast = (function om$next$query__GT_ast(query_expr){
return om.next.impl.parser.query__GT_ast.call(null,query_expr);
});
om.next.ast__GT_query = (function om$next$ast__GT_query(query_ast){

return om.next.impl.parser.ast__GT_expr.call(null,query_ast,true);
});
om.next.get_dispatch_key = (function om$next$get_dispatch_key(prop){
var G__21393 = prop;
if((!(om.util.ident_QMARK_.call(null,prop))) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,prop),new cljs.core.Symbol(null,"_","_",-1201019570,null)))){
return cljs.core.comp.call(null,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),om.next.impl.parser.expr__GT_ast).call(null,G__21393);
} else {
return G__21393;
}
});
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
om.next.cascade_query = (function om$next$cascade_query(class_path__GT_query,classpath,data_path,new_query,union_keys){
var cp = classpath;
var data_path__$1 = data_path;
var new_query__$1 = new_query;
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!(cljs.core.empty_QMARK_.call(null,cp))){
var rendered_data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys)),data_path__$1);
var filter_data_path = (function (){var G__21395 = rendered_data_path;
if(!(cljs.core.empty_QMARK_.call(null,rendered_data_path))){
return cljs.core.pop.call(null,G__21395);
} else {
return G__21395;
}
})();
var qs = cljs.core.filter.call(null,((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path){
return (function (p1__21394_SHARP_){
return cljs.core._EQ_.call(null,filter_data_path,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__21394_SHARP_),filter_data_path));
});})(cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path))
,cljs.core.get.call(null,class_path__GT_query,cp));
var qs_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path,qs){
return (function (q){
var new_query__$2 = (cljs.core.truth_((function (){var or__8363__auto__ = cljs.core.map_QMARK_.call(null,clojure.zip.node.call(null,q));
if(or__8363__auto__){
return or__8363__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.peek.call(null,data_path__$1)]),union_keys);
}
})())?(function (){var union_key = cljs.core.peek.call(null,data_path__$1);
return cljs.core.assoc.call(null,clojure.zip.node.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q),rendered_data_path)),union_key,new_query__$1);
})():new_query__$1);
return om.next.query_template.call(null,om.next.focus_query.call(null,om.next.replace.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q),rendered_data_path),new_query__$2),filter_data_path),filter_data_path);
});})(cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path,qs))
),qs);
var G__21396 = cljs.core.pop.call(null,cp);
var G__21397 = cljs.core.pop.call(null,data_path__$1);
var G__21398 = clojure.zip.node.call(null,cljs.core.first.call(null,qs_SINGLEQUOTE_));
var G__21399 = cljs.core.assoc.call(null,ret,cp,qs_SINGLEQUOTE_);
cp = G__21396;
data_path__$1 = G__21397;
new_query__$1 = G__21398;
ret = G__21399;
continue;
} else {
return ret;
}
break;
}
});

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
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$ = cljs.core.PROTOCOL_SENTINEL;


om.next.Indexer.prototype.om$next$protocols$IIndexer$index_root$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var prop__GT_classes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var class_path__GT_query = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var rootq = om.next.get_query.call(null,x);
var root_class = (function (){var G__21409 = x;
if(om.next.component_QMARK_.call(null,x)){
return om.next.react_type.call(null,G__21409);
} else {
return G__21409;
}
})();
var build_index_STAR_ = ((function (prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function om$next$build_index_STAR_(class$,query,path,classpath,union_expr,union_keys){
var l__20106__auto___21472 = om.next._STAR_logger_STAR_;
if((!(om.next.iquery_QMARK_.call(null,class$))) || ((om.next.iquery_QMARK_.call(null,class$)) && (!(cljs.core.empty_QMARK_.call(null,query))))){
} else {
goog.log.error(l__20106__auto___21472,["Invariant Violation",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((("build-index*" == null))?null:[" (in function: `","build-index*","`)"].join(''))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["`IQuery` implementation must return a non-empty query."," Check the `IQuery` implementation of component `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((om.next.component_QMARK_.call(null,class$))?class$.constructor.displayName:class$.prototype.constructor.displayName)),"`."].join(''))].join(''));
}

var recursive_QMARK_ = cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([class$]),classpath);
var classpath__$1 = (function (){var G__21437 = classpath;
if((!((class$ == null))) && (cljs.core.not.call(null,recursive_QMARK_))){
return cljs.core.conj.call(null,G__21437,class$);
} else {
return G__21437;
}
})();
var dp__GT_cs = cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.indexes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750)], null));
if(cljs.core.truth_(class$)){
var root_query_21473 = ((cljs.core.empty_QMARK_.call(null,path))?rootq:clojure.zip.root.call(null,cljs.core.first.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,class_path__GT_query),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_class], null)))));
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classpath__$1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),om.next.query_template.call(null,om.next.focus_query.call(null,root_query_21473,path),path));
} else {
}

var recursive_join_QMARK_ = (function (){var and__8351__auto__ = recursive_QMARK_;
if(cljs.core.truth_(and__8351__auto__)){
var and__8351__auto____$1 = cljs.core.some.call(null,((function (and__8351__auto__,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (e){
var and__8351__auto____$1 = om.util.join_QMARK_.call(null,e);
if(cljs.core.truth_(and__8351__auto____$1)){
return !(om.util.recursion_QMARK_.call(null,om.util.join_value.call(null,e)));
} else {
return and__8351__auto____$1;
}
});})(and__8351__auto__,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,query);
if(cljs.core.truth_(and__8351__auto____$1)){
return cljs.core._EQ_.call(null,cljs.core.distinct.call(null,path),path);
} else {
return and__8351__auto____$1;
}
} else {
return and__8351__auto__;
}
})();
var recursive_union_QMARK_ = (function (){var and__8351__auto__ = recursive_QMARK_;
if(cljs.core.truth_(and__8351__auto__)){
var and__8351__auto____$1 = union_expr;
if(cljs.core.truth_(and__8351__auto____$1)){
return cljs.core._EQ_.call(null,cljs.core.distinct.call(null,path),path);
} else {
return and__8351__auto____$1;
}
} else {
return and__8351__auto__;
}
})();
if(cljs.core.truth_((function (){var or__8363__auto__ = cljs.core.not.call(null,recursive_QMARK_);
if(or__8363__auto__){
return or__8363__auto__;
} else {
var or__8363__auto____$1 = recursive_join_QMARK_;
if(cljs.core.truth_(or__8363__auto____$1)){
return or__8363__auto____$1;
} else {
return recursive_union_QMARK_;
}
}
})())){
if(cljs.core.vector_QMARK_.call(null,query)){
var map__21438 = cljs.core.group_by.call(null,om.util.join_QMARK_,query);
var map__21438__$1 = ((((!((map__21438 == null)))?((((map__21438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21438):map__21438);
var props = cljs.core.get.call(null,map__21438__$1,false);
var joins = cljs.core.get.call(null,map__21438__$1,true);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (map__21438,map__21438__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__21400_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__21400_SHARP_,cljs.core.zipmap.call(null,cljs.core.map.call(null,om.next.get_dispatch_key,props),cljs.core.repeat.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([class$]))));
});})(map__21438,map__21438__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

var seq__21440 = cljs.core.seq.call(null,joins);
var chunk__21441 = null;
var count__21442 = (0);
var i__21443 = (0);
while(true){
if((i__21443 < count__21442)){
var join = cljs.core._nth.call(null,chunk__21441,i__21443);
var vec__21444_21474 = om.util.join_entry.call(null,join);
var prop_21475 = cljs.core.nth.call(null,vec__21444_21474,(0),null);
var query_SINGLEQUOTE__21476 = cljs.core.nth.call(null,vec__21444_21474,(1),null);
var prop_dispatch_key_21477 = om.next.get_dispatch_key.call(null,prop_21475);
var recursion_QMARK__21478 = om.util.recursion_QMARK_.call(null,query_SINGLEQUOTE__21476);
var union_recursion_QMARK__21479 = (function (){var and__8351__auto__ = recursion_QMARK__21478;
if(and__8351__auto__){
return union_expr;
} else {
return and__8351__auto__;
}
})();
var query_SINGLEQUOTE__21480__$1 = ((recursion_QMARK__21478)?((!((union_expr == null)))?union_expr:query):query_SINGLEQUOTE__21476);
var path_SINGLEQUOTE__21481 = cljs.core.conj.call(null,path,prop_21475);
var rendered_path_SINGLEQUOTE__21482 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys),path_SINGLEQUOTE__21481));
var cs_21483 = cljs.core.get.call(null,dp__GT_cs,rendered_path_SINGLEQUOTE__21482);
var cascade_query_QMARK__21484 = (cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_21483),(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__21480__$1)),om.next.react_type.call(null,cljs.core.first.call(null,cs_21483)))) && (!(cljs.core.map_QMARK_.call(null,query_SINGLEQUOTE__21480__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__21485 = ((cascade_query_QMARK__21484)?om.next.get_query.call(null,cljs.core.first.call(null,cs_21483)):query_SINGLEQUOTE__21480__$1);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__21440,chunk__21441,count__21442,i__21443,vec__21444_21474,prop_21475,query_SINGLEQUOTE__21476,prop_dispatch_key_21477,recursion_QMARK__21478,union_recursion_QMARK__21479,query_SINGLEQUOTE__21480__$1,path_SINGLEQUOTE__21481,rendered_path_SINGLEQUOTE__21482,cs_21483,cascade_query_QMARK__21484,query_SINGLEQUOTE__SINGLEQUOTE__21485,join,map__21438,map__21438__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__21401_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__21401_SHARP_,cljs.core.PersistentArrayMap.createAsIfByAssoc([prop_dispatch_key_21477,cljs.core.PersistentHashSet.createAsIfByAssoc([class$])]));
});})(seq__21440,chunk__21441,count__21442,i__21443,vec__21444_21474,prop_21475,query_SINGLEQUOTE__21476,prop_dispatch_key_21477,recursion_QMARK__21478,union_recursion_QMARK__21479,query_SINGLEQUOTE__21480__$1,path_SINGLEQUOTE__21481,rendered_path_SINGLEQUOTE__21482,cs_21483,cascade_query_QMARK__21484,query_SINGLEQUOTE__SINGLEQUOTE__21485,join,map__21438,map__21438__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

if((cascade_query_QMARK__21484) && (cljs.core.not_EQ_.call(null,query_SINGLEQUOTE__21480__$1,query_SINGLEQUOTE__SINGLEQUOTE__21485))){
var cp__GT_q_SINGLEQUOTE__21486 = om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1,path_SINGLEQUOTE__21481,query_SINGLEQUOTE__SINGLEQUOTE__21485,union_keys);
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__21486);
} else {
}

var class_SINGLEQUOTE__21487 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__SINGLEQUOTE__21485));
if((recursion_QMARK__21478) && ((class_SINGLEQUOTE__21487 == null))){
} else {
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__21487,query_SINGLEQUOTE__SINGLEQUOTE__21485,path_SINGLEQUOTE__21481,classpath__$1,((recursion_QMARK__21478)?union_expr:null),union_keys);
}

var G__21488 = seq__21440;
var G__21489 = chunk__21441;
var G__21490 = count__21442;
var G__21491 = (i__21443 + (1));
seq__21440 = G__21488;
chunk__21441 = G__21489;
count__21442 = G__21490;
i__21443 = G__21491;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__21440);
if(temp__6753__auto__){
var seq__21440__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21440__$1)){
var c__9294__auto__ = cljs.core.chunk_first.call(null,seq__21440__$1);
var G__21492 = cljs.core.chunk_rest.call(null,seq__21440__$1);
var G__21493 = c__9294__auto__;
var G__21494 = cljs.core.count.call(null,c__9294__auto__);
var G__21495 = (0);
seq__21440 = G__21492;
chunk__21441 = G__21493;
count__21442 = G__21494;
i__21443 = G__21495;
continue;
} else {
var join = cljs.core.first.call(null,seq__21440__$1);
var vec__21447_21496 = om.util.join_entry.call(null,join);
var prop_21497 = cljs.core.nth.call(null,vec__21447_21496,(0),null);
var query_SINGLEQUOTE__21498 = cljs.core.nth.call(null,vec__21447_21496,(1),null);
var prop_dispatch_key_21499 = om.next.get_dispatch_key.call(null,prop_21497);
var recursion_QMARK__21500 = om.util.recursion_QMARK_.call(null,query_SINGLEQUOTE__21498);
var union_recursion_QMARK__21501 = (function (){var and__8351__auto__ = recursion_QMARK__21500;
if(and__8351__auto__){
return union_expr;
} else {
return and__8351__auto__;
}
})();
var query_SINGLEQUOTE__21502__$1 = ((recursion_QMARK__21500)?((!((union_expr == null)))?union_expr:query):query_SINGLEQUOTE__21498);
var path_SINGLEQUOTE__21503 = cljs.core.conj.call(null,path,prop_21497);
var rendered_path_SINGLEQUOTE__21504 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys),path_SINGLEQUOTE__21503));
var cs_21505 = cljs.core.get.call(null,dp__GT_cs,rendered_path_SINGLEQUOTE__21504);
var cascade_query_QMARK__21506 = (cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_21505),(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__21502__$1)),om.next.react_type.call(null,cljs.core.first.call(null,cs_21505)))) && (!(cljs.core.map_QMARK_.call(null,query_SINGLEQUOTE__21502__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__21507 = ((cascade_query_QMARK__21506)?om.next.get_query.call(null,cljs.core.first.call(null,cs_21505)):query_SINGLEQUOTE__21502__$1);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__21440,chunk__21441,count__21442,i__21443,vec__21447_21496,prop_21497,query_SINGLEQUOTE__21498,prop_dispatch_key_21499,recursion_QMARK__21500,union_recursion_QMARK__21501,query_SINGLEQUOTE__21502__$1,path_SINGLEQUOTE__21503,rendered_path_SINGLEQUOTE__21504,cs_21505,cascade_query_QMARK__21506,query_SINGLEQUOTE__SINGLEQUOTE__21507,join,seq__21440__$1,temp__6753__auto__,map__21438,map__21438__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__21401_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__21401_SHARP_,cljs.core.PersistentArrayMap.createAsIfByAssoc([prop_dispatch_key_21499,cljs.core.PersistentHashSet.createAsIfByAssoc([class$])]));
});})(seq__21440,chunk__21441,count__21442,i__21443,vec__21447_21496,prop_21497,query_SINGLEQUOTE__21498,prop_dispatch_key_21499,recursion_QMARK__21500,union_recursion_QMARK__21501,query_SINGLEQUOTE__21502__$1,path_SINGLEQUOTE__21503,rendered_path_SINGLEQUOTE__21504,cs_21505,cascade_query_QMARK__21506,query_SINGLEQUOTE__SINGLEQUOTE__21507,join,seq__21440__$1,temp__6753__auto__,map__21438,map__21438__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

if((cascade_query_QMARK__21506) && (cljs.core.not_EQ_.call(null,query_SINGLEQUOTE__21502__$1,query_SINGLEQUOTE__SINGLEQUOTE__21507))){
var cp__GT_q_SINGLEQUOTE__21508 = om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1,path_SINGLEQUOTE__21503,query_SINGLEQUOTE__SINGLEQUOTE__21507,union_keys);
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__21508);
} else {
}

var class_SINGLEQUOTE__21509 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__SINGLEQUOTE__21507));
if((recursion_QMARK__21500) && ((class_SINGLEQUOTE__21509 == null))){
} else {
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__21509,query_SINGLEQUOTE__SINGLEQUOTE__21507,path_SINGLEQUOTE__21503,classpath__$1,((recursion_QMARK__21500)?union_expr:null),union_keys);
}

var G__21510 = cljs.core.next.call(null,seq__21440__$1);
var G__21511 = null;
var G__21512 = (0);
var G__21513 = (0);
seq__21440 = G__21510;
chunk__21441 = G__21511;
count__21442 = G__21512;
i__21443 = G__21513;
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
var seq__21450 = cljs.core.seq.call(null,query);
var chunk__21451 = null;
var count__21452 = (0);
var i__21453 = (0);
while(true){
if((i__21453 < count__21452)){
var vec__21454 = cljs.core._nth.call(null,chunk__21451,i__21453);
var prop = cljs.core.nth.call(null,vec__21454,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__21454,(1),null);
var path_SINGLEQUOTE__21514 = cljs.core.conj.call(null,path,prop);
var class_SINGLEQUOTE__21515 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE_));
var cs_21516 = cljs.core.filter.call(null,((function (seq__21450,chunk__21451,count__21452,i__21453,path_SINGLEQUOTE__21514,class_SINGLEQUOTE__21515,vec__21454,prop,query_SINGLEQUOTE_,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__21402_SHARP_){
return cljs.core._EQ_.call(null,class_SINGLEQUOTE__21515,om.next.react_type.call(null,p1__21402_SHARP_));
});})(seq__21450,chunk__21451,count__21452,i__21453,path_SINGLEQUOTE__21514,class_SINGLEQUOTE__21515,vec__21454,prop,query_SINGLEQUOTE_,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,cljs.core.get.call(null,dp__GT_cs,path));
var cascade_query_QMARK__21517 = (function (){var and__8351__auto__ = class_SINGLEQUOTE__21515;
if(cljs.core.truth_(and__8351__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_21516),(1));
} else {
return and__8351__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__21518 = (cljs.core.truth_(cascade_query_QMARK__21517)?om.next.get_query.call(null,cljs.core.first.call(null,cs_21516)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__8351__auto__ = cascade_query_QMARK__21517;
if(cljs.core.truth_(and__8351__auto__)){
return cljs.core.not_EQ_.call(null,query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__21518);
} else {
return and__8351__auto__;
}
})())){
var qs_21519 = cljs.core.get.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1);
var q_21520 = cljs.core.first.call(null,qs_21519);
var qnode_21521 = clojure.zip.node.call(null,(function (){var G__21457 = q_21520;
if((class$ == null)){
return om.next.query_template.call(null,G__21457,path);
} else {
return G__21457;
}
})());
var new_query_21522 = cljs.core.assoc.call(null,qnode_21521,prop,query_SINGLEQUOTE__SINGLEQUOTE__21518);
var q_SINGLEQUOTE__21523 = (function (){var G__21458 = clojure.zip.replace.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q_21520),path),new_query_21522);
if((class$ == null)){
return om.next.query_template.call(null,om.next.focus_query.call(null,clojure.zip.root.call(null,G__21458),cljs.core.pop.call(null,path)),cljs.core.pop.call(null,path));
} else {
return G__21458;
}
})();
var qs_SINGLEQUOTE__21524 = cljs.core.into.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([q_SINGLEQUOTE__21523]),cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([q_21520])),qs_21519);
var cp__GT_q_SINGLEQUOTE__21525 = cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([classpath__$1,qs_SINGLEQUOTE__21524]),om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),cljs.core.pop.call(null,classpath__$1),path,clojure.zip.node.call(null,q_SINGLEQUOTE__21523),union_keys));
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__21525);
} else {
}

om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__21515,query_SINGLEQUOTE__SINGLEQUOTE__21518,path_SINGLEQUOTE__21514,classpath__$1,query,cljs.core.conj.call(null,union_keys,prop));

var G__21526 = seq__21450;
var G__21527 = chunk__21451;
var G__21528 = count__21452;
var G__21529 = (i__21453 + (1));
seq__21450 = G__21526;
chunk__21451 = G__21527;
count__21452 = G__21528;
i__21453 = G__21529;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__21450);
if(temp__6753__auto__){
var seq__21450__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21450__$1)){
var c__9294__auto__ = cljs.core.chunk_first.call(null,seq__21450__$1);
var G__21530 = cljs.core.chunk_rest.call(null,seq__21450__$1);
var G__21531 = c__9294__auto__;
var G__21532 = cljs.core.count.call(null,c__9294__auto__);
var G__21533 = (0);
seq__21450 = G__21530;
chunk__21451 = G__21531;
count__21452 = G__21532;
i__21453 = G__21533;
continue;
} else {
var vec__21459 = cljs.core.first.call(null,seq__21450__$1);
var prop = cljs.core.nth.call(null,vec__21459,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__21459,(1),null);
var path_SINGLEQUOTE__21534 = cljs.core.conj.call(null,path,prop);
var class_SINGLEQUOTE__21535 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE_));
var cs_21536 = cljs.core.filter.call(null,((function (seq__21450,chunk__21451,count__21452,i__21453,path_SINGLEQUOTE__21534,class_SINGLEQUOTE__21535,vec__21459,prop,query_SINGLEQUOTE_,seq__21450__$1,temp__6753__auto__,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__21402_SHARP_){
return cljs.core._EQ_.call(null,class_SINGLEQUOTE__21535,om.next.react_type.call(null,p1__21402_SHARP_));
});})(seq__21450,chunk__21451,count__21452,i__21453,path_SINGLEQUOTE__21534,class_SINGLEQUOTE__21535,vec__21459,prop,query_SINGLEQUOTE_,seq__21450__$1,temp__6753__auto__,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,cljs.core.get.call(null,dp__GT_cs,path));
var cascade_query_QMARK__21537 = (function (){var and__8351__auto__ = class_SINGLEQUOTE__21535;
if(cljs.core.truth_(and__8351__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_21536),(1));
} else {
return and__8351__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__21538 = (cljs.core.truth_(cascade_query_QMARK__21537)?om.next.get_query.call(null,cljs.core.first.call(null,cs_21536)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__8351__auto__ = cascade_query_QMARK__21537;
if(cljs.core.truth_(and__8351__auto__)){
return cljs.core.not_EQ_.call(null,query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__21538);
} else {
return and__8351__auto__;
}
})())){
var qs_21539 = cljs.core.get.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1);
var q_21540 = cljs.core.first.call(null,qs_21539);
var qnode_21541 = clojure.zip.node.call(null,(function (){var G__21462 = q_21540;
if((class$ == null)){
return om.next.query_template.call(null,G__21462,path);
} else {
return G__21462;
}
})());
var new_query_21542 = cljs.core.assoc.call(null,qnode_21541,prop,query_SINGLEQUOTE__SINGLEQUOTE__21538);
var q_SINGLEQUOTE__21543 = (function (){var G__21463 = clojure.zip.replace.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q_21540),path),new_query_21542);
if((class$ == null)){
return om.next.query_template.call(null,om.next.focus_query.call(null,clojure.zip.root.call(null,G__21463),cljs.core.pop.call(null,path)),cljs.core.pop.call(null,path));
} else {
return G__21463;
}
})();
var qs_SINGLEQUOTE__21544 = cljs.core.into.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([q_SINGLEQUOTE__21543]),cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([q_21540])),qs_21539);
var cp__GT_q_SINGLEQUOTE__21545 = cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([classpath__$1,qs_SINGLEQUOTE__21544]),om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),cljs.core.pop.call(null,classpath__$1),path,clojure.zip.node.call(null,q_SINGLEQUOTE__21543),union_keys));
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__21545);
} else {
}

om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__21535,query_SINGLEQUOTE__SINGLEQUOTE__21538,path_SINGLEQUOTE__21534,classpath__$1,query,cljs.core.conj.call(null,union_keys,prop));

var G__21546 = cljs.core.next.call(null,seq__21450__$1);
var G__21547 = null;
var G__21548 = (0);
var G__21549 = (0);
seq__21450 = G__21546;
chunk__21451 = G__21547;
count__21452 = G__21548;
i__21453 = G__21549;
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

return cljs.core.swap_BANG_.call(null,self__.indexes,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),cljs.core.deref.call(null,prop__GT_classes),new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cljs.core.deref.call(null,class_path__GT_query)], null));
});


om.next.Indexer.prototype.om$next$protocols$IIndexer$index_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"index-component","index-component",-1258618905).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),om.next.react_type.call(null,c)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,c));
var indexes__$3 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"index-component","index-component",-1258618905).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$2,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750),data_path], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var ident = ((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false))?(function (){var ident = om.next.ident.call(null,c,om.next.props.call(null,c));
var l__20106__auto___21550 = om.next._STAR_logger_STAR_;
if(om.util.ident_QMARK_.call(null,ident)){
} else {
goog.log.error(l__20106__auto___21550,["Invariant Violation",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((null == null))?null:[" (in function: `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(null),"`)"].join(''))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["malformed Ident. An ident must be a vector of ","two elements (a keyword and an EDN value). Check ","the Ident implementation of component `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c.constructor.displayName),"`."].join(''))].join(''));
}

var l__20106__auto___21551 = om.next._STAR_logger_STAR_;
if(!((cljs.core.second.call(null,ident) == null))){
} else {
goog.log.error(l__20106__auto___21551,["Invariant Violation",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((null == null))?null:[" (in function: `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(null),"`)"].join(''))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["component ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c.constructor.displayName),"'s ident (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ident),") has a `nil` second element."," This warning can be safely ignored if that is intended."].join(''))].join(''));
}

return ident;
})():null);
if(!((ident == null))){
var G__21465 = indexes__$3;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.call(null,G__21465,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
} else {
return G__21465;
}
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
var indexes__$2 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"drop-component","drop-component",1805913749).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),om.next.react_type.call(null,c)], null),cljs.core.disj,c);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,c));
var indexes__$3 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"drop-component","drop-component",1805913749).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$2,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750),data_path], null),cljs.core.disj,c);
var ident = ((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false))?om.next.ident.call(null,c,om.next.props.call(null,c)):null);
if(!((ident == null))){
var G__21467 = indexes__$3;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.call(null,G__21467,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident], null),cljs.core.disj,c);
} else {
return G__21467;
}
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
return cljs.core.PersistentHashSet.createAsIfByAssoc([k]);
} else {
var temp__6751__auto__ = new cljs.core.Keyword(null,"ref->components","ref->components",-303587249).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,k);
if(cljs.core.truth_(temp__6751__auto__)){
var cs = temp__6751__auto__;
return cs;
} else {
return cljs.core.transduce.call(null,cljs.core.map.call(null,((function (temp__6751__auto__,indexes__$1,___$1){
return (function (p1__21403_SHARP_){
return cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),p1__21403_SHARP_], null));
});})(temp__6751__auto__,indexes__$1,___$1))
),cljs.core.completing.call(null,cljs.core.into),cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),k], null),cljs.core.PersistentHashSet.EMPTY),cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),k], null)));
}
}
});


om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9051__auto__,k__9052__auto__){
var self__ = this;
var this__9051__auto____$1 = this;
return this__9051__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9052__auto__,null);
});


om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9053__auto__,k21405,else__9054__auto__){
var self__ = this;
var this__9053__auto____$1 = this;
var G__21468 = k21405;
var G__21468__$1 = (((G__21468 instanceof cljs.core.Keyword))?G__21468.fqn:null);
switch (G__21468__$1) {
case "indexes":
return self__.indexes;

break;
case "extfs":
return self__.extfs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21405,else__9054__auto__);

}
});


om.next.Indexer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9065__auto__,writer__9066__auto__,opts__9067__auto__){
var self__ = this;
var this__9065__auto____$1 = this;
var pr_pair__9068__auto__ = ((function (this__9065__auto____$1){
return (function (keyval__9069__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9066__auto__,cljs.core.pr_writer,""," ","",opts__9067__auto__,keyval__9069__auto__);
});})(this__9065__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9066__auto__,pr_pair__9068__auto__,"#om.next.Indexer{",", ","}",opts__9067__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extfs","extfs",607041493),self__.extfs],null))], null),self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21404){
var self__ = this;
var G__21404__$1 = this;
return (new cljs.core.RecordIter((0),G__21404__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"extfs","extfs",607041493)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


om.next.Indexer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9049__auto__){
var self__ = this;
var this__9049__auto____$1 = this;
return self__.__meta;
});


om.next.Indexer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9046__auto__){
var self__ = this;
var this__9046__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,self__.__extmap,self__.__hash));
});


om.next.Indexer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9055__auto__){
var self__ = this;
var this__9055__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9047__auto__){
var self__ = this;
var this__9047__auto____$1 = this;
var h__8819__auto__ = self__.__hash;
if(!((h__8819__auto__ == null))){
return h__8819__auto__;
} else {
var h__8819__auto____$1 = ((function (h__8819__auto__,this__9047__auto____$1){
return (function (coll__9048__auto__){
return (-952748745 ^ cljs.core.hash_unordered_coll.call(null,coll__9048__auto__));
});})(h__8819__auto__,this__9047__auto____$1))
.call(null,this__9047__auto____$1);
self__.__hash = h__8819__auto____$1;

return h__8819__auto____$1;
}
});


om.next.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21406,other21407){
var self__ = this;
var this21406__$1 = this;
return (!((other21407 == null))) && ((this21406__$1.constructor === other21407.constructor)) && (cljs.core._EQ_.call(null,this21406__$1.indexes,other21407.indexes)) && (cljs.core._EQ_.call(null,this21406__$1.extfs,other21407.extfs)) && (cljs.core._EQ_.call(null,this21406__$1.__extmap,other21407.__extmap));
});


om.next.Indexer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9060__auto__,k__9061__auto__){
var self__ = this;
var this__9060__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extfs","extfs",607041493),null,new cljs.core.Keyword(null,"indexes","indexes",1496475545),null], null), null),k__9061__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9060__auto____$1),self__.__meta),k__9061__auto__);
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9061__auto__)),null));
}
});


om.next.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9058__auto__,k__9059__auto__,G__21404){
var self__ = this;
var this__9058__auto____$1 = this;
var pred__21469 = cljs.core.keyword_identical_QMARK_;
var expr__21470 = k__9059__auto__;
if(cljs.core.truth_(pred__21469.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545),expr__21470))){
return (new om.next.Indexer(G__21404,self__.extfs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21469.call(null,new cljs.core.Keyword(null,"extfs","extfs",607041493),expr__21470))){
return (new om.next.Indexer(self__.indexes,G__21404,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9059__auto__,G__21404),null));
}
}
});


om.next.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9063__auto__){
var self__ = this;
var this__9063__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extfs","extfs",607041493),self__.extfs],null))], null),self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9050__auto__,G__21404){
var self__ = this;
var this__9050__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,G__21404,self__.__extmap,self__.__hash));
});


om.next.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9056__auto__,entry__9057__auto__){
var self__ = this;
var this__9056__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9057__auto__)){
return this__9056__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9057__auto__,(0)),cljs.core._nth.call(null,entry__9057__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9056__auto____$1,entry__9057__auto__);
}
});


om.next.Indexer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.indexes);
});

om.next.Indexer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"indexes","indexes",-1157960224,null),new cljs.core.Symbol(null,"extfs","extfs",-2047394276,null)], null);
});

om.next.Indexer.cljs$lang$type = true;

om.next.Indexer.cljs$lang$ctorPrSeq = (function (this__9089__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Indexer");
});

om.next.Indexer.cljs$lang$ctorPrWriter = (function (this__9089__auto__,writer__9090__auto__){
return cljs.core._write.call(null,writer__9090__auto__,"om.next/Indexer");
});

om.next.__GT_Indexer = (function om$next$__GT_Indexer(indexes,extfs){
return (new om.next.Indexer(indexes,extfs,null,null,null));
});

om.next.map__GT_Indexer = (function om$next$map__GT_Indexer(G__21408){
return (new om.next.Indexer(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(G__21408),new cljs.core.Keyword(null,"extfs","extfs",607041493).cljs$core$IFn$_invoke$arity$1(G__21408),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__21408,new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"extfs","extfs",607041493))),null));
});

/**
 * Given a function (Component -> Ref), return an indexer.
 */
om.next.indexer = (function om$next$indexer(var_args){
var G__21554 = arguments.length;
switch (G__21554) {
case 0:
return om.next.indexer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.indexer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.indexer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.next.indexer.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index-component","index-component",-1258618905),(function (indexes,component){
return indexes;
}),new cljs.core.Keyword(null,"drop-component","drop-component",1805913749),(function (indexes,component){
return indexes;
}),new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),(function (indexes,ref){
return null;
})], null));
});

om.next.indexer.cljs$core$IFn$_invoke$arity$1 = (function (extfs){
return (new om.next.Indexer(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),cljs.core.PersistentArrayMap.EMPTY], null)),extfs,null,null,null));
});

om.next.indexer.cljs$lang$maxFixedArity = 1;

/**
 * PRIVATE: Get the indexer associated with the reconciler.
 */
om.next.get_indexer = (function om$next$get_indexer(reconciler){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return all components for a given ref.
 */
om.next.ref__GT_components = (function om$next$ref__GT_components(x,ref){
if((ref == null)){
return null;
} else {
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return om.next.protocols.key__GT_components.call(null,indexer,ref);
}
});
/**
 * Get any component from the indexer that matches the ref.
 */
om.next.ref__GT_any = (function om$next$ref__GT_any(x,ref){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,om.next.protocols.key__GT_components.call(null,indexer,ref));
});
/**
 * Get any component from the indexer that matches the component class.
 */
om.next.class__GT_any = (function om$next$class__GT_any(x,class$){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),class$], null)));
});
/**
 * Given x (a reconciler or indexer) and y (a component or component class
 * path), return the queries for that path.
 */
om.next.class_path__GT_queries = (function om$next$class_path__GT_queries(x,y){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
var cp = ((om.next.component_QMARK_.call(null,y))?om.next.class_path.call(null,y):y);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,clojure.zip.root),cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null)));
});
/**
 * Returns the absolute query for a given component, not relative like
 * om.next/get-query.
 */
om.next.full_query = (function om$next$full_query(var_args){
var G__21558 = arguments.length;
switch (G__21558) {
case 1:
return om.next.full_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.full_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
if(om.next.iquery_QMARK_.call(null,component)){
if((om.next.path.call(null,component) == null)){
return om.next.replace.call(null,cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),om.next.class_path.call(null,component)], null))),om.next.get_query.call(null,component));
} else {
return om.next.full_query.call(null,component,om.next.get_query.call(null,component));
}
} else {
return null;
}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query){
if(om.next.iquery_QMARK_.call(null,component)){
var xf = (function (){var G__21559 = cljs.core.remove.call(null,cljs.core.number_QMARK_);
if(om.next.recursive_class_path_QMARK_.call(null,component)){
return cljs.core.comp.call(null,cljs.core.distinct.call(null),G__21559);
} else {
return G__21559;
}
})();
var path_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,xf,om.next.path.call(null,component));
var cp = om.next.class_path.call(null,component);
var qs = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null));
if(!(cljs.core.empty_QMARK_.call(null,qs))){
var q = cljs.core.first.call(null,cljs.core.filter.call(null,((function (xf,path_SINGLEQUOTE_,cp,qs){
return (function (p1__21556_SHARP_){
return cljs.core._EQ_.call(null,path_SINGLEQUOTE_,cljs.core.mapv.call(null,om.next.get_dispatch_key,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__21556_SHARP_),path_SINGLEQUOTE_)));
});})(xf,path_SINGLEQUOTE_,cp,qs))
,qs));
if(!((q == null))){
return om.next.replace.call(null,q,query);
} else {
throw cljs.core.ex_info.call(null,["No queries exist at the intersection of component path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cp)," and data path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_SINGLEQUOTE_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",2125033807)], null));
}
} else {
throw cljs.core.ex_info.call(null,["No queries exist for component path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cp)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",2125033807)], null));
}
} else {
return null;
}
});

om.next.full_query.cljs$lang$maxFixedArity = 2;

om.next.normalize_STAR_ = (function om$next$normalize_STAR_(query,data,refs,union_seen){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data;
} else {
if(cljs.core.map_QMARK_.call(null,query)){
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query));
var ident = ((((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.om$next$Ident$)))?true:false):false))?om.next.ident.call(null,class$,data):null);
if(!((ident == null))){
return cljs.core.vary_meta.call(null,om.next.normalize_STAR_.call(null,cljs.core.get.call(null,query,cljs.core.first.call(null,ident)),data,refs,union_seen),cljs.core.assoc,new cljs.core.Keyword("om","tag","om/tag",-1290356769),cljs.core.first.call(null,ident));
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
var vec__21565 = om.util.join_entry.call(null,expr);
var k = cljs.core.nth.call(null,vec__21565,(0),null);
var sel = cljs.core.nth.call(null,vec__21565,(1),null);
var recursive_QMARK_ = om.util.recursion_QMARK_.call(null,sel);
var union_entry = ((om.util.union_QMARK_.call(null,expr))?sel:union_seen);
var sel__$1 = ((recursive_QMARK_)?((!((union_seen == null)))?union_seen:query):sel);
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sel__$1));
var v = cljs.core.get.call(null,data,k);
if((recursive_QMARK_) && (om.util.ident_QMARK_.call(null,v))){
var G__21580 = cljs.core.next.call(null,q);
var G__21581 = ret;
q = G__21580;
ret = G__21581;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,v)){
var x = om.next.normalize_STAR_.call(null,sel__$1,v,refs,union_entry);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.om$next$Ident$)))?true:false):false))))){
var i = om.next.ident.call(null,class$,v);
cljs.core.swap_BANG_.call(null,refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,i),cljs.core.second.call(null,i)], null),cljs.core.merge,x);

var G__21582 = cljs.core.next.call(null,q);
var G__21583 = cljs.core.assoc.call(null,ret,k,i);
q = G__21582;
ret = G__21583;
continue;
} else {
var G__21584 = cljs.core.next.call(null,q);
var G__21585 = cljs.core.assoc.call(null,ret,k,x);
q = G__21584;
ret = G__21585;
continue;
}
} else {
if(cljs.core.vector_QMARK_.call(null,v)){
var xs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,vec__21565,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__21561_SHARP_){
return om.next.normalize_STAR_.call(null,sel__$1,p1__21561_SHARP_,refs,union_entry);
});})(q,ret,vec__21565,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),v);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.om$next$Ident$)))?true:false):false))))){
var is = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,xs,vec__21565,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__21563_SHARP_){
return om.next.ident.call(null,class$,p1__21563_SHARP_);
});})(q,ret,xs,vec__21565,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),xs);
if(cljs.core.vector_QMARK_.call(null,sel__$1)){
if(cljs.core.empty_QMARK_.call(null,is)){
} else {
cljs.core.swap_BANG_.call(null,refs,((function (q,ret,is,xs,vec__21565,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs__$1){
return cljs.core.reduce.call(null,((function (q,ret,is,xs,vec__21565,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (m,p__21572){
var vec__21573 = p__21572;
var i = cljs.core.nth.call(null,vec__21573,(0),null);
var x = cljs.core.nth.call(null,vec__21573,(1),null);
return cljs.core.update_in.call(null,m,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__21565,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs__$1,cljs.core.zipmap.call(null,is,xs));
});})(q,ret,is,xs,vec__21565,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}
} else {
cljs.core.swap_BANG_.call(null,refs,((function (q,ret,is,xs,vec__21565,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.call(null,((function (q,ret,is,xs,vec__21565,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (ret__$1,p__21576){
var vec__21577 = p__21576;
var i = cljs.core.nth.call(null,vec__21577,(0),null);
var x = cljs.core.nth.call(null,vec__21577,(1),null);
return cljs.core.update_in.call(null,ret__$1,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__21565,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs_SINGLEQUOTE_,cljs.core.map.call(null,cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__21565,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}

var G__21586 = cljs.core.next.call(null,q);
var G__21587 = cljs.core.assoc.call(null,ret,k,is);
q = G__21586;
ret = G__21587;
continue;
} else {
var G__21588 = cljs.core.next.call(null,q);
var G__21589 = cljs.core.assoc.call(null,ret,k,xs);
q = G__21588;
ret = G__21589;
continue;
}
} else {
if((v == null)){
var G__21590 = cljs.core.next.call(null,q);
var G__21591 = ret;
q = G__21590;
ret = G__21591;
continue;
} else {
var G__21592 = cljs.core.next.call(null,q);
var G__21593 = cljs.core.assoc.call(null,ret,k,v);
q = G__21592;
ret = G__21593;
continue;

}
}
}
}
} else {
var k = ((cljs.core.seq_QMARK_.call(null,expr))?cljs.core.first.call(null,expr):expr);
var v = cljs.core.get.call(null,data,k);
if((v == null)){
var G__21594 = cljs.core.next.call(null,q);
var G__21595 = ret;
q = G__21594;
ret = G__21595;
continue;
} else {
var G__21596 = cljs.core.next.call(null,q);
var G__21597 = cljs.core.assoc.call(null,ret,k,v);
q = G__21596;
ret = G__21597;
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
});
/**
 * Given a Om component class or instance and a tree of data, use the component's
 * query to transform the tree into the default database format. All nodes that
 * can be mapped via Ident implementations wil be replaced with ident links. The
 * original node data will be moved into tables indexed by ident. If merge-idents
 * option is true, will return these tables in the result instead of as metadata.
 */
om.next.tree__GT_db = (function om$next$tree__GT_db(var_args){
var G__21599 = arguments.length;
switch (G__21599) {
case 2:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return om.next.tree__GT_db.call(null,x,data,false);
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_idents){
var refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var x__$1 = ((cljs.core.vector_QMARK_.call(null,x))?x:om.next.get_query.call(null,x));
var ret = om.next.normalize_STAR_.call(null,x__$1,data,refs,null);
if(merge_idents){
var refs_SINGLEQUOTE_ = cljs.core.deref.call(null,refs);
return cljs.core.assoc.call(null,cljs.core.merge.call(null,ret,refs_SINGLEQUOTE_),new cljs.core.Keyword("om.next","tables","om.next/tables",1677536335),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,refs_SINGLEQUOTE_)));
} else {
return cljs.core.with_meta.call(null,ret,cljs.core.deref.call(null,refs));
}
});

om.next.tree__GT_db.cljs$lang$maxFixedArity = 3;

om.next.sift_idents = (function om$next$sift_idents(res){
var map__21602 = cljs.core.group_by.call(null,(function (p1__21601_SHARP_){
return cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,p1__21601_SHARP_));
}),res);
var map__21602__$1 = ((((!((map__21602 == null)))?((((map__21602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21602):map__21602);
var idents = cljs.core.get.call(null,map__21602__$1,true);
var rest = cljs.core.get.call(null,map__21602__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,idents),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,rest)], null);
});
/**
 * Changes a join on key k with depth limit from [:a {:k n}] to [:a {:k (dec n)}]
 */
om.next.reduce_query_depth = (function om$next$reduce_query_depth(q,k){
if(!(cljs.core.empty_QMARK_.call(null,om.next.focus_query.call(null,q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))))){
var pos = om.next.query_template.call(null,q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var node = clojure.zip.node.call(null,pos);
var node_SINGLEQUOTE_ = (function (){var G__21604 = node;
if(typeof node === 'number'){
return (G__21604 - (1));
} else {
return G__21604;
}
})();
return om.next.replace.call(null,pos,node_SINGLEQUOTE_);
} else {
return q;
}
});
/**
 * Given a union expression decrement each of the query roots by one if it
 * is recursive.
 */
om.next.reduce_union_recursion_depth = (function om$next$reduce_union_recursion_depth(union_expr,recursion_key){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__21605){
var vec__21606 = p__21605;
var k = cljs.core.nth.call(null,vec__21606,(0),null);
var q = cljs.core.nth.call(null,vec__21606,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.next.reduce_query_depth.call(null,q,recursion_key)], null);
}),union_expr));
});
om.next.mappable_ident_QMARK_ = (function om$next$mappable_ident_QMARK_(refs,ident){
return (om.util.ident_QMARK_.call(null,ident)) && (cljs.core.contains_QMARK_.call(null,refs,cljs.core.first.call(null,ident)));
});
/**
 * Denormalize a data based on query. refs is a data structure which maps idents
 * to their values. map-ident is a function taking a ident to another ident,
 * used during tempid transition. idents-seen is the set of idents encountered,
 * used to limit recursion. union-expr is the current union expression being
 * evaluated. recurse-key is key representing the current recursive query being
 * evaluted.
 */
om.next.denormalize_STAR_ = (function om$next$denormalize_STAR_(query,data,refs,map_ident,idents_seen,union_expr,recurse_key){
var union_recur_QMARK_ = (function (){var and__8351__auto__ = union_expr;
if(cljs.core.truth_(and__8351__auto__)){
return recurse_key;
} else {
return and__8351__auto__;
}
})();
var recur_ident = (cljs.core.truth_(union_recur_QMARK_)?data:null);
var data__$1 = (function (){var data__$1 = data;
while(true){
if(cljs.core.truth_(om.next.mappable_ident_QMARK_.call(null,refs,data__$1))){
var G__21634 = cljs.core.get_in.call(null,refs,map_ident.call(null,data__$1));
data__$1 = G__21634;
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
if(cljs.core._EQ_.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null))){
return ident;
} else {
var map__21612 = cljs.core.group_by.call(null,om.util.join_QMARK_,query);
var map__21612__$1 = ((((!((map__21612 == null)))?((((map__21612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21612):map__21612);
var props = cljs.core.get.call(null,map__21612__$1,false);
var joins = cljs.core.get.call(null,map__21612__$1,true);
var props__$1 = cljs.core.mapv.call(null,((function (map__21612,map__21612__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__21609_SHARP_){
var G__21614 = p1__21609_SHARP_;
if(cljs.core.seq_QMARK_.call(null,p1__21609_SHARP_)){
return cljs.core.first.call(null,G__21614);
} else {
return G__21614;
}
});})(map__21612,map__21612__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq.call(null,joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first.call(null,joins__$1);
var vec__21615 = om.util.join_entry.call(null,join);
var key = cljs.core.nth.call(null,vec__21615,(0),null);
var sel = cljs.core.nth.call(null,vec__21615,(1),null);
var v = cljs.core.get.call(null,ident,key);
var G__21635 = cljs.core.next.call(null,joins__$1);
var G__21636 = cljs.core.assoc.call(null,ret,key,om.next.denormalize_STAR_.call(null,sel,v,refs,map_ident,idents_seen,union_expr,recurse_key));
joins__$1 = G__21635;
ret = G__21636;
continue;
} else {
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,ident,props__$1),ret);
}
break;
}
}
} else {
var ident_SINGLEQUOTE_ = cljs.core.get_in.call(null,refs,map_ident.call(null,ident));
var query__$1 = (function (){var G__21618 = query;
if(cljs.core.truth_(union_recur_QMARK_)){
return om.next.reduce_union_recursion_depth.call(null,G__21618,recurse_key);
} else {
return G__21618;
}
})();
var union_seen_SINGLEQUOTE_ = (function (){var G__21619 = union_expr;
if(cljs.core.truth_(union_recur_QMARK_)){
return om.next.reduce_union_recursion_depth.call(null,G__21619,recurse_key);
} else {
return G__21619;
}
})();
var query_SINGLEQUOTE_ = (function (){var G__21620 = query__$1;
if(cljs.core.map_QMARK_.call(null,query__$1)){
return cljs.core.get.call(null,G__21620,cljs.core.first.call(null,ident));
} else {
return G__21620;
}
})();
return om.next.denormalize_STAR_.call(null,query_SINGLEQUOTE_,ident_SINGLEQUOTE_,refs,map_ident,idents_seen,union_seen_SINGLEQUOTE_,null);
}
});})(union_recur_QMARK_,recur_ident,data__$1))
;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,step),data__$1);
} else {
if(cljs.core.truth_((function (){var and__8351__auto__ = cljs.core.map_QMARK_.call(null,query);
if(and__8351__auto__){
return union_recur_QMARK_;
} else {
return and__8351__auto__;
}
})())){
return om.next.denormalize_STAR_.call(null,cljs.core.get.call(null,query,cljs.core.first.call(null,recur_ident)),data__$1,refs,map_ident,idents_seen,union_expr,recurse_key);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data__$1;
} else {
var map__21621 = cljs.core.group_by.call(null,((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__21610_SHARP_){
var or__8363__auto__ = om.util.join_QMARK_.call(null,p1__21610_SHARP_);
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return (om.util.ident_QMARK_.call(null,p1__21610_SHARP_)) || ((cljs.core.seq_QMARK_.call(null,p1__21610_SHARP_)) && (om.util.ident_QMARK_.call(null,cljs.core.first.call(null,p1__21610_SHARP_))));
}
});})(union_recur_QMARK_,recur_ident,data__$1))
,query);
var map__21621__$1 = ((((!((map__21621 == null)))?((((map__21621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21621.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21621):map__21621);
var props = cljs.core.get.call(null,map__21621__$1,false);
var joins = cljs.core.get.call(null,map__21621__$1,true);
var props__$1 = cljs.core.mapv.call(null,((function (map__21621,map__21621__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__21611_SHARP_){
var G__21623 = p1__21611_SHARP_;
if(cljs.core.seq_QMARK_.call(null,p1__21611_SHARP_)){
return cljs.core.first.call(null,G__21623);
} else {
return G__21623;
}
});})(map__21621,map__21621__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq.call(null,joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first.call(null,joins__$1);
var join__$1 = (function (){var G__21627 = join;
if(cljs.core.seq_QMARK_.call(null,join)){
return cljs.core.first.call(null,G__21627);
} else {
return G__21627;
}
})();
var join__$2 = (function (){var G__21628 = join__$1;
if(om.util.ident_QMARK_.call(null,join__$1)){
return cljs.core.PersistentHashMap.fromArrays([G__21628],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)]);
} else {
return G__21628;
}
})();
var vec__21624 = om.util.join_entry.call(null,join__$2);
var key = cljs.core.nth.call(null,vec__21624,(0),null);
var sel = cljs.core.nth.call(null,vec__21624,(1),null);
var recurse_QMARK_ = om.util.recursion_QMARK_.call(null,sel);
var recurse_key__$1 = ((recurse_QMARK_)?key:null);
var v = ((om.util.ident_QMARK_.call(null,key))?((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second.call(null,key)))?cljs.core.get.call(null,refs,cljs.core.first.call(null,key)):cljs.core.get_in.call(null,refs,map_ident.call(null,key))):cljs.core.get.call(null,data__$1,key));
var key__$1 = (function (){var G__21629 = key;
if(om.util.unique_ident_QMARK_.call(null,key)){
return cljs.core.first.call(null,G__21629);
} else {
return G__21629;
}
})();
var v__$1 = (cljs.core.truth_(om.next.mappable_ident_QMARK_.call(null,refs,v))?(function (){var v__$1 = v;
while(true){
var next = cljs.core.get_in.call(null,refs,map_ident.call(null,v__$1));
if(cljs.core.truth_(om.next.mappable_ident_QMARK_.call(null,refs,next))){
var G__21637 = next;
v__$1 = G__21637;
continue;
} else {
return map_ident.call(null,v__$1);
}
break;
}
})():v);
var limit = ((typeof sel === 'number')?sel:new cljs.core.Keyword(null,"none","none",1333468478));
var union_entry = ((om.util.union_QMARK_.call(null,join__$2))?sel:((recurse_QMARK_)?union_expr:null));
var sel__$1 = ((recurse_QMARK_)?((!((union_expr == null)))?union_entry:om.next.reduce_query_depth.call(null,query,key__$1)):(cljs.core.truth_((function (){var and__8351__auto__ = om.next.mappable_ident_QMARK_.call(null,refs,v__$1);
if(cljs.core.truth_(and__8351__auto__)){
return om.util.union_QMARK_.call(null,join__$2);
} else {
return and__8351__auto__;
}
})())?cljs.core.get.call(null,sel,cljs.core.first.call(null,v__$1)):(((om.util.ident_QMARK_.call(null,key__$1)) && (om.util.union_QMARK_.call(null,join__$2)))?cljs.core.get.call(null,sel,cljs.core.first.call(null,key__$1)):sel
)));
var graph_loop_QMARK_ = (recurse_QMARK_) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.get.call(null,idents_seen,key__$1)),v__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"none","none",1333468478),limit));
var idents_seen__$1 = (cljs.core.truth_((function (){var and__8351__auto__ = om.next.mappable_ident_QMARK_.call(null,refs,v__$1);
if(cljs.core.truth_(and__8351__auto__)){
return recurse_QMARK_;
} else {
return and__8351__auto__;
}
})())?cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,idents_seen,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key__$1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),v__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",534500972),key__$1], null),v__$1):idents_seen);
if(cljs.core._EQ_.call(null,(0),limit)){
var G__21638 = cljs.core.next.call(null,joins__$1);
var G__21639 = ret;
joins__$1 = G__21638;
ret = G__21639;
continue;
} else {
if(graph_loop_QMARK_){
var G__21640 = cljs.core.next.call(null,joins__$1);
var G__21641 = ret;
joins__$1 = G__21640;
ret = G__21641;
continue;
} else {
if((v__$1 == null)){
var G__21642 = cljs.core.next.call(null,joins__$1);
var G__21643 = ret;
joins__$1 = G__21642;
ret = G__21643;
continue;
} else {
var G__21644 = cljs.core.next.call(null,joins__$1);
var G__21645 = cljs.core.assoc.call(null,ret,key__$1,om.next.denormalize_STAR_.call(null,sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1));
joins__$1 = G__21644;
ret = G__21645;
continue;

}
}
}
} else {
var temp__6751__auto__ = cljs.core.some.call(null,((function (joins__$1,ret,map__21621,map__21621__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1){
return (function (p__21630){
var vec__21631 = p__21630;
var k = cljs.core.nth.call(null,vec__21631,(0),null);
var identset = cljs.core.nth.call(null,vec__21631,(1),null);
if(cljs.core.contains_QMARK_.call(null,identset,cljs.core.get.call(null,data__$1,k))){
return cljs.core.get_in.call(null,idents_seen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",534500972),k], null));
} else {
return null;
}
});})(joins__$1,ret,map__21621,map__21621__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1))
,cljs.core.dissoc.call(null,idents_seen,new cljs.core.Keyword(null,"last-ident","last-ident",534500972)));
if(cljs.core.truth_(temp__6751__auto__)){
var looped_key = temp__6751__auto__;
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
});
/**
 * Given a query, some data in the default database format, and the entire
 * application state in the default database format, return the tree where all
 * ident links have been replaced with their original node values.
 */
om.next.db__GT_tree = (function om$next$db__GT_tree(var_args){
var G__21647 = arguments.length;
switch (G__21647) {
case 3:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

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

om.next.db__GT_tree.cljs$lang$maxFixedArity = 4;

om.next.rewrite = (function om$next$rewrite(rewrite_map,result){
var step = (function om$next$rewrite_$_step(res,p__21655){
var vec__21656 = p__21655;
var k = cljs.core.nth.call(null,vec__21656,(0),null);
var orig_paths = cljs.core.nth.call(null,vec__21656,(1),null);
var to_move = cljs.core.get.call(null,result,k);
var res_SINGLEQUOTE_ = cljs.core.reduce.call(null,((function (to_move,vec__21656,k,orig_paths){
return (function (p1__21649_SHARP_,p2__21650_SHARP_){
return cljs.core.assoc_in.call(null,p1__21649_SHARP_,cljs.core.conj.call(null,p2__21650_SHARP_,k),to_move);
});})(to_move,vec__21656,k,orig_paths))
,res,orig_paths);
return cljs.core.dissoc.call(null,res_SINGLEQUOTE_,k);
});
return cljs.core.reduce.call(null,step,result,rewrite_map);
});
/**
 * When given a join `{:join selector-vector}`, roots found so far, and a `path` prefix:
 *   returns a (possibly empty) sequence of [re-rooted-join prefix] results.
 *   Does NOT support sub-roots. Each re-rooted join will share only
 *   one common parent (their common branching point).
 *   
 */
om.next.move_roots = (function om$next$move_roots(join,result_roots,path){
var query_root_QMARK_ = (function om$next$move_roots_$_query_root_QMARK_(join__$1){
return new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,join__$1)) === true;
});
if(cljs.core.truth_(om.util.join_QMARK_.call(null,join))){
if(cljs.core.truth_(query_root_QMARK_.call(null,join))){
return cljs.core.conj.call(null,result_roots,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [join,path], null));
} else {
var joinvalue = om.util.join_value.call(null,join);
if(cljs.core.vector_QMARK_.call(null,joinvalue)){
return cljs.core.mapcat.call(null,((function (joinvalue){
return (function (p1__21659_SHARP_){
return om.next.move_roots.call(null,p1__21659_SHARP_,result_roots,cljs.core.conj.call(null,path,om.util.join_key.call(null,join)));
});})(joinvalue))
,joinvalue);
} else {
return result_roots;
}
}
} else {
return result_roots;
}
});
/**
 * Searches a query for duplicate joins and deep-merges them into a new query.
 */
om.next.merge_joins = (function om$next$merge_joins(query){
var step = (function om$next$merge_joins_$_step(res,expr){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521).cljs$core$IFn$_invoke$arity$1(res),expr)){
return res;
} else {
return cljs.core.update_in.call(null,(cljs.core.truth_((function (){var and__8351__auto__ = om.util.join_QMARK_.call(null,expr);
if(cljs.core.truth_(and__8351__auto__)){
return (!(om.util.union_QMARK_.call(null,expr))) && (!(cljs.core.list_QMARK_.call(null,expr)));
} else {
return and__8351__auto__;
}
})())?(function (){var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var q = (function (){var or__8363__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450).cljs$core$IFn$_invoke$arity$1(res),jk);
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var nq = ((om.util.recursion_QMARK_.call(null,q))?q:((om.util.recursion_QMARK_.call(null,jv))?jv:om.next.merge_joins.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,q,jv)))
));
return cljs.core.update_in.call(null,res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450)], null),cljs.core.assoc,jk,nq);
})():cljs.core.update_in.call(null,res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-mergeable","not-mergeable",-291093370)], null),cljs.core.conj,expr)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521)], null),cljs.core.conj,expr);
}
});
var init = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"not-mergeable","not-mergeable",-291093370),cljs.core.PersistentVector.EMPTY], null);
var res = cljs.core.reduce.call(null,step,init,query);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.Keyword(null,"not-mergeable","not-mergeable",-291093370).cljs$core$IFn$_invoke$arity$1(res),cljs.core.mapv.call(null,((function (init,res){
return (function (p__21660){
var vec__21661 = p__21660;
var jkey = cljs.core.nth.call(null,vec__21661,(0),null);
var jsel = cljs.core.nth.call(null,vec__21661,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([jkey,jsel]);
});})(init,res))
,new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450).cljs$core$IFn$_invoke$arity$1(res))));
});
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
var rewrite_map_step = (function om$next$process_roots_$_rewrite_map_step(rewrites,p__21668){
var vec__21669 = p__21668;
var expr = cljs.core.nth.call(null,vec__21669,(0),null);
var path = cljs.core.nth.call(null,vec__21669,(1),null);
if(cljs.core.empty_QMARK_.call(null,path)){
return rewrites;
} else {
return cljs.core.update_in.call(null,rewrites,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.util.join_key.call(null,expr)], null),cljs.core.conj,path);
}
});
var reroots = cljs.core.mapcat.call(null,reroot,query);
var query__$1 = om.next.merge_joins.call(null,cljs.core.mapv.call(null,cljs.core.first,reroots));
var rewrite_map = cljs.core.reduce.call(null,rewrite_map_step,cljs.core.PersistentArrayMap.EMPTY,reroots);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query__$1,new cljs.core.Keyword(null,"rewrite","rewrite",870487388),cljs.core.partial.call(null,om.next.rewrite,rewrite_map)], null);
});
om.next.merge_idents = (function om$next$merge_idents(tree,config,refs,query){
var map__21673 = config;
var map__21673__$1 = ((((!((map__21673 == null)))?((((map__21673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21673.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21673):map__21673);
var merge_ident = cljs.core.get.call(null,map__21673__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862));
var indexer = cljs.core.get.call(null,map__21673__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315));
var ident_joins = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (map__21673,map__21673__$1,merge_ident,indexer){
return (function (p1__21672_SHARP_){
var and__8351__auto__ = om.util.join_QMARK_.call(null,p1__21672_SHARP_);
if(cljs.core.truth_(and__8351__auto__)){
return om.util.ident_QMARK_.call(null,om.util.join_key.call(null,p1__21672_SHARP_));
} else {
return and__8351__auto__;
}
});})(map__21673,map__21673__$1,merge_ident,indexer))
,query));
var step = ((function (map__21673,map__21673__$1,merge_ident,indexer,ident_joins){
return (function om$next$merge_idents_$_step(tree_SINGLEQUOTE_,p__21679){
var vec__21680 = p__21679;
var ident = cljs.core.nth.call(null,vec__21680,(0),null);
var props = cljs.core.nth.call(null,vec__21680,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))){
var c_or_q = (function (){var or__8363__auto__ = cljs.core.get.call(null,ident_joins,ident);
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return om.next.ref__GT_any.call(null,indexer,ident);
}
})();
var props_SINGLEQUOTE_ = om.next.tree__GT_db.call(null,c_or_q,props);
var refs__$1 = cljs.core.meta.call(null,props_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_),refs__$1);
} else {
return merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props);
}
});})(map__21673,map__21673__$1,merge_ident,indexer,ident_joins))
;
return cljs.core.reduce.call(null,step,tree,refs);
});
om.next.merge_novelty_BANG_ = (function om$next$merge_novelty_BANG_(reconciler,state,res,query){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var vec__21683 = om.next.sift_idents.call(null,res);
var idts = cljs.core.nth.call(null,vec__21683,(0),null);
var res_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__21683,(1),null);
var res_SINGLEQUOTE___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))?om.next.tree__GT_db.call(null,(function (){var or__8363__auto__ = query;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)));
}
})(),res_SINGLEQUOTE_,true):res_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,om.next.merge_idents.call(null,state,config,idts,query),res_SINGLEQUOTE___$1);
});
om.next.default_merge = (function om$next$default_merge(reconciler,state,res,query){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,res)),new cljs.core.Keyword(null,"next","next",-117701485),om.next.merge_novelty_BANG_.call(null,reconciler,state,res,query),new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.second),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
/**
 * Merge a state delta into the application state. Affected components managed
 * by the reconciler will re-render.
 */
om.next.merge_BANG_ = (function om$next$merge_BANG_(var_args){
var G__21687 = arguments.length;
switch (G__21687) {
case 2:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,delta){
return om.next.merge_BANG_.call(null,reconciler,delta,null);
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,delta,query){
return om.next.merge_BANG_.call(null,reconciler,delta,query,null);
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,delta,query,remote){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(config);
var merge_STAR_ = new cljs.core.Keyword(null,"merge","merge",-1804319409).cljs$core$IFn$_invoke$arity$1(config);
var map__21688 = merge_STAR_.call(null,reconciler,cljs.core.deref.call(null,state),delta,query);
var map__21688__$1 = ((((!((map__21688 == null)))?((((map__21688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21688):map__21688);
var keys = cljs.core.get.call(null,map__21688__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var next = cljs.core.get.call(null,map__21688__$1,new cljs.core.Keyword(null,"next","next",-117701485));
var tempids = cljs.core.get.call(null,map__21688__$1,new cljs.core.Keyword(null,"tempids","tempids",1767509089));
if((remote == null)){
om.next.protocols.queue_BANG_.call(null,reconciler,keys);
} else {
}

return cljs.core.reset_BANG_.call(null,state,(function (){var temp__6751__auto__ = new cljs.core.Keyword(null,"migrate","migrate",-207110743).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__6751__auto__)){
var migrate = temp__6751__auto__;
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,next,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null)),migrate.call(null,next,(function (){var or__8363__auto__ = query;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return om.next.get_query.call(null,new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler))));
}
})(),tempids,new cljs.core.Keyword(null,"id-key","id-key",-1881730044).cljs$core$IFn$_invoke$arity$1(config)));
} else {
return next;
}
})());
});

om.next.merge_BANG_.cljs$lang$maxFixedArity = 4;


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
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});

om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9051__auto__,k__9052__auto__){
var self__ = this;
var this__9051__auto____$1 = this;
return this__9051__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9052__auto__,null);
});


om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9053__auto__,k21696,else__9054__auto__){
var self__ = this;
var this__9053__auto____$1 = this;
var G__21700 = k21696;
var G__21700__$1 = (((G__21700 instanceof cljs.core.Keyword))?G__21700.fqn:null);
switch (G__21700__$1) {
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21696,else__9054__auto__);

}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$ = cljs.core.PROTOCOL_SENTINEL;


om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$2 = (function (this$,ks){
var self__ = this;
var this$__$1 = this;
return this$__$1.om$next$protocols$IReconciler$queue_BANG_$arity$3(null,ks,null);
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$3 = (function (_,ks,remote){
var self__ = this;
var ___$1 = this;
if(!((remote == null))){
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote-queue","remote-queue",1823260578),remote], null),cljs.core.into,ks);
} else {
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.into,ks);
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_sends_BANG_$arity$2 = (function (_,sends){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765)], null),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202).cljs$core$IFn$_invoke$arity$1(self__.config),sends);
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$send_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sends = new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.empty_QMARK_.call(null,sends)){
return null;
} else {
cljs.core.swap_BANG_.call(null,self__.state,((function (sends,this$__$1){
return (function (state__$1){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),false);
});})(sends,this$__$1))
);

return new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,sends,((function (sends,this$__$1){
return (function() {
var om$next$send_cb = null;
var om$next$send_cb__1 = (function (resp){
return om.next.merge_BANG_.call(null,this$__$1,resp,null);
});
var om$next$send_cb__2 = (function (resp,query){
return om.next.merge_BANG_.call(null,this$__$1,resp,query);
});
var om$next$send_cb__3 = (function (resp,query,remote){
if((remote == null)){
} else {
om.next.protocols.queue_BANG_.call(null,this$__$1,cljs.core.keys.call(null,resp),remote);
}

om.next.merge_BANG_.call(null,this$__$1,resp,query,remote);

return om.next.protocols.reconcile_BANG_.call(null,this$__$1,remote);
});
om$next$send_cb = function(resp,query,remote){
switch(arguments.length){
case 1:
return om$next$send_cb__1.call(this,resp);
case 2:
return om$next$send_cb__2.call(this,resp,query);
case 3:
return om$next$send_cb__3.call(this,resp,query,remote);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
om$next$send_cb.cljs$core$IFn$_invoke$arity$1 = om$next$send_cb__1;
om$next$send_cb.cljs$core$IFn$_invoke$arity$2 = om$next$send_cb__2;
om$next$send_cb.cljs$core$IFn$_invoke$arity$3 = om$next$send_cb__3;
return om$next$send_cb;
})()
;})(sends,this$__$1))
);
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.om$next$protocols$IReconciler$reconcile_BANG_$arity$2(null,null);
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$2 = (function (this$,remote){
var self__ = this;
var this$__$1 = this;
var st = cljs.core.deref.call(null,self__.state);
var q = ((!((remote == null)))?cljs.core.get_in.call(null,st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote-queue","remote-queue",1823260578),remote], null)):new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(st));
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued","queued",1701634607)], null),cljs.core.not);

if(!((remote == null))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote-queue","remote-queue",1823260578),remote], null),cljs.core.PersistentVector.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,q)){
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(st).call(null);
} else {
var cs = cljs.core.transduce.call(null,cljs.core.map.call(null,((function (st,q,this$__$1){
return (function (p1__21692_SHARP_){
return om.next.protocols.key__GT_components.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),p1__21692_SHARP_);
});})(st,q,this$__$1))
),((function (st,q,this$__$1){
return (function (p1__21693_SHARP_,p2__21694_SHARP_){
return cljs.core.into.call(null,p1__21693_SHARP_,p2__21694_SHARP_);
});})(st,q,this$__$1))
,cljs.core.PersistentHashSet.EMPTY,q);
var map__21701 = self__.config;
var map__21701__$1 = ((((!((map__21701 == null)))?((((map__21701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21701.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21701):map__21701);
var ui__GT_props = cljs.core.get.call(null,map__21701__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102));
var env = om.next.to_env.call(null,self__.config);
var root = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
var seq__21703 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"optimize","optimize",-1912349448).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,cs));
var chunk__21704 = null;
var count__21705 = (0);
var i__21706 = (0);
while(true){
if((i__21706 < count__21705)){
var c = cljs.core._nth.call(null,chunk__21704,i__21706);
var props_change_QMARK__21714 = (this$__$1.om$next$protocols$IReconciler$basis_t$arity$1(null) > om.next.t.call(null,c));
if(om.next.mounted_QMARK_.call(null,c)){
var computed_21715 = om.next.get_computed.call(null,om.next.props.call(null,c));
var next_raw_props_21716 = ui__GT_props.call(null,env,c);
var next_props_21717 = om.next.computed.call(null,next_raw_props_21716,computed_21715);
if((typeof c.componentWillReceiveProps !== 'undefined') && (om.next.iquery_QMARK_.call(null,root)) && (props_change_QMARK__21714)){
var next_props_21718__$1 = (((next_props_21717 == null))?(function (){var temp__6753__auto__ = om.next.props.call(null,c);
if(cljs.core.truth_(temp__6753__auto__)){
var props = temp__6753__auto__;
return props;
} else {
return null;
}
})():next_props_21717);
c.componentWillReceiveProps(({"omcljs$value": om.next.om_props.call(null,next_props_21718__$1,this$__$1.om$next$protocols$IReconciler$basis_t$arity$1(null))}));
} else {
}

if(cljs.core.truth_(om.next.should_update_QMARK_.call(null,c,next_props_21717,om.next.get_state.call(null,c)))){
if(!((next_props_21717 == null))){
om.next.update_component_BANG_.call(null,c,next_props_21717);
} else {
c.forceUpdate();
}

if((om.next.iquery_QMARK_.call(null,root)) && (cljs.core.not_EQ_.call(null,c,root)) && (props_change_QMARK__21714)){
var temp__6753__auto___21719 = om.next.path.call(null,c);
if(cljs.core.truth_(temp__6753__auto___21719)){
var update_path_21720 = temp__6753__auto___21719;
var p_21721 = om.next.parent.call(null,c);
while(true){
if(!((p_21721 == null))){
var update_path_SINGLEQUOTE__21722 = cljs.core.subvec.call(null,update_path_21720,cljs.core.count.call(null,om.next.path.call(null,p_21721)));
om.next.update_props_BANG_.call(null,p_21721,cljs.core.assoc_in.call(null,om.next.props.call(null,p_21721),update_path_SINGLEQUOTE__21722,next_raw_props_21716));

om.next.merge_pending_props_BANG_.call(null,p_21721);

var G__21723 = om.next.parent.call(null,p_21721);
p_21721 = G__21723;
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

var G__21724 = seq__21703;
var G__21725 = chunk__21704;
var G__21726 = count__21705;
var G__21727 = (i__21706 + (1));
seq__21703 = G__21724;
chunk__21704 = G__21725;
count__21705 = G__21726;
i__21706 = G__21727;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__21703);
if(temp__6753__auto__){
var seq__21703__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21703__$1)){
var c__9294__auto__ = cljs.core.chunk_first.call(null,seq__21703__$1);
var G__21728 = cljs.core.chunk_rest.call(null,seq__21703__$1);
var G__21729 = c__9294__auto__;
var G__21730 = cljs.core.count.call(null,c__9294__auto__);
var G__21731 = (0);
seq__21703 = G__21728;
chunk__21704 = G__21729;
count__21705 = G__21730;
i__21706 = G__21731;
continue;
} else {
var c = cljs.core.first.call(null,seq__21703__$1);
var props_change_QMARK__21732 = (this$__$1.om$next$protocols$IReconciler$basis_t$arity$1(null) > om.next.t.call(null,c));
if(om.next.mounted_QMARK_.call(null,c)){
var computed_21733 = om.next.get_computed.call(null,om.next.props.call(null,c));
var next_raw_props_21734 = ui__GT_props.call(null,env,c);
var next_props_21735 = om.next.computed.call(null,next_raw_props_21734,computed_21733);
if((typeof c.componentWillReceiveProps !== 'undefined') && (om.next.iquery_QMARK_.call(null,root)) && (props_change_QMARK__21732)){
var next_props_21736__$1 = (((next_props_21735 == null))?(function (){var temp__6753__auto____$1 = om.next.props.call(null,c);
if(cljs.core.truth_(temp__6753__auto____$1)){
var props = temp__6753__auto____$1;
return props;
} else {
return null;
}
})():next_props_21735);
c.componentWillReceiveProps(({"omcljs$value": om.next.om_props.call(null,next_props_21736__$1,this$__$1.om$next$protocols$IReconciler$basis_t$arity$1(null))}));
} else {
}

if(cljs.core.truth_(om.next.should_update_QMARK_.call(null,c,next_props_21735,om.next.get_state.call(null,c)))){
if(!((next_props_21735 == null))){
om.next.update_component_BANG_.call(null,c,next_props_21735);
} else {
c.forceUpdate();
}

if((om.next.iquery_QMARK_.call(null,root)) && (cljs.core.not_EQ_.call(null,c,root)) && (props_change_QMARK__21732)){
var temp__6753__auto___21737__$1 = om.next.path.call(null,c);
if(cljs.core.truth_(temp__6753__auto___21737__$1)){
var update_path_21738 = temp__6753__auto___21737__$1;
var p_21739 = om.next.parent.call(null,c);
while(true){
if(!((p_21739 == null))){
var update_path_SINGLEQUOTE__21740 = cljs.core.subvec.call(null,update_path_21738,cljs.core.count.call(null,om.next.path.call(null,p_21739)));
om.next.update_props_BANG_.call(null,p_21739,cljs.core.assoc_in.call(null,om.next.props.call(null,p_21739),update_path_SINGLEQUOTE__21740,next_raw_props_21734));

om.next.merge_pending_props_BANG_.call(null,p_21739);

var G__21741 = om.next.parent.call(null,p_21739);
p_21739 = G__21741;
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

var G__21742 = cljs.core.next.call(null,seq__21703__$1);
var G__21743 = null;
var G__21744 = (0);
var G__21745 = (0);
seq__21703 = G__21742;
chunk__21704 = G__21743;
count__21705 = G__21744;
i__21706 = G__21745;
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
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"queued","queued",1701634607).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queued","queued",1701634607),true);

return true;
} else {
return false;
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_sends_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),true);

return true;
} else {
return false;
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$add_root_BANG_$arity$4 = (function (this$,root_class,target,options){
var self__ = this;
var this$__$1 = this;
var ret = cljs.core.atom.call(null,null);
var rctor = om.next.factory.call(null,root_class);
var guid = cljs.core.random_uuid.call(null);
if(om.next.iquery_QMARK_.call(null,root_class)){
om.next.protocols.index_root.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),root_class);
} else {
}

if(cljs.core.truth_((function (){var and__8351__auto__ = new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(and__8351__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)));
} else {
return and__8351__auto__;
}
})())){
var new_state_21746 = om.next.tree__GT_db.call(null,root_class,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
var refs_21747 = cljs.core.meta.call(null,new_state_21746);
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.merge.call(null,new_state_21746,refs_21747));

cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),true);
} else {
}

var renderf = ((function (ret,rctor,guid,this$__$1){
return (function (data){
var _STAR_reconciler_STAR_21707 = om.next._STAR_reconciler_STAR_;
var _STAR_shared_STAR_21708 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21709 = om.next._STAR_instrument_STAR_;
om.next._STAR_reconciler_STAR_ = this$__$1;

om.next._STAR_shared_STAR_ = cljs.core.merge.call(null,new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(self__.config),(cljs.core.truth_(new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config))?new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,data):null));

om.next._STAR_instrument_STAR_ = new cljs.core.Keyword(null,"instrument","instrument",-960698844).cljs$core$IFn$_invoke$arity$1(self__.config);

try{var c = ((!((target == null)))?new cljs.core.Keyword(null,"root-render","root-render",835981146).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,rctor.call(null,data),target):(((cljs.core.deref.call(null,ret) == null))?rctor.call(null,data):(function (){var temp__6753__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(temp__6753__auto__)){
var c_SINGLEQUOTE_ = temp__6753__auto__;
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
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"root","root",-448657453),c);

return cljs.core.reset_BANG_.call(null,ret,c);
} else {
return null;
}
}finally {om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21709;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21708;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21707;
}});})(ret,rctor,guid,this$__$1))
;
var parsef = ((function (renderf,ret,rctor,guid,this$__$1){
return (function (){
var sel = om.next.get_query.call(null,(function (){var or__8363__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return root_class;
}
})());
if(((sel == null)) || (cljs.core.vector_QMARK_.call(null,sel))){
} else {
throw (new Error(["Assert failed: ","Application root query must be a vector","\n","(or (nil? sel) (vector? sel))"].join('')));
}

if(!((sel == null))){
var env = om.next.to_env.call(null,self__.config);
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env,sel);
if(cljs.core.empty_QMARK_.call(null,v)){
return null;
} else {
return renderf.call(null,v);
}
} else {
return renderf.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
}
});})(renderf,ret,rctor,guid,this$__$1))
;
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"render","render",-1408033454),parsef,new cljs.core.Keyword(null,"root","root",-448657453),root_class,new cljs.core.Keyword(null,"remove","remove",-131428414),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (){
cljs.core.remove_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__8363__auto__ = target;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return guid;
}
})());

cljs.core.swap_BANG_.call(null,self__.state,((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (p1__21691_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__21691_SHARP_,new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword(null,"root","root",-448657453)),new cljs.core.Keyword(null,"remove","remove",-131428414));
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

if((target == null)){
return null;
} else {
return new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,target);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
], null));

cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__8363__auto__ = target;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return guid;
}
})(),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (_,___$1,___$2,___$3){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519)], null),cljs.core.inc);

if(!(om.next.iquery_QMARK_.call(null,root_class))){
return om.next.queue_render_BANG_.call(null,parsef);
} else {
return om.next.schedule_render_BANG_.call(null,this$__$1);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

parsef.call(null);

var temp__6753__auto___21748 = om.next.get_query.call(null,(function (){var or__8363__auto__ = (function (){var and__8351__auto__ = target;
if(cljs.core.truth_(and__8351__auto__)){
return cljs.core.deref.call(null,ret);
} else {
return and__8351__auto__;
}
})();
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return root_class;
}
})());
if(cljs.core.truth_(temp__6753__auto___21748)){
var sel_21749 = temp__6753__auto___21748;
var env_21750 = om.next.to_env.call(null,self__.config);
var snds_21751 = om.next.gather_sends.call(null,env_21750,sel_21749,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(self__.config));
if(cljs.core.empty_QMARK_.call(null,snds_21751)){
} else {
var temp__6753__auto___21752__$1 = new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(temp__6753__auto___21752__$1)){
var send_21753 = temp__6753__auto___21752__$1;
send_21753.call(null,snds_21751,((function (send_21753,temp__6753__auto___21752__$1,env_21750,snds_21751,sel_21749,temp__6753__auto___21748,renderf,parsef,ret,rctor,guid,this$__$1){
return (function() {
var om$next$send_cb = null;
var om$next$send_cb__1 = (function (resp){
om.next.merge_BANG_.call(null,this$__$1,resp,null);

return renderf.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_21750,sel_21749));
});
var om$next$send_cb__2 = (function (resp,query){
om.next.merge_BANG_.call(null,this$__$1,resp,query);

return renderf.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_21750,sel_21749));
});
var om$next$send_cb__3 = (function (resp,query,remote){
if((remote == null)){
} else {
om.next.protocols.queue_BANG_.call(null,this$__$1,cljs.core.keys.call(null,resp),remote);
}

om.next.merge_BANG_.call(null,this$__$1,resp,query,remote);

return om.next.protocols.reconcile_BANG_.call(null,this$__$1,remote);
});
om$next$send_cb = function(resp,query,remote){
switch(arguments.length){
case 1:
return om$next$send_cb__1.call(this,resp);
case 2:
return om$next$send_cb__2.call(this,resp,query);
case 3:
return om$next$send_cb__3.call(this,resp,query,remote);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
om$next$send_cb.cljs$core$IFn$_invoke$arity$1 = om$next$send_cb__1;
om$next$send_cb.cljs$core$IFn$_invoke$arity$2 = om$next$send_cb__2;
om$next$send_cb.cljs$core$IFn$_invoke$arity$3 = om$next$send_cb__3;
return om$next$send_cb;
})()
;})(send_21753,temp__6753__auto___21752__$1,env_21750,snds_21751,sel_21749,temp__6753__auto___21748,renderf,parsef,ret,rctor,guid,this$__$1))
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
var root = cljs.core.get.call(null,cljs.core.deref.call(null,self__.state),new cljs.core.Keyword(null,"root","root",-448657453));
if(om.next.iquery_QMARK_.call(null,root)){
var indexer = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config);
var c = cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),root], null)));
return om.next.protocols.index_root.call(null,indexer,(function (){var or__8363__auto__ = c;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
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
var temp__6753__auto__ = new cljs.core.Keyword(null,"remove","remove",-131428414).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.truth_(temp__6753__auto__)){
var remove = temp__6753__auto__;
return remove.call(null);
} else {
return null;
}
});


om.next.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9065__auto__,writer__9066__auto__,opts__9067__auto__){
var self__ = this;
var this__9065__auto____$1 = this;
var pr_pair__9068__auto__ = ((function (this__9065__auto____$1){
return (function (keyval__9069__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9066__auto__,cljs.core.pr_writer,""," ","",opts__9067__auto__,keyval__9069__auto__);
});})(this__9065__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9066__auto__,pr_pair__9068__auto__,"#om.next.Reconciler{",", ","}",opts__9067__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21695){
var self__ = this;
var G__21695__$1 = this;
return (new cljs.core.RecordIter((0),G__21695__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


om.next.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9049__auto__){
var self__ = this;
var this__9049__auto____$1 = this;
return self__.__meta;
});


om.next.Reconciler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9046__auto__){
var self__ = this;
var this__9046__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});


om.next.Reconciler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9055__auto__){
var self__ = this;
var this__9055__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9047__auto__){
var self__ = this;
var this__9047__auto____$1 = this;
var h__8819__auto__ = self__.__hash;
if(!((h__8819__auto__ == null))){
return h__8819__auto__;
} else {
var h__8819__auto____$1 = ((function (h__8819__auto__,this__9047__auto____$1){
return (function (coll__9048__auto__){
return (1794519131 ^ cljs.core.hash_unordered_coll.call(null,coll__9048__auto__));
});})(h__8819__auto__,this__9047__auto____$1))
.call(null,this__9047__auto____$1);
self__.__hash = h__8819__auto____$1;

return h__8819__auto____$1;
}
});


om.next.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21697,other21698){
var self__ = this;
var this21697__$1 = this;
return (!((other21698 == null))) && ((this21697__$1.constructor === other21698.constructor)) && (cljs.core._EQ_.call(null,this21697__$1.config,other21698.config)) && (cljs.core._EQ_.call(null,this21697__$1.state,other21698.state)) && (cljs.core._EQ_.call(null,this21697__$1.__extmap,other21698.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9060__auto__,k__9061__auto__){
var self__ = this;
var this__9060__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"state","state",-1988618099),null], null), null),k__9061__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9060__auto____$1),self__.__meta),k__9061__auto__);
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9061__auto__)),null));
}
});


om.next.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9058__auto__,k__9059__auto__,G__21695){
var self__ = this;
var this__9058__auto____$1 = this;
var pred__21710 = cljs.core.keyword_identical_QMARK_;
var expr__21711 = k__9059__auto__;
if(cljs.core.truth_(pred__21710.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__21711))){
return (new om.next.Reconciler(G__21695,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21710.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__21711))){
return (new om.next.Reconciler(self__.config,G__21695,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9059__auto__,G__21695),null));
}
}
});


om.next.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9063__auto__){
var self__ = this;
var this__9063__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9050__auto__,G__21695){
var self__ = this;
var this__9050__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,G__21695,self__.__extmap,self__.__hash));
});


om.next.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9056__auto__,entry__9057__auto__){
var self__ = this;
var this__9056__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9057__auto__)){
return this__9056__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9057__auto__,(0)),cljs.core._nth.call(null,entry__9057__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9056__auto____$1,entry__9057__auto__);
}
});


om.next.Reconciler.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config));
});

om.next.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
});

om.next.Reconciler.cljs$lang$type = true;

om.next.Reconciler.cljs$lang$ctorPrSeq = (function (this__9089__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Reconciler");
});

om.next.Reconciler.cljs$lang$ctorPrWriter = (function (this__9089__auto__,writer__9090__auto__){
return cljs.core._write.call(null,writer__9090__auto__,"om.next/Reconciler");
});

om.next.__GT_Reconciler = (function om$next$__GT_Reconciler(config,state){
return (new om.next.Reconciler(config,state,null,null,null));
});

om.next.map__GT_Reconciler = (function om$next$map__GT_Reconciler(G__21699){
return (new om.next.Reconciler(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__21699),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__21699),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__21699,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099))),null));
});

om.next.default_ui__GT_props = (function om$next$default_ui__GT_props(p__21754,c){
var map__21755 = p__21754;
var map__21755__$1 = ((((!((map__21755 == null)))?((((map__21755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21755.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21755):map__21755);
var env = map__21755__$1;
var parser = cljs.core.get.call(null,map__21755__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var pathopt = cljs.core.get.call(null,map__21755__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149));
var ui = (((function (){var and__8351__auto__ = pathopt;
if(and__8351__auto__){
var and__8351__auto____$1 = ((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false);
if(and__8351__auto____$1){
return om.next.iquery_QMARK_.call(null,c);
} else {
return and__8351__auto____$1;
}
} else {
return and__8351__auto__;
}
})())?(function (){var id = om.next.ident.call(null,c,om.next.props.call(null,c));
return cljs.core.get.call(null,parser.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([id,om.next.get_query.call(null,c)])], null)),id);
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
var temp__6753__auto___21760 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__6753__auto___21760)){
var l_21761 = temp__6753__auto___21760;
var dt_21762 = (e - s);
var component_name_21763 = c.constructor.displayName;
if(((16) < dt_21762)){
goog.log.warning(l_21761,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_name_21763)," query took ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dt_21762)," msecs"].join(''));
} else {
}
} else {
}

return cljs.core.get_in.call(null,ui__$1,om.next.path.call(null,c));
}
}
});
om.next.default_merge_ident = (function om$next$default_merge_ident(_,tree,ref,props){
return cljs.core.update_in.call(null,tree,ref,cljs.core.merge,props);
});
om.next.default_merge_tree = (function om$next$default_merge_tree(a,b){
if(cljs.core.map_QMARK_.call(null,a)){
return cljs.core.merge.call(null,a,b);
} else {
return b;
}
});
/**
 * Given app-state-pure (the application state as an immutable value), a query,
 * tempids (a hash map from tempid to stable id), and an optional id-key
 * keyword, return a new application state value with the tempids replaced by
 * the stable ids.
 */
om.next.default_migrate = (function om$next$default_migrate(var_args){
var G__21765 = arguments.length;
switch (G__21765) {
case 3:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$3 = (function (app_state_pure,query,tempids){
return om.next.default_migrate.call(null,app_state_pure,query,tempids,null);
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$4 = (function (app_state_pure,query,tempids,id_key){
var dissoc_in = (function om$next$dissoc_in(pure,p__21778){
var vec__21779 = p__21778;
var table = cljs.core.nth.call(null,vec__21779,(0),null);
var id = cljs.core.nth.call(null,vec__21779,(1),null);
return cljs.core.assoc.call(null,pure,table,cljs.core.dissoc.call(null,cljs.core.get.call(null,pure,table),id));
});
var step = (function om$next$step(pure,p__21782){
var vec__21783 = p__21782;
var old = cljs.core.nth.call(null,vec__21783,(0),null);
var vec__21786 = cljs.core.nth.call(null,vec__21783,(1),null);
var _ = cljs.core.nth.call(null,vec__21786,(0),null);
var id = cljs.core.nth.call(null,vec__21786,(1),null);
var new$ = vec__21786;
return cljs.core.assoc_in.call(null,dissoc_in.call(null,pure,old),new$,(function (){var G__21789 = cljs.core.merge.call(null,cljs.core.get_in.call(null,pure,old),cljs.core.get_in.call(null,pure,new$));
if(!((id_key == null))){
return cljs.core.assoc.call(null,G__21789,id_key,id);
} else {
return G__21789;
}
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

om.next.default_migrate.cljs$lang$maxFixedArity = 4;

om.next.has_error_QMARK_ = (function om$next$has_error_QMARK_(x){
return (cljs.core.map_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,x,new cljs.core.Keyword("om.next","error","om.next/error",-1841983205)));
});
om.next.default_extract_errors = (function om$next$default_extract_errors(reconciler,res,query){
var extract_STAR_ = (function om$next$default_extract_errors_$_extract_STAR_(query__$1,res__$1,errs){
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query__$1));
var top_error_QMARK_ = (((!((class$ == null))) && (om.next.has_error_QMARK_.call(null,res__$1)))?cljs.core.swap_BANG_.call(null,errs,((function (class$){
return (function (p1__21791_SHARP_){
return cljs.core.update_in.call(null,p1__21791_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.ident.call(null,class$,res__$1)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",-1841983205).cljs$core$IFn$_invoke$arity$1(res__$1));
});})(class$))
):null);
var ret = (((top_error_QMARK_ == null))?cljs.core.PersistentArrayMap.EMPTY:null);
if(cljs.core.vector_QMARK_.call(null,query__$1)){
if(cljs.core.vector_QMARK_.call(null,res__$1)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (class$,top_error_QMARK_,ret){
return (function (p1__21792_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_.call(null,query__$1,p1__21792_SHARP_,errs);
});})(class$,top_error_QMARK_,ret))
),res__$1);
} else {
var exprs = cljs.core.seq.call(null,query__$1);
var ret__$1 = ret;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first.call(null,exprs);
var k = (function (){var k = om.next.expr__GT_key.call(null,expr);
var G__21797 = k;
if(om.util.unique_ident_QMARK_.call(null,k)){
return cljs.core.first.call(null,G__21797);
} else {
return G__21797;
}
})();
var data = cljs.core.get.call(null,res__$1,k);
if(om.util.mutation_QMARK_.call(null,expr)){
var mk = om.util.mutation_key.call(null,expr);
var ret_SINGLEQUOTE_ = cljs.core.get.call(null,res__$1,mk);
if(om.next.has_error_QMARK_.call(null,ret_SINGLEQUOTE_)){
var x = new cljs.core.Keyword(null,"mutator","mutator",-1326825366).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,expr));
cljs.core.swap_BANG_.call(null,errs,((function (exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__21793_SHARP_){
return cljs.core.update_in.call(null,p1__21793_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",-1841983205).cljs$core$IFn$_invoke$arity$1(ret_SINGLEQUOTE_));
});})(exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__21798 = cljs.core.next.call(null,exprs);
var G__21799 = ret__$1;
exprs = G__21798;
ret__$1 = G__21799;
continue;
} else {
var G__21800 = cljs.core.next.call(null,exprs);
var G__21801 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,mk,ret_SINGLEQUOTE_));
exprs = G__21800;
ret__$1 = G__21801;
continue;
}
} else {
if(om.util.union_QMARK_.call(null,expr)){
var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var class_SINGLEQUOTE_ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,jv));
if(!(cljs.core.vector_QMARK_.call(null,data))){
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_.call(null,cljs.core.get.call(null,jv,cljs.core.first.call(null,om.next.ident.call(null,class_SINGLEQUOTE_,data))),data,errs);
var G__21802 = cljs.core.next.call(null,exprs);
var G__21803 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__21802;
ret__$1 = G__21803;
continue;
} else {
var ret_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__21794_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_.call(null,cljs.core.get.call(null,jv,cljs.core.first.call(null,om.next.ident.call(null,class_SINGLEQUOTE_,p1__21794_SHARP_))),p1__21794_SHARP_,errs);
});})(exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
),data);
var G__21804 = cljs.core.next.call(null,exprs);
var G__21805 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__21804;
ret__$1 = G__21805;
continue;
}
} else {
if(cljs.core.truth_(om.util.join_QMARK_.call(null,expr))){
var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_.call(null,jv,data,errs);
var G__21806 = cljs.core.next.call(null,exprs);
var G__21807 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__21806;
ret__$1 = G__21807;
continue;
} else {
if((cljs.core.map_QMARK_.call(null,data)) && (om.next.has_error_QMARK_.call(null,data))){
cljs.core.swap_BANG_.call(null,errs,((function (exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__21795_SHARP_){
return cljs.core.update_in.call(null,p1__21795_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__8363__auto__ = (((class$ == null))?null:om.next.ident.call(null,class$,res__$1));
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return k;
}
})()], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",-1841983205).cljs$core$IFn$_invoke$arity$1(data));
});})(exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__21808 = cljs.core.next.call(null,exprs);
var G__21809 = null;
exprs = G__21808;
ret__$1 = G__21809;
continue;
} else {
var G__21810 = cljs.core.next.call(null,exprs);
var G__21811 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,k,data));
exprs = G__21810;
ret__$1 = G__21811;
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tree","tree",-196312028),ret,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.deref.call(null,errs)], null);
});
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
 *   :tx-listen    - a function of 2 arguments that will listen to transactions.
 *                   The first argument is the parser's env map also containing
 *                   the old and new state. The second argument is a map containing
 *                   the transaction, its result and the remote sends that the
 *                   transaction originated.
 */
om.next.reconciler = (function om$next$reconciler(p__21817){
var map__21818 = p__21817;
var map__21818__$1 = ((((!((map__21818 == null)))?((((map__21818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21818):map__21818);
var config = map__21818__$1;
var root_render = cljs.core.get.call(null,map__21818__$1,new cljs.core.Keyword(null,"root-render","root-render",835981146),((function (map__21818,map__21818__$1,config){
return (function (p1__21814_SHARP_,p2__21815_SHARP_){
return ReactDOM.render(p1__21814_SHARP_,p2__21815_SHARP_);
});})(map__21818,map__21818__$1,config))
);
var normalize = cljs.core.get.call(null,map__21818__$1,new cljs.core.Keyword(null,"normalize","normalize",-1904390051));
var prune_tree = cljs.core.get.call(null,map__21818__$1,new cljs.core.Keyword(null,"prune-tree","prune-tree",142138431),om.next.default_extract_errors);
var tx_listen = cljs.core.get.call(null,map__21818__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var pathopt = cljs.core.get.call(null,map__21818__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),false);
var instrument = cljs.core.get.call(null,map__21818__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var id_key = cljs.core.get.call(null,map__21818__$1,new cljs.core.Keyword(null,"id-key","id-key",-1881730044));
var merge_sends = cljs.core.get.call(null,map__21818__$1,new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),((function (map__21818,map__21818__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key){
return (function (p1__21812_SHARP_,p2__21813_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__21812_SHARP_,p2__21813_SHARP_);
});})(map__21818,map__21818__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key))
);
var merge_ident = cljs.core.get.call(null,map__21818__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),om.next.default_merge_ident);
var remotes = cljs.core.get.call(null,map__21818__$1,new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576)], null));
var migrate = cljs.core.get.call(null,map__21818__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),om.next.default_migrate);
var easy_reads = cljs.core.get.call(null,map__21818__$1,new cljs.core.Keyword(null,"easy-reads","easy-reads",803667467),true);
var history = cljs.core.get.call(null,map__21818__$1,new cljs.core.Keyword(null,"history","history",-247395220),(100));
var state = cljs.core.get.call(null,map__21818__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var merge = cljs.core.get.call(null,map__21818__$1,new cljs.core.Keyword(null,"merge","merge",-1804319409),om.next.default_merge);
var shared_fn = cljs.core.get.call(null,map__21818__$1,new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144));
var ui__GT_props = cljs.core.get.call(null,map__21818__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),om.next.default_ui__GT_props);
var parser = cljs.core.get.call(null,map__21818__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var indexer = cljs.core.get.call(null,map__21818__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315),om.next.indexer);
var root_unmount = cljs.core.get.call(null,map__21818__$1,new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),((function (map__21818,map__21818__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer){
return (function (p1__21816_SHARP_){
return ReactDOM.unmountComponentAtNode(p1__21816_SHARP_);
});})(map__21818,map__21818__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer))
);
var send = cljs.core.get.call(null,map__21818__$1,new cljs.core.Keyword(null,"send","send",-652151114));
var merge_tree = cljs.core.get.call(null,map__21818__$1,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),om.next.default_merge_tree);
var shared = cljs.core.get.call(null,map__21818__$1,new cljs.core.Keyword(null,"shared","shared",-384145993));
var optimize = cljs.core.get.call(null,map__21818__$1,new cljs.core.Keyword(null,"optimize","optimize",-1912349448),((function (map__21818,map__21818__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared){
return (function (cs){
return cljs.core.sort_by.call(null,om.next.depth,cs);
});})(map__21818,map__21818__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared))
);
if(cljs.core.map_QMARK_.call(null,config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

var idxr = indexer.call(null);
var norm_QMARK_ = ((!((state == null)))?((((state.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === state.cljs$core$IAtom$)))?true:(((!state.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state));
var state_SINGLEQUOTE_ = ((norm_QMARK_)?state:cljs.core.atom.call(null,state));
var logger = ((cljs.core.contains_QMARK_.call(null,config,new cljs.core.Keyword(null,"logger","logger",-220675947)))?new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config):om.next._STAR_logger_STAR_);
var ret = (new om.next.Reconciler(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.Keyword(null,"migrate","migrate",-207110743),new cljs.core.Keyword(null,"easy-reads","easy-reads",803667467),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),new cljs.core.Keyword(null,"logger","logger",-220675947),new cljs.core.Keyword(null,"indexer","indexer",-1774914315),new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"root-render","root-render",835981146),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),new cljs.core.Keyword(null,"prune-tree","prune-tree",142138431),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367)],[pathopt,id_key,instrument,merge_ident,merge_sends,remotes,migrate,easy_reads,om.next.cache.cache.call(null,history),state_SINGLEQUOTE_,merge,shared_fn,parser,ui__GT_props,logger,idxr,root_unmount,send,shared,merge_tree,optimize,root_render,(function (){var or__8363__auto__ = !(norm_QMARK_);
if(or__8363__auto__){
return or__8363__auto__;
} else {
return normalize;
}
})(),prune_tree,tx_listen]),cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"normalized","normalized",-1887621663),new cljs.core.Keyword(null,"remote-queue","remote-queue",1823260578),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),new cljs.core.Keyword(null,"queued","queued",1701634607),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"target","target",253001721)],[norm_QMARK_,cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,false,null,null,(0),null])),null,null,null));
return ret;
});
/**
 * Returns true if x is a reconciler.
 */
om.next.reconciler_QMARK_ = (function om$next$reconciler_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$next$protocols$IReconciler$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Return the reconciler's application state atom. Useful when the reconciler
 * was initialized via denormalized data.
 */
om.next.app_state = (function om$next$app_state(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return the application's root component.
 */
om.next.app_root = (function om$next$app_root(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)),new cljs.core.Keyword(null,"root","root",-448657453));
});
/**
 * Force a re-render of the root. Not recommended for anything except
 * recomputing :shared.
 */
om.next.force_root_render_BANG_ = (function om$next$force_root_render_BANG_(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)),new cljs.core.Keyword(null,"render","render",-1408033454)).call(null);
});
/**
 * Given a reconciler and UUID return the application state snapshost
 * from history associated with the UUID. The size of the reconciler history
 * may be configured by the :history option when constructing the reconciler.
 */
om.next.from_history = (function om$next$from_history(reconciler,uuid){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler)).get(uuid);
});
/**
 * Return a temporary id.
 */
om.next.tempid = (function om$next$tempid(var_args){
var G__21823 = arguments.length;
switch (G__21823) {
case 0:
return om.next.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.tempid.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.tempid.tempid.call(null);
});

om.next.tempid.cljs$core$IFn$_invoke$arity$1 = (function (id){
return om.tempid.tempid.call(null,id);
});

om.next.tempid.cljs$lang$maxFixedArity = 1;

/**
 * Return true if x is a tempid, false otherwise
 */
om.next.tempid_QMARK_ = (function om$next$tempid_QMARK_(x){
return om.tempid.tempid_QMARK_.call(null,x);
});
/**
 * Create a Om Next transit reader. This reader can handler the tempid type.
 * Can pass transit reader customization opts map.
 */
om.next.reader = (function om$next$reader(var_args){
var G__21826 = arguments.length;
switch (G__21826) {
case 0:
return om.next.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.reader.call(null);
});

om.next.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.reader.call(null,opts);
});

om.next.reader.cljs$lang$maxFixedArity = 1;

/**
 * Create a Om Next transit writer. This writer can handler the tempid type.
 * Can pass transit writer customization opts map.
 */
om.next.writer = (function om$next$writer(var_args){
var G__21829 = arguments.length;
switch (G__21829) {
case 0:
return om.next.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.writer.call(null);
});

om.next.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.writer.call(null,opts);
});

om.next.writer.cljs$lang$maxFixedArity = 1;

/**
 * Given a query expression return an equivalent query expression that can be
 * spliced into a transaction that will force a read of that key from the
 * specified remote target.
 */
om.next.force = (function om$next$force(var_args){
var G__21832 = arguments.length;
switch (G__21832) {
case 1:
return om.next.force.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.force.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.force.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return om.next.force.call(null,expr,new cljs.core.Keyword(null,"remote","remote",-1593576576));
});

om.next.force.cljs$core$IFn$_invoke$arity$2 = (function (expr,target){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,(function (){var x__9317__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null));
});

om.next.force.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=next.js.map
