goog.provide("gadjett.collections");
(function (){
gadjett.collections.infinity = Infinity; return (
new cljs.core.Var(function(){return gadjett.collections.infinity;},new cljs.core.Symbol("gadjett.collections","infinity","gadjett.collections/infinity",(1877509532),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"infinity","infinity",(1534604680),null),"gadjett/collections.cljc",(14),(1),(6),(6),cljs.core.List.EMPTY,null,(cljs.core.truth_(gadjett.collections.infinity)?gadjett.collections.infinity.cljs$lang$test:null)])));})()
;
/**
 * Compare two maps exclusing some keys
 * 
 * ~~~klipse
 *   (=without-keys? {:a 1 :b 2 :c 3} {:a 1 :b 5} #{:b :c})
 * ~~~
 *   
 */
(function (){
gadjett.collections._EQ_without_keys_QMARK_ = (function gadjett$collections$_EQ_without_keys_QMARK_(obj_a,obj_b,keys_list){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,(function (p1__1_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__1_SHARP_,keys_list);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj_a,obj_b], null)));
}); return (
new cljs.core.Var(function(){return gadjett.collections._EQ_without_keys_QMARK_;},new cljs.core.Symbol("gadjett.collections","=without-keys?","gadjett.collections/=without-keys?",(416652629),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"=without-keys?","=without-keys?",(-194687679),null),"gadjett/collections.cljc",(21),(1),(9),(9),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj-a","obj-a",(-1059669584),null),new cljs.core.Symbol(null,"obj-b","obj-b",(-2091033348),null),new cljs.core.Symbol(null,"keys-list","keys-list",(1865441552),null)], null)),"Compare two maps exclusing some keys\n\n~~~klipse\n  (=without-keys? {:a 1 :b 2 :c 3} {:a 1 :b 5} #{:b :c})\n~~~\n  ",(cljs.core.truth_(gadjett.collections._EQ_without_keys_QMARK_)?gadjett.collections._EQ_without_keys_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Converts a 2d vec to a hash-map.
 * 
 * ~~~klipse
 * (vec->map [[:a 1] [:b 2]])
 * ~~~
 * 
 */
(function (){
gadjett.collections.vec__GT_map = (function gadjett$collections$vec__GT_map(vec){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,vec);
}); return (
new cljs.core.Var(function(){return gadjett.collections.vec__GT_map;},new cljs.core.Symbol("gadjett.collections","vec->map","gadjett.collections/vec->map",(-1727225445),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"vec->map","vec->map",(-1380093561),null),"gadjett/collections.cljc",(15),(1),(19),(19),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec","vec",(982683596),null)], null)),"Converts a 2d vec to a hash-map.\n\n~~~klipse\n   (vec->map [[:a 1] [:b 2]])\n~~~\n   ",(cljs.core.truth_(gadjett.collections.vec__GT_map)?gadjett.collections.vec__GT_map.cljs$lang$test:null)])));})()
;
/**
 * Maps the values of a `2D` vector where each element of the vector is a key-value pair.
 * `f` is a `1-ary` function that receives the key.
 * 
 * ~~~klipse
 *   (map-2d-vec inc [[:a 1] [:b 2]])
 * ~~~
 */
(function (){
gadjett.collections.map_2d_vec = (function gadjett$collections$map_2d_vec(f,m){
return cljs.core.map.call(null,(function (p__26){
var vec__27 = p__26;
var k = cljs.core.nth.call(null,vec__27,(0),null);
var id = cljs.core.nth.call(null,vec__27,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,id)], null);
}),m);
}); return (
new cljs.core.Var(function(){return gadjett.collections.map_2d_vec;},new cljs.core.Symbol("gadjett.collections","map-2d-vec","gadjett.collections/map-2d-vec",(-1168096955),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"map-2d-vec","map-2d-vec",(-1764748967),null),"gadjett/collections.cljc",(17),(1),(29),(29),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),"Maps the values of a `2D` vector where each element of the vector is a key-value pair.\n`f` is a `1-ary` function that receives the key.\n\n~~~klipse\n  (map-2d-vec inc [[:a 1] [:b 2]])\n~~~\n",(cljs.core.truth_(gadjett.collections.map_2d_vec)?gadjett.collections.map_2d_vec.cljs$lang$test:null)])));})()
;
/**
 * Maps the values of a `2D` vector where each element of the vector is a key-value pair.
 * `fk` is a `1-ary` function that receives the key.
 * `fv` is a `1-ary` function that receives the value.
 * 
 * ~~~klipse
 *  (map-2d-vec-kv name inc [[:a 1] [:b 2]])
 * ~~~
 */
(function (){
gadjett.collections.map_2d_vec_kv = (function gadjett$collections$map_2d_vec_kv(fk,fv,m){
return cljs.core.map.call(null,(function (p__34){
var vec__35 = p__34;
var k = cljs.core.nth.call(null,vec__35,(0),null);
var id = cljs.core.nth.call(null,vec__35,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fk.call(null,k),fv.call(null,id)], null);
}),m);
}); return (
new cljs.core.Var(function(){return gadjett.collections.map_2d_vec_kv;},new cljs.core.Symbol("gadjett.collections","map-2d-vec-kv","gadjett.collections/map-2d-vec-kv",(220583464),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"map-2d-vec-kv","map-2d-vec-kv",(-258668836),null),"gadjett/collections.cljc",(20),(1),(40),(40),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fk","fk",(2038974178),null),new cljs.core.Symbol(null,"fv","fv",(637003836),null),new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),"Maps the values of a `2D` vector where each element of the vector is a key-value pair.\n`fk` is a `1-ary` function that receives the key.\n`fv` is a `1-ary` function that receives the value.\n\n~~~klipse\n    (map-2d-vec-kv name inc [[:a 1] [:b 2]])\n~~~\n",(cljs.core.truth_(gadjett.collections.map_2d_vec_kv)?gadjett.collections.map_2d_vec_kv.cljs$lang$test:null)])));})()
;
/**
 * Returns a map with the same keys as `m` and with the values transformed by `f`. `f` is a `1-ary` function that receives the key.
 * 
 * ~~~klipse
 *   (map-object inc {:a 1 :b 2 :c 3})
 * ~~~
 *   
 */
(function (){
gadjett.collections.map_object = (function gadjett$collections$map_object(f,m){
return gadjett.collections.vec__GT_map.call(null,gadjett.collections.map_2d_vec.call(null,f,m));
}); return (
new cljs.core.Var(function(){return gadjett.collections.map_object;},new cljs.core.Symbol("gadjett.collections","map-object","gadjett.collections/map-object",(1056142946),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"map-object","map-object",(1799603838),null),"gadjett/collections.cljc",(17),(1),(52),(52),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),"Returns a map with the same keys as `m` and with the values transformed by `f`. `f` is a `1-ary` function that receives the key.\n\n~~~klipse\n  (map-object inc {:a 1 :b 2 :c 3})\n~~~\n  ",(cljs.core.truth_(gadjett.collections.map_object)?gadjett.collections.map_object.cljs$lang$test:null)])));})()
;
/**
 * Returns a map with the same keys as `m` and with the values transformed by `f`. `f` must be a `2-ary` function that receives the key and the value as arguments.
 * 
 * ~~~klipse
 *   (map-object-with-key list {:a 1 :b 2 :c 3})
 * ~~~
 *   
 */
(function (){
gadjett.collections.map_object_with_key = (function gadjett$collections$map_object_with_key(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__42){
var vec__43 = p__42;
var a = cljs.core.nth.call(null,vec__43,(0),null);
var b = cljs.core.nth.call(null,vec__43,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,f.call(null,a,b)], null);
}),m));
}); return (
new cljs.core.Var(function(){return gadjett.collections.map_object_with_key;},new cljs.core.Symbol("gadjett.collections","map-object-with-key","gadjett.collections/map-object-with-key",(-325394161),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"map-object-with-key","map-object-with-key",(-1207365357),null),"gadjett/collections.cljc",(26),(1),(63),(63),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),"Returns a map with the same keys as `m` and with the values transformed by `f`. `f` must be a `2-ary` function that receives the key and the value as arguments.\n\n~~~klipse\n  (map-object-with-key list {:a 1 :b 2 :c 3})\n~~~\n  ",(cljs.core.truth_(gadjett.collections.map_object_with_key)?gadjett.collections.map_object_with_key.cljs$lang$test:null)])));})()
;
/**
 * Returns a map with the keys mapped by `fk` and the values mapped by `fv`.
 * 
 * ~~~klipse
 *  (map-object-kv name inc {:a 1 :b 2 :c 3})
 * ~~~
 */
