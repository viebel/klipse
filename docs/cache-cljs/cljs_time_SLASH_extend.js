goog.provide("cljs_time.extend");
(function (){
cljs_time.extend.hash_parts = (function cljs_time$extend$hash_parts(type_hash,ms_since_epoch,offset){
var ms_shifted = (ms_since_epoch * (100000));
var adj_offset = (offset + (720));
var type_offset = (type_hash * (10000));
return ((ms_shifted + adj_offset) + type_offset);
}); return (
new cljs.core.Var(function(){return cljs_time.extend.hash_parts;},new cljs.core.Symbol("cljs-time.extend","hash-parts","cljs-time.extend/hash-parts",(1122576855),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs-time.extend","cljs-time.extend",(436341608),null),new cljs.core.Symbol(null,"hash-parts","hash-parts",(1828738135),null),"cljs_time/extend.cljs",(17),(1),(17),(17),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-hash","type-hash",(294693254),null),new cljs.core.Symbol(null,"ms-since-epoch","ms-since-epoch",(-1219264518),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null)], null)),null,(cljs.core.truth_(cljs_time.extend.hash_parts)?cljs_time.extend.hash_parts.cljs$lang$test:null)])));})()
;
goog.date.Date.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var o__$1 = this;
var and__23164__auto__ = (other instanceof goog.date.Date);
if(and__23164__auto__){
return o__$1.equals(other);
} else {
return and__23164__auto__;
}
});

goog.date.Date.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.extend.hash_parts.call(null,(1),this$__$1.getTime(),this$__$1.getTimezoneOffset());
});

goog.date.Date.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs$core$IComparable$_compare$arity$2 = (function (o,other){
var o__$1 = this;
return cljs_time.core.compare_local_dates.call(null,o__$1,other);
});
goog.date.DateTime.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var o__$1 = this;
return ((other instanceof goog.date.DateTime)) && ((o__$1.getTime() === other.getTime())) && ((o__$1.getTimezoneOffset() === other.getTimezoneOffset()));
});

goog.date.DateTime.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.extend.hash_parts.call(null,(2),this$__$1.getTime(),this$__$1.getTimezoneOffset());
});

goog.date.DateTime.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs$core$IComparable$_compare$arity$2 = (function (o,other){
var o__$1 = this;
return (o__$1.getTime() - other.getTime());
});
goog.date.UtcDateTime.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var o__$1 = this;
return ((other instanceof goog.date.UtcDateTime)) && ((o__$1.getTime() === other.getTime())) && ((o__$1.getTimezoneOffset() === other.getTimezoneOffset()));
});

goog.date.UtcDateTime.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.extend.hash_parts.call(null,(3),this$__$1.getTime(),this$__$1.getTimezoneOffset());
});

goog.date.UtcDateTime.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs$core$IComparable$_compare$arity$2 = (function (o,other){
var o__$1 = this;
return (o__$1.getTime() - other.getTime());
});
