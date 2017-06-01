// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants false}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__16796){
var vec__16797 = p__16796;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16797,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16797,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__16806 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16806,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16806,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16806,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16806,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16806,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__6738__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__6738__auto__)){
var name__$1 = temp__6738__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__16821 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16821,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16821,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16821,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16821,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16821,(4),null);
var vec__16824 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16824,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16824,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16824,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16824,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16824,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__9439__auto__ = source;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__9439__auto__ = line;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__9439__auto__ = col;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__9439__auto__ = name;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__16831 = segmap;
var map__16831__$1 = ((((!((map__16831 == null)))?((((map__16831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16831):map__16831);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16831__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16831__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16831__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16831__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16831__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__16831,map__16831__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__16831,map__16831__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__16831,map__16831__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__16831,map__16831__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__16831,map__16831__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__16831,map__16831__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args16843 = [];
var len__10660__auto___16850 = arguments.length;
var i__10661__auto___16851 = (0);
while(true){
if((i__10661__auto___16851 < len__10660__auto___16850)){
args16843.push((arguments[i__10661__auto___16851]));

var G__16855 = (i__10661__auto___16851 + (1));
i__10661__auto___16851 = G__16855;
continue;
} else {
}
break;
}

var G__16846 = args16843.length;
switch (G__16846) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16843.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__16847 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__16860 = cljs.core.next(segs__$1);
var G__16861 = nrelseg;
var G__16862 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__16860;
relseg__$1 = G__16861;
result__$1 = G__16862;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16847,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16847,(1),null);
var G__16866 = (gline + (1));
var G__16867 = cljs.core.next(lines__$1);
var G__16868 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__16869 = result__$1;
gline = G__16866;
lines__$1 = G__16867;
relseg = G__16868;
result = G__16869;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__16885 = segmap;
var map__16885__$1 = ((((!((map__16885 == null)))?((((map__16885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16885.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16885):map__16885);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16885__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16885__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16885__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16885__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16885__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__16885,map__16885__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__16885,map__16885__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__16870_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__16870_SHARP_,d__$1);
});})(map__16885,map__16885__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__16885,map__16885__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args16907 = [];
var len__10660__auto___16924 = arguments.length;
var i__10661__auto___16925 = (0);
while(true){
if((i__10661__auto___16925 < len__10660__auto___16924)){
args16907.push((arguments[i__10661__auto___16925]));

var G__16927 = (i__10661__auto___16925 + (1));
i__10661__auto___16925 = G__16927;
continue;
} else {
}
break;
}

var G__16909 = args16907.length;
switch (G__16909) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16907.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__16914 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__16951 = cljs.core.next(segs__$1);
var G__16952 = nrelseg;
var G__16953 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__16951;
relseg__$1 = G__16952;
result__$1 = G__16953;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16914,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16914,(1),null);
var G__16958 = (gline + (1));
var G__16959 = cljs.core.next(lines__$1);
var G__16960 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__16961 = result__$1;
gline = G__16958;
lines__$1 = G__16959;
relseg = G__16960;
result = G__16961;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = (function (){var G__16990 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16990) : cljs.core.atom.call(null,G__16990));
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (relseg){
return (function (p__16991){
var vec__16995 = p__16991;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16995,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16995,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16995,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16995,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16995,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__16998){
var vec__16999 = p__16998;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16999,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16999,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16999,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16999,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16999,(4),null);
var seg = vec__16999;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(relseg) : cljs.core.deref.call(null,relseg)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__16999,gcol,sidx,line,col,name,seg,relseg){
return (function (p__17005){
var vec__17006 = p__17005;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17006,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17006,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17006,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17006,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17006,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__9439__auto__ = name;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__16999,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = (function (){var G__17207 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17207) : cljs.core.atom.call(null,G__17207));
})();
var names__GT_idx = (function (){var G__17208 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17208) : cljs.core.atom.call(null,G__17208));
})();
var name_idx = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__9439__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__6736__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__6736__auto__)){
var name = temp__6736__auto__;
var idx = (function (){var temp__6736__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx)),name);
if(cljs.core.truth_(temp__6736__auto____$1)){
var idx = temp__6736__auto____$1;
return idx;
} else {
var cidx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(name_idx) : cljs.core.deref.call(null,name_idx));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__17214 = cljs.core.seq(infos);
var chunk__17215 = null;
var count__17216 = (0);
var i__17217 = (0);
while(true){
if((i__17217 < count__17216)){
var info = chunk__17215.cljs$core$IIndexed$_nth$arity$2(null,i__17217);
var segv_17405 = info__GT_segv(info,source_idx,line,col);
var gline_17406 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_17407 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)));
if((gline_17406 > (lc_17407 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__17214,chunk__17215,count__17216,i__17217,segv_17405,gline_17406,lc_17407,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_17406 - (lc_17407 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_17405], null));
});})(seq__17214,chunk__17215,count__17216,i__17217,segv_17405,gline_17406,lc_17407,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__17214,chunk__17215,count__17216,i__17217,segv_17405,gline_17406,lc_17407,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17406], null),cljs.core.conj,segv_17405);
});})(seq__17214,chunk__17215,count__17216,i__17217,segv_17405,gline_17406,lc_17407,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__17415 = seq__17214;
var G__17416 = chunk__17215;
var G__17417 = count__17216;
var G__17418 = (i__17217 + (1));
seq__17214 = G__17415;
chunk__17215 = G__17416;
count__17216 = G__17417;
i__17217 = G__17418;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__17214);
if(temp__6738__auto__){
var seq__17214__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17214__$1)){
var c__10350__auto__ = cljs.core.chunk_first(seq__17214__$1);
var G__17423 = cljs.core.chunk_rest(seq__17214__$1);
var G__17424 = c__10350__auto__;
var G__17425 = cljs.core.count(c__10350__auto__);
var G__17426 = (0);
seq__17214 = G__17423;
chunk__17215 = G__17424;
count__17216 = G__17425;
i__17217 = G__17426;
continue;
} else {
var info = cljs.core.first(seq__17214__$1);
var segv_17430 = info__GT_segv(info,source_idx,line,col);
var gline_17431 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_17432 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)));
if((gline_17431 > (lc_17432 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__17214,chunk__17215,count__17216,i__17217,segv_17430,gline_17431,lc_17432,info,seq__17214__$1,temp__6738__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_17431 - (lc_17432 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_17430], null));
});})(seq__17214,chunk__17215,count__17216,i__17217,segv_17430,gline_17431,lc_17432,info,seq__17214__$1,temp__6738__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__17214,chunk__17215,count__17216,i__17217,segv_17430,gline_17431,lc_17432,info,seq__17214__$1,temp__6738__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17431], null),cljs.core.conj,segv_17430);
});})(seq__17214,chunk__17215,count__17216,i__17217,segv_17430,gline_17431,lc_17432,info,seq__17214__$1,temp__6738__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__17439 = cljs.core.next(seq__17214__$1);
var G__17440 = null;
var G__17441 = (0);
var G__17442 = (0);
seq__17214 = G__17439;
chunk__17215 = G__17440;
count__17216 = G__17441;
i__17217 = G__17442;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__17246_17444 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__17247_17445 = null;
var count__17248_17446 = (0);
var i__17249_17447 = (0);
while(true){
if((i__17249_17447 < count__17248_17446)){
var vec__17250_17452 = chunk__17247_17445.cljs$core$IIndexed$_nth$arity$2(null,i__17249_17447);
var source_idx_17453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17250_17452,(0),null);
var vec__17253_17454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17250_17452,(1),null);
var __17455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17253_17454,(0),null);
var lines_17456__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17253_17454,(1),null);
var seq__17262_17457 = cljs.core.seq(lines_17456__$1);
var chunk__17263_17458 = null;
var count__17264_17459 = (0);
var i__17265_17460 = (0);
while(true){
if((i__17265_17460 < count__17264_17459)){
var vec__17269_17461 = chunk__17263_17458.cljs$core$IIndexed$_nth$arity$2(null,i__17265_17460);
var line_17462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17269_17461,(0),null);
var cols_17463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17269_17461,(1),null);
var seq__17272_17465 = cljs.core.seq(cols_17463);
var chunk__17273_17466 = null;
var count__17274_17467 = (0);
var i__17275_17468 = (0);
while(true){
if((i__17275_17468 < count__17274_17467)){
var vec__17276_17469 = chunk__17273_17466.cljs$core$IIndexed$_nth$arity$2(null,i__17275_17468);
var col_17470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17276_17469,(0),null);
var infos_17471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17276_17469,(1),null);
encode_cols(infos_17471,source_idx_17453,line_17462,col_17470);

