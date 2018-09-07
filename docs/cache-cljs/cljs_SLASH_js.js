// Compiled by ClojureScript 1.9.946 {:static-fns true, :fn-invoke-direct true, :optimize-constants false}
goog.provide('cljs.js');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('cljs.env');
goog.require('cljs.spec.alpha');
goog.require('cljs.analyzer');
goog.require('cljs.compiler');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tagged_literals');
goog.require('goog.crypt.base64');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require("cljs.core$macros");
cljs.js.debug_prn = (function cljs$js$debug_prn(var_args){
var args__10094__auto__ = [];
var len__10087__auto___19746 = arguments.length;
var i__10088__auto___19747 = (0);
while(true){
if((i__10088__auto___19747 < len__10087__auto___19746)){
args__10094__auto__.push((arguments[i__10088__auto___19747]));

var G__19748 = (i__10088__auto___19747 + (1));
i__10088__auto___19747 = G__19748;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_print_fn_STAR_19745 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_err_fn_STAR_;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19745;
}});

cljs.js.debug_prn.cljs$lang$maxFixedArity = (0);

cljs.js.debug_prn.cljs$lang$applyTo = (function (seq19744){
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19744));
});

/**
 * Given a namespace as a symbol return the relative path sans extension
 */
cljs.js.ns__GT_relpath = (function cljs$js$ns__GT_relpath(ns_sym){
return clojure.string.replace(cljs.analyzer.munge_path(ns_sym),".","/");
});
cljs.js.file__GT_ns = (function cljs$js$file__GT_ns(file){
var lib_name = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(file,"/","."),(0),(cljs.core.count(file) - (5)));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.demunge(lib_name));
});
cljs.js.drop_macros_suffix = (function cljs$js$drop_macros_suffix(ns_name){
if(cljs.core.truth_(ns_name)){
if(clojure.string.ends_with_QMARK_(ns_name,"$macros")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns_name,(0),(cljs.core.count(ns_name) - (7)));
} else {
return ns_name;
}
} else {
return null;
}
});
cljs.js.elide_macros_suffix = (function cljs$js$elide_macros_suffix(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.js.drop_macros_suffix(cljs.core.namespace(sym)),cljs.core.name(sym));
});
cljs.js.resolve_symbol = (function cljs$js$resolve_symbol(sym){
if(clojure.string.starts_with_QMARK_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),".")){
return sym;
} else {
return cljs.js.elide_macros_suffix(cljs.analyzer.resolve_symbol(sym));
}
});
cljs.js.read = (function cljs$js$read(eof,rdr){
var _STAR_ns_STAR_19749 = cljs.core._STAR_ns_STAR_;
cljs.core._STAR_ns_STAR_ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.js.drop_macros_suffix([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_)].join('')));

try{return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eof","eof",-489063237),eof,new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null)], null),rdr);
}finally {cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_19749;
}});
cljs.js.atom_QMARK_ = (function cljs$js$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
cljs.js.valid_name_QMARK_ = (function cljs$js$valid_name_QMARK_(x){
return ((x == null)) || ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
cljs.js.valid_opts_QMARK_ = (function cljs$js$valid_opts_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_(x));
});
if(typeof cljs.js._STAR_load_fn_STAR_ !== 'undefined'){
} else {
/**
 * Each runtime environment provides a different way to load a library.
 *   Whatever function *load-fn* is bound to will be passed two arguments - a
 *   map and a callback function: The map will have the following keys:
 * 
 *   :name   - the name of the library (a symbol)
 *   :macros - modifier signaling a macros namespace load
 *   :path   - munged relative library path (a string)
 * 
 *   It is up to the implementor to correctly resolve the corresponding .cljs,
 *   .cljc, or .js resource (the order must be respected). If :macros is true
 *   resolution should only consider .clj or .cljc resources (the order must be
 *   respected). Upon resolution the callback should be invoked with a map
 *   containing the following keys:
 * 
 *   :lang       - the language, :clj or :js
 *   :source     - the source of the library (a string)
 *   :file       - optional, the file path, it will be added to AST's :file keyword
 *              (but not in :meta)
 *   :cache      - optional, if a :clj namespace has been precompiled to :js, can
 *              give an analysis cache for faster loads.
 *   :source-map - optional, if a :clj namespace has been precompiled to :js, can
 *              give a V3 source map JSON
 * 
 *   If the resource could not be resolved, the callback should be invoked with
 *   nil.
 */
cljs.js._STAR_load_fn_STAR_ = (function cljs$js$_STAR_load_fn_STAR_(m,cb){
throw (new Error("No *load-fn* set"));
});
}
if(typeof cljs.js._STAR_eval_fn_STAR_ !== 'undefined'){
} else {
/**
 * Each runtime environment provides various ways to eval JavaScript
 *   source. Whatever function *eval-fn* is bound to will be passed a map
 *   containing the following keys:
 * 
 *   :source - the source of the library (string)
 *   :name   - used to unique identify the script (symbol)
 *   :cache  - if the source was originally ClojureScript, will be given the
 *          analysis cache.
 * 
 *   The result of evaluation should be the return value.
 */
cljs.js._STAR_eval_fn_STAR_ = (function cljs$js$_STAR_eval_fn_STAR_(m){
throw (new Error("No *eval-fn* set"));
});
}
/**
 * A default JavaScript evaluation function.
 */
cljs.js.js_eval = (function cljs$js$js_eval(p__19750){
var map__19751 = p__19750;
var map__19751__$1 = ((((!((map__19751 == null)))?((((map__19751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19751.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19751):map__19751);
var resource = map__19751__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19751__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return eval(source);
});
cljs.js.wrap_error = (function cljs$js$wrap_error(ex){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),ex], null);
});
/**
 * Construct an empty compiler state. Required to invoke analyze, compile,
 * eval and eval-str.
 */
cljs.js.empty_state = (function cljs$js$empty_state(var_args){
var G__19754 = arguments.length;
switch (G__19754) {
case 0:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0 = (function (){
var G__19755 = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__19755,((function (G__19755){
return (function (state){
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)], null),cljs.core.PersistentHashMap.EMPTY);
});})(G__19755))
);

return G__19755;
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1 = (function (init){
var G__19756 = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__19756,init);

return G__19756;
});

cljs.js.empty_state.cljs$lang$maxFixedArity = 1;

cljs.js.load_analysis_cache_BANG_ = (function cljs$js$load_analysis_cache_BANG_(state,ns,cache){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null),cache);
});
cljs.js.load_source_map_BANG_ = (function cljs$js$load_source_map_BANG_(state,ns,sm_json){
var sm = cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1(JSON.parse(sm_json));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-maps","source-maps",-552851697),ns], null),sm);
});
cljs.js.sm_data = (function cljs$js$sm_data(){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),cljs.core.sorted_map(),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0),new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(0)], null));
});
cljs.js.prefix = (function cljs$js$prefix(s,pre){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
});
cljs.js.append_source_map = (function cljs$js$append_source_map(state,name,source,sb,sm_data,p__19758){
var map__19759 = p__19758;
var map__19759__$1 = ((((!((map__19759 == null)))?((((map__19759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19759.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19759):map__19759);
var opts = map__19759__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19759__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19759__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var t = (new Date()).valueOf();
var smn = (cljs.core.truth_(name)?clojure.string.replace(cljs.core.munge([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')),".","/"):["cljs-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
var ts = (new Date()).valueOf();
var out = (function (){var or__8808__auto__ = output_dir;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return asset_path;
}
})();
var src = (function (){var G__19761 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".cljs?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join('');
if(cljs.core.truth_(out)){
return cljs.js.prefix(G__19761,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__19761;
}
})();
var file = (function (){var G__19762 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".js?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join('');
if(cljs.core.truth_(out)){
return cljs.js.prefix(G__19762,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__19762;
}
})();
var json = cljs.source_map.encode(cljs.core.PersistentArrayMap.createAsIfByAssoc([src,new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(sm_data)]),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lines","lines",-700165781),(new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(sm_data) + (3)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([json], 0));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-maps","source-maps",-552851697),name], null),cljs.source_map.invert_reverse_map(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(sm_data)));

return sb.append(["\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"\n//# sourceMappingURL=data:application/json;base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__19763 = clojure.string.replace(encodeURIComponent(json),/%([0-9A-F]{2})/,((function (t,smn,ts,out,src,file,json,map__19759,map__19759__$1,opts,output_dir,asset_path){
return (function (p__19764){
var vec__19765 = p__19764;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19765,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19765,(1),null);
return String.fromCharCode(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join(''));
});})(t,smn,ts,out,src,file,json,map__19759,map__19759__$1,opts,output_dir,asset_path))
);
return goog.crypt.base64.encodeString(G__19763);
})())].join(''));
});
cljs.js.current_alias_map = (function cljs$js$current_alias_map(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__19768){
var vec__19769 = p__19768;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19769,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19769,(1),null);
return cljs.core.symbol_identical_QMARK_(k,v);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.analyzer._STAR_cljs_ns_STAR_,new cljs.core.Keyword(null,"requires","requires",-1201390927)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.analyzer._STAR_cljs_ns_STAR_,new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null))], 0))));
});
cljs.js._STAR_loaded_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
/**
 * Like cljs.core/run!, but for an async procedure, and with the
 *   ability to break prior to processing the entire collection.
 * 
 *   Chains successive calls to the supplied procedure for items in
 *   the collection. The procedure should accept an item from the
 *   collection and a callback of one argument. If the break? predicate,
 *   when applied to the procedure callback value, yields a truthy
 *   result, terminates early calling the supplied cb with the callback
 *   value. Otherwise, when complete, calls cb with nil.
 */
