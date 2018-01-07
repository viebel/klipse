// Compiled by ClojureScript 1.9.908 {:static-fns true, :fn-invoke-direct true, :optimize-constants false}
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__15585){
var vec__15586 = p__15585;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15586,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15586,(1),null);
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
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1(a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1(b)));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__15597 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15597,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15597,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15597,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15597,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15597,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5278__auto__)){
var name__$1 = temp__5278__auto__;
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
var vec__15606 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15606,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15606,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15606,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15606,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15606,(4),null);
var vec__15609 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15609,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15609,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15609,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15609,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15609,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__8752__auto__ = source;
if(cljs.core.truth_(or__8752__auto__)){
return or__8752__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__8752__auto__ = line;
if(cljs.core.truth_(or__8752__auto__)){
return or__8752__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__8752__auto__ = col;
if(cljs.core.truth_(or__8752__auto__)){
return or__8752__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__8752__auto__ = name;
if(cljs.core.truth_(or__8752__auto__)){
return or__8752__auto__;
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
var map__15612 = segmap;
var map__15612__$1 = ((((!((map__15612 == null)))?((((map__15612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15612):map__15612);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15612__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15612__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15612__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15612__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15612__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__15612,map__15612__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__15612,map__15612__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__15612,map__15612__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__15612,map__15612__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__15612,map__15612__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__15612,map__15612__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__15624 = arguments.length;
switch (G__15624) {
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
var vec__15625 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__15629 = cljs.core.next(segs__$1);
var G__15630 = nrelseg;
var G__15631 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__15629;
relseg__$1 = G__15630;
result__$1 = G__15631;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15625,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15625,(1),null);
var G__15632 = (gline + (1));
var G__15633 = cljs.core.next(lines__$1);
var G__15634 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__15635 = result__$1;
gline = G__15632;
lines__$1 = G__15633;
relseg = G__15634;
result = G__15635;
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
var map__15637 = segmap;
var map__15637__$1 = ((((!((map__15637 == null)))?((((map__15637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15637):map__15637);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15637__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15637__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15637__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15637__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15637__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__15637,map__15637__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__15637,map__15637__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__15636_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15636_SHARP_,d__$1);
});})(map__15637,map__15637__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__15637,map__15637__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__15651 = arguments.length;
switch (G__15651) {
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
var vec__15652 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__15658 = cljs.core.next(segs__$1);
var G__15659 = nrelseg;
var G__15660 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__15658;
relseg__$1 = G__15659;
result__$1 = G__15660;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15652,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15652,(1),null);
var G__15661 = (gline + (1));
var G__15662 = cljs.core.next(lines__$1);
var G__15663 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__15664 = result__$1;
gline = G__15661;
lines__$1 = G__15662;
relseg = G__15663;
result = G__15664;
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
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (relseg){
return (function (p__15665){
var vec__15666 = p__15665;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15666,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15666,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15666,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15666,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15666,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__15669){
var vec__15670 = p__15669;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15670,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15670,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15670,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15670,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15670,(4),null);
var seg = vec__15670;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__15670,gcol,sidx,line,col,name,seg,relseg){
return (function (p__15673){
var vec__15674 = p__15673;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15674,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15674,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15674,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15674,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15674,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__8752__auto__ = name;
if(cljs.core.truth_(or__8752__auto__)){
return or__8752__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__15670,gcol,sidx,line,col,name,seg,relseg))
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
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__8752__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8752__auto__)){
return or__8752__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5276__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5276__auto__)){
var name = temp__5276__auto__;
var idx = (function (){var temp__5276__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5276__auto____$1)){
var idx = temp__5276__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
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
var seq__15686 = cljs.core.seq(infos);
var chunk__15687 = null;
var count__15688 = (0);
var i__15689 = (0);
while(true){
if((i__15689 < count__15688)){
var info = chunk__15687.cljs$core$IIndexed$_nth$arity$2(null,i__15689);
var segv_15780 = info__GT_segv(info,source_idx,line,col);
var gline_15781 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_15782 = cljs.core.count(cljs.core.deref(lines));
if((gline_15781 > (lc_15782 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__15686,chunk__15687,count__15688,i__15689,segv_15780,gline_15781,lc_15782,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_15781 - (lc_15782 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_15780], null));
});})(seq__15686,chunk__15687,count__15688,i__15689,segv_15780,gline_15781,lc_15782,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__15686,chunk__15687,count__15688,i__15689,segv_15780,gline_15781,lc_15782,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15781], null),cljs.core.conj,segv_15780);
});})(seq__15686,chunk__15687,count__15688,i__15689,segv_15780,gline_15781,lc_15782,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__15783 = seq__15686;
var G__15784 = chunk__15687;
var G__15785 = count__15688;
var G__15786 = (i__15689 + (1));
seq__15686 = G__15783;
chunk__15687 = G__15784;
count__15688 = G__15785;
i__15689 = G__15786;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__15686);
if(temp__5278__auto__){
var seq__15686__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15686__$1)){
var c__9683__auto__ = cljs.core.chunk_first(seq__15686__$1);
var G__15787 = cljs.core.chunk_rest(seq__15686__$1);
var G__15788 = c__9683__auto__;
var G__15789 = cljs.core.count(c__9683__auto__);
var G__15790 = (0);
seq__15686 = G__15787;
chunk__15687 = G__15788;
count__15688 = G__15789;
i__15689 = G__15790;
continue;
} else {
var info = cljs.core.first(seq__15686__$1);
var segv_15792 = info__GT_segv(info,source_idx,line,col);
var gline_15793 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_15794 = cljs.core.count(cljs.core.deref(lines));
if((gline_15793 > (lc_15794 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__15686,chunk__15687,count__15688,i__15689,segv_15792,gline_15793,lc_15794,info,seq__15686__$1,temp__5278__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_15793 - (lc_15794 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_15792], null));
});})(seq__15686,chunk__15687,count__15688,i__15689,segv_15792,gline_15793,lc_15794,info,seq__15686__$1,temp__5278__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__15686,chunk__15687,count__15688,i__15689,segv_15792,gline_15793,lc_15794,info,seq__15686__$1,temp__5278__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15793], null),cljs.core.conj,segv_15792);
});})(seq__15686,chunk__15687,count__15688,i__15689,segv_15792,gline_15793,lc_15794,info,seq__15686__$1,temp__5278__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__15795 = cljs.core.next(seq__15686__$1);
var G__15796 = null;
var G__15797 = (0);
var G__15798 = (0);
seq__15686 = G__15795;
chunk__15687 = G__15796;
count__15688 = G__15797;
i__15689 = G__15798;
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
var seq__15690_15800 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__15691_15801 = null;
var count__15692_15802 = (0);
var i__15693_15803 = (0);
while(true){
if((i__15693_15803 < count__15692_15802)){
var vec__15694_15805 = chunk__15691_15801.cljs$core$IIndexed$_nth$arity$2(null,i__15693_15803);
var source_idx_15806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15694_15805,(0),null);
var vec__15697_15807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15694_15805,(1),null);
var __15808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15697_15807,(0),null);
var lines_15809__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15697_15807,(1),null);
var seq__15700_15810 = cljs.core.seq(lines_15809__$1);
var chunk__15701_15811 = null;
var count__15702_15812 = (0);
var i__15703_15813 = (0);
while(true){
if((i__15703_15813 < count__15702_15812)){
var vec__15704_15814 = chunk__15701_15811.cljs$core$IIndexed$_nth$arity$2(null,i__15703_15813);
var line_15815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15704_15814,(0),null);
var cols_15816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15704_15814,(1),null);
var seq__15707_15817 = cljs.core.seq(cols_15816);
var chunk__15708_15818 = null;
var count__15709_15819 = (0);
var i__15710_15820 = (0);
while(true){
if((i__15710_15820 < count__15709_15819)){
var vec__15711_15821 = chunk__15708_15818.cljs$core$IIndexed$_nth$arity$2(null,i__15710_15820);
var col_15822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15711_15821,(0),null);
var infos_15823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15711_15821,(1),null);
encode_cols(infos_15823,source_idx_15806,line_15815,col_15822);