var G__17472 = seq__17272_17465;
var G__17473 = chunk__17273_17466;
var G__17474 = count__17274_17467;
var G__17475 = (i__17275_17468 + (1));
seq__17272_17465 = G__17472;
chunk__17273_17466 = G__17473;
count__17274_17467 = G__17474;
i__17275_17468 = G__17475;
continue;
} else {
var temp__6738__auto___17476 = cljs.core.seq(seq__17272_17465);
if(temp__6738__auto___17476){
var seq__17272_17477__$1 = temp__6738__auto___17476;
if(cljs.core.chunked_seq_QMARK_(seq__17272_17477__$1)){
var c__10350__auto___17478 = cljs.core.chunk_first(seq__17272_17477__$1);
var G__17479 = cljs.core.chunk_rest(seq__17272_17477__$1);
var G__17480 = c__10350__auto___17478;
var G__17481 = cljs.core.count(c__10350__auto___17478);
var G__17482 = (0);
seq__17272_17465 = G__17479;
chunk__17273_17466 = G__17480;
count__17274_17467 = G__17481;
i__17275_17468 = G__17482;
continue;
} else {
var vec__17282_17483 = cljs.core.first(seq__17272_17477__$1);
var col_17484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17282_17483,(0),null);
var infos_17485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17282_17483,(1),null);
encode_cols(infos_17485,source_idx_17453,line_17462,col_17484);

var G__17486 = cljs.core.next(seq__17272_17477__$1);
var G__17487 = null;
var G__17488 = (0);
var G__17489 = (0);
seq__17272_17465 = G__17486;
chunk__17273_17466 = G__17487;
count__17274_17467 = G__17488;
i__17275_17468 = G__17489;
continue;
}
} else {
}
}
break;
}

var G__17490 = seq__17262_17457;
var G__17491 = chunk__17263_17458;
var G__17492 = count__17264_17459;
var G__17493 = (i__17265_17460 + (1));
seq__17262_17457 = G__17490;
chunk__17263_17458 = G__17491;
count__17264_17459 = G__17492;
i__17265_17460 = G__17493;
continue;
} else {
var temp__6738__auto___17494 = cljs.core.seq(seq__17262_17457);
if(temp__6738__auto___17494){
var seq__17262_17495__$1 = temp__6738__auto___17494;
if(cljs.core.chunked_seq_QMARK_(seq__17262_17495__$1)){
var c__10350__auto___17496 = cljs.core.chunk_first(seq__17262_17495__$1);
var G__17497 = cljs.core.chunk_rest(seq__17262_17495__$1);
var G__17498 = c__10350__auto___17496;
var G__17499 = cljs.core.count(c__10350__auto___17496);
var G__17500 = (0);
seq__17262_17457 = G__17497;
chunk__17263_17458 = G__17498;
count__17264_17459 = G__17499;
i__17265_17460 = G__17500;
continue;
} else {
var vec__17289_17501 = cljs.core.first(seq__17262_17495__$1);
var line_17502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17289_17501,(0),null);
var cols_17503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17289_17501,(1),null);
var seq__17293_17504 = cljs.core.seq(cols_17503);
var chunk__17294_17505 = null;
var count__17295_17506 = (0);
var i__17296_17507 = (0);
while(true){
if((i__17296_17507 < count__17295_17506)){
var vec__17297_17508 = chunk__17294_17505.cljs$core$IIndexed$_nth$arity$2(null,i__17296_17507);
var col_17509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17297_17508,(0),null);
var infos_17510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17297_17508,(1),null);
encode_cols(infos_17510,source_idx_17453,line_17502,col_17509);

var G__17513 = seq__17293_17504;
var G__17514 = chunk__17294_17505;
var G__17515 = count__17295_17506;
var G__17516 = (i__17296_17507 + (1));
seq__17293_17504 = G__17513;
chunk__17294_17505 = G__17514;
count__17295_17506 = G__17515;
i__17296_17507 = G__17516;
continue;
} else {
var temp__6738__auto___17517__$1 = cljs.core.seq(seq__17293_17504);
if(temp__6738__auto___17517__$1){
var seq__17293_17518__$1 = temp__6738__auto___17517__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17293_17518__$1)){
var c__10350__auto___17519 = cljs.core.chunk_first(seq__17293_17518__$1);
var G__17520 = cljs.core.chunk_rest(seq__17293_17518__$1);
var G__17521 = c__10350__auto___17519;
var G__17522 = cljs.core.count(c__10350__auto___17519);
var G__17523 = (0);
seq__17293_17504 = G__17520;
chunk__17294_17505 = G__17521;
count__17295_17506 = G__17522;
i__17296_17507 = G__17523;
continue;
} else {
var vec__17305_17524 = cljs.core.first(seq__17293_17518__$1);
var col_17525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17305_17524,(0),null);
var infos_17526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17305_17524,(1),null);
encode_cols(infos_17526,source_idx_17453,line_17502,col_17525);