cljs.js.run_async_BANG_ = (function cljs$js$run_async_BANG_(proc,coll,break_QMARK_,cb){
if(cljs.core.seq(coll)){
var G__19772 = cljs.core.first(coll);
var G__19773 = ((function (G__19772){
return (function (res){
if(cljs.core.truth_((break_QMARK_.cljs$core$IFn$_invoke$arity$1 ? break_QMARK_.cljs$core$IFn$_invoke$arity$1(res) : break_QMARK_(res)))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb(res));
} else {
var G__19774 = proc;
var G__19775 = cljs.core.rest(coll);
var G__19776 = break_QMARK_;
var G__19777 = cb;
return (cljs.js.run_async_BANG_.cljs$core$IFn$_invoke$arity$4 ? cljs.js.run_async_BANG_.cljs$core$IFn$_invoke$arity$4(G__19774,G__19775,G__19776,G__19777) : cljs.js.run_async_BANG_(G__19774,G__19775,G__19776,G__19777));
}
});})(G__19772))
;
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(G__19772,G__19773) : proc(G__19772,G__19773));
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(null) : cb(null));
}
});
cljs.js.process_deps = (function cljs$js$process_deps(bound_vars,names,opts,cb){
return cljs.js.run_async_BANG_((function (name,cb__$1){
return (cljs.js.require.cljs$core$IFn$_invoke$arity$5 ? cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,name,null,opts,cb__$1) : cljs.js.require(bound_vars,name,null,opts,cb__$1));
}),names,new cljs.core.Keyword(null,"error","error",-978969032),cb);
});
cljs.js.process_macros_deps = (function cljs$js$process_macros_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps(bound_vars,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(new cljs.core.Keyword(null,"require-macros","require-macros",707947416).cljs$core$IFn$_invoke$arity$1(cache))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933),true),new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518)], 0)),cb);
});
cljs.js.process_libs_deps = (function cljs$js$process_libs_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps(bound_vars,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.vals(new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(cache)),cljs.core.vals(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(cache)))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),cb);
});
cljs.js.pre_file_side_effects = (function cljs$js$pre_file_side_effects(st,name,file,opts){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Pre-file side-effects",file], 0));
} else {
}

if(cljs.core.truth_((function (){var and__8796__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"defs","defs",1398449717)], null));
if(cljs.core.truth_(and__8796__auto__)){
return cljs.core.not((function (){var fexpr__19778 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null),null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null], null), null);
return (fexpr__19778.cljs$core$IFn$_invoke$arity$1 ? fexpr__19778.cljs$core$IFn$_invoke$arity$1(name) : fexpr__19778(name));
})());
} else {
return and__8796__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st,cljs.core.update,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0));
} else {
return null;
}
});
cljs.js.post_file_side_effects = (function cljs$js$post_file_side_effects(file,opts){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Post-file side-effects",file], 0));
} else {
}

return cljs.core._STAR_unchecked_arrays_STAR_ = false;;
});
cljs.js.require = (function cljs$js$require(var_args){
var G__19780 = arguments.length;
switch (G__19780) {
case 2:
return cljs.js.require.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.require.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.require.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.require.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.require.cljs$core$IFn$_invoke$arity$2 = (function (name,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$3(name,null,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$3 = (function (name,opts,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(null,name,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$4 = (function (bound_vars,name,opts,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,name,null,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,name,reload,opts,cb){
var bound_vars__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__8808__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__8808__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),bound_vars], 0));
var aname = (function (){var G__19781 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__19781);
} else {
return G__19781;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload","reload",863702807),reload)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.disj,aname);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload)){
cljs.core.reset_BANG_(cljs.js._STAR_loaded_STAR_,cljs.core.PersistentHashSet.EMPTY);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Loading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))?" macros":null))," namespace"].join('')], 0));
} else {
}

if(!(cljs.core.contains_QMARK_(cljs.core.deref(cljs.js._STAR_loaded_STAR_),aname))){
var env = new cljs.core.Keyword(null,"*env*","*env*",1860548436).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
try{var G__19785 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"macros","macros",811339431),new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath(name)], null);
var G__19786 = ((function (G__19785,env,bound_vars__$1,aname){
return (function (resource){
if((cljs.core.map_QMARK_(resource)) || ((resource == null))){
} else {
throw (new Error(["Assert failed: ","*load-fn* may only return a map or nil","\n","(or (map? resource) (nil? resource))"].join('')));
}

if(cljs.core.truth_(resource)){
var map__19787 = resource;
var map__19787__$1 = ((((!((map__19787 == null)))?((((map__19787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19787.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19787):map__19787);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19787__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19787__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19787__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19787__$1,new cljs.core.Keyword(null,"source-map","source-map",1706252311));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19787__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pred__19789 = cljs.core.keyword_identical_QMARK_;
var expr__19790 = lang;
if(cljs.core.truth_((function (){var G__19792 = new cljs.core.Keyword(null,"clj","clj",-660495428);
var G__19793 = expr__19790;
return (pred__19789.cljs$core$IFn$_invoke$arity$2 ? pred__19789.cljs$core$IFn$_invoke$arity$2(G__19792,G__19793) : pred__19789(G__19792,G__19793));
})())){
cljs.js.pre_file_side_effects(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,file,opts);

var G__19794 = bound_vars__$1;
var G__19795 = source;
var G__19796 = name;
var G__19797 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049),file);
var G__19798 = ((function (G__19794,G__19795,G__19796,G__19797,pred__19789,expr__19790,map__19787,map__19787__$1,lang,source,cache,source_map,file,G__19785,env,bound_vars__$1,aname){
return (function (res){
cljs.js.post_file_side_effects(file,opts);

if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb(res));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

var G__19799 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__19799) : cb(G__19799));
}
});})(G__19794,G__19795,G__19796,G__19797,pred__19789,expr__19790,map__19787,map__19787__$1,lang,source,cache,source_map,file,G__19785,env,bound_vars__$1,aname))
;
return (cljs.js.eval_str_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.js.eval_str_STAR_.cljs$core$IFn$_invoke$arity$5(G__19794,G__19795,G__19796,G__19797,G__19798) : cljs.js.eval_str_STAR_(G__19794,G__19795,G__19796,G__19797,G__19798));
} else {
if(cljs.core.truth_((function (){var G__19800 = new cljs.core.Keyword(null,"js","js",1768080579);
var G__19801 = expr__19790;
return (pred__19789.cljs$core$IFn$_invoke$arity$2 ? pred__19789.cljs$core$IFn$_invoke$arity$2(G__19800,G__19801) : pred__19789(G__19800,G__19801));
})())){
return cljs.js.process_macros_deps(bound_vars__$1,cache,opts,((function (pred__19789,expr__19790,map__19787,map__19787__$1,lang,source,cache,source_map,file,G__19785,env,bound_vars__$1,aname){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb(res));
} else {
return cljs.js.process_libs_deps(bound_vars__$1,cache,opts,((function (pred__19789,expr__19790,map__19787,map__19787__$1,lang,source,cache,source_map,file,G__19785,env,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb(res__$1));
} else {
var res__$2 = (function (){try{var fexpr__19803_19811 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
(fexpr__19803_19811.cljs$core$IFn$_invoke$arity$1 ? fexpr__19803_19811.cljs$core$IFn$_invoke$arity$1(resource) : fexpr__19803_19811(resource));

if(cljs.core.truth_(cache)){
cljs.js.load_analysis_cache_BANG_(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,cache);

cljs.analyzer.register_specs(cache);
} else {
}

if(cljs.core.truth_(source_map)){
return cljs.js.load_source_map_BANG_(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,source_map);
} else {
return null;
}
}catch (e19802){var cause = e19802;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb(res__$2));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

var G__19804 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__19804) : cb(G__19804));
}
}
});})(pred__19789,expr__19790,map__19787,map__19787__$1,lang,source,cache,source_map,file,G__19785,env,bound_vars__$1,aname))
);
}
});})(pred__19789,expr__19790,map__19787,map__19787__$1,lang,source,cache,source_map,file,G__19785,env,bound_vars__$1,aname))
);
} else {
var G__19805 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__19805) : cb(G__19805));
}
}
} else {
var G__19806 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__19807 = (cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.Keyword(null,"undeclared-macros-ns","undeclared-macros-ns",-438029430):new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812));
var G__19808 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),name,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name(name)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__19807,G__19808) : cljs.analyzer.error_message(G__19807,G__19808));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__19806) : cb(G__19806));
}
});})(G__19785,env,bound_vars__$1,aname))
;
var fexpr__19784 = new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
return (fexpr__19784.cljs$core$IFn$_invoke$arity$2 ? fexpr__19784.cljs$core$IFn$_invoke$arity$2(G__19785,G__19786) : fexpr__19784(G__19785,G__19786));
}catch (e19782){var cause = e19782;
var G__19783 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__19783) : cb(G__19783));
}} else {
var G__19809 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__19809) : cb(G__19809));
}
});

cljs.js.require.cljs$lang$maxFixedArity = 5;

cljs.js.patch_alias_map = (function cljs$js$patch_alias_map(compiler,in$,from,to){
var patch = (function (k,add_if_present_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),in$,k], null),(function (m){
var replaced = clojure.walk.postwalk_replace(cljs.core.PersistentArrayMap.createAsIfByAssoc([from,to]),m);
if(cljs.core.truth_((function (){var and__8796__auto__ = add_if_present_QMARK_;
if(cljs.core.truth_(and__8796__auto__)){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([to]),cljs.core.vals(replaced));
} else {
return and__8796__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(replaced,from,to);
} else {
return replaced;
}
}));
});
var patch_renames = ((function (patch){
return (function (k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),in$,k], null),((function (patch){
return (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (patch){
return (function (acc,p__19812){
var vec__19813 = p__19812;
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19813,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19813,(1),null);
var entry = vec__19813;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(from)].join(''),cljs.core.namespace(qualified_sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(to)].join(''),cljs.core.name(qualified_sym)));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,entry], 0));
}
});})(patch))
,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});})(patch))
);
});})(patch))
;
patch(new cljs.core.Keyword(null,"requires","requires",-1201390927),true);

patch(new cljs.core.Keyword(null,"require-macros","require-macros",707947416),true);

patch(new cljs.core.Keyword(null,"uses","uses",232664692),false);

patch(new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),false);

patch_renames(new cljs.core.Keyword(null,"renames","renames",343278368));

return patch_renames(new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512));
});
cljs.js.self_require_QMARK_ = (function cljs$js$self_require_QMARK_(deps,opts){
var and__8796__auto__ = new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts) === true;
if(and__8796__auto__){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.analyzer._STAR_cljs_ns_STAR_]),deps);
} else {
return and__8796__auto__;
}
});
cljs.js.load_deps = (function cljs$js$load_deps(var_args){
var G__19818 = arguments.length;
switch (G__19818) {
case 5:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars,ana_env,lib,deps,null,null,cb);
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7 = (function (bound_vars,ana_env,lib,deps,reload,opts,cb){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading dependencies for",lib], 0));
} else {
}

var _STAR_cljs_dep_set_STAR_19819 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = (function (){var lib__$1 = (cljs.core.truth_(cljs.js.self_require_QMARK_(deps,opts))?new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null):lib);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),lib__$1),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib__$1);
})();