var G__15824 = seq__15707_15817;
var G__15825 = chunk__15708_15818;
var G__15826 = count__15709_15819;
var G__15827 = (i__15710_15820 + (1));
seq__15707_15817 = G__15824;
chunk__15708_15818 = G__15825;
count__15709_15819 = G__15826;
i__15710_15820 = G__15827;
continue;
} else {
var temp__5278__auto___15828 = cljs.core.seq(seq__15707_15817);
if(temp__5278__auto___15828){
var seq__15707_15829__$1 = temp__5278__auto___15828;
if(cljs.core.chunked_seq_QMARK_(seq__15707_15829__$1)){
var c__9683__auto___15830 = cljs.core.chunk_first(seq__15707_15829__$1);
var G__15831 = cljs.core.chunk_rest(seq__15707_15829__$1);
var G__15832 = c__9683__auto___15830;
var G__15833 = cljs.core.count(c__9683__auto___15830);
var G__15834 = (0);
seq__15707_15817 = G__15831;
chunk__15708_15818 = G__15832;
count__15709_15819 = G__15833;
i__15710_15820 = G__15834;
continue;
} else {
var vec__15714_15835 = cljs.core.first(seq__15707_15829__$1);
var col_15836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15714_15835,(0),null);
var infos_15837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15714_15835,(1),null);
encode_cols(infos_15837,source_idx_15806,line_15815,col_15836);

var G__15838 = cljs.core.next(seq__15707_15829__$1);
var G__15839 = null;
var G__15840 = (0);
var G__15841 = (0);
seq__15707_15817 = G__15838;
chunk__15708_15818 = G__15839;
count__15709_15819 = G__15840;
i__15710_15820 = G__15841;
continue;
}
} else {
}
}
break;
}

var G__15842 = seq__15700_15810;
var G__15843 = chunk__15701_15811;
var G__15844 = count__15702_15812;
var G__15845 = (i__15703_15813 + (1));
seq__15700_15810 = G__15842;
chunk__15701_15811 = G__15843;
count__15702_15812 = G__15844;
i__15703_15813 = G__15845;
continue;
} else {
var temp__5278__auto___15846 = cljs.core.seq(seq__15700_15810);
if(temp__5278__auto___15846){
var seq__15700_15847__$1 = temp__5278__auto___15846;
if(cljs.core.chunked_seq_QMARK_(seq__15700_15847__$1)){
var c__9683__auto___15848 = cljs.core.chunk_first(seq__15700_15847__$1);
var G__15849 = cljs.core.chunk_rest(seq__15700_15847__$1);
var G__15850 = c__9683__auto___15848;
var G__15851 = cljs.core.count(c__9683__auto___15848);
var G__15852 = (0);
seq__15700_15810 = G__15849;
chunk__15701_15811 = G__15850;
count__15702_15812 = G__15851;
i__15703_15813 = G__15852;
continue;
} else {
var vec__15717_15853 = cljs.core.first(seq__15700_15847__$1);
var line_15854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15717_15853,(0),null);
var cols_15855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15717_15853,(1),null);
var seq__15720_15856 = cljs.core.seq(cols_15855);
var chunk__15721_15857 = null;
var count__15722_15858 = (0);
var i__15723_15859 = (0);
while(true){
if((i__15723_15859 < count__15722_15858)){
var vec__15724_15860 = chunk__15721_15857.cljs$core$IIndexed$_nth$arity$2(null,i__15723_15859);
var col_15861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15724_15860,(0),null);
var infos_15862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15724_15860,(1),null);
encode_cols(infos_15862,source_idx_15806,line_15854,col_15861);

var G__15863 = seq__15720_15856;
var G__15864 = chunk__15721_15857;
var G__15865 = count__15722_15858;
var G__15866 = (i__15723_15859 + (1));
seq__15720_15856 = G__15863;
chunk__15721_15857 = G__15864;
count__15722_15858 = G__15865;
i__15723_15859 = G__15866;
continue;
} else {
var temp__5278__auto___15868__$1 = cljs.core.seq(seq__15720_15856);
if(temp__5278__auto___15868__$1){
var seq__15720_15869__$1 = temp__5278__auto___15868__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15720_15869__$1)){
var c__9683__auto___15870 = cljs.core.chunk_first(seq__15720_15869__$1);
var G__15871 = cljs.core.chunk_rest(seq__15720_15869__$1);
var G__15872 = c__9683__auto___15870;
var G__15873 = cljs.core.count(c__9683__auto___15870);
var G__15874 = (0);
seq__15720_15856 = G__15871;
chunk__15721_15857 = G__15872;
count__15722_15858 = G__15873;
i__15723_15859 = G__15874;
continue;
} else {
var vec__15729_15875 = cljs.core.first(seq__15720_15869__$1);
var col_15876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15729_15875,(0),null);
var infos_15877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15729_15875,(1),null);
encode_cols(infos_15877,source_idx_15806,line_15854,col_15876);

