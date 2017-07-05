goog.provide("cljs_time.coerce");

/**
 * @interface
 */
(function (){
cljs_time.coerce.ICoerce = function(){}; return (
new cljs.core.Var(function(){return cljs_time.coerce.ICoerce;},new cljs.core.Symbol("cljs-time.coerce","ICoerce","cljs-time.coerce/ICoerce",(1045530708),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs-time.coerce","cljs-time.coerce",(-114085230),null),new cljs.core.Symbol(null,"ICoerce","ICoerce",(504356855),null),"cljs_time/coerce.cljs",(21),(1),(22),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.with_meta(new cljs.core.Symbol(null,"to-date-time","to-date-time",(-577515335),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Convert `obj` to a goog.date.DateTime instance."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",(-1672671807),null)], null)], null)])], null),(22),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(cljs_time.coerce.ICoerce)?cljs_time.coerce.ICoerce.cljs$lang$test:null)])));})()
;

/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
(function (){
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((!((obj == null))) && (!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__24343__auto__ = (((obj == null))?null:obj);
var m__24344__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,obj);
} else {
var m__24344__auto____$1 = (cljs_time.coerce.to_date_time["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ICoerce.to-date-time",obj);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.coerce.to_date_time;},new cljs.core.Symbol("cljs-time.coerce","to-date-time","cljs-time.coerce/to-date-time",(1011457370),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.coerce","ICoerce","cljs-time.coerce/ICoerce",(1045530708),null),new cljs.core.Symbol(null,"cljs-time.coerce","cljs-time.coerce",(-114085230),null),new cljs.core.Symbol(null,"to-date-time","to-date-time",(-577515335),null),"cljs_time/coerce.cljs",(16),(1),(22),(23),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",(-1672671807),null)], null)),"Convert `obj` to a goog.date.DateTime instance.",(cljs.core.truth_(cljs_time.coerce.to_date_time)?cljs_time.coerce.to_date_time.cljs$lang$test:null)])));})()
;

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
(function (){
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__538 = millis;
if((G__538 == null)){
return null;
} else {
return goog.date.UtcDateTime.fromTimestamp.call(null,G__538);
}
}); return (
new cljs.core.Var(function(){return cljs_time.coerce.from_long;},new cljs.core.Symbol("cljs-time.coerce","from-long","cljs-time.coerce/from-long",(300425399),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.coerce","cljs-time.coerce",(-114085230),null),new cljs.core.Symbol(null,"from-long","from-long",(825654230),null),"cljs_time/coerce.cljs",(16),(1),(25),(25),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"millis","millis",(302243140),null)], null)),"Returns a DateTime instance in the UTC time zone corresponding to the given\n  number of milliseconds after the Unix epoch.",(cljs.core.truth_(cljs_time.coerce.from_long)?cljs_time.coerce.from_long.cljs$lang$test:null)])));})()
;
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
(function (){
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first.call(null,(function (){var iter__24492__auto__ = (function cljs_time$coerce$from_string_$_iter__547(s__548){
return (new cljs.core.LazySeq(null,(function (){
var s__548__$1 = s__548;
while(true){
var temp__22562__auto__ = cljs.core.seq.call(null,s__548__$1);
if(temp__22562__auto__){
var s__548__$2 = temp__22562__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__548__$2)){
var c__24490__auto__ = cljs.core.chunk_first.call(null,s__548__$2);
var size__24491__auto__ = cljs.core.count.call(null,c__24490__auto__);
var b__550 = cljs.core.chunk_buffer.call(null,size__24491__auto__);
if((function (){var i__549 = (0);
while(true){
if((i__549 < size__24491__auto__)){
var f = cljs.core._nth.call(null,c__24490__auto__,i__549);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e553){if((e553 instanceof Error)){
var _ = e553;
return null;
} else {
throw e553;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__550,d);

var G__555 = (i__549 + (1));
i__549 = G__555;
continue;
} else {
var G__556 = (i__549 + (1));
i__549 = G__556;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__550),cljs_time$coerce$from_string_$_iter__547.call(null,cljs.core.chunk_rest.call(null,s__548__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__550),null);
}
} else {
var f = cljs.core.first.call(null,s__548__$2);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e554){if((e554 instanceof Error)){
var _ = e554;
return null;
} else {
throw e554;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$coerce$from_string_$_iter__547.call(null,cljs.core.rest.call(null,s__548__$2)));
} else {
var G__557 = cljs.core.rest.call(null,s__548__$2);
s__548__$1 = G__557;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24492__auto__.call(null,cljs.core.vals.call(null,cljs_time.format.formatters));
})());
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return cljs_time.coerce.from_string;},new cljs.core.Symbol("cljs-time.coerce","from-string","cljs-time.coerce/from-string",(1763846058),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.coerce","cljs-time.coerce",(-114085230),null),new cljs.core.Symbol(null,"from-string","from-string",(1323887819),null),"cljs_time/coerce.cljs",(18),(1),(31),(31),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),"Returns DateTime instance from string using formatters in cljs-time.format,\n  returning first which parses",(cljs.core.truth_(cljs_time.coerce.from_string)?cljs_time.coerce.from_string.cljs$lang$test:null)])));})()
;
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
(function (){
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__559 = date;
var G__559__$1 = (((G__559 == null))?null:G__559.getTime());
if((G__559__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long.call(null,G__559__$1);
}
}); return (
new cljs.core.Var(function(){return cljs_time.coerce.from_date;},new cljs.core.Symbol("cljs-time.coerce","from-date","cljs-time.coerce/from-date",(1487726084),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.coerce","cljs-time.coerce",(-114085230),null),new cljs.core.Symbol(null,"from-date","from-date",(-1184485977),null),"cljs_time/coerce.cljs",(16),(1),(41),(41),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"date","date",(177097065),null)], null)),"Returns a DateTime instance in the UTC time zone corresponding to the given\n  js Date object.",(cljs.core.truth_(cljs_time.coerce.from_date)?cljs_time.coerce.from_date.cljs$lang$test:null)])));})()
;
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
(function (){
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__561 = obj;
var G__561__$1 = (((G__561 == null))?null:cljs_time.coerce.to_date_time.call(null,G__561));
if((G__561__$1 == null)){
return null;
} else {
return G__561__$1.getTime();
}
}); return (
new cljs.core.Var(function(){return cljs_time.coerce.to_long;},new cljs.core.Symbol("cljs-time.coerce","to-long","cljs-time.coerce/to-long",(-1005247323),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.coerce","cljs-time.coerce",(-114085230),null),new cljs.core.Symbol(null,"to-long","to-long",(619671366),null),"cljs_time/coerce.cljs",(14),(1),(47),(47),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",(-1672671807),null)], null)),"Convert `obj` to the number of milliseconds after the Unix epoch.",(cljs.core.truth_(cljs_time.coerce.to_long)?cljs_time.coerce.to_long.cljs$lang$test:null)])));})()
;
/**
 * Convert `obj` to Unix epoch.
 */
(function (){
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long.call(null,obj);
var and__23164__auto__ = millis;
if(cljs.core.truth_(and__23164__auto__)){
return cljs.core.quot.call(null,millis,(1000));
} else {
return and__23164__auto__;
}
}); return (
new cljs.core.Var(function(){return cljs_time.coerce.to_epoch;},new cljs.core.Symbol("cljs-time.coerce","to-epoch","cljs-time.coerce/to-epoch",(-1832242544),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.coerce","cljs-time.coerce",(-114085230),null),new cljs.core.Symbol(null,"to-epoch","to-epoch",(-1299413441),null),"cljs_time/coerce.cljs",(15),(1),(52),(52),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",(-1672671807),null)], null)),"Convert `obj` to Unix epoch.",(cljs.core.truth_(cljs_time.coerce.to_epoch)?cljs_time.coerce.to_epoch.cljs$lang$test:null)])));})()
;
/**
 * Convert `obj` to a JavaScript Date instance.
 */
(function (){
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__563 = obj;
var G__563__$1 = (((G__563 == null))?null:cljs_time.coerce.to_date_time.call(null,G__563));
var G__563__$2 = (((G__563__$1 == null))?null:G__563__$1.getTime());
if((G__563__$2 == null)){
return null;
} else {
return (new Date(G__563__$2));
}
}); return (
new cljs.core.Var(function(){return cljs_time.coerce.to_date;},new cljs.core.Symbol("cljs-time.coerce","to-date","cljs-time.coerce/to-date",(1610443502),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.coerce","cljs-time.coerce",(-114085230),null),new cljs.core.Symbol(null,"to-date","to-date",(2141380175),null),"cljs_time/coerce.cljs",(14),(1),(58),(58),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",(-1672671807),null)], null)),"Convert `obj` to a JavaScript Date instance.",(cljs.core.truth_(cljs_time.coerce.to_date)?cljs_time.coerce.to_date.cljs$lang$test:null)])));})()
;
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
(function (){
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__565 = obj;
var G__565__$1 = (((G__565 == null))?null:cljs_time.coerce.to_date_time.call(null,G__565));
if((G__565__$1 == null)){
return null;
} else {
return cljs_time.format.unparse.call(null,new cljs.core.Keyword(null,"date-time","date-time",(177938180)).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__565__$1);
}
}); return (
new cljs.core.Var(function(){return cljs_time.coerce.to_string;},new cljs.core.Symbol("cljs-time.coerce","to-string","cljs-time.coerce/to-string",(-866803955),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.coerce","cljs-time.coerce",(-114085230),null),new cljs.core.Symbol(null,"to-string","to-string",(-333755794),null),"cljs_time/coerce.cljs",(16),(1),(63),(63),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",(-1672671807),null)], null)),"Returns a string representation of obj in UTC time-zone\n  using \"yyyy-MM-dd'T'HH:mm:ss.SSSZZ\" date-time representation.",(cljs.core.truth_(cljs_time.coerce.to_string)?cljs_time.coerce.to_string.cljs$lang$test:null)])));})()
;
/**
 * Convert `obj` to a goog.date.Date instance
 */