(function (){
gadjett.collections.map_object_kv = (function gadjett$collections$map_object_kv(fk,fv,m){
return gadjett.collections.vec__GT_map.call(null,gadjett.collections.map_2d_vec_kv.call(null,fk,fv,m));
}); return (
new cljs.core.Var(function(){return gadjett.collections.map_object_kv;},new cljs.core.Symbol("gadjett.collections","map-object-kv","gadjett.collections/map-object-kv",(-54681895),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"map-object-kv","map-object-kv",(-2010263859),null),"gadjett/collections.cljc",(20),(1),(73),(73),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fk","fk",(2038974178),null),new cljs.core.Symbol(null,"fv","fv",(637003836),null),new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),"Returns a map with the keys mapped by `fk` and the values mapped by `fv`.\n\n~~~klipse\n    (map-object-kv name inc {:a 1 :b 2 :c 3})\n~~~\n",(cljs.core.truth_(gadjett.collections.map_object_kv)?gadjett.collections.map_object_kv.cljs$lang$test:null)])));})()
;
/**
 * Turns a hash map inside out.
 *   See:  [here](http://stackoverflow.com/a/23653784/813665)
 * 
 * ~~~klipse
 *   (map-reverse-hierarchy {:monday {:banana 2 :apple 3} 
 *                        :tuesday {:banana 5 :orange 2}})
 * ~~~
 */
(function (){
gadjett.collections.map_reverse_hierarchy = (function gadjett$collections$map_reverse_hierarchy(m){
var or__20817__auto__ = cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.conj,(function (){var iter__23197__auto__ = (function gadjett$collections$map_reverse_hierarchy_$_iter__154(s__155){
return (new cljs.core.LazySeq(null,(function (){
var s__155__$1 = s__155;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__155__$1);
if(temp__19834__auto__){
var xs__19764__auto__ = temp__19834__auto__;
var vec__175 = cljs.core.first.call(null,xs__19764__auto__);
var k1 = cljs.core.nth.call(null,vec__175,(0),null);
var v1 = cljs.core.nth.call(null,vec__175,(1),null);
var iterys__23193__auto__ = ((function (s__155__$1,vec__175,k1,v1,xs__19764__auto__,temp__19834__auto__){
return (function gadjett$collections$map_reverse_hierarchy_$_iter__154_$_iter__156(s__157){
return (new cljs.core.LazySeq(null,((function (s__155__$1,vec__175,k1,v1,xs__19764__auto__,temp__19834__auto__){
return (function (){
var s__157__$1 = s__157;
while(true){
var temp__19834__auto____$1 = cljs.core.seq.call(null,s__157__$1);
if(temp__19834__auto____$1){
var s__157__$2 = temp__19834__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__157__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__157__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__159 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__158 = (0);
while(true){
if((i__158 < size__23196__auto__)){
var vec__184 = cljs.core._nth.call(null,c__23195__auto__,i__158);
var k2 = cljs.core.nth.call(null,vec__184,(0),null);
var v2 = cljs.core.nth.call(null,vec__184,(1),null);
cljs.core.chunk_append.call(null,b__159,cljs.core.PersistentArrayMap.fromArray([k2,cljs.core.PersistentArrayMap.fromArray([k1,v2], true, false)], true, false));

var G__190 = (i__158 + (1));
i__158 = G__190;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__159),gadjett$collections$map_reverse_hierarchy_$_iter__154_$_iter__156.call(null,cljs.core.chunk_rest.call(null,s__157__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__159),null);
}
} else {
var vec__187 = cljs.core.first.call(null,s__157__$2);
var k2 = cljs.core.nth.call(null,vec__187,(0),null);
var v2 = cljs.core.nth.call(null,vec__187,(1),null);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.fromArray([k2,cljs.core.PersistentArrayMap.fromArray([k1,v2], true, false)], true, false),gadjett$collections$map_reverse_hierarchy_$_iter__154_$_iter__156.call(null,cljs.core.rest.call(null,s__157__$2)));
}
} else {
return null;
}
break;
}
});})(s__155__$1,vec__175,k1,v1,xs__19764__auto__,temp__19834__auto__))
,null,null));
});})(s__155__$1,vec__175,k1,v1,xs__19764__auto__,temp__19834__auto__))
;
var fs__23194__auto__ = cljs.core.seq.call(null,iterys__23193__auto__.call(null,v1));
if(fs__23194__auto__){
return cljs.core.concat.call(null,fs__23194__auto__,gadjett$collections$map_reverse_hierarchy_$_iter__154.call(null,cljs.core.rest.call(null,s__155__$1)));
} else {
var G__191 = cljs.core.rest.call(null,s__155__$1);
s__155__$1 = G__191;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__23197__auto__.call(null,m);
})());
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}); return (
new cljs.core.Var(function(){return gadjett.collections.map_reverse_hierarchy;},new cljs.core.Symbol("gadjett.collections","map-reverse-hierarchy","gadjett.collections/map-reverse-hierarchy",(-275359126),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"map-reverse-hierarchy","map-reverse-hierarchy",(807799390),null),"gadjett/collections.cljc",(28),(1),(84),(84),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),"Turns a hash map inside out.\n  See:  [here](http://stackoverflow.com/a/23653784/813665)\n\n~~~klipse\n  (map-reverse-hierarchy {:monday {:banana 2 :apple 3} \n                          :tuesday {:banana 5 :orange 2}})\n~~~\n",(cljs.core.truth_(gadjett.collections.map_reverse_hierarchy)?gadjett.collections.map_reverse_hierarchy.cljs$lang$test:null)])));})()
;
/**
 * Calculates the mean (a.k.a average) of a sequence of numbers.
 * 
 * ~~~klipse
 *   (mean [1 2 10 -1 12.3])
 * ~~~
 *   
 */
(function (){
gadjett.collections.mean = (function gadjett$collections$mean(x){
if(cljs.core.empty_QMARK_.call(null,x)){
return (0);
} else {
return (cljs.core.apply.call(null,cljs.core._PLUS_,x) / cljs.core.count.call(null,x));
}
}); return (
new cljs.core.Var(function(){return gadjett.collections.mean;},new cljs.core.Symbol("gadjett.collections","mean","gadjett.collections/mean",(1068732288),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"mean","mean",(281296812),null),"gadjett/collections.cljc",(11),(1),(98),(98),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Calculates the mean (a.k.a average) of a sequence of numbers.\n\n~~~klipse\n  (mean [1 2 10 -1 12.3])\n~~~\n  ",(cljs.core.truth_(gadjett.collections.mean)?gadjett.collections.mean.cljs$lang$test:null)])));})()
;
/**
 * Converts a sequence into a map where the keys are the indexes of the elements in the sequence.
 * 
 * ~~~klipse
 *   (sequence->map [10 20 30])
 * ~~~
 *   
 */
(function (){
gadjett.collections.sequence__GT_map = (function gadjett$collections$sequence__GT_map(s){
return cljs.core.zipmap.call(null,cljs.core.range.call(null,cljs.core.count.call(null,s)),s);
}); return (
new cljs.core.Var(function(){return gadjett.collections.sequence__GT_map;},new cljs.core.Symbol("gadjett.collections","sequence->map","gadjett.collections/sequence->map",(-491993067),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"sequence->map","sequence->map",(-702769151),null),"gadjett/collections.cljc",(20),(1),(110),(110),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),"Converts a sequence into a map where the keys are the indexes of the elements in the sequence.\n\n~~~klipse\n  (sequence->map [10 20 30])\n~~~\n  ",(cljs.core.truth_(gadjett.collections.sequence__GT_map)?gadjett.collections.sequence__GT_map.cljs$lang$test:null)])));})()
;
(function (){
gadjett.collections.range_with_end = (function gadjett$collections$range_with_end(var_args){
var args192 = [];
var len__23656__auto___195 = arguments.length;
var i__23657__auto___196 = (0);
while(true){
if((i__23657__auto___196 < len__23656__auto___195)){
args192.push((arguments[i__23657__auto___196]));

var G__197 = (i__23657__auto___196 + (1));
i__23657__auto___196 = G__197;
continue;
} else {
}
break;
}

var G__194 = args192.length;
switch (G__194) {
case (1):
return gadjett.collections.range_with_end.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return gadjett.collections.range_with_end.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return gadjett.collections.range_with_end.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args192.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return gadjett.collections.range_with_end;},new cljs.core.Symbol("gadjett.collections","range-with-end","gadjett.collections/range-with-end",(1258052840),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"range-with-end","range-with-end",(-1089688364),null),"gadjett/collections.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"end","end",(1372345569),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null),new cljs.core.Symbol(null,"steps","steps",(1512098225),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"end","end",(1372345569),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null),new cljs.core.Symbol(null,"steps","steps",(1512098225),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(120),(120),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"end","end",(1372345569),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null),new cljs.core.Symbol(null,"steps","steps",(1512098225),null)], null)),null,(cljs.core.truth_(gadjett.collections.range_with_end)?gadjett.collections.range_with_end.cljs$lang$test:null)])));})()
;

gadjett.collections.range_with_end.cljs$core$IFn$_invoke$arity$1 = (function (end){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [end,cljs.core.range.call(null,end)], null);
});

gadjett.collections.range_with_end.cljs$core$IFn$_invoke$arity$2 = (function (start,end){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [end,cljs.core.range.call(null,start,end)], null);
});

gadjett.collections.range_with_end.cljs$core$IFn$_invoke$arity$3 = (function (start,end,steps){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [end,cljs.core.range.call(null,start,end,steps)], null);
});

gadjett.collections.range_with_end.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return gadjett.collections.range_with_end;},new cljs.core.Symbol("gadjett.collections","range-with-end","gadjett.collections/range-with-end",(1258052840),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"range-with-end","range-with-end",(-1089688364),null),"gadjett/collections.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"end","end",(1372345569),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null),new cljs.core.Symbol(null,"steps","steps",(1512098225),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"end","end",(1372345569),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null),new cljs.core.Symbol(null,"steps","steps",(1512098225),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null)], null),(1),(120),(120),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"end","end",(1372345569),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null),new cljs.core.Symbol(null,"steps","steps",(1512098225),null)], null)),null,(cljs.core.truth_(gadjett.collections.range_with_end)?gadjett.collections.range_with_end.cljs$lang$test:null)]));
/**
 * Like `range` but including the `end`.
 * 
 * ~~~klipse
 *   (range-till-end 10)
 * ~~~
 * 
 * ~~~klipse
 * (range-till-end 10 18)
 * ~~~
 * 
 * ~~~klipse
 * (range-till-end 10 100 5)
 * ~~~
 * 
 *   
 */
(function (){
gadjett.collections.range_till_end = (function gadjett$collections$range_till_end(var_args){
var args__23658__auto__ = [];
var len__23656__auto___203 = arguments.length;
var i__23657__auto___204 = (0);
while(true){
if((i__23657__auto___204 < len__23656__auto___203)){
args__23658__auto__.push((arguments[i__23657__auto___204]));

var G__205 = (i__23657__auto___204 + (1));
i__23657__auto___204 = G__205;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((0) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((0)),(0),null)):null);
return gadjett.collections.range_till_end.cljs$core$IFn$_invoke$arity$variadic(argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return gadjett.collections.range_till_end;},new cljs.core.Symbol("gadjett.collections","range-till-end","gadjett.collections/range-till-end",(-1485352441),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"range-till-end","range-till-end",(1944486515),null),"gadjett/collections.cljc",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(125),(125),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Like `range` but including the `end`.\n\n~~~klipse\n  (range-till-end 10)\n~~~\n\n~~~klipse\n(range-till-end 10 18)\n~~~\n\n~~~klipse\n(range-till-end 10 100 5)\n~~~\n\n  ",(cljs.core.truth_(gadjett.collections.range_till_end)?gadjett.collections.range_till_end.cljs$lang$test:null)])));})()
;

gadjett.collections.range_till_end.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__200 = cljs.core.apply.call(null,gadjett.collections.range_with_end,args);
var end = cljs.core.nth.call(null,vec__200,(0),null);
var lis = cljs.core.nth.call(null,vec__200,(1),null);
return cljs.core.concat.call(null,lis,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [end], null));
});

gadjett.collections.range_till_end.cljs$lang$maxFixedArity = (0);

gadjett.collections.range_till_end.cljs$lang$applyTo = (function (seq199){
return gadjett.collections.range_till_end.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq199));
});

new cljs.core.Var(function(){return gadjett.collections.range_till_end;},new cljs.core.Symbol("gadjett.collections","range-till-end","gadjett.collections/range-till-end",(-1485352441),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"range-till-end","range-till-end",(1944486515),null),"gadjett/collections.cljc",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(125),(125),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Like `range` but including the `end`.\n\n~~~klipse\n  (range-till-end 10)\n~~~\n\n~~~klipse\n(range-till-end 10 18)\n~~~\n\n~~~klipse\n(range-till-end 10 100 5)\n~~~\n\n  ",(cljs.core.truth_(gadjett.collections.range_till_end)?gadjett.collections.range_till_end.cljs$lang$test:null)]));
/**
 * Appends an element to a list popping out the first element.
 * 
 * ~~~klipse
 *   (-> (repeat 3 nil)
 *    (append-cyclic 1)
 *    (append-cyclic 2)
 *    (append-cyclic 3)
 *    (append-cyclic 4))
 * ~~~
 *   
 */
(function (){
gadjett.collections.append_cyclic = (function gadjett$collections$append_cyclic(lst,a){
if(cljs.core.seq.call(null,lst)){
return cljs.core.concat.call(null,cljs.core.rest.call(null,lst),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null));
} else {
return lst;
}
}); return (
new cljs.core.Var(function(){return gadjett.collections.append_cyclic;},new cljs.core.Symbol("gadjett.collections","append-cyclic","gadjett.collections/append-cyclic",(-1217919913),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"append-cyclic","append-cyclic",(-1009232837),null),"gadjett/collections.cljc",(20),(1),(145),(145),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"lst","lst",(1910277514),null),new cljs.core.Symbol(null,"a","a",(-482876059),null)], null)),"Appends an element to a list popping out the first element.\n\n~~~klipse\n  (-> (repeat 3 nil)\n      (append-cyclic 1)\n      (append-cyclic 2)\n      (append-cyclic 3)\n      (append-cyclic 4))\n~~~\n  ",(cljs.core.truth_(gadjett.collections.append_cyclic)?gadjett.collections.append_cyclic.cljs$lang$test:null)])));})()
;
/**
 * Assoc a key-value pair to a map popping out an element of the map.
 *   If the key already exists, no element is popped out.
 *   If `n` is supplied, no elmement is popped out if the map has less than `n` entries.
 * 
 * ~~~klipse
 *   (-> {:a 1 :b 2 :c 3}
 *    (assoc-cyclic :d 4)
 *    (assoc-cyclic :e 5)
 *    (assoc-cyclic :f 6)
 *    (assoc-cyclic :g 7))
 * ~~~
 *   
 */