var G__15879 = cljs.core.next(seq__15720_15869__$1);
var G__15880 = null;
var G__15881 = (0);
var G__15882 = (0);
seq__15720_15856 = G__15879;
chunk__15721_15857 = G__15880;
count__15722_15858 = G__15881;
i__15723_15859 = G__15882;
continue;
}
} else {
}
}
break;
}

var G__15883 = cljs.core.next(seq__15700_15847__$1);
var G__15884 = null;
var G__15885 = (0);
var G__15886 = (0);
seq__15700_15810 = G__15883;
chunk__15701_15811 = G__15884;
count__15702_15812 = G__15885;
i__15703_15813 = G__15886;
continue;
}
} else {
}
}
break;
}

var G__15887 = seq__15690_15800;
var G__15888 = chunk__15691_15801;
var G__15889 = count__15692_15802;
var G__15890 = (i__15693_15803 + (1));
seq__15690_15800 = G__15887;
chunk__15691_15801 = G__15888;
count__15692_15802 = G__15889;
i__15693_15803 = G__15890;
continue;
} else {
var temp__5278__auto___15891 = cljs.core.seq(seq__15690_15800);
if(temp__5278__auto___15891){
var seq__15690_15892__$1 = temp__5278__auto___15891;
if(cljs.core.chunked_seq_QMARK_(seq__15690_15892__$1)){
var c__9683__auto___15893 = cljs.core.chunk_first(seq__15690_15892__$1);
var G__15894 = cljs.core.chunk_rest(seq__15690_15892__$1);
var G__15895 = c__9683__auto___15893;
var G__15896 = cljs.core.count(c__9683__auto___15893);
var G__15897 = (0);
seq__15690_15800 = G__15894;
chunk__15691_15801 = G__15895;
count__15692_15802 = G__15896;
i__15693_15803 = G__15897;
continue;
} else {
var vec__15734_15899 = cljs.core.first(seq__15690_15892__$1);
var source_idx_15900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15734_15899,(0),null);
var vec__15737_15901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15734_15899,(1),null);
var __15902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15737_15901,(0),null);
var lines_15903__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15737_15901,(1),null);
var seq__15742_15904 = cljs.core.seq(lines_15903__$1);
var chunk__15743_15905 = null;
var count__15744_15906 = (0);
var i__15745_15907 = (0);
while(true){
if((i__15745_15907 < count__15744_15906)){
var vec__15748_15908 = chunk__15743_15905.cljs$core$IIndexed$_nth$arity$2(null,i__15745_15907);
var line_15909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15748_15908,(0),null);
var cols_15910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15748_15908,(1),null);
var seq__15751_15911 = cljs.core.seq(cols_15910);
var chunk__15752_15912 = null;
var count__15753_15913 = (0);
var i__15754_15914 = (0);
while(true){
if((i__15754_15914 < count__15753_15913)){
var vec__15755_15915 = chunk__15752_15912.cljs$core$IIndexed$_nth$arity$2(null,i__15754_15914);
var col_15916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15755_15915,(0),null);
var infos_15917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15755_15915,(1),null);
encode_cols(infos_15917,source_idx_15900,line_15909,col_15916);

var G__15918 = seq__15751_15911;
var G__15919 = chunk__15752_15912;
var G__15920 = count__15753_15913;
var G__15921 = (i__15754_15914 + (1));
seq__15751_15911 = G__15918;
chunk__15752_15912 = G__15919;
count__15753_15913 = G__15920;
i__15754_15914 = G__15921;
continue;
} else {
var temp__5278__auto___15922__$1 = cljs.core.seq(seq__15751_15911);
if(temp__5278__auto___15922__$1){
var seq__15751_15923__$1 = temp__5278__auto___15922__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15751_15923__$1)){
var c__9683__auto___15924 = cljs.core.chunk_first(seq__15751_15923__$1);
var G__15925 = cljs.core.chunk_rest(seq__15751_15923__$1);
var G__15926 = c__9683__auto___15924;
var G__15927 = cljs.core.count(c__9683__auto___15924);
var G__15928 = (0);
seq__15751_15911 = G__15925;
chunk__15752_15912 = G__15926;
count__15753_15913 = G__15927;
i__15754_15914 = G__15928;
continue;
} else {
var vec__15759_15929 = cljs.core.first(seq__15751_15923__$1);
var col_15930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15759_15929,(0),null);
var infos_15931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15759_15929,(1),null);
encode_cols(infos_15931,source_idx_15900,line_15909,col_15930);

var G__15932 = cljs.core.next(seq__15751_15923__$1);
var G__15933 = null;
var G__15934 = (0);
var G__15935 = (0);
seq__15751_15911 = G__15932;
chunk__15752_15912 = G__15933;
count__15753_15913 = G__15934;
i__15754_15914 = G__15935;
continue;
}
} else {
}
}
break;
}

