// Compiled by ClojureScript 1.9.908 {}
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
return cljs.core.reduce.call(null,(function (m,p__23030){
var vec__23031 = p__23030;
var i = cljs.core.nth.call(null,vec__23031,(0),null);
var v = cljs.core.nth.call(null,vec__23031,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__23034 = seg;
var gcol = cljs.core.nth.call(null,vec__23034,(0),null);
var source = cljs.core.nth.call(null,vec__23034,(1),null);
var line = cljs.core.nth.call(null,vec__23034,(2),null);
var col = cljs.core.nth.call(null,vec__23034,(3),null);
var name = cljs.core.nth.call(null,vec__23034,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__6753__auto__)){
var name__$1 = temp__6753__auto__;
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
var vec__23037 = seg;
var gcol = cljs.core.nth.call(null,vec__23037,(0),null);
var source = cljs.core.nth.call(null,vec__23037,(1),null);
var line = cljs.core.nth.call(null,vec__23037,(2),null);
var col = cljs.core.nth.call(null,vec__23037,(3),null);
var name = cljs.core.nth.call(null,vec__23037,(4),null);
var vec__23040 = relseg;
var rgcol = cljs.core.nth.call(null,vec__23040,(0),null);
var rsource = cljs.core.nth.call(null,vec__23040,(1),null);
var rline = cljs.core.nth.call(null,vec__23040,(2),null);
var rcol = cljs.core.nth.call(null,vec__23040,(3),null);
var rname = cljs.core.nth.call(null,vec__23040,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__8363__auto__ = source;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__8363__auto__ = line;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__8363__auto__ = col;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__8363__auto__ = name;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__23043 = segmap;
var map__23043__$1 = ((((!((map__23043 == null)))?((((map__23043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23043.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23043):map__23043);
var gcol = cljs.core.get.call(null,map__23043__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__23043__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__23043__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__23043__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__23043__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__23043,map__23043__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__23043,map__23043__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__23043,map__23043__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__23043,map__23043__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__23043,map__23043__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__23043,map__23043__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__23046 = arguments.length;
switch (G__23046) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__23047 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__23051 = cljs.core.next.call(null,segs__$1);
var G__23052 = nrelseg;
var G__23053 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__23051;
relseg__$1 = G__23052;
result__$1 = G__23053;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__23047,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__23047,(1),null);
var G__23054 = (gline + (1));
var G__23055 = cljs.core.next.call(null,lines__$1);
var G__23056 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__23057 = result__$1;
gline = G__23054;
lines__$1 = G__23055;
relseg = G__23056;
result = G__23057;
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
var map__23059 = segmap;
var map__23059__$1 = ((((!((map__23059 == null)))?((((map__23059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23059.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23059):map__23059);
var gcol = cljs.core.get.call(null,map__23059__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__23059__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__23059__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__23059__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__23059__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__23059,map__23059__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__23059,map__23059__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__23058_SHARP_){
return cljs.core.conj.call(null,p1__23058_SHARP_,d__$1);
});})(map__23059,map__23059__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__23059,map__23059__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__23062 = arguments.length;
switch (G__23062) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__23063 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__23067 = cljs.core.next.call(null,segs__$1);
var G__23068 = nrelseg;
var G__23069 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__23067;
relseg__$1 = G__23068;
result__$1 = G__23069;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__23063,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__23063,(1),null);
var G__23070 = (gline + (1));
var G__23071 = cljs.core.next.call(null,lines__$1);
var G__23072 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__23073 = result__$1;
gline = G__23070;
lines__$1 = G__23071;
relseg = G__23072;
result = G__23073;
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
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__23074){
var vec__23075 = p__23074;
var _ = cljs.core.nth.call(null,vec__23075,(0),null);
var source = cljs.core.nth.call(null,vec__23075,(1),null);
var line = cljs.core.nth.call(null,vec__23075,(2),null);
var col = cljs.core.nth.call(null,vec__23075,(3),null);
var name = cljs.core.nth.call(null,vec__23075,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__23078){
var vec__23079 = p__23078;
var gcol = cljs.core.nth.call(null,vec__23079,(0),null);
var sidx = cljs.core.nth.call(null,vec__23079,(1),null);
var line = cljs.core.nth.call(null,vec__23079,(2),null);
var col = cljs.core.nth.call(null,vec__23079,(3),null);
var name = cljs.core.nth.call(null,vec__23079,(4),null);
var seg = vec__23079;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__23079,gcol,sidx,line,col,name,seg,relseg){
return (function (p__23082){
var vec__23083 = p__23082;
var _ = cljs.core.nth.call(null,vec__23083,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__23083,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__23083,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__23083,(3),null);
var lname = cljs.core.nth.call(null,vec__23083,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__8363__auto__ = name;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__23079,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
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
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__8363__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__6751__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__6751__auto__)){
var name = temp__6751__auto__;
var idx = (function (){var temp__6751__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__6751__auto____$1)){
var idx = temp__6751__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__23089 = cljs.core.seq.call(null,infos);
var chunk__23090 = null;
var count__23091 = (0);
var i__23092 = (0);
while(true){
if((i__23092 < count__23091)){
var info = cljs.core._nth.call(null,chunk__23090,i__23092);
var segv_23171 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_23172 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23173 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_23172 > (lc_23173 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__23089,chunk__23090,count__23091,i__23092,segv_23171,gline_23172,lc_23173,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_23172 - (lc_23173 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23171], null));
});})(seq__23089,chunk__23090,count__23091,i__23092,segv_23171,gline_23172,lc_23173,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__23089,chunk__23090,count__23091,i__23092,segv_23171,gline_23172,lc_23173,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23172], null),cljs.core.conj,segv_23171);
});})(seq__23089,chunk__23090,count__23091,i__23092,segv_23171,gline_23172,lc_23173,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__23174 = seq__23089;
var G__23175 = chunk__23090;
var G__23176 = count__23091;
var G__23177 = (i__23092 + (1));
seq__23089 = G__23174;
chunk__23090 = G__23175;
count__23091 = G__23176;
i__23092 = G__23177;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__23089);
if(temp__6753__auto__){
var seq__23089__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23089__$1)){
var c__9294__auto__ = cljs.core.chunk_first.call(null,seq__23089__$1);
var G__23178 = cljs.core.chunk_rest.call(null,seq__23089__$1);
var G__23179 = c__9294__auto__;
var G__23180 = cljs.core.count.call(null,c__9294__auto__);
var G__23181 = (0);
seq__23089 = G__23178;
chunk__23090 = G__23179;
count__23091 = G__23180;
i__23092 = G__23181;
continue;
} else {
var info = cljs.core.first.call(null,seq__23089__$1);
var segv_23182 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_23183 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23184 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_23183 > (lc_23184 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__23089,chunk__23090,count__23091,i__23092,segv_23182,gline_23183,lc_23184,info,seq__23089__$1,temp__6753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_23183 - (lc_23184 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23182], null));
});})(seq__23089,chunk__23090,count__23091,i__23092,segv_23182,gline_23183,lc_23184,info,seq__23089__$1,temp__6753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__23089,chunk__23090,count__23091,i__23092,segv_23182,gline_23183,lc_23184,info,seq__23089__$1,temp__6753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23183], null),cljs.core.conj,segv_23182);
});})(seq__23089,chunk__23090,count__23091,i__23092,segv_23182,gline_23183,lc_23184,info,seq__23089__$1,temp__6753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__23185 = cljs.core.next.call(null,seq__23089__$1);
var G__23186 = null;
var G__23187 = (0);
var G__23188 = (0);
seq__23089 = G__23185;
chunk__23090 = G__23186;
count__23091 = G__23187;
i__23092 = G__23188;
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
var seq__23093_23189 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__23094_23190 = null;
var count__23095_23191 = (0);
var i__23096_23192 = (0);
while(true){
if((i__23096_23192 < count__23095_23191)){
var vec__23097_23193 = cljs.core._nth.call(null,chunk__23094_23190,i__23096_23192);
var source_idx_23194 = cljs.core.nth.call(null,vec__23097_23193,(0),null);
var vec__23100_23195 = cljs.core.nth.call(null,vec__23097_23193,(1),null);
var __23196 = cljs.core.nth.call(null,vec__23100_23195,(0),null);
var lines_23197__$1 = cljs.core.nth.call(null,vec__23100_23195,(1),null);
var seq__23103_23198 = cljs.core.seq.call(null,lines_23197__$1);
var chunk__23104_23199 = null;
var count__23105_23200 = (0);
var i__23106_23201 = (0);
while(true){
if((i__23106_23201 < count__23105_23200)){
var vec__23107_23202 = cljs.core._nth.call(null,chunk__23104_23199,i__23106_23201);
var line_23203 = cljs.core.nth.call(null,vec__23107_23202,(0),null);
var cols_23204 = cljs.core.nth.call(null,vec__23107_23202,(1),null);
var seq__23110_23205 = cljs.core.seq.call(null,cols_23204);
var chunk__23111_23206 = null;
var count__23112_23207 = (0);
var i__23113_23208 = (0);
while(true){
if((i__23113_23208 < count__23112_23207)){
var vec__23114_23209 = cljs.core._nth.call(null,chunk__23111_23206,i__23113_23208);
var col_23210 = cljs.core.nth.call(null,vec__23114_23209,(0),null);
var infos_23211 = cljs.core.nth.call(null,vec__23114_23209,(1),null);
encode_cols.call(null,infos_23211,source_idx_23194,line_23203,col_23210);

var G__23212 = seq__23110_23205;
var G__23213 = chunk__23111_23206;
var G__23214 = count__23112_23207;
var G__23215 = (i__23113_23208 + (1));
seq__23110_23205 = G__23212;
chunk__23111_23206 = G__23213;
count__23112_23207 = G__23214;
i__23113_23208 = G__23215;
continue;
} else {
var temp__6753__auto___23216 = cljs.core.seq.call(null,seq__23110_23205);
if(temp__6753__auto___23216){
var seq__23110_23217__$1 = temp__6753__auto___23216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23110_23217__$1)){
var c__9294__auto___23218 = cljs.core.chunk_first.call(null,seq__23110_23217__$1);
var G__23219 = cljs.core.chunk_rest.call(null,seq__23110_23217__$1);
var G__23220 = c__9294__auto___23218;
var G__23221 = cljs.core.count.call(null,c__9294__auto___23218);
var G__23222 = (0);
seq__23110_23205 = G__23219;
chunk__23111_23206 = G__23220;
count__23112_23207 = G__23221;
i__23113_23208 = G__23222;
continue;
} else {
var vec__23117_23223 = cljs.core.first.call(null,seq__23110_23217__$1);
var col_23224 = cljs.core.nth.call(null,vec__23117_23223,(0),null);
var infos_23225 = cljs.core.nth.call(null,vec__23117_23223,(1),null);
encode_cols.call(null,infos_23225,source_idx_23194,line_23203,col_23224);

var G__23226 = cljs.core.next.call(null,seq__23110_23217__$1);
var G__23227 = null;
var G__23228 = (0);
var G__23229 = (0);
seq__23110_23205 = G__23226;
chunk__23111_23206 = G__23227;
count__23112_23207 = G__23228;
i__23113_23208 = G__23229;
continue;
}
} else {
}
}
break;
}

var G__23230 = seq__23103_23198;
var G__23231 = chunk__23104_23199;
var G__23232 = count__23105_23200;
var G__23233 = (i__23106_23201 + (1));
seq__23103_23198 = G__23230;
chunk__23104_23199 = G__23231;
count__23105_23200 = G__23232;
i__23106_23201 = G__23233;
continue;
} else {
var temp__6753__auto___23234 = cljs.core.seq.call(null,seq__23103_23198);
if(temp__6753__auto___23234){
var seq__23103_23235__$1 = temp__6753__auto___23234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23103_23235__$1)){
var c__9294__auto___23236 = cljs.core.chunk_first.call(null,seq__23103_23235__$1);
var G__23237 = cljs.core.chunk_rest.call(null,seq__23103_23235__$1);
var G__23238 = c__9294__auto___23236;
var G__23239 = cljs.core.count.call(null,c__9294__auto___23236);
var G__23240 = (0);
seq__23103_23198 = G__23237;
chunk__23104_23199 = G__23238;
count__23105_23200 = G__23239;
i__23106_23201 = G__23240;
continue;
} else {
var vec__23120_23241 = cljs.core.first.call(null,seq__23103_23235__$1);
var line_23242 = cljs.core.nth.call(null,vec__23120_23241,(0),null);
var cols_23243 = cljs.core.nth.call(null,vec__23120_23241,(1),null);
var seq__23123_23244 = cljs.core.seq.call(null,cols_23243);
var chunk__23124_23245 = null;
var count__23125_23246 = (0);
var i__23126_23247 = (0);
while(true){
if((i__23126_23247 < count__23125_23246)){
var vec__23127_23248 = cljs.core._nth.call(null,chunk__23124_23245,i__23126_23247);
var col_23249 = cljs.core.nth.call(null,vec__23127_23248,(0),null);
var infos_23250 = cljs.core.nth.call(null,vec__23127_23248,(1),null);
encode_cols.call(null,infos_23250,source_idx_23194,line_23242,col_23249);

var G__23251 = seq__23123_23244;
var G__23252 = chunk__23124_23245;
var G__23253 = count__23125_23246;
var G__23254 = (i__23126_23247 + (1));
seq__23123_23244 = G__23251;
chunk__23124_23245 = G__23252;
count__23125_23246 = G__23253;
i__23126_23247 = G__23254;
continue;
} else {
var temp__6753__auto___23255__$1 = cljs.core.seq.call(null,seq__23123_23244);
if(temp__6753__auto___23255__$1){
var seq__23123_23256__$1 = temp__6753__auto___23255__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23123_23256__$1)){
var c__9294__auto___23257 = cljs.core.chunk_first.call(null,seq__23123_23256__$1);
var G__23258 = cljs.core.chunk_rest.call(null,seq__23123_23256__$1);
var G__23259 = c__9294__auto___23257;
var G__23260 = cljs.core.count.call(null,c__9294__auto___23257);
var G__23261 = (0);
seq__23123_23244 = G__23258;
chunk__23124_23245 = G__23259;
count__23125_23246 = G__23260;
i__23126_23247 = G__23261;
continue;
} else {
var vec__23130_23262 = cljs.core.first.call(null,seq__23123_23256__$1);
var col_23263 = cljs.core.nth.call(null,vec__23130_23262,(0),null);
var infos_23264 = cljs.core.nth.call(null,vec__23130_23262,(1),null);
encode_cols.call(null,infos_23264,source_idx_23194,line_23242,col_23263);

var G__23265 = cljs.core.next.call(null,seq__23123_23256__$1);
var G__23266 = null;
var G__23267 = (0);
var G__23268 = (0);
seq__23123_23244 = G__23265;
chunk__23124_23245 = G__23266;
count__23125_23246 = G__23267;
i__23126_23247 = G__23268;
continue;
}
} else {
}
}
break;
}

var G__23269 = cljs.core.next.call(null,seq__23103_23235__$1);
var G__23270 = null;
var G__23271 = (0);
var G__23272 = (0);
seq__23103_23198 = G__23269;
chunk__23104_23199 = G__23270;
count__23105_23200 = G__23271;
i__23106_23201 = G__23272;
continue;
}
} else {
}
}
break;
}

