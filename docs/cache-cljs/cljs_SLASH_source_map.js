// Compiled by ClojureScript 1.9.946 {:static-fns true, :fn-invoke-direct true, :optimize-constants false}
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__16164){
var vec__16165 = p__16164;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16165,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16165,(1),null);
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
var vec__16168 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16168,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16168,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16168,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16168,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16168,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5457__auto__)){
var name__$1 = temp__5457__auto__;
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
var vec__16171 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16171,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16171,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16171,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16171,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16171,(4),null);
var vec__16174 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16174,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16174,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16174,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16174,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16174,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__8808__auto__ = source;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__8808__auto__ = line;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__8808__auto__ = col;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__8808__auto__ = name;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
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
var map__16177 = segmap;
var map__16177__$1 = ((((!((map__16177 == null)))?((((map__16177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16177.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16177):map__16177);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16177__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16177__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16177__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16177__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16177__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__16177,map__16177__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__16177,map__16177__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__16177,map__16177__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__16177,map__16177__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__16177,map__16177__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__16177,map__16177__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__16180 = arguments.length;
switch (G__16180) {
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
var vec__16181 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__16185 = cljs.core.next(segs__$1);
var G__16186 = nrelseg;
var G__16187 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__16185;
relseg__$1 = G__16186;
result__$1 = G__16187;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16181,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16181,(1),null);
var G__16188 = (gline + (1));
var G__16189 = cljs.core.next(lines__$1);
var G__16190 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__16191 = result__$1;
gline = G__16188;
lines__$1 = G__16189;
relseg = G__16190;
result = G__16191;
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
var map__16193 = segmap;
var map__16193__$1 = ((((!((map__16193 == null)))?((((map__16193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16193.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16193):map__16193);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16193__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16193__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16193__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16193__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16193__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__16193,map__16193__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__16193,map__16193__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__16192_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__16192_SHARP_,d__$1);
});})(map__16193,map__16193__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__16193,map__16193__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__16196 = arguments.length;
switch (G__16196) {
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
var vec__16197 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__16201 = cljs.core.next(segs__$1);
var G__16202 = nrelseg;
var G__16203 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__16201;
relseg__$1 = G__16202;
result__$1 = G__16203;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16197,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16197,(1),null);
var G__16204 = (gline + (1));
var G__16205 = cljs.core.next(lines__$1);
var G__16206 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__16207 = result__$1;
gline = G__16204;
lines__$1 = G__16205;
relseg = G__16206;
result = G__16207;
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
return (function (p__16208){
var vec__16209 = p__16208;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16209,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16209,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16209,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16209,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16209,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__16212){
var vec__16213 = p__16212;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16213,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16213,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16213,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16213,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16213,(4),null);
var seg = vec__16213;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__16213,gcol,sidx,line,col,name,seg,relseg){
return (function (p__16216){
var vec__16217 = p__16216;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16217,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16217,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16217,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16217,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16217,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__8808__auto__ = name;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__16213,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__8808__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5455__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
var idx = (function (){var temp__5455__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5455__auto____$1)){
var idx = temp__5455__auto____$1;
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
var seq__16223 = cljs.core.seq(infos);
var chunk__16224 = null;
var count__16225 = (0);
var i__16226 = (0);
while(true){
if((i__16226 < count__16225)){
var info = chunk__16224.cljs$core$IIndexed$_nth$arity$2(null,i__16226);
var segv_16308 = info__GT_segv(info,source_idx,line,col);
var gline_16309 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_16310 = cljs.core.count(cljs.core.deref(lines));
if((gline_16309 > (lc_16310 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__16223,chunk__16224,count__16225,i__16226,segv_16308,gline_16309,lc_16310,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_16309 - (lc_16310 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_16308], null));
});})(seq__16223,chunk__16224,count__16225,i__16226,segv_16308,gline_16309,lc_16310,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__16223,chunk__16224,count__16225,i__16226,segv_16308,gline_16309,lc_16310,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16309], null),cljs.core.conj,segv_16308);
});})(seq__16223,chunk__16224,count__16225,i__16226,segv_16308,gline_16309,lc_16310,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__16311 = seq__16223;
var G__16312 = chunk__16224;
var G__16313 = count__16225;
var G__16314 = (i__16226 + (1));
seq__16223 = G__16311;
chunk__16224 = G__16312;
count__16225 = G__16313;
i__16226 = G__16314;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__16223);
if(temp__5457__auto__){
var seq__16223__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16223__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__16223__$1);
var G__16315 = cljs.core.chunk_rest(seq__16223__$1);
var G__16316 = c__9739__auto__;
var G__16317 = cljs.core.count(c__9739__auto__);
var G__16318 = (0);
seq__16223 = G__16315;
chunk__16224 = G__16316;
count__16225 = G__16317;
i__16226 = G__16318;
continue;
} else {
var info = cljs.core.first(seq__16223__$1);
var segv_16319 = info__GT_segv(info,source_idx,line,col);
var gline_16320 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_16321 = cljs.core.count(cljs.core.deref(lines));
if((gline_16320 > (lc_16321 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__16223,chunk__16224,count__16225,i__16226,segv_16319,gline_16320,lc_16321,info,seq__16223__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_16320 - (lc_16321 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_16319], null));
});})(seq__16223,chunk__16224,count__16225,i__16226,segv_16319,gline_16320,lc_16321,info,seq__16223__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__16223,chunk__16224,count__16225,i__16226,segv_16319,gline_16320,lc_16321,info,seq__16223__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16320], null),cljs.core.conj,segv_16319);
});})(seq__16223,chunk__16224,count__16225,i__16226,segv_16319,gline_16320,lc_16321,info,seq__16223__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__16322 = cljs.core.next(seq__16223__$1);
var G__16323 = null;
var G__16324 = (0);
var G__16325 = (0);
seq__16223 = G__16322;
chunk__16224 = G__16323;
count__16225 = G__16324;
i__16226 = G__16325;
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
var seq__16227_16326 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__16228_16327 = null;
var count__16229_16328 = (0);
var i__16230_16329 = (0);
while(true){
if((i__16230_16329 < count__16229_16328)){
var vec__16231_16330 = chunk__16228_16327.cljs$core$IIndexed$_nth$arity$2(null,i__16230_16329);
var source_idx_16331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16231_16330,(0),null);
var vec__16234_16332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16231_16330,(1),null);
var __16333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16234_16332,(0),null);
var lines_16334__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16234_16332,(1),null);
var seq__16237_16335 = cljs.core.seq(lines_16334__$1);
var chunk__16238_16336 = null;
var count__16239_16337 = (0);
var i__16240_16338 = (0);
while(true){
if((i__16240_16338 < count__16239_16337)){
var vec__16241_16339 = chunk__16238_16336.cljs$core$IIndexed$_nth$arity$2(null,i__16240_16338);
var line_16340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16241_16339,(0),null);
var cols_16341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16241_16339,(1),null);
var seq__16244_16342 = cljs.core.seq(cols_16341);
var chunk__16245_16343 = null;
var count__16246_16344 = (0);
var i__16247_16345 = (0);
while(true){
if((i__16247_16345 < count__16246_16344)){
var vec__16248_16346 = chunk__16245_16343.cljs$core$IIndexed$_nth$arity$2(null,i__16247_16345);
var col_16347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16248_16346,(0),null);
var infos_16348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16248_16346,(1),null);
encode_cols(infos_16348,source_idx_16331,line_16340,col_16347);