(function (){
gadjett.collections.assoc_cyclic = (function gadjett$collections$assoc_cyclic(var_args){
var args206 = [];
var len__23656__auto___209 = arguments.length;
var i__23657__auto___210 = (0);
while(true){
if((i__23657__auto___210 < len__23656__auto___209)){
args206.push((arguments[i__23657__auto___210]));

var G__211 = (i__23657__auto___210 + (1));
i__23657__auto___210 = G__211;
continue;
} else {
}
break;
}

var G__208 = args206.length;
switch (G__208) {
case (3):
return gadjett.collections.assoc_cyclic.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return gadjett.collections.assoc_cyclic.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args206.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return gadjett.collections.assoc_cyclic;},new cljs.core.Symbol("gadjett.collections","assoc-cyclic","gadjett.collections/assoc-cyclic",(-1182561445),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"assoc-cyclic","assoc-cyclic",(-1791796409),null),"gadjett/collections.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(161),(161),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Assoc a key-value pair to a map popping out an element of the map.\n  If the key already exists, no element is popped out.\n  If `n` is supplied, no elmement is popped out if the map has less than `n` entries.\n\n~~~klipse\n  (-> {:a 1 :b 2 :c 3}\n      (assoc-cyclic :d 4)\n      (assoc-cyclic :e 5)\n      (assoc-cyclic :f 6)\n      (assoc-cyclic :g 7))\n~~~\n  ",(cljs.core.truth_(gadjett.collections.assoc_cyclic)?gadjett.collections.assoc_cyclic.cljs$lang$test:null)])));})()
;

gadjett.collections.assoc_cyclic.cljs$core$IFn$_invoke$arity$3 = (function (coll,k,v){
if(cljs.core.contains_QMARK_.call(null,coll,k)){
return cljs.core.assoc.call(null,coll,k,v);
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,gadjett.collections.append_cyclic.call(null,coll,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
}
});

gadjett.collections.assoc_cyclic.cljs$core$IFn$_invoke$arity$4 = (function (coll,k,v,n){
if((cljs.core.count.call(null,coll) < n)){
return cljs.core.assoc.call(null,coll,k,v);
} else {
return gadjett.collections.assoc_cyclic.call(null,coll,k,v);
}
});

gadjett.collections.assoc_cyclic.cljs$lang$maxFixedArity = (4);

new cljs.core.Var(function(){return gadjett.collections.assoc_cyclic;},new cljs.core.Symbol("gadjett.collections","assoc-cyclic","gadjett.collections/assoc-cyclic",(-1182561445),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"assoc-cyclic","assoc-cyclic",(-1791796409),null),"gadjett/collections.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(161),(161),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Assoc a key-value pair to a map popping out an element of the map.\n  If the key already exists, no element is popped out.\n  If `n` is supplied, no elmement is popped out if the map has less than `n` entries.\n\n~~~klipse\n  (-> {:a 1 :b 2 :c 3}\n      (assoc-cyclic :d 4)\n      (assoc-cyclic :e 5)\n      (assoc-cyclic :f 6)\n      (assoc-cyclic :g 7))\n~~~\n  ",(cljs.core.truth_(gadjett.collections.assoc_cyclic)?gadjett.collections.assoc_cyclic.cljs$lang$test:null)]));
/**
 * Returns a couple of the `max` and the `min` of a sequence.
 * 
 * ~~~klipse
 *   (max-and-min (range 5))
 * ~~~
 *   
 */
(function (){
gadjett.collections.max_and_min = (function gadjett$collections$max_and_min(x){
if(cljs.core.empty_QMARK_.call(null,x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return cljs.core.juxt.call(null,(function (p1__2_SHARP_){
return cljs.core.apply.call(null,cljs.core.max,p1__2_SHARP_);
}),(function (p1__3_SHARP_){
return cljs.core.apply.call(null,cljs.core.min,p1__3_SHARP_);
})).call(null,x);
}
}); return (
new cljs.core.Var(function(){return gadjett.collections.max_and_min;},new cljs.core.Symbol("gadjett.collections","max-and-min","gadjett.collections/max-and-min",(-432469304),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"max-and-min","max-and-min",(-1163273412),null),"gadjett/collections.cljc",(18),(1),(183),(183),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Returns a couple of the `max` and the `min` of a sequence.\n\n~~~klipse\n  (max-and-min (range 5))\n~~~\n  ",(cljs.core.truth_(gadjett.collections.max_and_min)?gadjett.collections.max_and_min.cljs$lang$test:null)])));})()
;
/**
 * Removes entries with `nil` values.
 * 
 * ~~~klipse
 *   (compactize-map {:a 1 :b nil :c 3})
 * ~~~
 *   
 */
(function (){
gadjett.collections.compactize_map = (function gadjett$collections$compactize_map(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.second),m));
}); return (
new cljs.core.Var(function(){return gadjett.collections.compactize_map;},new cljs.core.Symbol("gadjett.collections","compactize-map","gadjett.collections/compactize-map",(-2086716581),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"compactize-map","compactize-map",(-1106252977),null),"gadjett/collections.cljc",(21),(1),(195),(195),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),"Removes entries with `nil` values.\n\n~~~klipse\n  (compactize-map {:a 1 :b nil :c 3})\n~~~\n  ",(cljs.core.truth_(gadjett.collections.compactize_map)?gadjett.collections.compactize_map.cljs$lang$test:null)])));})()
;
/**
 * Run a function on the elements of a map and keep only those elements for which the function returns true
 *   
 * ~~~klipse
 *   (filter-map even? {:a 1 :b 2 :c 3})
 * ~~~
 *   
 */
(function (){
gadjett.collections.filter_map = (function gadjett$collections$filter_map(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,f,cljs.core.val),m));
}); return (
new cljs.core.Var(function(){return gadjett.collections.filter_map;},new cljs.core.Symbol("gadjett.collections","filter-map","gadjett.collections/filter-map",(949316786),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"filter-map","filter-map",(1325743270),null),"gadjett/collections.cljc",(17),(1),(205),(205),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),"Run a function on the elements of a map and keep only those elements for which the function returns true\n  \n~~~klipse\n  (filter-map even? {:a 1 :b 2 :c 3})\n~~~\n  ",(cljs.core.truth_(gadjett.collections.filter_map)?gadjett.collections.filter_map.cljs$lang$test:null)])));})()
;
/**
 * Absolute value of a number
 * 
 * ~~~klipse
 *   (map abs (range -5 5))
 * ~~~
 */
(function (){
gadjett.collections.abs = (function gadjett$collections$abs(x){
var x__21615__auto__ = x;
var y__21616__auto__ = (- x);
return ((x__21615__auto__ > y__21616__auto__) ? x__21615__auto__ : y__21616__auto__);
}); return (
new cljs.core.Var(function(){return gadjett.collections.abs;},new cljs.core.Symbol("gadjett.collections","abs","gadjett.collections/abs",(-2018630322),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"abs","abs",(1394505050),null),"gadjett/collections.cljc",(10),(1),(215),(215),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Absolute value of a number\n\n~~~klipse\n  (map abs (range -5 5))\n~~~\n\n",(cljs.core.truth_(gadjett.collections.abs)?gadjett.collections.abs.cljs$lang$test:null)])));})()
;
/**
 * Returns the nearest number to `x` of a sorted set
 * 
 * ~~~klipse
 *   (nearest-of-ss (apply sorted-set (range 5)) 1.2)
 * ~~~
 *   
 */
(function (){
gadjett.collections.nearest_of_ss = (function gadjett$collections$nearest_of_ss(ss,x){
var greater = cljs.core.first.call(null,cljs.core.subseq.call(null,ss,cljs.core._GT__EQ_,x));
var smaller = cljs.core.first.call(null,cljs.core.rsubseq.call(null,ss,cljs.core._LT__EQ_,x));
return cljs.core.apply.call(null,cljs.core.min_key,((function (greater,smaller){
return (function (p1__4_SHARP_){
return gadjett.collections.abs.call(null,(p1__4_SHARP_ - x));
});})(greater,smaller))
,cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [greater,smaller], null)));
}); return (
new cljs.core.Var(function(){return gadjett.collections.nearest_of_ss;},new cljs.core.Symbol("gadjett.collections","nearest-of-ss","gadjett.collections/nearest-of-ss",(-2045772246),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"nearest-of-ss","nearest-of-ss",(-224416226),null),"gadjett/collections.cljc",(20),(1),(226),(226),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ss","ss",(177481949),null),new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Returns the nearest number to `x` of a sorted set\n\n~~~klipse\n  (nearest-of-ss (apply sorted-set (range 5)) 1.2)\n~~~\n  ",(cljs.core.truth_(gadjett.collections.nearest_of_ss)?gadjett.collections.nearest_of_ss.cljs$lang$test:null)])));})()
;
/**
 * Maps each element of `b` to its nearest element in `a`.
 *   If `a` is empty, returns `b`.
 * 
 * ~~~klipse
 *   (nearest-of-seq (range 5) [1.2 3.4 4])
 * ~~~
 *   
 */
(function (){
gadjett.collections.nearest_of_seq = (function gadjett$collections$nearest_of_seq(a,b){
if(cljs.core.empty_QMARK_.call(null,a)){
return b;
} else {
return cljs.core.map.call(null,cljs.core.partial.call(null,gadjett.collections.nearest_of_ss,cljs.core.apply.call(null,cljs.core.sorted_set,a)),b);
}
}); return (
new cljs.core.Var(function(){return gadjett.collections.nearest_of_seq;},new cljs.core.Symbol("gadjett.collections","nearest-of-seq","gadjett.collections/nearest-of-seq",(1165580360),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"nearest-of-seq","nearest-of-seq",(1758914740),null),"gadjett/collections.cljc",(21),(1),(238),(238),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null)], null)),"Maps each element of `b` to its nearest element in `a`.\n  If `a` is empty, returns `b`.\n\n~~~klipse\n  (nearest-of-seq (range 5) [1.2 3.4 4])\n~~~\n  ",(cljs.core.truth_(gadjett.collections.nearest_of_seq)?gadjett.collections.nearest_of_seq.cljs$lang$test:null)])));})()
;
/**
 * Returns a map whose keys are the elements of `lst` and values are mapped by `f`.
 * 
 * ~~~klipse
 *   (map-to-object inc (range 5))
 * ~~~
 *   
 */