try{var bound_vars__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bound_vars,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_);
if(!(cljs.core.every_QMARK_(((function (bound_vars__$1,_STAR_cljs_dep_set_STAR_19819){
return (function (p1__19816_SHARP_){
return !(cljs.core.contains_QMARK_(cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__19816_SHARP_));
});})(bound_vars__$1,_STAR_cljs_dep_set_STAR_19819))
,deps))){
var G__19820 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" -> ",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some(cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__19820) : cb(G__19820));
} else {
if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
var opts_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"context","context",-830191113)),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320)),new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars__$1,dep,reload,opts_SINGLEQUOTE_,((function (dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR_19819){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading result:",res], 0));
} else {
}

if(cljs.core.not(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars__$1,ana_env,lib,cljs.core.next(deps),null,opts,cb);
} else {
var temp__5455__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(dep);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([dep,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5455__auto__)){
var cljs_dep = temp__5455__auto__;
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(bound_vars__$1,cljs_dep,opts_SINGLEQUOTE_,((function (cljs_dep,temp__5455__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR_19819){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb(res__$1));
} else {
cljs.js.patch_alias_map(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),lib,dep,cljs_dep);

return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars__$1,ana_env,lib,cljs.core.next(deps),null,opts,((function (cljs_dep,temp__5455__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR_19819){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb(res__$2));
} else {
var G__19821 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res__$2,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,dep,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__19821) : cb(G__19821));
}
});})(cljs_dep,temp__5455__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR_19819))
);
}
});})(cljs_dep,temp__5455__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR_19819))
);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb(res));
}
}
});})(dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR_19819))
);
} else {
var G__19822 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__19822) : cb(G__19822));
}
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR_19819;
}});

cljs.js.load_deps.cljs$lang$maxFixedArity = 7;

cljs.js.analyze_deps = (function cljs$js$analyze_deps(var_args){
var G__19826 = arguments.length;
switch (G__19826) {
case 5:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,deps,null,cb);
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6 = (function (bound_vars,ana_env,lib,deps,opts,cb){
var _STAR_cljs_dep_set_STAR_19827 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib);

try{var compiler = cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars));
var bound_vars__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bound_vars,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_);
if(!(cljs.core.every_QMARK_(((function (compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR_19827){
return (function (p1__19824_SHARP_){
return !(cljs.core.contains_QMARK_(cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__19824_SHARP_));
});})(compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR_19827))
,deps))){
var G__19828 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" -> ",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some(cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__19828) : cb(G__19828));
} else {
if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
try{var G__19832 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),dep,new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath(dep)], null);
var G__19833 = ((function (G__19832,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR_19827){
return (function (resource){
if((cljs.core.map_QMARK_(resource)) || ((resource == null))){
} else {
throw (new Error(["Assert failed: ","*load-fn* may only return a map or nil","\n","(or (map? resource) (nil? resource))"].join('')));
}

if(cljs.core.not(resource)){
var temp__5455__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(dep);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([dep,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5455__auto__)){
var cljs_dep = temp__5455__auto__;
cljs.js.patch_alias_map(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),lib,dep,cljs_dep);

return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.cons(cljs_dep,cljs.core.next(deps)),opts,((function (cljs_dep,temp__5455__auto__,G__19832,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR_19827){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb(res));
} else {
var G__19834 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,dep,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__19834) : cb(G__19834));
}
});})(cljs_dep,temp__5455__auto__,G__19832,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR_19827))
);
} else {
var G__19835 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,(function (){var G__19836 = new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812);
var G__19837 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),dep,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name(dep)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__19836,G__19837) : cljs.analyzer.error_message(G__19836,G__19837));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__19835) : cb(G__19835));
}
} else {
var map__19838 = resource;
var map__19838__$1 = ((((!((map__19838 == null)))?((((map__19838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19838.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19838):map__19838);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19838__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19838__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19838__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19838__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pred__19840 = cljs.core.keyword_identical_QMARK_;
var expr__19841 = lang;
if(cljs.core.truth_((function (){var G__19843 = new cljs.core.Keyword(null,"clj","clj",-660495428);
var G__19844 = expr__19841;
return (pred__19840.cljs$core$IFn$_invoke$arity$2 ? pred__19840.cljs$core$IFn$_invoke$arity$2(G__19843,G__19844) : pred__19840(G__19843,G__19844));
})())){
cljs.js.pre_file_side_effects(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),name,file,opts);

var G__19845 = bound_vars__$1;
var G__19846 = source;
var G__19847 = name;
var G__19848 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049),file);
var G__19849 = ((function (G__19845,G__19846,G__19847,G__19848,pred__19840,expr__19841,map__19838,map__19838__$1,name,lang,source,file,G__19832,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR_19827){
return (function (res){
cljs.js.post_file_side_effects(file,opts);

if(cljs.core.not(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb(res));
}
});})(G__19845,G__19846,G__19847,G__19848,pred__19840,expr__19841,map__19838,map__19838__$1,name,lang,source,file,G__19832,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR_19827))
;
return (cljs.js.analyze_str_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.js.analyze_str_STAR_.cljs$core$IFn$_invoke$arity$5(G__19845,G__19846,G__19847,G__19848,G__19849) : cljs.js.analyze_str_STAR_(G__19845,G__19846,G__19847,G__19848,G__19849));
} else {
if(cljs.core.truth_((function (){var G__19850 = new cljs.core.Keyword(null,"js","js",1768080579);
var G__19851 = expr__19841;
return (pred__19840.cljs$core$IFn$_invoke$arity$2 ? pred__19840.cljs$core$IFn$_invoke$arity$2(G__19850,G__19851) : pred__19840(G__19850,G__19851));
})())){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join('')));
}
}
}
});})(G__19832,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR_19827))
;
var fexpr__19831 = new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
return (fexpr__19831.cljs$core$IFn$_invoke$arity$2 ? fexpr__19831.cljs$core$IFn$_invoke$arity$2(G__19832,G__19833) : fexpr__19831(G__19832,G__19833));
}catch (e19829){var cause = e19829;
var G__19830 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not analyze dep ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dep)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__19830) : cb(G__19830));
}} else {
var G__19852 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__19852) : cb(G__19852));
}
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR_19827;
}});

cljs.js.analyze_deps.cljs$lang$maxFixedArity = 6;

cljs.js.load_macros = (function cljs$js$load_macros(bound_vars,k,macros,lib,reload,reloads,opts,cb){
if(cljs.core.seq(macros)){
var nsym = cljs.core.first(cljs.core.vals(macros));
var k__$1 = (function (){var or__8808__auto__ = (reload.cljs$core$IFn$_invoke$arity$1 ? reload.cljs$core$IFn$_invoke$arity$1(k) : reload(k));
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var or__8808__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reloads,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,nsym], null));
if(cljs.core.truth_(or__8808__auto____$1)){
return or__8808__auto____$1;
} else {
var or__8808__auto____$2 = (function (){var and__8796__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nsym,cljs.core.name);
if(and__8796__auto__){
var and__8796__auto____$1 = new cljs.core.Keyword(null,"*reload-macros*","*reload-macros*",-820635806).cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__8796__auto____$1)){
return new cljs.core.Keyword(null,"reload","reload",863702807);
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
})();
if(cljs.core.truth_(or__8808__auto____$2)){
return or__8808__auto____$2;
} else {
return null;
}
}
}
})();
var opts_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933),true),new cljs.core.Keyword(null,"context","context",-830191113)),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320)),new cljs.core.Keyword(null,"ns","ns",441598760)),new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518)], 0));
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,nsym,k__$1,opts_SINGLEQUOTE_,((function (nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res){
if(cljs.core.not(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
var G__19854 = bound_vars;
var G__19855 = k__$1;
var G__19856 = cljs.core.next(macros);
var G__19857 = lib;
var G__19858 = reload;
var G__19859 = reloads;
var G__19860 = opts;
var G__19861 = cb;
return (cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8 ? cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8(G__19854,G__19855,G__19856,G__19857,G__19858,G__19859,G__19860,G__19861) : cljs.js.load_macros(G__19854,G__19855,G__19856,G__19857,G__19858,G__19859,G__19860,G__19861));
} else {
var temp__5455__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(nsym);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([nsym,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5455__auto__)){
var cljs_dep = temp__5455__auto__;
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,cljs_dep,k__$1,opts_SINGLEQUOTE_,((function (cljs_dep,temp__5455__auto__,nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb(res__$1));
} else {
cljs.js.patch_alias_map(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars),lib,nsym,cljs_dep);

var G__19862 = bound_vars;
var G__19863 = k__$1;
var G__19864 = cljs.core.next(macros);
var G__19865 = lib;
var G__19866 = reload;
var G__19867 = reloads;
var G__19868 = opts;
var G__19869 = ((function (G__19862,G__19863,G__19864,G__19865,G__19866,G__19867,G__19868,cljs_dep,temp__5455__auto__,nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb(res__$2));
} else {
var G__19870 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res__$2,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,nsym,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__19870) : cb(G__19870));
}
});})(G__19862,G__19863,G__19864,G__19865,G__19866,G__19867,G__19868,cljs_dep,temp__5455__auto__,nsym,k__$1,opts_SINGLEQUOTE_))
;
return (cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8 ? cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8(G__19862,G__19863,G__19864,G__19865,G__19866,G__19867,G__19868,G__19869) : cljs.js.load_macros(G__19862,G__19863,G__19864,G__19865,G__19866,G__19867,G__19868,G__19869));
}
});})(cljs_dep,temp__5455__auto__,nsym,k__$1,opts_SINGLEQUOTE_))
);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb(res));
}
}
});})(nsym,k__$1,opts_SINGLEQUOTE_))
);
} else {
var G__19871 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__19871) : cb(G__19871));
}
});
cljs.js.rewrite_ns_ast = (function cljs$js$rewrite_ns_ast(var_args){
var G__19875 = arguments.length;
switch (G__19875) {
case 2:
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2 = (function (ast,smap){
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(ast,smap,false);
});

cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3 = (function (ast,smap,macros_QMARK_){
var vec__19876 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692),new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"renames","renames",343278368)], null));
var uk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19876,(0),null);
var rk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19876,(1),null);
var renk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19876,(2),null);
var rewrite_renames = ((function (vec__19876,uk,rk,renk){
return (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__19876,uk,rk,renk){
return (function (acc,p__19879){
var vec__19880 = p__19879;
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19880,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19880,(1),null);
var entry = vec__19880;
var from = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(qualified_sym));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(smap,from);
if(!((to == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(to)].join(''),cljs.core.name(qualified_sym)));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,entry], 0));
}
});})(vec__19876,uk,rk,renk))
,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});})(vec__19876,uk,rk,renk))
;
var rewrite_deps = ((function (vec__19876,uk,rk,renk,rewrite_renames){
return (function (deps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (vec__19876,uk,rk,renk,rewrite_renames){
return (function (dep){
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(smap,dep);
if(cljs.core.truth_(temp__5455__auto__)){
var new_dep = temp__5455__auto__;
return new_dep;
} else {
return dep;
}
});})(vec__19876,uk,rk,renk,rewrite_renames))
),deps);
});})(vec__19876,uk,rk,renk,rewrite_renames))
;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,uk,((function (vec__19876,uk,rk,renk,rewrite_renames,rewrite_deps){
return (function (p1__19872_SHARP_){
return clojure.walk.postwalk_replace(smap,p1__19872_SHARP_);
});})(vec__19876,uk,rk,renk,rewrite_renames,rewrite_deps))
),rk,((function (vec__19876,uk,rk,renk,rewrite_renames,rewrite_deps){
return (function (p1__19873_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([smap,clojure.walk.postwalk_replace(smap,p1__19873_SHARP_)], 0));
});})(vec__19876,uk,rk,renk,rewrite_renames,rewrite_deps))
),renk,rewrite_renames),new cljs.core.Keyword(null,"deps","deps",1883360319),rewrite_deps);
});