var G__16349 = seq__16244_16342;
var G__16350 = chunk__16245_16343;
var G__16351 = count__16246_16344;
var G__16352 = (i__16247_16345 + (1));
seq__16244_16342 = G__16349;
chunk__16245_16343 = G__16350;
count__16246_16344 = G__16351;
i__16247_16345 = G__16352;
continue;
} else {
var temp__5457__auto___16353 = cljs.core.seq(seq__16244_16342);
if(temp__5457__auto___16353){
var seq__16244_16354__$1 = temp__5457__auto___16353;
if(cljs.core.chunked_seq_QMARK_(seq__16244_16354__$1)){
var c__9739__auto___16355 = cljs.core.chunk_first(seq__16244_16354__$1);
var G__16356 = cljs.core.chunk_rest(seq__16244_16354__$1);
var G__16357 = c__9739__auto___16355;
var G__16358 = cljs.core.count(c__9739__auto___16355);
var G__16359 = (0);
seq__16244_16342 = G__16356;
chunk__16245_16343 = G__16357;
count__16246_16344 = G__16358;
i__16247_16345 = G__16359;
continue;
} else {
var vec__16251_16360 = cljs.core.first(seq__16244_16354__$1);
var col_16361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16251_16360,(0),null);
var infos_16362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16251_16360,(1),null);
encode_cols(infos_16362,source_idx_16331,line_16340,col_16361);

var G__16363 = cljs.core.next(seq__16244_16354__$1);
var G__16364 = null;
var G__16365 = (0);
var G__16366 = (0);
seq__16244_16342 = G__16363;
chunk__16245_16343 = G__16364;
count__16246_16344 = G__16365;
i__16247_16345 = G__16366;
continue;
}
} else {
}
}
break;
}

var G__16367 = seq__16237_16335;
var G__16368 = chunk__16238_16336;
var G__16369 = count__16239_16337;
var G__16370 = (i__16240_16338 + (1));
seq__16237_16335 = G__16367;
chunk__16238_16336 = G__16368;
count__16239_16337 = G__16369;
i__16240_16338 = G__16370;
continue;
} else {
var temp__5457__auto___16371 = cljs.core.seq(seq__16237_16335);
if(temp__5457__auto___16371){
var seq__16237_16372__$1 = temp__5457__auto___16371;
if(cljs.core.chunked_seq_QMARK_(seq__16237_16372__$1)){
var c__9739__auto___16373 = cljs.core.chunk_first(seq__16237_16372__$1);
var G__16374 = cljs.core.chunk_rest(seq__16237_16372__$1);
var G__16375 = c__9739__auto___16373;
var G__16376 = cljs.core.count(c__9739__auto___16373);
var G__16377 = (0);
seq__16237_16335 = G__16374;
chunk__16238_16336 = G__16375;
count__16239_16337 = G__16376;
i__16240_16338 = G__16377;
continue;
} else {
var vec__16254_16378 = cljs.core.first(seq__16237_16372__$1);
var line_16379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16254_16378,(0),null);
var cols_16380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16254_16378,(1),null);
var seq__16257_16381 = cljs.core.seq(cols_16380);
var chunk__16258_16382 = null;
var count__16259_16383 = (0);
var i__16260_16384 = (0);
while(true){
if((i__16260_16384 < count__16259_16383)){
var vec__16261_16385 = chunk__16258_16382.cljs$core$IIndexed$_nth$arity$2(null,i__16260_16384);
var col_16386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16261_16385,(0),null);
var infos_16387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16261_16385,(1),null);
encode_cols(infos_16387,source_idx_16331,line_16379,col_16386);

var G__16388 = seq__16257_16381;
var G__16389 = chunk__16258_16382;
var G__16390 = count__16259_16383;
var G__16391 = (i__16260_16384 + (1));
seq__16257_16381 = G__16388;
chunk__16258_16382 = G__16389;
count__16259_16383 = G__16390;
i__16260_16384 = G__16391;
continue;
} else {
var temp__5457__auto___16392__$1 = cljs.core.seq(seq__16257_16381);
if(temp__5457__auto___16392__$1){
var seq__16257_16393__$1 = temp__5457__auto___16392__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16257_16393__$1)){
var c__9739__auto___16394 = cljs.core.chunk_first(seq__16257_16393__$1);
var G__16395 = cljs.core.chunk_rest(seq__16257_16393__$1);
var G__16396 = c__9739__auto___16394;
var G__16397 = cljs.core.count(c__9739__auto___16394);
var G__16398 = (0);
seq__16257_16381 = G__16395;
chunk__16258_16382 = G__16396;
count__16259_16383 = G__16397;
i__16260_16384 = G__16398;
continue;
} else {
var vec__16264_16399 = cljs.core.first(seq__16257_16393__$1);
var col_16400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16264_16399,(0),null);
var infos_16401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16264_16399,(1),null);
encode_cols(infos_16401,source_idx_16331,line_16379,col_16400);

