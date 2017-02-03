goog.provide("cljs.stacktrace");
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
(function (){
cljs.stacktrace.parse_stacktrace = (function (){var method_table__25779__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25780__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25781__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25782__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25783__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.stacktrace","parse-stacktrace"),((function (method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__,hierarchy__25783__auto__){
return (function (repl_env,st,err,opts){
return new cljs.core.Keyword(null,"ua-product","ua-product",(938384227)).cljs$core$IFn$_invoke$arity$1(err);
});})(method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__,hierarchy__25783__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__25783__auto__,method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__));
})(); return (
new cljs.core.Var(function(){return cljs.stacktrace.parse_stacktrace;},new cljs.core.Symbol("cljs.stacktrace","parse-stacktrace","cljs.stacktrace/parse-stacktrace",(-474316893),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.stacktrace","cljs.stacktrace",(880035689),null),new cljs.core.Symbol(null,"parse-stacktrace","parse-stacktrace",(1602323066),null),"cljs/stacktrace.cljc",(27),(1),(17),(17),cljs.core.List.EMPTY,"Parse a JavaScript stacktrace string into a canonical data form. The\n  arguments:\n\n  repl-env - the repl environment, an optional map with :host and :port keys\n             if the stacktrace includes url, not file references\n  st       - the original stacktrace string to parse\n  err      - an error map. :ua-product key defines the type of stacktrace parser\n             to use, for example :chrome\n  opts     - additional options. :output-dir maybe given in this argument if\n             :host and :port do not apply, for example, a file path\n\n  The canonical stacktrace representation can easily be mapped to a\n  ClojureScript one see mapped-stacktrace and mapped-stacktrace-str",(cljs.core.truth_(cljs.stacktrace.parse_stacktrace)?cljs.stacktrace.parse_stacktrace.cljs$lang$test:null)])));})()
;
}
(function (){
cljs.stacktrace.parse_int = (function cljs$stacktrace$parse_int(s){
return parseInt(s,(10));
}); return (
new cljs.core.Var(function(){return cljs.stacktrace.parse_int;},new cljs.core.Symbol("cljs.stacktrace","parse-int","cljs.stacktrace/parse-int",(1876846434),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.stacktrace","cljs.stacktrace",(880035689),null),new cljs.core.Symbol(null,"parse-int","parse-int",(-742710469),null),"cljs/stacktrace.cljc",(16),(1),(33),(33),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),null,(cljs.core.truth_(cljs.stacktrace.parse_int)?cljs.stacktrace.parse_int.cljs$lang$test:null)])));})()
;
(function (){
cljs.stacktrace.starts_with_QMARK_ = (function cljs$stacktrace$starts_with_QMARK_(s0,s1){
return goog.string.startsWith(s0,s1);
}); return (
new cljs.core.Var(function(){return cljs.stacktrace.starts_with_QMARK_;},new cljs.core.Symbol("cljs.stacktrace","starts-with?","cljs.stacktrace/starts-with?",(-1335995232),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.stacktrace","cljs.stacktrace",(880035689),null),new cljs.core.Symbol(null,"starts-with?","starts-with?",(1014173927),null),"cljs/stacktrace.cljc",(19),(1),(37),(37),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"s0","s0",(1289819691),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"String","String",(-2070057435),null)], null)),new cljs.core.Symbol(null,"s1","s1",(338671490),null)], null)),null,((cljs.stacktrace.starts_with_QMARK_)?cljs.stacktrace.starts_with_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.stacktrace.ends_with_QMARK_ = (function cljs$stacktrace$ends_with_QMARK_(s0,s1){
return goog.string.endsWith(s0,s1);
}); return (
new cljs.core.Var(function(){return cljs.stacktrace.ends_with_QMARK_;},new cljs.core.Symbol("cljs.stacktrace","ends-with?","cljs.stacktrace/ends-with?",(1867023977),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.stacktrace","cljs.stacktrace",(880035689),null),new cljs.core.Symbol(null,"ends-with?","ends-with?",(-346570208),null),"cljs/stacktrace.cljc",(17),(1),(43),(43),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"s0","s0",(1289819691),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"String","String",(-2070057435),null)], null)),new cljs.core.Symbol(null,"s1","s1",(338671490),null)], null)),null,((cljs.stacktrace.ends_with_QMARK_)?cljs.stacktrace.ends_with_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.stacktrace.string__GT_regex = (function cljs$stacktrace$string__GT_regex(s){
return (new RegExp(s));
}); return (
new cljs.core.Var(function(){return cljs.stacktrace.string__GT_regex;},new cljs.core.Symbol("cljs.stacktrace","string->regex","cljs.stacktrace/string->regex",(-51792873),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.stacktrace","cljs.stacktrace",(880035689),null),new cljs.core.Symbol(null,"string->regex","string->regex",(1891922088),null),"cljs/stacktrace.cljc",(20),(1),(49),(49),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),null,(cljs.core.truth_(cljs.stacktrace.string__GT_regex)?cljs.stacktrace.string__GT_regex.cljs$lang$test:null)])));})()
;
(function (){
cljs.stacktrace.output_directory = (function cljs$stacktrace$output_directory(opts){
var or__23109__auto__ = new cljs.core.Keyword(null,"output-dir","output-dir",(-290956991)).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
return "out";
}
}); return (
new cljs.core.Var(function(){return cljs.stacktrace.output_directory;},new cljs.core.Symbol("cljs.stacktrace","output-directory","cljs.stacktrace/output-directory",(-1836127815),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.stacktrace","cljs.stacktrace",(880035689),null),new cljs.core.Symbol(null,"output-directory","output-directory",(519253088),null),"cljs/stacktrace.cljc",(23),(1),(53),(53),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.stacktrace.output_directory)?cljs.stacktrace.output_directory.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (repl_env,st,err,opts){
return st;
}));
(function (){
cljs.stacktrace.parse_file_line_column = (function cljs$stacktrace$parse_file_line_column(flc){
if(cljs.core.not.call(null,cljs.core.re_find.call(null,/:/,flc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flc,null,null], null);
} else {
var xs = clojure.string.split.call(null,flc,/:/);
var vec__39 = cljs.core.reduce.call(null,((function (xs){
return (function (p__45,p__46){
var vec__47 = p__45;
var pre = cljs.core.nth.call(null,vec__47,(0),null);
var post = cljs.core.nth.call(null,vec__47,(1),null);
var vec__50 = p__46;
var x = cljs.core.nth.call(null,vec__50,(0),null);
var i = cljs.core.nth.call(null,vec__50,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.call(null,post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,pre,x),post], null);
}
});})(xs))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.call(null,cljs.core.vector,xs,cljs.core.range.call(null,cljs.core.count.call(null,xs),(0),(-1))));
var pre = cljs.core.nth.call(null,vec__39,(0),null);
var vec__42 = cljs.core.nth.call(null,vec__39,(1),null);
var line = cljs.core.nth.call(null,vec__42,(0),null);
var column = cljs.core.nth.call(null,vec__42,(1),null);
var file = clojure.string.join.call(null,":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__53 = file;
var G__53__$1 = ((cljs.stacktrace.starts_with_QMARK_.call(null,file,"("))?clojure.string.replace.call(null,G__53,"(",""):G__53);
return G__53__$1;
})(),cljs.stacktrace.parse_int.call(null,(function (){var G__54 = line;
var G__54__$1 = ((cljs.stacktrace.ends_with_QMARK_.call(null,line,")"))?clojure.string.replace.call(null,G__54,")",""):G__54);
return G__54__$1;
})()),cljs.stacktrace.parse_int.call(null,(function (){var G__55 = column;
var G__55__$1 = ((cljs.stacktrace.ends_with_QMARK_.call(null,column,")"))?clojure.string.replace.call(null,G__55,")",""):G__55);
return G__55__$1;
})())], null);
}
}); return (
new cljs.core.Var(function(){return cljs.stacktrace.parse_file_line_column;},new cljs.core.Symbol("cljs.stacktrace","parse-file-line-column","cljs.stacktrace/parse-file-line-column",(1131191286),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.stacktrace","cljs.stacktrace",(880035689),null),new cljs.core.Symbol(null,"parse-file-line-column","parse-file-line-column",(-951462337),null),"cljs/stacktrace.cljc",(29),(1),(60),(60),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flc","flc",(-667071030),null)], null)),null,(cljs.core.truth_(cljs.stacktrace.parse_file_line_column)?cljs.stacktrace.parse_file_line_column.cljs$lang$test:null)])));})()
;
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
(function (){
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__56,file,p__57){
var map__62 = p__56;
var map__62__$1 = ((((!((map__62 == null)))?((((map__62.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62):map__62);
var repl_env = map__62__$1;
var host = cljs.core.get.call(null,map__62__$1,new cljs.core.Keyword(null,"host","host",(-1558485167)));
var host_port = cljs.core.get.call(null,map__62__$1,new cljs.core.Keyword(null,"host-port","host-port",(1956551772)));
var port = cljs.core.get.call(null,map__62__$1,new cljs.core.Keyword(null,"port","port",(1534937262)));
var map__63 = p__57;
var map__63__$1 = ((((!((map__63 == null)))?((((map__63.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63):map__63);
var opts = map__63__$1;
var asset_path = cljs.core.get.call(null,map__63__$1,new cljs.core.Keyword(null,"asset-path","asset-path",(1500889617)));
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("http://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__23109__auto__ = host_port;
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
return port;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('')):"");
var match = (cljs.core.truth_(host)?cljs.core.re_find.call(null,urlpat,file):cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"output-dir","output-dir",(-290956991))));
if(cljs.core.truth_(match)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,file,urlpat,""),cljs.stacktrace.string__GT_regex.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("^"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__23109__auto__ = (function (){var and__23067__auto__ = asset_path;
if(cljs.core.truth_(and__23067__auto__)){
return clojure.string.replace.call(null,asset_path,/^\//,"");
} else {
return and__23067__auto__;
}
})();
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
return cljs.stacktrace.output_directory.call(null,opts);
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('')),"");
} else {
var temp__21873__auto__ = new cljs.core.Keyword(null,"asset-root","asset-root",(1771735072)).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__21873__auto__)){
var asset_root = temp__21873__auto__;
return clojure.string.replace.call(null,file,asset_root,"");
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Could not relativize URL "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"parse-stacktrace","parse-stacktrace",(-38208461)),new cljs.core.Keyword(null,"reason","reason",(-2070751759)),new cljs.core.Keyword(null,"relativize-url","relativize-url",(621482324))], null));
}
}
}); return (
new cljs.core.Var(function(){return cljs.stacktrace.parse_file;},new cljs.core.Symbol("cljs.stacktrace","parse-file","cljs.stacktrace/parse-file",(-37266827),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.stacktrace","cljs.stacktrace",(880035689),null),new cljs.core.Symbol(null,"parse-file","parse-file",(-2119557570),null),"cljs/stacktrace.cljc",(17),(1),(81),(81),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"host","host",(82046360),null),new cljs.core.Symbol(null,"host-port","host-port",(-697883997),null),new cljs.core.Symbol(null,"port","port",(-1119498507),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"repl-env","repl-env",(-335972401),null)], null),new cljs.core.Symbol(null,"file","file",(370885649),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"asset-path","asset-path",(-1153546152),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)], null)),"Given a browser file url convert it into a relative path that can be used\n   to locate the original source.",(cljs.core.truth_(cljs.stacktrace.parse_file)?cljs.stacktrace.parse_file.cljs$lang$test:null)])));})()
;
(function (){
cljs.stacktrace.chrome_st_el__GT_frame = (function cljs$stacktrace$chrome_st_el__GT_frame(repl_env,st_el,opts){
var xs = clojure.string.split.call(null,clojure.string.replace.call(null,st_el,/\s+at\s+/,""),/\s+/);
var vec__72 = ((((1) === cljs.core.count.call(null,xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,xs),cljs.core.last.call(null,xs)], null));
var function$ = cljs.core.nth.call(null,vec__72,(0),null);
var flc = cljs.core.nth.call(null,vec__72,(1),null);
var vec__75 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__75,(0),null);
var line = cljs.core.nth.call(null,vec__75,(1),null);
var column = cljs.core.nth.call(null,vec__75,(2),null);
if(cljs.core.truth_((function (){var and__23067__auto__ = file;
if(cljs.core.truth_(and__23067__auto__)){
var and__23067__auto____$1 = function$;
if(cljs.core.truth_(and__23067__auto____$1)){
var and__23067__auto____$2 = line;
if(cljs.core.truth_(and__23067__auto____$2)){
return column;
} else {
return and__23067__auto____$2;
}
} else {
return and__23067__auto____$1;
}
} else {
return and__23067__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",(-1269645878)),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",(-2127255473)),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",(212345235)),line,new cljs.core.Keyword(null,"column","column",(2078222095)),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",(-1269645878)),null,new cljs.core.Keyword(null,"function","function",(-2127255473)),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",(212345235)),null,new cljs.core.Keyword(null,"column","column",(2078222095)),null], null);
}
}
}); return (
new cljs.core.Var(function(){return cljs.stacktrace.chrome_st_el__GT_frame;},new cljs.core.Symbol("cljs.stacktrace","chrome-st-el->frame","cljs.stacktrace/chrome-st-el->frame",(-585463693),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.stacktrace","cljs.stacktrace",(880035689),null),new cljs.core.Symbol(null,"chrome-st-el->frame","chrome-st-el->frame",(1497320500),null),"cljs/stacktrace.cljc",(26),(1),(111),(111),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"repl-env","repl-env",(-335972401),null),new cljs.core.Symbol(null,"st-el","st-el",(1513767801),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.stacktrace.chrome_st_el__GT_frame)?cljs.stacktrace.chrome_st_el__GT_frame.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"chrome","chrome",(1718738387)),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__3_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame.call(null,repl_env,p1__3_SHARP_,opts);
}),cljs.core.take_while.call(null,(function (p1__2_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__2_SHARP_,"    at eval"));
}),cljs.core.drop_while.call(null,(function (p1__1_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__1_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st))))));
}));
(function (){
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__84 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__84,(0),null);
var flc = cljs.core.nth.call(null,vec__84,(1),null);
var vec__87 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__87,(0),null);
var line = cljs.core.nth.call(null,vec__87,(1),null);
var column = cljs.core.nth.call(null,vec__87,(2),null);
if(cljs.core.truth_((function (){var and__23067__auto__ = file;
if(cljs.core.truth_(and__23067__auto__)){
var and__23067__auto____$1 = function$;
if(cljs.core.truth_(and__23067__auto____$1)){
var and__23067__auto____$2 = line;
if(cljs.core.truth_(and__23067__auto____$2)){
return column;
} else {
return and__23067__auto____$2;
}
} else {
return and__23067__auto____$1;
}
} else {
return and__23067__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",(-1269645878)),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",(-2127255473)),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",(212345235)),line,new cljs.core.Keyword(null,"column","column",(2078222095)),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",(-1269645878)),null,new cljs.core.Keyword(null,"function","function",(-2127255473)),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",(212345235)),null,new cljs.core.Keyword(null,"column","column",(2078222095)),null], null);
}
}
}); return (
new cljs.core.Var(function(){return cljs.stacktrace.safari_st_el__GT_frame;},new cljs.core.Symbol("cljs.stacktrace","safari-st-el->frame","cljs.stacktrace/safari-st-el->frame",(-625630752),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.stacktrace","cljs.stacktrace",(880035689),null),new cljs.core.Symbol(null,"safari-st-el->frame","safari-st-el->frame",(1184818217),null),"cljs/stacktrace.cljc",(26),(1),(212),(212),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"repl-env","repl-env",(-335972401),null),new cljs.core.Symbol(null,"st-el","st-el",(1513767801),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.stacktrace.safari_st_el__GT_frame)?cljs.stacktrace.safari_st_el__GT_frame.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"safari","safari",(497115653)),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__6_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame.call(null,repl_env,p1__6_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__5_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__5_SHARP_,"eval code"));
}),cljs.core.drop_while.call(null,(function (p1__4_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__4_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
(function (){
cljs.stacktrace.firefox_clean_function = (function cljs$stacktrace$firefox_clean_function(f){
var f__$1 = f;
var f__$2 = ((clojure.string.blank_QMARK_.call(null,f__$1))?null:((cljs.core.not_EQ_.call(null,f__$1.indexOf("</"),(-1)))?(function (){var idx = f__$1.indexOf("</");
return f__$1.substring((idx + (2)));
})():f__$1
));
var f__$3 = clojure.string.replace.call(null,clojure.string.replace.call(null,f__$2,/</,""),(new RegExp("\\/")),"");
return f__$3;
}); return (
new cljs.core.Var(function(){return cljs.stacktrace.firefox_clean_function;},new cljs.core.Symbol("cljs.stacktrace","firefox-clean-function","cljs.stacktrace/firefox-clean-function",(1426688551),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.stacktrace","cljs.stacktrace",(880035689),null),new cljs.core.Symbol(null,"firefox-clean-function","firefox-clean-function",(-689645972),null),"cljs/stacktrace.cljc",(29),(1),(294),(294),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),null,(cljs.core.truth_(cljs.stacktrace.firefox_clean_function)?cljs.stacktrace.firefox_clean_function.cljs$lang$test:null)])));})()
;
(function (){
cljs.stacktrace.firefox_st_el__GT_frame = (function cljs$stacktrace$firefox_st_el__GT_frame(repl_env,st_el,opts){
var vec__96 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__96,(0),null);
var flc = cljs.core.nth.call(null,vec__96,(1),null);
var vec__99 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__99,(0),null);
var line = cljs.core.nth.call(null,vec__99,(1),null);
var column = cljs.core.nth.call(null,vec__99,(2),null);
if(cljs.core.truth_((function (){var and__23067__auto__ = file;
if(cljs.core.truth_(and__23067__auto__)){
var and__23067__auto____$1 = function$;
if(cljs.core.truth_(and__23067__auto____$1)){
var and__23067__auto____$2 = line;
if(cljs.core.truth_(and__23067__auto____$2)){
return column;
} else {
return and__23067__auto____$2;
}
} else {
return and__23067__auto____$1;
}
} else {
return and__23067__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",(-1269645878)),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",(-2127255473)),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",(212345235)),line,new cljs.core.Keyword(null,"column","column",(2078222095)),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",(-1269645878)),null,new cljs.core.Keyword(null,"function","function",(-2127255473)),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",(212345235)),null,new cljs.core.Keyword(null,"column","column",(2078222095)),null], null);
}
}
}); return (
new cljs.core.Var(function(){return cljs.stacktrace.firefox_st_el__GT_frame;},new cljs.core.Symbol("cljs.stacktrace","firefox-st-el->frame","cljs.stacktrace/firefox-st-el->frame",(671684194),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.stacktrace","cljs.stacktrace",(880035689),null),new cljs.core.Symbol(null,"firefox-st-el->frame","firefox-st-el->frame",(-1272174039),null),"cljs/stacktrace.cljc",(27),(1),(306),(306),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"repl-env","repl-env",(-335972401),null),new cljs.core.Symbol(null,"st-el","st-el",(1513767801),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),null,(cljs.core.truth_(cljs.stacktrace.firefox_st_el__GT_frame)?cljs.stacktrace.firefox_st_el__GT_frame.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"firefox","firefox",(1283768880)),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__9_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame.call(null,repl_env,p1__9_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__8_SHARP_){
return cljs.core._EQ_.call(null,p1__8_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.call(null,(function (p1__7_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__7_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"rhino","rhino",(1962118035)),(function (repl_env,st,err,p__102){
var map__103 = p__102;
var map__103__$1 = ((((!((map__103 == null)))?((((map__103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__103):map__103);
var opts = map__103__$1;
var output_dir = cljs.core.get.call(null,map__103__$1,new cljs.core.Keyword(null,"output-dir","output-dir",(-290956991)));
var process_frame = ((function (map__103,map__103__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var vec__123 = clojure.string.split.call(null,frame_str,/:/);
var file_side = cljs.core.nth.call(null,vec__123,(0),null);
var line_fn_side = cljs.core.nth.call(null,vec__123,(1),null);
var file = clojure.string.replace.call(null,file_side,/\s+at\s+/,"");
var vec__126 = clojure.string.split.call(null,line_fn_side,/\s+/);
var line = cljs.core.nth.call(null,vec__126,(0),null);
var function$ = cljs.core.nth.call(null,vec__126,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",(-1269645878)),clojure.string.replace.call(null,file,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join(''),""),new cljs.core.Keyword(null,"function","function",(-2127255473)),(cljs.core.truth_(function$)?clojure.string.replace.call(null,clojure.string.replace.call(null,function$,"(",""),")",""):null),new cljs.core.Keyword(null,"line","line",(212345235)),(cljs.core.truth_((function (){var and__23067__auto__ = line;
if(cljs.core.truth_(and__23067__auto__)){
return !(clojure.string.blank_QMARK_.call(null,line));
} else {
return and__23067__auto__;
}
})())?cljs.stacktrace.parse_int.call(null,line):null),new cljs.core.Keyword(null,"column","column",(2078222095)),(0)], null);
}
});})(map__103,map__103__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"nashorn","nashorn",(988299963)),(function (repl_env,st,err,p__129){
var map__130 = p__129;
var map__130__$1 = ((((!((map__130 == null)))?((((map__130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__130):map__130);
var opts = map__130__$1;
var output_dir = cljs.core.get.call(null,map__130__$1,new cljs.core.Keyword(null,"output-dir","output-dir",(-290956991)));
var process_frame = ((function (map__130,map__130__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var frame_str__$1 = clojure.string.replace.call(null,frame_str,/\s+at\s+/,"");
var vec__150 = clojure.string.split.call(null,frame_str__$1,/\s+/);
var function$ = cljs.core.nth.call(null,vec__150,(0),null);
var file_and_line = cljs.core.nth.call(null,vec__150,(1),null);
var vec__153 = clojure.string.split.call(null,file_and_line,/:/);
var file_part = cljs.core.nth.call(null,vec__153,(0),null);
var line_part = cljs.core.nth.call(null,vec__153,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",(-1269645878)),clojure.string.replace.call(null,file_part.substring((1)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join(''),""),new cljs.core.Keyword(null,"function","function",(-2127255473)),function$,new cljs.core.Keyword(null,"line","line",(212345235)),(cljs.core.truth_((function (){var and__23067__auto__ = line_part;
if(cljs.core.truth_(and__23067__auto__)){
return !(clojure.string.blank_QMARK_.call(null,line_part));
} else {
return and__23067__auto__;
}
})())?cljs.stacktrace.parse_int.call(null,line_part.substring((0),(cljs.core.count.call(null,line_part) - (1)))):null),new cljs.core.Keyword(null,"column","column",(2078222095)),(0)], null);
}
});})(map__130,map__130__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"nodejs","nodejs",(321212524)),(function (repl_env,st,err,p__156){
var map__157 = p__156;
var map__157__$1 = ((((!((map__157 == null)))?((((map__157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__157.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157):map__157);
var opts = map__157__$1;
var output_dir = cljs.core.get.call(null,map__157__$1,new cljs.core.Keyword(null,"output-dir","output-dir",(-290956991)));
var parse_source_loc_info = ((function (map__157,map__157__$1,opts,output_dir){
return (function cljs$stacktrace$parse_source_loc_info(x){
if(cljs.core.truth_((function (){var and__23067__auto__ = x;
if(cljs.core.truth_(and__23067__auto__)){
return !(clojure.string.blank_QMARK_.call(null,x));
} else {
return and__23067__auto__;
}
})())){
return cljs.stacktrace.parse_int.call(null,x);
} else {
return null;
}
});})(map__157,map__157__$1,opts,output_dir))
;
var process_frame = ((function (map__157,map__157__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || ((cljs.core.re_find.call(null,/^\s+at/,frame_str) == null))){
return null;
} else {
var frame_str__$1 = clojure.string.replace.call(null,frame_str,/\s+at\s+/,"");
if(clojure.string.starts_with_QMARK_.call(null,frame_str__$1,"repl:")){
return null;
} else {
var parts = clojure.string.split.call(null,frame_str__$1,/\s+/);
var vec__180 = ((((2) === cljs.core.count.call(null,parts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,parts),cljs.core.subs.call(null,cljs.core.second.call(null,parts),(1),(cljs.core.count.call(null,cljs.core.second.call(null,parts)) - (1)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,parts)], null));
var function$ = cljs.core.nth.call(null,vec__180,(0),null);
var file_AMPERSAND_line = cljs.core.nth.call(null,vec__180,(1),null);
var vec__183 = clojure.string.split.call(null,file_AMPERSAND_line,/:/);
var file_part = cljs.core.nth.call(null,vec__183,(0),null);
var line_part = cljs.core.nth.call(null,vec__183,(1),null);
var col_part = cljs.core.nth.call(null,vec__183,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",(-1269645878)),(cljs.core.truth_(function$)?(function (){var G__186 = file_part;
var G__186__$1 = (cljs.core.truth_(output_dir)?clojure.string.replace.call(null,G__186,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join(''),""):G__186);
return G__186__$1;
})():file_part),new cljs.core.Keyword(null,"function","function",(-2127255473)),function$,new cljs.core.Keyword(null,"line","line",(212345235)),parse_source_loc_info.call(null,line_part),new cljs.core.Keyword(null,"column","column",(2078222095)),parse_source_loc_info.call(null,col_part)], null);
}
}
});})(map__157,map__157__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
(function (){
cljs.stacktrace.remove_ext = (function cljs$stacktrace$remove_ext(file){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,file,/\.js$/,""),/\.cljs$/,""),/\.cljc$/,""),/\.clj$/,"");
}); return (
new cljs.core.Var(function(){return cljs.stacktrace.remove_ext;},new cljs.core.Symbol("cljs.stacktrace","remove-ext","cljs.stacktrace/remove-ext",(717546494),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.stacktrace","cljs.stacktrace",(880035689),null),new cljs.core.Symbol(null,"remove-ext","remove-ext",(-1456853241),null),"cljs/stacktrace.cljc",(17),(1),(557),(557),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"file","file",(370885649),null)], null)),null,(cljs.core.truth_(cljs.stacktrace.remove_ext)?cljs.stacktrace.remove_ext.cljs$lang$test:null)])));})()
;
/**
 * Given a cljs.source-map source map data structure map a generated line
 * and column back to the original line, column, and function called.
 */
(function (){
cljs.stacktrace.mapped_line_column_call = (function cljs$stacktrace$mapped_line_column_call(sms,file,line,column){
var source_map = cljs.core.get.call(null,sms,cljs.core.symbol.call(null,clojure.string.replace.call(null,cljs.stacktrace.remove_ext.call(null,file),"/",".")));
var get_best_column = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_get_best_column(columns,column__$1){
return cljs.core.last.call(null,(function (){var or__23109__auto__ = cljs.core.get.call(null,columns,cljs.core.last.call(null,cljs.core.filter.call(null,((function (source_map){
return (function (p1__10_SHARP_){
return (p1__10_SHARP_ <= (column__$1 - (1)));
});})(source_map))
,cljs.core.sort.call(null,cljs.core.keys.call(null,columns)))));
if(cljs.core.truth_(or__23109__auto__)){
return or__23109__auto__;
} else {
return cljs.core.second.call(null,cljs.core.first.call(null,columns));
}
})());
});})(source_map))
;
var adjust = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_adjust(mapped){
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (source_map){
return (function (p1__11_SHARP_,p2__12_SHARP_){
return p1__11_SHARP_.call(null,p2__12_SHARP_);
});})(source_map))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.inc,cljs.core.identity], null),mapped));
});})(source_map))
;
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null);
var temp__21873__auto__ = cljs.core.get.call(null,source_map,(line - (1)));
if(cljs.core.truth_(temp__21873__auto__)){
var columns = temp__21873__auto__;
return adjust.call(null,cljs.core.map.call(null,get_best_column.call(null,columns,column),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"col","col",(-1959363084)),new cljs.core.Keyword(null,"name","name",(1843675177))], null)));
} else {
return default$;
}
}); return (
new cljs.core.Var(function(){return cljs.stacktrace.mapped_line_column_call;},new cljs.core.Symbol("cljs.stacktrace","mapped-line-column-call","cljs.stacktrace/mapped-line-column-call",(-1790416913),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.stacktrace","cljs.stacktrace",(880035689),null),new cljs.core.Symbol(null,"mapped-line-column-call","mapped-line-column-call",(424848148),null),"cljs/stacktrace.cljc",(30),(1),(564),(564),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sms","sms",(-812924355),null),new cljs.core.Symbol(null,"file","file",(370885649),null),new cljs.core.Symbol(null,"line","line",(1852876762),null),new cljs.core.Symbol(null,"column","column",(-576213674),null)], null)),"Given a cljs.source-map source map data structure map a generated line\n   and column back to the original line, column, and function called.",(cljs.core.truth_(cljs.stacktrace.mapped_line_column_call)?cljs.stacktrace.mapped_line_column_call.cljs$lang$test:null)])));})()
;
/**
 * Given opts and a canonicalized JavaScript stacktrace frame, return the
 *   ClojureScript frame.
 */
(function (){
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__187,sms,opts){
var map__193 = p__187;
var map__193__$1 = ((((!((map__193 == null)))?((((map__193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__193.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__193):map__193);
var function$ = cljs.core.get.call(null,map__193__$1,new cljs.core.Keyword(null,"function","function",(-2127255473)));
var file = cljs.core.get.call(null,map__193__$1,new cljs.core.Keyword(null,"file","file",(-1269645878)));
var line = cljs.core.get.call(null,map__193__$1,new cljs.core.Keyword(null,"line","line",(212345235)));
var column = cljs.core.get.call(null,map__193__$1,new cljs.core.Keyword(null,"column","column",(2078222095)));
var no_source_file_QMARK_ = ((cljs.core.not.call(null,file))?true:cljs.stacktrace.starts_with_QMARK_.call(null,file,"<"));
var vec__195 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call.call(null,sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__195,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__195,(1),null);
var call = cljs.core.nth.call(null,vec__195,(2),null);
var file_SINGLEQUOTE_ = ((no_source_file_QMARK_)?null:((cljs.stacktrace.ends_with_QMARK_.call(null,file,".js"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,file,(0),(cljs.core.count.call(null,file) - (3)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".cljs")].join(''):file));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"function","function",(-2127255473)),function$,new cljs.core.Keyword(null,"call","call",(-519999866)),call,new cljs.core.Keyword(null,"file","file",(-1269645878)),((no_source_file_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("NO_SOURCE_FILE"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null))].join(''):file_SINGLEQUOTE_),new cljs.core.Keyword(null,"line","line",(212345235)),line_SINGLEQUOTE_,new cljs.core.Keyword(null,"column","column",(2078222095)),column_SINGLEQUOTE_], null);
}); return (
new cljs.core.Var(function(){return cljs.stacktrace.mapped_frame;},new cljs.core.Symbol("cljs.stacktrace","mapped-frame","cljs.stacktrace/mapped-frame",(1961186498),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.stacktrace","cljs.stacktrace",(880035689),null),new cljs.core.Symbol(null,"mapped-frame","mapped-frame",(-253781879),null),"cljs/stacktrace.cljc",(19),(1),(585),(585),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"function","function",(-486723946),null),new cljs.core.Symbol(null,"file","file",(370885649),null),new cljs.core.Symbol(null,"line","line",(1852876762),null),new cljs.core.Symbol(null,"column","column",(-576213674),null)], null)], null),new cljs.core.Symbol(null,"sms","sms",(-812924355),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Given opts and a canonicalized JavaScript stacktrace frame, return the\n  ClojureScript frame.",(cljs.core.truth_(cljs.stacktrace.mapped_frame)?cljs.stacktrace.mapped_frame.cljs$lang$test:null)])));})()
;
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
(function (){
cljs.stacktrace.mapped_stacktrace = (function cljs$stacktrace$mapped_stacktrace(var_args){
var args198 = [];
var len__25946__auto___201 = arguments.length;
var i__25947__auto___202 = (0);
while(true){
if((i__25947__auto___202 < len__25946__auto___201)){
args198.push((arguments[i__25947__auto___202]));

var G__203 = (i__25947__auto___202 + (1));
i__25947__auto___202 = G__203;
continue;
} else {
}
break;
}

var G__200 = args198.length;
switch (G__200) {
case (2):
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args198.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.stacktrace.mapped_stacktrace;},new cljs.core.Symbol("cljs.stacktrace","mapped-stacktrace","cljs.stacktrace/mapped-stacktrace",(-1371911053),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.stacktrace","cljs.stacktrace",(880035689),null),new cljs.core.Symbol(null,"mapped-stacktrace","mapped-stacktrace",(710346810),null),"cljs/stacktrace.cljc",(24),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stacktrace","stacktrace",(1544943133),null),new cljs.core.Symbol(null,"sms","sms",(-812924355),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stacktrace","stacktrace",(1544943133),null),new cljs.core.Symbol(null,"sms","sms",(-812924355),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stacktrace","stacktrace",(1544943133),null),new cljs.core.Symbol(null,"sms","sms",(-812924355),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stacktrace","stacktrace",(1544943133),null),new cljs.core.Symbol(null,"sms","sms",(-812924355),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(605),(605),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stacktrace","stacktrace",(1544943133),null),new cljs.core.Symbol(null,"sms","sms",(-812924355),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stacktrace","stacktrace",(1544943133),null),new cljs.core.Symbol(null,"sms","sms",(-812924355),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Given a vector representing the canonicalized JavaScript stacktrace\n   return the ClojureScript stacktrace. The canonical stacktrace must be\n   in the form:\n\n    [{:file <string>\n      :function <string>\n      :line <integer>\n      :column <integer>}*]\n\n   :file must be a URL path (without protocol) relative to :output-dir or a\n   identifier delimited by angle brackets. The returned mapped stacktrace will\n   also contain :url entries to the original sources if it can be determined\n   from the classpath.",(cljs.core.truth_(cljs.stacktrace.mapped_stacktrace)?cljs.stacktrace.mapped_stacktrace.cljs$lang$test:null)])));})()
;

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var call__GT_function = (function cljs$stacktrace$call__GT_function(x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"call","call",(-519999866)).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"function","function",(-2127255473))],[new cljs.core.Keyword(null,"call","call",(-519999866)).cljs$core$IFn$_invoke$arity$1(x)]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var call_merge = (function cljs$stacktrace$call_merge(function$,call){
return cljs.core.merge_with.call(null,(function (munged_fn_name,unmunged_call_name){
if(cljs.core._EQ_.call(null,munged_fn_name,clojure.string.replace.call(null,cljs.core.munge.call(null,unmunged_call_name),".","$"))){
return unmunged_call_name;
} else {
return munged_fn_name;
}
}),function$,call);
});
var mapped_frames = cljs.core.map.call(null,cljs.core.memoize.call(null,(function (p1__13_SHARP_){
return cljs.stacktrace.mapped_frame.call(null,p1__13_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec.call(null,cljs.core.map.call(null,call_merge,cljs.core.map.call(null,((function (mapped_frames){
return (function (p1__14_SHARP_){
return cljs.core.dissoc.call(null,p1__14_SHARP_,new cljs.core.Keyword(null,"call","call",(-519999866)));
});})(mapped_frames))
,mapped_frames),cljs.core.concat.call(null,cljs.core.rest.call(null,cljs.core.map.call(null,call__GT_function,mapped_frames)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))));
});

cljs.stacktrace.mapped_stacktrace.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs.stacktrace.mapped_stacktrace;},new cljs.core.Symbol("cljs.stacktrace","mapped-stacktrace","cljs.stacktrace/mapped-stacktrace",(-1371911053),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.stacktrace","cljs.stacktrace",(880035689),null),new cljs.core.Symbol(null,"mapped-stacktrace","mapped-stacktrace",(710346810),null),"cljs/stacktrace.cljc",(24),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stacktrace","stacktrace",(1544943133),null),new cljs.core.Symbol(null,"sms","sms",(-812924355),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stacktrace","stacktrace",(1544943133),null),new cljs.core.Symbol(null,"sms","sms",(-812924355),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stacktrace","stacktrace",(1544943133),null),new cljs.core.Symbol(null,"sms","sms",(-812924355),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stacktrace","stacktrace",(1544943133),null),new cljs.core.Symbol(null,"sms","sms",(-812924355),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(605),(605),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stacktrace","stacktrace",(1544943133),null),new cljs.core.Symbol(null,"sms","sms",(-812924355),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stacktrace","stacktrace",(1544943133),null),new cljs.core.Symbol(null,"sms","sms",(-812924355),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Given a vector representing the canonicalized JavaScript stacktrace\n   return the ClojureScript stacktrace. The canonical stacktrace must be\n   in the form:\n\n    [{:file <string>\n      :function <string>\n      :line <integer>\n      :column <integer>}*]\n\n   :file must be a URL path (without protocol) relative to :output-dir or a\n   identifier delimited by angle brackets. The returned mapped stacktrace will\n   also contain :url entries to the original sources if it can be determined\n   from the classpath.",(cljs.core.truth_(cljs.stacktrace.mapped_stacktrace)?cljs.stacktrace.mapped_stacktrace.cljs$lang$test:null)]));
/**
 * Given a vector representing the canonicalized JavaScript stacktrace and a map
 *   of library names to decoded source maps, print the ClojureScript stacktrace .
 *   See mapped-stacktrace.
 */
(function (){
cljs.stacktrace.mapped_stacktrace_str = (function cljs$stacktrace$mapped_stacktrace_str(var_args){
var args205 = [];
var len__25946__auto___218 = arguments.length;
var i__25947__auto___219 = (0);
while(true){
if((i__25947__auto___219 < len__25946__auto___218)){
args205.push((arguments[i__25947__auto___219]));

var G__220 = (i__25947__auto___219 + (1));
i__25947__auto___219 = G__220;
continue;
} else {
}
break;
}

var G__207 = args205.length;
switch (G__207) {
case (2):
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args205.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.stacktrace.mapped_stacktrace_str;},new cljs.core.Symbol("cljs.stacktrace","mapped-stacktrace-str","cljs.stacktrace/mapped-stacktrace-str",(942451566),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.stacktrace","cljs.stacktrace",(880035689),null),new cljs.core.Symbol(null,"mapped-stacktrace-str","mapped-stacktrace-str",(-1128108395),null),"cljs/stacktrace.cljc",(28),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stacktrace","stacktrace",(1544943133),null),new cljs.core.Symbol(null,"sms","sms",(-812924355),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stacktrace","stacktrace",(1544943133),null),new cljs.core.Symbol(null,"sms","sms",(-812924355),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stacktrace","stacktrace",(1544943133),null),new cljs.core.Symbol(null,"sms","sms",(-812924355),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stacktrace","stacktrace",(1544943133),null),new cljs.core.Symbol(null,"sms","sms",(-812924355),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(642),(642),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stacktrace","stacktrace",(1544943133),null),new cljs.core.Symbol(null,"sms","sms",(-812924355),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stacktrace","stacktrace",(1544943133),null),new cljs.core.Symbol(null,"sms","sms",(-812924355),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Given a vector representing the canonicalized JavaScript stacktrace and a map\n  of library names to decoded source maps, print the ClojureScript stacktrace .\n  See mapped-stacktrace.",(cljs.core.truth_(cljs.stacktrace.mapped_stacktrace_str)?cljs.stacktrace.mapped_stacktrace_str.cljs$lang$test:null)])));})()
;

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.call(null,stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__25829__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_208_222 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_209_223 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_208_222,_STAR_print_fn_STAR_209_223,sb__25829__auto__){
return (function (x__25830__auto__){
return sb__25829__auto__.append(x__25830__auto__);
});})(_STAR_print_newline_STAR_208_222,_STAR_print_fn_STAR_209_223,sb__25829__auto__))
;