var G__15936 = seq__15742_15904;
var G__15937 = chunk__15743_15905;
var G__15938 = count__15744_15906;
var G__15939 = (i__15745_15907 + (1));
seq__15742_15904 = G__15936;
chunk__15743_15905 = G__15937;
count__15744_15906 = G__15938;
i__15745_15907 = G__15939;
continue;
} else {
var temp__5278__auto___15940__$1 = cljs.core.seq(seq__15742_15904);
if(temp__5278__auto___15940__$1){
var seq__15742_15941__$1 = temp__5278__auto___15940__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15742_15941__$1)){
var c__9683__auto___15942 = cljs.core.chunk_first(seq__15742_15941__$1);
var G__15943 = cljs.core.chunk_rest(seq__15742_15941__$1);
var G__15944 = c__9683__auto___15942;
var G__15945 = cljs.core.count(c__9683__auto___15942);
var G__15946 = (0);
seq__15742_15904 = G__15943;
chunk__15743_15905 = G__15944;
count__15744_15906 = G__15945;
i__15745_15907 = G__15946;
continue;
} else {
var vec__15762_15947 = cljs.core.first(seq__15742_15941__$1);
var line_15948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15762_15947,(0),null);
var cols_15949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15762_15947,(1),null);
var seq__15765_15950 = cljs.core.seq(cols_15949);
var chunk__15766_15951 = null;
var count__15767_15952 = (0);
var i__15768_15953 = (0);
while(true){
if((i__15768_15953 < count__15767_15952)){
var vec__15769_15954 = chunk__15766_15951.cljs$core$IIndexed$_nth$arity$2(null,i__15768_15953);
var col_15955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15769_15954,(0),null);
var infos_15956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15769_15954,(1),null);
encode_cols(infos_15956,source_idx_15900,line_15948,col_15955);

var G__15958 = seq__15765_15950;
var G__15959 = chunk__15766_15951;
var G__15960 = count__15767_15952;
var G__15961 = (i__15768_15953 + (1));
seq__15765_15950 = G__15958;
chunk__15766_15951 = G__15959;
count__15767_15952 = G__15960;
i__15768_15953 = G__15961;
continue;
} else {
var temp__5278__auto___15962__$2 = cljs.core.seq(seq__15765_15950);
if(temp__5278__auto___15962__$2){
var seq__15765_15963__$1 = temp__5278__auto___15962__$2;
if(cljs.core.chunked_seq_QMARK_(seq__15765_15963__$1)){
var c__9683__auto___15964 = cljs.core.chunk_first(seq__15765_15963__$1);
var G__15966 = cljs.core.chunk_rest(seq__15765_15963__$1);
var G__15967 = c__9683__auto___15964;
var G__15968 = cljs.core.count(c__9683__auto___15964);
var G__15969 = (0);
seq__15765_15950 = G__15966;
chunk__15766_15951 = G__15967;
count__15767_15952 = G__15968;
i__15768_15953 = G__15969;
continue;
} else {
var vec__15772_15972 = cljs.core.first(seq__15765_15963__$1);
var col_15973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15772_15972,(0),null);
var infos_15974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15772_15972,(1),null);
encode_cols(infos_15974,source_idx_15900,line_15948,col_15973);

var G__15975 = cljs.core.next(seq__15765_15963__$1);
var G__15976 = null;
var G__15977 = (0);
var G__15978 = (0);
seq__15765_15950 = G__15975;
chunk__15766_15951 = G__15976;
count__15767_15952 = G__15977;
i__15768_15953 = G__15978;
continue;
}
} else {
}
}
break;
}

var G__15979 = cljs.core.next(seq__15742_15941__$1);
var G__15980 = null;
var G__15981 = (0);
var G__15982 = (0);
seq__15742_15904 = G__15979;
chunk__15743_15905 = G__15980;
count__15744_15906 = G__15981;
i__15745_15907 = G__15982;
continue;
}
} else {
}
}
break;
}

var G__15983 = cljs.core.next(seq__15690_15892__$1);
var G__15984 = null;
var G__15985 = (0);
var G__15986 = (0);
seq__15690_15800 = G__15983;
chunk__15691_15801 = G__15984;
count__15692_15802 = G__15985;
i__15693_15803 = G__15986;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__15775 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__15683_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15683_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__15684_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__15684_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__15685_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__15685_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__15776 = G__15775;
var G__15777_15987 = G__15776;
var G__15778_15988 = "sourcesContent";
var G__15779_15989 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__15777_15987,G__15778_15988,G__15779_15989);