var G__16402 = cljs.core.next(seq__16257_16393__$1);
var G__16403 = null;
var G__16404 = (0);
var G__16405 = (0);
seq__16257_16381 = G__16402;
chunk__16258_16382 = G__16403;
count__16259_16383 = G__16404;
i__16260_16384 = G__16405;
continue;
}
} else {
}
}
break;
}

var G__16406 = cljs.core.next(seq__16237_16372__$1);
var G__16407 = null;
var G__16408 = (0);
var G__16409 = (0);
seq__16237_16335 = G__16406;
chunk__16238_16336 = G__16407;
count__16239_16337 = G__16408;
i__16240_16338 = G__16409;
continue;
}
} else {
}
}
break;
}

var G__16410 = seq__16227_16326;
var G__16411 = chunk__16228_16327;
var G__16412 = count__16229_16328;
var G__16413 = (i__16230_16329 + (1));
seq__16227_16326 = G__16410;
chunk__16228_16327 = G__16411;
count__16229_16328 = G__16412;
i__16230_16329 = G__16413;
continue;
} else {
var temp__5457__auto___16414 = cljs.core.seq(seq__16227_16326);
if(temp__5457__auto___16414){
var seq__16227_16415__$1 = temp__5457__auto___16414;
if(cljs.core.chunked_seq_QMARK_(seq__16227_16415__$1)){
var c__9739__auto___16416 = cljs.core.chunk_first(seq__16227_16415__$1);
var G__16417 = cljs.core.chunk_rest(seq__16227_16415__$1);
var G__16418 = c__9739__auto___16416;
var G__16419 = cljs.core.count(c__9739__auto___16416);
var G__16420 = (0);
seq__16227_16326 = G__16417;
chunk__16228_16327 = G__16418;
count__16229_16328 = G__16419;
i__16230_16329 = G__16420;
continue;
} else {
var vec__16267_16421 = cljs.core.first(seq__16227_16415__$1);
var source_idx_16422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16267_16421,(0),null);
var vec__16270_16423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16267_16421,(1),null);
var __16424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16270_16423,(0),null);
var lines_16425__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16270_16423,(1),null);
var seq__16273_16426 = cljs.core.seq(lines_16425__$1);
var chunk__16274_16427 = null;
var count__16275_16428 = (0);
var i__16276_16429 = (0);
while(true){
if((i__16276_16429 < count__16275_16428)){
var vec__16277_16430 = chunk__16274_16427.cljs$core$IIndexed$_nth$arity$2(null,i__16276_16429);
var line_16431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16277_16430,(0),null);
var cols_16432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16277_16430,(1),null);
var seq__16280_16433 = cljs.core.seq(cols_16432);
var chunk__16281_16434 = null;
var count__16282_16435 = (0);
var i__16283_16436 = (0);
while(true){
if((i__16283_16436 < count__16282_16435)){
var vec__16284_16437 = chunk__16281_16434.cljs$core$IIndexed$_nth$arity$2(null,i__16283_16436);
var col_16438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16284_16437,(0),null);
var infos_16439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16284_16437,(1),null);
encode_cols(infos_16439,source_idx_16422,line_16431,col_16438);

var G__16440 = seq__16280_16433;
var G__16441 = chunk__16281_16434;
var G__16442 = count__16282_16435;
var G__16443 = (i__16283_16436 + (1));
seq__16280_16433 = G__16440;
chunk__16281_16434 = G__16441;
count__16282_16435 = G__16442;
i__16283_16436 = G__16443;
continue;
} else {
var temp__5457__auto___16444__$1 = cljs.core.seq(seq__16280_16433);
if(temp__5457__auto___16444__$1){
var seq__16280_16445__$1 = temp__5457__auto___16444__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16280_16445__$1)){
var c__9739__auto___16446 = cljs.core.chunk_first(seq__16280_16445__$1);
var G__16447 = cljs.core.chunk_rest(seq__16280_16445__$1);
var G__16448 = c__9739__auto___16446;
var G__16449 = cljs.core.count(c__9739__auto___16446);
var G__16450 = (0);
seq__16280_16433 = G__16447;
chunk__16281_16434 = G__16448;
count__16282_16435 = G__16449;
i__16283_16436 = G__16450;
continue;
} else {
var vec__16287_16451 = cljs.core.first(seq__16280_16445__$1);
var col_16452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16287_16451,(0),null);
var infos_16453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16287_16451,(1),null);
encode_cols(infos_16453,source_idx_16422,line_16431,col_16452);

var G__16454 = cljs.core.next(seq__16280_16445__$1);
var G__16455 = null;
var G__16456 = (0);
var G__16457 = (0);
seq__16280_16433 = G__16454;
chunk__16281_16434 = G__16455;
count__16282_16435 = G__16456;
i__16283_16436 = G__16457;
continue;
}
} else {
}
}
break;
}

var G__16458 = seq__16273_16426;
var G__16459 = chunk__16274_16427;
var G__16460 = count__16275_16428;
var G__16461 = (i__16276_16429 + (1));
seq__16273_16426 = G__16458;
chunk__16274_16427 = G__16459;
count__16275_16428 = G__16460;
i__16276_16429 = G__16461;
continue;
} else {
var temp__5457__auto___16462__$1 = cljs.core.seq(seq__16273_16426);
if(temp__5457__auto___16462__$1){
var seq__16273_16463__$1 = temp__5457__auto___16462__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16273_16463__$1)){
var c__9739__auto___16464 = cljs.core.chunk_first(seq__16273_16463__$1);
var G__16465 = cljs.core.chunk_rest(seq__16273_16463__$1);
var G__16466 = c__9739__auto___16464;
var G__16467 = cljs.core.count(c__9739__auto___16464);
var G__16468 = (0);
seq__16273_16426 = G__16465;
chunk__16274_16427 = G__16466;
count__16275_16428 = G__16467;
i__16276_16429 = G__16468;
continue;
} else {
var vec__16290_16469 = cljs.core.first(seq__16273_16463__$1);
var line_16470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16290_16469,(0),null);
var cols_16471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16290_16469,(1),null);
var seq__16293_16472 = cljs.core.seq(cols_16471);
var chunk__16294_16473 = null;
var count__16295_16474 = (0);
var i__16296_16475 = (0);
while(true){
if((i__16296_16475 < count__16295_16474)){
var vec__16297_16476 = chunk__16294_16473.cljs$core$IIndexed$_nth$arity$2(null,i__16296_16475);
var col_16477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16297_16476,(0),null);
var infos_16478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16297_16476,(1),null);
encode_cols(infos_16478,source_idx_16422,line_16470,col_16477);