var G__17527 = cljs.core.next(seq__17293_17518__$1);
var G__17528 = null;
var G__17529 = (0);
var G__17530 = (0);
seq__17293_17504 = G__17527;
chunk__17294_17505 = G__17528;
count__17295_17506 = G__17529;
i__17296_17507 = G__17530;
continue;
}
} else {
}
}
break;
}

var G__17531 = cljs.core.next(seq__17262_17495__$1);
var G__17532 = null;
var G__17533 = (0);
var G__17534 = (0);
seq__17262_17457 = G__17531;
chunk__17263_17458 = G__17532;
count__17264_17459 = G__17533;
i__17265_17460 = G__17534;
continue;
}
} else {
}
}
break;
}

var G__17537 = seq__17246_17444;
var G__17538 = chunk__17247_17445;
var G__17539 = count__17248_17446;
var G__17540 = (i__17249_17447 + (1));
seq__17246_17444 = G__17537;
chunk__17247_17445 = G__17538;
count__17248_17446 = G__17539;
i__17249_17447 = G__17540;
continue;
} else {
var temp__6738__auto___17541 = cljs.core.seq(seq__17246_17444);
if(temp__6738__auto___17541){
var seq__17246_17542__$1 = temp__6738__auto___17541;
if(cljs.core.chunked_seq_QMARK_(seq__17246_17542__$1)){
var c__10350__auto___17543 = cljs.core.chunk_first(seq__17246_17542__$1);
var G__17544 = cljs.core.chunk_rest(seq__17246_17542__$1);
var G__17545 = c__10350__auto___17543;
var G__17546 = cljs.core.count(c__10350__auto___17543);
var G__17547 = (0);
seq__17246_17444 = G__17544;
chunk__17247_17445 = G__17545;
count__17248_17446 = G__17546;
i__17249_17447 = G__17547;
continue;
} else {
var vec__17314_17548 = cljs.core.first(seq__17246_17542__$1);
var source_idx_17549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17314_17548,(0),null);
var vec__17317_17550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17314_17548,(1),null);
var __17551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17317_17550,(0),null);
var lines_17552__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17317_17550,(1),null);
var seq__17321_17558 = cljs.core.seq(lines_17552__$1);
var chunk__17322_17559 = null;
var count__17323_17560 = (0);
var i__17324_17561 = (0);
while(true){
if((i__17324_17561 < count__17323_17560)){
var vec__17329_17563 = chunk__17322_17559.cljs$core$IIndexed$_nth$arity$2(null,i__17324_17561);
var line_17564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17329_17563,(0),null);
var cols_17565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17329_17563,(1),null);
var seq__17332_17567 = cljs.core.seq(cols_17565);
var chunk__17333_17568 = null;
var count__17334_17569 = (0);
var i__17335_17570 = (0);
while(true){
if((i__17335_17570 < count__17334_17569)){
var vec__17336_17575 = chunk__17333_17568.cljs$core$IIndexed$_nth$arity$2(null,i__17335_17570);
var col_17576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17336_17575,(0),null);
var infos_17577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17336_17575,(1),null);
encode_cols(infos_17577,source_idx_17549,line_17564,col_17576);

var G__17580 = seq__17332_17567;
var G__17581 = chunk__17333_17568;
var G__17582 = count__17334_17569;
var G__17583 = (i__17335_17570 + (1));
seq__17332_17567 = G__17580;
chunk__17333_17568 = G__17581;
count__17334_17569 = G__17582;
i__17335_17570 = G__17583;
continue;
} else {
var temp__6738__auto___17585__$1 = cljs.core.seq(seq__17332_17567);
if(temp__6738__auto___17585__$1){
var seq__17332_17586__$1 = temp__6738__auto___17585__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17332_17586__$1)){
var c__10350__auto___17587 = cljs.core.chunk_first(seq__17332_17586__$1);
var G__17589 = cljs.core.chunk_rest(seq__17332_17586__$1);
var G__17592 = c__10350__auto___17587;
var G__17593 = cljs.core.count(c__10350__auto___17587);
var G__17594 = (0);
seq__17332_17567 = G__17589;
chunk__17333_17568 = G__17592;
count__17334_17569 = G__17593;
i__17335_17570 = G__17594;
continue;
} else {
var vec__17343_17596 = cljs.core.first(seq__17332_17586__$1);
var col_17597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17343_17596,(0),null);
var infos_17598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17343_17596,(1),null);
encode_cols(infos_17598,source_idx_17549,line_17564,col_17597);

var G__17600 = cljs.core.next(seq__17332_17586__$1);
var G__17601 = null;
var G__17602 = (0);
var G__17603 = (0);
seq__17332_17567 = G__17600;
chunk__17333_17568 = G__17601;
count__17334_17569 = G__17602;
i__17335_17570 = G__17603;
continue;
}
} else {
}
}
break;
}