cljs.js.rewrite_ns_ast.cljs$lang$maxFixedArity = 3;

cljs.js.check_macro_autoload_inferring_missing = (function cljs$js$check_macro_autoload_inferring_missing(p__19884,cenv){
var map__19885 = p__19884;
var map__19885__$1 = ((((!((map__19885 == null)))?((((map__19885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19885.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19885):map__19885);
var ast = map__19885__$1;
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19885__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19885__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var namespaces = new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cenv));
var missing_require_macros = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (namespaces,map__19885,map__19885__$1,ast,requires,name){
return (function (p__19887){
var vec__19888 = p__19887;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19888,(0),null);
var full_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19888,(1),null);
var map__19891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,full_ns);
var map__19891__$1 = ((((!((map__19891 == null)))?((((map__19891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19891.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19891):map__19891);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19891__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19891__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var or__8808__auto__ = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals(use_macros));
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals(require_macros));
}
});})(namespaces,map__19885,map__19885__$1,ast,requires,name))
),requires);
var ast_SINGLEQUOTE_ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null),cljs.core.merge,missing_require_macros);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cenv,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_require_macros], 0));

return ast_SINGLEQUOTE_;
});
cljs.js.ns_side_effects = (function cljs$js$ns_side_effects(var_args){
var G__19896 = arguments.length;
switch (G__19896) {
case 5:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,ast,opts,cb){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(false,bound_vars,ana_env,ast,opts,cb);
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6 = (function (load,bound_vars,ana_env,p__19897,opts,cb){
var map__19898 = p__19897;
var map__19898__$1 = ((((!((map__19898 == null)))?((((map__19898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19898.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19898):map__19898);
var ast = map__19898__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19898__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Namespace side effects for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

if(cljs.core.truth_((function (){var fexpr__19900 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__19900.cljs$core$IFn$_invoke$arity$1 ? fexpr__19900.cljs$core$IFn$_invoke$arity$1(op) : fexpr__19900(op));
})())){
var check_uses_and_load_macros = ((function (map__19898,map__19898__$1,ast,op){
return (function cljs$js$check_uses_and_load_macros(res,rewritten_ast){
var env = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
var map__19918 = rewritten_ast;
var map__19918__$1 = ((((!((map__19918 == null)))?((((map__19918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19918):map__19918);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19918__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19918__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19918__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19918__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19918__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb(res));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006).cljs$core$IFn$_invoke$arity$1(bound_vars))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processing :use-macros for",name], 0));
} else {
}

return cljs.js.load_macros(bound_vars,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),use_macros,name,reload,reloads,opts,((function (env,map__19918,map__19918__$1,uses,use_macros,reload,reloads,name,map__19898,map__19898__$1,ast,op){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb(res__$1));
} else {
var map__19920 = cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(rewritten_ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__19920__$1 = ((((!((map__19920 == null)))?((((map__19920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19920):map__19920);
var rewritten_ast__$1 = map__19920__$1;
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19920__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processing :require-macros for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

return cljs.js.load_macros(bound_vars,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),require_macros,name,reload,reloads,opts,((function (map__19920,map__19920__$1,rewritten_ast__$1,require_macros,env,map__19918,map__19918__$1,uses,use_macros,reload,reloads,name,map__19898,map__19898__$1,ast,op){
return (function (res_SINGLEQUOTE_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE_))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE_) : cb(res_SINGLEQUOTE_));
} else {
var map__19922 = cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(rewritten_ast__$1,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__19922__$1 = ((((!((map__19922 == null)))?((((map__19922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19922.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19922):map__19922);
var rewritten_ast__$2 = map__19922__$1;
var use_macros__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19922__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var res_SINGLEQUOTE___$1 = (function (){try{if(cljs.core.seq(use_macros__$1)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Checking :use-macros for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

var _STAR_analyze_deps_STAR_19925_19939 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR_19926_19940 = cljs.env._STAR_compiler_STAR_;
cljs.analyzer._STAR_analyze_deps_STAR_ = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);

cljs.env._STAR_compiler_STAR_ = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);

try{cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2(use_macros__$1,env);
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_19926_19940;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR_19925_19939;
}} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}catch (e19924){var cause = e19924;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE___$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE___$1) : cb(res_SINGLEQUOTE___$1));
} else {
try{var _STAR_analyze_deps_STAR_19929 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR_19930 = cljs.env._STAR_compiler_STAR_;
cljs.analyzer._STAR_analyze_deps_STAR_ = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);

cljs.env._STAR_compiler_STAR_ = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);

try{var ast_SINGLEQUOTE_ = cljs.js.check_macro_autoload_inferring_missing(cljs.analyzer.check_rename_macros_inferring_missing(cljs.analyzer.check_use_macros_inferring_missing(rewritten_ast__$2,env),env),env);
var G__19931 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast_SINGLEQUOTE_], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__19931) : cb(G__19931));
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_19930;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR_19929;
}}catch (e19927){var cause = e19927;
var G__19928 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__19928) : cb(G__19928));
}}
}
});})(map__19920,map__19920__$1,rewritten_ast__$1,require_macros,env,map__19918,map__19918__$1,uses,use_macros,reload,reloads,name,map__19898,map__19898__$1,ast,op))
);
}
});})(env,map__19918,map__19918__$1,uses,use_macros,reload,reloads,name,map__19898,map__19898__$1,ast,op))
);
} else {
try{if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Checking uses"], 0));
} else {
}

cljs.analyzer.check_uses((cljs.core.truth_((function (){var and__8796__auto__ = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__8796__auto__)){
return cljs.core.seq(uses);
} else {
return and__8796__auto__;
}
})())?cljs.analyzer.missing_uses(uses,env):null),env);

var G__19934 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__19934) : cb(G__19934));
}catch (e19932){var cause = e19932;
var G__19933 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__19933) : cb(G__19933));
}}
}
});})(map__19898,map__19898__$1,ast,op))
;
if(cljs.core.truth_((function (){var and__8796__auto__ = load;
if(cljs.core.truth_(and__8796__auto__)){
return cljs.core.seq(new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__8796__auto__;
}
})())){
var map__19935 = ast;
var map__19935__$1 = ((((!((map__19935 == null)))?((((map__19935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19935):map__19935);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19935__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19935__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19935__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars,ana_env,name,deps,(function (){var or__8808__auto__ = new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reload);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reload);
}
})(),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),((function (map__19935,map__19935__$1,reload,name,deps,map__19898,map__19898__$1,ast,op){
return (function (p1__19893_SHARP_){
return check_uses_and_load_macros(p1__19893_SHARP_,cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(p1__19893_SHARP_)));
});})(map__19935,map__19935__$1,reload,name,deps,map__19898,map__19898__$1,ast,op))
);
} else {
if(cljs.core.truth_((function (){var and__8796__auto__ = cljs.core.not(load);
if(and__8796__auto__){
var and__8796__auto____$1 = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__8796__auto____$1)){
return cljs.core.seq(new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
})())){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),((function (map__19898,map__19898__$1,ast,op){
return (function (p1__19894_SHARP_){
return check_uses_and_load_macros(p1__19894_SHARP_,cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(p1__19894_SHARP_)));
});})(map__19898,map__19898__$1,ast,op))
);
} else {
return check_uses_and_load_macros(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null),ast);

}
}
} else {
var G__19937 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__19937) : cb(G__19937));
}
});

cljs.js.ns_side_effects.cljs$lang$maxFixedArity = 6;

cljs.js.node_side_effects = (function cljs$js$node_side_effects(bound_vars,sb,deps,ns_name,emit_nil_result_QMARK_){
var seq__19941_19949 = cljs.core.seq(deps);
var chunk__19942_19950 = null;
var count__19943_19951 = (0);
var i__19944_19952 = (0);
while(true){
if((i__19944_19952 < count__19943_19951)){
var dep_19953 = chunk__19942_19950.cljs$core$IIndexed$_nth$arity$2(null,i__19944_19952);
sb.append((function (){var sb__9935__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_19945_19954 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_19946_19955 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (seq__19941_19949,chunk__19942_19950,count__19943_19951,i__19944_19952,_STAR_print_newline_STAR_19945_19954,_STAR_print_fn_STAR_19946_19955,sb__9935__auto__,dep_19953){
return (function (x__9936__auto__){
return sb__9935__auto__.append(x__9936__auto__);
});})(seq__19941_19949,chunk__19942_19950,count__19943_19951,i__19944_19952,_STAR_print_newline_STAR_19945_19954,_STAR_print_fn_STAR_19946_19955,sb__9935__auto__,dep_19953))
;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.munge(ns_name),".",cljs.analyzer.munge_node_lib(dep_19953)," = require('",dep_19953,"');"], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19946_19955;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19945_19954;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9935__auto__)].join('');
})());

