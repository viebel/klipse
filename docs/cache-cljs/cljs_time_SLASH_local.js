goog.provide("cljs_time.local");
/**
 * Map of local formatters for parsing and printing.
 */
(function (){
cljs_time.local._STAR_local_formatters_STAR_ = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__568){
var vec__569 = p__568;
var k = cljs.core.nth.call(null,vec__569,(0),null);
var f = cljs.core.nth.call(null,vec__569,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,f)),new cljs.core.Keyword("fmt","formatter","fmt/formatter",(-483947944))))?cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",(-1543495310))], null),((function (vec__569,k,f){
return (function (p1__17_SHARP_){
return cljs_time.core.to_default_time_zone.call(null,p1__17_SHARP_);
});})(vec__569,k,f))
):f)], null);
}),cljs_time.format.formatters)); return (
new cljs.core.Var(function(){return cljs_time.local._STAR_local_formatters_STAR_;},new cljs.core.Symbol("cljs-time.local","*local-formatters*","cljs-time.local/*local-formatters*",(1823466099),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.local","cljs-time.local",(-2051355691),null),new cljs.core.Symbol(null,"*local-formatters*","*local-formatters*",(-821084148),null),"cljs_time/local.cljs",(21),(1),true,(33),(34),cljs.core.List.EMPTY,"Map of local formatters for parsing and printing.",(cljs.core.truth_(cljs_time.local._STAR_local_formatters_STAR_)?cljs_time.local._STAR_local_formatters_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Returns a DateTime for the current instant in the default time zone.
 */
(function (){
cljs_time.local.local_now = (function cljs_time$local$local_now(){
return cljs_time.core.time_now.call(null);
}); return (
new cljs.core.Var(function(){return cljs_time.local.local_now;},new cljs.core.Symbol("cljs-time.local","local-now","cljs-time.local/local-now",(2080242025),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.local","cljs-time.local",(-2051355691),null),new cljs.core.Symbol(null,"local-now","local-now",(475880364),null),"cljs_time/local.cljs",(16),(1),(42),(42),cljs.core.list(cljs.core.PersistentVector.EMPTY),"Returns a DateTime for the current instant in the default time zone.",(cljs.core.truth_(cljs_time.local.local_now)?cljs_time.local.local_now.cljs$lang$test:null)])));})()
;

/**
 * @interface
 */
(function (){
cljs_time.local.ILocalCoerce = function(){}; return (
new cljs.core.Var(function(){return cljs_time.local.ILocalCoerce;},new cljs.core.Symbol("cljs-time.local","ILocalCoerce","cljs-time.local/ILocalCoerce",(-821426301),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs-time.local","cljs-time.local",(-2051355691),null),new cljs.core.Symbol(null,"ILocalCoerce","ILocalCoerce",(1823139400),null),"cljs_time/local.cljs",(26),(1),(47),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.with_meta(new cljs.core.Symbol(null,"to-local-date-time","to-local-date-time",(1708911850),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"convert `obj` to a local goog.date\n                             DateTime instance retaining time fields."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",(-1672671807),null)], null)], null)])], null),(47),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(cljs_time.local.ILocalCoerce)?cljs_time.local.ILocalCoerce.cljs$lang$test:null)])));})()
;

/**
 * convert `obj` to a local goog.date
 *                           DateTime instance retaining time fields.
 */