var G__17607 = seq__17321_17558;
var G__17608 = chunk__17322_17559;
var G__17609 = count__17323_17560;
var G__17610 = (i__17324_17561 + (1));
seq__17321_17558 = G__17607;
chunk__17322_17559 = G__17608;
count__17323_17560 = G__17609;
i__17324_17561 = G__17610;
continue;
} else {
var temp__6738__auto___17612__$1 = cljs.core.seq(seq__17321_17558);
if(temp__6738__auto___17612__$1){
var seq__17321_17613__$1 = temp__6738__auto___17612__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17321_17613__$1)){
var c__10350__auto___17614 = cljs.core.chunk_first(seq__17321_17613__$1);
var G__17615 = cljs.core.chunk_rest(seq__17321_17613__$1);
var G__17616 = c__10350__auto___17614;
var G__17617 = cljs.core.count(c__10350__auto___17614);
var G__17618 = (0);
seq__17321_17558 = G__17615;
chunk__17322_17559 = G__17616;
count__17323_17560 = G__17617;
i__17324_17561 = G__17618;
continue;
} else {
var vec__17350_17620 = cljs.core.first(seq__17321_17613__$1);
var line_17621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17350_17620,(0),null);
var cols_17622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17350_17620,(1),null);
var seq__17358_17623 = cljs.core.seq(cols_17622);
var chunk__17359_17624 = null;
var count__17360_17625 = (0);
var i__17361_17626 = (0);
while(true){
if((i__17361_17626 < count__17360_17625)){
var vec__17363_17627 = chunk__17359_17624.cljs$core$IIndexed$_nth$arity$2(null,i__17361_17626);
var col_17628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17363_17627,(0),null);
var infos_17629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17363_17627,(1),null);
encode_cols(infos_17629,source_idx_17549,line_17621,col_17628);

var G__17630 = seq__17358_17623;
var G__17631 = chunk__17359_17624;
var G__17632 = count__17360_17625;
var G__17633 = (i__17361_17626 + (1));
seq__17358_17623 = G__17630;
chunk__17359_17624 = G__17631;
count__17360_17625 = G__17632;
i__17361_17626 = G__17633;
continue;
} else {
var temp__6738__auto___17634__$2 = cljs.core.seq(seq__17358_17623);
if(temp__6738__auto___17634__$2){
var seq__17358_17635__$1 = temp__6738__auto___17634__$2;
if(cljs.core.chunked_seq_QMARK_(seq__17358_17635__$1)){
var c__10350__auto___17638 = cljs.core.chunk_first(seq__17358_17635__$1);
var G__17639 = cljs.core.chunk_rest(seq__17358_17635__$1);
var G__17640 = c__10350__auto___17638;
var G__17641 = cljs.core.count(c__10350__auto___17638);
var G__17642 = (0);
seq__17358_17623 = G__17639;
chunk__17359_17624 = G__17640;
count__17360_17625 = G__17641;
i__17361_17626 = G__17642;
continue;
} else {
var vec__17373_17644 = cljs.core.first(seq__17358_17635__$1);
var col_17645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17373_17644,(0),null);
var infos_17646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17373_17644,(1),null);
encode_cols(infos_17646,source_idx_17549,line_17621,col_17645);

var G__17650 = cljs.core.next(seq__17358_17635__$1);
var G__17651 = null;
var G__17652 = (0);
var G__17653 = (0);
seq__17358_17623 = G__17650;
chunk__17359_17624 = G__17651;
count__17360_17625 = G__17652;
i__17361_17626 = G__17653;
continue;
}
} else {
}
}
break;
}

var G__17656 = cljs.core.next(seq__17321_17613__$1);
var G__17657 = null;
var G__17658 = (0);
var G__17659 = (0);
seq__17321_17558 = G__17656;
chunk__17322_17559 = G__17657;
count__17323_17560 = G__17658;
i__17324_17561 = G__17659;
continue;
}
} else {
}
}
break;
}

var G__17661 = cljs.core.next(seq__17246_17542__$1);
var G__17662 = null;
var G__17663 = (0);
var G__17664 = (0);
seq__17246_17444 = G__17661;
chunk__17247_17445 = G__17662;
count__17248_17446 = G__17663;
i__17249_17447 = G__17664;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__17380 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__17062_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17062_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("?rel="),cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__17063_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__17063_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__17064_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__17064_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx))),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx))))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__17385 = G__17380;
var G__17386_17672 = G__17385;
var G__17387_17673 = "sourcesContent";
var G__17388_17674 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__17386_17672,G__17387_17673,G__17388_17674);