var G__16479 = seq__16293_16472;
var G__16480 = chunk__16294_16473;
var G__16481 = count__16295_16474;
var G__16482 = (i__16296_16475 + (1));
seq__16293_16472 = G__16479;
chunk__16294_16473 = G__16480;
count__16295_16474 = G__16481;
i__16296_16475 = G__16482;
continue;
} else {
var temp__5457__auto___16483__$2 = cljs.core.seq(seq__16293_16472);
if(temp__5457__auto___16483__$2){
var seq__16293_16484__$1 = temp__5457__auto___16483__$2;
if(cljs.core.chunked_seq_QMARK_(seq__16293_16484__$1)){
var c__9739__auto___16485 = cljs.core.chunk_first(seq__16293_16484__$1);
var G__16486 = cljs.core.chunk_rest(seq__16293_16484__$1);
var G__16487 = c__9739__auto___16485;
var G__16488 = cljs.core.count(c__9739__auto___16485);
var G__16489 = (0);
seq__16293_16472 = G__16486;
chunk__16294_16473 = G__16487;
count__16295_16474 = G__16488;
i__16296_16475 = G__16489;
continue;
} else {
var vec__16300_16490 = cljs.core.first(seq__16293_16484__$1);
var col_16491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16300_16490,(0),null);
var infos_16492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16300_16490,(1),null);
encode_cols(infos_16492,source_idx_16422,line_16470,col_16491);

var G__16493 = cljs.core.next(seq__16293_16484__$1);
var G__16494 = null;
var G__16495 = (0);
var G__16496 = (0);
seq__16293_16472 = G__16493;
chunk__16294_16473 = G__16494;
count__16295_16474 = G__16495;
i__16296_16475 = G__16496;
continue;
}
} else {
}
}
break;
}

var G__16497 = cljs.core.next(seq__16273_16463__$1);
var G__16498 = null;
var G__16499 = (0);
var G__16500 = (0);
seq__16273_16426 = G__16497;
chunk__16274_16427 = G__16498;
count__16275_16428 = G__16499;
i__16276_16429 = G__16500;
continue;
}
} else {
}
}
break;
}

var G__16501 = cljs.core.next(seq__16227_16415__$1);
var G__16502 = null;
var G__16503 = (0);
var G__16504 = (0);
seq__16227_16326 = G__16501;
chunk__16228_16327 = G__16502;
count__16229_16328 = G__16503;
i__16230_16329 = G__16504;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__16303 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__16220_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16220_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__16221_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__16221_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__16222_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__16222_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__16304 = G__16303;
var G__16305_16505 = G__16304;
var G__16306_16506 = "sourcesContent";
var G__16307_16507 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__16305_16505,G__16306_16506,G__16307_16507);

