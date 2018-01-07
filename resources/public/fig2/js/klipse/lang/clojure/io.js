// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.lang.clojure.io');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('klipse.utils');
goog.require('klipse.lang.clojure.include');
goog.require('clojure.walk');
goog.require('cljs_http.client');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
klipse.lang.clojure.io.edn = (function klipse$lang$clojure$io$edn(json){
return cljs_http.util.transit_decode.call(null,JSON.stringify(cljs.core.clj__GT_js.call(null,json)),new cljs.core.Keyword(null,"json","json",1279968570),null);
});
klipse.lang.clojure.io.macro_suffixes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".clj",".cljc"], null);
klipse.lang.clojure.io.cljs_suffixes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cljs",".cljc"], null);
if(typeof klipse.lang.clojure.io.load_ns !== 'undefined'){
} else {
/**
 * 
 *   Each runtime environment provides a different way to load a library.
 *   Received two arguments - a map and a callback function:
 *   The map will have the following keys:
 * 
 *  :name   - the name of the library (a symbol)
 *  :macros - modifier signaling a macros namespace load
 *  :path   - munged relative library path (a string)
 * 
 *  It is up to the implementor to correctly resolve the corresponding .cljs,
 *  .cljc, or .js resource (the order must be respected).
 *  If :macros is true, resolution should only consider .clj or .cljc resources (the order must be respected).
 *   Upon resolution the callback should be invoked with a map containing the following keys:
 * 
 *  :lang       - the language, :clj or :js
 *  :source     - the source of the library (a string)
 *  :file       - optional, the file path, it will be added to AST's :file keyword (but not in :meta)
 *  :cache      - optional, if a :clj namespace has been precompiled to :js, can give an analysis cache for faster loads.
 *  :source-map - optional, if a :clj namespace has been precompiled to :js, can give a V3 source map JSON
 * 
 *  If the resource could not be resolved, the callback should be invoked with
 *  nil.
 */
klipse.lang.clojure.io.load_ns = (function (){var method_table__9416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9420__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse.lang.clojure.io","load-ns"),((function (method_table__9416__auto__,prefer_table__9417__auto__,method_cache__9418__auto__,cached_hierarchy__9419__auto__,hierarchy__9420__auto__){
return (function (_,p__150739,src_cb){
var map__150740 = p__150739;
var map__150740__$1 = ((((!((map__150740 == null)))?((((map__150740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150740.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150740):map__150740);
var name = cljs.core.get.call(null,map__150740__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__150740__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__150740__$1,new cljs.core.Keyword(null,"path","path",-188191168));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,macros,path], null);

if(cljs.core.truth_(macros)){
return new cljs.core.Keyword(null,"macro","macro",-867863404);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^goog\..*/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return new cljs.core.Keyword(null,"goog","goog",-1711135452);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*\.gist-.*/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return new cljs.core.Keyword(null,"gist","gist",96143031);
} else {
return new cljs.core.Keyword(null,"cljs","cljs",1492417629);

}
}
}
});})(method_table__9416__auto__,prefer_table__9417__auto__,method_cache__9418__auto__,cached_hierarchy__9419__auto__,hierarchy__9420__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9420__auto__,method_table__9416__auto__,prefer_table__9417__auto__,method_cache__9418__auto__,cached_hierarchy__9419__auto__));
})();
}
klipse.lang.clojure.io.skip_ns_macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"cljs.analyzer.macros","cljs.analyzer.macros",298494182,null),null,new cljs.core.Symbol(null,"cljs.env.macros","cljs.env.macros",1542748640,null),null,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),null,new cljs.core.Symbol(null,"cljs.compiler.macros","cljs.compiler.macros",750996207,null),null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null,new cljs.core.Symbol(null,"cljs.js","cljs.js",474485962,null),null], null), null);
klipse.lang.clojure.io.the_ns_map = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"clojure.template","clojure.template",-1162325089,null),"https://raw.githubusercontent.com/viebel/clojure/master/src/clj/"], null);
klipse.lang.clojure.io.skip_ns_cljs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"cljs.source-map","cljs.source-map",2108014936,null),null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null,new cljs.core.Symbol(null,"cljs.tools.reader","cljs.tools.reader",-831293977,null),null,new cljs.core.Symbol(null,"cljs.tools.reader.reader-types","cljs.tools.reader.reader-types",-346100821,null),null,new cljs.core.Symbol(null,"cljs.env","cljs.env",-1810013139,null),null], null), null);
klipse.lang.clojure.io.cache_buster_QMARK_ = (function klipse$lang$clojure$io$cache_buster_QMARK_(){
return cljs.core.boolean$.call(null,cljs.reader.read_string.call(null,(function (){var or__8363__auto__ = new cljs.core.Keyword(null,"cache-buster","cache-buster",-1567170482).cljs$core$IFn$_invoke$arity$1(klipse.utils.url_parameters.call(null));
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return "false";
}
})()));
});
klipse.lang.clojure.io.filename_of = (function klipse$lang$clojure$io$filename_of(s,cache_buster_QMARK_){
if(cljs.core.truth_(cache_buster_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.call(null))].join('');
} else {
return s;
}
});
/**
 * Tries to load one namespace from filenames.
 *   Will call the src-cb upon first success.
 *   If can-recover? is false, will call src-cb with nil if it cannot load any namespace.
 *   Returns :success if a nampespace was loaded otherwise, returns nil.
 *   
 */
klipse.lang.clojure.io.try_to_load_ns = (function klipse$lang$clojure$io$try_to_load_ns(var_args){
var args__9647__auto__ = [];
var len__9640__auto___150857 = arguments.length;
var i__9641__auto___150858 = (0);
while(true){
if((i__9641__auto___150858 < len__9640__auto___150857)){
args__9647__auto__.push((arguments[i__9641__auto___150858]));

var G__150859 = (i__9641__auto___150858 + (1));
i__9641__auto___150858 = G__150859;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((4) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((4)),(0),null)):null);
return klipse.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9648__auto__);
});