return G__17385;
} else {
return G__17380;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__17698 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17698,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17698,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__17701 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17701,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17701,(1),null);
var G__17717 = cljs.core.next(col_map_seq);
var G__17718 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__17701,col,infos,vec__17698,line,col_map){
return (function (v,p__17704){
var map__17705 = p__17704;
var map__17705__$1 = ((((!((map__17705 == null)))?((((map__17705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17705.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17705):map__17705);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17705__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17705__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__17701,col,infos,vec__17698,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__17717;
new_cols = G__17718;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__17719 = cljs.core.next(line_map_seq);
var G__17720 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__17719;
new_lines = G__17720;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = (function (){var G__17830 = cljs.core.sorted_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17830) : cljs.core.atom.call(null,G__17830));
})();
var seq__17831_17954 = cljs.core.seq(reverse_map);
var chunk__17832_17955 = null;
var count__17833_17956 = (0);
var i__17834_17957 = (0);
while(true){
if((i__17834_17957 < count__17833_17956)){
var vec__17835_17958 = chunk__17832_17955.cljs$core$IIndexed$_nth$arity$2(null,i__17834_17957);
var line_17959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17835_17958,(0),null);
var columns_17960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17835_17958,(1),null);
var seq__17838_17961 = cljs.core.seq(columns_17960);
var chunk__17839_17962 = null;
var count__17840_17963 = (0);
var i__17841_17964 = (0);
while(true){
if((i__17841_17964 < count__17840_17963)){
var vec__17848_17965 = chunk__17839_17962.cljs$core$IIndexed$_nth$arity$2(null,i__17841_17964);
var column_17966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17848_17965,(0),null);
var column_info_17967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17848_17965,(1),null);
var seq__17859_17968 = cljs.core.seq(column_info_17967);
var chunk__17860_17969 = null;
var count__17861_17970 = (0);
var i__17862_17971 = (0);
while(true){
if((i__17862_17971 < count__17861_17970)){
var map__17864_17973 = chunk__17860_17969.cljs$core$IIndexed$_nth$arity$2(null,i__17862_17971);
var map__17864_17974__$1 = ((((!((map__17864_17973 == null)))?((((map__17864_17973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17864_17973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17864_17973):map__17864_17973);
var gline_17975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17864_17974__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_17976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17864_17974__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_17977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17864_17974__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17975], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17859_17968,chunk__17860_17969,count__17861_17970,i__17862_17971,seq__17838_17961,chunk__17839_17962,count__17840_17963,i__17841_17964,seq__17831_17954,chunk__17832_17955,count__17833_17956,i__17834_17957,map__17864_17973,map__17864_17974__$1,gline_17975,gcol_17976,name_17977,vec__17848_17965,column_17966,column_info_17967,vec__17835_17958,line_17959,columns_17960,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_17976], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_17959,new cljs.core.Keyword(null,"col","col",-1959363084),column_17966,new cljs.core.Keyword(null,"name","name",1843675177),name_17977], null));
});})(seq__17859_17968,chunk__17860_17969,count__17861_17970,i__17862_17971,seq__17838_17961,chunk__17839_17962,count__17840_17963,i__17841_17964,seq__17831_17954,chunk__17832_17955,count__17833_17956,i__17834_17957,map__17864_17973,map__17864_17974__$1,gline_17975,gcol_17976,name_17977,vec__17848_17965,column_17966,column_info_17967,vec__17835_17958,line_17959,columns_17960,inverted))
,cljs.core.sorted_map()));

var G__17997 = seq__17859_17968;
var G__17998 = chunk__17860_17969;
var G__17999 = count__17861_17970;
var G__18000 = (i__17862_17971 + (1));
seq__17859_17968 = G__17997;
chunk__17860_17969 = G__17998;
count__17861_17970 = G__17999;
i__17862_17971 = G__18000;
continue;
} else {
var temp__6738__auto___18001 = cljs.core.seq(seq__17859_17968);
if(temp__6738__auto___18001){
var seq__17859_18002__$1 = temp__6738__auto___18001;
if(cljs.core.chunked_seq_QMARK_(seq__17859_18002__$1)){
var c__10350__auto___18003 = cljs.core.chunk_first(seq__17859_18002__$1);
var G__18010 = cljs.core.chunk_rest(seq__17859_18002__$1);
var G__18011 = c__10350__auto___18003;
var G__18012 = cljs.core.count(c__10350__auto___18003);
var G__18013 = (0);
seq__17859_17968 = G__18010;
chunk__17860_17969 = G__18011;
count__17861_17970 = G__18012;
i__17862_17971 = G__18013;
continue;
} else {
var map__17884_18014 = cljs.core.first(seq__17859_18002__$1);
var map__17884_18015__$1 = ((((!((map__17884_18014 == null)))?((((map__17884_18014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17884_18014.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17884_18014):map__17884_18014);
var gline_18016 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17884_18015__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_18017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17884_18015__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_18018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17884_18015__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18016], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17859_17968,chunk__17860_17969,count__17861_17970,i__17862_17971,seq__17838_17961,chunk__17839_17962,count__17840_17963,i__17841_17964,seq__17831_17954,chunk__17832_17955,count__17833_17956,i__17834_17957,map__17884_18014,map__17884_18015__$1,gline_18016,gcol_18017,name_18018,seq__17859_18002__$1,temp__6738__auto___18001,vec__17848_17965,column_17966,column_info_17967,vec__17835_17958,line_17959,columns_17960,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_18017], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_17959,new cljs.core.Keyword(null,"col","col",-1959363084),column_17966,new cljs.core.Keyword(null,"name","name",1843675177),name_18018], null));
});})(seq__17859_17968,chunk__17860_17969,count__17861_17970,i__17862_17971,seq__17838_17961,chunk__17839_17962,count__17840_17963,i__17841_17964,seq__17831_17954,chunk__17832_17955,count__17833_17956,i__17834_17957,map__17884_18014,map__17884_18015__$1,gline_18016,gcol_18017,name_18018,seq__17859_18002__$1,temp__6738__auto___18001,vec__17848_17965,column_17966,column_info_17967,vec__17835_17958,line_17959,columns_17960,inverted))
,cljs.core.sorted_map()));

var G__18021 = cljs.core.next(seq__17859_18002__$1);
var G__18022 = null;
var G__18023 = (0);
var G__18024 = (0);
seq__17859_17968 = G__18021;
chunk__17860_17969 = G__18022;
count__17861_17970 = G__18023;
i__17862_17971 = G__18024;
continue;
}
} else {
}
}
break;
}

var G__18025 = seq__17838_17961;
var G__18026 = chunk__17839_17962;
var G__18027 = count__17840_17963;
var G__18028 = (i__17841_17964 + (1));
seq__17838_17961 = G__18025;
chunk__17839_17962 = G__18026;
count__17840_17963 = G__18027;
i__17841_17964 = G__18028;
continue;
} else {
var temp__6738__auto___18029 = cljs.core.seq(seq__17838_17961);
if(temp__6738__auto___18029){
var seq__17838_18030__$1 = temp__6738__auto___18029;
if(cljs.core.chunked_seq_QMARK_(seq__17838_18030__$1)){
var c__10350__auto___18033 = cljs.core.chunk_first(seq__17838_18030__$1);
var G__18035 = cljs.core.chunk_rest(seq__17838_18030__$1);
var G__18036 = c__10350__auto___18033;
var G__18037 = cljs.core.count(c__10350__auto___18033);
var G__18038 = (0);
seq__17838_17961 = G__18035;
chunk__17839_17962 = G__18036;
count__17840_17963 = G__18037;
i__17841_17964 = G__18038;
continue;
} else {
var vec__17895_18039 = cljs.core.first(seq__17838_18030__$1);
var column_18040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17895_18039,(0),null);
var column_info_18041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17895_18039,(1),null);
var seq__17898_18042 = cljs.core.seq(column_info_18041);
var chunk__17899_18043 = null;
var count__17900_18044 = (0);
var i__17901_18045 = (0);
while(true){
if((i__17901_18045 < count__17900_18044)){
var map__17904_18046 = chunk__17899_18043.cljs$core$IIndexed$_nth$arity$2(null,i__17901_18045);
var map__17904_18047__$1 = ((((!((map__17904_18046 == null)))?((((map__17904_18046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17904_18046.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17904_18046):map__17904_18046);
var gline_18048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17904_18047__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_18049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17904_18047__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_18050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17904_18047__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18048], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17898_18042,chunk__17899_18043,count__17900_18044,i__17901_18045,seq__17838_17961,chunk__17839_17962,count__17840_17963,i__17841_17964,seq__17831_17954,chunk__17832_17955,count__17833_17956,i__17834_17957,map__17904_18046,map__17904_18047__$1,gline_18048,gcol_18049,name_18050,vec__17895_18039,column_18040,column_info_18041,seq__17838_18030__$1,temp__6738__auto___18029,vec__17835_17958,line_17959,columns_17960,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_18049], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_17959,new cljs.core.Keyword(null,"col","col",-1959363084),column_18040,new cljs.core.Keyword(null,"name","name",1843675177),name_18050], null));
});})(seq__17898_18042,chunk__17899_18043,count__17900_18044,i__17901_18045,seq__17838_17961,chunk__17839_17962,count__17840_17963,i__17841_17964,seq__17831_17954,chunk__17832_17955,count__17833_17956,i__17834_17957,map__17904_18046,map__17904_18047__$1,gline_18048,gcol_18049,name_18050,vec__17895_18039,column_18040,column_info_18041,seq__17838_18030__$1,temp__6738__auto___18029,vec__17835_17958,line_17959,columns_17960,inverted))
,cljs.core.sorted_map()));