return G__16304;
} else {
return G__16303;
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
var vec__16508 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16508,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16508,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__16511 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16511,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16511,(1),null);
var G__16517 = cljs.core.next(col_map_seq);
var G__16518 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__16511,col,infos,vec__16508,line,col_map){
return (function (v,p__16514){
var map__16515 = p__16514;
var map__16515__$1 = ((((!((map__16515 == null)))?((((map__16515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16515):map__16515);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16515__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16515__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__16511,col,infos,vec__16508,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__16517;
new_cols = G__16518;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__16519 = cljs.core.next(line_map_seq);
var G__16520 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__16519;
new_lines = G__16520;
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
var seq__16521_16583 = cljs.core.seq(reverse_map);
var chunk__16522_16584 = null;
var count__16523_16585 = (0);
var i__16524_16586 = (0);
while(true){
if((i__16524_16586 < count__16523_16585)){
var vec__16525_16587 = chunk__16522_16584.cljs$core$IIndexed$_nth$arity$2(null,i__16524_16586);
var line_16588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16525_16587,(0),null);
var columns_16589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16525_16587,(1),null);
var seq__16528_16590 = cljs.core.seq(columns_16589);
var chunk__16529_16591 = null;
var count__16530_16592 = (0);
var i__16531_16593 = (0);
while(true){
if((i__16531_16593 < count__16530_16592)){
var vec__16532_16594 = chunk__16529_16591.cljs$core$IIndexed$_nth$arity$2(null,i__16531_16593);
var column_16595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16532_16594,(0),null);
var column_info_16596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16532_16594,(1),null);
var seq__16535_16597 = cljs.core.seq(column_info_16596);
var chunk__16536_16598 = null;
var count__16537_16599 = (0);
var i__16538_16600 = (0);
while(true){
if((i__16538_16600 < count__16537_16599)){
var map__16539_16601 = chunk__16536_16598.cljs$core$IIndexed$_nth$arity$2(null,i__16538_16600);
var map__16539_16602__$1 = ((((!((map__16539_16601 == null)))?((((map__16539_16601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16539_16601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16539_16601):map__16539_16601);
var gline_16603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16539_16602__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16539_16602__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16539_16602__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16603], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16535_16597,chunk__16536_16598,count__16537_16599,i__16538_16600,seq__16528_16590,chunk__16529_16591,count__16530_16592,i__16531_16593,seq__16521_16583,chunk__16522_16584,count__16523_16585,i__16524_16586,map__16539_16601,map__16539_16602__$1,gline_16603,gcol_16604,name_16605,vec__16532_16594,column_16595,column_info_16596,vec__16525_16587,line_16588,columns_16589,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16604], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16588,new cljs.core.Keyword(null,"col","col",-1959363084),column_16595,new cljs.core.Keyword(null,"name","name",1843675177),name_16605], null));
});})(seq__16535_16597,chunk__16536_16598,count__16537_16599,i__16538_16600,seq__16528_16590,chunk__16529_16591,count__16530_16592,i__16531_16593,seq__16521_16583,chunk__16522_16584,count__16523_16585,i__16524_16586,map__16539_16601,map__16539_16602__$1,gline_16603,gcol_16604,name_16605,vec__16532_16594,column_16595,column_info_16596,vec__16525_16587,line_16588,columns_16589,inverted))
,cljs.core.sorted_map()));

var G__16606 = seq__16535_16597;
var G__16607 = chunk__16536_16598;
var G__16608 = count__16537_16599;
var G__16609 = (i__16538_16600 + (1));
seq__16535_16597 = G__16606;
chunk__16536_16598 = G__16607;
count__16537_16599 = G__16608;
i__16538_16600 = G__16609;
continue;
} else {
var temp__5457__auto___16610 = cljs.core.seq(seq__16535_16597);
if(temp__5457__auto___16610){
var seq__16535_16611__$1 = temp__5457__auto___16610;
if(cljs.core.chunked_seq_QMARK_(seq__16535_16611__$1)){
var c__9739__auto___16612 = cljs.core.chunk_first(seq__16535_16611__$1);
var G__16613 = cljs.core.chunk_rest(seq__16535_16611__$1);
var G__16614 = c__9739__auto___16612;
var G__16615 = cljs.core.count(c__9739__auto___16612);
var G__16616 = (0);
seq__16535_16597 = G__16613;
chunk__16536_16598 = G__16614;
count__16537_16599 = G__16615;
i__16538_16600 = G__16616;
continue;
} else {
var map__16541_16617 = cljs.core.first(seq__16535_16611__$1);
var map__16541_16618__$1 = ((((!((map__16541_16617 == null)))?((((map__16541_16617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16541_16617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16541_16617):map__16541_16617);
var gline_16619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16541_16618__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16541_16618__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16541_16618__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16619], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16535_16597,chunk__16536_16598,count__16537_16599,i__16538_16600,seq__16528_16590,chunk__16529_16591,count__16530_16592,i__16531_16593,seq__16521_16583,chunk__16522_16584,count__16523_16585,i__16524_16586,map__16541_16617,map__16541_16618__$1,gline_16619,gcol_16620,name_16621,seq__16535_16611__$1,temp__5457__auto___16610,vec__16532_16594,column_16595,column_info_16596,vec__16525_16587,line_16588,columns_16589,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16620], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16588,new cljs.core.Keyword(null,"col","col",-1959363084),column_16595,new cljs.core.Keyword(null,"name","name",1843675177),name_16621], null));
});})(seq__16535_16597,chunk__16536_16598,count__16537_16599,i__16538_16600,seq__16528_16590,chunk__16529_16591,count__16530_16592,i__16531_16593,seq__16521_16583,chunk__16522_16584,count__16523_16585,i__16524_16586,map__16541_16617,map__16541_16618__$1,gline_16619,gcol_16620,name_16621,seq__16535_16611__$1,temp__5457__auto___16610,vec__16532_16594,column_16595,column_info_16596,vec__16525_16587,line_16588,columns_16589,inverted))
,cljs.core.sorted_map()));

var G__16622 = cljs.core.next(seq__16535_16611__$1);
var G__16623 = null;
var G__16624 = (0);
var G__16625 = (0);
seq__16535_16597 = G__16622;
chunk__16536_16598 = G__16623;
count__16537_16599 = G__16624;
i__16538_16600 = G__16625;
continue;
}
} else {
}
}
break;
}

var G__16626 = seq__16528_16590;
var G__16627 = chunk__16529_16591;
var G__16628 = count__16530_16592;
var G__16629 = (i__16531_16593 + (1));
seq__16528_16590 = G__16626;
chunk__16529_16591 = G__16627;
count__16530_16592 = G__16628;
i__16531_16593 = G__16629;
continue;
} else {
var temp__5457__auto___16630 = cljs.core.seq(seq__16528_16590);
if(temp__5457__auto___16630){
var seq__16528_16631__$1 = temp__5457__auto___16630;
if(cljs.core.chunked_seq_QMARK_(seq__16528_16631__$1)){
var c__9739__auto___16632 = cljs.core.chunk_first(seq__16528_16631__$1);
var G__16633 = cljs.core.chunk_rest(seq__16528_16631__$1);
var G__16634 = c__9739__auto___16632;
var G__16635 = cljs.core.count(c__9739__auto___16632);
var G__16636 = (0);
seq__16528_16590 = G__16633;
chunk__16529_16591 = G__16634;
count__16530_16592 = G__16635;
i__16531_16593 = G__16636;
continue;
} else {
var vec__16543_16637 = cljs.core.first(seq__16528_16631__$1);
var column_16638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16543_16637,(0),null);
var column_info_16639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16543_16637,(1),null);
var seq__16546_16640 = cljs.core.seq(column_info_16639);
var chunk__16547_16641 = null;
var count__16548_16642 = (0);
var i__16549_16643 = (0);
while(true){
if((i__16549_16643 < count__16548_16642)){
var map__16550_16644 = chunk__16547_16641.cljs$core$IIndexed$_nth$arity$2(null,i__16549_16643);
var map__16550_16645__$1 = ((((!((map__16550_16644 == null)))?((((map__16550_16644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16550_16644.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16550_16644):map__16550_16644);
var gline_16646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16550_16645__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16550_16645__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16550_16645__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16646], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16546_16640,chunk__16547_16641,count__16548_16642,i__16549_16643,seq__16528_16590,chunk__16529_16591,count__16530_16592,i__16531_16593,seq__16521_16583,chunk__16522_16584,count__16523_16585,i__16524_16586,map__16550_16644,map__16550_16645__$1,gline_16646,gcol_16647,name_16648,vec__16543_16637,column_16638,column_info_16639,seq__16528_16631__$1,temp__5457__auto___16630,vec__16525_16587,line_16588,columns_16589,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16647], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16588,new cljs.core.Keyword(null,"col","col",-1959363084),column_16638,new cljs.core.Keyword(null,"name","name",1843675177),name_16648], null));
});})(seq__16546_16640,chunk__16547_16641,count__16548_16642,i__16549_16643,seq__16528_16590,chunk__16529_16591,count__16530_16592,i__16531_16593,seq__16521_16583,chunk__16522_16584,count__16523_16585,i__16524_16586,map__16550_16644,map__16550_16645__$1,gline_16646,gcol_16647,name_16648,vec__16543_16637,column_16638,column_info_16639,seq__16528_16631__$1,temp__5457__auto___16630,vec__16525_16587,line_16588,columns_16589,inverted))
,cljs.core.sorted_map()));