(function (){
cljs_time.local.to_local_date_time = (function cljs_time$local$to_local_date_time(obj){
if((!((obj == null))) && (!((obj.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 == null)))){
return obj.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1(obj);
} else {
var x__24343__auto__ = (((obj == null))?null:obj);
var m__24344__auto__ = (cljs_time.local.to_local_date_time[goog.typeOf(x__24343__auto__)]);
if(!((m__24344__auto__ == null))){
return m__24344__auto__.call(null,obj);
} else {
var m__24344__auto____$1 = (cljs_time.local.to_local_date_time["_"]);
if(!((m__24344__auto____$1 == null))){
return m__24344__auto____$1.call(null,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalCoerce.to-local-date-time",obj);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs_time.local.to_local_date_time;},new cljs.core.Symbol("cljs-time.local","to-local-date-time","cljs-time.local/to-local-date-time",(-918844073),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs-time.local","ILocalCoerce","cljs-time.local/ILocalCoerce",(-821426301),null),new cljs.core.Symbol(null,"cljs-time.local","cljs-time.local",(-2051355691),null),new cljs.core.Symbol(null,"to-local-date-time","to-local-date-time",(1708911850),null),"cljs_time/local.cljs",(22),(1),(47),(48),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",(-1672671807),null)], null)),"convert `obj` to a local goog.date\n                             DateTime instance retaining time fields.",(cljs.core.truth_(cljs_time.local.to_local_date_time)?cljs_time.local.to_local_date_time.cljs$lang$test:null)])));})()
;

/**
 * Coerce to date-time in the default time zone retaining time fields.
 */
(function (){
cljs_time.local.as_local_date_time_from_time_zone = (function cljs_time$local$as_local_date_time_from_time_zone(obj){
return cljs_time.coerce.to_local_date_time.call(null,cljs_time.coerce.to_date_time.call(null,obj));
}); return (
new cljs.core.Var(function(){return cljs_time.local.as_local_date_time_from_time_zone;},new cljs.core.Symbol("cljs-time.local","as-local-date-time-from-time-zone","cljs-time.local/as-local-date-time-from-time-zone",(2031749712),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs-time.local","cljs-time.local",(-2051355691),null),new cljs.core.Symbol(null,"as-local-date-time-from-time-zone","as-local-date-time-from-time-zone",(481995247),null),"cljs_time/local.cljs",(41),(1),(51),(51),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",(-1672671807),null)], null)),"Coerce to date-time in the default time zone retaining time fields.",(cljs.core.truth_(cljs_time.local.as_local_date_time_from_time_zone)?cljs_time.local.as_local_date_time_from_time_zone.cljs$lang$test:null)])));})()
;
/**
 * Coerce to date-time in the default time zone.
 */
(function (){
cljs_time.local.as_local_date_time_to_time_zone = (function cljs_time$local$as_local_date_time_to_time_zone(obj){
return cljs_time.core.to_default_time_zone.call(null,cljs_time.coerce.to_date_time.call(null,obj));
}); return (
new cljs.core.Var(function(){return cljs_time.local.as_local_date_time_to_time_zone;},new cljs.core.Symbol("cljs-time.local","as-local-date-time-to-time-zone","cljs-time.local/as-local-date-time-to-time-zone",(698565431),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs-time.local","cljs-time.local",(-2051355691),null),new cljs.core.Symbol(null,"as-local-date-time-to-time-zone","as-local-date-time-to-time-zone",(-1945903760),null),"cljs_time/local.cljs",(39),(1),(56),(56),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",(-1672671807),null)], null)),"Coerce to date-time in the default time zone.",(cljs.core.truth_(cljs_time.local.as_local_date_time_to_time_zone)?cljs_time.local.as_local_date_time_to_time_zone.cljs$lang$test:null)])));})()
;
/**
 * Return local DateTime instance from string using
 *   formatters in *local-formatters*, returning first
 *   which parses.
 */