var G__18063 = seq__17898_18042;
var G__18064 = chunk__17899_18043;
var G__18065 = count__17900_18044;
var G__18066 = (i__17901_18045 + (1));
seq__17898_18042 = G__18063;
chunk__17899_18043 = G__18064;
count__17900_18044 = G__18065;
i__17901_18045 = G__18066;
continue;
} else {
var temp__6738__auto___18067__$1 = cljs.core.seq(seq__17898_18042);
if(temp__6738__auto___18067__$1){
var seq__17898_18068__$1 = temp__6738__auto___18067__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17898_18068__$1)){
var c__10350__auto___18069 = cljs.core.chunk_first(seq__17898_18068__$1);
var G__18070 = cljs.core.chunk_rest(seq__17898_18068__$1);
var G__18071 = c__10350__auto___18069;
var G__18072 = cljs.core.count(c__10350__auto___18069);
var G__18073 = (0);
seq__17898_18042 = G__18070;
chunk__17899_18043 = G__18071;
count__17900_18044 = G__18072;
i__17901_18045 = G__18073;
continue;
} else {
var map__17911_18075 = cljs.core.first(seq__17898_18068__$1);
var map__17911_18076__$1 = ((((!((map__17911_18075 == null)))?((((map__17911_18075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17911_18075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17911_18075):map__17911_18075);
var gline_18077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17911_18076__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_18078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17911_18076__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_18079 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17911_18076__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18077], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17898_18042,chunk__17899_18043,count__17900_18044,i__17901_18045,seq__17838_17961,chunk__17839_17962,count__17840_17963,i__17841_17964,seq__17831_17954,chunk__17832_17955,count__17833_17956,i__17834_17957,map__17911_18075,map__17911_18076__$1,gline_18077,gcol_18078,name_18079,seq__17898_18068__$1,temp__6738__auto___18067__$1,vec__17895_18039,column_18040,column_info_18041,seq__17838_18030__$1,temp__6738__auto___18029,vec__17835_17958,line_17959,columns_17960,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_18078], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_17959,new cljs.core.Keyword(null,"col","col",-1959363084),column_18040,new cljs.core.Keyword(null,"name","name",1843675177),name_18079], null));
});})(seq__17898_18042,chunk__17899_18043,count__17900_18044,i__17901_18045,seq__17838_17961,chunk__17839_17962,count__17840_17963,i__17841_17964,seq__17831_17954,chunk__17832_17955,count__17833_17956,i__17834_17957,map__17911_18075,map__17911_18076__$1,gline_18077,gcol_18078,name_18079,seq__17898_18068__$1,temp__6738__auto___18067__$1,vec__17895_18039,column_18040,column_info_18041,seq__17838_18030__$1,temp__6738__auto___18029,vec__17835_17958,line_17959,columns_17960,inverted))
,cljs.core.sorted_map()));

var G__18084 = cljs.core.next(seq__17898_18068__$1);
var G__18085 = null;
var G__18086 = (0);
var G__18087 = (0);
seq__17898_18042 = G__18084;
chunk__17899_18043 = G__18085;
count__17900_18044 = G__18086;
i__17901_18045 = G__18087;
continue;
}
} else {
}
}
break;
}

var G__18088 = cljs.core.next(seq__17838_18030__$1);
var G__18089 = null;
var G__18090 = (0);
var G__18091 = (0);
seq__17838_17961 = G__18088;
chunk__17839_17962 = G__18089;
count__17840_17963 = G__18090;
i__17841_17964 = G__18091;
continue;
}
} else {
}
}
break;
}