var G__16649 = seq__16546_16640;
var G__16650 = chunk__16547_16641;
var G__16651 = count__16548_16642;
var G__16652 = (i__16549_16643 + (1));
seq__16546_16640 = G__16649;
chunk__16547_16641 = G__16650;
count__16548_16642 = G__16651;
i__16549_16643 = G__16652;
continue;
} else {
var temp__5457__auto___16653__$1 = cljs.core.seq(seq__16546_16640);
if(temp__5457__auto___16653__$1){
var seq__16546_16654__$1 = temp__5457__auto___16653__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16546_16654__$1)){
var c__9739__auto___16655 = cljs.core.chunk_first(seq__16546_16654__$1);
var G__16656 = cljs.core.chunk_rest(seq__16546_16654__$1);
var G__16657 = c__9739__auto___16655;
var G__16658 = cljs.core.count(c__9739__auto___16655);
var G__16659 = (0);
seq__16546_16640 = G__16656;
chunk__16547_16641 = G__16657;
count__16548_16642 = G__16658;
i__16549_16643 = G__16659;
continue;
} else {
var map__16552_16660 = cljs.core.first(seq__16546_16654__$1);
var map__16552_16661__$1 = ((((!((map__16552_16660 == null)))?((((map__16552_16660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16552_16660.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16552_16660):map__16552_16660);
var gline_16662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16552_16661__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16552_16661__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16552_16661__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16662], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16546_16640,chunk__16547_16641,count__16548_16642,i__16549_16643,seq__16528_16590,chunk__16529_16591,count__16530_16592,i__16531_16593,seq__16521_16583,chunk__16522_16584,count__16523_16585,i__16524_16586,map__16552_16660,map__16552_16661__$1,gline_16662,gcol_16663,name_16664,seq__16546_16654__$1,temp__5457__auto___16653__$1,vec__16543_16637,column_16638,column_info_16639,seq__16528_16631__$1,temp__5457__auto___16630,vec__16525_16587,line_16588,columns_16589,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16663], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16588,new cljs.core.Keyword(null,"col","col",-1959363084),column_16638,new cljs.core.Keyword(null,"name","name",1843675177),name_16664], null));
});})(seq__16546_16640,chunk__16547_16641,count__16548_16642,i__16549_16643,seq__16528_16590,chunk__16529_16591,count__16530_16592,i__16531_16593,seq__16521_16583,chunk__16522_16584,count__16523_16585,i__16524_16586,map__16552_16660,map__16552_16661__$1,gline_16662,gcol_16663,name_16664,seq__16546_16654__$1,temp__5457__auto___16653__$1,vec__16543_16637,column_16638,column_info_16639,seq__16528_16631__$1,temp__5457__auto___16630,vec__16525_16587,line_16588,columns_16589,inverted))
,cljs.core.sorted_map()));

var G__16665 = cljs.core.next(seq__16546_16654__$1);
var G__16666 = null;
var G__16667 = (0);
var G__16668 = (0);
seq__16546_16640 = G__16665;
chunk__16547_16641 = G__16666;
count__16548_16642 = G__16667;
i__16549_16643 = G__16668;
continue;
}
} else {
}
}
break;
}

var G__16669 = cljs.core.next(seq__16528_16631__$1);
var G__16670 = null;
var G__16671 = (0);
var G__16672 = (0);
seq__16528_16590 = G__16669;
chunk__16529_16591 = G__16670;
count__16530_16592 = G__16671;
i__16531_16593 = G__16672;
continue;
}
} else {
}
}
break;
}

var G__16673 = seq__16521_16583;
var G__16674 = chunk__16522_16584;
var G__16675 = count__16523_16585;
var G__16676 = (i__16524_16586 + (1));
seq__16521_16583 = G__16673;
chunk__16522_16584 = G__16674;
count__16523_16585 = G__16675;
i__16524_16586 = G__16676;
continue;
} else {
var temp__5457__auto___16677 = cljs.core.seq(seq__16521_16583);
if(temp__5457__auto___16677){
var seq__16521_16678__$1 = temp__5457__auto___16677;
if(cljs.core.chunked_seq_QMARK_(seq__16521_16678__$1)){
var c__9739__auto___16679 = cljs.core.chunk_first(seq__16521_16678__$1);
var G__16680 = cljs.core.chunk_rest(seq__16521_16678__$1);
var G__16681 = c__9739__auto___16679;
var G__16682 = cljs.core.count(c__9739__auto___16679);
var G__16683 = (0);
seq__16521_16583 = G__16680;
chunk__16522_16584 = G__16681;
count__16523_16585 = G__16682;
i__16524_16586 = G__16683;
continue;
} else {
var vec__16554_16684 = cljs.core.first(seq__16521_16678__$1);
var line_16685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16554_16684,(0),null);
var columns_16686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16554_16684,(1),null);
var seq__16557_16687 = cljs.core.seq(columns_16686);
var chunk__16558_16688 = null;
var count__16559_16689 = (0);
var i__16560_16690 = (0);
while(true){
if((i__16560_16690 < count__16559_16689)){
var vec__16561_16691 = chunk__16558_16688.cljs$core$IIndexed$_nth$arity$2(null,i__16560_16690);
var column_16692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16561_16691,(0),null);
var column_info_16693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16561_16691,(1),null);
var seq__16564_16694 = cljs.core.seq(column_info_16693);
var chunk__16565_16695 = null;
var count__16566_16696 = (0);
var i__16567_16697 = (0);
while(true){
if((i__16567_16697 < count__16566_16696)){
var map__16568_16698 = chunk__16565_16695.cljs$core$IIndexed$_nth$arity$2(null,i__16567_16697);
var map__16568_16699__$1 = ((((!((map__16568_16698 == null)))?((((map__16568_16698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16568_16698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16568_16698):map__16568_16698);
var gline_16700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16568_16699__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16568_16699__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16568_16699__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16700], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16564_16694,chunk__16565_16695,count__16566_16696,i__16567_16697,seq__16557_16687,chunk__16558_16688,count__16559_16689,i__16560_16690,seq__16521_16583,chunk__16522_16584,count__16523_16585,i__16524_16586,map__16568_16698,map__16568_16699__$1,gline_16700,gcol_16701,name_16702,vec__16561_16691,column_16692,column_info_16693,vec__16554_16684,line_16685,columns_16686,seq__16521_16678__$1,temp__5457__auto___16677,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16701], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16685,new cljs.core.Keyword(null,"col","col",-1959363084),column_16692,new cljs.core.Keyword(null,"name","name",1843675177),name_16702], null));
});})(seq__16564_16694,chunk__16565_16695,count__16566_16696,i__16567_16697,seq__16557_16687,chunk__16558_16688,count__16559_16689,i__16560_16690,seq__16521_16583,chunk__16522_16584,count__16523_16585,i__16524_16586,map__16568_16698,map__16568_16699__$1,gline_16700,gcol_16701,name_16702,vec__16561_16691,column_16692,column_info_16693,vec__16554_16684,line_16685,columns_16686,seq__16521_16678__$1,temp__5457__auto___16677,inverted))
,cljs.core.sorted_map()));