(function (){
gadjett.collections.map_to_object = (function gadjett$collections$map_to_object(f,lst){
return cljs.core.zipmap.call(null,lst,cljs.core.map.call(null,f,lst));
}); return (
new cljs.core.Var(function(){return gadjett.collections.map_to_object;},new cljs.core.Symbol("gadjett.collections","map-to-object","gadjett.collections/map-to-object",(1940922840),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"map-to-object","map-to-object",(-1493044788),null),"gadjett/collections.cljc",(20),(1),(251),(251),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"lst","lst",(1910277514),null)], null)),"Returns a map whose keys are the elements of `lst` and values are mapped by `f`.\n\n~~~klipse\n  (map-to-object inc (range 5))\n~~~\n  ",(cljs.core.truth_(gadjett.collections.map_to_object)?gadjett.collections.map_to_object.cljs$lang$test:null)])));})()
;
/**
 * 
 *   Takes a seq, and returns a map where the keys are the result of applying f to the elements in the seq.
 *   The result of f should be unique for each element in the seq, otherwise you will loose some data.
 *   If it is not unique, consider using [group-by](https://clojuredocs.org/clojure.core/group-by).
 * 
 * ~~~klipse
 *   (mapify inc (range 5) )
 * ~~~
 *   
 */
(function (){
gadjett.collections.mapify = (function gadjett$collections$mapify(f,s){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,f,s),s);
}); return (
new cljs.core.Var(function(){return gadjett.collections.mapify;},new cljs.core.Symbol("gadjett.collections","mapify","gadjett.collections/mapify",(847178807),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"mapify","mapify",(520166435),null),"gadjett/collections.cljc",(13),(1),(261),(261),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),"\n  Takes a seq, and returns a map where the keys are the result of applying f to the elements in the seq.\n  The result of f should be unique for each element in the seq, otherwise you will loose some data.\n  If it is not unique, consider using [group-by](https://clojuredocs.org/clojure.core/group-by).\n\n~~~klipse\n  (mapify inc (range 5) )\n~~~\n  ",(cljs.core.truth_(gadjett.collections.mapify)?gadjett.collections.mapify.cljs$lang$test:null)])));})()
;
/**
 * Maps a sequence to a sequence of maps with index and value
 * 
 * ~~~klipse
 *    (map-with-index [10 20 30] :idx :val)
 * ~~~
 *   
 */
(function (){
gadjett.collections.map_with_index = (function gadjett$collections$map_with_index(s,idx_key,val_key){
return cljs.core.map_indexed.call(null,(function (i,v){
return cljs.core.PersistentArrayMap.fromArray([val_key,v,idx_key,i], true, false);
}),s);
}); return (
new cljs.core.Var(function(){return gadjett.collections.map_with_index;},new cljs.core.Symbol("gadjett.collections","map-with-index","gadjett.collections/map-with-index",(178833574),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"map-with-index","map-with-index",(-46458734),null),"gadjett/collections.cljc",(21),(1),(274),(274),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null),new cljs.core.Symbol(null,"idx-key","idx-key",(-802495595),null),new cljs.core.Symbol(null,"val-key","val-key",(-1518855444),null)], null)),"Maps a sequence to a sequence of maps with index and value\n\n~~~klipse\n      (map-with-index [10 20 30] :idx :val)\n~~~\n  ",(cljs.core.truth_(gadjett.collections.map_with_index)?gadjett.collections.map_with_index.cljs$lang$test:null)])));})()
;
/**
 * Dissociates an entry from a nested associative structure returning a new nested structure. `keys` is a sequence of keys. Any empty maps that result will not be present in the new structure. See [assoc-in](https://clojuredocs.org/clojure.core/assoc-in)
 * 
 * ~~~klipse
 *   (dissoc-in {:a 1 :b 2} [:b])
 * ~~~
 * 
 * ~~~klipse
 *   (dissoc-in {:a {:b 2 :B 3} :c 3} [:a :b])
 * ~~~
 * 
 * ~~~klipse
 *   (dissoc-in {:a {:b 2} :c 3} [:a :b])
 * ~~~
 *   
 */
(function (){
gadjett.collections.dissoc_in = (function gadjett$collections$dissoc_in(m,p__213){
var vec__217 = p__213;
var seq__218 = cljs.core.seq.call(null,vec__217);
var first__219 = cljs.core.first.call(null,seq__218);
var seq__218__$1 = cljs.core.next.call(null,seq__218);
var k = first__219;
var ks = seq__218__$1;
var keys = vec__217;
if(ks){
var temp__19520__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__19520__auto__)){
var nextmap = temp__19520__auto__;
var newmap = gadjett.collections.dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
}); return (
new cljs.core.Var(function(){return gadjett.collections.dissoc_in;},new cljs.core.Symbol("gadjett.collections","dissoc-in","gadjett.collections/dissoc-in",(-2041382091),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"dissoc-in","dissoc-in",(-249353279),null),"gadjett/collections.cljc",(16),(1),(284),(284),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"ks","ks",(-754231827),null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"keys","keys",(-1586012071),null)], null)], null)),"Dissociates an entry from a nested associative structure returning a new nested structure. `keys` is a sequence of keys. Any empty maps that result will not be present in the new structure. See [assoc-in](https://clojuredocs.org/clojure.core/assoc-in)\n\n~~~klipse\n  (dissoc-in {:a 1 :b 2} [:b])\n~~~\n\n~~~klipse\n  (dissoc-in {:a {:b 2 :B 3} :c 3} [:a :b])\n~~~\n\n~~~klipse\n  (dissoc-in {:a {:b 2} :c 3} [:a :b])\n~~~\n  ",(cljs.core.truth_(gadjett.collections.dissoc_in)?gadjett.collections.dissoc_in.cljs$lang$test:null)])));})()
;
/**
 * Receives a collection of lengths and returns a list of start and end positions. Options:
 *   * `max-val`: (default `infinity`) - max value for `end`
 *   * `first-val`: (default 0) - first value of `start`
 * 
 * ~~~klipse
 *   (positions '(10 10 20) :first-val 100 :max-val 137)
 * ~~~
 * 
 *   
 */