var G__18092 = seq__17831_17954;
var G__18093 = chunk__17832_17955;
var G__18094 = count__17833_17956;
var G__18095 = (i__17834_17957 + (1));
seq__17831_17954 = G__18092;
chunk__17832_17955 = G__18093;
count__17833_17956 = G__18094;
i__17834_17957 = G__18095;
continue;
} else {
var temp__6738__auto___18096 = cljs.core.seq(seq__17831_17954);
if(temp__6738__auto___18096){
var seq__17831_18097__$1 = temp__6738__auto___18096;
if(cljs.core.chunked_seq_QMARK_(seq__17831_18097__$1)){
var c__10350__auto___18098 = cljs.core.chunk_first(seq__17831_18097__$1);
var G__18099 = cljs.core.chunk_rest(seq__17831_18097__$1);
var G__18100 = c__10350__auto___18098;
var G__18101 = cljs.core.count(c__10350__auto___18098);
var G__18102 = (0);
seq__17831_17954 = G__18099;
chunk__17832_17955 = G__18100;
count__17833_17956 = G__18101;
i__17834_17957 = G__18102;
continue;
} else {
var vec__17913_18103 = cljs.core.first(seq__17831_18097__$1);
var line_18104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17913_18103,(0),null);
var columns_18105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17913_18103,(1),null);
var seq__17916_18106 = cljs.core.seq(columns_18105);
var chunk__17917_18107 = null;
var count__17918_18108 = (0);
var i__17919_18109 = (0);
while(true){
if((i__17919_18109 < count__17918_18108)){
var vec__17920_18110 = chunk__17917_18107.cljs$core$IIndexed$_nth$arity$2(null,i__17919_18109);
var column_18111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17920_18110,(0),null);
var column_info_18112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17920_18110,(1),null);
var seq__17923_18119 = cljs.core.seq(column_info_18112);
var chunk__17924_18120 = null;
var count__17925_18121 = (0);
var i__17926_18122 = (0);
while(true){
if((i__17926_18122 < count__17925_18121)){
var map__17927_18123 = chunk__17924_18120.cljs$core$IIndexed$_nth$arity$2(null,i__17926_18122);
var map__17927_18124__$1 = ((((!((map__17927_18123 == null)))?((((map__17927_18123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17927_18123.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17927_18123):map__17927_18123);
var gline_18125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17927_18124__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_18126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17927_18124__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_18127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17927_18124__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18125], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17923_18119,chunk__17924_18120,count__17925_18121,i__17926_18122,seq__17916_18106,chunk__17917_18107,count__17918_18108,i__17919_18109,seq__17831_17954,chunk__17832_17955,count__17833_17956,i__17834_17957,map__17927_18123,map__17927_18124__$1,gline_18125,gcol_18126,name_18127,vec__17920_18110,column_18111,column_info_18112,vec__17913_18103,line_18104,columns_18105,seq__17831_18097__$1,temp__6738__auto___18096,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_18126], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_18104,new cljs.core.Keyword(null,"col","col",-1959363084),column_18111,new cljs.core.Keyword(null,"name","name",1843675177),name_18127], null));
});})(seq__17923_18119,chunk__17924_18120,count__17925_18121,i__17926_18122,seq__17916_18106,chunk__17917_18107,count__17918_18108,i__17919_18109,seq__17831_17954,chunk__17832_17955,count__17833_17956,i__17834_17957,map__17927_18123,map__17927_18124__$1,gline_18125,gcol_18126,name_18127,vec__17920_18110,column_18111,column_info_18112,vec__17913_18103,line_18104,columns_18105,seq__17831_18097__$1,temp__6738__auto___18096,inverted))
,cljs.core.sorted_map()));

var G__18138 = seq__17923_18119;
var G__18139 = chunk__17924_18120;
var G__18140 = count__17925_18121;
var G__18141 = (i__17926_18122 + (1));
seq__17923_18119 = G__18138;
chunk__17924_18120 = G__18139;
count__17925_18121 = G__18140;
i__17926_18122 = G__18141;
continue;
} else {
var temp__6738__auto___18142__$1 = cljs.core.seq(seq__17923_18119);
if(temp__6738__auto___18142__$1){
var seq__17923_18143__$1 = temp__6738__auto___18142__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17923_18143__$1)){
var c__10350__auto___18144 = cljs.core.chunk_first(seq__17923_18143__$1);
var G__18145 = cljs.core.chunk_rest(seq__17923_18143__$1);
var G__18146 = c__10350__auto___18144;
var G__18147 = cljs.core.count(c__10350__auto___18144);
var G__18148 = (0);
seq__17923_18119 = G__18145;
chunk__17924_18120 = G__18146;
count__17925_18121 = G__18147;
i__17926_18122 = G__18148;
continue;
} else {
var map__17930_18151 = cljs.core.first(seq__17923_18143__$1);
var map__17930_18152__$1 = ((((!((map__17930_18151 == null)))?((((map__17930_18151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17930_18151.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17930_18151):map__17930_18151);
var gline_18153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17930_18152__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_18154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17930_18152__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_18155 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17930_18152__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18153], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17923_18119,chunk__17924_18120,count__17925_18121,i__17926_18122,seq__17916_18106,chunk__17917_18107,count__17918_18108,i__17919_18109,seq__17831_17954,chunk__17832_17955,count__17833_17956,i__17834_17957,map__17930_18151,map__17930_18152__$1,gline_18153,gcol_18154,name_18155,seq__17923_18143__$1,temp__6738__auto___18142__$1,vec__17920_18110,column_18111,column_info_18112,vec__17913_18103,line_18104,columns_18105,seq__17831_18097__$1,temp__6738__auto___18096,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_18154], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_18104,new cljs.core.Keyword(null,"col","col",-1959363084),column_18111,new cljs.core.Keyword(null,"name","name",1843675177),name_18155], null));
});})(seq__17923_18119,chunk__17924_18120,count__17925_18121,i__17926_18122,seq__17916_18106,chunk__17917_18107,count__17918_18108,i__17919_18109,seq__17831_17954,chunk__17832_17955,count__17833_17956,i__17834_17957,map__17930_18151,map__17930_18152__$1,gline_18153,gcol_18154,name_18155,seq__17923_18143__$1,temp__6738__auto___18142__$1,vec__17920_18110,column_18111,column_info_18112,vec__17913_18103,line_18104,columns_18105,seq__17831_18097__$1,temp__6738__auto___18096,inverted))
,cljs.core.sorted_map()));

var G__18162 = cljs.core.next(seq__17923_18143__$1);
var G__18163 = null;
var G__18164 = (0);
var G__18165 = (0);
seq__17923_18119 = G__18162;
chunk__17924_18120 = G__18163;
count__17925_18121 = G__18164;
i__17926_18122 = G__18165;
continue;
}
} else {
}
}
break;
}