return G__15776;
} else {
return G__15775;
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
var vec__15990 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15990,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15990,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__15993 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15993,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15993,(1),null);
var G__15999 = cljs.core.next(col_map_seq);
var G__16000 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__15993,col,infos,vec__15990,line,col_map){
return (function (v,p__15996){
var map__15997 = p__15996;
var map__15997__$1 = ((((!((map__15997 == null)))?((((map__15997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15997.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15997):map__15997);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15997__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15997__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__15993,col,infos,vec__15990,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__15999;
new_cols = G__16000;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__16001 = cljs.core.next(line_map_seq);
var G__16002 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__16001;
new_lines = G__16002;
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
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__16003_16078 = cljs.core.seq(reverse_map);
var chunk__16004_16079 = null;
var count__16005_16080 = (0);
var i__16006_16081 = (0);
while(true){
if((i__16006_16081 < count__16005_16080)){
var vec__16007_16082 = chunk__16004_16079.cljs$core$IIndexed$_nth$arity$2(null,i__16006_16081);
var line_16083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16007_16082,(0),null);
var columns_16084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16007_16082,(1),null);
var seq__16010_16085 = cljs.core.seq(columns_16084);
var chunk__16011_16086 = null;
var count__16012_16087 = (0);
var i__16013_16088 = (0);
while(true){
if((i__16013_16088 < count__16012_16087)){
var vec__16014_16089 = chunk__16011_16086.cljs$core$IIndexed$_nth$arity$2(null,i__16013_16088);
var column_16090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16014_16089,(0),null);
var column_info_16091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16014_16089,(1),null);
var seq__16017_16092 = cljs.core.seq(column_info_16091);
var chunk__16018_16093 = null;
var count__16019_16094 = (0);
var i__16020_16095 = (0);
while(true){
if((i__16020_16095 < count__16019_16094)){
var map__16021_16096 = chunk__16018_16093.cljs$core$IIndexed$_nth$arity$2(null,i__16020_16095);
var map__16021_16097__$1 = ((((!((map__16021_16096 == null)))?((((map__16021_16096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16021_16096.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16021_16096):map__16021_16096);
var gline_16098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16021_16097__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16021_16097__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16021_16097__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16098], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16017_16092,chunk__16018_16093,count__16019_16094,i__16020_16095,seq__16010_16085,chunk__16011_16086,count__16012_16087,i__16013_16088,seq__16003_16078,chunk__16004_16079,count__16005_16080,i__16006_16081,map__16021_16096,map__16021_16097__$1,gline_16098,gcol_16099,name_16100,vec__16014_16089,column_16090,column_info_16091,vec__16007_16082,line_16083,columns_16084,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16099], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16083,new cljs.core.Keyword(null,"col","col",-1959363084),column_16090,new cljs.core.Keyword(null,"name","name",1843675177),name_16100], null));
});})(seq__16017_16092,chunk__16018_16093,count__16019_16094,i__16020_16095,seq__16010_16085,chunk__16011_16086,count__16012_16087,i__16013_16088,seq__16003_16078,chunk__16004_16079,count__16005_16080,i__16006_16081,map__16021_16096,map__16021_16097__$1,gline_16098,gcol_16099,name_16100,vec__16014_16089,column_16090,column_info_16091,vec__16007_16082,line_16083,columns_16084,inverted))
,cljs.core.sorted_map()));

var G__16101 = seq__16017_16092;
var G__16102 = chunk__16018_16093;
var G__16103 = count__16019_16094;
var G__16104 = (i__16020_16095 + (1));
seq__16017_16092 = G__16101;
chunk__16018_16093 = G__16102;
count__16019_16094 = G__16103;
i__16020_16095 = G__16104;
continue;
} else {
var temp__5278__auto___16105 = cljs.core.seq(seq__16017_16092);
if(temp__5278__auto___16105){
var seq__16017_16106__$1 = temp__5278__auto___16105;
if(cljs.core.chunked_seq_QMARK_(seq__16017_16106__$1)){
var c__9683__auto___16107 = cljs.core.chunk_first(seq__16017_16106__$1);
var G__16108 = cljs.core.chunk_rest(seq__16017_16106__$1);
var G__16109 = c__9683__auto___16107;
var G__16110 = cljs.core.count(c__9683__auto___16107);
var G__16111 = (0);
seq__16017_16092 = G__16108;
chunk__16018_16093 = G__16109;
count__16019_16094 = G__16110;
i__16020_16095 = G__16111;
continue;
} else {
var map__16025_16112 = cljs.core.first(seq__16017_16106__$1);
var map__16025_16113__$1 = ((((!((map__16025_16112 == null)))?((((map__16025_16112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16025_16112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16025_16112):map__16025_16112);
var gline_16114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16025_16113__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16025_16113__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16025_16113__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16114], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16017_16092,chunk__16018_16093,count__16019_16094,i__16020_16095,seq__16010_16085,chunk__16011_16086,count__16012_16087,i__16013_16088,seq__16003_16078,chunk__16004_16079,count__16005_16080,i__16006_16081,map__16025_16112,map__16025_16113__$1,gline_16114,gcol_16115,name_16116,seq__16017_16106__$1,temp__5278__auto___16105,vec__16014_16089,column_16090,column_info_16091,vec__16007_16082,line_16083,columns_16084,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16115], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16083,new cljs.core.Keyword(null,"col","col",-1959363084),column_16090,new cljs.core.Keyword(null,"name","name",1843675177),name_16116], null));
});})(seq__16017_16092,chunk__16018_16093,count__16019_16094,i__16020_16095,seq__16010_16085,chunk__16011_16086,count__16012_16087,i__16013_16088,seq__16003_16078,chunk__16004_16079,count__16005_16080,i__16006_16081,map__16025_16112,map__16025_16113__$1,gline_16114,gcol_16115,name_16116,seq__16017_16106__$1,temp__5278__auto___16105,vec__16014_16089,column_16090,column_info_16091,vec__16007_16082,line_16083,columns_16084,inverted))
,cljs.core.sorted_map()));

var G__16117 = cljs.core.next(seq__16017_16106__$1);
var G__16118 = null;
var G__16119 = (0);
var G__16120 = (0);
seq__16017_16092 = G__16117;
chunk__16018_16093 = G__16118;
count__16019_16094 = G__16119;
i__16020_16095 = G__16120;
continue;
}
} else {
}
}
break;
}

var G__16121 = seq__16010_16085;
var G__16122 = chunk__16011_16086;
var G__16123 = count__16012_16087;
var G__16124 = (i__16013_16088 + (1));
seq__16010_16085 = G__16121;
chunk__16011_16086 = G__16122;
count__16012_16087 = G__16123;
i__16013_16088 = G__16124;
continue;
} else {
var temp__5278__auto___16125 = cljs.core.seq(seq__16010_16085);
if(temp__5278__auto___16125){
var seq__16010_16126__$1 = temp__5278__auto___16125;
if(cljs.core.chunked_seq_QMARK_(seq__16010_16126__$1)){
var c__9683__auto___16127 = cljs.core.chunk_first(seq__16010_16126__$1);
var G__16128 = cljs.core.chunk_rest(seq__16010_16126__$1);
var G__16129 = c__9683__auto___16127;
var G__16130 = cljs.core.count(c__9683__auto___16127);
var G__16131 = (0);
seq__16010_16085 = G__16128;
chunk__16011_16086 = G__16129;
count__16012_16087 = G__16130;
i__16013_16088 = G__16131;
continue;
} else {
var vec__16028_16132 = cljs.core.first(seq__16010_16126__$1);
var column_16133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16028_16132,(0),null);
var column_info_16134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16028_16132,(1),null);
var seq__16031_16135 = cljs.core.seq(column_info_16134);
var chunk__16032_16136 = null;
var count__16033_16137 = (0);
var i__16034_16138 = (0);
while(true){
if((i__16034_16138 < count__16033_16137)){
var map__16036_16139 = chunk__16032_16136.cljs$core$IIndexed$_nth$arity$2(null,i__16034_16138);
var map__16036_16140__$1 = ((((!((map__16036_16139 == null)))?((((map__16036_16139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16036_16139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16036_16139):map__16036_16139);
var gline_16141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16036_16140__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16036_16140__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16036_16140__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16141], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16031_16135,chunk__16032_16136,count__16033_16137,i__16034_16138,seq__16010_16085,chunk__16011_16086,count__16012_16087,i__16013_16088,seq__16003_16078,chunk__16004_16079,count__16005_16080,i__16006_16081,map__16036_16139,map__16036_16140__$1,gline_16141,gcol_16142,name_16143,vec__16028_16132,column_16133,column_info_16134,seq__16010_16126__$1,temp__5278__auto___16125,vec__16007_16082,line_16083,columns_16084,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16142], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16083,new cljs.core.Keyword(null,"col","col",-1959363084),column_16133,new cljs.core.Keyword(null,"name","name",1843675177),name_16143], null));
});})(seq__16031_16135,chunk__16032_16136,count__16033_16137,i__16034_16138,seq__16010_16085,chunk__16011_16086,count__16012_16087,i__16013_16088,seq__16003_16078,chunk__16004_16079,count__16005_16080,i__16006_16081,map__16036_16139,map__16036_16140__$1,gline_16141,gcol_16142,name_16143,vec__16028_16132,column_16133,column_info_16134,seq__16010_16126__$1,temp__5278__auto___16125,vec__16007_16082,line_16083,columns_16084,inverted))
,cljs.core.sorted_map()));

