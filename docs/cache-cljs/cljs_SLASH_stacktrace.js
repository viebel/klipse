// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants false}
goog.provide('cljs.stacktrace');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
if(typeof cljs.stacktrace.parse_stacktrace !== 'undefined'){
} else {
/**
 * Parse a JavaScript stacktrace string into a canonical data form. The
 *   arguments:
 * 
 *   repl-env - the repl environment, an optional map with :host and :port keys
 *           if the stacktrace includes url, not file references
 *   st       - the original stacktrace string to parse
 *   err      - an error map. :ua-product key defines the type of stacktrace parser
 *           to use, for example :chrome
 *   opts     - additional options. :output-dir maybe given in this argument if
 *           :host and :port do not apply, for example, a file path
 * 
 *   The canonical stacktrace representation can easily be mapped to a
 *   ClojureScript one see mapped-stacktrace and mapped-stacktrace-str
 */
cljs.stacktrace.parse_stacktrace = (function (){var method_table__10470__auto__ = (function (){var G__17771 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17771) : cljs.core.atom.call(null,G__17771));
})();
var prefer_table__10471__auto__ = (function (){var G__17772 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17772) : cljs.core.atom.call(null,G__17772));
})();
var method_cache__10472__auto__ = (function (){var G__17773 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17773) : cljs.core.atom.call(null,G__17773));
})();
var cached_hierarchy__10473__auto__ = (function (){var G__17774 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17774) : cljs.core.atom.call(null,G__17774));
})();
var hierarchy__10474__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.stacktrace","parse-stacktrace"),((function (method_table__10470__auto__,prefer_table__10471__auto__,method_cache__10472__auto__,cached_hierarchy__10473__auto__,hierarchy__10474__auto__){
return (function (repl_env,st,err,opts){
return new cljs.core.Keyword(null,"ua-product","ua-product",938384227).cljs$core$IFn$_invoke$arity$1(err);
});})(method_table__10470__auto__,prefer_table__10471__auto__,method_cache__10472__auto__,cached_hierarchy__10473__auto__,hierarchy__10474__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__10474__auto__,method_table__10470__auto__,prefer_table__10471__auto__,method_cache__10472__auto__,cached_hierarchy__10473__auto__));
})();
}
cljs.stacktrace.parse_int = (function cljs$stacktrace$parse_int(s){
return parseInt(s,(10));
});
cljs.stacktrace.starts_with_QMARK_ = (function cljs$stacktrace$starts_with_QMARK_(s0,s1){
return goog.string.startsWith(s0,s1);
});
cljs.stacktrace.ends_with_QMARK_ = (function cljs$stacktrace$ends_with_QMARK_(s0,s1){
return goog.string.endsWith(s0,s1);
});
cljs.stacktrace.string__GT_regex = (function cljs$stacktrace$string__GT_regex(s){
return (new RegExp(s));
});
cljs.stacktrace.output_directory = (function cljs$stacktrace$output_directory(opts){
var or__9439__auto__ = new cljs.core.Keyword(null,"output-dir","output-dir",-290956991).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return "out";
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (repl_env,st,err,opts){
return st;
}));
cljs.stacktrace.parse_file_line_column = (function cljs$stacktrace$parse_file_line_column(flc){
if(cljs.core.not(cljs.core.re_find(/:/,flc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flc,null,null], null);
} else {
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(flc,/:/);
var vec__17872 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (xs){
return (function (p__17879,p__17880){
var vec__17881 = p__17879;
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17881,(0),null);
var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17881,(1),null);
var vec__17885 = p__17880;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17885,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17885,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pre,x),post], null);
}
});})(xs))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.count(xs),(0),(-1))));
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17872,(0),null);
var vec__17875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17872,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17875,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17875,(1),null);
var file = clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17892 = file;
if(cljs.stacktrace.starts_with_QMARK_(file,"(")){
return clojure.string.replace(G__17892,"(","");
} else {
return G__17892;
}
})(),cljs.stacktrace.parse_int((function (){var G__17893 = line;
if(cljs.stacktrace.ends_with_QMARK_(line,")")){
return clojure.string.replace(G__17893,")","");
} else {
return G__17893;
}
})()),cljs.stacktrace.parse_int((function (){var G__17894 = column;
if(cljs.stacktrace.ends_with_QMARK_(column,")")){
return clojure.string.replace(G__17894,")","");
} else {
return G__17894;
}
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__17931,file,p__17932){
var map__17948 = p__17931;
var map__17948__$1 = ((((!((map__17948 == null)))?((((map__17948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17948):map__17948);
var repl_env = map__17948__$1;
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17948__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var host_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17948__$1,new cljs.core.Keyword(null,"host-port","host-port",1956551772));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17948__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var map__17949 = p__17932;
var map__17949__$1 = ((((!((map__17949 == null)))?((((map__17949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17949):map__17949);
var opts = map__17949__$1;
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17949__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex([cljs.core.str.cljs$core$IFn$_invoke$arity$1("http://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__9439__auto__ = host_port;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return port;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('')):"");
var match = (cljs.core.truth_(host)?cljs.core.re_find(urlpat,file):cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991)));
if(cljs.core.truth_(match)){
return clojure.string.replace(clojure.string.replace(file,urlpat,""),cljs.stacktrace.string__GT_regex([cljs.core.str.cljs$core$IFn$_invoke$arity$1("^"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__9439__auto__ = (function (){var and__9427__auto__ = asset_path;
if(cljs.core.truth_(and__9427__auto__)){
return clojure.string.replace(asset_path,/^\//,"");
} else {
return and__9427__auto__;
}
})();
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return cljs.stacktrace.output_directory(opts);
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('')),"");
} else {
var temp__6736__auto__ = new cljs.core.Keyword(null,"asset-root","asset-root",1771735072).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__6736__auto__)){
var asset_root = temp__6736__auto__;
return clojure.string.replace(file,asset_root,"");
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Could not relativize URL "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parse-stacktrace","parse-stacktrace",-38208461),new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"relativize-url","relativize-url",621482324)], null));
}
}
});
cljs.stacktrace.chrome_st_el__GT_frame = (function cljs$stacktrace$chrome_st_el__GT_frame(repl_env,st_el,opts){
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(st_el,/\s+at\s+/,""),/\s+/);
var vec__18004 = ((((1) === cljs.core.count(xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(xs),cljs.core.last(xs)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18004,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18004,(1),null);
var vec__18007 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18007,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18007,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18007,(2),null);
if(cljs.core.truth_((function (){var and__9427__auto__ = file;
if(cljs.core.truth_(and__9427__auto__)){
var and__9427__auto____$1 = function$;
if(cljs.core.truth_(and__9427__auto____$1)){
var and__9427__auto____$2 = line;
if(cljs.core.truth_(and__9427__auto____$2)){
return column;
} else {
return and__9427__auto____$2;
}
} else {
return and__9427__auto____$1;
}
} else {
return and__9427__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file(repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace(function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace(function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"chrome","chrome",1718738387),(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18034_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame(repl_env,p1__18034_SHARP_,opts);
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__18032_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__18032_SHARP_,"    at eval"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__18031_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__18031_SHARP_,"Error");
}),clojure.string.split_lines(st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__18057 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18057,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18057,(1),null);
var vec__18060 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18060,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18060,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18060,(2),null);
if(cljs.core.truth_((function (){var and__9427__auto__ = file;
if(cljs.core.truth_(and__9427__auto__)){
var and__9427__auto____$1 = function$;
if(cljs.core.truth_(and__9427__auto____$1)){
var and__9427__auto____$2 = line;
if(cljs.core.truth_(and__9427__auto____$2)){
return column;
} else {
return and__9427__auto____$2;
}
} else {
return and__9427__auto____$1;
}
} else {
return and__9427__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file(repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim(function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim(function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"safari","safari",497115653),(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18083_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame(repl_env,p1__18083_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__18082_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__18082_SHARP_,"eval code"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__18081_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__18081_SHARP_,"Error");
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.firefox_clean_function = (function cljs$stacktrace$firefox_clean_function(f){
var f__$1 = f;
var f__$2 = ((clojure.string.blank_QMARK_(f__$1))?null:((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(f__$1.indexOf("</"),(-1)))?(function (){var idx = f__$1.indexOf("</");
return f__$1.substring((idx + (2)));
})():f__$1
));
return clojure.string.replace(clojure.string.replace(f__$2,/</,""),(new RegExp("\\/")),"");
});
cljs.stacktrace.firefox_st_el__GT_frame = (function cljs$stacktrace$firefox_st_el__GT_frame(repl_env,st_el,opts){
var vec__18128 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18128,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18128,(1),null);
var vec__18131 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18131,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18131,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18131,(2),null);
if(cljs.core.truth_((function (){var and__9427__auto__ = file;
if(cljs.core.truth_(and__9427__auto__)){
var and__9427__auto____$1 = function$;
if(cljs.core.truth_(and__9427__auto____$1)){
var and__9427__auto____$2 = line;
if(cljs.core.truth_(and__9427__auto____$2)){
return column;
} else {
return and__9427__auto____$2;
}
} else {
return and__9427__auto____$1;
}
} else {
return and__9427__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file(repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function(function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function(function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"firefox","firefox",1283768880),(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18156_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame(repl_env,p1__18156_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__18150_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__18150_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__18149_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__18149_SHARP_,"Error");
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rhino","rhino",1962118035),(function (repl_env,st,err,p__18158){
var map__18159 = p__18158;
var map__18159__$1 = ((((!((map__18159 == null)))?((((map__18159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18159):map__18159);
var opts = map__18159__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18159__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__18159,map__18159__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_(frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var vec__18213 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str,/:/);
var file_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18213,(0),null);
var line_fn_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18213,(1),null);
var file = clojure.string.replace(file_side,/\s+at\s+/,"");
var vec__18216 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(line_fn_side,/\s+/);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18216,(0),null);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18216,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace(file,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),(cljs.core.truth_(function$)?clojure.string.replace(clojure.string.replace(function$,"(",""),")",""):null),new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__9427__auto__ = line;
if(cljs.core.truth_(and__9427__auto__)){
return !(clojure.string.blank_QMARK_(line));
} else {
return and__9427__auto__;
}
})())?cljs.stacktrace.parse_int(line):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
});})(map__18159,map__18159__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nashorn","nashorn",988299963),(function (repl_env,st,err,p__18235){
var map__18236 = p__18235;
var map__18236__$1 = ((((!((map__18236 == null)))?((((map__18236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18236.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18236):map__18236);
var opts = map__18236__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18236__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__18236,map__18236__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_(frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var frame_str__$1 = clojure.string.replace(frame_str,/\s+at\s+/,"");
var vec__18277 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str__$1,/\s+/);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18277,(0),null);
var file_and_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18277,(1),null);
var vec__18280 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_and_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18280,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18280,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace(file_part.substring((1)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__9427__auto__ = line_part;
if(cljs.core.truth_(and__9427__auto__)){
return !(clojure.string.blank_QMARK_(line_part));
} else {
return and__9427__auto__;
}
})())?cljs.stacktrace.parse_int(line_part.substring((0),(cljs.core.count(line_part) - (1)))):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
});})(map__18236,map__18236__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),(function (repl_env,st,err,p__18292){
var map__18293 = p__18292;
var map__18293__$1 = ((((!((map__18293 == null)))?((((map__18293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18293.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18293):map__18293);
var opts = map__18293__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18293__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var parse_source_loc_info = ((function (map__18293,map__18293__$1,opts,output_dir){
return (function cljs$stacktrace$parse_source_loc_info(x){
if(cljs.core.truth_((function (){var and__9427__auto__ = x;
if(cljs.core.truth_(and__9427__auto__)){
return !(clojure.string.blank_QMARK_(x));
} else {
return and__9427__auto__;
}
})())){
return cljs.stacktrace.parse_int(x);
} else {
return null;
}
});})(map__18293,map__18293__$1,opts,output_dir))
;
var process_frame = ((function (map__18293,map__18293__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_(frame_str)) || ((cljs.core.re_find(/^\s+at/,frame_str) == null))){
return null;
} else {
var frame_str__$1 = clojure.string.replace(frame_str,/\s+at\s+/,"");
if(clojure.string.starts_with_QMARK_(frame_str__$1,"repl:")){
return null;
} else {
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str__$1,/\s+/);
var vec__18317 = ((((2) === cljs.core.count(parts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(parts),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.second(parts),(1),(cljs.core.count(cljs.core.second(parts)) - (1)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(parts)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18317,(0),null);
var file_AMPERSAND_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18317,(1),null);
var vec__18320 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_AMPERSAND_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18320,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18320,(1),null);
var col_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18320,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),(cljs.core.truth_(function$)?(function (){var G__18324 = file_part;
if(cljs.core.truth_(output_dir)){
return clojure.string.replace(G__18324,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join(''),"");
} else {
return G__18324;
}
})():file_part),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),parse_source_loc_info(line_part),new cljs.core.Keyword(null,"column","column",2078222095),parse_source_loc_info(col_part)], null);
}
}
});})(map__18293,map__18293__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.remove_ext = (function cljs$stacktrace$remove_ext(file){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(file,/\.js$/,""),/\.cljs$/,""),/\.cljc$/,""),/\.clj$/,"");
});
/**
 * Given a cljs.source-map source map data structure map a generated line
 * and column back to the original line, column, and function called.
 */
cljs.stacktrace.mapped_line_column_call = (function cljs$stacktrace$mapped_line_column_call(sms,file,line,column){
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sms,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.stacktrace.remove_ext(file),"/",".")));
var get_best_column = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_get_best_column(columns,column__$1){
return cljs.core.last((function (){var or__9439__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(columns,cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (source_map){
return (function (p1__18329_SHARP_){
return (p1__18329_SHARP_ <= (column__$1 - (1)));
});})(source_map))
,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(columns)))));
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return cljs.core.second(cljs.core.first(columns));
}
})());
});})(source_map))
;
var adjust = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_adjust(mapped){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (source_map){
return (function (p1__18330_SHARP_,p2__18331_SHARP_){
return (p1__18330_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18330_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__18331_SHARP_) : p1__18330_SHARP_.call(null,p2__18331_SHARP_));
});})(source_map))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.inc,cljs.core.identity], null),mapped));
});})(source_map))
;
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null);
var temp__6736__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(source_map,(line - (1)));
if(cljs.core.truth_(temp__6736__auto__)){
var columns = temp__6736__auto__;
return adjust(cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_best_column(columns,column),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"name","name",1843675177)], null)));
} else {
return default$;
}
});
/**
 * Given opts and a canonicalized JavaScript stacktrace frame, return the
 *   ClojureScript frame.
 */
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__18344,sms,opts){
var map__18350 = p__18344;
var map__18350__$1 = ((((!((map__18350 == null)))?((((map__18350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18350.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18350):map__18350);
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18350__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18350__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18350__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18350__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var no_source_file_QMARK_ = ((cljs.core.not(file))?true:cljs.stacktrace.starts_with_QMARK_(file,"<"));
var vec__18352 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call(sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18352,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18352,(1),null);
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18352,(2),null);
var file_SINGLEQUOTE_ = ((no_source_file_QMARK_)?null:((cljs.stacktrace.ends_with_QMARK_(file,".js"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(file,(0),(cljs.core.count(file) - (3)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".cljs")].join(''):file));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"call","call",-519999866),call,new cljs.core.Keyword(null,"file","file",-1269645878),((no_source_file_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("NO_SOURCE_FILE"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null))].join(''):file_SINGLEQUOTE_),new cljs.core.Keyword(null,"line","line",212345235),line_SINGLEQUOTE_,new cljs.core.Keyword(null,"column","column",2078222095),column_SINGLEQUOTE_], null);
});
/**
 * Given a vector representing the canonicalized JavaScript stacktrace
 * return the ClojureScript stacktrace. The canonical stacktrace must be
 * in the form:
 * 
 *  [{:file <string>
 *    :function <string>
 *    :line <integer>
 *    :column <integer>}*]
 * 
 * :file must be a URL path (without protocol) relative to :output-dir or a
 * identifier delimited by angle brackets. The returned mapped stacktrace will
 * also contain :url entries to the original sources if it can be determined
 * from the classpath.
 */
cljs.stacktrace.mapped_stacktrace = (function cljs$stacktrace$mapped_stacktrace(var_args){
var args18357 = [];
var len__10660__auto___18360 = arguments.length;
var i__10661__auto___18361 = (0);
while(true){
if((i__10661__auto___18361 < len__10660__auto___18360)){
args18357.push((arguments[i__10661__auto___18361]));

var G__18362 = (i__10661__auto___18361 + (1));
i__10661__auto___18361 = G__18362;
continue;
} else {
}
break;
}

var G__18359 = args18357.length;
switch (G__18359) {
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18357.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var call__GT_function = (function cljs$stacktrace$call__GT_function(x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"function","function",-2127255473)],[new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x)]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var call_merge = (function cljs$stacktrace$call_merge(function$,call){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (munged_fn_name,unmunged_call_name){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(munged_fn_name,clojure.string.replace(cljs.core.munge(unmunged_call_name),".","$"))){
return unmunged_call_name;
} else {
return munged_fn_name;
}
}),cljs.core.array_seq([function$,call], 0));
});
var mapped_frames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.memoize((function (p1__18355_SHARP_){
return cljs.stacktrace.mapped_frame(p1__18355_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(call_merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (mapped_frames){
return (function (p1__18356_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18356_SHARP_,new cljs.core.Keyword(null,"call","call",-519999866));
});})(mapped_frames))
,mapped_frames),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(cljs.core.map.cljs$core$IFn$_invoke$arity$2(call__GT_function,mapped_frames)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))));
});