var G__16703 = seq__16564_16694;
var G__16704 = chunk__16565_16695;
var G__16705 = count__16566_16696;
var G__16706 = (i__16567_16697 + (1));
seq__16564_16694 = G__16703;
chunk__16565_16695 = G__16704;
count__16566_16696 = G__16705;
i__16567_16697 = G__16706;
continue;
} else {
var temp__5457__auto___16707__$1 = cljs.core.seq(seq__16564_16694);
if(temp__5457__auto___16707__$1){
var seq__16564_16708__$1 = temp__5457__auto___16707__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16564_16708__$1)){
var c__9739__auto___16709 = cljs.core.chunk_first(seq__16564_16708__$1);
var G__16710 = cljs.core.chunk_rest(seq__16564_16708__$1);
var G__16711 = c__9739__auto___16709;
var G__16712 = cljs.core.count(c__9739__auto___16709);
var G__16713 = (0);
seq__16564_16694 = G__16710;
chunk__16565_16695 = G__16711;
count__16566_16696 = G__16712;
i__16567_16697 = G__16713;
continue;
} else {
var map__16570_16714 = cljs.core.first(seq__16564_16708__$1);
var map__16570_16715__$1 = ((((!((map__16570_16714 == null)))?((((map__16570_16714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16570_16714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16570_16714):map__16570_16714);
var gline_16716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16570_16715__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16570_16715__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16570_16715__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16716], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16564_16694,chunk__16565_16695,count__16566_16696,i__16567_16697,seq__16557_16687,chunk__16558_16688,count__16559_16689,i__16560_16690,seq__16521_16583,chunk__16522_16584,count__16523_16585,i__16524_16586,map__16570_16714,map__16570_16715__$1,gline_16716,gcol_16717,name_16718,seq__16564_16708__$1,temp__5457__auto___16707__$1,vec__16561_16691,column_16692,column_info_16693,vec__16554_16684,line_16685,columns_16686,seq__16521_16678__$1,temp__5457__auto___16677,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16717], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16685,new cljs.core.Keyword(null,"col","col",-1959363084),column_16692,new cljs.core.Keyword(null,"name","name",1843675177),name_16718], null));
});})(seq__16564_16694,chunk__16565_16695,count__16566_16696,i__16567_16697,seq__16557_16687,chunk__16558_16688,count__16559_16689,i__16560_16690,seq__16521_16583,chunk__16522_16584,count__16523_16585,i__16524_16586,map__16570_16714,map__16570_16715__$1,gline_16716,gcol_16717,name_16718,seq__16564_16708__$1,temp__5457__auto___16707__$1,vec__16561_16691,column_16692,column_info_16693,vec__16554_16684,line_16685,columns_16686,seq__16521_16678__$1,temp__5457__auto___16677,inverted))
,cljs.core.sorted_map()));

var G__16719 = cljs.core.next(seq__16564_16708__$1);
var G__16720 = null;
var G__16721 = (0);
var G__16722 = (0);
seq__16564_16694 = G__16719;
chunk__16565_16695 = G__16720;
count__16566_16696 = G__16721;
i__16567_16697 = G__16722;
continue;
}
} else {
}
}
break;
}