var G__23273 = seq__23093_23189;
var G__23274 = chunk__23094_23190;
var G__23275 = count__23095_23191;
var G__23276 = (i__23096_23192 + (1));
seq__23093_23189 = G__23273;
chunk__23094_23190 = G__23274;
count__23095_23191 = G__23275;
i__23096_23192 = G__23276;
continue;
} else {
var temp__6753__auto___23277 = cljs.core.seq.call(null,seq__23093_23189);
if(temp__6753__auto___23277){
var seq__23093_23278__$1 = temp__6753__auto___23277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23093_23278__$1)){
var c__9294__auto___23279 = cljs.core.chunk_first.call(null,seq__23093_23278__$1);
var G__23280 = cljs.core.chunk_rest.call(null,seq__23093_23278__$1);
var G__23281 = c__9294__auto___23279;
var G__23282 = cljs.core.count.call(null,c__9294__auto___23279);
var G__23283 = (0);
seq__23093_23189 = G__23280;
chunk__23094_23190 = G__23281;
count__23095_23191 = G__23282;
i__23096_23192 = G__23283;
continue;
} else {
var vec__23133_23284 = cljs.core.first.call(null,seq__23093_23278__$1);
var source_idx_23285 = cljs.core.nth.call(null,vec__23133_23284,(0),null);
var vec__23136_23286 = cljs.core.nth.call(null,vec__23133_23284,(1),null);
var __23287 = cljs.core.nth.call(null,vec__23136_23286,(0),null);
var lines_23288__$1 = cljs.core.nth.call(null,vec__23136_23286,(1),null);
var seq__23139_23289 = cljs.core.seq.call(null,lines_23288__$1);
var chunk__23140_23290 = null;
var count__23141_23291 = (0);
var i__23142_23292 = (0);
while(true){
if((i__23142_23292 < count__23141_23291)){
var vec__23143_23293 = cljs.core._nth.call(null,chunk__23140_23290,i__23142_23292);
var line_23294 = cljs.core.nth.call(null,vec__23143_23293,(0),null);
var cols_23295 = cljs.core.nth.call(null,vec__23143_23293,(1),null);
var seq__23146_23296 = cljs.core.seq.call(null,cols_23295);
var chunk__23147_23297 = null;
var count__23148_23298 = (0);
var i__23149_23299 = (0);
while(true){
if((i__23149_23299 < count__23148_23298)){
var vec__23150_23300 = cljs.core._nth.call(null,chunk__23147_23297,i__23149_23299);
var col_23301 = cljs.core.nth.call(null,vec__23150_23300,(0),null);
var infos_23302 = cljs.core.nth.call(null,vec__23150_23300,(1),null);
encode_cols.call(null,infos_23302,source_idx_23285,line_23294,col_23301);

var G__23303 = seq__23146_23296;
var G__23304 = chunk__23147_23297;
var G__23305 = count__23148_23298;
var G__23306 = (i__23149_23299 + (1));
seq__23146_23296 = G__23303;
chunk__23147_23297 = G__23304;
count__23148_23298 = G__23305;
i__23149_23299 = G__23306;
continue;
} else {
var temp__6753__auto___23307__$1 = cljs.core.seq.call(null,seq__23146_23296);
if(temp__6753__auto___23307__$1){
var seq__23146_23308__$1 = temp__6753__auto___23307__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23146_23308__$1)){
var c__9294__auto___23309 = cljs.core.chunk_first.call(null,seq__23146_23308__$1);
var G__23310 = cljs.core.chunk_rest.call(null,seq__23146_23308__$1);
var G__23311 = c__9294__auto___23309;
var G__23312 = cljs.core.count.call(null,c__9294__auto___23309);
var G__23313 = (0);
seq__23146_23296 = G__23310;
chunk__23147_23297 = G__23311;
count__23148_23298 = G__23312;
i__23149_23299 = G__23313;
continue;
} else {
var vec__23153_23314 = cljs.core.first.call(null,seq__23146_23308__$1);
var col_23315 = cljs.core.nth.call(null,vec__23153_23314,(0),null);
var infos_23316 = cljs.core.nth.call(null,vec__23153_23314,(1),null);
encode_cols.call(null,infos_23316,source_idx_23285,line_23294,col_23315);

var G__23317 = cljs.core.next.call(null,seq__23146_23308__$1);
var G__23318 = null;
var G__23319 = (0);
var G__23320 = (0);
seq__23146_23296 = G__23317;
chunk__23147_23297 = G__23318;
count__23148_23298 = G__23319;
i__23149_23299 = G__23320;
continue;
}
} else {
}
}
break;
}

var G__23321 = seq__23139_23289;
var G__23322 = chunk__23140_23290;
var G__23323 = count__23141_23291;
var G__23324 = (i__23142_23292 + (1));
seq__23139_23289 = G__23321;
chunk__23140_23290 = G__23322;
count__23141_23291 = G__23323;
i__23142_23292 = G__23324;
continue;
} else {
var temp__6753__auto___23325__$1 = cljs.core.seq.call(null,seq__23139_23289);
if(temp__6753__auto___23325__$1){
var seq__23139_23326__$1 = temp__6753__auto___23325__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23139_23326__$1)){
var c__9294__auto___23327 = cljs.core.chunk_first.call(null,seq__23139_23326__$1);
var G__23328 = cljs.core.chunk_rest.call(null,seq__23139_23326__$1);
var G__23329 = c__9294__auto___23327;
var G__23330 = cljs.core.count.call(null,c__9294__auto___23327);
var G__23331 = (0);
seq__23139_23289 = G__23328;
chunk__23140_23290 = G__23329;
count__23141_23291 = G__23330;
i__23142_23292 = G__23331;
continue;
} else {
var vec__23156_23332 = cljs.core.first.call(null,seq__23139_23326__$1);
var line_23333 = cljs.core.nth.call(null,vec__23156_23332,(0),null);
var cols_23334 = cljs.core.nth.call(null,vec__23156_23332,(1),null);
var seq__23159_23335 = cljs.core.seq.call(null,cols_23334);
var chunk__23160_23336 = null;
var count__23161_23337 = (0);
var i__23162_23338 = (0);
while(true){
if((i__23162_23338 < count__23161_23337)){
var vec__23163_23339 = cljs.core._nth.call(null,chunk__23160_23336,i__23162_23338);
var col_23340 = cljs.core.nth.call(null,vec__23163_23339,(0),null);
var infos_23341 = cljs.core.nth.call(null,vec__23163_23339,(1),null);
encode_cols.call(null,infos_23341,source_idx_23285,line_23333,col_23340);

var G__23342 = seq__23159_23335;
var G__23343 = chunk__23160_23336;
var G__23344 = count__23161_23337;
var G__23345 = (i__23162_23338 + (1));
seq__23159_23335 = G__23342;
chunk__23160_23336 = G__23343;
count__23161_23337 = G__23344;
i__23162_23338 = G__23345;
continue;
} else {
var temp__6753__auto___23346__$2 = cljs.core.seq.call(null,seq__23159_23335);
if(temp__6753__auto___23346__$2){
var seq__23159_23347__$1 = temp__6753__auto___23346__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23159_23347__$1)){
var c__9294__auto___23348 = cljs.core.chunk_first.call(null,seq__23159_23347__$1);
var G__23349 = cljs.core.chunk_rest.call(null,seq__23159_23347__$1);
var G__23350 = c__9294__auto___23348;
var G__23351 = cljs.core.count.call(null,c__9294__auto___23348);
var G__23352 = (0);
seq__23159_23335 = G__23349;
chunk__23160_23336 = G__23350;
count__23161_23337 = G__23351;
i__23162_23338 = G__23352;
continue;
} else {
var vec__23166_23353 = cljs.core.first.call(null,seq__23159_23347__$1);
var col_23354 = cljs.core.nth.call(null,vec__23166_23353,(0),null);
var infos_23355 = cljs.core.nth.call(null,vec__23166_23353,(1),null);
encode_cols.call(null,infos_23355,source_idx_23285,line_23333,col_23354);

var G__23356 = cljs.core.next.call(null,seq__23159_23347__$1);
var G__23357 = null;
var G__23358 = (0);
var G__23359 = (0);
seq__23159_23335 = G__23356;
chunk__23160_23336 = G__23357;
count__23161_23337 = G__23358;
i__23162_23338 = G__23359;
continue;
}
} else {
}
}
break;
}