(function (){
cljs_time.local.from_local_string = (function cljs_time$local$from_local_string(s){
return cljs.core.first.call(null,(function (){var iter__24492__auto__ = (function cljs_time$local$from_local_string_$_iter__580(s__581){
return (new cljs.core.LazySeq(null,(function (){
var s__581__$1 = s__581;
while(true){
var temp__22562__auto__ = cljs.core.seq.call(null,s__581__$1);
if(temp__22562__auto__){
var s__581__$2 = temp__22562__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__581__$2)){
var c__24490__auto__ = cljs.core.chunk_first.call(null,s__581__$2);
var size__24491__auto__ = cljs.core.count.call(null,c__24490__auto__);
var b__583 = cljs.core.chunk_buffer.call(null,size__24491__auto__);
if((function (){var i__582 = (0);
while(true){
if((i__582 < size__24491__auto__)){
var f = cljs.core._nth.call(null,c__24490__auto__,i__582);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e586){if((e586 instanceof Error)){
var _ = e586;
return null;
} else {
throw e586;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__583,d);

var G__588 = (i__582 + (1));
i__582 = G__588;
continue;
} else {
var G__589 = (i__582 + (1));
i__582 = G__589;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__583),cljs_time$local$from_local_string_$_iter__580.call(null,cljs.core.chunk_rest.call(null,s__581__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__583),null);
}
} else {
var f = cljs.core.first.call(null,s__581__$2);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e587){if((e587 instanceof Error)){
var _ = e587;
return null;
} else {
throw e587;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$local$from_local_string_$_iter__580.call(null,cljs.core.rest.call(null,s__581__$2)));
} else {
var G__590 = cljs.core.rest.call(null,s__581__$2);
s__581__$1 = G__590;
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
return iter__24492__auto__.call(null,cljs.core.vals.call(null,cljs_time.local._STAR_local_formatters_STAR_));
})());
}); return (
new cljs.core.Var(function(){return cljs_time.local.from_local_string;},new cljs.core.Symbol("cljs-time.local","from-local-string","cljs-time.local/from-local-string",(-1015280031),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs-time.local","cljs-time.local",(-2051355691),null),new cljs.core.Symbol(null,"from-local-string","from-local-string",(-1478512732),null),"cljs_time/local.cljs",(25),(1),(61),(61),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),"Return local DateTime instance from string using\n  formatters in *local-formatters*, returning first\n  which parses.",(cljs.core.truth_(cljs_time.local.from_local_string)?cljs_time.local.from_local_string.cljs$lang$test:null)])));})()
;
(cljs_time.local.ILocalCoerce["null"] = true);

(cljs_time.local.to_local_date_time["null"] = (function (_){
return null;
}));

Date.prototype.cljs_time$local$ILocalCoerce$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.local.as_local_date_time_from_time_zone.call(null,cljs_time.coerce.to_date_time.call(null,date__$1));
});

goog.date.DateTime.prototype.cljs_time$local$ILocalCoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return cljs_time.local.as_local_date_time_from_time_zone.call(null,date_time__$1);
});

(cljs_time.local.ILocalCoerce["number"] = true);

(cljs_time.local.to_local_date_time["number"] = (function (long$){
return cljs_time.local.as_local_date_time_from_time_zone.call(null,long$);
}));

(cljs_time.local.ILocalCoerce["string"] = true);

(cljs_time.local.to_local_date_time["string"] = (function (string){
return cljs_time.local.from_local_string.call(null,string);
}));
/**
 * Format obj as local time using the local formatter corresponding
 *   to format-key.
 */
(function (){
cljs_time.local.format_local_time = (function cljs_time$local$format_local_time(obj,format_key){
var temp__22562__auto__ = cljs_time.local.to_local_date_time.call(null,obj);
if(cljs.core.truth_(temp__22562__auto__)){
var dt = temp__22562__auto__;
var temp__22562__auto____$1 = format_key.call(null,cljs_time.local._STAR_local_formatters_STAR_);
if(cljs.core.truth_(temp__22562__auto____$1)){
var fmt = temp__22562__auto____$1;
return cljs_time.format.unparse.call(null,fmt,dt);
} else {
return null;
}
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return cljs_time.local.format_local_time;},new cljs.core.Symbol("cljs-time.local","format-local-time","cljs-time.local/format-local-time",(-875687153),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.local","cljs-time.local",(-2051355691),null),new cljs.core.Symbol(null,"format-local-time","format-local-time",(1852748116),null),"cljs_time/local.cljs",(24),(1),(92),(92),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",(-1672671807),null),new cljs.core.Symbol(null,"format-key","format-key",(1138661308),null)], null)),"Format obj as local time using the local formatter corresponding\n  to format-key.",(cljs.core.truth_(cljs_time.local.format_local_time)?cljs_time.local.format_local_time.cljs$lang$test:null)])));})()
;
