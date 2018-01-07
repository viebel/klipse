// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__23652 = s;
var map__23652__$1 = ((((!((map__23652 == null)))?((((map__23652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23652.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23652):map__23652);
var name = cljs.core.get.call(null,map__23652__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__23652__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__23655 = info;
var map__23656 = G__23655;
var map__23656__$1 = ((((!((map__23656 == null)))?((((map__23656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23656.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23656):map__23656);
var shadow = cljs.core.get.call(null,map__23656__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__23655__$1 = G__23655;
while(true){
var d__$2 = d__$1;
var map__23658 = G__23655__$1;
var map__23658__$1 = ((((!((map__23658 == null)))?((((map__23658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23658.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23658):map__23658);
var shadow__$1 = cljs.core.get.call(null,map__23658__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__23660 = (d__$2 + (1));
var G__23661 = shadow__$1;
d__$1 = G__23660;
G__23655__$1 = G__23661;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__23662){
var map__23663 = p__23662;
var map__23663__$1 = ((((!((map__23663 == null)))?((((map__23663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23663.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23663):map__23663);
var name_var = map__23663__$1;
var name = cljs.core.get.call(null,map__23663__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__23663__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__23665 = info;
var map__23665__$1 = ((((!((map__23665 == null)))?((((map__23665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23665.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23665):map__23665);
var ns = cljs.core.get.call(null,map__23665__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__23665__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__23668 = arguments.length;
switch (G__23668) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge_str.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__23670 = cp;
switch (G__23670) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__23672_23676 = cljs.core.seq.call(null,s);
var chunk__23673_23677 = null;
var count__23674_23678 = (0);
var i__23675_23679 = (0);
while(true){
if((i__23675_23679 < count__23674_23678)){
var c_23680 = cljs.core._nth.call(null,chunk__23673_23677,i__23675_23679);
sb.append(cljs.compiler.escape_char.call(null,c_23680));

var G__23681 = seq__23672_23676;
var G__23682 = chunk__23673_23677;
var G__23683 = count__23674_23678;
var G__23684 = (i__23675_23679 + (1));
seq__23672_23676 = G__23681;
chunk__23673_23677 = G__23682;
count__23674_23678 = G__23683;
i__23675_23679 = G__23684;
continue;
} else {
var temp__6753__auto___23685 = cljs.core.seq.call(null,seq__23672_23676);
if(temp__6753__auto___23685){
var seq__23672_23686__$1 = temp__6753__auto___23685;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23672_23686__$1)){
var c__9294__auto___23687 = cljs.core.chunk_first.call(null,seq__23672_23686__$1);
var G__23688 = cljs.core.chunk_rest.call(null,seq__23672_23686__$1);
var G__23689 = c__9294__auto___23687;
var G__23690 = cljs.core.count.call(null,c__9294__auto___23687);
var G__23691 = (0);
seq__23672_23676 = G__23688;
chunk__23673_23677 = G__23689;
count__23674_23678 = G__23690;
i__23675_23679 = G__23691;
continue;
} else {
var c_23692 = cljs.core.first.call(null,seq__23672_23686__$1);
sb.append(cljs.compiler.escape_char.call(null,c_23692));

var G__23693 = cljs.core.next.call(null,seq__23672_23686__$1);
var G__23694 = null;
var G__23695 = (0);
var G__23696 = (0);
seq__23672_23676 = G__23693;
chunk__23673_23677 = G__23694;
count__23674_23678 = G__23695;
i__23675_23679 = G__23696;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__9416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9420__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9420__auto__,method_table__9416__auto__,prefer_table__9417__auto__,method_cache__9418__auto__,cached_hierarchy__9419__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__17989__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__17989__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__23697_23702 = ast;
var map__23697_23703__$1 = ((((!((map__23697_23702 == null)))?((((map__23697_23702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23697_23702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23697_23702):map__23697_23702);
var env_23704 = cljs.core.get.call(null,map__23697_23703__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_23704))){
var map__23699_23705 = env_23704;
var map__23699_23706__$1 = ((((!((map__23699_23705 == null)))?((((map__23699_23705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23699_23705.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23699_23705):map__23699_23705);
var line_23707 = cljs.core.get.call(null,map__23699_23706__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23708 = cljs.core.get.call(null,map__23699_23706__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__23699_23705,map__23699_23706__$1,line_23707,column_23708,map__23697_23702,map__23697_23703__$1,env_23704,val__17989__auto__){
return (function (m){
var minfo = (function (){var G__23701 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__23701,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__23701;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_23707 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__23699_23705,map__23699_23706__$1,line_23707,column_23708,map__23697_23702,map__23697_23703__$1,env_23704,val__17989__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_23708)?(column_23708 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__23699_23705,map__23699_23706__$1,line_23707,column_23708,map__23697_23702,map__23697_23703__$1,env_23704,val__17989__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__23699_23705,map__23699_23706__$1,line_23707,column_23708,map__23697_23702,map__23697_23703__$1,env_23704,val__17989__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__23699_23705,map__23699_23706__$1,line_23707,column_23708,map__23697_23702,map__23697_23703__$1,env_23704,val__17989__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__23699_23705,map__23699_23706__$1,line_23707,column_23708,map__23697_23702,map__23697_23703__$1,env_23704,val__17989__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__17989__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__9647__auto__ = [];
var len__9640__auto___23715 = arguments.length;
var i__9641__auto___23716 = (0);
while(true){
if((i__9641__auto___23716 < len__9640__auto___23715)){
args__9647__auto__.push((arguments[i__9641__auto___23716]));

var G__23717 = (i__9641__auto___23716 + (1));
i__9641__auto___23716 = G__23717;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__23711_23718 = cljs.core.seq.call(null,xs);
var chunk__23712_23719 = null;
var count__23713_23720 = (0);
var i__23714_23721 = (0);
while(true){
if((i__23714_23721 < count__23713_23720)){
var x_23722 = cljs.core._nth.call(null,chunk__23712_23719,i__23714_23721);
if((x_23722 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_23722)){
cljs.compiler.emit.call(null,x_23722);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_23722)){
cljs.core.apply.call(null,cljs.compiler.emits,x_23722);
} else {
if(goog.isFunction(x_23722)){
x_23722.call(null);
} else {
var s_23723 = cljs.core.print_str.call(null,x_23722);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__23711_23718,chunk__23712_23719,count__23713_23720,i__23714_23721,s_23723,x_23722){
return (function (p1__23709_SHARP_){
return (p1__23709_SHARP_ + cljs.core.count.call(null,s_23723));
});})(seq__23711_23718,chunk__23712_23719,count__23713_23720,i__23714_23721,s_23723,x_23722))
);
}

cljs.core.print.call(null,s_23723);

}
}
}
}

var G__23724 = seq__23711_23718;
var G__23725 = chunk__23712_23719;
var G__23726 = count__23713_23720;
var G__23727 = (i__23714_23721 + (1));
seq__23711_23718 = G__23724;
chunk__23712_23719 = G__23725;
count__23713_23720 = G__23726;
i__23714_23721 = G__23727;
continue;
} else {
var temp__6753__auto___23728 = cljs.core.seq.call(null,seq__23711_23718);
if(temp__6753__auto___23728){
var seq__23711_23729__$1 = temp__6753__auto___23728;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23711_23729__$1)){
var c__9294__auto___23730 = cljs.core.chunk_first.call(null,seq__23711_23729__$1);
var G__23731 = cljs.core.chunk_rest.call(null,seq__23711_23729__$1);
var G__23732 = c__9294__auto___23730;
var G__23733 = cljs.core.count.call(null,c__9294__auto___23730);
var G__23734 = (0);
seq__23711_23718 = G__23731;
chunk__23712_23719 = G__23732;
count__23713_23720 = G__23733;
i__23714_23721 = G__23734;
continue;
} else {
var x_23735 = cljs.core.first.call(null,seq__23711_23729__$1);
if((x_23735 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_23735)){
cljs.compiler.emit.call(null,x_23735);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_23735)){
cljs.core.apply.call(null,cljs.compiler.emits,x_23735);
} else {
if(goog.isFunction(x_23735)){
x_23735.call(null);
} else {
var s_23736 = cljs.core.print_str.call(null,x_23735);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__23711_23718,chunk__23712_23719,count__23713_23720,i__23714_23721,s_23736,x_23735,seq__23711_23729__$1,temp__6753__auto___23728){
return (function (p1__23709_SHARP_){
return (p1__23709_SHARP_ + cljs.core.count.call(null,s_23736));
});})(seq__23711_23718,chunk__23712_23719,count__23713_23720,i__23714_23721,s_23736,x_23735,seq__23711_23729__$1,temp__6753__auto___23728))
);
}

cljs.core.print.call(null,s_23736);

}
}
}
}

var G__23737 = cljs.core.next.call(null,seq__23711_23729__$1);
var G__23738 = null;
var G__23739 = (0);
var G__23740 = (0);
seq__23711_23718 = G__23737;
chunk__23712_23719 = G__23738;
count__23713_23720 = G__23739;
i__23714_23721 = G__23740;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq23710){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23710));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__9647__auto__ = [];
var len__9640__auto___23746 = arguments.length;
var i__9641__auto___23747 = (0);
while(true){
if((i__9641__auto___23747 < len__9640__auto___23746)){
args__9647__auto__.push((arguments[i__9641__auto___23747]));

var G__23748 = (i__9641__auto___23747 + (1));
i__9641__auto___23747 = G__23748;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_23742_23749 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_23742_23749;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__23743){
var map__23744 = p__23743;
var map__23744__$1 = ((((!((map__23744 == null)))?((((map__23744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23744.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23744):map__23744);
var m = map__23744__$1;
var gen_line = cljs.core.get.call(null,map__23744__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq23741){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23741));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__9488__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_23750_23752 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_23751_23753 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_23750_23752,_STAR_print_fn_STAR_23751_23753,sb__9488__auto__){
return (function (x__9489__auto__){
return sb__9488__auto__.append(x__9489__auto__);
});})(_STAR_print_newline_STAR_23750_23752,_STAR_print_fn_STAR_23751_23753,sb__9488__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23751_23753;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23750_23752;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9488__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__9416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9420__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9420__auto__,method_table__9416__auto__,prefer_table__9417__auto__,method_cache__9418__auto__,cached_hierarchy__9419__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,"(",x,")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__23754 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__23754,(0),null);
var flags = cljs.core.nth.call(null,vec__23754,(1),null);
var pattern = cljs.core.nth.call(null,vec__23754,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
var temp__6751__auto__ = (function (){var and__8351__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__8351__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__8351__auto__;
}
})();
if(cljs.core.truth_(temp__6751__auto__)){
var value = temp__6751__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
var temp__6751__auto__ = (function (){var and__8351__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__8351__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__8351__auto__;
}
})();
if(cljs.core.truth_(temp__6751__auto__)){
var value = temp__6751__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__23758){
var map__23759 = p__23758;
var map__23759__$1 = ((((!((map__23759 == null)))?((((map__23759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23759.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23759):map__23759);
var ast = map__23759__$1;
var info = cljs.core.get.call(null,map__23759__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__23759__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__23759__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__6751__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__6751__auto__)){
var const_expr = temp__6751__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__23761 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__23761__$1 = ((((!((map__23761 == null)))?((((map__23761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23761.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23761):map__23761);
var cenv = map__23761__$1;
var options = cljs.core.get.call(null,map__23761__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__8363__auto__ = js_module_name;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__23763 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__8351__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__8351__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__8351__auto__;
}
})())){
return clojure.set.difference.call(null,G__23763,cljs.analyzer.es5_allowed);
} else {
return G__23763;
}
})();
var env__23644__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__23764 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__23764,reserved);
} else {
return G__23764;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__23765){
var map__23766 = p__23765;
var map__23766__$1 = ((((!((map__23766 == null)))?((((map__23766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23766.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23766):map__23766);
var arg = map__23766__$1;
var env = cljs.core.get.call(null,map__23766__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__23766__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__23766__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__23766__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__23768 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__23768__$1 = ((((!((map__23768 == null)))?((((map__23768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23768.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23768):map__23768);
var name = cljs.core.get.call(null,map__23768__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__23644__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__23770){
var map__23771 = p__23770;
var map__23771__$1 = ((((!((map__23771 == null)))?((((map__23771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23771.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23771):map__23771);
var expr = cljs.core.get.call(null,map__23771__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__23771__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__23771__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23644__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__23773_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__23773_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__23774){
var map__23775 = p__23774;
var map__23775__$1 = ((((!((map__23775 == null)))?((((map__23775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23775):map__23775);
var env = cljs.core.get.call(null,map__23775__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__23775__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__23775__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__23644__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__23777){
var map__23778 = p__23777;
var map__23778__$1 = ((((!((map__23778 == null)))?((((map__23778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23778):map__23778);
var items = cljs.core.get.call(null,map__23778__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__23778__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23644__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__23780){
var map__23781 = p__23780;
var map__23781__$1 = ((((!((map__23781 == null)))?((((map__23781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23781.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23781):map__23781);
var items = cljs.core.get.call(null,map__23781__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__23781__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23644__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_23783 = cljs.core.count.call(null,items);
if((cnt_23783 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_23783,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__23784_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__23784_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__23785){
var map__23786 = p__23785;
var map__23786__$1 = ((((!((map__23786 == null)))?((((map__23786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23786.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23786):map__23786);
var items = cljs.core.get.call(null,map__23786__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__23786__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23644__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,items),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__23788){
var map__23789 = p__23788;
var map__23789__$1 = ((((!((map__23789 == null)))?((((map__23789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23789.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23789):map__23789);
var items = cljs.core.get.call(null,map__23789__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__23789__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__23789__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23644__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__6753__auto___23807 = cljs.core.seq.call(null,items);
if(temp__6753__auto___23807){
var items_23808__$1 = temp__6753__auto___23807;
var vec__23791_23809 = items_23808__$1;
var seq__23792_23810 = cljs.core.seq.call(null,vec__23791_23809);
var first__23793_23811 = cljs.core.first.call(null,seq__23792_23810);
var seq__23792_23812__$1 = cljs.core.next.call(null,seq__23792_23810);
var vec__23794_23813 = first__23793_23811;
var k_23814 = cljs.core.nth.call(null,vec__23794_23813,(0),null);
var v_23815 = cljs.core.nth.call(null,vec__23794_23813,(1),null);
var r_23816 = seq__23792_23812__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_23814),"\": ",v_23815);

var seq__23797_23817 = cljs.core.seq.call(null,r_23816);
var chunk__23798_23818 = null;
var count__23799_23819 = (0);
var i__23800_23820 = (0);
while(true){
if((i__23800_23820 < count__23799_23819)){
var vec__23801_23821 = cljs.core._nth.call(null,chunk__23798_23818,i__23800_23820);
var k_23822__$1 = cljs.core.nth.call(null,vec__23801_23821,(0),null);
var v_23823__$1 = cljs.core.nth.call(null,vec__23801_23821,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_23822__$1),"\": ",v_23823__$1);

var G__23824 = seq__23797_23817;
var G__23825 = chunk__23798_23818;
var G__23826 = count__23799_23819;
var G__23827 = (i__23800_23820 + (1));
seq__23797_23817 = G__23824;
chunk__23798_23818 = G__23825;
count__23799_23819 = G__23826;
i__23800_23820 = G__23827;
continue;
} else {
var temp__6753__auto___23828__$1 = cljs.core.seq.call(null,seq__23797_23817);
if(temp__6753__auto___23828__$1){
var seq__23797_23829__$1 = temp__6753__auto___23828__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23797_23829__$1)){
var c__9294__auto___23830 = cljs.core.chunk_first.call(null,seq__23797_23829__$1);
var G__23831 = cljs.core.chunk_rest.call(null,seq__23797_23829__$1);
var G__23832 = c__9294__auto___23830;
var G__23833 = cljs.core.count.call(null,c__9294__auto___23830);
var G__23834 = (0);
seq__23797_23817 = G__23831;
chunk__23798_23818 = G__23832;
count__23799_23819 = G__23833;
i__23800_23820 = G__23834;
continue;
} else {
var vec__23804_23835 = cljs.core.first.call(null,seq__23797_23829__$1);
var k_23836__$1 = cljs.core.nth.call(null,vec__23804_23835,(0),null);
var v_23837__$1 = cljs.core.nth.call(null,vec__23804_23835,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_23836__$1),"\": ",v_23837__$1);

var G__23838 = cljs.core.next.call(null,seq__23797_23829__$1);
var G__23839 = null;
var G__23840 = (0);
var G__23841 = (0);
seq__23797_23817 = G__23838;
chunk__23798_23818 = G__23839;
count__23799_23819 = G__23840;
i__23800_23820 = G__23841;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"})");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__23842){
var map__23843 = p__23842;
var map__23843__$1 = ((((!((map__23843 == null)))?((((map__23843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23843.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23843):map__23843);
var items = cljs.core.get.call(null,map__23843__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__23843__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__23843__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__23843__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23644__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__23845){
var map__23846 = p__23845;
var map__23846__$1 = ((((!((map__23846 == null)))?((((map__23846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23846):map__23846);
var form = cljs.core.get.call(null,map__23846__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__23846__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__23644__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__23848){
var map__23849 = p__23848;
var map__23849__$1 = ((((!((map__23849 == null)))?((((map__23849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23849.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23849):map__23849);
var op = cljs.core.get.call(null,map__23849__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__23849__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__23849__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__8363__auto__ = (function (){var and__8351__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__8351__auto__){
var and__8351__auto____$1 = form;
if(cljs.core.truth_(and__8351__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__8351__auto____$1;
}
} else {
return and__8351__auto__;
}
})();
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
var and__8351__auto__ = !((const_expr == null));
if(and__8351__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__8351__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__23851){
var map__23852 = p__23851;
var map__23852__$1 = ((((!((map__23852 == null)))?((((map__23852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23852.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23852):map__23852);
var op = cljs.core.get.call(null,map__23852__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__23852__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__23852__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__8363__auto__ = (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
if(or__8363__auto__){
return or__8363__auto__;
} else {
var and__8351__auto__ = !((const_expr == null));
if(and__8351__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__8351__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__8363__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__23854){
var map__23855 = p__23854;
var map__23855__$1 = ((((!((map__23855 == null)))?((((map__23855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23855.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23855):map__23855);
var test = cljs.core.get.call(null,map__23855__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__23855__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__23855__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__23855__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__23855__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__8363__auto__ = unchecked;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__23857){
var map__23858 = p__23857;
var map__23858__$1 = ((((!((map__23858 == null)))?((((map__23858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23858.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23858):map__23858);
var v = cljs.core.get.call(null,map__23858__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__23858__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__23858__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__23858__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__23858__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__23860_23878 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__23861_23879 = null;
var count__23862_23880 = (0);
var i__23863_23881 = (0);
while(true){
if((i__23863_23881 < count__23862_23880)){
var vec__23864_23882 = cljs.core._nth.call(null,chunk__23861_23879,i__23863_23881);
var ts_23883 = cljs.core.nth.call(null,vec__23864_23882,(0),null);
var then_23884 = cljs.core.nth.call(null,vec__23864_23882,(1),null);
var seq__23867_23885 = cljs.core.seq.call(null,ts_23883);
var chunk__23868_23886 = null;
var count__23869_23887 = (0);
var i__23870_23888 = (0);
while(true){
if((i__23870_23888 < count__23869_23887)){
var test_23889 = cljs.core._nth.call(null,chunk__23868_23886,i__23870_23888);
cljs.compiler.emitln.call(null,"case ",test_23889,":");

var G__23890 = seq__23867_23885;
var G__23891 = chunk__23868_23886;
var G__23892 = count__23869_23887;
var G__23893 = (i__23870_23888 + (1));
seq__23867_23885 = G__23890;
chunk__23868_23886 = G__23891;
count__23869_23887 = G__23892;
i__23870_23888 = G__23893;
continue;
} else {
var temp__6753__auto___23894 = cljs.core.seq.call(null,seq__23867_23885);
if(temp__6753__auto___23894){
var seq__23867_23895__$1 = temp__6753__auto___23894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23867_23895__$1)){
var c__9294__auto___23896 = cljs.core.chunk_first.call(null,seq__23867_23895__$1);
var G__23897 = cljs.core.chunk_rest.call(null,seq__23867_23895__$1);
var G__23898 = c__9294__auto___23896;
var G__23899 = cljs.core.count.call(null,c__9294__auto___23896);
var G__23900 = (0);
seq__23867_23885 = G__23897;
chunk__23868_23886 = G__23898;
count__23869_23887 = G__23899;
i__23870_23888 = G__23900;
continue;
} else {
var test_23901 = cljs.core.first.call(null,seq__23867_23895__$1);
cljs.compiler.emitln.call(null,"case ",test_23901,":");

var G__23902 = cljs.core.next.call(null,seq__23867_23895__$1);
var G__23903 = null;
var G__23904 = (0);
var G__23905 = (0);
seq__23867_23885 = G__23902;
chunk__23868_23886 = G__23903;
count__23869_23887 = G__23904;
i__23870_23888 = G__23905;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_23884);
} else {
cljs.compiler.emitln.call(null,then_23884);
}

cljs.compiler.emitln.call(null,"break;");

var G__23906 = seq__23860_23878;
var G__23907 = chunk__23861_23879;
var G__23908 = count__23862_23880;
var G__23909 = (i__23863_23881 + (1));
seq__23860_23878 = G__23906;
chunk__23861_23879 = G__23907;
count__23862_23880 = G__23908;
i__23863_23881 = G__23909;
continue;
} else {
var temp__6753__auto___23910 = cljs.core.seq.call(null,seq__23860_23878);
if(temp__6753__auto___23910){
var seq__23860_23911__$1 = temp__6753__auto___23910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23860_23911__$1)){
var c__9294__auto___23912 = cljs.core.chunk_first.call(null,seq__23860_23911__$1);
var G__23913 = cljs.core.chunk_rest.call(null,seq__23860_23911__$1);
var G__23914 = c__9294__auto___23912;
var G__23915 = cljs.core.count.call(null,c__9294__auto___23912);
var G__23916 = (0);
seq__23860_23878 = G__23913;
chunk__23861_23879 = G__23914;
count__23862_23880 = G__23915;
i__23863_23881 = G__23916;
continue;
} else {
var vec__23871_23917 = cljs.core.first.call(null,seq__23860_23911__$1);
var ts_23918 = cljs.core.nth.call(null,vec__23871_23917,(0),null);
var then_23919 = cljs.core.nth.call(null,vec__23871_23917,(1),null);
var seq__23874_23920 = cljs.core.seq.call(null,ts_23918);
var chunk__23875_23921 = null;
var count__23876_23922 = (0);
var i__23877_23923 = (0);
while(true){
if((i__23877_23923 < count__23876_23922)){
var test_23924 = cljs.core._nth.call(null,chunk__23875_23921,i__23877_23923);
cljs.compiler.emitln.call(null,"case ",test_23924,":");

var G__23925 = seq__23874_23920;
var G__23926 = chunk__23875_23921;
var G__23927 = count__23876_23922;
var G__23928 = (i__23877_23923 + (1));
seq__23874_23920 = G__23925;
chunk__23875_23921 = G__23926;
count__23876_23922 = G__23927;
i__23877_23923 = G__23928;
continue;
} else {
var temp__6753__auto___23929__$1 = cljs.core.seq.call(null,seq__23874_23920);
if(temp__6753__auto___23929__$1){
var seq__23874_23930__$1 = temp__6753__auto___23929__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23874_23930__$1)){
var c__9294__auto___23931 = cljs.core.chunk_first.call(null,seq__23874_23930__$1);
var G__23932 = cljs.core.chunk_rest.call(null,seq__23874_23930__$1);
var G__23933 = c__9294__auto___23931;
var G__23934 = cljs.core.count.call(null,c__9294__auto___23931);
var G__23935 = (0);
seq__23874_23920 = G__23932;
chunk__23875_23921 = G__23933;
count__23876_23922 = G__23934;
i__23877_23923 = G__23935;
continue;
} else {
var test_23936 = cljs.core.first.call(null,seq__23874_23930__$1);
cljs.compiler.emitln.call(null,"case ",test_23936,":");

var G__23937 = cljs.core.next.call(null,seq__23874_23930__$1);
var G__23938 = null;
var G__23939 = (0);
var G__23940 = (0);
seq__23874_23920 = G__23937;
chunk__23875_23921 = G__23938;
count__23876_23922 = G__23939;
i__23877_23923 = G__23940;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_23919);
} else {
cljs.compiler.emitln.call(null,then_23919);
}

cljs.compiler.emitln.call(null,"break;");

var G__23941 = cljs.core.next.call(null,seq__23860_23911__$1);
var G__23942 = null;
var G__23943 = (0);
var G__23944 = (0);
seq__23860_23878 = G__23941;
chunk__23861_23879 = G__23942;
count__23862_23880 = G__23943;
i__23863_23881 = G__23944;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__23945){
var map__23946 = p__23945;
var map__23946__$1 = ((((!((map__23946 == null)))?((((map__23946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23946.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23946):map__23946);
var throw$ = cljs.core.get.call(null,map__23946__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__23946__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__23949 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__23949,(0),null);
var rstr = cljs.core.nth.call(null,vec__23949,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__23949,fstr,rstr,ret_t,axstr){
return (function (p1__23948_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__23948_SHARP_);
});})(idx,vec__23949,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__23952 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23952),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__23952;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__23953_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__23953_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__23954 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__23955 = cljs.core.seq.call(null,vec__23954);
var first__23956 = cljs.core.first.call(null,seq__23955);
var seq__23955__$1 = cljs.core.next.call(null,seq__23955);
var p = first__23956;
var first__23956__$1 = cljs.core.first.call(null,seq__23955__$1);
var seq__23955__$2 = cljs.core.next.call(null,seq__23955__$1);
var ts = first__23956__$1;
var first__23956__$2 = cljs.core.first.call(null,seq__23955__$2);
var seq__23955__$3 = cljs.core.next.call(null,seq__23955__$2);
var n = first__23956__$2;
var xs = seq__23955__$3;
if(cljs.core.truth_((function (){var and__8351__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__8351__auto__){
var and__8351__auto____$1 = ts;
if(cljs.core.truth_(and__8351__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__8351__auto____$1;
}
} else {
return and__8351__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__23957 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__23958 = cljs.core.seq.call(null,vec__23957);
var first__23959 = cljs.core.first.call(null,seq__23958);
var seq__23958__$1 = cljs.core.next.call(null,seq__23958);
var p = first__23959;
var first__23959__$1 = cljs.core.first.call(null,seq__23958__$1);
var seq__23958__$2 = cljs.core.next.call(null,seq__23958__$1);
var ts = first__23959__$1;
var xs = seq__23958__$2;
if(cljs.core.truth_((function (){var and__8351__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__8351__auto__){
var and__8351__auto____$1 = ts;
if(cljs.core.truth_(and__8351__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__8351__auto____$1;
}
} else {
return and__8351__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__23962 = arguments.length;
switch (G__23962) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__23970 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__23960_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__23960_SHARP_);
} else {
return p1__23960_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__23971 = cljs.core.seq.call(null,vec__23970);
var first__23972 = cljs.core.first.call(null,seq__23971);
var seq__23971__$1 = cljs.core.next.call(null,seq__23971);
var x = first__23972;
var ys = seq__23971__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__23973 = cljs.core.seq.call(null,ys);
var chunk__23974 = null;
var count__23975 = (0);
var i__23976 = (0);
while(true){
if((i__23976 < count__23975)){
var next_line = cljs.core._nth.call(null,chunk__23974,i__23976);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__23982 = seq__23973;
var G__23983 = chunk__23974;
var G__23984 = count__23975;
var G__23985 = (i__23976 + (1));
seq__23973 = G__23982;
chunk__23974 = G__23983;
count__23975 = G__23984;
i__23976 = G__23985;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__23973);
if(temp__6753__auto__){
var seq__23973__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23973__$1)){
var c__9294__auto__ = cljs.core.chunk_first.call(null,seq__23973__$1);
var G__23986 = cljs.core.chunk_rest.call(null,seq__23973__$1);
var G__23987 = c__9294__auto__;
var G__23988 = cljs.core.count.call(null,c__9294__auto__);
var G__23989 = (0);
seq__23973 = G__23986;
chunk__23974 = G__23987;
count__23975 = G__23988;
i__23976 = G__23989;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__23973__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__23990 = cljs.core.next.call(null,seq__23973__$1);
var G__23991 = null;
var G__23992 = (0);
var G__23993 = (0);
seq__23973 = G__23990;
chunk__23974 = G__23991;
count__23975 = G__23992;
i__23976 = G__23993;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__23977_23994 = cljs.core.seq.call(null,docs__$2);
var chunk__23978_23995 = null;
var count__23979_23996 = (0);
var i__23980_23997 = (0);
while(true){
if((i__23980_23997 < count__23979_23996)){
var e_23998 = cljs.core._nth.call(null,chunk__23978_23995,i__23980_23997);
if(cljs.core.truth_(e_23998)){
print_comment_lines.call(null,e_23998);
} else {
}

var G__23999 = seq__23977_23994;
var G__24000 = chunk__23978_23995;
var G__24001 = count__23979_23996;
var G__24002 = (i__23980_23997 + (1));
seq__23977_23994 = G__23999;
chunk__23978_23995 = G__24000;
count__23979_23996 = G__24001;
i__23980_23997 = G__24002;
continue;
} else {
var temp__6753__auto___24003 = cljs.core.seq.call(null,seq__23977_23994);
if(temp__6753__auto___24003){
var seq__23977_24004__$1 = temp__6753__auto___24003;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23977_24004__$1)){
var c__9294__auto___24005 = cljs.core.chunk_first.call(null,seq__23977_24004__$1);
var G__24006 = cljs.core.chunk_rest.call(null,seq__23977_24004__$1);
var G__24007 = c__9294__auto___24005;
var G__24008 = cljs.core.count.call(null,c__9294__auto___24005);
var G__24009 = (0);
seq__23977_23994 = G__24006;
chunk__23978_23995 = G__24007;
count__23979_23996 = G__24008;
i__23980_23997 = G__24009;
continue;
} else {
var e_24010 = cljs.core.first.call(null,seq__23977_24004__$1);
if(cljs.core.truth_(e_24010)){
print_comment_lines.call(null,e_24010);
} else {
}

var G__24011 = cljs.core.next.call(null,seq__23977_24004__$1);
var G__24012 = null;
var G__24013 = (0);
var G__24014 = (0);
seq__23977_23994 = G__24011;
chunk__23978_23995 = G__24012;
count__23979_23996 = G__24013;
i__23980_23997 = G__24014;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__8351__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__24016_SHARP_){
return goog.string.startsWith(p1__24016_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__8351__auto__)){
var and__8351__auto____$1 = opts;
if(cljs.core.truth_(and__8351__auto____$1)){
var and__8351__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__8351__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__8351__auto____$2;
}
} else {
return and__8351__auto____$1;
}
} else {
return and__8351__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__24017){
var map__24018 = p__24017;
var map__24018__$1 = ((((!((map__24018 == null)))?((((map__24018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24018):map__24018);
var name = cljs.core.get.call(null,map__24018__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__24018__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__24018__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__24018__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__24018__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__24018__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__24018__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__24018__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__24018__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__8363__auto__ = init;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__6751__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__6751__auto__)){
var define = temp__6751__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__8351__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__8351__auto__){
return test;
} else {
return and__8351__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__24020){
var map__24021 = p__24020;
var map__24021__$1 = ((((!((map__24021 == null)))?((((map__24021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24021.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24021):map__24021);
var name = cljs.core.get.call(null,map__24021__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__24021__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__24021__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__24023_24041 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__24024_24042 = null;
var count__24025_24043 = (0);
var i__24026_24044 = (0);
while(true){
if((i__24026_24044 < count__24025_24043)){
var vec__24027_24045 = cljs.core._nth.call(null,chunk__24024_24042,i__24026_24044);
var i_24046 = cljs.core.nth.call(null,vec__24027_24045,(0),null);
var param_24047 = cljs.core.nth.call(null,vec__24027_24045,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_24047);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__24048 = seq__24023_24041;
var G__24049 = chunk__24024_24042;
var G__24050 = count__24025_24043;
var G__24051 = (i__24026_24044 + (1));
seq__24023_24041 = G__24048;
chunk__24024_24042 = G__24049;
count__24025_24043 = G__24050;
i__24026_24044 = G__24051;
continue;
} else {
var temp__6753__auto___24052 = cljs.core.seq.call(null,seq__24023_24041);
if(temp__6753__auto___24052){
var seq__24023_24053__$1 = temp__6753__auto___24052;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24023_24053__$1)){
var c__9294__auto___24054 = cljs.core.chunk_first.call(null,seq__24023_24053__$1);
var G__24055 = cljs.core.chunk_rest.call(null,seq__24023_24053__$1);
var G__24056 = c__9294__auto___24054;
var G__24057 = cljs.core.count.call(null,c__9294__auto___24054);
var G__24058 = (0);
seq__24023_24041 = G__24055;
chunk__24024_24042 = G__24056;
count__24025_24043 = G__24057;
i__24026_24044 = G__24058;
continue;
} else {
var vec__24030_24059 = cljs.core.first.call(null,seq__24023_24053__$1);
var i_24060 = cljs.core.nth.call(null,vec__24030_24059,(0),null);
var param_24061 = cljs.core.nth.call(null,vec__24030_24059,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_24061);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__24062 = cljs.core.next.call(null,seq__24023_24053__$1);
var G__24063 = null;
var G__24064 = (0);
var G__24065 = (0);
seq__24023_24041 = G__24062;
chunk__24024_24042 = G__24063;
count__24025_24043 = G__24064;
i__24026_24044 = G__24065;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__24033_24066 = cljs.core.seq.call(null,params);
var chunk__24034_24067 = null;
var count__24035_24068 = (0);
var i__24036_24069 = (0);
while(true){
if((i__24036_24069 < count__24035_24068)){
var param_24070 = cljs.core._nth.call(null,chunk__24034_24067,i__24036_24069);
cljs.compiler.emit.call(null,param_24070);

if(cljs.core._EQ_.call(null,param_24070,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__24071 = seq__24033_24066;
var G__24072 = chunk__24034_24067;
var G__24073 = count__24035_24068;
var G__24074 = (i__24036_24069 + (1));
seq__24033_24066 = G__24071;
chunk__24034_24067 = G__24072;
count__24035_24068 = G__24073;
i__24036_24069 = G__24074;
continue;
} else {
var temp__6753__auto___24075 = cljs.core.seq.call(null,seq__24033_24066);
if(temp__6753__auto___24075){
var seq__24033_24076__$1 = temp__6753__auto___24075;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24033_24076__$1)){
var c__9294__auto___24077 = cljs.core.chunk_first.call(null,seq__24033_24076__$1);
var G__24078 = cljs.core.chunk_rest.call(null,seq__24033_24076__$1);
var G__24079 = c__9294__auto___24077;
var G__24080 = cljs.core.count.call(null,c__9294__auto___24077);
var G__24081 = (0);
seq__24033_24066 = G__24078;
chunk__24034_24067 = G__24079;
count__24035_24068 = G__24080;
i__24036_24069 = G__24081;
continue;
} else {
var param_24082 = cljs.core.first.call(null,seq__24033_24076__$1);
cljs.compiler.emit.call(null,param_24082);

if(cljs.core._EQ_.call(null,param_24082,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__24083 = cljs.core.next.call(null,seq__24033_24076__$1);
var G__24084 = null;
var G__24085 = (0);
var G__24086 = (0);
seq__24033_24066 = G__24083;
chunk__24034_24067 = G__24084;
count__24035_24068 = G__24085;
i__24036_24069 = G__24086;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__24037_24087 = cljs.core.seq.call(null,params);
var chunk__24038_24088 = null;
var count__24039_24089 = (0);
var i__24040_24090 = (0);
while(true){
if((i__24040_24090 < count__24039_24089)){
var param_24091 = cljs.core._nth.call(null,chunk__24038_24088,i__24040_24090);
cljs.compiler.emit.call(null,param_24091);

if(cljs.core._EQ_.call(null,param_24091,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__24092 = seq__24037_24087;
var G__24093 = chunk__24038_24088;
var G__24094 = count__24039_24089;
var G__24095 = (i__24040_24090 + (1));
seq__24037_24087 = G__24092;
chunk__24038_24088 = G__24093;
count__24039_24089 = G__24094;
i__24040_24090 = G__24095;
continue;
} else {
var temp__6753__auto___24096 = cljs.core.seq.call(null,seq__24037_24087);
if(temp__6753__auto___24096){
var seq__24037_24097__$1 = temp__6753__auto___24096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24037_24097__$1)){
var c__9294__auto___24098 = cljs.core.chunk_first.call(null,seq__24037_24097__$1);
var G__24099 = cljs.core.chunk_rest.call(null,seq__24037_24097__$1);
var G__24100 = c__9294__auto___24098;
var G__24101 = cljs.core.count.call(null,c__9294__auto___24098);
var G__24102 = (0);
seq__24037_24087 = G__24099;
chunk__24038_24088 = G__24100;
count__24039_24089 = G__24101;
i__24040_24090 = G__24102;
continue;
} else {
var param_24103 = cljs.core.first.call(null,seq__24037_24097__$1);
cljs.compiler.emit.call(null,param_24103);

if(cljs.core._EQ_.call(null,param_24103,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__24104 = cljs.core.next.call(null,seq__24037_24097__$1);
var G__24105 = null;
var G__24106 = (0);
var G__24107 = (0);
seq__24037_24087 = G__24104;
chunk__24038_24088 = G__24105;
count__24039_24089 = G__24106;
i__24040_24090 = G__24107;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__24108 = cljs.core.seq.call(null,params);
var chunk__24109 = null;
var count__24110 = (0);
var i__24111 = (0);
while(true){
if((i__24111 < count__24110)){
var param = cljs.core._nth.call(null,chunk__24109,i__24111);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__24112 = seq__24108;
var G__24113 = chunk__24109;
var G__24114 = count__24110;
var G__24115 = (i__24111 + (1));
seq__24108 = G__24112;
chunk__24109 = G__24113;
count__24110 = G__24114;
i__24111 = G__24115;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__24108);
if(temp__6753__auto__){
var seq__24108__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24108__$1)){
var c__9294__auto__ = cljs.core.chunk_first.call(null,seq__24108__$1);
var G__24116 = cljs.core.chunk_rest.call(null,seq__24108__$1);
var G__24117 = c__9294__auto__;
var G__24118 = cljs.core.count.call(null,c__9294__auto__);
var G__24119 = (0);
seq__24108 = G__24116;
chunk__24109 = G__24117;
count__24110 = G__24118;
i__24111 = G__24119;
continue;
} else {
var param = cljs.core.first.call(null,seq__24108__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__24120 = cljs.core.next.call(null,seq__24108__$1);
var G__24121 = null;
var G__24122 = (0);
var G__24123 = (0);
seq__24108 = G__24120;
chunk__24109 = G__24121;
count__24110 = G__24122;
i__24111 = G__24123;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__24124){
var map__24125 = p__24124;
var map__24125__$1 = ((((!((map__24125 == null)))?((((map__24125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24125):map__24125);
var type = cljs.core.get.call(null,map__24125__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__24125__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__24125__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__24125__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__24125__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__24125__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__24125__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__24125__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__23644__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__24127){
var map__24128 = p__24127;
var map__24128__$1 = ((((!((map__24128 == null)))?((((map__24128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24128.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24128):map__24128);
var f = map__24128__$1;
var type = cljs.core.get.call(null,map__24128__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__24128__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__24128__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__24128__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__24128__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__24128__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__24128__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__24128__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__23644__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_24138__$1 = (function (){var or__8363__auto__ = name;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_24139 = cljs.compiler.munge.call(null,name_24138__$1);
var delegate_name_24140 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_24139),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_24140," = function (");

var seq__24130_24141 = cljs.core.seq.call(null,params);
var chunk__24131_24142 = null;
var count__24132_24143 = (0);
var i__24133_24144 = (0);
while(true){
if((i__24133_24144 < count__24132_24143)){
var param_24145 = cljs.core._nth.call(null,chunk__24131_24142,i__24133_24144);
cljs.compiler.emit.call(null,param_24145);

if(cljs.core._EQ_.call(null,param_24145,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__24146 = seq__24130_24141;
var G__24147 = chunk__24131_24142;
var G__24148 = count__24132_24143;
var G__24149 = (i__24133_24144 + (1));
seq__24130_24141 = G__24146;
chunk__24131_24142 = G__24147;
count__24132_24143 = G__24148;
i__24133_24144 = G__24149;
continue;
} else {
var temp__6753__auto___24150 = cljs.core.seq.call(null,seq__24130_24141);
if(temp__6753__auto___24150){
var seq__24130_24151__$1 = temp__6753__auto___24150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24130_24151__$1)){
var c__9294__auto___24152 = cljs.core.chunk_first.call(null,seq__24130_24151__$1);
var G__24153 = cljs.core.chunk_rest.call(null,seq__24130_24151__$1);
var G__24154 = c__9294__auto___24152;
var G__24155 = cljs.core.count.call(null,c__9294__auto___24152);
var G__24156 = (0);
seq__24130_24141 = G__24153;
chunk__24131_24142 = G__24154;
count__24132_24143 = G__24155;
i__24133_24144 = G__24156;
continue;
} else {
var param_24157 = cljs.core.first.call(null,seq__24130_24151__$1);
cljs.compiler.emit.call(null,param_24157);

if(cljs.core._EQ_.call(null,param_24157,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__24158 = cljs.core.next.call(null,seq__24130_24151__$1);
var G__24159 = null;
var G__24160 = (0);
var G__24161 = (0);
seq__24130_24141 = G__24158;
chunk__24131_24142 = G__24159;
count__24132_24143 = G__24160;
i__24133_24144 = G__24161;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_24139," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_24162 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_24162,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_24140,".call(this,");

var seq__24134_24163 = cljs.core.seq.call(null,params);
var chunk__24135_24164 = null;
var count__24136_24165 = (0);
var i__24137_24166 = (0);
while(true){
if((i__24137_24166 < count__24136_24165)){
var param_24167 = cljs.core._nth.call(null,chunk__24135_24164,i__24137_24166);
cljs.compiler.emit.call(null,param_24167);

if(cljs.core._EQ_.call(null,param_24167,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__24168 = seq__24134_24163;
var G__24169 = chunk__24135_24164;
var G__24170 = count__24136_24165;
var G__24171 = (i__24137_24166 + (1));
seq__24134_24163 = G__24168;
chunk__24135_24164 = G__24169;
count__24136_24165 = G__24170;
i__24137_24166 = G__24171;
continue;
} else {
var temp__6753__auto___24172 = cljs.core.seq.call(null,seq__24134_24163);
if(temp__6753__auto___24172){
var seq__24134_24173__$1 = temp__6753__auto___24172;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24134_24173__$1)){
var c__9294__auto___24174 = cljs.core.chunk_first.call(null,seq__24134_24173__$1);
var G__24175 = cljs.core.chunk_rest.call(null,seq__24134_24173__$1);
var G__24176 = c__9294__auto___24174;
var G__24177 = cljs.core.count.call(null,c__9294__auto___24174);
var G__24178 = (0);
seq__24134_24163 = G__24175;
chunk__24135_24164 = G__24176;
count__24136_24165 = G__24177;
i__24137_24166 = G__24178;
continue;
} else {
var param_24179 = cljs.core.first.call(null,seq__24134_24173__$1);
cljs.compiler.emit.call(null,param_24179);

if(cljs.core._EQ_.call(null,param_24179,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__24180 = cljs.core.next.call(null,seq__24134_24173__$1);
var G__24181 = null;
var G__24182 = (0);
var G__24183 = (0);
seq__24134_24163 = G__24180;
chunk__24135_24164 = G__24181;
count__24136_24165 = G__24182;
i__24137_24166 = G__24183;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_24139,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_24139,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_24138__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_24139,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_24140,";");

cljs.compiler.emitln.call(null,"return ",mname_24139,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__24187){
var map__24188 = p__24187;
var map__24188__$1 = ((((!((map__24188 == null)))?((((map__24188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24188.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24188):map__24188);
var name = cljs.core.get.call(null,map__24188__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__24188__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__24188__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__24188__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__24188__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__24188__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__24188__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__24188,map__24188__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__24184_SHARP_){
var and__8351__auto__ = p1__24184_SHARP_;
if(cljs.core.truth_(and__8351__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__24184_SHARP_));
} else {
return and__8351__auto__;
}
});})(map__24188,map__24188__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_24223__$1 = (function (){var or__8363__auto__ = name;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_24224 = cljs.compiler.munge.call(null,name_24223__$1);
var maxparams_24225 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_24226 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_24223__$1,mname_24224,maxparams_24225,loop_locals,map__24188,map__24188__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_24224),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_24223__$1,mname_24224,maxparams_24225,loop_locals,map__24188,map__24188__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_24227 = cljs.core.sort_by.call(null,((function (name_24223__$1,mname_24224,maxparams_24225,mmap_24226,loop_locals,map__24188,map__24188__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__24185_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__24185_SHARP_)));
});})(name_24223__$1,mname_24224,maxparams_24225,mmap_24226,loop_locals,map__24188,map__24188__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_24226));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_24224," = null;");

var seq__24190_24228 = cljs.core.seq.call(null,ms_24227);
var chunk__24191_24229 = null;
var count__24192_24230 = (0);
var i__24193_24231 = (0);
while(true){
if((i__24193_24231 < count__24192_24230)){
var vec__24194_24232 = cljs.core._nth.call(null,chunk__24191_24229,i__24193_24231);
var n_24233 = cljs.core.nth.call(null,vec__24194_24232,(0),null);
var meth_24234 = cljs.core.nth.call(null,vec__24194_24232,(1),null);
cljs.compiler.emits.call(null,"var ",n_24233," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_24234))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_24234);
} else {
cljs.compiler.emit_fn_method.call(null,meth_24234);
}

cljs.compiler.emitln.call(null,";");

var G__24235 = seq__24190_24228;
var G__24236 = chunk__24191_24229;
var G__24237 = count__24192_24230;
var G__24238 = (i__24193_24231 + (1));
seq__24190_24228 = G__24235;
chunk__24191_24229 = G__24236;
count__24192_24230 = G__24237;
i__24193_24231 = G__24238;
continue;
} else {
var temp__6753__auto___24239 = cljs.core.seq.call(null,seq__24190_24228);
if(temp__6753__auto___24239){
var seq__24190_24240__$1 = temp__6753__auto___24239;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24190_24240__$1)){
var c__9294__auto___24241 = cljs.core.chunk_first.call(null,seq__24190_24240__$1);
var G__24242 = cljs.core.chunk_rest.call(null,seq__24190_24240__$1);
var G__24243 = c__9294__auto___24241;
var G__24244 = cljs.core.count.call(null,c__9294__auto___24241);
var G__24245 = (0);
seq__24190_24228 = G__24242;
chunk__24191_24229 = G__24243;
count__24192_24230 = G__24244;
i__24193_24231 = G__24245;
continue;
} else {
var vec__24197_24246 = cljs.core.first.call(null,seq__24190_24240__$1);
var n_24247 = cljs.core.nth.call(null,vec__24197_24246,(0),null);
var meth_24248 = cljs.core.nth.call(null,vec__24197_24246,(1),null);
cljs.compiler.emits.call(null,"var ",n_24247," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_24248))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_24248);
} else {
cljs.compiler.emit_fn_method.call(null,meth_24248);
}

cljs.compiler.emitln.call(null,";");

var G__24249 = cljs.core.next.call(null,seq__24190_24240__$1);
var G__24250 = null;
var G__24251 = (0);
var G__24252 = (0);
seq__24190_24228 = G__24249;
chunk__24191_24229 = G__24250;
count__24192_24230 = G__24251;
i__24193_24231 = G__24252;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_24224," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_24225),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_24225)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_24225));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__24200_24253 = cljs.core.seq.call(null,ms_24227);
var chunk__24201_24254 = null;
var count__24202_24255 = (0);
var i__24203_24256 = (0);
while(true){
if((i__24203_24256 < count__24202_24255)){
var vec__24204_24257 = cljs.core._nth.call(null,chunk__24201_24254,i__24203_24256);
var n_24258 = cljs.core.nth.call(null,vec__24204_24257,(0),null);
var meth_24259 = cljs.core.nth.call(null,vec__24204_24257,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_24259))){
cljs.compiler.emitln.call(null,"default:");

var restarg_24260 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_24260," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_24261 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_24260," = new cljs.core.IndexedSeq(",a_24261,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_24258,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_24225)),(((cljs.core.count.call(null,maxparams_24225) > (1)))?", ":null),restarg_24260,");");
} else {
var pcnt_24262 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_24259));
cljs.compiler.emitln.call(null,"case ",pcnt_24262,":");

cljs.compiler.emitln.call(null,"return ",n_24258,".call(this",(((pcnt_24262 === (0)))?null:cljs.core._conj.call(null,(function (){var x__9317__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_24262,maxparams_24225));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),",")),");");
}

var G__24263 = seq__24200_24253;
var G__24264 = chunk__24201_24254;
var G__24265 = count__24202_24255;
var G__24266 = (i__24203_24256 + (1));
seq__24200_24253 = G__24263;
chunk__24201_24254 = G__24264;
count__24202_24255 = G__24265;
i__24203_24256 = G__24266;
continue;
} else {
var temp__6753__auto___24267 = cljs.core.seq.call(null,seq__24200_24253);
if(temp__6753__auto___24267){
var seq__24200_24268__$1 = temp__6753__auto___24267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24200_24268__$1)){
var c__9294__auto___24269 = cljs.core.chunk_first.call(null,seq__24200_24268__$1);
var G__24270 = cljs.core.chunk_rest.call(null,seq__24200_24268__$1);
var G__24271 = c__9294__auto___24269;
var G__24272 = cljs.core.count.call(null,c__9294__auto___24269);
var G__24273 = (0);
seq__24200_24253 = G__24270;
chunk__24201_24254 = G__24271;
count__24202_24255 = G__24272;
i__24203_24256 = G__24273;
continue;
} else {
var vec__24207_24274 = cljs.core.first.call(null,seq__24200_24268__$1);
var n_24275 = cljs.core.nth.call(null,vec__24207_24274,(0),null);
var meth_24276 = cljs.core.nth.call(null,vec__24207_24274,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_24276))){
cljs.compiler.emitln.call(null,"default:");

var restarg_24277 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_24277," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_24278 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_24277," = new cljs.core.IndexedSeq(",a_24278,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_24275,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_24225)),(((cljs.core.count.call(null,maxparams_24225) > (1)))?", ":null),restarg_24277,");");
} else {
var pcnt_24279 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_24276));
cljs.compiler.emitln.call(null,"case ",pcnt_24279,":");

cljs.compiler.emitln.call(null,"return ",n_24275,".call(this",(((pcnt_24279 === (0)))?null:cljs.core._conj.call(null,(function (){var x__9317__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_24279,maxparams_24225));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto__);
})(),",")),");");
}

var G__24280 = cljs.core.next.call(null,seq__24200_24268__$1);
var G__24281 = null;
var G__24282 = (0);
var G__24283 = (0);
seq__24200_24253 = G__24280;
chunk__24201_24254 = G__24281;
count__24202_24255 = G__24282;
i__24203_24256 = G__24283;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + (arguments.length - 1)));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_24224,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_24224,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_24223__$1,mname_24224,maxparams_24225,mmap_24226,ms_24227,loop_locals,map__24188,map__24188__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__24186_SHARP_){
var vec__24210 = p1__24186_SHARP_;
var n = cljs.core.nth.call(null,vec__24210,(0),null);
var m = cljs.core.nth.call(null,vec__24210,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_24223__$1,mname_24224,maxparams_24225,mmap_24226,ms_24227,loop_locals,map__24188,map__24188__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_24227),".cljs$lang$applyTo;");
} else {
}

var seq__24213_24284 = cljs.core.seq.call(null,ms_24227);
var chunk__24214_24285 = null;
var count__24215_24286 = (0);
var i__24216_24287 = (0);
while(true){
if((i__24216_24287 < count__24215_24286)){
var vec__24217_24288 = cljs.core._nth.call(null,chunk__24214_24285,i__24216_24287);
var n_24289 = cljs.core.nth.call(null,vec__24217_24288,(0),null);
var meth_24290 = cljs.core.nth.call(null,vec__24217_24288,(1),null);
var c_24291 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_24290));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_24290))){
cljs.compiler.emitln.call(null,mname_24224,".cljs$core$IFn$_invoke$arity$variadic = ",n_24289,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_24224,".cljs$core$IFn$_invoke$arity$",c_24291," = ",n_24289,";");
}

var G__24292 = seq__24213_24284;
var G__24293 = chunk__24214_24285;
var G__24294 = count__24215_24286;
var G__24295 = (i__24216_24287 + (1));
seq__24213_24284 = G__24292;
chunk__24214_24285 = G__24293;
count__24215_24286 = G__24294;
i__24216_24287 = G__24295;
continue;
} else {
var temp__6753__auto___24296 = cljs.core.seq.call(null,seq__24213_24284);
if(temp__6753__auto___24296){
var seq__24213_24297__$1 = temp__6753__auto___24296;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24213_24297__$1)){
var c__9294__auto___24298 = cljs.core.chunk_first.call(null,seq__24213_24297__$1);
var G__24299 = cljs.core.chunk_rest.call(null,seq__24213_24297__$1);
var G__24300 = c__9294__auto___24298;
var G__24301 = cljs.core.count.call(null,c__9294__auto___24298);
var G__24302 = (0);
seq__24213_24284 = G__24299;
chunk__24214_24285 = G__24300;
count__24215_24286 = G__24301;
i__24216_24287 = G__24302;
continue;
} else {
var vec__24220_24303 = cljs.core.first.call(null,seq__24213_24297__$1);
var n_24304 = cljs.core.nth.call(null,vec__24220_24303,(0),null);
var meth_24305 = cljs.core.nth.call(null,vec__24220_24303,(1),null);
var c_24306 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_24305));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_24305))){
cljs.compiler.emitln.call(null,mname_24224,".cljs$core$IFn$_invoke$arity$variadic = ",n_24304,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_24224,".cljs$core$IFn$_invoke$arity$",c_24306," = ",n_24304,";");
}

var G__24307 = cljs.core.next.call(null,seq__24213_24297__$1);
var G__24308 = null;
var G__24309 = (0);
var G__24310 = (0);
seq__24213_24284 = G__24307;
chunk__24214_24285 = G__24308;
count__24215_24286 = G__24309;
i__24216_24287 = G__24310;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_24224,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__24311){
var map__24312 = p__24311;
var map__24312__$1 = ((((!((map__24312 == null)))?((((map__24312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24312.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24312):map__24312);
var statements = cljs.core.get.call(null,map__24312__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__24312__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__24312__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__8351__auto__ = statements;
if(cljs.core.truth_(and__8351__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__8351__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__24314_24318 = cljs.core.seq.call(null,statements);
var chunk__24315_24319 = null;
var count__24316_24320 = (0);
var i__24317_24321 = (0);
while(true){
if((i__24317_24321 < count__24316_24320)){
var s_24322 = cljs.core._nth.call(null,chunk__24315_24319,i__24317_24321);
cljs.compiler.emitln.call(null,s_24322);

var G__24323 = seq__24314_24318;
var G__24324 = chunk__24315_24319;
var G__24325 = count__24316_24320;
var G__24326 = (i__24317_24321 + (1));
seq__24314_24318 = G__24323;
chunk__24315_24319 = G__24324;
count__24316_24320 = G__24325;
i__24317_24321 = G__24326;
continue;
} else {
var temp__6753__auto___24327 = cljs.core.seq.call(null,seq__24314_24318);
if(temp__6753__auto___24327){
var seq__24314_24328__$1 = temp__6753__auto___24327;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24314_24328__$1)){
var c__9294__auto___24329 = cljs.core.chunk_first.call(null,seq__24314_24328__$1);
var G__24330 = cljs.core.chunk_rest.call(null,seq__24314_24328__$1);
var G__24331 = c__9294__auto___24329;
var G__24332 = cljs.core.count.call(null,c__9294__auto___24329);
var G__24333 = (0);
seq__24314_24318 = G__24330;
chunk__24315_24319 = G__24331;
count__24316_24320 = G__24332;
i__24317_24321 = G__24333;
continue;
} else {
var s_24334 = cljs.core.first.call(null,seq__24314_24328__$1);
cljs.compiler.emitln.call(null,s_24334);

var G__24335 = cljs.core.next.call(null,seq__24314_24328__$1);
var G__24336 = null;
var G__24337 = (0);
var G__24338 = (0);
seq__24314_24318 = G__24335;
chunk__24315_24319 = G__24336;
count__24316_24320 = G__24337;
i__24317_24321 = G__24338;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__8351__auto__ = statements;
if(cljs.core.truth_(and__8351__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__8351__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__24339){
var map__24340 = p__24339;
var map__24340__$1 = ((((!((map__24340 == null)))?((((map__24340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24340):map__24340);
var env = cljs.core.get.call(null,map__24340__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__24340__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__24340__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__24340__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__24340__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__8363__auto__ = name;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :constant (:op finally))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__24342,is_loop){
var map__24343 = p__24342;
var map__24343__$1 = ((((!((map__24343 == null)))?((((map__24343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24343.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24343):map__24343);
var bindings = cljs.core.get.call(null,map__24343__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__24343__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__24343__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_24345_24354 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_24345_24354,context,map__24343,map__24343__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_24345_24354,context,map__24343,map__24343__$1,bindings,expr,env))
,bindings):null));

try{var seq__24346_24355 = cljs.core.seq.call(null,bindings);
var chunk__24347_24356 = null;
var count__24348_24357 = (0);
var i__24349_24358 = (0);
while(true){
if((i__24349_24358 < count__24348_24357)){
var map__24350_24359 = cljs.core._nth.call(null,chunk__24347_24356,i__24349_24358);
var map__24350_24360__$1 = ((((!((map__24350_24359 == null)))?((((map__24350_24359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24350_24359.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24350_24359):map__24350_24359);
var binding_24361 = map__24350_24360__$1;
var init_24362 = cljs.core.get.call(null,map__24350_24360__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_24361);

cljs.compiler.emitln.call(null," = ",init_24362,";");

var G__24363 = seq__24346_24355;
var G__24364 = chunk__24347_24356;
var G__24365 = count__24348_24357;
var G__24366 = (i__24349_24358 + (1));
seq__24346_24355 = G__24363;
chunk__24347_24356 = G__24364;
count__24348_24357 = G__24365;
i__24349_24358 = G__24366;
continue;
} else {
var temp__6753__auto___24367 = cljs.core.seq.call(null,seq__24346_24355);
if(temp__6753__auto___24367){
var seq__24346_24368__$1 = temp__6753__auto___24367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24346_24368__$1)){
var c__9294__auto___24369 = cljs.core.chunk_first.call(null,seq__24346_24368__$1);
var G__24370 = cljs.core.chunk_rest.call(null,seq__24346_24368__$1);
var G__24371 = c__9294__auto___24369;
var G__24372 = cljs.core.count.call(null,c__9294__auto___24369);
var G__24373 = (0);
seq__24346_24355 = G__24370;
chunk__24347_24356 = G__24371;
count__24348_24357 = G__24372;
i__24349_24358 = G__24373;
continue;
} else {
var map__24352_24374 = cljs.core.first.call(null,seq__24346_24368__$1);
var map__24352_24375__$1 = ((((!((map__24352_24374 == null)))?((((map__24352_24374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24352_24374.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24352_24374):map__24352_24374);
var binding_24376 = map__24352_24375__$1;
var init_24377 = cljs.core.get.call(null,map__24352_24375__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_24376);

cljs.compiler.emitln.call(null," = ",init_24377,";");

var G__24378 = cljs.core.next.call(null,seq__24346_24368__$1);
var G__24379 = null;
var G__24380 = (0);
var G__24381 = (0);
seq__24346_24355 = G__24378;
chunk__24347_24356 = G__24379;
count__24348_24357 = G__24380;
i__24349_24358 = G__24381;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_24345_24354;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__24382){
var map__24383 = p__24382;
var map__24383__$1 = ((((!((map__24383 == null)))?((((map__24383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24383.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24383):map__24383);
var frame = cljs.core.get.call(null,map__24383__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__24383__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__24383__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__9406__auto___24385 = cljs.core.count.call(null,exprs);
var i_24386 = (0);
while(true){
if((i_24386 < n__9406__auto___24385)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_24386)," = ",exprs.call(null,i_24386),";");

var G__24387 = (i_24386 + (1));
i_24386 = G__24387;
continue;
} else {
}
break;
}

var n__9406__auto___24388 = cljs.core.count.call(null,exprs);
var i_24389 = (0);
while(true){
if((i_24389 < n__9406__auto___24388)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_24389))," = ",temps.call(null,i_24389),";");

var G__24390 = (i_24389 + (1));
i_24389 = G__24390;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__24391){
var map__24392 = p__24391;
var map__24392__$1 = ((((!((map__24392 == null)))?((((map__24392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24392.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24392):map__24392);
var bindings = cljs.core.get.call(null,map__24392__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__24392__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__24392__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__24394_24402 = cljs.core.seq.call(null,bindings);
var chunk__24395_24403 = null;
var count__24396_24404 = (0);
var i__24397_24405 = (0);
while(true){
if((i__24397_24405 < count__24396_24404)){
var map__24398_24406 = cljs.core._nth.call(null,chunk__24395_24403,i__24397_24405);
var map__24398_24407__$1 = ((((!((map__24398_24406 == null)))?((((map__24398_24406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24398_24406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24398_24406):map__24398_24406);
var binding_24408 = map__24398_24407__$1;
var init_24409 = cljs.core.get.call(null,map__24398_24407__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_24408)," = ",init_24409,";");

var G__24410 = seq__24394_24402;
var G__24411 = chunk__24395_24403;
var G__24412 = count__24396_24404;
var G__24413 = (i__24397_24405 + (1));
seq__24394_24402 = G__24410;
chunk__24395_24403 = G__24411;
count__24396_24404 = G__24412;
i__24397_24405 = G__24413;
continue;
} else {
var temp__6753__auto___24414 = cljs.core.seq.call(null,seq__24394_24402);
if(temp__6753__auto___24414){
var seq__24394_24415__$1 = temp__6753__auto___24414;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24394_24415__$1)){
var c__9294__auto___24416 = cljs.core.chunk_first.call(null,seq__24394_24415__$1);
var G__24417 = cljs.core.chunk_rest.call(null,seq__24394_24415__$1);
var G__24418 = c__9294__auto___24416;
var G__24419 = cljs.core.count.call(null,c__9294__auto___24416);
var G__24420 = (0);
seq__24394_24402 = G__24417;
chunk__24395_24403 = G__24418;
count__24396_24404 = G__24419;
i__24397_24405 = G__24420;
continue;
} else {
var map__24400_24421 = cljs.core.first.call(null,seq__24394_24415__$1);
var map__24400_24422__$1 = ((((!((map__24400_24421 == null)))?((((map__24400_24421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24400_24421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24400_24421):map__24400_24421);
var binding_24423 = map__24400_24422__$1;
var init_24424 = cljs.core.get.call(null,map__24400_24422__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_24423)," = ",init_24424,";");

var G__24425 = cljs.core.next.call(null,seq__24394_24415__$1);
var G__24426 = null;
var G__24427 = (0);
var G__24428 = (0);
seq__24394_24402 = G__24425;
chunk__24395_24403 = G__24426;
count__24396_24404 = G__24427;
i__24397_24405 = G__24428;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__24431){
var map__24432 = p__24431;
var map__24432__$1 = ((((!((map__24432 == null)))?((((map__24432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24432.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24432):map__24432);
var expr = map__24432__$1;
var f = cljs.core.get.call(null,map__24432__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__24432__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__24432__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__8351__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__8351__auto__){
var and__8351__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__8351__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__8351__auto____$1;
}
} else {
return and__8351__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__8351__auto__ = protocol;
if(cljs.core.truth_(and__8351__auto__)){
var and__8351__auto____$1 = tag;
if(cljs.core.truth_(and__8351__auto____$1)){
var or__8363__auto__ = (function (){var and__8351__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__8351__auto____$2){
var and__8351__auto____$3 = protocol;
if(cljs.core.truth_(and__8351__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__8351__auto____$3;
}
} else {
return and__8351__auto____$2;
}
})();
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
var and__8351__auto____$2 = (function (){var or__8363__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__8363__auto____$1){
return or__8363__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__8351__auto____$2)){
var or__8363__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__8363__auto____$1){
return or__8363__auto____$1;
} else {
var and__8351__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__8351__auto____$3){
var and__8351__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"js","js",-886355190,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__8351__auto____$4){
var temp__6753__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__6753__auto__)){
var ps = temp__6753__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__8351__auto____$4;
}
} else {
return and__8351__auto____$3;
}
}
} else {
return and__8351__auto____$2;
}
}
} else {
return and__8351__auto____$1;
}
} else {
return and__8351__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__8363__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__8363__auto__){
return or__8363__auto__;
} else {
var or__8363__auto____$1 = (function (){var temp__6753__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__6753__auto__)){
var ns_str = temp__6753__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__8363__auto____$1)){
return or__8363__auto____$1;
} else {
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f))) || ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)));
var vec__24434 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__8351__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__8351__auto__)){
return (arity > mfa);
} else {
return and__8351__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24432,map__24432__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24432,map__24432__$1,expr,f,args,env){
return (function (p1__24429_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__24429_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24432,map__24432__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24432,map__24432__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24432,map__24432__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24432,map__24432__$1,expr,f,args,env){
return (function (p1__24430_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__24430_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24432,map__24432__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24432,map__24432__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__24434,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__24434,(1),null);
var env__23644__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_24437 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_24437,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_24438 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_24438,args)),(((mfa_24438 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_24438,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__8363__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
var or__8363__auto____$1 = js_QMARK_;
if(or__8363__auto____$1){
return or__8363__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797)))){
var fprop_24439 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_24439," ? ",f__$1,fprop_24439,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_24439," ? ",f__$1,fprop_24439,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__24440){
var map__24441 = p__24440;
var map__24441__$1 = ((((!((map__24441 == null)))?((((map__24441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24441.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24441):map__24441);
var ctor = cljs.core.get.call(null,map__24441__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__24441__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__24441__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23644__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__24443){
var map__24444 = p__24443;
var map__24444__$1 = ((((!((map__24444 == null)))?((((map__24444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24444.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24444):map__24444);
var target = cljs.core.get.call(null,map__24444__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__24444__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__24444__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23644__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__24446 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__24446__$1 = ((((!((map__24446 == null)))?((((map__24446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24446):map__24446);
var options = cljs.core.get.call(null,map__24446__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__24446__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__24447 = options;
var map__24447__$1 = ((((!((map__24447 == null)))?((((map__24447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24447.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24447):map__24447);
var target = cljs.core.get.call(null,map__24447__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__24447__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__24448 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__24454 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__24454__$1 = ((((!((map__24454 == null)))?((((map__24454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24454):map__24454);
var node_libs = cljs.core.get.call(null,map__24454__$1,true);
var libs_to_load = cljs.core.get.call(null,map__24454__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__24448,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__24448,(1),null);
var map__24451 = cljs.core.group_by.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
var map__24451__$1 = ((((!((map__24451 == null)))?((((map__24451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24451.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24451):map__24451);
var global_exports_libs = cljs.core.get.call(null,map__24451__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__24451__$1,false);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__24457_24473 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__24458_24474 = null;
var count__24459_24475 = (0);
var i__24460_24476 = (0);
while(true){
if((i__24460_24476 < count__24459_24475)){
var lib_24477 = cljs.core._nth.call(null,chunk__24458_24474,i__24460_24476);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_24477)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__8363__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_24477),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24477),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__8363__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_24477),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24477),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24477),"');");

}
}
}

var G__24478 = seq__24457_24473;
var G__24479 = chunk__24458_24474;
var G__24480 = count__24459_24475;
var G__24481 = (i__24460_24476 + (1));
seq__24457_24473 = G__24478;
chunk__24458_24474 = G__24479;
count__24459_24475 = G__24480;
i__24460_24476 = G__24481;
continue;
} else {
var temp__6753__auto___24482 = cljs.core.seq.call(null,seq__24457_24473);
if(temp__6753__auto___24482){
var seq__24457_24483__$1 = temp__6753__auto___24482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24457_24483__$1)){
var c__9294__auto___24484 = cljs.core.chunk_first.call(null,seq__24457_24483__$1);
var G__24485 = cljs.core.chunk_rest.call(null,seq__24457_24483__$1);
var G__24486 = c__9294__auto___24484;
var G__24487 = cljs.core.count.call(null,c__9294__auto___24484);
var G__24488 = (0);
seq__24457_24473 = G__24485;
chunk__24458_24474 = G__24486;
count__24459_24475 = G__24487;
i__24460_24476 = G__24488;
continue;
} else {
var lib_24489 = cljs.core.first.call(null,seq__24457_24483__$1);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_24489)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__8363__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_24489),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24489),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__8363__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_24489),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24489),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24489),"');");

}
}
}

var G__24490 = cljs.core.next.call(null,seq__24457_24483__$1);
var G__24491 = null;
var G__24492 = (0);
var G__24493 = (0);
seq__24457_24473 = G__24490;
chunk__24458_24474 = G__24491;
count__24459_24475 = G__24492;
i__24460_24476 = G__24493;
continue;
}
} else {
}
}
break;
}

var seq__24461_24494 = cljs.core.seq.call(null,node_libs);
var chunk__24462_24495 = null;
var count__24463_24496 = (0);
var i__24464_24497 = (0);
while(true){
if((i__24464_24497 < count__24463_24496)){
var lib_24498 = cljs.core._nth.call(null,chunk__24462_24495,i__24464_24497);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_24498)," = require('",lib_24498,"');");

var G__24499 = seq__24461_24494;
var G__24500 = chunk__24462_24495;
var G__24501 = count__24463_24496;
var G__24502 = (i__24464_24497 + (1));
seq__24461_24494 = G__24499;
chunk__24462_24495 = G__24500;
count__24463_24496 = G__24501;
i__24464_24497 = G__24502;
continue;
} else {
var temp__6753__auto___24503 = cljs.core.seq.call(null,seq__24461_24494);
if(temp__6753__auto___24503){
var seq__24461_24504__$1 = temp__6753__auto___24503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24461_24504__$1)){
var c__9294__auto___24505 = cljs.core.chunk_first.call(null,seq__24461_24504__$1);
var G__24506 = cljs.core.chunk_rest.call(null,seq__24461_24504__$1);
var G__24507 = c__9294__auto___24505;
var G__24508 = cljs.core.count.call(null,c__9294__auto___24505);
var G__24509 = (0);
seq__24461_24494 = G__24506;
chunk__24462_24495 = G__24507;
count__24463_24496 = G__24508;
i__24464_24497 = G__24509;
continue;
} else {
var lib_24510 = cljs.core.first.call(null,seq__24461_24504__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_24510)," = require('",lib_24510,"');");

var G__24511 = cljs.core.next.call(null,seq__24461_24504__$1);
var G__24512 = null;
var G__24513 = (0);
var G__24514 = (0);
seq__24461_24494 = G__24511;
chunk__24462_24495 = G__24512;
count__24463_24496 = G__24513;
i__24464_24497 = G__24514;
continue;
}
} else {
}
}
break;
}

var seq__24465_24515 = cljs.core.seq.call(null,global_exports_libs);
var chunk__24466_24516 = null;
var count__24467_24517 = (0);
var i__24468_24518 = (0);
while(true){
if((i__24468_24518 < count__24467_24517)){
var lib_24519 = cljs.core._nth.call(null,chunk__24466_24516,i__24468_24518);
var map__24469_24520 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_24519));
var map__24469_24521__$1 = ((((!((map__24469_24520 == null)))?((((map__24469_24520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24469_24520.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24469_24520):map__24469_24520);
var global_exports_24522 = cljs.core.get.call(null,map__24469_24521__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_24519)," = goog.global.",cljs.core.get.call(null,global_exports_24522,cljs.core.symbol.call(null,lib_24519)),";");

var G__24523 = seq__24465_24515;
var G__24524 = chunk__24466_24516;
var G__24525 = count__24467_24517;
var G__24526 = (i__24468_24518 + (1));
seq__24465_24515 = G__24523;
chunk__24466_24516 = G__24524;
count__24467_24517 = G__24525;
i__24468_24518 = G__24526;
continue;
} else {
var temp__6753__auto___24527 = cljs.core.seq.call(null,seq__24465_24515);
if(temp__6753__auto___24527){
var seq__24465_24528__$1 = temp__6753__auto___24527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24465_24528__$1)){
var c__9294__auto___24529 = cljs.core.chunk_first.call(null,seq__24465_24528__$1);
var G__24530 = cljs.core.chunk_rest.call(null,seq__24465_24528__$1);
var G__24531 = c__9294__auto___24529;
var G__24532 = cljs.core.count.call(null,c__9294__auto___24529);
var G__24533 = (0);
seq__24465_24515 = G__24530;
chunk__24466_24516 = G__24531;
count__24467_24517 = G__24532;
i__24468_24518 = G__24533;
continue;
} else {
var lib_24534 = cljs.core.first.call(null,seq__24465_24528__$1);
var map__24471_24535 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_24534));
var map__24471_24536__$1 = ((((!((map__24471_24535 == null)))?((((map__24471_24535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24471_24535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24471_24535):map__24471_24535);
var global_exports_24537 = cljs.core.get.call(null,map__24471_24536__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_24534)," = goog.global.",cljs.core.get.call(null,global_exports_24537,cljs.core.symbol.call(null,lib_24534)),";");

var G__24538 = cljs.core.next.call(null,seq__24465_24528__$1);
var G__24539 = null;
var G__24540 = (0);
var G__24541 = (0);
seq__24465_24515 = G__24538;
chunk__24466_24516 = G__24539;
count__24467_24517 = G__24540;
i__24468_24518 = G__24541;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__24542){
var map__24543 = p__24542;
var map__24543__$1 = ((((!((map__24543 == null)))?((((map__24543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24543.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24543):map__24543);
var name = cljs.core.get.call(null,map__24543__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__24543__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__24543__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__24543__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__24543__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__24543__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__24543__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__24545){
var map__24546 = p__24545;
var map__24546__$1 = ((((!((map__24546 == null)))?((((map__24546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24546):map__24546);
var name = cljs.core.get.call(null,map__24546__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__24546__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__24546__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__24546__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__24546__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__24546__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__24546__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__24548){
var map__24549 = p__24548;
var map__24549__$1 = ((((!((map__24549 == null)))?((((map__24549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24549.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24549):map__24549);
var t = cljs.core.get.call(null,map__24549__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__24549__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__24549__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__24549__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__24549__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__24551_24569 = cljs.core.seq.call(null,protocols);
var chunk__24552_24570 = null;
var count__24553_24571 = (0);
var i__24554_24572 = (0);
while(true){
if((i__24554_24572 < count__24553_24571)){
var protocol_24573 = cljs.core._nth.call(null,chunk__24552_24570,i__24554_24572);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_24573)].join('')),"}");

var G__24574 = seq__24551_24569;
var G__24575 = chunk__24552_24570;
var G__24576 = count__24553_24571;
var G__24577 = (i__24554_24572 + (1));
seq__24551_24569 = G__24574;
chunk__24552_24570 = G__24575;
count__24553_24571 = G__24576;
i__24554_24572 = G__24577;
continue;
} else {
var temp__6753__auto___24578 = cljs.core.seq.call(null,seq__24551_24569);
if(temp__6753__auto___24578){
var seq__24551_24579__$1 = temp__6753__auto___24578;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24551_24579__$1)){
var c__9294__auto___24580 = cljs.core.chunk_first.call(null,seq__24551_24579__$1);
var G__24581 = cljs.core.chunk_rest.call(null,seq__24551_24579__$1);
var G__24582 = c__9294__auto___24580;
var G__24583 = cljs.core.count.call(null,c__9294__auto___24580);
var G__24584 = (0);
seq__24551_24569 = G__24581;
chunk__24552_24570 = G__24582;
count__24553_24571 = G__24583;
i__24554_24572 = G__24584;
continue;
} else {
var protocol_24585 = cljs.core.first.call(null,seq__24551_24579__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_24585)].join('')),"}");

var G__24586 = cljs.core.next.call(null,seq__24551_24579__$1);
var G__24587 = null;
var G__24588 = (0);
var G__24589 = (0);
seq__24551_24569 = G__24586;
chunk__24552_24570 = G__24587;
count__24553_24571 = G__24588;
i__24554_24572 = G__24589;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__24555_24590 = cljs.core.seq.call(null,fields__$1);
var chunk__24556_24591 = null;
var count__24557_24592 = (0);
var i__24558_24593 = (0);
while(true){
if((i__24558_24593 < count__24557_24592)){
var fld_24594 = cljs.core._nth.call(null,chunk__24556_24591,i__24558_24593);
cljs.compiler.emitln.call(null,"this.",fld_24594," = ",fld_24594,";");

var G__24595 = seq__24555_24590;
var G__24596 = chunk__24556_24591;
var G__24597 = count__24557_24592;
var G__24598 = (i__24558_24593 + (1));
seq__24555_24590 = G__24595;
chunk__24556_24591 = G__24596;
count__24557_24592 = G__24597;
i__24558_24593 = G__24598;
continue;
} else {
var temp__6753__auto___24599 = cljs.core.seq.call(null,seq__24555_24590);
if(temp__6753__auto___24599){
var seq__24555_24600__$1 = temp__6753__auto___24599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24555_24600__$1)){
var c__9294__auto___24601 = cljs.core.chunk_first.call(null,seq__24555_24600__$1);
var G__24602 = cljs.core.chunk_rest.call(null,seq__24555_24600__$1);
var G__24603 = c__9294__auto___24601;
var G__24604 = cljs.core.count.call(null,c__9294__auto___24601);
var G__24605 = (0);
seq__24555_24590 = G__24602;
chunk__24556_24591 = G__24603;
count__24557_24592 = G__24604;
i__24558_24593 = G__24605;
continue;
} else {
var fld_24606 = cljs.core.first.call(null,seq__24555_24600__$1);
cljs.compiler.emitln.call(null,"this.",fld_24606," = ",fld_24606,";");

var G__24607 = cljs.core.next.call(null,seq__24555_24600__$1);
var G__24608 = null;
var G__24609 = (0);
var G__24610 = (0);
seq__24555_24590 = G__24607;
chunk__24556_24591 = G__24608;
count__24557_24592 = G__24609;
i__24558_24593 = G__24610;
continue;
}
} else {
}
}
break;
}

var seq__24559_24611 = cljs.core.seq.call(null,pmasks);
var chunk__24560_24612 = null;
var count__24561_24613 = (0);
var i__24562_24614 = (0);
while(true){
if((i__24562_24614 < count__24561_24613)){
var vec__24563_24615 = cljs.core._nth.call(null,chunk__24560_24612,i__24562_24614);
var pno_24616 = cljs.core.nth.call(null,vec__24563_24615,(0),null);
var pmask_24617 = cljs.core.nth.call(null,vec__24563_24615,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_24616,"$ = ",pmask_24617,";");

var G__24618 = seq__24559_24611;
var G__24619 = chunk__24560_24612;
var G__24620 = count__24561_24613;
var G__24621 = (i__24562_24614 + (1));
seq__24559_24611 = G__24618;
chunk__24560_24612 = G__24619;
count__24561_24613 = G__24620;
i__24562_24614 = G__24621;
continue;
} else {
var temp__6753__auto___24622 = cljs.core.seq.call(null,seq__24559_24611);
if(temp__6753__auto___24622){
var seq__24559_24623__$1 = temp__6753__auto___24622;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24559_24623__$1)){
var c__9294__auto___24624 = cljs.core.chunk_first.call(null,seq__24559_24623__$1);
var G__24625 = cljs.core.chunk_rest.call(null,seq__24559_24623__$1);
var G__24626 = c__9294__auto___24624;
var G__24627 = cljs.core.count.call(null,c__9294__auto___24624);
var G__24628 = (0);
seq__24559_24611 = G__24625;
chunk__24560_24612 = G__24626;
count__24561_24613 = G__24627;
i__24562_24614 = G__24628;
continue;
} else {
var vec__24566_24629 = cljs.core.first.call(null,seq__24559_24623__$1);
var pno_24630 = cljs.core.nth.call(null,vec__24566_24629,(0),null);
var pmask_24631 = cljs.core.nth.call(null,vec__24566_24629,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_24630,"$ = ",pmask_24631,";");

var G__24632 = cljs.core.next.call(null,seq__24559_24623__$1);
var G__24633 = null;
var G__24634 = (0);
var G__24635 = (0);
seq__24559_24611 = G__24632;
chunk__24560_24612 = G__24633;
count__24561_24613 = G__24634;
i__24562_24614 = G__24635;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__24636){
var map__24637 = p__24636;
var map__24637__$1 = ((((!((map__24637 == null)))?((((map__24637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24637):map__24637);
var t = cljs.core.get.call(null,map__24637__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__24637__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__24637__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__24637__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__24637__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__24639_24657 = cljs.core.seq.call(null,protocols);
var chunk__24640_24658 = null;
var count__24641_24659 = (0);
var i__24642_24660 = (0);
while(true){
if((i__24642_24660 < count__24641_24659)){
var protocol_24661 = cljs.core._nth.call(null,chunk__24640_24658,i__24642_24660);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_24661)].join('')),"}");

var G__24662 = seq__24639_24657;
var G__24663 = chunk__24640_24658;
var G__24664 = count__24641_24659;
var G__24665 = (i__24642_24660 + (1));
seq__24639_24657 = G__24662;
chunk__24640_24658 = G__24663;
count__24641_24659 = G__24664;
i__24642_24660 = G__24665;
continue;
} else {
var temp__6753__auto___24666 = cljs.core.seq.call(null,seq__24639_24657);
if(temp__6753__auto___24666){
var seq__24639_24667__$1 = temp__6753__auto___24666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24639_24667__$1)){
var c__9294__auto___24668 = cljs.core.chunk_first.call(null,seq__24639_24667__$1);
var G__24669 = cljs.core.chunk_rest.call(null,seq__24639_24667__$1);
var G__24670 = c__9294__auto___24668;
var G__24671 = cljs.core.count.call(null,c__9294__auto___24668);
var G__24672 = (0);
seq__24639_24657 = G__24669;
chunk__24640_24658 = G__24670;
count__24641_24659 = G__24671;
i__24642_24660 = G__24672;
continue;
} else {
var protocol_24673 = cljs.core.first.call(null,seq__24639_24667__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_24673)].join('')),"}");

var G__24674 = cljs.core.next.call(null,seq__24639_24667__$1);
var G__24675 = null;
var G__24676 = (0);
var G__24677 = (0);
seq__24639_24657 = G__24674;
chunk__24640_24658 = G__24675;
count__24641_24659 = G__24676;
i__24642_24660 = G__24677;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__24643_24678 = cljs.core.seq.call(null,fields__$1);
var chunk__24644_24679 = null;
var count__24645_24680 = (0);
var i__24646_24681 = (0);
while(true){
if((i__24646_24681 < count__24645_24680)){
var fld_24682 = cljs.core._nth.call(null,chunk__24644_24679,i__24646_24681);
cljs.compiler.emitln.call(null,"this.",fld_24682," = ",fld_24682,";");

var G__24683 = seq__24643_24678;
var G__24684 = chunk__24644_24679;
var G__24685 = count__24645_24680;
var G__24686 = (i__24646_24681 + (1));
seq__24643_24678 = G__24683;
chunk__24644_24679 = G__24684;
count__24645_24680 = G__24685;
i__24646_24681 = G__24686;
continue;
} else {
var temp__6753__auto___24687 = cljs.core.seq.call(null,seq__24643_24678);
if(temp__6753__auto___24687){
var seq__24643_24688__$1 = temp__6753__auto___24687;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24643_24688__$1)){
var c__9294__auto___24689 = cljs.core.chunk_first.call(null,seq__24643_24688__$1);
var G__24690 = cljs.core.chunk_rest.call(null,seq__24643_24688__$1);
var G__24691 = c__9294__auto___24689;
var G__24692 = cljs.core.count.call(null,c__9294__auto___24689);
var G__24693 = (0);
seq__24643_24678 = G__24690;
chunk__24644_24679 = G__24691;
count__24645_24680 = G__24692;
i__24646_24681 = G__24693;
continue;
} else {
var fld_24694 = cljs.core.first.call(null,seq__24643_24688__$1);
cljs.compiler.emitln.call(null,"this.",fld_24694," = ",fld_24694,";");

var G__24695 = cljs.core.next.call(null,seq__24643_24688__$1);
var G__24696 = null;
var G__24697 = (0);
var G__24698 = (0);
seq__24643_24678 = G__24695;
chunk__24644_24679 = G__24696;
count__24645_24680 = G__24697;
i__24646_24681 = G__24698;
continue;
}
} else {
}
}
break;
}

var seq__24647_24699 = cljs.core.seq.call(null,pmasks);
var chunk__24648_24700 = null;
var count__24649_24701 = (0);
var i__24650_24702 = (0);
while(true){
if((i__24650_24702 < count__24649_24701)){
var vec__24651_24703 = cljs.core._nth.call(null,chunk__24648_24700,i__24650_24702);
var pno_24704 = cljs.core.nth.call(null,vec__24651_24703,(0),null);
var pmask_24705 = cljs.core.nth.call(null,vec__24651_24703,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_24704,"$ = ",pmask_24705,";");

var G__24706 = seq__24647_24699;
var G__24707 = chunk__24648_24700;
var G__24708 = count__24649_24701;
var G__24709 = (i__24650_24702 + (1));
seq__24647_24699 = G__24706;
chunk__24648_24700 = G__24707;
count__24649_24701 = G__24708;
i__24650_24702 = G__24709;
continue;
} else {
var temp__6753__auto___24710 = cljs.core.seq.call(null,seq__24647_24699);
if(temp__6753__auto___24710){
var seq__24647_24711__$1 = temp__6753__auto___24710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24647_24711__$1)){
var c__9294__auto___24712 = cljs.core.chunk_first.call(null,seq__24647_24711__$1);
var G__24713 = cljs.core.chunk_rest.call(null,seq__24647_24711__$1);
var G__24714 = c__9294__auto___24712;
var G__24715 = cljs.core.count.call(null,c__9294__auto___24712);
var G__24716 = (0);
seq__24647_24699 = G__24713;
chunk__24648_24700 = G__24714;
count__24649_24701 = G__24715;
i__24650_24702 = G__24716;
continue;
} else {
var vec__24654_24717 = cljs.core.first.call(null,seq__24647_24711__$1);
var pno_24718 = cljs.core.nth.call(null,vec__24654_24717,(0),null);
var pmask_24719 = cljs.core.nth.call(null,vec__24654_24717,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_24718,"$ = ",pmask_24719,";");

var G__24720 = cljs.core.next.call(null,seq__24647_24711__$1);
var G__24721 = null;
var G__24722 = (0);
var G__24723 = (0);
seq__24647_24699 = G__24720;
chunk__24648_24700 = G__24721;
count__24649_24701 = G__24722;
i__24650_24702 = G__24723;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__24724){
var map__24725 = p__24724;
var map__24725__$1 = ((((!((map__24725 == null)))?((((map__24725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24725.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24725):map__24725);
var target = cljs.core.get.call(null,map__24725__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__24725__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__24725__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__24725__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__24725__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23644__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__24727){
var map__24728 = p__24727;
var map__24728__$1 = ((((!((map__24728 == null)))?((((map__24728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24728.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24728):map__24728);
var op = cljs.core.get.call(null,map__24728__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__24728__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__24728__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__24728__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__24728__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__8351__auto__ = code;
if(cljs.core.truth_(and__8351__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__8351__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__23644__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23644__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"cache-key","cache-key",-565448732),new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445),new cljs.core.Keyword(null,"language-out","language-out",334619882)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__24733 = cljs.core.seq.call(null,table);
var chunk__24734 = null;
var count__24735 = (0);
var i__24736 = (0);
while(true){
if((i__24736 < count__24735)){
var vec__24737 = cljs.core._nth.call(null,chunk__24734,i__24736);
var sym = cljs.core.nth.call(null,vec__24737,(0),null);
var value = cljs.core.nth.call(null,vec__24737,(1),null);
var ns_24743 = cljs.core.namespace.call(null,sym);
var name_24744 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__24745 = seq__24733;
var G__24746 = chunk__24734;
var G__24747 = count__24735;
var G__24748 = (i__24736 + (1));
seq__24733 = G__24745;
chunk__24734 = G__24746;
count__24735 = G__24747;
i__24736 = G__24748;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__24733);
if(temp__6753__auto__){
var seq__24733__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24733__$1)){
var c__9294__auto__ = cljs.core.chunk_first.call(null,seq__24733__$1);
var G__24749 = cljs.core.chunk_rest.call(null,seq__24733__$1);
var G__24750 = c__9294__auto__;
var G__24751 = cljs.core.count.call(null,c__9294__auto__);
var G__24752 = (0);
seq__24733 = G__24749;
chunk__24734 = G__24750;
count__24735 = G__24751;
i__24736 = G__24752;
continue;
} else {
var vec__24740 = cljs.core.first.call(null,seq__24733__$1);
var sym = cljs.core.nth.call(null,vec__24740,(0),null);
var value = cljs.core.nth.call(null,vec__24740,(1),null);
var ns_24753 = cljs.core.namespace.call(null,sym);
var name_24754 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__24755 = cljs.core.next.call(null,seq__24733__$1);
var G__24756 = null;
var G__24757 = (0);
var G__24758 = (0);
seq__24733 = G__24755;
chunk__24734 = G__24756;
count__24735 = G__24757;
i__24736 = G__24758;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__24760 = arguments.length;
switch (G__24760) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_24765 = cljs.core.first.call(null,ks);
var vec__24761_24766 = cljs.core.conj.call(null,prefix,k_24765);
var top_24767 = cljs.core.nth.call(null,vec__24761_24766,(0),null);
var prefix_SINGLEQUOTE__24768 = vec__24761_24766;
if((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_24765)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__24768) == null))){
if(!((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_24767)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_24767)))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__24768)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_24767);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__24768)),";");
}
} else {
}

var m_24769 = cljs.core.get.call(null,externs,k_24765);
if(cljs.core.empty_QMARK_.call(null,m_24769)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__24768,m_24769,top_level,known_externs);
}

var G__24770 = cljs.core.next.call(null,ks);
ks = G__24770;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
