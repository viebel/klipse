// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants false}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),/\./));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_first_ns_segment,cljs.core.keys(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__21556 = s;
var map__21556__$1 = ((((!((map__21556 == null)))?((((map__21556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21556.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21556):map__21556);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21556__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21556__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__21559 = info;
var map__21560 = G__21559;
var map__21560__$1 = ((((!((map__21560 == null)))?((((map__21560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21560):map__21560);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21560__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__21559__$1 = G__21559;
while(true){
var d__$2 = d__$1;
var map__21562 = G__21559__$1;
var map__21562__$1 = ((((!((map__21562 == null)))?((((map__21562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21562.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21562):map__21562);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21562__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__21569 = (d__$2 + (1));
var G__21570 = shadow__$1;
d__$1 = G__21569;
G__21559__$1 = G__21570;
continue;
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')]),cljs.compiler.ns_first_segments()))){
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__21572){
var map__21580 = p__21572;
var map__21580__$1 = ((((!((map__21580 == null)))?((((map__21580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21580.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21580):map__21580);
var name_var = map__21580__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21580__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21580__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__21582 = info;
var map__21582__$1 = ((((!((map__21582 == null)))?((((map__21582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21582.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21582):map__21582);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21582__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21582__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__21584 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__21584) : cljs.compiler.munge.call(null,G__21584));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args21585 = [];
var len__10660__auto___21588 = arguments.length;
var i__10661__auto___21589 = (0);
while(true){
if((i__10661__auto___21589 < len__10660__auto___21588)){
args21585.push((arguments[i__10661__auto___21589]));

var G__21590 = (i__10661__auto___21589 + (1));
i__10661__auto___21589 = G__21590;
continue;
} else {
}
break;
}

var G__21587 = args21585.length;
switch (G__21587) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21585.length)].join('')));

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
var name__$1 = ((field === true)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("self__."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
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
var G__21598 = cp;
switch (G__21598) {
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\u"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__21606_21610 = cljs.core.seq(s);
var chunk__21607_21611 = null;
var count__21608_21612 = (0);
var i__21609_21613 = (0);
while(true){
if((i__21609_21613 < count__21608_21612)){
var c_21614 = chunk__21607_21611.cljs$core$IIndexed$_nth$arity$2(null,i__21609_21613);
sb.append(cljs.compiler.escape_char(c_21614));

var G__21619 = seq__21606_21610;
var G__21620 = chunk__21607_21611;
var G__21621 = count__21608_21612;
var G__21622 = (i__21609_21613 + (1));
seq__21606_21610 = G__21619;
chunk__21607_21611 = G__21620;
count__21608_21612 = G__21621;
i__21609_21613 = G__21622;
continue;
} else {
var temp__6738__auto___21623 = cljs.core.seq(seq__21606_21610);
if(temp__6738__auto___21623){
var seq__21606_21624__$1 = temp__6738__auto___21623;
if(cljs.core.chunked_seq_QMARK_(seq__21606_21624__$1)){
var c__10350__auto___21625 = cljs.core.chunk_first(seq__21606_21624__$1);
var G__21626 = cljs.core.chunk_rest(seq__21606_21624__$1);
var G__21627 = c__10350__auto___21625;
var G__21628 = cljs.core.count(c__10350__auto___21625);
var G__21629 = (0);
seq__21606_21610 = G__21626;
chunk__21607_21611 = G__21627;
count__21608_21612 = G__21628;
i__21609_21613 = G__21629;
continue;
} else {
var c_21630 = cljs.core.first(seq__21606_21624__$1);
sb.append(cljs.compiler.escape_char(c_21630));

var G__21631 = cljs.core.next(seq__21606_21624__$1);
var G__21632 = null;
var G__21633 = (0);
var G__21634 = (0);
seq__21606_21610 = G__21631;
chunk__21607_21611 = G__21632;
count__21608_21612 = G__21633;
i__21609_21613 = G__21634;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__10470__auto__ = (function (){var G__21635 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21635) : cljs.core.atom.call(null,G__21635));
})();
var prefer_table__10471__auto__ = (function (){var G__21636 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21636) : cljs.core.atom.call(null,G__21636));
})();
var method_cache__10472__auto__ = (function (){var G__21637 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21637) : cljs.core.atom.call(null,G__21637));
})();
var cached_hierarchy__10473__auto__ = (function (){var G__21638 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21638) : cljs.core.atom.call(null,G__21638));
})();
var hierarchy__10474__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__10474__auto__,method_table__10470__auto__,prefer_table__10471__auto__,method_cache__10472__auto__,cached_hierarchy__10473__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__18561__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__18561__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__21651_21657 = ast;
var map__21651_21658__$1 = ((((!((map__21651_21657 == null)))?((((map__21651_21657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21651_21657.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21651_21657):map__21651_21657);
var env_21659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21651_21658__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_21659))){
var map__21653_21660 = env_21659;
var map__21653_21661__$1 = ((((!((map__21653_21660 == null)))?((((map__21653_21660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21653_21660.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21653_21660):map__21653_21660);
var line_21662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21653_21661__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21653_21661__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__21653_21660,map__21653_21661__$1,line_21662,column_21663,map__21651_21657,map__21651_21658__$1,env_21659,val__18561__auto__){
return (function (m){
var minfo = (function (){var G__21656 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21656,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__21656;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_21662 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__21653_21660,map__21653_21661__$1,line_21662,column_21663,map__21651_21657,map__21651_21658__$1,env_21659,val__18561__auto__){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_21663)?(column_21663 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__21653_21660,map__21653_21661__$1,line_21662,column_21663,map__21651_21657,map__21651_21658__$1,env_21659,val__18561__auto__){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__21653_21660,map__21653_21661__$1,line_21662,column_21663,map__21651_21657,map__21651_21658__$1,env_21659,val__18561__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__21653_21660,map__21653_21661__$1,line_21662,column_21663,map__21651_21657,map__21651_21658__$1,env_21659,val__18561__auto__))
,cljs.core.sorted_map()));
});})(map__21653_21660,map__21653_21661__$1,line_21662,column_21663,map__21651_21657,map__21651_21658__$1,env_21659,val__18561__auto__))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
}finally {if((val__18561__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__10667__auto__ = [];
var len__10660__auto___21673 = arguments.length;
var i__10661__auto___21674 = (0);
while(true){
if((i__10661__auto___21674 < len__10660__auto___21673)){
args__10667__auto__.push((arguments[i__10661__auto___21674]));

var G__21675 = (i__10661__auto___21674 + (1));
i__10661__auto___21674 = G__21675;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__21666_21676 = cljs.core.seq(xs);
var chunk__21667_21677 = null;
var count__21668_21678 = (0);
var i__21669_21679 = (0);
while(true){
if((i__21669_21679 < count__21668_21678)){
var x_21680 = chunk__21667_21677.cljs$core$IIndexed$_nth$arity$2(null,i__21669_21679);
if((x_21680 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_21680)){
cljs.compiler.emit(x_21680);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_21680)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_21680);
} else {
if(goog.isFunction(x_21680)){
(x_21680.cljs$core$IFn$_invoke$arity$0 ? x_21680.cljs$core$IFn$_invoke$arity$0() : x_21680.call(null));
} else {
var s_21681 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x_21680], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__21666_21676,chunk__21667_21677,count__21668_21678,i__21669_21679,s_21681,x_21680){
return (function (p1__21664_SHARP_){
return (p1__21664_SHARP_ + cljs.core.count(s_21681));
});})(seq__21666_21676,chunk__21667_21677,count__21668_21678,i__21669_21679,s_21681,x_21680))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_21681], 0));

}
}
}
}

var G__21685 = seq__21666_21676;
var G__21686 = chunk__21667_21677;
var G__21687 = count__21668_21678;
var G__21688 = (i__21669_21679 + (1));
seq__21666_21676 = G__21685;
chunk__21667_21677 = G__21686;
count__21668_21678 = G__21687;
i__21669_21679 = G__21688;
continue;
} else {
var temp__6738__auto___21689 = cljs.core.seq(seq__21666_21676);
if(temp__6738__auto___21689){
var seq__21666_21690__$1 = temp__6738__auto___21689;
if(cljs.core.chunked_seq_QMARK_(seq__21666_21690__$1)){
var c__10350__auto___21691 = cljs.core.chunk_first(seq__21666_21690__$1);
var G__21692 = cljs.core.chunk_rest(seq__21666_21690__$1);
var G__21693 = c__10350__auto___21691;
var G__21694 = cljs.core.count(c__10350__auto___21691);
var G__21695 = (0);
seq__21666_21676 = G__21692;
chunk__21667_21677 = G__21693;
count__21668_21678 = G__21694;
i__21669_21679 = G__21695;
continue;
} else {
var x_21696 = cljs.core.first(seq__21666_21690__$1);
if((x_21696 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_21696)){
cljs.compiler.emit(x_21696);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_21696)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_21696);
} else {
if(goog.isFunction(x_21696)){
(x_21696.cljs$core$IFn$_invoke$arity$0 ? x_21696.cljs$core$IFn$_invoke$arity$0() : x_21696.call(null));
} else {
var s_21697 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x_21696], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__21666_21676,chunk__21667_21677,count__21668_21678,i__21669_21679,s_21697,x_21696,seq__21666_21690__$1,temp__6738__auto___21689){
return (function (p1__21664_SHARP_){
return (p1__21664_SHARP_ + cljs.core.count(s_21697));
});})(seq__21666_21676,chunk__21667_21677,count__21668_21678,i__21669_21679,s_21697,x_21696,seq__21666_21690__$1,temp__6738__auto___21689))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_21697], 0));

}
}
}
}

var G__21698 = cljs.core.next(seq__21666_21690__$1);
var G__21699 = null;
var G__21700 = (0);
var G__21701 = (0);
seq__21666_21676 = G__21698;
chunk__21667_21677 = G__21699;
count__21668_21678 = G__21700;
i__21669_21679 = G__21701;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq21665){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21665));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__10667__auto__ = [];
var len__10660__auto___21706 = arguments.length;
var i__10661__auto___21707 = (0);
while(true){
if((i__10661__auto___21707 < len__10660__auto___21706)){
args__10667__auto__.push((arguments[i__10661__auto___21707]));

var G__21708 = (i__10661__auto___21707 + (1));
i__10661__auto___21707 = G__21708;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,xs);

cljs.core.println();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__21703){
var map__21704 = p__21703;
var map__21704__$1 = ((((!((map__21704 == null)))?((((map__21704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21704.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21704):map__21704);
var m = map__21704__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21704__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.array_seq([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq21702){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21702));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__10531__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_21711_21713 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_21712_21714 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_21711_21713,_STAR_print_fn_STAR_21712_21714,sb__10531__auto__){
return (function (x__10532__auto__){
return sb__10531__auto__.append(x__10532__auto__);
});})(_STAR_print_newline_STAR_21711_21713,_STAR_print_fn_STAR_21712_21714,sb__10531__auto__))
;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_21712_21714;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_21711_21713;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__10531__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__10470__auto__ = (function (){var G__21715 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21715) : cljs.core.atom.call(null,G__21715));
})();
var prefer_table__10471__auto__ = (function (){var G__21716 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21716) : cljs.core.atom.call(null,G__21716));
})();
var method_cache__10472__auto__ = (function (){var G__21717 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21717) : cljs.core.atom.call(null,G__21717));
})();
var cached_hierarchy__10473__auto__ = (function (){var G__21718 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21718) : cljs.core.atom.call(null,G__21718));
})();
var hierarchy__10474__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__10474__auto__,method_table__10470__auto__,prefer_table__10471__auto__,method_cache__10472__auto__,cached_hierarchy__10473__auto__));
})();
}
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("failed compiling constant: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("; "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(x)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is not a valid ClojureScript constant.")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["null"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",x,")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x))], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(x)?"true":"false")], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(new RegExp(\"\"))"], 0));
} else {
var vec__21727 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21727,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21727,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21727,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pattern], 0));
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Keyword("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__21732_21734 = (cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__21732_21734) : cljs.compiler.emit_constant.call(null,G__21732_21734));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__21733_21735 = cljs.core.hash(kw);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__21733_21735) : cljs.compiler.emit_constant.call(null,G__21733_21735));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Symbol("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(symstr) : cljs.compiler.emit_constant.call(null,symstr));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__21737_21738 = cljs.core.hash(sym);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__21737_21738) : cljs.compiler.emit_constant.call(null,G__21737_21738));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(null) : cljs.compiler.emit_constant.call(null,null));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
});
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))))){
var value = (function (){var G__21741 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__21741) : x.call(null,G__21741));
})();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))))){
var value = (function (){var G__21746 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__21746) : x.call(null,G__21746));
})();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new Date(",date.getTime(),")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__21748){
var map__21749 = p__21748;
var map__21749__$1 = ((((!((map__21749 == null)))?((((map__21749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21749.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21749):map__21749);
var arg = map__21749__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21749__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21749__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21749__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name)], null));
var or__9439__auto__ = js_module_name;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(arg)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__21529__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__21751 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__21751);
} else {
return G__21751;
}
})()], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__21752){
var map__21753 = p__21752;
var map__21753__$1 = ((((!((map__21753 == null)))?((((map__21753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21753):map__21753);
var arg = map__21753__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21753__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21753__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21753__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21753__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__21755 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__21755__$1 = ((((!((map__21755 == null)))?((((map__21755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21755.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21755):map__21755);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21755__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__21529__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__21757){
var map__21758 = p__21757;
var map__21758__$1 = ((((!((map__21758 == null)))?((((map__21758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21758):map__21758);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21758__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21758__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21758__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__21529__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.with_meta(",expr,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_((function (p1__21760_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__21760_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__21762){
var map__21764 = p__21762;
var map__21764__$1 = ((((!((map__21764 == null)))?((((map__21764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21764):map__21764);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21764__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21764__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21764__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__21529__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if((cljs.core.count(keys) === (0))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentArrayMap.EMPTY"], 0));
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_(keys))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"])"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep(keys),"],[",cljs.compiler.comma_sep(vals),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (p__21770){
var map__21771 = p__21770;
var map__21771__$1 = ((((!((map__21771 == null)))?((((map__21771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21771.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21771):map__21771);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21771__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21771__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__21529__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.List.EMPTY"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.list(",cljs.compiler.comma_sep(items),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__21782){
var map__21784 = p__21782;
var map__21784__$1 = ((((!((map__21784 == null)))?((((map__21784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21784.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21784):map__21784);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21784__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21784__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__21529__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentVector.EMPTY"], 0));
} else {
var cnt_21799 = cljs.core.count(items);
if((cnt_21799 < (32))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentVector(null, ",cnt_21799,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep(items),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_((function (p1__21812_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__21812_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count(items)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__21836){
var map__21837 = p__21836;
var map__21837__$1 = ((((!((map__21837 == null)))?((((map__21837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21837.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21837):map__21837);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21837__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21837__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__21529__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashSet.EMPTY"], 0));
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_(items))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"))),"], null), null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep(items),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__21898){
var map__21899 = p__21898;
var map__21899__$1 = ((((!((map__21899 == null)))?((((map__21899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21899.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21899):map__21899);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21899__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21899__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21899__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__21529__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["({"], 0));

var temp__6738__auto___21962 = cljs.core.seq(items);
if(temp__6738__auto___21962){
var items_21963__$1 = temp__6738__auto___21962;
var vec__21909_21965 = items_21963__$1;
var seq__21910_21966 = cljs.core.seq(vec__21909_21965);
var first__21911_21967 = cljs.core.first(seq__21910_21966);
var seq__21910_21968__$1 = cljs.core.next(seq__21910_21966);
var vec__21912_21969 = first__21911_21967;
var k_21970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21912_21969,(0),null);
var v_21971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21912_21969,(1),null);
var r_21972 = seq__21910_21968__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\"",cljs.core.name(k_21970),"\": ",v_21971], 0));

var seq__21918_21991 = cljs.core.seq(r_21972);
var chunk__21919_21992 = null;
var count__21920_21993 = (0);
var i__21921_21994 = (0);
while(true){
if((i__21921_21994 < count__21920_21993)){
var vec__21924_21999 = chunk__21919_21992.cljs$core$IIndexed$_nth$arity$2(null,i__21921_21994);
var k_22000__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21924_21999,(0),null);
var v_22001__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21924_21999,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", \"",cljs.core.name(k_22000__$1),"\": ",v_22001__$1], 0));

var G__22011 = seq__21918_21991;
var G__22012 = chunk__21919_21992;
var G__22013 = count__21920_21993;
var G__22014 = (i__21921_21994 + (1));
seq__21918_21991 = G__22011;
chunk__21919_21992 = G__22012;
count__21920_21993 = G__22013;
i__21921_21994 = G__22014;
continue;
} else {
var temp__6738__auto___22017__$1 = cljs.core.seq(seq__21918_21991);
if(temp__6738__auto___22017__$1){
var seq__21918_22024__$1 = temp__6738__auto___22017__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21918_22024__$1)){
var c__10350__auto___22030 = cljs.core.chunk_first(seq__21918_22024__$1);
var G__22032 = cljs.core.chunk_rest(seq__21918_22024__$1);
var G__22033 = c__10350__auto___22030;
var G__22034 = cljs.core.count(c__10350__auto___22030);
var G__22035 = (0);
seq__21918_21991 = G__22032;
chunk__21919_21992 = G__22033;
count__21920_21993 = G__22034;
i__21921_21994 = G__22035;
continue;
} else {
var vec__21929_22041 = cljs.core.first(seq__21918_22024__$1);
var k_22042__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21929_22041,(0),null);
var v_22043__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21929_22041,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", \"",cljs.core.name(k_22042__$1),"\": ",v_22043__$1], 0));

var G__22052 = cljs.core.next(seq__21918_22024__$1);
var G__22053 = null;
var G__22054 = (0);
var G__22055 = (0);
seq__21918_21991 = G__22052;
chunk__21919_21992 = G__22053;
count__21920_21993 = G__22054;
i__21921_21994 = G__22055;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["[",cljs.compiler.comma_sep(items),"]"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__22069){
var map__22074 = p__22069;
var map__22074__$1 = ((((!((map__22074 == null)))?((((map__22074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22074):map__22074);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22074__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22074__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__21529__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(form) : cljs.compiler.emit_constant.call(null,form));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__22100){
var map__22108 = p__22100;
var map__22108__$1 = ((((!((map__22108 == null)))?((((map__22108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22108.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22108):map__22108);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22108__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22108__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__9427__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__9427__auto__){
var and__9427__auto____$1 = form;
if(cljs.core.truth_(and__9427__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__9427__auto____$1;
}
} else {
return and__9427__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__22126){
var map__22134 = p__22126;
var map__22134__$1 = ((((!((map__22134 == null)))?((((map__22134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22134):map__22134);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22134__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22134__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__9439__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__22167){
var map__22168 = p__22167;
var map__22168__$1 = ((((!((map__22168 == null)))?((((map__22168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22168.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22168):map__22168);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22168__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22168__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22168__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22168__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22168__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__9439__auto__ = unchecked;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then], 0));
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([else$], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(cljs.core.truth_(",test,")){"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(",test,"){"], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then,"} else {"], 0));

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([else$,"}"], 0));
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__22200){
var map__22201 = p__22200;
var map__22201__$1 = ((((!((map__22201 == null)))?((((map__22201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22201):map__22201);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22201__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22201__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22201__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22201__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22201__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function(){"], 0));
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",gs,";"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["switch (",v,") {"], 0));

var seq__22204_22245 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tests,thens)));
var chunk__22205_22246 = null;
var count__22206_22247 = (0);
var i__22207_22248 = (0);
while(true){
if((i__22207_22248 < count__22206_22247)){
var vec__22208_22250 = chunk__22205_22246.cljs$core$IIndexed$_nth$arity$2(null,i__22207_22248);
var ts_22251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22208_22250,(0),null);
var then_22252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22208_22250,(1),null);
var seq__22213_22254 = cljs.core.seq(ts_22251);
var chunk__22214_22255 = null;
var count__22215_22256 = (0);
var i__22216_22257 = (0);
while(true){
if((i__22216_22257 < count__22215_22256)){
var test_22260 = chunk__22214_22255.cljs$core$IIndexed$_nth$arity$2(null,i__22216_22257);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_22260,":"], 0));

var G__22263 = seq__22213_22254;
var G__22264 = chunk__22214_22255;
var G__22265 = count__22215_22256;
var G__22266 = (i__22216_22257 + (1));
seq__22213_22254 = G__22263;
chunk__22214_22255 = G__22264;
count__22215_22256 = G__22265;
i__22216_22257 = G__22266;
continue;
} else {
var temp__6738__auto___22269 = cljs.core.seq(seq__22213_22254);
if(temp__6738__auto___22269){
var seq__22213_22271__$1 = temp__6738__auto___22269;
if(cljs.core.chunked_seq_QMARK_(seq__22213_22271__$1)){
var c__10350__auto___22273 = cljs.core.chunk_first(seq__22213_22271__$1);
var G__22275 = cljs.core.chunk_rest(seq__22213_22271__$1);
var G__22276 = c__10350__auto___22273;
var G__22278 = cljs.core.count(c__10350__auto___22273);
var G__22279 = (0);
seq__22213_22254 = G__22275;
chunk__22214_22255 = G__22276;
count__22215_22256 = G__22278;
i__22216_22257 = G__22279;
continue;
} else {
var test_22280 = cljs.core.first(seq__22213_22271__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_22280,":"], 0));

var G__22281 = cljs.core.next(seq__22213_22271__$1);
var G__22282 = null;
var G__22283 = (0);
var G__22284 = (0);
seq__22213_22254 = G__22281;
chunk__22214_22255 = G__22282;
count__22215_22256 = G__22283;
i__22216_22257 = G__22284;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",then_22252], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then_22252], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

var G__22292 = seq__22204_22245;
var G__22293 = chunk__22205_22246;
var G__22294 = count__22206_22247;
var G__22295 = (i__22207_22248 + (1));
seq__22204_22245 = G__22292;
chunk__22205_22246 = G__22293;
count__22206_22247 = G__22294;
i__22207_22248 = G__22295;
continue;
} else {
var temp__6738__auto___22296 = cljs.core.seq(seq__22204_22245);
if(temp__6738__auto___22296){
var seq__22204_22297__$1 = temp__6738__auto___22296;
if(cljs.core.chunked_seq_QMARK_(seq__22204_22297__$1)){
var c__10350__auto___22300 = cljs.core.chunk_first(seq__22204_22297__$1);
var G__22302 = cljs.core.chunk_rest(seq__22204_22297__$1);
var G__22303 = c__10350__auto___22300;
var G__22304 = cljs.core.count(c__10350__auto___22300);
var G__22305 = (0);
seq__22204_22245 = G__22302;
chunk__22205_22246 = G__22303;
count__22206_22247 = G__22304;
i__22207_22248 = G__22305;
continue;
} else {
var vec__22226_22310 = cljs.core.first(seq__22204_22297__$1);
var ts_22311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22226_22310,(0),null);
var then_22312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22226_22310,(1),null);
var seq__22229_22316 = cljs.core.seq(ts_22311);
var chunk__22230_22317 = null;
var count__22231_22318 = (0);
var i__22232_22319 = (0);
while(true){
if((i__22232_22319 < count__22231_22318)){
var test_22324 = chunk__22230_22317.cljs$core$IIndexed$_nth$arity$2(null,i__22232_22319);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_22324,":"], 0));

var G__22333 = seq__22229_22316;
var G__22334 = chunk__22230_22317;
var G__22335 = count__22231_22318;
var G__22336 = (i__22232_22319 + (1));
seq__22229_22316 = G__22333;
chunk__22230_22317 = G__22334;
count__22231_22318 = G__22335;
i__22232_22319 = G__22336;
continue;
} else {
var temp__6738__auto___22341__$1 = cljs.core.seq(seq__22229_22316);
if(temp__6738__auto___22341__$1){
var seq__22229_22342__$1 = temp__6738__auto___22341__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22229_22342__$1)){
var c__10350__auto___22348 = cljs.core.chunk_first(seq__22229_22342__$1);
var G__22350 = cljs.core.chunk_rest(seq__22229_22342__$1);
var G__22351 = c__10350__auto___22348;
var G__22352 = cljs.core.count(c__10350__auto___22348);
var G__22353 = (0);
seq__22229_22316 = G__22350;
chunk__22230_22317 = G__22351;
count__22231_22318 = G__22352;
i__22232_22319 = G__22353;
continue;
} else {
var test_22356 = cljs.core.first(seq__22229_22342__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_22356,":"], 0));

var G__22363 = cljs.core.next(seq__22229_22342__$1);
var G__22364 = null;
var G__22365 = (0);
var G__22366 = (0);
seq__22229_22316 = G__22363;
chunk__22230_22317 = G__22364;
count__22231_22318 = G__22365;
i__22232_22319 = G__22366;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",then_22312], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then_22312], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

var G__22377 = cljs.core.next(seq__22204_22297__$1);
var G__22378 = null;
var G__22379 = (0);
var G__22380 = (0);
seq__22204_22245 = G__22377;
chunk__22205_22246 = G__22378;
count__22206_22247 = G__22379;
i__22207_22248 = G__22380;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",default$], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([default$], 0));
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",gs,";})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__22392){
var map__22393 = p__22392;
var map__22393__$1 = ((((!((map__22393 == null)))?((((map__22393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22393.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22393):map__22393);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22393__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22393__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function(){throw ",throw$,"})()"], 0));
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["throw ",throw$,";"], 0));
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__22431 = env;
var G__22432 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__22431,G__22432) : cljs.compiler.resolve_type.call(null,G__22431,G__22432));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__22433 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22433,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22433,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (idx,vec__22433,fstr,rstr,ret_t,axstr){
return (function (p1__22408_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__22408_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__22408_SHARP_));
});})(idx,vec__22433,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__22442 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("function("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22442),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__22442;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__22443 = env;
var G__22444 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__22443,G__22444) : cljs.compiler.resolve_type.call(null,G__22443,G__22444));
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=")].join('');
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("{"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ts__$1,xs){
return (function (p1__22485_SHARP_){
return cljs.compiler.resolve_type(env,p1__22485_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__22502 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__22503 = cljs.core.seq(vec__22502);
var first__22504 = cljs.core.first(seq__22503);
var seq__22503__$1 = cljs.core.next(seq__22503);
var p = first__22504;
var first__22504__$1 = cljs.core.first(seq__22503__$1);
var seq__22503__$2 = cljs.core.next(seq__22503__$1);
var ts = first__22504__$1;
var first__22504__$2 = cljs.core.first(seq__22503__$2);
var seq__22503__$3 = cljs.core.next(seq__22503__$2);
var n = first__22504__$2;
var xs = seq__22503__$3;
if(cljs.core.truth_((function (){var and__9427__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p);
if(and__9427__auto__){
var and__9427__auto____$1 = ts;
if(cljs.core.truth_(and__9427__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__9427__auto____$1;
}
} else {
return and__9427__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__22505 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__22506 = cljs.core.seq(vec__22505);
var first__22507 = cljs.core.first(seq__22506);
var seq__22506__$1 = cljs.core.next(seq__22506);
var p = first__22507;
var first__22507__$1 = cljs.core.first(seq__22506__$1);
var seq__22506__$2 = cljs.core.next(seq__22506__$1);
var ts = first__22507__$1;
var xs = seq__22506__$2;
if(cljs.core.truth_((function (){var and__9427__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p);
if(and__9427__auto__){
var and__9427__auto____$1 = ts;
if(cljs.core.truth_(and__9427__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__9427__auto____$1;
}
} else {
return and__9427__auto__;
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
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args22557 = [];
var len__10660__auto___22632 = arguments.length;
var i__10661__auto___22633 = (0);
while(true){
if((i__10661__auto___22633 < len__10660__auto___22632)){
args22557.push((arguments[i__10661__auto___22633]));

var G__22634 = (i__10661__auto___22633 + (1));
i__10661__auto___22633 = G__22634;
continue;
} else {
}
break;
}

var G__22567 = args22557.length;
switch (G__22567) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22557.length)].join('')));

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
var vec__22614 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docs,docs__$1,docs__$2){
return (function (p1__22556_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__22556_SHARP_);
} else {
return p1__22556_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines(e));
var seq__22615 = cljs.core.seq(vec__22614);
var first__22616 = cljs.core.first(seq__22615);
var seq__22615__$1 = cljs.core.next(seq__22615);
var x = first__22616;
var ys = seq__22615__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.replace(x,"*/","* /")], 0));

var seq__22617 = cljs.core.seq(ys);
var chunk__22618 = null;
var count__22619 = (0);
var i__22620 = (0);
while(true){
if((i__22620 < count__22619)){
var next_line = chunk__22618.cljs$core$IIndexed$_nth$arity$2(null,i__22620);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__22656 = seq__22617;
var G__22657 = chunk__22618;
var G__22658 = count__22619;
var G__22659 = (i__22620 + (1));
seq__22617 = G__22656;
chunk__22618 = G__22657;
count__22619 = G__22658;
i__22620 = G__22659;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__22617);
if(temp__6738__auto__){
var seq__22617__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22617__$1)){
var c__10350__auto__ = cljs.core.chunk_first(seq__22617__$1);
var G__22664 = cljs.core.chunk_rest(seq__22617__$1);
var G__22665 = c__10350__auto__;
var G__22666 = cljs.core.count(c__10350__auto__);
var G__22667 = (0);
seq__22617 = G__22664;
chunk__22618 = G__22665;
count__22619 = G__22666;
i__22620 = G__22667;
continue;
} else {
var next_line = cljs.core.first(seq__22617__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__22668 = cljs.core.next(seq__22617__$1);
var G__22669 = null;
var G__22670 = (0);
var G__22671 = (0);
seq__22617 = G__22668;
chunk__22618 = G__22669;
count__22619 = G__22670;
i__22620 = G__22671;
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
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

var seq__22624_22681 = cljs.core.seq(docs__$2);
var chunk__22625_22682 = null;
var count__22626_22683 = (0);
var i__22627_22684 = (0);
while(true){
if((i__22627_22684 < count__22626_22683)){
var e_22685 = chunk__22625_22682.cljs$core$IIndexed$_nth$arity$2(null,i__22627_22684);
if(cljs.core.truth_(e_22685)){
print_comment_lines(e_22685);
} else {
}

var G__22686 = seq__22624_22681;
var G__22687 = chunk__22625_22682;
var G__22688 = count__22626_22683;
var G__22689 = (i__22627_22684 + (1));
seq__22624_22681 = G__22686;
chunk__22625_22682 = G__22687;
count__22626_22683 = G__22688;
i__22627_22684 = G__22689;
continue;
} else {
var temp__6738__auto___22695 = cljs.core.seq(seq__22624_22681);
if(temp__6738__auto___22695){
var seq__22624_22696__$1 = temp__6738__auto___22695;
if(cljs.core.chunked_seq_QMARK_(seq__22624_22696__$1)){
var c__10350__auto___22697 = cljs.core.chunk_first(seq__22624_22696__$1);
var G__22698 = cljs.core.chunk_rest(seq__22624_22696__$1);
var G__22699 = c__10350__auto___22697;
var G__22700 = cljs.core.count(c__10350__auto___22697);
var G__22701 = (0);
seq__22624_22681 = G__22698;
chunk__22625_22682 = G__22699;
count__22626_22683 = G__22700;
i__22627_22684 = G__22701;
continue;
} else {
var e_22706 = cljs.core.first(seq__22624_22696__$1);
if(cljs.core.truth_(e_22706)){
print_comment_lines(e_22706);
} else {
}

var G__22707 = cljs.core.next(seq__22624_22696__$1);
var G__22708 = null;
var G__22709 = (0);
var G__22710 = (0);
seq__22624_22681 = G__22707;
chunk__22625_22682 = G__22708;
count__22626_22683 = G__22709;
i__22627_22684 = G__22710;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" */"], 0));
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword(null,"options","options",99638489));
var and__9427__auto__ = cljs.core.some(((function (opts){
return (function (p1__22712_SHARP_){
return goog.string.startsWith(p1__22712_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__9427__auto__)){
var and__9427__auto____$1 = opts;
if(cljs.core.truth_(and__9427__auto____$1)){
var and__9427__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__9427__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_(define))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([define], 0));
} else {
return null;
}
} else {
return and__9427__auto____$2;
}
} else {
return and__9427__auto____$1;
}
} else {
return and__9427__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__22735){
var map__22736 = p__22735;
var map__22736__$1 = ((((!((map__22736 == null)))?((((map__22736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22736.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22736):map__22736);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22736__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22736__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22736__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22736__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22736__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22736__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22736__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22736__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22736__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__9439__auto__ = init;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ("], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([var$], 0));

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",(function (){var temp__6736__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__6736__auto__)){
var define = temp__6736__auto__;
return define;
} else {
return init;
}
})()], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["; return ("], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast], 0))], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");})()"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");"], 0));
} else {
}

if(cljs.core.truth_((function (){var and__9427__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__9427__auto__){
return test;
} else {
return and__9427__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([var$,".cljs$lang$test = ",test,";"], 0));
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__22771){
var map__22806 = p__22771;
var map__22806__$1 = ((((!((map__22806 == null)))?((((map__22806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22806.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22806):map__22806);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22806__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22806__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22806__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (",arglist,"){"], 0));

var seq__22810_22828 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__22811_22829 = null;
var count__22812_22830 = (0);
var i__22813_22831 = (0);
while(true){
if((i__22813_22831 < count__22812_22830)){
var vec__22814_22832 = chunk__22811_22829.cljs$core$IIndexed$_nth$arity$2(null,i__22813_22831);
var i_22833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22814_22832,(0),null);
var param_22834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22814_22832,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(param_22834);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist," = cljs.core.next(",arglist,");"], 0));

var G__22835 = seq__22810_22828;
var G__22836 = chunk__22811_22829;
var G__22837 = count__22812_22830;
var G__22838 = (i__22813_22831 + (1));
seq__22810_22828 = G__22835;
chunk__22811_22829 = G__22836;
count__22812_22830 = G__22837;
i__22813_22831 = G__22838;
continue;
} else {
var temp__6738__auto___22839 = cljs.core.seq(seq__22810_22828);
if(temp__6738__auto___22839){
var seq__22810_22840__$1 = temp__6738__auto___22839;
if(cljs.core.chunked_seq_QMARK_(seq__22810_22840__$1)){
var c__10350__auto___22841 = cljs.core.chunk_first(seq__22810_22840__$1);
var G__22842 = cljs.core.chunk_rest(seq__22810_22840__$1);
var G__22843 = c__10350__auto___22841;
var G__22844 = cljs.core.count(c__10350__auto___22841);
var G__22845 = (0);
seq__22810_22828 = G__22842;
chunk__22811_22829 = G__22843;
count__22812_22830 = G__22844;
i__22813_22831 = G__22845;
continue;
} else {
var vec__22817_22846 = cljs.core.first(seq__22810_22840__$1);
var i_22847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22817_22846,(0),null);
var param_22848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22817_22846,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(param_22848);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist," = cljs.core.next(",arglist,");"], 0));

var G__22849 = cljs.core.next(seq__22810_22840__$1);
var G__22850 = null;
var G__22851 = (0);
var G__22852 = (0);
seq__22810_22828 = G__22849;
chunk__22811_22829 = G__22850;
count__22812_22830 = G__22851;
i__22813_22831 = G__22852;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.rest(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name,"("], 0));

var seq__22820_22853 = cljs.core.seq(params);
var chunk__22821_22854 = null;
var count__22822_22855 = (0);
var i__22823_22856 = (0);
while(true){
if((i__22823_22856 < count__22822_22855)){
var param_22857 = chunk__22821_22854.cljs$core$IIndexed$_nth$arity$2(null,i__22823_22856);
cljs.compiler.emit(param_22857);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_22857,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__22858 = seq__22820_22853;
var G__22859 = chunk__22821_22854;
var G__22860 = count__22822_22855;
var G__22861 = (i__22823_22856 + (1));
seq__22820_22853 = G__22858;
chunk__22821_22854 = G__22859;
count__22822_22855 = G__22860;
i__22823_22856 = G__22861;
continue;
} else {
var temp__6738__auto___22862 = cljs.core.seq(seq__22820_22853);
if(temp__6738__auto___22862){
var seq__22820_22863__$1 = temp__6738__auto___22862;
if(cljs.core.chunked_seq_QMARK_(seq__22820_22863__$1)){
var c__10350__auto___22864 = cljs.core.chunk_first(seq__22820_22863__$1);
var G__22865 = cljs.core.chunk_rest(seq__22820_22863__$1);
var G__22866 = c__10350__auto___22864;
var G__22867 = cljs.core.count(c__10350__auto___22864);
var G__22868 = (0);
seq__22820_22853 = G__22865;
chunk__22821_22854 = G__22866;
count__22822_22855 = G__22867;
i__22823_22856 = G__22868;
continue;
} else {
var param_22869 = cljs.core.first(seq__22820_22863__$1);
cljs.compiler.emit(param_22869);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_22869,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__22870 = cljs.core.next(seq__22820_22863__$1);
var G__22871 = null;
var G__22872 = (0);
var G__22873 = (0);
seq__22820_22853 = G__22870;
chunk__22821_22854 = G__22871;
count__22822_22855 = G__22872;
i__22823_22856 = G__22873;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.seq(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name,"("], 0));

var seq__22824_22874 = cljs.core.seq(params);
var chunk__22825_22875 = null;
var count__22826_22876 = (0);
var i__22827_22877 = (0);
while(true){
if((i__22827_22877 < count__22826_22876)){
var param_22878 = chunk__22825_22875.cljs$core$IIndexed$_nth$arity$2(null,i__22827_22877);
cljs.compiler.emit(param_22878);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_22878,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__22879 = seq__22824_22874;
var G__22880 = chunk__22825_22875;
var G__22881 = count__22826_22876;
var G__22882 = (i__22827_22877 + (1));
seq__22824_22874 = G__22879;
chunk__22825_22875 = G__22880;
count__22826_22876 = G__22881;
i__22827_22877 = G__22882;
continue;
} else {
var temp__6738__auto___22883 = cljs.core.seq(seq__22824_22874);
if(temp__6738__auto___22883){
var seq__22824_22884__$1 = temp__6738__auto___22883;
if(cljs.core.chunked_seq_QMARK_(seq__22824_22884__$1)){
var c__10350__auto___22885 = cljs.core.chunk_first(seq__22824_22884__$1);
var G__22886 = cljs.core.chunk_rest(seq__22824_22884__$1);
var G__22887 = c__10350__auto___22885;
var G__22888 = cljs.core.count(c__10350__auto___22885);
var G__22889 = (0);
seq__22824_22874 = G__22886;
chunk__22825_22875 = G__22887;
count__22826_22876 = G__22888;
i__22827_22877 = G__22889;
continue;
} else {
var param_22890 = cljs.core.first(seq__22824_22884__$1);
cljs.compiler.emit(param_22890);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_22890,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__22891 = cljs.core.next(seq__22824_22884__$1);
var G__22892 = null;
var G__22893 = (0);
var G__22894 = (0);
seq__22824_22874 = G__22891;
chunk__22825_22875 = G__22892;
count__22826_22876 = G__22893;
i__22827_22877 = G__22894;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__22899 = cljs.core.seq(params);
var chunk__22900 = null;
var count__22901 = (0);
var i__22902 = (0);
while(true){
if((i__22902 < count__22901)){
var param = chunk__22900.cljs$core$IIndexed$_nth$arity$2(null,i__22902);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__22903 = seq__22899;
var G__22904 = chunk__22900;
var G__22905 = count__22901;
var G__22906 = (i__22902 + (1));
seq__22899 = G__22903;
chunk__22900 = G__22904;
count__22901 = G__22905;
i__22902 = G__22906;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__22899);
if(temp__6738__auto__){
var seq__22899__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22899__$1)){
var c__10350__auto__ = cljs.core.chunk_first(seq__22899__$1);
var G__22907 = cljs.core.chunk_rest(seq__22899__$1);
var G__22908 = c__10350__auto__;
var G__22909 = cljs.core.count(c__10350__auto__);
var G__22910 = (0);
seq__22899 = G__22907;
chunk__22900 = G__22908;
count__22901 = G__22909;
i__22902 = G__22910;
continue;
} else {
var param = cljs.core.first(seq__22899__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__22911 = cljs.core.next(seq__22899__$1);
var G__22912 = null;
var G__22913 = (0);
var G__22914 = (0);
seq__22899 = G__22911;
chunk__22900 = G__22912;
count__22901 = G__22913;
i__22902 = G__22914;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__22915){
var map__22918 = p__22915;
var map__22918__$1 = ((((!((map__22918 == null)))?((((map__22918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22918):map__22918);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22918__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22918__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22918__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22918__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22918__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22918__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22918__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22918__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__21529__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"("], 0));

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
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
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__i")].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__a")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__22920){
var map__22931 = p__22920;
var map__22931__$1 = ((((!((map__22931 == null)))?((((map__22931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22931.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22931):map__22931);
var f = map__22931__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22931__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22931__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22931__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22931__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22931__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22931__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22931__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22931__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__21529__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

var name_22941__$1 = (function (){var or__9439__auto__ = name;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_22942 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_22941__$1);
var delegate_name_22943 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_22942),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function() { "], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",delegate_name_22943," = function ("], 0));

var seq__22933_22944 = cljs.core.seq(params);
var chunk__22934_22945 = null;
var count__22935_22946 = (0);
var i__22936_22947 = (0);
while(true){
if((i__22936_22947 < count__22935_22946)){
var param_22948 = chunk__22934_22945.cljs$core$IIndexed$_nth$arity$2(null,i__22936_22947);
cljs.compiler.emit(param_22948);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_22948,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__22949 = seq__22933_22944;
var G__22950 = chunk__22934_22945;
var G__22951 = count__22935_22946;
var G__22952 = (i__22936_22947 + (1));
seq__22933_22944 = G__22949;
chunk__22934_22945 = G__22950;
count__22935_22946 = G__22951;
i__22936_22947 = G__22952;
continue;
} else {
var temp__6738__auto___22953 = cljs.core.seq(seq__22933_22944);
if(temp__6738__auto___22953){
var seq__22933_22954__$1 = temp__6738__auto___22953;
if(cljs.core.chunked_seq_QMARK_(seq__22933_22954__$1)){
var c__10350__auto___22955 = cljs.core.chunk_first(seq__22933_22954__$1);
var G__22956 = cljs.core.chunk_rest(seq__22933_22954__$1);
var G__22957 = c__10350__auto___22955;
var G__22958 = cljs.core.count(c__10350__auto___22955);
var G__22959 = (0);
seq__22933_22944 = G__22956;
chunk__22934_22945 = G__22957;
count__22935_22946 = G__22958;
i__22936_22947 = G__22959;
continue;
} else {
var param_22960 = cljs.core.first(seq__22933_22954__$1);
cljs.compiler.emit(param_22960);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_22960,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__22961 = cljs.core.next(seq__22933_22954__$1);
var G__22962 = null;
var G__22963 = (0);
var G__22964 = (0);
seq__22933_22944 = G__22961;
chunk__22934_22945 = G__22962;
count__22935_22946 = G__22963;
i__22936_22947 = G__22964;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["){"], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",mname_22942," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",(cljs.core.count(params) - (1)),") {"], 0));

var a_22965 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_22965,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["} "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name_22943,".call(this,"], 0));

var seq__22937_22966 = cljs.core.seq(params);
var chunk__22938_22967 = null;
var count__22939_22968 = (0);
var i__22940_22969 = (0);
while(true){
if((i__22940_22969 < count__22939_22968)){
var param_22970 = chunk__22938_22967.cljs$core$IIndexed$_nth$arity$2(null,i__22940_22969);
cljs.compiler.emit(param_22970);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_22970,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__22971 = seq__22937_22966;
var G__22972 = chunk__22938_22967;
var G__22973 = count__22939_22968;
var G__22974 = (i__22940_22969 + (1));
seq__22937_22966 = G__22971;
chunk__22938_22967 = G__22972;
count__22939_22968 = G__22973;
i__22940_22969 = G__22974;
continue;
} else {
var temp__6738__auto___22975 = cljs.core.seq(seq__22937_22966);
if(temp__6738__auto___22975){
var seq__22937_22976__$1 = temp__6738__auto___22975;
if(cljs.core.chunked_seq_QMARK_(seq__22937_22976__$1)){
var c__10350__auto___22977 = cljs.core.chunk_first(seq__22937_22976__$1);
var G__22978 = cljs.core.chunk_rest(seq__22937_22976__$1);
var G__22979 = c__10350__auto___22977;
var G__22980 = cljs.core.count(c__10350__auto___22977);
var G__22981 = (0);
seq__22937_22966 = G__22978;
chunk__22938_22967 = G__22979;
count__22939_22968 = G__22980;
i__22940_22969 = G__22981;
continue;
} else {
var param_22982 = cljs.core.first(seq__22937_22976__$1);
cljs.compiler.emit(param_22982);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_22982,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__22983 = cljs.core.next(seq__22937_22976__$1);
var G__22984 = null;
var G__22985 = (0);
var G__22986 = (0);
seq__22937_22966 = G__22983;
chunk__22938_22967 = G__22984;
count__22939_22968 = G__22985;
i__22940_22969 = G__22986;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_22942,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_22942,".cljs$lang$applyTo = "], 0));

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_22941__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_22942,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_22943,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",mname_22942,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__22990){
var map__22991 = p__22990;
var map__22991__$1 = ((((!((map__22991 == null)))?((((map__22991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22991.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22991):map__22991);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22991__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22991__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22991__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22991__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22991__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22991__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22991__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.array_seq([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__22991,map__22991__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__22987_SHARP_){
var and__9427__auto__ = p1__22987_SHARP_;
if(cljs.core.truth_(and__9427__auto__)){
var G__22993 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__22987_SHARP_);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22993) : cljs.core.deref.call(null,G__22993));
} else {
return and__9427__auto__;
}
});})(map__22991,map__22991__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.array_seq([loop_lets], 0)))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
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
var name_23027__$1 = (function (){var or__9439__auto__ = name;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_23028 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_23027__$1);
var maxparams_23029 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_23030 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_23027__$1,mname_23028,maxparams_23029,loop_locals,map__22991,map__22991__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_23028),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_23027__$1,mname_23028,maxparams_23029,loop_locals,map__22991,map__22991__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_23031 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_23027__$1,mname_23028,maxparams_23029,mmap_23030,loop_locals,map__22991,map__22991__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__22988_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__22988_SHARP_)));
});})(name_23027__$1,mname_23028,maxparams_23029,mmap_23030,loop_locals,map__22991,map__22991__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq(mmap_23030));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function() {"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",mname_23028," = null;"], 0));

var seq__22994_23032 = cljs.core.seq(ms_23031);
var chunk__22995_23033 = null;
var count__22996_23034 = (0);
var i__22997_23035 = (0);
while(true){
if((i__22997_23035 < count__22996_23034)){
var vec__22998_23036 = chunk__22995_23033.cljs$core$IIndexed$_nth$arity$2(null,i__22997_23035);
var n_23037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22998_23036,(0),null);
var meth_23038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22998_23036,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",n_23037," = "], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_23038))){
cljs.compiler.emit_variadic_fn_method(meth_23038);
} else {
cljs.compiler.emit_fn_method(meth_23038);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

var G__23039 = seq__22994_23032;
var G__23040 = chunk__22995_23033;
var G__23041 = count__22996_23034;
var G__23042 = (i__22997_23035 + (1));
seq__22994_23032 = G__23039;
chunk__22995_23033 = G__23040;
count__22996_23034 = G__23041;
i__22997_23035 = G__23042;
continue;
} else {
var temp__6738__auto___23043 = cljs.core.seq(seq__22994_23032);
if(temp__6738__auto___23043){
var seq__22994_23044__$1 = temp__6738__auto___23043;
if(cljs.core.chunked_seq_QMARK_(seq__22994_23044__$1)){
var c__10350__auto___23045 = cljs.core.chunk_first(seq__22994_23044__$1);
var G__23046 = cljs.core.chunk_rest(seq__22994_23044__$1);
var G__23047 = c__10350__auto___23045;
var G__23048 = cljs.core.count(c__10350__auto___23045);
var G__23049 = (0);
seq__22994_23032 = G__23046;
chunk__22995_23033 = G__23047;
count__22996_23034 = G__23048;
i__22997_23035 = G__23049;
continue;
} else {
var vec__23001_23050 = cljs.core.first(seq__22994_23044__$1);
var n_23051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23001_23050,(0),null);
var meth_23052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23001_23050,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",n_23051," = "], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_23052))){
cljs.compiler.emit_variadic_fn_method(meth_23052);
} else {
cljs.compiler.emit_fn_method(meth_23052);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

var G__23053 = cljs.core.next(seq__22994_23044__$1);
var G__23054 = null;
var G__23055 = (0);
var G__23056 = (0);
seq__22994_23032 = G__23053;
chunk__22995_23033 = G__23054;
count__22996_23034 = G__23055;
i__22997_23035 = G__23056;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_23028," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_23029),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_23029)),"){"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(maxparams_23029));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = var_args;"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["switch(arguments.length){"], 0));

var seq__23004_23057 = cljs.core.seq(ms_23031);
var chunk__23005_23058 = null;
var count__23006_23059 = (0);
var i__23007_23060 = (0);
while(true){
if((i__23007_23060 < count__23006_23059)){
var vec__23008_23061 = chunk__23005_23058.cljs$core$IIndexed$_nth$arity$2(null,i__23007_23060);
var n_23062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23008_23061,(0),null);
var meth_23063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23008_23061,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_23063))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

var restarg_23064 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",restarg_23064," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_23065 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([restarg_23064," = new cljs.core.IndexedSeq(",a_23065,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_23062,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_23029)),(((cljs.core.count(maxparams_23029) > (1)))?", ":null),restarg_23064,");"], 0));
} else {
var pcnt_23066 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_23063));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",pcnt_23066,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_23062,".call(this",(((pcnt_23066 === (0)))?null:cljs.core._conj((function (){var x__10373__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_23066,maxparams_23029));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),",")),");"], 0));
}

var G__23067 = seq__23004_23057;
var G__23068 = chunk__23005_23058;
var G__23069 = count__23006_23059;
var G__23070 = (i__23007_23060 + (1));
seq__23004_23057 = G__23067;
chunk__23005_23058 = G__23068;
count__23006_23059 = G__23069;
i__23007_23060 = G__23070;
continue;
} else {
var temp__6738__auto___23071 = cljs.core.seq(seq__23004_23057);
if(temp__6738__auto___23071){
var seq__23004_23072__$1 = temp__6738__auto___23071;
if(cljs.core.chunked_seq_QMARK_(seq__23004_23072__$1)){
var c__10350__auto___23073 = cljs.core.chunk_first(seq__23004_23072__$1);
var G__23074 = cljs.core.chunk_rest(seq__23004_23072__$1);
var G__23075 = c__10350__auto___23073;
var G__23076 = cljs.core.count(c__10350__auto___23073);
var G__23077 = (0);
seq__23004_23057 = G__23074;
chunk__23005_23058 = G__23075;
count__23006_23059 = G__23076;
i__23007_23060 = G__23077;
continue;
} else {
var vec__23011_23078 = cljs.core.first(seq__23004_23072__$1);
var n_23079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23011_23078,(0),null);
var meth_23080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23011_23078,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_23080))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

var restarg_23081 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",restarg_23081," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_23082 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([restarg_23081," = new cljs.core.IndexedSeq(",a_23082,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_23079,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_23029)),(((cljs.core.count(maxparams_23029) > (1)))?", ":null),restarg_23081,");"], 0));
} else {
var pcnt_23083 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_23080));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",pcnt_23083,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_23079,".call(this",(((pcnt_23083 === (0)))?null:cljs.core._conj((function (){var x__10373__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_23083,maxparams_23029));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),",")),");"], 0));
}

var G__23084 = cljs.core.next(seq__23004_23072__$1);
var G__23085 = null;
var G__23086 = (0);
var G__23087 = (0);
seq__23004_23057 = G__23084;
chunk__23005_23058 = G__23085;
count__23006_23059 = G__23086;
i__23007_23060 = G__23087;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["throw(new Error('Invalid arity: ' + (arguments.length - 1)));"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_23028,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_23028,".cljs$lang$applyTo = ",cljs.core.some(((function (name_23027__$1,mname_23028,maxparams_23029,mmap_23030,ms_23031,loop_locals,map__22991,map__22991__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__22989_SHARP_){
var vec__23014 = p1__22989_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23014,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23014,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_23027__$1,mname_23028,maxparams_23029,mmap_23030,ms_23031,loop_locals,map__22991,map__22991__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_23031),".cljs$lang$applyTo;"], 0));
} else {
}

var seq__23017_23088 = cljs.core.seq(ms_23031);
var chunk__23018_23089 = null;
var count__23019_23090 = (0);
var i__23020_23091 = (0);
while(true){
if((i__23020_23091 < count__23019_23090)){
var vec__23021_23092 = chunk__23018_23089.cljs$core$IIndexed$_nth$arity$2(null,i__23020_23091);
var n_23093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23021_23092,(0),null);
var meth_23094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23021_23092,(1),null);
var c_23095 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_23094));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_23094))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_23028,".cljs$core$IFn$_invoke$arity$variadic = ",n_23093,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_23028,".cljs$core$IFn$_invoke$arity$",c_23095," = ",n_23093,";"], 0));
}

var G__23096 = seq__23017_23088;
var G__23097 = chunk__23018_23089;
var G__23098 = count__23019_23090;
var G__23099 = (i__23020_23091 + (1));
seq__23017_23088 = G__23096;
chunk__23018_23089 = G__23097;
count__23019_23090 = G__23098;
i__23020_23091 = G__23099;
continue;
} else {
var temp__6738__auto___23100 = cljs.core.seq(seq__23017_23088);
if(temp__6738__auto___23100){
var seq__23017_23101__$1 = temp__6738__auto___23100;
if(cljs.core.chunked_seq_QMARK_(seq__23017_23101__$1)){
var c__10350__auto___23102 = cljs.core.chunk_first(seq__23017_23101__$1);
var G__23103 = cljs.core.chunk_rest(seq__23017_23101__$1);
var G__23104 = c__10350__auto___23102;
var G__23105 = cljs.core.count(c__10350__auto___23102);
var G__23106 = (0);
seq__23017_23088 = G__23103;
chunk__23018_23089 = G__23104;
count__23019_23090 = G__23105;
i__23020_23091 = G__23106;
continue;
} else {
var vec__23024_23107 = cljs.core.first(seq__23017_23101__$1);
var n_23108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23024_23107,(0),null);
var meth_23109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23024_23107,(1),null);
var c_23110 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_23109));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_23109))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_23028,".cljs$core$IFn$_invoke$arity$variadic = ",n_23108,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_23028,".cljs$core$IFn$_invoke$arity$",c_23110," = ",n_23108,";"], 0));
}

var G__23111 = cljs.core.next(seq__23017_23101__$1);
var G__23112 = null;
var G__23113 = (0);
var G__23114 = (0);
seq__23017_23088 = G__23111;
chunk__23018_23089 = G__23112;
count__23019_23090 = G__23113;
i__23020_23091 = G__23114;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",mname_23028,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";})(",cljs.compiler.comma_sep(loop_locals),"))"], 0));
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__23115){
var map__23116 = p__23115;
var map__23116__$1 = ((((!((map__23116 == null)))?((((map__23116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23116.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23116):map__23116);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23116__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23116__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23116__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__9427__auto__ = statements;
if(cljs.core.truth_(and__9427__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__9427__auto__;
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var seq__23118_23122 = cljs.core.seq(statements);
var chunk__23119_23123 = null;
var count__23120_23124 = (0);
var i__23121_23125 = (0);
while(true){
if((i__23121_23125 < count__23120_23124)){
var s_23126 = chunk__23119_23123.cljs$core$IIndexed$_nth$arity$2(null,i__23121_23125);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_23126], 0));

var G__23127 = seq__23118_23122;
var G__23128 = chunk__23119_23123;
var G__23129 = count__23120_23124;
var G__23130 = (i__23121_23125 + (1));
seq__23118_23122 = G__23127;
chunk__23119_23123 = G__23128;
count__23120_23124 = G__23129;
i__23121_23125 = G__23130;
continue;
} else {
var temp__6738__auto___23131 = cljs.core.seq(seq__23118_23122);
if(temp__6738__auto___23131){
var seq__23118_23132__$1 = temp__6738__auto___23131;
if(cljs.core.chunked_seq_QMARK_(seq__23118_23132__$1)){
var c__10350__auto___23133 = cljs.core.chunk_first(seq__23118_23132__$1);
var G__23134 = cljs.core.chunk_rest(seq__23118_23132__$1);
var G__23135 = c__10350__auto___23133;
var G__23136 = cljs.core.count(c__10350__auto___23133);
var G__23137 = (0);
seq__23118_23122 = G__23134;
chunk__23119_23123 = G__23135;
count__23120_23124 = G__23136;
i__23121_23125 = G__23137;
continue;
} else {
var s_23138 = cljs.core.first(seq__23118_23132__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_23138], 0));

var G__23139 = cljs.core.next(seq__23118_23132__$1);
var G__23140 = null;
var G__23141 = (0);
var G__23142 = (0);
seq__23118_23122 = G__23139;
chunk__23119_23123 = G__23140;
count__23120_23124 = G__23141;
i__23121_23125 = G__23142;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(cljs.core.truth_((function (){var and__9427__auto__ = statements;
if(cljs.core.truth_(and__9427__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__9427__auto__;
}
})())){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__23143){
var map__23144 = p__23143;
var map__23144__$1 = ((((!((map__23144 == null)))?((((map__23144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23144):map__23144);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23144__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23144__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23144__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23144__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23144__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__9439__auto__ = name;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["try{",try$,"}"], 0));

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}"], 0));
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("finally block cannot contain constant"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(not= :constant (:op finally))")].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["finally {",finally$,"}"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([try$], 0));
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__23146,is_loop){
var map__23158 = p__23146;
var map__23158__$1 = ((((!((map__23158 == null)))?((((map__23158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23158.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23158):map__23158);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23158__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23158__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23158__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var _STAR_lexical_renames_STAR_23160_23169 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR_23160_23169,context,map__23158,map__23158__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_23160_23169,context,map__23158,map__23158__$1,bindings,expr,env))
,bindings):null));

try{var seq__23161_23170 = cljs.core.seq(bindings);
var chunk__23162_23171 = null;
var count__23163_23172 = (0);
var i__23164_23173 = (0);
while(true){
if((i__23164_23173 < count__23163_23172)){
var map__23165_23174 = chunk__23162_23171.cljs$core$IIndexed$_nth$arity$2(null,i__23164_23173);
var map__23165_23175__$1 = ((((!((map__23165_23174 == null)))?((((map__23165_23174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23165_23174.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23165_23174):map__23165_23174);
var binding_23176 = map__23165_23175__$1;
var init_23177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23165_23175__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(binding_23176);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",init_23177,";"], 0));

var G__23178 = seq__23161_23170;
var G__23179 = chunk__23162_23171;
var G__23180 = count__23163_23172;
var G__23181 = (i__23164_23173 + (1));
seq__23161_23170 = G__23178;
chunk__23162_23171 = G__23179;
count__23163_23172 = G__23180;
i__23164_23173 = G__23181;
continue;
} else {
var temp__6738__auto___23182 = cljs.core.seq(seq__23161_23170);
if(temp__6738__auto___23182){
var seq__23161_23183__$1 = temp__6738__auto___23182;
if(cljs.core.chunked_seq_QMARK_(seq__23161_23183__$1)){
var c__10350__auto___23184 = cljs.core.chunk_first(seq__23161_23183__$1);
var G__23185 = cljs.core.chunk_rest(seq__23161_23183__$1);
var G__23186 = c__10350__auto___23184;
var G__23187 = cljs.core.count(c__10350__auto___23184);
var G__23188 = (0);
seq__23161_23170 = G__23185;
chunk__23162_23171 = G__23186;
count__23163_23172 = G__23187;
i__23164_23173 = G__23188;
continue;
} else {
var map__23167_23189 = cljs.core.first(seq__23161_23183__$1);
var map__23167_23190__$1 = ((((!((map__23167_23189 == null)))?((((map__23167_23189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23167_23189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23167_23189):map__23167_23189);
var binding_23191 = map__23167_23190__$1;
var init_23192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23167_23190__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(binding_23191);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",init_23192,";"], 0));

var G__23193 = cljs.core.next(seq__23161_23183__$1);
var G__23194 = null;
var G__23195 = (0);
var G__23196 = (0);
seq__23161_23170 = G__23193;
chunk__23162_23171 = G__23194;
count__23163_23172 = G__23195;
i__23164_23173 = G__23196;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_23160_23169;
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__23197){
var map__23198 = p__23197;
var map__23198__$1 = ((((!((map__23198 == null)))?((((map__23198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23198):map__23198);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23198__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23198__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23198__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__10460__auto___23200 = cljs.core.count(exprs);
var i_23201 = (0);
while(true){
if((i_23201 < n__10460__auto___23200)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_23201) : temps.call(null,i_23201))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_23201) : exprs.call(null,i_23201)),";"], 0));

var G__23202 = (i_23201 + (1));
i_23201 = G__23202;
continue;
} else {
}
break;
}

var n__10460__auto___23203 = cljs.core.count(exprs);
var i_23204 = (0);
while(true){
if((i_23204 < n__10460__auto___23203)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_23204) : params.call(null,i_23204)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_23204) : temps.call(null,i_23204)),";"], 0));

var G__23205 = (i_23204 + (1));
i_23204 = G__23205;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["continue;"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__23206){
var map__23207 = p__23206;
var map__23207__$1 = ((((!((map__23207 == null)))?((((map__23207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23207.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23207):map__23207);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23207__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23207__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23207__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var seq__23209_23217 = cljs.core.seq(bindings);
var chunk__23210_23218 = null;
var count__23211_23219 = (0);
var i__23212_23220 = (0);
while(true){
if((i__23212_23220 < count__23211_23219)){
var map__23213_23221 = chunk__23210_23218.cljs$core$IIndexed$_nth$arity$2(null,i__23212_23220);
var map__23213_23222__$1 = ((((!((map__23213_23221 == null)))?((((map__23213_23221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23213_23221.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23213_23221):map__23213_23221);
var binding_23223 = map__23213_23222__$1;
var init_23224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23213_23222__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_23223)," = ",init_23224,";"], 0));

var G__23225 = seq__23209_23217;
var G__23226 = chunk__23210_23218;
var G__23227 = count__23211_23219;
var G__23228 = (i__23212_23220 + (1));
seq__23209_23217 = G__23225;
chunk__23210_23218 = G__23226;
count__23211_23219 = G__23227;
i__23212_23220 = G__23228;
continue;
} else {
var temp__6738__auto___23229 = cljs.core.seq(seq__23209_23217);
if(temp__6738__auto___23229){
var seq__23209_23230__$1 = temp__6738__auto___23229;
if(cljs.core.chunked_seq_QMARK_(seq__23209_23230__$1)){
var c__10350__auto___23231 = cljs.core.chunk_first(seq__23209_23230__$1);
var G__23232 = cljs.core.chunk_rest(seq__23209_23230__$1);
var G__23233 = c__10350__auto___23231;
var G__23234 = cljs.core.count(c__10350__auto___23231);
var G__23235 = (0);
seq__23209_23217 = G__23232;
chunk__23210_23218 = G__23233;
count__23211_23219 = G__23234;
i__23212_23220 = G__23235;
continue;
} else {
var map__23215_23236 = cljs.core.first(seq__23209_23230__$1);
var map__23215_23237__$1 = ((((!((map__23215_23236 == null)))?((((map__23215_23236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23215_23236.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23215_23236):map__23215_23236);
var binding_23238 = map__23215_23237__$1;
var init_23239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23215_23237__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_23238)," = ",init_23239,";"], 0));

var G__23240 = cljs.core.next(seq__23209_23230__$1);
var G__23241 = null;
var G__23242 = (0);
var G__23243 = (0);
seq__23209_23217 = G__23240;
chunk__23210_23218 = G__23241;
count__23211_23219 = G__23242;
i__23212_23220 = G__23243;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__23246){
var map__23247 = p__23246;
var map__23247__$1 = ((((!((map__23247 == null)))?((((map__23247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23247.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23247):map__23247);
var expr = map__23247__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23247__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23247__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23247__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__9427__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__9427__auto__){
var and__9427__auto____$1 = cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__9427__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__9427__auto____$1;
}
} else {
return and__9427__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__9427__auto__ = protocol;
if(cljs.core.truth_(and__9427__auto__)){
var and__9427__auto____$1 = tag;
if(cljs.core.truth_(and__9427__auto____$1)){
var or__9439__auto__ = (function (){var and__9427__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__9427__auto____$2){
var and__9427__auto____$3 = protocol;
if(cljs.core.truth_(and__9427__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__9427__auto____$3;
}
} else {
return and__9427__auto____$2;
}
})();
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
var and__9427__auto____$2 = (function (){var or__9439__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__9439__auto____$1){
return or__9439__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__9427__auto____$2)){
var or__9439__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__9439__auto____$1){
return or__9439__auto____$1;
} else {
var and__9427__auto____$3 = !(cljs.core.set_QMARK_(tag));
if(and__9427__auto____$3){
var and__9427__auto____$4 = cljs.core.not(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"js","js",-886355190,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__9427__auto____$4){
var temp__6738__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,tag));
if(cljs.core.truth_(temp__6738__auto__)){
var ps = temp__6738__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__9427__auto____$4;
}
} else {
return and__9427__auto____$3;
}
}
} else {
return and__9427__auto____$2;
}
}
} else {
return and__9427__auto____$1;
}
} else {
return and__9427__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__9439__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__9439__auto__){
return or__9439__auto__;
} else {
var temp__6738__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__6738__auto__)){
var ns_str = temp__6738__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__23249 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__9427__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__9427__auto__)){
return (arity > mfa);
} else {
return and__9427__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__23247,map__23247__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__23247,map__23247__$1,expr,f,args,env){
return (function (p1__23244_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__23244_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__23247,map__23247__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__23247,map__23247__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__23247,map__23247__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__23247,map__23247__$1,expr,f,args,env){
return (function (p1__23245_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__23245_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__23247,map__23247__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__23247,map__23247__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23249,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23249,(1),null);
var env__21529__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["!(",cljs.core.first(args),")"], 0));
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_23252 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(args),".",pimpl_23252,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_23253 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_23253,args)),(((mfa_23253 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_23253,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__9439__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
var or__9439__auto____$1 = js_QMARK_;
if(or__9439__auto____$1){
return or__9439__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797)))){
var fprop_23254 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(".cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",f__$1,fprop_23254," ? ",f__$1,fprop_23254,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")"], 0));
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__23255){
var map__23256 = p__23255;
var map__23256__$1 = ((((!((map__23256 == null)))?((((map__23256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23256.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23256):map__23256);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23256__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23256__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23256__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__21529__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(new ",ctor,"(",cljs.compiler.comma_sep(args),"))"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__23258){
var map__23259 = p__23258;
var map__23259__$1 = ((((!((map__23259 == null)))?((((map__23259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23259.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23259):map__23259);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23259__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23259__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23259__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__21529__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target," = ",val], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps){
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs," = cljs.core.set();"], 0));
} else {
}

var seq__23273_23285 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps)));
var chunk__23274_23286 = null;
var count__23275_23287 = (0);
var i__23276_23288 = (0);
while(true){
if((i__23276_23288 < count__23275_23287)){
var lib_23289 = chunk__23274_23286.cljs$core$IIndexed$_nth$arity$2(null,i__23276_23288);
if(cljs.core.truth_((function (){var and__9427__auto__ = cljs.analyzer.foreign_dep_QMARK_(lib_23289);
if(and__9427__auto__){
var temp__6738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.truth_(temp__6738__auto__)){
var map__23279 = temp__6738__auto__;
var map__23279__$1 = ((((!((map__23279 == null)))?((((map__23279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23279.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23279):map__23279);
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23279__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
return !(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478)));
} else {
return null;
}
} else {
return and__9427__auto__;
}
})())){
} else {
if(cljs.core.truth_((function (){var or__9439__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_23289),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_23289),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__9439__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_23289),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_23289),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_23289),"');"], 0));

}
}
}

var G__23290 = seq__23273_23285;
var G__23291 = chunk__23274_23286;
var G__23292 = count__23275_23287;
var G__23293 = (i__23276_23288 + (1));
seq__23273_23285 = G__23290;
chunk__23274_23286 = G__23291;
count__23275_23287 = G__23292;
i__23276_23288 = G__23293;
continue;
} else {
var temp__6738__auto___23294 = cljs.core.seq(seq__23273_23285);
if(temp__6738__auto___23294){
var seq__23273_23295__$1 = temp__6738__auto___23294;
if(cljs.core.chunked_seq_QMARK_(seq__23273_23295__$1)){
var c__10350__auto___23296 = cljs.core.chunk_first(seq__23273_23295__$1);
var G__23297 = cljs.core.chunk_rest(seq__23273_23295__$1);
var G__23298 = c__10350__auto___23296;
var G__23299 = cljs.core.count(c__10350__auto___23296);
var G__23300 = (0);
seq__23273_23285 = G__23297;
chunk__23274_23286 = G__23298;
count__23275_23287 = G__23299;
i__23276_23288 = G__23300;
continue;
} else {
var lib_23301 = cljs.core.first(seq__23273_23295__$1);
if(cljs.core.truth_((function (){var and__9427__auto__ = cljs.analyzer.foreign_dep_QMARK_(lib_23301);
if(and__9427__auto__){
var temp__6738__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.truth_(temp__6738__auto____$1)){
var map__23283 = temp__6738__auto____$1;
var map__23283__$1 = ((((!((map__23283 == null)))?((((map__23283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23283.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23283):map__23283);
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23283__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
return !(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478)));
} else {
return null;
}
} else {
return and__9427__auto__;
}
})())){
} else {
if(cljs.core.truth_((function (){var or__9439__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_23301),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_23301),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__9439__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_23301),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_23301),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_23301),"');"], 0));

}
}
}

var G__23302 = cljs.core.next(seq__23273_23295__$1);
var G__23303 = null;
var G__23304 = (0);
var G__23305 = (0);
seq__23273_23285 = G__23302;
chunk__23274_23286 = G__23303;
count__23275_23287 = G__23304;
i__23276_23288 = G__23305;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__23306){
var map__23307 = p__23306;
var map__23307__$1 = ((((!((map__23307 == null)))?((((map__23307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23307.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23307):map__23307);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23307__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23307__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23307__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23307__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23307__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23307__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23307__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps);

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__23309){
var map__23310 = p__23309;
var map__23310__$1 = ((((!((map__23310 == null)))?((((map__23310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23310):map__23310);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23310__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23310__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23310__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23310__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23310__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23310__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23310__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('cljs.core');"], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');"], 0));
} else {
}
}

cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps);

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__23312){
var map__23313 = p__23312;
var map__23313__$1 = ((((!((map__23313 == null)))?((((map__23313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23313):map__23313);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23313__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23313__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23313__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23313__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23313__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @constructor"], 0));

var seq__23315_23333 = cljs.core.seq(protocols);
var chunk__23316_23334 = null;
var count__23317_23335 = (0);
var i__23318_23336 = (0);
while(true){
if((i__23318_23336 < count__23317_23335)){
var protocol_23337 = chunk__23316_23334.cljs$core$IIndexed$_nth$arity$2(null,i__23318_23336);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_23337)].join('')),"}"], 0));

var G__23338 = seq__23315_23333;
var G__23339 = chunk__23316_23334;
var G__23340 = count__23317_23335;
var G__23341 = (i__23318_23336 + (1));
seq__23315_23333 = G__23338;
chunk__23316_23334 = G__23339;
count__23317_23335 = G__23340;
i__23318_23336 = G__23341;
continue;
} else {
var temp__6738__auto___23342 = cljs.core.seq(seq__23315_23333);
if(temp__6738__auto___23342){
var seq__23315_23343__$1 = temp__6738__auto___23342;
if(cljs.core.chunked_seq_QMARK_(seq__23315_23343__$1)){
var c__10350__auto___23344 = cljs.core.chunk_first(seq__23315_23343__$1);
var G__23345 = cljs.core.chunk_rest(seq__23315_23343__$1);
var G__23346 = c__10350__auto___23344;
var G__23347 = cljs.core.count(c__10350__auto___23344);
var G__23348 = (0);
seq__23315_23333 = G__23345;
chunk__23316_23334 = G__23346;
count__23317_23335 = G__23347;
i__23318_23336 = G__23348;
continue;
} else {
var protocol_23349 = cljs.core.first(seq__23315_23343__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_23349)].join('')),"}"], 0));

var G__23350 = cljs.core.next(seq__23315_23343__$1);
var G__23351 = null;
var G__23352 = (0);
var G__23353 = (0);
seq__23315_23333 = G__23350;
chunk__23316_23334 = G__23351;
count__23317_23335 = G__23352;
i__23318_23336 = G__23353;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__23319_23354 = cljs.core.seq(fields__$1);
var chunk__23320_23355 = null;
var count__23321_23356 = (0);
var i__23322_23357 = (0);
while(true){
if((i__23322_23357 < count__23321_23356)){
var fld_23358 = chunk__23320_23355.cljs$core$IIndexed$_nth$arity$2(null,i__23322_23357);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_23358," = ",fld_23358,";"], 0));

var G__23359 = seq__23319_23354;
var G__23360 = chunk__23320_23355;
var G__23361 = count__23321_23356;
var G__23362 = (i__23322_23357 + (1));
seq__23319_23354 = G__23359;
chunk__23320_23355 = G__23360;
count__23321_23356 = G__23361;
i__23322_23357 = G__23362;
continue;
} else {
var temp__6738__auto___23363 = cljs.core.seq(seq__23319_23354);
if(temp__6738__auto___23363){
var seq__23319_23364__$1 = temp__6738__auto___23363;
if(cljs.core.chunked_seq_QMARK_(seq__23319_23364__$1)){
var c__10350__auto___23365 = cljs.core.chunk_first(seq__23319_23364__$1);
var G__23366 = cljs.core.chunk_rest(seq__23319_23364__$1);
var G__23367 = c__10350__auto___23365;
var G__23368 = cljs.core.count(c__10350__auto___23365);
var G__23369 = (0);
seq__23319_23354 = G__23366;
chunk__23320_23355 = G__23367;
count__23321_23356 = G__23368;
i__23322_23357 = G__23369;
continue;
} else {
var fld_23370 = cljs.core.first(seq__23319_23364__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_23370," = ",fld_23370,";"], 0));

var G__23371 = cljs.core.next(seq__23319_23364__$1);
var G__23372 = null;
var G__23373 = (0);
var G__23374 = (0);
seq__23319_23354 = G__23371;
chunk__23320_23355 = G__23372;
count__23321_23356 = G__23373;
i__23322_23357 = G__23374;
continue;
}
} else {
}
}
break;
}

var seq__23323_23375 = cljs.core.seq(pmasks);
var chunk__23324_23376 = null;
var count__23325_23377 = (0);
var i__23326_23378 = (0);
while(true){
if((i__23326_23378 < count__23325_23377)){
var vec__23327_23379 = chunk__23324_23376.cljs$core$IIndexed$_nth$arity$2(null,i__23326_23378);
var pno_23380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23327_23379,(0),null);
var pmask_23381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23327_23379,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_23380,"$ = ",pmask_23381,";"], 0));

var G__23382 = seq__23323_23375;
var G__23383 = chunk__23324_23376;
var G__23384 = count__23325_23377;
var G__23385 = (i__23326_23378 + (1));
seq__23323_23375 = G__23382;
chunk__23324_23376 = G__23383;
count__23325_23377 = G__23384;
i__23326_23378 = G__23385;
continue;
} else {
var temp__6738__auto___23386 = cljs.core.seq(seq__23323_23375);
if(temp__6738__auto___23386){
var seq__23323_23387__$1 = temp__6738__auto___23386;
if(cljs.core.chunked_seq_QMARK_(seq__23323_23387__$1)){
var c__10350__auto___23388 = cljs.core.chunk_first(seq__23323_23387__$1);
var G__23389 = cljs.core.chunk_rest(seq__23323_23387__$1);
var G__23390 = c__10350__auto___23388;
var G__23391 = cljs.core.count(c__10350__auto___23388);
var G__23392 = (0);
seq__23323_23375 = G__23389;
chunk__23324_23376 = G__23390;
count__23325_23377 = G__23391;
i__23326_23378 = G__23392;
continue;
} else {
var vec__23330_23393 = cljs.core.first(seq__23323_23387__$1);
var pno_23394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23330_23393,(0),null);
var pmask_23395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23330_23393,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_23394,"$ = ",pmask_23395,";"], 0));

var G__23396 = cljs.core.next(seq__23323_23387__$1);
var G__23397 = null;
var G__23398 = (0);
var G__23399 = (0);
seq__23323_23375 = G__23396;
chunk__23324_23376 = G__23397;
count__23325_23377 = G__23398;
i__23326_23378 = G__23399;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__23400){
var map__23401 = p__23400;
var map__23401__$1 = ((((!((map__23401 == null)))?((((map__23401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23401.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23401):map__23401);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23401__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23401__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23401__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23401__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23401__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @constructor"], 0));

var seq__23403_23421 = cljs.core.seq(protocols);
var chunk__23404_23422 = null;
var count__23405_23423 = (0);
var i__23406_23424 = (0);
while(true){
if((i__23406_23424 < count__23405_23423)){
var protocol_23425 = chunk__23404_23422.cljs$core$IIndexed$_nth$arity$2(null,i__23406_23424);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_23425)].join('')),"}"], 0));

var G__23426 = seq__23403_23421;
var G__23427 = chunk__23404_23422;
var G__23428 = count__23405_23423;
var G__23429 = (i__23406_23424 + (1));
seq__23403_23421 = G__23426;
chunk__23404_23422 = G__23427;
count__23405_23423 = G__23428;
i__23406_23424 = G__23429;
continue;
} else {
var temp__6738__auto___23430 = cljs.core.seq(seq__23403_23421);
if(temp__6738__auto___23430){
var seq__23403_23431__$1 = temp__6738__auto___23430;
if(cljs.core.chunked_seq_QMARK_(seq__23403_23431__$1)){
var c__10350__auto___23432 = cljs.core.chunk_first(seq__23403_23431__$1);
var G__23433 = cljs.core.chunk_rest(seq__23403_23431__$1);
var G__23434 = c__10350__auto___23432;
var G__23435 = cljs.core.count(c__10350__auto___23432);
var G__23436 = (0);
seq__23403_23421 = G__23433;
chunk__23404_23422 = G__23434;
count__23405_23423 = G__23435;
i__23406_23424 = G__23436;
continue;
} else {
var protocol_23437 = cljs.core.first(seq__23403_23431__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_23437)].join('')),"}"], 0));

var G__23438 = cljs.core.next(seq__23403_23431__$1);
var G__23439 = null;
var G__23440 = (0);
var G__23441 = (0);
seq__23403_23421 = G__23438;
chunk__23404_23422 = G__23439;
count__23405_23423 = G__23440;
i__23406_23424 = G__23441;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__23407_23442 = cljs.core.seq(fields__$1);
var chunk__23408_23443 = null;
var count__23409_23444 = (0);
var i__23410_23445 = (0);
while(true){
if((i__23410_23445 < count__23409_23444)){
var fld_23446 = chunk__23408_23443.cljs$core$IIndexed$_nth$arity$2(null,i__23410_23445);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_23446," = ",fld_23446,";"], 0));

var G__23447 = seq__23407_23442;
var G__23448 = chunk__23408_23443;
var G__23449 = count__23409_23444;
var G__23450 = (i__23410_23445 + (1));
seq__23407_23442 = G__23447;
chunk__23408_23443 = G__23448;
count__23409_23444 = G__23449;
i__23410_23445 = G__23450;
continue;
} else {
var temp__6738__auto___23451 = cljs.core.seq(seq__23407_23442);
if(temp__6738__auto___23451){
var seq__23407_23452__$1 = temp__6738__auto___23451;
if(cljs.core.chunked_seq_QMARK_(seq__23407_23452__$1)){
var c__10350__auto___23453 = cljs.core.chunk_first(seq__23407_23452__$1);
var G__23454 = cljs.core.chunk_rest(seq__23407_23452__$1);
var G__23455 = c__10350__auto___23453;
var G__23456 = cljs.core.count(c__10350__auto___23453);
var G__23457 = (0);
seq__23407_23442 = G__23454;
chunk__23408_23443 = G__23455;
count__23409_23444 = G__23456;
i__23410_23445 = G__23457;
continue;
} else {
var fld_23458 = cljs.core.first(seq__23407_23452__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_23458," = ",fld_23458,";"], 0));

var G__23459 = cljs.core.next(seq__23407_23452__$1);
var G__23460 = null;
var G__23461 = (0);
var G__23462 = (0);
seq__23407_23442 = G__23459;
chunk__23408_23443 = G__23460;
count__23409_23444 = G__23461;
i__23410_23445 = G__23462;
continue;
}
} else {
}
}
break;
}

var seq__23411_23463 = cljs.core.seq(pmasks);
var chunk__23412_23464 = null;
var count__23413_23465 = (0);
var i__23414_23466 = (0);
while(true){
if((i__23414_23466 < count__23413_23465)){
var vec__23415_23467 = chunk__23412_23464.cljs$core$IIndexed$_nth$arity$2(null,i__23414_23466);
var pno_23468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23415_23467,(0),null);
var pmask_23469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23415_23467,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_23468,"$ = ",pmask_23469,";"], 0));

var G__23470 = seq__23411_23463;
var G__23471 = chunk__23412_23464;
var G__23472 = count__23413_23465;
var G__23473 = (i__23414_23466 + (1));
seq__23411_23463 = G__23470;
chunk__23412_23464 = G__23471;
count__23413_23465 = G__23472;
i__23414_23466 = G__23473;
continue;
} else {
var temp__6738__auto___23474 = cljs.core.seq(seq__23411_23463);
if(temp__6738__auto___23474){
var seq__23411_23475__$1 = temp__6738__auto___23474;
if(cljs.core.chunked_seq_QMARK_(seq__23411_23475__$1)){
var c__10350__auto___23476 = cljs.core.chunk_first(seq__23411_23475__$1);
var G__23477 = cljs.core.chunk_rest(seq__23411_23475__$1);
var G__23478 = c__10350__auto___23476;
var G__23479 = cljs.core.count(c__10350__auto___23476);
var G__23480 = (0);
seq__23411_23463 = G__23477;
chunk__23412_23464 = G__23478;
count__23413_23465 = G__23479;
i__23414_23466 = G__23480;
continue;
} else {
var vec__23418_23481 = cljs.core.first(seq__23411_23475__$1);
var pno_23482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23418_23481,(0),null);
var pmask_23483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23418_23481,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_23482,"$ = ",pmask_23483,";"], 0));

var G__23484 = cljs.core.next(seq__23411_23475__$1);
var G__23485 = null;
var G__23486 = (0);
var G__23487 = (0);
seq__23411_23463 = G__23484;
chunk__23412_23464 = G__23485;
count__23413_23465 = G__23486;
i__23414_23466 = G__23487;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__23488){
var map__23489 = p__23488;
var map__23489__$1 = ((((!((map__23489 == null)))?((((map__23489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23489.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23489):map__23489);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23489__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23489__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23489__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23489__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23489__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__21529__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY)], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__23491){
var map__23492 = p__23491;
var map__23492__$1 = ((((!((map__23492 == null)))?((((map__23492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23492):map__23492);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23492__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23492__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23492__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23492__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23492__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__9427__auto__ = code;
if(cljs.core.truth_(and__9427__auto__)){
var G__23494 = clojure.string.trim(code);
var G__23495 = "/*";
return goog.string.startsWith(G__23494,G__23495);
} else {
return and__9427__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([code], 0));
} else {
var env__21529__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([code], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__21529__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('cljs.core');"], 0));

var seq__23509 = cljs.core.seq(table);
var chunk__23510 = null;
var count__23511 = (0);
var i__23512 = (0);
while(true){
if((i__23512 < count__23511)){
var vec__23513 = chunk__23510.cljs$core$IIndexed$_nth$arity$2(null,i__23512);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23513,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23513,(1),null);
var ns_23519 = cljs.core.namespace(sym);
var name_23520 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot emit constant for type "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";\n"], 0));

var G__23521 = seq__23509;
var G__23522 = chunk__23510;
var G__23523 = count__23511;
var G__23524 = (i__23512 + (1));
seq__23509 = G__23521;
chunk__23510 = G__23522;
count__23511 = G__23523;
i__23512 = G__23524;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__23509);
if(temp__6738__auto__){
var seq__23509__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23509__$1)){
var c__10350__auto__ = cljs.core.chunk_first(seq__23509__$1);
var G__23525 = cljs.core.chunk_rest(seq__23509__$1);
var G__23526 = c__10350__auto__;
var G__23527 = cljs.core.count(c__10350__auto__);
var G__23528 = (0);
seq__23509 = G__23525;
chunk__23510 = G__23526;
count__23511 = G__23527;
i__23512 = G__23528;
continue;
} else {
var vec__23516 = cljs.core.first(seq__23509__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23516,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23516,(1),null);
var ns_23529 = cljs.core.namespace(sym);
var name_23530 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot emit constant for type "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";\n"], 0));

var G__23531 = cljs.core.next(seq__23509__$1);
var G__23532 = null;
var G__23533 = (0);
var G__23534 = (0);
seq__23509 = G__23531;
chunk__23510 = G__23532;
count__23511 = G__23533;
i__23512 = G__23534;
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
var args23535 = [];
var len__10660__auto___23542 = arguments.length;
var i__10661__auto___23543 = (0);
while(true){
if((i__10661__auto___23543 < len__10660__auto___23542)){
args23535.push((arguments[i__10661__auto___23543]));

var G__23544 = (i__10661__auto___23543 + (1));
i__10661__auto___23543 = G__23544;
continue;
} else {
}
break;
}

var G__23537 = args23535.length;
switch (G__23537) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23535.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,(function (){var G__23538 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23538) : cljs.core.atom.call(null,G__23538));
})(),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_23546 = cljs.core.first(ks);
var vec__23539_23547 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_23546);
var top_23548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23539_23547,(0),null);
var prefix_SINGLEQUOTE__23549 = vec__23539_23547;
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_23546)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__23549) == null))){
if(!((cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(top_level) : cljs.core.deref.call(null,top_level)),top_23548)) || (cljs.core.contains_QMARK_(known_externs,top_23548)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__23549)),";"], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_23548);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__23549)),";"], 0));
}
} else {
}

var m_23550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_23546);
if(cljs.core.empty_QMARK_(m_23550)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__23549,m_23550,top_level,known_externs);
}

var G__23551 = cljs.core.next(ks);
ks = G__23551;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;