(function (){
gadjett.collections.positions = (function gadjett$collections$positions(var_args){
var args__23658__auto__ = [];
var len__23656__auto___225 = arguments.length;
var i__23657__auto___226 = (0);
while(true){
if((i__23657__auto___226 < len__23656__auto___225)){
args__23658__auto__.push((arguments[i__23657__auto___226]));

var G__227 = (i__23657__auto___226 + (1));
i__23657__auto___226 = G__227;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((1) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((1)),(0),null)):null);
return gadjett.collections.positions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return gadjett.collections.positions;},new cljs.core.Symbol("gadjett.collections","positions","gadjett.collections/positions",(1003552281),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"positions","positions",(259993093),null),"gadjett/collections.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"coll-of-lengths","coll-of-lengths",(-437293091),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"first-val","first-val",(-804510895),null),(0),new cljs.core.Symbol(null,"max-val","max-val",(148283643),null),new cljs.core.Symbol(null,"infinity","infinity",(1534604680),null)], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"max-val","max-val",(148283643),null),new cljs.core.Symbol(null,"first-val","first-val",(-804510895),null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll-of-lengths","coll-of-lengths",(-437293091),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"first-val","first-val",(-804510895),null),(0),new cljs.core.Symbol(null,"max-val","max-val",(148283643),null),new cljs.core.Symbol(null,"infinity","infinity",(1534604680),null)], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"max-val","max-val",(148283643),null),new cljs.core.Symbol(null,"first-val","first-val",(-804510895),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(309),(309),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll-of-lengths","coll-of-lengths",(-437293091),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"first-val","first-val",(-804510895),null),(0),new cljs.core.Symbol(null,"max-val","max-val",(148283643),null),new cljs.core.Symbol(null,"infinity","infinity",(1534604680),null)], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"max-val","max-val",(148283643),null),new cljs.core.Symbol(null,"first-val","first-val",(-804510895),null)], null)], null)], null)),"Receives a collection of lengths and returns a list of start and end positions. Options:\n  * `max-val`: (default `infinity`) - max value for `end`\n  * `first-val`: (default 0) - first value of `start`\n\n~~~klipse\n  (positions '(10 10 20) :first-val 100 :max-val 137)\n~~~\n\n  ",(cljs.core.truth_(gadjett.collections.positions)?gadjett.collections.positions.cljs$lang$test:null)])));})()
;

gadjett.collections.positions.cljs$core$IFn$_invoke$arity$variadic = (function (coll_of_lengths,p__222){
var map__223 = p__222;
var map__223__$1 = ((((!((map__223 == null)))?((((map__223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__223):map__223);
var first_val = cljs.core.get.call(null,map__223__$1,new cljs.core.Keyword(null,"first-val","first-val",(1849924874)),(0));
var max_val = cljs.core.get.call(null,map__223__$1,new cljs.core.Keyword(null,"max-val","max-val",(-1492247884)),gadjett.collections.infinity);
var end_pos = cljs.core.rest.call(null,cljs.core.reductions.call(null,cljs.core._PLUS_,first_val,coll_of_lengths));
var start_pos = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_val], null),end_pos);
return cljs.core.map.call(null,((function (end_pos,start_pos,map__223,map__223__$1,first_val,max_val){
return (function (p1__5_SHARP_,p2__6_SHARP_){
var x__23399__auto__ = (function (){var x__21649__auto__ = max_val;
var y__21650__auto__ = p1__5_SHARP_;
return ((x__21649__auto__ < y__21650__auto__) ? x__21649__auto__ : y__21650__auto__);
})();
return cljs.core._conj.call(null,(function (){var x__23399__auto____$1 = (function (){var x__21649__auto__ = max_val;
var y__21650__auto__ = p2__6_SHARP_;
return ((x__21649__auto__ < y__21650__auto__) ? x__21649__auto__ : y__21650__auto__);
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto____$1);
})(),x__23399__auto__);
});})(end_pos,start_pos,map__223,map__223__$1,first_val,max_val))
,start_pos,end_pos);
});

gadjett.collections.positions.cljs$lang$maxFixedArity = (1);

gadjett.collections.positions.cljs$lang$applyTo = (function (seq220){
var G__221 = cljs.core.first.call(null,seq220);
var seq220__$1 = cljs.core.next.call(null,seq220);
return gadjett.collections.positions.cljs$core$IFn$_invoke$arity$variadic(G__221,seq220__$1);
});

new cljs.core.Var(function(){return gadjett.collections.positions;},new cljs.core.Symbol("gadjett.collections","positions","gadjett.collections/positions",(1003552281),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"positions","positions",(259993093),null),"gadjett/collections.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"coll-of-lengths","coll-of-lengths",(-437293091),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"first-val","first-val",(-804510895),null),(0),new cljs.core.Symbol(null,"max-val","max-val",(148283643),null),new cljs.core.Symbol(null,"infinity","infinity",(1534604680),null)], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"max-val","max-val",(148283643),null),new cljs.core.Symbol(null,"first-val","first-val",(-804510895),null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll-of-lengths","coll-of-lengths",(-437293091),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"first-val","first-val",(-804510895),null),(0),new cljs.core.Symbol(null,"max-val","max-val",(148283643),null),new cljs.core.Symbol(null,"infinity","infinity",(1534604680),null)], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"max-val","max-val",(148283643),null),new cljs.core.Symbol(null,"first-val","first-val",(-804510895),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(309),(309),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll-of-lengths","coll-of-lengths",(-437293091),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"first-val","first-val",(-804510895),null),(0),new cljs.core.Symbol(null,"max-val","max-val",(148283643),null),new cljs.core.Symbol(null,"infinity","infinity",(1534604680),null)], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"max-val","max-val",(148283643),null),new cljs.core.Symbol(null,"first-val","first-val",(-804510895),null)], null)], null)], null)),"Receives a collection of lengths and returns a list of start and end positions. Options:\n  * `max-val`: (default `infinity`) - max value for `end`\n  * `first-val`: (default 0) - first value of `start`\n\n~~~klipse\n  (positions '(10 10 20) :first-val 100 :max-val 137)\n~~~\n\n  ",(cljs.core.truth_(gadjett.collections.positions)?gadjett.collections.positions.cljs$lang$test:null)]));
/**
 * Splits a collection to items where the separator is a repetition of at least n elements that satisfy `pred`.
 * 
 *   Inspired by: [this question](http://stackoverflow.com/a/23555616/813665).
 * 
 * ~~~klipse
 *   (split-by-predicate (shuffle (range 30)) even? 2)
 * ~~~
 *   
 */
(function (){
gadjett.collections.split_by_predicate = (function gadjett$collections$split_by_predicate(coll,pred,n){
var part = cljs.core.partition_by.call(null,pred,coll);
var ppart = cljs.core.partition_by.call(null,((function (part){
return (function (x){
return ((cljs.core.count.call(null,x) >= n)) && (cljs.core.every_QMARK_.call(null,pred,x));
});})(part))
,part);
return cljs.core.map.call(null,((function (part,ppart){
return (function (p1__7_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__7_SHARP_);
});})(part,ppart))
,ppart);
}); return (
new cljs.core.Var(function(){return gadjett.collections.split_by_predicate;},new cljs.core.Symbol("gadjett.collections","split-by-predicate","gadjett.collections/split-by-predicate",(-342635531),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"split-by-predicate","split-by-predicate",(-1090356263),null),"gadjett/collections.cljc",(25),(1),(324),(324),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Splits a collection to items where the separator is a repetition of at least n elements that satisfy `pred`.\n\n  Inspired by: [this question](http://stackoverflow.com/a/23555616/813665).\n\n~~~klipse\n  (split-by-predicate (shuffle (range 30)) even? 2)\n~~~\n  ",(cljs.core.truth_(gadjett.collections.split_by_predicate)?gadjett.collections.split_by_predicate.cljs$lang$test:null)])));})()
;
/**
 * 
 *   Optimized version of `split-by-predicate` where we assume that the data is from a signal that we can sample.
 * 
 *   Instead of checking each element, we check 1 over `n` elements.
 * 
 *  We return the positions where the data splits.
 * 
 * ~~~klipse
 *   (let [data (map Math/sin (range 0 6.28 0.001))]
 *  (split-by-predicate-positions data #(<= -0.01 % 0.01) 2 10))
 * ~~~
 * 
 *   The following assertion holds:
 * 
 * ~~~clojure
 *   (= (split-by-predicate coll pred n)
 *   (map #(apply subsequence data %) (split-by-predicate-positions coll pred n 1)))
 * ~~~
 * 
 *   Here is an example:
 * 
 * ~~~klipse
 *   (let [data (map Math/sin (range 0 6.28 0.01))]
 *  (= (split-by-predicate data #(<= -0.01 % 0.01) 2)
 *     (map #(apply subsequence data %) (split-by-predicate-positions data #(<= -0.01 % 0.01) 2 1))))
 * ~~~
 *   
 */
(function (){
gadjett.collections.split_by_predicate_positions = (function gadjett$collections$split_by_predicate_positions(coll,pred,n,d){
var lengths = cljs.core.map.call(null,(function (p1__8_SHARP_){
return (d * p1__8_SHARP_);
}),cljs.core.map.call(null,cljs.core.count,gadjett.collections.split_by_predicate.call(null,cljs.core.take_nth.call(null,d,coll),pred,(n / d))));
var pos = gadjett.collections.positions.call(null,lengths,new cljs.core.Keyword(null,"max-val","max-val",(-1492247884)),cljs.core.count.call(null,coll));
return pos;
}); return (
new cljs.core.Var(function(){return gadjett.collections.split_by_predicate_positions;},new cljs.core.Symbol("gadjett.collections","split-by-predicate-positions","gadjett.collections/split-by-predicate-positions",(-471030730),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"split-by-predicate-positions","split-by-predicate-positions",(930935842),null),"gadjett/collections.cljc",(35),(1),(340),(340),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"d","d",(-682293345),null)], null)),"\n  Optimized version of `split-by-predicate` where we assume that the data is from a signal that we can sample.\n\n  Instead of checking each element, we check 1 over `n` elements.\n\n We return the positions where the data splits.\n\n~~~klipse\n  (let [data (map Math/sin (range 0 6.28 0.001))]\n    (split-by-predicate-positions data #(<= -0.01 % 0.01) 2 10))\n~~~\n\n  The following assertion holds:\n\n~~~clojure\n  (= (split-by-predicate coll pred n)\n     (map #(apply subsequence data %) (split-by-predicate-positions coll pred n 1)))\n~~~\n\n  Here is an example:\n\n~~~klipse\n  (let [data (map Math/sin (range 0 6.28 0.01))]\n    (= (split-by-predicate data #(<= -0.01 % 0.01) 2)\n       (map #(apply subsequence data %) (split-by-predicate-positions data #(<= -0.01 % 0.01) 2 1))))\n~~~\n  ",(cljs.core.truth_(gadjett.collections.split_by_predicate_positions)?gadjett.collections.split_by_predicate_positions.cljs$lang$test:null)])));})()
;
/**
 * Checks if `m1` is a submap of `m2`.
 *   Map `m1` is a submap of `m2` if all key/value pairs in `m1` exist in `m2`.
 * 
 * ~~~klipse
 *   (submap? {:a 1} {:a 1 :b 2})
 * ~~~
 * 
 * ~~~klipse
 *   (submap? {:a 1} {:a 1 :b 2 :c nil})
 * ~~~
 *   
 */
(function (){
gadjett.collections.submap_QMARK_ = (function gadjett$collections$submap_QMARK_(m1,m2){
return cljs.core._EQ_.call(null,m1,cljs.core.select_keys.call(null,m2,cljs.core.keys.call(null,m1)));
}); return (
new cljs.core.Var(function(){return gadjett.collections.submap_QMARK_;},new cljs.core.Symbol("gadjett.collections","submap?","gadjett.collections/submap?",(389285456),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"submap?","submap?",(-73140668),null),"gadjett/collections.cljc",(14),(1),(373),(373),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m1","m1",(1532436901),null),new cljs.core.Symbol(null,"m2","m2",(1053528221),null)], null)),"Checks if `m1` is a submap of `m2`.\n  Map `m1` is a submap of `m2` if all key/value pairs in `m1` exist in `m2`.\n\n~~~klipse\n  (submap? {:a 1} {:a 1 :b 2})\n~~~\n\n~~~klipse\n  (submap? {:a 1} {:a 1 :b 2 :c nil})\n~~~\n  ",(cljs.core.truth_(gadjett.collections.submap_QMARK_)?gadjett.collections.submap_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * 
 *   Returns a lazy subsequence of `coll`, starting at `start, ending at `end` (not included).
 * 
 * ~~~klipse
 *   (subsequence (range) 10 20)
 * ~~~
 *   
 */
(function (){
gadjett.collections.subsequence = (function gadjett$collections$subsequence(coll,start,end){
return cljs.core.take.call(null,(end - start),cljs.core.drop.call(null,start,coll));
}); return (
new cljs.core.Var(function(){return gadjett.collections.subsequence;},new cljs.core.Symbol("gadjett.collections","subsequence","gadjett.collections/subsequence",(-1278088292),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"subsequence","subsequence",(-429802520),null),"gadjett/collections.cljc",(18),(1),(388),(388),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"start","start",(1285322546),null),new cljs.core.Symbol(null,"end","end",(1372345569),null)], null)),"\n  Returns a lazy subsequence of `coll`, starting at `start, ending at `end` (not included).\n\n~~~klipse\n  (subsequence (range) 10 20)\n~~~\n  ",(cljs.core.truth_(gadjett.collections.subsequence)?gadjett.collections.subsequence.cljs$lang$test:null)])));})()
;
/**
 * Returns the index of an element in a sequence or `-1` if not present.
 * 
 *   ~~~klipse
 *   (index-of (range 100) 18)
 *   ~~~
 *   
 */
(function (){
gadjett.collections.index_of = (function gadjett$collections$index_of(s,element){
var or__20817__auto__ = cljs.core.ffirst.call(null,cljs.core.filter.call(null,(function (p1__9_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__9_SHARP_),element);
}),cljs.core.map_indexed.call(null,(function (p1__10_SHARP_,p2__11_SHARP_){
return (new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__10_SHARP_,p2__11_SHARP_],null));
}),s)));
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return (-1);
}
}); return (
new cljs.core.Var(function(){return gadjett.collections.index_of;},new cljs.core.Symbol("gadjett.collections","index-of","gadjett.collections/index-of",(2140956433),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"index-of","index-of",(1275975485),null),"gadjett/collections.cljc",(15),(1),(400),(400),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null),new cljs.core.Symbol(null,"element","element",(-680416020),null)], null)),"Returns the index of an element in a sequence or `-1` if not present.\n\n  ~~~klipse\n  (index-of (range 100) 18)\n  ~~~\n  ",(cljs.core.truth_(gadjett.collections.index_of)?gadjett.collections.index_of.cljs$lang$test:null)])));})()
;
(function (){
gadjett.collections.flatten_keys_STAR_ = (function gadjett$collections$flatten_keys_STAR_(a,ks,m){
if(cljs.core.map_QMARK_.call(null,m)){
if(cljs.core.seq.call(null,m)){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.map.call(null,(function (p__232){
var vec__233 = p__232;
var k = cljs.core.nth.call(null,vec__233,(0),null);
var v = cljs.core.nth.call(null,vec__233,(1),null);
return gadjett.collections.flatten_keys_STAR_.call(null,a,cljs.core.conj.call(null,ks,k),v);
}),cljs.core.seq.call(null,m)));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
} else {
return cljs.core.assoc.call(null,a,ks,m);
}
}); return (
new cljs.core.Var(function(){return gadjett.collections.flatten_keys_STAR_;},new cljs.core.Symbol("gadjett.collections","flatten-keys*","gadjett.collections/flatten-keys*",(-882000517),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"flatten-keys*","flatten-keys*",(-199365265),null),"gadjett/collections.cljc",(21),(1),(411),(411),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"ks","ks",(-754231827),null),new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),null,(cljs.core.truth_(gadjett.collections.flatten_keys_STAR_)?gadjett.collections.flatten_keys_STAR_.cljs$lang$test:null)])));})()
;
/**
 * 
 * Flatten the keys of a nested map.
 * Thanks to [Jay Fields](http://blog.jayfields.com/2010/09/clojure-flatten-keys.html)
 * 
 * ~~~klipse
 * (flatten-keys {:a {:b 1} :c {:d 2 :e 4 :f {:g 8}}})
 * ~~~
 */
(function (){
gadjett.collections.flatten_keys = (function gadjett$collections$flatten_keys(m){
return gadjett.collections.flatten_keys_STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,m);
}); return (
new cljs.core.Var(function(){return gadjett.collections.flatten_keys;},new cljs.core.Symbol("gadjett.collections","flatten-keys","gadjett.collections/flatten-keys",(-2000381254),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"flatten-keys","flatten-keys",(-596325714),null),"gadjett/collections.cljc",(19),(1),(418),(418),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),"\nFlatten the keys of a nested map.\nThanks to [Jay Fields](http://blog.jayfields.com/2010/09/clojure-flatten-keys.html)\n\n~~~klipse\n(flatten-keys {:a {:b 1} :c {:d 2 :e 4 :f {:g 8}}})\n~~~\n",(cljs.core.truth_(gadjett.collections.flatten_keys)?gadjett.collections.flatten_keys.cljs$lang$test:null)])));})()
;
/**
 * 
 *   Unflattend the keys of a map that has been `flatten-keys`ed.
 * 
 * ~~~klipse
 * (unflatten-keys {[:a :b] 1, [:c :d] 2, [:c :e] 4, [:c :f :g] 8})
 * ~~~
 */