var G__16144 = seq__16031_16135;
var G__16145 = chunk__16032_16136;
var G__16146 = count__16033_16137;
var G__16147 = (i__16034_16138 + (1));
seq__16031_16135 = G__16144;
chunk__16032_16136 = G__16145;
count__16033_16137 = G__16146;
i__16034_16138 = G__16147;
continue;
} else {
var temp__5278__auto___16148__$1 = cljs.core.seq(seq__16031_16135);
if(temp__5278__auto___16148__$1){
var seq__16031_16149__$1 = temp__5278__auto___16148__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16031_16149__$1)){
var c__9683__auto___16150 = cljs.core.chunk_first(seq__16031_16149__$1);
var G__16151 = cljs.core.chunk_rest(seq__16031_16149__$1);
var G__16152 = c__9683__auto___16150;
var G__16153 = cljs.core.count(c__9683__auto___16150);
var G__16154 = (0);
seq__16031_16135 = G__16151;
chunk__16032_16136 = G__16152;
count__16033_16137 = G__16153;
i__16034_16138 = G__16154;
continue;
} else {
var map__16038_16155 = cljs.core.first(seq__16031_16149__$1);
var map__16038_16156__$1 = ((((!((map__16038_16155 == null)))?((((map__16038_16155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16038_16155.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16038_16155):map__16038_16155);
var gline_16157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16038_16156__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16038_16156__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16038_16156__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16157], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16031_16135,chunk__16032_16136,count__16033_16137,i__16034_16138,seq__16010_16085,chunk__16011_16086,count__16012_16087,i__16013_16088,seq__16003_16078,chunk__16004_16079,count__16005_16080,i__16006_16081,map__16038_16155,map__16038_16156__$1,gline_16157,gcol_16158,name_16159,seq__16031_16149__$1,temp__5278__auto___16148__$1,vec__16028_16132,column_16133,column_info_16134,seq__16010_16126__$1,temp__5278__auto___16125,vec__16007_16082,line_16083,columns_16084,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16158], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16083,new cljs.core.Keyword(null,"col","col",-1959363084),column_16133,new cljs.core.Keyword(null,"name","name",1843675177),name_16159], null));
});})(seq__16031_16135,chunk__16032_16136,count__16033_16137,i__16034_16138,seq__16010_16085,chunk__16011_16086,count__16012_16087,i__16013_16088,seq__16003_16078,chunk__16004_16079,count__16005_16080,i__16006_16081,map__16038_16155,map__16038_16156__$1,gline_16157,gcol_16158,name_16159,seq__16031_16149__$1,temp__5278__auto___16148__$1,vec__16028_16132,column_16133,column_info_16134,seq__16010_16126__$1,temp__5278__auto___16125,vec__16007_16082,line_16083,columns_16084,inverted))
,cljs.core.sorted_map()));

var G__16160 = cljs.core.next(seq__16031_16149__$1);
var G__16161 = null;
var G__16162 = (0);
var G__16163 = (0);
seq__16031_16135 = G__16160;
chunk__16032_16136 = G__16161;
count__16033_16137 = G__16162;
i__16034_16138 = G__16163;
continue;
}
} else {
}
}
break;
}

var G__16164 = cljs.core.next(seq__16010_16126__$1);
var G__16165 = null;
var G__16166 = (0);
var G__16167 = (0);
seq__16010_16085 = G__16164;
chunk__16011_16086 = G__16165;
count__16012_16087 = G__16166;
i__16013_16088 = G__16167;
continue;
}
} else {
}
}
break;
}