cljs.stacktrace.mapped_stacktrace.cljs$lang$maxFixedArity = 3;

/**
 * Given a vector representing the canonicalized JavaScript stacktrace and a map
 *   of library names to decoded source maps, print the ClojureScript stacktrace .
 *   See mapped-stacktrace.
 */
cljs.stacktrace.mapped_stacktrace_str = (function cljs$stacktrace$mapped_stacktrace_str(var_args){
var args18368 = [];
var len__10660__auto___18386 = arguments.length;
var i__10661__auto___18387 = (0);
while(true){
if((i__10661__auto___18387 < len__10660__auto___18386)){
args18368.push((arguments[i__10661__auto___18387]));

var G__18389 = (i__10661__auto___18387 + (1));
i__10661__auto___18387 = G__18389;
continue;
} else {
}
break;
}

var G__18374 = args18368.length;
switch (G__18374) {
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18368.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__10531__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_18375_18392 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_18376_18393 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_18375_18392,_STAR_print_fn_STAR_18376_18393,sb__10531__auto__){
return (function (x__10532__auto__){
return sb__10531__auto__.append(x__10532__auto__);
});})(_STAR_print_newline_STAR_18375_18392,_STAR_print_fn_STAR_18376_18393,sb__10531__auto__))
;

try{var seq__18377_18397 = cljs.core.seq(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,opts));
var chunk__18378_18398 = null;
var count__18379_18399 = (0);
var i__18380_18400 = (0);
while(true){
if((i__18380_18400 < count__18379_18399)){
var map__18381_18401 = chunk__18378_18398.cljs$core$IIndexed$_nth$arity$2(null,i__18380_18400);
var map__18381_18402__$1 = ((((!((map__18381_18401 == null)))?((((map__18381_18401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18381_18401.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18381_18401):map__18381_18401);
var function_18403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18381_18402__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_18404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18381_18402__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_18405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18381_18402__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18381_18402__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\t",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_18403)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_18403),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_18404),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_18405)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18405)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_18406)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_18406)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('')], 0));

var G__18411 = seq__18377_18397;
var G__18412 = chunk__18378_18398;
var G__18413 = count__18379_18399;
var G__18414 = (i__18380_18400 + (1));
seq__18377_18397 = G__18411;
chunk__18378_18398 = G__18412;
count__18379_18399 = G__18413;
i__18380_18400 = G__18414;
continue;
} else {
var temp__6738__auto___18415 = cljs.core.seq(seq__18377_18397);
if(temp__6738__auto___18415){
var seq__18377_18416__$1 = temp__6738__auto___18415;
if(cljs.core.chunked_seq_QMARK_(seq__18377_18416__$1)){
var c__10350__auto___18417 = cljs.core.chunk_first(seq__18377_18416__$1);
var G__18418 = cljs.core.chunk_rest(seq__18377_18416__$1);
var G__18419 = c__10350__auto___18417;
var G__18420 = cljs.core.count(c__10350__auto___18417);
var G__18421 = (0);
seq__18377_18397 = G__18418;
chunk__18378_18398 = G__18419;
count__18379_18399 = G__18420;
i__18380_18400 = G__18421;
continue;
} else {
var map__18383_18422 = cljs.core.first(seq__18377_18416__$1);
var map__18383_18423__$1 = ((((!((map__18383_18422 == null)))?((((map__18383_18422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18383_18422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18383_18422):map__18383_18422);
var function_18424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18383_18423__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_18425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18383_18423__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_18426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18383_18423__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18383_18423__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\t",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_18424)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_18424),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_18425),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_18426)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18426)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_18427)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_18427)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('')], 0));

var G__18431 = cljs.core.next(seq__18377_18416__$1);
var G__18432 = null;
var G__18433 = (0);
var G__18434 = (0);
seq__18377_18397 = G__18431;
chunk__18378_18398 = G__18432;
count__18379_18399 = G__18433;
i__18380_18400 = G__18434;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_18376_18393;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_18375_18392;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__10531__auto__)].join('');
});

cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3;