(function (){
gadjett.collections.unflatten_keys = (function gadjett$collections$unflatten_keys(m){
return cljs.core.reduce_kv.call(null,(function (a,b,c){
return cljs.core.assoc_in.call(null,a,b,c);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}); return (
new cljs.core.Var(function(){return gadjett.collections.unflatten_keys;},new cljs.core.Symbol("gadjett.collections","unflatten-keys","gadjett.collections/unflatten-keys",(-22089924),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"unflatten-keys","unflatten-keys",(769548224),null),"gadjett/collections.cljc",(21),(1),(429),(429),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),"\n  Unflattend the keys of a map that has been `flatten-keys`ed.\n\n~~~klipse\n(unflatten-keys {[:a :b] 1, [:c :d] 2, [:c :e] 4, [:c :f :g] 8})\n~~~\n",(cljs.core.truth_(gadjett.collections.unflatten_keys)?gadjett.collections.unflatten_keys.cljs$lang$test:null)])));})()
;
/**
 * Creates a map with n leaves which are nested values of m.
 *   The following assertion holds:
 * 
 * ~~~clojure
 *    (>= n (count (flatten-keys (take-from-map n m)))))))
 * ~~~
 * 
 * ~~~klipse
 *   (take-from-map 3 {:a {:b 1}, :c {:e 4, :d 2, :f {:g 8}}})
 * ~~~
 *   
 */
(function (){
gadjett.collections.take_from_map = (function gadjett$collections$take_from_map(n,m){
return gadjett.collections.unflatten_keys.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.take.call(null,n,gadjett.collections.flatten_keys.call(null,m))));
}); return (
new cljs.core.Var(function(){return gadjett.collections.take_from_map;},new cljs.core.Symbol("gadjett.collections","take-from-map","gadjett.collections/take-from-map",(-1301725532),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"take-from-map","take-from-map",(1727614640),null),"gadjett/collections.cljc",(20),(1),(440),(440),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),"Creates a map with n leaves which are nested values of m.\n  The following assertion holds:\n\n~~~clojure\n      (>= n (count (flatten-keys (take-from-map n m)))))))\n~~~\n\n~~~klipse\n  (take-from-map 3 {:a {:b 1}, :c {:e 4, :d 2, :f {:g 8}}})\n~~~\n  ",(cljs.core.truth_(gadjett.collections.take_from_map)?gadjett.collections.take_from_map.cljs$lang$test:null)])));})()
;
(function (){
gadjett.collections.deep_merge_STAR_ = (function gadjett$collections$deep_merge_STAR_(var_args){
var args__23658__auto__ = [];
var len__23656__auto___237 = arguments.length;
var i__23657__auto___238 = (0);
while(true){
if((i__23657__auto___238 < len__23656__auto___237)){
args__23658__auto__.push((arguments[i__23657__auto___238]));

var G__239 = (i__23657__auto___238 + (1));
i__23657__auto___238 = G__239;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((0) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((0)),(0),null)):null);
return gadjett.collections.deep_merge_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return gadjett.collections.deep_merge_STAR_;},new cljs.core.Symbol("gadjett.collections","deep-merge*","gadjett.collections/deep-merge*",(-428500793),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"deep-merge*","deep-merge*",(853879091),null),"gadjett/collections.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"maps","maps",(-71029607),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"maps","maps",(-71029607),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(459),(459),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"maps","maps",(-71029607),null)], null)),null,(cljs.core.truth_(gadjett.collections.deep_merge_STAR_)?gadjett.collections.deep_merge_STAR_.cljs$lang$test:null)])));})()
;

gadjett.collections.deep_merge_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var f = (function (old,new$){
if((cljs.core.map_QMARK_.call(null,old)) && (cljs.core.map_QMARK_.call(null,new$))){
return cljs.core.merge_with.call(null,gadjett.collections.deep_merge_STAR_,old,new$);
} else {
return new$;
}
});
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps)){
return cljs.core.apply.call(null,cljs.core.merge_with,f,maps);
} else {
return cljs.core.last.call(null,maps);
}
});

gadjett.collections.deep_merge_STAR_.cljs$lang$maxFixedArity = (0);

gadjett.collections.deep_merge_STAR_.cljs$lang$applyTo = (function (seq236){
return gadjett.collections.deep_merge_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq236));
});

new cljs.core.Var(function(){return gadjett.collections.deep_merge_STAR_;},new cljs.core.Symbol("gadjett.collections","deep-merge*","gadjett.collections/deep-merge*",(-428500793),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"deep-merge*","deep-merge*",(853879091),null),"gadjett/collections.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"maps","maps",(-71029607),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"maps","maps",(-71029607),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(459),(459),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"maps","maps",(-71029607),null)], null)),null,(cljs.core.truth_(gadjett.collections.deep_merge_STAR_)?gadjett.collections.deep_merge_STAR_.cljs$lang$test:null)]));
/**
 *  Deep merges maps.
 * 
 * ~~~klipse
 * (deep-merge {} {:a {:b 1}, :c {:e 4, :d 2, :f {:g 8}}} {:a {:b 1}, :c {:e 4, :d 2000, :f {:g 9000}}})
 * ~~~
 */
(function (){
gadjett.collections.deep_merge = (function gadjett$collections$deep_merge(var_args){
var args__23658__auto__ = [];
var len__23656__auto___241 = arguments.length;
var i__23657__auto___242 = (0);
while(true){
if((i__23657__auto___242 < len__23656__auto___241)){
args__23658__auto__.push((arguments[i__23657__auto___242]));

var G__243 = (i__23657__auto___242 + (1));
i__23657__auto___242 = G__243;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((0) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((0)),(0),null)):null);
return gadjett.collections.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return gadjett.collections.deep_merge;},new cljs.core.Symbol("gadjett.collections","deep-merge","gadjett.collections/deep-merge",(385725112),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"deep-merge","deep-merge",(1162633900),null),"gadjett/collections.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"maps","maps",(-71029607),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"maps","maps",(-71029607),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(468),(468),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"maps","maps",(-71029607),null)], null))," Deep merges maps.\n\n~~~klipse\n(deep-merge {} {:a {:b 1}, :c {:e 4, :d 2, :f {:g 8}}} {:a {:b 1}, :c {:e 4, :d 2000, :f {:g 9000}}})\n~~~\n",(cljs.core.truth_(gadjett.collections.deep_merge)?gadjett.collections.deep_merge.cljs$lang$test:null)])));})()
;

gadjett.collections.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var maps__$1 = cljs.core.filter.call(null,cljs.core.identity,maps);
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps__$1)){
} else {
throw (new Error("Assert failed: (every? map? maps)"));
}

return cljs.core.apply.call(null,cljs.core.merge_with,gadjett.collections.deep_merge_STAR_,maps__$1);
});

gadjett.collections.deep_merge.cljs$lang$maxFixedArity = (0);

gadjett.collections.deep_merge.cljs$lang$applyTo = (function (seq240){
return gadjett.collections.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq240));
});

new cljs.core.Var(function(){return gadjett.collections.deep_merge;},new cljs.core.Symbol("gadjett.collections","deep-merge","gadjett.collections/deep-merge",(385725112),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"deep-merge","deep-merge",(1162633900),null),"gadjett/collections.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"maps","maps",(-71029607),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"maps","maps",(-71029607),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(468),(468),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"maps","maps",(-71029607),null)], null))," Deep merges maps.\n\n~~~klipse\n(deep-merge {} {:a {:b 1}, :c {:e 4, :d 2, :f {:g 8}}} {:a {:b 1}, :c {:e 4, :d 2000, :f {:g 9000}}})\n~~~\n",(cljs.core.truth_(gadjett.collections.deep_merge)?gadjett.collections.deep_merge.cljs$lang$test:null)]));
/**
 * Returns all branches and leaves off a nested map object.
 * 
 * ~~~klipse
 * (branches-and-leaves {:a {:b 1 :c {:d 2}} :e 3})
 * ~~~
 *   
 */
(function (){
gadjett.collections.branches_and_leaves = (function gadjett$collections$branches_and_leaves(m){
var $ = cljs.core.tree_seq.call(null,cljs.core.coll_QMARK_,(function (p1__12_SHARP_){
if(cljs.core.map_QMARK_.call(null,p1__12_SHARP_)){
return cljs.core.vals.call(null,p1__12_SHARP_);
} else {
return p1__12_SHARP_;
}
}),m);
var $__$1 = cljs.core.group_by.call(null,cljs.core.coll_QMARK_,$);
var $__$2 = cljs.core.assoc.call(null,$__$1,true,(function (){var or__20817__auto__ = cljs.core.get.call(null,$__$1,true);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var $__$3 = cljs.core.assoc.call(null,$__$2,false,(function (){var or__20817__auto__ = cljs.core.get.call(null,$__$2,false);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var $__$4 = clojure.set.rename_keys.call(null,$__$3,new cljs.core.PersistentArrayMap(null, 2, [true,new cljs.core.Keyword(null,"branches","branches",(-1240337268)),false,new cljs.core.Keyword(null,"leaves","leaves",(-2143630574))], null));
return $__$4;
}); return (
new cljs.core.Var(function(){return gadjett.collections.branches_and_leaves;},new cljs.core.Symbol("gadjett.collections","branches-and-leaves","gadjett.collections/branches-and-leaves",(-2001136615),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"branches-and-leaves","branches-and-leaves",(-1526086411),null),"gadjett/collections.cljc",(26),(1),(480),(480),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),"Returns all branches and leaves off a nested map object.\n\n~~~klipse\n(branches-and-leaves {:a {:b 1 :c {:d 2}} :e 3})\n~~~\n  ",(cljs.core.truth_(gadjett.collections.branches_and_leaves)?gadjett.collections.branches_and_leaves.cljs$lang$test:null)])));})()
;
/**
 * Filters branches of a (nested) map `m` according to a predicate `m`.
 * 
 * ~~~klipse
 * (filter-branches {:x {:id 19 :b 1 :c {:id 2}} :e 3} :id)
 * ~~~
 *   
 */
(function (){
gadjett.collections.filter_branches = (function gadjett$collections$filter_branches(m,p){
return cljs.core.filter.call(null,p,new cljs.core.Keyword(null,"branches","branches",(-1240337268)).cljs$core$IFn$_invoke$arity$1(gadjett.collections.branches_and_leaves.call(null,m)));
}); return (
new cljs.core.Var(function(){return gadjett.collections.filter_branches;},new cljs.core.Symbol("gadjett.collections","filter-branches","gadjett.collections/filter-branches",(358039875),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"filter-branches","filter-branches",(1724322231),null),"gadjett/collections.cljc",(22),(1),(494),(494),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"p","p",(1791580836),null)], null)),"Filters branches of a (nested) map `m` according to a predicate `m`.\n\n~~~klipse\n(filter-branches {:x {:id 19 :b 1 :c {:id 2}} :e 3} :id)\n~~~\n  ",(cljs.core.truth_(gadjett.collections.filter_branches)?gadjett.collections.filter_branches.cljs$lang$test:null)])));})()
;
/**
 * Checks if index `idx` is in range of vector `v`. More efficient than `(get v idx)`
 * 
 * ~~~klipse
 *  (map #(out-of-bound? [1 2 3] %) [-1 0 1 2 3 4])
 * ~~~
 *   
 */