var G__16168 = seq__16003_16078;
var G__16169 = chunk__16004_16079;
var G__16170 = count__16005_16080;
var G__16171 = (i__16006_16081 + (1));
seq__16003_16078 = G__16168;
chunk__16004_16079 = G__16169;
count__16005_16080 = G__16170;
i__16006_16081 = G__16171;
continue;
} else {
var temp__5278__auto___16172 = cljs.core.seq(seq__16003_16078);
if(temp__5278__auto___16172){
var seq__16003_16173__$1 = temp__5278__auto___16172;
if(cljs.core.chunked_seq_QMARK_(seq__16003_16173__$1)){
var c__9683__auto___16174 = cljs.core.chunk_first(seq__16003_16173__$1);
var G__16175 = cljs.core.chunk_rest(seq__16003_16173__$1);
var G__16176 = c__9683__auto___16174;
var G__16177 = cljs.core.count(c__9683__auto___16174);
var G__16178 = (0);
seq__16003_16078 = G__16175;
chunk__16004_16079 = G__16176;
count__16005_16080 = G__16177;
i__16006_16081 = G__16178;
continue;
} else {
var vec__16042_16179 = cljs.core.first(seq__16003_16173__$1);
var line_16180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16042_16179,(0),null);
var columns_16181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16042_16179,(1),null);
var seq__16045_16182 = cljs.core.seq(columns_16181);
var chunk__16046_16183 = null;
var count__16047_16184 = (0);
var i__16048_16185 = (0);
while(true){
if((i__16048_16185 < count__16047_16184)){
var vec__16049_16186 = chunk__16046_16183.cljs$core$IIndexed$_nth$arity$2(null,i__16048_16185);
var column_16187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16049_16186,(0),null);
var column_info_16188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16049_16186,(1),null);
var seq__16052_16189 = cljs.core.seq(column_info_16188);
var chunk__16053_16190 = null;
var count__16054_16191 = (0);
var i__16055_16192 = (0);
while(true){
if((i__16055_16192 < count__16054_16191)){
var map__16058_16193 = chunk__16053_16190.cljs$core$IIndexed$_nth$arity$2(null,i__16055_16192);
var map__16058_16194__$1 = ((((!((map__16058_16193 == null)))?((((map__16058_16193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16058_16193.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16058_16193):map__16058_16193);
var gline_16195 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16058_16194__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16058_16194__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16197 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16058_16194__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16195], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16052_16189,chunk__16053_16190,count__16054_16191,i__16055_16192,seq__16045_16182,chunk__16046_16183,count__16047_16184,i__16048_16185,seq__16003_16078,chunk__16004_16079,count__16005_16080,i__16006_16081,map__16058_16193,map__16058_16194__$1,gline_16195,gcol_16196,name_16197,vec__16049_16186,column_16187,column_info_16188,vec__16042_16179,line_16180,columns_16181,seq__16003_16173__$1,temp__5278__auto___16172,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16196], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16180,new cljs.core.Keyword(null,"col","col",-1959363084),column_16187,new cljs.core.Keyword(null,"name","name",1843675177),name_16197], null));
});})(seq__16052_16189,chunk__16053_16190,count__16054_16191,i__16055_16192,seq__16045_16182,chunk__16046_16183,count__16047_16184,i__16048_16185,seq__16003_16078,chunk__16004_16079,count__16005_16080,i__16006_16081,map__16058_16193,map__16058_16194__$1,gline_16195,gcol_16196,name_16197,vec__16049_16186,column_16187,column_info_16188,vec__16042_16179,line_16180,columns_16181,seq__16003_16173__$1,temp__5278__auto___16172,inverted))
,cljs.core.sorted_map()));

var G__16200 = seq__16052_16189;
var G__16201 = chunk__16053_16190;
var G__16202 = count__16054_16191;
var G__16203 = (i__16055_16192 + (1));
seq__16052_16189 = G__16200;
chunk__16053_16190 = G__16201;
count__16054_16191 = G__16202;
i__16055_16192 = G__16203;
continue;
} else {
var temp__5278__auto___16204__$1 = cljs.core.seq(seq__16052_16189);
if(temp__5278__auto___16204__$1){
var seq__16052_16205__$1 = temp__5278__auto___16204__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16052_16205__$1)){
var c__9683__auto___16206 = cljs.core.chunk_first(seq__16052_16205__$1);
var G__16207 = cljs.core.chunk_rest(seq__16052_16205__$1);
var G__16208 = c__9683__auto___16206;
var G__16209 = cljs.core.count(c__9683__auto___16206);
var G__16210 = (0);
seq__16052_16189 = G__16207;
chunk__16053_16190 = G__16208;
count__16054_16191 = G__16209;
i__16055_16192 = G__16210;
continue;
} else {
var map__16062_16211 = cljs.core.first(seq__16052_16205__$1);
var map__16062_16212__$1 = ((((!((map__16062_16211 == null)))?((((map__16062_16211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16062_16211.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16062_16211):map__16062_16211);
var gline_16213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16062_16212__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16062_16212__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16062_16212__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16213], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16052_16189,chunk__16053_16190,count__16054_16191,i__16055_16192,seq__16045_16182,chunk__16046_16183,count__16047_16184,i__16048_16185,seq__16003_16078,chunk__16004_16079,count__16005_16080,i__16006_16081,map__16062_16211,map__16062_16212__$1,gline_16213,gcol_16214,name_16215,seq__16052_16205__$1,temp__5278__auto___16204__$1,vec__16049_16186,column_16187,column_info_16188,vec__16042_16179,line_16180,columns_16181,seq__16003_16173__$1,temp__5278__auto___16172,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16214], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16180,new cljs.core.Keyword(null,"col","col",-1959363084),column_16187,new cljs.core.Keyword(null,"name","name",1843675177),name_16215], null));
});})(seq__16052_16189,chunk__16053_16190,count__16054_16191,i__16055_16192,seq__16045_16182,chunk__16046_16183,count__16047_16184,i__16048_16185,seq__16003_16078,chunk__16004_16079,count__16005_16080,i__16006_16081,map__16062_16211,map__16062_16212__$1,gline_16213,gcol_16214,name_16215,seq__16052_16205__$1,temp__5278__auto___16204__$1,vec__16049_16186,column_16187,column_info_16188,vec__16042_16179,line_16180,columns_16181,seq__16003_16173__$1,temp__5278__auto___16172,inverted))
,cljs.core.sorted_map()));

var G__16218 = cljs.core.next(seq__16052_16205__$1);
var G__16219 = null;
var G__16220 = (0);
var G__16221 = (0);
seq__16052_16189 = G__16218;
chunk__16053_16190 = G__16219;
count__16054_16191 = G__16220;
i__16055_16192 = G__16221;
continue;
}
} else {
}
}
break;
}