var G__23360 = cljs.core.next.call(null,seq__23139_23326__$1);
var G__23361 = null;
var G__23362 = (0);
var G__23363 = (0);
seq__23139_23289 = G__23360;
chunk__23140_23290 = G__23361;
count__23141_23291 = G__23362;
i__23142_23292 = G__23363;
continue;
}
} else {
}
}
break;
}

var G__23364 = cljs.core.next.call(null,seq__23093_23278__$1);
var G__23365 = null;
var G__23366 = (0);
var G__23367 = (0);
seq__23093_23189 = G__23364;
chunk__23094_23190 = G__23365;
count__23095_23191 = G__23366;
i__23096_23192 = G__23367;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__23169 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__23086_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23086_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__23087_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__23087_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__23088_SHARP_){
return clojure.string.join.call(null,",",p1__23088_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__23170 = G__23169;
goog.object.set(G__23170,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__23170;
} else {
return G__23169;
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
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__23368 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__23368,(0),null);
var col_map = cljs.core.nth.call(null,vec__23368,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__23371 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__23371,(0),null);
var infos = cljs.core.nth.call(null,vec__23371,(1),null);
var G__23377 = cljs.core.next.call(null,col_map_seq);
var G__23378 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__23371,col,infos,vec__23368,line,col_map){
return (function (v,p__23374){
var map__23375 = p__23374;
var map__23375__$1 = ((((!((map__23375 == null)))?((((map__23375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23375.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23375):map__23375);
var gline = cljs.core.get.call(null,map__23375__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__23375__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__23371,col,infos,vec__23368,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__23377;
new_cols = G__23378;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__23379 = cljs.core.next.call(null,line_map_seq);
var G__23380 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__23379;
new_lines = G__23380;
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
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__23381_23443 = cljs.core.seq.call(null,reverse_map);
var chunk__23382_23444 = null;
var count__23383_23445 = (0);
var i__23384_23446 = (0);
while(true){
if((i__23384_23446 < count__23383_23445)){
var vec__23385_23447 = cljs.core._nth.call(null,chunk__23382_23444,i__23384_23446);
var line_23448 = cljs.core.nth.call(null,vec__23385_23447,(0),null);
var columns_23449 = cljs.core.nth.call(null,vec__23385_23447,(1),null);
var seq__23388_23450 = cljs.core.seq.call(null,columns_23449);
var chunk__23389_23451 = null;
var count__23390_23452 = (0);
var i__23391_23453 = (0);
while(true){
if((i__23391_23453 < count__23390_23452)){
var vec__23392_23454 = cljs.core._nth.call(null,chunk__23389_23451,i__23391_23453);
var column_23455 = cljs.core.nth.call(null,vec__23392_23454,(0),null);
var column_info_23456 = cljs.core.nth.call(null,vec__23392_23454,(1),null);
var seq__23395_23457 = cljs.core.seq.call(null,column_info_23456);
var chunk__23396_23458 = null;
var count__23397_23459 = (0);
var i__23398_23460 = (0);
while(true){
if((i__23398_23460 < count__23397_23459)){
var map__23399_23461 = cljs.core._nth.call(null,chunk__23396_23458,i__23398_23460);
var map__23399_23462__$1 = ((((!((map__23399_23461 == null)))?((((map__23399_23461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23399_23461.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23399_23461):map__23399_23461);
var gline_23463 = cljs.core.get.call(null,map__23399_23462__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23464 = cljs.core.get.call(null,map__23399_23462__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23465 = cljs.core.get.call(null,map__23399_23462__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23463], null),cljs.core.fnil.call(null,((function (seq__23395_23457,chunk__23396_23458,count__23397_23459,i__23398_23460,seq__23388_23450,chunk__23389_23451,count__23390_23452,i__23391_23453,seq__23381_23443,chunk__23382_23444,count__23383_23445,i__23384_23446,map__23399_23461,map__23399_23462__$1,gline_23463,gcol_23464,name_23465,vec__23392_23454,column_23455,column_info_23456,vec__23385_23447,line_23448,columns_23449,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23464], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23448,new cljs.core.Keyword(null,"col","col",-1959363084),column_23455,new cljs.core.Keyword(null,"name","name",1843675177),name_23465], null));
});})(seq__23395_23457,chunk__23396_23458,count__23397_23459,i__23398_23460,seq__23388_23450,chunk__23389_23451,count__23390_23452,i__23391_23453,seq__23381_23443,chunk__23382_23444,count__23383_23445,i__23384_23446,map__23399_23461,map__23399_23462__$1,gline_23463,gcol_23464,name_23465,vec__23392_23454,column_23455,column_info_23456,vec__23385_23447,line_23448,columns_23449,inverted))
,cljs.core.sorted_map.call(null)));

var G__23466 = seq__23395_23457;
var G__23467 = chunk__23396_23458;
var G__23468 = count__23397_23459;
var G__23469 = (i__23398_23460 + (1));
seq__23395_23457 = G__23466;
chunk__23396_23458 = G__23467;
count__23397_23459 = G__23468;
i__23398_23460 = G__23469;
continue;
} else {
var temp__6753__auto___23470 = cljs.core.seq.call(null,seq__23395_23457);
if(temp__6753__auto___23470){
var seq__23395_23471__$1 = temp__6753__auto___23470;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23395_23471__$1)){
var c__9294__auto___23472 = cljs.core.chunk_first.call(null,seq__23395_23471__$1);
var G__23473 = cljs.core.chunk_rest.call(null,seq__23395_23471__$1);
var G__23474 = c__9294__auto___23472;
var G__23475 = cljs.core.count.call(null,c__9294__auto___23472);
var G__23476 = (0);
seq__23395_23457 = G__23473;
chunk__23396_23458 = G__23474;
count__23397_23459 = G__23475;
i__23398_23460 = G__23476;
continue;
} else {
var map__23401_23477 = cljs.core.first.call(null,seq__23395_23471__$1);
var map__23401_23478__$1 = ((((!((map__23401_23477 == null)))?((((map__23401_23477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23401_23477.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23401_23477):map__23401_23477);
var gline_23479 = cljs.core.get.call(null,map__23401_23478__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23480 = cljs.core.get.call(null,map__23401_23478__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23481 = cljs.core.get.call(null,map__23401_23478__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23479], null),cljs.core.fnil.call(null,((function (seq__23395_23457,chunk__23396_23458,count__23397_23459,i__23398_23460,seq__23388_23450,chunk__23389_23451,count__23390_23452,i__23391_23453,seq__23381_23443,chunk__23382_23444,count__23383_23445,i__23384_23446,map__23401_23477,map__23401_23478__$1,gline_23479,gcol_23480,name_23481,seq__23395_23471__$1,temp__6753__auto___23470,vec__23392_23454,column_23455,column_info_23456,vec__23385_23447,line_23448,columns_23449,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23480], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23448,new cljs.core.Keyword(null,"col","col",-1959363084),column_23455,new cljs.core.Keyword(null,"name","name",1843675177),name_23481], null));
});})(seq__23395_23457,chunk__23396_23458,count__23397_23459,i__23398_23460,seq__23388_23450,chunk__23389_23451,count__23390_23452,i__23391_23453,seq__23381_23443,chunk__23382_23444,count__23383_23445,i__23384_23446,map__23401_23477,map__23401_23478__$1,gline_23479,gcol_23480,name_23481,seq__23395_23471__$1,temp__6753__auto___23470,vec__23392_23454,column_23455,column_info_23456,vec__23385_23447,line_23448,columns_23449,inverted))
,cljs.core.sorted_map.call(null)));

var G__23482 = cljs.core.next.call(null,seq__23395_23471__$1);
var G__23483 = null;
var G__23484 = (0);
var G__23485 = (0);
seq__23395_23457 = G__23482;
chunk__23396_23458 = G__23483;
count__23397_23459 = G__23484;
i__23398_23460 = G__23485;
continue;
}
} else {
}
}
break;
}

var G__23486 = seq__23388_23450;
var G__23487 = chunk__23389_23451;
var G__23488 = count__23390_23452;
var G__23489 = (i__23391_23453 + (1));
seq__23388_23450 = G__23486;
chunk__23389_23451 = G__23487;
count__23390_23452 = G__23488;
i__23391_23453 = G__23489;
continue;
} else {
var temp__6753__auto___23490 = cljs.core.seq.call(null,seq__23388_23450);
if(temp__6753__auto___23490){
var seq__23388_23491__$1 = temp__6753__auto___23490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23388_23491__$1)){
var c__9294__auto___23492 = cljs.core.chunk_first.call(null,seq__23388_23491__$1);
var G__23493 = cljs.core.chunk_rest.call(null,seq__23388_23491__$1);
var G__23494 = c__9294__auto___23492;
var G__23495 = cljs.core.count.call(null,c__9294__auto___23492);
var G__23496 = (0);
seq__23388_23450 = G__23493;
chunk__23389_23451 = G__23494;
count__23390_23452 = G__23495;
i__23391_23453 = G__23496;
continue;
} else {
var vec__23403_23497 = cljs.core.first.call(null,seq__23388_23491__$1);
var column_23498 = cljs.core.nth.call(null,vec__23403_23497,(0),null);
var column_info_23499 = cljs.core.nth.call(null,vec__23403_23497,(1),null);
var seq__23406_23500 = cljs.core.seq.call(null,column_info_23499);
var chunk__23407_23501 = null;
var count__23408_23502 = (0);
var i__23409_23503 = (0);
while(true){
if((i__23409_23503 < count__23408_23502)){
var map__23410_23504 = cljs.core._nth.call(null,chunk__23407_23501,i__23409_23503);
var map__23410_23505__$1 = ((((!((map__23410_23504 == null)))?((((map__23410_23504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23410_23504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23410_23504):map__23410_23504);
var gline_23506 = cljs.core.get.call(null,map__23410_23505__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23507 = cljs.core.get.call(null,map__23410_23505__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23508 = cljs.core.get.call(null,map__23410_23505__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23506], null),cljs.core.fnil.call(null,((function (seq__23406_23500,chunk__23407_23501,count__23408_23502,i__23409_23503,seq__23388_23450,chunk__23389_23451,count__23390_23452,i__23391_23453,seq__23381_23443,chunk__23382_23444,count__23383_23445,i__23384_23446,map__23410_23504,map__23410_23505__$1,gline_23506,gcol_23507,name_23508,vec__23403_23497,column_23498,column_info_23499,seq__23388_23491__$1,temp__6753__auto___23490,vec__23385_23447,line_23448,columns_23449,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23507], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23448,new cljs.core.Keyword(null,"col","col",-1959363084),column_23498,new cljs.core.Keyword(null,"name","name",1843675177),name_23508], null));
});})(seq__23406_23500,chunk__23407_23501,count__23408_23502,i__23409_23503,seq__23388_23450,chunk__23389_23451,count__23390_23452,i__23391_23453,seq__23381_23443,chunk__23382_23444,count__23383_23445,i__23384_23446,map__23410_23504,map__23410_23505__$1,gline_23506,gcol_23507,name_23508,vec__23403_23497,column_23498,column_info_23499,seq__23388_23491__$1,temp__6753__auto___23490,vec__23385_23447,line_23448,columns_23449,inverted))
,cljs.core.sorted_map.call(null)));

var G__23509 = seq__23406_23500;
var G__23510 = chunk__23407_23501;
var G__23511 = count__23408_23502;
var G__23512 = (i__23409_23503 + (1));
seq__23406_23500 = G__23509;
chunk__23407_23501 = G__23510;
count__23408_23502 = G__23511;
i__23409_23503 = G__23512;
continue;
} else {
var temp__6753__auto___23513__$1 = cljs.core.seq.call(null,seq__23406_23500);
if(temp__6753__auto___23513__$1){
var seq__23406_23514__$1 = temp__6753__auto___23513__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23406_23514__$1)){
var c__9294__auto___23515 = cljs.core.chunk_first.call(null,seq__23406_23514__$1);
var G__23516 = cljs.core.chunk_rest.call(null,seq__23406_23514__$1);
var G__23517 = c__9294__auto___23515;
var G__23518 = cljs.core.count.call(null,c__9294__auto___23515);
var G__23519 = (0);
seq__23406_23500 = G__23516;
chunk__23407_23501 = G__23517;
count__23408_23502 = G__23518;
i__23409_23503 = G__23519;
continue;
} else {
var map__23412_23520 = cljs.core.first.call(null,seq__23406_23514__$1);
var map__23412_23521__$1 = ((((!((map__23412_23520 == null)))?((((map__23412_23520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23412_23520.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23412_23520):map__23412_23520);
var gline_23522 = cljs.core.get.call(null,map__23412_23521__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23523 = cljs.core.get.call(null,map__23412_23521__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23524 = cljs.core.get.call(null,map__23412_23521__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23522], null),cljs.core.fnil.call(null,((function (seq__23406_23500,chunk__23407_23501,count__23408_23502,i__23409_23503,seq__23388_23450,chunk__23389_23451,count__23390_23452,i__23391_23453,seq__23381_23443,chunk__23382_23444,count__23383_23445,i__23384_23446,map__23412_23520,map__23412_23521__$1,gline_23522,gcol_23523,name_23524,seq__23406_23514__$1,temp__6753__auto___23513__$1,vec__23403_23497,column_23498,column_info_23499,seq__23388_23491__$1,temp__6753__auto___23490,vec__23385_23447,line_23448,columns_23449,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23523], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23448,new cljs.core.Keyword(null,"col","col",-1959363084),column_23498,new cljs.core.Keyword(null,"name","name",1843675177),name_23524], null));
});})(seq__23406_23500,chunk__23407_23501,count__23408_23502,i__23409_23503,seq__23388_23450,chunk__23389_23451,count__23390_23452,i__23391_23453,seq__23381_23443,chunk__23382_23444,count__23383_23445,i__23384_23446,map__23412_23520,map__23412_23521__$1,gline_23522,gcol_23523,name_23524,seq__23406_23514__$1,temp__6753__auto___23513__$1,vec__23403_23497,column_23498,column_info_23499,seq__23388_23491__$1,temp__6753__auto___23490,vec__23385_23447,line_23448,columns_23449,inverted))
,cljs.core.sorted_map.call(null)));

var G__23525 = cljs.core.next.call(null,seq__23406_23514__$1);
var G__23526 = null;
var G__23527 = (0);
var G__23528 = (0);
seq__23406_23500 = G__23525;
chunk__23407_23501 = G__23526;
count__23408_23502 = G__23527;
i__23409_23503 = G__23528;
continue;
}
} else {
}
}
break;
}

var G__23529 = cljs.core.next.call(null,seq__23388_23491__$1);
var G__23530 = null;
var G__23531 = (0);
var G__23532 = (0);
seq__23388_23450 = G__23529;
chunk__23389_23451 = G__23530;
count__23390_23452 = G__23531;
i__23391_23453 = G__23532;
continue;
}
} else {
}
}
break;
}

var G__23533 = seq__23381_23443;
var G__23534 = chunk__23382_23444;
var G__23535 = count__23383_23445;
var G__23536 = (i__23384_23446 + (1));
seq__23381_23443 = G__23533;
chunk__23382_23444 = G__23534;
count__23383_23445 = G__23535;
i__23384_23446 = G__23536;
continue;
} else {
var temp__6753__auto___23537 = cljs.core.seq.call(null,seq__23381_23443);
if(temp__6753__auto___23537){
var seq__23381_23538__$1 = temp__6753__auto___23537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23381_23538__$1)){
var c__9294__auto___23539 = cljs.core.chunk_first.call(null,seq__23381_23538__$1);
var G__23540 = cljs.core.chunk_rest.call(null,seq__23381_23538__$1);
var G__23541 = c__9294__auto___23539;
var G__23542 = cljs.core.count.call(null,c__9294__auto___23539);
var G__23543 = (0);
seq__23381_23443 = G__23540;
chunk__23382_23444 = G__23541;
count__23383_23445 = G__23542;
i__23384_23446 = G__23543;
continue;
} else {
var vec__23414_23544 = cljs.core.first.call(null,seq__23381_23538__$1);
var line_23545 = cljs.core.nth.call(null,vec__23414_23544,(0),null);
var columns_23546 = cljs.core.nth.call(null,vec__23414_23544,(1),null);
var seq__23417_23547 = cljs.core.seq.call(null,columns_23546);
var chunk__23418_23548 = null;
var count__23419_23549 = (0);
var i__23420_23550 = (0);
while(true){
if((i__23420_23550 < count__23419_23549)){
var vec__23421_23551 = cljs.core._nth.call(null,chunk__23418_23548,i__23420_23550);
var column_23552 = cljs.core.nth.call(null,vec__23421_23551,(0),null);
var column_info_23553 = cljs.core.nth.call(null,vec__23421_23551,(1),null);
var seq__23424_23554 = cljs.core.seq.call(null,column_info_23553);
var chunk__23425_23555 = null;
var count__23426_23556 = (0);
var i__23427_23557 = (0);
while(true){
if((i__23427_23557 < count__23426_23556)){
var map__23428_23558 = cljs.core._nth.call(null,chunk__23425_23555,i__23427_23557);
var map__23428_23559__$1 = ((((!((map__23428_23558 == null)))?((((map__23428_23558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23428_23558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23428_23558):map__23428_23558);
var gline_23560 = cljs.core.get.call(null,map__23428_23559__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23561 = cljs.core.get.call(null,map__23428_23559__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23562 = cljs.core.get.call(null,map__23428_23559__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23560], null),cljs.core.fnil.call(null,((function (seq__23424_23554,chunk__23425_23555,count__23426_23556,i__23427_23557,seq__23417_23547,chunk__23418_23548,count__23419_23549,i__23420_23550,seq__23381_23443,chunk__23382_23444,count__23383_23445,i__23384_23446,map__23428_23558,map__23428_23559__$1,gline_23560,gcol_23561,name_23562,vec__23421_23551,column_23552,column_info_23553,vec__23414_23544,line_23545,columns_23546,seq__23381_23538__$1,temp__6753__auto___23537,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23561], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23545,new cljs.core.Keyword(null,"col","col",-1959363084),column_23552,new cljs.core.Keyword(null,"name","name",1843675177),name_23562], null));
});})(seq__23424_23554,chunk__23425_23555,count__23426_23556,i__23427_23557,seq__23417_23547,chunk__23418_23548,count__23419_23549,i__23420_23550,seq__23381_23443,chunk__23382_23444,count__23383_23445,i__23384_23446,map__23428_23558,map__23428_23559__$1,gline_23560,gcol_23561,name_23562,vec__23421_23551,column_23552,column_info_23553,vec__23414_23544,line_23545,columns_23546,seq__23381_23538__$1,temp__6753__auto___23537,inverted))
,cljs.core.sorted_map.call(null)));

var G__23563 = seq__23424_23554;
var G__23564 = chunk__23425_23555;
var G__23565 = count__23426_23556;
var G__23566 = (i__23427_23557 + (1));
seq__23424_23554 = G__23563;
chunk__23425_23555 = G__23564;
count__23426_23556 = G__23565;
i__23427_23557 = G__23566;
continue;
} else {
var temp__6753__auto___23567__$1 = cljs.core.seq.call(null,seq__23424_23554);
if(temp__6753__auto___23567__$1){
var seq__23424_23568__$1 = temp__6753__auto___23567__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23424_23568__$1)){
var c__9294__auto___23569 = cljs.core.chunk_first.call(null,seq__23424_23568__$1);
var G__23570 = cljs.core.chunk_rest.call(null,seq__23424_23568__$1);
var G__23571 = c__9294__auto___23569;
var G__23572 = cljs.core.count.call(null,c__9294__auto___23569);
var G__23573 = (0);
seq__23424_23554 = G__23570;
chunk__23425_23555 = G__23571;
count__23426_23556 = G__23572;
i__23427_23557 = G__23573;
continue;
} else {
var map__23430_23574 = cljs.core.first.call(null,seq__23424_23568__$1);
var map__23430_23575__$1 = ((((!((map__23430_23574 == null)))?((((map__23430_23574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23430_23574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23430_23574):map__23430_23574);
var gline_23576 = cljs.core.get.call(null,map__23430_23575__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23577 = cljs.core.get.call(null,map__23430_23575__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23578 = cljs.core.get.call(null,map__23430_23575__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23576], null),cljs.core.fnil.call(null,((function (seq__23424_23554,chunk__23425_23555,count__23426_23556,i__23427_23557,seq__23417_23547,chunk__23418_23548,count__23419_23549,i__23420_23550,seq__23381_23443,chunk__23382_23444,count__23383_23445,i__23384_23446,map__23430_23574,map__23430_23575__$1,gline_23576,gcol_23577,name_23578,seq__23424_23568__$1,temp__6753__auto___23567__$1,vec__23421_23551,column_23552,column_info_23553,vec__23414_23544,line_23545,columns_23546,seq__23381_23538__$1,temp__6753__auto___23537,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23577], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23545,new cljs.core.Keyword(null,"col","col",-1959363084),column_23552,new cljs.core.Keyword(null,"name","name",1843675177),name_23578], null));
});})(seq__23424_23554,chunk__23425_23555,count__23426_23556,i__23427_23557,seq__23417_23547,chunk__23418_23548,count__23419_23549,i__23420_23550,seq__23381_23443,chunk__23382_23444,count__23383_23445,i__23384_23446,map__23430_23574,map__23430_23575__$1,gline_23576,gcol_23577,name_23578,seq__23424_23568__$1,temp__6753__auto___23567__$1,vec__23421_23551,column_23552,column_info_23553,vec__23414_23544,line_23545,columns_23546,seq__23381_23538__$1,temp__6753__auto___23537,inverted))
,cljs.core.sorted_map.call(null)));

var G__23579 = cljs.core.next.call(null,seq__23424_23568__$1);
var G__23580 = null;
var G__23581 = (0);
var G__23582 = (0);
seq__23424_23554 = G__23579;
chunk__23425_23555 = G__23580;
count__23426_23556 = G__23581;
i__23427_23557 = G__23582;
continue;
}
} else {
}
}
break;
}