try{var seq__210_224 = cljs.core.seq.call(null,cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,opts));
var chunk__211_225 = null;
var count__212_226 = (0);
var i__213_227 = (0);
while(true){
if((i__213_227 < count__212_226)){
var map__214_228 = cljs.core._nth.call(null,chunk__211_225,i__213_227);
var map__214_229__$1 = ((((!((map__214_228 == null)))?((((map__214_228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__214_228.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__214_228):map__214_228);
var function_230 = cljs.core.get.call(null,map__214_229__$1,new cljs.core.Keyword(null,"function","function",(-2127255473)));
var file_231 = cljs.core.get.call(null,map__214_229__$1,new cljs.core.Keyword(null,"file","file",(-1269645878)));
var line_232 = cljs.core.get.call(null,map__214_229__$1,new cljs.core.Keyword(null,"line","line",(212345235)));
var column_233 = cljs.core.get.call(null,map__214_229__$1,new cljs.core.Keyword(null,"column","column",(2078222095)));
cljs.core.println.call(null,"\t",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_230)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_230),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_231),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_232)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_232)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_233)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_233)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''));

var G__234 = seq__210_224;
var G__235 = chunk__211_225;
var G__236 = count__212_226;
var G__237 = (i__213_227 + (1));
seq__210_224 = G__234;
chunk__211_225 = G__235;
count__212_226 = G__236;
i__213_227 = G__237;
continue;
} else {
var temp__22186__auto___238 = cljs.core.seq.call(null,seq__210_224);
if(temp__22186__auto___238){
var seq__210_239__$1 = temp__22186__auto___238;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__210_239__$1)){
var c__25653__auto___240 = cljs.core.chunk_first.call(null,seq__210_239__$1);
var G__241 = cljs.core.chunk_rest.call(null,seq__210_239__$1);
var G__242 = c__25653__auto___240;
var G__243 = cljs.core.count.call(null,c__25653__auto___240);
var G__244 = (0);
seq__210_224 = G__241;
chunk__211_225 = G__242;
count__212_226 = G__243;
i__213_227 = G__244;
continue;
} else {
var map__216_245 = cljs.core.first.call(null,seq__210_239__$1);
var map__216_246__$1 = ((((!((map__216_245 == null)))?((((map__216_245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__216_245.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__216_245):map__216_245);
var function_247 = cljs.core.get.call(null,map__216_246__$1,new cljs.core.Keyword(null,"function","function",(-2127255473)));
var file_248 = cljs.core.get.call(null,map__216_246__$1,new cljs.core.Keyword(null,"file","file",(-1269645878)));
var line_249 = cljs.core.get.call(null,map__216_246__$1,new cljs.core.Keyword(null,"line","line",(212345235)));
var column_250 = cljs.core.get.call(null,map__216_246__$1,new cljs.core.Keyword(null,"column","column",(2078222095)));
cljs.core.println.call(null,"\t",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_247)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_247),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_248),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_249)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_249)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_250)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_250)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''));