var G__18167 = seq__17916_18106;
var G__18168 = chunk__17917_18107;
var G__18169 = count__17918_18108;
var G__18170 = (i__17919_18109 + (1));
seq__17916_18106 = G__18167;
chunk__17917_18107 = G__18168;
count__17918_18108 = G__18169;
i__17919_18109 = G__18170;
continue;
} else {
var temp__6738__auto___18178__$1 = cljs.core.seq(seq__17916_18106);
if(temp__6738__auto___18178__$1){
var seq__17916_18180__$1 = temp__6738__auto___18178__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17916_18180__$1)){
var c__10350__auto___18182 = cljs.core.chunk_first(seq__17916_18180__$1);
var G__18183 = cljs.core.chunk_rest(seq__17916_18180__$1);
var G__18184 = c__10350__auto___18182;
var G__18185 = cljs.core.count(c__10350__auto___18182);
var G__18186 = (0);
seq__17916_18106 = G__18183;
chunk__17917_18107 = G__18184;
count__17918_18108 = G__18185;
i__17919_18109 = G__18186;
continue;
} else {
var vec__17939_18193 = cljs.core.first(seq__17916_18180__$1);
var column_18194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17939_18193,(0),null);
var column_info_18195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17939_18193,(1),null);
var seq__17942_18198 = cljs.core.seq(column_info_18195);
var chunk__17943_18199 = null;
var count__17944_18200 = (0);
var i__17945_18201 = (0);
while(true){
if((i__17945_18201 < count__17944_18200)){
var map__17946_18208 = chunk__17943_18199.cljs$core$IIndexed$_nth$arity$2(null,i__17945_18201);
var map__17946_18209__$1 = ((((!((map__17946_18208 == null)))?((((map__17946_18208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17946_18208.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17946_18208):map__17946_18208);
var gline_18210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17946_18209__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_18211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17946_18209__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_18212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17946_18209__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18210], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17942_18198,chunk__17943_18199,count__17944_18200,i__17945_18201,seq__17916_18106,chunk__17917_18107,count__17918_18108,i__17919_18109,seq__17831_17954,chunk__17832_17955,count__17833_17956,i__17834_17957,map__17946_18208,map__17946_18209__$1,gline_18210,gcol_18211,name_18212,vec__17939_18193,column_18194,column_info_18195,seq__17916_18180__$1,temp__6738__auto___18178__$1,vec__17913_18103,line_18104,columns_18105,seq__17831_18097__$1,temp__6738__auto___18096,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_18211], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_18104,new cljs.core.Keyword(null,"col","col",-1959363084),column_18194,new cljs.core.Keyword(null,"name","name",1843675177),name_18212], null));
});})(seq__17942_18198,chunk__17943_18199,count__17944_18200,i__17945_18201,seq__17916_18106,chunk__17917_18107,count__17918_18108,i__17919_18109,seq__17831_17954,chunk__17832_17955,count__17833_17956,i__17834_17957,map__17946_18208,map__17946_18209__$1,gline_18210,gcol_18211,name_18212,vec__17939_18193,column_18194,column_info_18195,seq__17916_18180__$1,temp__6738__auto___18178__$1,vec__17913_18103,line_18104,columns_18105,seq__17831_18097__$1,temp__6738__auto___18096,inverted))
,cljs.core.sorted_map()));

var G__18219 = seq__17942_18198;
var G__18220 = chunk__17943_18199;
var G__18221 = count__17944_18200;
var G__18222 = (i__17945_18201 + (1));
seq__17942_18198 = G__18219;
chunk__17943_18199 = G__18220;
count__17944_18200 = G__18221;
i__17945_18201 = G__18222;
continue;
} else {
var temp__6738__auto___18223__$2 = cljs.core.seq(seq__17942_18198);
if(temp__6738__auto___18223__$2){
var seq__17942_18224__$1 = temp__6738__auto___18223__$2;
if(cljs.core.chunked_seq_QMARK_(seq__17942_18224__$1)){
var c__10350__auto___18225 = cljs.core.chunk_first(seq__17942_18224__$1);
var G__18226 = cljs.core.chunk_rest(seq__17942_18224__$1);
var G__18227 = c__10350__auto___18225;
var G__18228 = cljs.core.count(c__10350__auto___18225);
var G__18229 = (0);
seq__17942_18198 = G__18226;
chunk__17943_18199 = G__18227;
count__17944_18200 = G__18228;
i__17945_18201 = G__18229;
continue;
} else {
var map__17951_18230 = cljs.core.first(seq__17942_18224__$1);
var map__17951_18231__$1 = ((((!((map__17951_18230 == null)))?((((map__17951_18230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17951_18230.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17951_18230):map__17951_18230);
var gline_18232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17951_18231__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_18233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17951_18231__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_18234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17951_18231__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18232], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17942_18198,chunk__17943_18199,count__17944_18200,i__17945_18201,seq__17916_18106,chunk__17917_18107,count__17918_18108,i__17919_18109,seq__17831_17954,chunk__17832_17955,count__17833_17956,i__17834_17957,map__17951_18230,map__17951_18231__$1,gline_18232,gcol_18233,name_18234,seq__17942_18224__$1,temp__6738__auto___18223__$2,vec__17939_18193,column_18194,column_info_18195,seq__17916_18180__$1,temp__6738__auto___18178__$1,vec__17913_18103,line_18104,columns_18105,seq__17831_18097__$1,temp__6738__auto___18096,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_18233], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_18104,new cljs.core.Keyword(null,"col","col",-1959363084),column_18194,new cljs.core.Keyword(null,"name","name",1843675177),name_18234], null));
});})(seq__17942_18198,chunk__17943_18199,count__17944_18200,i__17945_18201,seq__17916_18106,chunk__17917_18107,count__17918_18108,i__17919_18109,seq__17831_17954,chunk__17832_17955,count__17833_17956,i__17834_17957,map__17951_18230,map__17951_18231__$1,gline_18232,gcol_18233,name_18234,seq__17942_18224__$1,temp__6738__auto___18223__$2,vec__17939_18193,column_18194,column_info_18195,seq__17916_18180__$1,temp__6738__auto___18178__$1,vec__17913_18103,line_18104,columns_18105,seq__17831_18097__$1,temp__6738__auto___18096,inverted))
,cljs.core.sorted_map()));

var G__18246 = cljs.core.next(seq__17942_18224__$1);
var G__18247 = null;
var G__18248 = (0);
var G__18249 = (0);
seq__17942_18198 = G__18246;
chunk__17943_18199 = G__18247;
count__17944_18200 = G__18248;
i__17945_18201 = G__18249;
continue;
}
} else {
}
}
break;
}

var G__18252 = cljs.core.next(seq__17916_18180__$1);
var G__18253 = null;
var G__18254 = (0);
var G__18255 = (0);
seq__17916_18106 = G__18252;
chunk__17917_18107 = G__18253;
count__17918_18108 = G__18254;
i__17919_18109 = G__18255;
continue;
}
} else {
}
}
break;
}

var G__18266 = cljs.core.next(seq__17831_18097__$1);
var G__18267 = null;
var G__18268 = (0);
var G__18269 = (0);
seq__17831_17954 = G__18266;
chunk__17832_17955 = G__18267;
count__17833_17956 = G__18268;
i__17834_17957 = G__18269;
continue;
}
} else {
}
}
break;
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inverted) : cljs.core.deref.call(null,inverted));
});