var G__23583 = seq__23417_23547;
var G__23584 = chunk__23418_23548;
var G__23585 = count__23419_23549;
var G__23586 = (i__23420_23550 + (1));
seq__23417_23547 = G__23583;
chunk__23418_23548 = G__23584;
count__23419_23549 = G__23585;
i__23420_23550 = G__23586;
continue;
} else {
var temp__6753__auto___23587__$1 = cljs.core.seq.call(null,seq__23417_23547);
if(temp__6753__auto___23587__$1){
var seq__23417_23588__$1 = temp__6753__auto___23587__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23417_23588__$1)){
var c__9294__auto___23589 = cljs.core.chunk_first.call(null,seq__23417_23588__$1);
var G__23590 = cljs.core.chunk_rest.call(null,seq__23417_23588__$1);
var G__23591 = c__9294__auto___23589;
var G__23592 = cljs.core.count.call(null,c__9294__auto___23589);
var G__23593 = (0);
seq__23417_23547 = G__23590;
chunk__23418_23548 = G__23591;
count__23419_23549 = G__23592;
i__23420_23550 = G__23593;
continue;
} else {
var vec__23432_23594 = cljs.core.first.call(null,seq__23417_23588__$1);
var column_23595 = cljs.core.nth.call(null,vec__23432_23594,(0),null);
var column_info_23596 = cljs.core.nth.call(null,vec__23432_23594,(1),null);
var seq__23435_23597 = cljs.core.seq.call(null,column_info_23596);
var chunk__23436_23598 = null;
var count__23437_23599 = (0);
var i__23438_23600 = (0);
while(true){
if((i__23438_23600 < count__23437_23599)){
var map__23439_23601 = cljs.core._nth.call(null,chunk__23436_23598,i__23438_23600);
var map__23439_23602__$1 = ((((!((map__23439_23601 == null)))?((((map__23439_23601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23439_23601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23439_23601):map__23439_23601);
var gline_23603 = cljs.core.get.call(null,map__23439_23602__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23604 = cljs.core.get.call(null,map__23439_23602__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23605 = cljs.core.get.call(null,map__23439_23602__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23603], null),cljs.core.fnil.call(null,((function (seq__23435_23597,chunk__23436_23598,count__23437_23599,i__23438_23600,seq__23417_23547,chunk__23418_23548,count__23419_23549,i__23420_23550,seq__23381_23443,chunk__23382_23444,count__23383_23445,i__23384_23446,map__23439_23601,map__23439_23602__$1,gline_23603,gcol_23604,name_23605,vec__23432_23594,column_23595,column_info_23596,seq__23417_23588__$1,temp__6753__auto___23587__$1,vec__23414_23544,line_23545,columns_23546,seq__23381_23538__$1,temp__6753__auto___23537,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23604], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23545,new cljs.core.Keyword(null,"col","col",-1959363084),column_23595,new cljs.core.Keyword(null,"name","name",1843675177),name_23605], null));
});})(seq__23435_23597,chunk__23436_23598,count__23437_23599,i__23438_23600,seq__23417_23547,chunk__23418_23548,count__23419_23549,i__23420_23550,seq__23381_23443,chunk__23382_23444,count__23383_23445,i__23384_23446,map__23439_23601,map__23439_23602__$1,gline_23603,gcol_23604,name_23605,vec__23432_23594,column_23595,column_info_23596,seq__23417_23588__$1,temp__6753__auto___23587__$1,vec__23414_23544,line_23545,columns_23546,seq__23381_23538__$1,temp__6753__auto___23537,inverted))
,cljs.core.sorted_map.call(null)));

var G__23606 = seq__23435_23597;
var G__23607 = chunk__23436_23598;
var G__23608 = count__23437_23599;
var G__23609 = (i__23438_23600 + (1));
seq__23435_23597 = G__23606;
chunk__23436_23598 = G__23607;
count__23437_23599 = G__23608;
i__23438_23600 = G__23609;
continue;
} else {
var temp__6753__auto___23610__$2 = cljs.core.seq.call(null,seq__23435_23597);
if(temp__6753__auto___23610__$2){
var seq__23435_23611__$1 = temp__6753__auto___23610__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23435_23611__$1)){
var c__9294__auto___23612 = cljs.core.chunk_first.call(null,seq__23435_23611__$1);
var G__23613 = cljs.core.chunk_rest.call(null,seq__23435_23611__$1);
var G__23614 = c__9294__auto___23612;
var G__23615 = cljs.core.count.call(null,c__9294__auto___23612);
var G__23616 = (0);
seq__23435_23597 = G__23613;
chunk__23436_23598 = G__23614;
count__23437_23599 = G__23615;
i__23438_23600 = G__23616;
continue;
} else {
var map__23441_23617 = cljs.core.first.call(null,seq__23435_23611__$1);
var map__23441_23618__$1 = ((((!((map__23441_23617 == null)))?((((map__23441_23617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23441_23617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23441_23617):map__23441_23617);
var gline_23619 = cljs.core.get.call(null,map__23441_23618__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23620 = cljs.core.get.call(null,map__23441_23618__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23621 = cljs.core.get.call(null,map__23441_23618__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23619], null),cljs.core.fnil.call(null,((function (seq__23435_23597,chunk__23436_23598,count__23437_23599,i__23438_23600,seq__23417_23547,chunk__23418_23548,count__23419_23549,i__23420_23550,seq__23381_23443,chunk__23382_23444,count__23383_23445,i__23384_23446,map__23441_23617,map__23441_23618__$1,gline_23619,gcol_23620,name_23621,seq__23435_23611__$1,temp__6753__auto___23610__$2,vec__23432_23594,column_23595,column_info_23596,seq__23417_23588__$1,temp__6753__auto___23587__$1,vec__23414_23544,line_23545,columns_23546,seq__23381_23538__$1,temp__6753__auto___23537,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23620], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23545,new cljs.core.Keyword(null,"col","col",-1959363084),column_23595,new cljs.core.Keyword(null,"name","name",1843675177),name_23621], null));
});})(seq__23435_23597,chunk__23436_23598,count__23437_23599,i__23438_23600,seq__23417_23547,chunk__23418_23548,count__23419_23549,i__23420_23550,seq__23381_23443,chunk__23382_23444,count__23383_23445,i__23384_23446,map__23441_23617,map__23441_23618__$1,gline_23619,gcol_23620,name_23621,seq__23435_23611__$1,temp__6753__auto___23610__$2,vec__23432_23594,column_23595,column_info_23596,seq__23417_23588__$1,temp__6753__auto___23587__$1,vec__23414_23544,line_23545,columns_23546,seq__23381_23538__$1,temp__6753__auto___23537,inverted))
,cljs.core.sorted_map.call(null)));

var G__23622 = cljs.core.next.call(null,seq__23435_23611__$1);
var G__23623 = null;
var G__23624 = (0);
var G__23625 = (0);
seq__23435_23597 = G__23622;
chunk__23436_23598 = G__23623;
count__23437_23599 = G__23624;
i__23438_23600 = G__23625;
continue;
}
} else {
}
}
break;
}

var G__23626 = cljs.core.next.call(null,seq__23417_23588__$1);
var G__23627 = null;
var G__23628 = (0);
var G__23629 = (0);
seq__23417_23547 = G__23626;
chunk__23418_23548 = G__23627;
count__23419_23549 = G__23628;
i__23420_23550 = G__23629;
continue;
}
} else {
}
}
break;
}

var G__23630 = cljs.core.next.call(null,seq__23381_23538__$1);
var G__23631 = null;
var G__23632 = (0);
var G__23633 = (0);
seq__23381_23443 = G__23630;
chunk__23382_23444 = G__23631;
count__23383_23445 = G__23632;
i__23384_23446 = G__23633;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map