var G__19956 = seq__19941_19949;
var G__19957 = chunk__19942_19950;
var G__19958 = count__19943_19951;
var G__19959 = (i__19944_19952 + (1));
seq__19941_19949 = G__19956;
chunk__19942_19950 = G__19957;
count__19943_19951 = G__19958;
i__19944_19952 = G__19959;
continue;
} else {
var temp__5457__auto___19960 = cljs.core.seq(seq__19941_19949);
if(temp__5457__auto___19960){
var seq__19941_19961__$1 = temp__5457__auto___19960;
if(cljs.core.chunked_seq_QMARK_(seq__19941_19961__$1)){
var c__9739__auto___19962 = cljs.core.chunk_first(seq__19941_19961__$1);
var G__19963 = cljs.core.chunk_rest(seq__19941_19961__$1);
var G__19964 = c__9739__auto___19962;
var G__19965 = cljs.core.count(c__9739__auto___19962);
var G__19966 = (0);
seq__19941_19949 = G__19963;
chunk__19942_19950 = G__19964;
count__19943_19951 = G__19965;
i__19944_19952 = G__19966;
continue;
} else {
var dep_19967 = cljs.core.first(seq__19941_19961__$1);
sb.append((function (){var sb__9935__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_19947_19968 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_19948_19969 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (seq__19941_19949,chunk__19942_19950,count__19943_19951,i__19944_19952,_STAR_print_newline_STAR_19947_19968,_STAR_print_fn_STAR_19948_19969,sb__9935__auto__,dep_19967,seq__19941_19961__$1,temp__5457__auto___19960){
return (function (x__9936__auto__){
return sb__9935__auto__.append(x__9936__auto__);
});})(seq__19941_19949,chunk__19942_19950,count__19943_19951,i__19944_19952,_STAR_print_newline_STAR_19947_19968,_STAR_print_fn_STAR_19948_19969,sb__9935__auto__,dep_19967,seq__19941_19961__$1,temp__5457__auto___19960))
;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.munge(ns_name),".",cljs.analyzer.munge_node_lib(dep_19967)," = require('",dep_19967,"');"], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19948_19969;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19947_19968;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9935__auto__)].join('');
})());

var G__19970 = cljs.core.next(seq__19941_19961__$1);
var G__19971 = null;
var G__19972 = (0);
var G__19973 = (0);
seq__19941_19949 = G__19970;
chunk__19942_19950 = G__19971;
count__19943_19951 = G__19972;
i__19944_19952 = G__19973;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__8796__auto__ = cljs.core.seq(deps);
if(and__8796__auto__){
return emit_nil_result_QMARK_;
} else {
return and__8796__auto__;
}
})())){
return sb.append("null;");
} else {
return null;
}
});
cljs.js.global_exports_side_effects = (function cljs$js$global_exports_side_effects(bound_vars,sb,deps,ns_name,emit_nil_result_QMARK_){
var map__19974 = cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars));
var map__19974__$1 = ((((!((map__19974 == null)))?((((map__19974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19974):map__19974);
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19974__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var seq__19976_19988 = cljs.core.seq(deps);
var chunk__19977_19989 = null;
var count__19978_19990 = (0);
var i__19979_19991 = (0);
while(true){
if((i__19979_19991 < count__19978_19990)){
var dep_19992 = chunk__19977_19989.cljs$core$IIndexed$_nth$arity$2(null,i__19979_19991);
var map__19980_19993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(dep_19992));
var map__19980_19994__$1 = ((((!((map__19980_19993 == null)))?((((map__19980_19993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19980_19993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19980_19993):map__19980_19993);
var global_exports_19995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19980_19994__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
sb.append((function (){var sb__9935__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_19982_19996 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_19983_19997 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (seq__19976_19988,chunk__19977_19989,count__19978_19990,i__19979_19991,_STAR_print_newline_STAR_19982_19996,_STAR_print_fn_STAR_19983_19997,sb__9935__auto__,map__19980_19993,map__19980_19994__$1,global_exports_19995,dep_19992,map__19974,map__19974__$1,js_dependency_index){
return (function (x__9936__auto__){
return sb__9935__auto__.append(x__9936__auto__);
});})(seq__19976_19988,chunk__19977_19989,count__19978_19990,i__19979_19991,_STAR_print_newline_STAR_19982_19996,_STAR_print_fn_STAR_19983_19997,sb__9935__auto__,map__19980_19993,map__19980_19994__$1,global_exports_19995,dep_19992,map__19974,map__19974__$1,js_dependency_index))
;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.munge(ns_name),".",cljs.analyzer.munge_global_export(dep_19992)," = goog.global.",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_19995,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(dep_19992)),";"], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19983_19997;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19982_19996;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9935__auto__)].join('');
})());

var G__19998 = seq__19976_19988;
var G__19999 = chunk__19977_19989;
var G__20000 = count__19978_19990;
var G__20001 = (i__19979_19991 + (1));
seq__19976_19988 = G__19998;
chunk__19977_19989 = G__19999;
count__19978_19990 = G__20000;
i__19979_19991 = G__20001;
continue;
} else {
var temp__5457__auto___20002 = cljs.core.seq(seq__19976_19988);
if(temp__5457__auto___20002){
var seq__19976_20003__$1 = temp__5457__auto___20002;
if(cljs.core.chunked_seq_QMARK_(seq__19976_20003__$1)){
var c__9739__auto___20004 = cljs.core.chunk_first(seq__19976_20003__$1);
var G__20005 = cljs.core.chunk_rest(seq__19976_20003__$1);
var G__20006 = c__9739__auto___20004;
var G__20007 = cljs.core.count(c__9739__auto___20004);
var G__20008 = (0);
seq__19976_19988 = G__20005;
chunk__19977_19989 = G__20006;
count__19978_19990 = G__20007;
i__19979_19991 = G__20008;
continue;
} else {
var dep_20009 = cljs.core.first(seq__19976_20003__$1);
var map__19984_20010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(dep_20009));
var map__19984_20011__$1 = ((((!((map__19984_20010 == null)))?((((map__19984_20010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19984_20010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19984_20010):map__19984_20010);
var global_exports_20012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19984_20011__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
sb.append((function (){var sb__9935__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_19986_20013 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_19987_20014 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (seq__19976_19988,chunk__19977_19989,count__19978_19990,i__19979_19991,_STAR_print_newline_STAR_19986_20013,_STAR_print_fn_STAR_19987_20014,sb__9935__auto__,map__19984_20010,map__19984_20011__$1,global_exports_20012,dep_20009,seq__19976_20003__$1,temp__5457__auto___20002,map__19974,map__19974__$1,js_dependency_index){
return (function (x__9936__auto__){
return sb__9935__auto__.append(x__9936__auto__);
});})(seq__19976_19988,chunk__19977_19989,count__19978_19990,i__19979_19991,_STAR_print_newline_STAR_19986_20013,_STAR_print_fn_STAR_19987_20014,sb__9935__auto__,map__19984_20010,map__19984_20011__$1,global_exports_20012,dep_20009,seq__19976_20003__$1,temp__5457__auto___20002,map__19974,map__19974__$1,js_dependency_index))
;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.munge(ns_name),".",cljs.analyzer.munge_global_export(dep_20009)," = goog.global.",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_20012,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(dep_20009)),";"], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19987_20014;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19986_20013;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9935__auto__)].join('');
})());

var G__20015 = cljs.core.next(seq__19976_20003__$1);
var G__20016 = null;
var G__20017 = (0);
var G__20018 = (0);
seq__19976_19988 = G__20015;
chunk__19977_19989 = G__20016;
count__19978_19990 = G__20017;
i__19979_19991 = G__20018;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__8796__auto__ = cljs.core.seq(deps);
if(and__8796__auto__){
return emit_nil_result_QMARK_;
} else {
return and__8796__auto__;
}
})())){
return sb.append("null;");
} else {
return null;
}
});
cljs.js.analyze_str_STAR_ = (function cljs$js$analyze_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var eof = {};
var aenv = cljs.analyzer.empty_env();
var the_ns = (function (){var or__8808__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__20021 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20021,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data());
} else {
return G__20021;
}
})();
var fexpr__20040 = ((function (rdr,eof,aenv,the_ns,bound_vars__$1){
return (function cljs$js$analyze_str_STAR__$_analyze_loop(last_ast,ns){
while(true){
var _STAR_compiler_STAR_20041 = cljs.env._STAR_compiler_STAR_;
var _STAR_cljs_ns_STAR_20042 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR_20043 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR_20044 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR_20045 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR_20046 = cljs.core._STAR_ns_STAR_;
var _STAR_passes_STAR_20047 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_alias_map_STAR_20048 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR_20049 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol20050 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR_20051 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR_20052 = cljs.analyzer._STAR_cljs_file_STAR_;
cljs.env._STAR_compiler_STAR_ = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.analyzer._STAR_checked_arrays_STAR_ = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);

cljs.analyzer._STAR_cljs_static_fns_STAR_ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = (function (){var and__8796__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__8796__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__8796__auto__;
}
})();

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);

cljs.analyzer._STAR_passes_STAR_ = new cljs.core.Keyword(null,"*passes*","*passes*",1335562782).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader._STAR_alias_map_STAR_ = cljs.js.current_alias_map();

cljs.tools.reader._STAR_data_readers_STAR_ = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader.resolve_symbol = cljs.js.resolve_symbol;

cljs.compiler._STAR_source_map_data_STAR_ = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_file_STAR_ = new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049).cljs$core$IFn$_invoke$arity$1(opts);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read(eof,rdr)], null);
}catch (e20053){var cause = e20053;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb(res));
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if(!((eof === form))){
var aenv__$1 = (function (){var G__20054 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__20054__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20054,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__20054);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20054__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__20054__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e20055){var cause = e20055;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb(res__$1));
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
if(cljs.core.truth_((function (){var G__20057 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__20056 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__20056.cljs$core$IFn$_invoke$arity$1 ? fexpr__20056.cljs$core$IFn$_invoke$arity$1(G__20057) : fexpr__20056(G__20057));
})())){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5(bound_vars__$1,aenv__$1,ast,opts,((function (last_ast,ns,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_20041,_STAR_cljs_ns_STAR_20042,_STAR_checked_arrays_STAR_20043,_STAR_cljs_static_fns_STAR_20044,_STAR_fn_invoke_direct_STAR_20045,_STAR_ns_STAR_20046,_STAR_passes_STAR_20047,_STAR_alias_map_STAR_20048,_STAR_data_readers_STAR_20049,resolve_symbol20050,_STAR_source_map_data_STAR_20051,_STAR_cljs_file_STAR_20052,rdr,eof,aenv,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb(res__$2));
} else {
return cljs$js$analyze_str_STAR__$_analyze_loop(ast,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
}
});})(last_ast,ns,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_20041,_STAR_cljs_ns_STAR_20042,_STAR_checked_arrays_STAR_20043,_STAR_cljs_static_fns_STAR_20044,_STAR_fn_invoke_direct_STAR_20045,_STAR_ns_STAR_20046,_STAR_passes_STAR_20047,_STAR_alias_map_STAR_20048,_STAR_data_readers_STAR_20049,resolve_symbol20050,_STAR_source_map_data_STAR_20051,_STAR_cljs_file_STAR_20052,rdr,eof,aenv,the_ns,bound_vars__$1))
);
} else {
var G__20059 = ast;
var G__20060 = ns;
last_ast = G__20059;
ns = G__20060;
continue;
}
}
} else {
var G__20058 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),last_ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__20058) : cb(G__20058));
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR_20052;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_20051;