klipse.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic = (function (filenames,lang,src_key,src_cb,p__150747){
var map__150748 = p__150747;
var map__150748__$1 = ((((!((map__150748 == null)))?((((map__150748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150748):map__150748);
var transform = cljs.core.get.call(null,map__150748__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.identity);
var can_recover_QMARK_ = cljs.core.get.call(null,map__150748__$1,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),false);
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("try-to-load-ns ",filenames,lang,src_key);
} else {
}

var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,map__150748,map__150748__$1,transform,can_recover_QMARK_){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,map__150748,map__150748__$1,transform,can_recover_QMARK_){
return (function (state_150814){
var state_val_150815 = (state_150814[(1)]);
if((state_val_150815 === (7))){
var inst_150763 = (state_150814[(7)]);
var inst_150763__$1 = (state_150814[(2)]);
var inst_150765 = (inst_150763__$1 == null);
var inst_150766 = cljs.core.not.call(null,inst_150765);
var state_150814__$1 = (function (){var statearr_150816 = state_150814;
(statearr_150816[(7)] = inst_150763__$1);

return statearr_150816;
})();
if(inst_150766){
var statearr_150817_150860 = state_150814__$1;
(statearr_150817_150860[(1)] = (8));

} else {
var statearr_150818_150861 = state_150814__$1;
(statearr_150818_150861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150815 === (20))){
var state_150814__$1 = state_150814;
var statearr_150819_150862 = state_150814__$1;
(statearr_150819_150862[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_150819_150862[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150815 === (1))){
var inst_150750 = filenames;
var state_150814__$1 = (function (){var statearr_150820 = state_150814;
(statearr_150820[(8)] = inst_150750);

return statearr_150820;
})();
var statearr_150821_150863 = state_150814__$1;
(statearr_150821_150863[(2)] = null);

(statearr_150821_150863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150815 === (24))){
var inst_150808 = src_cb.call(null,null);
var state_150814__$1 = state_150814;
var statearr_150822_150864 = state_150814__$1;
(statearr_150822_150864[(2)] = inst_150808);

(statearr_150822_150864[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150815 === (4))){
var inst_150755 = (state_150814[(9)]);
var inst_150750 = (state_150814[(8)]);
var inst_150755__$1 = cljs.core.first.call(null,inst_150750);
var inst_150756 = klipse.lang.clojure.io.cache_buster_QMARK_.call(null);
var inst_150757 = klipse.lang.clojure.io.filename_of.call(null,inst_150755__$1,inst_150756);
var inst_150758 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_150759 = [false];
var inst_150760 = cljs.core.PersistentHashMap.fromArrays(inst_150758,inst_150759);
var inst_150761 = cljs_http.client.get.call(null,inst_150757,inst_150760);
var state_150814__$1 = (function (){var statearr_150823 = state_150814;
(statearr_150823[(9)] = inst_150755__$1);

return statearr_150823;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150814__$1,(7),inst_150761);
} else {
if((state_val_150815 === (15))){
var inst_150763 = (state_150814[(7)]);
var state_150814__$1 = state_150814;
var statearr_150824_150865 = state_150814__$1;
(statearr_150824_150865[(2)] = inst_150763);

(statearr_150824_150865[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150815 === (21))){
var state_150814__$1 = state_150814;
if(cljs.core.truth_(can_recover_QMARK_)){
var statearr_150825_150866 = state_150814__$1;
(statearr_150825_150866[(1)] = (23));

} else {
var statearr_150826_150867 = state_150814__$1;
(statearr_150826_150867[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150815 === (13))){
var inst_150776 = (state_150814[(2)]);
var state_150814__$1 = state_150814;
var statearr_150827_150868 = state_150814__$1;
(statearr_150827_150868[(2)] = inst_150776);

(statearr_150827_150868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150815 === (22))){
var inst_150812 = (state_150814[(2)]);
var state_150814__$1 = state_150814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150814__$1,inst_150812);
} else {
if((state_val_150815 === (6))){
var inst_150801 = (state_150814[(2)]);
var state_150814__$1 = state_150814;
var statearr_150828_150869 = state_150814__$1;
(statearr_150828_150869[(2)] = inst_150801);

(statearr_150828_150869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150815 === (25))){
var inst_150810 = (state_150814[(2)]);
var state_150814__$1 = (function (){var statearr_150829 = state_150814;
(statearr_150829[(10)] = inst_150810);

return statearr_150829;
})();
var statearr_150830_150870 = state_150814__$1;
(statearr_150830_150870[(2)] = false);

(statearr_150830_150870[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150815 === (17))){
var inst_150786 = (state_150814[(11)]);
var inst_150755 = (state_150814[(9)]);
var inst_150789 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),src_key,new cljs.core.Keyword(null,"file","file",-1269645878)];
var inst_150790 = transform.call(null,inst_150786);
var inst_150791 = [lang,inst_150790,inst_150755];
var inst_150792 = cljs.core.PersistentHashMap.fromArrays(inst_150789,inst_150791);
var inst_150793 = src_cb.call(null,inst_150792);
var state_150814__$1 = (function (){var statearr_150831 = state_150814;
(statearr_150831[(12)] = inst_150793);

return statearr_150831;
})();
var statearr_150832_150871 = state_150814__$1;
(statearr_150832_150871[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_150832_150871[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150815 === (3))){
var inst_150803 = (state_150814[(2)]);
var state_150814__$1 = state_150814;
if(cljs.core.truth_(inst_150803)){
var statearr_150833_150872 = state_150814__$1;
(statearr_150833_150872[(1)] = (20));

} else {
var statearr_150834_150873 = state_150814__$1;
(statearr_150834_150873[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150815 === (12))){
var state_150814__$1 = state_150814;
var statearr_150835_150874 = state_150814__$1;
(statearr_150835_150874[(2)] = false);

(statearr_150835_150874[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150815 === (2))){
var inst_150750 = (state_150814[(8)]);
var inst_150752 = cljs.core.seq.call(null,inst_150750);
var state_150814__$1 = state_150814;
if(inst_150752){
var statearr_150836_150875 = state_150814__$1;
(statearr_150836_150875[(1)] = (4));

} else {
var statearr_150837_150876 = state_150814__$1;
(statearr_150837_150876[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150815 === (23))){
var state_150814__$1 = state_150814;
var statearr_150838_150877 = state_150814__$1;
(statearr_150838_150877[(2)] = null);

(statearr_150838_150877[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150815 === (19))){
var inst_150798 = (state_150814[(2)]);
var state_150814__$1 = state_150814;
var statearr_150839_150878 = state_150814__$1;
(statearr_150839_150878[(2)] = inst_150798);

(statearr_150839_150878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150815 === (11))){
var state_150814__$1 = state_150814;
var statearr_150840_150879 = state_150814__$1;
(statearr_150840_150879[(2)] = true);

(statearr_150840_150879[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150815 === (9))){
var state_150814__$1 = state_150814;
var statearr_150841_150880 = state_150814__$1;
(statearr_150841_150880[(2)] = false);

(statearr_150841_150880[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150815 === (5))){
var state_150814__$1 = state_150814;
var statearr_150842_150881 = state_150814__$1;
(statearr_150842_150881[(2)] = null);

(statearr_150842_150881[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150815 === (14))){
var inst_150763 = (state_150814[(7)]);
var inst_150781 = cljs.core.apply.call(null,cljs.core.hash_map,inst_150763);
var state_150814__$1 = state_150814;
var statearr_150843_150882 = state_150814__$1;
(statearr_150843_150882[(2)] = inst_150781);

(statearr_150843_150882[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150815 === (16))){
var inst_150784 = (state_150814[(2)]);
var inst_150785 = cljs.core.get.call(null,inst_150784,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_150786 = cljs.core.get.call(null,inst_150784,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_150787 = cljs.core._EQ_.call(null,(200),inst_150785);
var state_150814__$1 = (function (){var statearr_150844 = state_150814;
(statearr_150844[(11)] = inst_150786);

return statearr_150844;
})();
if(inst_150787){
var statearr_150845_150883 = state_150814__$1;
(statearr_150845_150883[(1)] = (17));

} else {
var statearr_150846_150884 = state_150814__$1;
(statearr_150846_150884[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150815 === (10))){
var inst_150779 = (state_150814[(2)]);
var state_150814__$1 = state_150814;
if(cljs.core.truth_(inst_150779)){
var statearr_150847_150885 = state_150814__$1;
(statearr_150847_150885[(1)] = (14));

} else {
var statearr_150848_150886 = state_150814__$1;
(statearr_150848_150886[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150815 === (18))){
var inst_150750 = (state_150814[(8)]);
var inst_150795 = cljs.core.rest.call(null,inst_150750);
var inst_150750__$1 = inst_150795;
var state_150814__$1 = (function (){var statearr_150849 = state_150814;
(statearr_150849[(8)] = inst_150750__$1);

return statearr_150849;
})();
var statearr_150850_150887 = state_150814__$1;
(statearr_150850_150887[(2)] = null);

(statearr_150850_150887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150815 === (8))){
var inst_150763 = (state_150814[(7)]);
var inst_150768 = inst_150763.cljs$lang$protocol_mask$partition0$;
var inst_150769 = (inst_150768 & (64));
var inst_150770 = inst_150763.cljs$core$ISeq$;
var inst_150771 = (cljs.core.PROTOCOL_SENTINEL === inst_150770);
var inst_150772 = (inst_150769) || (inst_150771);
var state_150814__$1 = state_150814;
if(cljs.core.truth_(inst_150772)){
var statearr_150851_150888 = state_150814__$1;
(statearr_150851_150888[(1)] = (11));

} else {
var statearr_150852_150889 = state_150814__$1;
(statearr_150852_150889[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13544__auto__,map__150748,map__150748__$1,transform,can_recover_QMARK_))
;
return ((function (switch__13454__auto__,c__13544__auto__,map__150748,map__150748__$1,transform,can_recover_QMARK_){
return (function() {
var klipse$lang$clojure$io$state_machine__13455__auto__ = null;
var klipse$lang$clojure$io$state_machine__13455__auto____0 = (function (){
var statearr_150853 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_150853[(0)] = klipse$lang$clojure$io$state_machine__13455__auto__);

(statearr_150853[(1)] = (1));

return statearr_150853;
});
var klipse$lang$clojure$io$state_machine__13455__auto____1 = (function (state_150814){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_150814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e150854){if((e150854 instanceof Object)){
var ex__13458__auto__ = e150854;
var statearr_150855_150890 = state_150814;
(statearr_150855_150890[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150891 = state_150814;
state_150814 = G__150891;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$clojure$io$state_machine__13455__auto__ = function(state_150814){
switch(arguments.length){
case 0:
return klipse$lang$clojure$io$state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$clojure$io$state_machine__13455__auto____1.call(this,state_150814);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$io$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$io$state_machine__13455__auto____0;
klipse$lang$clojure$io$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$io$state_machine__13455__auto____1;
return klipse$lang$clojure$io$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,map__150748,map__150748__$1,transform,can_recover_QMARK_))
})();
var state__13546__auto__ = (function (){var statearr_150856 = f__13545__auto__.call(null);
(statearr_150856[(6)] = c__13544__auto__);

return statearr_150856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,map__150748,map__150748__$1,transform,can_recover_QMARK_))
);

return c__13544__auto__;
});

klipse.lang.clojure.io.try_to_load_ns.cljs$lang$maxFixedArity = (4);

klipse.lang.clojure.io.try_to_load_ns.cljs$lang$applyTo = (function (seq150742){
var G__150743 = cljs.core.first.call(null,seq150742);
var seq150742__$1 = cljs.core.next.call(null,seq150742);
var G__150744 = cljs.core.first.call(null,seq150742__$1);
var seq150742__$2 = cljs.core.next.call(null,seq150742__$1);
var G__150745 = cljs.core.first.call(null,seq150742__$2);
var seq150742__$3 = cljs.core.next.call(null,seq150742__$2);
var G__150746 = cljs.core.first.call(null,seq150742__$3);
var seq150742__$4 = cljs.core.next.call(null,seq150742__$3);
return klipse.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic(G__150743,G__150744,G__150745,G__150746,seq150742__$4);
});

/**
 * returns a list of files provided list of external-libs and suffixes
 */
klipse.lang.clojure.io.external_libs_files = (function klipse$lang$clojure$io$external_libs_files(external_libs,suffixes,path){
var iter__9245__auto__ = (function klipse$lang$clojure$io$external_libs_files_$_iter__150892(s__150893){
return (new cljs.core.LazySeq(null,(function (){
var s__150893__$1 = s__150893;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__150893__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var lib = cljs.core.first.call(null,xs__7309__auto__);
var iterys__9241__auto__ = ((function (s__150893__$1,lib,xs__7309__auto__,temp__6753__auto__){
return (function klipse$lang$clojure$io$external_libs_files_$_iter__150892_$_iter__150894(s__150895){
return (new cljs.core.LazySeq(null,((function (s__150893__$1,lib,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__150895__$1 = s__150895;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__150895__$1);
if(temp__6753__auto____$1){
var s__150895__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__150895__$2)){
var c__9243__auto__ = cljs.core.chunk_first.call(null,s__150895__$2);
var size__9244__auto__ = cljs.core.count.call(null,c__9243__auto__);
var b__150897 = cljs.core.chunk_buffer.call(null,size__9244__auto__);
if((function (){var i__150896 = (0);
while(true){
if((i__150896 < size__9244__auto__)){
var suffix = cljs.core._nth.call(null,c__9243__auto__,i__150896);
cljs.core.chunk_append.call(null,b__150897,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));

var G__150898 = (i__150896 + (1));
i__150896 = G__150898;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__150897),klipse$lang$clojure$io$external_libs_files_$_iter__150892_$_iter__150894.call(null,cljs.core.chunk_rest.call(null,s__150895__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__150897),null);
}
} else {
var suffix = cljs.core.first.call(null,s__150895__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''),klipse$lang$clojure$io$external_libs_files_$_iter__150892_$_iter__150894.call(null,cljs.core.rest.call(null,s__150895__$2)));
}
} else {
return null;
}
break;
}
});})(s__150893__$1,lib,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__150893__$1,lib,xs__7309__auto__,temp__6753__auto__))
;
var fs__9242__auto__ = cljs.core.seq.call(null,iterys__9241__auto__.call(null,suffixes));
if(fs__9242__auto__){
return cljs.core.concat.call(null,fs__9242__auto__,klipse$lang$clojure$io$external_libs_files_$_iter__150892.call(null,cljs.core.rest.call(null,s__150893__$1)));
} else {
var G__150899 = cljs.core.rest.call(null,s__150893__$1);
s__150893__$1 = G__150899;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9245__auto__.call(null,external_libs);
});
klipse.lang.clojure.io.name__GT_cached_resource = (function klipse$lang$clojure$io$name__GT_cached_resource(name){
return clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,name))].join(''),/\./,"_SLASH_");
});
klipse.lang.clojure.io.cached_ns_root = (function klipse$lang$clojure$io$cached_ns_root(){
return new cljs.core.Keyword(null,"cached_ns_root","cached_ns_root",-1077014575).cljs$core$IFn$_invoke$arity$2(klipse.utils.klipse_settings.call(null),"https://viebel.github.io/klipse/cache-cljs/");
});
klipse.lang.clojure.io.load_json_cache = (function klipse$lang$clojure$io$load_json_cache(name){
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_150932){
var state_val_150933 = (state_150932[(1)]);
if((state_val_150933 === (7))){
var inst_150917 = (state_150932[(7)]);
var inst_150917__$1 = (state_150932[(2)]);
var inst_150918 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_150917__$1);
var inst_150919 = cljs.core._EQ_.call(null,(200),inst_150918);
var state_150932__$1 = (function (){var statearr_150934 = state_150932;
(statearr_150934[(7)] = inst_150917__$1);

return statearr_150934;
})();
if(inst_150919){
var statearr_150935_150951 = state_150932__$1;
(statearr_150935_150951[(1)] = (8));

} else {
var statearr_150936_150952 = state_150932__$1;
(statearr_150936_150952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150933 === (1))){
var inst_150900 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_150901 = [".cljs",".cljc",""];
var inst_150902 = (new cljs.core.PersistentVector(null,3,(5),inst_150900,inst_150901,null));
var inst_150903 = inst_150902;
var inst_150904 = null;
var state_150932__$1 = (function (){var statearr_150937 = state_150932;
(statearr_150937[(8)] = inst_150904);

(statearr_150937[(9)] = inst_150903);

return statearr_150937;
})();
var statearr_150938_150953 = state_150932__$1;
(statearr_150938_150953[(2)] = null);

(statearr_150938_150953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150933 === (4))){
var inst_150903 = (state_150932[(9)]);
var inst_150908 = cljs.core.first.call(null,inst_150903);
var inst_150909 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_150908),".cache.json"].join('');
var inst_150910 = klipse.lang.clojure.io.cache_buster_QMARK_.call(null);
var inst_150911 = klipse.lang.clojure.io.filename_of.call(null,inst_150909,inst_150910);
var inst_150912 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_150913 = [false];
var inst_150914 = cljs.core.PersistentHashMap.fromArrays(inst_150912,inst_150913);
var inst_150915 = cljs_http.client.get.call(null,inst_150911,inst_150914);
var state_150932__$1 = state_150932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150932__$1,(7),inst_150915);
} else {
if((state_val_150933 === (6))){
var inst_150928 = (state_150932[(2)]);
var state_150932__$1 = state_150932;
var statearr_150939_150954 = state_150932__$1;
(statearr_150939_150954[(2)] = inst_150928);

(statearr_150939_150954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150933 === (3))){
var inst_150930 = (state_150932[(2)]);
var state_150932__$1 = state_150932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150932__$1,inst_150930);
} else {
if((state_val_150933 === (2))){
var inst_150903 = (state_150932[(9)]);
var inst_150906 = cljs.core.seq.call(null,inst_150903);
var state_150932__$1 = state_150932;
if(inst_150906){
var statearr_150940_150955 = state_150932__$1;
(statearr_150940_150955[(1)] = (4));

} else {
var statearr_150941_150956 = state_150932__$1;
(statearr_150941_150956[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150933 === (9))){
var inst_150903 = (state_150932[(9)]);
var inst_150917 = (state_150932[(7)]);
var inst_150922 = cljs.core.rest.call(null,inst_150903);
var inst_150903__$1 = inst_150922;
var inst_150904 = inst_150917;
var state_150932__$1 = (function (){var statearr_150942 = state_150932;
(statearr_150942[(8)] = inst_150904);

(statearr_150942[(9)] = inst_150903__$1);

return statearr_150942;
})();
var statearr_150943_150957 = state_150932__$1;
(statearr_150943_150957[(2)] = null);

(statearr_150943_150957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150933 === (5))){
var inst_150904 = (state_150932[(8)]);
var state_150932__$1 = state_150932;
var statearr_150944_150958 = state_150932__$1;
(statearr_150944_150958[(2)] = inst_150904);

(statearr_150944_150958[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150933 === (10))){
var inst_150925 = (state_150932[(2)]);
var state_150932__$1 = state_150932;
var statearr_150945_150959 = state_150932__$1;
(statearr_150945_150959[(2)] = inst_150925);

(statearr_150945_150959[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150933 === (8))){
var inst_150917 = (state_150932[(7)]);
var state_150932__$1 = state_150932;
var statearr_150946_150960 = state_150932__$1;
(statearr_150946_150960[(2)] = inst_150917);

(statearr_150946_150960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$lang$clojure$io$load_json_cache_$_state_machine__13455__auto__ = null;
var klipse$lang$clojure$io$load_json_cache_$_state_machine__13455__auto____0 = (function (){
var statearr_150947 = [null,null,null,null,null,null,null,null,null,null];
(statearr_150947[(0)] = klipse$lang$clojure$io$load_json_cache_$_state_machine__13455__auto__);

(statearr_150947[(1)] = (1));

return statearr_150947;
});
var klipse$lang$clojure$io$load_json_cache_$_state_machine__13455__auto____1 = (function (state_150932){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_150932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e150948){if((e150948 instanceof Object)){
var ex__13458__auto__ = e150948;
var statearr_150949_150961 = state_150932;
(statearr_150949_150961[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150962 = state_150932;
state_150932 = G__150962;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$clojure$io$load_json_cache_$_state_machine__13455__auto__ = function(state_150932){
switch(arguments.length){
case 0:
return klipse$lang$clojure$io$load_json_cache_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$clojure$io$load_json_cache_$_state_machine__13455__auto____1.call(this,state_150932);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$io$load_json_cache_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$io$load_json_cache_$_state_machine__13455__auto____0;
klipse$lang$clojure$io$load_json_cache_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$io$load_json_cache_$_state_machine__13455__auto____1;
return klipse$lang$clojure$io$load_json_cache_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_150950 = f__13545__auto__.call(null);
(statearr_150950[(6)] = c__13544__auto__);

return statearr_150950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.lang.clojure.io.load_ns_from_cache = (function klipse$lang$clojure$io$load_ns_from_cache(name,src_cb,macro_QMARK_){
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("load-ns-from-cache:",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"macro: ",macro_QMARK_);
} else {
}

var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__){
return (function (state_151004){
var state_val_151005 = (state_151004[(1)]);
if((state_val_151005 === (1))){
var inst_150964 = klipse.lang.clojure.io.name__GT_cached_resource.call(null,name);
var state_151004__$1 = (function (){var statearr_151006 = state_151004;
(statearr_151006[(7)] = inst_150964);

return statearr_151006;
})();
if(cljs.core.truth_(macro_QMARK_)){
var statearr_151007_151022 = state_151004__$1;
(statearr_151007_151022[(1)] = (2));

} else {
var statearr_151008_151023 = state_151004__$1;
(statearr_151008_151023[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151005 === (2))){
var state_151004__$1 = state_151004;
var statearr_151009_151024 = state_151004__$1;
(statearr_151009_151024[(2)] = "$macros");

(statearr_151009_151024[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151005 === (3))){
var state_151004__$1 = state_151004;
var statearr_151010_151025 = state_151004__$1;
(statearr_151010_151025[(2)] = "");

(statearr_151010_151025[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151005 === (4))){
var inst_150968 = (state_151004[(8)]);
var inst_150971 = (state_151004[(9)]);
var inst_150964 = (state_151004[(7)]);
var inst_150970 = (state_151004[(10)]);
var inst_150968__$1 = (state_151004[(2)]);
var inst_150969 = klipse.lang.clojure.io.cached_ns_root.call(null);
var inst_150970__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_150969),"/"].join('');
var inst_150971__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_150970__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_150964),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_150968__$1),".js"].join('');
var inst_150972 = klipse.lang.clojure.io.cache_buster_QMARK_.call(null);
var inst_150973 = klipse.lang.clojure.io.filename_of.call(null,inst_150971__$1,inst_150972);
var inst_150974 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_150975 = [false];
var inst_150976 = cljs.core.PersistentHashMap.fromArrays(inst_150974,inst_150975);
var inst_150977 = cljs_http.client.get.call(null,inst_150973,inst_150976);
var state_151004__$1 = (function (){var statearr_151011 = state_151004;
(statearr_151011[(8)] = inst_150968__$1);

(statearr_151011[(9)] = inst_150971__$1);

(statearr_151011[(10)] = inst_150970__$1);

return statearr_151011;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151004__$1,(5),inst_150977);
} else {
if((state_val_151005 === (5))){
var inst_150968 = (state_151004[(8)]);
var inst_150964 = (state_151004[(7)]);
var inst_150970 = (state_151004[(10)]);
var inst_150979 = (state_151004[(2)]);
var inst_150980 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_150970),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_150964),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_150968)].join('');
var inst_150981 = klipse.lang.clojure.io.load_json_cache.call(null,inst_150980);
var state_151004__$1 = (function (){var statearr_151012 = state_151004;
(statearr_151012[(11)] = inst_150979);

return statearr_151012;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151004__$1,(6),inst_150981);
} else {
if((state_val_151005 === (6))){
var inst_150983 = (state_151004[(12)]);
var inst_150968 = (state_151004[(8)]);
var inst_150979 = (state_151004[(11)]);
var inst_150971 = (state_151004[(9)]);
var inst_150964 = (state_151004[(7)]);
var inst_150970 = (state_151004[(10)]);
var inst_150983__$1 = (state_151004[(2)]);
var inst_150984 = (function (){var nn = inst_150964;
var suffix = inst_150968;
var root = inst_150970;
var src_filename = inst_150971;
var src = inst_150979;
var cache = inst_150983__$1;
return ((function (nn,suffix,root,src_filename,src,cache,inst_150983,inst_150968,inst_150979,inst_150971,inst_150964,inst_150970,inst_150983__$1,state_val_151005,c__13544__auto__){
return (function (p1__150963_SHARP_){
return cljs.core._EQ_.call(null,(200),p1__150963_SHARP_);
});
;})(nn,suffix,root,src_filename,src,cache,inst_150983,inst_150968,inst_150979,inst_150971,inst_150964,inst_150970,inst_150983__$1,state_val_151005,c__13544__auto__))
})();
var inst_150985 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_150986 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_150983__$1);
var inst_150987 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_150979);
var inst_150988 = [inst_150986,inst_150987];
var inst_150989 = (new cljs.core.PersistentVector(null,2,(5),inst_150985,inst_150988,null));
var inst_150990 = cljs.core.every_QMARK_.call(null,inst_150984,inst_150989);
var state_151004__$1 = (function (){var statearr_151013 = state_151004;
(statearr_151013[(12)] = inst_150983__$1);

return statearr_151013;
})();
if(inst_150990){
var statearr_151014_151026 = state_151004__$1;
(statearr_151014_151026[(1)] = (7));

} else {
var statearr_151015_151027 = state_151004__$1;
(statearr_151015_151027[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151005 === (7))){
var inst_150983 = (state_151004[(12)]);
var inst_150979 = (state_151004[(11)]);
var inst_150992 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_150993 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_150983);
var inst_150994 = klipse.lang.clojure.io.edn.call(null,inst_150993);
var inst_150995 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_150979);
var inst_150996 = [new cljs.core.Keyword(null,"js","js",1768080579),inst_150994,inst_150995];
var inst_150997 = cljs.core.PersistentHashMap.fromArrays(inst_150992,inst_150996);
var inst_150998 = src_cb.call(null,inst_150997);
var state_151004__$1 = state_151004;
var statearr_151016_151028 = state_151004__$1;
(statearr_151016_151028[(2)] = inst_150998);

(statearr_151016_151028[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151005 === (8))){
var inst_151000 = src_cb.call(null,null);
var state_151004__$1 = state_151004;
var statearr_151017_151029 = state_151004__$1;
(statearr_151017_151029[(2)] = inst_151000);

(statearr_151017_151029[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151005 === (9))){
var inst_151002 = (state_151004[(2)]);
var state_151004__$1 = state_151004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151004__$1,inst_151002);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__13544__auto__))
;
return ((function (switch__13454__auto__,c__13544__auto__){
return (function() {
var klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__13455__auto__ = null;
var klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__13455__auto____0 = (function (){
var statearr_151018 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_151018[(0)] = klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__13455__auto__);

(statearr_151018[(1)] = (1));

return statearr_151018;
});
var klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__13455__auto____1 = (function (state_151004){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_151004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e151019){if((e151019 instanceof Object)){
var ex__13458__auto__ = e151019;
var statearr_151020_151030 = state_151004;
(statearr_151020_151030[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e151019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151031 = state_151004;
state_151004 = G__151031;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__13455__auto__ = function(state_151004){
switch(arguments.length){
case 0:
return klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__13455__auto____1.call(this,state_151004);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__13455__auto____0;
klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__13455__auto____1;
return klipse$lang$clojure$io$load_ns_from_cache_$_state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__))
})();
var state__13546__auto__ = (function (){var statearr_151021 = f__13545__auto__.call(null);
(statearr_151021[(6)] = c__13544__auto__);

return statearr_151021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__))
);

return c__13544__auto__;
});
klipse.lang.clojure.io.cached_macro_ns_regexp = (function klipse$lang$clojure$io$cached_macro_ns_regexp(){
return new cljs.core.Keyword(null,"clojure_cached_macro_ns_regexp","clojure_cached_macro_ns_regexp",-771780299).cljs$core$IFn$_invoke$arity$2(klipse.utils.klipse_settings.call(null),/cljs\.reader|cljs\.core\.[async|match].*|clojure\.math\.macros|gadjett\.core|cljs\.test|clojure\.test|clojure.test.check.*|reagent\..*|om\..*|cljs\.spec.*|cljs-time\..*|re-frame\..*|net\.cgrand\.macrovich|reagent-forms\..*|ajax\.macros|poppea|cljs\.tools\.reader\..*/);
});
klipse.lang.clojure.io.cached_macro_ns_QMARK_ = (function klipse$lang$clojure$io$cached_macro_ns_QMARK_(name){
return cljs.core.re_matches.call(null,klipse.lang.clojure.io.cached_macro_ns_regexp.call(null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
});
klipse.lang.clojure.io.cached_ns_regexp = (function klipse$lang$clojure$io$cached_ns_regexp(){
return new cljs.core.Keyword(null,"clojure_cached_ns_regexp","clojure_cached_ns_regexp",-1735711110).cljs$core$IFn$_invoke$arity$2(klipse.utils.klipse_settings.call(null),/cljs\.stacktrace|cljs\.core\.[async|match].*|cljs\.spec.*|clojure.math\.combinatorics|clojure.test.check.*|cljs\.test|clojure\.test|reagent\..*|om\..*|clojure\.data|cljs-time\..*|re-frame\..*|day8\.re-frame\..*|reagent-forms\..*|re-frisk\..*|re-frisk-shell\..*|datafrisk\..*|ajax\..*|cljs\.tools\.reader\..*/);
});
klipse.lang.clojure.io.cached_cljs_ns_QMARK_ = (function klipse$lang$clojure$io$cached_cljs_ns_QMARK_(name){
return cljs.core.re_matches.call(null,klipse.lang.clojure.io.cached_ns_regexp.call(null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
});
cljs.core._add_method.call(null,klipse.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"macro","macro",-867863404),(function (external_libs,p__151032,src_cb_original){
var map__151033 = p__151032;
var map__151033__$1 = ((((!((map__151033 == null)))?((((map__151033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__151033.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151033):map__151033);
var name = cljs.core.get.call(null,map__151033__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__151033__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var src_cb = ((cljs.core.not_EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null)))?src_cb_original:((function (map__151033,map__151033__$1,name,path){
return (function() { 
var G__151035__delegate = function (args){
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("src-cb: patch cljs.spec.test.alpha/eval");
} else {
}

cljs.core.apply.call(null,src_cb_original,args);

return klipse.lang.clojure.include.def_a_var.call(null,new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",-1739784120,null),new cljs.core.Symbol(null,"eval","eval",536963622,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null));
};
var G__151035 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__151036__i = 0, G__151036__a = new Array(arguments.length -  0);
while (G__151036__i < G__151036__a.length) {G__151036__a[G__151036__i] = arguments[G__151036__i + 0]; ++G__151036__i;}
  args = new cljs.core.IndexedSeq(G__151036__a,0,null);
} 
return G__151035__delegate.call(this,args);};
G__151035.cljs$lang$maxFixedArity = 0;
G__151035.cljs$lang$applyTo = (function (arglist__151037){
var args = cljs.core.seq(arglist__151037);
return G__151035__delegate(args);
});
G__151035.cljs$core$IFn$_invoke$arity$variadic = G__151035__delegate;
return G__151035;
})()
;})(map__151033,map__151033__$1,name,path))
);
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("load-ns :macro :",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

if(cljs.core.truth_(klipse.lang.clojure.io.skip_ns_macros.call(null,name))){
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("load-ns :macro skipping:",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
if(cljs.core.truth_(klipse.lang.clojure.io.cached_macro_ns_QMARK_.call(null,name))){
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("load-ns :macro cached:",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

return klipse.lang.clojure.io.load_ns_from_cache.call(null,name,src_cb,true);
} else {
if(cljs.core.truth_(klipse.lang.clojure.io.the_ns_map.call(null,name))){
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("load-ns :macro known:",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

var prefix = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse.lang.clojure.io.the_ns_map.call(null,name)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
var filenames = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.str,prefix),klipse.lang.clojure.io.macro_suffixes);
return klipse.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
} else {
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("load-ns :macro external-libs:",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

var filenames = klipse.lang.clojure.io.external_libs_files.call(null,external_libs,klipse.lang.clojure.io.macro_suffixes,path);
return klipse.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}
}
}));
klipse.lang.clojure.io.cache_url = "/fig/js/";
cljs.core._add_method.call(null,klipse.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"gist","gist",96143031),(function (external_libs,p__151039,src_cb){
var map__151040 = p__151039;
var map__151040__$1 = ((((!((map__151040 == null)))?((((map__151040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__151040.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151040):map__151040);
var path = cljs.core.get.call(null,map__151040__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = clojure.string.replace.call(null,path,/gist_/,"");
var filenames = cljs.core.map.call(null,((function (path__$1,map__151040,map__151040__$1,path){
return (function (p1__151038_SHARP_){
return ["https://gist.githubusercontent.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__151038_SHARP_)].join('');
});})(path__$1,map__151040,map__151040__$1,path))
,klipse.lang.clojure.io.cljs_suffixes);
return klipse.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
}));
klipse.lang.clojure.io.bundled_ns_ignore_regexp = (function klipse$lang$clojure$io$bundled_ns_ignore_regexp(){
return new cljs.core.Keyword(null,"clojure_bundled_ns_ignore_regexp","clojure_bundled_ns_ignore_regexp",-1479622333).cljs$core$IFn$_invoke$arity$1(klipse.utils.klipse_settings.call(null));
});
klipse.lang.clojure.io.custom_bundled_ns_ignore_QMARK_ = (function klipse$lang$clojure$io$custom_bundled_ns_ignore_QMARK_(name){
var temp__6753__auto__ = klipse.lang.clojure.io.bundled_ns_ignore_regexp.call(null);
if(cljs.core.truth_(temp__6753__auto__)){
var regexp = temp__6753__auto__;
return cljs.core.re_matches.call(null,regexp,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
return null;
}
});
klipse.lang.clojure.io.buggy_bundled_ns_ignore_QMARK_ = (function klipse$lang$clojure$io$buggy_bundled_ns_ignore_QMARK_(name){
return cljs.core.re_matches.call(null,/.*reagent.*|cljs.core.async.*/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
});
/**
 * Checks whether a namespace is present at run-time
 */
klipse.lang.clojure.io.bundled_ns_QMARK_ = (function klipse$lang$clojure$io$bundled_ns_QMARK_(name){
if(cljs.core.truth_((function (){var or__8363__auto__ = klipse.lang.clojure.io.buggy_bundled_ns_ignore_QMARK_.call(null,name);
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return klipse.lang.clojure.io.custom_bundled_ns_ignore_QMARK_.call(null,name);
}
})())){
return false;
} else {
var or__8363__auto__ = (function (){var obj_SHARP_ = goog;
var fn_SHARP_ = (obj_SHARP_["getObjectByName"]);
return fn_SHARP_.call(obj_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,name))].join(''));
})();
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
var obj_SHARP_ = goog;
var fn_SHARP_ = (obj_SHARP_["getObjectByName"]);
return fn_SHARP_.call(obj_SHARP_,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,name))].join(''),/clojure/,"cljs"));
}
}
});
klipse.lang.clojure.io.cljsjs_QMARK_ = (function klipse$lang$clojure$io$cljsjs_QMARK_(name){
return cljs.core.re_matches.call(null,/cljsjs\..*/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
});
klipse.lang.clojure.io.cljsjs_libname = (function klipse$lang$clojure$io$cljsjs_libname(name){
var $ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
var $__$1 = cljs.core.re_matches.call(null,/cljsjs\.(.*)/,$);
var $__$2 = cljs.core.second.call(null,$__$1);
return clojure.string.replace.call(null,$__$2,/\./,"-");
});
/**
 * some cljsjs packages are already loaded e.g react in klipse app
 */
klipse.lang.clojure.io.bundled_cljsjs_ns_QMARK_ = (function klipse$lang$clojure$io$bundled_cljsjs_ns_QMARK_(name){
var or__8363__auto__ = (function (){var and__8351__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react","cljsjs.react",822859692,null));
if(and__8351__auto__){
return (window["React"]);
} else {
return and__8351__auto__;
}
})();
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
var or__8363__auto____$1 = (function (){var and__8351__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom.server","cljsjs.react.dom.server",-1041656528,null));
if(and__8351__auto__){
return (window["ReactDOMServer"]);
} else {
return and__8351__auto__;
}
})();
if(cljs.core.truth_(or__8363__auto____$1)){
return or__8363__auto____$1;
} else {
var and__8351__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom","cljsjs.react.dom",-1678399696,null));
if(and__8351__auto__){
return (window["ReactDOM"]);
} else {
return and__8351__auto__;
}
}
}
});
klipse.lang.clojure.io.rename_ns = (function klipse$lang$clojure$io$rename_ns(name){
var name__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.truth_(cljs.core.re_matches.call(null,/(?:clojure|cljs)\.spec\.impl\.gen/,name__$1))){
return "clojure.spec.gen.alpha";
} else {
if(cljs.core.truth_((function (){var and__8351__auto__ = cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*alpha.*/,name__$1));
if(and__8351__auto__){
return cljs.core.re_matches.call(null,/(?:clojure|cljs)\.spec.*/,name__$1);
} else {
return and__8351__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1),".alpha"].join('');
} else {
return name__$1;
}
}
});
/**
 * Try to load the js file corresponding to a cljsjs package.
 *   For that, we have to convert the package name into a full path - hosted on this git repo: https://github.com/viebel/cljsjs-hosted
 *   
 */
klipse.lang.clojure.io.try_to_load_cljsjs_ns = (function klipse$lang$clojure$io$try_to_load_cljsjs_ns(name,src_cb){
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.log("load-ns :cljs try-to-load-cljsjs-ns",name);
} else {
}

if(cljs.core.truth_(klipse.lang.clojure.io.bundled_cljsjs_ns_QMARK_.call(null,name))){
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("load-ns bundled-cljsjs-ns",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var root_path = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"cljsjs.react","cljsjs.react",822859692,null),null,new cljs.core.Symbol(null,"cljsjs.react.dom.server","cljsjs.react.dom.server",-1041656528,null),null,new cljs.core.Symbol(null,"cljsjs.react.dom","cljsjs.react.dom",-1678399696,null),null], null), null).call(null,name))?"https://viebel.github.io/cljsjs-hosted/cljsjs-klipse-only/":"https://viebel.github.io/cljsjs-hosted/cljsjs/");
var lib_name = klipse.lang.clojure.io.cljsjs_libname.call(null,name);
var full_names = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(root_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"/production/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".min.inc.js"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(root_path),"/production/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".min.inc.js"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(root_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"/development/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".inc.js"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(root_path),"/development/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".inc.js"].join('')], null);
return klipse.lang.clojure.io.try_to_load_ns.call(null,full_names,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
}
});
cljs.core._add_method.call(null,klipse.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629),(function (external_libs,p__151043,src_cb){
var map__151044 = p__151043;
var map__151044__$1 = ((((!((map__151044 == null)))?((((map__151044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__151044.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151044):map__151044);
var name = cljs.core.get.call(null,map__151044__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__151044__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var name__$1 = klipse.lang.clojure.io.rename_ns.call(null,name);
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("load-ns :cljs :",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)].join(''),"external-libs: ",external_libs);
} else {
}

if(cljs.core.truth_(klipse.lang.clojure.io.skip_ns_cljs.call(null,name__$1))){
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("load-ns :cljs skipping",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)].join(''));
} else {
}

return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
if(cljs.core.truth_(klipse.lang.clojure.io.bundled_ns_QMARK_.call(null,name__$1))){
var _ = (cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))?console.log("load-ns :cljs bundled",name__$1):null);
var filenames = cljs.core.map.call(null,((function (_,name__$1,map__151044,map__151044__$1,name,path){
return (function (p1__151042_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse.lang.clojure.io.cache_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__151042_SHARP_),".cache.json"].join('');
});})(_,name__$1,map__151044,map__151044__$1,name,path))
,klipse.lang.clojure.io.cljs_suffixes);
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,_,filenames,name__$1,map__151044,map__151044__$1,name,path){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,_,filenames,name__$1,map__151044,map__151044__$1,name,path){
return (function (state_151058){
var state_val_151059 = (state_151058[(1)]);
if((state_val_151059 === (1))){
var inst_151046 = klipse.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"cache","cache",-1237023054),src_cb,new cljs.core.Keyword(null,"transform","transform",1381301764),klipse.lang.clojure.io.edn,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_151058__$1 = state_151058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151058__$1,(2),inst_151046);
} else {
if((state_val_151059 === (2))){
var inst_151048 = (state_151058[(2)]);
var state_151058__$1 = state_151058;
if(cljs.core.truth_(inst_151048)){
var statearr_151060_151111 = state_151058__$1;
(statearr_151060_151111[(1)] = (3));

} else {
var statearr_151061_151112 = state_151058__$1;
(statearr_151061_151112[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151059 === (3))){
var state_151058__$1 = state_151058;
var statearr_151062_151113 = state_151058__$1;
(statearr_151062_151113[(2)] = null);

(statearr_151062_151113[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151059 === (4))){
var inst_151051 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_151052 = [new cljs.core.Keyword(null,"js","js",1768080579),""];
var inst_151053 = cljs.core.PersistentHashMap.fromArrays(inst_151051,inst_151052);
var inst_151054 = src_cb.call(null,inst_151053);
var state_151058__$1 = state_151058;
var statearr_151063_151114 = state_151058__$1;
(statearr_151063_151114[(2)] = inst_151054);

(statearr_151063_151114[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151059 === (5))){
var inst_151056 = (state_151058[(2)]);
var state_151058__$1 = state_151058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151058__$1,inst_151056);
} else {
return null;
}
}
}
}
}
});})(c__13544__auto__,_,filenames,name__$1,map__151044,map__151044__$1,name,path))
;
return ((function (switch__13454__auto__,c__13544__auto__,_,filenames,name__$1,map__151044,map__151044__$1,name,path){
return (function() {
var klipse$lang$clojure$io$state_machine__13455__auto__ = null;
var klipse$lang$clojure$io$state_machine__13455__auto____0 = (function (){
var statearr_151064 = [null,null,null,null,null,null,null];
(statearr_151064[(0)] = klipse$lang$clojure$io$state_machine__13455__auto__);

(statearr_151064[(1)] = (1));

return statearr_151064;
});
var klipse$lang$clojure$io$state_machine__13455__auto____1 = (function (state_151058){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_151058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e151065){if((e151065 instanceof Object)){
var ex__13458__auto__ = e151065;
var statearr_151066_151115 = state_151058;
(statearr_151066_151115[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e151065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151116 = state_151058;
state_151058 = G__151116;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$clojure$io$state_machine__13455__auto__ = function(state_151058){
switch(arguments.length){
case 0:
return klipse$lang$clojure$io$state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$clojure$io$state_machine__13455__auto____1.call(this,state_151058);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$io$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$io$state_machine__13455__auto____0;
klipse$lang$clojure$io$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$io$state_machine__13455__auto____1;
return klipse$lang$clojure$io$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,_,filenames,name__$1,map__151044,map__151044__$1,name,path))
})();
var state__13546__auto__ = (function (){var statearr_151067 = f__13545__auto__.call(null);
(statearr_151067[(6)] = c__13544__auto__);

return statearr_151067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,_,filenames,name__$1,map__151044,map__151044__$1,name,path))
);

return c__13544__auto__;
} else {
if(cljs.core.truth_(klipse.lang.clojure.io.cached_cljs_ns_QMARK_.call(null,name__$1))){
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("load-ns :cljs cached cljs ns",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)].join(''));
} else {
}

return klipse.lang.clojure.io.load_ns_from_cache.call(null,name__$1,src_cb,false);
} else {
if(cljs.core.truth_(klipse.lang.clojure.io.cljsjs_QMARK_.call(null,name__$1))){
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("load-ns :cljs cljsjs",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)].join(''));
} else {
}

return klipse.lang.clojure.io.try_to_load_cljsjs_ns.call(null,name__$1,src_cb);
} else {
if(cljs.core.truth_(klipse.lang.clojure.io.the_ns_map.call(null,name__$1))){
var prefix = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse.lang.clojure.io.the_ns_map.call(null,name__$1)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
var filenames = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.str,prefix),klipse.lang.clojure.io.cljs_suffixes);
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("load-ns :cljs from external libs",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)].join(''));
} else {
}

var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,prefix,filenames,name__$1,map__151044,map__151044__$1,name,path){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,prefix,filenames,name__$1,map__151044,map__151044__$1,name,path){
return (function (state_151078){
var state_val_151079 = (state_151078[(1)]);
if((state_val_151079 === (1))){
var inst_151068 = klipse.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_151078__$1 = state_151078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151078__$1,(2),inst_151068);
} else {
if((state_val_151079 === (2))){
var inst_151070 = (state_151078[(2)]);
var state_151078__$1 = state_151078;
if(cljs.core.truth_(inst_151070)){
var statearr_151080_151117 = state_151078__$1;
(statearr_151080_151117[(1)] = (3));

} else {
var statearr_151081_151118 = state_151078__$1;
(statearr_151081_151118[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151079 === (3))){
var state_151078__$1 = state_151078;
var statearr_151082_151119 = state_151078__$1;
(statearr_151082_151119[(2)] = null);

(statearr_151082_151119[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151079 === (4))){
var inst_151073 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".js"].join('');
var inst_151074 = klipse.lang.clojure.io.try_to_load_ns.call(null,inst_151073,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_151078__$1 = state_151078;
var statearr_151083_151120 = state_151078__$1;
(statearr_151083_151120[(2)] = inst_151074);

(statearr_151083_151120[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151079 === (5))){
var inst_151076 = (state_151078[(2)]);
var state_151078__$1 = state_151078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151078__$1,inst_151076);
} else {
return null;
}
}
}
}
}
});})(c__13544__auto__,prefix,filenames,name__$1,map__151044,map__151044__$1,name,path))
;
return ((function (switch__13454__auto__,c__13544__auto__,prefix,filenames,name__$1,map__151044,map__151044__$1,name,path){
return (function() {
var klipse$lang$clojure$io$state_machine__13455__auto__ = null;
var klipse$lang$clojure$io$state_machine__13455__auto____0 = (function (){
var statearr_151084 = [null,null,null,null,null,null,null];
(statearr_151084[(0)] = klipse$lang$clojure$io$state_machine__13455__auto__);

(statearr_151084[(1)] = (1));

return statearr_151084;
});
var klipse$lang$clojure$io$state_machine__13455__auto____1 = (function (state_151078){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_151078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e151085){if((e151085 instanceof Object)){
var ex__13458__auto__ = e151085;
var statearr_151086_151121 = state_151078;
(statearr_151086_151121[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e151085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151122 = state_151078;
state_151078 = G__151122;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$clojure$io$state_machine__13455__auto__ = function(state_151078){
switch(arguments.length){
case 0:
return klipse$lang$clojure$io$state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$clojure$io$state_machine__13455__auto____1.call(this,state_151078);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$io$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$io$state_machine__13455__auto____0;
klipse$lang$clojure$io$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$io$state_machine__13455__auto____1;
return klipse$lang$clojure$io$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,prefix,filenames,name__$1,map__151044,map__151044__$1,name,path))
})();
var state__13546__auto__ = (function (){var statearr_151087 = f__13545__auto__.call(null);
(statearr_151087[(6)] = c__13544__auto__);

return statearr_151087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,prefix,filenames,name__$1,map__151044,map__151044__$1,name,path))
);

return c__13544__auto__;
} else {
if(cljs.core.seq.call(null,external_libs)){
var filenames = klipse.lang.clojure.io.external_libs_files.call(null,external_libs,klipse.lang.clojure.io.cljs_suffixes,path);
var c__13544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13544__auto__,filenames,name__$1,map__151044,map__151044__$1,name,path){
return (function (){
var f__13545__auto__ = (function (){var switch__13454__auto__ = ((function (c__13544__auto__,filenames,name__$1,map__151044,map__151044__$1,name,path){
return (function (state_151101){
var state_val_151102 = (state_151101[(1)]);
if((state_val_151102 === (1))){
var inst_151088 = klipse.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_151101__$1 = state_151101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151101__$1,(2),inst_151088);
} else {
if((state_val_151102 === (2))){
var inst_151090 = (state_151101[(2)]);
var state_151101__$1 = state_151101;
if(cljs.core.truth_(inst_151090)){
var statearr_151103_151123 = state_151101__$1;
(statearr_151103_151123[(1)] = (3));

} else {
var statearr_151104_151124 = state_151101__$1;
(statearr_151104_151124[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151102 === (3))){
var state_151101__$1 = state_151101;
var statearr_151105_151125 = state_151101__$1;
(statearr_151105_151125[(2)] = null);

(statearr_151105_151125[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151102 === (4))){
var inst_151093 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_151094 = [".js"];
var inst_151095 = (new cljs.core.PersistentVector(null,1,(5),inst_151093,inst_151094,null));
var inst_151096 = klipse.lang.clojure.io.external_libs_files.call(null,external_libs,inst_151095,path);
var inst_151097 = klipse.lang.clojure.io.try_to_load_ns.call(null,inst_151096,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_151101__$1 = state_151101;
var statearr_151106_151126 = state_151101__$1;
(statearr_151106_151126[(2)] = inst_151097);

(statearr_151106_151126[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_151102 === (5))){
var inst_151099 = (state_151101[(2)]);
var state_151101__$1 = state_151101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151101__$1,inst_151099);
} else {
return null;
}
}
}
}
}
});})(c__13544__auto__,filenames,name__$1,map__151044,map__151044__$1,name,path))
;
return ((function (switch__13454__auto__,c__13544__auto__,filenames,name__$1,map__151044,map__151044__$1,name,path){
return (function() {
var klipse$lang$clojure$io$state_machine__13455__auto__ = null;
var klipse$lang$clojure$io$state_machine__13455__auto____0 = (function (){
var statearr_151107 = [null,null,null,null,null,null,null];
(statearr_151107[(0)] = klipse$lang$clojure$io$state_machine__13455__auto__);

(statearr_151107[(1)] = (1));

return statearr_151107;
});
var klipse$lang$clojure$io$state_machine__13455__auto____1 = (function (state_151101){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__.call(null,state_151101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e151108){if((e151108 instanceof Object)){
var ex__13458__auto__ = e151108;
var statearr_151109_151127 = state_151101;
(statearr_151109_151127[(5)] = ex__13458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e151108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__151128 = state_151101;
state_151101 = G__151128;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
klipse$lang$clojure$io$state_machine__13455__auto__ = function(state_151101){
switch(arguments.length){
case 0:
return klipse$lang$clojure$io$state_machine__13455__auto____0.call(this);
case 1:
return klipse$lang$clojure$io$state_machine__13455__auto____1.call(this,state_151101);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse$lang$clojure$io$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clojure$io$state_machine__13455__auto____0;
klipse$lang$clojure$io$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clojure$io$state_machine__13455__auto____1;
return klipse$lang$clojure$io$state_machine__13455__auto__;
})()
;})(switch__13454__auto__,c__13544__auto__,filenames,name__$1,map__151044,map__151044__$1,name,path))
})();
var state__13546__auto__ = (function (){var statearr_151110 = f__13545__auto__.call(null);
(statearr_151110[(6)] = c__13544__auto__);

return statearr_151110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13546__auto__);
});})(c__13544__auto__,filenames,name__$1,map__151044,map__151044__$1,name,path))
);

return c__13544__auto__;
} else {
if(cljs.core.truth_(klipse.utils.verbose_QMARK_.call(null))){
console.info("load-ns :cljs nothing can be done",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)].join(''));
} else {
}

return src_cb.call(null,null);

}
}
}
}
}
}
}));
klipse.lang.clojure.io.fix_goog_path = (function klipse$lang$clojure$io$fix_goog_path(path){
var parts = clojure.string.split.call(null,path,/\//);
var last_part = cljs.core.last.call(null,parts);
var new_parts = cljs.core.concat.call(null,cljs.core.butlast.call(null,parts),((cljs.core._EQ_.call(null,last_part,clojure.string.lower_case.call(null,last_part)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_part,last_part], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case.call(null,last_part)], null)));
return clojure.string.join.call(null,"/",new_parts);
});
klipse.lang.clojure.io.simple_goog_path = (function klipse$lang$clojure$io$simple_goog_path(path){
var parts = clojure.string.split.call(null,path,/\//);
var butlast_parts = cljs.core.butlast.call(null,parts);
var new_parts = cljs.core.concat.call(null,butlast_parts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,butlast_parts)], null));
return clojure.string.join.call(null,"/",new_parts);
});
klipse.lang.clojure.io.another_goog_path = (function klipse$lang$clojure$io$another_goog_path(path){
var parts = clojure.string.split.call(null,path,/\//);
var last_part = cljs.core.last.call(null,parts);
var new_parts = cljs.core.concat.call(null,cljs.core.butlast.call(null,parts),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,"",cljs.core.take_last.call(null,(2),parts))], null));
return clojure.string.join.call(null,"/",new_parts);
});
cljs.core._add_method.call(null,klipse.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"goog","goog",-1711135452),(function (_,p__151130,src_cb){
var map__151131 = p__151130;
var map__151131__$1 = ((((!((map__151131 == null)))?((((map__151131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__151131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151131):map__151131);
var name = cljs.core.get.call(null,map__151131__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__151131__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_((function (){var obj_SHARP_ = goog;
var fn_SHARP_ = (obj_SHARP_["getObjectByName"]);
return fn_SHARP_.call(obj_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
})())){
return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var closure_github_path = "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/";
var filenames = cljs.core.map.call(null,((function (closure_github_path,map__151131,map__151131__$1,name,path){
return (function (p1__151129_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(closure_github_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__151129_SHARP_),".js"].join('');
});})(closure_github_path,map__151131,map__151131__$1,name,path))
,cljs.core.juxt.call(null,klipse.lang.clojure.io.fix_goog_path,cljs.core.identity,klipse.lang.clojure.io.another_goog_path,klipse.lang.clojure.io.simple_goog_path).call(null,path));
return klipse.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}));

//# sourceMappingURL=io.js.map