var G__16723 = seq__16557_16687;
var G__16724 = chunk__16558_16688;
var G__16725 = count__16559_16689;
var G__16726 = (i__16560_16690 + (1));
seq__16557_16687 = G__16723;
chunk__16558_16688 = G__16724;
count__16559_16689 = G__16725;
i__16560_16690 = G__16726;
continue;
} else {
var temp__5457__auto___16727__$1 = cljs.core.seq(seq__16557_16687);
if(temp__5457__auto___16727__$1){
var seq__16557_16728__$1 = temp__5457__auto___16727__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16557_16728__$1)){
var c__9739__auto___16729 = cljs.core.chunk_first(seq__16557_16728__$1);
var G__16730 = cljs.core.chunk_rest(seq__16557_16728__$1);
var G__16731 = c__9739__auto___16729;
var G__16732 = cljs.core.count(c__9739__auto___16729);
var G__16733 = (0);
seq__16557_16687 = G__16730;
chunk__16558_16688 = G__16731;
count__16559_16689 = G__16732;
i__16560_16690 = G__16733;
continue;
} else {
var vec__16572_16734 = cljs.core.first(seq__16557_16728__$1);
var column_16735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16572_16734,(0),null);
var column_info_16736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16572_16734,(1),null);
var seq__16575_16737 = cljs.core.seq(column_info_16736);
var chunk__16576_16738 = null;
var count__16577_16739 = (0);
var i__16578_16740 = (0);
while(true){
if((i__16578_16740 < count__16577_16739)){
var map__16579_16741 = chunk__16576_16738.cljs$core$IIndexed$_nth$arity$2(null,i__16578_16740);
var map__16579_16742__$1 = ((((!((map__16579_16741 == null)))?((((map__16579_16741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16579_16741.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16579_16741):map__16579_16741);
var gline_16743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16579_16742__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16579_16742__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16579_16742__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16743], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16575_16737,chunk__16576_16738,count__16577_16739,i__16578_16740,seq__16557_16687,chunk__16558_16688,count__16559_16689,i__16560_16690,seq__16521_16583,chunk__16522_16584,count__16523_16585,i__16524_16586,map__16579_16741,map__16579_16742__$1,gline_16743,gcol_16744,name_16745,vec__16572_16734,column_16735,column_info_16736,seq__16557_16728__$1,temp__5457__auto___16727__$1,vec__16554_16684,line_16685,columns_16686,seq__16521_16678__$1,temp__5457__auto___16677,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16744], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16685,new cljs.core.Keyword(null,"col","col",-1959363084),column_16735,new cljs.core.Keyword(null,"name","name",1843675177),name_16745], null));
});})(seq__16575_16737,chunk__16576_16738,count__16577_16739,i__16578_16740,seq__16557_16687,chunk__16558_16688,count__16559_16689,i__16560_16690,seq__16521_16583,chunk__16522_16584,count__16523_16585,i__16524_16586,map__16579_16741,map__16579_16742__$1,gline_16743,gcol_16744,name_16745,vec__16572_16734,column_16735,column_info_16736,seq__16557_16728__$1,temp__5457__auto___16727__$1,vec__16554_16684,line_16685,columns_16686,seq__16521_16678__$1,temp__5457__auto___16677,inverted))
,cljs.core.sorted_map()));

var G__16746 = seq__16575_16737;
var G__16747 = chunk__16576_16738;
var G__16748 = count__16577_16739;
var G__16749 = (i__16578_16740 + (1));
seq__16575_16737 = G__16746;
chunk__16576_16738 = G__16747;
count__16577_16739 = G__16748;
i__16578_16740 = G__16749;
continue;
} else {
var temp__5457__auto___16750__$2 = cljs.core.seq(seq__16575_16737);
if(temp__5457__auto___16750__$2){
var seq__16575_16751__$1 = temp__5457__auto___16750__$2;
if(cljs.core.chunked_seq_QMARK_(seq__16575_16751__$1)){
var c__9739__auto___16752 = cljs.core.chunk_first(seq__16575_16751__$1);
var G__16753 = cljs.core.chunk_rest(seq__16575_16751__$1);
var G__16754 = c__9739__auto___16752;
var G__16755 = cljs.core.count(c__9739__auto___16752);
var G__16756 = (0);
seq__16575_16737 = G__16753;
chunk__16576_16738 = G__16754;
count__16577_16739 = G__16755;
i__16578_16740 = G__16756;
continue;
} else {
var map__16581_16757 = cljs.core.first(seq__16575_16751__$1);
var map__16581_16758__$1 = ((((!((map__16581_16757 == null)))?((((map__16581_16757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16581_16757.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16581_16757):map__16581_16757);
var gline_16759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16581_16758__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16581_16758__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16581_16758__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16759], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16575_16737,chunk__16576_16738,count__16577_16739,i__16578_16740,seq__16557_16687,chunk__16558_16688,count__16559_16689,i__16560_16690,seq__16521_16583,chunk__16522_16584,count__16523_16585,i__16524_16586,map__16581_16757,map__16581_16758__$1,gline_16759,gcol_16760,name_16761,seq__16575_16751__$1,temp__5457__auto___16750__$2,vec__16572_16734,column_16735,column_info_16736,seq__16557_16728__$1,temp__5457__auto___16727__$1,vec__16554_16684,line_16685,columns_16686,seq__16521_16678__$1,temp__5457__auto___16677,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16760], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16685,new cljs.core.Keyword(null,"col","col",-1959363084),column_16735,new cljs.core.Keyword(null,"name","name",1843675177),name_16761], null));
});})(seq__16575_16737,chunk__16576_16738,count__16577_16739,i__16578_16740,seq__16557_16687,chunk__16558_16688,count__16559_16689,i__16560_16690,seq__16521_16583,chunk__16522_16584,count__16523_16585,i__16524_16586,map__16581_16757,map__16581_16758__$1,gline_16759,gcol_16760,name_16761,seq__16575_16751__$1,temp__5457__auto___16750__$2,vec__16572_16734,column_16735,column_info_16736,seq__16557_16728__$1,temp__5457__auto___16727__$1,vec__16554_16684,line_16685,columns_16686,seq__16521_16678__$1,temp__5457__auto___16677,inverted))
,cljs.core.sorted_map()));

var G__16762 = cljs.core.next(seq__16575_16751__$1);
var G__16763 = null;
var G__16764 = (0);
var G__16765 = (0);
seq__16575_16737 = G__16762;
chunk__16576_16738 = G__16763;
count__16577_16739 = G__16764;
i__16578_16740 = G__16765;
continue;
}
} else {
}
}
break;
}

var G__16766 = cljs.core.next(seq__16557_16728__$1);
var G__16767 = null;
var G__16768 = (0);
var G__16769 = (0);
seq__16557_16687 = G__16766;
chunk__16558_16688 = G__16767;
count__16559_16689 = G__16768;
i__16560_16690 = G__16769;
continue;
}
} else {
}
}
break;
}

var G__16770 = cljs.core.next(seq__16521_16678__$1);
var G__16771 = null;
var G__16772 = (0);
var G__16773 = (0);
seq__16521_16583 = G__16770;
chunk__16522_16584 = G__16771;
count__16523_16585 = G__16772;
i__16524_16586 = G__16773;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