cljs.tools.reader.resolve_symbol = resolve_symbol20050;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_20049;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_20048;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR_20047;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_20046;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR_20045;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR_20044;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR_20043;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_20042;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_20041;
}break;
}
});})(rdr,eof,aenv,the_ns,bound_vars__$1))
;
return fexpr__20040(null,the_ns);
});
/**
 * Analyze ClojureScript source. The compiler state will be populated with
 * the results of analyzes. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol or string)
 *   optional, the name of the source
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false).
 *                        Defaults to false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value, the actual value is not meaningful. If unsuccessful the
 *   map will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.analyze_str = (function cljs$js$analyze_str(var_args){
var G__20062 = arguments.length;
switch (G__20062) {
case 3:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.core.truth_(cljs.js.atom_QMARK_(state))){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.core.truth_(cljs.js.valid_name_QMARK_(name))){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.core.truth_(cljs.js.valid_opts_QMARK_(opts))){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.analyze_str_STAR_(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*passes*","*passes*",1335562782),(function (){var or__8808__auto__ = new cljs.core.Keyword(null,"passes","passes",-2141861841).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.analyzer._STAR_passes_STAR_;
}
})(),new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__8808__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__8808__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.analyze_str.cljs$lang$maxFixedArity = 5;

cljs.js.eval_STAR_ = (function cljs$js$eval_STAR_(bound_vars,form,opts,cb){
var the_ns = (function (){var or__8808__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__20064 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20064,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data());
} else {
return G__20064;
}
})();
var _STAR_compiler_STAR_20065 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR_20066 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR_20067 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR_20068 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR_20069 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR_20070 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR_20071 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR_20072 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR_20073 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol20074 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR_20075 = cljs.compiler._STAR_source_map_data_STAR_;
cljs.env._STAR_compiler_STAR_ = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.js._STAR_eval_fn_STAR_ = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_checked_arrays_STAR_ = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);

cljs.analyzer._STAR_cljs_static_fns_STAR_ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = (function (){var and__8796__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__8796__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__8796__auto__;
}
})();

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1));

cljs.tools.reader._STAR_alias_map_STAR_ = cljs.js.current_alias_map();

cljs.tools.reader._STAR_data_readers_STAR_ = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader.resolve_symbol = cljs.js.resolve_symbol;

cljs.compiler._STAR_source_map_data_STAR_ = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

try{var aenv = cljs.analyzer.empty_env();
var aenv__$1 = (function (){var G__20076 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__20076__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20076,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__20076);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20076__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__20076__$1;
}
})();
var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e20077){var cause = e20077;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb(res));
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
var vec__20078 = ((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__20081 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__20081__$1 = ((((!((map__20081 == null)))?((((map__20081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20081.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20081):map__20081);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20081__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20081__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20078,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20078,(1),null);
if(cljs.core.truth_((function (){var G__20084 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__20083 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__20083.cljs$core$IFn$_invoke$arity$1 ? fexpr__20083.cljs$core$IFn$_invoke$arity$1(G__20084) : fexpr__20083(G__20084));
})())){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(true,bound_vars__$1,aenv__$1,ast__$1,opts,((function (ast,vec__20078,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR_20065,_STAR_eval_fn_STAR_20066,_STAR_cljs_ns_STAR_20067,_STAR_checked_arrays_STAR_20068,_STAR_cljs_static_fns_STAR_20069,_STAR_fn_invoke_direct_STAR_20070,_STAR_ns_STAR_20071,_STAR_alias_map_STAR_20072,_STAR_data_readers_STAR_20073,resolve_symbol20074,_STAR_source_map_data_STAR_20075,the_ns,bound_vars__$1){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb(res__$1));
} else {
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1);
var sb = (new goog.string.StringBuffer());
sb.append((function (){var sb__9935__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_20085_20091 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_20086_20092 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_20085_20091,_STAR_print_fn_STAR_20086_20092,sb__9935__auto__,ns_name,sb,ast,vec__20078,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR_20065,_STAR_eval_fn_STAR_20066,_STAR_cljs_ns_STAR_20067,_STAR_checked_arrays_STAR_20068,_STAR_cljs_static_fns_STAR_20069,_STAR_fn_invoke_direct_STAR_20070,_STAR_ns_STAR_20071,_STAR_alias_map_STAR_20072,_STAR_data_readers_STAR_20073,resolve_symbol20074,_STAR_source_map_data_STAR_20075,the_ns,bound_vars__$1){
return (function (x__9936__auto__){
return sb__9935__auto__.append(x__9936__auto__);
});})(_STAR_print_newline_STAR_20085_20091,_STAR_print_fn_STAR_20086_20092,sb__9935__auto__,ns_name,sb,ast,vec__20078,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR_20065,_STAR_eval_fn_STAR_20066,_STAR_cljs_ns_STAR_20067,_STAR_checked_arrays_STAR_20068,_STAR_cljs_static_fns_STAR_20069,_STAR_fn_invoke_direct_STAR_20070,_STAR_ns_STAR_20071,_STAR_alias_map_STAR_20072,_STAR_data_readers_STAR_20073,resolve_symbol20074,_STAR_source_map_data_STAR_20075,the_ns,bound_vars__$1))
;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name)),"\");"].join('')], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_20086_20092;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_20085_20091;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9935__auto__)].join('');
})());

if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));
}

cljs.js.global_exports_side_effects(bound_vars__$1,sb,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast__$1)),ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));

var G__20087 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),sb.toString()], null)) : cljs.js._STAR_eval_fn_STAR_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),sb.toString()], null)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__20087) : cb(G__20087));
}
});})(ast,vec__20078,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR_20065,_STAR_eval_fn_STAR_20066,_STAR_cljs_ns_STAR_20067,_STAR_checked_arrays_STAR_20068,_STAR_cljs_static_fns_STAR_20069,_STAR_fn_invoke_direct_STAR_20070,_STAR_ns_STAR_20071,_STAR_alias_map_STAR_20072,_STAR_data_readers_STAR_20073,resolve_symbol20074,_STAR_source_map_data_STAR_20075,the_ns,bound_vars__$1))
);
} else {
var src = (function (){var sb__9935__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_20088_20093 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_20089_20094 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_20088_20093,_STAR_print_fn_STAR_20089_20094,sb__9935__auto__,ast,vec__20078,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR_20065,_STAR_eval_fn_STAR_20066,_STAR_cljs_ns_STAR_20067,_STAR_checked_arrays_STAR_20068,_STAR_cljs_static_fns_STAR_20069,_STAR_fn_invoke_direct_STAR_20070,_STAR_ns_STAR_20071,_STAR_alias_map_STAR_20072,_STAR_data_readers_STAR_20073,resolve_symbol20074,_STAR_source_map_data_STAR_20075,the_ns,bound_vars__$1){
return (function (x__9936__auto__){
return sb__9935__auto__.append(x__9936__auto__);
});})(_STAR_print_newline_STAR_20088_20093,_STAR_print_fn_STAR_20089_20094,sb__9935__auto__,ast,vec__20078,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR_20065,_STAR_eval_fn_STAR_20066,_STAR_cljs_ns_STAR_20067,_STAR_checked_arrays_STAR_20068,_STAR_cljs_static_fns_STAR_20069,_STAR_fn_invoke_direct_STAR_20070,_STAR_ns_STAR_20071,_STAR_alias_map_STAR_20072,_STAR_data_readers_STAR_20073,resolve_symbol20074,_STAR_source_map_data_STAR_20075,the_ns,bound_vars__$1))
;

try{cljs.compiler.emit(ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_20089_20094;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_20088_20093;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9935__auto__)].join('');
})();
var G__20090 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),src], null)) : cljs.js._STAR_eval_fn_STAR_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),src], null)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__20090) : cb(G__20090));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_20075;

cljs.tools.reader.resolve_symbol = resolve_symbol20074;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_20073;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_20072;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_20071;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR_20070;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR_20069;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR_20068;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_20067;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR_20066;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_20065;
}});
/**
 * Evaluate a single ClojureScript form. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * form (s-expr)
 *   the ClojureScript source
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false). Default
 *                        is false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the result of evalution. If unsuccessful the map will
 *   contain a key :error with an ex-info instance describing the cause of
 *   failure.
 */
