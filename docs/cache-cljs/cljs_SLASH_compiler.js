// Compiled by ClojureScript 1.9.908 {:static-fns true, :fn-invoke-direct true, :optimize-constants false}
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
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
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
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__19583 = s;
var map__19583__$1 = ((((!((map__19583 == null)))?((((map__19583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19583):map__19583);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19583__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19583__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__19591 = info;
var map__19592 = G__19591;
var map__19592__$1 = ((((!((map__19592 == null)))?((((map__19592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19592):map__19592);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19592__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__19591__$1 = G__19591;
while(true){
var d__$2 = d__$1;
var map__19594 = G__19591__$1;
var map__19594__$1 = ((((!((map__19594 == null)))?((((map__19594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19594.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19594):map__19594);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19594__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__19600 = (d__$2 + (1));
var G__19601 = shadow__$1;
d__$1 = G__19600;
G__19591__$1 = G__19601;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__19614){
var map__19615 = p__19614;
var map__19615__$1 = ((((!((map__19615 == null)))?((((map__19615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19615.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19615):map__19615);
var name_var = map__19615__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19615__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19615__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__19626 = info;
var map__19626__$1 = ((((!((map__19626 == null)))?((((map__19626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19626.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19626):map__19626);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19626__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19626__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__19629 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__19629) : cljs.compiler.munge(G__19629));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__19648 = arguments.length;
switch (G__19648) {
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
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = cljs.core.munge_str(ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__19680 = cp;
switch (G__19680) {
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
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__19682_19686 = cljs.core.seq(s);
var chunk__19683_19687 = null;
var count__19684_19688 = (0);
var i__19685_19689 = (0);
while(true){
if((i__19685_19689 < count__19684_19688)){
var c_19690 = chunk__19683_19687.cljs$core$IIndexed$_nth$arity$2(null,i__19685_19689);
sb.append(cljs.compiler.escape_char(c_19690));

var G__19691 = seq__19682_19686;
var G__19692 = chunk__19683_19687;
var G__19693 = count__19684_19688;
var G__19694 = (i__19685_19689 + (1));
seq__19682_19686 = G__19691;
chunk__19683_19687 = G__19692;
count__19684_19688 = G__19693;
i__19685_19689 = G__19694;
continue;
} else {
var temp__5278__auto___19695 = cljs.core.seq(seq__19682_19686);
if(temp__5278__auto___19695){
var seq__19682_19696__$1 = temp__5278__auto___19695;
if(cljs.core.chunked_seq_QMARK_(seq__19682_19696__$1)){
var c__9683__auto___19697 = cljs.core.chunk_first(seq__19682_19696__$1);
var G__19698 = cljs.core.chunk_rest(seq__19682_19696__$1);
var G__19699 = c__9683__auto___19697;
var G__19700 = cljs.core.count(c__9683__auto___19697);
var G__19701 = (0);
seq__19682_19686 = G__19698;
chunk__19683_19687 = G__19699;
count__19684_19688 = G__19700;
i__19685_19689 = G__19701;
continue;
} else {
var c_19702 = cljs.core.first(seq__19682_19696__$1);
sb.append(cljs.compiler.escape_char(c_19702));

var G__19703 = cljs.core.next(seq__19682_19696__$1);
var G__19704 = null;
var G__19705 = (0);
var G__19706 = (0);
seq__19682_19686 = G__19703;
chunk__19683_19687 = G__19704;
count__19684_19688 = G__19705;
i__19685_19689 = G__19706;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__9805__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9806__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9807__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9808__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9809__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9809__auto__,method_table__9805__auto__,prefer_table__9806__auto__,method_cache__9807__auto__,cached_hierarchy__9808__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__16631__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__16631__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__19707_19712 = ast;
var map__19707_19713__$1 = ((((!((map__19707_19712 == null)))?((((map__19707_19712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19707_19712.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19707_19712):map__19707_19712);
var env_19714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19707_19713__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_19714))){
var map__19709_19715 = env_19714;
var map__19709_19716__$1 = ((((!((map__19709_19715 == null)))?((((map__19709_19715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19709_19715.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19709_19715):map__19709_19715);
var line_19717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19709_19716__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_19718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19709_19716__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__19709_19715,map__19709_19716__$1,line_19717,column_19718,map__19707_19712,map__19707_19713__$1,env_19714,val__16631__auto__){
return (function (m){
var minfo = (function (){var G__19711 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19711,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__19711;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_19717 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__19709_19715,map__19709_19716__$1,line_19717,column_19718,map__19707_19712,map__19707_19713__$1,env_19714,val__16631__auto__){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_19718)?(column_19718 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__19709_19715,map__19709_19716__$1,line_19717,column_19718,map__19707_19712,map__19707_19713__$1,env_19714,val__16631__auto__){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__19709_19715,map__19709_19716__$1,line_19717,column_19718,map__19707_19712,map__19707_19713__$1,env_19714,val__16631__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__19709_19715,map__19709_19716__$1,line_19717,column_19718,map__19707_19712,map__19707_19713__$1,env_19714,val__16631__auto__))
,cljs.core.sorted_map()));
});})(map__19709_19715,map__19709_19716__$1,line_19717,column_19718,map__19707_19712,map__19707_19713__$1,env_19714,val__16631__auto__))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_(ast));
}finally {if((val__16631__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__10036__auto__ = [];
var len__10029__auto___19725 = arguments.length;
var i__10030__auto___19726 = (0);
while(true){
if((i__10030__auto___19726 < len__10029__auto___19725)){
args__10036__auto__.push((arguments[i__10030__auto___19726]));

var G__19727 = (i__10030__auto___19726 + (1));
i__10030__auto___19726 = G__19727;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__19721_19728 = cljs.core.seq(xs);
var chunk__19722_19729 = null;
var count__19723_19730 = (0);
var i__19724_19731 = (0);
while(true){
if((i__19724_19731 < count__19723_19730)){
var x_19732 = chunk__19722_19729.cljs$core$IIndexed$_nth$arity$2(null,i__19724_19731);
if((x_19732 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_19732)){
cljs.compiler.emit(x_19732);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_19732)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_19732);
} else {
if(goog.isFunction(x_19732)){
(x_19732.cljs$core$IFn$_invoke$arity$0 ? x_19732.cljs$core$IFn$_invoke$arity$0() : x_19732());
} else {
var s_19733 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_19732], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__19721_19728,chunk__19722_19729,count__19723_19730,i__19724_19731,s_19733,x_19732){
return (function (p1__19719_SHARP_){
return (p1__19719_SHARP_ + cljs.core.count(s_19733));
});})(seq__19721_19728,chunk__19722_19729,count__19723_19730,i__19724_19731,s_19733,x_19732))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_19733], 0));

}
}
}
}

var G__19734 = seq__19721_19728;
var G__19735 = chunk__19722_19729;
var G__19736 = count__19723_19730;
var G__19737 = (i__19724_19731 + (1));
seq__19721_19728 = G__19734;
chunk__19722_19729 = G__19735;
count__19723_19730 = G__19736;
i__19724_19731 = G__19737;
continue;
} else {
var temp__5278__auto___19738 = cljs.core.seq(seq__19721_19728);
if(temp__5278__auto___19738){
var seq__19721_19739__$1 = temp__5278__auto___19738;
if(cljs.core.chunked_seq_QMARK_(seq__19721_19739__$1)){
var c__9683__auto___19740 = cljs.core.chunk_first(seq__19721_19739__$1);
var G__19741 = cljs.core.chunk_rest(seq__19721_19739__$1);
var G__19742 = c__9683__auto___19740;
var G__19743 = cljs.core.count(c__9683__auto___19740);
var G__19744 = (0);
seq__19721_19728 = G__19741;
chunk__19722_19729 = G__19742;
count__19723_19730 = G__19743;
i__19724_19731 = G__19744;
continue;
} else {
var x_19745 = cljs.core.first(seq__19721_19739__$1);
if((x_19745 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_19745)){
cljs.compiler.emit(x_19745);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_19745)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_19745);
} else {
if(goog.isFunction(x_19745)){
(x_19745.cljs$core$IFn$_invoke$arity$0 ? x_19745.cljs$core$IFn$_invoke$arity$0() : x_19745());
} else {
var s_19746 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_19745], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__19721_19728,chunk__19722_19729,count__19723_19730,i__19724_19731,s_19746,x_19745,seq__19721_19739__$1,temp__5278__auto___19738){
return (function (p1__19719_SHARP_){
return (p1__19719_SHARP_ + cljs.core.count(s_19746));
});})(seq__19721_19728,chunk__19722_19729,count__19723_19730,i__19724_19731,s_19746,x_19745,seq__19721_19739__$1,temp__5278__auto___19738))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_19746], 0));

}
}
}
}

var G__19747 = cljs.core.next(seq__19721_19739__$1);
var G__19748 = null;
var G__19749 = (0);
var G__19750 = (0);
seq__19721_19728 = G__19747;
chunk__19722_19729 = G__19748;
count__19723_19730 = G__19749;
i__19724_19731 = G__19750;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq19720){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19720));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__10036__auto__ = [];
var len__10029__auto___19756 = arguments.length;
var i__10030__auto___19757 = (0);
while(true){
if((i__10030__auto___19757 < len__10029__auto___19756)){
args__10036__auto__.push((arguments[i__10030__auto___19757]));

var G__19758 = (i__10030__auto___19757 + (1));
i__10030__auto___19757 = G__19758;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((0) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__10037__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_19752_19759 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println();
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_19752_19759;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__19753){
var map__19754 = p__19753;
var map__19754__$1 = ((((!((map__19754 == null)))?((((map__19754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19754.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19754):map__19754);
var m = map__19754__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19754__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq19751){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19751));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__9877__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_19760_19762 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_19761_19763 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_19760_19762,_STAR_print_fn_STAR_19761_19763,sb__9877__auto__){
return (function (x__9878__auto__){
return sb__9877__auto__.append(x__9878__auto__);
});})(_STAR_print_newline_STAR_19760_19762,_STAR_print_fn_STAR_19761_19763,sb__9877__auto__))
;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19761_19763;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19760_19762;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9877__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__9805__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9806__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9807__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9808__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9809__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9809__auto__,method_table__9805__auto__,prefer_table__9806__auto__,method_cache__9807__auto__,cached_hierarchy__9808__auto__));
})();
}
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["null"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",x,")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x))], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(x)?"true":"false")], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(new RegExp(\"\"))"], 0));
} else {
var vec__19764 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19764,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19764,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19764,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern], 0));
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Keyword("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant(ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant(name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__19767_19769 = (cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__19767_19769) : cljs.compiler.emit_constant(G__19767_19769));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__19768_19770 = cljs.core.hash(kw);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__19768_19770) : cljs.compiler.emit_constant(G__19768_19770));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Symbol("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant(ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant(name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(symstr) : cljs.compiler.emit_constant(symstr));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__19771_19772 = cljs.core.hash(sym);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__19771_19772) : cljs.compiler.emit_constant(G__19771_19772));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(null) : cljs.compiler.emit_constant(null));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5276__auto__ = (function (){var and__8740__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__8740__auto__)){
var G__19773 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__19773) : x(G__19773));
} else {
return and__8740__auto__;
}
})();
if(cljs.core.truth_(temp__5276__auto__)){
var value = temp__5276__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__5276__auto__ = (function (){var and__8740__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__8740__auto__)){
var G__19774 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__19774) : x(G__19774));
} else {
return and__8740__auto__;
}
})();
if(cljs.core.truth_(temp__5276__auto__)){
var value = temp__5276__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new Date(",date.getTime(),")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__19776){
var map__19777 = p__19776;
var map__19777__$1 = ((((!((map__19777 == null)))?((((map__19777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19777.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19777):map__19777);
var ast = map__19777__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19777__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19777__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19777__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5276__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5276__auto__)){
var const_expr = temp__5276__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__19779 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__19779__$1 = ((((!((map__19779 == null)))?((((map__19779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19779):map__19779);
var cenv = map__19779__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19779__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__8752__auto__ = js_module_name;
if(cljs.core.truth_(or__8752__auto__)){
return or__8752__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__19781 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__8740__auto__ = (function (){var G__19783 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__19783) : cljs.compiler.es5_GT__EQ_(G__19783));
})();
if(cljs.core.truth_(and__8740__auto__)){
return !((cljs.core.namespace(var_name) == null));
} else {
return and__8740__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__19781,cljs.analyzer.es5_allowed);
} else {
return G__19781;
}
})();
var env__19557__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__19784 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__19784,reserved);
} else {
return G__19784;
}
})()], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__19785){
var map__19786 = p__19785;
var map__19786__$1 = ((((!((map__19786 == null)))?((((map__19786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19786.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19786):map__19786);
var arg = map__19786__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19786__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19786__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19786__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19786__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__19788 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__19788__$1 = ((((!((map__19788 == null)))?((((map__19788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19788):map__19788);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19788__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__19557__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__19790){
var map__19791 = p__19790;
var map__19791__$1 = ((((!((map__19791 == null)))?((((map__19791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19791):map__19791);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19791__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19791__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19791__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19557__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.with_meta(",expr,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_((function (p1__19793_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__19793_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__19794){
var map__19795 = p__19794;
var map__19795__$1 = ((((!((map__19795 == null)))?((((map__19795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19795.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19795):map__19795);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19795__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19795__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19795__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__19557__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if((cljs.core.count(keys) === (0))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentArrayMap.EMPTY"], 0));
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_(keys))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"])"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep(keys),"],[",cljs.compiler.comma_sep(vals),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (p__19797){
var map__19798 = p__19797;
var map__19798__$1 = ((((!((map__19798 == null)))?((((map__19798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19798.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19798):map__19798);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19798__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19798__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19557__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.List.EMPTY"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.list(",cljs.compiler.comma_sep(items),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__19800){
var map__19801 = p__19800;
var map__19801__$1 = ((((!((map__19801 == null)))?((((map__19801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19801.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19801):map__19801);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19801__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19801__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19557__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentVector.EMPTY"], 0));
} else {
var cnt_19803 = cljs.core.count(items);
if((cnt_19803 < (32))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentVector(null, ",cnt_19803,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep(items),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_((function (p1__19804_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__19804_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count(items)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__19805){
var map__19806 = p__19805;
var map__19806__$1 = ((((!((map__19806 == null)))?((((map__19806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19806.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19806):map__19806);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19806__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19806__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19557__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentHashSet.EMPTY"], 0));
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_(items))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"))),"], null), null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep(items),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__19808){
var map__19809 = p__19808;
var map__19809__$1 = ((((!((map__19809 == null)))?((((map__19809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19809):map__19809);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19809__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19809__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19809__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19557__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["({"], 0));

var temp__5278__auto___19827 = cljs.core.seq(items);
if(temp__5278__auto___19827){
var items_19828__$1 = temp__5278__auto___19827;
var vec__19811_19829 = items_19828__$1;
var seq__19812_19830 = cljs.core.seq(vec__19811_19829);
var first__19813_19831 = cljs.core.first(seq__19812_19830);
var seq__19812_19832__$1 = cljs.core.next(seq__19812_19830);
var vec__19814_19833 = first__19813_19831;
var k_19834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19814_19833,(0),null);
var v_19835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19814_19833,(1),null);
var r_19836 = seq__19812_19832__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\"",cljs.core.name(k_19834),"\": ",v_19835], 0));

var seq__19817_19837 = cljs.core.seq(r_19836);
var chunk__19818_19838 = null;
var count__19819_19839 = (0);
var i__19820_19840 = (0);
while(true){
if((i__19820_19840 < count__19819_19839)){
var vec__19821_19841 = chunk__19818_19838.cljs$core$IIndexed$_nth$arity$2(null,i__19820_19840);
var k_19842__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19821_19841,(0),null);
var v_19843__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19821_19841,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", \"",cljs.core.name(k_19842__$1),"\": ",v_19843__$1], 0));

var G__19844 = seq__19817_19837;
var G__19845 = chunk__19818_19838;
var G__19846 = count__19819_19839;
var G__19847 = (i__19820_19840 + (1));
seq__19817_19837 = G__19844;
chunk__19818_19838 = G__19845;
count__19819_19839 = G__19846;
i__19820_19840 = G__19847;
continue;
} else {
var temp__5278__auto___19848__$1 = cljs.core.seq(seq__19817_19837);
if(temp__5278__auto___19848__$1){
var seq__19817_19849__$1 = temp__5278__auto___19848__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19817_19849__$1)){
var c__9683__auto___19850 = cljs.core.chunk_first(seq__19817_19849__$1);
var G__19851 = cljs.core.chunk_rest(seq__19817_19849__$1);
var G__19852 = c__9683__auto___19850;
var G__19853 = cljs.core.count(c__9683__auto___19850);
var G__19854 = (0);
seq__19817_19837 = G__19851;
chunk__19818_19838 = G__19852;
count__19819_19839 = G__19853;
i__19820_19840 = G__19854;
continue;
} else {
var vec__19824_19855 = cljs.core.first(seq__19817_19849__$1);
var k_19856__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19824_19855,(0),null);
var v_19857__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19824_19855,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", \"",cljs.core.name(k_19856__$1),"\": ",v_19857__$1], 0));

var G__19858 = cljs.core.next(seq__19817_19849__$1);
var G__19859 = null;
var G__19860 = (0);
var G__19861 = (0);
seq__19817_19837 = G__19858;
chunk__19818_19838 = G__19859;
count__19819_19839 = G__19860;
i__19820_19840 = G__19861;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[",cljs.compiler.comma_sep(items),"]"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__19862){
var map__19863 = p__19862;
var map__19863__$1 = ((((!((map__19863 == null)))?((((map__19863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19863.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19863):map__19863);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19863__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19863__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19863__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19863__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19557__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns,".map__GT_",name,"(",items,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__19865){
var map__19866 = p__19865;
var map__19866__$1 = ((((!((map__19866 == null)))?((((map__19866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19866.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19866):map__19866);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19866__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19866__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__19557__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(form) : cljs.compiler.emit_constant(form));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__19868){
var map__19869 = p__19868;
var map__19869__$1 = ((((!((map__19869 == null)))?((((map__19869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19869):map__19869);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19869__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19869__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19869__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__8752__auto__ = (function (){var and__8740__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__8740__auto__){
var and__8740__auto____$1 = form;
if(cljs.core.truth_(and__8740__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__8740__auto____$1;
}
} else {
return and__8740__auto__;
}
})();
if(cljs.core.truth_(or__8752__auto__)){
return or__8752__auto__;
} else {
var and__8740__auto__ = !((const_expr == null));
if(and__8740__auto__){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_(const_expr));
} else {
return and__8740__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__19871){
var map__19872 = p__19871;
var map__19872__$1 = ((((!((map__19872 == null)))?((((map__19872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19872.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19872):map__19872);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19872__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19872__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19872__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__8752__auto__ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
if(or__8752__auto__){
return or__8752__auto__;
} else {
var and__8740__auto__ = !((const_expr == null));
if(and__8740__auto__){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_(const_expr));
} else {
return and__8740__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__8752__auto__ = (function (){var fexpr__19875 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__19875.cljs$core$IFn$_invoke$arity$1 ? fexpr__19875.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__19875(tag));
})();
if(cljs.core.truth_(or__8752__auto__)){
return or__8752__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__19876){
var map__19877 = p__19876;
var map__19877__$1 = ((((!((map__19877 == null)))?((((map__19877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19877.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19877):map__19877);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19877__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19877__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19877__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19877__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19877__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__8752__auto__ = unchecked;
if(cljs.core.truth_(or__8752__auto__)){
return or__8752__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then], 0));
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([else$], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(cljs.core.truth_(",test,")){"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(",test,"){"], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,"} else {"], 0));

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([else$,"}"], 0));
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__19879){
var map__19880 = p__19879;
var map__19880__$1 = ((((!((map__19880 == null)))?((((map__19880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19880.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19880):map__19880);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19880__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19880__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19880__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19880__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19880__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function(){"], 0));
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",gs,";"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["switch (",v,") {"], 0));

var seq__19882_19900 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tests,thens)));
var chunk__19883_19901 = null;
var count__19884_19902 = (0);
var i__19885_19903 = (0);
while(true){
if((i__19885_19903 < count__19884_19902)){
var vec__19886_19904 = chunk__19883_19901.cljs$core$IIndexed$_nth$arity$2(null,i__19885_19903);
var ts_19905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19886_19904,(0),null);
var then_19906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19886_19904,(1),null);
var seq__19889_19907 = cljs.core.seq(ts_19905);
var chunk__19890_19908 = null;
var count__19891_19909 = (0);
var i__19892_19910 = (0);
while(true){
if((i__19892_19910 < count__19891_19909)){
var test_19911 = chunk__19890_19908.cljs$core$IIndexed$_nth$arity$2(null,i__19892_19910);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_19911,":"], 0));

var G__19912 = seq__19889_19907;
var G__19913 = chunk__19890_19908;
var G__19914 = count__19891_19909;
var G__19915 = (i__19892_19910 + (1));
seq__19889_19907 = G__19912;
chunk__19890_19908 = G__19913;
count__19891_19909 = G__19914;
i__19892_19910 = G__19915;
continue;
} else {
var temp__5278__auto___19916 = cljs.core.seq(seq__19889_19907);
if(temp__5278__auto___19916){
var seq__19889_19917__$1 = temp__5278__auto___19916;
if(cljs.core.chunked_seq_QMARK_(seq__19889_19917__$1)){
var c__9683__auto___19918 = cljs.core.chunk_first(seq__19889_19917__$1);
var G__19919 = cljs.core.chunk_rest(seq__19889_19917__$1);
var G__19920 = c__9683__auto___19918;
var G__19921 = cljs.core.count(c__9683__auto___19918);
var G__19922 = (0);
seq__19889_19907 = G__19919;
chunk__19890_19908 = G__19920;
count__19891_19909 = G__19921;
i__19892_19910 = G__19922;
continue;
} else {
var test_19923 = cljs.core.first(seq__19889_19917__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_19923,":"], 0));

var G__19924 = cljs.core.next(seq__19889_19917__$1);
var G__19925 = null;
var G__19926 = (0);
var G__19927 = (0);
seq__19889_19907 = G__19924;
chunk__19890_19908 = G__19925;
count__19891_19909 = G__19926;
i__19892_19910 = G__19927;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",then_19906], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then_19906], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

var G__19928 = seq__19882_19900;
var G__19929 = chunk__19883_19901;
var G__19930 = count__19884_19902;
var G__19931 = (i__19885_19903 + (1));
seq__19882_19900 = G__19928;
chunk__19883_19901 = G__19929;
count__19884_19902 = G__19930;
i__19885_19903 = G__19931;
continue;
} else {
var temp__5278__auto___19932 = cljs.core.seq(seq__19882_19900);
if(temp__5278__auto___19932){
var seq__19882_19933__$1 = temp__5278__auto___19932;
if(cljs.core.chunked_seq_QMARK_(seq__19882_19933__$1)){
var c__9683__auto___19934 = cljs.core.chunk_first(seq__19882_19933__$1);
var G__19935 = cljs.core.chunk_rest(seq__19882_19933__$1);
var G__19936 = c__9683__auto___19934;
var G__19937 = cljs.core.count(c__9683__auto___19934);
var G__19938 = (0);
seq__19882_19900 = G__19935;
chunk__19883_19901 = G__19936;
count__19884_19902 = G__19937;
i__19885_19903 = G__19938;
continue;
} else {
var vec__19893_19939 = cljs.core.first(seq__19882_19933__$1);
var ts_19940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19893_19939,(0),null);
var then_19941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19893_19939,(1),null);
var seq__19896_19942 = cljs.core.seq(ts_19940);
var chunk__19897_19943 = null;
var count__19898_19944 = (0);
var i__19899_19945 = (0);
while(true){
if((i__19899_19945 < count__19898_19944)){
var test_19946 = chunk__19897_19943.cljs$core$IIndexed$_nth$arity$2(null,i__19899_19945);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_19946,":"], 0));

var G__19947 = seq__19896_19942;
var G__19948 = chunk__19897_19943;
var G__19949 = count__19898_19944;
var G__19950 = (i__19899_19945 + (1));
seq__19896_19942 = G__19947;
chunk__19897_19943 = G__19948;
count__19898_19944 = G__19949;
i__19899_19945 = G__19950;
continue;
} else {
var temp__5278__auto___19951__$1 = cljs.core.seq(seq__19896_19942);
if(temp__5278__auto___19951__$1){
var seq__19896_19952__$1 = temp__5278__auto___19951__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19896_19952__$1)){
var c__9683__auto___19953 = cljs.core.chunk_first(seq__19896_19952__$1);
var G__19954 = cljs.core.chunk_rest(seq__19896_19952__$1);
var G__19955 = c__9683__auto___19953;
var G__19956 = cljs.core.count(c__9683__auto___19953);
var G__19957 = (0);
seq__19896_19942 = G__19954;
chunk__19897_19943 = G__19955;
count__19898_19944 = G__19956;
i__19899_19945 = G__19957;
continue;
} else {
var test_19958 = cljs.core.first(seq__19896_19952__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_19958,":"], 0));

var G__19959 = cljs.core.next(seq__19896_19952__$1);
var G__19960 = null;
var G__19961 = (0);
var G__19962 = (0);
seq__19896_19942 = G__19959;
chunk__19897_19943 = G__19960;
count__19898_19944 = G__19961;
i__19899_19945 = G__19962;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",then_19941], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then_19941], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

var G__19963 = cljs.core.next(seq__19882_19933__$1);
var G__19964 = null;
var G__19965 = (0);
var G__19966 = (0);
seq__19882_19900 = G__19963;
chunk__19883_19901 = G__19964;
count__19884_19902 = G__19965;
i__19885_19903 = G__19966;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",default$], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",gs,";})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__19967){
var map__19968 = p__19967;
var map__19968__$1 = ((((!((map__19968 == null)))?((((map__19968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19968):map__19968);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19968__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19968__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function(){throw ",throw$,"})()"], 0));
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["throw ",throw$,";"], 0));
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__19971 = env;
var G__19972 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__19971,G__19972) : cljs.compiler.resolve_type(G__19971,G__19972));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__19973 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19973,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19973,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type(env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (idx,vec__19973,fstr,rstr,ret_t,axstr){
return (function (p1__19970_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__19970_SHARP_) : cljs.compiler.resolve_type(env,p1__19970_SHARP_));
});})(idx,vec__19973,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__19976 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19976),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__19976;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__19977 = env;
var G__19978 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__19977,G__19978) : cljs.compiler.resolve_type(G__19977,G__19978));
})()),"="].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ts__$1,xs){
return (function (p1__19979_SHARP_){
return cljs.compiler.resolve_type(env,p1__19979_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__19980 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__19981 = cljs.core.seq(vec__19980);
var first__19982 = cljs.core.first(seq__19981);
var seq__19981__$1 = cljs.core.next(seq__19981);
var p = first__19982;
var first__19982__$1 = cljs.core.first(seq__19981__$1);
var seq__19981__$2 = cljs.core.next(seq__19981__$1);
var ts = first__19982__$1;
var first__19982__$2 = cljs.core.first(seq__19981__$2);
var seq__19981__$3 = cljs.core.next(seq__19981__$2);
var n = first__19982__$2;
var xs = seq__19981__$3;
if(cljs.core.truth_((function (){var and__8740__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p);
if(and__8740__auto__){
var and__8740__auto____$1 = ts;
if(cljs.core.truth_(and__8740__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__8740__auto____$1;
}
} else {
return and__8740__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__19983 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__19984 = cljs.core.seq(vec__19983);
var first__19985 = cljs.core.first(seq__19984);
var seq__19984__$1 = cljs.core.next(seq__19984);
var p = first__19985;
var first__19985__$1 = cljs.core.first(seq__19984__$1);
var seq__19984__$2 = cljs.core.next(seq__19984__$1);
var ts = first__19985__$1;
var xs = seq__19984__$2;
if(cljs.core.truth_((function (){var and__8740__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p);
if(and__8740__auto__){
var and__8740__auto____$1 = ts;
if(cljs.core.truth_(and__8740__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__8740__auto____$1;
}
} else {
return and__8740__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__19987 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__19986 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__19986.cljs$core$IFn$_invoke$arity$1 ? fexpr__19986.cljs$core$IFn$_invoke$arity$1(G__19987) : fexpr__19986(G__19987));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__19990 = arguments.length;
switch (G__19990) {
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
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__19998 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docs,docs__$1,docs__$2){
return (function (p1__19988_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__19988_SHARP_);
} else {
return p1__19988_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines(e));
var seq__19999 = cljs.core.seq(vec__19998);
var first__20000 = cljs.core.first(seq__19999);
var seq__19999__$1 = cljs.core.next(seq__19999);
var x = first__20000;
var ys = seq__19999__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(x,"*/","* /")], 0));

var seq__20001 = cljs.core.seq(ys);
var chunk__20002 = null;
var count__20003 = (0);
var i__20004 = (0);
while(true){
if((i__20004 < count__20003)){
var next_line = chunk__20002.cljs$core$IIndexed$_nth$arity$2(null,i__20004);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__20010 = seq__20001;
var G__20011 = chunk__20002;
var G__20012 = count__20003;
var G__20013 = (i__20004 + (1));
seq__20001 = G__20010;
chunk__20002 = G__20011;
count__20003 = G__20012;
i__20004 = G__20013;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__20001);
if(temp__5278__auto__){
var seq__20001__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20001__$1)){
var c__9683__auto__ = cljs.core.chunk_first(seq__20001__$1);
var G__20014 = cljs.core.chunk_rest(seq__20001__$1);
var G__20015 = c__9683__auto__;
var G__20016 = cljs.core.count(c__9683__auto__);
var G__20017 = (0);
seq__20001 = G__20014;
chunk__20002 = G__20015;
count__20003 = G__20016;
i__20004 = G__20017;
continue;
} else {
var next_line = cljs.core.first(seq__20001__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__20018 = cljs.core.next(seq__20001__$1);
var G__20019 = null;
var G__20020 = (0);
var G__20021 = (0);
seq__20001 = G__20018;
chunk__20002 = G__20019;
count__20003 = G__20020;
i__20004 = G__20021;
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
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

var seq__20005_20022 = cljs.core.seq(docs__$2);
var chunk__20006_20023 = null;
var count__20007_20024 = (0);
var i__20008_20025 = (0);
while(true){
if((i__20008_20025 < count__20007_20024)){
var e_20026 = chunk__20006_20023.cljs$core$IIndexed$_nth$arity$2(null,i__20008_20025);
if(cljs.core.truth_(e_20026)){
print_comment_lines(e_20026);
} else {
}

var G__20027 = seq__20005_20022;
var G__20028 = chunk__20006_20023;
var G__20029 = count__20007_20024;
var G__20030 = (i__20008_20025 + (1));
seq__20005_20022 = G__20027;
chunk__20006_20023 = G__20028;
count__20007_20024 = G__20029;
i__20008_20025 = G__20030;
continue;
} else {
var temp__5278__auto___20031 = cljs.core.seq(seq__20005_20022);
if(temp__5278__auto___20031){
var seq__20005_20032__$1 = temp__5278__auto___20031;
if(cljs.core.chunked_seq_QMARK_(seq__20005_20032__$1)){
var c__9683__auto___20033 = cljs.core.chunk_first(seq__20005_20032__$1);
var G__20034 = cljs.core.chunk_rest(seq__20005_20032__$1);
var G__20035 = c__9683__auto___20033;
var G__20036 = cljs.core.count(c__9683__auto___20033);
var G__20037 = (0);
seq__20005_20022 = G__20034;
chunk__20006_20023 = G__20035;
count__20007_20024 = G__20036;
i__20008_20025 = G__20037;
continue;
} else {
var e_20038 = cljs.core.first(seq__20005_20032__$1);
if(cljs.core.truth_(e_20038)){
print_comment_lines(e_20038);
} else {
}

var G__20039 = cljs.core.next(seq__20005_20032__$1);
var G__20040 = null;
var G__20041 = (0);
var G__20042 = (0);
seq__20005_20022 = G__20039;
chunk__20006_20023 = G__20040;
count__20007_20024 = G__20041;
i__20008_20025 = G__20042;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" */"], 0));
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__8740__auto__ = cljs.core.some(((function (opts){
return (function (p1__20044_SHARP_){
return goog.string.startsWith(p1__20044_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__8740__auto__)){
var and__8740__auto____$1 = opts;
if(cljs.core.truth_(and__8740__auto____$1)){
var and__8740__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__8740__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_(define))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return and__8740__auto____$2;
}
} else {
return and__8740__auto____$1;
}
} else {
return and__8740__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__20045){
var map__20046 = p__20045;
var map__20046__$1 = ((((!((map__20046 == null)))?((((map__20046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20046.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20046):map__20046);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20046__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20046__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20046__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20046__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20046__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20046__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20046__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20046__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20046__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__8752__auto__ = init;
if(cljs.core.truth_(or__8752__auto__)){
return or__8752__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ("], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([var$], 0));

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",(function (){var temp__5276__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5276__auto__)){
var define = temp__5276__auto__;
return define;
} else {
return init;
}
})()], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["; return ("], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast], 0))], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");})()"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");"], 0));
} else {
}

if(cljs.core.truth_((function (){var and__8740__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__8740__auto__){
return test;
} else {
return and__8740__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([var$,".cljs$lang$test = ",test,";"], 0));
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__20048){
var map__20049 = p__20048;
var map__20049__$1 = ((((!((map__20049 == null)))?((((map__20049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20049.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20049):map__20049);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20049__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20049__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20049__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (",arglist,"){"], 0));

var seq__20051_20069 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__20052_20070 = null;
var count__20053_20071 = (0);
var i__20054_20072 = (0);
while(true){
if((i__20054_20072 < count__20053_20071)){
var vec__20055_20073 = chunk__20052_20070.cljs$core$IIndexed$_nth$arity$2(null,i__20054_20072);
var i_20074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20055_20073,(0),null);
var param_20075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20055_20073,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(param_20075);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist," = cljs.core.next(",arglist,");"], 0));

var G__20076 = seq__20051_20069;
var G__20077 = chunk__20052_20070;
var G__20078 = count__20053_20071;
var G__20079 = (i__20054_20072 + (1));
seq__20051_20069 = G__20076;
chunk__20052_20070 = G__20077;
count__20053_20071 = G__20078;
i__20054_20072 = G__20079;
continue;
} else {
var temp__5278__auto___20080 = cljs.core.seq(seq__20051_20069);
if(temp__5278__auto___20080){
var seq__20051_20081__$1 = temp__5278__auto___20080;
if(cljs.core.chunked_seq_QMARK_(seq__20051_20081__$1)){
var c__9683__auto___20082 = cljs.core.chunk_first(seq__20051_20081__$1);
var G__20083 = cljs.core.chunk_rest(seq__20051_20081__$1);
var G__20084 = c__9683__auto___20082;
var G__20085 = cljs.core.count(c__9683__auto___20082);
var G__20086 = (0);
seq__20051_20069 = G__20083;
chunk__20052_20070 = G__20084;
count__20053_20071 = G__20085;
i__20054_20072 = G__20086;
continue;
} else {
var vec__20058_20087 = cljs.core.first(seq__20051_20081__$1);
var i_20088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20058_20087,(0),null);
var param_20089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20058_20087,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(param_20089);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist," = cljs.core.next(",arglist,");"], 0));

var G__20090 = cljs.core.next(seq__20051_20081__$1);
var G__20091 = null;
var G__20092 = (0);
var G__20093 = (0);
seq__20051_20069 = G__20090;
chunk__20052_20070 = G__20091;
count__20053_20071 = G__20092;
i__20054_20072 = G__20093;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.rest(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name,"("], 0));

var seq__20061_20094 = cljs.core.seq(params);
var chunk__20062_20095 = null;
var count__20063_20096 = (0);
var i__20064_20097 = (0);
while(true){
if((i__20064_20097 < count__20063_20096)){
var param_20098 = chunk__20062_20095.cljs$core$IIndexed$_nth$arity$2(null,i__20064_20097);
cljs.compiler.emit(param_20098);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_20098,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__20099 = seq__20061_20094;
var G__20100 = chunk__20062_20095;
var G__20101 = count__20063_20096;
var G__20102 = (i__20064_20097 + (1));
seq__20061_20094 = G__20099;
chunk__20062_20095 = G__20100;
count__20063_20096 = G__20101;
i__20064_20097 = G__20102;
continue;
} else {
var temp__5278__auto___20103 = cljs.core.seq(seq__20061_20094);
if(temp__5278__auto___20103){
var seq__20061_20104__$1 = temp__5278__auto___20103;
if(cljs.core.chunked_seq_QMARK_(seq__20061_20104__$1)){
var c__9683__auto___20105 = cljs.core.chunk_first(seq__20061_20104__$1);
var G__20106 = cljs.core.chunk_rest(seq__20061_20104__$1);
var G__20107 = c__9683__auto___20105;
var G__20108 = cljs.core.count(c__9683__auto___20105);
var G__20109 = (0);
seq__20061_20094 = G__20106;
chunk__20062_20095 = G__20107;
count__20063_20096 = G__20108;
i__20064_20097 = G__20109;
continue;
} else {
var param_20110 = cljs.core.first(seq__20061_20104__$1);
cljs.compiler.emit(param_20110);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_20110,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__20111 = cljs.core.next(seq__20061_20104__$1);
var G__20112 = null;
var G__20113 = (0);
var G__20114 = (0);
seq__20061_20094 = G__20111;
chunk__20062_20095 = G__20112;
count__20063_20096 = G__20113;
i__20064_20097 = G__20114;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.seq(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name,"("], 0));

var seq__20065_20115 = cljs.core.seq(params);
var chunk__20066_20116 = null;
var count__20067_20117 = (0);
var i__20068_20118 = (0);
while(true){
if((i__20068_20118 < count__20067_20117)){
var param_20119 = chunk__20066_20116.cljs$core$IIndexed$_nth$arity$2(null,i__20068_20118);
cljs.compiler.emit(param_20119);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_20119,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__20120 = seq__20065_20115;
var G__20121 = chunk__20066_20116;
var G__20122 = count__20067_20117;
var G__20123 = (i__20068_20118 + (1));
seq__20065_20115 = G__20120;
chunk__20066_20116 = G__20121;
count__20067_20117 = G__20122;
i__20068_20118 = G__20123;
continue;
} else {
var temp__5278__auto___20124 = cljs.core.seq(seq__20065_20115);
if(temp__5278__auto___20124){
var seq__20065_20125__$1 = temp__5278__auto___20124;
if(cljs.core.chunked_seq_QMARK_(seq__20065_20125__$1)){
var c__9683__auto___20126 = cljs.core.chunk_first(seq__20065_20125__$1);
var G__20127 = cljs.core.chunk_rest(seq__20065_20125__$1);
var G__20128 = c__9683__auto___20126;
var G__20129 = cljs.core.count(c__9683__auto___20126);
var G__20130 = (0);
seq__20065_20115 = G__20127;
chunk__20066_20116 = G__20128;
count__20067_20117 = G__20129;
i__20068_20118 = G__20130;
continue;
} else {
var param_20131 = cljs.core.first(seq__20065_20125__$1);
cljs.compiler.emit(param_20131);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_20131,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__20132 = cljs.core.next(seq__20065_20125__$1);
var G__20133 = null;
var G__20134 = (0);
var G__20135 = (0);
seq__20065_20115 = G__20132;
chunk__20066_20116 = G__20133;
count__20067_20117 = G__20134;
i__20068_20118 = G__20135;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})"], 0));
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__20136 = cljs.core.seq(params);
var chunk__20137 = null;
var count__20138 = (0);
var i__20139 = (0);
while(true){
if((i__20139 < count__20138)){
var param = chunk__20137.cljs$core$IIndexed$_nth$arity$2(null,i__20139);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__20140 = seq__20136;
var G__20141 = chunk__20137;
var G__20142 = count__20138;
var G__20143 = (i__20139 + (1));
seq__20136 = G__20140;
chunk__20137 = G__20141;
count__20138 = G__20142;
i__20139 = G__20143;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__20136);
if(temp__5278__auto__){
var seq__20136__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20136__$1)){
var c__9683__auto__ = cljs.core.chunk_first(seq__20136__$1);
var G__20144 = cljs.core.chunk_rest(seq__20136__$1);
var G__20145 = c__9683__auto__;
var G__20146 = cljs.core.count(c__9683__auto__);
var G__20147 = (0);
seq__20136 = G__20144;
chunk__20137 = G__20145;
count__20138 = G__20146;
i__20139 = G__20147;
continue;
} else {
var param = cljs.core.first(seq__20136__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__20148 = cljs.core.next(seq__20136__$1);
var G__20149 = null;
var G__20150 = (0);
var G__20151 = (0);
seq__20136 = G__20148;
chunk__20137 = G__20149;
count__20138 = G__20150;
i__20139 = G__20151;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__20152){
var map__20153 = p__20152;
var map__20153__$1 = ((((!((map__20153 == null)))?((((map__20153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20153.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20153):map__20153);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20153__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20153__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20153__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20153__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20153__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20153__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20153__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20153__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__19557__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"("], 0));

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__20155){
var map__20156 = p__20155;
var map__20156__$1 = ((((!((map__20156 == null)))?((((map__20156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20156.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20156):map__20156);
var f = map__20156__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20156__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20156__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20156__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20156__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20156__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20156__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20156__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20156__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__19557__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

var name_20166__$1 = (function (){var or__8752__auto__ = name;
if(cljs.core.truth_(or__8752__auto__)){
return or__8752__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_20167 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_20166__$1);
var delegate_name_20168 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_20167),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function() { "], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",delegate_name_20168," = function ("], 0));

var seq__20158_20169 = cljs.core.seq(params);
var chunk__20159_20170 = null;
var count__20160_20171 = (0);
var i__20161_20172 = (0);
while(true){
if((i__20161_20172 < count__20160_20171)){
var param_20173 = chunk__20159_20170.cljs$core$IIndexed$_nth$arity$2(null,i__20161_20172);
cljs.compiler.emit(param_20173);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_20173,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__20174 = seq__20158_20169;
var G__20175 = chunk__20159_20170;
var G__20176 = count__20160_20171;
var G__20177 = (i__20161_20172 + (1));
seq__20158_20169 = G__20174;
chunk__20159_20170 = G__20175;
count__20160_20171 = G__20176;
i__20161_20172 = G__20177;
continue;
} else {
var temp__5278__auto___20178 = cljs.core.seq(seq__20158_20169);
if(temp__5278__auto___20178){
var seq__20158_20179__$1 = temp__5278__auto___20178;
if(cljs.core.chunked_seq_QMARK_(seq__20158_20179__$1)){
var c__9683__auto___20180 = cljs.core.chunk_first(seq__20158_20179__$1);
var G__20181 = cljs.core.chunk_rest(seq__20158_20179__$1);
var G__20182 = c__9683__auto___20180;
var G__20183 = cljs.core.count(c__9683__auto___20180);
var G__20184 = (0);
seq__20158_20169 = G__20181;
chunk__20159_20170 = G__20182;
count__20160_20171 = G__20183;
i__20161_20172 = G__20184;
continue;
} else {
var param_20185 = cljs.core.first(seq__20158_20179__$1);
cljs.compiler.emit(param_20185);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_20185,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__20186 = cljs.core.next(seq__20158_20179__$1);
var G__20187 = null;
var G__20188 = (0);
var G__20189 = (0);
seq__20158_20169 = G__20186;
chunk__20159_20170 = G__20187;
count__20160_20171 = G__20188;
i__20161_20172 = G__20189;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",mname_20167," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",(cljs.core.count(params) - (1)),") {"], 0));

var a_20190 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_20190,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["} "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name_20168,".call(this,"], 0));

var seq__20162_20191 = cljs.core.seq(params);
var chunk__20163_20192 = null;
var count__20164_20193 = (0);
var i__20165_20194 = (0);
while(true){
if((i__20165_20194 < count__20164_20193)){
var param_20195 = chunk__20163_20192.cljs$core$IIndexed$_nth$arity$2(null,i__20165_20194);
cljs.compiler.emit(param_20195);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_20195,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__20196 = seq__20162_20191;
var G__20197 = chunk__20163_20192;
var G__20198 = count__20164_20193;
var G__20199 = (i__20165_20194 + (1));
seq__20162_20191 = G__20196;
chunk__20163_20192 = G__20197;
count__20164_20193 = G__20198;
i__20165_20194 = G__20199;
continue;
} else {
var temp__5278__auto___20200 = cljs.core.seq(seq__20162_20191);
if(temp__5278__auto___20200){
var seq__20162_20201__$1 = temp__5278__auto___20200;
if(cljs.core.chunked_seq_QMARK_(seq__20162_20201__$1)){
var c__9683__auto___20202 = cljs.core.chunk_first(seq__20162_20201__$1);
var G__20203 = cljs.core.chunk_rest(seq__20162_20201__$1);
var G__20204 = c__9683__auto___20202;
var G__20205 = cljs.core.count(c__9683__auto___20202);
var G__20206 = (0);
seq__20162_20191 = G__20203;
chunk__20163_20192 = G__20204;
count__20164_20193 = G__20205;
i__20165_20194 = G__20206;
continue;
} else {
var param_20207 = cljs.core.first(seq__20162_20201__$1);
cljs.compiler.emit(param_20207);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_20207,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__20208 = cljs.core.next(seq__20162_20201__$1);
var G__20209 = null;
var G__20210 = (0);
var G__20211 = (0);
seq__20162_20191 = G__20208;
chunk__20163_20192 = G__20209;
count__20164_20193 = G__20210;
i__20165_20194 = G__20211;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_20167,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_20167,".cljs$lang$applyTo = "], 0));

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_20166__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_20167,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_20168,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",mname_20167,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__20215){
var map__20216 = p__20215;
var map__20216__$1 = ((((!((map__20216 == null)))?((((map__20216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20216.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20216):map__20216);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20216__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20216__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20216__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20216__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20216__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20216__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20216__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__20216,map__20216__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__20212_SHARP_){
var and__8740__auto__ = p1__20212_SHARP_;
if(cljs.core.truth_(and__8740__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__20212_SHARP_));
} else {
return and__8740__auto__;
}
});})(map__20216,map__20216__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_20251__$1 = (function (){var or__8752__auto__ = name;
if(cljs.core.truth_(or__8752__auto__)){
return or__8752__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_20252 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_20251__$1);
var maxparams_20253 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_20254 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_20251__$1,mname_20252,maxparams_20253,loop_locals,map__20216,map__20216__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_20252),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_20251__$1,mname_20252,maxparams_20253,loop_locals,map__20216,map__20216__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_20255 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_20251__$1,mname_20252,maxparams_20253,mmap_20254,loop_locals,map__20216,map__20216__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__20213_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__20213_SHARP_)));
});})(name_20251__$1,mname_20252,maxparams_20253,mmap_20254,loop_locals,map__20216,map__20216__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq(mmap_20254));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function() {"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",mname_20252," = null;"], 0));

var seq__20218_20256 = cljs.core.seq(ms_20255);
var chunk__20219_20257 = null;
var count__20220_20258 = (0);
var i__20221_20259 = (0);
while(true){
if((i__20221_20259 < count__20220_20258)){
var vec__20222_20260 = chunk__20219_20257.cljs$core$IIndexed$_nth$arity$2(null,i__20221_20259);
var n_20261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20222_20260,(0),null);
var meth_20262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20222_20260,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",n_20261," = "], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20262))){
cljs.compiler.emit_variadic_fn_method(meth_20262);
} else {
cljs.compiler.emit_fn_method(meth_20262);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

var G__20263 = seq__20218_20256;
var G__20264 = chunk__20219_20257;
var G__20265 = count__20220_20258;
var G__20266 = (i__20221_20259 + (1));
seq__20218_20256 = G__20263;
chunk__20219_20257 = G__20264;
count__20220_20258 = G__20265;
i__20221_20259 = G__20266;
continue;
} else {
var temp__5278__auto___20267 = cljs.core.seq(seq__20218_20256);
if(temp__5278__auto___20267){
var seq__20218_20268__$1 = temp__5278__auto___20267;
if(cljs.core.chunked_seq_QMARK_(seq__20218_20268__$1)){
var c__9683__auto___20269 = cljs.core.chunk_first(seq__20218_20268__$1);
var G__20270 = cljs.core.chunk_rest(seq__20218_20268__$1);
var G__20271 = c__9683__auto___20269;
var G__20272 = cljs.core.count(c__9683__auto___20269);
var G__20273 = (0);
seq__20218_20256 = G__20270;
chunk__20219_20257 = G__20271;
count__20220_20258 = G__20272;
i__20221_20259 = G__20273;
continue;
} else {
var vec__20225_20274 = cljs.core.first(seq__20218_20268__$1);
var n_20275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20225_20274,(0),null);
var meth_20276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20225_20274,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",n_20275," = "], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20276))){
cljs.compiler.emit_variadic_fn_method(meth_20276);
} else {
cljs.compiler.emit_fn_method(meth_20276);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

var G__20277 = cljs.core.next(seq__20218_20268__$1);
var G__20278 = null;
var G__20279 = (0);
var G__20280 = (0);
seq__20218_20256 = G__20277;
chunk__20219_20257 = G__20278;
count__20220_20258 = G__20279;
i__20221_20259 = G__20280;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_20252," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_20253),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_20253)),"){"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(maxparams_20253));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = var_args;"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["switch(arguments.length){"], 0));

var seq__20228_20281 = cljs.core.seq(ms_20255);
var chunk__20229_20282 = null;
var count__20230_20283 = (0);
var i__20231_20284 = (0);
while(true){
if((i__20231_20284 < count__20230_20283)){
var vec__20232_20285 = chunk__20229_20282.cljs$core$IIndexed$_nth$arity$2(null,i__20231_20284);
var n_20286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20232_20285,(0),null);
var meth_20287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20232_20285,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20287))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

var restarg_20288 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",restarg_20288," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_20289 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_20288," = new cljs.core.IndexedSeq(",a_20289,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_20286,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_20253)),(((cljs.core.count(maxparams_20253) > (1)))?", ":null),restarg_20288,");"], 0));
} else {
var pcnt_20290 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_20287));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",pcnt_20290,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_20286,".call(this",(((pcnt_20290 === (0)))?null:cljs.core._conj((function (){var x__9706__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_20290,maxparams_20253));
return cljs.core._conj(cljs.core.List.EMPTY,x__9706__auto__);
})(),",")),");"], 0));
}

var G__20291 = seq__20228_20281;
var G__20292 = chunk__20229_20282;
var G__20293 = count__20230_20283;
var G__20294 = (i__20231_20284 + (1));
seq__20228_20281 = G__20291;
chunk__20229_20282 = G__20292;
count__20230_20283 = G__20293;
i__20231_20284 = G__20294;
continue;
} else {
var temp__5278__auto___20295 = cljs.core.seq(seq__20228_20281);
if(temp__5278__auto___20295){
var seq__20228_20296__$1 = temp__5278__auto___20295;
if(cljs.core.chunked_seq_QMARK_(seq__20228_20296__$1)){
var c__9683__auto___20297 = cljs.core.chunk_first(seq__20228_20296__$1);
var G__20298 = cljs.core.chunk_rest(seq__20228_20296__$1);
var G__20299 = c__9683__auto___20297;
var G__20300 = cljs.core.count(c__9683__auto___20297);
var G__20301 = (0);
seq__20228_20281 = G__20298;
chunk__20229_20282 = G__20299;
count__20230_20283 = G__20300;
i__20231_20284 = G__20301;
continue;
} else {
var vec__20235_20302 = cljs.core.first(seq__20228_20296__$1);
var n_20303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20235_20302,(0),null);
var meth_20304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20235_20302,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20304))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

var restarg_20305 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",restarg_20305," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_20306 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_20305," = new cljs.core.IndexedSeq(",a_20306,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_20303,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_20253)),(((cljs.core.count(maxparams_20253) > (1)))?", ":null),restarg_20305,");"], 0));
} else {
var pcnt_20307 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_20304));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",pcnt_20307,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_20303,".call(this",(((pcnt_20307 === (0)))?null:cljs.core._conj((function (){var x__9706__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_20307,maxparams_20253));
return cljs.core._conj(cljs.core.List.EMPTY,x__9706__auto__);
})(),",")),");"], 0));
}

var G__20308 = cljs.core.next(seq__20228_20296__$1);
var G__20309 = null;
var G__20310 = (0);
var G__20311 = (0);
seq__20228_20281 = G__20308;
chunk__20229_20282 = G__20309;
count__20230_20283 = G__20310;
i__20231_20284 = G__20311;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["throw(new Error('Invalid arity: ' + (arguments.length - 1)));"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_20252,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_20252,".cljs$lang$applyTo = ",cljs.core.some(((function (name_20251__$1,mname_20252,maxparams_20253,mmap_20254,ms_20255,loop_locals,map__20216,map__20216__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__20214_SHARP_){
var vec__20238 = p1__20214_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20238,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20238,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_20251__$1,mname_20252,maxparams_20253,mmap_20254,ms_20255,loop_locals,map__20216,map__20216__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_20255),".cljs$lang$applyTo;"], 0));
} else {
}

var seq__20241_20312 = cljs.core.seq(ms_20255);
var chunk__20242_20313 = null;
var count__20243_20314 = (0);
var i__20244_20315 = (0);
while(true){
if((i__20244_20315 < count__20243_20314)){
var vec__20245_20316 = chunk__20242_20313.cljs$core$IIndexed$_nth$arity$2(null,i__20244_20315);
var n_20317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20245_20316,(0),null);
var meth_20318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20245_20316,(1),null);
var c_20319 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_20318));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20318))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_20252,".cljs$core$IFn$_invoke$arity$variadic = ",n_20317,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_20252,".cljs$core$IFn$_invoke$arity$",c_20319," = ",n_20317,";"], 0));
}

var G__20320 = seq__20241_20312;
var G__20321 = chunk__20242_20313;
var G__20322 = count__20243_20314;
var G__20323 = (i__20244_20315 + (1));
seq__20241_20312 = G__20320;
chunk__20242_20313 = G__20321;
count__20243_20314 = G__20322;
i__20244_20315 = G__20323;
continue;
} else {
var temp__5278__auto___20324 = cljs.core.seq(seq__20241_20312);
if(temp__5278__auto___20324){
var seq__20241_20325__$1 = temp__5278__auto___20324;
if(cljs.core.chunked_seq_QMARK_(seq__20241_20325__$1)){
var c__9683__auto___20326 = cljs.core.chunk_first(seq__20241_20325__$1);
var G__20327 = cljs.core.chunk_rest(seq__20241_20325__$1);
var G__20328 = c__9683__auto___20326;
var G__20329 = cljs.core.count(c__9683__auto___20326);
var G__20330 = (0);
seq__20241_20312 = G__20327;
chunk__20242_20313 = G__20328;
count__20243_20314 = G__20329;
i__20244_20315 = G__20330;
continue;
} else {
var vec__20248_20331 = cljs.core.first(seq__20241_20325__$1);
var n_20332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20248_20331,(0),null);
var meth_20333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20248_20331,(1),null);
var c_20334 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_20333));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20333))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_20252,".cljs$core$IFn$_invoke$arity$variadic = ",n_20332,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_20252,".cljs$core$IFn$_invoke$arity$",c_20334," = ",n_20332,";"], 0));
}

var G__20335 = cljs.core.next(seq__20241_20325__$1);
var G__20336 = null;
var G__20337 = (0);
var G__20338 = (0);
seq__20241_20312 = G__20335;
chunk__20242_20313 = G__20336;
count__20243_20314 = G__20337;
i__20244_20315 = G__20338;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",mname_20252,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";})(",cljs.compiler.comma_sep(loop_locals),"))"], 0));
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__20339){
var map__20340 = p__20339;
var map__20340__$1 = ((((!((map__20340 == null)))?((((map__20340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20340):map__20340);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20340__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20340__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20340__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__8740__auto__ = statements;
if(cljs.core.truth_(and__8740__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__8740__auto__;
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var seq__20342_20346 = cljs.core.seq(statements);
var chunk__20343_20347 = null;
var count__20344_20348 = (0);
var i__20345_20349 = (0);
while(true){
if((i__20345_20349 < count__20344_20348)){
var s_20350 = chunk__20343_20347.cljs$core$IIndexed$_nth$arity$2(null,i__20345_20349);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_20350], 0));

var G__20351 = seq__20342_20346;
var G__20352 = chunk__20343_20347;
var G__20353 = count__20344_20348;
var G__20354 = (i__20345_20349 + (1));
seq__20342_20346 = G__20351;
chunk__20343_20347 = G__20352;
count__20344_20348 = G__20353;
i__20345_20349 = G__20354;
continue;
} else {
var temp__5278__auto___20355 = cljs.core.seq(seq__20342_20346);
if(temp__5278__auto___20355){
var seq__20342_20356__$1 = temp__5278__auto___20355;
if(cljs.core.chunked_seq_QMARK_(seq__20342_20356__$1)){
var c__9683__auto___20357 = cljs.core.chunk_first(seq__20342_20356__$1);
var G__20358 = cljs.core.chunk_rest(seq__20342_20356__$1);
var G__20359 = c__9683__auto___20357;
var G__20360 = cljs.core.count(c__9683__auto___20357);
var G__20361 = (0);
seq__20342_20346 = G__20358;
chunk__20343_20347 = G__20359;
count__20344_20348 = G__20360;
i__20345_20349 = G__20361;
continue;
} else {
var s_20362 = cljs.core.first(seq__20342_20356__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_20362], 0));

var G__20363 = cljs.core.next(seq__20342_20356__$1);
var G__20364 = null;
var G__20365 = (0);
var G__20366 = (0);
seq__20342_20346 = G__20363;
chunk__20343_20347 = G__20364;
count__20344_20348 = G__20365;
i__20345_20349 = G__20366;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(cljs.core.truth_((function (){var and__8740__auto__ = statements;
if(cljs.core.truth_(and__8740__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__8740__auto__;
}
})())){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__20367){
var map__20368 = p__20367;
var map__20368__$1 = ((((!((map__20368 == null)))?((((map__20368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20368):map__20368);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20368__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20368__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20368__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20368__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20368__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__8752__auto__ = name;
if(cljs.core.truth_(or__8752__auto__)){
return or__8752__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["try{",try$,"}"], 0));

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}"], 0));
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :constant (:op finally))"].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["finally {",finally$,"}"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([try$], 0));
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__20370,is_loop){
var map__20371 = p__20370;
var map__20371__$1 = ((((!((map__20371 == null)))?((((map__20371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20371.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20371):map__20371);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20371__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20371__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20371__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var _STAR_lexical_renames_STAR_20373_20382 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR_20373_20382,context,map__20371,map__20371__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_20373_20382,context,map__20371,map__20371__$1,bindings,expr,env))
,bindings):null));

try{var seq__20374_20383 = cljs.core.seq(bindings);
var chunk__20375_20384 = null;
var count__20376_20385 = (0);
var i__20377_20386 = (0);
while(true){
if((i__20377_20386 < count__20376_20385)){
var map__20378_20387 = chunk__20375_20384.cljs$core$IIndexed$_nth$arity$2(null,i__20377_20386);
var map__20378_20388__$1 = ((((!((map__20378_20387 == null)))?((((map__20378_20387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20378_20387.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20378_20387):map__20378_20387);
var binding_20389 = map__20378_20388__$1;
var init_20390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20378_20388__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(binding_20389);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",init_20390,";"], 0));

var G__20391 = seq__20374_20383;
var G__20392 = chunk__20375_20384;
var G__20393 = count__20376_20385;
var G__20394 = (i__20377_20386 + (1));
seq__20374_20383 = G__20391;
chunk__20375_20384 = G__20392;
count__20376_20385 = G__20393;
i__20377_20386 = G__20394;
continue;
} else {
var temp__5278__auto___20395 = cljs.core.seq(seq__20374_20383);
if(temp__5278__auto___20395){
var seq__20374_20396__$1 = temp__5278__auto___20395;
if(cljs.core.chunked_seq_QMARK_(seq__20374_20396__$1)){
var c__9683__auto___20397 = cljs.core.chunk_first(seq__20374_20396__$1);
var G__20398 = cljs.core.chunk_rest(seq__20374_20396__$1);
var G__20399 = c__9683__auto___20397;
var G__20400 = cljs.core.count(c__9683__auto___20397);
var G__20401 = (0);
seq__20374_20383 = G__20398;
chunk__20375_20384 = G__20399;
count__20376_20385 = G__20400;
i__20377_20386 = G__20401;
continue;
} else {
var map__20380_20402 = cljs.core.first(seq__20374_20396__$1);
var map__20380_20403__$1 = ((((!((map__20380_20402 == null)))?((((map__20380_20402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20380_20402.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20380_20402):map__20380_20402);
var binding_20404 = map__20380_20403__$1;
var init_20405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20380_20403__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(binding_20404);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",init_20405,";"], 0));

var G__20406 = cljs.core.next(seq__20374_20396__$1);
var G__20407 = null;
var G__20408 = (0);
var G__20409 = (0);
seq__20374_20383 = G__20406;
chunk__20375_20384 = G__20407;
count__20376_20385 = G__20408;
i__20377_20386 = G__20409;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_20373_20382;
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__20410){
var map__20411 = p__20410;
var map__20411__$1 = ((((!((map__20411 == null)))?((((map__20411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20411.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20411):map__20411);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20411__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20411__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20411__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__9795__auto___20413 = cljs.core.count(exprs);
var i_20414 = (0);
while(true){
if((i_20414 < n__9795__auto___20413)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_20414) : temps(i_20414))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_20414) : exprs(i_20414)),";"], 0));

var G__20415 = (i_20414 + (1));
i_20414 = G__20415;
continue;
} else {
}
break;
}

var n__9795__auto___20416 = cljs.core.count(exprs);
var i_20417 = (0);
while(true){
if((i_20417 < n__9795__auto___20416)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_20417) : params(i_20417)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_20417) : temps(i_20417)),";"], 0));

var G__20418 = (i_20417 + (1));
i_20417 = G__20418;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["continue;"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__20419){
var map__20420 = p__20419;
var map__20420__$1 = ((((!((map__20420 == null)))?((((map__20420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20420.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20420):map__20420);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20420__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20420__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20420__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var seq__20422_20430 = cljs.core.seq(bindings);
var chunk__20423_20431 = null;
var count__20424_20432 = (0);
var i__20425_20433 = (0);
while(true){
if((i__20425_20433 < count__20424_20432)){
var map__20426_20434 = chunk__20423_20431.cljs$core$IIndexed$_nth$arity$2(null,i__20425_20433);
var map__20426_20435__$1 = ((((!((map__20426_20434 == null)))?((((map__20426_20434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20426_20434.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20426_20434):map__20426_20434);
var binding_20436 = map__20426_20435__$1;
var init_20437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20426_20435__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_20436)," = ",init_20437,";"], 0));

var G__20438 = seq__20422_20430;
var G__20439 = chunk__20423_20431;
var G__20440 = count__20424_20432;
var G__20441 = (i__20425_20433 + (1));
seq__20422_20430 = G__20438;
chunk__20423_20431 = G__20439;
count__20424_20432 = G__20440;
i__20425_20433 = G__20441;
continue;
} else {
var temp__5278__auto___20442 = cljs.core.seq(seq__20422_20430);
if(temp__5278__auto___20442){
var seq__20422_20443__$1 = temp__5278__auto___20442;
if(cljs.core.chunked_seq_QMARK_(seq__20422_20443__$1)){
var c__9683__auto___20444 = cljs.core.chunk_first(seq__20422_20443__$1);
var G__20445 = cljs.core.chunk_rest(seq__20422_20443__$1);
var G__20446 = c__9683__auto___20444;
var G__20447 = cljs.core.count(c__9683__auto___20444);
var G__20448 = (0);
seq__20422_20430 = G__20445;
chunk__20423_20431 = G__20446;
count__20424_20432 = G__20447;
i__20425_20433 = G__20448;
continue;
} else {
var map__20428_20449 = cljs.core.first(seq__20422_20443__$1);
var map__20428_20450__$1 = ((((!((map__20428_20449 == null)))?((((map__20428_20449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20428_20449.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20428_20449):map__20428_20449);
var binding_20451 = map__20428_20450__$1;
var init_20452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20428_20450__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_20451)," = ",init_20452,";"], 0));

var G__20453 = cljs.core.next(seq__20422_20443__$1);
var G__20454 = null;
var G__20455 = (0);
var G__20456 = (0);
seq__20422_20430 = G__20453;
chunk__20423_20431 = G__20454;
count__20424_20432 = G__20455;
i__20425_20433 = G__20456;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__20459){
var map__20460 = p__20459;
var map__20460__$1 = ((((!((map__20460 == null)))?((((map__20460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20460.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20460):map__20460);
var expr = map__20460__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20460__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20460__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20460__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__8740__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__8740__auto__){
var and__8740__auto____$1 = cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__8740__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__8740__auto____$1;
}
} else {
return and__8740__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__8740__auto__ = protocol;
if(cljs.core.truth_(and__8740__auto__)){
var and__8740__auto____$1 = tag;
if(cljs.core.truth_(and__8740__auto____$1)){
var or__8752__auto__ = (function (){var and__8740__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__8740__auto____$2){
var and__8740__auto____$3 = protocol;
if(cljs.core.truth_(and__8740__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__8740__auto____$3;
}
} else {
return and__8740__auto____$2;
}
})();
if(cljs.core.truth_(or__8752__auto__)){
return or__8752__auto__;
} else {
var and__8740__auto____$2 = (function (){var or__8752__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__8752__auto____$1){
return or__8752__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__8740__auto____$2)){
var or__8752__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__8752__auto____$1){
return or__8752__auto____$1;
} else {
var and__8740__auto____$3 = !(cljs.core.set_QMARK_(tag));
if(and__8740__auto____$3){
var and__8740__auto____$4 = cljs.core.not((function (){var fexpr__20470 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"js","js",-886355190,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null);
return (fexpr__20470.cljs$core$IFn$_invoke$arity$1 ? fexpr__20470.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__20470(tag));
})());
if(and__8740__auto____$4){
var temp__5278__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,tag));
if(cljs.core.truth_(temp__5278__auto__)){
var ps = temp__5278__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps(protocol));
} else {
return null;
}
} else {
return and__8740__auto____$4;
}
} else {
return and__8740__auto____$3;
}
}
} else {
return and__8740__auto____$2;
}
}
} else {
return and__8740__auto____$1;
}
} else {
return and__8740__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__8752__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__8752__auto__){
return or__8752__auto__;
} else {
var or__8752__auto____$1 = (function (){var temp__5278__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__5278__auto__)){
var ns_str = temp__5278__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__8752__auto____$1)){
return or__8752__auto____$1;
} else {
return !(cljs.core.contains_QMARK_(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag(env,f))) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)));
var vec__20462 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__8740__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__8740__auto__)){
return (arity > mfa);
} else {
return and__8740__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20460,map__20460__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20460,map__20460__$1,expr,f,args,env){
return (function (p1__20457_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20457_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20460,map__20460__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20460,map__20460__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20460,map__20460__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20460,map__20460__$1,expr,f,args,env){
return (function (p1__20458_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20458_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20460,map__20460__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20460,map__20460__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20462,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20462,(1),null);
var env__19557__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["!(",cljs.core.first(args),")"], 0));
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_20471 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(args),".",pimpl_20471,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_20472 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_20472,args)),(((mfa_20472 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_20472,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__8752__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__8752__auto__)){
return or__8752__auto__;
} else {
var or__8752__auto____$1 = js_QMARK_;
if(or__8752__auto____$1){
return or__8752__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797)))){
var fprop_20473 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",f__$1,fprop_20473," ? ",f__$1,fprop_20473,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",f__$1,fprop_20473," ? ",f__$1,fprop_20473,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")"], 0));
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__20474){
var map__20475 = p__20474;
var map__20475__$1 = ((((!((map__20475 == null)))?((((map__20475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20475):map__20475);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20475__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20475__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20475__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19557__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(new ",ctor,"(",cljs.compiler.comma_sep(args),"))"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__20477){
var map__20478 = p__20477;
var map__20478__$1 = ((((!((map__20478 == null)))?((((map__20478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20478):map__20478);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20478__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20478__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20478__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19557__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target," = ",val], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__20480 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__20480__$1 = ((((!((map__20480 == null)))?((((map__20480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20480.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20480):map__20480);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20480__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20480__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__20481 = options;
var map__20481__$1 = ((((!((map__20481 == null)))?((((map__20481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20481.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20481):map__20481);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20481__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20481__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__20482 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__20488 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__20488__$1 = ((((!((map__20488 == null)))?((((map__20488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20488):map__20488);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20488__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20488__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20482,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20482,(1),null);
var map__20485 = cljs.core.group_by(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
var map__20485__$1 = ((((!((map__20485 == null)))?((((map__20485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20485.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20485):map__20485);
var global_exports_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20485__$1,true);
var libs_to_load__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20485__$1,false);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);"], 0));
} else {
}

var seq__20491_20507 = cljs.core.seq(libs_to_load__$1);
var chunk__20492_20508 = null;
var count__20493_20509 = (0);
var i__20494_20510 = (0);
while(true){
if((i__20494_20510 < count__20493_20509)){
var lib_20511 = chunk__20492_20508.cljs$core$IIndexed$_nth$arity$2(null,i__20494_20510);
if((cljs.analyzer.foreign_dep_QMARK_(lib_20511)) && (!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__8752__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__8752__auto__)){
return or__8752__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_20511),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_20511),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__8752__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__8752__auto__)){
return or__8752__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_20511),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_20511),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_20511),"');"], 0));

}
}
}

var G__20512 = seq__20491_20507;
var G__20513 = chunk__20492_20508;
var G__20514 = count__20493_20509;
var G__20515 = (i__20494_20510 + (1));
seq__20491_20507 = G__20512;
chunk__20492_20508 = G__20513;
count__20493_20509 = G__20514;
i__20494_20510 = G__20515;
continue;
} else {
var temp__5278__auto___20516 = cljs.core.seq(seq__20491_20507);
if(temp__5278__auto___20516){
var seq__20491_20517__$1 = temp__5278__auto___20516;
if(cljs.core.chunked_seq_QMARK_(seq__20491_20517__$1)){
var c__9683__auto___20518 = cljs.core.chunk_first(seq__20491_20517__$1);
var G__20519 = cljs.core.chunk_rest(seq__20491_20517__$1);
var G__20520 = c__9683__auto___20518;
var G__20521 = cljs.core.count(c__9683__auto___20518);
var G__20522 = (0);
seq__20491_20507 = G__20519;
chunk__20492_20508 = G__20520;
count__20493_20509 = G__20521;
i__20494_20510 = G__20522;
continue;
} else {
var lib_20523 = cljs.core.first(seq__20491_20517__$1);
if((cljs.analyzer.foreign_dep_QMARK_(lib_20523)) && (!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__8752__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__8752__auto__)){
return or__8752__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_20523),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_20523),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__8752__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__8752__auto__)){
return or__8752__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_20523),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_20523),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_20523),"');"], 0));

}
}
}

var G__20524 = cljs.core.next(seq__20491_20517__$1);
var G__20525 = null;
var G__20526 = (0);
var G__20527 = (0);
seq__20491_20507 = G__20524;
chunk__20492_20508 = G__20525;
count__20493_20509 = G__20526;
i__20494_20510 = G__20527;
continue;
}
} else {
}
}
break;
}

var seq__20495_20528 = cljs.core.seq(node_libs);
var chunk__20496_20529 = null;
var count__20497_20530 = (0);
var i__20498_20531 = (0);
while(true){
if((i__20498_20531 < count__20497_20530)){
var lib_20532 = chunk__20496_20529.cljs$core$IIndexed$_nth$arity$2(null,i__20498_20531);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_20532)," = require('",lib_20532,"');"], 0));

var G__20533 = seq__20495_20528;
var G__20534 = chunk__20496_20529;
var G__20535 = count__20497_20530;
var G__20536 = (i__20498_20531 + (1));
seq__20495_20528 = G__20533;
chunk__20496_20529 = G__20534;
count__20497_20530 = G__20535;
i__20498_20531 = G__20536;
continue;
} else {
var temp__5278__auto___20537 = cljs.core.seq(seq__20495_20528);
if(temp__5278__auto___20537){
var seq__20495_20538__$1 = temp__5278__auto___20537;
if(cljs.core.chunked_seq_QMARK_(seq__20495_20538__$1)){
var c__9683__auto___20539 = cljs.core.chunk_first(seq__20495_20538__$1);
var G__20540 = cljs.core.chunk_rest(seq__20495_20538__$1);
var G__20541 = c__9683__auto___20539;
var G__20542 = cljs.core.count(c__9683__auto___20539);
var G__20543 = (0);
seq__20495_20528 = G__20540;
chunk__20496_20529 = G__20541;
count__20497_20530 = G__20542;
i__20498_20531 = G__20543;
continue;
} else {
var lib_20544 = cljs.core.first(seq__20495_20538__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_20544)," = require('",lib_20544,"');"], 0));

var G__20545 = cljs.core.next(seq__20495_20538__$1);
var G__20546 = null;
var G__20547 = (0);
var G__20548 = (0);
seq__20495_20528 = G__20545;
chunk__20496_20529 = G__20546;
count__20497_20530 = G__20547;
i__20498_20531 = G__20548;
continue;
}
} else {
}
}
break;
}

var seq__20499_20549 = cljs.core.seq(global_exports_libs);
var chunk__20500_20550 = null;
var count__20501_20551 = (0);
var i__20502_20552 = (0);
while(true){
if((i__20502_20552 < count__20501_20551)){
var lib_20553 = chunk__20500_20550.cljs$core$IIndexed$_nth$arity$2(null,i__20502_20552);
var map__20503_20554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_20553));
var map__20503_20555__$1 = ((((!((map__20503_20554 == null)))?((((map__20503_20554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20503_20554.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20503_20554):map__20503_20554);
var global_exports_20556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20503_20555__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib_20553)," = goog.global.",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_20556,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib_20553)),";"], 0));

var G__20557 = seq__20499_20549;
var G__20558 = chunk__20500_20550;
var G__20559 = count__20501_20551;
var G__20560 = (i__20502_20552 + (1));
seq__20499_20549 = G__20557;
chunk__20500_20550 = G__20558;
count__20501_20551 = G__20559;
i__20502_20552 = G__20560;
continue;
} else {
var temp__5278__auto___20561 = cljs.core.seq(seq__20499_20549);
if(temp__5278__auto___20561){
var seq__20499_20562__$1 = temp__5278__auto___20561;
if(cljs.core.chunked_seq_QMARK_(seq__20499_20562__$1)){
var c__9683__auto___20563 = cljs.core.chunk_first(seq__20499_20562__$1);
var G__20564 = cljs.core.chunk_rest(seq__20499_20562__$1);
var G__20565 = c__9683__auto___20563;
var G__20566 = cljs.core.count(c__9683__auto___20563);
var G__20567 = (0);
seq__20499_20549 = G__20564;
chunk__20500_20550 = G__20565;
count__20501_20551 = G__20566;
i__20502_20552 = G__20567;
continue;
} else {
var lib_20568 = cljs.core.first(seq__20499_20562__$1);
var map__20505_20569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_20568));
var map__20505_20570__$1 = ((((!((map__20505_20569 == null)))?((((map__20505_20569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20505_20569.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20505_20569):map__20505_20569);
var global_exports_20571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20505_20570__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib_20568)," = goog.global.",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_20571,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib_20568)),";"], 0));

var G__20572 = cljs.core.next(seq__20499_20562__$1);
var G__20573 = null;
var G__20574 = (0);
var G__20575 = (0);
seq__20499_20549 = G__20572;
chunk__20500_20550 = G__20573;
count__20501_20551 = G__20574;
i__20502_20552 = G__20575;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__20576){
var map__20577 = p__20576;
var map__20577__$1 = ((((!((map__20577 == null)))?((((map__20577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20577.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20577):map__20577);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20577__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20577__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20577__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20577__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20577__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20577__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20577__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["null;"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__20579){
var map__20580 = p__20579;
var map__20580__$1 = ((((!((map__20580 == null)))?((((map__20580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20580.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20580):map__20580);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20580__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20580__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20580__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20580__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20580__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20580__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20580__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('cljs.core');"], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');"], 0));
} else {
}
}

cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__20582){
var map__20583 = p__20582;
var map__20583__$1 = ((((!((map__20583 == null)))?((((map__20583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20583):map__20583);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20583__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20583__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20583__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20583__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20583__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["* @constructor"], 0));

var seq__20585_20603 = cljs.core.seq(protocols);
var chunk__20586_20604 = null;
var count__20587_20605 = (0);
var i__20588_20606 = (0);
while(true){
if((i__20588_20606 < count__20587_20605)){
var protocol_20607 = chunk__20586_20604.cljs$core$IIndexed$_nth$arity$2(null,i__20588_20606);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_20607)].join('')),"}"], 0));

var G__20608 = seq__20585_20603;
var G__20609 = chunk__20586_20604;
var G__20610 = count__20587_20605;
var G__20611 = (i__20588_20606 + (1));
seq__20585_20603 = G__20608;
chunk__20586_20604 = G__20609;
count__20587_20605 = G__20610;
i__20588_20606 = G__20611;
continue;
} else {
var temp__5278__auto___20612 = cljs.core.seq(seq__20585_20603);
if(temp__5278__auto___20612){
var seq__20585_20613__$1 = temp__5278__auto___20612;
if(cljs.core.chunked_seq_QMARK_(seq__20585_20613__$1)){
var c__9683__auto___20614 = cljs.core.chunk_first(seq__20585_20613__$1);
var G__20615 = cljs.core.chunk_rest(seq__20585_20613__$1);
var G__20616 = c__9683__auto___20614;
var G__20617 = cljs.core.count(c__9683__auto___20614);
var G__20618 = (0);
seq__20585_20603 = G__20615;
chunk__20586_20604 = G__20616;
count__20587_20605 = G__20617;
i__20588_20606 = G__20618;
continue;
} else {
var protocol_20619 = cljs.core.first(seq__20585_20613__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_20619)].join('')),"}"], 0));

var G__20620 = cljs.core.next(seq__20585_20613__$1);
var G__20621 = null;
var G__20622 = (0);
var G__20623 = (0);
seq__20585_20603 = G__20620;
chunk__20586_20604 = G__20621;
count__20587_20605 = G__20622;
i__20588_20606 = G__20623;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__20589_20624 = cljs.core.seq(fields__$1);
var chunk__20590_20625 = null;
var count__20591_20626 = (0);
var i__20592_20627 = (0);
while(true){
if((i__20592_20627 < count__20591_20626)){
var fld_20628 = chunk__20590_20625.cljs$core$IIndexed$_nth$arity$2(null,i__20592_20627);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_20628," = ",fld_20628,";"], 0));

var G__20629 = seq__20589_20624;
var G__20630 = chunk__20590_20625;
var G__20631 = count__20591_20626;
var G__20632 = (i__20592_20627 + (1));
seq__20589_20624 = G__20629;
chunk__20590_20625 = G__20630;
count__20591_20626 = G__20631;
i__20592_20627 = G__20632;
continue;
} else {
var temp__5278__auto___20633 = cljs.core.seq(seq__20589_20624);
if(temp__5278__auto___20633){
var seq__20589_20634__$1 = temp__5278__auto___20633;
if(cljs.core.chunked_seq_QMARK_(seq__20589_20634__$1)){
var c__9683__auto___20635 = cljs.core.chunk_first(seq__20589_20634__$1);
var G__20636 = cljs.core.chunk_rest(seq__20589_20634__$1);
var G__20637 = c__9683__auto___20635;
var G__20638 = cljs.core.count(c__9683__auto___20635);
var G__20639 = (0);
seq__20589_20624 = G__20636;
chunk__20590_20625 = G__20637;
count__20591_20626 = G__20638;
i__20592_20627 = G__20639;
continue;
} else {
var fld_20640 = cljs.core.first(seq__20589_20634__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_20640," = ",fld_20640,";"], 0));

var G__20641 = cljs.core.next(seq__20589_20634__$1);
var G__20642 = null;
var G__20643 = (0);
var G__20644 = (0);
seq__20589_20624 = G__20641;
chunk__20590_20625 = G__20642;
count__20591_20626 = G__20643;
i__20592_20627 = G__20644;
continue;
}
} else {
}
}
break;
}

var seq__20593_20645 = cljs.core.seq(pmasks);
var chunk__20594_20646 = null;
var count__20595_20647 = (0);
var i__20596_20648 = (0);
while(true){
if((i__20596_20648 < count__20595_20647)){
var vec__20597_20649 = chunk__20594_20646.cljs$core$IIndexed$_nth$arity$2(null,i__20596_20648);
var pno_20650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20597_20649,(0),null);
var pmask_20651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20597_20649,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_20650,"$ = ",pmask_20651,";"], 0));

var G__20652 = seq__20593_20645;
var G__20653 = chunk__20594_20646;
var G__20654 = count__20595_20647;
var G__20655 = (i__20596_20648 + (1));
seq__20593_20645 = G__20652;
chunk__20594_20646 = G__20653;
count__20595_20647 = G__20654;
i__20596_20648 = G__20655;
continue;
} else {
var temp__5278__auto___20656 = cljs.core.seq(seq__20593_20645);
if(temp__5278__auto___20656){
var seq__20593_20657__$1 = temp__5278__auto___20656;
if(cljs.core.chunked_seq_QMARK_(seq__20593_20657__$1)){
var c__9683__auto___20658 = cljs.core.chunk_first(seq__20593_20657__$1);
var G__20659 = cljs.core.chunk_rest(seq__20593_20657__$1);
var G__20660 = c__9683__auto___20658;
var G__20661 = cljs.core.count(c__9683__auto___20658);
var G__20662 = (0);
seq__20593_20645 = G__20659;
chunk__20594_20646 = G__20660;
count__20595_20647 = G__20661;
i__20596_20648 = G__20662;
continue;
} else {
var vec__20600_20663 = cljs.core.first(seq__20593_20657__$1);
var pno_20664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20600_20663,(0),null);
var pmask_20665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20600_20663,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_20664,"$ = ",pmask_20665,";"], 0));

var G__20666 = cljs.core.next(seq__20593_20657__$1);
var G__20667 = null;
var G__20668 = (0);
var G__20669 = (0);
seq__20593_20645 = G__20666;
chunk__20594_20646 = G__20667;
count__20595_20647 = G__20668;
i__20596_20648 = G__20669;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["});"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__20670){
var map__20671 = p__20670;
var map__20671__$1 = ((((!((map__20671 == null)))?((((map__20671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20671.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20671):map__20671);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20671__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20671__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20671__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20671__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20671__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["* @constructor"], 0));

var seq__20673_20691 = cljs.core.seq(protocols);
var chunk__20674_20692 = null;
var count__20675_20693 = (0);
var i__20676_20694 = (0);
while(true){
if((i__20676_20694 < count__20675_20693)){
var protocol_20695 = chunk__20674_20692.cljs$core$IIndexed$_nth$arity$2(null,i__20676_20694);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_20695)].join('')),"}"], 0));

var G__20696 = seq__20673_20691;
var G__20697 = chunk__20674_20692;
var G__20698 = count__20675_20693;
var G__20699 = (i__20676_20694 + (1));
seq__20673_20691 = G__20696;
chunk__20674_20692 = G__20697;
count__20675_20693 = G__20698;
i__20676_20694 = G__20699;
continue;
} else {
var temp__5278__auto___20700 = cljs.core.seq(seq__20673_20691);
if(temp__5278__auto___20700){
var seq__20673_20701__$1 = temp__5278__auto___20700;
if(cljs.core.chunked_seq_QMARK_(seq__20673_20701__$1)){
var c__9683__auto___20702 = cljs.core.chunk_first(seq__20673_20701__$1);
var G__20703 = cljs.core.chunk_rest(seq__20673_20701__$1);
var G__20704 = c__9683__auto___20702;
var G__20705 = cljs.core.count(c__9683__auto___20702);
var G__20706 = (0);
seq__20673_20691 = G__20703;
chunk__20674_20692 = G__20704;
count__20675_20693 = G__20705;
i__20676_20694 = G__20706;
continue;
} else {
var protocol_20707 = cljs.core.first(seq__20673_20701__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_20707)].join('')),"}"], 0));

var G__20708 = cljs.core.next(seq__20673_20701__$1);
var G__20709 = null;
var G__20710 = (0);
var G__20711 = (0);
seq__20673_20691 = G__20708;
chunk__20674_20692 = G__20709;
count__20675_20693 = G__20710;
i__20676_20694 = G__20711;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__20677_20712 = cljs.core.seq(fields__$1);
var chunk__20678_20713 = null;
var count__20679_20714 = (0);
var i__20680_20715 = (0);
while(true){
if((i__20680_20715 < count__20679_20714)){
var fld_20716 = chunk__20678_20713.cljs$core$IIndexed$_nth$arity$2(null,i__20680_20715);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_20716," = ",fld_20716,";"], 0));

var G__20717 = seq__20677_20712;
var G__20718 = chunk__20678_20713;
var G__20719 = count__20679_20714;
var G__20720 = (i__20680_20715 + (1));
seq__20677_20712 = G__20717;
chunk__20678_20713 = G__20718;
count__20679_20714 = G__20719;
i__20680_20715 = G__20720;
continue;
} else {
var temp__5278__auto___20721 = cljs.core.seq(seq__20677_20712);
if(temp__5278__auto___20721){
var seq__20677_20722__$1 = temp__5278__auto___20721;
if(cljs.core.chunked_seq_QMARK_(seq__20677_20722__$1)){
var c__9683__auto___20723 = cljs.core.chunk_first(seq__20677_20722__$1);
var G__20724 = cljs.core.chunk_rest(seq__20677_20722__$1);
var G__20725 = c__9683__auto___20723;
var G__20726 = cljs.core.count(c__9683__auto___20723);
var G__20727 = (0);
seq__20677_20712 = G__20724;
chunk__20678_20713 = G__20725;
count__20679_20714 = G__20726;
i__20680_20715 = G__20727;
continue;
} else {
var fld_20728 = cljs.core.first(seq__20677_20722__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_20728," = ",fld_20728,";"], 0));

var G__20729 = cljs.core.next(seq__20677_20722__$1);
var G__20730 = null;
var G__20731 = (0);
var G__20732 = (0);
seq__20677_20712 = G__20729;
chunk__20678_20713 = G__20730;
count__20679_20714 = G__20731;
i__20680_20715 = G__20732;
continue;
}
} else {
}
}
break;
}

var seq__20681_20733 = cljs.core.seq(pmasks);
var chunk__20682_20734 = null;
var count__20683_20735 = (0);
var i__20684_20736 = (0);
while(true){
if((i__20684_20736 < count__20683_20735)){
var vec__20685_20737 = chunk__20682_20734.cljs$core$IIndexed$_nth$arity$2(null,i__20684_20736);
var pno_20738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20685_20737,(0),null);
var pmask_20739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20685_20737,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_20738,"$ = ",pmask_20739,";"], 0));

var G__20740 = seq__20681_20733;
var G__20741 = chunk__20682_20734;
var G__20742 = count__20683_20735;
var G__20743 = (i__20684_20736 + (1));
seq__20681_20733 = G__20740;
chunk__20682_20734 = G__20741;
count__20683_20735 = G__20742;
i__20684_20736 = G__20743;
continue;
} else {
var temp__5278__auto___20744 = cljs.core.seq(seq__20681_20733);
if(temp__5278__auto___20744){
var seq__20681_20745__$1 = temp__5278__auto___20744;
if(cljs.core.chunked_seq_QMARK_(seq__20681_20745__$1)){
var c__9683__auto___20746 = cljs.core.chunk_first(seq__20681_20745__$1);
var G__20747 = cljs.core.chunk_rest(seq__20681_20745__$1);
var G__20748 = c__9683__auto___20746;
var G__20749 = cljs.core.count(c__9683__auto___20746);
var G__20750 = (0);
seq__20681_20733 = G__20747;
chunk__20682_20734 = G__20748;
count__20683_20735 = G__20749;
i__20684_20736 = G__20750;
continue;
} else {
var vec__20688_20751 = cljs.core.first(seq__20681_20745__$1);
var pno_20752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20688_20751,(0),null);
var pmask_20753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20688_20751,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_20752,"$ = ",pmask_20753,";"], 0));

var G__20754 = cljs.core.next(seq__20681_20745__$1);
var G__20755 = null;
var G__20756 = (0);
var G__20757 = (0);
seq__20681_20733 = G__20754;
chunk__20682_20734 = G__20755;
count__20683_20735 = G__20756;
i__20684_20736 = G__20757;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["});"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__20758){
var map__20759 = p__20758;
var map__20759__$1 = ((((!((map__20759 == null)))?((((map__20759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20759.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20759):map__20759);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20759__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20759__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20759__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20759__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20759__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19557__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY)], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__20761){
var map__20762 = p__20761;
var map__20762__$1 = ((((!((map__20762 == null)))?((((map__20762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20762.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20762):map__20762);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20762__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20762__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20762__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20762__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20762__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__8740__auto__ = code;
if(cljs.core.truth_(and__8740__auto__)){
var G__20764 = clojure.string.trim(code);
var G__20765 = "/*";
return goog.string.startsWith(G__20764,G__20765);
} else {
return and__8740__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code], 0));
} else {
var env__19557__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19557__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"cache-key","cache-key",-565448732),new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445),new cljs.core.Keyword(null,"language-out","language-out",334619882)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('cljs.core');"], 0));

var seq__20769 = cljs.core.seq(table);
var chunk__20770 = null;
var count__20771 = (0);
var i__20772 = (0);
while(true){
if((i__20772 < count__20771)){
var vec__20773 = chunk__20770.cljs$core$IIndexed$_nth$arity$2(null,i__20772);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20773,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20773,(1),null);
var ns_20779 = cljs.core.namespace(sym);
var name_20780 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";\n"], 0));

var G__20781 = seq__20769;
var G__20782 = chunk__20770;
var G__20783 = count__20771;
var G__20784 = (i__20772 + (1));
seq__20769 = G__20781;
chunk__20770 = G__20782;
count__20771 = G__20783;
i__20772 = G__20784;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__20769);
if(temp__5278__auto__){
var seq__20769__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20769__$1)){
var c__9683__auto__ = cljs.core.chunk_first(seq__20769__$1);
var G__20785 = cljs.core.chunk_rest(seq__20769__$1);
var G__20786 = c__9683__auto__;
var G__20787 = cljs.core.count(c__9683__auto__);
var G__20788 = (0);
seq__20769 = G__20785;
chunk__20770 = G__20786;
count__20771 = G__20787;
i__20772 = G__20788;
continue;
} else {
var vec__20776 = cljs.core.first(seq__20769__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20776,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20776,(1),null);
var ns_20789 = cljs.core.namespace(sym);
var name_20790 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";\n"], 0));

var G__20791 = cljs.core.next(seq__20769__$1);
var G__20792 = null;
var G__20793 = (0);
var G__20794 = (0);
seq__20769 = G__20791;
chunk__20770 = G__20792;
count__20771 = G__20793;
i__20772 = G__20794;
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
var G__20796 = arguments.length;
switch (G__20796) {
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
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_20801 = cljs.core.first(ks);
var vec__20797_20802 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_20801);
var top_20803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20797_20802,(0),null);
var prefix_SINGLEQUOTE__20804 = vec__20797_20802;
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_20801)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__20804) == null))){
if(!((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_20803)) || (cljs.core.contains_QMARK_(known_externs,top_20803)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__20804)),";"], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_20803);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__20804)),";"], 0));
}
} else {
}

var m_20805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_20801);
if(cljs.core.empty_QMARK_(m_20805)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__20804,m_20805,top_level,known_externs);
}

var G__20806 = cljs.core.next(ks);
ks = G__20806;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;