var G__16222 = seq__16045_16182;
var G__16223 = chunk__16046_16183;
var G__16224 = count__16047_16184;
var G__16225 = (i__16048_16185 + (1));
seq__16045_16182 = G__16222;
chunk__16046_16183 = G__16223;
count__16047_16184 = G__16224;
i__16048_16185 = G__16225;
continue;
} else {
var temp__5278__auto___16227__$1 = cljs.core.seq(seq__16045_16182);
if(temp__5278__auto___16227__$1){
var seq__16045_16228__$1 = temp__5278__auto___16227__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16045_16228__$1)){
var c__9683__auto___16229 = cljs.core.chunk_first(seq__16045_16228__$1);
var G__16230 = cljs.core.chunk_rest(seq__16045_16228__$1);
var G__16231 = c__9683__auto___16229;
var G__16232 = cljs.core.count(c__9683__auto___16229);
var G__16233 = (0);
seq__16045_16182 = G__16230;
chunk__16046_16183 = G__16231;
count__16047_16184 = G__16232;
i__16048_16185 = G__16233;
continue;
} else {
var vec__16064_16235 = cljs.core.first(seq__16045_16228__$1);
var column_16236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16064_16235,(0),null);
var column_info_16237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16064_16235,(1),null);
var seq__16067_16238 = cljs.core.seq(column_info_16237);
var chunk__16068_16239 = null;
var count__16069_16240 = (0);
var i__16070_16241 = (0);
while(true){
if((i__16070_16241 < count__16069_16240)){
var map__16071_16242 = chunk__16068_16239.cljs$core$IIndexed$_nth$arity$2(null,i__16070_16241);
var map__16071_16243__$1 = ((((!((map__16071_16242 == null)))?((((map__16071_16242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16071_16242.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16071_16242):map__16071_16242);
var gline_16244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16071_16243__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16071_16243__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16071_16243__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16244], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16067_16238,chunk__16068_16239,count__16069_16240,i__16070_16241,seq__16045_16182,chunk__16046_16183,count__16047_16184,i__16048_16185,seq__16003_16078,chunk__16004_16079,count__16005_16080,i__16006_16081,map__16071_16242,map__16071_16243__$1,gline_16244,gcol_16245,name_16246,vec__16064_16235,column_16236,column_info_16237,seq__16045_16228__$1,temp__5278__auto___16227__$1,vec__16042_16179,line_16180,columns_16181,seq__16003_16173__$1,temp__5278__auto___16172,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16245], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16180,new cljs.core.Keyword(null,"col","col",-1959363084),column_16236,new cljs.core.Keyword(null,"name","name",1843675177),name_16246], null));
});})(seq__16067_16238,chunk__16068_16239,count__16069_16240,i__16070_16241,seq__16045_16182,chunk__16046_16183,count__16047_16184,i__16048_16185,seq__16003_16078,chunk__16004_16079,count__16005_16080,i__16006_16081,map__16071_16242,map__16071_16243__$1,gline_16244,gcol_16245,name_16246,vec__16064_16235,column_16236,column_info_16237,seq__16045_16228__$1,temp__5278__auto___16227__$1,vec__16042_16179,line_16180,columns_16181,seq__16003_16173__$1,temp__5278__auto___16172,inverted))
,cljs.core.sorted_map()));

var G__16249 = seq__16067_16238;
var G__16250 = chunk__16068_16239;
var G__16251 = count__16069_16240;
var G__16252 = (i__16070_16241 + (1));
seq__16067_16238 = G__16249;
chunk__16068_16239 = G__16250;
count__16069_16240 = G__16251;
i__16070_16241 = G__16252;
continue;
} else {
var temp__5278__auto___16257__$2 = cljs.core.seq(seq__16067_16238);
if(temp__5278__auto___16257__$2){
var seq__16067_16258__$1 = temp__5278__auto___16257__$2;
if(cljs.core.chunked_seq_QMARK_(seq__16067_16258__$1)){
var c__9683__auto___16259 = cljs.core.chunk_first(seq__16067_16258__$1);
var G__16260 = cljs.core.chunk_rest(seq__16067_16258__$1);
var G__16261 = c__9683__auto___16259;
var G__16262 = cljs.core.count(c__9683__auto___16259);
var G__16263 = (0);
seq__16067_16238 = G__16260;
chunk__16068_16239 = G__16261;
count__16069_16240 = G__16262;
i__16070_16241 = G__16263;
continue;
} else {
var map__16075_16264 = cljs.core.first(seq__16067_16258__$1);
var map__16075_16265__$1 = ((((!((map__16075_16264 == null)))?((((map__16075_16264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16075_16264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16075_16264):map__16075_16264);
var gline_16266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16075_16265__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16075_16265__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16075_16265__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16266], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16067_16238,chunk__16068_16239,count__16069_16240,i__16070_16241,seq__16045_16182,chunk__16046_16183,count__16047_16184,i__16048_16185,seq__16003_16078,chunk__16004_16079,count__16005_16080,i__16006_16081,map__16075_16264,map__16075_16265__$1,gline_16266,gcol_16267,name_16268,seq__16067_16258__$1,temp__5278__auto___16257__$2,vec__16064_16235,column_16236,column_info_16237,seq__16045_16228__$1,temp__5278__auto___16227__$1,vec__16042_16179,line_16180,columns_16181,seq__16003_16173__$1,temp__5278__auto___16172,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16267], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16180,new cljs.core.Keyword(null,"col","col",-1959363084),column_16236,new cljs.core.Keyword(null,"name","name",1843675177),name_16268], null));
});})(seq__16067_16238,chunk__16068_16239,count__16069_16240,i__16070_16241,seq__16045_16182,chunk__16046_16183,count__16047_16184,i__16048_16185,seq__16003_16078,chunk__16004_16079,count__16005_16080,i__16006_16081,map__16075_16264,map__16075_16265__$1,gline_16266,gcol_16267,name_16268,seq__16067_16258__$1,temp__5278__auto___16257__$2,vec__16064_16235,column_16236,column_info_16237,seq__16045_16228__$1,temp__5278__auto___16227__$1,vec__16042_16179,line_16180,columns_16181,seq__16003_16173__$1,temp__5278__auto___16172,inverted))
,cljs.core.sorted_map()));

var G__16271 = cljs.core.next(seq__16067_16258__$1);
var G__16272 = null;
var G__16273 = (0);
var G__16274 = (0);
seq__16067_16238 = G__16271;
chunk__16068_16239 = G__16272;
count__16069_16240 = G__16273;
i__16070_16241 = G__16274;
continue;
}
} else {
}
}
break;
}

var G__16275 = cljs.core.next(seq__16045_16228__$1);
var G__16276 = null;
var G__16277 = (0);
var G__16278 = (0);
seq__16045_16182 = G__16275;
chunk__16046_16183 = G__16276;
count__16047_16184 = G__16277;
i__16048_16185 = G__16278;
continue;
}
} else {
}
}
break;
}

var G__16279 = cljs.core.next(seq__16003_16173__$1);
var G__16280 = null;
var G__16281 = (0);
var G__16282 = (0);
seq__16003_16078 = G__16279;
chunk__16004_16079 = G__16280;
count__16005_16080 = G__16281;
i__16006_16081 = G__16282;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