(function (){
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
if(cljs.core._EQ_.call(null,goog.date.Date,cljs.core.type.call(null,obj))){
return obj;
} else {
var temp__22382__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__22382__auto__)){
var dt = temp__22382__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
}
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return cljs_time.coerce.to_local_date;},new cljs.core.Symbol("cljs-time.coerce","to-local-date","cljs-time.coerce/to-local-date",(-65020103),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.coerce","cljs-time.coerce",(-114085230),null),new cljs.core.Symbol(null,"to-local-date","to-local-date",(-589010330),null),"cljs_time/coerce.cljs",(20),(1),(71),(71),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",(-1672671807),null)], null)),"Convert `obj` to a goog.date.Date instance",(cljs.core.truth_(cljs_time.coerce.to_local_date)?cljs_time.coerce.to_local_date.cljs$lang$test:null)])));})()
;
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
(function (){
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__22382__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__22382__auto__)){
var dt = temp__22382__auto__;
var G__567 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__567.setHours(dt.getHours());

G__567.setMinutes(dt.getMinutes());

G__567.setSeconds(dt.getSeconds());

G__567.setMilliseconds(dt.getMilliseconds());

return G__567;
} else {
return null;
}
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return cljs_time.coerce.to_local_date_time;},new cljs.core.Symbol("cljs-time.coerce","to-local-date-time","cljs-time.coerce/to-local-date-time",(-2048812149),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.coerce","cljs-time.coerce",(-114085230),null),new cljs.core.Symbol(null,"to-local-date-time","to-local-date-time",(1708911850),null),"cljs_time/coerce.cljs",(25),(1),(80),(80),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",(-1672671807),null)], null)),"Convert `obj` to a goog.date.DateTime instance",(cljs.core.truth_(cljs_time.coerce.to_local_date_time)?cljs_time.coerce.to_local_date_time.cljs$lang$test:null)])));})()
;
(cljs_time.coerce.ICoerce["null"] = true);

(cljs_time.coerce.to_date_time["null"] = (function (_){
return null;
}));

Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date.call(null,date__$1);
});

goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone.call(null,local_date__$1);
} else {
return null;
}
});

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone.call(null,local_date_time__$1);
} else {
return null;
}
});

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
});

(cljs_time.coerce.ICoerce["number"] = true);

(cljs_time.coerce.to_date_time["number"] = (function (long$){
return cljs_time.coerce.from_long.call(null,long$);
}));

(cljs_time.coerce.ICoerce["string"] = true);

(cljs_time.coerce.to_date_time["string"] = (function (string){
return cljs_time.coerce.from_string.call(null,string);
}));