cljs.js.eval = (function cljs$js$eval(var_args){
var G__20096 = arguments.length;
switch (G__20096) {
case 3:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$3 = (function (state,form,cb){
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4(state,form,null,cb);
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$4 = (function (state,form,opts,cb){
return cljs.js.eval_STAR_(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__8808__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__8808__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),form,opts,cb);
});

cljs.js.eval.cljs$lang$maxFixedArity = 4;

cljs.js.compile_str_STAR_ = (function cljs$js$compile_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var eof = {};
var aenv = cljs.analyzer.empty_env();
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__8808__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__20100 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20100,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data());
} else {
return G__20100;
}
})();
var fexpr__20127 = ((function (rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function cljs$js$compile_str_STAR__$_compile_loop(ns){
while(true){
var _STAR_compiler_STAR_20128 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR_20129 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR_20130 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR_20131 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR_20132 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR_20133 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR_20134 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR_20135 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR_20136 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol20137 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR_20138 = cljs.compiler._STAR_source_map_data_STAR_;
cljs.env._STAR_compiler_STAR_ = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.js._STAR_eval_fn_STAR_ = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.analyzer._STAR_checked_arrays_STAR_ = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);

cljs.analyzer._STAR_cljs_static_fns_STAR_ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = (function (){var and__8796__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__8796__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__8796__auto__;
}
})();

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);

cljs.tools.reader._STAR_alias_map_STAR_ = cljs.js.current_alias_map();

cljs.tools.reader._STAR_data_readers_STAR_ = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader.resolve_symbol = cljs.js.resolve_symbol;

cljs.compiler._STAR_source_map_data_STAR_ = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read(eof,rdr)], null);
}catch (e20139){var cause = e20139;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb(res));
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if(!((eof === form))){
var aenv__$1 = (function (){var G__20140 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__20140__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20140,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__20140);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20140__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__20140__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e20141){var cause = e20141;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb(res__$1));
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
var vec__20142 = ((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__20145 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__20145__$1 = ((((!((map__20145 == null)))?((((map__20145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20145.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20145):map__20145);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20145__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20145__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20142,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20142,(1),null);
if(cljs.core.truth_((function (){var G__20148 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__20147 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__20147.cljs$core$IFn$_invoke$arity$1 ? fexpr__20147.cljs$core$IFn$_invoke$arity$1(G__20148) : fexpr__20147(G__20148));
})())){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5(bound_vars__$1,aenv__$1,ast__$1,opts,((function (ns,ast,vec__20142,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_20128,_STAR_eval_fn_STAR_20129,_STAR_cljs_ns_STAR_20130,_STAR_checked_arrays_STAR_20131,_STAR_cljs_static_fns_STAR_20132,_STAR_fn_invoke_direct_STAR_20133,_STAR_ns_STAR_20134,_STAR_alias_map_STAR_20135,_STAR_data_readers_STAR_20136,resolve_symbol20137,_STAR_source_map_data_STAR_20138,rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb(res__$2));
} else {
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1);
sb.append((function (){var sb__9935__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_20149_20154 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_20150_20155 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (ns,_STAR_print_newline_STAR_20149_20154,_STAR_print_fn_STAR_20150_20155,sb__9935__auto__,ns_name,ast,vec__20142,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_20128,_STAR_eval_fn_STAR_20129,_STAR_cljs_ns_STAR_20130,_STAR_checked_arrays_STAR_20131,_STAR_cljs_static_fns_STAR_20132,_STAR_fn_invoke_direct_STAR_20133,_STAR_ns_STAR_20134,_STAR_alias_map_STAR_20135,_STAR_data_readers_STAR_20136,resolve_symbol20137,_STAR_source_map_data_STAR_20138,rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__9936__auto__){
return sb__9935__auto__.append(x__9936__auto__);
});})(ns,_STAR_print_newline_STAR_20149_20154,_STAR_print_fn_STAR_20150_20155,sb__9935__auto__,ns_name,ast,vec__20142,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_20128,_STAR_eval_fn_STAR_20129,_STAR_cljs_ns_STAR_20130,_STAR_checked_arrays_STAR_20131,_STAR_cljs_static_fns_STAR_20132,_STAR_fn_invoke_direct_STAR_20133,_STAR_ns_STAR_20134,_STAR_alias_map_STAR_20135,_STAR_data_readers_STAR_20136,resolve_symbol20137,_STAR_source_map_data_STAR_20138,rdr,eof,aenv,sb,the_ns,bound_vars__$1))
;

try{cljs.compiler.emit(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$2));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_20150_20155;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_20149_20154;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9935__auto__)].join('');
})());

if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));
}

return cljs$js$compile_str_STAR__$_compile_loop(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1));
}
});})(ns,ast,vec__20142,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_20128,_STAR_eval_fn_STAR_20129,_STAR_cljs_ns_STAR_20130,_STAR_checked_arrays_STAR_20131,_STAR_cljs_static_fns_STAR_20132,_STAR_fn_invoke_direct_STAR_20133,_STAR_ns_STAR_20134,_STAR_alias_map_STAR_20135,_STAR_data_readers_STAR_20136,resolve_symbol20137,_STAR_source_map_data_STAR_20138,rdr,eof,aenv,sb,the_ns,bound_vars__$1))
);
} else {
sb.append((function (){var sb__9935__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_20151_20156 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_20152_20157 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (ns,_STAR_print_newline_STAR_20151_20156,_STAR_print_fn_STAR_20152_20157,sb__9935__auto__,ast,vec__20142,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_20128,_STAR_eval_fn_STAR_20129,_STAR_cljs_ns_STAR_20130,_STAR_checked_arrays_STAR_20131,_STAR_cljs_static_fns_STAR_20132,_STAR_fn_invoke_direct_STAR_20133,_STAR_ns_STAR_20134,_STAR_alias_map_STAR_20135,_STAR_data_readers_STAR_20136,resolve_symbol20137,_STAR_source_map_data_STAR_20138,rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__9936__auto__){
return sb__9935__auto__.append(x__9936__auto__);
});})(ns,_STAR_print_newline_STAR_20151_20156,_STAR_print_fn_STAR_20152_20157,sb__9935__auto__,ast,vec__20142,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_20128,_STAR_eval_fn_STAR_20129,_STAR_cljs_ns_STAR_20130,_STAR_checked_arrays_STAR_20131,_STAR_cljs_static_fns_STAR_20132,_STAR_fn_invoke_direct_STAR_20133,_STAR_ns_STAR_20134,_STAR_alias_map_STAR_20135,_STAR_data_readers_STAR_20136,resolve_symbol20137,_STAR_source_map_data_STAR_20138,rdr,eof,aenv,sb,the_ns,bound_vars__$1))
;

try{cljs.compiler.emit(ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_20152_20157;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_20151_20156;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9935__auto__)].join('');
})());

var G__20158 = ns;
ns = G__20158;
continue;
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map(cljs.env._STAR_compiler_STAR_,name,source,sb,cljs.core.deref(cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

var G__20153 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),sb.toString()], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__20153) : cb(G__20153));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_20138;