(function (){
gadjett.collections.out_of_bound_QMARK_ = (function gadjett$collections$out_of_bound_QMARK_(v,idx){
return ((cljs.core.count.call(null,v) <= idx)) || (((0) > idx));
}); return (
new cljs.core.Var(function(){return gadjett.collections.out_of_bound_QMARK_;},new cljs.core.Symbol("gadjett.collections","out-of-bound?","gadjett.collections/out-of-bound?",(-1315216307),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"out-of-bound?","out-of-bound?",(-318000007),null),"gadjett/collections.cljc",(20),(1),(506),(506),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"idx","idx",(-1600747296),null)], null)),"Checks if index `idx` is in range of vector `v`. More efficient than `(get v idx)`\n\n~~~klipse\n    (map #(out-of-bound? [1 2 3] %) [-1 0 1 2 3 4])\n~~~\n  ",(cljs.core.truth_(gadjett.collections.out_of_bound_QMARK_)?gadjett.collections.out_of_bound_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Splits a collection between two items according to predicate `pred` - which means split the sequence on breaking point.
 * 
 *   See: [here](http://stackoverflow.com/questions/23207490/partition-a-seq-by-a-windowing-predicate-in-clojure)
 * 
 *   For instance, split each time the series stop being ascending:
 * 
 * ~~~klipse
 * (partition-between > [1 2 4 9 8 7 6 5 1 2 4 5 11])
 * ~~~
 */
(function (){
gadjett.collections.partition_between = (function gadjett$collections$partition_between(pred,coll){
var switch$ = cljs.core.reductions.call(null,cljs.core.not_EQ_,true,cljs.core.map.call(null,pred,coll,cljs.core.rest.call(null,coll)));
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.first),cljs.core.partition_by.call(null,cljs.core.second,cljs.core.map.call(null,cljs.core.list,coll,switch$)));
}); return (
new cljs.core.Var(function(){return gadjett.collections.partition_between;},new cljs.core.Symbol("gadjett.collections","partition-between","gadjett.collections/partition-between",(1475395204),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"partition-between","partition-between",(54578832),null),"gadjett/collections.cljc",(24),(1),(516),(516),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Splits a collection between two items according to predicate `pred` - which means split the sequence on breaking point.\n\n  See: [here](http://stackoverflow.com/questions/23207490/partition-a-seq-by-a-windowing-predicate-in-clojure)\n\n  For instance, split each time the series stop being ascending:\n\n~~~klipse\n(partition-between > [1 2 4 9 8 7 6 5 1 2 4 5 11])\n~~~\n",(cljs.core.truth_(gadjett.collections.partition_between)?gadjett.collections.partition_between.cljs$lang$test:null)])));})()
;
/**
 * Ensure `s` is a collection: if `s` is a collection returns it; otherwise returns (s)
 * 
 * ~~~klipse
 * (collify 1)
 * ~~~
 * 
 * ~~~klipse
 * (collify [1 2 3])
 * ~~~
 *   
 */
(function (){
gadjett.collections.collify = (function gadjett$collections$collify(s){
if(cljs.core.coll_QMARK_.call(null,s)){
return s;
} else {
var x__23399__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
}
}); return (
new cljs.core.Var(function(){return gadjett.collections.collify;},new cljs.core.Symbol("gadjett.collections","collify","gadjett.collections/collify",(-1459444472),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"collify","collify",(-560794308),null),"gadjett/collections.cljc",(14),(1),(532),(532),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),"Ensure `s` is a collection: if `s` is a collection returns it; otherwise returns (s)\n\n~~~klipse\n(collify 1)\n~~~\n\n~~~klipse\n(collify [1 2 3])\n~~~\n  ",(cljs.core.truth_(gadjett.collections.collify)?gadjett.collections.collify.cljs$lang$test:null)])));})()
;
/**
 * A zipper for `edn`.
 * 
 * ~~~klipse
 *   (edn-zip {:a {:b 1}, :c {:e 4, :d 2, :f {:g 8}}})
 * ~~~
 *   
 */
(function (){
gadjett.collections.edn_zip = (function gadjett$collections$edn_zip(root){
return clojure.zip.zipper.call(null,(function (p1__13_SHARP_){
return (cljs.core.vector_QMARK_.call(null,p1__13_SHARP_)) || (cljs.core.map_QMARK_.call(null,p1__13_SHARP_)) || (cljs.core.seq_QMARK_.call(null,p1__13_SHARP_));
}),(function (node){
if(cljs.core.vector_QMARK_.call(null,node)){
return cljs.core.vec.call(null,node);
} else {
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.vec.call(null,node);
} else {
if(cljs.core.seq_QMARK_.call(null,node)){
return cljs.core.seq.call(null,node);
} else {
return null;
}
}
}
}),(function (node,children){
return cljs.core.with_meta.call(null,((cljs.core.vector_QMARK_.call(null,node))?cljs.core.vec.call(null,children):((cljs.core.map_QMARK_.call(null,node))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_.call(null,node))?children:null))),cljs.core.meta.call(null,node));
}),root);
}); return (
new cljs.core.Var(function(){return gadjett.collections.edn_zip;},new cljs.core.Symbol("gadjett.collections","edn-zip","gadjett.collections/edn-zip",(-452899515),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"edn-zip","edn-zip",(-779018839),null),"gadjett/collections.cljc",(14),(1),(546),(546),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root","root",(1191874074),null)], null)),"A zipper for `edn`.\n\n~~~klipse\n  (edn-zip {:a {:b 1}, :c {:e 4, :d 2, :f {:g 8}}})\n~~~\n  ",(cljs.core.truth_(gadjett.collections.edn_zip)?gadjett.collections.edn_zip.cljs$lang$test:null)])));})()
;
(function (){
gadjett.collections.loc_my_replace = (function gadjett$collections$loc_my_replace(smap,loc){
var temp__19520__auto__ = cljs.core.find.call(null,smap,clojure.zip.node.call(null,loc));
if(cljs.core.truth_(temp__19520__auto__)){
var vec__250 = temp__19520__auto__;
var _ = cljs.core.nth.call(null,vec__250,(0),null);
var vec__253 = cljs.core.nth.call(null,vec__250,(1),null);
var seq__254 = cljs.core.seq.call(null,vec__253);
var first__255 = cljs.core.first.call(null,seq__254);
var seq__254__$1 = cljs.core.next.call(null,seq__254);
var replacement = first__255;
var values = seq__254__$1;
var $ = loc;
var $__$1 = clojure.zip.replace.call(null,$,replacement);
var $__$2 = cljs.core.reduce.call(null,((function ($,$__$1,vec__250,_,vec__253,seq__254,first__255,seq__254__$1,replacement,values,temp__19520__auto__){
return (function (agg,v){
return clojure.zip.insert_right.call(null,agg,v);
});})($,$__$1,vec__250,_,vec__253,seq__254,first__255,seq__254__$1,replacement,values,temp__19520__auto__))
,$__$1,cljs.core.reverse.call(null,values));
return $__$2;
} else {
return loc;
}
}); return (
new cljs.core.Var(function(){return gadjett.collections.loc_my_replace;},new cljs.core.Symbol("gadjett.collections","loc-my-replace","gadjett.collections/loc-my-replace",(1586717089),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"loc-my-replace","loc-my-replace",(-1425878451),null),"gadjett/collections.cljc",(22),(1),(571),(571),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"smap","smap",(-2041991975),null),new cljs.core.Symbol(null,"loc","loc",(1056246626),null)], null)),null,(cljs.core.truth_(gadjett.collections.loc_my_replace)?gadjett.collections.loc_my_replace.cljs$lang$test:null)])));})()
;
/**
 * Recursively transforms `form` by replacing keys in `smap` with their
 *   values, spliced. The values in `smap` must be sequences. Like clojure.walk/prewalk-replace but supports list in values.
 * 
 * ~~~klipse
 * (my-replace '{go (go gadjett)} '(go (<! (timeout 100)) (go (<! timeout 0))))
 * ~~~
 *   
 */
(function (){
gadjett.collections.my_replace = (function gadjett$collections$my_replace(smap,form){
if(cljs.core.every_QMARK_.call(null,cljs.core.seq_QMARK_,cljs.core.vals.call(null,smap))){
} else {
throw (new Error("Assert failed: (every? seq? (vals smap))"));
}

var loc = gadjett.collections.edn_zip.call(null,form);
while(true){
if(cljs.core.truth_(clojure.zip.end_QMARK_.call(null,loc))){
return clojure.zip.root.call(null,loc);
} else {
var G__256 = clojure.zip.next.call(null,gadjett.collections.loc_my_replace.call(null,smap,loc));
loc = G__256;
continue;
}
break;
}
}); return (
new cljs.core.Var(function(){return gadjett.collections.my_replace;},new cljs.core.Symbol("gadjett.collections","my-replace","gadjett.collections/my-replace",(-533857333),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"my-replace","my-replace",(868035583),null),"gadjett/collections.cljc",(17),(1),(578),(578),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"smap","smap",(-2041991975),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null)),"Recursively transforms `form` by replacing keys in `smap` with their\n  values, spliced. The values in `smap` must be sequences. Like clojure.walk/prewalk-replace but supports list in values.\n\n~~~klipse\n(my-replace '{go (go gadjett)} '(go (<! (timeout 100)) (go (<! timeout 0))))\n~~~\n  ",(cljs.core.truth_(gadjett.collections.my_replace)?gadjett.collections.my_replace.cljs$lang$test:null)])));})()
;
(function (){
gadjett.collections.comment_QMARK_ = (function gadjett$collections$comment_QMARK_(s){
return cljs.core.re_matches.call(null,/\s*;.*/,s);
}); return (
new cljs.core.Var(function(){return gadjett.collections.comment_QMARK_;},new cljs.core.Symbol("gadjett.collections","comment?","gadjett.collections/comment?",(1963509012),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"comment?","comment?",(28866040),null),"gadjett/collections.cljc",(16),(1),(593),(593),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),null,(cljs.core.truth_(gadjett.collections.comment_QMARK_)?gadjett.collections.comment_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Removes comment lines from the end.
 * 
 * ~~~klipse
 *   ; we use (char 10) for end-of-line due to technical issues with string manipulation with `codox`
 *   (let [lines (clojure.string/join (char 10) ["  ", "aa", "  ", "bb", " 	  "])]
 *   (remove-ending-comments lines))
 * ~~~
 *   
 */
(function (){
gadjett.collections.remove_ending_comments = (function gadjett$collections$remove_ending_comments(s){
return clojure.string.join.call(null,"\n",cljs.core.reverse.call(null,cljs.core.drop_while.call(null,gadjett.collections.comment_QMARK_,cljs.core.reverse.call(null,clojure.string.split_lines.call(null,s)))));
}); return (
new cljs.core.Var(function(){return gadjett.collections.remove_ending_comments;},new cljs.core.Symbol("gadjett.collections","remove-ending-comments","gadjett.collections/remove-ending-comments",(832444010),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"remove-ending-comments","remove-ending-comments",(-1039227298),null),"gadjett/collections.cljc",(29),(1),(596),(596),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),"Removes comment lines from the end.\n\n~~~klipse\n  ; we use (char 10) for end-of-line due to technical issues with string manipulation with `codox`\n  (let [lines (clojure.string/join (char 10) [\"  \", \"aa\", \"  \", \"bb\", \" \t  \"])]\n  (remove-ending-comments lines))\n~~~\n  ",(cljs.core.truth_(gadjett.collections.remove_ending_comments)?gadjett.collections.remove_ending_comments.cljs$lang$test:null)])));})()
;
/**
 * Removes blank lines from the begining and from the end (not from the middle)
 * 
 * ~~~klipse
 *   ; we use (char 10) for end-of-line due to technical issues with string manipulation with `codox`
 *   (let [lines (clojure.string/join (char 10) ["  ", "aa", "  ", "bb", " 	  "])]
 *   (fix-blank-lines lines))
 * ~~~
 *   
 */
(function (){
gadjett.collections.fix_blank_lines = (function gadjett$collections$fix_blank_lines(s){
return clojure.string.join.call(null,"\n",cljs.core.reverse.call(null,cljs.core.drop_while.call(null,clojure.string.blank_QMARK_,cljs.core.reverse.call(null,cljs.core.drop_while.call(null,clojure.string.blank_QMARK_,clojure.string.split_lines.call(null,s))))));
}); return (
new cljs.core.Var(function(){return gadjett.collections.fix_blank_lines;},new cljs.core.Symbol("gadjett.collections","fix-blank-lines","gadjett.collections/fix-blank-lines",(-222333608),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"fix-blank-lines","fix-blank-lines",(103777612),null),"gadjett/collections.cljc",(22),(1),(612),(612),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),"Removes blank lines from the begining and from the end (not from the middle)\n\n~~~klipse\n  ; we use (char 10) for end-of-line due to technical issues with string manipulation with `codox`\n  (let [lines (clojure.string/join (char 10) [\"  \", \"aa\", \"  \", \"bb\", \" \t  \"])]\n  (fix-blank-lines lines))\n~~~\n  ",(cljs.core.truth_(gadjett.collections.fix_blank_lines)?gadjett.collections.fix_blank_lines.cljs$lang$test:null)])));})()
;
/**
 * Removes blank lines.
 * ~~~klipse
 *   ; we use (char 10) for end-of-line due to technical issues with string manipulation with `codox`
 *   (let [lines (clojure.string/join (char 10) ["  ", "aa", "  ", "bb", " 	  "])]
 *   (remove-blank-lines lines))
 * ~~~
 *   
 */