var G__251 = cljs.core.next.call(null,seq__210_239__$1);
var G__252 = null;
var G__253 = (0);
var G__254 = (0);
seq__210_224 = G__251;
chunk__211_225 = G__252;
count__212_226 = G__253;
i__213_227 = G__254;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_209_223;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_208_222;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__25829__auto__)].join('');
});

cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs.stacktrace.mapped_stacktrace_str;},new cljs.core.Symbol("cljs.stacktrace","mapped-stacktrace-str","cljs.stacktrace/mapped-stacktrace-str",(942451566),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.stacktrace","cljs.stacktrace",(880035689),null),new cljs.core.Symbol(null,"mapped-stacktrace-str","mapped-stacktrace-str",(-1128108395),null),"cljs/stacktrace.cljc",(28),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stacktrace","stacktrace",(1544943133),null),new cljs.core.Symbol(null,"sms","sms",(-812924355),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stacktrace","stacktrace",(1544943133),null),new cljs.core.Symbol(null,"sms","sms",(-812924355),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stacktrace","stacktrace",(1544943133),null),new cljs.core.Symbol(null,"sms","sms",(-812924355),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stacktrace","stacktrace",(1544943133),null),new cljs.core.Symbol(null,"sms","sms",(-812924355),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(642),(642),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stacktrace","stacktrace",(1544943133),null),new cljs.core.Symbol(null,"sms","sms",(-812924355),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stacktrace","stacktrace",(1544943133),null),new cljs.core.Symbol(null,"sms","sms",(-812924355),null),new cljs.core.Symbol(null,"opts","opts",(1795607228),null)], null)),"Given a vector representing the canonicalized JavaScript stacktrace and a map\n  of library names to decoded source maps, print the ClojureScript stacktrace .\n  See mapped-stacktrace.",(cljs.core.truth_(cljs.stacktrace.mapped_stacktrace_str)?cljs.stacktrace.mapped_stacktrace_str.cljs$lang$test:null)]));