cljs.tools.reader.resolve_symbol = resolve_symbol20137;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_20136;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_20135;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_20134;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR_20133;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR_20132;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR_20131;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_20130;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR_20129;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_20128;
}break;
}
});})(rdr,eof,aenv,sb,the_ns,bound_vars__$1))
;
return fexpr__20127(the_ns);
});
/**
 * Compile ClojureScript source into JavaScript. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol or string)
 *   optional, the name of the source
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false). Default
 *                        is false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the compilation result (string). If unsuccessful the map
 *   will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.compile_str = (function cljs$js$compile_str(var_args){
var G__20160 = arguments.length;
switch (G__20160) {
case 3:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.core.truth_(cljs.js.atom_QMARK_(state))){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.core.truth_(cljs.js.valid_name_QMARK_(name))){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.core.truth_(cljs.js.valid_opts_QMARK_(opts))){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.compile_str_STAR_(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__8808__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__8808__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))?cljs.js.sm_data():null)], null),source,name,opts,cb);
});

cljs.js.compile_str.cljs$lang$maxFixedArity = 5;

cljs.js.eval_str_STAR_ = (function cljs$js$eval_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var eof = {};
var aenv = cljs.analyzer.empty_env();
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__8808__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__20164 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20164,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data());
} else {
return G__20164;
}
})();
var aname = (function (){var G__20165 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__20165);
} else {
return G__20165;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Evaluating",name], 0));
} else {
}

var G__20195 = new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var fexpr__20194 = ((function (G__20195,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function cljs$js$eval_str_STAR__$_compile_loop(ns){
while(true){
var _STAR_compiler_STAR_20196 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR_20197 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR_20198 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR_20199 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR_20200 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR_20201 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR_20202 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR_20203 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR_20204 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol20205 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR_20206 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR_20207 = cljs.analyzer._STAR_cljs_file_STAR_;
cljs.env._STAR_compiler_STAR_ = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.js._STAR_eval_fn_STAR_ = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.analyzer._STAR_checked_arrays_STAR_ = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);

cljs.analyzer._STAR_cljs_static_fns_STAR_ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = (function (){var and__8796__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__8796__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__8796__auto__;
}
})();

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);

cljs.tools.reader._STAR_alias_map_STAR_ = cljs.js.current_alias_map();

cljs.tools.reader._STAR_data_readers_STAR_ = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader.resolve_symbol = cljs.js.resolve_symbol;

cljs.compiler._STAR_source_map_data_STAR_ = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_file_STAR_ = new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049).cljs$core$IFn$_invoke$arity$1(opts);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read(eof,rdr)], null);
}catch (e20208){var cause = e20208;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb(res));
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if(!((eof === form))){
var aenv__$1 = (function (){var G__20209 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(ns));
var G__20209__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20209,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__20209);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20209__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__20209__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e20210){var cause = e20210;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb(res__$1));
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
var ns_SINGLEQUOTE_ = cljs.analyzer._STAR_cljs_ns_STAR_;
var vec__20211 = ((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__20214 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__20214__$1 = ((((!((map__20214 == null)))?((((map__20214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20214.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20214):map__20214);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20214__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20214__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20211,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20211,(1),null);
if(cljs.core.truth_((function (){var G__20217 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__20216 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__20216.cljs$core$IFn$_invoke$arity$1 ? fexpr__20216.cljs$core$IFn$_invoke$arity$1(G__20217) : fexpr__20216(G__20217));
})())){
sb.append((function (){var sb__9935__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_20218_20224 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_20219_20225 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (ns,_STAR_print_newline_STAR_20218_20224,_STAR_print_fn_STAR_20219_20225,sb__9935__auto__,ast,ns_SINGLEQUOTE_,vec__20211,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_20196,_STAR_eval_fn_STAR_20197,_STAR_cljs_ns_STAR_20198,_STAR_checked_arrays_STAR_20199,_STAR_cljs_static_fns_STAR_20200,_STAR_fn_invoke_direct_STAR_20201,_STAR_ns_STAR_20202,_STAR_alias_map_STAR_20203,_STAR_data_readers_STAR_20204,resolve_symbol20205,_STAR_source_map_data_STAR_20206,_STAR_cljs_file_STAR_20207,G__20195,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__9936__auto__){
return sb__9935__auto__.append(x__9936__auto__);
});})(ns,_STAR_print_newline_STAR_20218_20224,_STAR_print_fn_STAR_20219_20225,sb__9935__auto__,ast,ns_SINGLEQUOTE_,vec__20211,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_20196,_STAR_eval_fn_STAR_20197,_STAR_cljs_ns_STAR_20198,_STAR_checked_arrays_STAR_20199,_STAR_cljs_static_fns_STAR_20200,_STAR_fn_invoke_direct_STAR_20201,_STAR_ns_STAR_20202,_STAR_alias_map_STAR_20203,_STAR_data_readers_STAR_20204,resolve_symbol20205,_STAR_source_map_data_STAR_20206,_STAR_cljs_file_STAR_20207,G__20195,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1))),"\");"].join('')], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_20219_20225;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_20218_20224;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9935__auto__)].join('');
})());

return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(true,bound_vars__$1,aenv__$1,ast__$1,opts,((function (ns,ast,ns_SINGLEQUOTE_,vec__20211,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_20196,_STAR_eval_fn_STAR_20197,_STAR_cljs_ns_STAR_20198,_STAR_checked_arrays_STAR_20199,_STAR_cljs_static_fns_STAR_20200,_STAR_fn_invoke_direct_STAR_20201,_STAR_ns_STAR_20202,_STAR_alias_map_STAR_20203,_STAR_data_readers_STAR_20204,resolve_symbol20205,_STAR_source_map_data_STAR_20206,_STAR_cljs_file_STAR_20207,G__20195,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb(res__$2));
} else {
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1);
if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));
}

cljs.js.global_exports_side_effects(bound_vars__$1,sb,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast__$1)),ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));

return cljs$js$eval_str_STAR__$_compile_loop(ns_SINGLEQUOTE_);
}
});})(ns,ast,ns_SINGLEQUOTE_,vec__20211,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_20196,_STAR_eval_fn_STAR_20197,_STAR_cljs_ns_STAR_20198,_STAR_checked_arrays_STAR_20199,_STAR_cljs_static_fns_STAR_20200,_STAR_fn_invoke_direct_STAR_20201,_STAR_ns_STAR_20202,_STAR_alias_map_STAR_20203,_STAR_data_readers_STAR_20204,resolve_symbol20205,_STAR_source_map_data_STAR_20206,_STAR_cljs_file_STAR_20207,G__20195,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname))
);
} else {
var env__15012__auto___20226 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),new cljs.core.Keyword(null,"options","options",99638489),opts);
var env__15012__auto___20227__$1 = ((cljs.core.map_QMARK_(env__15012__auto___20226))?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(env__15012__auto___20226):((((env__15012__auto___20226 instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_(cljs.core.deref(env__15012__auto___20226))))?env__15012__auto___20226:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(env__15012__auto___20226))].join('')))})()
));
var _STAR_compiler_STAR_20220_20228 = cljs.env._STAR_compiler_STAR_;
cljs.env._STAR_compiler_STAR_ = env__15012__auto___20227__$1;

try{sb.append((function (){var sb__9935__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_20221_20229 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_20222_20230 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (ns,_STAR_print_newline_STAR_20221_20229,_STAR_print_fn_STAR_20222_20230,sb__9935__auto__,_STAR_compiler_STAR_20220_20228,env__15012__auto___20226,env__15012__auto___20227__$1,ast,ns_SINGLEQUOTE_,vec__20211,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_20196,_STAR_eval_fn_STAR_20197,_STAR_cljs_ns_STAR_20198,_STAR_checked_arrays_STAR_20199,_STAR_cljs_static_fns_STAR_20200,_STAR_fn_invoke_direct_STAR_20201,_STAR_ns_STAR_20202,_STAR_alias_map_STAR_20203,_STAR_data_readers_STAR_20204,resolve_symbol20205,_STAR_source_map_data_STAR_20206,_STAR_cljs_file_STAR_20207,G__20195,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__9936__auto__){
return sb__9935__auto__.append(x__9936__auto__);
});})(ns,_STAR_print_newline_STAR_20221_20229,_STAR_print_fn_STAR_20222_20230,sb__9935__auto__,_STAR_compiler_STAR_20220_20228,env__15012__auto___20226,env__15012__auto___20227__$1,ast,ns_SINGLEQUOTE_,vec__20211,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_20196,_STAR_eval_fn_STAR_20197,_STAR_cljs_ns_STAR_20198,_STAR_checked_arrays_STAR_20199,_STAR_cljs_static_fns_STAR_20200,_STAR_fn_invoke_direct_STAR_20201,_STAR_ns_STAR_20202,_STAR_alias_map_STAR_20203,_STAR_data_readers_STAR_20204,resolve_symbol20205,_STAR_source_map_data_STAR_20206,_STAR_cljs_file_STAR_20207,G__20195,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;

try{cljs.compiler.emit(ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_20222_20230;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_20221_20229;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9935__auto__)].join('');
})());
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_20220_20228;
}
var G__20231 = ns_SINGLEQUOTE_;
ns = G__20231;
continue;
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map(cljs.env._STAR_compiler_STAR_,aname,source,sb,cljs.core.deref(cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

if((aname instanceof cljs.core.Symbol)){
cljs.analyzer.dump_specs(aname);
} else {
}

var js_source = sb.toString();
var evalm = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath(name),new cljs.core.Keyword(null,"source","source",-433931539),js_source,new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),aname], null))], null);
var complete = ((function (ns,js_source,evalm,form,res,_STAR_compiler_STAR_20196,_STAR_eval_fn_STAR_20197,_STAR_cljs_ns_STAR_20198,_STAR_checked_arrays_STAR_20199,_STAR_cljs_static_fns_STAR_20200,_STAR_fn_invoke_direct_STAR_20201,_STAR_ns_STAR_20202,_STAR_alias_map_STAR_20203,_STAR_data_readers_STAR_20204,resolve_symbol20205,_STAR_source_map_data_STAR_20206,_STAR_cljs_file_STAR_20207,G__20195,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb(res__$1));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([js_source], 0));
} else {
}

var res__$2 = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"value","value",305978217),(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(evalm) : cljs.js._STAR_eval_fn_STAR_(evalm))], null);
}catch (e20223){var cause = e20223;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,"ERROR",cause));
}})();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb(res__$2));
}
});})(ns,js_source,evalm,form,res,_STAR_compiler_STAR_20196,_STAR_eval_fn_STAR_20197,_STAR_cljs_ns_STAR_20198,_STAR_checked_arrays_STAR_20199,_STAR_cljs_static_fns_STAR_20200,_STAR_fn_invoke_direct_STAR_20201,_STAR_ns_STAR_20202,_STAR_alias_map_STAR_20203,_STAR_data_readers_STAR_20204,resolve_symbol20205,_STAR_source_map_data_STAR_20206,_STAR_cljs_file_STAR_20207,G__20195,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
var temp__5455__auto__ = new cljs.core.Keyword(null,"cache-source","cache-source",-190922003).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(evalm,complete) : f(evalm,complete));
} else {
return complete(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR_20207;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_20206;

cljs.tools.reader.resolve_symbol = resolve_symbol20205;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_20204;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_20203;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_20202;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR_20201;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR_20200;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR_20199;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_20198;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR_20197;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_20196;
}break;
}
});})(G__20195,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
return fexpr__20194(G__20195);
});
/**
 * Evalute ClojureScript source given as a string. The parameters:
 * 
 *   state (atom)
 *  the compiler state
 * 
 *   source (string)
 *  the ClojureScript source
 * 
 *   name (symbol or string)
 *  optional, the name of the source
 * 
 *   opts (map)
 *  compilation options.
 * 
 *  :eval             - eval function to invoke, see *eval-fn*
 *  :load             - library resolution function, see *load-fn*
 *  :source-map       - set to true to generate inline source map information
 *  :cache-source     - optional, a function to run side-effects with the
 *                      compilation result prior to actual evalution. This function
 *                      takes two arguments, the first is the eval map, the source
 *                      will be under :source. The second argument is a callback of
 *                      one argument. If an error occurs an :error key should be
 *                      supplied.
 *  :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                      (if set to true) or the def init value (if false). Default
 *                      is false.
 *  :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                      to aget/aset. Logs for incorrect values if :warn, throws if
 *                      :error. Defaults to false.
 *  :static-fns       - employ static dispatch to specific function arities in
 *                      emitted JavaScript, as opposed to making use of the
 *                      `call` construct. Defaults to false.
 *  :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                      unknown functions, but instead direct invokes via
 *                      `f(a0,a1...)`. Defaults to `false`.
 *  :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                      at the moment.
 *  :ns               - optional, the namespace in which to evaluate the source.
 *  :verbose          - optional, emit details from compiler activity. Defaults to
 *                      false.
 *  :context          - optional, sets the context for the source. Possible values
 *                   are `:expr`, `:statement` and `:return`. Defaults to
 *                    `:expr`.
 * 
 *   cb (function)
 *  callback, will be invoked with a map. If succesful the map will contain
 *  a :value key with the result of evaluation and :ns the current namespace.
 *  If unsuccessful will contain a :error key with an ex-info instance describing
 *  the cause of failure.
 */
cljs.js.eval_str = (function cljs$js$eval_str(var_args){
var G__20233 = arguments.length;
switch (G__20233) {
case 3:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.core.truth_(cljs.js.atom_QMARK_(state))){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.core.truth_(cljs.js.valid_name_QMARK_(name))){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.core.truth_(cljs.js.valid_opts_QMARK_(opts))){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.eval_str_STAR_(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__8808__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__8808__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.eval_str.cljs$lang$maxFixedArity = 5;