(function (){
gadjett.collections.remove_blank_lines = (function gadjett$collections$remove_blank_lines(s){
return clojure.string.join.call(null,"\n",cljs.core.remove.call(null,clojure.string.blank_QMARK_,clojure.string.split_lines.call(null,s)));
}); return (
new cljs.core.Var(function(){return gadjett.collections.remove_blank_lines;},new cljs.core.Symbol("gadjett.collections","remove-blank-lines","gadjett.collections/remove-blank-lines",(-557566878),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"remove-blank-lines","remove-blank-lines",(-1990753258),null),"gadjett/collections.cljc",(25),(1),(630),(630),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),"Removes blank lines.\n~~~klipse\n  ; we use (char 10) for end-of-line due to technical issues with string manipulation with `codox`\n  (let [lines (clojure.string/join (char 10) [\"  \", \"aa\", \"  \", \"bb\", \" \t  \"])]\n  (remove-blank-lines lines))\n~~~\n  ",(cljs.core.truth_(gadjett.collections.remove_blank_lines)?gadjett.collections.remove_blank_lines.cljs$lang$test:null)])));})()
;
/**
 * 
 * (clojurescript only)
 * 
 * Compacts an expression by taking only the first `max-elements-in-coll` from collections and first `max-chars-in-str` from strings. Functions are displayed as "lambda()".
 * 
 * It works recursively. It is useful for logging and reporting.
 * 
 * Default settings:
 * 
 * - `max-elements-in-coll` 10
 * - `max-chars-in-str` 20
 * 
 * ~~~klipse
 * (compact {:infinite-list (range)
 *        :long-str "a very very very very long string - too long to be true"
 *                                                    :long-map (zipmap (range 100) (range 100))
 *                                                      :function #(+ 1 2)})
 * ~~~
 *                
 */
(function (){
gadjett.collections.compact = (function gadjett$collections$compact(var_args){
var args__23658__auto__ = [];
var len__23656__auto___262 = arguments.length;
var i__23657__auto___263 = (0);
while(true){
if((i__23657__auto___263 < len__23656__auto___262)){
args__23658__auto__.push((arguments[i__23657__auto___263]));

var G__264 = (i__23657__auto___263 + (1));
i__23657__auto___263 = G__264;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((1) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((1)),(0),null)):null);
return gadjett.collections.compact.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return gadjett.collections.compact;},new cljs.core.Symbol("gadjett.collections","compact","gadjett.collections/compact",(-1737491635),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"compact","compact",(1291799377),null),"gadjett/collections.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"max-elements-in-coll","max-elements-in-coll",(-435962998),null),(10),new cljs.core.Symbol(null,"max-chars-in-str","max-chars-in-str",(1458049327),null),(20)], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"max-elements-in-coll","max-elements-in-coll",(-435962998),null),new cljs.core.Symbol(null,"max-chars-in-str","max-chars-in-str",(1458049327),null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"max-elements-in-coll","max-elements-in-coll",(-435962998),null),(10),new cljs.core.Symbol(null,"max-chars-in-str","max-chars-in-str",(1458049327),null),(20)], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"max-elements-in-coll","max-elements-in-coll",(-435962998),null),new cljs.core.Symbol(null,"max-chars-in-str","max-chars-in-str",(1458049327),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(5),(645),(645),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"max-elements-in-coll","max-elements-in-coll",(-435962998),null),(10),new cljs.core.Symbol(null,"max-chars-in-str","max-chars-in-str",(1458049327),null),(20)], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"max-elements-in-coll","max-elements-in-coll",(-435962998),null),new cljs.core.Symbol(null,"max-chars-in-str","max-chars-in-str",(1458049327),null)], null)], null)], null)),"\n(clojurescript only)\n\nCompacts an expression by taking only the first `max-elements-in-coll` from collections and first `max-chars-in-str` from strings. Functions are displayed as \"lambda()\".\n\nIt works recursively. It is useful for logging and reporting.\n\nDefault settings:\n\n- `max-elements-in-coll` 10\n- `max-chars-in-str` 20\n\n~~~klipse\n(compact {:infinite-list (range)\n          :long-str \"a very very very very long string - too long to be true\"\n                                                      :long-map (zipmap (range 100) (range 100))\n                                                        :function #(+ 1 2)})\n~~~\n                  ",(cljs.core.truth_(gadjett.collections.compact)?gadjett.collections.compact.cljs$lang$test:null)])));})()
;

gadjett.collections.compact.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__259){
var map__260 = p__259;
var map__260__$1 = ((((!((map__260 == null)))?((((map__260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__260.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__260):map__260);
var args = map__260__$1;
var max_elements_in_coll = cljs.core.get.call(null,map__260__$1,new cljs.core.Keyword(null,"max-elements-in-coll","max-elements-in-coll",(-2076494525)),(10));
var max_chars_in_str = cljs.core.get.call(null,map__260__$1,new cljs.core.Keyword(null,"max-chars-in-str","max-chars-in-str",(-182482200)),(20));
if(cljs.core._EQ_.call(null,x,true)){
return x;
} else {
if(cljs.core._EQ_.call(null,x,false)){
return x;
} else {
if((x == null)){
return x;
} else {
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.subs.call(null,x,(0),max_chars_in_str);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return gadjett.collections.take_from_map.call(null,max_elements_in_coll,gadjett.collections.map_object.call(null,((function (map__260,map__260__$1,args,max_elements_in_coll,max_chars_in_str){
return (function (p1__14_SHARP_){
return gadjett.collections.compact.call(null,p1__14_SHARP_,args);
});})(map__260,map__260__$1,args,max_elements_in_coll,max_chars_in_str))
,x));
} else {
if(cljs.core.seqable_QMARK_.call(null,x)){
return cljs.core.take.call(null,max_elements_in_coll,cljs.core.map.call(null,((function (map__260,map__260__$1,args,max_elements_in_coll,max_chars_in_str){
return (function (p1__15_SHARP_){
return gadjett.collections.compact.call(null,p1__15_SHARP_,args);
});})(map__260,map__260__$1,args,max_elements_in_coll,max_chars_in_str))
,x));
} else {
if(cljs.core.array_QMARK_.call(null,x)){
return [cljs.core.str("***["),cljs.core.str(cljs.core.type.call(null,x)),cljs.core.str("]***")].join('');
} else {
if(cljs.core._EQ_.call(null,Function,cljs.core.type.call(null,x))){
return "lambda()";
} else {
if((x instanceof Object)){
return [cljs.core.str("***["),cljs.core.str(cljs.core.subs.call(null,[cljs.core.str(cljs.core.type.call(null,x))].join(''),(0),(15))),cljs.core.str("]***")].join('');
} else {
return [cljs.core.str("***["),cljs.core.str(cljs.core.type.call(null,x)),cljs.core.str("]***")].join('');

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
});

gadjett.collections.compact.cljs$lang$maxFixedArity = (1);

gadjett.collections.compact.cljs$lang$applyTo = (function (seq257){
var G__258 = cljs.core.first.call(null,seq257);
var seq257__$1 = cljs.core.next.call(null,seq257);
return gadjett.collections.compact.cljs$core$IFn$_invoke$arity$variadic(G__258,seq257__$1);
});

new cljs.core.Var(function(){return gadjett.collections.compact;},new cljs.core.Symbol("gadjett.collections","compact","gadjett.collections/compact",(-1737491635),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"gadjett.collections","gadjett.collections",(540992196),null),new cljs.core.Symbol(null,"compact","compact",(1291799377),null),"gadjett/collections.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"max-elements-in-coll","max-elements-in-coll",(-435962998),null),(10),new cljs.core.Symbol(null,"max-chars-in-str","max-chars-in-str",(1458049327),null),(20)], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"max-elements-in-coll","max-elements-in-coll",(-435962998),null),new cljs.core.Symbol(null,"max-chars-in-str","max-chars-in-str",(1458049327),null)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"max-elements-in-coll","max-elements-in-coll",(-435962998),null),(10),new cljs.core.Symbol(null,"max-chars-in-str","max-chars-in-str",(1458049327),null),(20)], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"max-elements-in-coll","max-elements-in-coll",(-435962998),null),new cljs.core.Symbol(null,"max-chars-in-str","max-chars-in-str",(1458049327),null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(5),(645),(645),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"max-elements-in-coll","max-elements-in-coll",(-435962998),null),(10),new cljs.core.Symbol(null,"max-chars-in-str","max-chars-in-str",(1458049327),null),(20)], null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"max-elements-in-coll","max-elements-in-coll",(-435962998),null),new cljs.core.Symbol(null,"max-chars-in-str","max-chars-in-str",(1458049327),null)], null)], null)], null)),"\n(clojurescript only)\n\nCompacts an expression by taking only the first `max-elements-in-coll` from collections and first `max-chars-in-str` from strings. Functions are displayed as \"lambda()\".\n\nIt works recursively. It is useful for logging and reporting.\n\nDefault settings:\n\n- `max-elements-in-coll` 10\n- `max-chars-in-str` 20\n\n~~~klipse\n(compact {:infinite-list (range)\n          :long-str \"a very very very very long string - too long to be true\"\n                                                      :long-map (zipmap (range 100) (range 100))\n                                                        :function #(+ 1 2)})\n~~~\n                  ",(cljs.core.truth_(gadjett.collections.compact)?gadjett.collections.compact.cljs$lang$test:null)]));
